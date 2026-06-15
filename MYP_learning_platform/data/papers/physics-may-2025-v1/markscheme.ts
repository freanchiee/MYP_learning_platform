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

  // ── Q1 Electrostatic precipitator ────────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Electrons',
    keyConcepts: ['electrons move', 'free electrons', 'negative charge carriers'],
    keywords: ['electrons', 'electron'],
    feedbackHit: 'Correct — electrons are the charge carriers that move to charge the soot particles.',
    feedbackMiss: 'Electrons are the particles that move in a conductor to transfer charge. Protons, atoms and neutrons do not move freely.',
  },
  'q1_b': {
    marks: 3,
    exemplar: 'Convert: 40 ms = 0.040 s. Use E = VIt → I = E/(V×t) = 180/(450 × 0.040) = 10 A. Award 3 marks for a correctly rounded value (10 A). Conversion of ms to s may be seen or implied. Method may alternatively use P = E/t = 4500 W then I = P/V = 10 A.',
    keyConcepts: ['convert milliseconds to seconds', 'E = VIt', 'current calculation', '10 A'],
    keywords: ['0.04', '0.040', '10', 'current', 'E = VIt', 'P = IV', '4500', 'charge', 'ampere'],
    feedbackHit: 'Correct — the current is 10 A. Good working shown.',
    feedbackMiss: 'Use E = VIt rearranged to I = E/(V×t). Convert 40 ms = 0.040 s. I = 180/(450 × 0.040) = 10 A.',
  },
  'q1_c': {
    marks: 1,
    exemplar: 'The particles must be charged so that they experience an electric force and are attracted to the oppositely (positively) charged collecting plates, which pulls them out of the gas stream. Accept: only charged particles are attracted/deflected by the field. Do not accept vague "so they stick" without reference to charge/attraction.',
    keyConcepts: ['charged particles attracted to opposite plate', 'electric force / attraction', 'removed from gas onto plate'],
    keywords: ['charge', 'attract', 'opposite', 'plate', 'force', 'field', 'collect', 'pull'],
    feedbackHit: 'Good — a charged particle is attracted to the oppositely charged collecting plate.',
    feedbackMiss: 'Only a charged particle feels a force in the field. The negatively charged soot is attracted to the positive collecting plate, removing it from the gas.',
  },
  'q1_d': {
    marks: 2,
    exemplar: 'Plate-type (any ONE of): large collecting-plate area collects more particles; can handle very large volumes / high flow rates of waste gas; suited to big power-station chimneys.\n\nTubular (any ONE of): the field around the central wire is stronger / more uniform so charging is more effective; particles cannot escape sideways past the plates; good for smaller gas flows; easier to clean by rapping the tube. Do NOT accept points common to both types.',
    keyConcepts: ['plate-type large area / high flow', 'tubular stronger or uniform field', 'no sideways escape', 'handles large volume'],
    keywords: ['area', 'large', 'volume', 'flow', 'uniform', 'stronger', 'field', 'escape', 'central', 'wire', 'clean'],
    feedbackHit: 'Good — a valid advantage for each precipitator design was identified.',
    feedbackMiss: 'Plate-type: e.g. large plate area handles a high gas-flow volume. Tubular: e.g. stronger/uniform field around the central wire, and particles can\'t escape sideways.',
  },

  // ── Q2 Refraction ────────────────────────────────────────────────
  'q2_a': {
    marks: 3,
    exemplar: 'Use f = v/λ. Convert 525 nm = 525 × 10⁻⁹ m. f = (3.0 × 10⁸)/(525 × 10⁻⁹) = 5.71 × 10¹⁴ Hz ≈ 5.7 × 10¹⁴ Hz. Award 3 marks for a correctly rounded answer to 2 significant figures.',
    keyConcepts: ['f = v/λ', 'convert nm to m', 'frequency calculation', '5.7 × 10¹⁴', 'two significant figures'],
    keywords: ['5.7', '5.71', '10¹⁴', 'Hz', 'frequency', 'wavelength', 'speed of light', 'f = v'],
    feedbackHit: 'Correct — the frequency of green light is approximately 5.7 × 10¹⁴ Hz.',
    feedbackMiss: 'Use f = v/λ. Convert 525 nm = 525 × 10⁻⁹ m. f = (3.0 × 10⁸)/(525 × 10⁻⁹) = 5.71 × 10¹⁴ Hz ≈ 5.7 × 10¹⁴ Hz.',
  },
  'q2_b': {
    marks: 1,
    exemplar: 'Yellow, orange or red (any colour with a longer wavelength than green — towards the red end of the visible spectrum).',
    keyConcepts: ['longer wavelength than green', 'yellow orange red', 'visible spectrum order'],
    keywords: ['yellow', 'orange', 'red'],
    feedbackHit: 'Correct — yellow, orange and red have longer wavelengths than green light.',
    feedbackMiss: 'Colours with longer wavelengths than green are yellow, orange and red (ROYGBIV — red has the longest wavelength).',
  },
  'q2_c': {
    marks: 1,
    exemplar: 'Frequency. When light refracts, its speed and wavelength change but its frequency remains constant.',
    keyConcepts: ['frequency constant', 'frequency unchanged during refraction'],
    keywords: ['frequency'],
    feedbackHit: 'Correct — frequency is the quantity that remains constant when light refracts.',
    feedbackMiss: 'When light refracts, its speed and wavelength change, but its frequency remains constant. Direction, speed and wavelength all change.',
  },
  'q2_d': {
    marks: 3,
    exemplar: 'Light travels from the fish to the angler\'s eye (from water to air). Light refracts / bends away from the normal as it passes from the denser medium (water) into the less dense medium (air). The eye/brain assumes light has travelled in a straight line, so the fish appears raised / closer to the surface / in a different position from reality.',
    keyConcepts: ['light travels fish to eye', 'refraction at water-air boundary', 'bends away from normal', 'brain assumes straight line', 'apparent position different'],
    keywords: ['refract', 'bend', 'normal', 'water', 'air', 'straight line', 'brain', 'eye', 'apparent', 'position', 'raised', 'denser'],
    feedbackHit: 'Good — refraction at the water surface and the straight-line assumption are both explained.',
    feedbackMiss: 'Light from the fish refracts (bends away from the normal) as it leaves the water into the air. The brain assumes a straight-line path, so the fish appears higher/shallower than it really is.',
  },
  'q2_e': {
    marks: 2,
    exemplar: 'A diverging (concave) lens spreads the light rays out (diverges them) before they enter the eye. This moves the focal point further back so that the rays now meet on the retina rather than in front of it, correcting short-sightedness. Award 1 mark for diverging/spreading the rays; 1 mark for shifting the focus onto the retina.',
    keyConcepts: ['diverging lens spreads rays', 'concave', 'shifts focal point back', 'image forms on retina'],
    keywords: ['diverge', 'spread', 'concave', 'focal point', 'retina', 'back', 'short-sighted'],
    feedbackHit: 'Good — the diverging lens spreads the rays so they focus on the retina.',
    feedbackMiss: 'A diverging (concave) lens spreads the rays out before they reach the eye, moving the focal point back onto the retina instead of in front of it.',
  },

  // ── Q3 Nuclear Fission ───────────────────────────────────────────
  'q3_a': {
    marks: 1,
    exemplar: 'Any one of: burning fossil fuels releases CO₂ / greenhouse gases causing climate change; they are non-renewable / finite; cause air pollution.',
    keyConcepts: ['greenhouse gases', 'non-renewable', 'air pollution', 'climate change'],
    keywords: ['CO2', 'carbon dioxide', 'greenhouse', 'pollution', 'finite', 'non-renewable', 'climate', 'warming'],
    feedbackHit: 'Correct — a valid problem with fossil fuels was given.',
    feedbackMiss: 'E.g. burning fossil fuels releases CO₂ (a greenhouse gas) causing climate change, and fossil fuels are non-renewable.',
  },
  'q3_b': {
    marks: 1,
    exemplar: 'U-236 has one more neutron than U-235 (both have the same number of protons — they are isotopes).',
    keyConcepts: ['one more neutron', 'same protons', 'isotope'],
    keywords: ['neutron', 'proton', 'mass number', 'isotope', 'one more', 'extra'],
    feedbackHit: 'Correct — U-236 has one extra neutron compared with U-235.',
    feedbackMiss: 'U-236 has one more neutron than U-235. The number of protons is the same, so they are isotopes of uranium.',
  },
  'q3_c': {
    marks: 1,
    exemplar: '3 neutrons. (Mass numbers: 236 = 141 + 92 + 3, so 3 neutrons are released.)',
    keyConcepts: ['mass numbers balance', '236 = 141 + 92 + 3', '3 neutrons'],
    keywords: ['3', 'three', 'neutron', '236', '141', '92', 'balance'],
    feedbackHit: 'Correct — 3 neutrons balance the equation.',
    feedbackMiss: 'Balance the mass numbers: 236 = 141 + 92 + (number of neutrons). 236 − 233 = 3 neutrons.',
  },
  'q3_d': {
    marks: 2,
    exemplar: 'Rearrange E = mc² → m = E/c². m = (3.2 × 10⁻¹¹)/(3.0 × 10⁸)² = (3.2 × 10⁻¹¹)/(9.0 × 10¹⁶) = 3.56 × 10⁻²⁸ kg ≈ 3.6 × 10⁻²⁸ kg. Award 1 mark for rearrangement/substitution and 1 mark for the correct value with unit.',
    keyConcepts: ['m = E/c²', '3.6 × 10⁻²⁸ kg', 'mass-energy equivalence', 'unit kg'],
    keywords: ['m=E/c2', '3.6', '3.56', '10⁻²⁸', 'kg', 'rearrange', 'divide', '9'],
    feedbackHit: 'Correct — the mass difference is about 3.6 × 10⁻²⁸ kg.',
    feedbackMiss: 'm = E/c² = (3.2 × 10⁻¹¹)/(3.0 × 10⁸)² = (3.2 × 10⁻¹¹)/(9.0 × 10¹⁶) = 3.6 × 10⁻²⁸ kg.',
  },
  'q3_e': {
    marks: 2,
    exemplar: 'Convert 11.5 GJ = 11.5 × 10⁹ J. Number of fissions = total energy / energy per fission = (11.5 × 10⁹)/(3.2 × 10⁻¹¹) = 3.59 × 10²⁰ ≈ 3.6 × 10²⁰ reactions.',
    keyConcepts: ['convert GJ to J', 'number = total energy / energy per fission', '3.6 × 10²⁰'],
    keywords: ['divide', 'gigajoule', '10⁹', '3.6', '3.59', '10²⁰', 'fission', 'reactions'],
    feedbackHit: 'Correct — about 3.6 × 10²⁰ fission reactions are required.',
    feedbackMiss: 'Convert 11.5 GJ = 11.5 × 10⁹ J, then divide by the energy per fission: (11.5 × 10⁹)/(3.2 × 10⁻¹¹) = 3.6 × 10²⁰.',
  },
  'q3_f': {
    marks: 2,
    exemplar: 'efficiency = useful power / total power → total power = useful/efficiency = (1.4 × 10⁹)/0.32 = 4.375 × 10⁹ ≈ 4.4 × 10⁹ W. Award 1 mark for rearrangement and 1 mark for the value with unit.',
    keyConcepts: ['efficiency = useful / total', 'total = useful / efficiency', '4.4 × 10⁹ W'],
    keywords: ['efficiency', 'useful', 'total', 'divide', '0.32', '32%', '4.4', '4.375', 'watt', 'power'],
    feedbackHit: 'Correct — the total power released is about 4.4 × 10⁹ W.',
    feedbackMiss: 'total power = useful power / efficiency = (1.4 × 10⁹)/0.32 = 4.4 × 10⁹ W.',
  },

  // ── Q4 Balloon car / Motion ──────────────────────────────────────
  'q4_a': {
    marks: 2,
    exemplar: 'f = 1/T = 1/0.08 = 12.5 Hz. Award 1 mark for the method (f = 1/T) and 1 mark for the value with unit (Hz).',
    keyConcepts: ['f = 1/T', '12.5 Hz', 'unit hertz'],
    keywords: ['1/T', '12.5', 'Hz', 'hertz', 'frequency', '0.08'],
    feedbackHit: 'Correct — the recording frequency is 12.5 Hz.',
    feedbackMiss: 'Frequency f = 1/T = 1/0.08 = 12.5 Hz.',
  },
  'q4_b': {
    marks: 1,
    exemplar: '36 cm s⁻¹ (read directly from the table at t = 0.24 s).',
    keyConcepts: ['read value from table', '36 cm/s at t = 0.24 s'],
    keywords: ['36', 'cm', 'velocity'],
    feedbackHit: 'Correct — the velocity at t = 0.24 s is 36 cm s⁻¹.',
    feedbackMiss: 'Read the velocity directly from the table at t = 0.24 s: 36 cm s⁻¹.',
  },
  'q4_c': {
    marks: 3,
    exemplar: 'Gradient = Δv/Δt = (60 − 12)/(0.40 − 0.08) = 48/0.32 = 150 cm s⁻² (= 1.5 m s⁻²). The gradient represents the acceleration of the car. Award 1 mark for reading two points, 1 mark for the value (150 cm s⁻² or 1.5 m s⁻²), 1 mark for stating the quantity is acceleration.',
    keyConcepts: ['gradient = Δv/Δt', '150 cm/s² or 1.5 m/s²', 'gradient = acceleration', 'unit'],
    keywords: ['gradient', '150', '1.5', 'cm/s²', 'm/s²', 'acceleration', 'Δv', 'Δt', '48', '0.32'],
    feedbackHit: 'Correct — gradient = 150 cm s⁻² (1.5 m s⁻²), which represents acceleration.',
    feedbackMiss: 'Gradient = Δv/Δt = (60 − 12)/(0.40 − 0.08) = 48/0.32 = 150 cm s⁻² (= 1.5 m s⁻²). This represents the acceleration.',
  },
  'q4_d': {
    marks: 2,
    exemplar: 'Prediction: the line of best fit would be steeper (a larger gradient) / reach a higher velocity. Justification: a larger balloon holds more air, so it provides a greater driving force (and more energy) over the run, producing a greater acceleration (F = ma). Award 1 mark for the prediction, 1 mark for a justification linking to force/energy.',
    keyConcepts: ['steeper line / larger gradient', 'greater acceleration', 'more air = more force/energy', 'F = ma'],
    keywords: ['steeper', 'gradient', 'greater', 'acceleration', 'force', 'energy', 'more air', 'thrust', 'F = ma'],
    feedbackHit: 'Good — a steeper line justified by greater force/energy from the larger balloon.',
    feedbackMiss: 'Prediction: a steeper line (greater gradient). Justification: more air gives a greater driving force/energy, so greater acceleration (F = ma).',
  },
  'q4_e': {
    marks: 2,
    exemplar: 'Any TWO of: human reaction-time error when starting/stopping the stopwatch; difficult to read the exact position at a precise instant (parallax); cannot easily capture many closely-spaced positions / instantaneous velocity; lower resolution/precision than frame-by-frame video. Award 1 mark per valid limitation (max 2).',
    keyConcepts: ['reaction-time error', 'parallax / reading position', 'fewer data points / no frame-by-frame', 'lower precision'],
    keywords: ['reaction', 'time', 'parallax', 'precise', 'instant', 'frames', 'data points', 'precision', 'error', 'human'],
    feedbackHit: 'Good — two valid limitations of ruler-and-stopwatch data identified.',
    feedbackMiss: 'E.g. (1) human reaction-time error when timing; (2) hard to capture many positions / instantaneous velocity, unlike frame-by-frame video.',
  },

  // ── Q5 Balloon-car investigation design (Crit B) ─────────────────
  'q5_a': {
    marks: 16,
    exemplar: 'A full-mark plan includes:\nVARIABLES (up to 3): IV = number of breaths of air used to inflate the balloon; DV = time taken to travel a fixed distance; a sensible control variable (e.g. same distance, same car/mass, same surface) with justification.\nHYPOTHESIS (up to 3): a testable "If…then…because…" statement, e.g. "If more breaths of air are used, then the time to travel the fixed distance will decrease, because more air gives a greater thrust force and acceleration."\nEQUIPMENT (up to 3): balloon car, metre rule / measured track, stopwatch (or light gates), marker for fixed distance; a method to standardise inflation (e.g. count breaths or measure balloon circumference).\nMETHOD (up to 4): inflate with the set number of breaths; release from the start line; time over the fixed distance; repeat; change the IV and repeat; logically ordered and replicable.\nSUFFICIENT DATA (up to 3): at least 5 different IV values, each repeated 3+ times, with means; controlled conditions. Award by the standard Crit B rubric bands.',
    keyConcepts: ['IV breaths of air', 'DV time over fixed distance', 'control variable justified', 'testable hypothesis', 'appropriate equipment', 'replicable method', 'repeats and range for sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'hypothesis', 'method', 'repeat', 'range', 'fair test', 'stopwatch', 'distance', 'breaths', 'inflate'],
    feedbackHit: 'Strong investigation plan — variables, hypothesis, equipment, method and sufficient-data strategy all addressed.',
    feedbackMiss: 'Include: IV (breaths of air), DV (time over a fixed distance), a justified control variable; a testable If…then…because hypothesis; an equipment list; a clear replicable method; and a sufficient-data plan (≥5 IV values, ≥3 repeats each).',
  },
  'q5_b': {
    marks: 1,
    exemplar: 'Any sensible alternative research question using the balloon car, e.g. "How does the mass added to the balloon car affect the distance it travels?" or "How does the surface type affect the time to travel a fixed distance?"',
    keyConcepts: ['alternative IV', 'measurable DV', 'about the balloon car'],
    keywords: ['how does', 'affect', 'mass', 'surface', 'distance', 'balloon car'],
    feedbackHit: 'Good — a valid alternative research question was suggested.',
    feedbackMiss: 'E.g. "How does the mass added to the balloon car affect the distance it travels before stopping?"',
  },

  // ── Q6 Solar (photovoltaic) cell ─────────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'How does the light intensity affect the voltage produced by the solar cell? (Must name a sensible IV and DV.)',
    keyConcepts: ['research question links IV and DV', 'light intensity', 'voltage'],
    keywords: ['how does', 'intensity', 'light', 'voltage', 'affect', 'solar'],
    feedbackHit: 'Good — a clear research question linking light intensity to voltage.',
    feedbackMiss: 'A research question should link the IV and DV, e.g. "How does the light intensity affect the voltage produced by the solar cell?"',
  },
  'q6_b': {
    marks: 2,
    exemplar: 'A voltmeter (to measure the voltage) and a light meter / lux meter (to measure the light intensity). Award 1 mark each.',
    keyConcepts: ['voltmeter', 'light meter / lux meter'],
    keywords: ['voltmeter', 'light meter', 'lux', 'meter', 'voltage', 'intensity'],
    feedbackHit: 'Correct — a voltmeter and a light meter are needed.',
    feedbackMiss: 'You need a voltmeter (for voltage) and a light meter / lux meter (for light intensity).',
  },
  'q6_c': {
    marks: 1,
    exemplar: 'Corrected intensity = meter reading − zero error = 6.0 − 0.2 = 5.8 klux.',
    keyConcepts: ['subtract zero error', '6.0 − 0.2', '5.8 klux'],
    keywords: ['5.8', '6.0', '0.2', 'klux', 'zero error', 'subtract'],
    feedbackHit: 'Correct — the corrected intensity is 5.8 klux.',
    feedbackMiss: 'Subtract the zero error from the reading: 6.0 − 0.2 = 5.8 klux.',
  },
  'q6_d': {
    marks: 4,
    exemplar: 'A correct graph has: X-axis = light intensity / klux, Y-axis = voltage / V, both labelled with units (1); a sensible scale using more than half the grid (1); all five points plotted correctly, including (5.8, 0.46) (1); a suitable single line/curve of best fit (1).',
    keyConcepts: ['labelled axes with units', 'sensible scale', 'points plotted correctly', 'line of best fit'],
    keywords: ['axes', 'label', 'units', 'scale', 'plot', 'points', 'line of best fit', 'intensity', 'voltage'],
    feedbackHit: 'Good graph — axes, scale, points and line of best fit all correct.',
    feedbackMiss: 'Label both axes with units (intensity/klux on x, voltage/V on y), use a sensible scale, plot all five points, and draw a single best-fit line/curve.',
  },
  'q6_e': {
    marks: 2,
    exemplar: 'The claim is NOT fully valid. Although the line passes close to the origin, the ratio V/intensity is not constant — it decreases as intensity increases (e.g. 0.18/2.0 = 0.090 but 0.66/10.0 = 0.066), so the graph curves and the voltage rises less steeply at higher intensities. The voltage is therefore only approximately proportional at low intensity and saturates at higher intensity. Award 1 mark for the judgement, 1 mark for justification using the data.',
    keyConcepts: ['not directly proportional', 'ratio V/intensity not constant', 'curve / saturates', 'evidence from data'],
    keywords: ['not', 'proportional', 'ratio', 'constant', 'curve', 'saturate', 'origin', '0.090', '0.066', 'decrease'],
    feedbackHit: 'Good — you judged validity and supported it with the changing V/intensity ratio.',
    feedbackMiss: 'Test V/intensity for each row: it falls from 0.090 to 0.066, so it is not constant. The line curves/saturates, so V is not directly proportional to intensity.',
  },
  'q6_f': {
    marks: 2,
    exemplar: 'Draw the line of best fit, then choose two points far apart on the line and read their coordinates. The increase in voltage per klux is the gradient = ΔV/Δintensity (rise ÷ run). Award 1 mark for "find the gradient of the line", 1 mark for ΔV/Δintensity using two points on the line (not raw data points).',
    keyConcepts: ['gradient of line of best fit', 'ΔV/Δintensity', 'two points far apart on the line'],
    keywords: ['gradient', 'ΔV', 'Δintensity', 'rise', 'run', 'two points', 'line of best fit', 'slope'],
    feedbackHit: 'Correct — the value is the gradient ΔV/Δintensity of the line of best fit.',
    feedbackMiss: 'Take two points far apart on the line of best fit and calculate the gradient = ΔV/Δintensity (rise ÷ run).',
  },
  'q6_g': {
    marks: 2,
    exemplar: 'P = VI = 0.42 × 0.13 = 0.0546 W ≈ 0.055 W (or 54.6 mW). Award 1 mark for P = VI substitution, 1 mark for the value with unit (W).',
    keyConcepts: ['P = VI', '0.055 W', 'unit watt'],
    keywords: ['P = VI', '0.42', '0.13', '0.055', '0.0546', 'W', 'watt', 'power'],
    feedbackHit: 'Correct — the motor power is about 0.055 W.',
    feedbackMiss: 'Use P = VI = 0.42 × 0.13 = 0.055 W (≈ 55 mW).',
  },
  'q6_h': {
    marks: 2,
    exemplar: 'A valid improvement with justification, e.g.: reduce the mass of the car / reduce friction in the wheels / use a lighter, more efficient propeller — because a smaller resistive force (or smaller mass) gives a larger resultant force and hence greater acceleration (F = ma). Award 1 mark for the improvement, 1 mark for the scientific justification.',
    keyConcepts: ['reduce mass or friction', 'greater resultant force', 'F = ma', 'increase acceleration'],
    keywords: ['mass', 'friction', 'lighter', 'resistive', 'force', 'F = ma', 'acceleration', 'resultant', 'efficient'],
    feedbackHit: 'Good — a sensible improvement justified with F = ma / reduced resistive force.',
    feedbackMiss: 'E.g. reduce the car\'s mass or friction so the resultant force produces a greater acceleration (F = ma).',
  },
  'q6_i': {
    marks: 1,
    exemplar: 'Electrical. The useful energy chain for the solar propeller car is: Light → Electrical → Kinetic.',
    keyConcepts: ['light to electrical to kinetic', 'electrical energy in chain'],
    keywords: ['electrical', 'electric'],
    feedbackHit: 'Correct — Light → Electrical → Kinetic.',
    feedbackMiss: 'The solar cell converts light into electrical energy, which powers the motor to produce kinetic energy. The chain is: Light → Electrical → Kinetic.',
  },
  'q6_j': {
    marks: 4,
    exemplar: 'Award 1 mark each for: (1) a valid IV (e.g. length of propeller blades / light intensity on the cell / mass of car / angle of slope). Do NOT accept voltage, current or power of the motor as IVs. (2) a valid DV (e.g. time to travel a set distance / distance in a set time / speed of car). (3+4) two valid CVs consistent with the chosen IV and DV (e.g. if IV = propeller length, CVs could be light intensity, mass of car, surface type).',
    keyConcepts: ['valid IV not voltage/current/power', 'valid DV about car motion', 'two CVs consistent with IV/DV'],
    keywords: ['independent', 'dependent', 'control', 'propeller', 'intensity', 'distance', 'time', 'speed', 'mass', 'consistent'],
    feedbackHit: 'Good variable identification — IV, DV and two consistent CVs all correct.',
    feedbackMiss: 'IV: e.g. propeller length (not voltage/current/power). DV: e.g. time to travel a fixed distance. CVs: variables kept constant that could affect the result (e.g. light intensity, mass, surface).',
  },
  'q6_k': {
    marks: 2,
    exemplar: 'A hypothesis linking the chosen IV to the DV from part (j) with a scientific reason, e.g.: "If the propeller blades are longer, then the distance travelled in a fixed time will increase, because longer blades push against more air, giving a greater thrust force on the car." Award 1 mark for linking IV and DV, 1 mark for the scientific justification.',
    keyConcepts: ['hypothesis links IV to DV', 'if-then-because format', 'scientific explanation'],
    keywords: ['if', 'then', 'because', 'increases', 'decreases', 'force', 'thrust', 'air', 'scientific'],
    feedbackHit: 'Good hypothesis — IV, DV and scientific reasoning clearly linked.',
    feedbackMiss: 'Format: "If [IV changes], then [DV changes], because [scientific reason]." Refer to force, energy or another physical principle.',
  },

  // ── Q7 Newton\'s Cannonball / Satellite Navigation ────────────────
  'q7_a': {
    marks: 1,
    exemplar: 'All four must be correct: C = 0 m s⁻¹ (falls straight down); A = 4700 m s⁻¹ (falls back to Earth in a curved arc); B = 7800 m s⁻¹ (circular orbit); D = 14 200 m s⁻¹ (escape trajectory). All four correct for 1 mark.',
    keyConcepts: ['C = 0 falls straight', 'A = 4700 curved arc', 'B = 7800 circular orbit', 'D = 14200 escape'],
    keywords: ['0', '4700', '7800', '14200', 'orbit', 'escape', 'circular'],
    feedbackHit: 'Correct — all four speed-to-path matchings are correct.',
    feedbackMiss: 'C (0 m s⁻¹): straight down. A (4700): curves back to Earth. B (7800): circular orbit. D (14 200): escape velocity.',
  },
  'q7_b': {
    marks: 1,
    exemplar: 'A. The cannonball in circular orbit has only ONE force acting on it — gravity, directed towards the centre of the Earth. Diagram A shows a single downward (inward) arrow representing the gravitational force only.',
    keyConcepts: ['only gravity acts on orbiting cannonball', 'force towards Earth centre', 'diagram A single inward arrow'],
    keywords: ['A', 'gravity', 'gravitational', 'centre', 'one force', 'inward', 'single'],
    feedbackHit: 'Correct — in orbit only gravity acts, directed towards Earth\'s centre (diagram A).',
    feedbackMiss: 'In orbit the only force is gravity, towards Earth\'s centre — a single inward arrow (diagram A). There is no thrust or outward force.',
  },
  'q7_c': {
    marks: 14,
    exemplar: 'Full marks (14) require all four aspects at the highest level:\n\nSCIENTIFIC & TECHNOLOGICAL CHALLENGES (up to 4): high thrust needed to overcome gravity and reach ~20 000 km orbit; extremely accurate atomic clocks and relativity corrections; precise orbital placement so several satellites are always in view; avoiding collisions with other satellites/debris; weak signals vulnerable to jamming/spoofing.\n\nPOLITICAL IMPLICATIONS (up to 4): national security risk in depending on another country\'s system (e.g. the US can degrade GPS); motivation for the EU (Galileo) and China (BeiDou) to build independent systems; control over positioning gives strategic/military advantage.\n\nECONOMIC IMPLICATIONS — positive AND negative (up to 4): Positive: huge global market; underpins aviation, shipping, farming, finance; stimulates innovation and jobs. Negative: over-reliance on a few providers; cost of building/maintaining a constellation; disruption (jamming) could cause large economic damage.\n\nCONCLUDING APPRAISAL (up to 2): a balanced, justified conclusion linked to the points above.',
    keyConcepts: ['thrust to reach orbit', 'atomic clocks / relativity', 'orbital placement', 'debris / jamming', 'national security dependence', 'independent systems', 'global market and jobs', 'over-reliance', 'concluding appraisal justified'],
    keywords: ['gravity', 'thrust', 'orbit', 'atomic clock', 'relativity', 'debris', 'jamming', 'security', 'national', 'galileo', 'beidou', 'market', 'reliance', 'innovation', 'conclude', 'appraisal'],
    feedbackHit: 'Excellent discussion — scientific challenges, political and economic implications all evaluated with evidence.',
    feedbackMiss: 'Address all four: (1) scientific/tech challenges (reaching orbit, atomic clocks, debris, jamming); (2) political (dependence/national security, independent systems); (3) economic (+ and −: market/jobs vs over-reliance/cost); (4) a justified concluding appraisal.',
  },

  // ── Q8 Fusion Power Plant ────────────────────────────────────────
  'q8_': {
    marks: 8,
    exemplar: 'Full marks (8) require:\n\nBENEFITS (up to 3): clean energy with no greenhouse gases; almost limitless fuel (hydrogen from water); very little long-lived radioactive waste compared with fission; opportunity to be a world leader in energy technology; energy security.\n\nLIMITATIONS (up to 3): requires temperatures over 100 million °C that are extremely hard to sustain; no reactor has yet produced sustained net energy gain; enormous cost (tens of billions); long time before any commercial return; risk the project never succeeds.\n\nCONCLUSION (up to 2): a clear, justified opinion (should or should not fund) that balances both sides.',
    keyConcepts: ['clean / no greenhouse gases', 'limitless fuel', 'little long-lived waste', 'extreme temperature challenge', 'no net energy gain yet', 'huge cost', 'conclusion with justification'],
    keywords: ['clean', 'greenhouse', 'limitless', 'fuel', 'hydrogen', 'waste', 'temperature', 'net energy', 'cost', 'expensive', 'conclusion', 'justify', 'benefit', 'limitation'],
    feedbackHit: 'Well-structured response with valid benefits, limitations and a justified conclusion.',
    feedbackMiss: 'BENEFITS (e.g. clean, limitless fuel, little waste). LIMITATIONS (e.g. 100-million-°C challenge, no net gain yet, extreme cost). CONCLUSION: a balanced, justified opinion.',
  },
}
