// Two collision problems, recreated with our own animated diagram and our own momentum-time graph (the
// physics and the given numbers are not copyrightable; the exam papers' own wording/figures are not
// reused). Pure functions, tested by scripts/test-learn-physics.mjs.

/** Momentum of ONE body at time t: constant at m*before, ramps linearly to m*after during [t0,t1] (a
 * constant contact force, exactly as both source problems describe), then constant at m*after. */
export function collisionMomentum(m: number, before: number, after: number, t0: number, t1: number, t: number) {
  const pBefore = m * before, pAfter = m * after
  if (t <= t0) return pBefore
  if (t >= t1) return pAfter
  const f = (t - t0) / (t1 - t0)
  return pBefore + f * (pAfter - pBefore)
}

export const collisionVelocity = (m: number, before: number, after: number, t0: number, t1: number, t: number) =>
  collisionMomentum(m, before, after, t0, t1, t) / m

/** Position at time t, found by integrating the (piecewise-linear) velocity above. */
export function collisionPosition(m: number, before: number, after: number, t0: number, t1: number, x0: number, t: number) {
  if (t <= t0) return x0 + before * t
  const xAtT0 = x0 + before * t0
  if (t <= t1) {
    const dt = t - t0
    const frac = dt / (t1 - t0)
    const avgV = before + 0.5 * frac * (after - before) // average of a linear ramp from `before` to the value at t
    return xAtT0 + avgV * dt
  }
  const dtFull = t1 - t0
  const xAtT1 = xAtT0 + ((before + after) / 2) * dtFull
  return xAtT1 + after * (t - t1)
}

// ---------------------------------------------------------------- Problem A: X hits stationary Y, X stops
// A 0.240 kg ball X at 16 m/s hits a stationary 0.480 kg ball Y; after the collision X is stationary.
export const BALLS = { mX: 0.24, mY: 0.48, uX: 16, uY: 0, dt: 0.002, t0: 0.1, t1: 0.102 }

export function ballsSolve() {
  const { mX, mY, uX, uY, dt } = BALLS
  const pTotal = mX * uX + mY * uY
  const vXf = 0 // given
  const vYf = (pTotal - mX * vXf) / mY
  const keBefore = 0.5 * mX * uX * uX + 0.5 * mY * uY * uY
  const keAfter = 0.5 * mX * vXf * vXf + 0.5 * mY * vYf * vYf
  const deltaKE = keAfter - keBefore
  const forceOnX = (mX * vXf - mX * uX) / dt // signed: negative means opposing X's original (positive) direction of travel
  const forceOnY = -forceOnX // Newton's third law: equal and opposite, same instant
  return { pTotal, vXf, vYf, keBefore, keAfter, deltaKE, forceOnX, forceOnY }
}

// ---------------------------------------------------------------- Problem B: X and Y collide and stick (perfectly inelastic)
// Block X (mass m, speed 5v) collides head-on with a stationary block Y and they move off together at v.
// Momentum conservation alone gives m_Y / m_X = 4, and the KE ratio after/before = 1/5, for ANY m, v — these
// two illustrative numbers (mX = 1 kg, v = 2 m/s) are one concrete case of that general result.
export const STICK = { mX: 1, v: 2, dt: 0.02, t0: 0.02, t1: 0.04, tMax: 0.06 }
export const STICK_MASS_RATIO = 4 // m_Y / m_X, from conservation of momentum alone (see the worked steps)

export function stickSolve() {
  const { mX, v, dt } = STICK
  const mY = STICK_MASS_RATIO * mX
  const uX = 5 * v
  const uY = 0
  const keBefore = 0.5 * mX * uX * uX + 0.5 * mY * uY * uY
  const keAfter = 0.5 * (mX + mY) * v * v
  const keRatio = keAfter / keBefore
  const forceOnX = (mX * v - mX * uX) / dt
  const forceOnY = -forceOnX
  return { mY, uX, uY, keBefore, keAfter, keRatio, forceOnX, forceOnY }
}
