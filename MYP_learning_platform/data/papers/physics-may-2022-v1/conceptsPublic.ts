import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2022_V1: Record<string, ConceptEntry> = {

  q1_a: {
    keyConcepts: ['The unit of force is the newton (N)'],
    keywords: ['newton', 'unit', 'force'],
  },
  q1_b: {
    keyConcepts: ['Balanced forces → constant velocity; unbalanced forces → acceleration'],
    keywords: ['balanced forces', 'unbalanced forces', 'constant speed', 'acceleration'],
  },
  q1_c: {
    keyConcepts: ['Streamlining reduces drag', 'Lower drag → forces balance at higher speed'],
    keywords: ['drag', 'streamlined', 'tapered nose', 'balanced forces', 'higher speed'],
  },
  q1_d: {
    keyConcepts: ['Area under v–t graph = displacement (distance)', 'Trapezoid: (75+55)/2 × 25 = 1625 m'],
    keywords: ['area', 'v–t graph', 'trapezoid', '1625 m'],
  },
  q1_e: {
    keyConcepts: ['Less drag → shallower deceleration → higher exit speed on v–t graph'],
    keywords: ['less drag', 'shallower gradient', 'higher exit speed'],
  },

  q2_a: {
    keyConcepts: ['Ideal transformer: power input = power output (no losses)'],
    keywords: ['ideal transformer', 'Pin = Pout'],
  },
  q2_b: {
    keyConcepts: ['Transformer equation: Vp/Vs = Np/Ns → Vp = 6.0 × (2400/120) = 120 V'],
    keywords: ['transformer', 'turns ratio', '120 V', 'step-down'],
  },
  q2_c: {
    keyConcepts: ['Power output = efficiency × power input = 0.92 × 8500 = 7820 W'],
    keywords: ['efficiency', '92%', '7820 W'],
  },
  q2_d: {
    keyConcepts: ['High voltage → low current (P = IV)', 'Low current → less I²R heating loss in cables'],
    keywords: ['high voltage', 'low current', 'I²R', 'less heating', 'transmission'],
  },

  q3_a: {
    keyConcepts: ['Conduction: particle contact; Convection: fluid bulk movement; Radiation: EM waves'],
    keywords: ['conduction', 'convection', 'radiation'],
  },
  q3_b: {
    keyConcepts: ['Condensation: water vapour → liquid on cold surface; answer D'],
    keywords: ['condensation', 'D'],
  },
  q3_c: {
    keyConcepts: ['Process name: condensation'],
    keywords: ['condensation'],
  },
  q3_d: {
    keyConcepts: ['Cold surface absorbs energy from vapour → vapour condenses to liquid'],
    keywords: ['cold', 'vapour', 'energy', 'condensation'],
  },
  q3_e: {
    keyConcepts: ['Sea water denser; cold meltwater cannot sink; reduced convection → slower melting'],
    keywords: ['sea water', 'denser', 'meltwater', 'convection', 'slower melting'],
  },
  q3_f: {
    keyConcepts: ['Stirring restores convection → increased heat transfer → faster melting'],
    keywords: ['stirring', 'convection', 'heat transfer', 'faster'],
  },

  q4_a: {
    keyConcepts: ['Research question names IV (pipe length) and DV (frequency)'],
    keywords: ['research question', 'pipe length', 'frequency'],
  },
  q4_b: {
    keyConcepts: ['Same material, same diameter, 5 lengths → controls material and air column volume'],
    keywords: ['same material', 'same diameter', 'five lengths', 'control'],
  },
  q4_c: {
    keyConcepts: ['IV: pipe length; CVs with justification: material (resonance) and diameter (air volume)'],
    keywords: ['IV', 'CV', 'length', 'material', 'diameter'],
  },
  q4_d: {
    keyConcepts: ['Inverse proportion: L × f = constant = 336 (0.20 × 1680 = 336; 0.40 × 840 = 336)'],
    keywords: ['inverse proportion', 'L × f = constant', '336'],
  },
  q4_e: {
    keyConcepts: ['1/Length for 0.40 m = 1/0.40 = 2.5 m⁻¹'],
    keywords: ['reciprocal', '2.5 m⁻¹'],
  },
  q4_f: {
    keyConcepts: ['Plot (2.5 m⁻¹, 840 Hz); line of best fit through origin'],
    keywords: ['(2.5, 840)', 'line of best fit', 'origin'],
  },
  q4_g: {
    keyConcepts: ['Gradient of f vs 1/L = speed of sound in air; answer C'],
    keywords: ['gradient', 'speed of sound', 'C'],
  },
  q4_h: {
    keyConcepts: ['Gradient = Δf/Δ(1/L) = 1680/5.0 = 336 m s⁻¹ = speed of sound'],
    keywords: ['336 m s⁻¹', 'gradient', 'speed of sound'],
  },

  q5_a: {
    keyConcepts: ['Tension = weight = mg = 0.45 × 9.8 = 4.41 ≈ 4.4 N'],
    keywords: ['tension', 'weight', 'mg', '4.4 N'],
  },
  q5_b: {
    keyConcepts: ['Control: wire length, diameter, material, plucking method'],
    keywords: ['length', 'diameter', 'material', 'control'],
  },
  q5_c: {
    keyConcepts: ['Table: headers with units, ascending order, correct 56.2 N, consistent rounding'],
    keywords: ['table', 'units', 'ascending', '56.2 N'],
  },
  q5_d: {
    keyConcepts: ['Repeats and mean reduce random error, improve reliability'],
    keywords: ['repeat', 'mean', 'random error', 'reliability'],
  },
  q5_e: {
    keyConcepts: ['New IV: wire length; controls: tension (same mass) and material/diameter'],
    keywords: ['new IV', 'length', 'tension', 'diameter'],
  },
  q5_f: {
    keyConcepts: ['Hypothesis: if length increases, frequency decreases, because longer wire vibrates at lower frequency'],
    keywords: ['hypothesis', 'length', 'frequency', 'decreases', 'because'],
  },

  q6_a: {
    keyConcepts: ['Three repeats: identify anomalous results; compute reliable mean'],
    keywords: ['anomalous', 'mean', 'reliable'],
  },
  q6_b: {
    keyConcepts: ['2 layers mean = (111+110+112)/3 = 111 dB; 4 layers mean = (108+109+107)/3 = 108 dB'],
    keywords: ['111 dB', '108 dB', 'mean'],
  },
  q6_c: {
    keyConcepts: ['Mean of 6 and 8 layers = (104+98)/2 = 101 dB'],
    keywords: ['101 dB', 'mean'],
  },
  q6_d: {
    keyConcepts: [
      'IV = foam layers; DV = sound level (dB); CVs: distance and foam type (justified)',
      'Hypothesis: more layers → lower dB, because each layer absorbs sound energy',
      'Method: systematic, ≥5 layer values, 3 repeats, mean, graph',
    ],
    keywords: ['IV', 'DV', 'control', 'hypothesis', 'method', 'repeat', 'mean', 'graph'],
  },

  q7_a: {
    keyConcepts: ['Geocentric predicts uniform directional motion; retrograde (reversal) is unexplained'],
    keywords: ['geocentric', 'retrograde', 'unexplained'],
  },
  q7_b: {
    keyConcepts: ['t = d/v = 1.8×10¹¹/3.0×10⁸ = 600 s = 10 minutes'],
    keywords: ['600 s', '10 minutes', 't = d/v'],
  },
  q7_c: {
    keyConcepts: ['Launch window: optimal Earth–Mars alignment → minimum distance and fuel'],
    keywords: ['launch date', 'alignment', 'distance', 'fuel'],
  },

  q8_a: {
    keyConcepts: [
      'Technical challenges: communication delay (10 min one-way), radiation, bone/muscle loss',
      'Economic: high cost vs spinoffs',
      'Political: prestige, cooperation, territorial rights',
      'Justified conclusion with evidence',
    ],
    keywords: ['crewed mission', 'radiation', 'cost', 'prestige', 'evaluation', 'conclusion'],
  },

  q9_a: {
    keyConcepts: [
      'Low temperature (−60 °C): insulated habitats, heating',
      'Radiation (no magnetosphere): underground habitats, shielding',
      'Low gravity (38%): resistance exercise, centrifuge',
    ],
    keywords: ['temperature', 'radiation', 'gravity', 'colonisation', 'solutions'],
  },

}
