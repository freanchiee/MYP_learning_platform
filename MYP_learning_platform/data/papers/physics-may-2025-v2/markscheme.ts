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

  // ── Q1 Electrostatic paint spraying ──────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Electrons',
    keyConcepts: ['electrons move', 'free electrons', 'negative charge carriers'],
    keywords: ['electrons', 'electron'],
    feedbackHit: 'Correct — electrons are the charge carriers that move to give the paint droplets their negative charge.',
    feedbackMiss: 'Electrons are the particles that move in a conductor to transfer charge. Protons, atoms and neutrons do not move freely.',
  },
  'q1_b': {
    marks: 3,
    exemplar: 'Convert: 50 ms = 0.050 s. Use E = VIt → I = E/(V×t) = 240/(600 × 0.050) = 8 A. Award 3 marks for a correctly rounded value (8 A). Conversion of ms to s may be seen or implied. Method may alternatively use P = E/t = 4800 W then I = P/V = 8 A.',
    keyConcepts: ['convert milliseconds to seconds', 'E = VIt', 'current calculation', '8 A'],
    keywords: ['0.05', '0.050', '8', 'current', 'E = VIt', 'P = IV', '4800', 'charge', 'ampere'],
    feedbackHit: 'Correct — the current is 8 A. Good working shown.',
    feedbackMiss: 'Use E = VIt rearranged to I = E/(V×t). Convert 50 ms = 0.050 s. I = 240/(600 × 0.050) = 8 A.',
  },
  'q1_c': {
    marks: 1,
    exemplar: 'The droplets must be charged so that they experience an electric force and are attracted to the oppositely (positively) charged earthed panel — even wrapping around to coat the back — giving an even coat with little wasted paint. Accept: only charged droplets are attracted/deflected toward the panel. Do not accept vague "so they stick" without reference to charge/attraction.',
    keyConcepts: ['charged droplet attracted to opposite panel', 'electric force / attraction', 'even coat / wraps around'],
    keywords: ['charge', 'attract', 'opposite', 'panel', 'force', 'field', 'even', 'coat', 'around'],
    feedbackHit: 'Good — a charged droplet is attracted to the oppositely charged earthed panel, giving an even coat.',
    feedbackMiss: 'Only a charged droplet feels a force in the field. The negative droplets are attracted to the positive earthed panel, even wrapping around it, so the coat is even.',
  },
  'q1_d': {
    marks: 2,
    exemplar: 'Corona gun (any ONE of): simple and cheap; charges the paint very strongly at the sharp electrode tip; good for fine, detailed work / small areas.\n\nBell gun (any ONE of): the spinning disc atomises the paint into very fine, even droplets; covers a large area quickly with less wasted paint; produces a smoother, more uniform finish. Do NOT accept points common to both types.',
    keyConcepts: ['corona simple/cheap/strong charge', 'bell fine even atomisation', 'bell covers large area / less waste', 'bell smoother finish'],
    keywords: ['simple', 'cheap', 'sharp', 'electrode', 'detail', 'spin', 'atomise', 'fine', 'even', 'large area', 'waste', 'smooth', 'uniform'],
    feedbackHit: 'Good — a valid advantage for each spray-gun design was identified.',
    feedbackMiss: 'Corona gun: e.g. simple/cheap and charges paint strongly at the sharp tip. Bell gun: e.g. the spinning disc makes very fine, even droplets that coat a large area quickly with less waste.',
  },

  // ── Q2 Refraction ────────────────────────────────────────────────
  'q2_a': {
    marks: 3,
    exemplar: 'Use f = v/λ. Convert 450 nm = 450 × 10⁻⁹ m. f = (3.0 × 10⁸)/(450 × 10⁻⁹) = 6.67 × 10¹⁴ Hz ≈ 6.7 × 10¹⁴ Hz. Award 3 marks for a correctly rounded answer to 2 significant figures.',
    keyConcepts: ['f = v/λ', 'convert nm to m', 'frequency calculation', '6.7 × 10¹⁴', 'two significant figures'],
    keywords: ['6.7', '6.67', '10¹⁴', 'Hz', 'frequency', 'wavelength', 'speed of light', 'f = v'],
    feedbackHit: 'Correct — the frequency of blue light is approximately 6.7 × 10¹⁴ Hz.',
    feedbackMiss: 'Use f = v/λ. Convert 450 nm = 450 × 10⁻⁹ m. f = (3.0 × 10⁸)/(450 × 10⁻⁹) = 6.67 × 10¹⁴ Hz ≈ 6.7 × 10¹⁴ Hz.',
  },
  'q2_b': {
    marks: 1,
    exemplar: 'Green, yellow, orange or red (any colour with a longer wavelength than blue — towards the red end of the visible spectrum).',
    keyConcepts: ['longer wavelength than blue', 'green yellow orange red', 'visible spectrum order'],
    keywords: ['green', 'yellow', 'orange', 'red'],
    feedbackHit: 'Correct — green, yellow, orange and red all have longer wavelengths than blue light.',
    feedbackMiss: 'Colours with longer wavelengths than blue are green, yellow, orange and red (ROYGBIV — red has the longest wavelength, violet the shortest).',
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
    exemplar: 'Light travels from the coin to the swimmer\'s eye (from water to air). Light refracts / bends away from the normal as it passes from the denser medium (water) into the less dense medium (air). The eye/brain assumes light has travelled in a straight line, so the coin appears raised / shallower / in a different position from reality.',
    keyConcepts: ['light travels coin to eye', 'refraction at water-air boundary', 'bends away from normal', 'brain assumes straight line', 'apparent position shallower'],
    keywords: ['refract', 'bend', 'normal', 'water', 'air', 'straight line', 'brain', 'eye', 'apparent', 'position', 'shallower', 'raised', 'denser'],
    feedbackHit: 'Good — refraction at the water surface and the straight-line assumption are both explained.',
    feedbackMiss: 'Light from the coin refracts (bends away from the normal) as it leaves the water into the air. The brain assumes a straight-line path, so the coin appears shallower/closer to the surface than it really is.',
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
    exemplar: '2 neutrons. (Mass numbers: 236 = 144 + 90 + 2, so 2 neutrons are released.)',
    keyConcepts: ['mass numbers balance', '236 = 144 + 90 + 2', '2 neutrons'],
    keywords: ['2', 'two', 'neutron', '236', '144', '90', 'balance'],
    feedbackHit: 'Correct — 2 neutrons balance the equation.',
    feedbackMiss: 'Balance the mass numbers: 236 = 144 + 90 + (number of neutrons). 236 − 234 = 2 neutrons.',
  },
  'q3_d': {
    marks: 2,
    exemplar: 'Rearrange E = mc² → m = E/c². m = (2.9 × 10⁻¹¹)/(3.0 × 10⁸)² = (2.9 × 10⁻¹¹)/(9.0 × 10¹⁶) = 3.22 × 10⁻²⁸ kg ≈ 3.2 × 10⁻²⁸ kg. Award 1 mark for rearrangement/substitution and 1 mark for the correct value with unit (kg).',
    keyConcepts: ['m = E/c²', '3.2 × 10⁻²⁸ kg', 'mass-energy equivalence', 'unit kg'],
    keywords: ['m=E/c2', '3.2', '3.22', '10⁻²⁸', 'kg', 'rearrange', 'divide', '9'],
    feedbackHit: 'Correct — the mass difference is about 3.2 × 10⁻²⁸ kg.',
    feedbackMiss: 'm = E/c² = (2.9 × 10⁻¹¹)/(3.0 × 10⁸)² = (2.9 × 10⁻¹¹)/(9.0 × 10¹⁶) = 3.2 × 10⁻²⁸ kg.',
  },
  'q3_e': {
    marks: 2,
    exemplar: 'Convert 10.4 GJ = 10.4 × 10⁹ J. Number of fissions = total energy / energy per fission = (10.4 × 10⁹)/(2.9 × 10⁻¹¹) = 3.59 × 10²⁰ ≈ 3.6 × 10²⁰ reactions.',
    keyConcepts: ['convert GJ to J', 'number = total energy / energy per fission', '3.6 × 10²⁰'],
    keywords: ['divide', 'gigajoule', '10⁹', '3.6', '3.59', '10²⁰', 'fission', 'reactions'],
    feedbackHit: 'Correct — about 3.6 × 10²⁰ fission reactions are required.',
    feedbackMiss: 'Convert 10.4 GJ = 10.4 × 10⁹ J, then divide by the energy per fission: (10.4 × 10⁹)/(2.9 × 10⁻¹¹) = 3.6 × 10²⁰.',
  },
  'q3_f': {
    marks: 2,
    exemplar: 'efficiency = useful power / total power → total power = useful/efficiency = (1.6 × 10⁹)/0.38 = 4.21 × 10⁹ ≈ 4.2 × 10⁹ W. Award 1 mark for rearrangement and 1 mark for the value with unit (W).',
    keyConcepts: ['efficiency = useful / total', 'total = useful / efficiency', '4.2 × 10⁹ W'],
    keywords: ['efficiency', 'useful', 'total', 'divide', '0.38', '38%', '4.2', '4.21', 'watt', 'power'],
    feedbackHit: 'Correct — the total power released is about 4.2 × 10⁹ W.',
    feedbackMiss: 'total power = useful power / efficiency = (1.6 × 10⁹)/0.38 = 4.2 × 10⁹ W.',
  },

  // ── Q4 Wind-up car / Motion ──────────────────────────────────────
  'q4_a': {
    marks: 2,
    exemplar: 'f = 1/T = 1/0.05 = 20 Hz. Award 1 mark for the method (f = 1/T) and 1 mark for the value with unit (Hz).',
    keyConcepts: ['f = 1/T', '20 Hz', 'unit hertz'],
    keywords: ['1/T', '20', 'Hz', 'hertz', 'frequency', '0.05'],
    feedbackHit: 'Correct — the recording frequency is 20 Hz.',
    feedbackMiss: 'Frequency f = 1/T = 1/0.05 = 20 Hz.',
  },
  'q4_b': {
    marks: 1,
    exemplar: '32 cm s⁻¹ (read directly from the table at t = 0.20 s).',
    keyConcepts: ['read value from table', '32 cm/s at t = 0.20 s'],
    keywords: ['32', 'cm', 'velocity'],
    feedbackHit: 'Correct — the velocity at t = 0.20 s is 32 cm s⁻¹.',
    feedbackMiss: 'Read the velocity directly from the table at t = 0.20 s: 32 cm s⁻¹.',
  },
  'q4_c': {
    marks: 3,
    exemplar: 'Gradient = Δv/Δt = (40 − 8)/(0.25 − 0.05) = 32/0.20 = 160 cm s⁻² (= 1.6 m s⁻²). The gradient represents the acceleration of the car. Award 1 mark for reading two points, 1 mark for the value (160 cm s⁻² or 1.6 m s⁻²), 1 mark for stating the quantity is acceleration.',
    keyConcepts: ['gradient = Δv/Δt', '160 cm/s² or 1.6 m/s²', 'gradient = acceleration', 'unit'],
    keywords: ['gradient', '160', '1.6', 'cm/s²', 'm/s²', 'acceleration', 'Δv', 'Δt', '32', '0.20'],
    feedbackHit: 'Correct — gradient = 160 cm s⁻² (1.6 m s⁻²), which represents acceleration.',
    feedbackMiss: 'Gradient = Δv/Δt = (40 − 8)/(0.25 − 0.05) = 32/0.20 = 160 cm s⁻² (= 1.6 m s⁻²). This represents the acceleration.',
  },
  'q4_d': {
    marks: 2,
    exemplar: 'Prediction: the line of best fit would be steeper (a larger gradient) / reach a higher velocity. Justification: winding with twice as many turns stores more elastic potential energy in the spring, so it provides a greater driving force when released, producing a greater acceleration (F = ma). Award 1 mark for the prediction, 1 mark for a justification linking to force/energy.',
    keyConcepts: ['steeper line / larger gradient', 'greater acceleration', 'more turns = more elastic PE/force', 'F = ma'],
    keywords: ['steeper', 'gradient', 'greater', 'acceleration', 'force', 'energy', 'more turns', 'spring', 'elastic', 'F = ma'],
    feedbackHit: 'Good — a steeper line justified by greater stored energy/force from more winding.',
    feedbackMiss: 'Prediction: a steeper line (greater gradient). Justification: more turns stores more elastic PE in the spring, giving a greater driving force, so greater acceleration (F = ma).',
  },
  'q4_e': {
    marks: 2,
    exemplar: 'Any TWO of: human reaction-time error when starting/stopping the stopwatch; difficult to read the exact position at a precise instant (parallax); cannot easily capture many closely-spaced positions / instantaneous velocity; lower resolution/precision than frame-by-frame video. Award 1 mark per valid limitation (max 2).',
    keyConcepts: ['reaction-time error', 'parallax / reading position', 'fewer data points / no frame-by-frame', 'lower precision'],
    keywords: ['reaction', 'time', 'parallax', 'precise', 'instant', 'frames', 'data points', 'precision', 'error', 'human'],
    feedbackHit: 'Good — two valid limitations of ruler-and-stopwatch data identified.',
    feedbackMiss: 'E.g. (1) human reaction-time error when timing; (2) hard to capture many positions / instantaneous velocity, unlike frame-by-frame video.',
  },

  // ── Q5 Wind-up car investigation design (Crit B) ─────────────────
  'q5_a': {
    marks: 16,
    exemplar: 'A full-mark plan includes:\nVARIABLES (up to 3): IV = number of turns used to wind the spring; DV = time taken to travel a fixed distance; a sensible control variable (e.g. same distance, same car/mass, same surface) with justification.\nHYPOTHESIS (up to 3): a testable "If…then…because…" statement, e.g. "If more turns are used to wind the spring, then the time to travel the fixed distance will decrease, because more turns store more elastic potential energy, giving a greater driving force and acceleration."\nEQUIPMENT (up to 3): wind-up car, metre rule / measured track, stopwatch (or light gates), marker for fixed distance; a way to count the winding turns consistently.\nMETHOD (up to 4): wind the spring with the set number of turns; release from the start line; time over the fixed distance; repeat; change the IV and repeat; logically ordered and replicable.\nSUFFICIENT DATA (up to 3): at least 5 different IV values, each repeated 3+ times, with means; controlled conditions. Award by the standard Crit B rubric bands.',
    keyConcepts: ['IV number of winding turns', 'DV time over fixed distance', 'control variable justified', 'testable hypothesis', 'appropriate equipment', 'replicable method', 'repeats and range for sufficient data'],
    keywords: ['independent', 'dependent', 'control', 'hypothesis', 'method', 'repeat', 'range', 'fair test', 'stopwatch', 'distance', 'turns', 'wind', 'spring'],
    feedbackHit: 'Strong investigation plan — variables, hypothesis, equipment, method and sufficient-data strategy all addressed.',
    feedbackMiss: 'Include: IV (number of winding turns), DV (time over a fixed distance), a justified control variable; a testable If…then…because hypothesis; an equipment list; a clear replicable method; and a sufficient-data plan (≥5 IV values, ≥3 repeats each).',
  },
  'q5_b': {
    marks: 1,
    exemplar: 'Any sensible alternative research question using the wind-up car, e.g. "How does the mass added to the wind-up car affect the distance it travels?" or "How does the surface type affect the time to travel a fixed distance?"',
    keyConcepts: ['alternative IV', 'measurable DV', 'about the wind-up car'],
    keywords: ['how does', 'affect', 'mass', 'surface', 'distance', 'wind-up car'],
    feedbackHit: 'Good — a valid alternative research question was suggested.',
    feedbackMiss: 'E.g. "How does the mass added to the wind-up car affect the distance it travels before stopping?"',
  },

  // ── Q6 Wind-turbine generator ────────────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'How does the wind speed affect the voltage produced by the wind turbine? (Must name a sensible IV and DV.)',
    keyConcepts: ['research question links IV and DV', 'wind speed', 'voltage'],
    keywords: ['how does', 'wind speed', 'voltage', 'affect', 'turbine'],
    feedbackHit: 'Good — a clear research question linking wind speed to voltage.',
    feedbackMiss: 'A research question should link the IV and DV, e.g. "How does the wind speed affect the voltage produced by the wind turbine?"',
  },
  'q6_b': {
    marks: 2,
    exemplar: 'A voltmeter (to measure the voltage) and an anemometer (to measure the wind speed). Award 1 mark each.',
    keyConcepts: ['voltmeter', 'anemometer'],
    keywords: ['voltmeter', 'anemometer', 'wind speed', 'voltage', 'measure'],
    feedbackHit: 'Correct — a voltmeter and an anemometer are needed.',
    feedbackMiss: 'You need a voltmeter (for voltage) and an anemometer (for wind speed).',
  },
  'q6_c': {
    marks: 1,
    exemplar: 'Corrected wind speed = meter reading − calibration error = 5.0 − 0.4 = 4.6 m s⁻¹.',
    keyConcepts: ['subtract calibration error', '5.0 − 0.4', '4.6 m/s'],
    keywords: ['4.6', '5.0', '0.4', 'm/s', 'calibration error', 'subtract'],
    feedbackHit: 'Correct — the corrected wind speed is 4.6 m s⁻¹.',
    feedbackMiss: 'Subtract the calibration error from the reading: 5.0 − 0.4 = 4.6 m s⁻¹.',
  },
  'q6_d': {
    marks: 4,
    exemplar: 'A correct graph has: X-axis = wind speed / m s⁻¹, Y-axis = voltage / V, both labelled with units (1); a sensible scale using more than half the grid (1); all five points plotted correctly, including (4.6, 0.56) (1); a suitable single line/curve of best fit (1).',
    keyConcepts: ['labelled axes with units', 'sensible scale', 'points plotted correctly', 'line of best fit'],
    keywords: ['axes', 'label', 'units', 'scale', 'plot', 'points', 'line of best fit', 'wind speed', 'voltage'],
    feedbackHit: 'Good graph — axes, scale, points and line of best fit all correct.',
    feedbackMiss: 'Label both axes with units (wind speed/m s⁻¹ on x, voltage/V on y), use a sensible scale, plot all five points, and draw a single best-fit line/curve.',
  },
  'q6_e': {
    marks: 2,
    exemplar: 'The claim is NOT fully valid. Although the line rises steadily, the ratio V/wind speed is not constant — it decreases as wind speed increases (e.g. 0.16/1.0 = 0.160 but 0.84/9.0 = 0.093), so the graph curves and the voltage rises less steeply at higher wind speeds. The voltage is therefore only approximately proportional at low wind speed and levels off at higher speed. Award 1 mark for the judgement, 1 mark for justification using the data.',
    keyConcepts: ['not directly proportional', 'ratio V/wind speed not constant', 'curve / levels off', 'evidence from data'],
    keywords: ['not', 'proportional', 'ratio', 'constant', 'curve', 'level off', 'origin', '0.160', '0.093', 'decrease'],
    feedbackHit: 'Good — you judged validity and supported it with the changing V/wind-speed ratio.',
    feedbackMiss: 'Test V/wind speed for each row: it falls from 0.160 to 0.093, so it is not constant. The line curves/levels off, so V is not directly proportional to wind speed.',
  },
  'q6_f': {
    marks: 2,
    exemplar: 'Draw the line of best fit, then choose two points far apart on the line and read their coordinates. The increase in voltage per 1 m s⁻¹ is the gradient = ΔV/Δ(wind speed) (rise ÷ run). Award 1 mark for "find the gradient of the line", 1 mark for ΔV/Δ(wind speed) using two points on the line (not raw data points).',
    keyConcepts: ['gradient of line of best fit', 'ΔV/Δwind speed', 'two points far apart on the line'],
    keywords: ['gradient', 'ΔV', 'wind speed', 'rise', 'run', 'two points', 'line of best fit', 'slope'],
    feedbackHit: 'Correct — the value is the gradient ΔV/Δ(wind speed) of the line of best fit.',
    feedbackMiss: 'Take two points far apart on the line of best fit and calculate the gradient = ΔV/Δ(wind speed) (rise ÷ run).',
  },
  'q6_g': {
    marks: 2,
    exemplar: 'P = VI = 0.48 × 0.15 = 0.072 W (= 72 mW). Award 1 mark for P = VI substitution, 1 mark for the value with unit (W).',
    keyConcepts: ['P = VI', '0.072 W', 'unit watt'],
    keywords: ['P = VI', '0.48', '0.15', '0.072', '72', 'W', 'watt', 'mW', 'power'],
    feedbackHit: 'Correct — the motor power is 0.072 W.',
    feedbackMiss: 'Use P = VI = 0.48 × 0.15 = 0.072 W (= 72 mW).',
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
    exemplar: 'Electrical. The useful energy chain for the wind-turbine propeller car is: Kinetic (of the air/wind) → Electrical → Kinetic (of the car).',
    keyConcepts: ['kinetic to electrical to kinetic', 'electrical energy in chain'],
    keywords: ['electrical', 'electric'],
    feedbackHit: 'Correct — Kinetic → Electrical → Kinetic.',
    feedbackMiss: 'The turbine converts the kinetic energy of the air into electrical energy, which powers the motor to produce kinetic energy of the car. The chain is: Kinetic → Electrical → Kinetic.',
  },
  'q6_j': {
    marks: 4,
    exemplar: 'Award 1 mark each for: (1) a valid IV (e.g. length of propeller blades / wind speed on the turbine / mass of car / angle of slope). Do NOT accept voltage, current or power of the motor as IVs. (2) a valid DV (e.g. time to travel a set distance / distance in a set time / speed of car). (3+4) two valid CVs consistent with the chosen IV and DV (e.g. if IV = propeller length, CVs could be wind speed, mass of car, surface type).',
    keyConcepts: ['valid IV not voltage/current/power', 'valid DV about car motion', 'two CVs consistent with IV/DV'],
    keywords: ['independent', 'dependent', 'control', 'propeller', 'wind speed', 'distance', 'time', 'speed', 'mass', 'consistent'],
    feedbackHit: 'Good variable identification — IV, DV and two consistent CVs all correct.',
    feedbackMiss: 'IV: e.g. propeller length (not voltage/current/power). DV: e.g. time to travel a fixed distance. CVs: variables kept constant that could affect the result (e.g. wind speed, mass, surface).',
  },
  'q6_k': {
    marks: 2,
    exemplar: 'A hypothesis linking the chosen IV to the DV from part (j) with a scientific reason, e.g.: "If the propeller blades are longer, then the distance travelled in a fixed time will increase, because longer blades push against more air, giving a greater thrust force on the car." Award 1 mark for linking IV and DV, 1 mark for the scientific justification.',
    keyConcepts: ['hypothesis links IV to DV', 'if-then-because format', 'scientific explanation'],
    keywords: ['if', 'then', 'because', 'increases', 'decreases', 'force', 'thrust', 'air', 'scientific'],
    feedbackHit: 'Good hypothesis — IV, DV and scientific reasoning clearly linked.',
    feedbackMiss: 'Format: "If [IV changes], then [DV changes], because [scientific reason]." Refer to force, energy or another physical principle.',
  },

  // ── Q7 Newton's Cannonball / Starlink mega-constellation ─────────
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
    exemplar: 'Full marks (14) require all four aspects at the highest level:\n\nSCIENTIFIC & TECHNOLOGICAL CHALLENGES (up to 4): high thrust needed to overcome gravity and reach ~550 km orbit; thousands of satellites needed because each is overhead only briefly; thrusters needed to fight atmospheric drag at low altitude and de-orbit safely; collision-avoidance and tracking of space debris; managing trails across astronomers\' telescope images.\n\nPOLITICAL IMPLICATIONS (up to 4): national security risk if one private company controls global internet (access could be cut during conflict/disaster); governments must rely on or regulate a foreign company; ITU/UN coordination of orbital slots and radio frequencies; sovereignty over data and communications.\n\nECONOMIC IMPLICATIONS — positive AND negative (up to 4): Positive: brings fast internet to remote regions with no ground infrastructure; stimulates innovation, launches and jobs; large new market. Negative: monopoly/over-reliance on one company; high cost of building and replacing the constellation; debris or jamming could disrupt the whole network and cause economic damage.\n\nCONCLUDING APPRAISAL (up to 2): a balanced, justified conclusion linked to the points above.',
    keyConcepts: ['thrust to reach LEO', 'thousands of satellites for coverage', 'drag / de-orbit / debris', 'astronomy light trails', 'private control / national security', 'ITU/UN coordination', 'remote-internet access and jobs', 'monopoly / over-reliance', 'concluding appraisal justified'],
    keywords: ['gravity', 'thrust', 'orbit', 'leo', 'drag', 'debris', 'collision', 'astronomer', 'security', 'monopoly', 'company', 'itu', 'remote', 'internet', 'reliance', 'innovation', 'conclude', 'appraisal'],
    feedbackHit: 'Excellent discussion — scientific challenges, political and economic implications all evaluated with evidence.',
    feedbackMiss: 'Address all four: (1) scientific/tech challenges (reaching LEO, thousands of satellites, drag/de-orbit, debris, light trails); (2) political (private control/national security, ITU coordination); (3) economic (+ and −: remote-internet/jobs vs monopoly/cost/disruption); (4) a justified concluding appraisal.',
  },

  // ── Q8 Crewed Mars base ──────────────────────────────────────────
  'q8_': {
    marks: 8,
    exemplar: 'Full marks (8) require:\n\nBENEFITS (up to 3): advances science and technology (life support, materials, energy) that benefit Earth; opportunity to be a world leader in space exploration / national prestige; a "backup" for humanity; inspires students into science and engineering; possible future resources.\n\nLIMITATIONS (up to 3): enormous cost (hundreds of billions) that could fund problems on Earth; extreme risk to the crew (radiation, thin atmosphere, seven-month journey, low gravity ~3.7 N kg⁻¹); technology to make it self-sufficient does not yet exist; long time before any return; risk the project fails.\n\nCONCLUSION (up to 2): a clear, justified opinion (should or should not fund) that balances both sides.',
    keyConcepts: ['scientific/technological spin-offs', 'leadership / prestige / inspiration', 'backup for humanity', 'enormous cost', 'extreme risk to crew (radiation, low gravity, journey)', 'self-sufficiency not yet possible', 'conclusion with justification'],
    keywords: ['science', 'technology', 'leader', 'prestige', 'inspire', 'backup', 'cost', 'expensive', 'radiation', 'gravity', 'risk', 'self-sufficient', 'conclusion', 'justify', 'benefit', 'limitation'],
    feedbackHit: 'Well-structured response with valid benefits, limitations and a justified conclusion.',
    feedbackMiss: 'BENEFITS (e.g. scientific/technological advances, leadership/inspiration, backup for humanity). LIMITATIONS (e.g. enormous cost, extreme risk to the crew, technology not yet available). CONCLUSION: a balanced, justified opinion.',
  },
}
