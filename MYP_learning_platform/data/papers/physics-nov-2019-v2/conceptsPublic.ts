import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2019_V2: Record<string, ConceptEntry> = {

  // Q1 — Momentum (curling stone on ice)
  q1_a: {
    keyConcepts: ['momentum unit Ns', 'kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'unit'],
  },
  q1_b: {
    keyConcepts: ['greater mass', 'more momentum at same speed', 'p = mv'],
    keywords: ['mass', 'heavier', 'greater', 'momentum', 'stone', 'puck'],
  },
  q1_c: {
    keyConcepts: ['forward momentum', 'force to change momentum', 'no net force', 'Newton first law', 'inertia'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia', 'stone', 'ice'],
  },
  q1_d: {
    keyConcepts: ['friction slows motion', 'friction on ice'],
    keywords: ['friction', 'force', 'slows', 'stops', 'ice'],
  },

  // Q2 — Photocopier toner drum
  q2_a: {
    keyConcepts: ['P = IV', 'current = power / voltage', '6 A'],
    keywords: ['P = IV', 'I = P/V', '1380', '230', '6', 'ampere', 'current'],
  },
  q2_b: {
    keyConcepts: ['negatively charged toner', 'opposite charges attract', 'positive drum attracts negative'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'drum', 'toner'],
  },
  q2_c: {
    keyConcepts: ['leftover toner neutralizes drum charge', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'leftover', 'toner', 'weaker', 'field', 'faint', 'clean'],
  },

  // Q3 — EM spectrum / metro travel card
  q3_a: {
    keyConcepts: ['EM spectrum order', 'infrared between microwave and visible', 'ultraviolet between visible and X-ray'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'microwave', 'visible', 'X-ray', 'order'],
  },
  q3_b: {
    keyConcepts: ['radio waves pass through materials', 'infrared needs line of sight', 'radio more reliable'],
    keywords: ['radio', 'line of sight', 'blocked', 'wallet', 'bag', 'infrared', 'advantage'],
  },
  q3_c: {
    keyConcepts: ['v = fλ', 'speed of radio waves', '3 × 10⁸ m s⁻¹', 'scientific notation'],
    keywords: ['v = fλ', '13560000', '22.12', '3 × 10⁸', 'scientific notation', 'm s⁻¹'],
  },
  q3_d: {
    keyConcepts: ['no battery needed', 'induction powers card wirelessly', 'battery loses power'],
    keywords: ['battery', 'power', 'induction', 'wireless', 'replace', 'advantage'],
  },
  q3_e: {
    keyConcepts: ['AC produces alternating magnetic field', 'changing field induces EMF', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'changing', 'induce', 'EMF', 'current', 'coil', 'induction'],
  },

  // Q4 — Hinged dressing-table mirrors virtual-images investigation
  q4_a: {
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['research question', 'angle', 'mirrors', 'images', 'affect'],
  },
  q4_b: {
    keyConcepts: ['angle = IV', 'number of images = DV', 'ornament/position/size/shape = control'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images', 'ornament', 'position', 'size', 'shape'],
  },
  q4_c: {
    keyConcepts: ['protractor measures angle'],
    keywords: ['protractor', 'angle', 'measure'],
  },
  q4_d: {
    keyConcepts: ['read graph', '3 images at ~90°'],
    keywords: ['graph', '90', 'three', 'images', 'angle', 'predict'],
  },
  q4_e: {
    keyConcepts: ['inverse relationship', 'N × angle = constant test', 'approximately inverse proportional'],
    keywords: ['inverse', 'proportional', 'constant', 'N × angle', 'calculation', 'approximately'],
  },
  q4_f: {
    keyConcepts: ['discrete data', 'integer values only', 'bar chart for whole numbers'],
    keywords: ['integer', 'discrete', 'whole number', 'bar chart', 'cannot', 'half'],
  },
  q4_g: {
    keyConcepts: ['more data points better', 'regular intervals better'],
    keywords: ['more data', 'regular', 'intervals', 'third student', 'better'],
  },

  // Q5 — Speed of sound (echo off a canyon cliff)
  q5_a: {
    keyConcepts: ['total distance = 2 × 140 m', 'speed = distance/time', '330 m s⁻¹'],
    keywords: ['280', '0.85', '330', 'speed', 'echo', 'distance', 'time'],
  },
  q5_b: {
    keyConcepts: ['repeat measurements reduce error', 'greater distance reduces relative error'],
    keywords: ['repeat', 'mean', 'further', 'random error', 'reaction time', 'average'],
  },
  q5_c: {
    keyConcepts: ['read echo peaks from recording', 't = 3.00 s'],
    keywords: ['3.05', '0.05', '3.00', 'subtract', 'recording', 'echo time'],
  },
  q5_d: {
    keyConcepts: ['data table', 'headers with units', 'ordered by distance'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', '2 d.p.'],
  },
  q5_e: {
    keyConcepts: ['gradient = speed', 'line of best fit gradient', '325–345 m s⁻¹'],
    keywords: ['gradient', 'LOBF', 'speed', '330', '340', '325', '345'],
  },
  q5_f: {
    keyConcepts: ['identify anomalous point', 'time too high', 'should be lower'],
    keywords: ['anomalous', '600 m', 'too high', 'lower', 'outlier', 'LOBF'],
  },
  q5_g: {
    keyConcepts: ['higher temperature → faster sound', 'kinetic energy of particles', 'faster collisions'],
    keywords: ['temperature', 'kinetic energy', 'particles', 'faster', 'collisions', 'energy transfer'],
  },

  // Q6 — Spring oscillations
  q6_a: {
    keyConcepts: ['IV = mass', 'DV = time period', 'control = spring constant and amplitude', 'hypothesis', '5 increments', '3 trials', 'mean'],
    keywords: ['mass', 'time period', 'spring', 'control', 'hypothesis', 'trials', 'mean', 'method', 'oscillation'],
  },
  q6_b: {
    keyConcepts: ['new IV not mass', 'DV = time period', 'research question', 'two control variables'],
    keywords: ['spring constant', 'stiffness', 'time period', 'control', 'mass', 'research question'],
  },

  // Q7 — Stopping distance (icy winter road)
  q7_a: {
    keyConcepts: ['v² = u² + 2as', 'u = 25 m/s', 'a = 2.5 m/s²', 's = 125 m'],
    keywords: ['v² = u² + 2as', '25', '625', '2.5', '125', 'm', 'braking distance'],
  },
  q7_b: {
    keyConcepts: ['driver factors', 'environmental factors', 'car factors', 'classify stopping factors'],
    keywords: ['driver', 'environmental', 'car', 'radio', 'snow', 'brake', 'tyres', 'medicated', 'leaves'],
  },
  q7_c: {
    keyConcepts: ['medication increases reaction time → thinking distance', 'wet leaves reduce friction → braking distance'],
    keywords: ['medication', 'reaction time', 'thinking distance', 'friction', 'wet leaves', 'braking distance'],
  },

  // Q8 — Autonomous robotaxis
  q8_a: {
    keyConcepts: ['safety technology', 'societal implications', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'society', 'jobs', 'mobility', 'economy', 'fare', 'conclude', 'evaluate', 'robotaxi'],
  },
}
