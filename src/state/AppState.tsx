import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AREAS, AreaId, BADGES, LEVELS } from '../data/content';

export type ActivityKind = 'quiz' | 'scenario' | 'roleplay' | 'reflection' | 'pulse' | 'coach';

export interface Progress {
  name: string;
  role: string;
  xp: number;
  streak: number;
  bestStreak: number;
  lastActive: string | null;
  completed: Record<string, { at: string; score?: number }>;
  areaXp: Record<AreaId, number>;
  badges: string[];
  reflections: { prompt: string; text: string; at: string }[];
  pulse: { date: string; value: number }[];
  today: { date: string; done: ActivityKind[] };
  weekly: { weekStart: string; count: number; goal: number };
}

const STORAGE_KEY = 'rapport.progress.v1';

export const todayKey = (d = new Date()) => d.toISOString().slice(0, 10);

const weekStartKey = (d = new Date()) => {
  const x = new Date(d);
  const day = (x.getDay() + 6) % 7; // Monday start
  x.setDate(x.getDate() - day);
  return todayKey(x);
};

const emptyAreas = () => Object.fromEntries(AREAS.map((a) => [a.id, 0])) as Record<AreaId, number>;

export const freshProgress = (): Progress => ({
  name: 'Jen',
  role: 'People & Culture Lead',
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastActive: null,
  completed: {},
  areaXp: emptyAreas(),
  badges: [],
  reflections: [],
  pulse: [],
  today: { date: todayKey(), done: [] },
  weekly: { weekStart: weekStartKey(), count: 0, goal: 5 },
});

export function levelFor(xp: number) {
  let current = LEVELS[0];
  for (const l of LEVELS) if (xp >= l.xp) current = l;
  const next = LEVELS.find((l) => l.xp > xp) ?? null;
  const span = next ? next.xp - current.xp : 1;
  const into = next ? xp - current.xp : 1;
  return { ...current, next, pct: Math.min(1, into / span), toNext: next ? next.xp - xp : 0 };
}

function computeBadges(p: Progress): string[] {
  const earned = new Set(p.badges);
  const count = Object.keys(p.completed).length;
  if (count >= 1) earned.add('first-step');
  if (p.bestStreak >= 3) earned.add('streak-3');
  if (p.bestStreak >= 7) earned.add('streak-7');
  if (Object.entries(p.completed).some(([k, v]) => k.startsWith('quiz:') && v.score === 1)) earned.add('quiz-ace');
  if (Object.keys(p.completed).some((k) => k.startsWith('roleplay:'))) earned.add('roleplay-1');
  if (p.reflections.length >= 3) earned.add('reflector');
  if (AREAS.every((a) => p.areaXp[a.id] > 0)) earned.add('well-rounded');
  if (levelFor(p.xp).level >= 5) earned.add('level-5');
  return BADGES.map((b) => b.id).filter((id) => earned.has(id));
}

export interface AwardInput {
  key: string; // unique id like "quiz:feedback-basics"
  kind: ActivityKind;
  xp: number;
  area?: AreaId;
  score?: number; // 0..1
}

export interface AwardResult {
  xp: number;
  newBadges: string[];
  levelUp: number | null;
  streak: number;
}

interface Ctx {
  progress: Progress;
  ready: boolean;
  award: (input: AwardInput) => AwardResult;
  addReflection: (prompt: string, text: string, area: AreaId) => AwardResult;
  logPulse: (value: number) => AwardResult;
  reset: () => void;
}

const AppStateContext = createContext<Ctx | null>(null);

function rollDay(p: Progress): Progress {
  const t = todayKey();
  const w = weekStartKey();
  let next = p;
  if (p.today.date !== t) next = { ...next, today: { date: t, done: [] } };
  if (p.weekly.weekStart !== w) next = { ...next, weekly: { ...p.weekly, weekStart: w, count: 0 } };
  return next;
}

function applyAward(prev: Progress, input: AwardInput): { next: Progress; result: AwardResult } {
  const p = rollDay(prev);
  const t = todayKey();
  const yesterday = todayKey(new Date(Date.now() - 86400000));
  let streak = p.streak;
  if (p.lastActive !== t) streak = p.lastActive === yesterday ? p.streak + 1 : 1;

  const repeat = !!p.completed[input.key] && input.kind !== 'reflection' && input.kind !== 'pulse';
  const xpGain = repeat ? Math.round(input.xp / 4) : input.xp;

  const areaXp = { ...p.areaXp };
  if (input.area) areaXp[input.area] = (areaXp[input.area] ?? 0) + xpGain;

  const done = p.today.done.includes(input.kind) ? p.today.done : [...p.today.done, input.kind];
  const before = levelFor(p.xp).level;

  const next: Progress = {
    ...p,
    xp: p.xp + xpGain,
    streak,
    bestStreak: Math.max(p.bestStreak, streak),
    lastActive: t,
    areaXp,
    completed: { ...p.completed, [input.key]: { at: new Date().toISOString(), score: input.score } },
    today: { date: t, done },
    weekly: { ...p.weekly, count: p.weekly.count + 1 },
  };
  const badges = computeBadges(next);
  const newBadges = badges.filter((b) => !p.badges.includes(b));
  next.badges = badges;
  const after = levelFor(next.xp).level;
  return { next, result: { xp: xpGain, newBadges, levelUp: after > before ? after : null, streak } };
}

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<Progress>(freshProgress);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (raw) setProgress(rollDay({ ...freshProgress(), ...JSON.parse(raw) }));
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    if (ready) AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress)).catch(() => {});
  }, [progress, ready]);

  const award = useCallback(
    (input: AwardInput) => {
      const { next, result } = applyAward(progress, input);
      setProgress(next);
      return result;
    },
    [progress],
  );

  const addReflection = useCallback(
    (prompt: string, text: string, area: AreaId) => {
      const withNote = { ...progress, reflections: [{ prompt, text, at: new Date().toISOString() }, ...progress.reflections] };
      const { next, result } = applyAward(withNote, { key: `reflection:${todayKey()}`, kind: 'reflection', xp: 25, area });
      setProgress(next);
      return result;
    },
    [progress],
  );

  const logPulse = useCallback(
    (value: number) => {
      const withPulse = { ...progress, pulse: [...progress.pulse.filter((x) => x.date !== todayKey()), { date: todayKey(), value }] };
      const { next, result } = applyAward(withPulse, { key: `pulse:${todayKey()}`, kind: 'pulse', xp: 10 });
      setProgress(next);
      return result;
    },
    [progress],
  );

  const reset = useCallback(() => setProgress(freshProgress()), []);

  const value = useMemo(() => ({ progress, ready, award, addReflection, logPulse, reset }), [progress, ready, award, addReflection, logPulse, reset]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used inside AppStateProvider');
  return ctx;
}
