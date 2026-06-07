import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2022: Record<string, ConceptEntry> = {

  // ── Q1: Forces & Motion — Maglev Train ─────────────────────
  q1_a: {
    keyConcepts: ['the SI unit of force is the newton (N)', 'force is a vector quantity'],
    keywords: ['newtons', 'N', 'unit', 'force', 'SI unit'],
  },
  q1_b: {
    keyConcepts: ['balanced forces → constant speed (Newton\'s 1st law)', 'thrust > drag → acceleration (Newton\'s 2nd law)'],
    keywords: ['balanced forces', 'unbalanced forces', 'constant speed', 'acceleration', 'resultant force', 'thrust', 'drag'],
  },
  q1_c: {
    keyConcepts: ['streamlined shape reduces drag force', 'less drag allows balanced forces at higher speed', 'smooth airflow reduces turbulence'],
    keywords: ['streamlined', 'drag force', 'air resistance', 'balanced forces', 'resultant force', 'constant speed'],
  },
  q1_d: {
    keyConcepts: ['displacement = area under velocity–time graph', 'for a trapezoid: area = ½(v₁ + v₂) × t'],
    keywords: ['v-t graph', 'area under graph', 'displacement', 'trapezoid', 'distance', 'speed × time'],
  },
  q1_e: {
    keyConcepts: ['higher constant speed → line above original on v-t graph', 'same initial speed → same y-intercept'],
    keywords: ['v-t graph', 'y-intercept', 'above original', 'higher speed', 'constant velocity'],
  },

  // ── Q2: Electricity — Transformers ─────────────────────────
  q2_a: {
    keyConcepts: ['ideal transformer: power input = power output', 'no energy losses in an ideal transformer'],
    keywords: ['power in', 'power out', 'equal', 'ideal transformer', 'energy conservation'],
  },
  q2_b: {
    keyConcepts: ['transformer equation: Vp/Vs = Np/Ns', 'step-up transformer has more secondary turns → higher output voltage'],
    keywords: ['transformer equation', 'turns ratio', 'primary voltage', 'secondary voltage', 'Np', 'Ns'],
  },
  q2_c: {
    keyConcepts: ['efficiency = useful power output ÷ total power input', 'useful output = efficiency × input'],
    keywords: ['efficiency', 'power output', 'power input', 'percentage', 'useful power'],
  },
  q2_d: {
    keyConcepts: ['high voltage → low current (since P = IV)', 'power loss in wires = I²R → lower current means less heating', 'resistance of transmission cables is fixed'],
    keywords: ['high voltage', 'low current', 'energy loss', 'heat', 'I²R', 'resistance', 'national grid'],
  },

  // ── Q3: Thermal Physics — Ice Melting ──────────────────────
  q3_a: {
    keyConcepts: ['conduction: energy transfer through direct particle contact', 'convection: energy transfer by bulk fluid movement', 'radiation: energy transfer as electromagnetic waves (no medium needed)'],
    keywords: ['conduction', 'convection', 'radiation', 'heat transfer', 'particles', 'fluid', 'electromagnetic waves'],
  },
  q3_b: {
    keyConcepts: ['condensation: water vapour changes state to liquid when cooled', 'occurs when warm moist air contacts a cold surface'],
    keywords: ['condensation', 'water vapour', 'liquid', 'state change', 'cooling'],
  },
  q3_c: {
    keyConcepts: ['condensation is the process of gas → liquid', 'named process when water vapour contacts cold surface'],
    keywords: ['condensation', 'condenses', 'state change', 'process name'],
  },
  q3_d: {
    keyConcepts: ['cold surface causes water vapour to lose energy and condense', 'cup is cooled by the ice inside'],
    keywords: ['cold surface', 'water vapour', 'condenses', 'energy transfer', 'temperature difference'],
  },
  q3_e: {
    keyConcepts: ['salt water is denser than pure water', 'cold melt water stays near surface in salt water → less convection', 'less convection → slower heat transfer → slower melting'],
    keywords: ['density', 'salt water', 'convection', 'cold water', 'surface', 'heat transfer', 'slower melting'],
  },
  q3_f: {
    keyConcepts: ['stirring distributes cold melt water → increases convection', 'more convection → faster heat transfer → shorter melting time'],
    keywords: ['stirring', 'convection', 'mixing', 'heat transfer', 'melting time', 'decreases'],
  },

  // ── Q4: Waves — Sound in Tubes ─────────────────────────────
  q4_a: {
    keyConcepts: ['research question links the independent variable (tube length) to the dependent variable (frequency)', 'format: "How does [IV] affect [DV]?"'],
    keywords: ['research question', 'length', 'frequency', 'independent variable', 'dependent variable'],
  },
  q4_b: {
    keyConcepts: ['select one material only to control material as a variable', 'select one diameter only to control diameter', 'use the set with 5 different lengths for sufficient data'],
    keywords: ['wooden tubes', '2.5 cm diameter', '5 lengths', 'control variable', 'material', 'diameter'],
  },
  q4_c: {
    keyConcepts: ['IV = what the experimenter changes (tube length)', 'CVs = what must be kept constant (material, diameter)', 'justification links CV to its effect on the DV'],
    keywords: ['independent variable', 'length', 'control variable', 'material', 'diameter', 'fair test'],
  },
  q4_d: {
    keyConcepts: ['inverse proportion: L × f = constant', 'test by computing products of paired values', 'if products equal → inverse proportion confirmed'],
    keywords: ['inverse proportion', 'L × f = constant', 'data points', 'hypothesis', 'supported'],
  },
  q4_e: {
    keyConcepts: ['1/L is the reciprocal of tube length', '1/0.40 = 2.5 m⁻¹'],
    keywords: ['reciprocal', '1/length', 'm⁻¹', '2.5'],
  },
  q4_f: {
    keyConcepts: ['plot data point accurately on the graph', 'line of best fit: equal points above and below', 'LOBF should pass through the origin for this proportional relationship'],
    keywords: ['plot', '(2.5, 860)', 'line of best fit', 'LOBF', 'origin'],
  },
  q4_g: {
    keyConcepts: ['gradient of f vs 1/L graph = speed of sound', 'f = v × (1/L) → gradient = v'],
    keywords: ['gradient', 'speed of sound', 'f vs 1/L', 'physical quantity', 'v'],
  },
  q4_h: {
    keyConcepts: ['speed of sound = gradient of f vs 1/L line of best fit', 'gradient = Δf / Δ(1/L)', 'speed of sound in air ≈ 343 m s⁻¹'],
    keywords: ['gradient', 'speed of sound', '343 m/s', 'LOBF', 'calculation', 'units m s⁻¹'],
  },

  // ── Q5: Waves — Guitar String Tension ──────────────────────
  q5_a: {
    keyConcepts: ['tension in wire = weight of hanging mass = mg', 'W = mg'],
    keywords: ['W = mg', 'tension', 'weight', 'mass', 'g = 9.8 N/kg', 'newtons'],
  },
  q5_b: {
    keyConcepts: ['control variables are kept constant to ensure a fair test', 'length, thickness, material, and pluck force all affect string frequency'],
    keywords: ['control variable', 'length', 'thickness', 'material', 'pluck force', 'constant'],
  },
  q5_c: {
    keyConcepts: ['data tables: column headers with quantity and unit', 'units only in headers, not beside each value', 'ascending order of independent variable', 'consistent decimal places throughout'],
    keywords: ['column headers', 'units', 'ascending order', 'decimal places', 'consistent', '39.3 N'],
  },
  q5_d: {
    keyConcepts: ['improvements: wider range, more repeats, regular intervals', 'justification must link improvement to benefit for data quality'],
    keywords: ['improvement', 'repeat', 'range', 'regular intervals', 'reliability', 'anomalies', 'justification'],
  },
  q5_e: {
    keyConcepts: ['new IV must be a variable that affects frequency', 'CVs must differ from the new IV', 'two CVs needed to ensure fair test'],
    keywords: ['new independent variable', 'control variables', 'length', 'thickness', 'material', 'frequency'],
  },
  q5_f: {
    keyConcepts: ['hypothesis format: if [IV], then [DV], because [scientific reasoning]', 'must link new IV (not tension) to frequency'],
    keywords: ['if-then-because', 'hypothesis', 'independent variable', 'frequency', 'scientific reasoning'],
  },

  // ── Q6: Sound — Intensity Through Walls ────────────────────
  q6_a: {
    keyConcepts: ['multiple trials improve reliability', 'allow identification of anomalous results', 'account for background noise variation'],
    keywords: ['reliability', 'anomalies', 'background noise', 'three trials', 'consistent'],
  },
  q6_b: {
    keyConcepts: ['mean = sum ÷ count', 'round sound level means to whole numbers'],
    keywords: ['mean', 'average', 'sum', 'divide', 'round', 'dB'],
  },
  q6_c: {
    keyConcepts: ['mean of two values = (v₁ + v₂) / 2'],
    keywords: ['mean', '105 dB', 'calculation', 'average'],
  },
  q6_d: {
    keyConcepts: ['full investigation design: IV, DV, 2 justified CVs, testable hypothesis, method, sufficient data', 'IV = number of cardboard layers; DV = sound intensity level (dB)', 'each cardboard layer absorbs some sound energy → more layers → lower dB'],
    keywords: ['variables', 'IV', 'DV', 'control variable', 'justified', 'hypothesis', 'method', 'data collection', 'sound intensity', 'cardboard layers'],
  },

  // ── Q7: Space Physics — Mars ────────────────────────────────
  q7_a: {
    keyConcepts: ['retrograde motion = apparent backwards movement of Mars', 'geocentric model predicts always-forward orbital motion → cannot explain reversal'],
    keywords: ['retrograde motion', 'backwards', 'geocentric model', 'circular orbit', 'heliocentric', 'direction'],
  },
  q7_b: {
    keyConcepts: ['time = distance ÷ speed', 'speed of light = speed of radio waves = 3.0 × 10⁸ m s⁻¹', 'convert seconds to minutes by dividing by 60'],
    keywords: ['time = d/v', '3.0 × 10⁸ m/s', 'seconds', 'minutes', 'radio signal', 'communication delay'],
  },
  q7_c: {
    keyConcepts: ['launch window = optimal orbital configuration of Earth and Mars', 'minimises distance → less fuel, shorter journey, less communication delay'],
    keywords: ['launch date', 'launch window', 'shortest distance', 'fuel', 'journey time', 'orbital position'],
  },

  // ── Q8: Science & Society — Mars Missions ──────────────────
  q8_a: {
    keyConcepts: ['technical challenges: radiation, distance/communication delay, low gravity, life support', 'economic: cost vs spin-offs/jobs/resources', 'political: national prestige, international cooperation', 'appraisal: weigh evidence for balanced conclusion'],
    keywords: ['technical challenge', 'radiation', 'communication delay', 'economic', 'cost', 'benefit', 'political', 'appraisal', 'Mars mission'],
  },

  // ── Q9: Science & Society — Mars Environment ───────────────
  q9_a: {
    keyConcepts: ['low temperature → need insulated habitats', 'radiation → need shielding (underground or suits)', 'low gravity → bone/muscle loss → need exercise or rotation'],
    keywords: ['low temperature', 'insulation', 'radiation', 'shielding', 'low gravity', 'bone density', 'muscle', 'exercise', 'colonisation'],
  },

}
