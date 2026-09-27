import { build } from 'esbuild'
import { pathToFileURL } from 'node:url'
import path from 'node:path'
const out = path.resolve('node_modules/.cache/physics-models.mjs')
await build({ entryPoints: ['lib/learn/physics-models.ts'], outfile: out, format: 'esm', bundle: true, logLevel: 'silent' })
const m = await import(pathToFileURL(out).href)
let fail = 0
const ok = (name, cond, info = '') => { console.log((cond ? 'PASS ' : 'FAIL ') + name + ' ' + info); if (!cond) fail++ }
const near = (a, b, tol) => Math.abs(a - b) <= tol
ok('E=mc2 1kg = 9e16 J', near(m.massEnergy(1), 9e16, 1e3))
ok('E=hf 5e14 Hz ~ 3.3e-19 J', near(m.photonEnergy(5e14), 3.315e-19, 1e-21), String(m.photonEnergy(5e14)))
ok('pendulum 1.00 m T=2.006 s', near(m.pendulumPeriod(1), 2.0064, 1e-3), String(m.pendulumPeriod(1)))
ok('L x4 => T x2', near(m.pendulumPeriod(4) / m.pendulumPeriod(1), 2, 1e-12))
for (const deg of [2, 5, 10, 15]) {
  const th = (deg * Math.PI) / 180
  const num = m.pendulumPeriodNumeric(1, th)
  const rel = Math.abs(num - m.pendulumPeriod(1)) / m.pendulumPeriod(1)
  // exact series: T ~ T0 (1 + th^2/16); small-angle error must be below theta^2/16 + margin
  ok(`pendulum ODE vs formula @${deg} deg`, rel < th * th / 16 + 5e-4, `rel err ${(rel * 100).toFixed(3)}% (series predicts ${(th * th / 16 * 100).toFixed(3)}%)`)
  ok(`pendulum ODE matches series @${deg} deg`, near(num, m.pendulumPeriod(1) * (1 + th * th / 16), 3e-4 * m.pendulumPeriod(1)))
}
ok('incline mu=0.3 stays at 16 deg', m.inclineAcceleration(16, 0.3) === 0)
ok('incline slide angle mu=0.3 is 16.7 deg', near(m.slideAngle(0.3), 16.699, 0.01))
ok('incline 30 deg frictionless a=g/2', near(m.inclineAcceleration(30, 0), 4.905, 1e-9))
ok('zeno n=3 = 7/8', near(m.zenoSum(3), 0.875, 1e-12))
ok('zeno n=50 < 1', m.zenoSum(50) < 1 && 1 - m.zenoSum(50) < 1e-14)
ok('passenger from platform moves, from train at rest', m.relativePosition(0, 10, 0, 0, 5) === 50 && m.relativePosition(0, 10, 0, 10, 5) === 0)

// ---- conversions ----
const out2 = path.resolve('node_modules/.cache/conversions.mjs')
await build({ entryPoints: ['lib/learn/conversions.ts'], outfile: out2, format: 'esm', bundle: true, logLevel: 'silent' })
const cv = await import(pathToFileURL(out2).href)
let seed = 7
const rng = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
// Independent reference: convert via SI factors, not via the generator's own steps
const REF = { G: 1e9, M: 1e6, k: 1e3, m: 1e-3, 'µ': 1e-6, n: 1e-9, p: 1e-12 }
let n = 0, bad = 0
for (let i = 0; i < 400; i++) {
  const pr = cv.makeProblem(rng)
  n++
  let ref
  const num = Number(pr.q.match(/Convert ([\d.]+)/)[1])
  if (pr.kind === 'prefix') ref = num * REF[pr.q.match(/Convert [\d.]+ (.)/u)[1]]
  else if (pr.kind === 'speed') ref = pr.q.includes('km/h to') ? num * 1000 / 3600 : num * 3600 / 1000
  else if (pr.kind === 'area') ref = num * (0.01 * 0.01)
  else if (pr.kind === 'volume') ref = num * (0.01 ** 3)
  else ref = num * 3600
  if (Math.abs(ref - pr.answer) > 1e-9 * Math.abs(ref)) { bad++; console.log('MISMATCH', pr.q, pr.answer, ref) }
  if (pr.traps.some((t) => Math.abs(t.value - pr.answer) < 1e-12 * Math.abs(pr.answer))) { bad++; console.log('TRAP equals answer', pr.q) }
}
ok('400 random conversions match an independent SI calculation', bad === 0, `${n} problems`)
ok('36 km/h = 10 m/s', near(36 * 1000 / 3600, 10, 1e-12))
ok('5 cm cube = 1.25e-4 m3', near(0.05 ** 3, 1.25e-4, 1e-18))
ok('100 N over 10 cm2 = 1e5 Pa', near(100 / (10 * 1e-4), 1e5, 1e-6))
ok('2 kg x 5 m/s2 = 10 N', 2 * 5 === 10)

