import type { ReactNode } from 'react'
import Link from 'next/link'
import GuideTopBar from '@/components/guides/GuideTopBar'
import { LEGAL_UPDATED, OPERATOR, operatorComplete } from '@/lib/legal'

/** Shared frame for the privacy policy, terms and Impressum. */
export default function LegalShell({ title, intro, children, showUpdated = true }: { title: string; intro?: string; children: ReactNode; showUpdated?: boolean }) {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <GuideTopBar label="Legal" />
      <main className="mx-auto max-w-3xl px-5 py-12 md:px-8" style={{ color: 'var(--text)' }}>
        <h1 className="text-3xl font-extrabold md:text-4xl" style={{ letterSpacing: '-0.5px' }}>{title}</h1>
        {showUpdated && <p className="mt-1 text-xs" style={{ color: 'var(--text-subtle)' }}>Last updated {LEGAL_UPDATED}</p>}
        {intro && <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>{intro}</p>}
        {!operatorComplete() && (
          <p className="mt-4 rounded-xl p-3 text-sm" role="note" style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}>
            The operator details on this site are still being completed. Until they are, please write to {OPERATOR.email} with any question.
          </p>
        )}
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed">{children}</div>
        <nav className="mt-12 flex flex-wrap gap-4 text-sm font-bold" aria-label="Legal pages">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of use</Link>
          <Link href="/impressum">Impressum</Link>
        </nav>
      </main>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold">{title}</h2>
      <div className="mt-2 space-y-3" style={{ color: 'var(--text-muted)' }}>{children}</div>
    </section>
  )
}

/** A field that must be filled in; shows a visible gap if it is not. */
export function Field({ value }: { value: string | null }) {
  return value ? <>{value}</> : <em>(to be completed)</em>
}
