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

  // ── Q1: Work, Energy & Power ────────────────────────────────
  'q1a': {
    marks: 2,
    exemplar: 'Speed = distance ÷ time = 4 ÷ (55/60) = 4 ÷ 0.917 = 4.36 km h⁻¹ ≈ 4.4 km h⁻¹. Award 1 mark for using speed = distance/time (seen or implied); 1 mark for correct final answer to 2+ s.f.',
    keyConcepts: ['speed = distance ÷ time', 'converting minutes to hours for consistent units'],
    keywords: ['speed', 'distance', 'time', 'km/h', 'unit conversion'],
    feedbackHit: 'Correctly calculated speed and converted units.',
    feedbackMiss: 'Remember: time must be in hours if speed is in km/h. Convert 55 minutes to hours: 55/60 = 0.917 h. Then speed = 4 ÷ 0.917.',
  },

  'q1b': {
    type: 'mcq',
    correct: 2, // C. energy transformed = power × time (index 2)
  } as MCQEntry,

  'q1c': {
    marks: 2,
    exemplar: 'Horse A weight = 350 × 9.8 = 3430 N. Horse B mass = 4704 ÷ 9.8 = 480 kg. Award 1 mark each.',
    keyConcepts: ['weight = mass × g', 'mass = weight ÷ g'],
    keywords: ['weight', 'mass', 'g', '9.8', 'Newton'],
    feedbackHit: 'Correctly calculated weight and mass using W = mg.',
    feedbackMiss: 'Weight = mass × g. To find mass from weight: mass = weight ÷ g = 4704 ÷ 9.8.',
  },

  'q1d': {
    marks: 1,
    exemplar: 'Chemical potential energy → Kinetic energy → Gravitational potential energy. Both end terms must be correct for the mark.',
    keyConcepts: ['energy transformation chain: chemical → kinetic → gravitational potential'],
    keywords: ['chemical potential energy', 'kinetic energy', 'gravitational potential energy', 'energy transformation'],
    feedbackHit: 'Correctly identified the energy transformation sequence.',
    feedbackMiss: 'The horse starts with chemical potential energy (from food). This converts to kinetic energy as it runs. At the top of the hill, kinetic energy is converted to gravitational potential energy.',
  },

  'q1e': {
    marks: 3,
    exemplar: 'Work done = ΔEp = mgΔh = 480 × 9.8 × 14 = 65856 J. Power = work ÷ time = 65856 ÷ 6.2 = 10621 W = 10.62 kW. Award 3 marks for correct answer to 2+ s.f. using ecf from part (c).',
    keyConcepts: ['work done = mgh', 'power = work done ÷ time', 'converting W to kW'],
    keywords: ['ΔEp', 'mgh', 'power', 'work done', 'time', 'kW'],
    feedbackHit: 'Correctly calculated work done and power, with unit conversion to kW.',
    feedbackMiss: 'Two steps: (1) Work = ΔEp = mgh — use mass from part (c), g=9.8, h=14 m. (2) Power = Work ÷ time = ... ÷ 6.2 s. Convert W to kW by dividing by 1000.',
  },

  'q1f': {
    marks: 2,
    exemplar: 'Power = 2.0 × 746 = 1492 W. I = P ÷ V = 1492 ÷ 230 = 6.49 A ≈ 6.5 A. Award 1 mark for I = P/V (seen or implied); 1 mark for correct answer to 2+ s.f.',
    keyConcepts: ['P = IV therefore I = P/V', 'converting horsepower to watts'],
    keywords: ['current', 'power', 'voltage', 'I = P/V', 'horsepower', 'watts'],
    feedbackHit: 'Correctly converted hp to W and calculated current using I = P/V.',
    feedbackMiss: 'First convert power: 2.0 hp × 746 W/hp = 1492 W. Then use I = P ÷ V = 1492 ÷ 230.',
  },

  // ── Q2: Light & EM Waves ────────────────────────────────────
  'q2a': {
    type: 'mcq',
    correct: 3, // D. Dispersion (index 3)
  } as MCQEntry,

  'q2b': {
    marks: 3,
    exemplar: 'Red light has the longest wavelength or lowest frequency of the visible colours. Red light is refracted the least (of the colours). Red light is the fastest / has the lowest refractive index / is slowed down the least in the glass. Award 1 mark per correct point (max 3).',
    keyConcepts: ['red has longest wavelength and lowest frequency', 'refraction amount depends on wavelength', 'longer wavelength → less refraction → top of spectrum'],
    keywords: ['red light', 'longest wavelength', 'lowest frequency', 'refracted least', 'refractive index', 'prism'],
    feedbackHit: 'Good explanation linking red light\'s wavelength/frequency to its position at the top.',
    feedbackMiss: 'Three points needed: (1) red has longest wavelength / lowest frequency; (2) therefore refracted least; (3) so it is bent least and appears at the top/outside of the spectrum.',
  },

  'q2c': {
    marks: 1,
    exemplar: 'Any one: IR has a longer wavelength than red light / IR has a lower frequency than red light / IR is detectable as heat / IR is beyond the visible spectrum. Do not accept "IR is invisible" alone without linking to the EM spectrum.',
    keyConcepts: ['infrared has longer wavelength and lower frequency than red light'],
    keywords: ['infrared', 'longer wavelength', 'lower frequency', 'heat', 'invisible'],
    feedbackHit: 'Stated a valid difference between IR and red light.',
    feedbackMiss: 'Think about the properties of waves: wavelength, frequency, energy, or how we detect them. IR has a longer wavelength than red light and can be detected as heat.',
  },

  'q2d': {
    marks: 2,
    exemplar: 'f = v ÷ λ = (3.00 × 10⁸) ÷ (680 × 10⁻⁹) = (3.00 × 10⁸) ÷ (6.80 × 10⁻⁷) = 4.41 × 10¹⁴ Hz. Award 1 mark for f = v/λ (seen or implied); 1 mark for correct answer in scientific notation.',
    keyConcepts: ['wave equation: f = v/λ', 'converting nm to m (× 10⁻⁹)', 'scientific notation'],
    keywords: ['frequency', 'wavelength', 'f = v/λ', 'nm to m', '10⁻⁹', 'scientific notation', 'Hz'],
    feedbackHit: 'Correctly applied the wave equation and converted units.',
    feedbackMiss: 'Formula: f = v ÷ λ. Convert wavelength: 680 nm = 680 × 10⁻⁹ m = 6.80 × 10⁻⁷ m. Then f = (3.00 × 10⁸) ÷ (6.80 × 10⁻⁷).',
  },

  // ── Q3: Atomic Physics ──────────────────────────────────────
  'q3a': {
    marks: 2,
    exemplar: 'Atomic number = 6 (number of protons). Mass number = 14 (protons + neutrons = 6 + 8). Award 1 mark each.',
    keyConcepts: ['atomic number = number of protons', 'mass number = protons + neutrons'],
    keywords: ['atomic number', 'mass number', 'protons', 'neutrons', 'carbon-14'],
    feedbackHit: 'Correctly stated atomic number and mass number.',
    feedbackMiss: 'Atomic number = number of protons = 6. Mass number = total number of protons + neutrons = 6 + 8 = 14.',
  },

  'q3b': {
    marks: 2,
    exemplar: 'Similarity (1 mark): same number of protons / same positive charge on the nucleus. Difference (1 mark): different number of neutrons (C-12 has 6, C-14 has 8) / C-14 has more nucleons / C-14 nucleus is unstable but C-12 is stable. Do NOT accept "same atomic number" or "both are carbon nuclei" as similarity.',
    keyConcepts: ['isotopes have same proton number but different neutron number', 'stability of nuclei'],
    keywords: ['protons', 'neutrons', 'isotope', 'nucleons', 'stable', 'unstable', 'carbon-12', 'carbon-14'],
    feedbackHit: 'Stated a valid similarity and difference between C-12 and C-14 nuclei.',
    feedbackMiss: 'Similarity: both have 6 protons (same atomic number). Difference: different neutron numbers (6 vs 8). Do not say "same atomic number" — state what that means physically (same number of protons/same charge).',
  },

  'q3c': {
    marks: 2,
    exemplar: 'Gamma ray placed at nucleus (produced from nucleus of atom); X-ray placed at inner electron orbit (produced from inner orbit of electrons). Award 1 mark each for correct placement.',
    keyConcepts: ['gamma rays originate from the nucleus', 'X-rays originate from inner electron shells'],
    keywords: ['gamma ray', 'nucleus', 'X-ray', 'inner electrons', 'electromagnetic radiation'],
    feedbackHit: 'Correctly placed gamma ray at nucleus and X-ray at inner electron orbit.',
    feedbackMiss: 'Gamma rays are produced when a nucleus loses excess energy (nuclear decay). X-rays are produced when electrons in inner shells are displaced and fall back — releasing EM radiation.',
  },

  'q3d': {
    marks: 2,
    exemplar: 'Equation 1: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂α (alpha particle is ⁴₂He / ⁴₂α). Equation 2: ²³²₉₀Th → ²³²₉₁Pa + ⁰₋₁β (protactinium-232 with atomic number 91). Award 1 mark per correct completed equation.',
    keyConcepts: ['conservation of mass number in nuclear decay', 'conservation of atomic number in nuclear decay', 'alpha decay reduces mass by 4 and atomic number by 2', 'beta decay increases atomic number by 1'],
    keywords: ['alpha decay', 'beta decay', 'conservation', 'mass number', 'atomic number', 'thorium', 'protactinium'],
    feedbackHit: 'Correctly completed both nuclear decay equations.',
    feedbackMiss: 'Key rules: In alpha decay, mass number decreases by 4, atomic number by 2. In beta decay, mass number stays the same, atomic number increases by 1 (a neutron converts to a proton + beta particle).',
  },

  'q3e': {
    marks: 1,
    exemplar: 'A neutron is absorbed by the nucleus of uranium-238 (to form uranium-239).',
    keyConcepts: ['neutron absorption / neutron capture'],
    keywords: ['neutron', 'absorbed', 'nucleus', 'uranium-238', 'uranium-239'],
    feedbackHit: 'Correctly identified neutron absorption.',
    feedbackMiss: 'Look at the equation: a neutron (¹₀n) is added to a uranium-238 nucleus to give uranium-239. The mass number increases by 1, atomic number stays at 92. This is neutron capture/absorption.',
  },

  // ── Q4: Ideal Gas / Boyle's Law ─────────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'A valid research question linking mass (or weight or pressure) and volume. Example: "How does the mass added to the plunger affect the volume of air in the syringe?" Must identify an IV and DV.',
    keyConcepts: ['research question links independent to dependent variable'],
    keywords: ['mass', 'volume', 'pressure', 'research question', 'syringe'],
    feedbackHit: 'Good research question linking IV (mass/pressure) to DV (volume).',
    feedbackMiss: 'Format: "How does [IV] affect [DV]?" The IV is the mass added (which changes pressure) and the DV is the volume of air.',
  },

  'q4b': {
    marks: 2,
    exemplar: 'Independent: mass added to plunger only. Dependent: volume of air only. Award 1 mark each. Temperature and amount of air are both control variables.',
    keyConcepts: ['independent variable is what the experimenter changes', 'dependent variable is what is measured'],
    keywords: ['independent', 'dependent', 'control', 'mass', 'volume', 'temperature'],
    feedbackHit: 'Correctly identified IV (mass added) and DV (volume of air).',
    feedbackMiss: 'The student changes the mass on the plunger (IV). The result measured is the volume of air (DV). Temperature and amount of air are kept the same — they are control variables.',
  },

  'q4c': {
    type: 'mcq',
    correct: 0, // increase
  } as MCQEntry,

  'q4d': {
    marks: 3,
    exemplar: 'F = mg = 1.4 × 9.81 = 13.734 N. Increase in pressure = F/A = 13.734 ÷ (8.2 × 10⁻⁴) = 16748 Pa. Total pressure = 16748 + 101300 = 118048 Pa ≈ 1.18 × 10⁵ Pa. Award marks: (1) correct formula F/A; (2) correct pressure increase; (3) correct total pressure to 2+ s.f.',
    keyConcepts: ['pressure = force ÷ area', 'total pressure = atmospheric + added pressure', 'F = mg'],
    keywords: ['P = F/A', 'atmospheric pressure', 'total pressure', 'Newton', 'mass', 'area'],
    feedbackHit: 'Correctly calculated the added pressure and total pressure.',
    feedbackMiss: 'Three steps: (1) F = mg = 1.4 × 9.81; (2) P_extra = F/A = that force ÷ 8.2×10⁻⁴; (3) P_total = P_extra + atmospheric pressure (101300 Pa).',
  },

  'q4e': {
    marks: 2,
    exemplar: 'As pressure increases, volume decreases (inverse relationship). Must include: (1) statement that it is an inverse relationship; (2) additional detail: pressure is inversely proportional to volume / when pressure doubles, volume halves / V ∝ 1/P.',
    keyConcepts: ['inverse relationship between pressure and volume at constant temperature', 'Boyle\'s law: P ∝ 1/V'],
    keywords: ['inverse', 'pressure', 'volume', 'increases', 'decreases', 'inversely proportional'],
    feedbackHit: 'Correctly described the inverse relationship between P and V.',
    feedbackMiss: 'Use BOTH graphs: the V vs P graph shows a curve (inverse); the ΔV/mass vs P graph gives more detail. State the relationship explicitly: as P increases, V decreases in an inverse relationship.',
  },

  'q4f': {
    marks: 2,
    exemplar: 'The graph approximately supports Boyle\'s law because the pV values are roughly constant / the line is approximately horizontal. However, there is a slight slope/variation, so the graph does not perfectly support Boyle\'s law. Must reference the graph for the first mark point.',
    keyConcepts: ['Boyle\'s law: pV = constant at constant temperature', 'evaluating experimental data against a law'],
    keywords: ['pV constant', 'Boyle\'s law', 'approximately', 'experimental error', 'horizontal', 'justify'],
    feedbackHit: 'Good evaluation — referenced the graph and noted both support and deviation.',
    feedbackMiss: 'Two marks: (1) state whether the graph supports Boyle\'s law with reference to the graph; (2) justify with specific detail (e.g. "pV values cluster around 11000 kPa·cm³ but are not perfectly constant").',
  },

  'q4g': {
    marks: 2,
    exemplar: 'From the pV graph, read off the approximately constant pV value (≈ 11000 kPa·cm³). V = pV ÷ P = 11000 ÷ 75 ≈ 147 cm³. Accept answers in range 140–150 cm³. Award unit mark independently.',
    keyConcepts: ['using pV = constant to find V at a new pressure', 'reading pV value from graph'],
    keywords: ['pV = constant', 'volume', '75 kPa', 'graph reading', 'cm³'],
    feedbackHit: 'Correctly read the pV constant from the graph and calculated volume.',
    feedbackMiss: 'Read the approximately constant pV value from the graph. Then rearrange: V = pV ÷ P = (constant from graph) ÷ 75 kPa. Remember to include units (cm³ or m³).',
  },

  // ── Q5: Balloon Temperature Investigation ───────────────────
  'q5a': {
    marks: 3,
    exemplar: '(1) As temperature increases, the kinetic energy or speed of gas particles increases. (2) The number or force of collisions between gas particles and balloon wall increases. (3) The balloon expands because the wall is pushed out by the pressure of the gas / kinetic energy transferred to elastic potential energy.',
    keyConcepts: ['temperature increase → kinetic energy increase', 'more/harder collisions → increased pressure', 'increased pressure → balloon expands'],
    keywords: ['kinetic energy', 'temperature', 'collisions', 'frequency', 'force', 'pressure', 'expand'],
    feedbackHit: 'Good kinetic theory explanation with all three steps.',
    feedbackMiss: 'Three steps needed: (1) temperature ↑ → KE of particles ↑; (2) more/harder collisions with balloon wall → pressure ↑; (3) higher pressure pushes the elastic wall outward → balloon expands.',
  },

  'q5b': {
    marks: 14,
    exemplar: 'Full marks rubric (4 columns × 5 rows): Variables (V): RQ correctly links temperature to volume/circumference; IV = temperature; DV = circumference; 1 CV stated. Equipment (E): equipment to measure temperature and circumference. Method (M): complete method with measurements and repeated at 5+ temperatures. Data (D): at least 5 temperature increments and 3 trials each. Safety (S): relevant safety concern (hot water/oven) stated.',
    keyConcepts: ['investigation design: RQ, IV, DV, CV, method, safety', 'measuring circumference as proxy for volume'],
    keywords: ['research question', 'temperature', 'circumference', 'oven', 'tape measure', 'repeated trials', 'safety', 'control variable'],
    feedbackHit: 'Well-planned investigation with clear variables, detailed method, sufficient data plan and safety note.',
    feedbackMiss: 'Check all five components: (1) clear RQ linking temperature to circumference; (2) IV, DV and at least one justified CV; (3) equipment list including oven/water bath + measuring tape; (4) at least 5 temperature values with 3 repeats; (5) safety precaution for hot water/equipment.',
  },

  // ── Q6: Balloon Rocket ──────────────────────────────────────
  'q6a': {
    marks: 3,
    exemplar: '(1) Acceleration is due to an unbalanced force / Newton\'s second law: F = ma. (2) The expulsion of gas and the thrust on the balloon are paired forces / Newton\'s 3rd law: forces are an action-reaction pair. (3) Newton\'s 3rd law: balloon pushes air backwards; air pushes balloon forwards with equal and opposite force.',
    keyConcepts: ['Newton\'s 2nd law: F = ma — net force causes acceleration', 'Newton\'s 3rd law: action-reaction pairs (thrust and expelled gas)'],
    keywords: ['Newton\'s second law', 'Newton\'s third law', 'F = ma', 'action-reaction', 'thrust', 'expelled gas', 'unbalanced force'],
    feedbackHit: 'Correctly applied both Newton\'s 2nd and 3rd law to the balloon rocket.',
    feedbackMiss: 'Need three points: (1) Newton\'s 2nd — unbalanced/net force causes acceleration; (2) Newton\'s 3rd — expelled air and thrust are an action-reaction pair; (3) describe the direction: air goes back, balloon goes forward.',
  },

  'q6b': {
    marks: 1,
    exemplar: 'An RQ correctly linking circumference or volume with distance travelled. Example: "How does the circumference of a balloon affect the distance it travels along a string?"',
    keyConcepts: ['research question links IV (circumference) to DV (distance)'],
    keywords: ['circumference', 'volume', 'distance travelled', 'research question'],
    feedbackHit: 'Good research question linking circumference to distance.',
    feedbackMiss: 'Format: "How does [circumference/volume] affect [distance travelled]?"',
  },

  'q6c': {
    marks: 1,
    exemplar: 'Circumference = π × d = π × 12.2 = 38.3 cm. Accept 38.2–38.4 cm. Unit required.',
    keyConcepts: ['circumference of a circle = πd'],
    keywords: ['circumference', 'π', 'diameter', 'cm'],
    feedbackHit: 'Correctly calculated circumference using C = πd.',
    feedbackMiss: 'Circumference = π × diameter = π × 12.2. Remember to include the unit (cm).',
  },

  'q6d': {
    marks: 4,
    exemplar: 'Table: Circumference / cm | Distance travelled / m. Data in ascending order: 35.8/1.07, 38.3/1.30, 41.0/1.97, 50.3/3.10, 54.9/3.99, 58.2/5.06. Award 1 mark each for: ascending/descending order; correct headers with units; units only in headers; numbers to consistent dp.',
    keyConcepts: ['data table formatting: units in headers, consistent decimal places', 'including own calculated data point from part (c)'],
    keywords: ['table', 'ascending order', 'column headers', 'units', 'circumference', 'distance'],
    feedbackHit: 'Correctly organised data with proper headers, units in headers, and ascending order including the part (c) value.',
    feedbackMiss: 'Four marks: (1) data in order; (2) headers correct (Circumference/cm, Distance/m); (3) units only in header row; (4) values to consistent decimal places. Also include the 38.3 cm value from part (c).',
  },

  'q6e': {
    marks: 3,
    exemplar: 'The graphs show that as circumference increases, distance increases (positive relationship). The directly proportional prediction (hypothesis) is not supported because Graph A is not a straight line through the origin. Graph C (distance vs circumference³) is a straight line through the origin, showing distance ∝ circumference³. The hypothesis is therefore only partially valid — the direction is correct but the relationship is not directly proportional.',
    keyConcepts: ['evaluating hypotheses against experimental data', 'proportional vs non-proportional relationships', 'linearising data (cubing the IV to get straight line)'],
    keywords: ['directly proportional', 'hypothesis', 'circumference cubed', 'Graph C', 'straight line', 'origin'],
    feedbackHit: 'Good evaluation — identified the correct graph and evaluated hypothesis validity.',
    feedbackMiss: 'Three marks: (1) as circumference increases, distance increases; (2) NOT directly proportional — graph A is curved; (3) Graph C shows distance ∝ circumference³ → hypothesis is only partially valid.',
  },

  'q6f': {
    marks: 3,
    exemplar: 'IV (1 mark): any reasonable variable e.g. temperature of gas / type of gas / shape of balloon. Two CVs relevant to chosen IV (2 marks): e.g. length of straw on balloon; angle of string; initial circumference/volume of balloon; elasticity of balloon.',
    keyConcepts: ['extending investigations by choosing a new independent variable', 'control variables must be relevant to the new IV'],
    keywords: ['independent variable', 'control variable', 'extension', 'temperature', 'circumference', 'straw', 'angle'],
    feedbackHit: 'Suggested a valid IV and two relevant CVs.',
    feedbackMiss: 'Choose an IV that is different from the original (not circumference). Then identify what you would need to keep the same to make it a fair test — these are your CVs. They must be consistent with the IV and DV you chose.',
  },

  'q6g': {
    marks: 2,
    exemplar: 'A valid hypothesis linking the chosen IV to distance travelled. Must include: "If [IV] increases/decreases, then distance will increase/decrease because [scientific reasoning]." Award 1 mark for direction, 1 mark for scientific explanation.',
    keyConcepts: ['formulating a hypothesis with direction and scientific reasoning'],
    keywords: ['if...then', 'hypothesis', 'scientific reasoning', 'independent variable', 'distance'],
    feedbackHit: 'Well-formulated hypothesis with direction and scientific reasoning.',
    feedbackMiss: 'A good hypothesis has two parts: (1) direction — "If X increases, distance will..."; (2) reasoning — "because..." with a link to physics (force, energy, pressure).',
  },

  // ── Q7: Waves & Radio Communication ────────────────────────
  'q7a': {
    marks: 3,
    exemplar: 'Read period from graph: T ≈ 1.7 s (accept 1.6–1.8 s). Frequency f = 1/T ≈ 0.59 Hz (accept 0.56–0.63 Hz). Must be expressed to 2 s.f. Unit mark (Hz or s⁻¹) awarded independently.',
    keyConcepts: ['period = time for one complete cycle, read from graph', 'frequency = 1/period'],
    keywords: ['period', 'frequency', 'f = 1/T', 'Hz', 'graph reading', '2 significant figures'],
    feedbackHit: 'Correctly read period from graph and calculated frequency with correct unit.',
    feedbackMiss: 'Read one complete wave cycle from the graph to get the period T (in seconds). Then f = 1/T. Give to 2 s.f. and include the unit Hz.',
  },

  'q7b': {
    type: 'mcq',
    correct: 2, // C (index 2)
  } as MCQEntry,

  'q7c': {
    marks: 1,
    exemplar: 'All four steps in the correct order: (1) Pedro\'s voice → electrical signal → radio wave; (2) radio wave transmitted to Tower A; (3) Tower A → fibre-optic/wire → Tower B (signal converted again); (4) Natasha\'s phone receives radio wave → converts to sound. Award 1 mark for all correct.',
    keyConcepts: ['sequence of signal conversion in mobile phone communication'],
    keywords: ['microphone', 'electrical signal', 'radio wave', 'cell tower', 'fibre optic', 'convert', 'sound wave'],
    feedbackHit: 'Correctly ordered all four steps in mobile phone communication.',
    feedbackMiss: 'Follow the signal: voice → electrical → radio wave (in phone) → tower A → cable → tower B → radio wave again → Natasha\'s phone → sound.',
  },

  'q7d': {
    marks: 13,
    exemplar: 'Full mark scheme uses a 4-column rubric:\n\nAdvantages/disadvantages for individual (max 4): statement of one advantage and one disadvantage (col 1); one advantage AND one disadvantage (col 2); more than one of each (col 3); at least two advantages AND two disadvantages each with support (col 4).\n\nEconomic benefits for company (max 1): any economic benefit (e.g. targeted advertising, selling data).\n\nSecurity (max 4): positive security implication for country (e.g. tracking criminals); negative implication (e.g. government surveillance); both with support.\n\nConclusion/appraisal (max 4): concluding opinion with appraisal linking previous arguments.',
    keyConcepts: ['advantages and disadvantages of location tracking', 'economic implications for companies', 'security vs privacy trade-off', 'balanced evaluation and appraisal'],
    keywords: ['location tracking', 'privacy', 'surveillance', 'economic benefit', 'data protection', 'security', 'appraisal'],
    feedbackHit: 'Strong evaluation covering individual impacts, economic benefits, security implications and a justified conclusion.',
    feedbackMiss: 'Check four components: (1) multiple advantages AND disadvantages for individuals with support; (2) economic benefit for a company; (3) positive AND negative security implications; (4) a conclusion that appraises all the points made.',
  },

  // ── Q8: Controlling Scientific Information ──────────────────
  'q8a': {
    marks: 8,
    exemplar: 'Rubric with three criteria:\n\nBenefits of controlling (max 3): (1) a statement of a benefit; (2) two or more benefits OR one benefit with explanation; (3) two or more benefits with at least one explained.\n\nLimitations of controlling (max 3): (1) a statement of a limitation; (2) two or more OR one with explanation; (3) two or more with at least one explained.\n\nConclusion (max 2): (1) a simple conclusion; (2) a conclusion with detailed appraisal.',
    keyConcepts: ['benefits and limitations of censoring scientific misinformation', 'freedom of speech vs accuracy', 'who decides what is correct science'],
    keywords: ['misinformation', 'censorship', 'accuracy', 'freedom of speech', 'scientific consensus', 'limitation', 'benefit', 'conclusion'],
    feedbackHit: 'Balanced response with multiple benefits, multiple limitations and a justified conclusion.',
    feedbackMiss: 'You need: (1) at least two benefits of controlling misinformation — each explained; (2) at least two limitations — each explained; (3) a conclusion that takes a position and justifies it by referring back to your arguments.',
  },
}
