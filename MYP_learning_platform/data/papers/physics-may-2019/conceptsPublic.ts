import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2019: Record<string, ConceptEntry> = {
  // Q1 — Thermal Physics
  q1_a: {
    keyConcepts: ['conduction', 'convection', 'radiation', 'heat transfer processes'],
    keywords: ['conduction', 'convection', 'radiation', 'heat', 'transfer'],
  },
  q1_b: {
    keyConcepts: ['temperature unit Celsius °C or Kelvin K', 'heat unit Joules J'],
    keywords: ['Celsius', 'Kelvin', '°C', 'K', 'Joules', 'J'],
  },
  q1_c: {
    keyConcepts: ['silvered surface reflects radiation', 'vacuum prevents conduction and convection', 'no medium for heat transfer', 'insulation features'],
    keywords: ['silvered', 'reflect', 'radiation', 'vacuum', 'conduction', 'convection', 'no medium', 'insulated'],
  },

  // Q2 — Atomic Structure
  q2_a: {
    keyConcepts: ['helium nucleus: 2 protons 2 neutrons', '2 electrons outside nucleus', 'atomic structure'],
    keywords: ['proton', 'neutron', 'electron', 'nucleus', 'helium', '2'],
  },
  q2_b: {
    keyConcepts: ['electrostatic force keeps electrons in atom', 'not gravitational or magnetic'],
    keywords: ['electrostatic', 'force', 'electron', 'atom'],
  },
  q2_c: {
    keyConcepts: ['opposite charges attract', 'unlike charges attract', 'electrostatic force'],
    keywords: ['opposite', 'unlike', 'attract', 'electrostatic', 'positive', 'negative'],
  },
  q2_d: {
    keyConcepts: ['upward electrostatic force toward positive surface', 'downward weight/gravity', 'force arrows from particle'],
    keywords: ['electrostatic', 'attractive', 'upward', 'weight', 'gravity', 'downward', 'force arrows'],
  },
  q2_e: {
    keyConcepts: ['electric force decreases with distance', 'small distance needed to overcome opposing forces', 'ink sticks to paper'],
    keywords: ['distance', 'force', 'decreases', 'opposing', 'weight', 'stick', 'paper'],
  },

  // Q3 — Gravity
  q3_a: {
    keyConcepts: ['asteroid belt between Mars and Jupiter', 'Mercury innermost planet', 'Saturn sixth planet with rings'],
    keywords: ['asteroid belt', 'Mercury', 'Saturn', 'solar system'],
  },
  q3_b: {
    keyConcepts: ['gravitational force depends on distance', 'gravitational force depends on mass'],
    keywords: ['distance', 'mass', 'gravitational force'],
  },
  q3_c: {
    keyConcepts: ['gravitational force toward Sun', 'larger force when closer', 'arrow length proportional to force'],
    keywords: ['arrow', 'toward Sun', 'closer', 'larger force', 'direction'],
  },
  q3_d: {
    keyConcepts: ['mass = density × volume', '2000 × 281000 = 5.62 × 10⁸ kg'],
    keywords: ['mass', 'density', 'volume', '562000000', '5.62 × 10⁸'],
  },
  q3_e: {
    keyConcepts: ['F = mg', 'force = mass × gravitational field strength', '5.62 × 10⁷ N'],
    keywords: ['F = mg', 'force', '5.62 × 10⁷', '0.1', 'N'],
  },

  // Q4 — Experiment Design
  q4_a: {
    keyConcepts: ['read graph at 600 N weight', 'air speed ≈ 100 km/h'],
    keywords: ['100', 'km/h', 'graph', '600 N', 'read'],
  },
  q4_b: {
    keyConcepts: ['weight = IV', 'air speed = DV', 'CSA = control variable', 'mass/volume = control'],
    keywords: ['weight', 'independent', 'air speed', 'dependent', 'CSA', 'control'],
  },
  q4_c: {
    keyConcepts: ['as weight increases air speed increases', 'equilibrium: drag = weight', 'Weight = k × CSA × v²'],
    keywords: ['weight', 'increases', 'air speed', 'equilibrium', 'drag', 'v²'],
  },
  q4_d: {
    keyConcepts: ['same CSA for control', 'greatest weight range', 'at least 5 balls'],
    keywords: ['same CSA', 'range', '5 balls', 'control'],
  },
  q4_e: {
    keyConcepts: ['justify: same CSA as control', 'justify: wide range to establish relationship'],
    keywords: ['CSA', 'controlled', 'range', 'relationship', 'justify'],
  },
  q4_f: {
    keyConcepts: ['3–5 trials', 'reduces random error', 'calculate mean'],
    keywords: ['3', '5', 'trials', 'repeat', 'mean', 'random error'],
  },

  // Q5 — Data Processing
  q5_a: {
    keyConcepts: ['research question links CSA and air speed'],
    keywords: ['CSA', 'air speed', 'affect', 'research question'],
  },
  q5_b: {
    keyConcepts: ['area not radius', 'CSA = πr² = 38 cm²', 'appropriate units cm²'],
    keywords: ['area', 'radius', 'πr²', 'cm²', '38'],
  },
  q5_c: {
    keyConcepts: ['table headers with units', 'data in order', 'CSA in cm², speed in m/s'],
    keywords: ['header', 'unit', 'cm²', 'm/s', 'order', 'table'],
  },
  q5_d: {
    keyConcepts: ['Graph C: 1/v² vs CSA gives straight line', 'linearises inverse square relationship'],
    keywords: ['Graph C', 'straight line', '1/v²', 'CSA', 'linear'],
  },
  q5_e: {
    keyConcepts: ['straight LOBF through origin supports hypothesis', 'CSA ∝ 1/v²'],
    keywords: ['straight line', 'origin', 'LOBF', 'supported', 'hypothesis', 'proportional'],
  },
  q5_f: {
    keyConcepts: ['repeat measurements reduces random error', 'more data points over greater range'],
    keywords: ['repeat', 'mean', 'random error', 'more data', 'range'],
  },

  // Q6 — Boats Floating
  q6_a: {
    keyConcepts: ['scatter/line graph', 'weight on x-axis', 'volume below water on y-axis'],
    keywords: ['scatter', 'line graph', 'weight', 'x-axis', 'volume', 'y-axis'],
  },
  q6_b: {
    keyConcepts: ['straight line through data', 'passes through origin', 'directly proportional'],
    keywords: ['straight line', 'origin', 'proportional'],
  },
  q6_c: {
    keyConcepts: ['greater range gives more evidence', 'more trials reduces uncertainty', 'linked improvements'],
    keywords: ['range', 'trials', 'uncertainty', 'evidence', 'improvement'],
  },
  q6_d: {
    keyConcepts: ['RQ links IV and DV', 'IV = salt mass, DV = boat weight', 'control variables', 'method: systematic salt addition', 'data: 5 values, 3 trials, mean'],
    keywords: ['research question', 'IV', 'DV', 'salt', 'weight', 'control', 'method', 'trials', 'mean'],
  },

  // Q7 — Radioactivity
  q7_a: {
    keyConcepts: ['half-life long enough for imaging', 'half-life short enough to minimise patient exposure'],
    keywords: ['half-life', 'long enough', 'short enough', 'image', 'exposure'],
  },
  q7_b: {
    keyConcepts: ['gamma penetrates bone and skin', 'less ionising than alpha/beta', 'detected by external gamma camera'],
    keywords: ['penetrate', 'bone', 'skin', 'ionise', 'damage', 'gamma camera'],
  },
  q7_c: {
    keyConcepts: ['advantages and disadvantages of production method', 'linked to specific country', 'justified conclusion'],
    keywords: ['advantages', 'disadvantages', 'nuclear reactor', 'cyclotron', 'country', 'conclusion'],
  },

  // Q8 — Extended Evaluation
  q8_a: {
    keyConcepts: ['advantage: diagnoses and treats disease', 'disadvantage: contamination risk', 'political: government regulation', 'environmental: radioactive waste', 'conclusion: weigh benefits vs risks'],
    keywords: ['advantage', 'disadvantage', 'diagnose', 'treat', 'contamination', 'government', 'regulation', 'environmental', 'waste', 'conclusion'],
  },
}
