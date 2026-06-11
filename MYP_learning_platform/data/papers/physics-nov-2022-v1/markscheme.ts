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

  // ── Q1: Nuclear Fission (energy req = 1.35 × 10¹⁰ J; mass ≈ 0.165 g)
  'q1a': { type: 'mcq', correct: 0 } as MCQEntry,
  'q1b': { type: 'mcq', correct: 2 } as MCQEntry,
  'q1c': {
    marks: 2,
    exemplar: 'Half-life ≈ 18.5 ± 0.5 minutes. Read from graph: initial activity ≈ 1000 Bq; half = 500 Bq; read time at 500 Bq ≈ 18–19 minutes.',
    keyConcepts: ['half-life is time for activity to halve', 'reading from activity-time graph'],
    keywords: ['half-life', 'activity', 'radioactive decay', 'barium-141', '500 Bq'],
    feedbackHit: 'Correctly read half-life from the decay graph.',
    feedbackMiss: 'Half-life = time for activity to fall to HALF initial value. Start at 1000 Bq, find 500 Bq, read time from graph.',
  } as MSEntry,
  'q1d': {
    marks: 2,
    exemplar: 'Energy needed = 1.35 × 10¹⁰ J. Energy per g = 82 000 MJ = 8.2 × 10¹⁰ J/g. Mass = (1.35 × 10¹⁰) ÷ (8.2 × 10¹⁰) = 0.165 g (accept 0.16–0.17 g).',
    keyConcepts: ['unit conversion MJ to J', 'dividing energy values to find mass'],
    keywords: ['energy per gram', '1.35 × 10¹⁰', 'unit conversion', 'MJ', '0.165 g'],
    feedbackHit: 'Correctly converted units and calculated uranium mass.',
    feedbackMiss: 'Convert 82 000 MJ to J (× 10⁶). Divide annual energy by energy per gram: 1.35 × 10¹⁰ ÷ 8.2 × 10¹⁰ = 0.165 g.',
  } as MSEntry,
  'q1e': {
    marks: 1,
    exemplar: 'Collaboration allows scientists with different skills to combine complementary expertise, solving more complex problems than individual scientists could achieve alone.',
    keyConcepts: ['collaboration in science', 'interdisciplinary teamwork'],
    keywords: ['collaboration', 'expertise', 'different skills', 'teamwork'],
    feedbackHit: 'Good suggestion about the value of scientific collaboration.',
    feedbackMiss: 'Think about what physicists, chemists, and engineers each contribute and why working together leads to better results.',
  } as MSEntry,

  // ── Q2: Thermal Energy (cooling graph readings same as source)
  'q2a': {
    marks: 2,
    exemplar: 'Heat energy added: Boiling (given), Melting. Heat energy removed: Freezing, Condensing.',
    keyConcepts: ['endothermic state changes', 'exothermic state changes'],
    keywords: ['melting', 'freezing', 'condensing', 'state change', 'heat energy'],
    feedbackHit: 'Correctly classified all state changes.',
    feedbackMiss: 'Melting and boiling require energy (endothermic). Freezing and condensing release energy (exothermic).',
  } as MSEntry,
  'q2b': {
    marks: 2,
    exemplar: 'Similarity: both are vaporisation (liquid → gas). Difference: evaporation occurs at any temperature from the surface; boiling occurs at a fixed temperature throughout the liquid (creating bubbles).',
    keyConcepts: ['evaporation vs boiling', 'surface vs bulk vaporisation'],
    keywords: ['evaporation', 'boiling', 'vaporisation', 'surface', 'temperature', 'bubbles'],
    feedbackHit: 'Good comparison — valid similarity and clear difference.',
    feedbackMiss: 'Need BOTH a similarity (both are vaporisation) AND a difference (evaporation: any temperature from surface; boiling: fixed temperature throughout).',
  } as MSEntry,
  'q2c': {
    marks: 2,
    exemplar: 'No cooling effect: cooking oil. Greatest cooling effect: ethanol.',
    keyConcepts: ['evaporation causes cooling', 'latent heat varies by liquid'],
    keywords: ['cooking oil', 'ethanol', 'cooling effect', 'evaporation', 'graph reading'],
    feedbackHit: 'Correctly identified cooking oil (no cooling) and ethanol (greatest cooling).',
    feedbackMiss: 'Cooking oil temperature line stays flat (no cooling). Ethanol shows the greatest temperature drop.',
  } as MSEntry,
  'q2d': {
    marks: 1,
    exemplar: 'Approximately 21°C (accept 20–22°C). The temperature of cooking oil, which did not evaporate, represents the ambient laboratory temperature.',
    keyConcepts: ['reference substance at ambient temperature', 'reading from graph'],
    keywords: ['laboratory temperature', 'ambient', 'cooking oil', 'graph'],
    feedbackHit: 'Correctly identified laboratory temperature from cooking oil line.',
    feedbackMiss: 'Cooking oil does not evaporate, so its temperature = room temperature. Read the steady-state temperature of the cooking oil line.',
  } as MSEntry,
  'q2e': {
    marks: 2,
    exemplar: 'Student B is correct. Cooking oil requires the most energy to evaporate. The graph shows cooking oil did not evaporate (no cooling effect), meaning much more energy is needed for vaporisation. Ethanol evaporated readily, showing a low energy barrier.',
    keyConcepts: ['latent heat of vaporisation', 'cooling effect linked to evaporation readiness'],
    keywords: ['latent heat', 'cooking oil', 'ethanol', 'cooling effect', 'energy', 'vaporisation'],
    feedbackHit: 'Correctly justified Student B using graph evidence.',
    feedbackMiss: 'Greater cooling effect = evaporates more readily = less energy required. Cooking oil barely evaporated = high energy requirement.',
  } as MSEntry,

  // ── Q3: Astrophysics (Enceladus context)
  'q3a': {
    marks: 2,
    exemplar: 'Any two: (1) Moons orbit planets; stars emit own light. (2) Stars produce light by nuclear fusion; moons reflect light. (3) Stars do not orbit planets; moons are much smaller than stars.',
    keyConcepts: ['differences between moons and stars', 'natural satellites vs stellar objects'],
    keywords: ['moon', 'star', 'orbit', 'light emission', 'nuclear fusion', 'reflection'],
    feedbackHit: 'Stated two valid differences between moons and stars.',
    feedbackMiss: '(1) Moons orbit planets; stars do not orbit planets. (2) Stars produce own light; moons only reflect light.',
  } as MSEntry,
  'q3b': {
    marks: 2,
    exemplar: 'Galileo observed moons orbiting Jupiter, not Earth. If the geocentric model were true, everything would orbit Earth. Observation of bodies orbiting a planet other than Earth disproves geocentrism.',
    keyConcepts: ['geocentric model', 'observational evidence disproving geocentrism'],
    keywords: ['geocentric', 'orbit', 'Jupiter', 'moons', 'evidence', 'disprove'],
    feedbackHit: 'Correctly explained how Galileo\'s moons disproved geocentrism.',
    feedbackMiss: 'Geocentric: everything orbits Earth. Galileo showed Jupiter\'s moons orbit Jupiter → direct evidence against geocentric model.',
  } as MSEntry,
  'q3c': {
    marks: 1,
    exemplar: 'Liquid water could support life — water is essential for all known life forms. Finding it on Enceladus suggests conditions may be suitable for life.',
    keyConcepts: ['conditions for life', 'water as requirement for life'],
    keywords: ['liquid water', 'life', 'habitability', 'Enceladus', 'astrobiology'],
    feedbackHit: 'Good suggestion — liquid water is essential for life.',
    feedbackMiss: 'Water is essential for all known life. Finding it on another moon suggests it might be habitable.',
  } as MSEntry,
  'q3d': {
    marks: 2,
    exemplar: 'Any two: (1) All EM waves travel at 3 × 10⁸ m/s in vacuum. (2) All are transverse waves. (3) All can travel through a vacuum. (4) All obey v = fλ. (5) All transfer energy.',
    keyConcepts: ['shared properties of EM spectrum', 'transverse waves', 'speed in vacuum'],
    keywords: ['transverse', 'vacuum', '3 × 10⁸ m/s', 'electromagnetic', 'speed of light'],
    feedbackHit: 'Correctly stated two shared properties of all EM waves.',
    feedbackMiss: 'All EM waves: travel at c = 3 × 10⁸ m/s in vacuum; are transverse; can travel through vacuum.',
  } as MSEntry,

  // ── Q4: Motor Planning
  'q4a': {
    marks: 1,
    exemplar: 'Heat energy (from resistance in coils) OR sound energy (from mechanical vibration).',
    keyConcepts: ['wasted energy in motors', 'energy transformations'],
    keywords: ['heat', 'sound', 'wasted energy', 'motor', 'resistance'],
    feedbackHit: 'Correctly identified a form of wasted energy.',
    feedbackMiss: 'Electric motors produce waste heat (from coil resistance) and sometimes sound (from vibrations).',
  } as MSEntry,
  'q4b': {
    marks: 2,
    exemplar: 'Any valid research question linking IV (height/work done) to DV (efficiency). Example: "How does the height to which a load is lifted affect the efficiency of an electric motor?"',
    keyConcepts: ['formulating a research question', 'IV and DV'],
    keywords: ['research question', 'efficiency', 'independent variable', 'dependent variable', 'motor'],
    feedbackHit: 'Good research question — clearly links IV and DV.',
    feedbackMiss: 'Format: "How does [IV] affect [DV = efficiency]?" Both IV and DV must be named.',
  } as MSEntry,
  'q4c': {
    marks: 2,
    exemplar: 'Vary height by lifting the load to different measured heights (e.g. 10, 20, 30, 40, 50 cm) using a ruler. For each height, calculate ΔEp = mgh using the fixed mass value.',
    keyConcepts: ['varying IV', 'calculating gravitational potential energy'],
    keywords: ['height', 'ruler', 'ΔEp', 'mgh', 'useful energy', 'independent variable'],
    feedbackHit: 'Outlined how to vary height and calculate useful energy.',
    feedbackMiss: '(1) How to change height: use ruler, lift to different values. (2) Calculate useful energy: ΔEp = mgh.',
  } as MSEntry,
  'q4d': {
    marks: 3,
    exemplar: 'Circuit: Motor in series with ammeter (A). Voltmeter (V) in parallel across the motor. Both connected to power supply. 1 mark each for: motor present; ammeter in series; voltmeter in parallel across motor.',
    keyConcepts: ['circuit diagrams', 'ammeter in series', 'voltmeter in parallel'],
    keywords: ['ammeter', 'voltmeter', 'parallel', 'series', 'motor', 'circuit'],
    feedbackHit: 'Correct circuit with ammeter in series and voltmeter in parallel.',
    feedbackMiss: 'Ammeters ALWAYS in series; voltmeters ALWAYS in parallel across the component (motor).',
  } as MSEntry,
  'q4e': {
    marks: 2,
    exemplar: 'Must also measure time. Total energy = power × time = V × I × t.',
    keyConcepts: ['energy = power × time', 'measuring time'],
    keywords: ['time', 'energy', 'power', 'V × I × t', 'total energy'],
    feedbackHit: 'Correctly identified time and stated E = VIt.',
    feedbackMiss: 'Power = VI (known). But energy = power × time. Need to measure TIME. Then E = VIt.',
  } as MSEntry,

  // ── Q5: Investigation Design (14 marks rubric)
  'q5a': {
    marks: 14,
    exemplar: 'IV: voltage supplied; DV: time taken / efficiency\nCV1: mass lifted (constant — changing mass changes ΔEp, confounding results); CV2: height (constant — changing height changes useful energy output)\nMethod: set voltage, measure I and t, repeat ≥3× for ≥5 voltage values\nProcessing: ΔEp = mgh; E = VIt; efficiency = (ΔEp/E) × 100',
    keyConcepts: ['experimental design', 'justified control variables', 'efficiency from electrical and mechanical energy'],
    keywords: ['IV', 'DV', 'control variable', 'efficiency', 'mgh', 'VIt', 'method', 'validity'],
    feedbackHit: 'Well-designed investigation with clear variables, justified controls, detailed method and correct data processing.',
    feedbackMiss: 'Check: (1) Name AND justify BOTH control variables. (2) Method detailed enough to follow. (3) Include how to calculate BOTH useful energy (ΔEp = mgh) AND total energy (E = VIt).',
  } as MSEntry,

  // ── Q6: Data Processing (mass=60g for q6a; q6d for 100g)
  'q6a': {
    marks: 2,
    exemplar: 'ΔEp = mgh = 0.060 × 9.81 × 0.95 = 0.5591 J ≈ 0.56 J. Award 2 marks for correct final answer; 1 mark for correct method without correct answer.',
    keyConcepts: ['gravitational potential energy ΔEp = mgh', 'unit conversion: g→kg, cm→m'],
    keywords: ['ΔEp', 'mgh', '9.81', '0.060 kg', '0.95 m', '0.56 J'],
    feedbackHit: 'Correctly calculated GPE using ΔEp = mgh.',
    feedbackMiss: 'ΔEp = mgh. Units: m = 0.060 kg, h = 0.95 m, g = 9.81. Answer: 0.060 × 9.81 × 0.95 = 0.56 J.',
  } as MSEntry,
  'q6b': {
    marks: 2,
    exemplar: 'Mass is the IV, so voltage must be controlled. If voltage changed, power input would change, making it impossible to determine whether efficiency changes are due to mass or voltage. Constant voltage ensures validity.',
    keyConcepts: ['control variable ensures validity', 'isolating the IV'],
    keywords: ['control variable', 'voltage', 'validity', 'independent variable', 'mass', 'efficiency'],
    feedbackHit: 'Correctly explained constant voltage ensures validity by isolating mass as IV.',
    feedbackMiss: 'State what was controlled (voltage), why (to isolate mass), and what would happen if not controlled (results invalid).',
  } as MSEntry,
  'q6c': {
    marks: 3,
    exemplar: 'Table: Mass/g | Current/A | Time/s. Data: 20/0.13/4.45; 40/0.16/4.92; 60/0.19/5.38; 80/0.21/5.67; 100/0.23/6.12. 1 mark each for: correct order, correct headers, units in headers only.',
    keyConcepts: ['data organisation', 'table headers with units', 'ordering by IV'],
    keywords: ['table', 'headers', 'units', 'Mass/g', 'Current/A', 'Time/s', 'increasing order'],
    feedbackHit: 'Correctly organised data with proper headers, units, and ascending order.',
    feedbackMiss: 'Three criteria: (1) units in column headers only (e.g. Mass/g); (2) correct headers; (3) data in increasing mass order (20, 40, 60, 80, 100 g).',
  } as MSEntry,
  'q6d': {
    marks: 3,
    exemplar: 'For 100 g: ΔEp = 0.100 × 9.81 × 0.95 = 0.9320 J. Total energy = 2 × 0.23 × 6.12 = 2.815 J. Efficiency = (0.9320 ÷ 2.815) × 100 = 33.1%.',
    keyConcepts: ['total energy = VIt', 'efficiency calculation'],
    keywords: ['V × I × t', 'total energy', 'efficiency', '2V', '0.23A', '6.12s', '33.1%'],
    feedbackHit: 'Correctly calculated total energy and efficiency for 100 g trial.',
    feedbackMiss: 'Total energy E = VIt = 2 × 0.23 × 6.12. ΔEp = 0.100 × 9.81 × 0.95. Efficiency = (ΔEp/E) × 100.',
  } as MSEntry,

  // ── Q7: Projectile Motion
  'q7a': { type: 'mcq', correct: 3 } as MCQEntry,
  'q7b': {
    marks: 2,
    exemplar: 'Height at 0°: ≈ 5.1 ± 0.1 m. Angle at height = 0 m: ≈ 82 ± 2°. Both read from line of best fit on Graph D.',
    keyConcepts: ['y-intercept gives DV at IV=0', 'x-intercept gives IV at DV=0'],
    keywords: ['intercept', 'y-intercept', 'x-intercept', 'graph reading', 'line of best fit'],
    feedbackHit: 'Correctly read both intercept values from the graph.',
    feedbackMiss: 'Read from the LINE OF BEST FIT, not data points. y-intercept = height at 0°; x-intercept = angle at height = 0.',
  } as MSEntry,
  'q7c': {
    marks: 3,
    exemplar: 'Partially correct: height does decrease as angle increases (direction correct). NOT inverse proportion: doubling angle does not halve height. Graph has non-zero y-intercept (5.1 m at 0°) — inverse proportion must pass through origin.',
    keyConcepts: ['inverse proportion test', 'y-intercept rules out inverse proportion'],
    keywords: ['inverse proportion', 'intercept', 'doubling', 'halving', 'prediction', 'validity'],
    feedbackHit: 'Good — identified direction correct but inverse proportion not supported.',
    feedbackMiss: 'Two parts: (1) Does height decrease? Yes ✓. (2) Is it inverse proportion? No — check: doubling angle halves height? And graph passes through origin? Both must be true for inverse proportion.',
  } as MSEntry,
  'q7d': { type: 'mcq', correct: 1 } as MCQEntry,
  'q7e': {
    marks: 1,
    exemplar: 'Repeat each trial multiple times and calculate a mean. OR: Use a camera/video to measure height more accurately.',
    keyConcepts: ['repeated trials reduce random errors', 'identifying outliers'],
    keywords: ['repeated trials', 'mean', 'reliability', 'outlier', 'random error'],
    feedbackHit: 'Good suggestion — repeated trials reduce outliers.',
    feedbackMiss: 'Outliers arise from random errors. Repeat each measurement and take a mean to reduce their impact.',
  } as MSEntry,
  'q7f': { type: 'mcq', correct: 0 } as MCQEntry,
  'q7g': {
    marks: 2,
    exemplar: 'Shape: streamlined to reduce cross-sectional area and air particle collisions. Size: smaller object → less surface area → fewer air particle collisions. Material: denser (more mass) → air resistance force has smaller proportional effect.',
    keyConcepts: ['streamlining reduces drag', 'surface area and air resistance', 'particle theory of drag'],
    keywords: ['streamlined', 'surface area', 'air particles', 'collisions', 'dense', 'inertia', 'particle theory'],
    feedbackHit: 'Good — linked shape/size/material to air resistance via particle theory.',
    feedbackMiss: 'Link each to particle theory: air resistance = collisions of air particles. Fewer collisions (smaller, streamlined) = less drag. More mass = less effect per unit mass.',
  } as MSEntry,
  'q7h': {
    marks: 3,
    exemplar: 'DV: time of flight OR horizontal range. CV1: catapult tension / launch speed (affects initial KE and range). CV2: mass of ball (different mass → different inertia → different motion).',
    keyConcepts: ['extension investigation', 'identifying control variables', 'projectile motion variables'],
    keywords: ['time of flight', 'horizontal range', 'control variable', 'launch speed', 'mass'],
    feedbackHit: 'Good extension — valid DV and two appropriate control variables.',
    feedbackMiss: 'Choose a measurable DV (time of flight or range). Then: what else (besides angle) affects it? Those are CVs.',
  } as MSEntry,

  // ── Q8: Ultrasound (speed=1540 m/s, t=1.2×10⁻⁴ s → distance=9.2 cm)
  'q8a': {
    marks: 3,
    exemplar: 'Total distance = 1540 × (1.2 × 10⁻⁴) = 0.1848 m. Distance to stone = 0.1848 ÷ 2 = 0.0924 m = 9.2 cm. 1 mark for d=vt; 1 for halving; 1 for correct cm answer.',
    keyConcepts: ['wave speed formula d=vt', 'echo travels two ways so halve', 'unit conversion m to cm'],
    keywords: ['d = vt', 'echo', 'reflection', 'half', '1540 m/s', '1.2 × 10⁻⁴', '9.2 cm'],
    feedbackHit: 'Correctly applied d = vt and halved for one-way distance.',
    feedbackMiss: 'Two steps: (1) d = v × t = 1540 × 1.2 × 10⁻⁴ = 0.1848 m total. (2) Halve for one-way distance = 0.0924 m = 9.2 cm.',
  } as MSEntry,
  'q8b': {
    marks: 16,
    exemplar: '(1) Wave image creation: Ultrasound — reflected sound waves; time delay creates image. X-rays — differential absorption of EM waves; shadow image on detector.\n(2) Health: Ultrasound — harmless, no ionising radiation, safe for foetus. X-rays — ionising, increases cancer risk, particularly harmful to foetus; shielding reduces risk.\n(3) Economic: Ultrasound — $40k machine, $500 scan (expensive). X-rays — $30k machine, $150 image (cheaper, more patients). Economic savings may be offset by health costs.\n(4) Ethical: X-rays on foetus conflict with "do no harm"; not providing care also ethical issue; ultrasound ethically preferable.\n(5) Conclusion: Ultrasound better for pregnant women — safe, detailed soft-tissue images, no radiation risk.',
    keyConcepts: ['ultrasound vs x-ray image formation', 'ionising radiation risks', 'ethics in medicine', 'economic analysis'],
    keywords: ['ultrasound', 'x-ray', 'reflection', 'absorption', 'ionising', 'cancer risk', 'foetus', 'ethics', 'cost', 'evaluate'],
    feedbackHit: 'Strong response addressing wave physics, health, economics, ethics, and justified conclusion.',
    feedbackMiss: 'Five components required: (1) how each creates images; (2) health impacts; (3) economic pros/cons; (4) ethical point; (5) justified conclusion.',
  } as MSEntry,
  'q8c': {
    marks: 5,
    exemplar: 'Concern (4 marks): selective termination changes sex ratio above 105; imbalanced ratio → fewer family structures; workforce problems; difficulty finding partners; demographic decline.\nEthical action (1 mark): legislation preventing staff revealing foetal sex OR public education campaigns.',
    keyConcepts: ['sex ratio imbalance and societal consequences', 'medical ethics', 'government ethical action'],
    keywords: ['sex ratio', 'termination', 'legislation', 'ethics', 'education', 'workforce', 'population'],
    feedbackHit: 'Good discussion of societal consequences and a specific ethical suggestion.',
    feedbackMiss: 'Discuss: social (finding partners), economic (workforce), demographic (population). Ethical action must be something government can DO.',
  } as MSEntry,

}
