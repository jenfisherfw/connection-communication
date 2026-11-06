import { useCallback } from 'react';
import { useAppState } from '../state/AppState';
import es from './es';
import fr from './fr';
import { Lang, localeFor } from './lang';

export * from './lang';

type Vars = Record<string, string | number>;

/** Interface text is written in English in the code; these map it to Spanish and French. */
const DICTS: Record<Lang, Record<string, string>> = { en: {}, es, fr };

/** Translates English interface text, falling back to English if a phrase is missing. */
export function translate(lang: Lang, text: string, vars?: Vars): string {
  const out = DICTS[lang]?.[text] ?? text;
  return vars ? out.replace(/\{(\w+)\}/g, (_, k: string) => String(vars[k] ?? '')) : out;
}

/** The current language plus a `t` function for interface text. */
export function useT() {
  const { progress } = useAppState();
  const lang: Lang = progress.language ?? 'en';
  const t = useCallback((text: string, vars?: Vars) => translate(lang, text, vars), [lang]);
  return { lang, locale: localeFor(lang), t };
}
