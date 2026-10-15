'use client'

import { useEffect, useMemo, useRef, useState, type ChangeEvent, type ClipboardEvent, type DragEvent, type FormEvent } from 'react'
import type { AnswerLevel, WorksheetField } from '@/data/design/live/types'
import { estimateLevel, HINT_UNLOCK_SCORE, isSuspiciousInsert, resolveCoach, SCAFFOLD_COST, type CoachHit } from '@/lib/design-live/answerFeedback'
import { onSemanticStatus, semanticSimilarity, semanticStatus, type SemanticStatus } from '@/lib/design-live/semantic'
import { btnStyle, inputStyle } from './ui'

/** Colours for the three levels of thinking. Shared by the highlight, the chips and the meter. */
const LEVEL_STYLE: Record<AnswerLevel, { bg: string; line: string; label: string }> = {
  basic: { bg: 'rgba(130,130,140,0.28)', line: '#8A8A94', label: 'names it' },
  developed: { bg: 'rgba(56,132,255,0.24)', line: '#3884FF', label: 'explains why' },
  justified: { bg: 'rgba(31,169,138,0.30)', line: '#1FA98A', label: 'links cause, effect and stake' },
}

const PASTE_MESSAGE = 'Pasting is switched off here. Type it in your own words, so what you learn is yours.'

/** Handlers that refuse pasted or dropped text, and a guard for a change that grew by more than anyone types in one go. */
export function noPasteHandlers(notify: (msg: string) => void) {
  return {
    onPaste: (e: ClipboardEvent<HTMLElement>) => { e.preventDefault(); notify(PASTE_MESSAGE) },
    onDrop: (e: DragEvent<HTMLElement>) => { e.preventDefault(); notify(PASTE_MESSAGE) },
    onBeforeInput: (e: FormEvent<HTMLElement>) => {
      const t = (e.nativeEvent as InputEvent).inputType || ''
      if (t === 'insertFromPaste' || t === 'insertFromDrop' || t === 'insertFromYank' || t === 'insertFromPasteAsQuotation') { e.preventDefault(); notify(PASTE_MESSAGE) }
    },
  }
}

/** Returns an onChange that drops a sudden large insert (autofill or a clipboard keyboard) instead of accepting it. */
export function guardedChange(current: string, apply: (v: string) => void, notify: (msg: string) => void) {
  return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = e.target.value
    if (isSuspiciousInsert(current, next)) { notify(PASTE_MESSAGE); return }
    apply(next)
  }
}

export function useNotice(): [string | null, (m: string) => void] {
  const [msg, setMsg] = useState<string | null>(null)
  const t = useRef<ReturnType<typeof setTimeout> | null>(null)
  const show = (m: string) => {
    setMsg(m)
    if (t.current) clearTimeout(t.current)
    t.current = setTimeout(() => setMsg(null), 3500)
  }
  useEffect(() => () => { if (t.current) clearTimeout(t.current) }, [])
  return [msg, show]
}

function segments(text: string, hits: CoachHit[]) {
  const out: { text: string; level?: AnswerLevel }[] = []
  let at = 0
  for (const h of hits) {
    if (h.from < at) continue
    if (h.from > at) out.push({ text: text.slice(at, h.from) })
    out.push({ text: text.slice(h.from, h.to), level: h.level })
    at = h.to
  }
  if (at < text.length) out.push({ text: text.slice(at) })
  return out
}

/**
 * A text box that coaches while the student types:
 *  - words and phrases that show good thinking are highlighted in colour (and listed as chips, hits only);
 *  - a level meter shows where the answer sits, with a smart check that understands meaning and forgives typos;
 *  - hints unlock at level 5; a scaffold unlocks for a few points. Pasting is blocked.
 * Nothing shows what is missing, so the keyword list cannot be read off the screen and stuffed in.
 */
