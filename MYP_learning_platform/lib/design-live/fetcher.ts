// The refetch policy behind every live-class screen (see hooks.ts). Pure and timer-injectable so it can be tested
// without a browser or Supabase. Why it exists: with the old "poll every 3 s AND refetch on every change event"
// pattern, a class of ~30 produced 30–70 requests a second, and once the backend slowed down each screen kept
// stacking new requests on top of the unanswered ones, which made the slowdown worse.
//
//  - Never two requests at once: a poll or event that arrives while a fetch is running is skipped or merged into
//    one follow-up fetch.
//  - Polling is only a safety net while realtime is healthy (slow, ~10 s); it speeds up (3 s) only when the
//    realtime connection is down.
//  - A hidden tab does not poll or refetch; it catches up once, the moment it becomes visible again.
//  - A burst of change events inside a short window becomes ONE fetch.
//  - If a fetch is slow, the next poll waits longer (back-off), so a struggling backend gets breathing room.

export interface Scheduler {
  set(fn: () => void, ms: number): unknown
  clear(id: unknown): void
  now(): number
}

const realScheduler: Scheduler = {
  set: (fn, ms) => setTimeout(fn, ms),
  clear: (id) => clearTimeout(id as ReturnType<typeof setTimeout>),
  now: () => Date.now(),
}

export interface LiveFetcherOptions {
  /** Fetches the data and hands it to the screen. Errors are swallowed (the next tick retries). */
  run: () => Promise<void>
  isHidden?: () => boolean
  /** Poll interval while the realtime connection is NOT up. Default 3000. */
  fastMs?: number
  /** Poll interval while realtime IS connected (a safety net only). Default 10000. */
  slowMs?: number
  /** Ceiling for the interval after slow responses back it off. Default 30000. */
  maxMs?: number
  /** A fetch slower than this doubles the next poll interval (up to 8x). Default 2000. */
  slowResponseMs?: number
  /** Change events within this window are merged into one fetch. Default 300. */
  coalesceMs?: number
  scheduler?: Scheduler
}

export interface LiveFetcher {
  start(): void
  /** A realtime change event arrived. */
  trigger(): void
  /** The realtime channel connected (true) or dropped (false). */
  setConnected(connected: boolean): void
  /** The tab became visible: catch up once. */
  onVisible(): void
  stop(): void
}

export function createLiveFetcher(o: LiveFetcherOptions): LiveFetcher {
  const sc = o.scheduler ?? realScheduler
  const fastMs = o.fastMs ?? 3000
  const slowMs = o.slowMs ?? 10000
  const maxMs = o.maxMs ?? 30000
  const slowResponseMs = o.slowResponseMs ?? 2000
  const coalesceMs = o.coalesceMs ?? 300
  const hidden = () => !!o.isHidden?.()

  let started = false
  let stopped = false
  let running = false
  let rerun = false
  let connected = false
  let backoff = 1
  let pollId: unknown = null
  let coalesceId: unknown = null

  async function execute(): Promise<void> {
    if (stopped) return
    if (running) { rerun = true; return } // never two requests at once: merge into one follow-up
    running = true
    const t0 = sc.now()
    try {
      await o.run()
    } catch {
      /* a failed fetch keeps whatever the screen already shows; the next tick retries */
    } finally {
      running = false
      backoff = sc.now() - t0 > slowResponseMs ? Math.min(backoff * 2, 8) : 1
      if (rerun && !stopped) { rerun = false; void execute() }
    }
  }

  const interval = () => Math.min((connected ? slowMs : fastMs) * backoff, maxMs)

  function schedulePoll() {
    if (stopped) return
    if (pollId !== null) sc.clear(pollId)
    pollId = sc.set(() => {
      pollId = null
      if (stopped) return
      if (!hidden() && !running) void execute() // a hidden tab does not poll; a running fetch is not doubled up
      schedulePoll()
    }, interval())
  }

  return {
    start() {
      if (started || stopped) return
      started = true
      void execute()
      schedulePoll()
    },
    trigger() {
      if (stopped || hidden() || coalesceId !== null) return
      coalesceId = sc.set(() => {
        coalesceId = null
        void execute()
      }, coalesceMs)
    },
    setConnected(next: boolean) {
      if (next === connected) return
      connected = next
      if (started) schedulePoll()
    },
    onVisible() {
      if (stopped || hidden()) return
      void execute()
    },
    stop() {
      stopped = true
      if (pollId !== null) sc.clear(pollId)
      if (coalesceId !== null) sc.clear(coalesceId)
      pollId = null
      coalesceId = null
    },
  }
}
