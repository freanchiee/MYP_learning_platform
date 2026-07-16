'use client'

import { useEffect, useRef, useState } from 'react'

// Simulated live sensor dashboard — plausible temp/humidity/pressure readings
// with drift + noise, plus a calibration offset. The offset matters
// pedagogically: a real sensor drifts and needs calibrating against a known
// reference, a fact a bare "clean" simulation would hide.
// ponytail: fake data generator, not a real sensor feed — swap the tick()
// body for an actual reading if this ever talks to real hardware.

interface Reading {
  t: number
  tempC: number
  humidityPct: number
  pressureHpa: number
}

function nextReading(prev: Reading, calibrationOffset: number): Reading {
  const drift = (base: number, amp: number) => base + Math.sin(prev.t / 12) * amp + (prev.t % 7 === 0 ? amp * 0.3 : 0)
  return {
    t: prev.t + 1,
    tempC: Number((drift(21, 3) + calibrationOffset).toFixed(1)),
    humidityPct: Number(Math.min(100, Math.max(0, drift(55, 12))).toFixed(0)),
    pressureHpa: Number(drift(1013, 4).toFixed(0)),
  }
}

function Sparkline({ values, color }: { values: number[]; color: string }) {
  if (values.length < 2) return null
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1
  const pts = values
    .map((v, i) => `${(i / (values.length - 1)) * 100},${20 - ((v - min) / range) * 20}`)
    .join(' ')
  return (
    <svg viewBox="0 0 100 20" className="mt-1.5 h-8 w-full" preserveAspectRatio="none">
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export default function WeatherStationSim({ accent }: { accent: string }) {
  const [history, setHistory] = useState<Reading[]>([{ t: 0, tempC: 21, humidityPct: 55, pressureHpa: 1013 }])
  const [running, setRunning] = useState(true)
  const [calibrationOffset, setCalibrationOffset] = useState(0)
  const offsetRef = useRef(calibrationOffset)
  offsetRef.current = calibrationOffset

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setHistory((h) => [...h.slice(-39), nextReading(h[h.length - 1], offsetRef.current)])
    }, 900)
    return () => clearInterval(id)
  }, [running])

  const latest = history[history.length - 1]

  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between">
        <div className="text-xs font-black tracking-widest" style={{ color: accent }}>
          SIMULATED WEATHER STATION FEED
        </div>
        <button
          onClick={() => setRunning((r) => !r)}
          className="rounded-full px-3 py-1 text-xs font-bold"
          style={{ background: running ? accent : 'var(--surface-elevated)', color: running ? '#fff' : 'var(--text-subtle)', border: '1px solid var(--border)' }}
        >
          {running ? '● Live' : '⏸ Paused'}
        </button>
      </div>
      <p className="mt-1 text-sm" style={{ color: 'var(--text-subtle)' }}>
        Fake-but-plausible data to prototype your dashboard against before real sensors arrive. Real sensors drift — use the
        calibration slider to see why every weather station needs one.
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          { label: 'Temperature', unit: '°C', v: latest.tempC, series: history.map((h) => h.tempC), color: '#e0463f' },
          { label: 'Humidity', unit: '%', v: latest.humidityPct, series: history.map((h) => h.humidityPct), color: '#2778ff' },
          { label: 'Pressure', unit: 'hPa', v: latest.pressureHpa, series: history.map((h) => h.pressureHpa), color: '#1fa971' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-3.5" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
            <div className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
              {s.label.toUpperCase()}
            </div>
            <div className="mt-1 text-2xl font-black" style={{ color: 'var(--text)' }}>
              {s.v}
              <span className="text-sm font-bold" style={{ color: 'var(--text-subtle)' }}>
                {s.unit}
              </span>
            </div>
            <Sparkline values={s.series} color={s.color} />
          </div>
        ))}
      </div>

      <label className="mt-4 block">
        <span className="text-xs font-bold" style={{ color: 'var(--text-subtle)' }}>
          CALIBRATION OFFSET (°C) — real sensors need this tuned against a reference thermometer
        </span>
        <div className="mt-1.5 flex items-center gap-3">
          <input
            type="range"
            min={-5}
            max={5}
            step={0.5}
            value={calibrationOffset}
            onChange={(e) => setCalibrationOffset(Number(e.target.value))}
            className="flex-1"
          />
          <span className="w-14 text-right text-sm font-bold" style={{ color: 'var(--text)' }}>
            {calibrationOffset > 0 ? '+' : ''}
            {calibrationOffset}
          </span>
        </div>
      </label>
    </div>
  )
}
