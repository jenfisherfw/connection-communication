# Rapport

**Lead with connection.** A gamified mobile app that helps people leaders and HR professionals get better at feedback, conflict resolution, listening, and building trust with the people they lead and work with.

![Rapport MVP screens](docs/rapport-mvp-showcase.png)

## What is in the MVP

| Feature | Where |
| --- | --- |
| Daily plan with streaks and XP (scenario, energy check in, reflection, practice rep) | Home |
| Scenario of the Day: choose your response, get rated feedback | `src/app/scenario/[id].tsx` |
| Quizzes with instant explanations | `src/app/quiz/[id].tsx` |
| AI role plays: rehearse with a simulated employee, then get a scored debrief | `src/app/roleplay/[id].tsx` |
| Ask Coach Ari: an AI coach for any leadership question | `src/app/coach.tsx` |
| Private leader reflections | `src/app/reflect.tsx` |
| Skill areas with mastery bars | Explore and `src/app/area/[id].tsx` |
| Levels, badges, weekly goal, team leaderboard | Progress |

Gamification lives in `src/state/AppState.tsx` (XP, levels, streaks, badges, weekly goal). Content lives in `src/data/content.ts` so new quizzes, scenarios, and role plays can be added without touching screens.

## Run it

```bash
npm install
npx expo start        # press i for iOS simulator, a for Android, w for web
```

Scan the QR code with the Expo Go app to try it on your phone.

### Turning on the real AI coach

Out of the box the coach runs in **demo mode** with scripted replies, so the whole experience is clickable without any keys. To use Claude:

1. Create a free project at [supabase.com](https://supabase.com) and install the Supabase CLI.
2. `supabase secrets set ANTHROPIC_API_KEY=sk-ant-...`
3. `supabase functions deploy coach --no-verify-jwt`
4. Copy `.env.example` to `.env.local` and set `EXPO_PUBLIC_COACH_URL` to the function URL.

The API key stays on the server. The app never sees it.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run typecheck` | TypeScript check |
| `npm run export:web` | Builds the web version into `dist/` |
| `npm run screenshots` | Renders `dist/` in Chromium and saves phone screenshots to `docs/screenshots/` |

See [docs/ROADMAP.md](docs/ROADMAP.md) for the plan from MVP to the App Store.
