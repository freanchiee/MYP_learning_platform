'use client'
import { useExamStore } from '@/store/examStore'

// ---------------------------------------------------------------------------
// Formulae
// ---------------------------------------------------------------------------

const FORMULAE = [
  { f: 'v = s / t', name: 'Speed' },
  { f: 'a = (v − u) / t', name: 'Acceleration' },
  { f: 'F = ma', name: "Newton's 2nd" },
  { f: 'W = mg', name: 'Weight' },
  { f: 'p = mv', name: 'Momentum' },
  { f: 'KE = ½mv²', name: 'Kinetic Energy' },
  { f: 'GPE = mgh', name: 'Grav. PE' },
  { f: 'P = E / t', name: 'Power' },
  { f: 'V = IR', name: "Ohm's Law" },
  { f: 'P = IV', name: 'Electrical Power' },
  { f: 'Q = It', name: 'Charge' },
  { f: 'ρ = m / V', name: 'Density' },
  { f: 'T = 2π√(l/g)', name: 'Pendulum Period' },
  { f: 'F = kx', name: "Hooke's Law" },
  { f: 'λ = v / f', name: 'Wavelength' },
  { f: "n = sin(i)/sin(r)", name: "Snell's Law" },
]

function Formulae() {
  return (
    <div className="grid grid-cols-4 gap-2" style={{ maxWidth: 520 }}>
      {FORMULAE.map(({ f, name }) => (
        <div
          key={f}
          className="p-2 text-center"
          style={{ background: 'var(--surface-tint)', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)' }}
        >
          <div className="font-mono text-xs font-bold mb-0.5" style={{ color: 'var(--accent)' }}>{f}</div>
          <div className="text-ink-subtle" style={{ fontSize: 10 }}>{name}</div>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Data Booklet
// ---------------------------------------------------------------------------

const CONSTANTS = [
  { sym: 'g', val: '9.8 N/kg', desc: 'Gravitational field strength (Earth)' },
  { sym: 'c', val: '3 × 10⁸ m/s', desc: 'Speed of light in vacuum' },
  { sym: 'e', val: '1.6 × 10⁻¹⁹ C', desc: 'Elementary charge' },
  { sym: 'mₑ', val: '9.11 × 10⁻³¹ kg', desc: 'Electron rest mass' },
  { sym: 'h', val: '6.63 × 10⁻³⁴ J·s', desc: "Planck's constant" },
  { sym: 'Nₐ', val: '6.02 × 10²³ mol⁻¹', desc: "Avogadro's number" },
  { sym: 'R', val: '8.31 J/(mol·K)', desc: 'Universal gas constant' },
  { sym: 'k', val: '8.99 × 10⁹ N·m²/C²', desc: "Coulomb's constant" },
]

function DataBooklet() {
  return (
    <div className="flex flex-col gap-1" style={{ minWidth: 400 }}>
      <div
        className="grid text-xs font-semibold text-ink-subtle uppercase tracking-wide pb-1 mb-1"
        style={{ gridTemplateColumns: '60px 150px 1fr', borderBottom: '1px solid var(--border)' }}
      >
        <span>Symbol</span>
        <span>Value</span>
        <span>Description</span>
      </div>
      {CONSTANTS.map(({ sym, val, desc }) => (
        <div
          key={sym}
          className="grid items-center py-1 text-sm"
          style={{ gridTemplateColumns: '60px 150px 1fr', borderBottom: '1px solid var(--divider)' }}
        >
          <span className="font-mono font-bold" style={{ color: 'var(--accent)' }}>{sym}</span>
          <span className="font-mono text-xs" style={{ color: 'var(--accent-2)' }}>{val}</span>
          <span className="text-ink-subtle text-xs">{desc}</span>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Converter
// ---------------------------------------------------------------------------

const CONVERSIONS = [
  { from: '1 km', to: '1 000 m', cat: 'Length' },
  { from: '1 hour', to: '3 600 s', cat: 'Time' },
  { from: '1 kg', to: '1 000 g', cat: 'Mass' },
  { from: '0 °C', to: '273.15 K', cat: 'Temperature' },
  { from: '1 eV', to: '1.6 × 10⁻¹⁹ J', cat: 'Energy' },
  { from: '1 MeV', to: '1.6 × 10⁻¹³ J', cat: 'Energy' },
  { from: '1 atm', to: '101 325 Pa', cat: 'Pressure' },
  { from: '1 N/m²', to: '1 Pa', cat: 'Pressure' },
]

function Converter() {
  return (
    <div className="grid grid-cols-2 gap-2" style={{ minWidth: 380 }}>
      {CONVERSIONS.map(({ from, to, cat }) => (
        <div
          key={`${from}-${to}`}
          className="flex items-center gap-2 px-3 py-2"
          style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-control)' }}
        >
          <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>{from}</span>
          <span className="text-ink-subtle text-xs">=</span>
          <span className="font-mono text-xs flex-1" style={{ color: 'var(--accent-2)' }}>{to}</span>
          <span
            className="text-ink-subtle rounded-full px-1.5 py-0.5 flex-shrink-0"
            style={{ fontSize: 9, background: 'var(--surface-3)' }}
          >
            {cat}
          </span>
        </div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// ToolsPanel
// ---------------------------------------------------------------------------

const TITLES: Record<string, string> = {
  calculator: '🧮 Scientific Calculator',
  formulae: '∑ Physics Formulae',
  booklet: '📋 Data Booklet — Physical Constants',
  converter: '⇄ Unit Conversions',
}

export default function ToolsPanel() {
  const activeTool = useExamStore((s) => s.activeTool)

  if (!activeTool) return null

  return (
    <div
      className="flex-shrink-0 overflow-x-auto px-5 py-3"
      style={{ background: 'var(--surface)', borderBottom: '2px solid var(--accent)' }}
    >
      <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--accent)' }}>
        {TITLES[activeTool]}
      </div>
      {activeTool === 'calculator' && (
        <iframe
          src="https://www.desmos.com/scientific"
          title="Desmos Scientific Calculator"
          className="rounded-lg border border-line"
          style={{ height: '320px', width: '560px', maxWidth: '100%' }}
          allow="fullscreen"
        />
      )}
      {activeTool === 'formulae' && <Formulae />}
      {activeTool === 'booklet' && <DataBooklet />}
      {activeTool === 'converter' && <Converter />}
    </div>
  )
}
