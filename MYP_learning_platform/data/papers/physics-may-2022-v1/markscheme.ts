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

  // ── Q1: Forces & Motion — Skydiver in free fall ────────────
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
    exemplar: 'Diagram with weight greater than drag (720 N down, 480 N up) = accelerating. Diagram with balanced forces (weight = drag = 720 N) = constant/terminal velocity. Award 1 mark each for correct identification with a valid reason.',
    keyConcepts: ['unbalanced forces → acceleration (Newton\'s 2nd law)', 'balanced forces → constant/terminal velocity (Newton\'s 1st law)'],
    keywords: ['balanced forces', 'unbalanced forces', 'resultant force', 'terminal velocity', 'acceleration', 'weight', 'drag'],
    feedbackHit: 'Correctly identified the accelerating and constant-velocity force diagrams.',
    feedbackMiss: 'Accelerating: weight > drag (resultant force downward). Constant/terminal velocity: weight = drag (balanced, resultant force = 0).',
  },

  'q1c': {
    marks: 3,
    exemplar: 'Spreading out increases the surface area / makes her less streamlined, so the drag force is greater at any given speed [1]. The greater drag balances her weight (resultant force = 0) at a lower speed [1]. Therefore her terminal velocity is lower [1].',
    keyConcepts: ['larger surface area increases drag', 'balanced forces at terminal velocity', 'drag ∝ shape, area and speed'],
    keywords: ['drag force', 'surface area', 'air resistance', 'balanced forces', 'terminal velocity', 'resultant force', 'shape'],
    feedbackHit: 'Correctly linked larger surface area to more drag, balance, and a lower terminal velocity.',
    feedbackMiss: 'Three points needed: (1) larger area → more drag, (2) drag balances weight at a lower speed, (3) so terminal velocity is lower.',
  },

  'q1d': {
    marks: 3,
    exemplar: 'Distance = area under v-t graph (trapezoid) = average speed × time = ½(80 + 40) × 30 = 60 × 30 = 1800 m. Award: 1 mark for identifying area method; 1 mark for using the two velocities and time correctly; 1 mark for correct answer (1800 m).',
    keyConcepts: ['displacement = area under v-t graph', 'trapezoid area = ½(v₁ + v₂) × t', 'distance = average speed × time'],
    keywords: ['area under graph', 'v-t graph', 'displacement', 'trapezoid', 'average speed', '1800', 'distance'],
    feedbackHit: 'Correctly calculated the distance using the area under the v-t graph.',
    feedbackMiss: 'Distance = area under a v-t graph. Trapezoid area = ½(v₁ + v₂) × t = ½(80 + 40) × 30 = 1800 m.',
  },

  'q1e': {
    marks: 2,
    exemplar: 'Draw a line starting at the same y-intercept (80 m s⁻¹) [1]. Line levels off at a higher final velocity than the original (final value above 40 m s⁻¹) and falls less steeply [1]. Do not accept a line that ends at or below 40 m s⁻¹.',
    keyConcepts: ['same starting speed → same y-intercept', 'heavier skydiver → higher terminal speed → line above original at the end', 'shallower decrease'],
    keywords: ['y-intercept', 'higher terminal speed', 'above original', 'shallower', 'final velocity'],
    feedbackHit: 'Drew a line from the same start that levels off at a higher final velocity.',
    feedbackMiss: 'The heavier skydiver starts at the same speed (same y-intercept) but settles at a higher terminal speed (line ends above the original, decreasing less steeply).',
  },

  // ── Q2: Electricity — Railway-substation transformer ───────
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
    exemplar: 'Vp/Vs = Np/Ns → Vp = Vs × (Np/Ns) = 600 × (11000/440) = 600 × 25 = 15 000 V. Award 1 mark for evidence of transformer equation; 1 mark for correct answer (15 000 V or 15 kV).',
    keyConcepts: ['transformer equation: Vp/Vs = Np/Ns', 'more turns on primary → higher primary voltage (step-down)'],
    keywords: ['transformer equation', 'turns ratio', 'primary voltage', 'secondary voltage', 'Vp/Vs = Np/Ns', '15000', '25'],
    feedbackHit: 'Correctly applied the transformer equation to find the primary voltage.',
    feedbackMiss: 'Use: Vp/Vs = Np/Ns → Vp = Vs × (Np/Ns) = 600 × (11000/440) = 600 × 25 = 15 000 V. This is a step-down transformer (more turns on the primary).',
  },

  'q2c': {
    marks: 2,
    exemplar: 'Power output = efficiency × power input = 0.96 × 25000 = 24000 W (24 kW). Award 1 mark for P = efficiency × P_in (seen or implied); 1 mark for correct answer.',
    keyConcepts: ['efficiency = useful power output ÷ total power input', 'useful power output = efficiency × power input'],
    keywords: ['efficiency', 'power output', 'power input', '96%', '0.96', '24000', 'watts'],
    feedbackHit: 'Correctly calculated useful power output using efficiency.',
    feedbackMiss: 'Useful power output = efficiency × power input = 0.96 × 25000 = 24000 W. Convert 96% to 0.96 before multiplying.',
  },

  'q2d': {
    marks: 2,
    exemplar: 'Accept any two from: increasing voltage reduces current (ORA) [1]; energy is wasted as heat in the wires [1]; reducing current reduces energy wasted as heat (since P = I²R or heating ∝ current²) [1]; the resistance of the wire is fixed [1]; more power/energy reaches the destination [1]. Max 2 marks.',
    keyConcepts: ['high voltage → low current', 'power loss = I²R', 'lower current → less heating in wires → less energy wasted'],
    keywords: ['high voltage', 'low current', 'energy loss', 'heat', 'resistance', 'P = I²R', 'transmission'],
    feedbackHit: 'Correctly explained the link between high voltage, low current, and reduced energy loss.',
    feedbackMiss: 'Two-step argument: (1) High voltage → low current (since P = IV, same power at higher V means lower I). (2) Lower current → less energy wasted as heat in cables (P_loss = I²R).',
  },

  // ── Q3: Thermal Physics — Hot drink cooling ────────────────
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
    feedbackMiss: 'Water droplets on a cold metal lid form by condensation — water vapour in the warm air cools when it contacts the cold surface and changes state from gas to liquid.',
  },

  'q3d': {
    marks: 1,
    exemplar: 'The lid is cold. Water vapour in the surrounding warm air loses thermal energy when it contacts the cold surface, changing state to liquid (condenses). Accept: "cold surfaces cause water vapour to condense".',
    keyConcepts: ['condensation occurs when warm moist air contacts a cold surface', 'the lid is cold'],
    keywords: ['cold surface', 'water vapour', 'temperature', 'condenses', 'state change', 'lid'],
    feedbackHit: 'Correctly explained why condensation occurs on the cold lid.',
    feedbackMiss: 'The lid is cold. Water vapour in the warm air loses energy when it touches the cold surface and condenses to liquid.',
  },

  'q3e': {
    marks: 3,
    exemplar: 'In the open mug the warm drink heats the air above it; this warm air is less dense and rises, carrying energy away [1]. Cooler, denser air moves in to replace it, setting up convection currents that remove heat quickly [1]. The vacuum flask has an insulated lid and a vacuum gap which prevent these convection currents (and conduction), so it cools more slowly [1]. Final mark only awarded if both previous marks are awarded.',
    keyConcepts: ['warm air is less dense and rises (convection)', 'cooler denser air replaces it → convection current', 'vacuum/insulation prevents convection → slower cooling'],
    keywords: ['density', 'less dense', 'rises', 'convection', 'heat transfer', 'warm air', 'vacuum', 'insulated', 'faster cooling'],
    feedbackHit: 'Correctly explained convection (rising less-dense warm air) and why the flask cools more slowly.',
    feedbackMiss: 'Three linked points: (1) warm air above the drink is less dense and rises, (2) cooler denser air replaces it (convection current carries heat away), (3) the flask\'s vacuum/insulation stops this, so it cools slowly. The conclusion mark needs both science marks.',
  },

  'q3f': {
    marks: 2,
    exemplar: 'Blowing removes the warm, moist air from the surface and brings in cooler air, increasing convection and evaporation [1]. Therefore the cooling time for the drink in the open mug would decrease (it cools faster) [1].',
    keyConcepts: ['blowing increases convection / evaporation', 'more convection → faster heat transfer → faster cooling'],
    keywords: ['blowing', 'convection', 'evaporation', 'cooling time', 'decreases', 'faster'],
    feedbackHit: 'Correctly predicted faster cooling and explained via increased convection/evaporation.',
    feedbackMiss: 'Blowing replaces the warm air at the surface with cooler air, increasing convection and evaporation. This increases the rate of heat transfer, so the drink cools faster (shorter cooling time).',
  },

  // ── Q4: Waves — Sound in boomwhacker tubes ─────────────────
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
    exemplar: 'Select: 5 plastic tubes of 3.0 cm diameter [3 marks — 1 mark each for: (1) at least 3 of one material only; (2) at least 3 of one diameter only; (3) exactly 5 lengths of 3.0 cm diameter plastic. Third mark only awarded if first two are awarded.]',
    keyConcepts: ['one material only (plastic) to control material', 'one diameter only (3.0 cm) to control diameter', '5 different lengths provides sufficient data'],
    keywords: ['plastic tubes', '3.0 cm diameter', '5 lengths', 'control variables', 'one material', 'one diameter'],
    feedbackHit: 'Correctly selected all 5 plastic tubes of 3.0 cm diameter with justification.',
    feedbackMiss: 'Select only tubes of the same material AND same diameter (to keep these as control variables). Choose the set with the most different lengths: 5 plastic, 3.0 cm diameter tubes.',
  },

  'q4c': {
    marks: 2,
    exemplar: 'IV: length of tube [1]. CV: material of tube AND diameter of tube — both required for the second mark, with justification that changing these would affect the frequency [1].',
    keyConcepts: ['IV = the variable changed by the experimenter', 'CV = variables kept constant to ensure a fair test'],
    keywords: ['independent variable', 'length', 'control variable', 'material', 'diameter', 'justified'],
    feedbackHit: 'Correctly identified IV as length and two CVs (material and diameter) with justification.',
    feedbackMiss: 'IV = length (what you change). Control variables = material and diameter of the tube. These must be kept constant because they would also affect the frequency produced.',
  },

  'q4d': {
    marks: 3,
    exemplar: 'Two data points taken from graph [1]. Correct calculation: e.g. 0.20 × 1700 = 340 and 0.40 × 850 = 340 (or equivalent: products of L × f are equal, or double L = halve f) [1]. Conclusion: hypothesis supported — data shows inverse proportion [1]. Award 1 mark only if student identifies decreasing relationship but performs no valid calculation.',
    keyConcepts: ['inverse proportion: L × f = constant', 'test by checking if products are equal', 'or verify: doubling L halves f'],
    keywords: ['inverse proportion', 'data points', 'L × f = constant', '340', 'hypothesis supported', 'calculation'],
    feedbackHit: 'Used two data points to confirm inverse proportion and concluded the hypothesis is supported.',
    feedbackMiss: 'For inverse proportion, check that L × f = constant. Pick two points: 0.20 × 1700 = 340 and 0.40 × 850 = 340. Equal products → inverse proportion → hypothesis supported.',
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
    exemplar: 'Data point plotted correctly at (2.5, 850) within ±0.1 on x-axis and ±20 Hz on y-axis [1]. Line of best fit drawn through the origin with roughly equal numbers of points above and below the line [1].',
    keyConcepts: ['plotting data points accurately', 'line of best fit: equal distribution of points above and below'],
    keywords: ['plot', 'data point', '(2.5, 850)', 'line of best fit', 'LOBF', 'origin'],
    feedbackHit: 'Plotted point (2.5, 850) correctly and drew an appropriate line of best fit.',
    feedbackMiss: 'Plot the point at x = 2.5 (1/L) and y = 850 (frequency). The line of best fit should pass through the origin with roughly equal numbers of points above and below it.',
  },

  'q4g': {
    type: 'mcq',
    correct: 2, // C. Speed of sound in air (index 2)
  } as MCQEntry,

  'q4h': {
    marks: 3,
    exemplar: 'Choose two points on the LOBF separated widely in y [1]. Calculate gradient = Δf / Δ(1/L) = (1700 − 0)/(5.0 − 0) = 340 [1]. Speed of sound = 340 m s⁻¹ (accept 330–350) with unit m s⁻¹ [1].',
    keyConcepts: ['gradient of f vs 1/L graph = speed of sound', 'gradient = Δy/Δx using points on the LOBF', 'speed of sound ≈ 340 m s⁻¹'],
    keywords: ['gradient', 'speed of sound', '340', 'm/s', 'line of best fit', 'Δf/Δ(1/L)', 'units'],
    feedbackHit: 'Correctly calculated the gradient (340 m s⁻¹) and identified it as the speed of sound.',
    feedbackMiss: 'Gradient = Δ(frequency) / Δ(1/length) = 1700/5.0 = 340. Use two points on your line of best fit. The gradient gives the speed of sound (≈ 340 m s⁻¹). Remember units (m s⁻¹).',
  },

  // ── Q5: Waves — Sonometer wire tension ─────────────────────
  'q5a': {
    marks: 2,
    exemplar: 'W = mg → Tension = 0.28 × 9.8 = 2.744 N ≈ 2.7 N. Award 1 mark for W = mg (seen or implied); 1 mark for correct answer (2.7 N or 2.74 N, accept 2 s.f. or more).',
    keyConcepts: ['tension in wire = weight of hanging mass = mg', 'W = mg'],
    keywords: ['W = mg', 'tension', 'weight', 'mass', '9.8', '2.7 N', '2.744'],
    feedbackHit: 'Correctly calculated tension using W = mg.',
    feedbackMiss: 'The tension in the wire equals the weight of the hanging mass. Use W = mg = 0.28 × 9.8 = 2.744 N ≈ 2.7 N. Weight is a force measured in newtons.',
  },

  'q5b': {
    marks: 2,
    exemplar: 'Accept any two from: length of wire (between bridges); thickness/diameter of wire; material/type of wire; density of wire; force of pluck. Max 2 marks, 1 per valid CV.',
    keyConcepts: ['control variables are kept constant to ensure a fair test', 'length, thickness, material, and pluck force all affect frequency'],
    keywords: ['length', 'thickness', 'diameter', 'material', 'pluck force', 'control variable'],
    feedbackHit: 'Stated two valid control variables.',
    feedbackMiss: 'Choose any two: length of wire, thickness/diameter, material, or force of pluck. These must be kept constant so only tension affects the frequency.',
  },

  'q5c': {
    marks: 4,
    exemplar: 'Column headers include "Tension" and "Frequency" with units in headers only [1]. Units for both quantities in headers (N and Hz) [1]. Results in ascending (or descending) order of tension [1]. 47.14 N correctly rounded to 47.1 N (consistent decimal places) [1].',
    keyConcepts: ['column headers must include quantity and unit', 'units in headers only, not beside each value', 'ascending/descending order of IV', 'consistent decimal places'],
    keywords: ['column headers', 'Tension / N', 'Frequency / Hz', 'ascending order', 'consistent d.p.', '47.1'],
    feedbackHit: 'Correct headers with units, ascending order, and 47.1 N correctly rounded.',
    feedbackMiss: 'Four marks: (1) "Tension" in header, (2) "Frequency" with units in header, (3) ascending order, (4) 47.1 N (not 47.6 or 47.14) — round consistently to 1 d.p.',
  },

  'q5d': {
    marks: 2,
    exemplar: 'Accept any relevant improvement with a linked justification: e.g. repeat measurements [1] → reduces random errors / can identify anomalies [1]; OR increase the range of data [1] → pattern more clearly visible [1]; OR take measurements at regular intervals [1] → more reliable trend [1]. Award 1 mark for improvement, 1 for justification.',
    keyConcepts: ['repeating reduces random error', 'more data / wider range → clearer pattern', 'regular intervals → more reliable trend'],
    keywords: ['repeat', 'range', 'regular intervals', 'reliability', 'anomalies', 'mean', 'justification'],
    feedbackHit: 'Suggested a valid improvement with a clear justification.',
    feedbackMiss: 'Give both an improvement (e.g. repeat measurements and take a mean) AND a reason (e.g. to reduce the effect of random errors and identify anomalous values).',
  },

  'q5e': {
    marks: 3,
    exemplar: 'New IV: any reasonable choice (e.g. length, thickness/diameter, material, temperature) — 1 mark. Two CVs appropriate to the new IV (e.g. if length chosen: tension and material/thickness) — 1 mark each. Do not award a CV mark if it is the same as the new IV.',
    keyConcepts: ['new IV must be a variable that affects frequency', 'CVs must be different from the new IV', 'two CVs needed'],
    keywords: ['independent variable', 'control variable', 'length', 'thickness', 'material', 'frequency'],
    feedbackHit: 'Stated a valid new IV and two appropriate CVs (different from the new IV).',
    feedbackMiss: 'Choose a new IV (e.g. length of wire). Then list two variables that must be kept constant — not the same as your new IV. E.g. if IV = length, then CVs could be tension and thickness.',
  },

  'q5f': {
    marks: 2,
    exemplar: 'If-then linking their IV with frequency [1] (does not need to be scientifically correct for this mark). Because: an attempt at scientific explanation linking their IV and frequency [1]. Award 0 if the hypothesis relates tension and frequency (not the new IV from part e).',
    keyConcepts: ['hypothesis format: if-then-because', 'IV and DV must match the investigation from part (e)', 'scientific reasoning in "because" clause'],
    keywords: ['if', 'then', 'because', 'frequency', 'independent variable', 'hypothesis'],
    feedbackHit: 'Wrote a testable if-then-because hypothesis linking the new IV to frequency.',
    feedbackMiss: 'Format: "If [new IV from part e] increases, then the frequency will [increase/decrease], because [scientific reason]." Do not use tension as the IV here.',
  },

  // ── Q6: Sound — Intensity through acoustic-foam panels ─────
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
    exemplar: '2 layers: mean = (118 + 116 + 116)/3 = 350/3 = 116.7 → 117 dB. 4 layers: mean = (115 + 114 + 112)/3 = 341/3 = 113.7 → 114 dB. Award 1 mark per correct mean. Do not accept answers with additional decimal places.',
    keyConcepts: ['mean = sum of values ÷ number of values', 'round means to whole numbers for sound level data'],
    keywords: ['mean', 'average', '117', '114', 'dB', 'sum', 'divide'],
    feedbackHit: 'Correctly calculated both means (117 dB and 114 dB).',
    feedbackMiss: 'Mean = sum of all trials ÷ number of trials. 2 layers: (118+116+116)/3 = 117 dB. 4 layers: (115+114+112)/3 = 114 dB. Round to whole numbers.',
  },

  'q6c': {
    marks: 1,
    exemplar: 'Mean of 6-layer and 8-layer values: (110 + 104)/2 = 107 dB. Award 1 mark for correct answer.',
    keyConcepts: ['mean of two values = sum ÷ 2'],
    keywords: ['mean', '107 dB', '110', '104'],
    feedbackHit: 'Correctly calculated the mean as 107 dB.',
    feedbackMiss: 'Mean = (110 + 104) / 2 = 214 / 2 = 107 dB.',
  },

  'q6d': {
    marks: 13,
    exemplar: `Variables (max 4 marks):
- 1 mark: DV = sound intensity level as dependent variable
- 2 marks: IV = number of layers/thickness of foam as independent variable AND DV correct, plus one control variable stated
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
    keyConcepts: ['IV = number of foam layers', 'DV = sound intensity level (dB)', 'CVs: distance, type of foam, speaker volume', 'hypothesis: more layers → lower sound level because each absorbs energy', 'method: vary layers, measure with sound meter, repeat for reliability'],
    keywords: ['IV', 'DV', 'control variable', 'justified', 'hypothesis', 'if-then-because', 'method', 'repeat', 'data table'],
    feedbackHit: 'Full investigation design with justified variables, testable hypothesis, clear method, and sufficient data collection plan.',
    feedbackMiss: 'Design must include: (1) IV = layers of foam, DV = sound intensity level, 2 justified CVs; (2) Hypothesis: if layers increase, sound level decreases because each layer absorbs sound energy; (3) Method: set speaker at fixed distance/volume, measure with sound meter, vary number of layers, repeat 3 times; (4) At least 5 different values of the IV.',
  },

  // ── Q7: Space Physics — Jupiter & retrograde motion ────────
  'q7a': {
    marks: 2,
    exemplar: 'Jupiter appears to move backwards/change direction at certain times (retrograde motion) [1]. In the geocentric model, Jupiter would orbit Earth in a circular/elliptical path and would always appear to move in one direction — it would never reverse [1]. Accept: reference to changing distance between Earth and Jupiter; or "Jupiter would follow a single arc from Earth\'s perspective".',
    keyConcepts: ['retrograde motion = apparent backwards movement of Jupiter', 'geocentric model predicts circular orbit → no retrograde motion possible', 'retrograde motion explained by heliocentric model (Earth overtakes Jupiter)'],
    keywords: ['retrograde motion', 'backwards', 'geocentric model', 'circular orbit', 'direction change', 'inconsistent'],
    feedbackHit: 'Explained retrograde motion and why it contradicts the geocentric model.',
    feedbackMiss: 'Two points: (1) Jupiter appears to move backwards in the sky at certain times. (2) If Earth were the centre, Jupiter would follow a simple curved path and would never reverse direction.',
  },

  'q7b': {
    marks: 2,
    exemplar: 't = d/v = 6.3 × 10¹¹ / 3.0 × 10⁸ = 2100 s [1]. Convert: 2100 / 60 = 35 minutes [1]. Accept correct value of time in seconds for first mark. Award 2 marks for correct final answer (35 min) alone.',
    keyConcepts: ['speed = distance ÷ time → time = distance ÷ speed', 'speed of light/radio waves = 3.0 × 10⁸ m s⁻¹', '2100 s = 35 minutes'],
    keywords: ['time = distance/speed', '6.3 × 10¹¹', '3.0 × 10⁸', '2100 s', '35 minutes'],
    feedbackHit: 'Correctly calculated signal travel time as 2100 s = 35 minutes.',
    feedbackMiss: 'time = distance ÷ speed = 6.3 × 10¹¹ ÷ 3.0 × 10⁸ = 2100 s. To convert to minutes: divide by 60 = 35 minutes.',
  },

  'q7c': {
    marks: 2,
    exemplar: 'Accept any two from: the launch date gives the shortest journey time; the launch date positions Earth and Jupiter favourably (shortest/most efficient path, WTTE); in order to minimise fuel (e.g. using a gravity assist); in order to minimise communication time; the launch date is calculated to reach the correct arrival point.',
    keyConcepts: ['launch window = when Earth and Jupiter are optimally positioned', 'favourable alignment → less fuel, shorter journey, less communication delay'],
    keywords: ['shortest distance', 'shortest journey time', 'minimise fuel', 'gravity assist', 'orbital position', 'launch window'],
    feedbackHit: 'Explained two valid reasons why the launch date is carefully calculated.',
    feedbackMiss: 'Two reasons: (1) The launch date positions Earth and Jupiter favourably so the journey uses less fuel (e.g. a gravity assist), (2) It gives the shortest travel time (or allows the spacecraft to reach the correct arrival point).',
  },

  // ── Q8: Science & Society — Europa Mission (Criterion D) ────
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
    keyConcepts: ['technical: distance/communication delay (~35 min), intense Jupiter radiation, long mission time, life support', 'economic: high cost vs technological spin-offs, jobs, prestige, possible discovery of life', 'political: national prestige, international cooperation/competition, planetary protection', 'appraisal: weigh evidence, reach balanced conclusion'],
    keywords: ['technical challenge', 'radiation', 'distance', 'communication', 'economic', 'cost', 'benefit', 'political', 'appraisal', 'conclusion'],
    feedbackHit: 'Discussed technical challenges, economic advantages/disadvantages, political implications, and gave a concluding appraisal.',
    feedbackMiss: 'Cover all four areas: (1) Two technical challenges with science (communication delay, Jupiter radiation), (2) Economic advantage AND disadvantage with discussion, (3) Political implications, (4) Balanced concluding appraisal.',
  },

  // ── Q9: Science & Society — Moon-base Environment (Crit D) ──
  'q9a': {
    marks: 6,
    exemplar: `Award 1 mark per relevant effect AND 1 mark per linked solution (max 2 marks per factor):

Extreme temperature swings:
- Effect [1]: huge heating/cooling that equipment and humans cannot survive unprotected
- Solution [1]: well-insulated habitats with active heating/cooling; build into shaded craters / use reflective insulation
(Do not accept "constant heating" without mention of insulation)

Radiation:
- Effect [1]: too much radiation is harmful / can cause cancer / cell damage (no atmosphere or magnetic field)
- Solution [1]: bury habitats under regolith or build in lava tubes for shielding; protective suits

Low gravity:
- Effect [1]: bone density loss, muscle wasting, balance/movement difficulties over long stays
- Solution [1]: regular resistance exercise; possible rotating modules to simulate gravity`,
    keyConcepts: ['extreme temperature swings → insulation and active heating/cooling needed', 'radiation → shielding needed (regolith/lava tubes or suits)', 'low gravity → exercise to maintain muscle/bone; rotation for simulated gravity'],
    keywords: ['temperature', 'insulation', 'radiation', 'shielding', 'regolith', 'gravity', 'bone density', 'muscle', 'exercise', 'rotate'],
    feedbackHit: 'Correctly described effects of all three factors and suggested linked solutions.',
    feedbackMiss: 'For each factor: state the specific effect on humans, then give a linked practical solution. Temperature → insulate/heat-cool. Radiation → shield (regolith/lava tubes). Gravity → exercise/rotation.',
  },

}
