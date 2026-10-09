import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { classLook, type ClassMemberRow, type ClassRow } from '@/lib/classes'
import { getLiveActivity } from '@/data/design/live/registry'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import { LAUNCHED_PAPERS } from '@/data/launched-papers'
import { BIOLOGY_BANK } from '@/data/practice/biology-bank'
import { CHEMISTRY_BANK } from '@/data/practice/chemistry-bank'
import { PHYSICS_BANK } from '@/data/practice/physics-bank'
import { TEACH_SUBJECTS, paperTitle, subjectLabel } from '@/lib/subjects'
import { MODULES } from '@/data/learn/physics'
import { lessonChecks, lessonStats, progressLabel, resolveLesson, formatUnlock, unlockState } from '@/lib/learn/assignments'
import { lessonHasLiveQuestions, physicsLiveId } from '@/lib/learn/live-physics'
import AssignSessions from '@/components/teacher/AssignSessions'
import InviteCard from '@/components/teacher/InviteCard'
import ClassLookPicker from '@/components/teacher/ClassLookPicker'
import { AssignLibrary, DeleteAssignmentButton, RemoveMemberButton, DeleteClassButton, ReopenSessionButton, UnlockNowButton, HostLessonLiveButton } from '@/components/teacher/ClassActions'
import StudentAnswerPeek from '@/components/teacher/StudentAnswerPeek'
import DownloadReportButton from '@/components/teacher/DownloadReportButton'
import DownloadWorkButton from '@/components/teacher/DownloadWorkButton'
import { collectWork } from '@/lib/design-live/studentWork'

interface SessionRow { code: string; activity_id: string; status: string; created_at: string }
interface PlayerRow { id: string; session_code: string; user_id: string; points: number; data: Record<string, any> | null }
interface GradeRow { session_code: string; player_id: string; scores: Record<string, number | null>; graded: boolean }
interface AssignmentRow { id: string; kind: string; subject: string; ref: string; title: string; due_at: string | null; created_at: string; mode?: string; scope?: string; unlock_at?: string | null; position?: number | null }
interface LessonProgressRow { user_id: string; lesson_key: string; checks: Record<string, number> | null; done: boolean | null }

const KIND_LABEL: Record<string, string> = { paper: 'Past paper', topic: 'Topic revision', crit: 'Criteria quiz', lesson: 'DP Physics lesson' }
const kindLabel = (a: AssignmentRow) => a.kind === 'lesson' ? `DP Physics · ${a.mode === 'live' ? 'live class' : a.scope === 'questions' ? 'self-paced questions' : 'self-paced lesson'}` : KIND_LABEL[a.kind] ?? a.kind

const BANKS: Record<string, { topicCanonical?: string }[]> = { biology: BIOLOGY_BANK, chemistry: CHEMISTRY_BANK, physics: PHYSICS_BANK }

