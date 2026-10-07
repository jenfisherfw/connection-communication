# Turn on the AI coach and accounts

One Supabase project powers both the live AI coach and account sign in. Plan on about 20 minutes. No coding needed; everything happens in two websites and one file.

## What you need
1. A **Supabase** account (free): https://supabase.com
2. An **Anthropic API key**: https://console.anthropic.com (add a payment method and a monthly spend limit under Billing so costs stay predictable)

## Step 1: Create the Supabase project
1. In Supabase, click **New project**. Name it `rapport`, pick a strong database password (save it somewhere safe), and choose the region closest to your users.
2. Wait about two minutes for it to finish setting up.

## Step 2: Create the progress table
1. In the left menu open **SQL Editor**, then **New query**.
2. Copy everything from `supabase/migrations/20261007000000_user_progress.sql` in this repo, paste it in, and click **Run**. You should see "Success."

## Step 3: Add your Anthropic key as a secret
1. Open **Edge Functions**, then **Secrets** (or **Project Settings > Edge Functions**).
2. Add a secret named `ANTHROPIC_API_KEY` with your key as the value. It stays on Supabase's servers and never goes into the app.

## Step 4: Deploy the coach
1. In **Edge Functions**, click **Deploy a new function**, then **Via Editor**.
2. Name it exactly `coach`.
3. Replace the sample code with everything from `supabase/functions/coach/index.ts`, then click **Deploy**.
4. Leave **Enforce JWT verification** turned on. The app sends the right credentials automatically.

## Step 5: Set up sign in
1. Open **Authentication > Sign In / Providers** and make sure **Email** is enabled.
2. For your private beta, you can turn off **Confirm email** so testers can sign in right away. Turn it back on before a public launch.

## Step 6: Connect the app
1. Open **Project Settings > API** and copy the **Project URL** and the **anon public** key.
2. In the project folder, copy `.env.example` to a new file called `.env.local` and fill in:
   ```
   EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Restart the app with `npx expo start`.

## Check that it worked
1. **Profile > Coach** should show **AI coach status: Connected** with a green dot.
2. Ask Coach Ari a question. You should get a reply written for your role and focus areas, not the scripted demo answer.
3. Finish a role play and tap **End and get feedback**. The score and tips now come from Claude.
4. **Profile > Account > Sign in or create account**, then complete a quiz. In Supabase, **Table Editor > user_progress** should now show a row for you.

If something fails, open **Edge Functions > coach > Logs** in Supabase. That is where errors show up.

## Daily reminders
Reminders are scheduled on the phone itself, so they need no server setup. They work in development builds and App Store builds. On iPhone, Expo Go has limited notification support, so test reminders with a development build (`npx eas-cli@latest build --profile development`).

## Costs
* Supabase: free tier covers a beta comfortably.
* Claude: each coach reply or role play turn costs a fraction of a cent to a few cents depending on length. The spend limit you set in the Anthropic console is your safety net.
