'use client'
import { useState } from 'react'
import { useExamStore } from '@/store/examStore'

// ---------------------------------------------------------------------------
// Calculator
// ---------------------------------------------------------------------------

function Calculator() {
  const [expr, setExpr] = useState('')
  const [result, setResult] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)

  const append = (val: string) => {
    setResult(null)
    setHasError(false)
    setExpr((p) => p + val)
  }
  const clear = () => { setExpr(''); setResult(null); setHasError(false) }
  const backspace = () => { setExpr((p) => p.slice(0, -1)); setResult(null); setHasError(false) }

  const evaluate = () => {
    try {
      const sanitised = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/π/g, String(Math.PI))
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/√\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**')
      // Safety: only allow chars that appear after the replacements above
      if (/[^0-9+\-*/().\sMathsincotaqrPIe_]/.test(sanitised)) {
        throw new Error('Invalid characters')
      }
      // eslint-disable-next-line no-new-func
      const val = new Function(`"use strict"; return (${sanitised})`)() as number
      if (typeof val !== 'number' || !isFinite(val)) throw new Error('Bad result')
      setResult(Number(val.toPrecision(10)).toString())
      setHasError(false)
    } catch {
      setHasError(true)
      setResult('Error')
    }
  }

  type Btn = { label: string; action: () => void; wide?: boolean; accent?: boolean }
  const buttons: Btn[] = [
    { label: 'AC', action: clear, accent: true },
    { label: '⌫', action: backspace },
    { label: '(', action: () => append('(') },
    { label: ')', action: () => append(')') },
    { label: '7', action: () => append('7') },
    { label: '8', action: () => append('8') },
    { label: '9', action: () => append('9') },
    { label: '÷', action: () => append('÷') },
    { label: '4', action: () => append('4') },
    { label: '5', action: () => append('5') },
    { label: '6', action: () => append('6') },
    { label: '×', action: () => append('×') },
    { label: '1', action: () => append('1') },
    { label: '2', action: () => append('2') },
    { label: '3', action: () => append('3') },
    { label: '-', action: () => append('-') },
    { label: '0', action: () => append('0') },
    { label: '.', action: () => append('.') },
    { label: '^', action: () => append('^') },
    { label: '+', action: () => append('+') },
    { label: 'sin(', action: () => append('sin(') },
    { label: 'cos(', action: () => append('cos(') },
    { label: 'tan(', action: () => append('tan(') },
    { label: '√(', action: () => append('√(') },
    { label: 'π', action: () => append('π') },
    { label: '=', action: evaluate, wide: true, accent: true },
  ]

  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col gap-2">
        <div
          className="w-52 rounded-lg px-3 py-2 font-mono text-right text-sm min-h-[40px]"
          style={{
            background: '#0d1117',
            color: hasError ? '#ff4444' : '#3daa35',
            border: '1px solid #1e3a2e',
            wordBreak: 'break-all',
          }}
        >
          {result !== null ? result : expr || '0'}
        </div>
        {expr && result === null && (
          <div className="text-xs text-gray-400 font-mono pl-1 truncate max-w-[208px]">{expr}</div>
        )}
      </div>
      <div className="grid grid-cols-4 gap-1">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.action}
            className={`px-3 py-1.5 rounded text-xs font-semibold transition hover:opacity-80 active:scale-95 ${btn.wide ? 'col-span-2' : ''}`}
            style={{
              background: btn.accent ? '#0079a8' : '#e8edf2',
              color: btn.accent ? '#ffffff' : '#003b5c',
              border: '1px solid #c8d4de',
              minWidth: 36,
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}

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
          className="rounded-lg p-2 text-center"
          style={{ background: '#f0f7ff', border: '1px solid #c8d8ec' }}
        >
          <div className="font-mono text-xs font-bold text-[#003b5c] mb-0.5">{f}</div>
          <div className="text-gray-500" style={{ fontSize: 10 }}>{name}</div>
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
        className="grid text-xs font-semibold text-gray-500 uppercase tracking-wide pb-1 mb-1"
        style={{ gridTemplateColumns: '60px 150px 1fr', borderBottom: '1px solid #e5e7eb' }}
      >
        <span>Symbol</span>
        <span>Value</span>
        <span>Description</span>
      </div>
      {CONSTANTS.map(({ sym, val, desc }) => (
        <div
          key={sym}
          className="grid items-center py-1 text-sm"
          style={{ gridTemplateColumns: '60px 150px 1fr', borderBottom: '1px solid #f3f4f6' }}
        >
          <span className="font-mono font-bold text-[#003b5c]">{sym}</span>
          <span className="font-mono text-xs text-[#0079a8]">{val}</span>
          <span className="text-gray-500 text-xs">{desc}</span>
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
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ background: '#fafafa', border: '1px solid #e5e7eb' }}
        >
          <span className="font-mono text-xs font-bold text-[#003b5c]">{from}</span>
          <span className="text-gray-400 text-xs">=</span>
          <span className="font-mono text-xs text-[#0079a8] flex-1">{to}</span>
          <span
            className="text-gray-400 rounded-full px-1.5 py-0.5 flex-shrink-0"
            style={{ fontSize: 9, background: '#f3f4f6' }}
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
      style={{ background: '#ffffff', borderBottom: '2px solid #0079a8' }}
    >
      <div className="text-xs font-semibold text-[#0079a8] uppercase tracking-wider mb-3">
        {TITLES[activeTool]}
      </div>
      {activeTool === 'calculator' && <Calculator />}
      {activeTool === 'formulae' && <Formulae />}
      {activeTool === 'booklet' && <DataBooklet />}
      {activeTool === 'converter' && <Converter />}
    </div>
  )
}
