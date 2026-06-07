'use client'
import { memo, useCallback } from 'react'
import { useExamStore } from '@/store/examStore'
import type { Question, Criterion } from '@/lib/types'

const CRIT_META: Record<Criterion, { color: string; label: string }> = {
  A: { color: '#1f3674', label: 'Criterion A' },
  B: { color: '#547ca4', label: 'Criterion B' },
  C: { color: '#c3282d', label: 'Criterion C' },
  D: { color: '#274e68', label: 'Criterion D' },
}

const CRITERIA_ORDER: Criterion[] = ['A', 'B', 'C', 'D']

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
  let bgColor = '#ffffff'
  let textColor = '#374151'
  let borderColor = critColor + '44'

  if (isCurrent) {
    bgColor = '#1f3674'
    textColor = '#adf1c4'
    borderColor = '#1f3674'
  } else if (answered) {
    bgColor = '#e0edf7'
    textColor = '#1f3674'
    borderColor = '#547ca4'
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
          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-white"
          style={{ background: '#f5a623' }}
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
      style={{ width: 200, background: '#edf1f7', borderRight: '1px solid rgba(31,54,116,0.14)' }}
    >
      {/* Header */}
      <div
        className="px-3 py-2 text-xs font-bold tracking-widest text-white uppercase flex-shrink-0"
        style={{ background: '#1f3674' }}
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
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white"
                style={{ background: meta.color + '22', borderLeft: `3px solid ${meta.color}` }}
              >
                <span
                  className="w-4 h-4 rounded text-white flex items-center justify-center font-bold flex-shrink-0"
                  style={{ background: meta.color, fontSize: 10 }}
                >
                  {crit}
                </span>
                <span className="text-gray-700 font-semibold" style={{ fontSize: 11 }}>
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
                      critColor={meta.color}
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
      <div className="flex-shrink-0 px-3 py-3 border-t border-gray-300">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span className="font-semibold text-gray-700">
            {answeredCount}/{questions.length}
          </span>
        </div>
        <div className="h-2 rounded-full bg-gray-300 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${questions.length > 0 ? (answeredCount / questions.length) * 100 : 0}%`,
              background: '#547ca4',
            }}
          />
        </div>
      </div>

      {/* Legend */}
      <div className="flex-shrink-0 px-3 py-2 border-t border-gray-300 space-y-1" style={{ fontSize: 10 }}>
        {[
          { color: '#ffffff', border: 'rgba(31,54,116,0.3)', label: 'Unanswered' },
          { color: '#e0edf7', border: '#547ca4',             label: 'Answered' },
          { color: '#f5edcc', border: '#c3282d',             label: 'Flagged', dot: true },
          { color: '#1f3674', border: '#1f3674',             label: 'Current' },
        ].map(({ color, border, label, dot }) => (
          <div key={label} className="flex items-center gap-2 text-gray-600">
            <div className="relative flex-shrink-0">
              <div className="w-3 h-3 rounded-sm" style={{ background: color, border: `1.5px solid ${border}` }} />
              {dot && (
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full" style={{ background: '#f5a623' }} />
              )}
            </div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}
