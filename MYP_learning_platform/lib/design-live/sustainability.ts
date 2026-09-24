// Sustainability Check — rules and state for the MYP5 board game.
//
// Ported from the standalone build (Sustainability_Check_Live.html), which kept
// its own sc_* tables and let every player write the shared meters. On the
// generic live engine only the HOST can write live_sessions, so the model is:
//
//   - a player sends small events (`sc_roll`, `sc_act`) tied to their own row;
//   - the host's browser applies them, in order, with `applyEvent()` below, and
//     stores the resulting `GameState` in live_sessions.state.game;
//   - everyone else just renders session.state.game.
//
// Everything here is pure (no I/O) so the same rules can be unit-checked.

export type RoleKey = 'government' | 'corporation' | 'worker' | 'consumer' | 'community'

export interface RoleDef {
  key: RoleKey
  name: string
  icon: string
  color: string
  resourceName: string
  start: number
  tier: 1 | 2 | 3
  flavor: string
}

export const ROLES: Record<RoleKey, RoleDef> = {
  government: { key: 'government', name: 'Government', icon: '🏛️', color: '#2C6E8E', resourceName: 'Policy Points', start: 20, tier: 1, flavor: "You're supposed to look out for everyone — but the biggest players often get your ear first." },
  corporation: { key: 'corporation', name: 'Corporation', icon: '🏭', color: '#B5482A', resourceName: 'Profit', start: 30, tier: 1, flavor: 'Bigger than most governments. Profit now, worry about the mess later — unless someone makes you.' },
  worker: { key: 'worker', name: 'Factory Worker', icon: '👷', color: '#8A6D3B', resourceName: 'Paycheck', start: 15, tier: 3, flavor: 'You make the stuff. You rarely get a say in how it is made, or what it is made of.' },
  consumer: { key: 'consumer', name: 'Consumer', icon: '🛍️', color: '#7B4B94', resourceName: 'Haul', start: 25, tier: 2, flavor: 'You see thousands of ads a day telling you what you already own is not good enough anymore.' },
  community: { key: 'community', name: 'Frontline Community', icon: '🌎', color: '#1E7A5F', resourceName: 'Stewardship', start: 20, tier: 3, flavor: 'Your forest, water and land absorb the costs nobody put on the price tag.' },
}
export const ROLE_ORDER: RoleKey[] = ['government', 'corporation', 'worker', 'consumer', 'community']

export type Sector = 'extraction' | 'production' | 'distribution' | 'consumption' | 'disposal'
export const SECTOR_META: Record<Sector, { label: string; icon: string; color: string }> = {
  extraction: { label: 'Extraction', icon: '⛏️', color: '#B5482A' },
  production: { label: 'Production', icon: '🏭', color: '#8A4B2A' },
  distribution: { label: 'Distribution', icon: '🚚', color: '#C99A2E' },
  consumption: { label: 'Consumption', icon: '🛍️', color: '#7B4B94' },
  disposal: { label: 'Disposal', icon: '🗑️', color: '#5B6B5A' },
}

export const BOARD: { sector: Sector; name: string }[] = [
  { sector: 'extraction', name: 'Clear-cut Forest' },
  { sector: 'extraction', name: 'Open-pit Mine' },
  { sector: 'extraction', name: 'Water Table Drawdown' },
  { sector: 'extraction', name: 'Land Grab' },
  { sector: 'production', name: 'Toxic Mix Line' },
  { sector: 'production', name: 'Assembly Floor' },
  { sector: 'production', name: 'Cheap Materials Depot' },
  { sector: 'production', name: 'Overtime Shift' },
  { sector: 'distribution', name: 'Underpaid Warehouse' },
  { sector: 'distribution', name: 'Global Freight Route' },
  { sector: 'distribution', name: 'Ad Blitz Studio' },
  { sector: 'distribution', name: 'Cut-Price Retailer' },
  { sector: 'consumption', name: 'Big Sale Day' },
  { sector: 'consumption', name: 'Planned Obsolescence Ave' },
  { sector: 'consumption', name: 'Impulse Buy Corner' },
  { sector: 'consumption', name: 'Unboxing Video Set' },
  { sector: 'disposal', name: 'Landfill Edge' },
  { sector: 'disposal', name: 'Incinerator Stack' },
  { sector: 'disposal', name: 'Export Barge' },
  { sector: 'disposal', name: 'Ocean Plastic Gyre' },
]

