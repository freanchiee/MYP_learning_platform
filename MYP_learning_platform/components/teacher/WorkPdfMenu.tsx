'use client'

// A student's work as PDFs, in one small menu: each criterion as Checkpoint 1, Checkpoint 2 and all together,
// plus everything in one. Only the criteria the activity actually has are listed (see listPdfScopes).

import { useRef, useState } from 'react'
import { listPdfScopes, scopeDoc, type WorkDoc } from '@/lib/design-live/studentWork'
import { downloadWorkPdf } from '@/lib/design-live/downloadWorkPdf'

export default function WorkPdfMenu({ doc }: { doc: WorkDoc }) {
  const [busy, setBusy] = useState<string | null>(null)
  const ref = useRef<HTMLDetailsElement>(null)
  const options = listPdfScopes(doc)

  // Nothing to choose between: a plain button.
  const pick = async (id: string, scope: Parameters<typeof scopeDoc>[1]) => {
    setBusy(id)
    try { await downloadWorkPdf(scopeDoc(doc, scope)) } finally { setBusy(null); if (ref.current) ref.current.open = false }
  }
  const single = options.length === 1

  const btn = 'rounded-[var(--radius-control)] px-2.5 py-1 text-[10px] font-black tracking-wider disabled:opacity-50'
  const btnStyle = { border: '1px solid var(--border-strong)', color: 'var(--text)', whiteSpace: 'nowrap' as const }
  if (single) {
    return <button className={btn} style={btnStyle} disabled={!!busy} onClick={(e) => { e.preventDefault(); e.stopPropagation(); pick(options[0].id, options[0].scope) }}>{busy ? 'Building…' : '⬇️ Work PDF'}</button>
  }
  return (
    <details ref={ref} className="relative inline-block" onClick={(e) => e.stopPropagation()}>
      <summary className={`${btn} cursor-pointer list-none`} style={btnStyle} onClick={(e) => e.stopPropagation()}>⬇️ Work PDF ▾</summary>
      <div className="absolute right-0 z-40 mt-1 grid w-64 gap-1 rounded-[var(--radius-card)] p-2" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card-hover)' }}>
        {options.map((o) => (
          <button
            key={o.id}
            disabled={!!busy}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); pick(o.id, o.scope) }}
            className="rounded-[var(--radius-control)] px-2.5 py-1.5 text-left text-xs font-bold disabled:opacity-50"
            style={{ color: 'var(--text)', background: o.kind === 'checkpoint' ? 'transparent' : 'var(--surface-2)' }}
          >
            {busy === o.id ? 'Building…' : o.label}
            {o.detail && <span className="ml-1.5 font-semibold" style={{ color: 'var(--text-subtle)' }}>{o.detail}</span>}
          </button>
        ))}
      </div>
    </details>
  )
}
