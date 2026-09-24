import type { SupabaseClient } from '@supabase/supabase-js'
import type { ClassRow } from '@/lib/classes'
import { LAUNCHED_PAPERS } from '@/data/launched-papers'
import { TEACH_SUBJECTS } from '@/lib/subjects'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'
import { classLook } from '@/lib/classes'
import TeacherHub, { type HubAssignment, type HubClass, type HubResource } from './TeacherHub'

const BANKS: Record<string, { topicCanonical?: string }[]> = { biology: BIOLOGY_BANK, chemistry: CHEMISTRY_BANK, physics: PHYSICS_BANK }

// Loads the teacher's data; the presentation lives in TeacherHub.
export default async function TeacherDashboard({ supabase, userId, name }: { supabase: SupabaseClient; userId: string; name: string }) {
  const [{ data: profile }, { data: classes }] = await Promise.all([
    supabase.from('profiles').select('subjects').eq('id', userId).maybeSingle(),
    supabase.from('classes').select('*').eq('teacher_id', userId).order('created_at', { ascending: false }),
  ])
  const list = (classes ?? []) as ClassRow[]
  const ids = list.map((c) => c.id)

  const [{ data: members }, { data: assigns }] = ids.length
    ? await Promise.all([
        supabase.from('class_members').select('class_id, user_id').in('class_id', ids),
        supabase.from('class_assignments').select('id, class_id, kind, subject, ref, title, due_at').in('class_id', ids).order('created_at', { ascending: false }).limit(50),
      ])
    : [{ data: [] as { class_id: string; user_id: string }[] }, { data: [] as any[] }]

  const assignIds = (assigns ?? []).map((a) => a.id)
  const [{ data: done }, { data: attempts }] = assignIds.length
    ? await Promise.all([
        supabase.from('assignment_progress').select('assignment_id, user_id').in('assignment_id', assignIds),
        supabase.from('attempts').select('user_id, paper_id').eq('status', 'completed').in('paper_id', (assigns ?? []).filter((a) => a.kind === 'paper').map((a) => a.ref)),
      ])
    : [{ data: [] as any[] }, { data: [] as any[] }]

  const hubClasses: HubClass[] = list.map((c) => ({
    ...(() => { const l = classLook(c); return { emoji: l.emoji, from: l.theme.from, to: l.theme.to } })(),
    id: c.id,
    name: c.name,
    join_code: c.join_code,
    students: (members ?? []).filter((m) => m.class_id === c.id).length,
    assignments: (assigns ?? []).filter((a) => a.class_id === c.id).length,
  }))

  const hubAssignments: HubAssignment[] = (assigns ?? []).slice(0, 8).map((a) => {
    const students = (members ?? []).filter((m) => m.class_id === a.class_id).map((m) => m.user_id)
    const doneUsers = students.filter((u) =>
      a.kind === 'paper'
        ? (attempts ?? []).some((t) => t.user_id === u && t.paper_id === a.ref)
        : (done ?? []).some((d) => d.assignment_id === a.id && d.user_id === u),
    )
    return { id: a.id, classId: a.class_id, className: list.find((c) => c.id === a.class_id)?.name ?? '', title: a.title, kind: a.kind, subject: a.subject, due_at: a.due_at, done: doneUsers.length, total: students.length }
  })

  const resources: HubResource[] = TEACH_SUBJECTS.map((s) => ({
    slug: s.slug,
    label: s.label,
    icon: s.icon,
    papers: LAUNCHED_PAPERS.filter((p) => p.startsWith(`${s.slug}-`)).length,
    topics: s.topicBank ? new Set((BANKS[s.slug] ?? []).map((q) => q.topicCanonical).filter(Boolean)).size : 0,
  }))

  return <TeacherHub name={name} subjects={(profile?.subjects as string[] | null) ?? []} classes={hubClasses} assignments={hubAssignments} resources={resources} />
}
