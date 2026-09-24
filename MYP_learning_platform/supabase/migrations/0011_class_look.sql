-- A little personality for classes: an emoji and a colour theme (chosen at
-- creation, editable by the teacher). Null = derive one from the class id.
alter table public.classes add column if not exists emoji text;
alter table public.classes add column if not exists theme text;
