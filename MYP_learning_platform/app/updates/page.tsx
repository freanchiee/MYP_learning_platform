import type { Metadata } from 'next'
import GuideTopBar from '@/components/guides/GuideTopBar'
import InterestForm from '@/components/leads/InterestForm'

// A stand-alone sign-up page to link from anywhere (emails, social posts, a
// menu). Kept out of search results — it is a form, not content.
export const metadata: Metadata = {
  title: 'Get updates',
  description: 'Tell us which MYP subjects and tools you are interested in and we may email you about them.',
  robots: { index: false, follow: true },
}

export default function UpdatesPage() {
  return (
    <div style={{ background: 'var(--bg)', backgroundImage: 'var(--bg-image)', minHeight: '100vh' }}>
      <GuideTopBar label="Get updates" />
      <main className="mx-auto max-w-2xl px-5 py-12 md:px-8">
        <InterestForm sourcePage="/updates" heading="Get updates from CritABCD" />
      </main>
    </div>
  )
}
