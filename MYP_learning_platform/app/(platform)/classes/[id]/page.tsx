import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { ClassMemberRow, ClassRow } from '@/lib/classes'
import { getLiveActivity } from '@/data/design/live/registry'
import { worksheetSectionPct } from '@/lib/design-live/scoring'
import AssignSessions from '@/components/teacher/AssignSessions'

interface SessionRow { code: string; activity_id: string; status: string; created_at: string }
interface PlayerRow { session_code: string; user_id: string; points: number; data: Record<string, any> | null }
interface GradeRow { session_code: string; player_id: string; scores: Record<string, number | null>; graded: boolean }

const card = { background: 'var(--surface-elevated)', border: '1px solid var(--border)' } as const

export default async function ClassPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: cls } = await supabase.from('classes').select('*').eq('id', params.id).eq('teacher_id', user.id).maybeSingle<ClassRow>()
  if (!cls) notFound()

  const [{ data: members }, { data: sessions }] = await Promise.all([
    supabase.from('class_members').select('*').eq('class_id', cls.id).order('name'),
    supabase.from('live_sessions').select('code, activity_id, status, created_at').eq('class_id', cls.id).order('created_at', { ascending: false }),
  ])
  const { data: mine } = await supabase.from('live_sessions').select('code, activity_id, status, created_at, class_id').eq('host_id', user.id).order('created_at', { ascending: false }).limit(20)
  const assignable = (mine ?? []).filter((x) => x.class_id === null || x.class_id === cls.id).map((x) => ({
    code: x.code,
    title: getLiveActivity(x.activity_id)?.title ?? x.activity_id,
    status: x.status,
    date: new Date(x.created_at).toLocaleDateString(),
    assigned: x.class_id === cls.id,
  }))
  const memberList = (members ?? []) as ClassMemberRow[]
  const sessionList = (sessions ?? []) as SessionRow[]
  const codes = sessionList.map((s) => s.code)

  const [{ data: players }, { data: grades }] = codes.length
    ? await Promise.all([
        supabase.from('live_players').select('id, session_code, user_id, points, data').in('session_code', codes),
        supabase.from('live_grades').select('session_code, player_id, scores, graded').in('session_code', codes),
      ])
    : [{ data: [] }, { data: [] }]
  const playerRows = (players ?? []) as (PlayerRow & { id: string })[]
  const gradeRows = (grades ?? []) as GradeRow[]

  // One cell per student per assigned session: not joined / joined / graded.
  // Average completion across the activity's worksheet sections.
  function completion(activityId: string, data: Record<string, any> | null): number | null {
    const stages = getLiveActivity(activityId)?.stages.filter((st) => st.type === 'worksheet') ?? []
    const pcts: number[] = []
    stages.forEach((st: any) => st.sections.forEach((sec: any) => pcts.push(worksheetSectionPct(sec, data?.[st.key]?.[sec.key] || {}))))
    return pcts.length ? Math.round(pcts.reduce((a, b) => a + b, 0) / pcts.length) : null
  }

  function cell(userId: string, code: string, activityId: string): { text: string; tone: string } {
    const p = playerRows.find((x) => x.session_code === code && x.user_id === userId)
    if (!p) return { text: '—', tone: 'var(--text-subtle)' }
    const g = gradeRows.find((x) => x.session_code === code && x.player_id === p.id)
    if (g?.graded) {
      const vals = Object.values(g.scores).filter((v): v is number => typeof v === 'number')
      const avg = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 : null
      return { text: avg !== null ? `Graded · avg ${avg}` : 'Graded', tone: 'var(--accent)' }
    }
    const pct = completion(activityId, p.data)
    return { text: pct !== null ? `${pct}% done · ${p.points} pts` : `Joined · ${p.points} pts`, tone: 'var(--text)' }
  }

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <Link href="/dashboard" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>← DASHBOARD</Link>
        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl" style={{ color: 'var(--text)' }}>{cls.name}</h1>
        <div className="mt-2 inline-flex items-center gap-2 rounded-xl px-4 py-2" style={card}>
          <span className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>CLASS CODE</span>
          <span className="text-2xl font-extrabold tracking-[0.2em]" style={{ color: 'var(--accent)' }}>{cls.join_code}</span>
        </div>
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Students enter this code at <b>Join a class</b> on their dashboard.</p>

        <section className="mt-8 rounded-2xl p-5" style={card}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Live tasks and student progress</h2>
            <Link href="/design/live" className="text-sm font-bold" style={{ color: 'var(--accent)' }}>Host a live class →</Link>
          </div>
          {sessionList.length === 0 ? (
            <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              No live tasks yet. Host a live class and choose <b>{cls.name}</b> in its lobby to assign it here.
            </p>
          ) : memberList.length === 0 ? (
            <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>No students have joined yet — share the class code.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[520px] text-left text-sm">
                <thead>
                  <tr style={{ color: 'var(--text-subtle)' }}>
                    <th className="py-2 pr-4 font-bold">Student</th>
                    {sessionList.map((s) => (
                      <th key={s.code} className="px-2 py-2 font-bold">
                        {getLiveActivity(s.activity_id)?.title ?? s.activity_id}
                        <div className="text-[11px] font-medium">{new Date(s.created_at).toLocaleDateString()} · {s.status}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {memberList.map((m) => (
                    <tr key={m.user_id} style={{ borderTop: '1px solid var(--border)' }}>
                      <td className="py-2 pr-4 font-semibold" style={{ color: 'var(--text)' }}>{m.name || 'Student'}</td>
                      {sessionList.map((s) => {
                        const c = cell(m.user_id, s.code, s.activity_id)
                        return <td key={s.code} className="px-2 py-2" style={{ color: c.tone }}>{c.text}</td>
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="mt-6 rounded-2xl p-5" style={card}>
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Assign a live session to this class</h2>
          <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>Your recent live sessions that are not in another class.</p>
          <AssignSessions classId={cls.id} sessions={assignable} />
        </section>

        <section className="mt-6 rounded-2xl p-5" style={card}>
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>Students ({memberList.length})</h2>
          {memberList.length === 0 ? (
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Nobody has joined yet.</p>
          ) : (
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>{memberList.map((m) => m.name || 'Student').join(', ')}</p>
          )}
        </section>
      </div>
    </div>
  )
}
