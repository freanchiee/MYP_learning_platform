'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { DESIGN_CYCLE } from '@/data/design/cycle'
import { DESIGN_PROJECTS } from '@/data/design/projects'

const NAV_H = 56

function GateBackground({ index }: { index: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.1 }}>
        {[0, 1, 2, 3].map((i) => (
          <path
            key={i}
            d={`M -100 ${200 + i * 160} Q 360 ${100 + i * 160} 720 ${200 + i * 160} Q 1080 ${300 + i * 160} 1540 ${200 + i * 160}`}
            fill="none"
            stroke="white"
            strokeWidth={1 + i * 0.3}
            style={{ animation: `wave-move ${5 + i * 1.2 + (index % 3) * 0.5}s ease-in-out infinite alternate`, animationDelay: `${i * 0.8}s` }}
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
              width: size, height: size, left: `${x}%`, top: `${y}%`,
              opacity: 0.05 + (i % 3) * 0.04,
              animation: `float-particle ${3 + (i % 4)}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.35}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export default function DesignHub() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)

  // Gate 0 = the design cycle; gates 1..N = projects.
  const gates = [{ id: '__cycle__' }, ...DESIGN_PROJECTS]

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => setActiveIdx(Math.max(0, Math.min(Math.round(el.scrollTop / el.clientHeight), gates.length - 1)))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goTo = (i: number) => {
    const el = containerRef.current
    if (!el) return
    const c = Math.max(0, Math.min(i, gates.length - 1))
    el.scrollTo({ top: c * el.clientHeight, behavior: 'smooth' })
    setActiveIdx(c)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') goTo(activeIdx + 1)
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') goTo(activeIdx - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx])

  return (
    <>
      <div
        ref={containerRef}
        style={{ height: `calc(100vh - ${NAV_H}px)`, overflowY: 'scroll', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth', background: 'var(--bg)' }}
      >
        {gates.map((g, idx) => {
          const isActive = Math.abs(activeIdx - idx) <= 1
          const isCycle = idx === 0
          const proj = isCycle ? null : DESIGN_PROJECTS[idx - 1]
          const grad = isCycle
            ? { from: '#0a0a14', via: '#1a1430', to: '#2a1f4a' }
            : proj!.accent
          return (
            <section
              key={g.id}
              style={{
                height: `calc(100vh - ${NAV_H}px)`,
                scrollSnapAlign: 'start',
                scrollSnapStop: 'always',
                position: 'relative',
                overflow: 'hidden',
                background: `linear-gradient(145deg, ${grad.from} 0%, ${grad.via} 55%, ${grad.to} 100%)`,
                flexShrink: 0,
              }}
            >
              <GateBackground index={idx} />
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key={g.id}
                    className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    {isCycle ? <CycleGate onBrowse={() => goTo(1)} /> : <ProjectGate proj={proj!} num={idx} total={DESIGN_PROJECTS.length} />}
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
                  SCROLL FOR PROJECTS
                  <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.15)' }} />
                </motion.div>
              )}
            </section>
          )
        })}
      </div>

      {/* Diamond nav dots */}
      <nav className="fixed z-50 flex-col gap-4 hidden md:flex" style={{ left: '2rem', top: `calc(50% + ${NAV_H / 2}px)`, transform: 'translateY(-50%)' }}>
        {gates.map((g, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          const label = idx === 0 ? 'THE DESIGN CYCLE' : DESIGN_PROJECTS[idx - 1].title
          return (
            <div key={g.id} className="flex items-center gap-2 cursor-pointer" onClick={() => goTo(idx)} onMouseEnter={() => setHoveredDot(idx)} onMouseLeave={() => setHoveredDot(null)}>
              <div
                style={{
                  width: isActive ? 12 : isHov ? 10 : 8, height: isActive ? 12 : isHov ? 10 : 8,
                  transform: 'rotate(45deg)',
                  background: isActive ? '#fff' : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s', flexShrink: 0,
                  boxShadow: isActive ? '0 0 10px #fff' : 'none',
                }}
              />
              <span
                style={{
                  color: isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.28)',
                  fontSize: isActive || isHov ? '11px' : '9.5px',
                  fontWeight: isActive ? 900 : isHov ? 700 : 600,
                  letterSpacing: '0.15em', whiteSpace: 'nowrap', transition: 'color 0.2s, font-size 0.15s', userSelect: 'none',
                }}
              >
                {label}
              </span>
            </div>
          )
        })}
      </nav>

      <div className="fixed z-50 text-xs font-black tracking-widest hidden md:block" style={{ right: '2rem', bottom: '2rem', color: 'rgba(255,255,255,0.25)' }}>
        {String(activeIdx + 1).padStart(2, '0')} / {String(gates.length).padStart(2, '0')}
      </div>
    </>
  )
}

function CycleGate({ onBrowse }: { onBrowse: () => void }) {
  return (
    <>
      <div className="text-[10px] font-black tracking-[0.4em] mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
        MYP DESIGN · YEARS 4–5 · SELF-STUDY
      </div>
      <h1 className="font-extrabold text-white leading-none select-none" style={{ fontSize: 'clamp(44px, 9vw, 120px)', letterSpacing: '-4px', textShadow: '0 8px 60px rgba(0,0,0,0.4)' }}>
        THE DESIGN<br />CYCLE
      </h1>
      <p className="mt-6 text-sm max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Georgia, serif' }}>
        No exam, no mark scheme. You're assessed on <strong>four criteria</strong>, each scored 1–8. Study a worked project, then rebuild it for your own brief.
      </p>

      <div className="mt-8 flex flex-wrap items-stretch justify-center gap-2 max-w-3xl">
        {DESIGN_CYCLE.map((c, i) => (
          <div key={c.key} className="flex items-center gap-2">
            <div className="rounded-xl px-4 py-3 text-left" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', minWidth: 130 }}>
              <div className="text-white font-black text-lg">{c.key}</div>
              <div className="text-[11px] font-bold leading-tight" style={{ color: 'rgba(255,255,255,0.85)' }}>{c.phase}</div>
            </div>
            {i < DESIGN_CYCLE.length - 1 && <span style={{ color: 'rgba(255,255,255,0.3)' }}>→</span>}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/design/${DESIGN_PROJECTS[0].id}`}
          className="inline-block font-black text-sm tracking-[0.2em] text-black transition-all hover:scale-105"
          style={{ background: '#fff', padding: '15px 44px', boxShadow: '0 0 40px rgba(255,255,255,0.35)' }}
        >
          START THE COURSE
        </Link>
        <button
          onClick={onBrowse}
          className="inline-block font-black text-sm tracking-[0.2em] text-white transition-all hover:scale-105"
          style={{ border: '1px solid rgba(255,255,255,0.5)', padding: '15px 44px' }}
        >
          BROWSE PROJECTS
        </button>
      </div>
    </>
  )
}

