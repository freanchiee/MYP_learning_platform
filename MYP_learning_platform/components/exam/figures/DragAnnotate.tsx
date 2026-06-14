'use client'

import { useState } from 'react'

/**
 * DragAnnotate — place labels onto a scene (annotate) or sort cards into bins (classify).
 *
 * Two interactions behind one component:
 *  - mode:'annotate' — place labels (A, B, …) onto target hotspots drawn on an ORIGINAL SVG scene.
 *    Covers M21 Q5 (river/coast features), N20 Q5a (plate-boundary maps).
 *  - mode:'classify' — sort label/photo cards into category bins.
 *    Covers N19 Q1 (renewable / non-renewable).
 *
 * Interaction: click a chip to pick it up, then click a target/bin to drop it (touch- and
 * keyboard-friendly); chips are also natively draggable for mouse users. Placements persist in
 * component state and are scored live against `correctLabelId`/`correctLabelIds` when supplied
 * (✓ / ✗ shown, with a score readout). The scene is an original recreation, never a copied image.
 * Fully defensive — guards every array/number so variant data can't crash a render.
 */
export interface DragChip {
  id: string
  text: string
  imageHint?: string
}
export interface DragTarget {
  id: string
  x?: number
  y?: number
  label?: string
  correctLabelId?: string
}
export interface DragBin {
  id: string
  label: string
  correctLabelIds?: string[]
}
export interface DragAnnotateData {
  title?: string
  prompt?: string
  mode?: 'annotate' | 'classify'
  /** original SVG scene preset for annotate mode: 'river-coast' | 'plate-boundary' | 'coast' | … */
  scene?: string
  sceneHint?: string
  chips?: DragChip[]
  targets?: DragTarget[]
  bins?: DragBin[]
  /** show ✓/✗ scoring once placements are made */
  showScore?: boolean
}

const SVW = 640
const SVH = 360

