import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

export type MCQEntry = {
  type: 'mcq'
  correct: number
}

export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1: Pendulum & Wrecking Ball ─────────────────────────────────

  'q1_a': { type: 'mcq', correct: 2 }, // C — basketball thrown is not periodic

  'q1_b': {
    marks: 2,
    exemplar: 'Position A (top left): KE = minimum, PE = maximum, Speed = minimum.\nPosition B (bottom): KE = maximum, PE = minimum, Speed = maximum.\nPosition C (top right): KE = minimum, PE = maximum, Speed = minimum.\nAward 1 mark for correct A/C description; 1 mark for correct B description.',
    keyConcepts: ['KE maximum at bottom', 'PE maximum at top', 'speed maximum at lowest point', 'energy conservation pendulum'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'position B', 'bottom', 'speed', 'energy'],
    feedbackHit: 'Correct — energy transfers between kinetic and potential as the pendulum swings.',
    feedbackMiss: 'At position B (bottom): KE is maximum, PE is minimum, speed is maximum. At A and C (top): KE is minimum, PE is maximum, speed is minimum. Energy is conserved and converts between types.',
  },

  'q1_c': {
    marks: 3,
    exemplar: 'T = 17.1 / 10 = 1.71 s.\nRearrange T² = 4π²L/g → g = 4π²L / T².\ng = 4 × π² × 0.720 / (1.71)² = 28.42 / 2.9241 = 9.79 m s⁻² (3 s.f.).\nAward: 1 mark for T = 1.71 s; 1 mark for correct rearrangement and substitution; 1 mark for answer 9.79 m s⁻² (accept 9.78–9.80, must be 3 s.f.).',
    keyConcepts: ['T = total time / number of periods', 'rearrange T² = 4π²L/g', 'g = 4π²L/T²', '9.79 m s⁻²', 'three significant figures'],
    keywords: ['1.71', '9.79', '9.78', '9.80', 'period', 'rearrange', '4π²', 'divide', 'three'],
    feedbackHit: 'Correct calculation of g. Well done for showing all steps.',
    feedbackMiss: 'Step 1: T = 17.1/10 = 1.71 s. Step 2: Rearrange T² = 4π²L/g → g = 4π²L/T². Step 3: g = 4π² × 0.720 / (1.71)² ≈ 9.79 m s⁻².',
  },

  'q1_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the laboratory is not at sea level (altitude affects g); uncertainty/error in measuring the length L of the pendulum; uncertainty/error in measuring the time T (reaction time, parallax); air resistance effects; pendulum not swinging in a perfect arc.',
    keyConcepts: ['altitude or location affects g', 'measurement uncertainty in L', 'timing uncertainty', 'experimental error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time', 'reaction time', 'parallax'],
    feedbackHit: 'Correct — a valid reason for experimental deviation from expected g was identified.',
    feedbackMiss: 'Possible reasons: the lab is at a different altitude to sea level (g varies with height); small errors in measuring L or T (timing reaction time, parallax errors) lead to a different calculated g.',
  },

  'q1_e': {
    marks: 4,
    exemplar: 'Height change: Δh = 12.5 − 4.5 = 8.0 m.\nKE gained = loss in PE = mgh = 2000 × 9.81 × 8.0 = 156 960 J.\nKE = 157 kJ ≈ 160 kJ (2 s.f.).\nAward: 1 mark for Δh = 8.0 m; 1 mark for KE = mgh; 1 mark for correct substitution; 1 mark for 160 kJ (2 s.f.). Accept 157 kJ for 3 marks if 2 s.f. rounding absent.',
    keyConcepts: ['Δh = 12.5 − 4.5 = 8.0 m', 'KE = mgh', 'conservation of energy', '157 kJ or 160 kJ', 'two significant figures'],
    keywords: ['8.0', '8 m', '2000', '9.81', '156960', '157', '160', 'kJ', 'height', 'mgh', 'kinetic', 'potential'],
    feedbackHit: 'Correct — the kinetic energy at impact is approximately 160 kJ (2 s.f.).',
    feedbackMiss: 'Use conservation of energy: KE gained = PE lost = mgh. Δh = 12.5 − 4.5 = 8.0 m. KE = 2000 × 9.81 × 8.0 = 156 960 J ≈ 160 kJ (2 s.f.).',
  },

  'q1_f': {
    marks: 1,
    exemplar: 'Accept any ONE of: frictional forces / air resistance / sound energy converts some kinetic energy to heat/thermal energy; the assumption of 100% efficient energy transfer is not valid in reality.',
    keyConcepts: ['friction / air resistance', 'energy lost as heat or sound', 'not 100% efficient', 'energy dissipation'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost', 'inefficient', 'drag'],
    feedbackHit: 'Correct — real-world energy losses mean KE will be less than calculated.',
    feedbackMiss: 'In the real world, frictional forces and air resistance convert some kinetic energy into heat and sound. The calculation assumes all PE converts to KE, which is only true in an ideal (frictionless) system.',
  },

  // ── Q2: Smoke Detectors & Radioactivity ──────────────────────────

  'q2_a': {
    marks: 2,
    exemplar: 'Hot air/smoke rises because it is less dense than cooler surrounding air. Therefore smoke rises to the ceiling, where the detector is positioned to be triggered.\nAward 1 mark for "smoke/hot air rises"; 1 mark for reason linked to density or a valid mechanism.',
    keyConcepts: ['smoke rises', 'less dense than cool air', 'convection', 'ceiling position maximises detection'],
    keywords: ['rises', 'ceiling', 'dense', 'density', 'hot air', 'convection', 'upward', 'lighter'],
    feedbackHit: 'Correct — hot smoke is less dense than cool air and rises to the ceiling.',
    feedbackMiss: 'Smoke and hot air are less dense than cooler air, so they rise. Installing the detector on the ceiling means it is in the path of rising smoke and will trigger the alarm sooner.',
  },

  'q2_b': {
    marks: 2,
    exemplar: 'Any TWO of: (1) alpha particles have a high ionizing power; (2) alpha particles consist of 2 protons and 2 neutrons (helium-4 nucleus); (3) alpha particles have a low penetrating power / stopped by a few cm of air or a sheet of paper; (4) alpha particles carry a +2 charge / positively charged; (5) alpha particles are deflected by electric and magnetic fields; (6) alpha particles have a short range in air (a few cm).',
    keyConcepts: ['high ionizing power', 'helium nucleus 2 protons 2 neutrons', 'low penetrating power', 'positively charged +2', 'short range in air', 'deflected by fields'],
    keywords: ['ionize', 'ionizing', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range', 'electric', 'magnetic', 'paper'],
    feedbackHit: 'Two valid properties of alpha particles identified.',
    feedbackMiss: 'Properties of alpha particles include: high ionizing power; composed of 2 protons + 2 neutrons (helium nucleus); low penetrating power (stopped by paper or a few cm of air); positively charged (+2); short range in air; deflected by electric/magnetic fields.',
  },

  'q2_c': { type: 'mcq', correct: 0 }, // A — ²⁴¹Am → ²³⁷Np + ⁴α (correct alpha decay)

  'q2_d': {
    marks: 2,
    exemplar: 'Answer: B (²⁴⁰₉₃Am).\nJustification: Isotopes of the same element must have the same proton number (atomic number). Americium-241 has a proton number of 95. Option B shows a proton number of 93, which is not 95. Therefore it is not an isotope of americium — it is a different element (neptunium-240). Award 1 mark for selecting B; 1 mark for justification referencing proton/atomic number.',
    keyConcepts: ['isotopes same proton number', 'proton number 95 for americium', 'B has proton number 93', 'different element not isotope'],
    keywords: ['proton', 'atomic number', '95', '93', 'same', 'different element', 'isotope', 'B', 'option B'],
    feedbackHit: 'Correct — B has a different proton number (93, not 95) so it cannot be an isotope of americium.',
    feedbackMiss: 'Isotopes of an element always have the same proton number (atomic number). Americium has proton number 95. Option B (²⁴⁰₉₃Am) shows proton number 93, which is neptunium — a different element. It cannot be an isotope of americium.',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'Half-life ≈ 420 years (accept 410–430 years). Read from the graph where the number of nuclei = 5000 (half of 10 000); read off the corresponding time.',
    keyConcepts: ['half-life from graph', '5000 nuclei = half of 10000', 'read x-axis at half the starting value', '420 years'],
    keywords: ['420', '410', '430', '5000', 'half', 'graph', 'read', 'years', 'x-axis'],
    feedbackHit: 'Correct — the half-life is approximately 420 years, read from where the curve crosses 5 000 nuclei.',
    feedbackMiss: 'To find the half-life: start at 10 000 nuclei, find 5 000 (half) on the y-axis, draw a horizontal line to the curve, then read down to the x-axis. The half-life is approximately 420 years.',
  },

  'q2_f': {
    marks: 1,
    exemplar: '10 000 → 5 000 → 2 500 → 1 250 → 625 requires 4 half-lives.\nTime = 4 × 420 = 1680 years (accept 1640–1720 based on their half-life from part e).',
    keyConcepts: ['4 half-lives to reach 625', 'time = 4 × half-life', '1680 years', 'halving sequence'],
    keywords: ['4', '1680', '1640', '1720', 'four', 'half-lives', 'multiply', 'halve', '625'],
    feedbackHit: 'Correct — it takes 4 half-lives for 10 000 nuclei to reduce to 625.',
    feedbackMiss: '10 000 → 5 000 (×1) → 2 500 (×2) → 1 250 (×3) → 625 (×4 half-lives). Time = 4 × 420 ≈ 1680 years.',
  },

  'q2_g': {
    marks: 3,
    exemplar: 'Normal mechanism: Alpha particles ionize air molecules between two plates in the detector, producing a small continuous current; when smoke enters it absorbs ions and reduces the current, triggering the alarm.\nBeta/gamma problem: Beta and gamma radiation have much lower ionizing power than alpha radiation (gamma has almost none in air). They would not create sufficient ions between the plates to maintain the current, so the current would always be zero / the alarm would always sound / would not respond to smoke entering the detector. Award marks: 1 mark for describing the normal ionization mechanism; 1 mark for beta/gamma having lower ionizing power; 1 mark for the logical consequence on detector function.',
    keyConcepts: ['alpha ionizes air to create current', 'smoke reduces current triggering alarm', 'beta/gamma much lower ionizing power', 'insufficient ionization', 'alarm always on or always off'],
    keywords: ['ionize', 'ions', 'current', 'plates', 'smoke', 'absorbs', 'beta', 'gamma', 'penetrating', 'ionizing power', 'alarm', 'trigger'],
    feedbackHit: 'Good explanation of the ionization mechanism and why beta/gamma would not work.',
    feedbackMiss: 'In a smoke detector, alpha particles ionize air between two plates, maintaining a small current. Smoke enters and absorbs ions, reducing the current and triggering the alarm. Beta and gamma radiation have much lower ionizing power, so they would not create enough ions to maintain this current — the detector would not function.',
  },

  // ── Q3: Resistance Investigation ─────────────────────────────────

  'q3_a': {
    marks: 2,
    exemplar: 'If the diameter of the cylinder increases, then the resistance will decrease, because a larger diameter provides more cross-sectional area for electrons to flow through (more parallel paths), reducing opposition to current flow.\nAward 1 mark for stating direction (diameter↑ → resistance↓); 1 mark for a valid scientific reason.',
    keyConcepts: ['larger diameter → lower resistance', 'more cross-sectional area', 'more paths for electrons', 'less opposition to current'],
    keywords: ['diameter', 'resistance', 'decrease', 'cross-section', 'area', 'electrons', 'paths', 'flow', 'because'],
    feedbackHit: 'Good hypothesis — correct direction and scientific reasoning.',
    feedbackMiss: 'If diameter increases, resistance decreases. Reason: a wider cylinder has more cross-sectional area, providing more parallel paths for electron flow, reducing resistance.',
  },

  'q3_b': {
    marks: 3,
    exemplar: 'The student should select 5 cylinders of Material C only, with 5 different diameters.\nAward: 1 mark for selecting only one material (Material C); 1 mark for selecting 5 different diameters; 1 mark for explaining that material and length must be controlled (only diameter varies). Accept Material A or B consistently chosen if justified.',
    keyConcepts: ['one material only', 'five different diameters', 'material controlled', 'length controlled', 'only diameter varies'],
    keywords: ['material C', 'one material', 'same material', '5 diameters', 'different diameters', 'controlled', 'length', 'constant', 'only diameter'],
    feedbackHit: 'Correct selection — using one material with varying diameters is a valid controlled experiment.',
    feedbackMiss: 'Select cylinders of only ONE material (e.g. Material C) in 5 different diameters. This controls the material and length, so only the diameter varies. Using multiple materials would introduce another variable and make results unreliable.',
  },

  'q3_c': {
    marks: 2,
    exemplar: 'Only one material should be used because different materials have different resistivities. If more than one material were tested, it would be impossible to determine whether resistance changes were due to diameter or material type. Using different diameters tests the research question directly. Length should also be kept constant because resistance depends on length as well as diameter.\nAward 1 mark for justifying single material (control variable); 1 mark for justifying variable diameters (tests RQ).',
    keyConcepts: ['one material controls resistivity variable', 'different materials confound results', 'different diameters to test RQ', 'length controlled'],
    keywords: ['resistivity', 'material', 'same material', 'confound', 'fair test', 'diameter varies', 'length constant', 'control', 'justify'],
    feedbackHit: 'Good justification — controlling material ensures only diameter causes changes in resistance.',
    feedbackMiss: 'Only one material: different materials have different resistivities — using multiple materials would mean resistance changes could be due to material, not diameter. Different diameters: this is the independent variable being tested. Length must be controlled: resistance also depends on length.',
  },

  'q3_d': {
    marks: 4,
    exemplar: 'A table with correct headings "Diameter / mm" and "Resistance / Ω" (with units in heading, not data cells). Data presented in order: (12, 56), (17, 27), (20, 20), (23, 16), (27, 12).\nAward: 1 mark for both correct column headings with units; 1 mark for all 5 diameter values correct; 1 mark for all 5 resistance values correct; 1 mark for data presented in logical order (ascending diameter).',
    keyConcepts: ['column headings with units', 'Diameter / mm', 'Resistance / Ω', 'data in ascending order', 'all 5 data pairs'],
    keywords: ['diameter', 'resistance', 'mm', 'ohm', 'Ω', '12', '56', '17', '27', '20', '23', '16', 'heading', 'unit'],
    feedbackHit: 'Well-organised data table with correct headings, units, and ordered data.',
    feedbackMiss: 'Table should have headings "Diameter / mm" and "Resistance / Ω". Data: (12, 56), (17, 27), (20, 20), (23, 16), (27, 12). Order the rows by increasing diameter.',
  },

  'q3_e': {
    marks: 2,
    exemplar: 'Carrying out more trials (repeats) for each diameter allows a mean (average) resistance to be calculated. This reduces the effect of random errors and increases the reliability of the results, making conclusions more valid.\nAward 1 mark for mean/average; 1 mark for reliability or reducing random error.',
    keyConcepts: ['calculate a mean/average', 'reduce random errors', 'increase reliability', 'more valid conclusions'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid', 'anomaly', 'anomalous'],
    feedbackHit: 'Correct — more trials allow mean values and reduce the impact of random errors.',
    feedbackMiss: 'More trials allow a mean (average) to be calculated for each diameter. This reduces the effect of random errors and makes the results more reliable.',
  },

  'q3_f': { type: 'mcq', correct: 3 }, // D — curve of best fit (inverse-type relationship)

  'q3_g': {
    marks: 3,
    exemplar: 'Research question: How does the length of the cylinder affect its resistance? (OR: How does the type of material affect the resistance of the cylinder?)\nIndependent variable: length of the cylinder (OR: material type)\nControl variable: diameter of the cylinder; material type (OR: length, diameter) — must be consistent with RQ.\nAward 1 mark for valid RQ; 1 mark for IV consistent with RQ; 1 mark for valid CV consistent with RQ.',
    keyConcepts: ['research question about new IV', 'IV consistent with RQ', 'CV consistent with RQ and different from IV'],
    keywords: ['length', 'material', 'research question', 'how does', 'affect', 'independent', 'control', 'consistent', 'diameter'],
    feedbackHit: 'Valid research question, consistent IV and CV.',
    feedbackMiss: 'Example: RQ = "How does the length of the cylinder affect its resistance?" IV = length, CV = diameter and material (kept constant). OR: RQ = "How does the material type affect resistance?" IV = material, CV = length and diameter.',
  },

  // ── Q4: LDR Investigation Design ─────────────────────────────────

  'q4_a': {
    marks: 1,
    exemplar: 'How does the distance between the light source and the LDR affect the resistance of the LDR? (Accept variations that clearly state the IV = distance and DV = resistance.)',
    keyConcepts: ['distance as IV', 'resistance as DV', 'clear research question format'],
    keywords: ['distance', 'resistance', 'LDR', 'how does', 'affect', 'light source', 'relationship'],
    feedbackHit: 'Correct research question with clear IV and DV.',
    feedbackMiss: 'The research question should state the independent variable (distance from light source) and the dependent variable (resistance of LDR). Example: "How does the distance between the lamp and the LDR affect the resistance of the LDR?"',
  },

  'q4_b': {
    marks: 13,
    exemplar: 'A 13-mark holistic investigation design. Top-band response (11–13 marks) includes: clearly stated IV (distance) and DV (resistance); TWO control variables each with justification (e.g. lamp brightness — changing it would change light intensity; orientation of LDR — affects how much light hits the sensor); full equipment list (lamp, LDR, ohmmeter/multimeter, ruler/metre rule, retort stand, connecting wires); detailed step-by-step method (set up lamp at fixed position, place LDR at measured distance, record ohmmeter reading, repeat at multiple distances); sufficient data (range 5–100 cm, minimum 8 distances, 3 repeats per distance to calculate mean); acknowledgement of uncertainty/error. Mid-band (7–10): most elements present but lacking detail in 1–2 areas. Lower-band (1–6): basic description present but missing key elements.',
    keyConcepts: ['IV = distance, DV = resistance', 'two control variables with justification', 'equipment list', 'detailed method', 'range and repeats', 'sufficient data collection'],
    keywords: ['distance', 'resistance', 'control', 'lamp', 'LDR', 'ohmmeter', 'method', 'range', 'repeat', 'mean', 'justif', 'independent', 'dependent', 'step'],
    feedbackHit: 'Well-designed investigation with variables, method, equipment, and sufficient data plan.',
    feedbackMiss: 'A complete design should include: IV = distance from lamp to LDR, DV = resistance (ohmmeter). Control variables (justify each): lamp brightness, LDR orientation. Equipment: lamp, LDR, ohmmeter, ruler. Method: place LDR at measured distances (e.g. 10–100 cm, every 10 cm), record resistance at each, repeat 3 times and calculate mean.',
  },

  // ── Q5: Resistance vs Temperature ────────────────────────────────

  'q5_a': {
    marks: 1,
    exemplar: '42 °C (accept 41–43 °C). The thermometer zoom shows the mercury between the 40 and 30 markings, closer to 40.',
    keyConcepts: ['read thermometer correctly', '42 °C', 'between 30 and 40 marks'],
    keywords: ['42', '41', '43', '°C', 'thermometer', 'temperature', 'read'],
    feedbackHit: 'Correct thermometer reading.',
    feedbackMiss: 'The thermometer zoom shows the mercury level between 30 and 40. Count the small divisions carefully. The reading is approximately 42 °C.',
  },

  'q5_b': {
    marks: 3,
    exemplar: 'Circuit: power supply (battery) connected in series with a resistor and an ammeter. A voltmeter is connected in parallel across the resistor. Award: 1 mark for ammeter in series; 1 mark for voltmeter in parallel across resistor; 1 mark for complete circuit with power supply and resistor correctly shown.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'power supply in series', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'power supply', 'resistor', 'circuit'],
    feedbackHit: 'Correct circuit description with ammeter in series and voltmeter in parallel.',
    feedbackMiss: 'Circuit: power supply → ammeter (in series) → resistor → back to power supply. Voltmeter connected in parallel across just the resistor (not the whole circuit).',
  },

  'q5_c': {
    marks: 3,
    exemplar: 'Independent variable (IV): Temperature of the resistor.\nDependent variable (DV): Current in the circuit.\nControl variables (CV): Length of the resistor; Diameter of the resistor; Voltage across the resistor.\nAward: 1 mark for correct IV; 1 mark for correct DV; 1 mark for any two correct CVs.',
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length, diameter, voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
    feedbackHit: 'Correct variable identification — temperature (IV), current (DV), length/diameter/voltage (CV).',
    feedbackMiss: 'IV = temperature of the resistor (what you change). DV = current in the circuit (what you measure). CV = length, diameter, and voltage across the resistor (all kept constant).',
  },

  'q5_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: high temperature beads could cause burns; electrical hazards (shock from live circuit); hot equipment could cause burns; do not touch beads / use tongs; ensure insulation on wires is intact.',
    keyConcepts: ['burn hazard from hot beads', 'electrical shock hazard', 'high temperature risk'],
    keywords: ['burn', 'burns', 'hot', 'temperature', 'electric shock', 'electrical', 'hazard', 'insulation', 'tongs'],
    feedbackHit: 'Valid safety concern identified.',
    feedbackMiss: 'Safety issues include: burns from hot beads (high temperature); electrical shock from live circuit components. Precautions: use tongs to handle hot beads; ensure circuit is off before adjusting connections.',
  },

  'q5_e': {
    marks: 2,
    exemplar: 'To test inverse proportion: check if I × T = constant. Using two data points, e.g. at 20 °C, I ≈ 430 mA → product ≈ 8600; at 80 °C, I ≈ 300 mA → product ≈ 24000. Products are NOT equal, so the relationship is NOT inversely proportional. The prediction that current decreases as temperature increases is supported, but the claim of inverse proportion is not supported.\nAward 1 mark for correct use of data/calculation showing products are not equal; 1 mark for correct conclusion that inverse proportion is NOT supported.',
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products are not equal', 'current decreases with temperature (direction correct)', 'inverse proportion claim not supported'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'two points', 'data', 'conclusion', 'supported'],
    feedbackHit: 'Correct use of data to test inverse proportion and a clear conclusion.',
    feedbackMiss: 'To check inverse proportion: if I × T = constant for all points, it is inversely proportional. From graph: at 20 °C, I ≈ 430 mA → 430 × 20 = 8600; at 100 °C, I ≈ 285 mA → 285 × 100 = 28500. Products are not equal, so NOT inversely proportional. The direction of change (current decreases) is correct, but the specific relationship is not inverse proportion.',
  },

  'q5_f': {
    marks: 2,
    exemplar: 'Read current at 50 °C from graph ≈ 341 mA = 0.341 A.\nR = V / I = 30 / 0.341 = 87.97... ≈ 88 Ω (accept 84–92 Ω depending on graph reading).\nAward 1 mark for correct use of R = V/I; 1 mark for answer in range 84–92 Ω.',
    keyConcepts: ['R = V / I', 'convert mA to A', '30 V constant', '88 Ω at 50 °C'],
    keywords: ['R = V/I', '30', '0.341', '88', 'resistance', 'ohm', 'Ω', 'formula', 'divide'],
    feedbackHit: 'Correct calculation using R = V/I.',
    feedbackMiss: 'Read current at 50 °C from graph (≈341 mA = 0.341 A). Use R = V/I = 30 / 0.341 ≈ 88 Ω.',
  },

  'q5_g': {
    marks: 2,
    exemplar: 'Award 1 mark for plotting the point (50 °C, their value from 5f) within ±1 small square of the correct position. Award 1 mark for a straight line of best fit that passes close to all data points, does not have to pass through the origin.',
    keyConcepts: ['plot (50 °C, ~88 Ω)', 'straight line of best fit', 'line through data not forced through origin'],
    keywords: ['plot', 'point', '50', '88', 'line of best fit', 'straight', 'LOBF', 'through data'],
    feedbackHit: 'Data point plotted and line of best fit drawn correctly.',
    feedbackMiss: 'Plot the point at (50 °C, your R from part f). Draw a straight line of best fit that passes close to all 6 data points — it should not be forced through the origin.',
  },

  'q5_h': {
    marks: 1,
    exemplar: 'Extend the line of best fit back to 0 °C on the x-axis and read the y-intercept. Accept 56–64 Ω (approximately 60 Ω).',
    keyConcepts: ['extend LOBF to 0 °C', 'read y-intercept', '~60 Ω at 0 °C'],
    keywords: ['0', '60', 'extend', 'extrapolate', 'y-intercept', 'line of best fit', 'predict', 'resistance'],
    feedbackHit: 'Correct prediction by extending the line of best fit.',
    feedbackMiss: 'Extend the line of best fit to the y-axis (Temperature = 0 °C) and read the resistance. The answer should be approximately 60 Ω.',
  },

  'q5_i': {
    marks: 2,
    exemplar: 'Choose two well-separated points on the line of best fit (not data points). Gradient = ΔR / ΔT. Using (20, 67) and (100, 101): gradient = (101−67)/(100−20) = 34/80 = 0.425 Ω °C⁻¹. Accept 0.43–0.55 Ω °C⁻¹ (depending on LOBF drawn in 5g). Unit Ω °C⁻¹ or Ω/°C required.\nAward 1 mark for correct method (two points from LOBF, ΔR/ΔT); 1 mark for answer with correct unit.',
    keyConcepts: ['gradient = ΔR / ΔT', 'two points from LOBF (not data)', 'unit Ω °C⁻¹', 'answer 0.43–0.55'],
    keywords: ['gradient', 'ΔR', 'ΔT', '0.43', '0.45', '0.50', '0.55', 'Ω/°C', 'slope', 'rise', 'run'],
    feedbackHit: 'Correct gradient calculation with appropriate unit.',
    feedbackMiss: 'Choose two points on your line of best fit (not data points). Gradient = (R₂−R₁)/(T₂−T₁). The unit is Ω °C⁻¹. The answer should be approximately 0.43–0.55 Ω °C⁻¹.',
  },

  'q5_j': {
    marks: 2,
    exemplar: 'The calculation is not valid / not reliable for two reasons: (1) 1000 °C is far beyond the range of the data (which only goes to ~100 °C); extrapolating so far beyond the data is unreliable as the relationship may not remain linear. (2) At such high temperatures, the resistor would be destroyed/melted, so the result is physically meaningless. Award 1 mark per valid comment, up to 2 marks.',
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'resistor destroyed at high temperature', 'physically unrealistic'],
    keywords: ['extrapolate', 'beyond', 'range', 'data', 'linear', 'not valid', '1000', 'melted', 'destroyed', 'unreliable', 'unrealistic'],
    feedbackHit: 'Good critique of the validity of extrapolating far beyond the data range.',
    feedbackMiss: 'The calculation is not valid: (1) 1000 °C is far beyond the data range (0–100 °C) — we cannot assume the linear trend continues. (2) At 1000 °C, the resistor would melt or be destroyed, so the result is physically meaningless.',
  },

  // ── Q6: Water Tower & Clean Water ────────────────────────────────

  'q6_a': {
    marks: 3,
    exemplar: 'Volume = 12 600 m³. Mass = ρ × V = 1000 × 12 600 = 1.26 × 10⁷ kg.\nW = mgh = 1.26 × 10⁷ × 9.81 × 52 = 6.42... × 10⁹ J ≈ 6.4 × 10⁹ J (2 s.f.).\nAward: 1 mark for mass calculation; 1 mark for W = mgh with correct substitution; 1 mark for 6.4 × 10⁹ J (2 s.f.) with standard form.',
    keyConcepts: ['mass = density × volume', '1.26 × 10⁷ kg', 'W = mgh', '6.4 × 10⁹ J', 'two significant figures standard form'],
    keywords: ['1000', '12600', '1.26', '10⁷', 'W = mgh', '9.81', '52', '6.4', '10⁹', 'joule', 'work', 'mass', 'density'],
    feedbackHit: 'Correct — the work done is approximately 6.4 × 10⁹ J.',
    feedbackMiss: 'Step 1: mass = density × volume = 1000 × 12 600 = 1.26 × 10⁷ kg. Step 2: W = mgh = 1.26 × 10⁷ × 9.81 × 52 = 6.4 × 10⁹ J (2 s.f.).',
  },

  'q6_b': {
    marks: 1,
    exemplar: 'Accept any ONE of: time spent collecting water means less time for education / work / productive activities; physical burden (carrying heavy water) causes injury / health issues; opportunity cost of time; water collection prevents economic participation; stress and fatigue from daily water collection.',
    keyConcepts: ['time lost from education or work', 'physical health burden', 'economic productivity lost', 'opportunity cost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'fatigue', 'opportunity', 'productivity', 'injury'],
    feedbackHit: 'Valid barrier to development identified.',
    feedbackMiss: 'Collecting water takes many hours each day, leaving less time for education, work, or economic activity. This is a significant barrier to personal and community development.',
  },

  'q6_c': {
    marks: 9,
    exemplar: 'A 9-mark holistic response. Top-band (8–9): Health benefits (3 marks) — reduced waterborne diseases e.g. cholera, typhoid; reduced deaths (1.4 million/year); improved nutrition; increased life expectancy; freed time from collection for productive activity. Ethical analysis of fee (4 marks) — Advantage: fee funds maintenance training so pump stays usable long-term; incentivises community ownership; sustainable model. Disadvantage: excludes poorest who cannot pay; contradicts UN goal of universal free access; ethical issue of profiting from basic human right. Concluding appraisal (2 marks) — balanced, evidence-based conclusion on long-term sustainability, e.g. "The charity should provide the pump AND ensure a maintenance training programme — charging a small fee may be justified if it enables long-term function, but subsidies should be available for the very poor."',
    keyConcepts: ['health benefits of clean water', 'disease reduction', 'ethical advantage of fee (maintenance)', 'ethical disadvantage of fee (excludes poor)', 'concluding appraisal with justification'],
    keywords: ['disease', 'cholera', 'health', 'death', 'fee', 'maintain', 'sustain', 'ethical', 'disadvantage', 'poor', 'access', 'conclude', 'long-term', 'UN', 'universal'],
    feedbackHit: 'Well-structured discussion covering health, ethics of the fee, and a justified conclusion.',
    feedbackMiss: 'A top-band response includes: (1) Health benefits — reduced waterborne disease, fewer deaths, improved wellbeing. (2) Ethical analysis of charging — advantage: raises funds for maintenance; disadvantage: excludes poorest, conflicts with universal right to water. (3) Conclusion — balanced, e.g. pump should be provided; small fee may be justified IF there are subsidies/exceptions for the very poor.',
  },

  // ── Q7: SODIS Water Treatment ─────────────────────────────────────

  'q7_a': { type: 'mcq', correct: 1 }, // '2' (index 1 in ['1','2','3','4']) — UV is between X-rays and visible

  'q7_b': {
    marks: 1,
    exemplar: 'UV waves have high energy (or: high frequency / short wavelength) which enables them to damage or destroy the DNA of microorganisms, killing them. Accept: "UV has a high enough energy to kill microbes" or "UV has high frequency / enough energy to denature proteins in microbes".',
    keyConcepts: ['UV has high energy', 'UV has high frequency', 'damages DNA of microbes', 'kills microorganisms'],
    keywords: ['energy', 'high energy', 'frequency', 'wavelength', 'DNA', 'kill', 'microbe', 'damage', 'denature'],
    feedbackHit: 'Correct — UV waves have high energy/frequency that can kill harmful microbes.',
    feedbackMiss: 'UV waves carry high energy (due to their short wavelength / high frequency) which can damage the DNA of microorganisms, killing them.',
  },

  'q7_c': {
    marks: 11,
    exemplar: 'An 11-mark holistic response. Top-band (10–11): Climate suitability (3 marks) — countries near equator have reliable sunshine ≥8h/day, ideal; SODIS works well in equatorial LEDCs (sub-Saharan Africa, parts of SE Asia, South America); less suitable in cloudy/high-altitude LEDCs (e.g. highlands, monsoon regions) where 8 h sunshine is not guaranteed or 2 days needed. Health impact (2 marks) — kills harmful microbes (bacteria, protozoa) that cause cholera, typhoid, dysentery; reduces incidence of waterborne disease; reduces mortality especially in children; improvement in public health. Challenges of implementing SODIS (4 marks) — requires plastic bottles (availability, cost, sustainability); 8-hour treatment time means water cannot be drunk immediately; requires clear sunny weather; community acceptance and trust; education/behaviour change needed; no visible indicator of treatment success; scalability (only small volumes at a time). Concluding appraisal (2 marks) — balanced, evidence-based verdict, e.g. "SODIS is a suitable low-cost method for countries near the equator with reliable sunshine, but has significant limitations in cloudier regions or where bottled water is unavailable. Overall it is a useful interim solution but cannot replace modern water treatment facilities."',
    keyConcepts: ['climate near equator suitable', 'cloudy regions less suitable', 'reduces waterborne disease', 'health improvement', 'requires bottles and sunshine', 'challenges: time, weather, behaviour change', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'cloud', 'health', 'disease', 'cholera', 'plastic', 'bottle', 'challenge', 'implement', 'time', 'education', 'conclude', 'suitable', 'limitation', 'WHO'],
    feedbackHit: 'Well-structured evaluation covering climate, health, challenges, and a reasoned conclusion.',
    feedbackMiss: 'Top-band response includes: (1) Climate — works well near equator (≥8h sun); less effective in cloudy regions. (2) Health — kills microbes (cholera, typhoid), reduces disease and mortality. (3) Challenges — needs bottles, 8h time, clear weather, community trust, education. (4) Conclusion — suitable for sunny equatorial regions but limited elsewhere; useful low-cost option but not a complete solution.',
  },
}
