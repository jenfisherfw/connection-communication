/** Languages Rapport supports. English is the source language for all text. */
export type Lang = 'en' | 'es' | 'fr';

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
];

/** Locale used for dates, so "Wed, Oct 7" becomes "mié, 7 oct" or "mer. 7 oct.". */
export const localeFor = (lang: Lang) => ({ en: 'en-US', es: 'es-ES', fr: 'fr-FR' })[lang];

/** The phone's language if we support it, otherwise English. */
export function deviceLang(): Lang {
  try {
    const code = Intl.DateTimeFormat().resolvedOptions().locale.slice(0, 2).toLowerCase();
    return code === 'es' || code === 'fr' ? code : 'en';
  } catch {
    return 'en';
  }
}
