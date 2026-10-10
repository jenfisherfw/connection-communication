import type { CurriculumWeek } from './types';

// Placeholder while this week is being written. An empty week adds no days to the schedule.
const week: CurriculumWeek = {
  week: 21,
  area: 'feedback',
  title: '',
  scenarios: [],
  reflections: [],
  tips: [],
  days: [],
  es: { title: '', scenarios: {}, reflections: {}, tips: {} },
  fr: { title: '', scenarios: {}, reflections: {}, tips: {} },
};

export default week;
