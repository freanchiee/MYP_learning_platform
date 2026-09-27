// Physics behind the "what can a force do?" car. Pure functions, tested by scripts/test-learn-physics.mjs.
// World: metres, seconds, newtons; x to the right, y UP, heading th measured anticlockwise from +x.

export const CAR = {
  m: 1200, // kg
  L: 2.6, // wheelbase, m
  mu: 0.8, // tyre-road friction coefficient
  g: 9.81,
  Feng: 2400, // engine force at full throttle, N
  Fbrake: 6000, // braking force, N
  Fnos: 3600, // extra engine force while the nitrous boost is active, N
  drag: 1.4, // air resistance F = drag v^2, N s^2 m^-2
  roll: 150, // rolling resistance, N (only while moving)
  maxSteer: 0.5236, // 30 degrees
  steerRate: 1.8, // rad s^-1
}
export const GRIP_LIMIT = CAR.mu * CAR.m * CAR.g // largest sideways tyre force, N

export interface CarState { x: number; y: number; th: number; v: number; steer: number }
export interface CarInput { up: boolean; down: boolean; left: boolean; right: boolean; nos?: boolean }
export interface CarForces {
  engine: number // N, along the velocity
  brake: number // N, opposite the velocity
  resist: number // N, air + rolling, opposite the velocity
  lateral: number // N, magnitude of the sideways tyre friction force
  latDir: [number, number] // unit vector of that force (perpendicular to the velocity)
  turnRadius: number // m (Infinity when straight)
  a: number // m s^-2, along the velocity (signed)
  skidding: boolean
}

export const newCar = (x = 0): CarState => ({ x, y: 0, th: 0, v: 0, steer: 0 })

export function stepCar(s: CarState, inp: CarInput, dt: number): { state: CarState; forces: CarForces } {
  // steering wheel moves smoothly towards its target
  const target = ((inp.left ? 1 : 0) - (inp.right ? 1 : 0)) * CAR.maxSteer
  const dSteer = Math.max(-CAR.steerRate * dt, Math.min(CAR.steerRate * dt, target - s.steer))
  const steer = s.steer + dSteer

  // along the velocity: engine forward, brake and resistance backward
  const engine = inp.up ? CAR.Feng + (inp.nos ? CAR.Fnos : 0) : 0
  const moving = s.v > 1e-6
  const brake = inp.down && moving ? CAR.Fbrake : 0
  const resist = moving ? CAR.drag * s.v * s.v + CAR.roll : 0
  let net = engine - brake - resist
  let v = s.v + (net / CAR.m) * dt
  if (v < 0) v = 0 // brakes and drag never push the car backwards
  if (!moving && net < 0) net = 0
  const a = net / CAR.m

  // across the velocity: the tyres' friction force turns the car (a centripetal force)
  const tan = Math.tan(steer)
  let omega = (v * tan) / CAR.L
  let lateral = CAR.m * v * Math.abs(omega) // m v^2 / r
  let skidding = false
  if (lateral > GRIP_LIMIT) {
    lateral = GRIP_LIMIT
    omega = Math.sign(omega) * (GRIP_LIMIT / (CAR.m * v)) // the car cannot turn as tightly as the wheels point
    skidding = true
  }
  const th = s.th + omega * dt
  const x = s.x + v * Math.cos(th) * dt
  const y = s.y + v * Math.sin(th) * dt
  const side = Math.sign(omega) || 0
  const latDir: [number, number] = [-Math.sin(th) * side, Math.cos(th) * side]
  const turnRadius = Math.abs(omega) > 1e-9 ? v / Math.abs(omega) : Infinity
  return { state: { x, y, th, v, steer }, forces: { engine, brake, resist, lateral, latDir, turnRadius, a, skidding } }
}

// ---------------------------------------------------------------- suspension: one wheel over a speed breaker
export const SUSP = {
  ms: 300, // sprung mass on one wheel, kg
  k: 22000, // spring constant, N m^-1
  c: 2500, // damper, N s m^-1
  h: 0.1, // speed-breaker height, m
  len: 2.0, // speed-breaker length, m
  spacing: 120, // m between breakers along the road
  first: 60, // x of the first breaker, m
}

/** Height of the road under the wheel, s metres after the front edge of a breaker. */
export const roadHeight = (s: number) => (s <= 0 || s >= SUSP.len ? 0 : SUSP.h * Math.pow(Math.sin((Math.PI * s) / SUSP.len), 2))

export interface SuspState { z: number; zd: number } // body height above its rest position, and its velocity
export function stepSuspension(st: SuspState, zr: number, zrd: number, dt: number) {
  const xc = zr - st.z // EXTRA squeeze of the spring caused by the bump
  const xcd = zrd - st.zd
  const F = SUSP.k * xc + SUSP.c * xcd
  const zd = st.zd + (F / SUSP.ms) * dt
  const z = st.z + zd * dt
  return { state: { z, zd }, xc: zr - z, force: SUSP.k * (zr - z) }
}

/** Which breaker is nearest, and how far past its front edge the car is. */
export function breakerAt(x: number) {
  const k = Math.round((x - SUSP.first) / SUSP.spacing)
  const xb = SUSP.first + k * SUSP.spacing
  return { xb, s: x - xb }
}

/** Drive straight over one breaker at constant speed; returns the biggest extra squeeze and the squeeze at the end. */
export function crossBreaker(speed: number, seconds = 6, dt = 1 / 960) {
  let st: SuspState = { z: 0, zd: 0 }
  let zrPrev = 0
  let peak = 0
  let last = 0
  const startS = -1
  for (let t = 0; t < seconds; t += dt) {
    const s = startS + speed * t
    const zr = roadHeight(s)
    const r = stepSuspension(st, zr, (zr - zrPrev) / dt, dt)
    st = r.state
    zrPrev = zr
    if (r.xc > peak) peak = r.xc
    last = r.xc
  }
  return { peak, last }
}
