// Independence of horizontal and vertical motion, vector addition (crosswind landing, walking in rain) and
// stellar aberration. Pure functions, tested in scripts/test-learn-physics.mjs. SI unless a name says otherwise.

const RAD = Math.PI / 180

// ---------------------------------------------------------------- independence of x and y motion (class notes: g = 10)
/** Two balls released together from height h: A just dropped, B thrown horizontally at u. */
export const BALLS = { h: 50, u: 5, g: 10 }

export const fallTimeG = (h: number, g: number) => Math.sqrt((2 * h) / g)
/** How far a horizontally launched object travels before reaching the ground: R = u × t. */
export const horizontalRange = (u: number, h: number, g: number) => u * fallTimeG(h, g)
/** Displacement of the thrown ball from its start to where it lands, √(R² + h²). */
export const displacementOfB = (u: number, h: number, g: number) => Math.hypot(horizontalRange(u, h, g), h)
/** Where the thrown ball is at time t (x along, y above the ground), clamped at the ground. */
export function ballB(u: number, h: number, g: number, t: number) {
  const T = fallTimeG(h, g)
  const tt = Math.min(Math.max(t, 0), T)
  return { x: u * tt, y: Math.max(0, h - 0.5 * g * tt * tt), vy: g * tt }
}
/** Where the dropped ball is: same height as B at every moment, no sideways motion. */
export const ballA = (h: number, g: number, t: number) => {
  const T = fallTimeG(h, g)
  const tt = Math.min(Math.max(t, 0), T)
  return { x: 0, y: Math.max(0, h - 0.5 * g * tt * tt), vy: g * tt }
}

/** Supply drop: release when the aircraft is this far (horizontally) BEFORE the target. */
export const leadDistance = (u: number, h: number, g: number) => horizontalRange(u, h, g)
/** Where a parcel released at releaseX lands. */
export const dropLandingX = (releaseX: number, u: number, h: number, g: number) => releaseX + horizontalRange(u, h, g)

// ---------------------------------------------------------------- crosswind landing (vector addition)
export const CROSSWIND = { airspeed: 200, wind: 50 } // km/h, from the whiteboard sketch

/**
 * Ground velocity = velocity of the plane through the air + velocity of the air (the wind).
 * x to the right, y along the runway. headingDeg is measured from the runway direction, positive toward +x.
 * windX is the wind's velocity along +x (positive blows to the right).
 */
export function groundVelocity(airspeed: number, headingDeg: number, windX: number) {
  const h = headingDeg * RAD
  return { vx: airspeed * Math.sin(h) + windX, vy: airspeed * Math.cos(h) }
}
/** Heading that cancels the drift: the nose points INTO the wind by sin θ = W / V (the "crab angle"), degrees. */
export const crabAngleDeg = (airspeed: number, windX: number) => -Math.asin(Math.max(-1, Math.min(1, windX / airspeed))) / RAD
/** Speed along the runway when crabbing correctly: √(V² − W²). */
export const groundSpeedWhenCrabbing = (airspeed: number, windX: number) => Math.sqrt(airspeed * airspeed - windX * windX)
/** Sideways position (same length unit as the distance) on reaching `distance` along the runway, flying at a constant heading. */
export function lateralOffset(airspeed: number, headingDeg: number, windX: number, distance: number) {
  const g = groundVelocity(airspeed, headingDeg, windX)
  return (g.vx / g.vy) * distance
}

// ---------------------------------------------------------------- walking in the rain (same vectors, other numbers)
/** The rain falls straight down at rainSpeed. A walker moving at walkSpeed sees it come from AHEAD: tan θ = W / v. Degrees. */
export const rainAngleDeg = (walkSpeed: number, rainSpeed: number) => Math.atan2(walkSpeed, rainSpeed) / RAD
/** Rain velocity relative to the walker (walker moves toward +x): v_rain − v_walker. */
export const rainRelativeToWalker = (walkSpeed: number, rainSpeed: number) => ({ vx: -walkSpeed, vy: -rainSpeed })

/** The umbrella pivots about the hand (1.2 m up) on a 0.7 m shaft, so leaning it also moves the canopy forward. */
export const UMBRELLA = { bodyHeight: 1.7, handHeight: 1.2, shaft: 0.7, canopyHalfWidth: 0.55 }
/** Centre of the canopy for a lean of tiltDeg (positive = forward). */
export const canopyCentre = (tiltDeg: number) => {
  const t = tiltDeg * RAD
  return { x: UMBRELLA.shaft * Math.sin(t), y: UMBRELLA.handHeight + UMBRELLA.shaft * Math.cos(t) }
}

/**
 * Fraction of a standing-height body (a vertical line, 0 to 1.7 m) that the canopy shields from the rain.
 * Rain arrives along the walker-frame direction; tilt is the umbrella's lean toward the walking direction (degrees,
 * positive = top of the shaft leans forward, canopy normal tips forward).
 */
export function dryFraction(walkSpeed: number, rainSpeed: number, tiltDeg: number, samples = 80) {
  const { bodyHeight, canopyHalfWidth } = UMBRELLA
  const cc = canopyCentre(tiltDeg)
  const norm = Math.hypot(walkSpeed, rainSpeed)
  const qx = walkSpeed / norm, qy = rainSpeed / norm // unit vector from the body toward where the rain comes from
  const t = tiltDeg * RAD
  const sx = Math.cos(t), sy = -Math.sin(t) // along the canopy
  let dry = 0
  for (let i = 0; i < samples; i++) {
    const y = ((i + 0.5) / samples) * bodyHeight
    // Solve (0, y) + λ q = canopyCentre + μ s for λ > 0 and |μ| <= canopyHalfWidth
    const det = qx * -sy - -sx * qy
    if (Math.abs(det) < 1e-12) continue
    const bx = cc.x, by = cc.y - y
    const lambda = (bx * -sy - -sx * by) / det
    const mu = (qx * by - qy * bx) / det
    if (lambda > 0 && Math.abs(mu) <= canopyHalfWidth) dry++
  }
  return dry / samples
}

// ---------------------------------------------------------------- stellar aberration
export const EARTH_ORBIT = { radius: 1.496e11, period: 3.156e7 } // m, s (one year)
/** Earth's orbital speed 2πr / T, m s⁻¹. About 29.8 km s⁻¹. */
export const earthOrbitSpeed = (r = EARTH_ORBIT.radius, T = EARTH_ORBIT.period) => (2 * Math.PI * r) / T
export const C_LIGHT = 2.998e8
/** Tilt of the telescope from the true direction of a star at the zenith: tan α = v / c. Radians. */
export const aberrationRad = (v: number, c = C_LIGHT) => Math.atan(v / c)
export const radToArcsec = (r: number) => (r / RAD) * 3600
export const arcsecToRad = (a: number) => (a / 3600) * RAD
/** Bradley’s method run backwards: knowing v and the measured angle α, c = v / tan α. */
export const speedOfLightFromAberration = (v: number, alphaRad: number) => v / Math.tan(alphaRad)
