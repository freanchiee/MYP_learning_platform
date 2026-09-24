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
  // dicebear writes fixed width/height; let the svg fill whatever box it is put in,
  // otherwise small avatars (28px in pickers) show only a cropped corner of the face.
  const svg = createAvatar(micah, { seed, backgroundColor: ['transparent'], size: 64 }).toString().replace(/^(<svg[^>]*?)width="64" height="64"/, '$1width="100%" height="100%"')
  cache.set(seed, svg)
  return svg
}
