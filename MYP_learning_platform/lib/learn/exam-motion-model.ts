// Three worked exam-style problems, recreated with our own numbers/diagrams (the physics and the given
// data are not copyrightable; the exam paper's own wording, figure numbering and layout are not reused).
// Pure functions, tested by scripts/test-learn-physics.mjs.
// These two problems are given with g = 9.80 m s⁻² specifically (not the 9.81 used elsewhere on this site),
// so they use that value directly rather than the shared constant, to match the numbers worked from it.
const G98 = 9.8

// ---------------------------------------------------------------- Q1: a train speeds up, then slows to a stop
// A to B: uniform acceleration a1 from rest. B to C: uniform deceleration to rest. Total time T, time to B
// is fB*T. Total distance (area of the v-t triangle) is given; solve for T.
export const TRAIN = { a1: 0.2, fB: 0.8, distance: 1800 }

export function trainSolve() {
  const { a1, fB, distance } = TRAIN
  // V = a1 * fB * T; area = 1/2 * T * V = 1/2 * a1 * fB * T^2  =>  T = sqrt(2 * distance / (a1 * fB))
  const T = Math.sqrt((2 * distance) / (a1 * fB))
  const V = a1 * fB * T
  const a2 = V / ((1 - fB) * T) // deceleration B -> C, as a positive magnitude
  return { T, V, a2, tB: fB * T }
}

/** Velocity of the train at time t (0..T). */
export function trainVelocity(t: number) {
  const { V, a2, tB } = trainSolve()
  if (t <= tB) return TRAIN.a1 * t
  return Math.max(0, V - a2 * (t - tB))
}

/** Position of the train at time t, by integrating the two uniform-acceleration phases. */
export function trainPosition(t: number) {
  const { T, V, a2, tB } = trainSolve()
  if (t <= tB) return 0.5 * TRAIN.a1 * t * t
  const xB = 0.5 * TRAIN.a1 * tB * tB
  const dt = Math.min(t, T) - tB
  return xB + V * dt - 0.5 * a2 * dt * dt
}

// ---------------------------------------------------------------- Q2: a ball dropped, bounces, loses some speed
// Dropped from rest at height H, hits the floor at tImpact, rebounds with speed e * (impact speed).
export const BALL = { m: 0.25, g: G98, tImpact: 1.0, e: 0.5 }

export const ballH = () => 0.5 * BALL.g * BALL.tImpact * BALL.tImpact // height it fell from
export const ballImpactSpeed = () => BALL.g * BALL.tImpact
export const ballReboundSpeed = () => BALL.e * ballImpactSpeed()
export const ballTimeToPeak = () => ballReboundSpeed() / BALL.g // time AFTER the bounce to reach max rebound height
export const ballMaxReboundHeight = () => (ballReboundSpeed() * ballReboundSpeed()) / (2 * BALL.g)

/** Velocity of the ball at time t (up positive). Falling: negative and growing. After the bounce: positive, decaying, then negative again. */
export function ballVelocity(t: number) {
  const { g, tImpact } = BALL
  if (t <= tImpact) return -g * t
  return ballReboundSpeed() - g * (t - tImpact)
}

/** Height of the ball above the floor at time t. */
export function ballHeight(t: number) {
  const { g, tImpact } = BALL
  if (t <= tImpact) return ballH() - 0.5 * g * t * t
  const dt = t - tImpact
  return Math.max(0, ballReboundSpeed() * dt - 0.5 * g * dt * dt)
}

// ---------------------------------------------------------------- Q3: a car reacts, then skids to a stop
// Uniform velocity u for the reaction distance, then uniform deceleration (a fraction of g) for the skid distance to rest.
export const SKID = { reactionDistance: 29.3, skidDistance: 12.8, decelFraction: 0.85, g: G98 }

export function skidSolve() {
  const { reactionDistance, skidDistance, decelFraction, g } = SKID
  const a = decelFraction * g
  // v^2 = u^2 - 2*a*skidDistance, with v = 0 at the end of the skid
  const u = Math.sqrt(2 * a * skidDistance)
  const tReaction = reactionDistance / u
  const tSkid = u / a
  return { a, u, tReaction, tSkid }
}

/** Position of the car (from the moment the hazard appears) at time t. */
export function skidPosition(t: number) {
  const { a, u, tReaction, tSkid } = skidSolve()
  if (t <= tReaction) return u * t
  const dt = Math.min(t, tReaction + tSkid) - tReaction
  return SKID.reactionDistance + u * dt - 0.5 * a * dt * dt
}

