'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { createClassRow } from '@/lib/classes'

export default function CreateClassForm({ dark = false }: { dark?: boolean }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    setBusy(true)
    setError(null)
    const sb = createClient()
    const { data: u } = await sb.auth.getUser()
    if (!u.user) {
      setBusy(false)
      return setError('Please sign in again.')
    }
    const { data, error: err } = await createClassRow(sb, u.user.id, name)
    setBusy(false)
    if (err || !data) return setError(err)
    router.push(`/classes/${data.id}`)
  }

  return (
    <form onSubmit={submit} className="flex flex-wrap gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={80}
        placeholder="New class name, e.g. MYP4 Design A"
        aria-label="Class name"
        className="min-w-[220px] flex-1 rounded-[var(--radius-control)] px-3 py-2.5 text-sm focus:outline-none focus:ring-2"
        style={dark ? { background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.25)', color: '#fff' } : { background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
      />
      <button disabled={busy || !name.trim()} className="rounded-[var(--radius-control)] px-5 py-2.5 text-sm font-bold disabled:opacity-50" style={dark ? { background: '#fff', color: '#160f2a' } : { background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>
        {busy ? 'Creating…' : 'Create class'}
      </button>
      {error && <p className="w-full text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
    </form>
  )
}