export const SECTOR_SCENARIO: Record<Sector, { blurb: string; a: string; b: string }> = {
  extraction: { blurb: 'Raw materials are being pulled out faster than the planet can replace them.', a: 'Push extraction further', b: "Take only what's needed" },
  production: { blurb: 'Factories mix in cheap chemicals to make products fast and disposable.', a: 'Keep the line running flat out', b: 'Slow down and test what goes in' },
  distribution: { blurb: 'Getting stuff onto shelves fast and cheap means someone else absorbs the real cost.', a: 'Ship it fast and cheap', b: 'Pay the real cost of getting it there safely' },
  consumption: { blurb: 'New ads convince people what they already own is not good enough anymore.', a: 'Buy the new one', b: 'Ask if you actually need it' },
  disposal: { blurb: 'Out of sight is supposed to mean out of mind — until it is not.', a: 'Bin it, let it become someone else’s problem', b: 'Reuse, repair or properly recycle it first' },
}

const TIER_DELTAS = {
  1: { a: { consumption: 8, externality: 6, resource: 6 }, b: { consumption: 2, externality: 1, resource: 1 } },
  2: { a: { consumption: 6, externality: 4, resource: 4 }, b: { consumption: 1, externality: 0, resource: 1 } },
  3: { a: { consumption: 3, externality: 3, resource: 2 }, b: { consumption: 1, externality: 1, resource: 0 } },
} as const
const PASSIVE = { a: { wellbeing: -3, landHealth: -2 }, b: { wellbeing: 0, landHealth: 0 } } as const

export interface GameAction {
  id: string
  label: string
  icon: string
  cost: number
  carbonDebt?: number
  wellbeing?: number
  landHealth?: number
  /** Carbon credits this action creates for the player (verified, additional). */
  issue?: number
  combo?: RoleKey
  sdg: string
  /** Market actions are handled specially in applyEvent. */
  market?: 'sell' | 'buyVerified' | 'buyCheap' | 'retire'
  blurb?: string
}

export const ACTIONS: Record<RoleKey, GameAction[]> = {
  government: [
    { id: 'gov_regulate', label: 'Regulate Extraction', icon: '📜', cost: 5, carbonDebt: -6, landHealth: 4, sdg: 'SDG 15 · Life on Land' },
    { id: 'gov_subsidize', label: 'Subsidize Renewables', icon: '⚡', cost: 6, carbonDebt: -8, sdg: 'SDG 7 · Affordable & Clean Energy' },
    { id: 'gov_epr', label: 'Extended Producer Responsibility Law', icon: '🔁', cost: 5, carbonDebt: -5, combo: 'corporation', sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'gov_worker_fund', label: 'Fund Worker Protections', icon: '🛡️', cost: 4, wellbeing: 6, sdg: 'SDG 8 · Decent Work' },
  ],
  corporation: [
    { id: 'corp_ecodesign', label: 'Eco-Design / Circular Production', icon: '♻️', cost: 6, carbonDebt: -7, issue: 1, sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'corp_takeback', label: 'Take-Back Scheme', icon: '📦', cost: 5, carbonDebt: -5, combo: 'government', sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'corp_fairwages', label: 'Fair Wages & Safe Factories', icon: '💵', cost: 5, wellbeing: 7, sdg: 'SDG 8 · Decent Work' },
    { id: 'corp_sourcing', label: 'Responsible Sourcing', icon: '🌳', cost: 5, landHealth: 6, issue: 1, sdg: 'SDG 15 · Life on Land' },
  ],
  worker: [
    { id: 'wkr_unionize', label: 'Unionize for Safety', icon: '✊', cost: 3, wellbeing: 8, sdg: 'SDG 8 · Decent Work' },
    { id: 'wkr_upskill', label: 'Upskill for Green Jobs', icon: '🎓', cost: 4, carbonDebt: -4, wellbeing: 2, sdg: 'SDG 8 · Decent Work' },
    { id: 'wkr_whistleblow', label: 'Whistleblow on Toxics', icon: '📢', cost: 2, carbonDebt: -3, sdg: 'SDG 3 · Good Health & Well-being' },
    { id: 'wkr_mutualaid', label: 'Mutual Aid Network', icon: '🤝', cost: 2, wellbeing: 5, combo: 'community', sdg: 'SDG 11 · Sustainable Communities' },
  ],
  consumer: [
    { id: 'con_buyless', label: 'Buy Less, Choose Well', icon: '🧮', cost: 3, carbonDebt: -5, sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'con_repair', label: 'Repair Instead of Replace', icon: '🔧', cost: 2, carbonDebt: -4, sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'con_local', label: 'Choose Local & Fair Trade', icon: '🧺', cost: 3, carbonDebt: -4, landHealth: 2, sdg: 'SDG 8 · Decent Work' },
    { id: 'con_share', label: 'Share & Borrow', icon: '📚', cost: 2, carbonDebt: -3, combo: 'community', sdg: 'SDG 11 · Sustainable Communities' },
  ],
  community: [
    { id: 'com_reforest', label: 'Reforest & Restore', icon: '🌱', cost: 4, landHealth: 8, issue: 2, sdg: 'SDG 15 · Life on Land' },
    { id: 'com_monitor', label: 'Community Land Monitoring', icon: '🔎', cost: 3, carbonDebt: -4, landHealth: 3, issue: 1, sdg: 'SDG 13 · Climate Action' },
    { id: 'com_repair_economy', label: 'Local Repair Economy', icon: '🧵', cost: 3, carbonDebt: -4, combo: 'consumer', sdg: 'SDG 12 · Responsible Consumption & Production' },
    { id: 'com_stewardship', label: 'Traditional Land Stewardship', icon: '🪶', cost: 4, landHealth: 7, carbonDebt: -2, issue: 2, sdg: 'SDG 15 · Life on Land' },
  ],
}

