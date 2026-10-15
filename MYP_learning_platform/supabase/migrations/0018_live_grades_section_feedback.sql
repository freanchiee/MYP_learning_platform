-- Teacher feedback written against ONE worksheet section of a student's work:
--   section_feedback = { "<stageKey>.<sectionKey>": { "text": "...", "at": "<timestamp>" } }
-- It is shown to the student on that section (they are told when new feedback arrives) and goes into their PDF.
alter table public.live_grades add column if not exists section_feedback jsonb not null default '{}'::jsonb;

-- Sets (or, with empty text, clears) one section's feedback without touching the rest of the row.
-- SECURITY INVOKER: the existing host-only insert/update policies on live_grades decide who may call it.
create or replace function public.set_section_feedback(p_code text, p_player uuid, p_key text, p_text text)
returns void
language sql
as $$
  insert into public.live_grades (session_code, player_id, section_feedback)
  values (p_code, p_player,
    case when btrim(p_text) = '' then '{}'::jsonb
         else jsonb_build_object(p_key, jsonb_build_object('text', btrim(p_text), 'at', now())) end)
  on conflict (session_code, player_id) do update
    set section_feedback = case when btrim(p_text) = '' then public.live_grades.section_feedback - p_key
                                else public.live_grades.section_feedback || jsonb_build_object(p_key, jsonb_build_object('text', btrim(p_text), 'at', now())) end,
        updated_at = now();
$$;
