import { colors } from '../theme';

export type AreaId = 'feedback' | 'conflict' | 'listening' | 'trust' | 'recognition' | 'change' | 'culture';

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
];

export const CONVERSATION_STARTERS = [
  { tag: 'Connection', text: 'What part of your work lately has given you the most energy?' },
  { tag: 'Growth', text: 'What is a skill you want to build this year, and how can I help?' },
  { tag: 'Clarity', text: 'Is there anything on your plate that feels unclear or misaligned?' },
  { tag: 'Trust', text: 'What is something I do that makes your job harder?' },
  { tag: 'Change', text: 'What worries you most about the changes coming up, and what would help?' },
  { tag: 'Culture', text: 'What is one thing about how our team works that you would never want to lose?' },
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
  { id: 'well-rounded', title: 'Well Rounded', description: 'Earn XP in all 7 skill areas', icon: 'compass', color: colors.primary },
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
