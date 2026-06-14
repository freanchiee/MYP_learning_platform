import type { Metadata } from 'next'
import { Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './themes.css'
import './globals.css'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { THEME_BOOTSTRAP_SCRIPT } from '@/lib/theme'

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

export const metadata: Metadata = {
  title: 'MYP Sciences — e-Assessment Platform',
  description:
    'International Baccalaureate MYP Sciences e-assessment platform with AI-powered grading and instant feedback.',
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
      </body>
    </html>
  )
}
