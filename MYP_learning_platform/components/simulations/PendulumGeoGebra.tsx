'use client'

import { useState } from 'react'

export default function PendulumGeoGebra() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full" style={{ height: 420 }}>
      {/* Loading overlay */}
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-control z-10"
          style={{ background: 'var(--surface-deep)', color: 'var(--surface-deep-fg)' }}
        >
          <div className="w-10 h-10 border-4 border-[var(--ib-teal)] border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-sm">Loading GeoGebra simulation…</p>
        </div>
      )}

      {/* GeoGebra embed */}
      <iframe
        title="Pendulum Simulation — GeoGebra"
        src="https://www.geogebra.org/m/v5RWRdvM"
        width="100%"
        height="420"
        className="rounded-control border-0"
        allow="fullscreen"
        onLoad={() => setLoaded(true)}
        style={{ display: 'block' }}
      />

      {/* Caption */}
      <p className="mt-2 text-center text-xs text-ink-subtle">
        Adjust the <strong>Length</strong>, <strong>Mass</strong> and <strong>Amplitude</strong>{' '}
        sliders to observe how they affect the period of the pendulum.
      </p>
    </div>
  )
}
