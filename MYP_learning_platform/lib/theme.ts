/**
 * Atlas theme system — single source of truth.
 *
 * Five platform-wide UI themes switched via a `data-theme` attribute on <html>.
 * The token values live in app/themes.css; this module owns the catalog, the
 * derived layout/chrome attributes, persistence keys, and the no-flash bootstrap
 * script that runs before first paint.
 */

export type ThemeId =
  | 'classic'
  | 'spatial'
  | 'minimalist-academic'
  | 'glassmorphic'
  | 'bento'

export type AnswerZone = 'column' | 'rail' | 'stack'
export type ChromeShape = 'classic' | 'window' | 'flat' | 'glass' | 'bento'

export interface ThemeMeta {
  id: ThemeId
  label: string
  tagline: string
  answerZone: AnswerZone
  chrome: ChromeShape
  /** Mini-preview swatch colors (bg, surface, accent, action) for the switcher */
  swatch: { bg: string; surface: string; accent: string; action: string }
  /** Hint to the switcher whether this theme is dark, for icon contrast */
  dark?: boolean
}

export const THEME_STORAGE_KEY = 'myp-theme'
export const DEFAULT_THEME: ThemeId = 'classic'

export const THEMES: ThemeMeta[] = [
  {
    id: 'classic',
    label: 'Classic',
    tagline: 'Warm, focused — the original look',
    answerZone: 'column',
    chrome: 'classic',
    swatch: { bg: '#f5edcc', surface: '#ffffff', accent: '#1f3674', action: '#c3282d' },
  },
  {
    id: 'spatial',
    label: 'Spatial',
    tagline: 'Floating glass windows on sky',
    answerZone: 'rail',
    chrome: 'window',
    swatch: { bg: '#cfe0fb', surface: '#ffffff', accent: '#2778ff', action: '#2778ff' },
  },
  {
    id: 'minimalist-academic',
    label: 'Academic',
    tagline: 'Paper-and-ink, distraction-free',
    answerZone: 'rail',
    chrome: 'flat',
    swatch: { bg: '#ffffff', surface: '#fafafa', accent: '#003b8e', action: '#003b8e' },
  },
  {
    id: 'glassmorphic',
    label: 'Glass',
    tagline: 'Immersive midnight HUD',
    answerZone: 'rail',
    chrome: 'glass',
    dark: true,
    swatch: { bg: '#0a1230', surface: '#1c2a52', accent: '#38d6f5', action: '#22b8e6' },
  },
  {
    id: 'bento',
    label: 'Bento',
    tagline: 'Modular cards on a clean grid',
    answerZone: 'rail',
    chrome: 'bento',
    swatch: { bg: '#eceef1', surface: '#ffffff', accent: '#2563eb', action: '#2563eb' },
  },
]

export const THEME_IDS: ThemeId[] = THEMES.map((t) => t.id)

export function isThemeId(v: unknown): v is ThemeId {
  return typeof v === 'string' && (THEME_IDS as string[]).includes(v)
}

export function themeMeta(id: ThemeId): ThemeMeta {
  return THEMES.find((t) => t.id === id) ?? THEMES[0]
}

/** Apply a theme to the document: sets data-theme/-answer-zone/-chrome on <html>. */
export function applyThemeAttributes(id: ThemeId): void {
  if (typeof document === 'undefined') return
  const meta = themeMeta(id)
  const el = document.documentElement
  el.setAttribute('data-theme', meta.id)
  el.setAttribute('data-answer-zone', meta.answerZone)
  el.setAttribute('data-chrome', meta.chrome)
}

/**
 * Synchronous, blocking bootstrap injected as the first child of <body>.
 * Runs during HTML parse, BEFORE paint, so non-classic users never flash.
 * Self-contained (no imports) — values mirror THEMES above.
 */
export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{
var K=${JSON.stringify(THEME_STORAGE_KEY)};
var Z={classic:["column","classic"],spatial:["rail","window"],"minimalist-academic":["rail","flat"],glassmorphic:["rail","glass"],bento:["rail","bento"]};
var t=localStorage.getItem(K);
if(!Z[t]){t=${JSON.stringify(DEFAULT_THEME)};}
var d=document.documentElement;
d.setAttribute("data-theme",t);
d.setAttribute("data-answer-zone",Z[t][0]);
d.setAttribute("data-chrome",Z[t][1]);
}catch(e){}})();`