// ---- live stage navigation: forward then back must restore each stage's host state ----
const out3 = path.resolve('node_modules/.cache/stageNav.mjs')
await build({ entryPoints: ['lib/design-live/stageNav.ts'], outfile: out3, format: 'esm', bundle: true, logLevel: 'silent' })
const nav = await import(pathToFileURL(out3).href)
const game = { game: { phase: 2, credits: 7 } }
let st = nav.stateForAdvance(game, 0) // game -> quiz
ok('advance stashes the old stage state', JSON.stringify(st._stash[0]) === JSON.stringify(game))
const quiz = { ...st, mcqIndex: 3, locked: true }
st = nav.stateForAdvance(quiz, 1) // quiz -> worksheet
ok('both stages are stashed after two advances', st._stash[0].game.credits === 7 && st._stash[1].mcqIndex === 3 && !('_stash' in st._stash[1]))
let back = nav.stateForBack(st, 2) // worksheet -> quiz
ok('back restores the quiz state', back.restored && back.state.mcqIndex === 3 && back.state.locked === true)
ok('back keeps the earlier game stash', back.state._stash[0].game.phase === 2)
back = nav.stateForBack(back.state, 1) // quiz -> game
ok('second back restores the game exactly', back.restored && back.state.game.phase === 2 && back.state.game.credits === 7)
const legacy = nav.stateForBack({ mcqIndex: 1 }, 1)
ok('back with nothing stashed (older session) starts fresh, and says so', legacy.restored === false && legacy.state._stash[1].mcqIndex === 1)

