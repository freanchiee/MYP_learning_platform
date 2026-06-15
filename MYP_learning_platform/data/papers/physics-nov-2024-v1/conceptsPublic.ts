/**
 * CLIENT-SAFE concept data for Physics November 2024 — Variant 1.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_c', 'q6_c'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2024_V1: Record<string, ConceptEntry> = {

  // ── Q1: Swing ride & Pile driver ───────────────────────────────
  q1_b: {
    keyConcepts: ['KE max at bottom', 'PE max at top', 'speed max at B'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'speed', 'position B', 'bottom', 'energy'],
  },
  q1_c: {
    keyConcepts: ['T = time / 10', 'g = 4π²L / T²', '9.87 m s⁻²', 'three significant figures'],
    keywords: ['1.99', 'period', '4π²', 'rearrange', 'divide', '9.87', 'three', 'g ='],
  },
  q1_d: {
    keyConcepts: ['altitude affects g', 'measurement uncertainty', 'timing error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time'],
  },
  q1_e: {
    keyConcepts: ['Δh = 7.5 m', 'KE = mgh', '130 kJ', 'two significant figures'],
    keywords: ['7.5', '1800', '9.81', '132', '130', 'kJ', 'height', 'mgh', 'kinetic'],
  },
  q1_f: {
    keyConcepts: ['friction', 'air resistance', 'energy lost as heat'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost'],
  },

  // ── Q2: Radioactivity ─────────────────────────────────────────
  q2_a: {
    keyConcepts: ['alpha short range in air', 'few centimetres', 'bar must be close'],
    keywords: ['range', 'short', 'cm', 'air', 'close', 'penetration', 'absorbed', 'ionise'],
  },
  q2_b: {
    keyConcepts: ['high ionising power', 'helium nucleus', 'low penetrating power', 'positively charged'],
    keywords: ['ionise', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range'],
  },
  q2_d: {
    keyConcepts: ['isotopes same proton number', 'proton number 84', 'C has wrong proton number'],
    keywords: ['proton', 'atomic number', '84', '82', 'same', 'different element', 'isotope'],
  },
  q2_g: {
    keyConcepts: ['alpha ionises air to make ions', 'ions neutralise static charge', 'beta/gamma lower ionising power', 'charge not removed'],
    keywords: ['ionise', 'ions', 'neutralise', 'charge', 'film', 'beta', 'gamma', 'ionising power', 'static'],
  },

  // ── Q3: Resistance Investigation ──────────────────────────────
  q3_a: {
    keyConcepts: ['length increases → resistance increases', 'electrons travel further', 'more collisions'],
    keywords: ['length', 'resistance', 'increase', 'longer', 'electrons', 'distance', 'collisions', 'because'],
  },
  q3_b: {
    keyConcepts: ['one material only', 'five different lengths', 'material and diameter controlled'],
    keywords: ['material P', 'one material', '5 lengths', 'controlled', 'diameter', 'constant', 'only length'],
  },
  q3_c: {
    keyConcepts: ['one material controls resistivity', 'different lengths to test RQ', 'diameter controlled'],
    keywords: ['resistivity', 'material', 'confound', 'fair test', 'length varies', 'diameter constant', 'control'],
  },
  q3_d: {
    keyConcepts: ['headings with units', 'Length / cm and Resistance / Ω', 'data ordered by length'],
    keywords: ['length', 'resistance', 'cm', 'ohm', 'Ω', 'heading', 'unit', 'table', 'order'],
  },
  q3_e: {
    keyConcepts: ['calculate mean/average', 'reduce random errors', 'increase reliability'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid'],
  },
  q3_g: {
    keyConcepts: ['new research question', 'IV consistent with RQ', 'CV consistent with RQ'],
    keywords: ['diameter', 'material', 'research question', 'how does', 'affect', 'independent', 'control'],
  },

  // ── Q4: Thermistor Investigation Design ───────────────────────
  q4_a: {
    keyConcepts: ['temperature as IV', 'resistance as DV', 'research question format'],
    keywords: ['temperature', 'resistance', 'thermistor', 'how does', 'affect', 'water', 'relationship'],
  },
  q4_b: {
    keyConcepts: ['IV = temperature DV = resistance', 'two CVs with justification', 'equipment list', 'detailed method', 'range and repeats for sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'justify', 'thermistor', 'ohmmeter', 'thermometer', 'method', 'range', 'repeat', 'mean', 'temperature'],
  },

  // ── Q5: Resistance vs Current (filament lamp) ─────────────────
  q5_b: {
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'supply', 'power supply', 'lamp'],
  },
  q5_c: {
    keyConcepts: ['IV = current', 'DV = resistance', 'CV = filament length material ammeter'],
    keywords: ['independent', 'current', 'dependent', 'resistance', 'control', 'length', 'material', 'ammeter'],
  },
  q5_e: {
    keyConcepts: ['test direct proportion: V/I = constant?', 'ratios not equal', 'not directly proportional'],
    keywords: ['ratio', 'V/I', 'constant', 'directly proportional', 'not', 'equal', 'calculate', 'two points'],
  },
  q5_f: {
    keyConcepts: ['R = V / I', 'read V at 0.20 A', '22 Ω'],
    keywords: ['R = V/I', '4.4', '22', 'resistance', 'ohm', 'Ω', 'formula', 'divide', '0.20'],
  },
  q5_i: {
    keyConcepts: ['gradient = ΔR / ΔI', 'two points on LOBF', 'unit Ω A⁻¹'],
    keywords: ['gradient', 'ΔR', 'ΔI', 'slope', 'rise', 'run', 'Ω/A', 'line of best fit'],
  },
  q5_j: {
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'filament burns out at 5 A'],
    keywords: ['extrapolate', 'beyond', 'range', 'linear', 'not valid', '5 A', 'burn out', 'melt', 'unreliable'],
  },

  // ── Q6: Micro-hydro & Clean Energy ────────────────────────────
  q6_a: {
    keyConcepts: ['mass = density × volume', 'W = mgh', '3.7 × 10⁹ J', 'standard form 2 s.f.'],
    keywords: ['1000', '8400', 'density', 'volume', 'W = mgh', '9.81', '45', '3.7', '10⁹', 'joule', 'work'],
  },
  q6_b: {
    keyConcepts: ['no light to study', 'no refrigeration', 'no power for clinics or businesses'],
    keywords: ['study', 'dark', 'refrigeration', 'medicine', 'fuel', 'kerosene', 'clinic', 'business', 'health'],
  },
  q6_c: {
    keyConcepts: ['benefit of electricity', 'ethical advantage of fee', 'ethical disadvantage of fee', 'concluding appraisal'],
    keywords: ['light', 'study', 'refrigeration', 'clinic', 'fee', 'maintain', 'technician', 'ethical', 'poor', 'access', 'conclude', 'long-term'],
  },

  // ── Q7: Solar Cooking & Infrared ──────────────────────────────
  q7_b: {
    keyConcepts: ['infrared absorbed by dark surfaces', 'transfers thermal energy', 'heats the pot'],
    keywords: ['absorb', 'dark', 'heat', 'thermal', 'energy', 'infrared', 'temperature', 'warm'],
  },
  q7_c: {
    keyConcepts: ['equatorial climate suitable', 'cloudy regions less suitable', 'reduces smoke and waterborne disease', 'implementation challenges', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'cloud', 'health', 'smoke', 'disease', 'pasteurise', 'challenge', 'daylight', 'conclude', 'suitable'],
  },
}
