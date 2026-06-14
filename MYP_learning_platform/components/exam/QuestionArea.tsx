'use client'

import { useExamStore } from '@/store/examStore'
import type { Criterion } from '@/lib/types'
import { cn } from '@/lib/utils'
import MCQQuestion from '@/components/exam/questions/MCQQuestion'
import ExtendedQuestion from '@/components/exam/questions/ExtendedQuestion'
import DataTableQuestion from '@/components/exam/questions/DataTableQuestion'
import SimulationQuestion from '@/components/exam/questions/SimulationQuestion'
import ExamWidthResizer from '@/components/exam/ExamWidthResizer'

// ---- Criterion colour map ----
const critBg: Record<Criterion, string> = {
  A: 'bg-[var(--cA)]',
  B: 'bg-[var(--cB)]',
  C: 'bg-[var(--cC)]',
  D: 'bg-[var(--cD)]',
}

// Criterion labels differ by subject group. Sciences use the MYP Sciences
// objectives; Individuals & Societies (humanities) use the I&S objectives.
const CRIT_LABELS: Record<string, Record<Criterion, string>> = {
  humanities: {
    A: 'Criterion A — Knowing and understanding',
    B: 'Criterion B — Investigating',
    C: 'Criterion C — Communicating',
    D: 'Criterion D — Thinking critically',
  },
  geography: {
    A: 'Criterion A — Knowing and understanding',
    B: 'Criterion B — Investigating',
    C: 'Criterion C — Communicating',
    D: 'Criterion D — Thinking critically',
  },
  default: {
    A: 'Criterion A — Knowing & Understanding',
    B: 'Criterion B — Inquiring & Designing',
    C: 'Criterion C — Processing & Evaluating',
    D: 'Criterion D — Reflecting on Science',
  },
}

export default function QuestionArea() {
  const currentIdx = useExamStore(s => s.currentIdx)
  const questions = useExamStore(s => s.questions)
  const paperId = useExamStore(s => s.paperId)
  const critLabel = CRIT_LABELS[(paperId ?? '').split('-')[0]] ?? CRIT_LABELS.default

  const q = questions[currentIdx]
  if (!q) {
    return (
      <div className="flex-1 flex items-center justify-center text-sm" style={{ color: 'var(--text-subtle)' }}>
        No question loaded.
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      {/* ── Question header bar ── */}
      <div
        className="flex-shrink-0 px-4 py-3 flex items-center gap-2 flex-wrap chrome-bar"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
      >
        {/* Q number badge */}
        <span
          className="flex-shrink-0 min-w-[2rem] h-8 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center"
          style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
        >
          Q{currentIdx + 1}
        </span>

        {/* Criterion badge */}
        <span
          className={cn(
            'flex-shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold',
            critBg[q.crit],
          )}
          style={{ color: 'var(--criterion-fg)' }}
          title={critLabel[q.crit]}
        >
          Crit {q.crit}
        </span>

        {/* Topic chip */}
        <span
          className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{ border: '1px solid var(--accent-2)', color: 'var(--accent-2)', background: 'var(--surface-tint)' }}
        >
          {q.topic}
        </span>

        {/* Marks chip */}
        <span
          className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{ background: 'var(--surface-3)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
        >
          {q.marks} mark{q.marks !== 1 ? 's' : ''}
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Type label */}
        <span className="text-xs font-medium capitalize hidden sm:block" style={{ color: 'var(--text-subtle)' }}>
          {q.type === 'mcq'
            ? 'Multiple Choice'
            : q.type === 'extended'
            ? 'Extended Response'
            : q.type === 'dataTable'
            ? 'Data Processing'
            : q.type === 'simulation'
            ? 'Investigation'
            : q.type}
        </span>
      </div>

      {/* ── Scrollable content area (theme canvas) ── */}
      <div data-exam-scroll className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
        {q.type === 'mcq' && <MCQQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'extended' && <ExtendedQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'dataTable' && <DataTableQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'simulation' && <SimulationQuestion q={q} qIdx={currentIdx} />}
      </div>

      {/* Drag handle to resize the answer/writing column (exam mode only) */}
      <ExamWidthResizer />
    </div>
  )
}
