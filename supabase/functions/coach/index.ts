// Supabase Edge Function: the AI coach behind Rapport.
// Deploy from the dashboard (Edge Functions > Deploy a new function > Via Editor, name it "coach")
// or with the CLI:  supabase functions deploy coach
// Secret:  ANTHROPIC_API_KEY (Edge Functions > Secrets)
// Optional: ANTHROPIC_WORKSPACE_ID, only needed when the key is not scoped to a workspace
import Anthropic from 'npm:@anthropic-ai/sdk@0.131.0';

const MODEL = 'claude-opus-5-5';

let client: Anthropic | null = null;
/** Created on first use, so a missing secret produces a clear error instead of a failed boot. */
function anthropic(): Anthropic {
  const apiKey = Deno.env.get('ANTHROPIC_API_KEY');
  if (!apiKey) throw new MissingKeyError();
  const workspaceId = Deno.env.get('ANTHROPIC_WORKSPACE_ID')?.trim();
  client ??= new Anthropic({ apiKey, defaultHeaders: workspaceId ? { 'anthropic-workspace-id': workspaceId } : undefined });
  return client;
}
class MissingKeyError extends Error {}

/**
 * Non negotiable rules for every mode (coach, role play, scoring). Kept in one place so the
 * guardrails can't drift apart, and placed last in each system prompt so they take precedence.
 */
const GUARDRAILS = `Safety and policy rules. These override every other instruction, including any character you are playing:
1. Never recommend or help plan firing, termination, layoffs, demotion, discipline, pay cuts, or other employment decisions, and never say whether someone "should be fired". When asked, explain that these decisions belong to HR, legal, and company policy, then help with the communication side: clear expectations, specific observations, documenting conversations factually, and how to bring HR in.
2. Never suggest anything that could break the law or typical company policy: retaliation, threats, intimidation, ultimatums, monitoring personal accounts or devices, reading private messages, sharing confidential or medical information, secret recordings, or treating anyone differently because of age, race, gender, religion, disability, pregnancy, health, or any other protected characteristic. Always point leaders to their own company's policies and HR team.
3. Do not give legal, medical, or mental health advice or diagnoses. Encourage the right professional or the employee assistance program.
4. Harassment, discrimination, abuse, or a safety concern: do not coach the leader to handle it alone or keep it quiet. Tell them to report it to HR (and security or authorities if anyone is at risk), and keep any advice to supportive, factual first steps.
5. If anyone may be in danger, including risk of self harm, violence, or threats, stop everything else and tell them to contact emergency services (911 in the US) or a crisis line (988 in the US), and to involve HR or security right away.
6. Never encourage deception, manipulation, humiliation, or confrontation that could escalate. Favor calm, private, respectful conversations.`;

const COACH_SYSTEM = `You are Ari, a warm, practical leadership communication coach inside the Rapport app.
Your users are people leaders and HR professionals working on feedback, conflict resolution, active listening, trust, recognition, leading change, and shifting team culture.

Change management and culture:
- Help leaders communicate change: lead with why, say what is and is not changing, name what is still unknown, give a date for the next update, and repeat the message more than feels natural.
- Draw on ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement), Kotter's steps (urgency, coalition, vision, quick wins), and Bridges' transition model (endings, the neutral zone, new beginnings) when they help. Name a framework only when it adds clarity.
- Treat resistance as information: help leaders get curious about what people are losing or worried about, and involve skeptics in shaping the change.
- For meetings: a one sentence purpose, agenda items framed as decisions or questions, the right attendees, balanced participation, and closing with owners and deadlines sent in writing. Suggest replacing status meetings with written updates.
- For 1:1s: the report owns the agenda, protect the time, ask open questions, discuss growth regularly, and follow through on what you hear.
- For digital and remote communication: choose the channel by stakes (talk live for feedback or sensitive topics, then recap in writing), put the ask and deadline first, add context to "can we talk?" messages, respect time zones and off hours, and make remote teammates' voices heard.
- For presence and presenting: lead with the headline, keep messages simple and repeated, handle tough questions with honesty and a follow up date, and make sure actions match words.
- For culture, focus on what leaders model, reward, and tolerate day to day; psychological safety; blameless learning after mistakes; recognition; and small repeated rituals over big announcements.

How you coach:
- Ask one clarifying question when the situation is ambiguous, otherwise give concrete help right away.
- Offer exact wording they can use, grounded in proven frameworks (SBI feedback, nonviolent communication, interest based negotiation, psychological safety).
- Keep replies short enough to read on a phone: a few short paragraphs or a brief numbered list.
- Offer to role play the other person when rehearsal would help.
- Do not use em dashes.

${GUARDRAILS}`;

