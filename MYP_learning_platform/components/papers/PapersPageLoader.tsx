import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import PapersGates from '@/components/papers/PapersGates'
import { DEV_NO_AUTH } from '@/lib/dev-auth'
import { LAUNCHED_PAPERS } from '@/data/launched-papers'
import { FREE_SAMPLE_PAPER_IDS, paperSubjectSlug } from '@/lib/paper-access'

// paperId prefix → display subject (matches the subject prop each subject page passes).
const SUBJECT_OF: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  geography: 'Geography',
  humanities: 'Integrated Humanities',
}
const cap = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '')

interface Paper {
  id: string
  subject: string
  session: string
  year: number
  total_marks: number
  duration_minutes: number
  is_published: boolean
}

interface AttemptRow {
  paper_id: string
  status: string
}

// Source-of-truth marks — overrides Supabase values
const LOCAL_PAPER_META: Record<string, Partial<Paper>> = {
  'physics-may-2016':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2016-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2016-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2017':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2017-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2017-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2018':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2018-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2018-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2019':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2019-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2019-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2021':    { total_marks:  98, duration_minutes: 90 },
  'physics-may-2021-v1': { total_marks:  98, duration_minutes: 90 },
  'physics-may-2021-v2': { total_marks:  98, duration_minutes: 90 },
  'physics-may-2022':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2022-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2022-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2023':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2023-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2023-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2024':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2024-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2024-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2025':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2025-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-may-2025-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2016':    { total_marks: 120, duration_minutes: 120 },
  'physics-nov-2016-v1': { total_marks: 120, duration_minutes: 120 },
  'physics-nov-2016-v2': { total_marks: 120, duration_minutes: 120 },
  'physics-nov-2017':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2017-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2017-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2018':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2018-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2018-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2019':    { total_marks:  99, duration_minutes: 90 },
  'physics-nov-2019-v1': { total_marks:  99, duration_minutes: 90 },
  'physics-nov-2019-v2': { total_marks:  99, duration_minutes: 90 },
  'physics-nov-2020':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2020-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2020-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2021':    { total_marks:  98, duration_minutes: 90 },
  'physics-nov-2021-v1': { total_marks:  98, duration_minutes: 90 },
  'physics-nov-2021-v2': { total_marks:  98, duration_minutes: 90 },
  'physics-nov-2022':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2022-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2022-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2023':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2024':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2024-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2024-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2023-v1': { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2023-v2': { total_marks: 100, duration_minutes: 90 },
  'physics-practice-v1': { total_marks:  85, duration_minutes: 90 },
  'biology-may-2025':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2025-v1': { total_marks: 100, duration_minutes: 90 },
  'biology-may-2025-v2': { total_marks: 100, duration_minutes: 90 },
  'biology-may-2024':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2024':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2019':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2019':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2018':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2018':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2017':    { total_marks: 120, duration_minutes: 90 },
  'biology-may-2017':    { total_marks: 120, duration_minutes: 90 },
  'biology-nov-2016':    { total_marks: 120, duration_minutes: 90 },
  'biology-nov-2020':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2016':    { total_marks: 120, duration_minutes: 90 },
  'biology-may-2021':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2021':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2022':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2022':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2023':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2023':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2016':    { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2016-v1': { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2016-v2': { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2017':    { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2017-v1': { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2017-v2': { total_marks: 120, duration_minutes: 90 },
  'chemistry-may-2018':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2018-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2018-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2019':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2019-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2019-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2021':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2021-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2021-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2022':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2022-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2022-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2023':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2023-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2023-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2024':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2024-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2024-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2025':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2025-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-may-2025-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2016':    { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2016-v1': { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2016-v2': { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2017':    { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2017-v1': { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2017-v2': { total_marks: 120, duration_minutes: 120 },
  'chemistry-nov-2018':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2018-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2018-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2019':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2019-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2019-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2020':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2020-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2020-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2021':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2021-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2021-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2022':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2022-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2022-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2023':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2023-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2023-v2': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2024':    { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2024-v1': { total_marks: 100, duration_minutes: 90 },
  'chemistry-nov-2024-v2': { total_marks: 100, duration_minutes: 90 },
  'humanities-may-2025':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-nov-2019':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-nov-2022':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-may-2023':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-may-2024':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-nov-2024':   { total_marks: 80,  duration_minutes: 120 },
  'humanities-may-2025-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-may-2025-v2': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2019-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2019-v2': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2022-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2022-v2': { total_marks: 80, duration_minutes: 120 },
  'humanities-may-2023-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-may-2023-v2': { total_marks: 80, duration_minutes: 120 },
  'humanities-may-2024-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-may-2024-v2': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2024-v1': { total_marks: 80, duration_minutes: 120 },
  'humanities-nov-2024-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2025':   { total_marks: 80,  duration_minutes: 120 },
  'geography-may-2024':   { total_marks: 80,  duration_minutes: 120 },
  'geography-may-2023':   { total_marks: 80,  duration_minutes: 120 },
  'geography-may-2022':   { total_marks: 80,  duration_minutes: 120 },
  'geography-may-2021':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2024':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2023':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2022':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2021':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2020':   { total_marks: 80,  duration_minutes: 120 },
  'geography-nov-2019':   { total_marks: 80,  duration_minutes: 120 },
  'geography-may-2021-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2021-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2022-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2022-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2023-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2023-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2024-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2024-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2025-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-may-2025-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2019-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2019-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2020-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2020-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2021-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2021-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2022-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2022-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2023-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2023-v2': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2024-v1': { total_marks: 80, duration_minutes: 120 },
  'geography-nov-2024-v2': { total_marks: 80, duration_minutes: 120 },
}

interface Props {
  /** Filter to a specific subject, e.g. 'Physics' | 'Biology'. Undefined = show all. */
  subject?: string
}

export default async function PapersPageLoader({ subject }: Props) {
  const supabase = createClient()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session && !DEV_NO_AUTH) redirect('/login')
  const userId = session?.user?.id

  const [attemptsRes, profileRes, fullAccessRes, myClassesRes] = await Promise.all([
    userId ? supabase.from('attempts').select('paper_id, status').eq('user_id', userId) : Promise.resolve({ data: [] as AttemptRow[] }),
    userId ? supabase.from('profiles').select('role, unlocked_subjects').eq('id', userId).maybeSingle() : Promise.resolve({ data: null }),
    userId ? supabase.rpc('has_full_access', { uid: userId }) : Promise.resolve({ data: false }),
    userId ? supabase.from('class_members').select('class_id').eq('user_id', userId) : Promise.resolve({ data: [] as { class_id: string }[] }),
  ])
  const myClassIds = (myClassesRes.data ?? []).map((c) => c.class_id)
  const assignedRes = myClassIds.length
    ? await supabase.from('class_assignments').select('ref').eq('kind', 'paper').in('class_id', myClassIds)
    : { data: [] as { ref: string }[] }

  // Code-driven catalog: the source of truth is data/launched-papers.ts (auto-generated
  // from the actual data/papers folders), NOT the Supabase `papers` table — which is often
  // out of sync with the code (missing variants). Metadata comes from LOCAL_PAPER_META.
  let papers: Paper[] = LAUNCHED_PAPERS.map((id) => {
    const parts = id.split('-')
    const meta = LOCAL_PAPER_META[id] ?? {}
    return {
      id,
      subject: SUBJECT_OF[parts[0]] ?? cap(parts[0]),
      session: cap(parts[1]),
      year: parseInt(parts[2] ?? '0', 10) || 0,
      total_marks: meta.total_marks ?? 100,
      duration_minutes: meta.duration_minutes ?? 90,
      is_published: true,
    }
  }).sort((a, b) => b.year - a.year)

  // Filter by subject if specified
  if (subject) {
    papers = papers.filter(p => p.subject.toLowerCase() === subject.toLowerCase())
  }

  const attempts: AttemptRow[] = attemptsRes.data ?? []

  const completedPapers = new Set(
    attempts.filter(a => a.status === 'completed').map(a => a.paper_id)
  )
  const inProgressPapers = new Set(
    attempts.filter(a => a.status === 'in_progress').map(a => a.paper_id)
  )

  // Mirrors paper_access_allowed() in migration subject_paper_paywall — the DB
  // trigger is the real enforcement, this only decides what shows a 🔒 and
  // opens the unlock panel instead of starting the paper. A paper already
  // started/completed is never (re-)locked, even if the rules changed since.
  const hasFullAccess = !!fullAccessRes.data
  const isTeacher = profileRes.data?.role === 'teacher'
  const unlockedSubjects = new Set((profileRes.data?.unlocked_subjects as string[] | null) ?? [])
  const assignedPaperIds = new Set((assignedRes.data ?? []).map((a) => a.ref))
  const alreadyTouched = new Set(Array.from(completedPapers).concat(Array.from(inProgressPapers)))
  const bypassesAllLocks = !userId ? false : hasFullAccess || isTeacher
  const lockedPaperIds = new Set(
    bypassesAllLocks
      ? []
      : papers
          .filter((p) => !alreadyTouched.has(p.id) && !FREE_SAMPLE_PAPER_IDS.has(p.id) && !unlockedSubjects.has(paperSubjectSlug(p.id)) && !assignedPaperIds.has(p.id))
          .map((p) => p.id)
  )

  return (
    <PapersGates
      papers={papers}
      completedPapers={completedPapers}
      inProgressPapers={inProgressPapers}
      lockedPaperIds={lockedPaperIds}
    />
  )
}
