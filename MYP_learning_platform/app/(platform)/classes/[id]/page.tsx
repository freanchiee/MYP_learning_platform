import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { ClassMemberRow, ClassRow } from '@/lib/classes'
import { getLiveActivity } from '@/data/design/live/registry'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import { LAUNCHED_PAPERS } from '@/data/launched-papers'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'
import { TEACH_SUBJECTS, paperTitle, subjectLabel } from '@/lib/subjects'
import AssignSessions from '@/components/teacher/AssignSessions'
import { AssignLibrary, DeleteAssignmentButton, RemoveMemberButton } from '@/components/teacher/ClassActions'

interface SessionRow { code: string; activity_id: string; status: string; created_at: string }
interface PlayerRow { id: string; session_code: string; user_id: string; points: number; data: Record<string, any> | null }
interface GradeRow { session_code: string; player_id: string; scores: Record<string, number | null>; graded: boolean }
interface AssignmentRow { id: string; kind: string; subject: string; ref: string; title: string; due_at: string | null; created_at: string }

const BANKS: Record<string, { topicCanonical?: string }[]> = { biology: BIOLOGY_BANK, chemistry: CHEMISTRY_BANK, physics: PHYSICS_BANK }

const glass = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const
const muted = { color: 'var(--text-muted)' } as const

const TABS = [
  { id: 'overview', label: 'Overview', icon: '🏠' },
  { id: 'assignments', label: 'Assignments', icon: '📋' },
  { id: 'insights', label: 'Insights', icon: '📊' },
  { id: 'library', label: 'Library', icon: '📚' },
  { id: 'live', label: 'Live sessions', icon: '🎮' },
  { id: 'manage', label: 'Manage class', icon: '⚙️' },
]

