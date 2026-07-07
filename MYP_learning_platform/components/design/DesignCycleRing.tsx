'use client'

import { DESIGN_CYCLE, CRITERION_BY_KEY, type CriterionKey } from '@/data/design/cycle'

// The four criteria placed clockwise on a circle: A top, B right, C bottom, D left.
const NODES: { key: CriterionKey; x: number; y: number }[] = [
  { key: 'A', x: 140, y: 46 },
  { key: 'B', x: 234, y: 140 },
  { key: 'C', x: 140, y: 234 },
  { key: 'D', x: 46, y: 140 },
]
const CX = 140
const CY = 140
const R = 94

/** Interactive MYP design-cycle ring — doubles as the stage navigator. */
export default function DesignCycleRing({
  activeKey,
  onSelect,
  doneKeys,
}: {
  activeKey: CriterionKey
  onSelect: (k: CriterionKey) => void
  doneKeys: Set<CriterionKey>
}) {
  const active = CRITERION_BY_KEY[activeKey]

  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full max-w-[280px] mx-auto select-none"
      role="group"
      aria-label="Design cycle — choose a criterion"
    >
      {/* Cycle track */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="var(--border)" strokeWidth={2} strokeDasharray="3 7" />

      {/* Clockwise flow arrows at the 45° gaps between nodes */}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x = CX + R * Math.cos(rad)
        const y = CY + R * Math.sin(rad)
        return (
          <path
            key={deg}
            d="M -5 -4 L 5 0 L -5 4 Z"
            fill="var(--text-subtle)"
            opacity={0.45}
            transform={`translate(${x} ${y}) rotate(${deg + 90})`}
          />
        )
      })}

      {/* Nodes */}
      {NODES.map((n) => {
        const c = CRITERION_BY_KEY[n.key]
        const isActive = n.key === activeKey
        const done = doneKeys.has(n.key)
        return (
          <g
            key={n.key}
            onClick={() => onSelect(n.key)}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label={`Criterion ${n.key}: ${c.title}`}
            aria-pressed={isActive}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={isActive ? 34 : 30}
              fill={isActive ? c.cssVar : 'var(--surface-elevated)'}
              stroke={c.cssVar}
              strokeWidth={isActive ? 0 : 2.5}
              style={{
                filter: isActive ? `drop-shadow(0 4px 14px ${c.cssVar})` : 'none',
                transition: 'r .18s ease, fill .18s ease',
              }}
            />
            <text
              x={n.x}
              y={n.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={26}
              fontWeight={800}
              fill={isActive ? '#fff' : 'var(--text)'}
              style={{ pointerEvents: 'none' }}
            >
              {n.key}
            </text>
            {done && (
              <g style={{ pointerEvents: 'none' }}>
                <circle cx={n.x + 22} cy={n.y - 22} r={9} fill="var(--success)" stroke="var(--surface-elevated)" strokeWidth={2} />
                <path
                  d={`M ${n.x + 18} ${n.y - 22} l 3 3 l 5 -6`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            )}
          </g>
        )
      })}

      {/* Centre: the active phase */}
      <text x={CX} y={CY - 8} textAnchor="middle" fontSize={11} fontWeight={800} letterSpacing="2" fill="var(--text-subtle)">
        THE DESIGN CYCLE
      </text>
      <text x={CX} y={CY + 12} textAnchor="middle" fontSize={16} fontWeight={800} fill={active.cssVar}>
        {active.phase}
      </text>
    </svg>
  )
}

// Re-exported for callers that want the criterion order without importing the cycle.
export const CYCLE_KEYS = DESIGN_CYCLE.map((c) => c.key)
