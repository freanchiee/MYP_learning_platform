'use client'

import { useExamStore } from '@/store/examStore'
import type { Criterion } from '@/lib/types'
import { cn } from '@/lib/utils'
import MCQQuestion from '@/components/exam/questions/MCQQuestion'
import ExtendedQuestion from '@/components/exam/questions/ExtendedQuestion'
import DataTableQuestion from '@/components/exam/questions/DataTableQuestion'
import SimulationQuestion from '@/components/exam/questions/SimulationQuestion'

// ---- Criterion colour map ----
const critBg: Record<Criterion, string> = {
  A: 'bg-[var(--cA)]',
  B: 'bg-[var(--cB)]',
  C: 'bg-[var(--cC)]',
  D: 'bg-[var(--cD)]',
}

const critLabel: Record<Criterion, string> = {
  A: 'Criterion A — Knowing & Understanding',
  B: 'Criterion B — Inquiring & Designing',
  C: 'Criterion C — Processing & Evaluating',
  D: 'Criterion D — Reflecting on Science',
}

export default function QuestionArea() {
  const currentIdx = useExamStore(s => s.currentIdx)
  const questions = useExamStore(s => s.questions)

  const q = questions[currentIdx]
  if (!q) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
        No question loaded.
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
      {/* ── Question header bar ── */}
      <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-2 flex-wrap shadow-sm">
        {/* Q number badge */}
        <span className="flex-shrink-0 min-w-[2rem] h-8 px-2.5 rounded-lg bg-[var(--ib-blue)] text-white text-xs font-bold flex items-center justify-center">
          Q{currentIdx + 1}
        </span>

        {/* Criterion badge */}
        <span
          className={cn(
            'flex-shrink-0 px-2.5 py-1 rounded-lg text-white text-[11px] font-bold',
            critBg[q.crit],
          )}
          title={critLabel[q.crit]}
        >
          Crit {q.crit}
        </span>

        {/* Topic chip */}
        <span className="flex-shrink-0 px-2.5 py-1 rounded-full border border-[var(--ib-teal)] text-[var(--ib-teal)] text-xs font-medium bg-[var(--ib-teal-l)]">
          {q.topic}
        </span>

        {/* Marks chip */}
        <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200">
          {q.marks} mark{q.marks !== 1 ? 's' : ''}
        </span>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Type label */}
        <span className="text-xs text-gray-400 font-medium capitalize hidden sm:block">
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

      {/* ── Scrollable content area (gray bg) ── */}
      <div className="flex-1 overflow-y-auto bg-gray-50" style={{ scrollbarWidth: 'thin' }}>
        {q.type === 'mcq' && <MCQQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'extended' && <ExtendedQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'dataTable' && <DataTableQuestion q={q} qIdx={currentIdx} />}
        {q.type === 'simulation' && <SimulationQuestion q={q} qIdx={currentIdx} />}
      </div>
    </div>
  )
}
