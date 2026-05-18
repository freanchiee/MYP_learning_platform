-- Run this in Supabase SQL Editor to add the practice paper and fix marks
INSERT INTO public.papers (id, subject, session, year, total_marks, duration_minutes, is_published)
VALUES ('physics-practice-v1', 'Physics', 'Practice', 2023, 85, 90, true)
ON CONFLICT (id) DO NOTHING;

-- Fix the Nov 2023 marks to 100
UPDATE public.papers SET total_marks = 100 WHERE id = 'physics-nov-2023';
