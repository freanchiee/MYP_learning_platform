'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const ghost = { border: '1px solid var(--border-strong)', color: 'var(--text)' } as const
const solid = { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' } as const

export interface LibItem { ref: string; title: string; assigned: boolean }

// The Library tab: assign a past paper or a topic-wise revision set to the class.
export function AssignLibrary({ classId, teacherId, subject, papers, topics, canTopics }: { classId: string; teacherId: string; subject: string; papers: LibItem[]; topics: LibItem[]; canTopics: boolean }) {
  const router = useRouter()
  const [tab, setTab] = useState<'paper' | 'topic'>('paper')
  const [due, setDue] = useState('')
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [q, setQ] = useState('')

  async function assign(kind: 'paper' | 'topic', item: LibItem) {
    setBusy(item.ref)
    setError(null)
    const { error: err } = await createClient().from('class_assignments').insert({
      class_id: classId,
      teacher_id: teacherId,
      kind,
      subject,
      ref: item.ref,
      title: kind === 'paper' ? `${subject[0].toUpperCase()}${subject.slice(1)} · ${item.title}` : item.title,
      due_at: due ? new Date(due).toISOString() : null,
    })
    setBusy(null)
    if (err) return setError(err.message)
    router.refresh()
  }

  const list = (tab === 'paper' ? papers : topics).filter((i) => i.title.toLowerCase().includes(q.toLowerCase()))

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {(['paper', 'topic'] as const).map((k) => (
          <button key={k} onClick={() => setTab(k)} disabled={k === 'topic' && !canTopics} className="rounded-full px-4 py-2 text-sm font-bold disabled:opacity-40" style={tab === k ? solid : ghost}>
            {k === 'paper' ? `Past papers (${papers.length})` : `Topic revision (${topics.length})`}
          </button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="ml-auto rounded-[var(--radius-control)] px-3 py-2 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }} />
        <label className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
          Due (optional)
          <input type="date" value={due} onChange={(e) => setDue(e.target.value)} className="rounded-[var(--radius-control)] px-2 py-1.5 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }} />
        </label>
      </div>
      {error && <p className="mt-3 text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
      <div className="mt-4 grid gap-2">
        {list.length === 0 && <p className="text-sm" style={{ color: 'var(--text-subtle)' }}>Nothing found.</p>}
        {list.map((i) => (
          <div key={i.ref} className="flex items-center justify-between gap-3 rounded-[var(--radius-panel)] px-4 py-3 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border)' }}>
            <span className="font-semibold">{i.title}</span>
            {i.assigned ? (
              <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>ASSIGNED ✓</span>
            ) : (
              <button disabled={busy === i.ref} onClick={() => assign(tab, i)} className="rounded-[var(--radius-control)] px-3 py-1.5 text-xs font-black tracking-wider disabled:opacity-50" style={solid}>
                {busy === i.ref ? '…' : 'ASSIGN'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function DeleteAssignmentButton({ id }: { id: string }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  return (
    <button
      disabled={busy}
      onClick={async () => {
        if (!confirm('Remove this assignment? Students will no longer see it.')) return
        setBusy(true)
        await createClient().from('class_assignments').delete().eq('id', id)
        setBusy(false)
        router.refresh()
      }}
      className="rounded-[var(--radius-control)] px-3 py-1.5 text-xs font-bold disabled:opacity-50"
      style={ghost}
    >
      Remove
    </button>
  )
}

export function RemoveMemberButton({ classId, userId, name }: { classId: string; userId: string; name: string }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  return (
    <button
      disabled={busy}
      onClick={async () => {
        if (!confirm(`Remove ${name || 'this student'} from the class?`)) return
        setBusy(true)
        await createClient().from('class_members').delete().eq('class_id', classId).eq('user_id', userId)
        setBusy(false)
        router.refresh()
      }}
      className="rounded-[var(--radius-control)] px-3 py-1.5 text-xs font-bold disabled:opacity-50"
      style={ghost}
    >
      Remove
    </button>
  )
}

// Student side: mark a topic-revision assignment done (papers are detected from attempts).
export function MarkDoneButton({ assignmentId, userId, done }: { assignmentId: string; userId: string; done: boolean }) {
  const router = useRouter()
  const [busy, setBusy] = useState(false)
  return (
    <button
      disabled={busy}
      onClick={async () => {
        setBusy(true)
        const sb = createClient()
        if (done) await sb.from('assignment_progress').delete().eq('assignment_id', assignmentId).eq('user_id', userId)
        else await sb.from('assignment_progress').insert({ assignment_id: assignmentId, user_id: userId })
        setBusy(false)
        router.refresh()
      }}
      className="rounded-md px-3 py-1 text-xs font-bold disabled:opacity-50"
      style={{ border: '1px solid var(--border-strong)', color: done ? 'var(--text-subtle)' : 'var(--accent)' }}
    >
      {done ? 'Done ✓ (undo)' : 'Mark done'}
    </button>
  )
}
