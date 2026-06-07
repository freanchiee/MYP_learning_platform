'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const NAV_H = 56 // must match layout navbar height

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

/* Palette per subject */
const BG: Record<string, { from: string; via: string; to: string }> = {
  Physics:   { from: '#0a0f2e', via: '#1f3674', to: '#274e68' },
  Chemistry: { from: '#0d1a2e', via: '#274e68', to: '#547ca4' },
  Biology:   { from: '#071a12', via: '#1a3d2e', to: '#274e68' },
  Combined:  { from: '#1a0a0a', via: '#3d1515', to: '#c3282d' },
}
const DEFAULT_BG = { from: '#0a0f2e', via: '#1f3674', to: '#274e68' }

function sessionFull(s: string) {
  const l = s.toLowerCase()
  if (l.startsWith('may'))      return 'MAY'
  if (l.startsWith('nov'))      return 'NOV'
  if (l.startsWith('practice')) return 'PRACTICE'
  return s.toUpperCase()
}

/* ── Animated canvas-like background ── */
function GateBackground({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* SVG wave lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.12 }}>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M -100 ${200 + i * 160} Q 360 ${100 + i * 160} 720 ${200 + i * 160} Q 1080 ${300 + i * 160} 1540 ${200 + i * 160}`}
            fill="none" stroke="white" strokeWidth={1 + i * 0.3}
            style={{ animation: `wave-move ${5 + i * 1.2 + (index % 3) * 0.5}s ease-in-out infinite alternate`, animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </svg>

      {/* Large rotating rings — top right */}
      {[280, 200, 130].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size, height: size,
            right: -size / 3, top: -size / 3,
            border: '1px solid rgba(173,241,196,0.08)',
            animation: `slow-spin ${10 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
          }}
        />
      ))}

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => {
        const x = ((i * 71 + index * 37) % 85) + 5
        const y = ((i * 53 + index * 23) % 75) + 5
        const size = 2 + (i % 4)
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size, height: size, left: `${x}%`, top: `${y}%`,
              opacity: 0.06 + (i % 3) * 0.04,
              animation: `float-particle ${3 + i % 4}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        )
      })}
    </div>
  )
}

/* ── Single full-screen gate ── */
function Gate({
  paper, index, isActive, isCompleted, isInProgress,
}: {
  paper: Paper; index: number; isActive: boolean
  isCompleted: boolean; isInProgress: boolean
}) {
  const bg = BG[paper.subject] ?? DEFAULT_BG
  const gateNum = String(index + 1).padStart(2, '0')
  const sess = sessionFull(paper.session)
  const isInProg = isInProgress && !isCompleted

  return (
    <section
      style={{
        height: `calc(100vh - ${NAV_H}px)`,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${bg.from} 0%, ${bg.via} 55%, ${bg.to} 100%)`,
        flexShrink: 0,
      }}
    >
      <GateBackground index={index} />

      {/* ── Status badge ── */}
      {(isCompleted || isInProg) && (
        <div className="absolute top-6 right-8 z-20">
          <span
            className="text-xs font-black uppercase tracking-widest px-3 py-1.5"
            style={{
              background: isCompleted ? 'rgba(173,241,196,0.15)' : 'rgba(195,40,45,0.15)',
              color: isCompleted ? '#adf1c4' : '#ff7b7b',
              border: `1px solid ${isCompleted ? 'rgba(173,241,196,0.3)' : 'rgba(195,40,45,0.3)'}`,
            }}
          >
            {isCompleted ? '✓ COMPLETED' : '● IN PROGRESS'}
          </span>
        </div>
      )}

      {/* ── Centre content ── */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key={paper.id}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            {/* Gate tag */}
            <div
              className="text-xs font-black tracking-[0.3em] mb-8 px-4 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.7)' }}
            >
              GATE {gateNum}
            </div>

            {/* Huge year */}
            <div
              className="font-extrabold text-white leading-none select-none"
              style={{
                fontSize: 'clamp(90px, 16vw, 200px)',
                letterSpacing: '-6px',
                textShadow: '0 8px 60px rgba(0,0,0,0.4)',
              }}
            >
              {paper.year}
            </div>

            {/* Subject · Session */}
            <div
              className="mt-4 font-black tracking-[0.35em] text-sm md:text-base"
              style={{ color: 'rgba(173,241,196,0.75)' }}
            >
              {paper.subject.toUpperCase()} · {sess}
            </div>

            {/* Meta */}
            <div className="mt-3 text-xs tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {paper.total_marks} MARKS · {paper.duration_minutes} MIN · 4 CRITERIA
            </div>

            {/* CTA */}
            <Link
              href={`/exam/${paper.id}`}
              className="mt-10 inline-block font-black text-sm tracking-[0.2em] text-white transition-all hover:opacity-80"
              style={{
                background: isCompleted ? 'rgba(173,241,196,0.15)' : '#c3282d',
                border: isCompleted ? '1px solid rgba(173,241,196,0.3)' : 'none',
                padding: '16px 48px',
                boxShadow: isCompleted ? 'none' : '0 0 40px rgba(195,40,45,0.4)',
              }}
            >
              {isCompleted ? 'PRACTICE AGAIN' : isInProg ? 'CONTINUE PAPER' : 'START PAPER'}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom-left: paper ID ── */}
      <div
        className="absolute bottom-8 left-8 text-xs font-mono z-10"
        style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em' }}
      >
        {paper.id}
      </div>

      {/* ── Scroll hint on first gate ── */}
      {index === 0 && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-black tracking-[0.25em] z-10 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL TO EXPLORE
          <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      )}
    </section>
  )
}

