'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const NAV_H = 56

interface Paper {
  id: string
  subject: string
  session: string
  year: number
  total_marks: number
  duration_minutes: number
  is_published: boolean
}

interface PaperGroup {
  base: Paper
  variants: Paper[]
}

interface Props {
  papers: Paper[]
  completedPapers: Set<string>
  inProgressPapers: Set<string>
}

const BG: Record<string, { from: string; via: string; to: string }> = {
  Physics:   { from: '#0a0f2e', via: '#1f3674', to: '#274e68' },
  Chemistry: { from: '#1a1000', via: '#332200', to: '#664400' },
  Biology:   { from: '#0d2e1a', via: '#1e6640', to: '#2d9e5f' },
  Combined:  { from: '#1a0a0a', via: '#3d1515', to: '#c3282d' },
}
const DEFAULT_BG = { from: '#0a0f2e', via: '#1f3674', to: '#274e68' }

const ACCENT: Record<string, string> = {
  Physics:   '#7aadcf',
  Chemistry: '#facc15',
  Biology:   '#adf1c4',
  Combined:  '#ff7b7b',
}
const DEFAULT_ACCENT = '#adf1c4'

function sessionFull(s: string) {
  const l = s.toLowerCase()
  if (l.startsWith('may'))      return 'MAY'
  if (l.startsWith('nov'))      return 'NOV'
  if (l.startsWith('practice')) return 'PRACTICE'
  return s.toUpperCase()
}

function getBaseId(id: string): string {
  return id.replace(/-v\d+$/, '')
}

function groupPapers(papers: Paper[]): PaperGroup[] {
  const baseMap = new Map<string, Paper>()
  const variantMap = new Map<string, Paper[]>()

  for (const p of papers) {
    const baseId = getBaseId(p.id)
    if (p.id === baseId) {
      baseMap.set(baseId, p)
    } else {
      const list = variantMap.get(baseId) ?? []
      list.push(p)
      variantMap.set(baseId, list)
    }
  }

  return Array.from(baseMap.entries()).map(([baseId, base]) => ({
    base,
    variants: variantMap.get(baseId) ?? [],
  }))
}

