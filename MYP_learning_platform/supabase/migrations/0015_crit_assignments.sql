-- Criteria-wise practice quizzes can be assigned to a class too (/practice/<subject>/crit/<A-D>).
alter table public.class_assignments drop constraint if exists class_assignments_kind_check;
alter table public.class_assignments add constraint class_assignments_kind_check check (kind in ('paper', 'topic', 'lesson', 'crit'));
