// Static reference diagram — a component/connection list, not a live sim.
// Deliberately simple (cards + arrows) rather than a true schematic layout:
// physical-computing case studies need a wiring REFERENCE, not a simulation
// (the actual hardware is what gets tested, in Criterion D).

import type { WiringItem } from '@/data/design/caseStudies'

export default function WiringDiagram({ items, accent }: { items: WiringItem[]; accent: string }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
        WIRING REFERENCE
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        Check this against your own build before powering anything on.
      </p>

      <div className="mt-4 space-y-2.5">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 rounded-xl p-3.5 sm:flex-row sm:items-center"
            style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
          >
            <div className="flex flex-1 items-center gap-3">
              <span className="rounded-lg px-3 py-2 text-sm font-bold" style={{ background: accent, color: '#fff' }}>
                {it.component}
              </span>
              <span style={{ color: 'var(--text-subtle)' }}>→</span>
              <span className="rounded-lg px-3 py-2 text-sm font-bold" style={{ background: 'var(--surface-2)', color: 'var(--text)' }}>
                {it.connectsTo}
              </span>
            </div>
            <p className="text-sm sm:max-w-xs" style={{ color: 'var(--text-muted)' }}>
              {it.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
