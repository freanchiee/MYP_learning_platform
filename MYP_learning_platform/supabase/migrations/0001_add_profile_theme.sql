-- Atlas theme system: persist each user's chosen UI theme (cross-device).
-- Safe to run multiple times.
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS theme text;

-- (Optional) constrain to known themes; comment out if you prefer free-form.
-- ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_theme_check;
-- ALTER TABLE public.profiles ADD CONSTRAINT profiles_theme_check
--   CHECK (theme IS NULL OR theme IN
--     ('classic','spatial','minimalist-academic','glassmorphic','bento'));
