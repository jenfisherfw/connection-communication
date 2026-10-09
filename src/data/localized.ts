import { useMemo } from 'react';
import { useT } from '../i18n';
import { Lang } from '../i18n/lang';
import * as EN from './content';
import { AreaId } from './content';
import esContent from './i18n/es';
import frContent from './i18n/fr';

/**
 * Translated text for the content library, keyed by the same ids as content.ts. Only text
 * lives here; ids, correct answers, scores, colors, and XP always come from content.ts, so
 * a translation can never change how an exercise is scored. Anything missing falls back
 * to English.
 */
export interface ContentTranslation {
  areas: Partial<Record<AreaId, { title: string; tagline: string }>>;
  quizzes: Record<string, { title: string; subtitle: string; questions: { q: string; options: string[]; why: string }[] }>;
  scenarios: Record<string, { title: string; setup: string; person: string; quote: string; choices: { text: string; feedback: string }[] }>;
  roleplays: Record<string, { title: string; role: string; brief: string; opener: string; demoReplies: string[] }>;
  reflections: string[];
  tips: string[];
  starters: { tag: string; text: string }[];
  badges: Record<string, { title: string; description: string }>;
  levels: string[];
  pulse: string[];
  teams: Record<string, string>;
}

const TRANSLATIONS: Partial<Record<Lang, ContentTranslation>> = { es: esContent, fr: frContent };

function localize(lang: Lang) {
  const tr = TRANSLATIONS[lang];
  if (!tr) {
    return {
      AREAS: EN.AREAS,
      QUIZZES: EN.QUIZZES,
      SCENARIOS: EN.SCENARIOS,
      ROLEPLAYS: EN.ROLEPLAYS,
      REFLECTIONS: EN.REFLECTIONS,
      TIPS: EN.TIPS,
      CONVERSATION_STARTERS: EN.CONVERSATION_STARTERS,
      BADGES: EN.BADGES,
      LEVELS: EN.LEVELS,
      PULSE: EN.PULSE,
      LEADERBOARD: EN.LEADERBOARD,
    };
  }
  return {
    AREAS: EN.AREAS.map((a) => ({ ...a, ...tr.areas[a.id] })),
    QUIZZES: EN.QUIZZES.map((q) => {
      const t = tr.quizzes[q.id];
      if (!t) return q;
      return { ...q, title: t.title, subtitle: t.subtitle, questions: q.questions.map((x, i) => ({ ...x, ...(t.questions[i] ?? {}) })) };
    }),
    SCENARIOS: EN.SCENARIOS.map((s) => {
      const t = tr.scenarios[s.id];
      if (!t) return s;
      return { ...s, title: t.title, setup: t.setup, person: t.person, quote: t.quote, choices: s.choices.map((c, i) => ({ ...c, ...(t.choices[i] ?? {}) })) };
    }),
    ROLEPLAYS: EN.ROLEPLAYS.map((r) => ({ ...r, ...(tr.roleplays[r.id] ?? {}) })),
    REFLECTIONS: EN.REFLECTIONS.map((r, i) => ({ ...r, prompt: tr.reflections[i] ?? r.prompt })),
    TIPS: EN.TIPS.map((tip, i) => tr.tips[i] ?? tip),
    CONVERSATION_STARTERS: EN.CONVERSATION_STARTERS.map((s, i) => tr.starters[i] ?? s),
    BADGES: EN.BADGES.map((b) => ({ ...b, ...(tr.badges[b.id] ?? {}) })),
    LEVELS: EN.LEVELS.map((l, i) => ({ ...l, title: tr.levels[i] ?? l.title })),
    PULSE: EN.PULSE.map((p, i) => ({ ...p, label: tr.pulse[i] ?? p.label })),
    LEADERBOARD: EN.LEADERBOARD.map((l) => ({ ...l, team: tr.teams[l.team] ?? l.team })),
  };
}

const CACHE: Partial<Record<Lang, ReturnType<typeof localize>>> = {};
export const contentFor = (lang: Lang) => (CACHE[lang] ??= localize(lang));

/** The content library in the leader's language. */
export function useContent() {
  const { lang } = useT();
  return useMemo(() => {
    const c = contentFor(lang);
    return {
      ...c,
      areaById: (id: AreaId) => c.AREAS.find((a) => a.id === id)!,
      levelTitle: (level: number) => c.LEVELS.find((l) => l.level === level)?.title ?? '',
      dailyPicks: (d = Math.floor(Date.now() / 86400000)) => ({ scenario: c.SCENARIOS[d % c.SCENARIOS.length], reflection: c.REFLECTIONS[d % c.REFLECTIONS.length], tip: c.TIPS[d % c.TIPS.length] }),
    };
  }, [lang]);
}
