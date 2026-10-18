// Pure flag (safe in client and server code). See lib/papers-access.ts for why the papers area is closed by default.
export const PAPERS_OPEN = process.env.NEXT_PUBLIC_PAPERS_OPEN === 'true'

/** Where "go practise" buttons lead while the papers area is closed. */
export const PAPERS_HREF = PAPERS_OPEN ? '/papers' : '/design'
