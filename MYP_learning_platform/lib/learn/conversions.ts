// Randomised unit-conversion problems with worked steps and typical-mistake feedback.
// Pure functions, tested by scripts/test-learn-physics.mjs.

export interface Trap { value: number; msg: string }
export interface ConvProblem {
  kind: 'prefix' | 'speed' | 'area' | 'volume' | 'time'
  q: string
  unit: string // unit the answer is in (shown next to the box)
  answer: number
  steps: string[]
  traps: Trap[]
}

export const PREFIXES = [
  { name: 'giga', sym: 'G', exp: 9 },
  { name: 'mega', sym: 'M', exp: 6 },
  { name: 'kilo', sym: 'k', exp: 3 },
  { name: 'milli', sym: 'm', exp: -3 },
  { name: 'micro', sym: 'µ', exp: -6 },
  { name: 'nano', sym: 'n', exp: -9 },
  { name: 'pico', sym: 'p', exp: -12 },
] as const

const clean = (x: number) => Number(x.toPrecision(12))
const pick = <T,>(a: readonly T[], r: () => number) => a[Math.floor(r() * a.length)]
const sup = (n: number) => `10${String(n).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d])}`

export const KINDS: ConvProblem['kind'][] = ['prefix', 'speed', 'area', 'volume', 'time']

export function makeProblem(r: () => number = Math.random, kind: ConvProblem['kind'] = pick(KINDS, r)): ConvProblem {
  if (kind === 'prefix') {
    const p = pick(PREFIXES, r)
    const u = pick(['m', 'W', 's', 'Hz'], r)
    const v = pick([2.5, 0.75, 4.2, 12, 350], r)
    const ans = clean(v * 10 ** p.exp)
    return {
      kind, q: `Convert ${v} ${p.sym}${u} to ${u}.`, unit: u, answer: ans,
      steps: [`${p.name} means ${sup(p.exp)}, so 1 ${p.sym}${u} = ${sup(p.exp)} ${u}`, `${v} ${p.sym}${u} = ${v} × ${sup(p.exp)} ${u}`, `= ${ans.toExponential()} ${u}`],
      traps: [{ value: clean(v * 10 ** -p.exp), msg: 'The exponent has the wrong sign. A big prefix (kilo, mega, giga) makes the number in base units bigger; a small prefix (milli, micro, nano) makes it smaller.' }],
    }
  }
  if (kind === 'speed') {
    if (r() < 0.5) {
      const v = pick([18, 36, 54, 72, 90, 108], r)
      const ans = clean(v / 3.6)
      return { kind, q: `Convert ${v} km/h to m s⁻¹.`, unit: 'm s⁻¹', answer: ans, steps: ['1 km = 1000 m and 1 h = 3600 s', `${v} km/h = ${v} × 1000 m / 3600 s`, `= ${v * 1000} / 3600 = ${ans} m s⁻¹`], traps: [{ value: clean(v * 3.6), msg: 'Wrong direction. Going from km/h to m s⁻¹ the number gets smaller: divide by 3.6.' }] }
    }
    const v = pick([5, 10, 15, 20, 25], r)
    const ans = clean(v * 3.6)
    return { kind, q: `Convert ${v} m s⁻¹ to km/h.`, unit: 'km/h', answer: ans, steps: ['1 m = 1/1000 km and 1 s = 1/3600 h', `${v} m/s = ${v} × 3600 / 1000 km/h`, `= ${ans} km/h`], traps: [{ value: clean(v / 3.6), msg: 'Wrong direction. Going from m s⁻¹ to km/h the number gets bigger: multiply by 3.6.' }] }
  }
  if (kind === 'area') {
    const v = pick([25, 40, 250, 600], r)
    const ans = clean(v * 1e-4)
    return { kind, q: `Convert ${v} cm² to m².`, unit: 'm²', answer: ans, steps: ['1 cm = 10⁻² m', '1 cm² = (10⁻² m)² = 10⁻⁴ m²', `${v} cm² = ${v} × 10⁻⁴ m² = ${ans.toExponential()} m²`], traps: [{ value: clean(v * 1e-2), msg: 'You used 10⁻² once. The unit is squared, so the factor is squared too: (10⁻²)² = 10⁻⁴.' }] }
  }
  if (kind === 'volume') {
    const v = pick([125, 500, 2000], r)
    const ans = clean(v * 1e-6)
    return { kind, q: `Convert ${v} cm³ to m³.`, unit: 'm³', answer: ans, steps: ['1 cm = 10⁻² m', '1 cm³ = (10⁻² m)³ = 10⁻⁶ m³', `${v} cm³ = ${v} × 10⁻⁶ m³ = ${ans.toExponential()} m³`], traps: [{ value: clean(v * 1e-2), msg: 'You used 10⁻² once. The unit is cubed, so the factor is cubed too: (10⁻²)³ = 10⁻⁶.' }, { value: clean(v * 1e-4), msg: 'You squared the factor. A volume is cubed: (10⁻²)³ = 10⁻⁶.' }] }
  }
  const v = pick([0.5, 1.5, 2, 24], r)
  const ans = clean(v * 3600)
  return { kind: 'time', q: `Convert ${v} h to s.`, unit: 's', answer: ans, steps: ['1 h = 60 min = 3600 s', `${v} h = ${v} × 3600 s = ${ans} s`], traps: [{ value: clean(v * 60), msg: 'That is minutes. Multiply by 60 again to reach seconds: 1 h = 3600 s.' }] }
}
