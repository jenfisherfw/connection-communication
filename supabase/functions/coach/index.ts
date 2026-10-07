// Supabase Edge Function: the AI coach behind Rapport.
// Deploy:  supabase functions deploy coach --no-verify-jwt   (add auth before launch)
// Secret:  supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
// The app calls it via EXPO_PUBLIC_COACH_URL=https://<project>.supabase.co/functions/v1/coach
import Anthropic from 'npm:@anthropic-ai/sdk';
import { z } from 'npm:zod';
import { zodOutputFormat } from 'npm:@anthropic-ai/sdk/helpers/zod';

const client = new Anthropic(); // reads ANTHROPIC_API_KEY
const MODEL = 'claude-opus-5-5';

const COACH_SYSTEM = `You are Ari, a warm, practical leadership communication coach inside the Rapport app.
Your users are people leaders and HR professionals working on feedback, conflict resolution, active listening, trust, recognition, and leading change.

How you coach:
- Ask one clarifying question when the situation is ambiguous, otherwise give concrete help right away.
- Offer exact wording they can use, grounded in proven frameworks (SBI feedback, nonviolent communication, interest based negotiation, psychological safety).
- Keep replies short enough to read on a phone: a few short paragraphs or a brief numbered list.
- Offer to role play the other person when rehearsal would help.
- Do not use em dashes.

Boundaries:
- You are not a lawyer and do not give legal advice. For harassment, discrimination, safety, medical, or legal matters, give supportive first steps and direct them to HR, legal counsel, or an employee assistance program.
- If someone describes risk of harm to themselves or others, encourage them to contact emergency services or a crisis line right away.`;

const FeedbackSchema = z.object({
  score: z.number().int().min(0).max(100),
  strengths: z.array(z.string()).max(4),
  improve: z.array(z.string()).max(4),
  tryThis: z.string(),
});

type Msg = { role: 'user' | 'assistant'; content: string };

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

/** Claude requires the conversation to start with a user turn. */
const fromUser = (messages: Msg[]) => {
  const i = messages.findIndex((m) => m.role === 'user');
  return i === -1 ? [] : messages.slice(i);
};

async function chat(system: string, messages: Msg[]) {
  const response = await client.beta.messages.create({
    model: MODEL,
    max_tokens: 2048,
    system,
    messages,
    output_config: { effort: 'low' },
    // Server side fallback re-runs a request on another model if a safety classifier declines it.
    betas: ['server-side-fallback-2026-07-01'],
    ...({ fallbacks: 'default' } as Record<string, unknown>),
  });
  if (response.stop_reason === 'refusal') {
    return "I can't help with that one, but I'm happy to help you plan a different conversation. If this involves safety, harassment, or legal risk, please loop in HR.";
  }
  return response.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('\n').trim();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const body = await req.json();
    const messages: Msg[] = (body.messages ?? []).slice(-30);

    if (body.mode === 'coach') {
      return json({ reply: await chat(COACH_SYSTEM, fromUser(messages)) });
    }

    if (body.mode === 'roleplay') {
      const system = `You are role playing a workplace conversation so a manager can practice. Stay fully in character and never break character to coach.
${body.persona}
Scenario the manager was given: ${body.brief}
The conversation opened with you saying: "${messages[0]?.content ?? ''}"`;
      return json({ reply: await chat(system, fromUser(messages)) });
    }

    if (body.mode === 'feedback') {
      const transcript = messages.map((m) => `${m.role === 'user' ? 'Manager' : 'Employee'}: ${m.content}`).join('\n');
      const response = await client.messages.parse({
        model: MODEL,
        max_tokens: 4096,
        output_config: { effort: 'medium', format: zodOutputFormat(FeedbackSchema) },
        system: 'You are an expert leadership coach scoring a practice conversation. Be encouraging, specific, and honest. Quote or reference what the manager actually said. Do not use em dashes.',
        messages: [
          {
            role: 'user',
            content: `Scenario: ${body.brief}\n\nTranscript:\n${transcript}\n\nScore the manager from 0 to 100 on clarity, empathy, curiosity, and agreeing a next step. Give up to 3 strengths, up to 3 improvements, and one improved line they could have said ("tryThis").`,
          },
        ],
      });
      if (!response.parsed_output) return json({ error: 'Could not score this conversation' }, 502);
      return json(response.parsed_output);
    }

    return json({ error: 'Unknown mode' }, 400);
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError) return json({ error: 'Coach is busy, try again shortly' }, 429);
    if (err instanceof Anthropic.APIError) return json({ error: 'Coach is unavailable' }, 502);
    return json({ error: 'Bad request' }, 400);
  }
});
