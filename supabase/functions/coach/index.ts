// Supabase Edge Function: the AI coach behind Rapport.
// Deploy from the dashboard (Edge Functions > Deploy a new function > Via Editor, name it "coach")
// or with the CLI:  supabase functions deploy coach
// Secret:  ANTHROPIC_API_KEY (Edge Functions > Secrets)
// Optional: ANTHROPIC_WORKSPACE_ID, only needed when the key is not scoped to a workspace
import Anthropic from 'npm:@anthropic-ai/sdk@0.131.0';
import { createClient, type SupabaseClient } from 'npm:@supabase/supabase-js@2.117.3';

const MODEL = 'claude-opus-5-5';

/** AI requests allowed per person per day. Override with the DAILY_AI_LIMIT secret. */
const DAILY_LIMIT = Number(Deno.env.get('DAILY_AI_LIMIT') ?? 40);

let admin: SupabaseClient | null = null;
/** Service role client (Supabase provides these variables to every Edge Function). */
function supabaseAdmin(): SupabaseClient | null {
  const url = Deno.env.get('SUPABASE_URL');
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) return null;
  admin ??= createClient(url, key, { auth: { persistSession: false } });
  return admin;
}

/**
 * The signed in user's id from their access token. Supabase's gateway has already verified
 * the token's signature (JWT verification is on for this function), so reading it is enough.
 */
function userIdFrom(req: Request): string | null {
  const token = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  const payload = token?.split('.')[1];
  if (!payload) return null;
  try {
    const claims = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
    return claims.role === 'authenticated' && typeof claims.sub === 'string' ? claims.sub : null;
  } catch {
    return null;
  }
}

/** Counts one AI request against today's limit. Fails open if usage tracking isn't set up yet. */
async function withinDailyLimit(userId: string | null): Promise<boolean> {
  const db = supabaseAdmin();
  if (!userId || !db) return true;
  const { data, error } = await db.rpc('use_coach_request', { p_user: userId, p_limit: DAILY_LIMIT });
  if (error) {
    console.error('usage tracking unavailable', error.message);
    return true;
  }
  return Array.isArray(data) ? data[0]?.allowed !== false : true;
}

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

// Spanish and French equivalents. \b only understands unaccented letters, so these use Unicode letter boundaries.
const word = (body: string) => new RegExp(`(?<!\\p{L})(${body})(?!\\p{L})`, 'iu');
const DANGER_ES = word(
  'suicid\\p{L}*|quiero morir(me)?|quiere morir(se)?|quitarme la vida|quitarse la vida|matarme|matarlo|matarla|matarlos|matarlas|matar a (alguien|todos|mi|su)|hacerme daño|hacerle daño|hacerles daño|autolesi\\p{L}*|(una|un|mi|su) (pistola|arma|cuchillo)|traer (una|un) (pistola|arma|cuchillo)|amenaz\\p{L}* (de|con) (matar|herir|disparar)|voy a (matar|herir|disparar)|amenaza de bomba',
);
const DANGER_FR = word(
  'suicid\\p{L}*|me suicider|veux mourir|veut mourir|mettre fin à (mes|ses|leurs) jours|me tuer|le tuer|la tuer|les tuer|tuer quelqu.un|me faire du mal|lui faire du mal|leur faire du mal|automutil\\p{L}*|(une|un|mon|son|sa) (arme|pistolet|couteau)|menac\\p{L}* de (tuer|blesser|tirer)|vais (le |la |les )?(tuer|blesser)|alerte à la bombe',
);
const MISCONDUCT_ES = word('acos\\p{L}*|agresi[oó]n sexual|discrimin\\p{L}*|abus\\p{L}*|represalia\\p{L}*|ambiente (de trabajo|laboral) hostil');
const MISCONDUCT_FR = word('harc[eè]l\\p{L}*|agression\\p{L}*|discrimin\\p{L}*|abus\\p{L}*|représailles|environnement de travail hostile');

type Lang = 'en' | 'es' | 'fr';
const langOf = (body: { leader?: { language?: string } | null }): Lang => {
  const l = body?.leader?.language;
  return l === 'es' || l === 'fr' ? l : 'en';
};

/** Every language's patterns are always checked, since people often mix languages. */
const isDanger = (text: string) => DANGER.test(text) || DANGER_ES.test(text) || DANGER_FR.test(text);
const isMisconduct = (text: string) => MISCONDUCT.test(text) || MISCONDUCT_ES.test(text) || MISCONDUCT_FR.test(text);

