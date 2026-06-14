'use client'

import { useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { THEME_STORAGE_KEY, isThemeId } from '@/lib/theme'

/**
 * Cross-device theme adoption. Rendered inside the authenticated platform layout
 * with the theme stored on the user's Supabase profile. On a NEW device (no theme
 * in localStorage yet), it adopts the profile's theme so the choice follows the
 * user. On a device that already has a local choice, the local choice wins (and
 * the no-flash bootstrap already applied it before paint — no flash here).
 *
 * Renders nothing.
 */
export default function ThemeSync({ profileTheme }: { profileTheme: string | null }) {
  const { setTheme } = useTheme()

  useEffect(() => {
    if (!isThemeId(profileTheme)) return
    let local: string | null = null
    try {
      local = localStorage.getItem(THEME_STORAGE_KEY)
    } catch {
      /* ignore */
    }
    // Only adopt the profile theme when this device has no local preference yet.
    if (!isThemeId(local)) {
      setTheme(profileTheme, { persist: false })
    }
  }, [profileTheme, setTheme])

  return null
}