export default function DragAnnotate({ data }: { data?: DragAnnotateData }) {
  const d = data ?? {}
  const mode = d.mode ?? (Array.isArray(d.bins) && d.bins.length ? 'classify' : 'annotate')
  const chips = Array.isArray(d.chips) ? d.chips : []
  const targets = Array.isArray(d.targets) ? d.targets : []
  const bins = Array.isArray(d.bins) ? d.bins : []
  const [placed, setPlaced] = useState<Record<string, string>>({}) // slotId -> chipId
  const [held, setHeld] = useState<string | null>(null) // picked-up chipId

  const placedChips = new Set(Object.values(placed))
  const place = (slotId: string, chipId: string) =>
    setPlaced((p) => {
      const next: Record<string, string> = {}
      // a chip lives in at most one slot
      for (const [k, v] of Object.entries(p)) if (v !== chipId && k !== slotId) next[k] = v
      next[slotId] = chipId
      return next
    })
  const dropHeld = (slotId: string) => {
    if (held) {
      place(slotId, held)
      setHeld(null)
    }
  }

  const correctFor = (slotId: string): string[] => {
    const t = targets.find((x) => x.id === slotId)
    if (t?.correctLabelId) return [t.correctLabelId]
    const b = bins.find((x) => x.id === slotId)
    return Array.isArray(b?.correctLabelIds) ? (b!.correctLabelIds as string[]) : []
  }
  const hasKey = targets.some((t) => t.correctLabelId) || bins.some((b) => Array.isArray(b.correctLabelIds) && b.correctLabelIds.length)
  const showScore = d.showScore !== false && hasKey
  const verdict = (slotId: string): 'ok' | 'no' | null => {
    const chipId = placed[slotId]
    if (!chipId || !showScore) return null
    const key = correctFor(slotId)
    if (!key.length) return null
    return key.includes(chipId) ? 'ok' : 'no'
  }
  const score = showScore
    ? Object.keys(placed).reduce((n, s) => (verdict(s) === 'ok' ? n + 1 : n), 0)
    : 0
  const scorable = showScore ? [...targets.map((t) => t.id), ...bins.map((b) => b.id)].filter((id) => correctFor(id).length).length : 0

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-1 flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{d.title ?? 'Annotate'}</h3>
        <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>
          {mode}{showScore ? ` · ${score}/${scorable}` : ''}
        </span>
      </div>
      {d.prompt && <p className="mb-2 text-sm" style={{ color: '#334155' }}>{d.prompt}</p>}

      {/* Chip tray */}
      <div className="mb-3 flex flex-wrap gap-1.5">
        {chips.map((c) => {
          const used = placedChips.has(c.id)
          const heldNow = held === c.id
          return (
            <button
              key={c.id}
              type="button"
              draggable
              onDragStart={() => setHeld(c.id)}
              onClick={() => setHeld(heldNow ? null : c.id)}
              className="rounded-lg px-2.5 py-1 text-[12px] font-semibold transition-all"
              style={{
                background: heldNow ? '#0b7285' : used ? '#eef2f6' : '#ffffff',
                color: heldNow ? '#fff' : used ? '#94a3b8' : '#0f172a',
                border: `1.5px solid ${heldNow ? '#0b7285' : '#cbd5e1'}`,
                opacity: used && !heldNow ? 0.55 : 1,
                cursor: 'grab',
              }}
              title={c.imageHint}
            >
              {c.text}
            </button>
          )
        })}
        {chips.length === 0 && <span className="text-[11px]" style={{ color: '#94a3b8' }}>no chips supplied</span>}
      </div>

      {mode === 'classify' ? (
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.max(1, bins.length)}, minmax(0,1fr))` }}>
          {bins.map((b) => {
            const chipId = placed[b.id]
            const chip = chips.find((c) => c.id === chipId)
            const v = verdict(b.id)
            return (
              <div
                key={b.id}
                onClick={() => dropHeld(b.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => dropHeld(b.id)}
                className="rounded-xl p-2 transition-colors"
                style={{
                  minHeight: 96,
                  background: held ? '#f0f9ff' : '#f8fafc',
                  border: `1.5px dashed ${v === 'ok' ? '#2f9e44' : v === 'no' ? '#e03131' : '#cbd5e1'}`,
                  cursor: held ? 'copy' : 'default',
                }}
              >
                <div className="mb-1 text-[12px] font-bold" style={{ color: '#0f172a' }}>{b.label}</div>
                {chip ? (
                  <span className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-semibold" style={{ background: '#fff', border: '1px solid #cbd5e1', color: '#0f172a' }}>
                    {chip.text}{v === 'ok' ? ' ✓' : v === 'no' ? ' ✗' : ''}
                  </span>
                ) : (
                  <span className="text-[11px]" style={{ color: '#94a3b8' }}>{held ? 'tap to drop here' : 'tap a chip, then tap here'}</span>
                )}
                <ChipSelect chips={chips} value={chipId} onChange={(cid) => place(b.id, cid)} />
              </div>
            )
          })}
        </div>
      ) : (
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: `${SVW} / ${SVH}`, borderRadius: 12, border: '1px solid #e2e8f0' }}
        >
          <svg viewBox={`0 0 ${SVW} ${SVH}`} width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} role="img" aria-label={d.sceneHint ?? 'scene'}>
            <AnnotateScene scene={(d.scene ?? '').toLowerCase()} />
          </svg>
          {targets.map((t) => {
            const chipId = placed[t.id]
            const chip = chips.find((c) => c.id === chipId)
            const v = verdict(t.id)
            const ring = v === 'ok' ? '#2f9e44' : v === 'no' ? '#e03131' : held ? '#0b7285' : '#0b7285'
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => dropHeld(t.id)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => dropHeld(t.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${clamp(t.x)}%`, top: `${clamp(t.y)}%`, cursor: held ? 'copy' : 'pointer' }}
                title={t.label}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    minWidth: 30,
                    height: 30,
                    padding: '0 6px',
                    background: chip ? '#ffffff' : held ? '#e7f5ff' : '#ffffffcc',
                    border: `2px ${chip ? 'solid' : 'dashed'} ${ring}`,
                    color: ring,
                    fontSize: 11,
                    fontWeight: 800,
                    boxShadow: '0 1px 3px rgba(0,0,0,.25)',
                  }}
                >
                  {chip ? `${chip.text}${v === 'ok' ? ' ✓' : v === 'no' ? ' ✗' : ''}` : (t.label ?? '?')}
                </span>
              </button>
            )
          })}
          {targets.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-[11px]" style={{ color: '#475569' }}>
              {d.sceneHint ?? 'scene'}
            </div>
          )}
        </div>
      )}
      <p className="mt-2 text-[11px]" style={{ color: '#64748b' }}>
        Click a chip to pick it up, then click a {mode === 'classify' ? 'bin' : 'marker'} to place it (or drag it). {showScore ? 'Placements are checked live.' : ''}
      </p>
    </div>
  )
}

