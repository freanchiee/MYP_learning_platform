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

  // ── Q1: Pendulum (Japan, L=60.0 cm, 10T=15.5s) & Wrecking Ball (1500 kg, Δh=10.0 m)

  'q1_a': { type: 'mcq', correct: 2 } as MCQEntry,

  'q1_b': {
    marks: 2,
    exemplar: 'Position A (top left): KE = minimum, PE = maximum, Speed = minimum.\nPosition B (bottom): KE = maximum, PE = minimum, Speed = maximum.\nPosition C (top right): KE = minimum, PE = maximum, Speed = minimum.\nAward 1 mark for correct A/C description; 1 mark for correct B description.',
    keyConcepts: ['KE maximum at bottom', 'PE maximum at top', 'speed maximum at lowest point', 'energy conservation pendulum'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'position B', 'bottom', 'speed', 'energy'],
    feedbackHit: 'Correct — energy transfers between kinetic and potential as the pendulum swings.',
    feedbackMiss: 'At position B (bottom): KE is maximum, PE is minimum, speed is maximum. At A and C (top): KE is minimum, PE is maximum, speed is minimum.',
  } as MSEntry,

  'q1_c': {
    marks: 3,
    exemplar: 'T = 15.5 / 10 = 1.55 s.\nRearrange T² = 4π²L/g → g = 4π²L / T².\ng = 4 × π² × 0.600 / (1.55)² = 23.687 / 2.4025 = 9.860 m s⁻² ≈ 9.86 m s⁻² (3 s.f.).\nAward: 1 mark for T = 1.55 s; 1 mark for correct rearrangement and substitution; 1 mark for answer 9.86 m s⁻² (accept 9.85–9.87, must be 3 s.f.).',
    keyConcepts: ['T = total time / number of periods', 'rearrange T² = 4π²L/g', 'g = 4π²L/T²', '9.86 m s⁻²', 'three significant figures'],
    keywords: ['1.55', '9.86', '9.85', '9.87', 'period', 'rearrange', '4π²', 'divide', 'three'],
    feedbackHit: 'Correct calculation of g. Well done for showing all steps.',
    feedbackMiss: 'Step 1: T = 15.5/10 = 1.55 s. Step 2: Rearrange T² = 4π²L/g → g = 4π²L/T². Step 3: g = 4π² × 0.600 / (1.55)² ≈ 9.86 m s⁻².',
  } as MSEntry,

  'q1_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the laboratory is not at sea level (altitude affects g); uncertainty/error in measuring the length L of the pendulum; uncertainty/error in measuring the time T (reaction time, parallax); air resistance effects; pendulum not swinging in a perfect arc.',
    keyConcepts: ['altitude or location affects g', 'measurement uncertainty in L', 'timing uncertainty', 'experimental error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time', 'reaction time', 'parallax'],
    feedbackHit: 'Correct — a valid reason for experimental deviation from expected g was identified.',
    feedbackMiss: 'Possible reasons: the lab is at a different altitude (g varies with height); small errors in measuring L or T (timing reaction time, parallax errors) lead to a different calculated g.',
  } as MSEntry,

  'q1_e': {
    marks: 4,
    exemplar: 'Height change: Δh = 14.0 − 4.0 = 10.0 m.\nKE gained = loss in PE = mgh = 1500 × 9.81 × 10.0 = 147 150 J.\nKE = 147 kJ ≈ 150 kJ (2 s.f.).\nAward: 1 mark for Δh = 10.0 m; 1 mark for KE = mgh; 1 mark for correct substitution; 1 mark for 150 kJ (2 s.f.). Accept 147 kJ for 3 marks if 2 s.f. rounding absent.',
    keyConcepts: ['Δh = 14.0 − 4.0 = 10.0 m', 'KE = mgh', 'conservation of energy', '147 kJ or 150 kJ', 'two significant figures'],
    keywords: ['10.0', '10 m', '1500', '9.81', '147150', '147', '150', 'kJ', 'height', 'mgh', 'kinetic', 'potential'],
    feedbackHit: 'Correct — the kinetic energy at impact is approximately 150 kJ (2 s.f.).',
    feedbackMiss: 'Use conservation of energy: KE gained = PE lost = mgh. Δh = 14.0 − 4.0 = 10.0 m. KE = 1500 × 9.81 × 10.0 = 147 150 J ≈ 150 kJ (2 s.f.).',
  } as MSEntry,

  'q1_f': {
    marks: 1,
    exemplar: 'Accept any ONE of: frictional forces / air resistance / sound energy converts some kinetic energy to heat/thermal energy; the assumption of 100% efficient energy transfer is not valid in reality.',
    keyConcepts: ['friction / air resistance', 'energy lost as heat or sound', 'not 100% efficient', 'energy dissipation'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost', 'inefficient', 'drag'],
    feedbackHit: 'Correct — real-world energy losses mean KE will be less than calculated.',
    feedbackMiss: 'Frictional forces and air resistance convert some kinetic energy into heat and sound. The calculation assumes all PE converts to KE, which is only true in an ideal (frictionless) system.',
  } as MSEntry,

  // ── Q2: Smoke Detectors (same structure and graph as source)

  'q2_a': {
    marks: 2,
    exemplar: 'Hot air/smoke rises because it is less dense than cooler surrounding air. Therefore smoke rises to the ceiling, where the detector is positioned to be triggered.\nAward 1 mark for "smoke/hot air rises"; 1 mark for reason linked to density.',
    keyConcepts: ['smoke rises', 'less dense than cool air', 'convection', 'ceiling position maximises detection'],
    keywords: ['rises', 'ceiling', 'dense', 'density', 'hot air', 'convection', 'upward', 'lighter'],
    feedbackHit: 'Correct — hot smoke is less dense than cool air and rises to the ceiling.',
    feedbackMiss: 'Smoke and hot air are less dense than cooler air, so they rise. Installing the detector on the ceiling means it is in the path of rising smoke.',
  } as MSEntry,

  'q2_b': {
    marks: 2,
    exemplar: 'Any TWO of: (1) alpha particles have a high ionizing power; (2) alpha particles consist of 2 protons and 2 neutrons (helium-4 nucleus); (3) alpha particles have a low penetrating power / stopped by a few cm of air or a sheet of paper; (4) alpha particles carry a +2 charge / positively charged; (5) alpha particles have a short range in air (a few cm).',
    keyConcepts: ['high ionizing power', 'helium nucleus 2 protons 2 neutrons', 'low penetrating power', 'positively charged +2', 'short range in air'],
    keywords: ['ionize', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range', 'paper'],
    feedbackHit: 'Two valid properties of alpha particles identified.',
    feedbackMiss: 'Properties of alpha particles: high ionizing power; helium nucleus (2 protons + 2 neutrons); low penetrating power (stopped by paper); positively charged (+2); short range in air.',
  } as MSEntry,

  'q2_c': { type: 'mcq', correct: 0 } as MCQEntry,

  'q2_d': {
    marks: 2,
    exemplar: 'Answer: B (²⁴⁰₉₃Am).\nJustification: Isotopes of the same element must have the same proton number (atomic number). Americium-241 has a proton number of 95. Option B shows a proton number of 93, which is not 95. Therefore it is not an isotope of americium — it is neptunium-240.',
    keyConcepts: ['isotopes same proton number', 'proton number 95 for americium', 'B has proton number 93', 'different element not isotope'],
    keywords: ['proton', 'atomic number', '95', '93', 'same', 'different element', 'isotope', 'B', 'option B'],
    feedbackHit: 'Correct — B has a different proton number (93, not 95) so it cannot be an isotope of americium.',
    feedbackMiss: 'Isotopes of an element always have the same proton number. Americium has proton number 95. Option B (²⁴⁰₉₃Am) shows proton number 93 — that is neptunium, a different element.',
  } as MSEntry,

  'q2_e': {
    marks: 1,
    exemplar: 'Half-life ≈ 420 years (accept 410–430 years). Read from the graph where the number of nuclei = 5000 (half of 10 000); read off the corresponding time.',
    keyConcepts: ['half-life from graph', '5000 nuclei = half of 10000', 'read x-axis at half the starting value', '420 years'],
    keywords: ['420', '410', '430', '5000', 'half', 'graph', 'read', 'years', 'x-axis'],
    feedbackHit: 'Correct — the half-life is approximately 420 years.',
    feedbackMiss: 'To find the half-life: start at 10 000 nuclei, find 5 000 on the y-axis, draw a horizontal line to the curve, then read down to the x-axis. Half-life ≈ 420 years.',
  } as MSEntry,

  'q2_f': {
    marks: 1,
    exemplar: '10 000 → 5 000 → 2 500 → 1 250 → 625 requires 4 half-lives.\nTime = 4 × 420 = 1680 years (accept 1640–1720 based on their half-life from part e).',
    keyConcepts: ['4 half-lives to reach 625', 'time = 4 × half-life', '1680 years', 'halving sequence'],
    keywords: ['4', '1680', '1640', '1720', 'four', 'half-lives', 'multiply', 'halve', '625'],
    feedbackHit: 'Correct — it takes 4 half-lives for 10 000 nuclei to reduce to 625.',
    feedbackMiss: '10 000 → 5 000 (×1) → 2 500 (×2) → 1 250 (×3) → 625 (×4 half-lives). Time = 4 × 420 ≈ 1680 years.',
  } as MSEntry,

  'q2_g': {
    marks: 3,
    exemplar: 'Normal mechanism: Alpha particles ionize air molecules between two plates, producing a continuous current; when smoke enters it absorbs ions and reduces the current, triggering the alarm.\nBeta/gamma problem: Beta and gamma radiation have much lower ionizing power. They would not create sufficient ions to maintain the current, so the alarm would always be triggered or never respond to smoke.',
    keyConcepts: ['alpha ionizes air to create current', 'smoke reduces current triggering alarm', 'beta/gamma much lower ionizing power', 'insufficient ionization', 'alarm always on or always off'],
    keywords: ['ionize', 'ions', 'current', 'plates', 'smoke', 'absorbs', 'beta', 'gamma', 'ionizing power', 'alarm', 'trigger'],
    feedbackHit: 'Good explanation of the ionization mechanism and why beta/gamma would not work.',
    feedbackMiss: 'Alpha particles ionize air between two plates, maintaining a small current. Smoke reduces the current, triggering the alarm. Beta and gamma have much lower ionizing power — insufficient ions means the detector would not function.',
  } as MSEntry,

  // ── Q3: Resistance Investigation (clay rods, d=10/15/18/22/25 mm, R=82/36/22/16/12 Ω)

  'q3_a': {
    marks: 2,
    exemplar: 'If the diameter of the cylinder increases, then the resistance will decrease, because a larger diameter provides more cross-sectional area for electrons to flow through (more parallel paths), reducing opposition to current flow.',
    keyConcepts: ['larger diameter → lower resistance', 'more cross-sectional area', 'more paths for electrons', 'less opposition to current'],
    keywords: ['diameter', 'resistance', 'decrease', 'cross-section', 'area', 'electrons', 'paths', 'flow', 'because'],
    feedbackHit: 'Good hypothesis — correct direction and scientific reasoning.',
    feedbackMiss: 'If diameter increases, resistance decreases. Reason: a wider cylinder has more cross-sectional area, providing more parallel paths for electron flow.',
  } as MSEntry,

  'q3_b': {
    marks: 3,
    exemplar: 'The student should select 5 cylinders of the same material only, with 5 different diameters.\nAward: 1 mark for selecting only one material; 1 mark for selecting 5 different diameters; 1 mark for explaining that material and length must be controlled.',
    keyConcepts: ['one material only', 'five different diameters', 'material controlled', 'length controlled'],
    keywords: ['one material', 'same material', '5 diameters', 'different diameters', 'controlled', 'length', 'constant'],
    feedbackHit: 'Correct selection — one material with varying diameters.',
    feedbackMiss: 'Select cylinders of only ONE material in 5 different diameters. This controls material and length, so only diameter varies.',
  } as MSEntry,

  'q3_c': {
    marks: 2,
    exemplar: 'Only one material should be used because different materials have different resistivities. If more than one material were tested, it would be impossible to determine whether resistance changes were due to diameter or material type. Different diameters test the research question directly. Length must also be kept constant because resistance depends on length.',
    keyConcepts: ['one material controls resistivity variable', 'different materials confound results', 'different diameters to test RQ', 'length controlled'],
    keywords: ['resistivity', 'material', 'confound', 'fair test', 'diameter varies', 'length constant', 'control'],
    feedbackHit: 'Good justification — controlling material ensures only diameter causes changes.',
    feedbackMiss: 'One material: different materials have different resistivities — mixing materials means resistance changes could be due to material, not diameter. Different diameters: this is the IV being tested.',
  } as MSEntry,

  'q3_d': {
    marks: 4,
    exemplar: 'A table with correct headings "Diameter / mm" and "Resistance / Ω". Data in ascending order: (10, 82), (15, 36), (18, 22), (22, 16), (25, 12).\nAward: 1 mark for both column headings with units; 1 mark for all 5 diameter values; 1 mark for all 5 resistance values; 1 mark for ascending diameter order.',
    keyConcepts: ['column headings with units', 'Diameter / mm', 'Resistance / Ω', 'data in ascending order'],
    keywords: ['diameter', 'resistance', 'mm', 'Ω', '10', '82', '15', '36', '18', '22', '25', '12', 'heading', 'unit'],
    feedbackHit: 'Well-organised data table with correct headings, units, and ordered data.',
    feedbackMiss: 'Table headings: "Diameter / mm" and "Resistance / Ω". Data (10, 82), (15, 36), (18, 22), (22, 16), (25, 12). Order rows by increasing diameter.',
  } as MSEntry,

  'q3_e': {
    marks: 2,
    exemplar: 'Carrying out more trials (repeats) for each diameter allows a mean (average) resistance to be calculated. This reduces the effect of random errors and increases the reliability of the results.',
    keyConcepts: ['calculate a mean/average', 'reduce random errors', 'increase reliability'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid'],
    feedbackHit: 'Correct — more trials allow mean values and reduce the impact of random errors.',
    feedbackMiss: 'More trials allow a mean (average) to be calculated for each diameter. This reduces random errors and makes results more reliable.',
  } as MSEntry,

  'q3_f': { type: 'mcq', correct: 3 } as MCQEntry,

  'q3_g': {
    marks: 3,
    exemplar: 'Research question: How does the length of the cylinder affect its resistance? IV: length of the cylinder. CV: diameter of the cylinder; material type. Award 1 mark per element, consistent with RQ.',
    keyConcepts: ['research question about new IV', 'IV consistent with RQ', 'CV consistent with RQ'],
    keywords: ['length', 'material', 'research question', 'how does', 'affect', 'independent', 'control', 'diameter'],
    feedbackHit: 'Valid research question, consistent IV and CV.',
    feedbackMiss: 'Example: RQ = "How does the length of the cylinder affect its resistance?" IV = length, CV = diameter and material.',
  } as MSEntry,

  // ── Q4: Thermistor Investigation Design

  'q4_a': {
    marks: 1,
    exemplar: 'How does the temperature of a thermistor affect the resistance of the thermistor? (Accept variations with IV = temperature and DV = resistance.)',
    keyConcepts: ['temperature as IV', 'resistance as DV', 'clear research question format'],
    keywords: ['temperature', 'resistance', 'thermistor', 'how does', 'affect', 'relationship'],
    feedbackHit: 'Correct research question with clear IV and DV.',
    feedbackMiss: 'The research question should state: IV = temperature of thermistor, DV = resistance of thermistor.',
  } as MSEntry,

  'q4_b': {
    marks: 13,
    exemplar: 'A 13-mark holistic investigation design. Top-band response (11–13 marks) includes: clearly stated IV (temperature) and DV (resistance); TWO control variables each with justification (e.g. type of thermistor — different thermistors have different resistance characteristics; voltage across the thermistor — changes in voltage affect current and therefore apparent resistance); full equipment list (thermistor, water bath/thermostat, thermometer, ohmmeter/multimeter, connecting wires, safety goggles); detailed step-by-step method (set water bath to a temperature, immerse thermistor, wait for equilibrium, record resistance from ohmmeter, repeat for different temperatures); sufficient data (range 10–90 °C, minimum 8 temperatures, 3 repeats per temperature); acknowledgement of uncertainty/safety (burns from hot water).',
    keyConcepts: ['IV = temperature DV = resistance', 'two control variables with justification', 'equipment list', 'detailed method', 'range and repeats', 'safety'],
    keywords: ['temperature', 'resistance', 'control', 'water bath', 'thermistor', 'ohmmeter', 'method', 'range', 'repeat', 'mean', 'justif', 'independent', 'dependent', 'step', 'equilibrium'],
    feedbackHit: 'Well-designed investigation with variables, method, equipment, sufficient data plan, and safety.',
    feedbackMiss: 'Complete design: IV = temperature, DV = resistance (ohmmeter). Control variables (justify each): thermistor type, supply voltage. Equipment: water bath, thermometer, ohmmeter, thermistor. Method: set temperature, wait for equilibrium, record resistance, repeat for 8+ temperatures (10–90 °C), 3 repeats each.',
  } as MSEntry,

  // ── Q5: Resistance vs Temperature (same data as source — same graph images)

  'q5_a': {
    marks: 1,
    exemplar: '42 °C (accept 41–43 °C). The thermometer zoom shows the mercury between the 40 and 30 markings, closer to 40.',
    keyConcepts: ['read thermometer correctly', '42 °C', 'between 30 and 40 marks'],
    keywords: ['42', '41', '43', '°C', 'thermometer', 'temperature', 'read'],
    feedbackHit: 'Correct thermometer reading.',
    feedbackMiss: 'The thermometer shows the mercury level between 30 and 40. Count the small divisions carefully. The reading is approximately 42 °C.',
  } as MSEntry,

  'q5_b': {
    marks: 3,
    exemplar: 'Circuit: power supply connected in series with a resistor and an ammeter. A voltmeter is connected in parallel across the resistor. Award: 1 mark for ammeter in series; 1 mark for voltmeter in parallel across resistor; 1 mark for complete circuit.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'power supply in series', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'power supply', 'resistor', 'circuit'],
    feedbackHit: 'Correct circuit description.',
    feedbackMiss: 'Ammeter in series with resistor; voltmeter in parallel across resistor only (not the whole circuit).',
  } as MSEntry,

  'q5_c': {
    marks: 3,
    exemplar: 'IV: Temperature of the resistor.\nDV: Current in the circuit.\nCV: Length of the resistor; Diameter of the resistor; Voltage across the resistor.',
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length, diameter, voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
    feedbackHit: 'Correct variable identification.',
    feedbackMiss: 'IV = temperature (what you change). DV = current (what you measure). CV = length, diameter, and voltage (all kept constant).',
  } as MSEntry,

  'q5_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: high temperature beads could cause burns; electrical hazards (shock from live circuit); hot equipment could cause burns; ensure insulation on wires is intact.',
    keyConcepts: ['burn hazard from hot beads', 'electrical shock hazard'],
    keywords: ['burn', 'hot', 'temperature', 'electric shock', 'electrical', 'hazard', 'insulation', 'tongs'],
    feedbackHit: 'Valid safety concern identified.',
    feedbackMiss: 'Safety issues: burns from hot beads; electrical shock from live circuit. Use tongs to handle hot beads; ensure circuit is off before adjusting.',
  } as MSEntry,

  'q5_e': {
    marks: 2,
    exemplar: 'To test inverse proportion: check if I × T = constant. From graph at 20 °C, I ≈ 430 mA → product ≈ 8600; at 80 °C, I ≈ 300 mA → product ≈ 24000. Products are NOT equal, so NOT inversely proportional. The direction (current decreases) is correct, but inverse proportion is not supported.',
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products are not equal', 'current decreases with temperature', 'inverse proportion not supported'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'two points', 'data', 'conclusion'],
    feedbackHit: 'Correct use of data to test inverse proportion.',
    feedbackMiss: 'Check: I × T = constant? At 20 °C: 430 × 20 = 8600; at 100 °C: 285 × 100 = 28500. Not constant → NOT inversely proportional.',
  } as MSEntry,

  'q5_f': {
    marks: 2,
    exemplar: 'Read current at 50 °C from graph ≈ 341 mA = 0.341 A.\nR = V / I = 30 / 0.341 = 87.97 ≈ 88 Ω (accept 84–92 Ω).',
    keyConcepts: ['R = V / I', 'convert mA to A', '30 V constant', '88 Ω at 50 °C'],
    keywords: ['R = V/I', '30', '0.341', '88', 'resistance', 'ohm', 'Ω', 'formula', 'divide'],
    feedbackHit: 'Correct calculation using R = V/I.',
    feedbackMiss: 'Read current at 50 °C (≈341 mA = 0.341 A). R = V/I = 30 / 0.341 ≈ 88 Ω.',
  } as MSEntry,

  'q5_g': {
    marks: 2,
    exemplar: 'Award 1 mark for plotting (50 °C, their value from 5f) within ±1 small square. Award 1 mark for a straight line of best fit through all data points, not forced through origin.',
    keyConcepts: ['plot (50 °C, ~88 Ω)', 'straight line of best fit', 'line not forced through origin'],
    keywords: ['plot', 'point', '50', '88', 'line of best fit', 'straight', 'LOBF'],
    feedbackHit: 'Data point plotted and line of best fit drawn correctly.',
    feedbackMiss: 'Plot the point at (50 °C, your R from part f). Draw a straight LOBF through all 6 data points — not forced through the origin.',
  } as MSEntry,

  'q5_h': {
    marks: 1,
    exemplar: 'Extend the line of best fit back to 0 °C and read the y-intercept. Accept 56–64 Ω (approximately 60 Ω).',
    keyConcepts: ['extend LOBF to 0 °C', 'read y-intercept', '~60 Ω at 0 °C'],
    keywords: ['0', '60', 'extend', 'extrapolate', 'y-intercept', 'line of best fit'],
    feedbackHit: 'Correct prediction by extending the line of best fit.',
    feedbackMiss: 'Extend the LOBF to the y-axis (T = 0 °C). Read resistance ≈ 60 Ω.',
  } as MSEntry,

  'q5_i': {
    marks: 2,
    exemplar: 'Choose two well-separated points on the LOBF. Gradient = ΔR / ΔT. Using (20, 67) and (100, 101): gradient = (101−67)/(100−20) = 34/80 = 0.425 Ω °C⁻¹. Accept 0.43–0.55 Ω °C⁻¹. Unit Ω °C⁻¹ required.',
    keyConcepts: ['gradient = ΔR / ΔT', 'two points from LOBF', 'unit Ω °C⁻¹', '0.43–0.55'],
    keywords: ['gradient', 'ΔR', 'ΔT', '0.43', '0.45', '0.50', '0.55', 'Ω/°C', 'slope', 'rise', 'run'],
    feedbackHit: 'Correct gradient with appropriate unit.',
    feedbackMiss: 'Two points on LOBF (not data points). Gradient = (R₂−R₁)/(T₂−T₁). Unit: Ω °C⁻¹. Answer ≈ 0.43–0.55 Ω °C⁻¹.',
  } as MSEntry,

  'q5_j': {
    marks: 2,
    exemplar: 'Not valid for two reasons: (1) 1000 °C is far beyond the data range (0–100 °C); extrapolating so far is unreliable as the relationship may not remain linear. (2) At 1000 °C, the resistor would be destroyed/melted — physically meaningless.',
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'resistor destroyed at high temperature'],
    keywords: ['extrapolate', 'beyond', 'range', 'data', 'linear', 'not valid', '1000', 'melted', 'destroyed', 'unreliable'],
    feedbackHit: 'Good critique of the extrapolation validity.',
    feedbackMiss: '(1) 1000 °C is far beyond data range — cannot assume linear trend continues. (2) At 1000 °C, the resistor would melt or be destroyed.',
  } as MSEntry,

  // ── Q6: Water Tower, South Africa (8400 m³, 38 m → W = 3.1 × 10⁹ J)

  'q6_a': {
    marks: 3,
    exemplar: 'Volume = 8 400 m³. Mass = ρ × V = 1000 × 8 400 = 8.4 × 10⁶ kg.\nW = mgh = 8.4 × 10⁶ × 9.81 × 38 = 3.13 × 10⁹ J ≈ 3.1 × 10⁹ J (2 s.f.).\nAward: 1 mark for mass calculation; 1 mark for W = mgh with correct substitution; 1 mark for 3.1 × 10⁹ J (2 s.f.) in standard form.',
    keyConcepts: ['mass = density × volume', '8.4 × 10⁶ kg', 'W = mgh', '3.1 × 10⁹ J', 'two significant figures standard form'],
    keywords: ['1000', '8400', '8.4', '10⁶', 'W = mgh', '9.81', '38', '3.1', '10⁹', 'joule', 'work', 'mass', 'density'],
    feedbackHit: 'Correct — the work done is approximately 3.1 × 10⁹ J.',
    feedbackMiss: 'Step 1: mass = 1000 × 8 400 = 8.4 × 10⁶ kg. Step 2: W = mgh = 8.4 × 10⁶ × 9.81 × 38 = 3.1 × 10⁹ J (2 s.f.).',
  } as MSEntry,

  'q6_b': {
    marks: 1,
    exemplar: 'Accept any ONE of: time spent collecting water means less time for education/work; physical burden (carrying heavy water) causes injury; opportunity cost of time; water collection prevents economic participation.',
    keyConcepts: ['time lost from education or work', 'physical health burden', 'economic productivity lost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'fatigue', 'productivity'],
    feedbackHit: 'Valid barrier to development identified.',
    feedbackMiss: 'Collecting water takes many hours each day, leaving less time for education, work, or economic activity.',
  } as MSEntry,

  'q6_c': {
    marks: 9,
    exemplar: 'Top-band (8–9): Health benefits — reduced waterborne diseases (cholera, typhoid); reduced deaths; improved nutrition. Ethical analysis of fee — Advantage: funds maintenance training, incentivises community ownership, sustainable. Disadvantage: excludes poorest; contradicts UN universal access goal. Concluding appraisal — provide pump AND ensure maintenance programme; small fee justified if subsidies available for the very poor.',
    keyConcepts: ['health benefits of clean water', 'disease reduction', 'ethical advantage of fee', 'ethical disadvantage of fee', 'concluding appraisal'],
    keywords: ['disease', 'cholera', 'health', 'death', 'fee', 'maintain', 'sustain', 'ethical', 'poor', 'access', 'conclude', 'long-term'],
    feedbackHit: 'Well-structured discussion covering health, ethics, and a justified conclusion.',
    feedbackMiss: 'Needed: (1) Health benefits — disease reduction, fewer deaths. (2) Ethics of fee — advantage: raises funds for maintenance; disadvantage: excludes poorest. (3) Conclusion — pump + small fee with subsidies for very poor.',
  } as MSEntry,

  // ── Q7: SODIS (same as source)

  'q7_a': { type: 'mcq', correct: 1 } as MCQEntry,

  'q7_b': {
    marks: 1,
    exemplar: 'UV waves have high energy (or: high frequency / short wavelength) which enables them to damage or destroy the DNA of microorganisms, killing them.',
    keyConcepts: ['UV has high energy', 'UV has high frequency', 'damages DNA of microbes', 'kills microorganisms'],
    keywords: ['energy', 'high energy', 'frequency', 'DNA', 'kill', 'microbe', 'damage', 'denature'],
    feedbackHit: 'Correct — UV waves have high energy that can kill harmful microbes.',
    feedbackMiss: 'UV waves carry high energy (short wavelength / high frequency) which can damage the DNA of microorganisms, killing them.',
  } as MSEntry,

  'q7_c': {
    marks: 11,
    exemplar: 'Top-band (10–11): Climate — near equator ≥8h sun (ideal); cloudy/high-altitude LEDCs need 2 days (less reliable). Health — kills bacteria/protozoa causing cholera, typhoid; reduces mortality in children. Challenges — plastic bottle availability; 8-hour treatment; clear weather required; community acceptance; education needed; small volumes only. Conclusion — SODIS is suitable for sunny equatorial regions but limited in cloudy areas; useful low-cost interim solution.',
    keyConcepts: ['equatorial climate suitable', 'cloudy regions less suitable', 'reduces waterborne disease', 'health improvement', 'requires bottles and sunshine', 'implementation challenges', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'cloud', 'health', 'disease', 'cholera', 'bottle', 'challenge', 'implement', 'conclude', 'suitable'],
    feedbackHit: 'Well-structured evaluation covering climate, health, challenges, and a reasoned conclusion.',
    feedbackMiss: '(1) Climate — equatorial (good); cloudy (2 days). (2) Health — kills microbes, reduces disease. (3) Challenges — bottles, 8h time, weather, education. (4) Conclusion — suitable near equator, limited elsewhere.',
  } as MSEntry,

}
