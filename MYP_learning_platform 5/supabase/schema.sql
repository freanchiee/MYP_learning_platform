-- ============================================================
-- MYP Sciences e-Assessment Platform — Database Schema
-- ============================================================

-- ----------------------------------------------------------------
-- 1. PROFILES
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
  id             uuid        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name           text        NOT NULL DEFAULT '',
  school         text        NOT NULL DEFAULT '',
  avatar_url     text,
  xp             integer     NOT NULL DEFAULT 0,
  level          integer     NOT NULL DEFAULT 1,
  streak_days    integer     NOT NULL DEFAULT 0,
  last_active    date,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------------
-- 2. PAPERS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.papers (
  id               text        PRIMARY KEY,  -- slug e.g. 'physics-nov-2023'
  subject          text        NOT NULL,
  session          text        NOT NULL,     -- e.g. 'November'
  year             integer     NOT NULL,
  total_marks      integer     NOT NULL,
  duration_minutes integer     NOT NULL DEFAULT 90,
  is_published     boolean     NOT NULL DEFAULT false,
  created_at       timestamptz NOT NULL DEFAULT now()
);

-- ----------------------------------------------------------------
-- 3. ATTEMPTS
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.attempts (
  id               uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          uuid        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  paper_id         text        NOT NULL REFERENCES public.papers(id) ON DELETE CASCADE,
  answers          jsonb       NOT NULL DEFAULT '{}',
  scores           jsonb       NOT NULL DEFAULT '{}',
  total_score      integer,
  max_score        integer,
  myp_grade        integer,
  criterion_scores jsonb,
  time_taken       integer,    -- seconds
  xp_earned        integer     NOT NULL DEFAULT 0,
  badges_earned    text[]      NOT NULL DEFAULT '{}',
  focus_strikes    integer     NOT NULL DEFAULT 0,
  status           text        NOT NULL DEFAULT 'in_progress'
                               CHECK (status IN ('in_progress', 'completed', 'abandoned')),
  started_at       timestamptz NOT NULL DEFAULT now(),
  completed_at     timestamptz
);

-- ----------------------------------------------------------------
-- 4. USER_BADGES
-- ----------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_badges (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    uuid        NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  badge_id   text        NOT NULL,
  paper_id   text        REFERENCES public.papers(id) ON DELETE SET NULL,
  earned_at  timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, badge_id)
);

-- ----------------------------------------------------------------
-- 5. ROW LEVEL SECURITY
-- ----------------------------------------------------------------
ALTER TABLE public.profiles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.papers      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempts    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;

-- profiles: each user manages their own row
CREATE POLICY "profiles: select own"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "profiles: insert own"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles: update own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- papers: all authenticated users can read published papers
CREATE POLICY "papers: select published"
  ON public.papers FOR SELECT
  USING (is_published = true AND auth.role() = 'authenticated');

-- attempts: users manage only their own attempts
CREATE POLICY "attempts: select own"
  ON public.attempts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "attempts: insert own"
  ON public.attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "attempts: update own"
  ON public.attempts FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- user_badges: users can view their own badges
CREATE POLICY "user_badges: select own"
  ON public.user_badges FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "user_badges: insert own"
  ON public.user_badges FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ----------------------------------------------------------------
-- 6. TRIGGER — auto-create profile on new auth.users row
-- ----------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, name, school)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'school', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ----------------------------------------------------------------
-- 7. TRIGGER — apply XP / level / streak when attempt completed
-- ----------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.apply_attempt_rewards()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_today     date := CURRENT_DATE;
  v_last      date;
  v_new_xp    integer;
  v_new_level integer;
  v_new_streak integer;
BEGIN
  -- Only fire when status transitions to 'completed'
  IF NEW.status = 'completed' AND (OLD.status IS DISTINCT FROM 'completed') THEN

    SELECT xp, last_active, streak_days
      INTO v_new_xp, v_last, v_new_streak
      FROM public.profiles
     WHERE id = NEW.user_id;

    -- Accumulate XP
    v_new_xp := v_new_xp + COALESCE(NEW.xp_earned, 0);

    -- Level formula: floor(sqrt(xp / 100)) + 1
    v_new_level := floor(sqrt(v_new_xp::float / 100.0))::integer + 1;

    -- Streak logic
    IF v_last IS NULL THEN
      v_new_streak := 1;
    ELSIF v_today = v_last + INTERVAL '1 day' THEN
      v_new_streak := v_new_streak + 1;
    ELSIF v_today = v_last THEN
      -- same day, keep streak
      v_new_streak := v_new_streak;
    ELSE
      v_new_streak := 1;
    END IF;

    UPDATE public.profiles
       SET xp          = v_new_xp,
           level       = v_new_level,
           streak_days = v_new_streak,
           last_active = v_today,
           updated_at  = now()
     WHERE id = NEW.user_id;

  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_attempt_completed ON public.attempts;
CREATE TRIGGER on_attempt_completed
  AFTER INSERT OR UPDATE OF status ON public.attempts
  FOR EACH ROW EXECUTE FUNCTION public.apply_attempt_rewards();

-- ----------------------------------------------------------------
-- 8. SEED DATA
-- ----------------------------------------------------------------
INSERT INTO public.papers (id, subject, session, year, total_marks, duration_minutes, is_published)
VALUES ('physics-nov-2023', 'Physics', 'November', 2023, 85, 90, true)
ON CONFLICT (id) DO NOTHING;
