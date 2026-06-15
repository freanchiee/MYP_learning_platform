/**
 * CLIENT-SAFE concept data for Physics November 2023 — Variant 2.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_e', 'q3_d'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2023_V2: Record<string, ConceptEntry> = {
  // Q1 — Astronomy & units
  q1_c: {
    keyConcepts: ['star produces light', 'nuclear fusion', 'planet reflects light', 'size/mass difference'],
    keywords: ['fusion', 'produces', 'own light', 'reflects', 'larger', 'more massive'],
  },
  q1_d: {
    keyConcepts: ['hot dense point', 'expanding universe', 'galaxies moving away', 'supports expansion'],
    keywords: ['big bang', 'expanding', 'hot', 'dense', 'singularity', 'receding', 'faster', 'further'],
  },
  q1_e: {
    keyConcepts: ['convenient for large distances', 'smaller number', 'confusion with SI', 'calculation errors'],
    keywords: ['convenient', 'smaller number', 'easier', 'confusion', 'error', 'calculation', 'parsec'],
  },

  // Q2 — Cobalt-60 half-life
  q2_a: {
    keyConcepts: ['protons = atomic number', '27 protons', '33 neutrons', 'mass − atomic number'],
    keywords: ['27', '33', 'protons', 'neutrons', 'atomic number', 'mass number', 'subtract'],
  },
  q2_c: {
    keyConcepts: ['half life', '5.3 years', 'time for 50 percent'],
    keywords: ['5.3', 'half', '50%', 'years', 'graph'],
  },
  q2_d: {
    keyConcepts: ['25 percent', 'two half-lives', '10.6 years'],
    keywords: ['25%', '10.6', '11', '2 half-lives', 'years'],
  },
  q2_e: {
    keyConcepts: ['half-life too short', 'undetectable after decades', 'cannot date millions of years'],
    keywords: ['incorrect', 'too short', '5.3 years', 'undetectable', 'cannot', 'fossils'],
  },

  // Q3 — Incandescent vs LED torch
  q3_a: {
    keyConcepts: ['95 joules', 'thermal energy', 'conservation of energy', '100 minus 5'],
    keywords: ['95', 'thermal', 'heat', 'light', '5', 'conservation'],
  },
  q3_c: {
    keyConcepts: ['P = IV', '0.60 watts', 'power formula'],
    keywords: ['p=iv', '0.60', '0.6', 'watts', '10', '0.06', 'power'],
  },
  q3_d: {
    keyConcepts: ['efficiency formula', '5 percent incandescent', '35 percent LED', 'LED more efficient'],
    keywords: ['efficiency', '5%', '35%', 'more efficient', 'useful', 'output/input'],
  },

  // Q4 — Tennis-ball bounce
  q4_a: {
    keyConcepts: ['drop height', 'first bounce height', 'research question', 'affect'],
    keywords: ['drop height', 'bounce height', 'affect', 'how does', 'first bounce'],
  },
  q4_b: {
    keyConcepts: ['independent drop height', 'dependent bounce height', 'control ball/surface/temperature'],
    keywords: ['independent', 'dependent', 'control', 'drop height', 'bounce height', 'surface', 'temperature'],
  },
  q4_d: {
    keyConcepts: ['gravitational potential energy', 'kinetic energy', 'thermal energy', 'sound', 'energy conversion'],
    keywords: ['GPE', 'KE', 'thermal', 'heat', 'sound', 'converted', 'inelastic', 'less'],
  },
  q4_e: {
    keyConcepts: ['0.26 m', 'average calculation', 'divide by three'],
    keywords: ['0.26', '0.257', 'average', '0.25', '0.27', 'divide', 'three'],
  },
  q4_h: {
    keyConcepts: ['positive relationship', 'proportional', 'through origin', 'supported by data'],
    keywords: ['increases', 'proportional', 'origin', 'linear', 'positive', 'evidence', 'support'],
  },

  // Q5 — Coefficient of restitution (golf ball)
  q5_c: {
    keyConcepts: ['consistent SI units', 'square root', '0.78', 'table format'],
    keywords: ['0.78', '0.777', '0.605', 'square root', 'consistent', 'units', 'metres'],
  },
  q5_d: {
    keyConcepts: ['not exactly constant', 'slight decrease', 'broadly similar', 'partially supported'],
    keywords: ['constant', 'decreases', 'similar', 'support', 'hypothesis', 'trend'],
  },
  q5_e: {
    keyConcepts: ['e squared', '0.64', '64 percent remains', '36 percent converted'],
    keywords: ['e squared', '0.64', '64%', '36%', 'incorrect', 'KE', 'v squared'],
  },

  // Q6 — Foam-mat thickness investigation
  q6_a: {
    keyConcepts: ['IV mat thickness', 'DV bounce height', 'control variable justified', 'hypothesis', 'method', 'repeats'],
    keywords: ['mat', 'thickness', 'bounce', 'ruler', 'control', 'drop height', 'repeat', 'average', 'hypothesis'],
  },
  q6_b: {
    keyConcepts: ['research question', 'independent variable', 'control variables', 'new factor'],
    keywords: ['research question', 'independent', 'control', 'temperature', 'pressure', 'material'],
  },

  // Q7 — Low-energy eco-home
  q7_a: {
    keyConcepts: ['insulation reduces conduction', 'airtight reduces convection', 'insulated slab', 'less energy needed'],
    keywords: ['insulation', 'conduction', 'convection', 'airtight', 'slab', 'heat loss', 'less energy'],
  },
  q7_c: {
    keyConcepts: ['more particles', 'higher pressure', 'particles flow through gaps', 'detect leaks'],
    keywords: ['particles', 'pressure', 'gaps', 'flow', 'escape', 'detect', 'kinetic theory'],
  },
  q7_e: {
    keyConcepts: ['less energy', 'less fossil fuel', 'fewer emissions', 'climate change'],
    keywords: ['energy', 'fossil fuel', 'CO2', 'greenhouse', 'climate', 'emission', 'reduce'],
  },

  // Q8 — Low-energy housing policy
  q8_: {
    keyConcepts: ['positive/negative social', 'positive/negative economic', 'government perspective', 'justified conclusion'],
    keywords: ['savings', 'health', 'fuel poverty', 'upfront cost', 'climate', 'jobs', 'inequality', 'justify'],
  },
}
