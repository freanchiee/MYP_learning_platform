import type { Metadata } from 'next'
import Link from 'next/link'
import Wordmark from '@/components/brand/Wordmark'
import ResourceGates from '@/components/resources/ResourceGates'

export const metadata: Metadata = {
  title: 'Free Resources — CritABCD',
  description: 'Free, no-login interactive quizzes, simulations and revision tools for IB MYP.',
}

export default function ResourcesPage() {
  return (
    <div style={{ background: '#0a0f2e' }}>
      {/* Minimal top bar (public — no platform chrome) */}
      <header
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6"
        style={{ height: 56, background: 'rgba(10,15,30,0.6)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Link href="/" className="flex items-baseline gap-2">
          <Wordmark className="text-lg font-black tracking-tight" style={{ color: '#ffffff' }} />
          <span className="hidden sm:block text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">Free Resources</span>
        </Link>
        <Link
          href="/"
          className="text-xs font-black tracking-widest text-white/70 hover:text-white px-4 py-2 rounded-full"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          ← HOME
        </Link>
      </header>

      <div style={{ paddingTop: 56 }}>
        <ResourceGates />
      </div>
    </div>
  )
}
