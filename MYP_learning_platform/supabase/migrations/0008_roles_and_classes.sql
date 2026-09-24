-- Roles (teacher / student), classes, and assigning live sessions to a class.
-- Additive only: existing rows and running live sessions are unaffected.

alter table public.profiles add column if not exists role text
  check (role in ('student', 'teacher'));

create table if not exists public.classes (
  id          uuid primary key default gen_random_uuid(),
  teacher_id  uuid not null references auth.users(id) on delete cascade,
  name        text not null check (char_length(name) between 1 and 80),
  join_code   text not null unique,
  created_at  timestamptz not null default now()
);

create table if not exists public.class_members (
  class_id   uuid not null references public.classes(id) on delete cascade,
  user_id    uuid not null references auth.users(id) on delete cascade,
  name       text not null default '',
  joined_at  timestamptz not null default now(),
  primary key (class_id, user_id)
);

alter table public.live_sessions add column if not exists class_id uuid
  references public.classes(id) on delete set null;
create index if not exists live_sessions_class_idx on public.live_sessions(class_id);

alter table public.classes enable row level security;
alter table public.class_members enable row level security;

-- Teachers manage their own classes; students see the classes they belong to.
drop policy if exists "classes_teacher_all" on public.classes;
create policy "classes_teacher_all" on public.classes
  for all using (teacher_id = auth.uid()) with check (teacher_id = auth.uid());

-- SECURITY DEFINER so this check does not re-enter class_members' RLS (which
-- reads classes) and recurse.
create or replace function public.is_class_member(p_class uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.class_members m where m.class_id = p_class and m.user_id = auth.uid())
$$;
revoke all on function public.is_class_member(uuid) from public, anon;
grant execute on function public.is_class_member(uuid) to authenticated;

drop policy if exists "classes_member_read" on public.classes;
create policy "classes_member_read" on public.classes
  for select using (public.is_class_member(id));

-- Members: a teacher sees/removes members of their classes; a student sees and
-- leaves their own membership. Joining goes through join_class() below.
drop policy if exists "class_members_teacher_read" on public.class_members;
create policy "class_members_teacher_read" on public.class_members
  for select using (exists (select 1 from public.classes c where c.id = class_id and c.teacher_id = auth.uid()));

drop policy if exists "class_members_teacher_delete" on public.class_members;
create policy "class_members_teacher_delete" on public.class_members
  for delete using (exists (select 1 from public.classes c where c.id = class_id and c.teacher_id = auth.uid()));

drop policy if exists "class_members_self_read" on public.class_members;
create policy "class_members_self_read" on public.class_members
  for select using (user_id = auth.uid());

drop policy if exists "class_members_self_delete" on public.class_members;
create policy "class_members_self_delete" on public.class_members
  for delete using (user_id = auth.uid());

-- A student joins with a class code. SECURITY DEFINER so they never need to
-- read the classes table directly (which would expose every code).
create or replace function public.join_class(p_code text, p_name text)
returns table (id uuid, name text)
language plpgsql security definer set search_path = public as $$
declare v_class public.classes;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select * into v_class from public.classes where join_code = upper(trim(p_code));
  if not found then raise exception 'No class with that code'; end if;
  insert into public.class_members (class_id, user_id, name)
  values (v_class.id, auth.uid(), left(coalesce(p_name, ''), 80))
  on conflict (class_id, user_id) do update set name = excluded.name;
  return query select v_class.id, v_class.name;
end $$;

revoke all on function public.join_class(text, text) from public, anon;
grant execute on function public.join_class(text, text) to authenticated;
