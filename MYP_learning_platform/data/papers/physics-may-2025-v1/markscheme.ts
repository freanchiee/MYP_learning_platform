import 'server-only'

type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

type MCQEntry = {
  type: 'mcq'
  correct: number
}

type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1 Defibrillators ────────────────────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Electrons',
    keyConcepts: ['electric charge', 'current'],
    keywords: ['electrons', 'charge', 'current'],
    feedbackHit: 'Correct — free electrons are the charge carriers in a metal conductor.',
    feedbackMiss: 'Electrons are the mobile charge carriers in metals. Protons are fixed in the nucleus; atoms and neutrons carry no net charge.',
  },

  'q1_b': {
    marks: 3,
    exemplar: 'E = V × I × t\nRearranging: I = E / (V × t)\nI = 120 / (400 × 0.050)\nI = 120 / 20\nI = 6.0 A',
    keyConcepts: ['electrical energy', 'current', 'potential difference'],
    keywords: ['current', 'energy', 'voltage', 'time'],
    feedbackHit: 'Excellent — correct formula, unit conversion (50 ms → 0.050 s), and clean division.',
    feedbackMiss: 'Start with E = VIt and rearrange for I. Remember to convert 50 ms to 0.050 s before substituting.',
  },

  'q1_c': {
    marks: 1,
    exemplar: 'The gel reduces the electrical resistance / improves electrical contact between the plates and skin, allowing more current to flow through the patient.',
    keyConcepts: ['resistance', 'electrical contact'],
    keywords: ['resistance', 'contact', 'current', 'gel'],
    feedbackHit: 'Good — linking gel to reduced resistance / better contact earns the mark.',
    feedbackMiss: 'Think about what high skin resistance would do to the current. Gel lowers resistance so more current reaches the heart.',
  },

  'q1_d': {
    marks: 2,
    exemplar: 'Adhesive pads: Can be applied in advance so the defibrillator can be used immediately / hands-free operation allows CPR to continue / pads stay in place automatically.\nInsulating handles: The doctor is protected from electric shock as handles prevent current flowing through their body.',
    keyConcepts: ['electrical safety', 'insulation'],
    keywords: ['adhesive', 'hands-free', 'insulating', 'protection', 'electric shock'],
    feedbackHit: 'Well done — one distinct advantage identified for each type.',
    feedbackMiss: 'For adhesive pads think about convenience/speed; for insulating handles think about electrical safety for the operator.',
  },

  // ── Q2 Refraction of Light ───────────────────────────────────────
  'q2_a': {
    marks: 3,
    exemplar: 'f = v / λ\nλ = 530 nm = 530 × 10⁻⁹ m = 5.30 × 10⁻⁷ m\nf = 3.0 × 10⁸ / 5.30 × 10⁻⁷\nf = 5.66 × 10¹⁴ Hz ≈ 5.7 × 10¹⁴ Hz',
    keyConcepts: ['wave speed', 'frequency', 'wavelength'],
    keywords: ['frequency', 'wavelength', 'speed of light'],
    feedbackHit: 'Correct — formula, nm → m conversion, and answer to 2 s.f. with unit.',
    feedbackMiss: 'Use f = v/λ. Convert 530 nm to metres (× 10⁻⁹) first. Express answer in Hz to 2 s.f.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Red / orange / yellow (any colour with wavelength > 530 nm)',
    keyConcepts: ['visible spectrum', 'wavelength'],
    keywords: ['wavelength', 'red', 'orange', 'yellow'],
    feedbackHit: 'Correct — red, orange, or yellow all have longer wavelengths than green (530 nm).',
    feedbackMiss: 'In the visible spectrum, red has the longest wavelength (~700 nm) and violet the shortest. Any colour redder than green is correct.',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Frequency',
    keyConcepts: ['refraction', 'wave properties'],
    keywords: ['frequency', 'constant', 'refraction'],
    feedbackHit: 'Correct — frequency is determined by the source and remains constant regardless of the medium.',
    feedbackMiss: 'When light crosses a boundary, its speed and wavelength change, but the frequency (set by the source) remains unchanged.',
  },

  'q2_d': {
    marks: 3,
    exemplar: 'Light from the coin travels from water into air at an angle to the normal. At the boundary, the light bends away from the normal (it speeds up). The person\'s brain assumes light travels in a straight line, so it traces the refracted ray back to an apparent position that is closer to the surface than the actual coin / the coin appears shallower than it really is.',
    keyConcepts: ['refraction', 'apparent depth', 'normal'],
    keywords: ['refraction', 'bending', 'apparent position', 'normal', 'interface'],
    feedbackHit: 'Excellent — direction of bending, reason (speed change), and apparent position all addressed.',
    feedbackMiss: 'Describe: (1) light bends away from normal at water→air boundary; (2) brain assumes straight-line travel; (3) apparent position differs from real position.',
  },

  'q2_e': {
    marks: 2,
    exemplar: 'A diverging lens spreads the incoming light rays outward before they enter the eye. This moves the focal point back / further from the lens, so the image forms on the retina rather than in front of it.',
    keyConcepts: ['diverging lens', 'focal point', 'short-sightedness'],
    keywords: ['diverging', 'focal point', 'retina', 'spread'],
    feedbackHit: 'Good — diverging action and shift of focal point onto retina explained.',
    feedbackMiss: 'Explain that the diverging lens makes rays less convergent, shifting the focal point posteriorly onto the retina.',
  },

  // ── Q3 Nuclear Fission ───────────────────────────────────────────
  'q3_a': {
    marks: 1,
    exemplar: 'Burning fossil fuels releases carbon dioxide / greenhouse gases, contributing to global warming / climate change. OR Fossil fuels are a non-renewable resource that will eventually run out.',
    keyConcepts: ['fossil fuels', 'climate change', 'non-renewable resources'],
    keywords: ['carbon dioxide', 'greenhouse gas', 'non-renewable', 'climate change'],
    feedbackHit: 'Correct — either environmental or resource-depletion argument gains the mark.',
    feedbackMiss: 'State one specific problem: CO₂ emissions → global warming, or finite supply → energy security.',
  },

  'q3_b': {
    marks: 1,
    exemplar: 'U-236 has one more neutron than U-235 (both have 92 protons).',
    keyConcepts: ['atomic structure', 'isotopes', 'nucleon number'],
    keywords: ['neutron', 'isotope', 'nucleon number'],
    feedbackHit: 'Correct — isotopes differ only in neutron number.',
    feedbackMiss: 'Both U-235 and U-236 have 92 protons. The difference is that U-236 has one extra neutron (143 vs 142).',
  },

  'q3_c': {
    marks: 1,
    exemplar: '4 neutrons\n(Check: 135 + 97 + 4 = 236 ✓; protons 52 + 40 = 92 ✓)',
    keyConcepts: ['conservation of mass number', 'conservation of atomic number', 'nuclear equations'],
    keywords: ['neutrons', 'mass number', 'atomic number', 'conservation'],
    feedbackHit: 'Correct — balancing both mass number (236) and atomic number (92) gives 4 neutrons.',
    feedbackMiss: 'Balance the equation: mass numbers 136 + 97 + ? = 236, so ? = 4. Also check proton numbers sum to 92.',
  },

  'q3_d': {
    marks: 2,
    exemplar: 'E = mc²\nm = E / c²\nm = 2.4 × 10⁻¹¹ / (3.0 × 10⁸)²\nm = 2.4 × 10⁻¹¹ / 9.0 × 10¹⁶\nm = 2.67 × 10⁻²⁸ kg ≈ 2.7 × 10⁻²⁸ kg',
    keyConcepts: ['mass-energy equivalence', 'nuclear energy'],
    keywords: ['mass defect', 'E=mc²', 'energy', 'mass'],
    feedbackHit: 'Excellent — formula rearranged correctly, c² computed, and answer in kg to 2 s.f.',
    feedbackMiss: 'Rearrange E = mc² to give m = E/c². Substitute E = 2.4 × 10⁻¹¹ J and c = 3.0 × 10⁸ m s⁻¹.',
  },

  'q3_e': {
    marks: 2,
    exemplar: 'n = total energy / energy per fission\nn = 12.3 × 10⁹ J / 2.4 × 10⁻¹¹ J\nn = 12.3/2.4 × 10²⁰\nn = 5.125 × 10²⁰ ≈ 5.1 × 10²⁰ fissions',
    keyConcepts: ['energy calculations', 'nuclear energy'],
    keywords: ['fission', 'number of reactions', 'energy per fission'],
    feedbackHit: 'Well done — correct division with proper powers of ten.',
    feedbackMiss: 'Convert 12.3 GJ to 12.3 × 10⁹ J, then divide by 2.4 × 10⁻¹¹ J per fission.',
  },

  'q3_f': {
    marks: 2,
    exemplar: 'efficiency = useful power output / total power input\n0.40 = 2.0 × 10⁹ / P_total\nP_total = 2.0 × 10⁹ / 0.40\nP_total = 5.0 × 10⁹ W',
    keyConcepts: ['energy efficiency', 'power'],
    keywords: ['efficiency', 'total power', 'useful power'],
    feedbackHit: 'Correct — rearrangement and clean answer of 5.0 × 10⁹ W.',
    feedbackMiss: 'efficiency = P_useful / P_total, so P_total = P_useful / efficiency = 2.0 × 10⁹ / 0.40.',
  },

  // ── Q4 Rubber Band Car ───────────────────────────────────────────
  'q4_a': {
    marks: 2,
    exemplar: 'f = 1 / T\nf = 1 / 0.050\nf = 20 Hz',
    keyConcepts: ['frequency', 'period'],
    keywords: ['frequency', 'period', 'Hz'],
    feedbackHit: 'Correct — f = 1/T used correctly with unit Hz.',
    feedbackMiss: 'Use f = 1/T. T = 0.050 s (the time interval between measurements). f = 1/0.050 = 20 Hz.',
  },

  'q4_b': {
    marks: 1,
    exemplar: 'Approximately 4.2 cm s⁻¹ (accept 4.0–4.5 cm s⁻¹)',
    keyConcepts: ['reading data tables', 'velocity'],
    keywords: ['velocity', 'reading', 'data table'],
    feedbackHit: 'Correct reading from the data table at t = 0.30 s.',
    feedbackMiss: 'Read the velocity column at the row corresponding to t = 0.30 s.',
  },

  'q4_c': {
    marks: 3,
    exemplar: 'Gradient = Δv / Δt = (4.2 − 0) / (0.30 − 0.05) ≈ 4.2 / 0.25 ≈ 16.8 cm s⁻² → scaled to graph ≈ 84 cm s⁻²\nUnit: cm s⁻² (or m s⁻²)\nQuantity: acceleration',
    keyConcepts: ['gradient of v-t graph', 'acceleration'],
    keywords: ['gradient', 'acceleration', 'velocity-time graph'],
    feedbackHit: 'Well done — gradient calculated with two clear points, unit stated, and "acceleration" identified.',
    feedbackMiss: 'Select two widely-spaced points on the line. Gradient = Δv/Δt. The quantity is acceleration.',
  },

  'q4_d': {
    marks: 2,
    exemplar: 'Prediction: The gradient (acceleration) would be steeper / greater.\nJustification: More turns store more elastic potential energy in the band; the band exerts a larger force on the car, resulting in a greater acceleration (F = ma).',
    keyConcepts: ['elastic potential energy', 'Newton\'s second law', 'force'],
    keywords: ['gradient', 'acceleration', 'force', 'elastic energy', 'turns'],
    feedbackHit: 'Good — steeper gradient predicted with a force/energy justification.',
    feedbackMiss: 'More turns → more stored energy → greater force → greater acceleration. Gradient on v-t graph = acceleration.',
  },

  'q4_e': {
    marks: 2,
    exemplar: 'Limitation 1: Human reaction time introduces random error in timing measurements, making the data less precise / repeatable.\nLimitation 2: Difficult to measure distance accurately with a ruler while the car is moving; can only measure one interval at a time (not a continuous record).',
    keyConcepts: ['experimental limitations', 'measurement uncertainty'],
    keywords: ['reaction time', 'precision', 'random error', 'continuous'],
    feedbackHit: 'Two distinct limitations identified — well done.',
    feedbackMiss: 'Think about (1) timing errors (human reaction time vs automated frame rate) and (2) position resolution (one point vs continuous tracking).',
  },

  // ── Q5 Investigation Design ──────────────────────────────────────
  'q5_a': {
    marks: 16,
    exemplar: 'VARIABLES:\n• IV: Number of turns of the rubber band (e.g. 5, 10, 15, 20, 25 turns)\n• DV: Time taken for the car to travel a fixed distance (e.g. 1.00 m)\n• CV: Mass of car, surface/incline (kept horizontal), fixed distance\n• CV justification: mass affects inertia; surface affects friction; distance must be fixed so time comparisons are valid\n\nHYPOTHESIS:\nIf the number of turns of the rubber band is increased, then the time taken to travel the fixed distance will decrease, because more turns store more elastic potential energy, which is converted to kinetic energy, giving the car a greater speed.\n\nEQUIPMENT:\n• Ruler or tape measure (measure fixed distance)\n• Stopwatch / electronic timer (measure time)\n• Model car with rubber band, flat surface, start and finish markers\n\nMETHOD:\n1. Set up flat track with start and finish markers 1.00 m apart.\n2. Wind the rubber band 5 turns and place the car at the start line.\n3. Release the car and use a stopwatch to measure the time for the front of the car to cross the finish line.\n4. Repeat step 3 two more times (three trials) and calculate mean time.\n5. Repeat steps 2–4 for 10, 15, 20, and 25 turns.\n6. Record results in a table: IV | trial 1 | trial 2 | trial 3 | mean time.\n\nSUFFICIENT DATA:\n• 5 different values of IV ensures a trend can be identified.\n• 3 repeats per IV allows outliers to be detected and mean to be calculated.',
    keyConcepts: ['experimental design', 'variables', 'hypothesis', 'method', 'sufficient data'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'hypothesis', 'repeat', 'mean', 'reliability'],
    feedbackHit: 'Full marks require: IV/DV/CV with justification, testable hypothesis (If/Then/Because), clear method with repeats, sufficient data range. Apply MYP Crit B rubric.',
    feedbackMiss: 'Check: (1) CV justified scientifically; (2) hypothesis uses "If...then...because"; (3) method is step-by-step and reproducible; (4) ≥5 IV values and ≥3 repeats stated.',
  },

  'q5_b': {
    marks: 1,
    exemplar: 'How does the mass added to the model car affect the maximum speed it reaches? / How does the surface type affect the distance the car travels?',
    keyConcepts: ['research question formulation'],
    keywords: ['research question', 'variable'],
    feedbackHit: 'Any valid research question involving a different IV or DV for a model car earns the mark.',
    feedbackMiss: 'The RQ must change either the IV or DV from the original. E.g. investigate mass or surface type instead of number of turns.',
  },

  // ── Q6 Seebeck Effect / TEG ──────────────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'How does the temperature difference (ΔT) between the hot and cold sides of the TEG affect the voltage (V) produced?',
    keyConcepts: ['research question', 'Seebeck effect'],
    keywords: ['temperature difference', 'voltage', 'TEG', 'research question'],
    feedbackHit: 'Any RQ that clearly identifies ΔT as IV and V as DV earns the mark.',
    feedbackMiss: 'Make sure the RQ identifies both IV (temperature difference) and DV (voltage) clearly.',
  },

  'q6_b': {
    marks: 2,
    exemplar: 'Thermometer (to measure temperature of hot and cold water tanks) and voltmeter (to measure voltage output of TEG).',
    keyConcepts: ['measurement', 'instruments'],
    keywords: ['thermometer', 'voltmeter', 'temperature', 'voltage'],
    feedbackHit: 'Two correct instruments identified — one for temperature, one for voltage.',
    feedbackMiss: 'You need to measure two quantities: temperature → thermometer; voltage → voltmeter.',
  },

  'q6_c': {
    marks: 1,
    exemplar: 'ΔT = T_hot − T_cold = 65.0 − 50.0 = 15.0 °C',
    keyConcepts: ['temperature difference', 'data processing'],
    keywords: ['temperature difference', 'calculation'],
    feedbackHit: 'Correct — ΔT = 15.0 °C.',
    feedbackMiss: 'Subtract cold temperature from hot temperature to find ΔT.',
  },

  'q6_d': {
    marks: 4,
    exemplar: 'Graph: x-axis = Temperature difference ΔT (°C), y-axis = Voltage V (mV or V).\nAll data points plotted correctly (±½ small square).\nLine of best fit: straight line through/near origin, does not connect dots.\nAxes labelled with units.',
    keyConcepts: ['graph plotting', 'line of best fit'],
    keywords: ['axes', 'units', 'data points', 'line of best fit'],
    feedbackHit: 'Full marks for correct axes with units, all points, and a single smooth LOBF.',
    feedbackMiss: 'Check: (1) axes correct with units; (2) all points plotted; (3) straight LOBF (not dot-to-dot); (4) LOBF passes near origin.',
  },

  'q6_e': {
    marks: 2,
    exemplar: 'The claim is NOT valid. A directly proportional relationship requires the graph to pass through the origin. The line of best fit does not pass through the origin (there is a positive y-intercept), so the relationship is linear but not directly proportional.',
    keyConcepts: ['direct proportion', 'validity'],
    keywords: ['directly proportional', 'origin', 'valid', 'intercept'],
    feedbackHit: 'Correct — identifies not valid, references intercept/origin, earns both marks.',
    feedbackMiss: 'Direct proportion requires passing through (0,0). Check whether your LOBF extrapolates to the origin.',
  },

  'q6_f': {
    marks: 2,
    exemplar: 'Calculate the gradient of the line of best fit: choose two widely-separated points on the line and compute gradient = ΔV / ΔΔT. The Seebeck coefficient S = −gradient (the negative sign indicates voltage opposes temperature gradient, but the magnitude equals the gradient).',
    keyConcepts: ['Seebeck coefficient', 'gradient'],
    keywords: ['gradient', 'Seebeck coefficient', 'slope'],
    feedbackHit: 'Good — gradient method described and linked to S via S = −ΔV/ΔT.',
    feedbackMiss: 'Find the gradient of V vs ΔT graph using rise/run. S = magnitude of gradient (V per °C or V K⁻¹).',
  },

  'q6_g': {
    marks: 2,
    exemplar: 'P = V × I\nP = 0.600 × 0.080\nP = 0.048 W (48 mW)',
    keyConcepts: ['electrical power'],
    keywords: ['power', 'voltage', 'current'],
    feedbackHit: 'Correct — P = VI = 0.048 W with unit.',
    feedbackMiss: 'Use P = VI. Substitute V = 0.600 V and I = 0.080 A.',
  },

  'q6_h': {
    marks: 2,
    exemplar: 'Improvement: Use a larger or lighter propeller / reduce the mass of the car frame / increase the temperature difference to generate a higher voltage and current.\nJustification: Increasing the force from the propeller (or reducing mass of car) increases net force, which by Newton\'s second law (F = ma) gives greater acceleration.',
    keyConcepts: ['Newton\'s second law', 'force', 'acceleration'],
    keywords: ['force', 'mass', 'acceleration', 'Newton', 'propeller'],
    feedbackHit: 'Any valid improvement with a force/energy/Newton\'s 2nd law justification earns both marks.',
    feedbackMiss: 'Think about F = ma: either increase the driving force (larger propeller, more voltage) or decrease mass.',
  },

  'q6_i': {
    marks: 1,
    exemplar: 'Electrical (energy)\nFull chain: Thermal (Heat) → Electrical → Kinetic',
    keyConcepts: ['energy transfer', 'energy chain'],
    keywords: ['electrical energy', 'thermal energy', 'kinetic energy', 'energy chain'],
    feedbackHit: 'Correct — the missing term is "Electrical".',
    feedbackMiss: 'The TEG converts thermal energy to electrical energy, which the motor converts to kinetic energy. The missing link is electrical energy.',
  },

  'q6_j': {
    marks: 4,
    exemplar: 'Possible variables for a new investigation:\n• IV: Temperature difference ΔT (°C) between hot and cold sides OR mass added to car\n• DV: Speed/velocity of car (cm s⁻¹) OR distance travelled in fixed time\n• CV1: Fixed distance of travel\n• CV2: Surface type (must be kept the same to control friction)\nAward 1 mark each for a scientifically valid IV, DV, and two CVs.',
    keyConcepts: ['variables', 'experimental design'],
    keywords: ['independent variable', 'dependent variable', 'control variable'],
    feedbackHit: 'Award 1 mark each for IV, DV, CV1, and CV2 if each is scientifically valid and distinct.',
    feedbackMiss: 'Each variable must be measurable and distinct. CV must be something that would affect the DV if not controlled.',
  },

  'q6_k': {
    marks: 2,
    exemplar: 'If the temperature difference (ΔT) between the hot and cold sides of the TEG is increased, then the speed of the propeller-driven car will increase, because a greater ΔT produces a higher voltage (Seebeck effect), which drives a larger current through the motor, generating more force on the propeller.',
    keyConcepts: ['hypothesis', 'Seebeck effect', 'prediction'],
    keywords: ['if', 'then', 'because', 'temperature', 'voltage', 'speed'],
    feedbackHit: 'Award 1 mark for a testable If/Then prediction, 1 mark for a scientific justification.',
    feedbackMiss: 'Structure: "If [IV] increases/decreases, then [DV] increases/decreases, because [link to physics]."',
  },

  // ── Q7 Newton's Cannonball & Satellites ──────────────────────────
  'q7_a': {
    marks: 1,
    exemplar: 'A = 4700 m s⁻¹ (falls back to Earth)\nB = 7800 m s⁻¹ (circular orbit)\nC = 0 m s⁻¹ (drops straight down)\nD = 14 200 m s⁻¹ (escapes Earth)\nAll four must be correct.',
    keyConcepts: ['orbital speed', 'escape velocity', 'Newton\'s cannonball'],
    keywords: ['orbital speed', 'escape velocity', 'path', 'gravity'],
    feedbackHit: 'Correct — all four speed-to-path matches correct.',
    feedbackMiss: 'No speed → falls straight down; ~4700 → parabolic fall; ~7800 → circular orbit; ~14200 → escape. All four must be correct.',
  },

  'q7_b': {
    marks: 1,
    exemplar: 'B — only gravity acts on the cannonball in circular orbit (one arrow pointing toward centre of Earth). No drag in space, no perpendicular force needed for circular motion at this level.',
    keyConcepts: ['free-body diagram', 'circular orbit', 'gravity'],
    keywords: ['gravity', 'centripetal', 'free-body diagram', 'orbit'],
    feedbackHit: 'Correct — diagram B shows only a single gravitational force directed toward Earth\'s centre.',
    feedbackMiss: 'In circular orbit above the atmosphere, the only force is gravity directed toward the centre. No air resistance, no "centrifugal force".',
  },

  'q7_c': {
    marks: 14,
    exemplar: 'SCIENTIFIC & TECHNOLOGICAL CHALLENGES:\n• Reaching 36 000 km requires enormous rocket fuel and engineering precision\n• Maintaining stable geostationary orbit requires exact speed and altitude\n• Satellites must withstand radiation, microgravity, thermal cycling\n• Collision avoidance and space debris management\n\nPOLITICAL IMPLICATIONS:\n• ITU allocation of orbital slots creates geopolitical tensions (developing vs developed nations)\n• Clarke Belt is shared global commons — no single country owns it; requires international law\n• Military satellites raise security concerns; espionage capabilities blur civilian/military boundaries\n• Small nations risk losing communication sovereignty if they cannot afford orbital slots\n\nECONOMIC IMPLICATIONS (SpaceX/private control):\nPositive: Private investment drives innovation, reduces launch costs (reusable rockets), increases access\nNegative: Monopolistic control by one company could limit access for smaller nations/operators, drive up costs for rivals, raise concerns about data privacy\n\nCONCLUSION:\nThe development of satellite communication has transformed global connectivity; however, the concentration of orbital slots and infrastructure in private hands risks creating a two-tier global communication system. International governance must balance innovation with equitable access.',
    keyConcepts: ['satellite technology', 'geostationary orbit', 'international governance', 'economics'],
    keywords: ['geostationary', 'Clarke belt', 'ITU', 'SpaceX', 'orbital slot', 'political', 'economic'],
    feedbackHit: 'Apply MYP Crit A rubric. Top band requires: all four strands addressed, evidence from passage used, balanced evaluation, clear conclusion.',
    feedbackMiss: 'Check: (1) scientific challenges cited; (2) political implications for governments; (3) BOTH positive and negative economic points on private control; (4) concluding appraisal.',
  },

  // ── Q8 Space Elevator ────────────────────────────────────────────
  'q8_': {
    marks: 8,
    exemplar: 'BENEFITS:\n• Massive reduction in cost per kg to orbit compared with rockets (no fuel needed for ascent)\n• Enables large-scale space manufacturing, tourism, and colonisation\n• Reusable system reduces space debris from spent rockets\n• Could accelerate development of asteroid mining and space resources\n• Stimulates domestic technology sector (carbon nanotube research, robotics)\n\nLIMITATIONS:\n• No material currently has sufficient tensile strength — technology may not be feasible for decades\n• Enormous upfront cost (estimated trillions of dollars)\n• Single point of failure: if the cable breaks, debris could cause catastrophic orbital strikes\n• Geopolitical sensitivity — anchor point must be on equator, restricting which countries can build it\n• Ongoing maintenance and weather/lightning vulnerability near equator\n\nCONCLUSION:\nThe potential long-term benefits are transformative, but the technological readiness level is too low to justify current government spending; investment should first focus on materials research (carbon nanotubes) and international cooperation before committing to full construction.',
    keyConcepts: ['science and society', 'space technology', 'cost-benefit analysis'],
    keywords: ['space elevator', 'tensile strength', 'cost', 'benefits', 'limitations', 'cable', 'orbit'],
    feedbackHit: 'Apply MYP Crit D rubric. Top band: multiple benefits AND limitations, evidence-based, balanced conclusion that responds to the "government spending" framing.',
    feedbackMiss: 'Ensure both benefits and limitations are given and the conclusion explicitly states whether government should fund construction.',
  },

}
