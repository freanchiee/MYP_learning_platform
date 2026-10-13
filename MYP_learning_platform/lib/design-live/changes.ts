// Decide whether a realtime change to a live_players row can alter what a student screen actually shows.
// Why: every student's autosave updates their own live_players row (`data` holds all their answers). A screen that
// only shows names, points, teams or badges does not need to refetch for those edits, but it used to, so one
// student typing made every other screen in the class refetch. Pure, so it can be tested.

export interface RowChange {
  eventType: string
  new?: Record<string, unknown> | null
  old?: Record<string, unknown> | null
}

type Row = Record<string, unknown>

const same = (a: unknown, b: unknown) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null)

/**
 * True if the change could alter the list. Joins and removals always do. An update only does if one of the fields
 * the list shows really differs from what we already hold; anything else (the answers inside `data`, say) is ignored.
 * `cachedFields` reads those fields from a row we hold; `changeFields` reads them from the realtime payload.
 */
export function affectsList(
  change: RowChange,
  cached: ReadonlyMap<string, Row>,
  cachedFields: (row: Row) => unknown[],
  changeFields: (row: Row) => unknown[] = cachedFields,
): boolean {
  if (change.eventType !== 'UPDATE') return true
  const next = change.new
  if (!next || typeof next.id !== 'string') return true
  const before = cached.get(next.id)
  if (!before) return true // a row we have not seen yet
  return !same(cachedFields(before), changeFields(next))
}

/** The fields the roster shows: who is in the class, their team and their score. */
export const rosterFields = (r: Row) => [r.name, r.team, r.points, r.badges]

/** The fields the leaderboard shows. The position (`_nav`) lives inside `data` in the realtime payload. */
export const leaderboardCachedFields = (r: Row) => [r.name, r.points, r.badges, r.nav]
export const leaderboardChangeFields = (r: Row) => [r.name, r.points, r.badges, (r.data as { _nav?: unknown } | null | undefined)?._nav]
