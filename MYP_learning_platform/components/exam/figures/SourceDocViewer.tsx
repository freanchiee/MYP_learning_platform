'use client'

import { useState } from 'react'

/**
 * Reusable interactive source-document viewer (I&S artefact).
 * Renders a primary/secondary source extract as a styled document with:
 *  - glossary tooltips (dotted-underline terms → definition on hover),
 *  - click-to-highlight paragraphs (student marks the bit they're analysing),
 *  - an "evaluation lens" that overlays Origin / Purpose / Value / Limitation prompts
 *    (scaffolds Criterion-D source evaluation; the answer is typed in the response box).
 * Theme-aware chrome; light document backing so it reads on the dark Glass theme.
 */
export interface SourceDocData {
  title?: string
  attribution?: string // origin line shown under the title
  kind?: string // e.g. 'Primary source', 'Secondary source', 'News article'
  paragraphs: string[]
  glossary?: Record<string, string>
}

const LENSES: { key: string; label: string; prompt: string; color: string }[] = [
  { key: 'origin', label: 'Origin', prompt: 'Who made it, when and where? Is the author an expert? How recent is it?', color: '#1971c2' },
  { key: 'purpose', label: 'Purpose', prompt: 'Why was it made? Who is the intended audience? To inform, persuade, record…?', color: '#0b7285' },
  { key: 'value', label: 'Value', prompt: 'What does it usefully reveal for this inquiry? What can you learn from it?', color: '#2f9e44' },
  { key: 'limitation', label: 'Limitation', prompt: 'What is missing, biased or unreliable? What can it NOT tell you?', color: '#e8590c' },
]

export default function SourceDocViewer({ data }: { data: SourceDocData }) {
  const [active, setActive] = useState<string | null>(null)
  const [hi, setHi] = useState<Set<number>>(new Set())
  const lens = LENSES.find((l) => l.key === active) ?? null

  const glossary = data.glossary ?? {}
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length)

  return (
    <div className="figure-surface w-full overflow-hidden" style={{ padding: 16, background: '#faf7ef', border: '1px solid #e7dfc9', borderRadius: 'var(--radius-card)' }}>
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          {data.kind && <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#9a7b3f' }}>{data.kind}</span>}
          {data.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#3b2f14' }}>{data.title}</h3>}
        </div>
        <span className="text-[11px] font-mono" style={{ color: '#9a7b3f' }}>interactive source</span>
      </div>
      {data.attribution && <p className="mb-2 text-[11px] italic" style={{ color: '#6b5a2f' }}>{data.attribution}</p>}

      {/* Evaluation lens toggles */}
      <div className="mb-2 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 text-[11px] font-semibold" style={{ color: '#6b5a2f' }}>Evaluate as a source:</span>
        {LENSES.map((l) => {
          const on = active === l.key
          return (
            <button key={l.key} type="button" onClick={() => setActive(on ? null : l.key)}
              className="rounded-full px-2 py-1 text-[11px] font-semibold transition-all"
              style={{ background: on ? l.color : '#fff', color: on ? '#fff' : '#3b2f14', border: `1.5px solid ${l.color}` }}>
              {l.label}
            </button>
          )
        })}
      </div>

      {lens && (
        <div className="mb-2 rounded-lg px-3 py-2 text-[13px]" style={{ background: '#fff', border: `1.5px solid ${lens.color}`, color: '#3b2f14' }}>
          <span className="font-bold" style={{ color: lens.color }}>{lens.label}: </span>{lens.prompt}
        </div>
      )}

      {/* Document body */}
      <div className="rounded-lg p-4 text-[14px] leading-relaxed" style={{ background: '#fffdf7', border: '1px solid #e7dfc9', color: '#2b2410', fontFamily: 'Georgia, "Times New Roman", serif' }}>
        {data.paragraphs.map((para, pi) => (
          <p
            key={pi}
            onClick={() => setHi((s) => { const n = new Set(s); n.has(pi) ? n.delete(pi) : n.add(pi); return n })}
            className="mb-2 cursor-pointer rounded px-1 transition-colors"
            style={{ background: hi.has(pi) ? '#fff3bf' : 'transparent' }}
            title="Click to highlight"
          >
            {renderGlossary(para, terms, glossary)}
          </p>
        ))}
      </div>
      <p className="mt-1.5 text-[11px]" style={{ color: '#9a7b3f' }}>Click a paragraph to highlight it; hover dotted terms for definitions; use the lenses to scaffold your evaluation.</p>
    </div>
  )
}

/** Wrap glossary terms in the paragraph with a dotted-underline tooltip span. */
function renderGlossary(text: string, terms: string[], glossary: Record<string, string>): React.ReactNode {
  if (terms.length === 0) return text
  const re = new RegExp(`(${terms.map(escapeRe).join('|')})`, 'g')
  const parts = text.split(re)
  return parts.map((part, i) =>
    glossary[part] ? (
      <span key={i} title={glossary[part]} style={{ borderBottom: '1.5px dotted #b08900', cursor: 'help', fontWeight: 600 }}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}
function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
