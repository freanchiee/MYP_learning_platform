import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2020_V2: Record<string, ConceptEntry> = {
  // Q1 — Thermoregulation (Musk ox)
  q1_a: {
    keyConcepts: ['thick shaggy fur', 'insulation', 'musk ox', 'cold adaptation'],
    keywords: ['thick', 'shaggy', 'fur', 'insulate', 'cold', 'musk ox'],
  },
  q1_b: {
    keyConcepts: ['blubber is poor conductor', 'fat insulates', 'prevents heat loss to cold water'],
    keywords: ['blubber', 'fat', 'conductor', 'insulator', 'heat loss', 'prevent', 'cold', 'water'],
  },
  q1_c: {
    keyConcepts: ['white fur reduces infrared radiation', 'large ears increase heat loss', 'surface area', 'conduction', 'convection'],
    keywords: ['white', 'fur', 'radiation', 'infrared', 'large', 'ears', 'surface area', 'conduction', 'convection', 'heat loss'],
  },
  q1_d: {
    keyConcepts: ['evaporation removes heat', 'high energy particles escape', 'lower average energy', 'cooling effect'],
    keywords: ['evaporation', 'heat', 'high energy', 'fast', 'escape', 'surface', 'lower energy', 'cool'],
  },

  // Q2 — Energy / La Marmotte
  q2_a: {
    keyConcepts: ['Sankey diagram', 'chemical energy', 'useful energy output', 'heat losses', 'frictional losses'],
    keywords: ['Sankey', 'chemical', 'useful', 'heat', 'friction', 'energy', '25%', '70%', '5%'],
  },
  q2_b: {
    keyConcepts: ['gravitational potential energy', 'Ep = mgh', 'change in height 1800 m', 'mass 600 kg', 'g = 10'],
    keywords: ['GPE', 'gravitational', 'potential', 'mgh', '1800', 'height', 'altitude', 'joules', 'MJ', '600'],
  },
  q2_c: {
    keyConcepts: ['power = energy / time', 'watts', 'rate of energy transfer', 'P = 18 kW'],
    keywords: ['power', 'energy', 'time', 'P = E/t', 'watts', 'W', 'kW', '18000', '450'],
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
    keyConcepts: ['satellite phone', 'weather forecasting', 'TV relay', 'satellite applications'],
    keywords: ['weather', 'TV', 'telephone', 'phone', 'relay', 'satellite', 'application'],
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

  // Q5 — Metal staple investigation
  q5_a: {
    keyConcepts: ['raw data table', 'headings with units', 'ascending order', 'coil length vs staples'],
    keywords: ['table', 'headings', 'units', 'length', 'staples', 'raw data', 'ascending'],
  },
  q5_b: {
    keyConcepts: ['turns per centimetre', 'processed data', 'weight = staples × 0.5 N', 'calculated values'],
    keywords: ['turns per cm', 'calculate', 'weight', 'processed', 'cm⁻¹', '0.5 N', 'multiply'],
  },
  q5_c: {
    keyConcepts: ['small increments', 'more precise', 'accurate measurement', 'smaller weight per pin'],
    keywords: ['precise', 'accurate', 'small', 'increment', '0.02 N', 'better', 'measurement'],
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
    keyConcepts: ['measure height', 'read from diagram', '7 mm', 'complete table', '1/diameter 0.25'],
    keywords: ['measure', 'height', '7', 'read', 'table', 'diameter', '4.0', '0.25', 'capillary'],
  },
  q6_b: {
    keyConcepts: ['plot point (0.25, 7.0)', 'line of best fit', 'axis labels', '1/diameter x-axis', 'height y-axis'],
    keywords: ['plot', 'graph', 'line of best fit', 'axis', 'label', 'units', 'point', '0.25', '7.0'],
  },
  q6_c: {
    keyConcepts: ['gradient calculation', 'capillary constant ≈ 28', 'Δy/Δx', 'two points on line'],
    keywords: ['gradient', 'calculate', 'Δy', 'Δx', 'capillary constant', 'slope', '28'],
  },
  q6_d: {
    keyConcepts: ['inversely proportional', 'small tube diameter', 'tree height 115 m', 'unrealistically small'],
    keywords: ['inversely proportional', 'small diameter', 'tree', '115', 'height', 'unrealistic', 'capillary alone'],
  },

  // Q7 — Design investigation (detergent concentration)
  q7_a: {
    keyConcepts: ['research question detergent concentration', 'IV = detergent concentration', 'DV = height', 'control tube diameter', 'at least 5 increments', 'three trials', 'mean'],
    keywords: ['detergent', 'concentration', 'height', 'IV', 'DV', 'control', 'pipette', 'capillary', 'ruler', 'method', 'repeat', 'mean', 'trials'],
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
