'use client'

import { useMemo, useState } from 'react'
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3-geo'
import { feature } from 'topojson-client'
import type { Topology } from 'topojson-specification'
import type { Feature, Geometry } from 'geojson'
import worldTopo from 'world-atlas/countries-110m.json'

/**
 * Real geographic world map (true country boundaries, Natural Earth 110m via
 * world-atlas, Natural Earth projection). Two modes:
 *  - DEFAULT (no data): Source C "Global Water Stress" choropleth (WRI Aqueduct pattern).
 *  - HIGHLIGHT (data.mode==='highlight'): a base map with a chosen set of countries
 *    highlighted (political / locator / "top-N" maps, e.g. happiest countries; Canada).
 * Hover a country → tooltip + readout; click a legend band → spotlight that band.
 * Original composition + palette; chrome uses theme tokens; own light ocean + figure-surface
 * keep it legible on the dark Glass theme. Data colours are fixed (the key).
 */

export interface ChoroplethData {
  mode?: 'highlight'
  title?: string
  source?: string
  highlight?: string[] // Natural Earth country names to highlight
  highlightLabel?: string
  baseLabel?: string
  caption?: string
}

interface Cat { key: string; label: string; range: string; fill: string; ink: string }

const LEVELS: Cat[] = [
  { key: 'extreme', label: 'Extremely high', range: '>80%', fill: '#b91c1c', ink: '#ffffff' },
  { key: 'high', label: 'High', range: '40–80%', fill: '#f97316', ink: '#3a1500' },
  { key: 'mediumHigh', label: 'Medium–high', range: '20–40%', fill: '#fbbf24', ink: '#3a2a00' },
  { key: 'lowMedium', label: 'Low–medium', range: '10–20%', fill: '#fde68a', ink: '#3a3000' },
  { key: 'low', label: 'Low', range: '<10%', fill: '#86efac', ink: '#0c3a1d' },
  { key: 'lowUse', label: 'Low water use', range: '—', fill: '#cbd5e1', ink: '#1e293b' },
]

// Water-stress band per country (Natural Earth names). WRI Aqueduct baseline pattern.
const BANDS: Record<string, string> = {
  'Saudi Arabia': 'extreme', 'Iran': 'extreme', 'Iraq': 'extreme', 'Pakistan': 'extreme',
  'India': 'extreme', 'Egypt': 'extreme', 'Libya': 'extreme', 'Yemen': 'extreme',
  'Oman': 'extreme', 'United Arab Emirates': 'extreme', 'Kuwait': 'extreme', 'Qatar': 'extreme',
  'Jordan': 'extreme', 'Lebanon': 'extreme', 'Israel': 'extreme', 'Syria': 'extreme',
  'Afghanistan': 'extreme', 'Turkmenistan': 'extreme', 'Eritrea': 'extreme', 'W. Sahara': 'extreme',
  'Botswana': 'extreme',
  'Turkey': 'high', 'Spain': 'high', 'Morocco': 'high', 'Algeria': 'high', 'Tunisia': 'high',
  'Mexico': 'high', 'Greece': 'high', 'Italy': 'high', 'Portugal': 'high', 'Cyprus': 'high',
  'South Africa': 'high', 'Namibia': 'high', 'Uzbekistan': 'high', 'Azerbaijan': 'high',
  'Armenia': 'high', 'Kyrgyzstan': 'high', 'Tajikistan': 'high', 'Mongolia': 'high',
  'Chile': 'high', 'Niger': 'high',
  'United States of America': 'mediumHigh', 'China': 'mediumHigh', 'Kazakhstan': 'mediumHigh',
  'Sudan': 'mediumHigh', 'Somalia': 'mediumHigh', 'Zimbabwe': 'mediumHigh', 'Ukraine': 'mediumHigh',
  'Romania': 'mediumHigh', 'Bulgaria': 'mediumHigh', 'Australia': 'mediumHigh',
  'France': 'lowMedium', 'Germany': 'lowMedium', 'United Kingdom': 'lowMedium', 'Poland': 'lowMedium',
  'Japan': 'lowMedium', 'South Korea': 'lowMedium', 'North Korea': 'lowMedium', 'Thailand': 'lowMedium',
  'Vietnam': 'lowMedium', 'Philippines': 'lowMedium', 'Argentina': 'lowMedium', 'Ethiopia': 'lowMedium',
  'Nigeria': 'lowMedium', 'Ghana': 'lowMedium', 'Senegal': 'lowMedium', 'Kenya': 'lowMedium',
  'Mali': 'lowMedium', 'Chad': 'lowMedium', 'Mauritania': 'lowMedium',
  'Canada': 'low', 'Russia': 'low', 'Brazil': 'low', 'Norway': 'low', 'Sweden': 'low',
  'Finland': 'low', 'Iceland': 'low', 'Dem. Rep. Congo': 'low', 'Congo': 'low', 'Gabon': 'low',
  'Cameroon': 'low', 'Colombia': 'low', 'Venezuela': 'low', 'Peru': 'low', 'Bolivia': 'low',
  'Paraguay': 'low', 'Uruguay': 'low', 'Ecuador': 'low', 'Guyana': 'low', 'Suriname': 'low',
  'Indonesia': 'low', 'Malaysia': 'low', 'Papua New Guinea': 'low', 'New Zealand': 'low',
  'Bangladesh': 'low', 'Myanmar': 'low', 'Laos': 'low', 'Cambodia': 'low', 'Tanzania': 'low',
  'Zambia': 'low', 'Angola': 'low', 'Madagascar': 'low', 'Mozambique': 'low', 'Ireland': 'low',
  'Switzerland': 'low', 'Austria': 'low', 'Belarus': 'low', 'Nepal': 'low', 'Bhutan': 'low',
  'Sri Lanka': 'low', 'Central African Rep.': 'low', 'Liberia': 'low', 'Sierra Leone': 'low',
  'Guinea': 'low', 'Uganda': 'low', 'Rwanda': 'low', 'Burundi': 'low', 'Malawi': 'low',
  'Greenland': 'lowUse', 'Antarctica': 'lowUse', 'Fr. S. Antarctic Lands': 'lowUse',
}

