-- Lets an admin manually flip a user's plan to 'pro' (or back to 'free') by
-- email, for the UPI-QR manual-payment flow (/pricing) until a real checkout
-- (Dodo) is wired up — see 0009_free_plan_limits.sql for what 'pro' unlocks.
-- SECURITY DEFINER so it can resolve auth.users.email (not readable by
-- `authenticated` directly), but gated by is_admin() internally, and
-- profiles.plan is still protected by the profiles_lock_plan trigger from
-- 0009 regardless of how it's updated.

create or replace function public.admin_set_plan_by_email(p_email text, p_plan text)
returns table(found boolean, user_id uuid)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid;
begin
  if not public.is_admin() then
    raise exception 'Admin only';
  end if;
  if p_plan not in ('free', 'pro') then
    raise exception 'Invalid plan: %', p_plan;
  end if;

  select id into v_uid from auth.users where lower(email) = lower(trim(p_email)) limit 1;
  if v_uid is null then
    return query select false, null::uuid;
    return;
  end if;

  update public.profiles set plan = p_plan where id = v_uid;
  return query select true, v_uid;
end;
$$;

revoke all on function public.admin_set_plan_by_email(text, text) from public, anon;
grant execute on function public.admin_set_plan_by_email(text, text) to authenticated;

-- For the admin page's "who currently has full access" list.
create or replace function public.admin_list_pro_accounts()
returns table(id uuid, email text, name text, role text, granted_at timestamptz)
language sql
security definer
set search_path = public
as $$
  select p.id, u.email, p.name, p.role, p.updated_at
  from public.profiles p
  join auth.users u on u.id = p.id
  where p.plan = 'pro' and public.is_admin()
  order by p.updated_at desc nulls last;
$$;

revoke all on function public.admin_list_pro_accounts() from public, anon;
grant execute on function public.admin_list_pro_accounts() to authenticated;
