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
    keyConcepts: ['smoke particles are visible under microscope', 'air molecules are too small to see but cause the movement'],
    keywords: ['smoke particle', 'air molecule', 'visible', 'invisible', 'larger', 'smaller'],
    feedbackHit: 'Correctly labelled visible smoke particles and invisible air molecules.',
    feedbackMiss: 'Smoke particles are large enough to be seen under a microscope. Air molecules are far too small to see, but their collisions push the smoke particles around.',
  },

  'q1b': {
    marks: 1,
    exemplar: 'Higher temperature correctly identified (diagram showing faster/more forceful collisions). All correct for 1 mark.',
    keyConcepts: ['higher temperature → greater kinetic energy → faster particles → more forceful collisions'],
    keywords: ['higher temperature', 'faster particles', 'greater kinetic energy', 'more forceful collisions'],
    feedbackHit: 'Correctly identified the higher temperature situation.',
    feedbackMiss: 'At higher temperatures, gas particles move faster (have more kinetic energy). They collide with walls more frequently and with greater force.',
  },

  'q1c': {
    marks: 3,
    exemplar: 'The particles have greater (kinetic) energy / particles move faster [1]. The number of collisions per second increases / particles collide with greater force [1]. (Therefore) greater pressure results [1].',
    keyConcepts: ['heating → greater kinetic energy → faster particles', 'more/harder collisions with container walls', 'pressure = force/area → greater collision force → greater pressure'],
    keywords: ['kinetic energy', 'faster', 'collisions', 'frequency', 'force', 'pressure', 'increases'],
    feedbackHit: 'Correctly explained increased kinetic energy, more/harder collisions, and resulting pressure increase.',
    feedbackMiss: 'Three steps: (1) particles gain kinetic energy and move faster, (2) they hit the walls more often and harder, (3) greater force on the walls = greater pressure.',
  },

  'q1d': {
    marks: 2,
    exemplar: 'Air particles are moving (even though they are too small to be seen) [1]. They collide with (the larger) smoke particles (that can be seen) [1]. The random, unequal collisions from all sides cause the smoke particles to move randomly (Brownian motion).',
    keyConcepts: ['air particles are in constant random motion', 'air particles collide with smoke particles', 'random unequal collisions → random motion of smoke particle'],
    keywords: ['air particles', 'moving', 'too small to see', 'collide', 'smoke particles', 'random'],
    feedbackHit: 'Explained that invisible air particles collide with visible smoke particles.',
    feedbackMiss: 'Two key ideas: (1) air molecules are constantly moving (even though invisible), (2) they collide with the larger smoke particles from random directions, causing the smoke particles to move randomly.',
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
    exemplar: 'Correct energy form selected: Gravitational potential energy [1]. Correct value: 750 − 672 − 10 − [heat energy] = remaining value. With heat energy shown in the Sankey, the remaining unlabelled form = Gravitational potential energy = 80 J [1].',
    keyConcepts: ['Sankey diagram: arrow widths represent energy values', 'conservation of energy: total input = sum of all outputs', 'gravitational potential energy is stored as the child descends'],
    keywords: ['gravitational potential energy', '80 J', 'conservation of energy', 'Sankey diagram'],
    feedbackHit: 'Correctly identified gravitational potential energy and calculated the value.',
    feedbackMiss: 'Total input = 750 J. Outputs: kinetic (672 J) + sound (10 J) + heat. The remaining labelled form is gravitational potential energy = 750 − 672 − 10 − heat.',
  },

  'q2c': {
    marks: 3,
    exemplar: 'KE = ½mv² seen or implied [1]. Correct substitution: 672 = ½ × 28 × v² [1]. Correct final answer: v = √(672/14) = √48 = 6.928... ≈ **6.9 m s⁻¹** (to 2 s.f.) [1]. Award 3 marks for correct final answer alone.',
    keyConcepts: ['KE = ½mv²', 'rearrange: v = √(2KE/m)', 'round to 2 significant figures'],
    keywords: ['KE = ½mv²', '6.9 m/s', '28 kg', '672 J', 'significant figures', 'velocity'],
    feedbackHit: 'Correctly applied KE = ½mv², rearranged, and gave answer to 2 s.f.',
    feedbackMiss: 'KE = ½mv². Rearrange: v² = 2KE/m = 2 × 672 / 28 = 48. v = √48 ≈ 6.9 m s⁻¹ (to 2 s.f.)',
  },

  'q2d': {
    marks: 2,
    exemplar: 'Substitution into E = mc² with combined mass (both particles) seen or implied [1]. E = (2 × 9.11 × 10⁻³¹) × (3.0 × 10⁸)² = 1.6398 × 10⁻¹³ J [1]. Award 1 mark for 8.199 × 10⁻¹⁴ J if only one particle mass is used.',
    keyConcepts: ['E = mc²', 'total mass = mass of electron + mass of positron = 2 × 9.11 × 10⁻³¹ kg', 'c² = (3.0 × 10⁸)² = 9.0 × 10¹⁶ m² s⁻²'],
    keywords: ['E = mc²', '1.64 × 10⁻¹³ J', 'annihilation', 'electron', 'positron', 'total mass'],
    feedbackHit: 'Correctly summed both particle masses and applied E = mc².',
    feedbackMiss: 'Both particles are annihilated: total mass = 2 × 9.11 × 10⁻³¹ kg. Then E = mc² = total mass × (3.0 × 10⁸)².',
  },

  // ── Q3: Red-Shift & Hubble's Law ───────────────────────────
  'q3a': {
    type: 'mcq',
    correct: 2, // C. Transverse electromagnetic (index 2)
  } as MCQEntry,

  'q3b': {
    marks: 2,
    exemplar: 'Select the correct graph (the one showing increased/stretched wavelength — longer, more spread-out waves) [1]. Justify: when source moves away, wavelength is stretched / increased (Doppler effect) [1]. Do not award second mark if incorrect wave is selected.',
    keyConcepts: ['Doppler effect: source moving away → wavelength increases', 'longer wavelength = red-shift', 'frequency decreases when wavelength increases'],
    keywords: ['wavelength stretched', 'source moving away', 'Doppler effect', 'longer wavelength', 'frequency decreases'],
    feedbackHit: 'Selected the correct graph and justified with wavelength stretching.',
    feedbackMiss: 'When a source moves away, waves get "stretched" — wavelength increases, frequency decreases. Select the graph showing the largest (most stretched) wavelength.',
  },

  'q3c': {
    marks: 2,
    exemplar: 'Wavelength emitted from stars has increased (wavelength is stretched by the moving source) [1]. (So) the stars appear more red (if they are moving away) / the light is shifted to the red end of the spectrum [1].',
    keyConcepts: ['red-shift = increase in wavelength of light from a moving source', 'red light has the longest wavelength in the visible spectrum', 'moving away → stretched wavelength → star appears redder'],
    keywords: ['wavelength increased', 'red end', 'electromagnetic spectrum', 'moving away', 'red-shift', 'appears more red'],
    feedbackHit: 'Correctly explained wavelength increase and shift to the red end of the spectrum.',
    feedbackMiss: 'Two points: (1) the wavelength of light from distant stars has increased (stretched), (2) since red light has the longest visible wavelength, the star appears more red than it actually is.',
  },

  'q3d': {
    marks: 2,
    exemplar: 'Line of best fit drawn: passes through (or close to) the origin [1]. Line passes approximately through the centre of the data points, with equal numbers above and below [1]. Judge by eye.',
    keyConcepts: ['line of best fit: equal distribution of points above and below', 'for Hubble\'s law, line passes through origin'],
    keywords: ['line of best fit', 'origin', 'centre of data', 'straight line', 'LOBF'],
    feedbackHit: 'Drew a straight line of best fit through the origin with equal distribution.',
    feedbackMiss: 'Draw a straight line through the origin (0,0). It should have roughly equal numbers of data points above and below the line.',
  },

  'q3e': {
    marks: 2,
    exemplar: 'As the distance (away from Earth) increases, the velocity increases [1]. There is a proportional relationship (line through origin, straight line) [1].',
    keyConcepts: ['Hubble\'s law: velocity is proportional to distance', 'proportional relationship: straight line through origin'],
    keywords: ['distance increases', 'velocity increases', 'proportional', 'straight line', 'origin'],
    feedbackHit: 'Correctly described the proportional relationship between distance and velocity.',
    feedbackMiss: 'Two points: (1) as distance increases, velocity increases, (2) the relationship is proportional (v ∝ d — shown by a straight line through the origin).',
  },

  'q3f': {
    marks: 2,
    exemplar: 'The graph suggests that there is a point of origin / everything was in the same place before (line passes through origin) [1]. Objects are moving away from each other / the universe is expanding [1].',
    keyConcepts: ['origin of graph → all galaxies once in same location → Big Bang', 'galaxies moving apart → universe is expanding'],
    keywords: ['origin', 'same place', 'Big Bang', 'expanding universe', 'moving apart', 'initial point'],
    feedbackHit: 'Linked the origin of the graph to a common starting point and explained expanding universe.',
    feedbackMiss: 'Two points: (1) the graph passing through the origin suggests everything started from the same point (consistent with Big Bang), (2) galaxies are moving apart → universe is expanding.',
  },

  'q3g': {
    marks: 1,
    exemplar: 'The estimate is based on more data / the data we have is more reliable. Accept: modern instruments provide more accurate measurements; larger dataset gives a better line of best fit.',
    keyConcepts: ['more data → better fit → more accurate gradient → more reliable age estimate'],
    keywords: ['more data', 'more reliable', 'better estimate', 'modern data', 'accurate'],
    feedbackHit: 'Correctly explained that the improved estimate is due to more/better data.',
    feedbackMiss: 'The graph shows data from 1930 (fewer points) and today (more points). More data allows a more accurate line of best fit and gradient, giving a more reliable age estimate.',
  },

  // ── Q4: Ohm's Law & Non-Ohmic Conductors ──────────────────
  'q4a': {
    marks: 6,
    exemplar: 'Column headings "Voltage" and "Current" [1]. Units of V and A in headers only [1]. Accept ascending or descending order of voltage [1]. All data complete [1]. 601 mA correctly converted to 0.60(1) A [1]. 0.41 A quoted to 2 d.p. [1].',
    keyConcepts: ['data tables: headers with quantity and unit', 'units in headers only (not beside each value)', 'ascending order of IV', 'mA → A conversion (÷ 1000)', 'consistent decimal places'],
    keywords: ['Voltage / V', 'Current / A', 'ascending order', '0.601 A', '0.41 A', 'headers', 'units'],
    feedbackHit: 'Correct table with proper headers, units, order, unit conversion, and rounding.',
    feedbackMiss: '6 marks: headers (V & I); units in headers only; ascending order; complete data; 601 mA = 0.601 A; 0.41 A to 2 d.p.',
  },

  'q4b': {
    marks: 3,
    exemplar: 'Doubling of voltage (approximately) doubles current / doubling voltage does not exactly double current [1]. Calculation of constant of proportionality for at least two values OR calculation of predicted current when voltage doubled [1]. Hypothesis supported (within range of experimental precision) OR rejected with correct reference to calculation [1]. Do not award third mark unless first or second is awarded.',
    keyConcepts: ['Ohm\'s law test: double V → double I (if ohmic)', 'compare I/V ratios or check products', 'anomalous 2.0V data point'],
    keywords: ['double voltage', 'double current', 'constant of proportionality', 'hypothesis supported', 'calculation', 'ohmic'],
    feedbackHit: 'Performed calculations, identified the anomaly, and gave a conclusion.',
    feedbackMiss: 'Check: V₁/I₁ = V₂/I₂? Or does doubling V double I? Show calculations for at least 2 pairs. Note the 2.0V anomaly. Then conclude whether hypothesis is supported.',
  },

  'q4c': {
    marks: 2,
    exemplar: 'Graph is not straight / gradient is not constant [1]. (So) it is a non-ohmic conductor [1]. Do not award second mark unless first is awarded.',
    keyConcepts: ['ohmic conductor: straight line through origin on I-V graph', 'non-ohmic conductor: curved I-V graph', 'non-constant gradient = non-proportional relationship'],
    keywords: ['not straight', 'non-linear', 'gradient not constant', 'non-ohmic', 'curved'],
    feedbackHit: 'Correctly identified non-linear graph and concluded non-ohmic.',
    feedbackMiss: 'Two points: (1) the graph is not a straight line (gradient is not constant), (2) therefore component Y is non-ohmic (does not obey Ohm\'s law). Must state non-linear first.',
  },

  'q4d': {
    marks: 1,
    exemplar: 'Easier to evaluate the visual representation of the relationship presented in a graph. Accept: a graph shows more clearly whether the relationship is linear or non-linear.',
    keyConcepts: ['graphs show visual patterns more clearly than tables', 'easier to identify proportional or non-proportional relationships visually'],
    keywords: ['visual representation', 'easier', 'see relationship', 'linear', 'non-linear', 'pattern'],
    feedbackHit: 'Explained that a graph provides a clearer visual representation of the relationship.',
    feedbackMiss: 'A graph shows the relationship visually — it is easier to see immediately whether the relationship is linear (Ohmic) or non-linear (non-Ohmic) from a graph than from a table.',
  },

  'q4e': {
    marks: 3,
    exemplar: '(i) From graph at V = 1.0V: read off I ≈ 0.20A → R = V/I = 1.0/0.20 = **5.0 Ω** [1]. (ii) From graph at I = 0.40A: read off V ≈ 6.0V → R = V/I = 6.0/0.40 = **15 Ω** [1]. Unit (Ω or ohms) visible in at least one answer [1].',
    keyConcepts: ['R = V/I (Ohm\'s law)', 'read values from graph for given V or I', 'resistance changes with current for non-ohmic conductors'],
    keywords: ['R = V/I', '5.0 Ω', '15 Ω', 'graph reading', 'resistance', 'ohms'],
    feedbackHit: 'Read values from graph correctly and applied R = V/I.',
    feedbackMiss: '(i) Read current at V = 1.0V from graph, then R = V/I. (ii) Read voltage at I = 0.40A from graph, then R = V/I. Include units (Ω).',
  },

  'q4f': {
    marks: 1,
    exemplar: 'Two bulbs in series [½]; ammeter connected to measure current through bulbs [½]; correct circuit with no additional components in series with the bulbs. Award 1 mark for all correct.',
    keyConcepts: ['series circuit: components connected end-to-end', 'ammeter in series to measure current', 'no extra components that would change the circuit'],
    keywords: ['series', 'bulbs', 'ammeter', 'circuit diagram', 'correct'],
    feedbackHit: 'Correctly drew two series bulbs with ammeter in series.',
    feedbackMiss: 'Connect two bulbs end-to-end (in series). Place the ammeter (A) also in series with the bulbs — it must be in the main current path, not in parallel.',
  },

  // ── Q5: Resistance of a Wire ───────────────────────────────
  'q5a': {
    type: 'mcq',
    correct: 1, // B. ρ/A (index 1)
  } as MCQEntry,

  'q5b': {
    marks: 3,
    exemplar: 'Evidence of gradient calculation: choose two points on LOBF [1]. Answer in range 0.043 to 0.047 Ω m⁻¹ [1]. Units: Ω m⁻¹ (accept Ω/m; do not accept caret notation) [1]. Award 2 marks for correct value alone.',
    keyConcepts: ['gradient = ΔR/Δl', 'use points on the line of best fit, far apart', 'units of gradient = Ω m⁻¹'],
    keywords: ['gradient', 'ΔR/Δl', '0.045 Ω/m', 'Ω m⁻¹', 'LOBF', 'calculation'],
    feedbackHit: 'Correctly calculated gradient and gave units as Ω m⁻¹.',
    feedbackMiss: 'Gradient = (R₂ − R₁)/(l₂ − l₁) using two points on the LOBF. Units: resistance/length = Ω/m = Ω m⁻¹.',
  },

  'q5c': {
    marks: 2,
    exemplar: 'Length of zero should have a resistance of zero (R = ρl/A; if l = 0, R = 0) [1]. AND graph does not intercept the origin (non-zero y-intercept observed) [1].',
    keyConcepts: ['at l = 0, R should = 0 (from R = ρl/A)', 'y-intercept ≠ 0 indicates systematic error', 'systematic error = constant offset added to all measurements'],
    keywords: ['zero length', 'zero resistance', 'y-intercept', 'origin', 'systematic error', 'non-zero'],
    feedbackHit: 'Identified that zero length should give zero resistance, and the graph does not pass through the origin.',
    feedbackMiss: 'If l = 0, then R = ρ × 0 / A = 0. So the graph should pass through the origin. It does not — the y-intercept is above zero — indicating a systematic error (extra constant resistance in the circuit).',
  },

  'q5d': {
    marks: 3,
    exemplar: 'All values shifted by the same amount [1]. Because the errors cancel out in the gradient calculation (systematic offset is constant, and gradients use differences ΔR/Δl) [1]. Therefore statement is invalid [1].',
    keyConcepts: ['systematic error = constant offset on all readings', 'gradient uses differences → constant offset cancels out', 'gradient accuracy is NOT affected by systematic error'],
    keywords: ['constant offset', 'errors cancel', 'gradient calculation', 'differences', 'invalid statement', 'accurate'],
    feedbackHit: 'Correctly explained that the constant offset cancels in gradient calculations.',
    feedbackMiss: 'Three points: (1) all values are shifted by the same amount (constant systematic error), (2) when calculating gradient = ΔR/Δl, the offset cancels (it subtracts out), (3) therefore the gradient is NOT affected — the student\'s statement is invalid.',
  },

  'q5e': {
    marks: 1,
    exemplar: 'Accept any one: zero error (in the measuring instrument); calibration error; additional resistance from other components in the circuit (connecting wires, crocodile clips, internal resistance of the meter).',
    keyConcepts: ['systematic error sources: zero error, calibration error, additional circuit resistance'],
    keywords: ['zero error', 'calibration error', 'additional resistance', 'connecting wires', 'crocodile clips'],
    feedbackHit: 'Suggested a valid source of systematic error.',
    feedbackMiss: 'Possible sources: zero error in the ohmmeter, calibration error, or extra resistance from connecting wires/clips that is always present.',
  },

  'q5f': {
    marks: 4,
    exemplar: 'If the area of the wire increases, the resistance would decrease [1]. Relationship is inversely proportional (R ∝ 1/A) [1]. Reference to electrons (charge carriers) moving through the conductor [1]. Fewer pathways if area is smaller / more pathways in larger area allows electrons to flow more easily [1].',
    keyConcepts: ['R ∝ 1/A (from R = ρl/A)', 'larger area → more pathways for electrons', 'more pathways → less resistance to current flow', 'model of moving charge carriers (electrons)'],
    keywords: ['inversely proportional', 'area increases', 'resistance decreases', 'electrons', 'pathways', 'charge carriers', 'R ∝ 1/A'],
    feedbackHit: 'Full hypothesis with inverse proportion, electron model, and pathway explanation.',
    feedbackMiss: '4 marks: (1) area↑ → resistance↓, (2) inversely proportional, (3) mention electrons/charge carriers, (4) larger area = more pathways → easier electron flow → less resistance.',
  },

  // ── Q6: Series Circuit Investigation ──────────────────────
  'q6a': {
    marks: 3,
    exemplar: 'Two bulbs in series [1]. Ammeter connected to measure current through bulbs (in series with bulbs) [1]. Correct circuit with no additional components in series with the bulbs [1]. Ignore switch or voltmeter added in parallel.',
    keyConcepts: ['series circuit: all components in one loop', 'ammeter in series to measure current', 'circuit must not include extra components that alter the measurement'],
    keywords: ['series', 'two bulbs', 'ammeter', 'circuit diagram', 'no extra components'],
    feedbackHit: 'Correctly drew two series bulbs with ammeter in series and no extra series components.',
    feedbackMiss: 'Three marks: (1) two bulbs connected in series, (2) ammeter placed in series in the circuit, (3) no extra components added in series that would change the circuit behaviour.',
  },

  'q6b': {
    marks: 15,
    exemplar: `Marked on 5-category rubric (3 marks each):

Research question (max 3):
- 1 mark: some reference to IV or DV
- 2 marks: research question links IV (number of bulbs) to DV (current) clearly
- 3 marks: clear, testable question linking both variables

Hypothesis (max 3):
- 1 mark: a simple prediction that is incomplete
- 2 marks: predicts current decreases as number of bulbs increases
- 3 marks: predicts current decreases as bulbs increase AND explains this is because resistance increases

IV and DV (max 3):
- 1 mark: IV identified (number of bulbs)
- 2 marks: IV and DV both identified (current)
- 3 marks: IV, DV, and at least one justified CV (e.g. supply voltage — a higher voltage would increase current)

Method (max 3):
- 1 mark: implies a range of bulb numbers
- 2 marks: method links both IV and DV, includes measurement of current
- 3 marks: detailed method with how measurements are taken and recorded

Data collection (max 3):
- 1 mark: reference to data or measurements
- 2 marks: at least 5 values of IV suggested
- 3 marks: sufficient data with repeats, reference to table and/or graph`,
    keyConcepts: ['IV = number of bulbs in series', 'DV = current (A, measured with ammeter)', 'CV = supply voltage (must be constant)', 'adding bulbs → more resistance → less current (I = V/R)', 'need 5+ values, 3 repeats each'],
    keywords: ['research question', 'IV', 'DV', 'control variable', 'voltage', 'hypothesis', 'resistance increases', 'current decreases', 'method', 'ammeter', 'repeats', 'sufficient data'],
    feedbackHit: 'Full investigation design with RQ, hypothesis with science, IV/DV/CV justified, method, and sufficient data plan.',
    feedbackMiss: 'Design must include: RQ, hypothesis (current decreases because resistance increases), IV=bulbs DV=current CV=voltage, method with how to measure, 5+ values with 3 repeats.',
  },

  // ── Q7: Renewable Energy ───────────────────────────────────
  'q7a': {
    marks: 3,
    exemplar: 'One mark per correct disadvantage matched to correct energy source. All three correct for full marks: Geothermal → needs geologically suitable areas; Biomass → large space / time delay; Tidal → environmental disruption from mining/construction.',
    keyConcepts: ['each renewable energy source has specific disadvantages', 'geothermal: needs volcanic/geological activity', 'biomass: land use and time lag', 'tidal: ecosystem disruption'],
    keywords: ['geothermal', 'biomass', 'tidal', 'disadvantage', 'geological', 'space', 'ecosystem'],
    feedbackHit: 'Correctly matched all three disadvantages to the right energy sources.',
    feedbackMiss: 'Match each disadvantage to its source: Geothermal needs volcanic regions. Biomass needs land and time to grow fuel. Tidal power construction can disrupt coastal ecosystems.',
  },

  'q7b': {
    marks: 2,
    exemplar: 'Correct energy forms: Chemical potential → Thermal (heat) energy → Kinetic energy → Electrical energy. In correct order [1 for each component correct, or all correct for 2 marks]. Award marks independently.',
    keyConcepts: ['biomass energy flow: chemical → thermal → kinetic → electrical', 'burning chemical energy → heat → steam/turbine (kinetic) → generator (electrical)'],
    keywords: ['chemical potential', 'thermal', 'kinetic', 'electrical', 'energy chain', 'biomass'],
    feedbackHit: 'Correctly ordered: chemical potential → thermal → kinetic → electrical.',
    feedbackMiss: 'Wood (biomass) stores chemical potential energy. Burning releases thermal energy. Heat makes steam that drives a turbine (kinetic). The generator converts kinetic to electrical.',
  },

  'q7c': {
    marks: 4,
    exemplar: 'A statement of an advantage implicitly linked to a country [1]. A statement of two or more disadvantages implicitly linked to a country with explanation for each [3]. Or see rubric.',
    keyConcepts: ['advantages must be linked to the specific country chosen', 'disadvantages must be explained (not just stated)', 'balance of evidence needed for full marks'],
    keywords: ['advantage', 'disadvantage', 'country', 'justified', 'linked', 'renewable energy', 'explanation'],
    feedbackHit: 'Gave country-specific advantages and disadvantages with explanations.',
    feedbackMiss: 'State a country. Give at least one advantage AND two disadvantages — both must be linked to that specific country with an explanation of why each applies there.',
  },

  // ── Q8: Malta Energy Options ───────────────────────────────
  'q8a': {
    marks: 2,
    exemplar: 'Nuclear power plant (option 3) [1]. Uranium / nuclear fuel is a finite resource (WTTE) [1].',
    keyConcepts: ['nuclear fuel (uranium) is non-renewable — finite supply', 'renewables (solar, wind) are continuously replenished'],
    keywords: ['nuclear', 'uranium', 'non-renewable', 'finite', 'limited supply', 'cannot be replenished'],
    feedbackHit: 'Identified nuclear as non-renewable and explained uranium is finite.',
    feedbackMiss: 'Nuclear power uses uranium, which is a finite resource — it exists in limited quantities and cannot be replenished. Solar and wind are renewable because they are continuously available.',
  },

  'q8b': {
    marks: 12,
    exemplar: `Marked on 4-category rubric:

Advantages of chosen method over oil (max 4):
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
- 3 marks: economic implication with specific data quoted for chosen option
- 4 marks: comparative reference to two options supported with data

Conclusion/recommendation (max 1):
- 1 mark: a concluding recommendation with justification`,
    keyConcepts: ['evaluate using data from infographic (cost/kWh, area, decommission cost)', 'political: sovereignty, international agreements, public acceptance', 'economic: upfront cost, running cost, per kWh cost', 'conclusion: weigh evidence to recommend one option'],
    keywords: ['advantages', 'political', 'economic', 'data', 'recommendation', 'justification', 'Malta', 'nuclear', 'wind', 'solar cable'],
    feedbackHit: 'Evaluated options with justified advantages, political and economic discussion with data, and clear recommendation.',
    feedbackMiss: 'Cover all four: advantages (with data), political implications, economic comparison (use numbers from infographic), and a concluding recommendation for Malta.',
  },

}
