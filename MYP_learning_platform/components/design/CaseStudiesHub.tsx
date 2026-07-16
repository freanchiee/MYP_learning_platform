'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ADVANCED_CASE_STUDIES, type CaseStudyTrack } from '@/data/design/caseStudies'

const TRACKS: (CaseStudyTrack | 'All')[] = ['All', 'Physical computing', 'Digital design']

export default function CaseStudiesHub() {
  const [track, setTrack] = useState<(typeof TRACKS)[number]>('All')
  const items = track === 'All' ? ADVANCED_CASE_STUDIES : ADVANCED_CASE_STUDIES.filter((c) => c.track === track)

  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: 'calc(100vh - 56px)' }}>
      <div className="mx-auto max-w-[1200px] px-5 py-10 md:px-10">
        <Link href="/design" className="text-sm font-bold tracking-widest" style={{ color: 'var(--text-subtle)' }}>
          ← BACK TO DESIGN
        </Link>

        <div className="mt-4 text-xs font-black tracking-[0.35em]" style={{ color: 'var(--accent)' }}>
          OPTIONAL · SELF-SELECT · BUILD SOMETHING REAL
        </div>
        <h1 className="mt-2 text-4xl font-extrabold md:text-6xl" style={{ color: 'var(--text)', letterSpacing: '-1px' }}>
          Advanced Case Studies
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          Ambitious, optional project briefs for students who want to design and build something real — not
          hardware-gated for everyone, just for whoever picks one. Every case study still runs the full A→D design
          cycle: research a real need, write your <strong>own</strong> success criteria, generate genuinely divergent
          ideas, build it, and test against what you set out to hit.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {TRACKS.map((t) => (
            <button
              key={t}
              onClick={() => setTrack(t)}
              className="rounded-full px-4 py-2 text-sm font-black transition-all"
              style={{
                background: track === t ? 'var(--accent)' : 'var(--surface-2)',
                color: track === t ? 'var(--text-on-accent)' : 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <Link
              key={c.id}
              href={`/design/case-studies/${c.id}`}
              className="group flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1"
              style={{ background: `linear-gradient(145deg, ${c.accent.from} 0%, ${c.accent.via} 55%, ${c.accent.to} 100%)` }}
            >
              <div className="text-xs font-black tracking-widest" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {c.track.toUpperCase()}
                {c.difficultyTier ? ` · ${c.difficultyTier.toUpperCase()}` : ''}
              </div>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white">{c.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {c.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {[`🌍 ${c.globalContext}`, `🔑 ${c.keyConcept}`].map((t) => (
                  <span key={t} className="rounded-full px-2.5 py-1 text-[11px] font-bold" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 text-sm font-black tracking-wide text-white opacity-80 group-hover:opacity-100">
                Start this case study →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
