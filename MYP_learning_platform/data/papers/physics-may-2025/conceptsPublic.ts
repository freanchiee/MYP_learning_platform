/**
 * CLIENT-SAFE concept data for Physics May 2025.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q6_e'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2025: Record<string, ConceptEntry> = {
  // Q1 — Defibrillators
  q1_b: {
    keyConcepts: ['E = VIt', 'current formula', 'time conversion', '16.7 A'],
    keywords: ['energy', 'voltage', 'current', 'time', 'milliseconds', '0.03', 'E=VIt', 'I=', 'ampere'],
  },
  q1_c: {
    keyConcepts: ['electrical contact', 'resistance reduced', 'conduction'],
    keywords: ['gel', 'skin', 'resistance', 'contact', 'conduct', 'impedance', 'burns', 'improve'],
  },
  q1_d: {
    keyConcepts: ['adhesive hands-free', 'insulating prevents shock'],
    keywords: ['adhesive', 'hands free', 'insulating', 'electric shock', 'safety', 'doctor', 'attached', 'continuous'],
  },

  // Q2 — Refraction
  q2_a: {
    keyConcepts: ['f = v / λ', 'convert nm to m', '5.5 × 10¹⁴ Hz'],
    keywords: ['frequency', 'wavelength', 'speed', 'nanometre', '10⁻⁹', '550', '3×10⁸', 'divide', 'Hz'],
  },
  q2_d: {
    keyConcepts: ['refraction at boundary', 'bends away from normal', 'apparent position', 'brain assumes straight line'],
    keywords: ['refract', 'bend', 'normal', 'boundary', 'water', 'air', 'straight line', 'apparent', 'image', 'brain', 'eye'],
  },
  q2_e: {
    keyConcepts: ['diverging lens', 'spreads rays', 'shifts focal point', 'meets retina'],
    keywords: ['diverge', 'spread', 'concave', 'focal point', 'retina', 'converge', 'short-sighted'],
  },

  // Q3 — Nuclear Fission
  q3_a: {
    keyConcepts: ['greenhouse gases', 'non-renewable', 'air pollution', 'climate change'],
    keywords: ['CO2', 'carbon dioxide', 'greenhouse', 'pollution', 'finite', 'non-renewable', 'climate', 'warming'],
  },
  q3_b: {
    keyConcepts: ['one more neutron', 'same protons', 'same element'],
    keywords: ['neutron', 'proton', 'mass number', 'atomic number', 'isotope', 'one more', 'extra'],
  },
  q3_d: {
    keyConcepts: ['m = E / c²', '3.11 × 10⁻²⁸ kg', 'mass-energy equivalence'],
    keywords: ['E=mc2', 'mass defect', 'c squared', 'kg', 'rearrange', 'divide'],
  },
  q3_e: {
    keyConcepts: ['number = total energy / energy per fission', '3.46 × 10²⁰'],
    keywords: ['divide', 'gigajoule', '10⁹', 'fission', 'reactions', 'number'],
  },
  q3_f: {
    keyConcepts: ['efficiency = useful / total', 'total power = useful / efficiency', '4.3 × 10⁹ W'],
    keywords: ['efficiency', 'useful', 'total', 'divide', '0.35', '35%', 'watt', 'power'],
  },

  // Q4 — Motion
  q4_a: {
    keyConcepts: ['f = 1/T', '10 Hz'],
    keywords: ['frequency', 'period', 'time interval', '0.10', '1/0.10', '10', 'hertz'],
  },
  q4_c: {
    keyConcepts: ['gradient = Δv/Δt', 'acceleration', 'unit cm s⁻²'],
    keywords: ['gradient', 'slope', 'rise', 'run', 'velocity', 'time', 'acceleration', 'ms-2', 'cm/s'],
  },
  q4_d: {
    keyConcepts: ['steeper gradient', 'greater acceleration', 'more elastic energy', 'greater force'],
    keywords: ['steeper', 'gradient', 'acceleration', 'force', 'elastic', 'energy', 'greater', 'more turns'],
  },
  q4_e: {
    keyConcepts: ['human reaction time', 'less precise', 'fewer data points', 'parallax error'],
    keywords: ['reaction time', 'precision', 'parallax', 'data points', 'resolution', 'human error', 'stopwatch', 'accurate'],
  },

  // Q5 — Investigation Design
  q5_a: {
    keyConcepts: ['independent variable', 'dependent variable', 'control variable', 'hypothesis', 'method', 'sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'variable', 'hypothesis', 'if', 'because', 'repeat', 'equipment', 'measure', 'fixed'],
  },

  // Q6 — Seebeck Effect / TEG
  q6_a: {
    keyConcepts: ['research question', 'temperature difference', 'voltage', 'affect'],
    keywords: ['how does', 'temperature', 'voltage', 'affect', 'relationship', 'TEG', 'investigate'],
  },
  q6_b: {
    keyConcepts: ['thermometer', 'voltmeter'],
    keywords: ['thermometer', 'voltmeter', 'temperature', 'voltage', 'measure'],
  },
  q6_e: {
    keyConcepts: ['not directly proportional', 'line does not pass through origin', 'ratio not constant'],
    keywords: ['not proportional', 'origin', 'intercept', 'ratio', 'constant', 'validity', 'evidence'],
  },
  q6_f: {
    keyConcepts: ['gradient of graph', 'ΔV/ΔT', 'S = −gradient'],
    keywords: ['gradient', 'slope', 'graph', 'rise', 'run', 'Seebeck', 'negative', 'coefficient'],
  },
  q6_g: {
    keyConcepts: ['P = IV', '0.0437 W', 'watt'],
    keywords: ['power', 'current', 'voltage', 'P=IV', 'multiply', 'watt', '0.04'],
  },
  q6_h: {
    keyConcepts: ['reduce mass', 'increase force', 'F = ma', 'Newton second law'],
    keywords: ['mass', 'force', 'F=ma', 'Newton', 'acceleration', 'reduce', 'increase', 'net force'],
  },
  q6_k: {
    keyConcepts: ['if IV increases', 'then DV changes', 'scientific reasoning', 'because'],
    keywords: ['if', 'then', 'because', 'hypothesis', 'variable', 'increase', 'decrease', 'proportional'],
  },

  // Q7 — Satellites
  q7_c: {
    keyConcepts: ['scientific challenge', 'political implication', 'economic implication', 'concluding appraisal'],
    keywords: ['orbit', 'speed', 'gravity', 'sovereignty', 'Clarke belt', 'monopoly', 'cost', 'benefit', 'positive', 'negative', 'conclude'],
  },

  // Q8 — Space Elevator
  q8_: {
    keyConcepts: ['benefit of space elevator', 'limitation of space elevator', 'conclusion'],
    keywords: ['benefit', 'limitation', 'material', 'cost', 'access', 'electricity', 'debris', 'conclusion', 'should', 'because'],
  },
}
