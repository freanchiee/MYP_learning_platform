import 'server-only'

type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

type MCQEntry = {
  type: 'mcq'
  correct: number
}

type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ─── Q1 Arctic Tern Migration ─────────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Speed = distance / time = 960 km ÷ 24 h = 40 km h⁻¹.',
    keyConcepts: ['speed = distance/time', '40 km/h', 'unit required'],
    keywords: ['40', 'km/h', 'speed', 'distance', 'time', '960', '24'],
    feedbackHit: 'Correct — speed = 960 ÷ 24 = 40 km h⁻¹.',
    feedbackMiss: 'Speed = distance ÷ time. Use 960 km and 24 hours (1 day = 24 hours). Speed = 960 ÷ 24 = 40 km h⁻¹.',
  },

  'q1_b': {
    marks: 2,
    exemplar: 'Any two of: headwind / wind resistance reducing speed; adverse weather conditions such as storms or rain; fatigue over a long journey; having to navigate around obstacles; changes in altitude; formation flying effects.',
    keyConcepts: ['external resistive forces', 'environmental factors', 'biological factors'],
    keywords: ['headwind', 'wind', 'air resistance', 'fatigue', 'weather', 'storm', 'navigate', 'altitude'],
    feedbackHit: 'Good — two valid factors affecting average speed identified.',
    feedbackMiss: 'Think about physical factors opposing motion (headwind, rain) or the bird\'s condition (fatigue). The geolocator measured 48 km/h average, which may differ from maximum speed due to such factors.',
  },

  'q1_c': { type: 'mcq', correct: 3 },

  'q1_d': {
    marks: 4,
    exemplar: 'Force: Between C and D, a net retarding/braking force acts backwards on the bird (opposing motion). Velocity: The velocity decreases from the maximum value at C to zero at D. Acceleration: The bird has a negative acceleration (deceleration) — it is slowing down. Newton\'s law: Newton\'s Second Law (F = ma) — the net force causes deceleration; a larger net force produces a greater deceleration.',
    keyConcepts: ['retarding force opposes motion', 'velocity decreases to zero', 'deceleration = negative acceleration', 'Newton Second Law F=ma'],
    keywords: ['retarding', 'force', 'decreasing', 'zero', 'deceleration', 'negative', 'Newton', 'F=ma', 'net force'],
    feedbackHit: 'Excellent — all four aspects (force, velocity, acceleration, Newton\'s law) correctly addressed.',
    feedbackMiss: 'Between C and D: (1) A net retarding force acts backwards. (2) Velocity decreases to zero. (3) Acceleration is negative (deceleration). (4) Newton\'s 2nd Law: F = ma — net force causes deceleration.',
  },

  'q1_e': {
    marks: 2,
    exemplar: 'Distance = area under the velocity–time graph between C and D. For a triangle: Distance = ½ × (time interval CD) × (velocity at C). One mark for correct method (area of triangle), one mark for correct calculation with unit.',
    keyConcepts: ['area under v-t graph = distance', 'triangle area = ½ × base × height', 'unit required'],
    keywords: ['area', 'triangle', 'distance', 'velocity', 'time', 'half', 'base', 'height'],
    feedbackHit: 'Correct — distance found from the area under the v-t graph.',
    feedbackMiss: 'Distance = area under the v–t graph between C and D. Shape is a triangle: area = ½ × base × height = ½ × (time for CD) × (velocity at C). Include a unit.',
  },

  // ─── Q2 Wave Properties ───────────────────────────────────────
  'q2_a': {
    marks: 2,
    exemplar: 'Wavelength: the distance between two successive peaks (or troughs, or compressions); Amplitude: maximum displacement from equilibrium; Compression: region of high pressure / high particle density in the longitudinal wave; Rarefaction: region of low pressure / low particle density. Award 1 mark per two correct identifications.',
    keyConcepts: ['wavelength = distance between repeating points', 'amplitude = maximum displacement', 'compression = high pressure region', 'rarefaction = low pressure region'],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'pressure', 'displacement', 'density', 'peaks', 'troughs'],
    feedbackHit: 'Correct — all four wave features correctly identified.',
    feedbackMiss: 'Wavelength: distance between identical points on successive waves. Amplitude: max displacement from equilibrium. Compression: dense region. Rarefaction: spread-out region.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Count the number of complete cycles of wave A in 1 second from the display. Frequency = cycles per second (Hz). Accept the value read with correct unit.',
    keyConcepts: ['frequency = cycles per second', 'unit Hz'],
    keywords: ['frequency', 'cycles', 'Hz', 'per second', 'count', 'wave A'],
    feedbackHit: 'Correct — frequency of wave A correctly read from the display.',
    feedbackMiss: 'Count complete cycles wave A makes in 1 second. That count = frequency in Hz.',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Accept any two waves with the same number of cycles in 1 second. E.g. waves A and C, or B and D (depends on the display). Award mark for correct identification of any pair with matching cycle count.',
    keyConcepts: ['same frequency = same number of cycles per second'],
    keywords: ['same frequency', 'equal cycles', 'frequency'],
    feedbackHit: 'Correct — two waves with the same frequency correctly identified.',
    feedbackMiss: 'Frequency = number of complete cycles per second. Find two waves that complete the same number of full oscillations in 1 second.',
  },

  'q2_d': {
    marks: 2,
    exemplar: 'Step 1: Read frequency of wave C from the graph (f = cycles per second). Step 2: Use v = fλ → λ = v/f = 330 / f. Award 1 mark for correct equation and substitution, 1 mark for correct answer with unit (m).',
    keyConcepts: ['wave equation v = fλ', 'rearranging to λ = v/f', 'unit metres'],
    keywords: ['v=fλ', 'wavelength', 'frequency', '330', 'm/s', 'speed', 'unit', 'metres'],
    feedbackHit: 'Correct — wavelength calculated using v = fλ with correct unit.',
    feedbackMiss: 'Use v = fλ. Rearrange: λ = v/f. Substitute v = 330 m/s and frequency of wave C from graph. Include unit (metres).',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'The wave with the highest frequency (most cycles per second) does NOT show infrasound, because infrasound has frequency < 20 Hz. Accept any wave correctly identified as having frequency > 20 Hz.',
    keyConcepts: ['infrasound frequency < 20 Hz', 'highest frequency wave is not infrasound'],
    keywords: ['infrasound', 'frequency', '20 Hz', 'highest', 'not infrasound'],
    feedbackHit: 'Correct — the wave with frequency above 20 Hz identified as not infrasound.',
    feedbackMiss: 'Infrasound has frequency less than 20 Hz. Identify the wave with the highest frequency — that one (>20 Hz) is not infrasound.',
  },

  'q2_f': {
    marks: 3,
    exemplar: '(1) Infrasound undergoes diffraction — waves spread out as they pass around the obstacle (the rocky ridge). (2) Diffraction is most effective when the wavelength is comparable to or larger than the size of the obstacle. (3) Infrasound has a very long wavelength (low frequency, v = 330 m s⁻¹) and diffracts significantly around the ridge, allowing waves to reach rhinoceroses on the other side.',
    keyConcepts: ['diffraction around obstacle', 'long wavelength causes large diffraction', 'low frequency = long wavelength'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'ridge', 'obstacle', 'low frequency', 'long wavelength', 'around'],
    feedbackHit: 'Excellent — diffraction named, mechanism explained, long wavelength linked to large diffraction.',
    feedbackMiss: 'Infrasound diffracts around the ridge because its wavelength is very long. Maximum diffraction occurs when wavelength ≥ obstacle size. Long wavelength infrasound diffracts around large obstacles.',
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    marks: 2,
    exemplar: 'Using refractive index and the diagram: top layer = air (n=1.00, least dense); middle layer = water (n=1.33, intermediate); bottom layer = glass (n=1.50, most dense). Award 1 mark per correctly labelled layer.',
    keyConcepts: ['air top layer lowest refractive index', 'water middle', 'glass bottom highest refractive index'],
    keywords: ['air', 'water', 'glass', 'refractive index', 'top', 'middle', 'bottom'],
    feedbackHit: 'Correct — all three layers correctly identified.',
    feedbackMiss: 'Air (n=1.00) is least dense — fastest light. Glass (n=1.50) most dense — slowest light, bends most towards normal. Water (n=1.33) intermediate.',
  },

  'q3_b': {
    marks: 3,
    exemplar: '(1) Light travels at different speeds in different media — it slows down in denser materials. (2) When entering a denser medium, light slows down. (3) Slowing down causes it to bend towards the normal. Greater refractive index difference = greater bending.',
    keyConcepts: ['speed changes at boundary', 'slower in denser medium', 'bends towards normal in denser medium'],
    keywords: ['speed', 'slows', 'normal', 'denser', 'bends towards', 'refractive index', 'boundary'],
    feedbackHit: 'Well done — speed change, direction of bending, and refractive index link all correct.',
    feedbackMiss: 'Light slows in denser medium → bends towards normal. Bigger refractive index difference → more bending.',
  },

  // ─── Q4 Static Electricity ────────────────────────────────────
  'q4_a': {
    marks: 1,
    exemplar: 'Electron: −1; Proton: +1; Neutron: 0. Award 1 mark for all three correct.',
    keyConcepts: ['electron negative charge', 'proton positive charge', 'neutron neutral'],
    keywords: ['electron', '-1', 'negative', 'proton', '+1', 'positive', 'neutron', '0', 'neutral'],
    feedbackHit: 'Correct — all three particle charges correctly stated.',
    feedbackMiss: 'Electron = −1; Proton = +1; Neutron = 0.',
  },

  'q4_b': {
    marks: 3,
    exemplar: '(1) Electrons are the mobile charged particles. (2) When the wool cloth rubs the perspex rod, electrons are transferred from the cloth to the rod. (3) The rod gains electrons, so it has more negative charges than positive, giving it a net negative charge.',
    keyConcepts: ['electrons are mobile', 'electron transfer from cloth to rod', 'gain of electrons = negative charge'],
    keywords: ['electrons', 'mobile', 'transferred', 'rubbing', 'cloth', 'gains', 'negative', 'more electrons'],
    feedbackHit: 'Excellent — electron mobility, transfer direction, and resulting negative charge correct.',
    feedbackMiss: 'Only electrons can move. Rubbing transfers electrons from cloth to rod. Gaining electrons → rod has more negative charges → net negative charge.',
  },

  'q4_c': {
    marks: 4,
    exemplar: '(1) Bruno becomes charged by friction as he walks on the carpet — electrons are transferred between carpet and fur. (2) The cereal pieces are initially uncharged/neutral. (3) Bruno\'s charge induces a redistribution of charge in the cereal (induction): the side nearest Bruno develops the opposite charge, the far side develops the same charge. (4) The opposite charges on the nearest side are attracted to Bruno\'s charge — electrostatic attraction causes the cereal to stick.',
    keyConcepts: ['charging by friction', 'induction causes charge redistribution', 'opposite charges attract'],
    keywords: ['friction', 'carpet', 'induction', 'redistribution', 'opposite', 'attract', 'neutral', 'electrons'],
    feedbackHit: 'Excellent — friction charging, induction, redistribution, and attraction all correct.',
    feedbackMiss: 'Sequence: (1) Bruno charges by friction; (2) cereal is neutral but induction redistributes charge; (3) nearest side gets opposite charge; (4) opposite charges attract → cereal sticks.',
  },

  // ─── Q5 Thermal Insulation Investigation ──────────────────────
  'q5_a': {
    marks: 3,
    exemplar: '(1) Conduction — heat through direct contact (vibration of particles in solids); (2) Convection — heat by movement of fluid (liquid or gas); (3) Radiation — heat by infrared electromagnetic waves (no medium needed).',
    keyConcepts: ['conduction', 'convection', 'radiation'],
    keywords: ['conduction', 'convection', 'radiation'],
    feedbackHit: 'All three methods of heat transfer correctly listed.',
    feedbackMiss: 'Conduction (through solids), convection (through fluids), radiation (infrared waves — no medium).',
  },

  'q5_b': {
    marks: 2,
    exemplar: 'Examples: Balance — to measure initial and final mass so mass melted can be calculated; Thermometer — to monitor room temperature as a control variable; Stopwatch — to ensure equal time per trial. 1 mark: suitable equipment. 1 mark: valid justification.',
    keyConcepts: ['equipment linked to measurement purpose', 'justification linked to experiment'],
    keywords: ['balance', 'timer', 'stopwatch', 'thermometer', 'mass', 'time', 'measure'],
    feedbackHit: 'Good — valid equipment with linked justification.',
    feedbackMiss: 'Name one piece of equipment and explain why needed. A balance measures mass (initial − final = melted). A stopwatch ensures equal time per trial.',
  },

  'q5_c': {
    marks: 2,
    exemplar: 'Hypothesis: As the number of layers of bubble wrap increases, the mass of ice melted will decrease. Justification: More layers of bubble wrap provide more insulation, reducing heat transfer (conduction, convection, radiation) from surroundings to the ice.',
    keyConcepts: ['more insulation = less ice melted', 'bubble wrap reduces heat transfer'],
    keywords: ['increases', 'decreases', 'insulation', 'heat transfer', 'bubble wrap', 'less heat'],
    feedbackHit: 'Correct hypothesis with sound justification.',
    feedbackMiss: 'More layers → more insulation → less heat transfer → less mass melted. State direction clearly and link to mechanism.',
  },

  'q5_d': {
    marks: 3,
    exemplar: 'Example: Room temperature. How: measure with thermometer, conduct in same room at same time of day. Why: varying room temperature changes heat transfer rate, making comparisons invalid (unfair test). 1 mark: variable named. 1 mark: how to control. 1 mark: why.',
    keyConcepts: ['named control variable', 'method to control', 'justification for fairness'],
    keywords: ['temperature', 'ice mass', 'time', 'room temperature', 'control', 'fair test', 'constant'],
    feedbackHit: 'Excellent — control variable named, practical method, and scientific justification.',
    feedbackMiss: 'Name a specific variable (e.g. room temperature, initial ice mass, time). Describe how to keep it constant. Explain why it would affect results.',
  },

  'q5_e': {
    marks: 3,
    exemplar: '(1) Record initial and final mass of ice; mass melted = initial − final. (2) Test at least five different numbers of bubble wrap layers (e.g. 0, 1, 2, 3, 4) to identify trends. (3) Repeat each condition at least three times and calculate mean to reduce random error and improve reliability.',
    keyConcepts: ['measure initial and final mass', '≥5 IV values', 'repeat and average for reliability'],
    keywords: ['initial mass', 'final mass', 'mass melted', 'five values', 'range', 'repeat', 'average', 'reliable'],
    feedbackHit: 'Well done — measurement, range of values, and reason for repeating all correct.',
    feedbackMiss: 'Describe: (1) what to measure; (2) how many IV values (≥5); (3) repeat each 3+ times and average.',
  },

  // ─── Q6 Cup Cooling Investigation ─────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'The results do NOT support the hypothesis. The data shows no consistent trend — cooling time does not increase with cup thickness. For example, the 6 mm cup cooled faster (8 min) than the 2 mm cup (12 min), and the 4 mm cup cooled faster than the 2 mm cup. The data is also inconsistent (two different results for 6 mm: 8 and 11 min → 3 min difference).',
    keyConcepts: ['results do not support hypothesis', 'no consistent trend', 'specific data cited'],
    keywords: ['not supported', 'no trend', 'inconsistent', '6mm', '8 minutes', '2mm', '12 minutes', 'anomaly'],
    feedbackHit: 'Correct — conclusion not supported with specific data evidence.',
    feedbackMiss: 'Does cooling time consistently increase with thickness? The data shows no clear trend. State "not supported" and cite specific data.',
  },

  'q6_b': {
    marks: 8,
    exemplar: 'Any four weaknesses (2 marks each: 1 weakness + 1 scientific explanation):\n(1) Cups made from different materials — different thermal conductivities mean results reflect material, not just thickness.\n(2) Cups have different colours — darker cups emit/absorb more radiation, affecting cooling rate.\n(3) Different surface areas — cups of different thickness may have different surface areas, affecting convection and radiation loss.\n(4) No repeats — cannot check for random error or anomalies.\n(5) Room temperature not controlled — ambient changes affect heat transfer.\n(6) Different cup shapes — surface-area-to-volume ratio differs, affecting cooling rate.',
    keyConcepts: ['material conductivity', 'colour radiation effect', 'surface area convection', 'no repeats', 'uncontrolled variables'],
    keywords: ['material', 'conductivity', 'colour', 'radiation', 'surface area', 'no repeats', 'room temperature', 'reliability', 'fair test'],
    feedbackHit: 'Excellent — four weaknesses each with valid scientific explanation.',
    feedbackMiss: 'For each weakness: state the specific problem AND explain why it affects results. Consider: materials (different conductivities), colours (radiation differs), surface areas, no repeats, room temperature.',
  },

  // ─── Q7 Radiation Investigation ───────────────────────────────
  'q7_a': {
    marks: 2,
    exemplar: 'IV: the thickness of the paper (in mm or cm). DV: the count rate of beta radiation detected by the Geiger–Müller tube (in counts per second or per minute).',
    keyConcepts: ['IV is paper thickness', 'DV is beta radiation count rate'],
    keywords: ['independent', 'paper', 'thickness', 'dependent', 'count rate', 'Geiger', 'beta'],
    feedbackHit: 'Correct — IV and DV clearly identified.',
    feedbackMiss: 'IV = what you change = thickness of paper. DV = what you measure = count rate from Geiger tube.',
  },

  'q7_b': {
    marks: 2,
    exemplar: 'A beta particle is a high-energy, fast-moving electron emitted from the nucleus when a neutron decays into a proton. It has negative charge and travels at high speed (close to speed of light).',
    keyConcepts: ['beta particle is an electron', 'high energy fast moving'],
    keywords: ['electron', 'high energy', 'fast', 'negative', 'nucleus', 'speed'],
    feedbackHit: 'Correct — beta particle identified as high-energy electron with motion property.',
    feedbackMiss: 'Beta particle = electron from nucleus. High energy, moves near speed of light, negative charge.',
  },

  'q7_c': {
    marks: 2,
    exemplar: 'As the thickness of the paper increases, the intensity (count rate) of beta radiation detected will decrease, because thicker paper absorbs more beta particles, reducing the number reaching the detector.',
    keyConcepts: ['thickness increases → intensity decreases', 'paper absorbs beta particles'],
    keywords: ['thickness', 'increases', 'count rate', 'decreases', 'absorbed', 'paper'],
    feedbackHit: 'Correct — direction of relationship and scientific reason stated.',
    feedbackMiss: 'As paper thickness increases, beta count rate decreases because paper absorbs beta particles.',
  },

  'q7_d': {
    marks: 6,
    exemplar: '(1) Test ≥5 different paper thicknesses (e.g. 0, 10, 20, 30, 40 sheets). (2) Repeat each measurement ≥3 times; calculate mean to reduce random error. (3) Measure count rate with zero paper as baseline. (4) Add paper sheets one at a time. (5) Keep distance from source to Geiger tube constant (control variable). (6) Use same radioactive source throughout.',
    keyConcepts: ['≥5 IV values', '≥3 repeats and average', 'zero paper baseline', 'constant source-detector distance', 'same source'],
    keywords: ['five', 'thickness values', 'repeat', 'three', 'average', 'zero', 'baseline', 'distance', 'constant', 'same source'],
    feedbackHit: 'Excellent — range, repeats, baseline, increasing sheets, control variable, same source all addressed.',
    feedbackMiss: 'Valid method: ≥5 thickness values; ≥3 repeats with mean; baseline at zero; add sheets one at a time; keep source-detector distance constant; same source.',
  },

  'q7_e': {
    marks: 1,
    exemplar: 'Any one of: cosmic rays from space; radioactive materials in rocks/soil (e.g. radon gas); fallout from past nuclear weapons testing; radioactive materials in building materials.',
    keyConcepts: ['sources of natural background radiation'],
    keywords: ['cosmic rays', 'rocks', 'radon', 'soil', 'nuclear', 'fallout', 'natural'],
    feedbackHit: 'Correct — valid source of background radiation stated.',
    feedbackMiss: 'Background radiation: cosmic rays, radioactive rocks/radon, weapons fallout, or building materials.',
  },

  'q7_f': {
    marks: 2,
    exemplar: 'Measure background count rate with the radioactive source removed. This background count rate is then subtracted from every experimental reading to give the net count rate due to the beta source.',
    keyConcepts: ['measure background without source', 'subtract background from all readings'],
    keywords: ['background', 'without source', 'removed', 'subtract', 'count rate', 'net'],
    feedbackHit: 'Correct — background measured without source, subtracted from all results.',
    feedbackMiss: 'Remove the source and measure count rate — this is background. Subtract this from every experimental reading.',
  },

  'q7_g': {
    marks: 4,
    exemplar: '(1) Minimise time near source — less exposure time = less radiation dose.\n(2) Maximise distance from source — radiation intensity decreases with distance.\n(3) Use shielding (lead screen) — absorbs beta and gamma.\n(4) Never point source at people / keep in lead container when not in use — prevents direct exposure.',
    keyConcepts: ['minimise exposure time', 'maximise distance', 'use shielding', 'never point at body'],
    keywords: ['time', 'distance', 'shielding', 'lead', 'exposure', 'dose', 'container'],
    feedbackHit: 'Excellent — four precautions each with valid reason.',
    feedbackMiss: '(1) Minimise time; (2) maximise distance; (3) use lead shielding; (4) keep in container. Each reduces radiation dose.',
  },

  'q7_h': {
    marks: 2,
    exemplar: 'With an alpha source, count rate would drop to near background even without any paper — alpha particles are stopped by just a few cm of air. Beta particles penetrate more material. Alpha is less penetrating because it consists of helium nuclei (charge +2, larger mass) that interact more strongly with matter.',
    keyConcepts: ['alpha stopped by air/paper', 'alpha less penetrating than beta', 'alpha has greater mass and charge'],
    keywords: ['alpha', 'stopped', 'air', 'less penetrating', 'mass', 'charge', 'helium nucleus'],
    feedbackHit: 'Correct — alpha stopped by air/paper (not paper sheets), reason explained.',
    feedbackMiss: 'Alpha particles are stopped by a few cm of air — they never reach the paper. Alpha (helium nuclei, +2 charge) interact far more strongly with matter than beta (electrons).',
  },

  // ─── Q8 Radioactive Decay & Half-Life ─────────────────────────
  'q8_a': {
    marks: 6,
    exemplar: 'Marks for complete correct table:\n(1) Six appropriate time values (1 mark)\n(2) All three trial values recorded, showing a decrease (1 mark)\n(3) Values decrease consistently (1 mark)\n(4) Both missing averages calculated: average = (T1 + T2 + T3) / 3 (2 marks)\n(5) Averages to appropriate significant figures (1 mark)',
    keyConcepts: ['six time values', 'decreasing values', 'average = sum/3', 'significant figures'],
    keywords: ['six times', 'trial', 'average', 'sum', 'divide by 3', 'decreasing', 'significant figures'],
    feedbackHit: 'Excellent — table with correct time values, decreasing data, and accurate averages.',
    feedbackMiss: 'Choose 6 evenly spaced time values. Record % remaining from 3 trials. Average = (T1+T2+T3)/3. Values must consistently decrease.',
  },

  'q8_b': { type: 'mcq', correct: 2 },

  'q8_c': {
    marks: 3,
    exemplar: 'From the strontium-90 decay graph: (1) Find where % = 50 → first half-life reading ≈29 years. (2) Find where % = 25 → second half-life reading ≈29 years. (3) Find where % = 12.5 → third reading ≈29 years. Average ≈ 29 years. Award 1 mark per valid half-life reading from graph.',
    keyConcepts: ['read half-life at 50% remaining', 'three readings', 'calculate average'],
    keywords: ['50%', '25%', '12.5%', 'graph', 'half-life', 'average', 'three', 'strontium-90'],
    feedbackHit: 'Correct — three half-life readings and average calculated.',
    feedbackMiss: 'Read time when % = 50 (1st half-life), 25 (2nd), 12.5 (3rd). Average the three time intervals.',
  },

  'q8_d': {
    marks: 2,
    exemplar: '640 000 → 320 000 → 160 000 → 80 000 → 40 000 = 4 half-lives. Total time = 4 × 8 days = 32 days.',
    keyConcepts: ['4 half-lives to reach 40 000 from 640 000', 'total time = 4 × 8 = 32 days'],
    keywords: ['4', 'half-lives', '32', 'days', '640000', '40000'],
    feedbackHit: 'Correct — 4 half-lives = 32 days.',
    feedbackMiss: 'Halve repeatedly: 640 000 → 320 000 → 160 000 → 80 000 → 40 000 = 4 steps. Time = 4 × 8 days = 32 days.',
  },

  // ─── Q9 Power Stations & Electricity Transmission ─────────────
  'q9_a': {
    marks: 2,
    exemplar: 'Any two of: air/smoke pollution from combustion causing health problems; visual impact (unsightly); noise from operations and tanker deliveries; heavy vehicle traffic causing congestion; risk of oil spills affecting local environment.',
    keyConcepts: ['pollution health effects', 'visual impact', 'noise', 'traffic'],
    keywords: ['pollution', 'smoke', 'health', 'noise', 'traffic', 'tankers', 'ugly', 'visual'],
    feedbackHit: 'Two valid reasons correctly identified.',
    feedbackMiss: 'Consider air pollution, noise, tanker traffic, visual impact, or oil spill risk.',
  },

  'q9_b': {
    marks: 1,
    exemplar: 'Water is needed to produce steam to drive the turbines, and to cool/condense the steam back to water after it passes through the turbines.',
    keyConcepts: ['water to produce steam for turbines', 'water for cooling'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser', 'condensed'],
    feedbackHit: 'Correct — water use for steam or cooling stated.',
    feedbackMiss: 'Water produces steam for turbines, and condenses steam back to water.',
  },

  'q9_c': {
    marks: 1,
    exemplar: 'The secondary current halves. By P = IV, if voltage doubles then current must halve to keep power constant.',
    keyConcepts: ['secondary current halves when voltage doubles', 'P = IV conservation'],
    keywords: ['halves', 'current', 'secondary', 'doubles', 'voltage', 'P=IV'],
    feedbackHit: 'Correct — secondary current halves.',
    feedbackMiss: 'P = IV. If V doubles, I must halve to keep P the same.',
  },

  'q9_d': {
    marks: 3,
    exemplar: '(1) Power loss = I²R — proportional to current squared. (2) Higher transmission voltage → lower current needed (P = IV). (3) Lower current → much less heat in cables (I²R decreases), less energy wasted.',
    keyConcepts: ['P_loss = I²R', 'higher voltage → lower current', 'lower current → less heat loss'],
    keywords: ['I²R', 'current', 'voltage', 'heat', 'loss', 'P=IV', 'reduces'],
    feedbackHit: 'Excellent — I²R, effect on current, and reduced loss all correct.',
    feedbackMiss: 'Loss = I²R. Higher V → lower I. Lower I → much less heat loss (loss ∝ I²).',
  },

  'q9_e': {
    marks: 6,
    exemplar: 'Water vapour (H₂O): greenhouse gas; traps infrared radiation; contributes to enhanced greenhouse effect and global warming.\nCarbon dioxide (CO₂): major greenhouse gas; same mechanism; long atmospheric residence; primary driver of climate change from fossil fuels.\nSulfur dioxide (SO₂): causes acid rain; reacts with atmospheric water → H₂SO₃/H₂SO₄; damages forests, lakes, buildings.\nAward 2 marks per gas: 1 for impact type, 1 for mechanism.',
    keyConcepts: ['H2O and CO2 are greenhouse gases', 'infrared absorption causes warming', 'SO2 causes acid rain'],
    keywords: ['greenhouse gas', 'infrared', 'climate change', 'global warming', 'acid rain', 'sulfuric acid', 'reacts with water'],
    feedbackHit: 'Excellent — impacts of all three gases with mechanisms.',
    feedbackMiss: 'H₂O and CO₂ are greenhouse gases (trap infrared → global warming). SO₂ causes acid rain (reacts with water → sulfuric acid → damages ecosystems and buildings).',
  },

  'q9_f': {
    marks: 3,
    exemplar: '(1) Demand much lower at night. (2) Electrical energy cannot be stored economically at large scale — excess generation is wasted. (3) Cheaper night rates encourage consumers to shift usage to night, using surplus electricity that would otherwise be wasted.',
    keyConcepts: ['lower demand at night', 'cannot store electrical energy', 'shift usage to prevent waste'],
    keywords: ['demand', 'lower', 'night', 'storage', 'wasted', 'cheaper', 'encourage', 'off-peak'],
    feedbackHit: 'Correct — lower demand, inability to store, and incentive all addressed.',
    feedbackMiss: 'Night: lower demand; can\'t store electricity; cheaper rates encourage night use of surplus.',
  },

  // ─── Q10 Wind Power & Traffic Management ──────────────────────
  'q10_a': {
    marks: 1,
    exemplar: 'Any application requiring constant uninterrupted supply: hospitals; water treatment plants; data centres; airports; railway signalling; refrigeration for food/medicine; street lighting.',
    keyConcepts: ['application requiring constant electricity'],
    keywords: ['hospital', 'water treatment', 'data centre', 'airport', 'refrigeration', 'constant'],
    feedbackHit: 'Correct — valid application requiring constant supply identified.',
    feedbackMiss: 'Think of applications where power loss would be dangerous: hospitals, water treatment, data centres.',
  },

  'q10_b': {
    marks: 15,
    exemplar: 'Top-band response addresses all five bullet points:\n• Why constant supply matters: link to specific consequence of failure for chosen application.\n• Advantage of wind: independent of grid (unaffected by load shedding); renewable/free fuel; low running cost; low emissions.\n• Disadvantage: intermittent (no wind at all times); battery needed for storage; high upfront cost; noise from turbine; limited power output.\n• Economic: high capital cost vs low running cost; payback period; savings during load shedding; local job creation.\n• Social: improved safety; energy independence; reduced disruption; positive environmental image; community acceptance of wind technology.',
    keyConcepts: ['constant supply linked to application', 'wind advantage: grid-independent renewable', 'wind disadvantage: intermittent battery-dependent', 'economic: high capital low running cost', 'social: safety independence community'],
    keywords: ['constant', 'advantage', 'disadvantage', 'wind', 'renewable', 'intermittent', 'battery', 'cost', 'economic', 'social', 'safety', 'load shedding'],
    feedbackHit: 'Strong response — all five criteria with developed reasoning and balanced evaluation.',
    feedbackMiss: 'Address all five: (1) why constant supply matters; (2) advantage of wind; (3) disadvantage; (4) economic; (5) social.',
  },

}
