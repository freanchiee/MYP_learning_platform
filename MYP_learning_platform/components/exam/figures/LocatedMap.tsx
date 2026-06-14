'use client'

import { useMemo, useState } from 'react'
import { geoOrthographic, geoMercator, geoPath, geoGraticule10, geoCentroid } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Topology } from 'topojson-specification'
import type { Feature, Geometry } from 'geojson'
import worldTopo from 'world-atlas/countries-110m.json'

/**
 * LocatedMap — a single-region / single-place located map (NOT a world choropleth).
 *
 * Two complementary render modes, picked from the data:
 *  1. SCENE mode (default) — an ORIGINAL stylised map of a place at town/island scale:
 *     ocean + wavy coastline + hillshaded terrain + street grid + procedurally-scattered
 *     building footprints classified by colour (e.g. damaged / undamaged), a legend,
 *     N-arrow, scale bar and an inset globe locator. Copyright source imagery is recreated,
 *     never copied. Used for: M25 Lahaina GIS damage map, M22 Banda Aceh, N23 Kaikōura.
 *  2. REGION mode (`regionCountries`) — REAL geometry: Natural Earth country boundaries
 *     (world-atlas 110m) fitted to the region's bounding box via geoMercator, with
 *     [lon,lat] markers, graticule, N-arrow and scale. Used for: M24 Mekong, N24 Spain,
 *     M23 Tonga, N21 IDP, N22 Great Green Wall.
 *
 * The inset locator is a REAL orthographic mini-globe (world-atlas land) rotated to the
 * region with a marker dot — so the figure always shows where in the world the place is.
 *
 * Fully theme-aware (chrome via tokens), dark-legible (own light backing + figure-surface),
 * and defensive throughout (guards every array/number so variant data can never crash a render).
 */

export interface LocatedMapMarker {
  /** geographic position (preferred) */
  lon?: number
  lat?: number
  /** OR percentage position 0–100 within the scene frame */
  x?: number
  y?: number
  label?: string
  detail?: string
  color?: string
  /** pin glyph, e.g. '◉' '▲' '★' (default filled dot) */
  glyph?: string
  /** if set, the marker is shown only when this toggle layer is active */
  layerId?: string
}
export interface LocatedMapLayer {
  id: string
  label: string
  active?: boolean
}
/** A class of footprints/points scattered in the scene, e.g. "Damaged buildings". */
export interface LocatedMapGroup {
  id: string
  label: string
  color: string
  /** which toggle layer this group belongs to (optional) */
  layerId?: string
  /** how many footprints to scatter (scene mode) */
  count?: number
  /**
   * where to bias the scatter: 'coast' hugs the shoreline, 'inland' sits away from it,
   * 'south'/'north' bias vertically, 'all' fills the town band. Combine via space, e.g.
   * 'coast south'. Defaults to 'all'.
   */
  zone?: string
  /** explicit footprint positions [x%,y%] (overrides procedural scatter when given) */
  cells?: [number, number][]
}
export interface LocatedMapData {
  title?: string
  source?: string
  region?: string
  caption?: string
  // ── scene mode ──
  scene?: 'coast' | 'island' | 'plain'
  /** ocean side for the coast scene */
  water?: 'left' | 'right' | 'top' | 'bottom' | 'none'
  /** hillshade/terrain side */
  terrain?: 'left' | 'right' | 'none'
  groups?: LocatedMapGroup[]
  legend?: { label: string; color: string }[]
  // ── region (d3-geo) mode ──
  /** Natural Earth country names to draw as the located region (enables REGION mode) */
  regionCountries?: string[]
  /** projection centre/extent helpers (optional) — falls back to fitting the countries */
  // ── shared chrome ──
  markers?: LocatedMapMarker[]
  layers?: LocatedMapLayer[]
  scaleKm?: number
  north?: boolean
  /** [lon,lat] for the inset locator globe; true = derive from region/markers; false = hide */
  locator?: [number, number] | boolean
}

const W = 960
const H = 620
const TOPO = worldTopo as unknown as Topology

// Natural Earth land features (shared, computed once).
function landFeatures(): Feature<Geometry, { name: string }>[] {
  const fc = feature(TOPO, TOPO.objects.countries) as unknown as {
    features: Feature<Geometry, { name: string }>[]
  }
  return Array.isArray(fc?.features) ? fc.features : []
}

