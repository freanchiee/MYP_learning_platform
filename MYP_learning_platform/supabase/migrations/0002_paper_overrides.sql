-- Published per-paper content overrides, set by content editors / teachers in the
-- exam "edit mode". Read by everyone (so all viewers see editor fixes); written only
-- by authenticated editors.

create table if not exists public.paper_overrides (
  paper_id           text primary key,
  image_overrides    jsonb not null default '{}'::jsonb,
  deleted_images     jsonb not null default '{}'::jsonb,
  text_overrides     jsonb not null default '{}'::jsonb,
  artefact_overrides jsonb not null default '{}'::jsonb,
  updated_by         uuid references auth.users(id) on delete set null,
  updated_at         timestamptz not null default now()
);

alter table public.paper_overrides enable row level security;

-- Anyone (incl. anon) may read published overrides.
drop policy if exists "paper_overrides_read" on public.paper_overrides;
create policy "paper_overrides_read" on public.paper_overrides
  for select using (true);

-- Authenticated users may publish overrides. Tighten to an editor role later, e.g.
--   with check (exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'editor'))
drop policy if exists "paper_overrides_write" on public.paper_overrides;
create policy "paper_overrides_write" on public.paper_overrides
  for all using (auth.uid() is not null) with check (auth.uid() is not null);