function ChipSelect({ chips, value, onChange }: { chips: DragChip[]; value?: string; onChange: (v: string) => void }) {
  return (
    <select
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value)}
      onClick={(e) => e.stopPropagation()}
      className="mt-1 w-full rounded-md px-2 py-1 text-[12px]"
      style={{ background: '#ffffff', color: '#0f172a', border: '1px solid #cbd5e1' }}
    >
      <option value="">— or select —</option>
      {chips.map((c) => (
        <option key={c.id} value={c.id}>{c.text}</option>
      ))}
    </select>
  )
}

function AnnotateScene({ scene }: { scene: string }) {
  if (scene.includes('river') || scene.includes('coast')) {
    return (
      <g>
        <rect x={0} y={0} width={SVW} height={SVH} fill="#dcd2b8" />{/* land */}
        <rect x={0} y={0} width={SVW * 0.3} height={SVH} fill="#7fb1d0" />{/* sea */}
        <path d={`M${SVW * 0.3},0 C${SVW * 0.34},${SVH * 0.3} ${SVW * 0.26},${SVH * 0.6} ${SVW * 0.32},${SVH}`} fill="none" stroke="#5d8fae" strokeWidth={2} />
        {/* river meandering to the sea */}
        <path d={`M${SVW},${SVH * 0.25} C${SVW * 0.7},${SVH * 0.35} ${SVW * 0.6},${SVH * 0.55} ${SVW * 0.45},${SVH * 0.5} C${SVW * 0.36},${SVH * 0.47} ${SVW * 0.34},${SVH * 0.55} ${SVW * 0.31},${SVH * 0.6}`} fill="none" stroke="#7fb1d0" strokeWidth={10} strokeLinecap="round" />
        {/* beach + headland */}
        <path d={`M${SVW * 0.3},${SVH * 0.0} L${SVW * 0.38},${SVH * 0.15} L${SVW * 0.3},${SVH * 0.3} Z`} fill="#cbb98a" />
        <rect x={SVW * 0.3} y={0} width={5} height={SVH} fill="#e8dcb6" opacity={0.7} />
      </g>
    )
  }
  if (scene.includes('plate') || scene.includes('boundary') || scene.includes('tectonic')) {
    return (
      <g>
        <rect x={0} y={0} width={SVW} height={SVH} fill="#e7ddc7" />
        <rect x={0} y={0} width={SVW / 2} height={SVH} fill="#d9c8a6" />{/* plate A */}
        <rect x={SVW / 2} y={0} width={SVW / 2} height={SVH} fill="#c9b896" />{/* plate B */}
        {/* boundary */}
        <path d={`M${SVW / 2},0 L${SVW / 2 + 14},${SVH * 0.25} L${SVW / 2 - 10},${SVH * 0.5} L${SVW / 2 + 14},${SVH * 0.75} L${SVW / 2},${SVH}`} fill="none" stroke="#9c2a2a" strokeWidth={3} strokeDasharray="8 4" />
        {/* arrows showing plate motion */}
        <path d={`M${SVW * 0.2},${SVH * 0.5} l40,0 m-8,-6 l8,6 l-8,6`} stroke="#334155" strokeWidth={2} fill="none" />
        <path d={`M${SVW * 0.8},${SVH * 0.5} l-40,0 m8,-6 l-8,6 l8,6`} stroke="#334155" strokeWidth={2} fill="none" />
      </g>
    )
  }
  // generic terrain
  return <rect x={0} y={0} width={SVW} height={SVH} fill="#dcd2b8" />
}

function clamp(v: unknown): number {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : 50
  return Math.max(0, Math.min(100, n))
}
