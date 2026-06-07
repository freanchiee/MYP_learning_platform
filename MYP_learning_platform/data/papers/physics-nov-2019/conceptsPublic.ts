import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2019: Record<string, ConceptEntry> = {
  // Q1 — Momentum
  q1_a: {
    keyConcepts: ['momentum unit Ns', 'kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'unit'],
  },
  q1_b: {
    keyConcepts: ['greater mass', 'more momentum at same speed', 'p = mv'],
    keywords: ['mass', 'heavier', 'greater', 'momentum', 'same speed'],
  },
  q1_c: {
    keyConcepts: ['forward momentum', 'force to change momentum', 'no net force', 'Newton first law', 'inertia'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia', 'velocity', 'constant'],
  },
  q1_d: {
    keyConcepts: ['friction prevents motion', 'static friction'],
    keywords: ['friction', 'force', 'prevents', 'stop', 'bag'],
  },

  // Q2 — Smog filter
  q2_a: {
    keyConcepts: ['P = IV', 'current = power / voltage', '5 A'],
    keywords: ['P = IV', 'I = P/V', '1100', '220', '5', 'ampere', 'current'],
  },
  q2_b: {
    keyConcepts: ['negatively charged dust', 'opposite charges attract', 'positive plate attracts negative'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'plate'],
  },
  q2_c: {
    keyConcepts: ['accumulated charge neutralizes plate', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'weaken', 'field', 'charge', 'accumulate', 'clean'],
  },

  // Q3 — EM spectrum / RFID
  q3_a: {
    keyConcepts: ['EM spectrum order', 'infrared between microwave and visible', 'ultraviolet between visible and X-ray'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'microwave', 'visible', 'X-ray', 'order'],
  },
  q3_b: {
    keyConcepts: ['radio waves penetrate tissue', 'infrared absorbed by tissue', 'radio safer'],
    keywords: ['radio', 'penetrate', 'tissue', 'fur', 'infrared', 'harmful', 'advantage'],
  },
  q3_c: {
    keyConcepts: ['v = fλ', 'speed of radio waves', '3 × 10⁸ m s⁻¹', 'scientific notation'],
    keywords: ['v = fλ', '134500', '2238', '3 × 10⁸', 'scientific notation', 'm s⁻¹'],
  },
  q3_d: {
    keyConcepts: ['no battery needed', 'induction powers RFID wirelessly', 'battery loses power'],
    keywords: ['battery', 'power', 'induction', 'wireless', 'replace', 'advantage'],
  },
  q3_e: {
    keyConcepts: ['AC produces alternating magnetic field', 'changing field induces EMF', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'changing', 'induce', 'EMF', 'current', 'coil', 'induction'],
  },

  // Q4 — Mirrors
  q4_a: {
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['research question', 'angle', 'mirrors', 'images', 'affect'],
  },
  q4_b: {
    keyConcepts: ['angle = IV', 'number of images = DV', 'position/size/shape = control'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images', 'position', 'size', 'shape'],
  },
  q4_c: {
    keyConcepts: ['protractor measures angle'],
    keywords: ['protractor', 'angle', 'measure'],
  },
  q4_d: {
    keyConcepts: ['read graph', '3 images at ~60°'],
    keywords: ['graph', '60', 'three', 'images', 'angle', 'predict'],
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
    keywords: ['more data', 'regular', 'intervals', 'second student', 'better'],
  },

  // Q5 — Speed of sound
  q5_a: {
    keyConcepts: ['total distance = 2 × 110 m', 'speed = distance/time', '280 m s⁻¹'],
    keywords: ['220', '0.79', '280', 'speed', 'echo', '2 × 110', 'distance', 'time'],
  },
  q5_b: {
    keyConcepts: ['repeat measurements reduce error', 'greater distance reduces relative error'],
    keywords: ['repeat', 'more measurements', 'distance', 'larger', 'random error', 'average'],
  },
  q5_c: {
    keyConcepts: ['read echo times from recording', 't = 1.75 s'],
    keywords: ['2.65', '0.90', '1.75', 'subtract', 'recording', 'echo time'],
  },
  q5_d: {
    keyConcepts: ['data table', 'headers with units', 'ordered by distance'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', '2 d.p.'],
  },
  q5_e: {
    keyConcepts: ['gradient = speed', 'line of best fit gradient', '330–355 m s⁻¹'],
    keywords: ['gradient', 'LOBF', 'speed', '330', '340', '355'],
  },
  q5_f: {
    keyConcepts: ['identify anomalous point', 'time too low', 'should be higher'],
    keywords: ['anomalous', '400 m', 'too low', 'higher', 'outlier', 'LOBF'],
  },
  q5_g: {
    keyConcepts: ['higher temperature → faster sound', 'kinetic energy of particles', 'faster collisions'],
    keywords: ['temperature', 'kinetic energy', 'particles', 'faster', 'collisions', 'energy transfer'],
  },

  // Q6 — Spring oscillations
  q6_a: {
    keyConcepts: ['IV = mass', 'DV = time period', 'control = spring constant', 'hypothesis', '5 increments', '3 trials', 'mean'],
    keywords: ['mass', 'time period', 'spring', 'control', 'hypothesis', 'trials', 'mean', 'method', 'oscillation'],
  },
  q6_b: {
    keyConcepts: ['new IV not mass', 'DV = time period', 'research question', 'two control variables'],
    keywords: ['spring constant', 'stiffness', 'time period', 'control', 'mass', 'research question'],
  },

  // Q7 — Stopping distance
  q7_a: {
    keyConcepts: ['v² = u² + 2as', 'u = 20 m/s', 'a = 2 m/s²', 's = 100 m'],
    keywords: ['v² = u² + 2as', '20', '400', '2', '100', 'm', 'braking distance'],
  },
  q7_b: {
    keyConcepts: ['driver factors', 'environmental factors', 'car factors', 'classify stopping factors'],
    keywords: ['driver', 'environmental', 'car', 'alcohol', 'rain', 'tyre', 'brakes', 'road'],
  },
  q7_c: {
    keyConcepts: ['alcohol increases reaction time → thinking distance', 'poor surface reduces friction → braking distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'poor surface', 'braking distance'],
  },

  // Q8 — Driverless cars
  q8_a: {
    keyConcepts: ['safety technology', 'societal implications', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'reaction', 'society', 'jobs', 'economy', 'conclude', 'evaluate', 'driverless'],
  },
}
