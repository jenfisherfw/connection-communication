import { SUPPORT_EMAIL } from '../config';

/**
 * The privacy policy and terms of use, shown in the app (Profile) and exported to
 * docs/PRIVACY_POLICY.md and docs/TERMS_OF_USE.md for your website.
 *
 * DRAFT: have a lawyer review both before launch. The docs copies are generated from this
 * file, so after editing here, regenerate them (ask Claude) to keep the website in step.
 */

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
}

export const COMPANY = 'Evolution to Revolution Consulting';
export const EFFECTIVE_DATE = 'October 17, 2026';
const contact = SUPPORT_EMAIL || '[support email]';

export const PRIVACY_POLICY: LegalDoc = {
  title: 'Privacy Policy',
  updated: EFFECTIVE_DATE,
  intro: `This policy explains what information the Rapport app collects, how we use it, and the choices you have. Rapport is provided by ${COMPANY} ("we", "us"). We built Rapport to be a private place to practice leadership, and we collect only what the app needs to work.`,
  sections: [
    {
      heading: 'Information you give us',
      bullets: [
        'Account details: your email address and password if you create an account. Passwords are handled by our authentication provider and are never visible to us.',
        'Profile answers: your first name, role, team size, focus areas, preferred language, and reminder time.',
        'What you write: reflections, practice role play replies, and messages to Coach Ari.',
        'Your progress: activities completed, scores, XP, streaks, badges, micro lesson progress, and energy check ins.',
      ],
    },
    {
      heading: 'Information we do not collect',
      bullets: [
        'We do not collect your location, contacts, photos, or payment details.',
        'We do not use advertising, ad tracking, or third party analytics in the app.',
        'We do not sell your information, and we do not share it for advertising.',
      ],
    },
    {
      heading: 'How we use your information',
      bullets: [
        'To run the app: show your daily lessons, track your progress, and award XP and badges.',
        'To back up your progress so it is safe if you change or lose your phone.',
        'To generate Coach Ari and role play replies, tailored with your name, role, team size, focus areas, and language.',
        'To keep the service fair and safe, including a daily limit on AI requests and automatic safety resources when a message mentions danger or misconduct.',
        'To respond when you contact us.',
      ],
    },
    {
      heading: 'Coach Ari and AI processing',
      paragraphs: [
        'When you use Coach Ari or a practice role play, your messages and the profile details above are sent securely to our AI provider, Anthropic, to generate a reply. We do not store the content of these conversations on our servers; we keep only a daily count of AI requests for each account. Our AI provider processes this information to provide the service to us under its commercial terms, which do not permit using it to train AI models.',
        'Please avoid entering other people’s full names, health details, or other sensitive personal information in your messages. Describe situations in general terms instead.',
      ],
    },
    {
      heading: 'Where your information is stored',
      paragraphs: [
        'Your progress, profile answers, and reflections are saved on your device and backed up to our database, hosted by Supabase. This includes guests who have not created an account, so their progress is not lost. Data is encrypted in transit, and database rules allow each person to read and change only their own records. Our service providers may store and process information in the United States.',
      ],
    },
    {
      heading: 'Service providers',
      bullets: [
        'Supabase: account sign in, database, and server functions.',
        'Anthropic: AI processing for Coach Ari and role plays.',
        'Expo: delivering app updates.',
        'Apple and Google: app distribution and the reminder notifications your phone shows. Reminders are scheduled on your device.',
      ],
    },
    {
      heading: 'Your employer',
      paragraphs: [
        'If your organization gave you access to Rapport, we do not share your reflections, coach conversations, or individual progress with your employer.',
      ],
    },
    {
      heading: 'Keeping and deleting your information',
      paragraphs: [
        'We keep your information while you use Rapport. You can delete everything at any time in the app: go to Profile and tap Delete account (or Erase my data if you have not created an account). This permanently deletes your account, your backed up progress and reflections, and your AI usage records from our servers, and erases the data on your device.',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        `Depending on where you live, you may have the right to access, correct, download, or delete your information, and to object to or limit how it is used. You can delete your data in the app, and you can contact us at ${contact} for anything else. We will respond within the time the law requires.`,
      ],
    },
    {
      heading: 'Children',
      paragraphs: ['Rapport is designed for working adults and is not intended for anyone under 18. We do not knowingly collect information from children.'],
    },
    {
      heading: 'Changes to this policy',
      paragraphs: ['If we make meaningful changes, we will update the date above and let you know in the app.'],
    },
    {
      heading: 'Contact us',
      paragraphs: [`${COMPANY}. Email: ${contact}`],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  updated: EFFECTIVE_DATE,
  intro: `These terms are an agreement between you and ${COMPANY} ("we", "us") for your use of the Rapport app. By using Rapport, you agree to them. If you do not agree, please do not use the app.`,
  sections: [
    {
      heading: 'What Rapport is',
      paragraphs: [
        'Rapport is an educational tool that helps leaders practice communication through scenarios, micro lessons, reflections, a toolkit, and an AI coach called Ari.',
      ],
    },
    {
      heading: 'Not professional advice',
      paragraphs: [
        'Rapport and Coach Ari provide general coaching on communication only. They are not legal, human resources, medical, or mental health advice, and they do not replace your organization’s policies or professionals.',
        'Decisions about hiring, discipline, termination, pay, accommodations, investigations, and any harassment, discrimination, safety, or legal matter belong with your HR team, your organization’s policies, and qualified professionals.',
        'Coach Ari is powered by artificial intelligence and can be wrong or incomplete. Use your own judgment.',
        'If anyone is in danger, call 911 or your local emergency number. For someone in crisis in the US, call or text 988.',
      ],
    },
    {
      heading: 'Your account',
      bullets: [
        'You must be at least 18 to use Rapport.',
        'Keep your password private. You are responsible for activity on your account.',
        'Give accurate information and keep your email address current.',
      ],
    },
    {
      heading: 'Using Rapport responsibly',
      bullets: [
        'Do not use Rapport for anything unlawful, harmful, or harassing.',
        'Do not enter confidential information you are not allowed to share, or sensitive personal details about other people.',
        'Do not try to misuse the AI coach, get around its limits or safety features, or access other people’s data.',
        'Do not copy, resell, or reverse engineer the app or its content.',
      ],
    },
    {
      heading: 'Your content',
      paragraphs: [
        'You own what you write in Rapport, such as reflections and messages. You give us permission to store and process it only to provide the app to you, as described in our Privacy Policy.',
      ],
    },
    {
      heading: 'Our content',
      paragraphs: [
        `The scenarios, lessons, toolkit, design, and other content in Rapport belong to ${COMPANY} and its licensors. You may use them for your own leadership development and with your own team. Templates from the Toolkit may be copied and adapted for your work.`,
      ],
    },
    {
      heading: 'Fair use of the AI coach',
      paragraphs: ['To keep the service reliable for everyone, the number of AI coaching requests per day may be limited.'],
    },
    {
      heading: 'Changes and availability',
      paragraphs: [
        'We may update, change, or stop parts of Rapport. We try to keep it available, but we cannot promise it will always be uninterrupted or error free. If we change these terms in a meaningful way, we will update the date above and let you know in the app.',
      ],
    },
    {
      heading: 'Ending your use',
      paragraphs: [
        'You can stop using Rapport and delete your account at any time from Profile. We may suspend or end access if these terms are seriously or repeatedly broken.',
      ],
    },
    {
      heading: 'Disclaimers and limits of liability',
      paragraphs: [
        'Rapport is provided "as is" and "as available". To the extent the law allows, we disclaim all warranties, and we are not liable for indirect, incidental, or consequential damages, or for decisions you make based on content in the app. Nothing in these terms limits rights you have under laws that cannot be waived.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: ['These terms are governed by the laws of [state or country], without regard to conflict of law rules.'],
    },
    {
      heading: 'Contact us',
      paragraphs: [`${COMPANY}. Email: ${contact}`],
    },
  ],
};
