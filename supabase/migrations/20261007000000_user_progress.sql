-- Cloud backup of each person's Rapport progress (XP, streak, badges, profile, reflections).
-- Safe to run more than once: every step checks or replaces what is already there.

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Signed in users can read and write the table; row level security below limits them to their own row.
grant select, insert, update on public.user_progress to authenticated;
revoke all on public.user_progress from anon;

alter table public.user_progress enable row level security;

drop policy if exists "Read own progress" on public.user_progress;
create policy "Read own progress" on public.user_progress
  for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Insert own progress" on public.user_progress;
create policy "Insert own progress" on public.user_progress
  for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Update own progress" on public.user_progress;
create policy "Update own progress" on public.user_progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
