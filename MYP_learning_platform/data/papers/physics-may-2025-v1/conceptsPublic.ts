/**
 * CLIENT-SAFE concept data for Physics May 2025 — Variant 1.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q6_e'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2025_V1: Record<string, ConceptEntry> = {
  // Q1 — Electrostatic precipitator
  q1_b: {
    keyConcepts: ['E = VIt', 'current formula', 'time conversion', '10 A'],
    keywords: ['energy', 'voltage', 'current', 'time', 'milliseconds', '0.04', 'E=VIt', 'ampere'],
  },
  q1_c: {
    keyConcepts: ['charged particle attracted to plate', 'electric force', 'collection'],
    keywords: ['charge', 'attract', 'opposite', 'plate', 'force', 'field', 'collect'],
  },
  q1_d: {
    keyConcepts: ['plate-type large area', 'tubular uniform field'],
    keywords: ['area', 'volume', 'flow', 'uniform', 'field', 'wire', 'escape'],
  },

  // Q2 — Refraction
  q2_a: {
    keyConcepts: ['f = v / λ', 'convert nm to m', '5.7 × 10¹⁴ Hz'],
    keywords: ['frequency', 'wavelength', 'speed', 'nanometre', '10⁻⁹', '525', '3×10⁸', 'Hz'],
  },
  q2_d: {
    keyConcepts: ['refraction at boundary', 'bends away from normal', 'apparent position', 'brain assumes straight line'],
    keywords: ['refract', 'bend', 'normal', 'boundary', 'water', 'air', 'straight line', 'apparent', 'brain', 'eye'],
  },
  q2_e: {
    keyConcepts: ['diverging lens', 'spreads rays', 'shifts focal point', 'meets retina'],
    keywords: ['diverge', 'spread', 'concave', 'focal point', 'retina', 'short-sighted'],
  },

  // Q3 — Nuclear Fission
  q3_a: {
    keyConcepts: ['greenhouse gases', 'non-renewable', 'air pollution', 'climate change'],
    keywords: ['CO2', 'carbon dioxide', 'greenhouse', 'pollution', 'finite', 'non-renewable', 'climate'],
  },
  q3_b: {
    keyConcepts: ['one more neutron', 'same protons', 'isotope'],
    keywords: ['neutron', 'proton', 'mass number', 'isotope', 'one more', 'extra'],
  },
  q3_d: {
    keyConcepts: ['m = E / c²', '3.6 × 10⁻²⁸ kg', 'mass-energy equivalence'],
    keywords: ['E=mc2', 'mass defect', 'c squared', 'kg', 'rearrange', 'divide'],
  },
  q3_e: {
    keyConcepts: ['number = total energy / energy per fission', '3.6 × 10²⁰'],
    keywords: ['divide', 'gigajoule', '10⁹', 'fission', 'reactions', 'number'],
  },
  q3_f: {
    keyConcepts: ['efficiency = useful / total', 'total power = useful / efficiency', '4.4 × 10⁹ W'],
    keywords: ['efficiency', 'useful', 'total', 'divide', '0.32', '32%', 'watt', 'power'],
  },

  // Q4 — Balloon car / Motion
  q4_a: {
    keyConcepts: ['f = 1/T', '12.5 Hz'],
    keywords: ['frequency', 'period', '1/T', '0.08', '12.5', 'Hz'],
  },
  q4_c: {
    keyConcepts: ['gradient = Δv/Δt', 'acceleration', '150 cm/s²'],
    keywords: ['gradient', 'acceleration', 'Δv', 'Δt', '150', '1.5', 'slope'],
  },
  q4_d: {
    keyConcepts: ['steeper line', 'greater acceleration', 'more force/energy', 'F = ma'],
    keywords: ['steeper', 'gradient', 'acceleration', 'force', 'energy', 'more air'],
  },
  q4_e: {
    keyConcepts: ['reaction-time error', 'fewer data points', 'lower precision'],
    keywords: ['reaction', 'time', 'parallax', 'precise', 'frames', 'precision', 'error'],
  },

  // Q5 — Balloon-car investigation design
  q5_a: {
    keyConcepts: ['IV/DV/control', 'hypothesis', 'method', 'sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'hypothesis', 'method', 'repeat', 'range'],
  },

  // Q6 — Solar (photovoltaic) cell
  q6_c: {
    keyConcepts: ['subtract zero error', '5.8 klux'],
    keywords: ['zero error', 'subtract', '6.0', '0.2', '5.8', 'klux'],
  },
  q6_e: {
    keyConcepts: ['not directly proportional', 'ratio not constant', 'curve / saturates'],
    keywords: ['proportional', 'ratio', 'constant', 'curve', 'saturate', 'origin', 'decrease'],
  },
  q6_f: {
    keyConcepts: ['gradient of line of best fit', 'ΔV/Δintensity'],
    keywords: ['gradient', 'rise', 'run', 'two points', 'line of best fit', 'slope'],
  },
  q6_g: {
    keyConcepts: ['P = VI', '0.055 W'],
    keywords: ['P=VI', '0.42', '0.13', '0.055', 'watt', 'power'],
  },
  q6_h: {
    keyConcepts: ['reduce mass/friction', 'greater resultant force', 'F = ma'],
    keywords: ['mass', 'friction', 'force', 'F=ma', 'acceleration', 'resultant'],
  },
  q6_k: {
    keyConcepts: ['hypothesis links IV to DV', 'if-then-because', 'scientific reason'],
    keywords: ['if', 'then', 'because', 'force', 'thrust', 'scientific'],
  },

  // Q7 — Satellites / GNSS
  q7_c: {
    keyConcepts: ['scientific challenges', 'political implications', 'economic implications', 'concluding appraisal'],
    keywords: ['gravity', 'thrust', 'orbit', 'atomic clock', 'debris', 'security', 'monopoly', 'reliance', 'conclude'],
  },

  // Q8 — Fusion power plant
  q8_: {
    keyConcepts: ['benefits clean limitless', 'limitations cost/temperature', 'justified conclusion'],
    keywords: ['clean', 'greenhouse', 'limitless', 'waste', 'temperature', 'cost', 'conclusion', 'justify'],
  },
}
