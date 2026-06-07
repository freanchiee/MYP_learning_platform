'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Paper {
  id: string
  subject: string
  session: string
  year: number
  total_marks: number
  duration_minutes: number
  is_published: boolean
}

interface Props {
  papers: Paper[]
  completedPapers: Set<string>
  inProgressPapers: Set<string>
}

/* Subject → accent colour (top gradient bar only — no full card fill) */
const SUBJECT_ACCENT: Record<string, string> = {
  Physics:   '#1f3674',
  Chemistry: '#547ca4',
  Biology:   '#274e68',
  Combined:  '#c3282d',
}
const DEFAULT_ACCENT = '#1f3674'

/* Session abbreviation for the big poster number */
function sessionTag(session: string) {
  if (session.toLowerCase().startsWith('may')) return 'M'
  if (session.toLowerCase().startsWith('nov')) return 'N'
  return session[0].toUpperCase()
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
}

export default function PapersGrid({ papers, completedPapers, inProgressPapers }: Props) {
  if (papers.length === 0) {
    return (
      <div className="flex flex-col items-center py-20" style={{ color: '#547ca4' }}>
        <span className="text-5xl mb-4">📋</span>
        <p className="text-sm font-medium">No papers published yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {papers.map((paper) => {
        const accent = SUBJECT_ACCENT[paper.subject] ?? DEFAULT_ACCENT
        const isCompleted  = completedPapers.has(paper.id)
        const isInProgress = inProgressPapers.has(paper.id) && !isCompleted

        return (
          <motion.div
            key={paper.id}
            variants={card}
            whileHover={{ y: -6, boxShadow: `0 16px 40px rgba(31,54,116,0.18)` }}
            transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: '#fff',
              border: '1px solid rgba(31,54,116,0.1)',
              boxShadow: '0 2px 10px rgba(31,54,116,0.07)',
            }}
          >
            {/* Colour bar — top accent */}
            <div style={{ height: 4, background: accent }} />

            {/* Card body */}
            <div className="p-5 flex-1 flex flex-col gap-3">
              {/* Subject badge + status */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                  style={{
                    background: accent + '18',
                    color: accent,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  {paper.subject}
                </span>

                {isCompleted && (
                  <span
                    className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: '#e8f5ee', color: '#1f3674', border: '1px solid #adf1c4' }}
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Done
                  </span>
                )}
                {isInProgress && (
                  <span
                    className="flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: '#fef3cd', color: '#c3282d', border: '1px solid #f5d26e' }}
                  >
                    <span className="pulse-dot" />
                    In Progress
                  </span>
                )}
              </div>

              {/* Big year + session */}
              <div className="flex items-end gap-2">
                <span
                  className="text-5xl font-extrabold leading-none tracking-tight"
                  style={{ color: '#1f3674' }}
                >
                  {paper.year}
                </span>
                <span
                  className="text-lg font-bold mb-1 pb-0.5"
                  style={{ color: '#547ca4' }}
                >
                  {sessionTag(paper.session)}
                </span>
              </div>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {[
                  `${paper.total_marks} marks`,
                  `${paper.duration_minutes} min`,
                  '4 criteria',
                ].map((label) => (
                  <span
                    key={label}
                    className="text-xs px-2.5 py-0.5 rounded-md"
                    style={{ background: '#f5edcc', color: '#274e68', border: '1px solid rgba(31,54,116,0.12)' }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA footer */}
            <div className="px-5 pb-5">
              <Link
                href={`/exam/${paper.id}`}
                className="block w-full text-center py-2.5 rounded-xl text-sm font-bold text-white transition-all"
                style={{
                  background: isCompleted
                    ? `linear-gradient(90deg, #547ca4, #274e68)`
                    : `linear-gradient(90deg, #1f3674, #274e68)`,
                }}
              >
                {isCompleted ? 'Practice Again' : isInProgress ? 'Continue →' : 'Start Paper →'}
              </Link>
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
