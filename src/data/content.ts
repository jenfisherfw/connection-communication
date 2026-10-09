import { colors } from '../theme';

export type AreaId = 'feedback' | 'conflict' | 'listening' | 'trust' | 'recognition' | 'change' | 'culture' | 'meetings' | 'oneonones' | 'digital' | 'presence';

export interface SkillArea {
  id: AreaId;
  title: string;
  tagline: string;
  icon: string; // Feather icon name
  color: string;
  soft: string;
}

export const AREAS: SkillArea[] = [
  { id: 'feedback', title: 'Feedback', tagline: 'Clear, kind, and specific', icon: 'message-square', color: colors.primary, soft: colors.primarySoft },
  { id: 'conflict', title: 'Conflict & Repair', tagline: 'Cool down, then resolve', icon: 'git-merge', color: colors.coral, soft: colors.coralSoft },
  { id: 'listening', title: 'Active Listening', tagline: 'Hear what is not said', icon: 'headphones', color: colors.teal, soft: colors.tealSoft },
  { id: 'trust', title: 'Trust & Connection', tagline: 'Build safety on your team', icon: 'heart', color: colors.violet, soft: colors.violetSoft },
  { id: 'recognition', title: 'Recognition', tagline: 'Make good work visible', icon: 'award', color: colors.amber, soft: colors.amberSoft },
  { id: 'change', title: 'Leading Change', tagline: 'Bring people with you', icon: 'trending-up', color: colors.blue, soft: colors.blueSoft },
  { id: 'culture', title: 'Culture Shifts', tagline: 'Shape how your team works', icon: 'sun', color: colors.rose, soft: colors.roseSoft },
  { id: 'meetings', title: 'Effective Meetings', tagline: 'Fewer, shorter, better', icon: 'calendar', color: colors.green, soft: colors.greenSoft },
  { id: 'oneonones', title: '1:1s That Matter', tagline: 'Their meeting, not yours', icon: 'users', color: colors.plum, soft: colors.plumSoft },
  { id: 'digital', title: 'Digital Communication', tagline: 'Email, chat, and remote teams', icon: 'send', color: colors.sky, soft: colors.skySoft },
  { id: 'presence', title: 'Presence & Presenting', tagline: 'Land the message in the room', icon: 'volume-2', color: colors.orange, soft: colors.orangeSoft },
];

export const areaById = (id: AreaId) => AREAS.find((a) => a.id === id)!;

/* ---------- Quizzes ---------- */

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  why: string;
}

export interface Quiz {
  id: string;
  area: AreaId;
  title: string;
  subtitle: string;
  minutes: number;
  xp: number;
  questions: QuizQuestion[];
}

