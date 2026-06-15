import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2019_V1: Record<string, ConceptEntry> = {

  // Q1 — Momentum (truck on a car ferry)
  q1_a: {
    keyConcepts: ['momentum unit Ns', 'kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'unit'],
  },
  q1_b: {
    keyConcepts: ['greater mass', 'more momentum at same speed', 'p = mv'],
    keywords: ['mass', 'heavier', 'greater', 'momentum', 'ferry', 'truck'],
  },
  q1_c: {
    keyConcepts: ['forward momentum', 'force to change momentum', 'no net force', 'Newton first law', 'inertia'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia', 'can', 'ferry'],
  },
  q1_d: {
    keyConcepts: ['friction prevents motion', 'static friction'],
    keywords: ['friction', 'force', 'prevents', 'crate'],
  },

  // Q2 — Electrostatic paint spraying
  q2_a: {
    keyConcepts: ['P = IV', 'current = power / voltage', '4.5 A'],
    keywords: ['P = IV', 'I = P/V', '990', '220', '4.5', 'ampere', 'current'],
  },
  q2_b: {
    keyConcepts: ['negatively charged droplets', 'opposite charges attract', 'positive body attracts negative'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'body', 'droplet'],
  },
  q2_c: {
    keyConcepts: ['dried paint reduces electrode charge', 'weaker electric field', 'reduced attraction'],
    keywords: ['build up', 'dried paint', 'electrode', 'weaker', 'field', 'clean'],
  },

  // Q3 — EM spectrum / contactless card
  q3_a: {
    keyConcepts: ['EM spectrum order', 'infrared between microwave and visible', 'ultraviolet between visible and X-ray'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'microwave', 'visible', 'X-ray', 'order'],
  },
  q3_b: {
    keyConcepts: ['radio waves pass through materials', 'infrared needs line of sight', 'radio more reliable'],
    keywords: ['radio', 'line of sight', 'blocked', 'wallet', 'infrared', 'advantage'],
  },
  q3_c: {
    keyConcepts: ['v = fλ', 'speed of radio waves', '3 × 10⁸ m s⁻¹', 'scientific notation'],
    keywords: ['v = fλ', '13560000', '22.1', '3 × 10⁸', 'scientific notation', 'm s⁻¹'],
  },
  q3_d: {
    keyConcepts: ['no battery needed', 'induction powers card wirelessly', 'battery loses power'],
    keywords: ['battery', 'power', 'induction', 'wireless', 'replace', 'advantage'],
  },
  q3_e: {
    keyConcepts: ['AC produces alternating magnetic field', 'changing field induces EMF', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'changing', 'induce', 'EMF', 'current', 'coil', 'induction'],
  },

  // Q4 — Kaleidoscope two-mirror virtual-images investigation
  q4_a: {
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['research question', 'angle', 'mirrors', 'images', 'affect'],
  },
  q4_b: {
    keyConcepts: ['angle = IV', 'number of images = DV', 'bead/position/size/shape = control'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images', 'bead', 'position', 'size', 'shape'],
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

  // Q5 — Speed of sound (sonar off seabed)
  q5_a: {
    keyConcepts: ['total distance = 2 × 150 m', 'speed = distance/time', '1500 m s⁻¹'],
    keywords: ['300', '0.20', '1500', 'speed', 'echo', 'distance', 'time'],
  },
  q5_b: {
    keyConcepts: ['repeat measurements reduce error', 'greater depth reduces relative error'],
    keywords: ['repeat', 'mean', 'deeper', 'random error', 'reliable', 'average'],
  },
  q5_c: {
    keyConcepts: ['read echo peaks from recording', 't = 1.20 s'],
    keywords: ['1.30', '0.10', '1.20', 'subtract', 'recording', 'echo time'],
  },
  q5_d: {
    keyConcepts: ['data table', 'headers with units', 'ordered by distance'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', '2 d.p.'],
  },
  q5_e: {
    keyConcepts: ['gradient = speed', 'line of best fit gradient', '1480–1520 m s⁻¹'],
    keywords: ['gradient', 'LOBF', 'speed', '1500', '1480', '1520'],
  },
  q5_f: {
    keyConcepts: ['identify anomalous point', 'time too low', 'should be higher'],
    keywords: ['anomalous', '1000 m', 'too low', 'higher', 'outlier', 'LOBF'],
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

  // Q7 — Stopping distance (motorway)
  q7_a: {
    keyConcepts: ['v² = u² + 2as', 'u = 30 m/s', 'a = 3 m/s²', 's = 150 m'],
    keywords: ['v² = u² + 2as', '30', '900', '3', '150', 'm', 'braking distance'],
  },
  q7_b: {
    keyConcepts: ['driver factors', 'environmental factors', 'car factors', 'classify stopping factors'],
    keywords: ['driver', 'environmental', 'car', 'texting', 'fog', 'tyres', 'brake', 'drowsy', 'ice'],
  },
  q7_c: {
    keyConcepts: ['drowsiness increases reaction time → thinking distance', 'ice reduces friction → braking distance'],
    keywords: ['drowsy', 'reaction time', 'thinking distance', 'friction', 'ice', 'braking distance'],
  },

  // Q8 — Driverless delivery trucks
  q8_a: {
    keyConcepts: ['safety technology', 'societal implications', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'fatigue', 'society', 'jobs', 'freight', 'economy', 'conclude', 'evaluate', 'truck'],
  },
}