/** The carbon-credit market — open to every role in Phase 2. */
export const MARKET_ACTIONS: GameAction[] = [
  { id: 'mkt_sell', market: 'sell', label: 'Sell credits to the market', icon: '💱', cost: 0, sdg: 'SDG 13 · Climate Action', blurb: 'Hand up to 2 of your credits to the shared pool and earn 3 resource for each. Someone who needs them can buy them.' },
  { id: 'mkt_buy_verified', market: 'buyVerified', label: 'Buy a verified credit', icon: '✅', cost: 4, sdg: 'SDG 13 · Climate Action', blurb: 'Take 1 credit from the pool. It comes from a checked project, so it counts fully when you retire it.' },
  { id: 'mkt_buy_cheap', market: 'buyCheap', label: 'Buy cheap offsets (risky)', icon: '🎲', cost: 2, sdg: 'SDG 13 · Climate Action', blurb: 'Get 2 credits for a low price and roll a die: 4–6 they are real, 1–3 they are not additional — worthless. This is what greenwashing looks like.' },
  { id: 'mkt_retire', market: 'retire', label: 'Retire credits (offset)', icon: '🧾', cost: 1, sdg: 'SDG 13 · Climate Action', blurb: 'Use up all your real credits to cut Carbon Debt 1-for-1. But offsets can only cover 40% of the starting debt — you cannot buy your way out.' },
]

export const OFFSET_CAP_SHARE = 0.4
export const COMBO_BONUS_CARBON = -3

export const DEBRIEF_QUESTIONS = [
  'To what extent should designers prioritize sustainability over immediate cost or aesthetic appeal?',
  'Is it always possible to create a design with a universally positive long-term impact?',
  'Who bears the primary responsibility for the ethical implications of a design: the designer, the manufacturer, or the consumer?',
]

/** Plain-language "what is a carbon credit" explainer, shown before Phase 2 and in the debrief. */
export const CREDIT_EXPLAINER: { icon: string; title: string; body: string }[] = [
  { icon: '🌍', title: 'One credit = one tonne', body: 'A carbon credit stands for one tonne of carbon dioxide (or equivalent greenhouse gas) that was avoided or removed from the air, for example by protecting a forest or replacing a coal stove.' },
  { icon: '🧪', title: 'The four tests', body: 'A real credit is additional (it would not have happened without the money), permanent (the saving lasts), verified (an independent body counted it) and free of leakage (the damage was not just moved next door).' },
  { icon: '🏛️', title: 'Two kinds of market', body: 'In a compliance market (cap-and-trade) a government sets a limit and firms must hold permits for what they emit. In the voluntary market, companies and people buy credits by choice to offset their emissions.' },
  { icon: '🪜', title: 'Reduce first, offset last', body: 'Offsets are meant for what cannot yet be cut. Buying credits instead of changing how you make things is called greenwashing — which is why offsets are capped at 40% in this game.' },
  { icon: '⚖️', title: 'Who gains, who pays?', body: 'Credits often come from projects in poorer regions and fund the communities doing the protecting — if they are fairly designed. If not, the community gives up land and the buyer keeps polluting.' },
]

