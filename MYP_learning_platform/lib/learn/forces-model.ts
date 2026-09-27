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
