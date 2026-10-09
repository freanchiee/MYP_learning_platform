import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Served at /robots.txt. Every route below the app's (platform) group — plus
// /exam, /results, /onboarding and /join — sits behind app/(platform)/layout.tsx's
// (or its own) server-side auth check and 302s an unauthenticated visitor (i.e.
// Googlebot) straight to /login. Leaving any of these crawlable just burns crawl
// budget on a redirect and, worse, GSC lumps many different URLs that all
// redirect to the same /login target together as "duplicate, no canonical" —
// that's exactly what was happening to /physics-papers, /bio-papers,
// /chem-papers, /humanities-papers and /geography-papers. Keep this list in
// sync with PROTECTED_ROUTES in middleware.ts and the route folders under
// app/(platform)/.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin',
        '/bio-papers',
        '/chem-papers',
        '/classes',
        '/dashboard',
        '/design',
        '/exam/',
        '/geography-papers',
        '/humanities-papers',
        '/join',
        '/login',
        '/onboarding',
        '/papers',
        '/physics-papers',
        '/practice',
        '/pricing',
        '/results/',
        '/settings',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
