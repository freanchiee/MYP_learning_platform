'use client'
import { memo, useCallback } from 'react'
import { useExamStore } from '@/store/examStore'
import type { Question, Criterion } from '@/lib/types'

const CRIT_META: Record<Criterion, { token: string; label: string }> = {
  A: { token: 'var(--cA)', label: 'Criterion A' },
  B: { token: 'var(--cB)', label: 'Criterion B' },
  C: { token: 'var(--cC)', label: 'Criterion C' },
  D: { token: 'var(--cD)', label: 'Criterion D' },
}

const CRITERIA_ORDER: Criterion[] = ['A', 'B', 'C', 'D']

/** color-mix helper for tinting a criterion token at a given alpha % */
const tint = (c: string, pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`

function isAnswered(q: Question): boolean {
  if (q.type === 'mcq') return q.ans !== null && q.ans !== undefined
  if (q.type === 'extended' || q.type === 'simulation' || q.type === 'dataTable') {
    return q.tasks?.some((t) => (t.ans ?? '').trim().length > 0) ?? false
  }
  return q.ans !== null && q.ans !== undefined
}

/* ── Memoised Q# dot button — stops re-rendering on every timer tick ── */
interface DotProps {
  displayIdx: number // 1-based label
  isCurrent: boolean
  answered: boolean
  flagged: boolean
  critColor: string
  topic: string
  onClick: () => void
}

const QuestionDot = memo(function QuestionDot({
  displayIdx, isCurrent, answered, flagged, critColor, topic, onClick,
}: DotProps) {
  let bgColor = 'var(--surface)'
  let textColor = 'var(--text-muted)'
  let borderColor = tint(critColor, 27)

  if (isCurrent) {
    bgColor = 'var(--accent)'
    textColor = 'var(--accent-fg)'
    borderColor = 'var(--accent)'
  } else if (answered) {
    bgColor = 'var(--surface-tint)'
    textColor = 'var(--accent)'
    borderColor = 'var(--accent-2)'
  }

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="w-full aspect-square rounded text-xs font-bold transition-all hover:scale-105"
        style={{
          background: bgColor,
          color: textColor,
          border: `2px solid ${borderColor}`,
          borderTop: `3px solid ${critColor}`,
          fontSize: 11,
        }}
        title={`Question ${displayIdx} — ${topic}`}
      >
        {displayIdx}
      </button>
      {flagged && (
        <div
          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
          style={{ background: 'var(--warning)', border: '1px solid var(--surface)' }}
        />
      )}
    </div>
  )
})

export default function ExamSidebar() {
  const questions    = useExamStore((s) => s.questions)
  const currentIdx   = useExamStore((s) => s.currentIdx)
  const qIndexMap    = useExamStore((s) => s.qIndexMap)   // O(1) lookup
  const setCurrentIdx = useExamStore((s) => s.setCurrentIdx)

  const answeredCount = questions.filter(isAnswered).length

  // Stable callback factory — avoids creating new functions per render
  const makeClickHandler = useCallback(
    (idx: number) => () => setCurrentIdx(idx),
    [setCurrentIdx]
  )

  return (
    <aside
      className="flex flex-col flex-shrink-0 overflow-y-auto"
      style={{ width: 200, background: 'var(--rail-bg)', borderRight: '1px solid var(--border)' }}
    >
      {/* Header */}
      <div
        className="px-3 py-2 text-xs font-bold tracking-widest uppercase flex-shrink-0"
        style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
      >
        Questions
      </div>

      {/* Criterion groups */}
      <div className="flex-1">
        {CRITERIA_ORDER.map((crit) => {
          const critQuestions = questions.filter((q) => q.crit === crit)
          if (critQuestions.length === 0) return null
          const meta = CRIT_META[crit]

          return (
            <div key={crit} className="mb-1">
              <div
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold"
                style={{ background: tint(meta.token, 13), borderLeft: `3px solid ${meta.token}` }}
              >
                <span
                  className="w-4 h-4 rounded flex items-center justify-center font-bold flex-shrink-0"
                  style={{ background: meta.token, color: 'var(--criterion-fg)', fontSize: 10 }}
                >
                  {crit}
                </span>
                <span className="font-semibold" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
                  {meta.label}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1 px-2 py-2">
                {critQuestions.map((q) => {
                  // O(1) lookup instead of O(n) indexOf
                  const idx = qIndexMap[q.id] ?? questions.findIndex((x) => x.id === q.id)
                  return (
                    <QuestionDot
                      key={q.id}
                      displayIdx={idx + 1}
                      isCurrent={idx === currentIdx}
                      answered={isAnswered(q)}
                      flagged={q.flagged ?? false}
                      critColor={meta.token}
                      topic={q.topic}
                      onClick={makeClickHandler(idx)}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="flex-shrink-0 px-3 py-3" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--text-subtle)' }}>
          <span>Progress</span>
          <span className="font-semibold" style={{ color: 'var(--text-muted)' }}>
            {answeredCount}/{questions.length}
          </span>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-3)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${questions.length > 0 ? (answeredCount / questions.length) * 100 : 0}%`,
              background: 'var(--accent-2)',
            }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex-shrink-0 px-3 py-2 space-y-1" style={{ fontSize: 10, borderTop: '1px solid var(--border)' }}>
        {[
          { color: 'var(--surface)',      border: tint('var(--accent)', 30), label: 'Unanswered' },
          { color: 'var(--surface-tint)', border: 'var(--accent-2)',         label: 'Answered' },
          { color: 'var(--surface-inset)',border: 'var(--accent-action)',    label: 'Flagged', dot: true },
          { color: 'var(--accent)',       border: 'var(--accent)',           label: 'Current' },
        ].map(({ color, border, label, dot }) => (
          <div key={label} className="flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
            <div className="relative flex-shrink-0">
              <div className="w-3 h-3 rounded-sm" style={{ background: color, border: `1.5px solid ${border}` }} />
              {dot && (
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--warning)' }} />
              )}
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