export const QUIZZES: Quiz[] = [
  {
    id: 'feedback-basics',
    area: 'feedback',
    title: 'Feedback Fundamentals',
    subtitle: 'Do you know what makes feedback land?',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'A direct report missed a deadline for the second time. What is the strongest opening line?',
        options: [
          '"You are always late with deliverables."',
          '"The report was due Tuesday and came in Thursday. Can we talk about what got in the way?"',
          '"I am sure you are busy, but this is getting frustrating."',
          '"Let\'s just make sure it does not happen again."',
        ],
        answer: 1,
        why: 'It names a specific, observable fact, avoids labels like "always," and invites their perspective before drawing conclusions.',
      },
      {
        q: 'The SBI model stands for:',
        options: ['Situation, Behavior, Impact', 'Strength, Barrier, Improvement', 'Summary, Background, Insight', 'Specific, Brief, Immediate'],
        answer: 0,
        why: 'Situation, Behavior, Impact keeps feedback grounded in what happened and why it mattered, not in judgments about the person.',
      },
      {
        q: 'When is feedback most effective?',
        options: ['At the annual review', 'Close to the moment, in private', 'In the team meeting so everyone learns', 'Only when it is positive'],
        answer: 1,
        why: 'Timely, private feedback is easier to connect to the event and protects dignity. Praise can be public; correction rarely should be.',
      },
    ],
  },
  {
    id: 'conflict-styles',
    area: 'conflict',
    title: 'Conflict Style Check',
    subtitle: 'Spot the move that de escalates',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'Two team leads are arguing in a meeting. Tension is rising. What do you do first?',
        options: [
          'Pick the stronger argument and decide on the spot',
          'Pause the discussion and schedule a focused conversation with both',
          'Let them work it out; adults can handle it',
          'Change the subject to the next agenda item',
        ],
        answer: 1,
        why: 'Pausing lowers the temperature and protects both people from losing face publicly, while still committing to resolve it.',
      },
      {
        q: 'Which question best uncovers the interest behind a position?',
        options: ['"Why are you being so difficult?"', '"What would need to be true for this to work for you?"', '"Can you just compromise?"', '"Who else agrees with you?"'],
        answer: 1,
        why: 'Interest based questions move people off fixed positions and toward what they actually need.',
      },
      {
        q: 'After a heated exchange, a repair attempt sounds like:',
        options: ['"Well, you started it."', '"Let\'s forget it happened."', '"I came in hot earlier. I want to understand your view better."', '"I was right, but I will let it go."'],
        answer: 2,
        why: 'Owning your part without conditions signals safety and makes it easier for the other person to re engage.',
      },
    ],
  },
  {
    id: 'listening-levels',
    area: 'listening',
    title: 'Levels of Listening',
    subtitle: 'Are you listening to reply or to understand?',
    minutes: 2,
    xp: 30,
    questions: [
      {
        q: 'An employee says "I\'m fine, just tired." Their tone is flat. The best response is:',
        options: ['"Great, let\'s get started."', '"Get some sleep tonight!"', '"You sound a bit flat today. Anything you want to share?"', '"Everyone is tired."'],
        answer: 2,
        why: 'Reflecting what you notice, gently and without pressure, shows you are listening to more than the words.',
      },
      {
        q: 'Which is a reflective statement?',
        options: ['"Here\'s what I would do."', '"So the shifting priorities are making it hard to plan your week."', '"That happened to me too."', '"Have you tried a to do list?"'],
        answer: 1,
        why: 'Reflecting back the core of what you heard confirms understanding before you move to solutions.',
      },
    ],
  },
  {
    id: 'trust-builders',
    area: 'trust',
    title: 'Psychological Safety',
    subtitle: 'What builds or breaks trust on a team',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'A team member admits a mistake in standup. Your best response:',
        options: ['"How did that happen?"', '"Thanks for flagging it early. What do you need to fix it?"', '"Let\'s talk after."', 'Say nothing and move on'],
        answer: 1,
        why: 'Thanking people for surfacing problems rewards candor, which is the foundation of psychological safety.',
      },
      {
        q: 'Which leader behavior most predicts team trust?',
        options: ['Always having the answer', 'Following through on small commitments', 'Being the hardest worker', 'Keeping problems private'],
        answer: 1,
        why: 'Trust is built in small moments. Doing what you said you would do, consistently, compounds over time.',
      },
    ],
  },
  {
    id: 'change-communication',
    area: 'change',
    title: 'Communicating Change',
    subtitle: 'What people need to hear when things shift',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'You are announcing a new performance review process. What should come first?',
        options: ['The new timeline and forms', 'Why the change is happening and what problem it solves', 'Reassurance that nothing will really change', 'Who made the decision'],
        answer: 1,
        why: 'People resist what they do not understand. Leading with the why gives them a reason to engage with the what and the how.',
      },
      {
        q: 'Your team asks a question about the reorg that you cannot answer yet. The best response is:',
        options: ['Make your best guess so they feel informed', '"I can\'t talk about that."', '"I don\'t know yet. I\'ll tell you by Friday what I learn, even if it\'s that we still don\'t know."', 'Change the subject'],
        answer: 2,
        why: 'Honesty about uncertainty, paired with a specific follow up date, builds more trust than a confident guess that later proves wrong.',
      },
      {
        q: 'In the ADKAR model of change, what comes right after Awareness of the need for change?',
        options: ['Ability', 'Desire to support it', 'Knowledge of how', 'Reinforcement'],
        answer: 1,
        why: 'ADKAR runs Awareness, Desire, Knowledge, Ability, Reinforcement. Training people (Knowledge) before they want the change (Desire) rarely sticks.',
      },
      {
        q: 'Three weeks after a big change, people are quieter than usual and productivity has dipped. This most likely means:',
        options: ['The change failed', 'People are in the normal transition dip and need support', 'You should reverse the decision', 'The team is not committed'],
        answer: 1,
        why: 'A temporary dip is a normal part of transition. It is the moment to check in, name what people are letting go of, and celebrate early wins.',
      },
    ],
  },
  {
    id: 'positive-culture',
    area: 'culture',
    title: 'Building a Positive Culture',
    subtitle: 'Culture is what leaders tolerate and repeat',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'What shapes team culture most?',
        options: ['The values posted on the wall', 'What leaders do, reward, and tolerate every day', 'The annual engagement survey', 'Team offsites'],
        answer: 1,
        why: 'Culture is built in daily moments. People watch what you do, what you praise, and what you let slide far more than what you say.',
      },
      {
        q: 'A project failed. Which first question builds a learning culture?',
        options: ['"Whose fault was this?"', '"What did we learn, and what will we do differently?"', '"Why didn\'t anyone flag this?"', '"How do we explain this to leadership?"'],
        answer: 1,
        why: 'Blame teaches people to hide problems. Learning questions teach them to surface problems early, which is where real performance comes from.',
      },
      {
        q: 'You want more candor on your team. What is the most powerful first move?',
        options: ['Announce that everyone should speak up', 'Ask for feedback on yourself, then visibly act on it', 'Add an anonymous suggestion box', 'Require everyone to share one idea per meeting'],
        answer: 1,
        why: 'When a leader asks for critique and then changes something because of it, the team learns that candor is safe and that it matters.',
      },
      {
        q: 'A high performer is consistently dismissive of colleagues. Leaving it alone signals:',
        options: ['That results matter more than how we treat each other', 'Nothing, as long as targets are met', 'Trust in their judgment', 'That you are a hands off leader'],
        answer: 0,
        why: 'The behavior a leader tolerates becomes the standard. Addressing it, privately and clearly, protects the culture everyone else is building.',
      },
    ],
  },
  {
    id: 'meeting-essentials',
    area: 'meetings',
    title: 'Meeting Essentials',
    subtitle: 'Is this meeting worth everyone\'s time?',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'Before sending a meeting invite, the first question to ask is:',
        options: ['Who should attend?', 'Could this be solved without a meeting?', 'How long should it be?', 'Which room is free?'],
        answer: 1,
        why: 'Many status updates and announcements work better in writing. Save live time for decisions, problem solving, and connection.',
      },
      {
        q: 'Which agenda item is strongest?',
        options: ['"Budget"', '"Discuss Q3 budget"', '"Decide which two Q3 projects to fund (decision needed)"', '"Budget updates and other items"'],
        answer: 2,
        why: 'Framing agenda items as questions or decisions tells people what to prepare and makes it obvious when the meeting is done.',
      },
      {
        q: 'Two people have done most of the talking. The best facilitation move is:',
        options: ['Let it run; they clearly care', '"Let\'s hear from someone who hasn\'t spoken yet. Sam, what\'s your take?"', 'End the meeting early', 'Cut the loudest person off'],
        answer: 1,
        why: 'Inviting a specific quieter voice, warmly, balances the room without shaming anyone. Rounds and silent writing work well too.',
      },
      {
        q: 'What should every meeting end with?',
        options: ['A thank you', 'Decisions made, owners, and deadlines, confirmed out loud', 'The date of the next meeting', 'A summary of everything discussed'],
        answer: 1,
        why: 'Most meeting value is lost after the meeting. Naming who does what by when, and sending it in writing, turns talk into action.',
      },
    ],
  },
  {
    id: 'one-on-one-basics',
    area: 'oneonones',
    title: '1:1 Fundamentals',
    subtitle: 'The most important meeting on your calendar',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'Whose meeting is a 1:1?',
        options: ['The manager\'s, to get status updates', 'The direct report\'s, to raise what matters to them', 'HR\'s, for documentation', 'The team\'s'],
        answer: 1,
        why: 'Let your report set most of the agenda. Status can go in a shared doc; the 1:1 is for their priorities, blockers, and growth.',
      },
      {
        q: 'You are slammed this week. What should you do with your 1:1s?',
        options: ['Cancel them; your team will understand', 'Keep them, even if shorter', 'Move them all to Friday evening', 'Replace them with a team meeting'],
        answer: 1,
        why: 'Repeatedly cancelled 1:1s tell people they are not a priority. A short 15 minute check in protects the relationship.',
      },
      {
        q: 'Which question opens up the most useful conversation?',
        options: ['"Everything good?"', '"Any updates?"', '"What\'s been the hardest part of your week?"', '"Are you on track?"'],
        answer: 2,
        why: 'Specific, open questions get past the reflexive "all good" and surface what people actually need help with.',
      },
      {
        q: 'How often should career growth come up in 1:1s?',
        options: ['Only at annual reviews', 'Regularly, such as once a month or quarter', 'Only when they ask', 'Never; that is HR\'s job'],
        answer: 1,
        why: 'People who feel their manager invests in their growth stay longer and do better work. Make it a recurring topic.',
      },
    ],
  },
  {
    id: 'digital-clarity',
    area: 'digital',
    title: 'Digital Communication',
    subtitle: 'Clear and kind when nobody can see your face',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'You need to give constructive feedback to someone on your remote team. The best channel is:',
        options: ['A quick chat message', 'An email with the details', 'A video call, followed by a short written recap', 'A comment in the shared doc'],
        answer: 2,
        why: 'Text strips out tone, so feedback reads harsher than intended. Talk live, then confirm the agreed next steps in writing.',
      },
      {
        q: 'A manager sends "Can we talk tomorrow?" late at night with no context. The likely effect:',
        options: ['None, it\'s efficient', 'The person worries all night', 'It shows urgency in a helpful way', 'It saves time'],
        answer: 1,
        why: 'Vague messages from a manager create anxiety. Add context: "Can we talk tomorrow about the client launch? Nothing urgent."',
      },
      {
        q: 'What is the strongest first line for a long email?',
        options: ['"Hope you\'re doing well!"', '"As discussed in the meeting last week..."', '"Decision needed by Friday: which vendor should we choose?"', '"Just following up"'],
        answer: 2,
        why: 'Put the ask and deadline first. Busy readers decide from the first line whether to act now or later.',
      },
      {
        q: 'Your team spans time zones. Which habit builds the most trust?',
        options: ['Expecting replies within an hour', 'Scheduling messages for the recipient\'s working hours', 'Holding all meetings in your time zone', 'Using only email'],
        answer: 1,
        why: 'Respecting people\'s off hours signals that you value their wellbeing, and it sets a norm the whole team can follow.',
      },
    ],
  },
  {
    id: 'leader-presence',
    area: 'presence',
    title: 'Presence & Presenting',
    subtitle: 'How leaders land a message',
    minutes: 3,
    xp: 40,
    questions: [
      {
        q: 'You have five minutes at an all hands. How should you start?',
        options: ['With your agenda', 'With the single most important point', 'With a long story', 'With an apology for running short on time'],
        answer: 1,
        why: 'Lead with the headline. If people remember only one thing, make sure it is the thing that matters.',
      },
      {
        q: 'Someone asks a tough question you cannot fully answer in front of the group. The best response:',
        options: ['Answer confidently anyway', '"Great question. Here\'s what I know, here\'s what I don\'t, and I\'ll follow up by Thursday."', '"Let\'s take that offline" and move on', 'Ask someone else to answer'],
        answer: 1,
        why: 'Honesty plus a specific follow up builds credibility. "Let\'s take it offline" without a commitment sounds like dodging.',
      },
      {
        q: 'What most affects whether people trust a leader\'s message?',
        options: ['Polished slides', 'Consistency between what they say and what they do', 'A confident tone', 'Using data'],
        answer: 1,
        why: 'People watch actions more than words. A message lands when it matches what they have seen you do.',
      },
    ],
  },
];