// ------------------------------------------------------------------
// State
// ------------------------------------------------------------------
export type GamePhase = 'lobby' | 'phase1' | 'reveal1' | 'phase2' | 'reveal2'

export interface GamePlayer {
  role: RoleKey
  pos: number
  resource: number
  credits: number // real, retire-able
  fake: number // worthless, from failed cheap offsets
  t1: number
  t2: number
  pending: { roll: number; newPos: number } | null
}

export interface GameLogEntry {
  n: number
  pid: string
  name: string
  role: RoleKey
  phase: 'phase1' | 'phase2'
  label: string
  choice?: 'a' | 'b'
  combo?: boolean
  note?: string
}

export interface GameState {
  phase: GamePhase
  mode: 'live' | 'async'
  turnOrder: string[]
  idx: number
  p1Turns: number
  p2Turns: number
  consumption: number
  externality: number
  wellbeing: number
  landHealth: number
  carbonDebt: number
  carbonStart: number
  carbonTarget: number
  creditPool: number
  retired: number
  turns1: number
  turns2: number
  lastRole: RoleKey | null
  players: Record<string, GamePlayer>
  log: GameLogEntry[]
  cursor: string
  doneIds: string[]
}

export interface ScEvent {
  id: string
  player_id: string | null
  type: string
  payload: Record<string, any>
  created_at: string
}

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n))

export function newGame(): GameState {
  return {
    phase: 'lobby', mode: 'live', turnOrder: [], idx: 0, p1Turns: 3, p2Turns: 3,
    consumption: 0, externality: 0, wellbeing: 100, landHealth: 100,
    carbonDebt: 0, carbonStart: 0, carbonTarget: 0, creditPool: 0, retired: 0,
    turns1: 0, turns2: 0, lastRole: null, players: {}, log: [], cursor: '', doneIds: [],
  }
}

export const offsetCap = (g: GameState) => Math.floor(g.carbonStart * OFFSET_CAP_SHARE)
export const defaultCarbonTarget = (externality: number) => Math.max(5, Math.round(externality * 0.3))

/** Give every joined student a role (fewest-first, so all five roles are used before any repeats) and slot late joiners into the turn order. */
export function syncPlayers(g: GameState, joined: { id: string }[]): GameState {
  const missing = joined.filter((p) => !g.players[p.id])
  if (!missing.length) return g
  const next: GameState = { ...g, players: { ...g.players }, turnOrder: [...g.turnOrder] }
  const counts: Record<string, number> = {}
  ROLE_ORDER.forEach((r) => (counts[r] = 0))
  Object.values(next.players).forEach((p) => (counts[p.role] += 1))
  for (const p of missing) {
    let best: RoleKey = ROLE_ORDER[0]
    ROLE_ORDER.forEach((r) => { if (counts[r] < counts[best]) best = r })
    counts[best] += 1
    next.players[p.id] = { role: best, pos: 0, resource: ROLES[best].start, credits: 0, fake: 0, t1: 0, t2: 0, pending: null }
    if (next.phase === 'phase1' || next.phase === 'phase2') next.turnOrder.push(p.id)
  }
  return next
}

export function reassignRole(g: GameState, id: string, role: RoleKey): GameState {
  const p = g.players[id]
  if (!p || g.phase !== 'lobby') return g
  return { ...g, players: { ...g.players, [id]: { ...p, role, resource: ROLES[role].start } } }
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]] }
  return a
}

export function startPhase1(g: GameState, mode: 'live' | 'async', p1Turns: number, p2Turns: number): GameState {
  const ids = Object.keys(g.players)
  const players: Record<string, GamePlayer> = {}
  ids.forEach((id) => { const p = g.players[id]; players[id] = { ...p, pos: 0, resource: ROLES[p.role].start, credits: 0, fake: 0, t1: 0, t2: 0, pending: null } })
  return {
    ...g, phase: 'phase1', mode, turnOrder: shuffle(ids), idx: 0, p1Turns, p2Turns,
    consumption: 0, externality: 0, wellbeing: 100, landHealth: 100, turns1: 0, turns2: 0,
    carbonDebt: 0, carbonStart: 0, carbonTarget: 0, creditPool: 0, retired: 0, lastRole: null, players, log: [],
  }
}

export function endPhase1(g: GameState): GameState { return { ...g, phase: 'reveal1' } }

