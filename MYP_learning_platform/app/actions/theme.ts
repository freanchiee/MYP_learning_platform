'use server'

import { createClient } from '@/lib/supabase/server'
import { isThemeId, type ThemeId } from '@/lib/theme'

/**
 * Persist the signed-in user's chosen Atlas theme to their profile so it follows
 * them across devices. Fail-soft: if the user isn't signed in, the value is
 * invalid, or the `profiles.theme` column hasn't been migrated yet, this silently
 * no-ops — the client keeps working off localStorage. Never throws to the client.
 */
export async function persistTheme(theme: ThemeId): Promise<{ ok: boolean }> {
  try {
    if (!isThemeId(theme)) return { ok: false }
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) return { ok: false }

    const { error } = await supabase
      .from('profiles')
      .update({ theme })
      .eq('id', user.id)

    return { ok: !error }
  } catch {
    return { ok: false }
  }
}