/* ---------- Scenarios (choose your response) ---------- */

export interface ScenarioChoice {
  text: string;
  score: 1 | 2 | 3;
  feedback: string;
}

export interface Scenario {
  id: string;
  area: AreaId;
  title: string;
  setup: string;
  person: string;
  quote: string;
  choices: ScenarioChoice[];
  xp: number;
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'defensive-feedback',
    area: 'feedback',
    title: 'The Defensive Reply',
    setup: 'You just shared feedback with Maya, a senior designer, about missing stakeholder reviews. She crosses her arms.',
    person: 'Maya, Senior Designer',
    quote: '"Honestly, nobody told me those reviews were required. This feels unfair."',
    xp: 30,
    choices: [
      { text: '"It was in the project kickoff doc. You should have read it."', score: 1, feedback: 'Accurate, but it wins the point and loses the person. Defensiveness usually escalates when met with more evidence.' },
      { text: '"That\'s fair to raise. It sounds like expectations weren\'t clear. Let\'s get aligned on what reviews look like going forward."', score: 3, feedback: 'You validated her experience without abandoning the standard, and moved toward a shared solution.' },
      { text: '"Okay, forget I mentioned it."', score: 1, feedback: 'Backing off avoids discomfort now but leaves the issue unresolved and signals the standard is optional.' },
      { text: '"I hear you. Still, it needs to happen."', score: 2, feedback: 'Better. You acknowledged her, but adding curiosity about what got in the way would build more buy in.' },
    ],
  },
  {
    id: 'peer-credit',
    area: 'conflict',
    title: 'Who Gets the Credit',
    setup: 'A peer presented your team\'s analysis to leadership as their own. You find out afterward.',
    person: 'Jordan, Peer Manager',
    quote: '"Great meeting, right? Leadership loved the numbers."',
    xp: 30,
    choices: [
      { text: 'Email leadership to set the record straight.', score: 1, feedback: 'Going over their head first damages trust and makes you look political, even if you are right.' },
      { text: '"They did! I was surprised my team wasn\'t mentioned. Can we talk about how we credit work going forward?"', score: 3, feedback: 'Direct, calm, and future focused. You named the impact without accusing intent.' },
      { text: 'Say nothing, but stop sharing work with Jordan.', score: 1, feedback: 'Silent withdrawal builds resentment and erodes collaboration across teams.' },
      { text: '"Yeah. Next time, loop my team in."', score: 2, feedback: 'Clear request, but naming what happened and why it matters makes the conversation more likely to stick.' },
    ],
  },
  {
    id: 'burnout-signal',
    area: 'listening',
    title: 'The Quiet Signal',
    setup: 'Sam, usually energetic, has gone quiet in meetings for two weeks and is logging on late at night.',
    person: 'Sam, Analyst',
    quote: '"Yeah, everything\'s good. Just a lot going on."',
    xp: 30,
    choices: [
      { text: '"Cool. Let me know if you need anything."', score: 1, feedback: 'Well meant, but it puts the burden on Sam to raise it. People rarely do.' },
      { text: '"I\'ve noticed you seem quieter lately and are online late. I care about how you\'re doing. What\'s on your plate?"', score: 3, feedback: 'Specific observations plus genuine care opens the door without forcing anyone through it.' },
      { text: '"You need to stop working so late."', score: 2, feedback: 'You care about the right thing, but a directive skips understanding the cause.' },
      { text: '"Is this about the reorg?"', score: 2, feedback: 'A guess can feel presumptive. Open questions let Sam tell you what is really going on.' },
    ],
  },
  {
    id: 'reorg-announcement',
    area: 'change',
    title: 'The Reorg Announcement',
    setup: 'Two teams are merging under you next month. You are in the all hands where you announce it. Someone raises a hand right away.',
    person: 'Chris, Account Manager',
    quote: '"So is this a layoff? Just tell us straight."',
    xp: 30,
    choices: [
      { text: '"No one should worry. This is a great opportunity for all of us."', score: 1, feedback: 'Reassurance without facts sounds like spin, and people fill the gap with worst case rumors.' },
      { text: '"There are no layoffs planned as part of this change. Here is what is changing, what is not, and when you will hear more. I will stay after for questions."', score: 3, feedback: 'Direct answer, clear boundaries, and a path for follow up. That is how you calm a room without overpromising.' },
      { text: '"I am not able to discuss staffing."', score: 1, feedback: 'Even if true, a flat refusal confirms the fear. Share what you can and say when you will know more.' },
      { text: '"Good question. Let me get back to you on that."', score: 2, feedback: 'Better than a guess, but give a specific time and share whatever you do know now.' },
    ],
  },
  {
    id: 'change-fatigue',
    area: 'change',
    title: 'Change Fatigue',
    setup: 'This is the third process change this year. You are rolling out a new project tool, and a respected senior team member sighs in the meeting.',
    person: 'Dana, Senior Analyst',
    quote: '"Here we go again. We just learned the last system."',
    xp: 30,
    choices: [
      { text: '"I know, but this one is mandatory from the top."', score: 1, feedback: 'Blaming leadership above you erodes trust in the change and in you as a leader.' },
      { text: '"You are right, it has been a lot. Let me explain why this one matters, what we are dropping to make room, and how we will support the switch."', score: 3, feedback: 'You validated the fatigue, gave the why, and showed you are removing load rather than only adding it.' },
      { text: '"Let\'s stay positive, everyone."', score: 1, feedback: 'Asking for positivity dismisses a real concern and pushes the pushback underground.' },
      { text: '"I hear you. Let\'s talk after the meeting."', score: 2, feedback: 'Good instinct to engage, but the whole room heard the concern. Address it briefly in the moment too.' },
    ],
  },
  {
    id: 'blame-game',
    area: 'culture',
    title: 'The Blame Game',
    setup: 'A client launch slipped. In the debrief, people start pointing at each other. One team lead turns to you.',
    person: 'Morgan, Team Lead',
    quote: '"Honestly, this was design\'s fault. They were two weeks late."',
    xp: 30,
    choices: [
      { text: '"Okay, design, what happened?"', score: 1, feedback: 'You just put one group on trial in front of everyone. Expect less honesty in the next debrief.' },
      { text: '"Let\'s pause on who and look at what. Where did the process break down, and what will we change so it does not happen again?"', score: 3, feedback: 'You redirected from blame to learning without shutting anyone down. That is how a learning culture is built.' },
      { text: '"Everyone shares responsibility. Let\'s move on."', score: 2, feedback: 'True, but moving on skips the learning. Use the moment to fix the system.' },
      { text: 'Say nothing and let the conversation play out.', score: 1, feedback: 'Silence reads as agreement. Whatever you tolerate in the room becomes the norm.' },
    ],
  },
  {
    id: 'meeting-silence',
    area: 'culture',
    title: 'The Silent Meeting',
    setup: 'You asked your team for ideas to improve how you work together. Ten seconds of silence. Then someone speaks.',
    person: 'Lee, Coordinator',
    quote: '"I think things are fine the way they are."',
    xp: 30,
    choices: [
      { text: '"Great, glad everyone is happy!"', score: 1, feedback: 'Silence is rarely agreement. Taking it at face value means you will miss what people are not saying.' },
      { text: '"Thanks, Lee. Let me go first: one thing I could do better is give clearer priorities. What else would make your week easier?"', score: 3, feedback: 'Going first with your own improvement makes it safe for others to be honest.' },
      { text: '"Come on, someone must have an idea."', score: 1, feedback: 'Pressure increases the risk of speaking up. People need safety, not a push.' },
      { text: '"Okay, send me ideas by email if you think of any."', score: 2, feedback: 'A private channel helps, but pair it with modeling candor yourself in the room.' },
    ],
  },
  {
    id: 'meeting-derail',
    area: 'meetings',
    title: 'The Meeting Derails',
    setup: 'You are 20 minutes into a 30 minute decision meeting. The group has drifted into a long debate about a side topic.',
    person: 'Riley, Product Manager',
    quote: '"And another thing about the logo color..."',
    xp: 30,
    choices: [
      { text: 'Let it play out. People seem engaged.', score: 1, feedback: 'Engagement on the wrong topic still burns the meeting. The decision you came for gets rushed or skipped.' },
      { text: '"This matters, so let\'s park it and give it its own time. We have 10 minutes to decide on the launch date. Where do we land?"', score: 3, feedback: 'You honored the topic, protected the purpose, and refocused the room on the decision.' },
      { text: '"We\'re off topic. Moving on."', score: 2, feedback: 'Right instinct, but saying when the parked topic will be addressed keeps people from feeling dismissed.' },
      { text: 'Schedule a follow up meeting to make the decision.', score: 1, feedback: 'Another meeting rewards the drift. Facilitate back to the decision while people are in the room.' },
    ],
  },
  {
    id: 'meeting-no-actions',
    area: 'meetings',
    title: 'Groundhog Day Meeting',
    setup: 'Your weekly project meeting keeps revisiting the same issues. Nothing seems to move between meetings.',
    person: 'Sky, Engineer',
    quote: '"Didn\'t we talk about this last week too?"',
    xp: 30,
    choices: [
      { text: '"Yes, let\'s keep discussing until we figure it out."', score: 1, feedback: 'More discussion without owners produces the same result next week.' },
      { text: '"You\'re right. From now on we\'ll end with owners and dates, and I\'ll send a recap within an hour. Let\'s start with this one: who takes it?"', score: 3, feedback: 'You named the pattern and fixed the system. Clear owners and a written recap are what make meetings move work forward.' },
      { text: '"Let\'s make this meeting longer so we have time to finish."', score: 1, feedback: 'Longer meetings rarely fix a lack of follow through.' },
      { text: '"I\'ll follow up with each of you separately."', score: 2, feedback: 'Helpful, but the group never sees shared commitments. Make accountability visible.' },
    ],
  },
  {
    id: 'checked-out-1on1',
    area: 'oneonones',
    title: 'The "All Good" 1:1',
    setup: 'In your weekly 1:1, your report gives one word answers and says there is nothing to discuss. This is the third week in a row.',
    person: 'Taylor, Designer',
    quote: '"Nothing much to talk about. Everything\'s good."',
    xp: 30,
    choices: [
      { text: '"Great, let\'s end early then!"', score: 1, feedback: 'Three weeks of "all good" is a signal. Ending early means you miss whatever is going unsaid.' },
      { text: '"I\'m glad things are steady. I\'ve noticed our 1:1s have gotten short lately. Is this time useful for you? What would make it more valuable?"', score: 3, feedback: 'You named the pattern without blame and invited them to shape the meeting. That often unlocks the real conversation.' },
      { text: '"Okay, let\'s go through your project list then."', score: 2, feedback: 'Status fills the time, but turns the 1:1 into your meeting instead of theirs.' },
      { text: '"Is something wrong? You seem disengaged."', score: 1, feedback: 'A direct label can feel like an accusation and prompt defensiveness. Lead with curiosity.' },
    ],
  },
  {
    id: 'career-question',
    area: 'oneonones',
    title: 'The Career Question',
    setup: 'Near the end of a 1:1, your report brings up something you were not expecting.',
    person: 'Jamie, Analyst',
    quote: '"Honestly, I\'m not sure where my career is going here."',
    xp: 30,
    choices: [
      { text: '"You\'re doing great, don\'t worry about it."', score: 1, feedback: 'Reassurance closes the door on an important conversation they found the courage to open.' },
      { text: '"Thank you for telling me. That matters. Let\'s give it real time: can we spend our next 1:1 on where you want to grow, and I\'ll come with ideas too?"', score: 3, feedback: 'You valued the disclosure and committed specific time to it. That builds loyalty and trust.' },
      { text: '"Have you looked at the internal job board?"', score: 1, feedback: 'Pointing elsewhere can sound like you are not invested in their growth.' },
      { text: '"What do you want to be doing in two years?"', score: 2, feedback: 'A great question, but at the end of a meeting it may get a rushed answer. Make dedicated time for it.' },
    ],
  },
  {
    id: 'slack-misfire',
    area: 'digital',
    title: 'The Message That Landed Wrong',
    setup: 'You posted "This needs to be redone" on a team member\'s work in a team chat channel. An hour later they message you privately.',
    person: 'Robin, Marketing Specialist',
    quote: '"Was that really necessary in front of everyone?"',
    xp: 30,
    choices: [
      { text: '"It was just feedback, don\'t take it personally."', score: 1, feedback: 'Dismissing their reaction compounds the hit. Text lacks tone, and public critique stings.' },
      { text: '"You\'re right, and I\'m sorry. That was too blunt and too public. Can we hop on a quick call so I can explain what I meant and how I can help?"', score: 3, feedback: 'You owned the impact and moved to a richer channel to repair it. That models exactly the culture you want.' },
      { text: 'Delete the message and say nothing.', score: 1, feedback: 'Deleting it without acknowledging it leaves the hurt in place.' },
      { text: '"Sorry if it came across wrong."', score: 2, feedback: 'A start, but "if" softens accountability. Own it directly, then repair.' },
    ],
  },
  {
    id: 'remote-quiet',
    area: 'digital',
    title: 'Camera Off, Voice Off',
    setup: 'One remote team member has had their camera off and been silent in video meetings for weeks. You have a team call starting now.',
    person: 'Casey, Remote Analyst',
    quote: '(silence)',
    xp: 30,
    choices: [
      { text: 'Ask everyone to turn cameras on.', score: 1, feedback: 'A blanket rule can embarrass people and does not address why they have gone quiet.' },
      { text: 'Use the chat or a quick round so everyone contributes, then check in with Casey privately afterward.', score: 3, feedback: 'You made participation easier for everyone and followed up one on one, where people are more likely to share what is going on.' },
      { text: 'Call on Casey first, by name, in front of the group.', score: 1, feedback: 'Putting someone on the spot when they have withdrawn often deepens the withdrawal.' },
      { text: 'Ignore it; remote work is different.', score: 1, feedback: 'Isolation is a real risk on remote teams. Silence deserves curiosity.' },
    ],
  },
  {
    id: 'tough-question-allhands',
    area: 'presence',
    title: 'The Hard Question at All Hands',
    setup: 'You are presenting quarterly results to 60 people. Results were mixed. A hand goes up.',
    person: 'Sam, Sales Rep',
    quote: '"If we missed the target, why are leaders still getting bonuses?"',
    xp: 30,
    choices: [
      { text: '"That\'s not something we discuss here."', score: 1, feedback: 'Shutting down a question in public tells the whole room that hard questions are unwelcome.' },
      { text: '"That\'s a fair question, and I can tell it matters. Here\'s what I know about how bonuses work this year. I\'ll get you a fuller answer by Friday."', score: 3, feedback: 'You validated the question, shared what you could, and committed to a follow up. That is credibility under pressure.' },
      { text: 'Laugh it off and move to the next slide.', score: 1, feedback: 'Deflecting with humor reads as dismissive when stakes are personal for people.' },
      { text: '"Let\'s take that offline."', score: 2, feedback: 'Sometimes appropriate, but without a specific follow up it sounds like avoidance.' },
    ],
  },
];

