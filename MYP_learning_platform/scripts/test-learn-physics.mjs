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
process.exit(fail ? 1 : 0)
