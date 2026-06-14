'use client'

import { useMemo, useState } from 'react'

/**
 * ImageCompareSlider — before/after reveal with ORIGINAL recreated scenes.
 *
 * Covers M22 Q1 (Banda Aceh before/after the 2004 tsunami) and M21 (Amazon deforestation swipe).
 * The source satellite imagery is copyright, so each side is drawn as an original procedural SVG
 * scene chosen by `side.scene` — never a copied photo. The divider slider wipes between them.
 *
 * Scene presets (deterministic, seeded → no hydration drift):
 *   'urban-dense'     a tightly built coastal town (intact)
 *   'tsunami-scoured' the same coast stripped to bare ground + debris after a tsunami
 *   'rainforest'      dense tropical forest canopy
 *   'deforested'      cleared land: stumps, bare soil, a few roads
 *   'farmland' | 'flood' | 'plain'  generic land covers
 * Unknown/absent scene → a clean labelled colour panel (still legible). Fully defensive.
 */
export interface CompareSide {
  label?: string
  caption?: string
  scene?: string
  imageHint?: string
  /** optional image url (original recreation) — takes precedence over a scene preset */
  src?: string
  /** fallback fill colour for the plain panel */
  color?: string
}
export interface ImageCompareSliderData {
  title?: string
  source?: string
  before?: CompareSide
  after?: CompareSide
}

const VW = 480
const VH = 270

function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function ImageCompareSlider({ data }: { data?: ImageCompareSliderData }) {
  const d = data ?? {}
  const before = d.before ?? {}
  const after = d.after ?? {}
  const [pos, setPos] = useState(50)

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>{d.title ?? 'Before / after'}</h3>
        <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>compare-slider{d.source ? ` · ${d.source}` : ''}</span>
      </div>

      <div className="relative w-full select-none overflow-hidden" style={{ aspectRatio: `${VW} / ${VH}`, borderRadius: 12, border: '1px solid #e2e8f0' }}>
        <Panel side={after} seed={7321} defaultLabel="After" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div style={{ width: `${10000 / Math.max(1, pos)}%`, height: '100%' }}>
            <Panel side={before} seed={1187} defaultLabel="Before" />
          </div>
        </div>
        {/* divider */}
        <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, width: 2, background: '#ffffff', boxShadow: '0 0 0 1px rgba(0,0,0,.2)' }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full" style={{ width: 28, height: 28, background: '#ffffff', color: '#334155', boxShadow: '0 1px 4px rgba(0,0,0,.3)', fontSize: 13 }}>⇄</div>
        </div>
      </div>

      <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} className="mt-2 w-full" aria-label="reveal slider" />
      {(before.caption || after.caption) && (
        <p className="mt-1 text-[11px]" style={{ color: '#64748b' }}>
          {before.caption && <><b>{before.label ?? 'Before'}:</b> {before.caption} </>}
          {after.caption && <> · <b>{after.label ?? 'After'}:</b> {after.caption}</>}
        </p>
      )}
    </div>
  )
}

function Panel({ side, seed, defaultLabel }: { side: CompareSide; seed: number; defaultLabel: string }) {
  const label = side.label ?? defaultLabel
  if (side.src) {
    return (
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={side.src} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Tag label={label} />
      </div>
    )
  }
  const scene = (side.scene ?? '').toLowerCase()
  return (
    <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
      {scene ? (
        <svg viewBox={`0 0 ${VW} ${VH}`} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
          <Scene scene={scene} seed={seed} />
        </svg>
      ) : (
        <div className="flex h-full w-full items-end" style={{ background: side.color ?? '#cbd5e1' }} />
      )}
      <Tag label={label} hint={side.imageHint} />
    </div>
  )
}

function Tag({ label, hint }: { label: string; hint?: string }) {
  return (
    <span className="absolute left-2 top-2 rounded px-1.5 py-0.5 text-[11px] font-bold" style={{ background: '#0f172abb', color: '#fff' }}>
      {label}{hint ? ` · ${hint}` : ''}
    </span>
  )
}

