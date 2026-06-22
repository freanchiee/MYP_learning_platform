'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESOURCES, resourceUrl, type Resource } from '@/lib/resources'

const NAV_H = 56

// Distinct gate palettes, cycled per resource (the "different colours" ask).
const THEMES = [
  { from: '#0a0f2e', via: '#1f3674', to: '#274e68', accent: '#7aadcf' }, // blue
  { from: '#0d2e1a', via: '#1e6640', to: '#2d9e5f', accent: '#adf1c4' }, // green
  { from: '#2a1500', via: '#5a3a00', to: '#b87400', accent: '#fbbf24' }, // amber
  { from: '#2a0a0a', via: '#5a1515', to: '#b3282d', accent: '#ff9b9b' }, // red
  { from: '#1a0a2e', via: '#3a1f6e', to: '#6b40c0', accent: '#cdb8ff' }, // violet
  { from: '#07262a', via: '#0c5e6e', to: '#16a3a3', accent: '#8ce8e8' }, // teal
  { from: '#2a1500', via: '#7a3a0c', to: '#e07a16', accent: '#ffc98c' }, // orange
]
const themeFor = (i: number) => THEMES[i % THEMES.length]

function GateBackground({ index, accent }: { index: number; accent: string }) {
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
            width: size, height: size, right: -size / 3, top: -size / 3,
            border: `1px solid ${accent}1f`,
            animation: `slow-spin ${10 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => {
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
  resource, index, isActive, previewOpen, onTogglePreview,
}: {
  resource: Resource
  index: number
  isActive: boolean
  previewOpen: boolean
  onTogglePreview: () => void
}) {
  const theme = themeFor(index)
  const gateNum = String(index + 1).padStart(2, '0')
  const href = resourceUrl(resource)

  return (
    <section
      style={{
        height: `calc(100vh - ${NAV_H}px)`,
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(145deg, ${theme.from} 0%, ${theme.via} 55%, ${theme.to} 100%)`,
        flexShrink: 0,
      }}
    >
      <GateBackground index={index} accent={theme.accent} />

      {/* ── Centre: gate content ── */}
      <AnimatePresence>
        {isActive && !previewOpen && (
          <motion.div
            key={resource.host}
            className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div
              className="text-xs font-black tracking-[0.3em] mb-7 px-4 py-1.5"
              style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.7)' }}
            >
              RESOURCE {gateNum}
            </div>

            <h1
              className="font-extrabold text-white leading-[0.95] select-none max-w-5xl"
              style={{ fontSize: 'clamp(40px, 7vw, 104px)', letterSpacing: '-0.03em', textShadow: '0 8px 60px rgba(0,0,0,0.4)' }}
            >
              {resource.title}
            </h1>

            <div className="mt-5 font-black tracking-[0.35em] text-sm md:text-base" style={{ color: `${theme.accent}dd` }}>
              {resource.category.toUpperCase()} · FREE
            </div>

            <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {resource.desc}
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
              <button
                onClick={onTogglePreview}
                className="inline-flex items-center gap-2 font-black text-sm tracking-[0.15em] transition-all hover:opacity-90"
                style={{ background: theme.accent, color: '#0a0f2e', padding: '15px 40px', boxShadow: `0 0 40px ${theme.accent}55` }}
              >
                PREVIEW ▾
              </button>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-black text-sm tracking-[0.15em] transition-all hover:opacity-90"
                style={{ padding: '15px 32px', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                OPEN ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Embedded preview frame (the "dropdown frame") ── */}
      <AnimatePresence>
        {isActive && previewOpen && (
          <motion.div
            className="absolute z-30 flex flex-col"
            style={{ inset: '3.5% 4%', borderRadius: 16, overflow: 'hidden', background: '#000', boxShadow: '0 30px 90px rgba(0,0,0,0.55)', border: '1px solid rgba(255,255,255,0.18)' }}
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Frame header */}
            <div
              className="flex items-center justify-between px-4 py-2.5 shrink-0"
              style={{ background: 'rgba(10,15,30,0.92)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                </span>
                <span className="text-xs font-bold text-white/85 truncate">{resource.title}</span>
                <span className="hidden sm:block text-[11px] font-mono text-white/35 truncate">{resource.host}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-black tracking-widest text-white/70 hover:text-white px-3 py-1.5"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                >
                  OPEN ↗
                </a>
                <button
                  onClick={onTogglePreview}
                  className="text-sm font-black text-white/70 hover:text-white px-2.5 py-1"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </div>
            </div>
            {/* The framed resource */}
            <iframe
              src={href}
              title={resource.title}
              className="flex-1 w-full bg-white"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              referrerPolicy="no-referrer"
            />
            <div className="px-4 py-1.5 text-[10px] text-white/40 shrink-0" style={{ background: 'rgba(10,15,30,0.92)' }}>
              Preview blank? Some tools block embedding — use OPEN ↗ to launch in a new tab.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* host id, bottom-left */}
      <div className="absolute bottom-7 left-8 text-xs font-mono z-10" style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.1em' }}>
        {resource.host}
      </div>

      {index === 0 && !previewOpen && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-7 text-xs font-black tracking-[0.25em] z-10 flex flex-col items-center gap-2"
          style={{ color: 'rgba(255,255,255,0.35)' }}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL TO EXPLORE
          <div style={{ width: 1, height: 30, background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      )}
    </section>
  )
}

export default function ResourceGates() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [previewIdx, setPreviewIdx] = useState<number | null>(null)
  const [hoveredDot, setHoveredDot] = useState<number | null>(null)
  const activeRef = useRef(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const idx = Math.max(0, Math.min(Math.round(el.scrollTop / el.clientHeight), RESOURCES.length - 1))
      if (idx === activeRef.current) return // ignore sub-gate scrolls (don't nuke an open preview)
      activeRef.current = idx
      setActiveIdx(idx)
      setPreviewIdx(null) // close preview only when the gate actually changes
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (idx: number) => {
    const el = containerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(idx, RESOURCES.length - 1))
    el.scrollTo({ top: clamped * el.clientHeight, behavior: 'smooth' })
    activeRef.current = clamped
    setActiveIdx(clamped)
    setPreviewIdx(null)
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
          background: '#0a0f2e',
        }}
      >
        {RESOURCES.map((r, idx) => (
          <Gate
            key={r.host}
            resource={r}
            index={idx}
            isActive={Math.abs(activeIdx - idx) <= 1}
            previewOpen={previewIdx === idx}
            onTogglePreview={() => setPreviewIdx((p) => (p === idx ? null : idx))}
          />
        ))}
      </div>

      {/* Diamond nav rail — labels always visible, highlight on hover */}
      <nav
        className="fixed z-50 flex-col gap-1.5 hidden md:flex"
        style={{ left: '2rem', top: `calc(50% + ${NAV_H / 2}px)`, transform: 'translateY(-50%)' }}
      >
        {RESOURCES.map((r, idx) => {
          const isActive = idx === activeIdx
          const isHov = hoveredDot === idx
          const accent = themeFor(idx).accent
          return (
            <div
              key={r.host}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => goTo(idx)}
              onMouseEnter={() => setHoveredDot(idx)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              <div
                style={{
                  width: isActive ? 10 : isHov ? 9 : 7,
                  height: isActive ? 10 : isHov ? 9 : 7,
                  transform: 'rotate(45deg)',
                  background: isActive ? accent : isHov ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
                  border: isActive ? 'none' : '1px solid rgba(255,255,255,0.35)',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                  boxShadow: isActive ? `0 0 8px ${accent}` : 'none',
                }}
              />
              <span
                style={{
                  color: isActive ? 'rgba(255,255,255,0.95)' : isHov ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.3)',
                  fontSize: isActive || isHov ? '11px' : '9.5px',
                  fontWeight: isActive ? 800 : isHov ? 700 : 500,
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                  maxWidth: isActive || isHov ? 220 : 150,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  transition: 'color 0.2s, font-size 0.15s',
                  userSelect: 'none',
                }}
              >
                {r.title}
              </span>
            </div>
          )
        })}
      </nav>

      <div
        className="fixed z-50 text-xs font-black tracking-widest hidden md:block"
        style={{ right: '2rem', bottom: '2rem', color: 'rgba(255,255,255,0.3)' }}
      >
        {String(activeIdx + 1).padStart(2, '0')} / {String(RESOURCES.length).padStart(2, '0')}
      </div>
    </>
  )
}
