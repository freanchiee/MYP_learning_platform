'use client'

import { useState } from 'react'

/**
 * Reusable interactive concept-network artefact (I&S artefact).
 * Radial hub-and-spoke: a central node with spoke nodes positioned evenly around it,
 * each joined to the hub (and optionally to each other) by a connecting line. Hover or
 * click a node → its detail/definition pops up in a readout panel and the node is
 * spotlighted (its edge thickens, the rest dim). If `center` is omitted it falls back to
 * a simple free layout (nodes on a single ring, edges drawn only where given in `edges`).
 *
 * Theme-aware chrome (CSS var tokens); fixed node colours from data.color (the key);
 * own light backing + figure-surface so it stays legible on the dark Glass theme.
 *
 * Used for e.g. "World Happiness Index" with a central node and 4 indicator spokes,
 * each spoke carrying a definition revealed on hover.
 */
export interface NetworkNode {
  id: string
  label: string
  color?: string
  detail?: string // definition / explanation shown in the readout on hover/click
}
export interface NetworkEdge {
  from: string
  to: string
  label?: string
}
export interface NetworkGraphData {
  title?: string
  source?: string
  center?: { label: string; detail?: string; color?: string }
  nodes: NetworkNode[]
  edges?: NetworkEdge[]
}

const PALETTE = ['#0b7285', '#e8590c', '#9c36b5', '#2f9e44', '#1971c2', '#c2255c', '#f08c00', '#495057']
const W = 720
const H = 460
const CX = W / 2
const CY = H / 2
const HUB_R = 52 // hub node radius
const NODE_R = 40 // spoke node radius
const RING = 158 // distance from hub centre to spoke centres

