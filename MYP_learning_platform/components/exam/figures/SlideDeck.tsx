'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Reusable paged-media artefact (I&S stimulus).
 * Renders a sequence of "pages"/slides — each an optional title plus a body paragraph
 * and/or bullet list — as a clean slideshow with prev/next controls, clickable page
 * dots and a page counter. Evokes a film-reel / website-pages / notebook feel.
 *
 * Used for: museum exhibition plans, student notebooks, redevelopment-project websites,
 * video transcripts. Smooth directional page change (framer-motion).
 *
 * Theme-aware chrome (CSS var tokens); fixed light backing + figure-surface so it stays
 * legible on the dark Glass theme. Keyboard (←/→) navigable.
 */
export interface SlideDeckSlide {
  title?: string
  body?: string
  bullets?: string[]
}
export interface SlideDeckData {
  title?: string
  source?: string
  slides: SlideDeckSlide[]
}

export default function SlideDeck({ data }: { data: SlideDeckData }) {
  const slides = data.slides ?? []
  const count = slides.length
  const [page, setPage] = useState(0)
  // direction: +1 = forward, -1 = back (drives the slide-in animation)
  const [dir, setDir] = useState(1)

  const clamp = (n: number) => Math.max(0, Math.min(count - 1, n))

  const go = useCallback(
    (next: number) => {
      const target = clamp(next)
      setDir(target >= page ? 1 : -1)
      setPage(target)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, count],
  )

  const onKey = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(page + 1) }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(page - 1) }
    },
    [go, page],
  )

  // keep page in range if data changes
  useEffect(() => { setPage((p) => Math.max(0, Math.min(count - 1, p))) }, [count])

  if (count === 0) {
    return (
      <div
        className="figure-surface w-full"
        style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)', color: '#64748b' }}
      >
        No slides to display.
      </div>
    )
  }

  const slide = slides[page]
  const atStart = page === 0
  const atEnd = page === count - 1

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
      role="group"
      aria-roledescription="carousel"
      aria-label={data.title ?? 'slide deck'}
      tabIndex={0}
      onKeyDown={onKey}
    >
      {/* Header */}
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{data.title}</h3>}
        {data.source && (
          <span className="text-[11px]" style={{ color: '#64748b' }}>
            Source: {data.source} · <span className="font-mono">interactive</span>
          </span>
        )}
      </div>

      {/* Stage — fixed-ratio "screen" with film-reel rails */}
      <div
        className="relative overflow-hidden"
        style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-control)' }}
      >
        {/* top + bottom sprocket rails (film-reel motif) */}
        <Sprockets edge="top" />
        <div className="relative px-5 py-5 sm:px-8 sm:py-7" style={{ minHeight: 220 }}>
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={page}
              custom={dir}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* page number chip */}
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[11px] font-bold"
                  style={{ background: ACCENT, color: '#fff' }}
                >
                  {page + 1}
                </span>
                {slide.title && (
                  <h4 className="text-[15px] font-extrabold leading-tight tracking-tight" style={{ color: '#0f172a' }}>
                    {slide.title}
                  </h4>
                )}
              </div>

              {slide.body && (
                <p className="mb-3 text-[14px] leading-relaxed" style={{ color: '#334155' }}>
                  {slide.body}
                </p>
              )}

              {slide.bullets && slide.bullets.length > 0 && (
                <ul className="space-y-1.5">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] leading-relaxed" style={{ color: '#334155' }}>
                      <span
                        className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: ACCENT }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <Sprockets edge="bottom" />

        {/* Prev / Next arrow overlays */}
        <NavArrow
          dir="prev"
          disabled={atStart}
          onClick={() => go(page - 1)}
        />
        <NavArrow
          dir="next"
          disabled={atEnd}
          onClick={() => go(page + 1)}
        />
      </div>

      {/* Controls: dots + counter */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {slides.map((s, i) => {
            const on = i === page
            return (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}${s.title ? `: ${s.title}` : ''}`}
                aria-current={on}
                title={s.title ?? `Slide ${i + 1}`}
                onClick={() => go(i)}
                className="rounded-full transition-all"
                style={{
                  width: on ? 22 : 9,
                  height: 9,
                  background: on ? ACCENT : '#cbd5e1',
                }}
              />
            )
          })}
        </div>
        <span className="shrink-0 font-mono text-[12px] font-semibold tabular-nums" style={{ color: '#64748b' }}>
          {page + 1} / {count}
        </span>
      </div>

      <p className="mt-1.5 text-[11px]" style={{ color: '#94a3b8' }}>
        Use the arrows, the page dots, or your ← / → keys to page through.
      </p>
    </div>
  )
}

/* ----------------------------------------------------------------- */

const ACCENT = '#1971c2' // fixed media-chrome accent (this artefact's "key" colour)

const pageVariants = {
  enter: (d: number) => ({ x: d > 0 ? 36 : -36, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -36 : 36, opacity: 0 }),
}

/** Film-reel sprocket rail along the top or bottom of the stage. */
function Sprockets({ edge }: { edge: 'top' | 'bottom' }) {
  return (
    <div
      aria-hidden
      className="flex items-center justify-between px-3"
      style={{
        height: 10,
        background: '#e2e8f0',
        borderBottom: edge === 'top' ? '1px solid #d8e0ea' : undefined,
        borderTop: edge === 'bottom' ? '1px solid #d8e0ea' : undefined,
      }}
    >
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="inline-block rounded-[1px]" style={{ width: 8, height: 4, background: '#ffffff' }} />
      ))}
    </div>
  )
}

/** Circular prev/next overlay button. */
function NavArrow({
  dir,
  disabled,
  onClick,
}: {
  dir: 'prev' | 'next'
  disabled: boolean
  onClick: () => void
}) {
  const isPrev = dir === 'prev'
  return (
    <button
      type="button"
      aria-label={isPrev ? 'Previous slide' : 'Next slide'}
      disabled={disabled}
      onClick={onClick}
      className="absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full shadow-sm transition-all"
      style={{
        [isPrev ? 'left' : 'right']: 10,
        background: '#ffffff',
        border: '1px solid #cbd5e1',
        color: disabled ? '#cbd5e1' : '#0f172a',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      } as React.CSSProperties}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        {isPrev ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  )
}