/* ---------- AI role plays ---------- */

export interface Roleplay {
  id: string;
  area: AreaId;
  title: string;
  person: string;
  role: string;
  difficulty: 'Warm up' | 'Moderate' | 'Tough';
  brief: string;
  opener: string;
  persona: string; // instructions for the AI playing the person
  demoReplies: string[];
  xp: number;
}

export const ROLEPLAYS: Roleplay[] = [
  {
    id: 'missed-deadlines',
    area: 'feedback',
    title: 'Missed Deadlines',
    person: 'Alex',
    role: 'Project Coordinator',
    difficulty: 'Moderate',
    brief: 'Alex has missed three deadlines this month. They are well liked and capable. Your goal: name the pattern, understand the cause, and agree on a next step.',
    opener: 'Hey, you wanted to chat? Is everything okay?',
    persona: 'You are Alex, a well liked project coordinator who has missed three deadlines this month because you are quietly covering for a teammate on leave. You are a little defensive at first. Soften if the manager is specific, curious, and non judgmental. Keep replies to two or three sentences.',
    demoReplies: [
      'Oh. Yeah, I know I\'ve been behind. It\'s been a really heavy month.',
      'Honestly, I\'ve been picking up a lot of Priya\'s work since she went on leave. I didn\'t want to make it a big deal.',
      'That would help a lot, actually. If we could look at priorities together, I think I can get back on track.',
    ],
    xp: 60,
  },
  {
    id: 'raise-denied',
    area: 'trust',
    title: 'No Raise This Year',
    person: 'Taylor',
    role: 'Senior Engineer',
    difficulty: 'Tough',
    brief: 'Taylor asked for a raise. Budget is frozen. Share the news honestly, keep their trust, and talk about growth.',
    opener: 'So, any news on the compensation conversation?',
    persona: 'You are Taylor, a high performing senior engineer who asked for a raise. You feel undervalued and are quietly interviewing. Push back firmly if the manager is vague. Respond to honesty and concrete plans. Keep replies short.',
    demoReplies: [
      'Okay. That\'s disappointing. I\'ve taken on a lot more this year.',
      'I appreciate you being straight with me. What would actually change my situation next cycle?',
      'If we write that down with dates, I\'m willing to give it a shot.',
    ],
    xp: 80,
  },
  {
    id: 'team-tension',
    area: 'conflict',
    title: 'Two Leads at Odds',
    person: 'Riley',
    role: 'Marketing Lead',
    difficulty: 'Moderate',
    brief: 'Riley and Sales Lead Dana clashed in front of the team. You are meeting Riley first. Help them cool down and get to the real issue.',
    opener: 'I just can\'t work with Dana. They undermine everything my team does.',
    persona: 'You are Riley, a frustrated marketing lead. You feel Dana dismisses your team\'s work. You vent at first. Calm down if the manager listens and reflects before problem solving. Keep replies short.',
    demoReplies: [
      'It\'s not just today. It happens every launch.',
      'I guess what bugs me most is my team hears it and thinks their work doesn\'t matter.',
      'A conversation with the three of us could work, if it\'s about how we hand off work, not who\'s right.',
    ],
    xp: 60,
  },
  {
    id: 'new-hire-checkin',
    area: 'listening',
    title: 'First 30 Days',
    person: 'Jamie',
    role: 'New Hire',
    difficulty: 'Warm up',
    brief: 'Jamie joined a month ago. Run a check in that helps them feel welcome and surfaces anything that is not working.',
    opener: 'Hi! Thanks for setting this up.',
    persona: 'You are Jamie, a friendly new hire who is a bit lost on unwritten norms but hesitant to say so. Open up if asked open, specific questions. Keep replies short.',
    demoReplies: [
      'It\'s been good! Everyone\'s really nice.',
      'Maybe one thing, I\'m never quite sure when it\'s okay to ping people versus waiting for meetings.',
      'That helps a ton, thank you. A buddy would be great.',
    ],
    xp: 40,
  },
  {
    id: 'resistant-veteran',
    area: 'change',
    title: 'The Change Skeptic',
    person: 'Pat',
    role: 'Operations Lead, 15 years',
    difficulty: 'Tough',
    brief: 'Pat is a respected long timer whose influence will make or break a new workflow rollout. They are openly skeptical. Your goal: understand the resistance, involve them, and turn them into a partner.',
    opener: 'I\'ll be honest, I\'ve seen these rollouts come and go. Why should this one be different?',
    persona: 'You are Pat, a respected operations lead with 15 years at the company. You have watched several initiatives fail and you worry the new workflow will slow your team down. You are skeptical but fair. Soften if the manager asks about your experience, acknowledges past failures, and gives you real input into the rollout. Keep replies short.',
    demoReplies: [
      'The last two systems were dropped after six months. My team did all the work to learn them for nothing.',
      'If I\'m being fair, the reporting piece of the new workflow would actually help us. It\'s the rollout timing that worries me.',
      'If I can help shape the pilot and we start with my team\'s feedback, I\'m willing to give it a real shot.',
    ],
    xp: 80,
  },
  {
    id: 'rumor-mill',
    area: 'change',
    title: 'The Rumor Mill',
    person: 'Avery',
    role: 'Team Member',
    difficulty: 'Moderate',
    brief: 'A rumor is spreading that your department is being outsourced. It is not true, but some details of upcoming changes are still confidential. Avery comes to you worried.',
    opener: 'Can I ask you something? People are saying our whole team is getting outsourced. Is that true?',
    persona: 'You are Avery, an anxious but loyal team member who heard a rumor about outsourcing and is worried about your job. You calm down if the manager is honest, shares what they can, admits what they cannot share yet, and tells you when you will hear more. Keep replies short.',
    demoReplies: [
      'Okay. But then why is everyone so secretive lately?',
      'That makes sense. I guess I just hate not knowing.',
      'Thanks for being straight with me. Friday works. I\'ll tell the others to wait for the update too.',
    ],
    xp: 60,
  },
  {
    id: 'culture-reset',
    area: 'culture',
    title: 'Resetting the Tone',
    person: 'Jordan',
    role: 'Talented but Dismissive Engineer',
    difficulty: 'Tough',
    brief: 'Jordan delivers great work but often dismisses colleagues\' ideas in meetings, and two people have stopped speaking up. Address the behavior and its impact on the team culture, while keeping Jordan engaged.',
    opener: 'You wanted to talk? If it\'s about the sprint, we hit every target.',
    persona: 'You are Jordan, a high performing engineer who values results and sees yourself as just being efficient and honest. You do not realize your comments shut others down. You get defensive if the manager is vague or attacks your character. You open up if they give specific examples, explain the impact on the team, and ask for your perspective. Keep replies short.',
    demoReplies: [
      'I\'m just being honest. Some of those ideas really aren\'t good.',
      'I didn\'t know Sam and Priya had stopped talking in meetings. That\'s not what I want.',
      'Okay. I can ask a question before I critique. And maybe you can tell me if I slip.',
    ],
    xp: 80,
  },
  {
    id: 'run-the-meeting',
    area: 'meetings',
    title: 'Rein In the Rambler',
    person: 'Drew',
    role: 'Senior Sales Lead',
    difficulty: 'Moderate',
    brief: 'Drew is passionate and dominates your team meetings, and others have stopped contributing. You are meeting with Drew 1:1 to address it without dampening their energy.',
    opener: 'Hey! Great meeting yesterday, right? I think we really made progress.',
    persona: 'You are Drew, an energetic senior sales lead who loves debate and thinks long discussion is a sign of a healthy meeting. You do not notice that you talk most. You are open to feedback if the manager values your energy, gives a specific example, and suggests a concrete role for you. Keep replies short.',
    demoReplies: [
      'Oh, I didn\'t realize I was talking that much. I just get excited.',
      'Huh. Priya didn\'t say anything the whole time, now that you mention it.',
      'I like that. If I can be the one who asks the quiet folks for their take, I\'m in.',
    ],
    xp: 60,
  },
  {
    id: 'first-one-on-one',
    area: 'oneonones',
    title: 'Your First 1:1',
    person: 'Morgan',
    role: 'New Direct Report',
    difficulty: 'Warm up',
    brief: 'You just took over a team. This is your first 1:1 with Morgan, who reported to the previous manager for three years. Build trust, learn how they like to work, and set expectations together.',
    opener: 'Hi. So, I guess this is our first one of these. What did you want to cover?',
    persona: 'You are Morgan, a capable team member who liked the previous manager and is a little guarded with the new one. You warm up if the new manager asks about your work, how you like to be managed, and what you hope stays the same. Keep replies short.',
    demoReplies: [
      'Sure. I\'ve been here three years, mostly on the client reporting side.',
      'I like a lot of autonomy, honestly. But I appreciate a heads up when priorities shift.',
      'That sounds good. Weekly works, and I like that I can set the agenda.',
    ],
    xp: 40,
  },
  {
    id: 'remote-tone',
    area: 'digital',
    title: 'Repairing a Remote Misread',
    person: 'Robin',
    role: 'Remote Marketing Specialist',
    difficulty: 'Moderate',
    brief: 'A short message you sent on chat came across as harsh, and Robin has been distant since. You have scheduled a video call to repair it.',
    opener: 'Hi. You wanted to talk?',
    persona: 'You are Robin, a remote marketing specialist who felt publicly criticized by a terse chat message from your manager. You are hurt and a bit guarded. You relax if the manager owns the impact without excuses, explains their intent, and asks what would help. Keep replies short.',
    demoReplies: [
      'Honestly, it felt like you were calling me out in front of the whole team.',
      'I appreciate you saying that. It\'s hard to read tone over chat.',
      'A quick call for anything critical would help. And I\'ll ask if I\'m unsure what you meant.',
    ],
    xp: 60,
  },
  {
    id: 'present-bad-news',
    area: 'presence',
    title: 'Presenting Bad News Upward',
    person: 'Alex',
    role: 'Your VP',
    difficulty: 'Tough',
    brief: 'Your project will miss its launch date by six weeks. You are briefing your VP. Be clear, own it, and come with options.',
    opener: 'You said you needed ten minutes. What\'s going on with the launch?',
    persona: 'You are Alex, a busy VP who values directness and hates surprises. You get frustrated by long preambles or excuses. You respond well when the manager leads with the headline, takes ownership, and offers options with a recommendation. Keep replies short.',
    demoReplies: [
      'Six weeks. Okay. Why am I only hearing about this now?',
      'I appreciate you owning that. What are my options?',
      'Your recommendation makes sense. Send me a one page summary today and I\'ll back you with the client.',
    ],
    xp: 80,
  },
];

