import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2022_V2: Record<string, ConceptEntry> = {

  q1_a: {
    keyConcepts: ['The unit of force is the newton (N)'],
    keywords: ['newton', 'unit', 'force'],
  },
  q1_b: {
    keyConcepts: ['Balanced forces → constant speed; drag > thrust → deceleration'],
    keywords: ['balanced', 'constant speed', 'deceleration', 'drag > thrust'],
  },
  q1_c: {
    keyConcepts: ['Micro-ridges reduce turbulence → less drag → forces balance at higher speed'],
    keywords: ['micro-ridges', 'turbulence', 'drag', 'balanced', 'higher speed'],
  },
  q1_d: {
    keyConcepts: ['Area under v–t graph = displacement; trapezoid: (80+60)/2 × 20 = 1400 m'],
    keywords: ['area', 'v–t graph', 'trapezoid', '1400 m'],
  },
  q1_e: {
    keyConcepts: ['Less drag → shallower deceleration → higher exit speed; line above original'],
    keywords: ['less drag', 'shallower', 'higher exit speed'],
  },

  q2_a: {
    keyConcepts: ['Ideal transformer: Pin = Pout (no losses)'],
    keywords: ['ideal', 'Pin = Pout'],
  },
  q2_b: {
    keyConcepts: ['Vp = Vs × (Np/Ns) = 6600 × (450/9000) = 330 V; step-up transformer'],
    keywords: ['330 V', 'transformer', 'step-up', '1/20'],
  },
  q2_c: {
    keyConcepts: ['Power output = 0.88 × 25000 = 22000 W'],
    keywords: ['efficiency', '88%', '22000 W'],
  },
  q2_d: {
    keyConcepts: ['High voltage → low current (P = IV)', 'Low current → less I²R heating in cables'],
    keywords: ['high voltage', 'low current', 'I²R', 'transmission'],
  },

  q3_a: {
    keyConcepts: ['Conduction: particle contact; Convection: fluid bulk movement; Radiation: EM waves'],
    keywords: ['conduction', 'convection', 'radiation'],
  },
  q3_b: {
    keyConcepts: ['Condensation: gas → liquid on cold surface; answer D'],
    keywords: ['condensation', 'D'],
  },
  q3_c: {
    keyConcepts: ['Process: condensation'],
    keywords: ['condensation'],
  },
  q3_d: {
    keyConcepts: ['Cold surface removes energy from vapour → vapour condenses to liquid'],
    keywords: ['cold', 'vapour', 'energy', 'condensation'],
  },
  q3_e: {
    keyConcepts: ['Sugar syrup denser; cold meltwater cannot sink; reduced convection → slower melting'],
    keywords: ['denser', 'meltwater', 'cannot sink', 'convection', 'slower'],
  },
  q3_f: {
    keyConcepts: ['Heating increases temperature gradient → faster heat transfer → faster melting'],
    keywords: ['temperature', 'gradient', 'faster', 'heat transfer'],
  },

  q4_a: {
    keyConcepts: ['Research question names IV (air column length) and DV (frequency)'],
    keywords: ['air column', 'length', 'frequency'],
  },
  q4_b: {
    keyConcepts: ['Same material (glass), same diameter; 5 lengths for sufficient data'],
    keywords: ['same material', 'same diameter', 'five', 'control'],
  },
  q4_c: {
    keyConcepts: ['IV: air column length; CVs: material (resonance) and diameter (volume)'],
    keywords: ['IV', 'material', 'diameter'],
  },
  q4_d: {
    keyConcepts: ['L × f = 360 = constant for all pairs → inverse proportion confirmed'],
    keywords: ['inverse proportion', 'L × f = constant', '360'],
  },
  q4_e: {
    keyConcepts: ['1/0.40 = 2.5 m⁻¹'],
    keywords: ['2.5', 'm⁻¹'],
  },
  q4_f: {
    keyConcepts: ['Plot (2.5, 900); straight line of best fit through origin'],
    keywords: ['(2.5, 900)', 'best fit', 'origin'],
  },
  q4_g: {
    keyConcepts: ['Gradient of f vs 1/L = speed of sound in air; answer C'],
    keywords: ['gradient', 'speed of sound', 'C'],
  },
  q4_h: {
    keyConcepts: ['Gradient = 1800/5.0 = 360 m s⁻¹ = speed of sound in air'],
    keywords: ['360 m s⁻¹', 'gradient', 'speed of sound'],
  },

  q5_a: {
    keyConcepts: ['Tension = mg = 0.60 × 9.8 = 5.88 ≈ 5.9 N'],
    keywords: ['tension', 'weight', '5.9 N', 'mg'],
  },
  q5_b: {
    keyConcepts: ['Control: wire length, diameter, material, plucking method'],
    keywords: ['length', 'diameter', 'material', 'control'],
  },
  q5_c: {
    keyConcepts: ['Table: headers with units, ascending tension order, 75.2 N correct, consistent rounding'],
    keywords: ['table', 'units', 'ascending', '75.2 N'],
  },
  q5_d: {
    keyConcepts: ['Repeats and mean reduce random error → more reliable results'],
    keywords: ['repeat', 'mean', 'random error', 'reliability'],
  },
  q5_e: {
    keyConcepts: ['New IV: wire length; controls: tension (same mass) and material/diameter'],
    keywords: ['new IV', 'length', 'tension', 'diameter'],
  },
  q5_f: {
    keyConcepts: ['Hypothesis: longer wire → lower frequency because lower natural vibration frequency'],
    keywords: ['hypothesis', 'length', 'frequency', 'if–then–because'],
  },

  q6_a: {
    keyConcepts: ['Three repeats: identify anomalous results; compute reliable mean'],
    keywords: ['anomalous', 'mean', 'reliable'],
  },
  q6_b: {
    keyConcepts: ['2 layers: (116+115+114)/3 = 115 dB; 4 layers: (113+112+114)/3 = 113 dB'],
    keywords: ['115 dB', '113 dB', 'mean'],
  },
  q6_c: {
    keyConcepts: ['Mean of 6 and 8 layers = (109+103)/2 = 106 dB'],
    keywords: ['106 dB', 'mean'],
  },
  q6_d: {
    keyConcepts: [
      'IV = bubble wrap layers; DV = sound level (dB); CVs: distance and wrap type (justified)',
      'Hypothesis: more layers → lower dB, because each layer traps air (poor sound conductor)',
      'Method: systematic, ≥5 layer values, 3 repeats, mean, graph',
    ],
    keywords: ['IV', 'DV', 'control', 'hypothesis', 'method', 'repeat', 'mean', 'graph'],
  },

  q7_a: {
    keyConcepts: ['Geocentric: Mars orbits in one direction → retrograde motion unexplained'],
    keywords: ['geocentric', 'retrograde', 'unexplained'],
  },
  q7_b: {
    keyConcepts: ['t = d/v = 5.4×10¹¹/3.0×10⁸ = 1800 s = 30 minutes'],
    keywords: ['1800 s', '30 minutes', 't = d/v'],
  },
  q7_c: {
    keyConcepts: ['Launch window: optimal orbital alignment → minimum travel distance and fuel cost'],
    keywords: ['launch date', 'alignment', 'distance', 'fuel'],
  },

  q8_a: {
    keyConcepts: [
      'Crewed advantages: real-time decisions (30-min delay blocks robotic control), manual dexterity',
      'Crewed disadvantages: life support cost, radiation, bone/muscle atrophy',
      'Economic: crewed costs far more; robotic gives more missions per budget',
      'Ethical: human life risk, crew selection, Mars governance',
    ],
    keywords: ['crewed', 'robotic', 'cost', 'radiation', 'ethical', 'evaluation', 'conclusion'],
  },

  q9_a: {
    keyConcepts: [
      'Temperature −60 °C: insulated domed habitats, geothermal/nuclear heating',
      'Radiation (no magnetosphere): underground habitats, polyethylene/lead shielding',
      'Low gravity 38%: resistance exercise, centrifuge, supplements',
    ],
    keywords: ['temperature', 'radiation', 'gravity', 'colonisation', 'solutions'],
  },

}
