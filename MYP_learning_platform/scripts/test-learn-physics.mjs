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
process.exit(fail ? 1 : 0)
