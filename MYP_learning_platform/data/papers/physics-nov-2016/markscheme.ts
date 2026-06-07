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

  // ─── Q1 Bird Migration & Motion ───────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Speed = distance / time = 1200 km ÷ 24 h = 50 km h⁻¹.',
    keyConcepts: ['speed = distance/time', '50 km/h', 'unit required'],
    keywords: ['50', 'km/h', 'speed', 'distance', 'time', '1200', '24'],
    feedbackHit: 'Correct — speed = 1200 ÷ 24 = 50 km h⁻¹.',
    feedbackMiss: 'Speed = distance ÷ time. Use 1200 km and 24 hours (1 day = 24 hours). Speed = 1200 ÷ 24 = 50 km h⁻¹.',
  },

  'q1_b': {
    marks: 2,
    exemplar: 'Any two of: headwind / wind resistance reducing speed; weather conditions such as storms or rain; fatigue over a long journey; having to navigate around obstacles; changes in altitude; flying in formation (drafting effects).',
    keyConcepts: ['external resistive forces', 'environmental factors', 'biological factors'],
    keywords: ['headwind', 'wind', 'air resistance', 'fatigue', 'weather', 'storm', 'navigate', 'altitude'],
    feedbackHit: 'Good — two valid factors affecting the average speed of the godwit identified.',
    feedbackMiss: 'Think about physical factors opposing motion (e.g. headwind, rain) or the bird\'s condition (e.g. fatigue). The scientists measured 56 km/h average, which may differ from maximum speed due to such factors.',
  },

  'q1_c': { type: 'mcq', correct: 3 },

  'q1_d': {
    marks: 4,
    exemplar: 'Force: Between C and D, a net retarding/braking force acts backwards on the bird (opposing motion). Velocity: The velocity decreases from the maximum value at C to zero at D. Acceleration: The bird has a negative acceleration (deceleration) — it is slowing down. Newton\'s law: Newton\'s Second Law (F = ma) — the net force causes deceleration; a larger net force produces a greater deceleration (F = ma, where a is negative).',
    keyConcepts: ['retarding force opposes motion', 'velocity decreases to zero', 'deceleration = negative acceleration', 'Newton Second Law F=ma'],
    keywords: ['retarding', 'force', 'decreasing', 'zero', 'deceleration', 'negative', 'Newton', 'F=ma', 'net force'],
    feedbackHit: 'Excellent — all four aspects (force, velocity, acceleration, Newton\'s law) correctly addressed.',
    feedbackMiss: 'Between C and D: (1) A net retarding force acts backwards. (2) Velocity decreases to zero. (3) Acceleration is negative (deceleration). (4) Newton\'s 2nd Law applies: F = ma — net force causes deceleration.',
  },

  'q1_e': {
    marks: 2,
    exemplar: 'Distance = area under the velocity–time graph between C and D. For a triangle: Distance = ½ × (time interval CD) × (velocity at C). One mark for correct method (area of triangle), one mark for correct calculation with unit.',
    keyConcepts: ['area under v-t graph = distance', 'triangle area = ½ × base × height', 'unit required'],
    keywords: ['area', 'triangle', 'distance', 'velocity', 'time', 'half', 'base', 'height'],
    feedbackHit: 'Correct — distance found from the area under the velocity–time graph (triangle area = ½ × base × height).',
    feedbackMiss: 'Distance = area under the v–t graph between C and D. The shape is a triangle: area = ½ × base × height = ½ × (time for CD) × (velocity at C). Include a unit.',
  },

  // ─── Q2 Wave Properties ───────────────────────────────────────
  'q2_a': {
    marks: 2,
    exemplar: 'Wavelength: the distance between two successive peaks (or troughs, or compressions); Amplitude: maximum displacement from the equilibrium/rest position; Compression: region of high pressure / high particle density in the longitudinal wave; Rarefaction: region of low pressure / low particle density. Award 1 mark per two correct identifications (up to 2 marks).',
    keyConcepts: ['wavelength = distance between repeating points', 'amplitude = maximum displacement', 'compression = high pressure region', 'rarefaction = low pressure region'],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'pressure', 'displacement', 'density', 'peaks', 'troughs'],
    feedbackHit: 'Correct — all four wave features correctly identified on the diagrams.',
    feedbackMiss: 'Wavelength: distance between two identical points on successive waves. Amplitude: maximum displacement from equilibrium. Compression: dense/high-pressure region. Rarefaction: spread-out/low-pressure region.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Count the number of complete cycles of wave A in 1 second from the display. Frequency = number of cycles per second (Hz). Accept the value read from the graph with correct unit (Hz).',
    keyConcepts: ['frequency = cycles per second', 'reading from oscilloscope', 'unit Hz'],
    keywords: ['frequency', 'cycles', 'Hz', 'per second', 'count', 'wave A'],
    feedbackHit: 'Correct — frequency of wave A correctly read from the computer display.',
    feedbackMiss: 'Count the number of complete cycles wave A makes in 1 second (the full time axis). That count equals the frequency in Hz.',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Accept any two waves that appear to have the same number of cycles in 1 second (same wavelength/frequency). Waves A and C, or B and D (depends on the actual display). Accept correct identification of any pair with matching cycle count.',
    keyConcepts: ['same frequency = same number of cycles per second', 'frequency is independent of amplitude'],
    keywords: ['same frequency', 'equal cycles', 'frequency', 'wavelength'],
    feedbackHit: 'Correct — two waves with the same frequency correctly identified.',
    feedbackMiss: 'Frequency = number of complete cycles per second. Find two waves that complete the same number of full oscillations in the 1-second window shown.',
  },

  'q2_d': {
    marks: 2,
    exemplar: 'Step 1: Read the frequency of wave C from the graph (f = number of cycles in 1 s). Step 2: Use v = fλ → λ = v/f = 330 / f. Award 1 mark for correct use of v = fλ and substitution, 1 mark for correct numerical answer with unit (m).',
    keyConcepts: ['wave equation v = fλ', 'rearranging to λ = v/f', 'unit metres required'],
    keywords: ['v=fλ', 'wavelength', 'frequency', '330', 'm/s', 'speed', 'unit', 'metres'],
    feedbackHit: 'Correct — wavelength of wave C calculated using v = fλ with correct unit.',
    feedbackMiss: 'Use v = fλ. Rearrange: λ = v/f. Substitute v = 330 m/s and the frequency of wave C that you read from the graph. Include the unit (metres).',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'The wave with the highest frequency (most cycles per second) does NOT show infrasound, because infrasound has frequency < 20 Hz. Accept any wave correctly identified as having frequency > 20 Hz.',
    keyConcepts: ['infrasound frequency < 20 Hz', 'highest frequency wave is not infrasound'],
    keywords: ['infrasound', 'frequency', '20 Hz', 'highest', 'not infrasound'],
    feedbackHit: 'Correct — the wave with frequency above 20 Hz identified as not infrasound.',
    feedbackMiss: 'Infrasound has frequency less than 20 Hz. Identify the wave with the highest frequency from your answers to Q2b–c. That one (with frequency > 20 Hz) is not infrasound.',
  },

  'q2_f': {
    marks: 3,
    exemplar: '(1) Infrasound undergoes diffraction — waves spread out as they pass around the obstacle (the hill). (2) Diffraction is most effective when the wavelength is comparable to (or larger than) the size of the obstacle. Infrasound has a very long wavelength because it has low frequency and travels at 330 m/s. (3) The long-wavelength infrasound waves diffract significantly around the hill, allowing them to reach the elephants on the other side.',
    keyConcepts: ['diffraction around hill', 'long wavelength causes large diffraction', 'infrasound low frequency = long wavelength'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'hill', 'obstacle', 'low frequency', 'long wavelength', 'around'],
    feedbackHit: 'Excellent — diffraction named, mechanism explained, and long wavelength linked to large diffraction.',
    feedbackMiss: 'Infrasound diffracts (spreads out) around the hill because its wavelength is very long (low frequency). Maximum diffraction occurs when the wavelength is similar to or greater than the obstacle size. Long-wavelength infrasound can diffract significantly around large obstacles like hills.',
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    marks: 2,
    exemplar: 'Using the refractive index table and the diagram: the ray bends towards the normal when it enters a denser medium. The top layer is air (n=1.00, least dense), the middle layer is water (n=1.33, intermediate), the bottom layer is glass (n=1.50, most dense). Award 1 mark per correctly labelled layer (any 2 of 3 correct = 2 marks).',
    keyConcepts: ['air top layer lowest refractive index', 'water middle layer', 'glass bottom layer highest refractive index'],
    keywords: ['air', 'water', 'glass', 'refractive index', 'top', 'middle', 'bottom', 'layer'],
    feedbackHit: 'Correct — all three layers correctly identified using the refractive index data.',
    feedbackMiss: 'Compare the refractive indices: Air (1.00) is least dense — light travels fastest and bends least. Glass (1.50) is most dense — light slows most and bends most towards the normal. Water (1.33) is intermediate. The ray bends towards the normal going into denser layers.',
  },

  'q3_b': {
    marks: 3,
    exemplar: '(1) Light travels at different speeds in different media — it slows down in denser materials (higher refractive index). (2) When light passes from a less dense medium (e.g. air) to a more dense medium (e.g. water or glass), it slows down. (3) Slowing down causes the ray to change direction — it bends towards the normal. The greater the difference in refractive index, the greater the bending.',
    keyConcepts: ['speed changes at boundary', 'slower in denser medium', 'bends towards normal in denser medium', 'greater refractive index difference = greater bending'],
    keywords: ['speed', 'slows', 'normal', 'denser', 'bends towards', 'refractive index', 'change direction', 'boundary'],
    feedbackHit: 'Well done — speed change at boundary, direction of bending, and link to refractive index all correctly explained.',
    feedbackMiss: 'Light slows down when it enters a denser medium (higher n). Slowing down causes the ray to bend towards the normal. The bigger the difference in refractive index, the more the ray bends. This is refraction.',
  },

  // ─── Q4 Static Electricity ────────────────────────────────────
  'q4_a': {
    marks: 1,
    exemplar: 'Electron: −1 (negative charge); Proton: +1 (positive charge); Neutron: 0 (no charge / neutral). Award 1 mark for all three correct.',
    keyConcepts: ['electron negative charge', 'proton positive charge', 'neutron neutral'],
    keywords: ['electron', '-1', 'negative', 'proton', '+1', 'positive', 'neutron', '0', 'neutral'],
    feedbackHit: 'Correct — all three subatomic particle charges correctly stated.',
    feedbackMiss: 'Electron = −1 (negative); Proton = +1 (positive); Neutron = 0 (neutral). These charges are the basic units of electric charge.',
  },

  'q4_b': {
    marks: 3,
    exemplar: '(1) Electrons are the mobile charged particles — protons and neutrons are fixed in the nucleus and cannot move. (2) When the cloth rubs the rod, electrons are transferred from the rod to the cloth. (3) The rod loses electrons, so it now has fewer negative charges than positive charges, giving it a net positive charge.',
    keyConcepts: ['electrons are mobile particles', 'electron transfer by friction', 'loss of electrons = positive charge'],
    keywords: ['electrons', 'mobile', 'transferred', 'rubbing', 'cloth', 'loses', 'positive', 'fewer electrons', 'nucleus', 'fixed'],
    feedbackHit: 'Excellent — electron mobility, transfer direction, and resulting charge correctly explained.',
    feedbackMiss: 'Only electrons can move (protons are fixed in the nucleus). Rubbing causes electrons to transfer from the rod to the cloth. Losing electrons leaves the rod with more protons than electrons → net positive charge.',
  },

  'q4_c': {
    marks: 4,
    exemplar: '(1) Harry becomes charged by friction as he walks on the carpet — electrons are transferred between the carpet and his fur. (2) The polystyrene pellets are initially uncharged/neutral. (3) Harry\'s charge induces a redistribution of charge in the pellets (charge induction): the side of the pellet nearest to Harry develops the opposite charge, while the far side develops the same charge. (4) The opposite charges on the nearest side are attracted to Harry\'s charge — this electrostatic attraction causes the pellets to stick to Harry.',
    keyConcepts: ['charging by friction (walking on carpet)', 'induction causes charge redistribution in neutral pellets', 'opposite charges attract'],
    keywords: ['friction', 'carpet', 'induction', 'redistribution', 'opposite', 'attract', 'neutral', 'electrons', 'charged'],
    feedbackHit: 'Excellent — friction charging, induction, redistribution of charge, and attraction all correctly described.',
    feedbackMiss: 'Sequence: (1) Harry charges by friction on carpet; (2) pellets are neutral but induction redistributes their charge; (3) the side nearest Harry gets the opposite charge; (4) opposite charges attract → pellets stick.',
  },

  // ─── Q5 Thermal Insulation Investigation ──────────────────────
  'q5_a': {
    marks: 3,
    exemplar: 'The three methods of heat transfer are: (1) Conduction — heat transferred through direct contact (vibration of particles in solids); (2) Convection — heat transferred by movement of fluid (liquid or gas); (3) Radiation — heat transferred by infrared electromagnetic waves (no medium needed). Award 1 mark each.',
    keyConcepts: ['conduction', 'convection', 'radiation'],
    keywords: ['conduction', 'convection', 'radiation'],
    feedbackHit: 'All three methods of heat transfer correctly listed.',
    feedbackMiss: 'The three methods of heat transfer are: conduction (through solids by particle vibration), convection (through fluids by bulk movement), and radiation (infrared waves — no medium required).',
  },

  'q5_b': {
    marks: 2,
    exemplar: 'Any one piece of equipment with justification. Examples: (1) Balance / mass scale — to measure the initial and final mass of the ice block so that the mass melted can be calculated; (2) Thermometer — to monitor room temperature as a control variable; (3) Stopwatch/timer — to ensure each trial runs for the same length of time. Award 1 mark for suitable equipment, 1 mark for valid justification linked to the experiment.',
    keyConcepts: ['equipment linked to measurement purpose', 'justification connects to experimental method'],
    keywords: ['balance', 'timer', 'stopwatch', 'thermometer', 'mass', 'time', 'measure', 'justify'],
    feedbackHit: 'Good — one valid piece of equipment identified with a linked justification.',
    feedbackMiss: 'Name one piece of equipment and explain why it is specifically needed. A balance measures mass (to find mass melted = initial − final). A stopwatch ensures equal time for each trial.',
  },

  'q5_c': {
    marks: 2,
    exemplar: 'Hypothesis: As the number of sheets of paper increases, the mass of ice melted will decrease. Justification: More sheets of paper provide more insulation, which reduces the rate of heat transfer (conduction, convection and radiation) from the surroundings to the ice, so less ice melts in the same time period. Award 1 mark for a directional hypothesis, 1 mark for a valid scientific justification.',
    keyConcepts: ['more paper = less ice melted', 'insulation reduces heat transfer', 'scientific justification'],
    keywords: ['increases', 'decreases', 'insulation', 'heat transfer', 'paper layers', 'less heat'],
    feedbackHit: 'Correct hypothesis with a sound scientific justification linking paper layers to reduced heat transfer.',
    feedbackMiss: 'More paper = more insulation = less heat reaches the ice = less mass melted. State the direction clearly (more paper → less mass melted) and link it to the physical mechanism (insulation reduces heat transfer).',
  },

  'q5_d': {
    marks: 3,
    exemplar: 'Example: Room temperature. How: measure with a thermometer throughout, conduct experiment in the same room and at the same time of day. Why: if room temperature varies between trials, the rate of heat transfer to the ice will differ, making comparisons between different numbers of paper sheets invalid (unfair test). Award 1 mark for naming a variable, 1 mark for how to control it, 1 mark for why.',
    keyConcepts: ['named control variable', 'practical method to control it', 'justification linking to fairness'],
    keywords: ['temperature', 'ice mass', 'time', 'room temperature', 'control', 'fair test', 'constant', 'variable', 'justify'],
    feedbackHit: 'Excellent — specific control variable named, practical control method described, and scientific justification provided.',
    feedbackMiss: 'Name a specific variable (e.g. room temperature, initial mass of ice, time of experiment). Describe how to keep it constant. Explain why variation in this variable would affect results (make the test unfair).',
  },

  'q5_e': {
    marks: 3,
    exemplar: '(1) Zaina should record the initial mass of the ice block and the final mass after a set time; the mass melted = initial − final. (2) She should test a range of at least five different numbers of paper sheets (e.g. 0, 2, 4, 6, 8) to identify any pattern or trend. (3) She should repeat each condition at least three times and calculate a mean, in order to reduce the effect of random error and improve the reliability of her results. Award 1 mark per correct point.',
    keyConcepts: ['measure initial and final mass', 'range of five or more IV values', 'repeat and average for reliability'],
    keywords: ['initial mass', 'final mass', 'mass melted', 'five values', 'range', 'repeat', 'average', 'reliable', 'random error'],
    feedbackHit: 'Well done — the measurements required, range of values, and reason for repeating all correctly described.',
    feedbackMiss: 'Describe: (1) what to measure (initial and final ice mass to find mass melted); (2) how many IV values (≥5 different paper sheet numbers); (3) repeat each 3+ times and average (reduces random error, improves reliability).',
  },

  // ─── Q6 Coffee Cup Cooling Investigation ─────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'The results do NOT support the hypothesis. The data shows no consistent trend — cooling time does not increase with thickness. For example, the 3 mm cup cooled faster (8 min) than the 1 mm cup (18 min), and the 2 mm cup was slowest (25 min). The data is inconsistent (two different results for 3 mm: 8 and 16 min).',
    keyConcepts: ['results do not support hypothesis', 'no consistent trend', 'specific data cited as evidence'],
    keywords: ['not supported', 'no trend', 'inconsistent', '3mm', '8 minutes', '2mm', '25 minutes', 'anomaly'],
    feedbackHit: 'Correct — conclusion not supported, with specific data evidence cited.',
    feedbackMiss: 'Look at the data carefully: does cooling time consistently increase as thickness increases? The data shows no clear trend (e.g. 3 mm cup gave 8 min — shorter than 1 mm at 18 min). State "not supported" and quote specific data to support your answer.',
  },

  'q6_b': {
    marks: 8,
    exemplar: 'Any four weaknesses, each with a scientific explanation (2 marks each: 1 weakness + 1 explanation). Examples:\n(1) Cups made from different materials — different materials have different thermal conductivities, so the results reflect material differences rather than thickness differences alone.\n(2) Cups have different colours — darker cups emit more radiation (Stefan\'s law), affecting cooling rate independently of thickness.\n(3) Different surface areas — cups of different thicknesses may have different surface areas, affecting the rate of heat loss by convection and radiation.\n(4) No repeats — without repeated measurements, it is impossible to check for random error or anomalies.\n(5) Room temperature not controlled — variations in ambient temperature affect the rate of heat transfer to surroundings.\n(6) No control of starting temperature of coffee — if cups started at slightly different temperatures, cooling times would not be comparable.',
    keyConcepts: ['different materials affect conductivity', 'different colours affect radiation', 'different surface areas affect convection and radiation', 'no repeats means no reliability check', 'uncontrolled room temperature', 'uncontrolled variables'],
    keywords: ['material', 'conductivity', 'colour', 'radiation', 'surface area', 'no repeats', 'room temperature', 'reliability', 'fair test', 'control'],
    feedbackHit: 'Excellent evaluation — four weaknesses each with a valid scientific explanation of the effect on the investigation.',
    feedbackMiss: 'For each weakness: state the specific problem AND explain scientifically why it affects the results. Consider: different materials (conductivity differs), different colours (radiation differs), different surface areas, no repeats, uncontrolled room temperature.',
  },

  // ─── Q7 Radiation Investigation ───────────────────────────────
  'q7_a': {
    marks: 2,
    exemplar: 'Independent variable (IV): the thickness of the aluminium foil (in mm or cm). Dependent variable (DV): the count rate of beta radiation detected by the Geiger–Müller tube (in counts per second or per minute).',
    keyConcepts: ['IV is aluminium thickness', 'DV is beta radiation count rate'],
    keywords: ['independent', 'aluminium', 'thickness', 'dependent', 'count rate', 'Geiger', 'beta radiation'],
    feedbackHit: 'Correct — IV and DV clearly and specifically identified.',
    feedbackMiss: 'IV = what you change = thickness of aluminium. DV = what you measure = count rate detected by the Geiger tube.',
  },

  'q7_b': {
    marks: 2,
    exemplar: 'A beta particle is a high-energy, fast-moving electron. It is emitted from the nucleus when a neutron decays into a proton + electron. It has a negative charge, moderate penetrating power (stopped by a few mm of aluminium), and travels at high speed (close to the speed of light).',
    keyConcepts: ['beta particle is an electron', 'high energy fast moving'],
    keywords: ['electron', 'high energy', 'fast', 'negative', 'nucleus', 'speed', 'penetrating'],
    feedbackHit: 'Correct — beta particle identified as a high-energy electron with a property of its motion.',
    feedbackMiss: 'A beta particle is an electron emitted from the nucleus. It is high-energy and moves at high speed (close to the speed of light). It has negative charge and moderate penetrating power.',
  },

  'q7_c': {
    marks: 2,
    exemplar: 'As the thickness of the aluminium increases, the intensity (count rate) of beta radiation detected will decrease. This is because thicker aluminium absorbs more beta particles, reducing the number that reach the detector.',
    keyConcepts: ['as thickness increases intensity decreases', 'aluminium absorbs beta particles'],
    keywords: ['thickness', 'increases', 'intensity', 'count rate', 'decreases', 'absorbed', 'aluminium'],
    feedbackHit: 'Correct hypothesis — direction of relationship and scientific reason stated.',
    feedbackMiss: 'As aluminium thickness increases, beta count rate decreases because aluminium absorbs beta particles. Thicker aluminium absorbs more, so fewer beta particles reach the detector.',
  },

  'q7_d': {
    marks: 6,
    exemplar: '(1) Test at least five different aluminium thicknesses (e.g. 0, 2, 4, 6, 8, 10 mm). (2) Repeat each measurement at least three times and calculate the mean count rate to reduce random error. (3) Measure count rate with zero aluminium as a baseline. (4) Add aluminium sheets one at a time, recording the count rate for each thickness. (5) Keep the distance from the source to the Geiger tube constant throughout (control variable). (6) Use the same radioactive source throughout to ensure a consistent activity level.',
    keyConcepts: ['≥5 IV values', '≥3 repeats and average', 'zero aluminium baseline', 'increasing aluminium sheets', 'constant source-detector distance', 'same source throughout'],
    keywords: ['five', 'thickness values', 'repeat', 'three', 'average', 'zero aluminium', 'baseline', 'one at a time', 'distance', 'constant', 'same source'],
    feedbackHit: 'Excellent method — range of values, repeats, baseline, increasing sheets, control variable, and same source all addressed.',
    feedbackMiss: 'A valid method needs: ≥5 aluminium thickness values; ≥3 repeats with mean; baseline reading at zero aluminium; add sheets one at a time; keep source-to-detector distance constant; use same source throughout.',
  },

  'q7_e': {
    marks: 1,
    exemplar: 'Any one of: cosmic rays from space; naturally occurring radioactive materials in rocks/soil (e.g. radon gas); fallout from past nuclear weapons testing; radioactive materials in building materials.',
    keyConcepts: ['sources of natural background radiation'],
    keywords: ['cosmic rays', 'rocks', 'radon', 'soil', 'nuclear', 'fallout', 'natural', 'building materials'],
    feedbackHit: 'Correct — a valid source of background radiation stated.',
    feedbackMiss: 'Background radiation sources: cosmic rays from space, radioactive rocks/radon gas in soil, nuclear weapons fallout, or radioactive materials in building materials.',
  },

  'q7_f': {
    marks: 2,
    exemplar: 'Measure the background count rate with the radioactive source removed from the experiment (or shielded). This background count rate is then subtracted from every experimental reading to give the net count rate due to the beta source alone.',
    keyConcepts: ['measure background without source present', 'subtract background from all readings'],
    keywords: ['background', 'without source', 'removed', 'subtract', 'deduct', 'count rate', 'net'],
    feedbackHit: 'Correct — background measured without source and subtracted from all results.',
    feedbackMiss: 'Remove the beta source (or shield it) and measure the count rate — this is the background. Subtract this background count from every experimental reading to isolate the count due to beta radiation only.',
  },

  'q7_g': {
    marks: 4,
    exemplar: 'Four precautions with reasons (1 mark each):\n(1) Minimise time near the source — less exposure time means less radiation dose absorbed.\n(2) Maximise distance from source — radiation intensity decreases with distance (inverse square law).\n(3) Use shielding (e.g. place behind a lead screen when not measuring) — lead absorbs beta and gamma radiation.\n(4) Never point the source at people / keep source in lead-lined container when not in use — prevents direct exposure to the body.',
    keyConcepts: ['minimise exposure time', 'maximise distance', 'use shielding', 'never point at body'],
    keywords: ['time', 'distance', 'shielding', 'lead', 'exposure', 'dose', 'container', 'protective', 'point'],
    feedbackHit: 'Excellent — four precautions each with a valid reason about reducing radiation dose.',
    feedbackMiss: 'Key precautions: (1) minimise time near source; (2) maximise distance; (3) use lead shielding; (4) keep source in container / never point at body. Each reduces the radiation dose received.',
  },

  'q7_h': {
    marks: 2,
    exemplar: 'With an alpha source, the count rate would drop to (near) background level even without any aluminium — alpha particles are stopped by just a few centimetres of air or a thin sheet of paper. Beta particles can penetrate several millimetres of aluminium before being stopped. Alpha particles are stopped more easily because they are larger (helium nucleus) and carry more charge (+2), so they interact more strongly with matter and lose energy much faster.',
    keyConcepts: ['alpha stopped before reaching aluminium', 'alpha less penetrating than beta', 'alpha has greater mass and charge'],
    keywords: ['alpha', 'stopped', 'paper', 'air', 'less penetrating', 'mass', 'charge', 'interact', 'beta', 'helium nucleus'],
    feedbackHit: 'Correct — alpha stopped by air/paper (not aluminium), compared to beta, explained by mass and charge.',
    feedbackMiss: 'Alpha particles are stopped by a few cm of air or a thin sheet of paper — they never reach the aluminium sheets. This is because alpha particles (helium nuclei, charge +2) are much larger and more highly charged than beta particles (electrons), so they interact much more strongly with matter and lose their energy quickly.',
  },

  // ─── Q8 Radioactive Decay & Half-Life (Fukushima) ─────────────
  'q8_a': {
    marks: 6,
    exemplar: 'Marks for a complete and correct table:\n(1) Six appropriate time values identified (1 mark)\n(2) All three trial values recorded for each time, showing a decrease (1 mark)\n(3) Values decrease consistently and are within plausible range (1 mark)\n(4) Both missing averages calculated correctly: average = (Trial 1 + Trial 2 + Trial 3) / 3 (2 marks)\n(5) All averages given to an appropriate number of significant figures (1 mark)',
    keyConcepts: ['six time values', 'decreasing values across trials', 'average = sum / 3', 'significant figures'],
    keywords: ['six times', 'trial', 'average', 'sum', 'divide by 3', 'decreasing', 'significant figures'],
    feedbackHit: 'Excellent — table completed with correct time values, decreasing data, and accurately calculated averages.',
    feedbackMiss: 'Choose 6 evenly spaced time values. For each: record the % remaining from three trials. Average = (T1 + T2 + T3) / 3. Ensure values consistently decrease and averages are given to an appropriate number of s.f.',
  },

  'q8_b': { type: 'mcq', correct: 2 },

  'q8_c': {
    marks: 3,
    exemplar: 'From the caesium-137 decay graph: (1) Find where % = 50 (half the starting value) — read the time → first half-life reading. (2) Find where % = 25 → second half-life reading. (3) Find where % = 12.5 → third half-life reading. Average half-life = (reading 1 + reading 2 + reading 3) / 3. The accepted half-life of caesium-137 is approximately 30 years. Award 1 mark per valid half-life reading from graph, up to 3 marks.',
    keyConcepts: ['read half-life from graph at 50% remaining', 'three half-life readings', 'calculate average half-life'],
    keywords: ['50%', '25%', '12.5%', 'graph', 'reading', 'half-life', 'average', 'three', 'caesium-137', '30 years'],
    feedbackHit: 'Correct — three half-life readings taken from graph and average calculated.',
    feedbackMiss: 'Read the time when % remaining = 50 (1st half-life), then when = 25 (2nd), then when = 12.5 (3rd). Average the three time intervals. This gives the average half-life of caesium-137 (~30 years).',
  },

  'q8_d': {
    marks: 2,
    exemplar: '1 600 000 → 800 000 → 400 000 → 200 000 → 100 000 = 4 half-lives. Total time = 4 × 2 years = 8 years.',
    keyConcepts: ['4 half-lives to reach 100 000 from 1 600 000', 'total time = 4 × half-life = 8 years'],
    keywords: ['4', 'half-lives', '8', 'years', '1600000', '100000', 'calculation'],
    feedbackHit: 'Correct — 4 half-lives identified and total time of 8 years calculated.',
    feedbackMiss: 'Divide by 2 repeatedly: 1 600 000 → 800 000 → 400 000 → 200 000 → 100 000 = 4 halving steps. Total time = 4 × 2 years = 8 years.',
  },

  // ─── Q9 Power Stations & Electricity Transmission ─────────────
  'q9_a': {
    marks: 2,
    exemplar: 'Any two of: air/smoke pollution causing health problems for residents; visual impact (unsightly / uglifies landscape); noise pollution from machinery and coal deliveries; heavy lorry traffic delivering coal causing congestion and road damage; land required for coal storage.',
    keyConcepts: ['pollution health effects', 'visual impact', 'noise', 'traffic congestion'],
    keywords: ['pollution', 'smoke', 'health', 'noise', 'traffic', 'lorries', 'ugly', 'visual', 'unsightly'],
    feedbackHit: 'Two valid reasons why residents would not want a coal power station nearby correctly identified.',
    feedbackMiss: 'Think about air pollution and health, noise from operations, heavy vehicle traffic for coal delivery, visual impact on the landscape, or the land required.',
  },

  'q9_b': {
    marks: 1,
    exemplar: 'Water is needed to produce steam (to drive the turbines) and to cool/condense the steam back to water after it passes through the turbines (in the condenser).',
    keyConcepts: ['water to produce steam for turbines', 'water for cooling in condenser'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser', 'boiler', 'condensed'],
    feedbackHit: 'Correct — water use for steam production or cooling/condensing stated.',
    feedbackMiss: 'Large amounts of water are needed to produce steam to drive the turbines, and to cool (condense) the steam back to water after it passes through the turbines.',
  },

  'q9_c': {
    marks: 1,
    exemplar: 'The secondary current halves (is halved). By conservation of energy (P = IV), if voltage doubles then current must halve to keep power constant.',
    keyConcepts: ['secondary current halves when voltage doubles', 'P = IV conservation'],
    keywords: ['halves', 'half', 'current', 'secondary', 'doubles', 'voltage', 'P=IV'],
    feedbackHit: 'Correct — secondary current halves when voltage doubles.',
    feedbackMiss: 'P = IV. If voltage doubles (V × 2), then current must halve (I ÷ 2) to keep power P the same. Secondary current = halved.',
  },

  'q9_d': {
    marks: 3,
    exemplar: '(1) Power loss in cables is given by P = I²R — it is proportional to the square of the current. (2) A higher transmission voltage means a lower current is needed to deliver the same power (from P = IV: if V increases, I decreases). (3) Lower current → much less heat generated in the cables (P_loss = I²R decreases), so less energy is wasted as heat.',
    keyConcepts: ['P_loss = I²R proportional to current squared', 'higher voltage → lower current', 'lower current → less heat loss'],
    keywords: ['I²R', 'current', 'voltage', 'heat', 'loss', 'proportional', 'P=IV', 'reduces'],
    feedbackHit: 'Excellent — I²R relationship, effect of voltage on current, and reduced heat loss all correctly explained.',
    feedbackMiss: 'Power loss = I²R. Higher voltage → lower current (P=IV). Lower current → much less heat loss (loss ∝ I²). This is why power is transmitted at very high voltages.',
  },

  'q9_e': {
    marks: 6,
    exemplar: 'Water vapour (H₂O): is a greenhouse gas; traps infrared radiation re-emitted from Earth\'s surface; contributes to the enhanced greenhouse effect and global warming/climate change.\nCarbon dioxide (CO₂): is a major greenhouse gas; same mechanism as water vapour; long atmospheric residence time; primary driver of climate change from fossil fuel combustion.\nSulfur dioxide (SO₂): causes acid rain; reacts with water in the atmosphere: SO₂ + H₂O → H₂SO₃/H₂SO₄; acidic rain damages forests, kills aquatic organisms in lakes, corrodes stone buildings and metal structures.\nAward 2 marks per gas: 1 for naming the impact type, 1 for the mechanism/consequence.',
    keyConcepts: ['H2O and CO2 are greenhouse gases', 'greenhouse gas traps infrared radiation', 'SO2 causes acid rain via reaction with water', 'acid rain damages ecosystems and buildings'],
    keywords: ['greenhouse gas', 'infrared', 'climate change', 'global warming', 'acid rain', 'sulfuric acid', 'reacts with water', 'damages', 'CO2', 'SO2', 'water vapour'],
    feedbackHit: 'Excellent — environmental impacts of all three gases described with mechanisms.',
    feedbackMiss: 'H₂O and CO₂ are greenhouse gases — they absorb and re-emit infrared radiation, trapping heat (climate change). SO₂ causes acid rain: SO₂ reacts with atmospheric water to form sulfuric acid, damaging forests, lakes and buildings.',
  },

  'q9_f': {
    marks: 3,
    exemplar: '(1) Demand for electricity is much lower at night (fewer people awake, factories/businesses mostly closed). (2) Electrical energy cannot be stored economically on a large scale — excess generation is simply wasted. (3) By charging less at night, electricity companies encourage consumers to shift usage to the night (e.g. run washing machines, charge devices), making use of electricity that would otherwise be wasted and allowing power stations to keep running efficiently.',
    keyConcepts: ['lower demand at night', 'electrical energy cannot be stored at large scale', 'cheaper tariff encourages night use to prevent waste'],
    keywords: ['demand', 'lower', 'night', 'storage', 'cannot store', 'excess', 'wasted', 'cheaper', 'encourage', 'off-peak'],
    feedbackHit: 'Correct — lower demand, inability to store electricity, and shift incentive all addressed.',
    feedbackMiss: 'Night-time demand is lower; electrical energy cannot be stored economically; cheaper night rates encourage consumers to use the otherwise wasted surplus generation.',
  },

  // ─── Q10 Solar Power & Traffic Management ─────────────────────
  'q10_a': {
    marks: 1,
    exemplar: 'Any application that genuinely requires a constant uninterrupted electricity supply: hospitals / intensive care units; water treatment / pumping stations; data centres / internet servers; airports; railway signalling; refrigeration for food / medicine; street lighting.',
    keyConcepts: ['application requiring constant electricity supply'],
    keywords: ['hospital', 'water treatment', 'data centre', 'server', 'airport', 'refrigeration', 'constant', 'uninterrupted'],
    feedbackHit: 'Correct — a valid application requiring a continuous electricity supply identified.',
    feedbackMiss: 'Think of applications where a power cut would be dangerous or seriously disruptive: hospitals, water treatment plants, data centres, airports, or refrigeration all require constant electricity.',
  },

  'q10_b': {
    marks: 15,
    exemplar: 'A high-scoring response (13–15 marks) would address all five bullet points with developed reasoning:\n\n• Why constant electricity matters for the chosen application (link to specific consequence of power failure — e.g. patient safety in hospital, data loss, water supply failure).\n\n• Advantage of small-scale solar supply: independent of the grid (unaffected by load shedding); renewable/free fuel (sun); low running cost; low emissions during operation; can be deployed where grid infrastructure is poor.\n\n• Disadvantage: intermittent generation (no sun at night or on cloudy days); battery storage adds cost and complexity; initial installation cost can be high; battery lifespan is limited; lower power output than grid (may not supply high-demand applications).\n\n• Economic factors: high upfront capital cost vs. low running costs; payback period (years to recoup investment through savings on grid electricity); cost savings during load shedding; potential for local job creation during installation/maintenance.\n\n• Social factors: improved safety (traffic lights / hospitals / water supply functioning during load shedding); energy independence for communities; reduced disruption to daily life; positive environmental impact (renewable = less fossil fuel); public acceptance of solar technology.',
    keyConcepts: ['constant supply linked to chosen application', 'solar advantage: grid-independent renewable low-emission', 'solar disadvantage: intermittent battery-dependent costly upfront', 'economic: high capital low running cost payback', 'social: improved safety energy independence community benefit'],
    keywords: ['constant', 'advantage', 'disadvantage', 'solar', 'renewable', 'intermittent', 'battery', 'cost', 'economic', 'social', 'safety', 'load shedding', 'independent', 'payback'],
    feedbackHit: 'Strong extended response — all five criteria addressed with developed points and a balanced evaluation of the solar supply solution.',
    feedbackMiss: 'Address all five bullet points: (1) why constant supply matters for your chosen use; (2) advantage of solar (e.g. grid-independent, renewable); (3) disadvantage (e.g. intermittent, battery needed, cost); (4) economic factors (high setup cost, low running cost, payback period); (5) social factors (safety, energy access, community benefit).',
  },
}
