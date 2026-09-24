'use client'

import { useMemo, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { ALL_INTERESTS, INTEREST_ROLES, INTEREST_STATUSES, type InterestLead, type InterestStatus } from '@/lib/interests'

const roleLabel = (v: string) => INTEREST_ROLES.find((r) => r.value === v)?.label ?? v

function mailto(lead: InterestLead): string {
  const subject = 'Thanks for your interest in CritABCD'
  const body = `Hi${lead.name ? ` ${lead.name}` : ''},\n\nThanks for signing up — you asked about: ${lead.interests.join(', ')}.\n\n`
  return `mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function InterestTable({ initial }: { initial: InterestLead[] }) {
  const [leads, setLeads] = useState(initial)
  const [statusFilter, setStatusFilter] = useState<InterestStatus | 'all'>('all')
  const [interestFilter, setInterestFilter] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const demand = useMemo(() => {
    const c: Record<string, number> = {}
    ALL_INTERESTS.forEach((i) => (c[i] = 0))
    leads.forEach((l) => l.interests.forEach((i) => (c[i] = (c[i] ?? 0) + 1)))
    return Object.entries(c).sort((a, b) => b[1] - a[1])
  }, [leads])

  const statusCounts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length }
    INTEREST_STATUSES.forEach((s) => (c[s] = leads.filter((l) => l.status === s).length))
    return c
  }, [leads])

  const shown = leads.filter((l) => (statusFilter === 'all' || l.status === statusFilter) && (!interestFilter || l.interests.includes(interestFilter)))

  const patch = async (id: string, change: Partial<Pick<InterestLead, 'status' | 'admin_note'>>) => {
    setError(null)
    const before = leads
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, ...change } : l)))
    const { error: err } = await createClient().from('interest_leads').update(change).eq('id', id)
    if (err) {
      setLeads(before)
      setError(`Could not save that change: ${err.message}`)
    }
  }

  const remove = async (lead: InterestLead) => {
    if (!window.confirm(`Permanently delete the sign-up from ${lead.email}? This cannot be undone.`)) return
    setError(null)
    const { error: err } = await createClient().from('interest_leads').delete().eq('id', lead.id)
    if (err) setError(`Could not delete: ${err.message}`)
    else setLeads((ls) => ls.filter((l) => l.id !== lead.id))
  }

  const pill = (active: boolean) => ({
    border: '1px solid var(--border)',
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? 'var(--text-on-accent)' : 'var(--text)',
  })

  return (
    <div className="mt-6">
      {/* Demand: how many sign-ups ticked each subject / experience. Click one to filter. */}
      <div className="text-xs font-black tracking-widest" style={{ color: 'var(--text-subtle)' }}>DEMAND — WHAT PEOPLE TICKED</div>
      <div className="mt-2 flex flex-wrap gap-2">
        {demand.map(([interest, n]) => (
          <button
            key={interest}
            onClick={() => setInterestFilter(interestFilter === interest ? null : interest)}
            className="rounded-full px-3.5 py-1.5 text-xs font-bold"
            style={pill(interestFilter === interest)}
            title={interestFilter === interest ? 'Click to clear this filter' : 'Click to show only these sign-ups'}
          >
            {interest} · {n}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {(['all', ...INTEREST_STATUSES] as const).map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)} className="rounded-full px-3.5 py-1.5 text-xs font-bold" style={pill(statusFilter === s)}>
            {s === 'all' ? 'All' : s[0].toUpperCase() + s.slice(1)} · {statusCounts[s] ?? 0}
          </button>
        ))}
      </div>

      {error && (
        <div className="mt-4 rounded-lg p-3 text-sm" role="alert" style={{ background: 'var(--danger-surface)', color: 'var(--danger)' }}>{error}</div>
      )}

      {!shown.length ? (
        <div className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>{leads.length ? 'Nothing matches these filters.' : 'No sign-ups yet.'}</div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)', background: 'var(--surface-elevated)' }}>
          <table className="w-full text-left text-sm" style={{ borderCollapse: 'collapse', minWidth: 900 }}>
            <thead>
              <tr style={{ color: 'var(--text-subtle)' }}>
                {['Received', 'Who', 'Interested in', 'From page', 'Status', 'Note', ''].map((h) => (
                  <th key={h} className="px-3 py-2.5 text-xs font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {shown.map((l) => (
                <tr key={l.id} style={{ borderTop: '1px solid var(--border)', verticalAlign: 'top', color: 'var(--text)' }}>
                  <td className="px-3 py-3 whitespace-nowrap text-xs" style={{ color: 'var(--text-muted)' }}>
                    {new Date(l.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-3 py-3">
                    {l.name && <div className="font-bold">{l.name}</div>}
                    <a href={mailto(l)} className="text-xs underline" style={{ color: 'var(--accent)' }}>{l.email}</a>
                    <div className="mt-0.5 text-xs" style={{ color: 'var(--text-muted)' }}>{roleLabel(l.role)}</div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-1">
                      {l.interests.map((i) => (
                        <span key={i} className="rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}>{i}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-xs" style={{ color: 'var(--text-muted)', overflowWrap: 'anywhere' }}>{l.source_page || '—'}</td>
                  <td className="px-3 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => patch(l.id, { status: e.target.value as InterestStatus })}
                      className="rounded-md px-2 py-1 text-xs font-semibold"
                      style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
                    >
                      {INTEREST_STATUSES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-3">
                    <textarea
                      defaultValue={l.admin_note ?? ''}
                      maxLength={2000}
                      rows={2}
                      placeholder="Private note"
                      onBlur={(e) => {
                        const next = e.target.value.trim()
                        if (next !== (l.admin_note ?? '')) patch(l.id, { admin_note: next || null })
                      }}
                      className="w-44 rounded-md px-2 py-1 text-xs"
                      style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <button onClick={() => remove(l)} className="text-xs font-bold" style={{ color: 'var(--danger)' }} title="Delete permanently">
                      Delete
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
