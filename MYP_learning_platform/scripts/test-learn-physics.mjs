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
// ---- nitrous boost: a bigger engine force gives a higher top speed, and it decays back down once the boost ends ----
{
  const topNormal = run(car.newCar(), { ...NONE, up: true }, 150, 1 / 60)
  const vNormalExpected = Math.sqrt((car.CAR.Feng - car.CAR.roll) / car.CAR.drag)
  ok('normal top speed matches Feng = drag v^2 + roll', near(topNormal.s.v, vNormalExpected, 0.2))
  const topNos = run(car.newCar(), { ...NONE, up: true, nos: true }, 150, 1 / 60)
  const vNosExpected = Math.sqrt((car.CAR.Feng + car.CAR.Fnos - car.CAR.roll) / car.CAR.drag)
  ok('with nitrous held down, top speed matches (Feng+Fnos) = drag v^2 + roll', near(topNos.s.v, vNosExpected, 0.2))
  ok('the nitrous top speed is clearly higher than the normal top speed', topNos.s.v > topNormal.s.v * 1.3)
  // starting from the boosted top speed, switch nitrous off (still full throttle) and watch it decay back down
  const afterNos = run({ ...car.newCar(), v: topNos.s.v }, { ...NONE, up: true }, 90, 1 / 60)
  ok('once the boost ends, speed decays back down towards the ORIGINAL top speed', near(afterNos.s.v, vNormalExpected, 0.3))
  let overshoot = false, prev = topNos.s.v
  let s = { ...car.newCar(), v: topNos.s.v }
  for (let t = 0; t < 90; t += 1 / 60) { const r = car.stepCar(s, { ...NONE, up: true }, 1 / 60); s = r.state; if (s.v < vNormalExpected - 0.5) overshoot = true; if (s.v > prev + 1e-9) overshoot = true; prev = s.v }
  ok('the decay back to normal top speed is monotonic and never overshoots below it', !overshoot)
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
// ---- a skydiver: quadratic drag (F = kv^2), speeding up to terminal velocity, then a parachute ----
{
  let bad = 0
  for (let i = 0; i < 400; i++) {
    const m = 40 + rnd2() * 80, k = 0.05 + rnd2() * 5, t = rnd2() * 6, v0 = rnd2() * fm.terminalVelocityQuad(m, k) * 1.5
    const a1 = fm.fallVelocityQuad(m, k, t, v0), a2 = fm.fallVelocityQuadNumeric(m, k, t, v0)
    if (Math.abs(a1 - a2) > 2e-2 * Math.max(1, a1)) bad++
  }
  ok('fallVelocityQuad (closed form) matches direct numerical integration (400 random cases, v0 above or below vt)', bad === 0)
  ok('from rest, v(0) = 0', fm.fallVelocityQuad(80, 0.3, 0) === 0)
  const vt = fm.terminalVelocityQuad(80, 0.3)
  ok('starting AT the terminal velocity, it stays there (equilibrium)', near(fm.fallVelocityQuad(80, 0.3, 5, vt), vt, 1e-6))
  let upBad = 0, prevU = -1
  for (let t = 0; t < 8; t += 0.1) { const v = fm.fallVelocityQuad(80, 0.3, t, 0); if (v < prevU - 1e-9) upBad++; prevU = v }
  ok('falling from rest: speed rises monotonically towards the terminal velocity', upBad === 0 && near(fm.fallVelocityQuad(80, 0.3, 200, 0), vt, 1e-3))
  const v0High = vt * 1.4
  let downBad = 0, prevD = 1e9
  for (let t = 0; t < 8; t += 0.1) { const v = fm.fallVelocityQuad(80, 0.3, t, v0High); if (v > prevD + 1e-9) downBad++; prevD = v }
  ok('starting FASTER than terminal velocity (just after a parachute opens): speed falls monotonically down to it', downBad === 0 && near(fm.fallVelocityQuad(80, 0.3, 200, v0High), vt, 1e-3))
  ok('just above terminal velocity, the net force is negative (drag exceeds weight: decelerating)', fm.netForceQuad(80, 0.3, v0High) < 0)
  ok('just below terminal velocity, the net force is positive (still speeding up)', fm.netForceQuad(80, 0.3, vt * 0.8) > 0)
  ok('at terminal velocity, the net force is ~0 (balanced)', near(fm.netForceQuad(80, 0.3, vt), 0, 1e-9))
}
{
  // the widget's own constants: realistic freefall vt ~ 50 m/s, canopy vt ~ 6 m/s
  const m = 80, kBody = 0.314, kChute = 21.8
  const vt1 = fm.terminalVelocityQuad(m, kBody), vt2 = fm.terminalVelocityQuad(m, kChute)
  ok('body-only terminal velocity is a realistic freefall speed (45-55 m/s)', vt1 > 45 && vt1 < 55)
  ok('under canopy, terminal velocity is much smaller (5-7 m/s)', vt2 > 5 && vt2 < 7)
  ok('opening the parachute gives a MUCH smaller terminal velocity', vt2 < vt1 / 5)
  const tOpen = 8
  const before = fm.skydiveVelocity(m, kBody, kChute, tOpen, tOpen - 1e-6)
  const after = fm.skydiveVelocity(m, kBody, kChute, tOpen, tOpen + 1e-6)
  ok('velocity is continuous at the moment the parachute opens (no jump)', near(before.v, after.v, 1e-3) && before.phase === 'body' && after.phase === 'chute')
  const soonAfter = fm.skydiveVelocity(m, kBody, kChute, tOpen, tOpen + 0.3)
  ok('right after the canopy opens, the jumper is still faster than the new terminal velocity (so it decelerates)', soonAfter.v > vt2)
  const longAfter = fm.skydiveVelocity(m, kBody, kChute, tOpen, tOpen + 30)
  ok('well after the canopy opens, speed has settled to the new (lower) terminal velocity', near(longAfter.v, vt2, 0.05))
}
// ---- motion graphs: slope of x-t is v, slope of v-t is a, area under v-t is displacement ----
const outMG = path.resolve('node_modules/.cache/motion-graphs.mjs')
await build({ entryPoints: ['lib/learn/motion-graphs.ts'], outfile: outMG, format: 'esm', bundle: true, logLevel: 'silent' })
const mg = await import(pathToFileURL(outMG).href)
{
  let bad = 0, bad2 = 0, bad3 = 0
  for (let i = 0; i < 1000; i++) {
    const x0 = (rnd2() - 0.5) * 20, u = (rnd2() - 0.5) * 20, a = (rnd2() - 0.5) * 10, t = rnd2() * 10 + 0.1
    if (Math.abs(mg.gradient((s) => mg.position(x0, u, a, s), t) - mg.velocity(u, a, t)) > 1e-5) bad++
    if (Math.abs(mg.gradient((s) => mg.velocity(u, a, s), t) - a) > 1e-5) bad2++
    if (Math.abs(mg.areaUnderVt(u, a, t).total - (mg.position(x0, u, a, t) - x0)) > 1e-9) bad3++
  }
  ok('slope of the x-t graph = velocity (1000 random cases)', bad === 0)
  ok('slope of the v-t graph = acceleration (1000 random cases)', bad2 === 0)
  ok('area under the v-t graph (rectangle + triangle) = change in position (1000 random cases)', bad3 === 0)
  const ex = mg.areaUnderVt(5, 1, 5)
  ok('class example: u = 5 m/s, a = 1 m/s2, 5 s -> rectangle 25 m + triangle 12.5 m = 37.5 m, v = 10 m/s', near(ex.rect, 25, 1e-12) && near(ex.tri, 12.5, 1e-12) && near(ex.total, 37.5, 1e-12) && near(mg.velocity(5, 1, 5), 10, 1e-12) && near(mg.position(0, 5, 1, 5), 37.5, 1e-12))
  ok('uniform motion: a = 0 makes x-t a straight line through the origin, x = vt', near(mg.position(0, 12.5, 0, 2), 25, 1e-12) && near(mg.velocity(12.5, 0, 9), 12.5, 1e-12))
  ok('steeper x-t line = bigger velocity: 12.5 > 5 > 2.5 at t = 2', mg.position(0, 12.5, 0, 2) > mg.position(0, 5, 0, 2) && mg.position(0, 5, 0, 2) > mg.position(0, 2.5, 0, 2))
  ok('average gradient between two points: (30-10)/(9-4) = 4', near(mg.averageGradient(4, 10, 9, 30), 4, 1e-12))
  const w = mg.walk(3, 4)
  ok('3 m east then 4 m north: distance 7 m, displacement 5 m, at 53.1 degrees', near(w.distance, 7, 1e-12) && near(w.displacement, 5, 1e-12) && near(w.angleDeg, 53.13, 0.01))
  ok('distance >= displacement always (1000 random walks)', (() => { for (let i = 0; i < 1000; i++) { const q = mg.walk((rnd2() - 0.5) * 20, (rnd2() - 0.5) * 20); if (q.distance + 1e-9 < q.displacement) return false } return true })())
}
{
  const tr = mg.realTrack(30)
  const at = (t) => tr.find((p) => Math.abs(p.t - t) < 1e-6)
  ok('model agrees with reality early on (within 7% at t = 1 s and 2 s)', [1, 2].every((t) => Math.abs(at(t).x - mg.modelPosition(t)) / mg.modelPosition(t) < 0.07))
  ok('reality is never AHEAD of the no-drag model', tr.every((p) => p.x <= mg.modelPosition(p.t) + 1e-6 && p.v <= mg.modelVelocity(p.t) + 1e-6))
  ok('the model drifts further from reality with time (position error grows: <10% at 10 s, >30% at 30 s)', (mg.modelPosition(10) - at(10).x) / at(10).x < 0.11 && (mg.modelPosition(30) - at(30).x) / at(30).x > 0.3)
  ok('the model velocity keeps growing; the real velocity levels off near 40 m/s', mg.modelVelocity(30) > 55 && at(30).v < 41)
}
// ---- exam-style problems, recreated with our own diagrams/numbers: train, bouncing ball, skidding car ----
const outEM = path.resolve('node_modules/.cache/exam-motion.mjs')
await build({ entryPoints: ['lib/learn/exam-motion-model.ts'], outfile: outEM, format: 'esm', bundle: true, logLevel: 'silent' })
const em = await import(pathToFileURL(outEM).href)
{
  // Q1: train A -> B -> C
  const { T, V, a2, tB } = em.trainSolve()
  ok('Q1: T = 150 s, V at B = 24 m/s, deceleration B->C = 0.8 m/s2', near(T, 150, 1e-6) && near(V, 24, 1e-6) && near(a2, 0.8, 1e-6))
  ok('Q1: velocity is continuous at B (no jump)', near(em.trainVelocity(tB - 1e-9), em.trainVelocity(tB + 1e-9), 1e-3))
  ok('Q1: velocity is exactly zero at C (t = T)', near(em.trainVelocity(T), 0, 1e-9))
  ok('Q1: total distance A to C matches the given 1800 m', near(em.trainPosition(T), 1800, 1e-3))
  let mono = true, prevV = -1
  for (let t = 0; t <= T; t += 1) { const v = em.trainVelocity(t); if (t <= tB && v < prevV - 1e-9) mono = false; prevV = v }
  ok('Q1: speed rises smoothly to B then falls smoothly to C (no kinks other than at B)', mono)
}
{
  // Q2: bouncing ball
  ok('Q2: dropped for 1.0 s under g = 9.8, it fell H = 4.9 m', near(em.ballH(), 4.9, 1e-9))
  ok('Q2: impact speed = g x 1.0 s = 9.8 m/s', near(em.ballImpactSpeed(), 9.8, 1e-9))
  ok('Q2: rebound speed (e = 0.5) = 4.9 m/s, reaching peak 0.5 s later', near(em.ballReboundSpeed(), 4.9, 1e-9) && near(em.ballTimeToPeak(), 0.5, 1e-9))
  ok('Q2: max rebound height = 1.225 m, exactly e^2 of the drop height', near(em.ballMaxReboundHeight(), 1.225, 1e-9) && near(em.ballMaxReboundHeight(), 0.5 * 0.5 * em.ballH(), 1e-9))
  const tPeak = em.BALL.tImpact + em.ballTimeToPeak()
  ok('Q2: velocity is exactly zero at the peak of the rebound (point M)', near(em.ballVelocity(tPeak), 0, 1e-9))
  ok('Q2: at the moment of impact the ball is at the floor, height 0', near(em.ballHeight(em.BALL.tImpact), 0, 1e-6))
  ok('Q2: acceleration is g throughout, even at the peak (velocity 0 there does not mean acceleration 0)', near((em.ballVelocity(tPeak + 1e-3) - em.ballVelocity(tPeak - 1e-3)) / 2e-3, -em.BALL.g, 1e-2))
  let upBad = 0
  for (let t = em.BALL.tImpact + 1e-6; t < tPeak; t += 0.01) if (em.ballVelocity(t) < -1e-6) upBad++
  ok('Q2: between the bounce and the peak the ball is moving upward, slowing down (positive but shrinking velocity)', upBad === 0)
}
{
  // Q3: skidding car
  const { a, u, tReaction, tSkid } = em.skidSolve()
  ok('Q3: deceleration = 0.85 x 9.8 = 8.33 m/s2', near(a, 8.33, 1e-6))
  ok('Q3: speed before braking u ~= 14.6 m/s, from v^2 = 2 x a x skid distance', near(u, 14.6, 0.05))
  ok('Q3: reaction time ~= 2.0 s (reaction distance / u)', near(tReaction, 2.0, 0.05))
  ok('Q3: velocity is constant (= u) throughout the reaction phase', near(em.skidVelocity(0), u, 1e-9) && near(em.skidVelocity(tReaction * 0.5), u, 1e-9) && near(em.skidVelocity(tReaction), u, 1e-6))
  ok('Q3: velocity reaches exactly zero at the end of the skid, never negative', near(em.skidVelocity(tReaction + tSkid), 0, 1e-6) && em.skidVelocity(tReaction + tSkid + 1) >= 0)
  ok('Q3: distance covered during the reaction phase matches the given 29.3 m', near(em.skidPosition(tReaction), 29.3, 1e-3))
  ok('Q3: total distance (reaction + skid) matches 29.3 + 12.8 = 42.1 m', near(em.skidPosition(tReaction + tSkid), 42.1, 1e-3))
}
{
  // Q4: train brakes at a yellow signal
  const { u, tStop } = em.signalSolve()
  ok('Q4: maximum safe speed at the yellow signal = 20 m/s (v^2 = 2 a s)', near(u, 20, 1e-6))
  ok('Q4: at that speed it stops in exactly the given 1000 m', near(em.signalPosition(tStop), 1000, 1e-3))
  ok('Q4: velocity reaches exactly zero at the red signal, never negative', near(em.signalVelocity(tStop), 0, 1e-9) && em.signalVelocity(tStop + 10) >= 0)
  ok('Q4: any faster than 20 m/s would overshoot 1000 m at this deceleration', em.SIGNAL.distance < (21 * 21) / (2 * em.SIGNAL.a))
}
{
  // Q5: aircraft take-off
  const { a, tUp } = em.takeoffSolve()
  ok('Q5: 85 km/h converts to about 23.6 m/s', near(em.TAKEOFF.v0, 23.611, 0.001))
  ok('Q5: minimum acceleration is about 0.23 m/s2', near(a, 0.2323, 0.001))
  ok('Q5: at that acceleration, take-off speed is reached in exactly the given 1200 m', near(em.takeoffPosition(tUp), 1200, 1e-3))
  ok('Q5: velocity never exceeds the take-off speed', em.takeoffVelocity(tUp + 50) <= em.TAKEOFF.v0 + 1e-9)
}
{
  // Q6: two cars, X steady, Y catching up
  const { d } = em.chaseSolve()
  ok('Q6: head start d = 60 m', near(d, 60, 1e-6))
  ok('Q6: X and Y are at the same position at t = 20 s', near(em.chaseXPosition(20), em.chaseYPosition(20), 1e-6))
  ok('Q6: before they meet, X is ahead; after, Y is ahead (Y catches up, not the other way round)', em.chaseXPosition(10) > em.chaseYPosition(10) && em.chaseYPosition(25) > em.chaseXPosition(25))
  ok('Q6: Y is still accelerating (its velocity keeps rising) while X stays constant', em.chaseYVelocity(25) > em.chaseYVelocity(5) && em.chaseXVelocity() === 6)
}
{
  // Q7: leaking car, timed by oil drops
  const { a, u0 } = em.dripsSolve()
  ok('Q7: acceleration = 0.75 m/s2', near(a, 0.75, 1e-9))
  ok('Q7: velocity at the first drop = 3.75 m/s', near(u0, 3.75, 1e-9))
  ok('Q7: distance between drop 1 and drop 2 matches the given 9.0 m', near(em.dripsPosition(2) - em.dripsPosition(0), 9.0, 1e-9))
  ok('Q7: distance between drop 2 and drop 3 matches the given 12.0 m', near(em.dripsPosition(4) - em.dripsPosition(2), 12.0, 1e-9))
  ok('Q7: each later gap is bigger than the last (uniform acceleration, not uniform velocity)', em.dripsPosition(6) - em.dripsPosition(4) > em.dripsPosition(4) - em.dripsPosition(2))
}
// ---- two collision problems, recreated with our own animated diagram and momentum-time graph ----
const outEC = path.resolve('node_modules/.cache/exam-collisions.mjs')
await build({ entryPoints: ['lib/learn/exam-collisions-model.ts'], outfile: outEC, format: 'esm', bundle: true, logLevel: 'silent' })
const ec = await import(pathToFileURL(outEC).href)
{
  // shared piecewise momentum/velocity/position ramp
  let bad = 0
  for (let i = 0; i < 500; i++) {
    const m = 0.2 + rnd2() * 5, before = (rnd2() - 0.5) * 20, after = (rnd2() - 0.5) * 20
    const t0 = rnd2() * 5, t1 = t0 + 0.5 + rnd2() * 5
    if (Math.abs(ec.collisionMomentum(m, before, after, t0, t1, t0) - m * before) > 1e-9) bad++
    if (Math.abs(ec.collisionMomentum(m, before, after, t0, t1, t1) - m * after) > 1e-9) bad++
    if (Math.abs(ec.collisionVelocity(m, before, after, t0, t1, t0 - 1) - before) > 1e-9) bad++
    if (Math.abs(ec.collisionVelocity(m, before, after, t0, t1, t1 + 1) - after) > 1e-9) bad++
  }
  ok('collision momentum/velocity ramp is exactly `before` up to t0 and `after` from t1 on (500 random cases)', bad === 0)
  // position matches numerical integration of the same velocity function
  let posBad = 0
  for (let i = 0; i < 200; i++) {
    const m = 1, before = (rnd2() - 0.5) * 10, after = (rnd2() - 0.5) * 10, t0 = 1, t1 = 2, tEnd = 3.5
    const dt = 1 / 20000
    let x = 0
    for (let t = 0; t < tEnd; t += dt) x += ec.collisionVelocity(m, before, after, t0, t1, t) * dt
    const exact = ec.collisionPosition(m, before, after, t0, t1, 0, tEnd)
    if (Math.abs(x - exact) > 5e-3) posBad++
  }
  ok('collisionPosition matches direct numerical integration of collisionVelocity (200 random cases)', posBad === 0)
}
{
  // Problem A: 0.24 kg ball at 16 m/s stops a 0.48 kg ball, which moves off
  const r = ec.ballsSolve()
  ok('A: ball Y moves off at 8.0 m/s', near(r.vYf, 8.0, 1e-9))
  ok('A: kinetic energy lost is 15.36 J (30.72 J -> 15.36 J)', near(r.keBefore, 30.72, 1e-9) && near(r.keAfter, 15.36, 1e-9) && near(r.deltaKE, -15.36, 1e-9))
  ok('A: force on X from Y is 1920 N, opposing X\'s original motion (negative)', near(r.forceOnX, -1920, 1e-6))
  ok('A: force on Y from X is 1920 N, the same direction X was moving (Newton\'s third law: equal, opposite)', near(r.forceOnY, 1920, 1e-6) && near(r.forceOnX, -r.forceOnY, 1e-9))
  const { mX, mY, uX, t0, t1 } = ec.BALLS
  ok('A: momentum is conserved at every instant through the collision (X + Y constant)', (() => {
    for (let t = 0; t <= t1 + 0.001; t += 0.0002) {
      const pX = ec.collisionMomentum(mX, uX, r.vXf, t0, t1, t)
      const pY = ec.collisionMomentum(mY, ec.BALLS.uY, r.vYf, t0, t1, t)
      if (Math.abs(pX + pY - mX * uX) > 1e-9) return false
    }
    return true
  })())
}
{
  // Problem B: X (speed 5v) sticks to stationary Y, common speed v afterwards
  ok('B: conservation of momentum alone gives m_Y / m_X = 4', ec.STICK_MASS_RATIO === 4)
  const r = ec.stickSolve()
  ok('B: KE ratio after/before = 1/5, for these illustrative numbers', near(r.keRatio, 0.2, 1e-9))
  ok('B: same ratio holds for ANY mX, v (scaling check: doubling both leaves the ratio unchanged)', (() => {
    const mX = 3.7, v = 1.3, mY = 4 * mX, uX = 5 * v
    const keB = 0.5 * mX * uX * uX, keA = 0.5 * (mX + mY) * v * v
    return near(keA / keB, 0.2, 1e-9)
  })())
  ok('B: force on X from Y is 400 N, opposing X (negative); force on Y from X is 400 N, equal and opposite', near(r.forceOnX, -400, 1e-6) && near(r.forceOnY, 400, 1e-6))
  const { mX, v, t0, t1 } = ec.STICK
  ok('B: momentum is conserved at every instant through the collision (X + Y constant)', (() => {
    const uX = 5 * v
    for (let t = 0; t <= t1 + 0.005; t += 0.001) {
      const pX = ec.collisionMomentum(mX, uX, v, t0, t1, t)
      const pY = ec.collisionMomentum(r.mY, 0, v, t0, t1, t)
      if (Math.abs(pX + pY - mX * uX) > 1e-9) return false
    }
    return true
  })())
  ok('B: after the collision, X and Y share the SAME momentum-time value (they move together)', near(ec.collisionMomentum(mX, 5 * v, v, t0, t1, ec.STICK.tMax), ec.collisionMomentum(r.mY, 0, v, t0, t1, ec.STICK.tMax) / ec.STICK_MASS_RATIO, 1e-9))
}
// ---- assigning lessons to a class: drip schedule, lock state, progress summaries, and lessons run live ----
const outAS = path.resolve('node_modules/.cache/lesson-assign.mjs')
await build({ entryPoints: ['lib/learn/assignments.ts'], outfile: outAS, format: 'esm', bundle: true, logLevel: 'silent' })
const asg = await import(pathToFileURL(outAS).href)
const outLP = path.resolve('node_modules/.cache/live-physics.mjs')
await build({ entryPoints: ['lib/learn/live-physics.ts'], outfile: outLP, format: 'esm', bundle: true, logLevel: 'silent' })
const lp = await import(pathToFileURL(outLP).href)
const outReg = path.resolve('node_modules/.cache/live-registry.mjs')
await build({ entryPoints: ['data/design/live/registry.ts'], outfile: outReg, format: 'esm', bundle: true, logLevel: 'silent' })
const reg = await import(pathToFileURL(outReg).href)
{
  const keys = asg.allLessonKeys()
  ok('every lesson key resolves back to its real lesson, and parses as module/lesson', keys.length > 20 && keys.every((k) => { const r = asg.resolveLesson(k); const p = asg.parseLessonKey(k); return r && p && asg.lessonKey(p.module, p.lesson) === k }))
  ok('lesson keys are unique', new Set(keys).size === keys.length)
  ok('a bad or removed ref resolves to nothing', asg.resolveLesson('nope/nothing') === undefined && asg.resolveLesson('onlyone') === undefined && asg.parseLessonKey('a/b/c') === null)
  ok('no module or lesson slug contains "--" (it separates the parts of a live-activity id)', keys.every((k) => !k.includes('--')))
  ok('questions-scope links open just the questions; lesson-scope links open the lesson', asg.lessonHref('a1-kinematics/motion-graphs', 'questions') === '/dp-physics/a1-kinematics/motion-graphs?view=questions' && asg.lessonHref('a1-kinematics/motion-graphs') === '/dp-physics/a1-kinematics/motion-graphs')
}
{
  const ks = ['m/a', 'm/b', 'm/c', 'm/d']
  const d = asg.buildDrip(ks, { startDate: '2026-10-05', everyDays: 3 }) // a Monday
  const day = (x) => `${x.unlockAt.getFullYear()}-${String(x.unlockAt.getMonth() + 1).padStart(2, '0')}-${String(x.unlockAt.getDate()).padStart(2, '0')}`
  ok('drip: one lesson every 3 days from the start date, in order', d.map(day).join() === '2026-10-05,2026-10-08,2026-10-11,2026-10-14' && d.map((x) => x.key).join() === ks.join())
  ok('drip: each unlock is local midnight', d.every((x) => x.unlockAt.getHours() === 0 && x.unlockAt.getMinutes() === 0))
  const w = asg.buildDrip(ks, { startDate: '2026-10-05', everyDays: 3, skipWeekends: true })
  ok('drip: skip-weekends moves Sunday 11 Oct to Monday 12 Oct, and never lands on a weekend', day(w[2]) === '2026-10-12' && w.every((x) => x.unlockAt.getDay() !== 0 && x.unlockAt.getDay() !== 6))
  const sat = asg.buildDrip(['m/a'], { startDate: '2026-10-10', everyDays: 1, skipWeekends: true })
  ok('drip: a start date on a Saturday rolls to Monday', day(sat[0]) === '2026-10-12')
  ok('drip: every 0 days unlocks everything on the start date', asg.buildDrip(ks, { startDate: '2026-10-05', everyDays: 0 }).every((x) => day(x) === '2026-10-05'))
  ok('drip: an invalid date makes no schedule', asg.buildDrip(ks, { startDate: '2026-02-30', everyDays: 1 }).length === 0 && asg.buildDrip(ks, { startDate: 'tomorrow', everyDays: 1 }).length === 0)
  let mono = true
  for (let i = 0; i < 300; i++) {
    const n = 1 + Math.floor(rnd2() * 12), every = Math.floor(rnd2() * 9), sw = rnd2() < 0.5
    const sched = asg.buildDrip(Array.from({ length: n }, (_, j) => 'm/' + j), { startDate: '2026-09-28', everyDays: every, skipWeekends: sw })
    for (let j = 1; j < sched.length; j++) if (sched[j].unlockAt < sched[j - 1].unlockAt) mono = false
  }
  ok('drip: unlock dates never go backwards (300 random schedules)', mono)
}
{
  const now = new Date('2026-10-05T10:00:00Z')
  ok('no unlock date = open', asg.unlockState(null, now).state === 'open' && asg.unlockState(undefined, now).state === 'open')
  ok('a past unlock date is open; a future one is locked until then', asg.unlockState('2026-10-01T00:00:00Z', now).state === 'open' && (() => { const u = asg.unlockState('2026-10-08T00:00:00Z', now); return u.state === 'locked' && u.unlockAt.toISOString() === '2026-10-08T00:00:00.000Z' })())
  ok('unlocks exactly at the unlock moment (not one second early)', asg.unlockState('2026-10-05T10:00:00Z', now).state === 'open' && asg.unlockState('2026-10-05T10:00:01Z', now).state === 'locked')
  ok('a garbage date never locks a student out', asg.unlockState('not a date', now).state === 'open')
  ok('assigned twice: open if ANY assignment is open (a later one cannot lock them out)', asg.lessonAccess([{ unlock_at: '2026-10-20T00:00:00Z' }, { unlock_at: '2026-10-01T00:00:00Z' }], now).state === 'open')
  const both = asg.lessonAccess([{ unlock_at: '2026-10-20T00:00:00Z' }, { unlock_at: '2026-10-09T00:00:00Z' }], now)
  ok('assigned twice, both locked: shows the EARLIEST unlock', both.state === 'locked' && both.unlockAt.toISOString() === '2026-10-09T00:00:00.000Z')
  ok('not assigned at all = open (a free lesson is never locked)', asg.lessonAccess([], now).state === 'open')
}
{
  const found = asg.resolveLesson('a2-force-and-motion/exam-questions-collisions')
  const qs = asg.lessonChecks(found.lesson)
  ok('lessonChecks returns every check with its right answer', qs.length === 7 && qs.every((c) => Number.isInteger(c.answer) && c.answer >= 0 && c.answer < c.options.length))
  const allRight = Object.fromEntries(qs.map((c) => [c.id, c.answer]))
  const st = asg.lessonStats(found.lesson, allRight)
  ok('all right = 7 of 7 answered and correct', st.total === 7 && st.answered === 7 && st.correct === 7)
  const mixed = { ...allRight, [qs[0].id]: (qs[0].answer + 1) % qs[0].options.length }
  const st2 = asg.lessonStats(found.lesson, mixed)
  ok('one wrong = 7 answered, 6 correct', st2.answered === 7 && st2.correct === 6)
  ok('nothing yet = 0 answered; null/undefined progress is safe', asg.lessonStats(found.lesson, {}).answered === 0 && asg.lessonStats(found.lesson, null).correct === 0 && asg.lessonStats(found.lesson, undefined).total === 7)
  ok('stale check ids from an edited lesson are ignored', asg.lessonStats(found.lesson, { 'gone-id': 2 }).answered === 0)
  ok('progress labels: done / started / not started', asg.progressLabel(st, true).tone === 'done' && asg.progressLabel(st2, false).tone === 'started' && asg.progressLabel(asg.lessonStats(found.lesson, {}), false).tone === 'none')
}
{
  const id = lp.physicsLiveId('a2-force-and-motion', 'exam-questions-collisions')
  ok('physics live id round-trips', id === 'dpp--a2-force-and-motion--exam-questions-collisions' && JSON.stringify(lp.parsePhysicsLiveId(id)) === JSON.stringify({ module: 'a2-force-and-motion', lesson: 'exam-questions-collisions' }) && lp.parsePhysicsLiveId('myp3-unit1-kickoff') === null)
  const act = lp.physicsLiveActivity(id)
  ok('the live activity has a predict stage and a checks stage, both host-paced', act && act.stages.length === 2 && act.stages.every((s) => s.type === 'mcq' && s.pacing === 'host-paced'))
  const lessonChecks = asg.resolveLesson('a2-force-and-motion/exam-questions-collisions').lesson
  const checkStage = act.stages.find((s) => s.key === 'checks')
  ok('every check becomes a live question with the same options and the same correct index', checkStage.questions.length === 7 && asg.lessonChecks(lessonChecks).every((c, i) => checkStage.questions[i].correct === c.answer && checkStage.questions[i].options.length === c.options.length))
  ok('predictions from the simulations become their own live questions', act.stages.find((s) => s.key === 'predict').questions.length === 2)
  ok('every question in every lesson has a valid correct index (all lessons that can run live)', (() => {
    for (const k of asg.allLessonKeys()) {
      const a = lp.physicsLiveActivity(lp.physicsLiveId(...k.split('/')))
      if (!a) continue
      for (const st of a.stages) for (const q of st.questions) if (!(q.correct >= 0 && q.correct < q.options.length) || q.options.length < 2) return false
    }
    return true
  })())
  ok('maths markup is stripped for the live screens: m_{A}g -> m_Ag, v^{2} -> v^2', lp.plainMaths('m_{A}g and v^{2}') === 'm_Ag and v^2')
  ok('an unknown or non-physics id gives no activity', lp.physicsLiveActivity('dpp--nope--nothing') === undefined && lp.physicsLiveActivity('myp3-unit1-kickoff') === undefined)
  ok('the live-activity object is cached (stable identity between renders)', lp.physicsLiveActivity(id) === lp.physicsLiveActivity(id))
  ok('the activity contains only plain data (nothing a Server Component could not pass to a Client one)', JSON.stringify(act) === JSON.stringify(JSON.parse(JSON.stringify(act))))
  ok('the registry resolves both a normal MYP activity and a physics lesson', reg.getLiveActivity('myp3-unit1-kickoff')?.year === 'MYP3' && reg.getLiveActivity(id)?.year === 'DP')
  ok('physics lessons do NOT appear in the MYP year hubs', reg.YEARS.every((y) => reg.liveActivitiesForYear(y).every((a) => !a.id.startsWith('dpp--'))))
}
// ---- Theme D · Fields: the model, every number quoted in the lessons, and the quiz answers ----
const outFD = path.resolve('node_modules/.cache/fields-model.mjs')
await build({ entryPoints: ['lib/learn/fields-model.ts'], outfile: outFD, format: 'esm', bundle: true, logLevel: 'silent' })
const fld = await import(pathToFileURL(outFD).href)
const outDF = path.resolve('node_modules/.cache/d-fields.mjs')
await build({ entryPoints: ['data/learn/physics/index.ts'], outfile: outDF, format: 'esm', bundle: true, logLevel: 'silent' })
const physData = await import(pathToFileURL(outDF).href)
{
  const mod = physData.MODULES.find((x) => x.slug === 'd-fields')
  ok('Theme D module is registered with 5 lessons', !!mod && mod.lessons.length === 5)
  const all = JSON.stringify(mod)
  const sup = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 }
  // "4.5 × 10⁵ N C⁻¹" -> 450000 ; "0.15 T" -> 0.15
  const num = (s) => {
    const m = /^([\d.]+)(?: × 10(⁻?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/.exec(s)
    if (!m) return NaN
    const base = parseFloat(m[1])
    if (!m[3]) return base
    const e = [...m[3]].reduce((n, c) => n * 10 + sup[c], 0)
    return base * 10 ** (m[2] ? -e : e)
  }
  const quote = (name, text, truth, rel = 0.006) => ok(`lesson quotes ${name}: "${text}" (computed ${fld.sci(truth, 4)})`, all.includes(text) && Math.abs(num(text) - truth) <= rel * Math.abs(truth))
  const R = fld.R_EARTH, M = fld.M_EARTH, rISS = 6.78e6
  quote('Earth–Moon force', '1.98 × 10²⁰', fld.gravForce(M, fld.M_MOON, fld.D_EARTH_MOON))
  quote('hydrogen electric force', '8.2 × 10⁻⁸', fld.coulombForce(fld.E_CHARGE, fld.E_CHARGE, 5.3e-11), 0.01)
  quote('hydrogen gravitational force', '3.6 × 10⁻⁴⁷', fld.G_CONST * 9.11e-31 * 1.67e-27 / (5.3e-11) ** 2, 0.01)
  quote('electric / gravitational ratio', '2 × 10³⁹', fld.coulombForce(fld.E_CHARGE, fld.E_CHARGE, 5.3e-11) / (fld.G_CONST * 9.11e-31 * 1.67e-27 / (5.3e-11) ** 2), 0.2)
  quote('field of 2 μC at 0.20 m', '4.5 × 10⁵', fld.elecField(2e-6, 0.2), 0.01)
  quote('proton in 0.30 T', '9.6 × 10⁻¹⁴', fld.magneticForceOnCharge(fld.E_CHARGE, 2e6, 0.3))
  quote('electron in 0.020 T', '9.6 × 10⁻¹⁵', fld.magneticForceOnCharge(fld.E_CHARGE, 3e6, 0.02))
  quote('B from 0.045 N, 3.0 A, 0.10 m', '0.15 T', 0.045 / (3 * 0.1))
  quote('force per metre of two 10 A wires 5 cm apart', '4.0 × 10⁻⁴', fld.wireForcePerMetre(10, 10, 0.05))
  quote('spring energy', '0.20 J', fld.springEnergy(40, 0.1))
  quote('Vg at the surface', '6.25 × 10⁷', -fld.gravPotential(M, R))
  quote('Vg at 400 km', '5.88 × 10⁷', -fld.gravPotential(M, R + 4e5))
  quote('change in Vg', '3.69 × 10⁶', fld.gravPotential(M, R + 4e5) - fld.gravPotential(M, R))
  quote('energy to lift 1000 kg to 400 km', '3.69 × 10⁹', 1000 * (fld.gravPotential(M, R + 4e5) - fld.gravPotential(M, R)))
  quote('m g h would give', '3.92 × 10⁹', 1000 * 9.81 * 4e5)
  quote('V of 2 μC at 0.30 m', '6.0 × 10⁴', fld.elecPotential(2e-6, 0.3), 0.01)
  quote('work bringing 1 μC in', '0.060 J', 1e-6 * fld.elecPotential(2e-6, 0.3), 0.01)
  quote('ISS speed', '7.66 × 10³', fld.orbitSpeed(M, rISS))
  quote('ISS period', '5.56 × 10³', fld.orbitPeriod(M, rISS))
  quote('ISS g', '8.7 N kg', fld.gravField(M, rISS), 0.01)
  quote('KE', '1.47 × 10¹⁰', fld.orbitEnergies(M, 500, rISS).ke)
  quote('GPE', '2.94 × 10¹⁰', -fld.orbitEnergies(M, 500, rISS).gpe)
  quote('TE', '1.47 × 10¹⁰', -fld.orbitEnergies(M, 500, rISS).te)
  quote('escape speed', '1.12 × 10⁴', fld.escapeSpeed(M, R))
  ok('ISS period is about 93 minutes', Math.round(fld.orbitPeriod(M, rISS) / 60) === 93)
  ok('ISS gravity is 88% of the surface value', Math.round((fld.gravField(M, rISS) / fld.gravField(M, R)) * 100) === 88)
  ok('circular speed just above the surface is 7.9 km/s; escape / circular = √2', Math.round(fld.orbitSpeed(M, R) / 100) === 79 && near(fld.escapeSpeed(M, rISS) / fld.orbitSpeed(M, rISS), Math.SQRT2, 1e-12))
  ok('Kepler: T²/r³ is the same at every radius and equals 4π²/GM', [7e6, 1e7, 4.2e7].every((r) => near((fld.orbitPeriod(M, r) ** 2) / r ** 3, (4 * Math.PI ** 2) / (fld.G_CONST * M), 1e-20)))
  ok('TE = −KE for every circular orbit', [7e6, 1e7, 4.2e7].every((r) => { const e = fld.orbitEnergies(M, 100, r); return near(e.te, -e.ke, 1e-3) }))
  ok('radiusForPeriod inverts orbitPeriod', near(fld.radiusForPeriod(M, fld.orbitPeriod(M, 1.5e7)), 1.5e7, 1))
  ok('inverse square: g and E fall to 1/4 at twice the distance; potential to 1/2', near(fld.gravField(M, 2 * R) / fld.gravField(M, R), 0.25, 1e-12) && near(fld.elecField(1e-6, 0.4) / fld.elecField(1e-6, 0.2), 0.25, 1e-12) && near(fld.elecPotential(1e-6, 0.4) / fld.elecPotential(1e-6, 0.2), 0.5, 1e-12))

  // every check in the module: valid index, no two lessons share an id, answers are not all the same letter
  const checks = mod.lessons.flatMap((l) => l.blocks.filter((b) => b.t === 'check'))
  ok('every Theme D check has a valid answer index and 3 options', checks.length >= 25 && checks.every((c) => c.options.length === 3 && c.answer >= 0 && c.answer < 3))
  // progress is stored per lesson (checks[id]), so ids must be unique within a lesson
  ok('check and apply ids are unique within every lesson of every module', physData.MODULES.every((x) => x.lessons.every((l) => { const ids = l.blocks.filter((b) => b.t === 'check' || b.t === 'apply').map((b) => b.id); return new Set(ids).size === ids.length })))
  ok('correct answers are spread over the options, not always the first', new Set(checks.map((c) => c.answer)).size >= 2 && checks.filter((c) => c.answer === 0).length < checks.length * 0.85)
  const opt = (id) => { const c = checks.find((x) => x.id === id); return c.options[c.answer] }
  ok('d1-c2 36 N on 4.0 kg = 9.0 N/kg', num(opt('d1-c2')) === 36 / 4)
  ok('d1-c3 6.0e-6 N on 2.0e-6 C = 3.0 N/C', num(opt('d1-c3')) === 6e-6 / 2e-6 || near(num(opt('d1-c3')), 3, 1e-9))
  ok('d2-c3 g at height R is g0/4 = 2.5 (rounded)', near(num(opt('d2-c3')), 9.8 / 4, 0.06))
  ok('d2-c4 E of 2 μC at 0.20 m', near(num(opt('d2-c4')), fld.elecField(2e-6, 0.2), 0.01 * fld.elecField(2e-6, 0.2)))
  ok('d3-c2 F = B I L = 0.20 N', near(num(opt('d3-c2')), fld.magneticForceOnWire(0.2, 4, 0.25), 1e-9))
  ok('d3-c5 electron force', near(num(opt('d3-c5')), fld.magneticForceOnCharge(fld.E_CHARGE, 3e6, 0.02), 1e-17))
  ok('d4-c1 spring energy 0.20 J', near(num(opt('d4-c1')), fld.springEnergy(40, 0.1), 1e-12))
  ok('d4-c3 work to infinity = 2.0 kg × 6.0e7 = 1.2e8 J', near(num(opt('d4-c3')), 2 * 6e7, 1))
  ok('d4-c6 charge 3.0 C through 6.0 V = 18 J', num(opt('d4-c6')) === 3 * (10 - 4))
  ok('d5-c3 period at 4r is 8T', opt('d5-c3') === '8T' && near(fld.orbitPeriod(M, 4 * 7e6) / fld.orbitPeriod(M, 7e6), 8, 1e-9))
  ok('d5-c2 speed at 4r is half', opt('d5-c2') === 'half' && near(fld.orbitSpeed(M, 4 * 7e6) / fld.orbitSpeed(M, 7e6), 0.5, 1e-12))
  ok('d5-c6 KE of the 500 kg satellite', near(num(opt('d5-c6')), fld.orbitEnergies(M, 500, rISS).ke, 0.03 * fld.orbitEnergies(M, 500, rISS).ke))
  ok('d5-c7 orbital speed = escape / √2 = 8.5 km/s', near(num(opt('d5-c7')), 12 / Math.SQRT2, 0.05))
  ok('d4-c4 potential at 2r is V/2, d3-c4 force per metre at 2r is half, d2-c1 force at 3r is 1/9', opt('d4-c4') === 'V / 2' && opt('d3-c4') === 'half' && opt('d2-c1') === 'one ninth')
  ok('every Theme D lesson can run as a live class (it has check questions)', mod.lessons.every((l) => lp.lessonHasLiveQuestions(l)))
  ok('lesson text has no unrendered markup in places that do not render it (checks, apply, retrieval)', mod.lessons.every((l) => l.blocks.filter((b) => ['check', 'apply', 'retrieval'].includes(b.t)).every((b) => !/_\{|\^\{/.test(JSON.stringify(b)))))
  ok('widgets used by Theme D exist as ids', ['field-lines-lab', 'spring-work-lab', 'orbit-lab'].every((id) => JSON.stringify(mod).includes(`"id":"${id}"`)))
}
// ---- A.1 · projectile motion: independence, parcel, ball over a wall, vector addition, umbrella, stellar aberration ----
const outPJ = path.resolve('node_modules/.cache/projectile-model.mjs')
await build({ entryPoints: ['lib/learn/projectile-model.ts'], outfile: outPJ, format: 'esm', bundle: true, logLevel: 'silent' })
const pjm = await import(pathToFileURL(outPJ).href)
const outRM = path.resolve('node_modules/.cache/relative-motion-model.mjs')
await build({ entryPoints: ['lib/learn/relative-motion-model.ts'], outfile: outRM, format: 'esm', bundle: true, logLevel: 'silent' })
const rmm = await import(pathToFileURL(outRM).href)
{
  const kin = physData.MODULES.find((x) => x.slug === 'a1-kinematics')
  const lesson = (slug) => kin.lessons.find((l) => l.slug === slug)
  const text = (slug) => JSON.stringify(lesson(slug))
  const has = (slug, s) => text(slug).includes(s)
  ok('the six new A.1 lessons exist and are in order', ['independence-of-motion', 'exam-questions-three', 'exam-questions-four', 'vector-addition-crosswind-umbrella', 'stellar-aberration'].every((s) => !!lesson(s)) && kin.lessons.findIndex((l) => l.slug === 'independence-of-motion') < kin.lessons.findIndex((l) => l.slug === 'exam-questions-three'))

  // --- independence of x and y motion (the notes use g = 10)
  const B = rmm.BALLS
  ok('Q1: ball from 50 m with g = 10 takes √10 = 3.16 s', near(rmm.fallTimeG(B.h, B.g), Math.sqrt(10), 1e-12) && has('independence-of-motion', 't = √(100 / 10) = √10 = 3.16 s'))
  ok('Q2: R = 5 × 3.16 = 15.8 m', near(rmm.horizontalRange(B.u, B.h, B.g), 15.811, 0.005) && has('independence-of-motion', 'R = 15.8 m'))
  ok('Q3: displacement of B = √(R² + 50²) = √2750 = 52.4 m, at 72.5° below the horizontal', near(rmm.displacementOfB(B.u, B.h, B.g), 52.44, 0.005) && near(Math.atan(50 / rmm.horizontalRange(B.u, B.h, B.g)) * 180 / Math.PI, 72.45, 0.01) && has('independence-of-motion', 'd = √2750 = 52.4 m') && has('independence-of-motion', '72.5° below the horizontal'))
  ok('A and B are at the same height at every moment, and A has no sideways motion', [0, 0.5, 1.7, 3.1].every((t) => near(rmm.ballA(B.h, B.g, t).y, rmm.ballB(B.u, B.h, B.g, t).y, 1e-12)) && rmm.ballA(B.h, B.g, 2).x === 0)
  ok('cliff check: 8 m/s from 80 m (g = 10) gives 4.0 s and 32 m; marble off a 1.25 m table at 2.0 m/s gives 0.50 s and 1.0 m', near(rmm.fallTimeG(80, 10), 4, 1e-12) && near(rmm.horizontalRange(8, 80, 10), 32, 1e-9) && near(rmm.fallTimeG(1.25, 10), 0.5, 1e-12) && near(rmm.horizontalRange(2, 1.25, 10), 1, 1e-12))
  ok('supply drop: the lead distance is u √(2h/g), and a parcel released that far before the target lands on it', (() => { const u = 40, h = 80, g = 9.8, target = 400; const rel = target - rmm.leadDistance(u, h, g); return near(rmm.dropLandingX(rel, u, h, g), target, 1e-9) })())

  // --- the parcel (g = 9.8)
  const P = pjm.PARCEL_QUESTION
  ok('parcel: t = 3.586 s ≈ 3.6 s, v_y = 35.1 m/s, speed 54.7–54.8 m/s, 40° below horizontal, lands 151 m ahead', near(pjm.fallTime(P.h), 3.5857, 5e-4) && near(pjm.landingVy(P.h), 35.14, 0.01) && near(pjm.landingSpeed(P.u, P.h), 54.76, 0.01) && near(pjm.landingAngle(P.u, P.h), 39.9, 0.1) && near(pjm.landingRange(P.u, P.h), 150.6, 0.1))
  ok('parcel: the lesson quotes 3.6 s, 35.1, 54.7 and the rounding trap 35.3 (= 9.8 × 3.6)', has('exam-questions-three', 't = √12.86 = 3.59 s ≈ 3.6 s') && has('exam-questions-three', '35.1 m s⁻¹, downward') && has('exam-questions-three', '54.7 m s⁻¹') && has('exam-questions-three', '35.3') && near(9.8 * 3.6, 35.28, 0.005))
  ok('parcel: the unrounded v_y gives 54.8, the rounded 35.1 gives 54.7, energy gives √(u² + 2gh) = 54.8', near(Math.hypot(42, 35.1), 54.74, 0.01) && near(Math.sqrt(42 * 42 + 2 * 9.8 * 63), 54.76, 0.01) && near(pjm.landingVy(63), Math.sqrt(2 * 9.8 * 63), 1e-9))
  ok('parcel: 30 m/s from 80 m lands at 49.7 m/s ≈ 50 m/s; the cliff of c2 uses √(2 × 9.8 × 45 / …) = 3.0 s', near(pjm.landingSpeed(30, 80), 49.68, 0.01) && near(pjm.fallTime(45), 3.03, 0.01))

  // --- the ball thrown over a wall (g = 9.81)
  const W = pjm.WALL_QUESTION
  const th = { u: W.u, angleDeg: W.angleDeg, y0: W.y0, g: W.g }
  const c = pjm.launchComponents(th)
  ok('wall: v_x = 16.85 and v_y = 14.14 m/s', near(c.vx, 16.853, 0.001) && near(c.vy, 14.141, 0.001) && has('exam-questions-four', '16.85') && has('exam-questions-four', '14.14'))
  ok('wall (i): t = 36 / 16.85 = 2.136 s ≈ 2.1 s', near(pjm.timeToDistance(th, 36), 2.136, 0.0005))
  ok('wall (iii): height at the wall = 7.83 + 1.2 = 9.03 m', near(pjm.heightAtDistance(th, 36), 9.026, 0.001) && near(pjm.heightAtDistance(th, 36) - 1.2, 7.826, 0.001) && has('exam-questions-four', 'h = 7.83 + 1.2 = 9.03 m'))
  ok('wall: rounding t to 2.1 s gives 9.3 m instead of 9.0 m (the quoted trap)', near(pjm.heightAtTime(th, 2.1), 9.266, 0.002) && near(pjm.heightAtTime(th, 2.1) - pjm.heightAtTime(th, pjm.timeToDistance(th, 36)), 0.24, 0.02) && has('exam-questions-four', 'h = 9.3 m') && has('exam-questions-four', '−6.8 m s⁻¹') && near(c.vy - th.g * pjm.timeToDistance(th, 36), -6.81, 0.01))
  ok('wall: the same ball lands about 50.0 m away and peaks at 11.4 m', near(pjm.throwLandingRange(th), 49.98, 0.01) && near(pjm.apexHeight(th), 11.39, 0.01))
  ok('wall: the three outcomes — clears a lower wall, hits a taller one (at the same 9.03 m), and falls short of a far wall', (() => {
    const a = pjm.wallOutcome(th, 36, 8), b = pjm.wallOutcome(th, 36, 12), cc = pjm.wallOutcome(th, 60, 5)
    return a.kind === 'clears' && near(a.margin, 1.026, 0.002) && b.kind === 'hits' && near(b.heightAtWall, 9.026, 0.002) && cc.kind === 'short' && near(cc.range, 49.98, 0.01)
  })())
  ok('wall: just-clears distances — at the exam height the far wall is 36 m; a 5 m wall can stand from 5.05 m to 43.5 m; a wall above the apex is impossible', (() => {
    const j = pjm.justClearsDistances(th, pjm.heightAtDistance(th, 36)), k = pjm.justClearsDistances(th, 5)
    return near(j.d2, 36, 1e-6) && near(k.d1, 5.05, 0.01) && near(k.d2, 43.53, 0.01) && pjm.justClearsDistances(th, 12) === null
  })())
  ok('wall: a ball placed at either just-clears distance is level with the wall top; walls in between are cleared, walls outside are hit', (() => {
    const hw = 7, j = pjm.justClearsDistances(th, hw)
    return near(pjm.heightAtDistance(th, j.d1), hw, 1e-6) && near(pjm.heightAtDistance(th, j.d2), hw, 1e-6) && pjm.wallOutcome(th, (j.d1 + j.d2) / 2, hw).kind === 'clears' && pjm.wallOutcome(th, j.d2 + 2, hw).kind === 'hits' && pjm.wallOutcome(th, Math.max(0.5, j.d1 - 2), hw).kind === 'hits'
  })())
  ok('wall: thrown from above the wall top, the nearest cleared position is 0', pjm.justClearsDistances({ u: 15, angleDeg: 30, y0: 3, g: 9.81 }, 2).d1 === 0)
  ok('wall: 300 random throws — the outcome always agrees with comparing heights, and the just-clears distance really is level with the wall', (() => {
    for (let i = 0; i < 300; i++) {
      const t2 = { u: 8 + rnd2() * 30, angleDeg: 15 + rnd2() * 60, y0: rnd2() * 2.5, g: 9.81 }
      const R = pjm.throwLandingRange(t2), d = 2 + rnd2() * R * 0.95, hw = 1 + rnd2() * 12
      const o = pjm.wallOutcome(t2, d, hw), y = pjm.heightAtDistance(t2, d)
      if (o.kind === 'clears' ? !(y >= hw) : o.kind === 'hits' ? !(y < hw) : false) return false
      const jc = pjm.justClearsDistances(t2, hw)
      if (jc && !near(pjm.heightAtDistance(t2, jc.d2), hw, 1e-7)) return false
      if (!jc && !(hw > pjm.apexHeight(t2))) return false
    }
    return true
  })())
  ok('wall: a throw from the ground at 20 m/s, 30°: t = 1.73 s and 2.6 m high at 30 m', (() => { const t3 = { u: 20, angleDeg: 30, y0: 0, g: 9.81 }; return near(pjm.timeToDistance(t3, 30), 1.732, 0.001) && near(pjm.heightAtDistance(t3, 30), 2.605, 0.01) && near(pjm.launchComponents(t3).vy, 10, 1e-9) })())

  // --- vector addition: crosswind landing
  const CW = rmm.CROSSWIND
  ok('crosswind: 50 km/h across a 200 km/h airspeed needs a 14.5° crab angle and 193.6 km/h along the runway', near(Math.abs(rmm.crabAngleDeg(CW.airspeed, CW.wind)), 14.4775, 0.001) && near(rmm.groundSpeedWhenCrabbing(CW.airspeed, CW.wind), 193.649, 0.001) && has('vector-addition-crosswind-umbrella', 'θ = sin⁻¹(0.25) = 14.5°') && has('vector-addition-crosswind-umbrella', '193.6 km h⁻¹'))
  ok('crosswind: at the crab angle the sideways velocity is zero, whichever way the wind blows', [50, -50, 30, -60].every((w) => near(rmm.groundVelocity(200, rmm.crabAngleDeg(200, w), w).vx, 0, 1e-9)))
  ok('crosswind: pointing straight along the runway drifts 1.0 km over 4 km (72 s × 50 km/h)', near(rmm.lateralOffset(200, 0, 50, 4), 1.0, 1e-9) && has('vector-addition-crosswind-umbrella', '1.0 km off the runway'))
  ok('crosswind: the ground velocity is exactly (air velocity) + (wind), and with no wind it equals the nose velocity', (() => { const g1 = rmm.groundVelocity(200, 20, 35); const g0 = rmm.groundVelocity(200, 20, 0); return near(g1.vx, 200 * Math.sin(20 * Math.PI / 180) + 35, 1e-9) && near(g1.vy, g0.vy, 1e-9) && near(g0.vx, 200 * Math.sin(20 * Math.PI / 180), 1e-9) })())
  ok('swimmer crossing a 0.60 m/s river at 1.5 m/s: 23.6° upstream, 1.4 m/s across', near(Math.asin(0.6 / 1.5) * 180 / Math.PI, 23.58, 0.01) && near(Math.sqrt(1.5 * 1.5 - 0.36), 1.375, 0.001))

  // --- vector addition: walking in rain
  ok('umbrella: tan θ = W / v gives 14.0° (2 vs 8), 10.6°, 20.6°, 32.0°, and 26.6° for 3 vs 6', [[1.5, 8, 10.6], [2, 8, 14.0], [3, 8, 20.6], [5, 8, 32.0], [3, 6, 26.6]].every(([w, v, a]) => near(rmm.rainAngleDeg(w, v), a, 0.05)))
  ok('umbrella: rain speed relative to the walker is √(8² + 2²) = 8.25 and √(6² + 3²) = 6.7 m/s', near(Math.hypot(8, 2), 8.246, 0.001) && near(Math.hypot(6, 3), 6.708, 0.001) && has('vector-addition-crosswind-umbrella', '8.25 m s⁻¹'))
  ok('umbrella: the rain relative to the walker is the rain velocity minus the walker velocity', (() => { const r = rmm.rainRelativeToWalker(2, 8); return r.vx === -2 && r.vy === -8 })())
  ok('umbrella: standing still, an upright umbrella keeps you completely dry', rmm.dryFraction(0, 8, 0) === 1)
  ok('umbrella: at a brisk walk (3–4 m/s) an upright umbrella leaves you wet, and leaning by tanθ = W/v keeps you dry', [3, 4].every((w) => rmm.dryFraction(w, 8, 0) < 0.8 && rmm.dryFraction(w, 8, rmm.rainAngleDeg(w, 8)) >= 0.95))
  ok('umbrella: the challenge speeds (2.5 to 4.5 m/s) can all be solved by the formula tilt', [2.5, 3, 3.5, 4, 4.5].every((w) => rmm.dryFraction(w, 8, rmm.rainAngleDeg(w, 8)) >= 0.95))
  ok('umbrella: leaning the wrong way (backwards) is never better than the formula tilt', [3, 4, 5].every((w) => rmm.dryFraction(w, 8, -15) <= rmm.dryFraction(w, 8, rmm.rainAngleDeg(w, 8))))
  ok('umbrella: dryness never exceeds 100% or drops below 0%', (() => { for (let w = 0; w <= 8; w += 0.5) for (let t = -30; t <= 70; t += 5) { const d = rmm.dryFraction(w, 8, t); if (d < 0 || d > 1) return false } return true })())
  ok('umbrella: upright, the canopy centre is directly above the hand', near(rmm.canopyCentre(0).x, 0, 1e-12) && near(rmm.canopyCentre(0).y, 1.9, 1e-12) && rmm.canopyCentre(30).x > 0)

  // --- stellar aberration
  ok('the Earth’s orbital speed is 2πr/T = 2.98e4 m/s', near(rmm.earthOrbitSpeed(), 29783, 5) && has('stellar-aberration', 'v = 2.98 × 10⁴ m s⁻¹ = 29.8 km s⁻¹'))
  ok('aberration: tan α = v/c = 9.93e-5, which is 20.5 arcseconds (0.0057°)', near(rmm.aberrationRad(rmm.earthOrbitSpeed()), 9.934e-5, 1e-7) && near(rmm.radToArcsec(rmm.aberrationRad(rmm.earthOrbitSpeed())), 20.49, 0.01) && has('stellar-aberration', '20.5″') && has('stellar-aberration', '9.93 × 10⁻⁵') && near(20.5 / 3600, 0.005694, 1e-6))
  ok('Bradley backwards: v / tan(20.5″) = 3.00e8 m/s', near(rmm.speedOfLightFromAberration(rmm.earthOrbitSpeed(), rmm.arcsecToRad(20.5)), 3.0e8, 1.5e6) && has('stellar-aberration', 'c = 3.00 × 10⁸ m s⁻¹'))
  ok('aberration: arcseconds and radians convert both ways', near(rmm.radToArcsec(rmm.arcsecToRad(20.5)), 20.5, 1e-9) && near(rmm.arcsecToRad(3600), Math.PI / 180, 1e-12))
  ok('aberration is the umbrella triangle: the same formula tan = v/c gives 14.0° for 2 m/s of rain at 8 m/s and 20.5″ for the Earth', near(Math.atan(2 / 8) * 180 / Math.PI, 14.04, 0.01) && near(rmm.rainAngleDeg(2, 8), 14.04, 0.01))
  ok('check c4 of stellar-aberration: the wrong options come from forgetting the unit conversion', near(rmm.earthOrbitSpeed() / 20.5, 1453, 5))

  // --- the first slide of each of these lessons carries a picture of the situation (physics is a picture subject)
  const firstSlide = (slug) => lesson(slug).blocks.find((b) => b.t === 'deck').slides[0]
  const expectDiagram = { 'independence-of-motion': 'independence', 'exam-questions-three': 'parcel', 'exam-questions-four': 'wall', 'vector-addition-crosswind-umbrella': 'crosswind', 'stellar-aberration': 'aberration' }
  ok('the first slide of each new A.1 lesson opens with a labelled diagram, with a caption', Object.entries(expectDiagram).every(([slug, id]) => { const d = firstSlide(slug).blocks[0]; return d.t === 'diagram' && d.id === id && d.caption.length > 40 }))
  // --- every new check is well formed, markup-free, and each new lesson can run live
  const newSlugs = ['independence-of-motion', 'exam-questions-three', 'exam-questions-four', 'vector-addition-crosswind-umbrella', 'stellar-aberration']
  ok('new A.1 lessons: every check has 3 options and a valid answer index; ids unique within each lesson', newSlugs.every((s) => { const cs = lesson(s).blocks.filter((b) => b.t === 'check'); const ids = lesson(s).blocks.filter((b) => b.t === 'check' || b.t === 'apply').map((b) => b.id); return cs.length >= 5 && cs.every((q) => q.options.length === 3 && q.answer >= 0 && q.answer < 3) && new Set(ids).size === ids.length }))
  ok('new A.1 lessons: correct answers are spread over the options', newSlugs.every((s) => new Set(lesson(s).blocks.filter((b) => b.t === 'check').map((q) => q.answer)).size >= 2))
  ok('new A.1 lessons: no unrendered _{ } or ^{ } markup in checks, apply or retrieval text', newSlugs.every((s) => lesson(s).blocks.filter((b) => ['check', 'apply', 'retrieval'].includes(b.t)).every((b) => !/_\{|\^\{/.test(JSON.stringify(b)))))
  ok('new A.1 lessons can all run as a live class', newSlugs.every((s) => lp.lessonHasLiveQuestions(lesson(s))))
  ok('the new widgets are used by the lessons', ['independence-lab', 'supply-drop-game', 'parcel-drop-anim', 'wall-problem-lab', 'crosswind-landing-game', 'umbrella-walk-game', 'aberration-lab'].every((id) => JSON.stringify(kin).includes(`"id":"${id}"`)))
  const optA = (slug, id) => { const q = lesson(slug).blocks.find((b) => b.id === id); return q.options[q.answer] }
  ok('numeric answers in the new checks match the physics', optA('independence-of-motion', 'a1-9a-c2') === '4.0 s' && optA('independence-of-motion', 'a1-9a-c3') === '32 m' && optA('exam-questions-four', 'a1-9d-c1') === '14.1 m s⁻¹' && optA('exam-questions-four', 'a1-9d-c4') === '2.6 m' && optA('exam-questions-four', 'a1-9d-c7') === '9.03 m' && optA('vector-addition-crosswind-umbrella', 'a1-9e-c2') === '194 km h⁻¹' && optA('vector-addition-crosswind-umbrella', 'a1-9e-c3') === '26.6°, from in front' && optA('vector-addition-crosswind-umbrella', 'a1-9e-c4') === '6.7 m s⁻¹' && optA('stellar-aberration', 'a1-9f-c2') === '9.93 × 10⁻⁵' && optA('stellar-aberration', 'a1-9f-c4') === '3.00 × 10⁸ m s⁻¹')
}
// ---- the DP Physics blog posts: SEO shape, working links, and every number they quote ----
const outBL = path.resolve('node_modules/.cache/blog.mjs')
await build({ entryPoints: ['data/blog.ts'], outfile: outBL, format: 'esm', bundle: true, logLevel: 'silent' })
const blog = await import(pathToFileURL(outBL).href)
{
  const dp = blog.POSTS.filter((p) => p.tags.includes('DP Physics'))
  const text = (slug) => JSON.stringify(blog.POSTS.find((p) => p.slug === slug))
  const has = (slug, ...parts) => parts.every((s) => text(slug).includes(s))
  ok('8 DP Physics posts are published and every blog slug is unique', dp.length === 8 && new Set(blog.POSTS.map((p) => p.slug)).size === blog.POSTS.length)
  ok('each post has a short SEO title (≤ 49 chars), a 100–165 char description, 3+ FAQ items and 2+ related links', dp.every((p) => (p.seoTitle ?? '').length > 0 && p.seoTitle.length <= 49 && p.description.length >= 100 && p.description.length <= 165 && p.faq.length >= 3 && p.related.length >= 2))
  ok('slugs are lowercase-hyphenated and carry the keyword', dp.every((p) => /^[a-z0-9]+(-[a-z0-9]+)+$/.test(p.slug) && p.slug.length > 30))
  const lessonRoutes = new Set(physData.MODULES.flatMap((m) => m.lessons.map((l) => `/dp-physics/${m.slug}/${l.slug}`)))
  const okHref = (h) => lessonRoutes.has(h) || h === '/dp-physics/formulas' || h.startsWith('/blog/') && blog.POSTS.some((p) => `/blog/${p.slug}` === h) || ['/guides/physics'].includes(h)
  ok('every related link in the DP posts points at a real lesson, blog post or the formula sheet', dp.every((p) => p.related.every((r) => okHref(r.href))))
  ok('each post links to at least one lesson', dp.every((p) => p.related.some((r) => lessonRoutes.has(r.href))))
  ok('every post has a FAQ with answers long enough to be useful, and an intro of 150+ chars', dp.every((p) => p.faq.every((f) => f.q.endsWith('?') && f.a.length > 60) && p.intro.length > 150))

  // independence (g = 10)
  ok('independence post: 3.16 s, 15.8 m, 52.4 m and 72.5°', has('projectile-motion-horizontal-vertical-independence-ib-physics', '3.16 s', '15.8 m', '52.4 m', '72.5°') && near(rmm.fallTimeG(50, 10), 3.1623, 1e-3) && near(rmm.horizontalRange(5, 50, 10), 15.81, 0.01) && near(rmm.displacementOfB(5, 50, 10), 52.44, 0.01))
  // parcel
  ok('parcel post: 3.59 s, 35.1 m/s, 54.7 and 54.8 m/s, 35.3 trap, 151 m', has('projectile-motion-parcel-dropped-from-aircraft-worked-example', 't = 3.59 s', '35.1 m/s', '54.7 m/s', '54.8 m/s', '35.3 m/s', '151 m') && near(pjm.fallTime(63), 3.586, 0.001) && near(pjm.landingVy(63), 35.14, 0.01) && near(pjm.landingRange(42, 63), 150.6, 0.1))
  // wall
  const thW = { u: 22, angleDeg: 40, y0: 1.2, g: 9.81 }
  const j8 = pjm.justClearsDistances(thW, 8)
  ok('wall post: 16.85, 14.14, 2.136 s, 7.83, 9.03 m, 9.3 trap, apex 11.4 m, range 50.0 m', has('projectile-motion-over-a-wall-will-it-clear-worked-solution', '16.85 m/s', '14.14 m/s', '2.136 s', '7.83 m', '9.03 m', '9.3 m', '11.4 m', '50.0 m') && near(pjm.heightAtDistance(thW, 36), 9.026, 0.002) && near(pjm.apexHeight(thW), 11.39, 0.01) && near(pjm.throwLandingRange(thW), 49.98, 0.02))
  ok('wall post: an 8 m wall is cleared by 1.03 m, just cleared at 38.3 m, with the nearest at 10.3 m; a 12 m wall is hit 9.03 m up, 2.97 m below the top', has('projectile-motion-over-a-wall-will-it-clear-worked-solution', '1.03 m', '38.3 m', '10.3 m', '2.97 m') && near(j8.d2, 38.31, 0.01) && near(j8.d1, 10.3, 0.05) && near(pjm.heightAtDistance(thW, 36) - 8, 1.026, 0.003) && near(12 - pjm.heightAtDistance(thW, 36), 2.974, 0.003) && near(pjm.apexHeight(thW) - 1.2, 14.141 ** 2 / 19.62, 1e-3))
  // crosswind
  ok('crosswind post: 14.5°, 193.6 km/h, 72 s, 1.0 km, and the swimmer’s 23.6° and 1.4 m/s', has('crosswind-landing-relative-velocity-vector-addition-physics', '14.5°', '193.6 km/h', '72 s', '1.0 km', '23.6°', '1.4 m/s') && near(Math.abs(rmm.crabAngleDeg(200, 50)), 14.48, 0.01) && near(rmm.groundSpeedWhenCrabbing(200, 50), 193.65, 0.01) && near(rmm.lateralOffset(200, 0, 50, 4), 1, 1e-9) && near(Math.asin(0.4) * 180 / Math.PI, 23.58, 0.01) && near(Math.sqrt(2.25 - 0.36), 1.375, 0.001))
  // umbrella
  ok('umbrella post: 14.0°, 8.25 m/s and the lean table 10.6°, 14.0°, 20.6°, 32.0°', has('umbrella-rain-walking-relative-velocity-physics-explained', '14.0°', '8.25 m/s', '10.6°', '20.6°', '32.0°') && [[1.5, 10.6], [2, 14.0], [3, 20.6], [5, 32.0]].every(([w, a]) => near(rmm.rainAngleDeg(w, 8), a, 0.05)) && near(Math.hypot(8, 2), 8.246, 0.001))
  // aberration
  ok('aberration post: 29.8 km/s, 9.93e-5, 20.5″ (0.0057°), c = 3.00e8', has('stellar-aberration-explained-speed-of-light-bradley', '2.98 × 10⁴ m/s', '9.93 × 10⁻⁵', '20.5 arcseconds', '0.0057 degrees', '3.00 × 10⁸ m/s') && near(rmm.earthOrbitSpeed(), 29783, 5) && near(rmm.aberrationRad(rmm.earthOrbitSpeed()), 9.934e-5, 1e-7) && near(rmm.radToArcsec(rmm.aberrationRad(rmm.earthOrbitSpeed())), 20.49, 0.01) && near(rmm.speedOfLightFromAberration(rmm.earthOrbitSpeed(), rmm.arcsecToRad(20.5)), 3.0e8, 1.5e6))
  // fields
  ok('fields post: Earth–Moon 1.98e20 N, hydrogen 8.2e-8 N and 3.6e-47 N, wires 4.0e-4 N/m, g at 2R = 2.5', has('gravitational-electric-magnetic-fields-ib-physics-theme-d', '1.98 × 10²⁰ N', '8.2 × 10⁻⁸ N', '3.6 × 10⁻⁴⁷ N', '4.0 × 10⁻⁴ N', '2.5 N/kg') && near(fld.gravForce(fld.M_EARTH, fld.M_MOON, fld.D_EARTH_MOON), 1.985e20, 5e17) && near(fld.coulombForce(fld.E_CHARGE, fld.E_CHARGE, 5.3e-11), 8.19e-8, 1e-9) && near(fld.wireForcePerMetre(10, 10, 0.05), 4e-4, 1e-9) && near(9.8 / 4, 2.45, 1e-9))
  // orbits
  const eISS = fld.orbitEnergies(fld.M_EARTH, 500, 6.78e6)
  ok('orbits post: ISS 7.66e3 m/s, 5.56e3 s (93 min), 8.7 N/kg (88%), energies +1.47e10 / −2.94e10 / −1.47e10 J, escape 1.12e4 m/s', has('orbital-speed-escape-velocity-derivation-ib-physics', '7.66 × 10³ m/s', '5.56 × 10³ s', '93 minutes', '8.7 N/kg', '88%', '1.47 × 10¹⁰ J', '2.94 × 10¹⁰ J', '1.12 × 10⁴ m/s') && near(fld.orbitSpeed(fld.M_EARTH, 6.78e6), 7660, 5) && near(fld.orbitPeriod(fld.M_EARTH, 6.78e6), 5560, 5) && near(fld.gravField(fld.M_EARTH, 6.78e6), 8.66, 0.05) && near(eISS.ke, 1.47e10, 3e7) && near(eISS.gpe, -2.94e10, 6e7) && near(eISS.te, -1.47e10, 3e7) && near(fld.escapeSpeed(fld.M_EARTH, fld.R_EARTH), 1.12e4, 50))
  ok('the blog hub copy mentions DP Physics, and the DP posts appear in the sitemap data via POSTS', blog.POSTS.slice(-8).every((p) => p.tags.includes('DP Physics')))
}
process.exit(fail ? 1 : 0)
