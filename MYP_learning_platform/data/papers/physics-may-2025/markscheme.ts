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

  // ── Q1 Defibrillators ────────────────────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Electrons',
    keyConcepts: ['electrons move', 'free electrons', 'negative charge carriers'],
    keywords: ['electrons', 'electron'],
    feedbackHit: 'Correct — electrons are the charge carriers that move to create the charge on the plates.',
    feedbackMiss: 'Electrons are the particles that move in a conductor to create charge separation. Protons, atoms and neutrons do not move freely in a solid conductor.',
  },

  'q1_b': {
    marks: 3,
    exemplar: 'Convert: 30 ms = 0.03 s. Use E = VIt → I = E/(V×t) = 150/(300 × 0.03) = 16.7 A (to 3 s.f.). Award 3 marks for a correctly rounded value to 2 or more significant figures (e.g. 16.7 A or 16.67 A). Conversion of ms to s may be seen or implied. Method can alternatively use P = W/t = 5000 W then I = P/V = 16.7 A.',
    keyConcepts: ['convert milliseconds to seconds', 'E = VIt', 'current calculation', 'correct rounding'],
    keywords: ['0.03', '16.7', '16.67', '5000', 'current', 'E = VIt', 'P = IV', 'charge'],
    feedbackHit: 'Correct — the current is approximately 16.7 A. Good working shown.',
    feedbackMiss: 'Use E = VIt rearranged to I = E/(V×t). Remember to convert 30 ms = 0.030 s. I = 150/(300 × 0.03) = 16.7 A.',
  },

  'q1_c': {
    marks: 1,
    exemplar: 'The gel reduces electrical resistance (between the plates and the skin), therefore increasing the current flow to the heart. Accept also: improves electrical conduction/contact with the skin; minimises damage to the skin; protects skin from burns. Do not accept vague references to "helping the current flow" without explanation.',
    keyConcepts: ['reduces resistance', 'improves conduction', 'better contact', 'minimises skin damage', 'prevents burns'],
    keywords: ['resistance', 'conduction', 'contact', 'burns', 'skin', 'current', 'conduct', 'reduce'],
    feedbackHit: 'Good — a valid scientific reason for using gel was given.',
    feedbackMiss: 'The gel reduces the electrical resistance between the plates and the patient\'s skin, which improves conduction of the electric current. It also minimises damage to the skin.',
  },

  'q1_d': {
    marks: 2,
    exemplar: 'Adhesive pads (any ONE of): person applying the treatment is not in contact / safer for operator; pads will not move out of position during treatment; keeps the doctor\'s hands free; makes the device small and portable.\n\nInsulating handles (any ONE of): can apply pressure to the body; insulation protects the person applying the treatment; plates can be relocated quickly to a different position; can be removed quickly. Do NOT accept references to gel as the gel is common to both types.',
    keyConcepts: ['adhesive pads advantage', 'insulating handles advantage', 'hands free', 'pressure', 'portable', 'insulation protects operator'],
    keywords: ['hands free', 'not in contact', 'safer', 'portable', 'pressure', 'insulation', 'protects', 'relocate', 'position', 'remove'],
    feedbackHit: 'Good — a valid advantage for each type of defibrillator was identified.',
    feedbackMiss: 'Adhesive pads: e.g. keeps the doctor\'s hands free / pads stay in place / operator is not in contact. Insulating handles: e.g. allows pressure to be applied to the body / insulation protects the operator / plates can be quickly moved to a different position.',
  },

  // ── Q2 Refraction ────────────────────────────────────────────────
  'q2_a': {
    marks: 3,
    exemplar: 'Use f = v/λ. Convert 550 nm = 550 × 10⁻⁹ m. f = (3.0 × 10⁸)/(550 × 10⁻⁹) = 5.45 × 10¹⁴ Hz. Accept 5.5 × 10¹⁴ Hz. Award 3 marks for a correctly rounded answer to 2 significant figures. No ECF from mp2.',
    keyConcepts: ['f = v/λ', 'convert nm to m', 'frequency calculation', '5.5 × 10¹⁴', 'two significant figures'],
    keywords: ['5.5', '5.45', '5.454', '10¹⁴', 'Hz', 'frequency', 'wavelength', 'speed of light', 'f = v'],
    feedbackHit: 'Correct — the frequency of yellow light is approximately 5.5 × 10¹⁴ Hz.',
    feedbackMiss: 'Use f = v/λ. Convert: 550 nm = 550 × 10⁻⁹ m. Then f = (3.0 × 10⁸) / (550 × 10⁻⁹) = 5.45 × 10¹⁴ Hz ≈ 5.5 × 10¹⁴ Hz.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Red or orange (any colour with a longer wavelength than yellow — i.e. towards the red end of the visible spectrum).',
    keyConcepts: ['red longer wavelength', 'orange', 'visible spectrum order'],
    keywords: ['red', 'orange'],
    feedbackHit: 'Correct — red and orange have longer wavelengths than yellow light.',
    feedbackMiss: 'In the visible spectrum, colours with longer wavelengths than yellow are orange and red (ROYGBIV — red has the longest wavelength, violet the shortest).',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Frequency. When light refracts, its speed and wavelength change but its frequency remains constant.',
    keyConcepts: ['frequency constant', 'frequency unchanged during refraction'],
    keywords: ['frequency'],
    feedbackHit: 'Correct — frequency is the quantity that remains constant when light refracts.',
    feedbackMiss: 'When light is refracted, its speed and wavelength change, but its frequency remains constant (unchanged). Direction clearly changes; speed and wavelength change.',
  },

  'q2_d': {
    marks: 3,
    exemplar: 'Light travels from the fish to the person\'s eye (or from water to air). Light refracts / bends away from the normal as it travels from the denser medium (water) to the less dense medium (air). The eye or brain expects light to travel in a straight line (so sees the fish in a different position to reality).',
    keyConcepts: ['light travels from fish to eye', 'refraction at water-air boundary', 'bends away from normal', 'brain expects straight line', 'apparent position different'],
    keywords: ['refract', 'bend', 'normal', 'water', 'air', 'straight line', 'brain', 'eye', 'apparent', 'position', 'travel', 'denser'],
    feedbackHit: 'Well explained — you correctly described the refraction of light from the fish to the observer\'s eye.',
    feedbackMiss: 'Light travels from the fish upward through water. At the water-air boundary, light refracts (bends away from the normal). The brain/eye assumes light travels in a straight line, so the fish appears to be at a higher/different position than it really is.',
  },

  'q2_e': {
    marks: 2,
    exemplar: 'A diverging lens refracts the light rays outwards / away from the normal (spreads the rays). This increases the focal length / moves the focal point further from the lens, so the rays now meet on the retina (instead of in front of it).',
    keyConcepts: ['diverging lens refracts outward', 'spreads light rays', 'focal point moves to retina', 'rays meet on retina'],
    keywords: ['diverging', 'outward', 'away', 'spreads', 'focal', 'retina', 'meet', 'refract'],
    feedbackHit: 'Good — you correctly described how a diverging lens corrects short-sightedness.',
    feedbackMiss: 'A diverging lens refracts (bends) light rays outwards/away from the normal, spreading them out. This shifts the focal point further back so the rays converge on the retina rather than in front of it.',
  },

  // ── Q3 Nuclear Fission ───────────────────────────────────────────
  'q3_a': {
    marks: 1,
    exemplar: 'Accept any one reasonable environmental problem, e.g.: climate change / global warming; greenhouse effect / CO₂ emissions; air pollution; acid rain; habitat destruction from extraction; non-renewable resource.',
    keyConcepts: ['climate change', 'CO₂ emissions', 'greenhouse effect', 'air pollution', 'non-renewable', 'acid rain'],
    keywords: ['climate', 'CO₂', 'carbon', 'greenhouse', 'pollution', 'acid rain', 'non-renewable', 'habitat', 'global warming'],
    feedbackHit: 'Correct — a valid environmental problem with fossil fuels identified.',
    feedbackMiss: 'Problems with fossil fuels include: CO₂ / greenhouse gas emissions causing climate change; air pollution; acid rain; habitat destruction during extraction; they are non-renewable.',
  },

  'q3_b': {
    marks: 1,
    exemplar: 'U-236 has one more neutron than U-235 (they have different numbers of neutrons). Do NOT accept "different mass numbers" alone — the difference must be attributed to neutrons specifically. They are isotopes of the same element (same number of protons).',
    keyConcepts: ['different number of neutrons', 'U-236 has one more neutron', 'isotopes same protons'],
    keywords: ['neutron', 'neutrons', 'one more', 'different number', 'isotopes'],
    feedbackHit: 'Correct — U-236 has one more neutron than U-235.',
    feedbackMiss: 'Both nuclei have the same number of protons (92). U-236 has one more neutron than U-235 (144 vs 143 neutrons). They are isotopes of uranium.',
  },

  'q3_c': {
    marks: 1,
    exemplar: '3 neutrons. Check conservation of mass number: 236 = 140 + 93 + 3(1) ✓. Check conservation of atomic number: 92 = 54 + 38 ✓.',
    keyConcepts: ['3 neutrons', 'conservation of mass number', 'balance nuclear equation'],
    keywords: ['3', 'three', 'neutrons'],
    feedbackHit: 'Correct — 3 neutrons are released to balance the equation.',
    feedbackMiss: 'Check mass numbers: 236 = 140 + 93 + ?×1 → ? = 3. Three neutrons are released.',
  },

  'q3_d': {
    marks: 2,
    exemplar: 'Use E = mc² → m = E/c². m = (2.8 × 10⁻¹¹) / (3.0 × 10⁸)² = (2.8 × 10⁻¹¹) / (9 × 10¹⁶) = 3.11 × 10⁻²⁸ kg. Award 2 marks for answer to 2 or more significant figures with correct unit (kg).',
    keyConcepts: ['m = E/c²', 'mass defect calculation', '3.11 × 10⁻²⁸ kg', 'correct unit kg'],
    keywords: ['3.11', '3.1', '10⁻²⁸', 'kg', 'E = mc²', 'mass', 'defect'],
    feedbackHit: 'Correct — the mass difference is approximately 3.11 × 10⁻²⁸ kg.',
    feedbackMiss: 'Rearrange E = mc² to get m = E/c². m = (2.8 × 10⁻¹¹) / (3.0 × 10⁸)² = 2.8 × 10⁻¹¹ / 9 × 10¹⁶ = 3.11 × 10⁻²⁸ kg.',
  },

  'q3_e': {
    marks: 2,
    exemplar: 'Convert 9.7 GJ = 9.7 × 10⁹ J. Number of fissions = total energy / energy per fission = (9.7 × 10⁹) / (2.8 × 10⁻¹¹) = 3.46 × 10²⁰. Award 2 marks for a correct value to 2 or more significant figures.',
    keyConcepts: ['convert GJ to J', '9.7 × 10⁹ J', 'divide total energy by energy per fission', '3.46 × 10²⁰'],
    keywords: ['3.46', '3.5', '10²⁰', 'fissions', 'divide', '9.7 × 10⁹', 'GJ'],
    feedbackHit: 'Correct — approximately 3.46 × 10²⁰ fission reactions are needed.',
    feedbackMiss: 'Convert: 9.7 GJ = 9.7 × 10⁹ J. Then divide: (9.7 × 10⁹) / (2.8 × 10⁻¹¹) = 3.46 × 10²⁰ fissions.',
  },

  'q3_f': {
    marks: 2,
    exemplar: 'Efficiency = useful output / total input. 0.35 = (1.5 × 10⁹) / P_total → P_total = (1.5 × 10⁹) / 0.35 = 4.3 × 10⁹ W. Award 2 marks for a correct value to 2 significant figures. Accept values in the range 4.2–4.3 × 10⁹ W.',
    keyConcepts: ['efficiency = useful output / total input', 'rearrange for P_total', '4.3 × 10⁹ W', 'use 0.35 or 35/100'],
    keywords: ['4.3', '4.29', '10⁹', 'W', 'watts', 'efficiency', '0.35', '35%', 'total power'],
    feedbackHit: 'Correct — the total power released by fission is approximately 4.3 × 10⁹ W.',
    feedbackMiss: 'Use: efficiency = P_electrical / P_total. Rearrange: P_total = P_electrical / efficiency = (1.5 × 10⁹) / 0.35 = 4.3 × 10⁹ W.',
  },

  // ── Q4 Cotton Reel / Motion ──────────────────────────────────────
  'q4_a': {
    marks: 2,
    exemplar: 'Frequency = 1 / time interval = 1 / 0.10 = 10 Hz (or s⁻¹). Award 1 mark for correct calculation, 1 mark for correct unit (Hz or s⁻¹ or per second or dots per second).',
    keyConcepts: ['frequency = 1/T', '10 Hz', 'correct unit Hz or s⁻¹'],
    keywords: ['10', 'Hz', 's⁻¹', 'per second', 'frequency', '1/0.1'],
    feedbackHit: 'Correct — the frequency is 10 Hz.',
    feedbackMiss: 'Frequency = 1 / time interval = 1 / 0.10 s = 10 Hz (or 10 s⁻¹).',
  },

  'q4_b': {
    marks: 1,
    exemplar: '5.4 (cm s⁻¹). Accept any value read correctly from the animation/data at t = 0.35 s.',
    keyConcepts: ['correct reading from graph/animation', '5.4 cm s⁻¹'],
    keywords: ['5.4', '5.3', '5.5'],
    feedbackHit: 'Correct reading from the data.',
    feedbackMiss: 'Read the velocity value at t = 0.35 s from the graph or data table. The expected value is approximately 5.4 cm s⁻¹.',
  },

  'q4_c': {
    marks: 3,
    exemplar: 'Gradient of LoBF between 0.05 s and 0.35 s = Δv / Δt ≈ 105 ± 5 cm s⁻². Unit: cm s⁻² (accept cm/s² or centimetres per second squared). Quantity: acceleration. Award 1 mark for correct LoBF drawn, 1 mark for correct gradient calculation with unit, 1 mark for stating acceleration.',
    keyConcepts: ['gradient = Δv/Δt', '105 cm s⁻²', 'unit cm s⁻²', 'quantity is acceleration'],
    keywords: ['100', '105', '110', 'cm s⁻²', 'acceleration', 'gradient', 'slope', 'Δv', 'Δt'],
    feedbackHit: 'Well done — correct gradient calculation and identification of acceleration.',
    feedbackMiss: 'Gradient = rise / run = Δvelocity / Δtime. The gradient of the velocity-time graph gives acceleration. Expected value ≈ 105 cm s⁻² (unit: cm s⁻²).',
  },

  'q4_d': {
    marks: 2,
    exemplar: 'The gradient would increase / the line of best fit would be steeper (WTTE). This is because doubling the turns of the elastic band increases the stored elastic potential energy, resulting in a greater (elastic) force / tension, which produces a greater acceleration of the car (F = ma).',
    keyConcepts: ['gradient increases', 'steeper line', 'greater elastic force', 'more stored energy', 'greater acceleration'],
    keywords: ['steeper', 'gradient increase', 'greater force', 'more tension', 'more energy', 'elastic', 'acceleration', 'force'],
    feedbackHit: 'Good prediction with valid scientific justification.',
    feedbackMiss: 'More turns → more elastic potential energy stored → greater elastic force / tension when released → greater acceleration → steeper gradient on v-t graph.',
  },

  'q4_e': {
    marks: 2,
    exemplar: 'Any two valid limitations, e.g.: (1) Reaction time errors when using the stopwatch — introduces uncertainty in time measurement. (2) Difficulty locating the exact position of the car using a ruler leads to errors (parallax errors). (3) Cannot measure instantaneous velocity or continuous acceleration using ruler and stopwatch. (4) Measurements of time/velocity/acceleration throughout the movement would not be possible with a stopwatch alone.',
    keyConcepts: ['reaction time error', 'parallax error', 'cannot measure instantaneous velocity', 'limited data points', 'human error'],
    keywords: ['reaction time', 'parallax', 'instantaneous', 'human error', 'limited', 'position', 'continuous', 'ruler', 'stopwatch'],
    feedbackHit: 'Good — two valid limitations of using ruler and stopwatch compared to video analysis were identified.',
    feedbackMiss: 'Limitations include: (1) Reaction time errors with stopwatch → inaccurate time measurements. (2) Parallax errors when reading ruler position. (3) Only single time/distance measurements possible — cannot track continuous motion or calculate instantaneous velocity.',
  },

  // ── Q5 Investigation Design ──────────────────────────────────────
  'q5_a': {
    marks: 16,
    exemplar: 'Full marks (16) require all four aspects addressed at high quality:\n\n(1) VARIABLES (clearly states IV = number of turns of elastic band; DV = time taken to travel fixed distance; CV = e.g. length of fixed distance, type/condition of surface, same car — with justification for at least one CV).\n\n(2) HYPOTHESIS (links IV to DV with correct scientific reasoning, e.g. "If the number of turns increases, the time taken will decrease, because more turns stores more elastic potential energy, giving a greater driving force and acceleration to the car").\n\n(3) METHOD (step-by-step, specific, reproducible: set up flat surface, mark fixed distance, wind set number of turns, release car, record time, repeat).\n\n(4) SUFFICIENT DATA (at least 5 values of IV and at least 3 repeats per value to calculate a mean).\n\nMarking is holistic per criterion strand (0–4 each).',
    keyConcepts: ['independent variable number of turns', 'dependent variable time taken', 'control variable justified', 'hypothesis links IV and DV', 'scientific reasoning in hypothesis', 'detailed step-by-step method', 'repeats', 'sufficient data range', 'mean calculated'],
    keywords: ['number of turns', 'time taken', 'fixed distance', 'control', 'hypothesis', 'if then because', 'elastic', 'energy', 'method', 'repeat', 'mean', 'average', 'stopwatch', 'ruler', 'five', '3 repeats', 'sufficient'],
    feedbackHit: 'Excellent investigation design — all key elements included with scientific reasoning.',
    feedbackMiss: 'A complete investigation plan must include: (1) IV (number of turns), DV (time), and a justified CV. (2) A hypothesis linking IV to DV with scientific explanation (elastic PE → force → acceleration). (3) A clear, numbered method. (4) Evidence of sufficient data: ≥5 IV values and ≥3 repeats per value.',
  },

  'q5_b': {
    marks: 1,
    exemplar: 'Accept any reasonable research question linking a new independent variable to a dependent variable, e.g.: "How does the type of elastic band affect the time taken for a model car to travel 50 cm?" or "How does the mass added to the car affect the distance travelled in 10 s?" Accept reverse order (DV to IV).',
    keyConcepts: ['alternative IV', 'links IV to DV', 'testable research question', 'model car context'],
    keywords: ['how does', 'affect', 'model car', 'investigate', 'mass', 'surface', 'distance', 'speed', 'type', 'elastic'],
    feedbackHit: 'Good — a valid alternative research question with a clear IV and DV was suggested.',
    feedbackMiss: 'A good research question links a testable independent variable to a measurable dependent variable. For example: "How does [mass placed on the car / type of surface / type of elastic band] affect [time taken / distance travelled]?"',
  },

  // ── Q6 Seebeck Effect / TEG ──────────────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'Accept any reasonable research question linking temperature difference to voltage, e.g.: "How does temperature difference (ΔT) affect the voltage (V) produced by the TEG?" or "What is the relationship between temperature difference and voltage produced?"',
    keyConcepts: ['temperature difference affects voltage', 'research question format', 'testable question'],
    keywords: ['temperature difference', 'voltage', 'affect', 'relationship', 'how does', 'TEG'],
    feedbackHit: 'Correct — a valid research question linking temperature difference to voltage.',
    feedbackMiss: 'A research question should link the independent variable (temperature difference) to the dependent variable (voltage produced). E.g. "How does temperature difference affect the voltage produced?"',
  },

  'q6_b': {
    marks: 2,
    exemplar: 'Any two from: thermometer (or temperature probe/sensor); voltmeter (or multimeter); stopwatch (if time is a variable). Award 1 mark each for two correct instruments.',
    keyConcepts: ['thermometer or temperature probe', 'voltmeter or multimeter'],
    keywords: ['thermometer', 'temperature probe', 'voltmeter', 'multimeter', 'sensor'],
    feedbackHit: 'Correct — thermometer/temperature probe and voltmeter are the key instruments.',
    feedbackMiss: 'You need: (1) A thermometer or temperature probe to measure the temperature of the hot and cold water. (2) A voltmeter (or multimeter) to measure the voltage produced by the TEG.',
  },

  'q6_c': {
    marks: 1,
    exemplar: '20.0 °C. Do NOT accept just "20" — the answer must include the decimal to reflect appropriate precision. Temperature difference = T₁ − T₂.',
    keyConcepts: ['temperature difference = T1 minus T2', '20.0 degrees Celsius', 'correct decimal places'],
    keywords: ['20.0', '20'],
    feedbackHit: 'Correct — the missing temperature difference is 20.0 °C.',
    feedbackMiss: 'Temperature difference = Temperature 1 − Temperature 2. Subtract the two temperature values to find the missing ΔT = 20.0 °C.',
  },

  'q6_d': {
    marks: 4,
    exemplar: 'Award up to 4 marks: (1) Both axes labelled correctly with quantity and unit — temperature difference (°C) on x-axis, voltage (mV) on y-axis. (2) Even, numbered increments on both axes. (3) All data points plotted correctly (within ±1 grid square). (4) Appropriate straight line of best fit — data points above and below the line approximately equal. Axes do not need to start from 0.',
    keyConcepts: ['axes labelled with units', 'all data points plotted', 'line of best fit', 'even increments', 'temperature difference x-axis', 'voltage y-axis'],
    keywords: ['temperature difference', 'voltage', 'axis', 'label', 'unit', 'data points', 'line of best fit', 'LoBF', 'plot', 'graph'],
    feedbackHit: 'Good graph — axes labelled, data plotted, and line of best fit drawn.',
    feedbackMiss: 'A correct graph needs: (1) x-axis = temperature difference (°C), y-axis = voltage (mV) — both with units. (2) Data points plotted accurately. (3) A straight line of best fit with approximately equal numbers of points above and below.',
  },

  'q6_e': {
    marks: 2,
    exemplar: 'The claim is NOT valid. Evidence: the line of best fit does not pass through the origin (0,0). For direct proportionality, the graph must pass through the origin. OR: the ratio V/ΔT is not constant for different data points. Award the second mark only if the first mark (identifying claim invalid) is awarded.',
    keyConcepts: ['claim not valid', 'LoBF does not pass through origin', 'direct proportionality requires origin', 'V/ΔT not constant'],
    keywords: ['not valid', 'origin', 'not proportional', 'ratio', 'not constant', 'does not pass', 'intercept'],
    feedbackHit: 'Correct — the claim is not valid because the line of best fit does not pass through the origin.',
    feedbackMiss: 'For direct proportionality, the graph MUST pass through the origin (0,0). If the line of best fit has a y-intercept other than zero, then the variables are NOT directly proportional.',
  },

  'q6_f': {
    marks: 2,
    exemplar: 'Calculate the gradient of the line of best fit on the V vs ΔT graph by selecting two widely-separated points on the line and calculating rise/run = ΔV/ΔT. Then S = −gradient (i.e. multiply by −1). Award 1 mark for describing how to find the gradient, 1 mark for stating S = −gradient (or multiplying by −1).',
    keyConcepts: ['gradient of LoBF', 'two points on line', 'rise over run', 'S = negative gradient', 'multiply by minus one'],
    keywords: ['gradient', 'slope', 'two points', 'rise', 'run', 'ΔV/ΔT', 'negative', 'multiply', '−1'],
    feedbackHit: 'Correct — the Seebeck coefficient is found from the negative gradient of the V vs ΔT graph.',
    feedbackMiss: 'To find S: (1) Draw the LoBF on the V vs ΔT graph. (2) Choose two points far apart on the line. (3) Calculate gradient = ΔV/ΔT = (V₂−V₁)/(ΔT₂−ΔT₁). (4) S = −gradient (negative of the gradient).',
  },

  'q6_g': {
    marks: 2,
    exemplar: 'P = IV = 0.11 × 0.397 = 0.04367 W. Accept 0.044 W or 44 mW. Award 2 marks for a correct value to 2 significant figures. Accept watts (W) or milliwatts (mW).',
    keyConcepts: ['P = IV', '0.04367 W', 'correct unit W or mW'],
    keywords: ['0.044', '0.04367', '44', 'W', 'watts', 'mW', 'milliwatts', 'P = IV', 'power'],
    feedbackHit: 'Correct — P = IV = 0.11 × 0.397 ≈ 0.044 W.',
    feedbackMiss: 'Use P = IV. P = 0.11 A × 0.397 V = 0.04367 W ≈ 0.044 W (or 44 mW).',
  },

  'q6_h': {
    marks: 2,
    exemplar: 'Accept any two of: increase the temperature difference (bigger ΔT → more voltage → more current → more power); reduce the mass of the car (same force on lower mass gives greater acceleration, F=ma); reduce drag forces (e.g. larger wheels, streamlined shape). Justification must correctly link the improvement to F=ma or Newton\'s second law or increased power.',
    keyConcepts: ['increase temperature difference', 'reduce mass', 'reduce drag', 'F = ma', 'Newton\'s second law'],
    keywords: ['temperature difference', 'mass', 'drag', 'force', 'acceleration', 'F = ma', 'Newton', 'power', 'reduce'],
    feedbackHit: 'Good improvement suggestion with valid scientific justification.',
    feedbackMiss: 'To increase acceleration: increase the driving force (e.g. bigger ΔT → more voltage/current → more power to motor) or reduce mass of car (F=ma: same force on lower mass → greater acceleration) or reduce drag forces.',
  },

  'q6_i': {
    marks: 1,
    exemplar: 'Electrical. The correct energy chain is: Heat → Electrical → Kinetic.',
    keyConcepts: ['heat to electrical to kinetic', 'electrical energy in chain'],
    keywords: ['electrical', 'electric'],
    feedbackHit: 'Correct — Heat → Electrical → Kinetic.',
    feedbackMiss: 'The TEG converts heat energy into electrical energy, which powers the motor to produce kinetic energy. The chain is: Heat → Electrical → Kinetic.',
  },

  'q6_j': {
    marks: 4,
    exemplar: 'Award 1 mark each for: (1) A valid IV (e.g. length of propellers / temperature difference / mass of car / angle of slope). Do NOT accept voltage, current, or power of motor as IVs. (2) A valid DV (e.g. time taken to travel a set distance / distance travelled in set time / speed of car). (3+4) Two valid CVs consistent with the chosen IV and DV (e.g. if IV = propeller length, CVs could include temperature difference, mass of car, type of surface). Check that CVs are consistent with IV/DV.',
    keyConcepts: ['valid IV not voltage/current/power', 'valid DV related to car motion', 'two CVs consistent with IV/DV'],
    keywords: ['independent', 'dependent', 'control', 'propeller', 'temperature', 'distance', 'time', 'speed', 'mass', 'consistent'],
    feedbackHit: 'Good variable identification — IV, DV, and two consistent CVs all correctly stated.',
    feedbackMiss: 'IV: e.g. length of propellers (do NOT use voltage/current/power of motor). DV: e.g. distance travelled in fixed time or time to travel fixed distance. CV 1 and CV 2 should be variables not being changed that could affect the result (e.g. temperature difference, mass of car, surface type).',
  },

  'q6_k': {
    marks: 2,
    exemplar: 'A hypothesis correctly linking the chosen IV to the DV from part (j), with a scientific explanation. E.g.: "If the length of the propellers increases, then the distance travelled by the car in a fixed time will increase, because longer propellers push against more air, generating a greater thrust force on the car." Award 1 mark for correctly linking IV and DV; 1 mark for a scientific justification.',
    keyConcepts: ['hypothesis links IV to DV', 'if-then-because format', 'scientific explanation', 'ECF from part j'],
    keywords: ['if', 'then', 'because', 'increases', 'decreases', 'force', 'thrust', 'scientific', 'explanation'],
    feedbackHit: 'Good hypothesis — the IV, DV, and scientific reasoning are all clearly linked.',
    feedbackMiss: 'Format: "If [IV changes in a specific direction], then [DV changes in a specific direction], because [scientific reason]." The explanation should refer to force, energy, or another relevant physical principle.',
  },

  // ── Q7 Newton\'s Cannonball / Satellites ─────────────────────────
  'q7_a': {
    marks: 1,
    exemplar: 'All four must be correct: A = 4700 m s⁻¹ (falls back to Earth in curved arc); B = 7800 m s⁻¹ (circular orbit); C = 0 m s⁻¹ (falls straight down); D = 14 200 m s⁻¹ (escape trajectory). All four correct for 1 mark.',
    keyConcepts: ['A = 4700 falls curved', 'B = 7800 circular orbit', 'C = 0 falls straight', 'D = 14200 escape velocity'],
    keywords: ['4700', '7800', '0', '14200', 'orbit', 'escape', 'circular'],
    feedbackHit: 'Correct — all four speed-to-path matchings are correct.',
    feedbackMiss: 'C (0 m s⁻¹): falls straight down. A (4700 m s⁻¹): curves back to Earth. B (7800 m s⁻¹): circular orbit (orbital speed). D (14 200 m s⁻¹): escape velocity — escapes Earth\'s gravity.',
  },

  'q7_b': {
    marks: 1,
    exemplar: 'B. The cannonball in circular orbit has only one force acting on it — gravity directed towards the centre of the Earth. Diagram B shows a single downward/inward arrow representing gravitational force only.',
    keyConcepts: ['only gravity acts on orbiting cannonball', 'force directed towards Earth centre', 'diagram B'],
    keywords: ['B', 'gravity', 'gravitational', 'centre', 'one force', 'inward'],
    feedbackHit: 'Correct — in circular orbit only gravity acts, directed towards Earth\'s centre.',
    feedbackMiss: 'In orbit, the only force on the cannonball is gravity, directed towards the centre of the Earth. There is no thrust force. The correct diagram shows a single arrow pointing toward Earth\'s centre.',
  },

  'q7_c': {
    marks: 14,
    exemplar: 'Full marks (14) require all four aspects addressed at the highest level:\n\nSCIENTIFIC & TECHNOLOGICAL CHALLENGES (up to 4 marks): Need high thrust to overcome gravitational force; accurate calculations of satellite weight required for launch; navigation through existing satellites / space debris; multiple satellites on one rocket have many different trajectories; detailed planning needed to reach correct geostationary orbit.\n\nPOLITICAL IMPLICATIONS (up to 4 marks): National security concerns (e.g. defence/intelligence operations may be compromised); government space programs may be limited; countries without this technology can now access satellites; company may not act in a country\'s best interests; countries may use it to secure themselves against threats.\n\nECONOMIC IMPLICATIONS — positive AND negative (up to 4 marks): Positive: job creation; company could increase efficiency; gives access to satellites for smaller companies with fewer resources; stimulates innovation. Negative: can lead to monopoly; over-reliance on one company; lack of competition stifles innovation; lack of resilience.\n\nCONCLUDING APPRAISAL (up to 2 marks): A balanced concluding opinion with justification linked to points made earlier.',
    keyConcepts: ['gravitational force challenge', 'space debris navigation', 'geostationary orbit planning', 'national security', 'government programs limited', 'access to satellites', 'monopoly risk', 'job creation', 'smaller companies access', 'over-reliance', 'lack of competition', 'concluding appraisal justified'],
    keywords: ['gravity', 'thrust', 'debris', 'geostationary', 'security', 'national', 'government', 'monopoly', 'job', 'company', 'access', 'competition', 'innovation', 'reliance', 'conclude', 'appraisal', 'economic', 'political', 'challenge'],
    feedbackHit: 'Excellent discussion — scientific challenges, political and economic implications all addressed with supporting evidence.',
    feedbackMiss: 'For full marks, address all four aspects with supporting evidence:\n(1) Scientific/tech challenges: e.g. overcoming gravity, calculating weight, avoiding debris, planning geostationary trajectories.\n(2) Political implications: e.g. national security concerns, government programs limited, access issues for smaller nations.\n(3) Economic implications (+ AND −): e.g. job creation vs monopoly risk, efficiency vs lack of competition.\n(4) Concluding appraisal: a balanced opinion with justification.',
  },

  // ── Q8 Space Elevator ────────────────────────────────────────────
  'q8_': {
    marks: 8,
    exemplar: 'Full marks (8) require:\n\nBENEFITS (up to 3 marks): e.g. increased access to space; use of electricity rather than rocket fuel — more sustainable; opportunity for country to be a world leader in scientific development; construction/maintenance of space stations and satellites much easier; can showcase science and technology.\n\nLIMITATIONS (up to 3 marks): e.g. suitable materials to withstand stresses are not currently available; could be damaged by space debris; costs would be extreme; tensile forces involved are unclear/unpredictable; governments should consider the risk of failure.\n\nCONCLUSION (up to 2 marks): A clear opinion stated (government should or should not fund it) with justification that balances both sides.',
    keyConcepts: ['increased access to space', 'sustainable electricity vs rocket fuel', 'scientific leadership', 'materials not available', 'space debris damage', 'extreme costs', 'conclusion with justification', 'balanced argument'],
    keywords: ['access', 'sustainable', 'electricity', 'rocket', 'leader', 'scientific', 'material', 'tensile', 'debris', 'cost', 'expensive', 'conclusion', 'justify', 'benefit', 'limitation', 'government'],
    feedbackHit: 'Well-structured response with valid benefits, limitations, and a justified conclusion.',
    feedbackMiss: 'For full marks: BENEFITS (e.g. increased access to space; more sustainable than rockets; scientific prestige). LIMITATIONS (e.g. no suitable material yet; risk from space debris; extreme costs). CONCLUSION: a balanced opinion with justification referencing your earlier points.',
  },
}
