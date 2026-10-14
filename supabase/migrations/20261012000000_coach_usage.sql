-- Daily cap on AI coach requests per person, so one heavy user can't run up the Claude bill.
-- Safe to run more than once.

create table if not exists public.coach_usage (
  user_id uuid not null references auth.users (id) on delete cascade,
  day date not null default current_date,
  count integer not null default 0,
  primary key (user_id, day)
);

-- Locked down: only the coach function (using the service role) reads or writes this table.
alter table public.coach_usage enable row level security;
revoke all on public.coach_usage from anon, authenticated;

-- Atomically counts one request and reports whether it is within today's limit.
create or replace function public.use_coach_request(p_user uuid, p_limit integer)
returns table (allowed boolean, used integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count integer;
begin
  insert into public.coach_usage as cu (user_id, day, count)
  values (p_user, current_date, 1)
  on conflict (user_id, day) do update set count = cu.count + 1
  returning cu.count into new_count;
  return query select new_count <= p_limit, new_count;
end;
$$;

revoke all on function public.use_coach_request(uuid, integer) from public, anon, authenticated;
grant execute on function public.use_coach_request(uuid, integer) to service_role;
