-- Free-plan limits, enforced in the database so they cannot be bypassed from
-- the browser. Free = 1 class and 1 class-assigned live session per teacher.
-- Admins and 'pro' accounts are unlimited. Nothing here touches live play:
-- sessions not assigned to a class are never limited.
-- profiles.plan is set to 'pro' by the payment webhook (added with Dodo).

alter table public.profiles add column if not exists plan text not null default 'free'
  check (plan in ('free', 'pro'));

-- A user must not be able to upgrade themselves through the own-row update policy.
create or replace function public.profiles_lock_plan()
returns trigger language plpgsql as $$
begin
  if new.plan is distinct from old.plan and auth.uid() is not null and not public.is_admin() then
    new.plan := old.plan;
  end if;
  return new;
end $$;
drop trigger if exists profiles_lock_plan on public.profiles;
create trigger profiles_lock_plan before update on public.profiles
  for each row execute function public.profiles_lock_plan();

create or replace function public.has_full_access(uid uuid)
returns boolean language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.admins a where a.user_id = uid)
      or exists (select 1 from public.profiles p where p.id = uid and p.plan = 'pro')
$$;
revoke all on function public.has_full_access(uuid) from public, anon;
grant execute on function public.has_full_access(uuid) to authenticated;

create or replace function public.enforce_class_limit()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if not public.has_full_access(new.teacher_id)
     and (select count(*) from public.classes where teacher_id = new.teacher_id) >= 1 then
    raise exception 'Free plan: 1 class. Upgrade to create more.';
  end if;
  return new;
end $$;
drop trigger if exists classes_limit on public.classes;
create trigger classes_limit before insert on public.classes
  for each row execute function public.enforce_class_limit();

create or replace function public.enforce_assignment_limit()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.class_id is not null
     and (tg_op = 'INSERT' or new.class_id is distinct from old.class_id)
     and not public.has_full_access(new.host_id)
     and (select count(*) from public.live_sessions
          where host_id = new.host_id and class_id is not null and code <> new.code) >= 1 then
    raise exception 'Free plan: 1 live task assigned to a class. Upgrade to assign more.';
  end if;
  return new;
end $$;
drop trigger if exists live_sessions_assign_limit on public.live_sessions;
create trigger live_sessions_assign_limit before insert or update on public.live_sessions
  for each row execute function public.enforce_assignment_limit();
