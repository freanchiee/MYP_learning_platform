import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}
export type MCQEntry = { type: 'mcq'; correct: number }
export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {

  // ── Q1: Kinetic Theory & Brownian Motion ───────────────────
  'q1a': {
    marks: 1,
    exemplar: 'Smoke particles (larger, visible) correctly labelled. Air molecules (smaller, invisible) correctly labelled. All correct for 1 mark.',
    keyConcepts: ['smoke particles are visible under the microscope', 'air molecules are too small to see but cause the movement'],
    keywords: ['smoke particle', 'air molecule', 'visible', 'invisible', 'larger', 'smaller'],
    feedbackHit: 'Correctly labelled the visible smoke particles and the invisible air molecules.',
    feedbackMiss: 'Smoke particles are large enough to be seen under a microscope. Air molecules are far too small to see, but their collisions push the smoke particles around.',
  },

  'q1b': {
    marks: 1,
    exemplar: 'Higher temperature correctly identified (diagram showing faster/more forceful collisions). All correct for 1 mark.',
    keyConcepts: ['higher temperature → greater kinetic energy → faster particles → more forceful collisions'],
    keywords: ['higher temperature', 'faster particles', 'greater kinetic energy', 'more forceful collisions'],
    feedbackHit: 'Correctly identified the higher temperature situation.',
    feedbackMiss: 'At higher temperatures, gas particles move faster (have more kinetic energy). They collide with the walls more frequently and with greater force.',
  },

  'q1c': {
    marks: 3,
    exemplar: 'The particles have greater (kinetic) energy / particles move faster [1]. The number of collisions per second increases / particles collide with greater force [1]. (Therefore) greater pressure results [1].',
    keyConcepts: ['heating → greater kinetic energy → faster particles', 'more/harder collisions with the tyre walls', 'pressure = force/area → greater collision force → greater pressure'],
    keywords: ['kinetic energy', 'faster', 'collisions', 'frequency', 'force', 'pressure', 'increases'],
    feedbackHit: 'Correctly explained increased kinetic energy, more/harder collisions, and the resulting pressure increase.',
    feedbackMiss: 'Three steps: (1) particles gain kinetic energy and move faster, (2) they hit the walls more often and harder, (3) greater force on the walls per unit area = greater pressure.',
  },

  'q1d': {
    marks: 2,
    exemplar: 'Air molecules are moving (even though they are too small to be seen) [1]. They collide with (the larger) smoke particles (that can be seen) [1]. The random, unequal collisions from all sides cause the smoke particles to move randomly (Brownian motion).',
    keyConcepts: ['air molecules are in constant random motion', 'air molecules collide with smoke particles', 'random unequal collisions → random motion of smoke particle'],
    keywords: ['air molecules', 'moving', 'too small to see', 'collide', 'smoke particles', 'random'],
    feedbackHit: 'Explained that invisible air molecules collide with the visible smoke particles.',
    feedbackMiss: 'Two key ideas: (1) air molecules are constantly moving (even though invisible), (2) they collide with the larger smoke particles from random directions, causing the particles to move randomly.',
  },

  // ── Q2: Energy Transformations & E = mc² ───────────────────
  'q2a': {
    marks: 1,
    exemplar: 'E → joule; m → kilogram; c → metre per second. All three correct for 1 mark.',
    keyConcepts: ['SI unit of energy = joule (J)', 'SI unit of mass = kilogram (kg)', 'SI unit of speed = metre per second (m s⁻¹)'],
    keywords: ['joule', 'kilogram', 'metre per second', 'SI unit', 'E', 'm', 'c'],
    feedbackHit: 'Correctly identified all three SI units.',
    feedbackMiss: 'E = mc²: E is energy (joules), m is mass (kilograms), c is speed of light (metres per second).',
  },

  'q2b': {
    marks: 2,
    exemplar: 'Correct energy form selected: heat (thermal) energy lost to friction [1]. Correct value: 1000 − 900 − 15 = 85 J [1]. (Total input = useful kinetic + sound + the remaining energy transferred to heat.)',
    keyConcepts: ['Sankey diagram: arrow widths represent energy values', 'conservation of energy: total input = sum of all outputs', 'remaining energy is transferred to heat by friction'],
    keywords: ['heat', 'thermal energy', 'friction', '85 J', 'conservation of energy', 'Sankey diagram'],
    feedbackHit: 'Correctly identified the heat (friction) energy and calculated the missing value.',
    feedbackMiss: 'Total input = 1000 J. Outputs: kinetic (900 J) + sound (15 J) + heat. The missing value = 1000 − 900 − 15 = 85 J (lost as heat to friction).',
  },

  'q2c': {
    marks: 3,
    exemplar: 'KE = ½mv² seen or implied [1]. Correct substitution: 900 = ½ × 40 × v² [1]. Correct final answer: v = √(900/20) = √45 = 6.708... ≈ **6.7 m s⁻¹** (to 2 s.f.) [1]. Award 3 marks for the correct final answer alone.',
    keyConcepts: ['KE = ½mv²', 'rearrange: v = √(2KE/m)', 'round to 2 significant figures'],
    keywords: ['KE = ½mv²', '6.7 m/s', '40 kg', '900 J', 'significant figures', 'velocity', '45'],
    feedbackHit: 'Correctly applied KE = ½mv², rearranged, and gave the answer to 2 s.f.',
    feedbackMiss: 'KE = ½mv². Rearrange: v² = 2KE/m = 2 × 900 / 40 = 45. v = √45 ≈ 6.7 m s⁻¹ (to 2 s.f.).',
  },

  'q2d': {
    marks: 2,
    exemplar: 'Substitution into E = mc² with combined mass (both particles) seen or implied [1]. E = (2 × 1.88 × 10⁻²⁸) × (3.0 × 10⁸)² = 3.76 × 10⁻²⁸ × 9.0 × 10¹⁶ = 3.384 × 10⁻¹¹ J ≈ 3.4 × 10⁻¹¹ J [1]. Award 1 mark for 1.7 × 10⁻¹¹ J if only one particle mass is used.',
    keyConcepts: ['E = mc²', 'total mass = mass of muon + mass of antimuon = 2 × 1.88 × 10⁻²⁸ kg', 'c² = (3.0 × 10⁸)² = 9.0 × 10¹⁶ m² s⁻²'],
    keywords: ['E = mc²', '3.4 × 10⁻¹¹ J', '3.384', 'annihilation', 'muon', 'antimuon', 'total mass', '3.76'],
    feedbackHit: 'Correctly summed both particle masses and applied E = mc².',
    feedbackMiss: 'Both particles are annihilated: total mass = 2 × 1.88 × 10⁻²⁸ kg = 3.76 × 10⁻²⁸ kg. Then E = mc² = total mass × (3.0 × 10⁸)² = 3.4 × 10⁻¹¹ J.',
  },

  // ── Q3: Red-Shift & Hubble's Law ───────────────────────────
  'q3a': {
    type: 'mcq',
    correct: 1, // B. Transverse electromagnetic (index 1)
  } as MCQEntry,

  'q3b': {
    marks: 2,
    exemplar: 'Select the correct graph (the one showing increased/stretched wavelength — Graph B, the longer, more spread-out wave) [1]. Justify: when the source moves away, the wavelength is stretched / increased (Doppler effect) [1]. Do not award the second mark if the incorrect wave is selected.',
    keyConcepts: ['Doppler effect: source moving away → wavelength increases', 'longer wavelength = red-shift', 'frequency decreases when wavelength increases'],
    keywords: ['wavelength stretched', 'source moving away', 'Doppler effect', 'longer wavelength', 'frequency decreases', 'Graph B'],
    feedbackHit: 'Selected the correct stretched-wavelength graph and justified it with wavelength stretching.',
    feedbackMiss: 'When a source moves away, the waves get "stretched" — wavelength increases, frequency decreases. Select the graph showing the longest (most stretched) wavelength (Graph B).',
  },

  'q3c': {
    marks: 2,
    exemplar: 'Wavelength emitted from the galaxy cluster has increased (wavelength is stretched by the moving source) [1]. (So) the cluster appears more red (if it is moving away) / the light is shifted to the red end of the spectrum [1].',
    keyConcepts: ['red-shift = increase in wavelength of light from a moving source', 'red light has the longest wavelength in the visible spectrum', 'moving away → stretched wavelength → cluster appears redder'],
    keywords: ['wavelength increased', 'red end', 'electromagnetic spectrum', 'moving away', 'red-shift', 'appears more red'],
    feedbackHit: 'Correctly explained the wavelength increase and the shift to the red end of the spectrum.',
    feedbackMiss: 'Two points: (1) the wavelength of light from distant galaxy clusters has increased (stretched), (2) since red light has the longest visible wavelength, the cluster appears more red than it actually is.',
  },

  'q3d': {
    marks: 2,
    exemplar: 'Line of best fit drawn: passes through (or close to) the origin [1]. Line passes approximately through the centre of the data points, with roughly equal numbers above and below [1]. Judge by eye.',
    keyConcepts: ['line of best fit: equal distribution of points above and below', 'for Hubble\'s law, the line passes through the origin'],
    keywords: ['line of best fit', 'origin', 'centre of data', 'straight line', 'LOBF'],
    feedbackHit: 'Drew a straight line of best fit through the origin with an equal distribution of points.',
    feedbackMiss: 'Draw a straight line through the origin (0,0). It should have roughly equal numbers of data points above and below the line.',
  },

  'q3e': {
    marks: 2,
    exemplar: 'As the distance (away from Earth) increases, the velocity increases [1]. There is a proportional relationship (line through the origin, straight line) [1].',
    keyConcepts: ['Hubble\'s law: velocity is proportional to distance', 'proportional relationship: straight line through the origin'],
    keywords: ['distance increases', 'velocity increases', 'proportional', 'straight line', 'origin'],
    feedbackHit: 'Correctly described the proportional relationship between distance and velocity.',
    feedbackMiss: 'Two points: (1) as distance increases, velocity increases, (2) the relationship is proportional (v ∝ d — shown by a straight line through the origin).',
  },

  'q3f': {
    marks: 2,
    exemplar: 'The graph suggests there is a point of origin / everything was once in the same place (line passes through the origin) [1]. Objects are moving away from each other / the universe is expanding [1].',
    keyConcepts: ['origin of graph → all galaxies once in the same location → Big Bang', 'galaxies moving apart → universe is expanding'],
    keywords: ['origin', 'same place', 'Big Bang', 'expanding universe', 'moving apart', 'initial point'],
    feedbackHit: 'Linked the origin of the graph to a common starting point and explained the expanding universe.',
    feedbackMiss: 'Two points: (1) the graph passing through the origin suggests everything started from the same point (consistent with the Big Bang), (2) galaxies are moving apart → the universe is expanding.',
  },

  'q3g': {
    marks: 1,
    exemplar: 'The estimate is based on more data / the data we have is more reliable. Accept: modern instruments provide more accurate measurements; a larger dataset gives a better line of best fit.',
    keyConcepts: ['more data → better fit → more accurate gradient → more reliable age estimate'],
    keywords: ['more data', 'more reliable', 'better estimate', 'modern data', 'accurate'],
    feedbackHit: 'Correctly explained that the improved estimate is due to more/better data.',
    feedbackMiss: 'The graph shows data from 1930 (fewer points) and today (more points). More data allows a more accurate line of best fit and gradient, giving a more reliable age estimate.',
  },

  // ── Q4: Ohm's Law & Non-Ohmic Conductors ──────────────────
  'q4a': {
    marks: 6,
    exemplar: 'Column headings "Voltage" and "Current" [1]. Units of V and A in the headers only [1]. Accept ascending or descending order of voltage [1]. All data complete [1]. 320 mA correctly converted to 0.32 A [1]. 0.42 A quoted to 2 d.p. [1].',
    keyConcepts: ['data tables: headers with quantity and unit', 'units in headers only (not beside each value)', 'ascending order of IV', 'mA → A conversion (÷ 1000)', 'consistent decimal places'],
    keywords: ['Voltage / V', 'Current / A', 'ascending order', '0.32 A', '0.320', '0.42 A', 'headers', 'units'],
    feedbackHit: 'Correct table with proper headers, units, order, unit conversion, and rounding.',
    feedbackMiss: '6 marks: headers (V & I); units in headers only; ascending order; complete data; 320 mA = 0.32 A; 0.42 A to 2 d.p.',
  },

  'q4b': {
    marks: 3,
    exemplar: 'Doubling of voltage (approximately) doubles the current / doubling voltage doubles current [1]. Calculation of the constant of proportionality (V/I ≈ 6.25 Ω) for at least two values OR calculation of the predicted current when voltage is doubled [1]. Hypothesis supported (within range of experimental precision), noting the slight anomaly at 2.5V [1]. Do not award the third mark unless the first or second is awarded.',
    keyConcepts: ['Ohm\'s law test: double V → double I (if ohmic)', 'compare I/V ratios or check products', 'slight anomaly at 2.5V (0.42 A)'],
    keywords: ['double voltage', 'double current', 'constant of proportionality', 'hypothesis supported', 'calculation', 'ohmic', '6.25 ohm'],
    feedbackHit: 'Performed calculations, identified the small anomaly, and gave a conclusion.',
    feedbackMiss: 'Check: V₁/I₁ = V₂/I₂? Or does doubling V double I? Show calculations for at least 2 pairs (V/I ≈ 6.25 Ω). Note the small 2.5V anomaly. Then conclude whether the hypothesis is supported.',
  },

  'q4c': {
    marks: 2,
    exemplar: 'Graph is not straight / the gradient is not constant [1]. (So) it is a non-ohmic conductor [1]. Do not award the second mark unless the first is awarded.',
    keyConcepts: ['ohmic conductor: straight line through the origin on an I-V graph', 'non-ohmic conductor: curved I-V graph', 'non-constant gradient = non-proportional relationship'],
    keywords: ['not straight', 'non-linear', 'gradient not constant', 'non-ohmic', 'curved', 'steeper'],
    feedbackHit: 'Correctly identified the non-linear graph and concluded non-ohmic.',
    feedbackMiss: 'Two points: (1) the graph is not a straight line (the gradient is not constant / it curves), (2) therefore component Y is non-ohmic (does not obey Ohm\'s law). Must state non-linear first.',
  },

  'q4d': {
    marks: 1,
    exemplar: 'Easier to evaluate the visual representation of the relationship presented in a graph. Accept: a graph shows more clearly whether the relationship is linear or non-linear.',
    keyConcepts: ['graphs show visual patterns more clearly than tables', 'easier to identify proportional or non-proportional relationships visually'],
    keywords: ['visual representation', 'easier', 'see relationship', 'linear', 'non-linear', 'pattern'],
    feedbackHit: 'Explained that a graph provides a clearer visual representation of the relationship.',
    feedbackMiss: 'A graph shows the relationship visually — it is easier to see immediately whether the relationship is linear (ohmic) or non-linear (non-ohmic) from a graph than from a table.',
  },

  'q4e': {
    marks: 3,
    exemplar: '(i) From the graph at V = 1.0V: read off I ≈ 0.20A → R = V/I = 1.0/0.20 = **5.0 Ω** [1]. (ii) From the graph at I = 0.40A: read off V ≈ 2.0V → R = V/I = 2.0/0.40 = **5.0 Ω** [1]. Unit (Ω or ohms) visible in at least one answer [1]. (The thermistor\'s resistance falls as it warms, so the reading at higher current is taken from the steeper part of the curve.)',
    keyConcepts: ['R = V/I (Ohm\'s law)', 'read values from the graph for the given V or I', 'resistance changes with current for non-ohmic conductors'],
    keywords: ['R = V/I', '5.0 Ω', 'graph reading', 'resistance', 'ohms', 'thermistor'],
    feedbackHit: 'Read values from the graph correctly and applied R = V/I.',
    feedbackMiss: '(i) Read the current at V = 1.0V from the graph (≈0.20A), then R = V/I = 5.0 Ω. (ii) Read the voltage at I = 0.40A (≈2.0V), then R = V/I = 5.0 Ω. Include units (Ω).',
  },

  'q4f': {
    marks: 1,
    exemplar: 'Two bulbs in series [½]; ammeter connected to measure current through the bulbs [½]; correct circuit with no additional components in series with the bulbs. Award 1 mark for all correct.',
    keyConcepts: ['series circuit: components connected end-to-end', 'ammeter in series to measure current', 'no extra components that would change the circuit'],
    keywords: ['series', 'bulbs', 'ammeter', 'circuit diagram', 'correct'],
    feedbackHit: 'Correctly drew two series bulbs with the ammeter in series.',
    feedbackMiss: 'Connect two bulbs end-to-end (in series). Place the ammeter (A) also in series with the bulbs — it must be in the main current path, not in parallel.',
  },

  // ── Q5: Resistance of a Wire ───────────────────────────────
  'q5a': {
    type: 'mcq',
    correct: 1, // B. ρ/A (index 1)
  } as MCQEntry,

  'q5b': {
    marks: 3,
    exemplar: 'Evidence of a gradient calculation: choose two points on the LOBF [1]. Answer in the range 0.043 to 0.047 Ω m⁻¹ (e.g. (0.056 − 0.020)/(1.00 − 0.20) = 0.045 Ω m⁻¹) [1]. Units: Ω m⁻¹ (accept Ω/m) [1]. Award 2 marks for the correct value alone.',
    keyConcepts: ['gradient = ΔR/Δl', 'use points on the line of best fit, far apart', 'units of gradient = Ω m⁻¹'],
    keywords: ['gradient', 'ΔR/Δl', '0.045 Ω/m', 'Ω m⁻¹', 'LOBF', 'calculation', '0.036', '0.80'],
    feedbackHit: 'Correctly calculated the gradient and gave the units as Ω m⁻¹.',
    feedbackMiss: 'Gradient = (R₂ − R₁)/(l₂ − l₁) using two points on the LOBF: (0.056 − 0.020)/(1.00 − 0.20) = 0.045 Ω m⁻¹. Units: resistance/length = Ω/m = Ω m⁻¹.',
  },

  'q5c': {
    marks: 2,
    exemplar: 'A length of zero should have a resistance of zero (R = ρl/A; if l = 0, R = 0) [1]. AND the graph does not intercept the origin (a non-zero y-intercept of about 0.011 Ω is observed) [1].',
    keyConcepts: ['at l = 0, R should = 0 (from R = ρl/A)', 'y-intercept ≠ 0 indicates a systematic error', 'systematic error = constant offset added to all measurements'],
    keywords: ['zero length', 'zero resistance', 'y-intercept', 'origin', 'systematic error', 'non-zero'],
    feedbackHit: 'Identified that zero length should give zero resistance, and that the graph does not pass through the origin.',
    feedbackMiss: 'If l = 0, then R = ρ × 0 / A = 0. So the graph should pass through the origin. It does not — the y-intercept is above zero — indicating a systematic error (an extra constant resistance in the circuit).',
  },

  'q5d': {
    marks: 3,
    exemplar: 'All values are shifted by the same amount [1]. Because the errors cancel out in the gradient calculation (the systematic offset is constant, and gradients use differences ΔR/Δl) [1]. Therefore the statement is invalid [1].',
    keyConcepts: ['systematic error = constant offset on all readings', 'gradient uses differences → constant offset cancels out', 'gradient accuracy is NOT affected by systematic error'],
    keywords: ['constant offset', 'errors cancel', 'gradient calculation', 'differences', 'invalid statement', 'accurate'],
    feedbackHit: 'Correctly explained that the constant offset cancels in gradient calculations.',
    feedbackMiss: 'Three points: (1) all values are shifted by the same amount (constant systematic error), (2) when calculating gradient = ΔR/Δl, the offset cancels (it subtracts out), (3) therefore the gradient is NOT affected — the student\'s statement is invalid.',
  },

  'q5e': {
    marks: 1,
    exemplar: 'Accept any one: zero error (in the ohmmeter); calibration error; additional resistance from other components in the circuit (connecting leads, crocodile clips, internal resistance of the meter).',
    keyConcepts: ['systematic error sources: zero error, calibration error, additional circuit resistance'],
    keywords: ['zero error', 'calibration error', 'additional resistance', 'connecting leads', 'crocodile clips'],
    feedbackHit: 'Suggested a valid source of systematic error.',
    feedbackMiss: 'Possible sources: zero error in the ohmmeter, calibration error, or extra resistance from connecting leads/clips that is always present.',
  },

  'q5f': {
    marks: 4,
    exemplar: 'If the area of the conductor increases, the resistance would decrease [1]. The relationship is inversely proportional (R ∝ 1/A) [1]. Reference to electrons (charge carriers) moving through the conductor [1]. Fewer pathways if the area is smaller / more pathways in a larger area allow electrons to flow more easily [1].',
    keyConcepts: ['R ∝ 1/A (from R = ρl/A)', 'larger area → more pathways for electrons', 'more pathways → less resistance to current flow', 'model of moving charge carriers (electrons)'],
    keywords: ['inversely proportional', 'area increases', 'resistance decreases', 'electrons', 'pathways', 'charge carriers', 'R ∝ 1/A'],
    feedbackHit: 'Full hypothesis with inverse proportion, the electron model, and the pathway explanation.',
    feedbackMiss: '4 marks: (1) area↑ → resistance↓, (2) inversely proportional, (3) mention electrons/charge carriers, (4) larger area = more pathways → easier electron flow → less resistance.',
  },

  // ── Q6: Series Circuit Investigation ──────────────────────
  'q6a': {
    marks: 3,
    exemplar: 'Two bulbs in series [1]. Ammeter connected to measure the current through the bulbs (in series with the bulbs) [1]. Correct circuit with no additional components in series with the bulbs [1]. Ignore a switch or a voltmeter added in parallel.',
    keyConcepts: ['series circuit: all components in one loop', 'ammeter in series to measure current', 'circuit must not include extra components that alter the measurement'],
    keywords: ['series', 'two bulbs', 'ammeter', 'circuit diagram', 'no extra components'],
    feedbackHit: 'Correctly drew two series bulbs with the ammeter in series and no extra series components.',
    feedbackMiss: 'Three marks: (1) two bulbs connected in series, (2) ammeter placed in series in the circuit, (3) no extra components added in series that would change the circuit behaviour.',
  },

  'q6b': {
    marks: 15,
    exemplar: `Marked on a 5-category rubric (3 marks each):

Research question (max 3):
- 1 mark: some reference to the IV or DV
- 2 marks: research question links the IV (number of bulbs) to the DV (current) clearly
- 3 marks: clear, testable question linking both variables

Hypothesis (max 3):
- 1 mark: a simple prediction that is incomplete
- 2 marks: predicts the current decreases as the number of bulbs increases
- 3 marks: predicts the current decreases as bulbs increase AND explains this is because the resistance increases

IV and DV (max 3):
- 1 mark: IV identified (number of bulbs)
- 2 marks: IV and DV both identified (current)
- 3 marks: IV, DV, and at least one justified CV (e.g. supply voltage — a higher voltage would increase the current)

Method (max 3):
- 1 mark: implies a range of bulb numbers
- 2 marks: method links both IV and DV, includes measurement of the current
- 3 marks: detailed method with how measurements are taken and recorded

Data collection (max 3):
- 1 mark: reference to data or measurements
- 2 marks: at least 5 values of the IV suggested
- 3 marks: sufficient data with repeats, reference to a table and/or graph`,
    keyConcepts: ['IV = number of bulbs in series', 'DV = current (A, measured with an ammeter)', 'CV = supply voltage (must be constant)', 'adding bulbs → more resistance → less current (I = V/R)', 'need 5+ values, 3 repeats each'],
    keywords: ['research question', 'IV', 'DV', 'control variable', 'voltage', 'hypothesis', 'resistance increases', 'current decreases', 'method', 'ammeter', 'repeats', 'sufficient data'],
    feedbackHit: 'Full investigation design with RQ, hypothesis with science, IV/DV/CV justified, method, and a sufficient-data plan.',
    feedbackMiss: 'Design must include: RQ, hypothesis (current decreases because resistance increases), IV=bulbs DV=current CV=voltage, method with how to measure, 5+ values with 3 repeats.',
  },

  // ── Q7: Renewable Energy ───────────────────────────────────
  'q7a': {
    marks: 3,
    exemplar: 'One mark per correct disadvantage matched to the correct energy source. All three correct for full marks: Tidal-stream → only generates with the tide / can disrupt marine life; Geothermal → needs geologically suitable areas / high drilling start-up costs; Biomass → large land area needed for crops / time delay while crops grow.',
    keyConcepts: ['each renewable energy source has specific disadvantages', 'tidal: only with the tide, marine disruption', 'geothermal: needs geological activity, high start-up cost', 'biomass: land use and time lag'],
    keywords: ['tidal', 'geothermal', 'biomass', 'disadvantage', 'tide', 'marine life', 'geological', 'land', 'crops'],
    feedbackHit: 'Correctly matched all three disadvantages to the right energy sources.',
    feedbackMiss: 'Match each disadvantage to its source: Tidal-stream only generates with the tide. Geothermal needs volcanic/geological regions. Biomass needs land and time to grow the fuel crops.',
  },

  'q7b': {
    marks: 2,
    exemplar: 'Correct energy forms: Chemical potential → Thermal (heat) → Kinetic → Electrical, in the correct order [1 for each component correct, or all correct for 2 marks]. Award marks independently.',
    keyConcepts: ['biomass energy flow: chemical → thermal → kinetic → electrical', 'burning chemical energy → heat → steam/turbine (kinetic) → generator (electrical)'],
    keywords: ['chemical potential', 'thermal', 'kinetic', 'electrical', 'energy chain', 'biomass'],
    feedbackHit: 'Correctly ordered: chemical potential → thermal → kinetic → electrical.',
    feedbackMiss: 'Energy crops store chemical potential energy. Burning releases thermal energy. Heat makes steam that drives a turbine (kinetic). The generator converts kinetic to electrical.',
  },

  'q7c': {
    marks: 4,
    exemplar: 'A statement of an advantage implicitly linked to a country [1]. A statement of two or more disadvantages implicitly linked to a country with an explanation for each [3]. Or see rubric.',
    keyConcepts: ['advantages must be linked to the specific country chosen', 'disadvantages must be explained (not just stated)', 'balance of evidence needed for full marks'],
    keywords: ['advantage', 'disadvantage', 'country', 'justified', 'linked', 'renewable energy', 'explanation'],
    feedbackHit: 'Gave country-specific advantages and disadvantages with explanations.',
    feedbackMiss: 'State a country. Give at least one advantage AND two disadvantages — both must be linked to that specific country with an explanation of why each applies there.',
  },

  // ── Q8: Pacific-atoll Island Energy Options ────────────────
  'q8a': {
    marks: 2,
    exemplar: 'The small modular nuclear reactor (option 3) [1]. Uranium / nuclear fuel is a finite resource (WTTE) [1].',
    keyConcepts: ['nuclear fuel (uranium) is non-renewable — finite supply', 'renewables (solar, wind) are continuously replenished'],
    keywords: ['nuclear', 'SMR', 'uranium', 'non-renewable', 'finite', 'limited supply', 'cannot be replenished'],
    feedbackHit: 'Identified the nuclear SMR as non-renewable and explained that uranium is finite.',
    feedbackMiss: 'The nuclear SMR uses uranium, which is a finite resource — it exists in limited quantities and cannot be replenished. Solar and wind are renewable because they are continuously available.',
  },

  'q8b': {
    marks: 12,
    exemplar: `Marked on a 4-category rubric:

Advantages of the chosen method over oil (max 4):
- 1 mark: one advantage stated
- 2 marks: one advantage stated with justification
- 3 marks: two advantages stated, one justified
- 4 marks: two advantages both with justification

Political implications (max 3):
- 1 mark: one political implication stated
- 2 marks: one implication with further discussion OR two stated
- 3 marks: two implications with further discussion for one

Economic implications (max 4):
- 1 mark: general economic reference
- 2 marks: economic implication with general reference to data
- 3 marks: economic implication with specific data quoted for the chosen option
- 4 marks: comparative reference to two options supported with data

Conclusion/recommendation (max 1):
- 1 mark: a concluding recommendation with justification`,
    keyConcepts: ['evaluate using data from the infographic (cost/kWh, construction cost, cable/decommission cost)', 'political: sovereignty, international agreements, public acceptance', 'economic: upfront cost, running cost, per kWh cost', 'conclusion: weigh evidence to recommend one option'],
    keywords: ['advantages', 'political', 'economic', 'data', 'recommendation', 'justification', 'atoll', 'nuclear', 'SMR', 'wind', 'solar cable'],
    feedbackHit: 'Evaluated the options with justified advantages, political and economic discussion with data, and a clear recommendation.',
    feedbackMiss: 'Cover all four: advantages (with data), political implications, economic comparison (use numbers from the infographic), and a concluding recommendation for the atoll nation.',
  },

}
