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

  // ─── Q1 Peregrine Falcon Migration ────────────────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Speed = distance / time = 840 km ÷ 24 h = 35 km h⁻¹.',
    keyConcepts: ['speed = distance/time', '35 km/h', 'unit required'],
    keywords: ['35', 'km/h', 'speed', 'distance', 'time', '840', '24'],
    feedbackHit: 'Correct — speed = 840 ÷ 24 = 35 km h⁻¹.',
    feedbackMiss: 'Speed = distance ÷ time. Use 840 km and 24 hours. Speed = 840 ÷ 24 = 35 km h⁻¹.',
  },

  'q1_b': {
    marks: 2,
    exemplar: 'Any two of: headwind / wind resistance reducing speed; adverse weather (storms, rain); fatigue; navigating around obstacles; altitude changes; formation effects.',
    keyConcepts: ['external resistive forces', 'environmental factors', 'biological factors'],
    keywords: ['headwind', 'wind', 'air resistance', 'fatigue', 'weather', 'storm', 'navigate', 'altitude'],
    feedbackHit: 'Good — two valid factors identified.',
    feedbackMiss: 'Think about physical factors (headwind, storms) or bird condition (fatigue). GPS measured 42 km/h average, which may differ from maximum speed.',
  },

  'q1_c': { type: 'mcq', correct: 3 },

  'q1_d': {
    marks: 4,
    exemplar: 'Force: net retarding force acts backwards (opposing motion). Velocity: decreases from maximum at C to zero at D. Acceleration: negative (deceleration). Newton\'s Second Law (F = ma): net force causes deceleration.',
    keyConcepts: ['retarding force', 'velocity decreases to zero', 'deceleration', 'Newton Second Law'],
    keywords: ['retarding', 'force', 'decreasing', 'zero', 'deceleration', 'negative', 'Newton', 'F=ma'],
    feedbackHit: 'Excellent — all four aspects correctly addressed.',
    feedbackMiss: 'C to D: (1) retarding force backwards; (2) velocity decreases to zero; (3) negative acceleration (deceleration); (4) Newton 2nd Law F=ma.',
  },

  'q1_e': {
    marks: 2,
    exemplar: 'Distance = area under v-t graph between C and D. Triangle: ½ × (time CD) × (velocity at C). 1 mark: correct method. 1 mark: correct calculation with unit.',
    keyConcepts: ['area under v-t graph = distance', 'triangle area = ½ × base × height', 'unit required'],
    keywords: ['area', 'triangle', 'distance', 'velocity', 'time', 'half', 'base', 'height'],
    feedbackHit: 'Correct — area of triangle used correctly with unit.',
    feedbackMiss: 'Distance = area under v-t graph between C and D. Triangle: ½ × base × height. Include unit.',
  },

  // ─── Q2 Wave Properties ───────────────────────────────────────
  'q2_a': {
    marks: 2,
    exemplar: 'Wavelength: distance between successive peaks/troughs/compressions; Amplitude: max displacement from equilibrium; Compression: high pressure region; Rarefaction: low pressure region. 1 mark per two correct identifications.',
    keyConcepts: ['wavelength', 'amplitude', 'compression', 'rarefaction'],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'pressure', 'displacement'],
    feedbackHit: 'Correct — all four features identified.',
    feedbackMiss: 'Wavelength: distance between identical points. Amplitude: max displacement. Compression: dense. Rarefaction: spread out.',
  },

  'q2_b': {
    marks: 1,
    exemplar: 'Count complete cycles of wave A in 1 second. Frequency = cycles per second (Hz).',
    keyConcepts: ['frequency = cycles per second', 'unit Hz'],
    keywords: ['frequency', 'cycles', 'Hz', 'count', 'wave A'],
    feedbackHit: 'Correct — frequency read correctly.',
    feedbackMiss: 'Count complete cycles in 1 second = frequency in Hz.',
  },

  'q2_c': {
    marks: 1,
    exemplar: 'Accept any two waves with the same number of cycles per second (same frequency).',
    keyConcepts: ['same frequency = same cycles per second'],
    keywords: ['same frequency', 'equal cycles'],
    feedbackHit: 'Correct — two same-frequency waves identified.',
    feedbackMiss: 'Find two waves completing the same number of oscillations in 1 second.',
  },

  'q2_d': {
    marks: 2,
    exemplar: 'Step 1: Read frequency of wave C. Step 2: λ = v/f = 1480 / f. 1 mark: equation and substitution. 1 mark: correct answer with unit (m).',
    keyConcepts: ['v = fλ', 'λ = v/f', 'speed 1480 m/s in water'],
    keywords: ['v=fλ', 'wavelength', 'frequency', '1480', 'm/s', 'unit', 'metres'],
    feedbackHit: 'Correct — wavelength using 1480 m/s in ocean water with unit.',
    feedbackMiss: 'Use v = fλ → λ = v/f = 1480 / f_C. Include unit (m).',
  },

  'q2_e': {
    marks: 1,
    exemplar: 'The wave with the highest frequency does NOT show infrasound (frequency > 20 Hz).',
    keyConcepts: ['infrasound < 20 Hz', 'highest frequency = not infrasound'],
    keywords: ['infrasound', '20 Hz', 'highest frequency', 'not infrasound'],
    feedbackHit: 'Correct — highest-frequency wave identified as not infrasound.',
    feedbackMiss: 'Infrasound < 20 Hz. The wave with frequency > 20 Hz is not infrasound.',
  },

  'q2_f': {
    marks: 3,
    exemplar: '(1) Infrasound diffracts — waves spread around the underwater mountain range. (2) Diffraction strongest when wavelength ≥ obstacle size. (3) Infrasound has very long wavelength (low frequency, v=1480 m/s) → diffracts significantly around underwater ridges.',
    keyConcepts: ['diffraction', 'long wavelength', 'low frequency = long wavelength'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'underwater ridge', 'obstacle', 'low frequency'],
    feedbackHit: 'Excellent — diffraction named, wavelength link explained.',
    feedbackMiss: 'Infrasound diffracts around the ridge because its wavelength is very long (low frequency, high speed in water). Long wavelength → large diffraction.',
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    marks: 2,
    exemplar: 'Top layer = air (n=1.00); middle = water (n=1.33); bottom = glass (n=1.50). 1 mark per layer.',
    keyConcepts: ['air top', 'water middle', 'glass bottom'],
    keywords: ['air', 'water', 'glass', 'refractive index', 'layers'],
    feedbackHit: 'Correct — all three layers identified.',
    feedbackMiss: 'Compare refractive indices: Air=1.00 (top, least dense), Water=1.33, Glass=1.50 (bottom, most dense).',
  },

  'q3_b': {
    marks: 3,
    exemplar: '(1) Light slows in denser media (higher n). (2) Entering denser medium → bends towards normal. (3) Greater refractive index difference → greater bending.',
    keyConcepts: ['speed changes at boundary', 'bends towards normal in denser medium', 'refractive index'],
    keywords: ['speed', 'slows', 'normal', 'denser', 'bends', 'refractive index'],
    feedbackHit: 'Well done — speed, bending direction, and refractive index link correct.',
    feedbackMiss: 'Light slows in denser medium → bends towards normal. Bigger n difference → more bending.',
  },

  // ─── Q4 Static Electricity ────────────────────────────────────
  'q4_a': {
    marks: 1,
    exemplar: 'Electron: −1; Proton: +1; Neutron: 0.',
    keyConcepts: ['particle charges'],
    keywords: ['electron', '-1', 'proton', '+1', 'neutron', '0'],
    feedbackHit: 'Correct — all three charges correct.',
    feedbackMiss: 'Electron = −1; Proton = +1; Neutron = 0.',
  },

  'q4_b': {
    marks: 3,
    exemplar: '(1) Electrons are mobile. (2) Rubbing transfers electrons from fur to ebonite rod. (3) Rod gains electrons → net negative charge (more negatives than positives).',
    keyConcepts: ['electrons mobile', 'electron transfer', 'gain electrons = negative'],
    keywords: ['electrons', 'mobile', 'transferred', 'fur', 'rod', 'gains', 'negative'],
    feedbackHit: 'Excellent — mobility, transfer direction, and negative charge correct.',
    feedbackMiss: 'Only electrons move. Fur → rod electron transfer. Rod gains electrons → negative charge.',
  },

  'q4_c': {
    marks: 4,
    exemplar: '(1) Balloon charged by friction with jumper — electrons transferred. (2) Tissue is uncharged/neutral. (3) Balloon\'s charge induces redistribution (induction): side nearest balloon gets opposite charge, far side gets same charge. (4) Opposite charge nearest balloon is attracted — electrostatic attraction causes tissue to stick.',
    keyConcepts: ['charging by friction', 'induction', 'redistribution', 'opposite charges attract'],
    keywords: ['friction', 'jumper', 'induction', 'redistribution', 'opposite', 'attract', 'neutral'],
    feedbackHit: 'Excellent — friction, induction, redistribution, attraction all correct.',
    feedbackMiss: '(1) Balloon charged by friction; (2) tissue neutral; (3) induction redistributes charge; (4) opposite charge attracted.',
  },

  // ─── Q5 Thermal Insulation Investigation ──────────────────────
  'q5_a': {
    marks: 3,
    exemplar: '(1) Conduction; (2) Convection; (3) Radiation.',
    keyConcepts: ['conduction', 'convection', 'radiation'],
    keywords: ['conduction', 'convection', 'radiation'],
    feedbackHit: 'All three methods listed.',
    feedbackMiss: 'Conduction (solids), convection (fluids), radiation (infrared waves).',
  },

  'q5_b': {
    marks: 2,
    exemplar: 'Balance — to measure initial/final mass (mass melted = initial − final); or Stopwatch — equal time per trial; or Thermometer — monitor room temperature.',
    keyConcepts: ['equipment and justification'],
    keywords: ['balance', 'stopwatch', 'thermometer', 'mass', 'time'],
    feedbackHit: 'Valid equipment with justification.',
    feedbackMiss: 'Name equipment and explain why needed.',
  },

  'q5_c': {
    marks: 2,
    exemplar: 'As layers of foil increase, mass of ice melted decreases, because foil reflects infrared radiation and reduces heat transfer to the ice.',
    keyConcepts: ['more foil = less melting', 'foil reflects radiation, reduces conduction/convection'],
    keywords: ['increases', 'decreases', 'foil', 'reflect', 'radiation', 'insulation'],
    feedbackHit: 'Correct direction and scientific justification.',
    feedbackMiss: 'More foil → reflects radiation, reduces heat transfer → less mass melted.',
  },

  'q5_d': {
    marks: 3,
    exemplar: 'Room temperature. How: thermometer throughout, same room/time. Why: varies room temperature → changes heat transfer rate → unfair test.',
    keyConcepts: ['control variable', 'method', 'justification'],
    keywords: ['temperature', 'control', 'fair test', 'constant', 'variable'],
    feedbackHit: 'Variable named, method, justification all present.',
    feedbackMiss: 'Name variable (e.g. room temperature). Describe how to control. Explain why it affects results.',
  },

  'q5_e': {
    marks: 3,
    exemplar: '(1) Record initial and final mass (mass melted = initial − final). (2) Test ≥5 different layer numbers. (3) Repeat ≥3 times and average to reduce random error and improve reliability.',
    keyConcepts: ['measurement', '≥5 IV values', 'repeat and average'],
    keywords: ['initial mass', 'final mass', 'five values', 'repeat', 'average', 'reliable'],
    feedbackHit: 'All three points correct.',
    feedbackMiss: 'Measure mass melted, ≥5 IV values, ≥3 repeats and average.',
  },

  // ─── Q6 Cup Cooling Investigation ─────────────────────────────
  'q6_a': {
    marks: 1,
    exemplar: 'Results do NOT support hypothesis. No consistent trend — e.g. 5 mm cooled faster (7 min) than 1 mm (15 min). Two different results for 5 mm (7 min and 18 min) show inconsistency.',
    keyConcepts: ['no trend', 'not supported', 'evidence cited'],
    keywords: ['not supported', 'no trend', 'inconsistent', '5mm', '7 minutes', '1mm', '15 minutes'],
    feedbackHit: 'Correct — not supported with specific data evidence.',
    feedbackMiss: 'Does cooling time increase with thickness? No. State "not supported" with specific data.',
  },

  'q6_b': {
    marks: 8,
    exemplar: 'Four weaknesses (2 marks each):\n(1) Different materials — different thermal conductivities, not just thickness.\n(2) Different cup sizes/shapes — different surface areas affect convection and radiation.\n(3) No repeats — cannot check random error.\n(4) Room temperature uncontrolled — affects cooling rate.\n(5) Different colours — radiation emission differs.\n(6) Different liquid masses — more liquid takes longer to cool.',
    keyConcepts: ['material conductivity', 'surface area', 'no repeats', 'uncontrolled temperature'],
    keywords: ['material', 'conductivity', 'surface area', 'no repeats', 'room temperature', 'colour', 'radiation'],
    feedbackHit: 'Four weaknesses with scientific explanations.',
    feedbackMiss: 'Each weakness: state problem + scientific explanation of how it affects results.',
  },

  // ─── Q7 Radiation Investigation ───────────────────────────────
  'q7_a': {
    marks: 2,
    exemplar: 'IV: thickness of glass (mm or cm). DV: beta count rate (counts per second or per minute) detected by Geiger tube.',
    keyConcepts: ['IV = glass thickness', 'DV = count rate'],
    keywords: ['independent', 'glass', 'thickness', 'dependent', 'count rate', 'Geiger'],
    feedbackHit: 'Correct — IV and DV identified.',
    feedbackMiss: 'IV = thickness of glass. DV = count rate from Geiger tube.',
  },

  'q7_b': {
    marks: 2,
    exemplar: 'Beta particle is a high-energy, fast-moving electron emitted from nucleus. Negative charge, moves near speed of light.',
    keyConcepts: ['beta = electron', 'high energy fast'],
    keywords: ['electron', 'high energy', 'fast', 'negative', 'nucleus'],
    feedbackHit: 'Correct — beta identified as electron with motion property.',
    feedbackMiss: 'Beta = electron from nucleus; high energy; fast-moving; negative charge.',
  },

  'q7_c': {
    marks: 2,
    exemplar: 'As glass thickness increases, beta count rate decreases, because thicker glass absorbs more beta particles.',
    keyConcepts: ['thickness increases → count rate decreases', 'glass absorbs beta'],
    keywords: ['thickness', 'increases', 'count rate', 'decreases', 'absorbed', 'glass'],
    feedbackHit: 'Direction and reason correct.',
    feedbackMiss: 'More glass thickness → more beta absorbed → lower count rate.',
  },

  'q7_d': {
    marks: 6,
    exemplar: '(1) ≥5 glass thicknesses tested. (2) ≥3 repeats; calculate mean. (3) Baseline at zero glass. (4) Add glass sheets one at a time. (5) Keep source-to-detector distance constant. (6) Same source used throughout.',
    keyConcepts: ['≥5 IV values', '≥3 repeats', 'baseline', 'constant distance', 'same source'],
    keywords: ['five', 'repeat', 'three', 'average', 'zero', 'baseline', 'distance', 'constant', 'same source'],
    feedbackHit: 'All six elements addressed.',
    feedbackMiss: '≥5 values, ≥3 repeats with mean, zero baseline, add one at a time, constant distance, same source.',
  },

  'q7_e': {
    marks: 1,
    exemplar: 'Cosmic rays; radioactive rocks/soil/radon; nuclear weapons fallout; building materials.',
    keyConcepts: ['background radiation sources'],
    keywords: ['cosmic rays', 'rocks', 'radon', 'fallout'],
    feedbackHit: 'Valid source stated.',
    feedbackMiss: 'Background sources: cosmic rays, radon, rocks, building materials.',
  },

  'q7_f': {
    marks: 2,
    exemplar: 'Measure count rate with source removed (background). Subtract this from all experimental readings to give net beta count rate.',
    keyConcepts: ['measure background without source', 'subtract from all readings'],
    keywords: ['background', 'removed', 'subtract', 'count rate', 'net'],
    feedbackHit: 'Background measured without source; subtracted from all readings.',
    feedbackMiss: 'Remove source → measure background → subtract from every reading.',
  },

  'q7_g': {
    marks: 4,
    exemplar: '(1) Minimise time near source → less dose.\n(2) Maximise distance → intensity decreases.\n(3) Use lead shielding → absorbs radiation.\n(4) Keep source in lead container when not in use → prevents exposure.',
    keyConcepts: ['time', 'distance', 'shielding', 'container'],
    keywords: ['time', 'distance', 'shielding', 'lead', 'dose', 'container'],
    feedbackHit: 'Four precautions with reasons.',
    feedbackMiss: '(1) Less time; (2) more distance; (3) lead shielding; (4) lead container.',
  },

  'q7_h': {
    marks: 2,
    exemplar: 'Alpha count would drop to background even without glass — alpha stopped by few cm of air. Beta penetrates more material. Alpha particles (helium nuclei, +2 charge) interact more strongly with matter than beta (electrons).',
    keyConcepts: ['alpha stopped by air', 'alpha less penetrating', 'mass and charge difference'],
    keywords: ['alpha', 'stopped', 'air', 'less penetrating', 'helium nucleus', 'charge'],
    feedbackHit: 'Alpha stopped by air; reason explained by mass/charge.',
    feedbackMiss: 'Alpha stopped by air (not glass). Alpha = helium nucleus, +2 charge → interacts more strongly than beta.',
  },

  // ─── Q8 Radioactive Decay & Half-Life ─────────────────────────
  'q8_a': {
    marks: 6,
    exemplar: '(1) Six appropriate time values (1 mark). (2) Three trials decreasing (1 mark). (3) Consistently decreasing (1 mark). (4) Averages calculated = (T1+T2+T3)/3 (2 marks). (5) Appropriate s.f. (1 mark).',
    keyConcepts: ['six time values', 'decreasing', 'average = sum/3', 'significant figures'],
    keywords: ['six times', 'trial', 'average', 'decreasing', 'significant figures'],
    feedbackHit: 'Complete table with correct averages.',
    feedbackMiss: '6 time values; 3 trials each; average = sum/3; values decrease; correct s.f.',
  },

  'q8_b': { type: 'mcq', correct: 2 },

  'q8_c': {
    marks: 3,
    exemplar: 'From krypton-85 decay graph: at 50% → first half-life ≈10.8 years; at 25% → ≈10.8; at 12.5% → ≈10.8. Average ≈ 10.8 years. Award 1 mark per valid reading.',
    keyConcepts: ['read half-life at 50%', 'three readings', 'average'],
    keywords: ['50%', '25%', '12.5%', 'graph', 'half-life', 'krypton-85', '10.8 years'],
    feedbackHit: 'Three readings and average correct.',
    feedbackMiss: 'Read time at 50%, 25%, 12.5% remaining. Average the three intervals.',
  },

  'q8_d': {
    marks: 2,
    exemplar: '800 000 → 400 000 → 200 000 → 100 000 → 50 000 = 4 half-lives. Total time = 4 × 12 days = 48 days.',
    keyConcepts: ['4 half-lives', 'total = 4 × 12 = 48 days'],
    keywords: ['4', 'half-lives', '48', 'days', '800000', '50000'],
    feedbackHit: 'Correct — 4 half-lives = 48 days.',
    feedbackMiss: 'Halve: 800 000 → 400 000 → 200 000 → 100 000 → 50 000 = 4 steps × 12 days = 48 days.',
  },

  // ─── Q9 Power Stations & Electricity Transmission ─────────────
  'q9_a': {
    marks: 2,
    exemplar: 'Any two of: air/CO₂/CO pollution; noise from turbines and gas deliveries; pipeline explosion risk; visual impact; heavy vehicle traffic.',
    keyConcepts: ['pollution', 'noise', 'visual impact', 'traffic'],
    keywords: ['pollution', 'noise', 'traffic', 'visual', 'health', 'explosion'],
    feedbackHit: 'Two valid reasons.',
    feedbackMiss: 'Consider: emissions, noise, vehicle traffic, visual impact, safety risks.',
  },

  'q9_b': {
    marks: 1,
    exemplar: 'Water produces steam to drive turbines, and to cool/condense steam back to water.',
    keyConcepts: ['steam for turbines', 'cooling'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser'],
    feedbackHit: 'Correct use stated.',
    feedbackMiss: 'Steam for turbines; cool/condense steam.',
  },

  'q9_c': {
    marks: 1,
    exemplar: 'Secondary current halves (P = IV: voltage doubles → current halves).',
    keyConcepts: ['current halves when voltage doubles'],
    keywords: ['halves', 'current', 'voltage', 'doubles', 'P=IV'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'P = IV. V doubles → I halves.',
  },

  'q9_d': {
    marks: 3,
    exemplar: '(1) P_loss = I²R. (2) Higher V → lower I (P=IV). (3) Lower I → much less heat loss.',
    keyConcepts: ['I²R loss', 'higher V lower I', 'lower I less heat'],
    keywords: ['I²R', 'voltage', 'current', 'heat loss', 'reduces'],
    feedbackHit: 'I²R, effect on current, reduced loss all correct.',
    feedbackMiss: 'Loss = I²R. Higher V → lower I. Lower I → much less heat loss (I²R decreases).',
  },

  'q9_e': {
    marks: 6,
    exemplar: 'Water vapour (H₂O): greenhouse gas; absorbs/re-emits infrared; contributes to global warming/enhanced greenhouse effect.\nCarbon dioxide (CO₂): major greenhouse gas; same mechanism; long residence time; primary climate change driver from fossil fuels.\nNitrogen oxides (NOₓ): contribute to smog and acid rain; react with water/oxygen in atmosphere to form nitric acid; damage ecosystems, irritate respiratory system.\nAward 2 marks per gas.',
    keyConcepts: ['H2O and CO2 are greenhouse gases', 'NOx causes acid rain and smog'],
    keywords: ['greenhouse gas', 'infrared', 'global warming', 'NOx', 'acid rain', 'smog', 'nitric acid'],
    feedbackHit: 'Impacts of all three gases with mechanisms.',
    feedbackMiss: 'H₂O and CO₂ → greenhouse warming. NOₓ → smog and acid rain (reacts with water → nitric acid).',
  },

  'q9_f': {
    marks: 3,
    exemplar: '(1) Lower demand at night. (2) Electrical energy cannot be stored economically. (3) Cheaper night rates encourage consumers to shift usage, using otherwise wasted surplus.',
    keyConcepts: ['lower night demand', 'cannot store electricity', 'shift usage to prevent waste'],
    keywords: ['demand', 'lower', 'night', 'storage', 'wasted', 'cheaper', 'encourage'],
    feedbackHit: 'Lower demand, storage, incentive all addressed.',
    feedbackMiss: 'Night demand low; can\'t store electricity; cheaper rates → use surplus.',
  },

  // ─── Q10 Hydroelectric Power ───────────────────────────────────
  'q10_a': {
    marks: 1,
    exemplar: 'Any application requiring constant supply: hospitals; water treatment; data centres; airports; refrigeration; street lighting.',
    keyConcepts: ['application requiring constant electricity'],
    keywords: ['hospital', 'water treatment', 'data centre', 'airport', 'refrigeration'],
    feedbackHit: 'Valid application identified.',
    feedbackMiss: 'Applications where power cuts would be dangerous: hospitals, water treatment, data centres.',
  },

  'q10_b': {
    marks: 15,
    exemplar: 'Top-band: all five bullet points with developed reasoning:\n• Why constant supply matters: specific consequence for chosen application.\n• Advantage of hydro: renewable; consistent output (unlike solar/wind); low running cost; no direct emissions.\n• Disadvantage: limited by water flow (drought risk); ecological impact (river habitat); high construction cost; requires suitable geography.\n• Economic: high capital cost vs low running cost; payback period; savings during load shedding; potential for community ownership.\n• Social: improved safety; energy independence; reduced disruption; environmental impact on local ecosystem; community acceptance.',
    keyConcepts: ['constant supply link', 'hydro advantage: consistent renewable', 'hydro disadvantage: geography-dependent ecological impact', 'economic: capital vs running cost', 'social: safety independence ecosystem'],
    keywords: ['constant', 'advantage', 'disadvantage', 'hydro', 'renewable', 'water', 'consistent', 'ecological', 'cost', 'economic', 'social'],
    feedbackHit: 'All five criteria with balanced evaluation.',
    feedbackMiss: 'Address all five: (1) why constant; (2) advantage; (3) disadvantage; (4) economic; (5) social.',
  },

}