/* ── Main component ── */
export default function PapersGates({ papers, completedPapers, inProgressPapers }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  /* Track scroll position → active gate */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const h = el.clientHeight
      const idx = Math.round(el.scrollTop / h)
      setActiveIdx(Math.max(0, Math.min(idx, papers.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [papers.length])

  /* Keyboard navigation */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(activeIdx + 1)
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goTo(activeIdx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIdx])  // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = (idx: number) => {
    const el = containerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(idx, papers.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(clamped)
  }

  if (papers.length === 0) {
    return (
      <div
        className="flex items-center justify-center text-white"
        style={{ height: `calc(100vh - ${NAV_H}px)`, background: '#0a0f2e' }}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">📋</div>
          <p className="text-sm font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
            NO PAPERS PUBLISHED YET
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* ══ Scrollable gates ══ */}
      <div
        ref={containerRef}
        style={{
          height: `calc(100vh - ${NAV_H}px)`,
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {papers.map((paper, idx) => (
          <Gate
            key={paper.id}
            paper={paper}
            index={idx}
            isActive={Math.abs(activeIdx - idx) <= 1} // render adjacent gates too
            isCompleted={completedPapers.has(paper.id)}
            isInProgress={inProgressPapers.has(paper.id)}
          />
        ))}
      </div>

      {/* ══ Fixed left dot navigation ══ */}
      <nav
        className="fixed z-50 flex flex-col items-center gap-2.5 hidden md:flex"
        style={{
          left: '2rem',
          top: `calc(50% + ${NAV_H / 2}px)`,
          transform: 'translateY(-50%)',
        }}
      >
        {papers.map((paper, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          return (
            <div key={paper.id} className="relative flex items-center gap-3">
              {/* Label on hover */}
              <AnimatePresence>
                {isHov && (
                  <motion.span
                    className="absolute right-6 text-xs font-black tracking-widest whitespace-nowrap"
                    style={{ color: 'rgba(255,255,255,0.7)' }}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.15 }}
                  >
                    {paper.year} {sessionFull(paper.session)}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Diamond dot */}
              <button
                onClick={() => goTo(idx)}
                onMouseEnter={() => setHoveredDot(idx)}
                onMouseLeave={() => setHoveredDot(null)}
                title={`${paper.year} ${paper.session}`}
                style={{
                  width: isActive ? 10 : 8,
                  height: isActive ? 10 : 8,
                  transform: 'rotate(45deg)',
                  background: isActive ? '#adf1c4' : 'rgba(255,255,255,0.25)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  flexShrink: 0,
                }}
              />
            </div>
          )
        })}
      </nav>

      {/* ══ Gate counter — bottom right ══ */}
      <div
        className="fixed z-50 text-xs font-black tracking-widest hidden md:block"
        style={{
          right: '2rem',
          bottom: '2rem',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {String(activeIdx + 1).padStart(2, '0')} / {String(papers.length).padStart(2, '0')}
      </div>
    </>
  )
}