// Deterministic PRNG so the procedural scatter is identical on server + client (no hydration drift).
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

function clampPct(v: unknown): number {
  const n = typeof v === 'number' && Number.isFinite(v) ? v : 50
  return Math.max(0, Math.min(100, n))
}

export default function LocatedMap({ data }: { data?: LocatedMapData }) {
  const d = data ?? {}
  const markers = Array.isArray(d.markers) ? d.markers : []
  const layers = Array.isArray(d.layers) ? d.layers : []
  const groups = Array.isArray(d.groups) ? d.groups : []
  const regionCountries = Array.isArray(d.regionCountries) ? d.regionCountries : []
  const isRegion = regionCountries.length > 0

  const [active, setActive] = useState<Set<string>>(
    () => new Set(layers.filter((l) => l?.active !== false).map((l) => l?.id).filter(Boolean) as string[]),
  )
  const [hover, setHover] = useState<{ label?: string; detail?: string } | null>(null)

  const layerOn = (layerId?: string) => !layerId || active.has(layerId)

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#eef6fb', border: '1px solid #d6e4ee', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="text-lg font-extrabold tracking-tight" style={{ color: '#0f2a43' }}>
          {d.title ?? d.region ?? 'Located map'}
        </h3>
        <span className="text-[11px] font-medium" style={{ color: '#5b7185' }}>
          {d.source ? `Source: ${d.source} · ` : ''}<span className="font-mono">interactive map</span>
        </span>
      </div>

      {layers.length > 0 && (
        <div className="mb-2 flex flex-wrap items-center gap-1.5" role="group" aria-label="map layers">
          <span className="mr-1 text-[11px] font-semibold" style={{ color: '#5b7185' }}>Layers:</span>
          {layers.map((l) => {
            const on = active.has(l.id)
            return (
              <button
                key={l.id}
                type="button"
                onClick={() =>
                  setActive((s) => {
                    const n = new Set(s)
                    if (n.has(l.id)) n.delete(l.id)
                    else n.add(l.id)
                    return n
                  })
                }
                className="rounded-full px-2.5 py-1 text-[11px] font-semibold transition-all"
                style={{
                  background: on ? '#0b728522' : '#ffffff',
                  color: on ? '#0b7285' : '#94a3b8',
                  border: `1.5px solid ${on ? '#0b7285' : '#cbd5e1'}`,
                }}
              >
                {l.label}
              </button>
            )
          })}
        </div>
      )}

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          style={{ borderRadius: 12, border: '1px solid #cde0ee', background: '#e9f3fb' }}
          role="img"
          aria-label={d.title ?? d.region ?? 'located map'}
        >
          {isRegion ? (
            <RegionGeometry countries={regionCountries} markers={markers} layerOn={layerOn} onHover={setHover} />
          ) : (
            <SceneMap d={d} groups={groups} layerOn={layerOn} markers={markers} onHover={setHover} />
          )}

          {/* N-arrow */}
          {d.north !== false && (
            <g transform={`translate(${W - 46}, 30)`} aria-hidden>
              <circle cx={0} cy={6} r={20} fill="#ffffffcc" stroke="#0f2a43" strokeWidth={1} />
              <path d="M0,-8 L7,12 L0,6 L-7,12 Z" fill="#0f2a43" />
              <text x={0} y={-12} textAnchor="middle" fontSize={12} fontWeight={800} fill="#0f2a43">N</text>
            </g>
          )}

          {/* Scale bar */}
          {typeof d.scaleKm === 'number' && d.scaleKm > 0 && (
            <g transform={`translate(${W - 150}, ${H - 28})`} aria-hidden>
              <rect x={0} y={0} width={60} height={7} fill="#0f2a43" />
              <rect x={60} y={0} width={60} height={7} fill="#ffffff" stroke="#0f2a43" strokeWidth={1} />
              <text x={0} y={22} fontSize={11} fontWeight={700} fill="#0f2a43">0</text>
              <text x={120} y={22} textAnchor="end" fontSize={11} fontWeight={700} fill="#0f2a43">{d.scaleKm} km</text>
            </g>
          )}

          {/* Inset locator globe */}
          {d.locator !== false && (
            <LocatorGlobe
              center={resolveLocator(d, markers)}
            />
          )}
        </svg>

        {/* Legend */}
        {Array.isArray(d.legend) && d.legend.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {d.legend.map((g, i) => (
              <span key={i} className="flex items-center gap-1.5 text-[12px] font-semibold" style={{ color: '#0f2a43' }}>
                <span className="inline-block h-3 w-3 rounded-[2px]" style={{ background: g.color }} />
                {g.label}
              </span>
            ))}
          </div>
        )}

        {/* Hover readout */}
        <div
          className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
          style={{ background: '#ffffff', border: '1px solid #d6e4ee', minHeight: 40, color: '#0f2a43' }}
          aria-live="polite"
        >
          {hover ? (
            <>
              <span className="font-bold">{hover.label ?? 'Feature'}</span>
              {hover.detail && <span style={{ color: '#5b7185' }}>— {hover.detail}</span>}
            </>
          ) : (
            <span style={{ color: '#5b7185' }}>
              {isRegion
                ? 'Hover a marker to read it. The inset globe shows the region’s place in the world.'
                : 'Hover the markers to read them; the legend keys the footprint colours; the inset globe locates the place.'}
            </span>
          )}
        </div>

        {d.caption && <p className="mt-2 text-[12px]" style={{ color: '#5b7185' }}>{d.caption}</p>}
      </div>
    </div>
  )
}

