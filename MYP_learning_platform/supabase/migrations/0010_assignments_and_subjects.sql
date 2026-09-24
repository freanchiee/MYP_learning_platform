-- Teacher subjects, and assigning a past paper or topic revision to a class.
-- Additive only.

alter table public.profiles add column if not exists subjects text[] not null default '{}';

create table if not exists public.class_assignments (
  id          uuid primary key default gen_random_uuid(),
  class_id    uuid not null references public.classes(id) on delete cascade,
  teacher_id  uuid not null references auth.users(id) on delete cascade,
  kind        text not null check (kind in ('paper', 'topic')),
  subject     text not null,                 -- physics | chemistry | biology | ...
  ref         text not null,                 -- paper id, or topic name
  title       text not null,
  due_at      timestamptz,
  created_at  timestamptz not null default now()
);
create index if not exists class_assignments_class_idx on public.class_assignments(class_id);

-- Topic revision has no submitted attempt, so a student marks it done.
create table if not exists public.assignment_progress (
  assignment_id uuid not null references public.class_assignments(id) on delete cascade,
  user_id       uuid not null references auth.users(id) on delete cascade,
  done_at       timestamptz not null default now(),
  primary key (assignment_id, user_id)
);

alter table public.class_assignments enable row level security;
alter table public.assignment_progress enable row level security;

drop policy if exists "assignments_teacher_all" on public.class_assignments;
create policy "assignments_teacher_all" on public.class_assignments
  for all using (teacher_id = auth.uid())
  with check (teacher_id = auth.uid() and exists (select 1 from public.classes c where c.id = class_id and c.teacher_id = auth.uid()));

drop policy if exists "assignments_member_read" on public.class_assignments;
create policy "assignments_member_read" on public.class_assignments
  for select using (public.is_class_member(class_id));

drop policy if exists "progress_self_all" on public.assignment_progress;
create policy "progress_self_all" on public.assignment_progress
  for all using (user_id = auth.uid())
  with check (user_id = auth.uid() and exists (select 1 from public.class_assignments a where a.id = assignment_id and public.is_class_member(a.class_id)));

drop policy if exists "progress_teacher_read" on public.assignment_progress;
create policy "progress_teacher_read" on public.assignment_progress
  for select using (exists (select 1 from public.class_assignments a where a.id = assignment_id and a.teacher_id = auth.uid()));

-- A teacher may read the exam attempts of students in their own classes
-- (to show paper-assignment progress). SECURITY DEFINER avoids RLS recursion.
create or replace function public.teaches_student(p_student uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (
    select 1 from public.class_members m join public.classes c on c.id = m.class_id
    where m.user_id = p_student and c.teacher_id = auth.uid())
$$;
revoke all on function public.teaches_student(uuid) from public, anon;
grant execute on function public.teaches_student(uuid) to authenticated;

drop policy if exists "attempts: teacher reads class" on public.attempts;
create policy "attempts: teacher reads class" on public.attempts
  for select using (public.teaches_student(user_id));

-- Free plan: 1 assigned past paper per teacher (topic revision is free).
create or replace function public.enforce_paper_assignment_limit()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.kind = 'paper' and not public.has_full_access(new.teacher_id)
     and (select count(*) from public.class_assignments where teacher_id = new.teacher_id and kind = 'paper') >= 1 then
    raise exception 'Free plan: 1 assigned past paper. Upgrade to assign more.';
  end if;
  return new;
end $$;
drop trigger if exists assignments_paper_limit on public.class_assignments;
create trigger assignments_paper_limit before insert on public.class_assignments
  for each row execute function public.enforce_paper_assignment_limit();
