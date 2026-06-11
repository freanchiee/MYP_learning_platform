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

  // ── Q1: Pendulum (Australia, L=95.0 cm, 10T=19.6s) & Wrecking Ball (3000 kg, Δh=6.0 m)

  'q1_a': { type: 'mcq', correct: 2 } as MCQEntry,

  'q1_b': {
    marks: 2,
    exemplar: 'Position A (top left): KE = minimum, PE = maximum, Speed = minimum.\nPosition B (bottom): KE = maximum, PE = minimum, Speed = maximum.\nPosition C (top right): KE = minimum, PE = maximum, Speed = minimum.\nAward 1 mark for correct A/C description; 1 mark for correct B description.',
    keyConcepts: ['KE maximum at bottom', 'PE maximum at top', 'speed maximum at lowest point', 'energy conservation pendulum'],
    keywords: ['kinetic', 'potential', 'minimum', 'maximum', 'position B', 'bottom', 'speed', 'energy'],
    feedbackHit: 'Correct — energy transfers between kinetic and potential as the pendulum swings.',
    feedbackMiss: 'At B (bottom): KE maximum, PE minimum, speed maximum. At A and C (top): KE minimum, PE maximum, speed minimum.',
  } as MSEntry,

  'q1_c': {
    marks: 3,
    exemplar: 'T = 19.6 / 10 = 1.96 s.\nRearrange T² = 4π²L/g → g = 4π²L / T².\ng = 4 × π² × 0.950 / (1.96)² = 37.504 / 3.8416 = 9.762 m s⁻² ≈ 9.76 m s⁻² (3 s.f.).\nAward: 1 mark for T = 1.96 s; 1 mark for correct rearrangement and substitution; 1 mark for answer 9.76 m s⁻² (accept 9.75–9.77, must be 3 s.f.).',
    keyConcepts: ['T = total time / number of periods', 'rearrange T² = 4π²L/g', 'g = 4π²L/T²', '9.76 m s⁻²', 'three significant figures'],
    keywords: ['1.96', '9.76', '9.75', '9.77', 'period', 'rearrange', '4π²', 'divide', 'three'],
    feedbackHit: 'Correct calculation of g. Well done for showing all steps.',
    feedbackMiss: 'Step 1: T = 19.6/10 = 1.96 s. Step 2: g = 4π²L/T². Step 3: g = 4π² × 0.950 / (1.96)² ≈ 9.76 m s⁻².',
  } as MSEntry,

  'q1_d': {
    marks: 1,
    exemplar: 'Accept any ONE of: the laboratory is not at sea level (altitude affects g); uncertainty/error in measuring the length L; uncertainty/error in measuring the time T (reaction time, parallax); air resistance effects.',
    keyConcepts: ['altitude or location affects g', 'measurement uncertainty in L', 'timing uncertainty'],
    keywords: ['altitude', 'sea level', 'measurement', 'error', 'uncertainty', 'length', 'time', 'reaction time', 'parallax'],
    feedbackHit: 'Correct — a valid reason for deviation from expected g identified.',
    feedbackMiss: 'Possible reasons: lab at different altitude (g varies with height); errors in measuring L or T.',
  } as MSEntry,

  'q1_e': {
    marks: 4,
    exemplar: 'Height change: Δh = 9.5 − 3.5 = 6.0 m.\nKE gained = loss in PE = mgh = 3000 × 9.81 × 6.0 = 176 580 J.\nKE = 177 kJ ≈ 180 kJ (2 s.f.).\nAward: 1 mark for Δh = 6.0 m; 1 mark for KE = mgh; 1 mark for correct substitution; 1 mark for 180 kJ (2 s.f.). Accept 177 kJ for 3 marks if 2 s.f. rounding absent.',
    keyConcepts: ['Δh = 9.5 − 3.5 = 6.0 m', 'KE = mgh', 'conservation of energy', '177 kJ or 180 kJ', 'two significant figures'],
    keywords: ['6.0', '6 m', '3000', '9.81', '176580', '177', '180', 'kJ', 'height', 'mgh', 'kinetic', 'potential'],
    feedbackHit: 'Correct — the kinetic energy at impact is approximately 180 kJ (2 s.f.).',
    feedbackMiss: 'KE = mgh. Δh = 9.5 − 3.5 = 6.0 m. KE = 3000 × 9.81 × 6.0 = 176 580 J ≈ 180 kJ (2 s.f.).',
  } as MSEntry,

  'q1_f': {
    marks: 1,
    exemplar: 'Accept any ONE of: frictional forces / air resistance / sound energy converts some kinetic energy to heat/thermal energy; the 100% efficient energy transfer assumption is not valid in reality.',
    keyConcepts: ['friction / air resistance', 'energy lost as heat or sound', 'energy dissipation'],
    keywords: ['friction', 'air resistance', 'heat', 'thermal', 'sound', 'dissipated', 'lost', 'drag'],
    feedbackHit: 'Correct — real-world energy losses mean KE will be less than calculated.',
    feedbackMiss: 'Frictional forces and air resistance convert some KE into heat and sound. The calculation assumes all PE converts to KE — only true in an ideal frictionless system.',
  } as MSEntry,

  // ── Q2: Smoke Detectors (same structure and graphs as source)

  'q2_a': {
    marks: 2,
    exemplar: 'Hot air/smoke rises because it is less dense than cooler surrounding air. Therefore smoke rises to the ceiling, where the detector is positioned.\nAward 1 mark for "smoke/hot air rises"; 1 mark for reason linked to density.',
    keyConcepts: ['smoke rises', 'less dense than cool air', 'convection', 'ceiling position'],
    keywords: ['rises', 'ceiling', 'dense', 'density', 'hot air', 'convection', 'upward'],
    feedbackHit: 'Correct — hot smoke is less dense and rises.',
    feedbackMiss: 'Smoke is less dense than cooler air → rises. Ceiling detector catches rising smoke sooner.',
  } as MSEntry,

  'q2_b': {
    marks: 2,
    exemplar: 'Any TWO of: (1) high ionizing power; (2) helium nucleus (2 protons + 2 neutrons); (3) low penetrating power; (4) positively charged (+2); (5) short range in air.',
    keyConcepts: ['high ionizing power', 'helium nucleus', 'low penetrating power', 'positively charged'],
    keywords: ['ionize', 'helium', 'proton', 'neutron', 'penetrating', 'positive', 'charge', 'range'],
    feedbackHit: 'Two valid alpha particle properties identified.',
    feedbackMiss: 'Alpha properties: high ionizing power; helium nucleus; low penetrating power (stopped by paper); +2 charge; short range.',
  } as MSEntry,

  'q2_c': { type: 'mcq', correct: 0 } as MCQEntry,

  'q2_d': {
    marks: 2,
    exemplar: 'Answer: B (²⁴⁰₉₃Am).\nJustification: Isotopes have the same proton number. Americium proton number = 95. Option B has proton number 93 (neptunium), not 95.',
    keyConcepts: ['isotopes same proton number', 'proton number 95 for americium', 'B has proton number 93'],
    keywords: ['proton', 'atomic number', '95', '93', 'different element', 'isotope', 'B'],
    feedbackHit: 'Correct — B has proton number 93, not 95.',
    feedbackMiss: 'Isotopes have the same proton number. Am proton number = 95. Option B shows 93 — neptunium, a different element.',
  } as MSEntry,

  'q2_e': {
    marks: 1,
    exemplar: 'Half-life ≈ 420 years (accept 410–430 years). Read from graph where nuclei = 5000; read time from x-axis.',
    keyConcepts: ['half-life from graph', '5000 nuclei = half', '420 years'],
    keywords: ['420', '410', '430', '5000', 'half', 'graph', 'read', 'years'],
    feedbackHit: 'Correct half-life reading.',
    feedbackMiss: 'Start at 10 000, find 5 000 on y-axis, draw horizontal to curve, read time. Half-life ≈ 420 years.',
  } as MSEntry,

  'q2_f': {
    marks: 1,
    exemplar: '4 half-lives: 10 000 → 5 000 → 2 500 → 1 250 → 625. Time = 4 × 420 = 1680 years (accept 1640–1720).',
    keyConcepts: ['4 half-lives to reach 625', 'time = 4 × half-life', '1680 years'],
    keywords: ['4', '1680', 'four', 'half-lives', '625'],
    feedbackHit: 'Correct — 4 half-lives needed.',
    feedbackMiss: '10 000 → 5 000 → 2 500 → 1 250 → 625 = 4 half-lives. Time = 4 × 420 = 1680 years.',
  } as MSEntry,

  'q2_g': {
    marks: 3,
    exemplar: 'Alpha particles ionize air between two plates, creating a continuous current; smoke absorbs ions, reducing current, triggering alarm. Beta/gamma have much lower ionizing power — insufficient ions to maintain the current — detector would not function.',
    keyConcepts: ['alpha ionizes air to create current', 'smoke reduces current', 'beta/gamma lower ionizing power', 'alarm would not trigger'],
    keywords: ['ionize', 'current', 'plates', 'smoke', 'absorbs', 'beta', 'gamma', 'ionizing power', 'alarm'],
    feedbackHit: 'Good explanation of ionization mechanism and why beta/gamma fails.',
    feedbackMiss: 'Alpha ionizes air → current. Smoke → reduces current → alarm. Beta/gamma: much lower ionizing power → no sufficient ionization → detector fails.',
  } as MSEntry,

  // ── Q3: Resistance Investigation (graphite rods, d=8/12/16/20/24 mm, R=128/56/32/20/14 Ω)

  'q3_a': {
    marks: 2,
    exemplar: 'If the diameter of the graphite rod increases, then the resistance will decrease, because a larger diameter provides more cross-sectional area for electrons to flow through.',
    keyConcepts: ['larger diameter → lower resistance', 'more cross-sectional area', 'more paths for electrons'],
    keywords: ['diameter', 'resistance', 'decrease', 'cross-section', 'area', 'electrons', 'paths', 'because'],
    feedbackHit: 'Good hypothesis — correct direction and scientific reasoning.',
    feedbackMiss: 'Diameter increases → resistance decreases. Reason: larger cross-section → more parallel paths for electrons.',
  } as MSEntry,

  'q3_b': {
    marks: 3,
    exemplar: 'Select 5 rods of the same graphite material only, with 5 different diameters. Award: 1 mark for one material; 1 mark for 5 different diameters; 1 mark for controlling material and length.',
    keyConcepts: ['one material only', 'five different diameters', 'material and length controlled'],
    keywords: ['one material', 'same material', '5 diameters', 'controlled', 'length', 'constant'],
    feedbackHit: 'Correct selection.',
    feedbackMiss: 'Select only ONE material, 5 different diameters. Controls material and length → only diameter varies.',
  } as MSEntry,

  'q3_c': {
    marks: 2,
    exemplar: 'One material: different materials have different resistivities, so mixing materials would make it impossible to attribute resistance changes to diameter alone. Different diameters test the research question. Length must be controlled because resistance also depends on length.',
    keyConcepts: ['one material controls resistivity', 'different diameters to test RQ', 'length controlled'],
    keywords: ['resistivity', 'material', 'confound', 'fair test', 'diameter varies', 'length constant'],
    feedbackHit: 'Good justification.',
    feedbackMiss: 'One material: prevents resistivity confound. Different diameters: tests IV. Length constant: length also affects resistance.',
  } as MSEntry,

  'q3_d': {
    marks: 4,
    exemplar: 'Table with headings "Diameter / mm" and "Resistance / Ω". Data ascending: (8, 128), (12, 56), (16, 32), (20, 20), (24, 14).\nAward: 1 mark per criterion: column headings with units; diameter values correct; resistance values correct; ascending order.',
    keyConcepts: ['column headings with units', 'Diameter / mm', 'Resistance / Ω', 'ascending order'],
    keywords: ['diameter', 'resistance', 'mm', 'Ω', '8', '128', '12', '56', '16', '32', '20', '24', '14', 'heading'],
    feedbackHit: 'Well-organised data table.',
    feedbackMiss: 'Headings: "Diameter / mm" and "Resistance / Ω". Data (8, 128), (12, 56), (16, 32), (20, 20), (24, 14). Ascending order.',
  } as MSEntry,

  'q3_e': {
    marks: 2,
    exemplar: 'More trials (repeats) allow a mean resistance to be calculated for each diameter. This reduces the effect of random errors and increases reliability.',
    keyConcepts: ['calculate mean/average', 'reduce random errors', 'increase reliability'],
    keywords: ['mean', 'average', 'repeat', 'reliability', 'random', 'error', 'reliable'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'More trials → mean value for each diameter → reduces random errors → more reliable.',
  } as MSEntry,

  'q3_f': { type: 'mcq', correct: 3 } as MCQEntry,

  'q3_g': {
    marks: 3,
    exemplar: 'RQ: How does the length of the graphite rod affect its resistance? IV: length. CV: diameter; material type. Award 1 mark each, consistent.',
    keyConcepts: ['new RQ', 'IV consistent', 'CV consistent'],
    keywords: ['length', 'material', 'research question', 'how does', 'affect', 'independent', 'control'],
    feedbackHit: 'Valid RQ, IV, and CV.',
    feedbackMiss: 'RQ = "How does length affect resistance?" IV = length. CV = diameter and material.',
  } as MSEntry,

  // ── Q4: LDR Investigation with Filter Layers as IV

  'q4_a': {
    marks: 1,
    exemplar: 'How does the number of layers of filter paper placed between the light source and the LDR affect the resistance of the LDR?',
    keyConcepts: ['number of filter layers as IV', 'resistance as DV'],
    keywords: ['layers', 'filter paper', 'resistance', 'LDR', 'how does', 'affect'],
    feedbackHit: 'Correct — clear IV (layers) and DV (resistance).',
    feedbackMiss: 'State: IV = number of filter paper layers, DV = resistance of LDR.',
  } as MSEntry,

  'q4_b': {
    marks: 13,
    exemplar: 'Top-band (11–13): IV = number of filter paper layers (0–5); DV = resistance (ohmmeter). TWO CVs with justification: distance between lamp and LDR (changing it alters light intensity, confounding results); type of filter paper (different materials transmit light differently). Equipment: lamp, LDR, ohmmeter, filter paper sheets, ruler, retort stand. Method: fix lamp and LDR at constant distance; place 0 layers of filter paper between them; record resistance; add 1 layer, record again; repeat for 0–5 layers; repeat each trial 3 times; calculate mean. Sufficient data: 6 values (0–5 layers), 3 repeats each.',
    keyConcepts: ['IV = filter layers DV = resistance', 'two CVs with justification', 'equipment list', 'detailed method', 'repeats for sufficient data'],
    keywords: ['layers', 'filter paper', 'resistance', 'LDR', 'distance', 'lamp', 'ohmmeter', 'repeat', 'mean', 'method', 'control', 'justify'],
    feedbackHit: 'Well-designed investigation with all required elements.',
    feedbackMiss: 'IV = layers of filter paper; DV = resistance. CVs (justify): distance (constant lamp-LDR distance), paper type. Method: 0→5 layers, record R, 3 repeats each, calculate mean.',
  } as MSEntry,

  // ── Q5: Same data/graphs as source

  'q5_a': {
    marks: 1,
    exemplar: '42 °C (accept 41–43 °C).',
    keyConcepts: ['read thermometer correctly', '42 °C'],
    keywords: ['42', '41', '43', '°C', 'thermometer', 'read'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Read between 30 and 40. Count small divisions. ≈42 °C.',
  } as MSEntry,

  'q5_b': {
    marks: 3,
    exemplar: 'Ammeter in series; voltmeter in parallel across resistor; complete circuit with power supply.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'complete circuit'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'battery', 'resistor'],
    feedbackHit: 'Correct circuit.',
    feedbackMiss: 'Ammeter in series; voltmeter in parallel across resistor only.',
  } as MSEntry,

  'q5_c': {
    marks: 3,
    exemplar: 'IV: Temperature. DV: Current. CV: Length, Diameter, Voltage.',
    keyConcepts: ['IV = temperature', 'DV = current', 'CV = length diameter voltage'],
    keywords: ['independent', 'temperature', 'dependent', 'current', 'control', 'length', 'diameter', 'voltage'],
    feedbackHit: 'Correct variable identification.',
    feedbackMiss: 'IV = temperature. DV = current. CV = length, diameter, voltage.',
  } as MSEntry,

  'q5_d': {
    marks: 1,
    exemplar: 'Burns from hot beads; electrical hazard (shock from live circuit).',
    keyConcepts: ['burn hazard from hot beads', 'electrical shock hazard'],
    keywords: ['burn', 'hot', 'electric shock', 'hazard'],
    feedbackHit: 'Valid safety concern.',
    feedbackMiss: 'Burns from hot beads; electrical shock from live circuit.',
  } as MSEntry,

  'q5_e': {
    marks: 2,
    exemplar: 'I × T not constant (e.g. at 20 °C: 430 × 20 = 8600; at 100 °C: 285 × 100 = 28500). Products unequal → NOT inversely proportional. Direction of decrease is correct.',
    keyConcepts: ['test inverse proportion: I × T = constant?', 'products not equal', 'not inversely proportional'],
    keywords: ['product', 'constant', 'inversely proportional', 'not', 'equal', 'calculate', 'data'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Check I × T = constant? At 20 °C: 8600; at 100 °C: 28500. Not constant → not inverse proportion.',
  } as MSEntry,

  'q5_f': {
    marks: 2,
    exemplar: 'Current at 50 °C ≈ 341 mA = 0.341 A. R = V/I = 30 / 0.341 ≈ 88 Ω (accept 84–92 Ω).',
    keyConcepts: ['R = V / I', '30 V constant', '88 Ω at 50 °C'],
    keywords: ['R = V/I', '30', '88', 'Ω', '0.341'],
    feedbackHit: 'Correct calculation.',
    feedbackMiss: 'Read I at 50 °C (≈341 mA = 0.341 A). R = 30 / 0.341 ≈ 88 Ω.',
  } as MSEntry,

  'q5_g': {
    marks: 2,
    exemplar: 'Plot (50 °C, ~88 Ω) ±1 small square. Straight LOBF through all 6 data points, not forced through origin.',
    keyConcepts: ['plot (50 °C, ~88 Ω)', 'straight line of best fit'],
    keywords: ['plot', '50', '88', 'line of best fit', 'straight'],
    feedbackHit: 'Point plotted and LOBF drawn correctly.',
    feedbackMiss: 'Plot (50 °C, your R). Draw straight LOBF through all 6 points.',
  } as MSEntry,

  'q5_h': {
    marks: 1,
    exemplar: 'Extend LOBF to 0 °C. Read resistance ≈ 60 Ω (accept 56–64 Ω).',
    keyConcepts: ['extend LOBF to 0 °C', '~60 Ω at 0 °C'],
    keywords: ['0', '60', 'extend', 'y-intercept'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'Extend LOBF to y-axis (T = 0 °C). Read resistance ≈ 60 Ω.',
  } as MSEntry,

  'q5_i': {
    marks: 2,
    exemplar: 'Two points on LOBF. Gradient = ΔR/ΔT. Approximately 0.43–0.55 Ω °C⁻¹. Unit Ω °C⁻¹ required.',
    keyConcepts: ['gradient = ΔR / ΔT', 'two points from LOBF', 'unit Ω °C⁻¹'],
    keywords: ['gradient', 'ΔR', 'ΔT', 'Ω/°C', 'slope'],
    feedbackHit: 'Correct gradient with unit.',
    feedbackMiss: 'Two points on LOBF. Gradient = (R₂−R₁)/(T₂−T₁). Unit: Ω °C⁻¹.',
  } as MSEntry,

  'q5_j': {
    marks: 2,
    exemplar: '(1) 1000 °C is far beyond data range (0–100 °C) — cannot assume linear trend continues. (2) Resistor would melt/be destroyed at 1000 °C — physically meaningless.',
    keyConcepts: ['extrapolation beyond data range', 'resistor destroyed at high temperature'],
    keywords: ['extrapolate', 'beyond', 'range', 'not valid', '1000', 'melted', 'destroyed'],
    feedbackHit: 'Good critique.',
    feedbackMiss: '(1) 1000 °C far beyond data range — linear may not continue. (2) Resistor would melt.',
  } as MSEntry,

  // ── Q6: Water Tower, Brazil (6300 m³, 45 m → W = 2.8 × 10⁹ J)

  'q6_a': {
    marks: 3,
    exemplar: 'Volume = 6 300 m³. Mass = 1000 × 6 300 = 6.3 × 10⁶ kg.\nW = 6.3 × 10⁶ × 9.81 × 45 = 2.78 × 10⁹ J ≈ 2.8 × 10⁹ J (2 s.f.).\nAward: 1 mark for mass; 1 mark for W = mgh; 1 mark for 2.8 × 10⁹ J in standard form.',
    keyConcepts: ['mass = density × volume', '6.3 × 10⁶ kg', 'W = mgh', '2.8 × 10⁹ J', 'standard form 2 s.f.'],
    keywords: ['1000', '6300', '6.3', '10⁶', 'W = mgh', '9.81', '45', '2.8', '10⁹', 'work'],
    feedbackHit: 'Correct — work ≈ 2.8 × 10⁹ J.',
    feedbackMiss: 'mass = 1000 × 6300 = 6.3 × 10⁶ kg. W = mgh = 6.3 × 10⁶ × 9.81 × 45 = 2.8 × 10⁹ J.',
  } as MSEntry,

  'q6_b': {
    marks: 1,
    exemplar: 'Time spent collecting water means less time for education/work/economic activity; physical burden; health impacts from carrying heavy loads.',
    keyConcepts: ['time lost from education or work', 'physical health burden', 'economic productivity lost'],
    keywords: ['time', 'education', 'work', 'economic', 'burden', 'health', 'productivity'],
    feedbackHit: 'Valid barrier identified.',
    feedbackMiss: 'Collecting water takes hours per day → less time for education, work, or economic activity.',
  } as MSEntry,

  'q6_c': {
    marks: 9,
    exemplar: 'Top-band: Health — reduced disease (cholera, typhoid), fewer deaths, improved wellbeing. Ethics of fee — advantage: funds maintenance, sustainable ownership; disadvantage: excludes poorest, conflicts with universal access. Conclusion — provide pump; small fee justified with subsidies for very poor.',
    keyConcepts: ['health benefit of clean water', 'ethical advantage of fee', 'ethical disadvantage of fee', 'concluding appraisal'],
    keywords: ['disease', 'health', 'death', 'fee', 'maintain', 'ethical', 'poor', 'access', 'conclude', 'long-term'],
    feedbackHit: 'Well-structured — health, ethics, conclusion all addressed.',
    feedbackMiss: '(1) Health: fewer disease deaths. (2) Fee advantage: maintenance funding; disadvantage: excludes poor. (3) Conclusion: pump + fee with subsidies for very poor.',
  } as MSEntry,

  // ── Q7: SODIS (same as source)

  'q7_a': { type: 'mcq', correct: 1 } as MCQEntry,

  'q7_b': {
    marks: 1,
    exemplar: 'UV waves have high energy (high frequency / short wavelength) that enables them to damage the DNA of microorganisms, killing them.',
    keyConcepts: ['UV high energy', 'damages DNA', 'kills microorganisms'],
    keywords: ['energy', 'frequency', 'DNA', 'kill', 'microbe', 'damage'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'UV high energy → damages DNA of microbes → kills them.',
  } as MSEntry,

  'q7_c': {
    marks: 11,
    exemplar: 'Top-band: Climate — equatorial countries ≥8h sun (ideal); cloudy/high-altitude LEDCs need 2 days (less reliable). Health — kills microbes causing cholera, typhoid; reduces child mortality. Challenges — plastic bottles needed; 8h treatment; weather dependent; community education; small volumes only. Conclusion — suitable near equator; limited in cloudy regions; useful interim low-cost solution.',
    keyConcepts: ['equatorial climate suitable', 'cloudy less suitable', 'reduces waterborne disease', 'implementation challenges', 'concluding appraisal'],
    keywords: ['equator', 'climate', 'sunny', 'cloud', 'health', 'disease', 'bottle', 'challenge', 'implement', 'conclude', 'suitable'],
    feedbackHit: 'Well-structured evaluation with climate, health, challenges, and conclusion.',
    feedbackMiss: '(1) Climate: equatorial (good), cloudy (2 days). (2) Health: kills microbes. (3) Challenges: bottles, 8h, weather, education. (4) Conclusion: suitable near equator, limited elsewhere.',
  } as MSEntry,

}
