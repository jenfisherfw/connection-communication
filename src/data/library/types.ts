import type { AreaId, Scenario } from '../content';

/** The translated text for one curriculum week. Ids and scores always come from the English source. */
export interface WeekTranslation {
  title: string;
  scenarios: Record<string, { title: string; setup: string; person: string; quote: string; choices: { text: string; feedback: string }[] }>;
  reflections: Record<string, string>;
  tips: Record<string, string>;
}

/**
 * One week of the daily curriculum. Each day pairs a scenario, a reflection prompt, and a tip.
 * Days may reuse the original library by id: scenario ids from content.ts, and reflections
 * or tips as `core-<index>` into REFLECTIONS or TIPS.
 */
export interface CurriculumWeek {
  week: number;
  area: AreaId;
  title: string;
  scenarios: Scenario[];
  reflections: { id: string; area: AreaId; prompt: string }[];
  tips: { id: string; text: string }[];
  days: { scenario: string; reflection: string; tip: string }[];
  es: WeekTranslation;
  fr: WeekTranslation;
}
