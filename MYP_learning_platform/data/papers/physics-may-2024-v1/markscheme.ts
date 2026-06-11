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

  // ── Q1: Natural Gas Power Station ─────────────────────────────
  'q1a': {
    marks: 1,
    exemplar: 'Water → boiler/heat exchanger; Steam → cooling tower/condenser; Natural gas → gas supply/combustion chamber.',
    keyConcepts: ['states of matter', 'thermal power station components', 'natural gas combustion'],
    keywords: ['water', 'steam', 'natural gas', 'boiler', 'cooling tower', 'combustion'],
    feedbackHit: 'Correctly identified all three states and their locations in the natural gas power plant.',
    feedbackMiss: 'Think about where combustion of fuel occurs, where water is heated to steam, and where steam cools back to water.',
  },
  'q1b': {
    marks: 1,
    exemplar: 'The water molecules move faster (or vibrate more / have greater kinetic energy).',
    keyConcepts: ['kinetic theory', 'temperature and molecular speed'],
    keywords: ['faster', 'vibrate', 'kinetic energy', 'molecules'],
    feedbackHit: 'Correctly linked increased heat to faster molecular motion.',
    feedbackMiss: 'Temperature is a measure of average kinetic energy — more heat means faster movement.',
  },
  'q1c': {
    marks: 2,
    exemplar: 'The heat energy does not increase the speed of particles. Instead it is used to break intermolecular bonds / overcome forces of attraction between particles. The particles move further apart and become more disordered. The potential energy of particles increases.',
    keyConcepts: ['latent heat', 'phase change', 'intermolecular forces'],
    keywords: ['bonds', 'latent heat', 'potential energy', 'arrangement', 'disorder'],
    feedbackHit: 'Correctly explained latent heat and particle rearrangement during boiling.',
    feedbackMiss: 'During a phase change, temperature stays constant. Energy goes into breaking bonds, not speeding up particles.',
  },
  'q1d': {
    marks: 2,
    exemplar: 'Energy = 5.5 × 10⁷ J/kg × 1.8 × 10⁵ kg = 9.9 × 10¹² J (2 s.f.).',
    keyConcepts: ['energy calculations', 'chemical potential energy'],
    keywords: ['energy', 'calculation', '9.9e12', 'significant figures'],
    feedbackHit: 'Correct calculation with appropriate significant figures.',
    feedbackMiss: 'Multiply energy per kg (5.5 × 10⁷) by total mass (1.8 × 10⁵). Check powers of ten.',
  },
  'q1e': {
    marks: 2,
    exemplar: 'Useful power output = 36 000 MW × 0.25 = 9 000 MW.',
    keyConcepts: ['efficiency', 'power output'],
    keywords: ['efficiency', 'useful power', 'multiply', '9000', '36000'],
    feedbackHit: 'Correctly applied the efficiency formula.',
    feedbackMiss: 'Useful power = total power × (efficiency as decimal). 25% = 0.25.',
  },
  'q1f': { type: 'mcq', correct: 3 },
  'q1g': {
    marks: 3,
    exemplar: 'Burning natural gas releases CO₂ and other greenhouse gases that trap more heat in the atmosphere, increasing average temperature. Higher temperatures increase evaporation, putting more water vapour into the atmosphere. More atmospheric energy drives stronger convection currents, causing more intense storms, floods, and droughts.',
    keyConcepts: ['greenhouse effect', 'climate change', 'extreme weather', 'evaporation', 'convection'],
    keywords: ['temperature', 'evaporation', 'convection', 'storm', 'flood', 'drought', 'kinetic energy', 'greenhouse'],
    feedbackHit: 'Correctly linked greenhouse gas trapping to specific extreme weather mechanisms.',
    feedbackMiss: 'Three marking points: (1) thermal physics concept (evaporation/convection/melting), (2) how temperature rise drives it, (3) specific weather consequence.',
  },

  // ── Q2: Nuclear Fission (U-235 → La-142 + Br-93 + n) ──────────
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
    exemplar: 'The protons and neutrons are divided between the two daughter nuclei (La-142 and Br-93) and one free neutron. Protons: 57 + 35 = 92 ✓; Mass numbers: 142 + 93 + 1 = 236 = 235 + 1 ✓. The total is conserved.',
    keyConcepts: ['nuclear fission', 'conservation of nucleons', 'daughter nuclei'],
    keywords: ['divided', 'daughter nuclei', 'conservation', 'neutrons released', 'total same', 'La-142', 'Br-93'],
    feedbackHit: 'Correctly described the distribution of nucleons and conservation in fission.',
    feedbackMiss: 'In fission, nucleons are conserved — they are split between the products plus any free neutrons released.',
  },
  'q2c': {
    marks: 2,
    exemplar: 'A chain reaction is when one fission reaction causes another reaction to occur. The neutrons released by fission strike other uranium-235 nuclei, causing them to undergo fission, releasing more neutrons and triggering further reactions.',
    keyConcepts: ['chain reaction', 'nuclear fission'],
    keywords: ['one reaction', 'causes another', 'neutrons', 'trigger', 'self-sustaining'],
    feedbackHit: 'Correctly explained the self-sustaining nature of a chain reaction.',
    feedbackMiss: 'Each fission releases free neutrons. If these hit other U-235 nuclei, more fissions occur — exponential cascade.',
  },
  'q2d': {
    marks: 3,
    exemplar: 'In an uncontrolled chain reaction, the number of fission reactions increases exponentially, releasing more and more energy rapidly. This could result in a nuclear meltdown or explosion, destroying the reactor. Radioactive material would be released into the surrounding environment, causing nuclear fallout and harmful radiation exposure to living things.',
    keyConcepts: ['uncontrolled chain reaction', 'nuclear safety', 'radioactive contamination'],
    keywords: ['exponential', 'meltdown', 'explosion', 'radioactive material', 'fallout', 'harmful'],
    feedbackHit: 'Described the energy release, catastrophic outcome, and environmental/health consequences.',
    feedbackMiss: 'Three points: (1) more reactions → more energy released rapidly, (2) specific catastrophe (meltdown/explosion), (3) environmental/health consequence.',
  },
  'q2e': {
    marks: 1,
    exemplar: '50% remaining = 1 half-life. Read from the graph where 50% remains: approximately 700 million years (the U-235 half-life).',
    keyConcepts: ['half-life definition', 'reading from graph'],
    keywords: ['50%', 'half-life', '700', 'million years', 'graph'],
    feedbackHit: 'Correctly identified the half-life as the time for 50% decay.',
    feedbackMiss: 'Half-life = time for 50% to decay = 50% remaining. Find 50% on the y-axis and read across to the x-axis.',
  },
  'q2f': {
    marks: 2,
    exemplar: 'Uranium-235 has a very long half-life (~700 million years), meaning fuel rods remain radioactive for an extremely long time. The rods must be stored safely and securely for millions of years to prevent radiation exposure to humans and the environment.',
    keyConcepts: ['half-life', 'radioactive waste disposal', 'radiation hazard'],
    keywords: ['long time', 'stored safely', 'millions of years', 'radioactive', 'securely', 'health risk'],
    feedbackHit: 'Correctly linked the long decay time to the practical challenges of long-term safe storage.',
    feedbackMiss: 'Two points: (1) radiation is harmful to health/environment, (2) must be stored safely for a very long time.',
  },

  // ── Q3: Constantan Wire Resistance Investigation ───────────────
  'q3a': {
    marks: 1,
    exemplar: 'How does the length of a constantan wire affect its electrical resistance?',
    keyConcepts: ['research question', 'independent and dependent variables'],
    keywords: ['length', 'constantan wire', 'resistance', 'affect', 'relationship'],
    feedbackHit: 'Clear research question identifying both IV (length) and DV (resistance).',
    feedbackMiss: 'A good research question identifies what is being changed (IV = length) and what is measured (DV = resistance).',
  },
  'q3b': {
    marks: 3,
    exemplar: 'If the length of the constantan wire increases, then the electrical resistance will increase, because electrical current is a flow of electrons and a longer wire means electrons must travel further, passing through more positive ions and experiencing more collisions. Resistance is directly proportional to length (R = ρL/A).',
    keyConcepts: ['hypothesis', 'electron flow', 'resistance and length', 'scientific reasoning'],
    keywords: ['length increases', 'resistance increases', 'electrons', 'collisions', 'proportional', 'constantan'],
    feedbackHit: 'Hypothesis correctly links IV to DV with valid scientific explanation.',
    feedbackMiss: 'Three marks: (1) If-Then linking length to resistance, (2) scientific explanation (electrons travel further/more collisions), (3) R ∝ L.',
  },
  'q3c': { type: 'mcq', correct: 0 },
  'q3d': {
    marks: 2,
    exemplar: 'The independent variable is the length of the wire. To test only the effect of length on resistance, the material and cross-sectional area must remain constant (controlled variables). Selecting constantan wires of different lengths at the same cross-sectional area is the only way to achieve this with 5 data points.',
    keyConcepts: ['controlled variables', 'fair test', 'investigation design'],
    keywords: ['length', 'only variable', 'material constant', 'cross-sectional area', 'controlled', 'fair test'],
    feedbackHit: 'Correctly justified wire selection by identifying all controlled variables.',
    feedbackMiss: 'For a fair test, only one variable should change. Material AND cross-sectional area must both be constant.',
  },
  'q3e': { type: 'mcq', correct: 0 },
  'q3f': {
    marks: 2,
    exemplar: 'R = V / I = 1.80 / 0.30 = 6.0 Ω.',
    keyConcepts: ["Ohm's law", 'resistance calculation'],
    keywords: ['R = V/I', '6.0', 'ohm', '1.80', '0.30'],
    feedbackHit: "Correctly applied Ohm's Law: R = V/I = 1.80/0.30 = 6.0 Ω.",
    feedbackMiss: 'Use R = V ÷ I. Substitute V = 1.80 V and I = 0.30 A.',
  },
  'q3g': {
    marks: 2,
    exemplar: 'Data point plotted at (100, 6.0) on the graph. Line of best fit is a straight line through or near the origin that best models all data points.',
    keyConcepts: ['plotting data', 'line of best fit', 'proportional relationship'],
    keywords: ['plot', '100', '6.0', 'line of best fit', 'straight line', 'origin'],
    feedbackHit: 'Correct data point at (100, 6.0) plotted and appropriate best fit line drawn.',
    feedbackMiss: 'Plot the resistance at 100 cm from part (f). Best fit line for proportional relationship passes through or near origin.',
  },
  'q3h': {
    marks: 3,
    exemplar: 'Source of error: The wire heats up as current flows through it, increasing its resistance. Effect: The measured resistance values will be higher than the theoretical value at room temperature, causing data points to deviate above the line of best fit. Accept other valid sources: measurement of length inaccurate; voltmeter/ammeter readings fluctuate; contact resistance at clips.',
    keyConcepts: ['sources of error', 'evaluation of data', 'resistance and temperature'],
    keywords: ['heats up', 'temperature', 'inaccurate', 'measurement', 'fluctuate', 'contact resistance'],
    feedbackHit: 'Identified a valid source of error and correctly described its effect on resistance values.',
    feedbackMiss: 'Two marks for identifying a valid source of error. One mark for correctly linking it to an effect on calculated resistance.',
  },

  // ── Q4: Ball & Magnet ─────────────────────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'The law of conservation of energy.',
    keyConcepts: ['conservation of energy'],
    keywords: ['conservation of energy', 'energy', 'law'],
    feedbackHit: 'Correctly identified the law of conservation of energy.',
    feedbackMiss: 'The sphere reaches the same height regardless of angle — energy is conserved between KE and PE forms.',
  },
  'q4b': {
    marks: 3,
    exemplar: 'Forces acting on sphere: (1) Magnetic force — horizontal, directed towards the magnet. (2) Normal force — perpendicular to track surface, upwards. (3) Weight force — vertically downwards. Electrostatic force, tension force, and upthrust do NOT act.',
    keyConcepts: ['force diagrams', 'magnetic force', 'normal force', 'weight'],
    keywords: ['magnetic force', 'normal force', 'weight', 'towards magnet', 'upward', 'downward'],
    feedbackHit: 'All three correct forces identified with correct directions.',
    feedbackMiss: 'Three forces: weight (down), normal force (up from track), magnetic force (towards magnet). No tension, upthrust, or electrostatic.',
  },
  'q4c': {
    marks: 2,
    exemplar: 'The magnetic force increases as the sphere gets closer to the ceramic magnet (the magnetic field is stronger nearer the poles). As the net force increases, by Newton\'s second law (F = ma), the acceleration also increases since the sphere\'s mass is constant.',
    keyConcepts: ['non-uniform acceleration', 'magnetic force vs distance', "Newton's second law"],
    keywords: ['magnetic force increases', 'closer', 'stronger', 'F = ma', 'acceleration increases'],
    feedbackHit: 'Correctly explained the non-uniform force and its consequence for acceleration.',
    feedbackMiss: 'Two points: (1) magnetic force increases as sphere gets closer, (2) so acceleration increases (F=ma, constant mass).',
  },
  'q4d': { type: 'mcq', correct: 0 },
  'q4e': {
    marks: 1,
    exemplar: 'When the incoming sphere collides with the magnet, magnetic potential energy stored in the system is released and converted to kinetic energy of the exiting sphere, giving it greater kinetic energy than the incoming sphere had.',
    keyConcepts: ['magnetic potential energy', 'energy transfer'],
    keywords: ['magnetic energy', 'released', 'kinetic energy', 'energy stored'],
    feedbackHit: 'Correctly identified magnetic energy release as the source of extra kinetic energy.',
    feedbackMiss: 'The magnet stores potential energy. Collision releases this stored energy as KE of the exiting sphere.',
  },
  'q4f': {
    marks: 11,
    exemplar: 'IV: initial height h₁; DV: maximum height h₂ of exiting sphere; CV: mass of spheres or angle of track.\n\nHypothesis: As h₁ increases, h₂ will increase because greater h₁ gives more GPE (mgh₁), more energy is transferred through the magnetic system, which converts to greater KE and greater h₂.\n\nMethod: Release sphere from h₁ = 5 cm, measure h₂ with ruler; repeat for 10, 15, 20, 25 cm; repeat 3 times and calculate mean; use same sphere and track setup throughout.\n\nSafety: Secure tracks to prevent movement; prevent spheres rolling off bench; wear eye protection.',
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

  // ── Q5: Motor Effect (rod travels 15 cm) ─────────────────────
  'q5a': {
    marks: 1,
    exemplar: 'Time at 10 A ≈ 2.24 s (accept 2.20–2.30 s, consistent with trend between 9 A at 2.43 s and 11 A at 2.08 s).',
    keyConcepts: ['reading from animation', 'interpolation'],
    keywords: ['2.24', '2.20', '2.30', 's', '10 A'],
    feedbackHit: 'Correctly read/interpolated the time from the animation for 10 A.',
    feedbackMiss: 'The time at 10 A lies between 9 A (2.43 s) and 11 A (2.08 s). Interpolate or read from the animation.',
  },
  'q5b': {
    marks: 3,
    exemplar: 'Using s = ½at²: 0.15 = ½ × a × (2.00)² → 0.15 = ½ × a × 4.00 → a = (2 × 0.15) / 4.00 = 0.30 / 4.00 = 0.075 m s⁻².',
    keyConcepts: ['SUVAT equation', 'uniform acceleration', 'kinematics'],
    keywords: ['s = ½at²', '0.075', 'm s⁻²', 'acceleration', '0.15', '2.00'],
    feedbackHit: 'Correctly applied s = ½at² with correct substitution and answer.',
    feedbackMiss: 'Rearrange s = ½at²: a = 2s/t². Use s = 0.15 m (convert from cm) and t = 2.00 s.',
  },
  'q5c': {
    marks: 1,
    exemplar: 'Mass of the rod (in kg). Note: do NOT accept weight.',
    keyConcepts: ["Newton's second law", 'mass vs weight'],
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
    exemplar: 'At 4 A the magnetic force on the rod is zero (line crosses x-axis). The rod will not move because there is no net force to overcome friction. Frictional forces prevent motion.',
    keyConcepts: ['threshold force', 'friction', "Newton's first law"],
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

  // ── Q6: Hale Telescope (Palomar) ──────────────────────────────
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
    exemplar: '2 times (primary curved mirror → secondary plane mirror → eyepiece).',
    keyConcepts: ['reflecting telescope', 'number of reflections'],
    keywords: ['2', 'two', 'reflections'],
    feedbackHit: 'Correct number of reflections (2) identified.',
    feedbackMiss: 'Trace the ray path: primary mirror (1st reflection) → secondary mirror (2nd reflection) → eyepiece. Count 2.',
  },
  'q6d': {
    marks: 1,
    exemplar: 'Astronomers observed redshift: the light from distant galaxies is shifted to longer (red) wavelengths, indicating the galaxies are moving away from us. The further the galaxy, the greater the redshift.',
    keyConcepts: ['redshift', 'expanding universe'],
    keywords: ['galaxies moving away', 'redshift', 'wavelength', 'receding', 'expanding'],
    feedbackHit: "Correctly identified redshift as the observation showing the universe is expanding.",
    feedbackMiss: 'Hubble found that light from distant galaxies is red-shifted — longer wavelength means they are moving away.',
  },
  'q6e': {
    marks: 2,
    exemplar: 'A space telescope is above Earth\'s atmosphere. The atmosphere scatters, refracts, and absorbs light, and introduces turbulence and light pollution. In space there is no atmosphere, so these effects do not occur, producing clearer images.',
    keyConcepts: ['atmospheric interference', 'space telescope advantage'],
    keywords: ['atmosphere', 'scattering', 'refraction', 'absorption', 'light pollution', 'weather'],
    feedbackHit: 'Correctly identified atmospheric interference and the advantage of being above it.',
    feedbackMiss: 'Two marks: (1) atmosphere/air interferes with observations, (2) specific effect (scattering/refraction/light pollution/absorption).',
  },

  // ── Q7: Hubble Space Telescope ────────────────────────────────
  'q7a': {
    marks: 13,
    exemplar: 'Scientific challenges: mirror flaw discovered after launch required expensive repair mission; maintaining instruments in harsh space environment (radiation, vacuum, extreme temperature).\n\nSocial/cultural: Hubble Deep Field image changed public perception of the universe; iconic images in textbooks worldwide; confirmed dark energy and accelerating expansion.\n\nEconomic: $16 billion total cost; but significant scientific and technological return; spinoffs in optics and computing; cost comparable to other major infrastructure.\n\nConclusion: Justified personal opinion on HST\'s net impact — the mirror repair showed value of serviceable space telescopes; scientific output is extraordinary.',
    keyConcepts: ['HST scientific challenges', 'societal impact', 'economic analysis', 'evaluation'],
    keywords: ['mirror', 'repair', 'challenge', 'Deep Field', 'cultural', 'cost', 'billion', 'benefit', 'evaluate'],
    feedbackHit: 'Comprehensive discussion covering all four areas with specific evidence and justified conclusion.',
    feedbackMiss: 'This 13-mark question uses MYP D rubric bands. Cover all four bullet points: scientific challenges, social/cultural, economic, and a justified conclusion.',
  },
  'q7b': {
    marks: 6,
    exemplar: 'Benefits: HST spectrograph can detect water vapour, ozone, methane in exoplanet atmospheres without sending spacecraft; reveals atmospheric composition of nearby exoplanets.\n\nLimitations: Only works for large exoplanets on close orbits around bright, nearby stars; most exoplanets too small, too distant, or do not transit at observable angles; detecting biosignatures does not confirm life — gases can have non-biological origins.\n\nConclusion: HST spectrograph is pioneering but has narrow applicability; next-generation telescopes will have greater capability.',
    keyConcepts: ['benefits and limitations', 'biosignatures', 'exoplanet atmosphere', 'spectroscopy'],
    keywords: ['biosignatures', 'exoplanet', 'limitation', 'benefit', 'water', 'ozone', 'methane', 'transiting', 'bright star'],
    feedbackHit: 'Balanced evaluation with specific benefits and limitations drawn from the provided information.',
    feedbackMiss: 'Use the given facts: benefits (detect H₂O/ozone/CH₄), limitations (large transiting exoplanets only, very few qualify, biosignature ≠ life).',
  },
}
