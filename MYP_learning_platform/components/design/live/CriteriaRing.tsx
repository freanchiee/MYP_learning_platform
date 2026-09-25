'use client'
import { CRITERIA, CRITERION_LETTERS } from '@/lib/design-live/criteria'

const polar = (cx: number, cy: number, r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)]
}
/** Donut segment between angles a0..a1 (degrees, 0 = top, clockwise). */
const seg = (cx: number, cy: number, r0: number, r1: number, a0: number, a1: number) => {
  const [x0, y0] = polar(cx, cy, r1, a0)
  const [x1, y1] = polar(cx, cy, r1, a1)
  const [x2, y2] = polar(cx, cy, r0, a1)
  const [x3, y3] = polar(cx, cy, r0, a0)
  const big = a1 - a0 > 180 ? 1 : 0
  return `M${x0} ${y0} A${r1} ${r1} 0 ${big} 1 ${x1} ${y1} L${x2} ${y2} A${r0} ${r0} 0 ${big} 0 ${x3} ${y3} Z`
}

/**
 * The CritABCD dial: four quadrants A B C D. The criterion the student is working on is enlarged
 * and outlined; each quadrant fills clockwise with that criterion's completion. Meaning is never
 * carried by colour alone: the current quadrant is bigger, letters are printed, % is in the legend.
 */
export function CriteriaRing({ current, progress, present, size = 132 }: { current?: string; progress: Partial<Record<string, number>>; present: string[]; size?: number }) {
  const cx = 60, cy = 60
  const summary = CRITERION_LETTERS.map((l) => `${l}: ${present.includes(l) ? `${progress[l] ?? 0}% complete` : 'not in this activity'}`).join(', ')
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" role="img" aria-label={`Criteria dial. ${current ? `You are on criterion ${current}. ` : ''}${summary}`} style={{ flex: 'none' }}>
      {CRITERION_LETTERS.map((l, i) => {
        const a0 = i * 90 + 3, a1 = i * 90 + 87
        const isCur = current === l
        const on = present.includes(l)
        const c = CRITERIA[l].color
        const r0 = isCur ? 30 : 34, r1 = isCur ? 58 : 52
        const pct = Math.max(0, Math.min(100, progress[l] ?? 0))
        const [lx, ly] = polar(cx, cy, (r0 + r1) / 2, (a0 + a1) / 2)
        return (
          <g key={l} opacity={on ? 1 : 0.35}>
            <path d={seg(cx, cy, r0, r1, a0, a1)} fill={c} fillOpacity={isCur ? 0.35 : 0.18} stroke={c} strokeWidth={isCur ? 2.5 : 1} strokeDasharray={on ? undefined : '3 3'} />
            {pct > 0 && <path d={seg(cx, cy, r0, r1, a0, a0 + ((a1 - a0) * pct) / 100)} fill={c} fillOpacity={isCur ? 0.95 : 0.75} />}
            <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize={isCur ? 20 : 15} fontWeight={900} fill="var(--text)" style={{ paintOrder: 'stroke', stroke: 'var(--surface)', strokeWidth: 3 }}>{l}</text>
          </g>
        )
      })}
      <circle cx={cx} cy={cy} r={current ? 24 : 26} fill="var(--surface)" stroke="var(--border-strong)" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="8" fontWeight="800" fill="var(--text-subtle)">{current ? 'YOU ARE' : 'CRIT'}</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="11" fontWeight="900" fill="var(--text)">{current ? 'HERE' : 'ABCD'}</text>
    </svg>
  )
}

/** Ring + legend card. `currentStrand` such as 'B.ii' highlights criterion B. */
export default function CriteriaRingCard({ currentStrand, progress, present }: { currentStrand?: string; progress: Partial<Record<string, number>>; present: string[] }) {
  const current = currentStrand && /^[A-D]\./.test(currentStrand) ? currentStrand[0] : undefined
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
      <CriteriaRing current={current} progress={progress} present={present} />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 5, flex: 1, minWidth: 200 }}>
        {CRITERION_LETTERS.map((l) => {
          const on = present.includes(l)
          const isCur = current === l
          return (
            <li key={l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12.5, fontWeight: isCur ? 900 : 700, color: on ? 'var(--text)' : 'var(--text-subtle)', opacity: on ? 1 : 0.7 }}>
              <span aria-hidden style={{ width: 22, height: 22, borderRadius: 999, background: CRITERIA[l].color, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 900, outline: isCur ? `3px solid ${CRITERIA[l].color}55` : 'none' }}>{l}</span>
              <span style={{ flex: 1 }}>{CRITERIA[l].name}{isCur && currentStrand ? ` · ${currentStrand}` : ''}</span>
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{on ? `${progress[l] ?? 0}%` : '–'}</span>
              {isCur && <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.1em', color: CRITERIA[l].color }}>◀ HERE</span>}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