/* ── SCENE mode: original stylised town/island map ─────────────────────────── */

function SceneMap({
  d,
  groups,
  layerOn,
  markers,
  onHover,
}: {
  d: LocatedMapData
  groups: LocatedMapGroup[]
  layerOn: (layerId?: string) => boolean
  markers: LocatedMapMarker[]
  onHover: (h: { label?: string; detail?: string } | null) => void
}) {
  const water = d.water ?? 'left'
  const terrain = d.terrain ?? 'right'

  // Coastline path: a gently wavy vertical line; ocean fills the `water` side.
  const coastX = (t: number) => 0.26 * W + Math.sin(t * Math.PI * 2.1) * 22 - t * 36 // t in [0,1] top→bottom
  const coastPath = useMemo(() => {
    const pts: string[] = []
    const N = 24
    for (let i = 0; i <= N; i++) {
      const t = i / N
      pts.push(`${coastX(t).toFixed(1)},${(t * H).toFixed(1)}`)
    }
    return pts
  }, [])

  const oceanFill =
    water === 'left'
      ? `M0,0 L${coastPath[0]} ${coastPath.slice(1).map((p) => `L${p}`).join(' ')} L0,${H} Z`
      : ''

  // Building scatter (procedural, deterministic).
  const buildings = useMemo(() => {
    const rng = mulberry32(20250520)
    const out: { x: number; y: number; w: number; h: number; color: string; layerId?: string }[] = []
    const townLeft = (t: number) => coastX(t) + 6
    const townRight = 0.6 * W
    for (const g of groups) {
      if (Array.isArray(g.cells) && g.cells.length) {
        for (const c of g.cells) {
          out.push({ x: clampPct(c?.[0]) / 100 * W, y: clampPct(c?.[1]) / 100 * H, w: 6, h: 5, color: g.color, layerId: g.layerId })
        }
        continue
      }
      const count = Math.max(0, Math.min(600, Math.floor(g.count ?? 90)))
      const zone = (g.zone ?? 'all').toLowerCase()
      for (let i = 0; i < count; i++) {
        const t = rng()
        const yTop = zone.includes('south') ? 0.45 + rng() * 0.5 : zone.includes('north') ? rng() * 0.5 : 0.08 + rng() * 0.84
        const y = yTop * H
        const tt = y / H
        const left = townLeft(tt)
        const span = townRight - left
        let fx: number
        if (zone.includes('coast')) fx = rng() * 0.42
        else if (zone.includes('inland')) fx = 0.45 + rng() * 0.5
        else fx = rng()
        const x = left + fx * span
        const w = 4 + rng() * 4
        const h = 4 + rng() * 4
        out.push({ x, y, w, h, color: g.color, layerId: g.layerId })
      }
    }
    return out
  }, [groups])

  // A few stylised streets following the coast.
  const streets = useMemo(() => {
    const lines: string[] = []
    // coastal road
    lines.push(coastPath.map((p, i) => `${i === 0 ? 'M' : 'L'}${(parseFloat(p.split(',')[0]) + 14).toFixed(1)},${p.split(',')[1]}`).join(' '))
    // cross streets
    for (let k = 1; k <= 5; k++) {
      const y = (k / 6) * H
      const t = y / H
      lines.push(`M${(coastX(t) + 8).toFixed(1)},${y.toFixed(1)} L${(0.58 * W).toFixed(1)},${(y - 18).toFixed(1)}`)
    }
    return lines
  }, [coastPath])

  return (
    <g>
      {/* land base */}
      <rect x={0} y={0} width={W} height={H} fill="#ede7da" />

      {/* hillshade terrain */}
      {terrain !== 'none' && <Hillshade side={terrain} />}

      {/* ocean */}
      {water === 'left' && oceanFill && (
        <>
          <path d={oceanFill} fill="url(#lm-ocean)" />
          <polyline points={coastPath.join(' ')} fill="none" stroke="#3b6ea5" strokeWidth={1.5} opacity={0.55} />
        </>
      )}
      <defs>
        <linearGradient id="lm-ocean" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8ec5e8" />
          <stop offset="100%" stopColor="#b9ddef" />
        </linearGradient>
      </defs>

      {/* streets */}
      {streets.map((p, i) => (
        <path key={i} d={p} fill="none" stroke="#ffffff" strokeWidth={i === 0 ? 3 : 1.4} opacity={0.85} />
      ))}

      {/* buildings */}
      {buildings.map((b, i) =>
        layerOn(b.layerId) ? (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.color} rx={0.5} />
        ) : null,
      )}

      {/* markers */}
      {markers.filter((m) => layerOn(m?.layerId)).map((m, i) => {
        const x = (clampPct(m?.x) / 100) * W
        const y = (clampPct(m?.y) / 100) * H
        return (
          <g
            key={i}
            transform={`translate(${x},${y})`}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover({ label: m?.label, detail: m?.detail })}
            onMouseLeave={() => onHover(null)}
          >
            <circle cx={0} cy={0} r={9} fill="#ffffff" stroke={m?.color ?? '#0f2a43'} strokeWidth={2} />
            <text x={0} y={1} textAnchor="middle" dominantBaseline="central" fontSize={11} fill={m?.color ?? '#0f2a43'} fontWeight={800}>
              {m?.glyph ?? '⌕'}
            </text>
            {m?.label && (
              <text x={0} y={22} textAnchor="middle" fontSize={11} fontWeight={700} fill="#0f2a43" style={{ paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 3 }}>
                {m.label}
              </text>
            )}
          </g>
        )
      })}
    </g>
  )
}

