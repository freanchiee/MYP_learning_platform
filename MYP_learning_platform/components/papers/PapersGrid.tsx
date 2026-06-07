'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

const ACCENT: Record<string, { primary: string; secondary: string; light: string }> = {
  Physics:   { primary: '#1f3674', secondary: '#547ca4', light: '#e0edf7' },
  Chemistry: { primary: '#274e68', secondary: '#547ca4', light: '#ddeef5' },
  Biology:   { primary: '#1f3674', secondary: '#274e68', light: '#e0edf7' },
  Combined:  { primary: '#c3282d', secondary: '#547ca4', light: '#fde8e8' },
}
const DEFAULT_ACCENT = { primary: '#1f3674', secondary: '#547ca4', light: '#e0edf7' }

function sessionLabel(session: string) {
  const s = session.toLowerCase()
  if (s.startsWith('may')) return { tag: 'M', full: 'May' }
  if (s.startsWith('nov')) return { tag: 'N', full: 'Nov' }
  if (s.startsWith('practice')) return { tag: 'P', full: 'Practice' }
  return { tag: session[0]?.toUpperCase() ?? '?', full: session }
}

/* ── Animated physics wave visual (CSS-only, lightweight) ── */
function PhysicsVisual({ index, accent }: { index: number; accent: typeof DEFAULT_ACCENT }) {
  const phase = (index * 37) % 360
  const speed = 2.5 + (index % 3) * 0.6

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, ${accent.primary} 0%, ${accent.secondary} 60%, ${accent.primary}cc 100%)`,
        }}
      />

      {/* Animated sine waves via SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 220"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.18 }}
      >
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <path
              d={`M -40 ${80 + i * 40} Q 60 ${40 + i * 40} 160 ${80 + i * 40} Q 260 ${120 + i * 40} 360 ${80 + i * 40} Q 460 ${40 + i * 40} 560 ${80 + i * 40}`}
              fill="none"
              stroke="white"
              strokeWidth={1.5 - i * 0.3}
              style={{
                animation: `wave-move ${speed + i * 0.4}s ease-in-out infinite alternate`,
                animationDelay: `${(phase + i * 60) * 0.01}s`,
              }}
            />
          </g>
        ))}
      </svg>

      {/* Floating dot particles */}
      {[...Array(8)].map((_, i) => {
        const x = ((i * 53 + phase) % 90) + 5
        const y = ((i * 37 + phase) % 70) + 10
        const size = 3 + (i % 3) * 2
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size, height: size,
              left: `${x}%`, top: `${y}%`,
              opacity: 0.12 + (i % 3) * 0.06,
              animation: `float-particle ${3 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        )
      })}

      {/* Large translucent atom ring */}
      <div
        className="absolute rounded-full border border-white"
        style={{
          width: 140, height: 140,
          right: -30, bottom: -30,
          opacity: 0.08,
          animation: `slow-spin ${12 + index % 5}s linear infinite`,
        }}
      />
      <div
        className="absolute rounded-full border border-white"
        style={{
          width: 90, height: 90,
          right: -5, bottom: -5,
          opacity: 0.06,
          animation: `slow-spin ${8 + index % 3}s linear infinite reverse`,
        }}
      />
    </div>
  )
}

const INITIAL_COUNT = 6

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export default function PapersGrid({ papers, completedPapers, inProgressPapers }: Props) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? papers : papers.slice(0, INITIAL_COUNT)
  const hasMore = papers.length > INITIAL_COUNT

  if (papers.length === 0) {
    return (
      <div className="flex flex-col items-center py-20" style={{ color: '#547ca4' }}>
        <span className="text-5xl mb-4">📋</span>
        <p className="text-sm font-medium">No papers published yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {visible.map((paper, index) => {
            const accent      = ACCENT[paper.subject] ?? DEFAULT_ACCENT
            const isCompleted  = completedPapers.has(paper.id)
            const isInProgress = inProgressPapers.has(paper.id) && !isCompleted
            const { tag, full } = sessionLabel(paper.session)

            return (
              <motion.div
                key={paper.id}
                variants={cardVariant}
                layout
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: '#fff',
                  border: '1px solid rgba(31,54,116,0.1)',
                  boxShadow: '0 4px 20px rgba(31,54,116,0.08)',
                  minHeight: 400,
                }}
              >
                {/* ── TOP: Visual area (55%) ── */}
                <div className="relative flex-shrink-0" style={{ height: 220 }}>
                  <PhysicsVisual index={index} accent={accent} />

                  {/* Status badge – top left */}
                  <div className="absolute top-3 left-3 z-10">
                    {isCompleted && (
                      <span
                        className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{ background: 'rgba(255,255,255,0.9)', color: '#1f3674' }}
                      >
                        ✓ Done
                      </span>
                    )}
                    {isInProgress && (
                      <span
                        className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full backdrop-blur-sm"
                        style={{ background: 'rgba(255,255,255,0.9)', color: '#c3282d' }}
                      >
                        <span className="pulse-dot" style={{ background: '#c3282d' }} />
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Subject tag – top right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', border: '1px solid rgba(255,255,255,0.25)' }}
                    >
                      {paper.subject}
                    </span>
                  </div>

                  {/* Big year – centred */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <span
                      className="font-extrabold leading-none"
                      style={{ fontSize: 72, color: 'rgba(255,255,255,0.92)', letterSpacing: '-2px', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
                    >
                      {paper.year}
                    </span>
                    <span
                      className="text-lg font-bold mt-1"
                      style={{ color: 'rgba(255,255,255,0.65)' }}
                    >
                      {full} · {tag}
                    </span>
                  </div>
                </div>

                {/* ── BOTTOM: Details area (45%) ── */}
                <div className="flex flex-col flex-1 p-5 gap-4">
                  {/* Meta pills */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      `${paper.total_marks} marks`,
                      `${paper.duration_minutes} min`,
                      '4 criteria',
                    ].map((label) => (
                      <span
                        key={label}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: accent.light, color: accent.primary }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Paper ID hint */}
                  <p className="text-xs font-mono" style={{ color: 'rgba(31,54,116,0.35)' }}>
                    {paper.id}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/exam/${paper.id}`}
                      className="block w-full text-center py-3 rounded-xl text-sm font-extrabold text-white transition-all hover:opacity-90 active:scale-98"
                      style={{
                        background: isCompleted
                          ? `linear-gradient(90deg, ${accent.secondary}, ${accent.primary})`
                          : `linear-gradient(90deg, ${accent.primary}, ${accent.secondary})`,
                        boxShadow: `0 4px 14px ${accent.primary}40`,
                      }}
                    >
                      {isCompleted ? 'Practice Again →' : isInProgress ? 'Continue →' : 'Start Paper →'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>

      {/* Show More / Collapse */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll((v) => !v)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all"
            style={{
              background: '#1f3674',
              color: '#adf1c4',
              border: '2px solid rgba(173,241,196,0.2)',
              boxShadow: '0 4px 20px rgba(31,54,116,0.2)',
            }}
          >
            {showAll ? (
              <>↑ Show Less</>
            ) : (
              <>↓ Show All {papers.length} Papers</>
            )}
          </motion.button>
        </div>
      )}
    </div>
  )
}
