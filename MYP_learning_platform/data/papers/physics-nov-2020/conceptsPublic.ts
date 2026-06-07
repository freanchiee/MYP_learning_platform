import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2020: Record<string, ConceptEntry> = {
  // Q1 — Thermoregulation
  q1_a: {
    keyConcepts: ['thick fur', 'insulation', 'polar bear', 'cold adaptation'],
    keywords: ['thick', 'long', 'white', 'fur', 'insulate', 'cold'],
  },
  q1_b: {
    keyConcepts: ['hollow fur', 'trapped air', 'poor conductor', 'insulator', 'convection reduced'],
    keywords: ['hollow', 'air', 'trap', 'insulator', 'conductor', 'convection'],
  },
  q1_c: {
    keyConcepts: ['white fur reduces radiation', 'large ears increase heat loss', 'surface area', 'conduction', 'convection'],
    keywords: ['white', 'radiation', 'large', 'surface area', 'ear', 'conduction', 'convection', 'heat loss'],
  },
  q1_d: {
    keyConcepts: ['evaporation removes heat', 'high energy particles escape', 'lower average energy', 'cooling effect'],
    keywords: ['evaporation', 'heat', 'high energy', 'fast', 'escape', 'surface', 'lower energy', 'cool'],
  },

  // Q2 — Energy / Pikes Peak
  q2_a: {
    keyConcepts: ['Sankey diagram', 'chemical energy', 'useful energy output', 'heat losses', 'frictional losses'],
    keywords: ['Sankey', 'chemical', 'useful', 'heat', 'friction', 'energy', '25%', '70%', '5%'],
  },
  q2_b: {
    keyConcepts: ['gravitational potential energy', 'Ep = mgh', 'change in height', 'mass', 'g = 10'],
    keywords: ['GPE', 'gravitational', 'potential', 'mgh', 'height', 'altitude', 'joules', 'MJ'],
  },
  q2_c: {
    keyConcepts: ['power = energy / time', 'watts', 'rate of energy transfer'],
    keywords: ['power', 'energy', 'time', 'P = E/t', 'watts', 'W', 'kW'],
  },

  // Q3 — Light and space
  q3_a: {
    keyConcepts: ['emits light', 'reflects light', 'star emits', 'moon reflects', 'planet reflects'],
    keywords: ['emit', 'reflect', 'star', 'moon', 'planet', 'satellite', 'luminous'],
  },
  q3_b: {
    keyConcepts: ['geostationary orbit', '24 hour period', 'same point above Earth'],
    keywords: ['geostationary', '24 hours', 'period', 'orbit', 'stationary', 'same'],
  },
  q3_c: {
    keyConcepts: ['weather forecasting', 'satellite applications', 'GPS', 'navigation', 'TV relay'],
    keywords: ['weather', 'GPS', 'navigation', 'television', 'relay', 'satellite', 'application'],
  },
  q3_d: {
    keyConcepts: ['speed of light', 'distance = speed × time', 't = d/c', 'unit conversion km to m'],
    keywords: ['speed of light', '3 × 10⁸', 'distance', 'time', 'convert', 'km', 'delay', '0.24'],
  },
  q3_e: {
    keyConcepts: ['galaxies moving apart', 'Big Bang', 'expanding universe', 'red shift evidence'],
    keywords: ['Big Bang', 'galaxies', 'apart', 'expanding', 'evidence', 'origin', 'universe'],
  },

  // Q4 — Kibble balance / electromagnet
  q4_a: {
    keyConcepts: ['research question', 'current as IV', 'electromagnet strength as DV'],
    keywords: ['research question', 'current', 'electromagnet', 'strength', 'IV', 'DV', 'affect'],
  },
  q4_b: {
    keyConcepts: ['independent variable', 'dependent variable', 'control variable', 'current IV', 'weight DV'],
    keywords: ['independent', 'dependent', 'control', 'current', 'weight', 'turns', 'diameter', 'variable'],
  },
  q4_c: {
    keyConcepts: ['hypothesis', 'if-then-because', 'current increases → weight increases', 'electromagnetic field stronger'],
    keywords: ['hypothesis', 'if', 'then', 'because', 'current', 'increase', 'weight', 'stronger', 'field'],
  },
  q4_d: {
    keyConcepts: ['ammeter', 'measures current', 'balance measures weight', 'appropriate equipment'],
    keywords: ['ammeter', 'current', 'balance', 'measure', 'equipment', 'weigh'],
  },
  q4_e: {
    keyConcepts: ['greatest range', 'appropriate scale', 'balance selection', 'measurement range'],
    keywords: ['range', 'balance', 'greatest', 'scale', 'measure', 'appropriate'],
  },

  // Q5 — Paper clip investigation
  q5_a: {
    keyConcepts: ['raw data table', 'headings with units', 'ascending order', 'coil length vs clips'],
    keywords: ['table', 'headings', 'units', 'length', 'clips', 'raw data', 'ascending'],
  },
  q5_b: {
    keyConcepts: ['turns per centimetre', 'processed data', 'weight = clips × 0.2', 'calculated values'],
    keywords: ['turns per cm', 'calculate', 'weight', 'processed', 'cm⁻¹', '0.2 N', 'multiply'],
  },
  q5_c: {
    keyConcepts: ['small increments', 'more precise', 'accurate measurement', 'smaller weight per pin'],
    keywords: ['precise', 'accurate', 'small', 'increment', '0.01 N', 'better', 'measurement'],
  },
  q5_d: {
    keyConcepts: ['straight line through origin', 'proportional relationship', 'graph supports relationship'],
    keywords: ['straight line', 'origin', 'proportional', 'direct proportion', 'relationship', 'supports'],
  },
  q5_e: {
    keyConcepts: ['same shape graph', 'straight line through origin', 'gradient changes', 'proportional still'],
    keywords: ['same shape', 'straight line', 'origin', 'gradient', 'different', 'proportional'],
  },

  // Q6 — Capillary action
  q6_a: {
    keyConcepts: ['measure height', 'read from diagram', '12 mm', 'complete table', '1/diameter'],
    keywords: ['measure', 'height', '12', 'read', 'table', 'diameter', 'capillary'],
  },
  q6_b: {
    keyConcepts: ['plot point', 'line of best fit', 'axis labels', '1/diameter x-axis', 'height y-axis'],
    keywords: ['plot', 'graph', 'line of best fit', 'axis', 'label', 'units', 'point'],
  },
  q6_c: {
    keyConcepts: ['gradient calculation', 'capillary constant', 'Δy/Δx', 'two points on line', '≈ 30'],
    keywords: ['gradient', 'calculate', 'Δy', 'Δx', 'capillary constant', 'slope', '30'],
  },
  q6_d: {
    keyConcepts: ['inversely proportional', 'small tube diameter', 'tree height 115 m', 'unrealistically small'],
    keywords: ['inversely proportional', 'small diameter', 'tree', '115', 'height', 'unrealistic', 'capillary alone'],
  },

  // Q7 — Design investigation
  q7_a: {
    keyConcepts: ['research question temperature', 'IV temperature', 'DV height', 'control tube diameter', 'at least 5 increments', 'three trials', 'mean'],
    keywords: ['temperature', 'height', 'IV', 'DV', 'control', 'thermometer', 'ruler', 'method', 'repeat', 'mean', 'trials'],
  },

  // Q8 — Maglev trains
  q8_a: {
    keyConcepts: ['iron is magnetic', 'ferromagnetic metal', 'attracted to magnet'],
    keywords: ['iron', 'magnetic', 'ferromagnetic', 'attracted'],
  },
  q8_b: {
    keyConcepts: ['levitation = upward', 'guidance = sideways', 'propulsion = forward', 'force identification'],
    keywords: ['levitation', 'guidance', 'propulsion', 'upward', 'sideways', 'forward', 'force'],
  },
  q8_c: {
    keyConcepts: ['higher speed', 'less energy wasted', 'less wear', 'lower maintenance'],
    keywords: ['speed', 'energy', 'waste', 'wear', 'maintenance', 'friction', 'advantage'],
  },
  q8_d: {
    keyConcepts: ['more passengers → more weight', 'train sinks closer → smaller gap', 'repelling force increases', 'inverse relationship'],
    keywords: ['passengers', 'weight', 'distance', 'gap', 'repelling force', 'increases', 'closer'],
  },

  // Q9 — Transportation evaluation
  q9_a: {
    keyConcepts: ['economic advantages', 'environmental advantages', 'comfort', 'safety comparison', 'recommendation'],
    keywords: ['economic', 'environmental', 'comfort', 'safety', 'compare', 'evaluate', 'recommend', 'CO2', 'cost', 'time'],
  },
}