export default function NetworkGraph({ data }: { data: NetworkGraphData }) {
  // active = id of focused spoke node, or '__center__' for the hub, or null
  const [active, setActive] = useState<string | null>(null)
  const hasCenter = !!data.center

  const color = (n: NetworkNode, i: number) => n.color ?? PALETTE[i % PALETTE.length]
  const n = data.nodes.length

  // Position each spoke node evenly around the ring, starting from the top.
  const pos = data.nodes.map((_, i) => {
    const a = -Math.PI / 2 + (i / Math.max(1, n)) * Math.PI * 2
    return { x: CX + RING * Math.cos(a), y: CY + RING * Math.sin(a) }
  })
  const byId = new Map(data.nodes.map((node, i) => [node.id, { node, i, ...pos[i] }]))

  // Resolve the readout content for whatever is currently focused.
  const focusNode = active && active !== '__center__' ? byId.get(active) : null
  const readout =
    active === '__center__' && data.center
      ? { name: data.center.label, detail: data.center.detail, swatch: data.center.color ?? '#334155' }
      : focusNode
        ? { name: focusNode.node.label, detail: focusNode.node.detail, swatch: color(focusNode.node, focusNode.i) }
        : null

  const dim = (id: string) => active !== null && active !== id

  return (
    <div
      className="figure-surface w-full overflow-hidden"
      style={{ padding: 16, background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-card)' }}
    >
      <div className="mb-2 flex items-baseline justify-between gap-3 flex-wrap">
        {data.title && (
          <h3 className="text-base font-extrabold tracking-tight" style={{ color: '#0f172a' }}>
            {data.title}
          </h3>
        )}
        {data.source && (
          <span className="text-[11px]" style={{ color: '#64748b' }}>
            Source: {data.source} · <span className="font-mono">interactive</span>
          </span>
        )}
      </div>

      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="img" aria-label={data.title ?? 'concept network'}>
          {/* ---- EDGES ---- */}
          {/* hub → spoke connectors (only when a centre exists) */}
          {hasCenter &&
            data.nodes.map((node, i) => {
              const spotlit = active === node.id || active === '__center__'
              return (
                <line
                  key={`hub-${node.id}`}
                  x1={CX}
                  y1={CY}
                  x2={pos[i].x}
                  y2={pos[i].y}
                  stroke={spotlit ? color(node, i) : '#cbd5e1'}
                  strokeWidth={spotlit ? 3.5 : 1.75}
                  opacity={active === null || spotlit ? 1 : 0.35}
                />
              )
            })}

          {/* explicit cross-edges from data.edges (used in both layouts) */}
          {(data.edges ?? []).map((e, ei) => {
            const a = byId.get(e.from)
            const b = byId.get(e.to)
            if (!a || !b) return null
            const spotlit = active === e.from || active === e.to
            const mx = (a.x + b.x) / 2
            const my = (a.y + b.y) / 2
            return (
              <g key={`edge-${ei}`} opacity={active === null || spotlit ? 1 : 0.3}>
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={spotlit ? '#475569' : '#cbd5e1'}
                  strokeWidth={spotlit ? 2.5 : 1.5}
                  strokeDasharray={hasCenter ? '5 4' : undefined}
                />
                {e.label && (
                  <g>
                    <rect x={mx - 4 - e.label.length * 3.1} y={my - 9} width={e.label.length * 6.2 + 8} height={16} rx={4} fill="#ffffff" stroke="#e2e8f0" />
                    <text x={mx} y={my} textAnchor="middle" dominantBaseline="central" fontSize={10} fill="#475569">
                      {e.label}
                    </text>
                  </g>
                )}
              </g>
            )
          })}

          {/* ---- SPOKE NODES ---- */}
          {data.nodes.map((node, i) => {
            const { x, y } = pos[i]
            const c = color(node, i)
            const focused = active === node.id
            const faded = dim(node.id)
            return (
              <g
                key={node.id}
                onMouseEnter={() => setActive(node.id)}
                onMouseLeave={() => setActive((cur) => (cur === node.id ? null : cur))}
                onClick={() => setActive((cur) => (cur === node.id ? null : node.id))}
                style={{ cursor: 'pointer' }}
                opacity={faded ? 0.4 : 1}
              >
                <circle cx={x} cy={y} r={focused ? NODE_R + 4 : NODE_R} fill="#ffffff" stroke={c} strokeWidth={focused ? 4 : 2.5} />
                <circle cx={x} cy={y} r={focused ? NODE_R + 4 : NODE_R} fill={c} opacity={0.1} />
                {wrapLabel(node.label).map((line, li, arr) => (
                  <text
                    key={li}
                    x={x}
                    y={y + (li - (arr.length - 1) / 2) * 13}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={11.5}
                    fontWeight={700}
                    fill="#0f172a"
                  >
                    {line}
                  </text>
                ))}
              </g>
            )
          })}

          {/* ---- HUB ---- */}
          {hasCenter && data.center && (
            <g
              onMouseEnter={() => setActive('__center__')}
              onMouseLeave={() => setActive((cur) => (cur === '__center__' ? null : cur))}
              onClick={() => setActive((cur) => (cur === '__center__' ? null : '__center__'))}
              style={{ cursor: 'pointer' }}
              opacity={dim('__center__') ? 0.45 : 1}
            >
              <circle
                cx={CX}
                cy={CY}
                r={active === '__center__' ? HUB_R + 4 : HUB_R}
                fill={data.center.color ?? '#1e293b'}
                stroke="#ffffff"
                strokeWidth={3}
              />
              {(() => {
                const lines = wrapLabel(data.center.label)
                const longest = Math.max(1, ...lines.map((l) => l.length))
                // shrink font so the longest line fits inside the hub circle
                const fs = Math.max(8, Math.min(13, Math.floor((HUB_R * 1.7) / (longest * 0.62))))
                const lh = fs + 1
                return lines.map((line, li, arr) => (
                  <text
                    key={li}
                    x={CX}
                    y={CY + (li - (arr.length - 1) / 2) * lh}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={fs}
                    fontWeight={800}
                    fill="#ffffff"
                  >
                    {line}
                  </text>
                ))
              })()}
            </g>
          )}
        </svg>

        {/* readout */}
        <div
          className="mt-1 flex items-start gap-2 rounded-lg px-3 py-2 text-sm"
          style={{ background: '#f8fafc', border: '1px solid #e2e8f0', minHeight: 48, color: '#0f172a' }}
          aria-live="polite"
        >
          {readout ? (
            <>
              <span className="mt-0.5 inline-block h-3 w-3 shrink-0 rounded-full" style={{ background: readout.swatch }} />
              <span>
                <span className="font-bold">{readout.name}</span>
                {readout.detail && <span style={{ color: '#475569' }}> — {readout.detail}</span>}
              </span>
            </>
          ) : (
            <span style={{ color: '#64748b' }}>
              Hover or tap a node to read its {hasCenter ? 'definition' : 'detail'}; the connected links light up.
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/** Split a node label into at most two balanced lines so it fits inside the circle. */
function wrapLabel(label: string): string[] {
  const words = label.split(/\s+/)
  if (words.length <= 1) return [label]
  if (label.length <= 12) return [label]
  let best = words.length
  let bestDiff = Infinity
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ').length
    const b = words.slice(i).join(' ').length
    const diff = Math.abs(a - b)
    if (diff < bestDiff) {
      bestDiff = diff
      best = i
    }
  }
  return [words.slice(0, best).join(' '), words.slice(best).join(' ')]
}
