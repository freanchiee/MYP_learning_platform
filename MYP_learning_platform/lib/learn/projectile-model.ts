// A parcel released from an aircraft flying horizontally. Air resistance negligible, so the two axes are independent:
// horizontal: constant velocity u. vertical: starts at 0, constant acceleration g downward.
// Uses g = 9.8 m s⁻² to match the class notes (same convention as lib/learn/exam-motion-model.ts).
export const G_PARCEL = 9.8

/** The question as set: aircraft at 42 m s⁻¹, 63 m above horizontal ground. */
export const PARCEL_QUESTION = { u: 42, h: 63 }

/** Time to reach the ground, from h = ½ g t² (the horizontal speed plays no part). */
export const fallTime = (h: number, g = G_PARCEL) => Math.sqrt((2 * h) / g)

/** Position at time t after release: x along the ground from the release point, y height above the ground. */
export function parcelAt(u: number, h: number, t: number, g = G_PARCEL) {
  const T = fallTime(h, g)
  const tt = Math.min(Math.max(t, 0), T)
  const vx = u
  const vy = g * tt // downward magnitude
  return { t: tt, x: u * tt, y: Math.max(0, h - 0.5 * g * tt * tt), vx, vy, speed: Math.hypot(vx, vy), angle: (Math.atan2(vy, vx) * 180) / Math.PI }
}

/** Vertical component of velocity just before landing, v = u + at with u = 0 (also √(2gh)). */
export const landingVy = (h: number, g = G_PARCEL) => g * fallTime(h, g)
/** Landing speed from the components, √(vx² + vy²). Equals √(u² + 2gh) by energy. */
export const landingSpeed = (u: number, h: number, g = G_PARCEL) => Math.hypot(u, landingVy(h, g))
/** Angle below the horizontal at landing, degrees. */
export const landingAngle = (u: number, h: number, g = G_PARCEL) => (Math.atan2(landingVy(h, g), u) * 180) / Math.PI
/** How far ahead of the release point it lands (extra to the exam parts). */
export const landingRange = (u: number, h: number, g = G_PARCEL) => u * fallTime(h, g)

// ---------------------------------------------------------------- a ball thrown at an angle over a wall
// Up is positive. Air resistance negligible. Launch speed u at angle θ above the horizontal from height y0.
export const G_STD = 9.81 // the exam question below is worked with 9.81

export interface Throw { u: number; angleDeg: number; y0: number; g: number }
/** The exam question as set: 22 m s⁻¹ at 40° from 1.2 m, wall 36 m away. */
export const WALL_QUESTION = { u: 22, angleDeg: 40, y0: 1.2, g: G_STD, wallDistance: 36 }

export const launchComponents = (th: Throw) => ({
  vx: th.u * Math.cos((th.angleDeg * Math.PI) / 180),
  vy: th.u * Math.sin((th.angleDeg * Math.PI) / 180),
})
/** Height above the ground after time t: y = y0 + vy t − ½ g t². */
export function heightAtTime(th: Throw, t: number) {
  const { vy } = launchComponents(th)
  return th.y0 + vy * t - 0.5 * th.g * t * t
}
/** Time to reach a horizontal distance d: the horizontal motion is uniform, so t = d / vx. */
export const timeToDistance = (th: Throw, d: number) => d / launchComponents(th).vx
export const heightAtDistance = (th: Throw, d: number) => heightAtTime(th, timeToDistance(th, d))
/** Highest point reached, above the ground. */
export const apexHeight = (th: Throw) => { const { vy } = launchComponents(th); return th.y0 + (vy * vy) / (2 * th.g) }
/** Time at which it comes back to the ground (y = 0), from the quadratic. */
export const throwLandingTime = (th: Throw) => { const { vy } = launchComponents(th); return (vy + Math.sqrt(vy * vy + 2 * th.g * th.y0)) / th.g }
export const throwLandingRange = (th: Throw) => launchComponents(th).vx * throwLandingTime(th)

/**
 * Where a wall of height wallHeight can stand so the ball just clears its top. The ball is at that height twice
 * (going up, coming down). d2 is the FARTHEST such wall (the ball just clears it on the way down). A wall at any
 * distance from d1 to d2 is cleared; a wall closer than d1 is hit on the way up. d1 is 0 if it is thrown from above
 * the wall top. Returns null if the ball never climbs that high.
 */
export function justClearsDistances(th: Throw, wallHeight: number) {
  const { vx, vy } = launchComponents(th)
  const disc = vy * vy - 2 * th.g * (wallHeight - th.y0)
  if (disc < 0) return null
  const s = Math.sqrt(disc)
  const t1 = (vy - s) / th.g, t2 = (vy + s) / th.g
  return { d1: th.y0 >= wallHeight ? 0 : vx * t1, d2: vx * t2, t1, t2 }
}

export type WallOutcome =
  | { kind: 'clears'; heightAtWall: number; margin: number }
  | { kind: 'hits'; heightAtWall: number }
  | { kind: 'short'; range: number }
/** What happens to a ball thrown at a wall of height wallHeight at distance d. */
export function wallOutcome(th: Throw, d: number, wallHeight: number): WallOutcome {
  const range = throwLandingRange(th)
  if (d > range) return { kind: 'short', range }
  const y = heightAtDistance(th, d)
  return y >= wallHeight ? { kind: 'clears', heightAtWall: y, margin: y - wallHeight } : { kind: 'hits', heightAtWall: y }
}
