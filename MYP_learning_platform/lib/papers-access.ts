// The DP science / humanities past-paper practice area (physics, biology, chemistry, humanities and geography papers,
// topic practice, the exam player) is off for everyone but admins unless NEXT_PUBLIC_PAPERS_OPEN=true is set.
//
// Why: its roughly 3,100 question figures live in public Supabase Storage buckets and every question page loads them
// straight from there, which counts against the project's egress quota. The live design classes do not use them. With
// the area closed, no page links to those images, so nothing loads them automatically.
// To open it again, set NEXT_PUBLIC_PAPERS_OPEN=true in the Vercel project and redeploy.

import { requireAdmin } from '@/lib/admin'
import { PAPERS_OPEN } from '@/lib/papers-flag'

/** Top of every papers route: open to all when switched on, otherwise admins only (everyone else gets a 404). */
export async function requirePapersAccess(): Promise<void> {
  if (PAPERS_OPEN) return
  await requireAdmin()
}