export default async function ClassPage({ params, searchParams }: { params: { id: string }; searchParams: { tab?: string; subject?: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: cls } = await supabase.from('classes').select('*').eq('id', params.id).eq('teacher_id', user.id).maybeSingle<ClassRow>()
  if (!cls) notFound()

  const tab = TABS.some((t) => t.id === searchParams.tab) ? searchParams.tab! : 'overview'

  const [{ data: members }, { data: sessions }, { data: assigns }, { data: profile }, { data: mine }] = await Promise.all([
    supabase.from('class_members').select('*').eq('class_id', cls.id).order('name'),
    supabase.from('live_sessions').select('code, activity_id, status, created_at').eq('class_id', cls.id).order('created_at', { ascending: false }),
    supabase.from('class_assignments').select('id, kind, subject, ref, title, due_at, created_at').eq('class_id', cls.id).order('created_at', { ascending: false }),
    supabase.from('profiles').select('subjects').eq('id', user.id).maybeSingle(),
    supabase.from('live_sessions').select('code, activity_id, status, created_at, class_id').eq('host_id', user.id).order('created_at', { ascending: false }).limit(20),
  ])
  const memberList = (members ?? []) as ClassMemberRow[]
  const sessionList = (sessions ?? []) as SessionRow[]
  const assignList = (assigns ?? []) as AssignmentRow[]
  const codes = sessionList.map((s) => s.code)
  const memberIds = memberList.map((m) => m.user_id)

  const needProgress = tab === 'insights' || tab === 'overview' || tab === 'assignments'
  const [{ data: players }, { data: grades }, { data: done }, { data: attempts }] = needProgress
    ? await Promise.all([
        codes.length ? supabase.from('live_players').select('id, session_code, user_id, points, data').in('session_code', codes) : Promise.resolve({ data: [] }),
        codes.length ? supabase.from('live_grades').select('session_code, player_id, scores, graded').in('session_code', codes) : Promise.resolve({ data: [] }),
        assignList.length ? supabase.from('assignment_progress').select('assignment_id, user_id').in('assignment_id', assignList.map((a) => a.id)) : Promise.resolve({ data: [] }),
        assignList.some((a) => a.kind === 'paper') && memberIds.length
          ? supabase.from('attempts').select('user_id, paper_id, total_score, max_score').eq('status', 'completed').in('paper_id', assignList.filter((a) => a.kind === 'paper').map((a) => a.ref)).in('user_id', memberIds)
          : Promise.resolve({ data: [] }),
      ])
    : [{ data: [] }, { data: [] }, { data: [] }, { data: [] }]
  const playerRows = (players ?? []) as PlayerRow[]
  const gradeRows = (grades ?? []) as GradeRow[]
  const doneRows = (done ?? []) as { assignment_id: string; user_id: string }[]
  const attemptRows = (attempts ?? []) as { user_id: string; paper_id: string; total_score: number | null; max_score: number | null }[]

  function assignmentCell(a: AssignmentRow, userId: string): { text: string; on: boolean } {
    if (a.kind === 'paper') {
      const best = attemptRows.filter((t) => t.user_id === userId && t.paper_id === a.ref).sort((x, y) => (y.total_score ?? 0) - (x.total_score ?? 0))[0]
      if (!best) return { text: '—', on: false }
      const pct = best.max_score ? Math.round(((best.total_score ?? 0) / best.max_score) * 100) : null
      return { text: pct !== null ? `${pct}%` : 'Done', on: true }
    }
    return doneRows.some((d) => d.assignment_id === a.id && d.user_id === userId) ? { text: 'Done ✓', on: true } : { text: '—', on: false }
  }
  const doneCount = (a: AssignmentRow) => memberList.filter((m) => assignmentCell(a, m.user_id).on).length

  function completion(activityId: string, data: Record<string, any> | null): number | null {
    const stages = getLiveActivity(activityId)?.stages.filter((st) => st.type === 'worksheet') ?? []
    const pcts: number[] = []
    stages.forEach((st: any) => st.sections.forEach((sec: any) => pcts.push(worksheetSectionPct(sec, data?.[st.key]?.[sec.key] || {}))))
    return pcts.length ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length) : null
  }
  function liveCell(userId: string, s: SessionRow): { text: string; on: boolean } {
    const p = playerRows.find((x) => x.session_code === s.code && x.user_id === userId)
    if (!p) return { text: '—', on: false }
    const g = gradeRows.find((x) => x.session_code === s.code && x.player_id === p.id)
    if (g?.graded) {
      const vals = Object.values(g.scores).filter((v): v is number => typeof v === 'number')
      const avg = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 : null
      return { text: avg !== null ? `Graded · avg ${avg}` : 'Graded', on: true }
    }
    const pct = completion(s.activity_id, p.data)
    return { text: pct !== null ? `${pct}% done · ${p.points} pts` : `Joined · ${p.points} pts`, on: true }
  }

  // Library data (only built for that tab)
  const teacherSubjects = ((profile?.subjects as string[] | null) ?? []).filter((s) => TEACH_SUBJECTS.some((t) => t.slug === s))
  const subjectOptions = teacherSubjects.length ? teacherSubjects : TEACH_SUBJECTS.filter((s) => s.slug === 'physics' || s.slug === 'chemistry' || s.slug === 'biology').map((s) => s.slug)
  const subject = subjectOptions.includes(searchParams.subject ?? '') ? searchParams.subject! : subjectOptions[0]
  const assignedRefs = new Set(assignList.map((a) => `${a.kind}:${a.subject}:${a.ref}`))
  const papers = LAUNCHED_PAPERS.filter((p) => p.startsWith(`${subject}-`)).map((p) => ({ ref: p, title: paperTitle(p), assigned: assignedRefs.has(`paper:${subject}:${p}`) }))
  const topicNames = Array.from(new Set((BANKS[subject] ?? []).map((q) => q.topicCanonical).filter((t): t is string => !!t))).sort()
  const topics = topicNames.map((t) => ({ ref: t, title: t, assigned: assignedRefs.has(`topic:${subject}:${t}`) }))

  const assignable = (mine ?? []).filter((x) => x.class_id === null || x.class_id === cls.id).map((x) => ({
    code: x.code,
    title: getLiveActivity(x.activity_id)?.title ?? x.activity_id,
    status: x.status,
    date: new Date(x.created_at).toLocaleDateString(),
    assigned: x.class_id === cls.id,
  }))

  const href = (t: string) => `/classes/${cls.id}?tab=${t}`

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 56px)', background: 'var(--bg)', backgroundImage: 'var(--bg-image)', color: 'var(--text)' }}>
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col gap-1 p-4 md:flex" style={{ background: 'var(--surface)', borderRight: '1px solid var(--border)' }}>
        <Link href="/dashboard" className="mb-3 text-[11px] font-black tracking-[0.25em]" style={{ color: 'var(--text-subtle)' }}>← DASHBOARD</Link>
        {TABS.map((t) => (
          <Link key={t.id} href={href(t.id)} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-bold" style={tab === t.id ? { background: 'var(--accent-soft)' } : { color: 'var(--text-muted)' }}>
            <span>{t.icon}</span>{t.label}
          </Link>
        ))}
      </aside>

      <div className="min-w-0 flex-1">
        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto p-3 md:hidden">
          {TABS.map((t) => (
            <Link key={t.id} href={href(t.id)} className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold" style={tab === t.id ? { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } : { border: '1px solid var(--border-strong)', color: 'var(--text)' }}>{t.label}</Link>
          ))}
        </div>

        {/* Hero banner */}
        <div className="px-6 py-8 md:px-10" style={{ background: 'var(--accent-soft)', borderBottom: '1px solid var(--border)' }}>
          <div className="text-[10px] font-black tracking-[0.4em]" style={{ color: 'var(--text-subtle)' }}>CLASS</div>
          <h1 className="mt-1 font-extrabold leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-1.5px' }}>{cls.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm" style={muted}>
            <span>{memberList.length} student{memberList.length === 1 ? '' : 's'}</span>
            <span>·</span>
            <span>Code <b >{cls.join_code}</b></span>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-8 md:px-10">
          {tab === 'overview' && (
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { n: memberList.length, l: 'Students' },
                  { n: assignList.length, l: 'Assignments' },
                  { n: sessionList.length, l: 'Live sessions' },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl p-5" style={glass}>
                    <div className="text-4xl font-extrabold">{s.n}</div>
                    <div className="text-xs font-black tracking-widest" style={muted}>{s.l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
              <section className="rounded-2xl p-5" style={glass}>
                <div className="flex items-center justify-between"><h2 className="text-lg font-extrabold">Recent assignments</h2><Link href={href('library')} className="text-xs font-black tracking-widest">+ NEW</Link></div>
                {assignList.length === 0 ? <p className="mt-3 text-sm" style={muted}>Nothing assigned yet. Open the Library to set a past paper or topic revision.</p> : assignList.slice(0, 4).map((a) => (
                  <div key={a.id} className="mt-3 flex items-center justify-between rounded-xl px-4 py-3 text-sm" style={{ background: 'var(--surface-inset)' }}>
                    <span className="font-semibold">{a.title}</span><span style={muted}>{doneCount(a)} / {memberList.length} done</span>
                  </div>
                ))}
              </section>
              <p className="text-sm" style={muted}>Students join at <b>Join a class</b> on their dashboard using code <b style={{ color: 'var(--text)' }}>{cls.join_code}</b>.</p>
            </div>
          )}

          {tab === 'assignments' && (
            <section>
              <div className="flex items-center justify-between"><h2 className="text-2xl font-extrabold">Assignments</h2><Link href={href('library')} className="rounded-lg px-4 py-2 text-xs font-black tracking-widest" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>CREATE ASSIGNMENT</Link></div>
              {assignList.length === 0 ? <p className="mt-4 text-sm" style={muted}>No assignments yet.</p> : assignList.map((a) => (
                <div key={a.id} className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-4" style={glass}>
                  <div>
                    <div className="font-extrabold">{a.title}</div>
                    <div className="text-xs" style={muted}>{a.kind === 'paper' ? 'Past paper' : 'Topic revision'} · {subjectLabel(a.subject)}{a.due_at ? ` · due ${new Date(a.due_at).toLocaleDateString()}` : ''}</div>
                  </div>
                  <div className="flex items-center gap-3"><span className="text-sm" style={muted}>{doneCount(a)} / {memberList.length} done</span><DeleteAssignmentButton id={a.id} /></div>
                </div>
              ))}
            </section>
          )}

          {tab === 'insights' && (
            <section>
              <h2 className="text-2xl font-extrabold">Insights</h2>
              <p className="mt-1 text-sm" style={muted}>Papers show the student&apos;s best score; topic revision shows when they mark it done; live tasks show worksheet completion.</p>
              {memberList.length === 0 ? <p className="mt-4 text-sm" style={muted}>No students have joined yet — share the class code.</p> : assignList.length + sessionList.length === 0 ? <p className="mt-4 text-sm" style={muted}>Nothing to track yet.</p> : (
                <div className="mt-4 overflow-x-auto rounded-2xl" style={glass}>
                  <table className="w-full min-w-[560px] text-left text-sm">
                    <thead>
                      <tr style={muted}>
                        <th className="p-3 font-bold">Student</th>
                        {assignList.map((a) => <th key={a.id} className="p-3 font-bold">{a.title}</th>)}
                        {sessionList.map((s) => <th key={s.code} className="p-3 font-bold">{getLiveActivity(s.activity_id)?.title ?? s.activity_id}<div className="text-[11px] font-medium">{new Date(s.created_at).toLocaleDateString()}</div></th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {memberList.map((m) => (
                        <tr key={m.user_id} style={{ borderTop: '1px solid var(--border)' }}>
                          <td className="p-3 font-semibold">{m.name || 'Student'}</td>
                          {assignList.map((a) => { const c = assignmentCell(a, m.user_id); return <td key={a.id} className="p-3" style={{ color: c.on ? 'var(--text)' : 'var(--text-subtle)' }}>{c.text}</td> })}
                          {sessionList.map((s) => { const c = liveCell(m.user_id, s); return <td key={s.code} className="p-3" style={{ color: c.on ? 'var(--text)' : 'var(--text-subtle)' }}>{c.text}</td> })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          )}

          {tab === 'library' && (
            <section>
              <h2 className="text-2xl font-extrabold">Library</h2>
              <p className="mt-1 text-sm" style={muted}>Free resources for your subjects. Assign a past paper or topic revision to this class.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {subjectOptions.map((s) => (
                  <Link key={s} href={`/classes/${cls.id}?tab=library&subject=${s}`} className="rounded-full px-4 py-2 text-sm font-bold" style={s === subject ? { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } : { border: '1px solid var(--border-strong)', color: 'var(--text)' }}>{subjectLabel(s)}</Link>
                ))}
              </div>
              {teacherSubjects.length === 0 && <p className="mt-3 text-xs" style={muted}>Tip: choose the subjects you teach on your dashboard to personalise this list.</p>}
              <div className="mt-5"><AssignLibrary key={subject} classId={cls.id} teacherId={user.id} subject={subject} papers={papers} topics={topics} canTopics={topics.length > 0} /></div>
            </section>
          )}

          {tab === 'live' && (
            <section>
              <div className="flex items-center justify-between"><h2 className="text-2xl font-extrabold">Live sessions</h2><Link href="/design/live" className="rounded-lg px-4 py-2 text-xs font-black tracking-widest" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>HOST A LIVE CLASS</Link></div>
              <p className="mt-1 text-sm" style={muted}>Attach one of your recent live sessions to {cls.name}, or remove it.</p>
              <div className="rounded-2xl p-4 mt-3" style={glass}><AssignSessions classId={cls.id} sessions={assignable} /></div>
            </section>
          )}

          {tab === 'manage' && (
            <section>
              <h2 className="text-2xl font-extrabold">Manage class</h2>
              <div className="mt-4 rounded-2xl p-5" style={glass}>
                <div className="text-xs font-black tracking-widest" style={muted}>CLASS CODE</div>
                <div className="text-4xl font-extrabold tracking-[0.25em]">{cls.join_code}</div>
                <p className="mt-2 text-sm" style={muted}>Students enter this at <b>Join a class</b>.</p>
              </div>
              <div className="mt-4 rounded-2xl p-5" style={glass}>
                <h3 className="text-lg font-extrabold">Students ({memberList.length})</h3>
                {memberList.length === 0 ? <p className="mt-2 text-sm" style={muted}>Nobody has joined yet.</p> : memberList.map((m) => (
                  <div key={m.user_id} className="mt-2 flex items-center justify-between rounded-lg px-3 py-2 text-sm" style={{ background: 'var(--surface-inset)' }}>
                    <span className="font-semibold">{m.name || 'Student'}</span>
                    <RemoveMemberButton classId={cls.id} userId={m.user_id} name={m.name} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
