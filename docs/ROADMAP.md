# Rapport: build plan and roadmap

## Recommended stack

| Layer | Choice | Why |
| --- | --- | --- |
| App | **Expo (React Native) + Expo Router** | One codebase for iPhone, Android, and web. Cloud builds and App Store submission through EAS, no Mac required. Over the air updates for fast content fixes. |
| Backend | **Supabase** | Auth (email, Google, Apple, SSO later), Postgres for progress and content, row level security for privacy, Edge Functions for the AI. Generous free tier. |
| AI | **Claude API** via a Supabase Edge Function | Coaching, role play, and structured scoring. The API key never ships in the app. |
| Payments | **RevenueCat** | Handles App Store and Google Play subscriptions in one place. |
| Analytics | **PostHog** | Funnels, retention, feature flags for A/B testing gamification. |
| Content admin | Supabase table editor to start, a simple admin page later | Lets non engineers add quizzes and scenarios. |

No code alternatives (FlutterFlow, Bubble, Adalo) are faster for a static prototype but struggle with custom gamification, AI streaming, and B2B features like SSO and team dashboards. Expo keeps you on a path that scales.

## Phases

### Phase 1: MVP (this repo, done)
- Five tab app: Home, Explore, Practice, Progress, Profile
- Quizzes, scenarios, AI role plays with scored feedback, AI coach, reflections
- XP, levels, streaks, badges, weekly goal, sample leaderboard
- AI backend function ready to deploy; demo mode when not connected

### Phase 2: Private beta (2 to 4 weeks)
1. Create Apple Developer ($99/yr) and Google Play ($25 one time) accounts.
2. Connect Supabase to turn on the live coach and accounts (see docs/SETUP_AI_AND_ACCOUNTS.md).
3. ~~Supabase Auth with progress backed up to Postgres~~ (built)
4. ~~Onboarding: role, team size, top two focus areas, reminder time~~ (built)
5. ~~Weekday reminder notifications~~ (built)
6. Ship to 20 to 50 leaders through TestFlight and Google Play internal testing.
7. Interview users weekly; watch Day 1, Day 7, Day 30 retention.

### Launch readiness (built)
- ~~In app account deletion (App Store requirement)~~ (built)
- ~~Branded app icon, Android adaptive icon, and launch screen~~ (built)
- ~~Server enforced daily limit on AI requests~~ (built)

### Phase 3: Public launch
- 40+ quizzes, 30+ scenarios, 15+ role plays across all six skill areas
- Subscription paywall (free tier: daily plan and 3 AI reps per week)
- App Store listing, screenshots, privacy labels, and a crisis or EAP resource page
- Content review by an HR or employment law professional

### Phase 4: Teams and HR (the B2B revenue engine)
- Team workspaces, invites, shared weekly challenges, real leaderboards
- HR dashboard: anonymized skill growth and engagement across managers
- Custom scenarios from a company's own values and policies
- SSO (Okta, Azure AD), admin controls, data retention settings
- Optional voice role play for spoken practice

## Guardrails to keep
- Reflections and role play transcripts are private to the user. Team and HR views show only aggregated XP and skill trends.
- The coach routes harassment, discrimination, safety, and legal issues to HR or counsel rather than advising on them.
- Leaderboards are opt in.
