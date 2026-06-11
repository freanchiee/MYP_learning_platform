'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export interface TopicEntry {
  topicCanonical: string
  topicGroup: string
  count: number
}

interface TopicPickerProps {
  subjectSlug: string
  topics: TopicEntry[]
  backHref: string
}

const NAV_H = 56

const GROUP_GRADIENTS: Record<string, { from: string; via: string; to: string }> = {
  // ── Biology ───────────────────────────────────────────────────────────────
  'Biotechnology':                        { from: '#061525', via: '#0d2a4a', to: '#1f4a80' },
  'Cells':                                { from: '#150a25', via: '#2a1245', to: '#5a1f80' },
  'Evolution':                            { from: '#250a0a', via: '#3d1212', to: '#7a1f20' },
  'Human Interactions with Environments': { from: '#0a2518', via: '#163d28', to: '#2d7a4f' },
  'Interactions Between Organisms':       { from: '#251a05', via: '#3a2a0a', to: '#7a5a10' },
  'Interactions with Environment':        { from: '#082020', via: '#0f3535', to: '#0d7a6a' },
  'Metabolism':                           { from: '#082508', via: '#163816', to: '#2d7a2d' },
  'Organisms':                            { from: '#081525', via: '#153040', to: '#2d5580' },
  'Processes':                            { from: '#251508', via: '#3a2010', to: '#7a4515' },
  // ── Chemistry ─────────────────────────────────────────────────────────────
  'Atomic Structure & Periodic Table':    { from: '#050d25', via: '#0d1f50', to: '#1a3a8a' },
  'Bonding & Structure':                  { from: '#150820', via: '#2a1245', to: '#4a1a7a' },
  'States of Matter':                     { from: '#051820', via: '#0a2d3a', to: '#0d5a6a' },
  'Chemical Reactions':                   { from: '#200808', via: '#3d1010', to: '#7a2020' },
  'Quantitative Chemistry':               { from: '#081808', via: '#153026', to: '#1e5a40' },
  'Organic Chemistry':                    { from: '#1a0f05', via: '#301e08', to: '#5a3810' },
  'Electrochemistry':                     { from: '#1a1500', via: '#302800', to: '#6a5500' },
  'Environmental Chemistry':              { from: '#051a08', via: '#0d3012', to: '#157a25' },
  'Nuclear Chemistry':                    { from: '#1a0505', via: '#2d0a0a', to: '#6a1010' },
  // ── Physics ──────────────────────────────────────────────────────────────
  'Forces & Motion':                      { from: '#050d25', via: '#0d2050', to: '#1a3d8a' },
  'Thermal Physics':                      { from: '#251005', via: '#3d2008', to: '#7a4010' },
  'Waves & Sound':                        { from: '#051825', via: '#0a304a', to: '#0d6080' },
  'Electromagnetic Waves & Optics':       { from: '#1a0520', via: '#30083a', to: '#600870' },
  'Electricity & Magnetism':             { from: '#051520', via: '#0a2840', to: '#0e4a70' },
  'Nuclear & Atomic Physics':            { from: '#200505', via: '#350808', to: '#6a1010' },
  'Space & Astrophysics':                { from: '#030820', via: '#080f3a', to: '#0f1a60' },
  'Pressure & Fluids':                   { from: '#051a20', via: '#0a3040', to: '#0d5a6e' },
}
const DEFAULT_GRADIENT = { from: '#0a0f2e', via: '#1f3674', to: '#274e68' }

const GROUP_ACCENT: Record<string, string> = {
  // ── Biology ───────────────────────────────────────────────────────────────
  'Biotechnology':                        '#4a9ede',
  'Cells':                                '#b06ad4',
  'Evolution':                            '#e05a5a',
  'Human Interactions with Environments': '#4db87a',
  'Interactions Between Organisms':       '#f5c842',
  'Interactions with Environment':        '#2dd4bf',
  'Metabolism':                           '#5cc45c',
  'Organisms':                            '#7aadcf',
  'Processes':                            '#f07830',
  // ── Chemistry ─────────────────────────────────────────────────────────────
  'Atomic Structure & Periodic Table':    '#60a5fa',
  'Bonding & Structure':                  '#c084fc',
  'States of Matter':                     '#22d3ee',
  'Chemical Reactions':                   '#f87171',
  'Quantitative Chemistry':               '#4ade80',
  'Organic Chemistry':                    '#fb923c',
  'Electrochemistry':                     '#facc15',
  'Environmental Chemistry':              '#86efac',
  'Nuclear Chemistry':                    '#f97316',
  // ── Physics ──────────────────────────────────────────────────────────────
  'Forces & Motion':                      '#60a5fa',
  'Thermal Physics':                      '#fb923c',
  'Waves & Sound':                        '#38bdf8',
  'Electromagnetic Waves & Optics':       '#d946ef',
  'Electricity & Magnetism':             '#3b82f6',
  'Nuclear & Atomic Physics':            '#ef4444',
  'Space & Astrophysics':                '#818cf8',
  'Pressure & Fluids':                   '#06b6d4',
}
const DEFAULT_ACCENT = '#adf1c4'

