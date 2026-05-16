'use client'

import { useState } from 'react'

export default function PendulumGeoGebra() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full" style={{ height: 420 }}>
      {/* Loading overlay */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 rounded-lg z-10">
          <div className="w-10 h-10 border-4 border-[var(--ib-teal)] border-t-transparent rounded-full animate-spin mb-3" />
          <p className="text-gray-300 text-sm">Loading GeoGebra simulation…</p>
        </div>
      )}

      {/* GeoGebra embed */}
      <iframe
        title="Pendulum Simulation — GeoGebra"
        src="https://www.geogebra.org/m/v5RWRdvM"
        width="100%"
        height="420"
        className="rounded-lg border-0"
        allow="fullscreen"
        onLoad={() => setLoaded(true)}
        style={{ display: 'block' }}
      />

      {/* Caption */}
      <p className="mt-2 text-center text-xs text-gray-500">
        Adjust the <strong>Length</strong>, <strong>Mass</strong> and <strong>Amplitude</strong>{' '}
        sliders to observe how they affect the period of the pendulum.
      </p>
    </div>
  )
}
