'use client'

import { useState } from 'react'

/**
 * Reusable infographic / poster / action-plan panel (I&S artefact).
 * Data-driven: an optional intro then a set of blocks, each with an optional
 * emoji/icon, heading, items[] list and a note. Two layouts:
 *   - 'grid' : responsive card grid (posters, fact panels, action plans),
 *   - 'flow' : blocks laid left-to-right joined by arrows (process / sequence
 *              infographics, e.g. an investigation or development pipeline).
 * Interactive: hover (or tap) a block to spotlight it and dim the rest; click to
 * pin that emphasis so it stays. A readout strip echoes the active block.
 * Theme-aware chrome (CSS var tokens); fixed accent palette for the blocks (the
 * "key"); own light backing + figure-surface so it reads on the dark Glass theme.
 *
 * Used for "INVESTIGATING LAND USE", "FAIRNESS AND DEVELOPMENT", conference
 * posters, action plans, and a flags / global-cooperation panel.
 */
export interface InfoBlock {
  heading?: string
  items?: string[]
  note?: string
  icon?: string // emoji or short glyph
}
export interface InfoGraphicPanelData {
  title?: string
  source?: string
  intro?: string
  layout?: 'grid' | 'flow'
  blocks: InfoBlock[]
}

// Fixed accent palette — these are the "key" colours, NOT themed.
const ACCENTS = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#5c7cfa']
const accentOf = (i: number) => ACCENTS[i % ACCENTS.length]
// 12% tint of an accent for the soft block backing.
const tintOf = (i: number) => `${accentOf(i)}14`

export default function InfoGraphicPanel({ data }: { data: InfoGraphicPanelData }) {
  const layout = data.layout ?? 'grid'
  const [hover, setHover] = useState<number | null>(null)
  const [pinned, setPinned] = useState<number | null>(null)
  const active = hover ?? pinned

  const togglePin = (i: number) => setPinned((p) => (p === i ? null : i))

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && (
          <h3 className="text-base font-extrabold uppercase tracking-wide" style={{ color: '#0f172a' }}>
            {data.title}
          </h3>
        )}
        {data.source && (
          <span className="text-[11px]" style={{ color: '#64748b' }}>
            Source: {data.source} · <span className="font-mono">interactive</span>
          </span>
        )}
      </div>

      {data.intro && (
        <p className="mb-3 text-[13px] leading-relaxed" style={{ color: '#334155' }}>
          {data.intro}
        </p>
      )}

      {layout === 'flow' ? (
        <div className="flex flex-col gap-2 md:flex-row md:items-stretch">
          {data.blocks.map((b, i) => (
            <div key={i} className="flex items-stretch md:flex-1">
              <BlockCard
                block={b}
                index={i}
                dim={active !== null && active !== i}
                pinned={pinned === i}
                onEnter={() => setHover(i)}
                onLeave={() => setHover(null)}
                onClick={() => togglePin(i)}
                step={i + 1}
              />
              {i < data.blocks.length - 1 && (
                <div
                  className="flex shrink-0 items-center justify-center px-1 md:px-1.5"
                  style={{ color: accentOf(i), opacity: active === null || active === i || active === i + 1 ? 1 : 0.35 }}
                  aria-hidden
                >
                  {/* right arrow on wide screens, down arrow when stacked */}
                  <span className="hidden text-lg font-black leading-none md:inline">→</span>
                  <span className="inline w-full text-center text-lg font-black leading-none md:hidden">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {data.blocks.map((b, i) => (
            <BlockCard
              key={i}
              block={b}
              index={i}
              dim={active !== null && active !== i}
              pinned={pinned === i}
              onEnter={() => setHover(i)}
              onLeave={() => setHover(null)}
              onClick={() => togglePin(i)}
            />
          ))}
        </div>
      )}

      {/* readout */}
      <div
        className="mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-[13px]"
        style={{ background: '#f8fafc', border: '1px solid #e2e8f0', minHeight: 38, color: '#0f172a' }}
        aria-live="polite"
      >
        {active !== null ? (
          <>
            <span className="inline-block h-3 w-3 rounded-sm" style={{ background: accentOf(active) }} />
            <span className="font-bold">{data.blocks[active]?.heading ?? `Block ${active + 1}`}</span>
            <span style={{ color: '#64748b' }}>
              — {(data.blocks[active]?.items?.length ?? 0)} point
              {(data.blocks[active]?.items?.length ?? 0) === 1 ? '' : 's'}
              {pinned === active ? ' · pinned (click again to release)' : ''}
            </span>
          </>
        ) : (
          <span style={{ color: '#64748b' }}>
            Hover a {layout === 'flow' ? 'stage' : 'panel'} to spotlight it; click to pin the focus.
          </span>
        )}
      </div>
    </div>
  )
}

function BlockCard({
  block,
  index,
  dim,
  pinned,
  step,
  onEnter,
  onLeave,
  onClick,
}: {
  block: InfoBlock
  index: number
  dim: boolean
  pinned: boolean
  step?: number
  onEnter: () => void
  onLeave: () => void
  onClick: () => void
}) {
  const accent = accentOf(index)
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={onClick}
      className="flex w-full flex-col gap-1.5 rounded-lg p-3 text-left transition-all"
      aria-pressed={pinned}
      style={{
        background: tintOf(index),
        border: `1.5px solid ${accent}`,
        borderLeftWidth: 4,
        opacity: dim ? 0.45 : 1,
        boxShadow: pinned ? `0 0 0 2px ${accent}55` : 'none',
        transform: dim ? 'scale(0.99)' : 'scale(1)',
        cursor: 'pointer',
      }}
    >
      <div className="flex items-center gap-2">
        {block.icon ? (
          <span className="text-xl leading-none" aria-hidden>
            {block.icon}
          </span>
        ) : step !== undefined ? (
          <span
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-extrabold text-white"
            style={{ background: accent }}
            aria-hidden
          >
            {step}
          </span>
        ) : null}
        {block.heading && (
          <span className="text-[13px] font-extrabold leading-tight" style={{ color: '#0f172a' }}>
            {block.heading}
          </span>
        )}
      </div>

      {block.items && block.items.length > 0 && (
        <ul className="m-0 flex flex-col gap-1 pl-0">
          {block.items.map((it, k) => (
            <li key={k} className="flex items-start gap-1.5 text-[12.5px] leading-snug" style={{ color: '#334155' }}>
              <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} aria-hidden />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}

      {block.note && (
        <p className="mt-0.5 text-[11.5px] italic leading-snug" style={{ color: '#64748b' }}>
          {block.note}
        </p>
      )}
    </button>
  )
}
