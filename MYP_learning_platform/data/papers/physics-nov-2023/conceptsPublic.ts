/**
 * CLIENT-SAFE concept data — keyConcepts and keywords only.
 * NO exemplar answers, feedbackHit, feedbackMiss, or mark scheme content.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}` e.g. 'q3_a', 'q5_i', 'q14_b i'
 */
export interface ConceptEntry {
  keyConcepts: string[]
  keywords: string[]
}

export const CONCEPTS_PUBLIC: Record<string, ConceptEntry> = {
  // Q3 — Density & Measurement
  q3_a: {
    keyConcepts: ['precision', 'significant figures', 'justified', '1mm', '3 sig fig'],
    keywords: ['smallest division', 'accurate', 'precision', 'mm', '0.001'],
  },
  q3_b: {
    keyConcepts: ['kg/m3', 'kilogram', 'cubic metre'],
    keywords: ['kg', 'm3', 'g/cm3', 'density unit', 'si unit'],
  },
  q3_c: {
    keyConcepts: ['density equals', 'mass divided by volume', '8', 'formula'],
    keywords: ['rho', 'm/v', '120', '15', '8 g', '8000 kg', 'divide', 'calculation'],
  },

  // Q4 — Circuits
  q4_a: {
    keyConcepts: ['3 ohm', 'series', 'add', 'total resistance'],
    keywords: ['2+1', 'r1+r2', '3', 'series resistance', 'ohm'],
  },
  q4_b: {
    keyConcepts: ['2 ampere', 'v/r', 'current same', 'ohm law'],
    keywords: ['6/3', '2a', 'current', 'same', 'series', 'ohm', 'i=v/r'],
  },
  q4_c: {
    keyConcepts: ['4 volt', '2 volt', 'v=ir', 'potential difference'],
    keywords: ['4v', '2v', 'v=ir', 'potential', 'voltage', 'check'],
  },

  // Q5 — Hooke's Law Investigation (simulation)
  q5_i: {
    keyConcepts: ['how does', 'affect', 'extension', 'load', 'force'],
    keywords: ['spring', 'investigate', 'load', 'extension', 'force', 'variable', 'relationship', 'proportional'],
  },
  q5_ii: {
    keyConcepts: ["hooke's law", 'directly proportional', 'elastic limit', 'extension increases'],
    keywords: ['proportional', 'increase', 'hooke', 'f=kx', 'spring constant', 'elastic', 'linear', 'predict'],
  },
  q5_iii: {
    keyConcepts: ['independent variable', 'dependent variable', 'controlled', 'same spring', 'load', 'extension'],
    keywords: ['iv', 'dv', 'control', 'fixed', 'same', 'spring', 'ruler', 'temperature', 'mass', 'force', 'extension'],
  },
  q5_iv: {
    keyConcepts: ['measure', 'repeat', 'reliability', 'mass', 'length', 'extension'],
    keywords: ['ruler', 'clamp', 'stand', 'masses', 'measure', 'record', 'extension', 'repeat', 'average', 'oscillation', 'settle'],
  },

  // Q6 — Pendulum Investigation
  q6_i: {
    keyConcepts: ['how does', 'length', 'affect', 'period', 'oscillation'],
    keywords: ['pendulum', 'length', 'period', 'time', 'complete', 'swing', 'oscillate'],
  },
  q6_ii: {
    keyConcepts: ['period increases', 'length increases', 't=2pi', 'square root'],
    keywords: ['longer', 'increase', 't=2pi', 'root', 'proportional', 'sqrt', 'formula'],
  },
  q6_iii: {
    keyConcepts: ['independent', 'dependent', 'controlled', 'length', 'period', 'mass bob', 'amplitude'],
    keywords: ['iv', 'dv', 'cv', 'length', 'period', 'mass', 'amplitude', 'angle', 'controlled'],
  },
  q6_iv: {
    keyConcepts: ['10 oscillations', 'percentage error', 'timing', 'small angle'],
    keywords: ['10', 'oscillations', 'error', 'reaction', 'angle', 'small', 'consistent', 'repeat', 'average'],
  },

  // Q7 — Spring Data Processing
  q7_a: {
    keyConcepts: ['extension', 'subtract', 'natural length', 'divide by 100', 'metres'],
    keywords: ['extension', 'subtract', '10', '100', 'cm', 'm', 'convert', 'column'],
  },
  q7_b: {
    keyConcepts: ['extension y-axis', 'load x-axis', 'best-fit', 'straight line', 'origin'],
    keywords: ['y-axis', 'x-axis', 'extension', 'load', 'plot', 'graph', 'best fit', 'straight', 'origin', 'points'],
  },
  q7_c: {
    keyConcepts: ['gradient', 'spring constant', 'calculation', 'N/m', 'delta'],
    keywords: ['gradient', 'rise', 'run', 'delta', 'k', '28', 'spring constant', 'n/m', '0.035'],
  },
  q7_d: {
    keyConcepts: ['6 newton', 'limit of proportionality', 'above line', 'deviates'],
    keywords: ['6', '6n', 'limit', 'proportionality', 'elastic', 'deviates', 'above', 'greater', 'hooke'],
  },

  // Q8 — Pendulum Data Analysis
  q8_a: {
    keyConcepts: ['average', 'divide by 10', 'period', 'T squared', 'calculation'],
    keywords: ['average', 'sum', 'divide', '10', 'period', 'T', 'square', 'T2', 't squared'],
  },
  q8_b: {
    keyConcepts: ['T squared y-axis', 'length x-axis', 'straight line', 'best fit'],
    keywords: ['t2', 't squared', 'length', 'y-axis', 'x-axis', 'graph', 'plot', 'straight', 'best fit'],
  },
  q8_c: {
    keyConcepts: ['gradient', '4pi squared', 'calculate g', '9.8'],
    keywords: ['gradient', '4pi', '9.8', '9.87', 'g', 'calculation', 'formula'],
  },
  q8_d: {
    keyConcepts: ['limitation', 'repeat', 'reliability', 'random error', 'improvement'],
    keywords: ['limitation', 'improve', 'repeat', 'trials', 'random', 'error', 'average', 'reliability'],
  },

  // Q9 — Evaluating Results (Circuits)
  q9_a: {
    keyConcepts: ['R=V/I', 'ohm', 'resistance', 'calculation', 'formula'],
    keywords: ['r=v/i', 'ohm', '4', 'resistance', 'divide', 'calculation', 'v/i'],
  },
  q9_b: {
    keyConcepts: ['constant resistance', 'ohmic', "ohm's law"],
    keywords: ['constant', 'ohmic', 'ohm', 'temperature', 'approximately', '4 ohm'],
  },
  q9_c: {
    keyConcepts: ['temperature', 'parallax', 'error', 'source'],
    keywords: ['temperature', 'heat', 'parallax', 'reading', 'contact', 'resistance', 'error'],
  },
  q9_d: {
    keyConcepts: ['repeat', 'average', 'reliability', 'random error'],
    keywords: ['repeat', 'average', '3 times', 'reliability', 'multiple', 'random', 'error'],
  },

  // Q10 — Nuclear Energy & Society
  q10_a: {
    keyConcepts: ['no CO2', 'greenhouse gas', 'radioactive waste', 'thousands of years'],
    keywords: ['co2', 'greenhouse', 'carbon', 'climate', 'warming', 'radioactive', 'waste', 'storage', 'hazardous', 'thousand years'],
  },
  q10_b: {
    keyConcepts: ['climate perspective', 'safety perspective', 'balanced', 'risk', 'accident'],
    keywords: ['perspective', 'balanced', 'climate', 'safety', 'risk', 'accident', 'chernobyl', 'radiation', 'community', 'cost'],
  },

  // Q12 — Renewable Energy
  q12_a: {
    keyConcepts: ['renewable', 'no emissions', 'intermittent', 'visual pollution'],
    keywords: ['renewable', 'inexhaustible', 'no emissions', 'carbon', 'intermittent', 'unreliable', 'visual', 'noise', 'birds', 'wildlife', 'land'],
  },
  q12_b: {
    keyConcepts: ['CO2 reduction', 'balanced', 'challenges', 'transition', 'not immediate'],
    keywords: ['co2', 'carbon', 'climate', 'urgent', 'renewable', 'cost', 'grid', 'storage', 'transition', 'realistic', 'balanced', 'conclusion'],
  },

  // Q14 — Radioactivity
  q14_a: {
    keyConcepts: ['2 half-lives', '2 hours', 'formula', 'calculation'],
    keywords: ['half life', 'n=n0', '0.25', '2 hours', '120 minutes', 'calculation', '25/100'],
  },
  'q14_b i': {
    keyConcepts: ['alpha least', 'paper', 'beta aluminium', 'gamma lead', 'most penetrating'],
    keywords: ['alpha', 'paper', 'least', 'beta', 'aluminium', 'gamma', 'lead', 'concrete', 'penetrating'],
  },
  'q14_b ii': {
    keyConcepts: ['alpha highest', 'beta medium', 'gamma lowest', 'ionising'],
    keywords: ['alpha', 'highest', 'beta', 'medium', 'gamma', 'lowest', 'ionise', 'charge'],
  },

  // Q15 — Speed & Distance
  q15_a: {
    keyConcepts: ['1600 metres', '480 seconds', '3.33', 'v=s/t'],
    keywords: ['1600', '480', '3.3', 'v=s/t', 'm/s', 'convert'],
  },
  q15_b: {
    keyConcepts: ['increases', 'accelerates'],
    keywords: ['increases', 'greater', 'higher', 'accelerate', 'faster', 'downhill'],
  },

  // Q16 — Mass, Weight & Gravity
  q16_a: {
    keyConcepts: ['W=mg', '882 newton', 'formula'],
    keywords: ['w=mg', '90', '9.8', '882', 'weight', 'newton', 'n'],
  },
  q16_b: {
    keyConcepts: ['90 kg', 'mass unchanged'],
    keywords: ['90', 'kg', 'same', 'unchanged', 'constant', 'mass does not change'],
  },
  q16_c: {
    keyConcepts: ['1.63', '147 newton', 'g divided by 6', 'W=mg'],
    keywords: ['9.8/6', '1.63', '147', '150', 'w=mg', 'moon', 'newton', '1/6'],
  },
}
