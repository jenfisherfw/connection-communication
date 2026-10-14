/**
 * A weekly micro lesson: a short swipeable deck of slides, about 3 to 5 minutes long.
 * Translations repeat the slides in the same order with the same kinds; the correct
 * answer of a check slide always comes from the English source.
 */
export type Slide =
  | { kind: 'cover'; title: string; body: string }
  | { kind: 'idea'; title: string; body: string; bullets?: string[] }
  | { kind: 'example'; title: string; instead: string; tryThis: string; why: string }
  | { kind: 'check'; question: string; options: string[]; answer: number; explain: string }
  | { kind: 'action'; title: string; body: string }
  | { kind: 'takeaway'; title: string; bullets: string[] };

export interface LessonTranslation {
  title: string;
  subtitle: string;
  slides: Slide[];
}

export interface MicroLesson {
  id: string;
  /** The curriculum week this lesson unlocks in. */
  week: number;
  focus: 'communication' | 'change';
  minutes: 3 | 4 | 5;
  title: string;
  subtitle: string;
  slides: Slide[];
  es: LessonTranslation;
  fr: LessonTranslation;
}
