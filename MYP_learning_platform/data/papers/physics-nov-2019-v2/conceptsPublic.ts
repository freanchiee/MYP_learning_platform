import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2019_V2: Record<string, ConceptEntry> = {

  // Q1 — Momentum in a Moving Van
  q1_a: {
    keyConcepts: ['momentum unit Ns', 'kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'unit'],
  },
  q1_b: {
    keyConcepts: ['greater mass', 'more momentum at same speed', 'p = mv'],
    keywords: ['mass', 'heavier', 'greater', 'momentum', 'van', 'dog'],
  },
  q1_c: {
    keyConcepts: ['forward momentum', 'force to change momentum', 'no net force', 'Newton first law', 'inertia'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia', 'ball', 'van'],
  },
  q1_d: {
    keyConcepts: ['friction prevents motion', 'static friction'],
    keywords: ['friction', 'force', 'prevents', 'box', 'van'],
  },

  // Q2 — Electrostatic Precipitator
  q2_a: {
    keyConcepts: ['P = IV', 'I = P/V', 'current = 6 A'],
    keywords: ['P = IV', 'I = P/V', '1320', '220', '6', 'ampere'],
  },
  q2_b: {
    keyConcepts: ['negatively charged soot', 'opposite charges attract', 'electrostatic attraction'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'plate', 'soot'],
  },
  q2_c: {
    keyConcepts: ['plate charge neutralized', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'weaker', 'electric field', 'attraction', 'clean'],
  },

  // Q3 — RFID Supply Chain
  q3_a: {
    keyConcepts: ['EM spectrum order', 'infrared', 'ultraviolet positions'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'order'],
  },
  q3_b: {
    keyConcepts: ['radio penetrates packaging', 'infrared needs line of sight'],
    keywords: ['penetrate', 'packaging', 'wall', 'line of sight', 'range'],
  },
  q3_c: {
    keyConcepts: ['v = fλ', 'speed of light 3.00 × 10⁸', 'scientific notation'],
    keywords: ['v = fλ', '150 000', '2000', '3.00 × 10⁸', 'scientific notation'],
  },
  q3_d: {
    keyConcepts: ['no battery needed', 'batteries run flat', 'cost reduction'],
    keywords: ['battery', 'no power source', 'run out', 'cost', 'bulk'],
  },
  q3_e: {
    keyConcepts: ['AC → alternating magnetic field', 'changing field induces EMF', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'changing', 'RFID', 'induce', 'EMF', 'current'],
  },

  // Q4 — Dental Mirror Investigation
  q4_a: {
    keyConcepts: ['research question', 'IV = angle', 'DV = number of images'],
    keywords: ['angle', 'mirrors', 'images', 'research question'],
  },
  q4_b: {
    keyConcepts: ['IV = angle', 'DV = number of images', 'control variables'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images'],
  },
  q4_c: {
    keyConcepts: ['protractor measures angle'],
    keywords: ['protractor', 'angle'],
  },
  q4_d: {
    keyConcepts: ['graph reading', '3 images ≈ 60°'],
    keywords: ['60', 'three images', 'graph'],
  },
  q4_e: {
    keyConcepts: ['inverse relationship', 'N × angle = constant', 'approximately inversely proportional'],
    keywords: ['inverse', 'N × angle', 'constant', 'calculation'],
  },
  q4_f: {
    keyConcepts: ['discrete data', 'bar chart'],
    keywords: ['integer', 'discrete', 'bar chart', 'whole number'],
  },
  q4_g: {
    keyConcepts: ['more data points better', 'regular intervals'],
    keywords: ['second student', 'more data', 'regular intervals'],
  },

  // Q5 — Speed of Sound
  q5_a: {
    keyConcepts: ['total distance = 2 × wall distance', 'speed = distance/time', '330 m s⁻¹ (2 s.f.)'],
    keywords: ['180', '0.55', '330', '2 s.f.', 'm s⁻¹', 'echo'],
  },
  q5_b: {
    keyConcepts: ['repeat measurements', 'increase wall distance'],
    keywords: ['repeat', 'average', 'distance', 'random error', 'reaction time'],
  },
  q5_c: {
    keyConcepts: ['read recording peaks', 'subtract for echo time'],
    keywords: ['0.70', '2.60', '1.90', 'subtract', '640 m'],
  },
  q5_d: {
    keyConcepts: ['data table format', 'headers', 'ordered'],
    keywords: ['table', 'distance', 'time', 'headers', 'order'],
  },
  q5_e: {
    keyConcepts: ['gradient = speed', 'LOBF'],
    keywords: ['gradient', 'LOBF', 'speed', '330–355'],
  },
  q5_f: {
    keyConcepts: ['anomalous point', 'time too low'],
    keywords: ['anomalous', '400 m', 'higher', 'outlier'],
  },
  q5_g: {
    keyConcepts: ['higher T → faster sound', 'particle kinetic energy', 'collision frequency'],
    keywords: ['faster', 'temperature', 'kinetic energy', 'particles', 'collisions'],
  },

  // Q6 — Spring Oscillation
  q6_a: {
    keyConcepts: ['IV = spring constant', 'DV = time period', 'CV = mass and amplitude', 'hypothesis', 'method'],
    keywords: ['spring constant', 'stiffness', 'time period', 'control', 'hypothesis', 'trials', 'mean'],
  },
  q6_b: {
    keyConcepts: ['second investigation', 'new IV', 'DV = time period', 'control variables'],
    keywords: ['mass', 'time period', 'research question', 'control', 'spring constant'],
  },

  // Q7 — Stopping Distance on Ice
  q7_a: {
    keyConcepts: ['v² = u² + 2as', 'braking distance', '72 m'],
    keywords: ['v² = u² + 2as', '24', '576', '4', '72', 'metres'],
  },
  q7_b: {
    keyConcepts: ['driver environmental car factors'],
    keywords: ['driver', 'environmental', 'car', 'alcohol', 'rain', 'tyres', 'brakes'],
  },
  q7_c: {
    keyConcepts: ['alcohol → thinking distance', 'poor surface → braking distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'braking distance'],
  },

  // Q8 — Drone Delivery
  q8_a: {
    keyConcepts: ['technology evaluation', 'safety', 'societal impact', 'economic implications', 'appraisal'],
    keywords: ['drone', 'GPS', 'safety', 'society', 'noise', 'privacy', 'jobs', 'cost', 'conclude'],
  },

}