function GateBackground({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
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

function Gate({
  group, index, isActive, completedPapers, inProgressPapers,
}: {
  group: PaperGroup
  index: number
  isActive: boolean
  completedPapers: Set<string>
  inProgressPapers: Set<string>
}) {
  const { base, variants } = group
  const bg     = BG[base.subject]     ?? DEFAULT_BG
  const accent = ACCENT[base.subject] ?? DEFAULT_ACCENT
  const gateNum = String(index + 1).padStart(2, '0')
  const sess = sessionFull(base.session)
  const isCompleted  = completedPapers.has(base.id)
  const isInProg = inProgressPapers.has(base.id) && !isCompleted

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

      <AnimatePresence>
        {isActive && (
          <motion.div
            key={base.id}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
            style={{ paddingBottom: variants.length > 0 ? '7rem' : '0' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div
              className="text-xs font-black tracking-[0.3em] mb-8 px-4 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.7)' }}
            >
              GATE {gateNum}
            </div>

            <div
              className="font-extrabold text-white leading-none select-none"
              style={{
                fontSize: 'clamp(90px, 16vw, 200px)',
                letterSpacing: '-6px',
                textShadow: '0 8px 60px rgba(0,0,0,0.4)',
              }}
            >
              {base.year}
            </div>

            <div
              className="mt-4 font-black tracking-[0.35em] text-sm md:text-base"
              style={{ color: `${accent}cc` }}
            >
              {base.subject.toUpperCase()} · {sess}
            </div>

            <div className="mt-3 text-xs tracking-widest font-bold" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {base.total_marks} MARKS · {base.duration_minutes} MIN · 4 CRITERIA
            </div>

            <Link
              href={`/exam/${base.id}`}
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

      {/* ── Variant strip (Set 1 / Set 2) ── */}
      {variants.length > 0 && isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-0"
          style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* Label */}
          <span
            className="text-[10px] font-black tracking-[0.3em] px-5 py-4 shrink-0"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            PRACTICE SETS
          </span>

          {/* Horizontal scroll strip */}
          <div className="flex-1 overflow-x-auto py-3 pr-6" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-2 w-max">
              {variants.map((v, i) => {
                const isVDone = completedPapers.has(v.id)
                const isVProg = inProgressPapers.has(v.id) && !isVDone
                return (
                  <Link
                    key={v.id}
                    href={`/exam/${v.id}`}
                    className="flex items-center gap-2.5 px-4 py-2 shrink-0 transition-all hover:opacity-90"
                    style={{
                      background: isVDone
                        ? 'rgba(173,241,196,0.12)'
                        : 'rgba(255,255,255,0.07)',
                      border: `1px solid ${isVDone ? 'rgba(173,241,196,0.3)' : 'rgba(255,255,255,0.15)'}`,
                    }}
                  >
                    <span
                      className="text-[9px] font-black tracking-[0.25em]"
                      style={{ color: isVDone ? '#adf1c4' : 'rgba(255,255,255,0.5)' }}
                    >
                      {isVDone ? '✓' : isVProg ? '●' : '○'}
                    </span>
                    <span
                      className="text-xs font-black tracking-widest"
                      style={{ color: isVDone ? '#adf1c4' : 'rgba(255,255,255,0.75)' }}
                    >
                      SET {i + 1}
                    </span>
                    <span
                      className="text-[10px] font-mono"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                    >
                      {v.total_marks}M
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </motion.div>
      )}

      <div
        className="absolute bottom-8 left-8 text-xs font-mono z-10"
        style={{ color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', bottom: variants.length > 0 ? '5.5rem' : '2rem' }}
      >
        {base.id}
      </div>

      {index === 0 && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 text-xs font-black tracking-[0.25em] z-10 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.35)', bottom: variants.length > 0 ? '6rem' : '2rem' }}
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

export default function PapersGates({ papers, completedPapers, inProgressPapers }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  const groups = groupPapers(papers)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const h = el.clientHeight
      const idx = Math.round(el.scrollTop / h)
      setActiveIdx(Math.max(0, Math.min(idx, groups.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [groups.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(activeIdx + 1)
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  goTo(activeIdx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIdx]) // eslint-disable-line react-hooks/exhaustive-deps

  const goTo = (idx: number) => {
    const el = containerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(idx, groups.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(clamped)
  }

  if (groups.length === 0) {
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
      <div
        ref={containerRef}
        style={{
          height: `calc(100vh - ${NAV_H}px)`,
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
        }}
      >
        {groups.map((group, idx) => (
          <Gate
            key={group.base.id}
            group={group}
            index={idx}
            isActive={Math.abs(activeIdx - idx) <= 1}
            completedPapers={completedPapers}
            inProgressPapers={inProgressPapers}
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
        {groups.map((group, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          const dotAccent = ACCENT[group.base.subject] ?? DEFAULT_ACCENT
          const label = `${group.base.year} ${sessionFull(group.base.session)}${group.variants.length > 0 ? ` +${group.variants.length}` : ''}`
          return (
            <div
              key={group.base.id}
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
                  background: isActive ? dotAccent : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: isActive ? `0 0 8px ${dotAccent}` : isHov ? '0 0 5px rgba(255,255,255,0.3)' : 'none',
                }}
              />
              {/* Always-visible label */}
              <span
                style={{
                  color:      isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
                  fontSize:   isActive || isHov ? '11px' : '9.5px',
                  fontWeight: isActive ? 800 : isHov ? 700 : 500,
                  letterSpacing: '0.08em',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, font-size 0.15s',
                  userSelect: 'none',
                  textShadow: isActive ? `0 0 10px ${dotAccent}55` : 'none',
                }}
              >
                {label}
              </span>
            </div>
          )
        })}
      </nav>

      <div
        className="fixed z-50 text-xs font-black tracking-widest hidden md:block"
        style={{ right: '2rem', bottom: '2rem', color: 'rgba(255,255,255,0.3)' }}
      >
        {String(activeIdx + 1).padStart(2, '0')} / {String(groups.length).padStart(2, '0')}
      </div>
    </>
  )
}
