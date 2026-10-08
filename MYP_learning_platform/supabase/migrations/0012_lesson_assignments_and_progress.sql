-- DP Physics lessons as class assignments, with dripped unlocking, live or asynchronous mode,
-- and per-student lesson progress saved to the account (not just the browser).
-- Additive only: existing assignments (papers, topics), classes and running sessions are unaffected.

-- 1. A class assignment can now be a lesson. `ref` is "<module-slug>/<lesson-slug>".
alter table public.class_assignments drop constraint if exists class_assignments_kind_check;
alter table public.class_assignments add constraint class_assignments_kind_check
  check (kind in ('paper', 'topic', 'lesson'));

-- async = students work through it on their own; live = the teacher hosts it in a live session.
alter table public.class_assignments add column if not exists mode text not null default 'async'
  check (mode in ('async', 'live'));
-- lesson = the whole lesson; questions = just its check questions (skip the reading).
alter table public.class_assignments add column if not exists scope text not null default 'lesson'
  check (scope in ('lesson', 'questions'));
-- Dripped unlocking: null means open now. For a live assignment it is the planned date, shown to students.
alter table public.class_assignments add column if not exists unlock_at timestamptz;
-- Order within a drip schedule (a whole module assigned at once).
alter table public.class_assignments add column if not exists position integer;

-- 2. Lesson progress, one row per (student, lesson). Mirrors the shape the browser already keeps
--    (lib/learn/progress.ts): which option they picked on each check, their written answers, done.
create table if not exists public.lesson_progress (
  user_id     uuid not null references auth.users(id) on delete cascade,
  lesson_key  text not null check (char_length(lesson_key) between 3 and 200),
  checks      jsonb not null default '{}'::jsonb check (pg_column_size(checks) < 20000),
  apply       jsonb not null default '{}'::jsonb check (pg_column_size(apply) < 100000),
  done        boolean not null default false,
  done_at     timestamptz,
  updated_at  timestamptz not null default now(),
  primary key (user_id, lesson_key)
);

alter table public.lesson_progress enable row level security;

drop policy if exists "lesson_progress_self_all" on public.lesson_progress;
create policy "lesson_progress_self_all" on public.lesson_progress
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- A teacher reads the progress of students in their own classes (teaches_student: migration 0010).
drop policy if exists "lesson_progress_teacher_read" on public.lesson_progress;
create policy "lesson_progress_teacher_read" on public.lesson_progress
  for select using (public.teaches_student(user_id));

create index if not exists lesson_progress_key_idx on public.lesson_progress(lesson_key);