function Hillshade({ side }: { side: 'left' | 'right' }) {
  // Concentric rounded contour bands suggesting a mountain ridge on one side.
  const cx = side === 'right' ? W * 0.92 : W * 0.08
  const cy = H * 0.42
  const bands = [320, 270, 220, 170, 120, 75]
  const fills = ['#dfe3d2', '#d4d9c2', '#c7cfb2', '#bcc6a4', '#b1bd96', '#a7b58a']
  return (
    <g aria-hidden opacity={0.85}>
      {bands.map((r, i) => (
        <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.82} fill={fills[i]} />
      ))}
      {bands.map((r, i) => (
        <ellipse key={`c${i}`} cx={cx} cy={cy} rx={r} ry={r * 0.82} fill="none" stroke="#8a9670" strokeWidth={0.6} opacity={0.5} />
      ))}
    </g>
  )
}

/* ── REGION mode: real d3-geo country geometry fitted to the region ─────────── */

function RegionGeometry({
  countries,
  markers,
  layerOn,
  onHover,
}: {
  countries: string[]
  markers: LocatedMapMarker[]
  layerOn: (layerId?: string) => boolean
  onHover: (h: { label?: string; detail?: string } | null) => void
}) {
  const { focusD, contextD, gratD, project } = useMemo(() => {
    const feats = landFeatures()
    const want = new Set(countries)
    const focus = feats.filter((f) => want.has(f.properties?.name ?? ''))
    const fc = { type: 'FeatureCollection', features: focus.length ? focus : feats } as unknown as Feature
    const projection = geoMercator().fitExtent([[24, 24], [W - 24, H - 24]], fc)
    const path = geoPath(projection)
    const focusD = focus.map((f) => ({ name: f.properties?.name ?? '', d: path(f) ?? '' }))
    const contextD = feats.map((f) => path(f) ?? '')
    const gratD = path(geoGraticule10()) ?? ''
    const project = (lon: number, lat: number) => projection([lon, lat]) ?? null
    return { focusD, contextD, gratD, project }
  }, [countries])

  return (
    <g>
      <rect x={0} y={0} width={W} height={H} fill="#dcecf7" />
      <path d={gratD} fill="none" stroke="#b9d6ea" strokeWidth={0.5} opacity={0.7} />
      {/* context (neighbouring) land */}
      {contextD.map((dd, i) => (
        <path key={i} d={dd} fill="#e8efe2" stroke="#ffffff" strokeWidth={0.4} />
      ))}
      {/* focus region */}
      {focusD.map((g, i) => (
        <path key={g.name || i} d={g.d} fill="#cfe3c3" stroke="#5a8f4e" strokeWidth={1} />
      ))}
      {/* markers by [lon,lat] */}
      {markers.filter((m) => layerOn(m?.layerId)).map((m, i) => {
        const xy = typeof m?.lon === 'number' && typeof m?.lat === 'number' ? project(m.lon, m.lat) : null
        if (!xy) return null
        return (
          <g
            key={i}
            transform={`translate(${xy[0]},${xy[1]})`}
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => onHover({ label: m?.label, detail: m?.detail })}
            onMouseLeave={() => onHover(null)}
          >
            <circle cx={0} cy={0} r={6} fill={m?.color ?? '#e8590c'} stroke="#ffffff" strokeWidth={2} />
            {m?.label && (
              <text x={9} y={4} fontSize={12} fontWeight={700} fill="#0f2a43" style={{ paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 3 }}>
                {m.label}
              </text>
            )}
          </g>
        )
      })}
    </g>
  )
}

