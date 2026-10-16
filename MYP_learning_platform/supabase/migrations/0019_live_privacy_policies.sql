-- Live-class privacy, part 2 of 2: who may read what. Apply only AFTER the app version that uses
-- live_roster() and live_session_for_join() (0018) is deployed, so open student screens keep working.
--
-- Before: live_sessions, live_players (names AND answers), live_grades (scores and teacher feedback) were readable by
--         every signed-in user, and the live-uploads bucket was public and writable at any path.
-- After:  - a SESSION is readable by its host, its class teacher, its players and members of its class;
--         - a PLAYER row (with answers) is readable by that student, the host and the class teacher only;
--         - a GRADE row is readable by that student, the host and the class teacher only;
--         - events addressed to nobody are readable only by people in that session (private chat was already scoped);
--         - uploaded photos and sketches are private: visible to the uploader, the host and the class teacher, through
--           short-lived signed links.
-- Classmates still see names, scores and positions through live_roster(), which never returns answers.
--
-- Safe to run multiple times.

-- live_sessions
drop policy if exists "live_sessions_read" on public.live_sessions;
create policy "live_sessions_read" on public.live_sessions
  for select to authenticated using (public.live_can_see_session(code));

-- live_players: my own row, or I run the session. Everyone else uses live_roster().
drop policy if exists "live_players_read" on public.live_players;
create policy "live_players_read" on public.live_players
  for select to authenticated using (user_id = auth.uid() or public.live_is_staff(session_code));

-- live_grades
drop policy if exists "live_grades_read" on public.live_grades;
create policy "live_grades_read" on public.live_grades
  for select to authenticated using (
    public.live_is_staff(session_code)
    or exists (select 1 from public.live_players p where p.id = live_grades.player_id and p.user_id = auth.uid())
  );

-- live_events: broadcast events (no player) only for people in that session; directed events as before (0005)
drop policy if exists "live_events_read" on public.live_events;
create policy "live_events_read" on public.live_events
  for select to authenticated using (
    (player_id is null and public.live_can_see_session(session_code))
    or exists (select 1 from public.live_players p where p.id = player_id and p.user_id = auth.uid())
    or exists (
      select 1 from public.live_players p
      join public.live_sessions s on s.code = p.session_code
      where p.id = player_id and s.host_id = auth.uid()
    )
  );

drop policy if exists "live_events_write" on public.live_events;
create policy "live_events_write" on public.live_events
  for insert to authenticated with check (
    (player_id is null and public.live_can_see_session(session_code))
    or exists (select 1 from public.live_players p where p.id = player_id and p.user_id = auth.uid())
    or exists (
      select 1 from public.live_players p
      join public.live_sessions s on s.code = p.session_code
      where p.id = player_id and s.host_id = auth.uid()
    )
  );

-- Uploaded photos and sketches: private bucket, readable by the uploader and the session's staff.
-- Paths look like  <sessionCode>/<playerId>/<stage>-<field>/<file>.
update storage.buckets set public = false where id = 'live-uploads';

drop policy if exists "live_uploads_insert" on storage.objects;
create policy "live_uploads_insert" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'live-uploads' and public.live_is_player((storage.foldername(name))[1])
  );

drop policy if exists "live_uploads_read" on storage.objects;
create policy "live_uploads_read" on storage.objects
  for select to authenticated using (
    bucket_id = 'live-uploads'
    and (owner = auth.uid() or public.live_is_staff((storage.foldername(name))[1]))
  );
