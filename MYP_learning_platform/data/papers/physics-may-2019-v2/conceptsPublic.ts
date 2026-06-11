import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2019_V2: Record<string, ConceptEntry> = {
  // Q1 — Heat Transfer (Insulated Lunchbox)
  q1_a: {
    keyConcepts: ['convection: warm fluid rises and transfers heat', 'radiation: heat transferred without a medium', 'conduction: heat through solid contact'],
    keywords: ['convection', 'radiation', 'conduction', 'heat transfer'],
  },
  q1_b: {
    keyConcepts: ['temperature measured in K or °C', 'heat measured in joules (J)'],
    keywords: ['kelvin', 'K', 'celsius', '°C', 'joule', 'J'],
  },
  q1_c: {
    keyConcepts: ['insulating foam: poor conductor → prevents conduction', 'sealed lid: prevents convection'],
    keywords: ['insulating foam', 'poor conductor', 'conduction', 'sealed lid', 'airtight', 'convection'],
  },

  // Q2 — Inkjet Printer (Electrostatics)
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
    keyConcepts: ['electrostatic force upward toward deflector plate', 'weight acts downward', 'arrows from droplet surface'],
    keywords: ['electrostatic force', 'upward', 'weight', 'downward', 'arrows', 'ink droplet'],
  },
  q2_e: {
    keyConcepts: ['electrostatic force decreases with distance', 'close proximity needed for sufficient deflection'],
    keywords: ['distance', 'force decreases', 'proximity', 'deflect', 'sufficient'],
  },

  // Q3 — Gravity (Comet Halley)
  q3_a: {
    keyConcepts: ['asteroid belt between Mars and Jupiter', 'Mercury = innermost planet', 'Saturn = 6th planet with rings'],
    keywords: ['asteroid belt', 'Mars', 'Jupiter', 'Mercury', 'Saturn', 'rings'],
  },
  q3_b: {
    keyConcepts: ['gravitational force depends on distance between objects and their masses'],
    keywords: ['distance', 'mass', 'gravitational force', 'factor'],
  },
  q3_c: {
    keyConcepts: ['gravitational force always directed toward Sun', 'force greater when closer'],
    keywords: ['toward Sun', 'arrow', 'closer', 'greater force', 'farther', 'weaker force'],
  },
  q3_d: {
    keyConcepts: ['mass = density × volume', 'mass = 500 × 830 000 = 4.15 × 10⁸ kg'],
    keywords: ['mass = ρ × V', '4.15 × 10⁸ kg', '500', '830000'],
  },
  q3_e: {
    keyConcepts: ['weight F = mg', 'F = 4.15 × 10⁸ × 0.025 = 1.04 × 10⁷ N'],
    keywords: ['F = mg', '1.04 × 10⁷ N', '0.025', '4.15 × 10⁸'],
  },

  // Q4 — Hot Air Balloon (Design)
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
    keyConcepts: ['same weight = controlled variable', 'wide CSA range = establishes relationship', 'regular intervals = identifies pattern'],
    keywords: ['controlled', 'range', 'relationship', 'pattern', 'intervals'],
  },
  q4_f: {
    keyConcepts: ['3–5 trials per point, take mean, reduces random error'],
    keywords: ['3 trials', '5 trials', 'mean', 'random error', 'reliability'],
  },

  // Q5 — Balloon CSA Data Processing (Crit C)
  q5_a: {
    keyConcepts: ['research question must link IV (CSA) to DV (air speed)'],
    keywords: ['CSA', 'air speed', 'affect', 'research question'],
  },
  q5_b: {
    keyConcepts: ['CSA = πr² = π × (4.9)² ≈ 76 cm²'],
    keywords: ['CSA', 'πr²', '4.9 cm', '76 cm²', 'area'],
  },
  q5_c: {
    keyConcepts: ['table: CSA / cm² and Air speed / m s⁻¹ headers, units in headers, ordered data, 76 cm² included'],
    keywords: ['CSA / cm²', 'Air speed / m s⁻¹', 'table', 'ordered', '76'],
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

  // Q6 — Ice Blocks Floating (Crit B design)
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
    keywords: ['range', 'evidence', 'repeat', 'mean', 'random error', 'improvement'],
  },
  q6_d: {
    keyConcepts: ['research question, IV/DV/2CVs, equipment list, step-by-step method, 5+ values, 3 trials, mean'],
    keywords: ['research question', 'IV', 'DV', 'CV', 'equipment', 'method', '5 values', 'mean', 'trials'],
  },

  // Q7 — F-18 PET Scanning (Crit D)
  q7_a: {
    keyConcepts: ['half-life must be: long enough for PET scan procedure, short enough to minimise post-scan exposure'],
    keywords: ['long enough', 'scan', 'short enough', 'exposure', 'half-life', '110 minutes'],
  },
  q7_b: {
    keyConcepts: ['gamma penetrates body → external detection; low ionising power → less tissue damage'],
    keywords: ['gamma', 'penetrate', 'external detection', 'ionising power', 'tissue damage'],
  },
  q7_c: {
    keyConcepts: ['method, country, advantages, disadvantages, conclusion contextualised by country'],
    keywords: ['method', 'country', 'advantages', 'disadvantages', 'conclusion', 'half-life', 'cyclotron'],
  },

  // Q8 — Radioactive Materials Evaluation (Crit D)
  q8_a: {
    keyConcepts: ['advantage, disadvantage (Brazil incident), political implications, environmental implications, concluding appraisal'],
    keywords: ['advantage', 'disadvantage', 'Brazil', 'political', 'IAEA', 'environmental', 'contamination', 'conclusion'],
  },
}