export function beginPhase2(g: GameState, carbonTarget: number, p2Turns: number): GameState {
  const players: Record<string, GamePlayer> = {}
  Object.entries(g.players).forEach(([id, p]) => { players[id] = { ...p, t2: 0, pending: null } })
  return { ...g, phase: 'phase2', p2Turns, carbonStart: g.externality, carbonDebt: g.externality, carbonTarget, creditPool: 0, retired: 0, turns2: 0, idx: 0, lastRole: null, players }
}

export function endPhase2(g: GameState): GameState { return { ...g, phase: 'reveal2' } }

export function actionsFor(role: RoleKey): GameAction[] { return [...ACTIONS[role], ...MARKET_ACTIONS] }

/** Can this player afford / legally take this action right now? */
export function actionAvailable(g: GameState, p: GamePlayer, a: GameAction): { ok: boolean; why?: string } {
  if (p.resource < a.cost) return { ok: false, why: 'Not enough ' + ROLES[p.role].resourceName }
  if (a.market === 'sell' && p.credits < 1) return { ok: false, why: 'You hold no credits' }
  if (a.market === 'buyVerified' && g.creditPool < 1) return { ok: false, why: 'No verified credits for sale yet' }
  if (a.market === 'retire') {
    if (p.credits < 1) return { ok: false, why: 'You hold no real credits' }
    if (g.retired >= offsetCap(g)) return { ok: false, why: `Offset cap reached (${offsetCap(g)})` }
  }
  return { ok: true }
}

const isDone = (g: GameState, phase: 'phase1' | 'phase2') => {
  const turns = phase === 'phase1' ? g.p1Turns : g.p2Turns
  if (g.mode === 'live') return (phase === 'phase1' ? g.turns1 : g.turns2) >= turns * Math.max(1, g.turnOrder.length)
  return g.turnOrder.length > 0 && g.turnOrder.every((id) => (g.players[id]?.[phase === 'phase1' ? 't1' : 't2'] ?? 0) >= turns)
}

export function canAct(g: GameState, id: string): boolean {
  const p = g.players[id]
  if (!p || (g.phase !== 'phase1' && g.phase !== 'phase2')) return false
  if (g.mode === 'live') return g.turnOrder[g.idx] === id
  return (g.phase === 'phase1' ? p.t1 : p.t2) < (g.phase === 'phase1' ? g.p1Turns : g.p2Turns)
}

