/**
 * CLIENT-SAFE concept data for Physics May 2025 — Variant 2.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q6_e'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2025_V2: Record<string, ConceptEntry> = {
  // Q1 — Electrostatic paint spraying
  q1_b: {
    keyConcepts: ['E = VIt', 'current formula', 'time conversion', '8 A'],
    keywords: ['energy', 'voltage', 'current', 'time', 'milliseconds', '0.05', 'E=VIt', 'ampere'],
  },
  q1_c: {
    keyConcepts: ['charged droplet attracted to panel', 'electric force', 'even coat'],
    keywords: ['charge', 'attract', 'opposite', 'panel', 'force', 'field', 'even', 'coat'],
  },
  q1_d: {
    keyConcepts: ['corona simple/strong charge', 'bell fine even atomisation'],
    keywords: ['simple', 'sharp', 'electrode', 'spin', 'atomise', 'fine', 'area', 'waste'],
  },

  // Q2 — Refraction
  q2_a: {
    keyConcepts: ['f = v / λ', 'convert nm to m', '6.7 × 10¹⁴ Hz'],
    keywords: ['frequency', 'wavelength', 'speed', 'nanometre', '10⁻⁹', '450', '3×10⁸', 'Hz'],
  },
  q2_d: {
    keyConcepts: ['refraction at boundary', 'bends away from normal', 'apparent position', 'brain assumes straight line'],
    keywords: ['refract', 'bend', 'normal', 'boundary', 'water', 'air', 'straight line', 'apparent', 'shallower', 'brain', 'eye'],
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
    keyConcepts: ['m = E / c²', '3.2 × 10⁻²⁸ kg', 'mass-energy equivalence'],
    keywords: ['E=mc2', 'mass defect', 'c squared', 'kg', 'rearrange', 'divide'],
  },
  q3_e: {
    keyConcepts: ['number = total energy / energy per fission', '3.6 × 10²⁰'],
    keywords: ['divide', 'gigajoule', '10⁹', 'fission', 'reactions', 'number'],
  },
  q3_f: {
    keyConcepts: ['efficiency = useful / total', 'total power = useful / efficiency', '4.2 × 10⁹ W'],
    keywords: ['efficiency', 'useful', 'total', 'divide', '0.38', '38%', 'watt', 'power'],
  },

  // Q4 — Wind-up car / Motion
  q4_a: {
    keyConcepts: ['f = 1/T', '20 Hz'],
    keywords: ['frequency', 'period', '1/T', '0.05', '20', 'Hz'],
  },
  q4_c: {
    keyConcepts: ['gradient = Δv/Δt', 'acceleration', '160 cm/s²'],
    keywords: ['gradient', 'acceleration', 'Δv', 'Δt', '160', '1.6', 'slope'],
  },
  q4_d: {
    keyConcepts: ['steeper line', 'greater acceleration', 'more elastic energy/force', 'F = ma'],
    keywords: ['steeper', 'gradient', 'acceleration', 'force', 'energy', 'spring', 'more turns'],
  },
  q4_e: {
    keyConcepts: ['reaction-time error', 'fewer data points', 'lower precision'],
    keywords: ['reaction', 'time', 'parallax', 'precise', 'frames', 'precision', 'error'],
  },

  // Q5 — Wind-up car investigation design
  q5_a: {
    keyConcepts: ['IV/DV/control', 'hypothesis', 'method', 'sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'hypothesis', 'method', 'repeat', 'range', 'turns'],
  },

  // Q6 — Wind-turbine generator
  q6_c: {
    keyConcepts: ['subtract calibration error', '4.6 m/s'],
    keywords: ['calibration error', 'subtract', '5.0', '0.4', '4.6', 'm/s'],
  },
  q6_e: {
    keyConcepts: ['not directly proportional', 'ratio not constant', 'curve / levels off'],
    keywords: ['proportional', 'ratio', 'constant', 'curve', 'level off', 'origin', 'decrease'],
  },
  q6_f: {
    keyConcepts: ['gradient of line of best fit', 'ΔV/Δwind speed'],
    keywords: ['gradient', 'rise', 'run', 'two points', 'line of best fit', 'slope'],
  },
  q6_g: {
    keyConcepts: ['P = VI', '0.072 W'],
    keywords: ['P=VI', '0.48', '0.15', '0.072', 'watt', 'power'],
  },
  q6_h: {
    keyConcepts: ['reduce mass/friction', 'greater resultant force', 'F = ma'],
    keywords: ['mass', 'friction', 'force', 'F=ma', 'acceleration', 'resultant'],
  },
  q6_k: {
    keyConcepts: ['hypothesis links IV to DV', 'if-then-because', 'scientific reason'],
    keywords: ['if', 'then', 'because', 'force', 'thrust', 'scientific'],
  },

  // Q7 — Satellites / Starlink mega-constellation
  q7_c: {
    keyConcepts: ['scientific challenges', 'political implications', 'economic implications', 'concluding appraisal'],
    keywords: ['gravity', 'thrust', 'orbit', 'leo', 'debris', 'security', 'monopoly', 'reliance', 'conclude'],
  },

  // Q8 — Crewed Mars base
  q8_: {
    keyConcepts: ['benefits science/leadership', 'limitations cost/risk', 'justified conclusion'],
    keywords: ['science', 'technology', 'leader', 'cost', 'radiation', 'risk', 'conclusion', 'justify'],
  },
}
