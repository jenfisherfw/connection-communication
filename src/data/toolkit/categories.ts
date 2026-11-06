import { colors } from '../../theme';
import type { ToolCategory } from './types';

/** Category labels (English, translated in the app) and colors for the Toolkit filters. */
export const TOOL_CATEGORIES: { id: ToolCategory; label: string; color: string; soft: string }[] = [
  { id: 'time', label: 'Time & priorities', color: colors.amber, soft: colors.amberSoft },
  { id: 'meetings', label: 'Meetings', color: colors.green, soft: colors.greenSoft },
  { id: 'conversations', label: 'Conversations', color: colors.primary, soft: colors.primarySoft },
  { id: 'change', label: 'Leading change', color: colors.blue, soft: colors.blueSoft },
  { id: 'team', label: 'Team', color: colors.plum, soft: colors.plumSoft },
];

export const categoryOf = (id: ToolCategory) => TOOL_CATEGORIES.find((c) => c.id === id) ?? TOOL_CATEGORIES[0];
