import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2021_V1: Record<string, ConceptEntry> = {

  // Q1 — Kinetic Theory & Brownian Motion
  q1_a: {
    keyConcepts: ['Brownian motion', 'particle model', 'visible vs invisible'],
    keywords: ['pollen grain', 'water molecule', 'microscope', 'particle size'],
  },
  q1_b: {
    keyConcepts: ['kinetic energy', 'temperature', 'particle speed'],
    keywords: ['higher temperature', 'particle motion', 'kinetic theory', 'collision frequency'],
  },
  q1_c: {
    keyConcepts: ['gas pressure', 'kinetic theory', 'temperature–pressure relationship'],
    keywords: ['20°C to 90°C', 'sealed container', 'collision frequency', 'force per unit area'],
  },
  q1_d: {
    keyConcepts: ['Brownian motion', 'random collision', 'particle model'],
    keywords: ['water molecules', 'pollen grain', 'random motion', 'unequal collisions'],
  },

  // Q2 — Energy Transformations & E = mc²
  q2_a: {
    keyConcepts: ['SI units', 'E = mc²', 'mass–energy equivalence'],
    keywords: ['joule', 'kilogram', 'metre per second', 'Einstein'],
  },
  q2_b: {
    keyConcepts: ['conservation of energy', 'Sankey diagram', 'energy transformation'],
    keywords: ['kinetic energy', 'thermal energy', 'sound energy', '900 J', '800 J', '90 J'],
  },
  q2_c: {
    keyConcepts: ['kinetic energy', 'velocity calculation', 'KE = ½mv²'],
    keywords: ['32 kg', '800 J', '7.1 m s⁻¹', 'significant figures'],
  },
  q2_d: {
    keyConcepts: ['E = mc²', 'antimatter', 'mass–energy conversion'],
    keywords: ['electron', 'positron', '9.11 × 10⁻³¹ kg', '3.0 × 10⁸ m s⁻¹', '1.64 × 10⁻¹³ J'],
  },

  // Q3 — Red-shift & Hubble's Law
  q3_a: {
    keyConcepts: ['electromagnetic waves', 'transverse waves', 'radio waves'],
    keywords: ['transverse', 'electromagnetic', 'no medium', 'wave type'],
  },
  q3_b: {
    keyConcepts: ['red-shift', 'Doppler effect', 'wavelength change'],
    keywords: ['moving away', 'wavelength increase', 'frequency decrease', 'graph selection'],
  },
  q3_c: {
    keyConcepts: ['red-shift', 'electromagnetic spectrum', 'visible light'],
    keywords: ['wavelength', 'red end', 'spectrum', 'receding star'],
  },
  q3_d: {
    keyConcepts: ['Hubble\'s law', 'line of best fit', 'graphing'],
    keywords: ['scatter graph', 'best fit line', 'distance', 'velocity'],
  },
  q3_e: {
    keyConcepts: ['proportional relationship', 'Hubble\'s law', 'graph analysis'],
    keywords: ['direct proportion', 'distance', 'recession velocity', 'straight line through origin'],
  },
  q3_f: {
    keyConcepts: ['Big Bang theory', 'expanding universe', 'Hubble\'s law'],
    keywords: ['galaxies receding', 'single origin', 'Big Bang', 'expanding universe'],
  },
  q3_g: {
    keyConcepts: ['data reliability', 'sample size', 'scientific estimation'],
    keywords: ['more data', 'accurate gradient', 'age of universe', '13.8 billion years'],
  },

  // Q4 — Ohm's Law & Non-Ohmic Conductors
  q4_a: {
    keyConcepts: ['data organisation', 'raw data table', 'unit conversion'],
    keywords: ['voltage', 'current', 'mA to A', '811 mA', '0.81 A', 'significant figures'],
  },
  q4_b: {
    keyConcepts: ['Ohm\'s law', 'ohmic conductor', 'hypothesis testing'],
    keywords: ['proportional', 'doubles', 'anomalous', '2.0 V', 'hypothesis support'],
  },
  q4_c: {
    keyConcepts: ['non-ohmic conductor', 'current–voltage graph', 'linearity'],
    keywords: ['curved graph', 'non-linear', 'component Y', 'non-ohmic'],
  },
  q4_d: {
    keyConcepts: ['data presentation', 'graph vs table', 'visual analysis'],
    keywords: ['visual trend', 'linear', 'non-linear', 'graph advantage'],
  },
  q4_e: {
    keyConcepts: ['resistance calculation', 'R = V/I', 'graph reading'],
    keywords: ['5.0 Ω', '15 Ω', '1.0 V', '0.40 A', 'Ohm\'s law'],
  },
  q4_f: {
    keyConcepts: ['circuit diagram', 'series circuit', 'ammeter placement'],
    keywords: ['series', 'resistors', 'ammeter', 'circuit symbol'],
  },

  // Q5 — Wire Resistance
  q5_a: {
    keyConcepts: ['resistivity', 'gradient interpretation', 'R = ρl/A'],
    keywords: ['gradient', 'ρ/A', 'resistance vs length', 'graph interpretation'],
  },
  q5_b: {
    keyConcepts: ['gradient calculation', 'resistance graph', 'units'],
    keywords: ['0.065 Ω m⁻¹', 'ΔR/Δl', 'best-fit line', 'Ω m⁻¹'],
  },
  q5_c: {
    keyConcepts: ['systematic error', 'y-intercept', 'graph evidence'],
    keywords: ['y-intercept', 'non-zero', 'systematic error', 'R = 0 at l = 0'],
  },
  q5_d: {
    keyConcepts: ['gradient validity', 'systematic error', 'constant offset'],
    keywords: ['constant cancels', 'differences', 'gradient unaffected', 'invalid statement'],
  },
  q5_e: {
    keyConcepts: ['error source', 'systematic error', 'measuring instruments'],
    keywords: ['zero error', 'calibration', 'connecting wires', 'crocodile clips'],
  },
  q5_f: {
    keyConcepts: ['resistance vs area', 'electron pathways', 'hypothesis formulation'],
    keywords: ['R ∝ 1/A', 'inversely proportional', 'charge carriers', 'electron pathways'],
  },

  // Q6 — Series Circuit Investigation Design
  q6_a: {
    keyConcepts: ['circuit diagram', 'series connection', 'ammeter'],
    keywords: ['resistors in series', 'ammeter in series', 'circuit symbol'],
  },
  q6_b: {
    keyConcepts: ['investigation design', 'Criterion B', 'series circuit', 'current vs resistors'],
    keywords: ['research question', 'hypothesis', 'IV', 'DV', 'CV', 'method', 'sufficient data'],
  },

  // Q7 — Renewable Energy Sources
  q7_a: {
    keyConcepts: ['renewable energy', 'disadvantages', 'energy classification'],
    keywords: ['geothermal', 'biomass', 'tidal', 'hydrogen sulfide', 'CO₂', 'intermittent'],
  },
  q7_b: {
    keyConcepts: ['energy transfer', 'energy chain', 'biomass power station'],
    keywords: ['chemical potential', 'thermal', 'kinetic', 'electrical', 'energy chain'],
  },
  q7_c: {
    keyConcepts: ['energy evaluation', 'Criterion D', 'renewable energy decision'],
    keywords: ['advantages', 'disadvantages', 'recommendation', 'country specific'],
  },

  // Q8 — Malta Energy Options
  q8_a: {
    keyConcepts: ['non-renewable energy', 'nuclear fuel', 'uranium'],
    keywords: ['nuclear', 'uranium', 'finite', 'non-renewable', 'option 3'],
  },
  q8_b: {
    keyConcepts: ['energy policy', 'evaluation', 'Criterion D', 'political and economic factors'],
    keywords: ['Malta', 'solar', 'wind', 'nuclear', 'political', 'economic', 'recommendation'],
  },

}
