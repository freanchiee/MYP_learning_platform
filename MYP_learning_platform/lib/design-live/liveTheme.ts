'use client'

// Visual themes for the live-class STUDENT workspace only (the self-paced shell in
// components/design/live/shell). They are not the platform-wide Atlas themes in app/themes.css:
// a theme is applied as `data-live-theme` on the live student page wrapper and only re-skins
// that subtree through CSS variables (see components/design/live/shell/liveThemes.css).
// "default" sets no attribute, so it is exactly the layout students already know.

import { useCallback, useEffect, useState } from 'react'

export const LIVE_THEMES = [
  { id: 'default', label: 'Classic', blurb: 'The CritABCD look you already know', swatch: ['#2F6FED', '#8A4FD6', '#E07A1F', '#1FA98A'], paper: '#FFFFFF' },
  { id: 'journal', label: 'Journal', blurb: 'A spiral notebook: tabs, ruled paper, washi tape', swatch: ['#1D4ED8', '#7E22CE', '#C2410C', '#15803D'], paper: '#FBF5E6' },
  { id: 'quest', label: 'Quest', blurb: 'Dark and glowing, with a quest path for stages', swatch: ['#60A5FA', '#C084FC', '#FB923C', '#4ADE80'], paper: '#161B25' },
  { id: 'editorial', label: 'Editorial', blurb: 'Calm, text-first, big type, hairline rules', swatch: ['#1D4ED8', '#7E22CE', '#C2410C', '#15803D'], paper: '#F7F6F1' },
  { id: 'pop', label: 'Pop', blurb: 'Chunky outlines and bright colour blocks', swatch: ['#5B9DFF', '#B388FF', '#FF9A3C', '#4FD67A'], paper: '#FFF7D6' },
] as const

export type LiveThemeId = (typeof LIVE_THEMES)[number]['id']

export const LIVE_THEME_KEY = 'myp:live-theme'
const IDS = LIVE_THEMES.map((t) => t.id) as readonly string[]
export const isLiveTheme = (v: unknown): v is LiveThemeId => typeof v === 'string' && IDS.includes(v)

/** The student's chosen look, remembered on this device. Starts on "default" so the first paint (and SSR) never changes. */
export function useLiveTheme(): [LiveThemeId, (t: LiveThemeId) => void] {
  const [theme, setTheme] = useState<LiveThemeId>('default')
  useEffect(() => {
    try {
      const v = localStorage.getItem(LIVE_THEME_KEY)
      if (isLiveTheme(v)) setTheme(v)
    } catch { /* storage blocked: keep the default */ }
  }, [])
  const choose = useCallback((t: LiveThemeId) => {
    setTheme(t)
    try { localStorage.setItem(LIVE_THEME_KEY, t) } catch { /* ignore */ }
  }, [])
  return [theme, choose]
}
