import type { Metadata } from 'next'
import { Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { Analytics } from '@vercel/analytics/next'
import './themes.css'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { THEME_BOOTSTRAP_SCRIPT } from '@/lib/theme'
import { SITE_URL } from '@/lib/site'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const SITE_NAME = 'CritABCD'
const SITE_TITLE = 'CritABCD — IB MYP e-Assessment'
// ≤160 chars so it isn't truncated in search results.
const SITE_DESC =
  'CritABCD: IB MYP past papers, AI-graded practice and instant feedback across Physics, Chemistry, Biology, Humanities, Geography and Design.'
// Absolute so social/AI-preview scrapers always resolve it, independent of env.
const OG_IMAGE = `${SITE_URL}/images/landing/critabcd-logo.png`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    // Child pages that set their own `title` render as "Page · CritABCD".
    template: '%s · CritABCD',
  },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  keywords: [
    'IB MYP',
    'MYP e-assessment',
    'MYP past papers',
    'IB MYP Physics',
    'IB MYP Chemistry',
    'IB MYP Biology',
    'MYP Individuals and Societies',
    'MYP Geography',
    'MYP Design',
    'IB criteria A B C D',
    'AI grading',
    'MYP practice questions',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'education',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

// Structured data (JSON-LD) — helps search rich results AND generative engines
// (ChatGPT, Perplexity, Google AI Overviews) identify what CritABCD is.
const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': `${SITE_URL}/#org`,
      name: SITE_NAME,
      alternateName: 'CritABCD — IB MYP e-Assessment',
      url: SITE_URL,
      logo: OG_IMAGE,
      description: SITE_DESC,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESC,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sourceSans3.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* No-flash theme bootstrap — runs synchronously before paint */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP_SCRIPT }} />
        {/* SEO/GEO structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--surface-elevated)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-panel)',
                fontSize: '0.875rem',
              },
              success: { iconTheme: { primary: 'var(--success)', secondary: 'var(--surface)' } },
              error: { iconTheme: { primary: 'var(--danger)', secondary: 'var(--surface)' } },
            }}
          />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
