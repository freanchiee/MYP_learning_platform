'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  applyThemeAttributes,
  isThemeId,
  type ThemeId,
} from '@/lib/theme'
import { persistTheme } from '@/app/actions/theme'

interface ThemeContextValue {
  theme: ThemeId
  setTheme: (id: ThemeId, opts?: { persist?: boolean }) => void
  /** True once mounted on the client — guards SSR/first-paint reads. */
  ready: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Reads the theme that the no-flash bootstrap script already applied to <html>,
 * keeps React state in sync, and persists changes to localStorage. The DOM
 * attribute is the source of truth at first paint; this provider just mirrors it
 * into React and exposes setTheme. Cross-tab changes sync via the storage event.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME)
  const [ready, setReady] = useState(false)

  // On mount, adopt whatever the bootstrap script set on <html>.
  useEffect(() => {
    const attr = document.documentElement.getAttribute('data-theme')
    const stored = (() => {
      try {
        return localStorage.getItem(THEME_STORAGE_KEY)
      } catch {
        return null
      }
    })()
    const initial = isThemeId(attr) ? attr : isThemeId(stored) ? stored : DEFAULT_THEME
    setThemeState(initial)
    applyThemeAttributes(initial)
    setReady(true)
  }, [])

  // Keep multiple tabs in sync.
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === THEME_STORAGE_KEY && isThemeId(e.newValue)) {
        setThemeState(e.newValue)
        applyThemeAttributes(e.newValue)
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const setTheme = useCallback((id: ThemeId, opts?: { persist?: boolean }) => {
    setThemeState(id)
    applyThemeAttributes(id)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id)
    } catch {
      /* ignore quota / privacy mode */
    }
    // Mirror to the user's Supabase profile so the choice follows them across
    // devices. Fire-and-forget + fail-soft (no-op if signed out / column absent).
    if (opts?.persist !== false) {
      void persistTheme(id).catch(() => {})
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, ready }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>')
  return ctx
}
