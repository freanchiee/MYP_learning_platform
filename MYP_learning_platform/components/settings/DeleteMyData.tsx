'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

/** A student can delete their own account and everything they did in classes. Needs the word DELETE typed, and is
 *  refused by the server for teacher accounts (see app/api/account/delete/route.ts). */
export default function DeleteMyData() {
  const [open, setOpen] = useState(false)
  const [word, setWord] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const run = async () => {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch('/api/account/delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ confirm: word }) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) { setError(data.error || 'Could not delete just now.'); setBusy(false); return }
      await createClient().auth.signOut().catch(() => {})
      window.location.href = '/'
    } catch {
      setError('Could not reach the server. Nothing was removed.')
      setBusy(false)
    }
  }

  return (
    <div>
      <p className="text-[9px] font-black tracking-[0.3em] mb-2" style={{ color: 'var(--text-subtle)' }}>YOUR DATA</p>
      <h2 className="text-2xl font-extrabold mb-1" style={{ color: 'var(--text)', letterSpacing: '-0.4px' }}>Delete my data</h2>
      <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
        You can delete your account and everything you did in classes: your answers, grades, messages with your teacher, uploaded photos and progress. It is removed straight away and cannot be undone. Your teacher keeps nothing of yours. See the <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy policy</a>.
      </p>
      <div className="rounded-card p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
        {!open ? (
          <button onClick={() => setOpen(true)} className="rounded-lg px-4 py-2 text-sm font-bold" style={{ border: '1.5px solid #D6425E', color: '#D6425E', background: 'transparent' }}>
            Delete my account and data…
          </button>
        ) : (
          <div className="grid gap-3">
            <label className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
              Type <strong>DELETE</strong> to confirm
              <input value={word} onChange={(e) => setWord(e.target.value)} className="mt-1 w-full rounded-lg px-3 py-2 text-sm" style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }} autoComplete="off" />
            </label>
            {error && <div role="alert" className="text-sm font-semibold" style={{ color: '#D6425E' }}>{error}</div>}
            <div className="flex gap-2">
              <button onClick={run} disabled={busy || word !== 'DELETE'} className="rounded-lg px-4 py-2 text-sm font-bold" style={{ background: '#D6425E', color: '#fff', opacity: busy || word !== 'DELETE' ? 0.5 : 1 }}>
                {busy ? 'Deleting…' : 'Delete everything'}
              </button>
              <button onClick={() => { setOpen(false); setWord(''); setError(null) }} disabled={busy} className="rounded-lg px-4 py-2 text-sm font-bold" style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
