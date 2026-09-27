// Vector resolution and the river-crossing problem. Pure functions, tested by scripts/test-learn-physics.mjs.

const D2R = Math.PI / 180
const R2D = 180 / Math.PI

/** Standard convention: angle measured anticlockwise from +x. Returns {x, y}. */
export const toComponents = (mag: number, angleDeg: number) => ({ x: mag * Math.cos(angleDeg * D2R), y: mag * Math.sin(angleDeg * D2R) })

/** Magnitude and angle (0-360, anticlockwise from +x) of a vector given its components. */
export function toPolar(x: number, y: number) {
  const mag = Math.hypot(x, y)
  let angleDeg = Math.atan2(y, x) * R2D
  if (angleDeg < 0) angleDeg += 360
  return { mag, angleDeg }
}

export const addComponents = (a: { x: number; y: number }, b: { x: number; y: number }) => ({ x: a.x + b.x, y: a.y + b.y })

// ---------------------------------------------------------------- the river crossing problem
// Axes: "across" = straight from the near bank to the far bank (river width W). "along" = direction
// of the current (downstream positive). The boat's heading phi is measured from "straight across",
// positive = aimed downstream.
export interface RiverResult {
  across: number // m s^-1, boat's contribution to crossing
  along: number // m s^-1, resultant drift speed (current + boat's sideways component)
  resultantSpeed: number
  resultantAngleDeg: number // from "straight across", positive = downstream
  time: number // s, Infinity if the boat makes no progress across
  drift: number // m, Infinity if time is Infinite
}

export function riverCrossing(boatSpeed: number, headingDeg: number, currentSpeed: number, width: number): RiverResult {
  const phi = headingDeg * D2R
  const across = boatSpeed * Math.cos(phi)
  const along = currentSpeed + boatSpeed * Math.sin(phi)
  const { mag: resultantSpeed } = toPolar(across, along)
  const resultantAngleDeg = (Math.atan2(along, across) * R2D)
  if (across <= 1e-9) return { across, along, resultantSpeed, resultantAngleDeg, time: Infinity, drift: Infinity }
  const time = width / across
  return { across, along, resultantSpeed, resultantAngleDeg, time, drift: along * time }
}

/** Heading (aimed upstream, i.e. negative) that cancels the current exactly. NaN if the boat is not fast enough. */
export const headingToCancelDrift = (boatSpeed: number, currentSpeed: number) => (currentSpeed > boatSpeed ? NaN : -Math.asin(currentSpeed / boatSpeed) * R2D)

// ---------------------------------------------------------------- the river-crossing game's own step
export const RIVER = { width: 40, maxSpeed: 3, accel: 1.5, decel: 1.0, steerRate: 60 /* deg/s */, maxHeading: 85 }

export interface BoatState { across: number; along: number; speed: number; heading: number } // heading in degrees
export interface BoatInput { up: boolean; left: boolean; right: boolean }

export function stepBoat(s: BoatState, inp: BoatInput, currentSpeed: number, dt: number): BoatState {
  let speed = s.speed + (inp.up ? RIVER.accel : -RIVER.decel) * dt
  speed = Math.max(0, Math.min(RIVER.maxSpeed, speed))
  const dh = (inp.left ? -RIVER.steerRate : inp.right ? RIVER.steerRate : 0) * dt
  const heading = Math.max(-RIVER.maxHeading, Math.min(RIVER.maxHeading, s.heading + dh))
  const r = riverCrossing(speed, heading, currentSpeed, RIVER.width)
  return { across: s.across + r.across * dt, along: s.along + r.along * dt, speed, heading }
}
