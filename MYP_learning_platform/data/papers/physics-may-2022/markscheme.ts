import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}
export type MCQEntry = { type: 'mcq'; correct: number }
export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1: Forces & Motion — Maglev Train ─────────────────────
  'q1a': {
    marks: 1,
    exemplar: 'newtons (accept N). Award 1 mark for correct unit only.',
    keyConcepts: ['the SI unit of force is the newton (N)'],
    keywords: ['newtons', 'N', 'unit of force'],
    feedbackHit: 'Correctly stated the unit of force as newtons.',
    feedbackMiss: 'Force is measured in newtons (N). Do not write kg or m/s².',
  },

  'q1b': {
    marks: 2,
    exemplar: 'Diagram showing balanced forces (equal thrust and drag, equal lift and weight) = constant speed. Diagram showing larger thrust than drag = acceleration. Award 1 mark each for correct identification with a valid reason.',
    keyConcepts: ['balanced forces → constant speed (Newton\'s 1st law)', 'unbalanced forces → acceleration (Newton\'s 2nd law)'],
    keywords: ['balanced forces', 'unbalanced forces', 'resultant force', 'constant speed', 'acceleration', 'thrust', 'drag'],
    feedbackHit: 'Correctly identified balanced and unbalanced force diagrams.',
    feedbackMiss: 'At constant speed: thrust = drag (balanced, resultant force = 0). Accelerating: thrust > drag (unbalanced, net force in direction of motion).',
  },

  'q1c': {
    marks: 3,
    exemplar: 'The beak-shaped front reduces the drag force (air resistance) on the train [1]. At higher speeds, the reduced drag means the forces can become balanced (resultant force = 0) [1]. The streamlined shape allows air to flow smoothly around the train, minimising turbulence and drag [1].',
    keyConcepts: ['streamlined shape reduces drag', 'balanced forces at constant velocity', 'drag ∝ shape and speed'],
    keywords: ['drag force', 'air resistance', 'balanced forces', 'streamlined', 'constant speed', 'resultant force'],
    feedbackHit: 'Correctly explained drag reduction, force balance, and streamlining.',
    feedbackMiss: 'Three points needed: (1) drag is reduced, (2) forces can be balanced at higher speed, (3) the shape is streamlined/allows smooth airflow.',
  },

  'q1d': {
    marks: 3,
    exemplar: 'Tunnel length = area under v-t graph (trapezoid). Evidence of area calculation seen or implied (e.g. using two data points from graph). Correct calculation using trapezoid area or average speed × time. Answer in range 3534–3627 m (accept 3600 m). Award: 1 mark for identifying area method; 1 mark for using two data points correctly; 1 mark for correct answer.',
    keyConcepts: ['displacement = area under v-t graph', 'trapezoid area = ½(v₁ + v₂) × t', 'or: distance = average speed × time'],
    keywords: ['area under graph', 'v-t graph', 'displacement', 'trapezoid', 'average speed', 'distance'],
    feedbackHit: 'Correctly calculated tunnel length using area under v-t graph.',
    feedbackMiss: 'Distance = area under a v-t graph. For a trapezoid: Area = ½(sum of parallel sides) × height. Identify the initial and final velocities and the total time from the graph.',
  },

  'q1e': {
    marks: 2,
    exemplar: 'Draw a line starting at the same y-intercept as the original [1]. Line is always above the original line (showing higher speed at all times) — accept approximately the same starting point [1]. Do not accept a line with a positive gradient showing further acceleration after entry.',
    keyConcepts: ['same initial speed → same y-intercept', 'higher speed → line above original', 'no additional acceleration after entry'],
    keywords: ['y-intercept', 'above original line', 'constant velocity', 'higher speed'],
    feedbackHit: 'Drew a line with the same y-intercept that is always above the original.',
    feedbackMiss: 'The redesigned train enters at the same speed (same y-intercept) but is faster throughout (line above original). Do not show the train continuing to accelerate — it maintains its higher constant speed.',
  },

  // ── Q2: Electricity — Transformers ─────────────────────────
  'q2a': {
    marks: 1,
    exemplar: 'Power input equals power output (both terms required). Accept: P_in = P_out, or "power is the same/equal/conserved". Both "power" and "equal" must be stated.',
    keyConcepts: ['ideal transformer: power input = power output', 'no energy losses in ideal transformer'],
    keywords: ['power input', 'power output', 'equal', 'conserved', 'ideal transformer'],
    feedbackHit: 'Correctly stated that power input equals power output in an ideal transformer.',
    feedbackMiss: 'In an ideal transformer, no energy is lost. Therefore power in = power out. Both terms (power AND equal) must be included.',
  },

  'q2b': {
    marks: 2,
    exemplar: 'Vp/Vs = Np/Ns → Vp = Vs × (Np/Ns) = 525 × (850/15300) = 525 × (1/18) = 29.17 V ≈ 29 V. Award 1 mark for evidence of transformer equation; 1 mark for correct answer (29 V or 29.2 V, accept 2 s.f. or more).',
    keyConcepts: ['transformer equation: Vp/Vs = Np/Ns', 'step-up transformer: more turns on secondary → higher output voltage'],
    keywords: ['transformer equation', 'turns ratio', 'primary voltage', 'secondary voltage', 'Vp/Vs = Np/Ns'],
    feedbackHit: 'Correctly applied the transformer equation to find primary voltage.',
    feedbackMiss: 'Use: Vp/Vs = Np/Ns → Vp = Vs × (Np/Ns) = 525 × (850/15300). This is a step-up transformer since it has more turns on the secondary.',
  },

  'q2c': {
    marks: 2,
    exemplar: 'Power output = efficiency × power input = 0.97 × 14800 = 14356 W (accept 14356 W, 14400 W, or 14.4 kW to 3 s.f.). Award 1 mark for P = efficiency × P_in (seen or implied); 1 mark for correct answer.',
    keyConcepts: ['efficiency = useful power output ÷ total power input', 'useful power output = efficiency × power input'],
    keywords: ['efficiency', 'power output', 'power input', '97%', '0.97', 'watts'],
    feedbackHit: 'Correctly calculated useful power output using efficiency.',
    feedbackMiss: 'Useful power output = efficiency × power input = 0.97 × 14800 = 14356 W. Convert 97% to 0.97 before multiplying.',
  },

  'q2d': {
    marks: 2,
    exemplar: 'Accept any two from: increasing voltage reduces current (ORA) [1]; energy is wasted as heat in the wires [1]; reducing current reduces energy wasted as heat (since P = I²R or heating ∝ current) [1]; the resistance of the wire is fixed [1]; more power/energy reaches the destination [1]. Max 2 marks.',
    keyConcepts: ['high voltage → low current', 'power loss = I²R', 'lower current → less heating in wires → less energy wasted'],
    keywords: ['high voltage', 'low current', 'energy loss', 'heat', 'resistance', 'P = I²R', 'transmission'],
    feedbackHit: 'Correctly explained the link between high voltage, low current, and reduced energy loss.',
    feedbackMiss: 'Two-step argument: (1) High voltage → low current (since P = IV, same power at higher V means lower I). (2) Lower current → less energy wasted as heat in cables (P_loss = I²R).',
  },

  // ── Q3: Thermal Physics — Ice Melting ──────────────────────
  'q3a': {
    marks: 1,
    exemplar: 'All three correctly matched: Conduction = transfer through direct particle contact; Convection = transfer through fluid movement; Radiation = transfer as electromagnetic waves. All correct for 1 mark.',
    keyConcepts: ['conduction: particle-to-particle energy transfer', 'convection: bulk fluid movement carries energy', 'radiation: energy transfer by electromagnetic waves, no medium needed'],
    keywords: ['conduction', 'convection', 'radiation', 'heat transfer', 'particles', 'fluid', 'electromagnetic waves'],
    feedbackHit: 'Correctly matched all three heat transfer methods.',
    feedbackMiss: 'Conduction = energy passed between particles in contact. Convection = hot fluid rises, cold fluid sinks (bulk movement). Radiation = electromagnetic waves (e.g. infrared) — no medium needed.',
  },

  'q3b': {
    type: 'mcq',
    correct: 3, // D. Condensation (index 3)
  } as MCQEntry,

  'q3c': {
    marks: 1,
    exemplar: 'Condensation. Accept "it condenses". Do not accept evaporation.',
    keyConcepts: ['condensation: gas → liquid when cooled', 'occurs when water vapour contacts a cold surface'],
    keywords: ['condensation', 'condenses', 'water vapour', 'liquid'],
    feedbackHit: 'Correctly named the process as condensation.',
    feedbackMiss: 'Water droplets on the outside of a cold cup form by condensation — water vapour in the warm air cools when it contacts the cold surface and changes state from gas to liquid.',
  },

  'q3d': {
    marks: 1,
    exemplar: 'The outside of the cup is cold (because of the ice inside). Water vapour in the surrounding air loses thermal energy when it contacts the cold surface, changing state to liquid. Accept: "cold surfaces cause water vapour to condense" or "salt water is only cold at the top of the cup".',
    keyConcepts: ['condensation occurs when warm moist air contacts a cold surface', 'the cup is cooled by the ice inside'],
    keywords: ['cold surface', 'water vapour', 'temperature', 'condenses', 'state change'],
    feedbackHit: 'Correctly explained why condensation occurs on the cold cup surface.',
    feedbackMiss: 'The cup is cold (cooled by the ice). Water vapour in the air around the cup loses energy when it touches the cold surface and condenses to liquid.',
  },

  'q3e': {
    marks: 3,
    exemplar: 'Salt water is more dense than pure water [1]. When the ice melts, the cold melt water (less dense) stays near the top in pure water, but in salt water the denser salt water keeps the cold melt water near the surface [1]. Conclusion: heat is transferred less quickly in salt water (less convection), so the ice melts more slowly [1]. Final mark only awarded if both previous marks are awarded.',
    keyConcepts: ['salt water is more dense', 'cold melt water stays near surface in salt water', 'less convection → slower heat transfer → slower melting'],
    keywords: ['density', 'salt water', 'convection', 'heat transfer', 'cold water', 'surface', 'slower melting'],
    feedbackHit: 'Correctly explained density, reduced convection, and slower heat transfer.',
    feedbackMiss: 'Three linked points: (1) salt water is denser, (2) cold melt water stays at the surface (no convection), (3) therefore heat is transferred less quickly → slower melting. The conclusion mark is only awarded if both science marks are earned.',
  },

  'q3f': {
    marks: 2,
    exemplar: 'Stirring distributes the cold melt water throughout the cup (mixing) OR stirring increases convection [1]. Therefore the melting time for ice in salt water would decrease (ice melts faster) [1].',
    keyConcepts: ['stirring increases mixing/convection', 'more convection → faster heat transfer → faster melting'],
    keywords: ['stirring', 'convection', 'mixing', 'melting time', 'decreases', 'faster'],
    feedbackHit: 'Correctly predicted faster melting and explained via increased convection.',
    feedbackMiss: 'Stirring overcomes the lack of convection in salt water by physically mixing the cold and warm water. This increases the rate of heat transfer to the ice, so the ice melts faster.',
  },

  // ── Q4: Waves — Sound in Tubes ─────────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'How does the length of a tube affect the frequency of the sound produced? (WTTE — accept any reasonable research question linking length as IV to frequency as DV.)',
    keyConcepts: ['research question must link IV (tube length) to DV (frequency of sound)'],
    keywords: ['length', 'frequency', 'sound', 'research question', 'tube'],
    feedbackHit: 'Wrote a clear research question linking tube length to frequency.',
    feedbackMiss: 'A research question must state what you are changing (tube length) and what you are measuring (frequency of sound). Format: "How does [IV] affect [DV]?"',
  },

  'q4b': {
    marks: 3,
    exemplar: 'Select: 5 wooden tubes of 2.5 cm diameter [3 marks for all correct — 1 mark each for: (1) at least 3 of one material only; (2) at least 3 of one diameter only; (3) exactly 5 lengths of 2.5 cm diameter wood. Third mark only awarded if first two are awarded.]',
    keyConcepts: ['one material only (wood) to control material', 'one diameter only (2.5 cm) to control diameter', '5 different lengths provides sufficient data'],
    keywords: ['wooden tubes', '2.5 cm diameter', '5 lengths', 'control variables', 'one material', 'one diameter'],
    feedbackHit: 'Correctly selected all 5 wooden tubes of 2.5 cm diameter with justification.',
    feedbackMiss: 'Select only tubes of the same material AND same diameter (to keep these as control variables). Choose the set with the most different lengths: 5 wooden, 2.5 cm diameter tubes.',
  },

  'q4c': {
    marks: 2,
    exemplar: 'IV: length of tube (accept description of length) [1]. CV: material of tube AND diameter of tube — both required for the second mark, with justification that changing these would affect the frequency [1].',
    keyConcepts: ['IV = the variable changed by the experimenter', 'CV = variables kept constant to ensure a fair test'],
    keywords: ['independent variable', 'length', 'control variable', 'material', 'diameter', 'justified'],
    feedbackHit: 'Correctly identified IV as length and two CVs (material and diameter) with justification.',
    feedbackMiss: 'IV = length (what you change). Control variables = material and diameter of the tube. These must be kept constant because they would also affect the frequency produced.',
  },

  'q4d': {
    marks: 3,
    exemplar: 'Two data points taken from graph [1]. Correct calculation: e.g. 0.20 × 1720 = 344 and 0.40 × 860 = 344 (or equivalent: products of L × f are equal, or double L = halve f) [1]. Conclusion: hypothesis supported — data shows inverse proportion [1]. Award 1 mark only if student identifies decreasing relationship but performs no valid calculation.',
    keyConcepts: ['inverse proportion: L × f = constant', 'test by checking if products are equal', 'or verify: doubling L halves f'],
    keywords: ['inverse proportion', 'data points', 'L × f = constant', 'hypothesis supported', 'calculation'],
    feedbackHit: 'Used two data points to confirm inverse proportion and concluded hypothesis is supported.',
    feedbackMiss: 'For inverse proportion, check that L × f = constant. Pick two data points, multiply each, and compare. If products are equal → inverse proportion → hypothesis supported.',
  },

  'q4e': {
    marks: 1,
    exemplar: '1/0.40 = 2.5 m⁻¹. Award 1 mark for correct value.',
    keyConcepts: ['1/L gives the reciprocal of tube length in m⁻¹'],
    keywords: ['reciprocal', '1/length', '2.5', 'm⁻¹'],
    feedbackHit: 'Correctly calculated 1/0.40 = 2.5 m⁻¹.',
    feedbackMiss: '1/L = 1/0.40 = 2.5 m⁻¹. Simply divide 1 by the tube length in metres.',
  },

  'q4f': {
    marks: 2,
    exemplar: 'Data point plotted correctly at (2.5, 860) within ±0.1 on x-axis and ±20 Hz on y-axis [1]. Line of best fit drawn with roughly equal numbers of points above and below the line [1].',
    keyConcepts: ['plotting data points accurately', 'line of best fit: equal distribution of points above and below'],
    keywords: ['plot', 'data point', '(2.5, 860)', 'line of best fit', 'LOBF'],
    feedbackHit: 'Plotted point (2.5, 860) correctly and drew an appropriate line of best fit.',
    feedbackMiss: 'Plot the point at x = 2.5 (1/L) and y = 860 (frequency). The line of best fit should pass through the origin and have approximately equal numbers of points above and below it.',
  },

  'q4g': {
    type: 'mcq',
    correct: 2, // C. Speed of sound in air (index 2)
  } as MCQEntry,

  'q4h': {
    marks: 3,
    exemplar: 'Choose two points on the LOBF separated by more than 1000 Hz in y [1]. Calculate gradient = Δf / Δ(1/L) [1]. Correct value 343 ± 10 m s⁻¹ [1]. Unit mark for m s⁻¹ (or m/s). Award unit mark separately.',
    keyConcepts: ['gradient of f vs 1/L graph = speed of sound', 'gradient = Δy/Δx using points on the LOBF', 'speed of sound ≈ 343 m s⁻¹'],
    keywords: ['gradient', 'speed of sound', '343 m/s', 'line of best fit', 'Δf/Δ(1/L)', 'units'],
    feedbackHit: 'Correctly calculated the gradient and identified it as the speed of sound.',
    feedbackMiss: 'Gradient = Δ(frequency) / Δ(1/length). Use two points on your line of best fit. The gradient gives the speed of sound (≈ 343 m s⁻¹). Remember to include units.',
  },

  // ── Q5: Waves — Guitar String Tension ──────────────────────
  'q5a': {
    marks: 2,
    exemplar: 'W = mg → Tension = 0.32 × 9.8 = 3.136 N ≈ 3.1 N. Award 1 mark for W = mg (seen or implied); 1 mark for correct answer (3.1 N or 3.14 N, accept 2 s.f. or more).',
    keyConcepts: ['tension in wire = weight of hanging mass = mg', 'W = mg'],
    keywords: ['W = mg', 'tension', 'weight', 'mass', '9.8', '3.1 N'],
    feedbackHit: 'Correctly calculated tension using W = mg.',
    feedbackMiss: 'The tension in the wire equals the weight of the hanging mass. Use W = mg = 0.32 × 9.8. Remember weight is a force measured in newtons.',
  },

  'q5b': {
    marks: 2,
    exemplar: 'Accept any two from: length of wire; thickness/diameter of wire; material/type of wire; density of wire; force of pluck/strum. Max 2 marks, 1 per valid CV.',
    keyConcepts: ['control variables are kept constant to ensure a fair test', 'length, thickness, material, and pluck force all affect frequency'],
    keywords: ['length', 'thickness', 'diameter', 'material', 'pluck force', 'control variable'],
    feedbackHit: 'Stated two valid control variables.',
    feedbackMiss: 'Choose any two: length of wire, thickness/diameter, material, or force of pluck. These must be kept constant so only tension affects the frequency.',
  },

  'q5c': {
    marks: 4,
    exemplar: 'Column headers include "Tension" and "Frequency" with units in headers only [1]. Units for both quantities in headers (N and Hz) [1]. Results in ascending (or descending) order of tension [1]. 39.28 N correctly rounded to 39.3 N (consistent decimal places) [1].',
    keyConcepts: ['column headers must include quantity and unit', 'units in headers only, not beside each value', 'ascending/descending order of IV', 'consistent decimal places'],
    keywords: ['column headers', 'Tension / N', 'Frequency / Hz', 'ascending order', 'consistent d.p.', '39.3'],
    feedbackHit: 'Correct headers with units, ascending order, and 39.3 N correctly rounded.',
    feedbackMiss: 'Four marks: (1) "Tension" in header, (2) "Frequency" with units in header, (3) ascending order, (4) 39.3 N (not 39.28 or 38.7) — round consistently to 1 d.p.',
  },

  'q5d': {
    marks: 2,
    exemplar: 'Accept any relevant improvement with a linked justification: e.g. increase range of data [1] → pattern will be more clearly visible [1]; OR repeat measurements [1] → reduces random errors / can identify anomalies [1]; OR take measurements at regular intervals [1] → more reliable pattern [1]. Award 1 mark for improvement, 1 for justification.',
    keyConcepts: ['more data / wider range → clearer pattern', 'repeating reduces random error', 'regular intervals → more reliable trend'],
    keywords: ['repeat', 'range', 'regular intervals', 'reliability', 'anomalies', 'justification'],
    feedbackHit: 'Suggested a valid improvement with a clear justification.',
    feedbackMiss: 'Give both an improvement (e.g. repeat measurements) AND a reason (e.g. to reduce the effect of random errors and identify anomalous values).',
  },

  'q5e': {
    marks: 3,
    exemplar: 'New IV: any reasonable choice (e.g. length, thickness/diameter, material, temperature) — 1 mark. Two CVs appropriate to the new IV (e.g. if length chosen: tension and material/thickness) — 1 mark each. Do not award CV mark if it is the same as the new IV.',
    keyConcepts: ['new IV must be a variable that affects frequency', 'CVs must be different from the new IV', 'two CVs needed'],
    keywords: ['independent variable', 'control variable', 'length', 'thickness', 'material', 'frequency'],
    feedbackHit: 'Stated a valid new IV and two appropriate CVs (different from the new IV).',
    feedbackMiss: 'Choose a new IV (e.g. length of wire). Then list two variables that must be kept constant — not the same as your new IV. E.g. if IV = length, then CVs could be tension and thickness.',
  },

  'q5f': {
    marks: 2,
    exemplar: 'If-then linking their IV with frequency [1] (does not need to be scientifically correct for this mark). Because: an attempt at scientific explanation linking their IV and frequency [1]. Award 0 if hypothesis relates tension and frequency (not the new IV from part e).',
    keyConcepts: ['hypothesis format: if-then-because', 'IV and DV must match the investigation from part (e)', 'scientific reasoning in "because" clause'],
    keywords: ['if', 'then', 'because', 'frequency', 'independent variable', 'hypothesis'],
    feedbackHit: 'Wrote a testable if-then-because hypothesis linking the new IV to frequency.',
    feedbackMiss: 'Format: "If [new IV from part e] increases, then the frequency will [increase/decrease], because [scientific reason]." Do not use tension as the IV here.',
  },

  // ── Q6: Sound — Intensity Through Walls ────────────────────
  'q6a': {
    marks: 1,
    exemplar: 'Accept any one: increased reliability; reference to background noise; to identify anomalies. Do not accept "to take an average" alone. Do not accept "to improve accuracy/validity" without clarification.',
    keyConcepts: ['multiple trials increase reliability', 'allow identification of anomalous results', 'account for background noise variation'],
    keywords: ['reliability', 'anomalies', 'background noise', 'consistent', 'repeatable'],
    feedbackHit: 'Correctly explained a reason for taking three measurements.',
    feedbackMiss: 'Three trials help identify anomalous (unusual) results and improve reliability. The answer must be specific — not just "to take an average".',
  },

  'q6b': {
    marks: 2,
    exemplar: '2 layers: mean = (114 + 112 + 112)/3 = 338/3 = 112.7 → 113 dB. 4 layers: mean = (114 + 113 + 111)/3 = 338/3 = 112.7 → 113 dB. Award 1 mark per correct mean. Do not accept answers with additional decimal places (e.g. 112.7).',
    keyConcepts: ['mean = sum of values ÷ number of values', 'round means to whole numbers for sound level data'],
    keywords: ['mean', 'average', '113', 'dB', 'sum', 'divide'],
    feedbackHit: 'Correctly calculated both means as 113 dB.',
    feedbackMiss: 'Mean = sum of all trials ÷ number of trials. For 2 layers: (114+112+112)/3 = 113 dB. Round to whole number — do not include decimals.',
  },

  'q6c': {
    marks: 1,
    exemplar: 'Mean of 6-layer and 8-layer values: (108 + 102)/2 = 105 dB. Award 1 mark for correct answer.',
    keyConcepts: ['mean of two values = sum ÷ 2'],
    keywords: ['mean', '105 dB', '108', '102'],
    feedbackHit: 'Correctly calculated the mean as 105 dB.',
    feedbackMiss: 'Mean = (108 + 102) / 2 = 210 / 2 = 105 dB.',
  },

  'q6d': {
    marks: 13,
    exemplar: `Variables (max 4 marks):
- 1 mark: DV = sound intensity level as dependent variable
- 2 marks: IV = number of layers/thickness of cardboard as independent variable AND DV correct, plus one control variable stated
- 3 marks: IV and DV correct, two control variables stated and one justified
- 4 marks: IV and DV correct, two control variables stated and both justified

Hypothesis (max 4 marks):
- 1 mark: attempt at testable hypothesis linked to sound intensity or number of layers
- 2 marks: testable hypothesis linking both sound intensity level and number of layers/thickness
- 3 marks: hypothesis links both variables and is testable
- 4 marks: hypothesis links both variables, testable, with attempted scientific explanation using absorption

Method (max 4 marks):
- 1 mark: attempt at method linked to either variable
- 2 marks: method linked to both variables
- 3 marks: method linked to sound intensity and number of layers
- 4 marks: clear method with measurements described

Data (max 1 mark):
- 1 mark: reference to collecting sufficient data (e.g. at least 5 values of IV, multiple trials)`,
    keyConcepts: ['IV = number of cardboard layers', 'DV = sound intensity level (dB)', 'CVs: distance, type of cardboard, speaker volume', 'hypothesis: more layers → lower sound level because each absorbs energy', 'method: vary layers, measure with sound meter, repeat for reliability'],
    keywords: ['IV', 'DV', 'control variable', 'justified', 'hypothesis', 'if-then-because', 'method', 'repeat', 'data table'],
    feedbackHit: 'Full investigation design with justified variables, testable hypothesis, clear method, and sufficient data collection plan.',
    feedbackMiss: 'Design must include: (1) IV = layers of cardboard, DV = sound intensity level, 2 justified CVs; (2) Hypothesis: if layers increase, sound level decreases because each layer absorbs sound energy; (3) Method: set speaker at fixed distance/volume, measure with sound meter, vary number of layers, repeat 3 times; (4) At least 5 different values of the IV.',
  },

  // ── Q7: Space Physics — Mars ────────────────────────────────
  'q7a': {
    marks: 2,
    exemplar: 'Mars appears to move backwards/change direction at certain times (retrograde motion) [1]. In the geocentric model, Mars would orbit Earth in a circular/elliptical path and would always appear to move in one direction — it would never go backwards [1]. Accept: reference to changing distance between Earth and Mars; or "Mars would follow a straight path or arc from Earth\'s perspective".',
    keyConcepts: ['retrograde motion = apparent backwards movement of Mars', 'geocentric model predicts circular orbit → no retrograde motion possible', 'retrograde motion is explained by heliocentric model (Earth overtakes Mars)'],
    keywords: ['retrograde motion', 'backwards', 'geocentric model', 'circular orbit', 'direction change', 'inconsistent'],
    feedbackHit: 'Explained retrograde motion and why it contradicts the geocentric model.',
    feedbackMiss: 'Two points: (1) Mars appears to move backwards in the sky at certain times. (2) If Earth were the centre, Mars would follow a simple curved path and would never reverse direction.',
  },

  'q7b': {
    marks: 2,
    exemplar: 't = d/v = 3.6 × 10¹¹ / 3.0 × 10⁸ = 1200 s [1]. Convert: 1200 / 60 = 20 minutes [1]. Accept correct value of time in seconds for first mark. Award 2 marks for correct final answer (20 min) alone.',
    keyConcepts: ['speed = distance ÷ time → time = distance ÷ speed', 'speed of light/radio waves = 3.0 × 10⁸ m s⁻¹', '1200 s = 20 minutes'],
    keywords: ['time = distance/speed', '3.6 × 10¹¹', '3.0 × 10⁸', '1200 s', '20 minutes'],
    feedbackHit: 'Correctly calculated signal travel time as 1200 s = 20 minutes.',
    feedbackMiss: 'time = distance ÷ speed = 3.6 × 10¹¹ ÷ 3.0 × 10⁸ = 1200 s. To convert to minutes: divide by 60 = 20 minutes.',
  },

  'q7c': {
    marks: 2,
    exemplar: 'Accept any two from: the launch date gives the shortest journey time; the launch date gives the shortest distance to travel (WTTE); in order to minimise fuel; in order to minimise communication time; the launch date is calculated to reach a specific landing spot on Mars.',
    keyConcepts: ['launch window = when Earth and Mars are optimally positioned', 'shorter distance → less fuel, shorter journey, less communication delay'],
    keywords: ['shortest distance', 'shortest journey time', 'minimise fuel', 'orbital position', 'launch window', 'landing'],
    feedbackHit: 'Explained two valid reasons why the launch date is carefully calculated.',
    feedbackMiss: 'Two reasons: (1) The launch date minimises the distance between Earth and Mars (saving fuel), (2) It gives the shortest travel time (or allows the spacecraft to reach a specific point on Mars).',
  },

  // ── Q8: Science & Society — Mars Missions (Criterion D) ─────
  'q8a': {
    marks: 13,
    exemplar: `Marked on 4-column rubric:

Technical challenges (planning the journey):
- 1 mark: one challenge stated
- 2 marks: one challenge stated with partial scientific explanation, OR two challenges stated
- 3 marks: one challenge with scientific explanation for at least one, OR two challenges stated
- 4 marks: two challenges with scientific explanations for both

Economic advantages and disadvantages:
- 1 mark: one advantage or disadvantage stated
- 2 marks: one advantage AND one disadvantage stated
- 3 marks: one advantage and one disadvantage with further discussion for one
- 4 marks: one advantage and one disadvantage with further discussion for both

Political implications:
- 1 mark: one political implication stated
- 2 marks: one implication with further discussion OR two stated
- 3 marks: two implications stated with further discussion for one
- (No 4-mark level for political section — max 3)

Conclusion/Appraisal:
- 1 mark: a simple conclusion
- 2 marks: a concluding appraisal weighing evidence

Total: up to 4 + 4 + 3 + 2 = 13 marks`,
    keyConcepts: ['technical: distance/communication delay, radiation, low gravity, food/water supply', 'economic: high cost vs technological spin-offs, jobs, prestige', 'political: national prestige, international cooperation/competition', 'appraisal: weigh evidence, reach balanced conclusion'],
    keywords: ['technical challenge', 'radiation', 'distance', 'communication', 'economic', 'cost', 'benefit', 'political', 'appraisal', 'conclusion'],
    feedbackHit: 'Discussed technical challenges, economic advantages/disadvantages, political implications, and gave a concluding appraisal.',
    feedbackMiss: 'Cover all four areas: (1) Two technical challenges with science, (2) Economic advantage AND disadvantage with discussion, (3) Political implications, (4) Balanced concluding appraisal.',
  },

  // ── Q9: Science & Society — Mars Environment (Criterion D) ──
  'q9a': {
    marks: 6,
    exemplar: `Award 1 mark per relevant effect AND 1 mark per linked solution (max 2 marks per factor):

Low temperature:
- Effect [1]: too cold for humans to survive / too cold to grow food outdoors
- Solution [1]: insulated habitats to minimise heat transfer; heated growing chambers
(Do not accept "constant heating" without mention of insulation)

Radiation:
- Effect [1]: too much radiation is harmful / can cause cancer / cell damage
- Solution [1]: underground habitats using Martian rock as shielding; protective suits; radiation-absorbing materials

Low gravity:
- Effect [1]: bone density loss, muscle wasting, cardiovascular problems, difficulties moving
- Solution [1]: regular exercise programmes; possible rotation of habitat to simulate gravity`,
    keyConcepts: ['low temperature → insulation needed', 'radiation → shielding needed (underground or suits)', 'low gravity → exercise to maintain muscle/bone; rotation for simulated gravity'],
    keywords: ['temperature', 'insulation', 'radiation', 'shielding', 'gravity', 'bone density', 'muscle', 'exercise', 'rotate', 'underground'],
    feedbackHit: 'Correctly described effects of all three factors and suggested linked solutions.',
    feedbackMiss: 'For each factor: state the specific effect on humans, then give a linked practical solution. Temperature → insulate. Radiation → shield (underground). Gravity → exercise/rotation.',
  },

}
