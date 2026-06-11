'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CritPickerProps {
  subjectSlug: string
  counts: Record<string, number>
  backHref: string
}

const NAV_H = 56

const CRIT_META = [
  {
    crit: 'A',
    label: 'Knowing & Understanding',
    description: 'Recall, define, explain and apply scientific knowledge.',
    accent: '#4a9ede',
    from: '#061525', via: '#0d2a4a', to: '#1f4a80',
  },
  {
    crit: 'B',
    label: 'Inquiring & Designing',
    description: 'Formulate research questions, state variables, design experiments.',
    accent: '#5cc45c',
    from: '#082508', via: '#163816', to: '#2d7a2d',
  },
  {
    crit: 'C',
    label: 'Processing & Evaluating',
    description: 'Collect, organise and interpret data. Evaluate conclusions.',
    accent: '#f5c842',
    from: '#251a05', via: '#3a2a0a', to: '#7a5a10',
  },
  {
    crit: 'D',
    label: 'Reflecting on Impacts',
    description: 'Discuss real-world applications and reflect on ethical impacts.',
    accent: '#b06ad4',
    from: '#150a25', via: '#2a1245', to: '#5a1f80',
  },
]

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

export default function CritPicker({ subjectSlug, counts, backHref }: CritPickerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const h = el.clientHeight
      const idx = Math.round(el.scrollTop / h)
      setActiveIdx(Math.max(0, Math.min(idx, CRIT_META.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

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
    const clamped = Math.max(0, Math.min(idx, CRIT_META.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(clamped)
  }

  return (
    <>
      {/* Back link */}
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
        {CRIT_META.map((c, idx) => {
          const count = counts[c.crit] ?? 0
          const isActive = Math.abs(activeIdx - idx) <= 1

          return (
            <section
              key={c.crit}
              style={{
                height: `calc(100vh - ${NAV_H}px)`,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(145deg, ${c.from} 0%, ${c.via} 55%, ${c.to} 100%)`,
                flexShrink: 0,
              }}
            >
              <GateBackground index={idx} />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={c.crit}
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
                      CRITERION
                    </div>

                    {/* Big letter */}
                    <div
                      className="font-extrabold text-white leading-none select-none"
                      style={{
                        fontSize: 'clamp(120px, 22vw, 260px)',
                        letterSpacing: '-8px',
                        textShadow: '0 8px 80px rgba(0,0,0,0.5)',
                        color: c.accent,
                        filter: `drop-shadow(0 0 60px ${c.accent}60)`,
                      }}
                    >
                      {c.crit}
                    </div>

                    {/* Label */}
                    <div
                      className="mt-2 font-black tracking-[0.2em] text-base md:text-xl"
                      style={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      {c.label.toUpperCase()}
                    </div>

                    {/* Description */}
                    <div
                      className="mt-3 text-sm max-w-sm"
                      style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Georgia, serif' }}
                    >
                      {c.description}
                    </div>

                    {/* Count */}
                    <div className="mt-4 text-xs font-bold tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      {count} QUESTION{count !== 1 ? 'S' : ''}
                    </div>

                    {/* Start button */}
                    <Link
                      href={`/practice/${subjectSlug}/crit/${c.crit}`}
                      className="mt-10 inline-block font-black text-sm tracking-[0.2em] transition-all hover:opacity-85 hover:scale-105"
                      style={{
                        background: c.accent,
                        padding: '16px 52px',
                        boxShadow: `0 0 40px ${c.accent}60`,
                        color: '#000',
                      }}
                    >
                      START PRACTICE
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {idx === 0 && (
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
        })}
      </div>

      {/* Diamond nav dots — labels always visible, highlight on hover */}
      <nav
        className="fixed z-50 flex-col gap-3 hidden md:flex"
        style={{
          left: '2rem',
          top: `calc(50% + ${NAV_H / 2}px)`,
          transform: 'translateY(-50%)',
        }}
      >
        {CRIT_META.map((c, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          return (
            <div
              key={c.crit}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => goTo(idx)}
              onMouseEnter={() => setHoveredDot(idx)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              {/* Diamond */}
              <div
                style={{
                  width:  isActive ? 12 : isHov ? 10 : 8,
                  height: isActive ? 12 : isHov ? 10 : 8,
                  transform: 'rotate(45deg)',
                  background: isActive ? c.accent : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: isActive ? `0 0 10px ${c.accent}` : isHov ? '0 0 6px rgba(255,255,255,0.3)' : 'none',
                }}
              />
              {/* Always-visible label */}
              <span
                style={{
                  color:      isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
                  fontSize:   isActive || isHov ? '12px' : '10.5px',
                  fontWeight: isActive ? 900 : isHov ? 700 : 600,
                  letterSpacing: '0.2em',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, font-size 0.15s',
                  userSelect: 'none',
                  textShadow: isActive ? `0 0 14px ${c.accent}66` : 'none',
                }}
              >
                CRIT {c.crit}
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
        {String(activeIdx + 1).padStart(2, '0')} / {String(CRIT_META.length).padStart(2, '0')}
      </div>
    </>
  )
}
