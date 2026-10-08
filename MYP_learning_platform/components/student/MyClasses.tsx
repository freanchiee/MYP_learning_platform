import Link from 'next/link'
import type { SupabaseClient } from '@supabase/supabase-js'
import { getLiveActivity } from '@/data/design/live/registry'
import { assignmentHref, subjectLabel } from '@/lib/subjects'
import { MarkDoneButton } from '@/components/teacher/ClassActions'
import { formatUnlock, lessonHref, lessonStats, progressLabel, resolveLesson, unlockState } from '@/lib/learn/assignments'
import { physicsLiveId } from '@/lib/learn/live-physics'

// Student dashboard section: the classes they belong to, live sessions their
// teacher has assigned that are still open, and assigned papers / revision.
export default async function MyClasses({ supabase, userId }: { supabase: SupabaseClient; userId: string }) {
  const { data: memberships } = await supabase.from('class_members').select('class_id').eq('user_id', userId)
  const ids = (memberships ?? []).map((m) => m.class_id)
  const empty = { data: [] as any[] }
  const [{ data: classes }, { data: sessions }, { data: assigns }] = ids.length
    ? await Promise.all([
        supabase.from('classes').select('id, name').in('id', ids),
        supabase.from('live_sessions').select('code, activity_id, status, class_id').in('class_id', ids).neq('status', 'ended').order('created_at', { ascending: false }),
        supabase.from('class_assignments').select('id, class_id, kind, subject, ref, title, due_at, mode, scope, unlock_at, position').in('class_id', ids).order('position', { ascending: true, nullsFirst: false }).order('created_at', { ascending: false }),
      ])
    : [empty, empty, empty]

  const list = assigns ?? []
  const [{ data: myDone }, { data: myAttempts }, { data: myLessons }] = list.length
    ? await Promise.all([
        supabase.from('assignment_progress').select('assignment_id').eq('user_id', userId),
        supabase.from('attempts').select('paper_id').eq('user_id', userId).eq('status', 'completed').in('paper_id', list.filter((a) => a.kind === 'paper').map((a) => a.ref)),
        supabase.from('lesson_progress').select('lesson_key, checks, done').eq('user_id', userId).in('lesson_key', list.filter((a) => a.kind === 'lesson').map((a) => a.ref)),
      ])
    : [empty, empty, empty]
  const isDone = (a: { id: string; kind: string; ref: string }) =>
    a.kind === 'paper' ? (myAttempts ?? []).some((t) => t.paper_id === a.ref) : (myDone ?? []).some((d) => d.assignment_id === a.id)

  // Progress 0..1 for the bar; lessons count questions answered, live lessons are in once a session exists.
  const progressOf = (a: { id: string; kind: string; ref: string; mode?: string }): { frac: number; text: string } => {
    if (a.kind !== 'lesson') return { frac: isDone(a) ? 1 : 0, text: isDone(a) ? 'Done ✓' : 'Not done' }
    if (a.mode === 'live') return { frac: 0, text: 'Live class' }
    const found = resolveLesson(a.ref)
    const mine = (myLessons ?? []).find((r: { lesson_key: string }) => r.lesson_key === a.ref)
    if (!found || !mine) return { frac: 0, text: 'Not started' }
    const st = lessonStats(found.lesson, mine.checks)
    return { frac: mine.done ? 1 : st.total ? st.answered / st.total : 0, text: progressLabel(st, !!mine.done).text }
  }
  const overall = list.length ? Math.round((list.reduce((n, a) => n + progressOf(a).frac, 0) / list.length) * 100) : 0

  const row = { border: '1px solid var(--border)', color: 'var(--text)' } as const

  return (
    <section className="mx-auto max-w-6xl px-6 pt-8">
      <div className="rounded-[var(--radius-card)] p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>My classes</h2>
          <Link href="/join-class" className="text-sm font-bold" style={{ color: 'var(--accent)' }}>Join a class with a code →</Link>
        </div>
        {(classes ?? []).length === 0 ? (
          <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>You are not in a class yet. Ask your teacher for a code.</p>
        ) : (
          <>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{(classes ?? []).map((c) => c.name).join(' · ')}</p>
            <h3 className="mt-4 text-sm font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>TASKS FROM YOUR TEACHER</h3>
            {list.length === 0 && (sessions ?? []).length === 0 && <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Nothing assigned right now.</p>}
            {list.length > 0 && (
              <div className="mt-2 flex items-center gap-3 text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
                <div className="h-2 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--surface-inset)' }} role="progressbar" aria-valuenow={overall} aria-valuemin={0} aria-valuemax={100} aria-label="Overall progress">
                  <div className="h-full rounded-full" style={{ width: `${overall}%`, background: 'var(--gradient-cta)' }} />
                </div>
                {overall}% of your tasks
              </div>
            )}
            {list.map((a) => {
              const done = isDone(a)
              const prog = progressOf(a)
              const lesson = a.kind === 'lesson'
              const lock = lesson && a.mode !== 'live' ? unlockState(a.unlock_at) : null
              const locked = lock?.state === 'locked'
              const live = lesson && a.mode === 'live'
              const liveNow = live ? (sessions ?? []).find((s) => s.class_id === a.class_id && s.activity_id === physicsLiveId(...(a.ref.split('/') as [string, string]))) : undefined
              const kind = lesson ? (live ? 'DP Physics · live class' : `DP Physics · ${a.scope === 'questions' ? 'questions' : 'lesson'}`) : a.kind === 'paper' ? 'Past paper' : a.kind === 'crit' ? 'Criteria quiz' : 'Topic revision'
              return (
                <div key={a.id} className="mt-2 rounded-[var(--radius-control)] px-3 py-2.5 text-sm" style={{ ...row, opacity: locked ? 0.7 : 1 }}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span>
                      <span className="font-semibold">{locked ? '🔒 ' : ''}{a.title}</span>
                      <span className="ml-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
                        {kind}{lesson ? '' : ` · ${subjectLabel(a.subject)}`}{a.due_at ? ` · due ${new Date(a.due_at).toLocaleDateString()}` : ''}
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      {locked && lock?.state === 'locked' ? (
                        <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>Opens {formatUnlock(lock.unlockAt)}</span>
                      ) : live ? (
                        liveNow ? <Link href={`/design/live/${liveNow.activity_id}?s=${liveNow.code}`} className="font-bold" style={{ color: 'var(--accent)' }}>Join live →</Link> : <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>{a.unlock_at ? `Your teacher will host this ${new Date(a.unlock_at).toLocaleDateString()}` : 'Your teacher will host this live'}</span>
                      ) : (
                        <Link href={lesson ? lessonHref(a.ref, a.scope === 'questions' ? 'questions' : 'lesson') : assignmentHref(a.kind, a.subject, a.ref)} className="font-bold" style={{ color: 'var(--accent)' }}>{done && a.kind === 'paper' ? 'Done ✓ · open' : prog.frac > 0 && lesson ? 'Continue →' : 'Start →'}</Link>
                      )}
                      {(a.kind === 'topic' || a.kind === 'crit') && <MarkDoneButton assignmentId={a.id} userId={userId} done={done} />}
                    </span>
                  </div>
                  {!live && !locked && (
                    <div className="mt-2 flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--surface-inset)' }} role="progressbar" aria-valuenow={Math.round(prog.frac * 100)} aria-valuemin={0} aria-valuemax={100} aria-label={`${a.title} progress`}>
                        <div className="h-full rounded-full" style={{ width: `${Math.round(prog.frac * 100)}%`, background: 'var(--gradient-cta)' }} />
                      </div>
                      {prog.text}
                    </div>
                  )}
                </div>
              )
            })}
            {(sessions ?? []).map((s) => (
              <Link key={s.code} href={`/design/live/${s.activity_id}?s=${s.code}`} className="mt-2 flex items-center justify-between rounded-[var(--radius-control)] px-3 py-2.5 text-sm font-semibold" style={row}>
                <span>{getLiveActivity(s.activity_id)?.icon} {getLiveActivity(s.activity_id)?.title ?? s.activity_id}</span>
                <span style={{ color: 'var(--accent)' }}>{s.status === 'lobby' ? 'Join →' : 'In progress — join →'}</span>
              </Link>
            ))}
          </>
        )}
      </div>
    </section>
  )
}
