'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export interface ProAccount {
  id: string
  email: string | null
  name: string | null
  role: string | null
  granted_at: string | null
}

export default function AccessManager({ initial }: { initial: ProAccount[] }) {
  const [accounts, setAccounts] = useState(initial)
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null)

  const grant = async () => {
    const trimmed = email.trim()
    if (!trimmed) return
    setBusy(true)
    setMessage(null)
    const sb = createClient()
    const { data, error } = await sb.rpc('admin_set_plan_by_email', { p_email: trimmed, p_plan: 'pro' })
    setBusy(false)
    if (error) return setMessage({ text: error.message, ok: false })
    const row = Array.isArray(data) ? data[0] : data
    if (!row?.found) return setMessage({ text: `No account found for ${trimmed} — they need to have signed in at least once.`, ok: false })
    setMessage({ text: `✓ ${trimmed} now has full access.`, ok: true })
    setEmail('')
    // Refetch the list so it reflects the real row (name/role as stored).
    const { data: list } = await sb.rpc('admin_list_pro_accounts')
    setAccounts((list ?? []) as ProAccount[])
  }

  const revoke = async (acc: ProAccount) => {
    if (!window.confirm(`Remove full access from ${acc.email ?? acc.id}?`)) return
    setBusy(true)
    setMessage(null)
    const sb = createClient()
    const { error } = await sb.rpc('admin_set_plan_by_email', { p_email: acc.email, p_plan: 'free' })
    setBusy(false)
    if (error) return setMessage({ text: error.message, ok: false })
    setAccounts((list) => list.filter((a) => a.id !== acc.id))
    setMessage({ text: `Revoked full access from ${acc.email}.`, ok: true })
  }

  return (
    <div className="mt-6">
      <div className="rounded-2xl p-5" style={{ border: '1px solid var(--border)', background: 'var(--surface-elevated)' }}>
        <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>GRANT BY EMAIL</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && grant()}
            placeholder="student-or-teacher@email.com"
            type="email"
            className="flex-1 min-w-[220px] rounded-md px-3 py-2 text-sm"
            style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
          />
          <button
            onClick={grant}
            disabled={busy || !email.trim()}
            className="rounded-[var(--radius-control)] px-4 py-2 text-xs font-black tracking-wider disabled:opacity-50"
            style={{ background: 'var(--gradient-cta)', color: 'var(--text-on-accent)' }}
          >
            {busy ? '…' : 'GRANT FULL ACCESS'}
          </button>
        </div>
        <p className="mt-2 text-xs" style={{ color: 'var(--text-subtle)' }}>They must have signed in to CritABCD at least once — this looks up their existing account by email.</p>
        {message && (
          <div className="mt-3 rounded-lg p-3 text-sm" style={{ background: message.ok ? 'var(--success-surface)' : 'var(--danger-surface)', color: message.ok ? 'var(--success)' : 'var(--danger)' }}>
            {message.text}
          </div>
        )}
      </div>

      <div className="mt-6 text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>CURRENTLY HAVE FULL ACCESS ({accounts.length})</div>
      {accounts.length === 0 ? (
        <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>Nobody's been granted full access manually yet.</p>
      ) : (
        <div className="mt-3 overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)', background: 'var(--surface-elevated)' }}>
          <table className="w-full text-left text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ color: 'var(--text-subtle)' }}>
                {['Email', 'Name', 'Role', 'Updated', ''].map((h) => (
                  <th key={h} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {accounts.map((a) => (
                <tr key={a.id} style={{ borderTop: '1px solid var(--border)', color: 'var(--text)' }}>
                  <td className="px-3 py-3 font-semibold">{a.email}</td>
                  <td className="px-3 py-3">{a.name || '—'}</td>
                  <td className="px-3 py-3 text-xs" style={{ color: 'var(--text-muted)' }}>{a.role || '—'}</td>
                  <td className="px-3 py-3 text-xs" style={{ color: 'var(--text-muted)' }}>{a.granted_at ? new Date(a.granted_at).toLocaleDateString() : '—'}</td>
                  <td className="px-3 py-3">
                    <button onClick={() => revoke(a)} disabled={busy} className="text-xs font-bold disabled:opacity-50" style={{ color: 'var(--danger)' }}>
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