export default function AnswerCoach({
  field,
  value,
  onChange,
  points,
  scaffoldOpen,
  onUnlockScaffold,
}: {
  field: WorksheetField
  value: string
  onChange: (v: string) => void
  points: number
  scaffoldOpen: boolean
  onUnlockScaffold: () => void
}) {
  const coach = resolveCoach(field)!
  const [sem, setSem] = useState<number | null>(null)
  const [status, setStatus] = useState<SemanticStatus>(semanticStatus())
  const [notice, notify] = useNotice()
  const [hintCount, setHintCount] = useState(0)
  const [confirming, setConfirming] = useState(false)
  const taRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => onSemanticStatus(setStatus), [])

  // Ask the on-device model how close the meaning is to a model answer, a moment after typing stops.
  useEffect(() => {
    const refs = field.exemplars ?? []
    if (!refs.length || value.trim().split(/\s+/).length < 6) { setSem(null); return undefined }
    let live = true
    const timer = setTimeout(async () => {
      const s = await semanticSimilarity(value, refs)
      if (live) setSem(s)
    }, 700)
    return () => { live = false; clearTimeout(timer) }
  }, [value, field.exemplars])

  const result = useMemo(() => estimateLevel(value, field, sem), [value, field, sem])
  const parts = useMemo(() => segments(value, result.hits), [value, result.hits])

  // Grow the box with its text so the highlight layer behind it always lines up.
  useEffect(() => {
    const el = taRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.max(100, el.scrollHeight)}px`
  }, [value])

  const guards = noPasteHandlers(notify)
  const hints = coach.hints ?? []
  const hintsOpen = result.score >= HINT_UNLOCK_SCORE
  const canAfford = points >= SCAFFOLD_COST
  const font = { fontSize: 14, lineHeight: '1.45', fontFamily: 'inherit' } as const

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <label style={{ display: 'grid', gap: 4, fontSize: 12, fontWeight: 700, color: 'var(--text-muted)' }}>
        {field.label}
        {field.hint && <span style={{ fontWeight: 400, fontSize: 11 }}>{field.hint}</span>}
        <div style={{ position: 'relative', border: '2px solid var(--border)', borderRadius: 8, background: 'var(--surface)' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, padding: '10px 12px', ...font, whiteSpace: 'pre-wrap', overflowWrap: 'break-word', color: 'transparent', pointerEvents: 'none', overflow: 'hidden' }}>
            {parts.map((p, i) =>
              p.level ? (
                <mark key={i} style={{ background: LEVEL_STYLE[p.level].bg, borderBottom: `2px solid ${LEVEL_STYLE[p.level].line}`, color: 'transparent', borderRadius: 3 }}>{p.text}</mark>
              ) : (
                <span key={i}>{p.text}</span>
              )
            )}
            {'​'}
          </div>
          <textarea
            ref={taRef}
            value={value}
            placeholder={field.placeholder}
            onChange={guardedChange(value, onChange, notify)}
            {...guards}
            spellCheck
            style={{ ...inputStyle, ...font, position: 'relative', border: 'none', background: 'transparent', minHeight: 100, resize: 'none', overflow: 'hidden', display: 'block' }}
          />
        </div>
      </label>

      {notice && <div role="status" style={{ fontSize: 11.5, fontWeight: 700, color: '#D6425E' }}>🚫 {notice}</div>}

      {/* Level meter: four bands, filled up to where the answer sits. */}
      <div style={{ display: 'grid', gap: 4 }}>
        <div style={{ display: 'flex', gap: 4 }} aria-label={result.bandLabel}>
          {[1, 2, 3, 4].map((b) => (
            <div key={b} style={{ flex: 1, height: 8, borderRadius: 4, background: result.band >= b ? (result.band >= 3 ? '#1FA98A' : result.band === 2 ? '#3884FF' : '#8A8A94') : 'var(--surface-2, #ddd)', transition: 'background 0.3s' }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', flexWrap: 'wrap' }}>
          <span>{result.stuffed ? 'That reads like a list of key words. Write full sentences.' : result.bandLabel}</span>
          <span style={{ fontWeight: 600 }}>{status === 'ready' ? '🧠 Smart check on' : status === 'loading' ? '🧠 Smart check loading…' : ''}</span>
        </div>
      </div>

      {/* What you hit (never what is missing), in the same colours as the highlights. */}
      {result.hits.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {result.hits.map((h, i) => (
            <span key={`${h.from}-${i}`} title={LEVEL_STYLE[h.level].label} style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 999, background: LEVEL_STYLE[h.level].bg, border: `1px solid ${LEVEL_STYLE[h.level].line}`, color: 'var(--text)' }}>
              ✓ {h.text}
            </span>
          ))}
        </div>
      )}

      {/* Scaffold: a sentence frame and step prompts, for a few points. */}
      {coach.scaffold && (
        scaffoldOpen ? (
          <div style={{ background: 'var(--accent-soft, var(--surface-2))', border: '1.5px dashed var(--border-strong)', borderRadius: 10, padding: 10, fontSize: 12.5, display: 'grid', gap: 6 }}>
            <strong style={{ fontSize: 12 }}>🧩 Scaffold</strong>
            <div style={{ fontStyle: 'italic' }}>{coach.scaffold.frame}</div>
            <ol style={{ margin: 0, paddingLeft: 18 }}>{coach.scaffold.steps.map((s) => <li key={s}>{s}</li>)}</ol>
          </div>
        ) : confirming ? (
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', fontSize: 12 }}>
            <span>Spend {SCAFFOLD_COST} points to unlock the scaffold?</span>
            <button type="button" onClick={() => { setConfirming(false); onUnlockScaffold() }} style={{ ...btnStyle('#5C3FD6', true), fontSize: 12, padding: '5px 12px' }}>Yes, unlock</button>
            <button type="button" onClick={() => setConfirming(false)} style={{ ...btnStyle('var(--text-muted)'), fontSize: 12, padding: '5px 12px' }}>No</button>
          </div>
        ) : (
          <div>
            <button type="button" disabled={!canAfford} onClick={() => setConfirming(true)} title={canAfford ? '' : `You need ${SCAFFOLD_COST} points. Quiz answers earn points.`} style={{ ...btnStyle('#5C3FD6'), fontSize: 12, padding: '5px 12px', opacity: canAfford ? 1 : 0.55 }}>
              🧩 Unlock scaffold (−{SCAFFOLD_COST} points)
            </button>
            {!canAfford && <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 8 }}>You have {points}. Quiz answers earn points.</span>}
          </div>
        )
      )}

      {/* Hints: nudges, unlocked once the answer is at level 5. */}
      {hints.length > 0 && (
        <div style={{ fontSize: 12 }}>
          {!hintsOpen ? (
            <span style={{ color: 'var(--text-muted)' }}>💡 Hints unlock when your answer reaches level 5–6.</span>
          ) : (
            <div style={{ display: 'grid', gap: 6 }}>
              {hints.slice(0, hintCount).map((h) => (
                <div key={h} style={{ background: 'rgba(31,169,138,0.12)', border: '1px solid #1FA98A', borderRadius: 8, padding: '6px 10px' }}>💡 {h}</div>
              ))}
              {hintCount < hints.length && (
                <button type="button" onClick={() => setHintCount((n) => n + 1)} style={{ ...btnStyle('#1FA98A'), fontSize: 12, padding: '5px 12px', justifySelf: 'start' }}>
                  💡 {hintCount === 0 ? 'Show a hint for the next level' : 'Another hint'}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
