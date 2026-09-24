'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function JoinClassPage() {
  const [code, setCode] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [joined, setJoined] = useState<string | null>(null)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const sb = createClient()
    const { data: u } = await sb.auth.getUser()
    let name = ''
    if (u.user) {
      const { data: p } = await sb.from('profiles').select('name').eq('id', u.user.id).maybeSingle()
      name = p?.name || u.user.email?.split('@')[0] || ''
    }
    const { data, error: err } = await sb.rpc('join_class', { p_code: code, p_name: name })
    setBusy(false)
    if (err) return setError(err.message.includes('No class') ? 'No class with that code — check it and try again.' : err.message)
    const row = Array.isArray(data) ? data[0] : data
    setJoined(row?.name ?? 'your class')
  }

  return (
    <div className="mx-auto max-w-md px-5 py-14">
      <h1 className="text-3xl font-extrabold" style={{ color: 'var(--text)' }}>Join a class</h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Ask your teacher for the class code.</p>
      {joined ? (
        <div className="mt-6 rounded-2xl p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
          <div className="text-lg font-extrabold" style={{ color: 'var(--text)' }}>You joined {joined} ✅</div>
          <Link href="/dashboard" className="mt-3 inline-block text-sm font-bold" style={{ color: 'var(--accent)' }}>Go to my dashboard →</Link>
        </div>
      ) : (
        <form onSubmit={submit} className="mt-6 space-y-3">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            maxLength={6}
            required
            placeholder="ABC123"
            aria-label="Class code"
            className="w-full rounded-lg px-4 py-3 text-center text-2xl font-extrabold tracking-[0.3em] focus:outline-none focus:ring-2"
            style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
          />
          {error && <p className="text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
          <button disabled={busy || code.length < 6} className="w-full rounded-lg py-3 text-sm font-bold disabled:opacity-50" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>
            {busy ? 'Joining…' : 'Join class'}
          </button>
          <Link href="/dashboard" className="block text-center text-sm" style={{ color: 'var(--text-subtle)' }}>Skip for now</Link>
        </form>
      )}
    </div>
  )
}
