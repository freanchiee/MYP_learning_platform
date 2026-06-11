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

  // Q1 — Kinetic Theory & Brownian Motion (15°C to 85°C, fat droplets in milk)
  'q1a': {
    marks: 1,
    exemplar: 'Fat droplets (visible); milk molecules (not visible / too small to see).',
    keyConcepts: ['fat droplet visible', 'milk molecule invisible', 'particle size'],
    keywords: ['fat droplet', 'milk molecule', 'visible', 'microscope', 'Brownian'],
    feedbackHit: 'Correct — fat droplets are visible; milk molecules are invisible.',
    feedbackMiss: 'Fat droplets (large) are visible; milk molecules are too small to see.',
  } as MSEntry,
  'q1b': {
    marks: 1,
    exemplar: 'The situation with faster-moving particles / more energetic particles represents the higher temperature.',
    keyConcepts: ['kinetic energy', 'temperature', 'particle speed'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particle'],
    feedbackHit: 'Correct — higher temperature means greater kinetic energy.',
    feedbackMiss: 'Higher temperature = particles with more kinetic energy (moving faster).',
  } as MSEntry,
  'q1c': {
    marks: 3,
    exemplar: 'Temperature increases from 15°C to 85°C. Particles gain kinetic energy / move faster. They collide with the walls more frequently and with greater force. Greater force per unit area = greater pressure.',
    keyConcepts: ['kinetic energy increases', 'more frequent collisions', 'greater force', 'pressure increases'],
    keywords: ['15°C', '85°C', 'sealed container', 'kinetic energy', 'collision frequency', 'force', 'pressure'],
    feedbackHit: 'Correct — faster particles, more frequent harder collisions, greater pressure.',
    feedbackMiss: 'Three steps: (1) particles gain KE, (2) more frequent/harder wall collisions, (3) greater force per unit area = greater pressure.',
  } as MSEntry,
  'q1d': {
    marks: 2,
    exemplar: 'Milk molecules are in constant, random motion (too small to be seen). They collide unevenly with the larger fat droplets. Unequal collisions cause the random (Brownian) motion.',
    keyConcepts: ['random molecular motion', 'unequal collisions', 'Brownian motion'],
    keywords: ['milk molecules', 'fat droplets', 'random motion', 'unequal', 'invisible'],
    feedbackHit: 'Correct — invisible milk molecules collide unevenly with fat droplets.',
    feedbackMiss: 'Milk molecules: constant random motion; unequal collisions from all sides → Brownian motion.',
  } as MSEntry,

  // Q2 — Energy Transformations (m=20kg, KE=490J, sound=10J, thermal=50J; v=7.0ms⁻¹)
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
    exemplar: 'Missing form: Thermal energy. Missing value: 550 − 490 − 10 = 50 J thermal energy.',
    keyConcepts: ['conservation of energy', 'thermal energy', 'Sankey diagram'],
    keywords: ['thermal', '550 J', '490 J', '10 J', '50 J', 'conservation'],
    feedbackHit: 'Correct — 50 J thermal energy.',
    feedbackMiss: 'Conservation: 550 − 490 − 10 = 50 J thermal energy.',
  } as MSEntry,
  'q2c': {
    marks: 3,
    exemplar: 'KE = ½mv²\n490 = ½ × 20 × v²\nv² = 49\nv = √49 = 7.0 m s⁻¹',
    keyConcepts: ['kinetic energy equation', 'velocity calculation', 'KE = ½mv²'],
    keywords: ['20 kg', '490 J', '7.0 m s⁻¹', 'KE', 'significant figures'],
    feedbackHit: 'Correct — v = √(2×490/20) = √49 = 7.0 m s⁻¹.',
    feedbackMiss: 'KE = ½mv² → v = √(2KE/m) = √(980/20) = √49 = 7.0 m s⁻¹.',
  } as MSEntry,
  'q2d': {
    marks: 2,
    exemplar: 'Total mass = 2 × 9.11 × 10⁻³¹ = 1.822 × 10⁻³⁰ kg\nE = mc² = 1.822 × 10⁻³⁰ × (3.0 × 10⁸)² = 1.64 × 10⁻¹³ J',
    keyConcepts: ['E = mc²', 'antimatter', 'mass-energy conversion'],
    keywords: ['electron', 'positron', '9.11 × 10⁻³¹', '1.64 × 10⁻¹³ J', 'E=mc²'],
    feedbackHit: 'Correct — E = 1.64 × 10⁻¹³ J.',
    feedbackMiss: 'Total mass = 2 × 9.11 × 10⁻³¹ kg. E = mc² = 1.64 × 10⁻¹³ J.',
  } as MSEntry,

  // Q3 — Red-shift & Hubble's Law
  'q3a': { type: 'mcq', correct: 2 } as MCQEntry,
  'q3b': {
    marks: 2,
    exemplar: 'Graph D (longer wavelength). Source moving away → wavelength stretched → lower frequency, red-shifted.',
    keyConcepts: ['Doppler effect', 'red-shift', 'wavelength increase', 'source moving away'],
    keywords: ['wavelength', 'Doppler', 'red-shift', 'moving away', 'frequency decrease'],
    feedbackHit: 'Correct — moving away stretches wavelength (red-shift).',
    feedbackMiss: 'Select graph with longer wavelength. Moving away → stretched wavelength = red-shift.',
  } as MSEntry,
  'q3c': {
    marks: 2,
    exemplar: 'Light from receding star has increased wavelength. Red light has longest wavelength in visible spectrum → light shifted towards red end.',
    keyConcepts: ['red-shift', 'wavelength', 'visible spectrum', 'receding star'],
    keywords: ['red', 'wavelength', 'spectrum', 'visible', 'shifted', 'star'],
    feedbackHit: 'Correct — wavelength increased towards red end.',
    feedbackMiss: 'Red-shift: wavelength of light from receding star is stretched → shifted towards red end of visible spectrum.',
  } as MSEntry,
  'q3d': {
    marks: 2,
    exemplar: 'Straight line of best fit through or near origin, roughly equal points above and below.',
    keyConcepts: ['line of best fit', 'Hubble graph', 'scatter plot'],
    keywords: ['best fit', 'straight line', 'origin', 'scatter', 'distance', 'velocity'],
    feedbackHit: 'Correct — straight best-fit line through origin.',
    feedbackMiss: 'Line must be straight, pass near origin, balance points above and below.',
  } as MSEntry,
  'q3e': {
    marks: 2,
    exemplar: 'As distance from Earth increases, recession velocity increases. Directly proportional (straight line through origin).',
    keyConcepts: ['Hubble\'s law', 'directly proportional', 'velocity vs distance'],
    keywords: ['proportional', 'distance', 'velocity', 'straight line', 'origin'],
    feedbackHit: 'Correct — directly proportional relationship.',
    feedbackMiss: 'Velocity increases with distance; directly proportional (straight line through origin).',
  } as MSEntry,
  'q3f': {
    marks: 2,
    exemplar: 'Hubble\'s law shows all galaxies moving apart. Tracing expansion backwards → single origin point → consistent with Big Bang.',
    keyConcepts: ['Big Bang', 'expanding universe', 'Hubble\'s law', 'single origin'],
    keywords: ['Big Bang', 'expanding', 'single point', 'galaxies', 'origin'],
    feedbackHit: 'Correct — expanding universe supports Big Bang theory.',
    feedbackMiss: 'All galaxies recede → run time backwards → single origin = Big Bang.',
  } as MSEntry,
  'q3g': {
    marks: 1,
    exemplar: 'More data points available now → more accurate best-fit line → more accurate gradient → better age estimate.',
    keyConcepts: ['data reliability', 'sample size', 'gradient accuracy'],
    keywords: ['more data', 'accurate', 'gradient', 'age', 'universe'],
    feedbackHit: 'Correct — more data = more accurate gradient.',
    feedbackMiss: 'More data = better best-fit line = more accurate gradient = better estimate.',
  } as MSEntry,

  // Q4 — Ohm's Law (0.5V→0.08A, 1.0V→0.16A, 1.5V→0.24A, 2.0V→0.50A anomalous, 2.5V→0.40A)
  'q4a': {
    marks: 6,
    exemplar: '| Voltage / V | Current / A |\n| 0.5 | 0.08 |\n| 1.0 | 0.16 |\n| 1.5 | 0.24 |\n| 2.0 | 0.50 |\n| 2.5 | 0.40 |\nUnits in headers only; 504 mA → 0.50 A.',
    keyConcepts: ['data table', 'unit conversion', 'raw data organisation'],
    keywords: ['voltage', 'current', '504 mA', '0.50 A', 'ascending', 'units'],
    feedbackHit: 'Correct — well-organised table with 504 mA correctly converted to 0.50 A.',
    feedbackMiss: 'Headers: Voltage / V and Current / A. Five ascending rows. Convert 504 mA → 0.50 A. Values to 2 d.p.',
  } as MSEntry,
  'q4b': {
    marks: 3,
    exemplar: 'Mostly supported. 0.5V→0.08A; 1.0V→0.16A (doubles ✓); 1.5V→0.24A ✓; 2.5V→0.40A ✓. But 2.0V→0.50A is anomalous (expected 0.32A). Hypothesis mostly supported with one anomaly.',
    keyConcepts: ['Ohm\'s law', 'proportionality', 'anomalous result', 'hypothesis test'],
    keywords: ['doubles', 'proportional', 'anomalous', '2.0 V', '0.50 A', 'ohmic'],
    feedbackHit: 'Correct — identified proportional pattern and anomalous result at 2.0 V.',
    feedbackMiss: 'Check each pair doubles: 0.5→0.08, 1.0→0.16 ✓, etc. At 2.0V: 0.50A ≠ 0.32A → anomaly.',
  } as MSEntry,
  'q4c': {
    marks: 2,
    exemplar: 'Component Y is non-ohmic. The graph is not a straight line — gradient increases with voltage.',
    keyConcepts: ['non-ohmic conductor', 'non-linear graph', 'current-voltage relationship'],
    keywords: ['non-ohmic', 'curved', 'non-linear', 'gradient', 'component Y'],
    feedbackHit: 'Correct — curved (non-linear) graph → non-ohmic.',
    feedbackMiss: 'Ohmic requires straight-line graph. Component Y\'s curve → non-ohmic.',
  } as MSEntry,
  'q4d': {
    marks: 1,
    exemplar: 'A graph gives a visual representation — immediately shows whether relationship is linear or non-linear.',
    keyConcepts: ['graph vs table', 'visual analysis', 'data presentation'],
    keywords: ['visual', 'linear', 'non-linear', 'trend', 'graph'],
    feedbackHit: 'Correct — graphs show trends more clearly than tables.',
    feedbackMiss: 'Graphs show linear/non-linear trends visually, harder to detect from numbers.',
  } as MSEntry,
  'q4e': {
    marks: 3,
    exemplar: '(i) At V=1.0V, I≈0.20A → R = 1.0/0.20 = 5.0 Ω\n(ii) At I=0.40A, V≈6.0V → R = 6.0/0.40 = 15 Ω',
    keyConcepts: ['resistance calculation', 'R = V/I', 'graph reading'],
    keywords: ['5.0 Ω', '15 Ω', '1.0 V', '0.40 A', 'R=V/I'],
    feedbackHit: 'Correct — R = V/I applied correctly.',
    feedbackMiss: 'R = V/I. (i) I at V=1.0V ≈ 0.20A → R=5.0Ω. (ii) V at I=0.40A ≈ 6.0V → R=15Ω.',
  } as MSEntry,
  'q4f': {
    marks: 1,
    exemplar: 'Two LED symbols in series with battery. Ammeter (A) in series within the main loop.',
    keyConcepts: ['series circuit', 'circuit diagram', 'LED', 'ammeter'],
    keywords: ['LED', 'series', 'ammeter', 'circuit symbol', 'battery'],
    feedbackHit: 'Correct — LEDs in series, ammeter in series.',
    feedbackMiss: 'Connect both LEDs in series. Ammeter in series (not parallel).',
  } as MSEntry,

  // Q5 — Wire Resistance (gradient ≈ 0.035 Ω m⁻¹)
  'q5a': { type: 'mcq', correct: 1 } as MCQEntry,
  'q5b': {
    marks: 3,
    exemplar: 'Gradient = ΔR/Δl ≈ 0.035 Ω m⁻¹ (accept 0.030–0.040). Units: Ω m⁻¹.',
    keyConcepts: ['gradient calculation', 'resistance vs length', 'units'],
    keywords: ['0.035', 'gradient', 'ΔR/Δl', 'Ω m⁻¹', 'best-fit line'],
    feedbackHit: 'Correct — gradient calculated from best-fit line with correct units.',
    feedbackMiss: 'Use two points on the best-fit line. Gradient = ΔR/Δl. Units: Ω m⁻¹. Accept 0.030–0.040.',
  } as MSEntry,
  'q5c': {
    marks: 2,
    exemplar: 'Evidence: non-zero y-intercept. Justification: at l=0, R must=0 (R=ρl/A). Non-zero intercept = systematic error.',
    keyConcepts: ['systematic error', 'y-intercept', 'origin intercept'],
    keywords: ['y-intercept', 'non-zero', 'systematic error', 'origin', 'l=0'],
    feedbackHit: 'Correct — non-zero y-intercept = systematic error.',
    feedbackMiss: 'Line does not pass through origin. At l=0, R must=0 → non-zero intercept = systematic error.',
  } as MSEntry,
  'q5d': {
    marks: 3,
    exemplar: 'Statement is invalid. Systematic error adds a constant to all R values. Gradient = ΔR/Δl — constant cancels in differences. Gradient accuracy NOT affected.',
    keyConcepts: ['systematic error', 'gradient validity', 'constant offset'],
    keywords: ['constant', 'cancels', 'differences', 'gradient', 'invalid'],
    feedbackHit: 'Correct — constant offset cancels when computing gradient.',
    feedbackMiss: 'Gradient = ΔR/Δl. A constant error cancels in differences → gradient still accurate.',
  } as MSEntry,
  'q5e': {
    marks: 1,
    exemplar: 'Any valid source: zero error on ohmmeter; calibration error; resistance from connecting wires / crocodile clips.',
    keyConcepts: ['systematic error source', 'measuring instrument', 'zero error'],
    keywords: ['zero error', 'calibration', 'connecting wires', 'crocodile clips', 'ohmmeter'],
    feedbackHit: 'Correct systematic error source.',
    feedbackMiss: 'What adds a constant resistance? E.g. zero error, crocodile clips, connecting wires.',
  } as MSEntry,
  'q5f': {
    marks: 4,
    exemplar: 'Hypothesis: R ∝ 1/A (inversely proportional). Explanation: larger area = more electron pathways → less opposition → lower resistance.',
    keyConcepts: ['resistance vs area', 'inversely proportional', 'electron pathways'],
    keywords: ['R ∝ 1/A', 'inversely', 'electron', 'pathways', 'area', 'resistance'],
    feedbackHit: 'Correct — R ∝ 1/A with microscopic explanation.',
    feedbackMiss: 'State R ∝ 1/A. Explain: larger area = more electron pathways = less resistance.',
  } as MSEntry,

  // Q6 — LED Series Circuit Investigation Design
  'q6a': {
    marks: 3,
    exemplar: 'Two LED symbols in series with battery. Ammeter (A) in series within the main loop.',
    keyConcepts: ['series circuit', 'circuit diagram', 'LED', 'ammeter'],
    keywords: ['LEDs', 'series', 'ammeter', 'circuit symbol', 'battery'],
    feedbackHit: 'Correct circuit — LEDs in series, ammeter in series.',
    feedbackMiss: 'Connect LEDs in series (single path). Ammeter in series. Correct LED symbol.',
  } as MSEntry,
  'q6b': {
    marks: 15,
    exemplar: 'RQ: How does the number of LEDs in series affect current?\nHypothesis: more LEDs → lower current (I=V/R; total R increases).\nIV: number of LEDs; DV: current; CV: supply voltage.\nMethod: 1–6 LEDs, 3 repeats, mean current. Plot I vs n.',
    keyConcepts: ['investigation design', 'series circuit', 'Ohm\'s law', 'Criterion B'],
    keywords: ['research question', 'hypothesis', 'IV', 'DV', 'CV', 'repeats', 'method', 'LED'],
    feedbackHit: 'Full marks — all components of a well-designed investigation present.',
    feedbackMiss: 'Include: research question, hypothesis with I=V/R reasoning, IV/DV/CV with justification, step-by-step method, ≥5 values + 3 repeats, equipment.',
  } as MSEntry,

  // Q7 — Renewable Energy Sources
  'q7a': {
    marks: 3,
    exemplar: 'Geothermal → limited to geologically active regions. Biomass → monoculture reduces biodiversity. Tidal → costly underwater maintenance.',
    keyConcepts: ['geothermal disadvantage', 'biomass disadvantage', 'tidal disadvantage'],
    keywords: ['geologically active', 'biodiversity', 'saltwater corrosion', 'geothermal', 'biomass', 'tidal'],
    feedbackHit: 'All three matched correctly.',
    feedbackMiss: 'Geothermal: volcanic zones only. Biomass: monocultures/biodiversity. Tidal: underwater maintenance cost.',
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
    exemplar: 'Example: Geothermal for New Zealand. Advantages: reliable baseload; carbon-neutral; no fuel cost. Disadvantages: high initial cost; seismic risk. Justified conclusion.',
    keyConcepts: ['energy evaluation', 'advantages', 'disadvantages', 'recommendation'],
    keywords: ['advantage', 'disadvantage', 'recommendation', 'country', 'justified'],
    feedbackHit: 'Good evaluation — country-specific, advantages/disadvantages, justified conclusion.',
    feedbackMiss: 'Name a country. Give ≥2 advantages and ≥2 disadvantages. Reach a justified conclusion.',
  } as MSEntry,

  // Q8 — Malta Energy Evaluation
  'q8a': {
    marks: 2,
    exemplar: 'Option 3 — nuclear. Non-renewable: uranium is finite and cannot be replenished on a human timescale.',
    keyConcepts: ['non-renewable energy', 'nuclear fuel', 'uranium'],
    keywords: ['nuclear', 'uranium', 'finite', 'non-renewable', 'option 3'],
    feedbackHit: 'Correct — nuclear (option 3) uses finite uranium.',
    feedbackMiss: 'Nuclear (option 3) uses uranium, a finite resource → non-renewable.',
  } as MSEntry,
  'q8b': {
    marks: 12,
    exemplar: 'Evaluate all three with infographic data. Political: solar requires foreign agreement; nuclear faces opposition; wind self-contained. Economic: specific €/kWh data. Justified recommendation for Malta.',
    keyConcepts: ['energy policy evaluation', 'political implications', 'economic implications', 'Criterion D'],
    keywords: ['Malta', 'solar', 'wind', 'nuclear', 'political', 'economic', '€/kWh', 'recommendation'],
    feedbackHit: 'Full evaluation — all three options, political and economic with specific data, clear recommendation.',
    feedbackMiss: 'Discuss all three options. Cover political and economic implications using specific infographic data. Give a justified recommendation.',
  } as MSEntry,

}
