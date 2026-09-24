'use client'

import { useMemo, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { LEAD_STATUSES, SUBMITTED_BY_OPTIONS, type LeadStatus, type TutoringLead } from '@/lib/tutoring'

const submittedByLabel = (v: string) => SUBMITTED_BY_OPTIONS.find((o) => o.value === v)?.label ?? v

function mailto(lead: TutoringLead): string {
  const subject = `Re: your ${lead.subject} tutoring enquiry`
  const body = `Hi ${lead.name},\n\nThanks for getting in touch about ${lead.subject}${lead.level ? ` (${lead.level})` : ''}.\n\n`
  return `mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function LeadsTable({ initial }: { initial: TutoringLead[] }) {
  const [leads, setLeads] = useState(initial)
  const [filter, setFilter] = useState<LeadStatus | 'all'>('all')
  const [error, setError] = useState<string | null>(null)

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length }
    LEAD_STATUSES.forEach((s) => (c[s] = leads.filter((l) => l.status === s).length))
    return c
  }, [leads])

  const shown = filter === 'all' ? leads : leads.filter((l) => l.status === filter)

  const patch = async (id: string, change: Partial<Pick<TutoringLead, 'status' | 'admin_note'>>) => {
    setError(null)
    const before = leads
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, ...change } : l)))
    const { error: err } = await createClient().from('tutoring_leads').update(change).eq('id', id)
    if (err) {
      setLeads(before)
      setError(`Could not save that change: ${err.message}`)
    }
  }

  const remove = async (lead: TutoringLead) => {
    if (!window.confirm(`Permanently delete the lead from ${lead.name}? This cannot be undone.`)) return
    setError(null)
    const { error: err } = await createClient().from('tutoring_leads').delete().eq('id', lead.id)
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
      <div className="flex flex-wrap gap-2">
        {(['all', ...LEAD_STATUSES] as const).map((s) => (
          <button key={s} onClick={() => setFilter(s)} className="rounded-full px-3.5 py-1.5 text-xs font-bold" style={pill(filter === s)}>
            {s === 'all' ? 'All' : s[0].toUpperCase() + s.slice(1)} · {counts[s] ?? 0}
          </button>
        ))}
      </div>

      {error && (
        <div className="mt-4 rounded-lg p-3 text-sm" role="alert" style={{ background: 'var(--danger-surface)', color: 'var(--danger)' }}>{error}</div>
      )}

      {!shown.length ? (
        <div className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>No leads {filter === 'all' ? 'yet' : `marked “${filter}”`}.</div>
      ) : (
        <div className="mt-4 overflow-x-auto rounded-2xl" style={{ border: '1px solid var(--border)', background: 'var(--surface-elevated)' }}>
          <table className="w-full text-left text-sm" style={{ borderCollapse: 'collapse', minWidth: 900 }}>
            <thead>
              <tr style={{ color: 'var(--text-subtle)' }}>
                {['Received', 'Who', 'Wants', 'Message', 'Status', 'Note', ''].map((h) => (
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
                    <div className="font-bold">{l.name}</div>
                    <a href={mailto(l)} className="text-xs underline" style={{ color: 'var(--accent)' }}>{l.email}</a>
                    <div className="mt-0.5 text-xs" style={{ color: 'var(--text-muted)' }}>{submittedByLabel(l.submitted_by)}</div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="font-semibold">{l.subject}</div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{[l.level, l.exam_board].filter(Boolean).join(' · ') || '—'}</div>
                  </td>
                  <td className="px-3 py-3" style={{ maxWidth: 280, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>{l.message || <span style={{ color: 'var(--text-subtle)' }}>—</span>}</td>
                  <td className="px-3 py-3">
                    <select
                      value={l.status}
                      onChange={(e) => patch(l.id, { status: e.target.value as LeadStatus })}
                      className="rounded-md px-2 py-1 text-xs font-semibold"
                      style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-strong)', color: 'var(--text)' }}
                    >
                      {LEAD_STATUSES.map((s) => (
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
