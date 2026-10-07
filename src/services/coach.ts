import { Roleplay } from '../data/content';
import { currentAccessToken } from '../state/Account';
import { supabaseAnonKey, supabaseUrl } from './supabase';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface RoleplayFeedback {
  score: number; // 0..100
  strengths: string[];
  improve: string[];
  tryThis: string;
}

/** What the coach knows about the leader, so advice fits their situation. */
export interface LeaderContext {
  name: string;
  role: string;
  teamSize: string | null;
  focusAreas: string[];
}

/**
 * The AI coach runs behind a server endpoint (see supabase/functions/coach) so the
 * Anthropic API key never ships inside the app. It is enabled automatically when the
 * Supabase project is configured, or by pointing EXPO_PUBLIC_COACH_URL at any host.
 * Without either, the app runs in demo mode with scripted responses so the UX is testable.
 */
const COACH_URL = process.env.EXPO_PUBLIC_COACH_URL || (supabaseUrl ? `${supabaseUrl}/functions/v1/coach` : undefined);

export const coachIsLive = !!COACH_URL;

let leader: LeaderContext | null = null;
export const setLeaderContext = (ctx: LeaderContext) => {
  leader = ctx;
};

async function post<T>(body: object): Promise<T> {
  const token = (await currentAccessToken()) ?? supabaseAnonKey;
  const res = await fetch(COACH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(supabaseAnonKey ? { apikey: supabaseAnonKey } : {}),
    },
    body: JSON.stringify({ ...body, leader }),
  });
  if (!res.ok) throw new Error(`Coach request failed (${res.status})`);
  return res.json() as Promise<T>;
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

/* ---------- Ask the Coach ---------- */

export async function askCoach(messages: ChatMessage[]): Promise<string> {
  if (COACH_URL) return (await post<{ reply: string }>({ mode: 'coach', messages })).reply;
  await wait(700);
  return demoCoachReply(messages[messages.length - 1]?.content ?? '');
}

function demoCoachReply(text: string): string {
  const t = text.toLowerCase();
  if (t.includes('feedback') || t.includes('deadline') || t.includes('performance')) {
    return "Here's a simple structure that works well:\n\n1. Situation: name when and where.\n2. Behavior: describe what you observed, not what you assume.\n3. Impact: share why it matters to the team.\n4. Curiosity: ask \"What's your take?\" and listen.\n\nWant to practice it? Tell me who you're talking to and I'll play them.";
  }
  if (t.includes('conflict') || t.includes('argu') || t.includes('tension')) {
    return "Start by separating the people from the problem. Meet each person one on one first, reflect back what you hear, and look for the shared goal underneath their positions. Then bring them together around that goal, not around who was right.\n\nWhat's the situation you're facing?";
  }
  if (t.includes('layoff') || t.includes('change') || t.includes('reorg')) {
    return "In times of change, people need three things from you: clarity on what you know, honesty about what you don't, and a date for when you'll share more. Overcommunicate the why, and make space for people to react before you ask them to act.";
  }
  return "Great question. A good first move is to get curious before you get clear. What outcome do you want for the other person, and what outcome do you want for yourself? Share a bit more and I'll help you plan the conversation or rehearse it.";
}

/* ---------- Role play ---------- */

export async function roleplayReply(rp: Roleplay, messages: ChatMessage[]): Promise<string> {
  if (COACH_URL) return (await post<{ reply: string }>({ mode: 'roleplay', roleplayId: rp.id, persona: rp.persona, brief: rp.brief, messages })).reply;
  await wait(800);
  const userTurns = messages.filter((m) => m.role === 'user').length;
  return rp.demoReplies[Math.min(userTurns - 1, rp.demoReplies.length - 1)];
}

export async function roleplayFeedback(rp: Roleplay, messages: ChatMessage[]): Promise<RoleplayFeedback> {
  if (COACH_URL) return post<RoleplayFeedback>({ mode: 'feedback', roleplayId: rp.id, brief: rp.brief, messages });
  await wait(900);
  return demoFeedback(messages);
}

function demoFeedback(messages: ChatMessage[]): RoleplayFeedback {
  const mine = messages.filter((m) => m.role === 'user').map((m) => m.content.toLowerCase());
  const all = mine.join(' ');
  const asked = mine.filter((m) => m.includes('?')).length;
  const empathy = /(hear|sounds like|understand|appreciate|thank|makes sense|i can see)/.test(all);
  const specific = /(\d|deadline|last week|monday|tuesday|this month|project|report)/.test(all);
  const nextStep = /(next|plan|let's|going forward|together|follow up|check in)/.test(all);

  const strengths: string[] = [];
  const improve: string[] = [];
  (asked >= 2 ? strengths : improve).push(asked >= 2 ? 'You asked open questions and let them explain.' : 'Ask at least two open questions before offering solutions.');
  (empathy ? strengths : improve).push(empathy ? 'You acknowledged their perspective before moving on.' : 'Reflect what you hear, for example "It sounds like..."');
  (specific ? strengths : improve).push(specific ? 'You were specific about what you observed.' : 'Name a specific, observable example to keep it fair.');
  (nextStep ? strengths : improve).push(nextStep ? 'You closed with a clear next step.' : 'Agree on a concrete next step and a time to follow up.');

  const score = Math.min(98, 52 + strengths.length * 11 + Math.min(asked, 3) * 2);
  return {
    score,
    strengths: strengths.length ? strengths : ['You showed up for a hard conversation. That is the first win.'],
    improve: improve.length ? improve : ['Try the same scenario at a tougher difficulty.'],
    tryThis: "\"It sounds like a lot has landed on you. What would make the next two weeks feel manageable?\"",
  };
}
