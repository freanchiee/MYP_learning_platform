import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import PapersGates from '@/components/papers/PapersGates'

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
  'physics-may-2017':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2018':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2019':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2021':    { total_marks:  98, duration_minutes: 90 },
  'physics-may-2022':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2023':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2024':    { total_marks: 100, duration_minutes: 90 },
  'physics-may-2025':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2016':    { total_marks: 120, duration_minutes: 120 },
  'physics-nov-2017':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2018':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2019':    { total_marks:  99, duration_minutes: 90 },
  'physics-nov-2020':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2021':    { total_marks:  98, duration_minutes: 90 },
  'physics-nov-2022':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2023':    { total_marks: 100, duration_minutes: 90 },
  'physics-nov-2024':    { total_marks: 100, duration_minutes: 90 },
  'physics-practice-v1': { total_marks:  85, duration_minutes: 90 },
  'biology-may-2025':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2024':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2024':    { total_marks: 100, duration_minutes: 90 },
  'biology-nov-2019':    { total_marks: 100, duration_minutes: 90 },
  'biology-may-2019':    { total_marks: 100, duration_minutes: 90 },
}

interface Props {
  /** Filter to a specific subject, e.g. 'Physics' | 'Biology'. Undefined = show all. */
  subject?: string
}

export default async function PapersPageLoader({ subject }: Props) {
  const supabase = createClient()

  const { data: { session } } = await supabase.auth.getSession()
  if (!session) redirect('/login')

  const [papersRes, attemptsRes] = await Promise.all([
    supabase
      .from('papers')
      .select('id, subject, session, year, total_marks, duration_minutes, is_published')
      .eq('is_published', true)
      .order('year', { ascending: false }),

    supabase
      .from('attempts')
      .select('paper_id, status')
      .eq('user_id', session.user.id),
  ])

  let papers: Paper[] = papersRes.data ?? []

  // Apply local metadata overrides
  papers = papers.map(p => ({ ...p, ...(LOCAL_PAPER_META[p.id] ?? {}) }))

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

  return (
    <PapersGates
      papers={papers}
      completedPapers={completedPapers}
      inProgressPapers={inProgressPapers}
    />
  )
}
