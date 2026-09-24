// Pure physics models used by the learning widgets. Tested by scripts/test-learn-physics.mjs.
export const G = 9.81 // m s^-2 (IB data booklet value)
export const C = 3.0e8 // m s^-1
export const H = 6.63e-34 // J s

export const massEnergy = (m: number) => m * C * C
export const photonEnergy = (f: number) => H * f

/** Small-angle pendulum period, T = 2 pi sqrt(L/g). */
export const pendulumPeriod = (L: number, g = G) => 2 * Math.PI * Math.sqrt(L / g)

/** Exact-ish period by integrating the full pendulum ODE (velocity Verlet). Used for testing only. */
export function pendulumPeriodNumeric(L: number, theta0: number, g = G, dt = 1e-5) {
  let th = theta0
  let w = 0
  let t = 0
  const acc = (x: number) => -(g / L) * Math.sin(x)
  let a = acc(th)
  let prev = th
  // period = 4 x time from release to first zero crossing
  while (th > 0) {
    prev = th
    th += w * dt + 0.5 * a * dt * dt
    const a2 = acc(th)
    w += 0.5 * (a + a2) * dt
    a = a2
    t += dt
  }
  const frac = prev / (prev - th) // linear interpolation of the crossing
  return 4 * (t - dt + frac * dt)
}

/** Block on an incline. Slides when tan(theta) > mu. Returns acceleration down the slope (m s^-2). */
export function inclineAcceleration(thetaDeg: number, mu: number, g = G) {
  const th = (thetaDeg * Math.PI) / 180
  const a = g * (Math.sin(th) - mu * Math.cos(th))
  return a > 0 ? a : 0
}
export const slideAngle = (mu: number) => (Math.atan(mu) * 180) / Math.PI

/** Partial sum of 1/2 + 1/4 + ... (n terms) = 1 - 2^-n. */
export const zenoSum = (n: number) => 1 - Math.pow(0.5, n)

/** Position of an object as seen from a reference that moves at velocity vRef (all 1D, m, m s^-1, s). */
export const relativePosition = (x0: number, v: number, x0Ref: number, vRef: number, t: number) =>
  x0 + v * t - (x0Ref + vRef * t)
