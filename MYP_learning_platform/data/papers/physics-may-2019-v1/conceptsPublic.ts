import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2019_V1: Record<string, ConceptEntry> = {
  // Q1 — Heat Transfer (Thermos Flask)
  q1_a: {
    keyConcepts: ['convection: warm fluid rises and transfers heat', 'radiation: heat transferred without a medium', 'conduction: heat through solid contact'],
    keywords: ['convection', 'radiation', 'conduction', 'heat transfer'],
  },
  q1_b: {
    keyConcepts: ['temperature measured in K or °C', 'heat measured in joules (J)'],
    keywords: ['kelvin', 'K', 'celsius', '°C', 'joule', 'J'],
  },
  q1_c: {
    keyConcepts: ['vacuum prevents conduction and convection (no particles)', 'silvered surface reflects infrared radiation'],
    keywords: ['vacuum', 'no particles', 'silvered', 'reflective', 'infrared', 'radiation', 'conduction', 'convection'],
  },

  // Q2 — Laser Printer Toner (Electrostatics)
  q2_a: {
    keyConcepts: ['helium atom: 2 protons and 2 neutrons in nucleus, 2 electrons outside'],
    keywords: ['nucleus', 'proton', 'neutron', 'electron', 'helium', '2p', '2n', '2e'],
  },
  q2_b: {
    keyConcepts: ['electrostatic force acts between charged objects', 'unlike charges attract'],
    keywords: ['electrostatic force', 'attraction', 'charges', 'unlike'],
  },
  q2_c: {
    keyConcepts: ['unlike/opposite charges attract via electrostatic force'],
    keywords: ['unlike charges', 'opposite charges', 'attract', 'electrostatic force'],
  },
  q2_d: {
    keyConcepts: ['electrostatic force upward toward positively charged drum', 'weight acts downward', 'arrows originate from particle surface'],
    keywords: ['electrostatic force', 'upward', 'weight', 'downward', 'arrows', 'toner particle'],
  },
  q2_e: {
    keyConcepts: ['electrostatic force decreases with distance', 'close proximity needed to overcome weight'],
    keywords: ['distance', 'electrostatic force decreases', 'proximity', 'overcome weight', 'stick'],
  },

  // Q3 — Gravity (Apophis)
  q3_a: {
    keyConcepts: ['asteroid belt between Mars and Jupiter', 'Mercury = innermost planet', 'Saturn = 6th planet with rings'],
    keywords: ['asteroid belt', 'Mars', 'Jupiter', 'Mercury', 'Saturn', 'rings'],
  },
  q3_b: {
    keyConcepts: ['gravitational force depends on distance between objects and their masses'],
    keywords: ['distance', 'mass', 'gravitational force', 'factor'],
  },
  q3_c: {
    keyConcepts: ['gravitational force always directed toward Sun', 'force greater when closer (shorter distance)'],
    keywords: ['toward Sun', 'arrow', 'force greater closer', 'force weaker farther'],
  },
  q3_d: {
    keyConcepts: ['mass = density × volume', 'mass = 2500 × 5600 = 1.4 × 10⁷ kg'],
    keywords: ['mass = ρ × V', '1.4 × 10⁷ kg', '2500', '5600'],
  },
  q3_e: {
    keyConcepts: ['weight F = mg', 'F = 1.4 × 10⁷ × 0.42 = 5.88 × 10⁶ N'],
    keywords: ['F = mg', '5.88 × 10⁶ N', '0.42', '1.4 × 10⁷'],
  },

  // Q4 — Parachute Testing (Design)
  q4_a: {
    keyConcepts: ['read graph: at weight = 600 N, air speed ≈ 100 km/h'],
    keywords: ['100 km/h', '600 N', 'read graph'],
  },
  q4_b: {
    keyConcepts: ['IV = weight; DV = air speed; CVs = CSA, mass, volume'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'weight', 'air speed', 'CSA', 'mass', 'volume'],
  },
  q4_c: {
    keyConcepts: ['W ∝ v² with CSA controlled → v ∝ √W', 'as weight increases air speed increases'],
    keywords: ['W ∝ v²', 'v ∝ √W', 'hypothesis', 'CSA controlled', 'air speed increases'],
  },
  q4_d: {
    keyConcepts: ['same weight (control), greatest range of CSA, 5+ models, regular intervals'],
    keywords: ['same weight', 'greatest range', 'CSA', 'regular intervals', '5 models'],
  },
  q4_e: {
    keyConcepts: ['same weight = controlled variable', 'wide range = establishes relationship', 'regular intervals = identifies pattern'],
    keywords: ['controlled', 'range', 'relationship', 'pattern', 'intervals'],
  },
  q4_f: {
    keyConcepts: ['3–5 trials per point, take mean, reduces random error'],
    keywords: ['3 trials', '5 trials', 'mean', 'random error', 'reliability'],
  },

  // Q5 — Parachute CSA Data Processing (Crit C)
  q5_a: {
    keyConcepts: ['research question must link IV (CSA) to DV (air speed)'],
    keywords: ['CSA', 'air speed', 'affect', 'research question'],
  },
  q5_b: {
    keyConcepts: ['CSA = πr² = π × (4.0)² ≈ 50 cm²'],
    keywords: ['CSA', 'πr²', '4.0 cm', '50 cm²', 'area'],
  },
  q5_c: {
    keyConcepts: ['table: CSA / cm² and Air speed / m s⁻¹ headers, units in headers, ordered data'],
    keywords: ['CSA / cm²', 'Air speed / m s⁻¹', 'table', 'ordered', 'decimal places'],
  },
  q5_d: {
    keyConcepts: ['Graph C (1/v² vs CSA) gives straight line through origin if CSA ∝ 1/v²'],
    keywords: ['Graph C', '1/v²', 'CSA', 'straight line', 'origin', 'proportional'],
  },
  q5_e: {
    keyConcepts: ['Graph C straight line through origin → CSA ∝ 1/v² → hypothesis supported'],
    keywords: ['straight line', 'origin', 'hypothesis', 'supported', 'Graph C', 'anomalies'],
  },
  q5_f: {
    keyConcepts: ['repeat measurements (3+ trials), take mean, reduces random error'],
    keywords: ['repeat', 'mean', 'random error', 'reliability', 'improvement'],
  },

  // Q6 — Logs Floating (Crit B design)
  q6_a: {
    keyConcepts: ['scatter graph, weight (N) on x-axis, volume below water (cm³) on y-axis'],
    keywords: ['scatter graph', 'weight', 'N', 'volume', 'cm³', 'x-axis', 'y-axis'],
  },
  q6_b: {
    keyConcepts: ['straight LOBF passing through origin = directly proportional'],
    keywords: ['straight line', 'LOBF', 'origin', 'proportional'],
  },
  q6_c: {
    keyConcepts: ['wider range of weights → more evidence; repeats + mean → reduce random error'],
    keywords: ['wider range', 'evidence', 'repeat', 'mean', 'random error', 'improvement'],
  },
  q6_d: {
    keyConcepts: ['research question, IV/DV/2CVs, equipment list, step-by-step method, 5+ values, 3 trials, mean'],
    keywords: ['research question', 'IV', 'DV', 'CV', 'equipment', 'method', '5 values', 'mean', 'trials'],
  },

  // Q7 — I-131 Medical Isotope (Crit D)
  q7_a: {
    keyConcepts: ['half-life must be: long enough for treatment, short enough to minimise long-term exposure'],
    keywords: ['long enough', 'treatment', 'short enough', 'exposure', 'half-life'],
  },
  q7_b: {
    keyConcepts: ['gamma penetrates body → external detection; low ionising power → less tissue damage'],
    keywords: ['gamma', 'penetrate', 'external detection', 'ionising power', 'tissue damage'],
  },
  q7_c: {
    keyConcepts: ['method, country, advantages, disadvantages, conclusion with country context'],
    keywords: ['method', 'country', 'advantages', 'disadvantages', 'conclusion', 'half-life', 'cost'],
  },

  // Q8 — Radioactive Materials Evaluation (Crit D)
  q8_a: {
    keyConcepts: ['advantage, disadvantage, political implications, environmental implications, concluding appraisal'],
    keywords: ['advantage', 'disadvantage', 'political', 'regulation', 'IAEA', 'environmental', 'waste', 'conclusion'],
  },
}
