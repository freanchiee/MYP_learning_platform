'use client'

import { useRef, useState, useEffect } from 'react'

interface Props {
  text: string                  // contains ___BLANK_1___, ___BLANK_2___, etc.
  savedAnswer?: string          // "mitochondria|ATP" pipe-separated
  onAnswer: (ans: string) => void
}

const BLANK_RE = /___BLANK_(\d+)___/g

export default function FillBlankWidget({ text, savedAnswer, onAnswer }: Props) {
  // Parse how many blanks exist
  const blanks = Array.from(text.matchAll(BLANK_RE))
  const count = blanks.length

  const [values, setValues] = useState<string[]>(() => {
    if (!savedAnswer) return Array(count).fill('')
    const parts = savedAnswer.split('|')
    return Array.from({ length: count }, (_, i) => parts[i] ?? '')
  })

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (!savedAnswer) { setValues(Array(count).fill('')); return }
    const parts = savedAnswer.split('|')
    setValues(Array.from({ length: count }, (_, i) => parts[i] ?? ''))
  }, [savedAnswer, count])

  const handleChange = (idx: number, val: string) => {
    const next = [...values]
    next[idx] = val
    setValues(next)
    onAnswer(next.join('|'))
  }

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      e.preventDefault()
      inputRefs.current[idx + 1]?.focus()
    } else if (e.key === 'Tab' && e.shiftKey) {
      e.preventDefault()
      inputRefs.current[idx - 1]?.focus()
    }
  }

  // Split text into segments separated by blanks
  const segments: React.ReactNode[] = []
  let lastIdx = 0
  let blankNum = 0

  for (const m of Array.from(text.matchAll(BLANK_RE))) {
    const matchStart = m.index!
    // Push text before this blank
    if (matchStart > lastIdx) {
      segments.push(
        <span key={`text-${lastIdx}`} className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
          {text.slice(lastIdx, matchStart)}
        </span>
      )
    }
    // Push the blank input
    const bi = blankNum
    segments.push(
      <input
        key={`blank-${bi}`}
        ref={(el) => { inputRefs.current[bi] = el }}
        type="text"
        value={values[bi] ?? ''}
        onChange={(e) => handleChange(bi, e.target.value)}
        onKeyDown={(e) => handleKeyDown(bi, e)}
        placeholder={`(${bi + 1})`}
        className="inline-block text-sm font-semibold rounded px-2 py-0.5 mx-1 outline-none transition-all"
        style={{
          width: Math.max(80, (values[bi]?.length ?? 4) * 9 + 24),
          minWidth: 80,
          background: 'var(--surface-inset)',
          border: '1.5px solid var(--border-strong)',
          color: 'var(--text)',
          // focus ring handled via onFocus/onBlur below
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent-2)'; e.target.style.boxShadow = '0 0 0 2px var(--accent-soft)' }}
        onBlur={(e) => { e.target.style.borderColor = 'var(--border-strong)'; e.target.style.boxShadow = 'none' }}
      />
    )
    blankNum++
    lastIdx = matchStart + m[0].length
  }

  // Remaining text after last blank
  if (lastIdx < text.length) {
    segments.push(
      <span key="text-end" className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
        {text.slice(lastIdx)}
      </span>
    )
  }

  return (
    <div className="rounded-control p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <p className="text-xs font-semibold mb-3" style={{ color: 'var(--accent-2)' }}>
        Fill in the blanks.
      </p>
      <div className="leading-loose">{segments}</div>
      {count === 0 && (
        <p className="text-xs text-danger mt-2">
          No blanks detected — check question data.
        </p>
      )}
    </div>
  )
}
