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
// Same policy for everyone: the private app surface is off-limits, everything
// else (guides, blog, resources, papers hubs' marketing pages, /llms.txt,
// /llms-full.txt, /api/mcp) is wide open. AI crawlers/agents get their own
// explicit named groups — same rules as '*' — so there's no ambiguity that
// they're welcome to read and cite the guides/blog ("reading section"): a
// named group always wins over the generic '*' group if anyone later tightens
// that one, so this keeps AI access correct independent of future edits above.
const PRIVATE_APP_ROUTES = [
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
]

// OpenAI, Anthropic, Perplexity, Google's AI (grounding/training, separate
// from classic Googlebot which is already covered by '*'), Apple's AI,
// Common Crawl (feeds many third-party LLMs), ByteDance and Meta.
const AI_CRAWLER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE_APP_ROUTES },
      { userAgent: AI_CRAWLER_AGENTS, allow: '/', disallow: PRIVATE_APP_ROUTES },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
