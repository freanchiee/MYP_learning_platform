import Link from 'next/link'
import type { SupabaseClient } from '@supabase/supabase-js'
import { getLiveActivity } from '@/data/design/live/registry'
import { assignmentHref, subjectLabel } from '@/lib/subjects'
import { MarkDoneButton } from '@/components/teacher/ClassActions'

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
        supabase.from('class_assignments').select('id, class_id, kind, subject, ref, title, due_at').in('class_id', ids).order('created_at', { ascending: false }),
      ])
    : [empty, empty, empty]

  const list = assigns ?? []
  const [{ data: myDone }, { data: myAttempts }] = list.length
    ? await Promise.all([
        supabase.from('assignment_progress').select('assignment_id').eq('user_id', userId),
        supabase.from('attempts').select('paper_id').eq('user_id', userId).eq('status', 'completed').in('paper_id', list.filter((a) => a.kind === 'paper').map((a) => a.ref)),
      ])
    : [empty, empty]
  const isDone = (a: { id: string; kind: string; ref: string }) =>
    a.kind === 'paper' ? (myAttempts ?? []).some((t) => t.paper_id === a.ref) : (myDone ?? []).some((d) => d.assignment_id === a.id)

  const row = { border: '1px solid var(--border)', color: 'var(--text)' } as const

  return (
    <section className="mx-auto max-w-6xl px-6 pt-8">
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
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
            {list.map((a) => {
              const done = isDone(a)
              return (
                <div key={a.id} className="mt-2 flex flex-wrap items-center justify-between gap-2 rounded-lg px-3 py-2.5 text-sm" style={row}>
                  <span>
                    <span className="font-semibold">{a.title}</span>
                    <span className="ml-2 text-xs" style={{ color: 'var(--text-subtle)' }}>
                      {a.kind === 'paper' ? 'Past paper' : 'Topic revision'} · {subjectLabel(a.subject)}{a.due_at ? ` · due ${new Date(a.due_at).toLocaleDateString()}` : ''}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <Link href={assignmentHref(a.kind, a.subject, a.ref)} className="font-bold" style={{ color: 'var(--accent)' }}>{done && a.kind === 'paper' ? 'Done ✓ · open' : 'Start →'}</Link>
                    {a.kind === 'topic' && <MarkDoneButton assignmentId={a.id} userId={userId} done={done} />}
                  </span>
                </div>
              )
            })}
            {(sessions ?? []).map((s) => (
              <Link key={s.code} href={`/design/live/${s.activity_id}?s=${s.code}`} className="mt-2 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold" style={row}>
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
