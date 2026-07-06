import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SITE_FAQ } from '@/lib/site'
import LandingPage from './landing/page'

// FAQPage structured data — scoped to the public homepage. Strongest GEO signal
// (AI engines quote these); also eligible for Google FAQ rich results.
const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SITE_FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default async function RootPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  // Unauthenticated — show the marketing landing page
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <LandingPage />
    </>
  )
}
