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

  // ── Q1: Thermal Power Station ──────────────────────────────────
  'q1a': {
    marks: 1,
    exemplar: 'Water → boiler/heat exchanger; Steam → cooling tower/condenser; Coal → fuel hopper/furnace.',
    keyConcepts: ['states of matter', 'thermal power station components'],
    keywords: ['water', 'steam', 'coal', 'boiler', 'cooling tower'],
    feedbackHit: 'Correctly identified all three states of matter and their locations.',
    feedbackMiss: 'Think about which state of matter (solid, liquid, gas) exists at each stage of the process.',
  },
  'q1b': {
    marks: 1,
    exemplar: 'The water molecules move faster (or vibrate more / have greater kinetic energy).',
    keyConcepts: ['kinetic theory', 'temperature and molecular speed'],
    keywords: ['faster', 'vibrate', 'kinetic energy', 'molecules'],
    feedbackHit: 'Correctly linked increased heat to faster molecular motion.',
    feedbackMiss: 'Temperature is a measure of average kinetic energy of particles — so more heat means faster movement.',
  },
  'q1c': {
    marks: 2,
    exemplar: 'The heat energy does not increase the speed of particles. Instead it is used to break intermolecular bonds / overcome forces of attraction between particles. The particles move further apart and become more disordered. The potential energy of particles increases.',
    keyConcepts: ['latent heat', 'phase change', 'intermolecular forces'],
    keywords: ['bonds', 'latent heat', 'potential energy', 'arrangement', 'disorder'],
    feedbackHit: 'Correctly explained latent heat and particle rearrangement during boiling.',
    feedbackMiss: 'During a phase change (boiling), temperature stays constant. The energy goes into breaking bonds, not speeding up particles.',
  },
  'q1d': {
    marks: 2,
    exemplar: 'Energy = 2.9 × 10⁷ J/kg × 3.8 × 10⁵ kg = 1.1 × 10¹³ J (accept 11 × 10¹² J or 11 TJ).',
    keyConcepts: ['energy calculations', 'chemical potential energy'],
    keywords: ['energy', 'calculation', '1.1e13', 'significant figures'],
    feedbackHit: 'Correct calculation with appropriate significant figures.',
    feedbackMiss: 'Multiply energy per kg by total mass burned. Check your powers of ten.',
  },
  'q1e': {
    marks: 2,
    exemplar: 'Useful power output = 31 500 MW × 0.25 = 7 875 MW (accept 7 900 MW or equivalent in watts).',
    keyConcepts: ['efficiency', 'power output'],
    keywords: ['efficiency', 'useful power', 'multiply', '7875', '7900'],
    feedbackHit: 'Correctly applied the efficiency formula.',
    feedbackMiss: 'Useful power = total power × (efficiency / 100). Make sure to convert percentage to a decimal.',
  },
  'q1f': { type: 'mcq', correct: 3 },
  'q1g': {
    marks: 3,
    exemplar: 'Greenhouse gases trap more heat in the atmosphere, increasing average temperature. Higher temperatures increase evaporation, putting more water vapour into the atmosphere. More energy drives stronger convection currents, causing more intense storms, floods, and droughts. Rising temperatures also cause melting of ice caps and rising sea levels.',
    keyConcepts: ['greenhouse effect', 'climate change', 'extreme weather', 'evaporation', 'convection'],
    keywords: ['temperature', 'evaporation', 'convection', 'storm', 'flood', 'drought', 'kinetic energy'],
    feedbackHit: 'Correctly linked greenhouse gas trapping to specific extreme weather mechanisms.',
    feedbackMiss: 'Three marking points: (1) a relevant thermal physics concept (evaporation/convection/melting), (2) how increased temperature drives this process, (3) a specific weather consequence.',
  },

  // ── Q2: Nuclear Fission ────────────────────────────────────────
  'q2a': {
    marks: 2,
    exemplar: 'Protons = 92; Neutrons = 235 − 92 = 143.',
    keyConcepts: ['atomic structure', 'protons and neutrons', 'mass number'],
    keywords: ['protons', 'neutrons', '92', '143'],
    feedbackHit: 'Correct number of protons and neutrons identified.',
    feedbackMiss: 'The atomic number gives the number of protons. Neutrons = mass number − atomic number.',
  },
  'q2b': {
    marks: 2,
    exemplar: 'The protons and neutrons are divided between the two daughter nuclei (Cs-140 and Rb-94). Two free neutrons are released. The total number of protons and neutrons after the reaction is the same as before.',
    keyConcepts: ['nuclear fission', 'conservation of nucleons', 'daughter nuclei'],
    keywords: ['divided', 'daughter nuclei', 'conservation', 'neutrons released', 'total same'],
    feedbackHit: 'Correctly described the distribution of nucleons and conservation in fission.',
    feedbackMiss: 'In fission, nucleons are conserved — they are split between the products plus the free neutrons released.',
  },
  'q2c': {
    marks: 2,
    exemplar: 'A chain reaction is when one fission reaction causes another reaction to occur. The neutrons released by fission strike other uranium-235 nuclei, causing them to undergo fission, releasing more neutrons and triggering further reactions.',
    keyConcepts: ['chain reaction', 'nuclear fission'],
    keywords: ['one reaction', 'causes another', 'neutrons', 'trigger', 'self-sustaining'],
    feedbackHit: 'Correctly explained the self-sustaining nature of a chain reaction.',
    feedbackMiss: 'Each fission releases ~2 neutrons. If each hits another uranium nucleus, you get exponential growth of reactions.',
  },
  'q2d': {
    marks: 3,
    exemplar: 'In an uncontrolled chain reaction, the number of fission reactions increases exponentially, releasing more and more energy rapidly. This could result in a nuclear meltdown or explosion, destroying the reactor. Radioactive material would be released into the surrounding environment, causing nuclear fallout and harmful radiation exposure to living things.',
    keyConcepts: ['uncontrolled chain reaction', 'nuclear safety', 'radioactive contamination'],
    keywords: ['exponential', 'meltdown', 'explosion', 'radioactive material', 'fallout', 'harmful'],
    feedbackHit: 'Described the energy release, catastrophic outcome, and environmental/health consequences.',
    feedbackMiss: 'Three points: (1) more reactions → more energy released rapidly, (2) specific catastrophe (meltdown or explosion), (3) environmental/health consequence (radiation released).',
  },
  'q2e': {
    marks: 1,
    exemplar: '75% decayed means 25% remaining. Reading from the graph where 25% remains: approximately 1 400–1 600 million years.',
    keyConcepts: ['radioactive decay graph', 'reading data from a graph'],
    keywords: ['1400', '1600', 'million years', '25%', 'graph'],
    feedbackHit: 'Correctly read the graph to find the time for 75% decay.',
    feedbackMiss: '75% decayed = 25% remaining. Find where the y-axis shows 25% and read across to the x-axis.',
  },
  'q2f': {
    marks: 2,
    exemplar: 'Uranium-235 has a very long half-life (~700 million years), meaning fuel rods remain radioactive for an extremely long time. The rods must be stored safely and securely for millions of years to prevent radiation exposure to humans and the environment. Any storage facility would need to remain intact for geological timescales.',
    keyConcepts: ['half-life', 'radioactive waste disposal', 'radiation hazard'],
    keywords: ['long time', 'stored safely', 'millions of years', 'radioactive', 'securely', 'health risk'],
    feedbackHit: 'Correctly linked the long decay time to the practical challenges of long-term safe storage.',
    feedbackMiss: 'Two points: (1) radiation is harmful to health/environment, (2) needs to be stored safely for a very long time.',
  },

  // ── Q3: Wire Resistance Investigation ──────────────────────────
  'q3a': {
    marks: 1,
    exemplar: 'How does the length of a nichrome wire affect its electrical resistance?',
    keyConcepts: ['research question', 'independent and dependent variables'],
    keywords: ['length', 'wire', 'resistance', 'affect', 'relationship'],
    feedbackHit: 'Clear research question identifying both the IV (length) and DV (resistance).',
    feedbackMiss: 'A good research question identifies what is being changed (IV = length) and what is being measured (DV = resistance).',
  },
  'q3b': {
    marks: 3,
    exemplar: 'If the length of the nichrome wire increases, then the electrical resistance will increase, because electrical current is a flow of electrons and a longer wire means electrons must travel further, passing through more positive ions and experiencing more collisions. Resistance is directly proportional to length (R = ρL/A).',
    keyConcepts: ['hypothesis', 'electron flow', 'resistance and length', 'scientific reasoning'],
    keywords: ['length increases', 'resistance increases', 'electrons', 'collisions', 'proportional'],
    feedbackHit: 'Hypothesis correctly links IV to DV with valid scientific explanation.',
    feedbackMiss: 'Three marks: (1) If-Then linking length to resistance, (2) scientific explanation (electrons travel further/more collisions), (3) specific concept (R ∝ L).',
  },
  'q3c': { type: 'mcq', correct: 0 },
  'q3d': {
    marks: 2,
    exemplar: 'The independent variable is the length of the wire. To test only the effect of length on resistance, the material and cross-sectional area must remain constant (controlled variables). Selecting nichrome wires of different lengths at the same cross-sectional area is the only way to achieve this with 5 data points.',
    keyConcepts: ['controlled variables', 'fair test', 'investigation design'],
    keywords: ['length', 'only variable', 'material constant', 'cross-sectional area', 'controlled', 'fair test'],
    feedbackHit: 'Correctly justified wire selection by identifying all controlled variables.',
    feedbackMiss: 'For a fair test, only one variable should change. Material AND cross-sectional area must both be constant.',
  },
  'q3e': { type: 'mcq', correct: 0 },
  'q3f': {
    marks: 2,
    exemplar: 'R = V / I = 1.5 / 0.24 = 6.25 Ω (accept 6.3 Ω).',
    keyConcepts: ["Ohm\'s law", 'resistance calculation'],
    keywords: ['R = V/I', '6.25', '6.3', 'ohm'],
    feedbackHit: "Correctly applied Ohm\'s Law to calculate resistance.",
    feedbackMiss: 'Use R = V ÷ I. Substitute V = 1.5 V and I = 0.24 A.',
  },
  'q3g': {
    marks: 2,
    exemplar: 'Data point plotted at (100, 6.25) on the graph (accept 6.2–6.4 range). Line of best fit is a straight line through or near the origin that best models all data points, with roughly equal numbers above and below.',
    keyConcepts: ['plotting data', 'line of best fit', 'proportional relationship'],
    keywords: ['plot', '100', '6.25', 'line of best fit', 'straight line'],
    feedbackHit: 'Correct data point plotted and appropriate best fit line drawn.',
    feedbackMiss: 'Plot the resistance at 100 cm from part (f). Best fit line for proportional relationship passes through or near origin.',
  },
  'q3h': {
    marks: 3,
    exemplar: 'Source of error: The wire heats up as current flows through it, increasing its resistance. Effect: The measured resistance values will be higher than the theoretical value at room temperature, causing data points to deviate above the line of best fit and making calculated resistance inaccurate. Accept other valid sources: measurement of length inaccurate; voltmeter/ammeter readings fluctuate; contact resistance at clips; wire diameter inconsistent.',
    keyConcepts: ['sources of error', 'evaluation of data', 'resistance and temperature'],
    keywords: ['heats up', 'temperature', 'inaccurate', 'measurement', 'fluctuate', 'contact resistance'],
    feedbackHit: 'Identified a valid source of error and correctly described its effect on resistance values.',
    feedbackMiss: 'Two marks for identifying a valid source of error. One mark for correctly linking it to an effect on calculated resistance.',
  },

  // ── Q4: Ball & Magnet ──────────────────────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'The law of conservation of energy.',
    keyConcepts: ['conservation of energy'],
    keywords: ['conservation of energy', 'energy', 'law'],
    feedbackHit: 'Correctly identified the law of conservation of energy.',
    feedbackMiss: 'If the sphere reaches the same height regardless of angle, the energy transferred from potential to kinetic and back to potential must be the same.',
  },
  'q4b': {
    marks: 3,
    exemplar: 'Forces acting on sphere: (1) Magnetic force — horizontal, directed towards the magnet (to the right). (2) Normal force — vertically upwards from the track. (3) Weight force — vertically downwards. No tension, electrostatic, or upthrust force acts on the sphere.',
    keyConcepts: ['force diagrams', 'magnetic force', 'normal force', 'weight'],
    keywords: ['magnetic force', 'normal force', 'weight', 'right', 'upward', 'downward'],
    feedbackHit: 'All three correct forces identified with correct directions.',
    feedbackMiss: 'Three forces act: weight (down), normal force (up from track), and magnetic force (towards magnet = right). No tension or electrostatic.',
  },
  'q4c': {
    marks: 2,
    exemplar: 'The magnetic force increases as the sphere gets closer to the magnet (the field is stronger nearer the poles). As the net force increases, by Newton\'s second law (F = ma), the acceleration also increases since the sphere\'s mass is constant. Therefore the acceleration is not uniform.',
    keyConcepts: ['non-uniform acceleration', 'magnetic force vs distance', "Newton\'s second law"],
    keywords: ['magnetic force increases', 'closer', 'stronger', 'F = ma', 'acceleration increases'],
    feedbackHit: 'Correctly explained the non-uniform force and its consequence for acceleration.',
    feedbackMiss: 'Two points: (1) magnetic force increases as sphere gets closer (field stronger near magnet), (2) so acceleration increases (F=ma, constant mass).',
  },
  'q4d': { type: 'mcq', correct: 0 },
  'q4e': {
    marks: 1,
    exemplar: 'When the incoming sphere collides with the magnet, magnetic potential energy stored in the system is released and converted to kinetic energy of the exiting sphere, giving it greater kinetic energy than the incoming sphere had.',
    keyConcepts: ['magnetic potential energy', 'energy transfer'],
    keywords: ['magnetic energy', 'released', 'kinetic energy', 'energy stored'],
    feedbackHit: 'Correctly identified magnetic energy release as the source of extra kinetic energy.',
    feedbackMiss: 'The magnet stores potential energy. When the collision occurs, this stored energy is transferred to the exiting sphere.',
  },
  'q4f': {
    marks: 11,
    exemplar: 'IV: initial height h₁; DV: maximum height h₂ of exiting sphere; CV: mass of sphere or angle of track.\n\nHypothesis: As h₁ increases, h₂ will increase because greater h₁ gives more GPE (mgh₁), more energy is transferred to the exiting sphere, which converts to greater KE and therefore reaches a greater h₂.\n\nMethod: Release sphere from h₁ = 5 cm, measure h₂ with ruler; repeat for 10, 15, 20, 25 cm; repeat 3 times and calculate mean; use same sphere and track angle throughout.\n\nSafety: Secure tracks to prevent movement; prevent spheres rolling off bench.',
    keyConcepts: ['investigation design', 'variables', 'hypothesis', 'method', 'safety', 'reliability'],
    keywords: ['independent variable', 'dependent variable', 'controlled variable', 'hypothesis', 'repeat', 'mean', 'safety'],
    feedbackHit: 'Complete investigation plan with all required elements.',
    feedbackMiss: 'Use the marking grid: IV/DV/CV (1 mark each), hypothesis with reasoning (up to 4 marks), method with equipment and range (up to 3 marks), safety (1 mark).',
  },
  'q4g': {
    marks: 4,
    exemplar: 'Table with: column headers for h₁ /cm (IV) and h₂ /cm (DV); columns for Trial 1, Trial 2, Trial 3; Average/Mean h₂ column; 5 rows with h₁ = 5, 10, 15, 20, 25 cm.',
    keyConcepts: ['data table', 'units', 'trials', 'processed data'],
    keywords: ['initial height', 'maximum height', 'trial', 'mean', 'average', 'units', 'cm'],
    feedbackHit: 'Table has appropriate headers with units, 5 IV values, trial columns, and processed data column.',
    feedbackMiss: 'Four marks: (1) column headers with units, (2) five values of h₁, (3) at least three trial columns, (4) average/mean column.',
  },

  // ── Q5: Motor Effect ───────────────────────────────────────────
  'q5a': {
    marks: 1,
    exemplar: 'Time at 10 A ≈ 1.87 s (accept 1.85–1.90 s).',
    keyConcepts: ['reading from animation', 'interpolation'],
    keywords: ['1.87', '1.85', '1.90', 's'],
    feedbackHit: 'Correctly read the time from the animation for 10 A.',
    feedbackMiss: 'The time at 10 A fits between 9 A (2.10 s) and 11 A (1.83 s). Interpolate or read from the animation.',
  },
  'q5b': {
    marks: 3,
    exemplar: 'Using s = ½at²: 0.18 = ½ × a × (1.70)² → a = (2 × 0.18) / (1.70²) = 0.36 / 2.89 = 0.11 m s⁻² (accept 11 cm s⁻²).',
    keyConcepts: ['SUVAT equation', 'uniform acceleration', 'kinematics'],
    keywords: ['s = ½at²', '0.11', 'm s⁻²', 'acceleration'],
    feedbackHit: 'Correctly applied s = ½at² with correct substitution and answer.',
    feedbackMiss: 'Rearrange s = ½at²: a = 2s/t². Use s = 0.18 m (convert from cm) and t = 1.70 s.',
  },
  'q5c': {
    marks: 1,
    exemplar: 'Mass of the rod (in kg). Note: do NOT accept weight.',
    keyConcepts: ["Newton\'s second law", 'mass vs weight'],
    keywords: ['mass', 'kg'],
    feedbackHit: 'Correctly identified mass (not weight) as the required quantity.',
    feedbackMiss: 'F = ma, so to find F you need mass m (in kg). Weight is already a force.',
  },
  'q5d': { type: 'mcq', correct: 3 },
  'q5e': {
    marks: 2,
    exemplar: 'The line of best fit does not pass through the origin — it intersects the x-axis at approximately 4 A. This means that when current doubles (e.g. from 4 A to 8 A), force does not double. Therefore F is not proportional to I, contradicting the hypothesis.',
    keyConcepts: ['graph analysis', 'proportional relationships', 'evaluating hypothesis'],
    keywords: ['not through origin', 'x-intercept', 'not proportional', 'does not double', '4 A'],
    feedbackHit: 'Correctly identified non-proportionality from the graph with specific evidence.',
    feedbackMiss: 'Two marks: (1) line of best fit does not pass through origin / x-intercept at ~4A, (2) therefore doubling current does not double force.',
  },
  'q5f': {
    marks: 2,
    exemplar: 'At 4 A the magnetic force on the rod is zero (line crosses x-axis). The rod will not move because there is no net force (or force is insufficient to overcome friction). Frictional forces prevent motion.',
    keyConcepts: ['threshold force', 'friction', "Newton\'s first law"],
    keywords: ['not move', 'zero force', 'friction', 'not strong enough', '4 A'],
    feedbackHit: 'Correctly predicted no motion and justified with zero/insufficient net force.',
    feedbackMiss: 'At 4 A the net magnetic force is zero. No net force = no acceleration = no movement.',
  },
  'q5g': {
    marks: 1,
    exemplar: 'Frictional force ≈ 2.6–2.8 mN (magnitude of y-intercept of extended best fit line).',
    keyConcepts: ['graph reading', 'friction', 'y-intercept'],
    keywords: ['2.6', '2.7', '2.8', 'mN', 'y-intercept'],
    feedbackHit: 'Correctly read frictional force from y-intercept of the graph.',
    feedbackMiss: 'Extend the best fit line to the y-axis. The magnitude of the intercept gives the frictional force.',
  },

  // ── Q6: Telescopes ─────────────────────────────────────────────
  'q6a': {
    marks: 2,
    exemplar: 'White light is made up of different wavelengths (or frequencies). Different wavelengths have different refractive indices in glass, so they are refracted by different amounts. This causes the colours to separate (dispersion / chromatic aberration).',
    keyConcepts: ['dispersion', 'refractive index', 'white light'],
    keywords: ['different wavelengths', 'refractive index', 'refract different', 'dispersion', 'separate'],
    feedbackHit: 'Correctly explained chromatic aberration in terms of different wavelengths and refractive indices.',
    feedbackMiss: 'Two points: (1) white light = different wavelengths/frequencies, (2) different wavelengths have different refractive indices.',
  },
  'q6b': { type: 'mcq', correct: 0 },
  'q6c': {
    marks: 1,
    exemplar: '3 times (primary mirror → secondary mirror → eyepiece flat mirror in the Hooker design).',
    keyConcepts: ['reflecting telescope', 'number of reflections'],
    keywords: ['3', 'three'],
    feedbackHit: 'Correct number of reflections identified.',
    feedbackMiss: 'Trace the ray path through the telescope diagram and count each reflection off a mirror surface.',
  },
  'q6d': {
    marks: 1,
    exemplar: 'Hubble observed that galaxies are moving away from us / redshift. The wavelength of light from distant galaxies is shifted towards longer (red) wavelengths, indicating they are receding.',
    keyConcepts: ['redshift', 'expanding universe', 'Hubble observation'],
    keywords: ['galaxies moving away', 'redshift', 'wavelength', 'receding', 'expanding'],
    feedbackHit: "Correctly identified redshift or galaxies moving away as Hubble\'s key observation.",
    feedbackMiss: 'Hubble found that light from distant galaxies is red-shifted — longer wavelength means they are moving away.',
  },
  'q6e': {
    marks: 2,
    exemplar: 'A space telescope is above Earth\'s atmosphere. The atmosphere interferes with observations by scattering, refracting, absorbing certain wavelengths, light pollution, and weather distortion. In space there is no atmosphere so these effects do not occur, producing clearer images.',
    keyConcepts: ['atmospheric interference', 'space telescope advantage'],
    keywords: ['atmosphere', 'scattering', 'refraction', 'absorption', 'light pollution', 'weather'],
    feedbackHit: 'Correctly identified atmospheric interference and the advantage of being above it.',
    feedbackMiss: 'Two marks: (1) atmosphere/air interferes with observations, (2) specific effect (scattering/refraction/light pollution/weather/absorption).',
  },

  // ── Q7: JWST ───────────────────────────────────────────────────
  'q7a': {
    marks: 13,
    exemplar: 'Scientific challenges: JWST at L2 (1.5 million km) — cannot be repaired; 18 hexagonal mirror segments must align precisely; extreme temperature variations; deployment requires hundreds of mechanical steps with no margin for error.\n\nSocial/cultural: Eagle Nebula image became iconic; JWST images inspire public engagement; potential detection of life on exoplanets could transform human worldview.\n\nEconomic: $10 billion cost; but less than annual military spending; technological spin-offs; long-term scientific value.\n\nConclusion: Justified personal opinion on JWST\'s net impact.',
    keyConcepts: ['JWST scientific challenges', 'societal impact', 'economic analysis', 'evaluation'],
    keywords: ['L2', 'mirror', 'challenge', 'images', 'cultural', 'cost', 'billion', 'benefit', 'evaluate'],
    feedbackHit: 'Comprehensive discussion covering all four areas with specific evidence and justified conclusion.',
    feedbackMiss: 'This 13-mark question uses MYP D rubric bands. Cover all four bullet points: scientific challenges, social/cultural, economic, and a justified conclusion.',
  },
  'q7b': {
    marks: 6,
    exemplar: 'Benefits: detects biosignature gases (water, O₂, ozone, CH₄, CO₂) on exoplanets without sending spacecraft; can detect multiple substances simultaneously; answers fundamental question about life in universe.\n\nLimitations: only works for white dwarf host stars — only 34 known within 40 ly; nearest >8 ly away; white dwarfs are harsh environments unlikely to support life; detecting biosignatures ≠ confirming life.',
    keyConcepts: ['benefits and limitations', 'biosignatures', 'white dwarf', 'exoplanets'],
    keywords: ['biosignatures', 'exoplanet', 'white dwarf', 'limitation', 'benefit', 'water', 'oxygen', '34 stars'],
    feedbackHit: 'Balanced evaluation with specific benefits and limitations drawn from the provided information.',
    feedbackMiss: 'Use the given facts: benefits (detect water/O₂/ozone/CH₄/CO₂), limitations (white dwarf only, 34 stars within 40 ly, nearest >8 ly).',
  },
}
