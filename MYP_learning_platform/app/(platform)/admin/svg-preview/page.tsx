/**
 * /admin/svg-preview — Quick visual test for SVG figure components.
 * Not auth-gated (admin-only path, local dev only).
 */
import DemolitionCraneDiagram from '@/components/exam/figures/DemolitionCraneDiagram'
import SmokeAlarm from '@/components/exam/figures/SmokeAlarm'

export const dynamic = 'force-dynamic'

export default function SvgPreviewPage() {
  return (
    <main className="min-h-screen bg-bg p-8" style={{ backgroundImage: 'var(--bg-image)' }}>
      <h1 className="text-2xl font-bold text-ink mb-2">SVG Figure Preview</h1>
      <p className="text-sm text-ink-subtle mb-8">
        Figures rendered as React SVG components — zero API cost, pixel-perfect, scalable.
      </p>

      <section className="mb-12">
        <h2 className="text-lg font-semibold text-ink-muted mb-1">
          Demolition Crane — Wrecking Ball (physics-nov-2024 Q1)
        </h2>
        <p className="text-xs text-ink-subtle mb-4">
          component: <code>components/exam/figures/DemolitionCraneDiagram.tsx</code>
        </p>

        {/* Full size */}
        <div className="bg-surface rounded-card shadow-card p-6 mb-4 max-w-4xl border border-line">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-3">
            Full width (900 px)
          </p>
          <div className="figure-surface p-3">
            <DemolitionCraneDiagram width={860} />
          </div>
        </div>

        {/* Responsive smaller */}
        <div className="bg-surface rounded-card shadow-card p-6 max-w-xl border border-line">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-3">
            Exam card width (520 px)
          </p>
          <div className="figure-surface p-3">
            <DemolitionCraneDiagram width={500} />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-semibold text-ink-muted mb-1">
          Smoke Alarm — ceiling-mounted, rising smoke (physics-nov-2024 Q? page-03)
        </h2>
        <p className="text-xs text-ink-subtle mb-4">
          component: <code>components/exam/figures/SmokeAlarm.tsx</code>
        </p>

        <div className="bg-surface rounded-card shadow-card p-6 mb-4 max-w-2xl border border-line">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-3">
            Full width (480 px)
          </p>
          <div className="figure-surface p-3">
            <SmokeAlarm width={480} />
          </div>
        </div>

        <div className="bg-surface rounded-card shadow-card p-6 max-w-xs border border-line">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-subtle mb-3">
            Card width (280 px)
          </p>
          <div className="figure-surface p-3">
            <SmokeAlarm width={280} />
          </div>
        </div>
      </section>
    </main>
  )
}