function GateBackground({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.1 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M -100 ${200 + i * 160} Q 360 ${100 + i * 160} 720 ${200 + i * 160} Q 1080 ${300 + i * 160} 1540 ${200 + i * 160}`}
            fill="none"
            stroke="white"
            strokeWidth={1 + i * 0.3}
            style={{
              animation: `wave-move ${5 + i * 1.2 + (index % 3) * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </svg>
      {[...Array(14)].map((_, i) => {
        const x = ((i * 71 + index * 37) % 85) + 5
        const y = ((i * 53 + index * 23) % 75) + 5
        const size = 2 + (i % 3)
        return (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size, height: size,
              left: `${x}%`, top: `${y}%`,
              opacity: 0.05 + (i % 3) * 0.04,
              animation: `float-particle ${3 + i % 4}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        )
      })}
    </div>
  )
}

function TopicGate({
  entry,
  index,
  isActive,
  subjectSlug,
}: {
  entry: TopicEntry
  index: number
  isActive: boolean
  subjectSlug: string
}) {
  const bg = GROUP_GRADIENTS[entry.topicGroup] ?? DEFAULT_GRADIENT
  const accent = GROUP_ACCENT[entry.topicGroup] ?? DEFAULT_ACCENT
  const slug = encodeURIComponent(entry.topicCanonical)
  const gateNum = String(index + 1).padStart(2, '0')

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

      <AnimatePresence>
        {isActive && (
          <motion.div
            key={entry.topicCanonical}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Gate badge */}
            <div
              className="text-xs font-black tracking-[0.3em] mb-6 px-4 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.65)' }}
            >
              TOPIC {gateNum}
            </div>

            {/* Group chip */}
            <div
              className="text-[10px] font-black tracking-[0.25em] px-3 py-1 rounded-full mb-6"
              style={{ background: `${accent}20`, color: accent, border: `1px solid ${accent}40` }}
            >
              {entry.topicGroup.toUpperCase()}
            </div>

            {/* Topic name — large */}
            <h1
              className="font-extrabold text-white leading-none select-none max-w-3xl"
              style={{
                fontSize: 'clamp(36px, 6vw, 88px)',
                letterSpacing: '-2px',
                textShadow: '0 8px 60px rgba(0,0,0,0.5)',
                lineHeight: 1.05,
              }}
            >
              {entry.topicCanonical}
            </h1>

            {/* Count */}
            <div className="mt-5 text-sm font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {entry.count} QUESTION{entry.count !== 1 ? 'S' : ''}
            </div>

            {/* Start button */}
            <Link
              href={`/practice/${subjectSlug}/topic/${slug}`}
              className="mt-10 inline-block font-black text-sm tracking-[0.2em] text-white transition-all hover:opacity-85 hover:scale-105"
              style={{
                background: accent,
                padding: '16px 52px',
                boxShadow: `0 0 40px ${accent}60`,
                color: '#000',
              }}
            >
              START PRACTICE
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {index === 0 && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-8 text-xs font-black tracking-[0.25em] z-10 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.3)' }}
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

export default function TopicPicker({ subjectSlug, topics, backHref }: TopicPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const h = el.clientHeight
      const idx = Math.round(el.scrollTop / h)
      setActiveIdx(Math.max(0, Math.min(idx, topics.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [topics.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(activeIdx + 1)
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goTo(activeIdx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx])

  const goTo = (idx: number) => {
    const el = containerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(idx, topics.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(clamped)
  }

  return (
    <>
      {/* Back link — floats top-left */}
      <Link
        href={backHref}
        className="fixed top-0 left-4 z-50 text-xs font-black tracking-widest transition-opacity hover:opacity-70 flex items-center gap-1.5"
        style={{ color: 'rgba(255,255,255,0.5)', height: NAV_H, lineHeight: `${NAV_H}px` }}
      >
        ← BACK
      </Link>

      {/* Scroll container */}
      <div
        ref={containerRef}
        style={{
          height: `calc(100vh - ${NAV_H}px)`,
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {topics.map((entry, idx) => (
          <TopicGate
            key={entry.topicCanonical}
            entry={entry}
            index={idx}
            isActive={Math.abs(activeIdx - idx) <= 1}
            subjectSlug={subjectSlug}
          />
        ))}
      </div>

      {/* Diamond nav dots — labels always visible, highlight on hover */}
      <nav
        className="fixed z-50 flex-col gap-1.5 hidden md:flex"
        style={{
          left: '2rem',
          top: `calc(50% + ${NAV_H / 2}px)`,
          transform: 'translateY(-50%)',
        }}
      >
        {topics.map((entry, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          const accent = GROUP_ACCENT[entry.topicGroup] ?? DEFAULT_ACCENT
          return (
            <div
              key={entry.topicCanonical}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => goTo(idx)}
              onMouseEnter={() => setHoveredDot(idx)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              {/* Diamond */}
              <div
                style={{
                  width:  isActive ? 10 : isHov ? 9 : 7,
                  height: isActive ? 10 : isHov ? 9 : 7,
                  transform: 'rotate(45deg)',
                  background: isActive ? accent : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: isActive ? `0 0 8px ${accent}` : isHov ? '0 0 5px rgba(255,255,255,0.3)' : 'none',
                }}
              />
              {/* Always-visible label */}
              <span
                style={{
                  color:      isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
                  fontSize:   isActive || isHov ? '11px' : '9.5px',
                  fontWeight: isActive ? 800 : isHov ? 700 : 500,
                  letterSpacing: '0.07em',
                  whiteSpace: 'nowrap',
                  maxWidth: '180px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s, font-size 0.15s',
                  userSelect: 'none',
                  textShadow: isActive ? `0 0 12px ${accent}55` : 'none',
                }}
              >
                {entry.topicCanonical}
              </span>
            </div>
          )
        })}
      </nav>

      {/* Counter */}
      <div
        className="fixed z-50 text-xs font-black tracking-widest hidden md:block"
        style={{ right: '2rem', bottom: '2rem', color: 'rgba(255,255,255,0.3)' }}
      >
        {String(activeIdx + 1).padStart(2, '0')} / {String(topics.length).padStart(2, '0')}
      </div>
    </>
  )
}
