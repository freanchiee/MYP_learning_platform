// Motion graphs (x-t, v-t, a-t) and "models vs reality". Pure functions, tested by scripts/test-learn-physics.mjs.
import { CAR, newCar, stepCar } from './car-model'

/** Constant acceleration: position, velocity at time t. Uniform motion is the special case a = 0. */
export const position = (x0: number, u: number, a: number, t: number) => x0 + u * t + 0.5 * a * t * t
export const velocity = (u: number, a: number, t: number) => u + a * t

/** Area under the v-t graph from 0 to t, built the way it is drawn: a rectangle (u x t) plus a triangle (1/2 x t x change in v). */
export function areaUnderVt(u: number, a: number, t: number) {
  const rect = u * t
  const tri = 0.5 * t * (a * t)
  return { rect, tri, total: rect + tri }
}

/** Gradient of any function at t, by a symmetric difference: what the tangent on a graph measures. */
export const gradient = (f: (t: number) => number, t: number, h = 1e-4) => (f(t + h) - f(t - h)) / (2 * h)

/** Average gradient between two read-off points, (y2 - y1) / (x2 - x1). */
export const averageGradient = (x1: number, y1: number, x2: number, y2: number) => (y2 - y1) / (x2 - x1)

/** Distance (scalar, length of the path) and displacement (vector, straight line start -> end) for a walk of dx east then dy north. */
export function walk(dx: number, dy: number) {
  const distance = Math.abs(dx) + Math.abs(dy)
  const displacement = Math.hypot(dx, dy)
  const angleDeg = (Math.atan2(dy, dx) * 180) / Math.PI // anticlockwise from east
  return { distance, displacement, angleDeg }
}

// ---- models vs reality: a car from rest, full throttle ----
/** The "model": constant acceleration a0 = F / m, ignoring air resistance. x = 1/2 a0 t^2. */
export const modelPosition = (t: number) => 0.5 * (CAR.Feng / CAR.m) * t * t
export const modelVelocity = (t: number) => (CAR.Feng / CAR.m) * t

/** "Reality" (the fuller simulation with drag and rolling resistance): position and velocity at times 0..tMax every `every` seconds. */
export function realTrack(tMax: number, every = 0.5, dt = 1 / 240) {
  let s = newCar()
  const out: { t: number; x: number; v: number }[] = [{ t: 0, x: 0, v: 0 }]
  let next = every
  for (let t = 0; t < tMax - 1e-9; t += dt) {
    s = stepCar(s, { up: true, down: false, left: false, right: false }, dt).state
    if (t + dt >= next - 1e-9) {
      out.push({ t: next, x: s.x, v: s.v })
      next += every
    }
  }
  return out
}
