'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export interface AssignableSession { code: string; title: string; status: string; date: string; assigned: boolean }

// On a class page: attach one of your other live sessions to this class, or
// take an assigned one off it. Same rule as the host lobby picker.
export default function AssignSessions({ classId, sessions }: { classId: string; sessions: AssignableSession[] }) {
  const router = useRouter()
  const [busy, setBusy] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function set(code: string, id: string | null) {
    setBusy(code)
    setError(null)
    const { error: err } = await createClient().from('live_sessions').update({ class_id: id }).eq('code', code)
    setBusy(null)
    if (err) return setError(err.message)
    router.refresh()
  }

  if (sessions.length === 0) return <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>You have no other live sessions to assign yet.</p>

  return (
    <div className="mt-3 grid gap-2">
      {sessions.map((s) => (
        <div key={s.code} className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
          <span>{s.title} · <span style={{ color: 'var(--text-subtle)' }}>{s.date} · {s.status}</span></span>
          <button
            disabled={busy === s.code}
            onClick={() => set(s.code, s.assigned ? null : classId)}
            className="rounded-md px-3 py-1 text-xs font-bold disabled:opacity-50"
            style={{ border: '1px solid var(--border-strong)', color: 'var(--accent)' }}
          >
            {s.assigned ? 'Remove from class' : 'Assign to this class'}
          </button>
        </div>
      ))}
      {error && <p className="text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
    </div>
  )
}
