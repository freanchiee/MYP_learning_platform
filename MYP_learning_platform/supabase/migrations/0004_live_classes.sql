-- Live Class Creator — generic backend for host/join classroom sessions
-- (quizzes, worksheets, team icebreakers) under MYP Design, year-wise.
--
-- Deliberately generic: ONE schema for every activity, keyed by
-- `activity_id` (matches a LiveActivityDefinition in
-- data/design/live/*.ts). Per-activity content (questions, stages,
-- teams) lives in TypeScript, not the DB — only session/player/event
-- state is persisted here, as free-form jsonb. This is what makes the
-- engine reusable across MYP2/3/4 activities without a migration per
-- activity. Safe to run multiple times.

create table if not exists public.live_sessions (
  code         text primary key,                    -- 4-char join code, e.g. "K7QX"
  activity_id  text not null,                        -- matches LiveActivityDefinition.id
  host_id      uuid not null references auth.users(id) on delete cascade,
  status       text not null default 'lobby',        -- 'lobby' | 'active' | 'ended'
  stage_idx    integer not null default 0,           -- index into activity.stages[]
  state        jsonb not null default '{}'::jsonb,   -- shared session state (current mcq idx, lock, team scores, reveal...)
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create table if not exists public.live_players (
  id           uuid primary key default gen_random_uuid(),
  session_code text not null references public.live_sessions(code) on delete cascade,
  user_id      uuid not null references auth.users(id) on delete cascade,
  name         text not null,
  team         integer,                              -- index into activity.teams[], null if activity has no teams
  points       integer not null default 0,
  badges       text[] not null default '{}',
  data         jsonb not null default '{}'::jsonb,    -- per-player activity state (quiz answers, worksheet drafts, % complete)
  joined_at    timestamptz not null default now(),
  unique (session_code, user_id)
);

create table if not exists public.live_events (
  id           uuid primary key default gen_random_uuid(),
  session_code text not null references public.live_sessions(code) on delete cascade,
  player_id    uuid references public.live_players(id) on delete cascade,  -- null = host broadcast/system event
  type         text not null,                         -- 'answer' | 'idea' | 'message' | ...
  payload      jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now()
);

create table if not exists public.live_grades (
  session_code text not null references public.live_sessions(code) on delete cascade,
  player_id    uuid not null references public.live_players(id) on delete cascade,
  scores       jsonb not null default '{}'::jsonb,     -- { "A.i": 6, "A.ii": 5, ... } per activity.criterionStrands
  feedback     text not null default '',
  graded       boolean not null default false,
  updated_at   timestamptz not null default now(),
  primary key (session_code, player_id)
);

alter table public.live_sessions enable row level security;
alter table public.live_players  enable row level security;
alter table public.live_events   enable row level security;
alter table public.live_grades   enable row level security;

-- Sessions: any signed-in user can read (needed to look up a session by
-- code before joining, and to render the host's own projected screen).
-- Only the host can create their session or update it (stage/state).
drop policy if exists "live_sessions_read" on public.live_sessions;
create policy "live_sessions_read" on public.live_sessions
  for select using (auth.role() = 'authenticated');

drop policy if exists "live_sessions_host_insert" on public.live_sessions;
create policy "live_sessions_host_insert" on public.live_sessions
  for insert with check (auth.uid() = host_id);

drop policy if exists "live_sessions_host_update" on public.live_sessions;
create policy "live_sessions_host_update" on public.live_sessions
  for update using (auth.uid() = host_id) with check (auth.uid() = host_id);

-- Players: any signed-in user can read the live roster (host dashboard +
-- teammates); a student can only insert/update their OWN player row.
drop policy if exists "live_players_read" on public.live_players;
create policy "live_players_read" on public.live_players
  for select using (auth.role() = 'authenticated');

drop policy if exists "live_players_self_insert" on public.live_players;
create policy "live_players_self_insert" on public.live_players
  for insert with check (auth.uid() = user_id);

drop policy if exists "live_players_self_update" on public.live_players;
create policy "live_players_self_update" on public.live_players
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Events (answers/ideas/messages): readable by anyone signed in in that
-- session (host dashboard + log feed). A student may only insert events
-- attributed to their own player row; the host may broadcast with
-- player_id null.
drop policy if exists "live_events_read" on public.live_events;
create policy "live_events_read" on public.live_events
  for select using (auth.role() = 'authenticated');

drop policy if exists "live_events_write" on public.live_events;
create policy "live_events_write" on public.live_events
  for insert with check (
    player_id is null
    or exists (select 1 from public.live_players p where p.id = player_id and p.user_id = auth.uid())
  );

-- Grades: any signed-in user can read (a student reads their own via
-- client-side filtering); only the session's host can write.
drop policy if exists "live_grades_read" on public.live_grades;
create policy "live_grades_read" on public.live_grades
  for select using (auth.role() = 'authenticated');

drop policy if exists "live_grades_host_insert" on public.live_grades;
create policy "live_grades_host_insert" on public.live_grades
  for insert with check (
    exists (select 1 from public.live_sessions s where s.code = session_code and s.host_id = auth.uid())
  );

drop policy if exists "live_grades_host_update" on public.live_grades;
create policy "live_grades_host_update" on public.live_grades
  for update using (
    exists (select 1 from public.live_sessions s where s.code = session_code and s.host_id = auth.uid())
  ) with check (
    exists (select 1 from public.live_sessions s where s.code = session_code and s.host_id = auth.uid())
  );

-- Realtime — idempotent add (errors if a table is already published,
-- which is fine on re-run; ignore that specific case only).
do $$
begin
  alter publication supabase_realtime add table public.live_sessions;
exception when duplicate_object then null;
end $$;
do $$
begin
  alter publication supabase_realtime add table public.live_players;
exception when duplicate_object then null;
end $$;
do $$
begin
  alter publication supabase_realtime add table public.live_events;
exception when duplicate_object then null;
end $$;
do $$
begin
  alter publication supabase_realtime add table public.live_grades;
exception when duplicate_object then null;
end $$;
