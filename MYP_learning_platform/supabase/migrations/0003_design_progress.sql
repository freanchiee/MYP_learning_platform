-- Self-study MYP Design progress: each user's scaffold answers + rubric
-- self-assessment, per project. One row per (user, project). Cross-device.
-- Safe to run multiple times.

create table if not exists public.design_progress (
  user_id    uuid not null references auth.users(id) on delete cascade,
  project_id text not null,
  answers    jsonb not null default '{}'::jsonb,  -- { "A:0": "...", "A:1": "...", ... }
  bands      jsonb not null default '{}'::jsonb,  -- { "A": 3, "B": 2, ... } (band index 0–3)
  updated_at timestamptz not null default now(),
  primary key (user_id, project_id)
);

alter table public.design_progress enable row level security;

-- Each user reads and writes only their own rows. `for all` covers SELECT (needed
-- for UPDATE to see the row), INSERT, UPDATE and DELETE — so upsert works.
drop policy if exists "design_progress_owner" on public.design_progress;
create policy "design_progress_owner" on public.design_progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