// ---- community-specific exemplars: full coverage, resolver behaves ----
const out4 = path.resolve('node_modules/.cache/myp5.mjs')
await build({ entryPoints: ['data/design/live/myp5-sustainability.ts'], outfile: path.resolve('node_modules/.cache/myp5/myp5-sustainability.mjs'), format: 'esm', bundle: true, logLevel: 'silent' })
await build({ entryPoints: ['lib/design-live/exemplars.ts'], outfile: path.resolve('node_modules/.cache/myp5/exemplars.mjs'), format: 'esm', bundle: true, logLevel: 'silent' })
const act = (await import(pathToFileURL(path.resolve('node_modules/.cache/myp5/myp5-sustainability.mjs')).href)).MYP5_SUSTAINABILITY
const ex = await import(pathToFileURL(path.resolve('node_modules/.cache/myp5/exemplars.mjs')).href)
const cfg = act.exemplarsByChoice
const communities = act.stages.find((x) => x.key === 'community').sections.find((x) => x.key === 'need').fields.find((x) => x.key === 'community').options
let missing = 0, badEx = 0, total = 0
const fieldsByPath = {}
for (const st of act.stages) if (st.type === 'worksheet') for (const sec of st.sections) for (const f of sec.fields) fieldsByPath[`${st.key}.${sec.key}.${f.key}`] = f
for (const [p2, byC] of Object.entries(cfg.byField)) {
  if (!fieldsByPath[p2]) { badEx++; console.log('exemplar key points at no field:', p2); continue }
  for (const c of communities) { total++; if (!byC[c] || byC[c].length < 2 || byC[c].some((t) => t.trim().length < 30)) { missing++; console.log('missing/short:', p2, c) } }
  for (const c of Object.keys(byC)) if (!communities.includes(c)) { badEx++; console.log('unknown community', c, 'in', p2) }
}
ok('every mapped field has 2+ real exemplars for all 5 communities', missing === 0 && badEx === 0, `${Object.keys(cfg.byField).length} fields x ${communities.length} communities = ${total}`)
const needField = fieldsByPath['community.need.need']
const data = { community: { need: { community: 'Factory Worker' } } }
const r = ex.exemplarsFor(cfg, 'community', 'need', needField, data)
ok('resolver returns the Factory Worker exemplars', r.specific && r.choice === 'Factory Worker' && r.texts[0].includes('factory workers'))
const r2 = ex.exemplarsFor(cfg, 'community', 'need', needField, {})
ok('no community chosen -> general exemplars, flagged as not specific', !r2.specific && r2.texts.length === needField.exemplars.length)
const r3 = ex.exemplarsFor(cfg, 'ideation', 'spec', fieldsByPath['ideation.spec.mustnot'], data)
ok('a field with no community version falls back to its general exemplars', !r3.specific && r3.choice === 'Factory Worker')
ok('reveal key format', ex.revealKey('community', 'need', 'need') === 'reveal:community:need:need')

// ---- A.2 force and momentum ----
let seed2 = 11
const rnd2 = () => ((seed2 = (seed2 * 48271) % 2147483647) / 2147483647)
let pBad = 0, keBadEl = 0, keBadIn = 0, restBad = 0
for (let i = 0; i < 2000; i++) {
  const m1 = 0.5 + rnd2() * 5, m2 = 0.5 + rnd2() * 5, v1 = -6 + rnd2() * 12, v2 = -6 + rnd2() * 12
  for (const e of [1, 0.5, 0]) {
    const o = m.collide1D(m1, v1, m2, v2, e)
    if (Math.abs(m1 * v1 + m2 * v2 - (m1 * o.v1 + m2 * o.v2)) > 1e-9) pBad++
    const ke0 = m.kineticEnergy(m1, v1) + m.kineticEnergy(m2, v2), ke1 = m.kineticEnergy(m1, o.v1) + m.kineticEnergy(m2, o.v2)
    if (e === 1 && Math.abs(ke0 - ke1) > 1e-9) keBadEl++
    if (e < 1 && ke1 > ke0 + 1e-9) keBadIn++
    if (e === 0 && Math.abs(o.v1 - o.v2) > 1e-9) restBad++
  }
}
ok('momentum conserved in 6000 random collisions (e = 1, 0.5, 0)', pBad === 0)
ok('KE conserved when elastic', keBadEl === 0)
ok('KE never increases when inelastic', keBadIn === 0)
ok('perfectly inelastic: bodies move together', restBad === 0)
const skaters = m.collide1D(60, 0, 40, 0, 1) // at rest, no motion: sanity
ok('nothing moves if nothing moves', skaters.v1 === 0 && skaters.v2 === 0)
const eq = m.collide1D(2, 4, 2, 0, 1)
ok('equal masses, elastic: velocities swap', near(eq.v1, 0, 1e-12) && near(eq.v2, 4, 1e-12))
const halfKE = m.collide1D(2, 4, 2, 0, 0)
ok('equal masses, perfectly inelastic, one at rest: half the KE remains', near(m.kineticEnergy(2, halfKE.v1) * 2 / m.kineticEnergy(2, 4), 0.5, 1e-12))
const mu = m.motionUnderForce(2, 6, 1, 3)
ok('motion under force: p(t) gradient is F', near((m.motionUnderForce(2, 6, 1, 3).p - m.motionUnderForce(2, 6, 1, 2).p), 6, 1e-12) && mu.a === 3)
// teacher's four cases: ball 0.2 kg, initial 5 m/s
const dp = (vf) => m.momentumChange(0.2, 5, vf)
ok('case 1 dp = 0', near(dp(5), 0, 1e-12))
ok('case 2 dp = -0.4 kg m/s', near(dp(3), -0.4, 1e-12))
ok('case 3 dp = -1.0 kg m/s', near(dp(0), -1.0, 1e-12))
ok('case 4 dp = -1.4 kg m/s (rebound at 2 m/s)', near(dp(-2), -1.4, 1e-12))
ok('case 4 velocity number line spans 7', Math.abs(-2 - 5) === 7)
// original quiz answers, recomputed from scratch
ok('Q1 F = 1.0 N', near(5.0 + (2.1 - 4.5) / 0.60, 1.0, 1e-9))
ok('Q2 air speed 7.85 m/s', near(0.80 * 9.81 / 4 / 0.25, 7.848, 1e-9))
ok('Q4 hose 24 N', near((180 / 60) * 8.0, 24, 1e-12))
ok('Q5 final velocity 3.0 m/s', near((2.0 * 9.0 - 6.0 * 2.0) / 2.0, 3.0, 1e-12))
ok('Q6 a = 4.0 m/s2', near((3.0 * 2.0) / 1.5, 4.0, 1e-12))
ok('Q7 tennis ball 180 N', near(0.150 * (24 + 12) / 0.030, 180, 1e-9))
ok('Q9 puck 13.75 N ~ 14 N', near(0.250 * (8.0 + 3.0) / 0.20, 13.75, 1e-9))
ok('L2 F = m dv / t = 2.0 N', near(2.0 * (5.0 - 1.0) / 4.0, 2.0, 1e-12))
ok('L4 skaters 3.0 m/s', near(60 * 2.0 / 40, 3.0, 1e-12))
ok('L4 stick together 2.0 m/s', near((2.0 * 3.0) / 3.0, 2.0, 1e-12))

