import type { CurriculumWeek } from './types';
import week01 from './week01';
import week02 from './week02';
import week03 from './week03';
import week04 from './week04';
import week05 from './week05';
import week06 from './week06';
import week07 from './week07';
import week08 from './week08';
import week09 from './week09';
import week10 from './week10';
import week11 from './week11';
import week12 from './week12';
import week13 from './week13';
import week14 from './week14';
import week15 from './week15';
import week16 from './week16';

export type { CurriculumWeek, WeekTranslation } from './types';

/** The year long daily curriculum, in order. Add new weeks to the end; never reorder. */
export const WEEKS: CurriculumWeek[] = [week01, week02, week03, week04, week05, week06, week07, week08, week09, week10, week11, week12, week13, week14, week15, week16];
