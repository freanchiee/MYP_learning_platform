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

  // ── Q1: Trapeze swing & Roller-coaster drop ──────────────────────

  'q1_a': { type: 'mcq', correct: 1 }, // B — arrow fired once is not periodic

  'q1_b': {
    marks: 2,
    exemplar: 'Position A (top left): KE = minimum, PE = maximum, Speed = minimum.\nPosition B (bottom): KE = maximum, PE = minimum, Speed = maximum.\nPosition C (top right): KE = minimum, PE = maximum, Speed = minimum.\nAward 1 mark for correct A/C description; 1 mark for correct B description.',
    keyConcepts: ['KE maximum at bottom', 'PE maximum at top', 'speed maximum at lowest point', 'energy conservation trapeze'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'position B', 'bottom', 'speed', 'energy'],
    feedbackHit: 'Correct — energy transfers between kinetic and potential as the trapeze swings.',
    feedbackMiss: 'At position B (bottom): KE is maximum, PE is minimum, speed is maximum. At A and C (top): KE is minimum, PE is maximum, speed is minimum. Energy is conserved and converts between types.',
  },

  'q1_c': {
    marks: 3,
    exemplar: 'T = 18.4 / 10 = 1.84 s.\nRearrange T² = 4π²L/g → g = 4π²L / T².\ng = 4 × π² × 0.840 / (1.84)² = 33.16 / 3.3856 = 9.80 m s⁻² (3 s.f.).\nAward: 1 mark for T = 1.84 s; 1 mark for correct rearrangement and substitution; 1 mark for answer 9.80 m s⁻² (accept 9.79–9.81, must be 3 s.f.).',
    keyConcepts: ['T = total time / number of periods', 'rearrange T² = 4π²L/g', 'g = 4π²L/T²', '9.80 m s⁻²', 'three significant figures'],
    keywords: ['1.84', '9.80', '9.79', '9.81', 'period', 'rearrange', '4π²', 'divide', 'three'],
    feedbackHit: 'Correct calculation of g. Well done for showing all steps.',
    feedbackMiss: 'Step 1: T = 18.4/10 = 1.84 s. Step 2: Rearrange T² = 4π²L/g → g = 4π²L/T². Step 3: g = 4π² × 0.840 / (1.84)² ≈ 9.80 m s⁻².',
  },

  'q1_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the laboratory is not at sea level (altitude affects g); uncertainty/error in measuring the length L of the pendulum; uncertainty/error in measuring the time (reaction time, parallax); air resistance effects; the pendulum not swinging in a perfect arc.',
    keyConcepts: ['altitude or location affects g', 'measurement uncertainty in L', 'timing uncertainty', 'experimental error'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time', 'reaction time', 'parallax'],
    feedbackHit: 'Correct — a valid reason for experimental deviation from expected g was identified.',
    feedbackMiss: 'Possible reasons: the lab is at a different altitude to sea level (g varies with height, and Peru has high-altitude labs); small errors in measuring L or the time lead to a different calculated g.',
  },

  'q1_e': {
    marks: 4,
    exemplar: 'Height change: Δh = 38 − 3.0 = 35 m.\nKE gained = loss in PE = mgh = 600 × 9.81 × 35 = 206 010 J.\nKE = 206 kJ ≈ 210 kJ (2 s.f.).\nAward: 1 mark for Δh = 35 m; 1 mark for KE = mgh; 1 mark for correct substitution; 1 mark for 210 kJ (2 s.f.). Accept 206 kJ for 3 marks if 2 s.f. rounding absent.',
    keyConcepts: ['Δh = 38 − 3.0 = 35 m', 'KE = mgh', 'conservation of energy', '206 kJ or 210 kJ', 'two significant figures'],
    keywords: ['35', '600', '9.81', '206010', '206', '210', 'kJ', 'height', 'mgh', 'kinetic', 'potential'],
    feedbackHit: 'Correct — the kinetic energy at the bottom of the dip is approximately 210 kJ (2 s.f.).',
    feedbackMiss: 'Use conservation of energy: KE gained = PE lost = mgh. Δh = 38 − 3.0 = 35 m. KE = 600 × 9.81 × 35 = 206 010 J ≈ 210 kJ (2 s.f.).',
  },

  'q1_f': {
    marks: 1,
    exemplar: 'Accept any ONE of: frictional forces (between wheels and track) / air resistance / sound energy converts some kinetic energy to heat/thermal energy; the assumption of 100% efficient energy transfer is not valid in reality.',
    keyConcepts: ['friction / air resistance', 'energy lost as heat or sound', 'not 100% efficient', 'energy dissipation'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost', 'inefficient', 'drag'],
    feedbackHit: 'Correct — real-world energy losses mean KE will be less than calculated.',
    feedbackMiss: 'In the real world, friction (wheels on track) and air resistance convert some kinetic energy into heat and sound. The calculation assumes all PE converts to KE, which is only true in an ideal (frictionless) system.',
  },

  // ── Q2: Space-probe RTG & Radioactivity ──────────────────────────

  'q2_a': {
    marks: 2,
    exemplar: 'The radiation released by the decaying source is ionising and can damage delicate electronic components or corrupt their signals. A thick metal casing absorbs the radiation before it reaches the electronics, shielding them so the spacecraft keeps working.\nAward 1 mark for radiation can damage/ionise the electronics; 1 mark for the casing absorbing/shielding the radiation.',
    keyConcepts: ['radiation is ionising and damages electronics', 'casing absorbs/shields radiation', 'protects the spacecraft'],
    keywords: ['radiation', 'ionising', 'damage', 'electronics', 'absorb', 'shield', 'casing', 'protect', 'block'],
    feedbackHit: 'Correct — the casing absorbs the ionising radiation and shields the electronics.',
    feedbackMiss: 'The source emits ionising radiation that can damage electronic components. A thick metal casing absorbs (shields) this radiation, protecting the spacecraft\'s electronics so they keep working.',
  },

  'q2_b': {
    marks: 2,
    exemplar: 'Any TWO of: (1) alpha particles have a high ionising power; (2) alpha particles consist of 2 protons and 2 neutrons (helium-4 nucleus); (3) alpha particles have a low penetrating power / stopped by a few cm of air or a sheet of paper; (4) alpha particles carry a +2 charge / positively charged; (5) alpha particles are deflected by electric and magnetic fields; (6) alpha particles have a short range in air (a few cm).',
    keyConcepts: ['high ionising power', 'helium nucleus 2 protons 2 neutrons', 'low penetrating power', 'positively charged +2', 'short range in air', 'deflected by fields'],
    keywords: ['ionise', 'ionising', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range', 'electric', 'magnetic', 'paper'],
    feedbackHit: 'Two valid properties of alpha particles identified.',
    feedbackMiss: 'Properties of alpha particles include: high ionising power; composed of 2 protons + 2 neutrons (helium nucleus); low penetrating power (stopped by paper or a few cm of air); positively charged (+2); short range in air; deflected by electric/magnetic fields.',
  },

  'q2_c': { type: 'mcq', correct: 0 }, // A — ²³⁸Pu → ²³⁴U + ⁴α (correct alpha decay)

  'q2_d': {
    marks: 2,
    exemplar: 'Answer: C (²³⁸₉₂U).\nJustification: Isotopes of the same element must have the same proton number (atomic number). Plutonium-238 has a proton number of 94. Option C shows a proton number of 92, which is not 94. Therefore it is not an isotope of plutonium — it is a different element (uranium-238). Award 1 mark for selecting C; 1 mark for justification referencing proton/atomic number.',
    keyConcepts: ['isotopes same proton number', 'proton number 94 for plutonium', 'C has proton number 92', 'different element not isotope'],
    keywords: ['proton', 'atomic number', '94', '92', 'same', 'different element', 'isotope', 'C', 'option C', 'uranium'],
    feedbackHit: 'Correct — C has a different proton number (92, not 94) so it cannot be an isotope of plutonium.',
    feedbackMiss: 'Isotopes of an element always have the same proton number (atomic number). Plutonium has proton number 94. Option C (²³⁸₉₂U) shows proton number 92, which is uranium — a different element. It cannot be an isotope of plutonium.',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'Half-life ≈ 88 years (accept 82–94 years). Read from the graph where the number of nuclei = 5000 (half of 10 000); read off the corresponding time.',
    keyConcepts: ['half-life from graph', '5000 nuclei = half of 10000', 'read x-axis at half the starting value', '88 years'],
    keywords: ['88', '82', '94', '5000', 'half', 'graph', 'read', 'years', 'x-axis'],
    feedbackHit: 'Correct — the half-life is approximately 88 years, read from where the curve crosses 5 000 nuclei.',
    feedbackMiss: 'To find the half-life: start at 10 000 nuclei, find 5 000 (half) on the y-axis, draw a horizontal line to the curve, then read down to the x-axis. The half-life is approximately 88 years.',
  },

  'q2_f': {
    marks: 1,
    exemplar: '10 000 → 5 000 → 2 500 → 1 250 → 625 requires 4 half-lives.\nTime = 4 × 88 = 352 years (accept 330–375 based on their half-life from part e).',
    keyConcepts: ['4 half-lives to reach 625', 'time = 4 × half-life', '352 years', 'halving sequence'],
    keywords: ['4', '352', '330', '375', 'four', 'half-lives', 'multiply', 'halve', '625'],
    feedbackHit: 'Correct — it takes 4 half-lives for 10 000 nuclei to reduce to 625.',
    feedbackMiss: '10 000 → 5 000 (×1) → 2 500 (×2) → 1 250 (×3) → 625 (×4 half-lives). Time = 4 × 88 ≈ 352 years.',
  },

  'q2_g': {
    marks: 3,
    exemplar: 'Normal mechanism: Alpha particles are strongly ionising and have a very short range, so they are absorbed within the source itself, depositing all of their energy as heat — which the RTG converts to electricity.\nBeta/gamma problem: Beta and especially gamma radiation are more penetrating and less ionising, so much of their energy escapes the source rather than being absorbed as heat. Less heat would be produced inside the source, so the RTG would generate less electrical power (and more shielding would be needed). Award marks: 1 mark for alpha being absorbed in the source as heat; 1 mark for beta/gamma being more penetrating / less ionising; 1 mark for the consequence (less heat / less power).',
    keyConcepts: ['alpha absorbed in source as heat', 'short range deposits energy locally', 'beta/gamma more penetrating, energy escapes', 'less heat produced', 'less electrical power'],
    keywords: ['absorb', 'heat', 'short range', 'ionising', 'beta', 'gamma', 'penetrating', 'escape', 'power', 'electricity'],
    feedbackHit: 'Good explanation of why alpha gives more usable heat than beta or gamma.',
    feedbackMiss: 'Alpha particles are strongly ionising with a very short range, so they are absorbed inside the source and deposit their energy as heat. Beta and gamma are more penetrating, so much of their energy escapes the source instead of becoming heat — less heat, and so less electrical power, would be produced.',
  },

  // ── Q3: Resistors-in-series Investigation ────────────────────────

  'q3_a': {
    marks: 2,
    exemplar: 'If the number of identical resistors connected in series increases, then the total resistance will increase, because in a series circuit the resistances add together (R_total = R₁ + R₂ + …), so each extra resistor adds more opposition to the current.\nAward 1 mark for stating direction (number↑ → total resistance↑); 1 mark for a valid scientific reason (series resistances add).',
    keyConcepts: ['more resistors in series → higher total resistance', 'series resistances add', 'R_total = R₁ + R₂ + …', 'more opposition to current'],
    keywords: ['number', 'resistors', 'series', 'total', 'resistance', 'increase', 'add', 'sum', 'opposition', 'because'],
    feedbackHit: 'Good hypothesis — correct direction and scientific reasoning (series resistances add).',
    feedbackMiss: 'If the number of resistors in series increases, total resistance increases. Reason: in series the resistances add together (R_total = R₁ + R₂ + …), so each extra resistor adds more opposition to the current.',
  },

  'q3_b': {
    marks: 3,
    exemplar: 'The student should select only one type (e.g. Type X, 10 Ω) so the resistors are identical, and build chains of 1, 2, 3, 4 and 5 resistors (5 different chain lengths).\nAward: 1 mark for selecting only one type (identical resistors); 1 mark for using up to 5 resistors to make 5 different chain lengths; 1 mark for explaining that the individual resistance must be kept constant so only the NUMBER in series changes. Type X is best as it has 5 available.',
    keyConcepts: ['one type only (identical resistors)', 'five different chain lengths', 'individual resistance controlled', 'only the number in series varies'],
    keywords: ['type X', 'one type', 'identical', 'same resistor', '5 resistors', 'different chains', 'controlled', 'constant', 'only number'],
    feedbackHit: 'Correct selection — using identical resistors in chains of different lengths is a valid controlled experiment.',
    feedbackMiss: 'Select only ONE type of resistor (e.g. Type X) so they are identical, then build chains of 1, 2, 3, 4 and 5 resistors. This keeps each resistor\'s value constant, so only the NUMBER in series varies. Mixing types would introduce another variable.',
  },

  'q3_c': {
    marks: 2,
    exemplar: 'Only one type of resistor should be used because the resistors must be identical; if resistors of different values were mixed, it would be impossible to tell whether the total resistance changed because of the NUMBER of resistors or because of their different values. Building chains of different lengths tests the research question directly (the number is the independent variable). The temperature and the connecting wires should also be kept constant.\nAward 1 mark for justifying identical resistors (control); 1 mark for justifying different chain lengths (tests RQ).',
    keyConcepts: ['identical resistors control their value', 'mixed values confound results', 'different chain lengths to test RQ', 'other conditions controlled'],
    keywords: ['identical', 'same value', 'confound', 'fair test', 'number varies', 'controlled', 'constant', 'justify'],
    feedbackHit: 'Good justification — using identical resistors ensures only the number causes changes in total resistance.',
    feedbackMiss: 'Identical resistors: if values were mixed, you could not tell whether total resistance changed because of the number or the value of the resistors. Different chain lengths: the number of resistors is the independent variable being tested. Keep wires and temperature constant.',
  },

  'q3_d': {
    marks: 4,
    exemplar: 'A table with correct headings "Number of resistors" and "Total resistance / Ω" (units in heading). Data in order: (1, 10), (2, 20), (3, 30), (4, 40), (5, 50).\nAward: 1 mark for both correct column headings with unit on resistance; 1 mark for all 5 "number" values correct; 1 mark for all 5 resistance values correct; 1 mark for data presented in logical order (ascending number).',
    keyConcepts: ['column headings with units', 'Number of resistors', 'Total resistance / Ω', 'data in ascending order', 'all 5 data pairs'],
    keywords: ['number', 'resistors', 'total', 'resistance', 'ohm', 'Ω', '1', '2', '3', '4', '5', '10', '20', '30', '40', '50', 'heading', 'unit'],
    feedbackHit: 'Well-organised data table with correct headings, units, and ordered data.',
    feedbackMiss: 'Table should have headings "Number of resistors" and "Total resistance / Ω". Data: (1, 10), (2, 20), (3, 30), (4, 40), (5, 50). Order the rows by increasing number of resistors.',
  },

  'q3_e': {
    marks: 2,
    exemplar: 'Carrying out more trials (repeats) for each chain length allows a mean (average) total resistance to be calculated. This reduces the effect of random errors and increases the reliability of the results, making conclusions more valid.\nAward 1 mark for mean/average; 1 mark for reliability or reducing random error.',
    keyConcepts: ['calculate a mean/average', 'reduce random errors', 'increase reliability', 'more valid conclusions'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable', 'valid', 'anomaly', 'anomalous'],
    feedbackHit: 'Correct — more trials allow mean values and reduce the impact of random errors.',
    feedbackMiss: 'More trials allow a mean (average) to be calculated for each chain length. This reduces the effect of random errors and makes the results more reliable.',
  },

  'q3_f': { type: 'mcq', correct: 2 }, // C — rising straight line through origin and the data points

  'q3_g': {
    marks: 3,
    exemplar: 'Research question: How does the resistance of each individual resistor affect the total resistance of the chain? (OR: How does the number of identical resistors connected in PARALLEL affect the total resistance?)\nIndependent variable: the value of each resistor (OR: number of resistors in parallel)\nControl variable: the number of resistors; the connecting wires (OR: resistor value, temperature) — must be consistent with the RQ.\nAward 1 mark for valid RQ; 1 mark for IV consistent with RQ; 1 mark for valid CV consistent with RQ.',
    keyConcepts: ['research question about new IV', 'IV consistent with RQ', 'CV consistent with RQ and different from IV'],
    keywords: ['value', 'parallel', 'resistor', 'research question', 'how does', 'affect', 'independent', 'control', 'consistent', 'number'],
    feedbackHit: 'Valid research question, consistent IV and CV.',
    feedbackMiss: 'Example: RQ = "How does connecting identical resistors in parallel (rather than series) affect total resistance?" IV = number in parallel, CV = resistor value and temperature. OR: RQ = "How does the value of each resistor affect total resistance?" IV = resistor value, CV = number of resistors.',
  },

  // ── Q4: LDR (light-intensity) Investigation Design ───────────────

  'q4_a': {
    marks: 1,
    exemplar: 'How does the light intensity falling on the LDR affect the resistance of the LDR? (Accept variations that clearly state the IV = light intensity and DV = resistance.)',
    keyConcepts: ['light intensity as IV', 'resistance as DV', 'clear research question format'],
    keywords: ['light intensity', 'intensity', 'resistance', 'LDR', 'how does', 'affect', 'brightness', 'relationship'],
    feedbackHit: 'Correct research question with clear IV and DV.',
    feedbackMiss: 'The research question should state the independent variable (light intensity) and the dependent variable (resistance of the LDR). Example: "How does the light intensity falling on the LDR affect its resistance?"',
  },

  'q4_b': {
    marks: 13,
    exemplar: 'A 13-mark holistic investigation design. Top-band response (11–13 marks) includes: clearly stated IV (light intensity in lux) and DV (resistance); TWO control variables each with justification (e.g. distance between lamp and LDR — changing it would change the intensity reaching the LDR; background/room lighting — stray light would change the total intensity); full equipment list (dimmable lamp, LDR, light meter/lux meter, ohmmeter/multimeter, ruler, connecting wires); detailed step-by-step method (set up lamp and LDR with the light meter beside the LDR, set the lamp to a brightness, record the lux and the resistance, repeat across a range of intensities); sufficient data (range e.g. 100–1000 lux, minimum 6–8 intensities, 3 repeats per intensity to calculate a mean); acknowledgement of uncertainty/error. Mid-band (7–10): most elements present but lacking detail in 1–2 areas. Lower-band (1–6): basic description present but missing key elements.',
    keyConcepts: ['IV = light intensity, DV = resistance', 'two control variables with justification', 'equipment list', 'detailed method', 'range and repeats', 'sufficient data collection'],
    keywords: ['intensity', 'lux', 'resistance', 'control', 'lamp', 'LDR', 'light meter', 'ohmmeter', 'method', 'range', 'repeat', 'mean', 'justif', 'independent', 'dependent', 'step'],
    feedbackHit: 'Well-designed investigation with variables, method, equipment, and sufficient data plan.',
    feedbackMiss: 'A complete design should include: IV = light intensity (lux), DV = resistance (ohmmeter). Control variables (justify each): distance from lamp to LDR, background lighting. Equipment: dimmable lamp, LDR, light meter, ohmmeter, ruler. Method: set the lamp to a series of brightnesses, record lux and resistance at each (e.g. 100–1000 lux), repeat 3 times and calculate a mean.',
  },

  // ── Q5: Copper Coil Resistance vs Temperature ────────────────────

  'q5_a': {
    marks: 1,
    exemplar: '50 °C (accept 48–52 °C). The red liquid ends halfway between the 40 and 60 graduation marks.',
    keyConcepts: ['read thermometer correctly', '50 °C', 'between 40 and 60 marks'],
    keywords: ['50', '48', '52', '°C', 'thermometer', 'temperature', 'read'],
    feedbackHit: 'Correct thermometer reading.',
    feedbackMiss: 'The thermometer shows the liquid level between 40 and 60, halfway up. Count the divisions carefully — the reading is approximately 50 °C.',
  },

  'q5_b': {
    marks: 3,
    exemplar: 'Circuit: power supply (constant 12 V) connected in series with the copper coil and an ammeter. A voltmeter is connected in parallel across the coil. Award: 1 mark for ammeter in series; 1 mark for voltmeter in parallel across the coil; 1 mark for a complete circuit with power supply and coil correctly shown.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'power supply in series', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'power supply', 'coil', 'circuit'],
    feedbackHit: 'Correct circuit description with ammeter in series and voltmeter in parallel.',
    feedbackMiss: 'Circuit: power supply → ammeter (in series) → copper coil → back to supply. Voltmeter connected in parallel across just the coil (not the whole circuit).',
  },

  'q5_c': {
    marks: 3,
    exemplar: 'Independent variable (IV): Temperature of the coil.\nDependent variable (DV): Current in the circuit.\nControl variables (CV): Length of the coil wire; Diameter of the coil wire; Voltage across the coil.\nAward: 1 mark for correct IV; 1 mark for correct DV; 1 mark for any two correct CVs.',
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length, diameter, voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
    feedbackHit: 'Correct variable identification — temperature (IV), current (DV), length/diameter/voltage (CV).',
    feedbackMiss: 'IV = temperature of the coil (what you change). DV = current in the circuit (what you measure). CV = length and diameter of the coil wire, and the voltage across the coil (all kept constant).',
  },

  'q5_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: scalds/burns from the hot water or steam in the water bath; electrical hazards (shock from the live circuit); do not touch hot equipment / use tongs; ensure wire insulation is intact; keep water away from electrical connections.',
    keyConcepts: ['scald/burn hazard from hot water', 'electrical shock hazard', 'water near electricity risk'],
    keywords: ['burn', 'burns', 'scald', 'hot', 'water', 'steam', 'electric shock', 'electrical', 'hazard', 'insulation'],
    feedbackHit: 'Valid safety concern identified.',
    feedbackMiss: 'Safety issues include: scalds/burns from the hot water or steam; electrical shock from the live circuit (especially with water nearby). Precautions: keep water away from connections, use care with hot equipment.',
  },

  'q5_e': {
    marks: 2,
    exemplar: 'To test inverse proportion: check if I × T = constant. From the graph: at 20 °C, I ≈ 400 mA → product = 8000; at 100 °C, I ≈ 210 mA → product = 21000. The products are NOT equal, so the relationship is NOT inversely proportional. The prediction that current decreases as temperature increases is supported, but the claim of inverse proportion is not supported.\nAward 1 mark for correct use of data/calculation showing products are not equal; 1 mark for correct conclusion that inverse proportion is NOT supported.',
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products are not equal', 'current decreases with temperature (direction correct)', 'inverse proportion claim not supported'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'two points', '8000', '21000', 'supported'],
    feedbackHit: 'Correct use of data to test inverse proportion and a clear conclusion.',
    feedbackMiss: 'To check inverse proportion: if I × T = constant for all points, it is inversely proportional. From graph: at 20 °C, I ≈ 400 → 400 × 20 = 8000; at 100 °C, I ≈ 210 → 210 × 100 = 21000. Products are not equal, so NOT inversely proportional. The direction (current decreases) is correct, but the relationship is not inverse proportion.',
  },

  'q5_f': {
    marks: 2,
    exemplar: 'Read current at 50 °C from graph ≈ 290 mA = 0.290 A.\nR = V / I = 12 / 0.290 = 41.4 ≈ 41 Ω (accept 38–44 Ω depending on graph reading).\nAward 1 mark for correct use of R = V/I; 1 mark for answer in range 38–44 Ω.',
    keyConcepts: ['R = V / I', 'convert mA to A', '12 V constant', '41 Ω at 50 °C'],
    keywords: ['R = V/I', '12', '0.290', '290', '41', 'resistance', 'ohm', 'Ω', 'formula', 'divide'],
    feedbackHit: 'Correct calculation using R = V/I.',
    feedbackMiss: 'Read current at 50 °C from graph (≈ 290 mA = 0.290 A). Use R = V/I = 12 / 0.290 ≈ 41 Ω.',
  },

  'q5_g': {
    marks: 2,
    exemplar: 'Award 1 mark for plotting the point (50 °C, their value from 5f ≈ 41 Ω) within ±1 small square of the correct position. Award 1 mark for a straight line of best fit that rises and passes close to all data points; it does not have to pass through the origin.',
    keyConcepts: ['plot (50 °C, ~41 Ω)', 'rising straight line of best fit', 'line through data not forced through origin'],
    keywords: ['plot', 'point', '50', '41', 'line of best fit', 'straight', 'rising', 'through data'],
    feedbackHit: 'Data point plotted and line of best fit drawn correctly.',
    feedbackMiss: 'Plot the point at (50 °C, your R from part f). Draw a straight rising line of best fit that passes close to all the data points — for a metal, resistance increases with temperature.',
  },

  'q5_h': {
    marks: 1,
    exemplar: 'Extend the line of best fit back to 0 °C on the x-axis and read the y-intercept. Accept 20–28 Ω (approximately 25 Ω).',
    keyConcepts: ['extend LOBF to 0 °C', 'read y-intercept', '~25 Ω at 0 °C'],
    keywords: ['0', '25', 'extend', 'extrapolate', 'y-intercept', 'line of best fit', 'predict', 'resistance'],
    feedbackHit: 'Correct prediction by extending the line of best fit.',
    feedbackMiss: 'Extend the line of best fit to the y-axis (Temperature = 0 °C) and read the resistance. The answer should be approximately 25 Ω.',
  },

  'q5_i': {
    marks: 2,
    exemplar: 'Choose two well-separated points on the line of best fit (not data points). Gradient = ΔR / ΔT. Using (20, 30) and (100, 57): gradient = (57−30)/(100−20) = 27/80 = 0.34 Ω °C⁻¹. Accept 0.30–0.40 Ω °C⁻¹ (depending on LOBF drawn in 5g). Unit Ω °C⁻¹ or Ω/°C required.\nAward 1 mark for correct method (two points from LOBF, ΔR/ΔT); 1 mark for answer with correct unit.',
    keyConcepts: ['gradient = ΔR / ΔT', 'two points from LOBF (not data)', 'unit Ω °C⁻¹', 'answer 0.30–0.40'],
    keywords: ['gradient', 'ΔR', 'ΔT', '0.34', '0.30', '0.40', 'Ω/°C', 'slope', 'rise', 'run'],
    feedbackHit: 'Correct gradient calculation with appropriate unit.',
    feedbackMiss: 'Choose two points on your line of best fit (not data points). Gradient = (R₂−R₁)/(T₂−T₁). The unit is Ω °C⁻¹. The answer should be approximately 0.30–0.40 Ω °C⁻¹.',
  },

  'q5_j': {
    marks: 2,
    exemplar: 'The calculation is not valid / not reliable for two reasons: (1) 1200 °C is far beyond the range of the data (which only goes to 100 °C); extrapolating so far beyond the data is unreliable as the relationship may not remain linear. (2) Copper melts at about 1085 °C, so at 1200 °C the coil would have melted and the result is physically meaningless. Award 1 mark per valid comment, up to 2 marks.',
    keyConcepts: ['extrapolation beyond data range', 'linear relationship may not continue', 'copper melts ~1085 °C', 'physically unrealistic'],
    keywords: ['extrapolate', 'beyond', 'range', 'data', 'linear', 'not valid', '1200', 'melt', '1085', 'destroyed', 'unreliable', 'unrealistic'],
    feedbackHit: 'Good critique of the validity of extrapolating far beyond the data range.',
    feedbackMiss: 'The calculation is not valid: (1) 1200 °C is far beyond the data range (0–100 °C) — we cannot assume the linear trend continues. (2) Copper melts at about 1085 °C, so at 1200 °C the coil would have melted — the result is physically meaningless.',
  },

  // ── Q6: Solar Borehole Pump & Clean Water ────────────────────────

  'q6_a': {
    marks: 3,
    exemplar: 'Volume = 9 200 m³. Mass = ρ × V = 1000 × 9 200 = 9.2 × 10⁶ kg.\nW = mgh = 9.2 × 10⁶ × 9.81 × 38 = 3.43... × 10⁹ J ≈ 3.4 × 10⁹ J (2 s.f.).\nAward: 1 mark for mass calculation; 1 mark for W = mgh with correct substitution; 1 mark for 3.4 × 10⁹ J (2 s.f.) with standard form.',
    keyConcepts: ['mass = density × volume', '9.2 × 10⁶ kg', 'W = mgh', '3.4 × 10⁹ J', 'two significant figures standard form'],
    keywords: ['1000', '9200', '9.2', '10⁶', 'W = mgh', '9.81', '38', '3.4', '10⁹', 'joule', 'work', 'mass', 'density'],
    feedbackHit: 'Correct — the work done is approximately 3.4 × 10⁹ J.',
    feedbackMiss: 'Step 1: mass = density × volume = 1000 × 9 200 = 9.2 × 10⁶ kg. Step 2: W = mgh = 9.2 × 10⁶ × 9.81 × 38 = 3.4 × 10⁹ J (2 s.f.).',
  },

  'q6_b': {
    marks: 1,
    exemplar: 'Accept any ONE of: time spent collecting water means less time for education / work / productive activities; physical burden (carrying heavy water) causes injury / health issues; opportunity cost of time; water collection prevents economic participation; women and girls especially bear this burden, limiting their schooling.',
    keyConcepts: ['time lost from education or work', 'physical health burden', 'economic productivity lost', 'opportunity cost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'fatigue', 'opportunity', 'productivity', 'injury', 'girls'],
    feedbackHit: 'Valid barrier to development identified.',
    feedbackMiss: 'Collecting water takes many hours each day (especially for women and girls), leaving less time for education, work, or economic activity. This is a significant barrier to personal and community development.',
  },

  'q6_c': {
    marks: 9,
    exemplar: 'A 9-mark holistic response. Top-band (8–9): Health benefits (3 marks) — clean groundwater reduces waterborne diseases (cholera, typhoid, dysentery); fewer deaths (around 1.4 million/year worldwide); improved nutrition and life expectancy; time freed from collection for school/work. Ethical analysis of fee (4 marks) — Advantage: the fee funds spare parts and trains a local technician so the pump stays usable long-term; encourages community ownership; sustainable model. Disadvantage: excludes the poorest who cannot pay; contradicts the UN goal of universal free access; ethical issue of charging for a basic human right. Concluding appraisal (2 marks) — balanced, evidence-based conclusion, e.g. "The charity should install the pump AND set up a maintenance fund and local training — a small fee may be justified if it keeps the pump working, but the poorest households should get free or reduced access."',
    keyConcepts: ['health benefits of clean water', 'disease reduction', 'ethical advantage of fee (maintenance)', 'ethical disadvantage of fee (excludes poor)', 'concluding appraisal with justification'],
    keywords: ['disease', 'cholera', 'health', 'death', 'fee', 'maintain', 'technician', 'sustain', 'ethical', 'disadvantage', 'poor', 'access', 'conclude', 'long-term', 'UN', 'universal'],
    feedbackHit: 'Well-structured discussion covering health, ethics of the fee, and a justified conclusion.',
    feedbackMiss: 'A top-band response includes: (1) Health benefits — reduced waterborne disease, fewer deaths, improved wellbeing. (2) Ethical analysis of charging — advantage: funds maintenance and a local technician; disadvantage: excludes the poorest, conflicts with universal right to water. (3) Conclusion — balanced, e.g. install the pump with a maintenance fund; a small fee may be justified IF there is free/reduced access for the very poor.',
  },

  // ── Q7: Rural Connectivity & Microwave/Radio ─────────────────────

  'q7_a': { type: 'mcq', correct: 1 }, // '2' (index 1 in ['1','2','3','4']) — microwaves are between radio and infrared

  'q7_b': {
    marks: 1,
    exemplar: 'Microwaves and radio waves are only weakly absorbed by the atmosphere and can travel long distances through the air (and can diffract around or be relayed past obstacles), which lets them carry signals between the mast and phones across a village. Accept: "they have a long range / pass easily through the air / are not strongly absorbed".',
    keyConcepts: ['weakly absorbed by atmosphere', 'travel long distances through air', 'long range / penetrate the air', 'carry signals'],
    keywords: ['absorb', 'atmosphere', 'travel', 'distance', 'range', 'air', 'penetrate', 'diffract', 'long', 'signal'],
    feedbackHit: 'Correct — microwaves and radio waves travel long distances through the air with little absorption, carrying the signal.',
    feedbackMiss: 'Microwaves and radio waves are only weakly absorbed by the atmosphere and travel long distances through the air, so they can carry phone and internet signals between the mast and phones across the village.',
  },

  'q7_c': {
    marks: 11,
    exemplar: 'An 11-mark holistic response. Top-band (10–11): Region/climate suitability (3 marks) — solar-powered masts work well in sunny remote regions (much of sub-Saharan Africa, South Asia) where there is reliable strong sunshine to power them and where laying cables is too costly; in very cloudy or high-latitude regions a large battery backup is needed and reliability falls. Impact on health, education and economy (2 marks) — telemedicine and health advice by phone improve healthcare; online learning supports education; mobile banking and access to market/weather information boost farmers\' incomes and the local economy. Challenges of implementation (4 marks) — high cost of installing and maintaining masts in remote areas; need for trained technicians; cost of phones and data, which the poorest cannot afford; cloudy weather needs battery backup; possible community trust or literacy barriers; risk of unequal access. Concluding appraisal (2 marks) — balanced, evidence-based verdict, e.g. "Solar-powered masts are a suitable, sustainable way to bring connectivity to sunny remote LEDC regions and can transform health, education and the economy, but their high cost and the cost of devices and data mean they work best with subsidies and local training, not as a stand-alone fix."',
    keyConcepts: ['sunny regions suitable', 'cloudy regions need battery backup', 'telemedicine/education/economy benefits', 'cost and technician challenges', 'concluding appraisal'],
    keywords: ['sun', 'solar', 'remote', 'cloud', 'battery', 'telemedicine', 'health', 'education', 'banking', 'economy', 'farmer', 'cost', 'technician', 'data', 'challenge', 'conclude', 'suitable', 'limitation'],
    feedbackHit: 'Well-structured evaluation covering suitability, impact, challenges, and a reasoned conclusion.',
    feedbackMiss: 'Top-band response includes: (1) Suitability — works well in sunny remote regions; cloudy areas need battery backup. (2) Impact — telemedicine (health), online learning (education), mobile banking/markets (economy). (3) Challenges — cost of masts, trained technicians, cost of phones/data, cloudy weather. (4) Conclusion — suitable and transformative for sunny remote LEDCs, but works best with subsidies and local training rather than alone.',
  },
}