/** Apply one player event. Returns the same object if the event is not valid right now. */
export function applyEvent(g: GameState, ev: ScEvent, names: Record<string, string>): GameState {
  const id = ev.player_id
  if (!id || !g.players[id] || !canAct(g, id)) return g
  const p = g.players[id]
  const phase = g.phase as 'phase1' | 'phase2'

  if (ev.type === 'sc_roll') {
    const roll = Number(ev.payload?.roll)
    if (p.pending || !Number.isInteger(roll) || roll < 1 || roll > 6) return g
    const newPos = (p.pos + roll) % BOARD.length
    return { ...g, players: { ...g.players, [id]: { ...p, pos: newPos, pending: { roll, newPos } } } }
  }

  if (ev.type !== 'sc_act' || !p.pending) return g
  const role = ROLES[p.role]
  const entry = (label: string, extra: Partial<GameLogEntry> = {}): GameLogEntry => ({
    n: (phase === 'phase1' ? p.t1 : p.t2) + 1, pid: id, name: names[id] || 'Student', role: p.role, phase, label, ...extra,
  })
  const next: GameState = { ...g, players: { ...g.players }, doneIds: g.doneIds }
  const np: GamePlayer = { ...p, pending: null }
  let logEntry: GameLogEntry

  if (phase === 'phase1') {
    const choice = ev.payload?.choice === 'b' ? 'b' : ev.payload?.choice === 'a' ? 'a' : null
    if (!choice) return g
    const d = TIER_DELTAS[role.tier][choice]
    const sc = SECTOR_SCENARIO[BOARD[p.pending.newPos].sector]
    next.consumption += d.consumption
    next.externality += d.externality
    next.wellbeing = clamp(next.wellbeing + PASSIVE[choice].wellbeing, 0, 100)
    next.landHealth = clamp(next.landHealth + PASSIVE[choice].landHealth, 0, 100)
    np.resource += d.resource
    np.t1 += 1
    next.turns1 += 1
    logEntry = entry(`${choice === 'a' ? sc.a : sc.b} (${BOARD[p.pending.newPos].name})`, { choice })
  } else {
    if (ev.payload?.pass) {
      logEntry = entry('Passed — could not afford any action')
    } else {
      const action = actionsFor(p.role).find((a) => a.id === ev.payload?.actionId)
      if (!action || !actionAvailable(g, p, action).ok) return g
      np.resource -= action.cost
      let carbon = action.carbonDebt ?? 0
      let combo = false
      let note: string | undefined
      if (action.combo && g.lastRole === action.combo) { carbon += COMBO_BONUS_CARBON; combo = true }
      if (action.issue) { np.credits += action.issue; note = `+${action.issue} credit${action.issue > 1 ? 's' : ''} issued` }
      if (action.market === 'sell') {
        const n = Math.min(2, np.credits)
        np.credits -= n; next.creditPool += n; np.resource += 3 * n
        note = `sold ${n} credit${n > 1 ? 's' : ''} (+${3 * n})`
      } else if (action.market === 'buyVerified') {
        next.creditPool -= 1; np.credits += 1; note = 'bought 1 verified credit'
      } else if (action.market === 'buyCheap') {
        const dice = Number(ev.payload?.dice)
        if (dice >= 4) { np.credits += 2; note = `rolled ${dice}: 2 real credits` }
        else { np.fake += 2; note = `rolled ${dice || 1}: not additional — 2 worthless credits` }
      } else if (action.market === 'retire') {
        const use = Math.min(np.credits, offsetCap(g) - g.retired)
        np.credits -= use; next.retired += use; carbon -= use; note = `retired ${use} → −${use} Carbon Debt`
      }
      next.carbonDebt = Math.max(0, next.carbonDebt + carbon)
      next.wellbeing = clamp(next.wellbeing + (action.wellbeing ?? 0), 0, 100)
      next.landHealth = clamp(next.landHealth + (action.landHealth ?? 0), 0, 100)
      next.lastRole = p.role
      logEntry = entry(`${action.icon} ${action.label}`, { combo, note })
    }
    np.t2 += 1
    next.turns2 += 1
  }

  next.players[id] = np
  next.log = [...g.log, logEntry].slice(-80)
  if (g.mode === 'live') next.idx = (g.idx + 1) % Math.max(1, g.turnOrder.length)
  if (isDone(next, phase)) next.phase = phase === 'phase1' ? 'reveal1' : 'reveal2'
  return next
}

/**
 * Apply every unseen sc_* event in order. `cursor` (a timestamp) and
 * `doneIds` (recent ids) make it safe to run again after a refresh without
 * double-applying anything.
 */
export function processEvents(g: GameState, events: ScEvent[], names: Record<string, string>): GameState {
  const fresh = events
    .filter((e) => e.type === 'sc_roll' || e.type === 'sc_act')
    .filter((e) => !g.doneIds.includes(e.id) && (!g.cursor || e.created_at >= g.cursor))
    .sort((a, b) => (a.created_at < b.created_at ? -1 : a.created_at > b.created_at ? 1 : a.id < b.id ? -1 : 1))
  if (!fresh.length) return g
  let cur = g
  for (const e of fresh) cur = applyEvent(cur, e, names)
  const last = fresh[fresh.length - 1]
  return { ...cur, cursor: last.created_at, doneIds: [...g.doneIds, ...fresh.map((e) => e.id)].slice(-60) }
}

/** 0..1 scores that drive the 3D scene: how healthy the world looks, and how smoggy. */
export function sceneMetrics(g: GameState): { health: number; smog: number } {
  if (g.phase === 'phase2' || g.phase === 'reveal2') {
    const start = Math.max(1, g.carbonStart)
    const recovered = clamp(1 - g.carbonDebt / start, 0, 1)
    const health = clamp(0.25 + recovered * 0.55 + (g.landHealth / 100) * 0.2, 0, 1)
    return { health, smog: clamp(g.carbonDebt / start, 0, 1) }
  }
  const smog = clamp(g.externality / 70, 0, 1)
  return { health: clamp(1 - smog * 0.65 - ((100 - g.landHealth) / 100) * 0.35, 0, 1), smog }
}

export function tilePosition(i: number, total = BOARD.length, half = 8): { x: number; z: number } {
  const perSide = total / 4
  const side = Math.floor(i / perSide)
  const frac = (i % perSide) / perSide
  const span = half * 2
  if (side === 0) return { x: -half + frac * span, z: half }
  if (side === 1) return { x: half, z: half - frac * span }
  if (side === 2) return { x: half - frac * span, z: -half }
  return { x: -half, z: -half + frac * span }
}
