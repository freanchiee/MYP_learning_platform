import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { SITE_FAQ, SITE_COURSES, SITE_URL } from '@/lib/site'
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

// Per-subject Course structured data, as an ItemList of schema.org/Course.
// `provider` references the EducationalOrganization defined in the root layout.
const COURSES_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: SITE_COURSES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Course',
      name: c.name,
      description: c.description,
      url: `${SITE_URL}${c.href}`,
      inLanguage: 'en',
      educationalLevel: 'IB Middle Years Programme',
      provider: { '@id': `${SITE_URL}/#org` },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
      },
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(COURSES_LD) }}
      />
      <LandingPage />
    </>
  )
}
