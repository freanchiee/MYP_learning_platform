-- A one-off backup of live points taken on 2026-10-12 had no row security, so anyone, signed in or not, could read it
-- through the API. Turning RLS on with no policies hides it from the API; the data itself is untouched.
alter table public.live_points_backup_20261012 enable row level security;
