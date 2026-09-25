'use client'
import { useState } from 'react'
import type { ResolvedExemplars } from '@/lib/design-live/exemplars'

const small = { cursor: 'pointer', fontSize: 11.5, fontWeight: 800, borderRadius: 999, padding: '3px 11px' } as const

/** Teacher, inside a student's review: preview the model answer that would be shown, and reveal / hide it for THIS student. */
export function ExemplarControls({ resolved, noun, studentName, revealed, onToggle, busy, defaultOpen }: { resolved: ResolvedExemplars; noun?: string; studentName: string; revealed: boolean; onToggle: () => void; busy?: boolean; defaultOpen?: boolean }) {
  const [preview, setPreview] = useState(!!defaultOpen)
  if (!resolved.texts.length) return null
  const first = studentName.split(' ')[0]
  return (
    <div style={{ display: 'grid', gap: 6, borderLeft: revealed ? '3px solid #1FA98A' : '3px solid var(--border)', paddingLeft: 10 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
        <button onClick={() => setPreview(!preview)} aria-expanded={preview} style={{ ...small, border: '1.5px solid var(--border-strong)', background: 'var(--surface-2)', color: 'var(--text)' }}>
          {preview ? 'Hide preview' : '👀 Preview exemplar'}
        </button>
        <button
          onClick={onToggle}
          disabled={busy}
          aria-pressed={revealed}
          style={{ ...small, border: `1.5px solid ${revealed ? '#1FA98A' : 'var(--text)'}`, background: revealed ? '#1FA98A' : 'var(--surface)', color: revealed ? '#fff' : 'var(--text)', opacity: busy ? 0.6 : 1 }}
        >
          {revealed ? `✅ Revealed to ${first} · tap to hide` : `📤 Reveal to ${first}`}
        </button>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: resolved.specific ? '#1FA98A' : 'var(--text-subtle)' }}>
          {resolved.specific ? `written for ${noun ?? 'choice'}: ${resolved.choice}` : resolved.choice ? `general example (none written for ${resolved.choice})` : `general example (${first} has not chosen a ${noun ?? 'option'} yet)`}
        </span>
      </div>
      {preview && (
        <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc', fontSize: 12, color: 'var(--text)', display: 'grid', gap: 4, background: 'var(--surface-2)', borderRadius: 8, padding: '8px 8px 8px 24px' }}>
          {resolved.texts.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
    </div>
  )
}

/** Student, under a field the teacher has revealed the exemplar for. */
export function StudentExemplarCard({ resolved, noun }: { resolved: ResolvedExemplars; noun?: string }) {
  if (!resolved.texts.length) return null
  return (
    <div role="note" style={{ border: '2px solid #1FA98A', background: 'var(--surface-2)', borderRadius: 'var(--radius-panel)', padding: '10px 12px', display: 'grid', gap: 6 }}>
      <div style={{ fontWeight: 900, fontSize: 12.5 }}>
        💡 Your teacher shared an example answer{resolved.specific && resolved.choice ? ` for your ${noun ?? 'choice'}: ${resolved.choice}` : ''}
      </div>
      <ul style={{ margin: 0, paddingLeft: 18, listStyle: 'disc', fontSize: 12.5, display: 'grid', gap: 5 }}>
        {resolved.texts.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <div style={{ fontSize: 11.5, color: 'var(--text-muted)' }}>Use it as a guide to what strong looks like. Your answer must still come from your own research and your own words.</div>
    </div>
  )
}
