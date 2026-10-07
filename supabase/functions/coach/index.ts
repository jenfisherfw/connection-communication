// Supabase Edge Function: the AI coach behind Rapport.
// Deploy from the dashboard (Edge Functions > Deploy a new function > Via Editor, name it "coach")
// or with the CLI:  supabase functions deploy coach
// Secret:  ANTHROPIC_API_KEY (Edge Functions > Secrets)
import Anthropic from 'npm:@anthropic-ai/sdk@0.131.0';

const MODEL = 'claude-opus-5-5';

let client: Anthropic | null = null;
/** Created on first use, so a missing secret produces a clear error instead of a failed boot. */
function anthropic(): Anthropic {
  const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) throw new MissingKeyError();
  client ??= new Anthropic({ apiKey });
  return client;
}
class MissingKeyError extends Error {}

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

type Feedback = { score: number; strengths: string[]; improve: string[]; tryThis: string };

const FEEDBACK_SCHEMA = {
  type: 'object',
  properties: {
    score: { type: 'integer', description: '0 to 100' },
    strengths: { type: 'array', items: { type: 'string' } },
    improve: { type: 'array', items: { type: 'string' } },
    tryThis: { type: 'string' },
  },
  required: ['score', 'strengths', 'improve', 'tryThis'],
  additionalProperties: false,
};

type Msg = { role: 'user' | 'assistant'; content: string };
type Leader = { name?: string; role?: string; teamSize?: string | null; focusAreas?: string[] } | null;

/** A short note about who Ari is coaching, appended to the system prompt. */
function aboutLeader(leader: Leader) {
  if (!leader) return '';
  const parts = [
    leader.name && `Name: ${leader.name}`,
    leader.role && `Role: ${leader.role}`,
    leader.teamSize && `Team size: ${leader.teamSize === 'none' ? 'no direct reports yet' : leader.teamSize}`,
    leader.focusAreas?.length && `Wants to grow in: ${leader.focusAreas.join(', ')}`,
  ].filter(Boolean);
  return parts.length ? `\n\nAbout the leader you are coaching (tailor examples to this):\n${parts.join('\n')}` : '';
}

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

/** Claude requires the conversation to start with a user turn. */
const fromUser = (messages: Msg[]) => {
  const i = messages.findIndex((m) => m.role === 'user');
  return i === -1 ? [] : messages.slice(i);
};

async function chat(system: string, messages: Msg[]) {
  const response = await anthropic().beta.messages.create({
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
      return json({ reply: await chat(COACH_SYSTEM + aboutLeader(body.leader), fromUser(messages)) });
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
      const response = await anthropic().messages.create({
        model: MODEL,
        max_tokens: 4096,
        output_config: { effort: 'medium', format: { type: 'json_schema', schema: FEEDBACK_SCHEMA } },
        system: 'You are an expert leadership coach scoring a practice conversation. Be encouraging, specific, and honest. Quote or reference what the manager actually said. Do not use em dashes.',
        messages: [
          {
            role: 'user',
            content: `Scenario: ${body.brief}\n\nTranscript:\n${transcript}\n\nScore the manager from 0 to 100 on clarity, empathy, curiosity, and agreeing a next step. Give up to 3 strengths, up to 3 improvements, and one improved line they could have said ("tryThis").`,
          },
        ],
      });
      const text = response.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('');
      if (response.stop_reason !== 'end_turn' || !text) return json({ error: 'Could not score this conversation' }, 502);
      const fb = JSON.parse(text) as Feedback;
      return json({
        score: Math.max(0, Math.min(100, Math.round(fb.score))),
        strengths: fb.strengths.slice(0, 3),
        improve: fb.improve.slice(0, 3),
        tryThis: fb.tryThis,
      });
    }

    return json({ error: 'Unknown mode' }, 400);
  } catch (err) {
    console.error('coach error', err);
    if (err instanceof MissingKeyError) return json({ error: 'The ANTHROPIC_API_KEY secret is not set for this function' }, 500);
    if (err instanceof Anthropic.RateLimitError) return json({ error: 'Coach is busy, try again shortly' }, 429);
    if (err instanceof Anthropic.APIError) return json({ error: 'Coach is unavailable' }, 502);
    return json({ error: 'Bad request' }, 400);
  }
});
