import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2016_V1: Record<string, ConceptEntry> = {
  // Q1 — Mass vs Weight (Jupiter Moons)
  q1_a: {
    keyConcepts: ['mass = kg, scalar, independent of g', 'weight = N, vector, dependent on g'],
    keywords: ['kilogram', 'newton', 'scalar', 'vector', 'independent', 'dependent'],
  },
  q1_b: {
    keyConcepts: ['Galilean moon order from Jupiter: Io, Ganymede, Callisto'],
    keywords: ['Io', 'Ganymede', 'Callisto'],
  },
  q1_c: {
    keyConcepts: ['Io closer to Jupiter → stronger tidal forces → more tidal heating'],
    keywords: ['tidal', 'gravity', 'closer', 'heating'],
  },

  // Q2 — Probe on Jupiter Moons
  q2_a: {
    keyConcepts: ['g = 2s/t²', 'Io g ≈ 1.83 ms⁻²', 'Callisto g ≈ 0.81 ms⁻²'],
    keywords: ['g = 2s/t²', '1.83', '0.81', 'ms⁻²'],
  },
  q2_b: {
    keyConcepts: ['Io higher g with smaller radius → Io much denser', 'g increases with density, radius'],
    keywords: ['density', 'radius', 'Io', 'Callisto', 'denser'],
  },
  q2_c: {
    keyConcepts: ['Ep = mgh = 0.6 × 1.3 × 50.0 = 39 J', 'unit: J'],
    keywords: ['mgh', '39 J', 'joules', 'Europa'],
  },
  q2_d: {
    keyConcepts: ['greater g on Io → greater Ep → greater KE → greater velocity', 'Ep = mgh, KE = ½mv²'],
    keywords: ['greater g', 'Io', 'Europa', 'Ep', 'KE', 'velocity'],
  },

  // Q3 — Sphere Diameter in Oil
  q3_a: {
    keyConcepts: ['stopwatch for time', 'metre rule for height/distance', 'equipment + reason'],
    keywords: ['stopwatch', 'metre rule', 'spheres', 'oil', 'reason'],
  },
  q3_b: {
    keyConcepts: ['larger diameter → greater drag area → lower terminal velocity', 'drag = weight at terminal v'],
    keywords: ['diameter', 'drag', 'terminal velocity decreases', 'cross-sectional area'],
  },
  q3_c: {
    keyConcepts: ['CV: density/material of sphere', 'same material each trial', 'reason: density affects weight → TV'],
    keywords: ['density', 'material', 'same', 'control', 'affects terminal velocity'],
  },
  q3_d: {
    keyConcepts: ['5+ different diameters, evenly spread, minimum 3 repeats'],
    keywords: ['5 values', 'evenly spread', '3 repeats'],
  },

  // Q4 — Phases of Europa
  q4_a: {
    keyConcepts: ['Europa orbits Jupiter → different fraction of sunlit surface faces Earth → phases'],
    keywords: ['orbits', 'position', 'lit surface', 'visible'],
  },
  q4_b: {
    keyConcepts: ['gravitational force keeps Europa in orbit around Jupiter'],
    keywords: ['gravity', 'gravitational force'],
  },

  // Q5 — Heliocentric Model Evidence
  q5_a: {
    keyConcepts: ['phases of Venus (full range)', 'stellar parallax', 'retrograde motion', 'gravitational model predictions'],
    keywords: ['phases of Venus', 'parallax', 'retrograde', 'heliocentric'],
  },

  // Q6 — V-I Wire Investigation
  q6_a: {
    keyConcepts: ['ammeter must be in series', 'in parallel: negligible resistance → current bypasses wire'],
    keywords: ['series', 'ammeter', 'parallel', 'bypass'],
  },
  q6_b: {
    keyConcepts: ['IV = voltage', 'DV = current'],
    keywords: ['voltage', 'independent', 'current', 'dependent'],
  },
  q6_c: {
    keyConcepts: ['8 values sufficient', '0–10 V covers range', 'not evenly spread → reliability reduced'],
    keywords: ['sufficient', 'range', 'not evenly spread', 'clustered'],
  },

  // Q7 — Nichrome Wire V-I (Ohmic)
  q7_a: {
    keyConcepts: ['5+ values 0–10V evenly distributed', 'scatter graph + straight LOBF'],
    keywords: ['5 values', 'evenly distributed', 'scatter graph', 'line of best fit'],
  },
  q7_b: {
    keyConcepts: ['linear (straight line through origin)', 'directly proportional — Ohm\'s law'],
    keywords: ['linear', 'origin', 'proportional', 'Ohm\'s law'],
  },
  q7_c: {
    keyConcepts: ['R = V/I at two points → constant', 'nichrome wire is Ohmic'],
    keywords: ['R = V/I', 'constant', 'Ohmic', 'two calculations'],
  },
  q7_d: {
    keyConcepts: ['straight line through origin → proportional', 'hypothesis IS supported'],
    keywords: ['straight line', 'origin', 'hypothesis supported'],
  },

  // Q8 — Nichrome Temperature & Resistance
  q8_a: {
    keyConcepts: ['resistance begins to increase noticeably at ~8.0 V'],
    keywords: ['8.0 V', 'resistance increases'],
  },
  q8_b: {
    keyConcepts: ['threshold temperature for visible EM emission', 'below threshold: infrared only'],
    keywords: ['threshold temperature', 'visible', 'infrared', 'EM spectrum'],
  },
  q8_c: {
    keyConcepts: ['V↑ → T↑ → vibrations↑ → collisions↑ → R↑ → current increases less'],
    keywords: ['temperature', 'atoms vibrate', 'collisions', 'resistance increases'],
  },
  q8_d: {
    keyConcepts: ['extension: different wire material or wider voltage range', 'justified'],
    keywords: ['extension', 'different material', 'justification'],
  },

  // Q9 — Radar Signal Investigation
  q9_a: {
    keyConcepts: ['signal return time = DV', 'distance to object = IV', 'radar frequency = CV'],
    keywords: ['signal return time', 'dependent', 'distance', 'independent', 'frequency', 'control'],
  },
  q9_b: {
    keyConcepts: ['return time↑ with distance', 'longer round-trip path', 'directly proportional'],
    keywords: ['return time', 'increases', 'distance', 'proportional'],
  },
  q9_c: {
    keyConcepts: ['distance = IV (changed)', 'frequency = CV (affects DV, kept constant)'],
    keywords: ['changes', 'IV', 'frequency', 'constant', 'fair test'],
  },
  q9_d: {
    keyConcepts: ['signal intensity decreases with distance', 'below detection threshold → no detection'],
    keywords: ['intensity decreases', 'too weak', 'maximum distance', 'detection threshold'],
  },

  // Q10 — Drone Delivery Evaluation
  q10_a: {
    keyConcepts: ['advantages + disadvantages justified', 'technological considerations', 'economic factors', 'concluding appraisal'],
    keywords: ['advantages', 'disadvantages', 'economic', 'technology', 'drone', 'conclusion'],
  },

  // Q11 — Ionisation & Radiotherapy
  q11_a: {
    keyConcepts: ['atom absorbs energy → electron escapes → positive ion remains'],
    keywords: ['energy absorbed', 'electron escapes', 'ion', 'positive'],
  },
  q11_b: {
    keyConcepts: ['ionising radiation damages DNA in healthy cells → mutations → cancer'],
    keywords: ['DNA', 'mutations', 'cancer', 'healthy cells'],
  },
  q11_c: {
    keyConcepts: ['penetrating power: UV < X-ray < gamma'],
    keywords: ['ultraviolet', 'X-ray', 'gamma', 'penetrating power'],
  },
  q11_d: {
    keyConcepts: ['UV absorbed by skin', 'low-energy X-rays absorbed before deep tumours', 'gamma: multiple beams concentrate dose at tumour'],
    keywords: ['UV absorbed', 'skin', 'gamma rays', 'deep penetration', 'multiple beams'],
  },

  // Q12 — X-ray Weld Inspection
  q12_a: {
    keyConcepts: ['voids/cracks → darker regions in X-ray', 'internal defects revealed non-destructively', 'image must be referenced'],
    keywords: ['image', 'dark', 'void', 'crack', 'structural defect', 'non-destructive'],
  },

  // Q13 — CT Scan vs X-ray
  q13_a: {
    keyConcepts: ['X-ray: 2D projection (overlap)', 'CT: cross-sections + 3D reconstruction', 'CT reveals depth and exact location'],
    keywords: ['2D', 'overlap', '3D', 'cross-section', 'depth', 'location'],
  },
  q13_b: {
    keyConcepts: ['no surgery/incision', 'no anaesthesia', 'no infection risk', 'whole body scanned'],
    keywords: ['not cut open', 'no surgery', 'infection', 'whole body'],
  },
}
