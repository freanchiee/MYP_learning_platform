'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { Question, QuestionGradeResult } from '@/lib/types'

interface QuestionAccordionProps {
  question: Question
  gradeResult: QuestionGradeResult
  questionIndex: number
}

const CRITERION_COLORS: Record<string, string> = {
  A: 'bg-cA text-[color:var(--criterion-fg)]',
  B: 'bg-cB text-[color:var(--criterion-fg)]',
  C: 'bg-cC text-[color:var(--criterion-fg)]',
  D: 'bg-cD text-[color:var(--criterion-fg)]',
}

function StarRating({ awarded, max }: { awarded: number; max: number }) {
  const percent = max > 0 ? awarded / max : 0
  const stars = percent >= 0.85 ? 3 : percent >= 0.5 ? 2 : percent > 0 ? 1 : 0
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3].map((s) => (
        <span
          key={s}
          className={s <= stars ? 'text-warning' : 'text-ink-subtle'}
        >
          ⭐
        </span>
      ))}
    </span>
  )
}

function ConceptChip({ label, hit }: { label: string; hit: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border',
        hit
          ? 'bg-success-surface text-success border-[color:var(--success)]/30'
          : 'bg-danger-surface text-danger border-[color:var(--danger)]/30'
      )}
    >
      <span>{hit ? '✓' : '✗'}</span>
      {label}
    </span>
  )
}

export function QuestionAccordion({
  question,
  gradeResult,
  questionIndex,
}: QuestionAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  const { totalAwarded, totalAvailable, tasks } = gradeResult
  const percent =
    totalAvailable > 0 ? Math.round((totalAwarded / totalAvailable) * 100) : 0

  const scoreColor =
    percent >= 80
      ? 'text-success'
      : percent >= 50
      ? 'text-warning'
      : 'text-danger'

  return (
    <div className="bg-surface border border-line rounded-card overflow-hidden shadow-card">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-surface-2 transition-colors"
        aria-expanded={isOpen}
      >
        {/* Question number */}
        <span className="shrink-0 w-8 h-8 rounded-full bg-surface-3 flex items-center justify-center text-sm font-bold text-ink">
          {questionIndex + 1}
        </span>

        {/* Topic */}
        <span className="flex-1 text-sm font-medium text-ink-muted truncate">
          {question.topic || `Question ${questionIndex + 1}`}
        </span>

        {/* Criterion badge */}
        <span
          className={cn(
            'shrink-0 px-2 py-0.5 rounded text-xs font-bold',
            CRITERION_COLORS[question.crit] || 'bg-surface-3 text-ink'
          )}
        >
          {question.crit}
        </span>

        {/* Score */}
        <span className={cn('shrink-0 text-sm font-semibold', scoreColor)}>
          {totalAwarded}/{totalAvailable}
        </span>

        {/* Stars */}
        <StarRating awarded={totalAwarded} max={totalAvailable} />

        {/* Chevron */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'h-4 w-4 text-ink-subtle shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div className="border-t border-divider px-5 py-4 space-y-4">
          {tasks.map((task, ti) => (
            <div key={ti} className="space-y-3">
              {/* Task label + marks */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-ink-subtle uppercase tracking-wider">
                  Task {task.label}
                </span>
                <span
                  className={cn(
                    'text-sm font-bold',
                    task.marksAwarded === task.maxMarks
                      ? 'text-success'
                      : task.marksAwarded > 0
                      ? 'text-warning'
                      : 'text-danger'
                  )}
                >
                  {task.marksAwarded}/{task.maxMarks} marks
                </span>
              </div>

              {/* Student answer vs exemplar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-control bg-surface-2 border border-line p-3">
                  <p className="text-xs font-semibold text-ink-subtle mb-1.5">
                    Your Answer
                  </p>
                  <p className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
                    {task.studentAnswer || (
                      <span className="italic text-ink-subtle">No answer given</span>
                    )}
                  </p>
                </div>
                <div className="rounded-control bg-success-surface border border-[color:var(--success)]/20 p-3">
                  <p className="text-xs font-semibold text-success mb-1.5">
                    Model Answer
                  </p>
                  <p className="text-sm text-ink whitespace-pre-wrap leading-relaxed">
                    {task.exemplar || (
                      <span className="italic text-ink-subtle">No exemplar available</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Concept chips */}
              {(task.hitConcepts.length > 0 || task.missConcepts.length > 0) && (
                <div className="flex flex-wrap gap-1.5">
                  {task.hitConcepts.map((c) => (
                    <ConceptChip key={`hit-${c}`} label={c} hit />
                  ))}
                  {task.missConcepts.map((c) => (
                    <ConceptChip key={`miss-${c}`} label={c} hit={false} />
                  ))}
                </div>
              )}

              {/* Feedback */}
              {task.feedback && (
                <div className="rounded-control bg-info-surface border border-info px-4 py-3">
                  <p className="text-xs font-semibold text-info mb-1">
                    Feedback
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {task.feedback}
                  </p>
                </div>
              )}

              {/* Divider between tasks */}
              {ti < tasks.length - 1 && (
                <hr className="border-divider" />
              )}
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-sm text-ink-subtle italic">
              No detailed breakdown available for this question.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
