/**
 * CLIENT-SAFE concept data for Physics November 2024 — Variant 2.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_c', 'q6_c'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2024_V2: Record<string, ConceptEntry> = {

  // ── Q1: Trapeze swing & Roller-coaster drop ────────────────────
  q1_b: {
    keyConcepts: ['KE max at bottom', 'PE max at top', 'speed max at B'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'speed', 'position B', 'bottom', 'energy'],
  },
  q1_c: {
    keyConcepts: ['T = time / 10', 'g = 4π²L / T²', '9.80 m s⁻²', 'three significant figures'],
    keywords: ['1.84', 'period', '4π²', 'rearrange', 'divide', '9.80', 'three', 'g ='],
  },
  q1_d: {
    keyConcepts: ['altitude affects g', 'measurement uncertainty', 'timing error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time'],
  },
  q1_e: {
    keyConcepts: ['Δh = 35 m', 'KE = mgh', '210 kJ', 'two significant figures'],
    keywords: ['35', '600', '9.81', '206', '210', 'kJ', 'height', 'mgh', 'kinetic'],
  },
  q1_f: {
    keyConcepts: ['friction', 'air resistance', 'energy lost as heat'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost'],
  },

  // ── Q2: Radioactivity (Pu-238 RTG) ────────────────────────────
  q2_a: {
    keyConcepts: ['radiation damages electronics', 'casing absorbs/shields radiation', 'protects spacecraft'],
    keywords: ['radiation', 'ionising', 'damage', 'electronics', 'absorb', 'shield', 'casing', 'protect'],
  },
  q2_b: {
    keyConcepts: ['high ionising power', 'helium nucleus', 'low penetrating power', 'positively charged'],
    keywords: ['ionise', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range'],
  },
  q2_d: {
    keyConcepts: ['isotopes same proton number', 'proton number 94', 'C has wrong proton number'],
    keywords: ['proton', 'atomic number', '94', '92', 'same', 'different element', 'isotope'],
  },
  q2_g: {
    keyConcepts: ['alpha absorbed in source as heat', 'short range deposits energy', 'beta/gamma more penetrating energy escapes', 'less power'],
    keywords: ['absorb', 'heat', 'short range', 'ionising', 'beta', 'gamma', 'penetrating', 'escape', 'power'],
  },

  // ── Q3: Resistors-in-series Investigation ─────────────────────
  q3_a: {
    keyConcepts: ['more resistors in series → higher total resistance', 'series resistances add', 'R_total = sum'],
    keywords: ['number', 'series', 'total', 'resistance', 'increase', 'add', 'sum', 'opposition', 'because'],
  },
  q3_b: {
    keyConcepts: ['one type only (identical)', 'five different chain lengths', 'individual resistance controlled'],
    keywords: ['type X', 'identical', 'same resistor', '5 resistors', 'different chains', 'controlled', 'only number'],
  },
  q3_c: {
    keyConcepts: ['identical resistors control their value', 'different chain lengths to test RQ', 'other conditions controlled'],
    keywords: ['identical', 'same value', 'confound', 'fair test', 'number varies', 'control', 'constant'],
  },
  q3_d: {
    keyConcepts: ['headings with units', 'Number of resistors and Total resistance / Ω', 'data ordered by number'],
    keywords: ['number', 'resistors', 'total', 'resistance', 'ohm', 'Ω', 'heading', 'unit', 'table', 'order'],
  },
  q3_e: {
    keyConcepts: ['calculate mean/average', 'reduce random errors', 'increase reliability'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid'],
  },
  q3_g: {
    keyConcepts: ['new research question', 'IV consistent with RQ', 'CV consistent with RQ'],
    keywords: ['value', 'parallel', 'research question', 'how does', 'affect', 'independent', 'control'],
  },

  // ── Q4: LDR (light-intensity) Investigation Design ────────────
  q4_a: {
    keyConcepts: ['light intensity as IV', 'resistance as DV', 'research question format'],
    keywords: ['light intensity', 'intensity', 'resistance', 'LDR', 'how does', 'affect', 'brightness'],
  },
  q4_b: {
    keyConcepts: ['IV = light intensity DV = resistance', 'two CVs with justification', 'equipment list', 'detailed method', 'range and repeats for sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'justify', 'lamp', 'LDR', 'light meter', 'lux', 'ohmmeter', 'method', 'range', 'repeat', 'mean'],
  },

  // ── Q5: Resistance vs Temperature (copper coil) ───────────────
  q5_b: {
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'power supply', 'coil'],
  },
  q5_c: {
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length diameter voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
  },
  q5_e: {
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products not equal', 'not inversely proportional'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'two points', 'data'],
  },
  q5_f: {
    keyConcepts: ['R = V / I', '12 V', '41 Ω at 50 °C'],
    keywords: ['R = V/I', '12', '41', 'resistance', 'ohm', 'Ω', 'formula', 'divide', '0.290'],
  },
  q5_i: {
    keyConcepts: ['gradient = ΔR / ΔT', 'two points on LOBF', 'unit Ω °C⁻¹'],
    keywords: ['gradient', 'ΔR', 'ΔT', 'slope', 'rise', 'run', 'Ω/°C', 'line of best fit'],
  },
  q5_j: {
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'copper melts ~1085 °C'],
    keywords: ['extrapolate', 'beyond', 'range', 'linear', 'not valid', '1200', 'melt', '1085', 'unreliable'],
  },

  // ── Q6: Solar Borehole Pump & Clean Water ─────────────────────
  q6_a: {
    keyConcepts: ['mass = density × volume', 'W = mgh', '3.4 × 10⁹ J', 'standard form 2 s.f.'],
    keywords: ['1000', '9200', 'density', 'volume', 'W = mgh', '9.81', '38', '3.4', '10⁹', 'joule', 'work'],
  },
  q6_b: {
    keyConcepts: ['time lost from education', 'physical burden', 'economic productivity lost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'fatigue', 'productivity', 'girls'],
  },
  q6_c: {
    keyConcepts: ['health benefit of clean water', 'ethical advantage of fee', 'ethical disadvantage of fee', 'concluding appraisal'],
    keywords: ['disease', 'health', 'death', 'fee', 'maintain', 'technician', 'ethical', 'poor', 'access', 'conclude', 'long-term'],
  },

  // ── Q7: Rural Connectivity & Microwave/Radio ──────────────────
  q7_b: {
    keyConcepts: ['weakly absorbed by atmosphere', 'travel long distances through air', 'carry signals'],
    keywords: ['absorb', 'atmosphere', 'travel', 'distance', 'range', 'air', 'penetrate', 'signal'],
  },
  q7_c: {
    keyConcepts: ['sunny regions suitable', 'cloudy regions need battery backup', 'telemedicine/education/economy benefits', 'cost and technician challenges', 'concluding appraisal'],
    keywords: ['sun', 'solar', 'remote', 'cloud', 'battery', 'telemedicine', 'health', 'education', 'banking', 'economy', 'cost', 'technician', 'challenge', 'conclude', 'suitable'],
  },
}
