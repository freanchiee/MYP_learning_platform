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

  // ── Q1: Nuclear Fission (energy req = 1.05 × 10¹⁰ J; mass ≈ 0.128 g)
  'q1a': { type: 'mcq', correct: 0 } as MCQEntry,
  'q1b': { type: 'mcq', correct: 2 } as MCQEntry,
  'q1c': {
    marks: 2,
    exemplar: 'Half-life ≈ 18.5 ± 0.5 minutes. Read from graph: initial activity ≈ 1000 Bq; half = 500 Bq; read time at 500 Bq ≈ 18–19 minutes.',
    keyConcepts: ['half-life is time for activity to halve', 'reading from activity-time graph'],
    keywords: ['half-life', 'activity', 'radioactive decay', 'barium-141', '500 Bq'],
    feedbackHit: 'Correctly read half-life from the decay graph.',
    feedbackMiss: 'Half-life = time for activity to fall to half. Start at 1000 Bq, find 500 Bq, read time from graph.',
  } as MSEntry,
  'q1d': {
    marks: 2,
    exemplar: 'Energy needed = 1.05 × 10¹⁰ J. Energy per g = 82 000 MJ = 8.2 × 10¹⁰ J/g. Mass = (1.05 × 10¹⁰) ÷ (8.2 × 10¹⁰) = 0.128 g (accept 0.12–0.13 g).',
    keyConcepts: ['unit conversion MJ to J', 'dividing energy values to find mass'],
    keywords: ['energy per gram', '1.05 × 10¹⁰', 'unit conversion', 'MJ', '0.128 g'],
    feedbackHit: 'Correctly converted units and calculated uranium mass.',
    feedbackMiss: 'Convert 82 000 MJ to J (× 10⁶ = 8.2 × 10¹⁰ J). Mass = 1.05 × 10¹⁰ ÷ 8.2 × 10¹⁰ = 0.128 g.',
  } as MSEntry,
  'q1e': {
    marks: 1,
    exemplar: 'Collaboration allows scientists with different expertise (physics, chemistry, engineering) to complement each other\'s skills, enabling more complex problems to be solved.',
    keyConcepts: ['collaboration in science', 'interdisciplinary teamwork'],
    keywords: ['collaboration', 'expertise', 'different skills', 'physics', 'chemistry', 'engineering'],
    feedbackHit: 'Good suggestion about scientific collaboration.',
    feedbackMiss: 'Think about what different disciplines contribute and why diverse expertise leads to better scientific outcomes.',
  } as MSEntry,

  // ── Q2: Thermal Energy (same graph readings)
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
    exemplar: 'Similarity: both are vaporisation (liquid → gas). Difference: evaporation occurs at any temperature from the surface; boiling occurs at a fixed temperature throughout the liquid.',
    keyConcepts: ['evaporation vs boiling', 'surface vs bulk vaporisation'],
    keywords: ['evaporation', 'boiling', 'vaporisation', 'surface', 'temperature', 'bubbles'],
    feedbackHit: 'Good comparison — valid similarity and clear difference.',
    feedbackMiss: 'Need similarity (both vaporisation) AND difference (evaporation at any temperature from surface; boiling at fixed temperature throughout).',
  } as MSEntry,
  'q2c': {
    marks: 2,
    exemplar: 'No cooling effect: cooking oil. Greatest cooling effect: ethanol.',
    keyConcepts: ['evaporation causes cooling', 'latent heat varies by liquid'],
    keywords: ['cooking oil', 'ethanol', 'cooling effect', 'evaporation', 'graph reading'],
    feedbackHit: 'Correctly identified cooking oil (no cooling) and ethanol (greatest cooling).',
    feedbackMiss: 'Cooking oil line stays flat (no cooling). Ethanol shows the greatest temperature drop.',
  } as MSEntry,
  'q2d': {
    marks: 1,
    exemplar: 'Approximately 21°C (accept 20–22°C). Cooking oil did not evaporate, so its temperature represents ambient room temperature.',
    keyConcepts: ['reference substance at ambient temperature', 'reading from graph'],
    keywords: ['laboratory temperature', 'ambient', 'cooking oil', 'graph'],
    feedbackHit: 'Correctly identified laboratory temperature.',
    feedbackMiss: 'Cooking oil does not evaporate → its temperature = room temperature. Read the steady-state temperature of cooking oil line.',
  } as MSEntry,
  'q2e': {
    marks: 2,
    exemplar: 'Student B is correct. Cooking oil required the most energy to evaporate (it barely evaporated, so no cooling effect). Ethanol evaporated readily (greatest cooling effect), meaning lower energy barrier to vaporisation.',
    keyConcepts: ['latent heat of vaporisation', 'cooling effect linked to evaporation readiness'],
    keywords: ['latent heat', 'cooking oil', 'ethanol', 'cooling effect', 'energy'],
    feedbackHit: 'Correctly justified Student B using graph evidence.',
    feedbackMiss: 'Greater cooling = evaporates more readily = less energy required. Cooking oil barely evaporated = high energy requirement.',
  } as MSEntry,

  // ── Q3: Astrophysics (Triton context)
  'q3a': {
    marks: 2,
    exemplar: 'Any two: (1) Moons orbit planets; stars emit own light. (2) Stars produce light by nuclear fusion; moons reflect light. (3) Stars are not in orbit around planets.',
    keyConcepts: ['differences between moons and stars', 'natural satellites vs stellar objects'],
    keywords: ['moon', 'star', 'orbit', 'light emission', 'nuclear fusion', 'reflection'],
    feedbackHit: 'Stated two valid differences.',
    feedbackMiss: '(1) Moons orbit planets; stars do not orbit planets. (2) Stars produce own light by fusion; moons only reflect light.',
  } as MSEntry,
  'q3b': {
    marks: 2,
    exemplar: 'Galileo observed Jupiter\'s moons orbiting Jupiter, not Earth. This showed not everything orbits Earth, directly contradicting the geocentric model.',
    keyConcepts: ['geocentric model', 'observational evidence disproving geocentrism'],
    keywords: ['geocentric', 'orbit', 'Jupiter', 'moons', 'evidence', 'disprove'],
    feedbackHit: 'Correctly explained how Galileo\'s observations disproved geocentrism.',
    feedbackMiss: 'Geocentric: everything orbits Earth. Jupiter\'s moons orbit Jupiter → not everything orbits Earth → geocentric model is wrong.',
  } as MSEntry,
  'q3c': {
    marks: 1,
    exemplar: 'Liquid water could support life — water is essential for all known life forms. Finding it on Triton suggests conditions may be suitable for life.',
    keyConcepts: ['conditions for life', 'water as requirement for life'],
    keywords: ['liquid water', 'life', 'habitability', 'Triton', 'astrobiology'],
    feedbackHit: 'Good suggestion — liquid water is essential for life.',
    feedbackMiss: 'Water is essential for all known life. Finding it on another world suggests it might support life.',
  } as MSEntry,
  'q3d': {
    marks: 2,
    exemplar: 'Any two: (1) All EM waves travel at 3 × 10⁸ m/s in vacuum. (2) All are transverse waves. (3) All can travel through vacuum. (4) All obey v = fλ.',
    keyConcepts: ['shared properties of EM spectrum', 'transverse waves', 'speed in vacuum'],
    keywords: ['transverse', 'vacuum', '3 × 10⁸ m/s', 'electromagnetic', 'speed of light'],
    feedbackHit: 'Correctly stated two shared properties of all EM waves.',
    feedbackMiss: 'All EM waves: travel at c = 3 × 10⁸ m/s; are transverse; can travel through vacuum.',
  } as MSEntry,

  // ── Q4: Motor Planning
  'q4a': {
    marks: 1,
    exemplar: 'Heat energy (from coil resistance) OR sound energy (from vibration).',
    keyConcepts: ['wasted energy in motors', 'energy transformations'],
    keywords: ['heat', 'sound', 'wasted energy', 'motor', 'resistance'],
    feedbackHit: 'Correctly identified a wasted energy form.',
    feedbackMiss: 'Electric motors waste energy as heat (coil resistance) and sometimes sound (vibrations).',
  } as MSEntry,
  'q4b': {
    marks: 2,
    exemplar: 'Valid research question linking height/work done (IV) to efficiency (DV). Example: "How does the height to which a load is lifted affect the efficiency of an electric motor?"',
    keyConcepts: ['research question', 'IV and DV'],
    keywords: ['research question', 'efficiency', 'independent variable', 'dependent variable'],
    feedbackHit: 'Good research question — IV and DV clearly named.',
    feedbackMiss: '"How does [IV] affect [DV = efficiency]?" Both must be named.',
  } as MSEntry,
  'q4c': {
    marks: 2,
    exemplar: 'Vary height by lifting load to different measured heights (e.g. 10–50 cm) with a ruler. For each height, calculate ΔEp = mgh using the fixed mass.',
    keyConcepts: ['varying IV', 'calculating GPE'],
    keywords: ['height', 'ruler', 'ΔEp', 'mgh', 'useful energy'],
    feedbackHit: 'Outlined how to vary height and calculate useful energy.',
    feedbackMiss: '(1) Change height using a ruler. (2) Calculate ΔEp = mgh for each height.',
  } as MSEntry,
  'q4d': {
    marks: 3,
    exemplar: 'Circuit: motor in series with ammeter; voltmeter in parallel across motor; connected to power supply.',
    keyConcepts: ['circuit diagrams', 'ammeter in series', 'voltmeter in parallel'],
    keywords: ['ammeter', 'voltmeter', 'parallel', 'series', 'motor', 'circuit'],
    feedbackHit: 'Correct circuit.',
    feedbackMiss: 'Ammeters in series; voltmeters in parallel across the motor.',
  } as MSEntry,
  'q4e': {
    marks: 2,
    exemplar: 'Must also measure time. Total energy = power × time = V × I × t.',
    keyConcepts: ['energy = power × time', 'measuring time'],
    keywords: ['time', 'energy', 'power', 'V × I × t', 'total energy'],
    feedbackHit: 'Correctly identified time and stated E = VIt.',
    feedbackMiss: 'Power = VI. Energy = power × time. Measure TIME. E = VIt.',
  } as MSEntry,

  // ── Q5: Investigation Design
  'q5a': {
    marks: 14,
    exemplar: 'IV: voltage supplied; DV: time / efficiency\nCV1: mass (constant — changing mass changes ΔEp); CV2: height (constant — changing height changes useful energy)\nMethod: set voltage, measure I and t, repeat 3× for ≥5 voltage values\nProcessing: ΔEp = mgh; E = VIt; efficiency = (ΔEp/E) × 100',
    keyConcepts: ['experimental design', 'justified CVs', 'efficiency from electrical and mechanical energy'],
    keywords: ['IV', 'DV', 'control variable', 'efficiency', 'mgh', 'VIt', 'method', 'validity'],
    feedbackHit: 'Well-designed investigation — clear variables, justified controls, detailed method, correct processing.',
    feedbackMiss: 'Check: (1) Name AND justify BOTH CVs. (2) Method detailed and followable. (3) Include both ΔEp = mgh and E = VIt in processing.',
  } as MSEntry,

  // ── Q6: Data Processing (mass=45g for q6a; q6d for 75g)
  'q6a': {
    marks: 2,
    exemplar: 'ΔEp = mgh = 0.045 × 9.81 × 0.95 = 0.4190 J ≈ 0.42 J. Award 2 marks for correct answer; 1 mark for correct method.',
    keyConcepts: ['gravitational potential energy ΔEp = mgh', 'unit conversion: g→kg, cm→m'],
    keywords: ['ΔEp', 'mgh', '9.81', '0.045 kg', '0.95 m', '0.42 J'],
    feedbackHit: 'Correctly calculated GPE.',
    feedbackMiss: 'ΔEp = mgh. m = 0.045 kg, h = 0.95 m, g = 9.81. Answer: 0.045 × 9.81 × 0.95 = 0.42 J.',
  } as MSEntry,
  'q6b': {
    marks: 2,
    exemplar: 'Mass is the IV, so voltage must be controlled. If voltage varied, power input would change, making it impossible to attribute efficiency changes to mass alone.',
    keyConcepts: ['control variable ensures validity', 'isolating the IV'],
    keywords: ['control variable', 'voltage', 'validity', 'independent variable', 'mass'],
    feedbackHit: 'Correctly explained constant voltage ensures validity.',
    feedbackMiss: 'State: what was controlled (voltage), why (to isolate mass as IV), consequence if not controlled (invalid results).',
  } as MSEntry,
  'q6c': {
    marks: 3,
    exemplar: 'Table: Mass/g | Current/A | Time/s. Data: 15/0.11/4.20; 30/0.14/4.72; 45/0.17/5.18; 60/0.20/5.60; 75/0.22/5.90. 1 mark each: correct order, correct headers, units in headers only.',
    keyConcepts: ['data organisation', 'table headers with units', 'ordering by IV'],
    keywords: ['table', 'headers', 'units', 'Mass/g', 'Current/A', 'Time/s', 'increasing order'],
    feedbackHit: 'Correctly organised data with proper headers, units, and ascending order.',
    feedbackMiss: 'Three criteria: (1) units in headers only (Mass/g); (2) correct headers; (3) data in ascending mass order (15, 30, 45, 60, 75 g).',
  } as MSEntry,
  'q6d': {
    marks: 3,
    exemplar: 'For 75 g: ΔEp = 0.075 × 9.81 × 0.95 = 0.6985 J. Total energy = 2 × 0.22 × 5.90 = 2.596 J. Efficiency = (0.6985 ÷ 2.596) × 100 = 26.9%.',
    keyConcepts: ['total energy = VIt', 'efficiency calculation'],
    keywords: ['V × I × t', 'total energy', 'efficiency', '2V', '0.22A', '5.90s', '26.9%'],
    feedbackHit: 'Correctly calculated total energy and efficiency for 75 g trial.',
    feedbackMiss: 'E = VIt = 2 × 0.22 × 5.90. ΔEp = 0.075 × 9.81 × 0.95. Efficiency = (ΔEp/E) × 100.',
  } as MSEntry,

  // ── Q7: Projectile Motion
  'q7a': { type: 'mcq', correct: 3 } as MCQEntry,
  'q7b': {
    marks: 2,
    exemplar: 'Height at 0°: ≈ 5.1 ± 0.1 m. Angle at height = 0: ≈ 82 ± 2°. Both read from best-fit line on Graph D.',
    keyConcepts: ['y-intercept at IV=0', 'x-intercept at DV=0'],
    keywords: ['intercept', 'y-intercept', 'x-intercept', 'graph reading', 'line of best fit'],
    feedbackHit: 'Correctly read both intercept values.',
    feedbackMiss: 'Read from the LINE OF BEST FIT, not data points.',
  } as MSEntry,
  'q7c': {
    marks: 3,
    exemplar: 'Partially correct: height decreases as angle increases (✓). NOT inverse proportion: doubling angle ≠ halves height; graph has non-zero y-intercept (inverse proportion must pass through origin).',
    keyConcepts: ['inverse proportion test', 'y-intercept rules out inverse proportion'],
    keywords: ['inverse proportion', 'intercept', 'doubling', 'halving', 'validity'],
    feedbackHit: 'Good — direction correct but inverse proportion correctly rejected.',
    feedbackMiss: '(1) Height decreases ✓. (2) Not inverse proportion — doubling angle does not halve height; non-zero y-intercept.',
  } as MSEntry,
  'q7d': { type: 'mcq', correct: 1 } as MCQEntry,
  'q7e': {
    marks: 1,
    exemplar: 'Repeat each trial multiple times and calculate a mean.',
    keyConcepts: ['repeated trials reduce random errors', 'identifying outliers'],
    keywords: ['repeated trials', 'mean', 'reliability', 'outlier'],
    feedbackHit: 'Good — repeated trials reduce outliers.',
    feedbackMiss: 'Repeat each measurement and take a mean to reduce the impact of random errors/outliers.',
  } as MSEntry,
  'q7f': { type: 'mcq', correct: 0 } as MCQEntry,
  'q7g': {
    marks: 2,
    exemplar: 'Shape: streamlined to reduce cross-section and air particle collisions. Size: smaller reduces surface area for collisions. Material: denser (more mass) → air resistance has smaller proportional effect.',
    keyConcepts: ['streamlining reduces drag', 'particle theory of drag'],
    keywords: ['streamlined', 'surface area', 'air particles', 'collisions', 'dense', 'particle theory'],
    feedbackHit: 'Good — linked shape/size/material to air resistance via particle theory.',
    feedbackMiss: 'Air resistance = collisions of air particles. Fewer collisions (smaller, streamlined) = less drag. More mass = less effect per unit mass.',
  } as MSEntry,
  'q7h': {
    marks: 3,
    exemplar: 'DV: horizontal range OR time of flight. CV1: spring compression / launch speed (affects initial KE and range). CV2: mass of marble (different mass → different inertia).',
    keyConcepts: ['extension investigation', 'projectile motion variables'],
    keywords: ['time of flight', 'horizontal range', 'control variable', 'launch speed', 'mass'],
    feedbackHit: 'Good extension — valid DV and two appropriate CVs.',
    feedbackMiss: 'Choose DV (time of flight or range). Then identify what else (besides angle) affects it — those are CVs.',
  } as MSEntry,

  // ── Q8: Ultrasound (speed=1620 m/s, t=0.8×10⁻⁴ s → distance=6.5 cm)
  'q8a': {
    marks: 3,
    exemplar: 'Total distance = 1620 × (0.8 × 10⁻⁴) = 0.1296 m. Distance to stone = 0.1296 ÷ 2 = 0.0648 m = 6.5 cm (or 6.48 cm). 1 mark for d=vt; 1 for halving; 1 for correct cm answer.',
    keyConcepts: ['wave speed formula d=vt', 'echo travels two ways', 'unit conversion m to cm'],
    keywords: ['d = vt', 'echo', 'reflection', 'half', '1620 m/s', '0.8 × 10⁻⁴', '6.5 cm'],
    feedbackHit: 'Correctly applied d = vt and halved for one-way distance.',
    feedbackMiss: 'Two steps: (1) d = v × t = 1620 × 0.8 × 10⁻⁴ = 0.1296 m total. (2) Halve: one-way = 0.0648 m = 6.5 cm.',
  } as MSEntry,
  'q8b': {
    marks: 16,
    exemplar: '(1) Wave image creation: Ultrasound — reflected sound off tissue boundaries, time delay → image. X-rays — EM waves absorbed by bone, pass through soft tissue, shadow image.\n(2) Health: Ultrasound — harmless, no ionising radiation, safe for foetus. X-rays — ionising, increases cancer risk, especially for foetus; shielding reduces but does not eliminate.\n(3) Economic: Ultrasound — $40k machine, $500/scan (expensive). X-rays — $30k machine, $150/image (cheaper). Economic savings offset by health costs of radiation.\n(4) Ethical: X-rays risk foetal harm → "do no harm" conflict. Not providing imaging also ethical issue. Ultrasound ethically preferable.\n(5) Conclusion: Ultrasound better for pregnant women — safe, soft-tissue detail, no radiation risk.',
    keyConcepts: ['ultrasound vs x-ray image formation', 'ionising radiation', 'ethics in medicine', 'economic analysis'],
    keywords: ['ultrasound', 'x-ray', 'reflection', 'absorption', 'ionising', 'cancer risk', 'foetus', 'ethics', 'cost', 'evaluate'],
    feedbackHit: 'Strong response — wave physics, health, economics, ethics, justified conclusion.',
    feedbackMiss: 'Five components: (1) how each creates images; (2) health impacts; (3) economic pros/cons; (4) ethical point; (5) justified conclusion.',
  } as MSEntry,
  'q8c': {
    marks: 5,
    exemplar: 'Concern (4 marks): ratio above 105 implies selective terminations; social impact (fewer family structures, difficulty finding partners); economic impact (workforce imbalance); demographic impact (population decline).\nEthical action (1 mark): legislation preventing staff from revealing foetal sex OR education campaigns.',
    keyConcepts: ['sex ratio imbalance', 'societal consequences', 'government ethical action'],
    keywords: ['sex ratio', 'termination', 'legislation', 'ethics', 'education', 'workforce', 'population'],
    feedbackHit: 'Good discussion of consequences and a specific ethical suggestion.',
    feedbackMiss: 'Discuss: social, economic, demographic impacts. Ethical action = something government can implement.',
  } as MSEntry,

}
