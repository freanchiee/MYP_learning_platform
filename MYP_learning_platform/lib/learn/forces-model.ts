// Everyday and fundamental forces for A.2: buoyancy, tension, and motion through a resisting fluid.
// Pure functions, tested by scripts/test-learn-physics.mjs.
import { G } from './physics-models'

export const buoyantForce = (rhoFluid: number, volume: number, g = G) => rhoFluid * volume * g

/** A block of mass mA on a frictionless table, connected by a string over an ideal pulley to a hanging mass mB. */
export function atwoodLite(mA: number, mB: number, g = G) {
  const a = (mB * g) / (mA + mB)
  const T = mA * a
  return { a, T }
}

// ---------------------------------------------------------------- falling through a resisting fluid (linear drag)
// m dv/dt = mg - kv. Solved exactly: v(t) = vt (1 - e^-t/tau), vt = mg/k, tau = m/k.
// A simplified (Stokes-like) model: good for the qualitative point (a more viscous fluid gives both a LOWER
// terminal velocity and a SHORTER time to reach it), not a claim about real quadratic air resistance.
export const terminalVelocity = (m: number, k: number, g = G) => (m * g) / k
export const timeConstant = (m: number, k: number) => m / k

export function fallVelocity(m: number, k: number, t: number, g = G) {
  const vt = terminalVelocity(m, k, g)
  const tau = timeConstant(m, k)
  return vt * (1 - Math.exp(-t / tau))
}

/** Analytic integral of fallVelocity, i.e. the distance fallen by time t. */
export function fallPosition(m: number, k: number, t: number, g = G) {
  const vt = terminalVelocity(m, k, g)
  const tau = timeConstant(m, k)
  return vt * (t - tau * (1 - Math.exp(-t / tau)))
}

/** Net force at time t (mg - kv): positive means still speeding up (unbalanced), ~0 at terminal velocity (balanced). */
export const netFallForce = (m: number, k: number, t: number, g = G) => m * g - k * fallVelocity(m, k, t, g)

/** Numerical cross-check only (small time step Euler integration), used by the test script. */
export function fallVelocityNumeric(m: number, k: number, t: number, g = G, dt = 1e-5) {
  let v = 0
  for (let ti = 0; ti < t; ti += dt) v += ((m * g - k * v) / m) * dt
  return v
}

// ---------------------------------------------------------------- a tethered submerged object
export const sphereVolume = (r: number) => (4 / 3) * Math.PI * r ** 3
export const sphereWeight = (r: number, rho: number, g = G) => rho * sphereVolume(r) * g

/**
 * A sphere less dense than the fluid is held under the surface by a cable to the bed, at angle
 * `angleDeg` below the horizontal. Vertical equilibrium: F_B = W + T sin(angle). Horizontal
 * equilibrium (a current pushing the sphere) gives the drag: F_drag = T cos(angle).
 */
export const upthrustFromTether = (weight: number, tension: number, angleDeg: number) => weight + tension * Math.sin((angleDeg * Math.PI) / 180)
export const dragFromTether = (tension: number, angleDeg: number) => tension * Math.cos((angleDeg * Math.PI) / 180)

// ---------------------------------------------------------------- a skydiver: quadratic drag, F_drag = k v^2
// m dv/dt = mg - kv^2. Closed form (from dx/(1-x^2) = (g/vt) dt, x = v/vt):
//   v(t) = vt * [sinh(lambda t) + x0 cosh(lambda t)] / [cosh(lambda t) + x0 sinh(lambda t)],  lambda = g/vt, x0 = v0/vt
// Valid whether v0 is below the terminal velocity (speeds up towards it) or above it (slows down towards it) —
// exactly what happens the instant a parachute opens: v0 > the new (much smaller) terminal velocity.
export const terminalVelocityQuad = (m: number, k: number, g = G) => Math.sqrt((m * g) / k)

export function fallVelocityQuad(m: number, k: number, t: number, v0 = 0, g = G) {
  const vt = terminalVelocityQuad(m, k, g)
  const lambda = g / vt
  const x0 = v0 / vt
  const s = Math.sinh(lambda * t)
  const c = Math.cosh(lambda * t)
  return (vt * (s + x0 * c)) / (c + x0 * s)
}

export const netForceQuad = (m: number, k: number, v: number, g = G) => m * g - k * v * v

/** Numerical cross-check only (Euler integration), used by the test script. */
export function fallVelocityQuadNumeric(m: number, k: number, t: number, v0 = 0, g = G, dt = 1e-5) {
  let v = v0
  for (let ti = 0; ti < t; ti += dt) v += ((m * g - k * v * v) / m) * dt
  return v
}

/**
 * A jumper falls under body drag kBody from rest at the moment the rope is cut, then — if
 * `tOpen` has passed — the parachute opens and drag switches to kChute, continuing smoothly
 * from whatever speed the jumper had reached.
 */
export function skydiveVelocity(m: number, kBody: number, kChute: number, tOpen: number, t: number, g = G) {
  if (t <= tOpen) return { v: fallVelocityQuad(m, kBody, t, 0, g), phase: 'body' as const }
  const vAtOpen = fallVelocityQuad(m, kBody, tOpen, 0, g)
  return { v: fallVelocityQuad(m, kChute, t - tOpen, vAtOpen, g), phase: 'chute' as const }
}
