// Moving between stages of a live session WITHOUT losing anything.
// A stage's host state (current question, board game, locks…) lives in live_sessions.state. Moving on
// used to replace it with {}. Now the stage we leave is stashed under state._stash[stageIdx], and going
// back restores it. Students' own answers live on their player rows and are never touched here.

type State = Record<string, unknown>

export const stashOf = (state: State | undefined): Record<string, State> =>
  state && typeof state._stash === 'object' && state._stash ? (state._stash as Record<string, State>) : {}

export const withoutStash = (state: State | undefined): State => {
  const rest: State = { ...(state || {}) }
  delete rest._stash
  return rest
}

/** New session.state when the host moves FORWARD from stage `idx`. */
export function stateForAdvance(state: State | undefined, idx: number): State {
  return { _stash: { ...stashOf(state), [idx]: withoutStash(state) } }
}

/** New session.state when the host goes BACK from stage `idx` to `idx - 1`. `restored` says whether that stage's old state was kept. */
export function stateForBack(state: State | undefined, idx: number): { state: State; restored: boolean } {
  const stash = { ...stashOf(state) }
  const prev = idx - 1
  const kept = stash[prev]
  delete stash[prev]
  return { state: { ...(kept || {}), _stash: { ...stash, [idx]: withoutStash(state) } }, restored: !!kept }
}