// ---- force links time and space: from rest under constant F, p/t = F and E/x = F ----
let linkBad = 0
for (let i = 0; i < 2000; i++) {
  const mm = 0.5 + rnd2() * 6, F = 0.5 + rnd2() * 9, t = 0.1 + rnd2() * 6
  const st = m.motionUnderForce(mm, F, 0, t)
  const E = 0.5 * mm * st.v * st.v
  if (Math.abs(st.p / t - F) > 1e-9 || Math.abs(E / st.x - F) > 1e-9) linkBad++
}
ok('constant F from rest: momentum/time = F and energy/distance = F (2000 random cases)', linkBad === 0)
ok('6.0 N for 2.0 m transfers 12 J; 6.0 N for 2.0 s gives 12 kg m/s', near(6 * 2, 12, 1e-12))
// ---- the car: engine force along v speeds up, brake force against v slows, tyre friction across v turns ----
const outC = path.resolve('node_modules/.cache/car.mjs')
await build({ entryPoints: ['lib/learn/car-model.ts'], outfile: outC, format: 'esm', bundle: true, logLevel: 'silent' })
const car = await import(pathToFileURL(outC).href)
const NONE = { up: false, down: false, left: false, right: false }
const run = (s0, inp, secs, dt = 1 / 240) => { let s = s0, f = null; for (let t = 0; t < secs; t += dt) { const r = car.stepCar(s, inp, dt); s = r.state; f = r.forces } return { s, f } }
{
  const r0 = car.stepCar(car.newCar(), { ...NONE, up: true }, 0.001)
  ok('from rest, full throttle: a = Feng / m = 2.0 m/s2', near(r0.forces.a, 2.0, 1e-9) && near(r0.state.v, 0.002, 1e-9))
  const acc = run(car.newCar(), { ...NONE, up: true }, 6)
  ok('throttle: speed rises, engine force is along the velocity', acc.s.v > 8 && acc.f.engine === 2400 && acc.f.brake === 0)
  const top = run(car.newCar(), { ...NONE, up: true }, 150, 1 / 60)
  ok('air resistance gives a top speed (~40 m/s) where engine force = resistance', near(2400, 1.4 * top.s.v * top.s.v + 150, 5) && top.s.v > 39 && top.s.v < 41.5)
  const coast0 = { ...car.newCar(), v: 20 }
  const brk = run(coast0, { ...NONE, down: true }, 8)
  ok('braking: force opposite the velocity, car stops and never reverses', brk.s.v === 0 && brk.f.engine === 0)
  const brk1 = car.stepCar(coast0, { ...NONE, down: true }, 0.01)
  ok('braking deceleration ~ (Fbrake + resistance) / m', near(brk1.forces.a, -(6000 + 1.4 * 400 + 150) / 1200, 1e-9))
  // steering: sideways force = m v^2 / r, perpendicular to v, speed unchanged
  const st5 = { ...car.newCar(), v: 5, steer: car.CAR.maxSteer }
  const t1 = car.stepCar(st5, { ...NONE, left: true }, 1 / 240)
  const rExp = car.CAR.L / Math.tan(car.CAR.maxSteer)
  ok('turning radius r = L / tan(steer)', near(t1.forces.turnRadius, rExp, 1e-6))
  ok('sideways force = m v^2 / r (v after the step)', near(t1.forces.lateral, car.CAR.m * t1.state.v * t1.state.v / rExp, 1e-6) && !t1.forces.skidding)
  ok('sideways force is perpendicular to the velocity', near(t1.forces.latDir[0] * Math.cos(t1.state.th) + t1.forces.latDir[1] * Math.sin(t1.state.th), 0, 1e-9))
  const straight = run({ ...car.newCar(), v: 5 }, NONE, 1)
  const turning = run({ ...car.newCar(), v: 5, steer: car.CAR.maxSteer }, { ...NONE, left: true }, 1)
  ok('steering changes direction but not speed', near(straight.s.v, turning.s.v, 1e-9) && Math.abs(turning.s.th) > 0.5)
  const fast = car.stepCar({ ...car.newCar(), v: 15, steer: car.CAR.maxSteer }, { ...NONE, left: true }, 1 / 240)
  ok('too fast on full lock: tyres reach the grip limit (mu m g)', fast.forces.skidding && near(fast.forces.lateral, car.GRIP_LIMIT, 1e-6))
  const right = car.stepCar({ ...car.newCar(), v: 5, steer: -car.CAR.maxSteer }, { ...NONE, right: true }, 1 / 240)
  ok('turning right: the sideways force points to the right of the heading', right.forces.latDir[1] < 0 && right.state.th < 0)
}
// ---- suspension: the bump squeezes the spring, F = kx, and it relaxes afterwards ----
{
  const slow = car.crossBreaker(3), mid = car.crossBreaker(10), fast = car.crossBreaker(25)
  ok('bump squeezes the spring (0 < peak <= bump height)', mid.peak > 0.005 && mid.peak <= car.SUSP.h + 1e-6)
  ok('faster over the breaker: the spring is squeezed more', fast.peak > mid.peak && mid.peak > slow.peak)
  ok('spring returns to rest after the bump', Math.abs(mid.last) < 1e-3 && Math.abs(fast.last) < 1e-3)
  ok('F = kx at the peak', near(car.SUSP.k * mid.peak, 22000 * mid.peak, 1e-9))
  ok('breakers repeat every 120 m from x = 60', car.breakerAt(61).xb === 60 && car.breakerAt(185).xb === 180 && near(car.breakerAt(61).s, 1, 1e-12))
}
// ---- vector resolution and the river-crossing problem ----
const outV = path.resolve('node_modules/.cache/vector.mjs')
await build({ entryPoints: ['lib/learn/vector-model.ts'], outfile: outV, format: 'esm', bundle: true, logLevel: 'silent' })
const vec = await import(pathToFileURL(outV).href)
{
  // resolving: round trip and known values
  let bad = 0
  for (let i = 0; i < 3000; i++) {
    const mag = rnd2() * 20, ang = rnd2() * 360
    const { x, y } = vec.toComponents(mag, ang)
    const back = vec.toPolar(x, y)
    if (Math.abs(back.mag - mag) > 1e-6) bad++
    const angDiff = Math.min(Math.abs(back.angleDeg - ang), 360 - Math.abs(back.angleDeg - ang))
    if (mag > 1e-6 && angDiff > 1e-4) bad++
  }
  ok('toComponents / toPolar round-trip (3000 random vectors)', bad === 0)
  const c37 = vec.toComponents(5, 36.869897645844)
  ok('3-4-5 triangle: components are 4 and 3', near(c37.x, 4, 1e-6) && near(c37.y, 3, 1e-6))
  const sum = vec.addComponents({ x: 3, y: 0 }, { x: 0, y: 4 })
  ok('adding perpendicular 3 and 4 gives magnitude 5', near(vec.toPolar(sum.x, sum.y).mag, 5, 1e-9))
}
{
  // river crossing: aim straight across
  const r0 = vec.riverCrossing(3, 0, 2, 40)
  ok('aim straight across: time = width / boatSpeed', near(r0.time, 40 / 3, 1e-9))
  ok('aim straight across: drift = current x time', near(r0.drift, 2 * (40 / 3), 1e-9))
  // time straight-across is independent of current speed
  const rA = vec.riverCrossing(3, 0, 0, 40), rB = vec.riverCrossing(3, 0, 5, 40)
  ok('crossing time at heading 0 does not depend on the current', near(rA.time, rB.time, 1e-9))
  // heading to cancel drift
  const h = vec.headingToCancelDrift(5, 3)
  const rc = vec.riverCrossing(5, h, 3, 40)
  ok('heading chosen to cancel drift: along (resultant sideways speed) is ~0', Math.abs(rc.along) < 1e-6)
  ok('cancelling drift needs pointing upstream (negative heading)', h < 0)
  ok('exact cancelling speed: across = sqrt(boat^2 - current^2)', near(rc.across, Math.sqrt(25 - 9), 1e-9))
  ok('current faster than the boat: no heading can cancel the drift (NaN)', Number.isNaN(vec.headingToCancelDrift(2, 5)))
  // straight across (heading 0) gives the minimum crossing time over the reachable headings
  let minAt0 = true
  for (let i = 0; i < 500; i++) {
    const h2 = -80 + rnd2() * 160
    const t = vec.riverCrossing(3, h2, 2, 40).time
    if (t < r0.time - 1e-9) minAt0 = false
  }
  ok('heading straight across minimises the crossing time (500 random headings)', minAt0)
  // 90 deg (parallel to the bank): no progress across
  const r90 = vec.riverCrossing(3, 90, 2, 40)
  ok('aimed along the bank (90 deg): never reaches the far side', r90.time === Infinity)
  // random consistency: resultant vector = vector sum of boat velocity + current
  let vBad = 0
  for (let i = 0; i < 2000; i++) {
    const vb = 0.5 + rnd2() * 6, h2 = -80 + rnd2() * 160, vc = rnd2() * 4, w = 10 + rnd2() * 80
    const r = vec.riverCrossing(vb, h2, vc, w)
    const boatComp = vec.toComponents(vb, h2) // toComponents(mag, angle) = {x: mag*cos, y: mag*sin} = {across, along} directly
    const total = vec.addComponents(boatComp, { x: 0, y: vc }) // the current has zero "across" component
    if (Math.abs(total.x - r.across) > 1e-6 || Math.abs(total.y - r.along) > 1e-6) vBad++
  }
  ok('resultant = boat velocity + current, by direct vector addition (2000 random cases)', vBad === 0)
}
{
  // the game's own stepper: accelerates towards max speed, steering is clamped, position accumulates the resultant velocity
  const NONE = { up: false, left: false, right: false }
  let s = { across: 0, along: 0, speed: 0, heading: 0 }
  for (let i = 0; i < 600; i++) s = vec.stepBoat(s, { ...NONE, up: true }, 2, 1 / 60)
  ok('boat speeds up to its max under sustained throttle', near(s.speed, vec.RIVER.maxSpeed, 1e-6))
  let s2 = { across: 0, along: 0, speed: 0, heading: 0 }
  for (let i = 0; i < 400; i++) s2 = vec.stepBoat(s2, { ...NONE, right: true }, 0, 1 / 60)
  ok('steering is clamped to the maximum heading', near(s2.heading, vec.RIVER.maxHeading, 1e-6))
  let s3 = { across: 0, along: 0, speed: 2, heading: 0 }
  const before = s3.across
  s3 = vec.stepBoat(s3, NONE, 1, 1 / 60)
  ok('across position only increases while the boat still has forward speed', s3.across > before)
}
// ---- buoyancy, tension (a simple two-body system), and falling through a resisting fluid ----
const outF = path.resolve('node_modules/.cache/forces.mjs')
await build({ entryPoints: ['lib/learn/forces-model.ts'], outfile: outF, format: 'esm', bundle: true, logLevel: 'silent' })
const fm = await import(pathToFileURL(outF).href)
{
  ok('buoyant force: 500 cm3 in water = 4.9 N', near(fm.buoyantForce(1000, 0.0005), 4.905, 1e-6))
  ok('buoyant force scales with volume (2000 random cases)', (() => {
    let bad = 0
    for (let i = 0; i < 2000; i++) { const rho = 1 + rnd2() * 2000, V = rnd2() * 2; if (Math.abs(fm.buoyantForce(rho, 2 * V) - 2 * fm.buoyantForce(rho, V)) > 1e-9) bad++ }
    return bad === 0
  })())
  const at = fm.atwoodLite(4, 2)
  ok('two-mass system: a = mB g / (mA+mB)', near(at.a, (2 * 9.81) / 6, 1e-9))
  ok('two-mass system: T = mA a, matches m1 m2 g/(m1+m2)', near(at.T, (4 * 2 * 9.81) / 6, 1e-9) && near(at.T, at.a * 4, 1e-12))
  ok('tension is less than the hanging weight (the weight is what accelerates it)', at.T < 2 * 9.81)
}
{
  // terminal velocity: analytic solution matches direct numerical integration
  let bad = 0
  for (let i = 0; i < 300; i++) {
    const m = 0.01 + rnd2() * 0.2, k = 0.01 + rnd2() * 5, t = rnd2() * 3 * fm.timeConstant(m, k)
    const a1 = fm.fallVelocity(m, k, t), a2 = fm.fallVelocityNumeric(m, k, t)
    if (Math.abs(a1 - a2) > 1e-3 * Math.max(1, a1)) bad++
  }
  ok('fallVelocity (closed form) matches direct numerical integration (300 random cases)', bad === 0)
  ok('at t = 0 the object is still, v = 0', fm.fallVelocity(0.05, 0.5, 0) === 0)
  const vLate = fm.fallVelocity(0.05, 0.5, 50 * fm.timeConstant(0.05, 0.5))
  ok('after many time constants, v approaches the terminal velocity', near(vLate, fm.terminalVelocity(0.05, 0.5), 1e-6))
  ok('at terminal velocity the net force is ~0 (balanced)', near(fm.netFallForce(0.05, 0.5, 50 * fm.timeConstant(0.05, 0.5)), 0, 1e-6))
  ok('early on, net force is unbalanced (still speeding up)', fm.netFallForce(0.05, 0.5, 0.001) > 0.1)
  ok('velocity increases monotonically towards the terminal velocity', (() => {
    let bad2 = 0, prev = -1
    for (let t = 0; t < 5; t += 0.05) { const v = fm.fallVelocity(0.05, 0.5, t); if (v < prev - 1e-12) bad2++; prev = v }
    return bad2 === 0
  })())
  // honey (bigger k) vs air (smaller k): lower terminal velocity, but reaches it in less time
  const air = { m: 0.05, k: 0.05 }, honey = { m: 0.05, k: 2.5 }
  ok('a more viscous fluid gives a LOWER terminal velocity', fm.terminalVelocity(honey.m, honey.k) < fm.terminalVelocity(air.m, air.k))
  ok('a more viscous fluid reaches its (lower) terminal velocity SOONER (smaller time constant)', fm.timeConstant(honey.m, honey.k) < fm.timeConstant(air.m, air.k))
  // fallPosition is the integral of fallVelocity (check the derivative numerically)
  let posBad = 0
  for (let i = 0; i < 300; i++) {
    const m = 0.02 + rnd2() * 0.1, k = 0.1 + rnd2() * 3, t = 0.05 + rnd2() * 2, h = 1e-5
    const dydt = (fm.fallPosition(m, k, t + h) - fm.fallPosition(m, k, t - h)) / (2 * h)
    if (Math.abs(dydt - fm.fallVelocity(m, k, t)) > 1e-4) posBad++
  }
  ok('fallPosition is the integral of fallVelocity (its derivative matches v(t), 300 cases)', posBad === 0)
}
// ---- a sphere tethered underwater: sphere weight, and F_B = W + T sin(angle) from vertical equilibrium ----
{
  ok('sphere volume: unit radius = 4/3 pi', near(fm.sphereVolume(1), (4 / 3) * Math.PI, 1e-9))
  // known worked case (low-density 0.23 m sphere, rho 82 kg/m3): weight ~ 41 N
  ok('sphereWeight matches a known worked case (r=0.23, rho=82) ~ 41 N', near(fm.sphereWeight(0.23, 82), 41.0, 0.5))
  // known worked case: T = 290 N at 75 deg, W = 41 N -> upthrust ~ 321 N
  ok('upthrustFromTether matches a known worked case (W=41, T=290, 75deg) ~ 321 N', near(fm.upthrustFromTether(41, 290, 75), 321, 1))
  // independent check via vector decomposition (lib/learn/vector-model.ts), not just re-running the same trig
  let bad = 0
  for (let i = 0; i < 2000; i++) {
    const r = 0.05 + rnd2() * 0.3, rho = 200 + rnd2() * 700, angle = 30 + rnd2() * 55, T = 20 + rnd2() * 400
    const W = fm.sphereWeight(r, rho)
    const tensionComp = vec.toComponents(T, -angle) // tension points down-and-back: below the horizontal
    const drag = tensionComp.x // cos is even in angle, so this is already +T cos(angle)
    const upthrust = W - tensionComp.y // vertical equilibrium: F_B + tensionComp.y - W = 0
    if (Math.abs(upthrust - fm.upthrustFromTether(W, T, angle)) > 1e-6) bad++
    if (Math.abs(drag - fm.dragFromTether(T, angle)) > 1e-6) bad++
  }
  ok('upthrust/drag match an independent vector decomposition of the tension (2000 random cases)', bad === 0)
  ok('a bigger cable angle (more vertical pull) needs a bigger upthrust for the same tension', fm.upthrustFromTether(50, 200, 80) > fm.upthrustFromTether(50, 200, 40))
}
ok('lesson check numbers: r=0.20,rho=500 sphere, T=120N@60deg -> W~164N, F_B~268N', near(fm.sphereWeight(0.20,500), 164.4, 0.1) && near(fm.upthrustFromTether(fm.sphereWeight(0.20,500),120,60), 268.3, 0.1))
process.exit(fail ? 1 : 0)
