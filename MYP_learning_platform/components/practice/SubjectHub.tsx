'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface SubjectHubProps {
  subject: string
  subjectSlug: string
  color: { from: string; via: string; to: string }
  examHref: string
  questionCount: number
}

const NAV_H = 56

interface ModeGate {
  gateLabel: string
  title: string
  subtitle: string
  description: string
  href: string
  accent: string
  from: string
  via: string
  to: string
}

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
      {[280, 200, 130].map((size, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size, height: size,
            right: -size / 3, top: -size / 3,
            border: '1px solid rgba(173,241,196,0.06)',
            animation: `slow-spin ${10 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
          }}
        />
      ))}
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

export default function SubjectHub({
  subject,
  subjectSlug,
  color,
  examHref,
  questionCount,
}: SubjectHubProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  const modes: ModeGate[] = [
    {
      gateLabel: 'MODE 01',
      title: 'TOPIC\nREVISION',
      subtitle: 'Filter by concept',
      description: `Drill down into specific topics. Practice questions from across all ${subject} papers, grouped by concept.`,
      href: `/practice/${subjectSlug}/topic`,
      accent: '#adf1c4',
      from: color.from,
      via: color.via,
      to: color.to,
    },
    {
      gateLabel: 'MODE 02',
      title: 'CRITERIA\nREVISION',
      subtitle: 'A · B · C · D',
      description: 'Target a specific IB criterion. Build exam technique for Knowing & Understanding, Inquiring, Processing, or Reflecting.',
      href: `/practice/${subjectSlug}/crit`,
      accent: '#7aadcf',
      from: '#061525',
      via: '#0d2a4a',
      to: '#1f4a80',
    },
    {
      gateLabel: 'MODE 03',
      title: 'SIMULATED\nEXAM',
      subtitle: 'Full papers · Timed · Graded',
      description: `Authentic exam conditions with AI marking. ${questionCount}+ questions across all sessions from 2016–2025.`,
      href: examHref,
      accent: '#ff7b7b',
      from: '#1a0505',
      via: '#3d1010',
      to: '#7a1a1a',
    },
  ]

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const h = el.clientHeight
      const idx = Math.round(el.scrollTop / h)
      setActiveIdx(Math.max(0, Math.min(idx, modes.length - 1)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const clamped = Math.max(0, Math.min(idx, modes.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(clamped)
  }

  return (
    <>
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
        {modes.map((mode, idx) => {
          const isActive = Math.abs(activeIdx - idx) <= 1

          return (
            <section
              key={mode.gateLabel}
              style={{
                height: `calc(100vh - ${NAV_H}px)`,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(145deg, ${mode.from} 0%, ${mode.via} 55%, ${mode.to} 100%)`,
                flexShrink: 0,
              }}
            >
              <GateBackground index={idx} />

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={mode.gateLabel}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                  >
                    {/* Subject label */}
                    <div
                      className="text-[10px] font-black tracking-[0.4em] mb-5"
                      style={{ color: 'rgba(255,255,255,0.35)' }}
                    >
                      MYP SCIENCES · {subject.toUpperCase()}
                    </div>

                    {/* Gate badge */}
                    <div
                      className="text-xs font-black tracking-[0.3em] mb-8 px-4 py-1.5"
                      style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.65)' }}
                    >
                      {mode.gateLabel}
                    </div>

                    {/* Big bold title */}
                    <h1
                      className="font-extrabold text-white leading-none select-none whitespace-pre-line"
                      style={{
                        fontSize: 'clamp(52px, 10vw, 140px)',
                        letterSpacing: '-4px',
                        textShadow: '0 8px 60px rgba(0,0,0,0.4)',
                        lineHeight: 0.95,
                      }}
                    >
                      {mode.title}
                    </h1>

                    {/* Subtitle */}
                    <div
                      className="mt-6 font-black tracking-[0.3em] text-sm"
                      style={{ color: mode.accent }}
                    >
                      {mode.subtitle.toUpperCase()}
                    </div>

                    {/* Description */}
                    <p
                      className="mt-4 text-sm max-w-md leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Georgia, serif' }}
                    >
                      {mode.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href={mode.href}
                      className="mt-10 inline-block font-black text-sm tracking-[0.2em] text-black transition-all hover:opacity-85 hover:scale-105"
                      style={{
                        background: mode.accent,
                        padding: '16px 52px',
                        boxShadow: `0 0 40px ${mode.accent}60`,
                      }}
                    >
                      EXPLORE
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {idx === 0 && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-8 text-xs font-black tracking-[0.25em] z-10 flex flex-col items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.25)' }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  SCROLL TO EXPLORE
                  <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
                </motion.div>
              )}
            </section>
          )
        })}
      </div>

      {/* Diamond nav dots — labels always visible, highlight on hover */}
      <nav
        className="fixed z-50 flex-col gap-4 hidden md:flex"
        style={{
          left: '2rem',
          top: `calc(50% + ${NAV_H / 2}px)`,
          transform: 'translateY(-50%)',
        }}
      >
        {modes.map((mode, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          return (
            <div
              key={mode.gateLabel}
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
                  background: isActive ? mode.accent : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: isActive ? `0 0 10px ${mode.accent}` : isHov ? '0 0 6px rgba(255,255,255,0.3)' : 'none',
                }}
              />
              {/* Always-visible label */}
              <span
                style={{
                  color:      isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
                  fontSize:   isActive || isHov ? '11px' : '9.5px',
                  fontWeight: isActive ? 900 : isHov ? 700 : 600,
                  letterSpacing: '0.15em',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, font-size 0.15s',
                  userSelect: 'none',
                  textShadow: isActive ? `0 0 12px ${mode.accent}55` : 'none',
                }}
              >
                {mode.title.replace('\n', ' ')}
              </span>
            </div>
          )
        })}
      </nav>

      {/* Counter */}
      <div
        className="fixed z-50 text-xs font-black tracking-widest hidden md:block"
        style={{ right: '2rem', bottom: '2rem', color: 'rgba(255,255,255,0.25)' }}
      >
        {String(activeIdx + 1).padStart(2, '0')} / {String(modes.length).padStart(2, '0')}
      </div>
    </>
  )
}
