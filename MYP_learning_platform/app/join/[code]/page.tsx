'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

// The page a teacher's invite link opens. Signed-out visitors are sent to sign
// in (which also creates an account) and brought straight back here.
export default function JoinByLinkPage() {
  const params = useParams<{ code: string }>()
  const router = useRouter()
  const code = String(params?.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6)

  const [ready, setReady] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [joined, setJoined] = useState<string | null>(null)

  useEffect(() => {
    createClient().auth.getUser().then(({ data }) => {
      if (!data.user) router.replace(`/login?next=${encodeURIComponent(`/join/${code}`)}`)
      else setReady(true)
    })
  }, [router, code])

  async function join() {
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
    if (err) return setError(err.message.includes('No class') ? 'This invite link does not match a class. Ask your teacher for a new one.' : err.message)
    const row = Array.isArray(data) ? data[0] : data
    setJoined(row?.name ?? 'your class')
  }

  if (!ready) return null

  return (
    <div className="flex min-h-screen items-center justify-center px-5" style={{ background: 'var(--bg)' }}>
      <div className="w-full max-w-md rounded-[var(--radius-card)] p-8 text-center shadow-2xl" style={{ background: 'var(--surface)' }}>
        <div className="text-5xl">🎒</div>
        {joined ? (
          <>
            <h1 className="mt-3 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>You joined {joined} ✅</h1>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Tasks from your teacher will appear on your dashboard.</p>
            <Link href="/dashboard" className="mt-5 inline-block rounded-[var(--radius-control)] px-6 py-3 text-sm font-bold" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>Go to my dashboard →</Link>
          </>
        ) : (
          <>
            <h1 className="mt-3 text-2xl font-extrabold" style={{ color: 'var(--text)' }}>You have been invited to a class</h1>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Class code <b style={{ color: 'var(--text)', letterSpacing: '0.2em' }}>{code}</b></p>
            {error && <p className="mt-4 text-sm" style={{ color: 'var(--danger)' }}>{error}</p>}
            <button onClick={join} disabled={busy || code.length < 6} className="mt-5 w-full rounded-[var(--radius-control)] py-3 text-sm font-bold disabled:opacity-50" style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}>
              {busy ? 'Joining…' : 'Join this class'}
            </button>
            <Link href="/dashboard" className="mt-3 block text-sm" style={{ color: 'var(--text-subtle)' }}>Not now</Link>
          </>
        )}
      </div>
    </div>
  )
}
