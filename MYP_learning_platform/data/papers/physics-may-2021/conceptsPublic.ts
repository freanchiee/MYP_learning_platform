import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2021: Record<string, ConceptEntry> = {
  // Q1 — Radio waves / Marconi
  q1_a: {
    keyConcepts: ['speed of light', '3 × 10⁸', 'electromagnetic wave', 'v = fλ'],
    keywords: ['speed', '3e8', 'c', 'wavelength', 'frequency', 'wave equation'],
  },
  q1_b: {
    keyConcepts: ['diffraction', 'spreading', 'long wavelength', 'around obstacles'],
    keywords: ['diffract', 'bend', 'obstacle', 'hill', 'gap', 'spread'],
  },
  q1_c: {
    keyConcepts: ['λ = v/f', 'wavelength calculation', 'rearrange wave equation'],
    keywords: ['wavelength', 'divide', 'frequency', 'v over f', 'calculate'],
  },
  q1_d: {
    keyConcepts: ['long range', 'diffraction advantage', 'communication', 'atmosphere penetration'],
    keywords: ['long distance', 'travel', 'diffract', 'penetrate', 'atmosphere', 'advantage'],
  },

  // Q2 — Copper-67 / Radioactivity
  q2_a: {
    keyConcepts: ['proton number', 'mass number', 'isotope', 'neutron number'],
    keywords: ['proton', 'neutron', 'mass number', 'atomic number', 'Z', 'A'],
  },
  q2_b: {
    keyConcepts: ['beta particle', 'electron', 'magnetic field deflection', 'Fleming', 'left-hand rule'],
    keywords: ['beta', 'deflect', 'magnetic', 'field', 'direction', 'charge', 'electron'],
  },
  q2_c: {
    keyConcepts: ['half-life', 'activity halves', 'radioactive decay', 'number of half-lives'],
    keywords: ['half-life', 'half', 'decay', 'activity', 'remaining', 'time'],
  },
  q2_d: {
    keyConcepts: ['cancer treatment', 'targeted radiation', 'beta emitter', 'tumour'],
    keywords: ['cancer', 'treatment', 'tumour', 'target', 'radiation', 'medical', 'beta'],
  },

  // Q3 — Hybrid cars / Kinetic energy
  q3_a: {
    keyConcepts: ['Eₖ = ½mv²', 'kinetic energy', 'mass', 'velocity squared'],
    keywords: ['kinetic', 'energy', 'half', 'mass', 'velocity', 'squared', 'joules', 'KE'],
  },
  q3_b: {
    keyConcepts: ['F = ma', 'deceleration', 'braking force', 'Newton second law'],
    keywords: ['decelerate', 'force', 'mass', 'acceleration', 'brake', 'F=ma'],
  },
  q3_c: {
    keyConcepts: ['heat energy', 'friction', 'energy conversion', 'KE to thermal'],
    keywords: ['heat', 'thermal', 'friction', 'convert', 'kinetic energy', 'loss'],
  },
  q3_d: {
    keyConcepts: ['energy chain', 'chemical to kinetic', 'energy transformation'],
    keywords: ['chemical', 'kinetic', 'electrical', 'stored', 'energy chain', 'transfer'],
  },
  q3_e: {
    keyConcepts: ['regenerative braking', 'generator', 'electrical energy', 'battery', 'efficiency'],
    keywords: ['regenerative', 'generator', 'motor', 'battery', 'recharge', 'efficiency', 'electrical'],
  },
  q3_f: {
    keyConcepts: ['CO₂ reduction', 'lower emissions', 'hybrid advantage', 'fuel efficiency'],
    keywords: ['CO2', 'carbon dioxide', 'emissions', 'reduce', 'less fuel', 'environment'],
  },

  // Q4 — Galileo ramp / Motion
  q4_a: {
    keyConcepts: ['research question', 'independent variable', 'dependent variable', 'ramp angle'],
    keywords: ['research question', 'IV', 'DV', 'angle', 'time', 'distance', 'investigate'],
  },
  q4_b: {
    keyConcepts: ['controlled variables', 'fair test', 'same mass', 'same surface'],
    keywords: ['control', 'same', 'constant', 'fair test', 'variable', 'keep'],
  },
  q4_c: {
    keyConcepts: ['constant acceleration', 'gravity', '9.8 m/s²', 'uniform acceleration'],
    keywords: ['constant', 'acceleration', 'gravity', '9.8', '10', 'uniform', 'same rate'],
  },
  q4_d: {
    keyConcepts: ['s ∝ t²', 's = ½at²', 'straight line through origin', 'distance vs time squared'],
    keywords: ['s vs t squared', 'straight line', 'proportional', 'origin', 'linear', 'graph B'],
  },
  q4_e: {
    keyConcepts: ['units of t²', 's²', 'seconds squared', 'unit notation'],
    keywords: ['s²', 'seconds squared', 'units', 't squared', 'unit'],
  },
  q4_f: {
    keyConcepts: ['water clock', 'timing device', 'Galileo', 'limitations', 'flow rate'],
    keywords: ['water clock', 'flow', 'timing', 'measure', 'Galileo', 'limitation'],
  },
  q4_g: {
    keyConcepts: ['stopwatch', 'reaction time', 'repeat trials', 'average', 'precision improvement'],
    keywords: ['stopwatch', 'reaction time', 'repeat', 'average', 'precision', 'digital'],
  },
  q4_h: {
    keyConcepts: ['new independent variable', 'modify experiment', 'mass', 'surface texture'],
    keywords: ['new variable', 'change', 'independent', 'mass', 'surface', 'modify'],
  },

  // Q5 — Parachute / Air resistance
  q5_a: {
    keyConcepts: ['hypothesis', 'air resistance', 'surface area', 'particle collisions', 'prediction'],
    keywords: ['hypothesis', 'air resistance', 'surface area', 'particles', 'collisions', 'predict', 'increase'],
  },
  q5_b: {
    keyConcepts: ['experimental design', 'IV surface area', 'DV fall time', 'method', 'controlled variables'],
    keywords: ['design', 'method', 'IV', 'DV', 'surface area', 'fall time', 'controlled', 'repeat'],
  },

  // Q6 — Convex lens
  q6_a: {
    keyConcepts: ['image distance', 'dᵢ', 'focused image', 'lens to screen'],
    keywords: ['image distance', 'di', 'screen', 'focused', 'measure', 'lens'],
  },
  q6_b: {
    keyConcepts: ['data table', 'headings with units', 'decimal places', 'object distance', 'image distance'],
    keywords: ['table', 'headings', 'units', 'decimal', 'object', 'image', 'distance'],
  },
  q6_c: {
    keyConcepts: ['1/f = 1/dₒ + 1/dᵢ', 'thin lens equation', 'calculate 1/f'],
    keywords: ['1/f', 'thin lens', 'reciprocal', 'add', 'object', 'image', 'focal'],
  },
  q6_d: {
    keyConcepts: ['anomalous result', 'outlier', 'exclude from LOBF', 'parallax error'],
    keywords: ['anomalous', 'outlier', 'circle', 'exclude', 'error', 'different', 'ignore'],
  },
  q6_e: {
    keyConcepts: ['line of best fit', 'LOBF', 'minimise distances', 'trend'],
    keywords: ['best fit', 'line', 'trend', 'ignore outlier', 'draw', 'smooth'],
  },
  q6_f: {
    keyConcepts: ['focal length from graph', 'x-intercept equals 1/f', 'y-intercept equals 1/f'],
    keywords: ['focal length', 'intercept', 'gradient', 'graph', 'f', '1/f'],
  },

  // Q7 — Drones / Forces
  q7_a: {
    keyConcepts: ['thrust greater than weight', 'unbalanced force', 'upward acceleration', 'net force'],
    keywords: ['thrust', 'weight', 'unbalanced', 'net force', 'upward', 'accelerate', 'T > W'],
  },
  q7_b: {
    keyConcepts: ['drone advantages', 'drone disadvantages', 'evaluation', 'privacy', 'noise', 'speed'],
    keywords: ['advantage', 'disadvantage', 'evaluate', 'privacy', 'noise', 'speed', 'cost', 'safety'],
  },

  // Q8 — Environmental monitoring
  q8_a: {
    keyConcepts: ['environmental monitoring', 'drone applications', 'social implications', 'political implications'],
    keywords: ['monitor', 'pollution', 'wildlife', 'map', 'social', 'political', 'regulation', 'surveillance', 'implication'],
  },
}
