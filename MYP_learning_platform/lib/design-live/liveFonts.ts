// Fonts used only by the live student themes. `preload: false` keeps them out of the page's critical path:
// the browser downloads a face only when the chosen theme actually uses it, so the default theme costs nothing.
import { Caveat, DM_Mono, Hanken_Grotesk, IBM_Plex_Sans, Lexend, Sora, Space_Grotesk } from 'next/font/google'

// next/font needs literal option objects (no spreads), so each is written out.
const caveat = Caveat({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-caveat', weight: ['600', '700'] })
const hanken = Hanken_Grotesk({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-hanken', weight: ['400', '500', '600', '700', '800'] })
const sora = Sora({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-sora', weight: ['500', '600', '700', '800'] })
const plex = IBM_Plex_Sans({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-plex', weight: ['400', '500', '600'] })
const space = Space_Grotesk({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-space', weight: ['400', '500', '600', '700'] })
const dmMono = DM_Mono({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-dmmono', weight: ['400', '500'] })
const lexend = Lexend({ subsets: ['latin'], display: 'swap', preload: false, variable: '--lv-f-lexend', weight: ['400', '500', '600', '700', '800'] })

/** Put on the live student wrapper so the theme stylesheet can reference `var(--lv-f-*)`. */
export const LIVE_FONT_CLASSES = [caveat, hanken, sora, plex, space, dmMono, lexend].map((f) => f.variable).join(' ')