/* ---------- Reflection prompts, tips, badges ---------- */

export const REFLECTIONS = [
  { area: 'trust' as AreaId, prompt: 'When did someone on your team last disagree with you openly? What made it feel safe, or not?' },
  { area: 'feedback' as AreaId, prompt: 'Think of feedback you have been putting off. What is the one sentence you need to say?' },
  { area: 'listening' as AreaId, prompt: 'In your last 1:1, what percentage of the time were you talking? What would change at 30%?' },
  { area: 'recognition' as AreaId, prompt: 'Who did quiet, excellent work this week that nobody noticed?' },
  { area: 'conflict' as AreaId, prompt: 'Which working relationship feels tense right now? What do you think they need from you?' },
  { area: 'change' as AreaId, prompt: 'What change are you asking your team to make? How have you explained the why?' },
  { area: 'trust' as AreaId, prompt: 'What is one commitment you made to your team that you have not followed through on yet?' },
  { area: 'change' as AreaId, prompt: 'What is your team being asked to let go of in the current change? Have you acknowledged that loss out loud?' },
  { area: 'culture' as AreaId, prompt: 'What behavior on your team have you been tolerating that does not match the culture you want?' },
  { area: 'culture' as AreaId, prompt: 'If a new hire watched you for one week, what would they conclude your team values most?' },
  { area: 'meetings' as AreaId, prompt: 'Look at your calendar for next week. Which meeting could become an email, and which deserves more time than it gets?' },
  { area: 'oneonones' as AreaId, prompt: 'In your last round of 1:1s, who did most of the talking? What did you learn that you could not have learned any other way?' },
  { area: 'digital' as AreaId, prompt: 'Reread the last three messages you sent your team. How would they sound if you read them on a stressful day?' },
  { area: 'presence' as AreaId, prompt: 'What is the one message you want your team to remember from you this month? How many times have you said it?' },
];

