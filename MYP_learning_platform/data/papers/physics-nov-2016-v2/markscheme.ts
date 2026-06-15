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

  // ─── Q1 Monarch Butterfly Migration & Motion ──────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Speed = distance / time = 360 km ÷ 24 h = 15 km h⁻¹.',
    keyConcepts: ['speed = distance/time', '15 km/h', 'unit required'],
    keywords: ['15', 'km/h', 'speed', 'distance', 'time', '360', '24'],
    feedbackHit: 'Correct — speed = 360 ÷ 24 = 15 km h⁻¹.',
    feedbackMiss: 'Speed = distance ÷ time. Use 360 km and 24 hours (1 day = 24 hours). Speed = 360 ÷ 24 = 15 km h⁻¹.',
  },

  'q1_b': {
    marks: 2,
    exemplar: 'Any two of: headwind / wind resistance reducing speed; weather conditions such as storms or rain; tiredness / running low on energy reserves over the long journey; stopping to feed on nectar; rising air thermals or crosswinds; changes in temperature affecting the butterfly\'s flight.',
    keyConcepts: ['external resistive forces', 'environmental factors', 'biological factors'],
    keywords: ['headwind', 'wind', 'air resistance', 'tired', 'energy', 'weather', 'storm', 'feeding', 'temperature'],
    feedbackHit: 'Good — two valid factors affecting the average speed of the monarch butterfly identified.',
    feedbackMiss: 'Think about physical factors opposing motion (e.g. headwind, rain) or the butterfly\'s condition (e.g. tiredness, stopping to feed on nectar). The measured 12 km/h average may differ from maximum speed due to such factors.',
  },

  'q1_c': { type: 'mcq', correct: 3 },

  'q1_d': {
    marks: 4,
    exemplar: 'Force: Between C and D a net retarding/braking force acts backwards on the animal (opposing its motion). Velocity: The velocity decreases from the constant value at C to zero at D. Acceleration: The animal has a negative acceleration (deceleration) — it is slowing down. Newton\'s law: Newton\'s Second Law (F = ma) — the net force causes the deceleration; a larger net force produces a greater deceleration (a is negative).',
    keyConcepts: ['retarding force opposes motion', 'velocity decreases to zero', 'deceleration = negative acceleration', 'Newton Second Law F=ma'],
    keywords: ['retarding', 'force', 'decreasing', 'zero', 'deceleration', 'negative', 'Newton', 'F=ma', 'net force'],
    feedbackHit: 'Excellent — all four aspects (force, velocity, acceleration, Newton\'s law) correctly addressed.',
    feedbackMiss: 'Between C and D: (1) a net retarding force acts backwards; (2) velocity decreases to zero; (3) acceleration is negative (deceleration); (4) Newton\'s 2nd Law applies: F = ma — the net force causes the deceleration.',
  },

  'q1_e': {
    marks: 2,
    exemplar: 'Distance = area under the velocity–time graph between C and D (a triangle). Area = ½ × base × height = ½ × 3 h × 40 km h⁻¹ = 60 km. One mark for the correct method (area of triangle), one mark for the correct value with unit.',
    keyConcepts: ['area under v-t graph = distance', 'triangle area = ½ × base × height', '60 km', 'unit required'],
    keywords: ['area', 'triangle', 'distance', '60', 'km', 'half', 'base', 'height', '3', '40'],
    feedbackHit: 'Correct — distance = ½ × 3 × 40 = 60 km from the area under the velocity–time graph.',
    feedbackMiss: 'Distance = area under the v–t graph between C and D. The shape is a triangle: area = ½ × base × height = ½ × 3 h × 40 km h⁻¹ = 60 km. Include a unit.',
  },

  // ─── Q2 Wave Properties ───────────────────────────────────────
  'q2_a': {
    marks: 2,
    exemplar: 'Wavelength: the distance between two successive peaks (or troughs, or compressions); Amplitude: maximum displacement from the equilibrium/rest position; Compression: a region of high pressure / high particle density in the longitudinal wave; Rarefaction: a region of low pressure / low particle density. Award 1 mark per two correct identifications (up to 2 marks).',
    keyConcepts: ['wavelength = distance between repeating points', 'amplitude = maximum displacement', 'compression = high pressure region', 'rarefaction = low pressure region'],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'pressure', 'displacement', 'density', 'peaks', 'troughs'],
    feedbackHit: 'Correct — all four wave features correctly identified on the diagrams.',
    feedbackMiss: 'Wavelength: distance between two identical points on successive waves. Amplitude: maximum displacement from equilibrium. Compression: dense/high-pressure region. Rarefaction: spread-out/low-pressure region.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Count the number of complete cycles of wave A in 1 second from the display. Wave A completes 30 cycles in 1 s, so f = 30 Hz.',
    keyConcepts: ['frequency = cycles per second', 'reading from display', '30 Hz'],
    keywords: ['frequency', 'cycles', '30', 'Hz', 'per second', 'count', 'wave A'],
    feedbackHit: 'Correct — wave A completes 30 cycles in 1 second, so f = 30 Hz.',
    feedbackMiss: 'Count the number of complete cycles wave A makes in 1 second (the full time axis). Wave A shows 30 cycles, so f = 30 Hz.',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Waves B and D have the same frequency — each completes 6 cycles in 1 second (6 Hz). They differ only in amplitude, not frequency.',
    keyConcepts: ['same frequency = same number of cycles per second', 'frequency is independent of amplitude', 'B and D'],
    keywords: ['B', 'D', 'same frequency', 'equal cycles', '6', 'Hz'],
    feedbackHit: 'Correct — waves B and D both have a frequency of 6 Hz.',
    feedbackMiss: 'Frequency = number of complete cycles per second. Waves B and D both complete 6 cycles in the 1-second window (6 Hz); they differ only in amplitude.',
  },

  'q2_d': {
    marks: 2,
    exemplar: 'Wave C completes 4 cycles in 1 s, so f = 4 Hz. Use v = fλ → λ = v/f = 330 / 4 = 82.5 m. Award 1 mark for correct use of v = fλ with substitution, 1 mark for the correct value with unit (m).',
    keyConcepts: ['wave equation v = fλ', 'rearranging to λ = v/f', 'f(C) = 4 Hz', '82.5 m'],
    keywords: ['v=fλ', 'wavelength', '4', 'frequency', '330', '82.5', 'm', 'metres', 'speed'],
    feedbackHit: 'Correct — wavelength of wave C = 330 / 4 = 82.5 m.',
    feedbackMiss: 'Wave C shows 4 cycles in 1 s, so f = 4 Hz. Use v = fλ → λ = v/f = 330 / 4 = 82.5 m. Include the unit (metres).',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'Wave A does NOT show infrasound, because it has a frequency of 30 Hz, which is above 20 Hz (infrasound is below 20 Hz).',
    keyConcepts: ['infrasound frequency < 20 Hz', 'wave A is 30 Hz > 20 Hz'],
    keywords: ['A', 'infrasound', 'frequency', '30', '20 Hz', 'above', 'not infrasound'],
    feedbackHit: 'Correct — wave A (30 Hz) is above 20 Hz, so it is not infrasound.',
    feedbackMiss: 'Infrasound has a frequency below 20 Hz. Wave A has the highest frequency (30 Hz), which is above 20 Hz, so wave A is not infrasound.',
  },

  'q2_f': {
    marks: 3,
    exemplar: '(1) The infrasound undergoes diffraction — the waves spread out as they pass around the obstacle (the seamount). (2) Diffraction is most effective when the wavelength is comparable to, or larger than, the size of the obstacle. Infrasound has a very long wavelength because it has a low frequency. (3) The long-wavelength infrasound diffracts significantly around the seamount, reaching the whale on the far side.',
    keyConcepts: ['diffraction around seamount', 'long wavelength causes large diffraction', 'infrasound low frequency = long wavelength'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'seamount', 'obstacle', 'low frequency', 'long wavelength', 'around'],
    feedbackHit: 'Excellent — diffraction named, mechanism explained, and long wavelength linked to large diffraction.',
    feedbackMiss: 'Infrasound diffracts (spreads out) around the seamount because its wavelength is very long (low frequency). Maximum diffraction occurs when the wavelength is similar to or larger than the obstacle, so long-wavelength infrasound diffracts strongly around large obstacles.',
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    marks: 2,
    exemplar: 'Using the refractive index table and the diagram: the ray bends towards the normal when it enters a denser medium. The top layer is air (n=1.00, least dense), the middle layer is glass (n=1.50, most dense — strongest bending towards the normal), the bottom layer is water (n=1.33, intermediate). Award 1 mark per correctly labelled layer (any 2 of 3 correct = 2 marks).',
    keyConcepts: ['air top layer lowest refractive index', 'glass middle layer highest refractive index', 'water bottom layer intermediate'],
    keywords: ['air', 'glass', 'water', 'refractive index', 'top', 'middle', 'bottom', 'layer'],
    feedbackHit: 'Correct — all three layers correctly identified using the refractive index data.',
    feedbackMiss: 'Compare the refractive indices: Air (1.00) is least dense — light travels fastest and bends least. Glass (1.50) is most dense — light slows most and bends most towards the normal. Water (1.33) is intermediate. Match the amount of bending at each boundary to these values.',
  },

  'q3_b': {
    marks: 3,
    exemplar: '(1) Light travels at different speeds in different media — it slows down in a denser material (higher refractive index). (2) When light passes from a less dense medium (e.g. air) into a denser medium (e.g. glass or water), it slows down and bends towards the normal; passing into a less dense medium it speeds up and bends away from the normal. (3) The greater the refractive index, the slower the light and the greater the bending towards the normal.',
    keyConcepts: ['speed changes at boundary', 'slower in denser medium', 'bends towards normal in denser medium', 'greater refractive index = greater bending'],
    keywords: ['speed', 'slows', 'normal', 'denser', 'bends towards', 'refractive index', 'change direction', 'boundary'],
    feedbackHit: 'Well done — speed change at the boundary, direction of bending, and link to refractive index all correctly explained.',
    feedbackMiss: 'Light slows down when it enters a denser medium (higher n) and bends towards the normal. The bigger the refractive index, the slower the light and the more the ray bends. This is refraction.',
  },

  // ─── Q4 Static Electricity ────────────────────────────────────
  'q4_a': {
    marks: 1,
    exemplar: 'Electron: −1 (negative charge); Proton: +1 (positive charge); Neutron: 0 (no charge / neutral). Award 1 mark for all three correct.',
    keyConcepts: ['electron negative charge', 'proton positive charge', 'neutron neutral'],
    keywords: ['electron', '-1', 'negative', 'proton', '+1', 'positive', 'neutron', '0', 'neutral'],
    feedbackHit: 'Correct — all three subatomic particle charges correctly stated.',
    feedbackMiss: 'Electron = −1 (negative); Proton = +1 (positive); Neutron = 0 (neutral). These are the basic units of electric charge.',
  },

  'q4_b': {
    marks: 3,
    exemplar: '(1) Electrons are the mobile charged particles — protons and neutrons are fixed in the nucleus and cannot move. (2) When the cloth duster rubs the PVC rod, electrons are transferred from the duster onto the rod. (3) The rod gains electrons, so it now has more negative charges than positive charges, giving it a net negative charge.',
    keyConcepts: ['electrons are mobile particles', 'electron transfer by friction', 'gain of electrons = negative charge'],
    keywords: ['electrons', 'mobile', 'transferred', 'rubbing', 'duster', 'gains', 'negative', 'more electrons', 'nucleus', 'fixed'],
    feedbackHit: 'Excellent — electron mobility, transfer direction, and resulting negative charge correctly explained.',
    feedbackMiss: 'Only electrons can move (protons are fixed in the nucleus). Rubbing transfers electrons from the cloth duster onto the PVC rod. Gaining electrons leaves the rod with more electrons than protons → net negative charge.',
  },

  'q4_c': {
    marks: 4,
    exemplar: '(1) The balloon becomes charged by friction when rubbed on the hair — electrons are transferred between the hair and the balloon. (2) The paper pieces are initially uncharged/neutral. (3) The balloon\'s charge induces a redistribution of charge in each paper piece (charge induction): the side nearest the balloon develops the opposite charge, while the far side develops the same charge. (4) The opposite charge on the near side is attracted to the balloon\'s charge — this electrostatic attraction makes the paper pieces jump up and stick to the balloon.',
    keyConcepts: ['charging by friction (balloon on hair)', 'induction causes charge redistribution in neutral paper', 'opposite charges attract'],
    keywords: ['friction', 'hair', 'induction', 'redistribution', 'opposite', 'attract', 'neutral', 'electrons', 'charged'],
    feedbackHit: 'Excellent — friction charging, induction, redistribution of charge, and attraction all correctly described.',
    feedbackMiss: 'Sequence: (1) the balloon charges by friction on the hair; (2) the paper is neutral but induction redistributes its charge; (3) the side nearest the balloon gains the opposite charge; (4) opposite charges attract → paper sticks.',
  },

  // ─── Q5 Thermal Insulation Investigation (polystyrene foam) ───
  'q5_a': {
    marks: 3,
    exemplar: 'The three methods of heat transfer are: (1) Conduction — heat transferred through direct contact (vibration of particles in solids); (2) Convection — heat transferred by movement of a fluid (liquid or gas); (3) Radiation — heat transferred by infrared electromagnetic waves (no medium needed). Award 1 mark each.',
    keyConcepts: ['conduction', 'convection', 'radiation'],
    keywords: ['conduction', 'convection', 'radiation'],
    feedbackHit: 'All three methods of heat transfer correctly listed.',
    feedbackMiss: 'The three methods of heat transfer are: conduction (through solids by particle vibration), convection (through fluids by bulk movement), and radiation (infrared waves — no medium required).',
  },

  'q5_b': {
    marks: 2,
    exemplar: 'Any one piece of equipment with justification. Examples: (1) Balance / mass scale — to measure the initial and final mass of the ice block so the mass melted can be calculated; (2) Stopwatch/timer — to ensure each trial runs for the same length of time; (3) Thermometer — to monitor the room temperature as a control variable. Award 1 mark for suitable equipment, 1 mark for a valid justification linked to the experiment.',
    keyConcepts: ['equipment linked to measurement purpose', 'justification connects to experimental method'],
    keywords: ['balance', 'timer', 'stopwatch', 'thermometer', 'mass', 'time', 'measure', 'justify'],
    feedbackHit: 'Good — one valid piece of equipment identified with a linked justification.',
    feedbackMiss: 'Name one piece of equipment and explain why it is specifically needed. A balance measures mass (so mass melted = initial − final). A stopwatch ensures an equal time for each trial.',
  },

  'q5_c': {
    marks: 2,
    exemplar: 'Hypothesis: As the number of sheets of polystyrene foam increases, the mass of ice melted will decrease. Justification: More sheets of foam provide more insulation (trapped air), reducing the rate of heat transfer (conduction, convection and radiation) from the surroundings to the ice, so less ice melts in the same time. Award 1 mark for a directional hypothesis, 1 mark for a valid scientific justification.',
    keyConcepts: ['more foam = less ice melted', 'insulation reduces heat transfer', 'scientific justification'],
    keywords: ['increases', 'decreases', 'insulation', 'heat transfer', 'sheets', 'trapped air', 'less heat'],
    feedbackHit: 'Correct hypothesis with a sound scientific justification linking foam sheets to reduced heat transfer.',
    feedbackMiss: 'More foam = more insulation (trapped air) = less heat reaches the ice = less mass melted. State the direction clearly and link it to the physical mechanism (insulation reduces heat transfer).',
  },

  'q5_d': {
    marks: 3,
    exemplar: 'Example: Room temperature. How: measure it with a thermometer throughout and carry out the experiment in the same room at the same time of day. Why: if the room temperature varies between trials, the rate of heat transfer to the ice will differ, making comparisons between different numbers of foam sheets invalid (an unfair test). Award 1 mark for naming a variable, 1 mark for how to control it, 1 mark for why.',
    keyConcepts: ['named control variable', 'practical method to control it', 'justification linking to fairness'],
    keywords: ['temperature', 'ice mass', 'time', 'room temperature', 'control', 'fair test', 'constant', 'variable', 'justify'],
    feedbackHit: 'Excellent — specific control variable named, practical control method described, and scientific justification provided.',
    feedbackMiss: 'Name a specific variable (e.g. room temperature, initial mass of ice, time of exposure). Describe how to keep it constant, then explain why variation in it would make the test unfair.',
  },

  'q5_e': {
    marks: 3,
    exemplar: '(1) Mateo should record the initial mass of the ice block and the final mass after a set time; mass melted = initial − final. (2) He should test a range of at least five different numbers of foam sheets (e.g. 0, 2, 4, 6, 8) to identify a pattern or trend. (3) He should repeat each condition at least three times and calculate a mean, to reduce the effect of random error and improve reliability. Award 1 mark per correct point.',
    keyConcepts: ['measure initial and final mass', 'range of five or more IV values', 'repeat and average for reliability'],
    keywords: ['initial mass', 'final mass', 'mass melted', 'five values', 'range', 'repeat', 'average', 'reliable', 'random error'],
    feedbackHit: 'Well done — the measurements required, range of values, and reason for repeating all correctly described.',
    feedbackMiss: 'Describe: (1) what to measure (initial and final ice mass to find mass melted); (2) how many IV values (≥5 different sheet numbers); (3) repeat each 3+ times and average (reduces random error, improves reliability).',
  },

  // ─── Q6 Cup Cooling Investigation (takeaway soup) ─────────────
  'q6_a': {
    marks: 1,
    exemplar: 'The results do NOT support the hypothesis. The data shows no consistent trend — cooling time does not increase with wall thickness. The 3 mm cup cooled fastest (9 min), faster than the 1 mm cup (14 min), and the two 5 mm trials gave very different times (22 and 13 min), showing the data is inconsistent.',
    keyConcepts: ['results do not support hypothesis', 'no consistent trend', 'specific data cited as evidence'],
    keywords: ['not supported', 'no trend', 'inconsistent', '3mm', '9 minutes', '5mm', '22', '13', 'anomaly'],
    feedbackHit: 'Correct — conclusion not supported, with specific data evidence cited.',
    feedbackMiss: 'Look at the data: does cooling time consistently increase with wall thickness? No (e.g. the 3 mm cup gave 9 min — faster than 1 mm at 14 min, and the two 5 mm trials disagree). State "not supported" and quote specific data.',
  },

  'q6_b': {
    marks: 8,
    exemplar: 'Any four weaknesses, each with a scientific explanation (2 marks each: 1 weakness + 1 explanation). Examples:\n(1) Cups made from different materials — different materials have different thermal conductivities, so the results reflect material differences, not thickness alone.\n(2) Cups have different colours — darker cups emit more thermal radiation, affecting cooling rate independently of thickness.\n(3) Different surface areas — cups of different thickness may have different surface areas, affecting heat loss by convection and radiation.\n(4) No repeats for most thicknesses — without repeats it is impossible to identify anomalies or check reliability (the two 5 mm values disagree).\n(5) Room temperature not controlled — changes in ambient temperature alter the rate of heat transfer.\n(6) Starting temperature / volume of soup not controlled — affects how long cooling takes.',
    keyConcepts: ['different materials affect conductivity', 'different colours affect radiation', 'different surface areas affect convection and radiation', 'no repeats means no reliability check', 'uncontrolled room temperature', 'uncontrolled volume'],
    keywords: ['material', 'conductivity', 'colour', 'radiation', 'surface area', 'no repeats', 'room temperature', 'volume', 'reliability', 'fair test', 'control'],
    feedbackHit: 'Excellent evaluation — four weaknesses each with a valid scientific explanation of the effect on the investigation.',
    feedbackMiss: 'For each weakness, state the problem AND explain scientifically why it affects results. Consider: different materials (conductivity), different colours (radiation), different surface areas/volumes, no repeats, uncontrolled room temperature.',
  },

  // ─── Q7 Radiation Investigation (steel-mill plastic-sheet gauge) ─
  'q7_a': {
    marks: 2,
    exemplar: 'Independent variable (IV): the thickness of the plastic sheet (in mm, or number of sheets). Dependent variable (DV): the count rate of beta radiation detected by the Geiger–Müller tube (counts per second or per minute).',
    keyConcepts: ['IV is plastic thickness', 'DV is beta radiation count rate'],
    keywords: ['independent', 'plastic', 'thickness', 'dependent', 'count rate', 'Geiger', 'beta radiation'],
    feedbackHit: 'Correct — IV and DV clearly and specifically identified.',
    feedbackMiss: 'IV = what you change = thickness of the plastic sheet. DV = what you measure = count rate detected by the Geiger tube.',
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
    exemplar: 'As the thickness of the plastic sheet increases, the intensity (count rate) of beta radiation detected will decrease. This is because thicker plastic absorbs more beta particles, so fewer reach the detector.',
    keyConcepts: ['as thickness increases intensity decreases', 'plastic absorbs beta particles'],
    keywords: ['thickness', 'increases', 'intensity', 'count rate', 'decreases', 'absorbed', 'plastic'],
    feedbackHit: 'Correct hypothesis — direction of relationship and scientific reason stated.',
    feedbackMiss: 'As plastic thickness increases, the beta count rate decreases because the plastic absorbs beta particles. Thicker plastic absorbs more, so fewer beta particles reach the detector.',
  },

  'q7_d': {
    marks: 6,
    exemplar: '(1) Test at least five different plastic thicknesses (e.g. 0, 2, 4, 6, 8, 10 sheets). (2) Repeat each measurement at least three times and calculate the mean count rate to reduce random error. (3) Measure the count rate with no plastic present as a baseline. (4) Add plastic sheets one at a time, recording the count rate for each thickness. (5) Keep the distance from the source to the Geiger tube constant throughout (control variable). (6) Use the same beta source throughout to ensure a consistent activity level.',
    keyConcepts: ['≥5 IV values', '≥3 repeats and average', 'zero-plastic baseline', 'increasing plastic sheets', 'constant source-detector distance', 'same source throughout'],
    keywords: ['five', 'thickness values', 'repeat', 'three', 'average', 'no plastic', 'baseline', 'one at a time', 'distance', 'constant', 'same source'],
    feedbackHit: 'Excellent method — range of values, repeats, baseline, increasing sheets, control variable, and same source all addressed.',
    feedbackMiss: 'A valid method needs: ≥5 plastic thickness values; ≥3 repeats with a mean; a baseline reading with no plastic; add sheets one at a time; keep the source-to-detector distance constant; use the same source throughout.',
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
    exemplar: 'Measure the background count rate with the beta source removed (or shielded). This background count rate is then subtracted from every experimental reading to give the net count rate due to the beta source alone.',
    keyConcepts: ['measure background without source present', 'subtract background from all readings'],
    keywords: ['background', 'without source', 'removed', 'subtract', 'deduct', 'count rate', 'net'],
    feedbackHit: 'Correct — background measured without the source and subtracted from all results.',
    feedbackMiss: 'Remove the beta source (or shield it) and measure the count rate — this is the background. Subtract this background from every experimental reading to isolate the count due to beta radiation alone.',
  },

  'q7_g': {
    marks: 4,
    exemplar: 'Four precautions with reasons (1 mark each):\n(1) Minimise the time near the source — less exposure time means a smaller radiation dose absorbed.\n(2) Maximise the distance from the source — radiation intensity decreases with distance (inverse-square law).\n(3) Use shielding / handle the source with tongs behind a screen — the shielding absorbs beta radiation, reducing exposure.\n(4) Keep the source in a lead-lined container when not in use / never point it at the body — prevents unnecessary direct exposure.',
    keyConcepts: ['minimise exposure time', 'maximise distance', 'use shielding / tongs', 'store / never point at body'],
    keywords: ['time', 'distance', 'shielding', 'tongs', 'lead', 'exposure', 'dose', 'container', 'protective', 'point'],
    feedbackHit: 'Excellent — four precautions each with a valid reason about reducing radiation dose.',
    feedbackMiss: 'Key precautions: (1) minimise time near the source; (2) maximise distance; (3) use shielding / tongs; (4) store in a lead container / never point at the body. Each reduces the radiation dose received.',
  },

  'q7_h': {
    marks: 2,
    exemplar: 'With an alpha source the count rate would drop to (near) the background level even with no plastic present — alpha particles are stopped by just a few centimetres of air or a thin sheet of paper. Beta particles can penetrate several sheets of plastic. Alpha particles are stopped more easily because they are larger (helium nuclei) and carry more charge (+2), so they interact more strongly with matter and lose energy much faster.',
    keyConcepts: ['alpha stopped before reaching detector', 'alpha less penetrating than beta', 'alpha has greater mass and charge'],
    keywords: ['alpha', 'stopped', 'paper', 'air', 'less penetrating', 'mass', 'charge', 'interact', 'beta', 'helium nucleus'],
    feedbackHit: 'Correct — alpha stopped by air/paper, compared to beta, explained by mass and charge.',
    feedbackMiss: 'Alpha particles are stopped by a few cm of air or a thin sheet of paper — they barely reach the detector even with no plastic. This is because alpha particles (helium nuclei, charge +2) are much larger and more highly charged than beta particles (electrons), so they interact strongly with matter and lose energy quickly.',
  },

  // ─── Q8 Radioactive Decay & Half-Life (cobalt-60) ─────────────
  'q8_a': {
    marks: 6,
    exemplar: 'Marks for a complete and correct table:\n(1) Six appropriate time values identified (1 mark)\n(2) All three trial values recorded for each time, showing a decrease (1 mark)\n(3) Values decrease consistently and lie within a plausible range (1 mark)\n(4) Averages calculated correctly: average = (Trial 1 + Trial 2 + Trial 3) / 3 (2 marks)\n(5) All averages given to an appropriate number of significant figures (1 mark)',
    keyConcepts: ['six time values', 'decreasing values across trials', 'average = sum / 3', 'significant figures'],
    keywords: ['six times', 'trial', 'average', 'sum', 'divide by 3', 'decreasing', 'significant figures'],
    feedbackHit: 'Excellent — table completed with correct time values, decreasing data, and accurately calculated averages.',
    feedbackMiss: 'Choose 6 evenly spaced time values. For each, record the % remaining from three trials. Average = (T1 + T2 + T3) / 3. Ensure the values consistently decrease and averages are given to an appropriate number of s.f.',
  },

  'q8_b': { type: 'mcq', correct: 2 },

  'q8_c': {
    marks: 3,
    exemplar: 'From the strontium-90 decay graph: (1) Find where % = 50 → t ≈ 29 years (first half-life). (2) Find where % = 25 → t ≈ 58 years; second half-life ≈ 58 − 29 = 29 years. (3) Find where % = 12.5 → t ≈ 87 years; third half-life ≈ 87 − 58 = 29 years. Average half-life ≈ (29 + 29 + 29) / 3 ≈ 29 years (the accepted half-life of strontium-90 is about 29 years). Award 1 mark per valid half-life reading from the graph, up to 3 marks.',
    keyConcepts: ['read time at 50% remaining', 'three half-life readings', 'calculate average half-life ≈ 29 years'],
    keywords: ['50%', '25%', '12.5%', 'graph', 'reading', 'half-life', 'average', '29', 'three', 'strontium-90'],
    feedbackHit: 'Correct — three half-life readings from the graph give an average of about 29 years.',
    feedbackMiss: 'Read the time when % remaining = 50 (≈29 yr), then 25% (≈58 yr) and 12.5% (≈87 yr). Each successive interval is ~29 years. Average the three intervals → ≈29 years (strontium-90).',
  },

  'q8_d': {
    marks: 2,
    exemplar: '1 280 000 → 640 000 → 320 000 → 160 000 → 80 000 = 4 half-lives. Total time = 4 × 5 years = 20 years.',
    keyConcepts: ['4 half-lives to reach 80 000 from 1 280 000', 'total time = 4 × half-life = 20 years'],
    keywords: ['4', 'half-lives', '20', 'years', '1280000', '80000', '5', 'calculation'],
    feedbackHit: 'Correct — 4 half-lives identified and total time of 20 years calculated.',
    feedbackMiss: 'Halve repeatedly: 1 280 000 → 640 000 → 320 000 → 160 000 → 80 000 = 4 halving steps. Total time = 4 × 5 years = 20 years.',
  },

  // ─── Q9 Power Stations & Electricity Transmission (gas) ───────
  'q9_a': {
    marks: 2,
    exemplar: 'Any two of: air pollution causing health problems for residents; visual impact (unsightly chimneys/buildings); noise pollution from machinery and turbines; risk of a gas leak or explosion; heavy traffic / pipeline infrastructure; land required for the station.',
    keyConcepts: ['pollution health effects', 'visual impact', 'noise', 'gas leak / explosion risk'],
    keywords: ['pollution', 'health', 'noise', 'visual', 'unsightly', 'gas leak', 'explosion', 'traffic', 'land'],
    feedbackHit: 'Two valid reasons why residents would not want a gas power station nearby correctly identified.',
    feedbackMiss: 'Think about air pollution and health, noise from operations, the risk of a gas leak or explosion, visual impact, or the land needed.',
  },

  'q9_b': {
    marks: 1,
    exemplar: 'Water is needed to produce steam (to drive the turbines) and to cool/condense the steam back to water after it passes through the turbines (in the condenser).',
    keyConcepts: ['water to produce steam for turbines', 'water for cooling in condenser'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser', 'boiler', 'condensed'],
    feedbackHit: 'Correct — water use for steam production or cooling/condensing stated.',
    feedbackMiss: 'Large amounts of water are needed to produce steam to drive the turbines, and to cool (condense) the steam back to water after it leaves the turbines.',
  },

  'q9_c': {
    marks: 1,
    exemplar: 'The secondary current halves (is halved). By conservation of energy (P = IV), if the voltage doubles then the current must halve to keep the power constant.',
    keyConcepts: ['secondary current halves when voltage doubles', 'P = IV conservation'],
    keywords: ['halves', 'half', 'current', 'secondary', 'doubles', 'voltage', 'P=IV'],
    feedbackHit: 'Correct — the secondary current halves when the voltage doubles.',
    feedbackMiss: 'P = IV. If the voltage doubles (×2), the current must halve (÷2) to keep the power P the same. Secondary current = halved.',
  },

  'q9_d': {
    marks: 3,
    exemplar: '(1) Power loss in the cables is given by P = I²R — it is proportional to the square of the current. (2) A higher transmission voltage means a lower current is needed to deliver the same power (P = IV: if V increases, I decreases). (3) A lower current means much less heat generated in the cables (I²R decreases), so much less energy is wasted as heat.',
    keyConcepts: ['P_loss = I²R proportional to current squared', 'higher voltage → lower current', 'lower current → less heat loss'],
    keywords: ['I²R', 'current', 'voltage', 'heat', 'loss', 'proportional', 'P=IV', 'reduces'],
    feedbackHit: 'Excellent — I²R relationship, effect of voltage on current, and reduced heat loss all correctly explained.',
    feedbackMiss: 'Power loss = I²R. Higher voltage → lower current (P=IV). Lower current → much less heat loss (loss ∝ I²). This is why electricity is transmitted at very high voltage.',
  },

  'q9_e': {
    marks: 6,
    exemplar: 'Water vapour (H₂O): a greenhouse gas; traps infrared radiation re-emitted from Earth\'s surface; contributes to the enhanced greenhouse effect and global warming.\nCarbon dioxide (CO₂): a major greenhouse gas; same trapping mechanism; long atmospheric residence time; the main driver of climate change from burning fossil fuels (though gas releases less CO₂ per unit of energy than coal or oil).\nNitrogen oxides (NOₓ): cause acid rain and contribute to photochemical smog; NOₓ reacts with water in the atmosphere to form nitric acid, damaging forests, lakes and buildings, and harming the respiratory system.\nAward 2 marks per gas: 1 for the impact type, 1 for the mechanism/consequence.',
    keyConcepts: ['H2O and CO2 are greenhouse gases', 'greenhouse gas traps infrared radiation', 'NOx causes acid rain and smog', 'acid rain / smog damages ecosystems and health'],
    keywords: ['greenhouse gas', 'infrared', 'climate change', 'global warming', 'acid rain', 'nitric acid', 'smog', 'reacts with water', 'damages', 'CO2', 'NOx', 'water vapour'],
    feedbackHit: 'Excellent — environmental impacts of all three gases described with mechanisms.',
    feedbackMiss: 'H₂O and CO₂ are greenhouse gases — they absorb and re-emit infrared radiation, trapping heat (climate change). NOₓ causes acid rain and smog: it reacts with atmospheric water to form nitric acid, damaging forests, lakes, buildings and health.',
  },

  'q9_f': {
    marks: 3,
    exemplar: '(1) Demand for electricity is much lower at night (fewer people awake; most businesses/factories closed). (2) Electrical energy cannot be stored economically on a large scale, so excess generation is wasted. (3) By charging less at night, companies encourage consumers to shift usage to night-time (e.g. running washing machines, charging devices), using electricity that would otherwise be wasted and letting power stations run efficiently.',
    keyConcepts: ['lower demand at night', 'electrical energy cannot be stored at large scale', 'cheaper tariff encourages night use to prevent waste'],
    keywords: ['demand', 'lower', 'night', 'storage', 'cannot store', 'excess', 'wasted', 'cheaper', 'encourage', 'off-peak'],
    feedbackHit: 'Correct — lower demand, inability to store electricity, and the shift incentive all addressed.',
    feedbackMiss: 'Night-time demand is lower; electrical energy cannot be stored economically; cheaper night rates encourage consumers to use the otherwise-wasted surplus generation.',
  },

  // ─── Q10 Micro-Hydro Power & Traffic Management ───────────────
  'q10_a': {
    marks: 1,
    exemplar: 'Any application that genuinely requires a constant uninterrupted electricity supply: hospitals / intensive care units; water treatment / pumping stations; data centres / internet servers; airports; railway signalling; refrigeration for food or medicine; street lighting.',
    keyConcepts: ['application requiring constant electricity supply'],
    keywords: ['hospital', 'water treatment', 'data centre', 'server', 'airport', 'refrigeration', 'constant', 'uninterrupted'],
    feedbackHit: 'Correct — a valid application requiring a continuous electricity supply identified.',
    feedbackMiss: 'Think of applications where a power cut would be dangerous or seriously disruptive: hospitals, water treatment plants, data centres, airports, or refrigeration all need constant electricity.',
  },

  'q10_b': {
    marks: 15,
    exemplar: 'A high-scoring response (13–15 marks) addresses all five bullet points with developed reasoning:\n\n• Why constant electricity matters for the chosen application (link to a specific consequence of power failure — e.g. patient safety in a hospital, data loss, water supply failure).\n\n• Advantage of a small-scale micro-hydro supply: independent of the grid (unaffected by load shedding); renewable (the river flows continuously, so it is more reliable than solar or wind); low running cost; low emissions during operation; can supply power day and night.\n\n• Disadvantage: depends on a reliable nearby water flow (output falls in a drought or dry season); battery storage adds cost and complexity; high initial installation cost; possible environmental impact on the river/aquatic life; limited to locations with flowing water.\n\n• Economic factors: high upfront capital cost vs. low running cost; payback period (years to recoup the investment through savings); cost savings during load shedding; potential for local jobs in installation and maintenance.\n\n• Social factors: improved safety (traffic lights / hospitals / water supply keep working during load shedding); energy independence for the community; reduced disruption to daily life; positive environmental impact (renewable = less fossil fuel); some concern about effects on the river ecosystem.',
    keyConcepts: ['constant supply linked to chosen application', 'micro-hydro advantage: grid-independent renewable reliable low-emission', 'micro-hydro disadvantage: depends on water flow, battery-dependent, costly upfront, river impact', 'economic: high capital low running cost payback', 'social: improved safety energy independence community benefit'],
    keywords: ['constant', 'advantage', 'disadvantage', 'micro-hydro', 'renewable', 'water flow', 'reliable', 'battery', 'cost', 'economic', 'social', 'safety', 'load shedding', 'independent', 'payback'],
    feedbackHit: 'Strong extended response — all five criteria addressed with developed points and a balanced evaluation of the micro-hydro supply solution.',
    feedbackMiss: 'Address all five bullet points: (1) why constant supply matters for your chosen use; (2) advantage of micro-hydro (e.g. grid-independent, renewable, reliable day and night); (3) disadvantage (e.g. depends on water flow, battery needed, cost, river impact); (4) economic factors (high setup cost, low running cost, payback period); (5) social factors (safety, energy access, community benefit).',
  },
}
