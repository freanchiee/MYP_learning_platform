-- Live Class Creator — private host<->student chat over the existing
-- live_events table (type = 'message'). No new table: a directed event
-- (player_id set) is one chat message; payload = { from: 'host'|'player', text }.
--
-- 0004 already lets a student insert an event tied to their OWN player row,
-- and lets anyone authenticated read/insert broadcast events (player_id
-- null). What it didn't allow: the HOST inserting an event addressed to one
-- of their students (needed for the host side of a chat), and it let ANY
-- authenticated user read ANY directed event — fine for a public answer
-- log, wrong for a private one-to-one chat. This migration:
--   1. Lets the session's host insert events addressed to any player in
--      their own session (in addition to a player messaging themselves).
--   2. Scopes reads of a directed event (player_id not null) to just that
--      player and that session's host — everyone else still sees broadcast
--      (player_id null) events, e.g. answer-log entries meant to be public.
-- Safe to run multiple times.

drop policy if exists "live_events_read" on public.live_events;
create policy "live_events_read" on public.live_events
  for select using (
    player_id is null
    or exists (select 1 from public.live_players p where p.id = player_id and p.user_id = auth.uid())
    or exists (
      select 1 from public.live_players p
      join public.live_sessions s on s.code = p.session_code
      where p.id = player_id and s.host_id = auth.uid()
    )
  );

drop policy if exists "live_events_write" on public.live_events;
create policy "live_events_write" on public.live_events
  for insert with check (
    player_id is null
    or exists (select 1 from public.live_players p where p.id = player_id and p.user_id = auth.uid())
    or exists (
      select 1 from public.live_players p
      join public.live_sessions s on s.code = p.session_code
      where p.id = player_id and s.host_id = auth.uid()
    )
  );