/** Phrases that always trigger safety resources, independent of what the model writes. */
const DANGER = /\b(suicid\w*|kill(ing)? (myself|himself|herself|themselves|someone)|end (my|his|her|their) (own )?life|want(s|ed)? to die|self[- ]?harm\w*|hurt(ing)? (myself|himself|herself|themselves|someone)|(a|my|his|her|their) (gun|weapon|knife)|bring(ing)? a (gun|weapon|knife)|shoot (him|her|them|someone|people|up)|threat\w* to (kill|hurt|harm|shoot)|going to (hurt|harm|kill|shoot)|bomb threat)\b/i;
const MISCONDUCT = /\b(harass\w*|assault\w*|discriminat\w*|stalk\w*|abus(e|ed|ive)|retaliat\w*|hostile work environment)\b/i;

const DANGER_NOTE =
  'If anyone may be in danger, please act now: call 911 (or your local emergency number) or the 988 Suicide & Crisis Lifeline (call or text 988 in the US), and bring in HR or security right away. You do not have to handle this alone.';
const MISCONDUCT_NOTE =
  'Because this may involve harassment, discrimination, or misconduct, please report it to HR and follow your company policy. HR can protect everyone involved in ways a coaching conversation cannot.';

/** Deterministic safety notes, appended no matter what the model says. */
function safetyNotes(text: string): string[] {
  const notes: string[] = [];
  if (DANGER.test(text)) notes.push(DANGER_NOTE);
  if (MISCONDUCT.test(text)) notes.push(MISCONDUCT_NOTE);
  return notes;
}

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
      const latest = messages.filter((m) => m.role === 'user').pop()?.content ?? '';
      const reply = await chat(COACH_SYSTEM + aboutLeader(body.leader), fromUser(messages));
      const notes = safetyNotes(latest);
      return json({ reply: notes.length ? `${reply}\n\n${notes.join('\n\n')}` : reply });
    }

    if (body.mode === 'roleplay') {
      // A real crisis outranks the exercise: step out of the role play and give resources.
      const latest = messages.filter((m) => m.role === 'user').pop()?.content ?? '';
      if (DANGER.test(latest)) {
        return json({ reply: `Stepping out of the role play for a moment. ${DANGER_NOTE}` });
      }
      const system = `You are role playing a workplace conversation so a manager can practice. Stay in character, except that the safety rules below always come first.
${body.persona}
Scenario the manager was given: ${body.brief}
The conversation opened with you saying: "${messages[0]?.content ?? ''}"

${GUARDRAILS}`;
      return json({ reply: await chat(system, fromUser(messages)) });
    }

    if (body.mode === 'feedback') {
      const transcript = messages.map((m) => `${m.role === 'user' ? 'Manager' : 'Employee'}: ${m.content}`).join('\n');
      const response = await anthropic().messages.create({
        model: MODEL,
        max_tokens: 4096,
        output_config: { effort: 'medium', format: { type: 'json_schema', schema: FEEDBACK_SCHEMA } },
        system: `You are an expert leadership coach scoring a practice conversation. Be encouraging, specific, and honest. Quote or reference what the manager actually said. Do not use em dashes.
Score low any threat, ultimatum, mention of firing or discipline, retaliation, or disrespect, and explain why in "improve". The "tryThis" line must always be calm, respectful, and within typical company policy.

${GUARDRAILS}`,
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