export const TIPS = [
  'Ask "What else?" one more time than feels natural. The real issue is often the third thing someone mentions.',
  'Praise in public, correct in private, and be specific in both.',
  'Before a hard conversation, write the outcome you want for them, not just for you.',
  'Silence is a tool. Count to five after asking a question.',
  'Replace "Why did you..." with "What led to..." to lower defensiveness.',
  'End every 1:1 with: "What is one thing I could do to make your week easier?"',
  'When emotions run high, name it: "This feels important to both of us."',
  'People need to hear a change message five to seven times before it sinks in. Repeat the why more than feels natural.',
  'In every change, say what is staying the same. Stability anchors people while everything else moves.',
  'Culture is what you reward and what you tolerate. Both send a message every day.',
  'Celebrate the first small win of any change publicly. Momentum is a communication tool.',
  'Every meeting needs a purpose you can say in one sentence. If you cannot, it might be an email.',
  'End meetings by saying who does what by when, then send it in writing within the hour.',
  'Never cancel a 1:1 twice in a row. Shorten it instead.',
  'Before you hit send, reread your message as if you were having a bad day.',
  'Put the ask and the deadline in the first line of an email.',
  'Lead with the headline. If people remember one thing, make it the thing that matters.',
];

export const CONVERSATION_STARTERS = [
  { tag: 'Connection', text: 'What part of your work lately has given you the most energy?' },
  { tag: 'Growth', text: 'What is a skill you want to build this year, and how can I help?' },
  { tag: 'Clarity', text: 'Is there anything on your plate that feels unclear or misaligned?' },
  { tag: 'Trust', text: 'What is something I do that makes your job harder?' },
  { tag: 'Change', text: 'What worries you most about the changes coming up, and what would help?' },
  { tag: 'Culture', text: 'What is one thing about how our team works that you would never want to lose?' },
  { tag: '1:1', text: 'What should we talk about today that we did not plan to?' },
  { tag: 'Remote', text: 'How are you doing with the remote setup? What would make it easier to stay connected?' },
];

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const BADGES: Badge[] = [
  { id: 'first-step', title: 'First Step', description: 'Complete your first activity', icon: 'flag', color: colors.primary },
  { id: 'streak-3', title: 'On a Roll', description: 'Reach a 3 day streak', icon: 'zap', color: colors.amber },
  { id: 'streak-7', title: 'Week Strong', description: 'Reach a 7 day streak', icon: 'sun', color: colors.coral },
  { id: 'quiz-ace', title: 'Quiz Ace', description: 'Get a perfect score on a quiz', icon: 'check-circle', color: colors.teal },
  { id: 'roleplay-1', title: 'In the Arena', description: 'Finish an AI role play', icon: 'mic', color: colors.violet },
  { id: 'reflector', title: 'Deep Thinker', description: 'Write 3 reflections', icon: 'feather', color: colors.blue },
  { id: 'change-champion', title: 'Change Champion', description: 'Earn 100 XP in Leading Change', icon: 'trending-up', color: colors.blue },
  { id: 'culture-builder', title: 'Culture Builder', description: 'Earn 100 XP in Culture Shifts', icon: 'sun', color: colors.rose },
  { id: 'meeting-master', title: 'Meeting Master', description: 'Earn 100 XP in Effective Meetings', icon: 'calendar', color: colors.green },
  { id: 'connector', title: 'Connector', description: 'Earn 100 XP in 1:1s That Matter', icon: 'users', color: colors.plum },
  { id: 'well-rounded', title: 'Well Rounded', description: 'Earn XP in every skill area', icon: 'compass', color: colors.primary },
  { id: 'level-5', title: 'Trusted Leader', description: 'Reach level 5', icon: 'star', color: colors.amber },
];

