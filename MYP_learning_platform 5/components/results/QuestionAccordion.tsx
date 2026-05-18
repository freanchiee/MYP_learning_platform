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
  A: 'bg-[#0079a8] text-white',
  B: 'bg-[#3daa35] text-white',
  C: 'bg-[#f5a623] text-gray-900',
  D: 'bg-[#7b2d8b] text-white',
}

function StarRating({ awarded, max }: { awarded: number; max: number }) {
  const percent = max > 0 ? awarded / max : 0
  const stars = percent >= 0.85 ? 3 : percent >= 0.5 ? 2 : percent > 0 ? 1 : 0
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3].map((s) => (
        <span
          key={s}
          className={s <= stars ? 'text-amber-400' : 'text-gray-300'}
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
        'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium',
        hit
          ? 'bg-green-100 text-green-800 border border-green-200'
          : 'bg-red-100 text-red-800 border border-red-200'
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
      ? 'text-green-600'
      : percent >= 50
      ? 'text-amber-600'
      : 'text-red-600'

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        {/* Question number */}
        <span className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white">
          {questionIndex + 1}
        </span>

        {/* Topic */}
        <span className="flex-1 text-sm font-medium text-gray-200 truncate">
          {question.topic || `Question ${questionIndex + 1}`}
        </span>

        {/* Criterion badge */}
        <span
          className={cn(
            'shrink-0 px-2 py-0.5 rounded text-xs font-bold',
            CRITERION_COLORS[question.crit] || 'bg-gray-600 text-white'
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
            'h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200',
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
        <div className="border-t border-white/10 px-5 py-4 space-y-4">
          {tasks.map((task, ti) => (
            <div key={ti} className="space-y-3">
              {/* Task label + marks */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Task {task.label}
                </span>
                <span
                  className={cn(
                    'text-sm font-bold',
                    task.marksAwarded === task.maxMarks
                      ? 'text-green-400'
                      : task.marksAwarded > 0
                      ? 'text-amber-400'
                      : 'text-red-400'
                  )}
                >
                  {task.marksAwarded}/{task.maxMarks} marks
                </span>
              </div>

              {/* Student answer vs exemplar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                  <p className="text-xs font-semibold text-gray-400 mb-1.5">
                    Your Answer
                  </p>
                  <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {task.studentAnswer || (
                      <span className="italic text-gray-500">No answer given</span>
                    )}
                  </p>
                </div>
                <div className="rounded-lg bg-green-900/20 border border-green-500/20 p-3">
                  <p className="text-xs font-semibold text-green-400 mb-1.5">
                    Model Answer
                  </p>
                  <p className="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">
                    {task.exemplar || (
                      <span className="italic text-gray-500">No exemplar available</span>
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
                <div className="rounded-lg bg-[#0079a8]/10 border border-[#0079a8]/30 px-4 py-3">
                  <p className="text-xs font-semibold text-[#0079a8] mb-1">
                    Feedback
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {task.feedback}
                  </p>
                </div>
              )}

              {/* Divider between tasks */}
              {ti < tasks.length - 1 && (
                <hr className="border-white/10" />
              )}
            </div>
          ))}

          {tasks.length === 0 && (
            <p className="text-sm text-gray-500 italic">
              No detailed breakdown available for this question.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
