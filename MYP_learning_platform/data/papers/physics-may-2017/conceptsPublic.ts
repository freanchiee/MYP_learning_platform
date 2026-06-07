import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2017: Record<string, ConceptEntry> = {
  // Q1 — Star Colours & Light Properties
  q1_a: {
    keyConcepts: ['speed of all visible light equal in vacuum', 'red: longer wavelength, lower frequency than blue'],
    keywords: ['equal speed', 'greater wavelength', 'less frequency', 'red', 'blue'],
  },
  q1_b: {
    keyConcepts: ['red stars surface temperature ≤ 3200 °C', 'Betelgeuse is red supergiant'],
    keywords: ['3200', '°C', 'less than', 'red', 'Betelgeuse'],
  },
  q1_c: {
    keyConcepts: ['8500 °C star appears white or blue-white'],
    keywords: ['white', 'blue-white', '8500'],
  },

  // Q2 — White Light & IR
  q2_a: {
    keyConcepts: ['white light = mixture of frequencies/wavelengths', 'different frequencies refracted differently'],
    keywords: ['mixture', 'colours', 'frequencies', 'refracted', 'different amounts'],
  },
  q2_b: {
    keyConcepts: ['black surface absorbs IR radiation', 'absorption raises temperature'],
    keywords: ['absorption', 'infrared', 'black', 'temperature rise'],
  },
  q2_c: {
    keyConcepts: ['temperature increases violet→red', 'highest temperature in IR region beyond red', 'black absorbs all wavelengths best'],
    keywords: ['infrared', 'beyond red', 'highest temperature', 'black absorbs'],
  },

  // Q3 — Astrophysics
  q3_a: {
    keyConcepts: ['spinning mirror appears as arc/trail in long-exposure photo'],
    keywords: ['arc', 'trail', 'spinning', 'mirror'],
  },
  q3_b: {
    keyConcepts: ['reflected rays converge at focal point', 'arrows point toward focal point'],
    keywords: ['focal point', 'converge', 'reflect', 'arrows'],
  },
  q3_c: {
    keyConcepts: ['Earth\'s rotation causes apparent stellar motion'],
    keywords: ['Earth rotating', 'spinning', 'axis', 'appears to move'],
  },
  q3_d: {
    keyConcepts: ['Polaris on Earth\'s rotation axis → appears stationary'],
    keywords: ['axis', 'north pole', 'stationary', 'aligned'],
  },
  q3_e: {
    keyConcepts: ['naked eye cannot resolve closely spaced stars', 'telescope magnifies → stars resolved'],
    keywords: ['resolve', 'telescope', 'magnification', 'separate'],
  },
  q3_f: {
    keyConcepts: ['1 year = 3.15×10⁷ s', '1 light year = 9.5×10¹⁵ m', 'distance = 323 × 9.5×10¹⁵ = 3.1×10¹⁸ m'],
    keywords: ['light year', '3.1 × 10¹⁸', 'm', '9.5 × 10¹⁵'],
  },
  q3_g: {
    keyConcepts: ['answer in standard form: 3.1 × 10¹⁸ m'],
    keywords: ['standard form', '10¹⁸', '3.1'],
  },

  // Q4 — Habitable Zone
  q4_a: {
    keyConcepts: ['planets opaque → block starlight during transit', 'brightness dip detected'],
    keywords: ['opaque', 'blocks', 'brightness', 'transit'],
  },
  q4_b: {
    keyConcepts: ['planets non-luminous → detected by reflected light or transit'],
    keywords: ['non-luminous', 'reflected', 'illuminated'],
  },
  q4_c: {
    keyConcepts: ['too close → too much radiation → too hot → water evaporates'],
    keywords: ['too hot', 'evaporate', 'boil', 'radiation'],
  },
  q4_d: {
    keyConcepts: ['hotter star emits more energy → habitable zone further away'],
    keywords: ['more energy', 'further', 'habitable zone', 'hotter'],
  },

  // Q5 — Ramp Investigation
  q5_a: {
    keyConcepts: ['GPE = KE on frictionless ramp'],
    keywords: ['GPE = KE', 'gravitational potential energy', 'kinetic energy'],
  },
  q5_b: {
    keyConcepts: ['GPE = mgh = 0.25×10×0.60 = 1.5 J'],
    keywords: ['1.5 J', 'mgh', '0.25', '0.60'],
  },
  q5_c: {
    keyConcepts: ['research question: height → distance'],
    keywords: ['height', 'distance', 'affect'],
  },
  q5_d: {
    keyConcepts: ['height increases → GPE increases → KE increases → distance increases', 'proportional prediction'],
    keywords: ['height', 'GPE', 'KE', 'distance increases', 'doubles'],
  },
  q5_e: {
    keyConcepts: ['IV = height of ramp', 'DV = distance', 'CV = surface, mass, ramp length'],
    keywords: ['height', 'independent', 'distance', 'dependent', 'surface', 'mass'],
  },
  q5_f: {
    keyConcepts: ['low height → insufficient force to overcome friction → block stationary'],
    keywords: ['not steep', 'friction', 'does not slide', 'too low'],
  },
  q5_g: {
    keyConcepts: ['clamp ramp securely', 'keep clear of block path'],
    keywords: ['clamp', 'secure', 'clear of path', 'safety'],
  },
  q5_h: {
    keyConcepts: ['heights from 0.35 to 0.60 m, 5+ values evenly spaced, 2+ trials each'],
    keywords: ['0.60', '0.35', 'evenly spaced', '5 values', '2 trials'],
  },
  q5_i: {
    keyConcepts: ['linear relationship, not proportional (non-zero x-intercept)'],
    keywords: ['linear', 'not proportional', 'x-intercept'],
  },
  q5_j: {
    keyConcepts: ['x-intercept ≈ 0.29–0.31 m'],
    keywords: ['0.30', 'x-intercept', '0.29', '0.31'],
  },
  q5_k: {
    keyConcepts: ['x-intercept = minimum height to overcome friction and leave ramp'],
    keywords: ['minimum height', 'friction', 'x-intercept', 'does not travel beyond ramp'],
  },
  q5_l: {
    keyConcepts: ['method adequate for drawing conclusion and graph'],
    keywords: ['sufficient data', 'conclusion', 'graph'],
  },

  // Q6 — Alternative Ramp
  q6_a: {
    keyConcepts: ['alternative IV: surface material, mass, angle, length'],
    keywords: ['surface material', 'mass', 'angle', 'alternative'],
  },
  q6_b: {
    keyConcepts: ['rougher surface → more friction → shorter distance', 'quantitative prediction'],
    keywords: ['rougher', 'friction', 'distance decreases', 'quantitative'],
  },
  q6_c: {
    keyConcepts: ['IV = surface material (or alt)', 'CV = height, mass, ramp length'],
    keywords: ['surface material', 'independent', 'height', 'mass', 'control'],
  },
  q6_d: {
    keyConcepts: ['5+ conditions of IV, multiple trials'],
    keywords: ['5 conditions', 'trials', 'repeat'],
  },

  // Q7 — Sail Stopping Distance
  q7_a: {
    keyConcepts: ['stopping distance ≈ 6.11 m (read from tape)', 'unit m required'],
    keywords: ['6.11', 'm', 'stopping distance', 'measurement'],
  },
  q7_b: {
    keyConcepts: ['table: Radius/m and Stopping distance/m', 'units in headers', 'ordered', 'consistent dp'],
    keywords: ['radius', 'stopping distance', 'm', 'headers', 'ordered'],
  },
  q7_c: {
    keyConcepts: ['continuous data → scatter graph + LOBF'],
    keywords: ['continuous', 'scatter graph', 'line of best fit'],
  },

  // Q8 — Sail Analysis
  q8_d: {
    keyConcepts: ['inverse relationship: radius↑ → distance↓', 'not proportional'],
    keywords: ['inverse', 'decreases', 'not proportional'],
  },
  q8_e: {
    keyConcepts: ['stopping distance ∝ 1/R'],
    keywords: ['1/R', 'proportional', 'graph 3', 'straight line origin'],
  },
  q8_f: {
    keyConcepts: ['larger radius → larger area → more drag → faster deceleration'],
    keywords: ['area', 'drag', 'air resistance', 'deceleration', 'collisions'],
  },
  q8_g: {
    keyConcepts: ['d ∝ 1/R (not 1/R²)', 'graph 4 not straight line → not inversely proportional to R²'],
    keywords: ['1/R', 'not 1/R²', 'graph 3', 'graph 4', 'not supported'],
  },

  // Q9 — Materials
  q9_a: {
    keyConcepts: ['carbon fibre most rigid (highest E)'],
    keywords: ['carbon fibre', 'rigid', 'stiffest'],
  },
  q9_b: {
    keyConcepts: ['Material X: higher density or lower stiffness → disadvantage'],
    keywords: ['density', 'heavier', 'less rigid'],
  },
  q9_c: {
    keyConcepts: ['carbon fibre: stiffer (E=40 GPa) and lighter (1.60 g/cm³) than Material X', 'better for athletic prosthetics'],
    keywords: ['stiffness', 'density', 'lighter', 'carbon fibre', 'recommend'],
  },

  // Q10 — Prosthetics Ethics
  q10_a: {
    keyConcepts: ['ethical: performance advantage debate', 'social: inclusion vs fairness', 'access inequality', 'justified conclusion'],
    keywords: ['ethical', 'advantage', 'fairness', 'inclusive', 'social', 'access', 'conclusion'],
  },

  // Q11 — Pressure
  q11_a: {
    keyConcepts: ['P = F/A', 'weight = mg = 25000 N', 'force per foot = 6250 N', 'P = 125000 Pa'],
    keywords: ['P = F/A', '125000', '50000', 'Pa', 'pressure'],
  },
  q11_b: {
    keyConcepts: ['large contact area → low pressure for both ground and limb', 'P = F/A'],
    keywords: ['contact area', 'large', 'low pressure', 'distribute', 'comfortable'],
  },
}
