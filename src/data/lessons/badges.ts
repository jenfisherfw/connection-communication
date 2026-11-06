import type { Badge } from '../content';
import { colors } from '../../theme';
import type { Lang } from '../../i18n/lang';

/** How many micro lessons each badge needs. 'change' counts only the lessons focused on leading change. */
export const LESSON_BADGE_RULES: { id: string; count: number | 'all'; focus?: 'change' }[] = [
  { id: 'lesson-1', count: 1 },
  { id: 'lessons-4', count: 4 },
  { id: 'lessons-13', count: 13 },
  { id: 'lessons-26', count: 26 },
  { id: 'change-ready', count: 'all', focus: 'change' },
  { id: 'lessons-52', count: 52 },
];

export const LESSON_BADGES: Badge[] = [
  { id: 'lesson-1', title: 'Curious Mind', description: 'Finish your first micro lesson', icon: 'book-open', color: colors.teal },
  { id: 'lessons-4', title: 'Steady Learner', description: 'Finish 4 micro lessons', icon: 'layers', color: colors.blue },
  { id: 'lessons-13', title: 'Quarter Strong', description: 'Finish 13 micro lessons', icon: 'bookmark', color: colors.violet },
  { id: 'lessons-26', title: 'Halfway Hero', description: 'Finish 26 micro lessons', icon: 'trending-up', color: colors.coral },
  { id: 'change-ready', title: 'Change Ready', description: 'Finish every Leading Change micro lesson', icon: 'refresh-cw', color: colors.amber },
  { id: 'lessons-52', title: 'Master Communicator', description: 'Finish all 52 micro lessons', icon: 'award', color: colors.primary },
];

export const LESSON_BADGE_TEXT: Record<Exclude<Lang, 'en'>, Record<string, { title: string; description: string }>> = {
  es: {
    'lesson-1': { title: 'Mente curiosa', description: 'Termina tu primera microlección' },
    'lessons-4': { title: 'Aprendizaje constante', description: 'Termina 4 microlecciones' },
    'lessons-13': { title: 'Un trimestre firme', description: 'Termina 13 microlecciones' },
    'lessons-26': { title: 'A mitad del camino', description: 'Termina 26 microlecciones' },
    'change-ready': { title: 'Listo para el cambio', description: 'Termina todas las microlecciones de Liderar el cambio' },
    'lessons-52': { title: 'Maestría en comunicación', description: 'Termina las 52 microlecciones' },
  },
  fr: {
    'lesson-1': { title: 'Esprit curieux', description: 'Terminez votre première micro-leçon' },
    'lessons-4': { title: 'Apprentissage régulier', description: 'Terminez 4 micro-leçons' },
    'lessons-13': { title: 'Un trimestre solide', description: 'Terminez 13 micro-leçons' },
    'lessons-26': { title: 'À mi-parcours', description: 'Terminez 26 micro-leçons' },
    'change-ready': { title: 'Prêt pour le changement', description: 'Terminez toutes les micro-leçons Conduire le changement' },
    'lessons-52': { title: 'Maître de la communication', description: 'Terminez les 52 micro-leçons' },
  },
};