/* ── Inset locator: real orthographic mini-globe rotated to the region ──────── */

function LocatorGlobe({ center }: { center: [number, number] | null }) {
  const R = 42
  const cx = 56
  const cy = H - 56
  const { sphere, land, dot } = useMemo(() => {
    if (!center) return { sphere: '', land: '', dot: null as null | [number, number] }
    const [lon, lat] = center
    const projection = geoOrthographic()
      .scale(R)
      .translate([cx, cy])
      .rotate([-lon, -lat])
      .clipAngle(90)
    const path = geoPath(projection)
    const feats = landFeatures()
    const land = feats.map((f) => path(f) ?? '').join(' ')
    const sphere = path({ type: 'Sphere' }) ?? ''
    const dot = projection([lon, lat]) ?? null
    return { sphere, land, dot }
  }, [center])

  if (!center || !sphere) return null
  return (
    <g aria-label="locator inset">
      <circle cx={cx} cy={cy} r={R + 4} fill="#ffffffcc" stroke="#0f2a43" strokeWidth={1} />
      <path d={sphere} fill="#bfe0f2" stroke="#7fb2d4" strokeWidth={0.6} />
      <path d={land} fill="#cdbf9a" stroke="#a9986e" strokeWidth={0.3} />
      {dot && (
        <>
          <circle cx={dot[0]} cy={dot[1]} r={4.5} fill="#e8590c" stroke="#ffffff" strokeWidth={1.4} />
          <circle cx={dot[0]} cy={dot[1]} r={9} fill="none" stroke="#e8590c" strokeWidth={1.2} opacity={0.6} />
        </>
      )}
    </g>
  )
}

function resolveLocator(d: LocatedMapData, markers: LocatedMapMarker[]): [number, number] | null {
  if (Array.isArray(d.locator) && d.locator.length === 2) return [d.locator[0], d.locator[1]]
  // derive from first geographic marker
  const geo = markers.find((m) => typeof m?.lon === 'number' && typeof m?.lat === 'number')
  if (geo && typeof geo.lon === 'number' && typeof geo.lat === 'number') return [geo.lon, geo.lat]
  // derive from region centroid
  if (Array.isArray(d.regionCountries) && d.regionCountries.length) {
    const feats = landFeatures()
    const want = new Set(d.regionCountries)
    const focus = feats.filter((f) => want.has(f.properties?.name ?? ''))
    if (focus.length) {
      try {
        const c = geoCentroid({ type: 'FeatureCollection', features: focus } as unknown as Feature)
        if (Array.isArray(c) && Number.isFinite(c[0]) && Number.isFinite(c[1])) return [c[0], c[1]]
      } catch {
        /* fall through */
      }
    }
  }
  return null
}
