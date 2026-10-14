import { MY_TOOLS } from './myTools';
import type { Tool } from './types';
import t_weekly_priorities from './tools/weekly-priorities';
import t_time_audit from './tools/time-audit';
import t_delegation_planner from './tools/delegation-planner';
import t_meeting_agenda from './tools/meeting-agenda';
import t_decision_meeting from './tools/decision-meeting';
import t_meeting_recap from './tools/meeting-recap';
import t_one_on_one_template from './tools/one-on-one-template';
import t_feedback_planner from './tools/feedback-planner';
import t_recognition_note from './tools/recognition-note';
import t_change_announcement_checklist from './tools/change-announcement-checklist';
import t_stakeholder_map from './tools/stakeholder-map';
import t_hard_conversation_prep from './tools/hard-conversation-prep';
import t_new_hire_30_60_90 from './tools/new-hire-30-60-90';
import t_team_communication_charter from './tools/team-communication-charter';
import t_weekly_team_update from './tools/weekly-team-update';

export type { Tool, ToolCategory, ToolSection, ToolText } from './types';

/** The starter toolkit, in display order. */
const STARTER: Tool[] = [t_weekly_priorities, t_time_audit, t_delegation_planner, t_meeting_agenda, t_decision_meeting, t_meeting_recap, t_one_on_one_template, t_feedback_planner, t_recognition_note, t_change_announcement_checklist, t_stakeholder_map, t_hard_conversation_prep, t_new_hire_30_60_90, t_team_communication_charter, t_weekly_team_update];

/** Every tool in the app: the starter set, then yours from myTools.ts. Tools without sections are hidden. */
export const TOOLS: Tool[] = [...STARTER, ...MY_TOOLS].filter((t) => t.sections.length > 0);
