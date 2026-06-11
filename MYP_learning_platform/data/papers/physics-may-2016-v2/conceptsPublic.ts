import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2016_V2: Record<string, ConceptEntry> = {
  // Q1 — Mass vs Weight (Inner Planets)
  q1_a: {
    keyConcepts: ['mass = kg, scalar, independent of g', 'weight = N, vector, dependent on g'],
    keywords: ['kilogram', 'newton', 'scalar', 'vector', 'independent', 'dependent'],
  },
  q1_b: {
    keyConcepts: ['inner planet order from Sun: Mercury, Venus, Mars'],
    keywords: ['Mercury', 'Venus', 'Mars'],
  },
  q1_c: {
    keyConcepts: ['Venus thick CO₂ atmosphere → greenhouse effect → traps heat → higher surface temperature'],
    keywords: ['atmosphere', 'CO₂', 'greenhouse effect', 'temperature'],
  },

  // Q2 — Probe on Inner Planets
  q2_a: {
    keyConcepts: ['g = 2s/t²', 'Venus g ≈ 8.9 ms⁻²', 'Mercury g ≈ 3.7 ms⁻²'],
    keywords: ['g = 2s/t²', '8.9', '3.7', 'ms⁻²'],
  },
  q2_b: {
    keyConcepts: ['g increases with density and radius', 'Venus: larger and denser than Mercury → higher g'],
    keywords: ['density', 'radius', 'Venus', 'Mercury', 'higher g'],
  },
  q2_c: {
    keyConcepts: ['Ep = mgh = 0.45 × 3.8 × 90.0 = 154 J', 'unit: J'],
    keywords: ['mgh', '154 J', 'joules', 'Mars'],
  },
  q2_d: {
    keyConcepts: ['greater g on Venus → greater Ep → greater KE → greater velocity', 'Ep = mgh, KE = ½mv²'],
    keywords: ['greater g', 'Venus', 'Mars', 'Ep', 'KE', 'velocity'],
  },

  // Q3 — Cone Parachute Mass Investigation
  q3_a: {
    keyConcepts: ['stopwatch for time', 'metre rule for height', 'equipment + reason'],
    keywords: ['stopwatch', 'metre rule', 'masses', 'parachute', 'reason'],
  },
  q3_b: {
    keyConcepts: ['greater mass → greater weight → terminal velocity increases', 'drag must balance greater weight at higher speed'],
    keywords: ['mass increases', 'terminal velocity increases', 'weight', 'drag', 'balance'],
  },
  q3_c: {
    keyConcepts: ['CV: cone parachute size/shape', 'identical cones used', 'reason: different size → different drag → affects TV'],
    keywords: ['cone', 'shape', 'identical', 'control', 'drag', 'affects terminal velocity'],
  },
  q3_d: {
    keyConcepts: ['5+ different masses, evenly spread, minimum 3 repeats'],
    keywords: ['5 values', 'evenly spread', '3 repeats'],
  },

  // Q4 — Phases of Venus
  q4_a: {
    keyConcepts: ['Venus orbits Sun → different fraction of sunlit surface faces Earth → phases'],
    keywords: ['orbits', 'Sun', 'position', 'lit surface', 'visible'],
  },
  q4_b: {
    keyConcepts: ['gravitational force keeps Venus in orbit around the Sun'],
    keywords: ['gravity', 'gravitational force'],
  },

  // Q5 — Big Bang Evidence
  q5_a: {
    keyConcepts: ['redshift of galaxies → universe expanding', 'CMB radiation → afterglow of Big Bang', 'abundance of H and He'],
    keywords: ['redshift', 'expanding', 'CMB', 'hydrogen', 'helium'],
  },

  // Q6 — Voltage vs LED Brightness
  q6_a: {
    keyConcepts: ['ammeter in parallel bypasses LED', 'negligible resistance → current takes ammeter path'],
    keywords: ['parallel', 'ammeter', 'bypass', 'negligible resistance'],
  },
  q6_b: {
    keyConcepts: ['IV = voltage', 'DV = brightness (or current)'],
    keywords: ['voltage', 'independent', 'brightness', 'current', 'dependent'],
  },
  q6_c: {
    keyConcepts: ['8 values sufficient', '0–5 V covers LED range', 'not evenly spread → reliability reduced'],
    keywords: ['sufficient', 'range', 'LED', 'not evenly spread'],
  },

  // Q7 — Diode V-I Characteristic
  q7_a: {
    keyConcepts: ['scatter graph appropriate', 'smooth curve of best fit', 'denser data near threshold ~0.6 V'],
    keywords: ['scatter graph', 'smooth curve', 'threshold', '0.6 V'],
  },
  q7_b: {
    keyConcepts: ['zero current below threshold ~0.6 V', 'rapid non-linear increase above threshold'],
    keywords: ['threshold', '0.6 V', 'zero current', 'non-linear', 'rapid increase'],
  },
  q7_c: {
    keyConcepts: ['R = V/I at two points', 'R very high below threshold', 'R decreases above threshold', 'non-ohmic'],
    keywords: ['R = V/I', 'high resistance', 'decreases', 'non-ohmic'],
  },
  q7_d: {
    keyConcepts: ['non-linear → hypothesis rejected', 'diode does not obey Ohm\'s law'],
    keywords: ['non-linear', 'hypothesis rejected', 'not proportional'],
  },

  // Q8 — NTC Thermistor
  q8_a: {
    keyConcepts: ['NTC resistance begins to decrease noticeably at ~30°C'],
    keywords: ['30°C', 'resistance decreases'],
  },
  q8_b: {
    keyConcepts: ['higher T → more charge carriers → more current → lower resistance'],
    keywords: ['charge carriers', 'temperature', 'more current', 'resistance decreases'],
  },
  q8_c: {
    keyConcepts: ['T↑ → R↓ → voltage changes in potential divider → comparator → alarm/switch'],
    keywords: ['temperature', 'voltage changes', 'comparator', 'triggers', 'alarm'],
  },
  q8_d: {
    keyConcepts: ['extension: compare PTC thermistor or wider T range', 'justified'],
    keywords: ['PTC', 'compare', 'justification'],
  },

  // Q9 — Sonar Investigation
  q9_a: {
    keyConcepts: ['echo return time = DV', 'depth of water = IV', 'sonar frequency = CV'],
    keywords: ['echo return time', 'dependent', 'depth', 'independent', 'frequency', 'control'],
  },
  q9_b: {
    keyConcepts: ['return time↑ with depth', 'longer round-trip path', 'directly proportional'],
    keywords: ['return time', 'increases', 'depth', 'proportional'],
  },
  q9_c: {
    keyConcepts: ['depth = IV (changed)', 'frequency = CV (affects signal → constant)'],
    keywords: ['depth', 'changes', 'IV', 'frequency', 'constant', 'fair test'],
  },
  q9_d: {
    keyConcepts: ['light absorbed/scattered by particles in murky water', 'sound unaffected → penetrates turbid water'],
    keywords: ['light absorbed', 'scattered', 'particles', 'sound', 'penetrates'],
  },

  // Q10 — Nuclear Power Evaluation
  q10_a: {
    keyConcepts: ['advantages + disadvantages justified', 'safety and environmental considerations', 'economic factors', 'concluding appraisal'],
    keywords: ['advantages', 'disadvantages', 'nuclear waste', 'economic', 'CO₂', 'conclusion'],
  },

  // Q11 — Ionisation & X-ray Security
  q11_a: {
    keyConcepts: ['atom absorbs energy → electron escapes → positive ion remains'],
    keywords: ['energy absorbed', 'electron escapes', 'ion', 'positive'],
  },
  q11_b: {
    keyConcepts: ['X-rays ionise atoms in DNA → chemical bonds break → mutations → cancer'],
    keywords: ['DNA', 'ionises', 'bonds broken', 'mutations', 'cancer'],
  },
  q11_c: {
    keyConcepts: ['penetrating power: UV < X-ray < gamma'],
    keywords: ['ultraviolet', 'X-ray', 'gamma', 'penetrating power'],
  },
  q11_d: {
    keyConcepts: ['UV absorbed → can\'t penetrate', 'gamma too penetrating → no contrast + high dose', 'X-ray differential absorption → contrast image'],
    keywords: ['UV absorbed', 'gamma too penetrating', 'X-ray contrast', 'baggage screening'],
  },

  // Q12 — X-ray Authentication of Painting
  q12_a: {
    keyConcepts: ['hidden earlier composition revealed', 'lead-white paints absorb X-rays (lighter in image)', 'pentimenti confirm reworking → supports authentication', 'image must be referenced'],
    keywords: ['image', 'hidden', 'earlier composition', 'lead-white', 'pentimenti', 'authentication'],
  },

  // Q13 — Infrared Thermography
  q13_a: {
    keyConcepts: ['white/yellow = hottest = greatest heat loss', 'blue/purple = coldest = well insulated', 'windows and roof as main heat-loss areas'],
    keywords: ['white', 'yellow', 'greatest heat loss', 'blue', 'insulation', 'windows'],
  },
  q13_b: {
    keyConcepts: ['non-destructive', 'whole building surveyed rapidly', 'quantitative temperature data'],
    keywords: ['non-destructive', 'not damaged', 'whole building', 'fast'],
  },
}