const TEXT: Record<Lang, { danger: string; misconduct: string; stepOut: string; refusal: string; limit: string; language: string }> = {
  en: {
    danger:
      'If anyone may be in danger, please act now: call 911 (or your local emergency number) or the 988 Suicide & Crisis Lifeline (call or text 988 in the US), and bring in HR or security right away. You do not have to handle this alone.',
    misconduct:
      'Because this may involve harassment, discrimination, or misconduct, please report it to HR and follow your company policy. HR can protect everyone involved in ways a coaching conversation cannot.',
    stepOut: 'Stepping out of the role play for a moment.',
    refusal: "I can't help with that one, but I'm happy to help you plan a different conversation. If this involves safety, harassment, or legal risk, please loop in HR.",
    limit: "You've reached today's limit of {n} coaching requests. It resets tomorrow.",
    language: '',
  },
  es: {
    danger:
      'Si alguien puede estar en peligro, actúa ahora: llama al 911 (o a tu número de emergencias local) o a la línea 988 de prevención del suicidio y crisis (llama o envía un mensaje al 988 en EE. UU.), y avisa de inmediato a RR. HH. o a seguridad. No tienes que manejar esto solo.',
    misconduct:
      'Como esto podría implicar acoso, discriminación o una conducta indebida, infórmalo a RR. HH. y sigue la política de tu empresa. RR. HH. puede proteger a todas las personas involucradas de formas que una conversación de coaching no puede.',
    stepOut: 'Salgo del juego de rol por un momento.',
    refusal: 'No puedo ayudarte con eso, pero con gusto te ayudo a planear otra conversación. Si hay temas de seguridad, acoso o riesgo legal, involucra a RR. HH.',
    limit: 'Llegaste al límite de hoy de {n} solicitudes de coaching. Se reinicia mañana.',
    language: 'Write every reply in Spanish (español neutro, addressing the leader as "tú"), even if earlier messages or the scenario are in English. Do not use em dashes.',
  },
  fr: {
    danger:
      'Si quelqu’un est peut-être en danger, agissez maintenant : appelez le 911 (ou votre numéro d’urgence local) ou la ligne 988 de prévention du suicide et de crise (appel ou SMS au 988 aux États-Unis), et prévenez immédiatement les RH ou la sécurité. Vous n’avez pas à gérer cela seul.',
    misconduct:
      'Comme cela peut impliquer du harcèlement, de la discrimination ou un comportement inapproprié, signalez-le aux RH et suivez la politique de votre entreprise. Les RH peuvent protéger toutes les personnes concernées mieux qu’une conversation de coaching.',
    stepOut: 'Je sors du jeu de rôle un instant.',
    refusal: 'Je ne peux pas vous aider sur ce point, mais je peux vous aider à préparer une autre conversation. S’il s’agit de sécurité, de harcèlement ou d’un risque juridique, impliquez les RH.',
    limit: 'Vous avez atteint la limite quotidienne de {n} demandes de coaching. Elle sera réinitialisée demain.',
    language: 'Write every reply in French (addressing the leader as "vous"), even if earlier messages or the scenario are in English. Do not use em dashes.',
  },
};

/** Puts the language instruction just before the guardrails, which always stay last. */
const inLanguage = (system: string, lang: Lang) =>
  TEXT[lang].language ? system.replace(GUARDRAILS, () => `Language: ${TEXT[lang].language}\n\n${GUARDRAILS}`) : system;

/** Deterministic safety notes, appended no matter what the model says. */
function safetyNotes(text: string, lang: Lang): string[] {
  const notes: string[] = [];
  if (isDanger(text)) notes.push(TEXT[lang].danger);
  if (isMisconduct(text)) notes.push(TEXT[lang].misconduct);
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
type Leader = { name?: string; role?: string; teamSize?: string | null; focusAreas?: string[]; language?: string } | null;

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

async function chat(system: string, messages: Msg[], lang: Lang) {
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
    return TEXT[lang].refusal;
  }
  return response.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('\n').trim();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  try {
    const body = await req.json();
    const userId = userIdFrom(req);
    const lang = langOf(body);

    // Permanently deletes the signed in person's account. Their progress and usage rows are
    // removed with it by the database (on delete cascade).
    if (body.mode === 'delete_account') {
      const db = supabaseAdmin();
      if (!userId || !db) return json({ error: 'Not signed in' }, 401);
      const { error } = await db.auth.admin.deleteUser(userId);
      if (error) {
        console.error('delete account failed', error.message);
        return json({ error: 'Could not delete the account. Please try again.' }, 500);
      }
      return json({ ok: true });
    }

    if (['coach', 'roleplay', 'feedback'].includes(body.mode) && !(await withinDailyLimit(userId))) {
      return json({ error: TEXT[lang].limit.replace('{n}', String(DAILY_LIMIT)), limit: true }, 429);
    }
    const messages: Msg[] = (body.messages ?? []).slice(-30);

    if (body.mode === 'coach') {
      const latest = messages.filter((m) => m.role === 'user').pop()?.content ?? '';
      const reply = await chat(inLanguage(COACH_SYSTEM, lang) + aboutLeader(body.leader), fromUser(messages), lang);
      const notes = safetyNotes(latest, lang);
      return json({ reply: notes.length ? `${reply}\n\n${notes.join('\n\n')}` : reply });
    }

    if (body.mode === 'roleplay') {
      // A real crisis outranks the exercise: step out of the role play and give resources.
      const latest = messages.filter((m) => m.role === 'user').pop()?.content ?? '';
      if (isDanger(latest)) {
        return json({ reply: `${TEXT[lang].stepOut} ${TEXT[lang].danger}` });
      }
      const system = `You are role playing a workplace conversation so a manager can practice. Stay in character, except that the safety rules below always come first.
${body.persona}
Scenario the manager was given: ${body.brief}
The conversation opened with you saying: "${messages[0]?.content ?? ''}"

${GUARDRAILS}`;
      return json({ reply: await chat(inLanguage(system, lang), fromUser(messages), lang) });
    }

    if (body.mode === 'feedback') {
      const transcript = messages.map((m) => `${m.role === 'user' ? 'Manager' : 'Employee'}: ${m.content}`).join('\n');
      const response = await anthropic().messages.create({
        model: MODEL,
        max_tokens: 4096,
        output_config: { effort: 'medium', format: { type: 'json_schema', schema: FEEDBACK_SCHEMA } },
        system: inLanguage(`You are an expert leadership coach scoring a practice conversation. Be encouraging, specific, and honest. Quote or reference what the manager actually said. Do not use em dashes.
Score low any threat, ultimatum, mention of firing or discipline, retaliation, or disrespect, and explain why in "improve". The "tryThis" line must always be calm, respectful, and within typical company policy.

${GUARDRAILS}`, lang),
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
