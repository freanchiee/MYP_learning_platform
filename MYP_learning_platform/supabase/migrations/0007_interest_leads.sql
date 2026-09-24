-- "Interest" leads: a visitor leaves an email and ticks the MYP subjects and
-- experiences (past papers, live classes, resources, tutoring) they care about.
-- Same access model as tutoring_leads (0006): anyone may submit a brand-new,
-- consented lead; only an admin (public.is_admin(), also from 0006) can read,
-- update or delete. Students under 16 are not an allowed submitter — the form
-- asks a parent or guardian to sign up instead.
--
-- Safe to run multiple times.

create table if not exists public.interest_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  user_id uuid references auth.users (id) on delete set null,
  role text not null check (role in ('parent', 'student_16plus', 'teacher')),
  name text check (char_length(name) <= 120),
  email text not null check (char_length(email) between 5 and 254 and email like '%@%'),
  -- Values are validated against a fixed list in the API route; the database
  -- only bounds the size so a bad client can't store a novel.
  interests text[] not null check (cardinality(interests) between 1 and 12),
  source_page text check (char_length(source_page) <= 200),
  consent boolean not null check (consent = true),
  consent_version text not null check (char_length(consent_version) <= 40),
  status text not null default 'new' check (status in ('new', 'contacted', 'converted', 'declined')),
  admin_note text check (char_length(admin_note) <= 2000)
);

create index if not exists interest_leads_created_idx on public.interest_leads (created_at desc);
create index if not exists interest_leads_status_idx on public.interest_leads (status);

alter table public.interest_leads enable row level security;

drop policy if exists "interest_leads_submit" on public.interest_leads;
create policy "interest_leads_submit" on public.interest_leads
  for insert to anon, authenticated
  with check (
    consent = true
    and status = 'new'
    and admin_note is null
    and (user_id is null or user_id = auth.uid())
  );

drop policy if exists "interest_leads_admin_read" on public.interest_leads;
create policy "interest_leads_admin_read" on public.interest_leads
  for select to authenticated using (public.is_admin());

drop policy if exists "interest_leads_admin_update" on public.interest_leads;
create policy "interest_leads_admin_update" on public.interest_leads
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "interest_leads_admin_delete" on public.interest_leads;
create policy "interest_leads_admin_delete" on public.interest_leads
  for delete to authenticated using (public.is_admin());