const W = 980
const H = 500
const DEFAULT_LEVEL = 'lowMedium'

interface Geo { name: string; d: string }

export default function ChoroplethWorld({ data }: { data?: ChoroplethData } = {}) {
  const highlightMode = data?.mode === 'highlight'
  const title = data?.title ?? 'Global Water Stress'
  const source = data?.source ?? 'World Resources Institute'
  const [hover, setHover] = useState<string | null>(null)
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [active, setActive] = useState<string | null>(null)

  const highlightSet = useMemo(() => new Set(data?.highlight ?? []), [data?.highlight])

  const cats: Cat[] = highlightMode
    ? [
        { key: 'hl', label: data?.highlightLabel ?? 'Highlighted', range: '', fill: '#e8590c', ink: '#ffffff' },
        { key: 'base', label: data?.baseLabel ?? 'Other countries', range: '', fill: '#cbd5e1', ink: '#1e293b' },
      ]
    : LEVELS
  const catMap = Object.fromEntries(cats.map((c) => [c.key, c])) as Record<string, Cat>
  const catOf = (name: string) => (highlightMode ? (highlightSet.has(name) ? 'hl' : 'base') : (BANDS[name] ?? DEFAULT_LEVEL))

  const { geos, sphereD, gratD } = useMemo(() => {
    const topo = worldTopo as unknown as Topology
    const fc = feature(topo, topo.objects.countries) as unknown as { features: Feature<Geometry, { name: string }>[] }
    const projection = geoNaturalEarth1().fitExtent([[8, 8], [W - 8, H - 8]], fc as unknown as Feature)
    const path = geoPath(projection)
    const geos: Geo[] = fc.features.map((f) => ({ name: f.properties?.name ?? '', d: path(f) ?? '' }))
    return { geos, sphereD: path({ type: 'Sphere' }) ?? '', gratD: path(geoGraticule10()) ?? '' }
  }, [])

  const readout = (name: string) => {
    const c = catMap[catOf(name)]
    if (highlightMode) return `— ${c.label}`
    return `— ${c.label} water stress${c.range !== '—' ? ` (${c.range})` : ''}`
  }

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#eef6fb', border: '1px solid #d6e4ee', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="text-lg font-extrabold tracking-tight" style={{ color: '#0f2a43' }}>{title}</h3>
        <span className="text-[11px] font-medium" style={{ color: '#5b7185' }}>
          Source: {source} · <span className="font-mono">interactive</span>
        </span>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-1.5" role="group" aria-label="map legend">
        <span className="mr-1 text-[11px] font-semibold" style={{ color: '#5b7185' }}>{highlightMode ? 'Key:' : 'Level of water stress:'}</span>
        {cats.map((l) => {
          const on = active === l.key
          return (
            <button
              key={l.key}
              type="button"
              onClick={() => setActive(on ? null : l.key)}
              className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-semibold transition-all"
              style={{
                background: on ? l.fill : '#ffffff',
                color: on ? l.ink : '#334155',
                border: `1.5px solid ${l.fill}`,
                boxShadow: on ? '0 1px 4px rgba(0,0,0,0.18)' : 'none',
                opacity: active && !on ? 0.55 : 1,
              }}
            >
              <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ background: l.fill }} />
              {l.label}
              {l.range && <span style={{ opacity: 0.7 }}>{l.range}</span>}
            </button>
          )
        })}
      </div>

      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="block h-auto w-full"
          style={{ borderRadius: 12, background: 'linear-gradient(180deg,#dcefff 0%,#cfe7f7 100%)' }}
          role="img"
          aria-label={title}
          onMouseLeave={() => setHover(null)}
        >
          <path d={sphereD} fill="#d4ecfb" stroke="#b9d6ea" strokeWidth={1} />
          <path d={gratD} fill="none" stroke="#b9d6ea" strokeWidth={0.5} opacity={0.7} />
          {geos.map((g, i) => {
            const key = catOf(g.name)
            const c = catMap[key]
            const dim = active != null && active !== key
            const isHover = hover === g.name && g.name !== ''
            return (
              <path
                key={g.name || i}
                d={g.d}
                fill={c.fill}
                stroke={isHover ? '#0f2a43' : '#ffffff'}
                strokeWidth={isHover ? 1.4 : 0.4}
                style={{ opacity: dim ? 0.22 : 1, transition: 'opacity .18s', cursor: 'pointer' }}
                onMouseEnter={() => g.name && setHover(g.name)}
                onMouseMove={(e) => {
                  const r = (e.currentTarget.ownerSVGElement as SVGSVGElement).getBoundingClientRect()
                  setPos({ x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H })
                }}
              />
            )
          })}
        </svg>

        {hover && (
          <div
            className="pointer-events-none absolute z-10 rounded-md px-2.5 py-1.5 text-xs shadow-lg"
            style={{ left: `${(pos.x / W) * 100}%`, top: `${(pos.y / H) * 100}%`, transform: 'translate(-50%, -130%)', background: '#0f2a43', color: '#fff', whiteSpace: 'nowrap' }}
          >
            <span className="font-bold">{hover}</span>
            <span className="mx-1.5 inline-block h-2 w-2 rounded-sm align-middle" style={{ background: catMap[catOf(hover)].fill }} />
            <span style={{ opacity: 0.85 }}>{readout(hover).replace(/^— /, '')}</span>
          </div>
        )}

        <div
          className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm"
          style={{ background: '#ffffff', border: '1px solid #d6e4ee', minHeight: 40, color: '#0f2a43' }}
          aria-live="polite"
        >
          {hover ? (
            <>
              <span className="inline-block h-3.5 w-3.5 rounded-sm" style={{ background: catMap[catOf(hover)].fill }} />
              <span className="font-bold">{hover}</span>
              <span style={{ color: '#5b7185' }}>{readout(hover)}</span>
            </>
          ) : (
            <span style={{ color: '#5b7185' }}>
              {highlightMode ? 'Hover a country to read it, or click the key to spotlight the highlighted set.' : 'Hover a country to read its level of water stress, or click a legend band to spotlight it.'}
            </span>
          )}
        </div>

        {data?.caption && <p className="mt-2 text-[12px]" style={{ color: '#5b7185' }}>{data.caption}</p>}
      </div>

      {!highlightMode && (
        <p className="mt-2 text-[11px] leading-snug" style={{ color: '#5b7185' }}>
          *Water stress: when demand for safe, usable water in a country exceeds the supply. Country boundaries: Natural Earth; shading follows the World Resources Institute (Aqueduct) baseline water-stress pattern.
        </p>
      )}
    </div>
  )
}