export const LEVELS = [
  { level: 1, title: 'Emerging Leader', xp: 0 },
  { level: 2, title: 'Active Listener', xp: 150 },
  { level: 3, title: 'Clear Communicator', xp: 400 },
  { level: 4, title: 'Bridge Builder', xp: 800 },
  { level: 5, title: 'Trusted Leader', xp: 1400 },
  { level: 6, title: 'Culture Shaper', xp: 2200 },
  { level: 7, title: 'Connector in Chief', xp: 3200 },
];

export const LEADERBOARD = [
  { name: 'Priya S.', team: 'Product', xp: 1240 },
  { name: 'Marcus T.', team: 'Sales', xp: 1105 },
  { name: 'You', team: 'People Ops', xp: -1 },
  { name: 'Elena R.', team: 'Engineering', xp: 640 },
  { name: 'Devon K.', team: 'Support', xp: 420 },
];

export const PULSE = [
  { emoji: '😣', label: 'Drained' },
  { emoji: '😕', label: 'Stretched' },
  { emoji: '🙂', label: 'Steady' },
  { emoji: '😀', label: 'Energized' },
  { emoji: '🤩', label: 'Thriving' },
];

/** Rotates the featured scenario, reflection, and tip once per day. */
export function dailyPicks() {
  const d = Math.floor(Date.now() / 86400000);
  return { scenario: SCENARIOS[d % SCENARIOS.length], reflection: REFLECTIONS[d % REFLECTIONS.length], tip: TIPS[d % TIPS.length] };
}
