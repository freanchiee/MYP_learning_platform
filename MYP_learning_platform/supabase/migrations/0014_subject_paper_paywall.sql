-- Free preview: everyone gets the free resources (unlocked already, not a DB
-- concern) plus ONE sample paper per subject, chosen to mirror
-- lib/paper-access.ts's FREE_PAPER_BY_SUBJECT (keep these two lists in sync —
-- there's no shared source since paper catalog lives in code, not the DB).
-- Beyond that: has_full_access (admin/pro), a teacher previewing before they
-- assign, a subject the student has paid to unlock, or a specific paper a
-- teacher assigned to their class — anything else is paywalled.

alter table public.profiles add column if not exists unlocked_subjects text[] not null default '{}';

create or replace function public.is_free_sample_paper(p_paper_id text)
returns boolean language sql immutable as $$
  select p_paper_id in (
    'physics-practice-v1', 'biology-may-2016', 'chemistry-may-2016',
    'geography-nov-2019', 'humanities-nov-2019'
  );
$$;

create or replace function public.paper_subject_of(p_paper_id text)
returns text language sql immutable as $$
  select split_part(p_paper_id, '-', 1);
$$;

create or replace function public.paper_access_allowed(p_user_id uuid, p_paper_id text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_subject text := public.paper_subject_of(p_paper_id);
  v_role text;
  v_unlocked text[];
begin
  if public.has_full_access(p_user_id) then return true; end if;
  select role, unlocked_subjects into v_role, v_unlocked from public.profiles where id = p_user_id;
  if v_role = 'teacher' then return true; end if;
  if public.is_free_sample_paper(p_paper_id) then return true; end if;
  if v_subject = any(coalesce(v_unlocked, '{}')) then return true; end if;
  if exists (
    select 1 from public.class_assignments ca
    join public.class_members cm on cm.class_id = ca.class_id
    where cm.user_id = p_user_id and ca.kind = 'paper' and ca.ref = p_paper_id
  ) then return true; end if;
  return false;
end;
$$;
revoke all on function public.paper_access_allowed(uuid, text) from public, anon;
grant execute on function public.paper_access_allowed(uuid, text) to authenticated;

create or replace function public.enforce_paper_access()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not public.paper_access_allowed(new.user_id, new.paper_id) then
    raise exception 'Free preview used: 1 paper per subject. Unlock % for full access.', initcap(public.paper_subject_of(new.paper_id));
  end if;
  return new;
end;
$$;
drop trigger if exists attempts_paper_access on public.attempts;
create trigger attempts_paper_access before insert on public.attempts
  for each row execute function public.enforce_paper_access();

-- Admin: unlock specific subjects for a student by email (additive — never
-- removes a subject they already had).
create or replace function public.admin_unlock_subjects_by_email(p_email text, p_subjects text[])
returns table(found boolean, user_id uuid)
language plpgsql
security definer
set search_path = public
as $$
declare v_uid uuid;
begin
  if not public.is_admin() then
    raise exception 'Admin only';
  end if;
  select id into v_uid from auth.users where lower(email) = lower(trim(p_email)) limit 1;
  if v_uid is null then
    return query select false, null::uuid;
    return;
  end if;
  update public.profiles
  set unlocked_subjects = (select array(select distinct unnest(coalesce(unlocked_subjects, '{}') || p_subjects)))
  where id = v_uid;
  return query select true, v_uid;
end;
$$;
revoke all on function public.admin_unlock_subjects_by_email(text, text[]) from public, anon;
grant execute on function public.admin_unlock_subjects_by_email(text, text[]) to authenticated;
