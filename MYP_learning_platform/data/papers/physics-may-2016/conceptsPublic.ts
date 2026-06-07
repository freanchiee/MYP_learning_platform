import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2016: Record<string, ConceptEntry> = {
  // Q1 — Mass vs Weight
  q1_a: {
    keyConcepts: ['mass = kg, scalar, independent of g', 'weight = N, vector, dependent on g'],
    keywords: ['kilogram', 'newton', 'scalar', 'vector', 'independent', 'dependent'],
  },
  q1_b: {
    keyConcepts: ['planet order from Sun: Venus (2nd), Jupiter (5th), Neptune (8th)'],
    keywords: ['Venus', 'Jupiter', 'Neptune'],
  },
  q1_c: {
    keyConcepts: ['further from Sun → less radiation per unit area → colder'],
    keywords: ['radiation', 'less', 'further', 'temperature'],
  },

  // Q2 — Space Probe
  q2_a: {
    keyConcepts: ['g = 2s/t² from s = ½gt²', 'Mercury g ≈ 3.7 ms⁻²', 'Mars g ≈ 3.8 ms⁻²'],
    keywords: ['g = 2s/t²', '3.7', '3.8', 'ms⁻²'],
  },
  q2_b: {
    keyConcepts: ['g increases with density', 'Mars lower density than Mercury despite larger radius'],
    keywords: ['density', 'radius', 'relationship', 'lower density'],
  },
  q2_c: {
    keyConcepts: ['Ep = mgh', 'correct unit J or kJ'],
    keywords: ['mgh', 'joules', 'Ep', '108 J'],
  },
  q2_d: {
    keyConcepts: ['smaller g → smaller Ep → smaller KE → smaller velocity', 'Ep = mgh, KE = ½mv²'],
    keywords: ['smaller g', 'GPE', 'KE', 'velocity smaller', 'Ganymede'],
  },

  // Q3 — Parachute
  q3_a: {
    keyConcepts: ['stopwatch for time', 'metre rule for height/area', 'equipment + reason'],
    keywords: ['stopwatch', 'metre rule', 'data logger', 'reason'],
  },
  q3_b: {
    keyConcepts: ['larger area → greater drag → lower terminal velocity', 'quantitative prediction'],
    keywords: ['area', 'drag', 'terminal velocity decreases', 'quantitative'],
  },
  q3_c: {
    keyConcepts: ['CV: mass/weight of parachute', 'keep same mass each time', 'reason: mass affects terminal v'],
    keywords: ['mass', 'control', 'same', 'affects terminal velocity'],
  },
  q3_d: {
    keyConcepts: ['5+ different areas, evenly spaced, minimum 3 repeats'],
    keywords: ['5 values', 'evenly spread', '3 repeats'],
  },

  // Q4 — Moon Phases
  q4_a: {
    keyConcepts: ['Moon orbits Earth → different fraction of sunlit side visible → phases'],
    keywords: ['orbits', 'position', 'lit surface', 'visible'],
  },
  q4_b: {
    keyConcepts: ['gravitational force keeps Moon in orbit'],
    keywords: ['gravity', 'gravitational force'],
  },

  // Q5 — Big Bang
  q5_a: {
    keyConcepts: ['universe has beginning', 'cooling', 'CMB radiation', 'density not constant'],
    keywords: ['beginning', 'cooling', 'CMB', 'density not constant'],
  },

  // Q6 — Electricity
  q6_a: {
    keyConcepts: ['ammeter must be in series', 'negligible resistance → current bypasses bulb'],
    keywords: ['series', 'ammeter', 'negligible resistance', 'bypass'],
  },
  q6_b: {
    keyConcepts: ['IV = voltage', 'DV = current'],
    keywords: ['voltage', 'independent', 'current', 'dependent'],
  },
  q6_c: {
    keyConcepts: ['9 measurements sufficient', 'covers range', 'not evenly distributed → reliability reduced'],
    keywords: ['sufficient', 'range', 'not evenly distributed', 'clustered'],
  },

  // Q7 — V-I Graph
  q7_a: {
    keyConcepts: ['5+ values 0-12V evenly distributed', 'scatter graph + LOBF'],
    keywords: ['5 values', 'evenly distributed', 'scatter graph', 'line of best fit'],
  },
  q7_b: {
    keyConcepts: ['linear below 10.4V', 'non-linear above 10.4V'],
    keywords: ['linear', 'non-linear', '10.4V', 'current increases'],
  },
  q7_c: {
    keyConcepts: ['R = V/I at two points shows resistance increases with voltage/temperature'],
    keywords: ['R = V/I', 'resistance increases', 'temperature', 'two calculations'],
  },
  q7_d: {
    keyConcepts: ['proportional requires straight line through origin', 'evaluate if graph meets this'],
    keywords: ['straight line', 'origin', 'proportional', 'hypothesis'],
  },

  // Q8 — Lamp/Resistance
  q8_a: {
    keyConcepts: ['lamp emits visible light at 10.4 V'],
    keywords: ['10.4 V', 'light', 'visible'],
  },
  q8_b: {
    keyConcepts: ['only certain frequencies = visible', 'threshold temperature for visible emission'],
    keywords: ['frequencies', 'visible', 'threshold temperature'],
  },
  q8_c: {
    keyConcepts: ['T↑ → vibrations↑ → collisions↑ → resistance↑ → current increases less'],
    keywords: ['temperature', 'vibrations', 'collisions', 'resistance increases'],
  },
  q8_d: {
    keyConcepts: ['extension: different component or material or voltage range', 'justified'],
    keywords: ['extension', 'different component', 'justification'],
  },

  // Q9 — Satellite
  q9_a: {
    keyConcepts: ['transmission time = DV', 'ground distance = IV', 'satellite height = CV'],
    keywords: ['transmission time', 'dependent', 'ground distance', 'independent', 'height', 'control'],
  },
  q9_b: {
    keyConcepts: ['ground distance↑ → transmission time↑', 'longer signal path', 'proportional prediction'],
    keywords: ['increases', 'transmission time', 'ground distance', 'longer path'],
  },
  q9_c: {
    keyConcepts: ['ground distance = IV (what is changed)', 'height = CV (kept constant, affects path length)'],
    keywords: ['changes', 'IV', 'constant', 'height affects', 'fair test'],
  },
  q9_d: {
    keyConcepts: ['beyond footprint/curvature of Earth → no line of sight'],
    keywords: ['footprint', 'curvature', 'maximum distance', 'line of sight'],
  },

  // Q10 — Satellite Internet Evaluation
  q10_a: {
    keyConcepts: ['advantages + disadvantages justified', 'technological considerations', 'economic factors', 'concluding appraisal'],
    keywords: ['advantages', 'disadvantages', 'economic', 'technology', 'conclusion'],
  },

  // Q11 — Ionisation
  q11_a: {
    keyConcepts: ['atom absorbs energy → electron escapes → positive ion remains'],
    keywords: ['energy absorbed', 'electron escapes', 'ion', 'positive'],
  },
  q11_b: {
    keyConcepts: ['DNA damage → mutations → cancer', 'cytoplasm damage → cell death'],
    keywords: ['DNA', 'mutations', 'cancer', 'cell death'],
  },
  q11_c: {
    keyConcepts: ['penetrating power: UV < X-ray < gamma'],
    keywords: ['ultraviolet', 'X-ray', 'gamma', 'penetrating power'],
  },
  q11_d: {
    keyConcepts: ['UV absorbed by skin', 'gamma passes all materials (no contrast)', 'X-ray: bone vs soft tissue contrast'],
    keywords: ['UV absorbed', 'gamma passes through', 'X-ray contrast', 'bone', 'soft tissue'],
  },

  // Q12 — X-ray Foot
  q12_a: {
    keyConcepts: ['unnatural foot position', 'shoe construction revealed', 'image must be referenced'],
    keywords: ['unnatural', 'distorted', 'shoe construction', 'bones'],
  },

  // Q13 — XRFS Painting
  q13_a: {
    keyConcepts: ['XRFS reveals hidden layer (Image B resembles Image C)'],
    keywords: ['hidden', 'Image B', 'not visible', 'earlier layer'],
  },
  q13_b: {
    keyConcepts: ['non-invasive', 'painting not damaged', 'whole painting examined'],
    keywords: ['not damaged', 'non-invasive', 'whole painting', 'preserved'],
  },
}
