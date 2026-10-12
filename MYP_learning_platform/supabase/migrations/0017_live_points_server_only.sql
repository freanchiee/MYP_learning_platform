-- Live-class points are calculated on the server (app/api/live/points, lib/design-live/points.ts) from a
-- student's recorded answers. Before this, any signed-in student could write their own `points` (the
-- self-update policy allows every column, and increment_player_points added any number it was given).
--
-- This trigger makes the database refuse it: a signed-in user's change to `points` is ignored (the old value
-- is kept) and a new row always starts at 0. The service role (the app's server) and direct SQL are not
-- affected. Ignoring instead of raising an error keeps any browser tab still running the old code working.
create or replace function public.live_players_guard_points() returns trigger
language plpgsql
set search_path to 'public'
as $$
begin
  if auth.role() in ('authenticated', 'anon') then
    if tg_op = 'INSERT' then
      new.points := 0;
    elsif new.points is distinct from old.points then
      new.points := old.points;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists live_players_guard_points on public.live_players;
create trigger live_players_guard_points
  before insert or update on public.live_players
  for each row execute function public.live_players_guard_points();

-- The old "add N points" RPC is no longer callable by browsers.
revoke execute on function public.increment_player_points(uuid, integer) from public, anon, authenticated;