function ProjectGate({ proj, num, total }: { proj: (typeof DESIGN_PROJECTS)[number]; num: number; total: number }) {
  return (
    <>
      <div className="text-xs font-black tracking-[0.3em] mb-6 px-4 py-1.5" style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'rgba(255,255,255,0.65)' }}>
        PROJECT {String(num).padStart(2, '0')} / {String(total).padStart(2, '0')} · {proj.designType.toUpperCase()}
      </div>
      <h1 className="font-extrabold text-white leading-none select-none" style={{ fontSize: 'clamp(40px, 7vw, 96px)', letterSpacing: '-3px', textShadow: '0 8px 60px rgba(0,0,0,0.4)', lineHeight: 0.95 }}>
        {proj.title}
      </h1>
      <p className="mt-5 text-base max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Georgia, serif' }}>
        {proj.blurb}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {[`🌍 ${proj.globalContext}`, `🔑 ${proj.keyConcept}`].map((t) => (
          <span key={t} className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>
            {t}
          </span>
        ))}
      </div>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link href={`/design/${proj.id}?mode=study`} className="inline-block font-black text-sm tracking-[0.2em] text-black transition-all hover:scale-105" style={{ background: '#fff', padding: '14px 40px' }}>
          STUDY EXEMPLAR
        </Link>
        <Link href={`/design/${proj.id}?mode=build`} className="inline-block font-black text-sm tracking-[0.2em] text-white transition-all hover:scale-105" style={{ border: '1px solid rgba(255,255,255,0.5)', padding: '14px 40px' }}>
          BUILD YOUR OWN
        </Link>
      </div>
    </>
  )
}