// A couple of activities carry a plain function in their config (see
// myp3-unit1-kickoff-extended's exemplarsByChoice.extractKey) — fine to use
// client-side, but this page is a Server Component and Next.js cannot
// serialize a function across the Server->Client prop boundary. The student
// answer peek only ever reads `stages`/`title`/`icon`/`theme`, never
// exemplarsByChoice, so just drop it before handing the activity down.
function clientSafeActivity<T extends { exemplarsByChoice?: unknown } | undefined>(activity: T): T {
  if (!activity) return activity
  return { ...activity, exemplarsByChoice: undefined }
}

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
    supabase.from('class_assignments').select('id, kind, subject, ref, title, due_at, created_at, mode, scope, unlock_at, position').eq('class_id', cls.id).order('position', { ascending: true, nullsFirst: false }).order('created_at', { ascending: false }),
    supabase.from('profiles').select('subjects').eq('id', user.id).maybeSingle(),
    supabase.from('live_sessions').select('code, activity_id, status, created_at, class_id').eq('host_id', user.id).order('created_at', { ascending: false }).limit(20),
  ])
  const memberList = (members ?? []) as ClassMemberRow[]
  const sessionList = (sessions ?? []) as SessionRow[]
  const assignList = (assigns ?? []) as AssignmentRow[]
  const codes = sessionList.map((s) => s.code)
  const memberIds = memberList.map((m) => m.user_id)

  const needProgress = tab === 'insights' || tab === 'overview' || tab === 'assignments' || tab === 'live'
  const lessonKeys = assignList.filter((a) => a.kind === 'lesson').map((a) => a.ref)
  const [{ data: players }, { data: grades }, { data: done }, { data: attempts }, { data: lpData }] = needProgress
    ? await Promise.all([
        codes.length ? supabase.from('live_players').select('id, session_code, user_id, points, data').in('session_code', codes) : Promise.resolve({ data: [] }),
        codes.length ? supabase.from('live_grades').select('session_code, player_id, scores, graded').in('session_code', codes) : Promise.resolve({ data: [] }),
        assignList.length ? supabase.from('assignment_progress').select('assignment_id, user_id').in('assignment_id', assignList.map((a) => a.id)) : Promise.resolve({ data: [] }),
        assignList.some((a) => a.kind === 'paper') && memberIds.length
          ? supabase.from('attempts').select('user_id, paper_id, total_score, max_score').eq('status', 'completed').in('paper_id', assignList.filter((a) => a.kind === 'paper').map((a) => a.ref)).in('user_id', memberIds)
          : Promise.resolve({ data: [] }),
        lessonKeys.length && memberIds.length ? supabase.from('lesson_progress').select('user_id, lesson_key, checks, done').in('lesson_key', lessonKeys).in('user_id', memberIds) : Promise.resolve({ data: [] }),
      ])
    : [{ data: [] }, { data: [] }, { data: [] }, { data: [] }, { data: [] }]
  const lessonRows = (lpData ?? []) as LessonProgressRow[]
  const playerRows = (players ?? []) as PlayerRow[]
  const gradeRows = (grades ?? []) as GradeRow[]
  const doneRows = (done ?? []) as { assignment_id: string; user_id: string }[]
  const attemptRows = (attempts ?? []) as { user_id: string; paper_id: string; total_score: number | null; max_score: number | null }[]

  // 0..1 for a progress bar: papers/topic sets/quizzes are done or not; a lesson counts the questions answered;
  // a live-class lesson is "in" once the student joined the session run for this class.
  function assignmentFraction(a: AssignmentRow, userId: string): number {
    if (a.kind === 'lesson' && a.mode !== 'live') {
      const row = lessonRows.find((r) => r.user_id === userId && r.lesson_key === a.ref)
      const found = resolveLesson(a.ref)
      if (!row || !found) return 0
      if (row.done) return 1
      const st = lessonStats(found.lesson, row.checks)
      return st.total ? st.answered / st.total : 0
    }
    return assignmentCell(a, userId).on ? 1 : 0
  }
  const classProgress = (a: AssignmentRow) => memberList.length ? Math.round((memberList.reduce((n, m) => n + assignmentFraction(a, m.user_id), 0) / memberList.length) * 100) : 0

  function assignmentCell(a: AssignmentRow, userId: string): { text: string; on: boolean } {
    if (a.kind === 'lesson') {
      if (a.mode === 'live') {
        const id = physicsLiveId(...(a.ref.split('/') as [string, string]))
        const sess = sessionList.filter((s) => s.activity_id === id)
        const hit = sess.map((s) => liveCell(userId, s)).find((c) => c.on)
        return hit ?? { text: sess.length ? 'Not joined' : 'Not run yet', on: false }
      }
      const row = lessonRows.find((r) => r.user_id === userId && r.lesson_key === a.ref)
      const found = resolveLesson(a.ref)
      if (!row || !found) return { text: '—', on: false }
      const label = progressLabel(lessonStats(found.lesson, row.checks), !!row.done)
      return { text: label.text, on: label.tone !== 'none' }
    }
    if (a.kind === 'paper') {
      const best = attemptRows.filter((t) => t.user_id === userId && t.paper_id === a.ref).sort((x, y) => (y.total_score ?? 0) - (x.total_score ?? 0))[0]
      if (!best) return { text: '—', on: false }
      const pct = best.max_score ? Math.round(((best.total_score ?? 0) / best.max_score) * 100) : null
      return { text: pct !== null ? `${pct}%` : 'Done', on: true }
    }
    return doneRows.some((d) => d.assignment_id === a.id && d.user_id === userId) ? { text: 'Done ✓', on: true } : { text: '—', on: false }
  }
  const doneCount = (a: AssignmentRow) => memberList.filter((m) => assignmentFraction(a, m.user_id) >= 1).length

  function completion(activityId: string, data: Record<string, any> | null): number | null {
    const stages = getLiveActivity(activityId)?.stages.filter((st) => st.type === 'worksheet') ?? []
    const pcts: number[] = []
    stages.forEach((st: any) => st.sections.forEach((sec: any) => pcts.push(worksheetSectionPct(sec, data?.[st.key]?.[sec.key] || {}))))
    return pcts.length ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length) : null
  }
  function liveCell(userId: string, s: SessionRow): { text: string; on: boolean; playerId?: string; data?: Record<string, any> | null } {
    const p = playerRows.find((x) => x.session_code === s.code && x.user_id === userId)
    if (!p) return { text: '—', on: false }
    const g = gradeRows.find((x) => x.session_code === s.code && x.player_id === p.id)
    if (g?.graded) {
      const vals = Object.values(g.scores).filter((v): v is number => typeof v === 'number')
      const avg = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 : null
      return { text: avg !== null ? `Graded · avg ${avg}` : 'Graded', on: true, playerId: p.id, data: p.data }
    }
    const pct = completion(s.activity_id, p.data)
    return { text: pct !== null ? `${pct}% done · ${p.points} pts` : `Joined · ${p.points} pts`, on: true, playerId: p.id, data: p.data }
  }

  // Real MYP criterion strand scores only (live_grades.scores also holds
  // synthetic worksheet-review keys like "ws:stageKey:sectionKey" and
  // "reveal:..." flags, which aren't meant for a student-facing report).
  function gradeBreakdown(userId: string, s: SessionRow): { key: string; label: string; score: number }[] | undefined {
    const p = playerRows.find((x) => x.session_code === s.code && x.user_id === userId)
    if (!p) return undefined
    const g = gradeRows.find((x) => x.session_code === s.code && x.player_id === p.id)
    if (!g?.graded) return undefined
    const strandLabels = new Map<string, string>()
    getLiveActivity(s.activity_id)?.stages.forEach((st) => { if (st.type === 'grading') st.strands.forEach((str) => strandLabels.set(str.key, str.label)) })
    return Object.entries(g.scores)
      .filter((entry): entry is [string, number] => typeof entry[1] === 'number' && !entry[0].startsWith('ws:') && !entry[0].startsWith('reveal:'))
      .map(([key, score]) => ({ key, label: strandLabels.get(key) ?? key, score }))
  }

  // Library data (only built for that tab)
  // Any subject can be assigned to any class; the subjects the teacher said they teach come first.
  const teacherSubjects = ((profile?.subjects as string[] | null) ?? []).filter((s) => TEACH_SUBJECTS.some((t) => t.slug === s))
  const subjectOptions = [...teacherSubjects, ...TEACH_SUBJECTS.map((t) => t.slug).filter((s) => !teacherSubjects.includes(s))]
  const subject = subjectOptions.includes(searchParams.subject ?? '') ? searchParams.subject! : subjectOptions[0]
  const assignedRefs = new Set(assignList.map((a) => `${a.kind}:${a.subject}:${a.ref}`))
  const papers = LAUNCHED_PAPERS.filter((p) => p.startsWith(`${subject}-`)).map((p) => ({ ref: p, title: paperTitle(p), assigned: assignedRefs.has(`paper:${subject}:${p}`) }))
  const topicNames = Array.from(new Set((BANKS[subject] ?? []).map((q) => q.topicCanonical).filter((t): t is string => !!t))).sort()
  const topics = topicNames.map((t) => ({ ref: t, title: t, assigned: assignedRefs.has(`topic:${subject}:${t}`) }))

  const critCounts: Record<string, number> = {}
  for (const q of ((BANKS[subject] ?? []) as { crit?: string }[])) if (q.crit) critCounts[q.crit] = (critCounts[q.crit] ?? 0) + 1
  const CRIT_NAMES: Record<string, string> = { A: 'Criterion A · Knowing & Understanding', B: 'Criterion B · Inquiring & Designing', C: 'Criterion C · Processing & Evaluating', D: 'Criterion D · Reflecting on Impacts' }
  const crits = Object.keys(critCounts).sort().map((c) => ({ ref: c, title: `${CRIT_NAMES[c] ?? `Criterion ${c}`} (${critCounts[c]} questions)`, assigned: assignedRefs.has(`crit:${subject}:${c}`) }))
  const assignedLessons = new Set(assignList.filter((a) => a.kind === 'lesson').map((a) => a.ref))
  const outline = MODULES.map((m) => ({
    module: m.slug,
    moduleTitle: m.title,
    lessons: m.lessons.map((l) => ({ key: `${m.slug}/${l.slug}`, code: l.code, title: l.title, minutes: l.minutes, checks: lessonChecks(l).length, live: lessonHasLiveQuestions(l), assigned: assignedLessons.has(`${m.slug}/${l.slug}`) })),
  }))

  const assignable = (mine ?? []).filter((x) => x.class_id === null || x.class_id === cls.id).map((x) => ({
    code: x.code,
    title: getLiveActivity(x.activity_id)?.title ?? x.activity_id,
    status: x.status,
    date: new Date(x.created_at).toLocaleDateString(),
    assigned: x.class_id === cls.id,
  }))

  const href = (t: string) => `/classes/${cls.id}?tab=${t}`
  const look = classLook(cls)

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 56px)', background: 'var(--bg)', backgroundImage: 'var(--bg-image)', color: 'var(--text)' }}>
      {/* Diamond navigation, same language as the Design and teacher hubs */}
      <nav className="fixed z-40 hidden flex-col gap-4 md:flex" style={{ left: '2rem', top: 'calc(50% + 28px)', transform: 'translateY(-50%)' }} aria-label="Class sections">
        {TABS.map((t) => {
          const on = tab === t.id
          return (
            <Link key={t.id} href={href(t.id)} className="group flex items-center gap-2" aria-current={on ? 'page' : undefined}>
              <span
                className="block transition-all"
                style={{ width: on ? 12 : 8, height: on ? 12 : 8, transform: 'rotate(45deg)', background: on ? 'var(--accent)' : 'var(--border)', border: on ? 'none' : '1px solid var(--border-strong)', boxShadow: on ? '0 0 10px var(--accent)' : 'none', flexShrink: 0 }}
              />
              <span style={{ color: on ? 'var(--text)' : 'var(--text-subtle)', fontSize: on ? 11 : 9.5, fontWeight: on ? 900 : 700, letterSpacing: '0.15em', whiteSpace: 'nowrap' }} className="group-hover:opacity-100">
                {t.label.toUpperCase()}
              </span>
            </Link>
          )
        })}
      </nav>

      <div className="min-w-0 flex-1 md:pl-52">
        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto p-3 md:hidden">
          {TABS.map((t) => (
            <Link key={t.id} href={href(t.id)} className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold" style={tab === t.id ? { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } : { border: '1px solid var(--border-strong)', color: 'var(--text)' }}>{t.label}</Link>
          ))}
        </div>

        {/* Hero banner — the class's emoji and colours */}
        <div className="mx-auto max-w-5xl px-6 pt-8 md:px-10">
        <div className="relative overflow-hidden px-6 py-8 md:px-8" style={{ background: look.gradient, color: '#fff', borderRadius: 'calc(var(--radius-card) + 8px)', boxShadow: 'var(--shadow-card-hover)' }}>
          <div aria-hidden className="pointer-events-none absolute -right-4 -top-6 select-none leading-none" style={{ fontSize: 190, opacity: 0.22 }}>{look.emoji}</div>
          <div className="relative flex items-center gap-5">
            <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[calc(var(--radius-card)+8px)] text-5xl" style={{ background: 'rgba(255,255,255,0.22)', border: '2px solid rgba(255,255,255,0.5)' }}>{look.emoji}</div>
            <div className="min-w-0">
              <Link href="/dashboard" className="text-[10px] font-black tracking-[0.3em] hover:underline" style={{ opacity: 0.85 }}>← DASHBOARD</Link>
              <h1 className="mt-1 font-extrabold leading-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-1.5px' }}>{cls.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm" style={{ opacity: 0.92 }}>
                <span>{memberList.length} student{memberList.length === 1 ? '' : 's'}</span>
                <span>·</span>
                <span>Code <b className="tracking-[0.2em]">{cls.join_code}</b></span>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 pb-8 pt-6 md:px-10">
          {tab === 'overview' && (
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { n: memberList.length, l: 'Students' },
                  { n: assignList.length, l: 'Assignments' },
                  { n: sessionList.length, l: 'Live sessions' },
                ].map((s) => (
                  <div key={s.l} className="rounded-[var(--radius-card)] p-5" style={glass}>
                    <div className="text-4xl font-extrabold">{s.n}</div>
                    <div className="text-xs font-black tracking-widest" style={muted}>{s.l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
              <section className="rounded-[var(--radius-card)] p-5" style={glass}>
                <div className="flex items-center justify-between"><h2 className="text-lg font-extrabold">Recent assignments</h2><Link href={href('library')} className="text-xs font-black tracking-widest">+ NEW</Link></div>
                {assignList.length === 0 ? <p className="mt-3 text-sm" style={muted}>Nothing assigned yet. Open the Library to set a past paper or topic revision.</p> : assignList.slice(0, 4).map((a) => (
                  <div key={a.id} className="mt-3 flex items-center justify-between rounded-[var(--radius-panel)] px-4 py-3 text-sm" style={{ background: 'var(--surface-inset)' }}>
                    <span className="font-semibold">{a.title}</span><span style={muted}>{doneCount(a)} / {memberList.length} done</span>
                  </div>
                ))}
              </section>
              <InviteCard code={cls.join_code} className={cls.name} />
            </div>
          )}

          {tab === 'assignments' && (
            <section>
              <div className="flex items-center justify-between"><h2 className="text-2xl font-extrabold">Assignments</h2><Link href={href('library')} className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-widest" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>CREATE ASSIGNMENT</Link></div>
              {assignList.length === 0 ? <p className="mt-4 text-sm" style={muted}>No assignments yet.</p> : assignList.map((a) => {
                const pct = classProgress(a)
                const lock = a.kind === 'lesson' && a.mode !== 'live' ? unlockState(a.unlock_at) : null
                const planned = a.kind === 'lesson' && a.mode === 'live' && a.unlock_at ? new Date(a.unlock_at) : null
                return (
                  <div key={a.id} className="mt-3 rounded-[var(--radius-card)] p-4" style={glass}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="font-extrabold">{a.title}</div>
                        <div className="text-xs" style={muted}>
                          {kindLabel(a)}{a.kind !== 'lesson' ? ` · ${subjectLabel(a.subject)}` : ''}{a.due_at ? ` · due ${new Date(a.due_at).toLocaleDateString()}` : ''}
                          {lock?.state === 'locked' && <> · <b>🔒 opens {formatUnlock(lock.unlockAt)}</b></>}
                          {lock?.state === 'open' && a.unlock_at && <> · unlocked</>}
                          {planned && <> · planned {planned.toLocaleDateString()}</>}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm" style={muted}>{doneCount(a)} / {memberList.length} done</span>
                        {a.kind === 'lesson' && a.mode === 'live' && <HostLessonLiveButton classId={cls.id} lessonRef={a.ref} />}
                        {lock?.state === 'locked' && <UnlockNowButton id={a.id} />}
                        <DeleteAssignmentButton id={a.id} />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--surface-inset)' }} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${a.title} class progress`}>
                        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--gradient-cta)' }} />
                      </div>
                      <span className="w-10 text-right text-xs font-bold" style={muted}>{pct}%</span>
                    </div>
                  </div>
                )
              })}
            </section>
          )}

          {tab === 'insights' && (
            <section>
              <h2 className="text-2xl font-extrabold">Insights</h2>
              <p className="mt-1 text-sm" style={muted}>Papers show the best score; topic sets and criteria quizzes show when a student marks them done; DP Physics lessons show questions answered (saved as they work); live tasks show completion.</p>
              {memberList.length === 0 ? <p className="mt-4 text-sm" style={muted}>No students have joined yet — share the class code.</p> : assignList.length + sessionList.length === 0 ? <p className="mt-4 text-sm" style={muted}>Nothing to track yet.</p> : (
                <div className="mt-4 overflow-x-auto rounded-[var(--radius-card)]" style={glass}>
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
                          <td className="p-3 font-semibold">
                            <div className="flex items-center gap-2">
                              <span>{m.name || 'Student'}</span>
                              <RemoveMemberButton classId={cls.id} userId={m.user_id} name={m.name} compact />
                              <DownloadReportButton
                                studentName={m.name || 'Student'}
                                className={cls.name}
                                assignments={assignList.map((a) => ({ title: a.title, subtitle: `${kindLabel(a)}${a.kind !== 'lesson' ? ` · ${subjectLabel(a.subject)}` : ''}`, result: assignmentCell(a, m.user_id).text }))}
                                sessions={sessionList.map((s) => ({ title: getLiveActivity(s.activity_id)?.title ?? s.activity_id, date: new Date(s.created_at).toLocaleDateString(), result: liveCell(m.user_id, s).text, grades: gradeBreakdown(m.user_id, s) }))}
                              />
                            </div>
                          </td>
                          {assignList.map((a) => { const c = assignmentCell(a, m.user_id); return <td key={a.id} className="p-3" style={{ color: c.on ? 'var(--text)' : 'var(--text-subtle)' }}>{c.text}</td> })}
                          {sessionList.map((s) => {
                            const c = liveCell(m.user_id, s)
                            const activity = getLiveActivity(s.activity_id)
                            return (
                              <td key={s.code} className="p-3" style={{ color: c.on ? 'var(--text)' : 'var(--text-subtle)' }}>
                                {c.on && c.playerId && activity ? (
                                  <StudentAnswerPeek activity={clientSafeActivity(activity)} playerId={c.playerId} playerName={m.name || 'Student'} sessionActive={s.status === 'active'} savedData={c.data ?? null}>
                                    {c.text}
                                  </StudentAnswerPeek>
                                ) : (
                                  c.text
                                )}
                              </td>
                            )
                          })}
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
              <p className="mt-1 text-sm" style={muted}>Assign past papers, topic revision and criteria-wise quizzes from any subject, or self-study DP Physics lessons (live or self-paced, optionally dripped).</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {subjectOptions.map((s) => (
                  <Link key={s} href={`/classes/${cls.id}?tab=library&subject=${s}`} className="rounded-full px-4 py-2 text-sm font-bold" style={s === subject ? { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } : { border: '1px solid var(--border-strong)', color: 'var(--text)' }}>{subjectLabel(s)}</Link>
                ))}
              </div>
              {teacherSubjects.length === 0 && <p className="mt-3 text-xs" style={muted}>Tip: choose the subjects you teach on your dashboard to list them first.</p>}
              <div className="mt-5"><AssignLibrary key={subject} classId={cls.id} teacherId={user.id} subject={subject} papers={papers} topics={topics} crits={crits} outline={outline} startOnPhysics={/(dp|ib|ibdp)|physics/i.test(cls.name)} /></div>
            </section>
          )}

          {tab === 'live' && (
            <section>
              <div className="flex items-center justify-between"><h2 className="text-2xl font-extrabold">Live sessions</h2><Link href="/design/live" className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-widest" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>HOST A LIVE CLASS</Link></div>
              <p className="mt-1 text-sm" style={muted}>Attach one of your recent live sessions to {cls.name}, or remove it.</p>
              <div className="rounded-[var(--radius-card)] p-4 mt-3" style={glass}><AssignSessions classId={cls.id} sessions={assignable} /></div>

              <h3 className="mt-6 text-lg font-extrabold">History</h3>
              <p className="mt-1 text-sm" style={muted}>Every session run for {cls.name}, most recent first.</p>
              {sessionList.length === 0 ? <p className="mt-3 text-sm" style={muted}>No sessions run for this class yet.</p> : (
                <div className="mt-3 space-y-2">
                  {sessionList.map((s) => {
                    const activity = getLiveActivity(s.activity_id)
                    const rows = memberList.map((m) => ({ m, c: liveCell(m.user_id, s) }))
                    const joined = rows.filter((r) => r.c.on).length
                    const gradedCount = rows.filter((r) => r.c.on && r.c.text.startsWith('Graded')).length
                    return (
                      <details key={s.code} className="rounded-[var(--radius-card)] p-4" style={glass}>
                        <summary className="flex cursor-pointer flex-wrap items-center justify-between gap-2">
                          <div>
                            <span className="font-extrabold">{activity?.title ?? s.activity_id}</span>
                            <span className="ml-2 text-xs" style={muted}>{new Date(s.created_at).toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold">
                            <span className="rounded-full px-3 py-1" style={{ background: s.status === 'active' ? 'var(--accent-soft, #ffedd5)' : 'var(--surface-inset)', color: s.status === 'active' ? 'var(--accent, #c2410c)' : 'var(--text-muted)' }}>{s.status === 'active' ? 'Live now' : 'Ended'}</span>
                            <span style={muted}>{joined}/{memberList.length} joined{gradedCount > 0 ? ` · ${gradedCount} graded` : ''}</span>
                            <ReopenSessionButton activityId={s.activity_id} code={s.code} activityExists={!!activity} />
                          </div>
                        </summary>
                        {memberList.length === 0 ? <p className="mt-3 text-sm" style={muted}>No students in this class yet.</p> : (
                          <div className="mt-3 divide-y" style={{ borderColor: 'var(--border)' }}>
                            {rows.map(({ m, c }) => (
                              <div key={m.user_id} className="flex items-center justify-between gap-3 py-2 text-sm">
                                <span className="font-semibold">{m.name || 'Student'}</span>
                                <span className="flex items-center gap-3">
                                  {c.on && c.playerId && activity ? (
                                    <>
                                      <StudentAnswerPeek activity={clientSafeActivity(activity)} playerId={c.playerId} playerName={m.name || 'Student'} sessionActive={s.status === 'active'} savedData={c.data ?? null}>
                                        <span style={{ color: 'var(--text)' }}>{c.text}</span>
                                      </StudentAnswerPeek>
                                      <DownloadWorkButton studentName={m.name || 'Student'} className={cls.name} activityTitle={activity.title} date={new Date(s.created_at).toLocaleDateString()} blocks={collectWork(activity, c.data)} />
                                    </>
                                  ) : (
                                    <span style={{ color: 'var(--text-subtle)' }}>{c.text}</span>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </details>
                    )
                  })}
                </div>
              )}
            </section>
          )}

          {tab === 'manage' && (
            <section>
              <h2 className="text-2xl font-extrabold">Manage class</h2>
              <div className="mt-4"><InviteCard code={cls.join_code} className={cls.name} /></div>
              <div className="mt-4"><ClassLookPicker classId={cls.id} emoji={cls.emoji ?? null} theme={cls.theme ?? null} /></div>
              <div className="mt-4 rounded-[var(--radius-card)] p-5" style={glass}>
                <div className="text-xs font-black tracking-widest" style={muted}>CLASS CODE</div>
                <div className="text-4xl font-extrabold tracking-[0.25em]">{cls.join_code}</div>
                <p className="mt-2 text-sm" style={muted}>Students enter this at <b>Join a class</b>.</p>
              </div>
              <div className="mt-4 rounded-[var(--radius-card)] p-5" style={glass}>
                <h3 className="text-lg font-extrabold">Students ({memberList.length})</h3>
                {memberList.length === 0 ? <p className="mt-2 text-sm" style={muted}>Nobody has joined yet.</p> : memberList.map((m) => (
                  <div key={m.user_id} className="mt-2 flex items-center justify-between rounded-[var(--radius-control)] px-3 py-2 text-sm" style={{ background: 'var(--surface-inset)' }}>
                    <span className="font-semibold">{m.name || 'Student'}</span>
                    <RemoveMemberButton classId={cls.id} userId={m.user_id} name={m.name} />
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-[var(--radius-card)] p-5" style={glass}>
                <h3 className="text-lg font-extrabold">Danger zone</h3>
                <p className="mt-1 text-sm" style={muted}>Delete this class for good.</p>
                <div className="mt-3"><DeleteClassButton classId={cls.id} className={cls.name} /></div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
