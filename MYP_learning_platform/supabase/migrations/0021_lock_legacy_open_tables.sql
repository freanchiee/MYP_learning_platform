-- The earlier standalone classroom builds (icebreaker ds_*, sustainability sc_*, Unit 1 u1k_*, prototyping m4_*) stored
-- players, answers and chat in tables whose policy let ANYONE, signed in or not, read, change and delete every row. The
-- current live-class engine does not use them. Drop those open policies so the tables are no longer reachable through the
-- public API. No data is deleted; the service role and the database owner can still read it.
--
-- To undo for one table (not recommended): create policy "<table>_anon_all" on public.<table> for all to anon using (true) with check (true);
do $$
declare t text;
begin
  foreach t in array array['ds_sessions','ds_players','ds_submissions','ds_game_votes','ds_feedback','sc_sessions','sc_players','sc_log','u1k_sessions','u1k_players','u1k_answers','u1k_grades','u1k_messages','m4_sessions','m4_players','m4_grades','m4_messages']
  loop
    execute format('drop policy if exists %I on public.%I', t || '_anon_all', t);
    execute format('alter table public.%I enable row level security', t);
  end loop;
end $$;

-- Their helper functions took player names and were callable without signing in. Nothing calls them any more.
do $$
declare f record;
begin
  for f in
    select p.oid::regprocedure as sig
    from pg_proc p join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname in ('submit_spot_answer','submit_idea_answer','submit_detective_answer','get_answer_key_host','get_revealed_answer','get_pictionary_word_for_player','get_pictionary_word_host','host_reveal_word','sc_apply_phase1','sc_apply_phase2')
  loop
    execute format('revoke all on function %s from public, anon, authenticated', f.sig);
  end loop;
end $$;
