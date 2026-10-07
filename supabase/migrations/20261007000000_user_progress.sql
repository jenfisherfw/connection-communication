-- Cloud backup of each person's Rapport progress (XP, streak, badges, profile, reflections).
create table if not exists public.user_progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

-- Row level security: people can only ever read or write their own row.
alter table public.user_progress enable row level security;

create policy "Read own progress" on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Insert own progress" on public.user_progress
  for insert with check (auth.uid() = user_id);

create policy "Update own progress" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
