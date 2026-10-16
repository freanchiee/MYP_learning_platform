-- Live-class privacy, part 1 of 2: lookup functions. Purely additive: nothing is restricted by this file.
-- Part 2 (0019_live_privacy_policies.sql) tightens who can read live_sessions / live_players / live_grades /
-- live_events and the live-uploads bucket, and relies on these functions so a student screen still works.
--
-- Why: until now any signed-in user could read EVERY live session, player (names and answers), grade and teacher
-- feedback in the database, because the read policies only checked "is signed in".
--
-- Safe to run multiple times.

-- The people who run a session: its host, the teacher of the class it belongs to, or a platform admin.
create or replace function public.live_is_staff(p_code text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.live_sessions s
    where s.code = p_code
      and (
        s.host_id = auth.uid()
        or (s.class_id is not null and exists (select 1 from public.classes c where c.id = s.class_id and c.teacher_id = auth.uid()))
        or public.is_admin()
      )
  );
$$;

-- Someone who has joined the session with their own account.
create or replace function public.live_is_player(p_code text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.live_players p where p.session_code = p_code and p.user_id = auth.uid());
$$;

-- Anyone who has a real reason to see the session itself: staff, players, and members of the class it was set for.
create or replace function public.live_can_see_session(p_code text) returns boolean
language sql stable security definer set search_path = public as $$
  select public.live_is_staff(p_code)
      or public.live_is_player(p_code)
      or exists (
        select 1 from public.live_sessions s
        where s.code = p_code and s.class_id is not null and public.is_class_member(s.class_id)
      );
$$;

-- The class roster a student screen needs: who joined, team, score, position. No answers, no drafts, and another
-- student's account id is never returned. Only staff and players of that session can call it meaningfully.
create or replace function public.live_roster(p_code text)
returns table (id uuid, session_code text, user_id uuid, name text, team integer, points integer, badges text[], joined_at timestamptz, nav jsonb)
language sql stable security definer set search_path = public as $$
  select p.id, p.session_code,
         case when p.user_id = auth.uid() then p.user_id else null end,
         p.name, p.team, p.points, p.badges, p.joined_at, p.data -> '_nav'
  from public.live_players p
  where p.session_code = p_code
    and (public.live_is_staff(p_code) or public.live_is_player(p_code))
  order by p.joined_at;
$$;

-- What someone holding a join code may learn BEFORE they have joined: that the session exists and its status. The
-- game state, which can contain names, and the host's id are never returned.
create or replace function public.live_session_for_join(p_code text)
returns table (code text, activity_id text, host_id uuid, status text, stage_idx integer, state jsonb, class_id uuid, created_at timestamptz, updated_at timestamptz)
language sql stable security definer set search_path = public as $$
  select s.code, s.activity_id, null::uuid, s.status, s.stage_idx, '{}'::jsonb, s.class_id, s.created_at, s.updated_at
  from public.live_sessions s
  where s.code = p_code and auth.uid() is not null;
$$;

revoke all on function public.live_is_staff(text), public.live_is_player(text), public.live_can_see_session(text), public.live_roster(text), public.live_session_for_join(text) from public, anon;
grant execute on function public.live_is_staff(text), public.live_is_player(text), public.live_can_see_session(text), public.live_roster(text), public.live_session_for_join(text) to authenticated;
