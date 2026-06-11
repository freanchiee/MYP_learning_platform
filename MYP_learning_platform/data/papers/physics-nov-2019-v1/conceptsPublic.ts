import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2019_V1: Record<string, ConceptEntry> = {

  // Q1 — Momentum on a Bus
  q1_a: {
    keyConcepts: ['momentum unit Ns', 'kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'unit'],
  },
  q1_b: {
    keyConcepts: ['greater mass', 'more momentum at same speed', 'p = mv'],
    keywords: ['mass', 'heavier', 'greater', 'momentum', 'bus', 'woman'],
  },
  q1_c: {
    keyConcepts: ['forward momentum', 'force to change momentum', 'no net force', 'Newton first law', 'inertia'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia', 'ball', 'bus'],
  },
  q1_d: {
    keyConcepts: ['friction prevents motion', 'static friction'],
    keywords: ['friction', 'force', 'prevents', 'suitcase'],
  },

  // Q2 — Air Purifier
  q2_a: {
    keyConcepts: ['P = IV', 'I = P/V', 'current = 8 A'],
    keywords: ['P = IV', 'I = P/V', '1760', '220', '8', 'ampere'],
  },
  q2_b: {
    keyConcepts: ['negatively charged dust', 'opposite charges attract', 'electrostatic attraction'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'plate'],
  },
  q2_c: {
    keyConcepts: ['plate charge neutralized', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'weaker', 'electric field', 'attraction', 'clean'],
  },

  // Q3 — RFID Wildlife Tracking
  q3_a: {
    keyConcepts: ['EM spectrum order', 'infrared between microwave and visible', 'ultraviolet between visible and X-ray'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'order'],
  },
  q3_b: {
    keyConcepts: ['radio waves penetrate tissue', 'infrared absorbed by tissue', 'infrared higher energy'],
    keywords: ['penetrate', 'tissue', 'fur', 'absorb', 'infrared', 'health'],
  },
  q3_c: {
    keyConcepts: ['v = fλ', 'speed of light 3.00 × 10⁸', 'scientific notation'],
    keywords: ['v = fλ', '125 000', '2400', '3.00 × 10⁸', 'scientific notation', 'm s⁻¹'],
  },
  q3_d: {
    keyConcepts: ['no battery needed', 'battery depletes over time', 'induction advantage'],
    keywords: ['battery', 'induction', 'no power source', 'replace', 'too large'],
  },
  q3_e: {
    keyConcepts: ['AC produces alternating magnetic field', 'changing field induces EMF', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'changing', 'RFID', 'induce', 'EMF', 'current', 'coil'],
  },

  // Q4 — Kaleidoscope Mirror Investigation
  q4_a: {
    keyConcepts: ['research question', 'IV = angle', 'DV = number of images'],
    keywords: ['angle', 'mirrors', 'images', 'research question'],
  },
  q4_b: {
    keyConcepts: ['IV = angle', 'DV = number of images', 'control variables'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images', 'object', 'size', 'shape'],
  },
  q4_c: {
    keyConcepts: ['protractor measures angle'],
    keywords: ['protractor', 'angle', 'instrument'],
  },
  q4_d: {
    keyConcepts: ['graph reading', '3 images ≈ 60°'],
    keywords: ['60', 'three images', 'graph', 'read'],
  },
  q4_e: {
    keyConcepts: ['inverse relationship', 'N × angle = constant', 'test proportionality'],
    keywords: ['inverse', 'N × angle', 'constant', 'calculation', 'proportional'],
  },
  q4_f: {
    keyConcepts: ['discrete data', 'bar chart appropriate for integers'],
    keywords: ['integer', 'discrete', 'bar chart', 'whole number'],
  },
  q4_g: {
    keyConcepts: ['more data points better', 'regular intervals'],
    keywords: ['second student', 'more data', 'regular intervals', 'trend'],
  },

  // Q5 — Speed of Sound
  q5_a: {
    keyConcepts: ['total distance = 2 × wall distance', 'speed = distance/time', '2 s.f.'],
    keywords: ['260', '0.78', '330', '2 s.f.', 'm s⁻¹', 'echo'],
  },
  q5_b: {
    keyConcepts: ['repeat measurements reduce random error', 'greater distance reduces relative timing error'],
    keywords: ['repeat', 'average', 'distance', 'random error', 'reaction time', 'reliable'],
  },
  q5_c: {
    keyConcepts: ['read sound recording peaks', 'subtract to find echo time'],
    keywords: ['1.10', '2.65', '1.55', 'subtract', '520 m', 'recording'],
  },
  q5_d: {
    keyConcepts: ['data table format', 'headers with units', 'ordered data'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order'],
  },
  q5_e: {
    keyConcepts: ['gradient = speed', 'LOBF gradient'],
    keywords: ['gradient', 'LOBF', 'speed', '330', '355'],
  },
  q5_f: {
    keyConcepts: ['anomalous data point', 'time too low'],
    keywords: ['anomalous', '400 m', 'higher', 'outlier', 'LOBF'],
  },
  q5_g: {
    keyConcepts: ['higher temperature → faster sound', 'particle kinetic energy', 'collision frequency'],
    keywords: ['faster', 'temperature', 'kinetic energy', 'particles', 'collisions', 'energy transfer'],
  },

  // Q6 — Pendulum Oscillation
  q6_a: {
    keyConcepts: ['IV = string length', 'DV = time period', 'CV = mass and amplitude', 'hypothesis', 'data sufficiency', 'method'],
    keywords: ['length', 'time period', 'pendulum', 'control', 'hypothesis', 'trials', 'mean', 'oscillation'],
  },
  q6_b: {
    keyConcepts: ['second investigation', 'new IV ≠ length', 'DV = time period', 'control variables'],
    keywords: ['mass', 'time period', 'research question', 'control', 'amplitude'],
  },

  // Q7 — Stopping Distance
  q7_a: {
    keyConcepts: ['v² = u² + 2as', 'braking distance calculation', '150 m'],
    keywords: ['v² = u² + 2as', '30', '900', '3', '150', 'metres', 'braking distance'],
  },
  q7_b: {
    keyConcepts: ['driver environmental car factor classification'],
    keywords: ['driver', 'environmental', 'car', 'cell phone', 'rain', 'tyres', 'brakes', 'alcohol'],
  },
  q7_c: {
    keyConcepts: ['alcohol → reaction time → thinking distance', 'poor road → friction → braking distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'braking distance', 'stopping distance'],
  },

  // Q8 — Autonomous Electric Buses
  q8_a: {
    keyConcepts: ['technology evaluation', 'safety', 'societal impact', 'economic implications', 'appraisal'],
    keywords: ['safety', 'sensors', 'AI', 'society', 'jobs', 'accessibility', 'economic', 'cost', 'conclude', 'evaluate'],
  },

}
