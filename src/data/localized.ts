import { useMemo } from 'react';
import { useT } from '../i18n';
import { Lang } from '../i18n/lang';
import * as EN from './content';
import { AreaId, Scenario } from './content';
import esContent from './i18n/es';
import frContent from './i18n/fr';
import { WEEKS } from './library';

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

function localizeCore(lang: Lang) {
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

/** The core library plus every curriculum week, with the day by day schedule. */
function localize(lang: Lang) {
  const core = localizeCore(lang);
  const SCENARIOS: Scenario[] = [...core.SCENARIOS];
  const reflections: Record<string, { area: AreaId; prompt: string }> = {};
  const tips: Record<string, string> = {};
  core.REFLECTIONS.forEach((r, i) => (reflections[`core-${i}`] = r));
  core.TIPS.forEach((tip, i) => (tips[`core-${i}`] = tip));

  const schedule: { scenario: string; reflection: string; tip: string; week: number; day: number; area: AreaId; theme: string }[] = [];
  for (const w of WEEKS) {
    const tr = lang === 'en' ? null : w[lang];
    for (const sc of w.scenarios) {
      const x = tr?.scenarios[sc.id];
      SCENARIOS.push(x ? { ...sc, title: x.title, setup: x.setup, person: x.person, quote: x.quote, choices: sc.choices.map((c, i) => ({ ...c, ...(x.choices[i] ?? {}) })) } : sc);
    }
    for (const r of w.reflections) reflections[r.id] = { area: r.area, prompt: tr?.reflections[r.id] ?? r.prompt };
    for (const tip of w.tips) tips[tip.id] = tr?.tips[tip.id] ?? tip.text;
    w.days.forEach((d, i) => schedule.push({ ...d, week: w.week, day: i + 1, area: w.area, theme: tr?.title || w.title }));
  }
  return { ...core, SCENARIOS, reflections, tips, schedule };
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
      /**
       * Today's scenario, reflection, and tip for someone on day `day` of their journey (0 based).
       * After the last written day the schedule starts over from the top.
       */
      dailyPicks: (day: number) => {
        const n = c.schedule.length;
        if (!n) return { scenario: c.SCENARIOS[day % c.SCENARIOS.length], reflection: c.REFLECTIONS[day % c.REFLECTIONS.length], tip: c.TIPS[day % c.TIPS.length], week: null };
        const e = c.schedule[((day % n) + n) % n];
        return {
          scenario: c.SCENARIOS.find((x) => x.id === e.scenario) ?? c.SCENARIOS[0],
          reflection: c.reflections[e.reflection] ?? c.REFLECTIONS[0],
          tip: c.tips[e.tip] ?? c.TIPS[0],
          week: { number: e.week, day: e.day, area: e.area, theme: e.theme },
        };
      },
      /** Scenarios in the order the curriculum offers them, starting from `day`, then any others. */
      scenarioQueue: (day: number) => {
        const n = c.schedule.length;
        const ids = c.schedule.map((_, i) => c.schedule[(((day + i) % n) + n) % n].scenario);
        const rest = c.SCENARIOS.filter((x) => !ids.includes(x.id)).map((x) => x.id);
        return [...ids, ...rest].map((id) => c.SCENARIOS.find((x) => x.id === id)!).filter(Boolean);
      },
      /** The seven scenarios of the curriculum week that contains `day`. */
      weekScenarios: (day: number) => {
        const n = c.schedule.length;
        if (!n) return c.SCENARIOS;
        const week = c.schedule[((day % n) + n) % n].week;
        return c.schedule.filter((e) => e.week === week).map((e) => c.SCENARIOS.find((x) => x.id === e.scenario)!).filter(Boolean);
      },
    };
  }, [lang]);
}