function Scene({ scene, seed }: { scene: string; seed: number }) {
  const rng = useMemo(() => mulberry32(seed), [seed])
  // a deterministic field of cells we can draw differently per scene
  const cells = useMemo(() => {
    const out: { x: number; y: number; r: number }[] = []
    for (let i = 0; i < 240; i++) out.push({ x: rng() * VW, y: rng() * VH, r: rng() })
    return out
  }, [rng])

  if (scene.includes('urban') || scene.includes('town-intact') || scene.includes('city')) {
    return (
      <g>
        <rect x={0} y={0} width={VW} height={VH} fill="#cdd3cf" />
        <rect x={0} y={0} width={VW * 0.18} height={VH} fill="#2f6f9e" />{/* sea */}
        <rect x={VW * 0.18} y={0} width={6} height={VH} fill="#e8e3d2" />{/* beach */}
        {cells.filter((c) => c.x > VW * 0.2).map((c, i) => (
          <rect key={i} x={c.x} y={c.y} width={5 + c.r * 6} height={5 + c.r * 5} fill={['#b9b3a3', '#a59f8f', '#cfc9b7'][i % 3]} stroke="#8c8676" strokeWidth={0.3} />
        ))}
        {[0.35, 0.55, 0.75].map((f, i) => (
          <rect key={i} x={VW * f} y={0} width={3} height={VH} fill="#7d7868" opacity={0.6} />
        ))}
      </g>
    )
  }
  if (scene.includes('scoured') || scene.includes('tsunami') || scene.includes('destroyed') || scene.includes('flood')) {
    return (
      <g>
        <rect x={0} y={0} width={VW} height={VH} fill="#9c8f76" />
        <rect x={0} y={0} width={VW * 0.26} height={VH} fill="#5a7f93" />{/* sea pushed inland */}
        <rect x={VW * 0.26} y={0} width={VW} height={VH} fill="#a8997d" opacity={0.5} />
        {cells.filter((c) => c.x > VW * 0.28 && c.r > 0.82).map((c, i) => (
          <rect key={i} x={c.x} y={c.y} width={3} height={3} fill="#6e6450" />
        ))}
        {[0.4, 0.62].map((f, i) => (
          <rect key={i} x={VW * f} y={0} width={2} height={VH} fill="#6e6450" opacity={0.5} />
        ))}
      </g>
    )
  }
  if (scene.includes('rainforest') || scene.includes('forest-intact') || scene === 'forest') {
    return (
      <g>
        <rect x={0} y={0} width={VW} height={VH} fill="#1f6b3a" />
        {cells.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={4 + c.r * 7} fill={['#2f9e44', '#247a36', '#3fb056', '#1d6b32'][i % 4]} opacity={0.95} />
        ))}
        <path d={`M0,${VH * 0.6} Q${VW * 0.5},${VH * 0.5} ${VW},${VH * 0.66}`} stroke="#6b4f2a" strokeWidth={5} fill="none" opacity={0.5} />
      </g>
    )
  }
  if (scene.includes('deforest') || scene.includes('cleared')) {
    return (
      <g>
        <rect x={0} y={0} width={VW} height={VH} fill="#b79a6b" />
        {cells.filter((c) => c.r > 0.7).map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={2} fill="#7a5a2e" />
        ))}
        {/* remaining forest patches */}
        {cells.filter((c) => c.x > VW * 0.7 && c.r > 0.5).map((c, i) => (
          <circle key={`f${i}`} cx={c.x} cy={c.y} r={3 + c.r * 4} fill="#2f9e44" opacity={0.9} />
        ))}
        {/* logging roads */}
        <path d={`M0,${VH * 0.4} L${VW},${VH * 0.45}`} stroke="#8a6a3a" strokeWidth={3} />
        <path d={`M${VW * 0.5},0 L${VW * 0.45},${VH}`} stroke="#8a6a3a" strokeWidth={3} />
      </g>
    )
  }
  if (scene.includes('farm')) {
    return (
      <g>
        <rect x={0} y={0} width={VW} height={VH} fill="#cdb572" />
        {[0, 1, 2, 3].map((r) => (
          <rect key={r} x={0} y={(VH / 4) * r} width={VW} height={VH / 4 - 3} fill={['#c2b56a', '#a8b66a', '#caa85e', '#9fae5c'][r]} />
        ))}
      </g>
    )
  }
  // generic land
  return <rect x={0} y={0} width={VW} height={VH} fill="#cbd5c0" />
}
