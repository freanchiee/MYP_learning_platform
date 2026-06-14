import type { ReactNode } from 'react'

/* Physics symbols that float up in the background */
const SYMBOLS = [
  { char: '∫',  left: '5%',  dur: '14s', delay: '0s',   size: '1.6rem' },
  { char: 'λ',  left: '12%', dur: '18s', delay: '2s',   size: '1.2rem' },
  { char: 'Δ',  left: '22%', dur: '12s', delay: '5s',   size: '1.8rem' },
  { char: 'ω',  left: '30%', dur: '20s', delay: '1s',   size: '1.3rem' },
  { char: 'π',  left: '42%', dur: '15s', delay: '7s',   size: '1.5rem' },
  { char: 'φ',  left: '55%', dur: '17s', delay: '3s',   size: '1.4rem' },
  { char: 'ε',  left: '63%', dur: '11s', delay: '9s',   size: '1.2rem' },
  { char: '∇',  left: '72%', dur: '19s', delay: '0.5s', size: '1.7rem' },
  { char: 'ρ',  left: '80%', dur: '13s', delay: '4s',   size: '1.3rem' },
  { char: 'σ',  left: '88%', dur: '16s', delay: '6s',   size: '1.5rem' },
  { char: 'θ',  left: '94%', dur: '22s', delay: '2.5s', size: '1.2rem' },
  { char: 'μ',  left: '35%', dur: '24s', delay: '8s',   size: '1.4rem' },
  { char: 'α',  left: '48%', dur: '10s', delay: '11s',  size: '1.6rem' },
  { char: 'β',  left: '17%', dur: '21s', delay: '13s',  size: '1.3rem' },
  { char: '⚡', left: '76%', dur: '13s', delay: '15s',  size: '1.1rem' },
]

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)' }}
    >
      {/* Floating physics symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        {SYMBOLS.map((s, i) => (
          <span
            key={i}
            className="physics-symbol"
            style={{
              left: s.left,
              fontSize: s.size,
              animationDuration: `${s.dur}, ${parseFloat(s.dur) * 0.7}s`,
              animationDelay: `${s.delay}, ${s.delay}`,
            }}
          >
            {s.char}
          </span>
        ))}
      </div>

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--accent-soft) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <div className="w-full max-w-md relative z-10">
        {/* Platform branding */}
        <div
          className="flex flex-col items-center mb-8 select-none fade-up"
          style={{ animationDelay: '0.05s' }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%)',
              border: '2px solid var(--accent-fg)',
            }}
          >
            <span className="text-3xl font-extrabold tracking-tighter" style={{ color: 'var(--accent-fg)' }}>
              MYP
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-wide" style={{ color: 'var(--text)' }}>MYP Sciences</h1>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
            e-Assessment Platform
          </p>
        </div>

        {/* Card */}
        <div
          className="fade-up rounded-2xl shadow-2xl overflow-hidden"
          style={{
            animationDelay: '0.15s',
            background: 'var(--surface-elevated)',
            border: '1px solid var(--border)',
          }}
        >
          {children}
        </div>

        <p
          className="text-center text-xs mt-6 fade-up"
          style={{ color: 'var(--text-subtle)', animationDelay: '0.3s' }}
        >
          IB MYP Sciences · AI-Powered Grading
        </p>
      </div>
    </div>
  )
}