/** Velocity of the car at time t. */
export function skidVelocity(t: number) {
  const { a, u, tReaction, tSkid } = skidSolve()
  if (t <= tReaction) return u
  const dt = Math.min(t, tReaction + tSkid) - tReaction
  return Math.max(0, u - a * dt)
}

// ---------------------------------------------------------------- Q4: a train brakes at a yellow signal, must stop by the red one
// Uniform deceleration a from speed u to rest, covering exactly the given distance.
export const SIGNAL = { a: 0.2, distance: 1000 }

export function signalSolve() {
  const { a, distance } = SIGNAL
  const u = Math.sqrt(2 * a * distance) // the FASTEST safe speed: any faster and it would not stop in time
  const tStop = u / a
  return { u, tStop }
}

export function signalVelocity(t: number) {
  const { u, tStop } = signalSolve()
  return Math.max(0, u - SIGNAL.a * Math.min(t, tStop))
}

export function signalPosition(t: number) {
  const { u, tStop } = signalSolve()
  const dt = Math.min(t, tStop)
  return u * dt - 0.5 * SIGNAL.a * dt * dt
}

// ---------------------------------------------------------------- Q5: an aircraft takes off in a limited distance
// Uniform acceleration from rest, reaching take-off speed v0 in exactly the given distance.
export const TAKEOFF = { v0: (85 * 1000) / 3600, distance: 1200 } // 85 km/h converted to m/s

export function takeoffSolve() {
  const { v0, distance } = TAKEOFF
  const a = (v0 * v0) / (2 * distance) // the MINIMUM acceleration that still reaches v0 within the distance
  const tUp = v0 / a
  return { a, tUp }
}

export function takeoffVelocity(t: number) {
  const { a, tUp } = takeoffSolve()
  return Math.min(TAKEOFF.v0, a * Math.min(t, tUp))
}

export function takeoffPosition(t: number) {
  const { a, tUp } = takeoffSolve()
  const dt = Math.min(t, tUp)
  return 0.5 * a * dt * dt
}

// ---------------------------------------------------------------- Q6: two cars, one steady, one catching up
// Car X: constant velocity, starting a distance d ahead. Car Y: starts level with the observer, accelerating
// from an initial speed. Y draws level with X after the given time; solve for d.
export const CHASE = { vX: 6.0, uY: 4.0, aY: 0.5, tMeet: 20 }

export function chaseSolve() {
  const { vX, uY, aY, tMeet } = CHASE
  const sY = uY * tMeet + 0.5 * aY * tMeet * tMeet // how far Y has travelled when they meet
  const sX = vX * tMeet // how far X has travelled in the same time
  const d = sY - sX // X's head start: Y must close this gap exactly by tMeet
  return { d, sY, sX }
}

export const chaseXPosition = (t: number) => chaseSolve().d + CHASE.vX * t
export const chaseYPosition = (t: number) => CHASE.uY * t + 0.5 * CHASE.aY * t * t
export const chaseXVelocity = () => CHASE.vX
export const chaseYVelocity = (t: number) => CHASE.uY + CHASE.aY * t

// ---------------------------------------------------------------- Q7: a leaking car, timed by oil drops
// Uniform acceleration. Oil drips at a fixed interval, leaving marks whose SPACING reveals the motion:
// the average velocity across an interval equals the instantaneous velocity at its midpoint.
export const DRIPS = { interval: 2, gap1: 9.0, gap2: 12.0 }

export function dripsSolve() {
  const { interval, gap1, gap2 } = DRIPS
  const vMid1 = gap1 / interval // average (= instantaneous, at the midpoint) velocity across the first interval
  const vMid2 = gap2 / interval // ...and across the second
  const a = (vMid2 - vMid1) / interval // the two midpoints are exactly one interval apart
  const u0 = vMid1 - a * (interval / 2) // velocity at the very first drop (t = 0), one half-interval before its midpoint
  return { a, u0 }
}

export const dripsPosition = (t: number) => {
  const { a, u0 } = dripsSolve()
  return u0 * t + 0.5 * a * t * t
}
export const dripsVelocity = (t: number) => {
  const { a, u0 } = dripsSolve()
  return u0 + a * t
}
export const dripTimes = () => [0, DRIPS.interval, 2 * DRIPS.interval, 3 * DRIPS.interval]
