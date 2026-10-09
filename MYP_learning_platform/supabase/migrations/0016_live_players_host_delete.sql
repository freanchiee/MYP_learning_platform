-- A teacher can remove a student from a live session they host (e.g. someone who
-- joined by mistake, or a duplicate/test account). Deleting the player row also
-- removes that student's events and grade for the session (those tables cascade
-- from live_players). Students still cannot delete rows, and only the session's
-- own host can remove players from it.
drop policy if exists "live_players_host_delete" on public.live_players;
create policy "live_players_host_delete" on public.live_players
  for delete using (
    exists (
      select 1 from public.live_sessions s
      where s.code = session_code and s.host_id = auth.uid()
    )
  );
