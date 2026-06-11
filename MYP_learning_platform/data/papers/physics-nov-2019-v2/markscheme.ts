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

  // ── Q1: Momentum ──
  q1a: {
    marks: 2,
    exemplar: 'p: Ns or kg m s⁻¹ [1]. m: kg [1]. v: m s⁻¹ [1]. Two correct = 1 mark; all correct = 2 marks.',
    keyConcepts: ['momentum unit Ns or kg m s⁻¹', 'mass unit kg', 'velocity unit m s⁻¹'],
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹'],
    feedbackHit: 'All three SI units correctly stated.',
    feedbackMiss: 'p: Ns or kg m s⁻¹. m: kg. v: m s⁻¹.',
  } as MSEntry,

  q1b: {
    marks: 1,
    exemplar: 'The van has a greater mass (than the dog).',
    keyConcepts: ['greater mass → greater momentum at same speed'],
    keywords: ['greater mass', 'heavier'],
    feedbackHit: 'Correctly identified greater mass.',
    feedbackMiss: 'p = mv; same speed → greater mass = greater momentum. Van has much greater mass than dog.',
  } as MSEntry,

  q1c: {
    marks: 3,
    exemplar: 'Ball has forward momentum [1]. A force is needed to change momentum [1]. No net force acts on ball → velocity unchanged (Newton\'s 1st law / inertia) [1].',
    keyConcepts: ['forward momentum', 'force to change momentum', 'Newton\'s first law'],
    keywords: ['momentum', 'forward', 'force', 'Newton', 'inertia'],
    feedbackHit: 'Newton\'s 1st law correctly applied.',
    feedbackMiss: '3 marks: (1) ball has forward momentum; (2) force needed to change momentum; (3) no force acts → continues forward.',
  } as MSEntry,

  q1d: {
    marks: 1,
    exemplar: 'Friction between box and van floor prevents box from sliding.',
    keyConcepts: ['friction prevents motion'],
    keywords: ['friction', 'box', 'floor', 'prevents'],
    feedbackHit: 'Correctly identified friction.',
    feedbackMiss: 'Friction between box and floor acts as a retarding force.',
  } as MSEntry,

  // ── Q2: Electrostatic precipitator ──
  q2a: {
    marks: 3,
    exemplar: 'P = IV OR I = P/V [1]. I = 1320/220 [1]. = 6 A [1].',
    keyConcepts: ['P = IV', 'I = P/V', 'current = 6 A'],
    keywords: ['P = IV', '1320', '220', '6', 'A', 'ampere'],
    feedbackHit: 'Correctly applied P = IV → I = 6 A.',
    feedbackMiss: 'I = P/V = 1320/220 = 6 A. Include the unit: amperes (A).',
  } as MSEntry,

  q2b: {
    marks: 2,
    exemplar: 'Soot particles are negatively charged [1]. Opposite charges attract / negative soot attracted to positive plate [1].',
    keyConcepts: ['negatively charged soot', 'opposite charges attract'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive plate'],
    feedbackHit: 'Correctly explained electrostatic attraction.',
    feedbackMiss: '(1) soot is negatively charged; (2) opposite charges attract → sticks to positive plate.',
  } as MSEntry,

  q2c: {
    marks: 2,
    exemplar: 'Soot adds negative charge, reducing net positive charge on plate [1]. Electric field / attractive force weakens → fewer particles collected [1].',
    keyConcepts: ['neutralization reduces field', 'weaker attraction'],
    keywords: ['neutralize', 'weaker', 'electric field', 'clean'],
    feedbackHit: 'Correctly explained how accumulated soot weakens the electric field.',
    feedbackMiss: 'Negative soot cancels plate\'s positive charge → weaker field → less attraction → needs cleaning.',
  } as MSEntry,

  // ── Q3: RFID ──
  q3a: {
    marks: 1,
    exemplar: 'Infrared between Microwave and Visible; Ultraviolet between Visible and X-rays. Both correct for 1 mark.',
    keyConcepts: ['EM spectrum order'],
    keywords: ['infrared', 'ultraviolet', 'spectrum'],
    feedbackHit: 'Both correctly placed.',
    feedbackMiss: 'Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma.',
  } as MSEntry,

  q3b: {
    marks: 1,
    exemplar: 'Any one: radio waves penetrate packaging/walls/shelving better; infrared requires line of sight; radio waves have longer range; infrared absorbed by opaque materials.',
    keyConcepts: ['radio penetrates materials', 'infrared needs line of sight'],
    keywords: ['penetrate', 'packaging', 'line of sight', 'range'],
    feedbackHit: 'Valid advantage of radio over infrared for warehouse RFID.',
    feedbackMiss: 'Radio waves pass through packaging and shelves; infrared needs direct line of sight and is blocked by objects.',
  } as MSEntry,

  q3c: {
    marks: 3,
    exemplar: 'v = fλ [1]. = 150 000 × 2000 [1]. = 3.00 × 10⁸ m s⁻¹ [1].',
    keyConcepts: ['v = fλ', 'speed of light = 3.00 × 10⁸'],
    keywords: ['v = fλ', '150 000', '2000', '3.00 × 10⁸', 'scientific notation'],
    feedbackHit: 'Correctly applied v = fλ in scientific notation.',
    feedbackMiss: 'v = fλ = 150 000 × 2000 = 300 000 000 = 3.00 × 10⁸ m s⁻¹.',
  } as MSEntry,

  q3d: {
    marks: 2,
    exemplar: 'No internal battery [1]. Battery would deplete / cost more / add bulk to tag [1].',
    keyConcepts: ['no battery needed', 'batteries run flat'],
    keywords: ['battery', 'no power source', 'run out', 'bulk', 'cost'],
    feedbackHit: 'Valid advantage of induction over battery.',
    feedbackMiss: 'No battery = never runs out; batteries need replacement; add cost/size to tags.',
  } as MSEntry,

  q3e: {
    marks: 3,
    exemplar: 'AC in scanner coil → alternating magnetic field [1]. Changing field reaches RFID coil [1]. Changing field induces EMF/current in RFID coil [1].',
    keyConcepts: ['AC → alternating B-field', 'field reaches RFID', 'induction of EMF'],
    keywords: ['alternating', 'magnetic field', 'changing', 'RFID', 'induce', 'EMF', 'current'],
    feedbackHit: 'All 3 induction steps correct.',
    feedbackMiss: '3 steps: (1) AC → changing B-field; (2) field reaches RFID; (3) changing field induces EMF in RFID coil.',
  } as MSEntry,

  // ── Q4: Mirrors ──
  q4a: {
    marks: 1,
    exemplar: 'How does the angle between 2 plane mirrors affect the number of virtual images?',
    keyConcepts: ['research question', 'IV = angle', 'DV = images'],
    keywords: ['angle', 'mirrors', 'images', 'research question'],
    feedbackHit: 'Research question names IV and DV.',
    feedbackMiss: 'Must name IV (angle between mirrors) and DV (number of images).',
  } as MSEntry,

  q4b: {
    marks: 3,
    exemplar: 'IV = angle [1]. DV = number of images [1]. Controls = object, position, size, shape (two correct = 1 mark) [1].',
    keyConcepts: ['IV = angle', 'DV = images', 'controls'],
    keywords: ['independent', 'dependent', 'control', 'angle', 'images'],
    feedbackHit: 'Correct variable classification.',
    feedbackMiss: 'IV = angle; DV = number of images; controls = everything else.',
  } as MSEntry,

  q4c: {
    marks: 1,
    exemplar: 'Protractor.',
    keyConcepts: ['protractor measures angle'],
    keywords: ['protractor'],
    feedbackHit: 'Correctly identified protractor.',
    feedbackMiss: 'A protractor measures the angle between the mirrors.',
  } as MSEntry,

  q4d: {
    marks: 1,
    exemplar: '≈ 60° (accept 55°–65°).',
    keyConcepts: ['3 images ≈ 60°'],
    keywords: ['60', 'three images'],
    feedbackHit: 'Correct graph reading.',
    feedbackMiss: 'Follow y=3 across to the curve, then read angle on x-axis (≈ 60°).',
  } as MSEntry,

  q4e: {
    marks: 3,
    exemplar: 'As angle increases, images decrease ✓ [1]. State N × angle = constant for inverse proportion [1]. Data test shows not exactly constant → approximately inversely proportional [1].',
    keyConcepts: ['inverse trend', 'N × angle test', 'approximately inversely proportional'],
    keywords: ['inverse', 'N × angle', 'constant', 'not exactly'],
    feedbackHit: 'Trend, proportionality test, and conclusion all correct.',
    feedbackMiss: '(1) Confirm inverse trend; (2) state N×angle=constant condition; (3) test with data — not constant → not perfectly inverse.',
  } as MSEntry,

  q4f: {
    marks: 2,
    exemplar: 'Number of images can only be a whole number (discrete data) [1]. Bar chart is appropriate for discrete data; line graph implies continuous [1].',
    keyConcepts: ['discrete data', 'bar chart'],
    keywords: ['integer', 'discrete', 'bar chart'],
    feedbackHit: 'Correctly justified for discrete data.',
    feedbackMiss: 'Images are whole numbers (discrete) → bar chart. Line graph implies continuous (e.g. 3.5 images) which is impossible.',
  } as MSEntry,

  q4g: {
    marks: 1,
    exemplar: 'Second student\'s data: more data points / at regular intervals.',
    keyConcepts: ['more data points better'],
    keywords: ['second student', 'more data', 'regular intervals'],
    feedbackHit: 'Correct with valid reason.',
    feedbackMiss: 'More data points at regular intervals → easier to identify trend.',
  } as MSEntry,

  // ── Q5: Speed of sound ──
  q5a: {
    marks: 3,
    exemplar: 'Total distance = 2 × 90 = 180 m [1]. Speed = 180 / 0.55 [1]. = 327 ≈ 330 m s⁻¹ (2 s.f.) [1].',
    keyConcepts: ['total distance = 2 × wall distance', 'speed = d/t', '330 m s⁻¹ (2 s.f.)'],
    keywords: ['180', '0.55', '330', '2 s.f.', 'm s⁻¹'],
    feedbackHit: 'Correct: 180 m / 0.55 s = 327 ≈ 330 ms⁻¹.',
    feedbackMiss: 'Sound travels 90 m there + 90 m back = 180 m. Speed = 180/0.55 = 327 ≈ 330 ms⁻¹ (2 s.f.).',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Repeat measurements and average [1] → reduces random timing errors [1]. Increase distance to wall [1] → small timing errors less significant relative to longer time [1].',
    keyConcepts: ['repeat and average', 'increase distance'],
    keywords: ['repeat', 'average', 'distance', 'random error', 'reaction time'],
    feedbackHit: 'Two improvements described and justified.',
    feedbackMiss: 'No new equipment: (1) repeat + average; (2) increase wall distance.',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: 'Read t₁ ≈ 0.70 s and t₂ ≈ 2.60 s [1]. Time = 2.60 − 0.70 = 1.90 ± 0.06 s [1].',
    keyConcepts: ['read peaks', 'subtract to find echo time'],
    keywords: ['0.70', '2.60', '1.90', '640 m'],
    feedbackHit: 'Correct peak readings and subtraction.',
    feedbackMiss: 'Read first sound time (≈0.70 s) and echo time (≈2.60 s). Subtract: 1.90 s.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Column headers Distance/m AND Time/s [1]. Data in order [1]. Units in headings only [1]. ECF from (c) for 640 m row [1].',
    keyConcepts: ['table format', 'ordered data'],
    keywords: ['table', 'distance', 'time', 'headers', 'order'],
    feedbackHit: 'Well-structured table.',
    feedbackMiss: 'Headers with units; data in ascending order; units in headings not cells; ECF from (c).',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Gradient of LOBF [1]. Speed = 330–355 m s⁻¹ [1].',
    keyConcepts: ['gradient = speed'],
    keywords: ['gradient', 'LOBF', '330', '355'],
    feedbackHit: 'Speed from gradient correctly calculated.',
    feedbackMiss: 'Speed = Δdistance/Δtime from LOBF. Answer ≈ 330–355 ms⁻¹.',
  } as MSEntry,

  q5f: {
    marks: 2,
    exemplar: 'Anomalous point at 400 m / ≈1 s [1]. Time should be higher [1].',
    keyConcepts: ['anomalous point', 'time too low'],
    keywords: ['anomalous', '400 m', 'higher', 'outlier'],
    feedbackHit: 'Outlier identified with correct direction.',
    feedbackMiss: '400 m / ~1 s is below the LOBF — actual time should be higher.',
  } as MSEntry,

  q5g: {
    marks: 3,
    exemplar: 'Sound faster at higher temperature [1]. Higher T → particles have more kinetic energy / move faster [1]. Shorter time between collisions / faster energy transfer between particles [1].',
    keyConcepts: ['higher T → faster sound', 'kinetic energy', 'collision frequency'],
    keywords: ['faster', 'temperature', 'kinetic energy', 'particles', 'collisions'],
    feedbackHit: 'Temperature-sound relationship explained with particle motion.',
    feedbackMiss: '(1) Sound faster at higher T; (2) higher T → faster particles; (3) faster collisions → quicker energy transfer.',
  } as MSEntry,

  // ── Q6: Spring oscillations ──
  q6a: {
    marks: 14,
    exemplar: 'IV = spring constant/stiffness; DV = time period; 2 CVs (mass AND amplitude) with justification; if/then/because hypothesis; ≥5 springs × 3 trials; mean period; clear method.',
    keyConcepts: ['IV = spring constant', 'DV = time period', 'CV = mass, amplitude', 'hypothesis', 'sufficient data', 'method'],
    keywords: ['spring constant', 'stiffness', 'time period', 'control', 'hypothesis', 'if', 'then', 'because', 'trials', 'mean'],
    feedbackHit: 'Complete experimental design with all elements.',
    feedbackMiss: 'IV (spring constant), DV (period), 2 justified CVs, testable hypothesis, ≥5 springs × 3 trials, mean, replicable method.',
  } as MSEntry,

  q6b: {
    marks: 5,
    exemplar: 'IV identified (≠ spring constant, e.g. mass) [1]. DV = time period [1]. Research question stated [1]. Spring constant as control [1]. One other CV (amplitude) [1].',
    keyConcepts: ['new IV ≠ spring constant', 'DV = time period', 'spring constant as control'],
    keywords: ['mass', 'time period', 'research question', 'spring constant', 'control', 'amplitude'],
    feedbackHit: 'Valid second investigation with different IV and appropriate controls.',
    feedbackMiss: 'IV must differ from spring constant. Good choice: mass. Spring constant becomes a CV here.',
  } as MSEntry,

  // ── Q7: Stopping distance on ice ──
  q7a: {
    marks: 4,
    exemplar: 'v² = u² + 2as [1]. 0 = 24² + 2×(−4)×s → 0 = 576 − 8s [1]. s = 72 [1]. m [1].',
    keyConcepts: ['v² = u² + 2as', 'u = 24 m/s', 'a = 4 m/s²', 's = 72 m'],
    keywords: ['v² = u² + 2as', '24', '576', '4', '72', 'metres'],
    feedbackHit: 'Correct kinematics → 72 m.',
    feedbackMiss: 'v²=u²+2as; v=0, u=24, a=4: s = 576/(2×4) = 576/8 = 72 m.',
  } as MSEntry,

  q7b: {
    marks: 2,
    exemplar: 'Cell phone → driver; Rain → environmental; Worn tyres → car; Faulty brakes → car; Alcohol → driver; Poor road → environmental. (2 correct = 1; all correct = 2)',
    keyConcepts: ['driver/environmental/car classification'],
    keywords: ['driver', 'environmental', 'car'],
    feedbackHit: 'All six correctly classified.',
    feedbackMiss: 'Driver: phone, alcohol. Car: tyres, brakes. Environmental: rain, road surface.',
  } as MSEntry,

  q7c: {
    marks: 4,
    exemplar: 'Alcohol → increases reaction time [1] → increases thinking distance [1]. Poor road → less friction [1] → longer braking distance [1].',
    keyConcepts: ['alcohol → thinking distance', 'poor surface → braking distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'braking distance'],
    feedbackHit: 'Each factor linked to correct stopping distance component.',
    feedbackMiss: 'Alcohol → reaction time → thinking distance. Poor road → friction → braking distance.',
  } as MSEntry,

  // ── Q8: Drone delivery ──
  q8a: {
    marks: 14,
    exemplar: 'Mark against rubric: Safety technology [up to 4]; Society advantages/disadvantages [up to 4]; Economic implications [up to 4]; Concluding appraisal [up to 2]. Total 14.',
    keyConcepts: ['drone safety', 'societal impacts', 'economic implications', 'appraisal'],
    keywords: ['safety', 'GPS', 'sensors', 'society', 'noise', 'privacy', 'jobs', 'cost', 'conclude', 'evaluate'],
    feedbackHit: 'Comprehensive evaluation across all four areas with justified conclusion.',
    feedbackMiss: '4 areas: (1) safety features; (2) societal advantages AND disadvantages; (3) economic implications; (4) justified conclusion.',
  } as MSEntry,

}
