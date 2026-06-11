import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2020_V1: Record<string, ConceptEntry> = {
  // Q1 — Thermoregulation (Arctic hare)
  q1_a: {
    keyConcepts: ['dense white fur', 'insulation', 'Arctic hare', 'cold adaptation'],
    keywords: ['dense', 'white', 'fur', 'insulate', 'cold', 'Arctic hare'],
  },
  q1_b: {
    keyConcepts: ['dense undercoat traps air', 'air is a poor conductor', 'insulator', 'convection reduced'],
    keywords: ['dense', 'undercoat', 'air', 'trap', 'insulator', 'conductor', 'convection'],
  },
  q1_c: {
    keyConcepts: ['white feathers reduce radiation', 'silver hairs reflect solar radiation', 'thermoregulation'],
    keywords: ['white', 'feathers', 'radiation', 'silver', 'reflect', 'solar', 'heat loss', 'absorb'],
  },
  q1_d: {
    keyConcepts: ['evaporation removes heat', 'high energy particles escape', 'lower average energy', 'cooling effect'],
    keywords: ['evaporation', 'heat', 'high energy', 'fast', 'escape', 'surface', 'lower energy', 'cool'],
  },

  // Q2 — Energy / Stelvio Pass
  q2_a: {
    keyConcepts: ['Sankey diagram', 'chemical energy', 'useful energy output', 'heat losses', 'frictional losses'],
    keywords: ['Sankey', 'chemical', 'useful', 'heat', 'friction', 'energy', '25%', '70%', '5%'],
  },
  q2_b: {
    keyConcepts: ['gravitational potential energy', 'Ep = mgh', 'change in height 1600 m', 'mass 720 kg', 'g = 10'],
    keywords: ['GPE', 'gravitational', 'potential', 'mgh', '1600', 'height', 'altitude', 'joules', 'MJ', '720'],
  },
  q2_c: {
    keyConcepts: ['power = energy / time', 'watts', 'rate of energy transfer', 'P = 20 kW'],
    keywords: ['power', 'energy', 'time', 'P = E/t', 'watts', 'W', 'kW', '20000', '480'],
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
    keyConcepts: ['satellite phone', 'weather forecasting', 'satellite applications', 'GPS', 'navigation'],
    keywords: ['weather', 'GPS', 'navigation', 'phone', 'satellite', 'application'],
  },
  q3_d: {
    keyConcepts: ['speed of light', 'distance = speed × time', 't = d/c', 'unit conversion km to m', 'two-way 0.24 s'],
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

  // Q5 — Steel washer investigation
  q5_a: {
    keyConcepts: ['raw data table', 'headings with units', 'ascending order', 'coil length vs washers'],
    keywords: ['table', 'headings', 'units', 'length', 'washers', 'raw data', 'ascending'],
  },
  q5_b: {
    keyConcepts: ['turns per centimetre', 'processed data', 'weight = washers × 0.3 N', 'calculated values'],
    keywords: ['turns per cm', 'calculate', 'weight', 'processed', 'cm⁻¹', '0.3 N', 'multiply'],
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
    keyConcepts: ['measure height', 'read from diagram', '14 mm', 'complete table', '1/diameter 0.50'],
    keywords: ['measure', 'height', '14', 'read', 'table', 'diameter', '2.0', '0.50', 'capillary'],
  },
  q6_b: {
    keyConcepts: ['plot point (0.50, 14.0)', 'line of best fit', 'axis labels', '1/diameter x-axis', 'height y-axis'],
    keywords: ['plot', 'graph', 'line of best fit', 'axis', 'label', 'units', 'point', '0.50', '14.0'],
  },
  q6_c: {
    keyConcepts: ['gradient calculation', 'capillary constant ≈ 28', 'Δy/Δx', 'two points on line'],
    keywords: ['gradient', 'calculate', 'Δy', 'Δx', 'capillary constant', 'slope', '28'],
  },
  q6_d: {
    keyConcepts: ['inversely proportional', 'small tube diameter', 'tree height 115 m', 'unrealistically small'],
    keywords: ['inversely proportional', 'small diameter', 'tree', '115', 'height', 'unrealistic', 'capillary alone'],
  },

  // Q7 — Design investigation (salt concentration)
  q7_a: {
    keyConcepts: ['research question salt concentration', 'IV = salt concentration', 'DV = height', 'control tube diameter', 'at least 5 increments', 'three trials', 'mean'],
    keywords: ['concentration', 'salt', 'height', 'IV', 'DV', 'control', 'balance', 'cylinder', 'capillary', 'ruler', 'method', 'repeat', 'mean', 'trials'],
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
