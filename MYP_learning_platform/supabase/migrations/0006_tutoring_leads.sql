-- Tutoring lead capture (the /tutoring page) + a real admin role.
--
-- Two things live here because the second is what makes the first safe:
--
-- 1. `admins` + `is_admin()` — the app had no notion of an admin (the
--    existing /admin pages only check "signed in"). Lead data is personal
--    information about families, so reading it must be limited to an actual
--    admin. Add yourself with the one-liner at the bottom of this file.
--
-- 2. `tutoring_leads` — anyone (signed in or not) can SUBMIT one, nobody but
--    an admin can READ, change or delete one. Most of the people behind these
--    are children or their parents, so the table keeps only what is needed to
--    reply, records consent (and which wording they agreed to), and has no
--    column for a child's name beyond whatever the adult chooses to type.
--
-- Safe to run multiple times.

-- ── admins ────────────────────────────────────────────────────────────────
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;
-- No policies on purpose: nobody can read or write this table through the API.
-- Membership is only checked through the SECURITY DEFINER function below,
-- and rows are added by the project owner in the SQL editor.

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

-- ── tutoring_leads ────────────────────────────────────────────────────────
create table if not exists public.tutoring_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  -- Set only when the submitter happened to be signed in.
  user_id uuid references auth.users (id) on delete set null,
  -- Who filled in the form. Students under 16 are deliberately not an
  -- allowed value: the form asks a parent/guardian to submit instead.
  submitted_by text not null check (submitted_by in ('parent', 'student_16plus', 'teacher')),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 5 and 254 and email like '%@%'),
  subject text not null check (char_length(subject) between 1 and 80),
  level text check (char_length(level) <= 60),
  exam_board text check (char_length(exam_board) <= 60),
  message text check (char_length(message) <= 2000),
  source_page text check (char_length(source_page) <= 200),
  consent boolean not null check (consent = true),
  consent_version text not null check (char_length(consent_version) <= 40),
  status text not null default 'new' check (status in ('new', 'contacted', 'booked', 'declined')),
  admin_note text check (char_length(admin_note) <= 2000)
);

create index if not exists tutoring_leads_created_idx on public.tutoring_leads (created_at desc);
create index if not exists tutoring_leads_status_idx on public.tutoring_leads (status);

alter table public.tutoring_leads enable row level security;

-- Anyone may submit — but only as a brand-new lead: consent given, status 'new',
-- no admin note, and (if signed in) attributed to themselves, never someone else.
drop policy if exists "tutoring_leads_submit" on public.tutoring_leads;
create policy "tutoring_leads_submit" on public.tutoring_leads
  for insert to anon, authenticated
  with check (
    consent = true
    and status = 'new'
    and admin_note is null
    and (user_id is null or user_id = auth.uid())
  );

-- Only an admin can read, update (status / notes) or delete.
drop policy if exists "tutoring_leads_admin_read" on public.tutoring_leads;
create policy "tutoring_leads_admin_read" on public.tutoring_leads
  for select to authenticated using (public.is_admin());

drop policy if exists "tutoring_leads_admin_update" on public.tutoring_leads;
create policy "tutoring_leads_admin_update" on public.tutoring_leads
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "tutoring_leads_admin_delete" on public.tutoring_leads;
create policy "tutoring_leads_admin_delete" on public.tutoring_leads
  for delete to authenticated using (public.is_admin());

-- ── Make yourself the first admin (run once, in the Supabase SQL editor) ───
--   insert into public.admins (user_id)
--   select id from auth.users where lower(email) = lower('YOUR-LOGIN-EMAIL')
--   on conflict do nothing;
