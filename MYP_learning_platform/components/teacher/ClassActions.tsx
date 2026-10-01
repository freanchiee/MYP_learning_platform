'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { hostStorageKey } from '@/lib/design-live/hooks'

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

// Manage class: permanently delete the class itself. Students, assignments and
// progress tied to it are gone too (the DB cascades them) — but any live
// sessions that were ever run for it are NOT deleted, just unassigned (their
// class_id is set null by the DB), so a teacher's "My Live Class History"
// still has everything. Typing the class name is the confirmation, same
// weight as the destructive actions elsewhere in the app.
export function DeleteClassButton({ classId, className }: { classId: string; className: string }) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [typed, setTyped] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-wider" style={{ border: '1.5px solid var(--danger, #D6425E)', color: 'var(--danger, #D6425E)' }}>
        🗑️ Delete this class
      </button>
    )
  }

  return (
    <div className="rounded-[var(--radius-card)] p-4" style={{ border: '1.5px solid var(--danger, #D6425E)', background: 'var(--surface-inset)' }}>
      <div className="text-sm font-bold" style={{ color: 'var(--danger, #D6425E)' }}>This permanently deletes &quot;{className}&quot;</div>
      <p className="mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
        Every student is removed from it and all its assignments go with it. Live sessions you&apos;ve hosted for it are kept (still in your live-class history), just no longer attached to this class. This cannot be undone.
      </p>
      <label className="mt-3 block text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
        Type <b>{className}</b> to confirm
        <input value={typed} onChange={(e) => setTyped(e.target.value)} className="mt-1 w-full rounded-[var(--radius-control)] px-3 py-2 text-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', color: 'var(--text)' }} />
      </label>
      {error && <p className="mt-2 text-xs" style={{ color: 'var(--danger, #D6425E)' }}>{error}</p>}
      <div className="mt-3 flex gap-2">
        <button
          disabled={busy || typed !== className}
          onClick={async () => {
            setBusy(true)
            setError(null)
            const { error: err } = await createClient().from('classes').delete().eq('id', classId)
            setBusy(false)
            if (err) return setError(err.message)
            router.push('/dashboard')
          }}
          className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-wider disabled:opacity-40"
          style={{ background: 'var(--danger, #D6425E)', color: '#fff' }}
        >
          {busy ? 'Deleting…' : 'Delete permanently'}
        </button>
        <button onClick={() => { setOpen(false); setTyped(''); setError(null) }} className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-bold" style={ghost}>
          Cancel
        </button>
      </div>
    </div>
  )
}

// Live sessions History: jump straight into that exact past session's host
// dashboard (same "remember which code to reopen" trick as My Live Class
// History / the class dashboard card). Disabled if the activity it was built
// from no longer exists in the registry.
export function ReopenSessionButton({ activityId, code, activityExists }: { activityId: string; code: string; activityExists: boolean }) {
  const router = useRouter()
  return (
    <button
      disabled={!activityExists}
      title={activityExists ? undefined : 'This activity no longer exists'}
      onClick={() => {
        localStorage.setItem(hostStorageKey(activityId), code)
        router.push(`/design/live/${activityId}?host=1`)
      }}
      className="rounded-[var(--radius-control)] px-3 py-1.5 text-xs font-black tracking-wider disabled:cursor-not-allowed disabled:opacity-40"
      style={solid}
    >
      Open dashboard →
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
