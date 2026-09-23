// Deterministic per-player avatars — a playful identity cue borrowed from
// the Strandhoot builder's PlayerIdentityModal pattern (dicebear "micah"
// style, randomizable there). Here it's seeded straight off the player's
// own `live_players.id` (already a stable uuid) instead of a stored seed,
// so it needs no new column/migration — the same player always renders the
// same avatar, everywhere it's shown, for free.

import { createAvatar } from '@dicebear/core'
import { micah } from '@dicebear/collection'

const cache = new Map<string, string>()

export function avatarSvg(seed: string): string {
  const cached = cache.get(seed)
  if (cached) return cached
  const svg = createAvatar(micah, { seed, backgroundColor: ['transparent'], size: 64 }).toString()
  cache.set(seed, svg)
  return svg
}
