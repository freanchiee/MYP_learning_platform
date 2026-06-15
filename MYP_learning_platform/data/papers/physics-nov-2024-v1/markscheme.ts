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

  // ── Q1: Swing ride & Pile driver ─────────────────────────────────

  'q1_a': { type: 'mcq', correct: 2 }, // C — ball thrown once is not periodic

  'q1_b': {
    marks: 2,
    exemplar: 'Position A (top left): KE = minimum, PE = maximum, Speed = minimum.\nPosition B (bottom): KE = maximum, PE = minimum, Speed = maximum.\nPosition C (top right): KE = minimum, PE = maximum, Speed = minimum.\nAward 1 mark for correct A/C description; 1 mark for correct B description.',
    keyConcepts: ['KE maximum at bottom', 'PE maximum at top', 'speed maximum at lowest point', 'energy conservation swing'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'position B', 'bottom', 'speed', 'energy'],
    feedbackHit: 'Correct — energy transfers between kinetic and potential as the swing ride moves.',
    feedbackMiss: 'At position B (bottom): KE is maximum, PE is minimum, speed is maximum. At A and C (top): KE is minimum, PE is maximum, speed is minimum. Energy is conserved and converts between types.',
  },

  'q1_c': {
    marks: 3,
    exemplar: 'T = 19.9 / 10 = 1.99 s.\nRearrange T² = 4π²L/g → g = 4π²L / T².\ng = 4 × π² × 0.990 / (1.99)² = 39.08 / 3.9601 = 9.87 m s⁻² (3 s.f.).\nAward: 1 mark for T = 1.99 s; 1 mark for correct rearrangement and substitution; 1 mark for answer 9.87 m s⁻² (accept 9.86–9.88, must be 3 s.f.).',
    keyConcepts: ['T = total time / number of periods', 'rearrange T² = 4π²L/g', 'g = 4π²L/T²', '9.87 m s⁻²', 'three significant figures'],
    keywords: ['1.99', '9.87', '9.86', '9.88', 'period', 'rearrange', '4π²', 'divide', 'three'],
    feedbackHit: 'Correct calculation of g. Well done for showing all steps.',
    feedbackMiss: 'Step 1: T = 19.9/10 = 1.99 s. Step 2: Rearrange T² = 4π²L/g → g = 4π²L/T². Step 3: g = 4π² × 0.990 / (1.99)² ≈ 9.87 m s⁻².',
  },

  'q1_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the laboratory is not at sea level (altitude affects g); uncertainty/error in measuring the length L of the pendulum; uncertainty/error in measuring the time (reaction time, parallax); air resistance effects; the pendulum not swinging in a perfect arc.',
    keyConcepts: ['altitude or location affects g', 'measurement uncertainty in L', 'timing uncertainty', 'experimental error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time', 'reaction time', 'parallax'],
    feedbackHit: 'Correct — a valid reason for experimental deviation from expected g was identified.',
    feedbackMiss: 'Possible reasons: the lab is at a different altitude to sea level (g varies with height); small errors in measuring L or the time (reaction time, parallax errors) lead to a different calculated g.',
  },

  'q1_e': {
    marks: 4,
    exemplar: 'Height change: Δh = 10.0 − 2.5 = 7.5 m.\nKE gained = loss in PE = mgh = 1800 × 9.81 × 7.5 = 132 435 J.\nKE = 132 kJ ≈ 130 kJ (2 s.f.).\nAward: 1 mark for Δh = 7.5 m; 1 mark for KE = mgh; 1 mark for correct substitution; 1 mark for 130 kJ (2 s.f.). Accept 132 kJ for 3 marks if 2 s.f. rounding absent.',
    keyConcepts: ['Δh = 10.0 − 2.5 = 7.5 m', 'KE = mgh', 'conservation of energy', '132 kJ or 130 kJ', 'two significant figures'],
    keywords: ['7.5', '1800', '9.81', '132435', '132', '130', 'kJ', 'height', 'mgh', 'kinetic', 'potential'],
    feedbackHit: 'Correct — the kinetic energy at impact is approximately 130 kJ (2 s.f.).',
    feedbackMiss: 'Use conservation of energy: KE gained = PE lost = mgh. Δh = 10.0 − 2.5 = 7.5 m. KE = 1800 × 9.81 × 7.5 = 132 435 J ≈ 130 kJ (2 s.f.).',
  },

  'q1_f': {
    marks: 1,
    exemplar: 'Accept any ONE of: frictional forces / air resistance / sound energy converts some kinetic energy to heat/thermal energy; the assumption of 100% efficient energy transfer is not valid in reality.',
    keyConcepts: ['friction / air resistance', 'energy lost as heat or sound', 'not 100% efficient', 'energy dissipation'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost', 'inefficient', 'drag'],
    feedbackHit: 'Correct — real-world energy losses mean KE will be less than calculated.',
    feedbackMiss: 'In the real world, frictional forces and air resistance convert some kinetic energy into heat and sound. The calculation assumes all PE converts to KE, which is only true in an ideal (frictionless) system.',
  },

  // ── Q2: Anti-static eliminator & Radioactivity ───────────────────

  'q2_a': {
    marks: 2,
    exemplar: 'Alpha particles have a very short range in air (only a few centimetres) because they are strongly ionising and lose their energy quickly. Therefore the bar must be mounted close to the film so the alpha particles can still reach and ionise the air just above the charged film.\nAward 1 mark for "alpha particles have a short range / low penetration in air"; 1 mark for linking this to the need to be close.',
    keyConcepts: ['alpha short range in air', 'few centimetres', 'must be close to ionise the air', 'low penetration'],
    keywords: ['range', 'short', 'few centimetres', 'cm', 'air', 'close', 'penetration', 'absorbed', 'ionise'],
    feedbackHit: 'Correct — alpha particles only travel a few cm in air, so the bar must be close to the film.',
    feedbackMiss: 'Alpha particles have a very short range in air (a few cm) and are easily absorbed. The bar must sit close to the film so the alpha particles can still reach and ionise the air above the charged surface.',
  },

  'q2_b': {
    marks: 2,
    exemplar: 'Any TWO of: (1) alpha particles have a high ionising power; (2) alpha particles consist of 2 protons and 2 neutrons (helium-4 nucleus); (3) alpha particles have a low penetrating power / stopped by a few cm of air or a sheet of paper; (4) alpha particles carry a +2 charge / positively charged; (5) alpha particles are deflected by electric and magnetic fields; (6) alpha particles have a short range in air (a few cm).',
    keyConcepts: ['high ionising power', 'helium nucleus 2 protons 2 neutrons', 'low penetrating power', 'positively charged +2', 'short range in air', 'deflected by fields'],
    keywords: ['ionise', 'ionising', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range', 'electric', 'magnetic', 'paper'],
    feedbackHit: 'Two valid properties of alpha particles identified.',
    feedbackMiss: 'Properties of alpha particles include: high ionising power; composed of 2 protons + 2 neutrons (helium nucleus); low penetrating power (stopped by paper or a few cm of air); positively charged (+2); short range in air; deflected by electric/magnetic fields.',
  },

  'q2_c': { type: 'mcq', correct: 0 }, // A — ²¹⁰Po → ²⁰⁶Pb + ⁴α (correct alpha decay)

  'q2_d': {
    marks: 2,
    exemplar: 'Answer: C (²¹⁰₈₂Pb).\nJustification: Isotopes of the same element must have the same proton number (atomic number). Polonium-210 has a proton number of 84. Option C shows a proton number of 82, which is not 84. Therefore it is not an isotope of polonium — it is a different element (lead-210). Award 1 mark for selecting C; 1 mark for justification referencing proton/atomic number.',
    keyConcepts: ['isotopes same proton number', 'proton number 84 for polonium', 'C has proton number 82', 'different element not isotope'],
    keywords: ['proton', 'atomic number', '84', '82', 'same', 'different element', 'isotope', 'C', 'option C', 'lead'],
    feedbackHit: 'Correct — C has a different proton number (82, not 84) so it cannot be an isotope of polonium.',
    feedbackMiss: 'Isotopes of an element always have the same proton number (atomic number). Polonium has proton number 84. Option C (²¹⁰₈₂Pb) shows proton number 82, which is lead — a different element. It cannot be an isotope of polonium.',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'Half-life ≈ 138 days (accept 130–145 days). Read from the graph where the number of nuclei = 5000 (half of 10 000); read off the corresponding time.',
    keyConcepts: ['half-life from graph', '5000 nuclei = half of 10000', 'read x-axis at half the starting value', '138 days'],
    keywords: ['138', '130', '145', '5000', 'half', 'graph', 'read', 'days', 'x-axis'],
    feedbackHit: 'Correct — the half-life is approximately 138 days, read from where the curve crosses 5 000 nuclei.',
    feedbackMiss: 'To find the half-life: start at 10 000 nuclei, find 5 000 (half) on the y-axis, draw a horizontal line to the curve, then read down to the x-axis. The half-life is approximately 138 days.',
  },

  'q2_f': {
    marks: 1,
    exemplar: '10 000 → 5 000 → 2 500 → 1 250 → 625 requires 4 half-lives.\nTime = 4 × 138 = 552 days (accept 520–580 based on their half-life from part e).',
    keyConcepts: ['4 half-lives to reach 625', 'time = 4 × half-life', '552 days', 'halving sequence'],
    keywords: ['4', '552', '520', '580', 'four', 'half-lives', 'multiply', 'halve', '625'],
    feedbackHit: 'Correct — it takes 4 half-lives for 10 000 nuclei to reduce to 625.',
    feedbackMiss: '10 000 → 5 000 (×1) → 2 500 (×2) → 1 250 (×3) → 625 (×4 half-lives). Time = 4 × 138 ≈ 552 days.',
  },

  'q2_g': {
    marks: 3,
    exemplar: 'Normal mechanism: Alpha particles strongly ionise the air, producing many positive and negative ions; these ions are attracted to the static charge on the film and neutralise it.\nBeta/gamma problem: Beta and gamma radiation have much lower ionising power than alpha radiation (gamma has almost none in air). They would not create enough ions in the air to neutralise the static charge, so the charge would remain on the film and the bar would not work. Award marks: 1 mark for describing the normal ionisation mechanism; 1 mark for beta/gamma having lower ionising power; 1 mark for the logical consequence that the charge is not removed.',
    keyConcepts: ['alpha strongly ionises air', 'ions neutralise the static charge', 'beta/gamma much lower ionising power', 'insufficient ionisation', 'charge not removed'],
    keywords: ['ionise', 'ions', 'neutralise', 'charge', 'film', 'beta', 'gamma', 'penetrating', 'ionising power', 'static'],
    feedbackHit: 'Good explanation of the ionisation mechanism and why beta/gamma would not work.',
    feedbackMiss: 'In an anti-static bar, alpha particles strongly ionise the air; these ions neutralise the static charge on the film. Beta and gamma radiation have much lower ionising power, so they would not create enough ions to neutralise the charge — the bar would not work.',
  },

  // ── Q3: Conducting-putty Resistance Investigation ────────────────

  'q3_a': {
    marks: 2,
    exemplar: 'If the length of the putty rod increases, then the resistance will increase, because the electrons have to travel a greater distance through the putty and undergo more collisions, increasing the opposition to current flow.\nAward 1 mark for stating direction (length↑ → resistance↑); 1 mark for a valid scientific reason.',
    keyConcepts: ['longer rod → higher resistance', 'electrons travel further', 'more collisions', 'more opposition to current'],
    keywords: ['length', 'resistance', 'increase', 'longer', 'electrons', 'distance', 'collisions', 'flow', 'because'],
    feedbackHit: 'Good hypothesis — correct direction and scientific reasoning.',
    feedbackMiss: 'If length increases, resistance increases. Reason: a longer rod means electrons travel further and collide more, increasing the opposition to current (resistance).',
  },

  'q3_b': {
    marks: 3,
    exemplar: 'The student should select 5 rods of Material P only, with 5 different lengths (4, 8, 12, 16, 20 cm).\nAward: 1 mark for selecting only one material (Material P); 1 mark for selecting 5 different lengths; 1 mark for explaining that material and diameter must be controlled (only length varies). Accept Material Q only if justified, but Q has only two lengths so gives fewer data points.',
    keyConcepts: ['one material only', 'five different lengths', 'material controlled', 'diameter controlled', 'only length varies'],
    keywords: ['material P', 'one material', 'same material', '5 lengths', 'different lengths', 'controlled', 'diameter', 'constant', 'only length'],
    feedbackHit: 'Correct selection — using one material with varying lengths is a valid controlled experiment.',
    feedbackMiss: 'Select rods of only ONE material (e.g. Material P) in 5 different lengths. This controls the material and diameter, so only the length varies. Using multiple materials would introduce another variable and make results unreliable.',
  },

  'q3_c': {
    marks: 2,
    exemplar: 'Only one material should be used because different materials have different resistivities. If more than one material were tested, it would be impossible to determine whether resistance changes were due to length or material type. Using different lengths tests the research question directly. Diameter should also be kept constant because resistance depends on cross-sectional area as well as length.\nAward 1 mark for justifying single material (control variable); 1 mark for justifying variable lengths (tests RQ).',
    keyConcepts: ['one material controls resistivity variable', 'different materials confound results', 'different lengths to test RQ', 'diameter controlled'],
    keywords: ['resistivity', 'material', 'same material', 'confound', 'fair test', 'length varies', 'diameter constant', 'control', 'justify'],
    feedbackHit: 'Good justification — controlling material ensures only length causes changes in resistance.',
    feedbackMiss: 'Only one material: different materials have different resistivities — using multiple materials would mean resistance changes could be due to material, not length. Different lengths: this is the independent variable being tested. Diameter must be controlled: resistance also depends on cross-sectional area.',
  },

  'q3_d': {
    marks: 4,
    exemplar: 'A table with correct headings "Length / cm" and "Resistance / Ω" (with units in heading, not data cells). Data presented in order: (4, 8), (8, 17), (12, 24), (16, 33), (20, 40).\nAward: 1 mark for both correct column headings with units; 1 mark for all 5 length values correct; 1 mark for all 5 resistance values correct; 1 mark for data presented in logical order (ascending length).',
    keyConcepts: ['column headings with units', 'Length / cm', 'Resistance / Ω', 'data in ascending order', 'all 5 data pairs'],
    keywords: ['length', 'resistance', 'cm', 'ohm', 'Ω', '4', '8', '12', '16', '20', '17', '24', '33', '40', 'heading', 'unit'],
    feedbackHit: 'Well-organised data table with correct headings, units, and ordered data.',
    feedbackMiss: 'Table should have headings "Length / cm" and "Resistance / Ω". Data: (4, 8), (8, 17), (12, 24), (16, 33), (20, 40). Order the rows by increasing length.',
  },

  'q3_e': {
    marks: 2,
    exemplar: 'Carrying out more trials (repeats) for each length allows a mean (average) resistance to be calculated. This reduces the effect of random errors and increases the reliability of the results, making conclusions more valid.\nAward 1 mark for mean/average; 1 mark for reliability or reducing random error.',
    keyConcepts: ['calculate a mean/average', 'reduce random errors', 'increase reliability', 'more valid conclusions'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid', 'anomaly', 'anomalous'],
    feedbackHit: 'Correct — more trials allow mean values and reduce the impact of random errors.',
    feedbackMiss: 'More trials allow a mean (average) to be calculated for each length. This reduces the effect of random errors and makes the results more reliable.',
  },

  'q3_f': { type: 'mcq', correct: 2 }, // C — rising straight line through data (length ∝ resistance)

  'q3_g': {
    marks: 3,
    exemplar: 'Research question: How does the diameter of the rod affect its resistance? (OR: How does the type of material affect the resistance of the rod?)\nIndependent variable: diameter of the rod (OR: material type)\nControl variable: length of the rod; material type (OR: length, diameter) — must be consistent with RQ.\nAward 1 mark for valid RQ; 1 mark for IV consistent with RQ; 1 mark for valid CV consistent with RQ.',
    keyConcepts: ['research question about new IV', 'IV consistent with RQ', 'CV consistent with RQ and different from IV'],
    keywords: ['diameter', 'material', 'research question', 'how does', 'affect', 'independent', 'control', 'consistent', 'length'],
    feedbackHit: 'Valid research question, consistent IV and CV.',
    feedbackMiss: 'Example: RQ = "How does the diameter of the rod affect its resistance?" IV = diameter, CV = length and material (kept constant). OR: RQ = "How does the material type affect resistance?" IV = material, CV = length and diameter.',
  },

  // ── Q4: Thermistor Investigation Design ──────────────────────────

  'q4_a': {
    marks: 1,
    exemplar: 'How does the temperature of the water around the thermistor affect the resistance of the thermistor? (Accept variations that clearly state the IV = temperature and DV = resistance.)',
    keyConcepts: ['temperature as IV', 'resistance as DV', 'clear research question format'],
    keywords: ['temperature', 'resistance', 'thermistor', 'how does', 'affect', 'water', 'relationship'],
    feedbackHit: 'Correct research question with clear IV and DV.',
    feedbackMiss: 'The research question should state the independent variable (temperature of the water) and the dependent variable (resistance of the thermistor). Example: "How does the temperature of the water affect the resistance of the thermistor?"',
  },

  'q4_b': {
    marks: 13,
    exemplar: 'A 13-mark holistic investigation design. Top-band response (11–13 marks) includes: clearly stated IV (water temperature) and DV (resistance); TWO control variables each with justification (e.g. the same thermistor — different thermistors have different resistance characteristics; depth/position of the thermistor in the water — affects the temperature it experiences); full equipment list (thermistor, ohmmeter/multimeter, beaker of water, hotplate, thermometer, connecting wires, stirrer); detailed step-by-step method (place thermistor and thermometer in water, heat to a set temperature, stir, record resistance when steady, repeat at a range of temperatures); sufficient data (range e.g. 20–80 °C, minimum 6–8 temperatures, 3 repeats per temperature to calculate a mean); acknowledgement of uncertainty/error. Mid-band (7–10): most elements present but lacking detail in 1–2 areas. Lower-band (1–6): basic description present but missing key elements.',
    keyConcepts: ['IV = temperature, DV = resistance', 'two control variables with justification', 'equipment list', 'detailed method', 'range and repeats', 'sufficient data collection'],
    keywords: ['temperature', 'resistance', 'control', 'thermistor', 'ohmmeter', 'thermometer', 'hotplate', 'method', 'range', 'repeat', 'mean', 'justif', 'independent', 'dependent', 'step'],
    feedbackHit: 'Well-designed investigation with variables, method, equipment, and sufficient data plan.',
    feedbackMiss: 'A complete design should include: IV = water temperature, DV = resistance (ohmmeter). Control variables (justify each): same thermistor, same depth in water. Equipment: thermistor, ohmmeter, beaker, hotplate, thermometer. Method: heat water to set temperatures (e.g. 20–80 °C, every 10 °C), record resistance at each, repeat 3 times and calculate a mean.',
  },

  // ── Q5: Filament Lamp Resistance vs Current ──────────────────────

  'q5_a': {
    marks: 1,
    exemplar: '0.15 A (accept 0.14–0.16 A). The needle points between the 0.1 and 0.2 graduations, halfway towards 0.2.',
    keyConcepts: ['read ammeter correctly', '0.15 A', 'between 0.1 and 0.2 marks'],
    keywords: ['0.15', '0.14', '0.16', 'A', 'amp', 'ammeter', 'current', 'read'],
    feedbackHit: 'Correct ammeter reading.',
    feedbackMiss: 'The needle sits between the 0.1 and 0.2 graduations. Read it carefully — the reading is approximately 0.15 A.',
  },

  'q5_b': {
    marks: 3,
    exemplar: 'Circuit: variable power supply connected in series with a filament lamp and an ammeter. A voltmeter is connected in parallel across the lamp. Award: 1 mark for ammeter in series; 1 mark for voltmeter in parallel across the lamp; 1 mark for complete circuit with power supply and lamp correctly shown.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'power supply in series', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'supply', 'power supply', 'lamp', 'circuit'],
    feedbackHit: 'Correct circuit description with ammeter in series and voltmeter in parallel.',
    feedbackMiss: 'Circuit: power supply → ammeter (in series) → lamp → back to supply. Voltmeter connected in parallel across just the lamp (not the whole circuit).',
  },

  'q5_c': {
    marks: 3,
    exemplar: 'Independent variable (IV): Current in the lamp.\nDependent variable (DV): Resistance of the lamp.\nControl variables (CV): Length of the filament; Material of the filament; Type of ammeter used.\nAward: 1 mark for correct IV; 1 mark for correct DV; 1 mark for any two correct CVs.',
    keyConcepts: ['IV = current', 'DV = resistance', 'CV = filament length, filament material, ammeter type'],
    keywords: ['independent', 'current', 'dependent', 'resistance', 'control', 'length', 'material', 'ammeter'],
    feedbackHit: 'Correct variable identification — current (IV), resistance (DV), filament length/material/ammeter type (CV).',
    feedbackMiss: 'IV = current in the lamp (what you change). DV = resistance of the lamp (what you calculate). CV = length and material of the filament, and the type of ammeter (all kept constant).',
  },

  'q5_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the lamp/filament becomes hot and could cause burns; electrical hazards (shock from the live circuit); do not touch the lamp while it is lit; ensure wire insulation is intact; avoid short circuits / high currents.',
    keyConcepts: ['burn hazard from hot lamp', 'electrical shock hazard', 'high current risk'],
    keywords: ['burn', 'burns', 'hot', 'lamp', 'filament', 'electric shock', 'electrical', 'hazard', 'insulation'],
    feedbackHit: 'Valid safety concern identified.',
    feedbackMiss: 'Safety issues include: burns from the hot lamp/filament; electrical shock from the live circuit. Precautions: do not touch the lamp while lit; check the circuit before switching on.',
  },

  'q5_e': {
    marks: 2,
    exemplar: 'To test direct proportion (constant resistance): check if V/I is constant. From the graph: at I = 0.10 A, V ≈ 1.5 V → V/I = 15; at I = 0.25 A, V ≈ 6.5 V → V/I = 26. The ratios are NOT equal, so V is NOT directly proportional to I and the resistance is NOT constant. The student\'s prediction is not supported — the resistance increases as the current (and temperature) increases.\nAward 1 mark for correct use of data/calculation showing the ratios are not equal; 1 mark for correct conclusion that the prediction is NOT supported.',
    keyConcepts: ['test direct proportion: V/I = constant?', 'ratios are not equal', 'resistance not constant', 'prediction not supported'],
    keywords: ['ratio', 'V/I', 'constant', 'directly proportional', 'not', 'equal', 'calculate', 'two points', '15', '26', 'supported'],
    feedbackHit: 'Correct use of data to test direct proportion and a clear conclusion.',
    feedbackMiss: 'To check direct proportion: if V/I is constant for all points, the resistance is constant. From the graph: at 0.10 A, V ≈ 1.5 → V/I = 15; at 0.25 A, V ≈ 6.5 → V/I = 26. The ratios differ, so V is NOT directly proportional to I — the prediction is not supported and the resistance rises with current.',
  },

  'q5_f': {
    marks: 2,
    exemplar: 'Read voltage at I = 0.20 A from graph ≈ 4.4 V.\nR = V / I = 4.4 / 0.20 = 22 Ω (accept 20–24 Ω depending on graph reading).\nAward 1 mark for correct use of R = V/I; 1 mark for answer in range 20–24 Ω.',
    keyConcepts: ['R = V / I', 'read V at 0.20 A', '22 Ω', 'rearrange Ohm\'s law'],
    keywords: ['R = V/I', '4.4', '0.20', '22', 'resistance', 'ohm', 'Ω', 'formula', 'divide'],
    feedbackHit: 'Correct calculation using R = V/I.',
    feedbackMiss: 'Read the voltage at I = 0.20 A from the graph (≈ 4.4 V). Use R = V/I = 4.4 / 0.20 ≈ 22 Ω.',
  },

  'q5_g': {
    marks: 2,
    exemplar: 'Award 1 mark for plotting the point (0.20 A, their value from 5f) within ±1 small square of the correct position. Award 1 mark for a straight line of best fit that rises and passes close to all data points (resistance increases with current).',
    keyConcepts: ['plot (0.20 A, ~22 Ω)', 'rising straight line of best fit', 'line through data'],
    keywords: ['plot', 'point', '0.20', '22', 'line of best fit', 'straight', 'rising', 'through data'],
    feedbackHit: 'Data point plotted and line of best fit drawn correctly.',
    feedbackMiss: 'Plot the point at (0.20 A, your R from part f). Draw a straight rising line of best fit that passes close to all the data points — resistance increases with current.',
  },

  'q5_h': {
    marks: 1,
    exemplar: 'Extend the line of best fit back to 0 A on the x-axis and read the y-intercept. Accept 8–12 Ω (approximately 10 Ω) — the lamp has a low resistance when cold.',
    keyConcepts: ['extend LOBF to 0 A', 'read y-intercept', '~10 Ω at 0 A (cold resistance)'],
    keywords: ['0', '10', 'extend', 'extrapolate', 'y-intercept', 'line of best fit', 'predict', 'resistance', 'cold'],
    feedbackHit: 'Correct prediction by extending the line of best fit.',
    feedbackMiss: 'Extend the line of best fit to the y-axis (Current = 0 A) and read the resistance. The answer should be approximately 10 Ω (the cold resistance of the filament).',
  },

  'q5_i': {
    marks: 2,
    exemplar: 'Choose two well-separated points on the line of best fit (not data points). Gradient = ΔR / ΔI. Using (0.05, 12) and (0.25, 26): gradient = (26−12)/(0.25−0.05) = 14/0.20 = 70 Ω A⁻¹. Accept 60–80 Ω A⁻¹ (depending on LOBF drawn in 5g). Unit Ω A⁻¹ or Ω/A required.\nAward 1 mark for correct method (two points from LOBF, ΔR/ΔI); 1 mark for answer with correct unit.',
    keyConcepts: ['gradient = ΔR / ΔI', 'two points from LOBF (not data)', 'unit Ω A⁻¹', 'answer 60–80'],
    keywords: ['gradient', 'ΔR', 'ΔI', '70', '60', '80', 'Ω/A', 'slope', 'rise', 'run'],
    feedbackHit: 'Correct gradient calculation with appropriate unit.',
    feedbackMiss: 'Choose two points on your line of best fit (not data points). Gradient = (R₂−R₁)/(I₂−I₁). The unit is Ω A⁻¹. The answer should be approximately 60–80 Ω A⁻¹.',
  },

  'q5_j': {
    marks: 2,
    exemplar: 'The calculation is not valid / not reliable for two reasons: (1) 5 A is far beyond the range of the data (which only goes to ~0.25 A); extrapolating so far beyond the data is unreliable as the relationship may not remain linear. (2) At such a high current the filament would overheat and burn out / melt, so the result is physically meaningless. Award 1 mark per valid comment, up to 2 marks.',
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'filament burns out at high current', 'physically unrealistic'],
    keywords: ['extrapolate', 'beyond', 'range', 'data', 'linear', 'not valid', '5 A', 'melt', 'burn out', 'destroyed', 'unreliable', 'unrealistic'],
    feedbackHit: 'Good critique of the validity of extrapolating far beyond the data range.',
    feedbackMiss: 'The calculation is not valid: (1) 5 A is far beyond the data range (0–0.25 A) — we cannot assume the trend continues. (2) At 5 A the filament would overheat and burn out, so the result is physically meaningless.',
  },

  // ── Q6: Micro-hydro & Clean Energy Access ────────────────────────

  'q6_a': {
    marks: 3,
    exemplar: 'Volume = 8 400 m³. Mass = ρ × V = 1000 × 8 400 = 8.4 × 10⁶ kg.\nW = mgh = 8.4 × 10⁶ × 9.81 × 45 = 3.708... × 10⁹ J ≈ 3.7 × 10⁹ J (2 s.f.).\nAward: 1 mark for mass calculation; 1 mark for W = mgh with correct substitution; 1 mark for 3.7 × 10⁹ J (2 s.f.) with standard form.',
    keyConcepts: ['mass = density × volume', '8.4 × 10⁶ kg', 'W = mgh', '3.7 × 10⁹ J', 'two significant figures standard form'],
    keywords: ['1000', '8400', '8.4', '10⁶', 'W = mgh', '9.81', '45', '3.7', '10⁹', 'joule', 'work', 'mass', 'density'],
    feedbackHit: 'Correct — the work done is approximately 3.7 × 10⁹ J.',
    feedbackMiss: 'Step 1: mass = density × volume = 1000 × 8 400 = 8.4 × 10⁶ kg. Step 2: W = mgh = 8.4 × 10⁶ × 9.81 × 45 = 3.7 × 10⁹ J (2 s.f.).',
  },

  'q6_b': {
    marks: 1,
    exemplar: 'Accept any ONE of: children cannot study after dark, limiting education; no refrigeration to store food or medicines/vaccines; time and money spent collecting firewood or kerosene; no power for clinics, communications or small businesses, limiting economic activity; indoor air pollution from kerosene lamps harms health.',
    keyConcepts: ['no light to study after dark', 'no refrigeration for food or medicine', 'time/cost of fuel', 'no power for clinics or businesses'],
    keywords: ['study', 'education', 'dark', 'refrigeration', 'medicine', 'vaccine', 'fuel', 'kerosene', 'clinic', 'business', 'economic', 'health'],
    feedbackHit: 'Valid barrier to development identified.',
    feedbackMiss: 'Without reliable electricity, children cannot study after dark, food and medicines cannot be refrigerated, and clinics and businesses cannot run equipment. This is a significant barrier to development.',
  },

  'q6_c': {
    marks: 9,
    exemplar: 'A 9-mark holistic response. Top-band (8–9): Health/quality-of-life benefits (3 marks) — lighting lets children study and adults work in the evening; refrigeration stores food and vaccines safely; clinics can run equipment and lighting; replacing kerosene lamps removes indoor air pollution and fire risk; renewable so no fuel cost or CO₂. Ethical analysis of monthly fee (4 marks) — Advantage: fee funds spare parts and a trained local technician so the system stays working long-term; encourages community ownership; sustainable model. Disadvantage: excludes the poorest who cannot pay; contradicts the UN goal of universal access; ethical issue of charging for a basic service. Concluding appraisal (2 marks) — balanced, evidence-based conclusion on long-term sustainability, e.g. "The charity should install the scheme AND set up a maintenance fund and local training — a small fee may be justified if it keeps the system running, but reduced rates should be available for the poorest households."',
    keyConcepts: ['health/quality-of-life benefits of electricity', 'study/refrigeration/clinics', 'ethical advantage of fee (maintenance)', 'ethical disadvantage of fee (excludes poor)', 'concluding appraisal with justification'],
    keywords: ['light', 'study', 'refrigeration', 'clinic', 'kerosene', 'pollution', 'fee', 'maintain', 'technician', 'sustain', 'ethical', 'disadvantage', 'poor', 'access', 'conclude', 'long-term', 'UN', 'universal'],
    feedbackHit: 'Well-structured discussion covering benefits, ethics of the fee, and a justified conclusion.',
    feedbackMiss: 'A top-band response includes: (1) Benefits — lighting for study, refrigeration for food/vaccines, power for clinics, removal of kerosene smoke. (2) Ethical analysis of charging — advantage: funds maintenance and a local technician; disadvantage: excludes the poorest, conflicts with universal access. (3) Conclusion — balanced, e.g. install the scheme with a maintenance fund; a small fee may be justified IF there are reduced rates for the poorest.',
  },

  // ── Q7: Solar Cooking & Infrared Radiation ───────────────────────

  'q7_a': { type: 'mcq', correct: 2 }, // '3' (index 2 in ['1','2','3','4']) — IR is between microwave and visible

  'q7_b': {
    marks: 1,
    exemplar: 'Infrared waves are strongly absorbed by dark surfaces and transfer thermal (heat) energy, which raises the temperature of the pot and the food/water inside. Accept: "infrared is absorbed by the dark pot and heats it" or "IR carries heat / thermal energy".',
    keyConcepts: ['infrared absorbed by dark surfaces', 'transfers thermal/heat energy', 'heats the pot and contents'],
    keywords: ['absorb', 'absorbed', 'dark', 'heat', 'thermal', 'energy', 'infrared', 'temperature', 'warm'],
    feedbackHit: 'Correct — infrared is absorbed by dark surfaces and transfers heat energy to the food and water.',
    feedbackMiss: 'Infrared waves are strongly absorbed by dark surfaces and transfer thermal (heat) energy. The dark pot absorbs the focused infrared, heating the food or water inside.',
  },

  'q7_c': {
    marks: 11,
    exemplar: 'An 11-mark holistic response. Top-band (10–11): Climate suitability (3 marks) — countries near the equator have reliable, strong, direct sunshine for several hours a day, ideal for solar cooking; works well in equatorial LEDCs (sub-Saharan Africa, parts of South Asia, Central America); less suitable in cloudy, monsoon or high-latitude regions where strong sunshine is not guaranteed. Health impact (2 marks) — replaces smoky firewood/charcoal fires, reducing indoor air pollution and respiratory disease; pasteurising water kills harmful microbes (cholera, typhoid), reducing waterborne disease and mortality, especially in children. Challenges of implementing solar cookers (4 marks) — only works in daylight and bright sunshine (no cooking at night or in cloud); cooking is slow; cost and availability of the cooker; people must change long-standing cooking habits and may distrust the method; only small quantities can be cooked at once; reflectors can be damaged. Concluding appraisal (2 marks) — balanced, evidence-based verdict, e.g. "Solar cookers are a suitable low-cost, clean option for sunny equatorial LEDCs where fuel is scarce, but they have real limitations in cloudy regions and cannot fully replace other cooking methods, so they work best as a complement rather than a complete solution."',
    keyConcepts: ['climate near equator suitable', 'cloudy regions less suitable', 'reduces indoor smoke and waterborne disease', 'health improvement', 'requires strong sunshine', 'challenges: daylight only, slow, cost, habits', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'sunshine', 'cloud', 'health', 'smoke', 'pollution', 'disease', 'pasteurise', 'firewood', 'challenge', 'implement', 'daylight', 'slow', 'habit', 'conclude', 'suitable', 'limitation'],
    feedbackHit: 'Well-structured evaluation covering climate, health, challenges, and a reasoned conclusion.',
    feedbackMiss: 'Top-band response includes: (1) Climate — works well near the equator with strong sun; less effective in cloudy/high-latitude regions. (2) Health — removes firewood smoke (respiratory disease) and pasteurises water (waterborne disease). (3) Challenges — daylight/sunshine only, slow cooking, cost, changing habits. (4) Conclusion — suitable for sunny LEDCs where fuel is scarce, but limited elsewhere; best as a complement, not a complete solution.',
  },
}
