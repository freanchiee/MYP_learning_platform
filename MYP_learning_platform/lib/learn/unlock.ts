// Unlock state for dripped lessons. Kept apart from assignments.ts so client components can use it
// without bundling every lesson's data.
export interface UnlockAt { unlock_at: string | null }

export type UnlockState = { state: 'open' } | { state: 'locked'; unlockAt: Date }

export function unlockState(unlockAt: string | null | undefined, now: Date = new Date()): UnlockState {
  if (!unlockAt) return { state: 'open' }
  const at = new Date(unlockAt)
  if (Number.isNaN(at.getTime())) return { state: 'open' }
  return at.getTime() > now.getTime() ? { state: 'locked', unlockAt: at } : { state: 'open' }
}

/**
 * A lesson can be assigned to more than one class, or twice. A student may open it if ANY assignment of it
 * is open — a later re-assignment must never lock them out of a lesson they already have access to.
 */
export function lessonAccess(assignments: UnlockAt[], now: Date = new Date()): UnlockState {
  if (assignments.length === 0) return { state: 'open' }
  const states = assignments.map((a) => unlockState(a.unlock_at, now))
  if (states.some((s) => s.state === 'open')) return { state: 'open' }
  const earliest = states.reduce((best, s) => (s.state === 'locked' && (!best || s.unlockAt < best) ? s.unlockAt : best), null as Date | null)
  return { state: 'locked', unlockAt: earliest as Date }
}

const DAY = 24 * 60 * 60 * 1000
export function formatUnlock(at: Date, now: Date = new Date()): string {
  const days = Math.ceil((at.getTime() - now.getTime()) / DAY)
  const date = at.toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' })
  if (days <= 0) return `today`
  if (days === 1) return `tomorrow (${date})`
  return `${date} (in ${days} days)`
}


export interface DripOptions {
  /** First unlock date, "YYYY-MM-DD" (the teacher's local date). */
  startDate: string
  /** Days between one lesson unlocking and the next. 0 unlocks everything on the start date. */
  everyDays: number
  /** Move any unlock that lands on a Saturday or Sunday to the following Monday. */
  skipWeekends?: boolean
}

function parseDate(s: string): { y: number; m: number; d: number } | null {
  const mt = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s)
  if (!mt) return null
  const y = +mt[1], m = +mt[2], d = +mt[3]
  const probe = new Date(y, m - 1, d)
  return probe.getFullYear() === y && probe.getMonth() === m - 1 && probe.getDate() === d ? { y, m, d } : null
}

/** One unlock moment per lesson, in order, starting at midnight local time on the start date. */
export function buildDrip(keys: string[], opts: DripOptions): { key: string; unlockAt: Date }[] {
  const start = parseDate(opts.startDate)
  if (!start) return []
  const step = Math.max(0, Math.floor(opts.everyDays))
  return keys.map((key, i) => {
    const at = new Date(start.y, start.m - 1, start.d + i * step, 0, 0, 0, 0)
    if (opts.skipWeekends) {
      const dow = at.getDay() // 0 Sunday, 6 Saturday
      if (dow === 6) at.setDate(at.getDate() + 2)
      else if (dow === 0) at.setDate(at.getDate() + 1)
    }
    return { key, unlockAt: at }
  })
}

