/** A Toolkit category. Each one has its own filter chip in the app. */
export type ToolCategory = 'time' | 'meetings' | 'conversations' | 'change' | 'team';

/** One part of a tool. Use any mix of a paragraph, a bullet list, and a copyable template. */
export interface ToolSection {
  heading: string;
  body?: string;
  bullets?: string[];
  /** Text people can copy or share, like an agenda or an email. Line breaks are kept. */
  template?: string;
}

export interface ToolText {
  title: string;
  summary: string;
  sections: ToolSection[];
}

export interface Tool extends ToolText {
  id: string;
  category: ToolCategory;
  /** An icon name from https://feathericons.com, for example 'clock' or 'calendar'. */
  icon: string;
  /** About how long it takes to use. */
  minutes: number;
  /** Optional translations. Anything missing shows in English. */
  es?: ToolText;
  fr?: ToolText;
}
