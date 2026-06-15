/**
 * CLIENT-SAFE concept data for Physics May 2022 — Variant 1.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_b', 'q6_d'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2022_V1: Record<string, ConceptEntry> = {

  // ── Q1: Forces & Motion — Skydiver in free fall ────────────
  q1_a: {
    keyConcepts: ['the SI unit of force is the newton (N)', 'force is a vector quantity'],
    keywords: ['newtons', 'N', 'unit', 'force', 'SI unit'],
  },
  q1_b: {
    keyConcepts: ['unbalanced forces → acceleration (Newton\'s 2nd law)', 'balanced forces → constant/terminal velocity (Newton\'s 1st law)'],
    keywords: ['balanced forces', 'unbalanced forces', 'terminal velocity', 'acceleration', 'resultant force', 'weight', 'drag'],
  },
  q1_c: {
    keyConcepts: ['larger surface area increases the drag force', 'drag balances weight at a lower speed', 'lower terminal velocity when less streamlined'],
    keywords: ['surface area', 'drag force', 'air resistance', 'balanced forces', 'resultant force', 'terminal velocity'],
  },
  q1_d: {
    keyConcepts: ['displacement = area under velocity–time graph', 'for a trapezoid: area = ½(v₁ + v₂) × t = 1800 m'],
    keywords: ['v-t graph', 'area under graph', 'displacement', 'trapezoid', 'average speed', '1800 m'],
  },
  q1_e: {
    keyConcepts: ['heavier skydiver → higher terminal speed → line above original at the end', 'same initial speed → same y-intercept'],
    keywords: ['v-t graph', 'y-intercept', 'higher terminal speed', 'shallower', 'final velocity'],
  },

  // ── Q2: Electricity — Railway-substation transformer ───────
  q2_a: {
    keyConcepts: ['ideal transformer: power input = power output', 'no energy losses in an ideal transformer'],
    keywords: ['power in', 'power out', 'equal', 'ideal transformer', 'energy conservation'],
  },
  q2_b: {
    keyConcepts: ['transformer equation: Vp/Vs = Np/Ns', 'step-down transformer has more primary turns → higher primary voltage'],
    keywords: ['transformer equation', 'turns ratio', 'primary voltage', 'secondary voltage', 'Np', 'Ns', '15000'],
  },
  q2_c: {
    keyConcepts: ['efficiency = useful power output ÷ total power input', 'useful output = efficiency × input = 24000 W'],
    keywords: ['efficiency', 'power output', 'power input', 'percentage', '0.96', 'useful power'],
  },
  q2_d: {
    keyConcepts: ['high voltage → low current (since P = IV)', 'power loss in wires = I²R → lower current means less heating', 'resistance of transmission cables is fixed'],
    keywords: ['high voltage', 'low current', 'energy loss', 'heat', 'I²R', 'resistance', 'national grid'],
  },

  // ── Q3: Thermal Physics — Hot drink cooling ────────────────
  q3_a: {
    keyConcepts: ['conduction: energy transfer through direct particle contact', 'convection: energy transfer by bulk fluid movement', 'radiation: energy transfer as electromagnetic waves (no medium needed)'],
    keywords: ['conduction', 'convection', 'radiation', 'heat transfer', 'particles', 'fluid', 'electromagnetic waves'],
  },
  q3_b: {
    keyConcepts: ['condensation: water vapour changes state to liquid when cooled', 'occurs when warm moist air contacts a cold surface'],
    keywords: ['condensation', 'water vapour', 'liquid', 'state change', 'cooling'],
  },
  q3_c: {
    keyConcepts: ['condensation is the process of gas → liquid', 'named process when water vapour contacts a cold surface'],
    keywords: ['condensation', 'condenses', 'state change', 'process name'],
  },
  q3_d: {
    keyConcepts: ['cold surface causes water vapour to lose energy and condense', 'the metal lid is cold'],
    keywords: ['cold surface', 'water vapour', 'condenses', 'energy transfer', 'lid'],
  },
  q3_e: {
    keyConcepts: ['warm air above the drink is less dense and rises (convection)', 'cooler denser air replaces it → convection current carries heat away', 'vacuum/insulation prevents convection → slower cooling'],
    keywords: ['density', 'less dense', 'rises', 'convection', 'heat transfer', 'vacuum', 'insulated', 'faster cooling'],
  },
  q3_f: {
    keyConcepts: ['blowing increases convection and evaporation at the surface', 'more convection → faster heat transfer → shorter cooling time'],
    keywords: ['blowing', 'convection', 'evaporation', 'heat transfer', 'cooling time', 'decreases'],
  },

  // ── Q4: Waves — Sound in boomwhacker tubes ─────────────────
  q4_a: {
    keyConcepts: ['research question links the independent variable (tube length) to the dependent variable (frequency)', 'format: "How does [IV] affect [DV]?"'],
    keywords: ['research question', 'length', 'frequency', 'independent variable', 'dependent variable'],
  },
  q4_b: {
    keyConcepts: ['select one material only to control material as a variable', 'select one diameter only to control diameter', 'use the set with 5 different lengths for sufficient data'],
    keywords: ['plastic tubes', '3.0 cm diameter', '5 lengths', 'control variable', 'material', 'diameter'],
  },
  q4_c: {
    keyConcepts: ['IV = what the experimenter changes (tube length)', 'CVs = what must be kept constant (material, diameter)', 'justification links CV to its effect on the DV'],
    keywords: ['independent variable', 'length', 'control variable', 'material', 'diameter', 'fair test'],
  },
  q4_d: {
    keyConcepts: ['inverse proportion: L × f = constant (= 340)', 'test by computing products of paired values', 'if products equal → inverse proportion confirmed'],
    keywords: ['inverse proportion', 'L × f = constant', '340', 'data points', 'hypothesis', 'supported'],
  },
  q4_e: {
    keyConcepts: ['1/L is the reciprocal of tube length', '1/0.40 = 2.5 m⁻¹'],
    keywords: ['reciprocal', '1/length', 'm⁻¹', '2.5'],
  },
  q4_f: {
    keyConcepts: ['plot data point accurately on the graph', 'line of best fit: equal points above and below', 'LOBF should pass through the origin for this proportional relationship'],
    keywords: ['plot', '(2.5, 850)', 'line of best fit', 'LOBF', 'origin'],
  },
  q4_g: {
    keyConcepts: ['gradient of f vs 1/L graph = speed of sound', 'f = v × (1/L) → gradient = v'],
    keywords: ['gradient', 'speed of sound', 'f vs 1/L', 'physical quantity', 'v'],
  },
  q4_h: {
    keyConcepts: ['speed of sound = gradient of f vs 1/L line of best fit', 'gradient = Δf / Δ(1/L) = 340', 'speed of sound in air ≈ 340 m s⁻¹'],
    keywords: ['gradient', 'speed of sound', '340 m/s', 'LOBF', 'calculation', 'units m s⁻¹'],
  },

  // ── Q5: Waves — Sonometer wire tension ─────────────────────
  q5_a: {
    keyConcepts: ['tension in wire = weight of hanging mass = mg', 'W = mg = 0.28 × 9.8 ≈ 2.7 N'],
    keywords: ['W = mg', 'tension', 'weight', 'mass', 'g = 9.8 N/kg', '2.7 N'],
  },
  q5_b: {
    keyConcepts: ['control variables are kept constant to ensure a fair test', 'length, thickness, material, and pluck force all affect wire frequency'],
    keywords: ['control variable', 'length', 'thickness', 'material', 'pluck force', 'constant'],
  },
  q5_c: {
    keyConcepts: ['data tables: column headers with quantity and unit', 'units only in headers, not beside each value', 'ascending order of independent variable', 'consistent decimal places throughout'],
    keywords: ['column headers', 'units', 'ascending order', 'decimal places', 'consistent', '47.1 N'],
  },
  q5_d: {
    keyConcepts: ['improvements: more repeats, wider range, regular intervals', 'justification must link improvement to benefit for data quality'],
    keywords: ['improvement', 'repeat', 'range', 'regular intervals', 'reliability', 'anomalies', 'justification'],
  },
  q5_e: {
    keyConcepts: ['new IV must be a variable that affects frequency', 'CVs must differ from the new IV', 'two CVs needed to ensure fair test'],
    keywords: ['new independent variable', 'control variables', 'length', 'thickness', 'material', 'frequency'],
  },
  q5_f: {
    keyConcepts: ['hypothesis format: if [IV], then [DV], because [scientific reasoning]', 'must link the new IV (not tension) to frequency'],
    keywords: ['if-then-because', 'hypothesis', 'independent variable', 'frequency', 'scientific reasoning'],
  },

  // ── Q6: Sound — Intensity through acoustic-foam panels ─────
  q6_a: {
    keyConcepts: ['multiple trials improve reliability', 'allow identification of anomalous results', 'account for background noise variation'],
    keywords: ['reliability', 'anomalies', 'background noise', 'three trials', 'consistent'],
  },
  q6_b: {
    keyConcepts: ['mean = sum ÷ count', 'round sound level means to whole numbers (117 dB, 114 dB)'],
    keywords: ['mean', 'average', 'sum', 'divide', 'round', '117', '114', 'dB'],
  },
  q6_c: {
    keyConcepts: ['mean of two values = (v₁ + v₂) / 2 = 107 dB'],
    keywords: ['mean', '107 dB', 'calculation', 'average'],
  },
  q6_d: {
    keyConcepts: ['full investigation design: IV, DV, 2 justified CVs, testable hypothesis, method, sufficient data', 'IV = number of foam layers; DV = sound intensity level (dB)', 'each foam layer absorbs some sound energy → more layers → lower dB'],
    keywords: ['variables', 'IV', 'DV', 'control variable', 'justified', 'hypothesis', 'method', 'data collection', 'sound intensity', 'foam layers'],
  },

  // ── Q7: Space Physics — Jupiter & retrograde motion ────────
  q7_a: {
    keyConcepts: ['retrograde motion = apparent backwards movement of Jupiter', 'geocentric model predicts always-forward orbital motion → cannot explain reversal'],
    keywords: ['retrograde motion', 'backwards', 'geocentric model', 'circular orbit', 'heliocentric', 'direction'],
  },
  q7_b: {
    keyConcepts: ['time = distance ÷ speed', 'speed of light = speed of radio waves = 3.0 × 10⁸ m s⁻¹', 'convert seconds to minutes by dividing by 60 → 35 minutes'],
    keywords: ['time = d/v', '3.0 × 10⁸ m/s', '6.3 × 10¹¹', '2100 s', '35 minutes', 'communication delay'],
  },
  q7_c: {
    keyConcepts: ['launch window = optimal orbital configuration of Earth and Jupiter', 'favourable alignment → less fuel (gravity assist), shorter journey, less communication delay'],
    keywords: ['launch date', 'launch window', 'shortest journey', 'fuel', 'gravity assist', 'orbital position'],
  },

  // ── Q8: Science & Society — Europa Mission ─────────────────
  q8_a: {
    keyConcepts: ['technical challenges: ~35 min communication delay, intense Jupiter radiation, long mission time, life support', 'economic: cost vs spin-offs/jobs/discovery of life', 'political: national prestige, international cooperation, planetary protection', 'appraisal: weigh evidence for balanced conclusion'],
    keywords: ['technical challenge', 'radiation', 'communication delay', 'economic', 'cost', 'benefit', 'political', 'appraisal', 'Europa mission'],
  },

  // ── Q9: Science & Society — Moon-base Environment ──────────
  q9_a: {
    keyConcepts: ['extreme temperature swings → need insulated habitats and active heating/cooling', 'radiation → need shielding (regolith/lava tubes or suits)', 'low gravity → bone/muscle loss → need exercise or rotation'],
    keywords: ['temperature', 'insulation', 'radiation', 'shielding', 'regolith', 'low gravity', 'bone density', 'muscle', 'exercise', 'colonisation'],
  },

}
