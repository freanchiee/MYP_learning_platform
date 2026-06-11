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

  // Q1 — Kinetic Theory & Brownian Motion (20°C to 90°C)
  'q1a': {
    marks: 1,
    exemplar: 'Pollen grains (visible); water molecules (not visible / too small to see).',
    keyConcepts: ['pollen grain visible', 'water molecule invisible', 'particle size'],
    keywords: ['pollen', 'water molecule', 'visible', 'microscope', 'Brownian'],
    feedbackHit: 'Correct — pollen grains are visible; water molecules are too small to see.',
    feedbackMiss: 'Pollen grains (large) are visible; water molecules are invisible.',
  } as MSEntry,
  'q1b': {
    marks: 1,
    exemplar: 'The situation with faster-moving particles / more energetic particles represents the higher temperature.',
    keyConcepts: ['kinetic energy', 'temperature', 'particle speed'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particle'],
    feedbackHit: 'Correct — higher temperature means greater kinetic energy and faster particle motion.',
    feedbackMiss: 'Higher temperature corresponds to faster-moving particles with more kinetic energy.',
  } as MSEntry,
  'q1c': {
    marks: 3,
    exemplar: 'Temperature increases from 20°C to 90°C. Particles gain kinetic energy / move faster. They collide with the walls more frequently and with greater force. Greater force per unit area = greater pressure.',
    keyConcepts: ['kinetic energy increases', 'more frequent collisions', 'greater force', 'pressure increases'],
    keywords: ['20°C', '90°C', 'sealed container', 'kinetic energy', 'collision frequency', 'force', 'pressure'],
    feedbackHit: 'Correct — you identified: faster particles, more frequent harder collisions, greater pressure.',
    feedbackMiss: 'Three steps: (1) particles gain KE / move faster, (2) more frequent and harder wall collisions, (3) greater force per unit area = greater pressure.',
  } as MSEntry,
  'q1d': {
    marks: 2,
    exemplar: 'Water molecules are in constant, random motion (too small to be seen). They collide unevenly with the larger pollen grains. Net unequal force causes random (Brownian) motion.',
    keyConcepts: ['random molecular motion', 'unequal collisions', 'Brownian motion'],
    keywords: ['water molecules', 'pollen grain', 'random motion', 'unequal', 'invisible'],
    feedbackHit: 'Correct — invisible water molecules in random motion collide unevenly with pollen grains.',
    feedbackMiss: 'Water molecules: constant random motion; unequal collisions from all sides → random Brownian motion of pollen.',
  } as MSEntry,

  // Q2 — Energy Transformations (m=32kg, KE=800J, sound=10J, thermal=90J; v=7.1ms⁻¹)
  'q2a': {
    marks: 1,
    exemplar: 'E → joule (J); m → kilogram (kg); c → metre per second (m s⁻¹).',
    keyConcepts: ['SI units', 'E=mc²', 'joule', 'kilogram', 'metre per second'],
    keywords: ['joule', 'kilogram', 'metre per second', 'SI unit', 'Einstein'],
    feedbackHit: 'All three SI units correct.',
    feedbackMiss: 'E → joule (J); m → kilogram (kg); c → metre per second (m s⁻¹).',
  } as MSEntry,
  'q2b': {
    marks: 2,
    exemplar: 'Missing form: Thermal energy. Missing value: 900 − 800 − 10 = 90 J thermal energy.',
    keyConcepts: ['conservation of energy', 'thermal energy', 'Sankey diagram'],
    keywords: ['thermal', '900 J', '800 J', '10 J', '90 J', 'conservation'],
    feedbackHit: 'Correct — thermal energy of 90 J.',
    feedbackMiss: 'Conservation: 900 − 800 − 10 = 90 J thermal energy.',
  } as MSEntry,
  'q2c': {
    marks: 3,
    exemplar: 'KE = ½mv²\n800 = ½ × 32 × v²\nv² = 50\nv = √50 = 7.07... ≈ 7.1 m s⁻¹',
    keyConcepts: ['kinetic energy equation', 'velocity calculation', 'KE = ½mv²'],
    keywords: ['32 kg', '800 J', '7.1 m s⁻¹', 'KE', 'significant figures'],
    feedbackHit: 'Correct — v = √(2×800/32) = √50 ≈ 7.1 m s⁻¹.',
    feedbackMiss: 'KE = ½mv² → v = √(2KE/m) = √(1600/32) = √50 ≈ 7.1 m s⁻¹.',
  } as MSEntry,
  'q2d': {
    marks: 2,
    exemplar: 'Total mass = 2 × 9.11 × 10⁻³¹ = 1.822 × 10⁻³⁰ kg\nE = mc² = 1.822 × 10⁻³⁰ × (3.0 × 10⁸)² = 1.64 × 10⁻¹³ J',
    keyConcepts: ['E = mc²', 'antimatter', 'mass-energy conversion'],
    keywords: ['electron', 'positron', '9.11 × 10⁻³¹', '1.64 × 10⁻¹³ J', 'E=mc²'],
    feedbackHit: 'Correct — E = 1.64 × 10⁻¹³ J.',
    feedbackMiss: 'Total mass = 2 × 9.11 × 10⁻³¹ kg. E = mc² = 1.822 × 10⁻³⁰ × (3×10⁸)² = 1.64 × 10⁻¹³ J.',
  } as MSEntry,

  // Q3 — Red-shift & Hubble's Law
  'q3a': { type: 'mcq', correct: 2 } as MCQEntry,
  'q3b': {
    marks: 2,
    exemplar: 'Graph D (longer wavelength). Source moving away → wavelength stretched (Doppler effect) → lower frequency, red-shifted.',
    keyConcepts: ['Doppler effect', 'red-shift', 'wavelength increase', 'source moving away'],
    keywords: ['wavelength', 'Doppler', 'red-shift', 'moving away', 'frequency decrease'],
    feedbackHit: 'Correct — moving away stretches wavelength (red-shift).',
    feedbackMiss: 'Select graph with longer wavelength. Source moving away → stretched wavelength = red-shift.',
  } as MSEntry,
  'q3c': {
    marks: 2,
    exemplar: 'Light from a receding star has increased wavelength. Red light has the longest wavelength in the visible spectrum, so light appears shifted towards the red end.',
    keyConcepts: ['red-shift', 'wavelength', 'visible spectrum', 'receding star'],
    keywords: ['red', 'wavelength', 'spectrum', 'visible', 'shifted', 'star'],
    feedbackHit: 'Correct — wavelength increased towards red end of spectrum.',
    feedbackMiss: 'Red-shift: wavelength of light from receding star is stretched → shifted towards red end of visible spectrum.',
  } as MSEntry,
  'q3d': {
    marks: 2,
    exemplar: 'Straight line of best fit through or near the origin, with roughly equal numbers of points above and below.',
    keyConcepts: ['line of best fit', 'Hubble graph', 'scatter plot'],
    keywords: ['best fit', 'straight line', 'origin', 'scatter', 'distance', 'velocity'],
    feedbackHit: 'Correct — straight best-fit line through origin.',
    feedbackMiss: 'The line must be straight, pass near the origin, and balance points above and below.',
  } as MSEntry,
  'q3e': {
    marks: 2,
    exemplar: 'As distance from Earth increases, recession velocity increases. Directly proportional (straight line through origin).',
    keyConcepts: ['Hubble\'s law', 'directly proportional', 'velocity vs distance'],
    keywords: ['proportional', 'distance', 'velocity', 'straight line', 'origin'],
    feedbackHit: 'Correct — directly proportional relationship.',
    feedbackMiss: 'State: velocity increases with distance; relationship is proportional (straight line through origin).',
  } as MSEntry,
  'q3f': {
    marks: 2,
    exemplar: 'Hubble\'s law shows all galaxies are moving apart. Tracing expansion backwards, all matter originated from a single point — consistent with the Big Bang.',
    keyConcepts: ['Big Bang', 'expanding universe', 'Hubble\'s law', 'single origin'],
    keywords: ['Big Bang', 'expanding', 'single point', 'galaxies recede', 'origin'],
    feedbackHit: 'Correct — expanding universe traced back to single origin = Big Bang.',
    feedbackMiss: 'Hubble\'s law: all galaxies recede → run time backwards → single origin point = Big Bang.',
  } as MSEntry,
  'q3g': {
    marks: 1,
    exemplar: 'More data points available now allow a more accurate line of best fit → more accurate gradient → better age estimate.',
    keyConcepts: ['data reliability', 'sample size', 'gradient accuracy'],
    keywords: ['more data', 'accurate', 'gradient', 'age', 'universe'],
    feedbackHit: 'Correct — more data = more accurate best-fit line and gradient.',
    feedbackMiss: 'More data points = better best-fit line = more accurate gradient = better estimate.',
  } as MSEntry,

  // Q4 — Ohm's Law (0.5V→0.15A, 1.0V→0.30A, 1.5V→0.45A, 2.0V→0.81A anomalous, 2.5V→0.75A)
  'q4a': {
    marks: 6,
    exemplar: '| Voltage / V | Current / A |\n| 0.5 | 0.15 |\n| 1.0 | 0.30 |\n| 1.5 | 0.45 |\n| 2.0 | 0.81 |\n| 2.5 | 0.75 |\nUnits in headers only; 811 mA → 0.81 A.',
    keyConcepts: ['data table', 'unit conversion', 'raw data organisation'],
    keywords: ['voltage', 'current', '811 mA', '0.81 A', 'ascending', 'units'],
    feedbackHit: 'Correct — well-organised table with 811 mA correctly converted to 0.81 A.',
    feedbackMiss: 'Headers: Voltage / V and Current / A. Five ascending rows. Convert 811 mA → 0.81 A. Values to 2 d.p.',
  } as MSEntry,
  'q4b': {
    marks: 3,
    exemplar: 'Mostly supported. At 0.5V→0.15A, 1.0V→0.30A (doubles ✓), 1.5V→0.45A ✓, 2.5V→0.75A ✓. But 2.0V→0.81A is anomalous (expected 0.60A). Hypothesis mostly supported with one anomaly.',
    keyConcepts: ['Ohm\'s law', 'proportionality', 'anomalous result', 'hypothesis test'],
    keywords: ['doubles', 'proportional', 'anomalous', '2.0 V', '0.81 A', 'ohmic'],
    feedbackHit: 'Correct — identified proportional pattern and anomalous result at 2.0 V.',
    feedbackMiss: 'Check each pair doubles: 0.5→0.15, 1.0→0.30 ✓, etc. At 2.0V: 0.81A ≠ 0.60A → anomaly.',
  } as MSEntry,
  'q4c': {
    marks: 2,
    exemplar: 'Component Y is non-ohmic. The graph is not a straight line — the gradient increases with voltage.',
    keyConcepts: ['non-ohmic conductor', 'non-linear graph', 'current-voltage relationship'],
    keywords: ['non-ohmic', 'curved', 'non-linear', 'gradient', 'component Y'],
    feedbackHit: 'Correct — curved (non-linear) graph → non-ohmic.',
    feedbackMiss: 'Ohmic requires a straight-line graph. Component Y\'s curve confirms it is non-ohmic.',
  } as MSEntry,
  'q4d': {
    marks: 1,
    exemplar: 'A graph gives a visual representation — immediately shows whether the relationship is linear or non-linear.',
    keyConcepts: ['graph vs table', 'visual analysis', 'data presentation'],
    keywords: ['visual', 'linear', 'non-linear', 'trend', 'graph'],
    feedbackHit: 'Correct — graphs show trends and linearity more clearly than tables.',
    feedbackMiss: 'Graphs show linear/non-linear trends visually, which is harder to detect from numbers.',
  } as MSEntry,
  'q4e': {
    marks: 3,
    exemplar: '(i) At V=1.0V, I≈0.20A → R = 1.0/0.20 = 5.0 Ω\n(ii) At I=0.40A, V≈6.0V → R = 6.0/0.40 = 15 Ω',
    keyConcepts: ['resistance calculation', 'R = V/I', 'graph reading'],
    keywords: ['5.0 Ω', '15 Ω', '1.0 V', '0.40 A', 'R=V/I'],
    feedbackHit: 'Correct — R = V/I applied correctly at both readings.',
    feedbackMiss: 'R = V/I. (i) Read I at V=1.0V ≈ 0.20A → R=5.0Ω. (ii) Read V at I=0.40A ≈ 6.0V → R=15Ω.',
  } as MSEntry,
  'q4f': {
    marks: 1,
    exemplar: 'Two resistors in series with the battery. Ammeter (A) in series within the main loop.',
    keyConcepts: ['series circuit', 'circuit diagram', 'ammeter placement'],
    keywords: ['resistors', 'series', 'ammeter', 'circuit symbol'],
    feedbackHit: 'Correct — series circuit with ammeter in series.',
    feedbackMiss: 'Connect both resistors in series. Place ammeter in series (not parallel).',
  } as MSEntry,

  // Q5 — Wire Resistance (gradient ≈ 0.065 Ω m⁻¹)
  'q5a': { type: 'mcq', correct: 1 } as MCQEntry,
  'q5b': {
    marks: 3,
    exemplar: 'Gradient = ΔR/Δl ≈ 0.065 Ω m⁻¹ (accept 0.060–0.070). Units: Ω m⁻¹.',
    keyConcepts: ['gradient calculation', 'resistance vs length', 'units'],
    keywords: ['0.065', 'gradient', 'ΔR/Δl', 'Ω m⁻¹', 'best-fit line'],
    feedbackHit: 'Correct — gradient calculated from best-fit line with correct units.',
    feedbackMiss: 'Use two points on the best-fit line. Gradient = ΔR/Δl. Units: Ω m⁻¹. Accept 0.060–0.070.',
  } as MSEntry,
  'q5c': {
    marks: 2,
    exemplar: 'Evidence: non-zero y-intercept. Justification: at l=0, R must=0 (R=ρl/A). Non-zero intercept = systematic error.',
    keyConcepts: ['systematic error', 'y-intercept', 'origin intercept'],
    keywords: ['y-intercept', 'non-zero', 'systematic error', 'origin', 'l=0'],
    feedbackHit: 'Correct — non-zero y-intercept is evidence of systematic error.',
    feedbackMiss: 'Graph does not pass through origin. At l=0, R must=0 theoretically → non-zero intercept = systematic error.',
  } as MSEntry,
  'q5d': {
    marks: 3,
    exemplar: 'Statement is invalid. Systematic error adds a constant to all R values. Gradient = ΔR/Δl — constant cancels in differences. Gradient accuracy is NOT affected.',
    keyConcepts: ['systematic error', 'gradient validity', 'constant offset'],
    keywords: ['constant', 'cancels', 'differences', 'gradient', 'invalid'],
    feedbackHit: 'Correct — constant offset cancels when computing gradient.',
    feedbackMiss: 'Gradient uses ΔR/Δl. A constant systematic error cancels in differences → gradient is still accurate.',
  } as MSEntry,
  'q5e': {
    marks: 1,
    exemplar: 'Any valid source: zero error on ohmmeter; calibration error; resistance from connecting wires / crocodile clips.',
    keyConcepts: ['systematic error source', 'measuring instrument', 'zero error'],
    keywords: ['zero error', 'calibration', 'connecting wires', 'crocodile clips', 'ohmmeter'],
    feedbackHit: 'Correct systematic error source identified.',
    feedbackMiss: 'Think: what adds a constant resistance? E.g. zero error, crocodile clips, connecting wires.',
  } as MSEntry,
  'q5f': {
    marks: 4,
    exemplar: 'Hypothesis: R ∝ 1/A (inversely proportional). Explanation: larger area provides more electron pathways → less opposition → lower resistance.',
    keyConcepts: ['resistance vs area', 'inversely proportional', 'electron pathways'],
    keywords: ['R ∝ 1/A', 'inversely', 'electron', 'pathways', 'area', 'resistance'],
    feedbackHit: 'Correct — R ∝ 1/A with microscopic explanation via electron pathways.',
    feedbackMiss: 'State R ∝ 1/A. Explain: larger area = more electron pathways = less resistance.',
  } as MSEntry,

  // Q6 — Series Circuit Investigation Design
  'q6a': {
    marks: 3,
    exemplar: 'Two resistors in series with battery. Ammeter (A) in series within the main loop.',
    keyConcepts: ['series circuit', 'circuit diagram', 'ammeter'],
    keywords: ['resistors', 'series', 'ammeter', 'circuit symbol', 'battery'],
    feedbackHit: 'Correct circuit — resistors in series, ammeter in series.',
    feedbackMiss: 'Connect resistors in series (single path). Ammeter in series (not parallel). Correct symbols.',
  } as MSEntry,
  'q6b': {
    marks: 15,
    exemplar: 'RQ: How does the number of resistors in series affect current?\nHypothesis: more resistors → lower current (R_total = nR; I = V/R).\nIV: number of resistors; DV: current; CV: supply voltage.\nMethod: 1–6 resistors, 3 repeats, mean current. Plot I vs n.',
    keyConcepts: ['investigation design', 'series circuit', 'Ohm\'s law', 'Criterion B'],
    keywords: ['research question', 'hypothesis', 'IV', 'DV', 'CV', 'repeats', 'method', 'mean'],
    feedbackHit: 'Full marks — all components of a well-designed investigation present.',
    feedbackMiss: 'Include: research question, hypothesis with I=V/R reasoning, IV/DV/CV with justification, step-by-step method, ≥5 values + 3 repeats, equipment.',
  } as MSEntry,

  // Q7 — Renewable Energy Sources
  'q7a': {
    marks: 3,
    exemplar: 'Geothermal → harmful gases (H₂S). Biomass → CO₂ emissions from burning. Tidal → intermittent generation.',
    keyConcepts: ['geothermal disadvantage', 'biomass disadvantage', 'tidal disadvantage'],
    keywords: ['hydrogen sulfide', 'CO₂', 'intermittent', 'geothermal', 'biomass', 'tidal'],
    feedbackHit: 'All three matched correctly.',
    feedbackMiss: 'Geothermal: harmful gases. Biomass: CO₂. Tidal: intermittent power.',
  } as MSEntry,
  'q7b': {
    marks: 2,
    exemplar: 'Chemical potential → Thermal → Kinetic → Electrical',
    keyConcepts: ['energy transfer', 'biomass energy chain', 'energy transformation'],
    keywords: ['chemical', 'thermal', 'kinetic', 'electrical', 'biomass', 'energy chain'],
    feedbackHit: 'Correct energy chain for biomass power station.',
    feedbackMiss: 'Chemical energy (wood) → thermal (burning) → kinetic (turbine) → electrical (generator).',
  } as MSEntry,
  'q7c': {
    marks: 4,
    exemplar: 'Example: Tidal for UK. Advantages: predictable, reliable, no emissions. Disadvantages: intermittent; disrupts ecosystems; high build cost. Justified conclusion.',
    keyConcepts: ['energy evaluation', 'advantages', 'disadvantages', 'recommendation'],
    keywords: ['advantage', 'disadvantage', 'recommendation', 'country', 'justified'],
    feedbackHit: 'Good evaluation — country-specific, advantages/disadvantages, justified conclusion.',
    feedbackMiss: 'Name a country. Give ≥2 advantages and ≥2 disadvantages for that location. Reach a justified conclusion.',
  } as MSEntry,

  // Q8 — Malta Energy Evaluation
  'q8a': {
    marks: 2,
    exemplar: 'Option 3 — nuclear. Non-renewable: uranium is finite and cannot be replenished on a human timescale.',
    keyConcepts: ['non-renewable energy', 'nuclear fuel', 'uranium'],
    keywords: ['nuclear', 'uranium', 'finite', 'non-renewable', 'option 3'],
    feedbackHit: 'Correct — nuclear (option 3) uses finite uranium.',
    feedbackMiss: 'Nuclear power (option 3) uses uranium, a finite resource → non-renewable.',
  } as MSEntry,
  'q8b': {
    marks: 12,
    exemplar: 'Evaluate all three using infographic data. Political: solar requires foreign agreement; nuclear faces opposition; wind is self-contained. Economic: specific €/kWh data. Recommendation with data-backed justification for Malta.',
    keyConcepts: ['energy policy evaluation', 'political implications', 'economic implications', 'Criterion D'],
    keywords: ['Malta', 'solar', 'wind', 'nuclear', 'political', 'economic', '€/kWh', 'recommendation'],
    feedbackHit: 'Full evaluation — all three options, political and economic with specific data, clear recommendation.',
    feedbackMiss: 'Discuss all three options. Cover political and economic implications using specific data from infographic. Give a justified recommendation.',
  } as MSEntry,

}
