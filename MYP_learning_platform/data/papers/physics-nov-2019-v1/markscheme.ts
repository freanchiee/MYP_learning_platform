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
    feedbackHit: 'Correctly stated all three SI units.',
    feedbackMiss: 'p: Ns or kg m s⁻¹. m: kg. v: m s⁻¹.',
  } as MSEntry,

  q1b: {
    marks: 1,
    exemplar: 'The bus has a greater mass (than the woman).',
    keyConcepts: ['greater mass → greater momentum at same speed'],
    keywords: ['greater mass', 'heavier', 'mass'],
    feedbackHit: 'Correctly identified greater mass as reason for greater momentum.',
    feedbackMiss: 'p = mv; same speed → greater mass gives greater momentum. The bus has much greater mass.',
  } as MSEntry,

  q1c: {
    marks: 3,
    exemplar: 'The ball has forward momentum [1]. A force is required to change an object\'s momentum [1]. No (net) force acts on the ball, so its velocity/momentum stays the same — Newton\'s 1st law / inertia [1].',
    keyConcepts: ['forward momentum', 'force required to change momentum', 'no net force → constant velocity', 'Newton\'s first law'],
    keywords: ['momentum', 'forward', 'force', 'change', 'Newton', 'inertia'],
    feedbackHit: 'Applied Newton\'s 1st law correctly: ball has momentum; force needed to change it; no force → rolls forward.',
    feedbackMiss: '3 marks: (1) ball moving forward at 8 ms⁻¹; (2) need a force to change momentum; (3) no force on ball → continues forward (Newton\'s 1st law).',
  } as MSEntry,

  q1d: {
    marks: 1,
    exemplar: 'Friction (between suitcase and floor prevents it from sliding forward).',
    keyConcepts: ['friction opposes motion', 'static friction'],
    keywords: ['friction', 'force', 'prevents'],
    feedbackHit: 'Correctly identified friction.',
    feedbackMiss: 'Friction between suitcase and van floor acts as a retarding force — unlike the ball, the suitcase doesn\'t roll.',
  } as MSEntry,

  // ── Q2: Air purifier ──
  q2a: {
    marks: 3,
    exemplar: 'P = IV OR I = P/V [1]. I = 1760/220 [1]. = 8 A [1].',
    keyConcepts: ['P = IV', 'I = P/V', 'current = 8 A'],
    keywords: ['P = IV', 'I = P/V', '1760', '220', '8', 'A', 'ampere'],
    feedbackHit: 'Correctly applied P = IV → I = 8 A with correct unit.',
    feedbackMiss: 'I = P/V = 1760/220 = 8 A. State the unit: A (amperes).',
  } as MSEntry,

  q2b: {
    marks: 2,
    exemplar: 'Dust particles are negatively charged [1]. Opposite charges attract / negatively charged dust is attracted to positively charged plate [1].',
    keyConcepts: ['negatively charged dust', 'opposite charges attract'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive'],
    feedbackHit: 'Correctly explained electrostatic attraction.',
    feedbackMiss: '2 steps: (1) dust is negatively charged; (2) opposite charges attract → collected on positive plate.',
  } as MSEntry,

  q2c: {
    marks: 2,
    exemplar: 'Accumulated negative charge on the plate reduces / neutralises the net positive charge [1]. Electric field weakens / attractive force decreases, so fewer particles collected [1].',
    keyConcepts: ['neutralization of plate charge', 'weaker electric field'],
    keywords: ['neutralize', 'weaker', 'electric field', 'attraction', 'clean'],
    feedbackHit: 'Correctly explained how dust weakens the electric field.',
    feedbackMiss: 'Negative dust cancels positive charge → weaker field → less attraction → needs cleaning to restore effectiveness.',
  } as MSEntry,

  // ── Q3: RFID ──
  q3a: {
    marks: 1,
    exemplar: 'Infrared between Microwave and Visible; Ultraviolet between Visible and X-rays. Both correct for 1 mark.',
    keyConcepts: ['EM spectrum order', 'infrared', 'ultraviolet'],
    keywords: ['infrared', 'ultraviolet', 'spectrum order'],
    feedbackHit: 'Correctly placed both EM types in the spectrum.',
    feedbackMiss: 'Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma.',
  } as MSEntry,

  q3b: {
    marks: 1,
    exemplar: 'Any one valid advantage: radio waves penetrate tissue/fur/skin better than infrared; infrared is absorbed by biological tissue; infrared has higher energy so could damage tissue; radio waves travel further.',
    keyConcepts: ['radio waves penetrate tissue', 'infrared absorbed by tissue'],
    keywords: ['penetrate', 'tissue', 'absorb', 'infrared', 'range'],
    feedbackHit: 'Valid scientific advantage of radio over infrared for RFID in animals.',
    feedbackMiss: 'Infrared is absorbed by fur/tissue (shorter range, less penetration). Radio waves pass through the body more easily.',
  } as MSEntry,

  q3c: {
    marks: 3,
    exemplar: 'v = fλ [1]. = 125 000 × 2400 [1]. = 3.00 × 10⁸ m s⁻¹ [1].',
    keyConcepts: ['v = fλ', 'speed of light = 3.00 × 10⁸'],
    keywords: ['v = fλ', '125 000', '2400', '3.00 × 10⁸', 'scientific notation'],
    feedbackHit: 'Correctly applied v = fλ and expressed in scientific notation.',
    feedbackMiss: 'v = fλ = 125 000 × 2400 = 300 000 000 = 3.00 × 10⁸ m s⁻¹.',
  } as MSEntry,

  q3d: {
    marks: 2,
    exemplar: 'No internal battery needed [1]. Battery advantage: would not run out / no surgery needed to replace OR too large to be implanted [1].',
    keyConcepts: ['no battery', 'battery depletes over time'],
    keywords: ['battery', 'no power source', 'induction', 'replace', 'too large'],
    feedbackHit: 'Correctly identified a valid advantage of induction powering.',
    feedbackMiss: 'No battery = no running out; battery would need surgery to replace; battery too large for implant.',
  } as MSEntry,

  q3e: {
    marks: 3,
    exemplar: 'AC in scanner coil creates alternating magnetic field [1]. Changing field passes through animal to RFID coil [1]. Changing field induces EMF / current in RFID coil [1].',
    keyConcepts: ['AC → alternating magnetic field', 'field reaches RFID', 'induction of EMF'],
    keywords: ['alternating', 'magnetic field', 'flux', 'changing', 'RFID', 'induce', 'EMF', 'current'],
    feedbackHit: 'All 3 steps of electromagnetic induction correctly described.',
    feedbackMiss: '3 steps: (1) AC → changing magnetic field; (2) field passes through animal to RFID; (3) changing field induces EMF/current in RFID coil.',
  } as MSEntry,

  // ── Q4: Mirrors ──
  q4a: {
    marks: 1,
    exemplar: 'How does the angle between 2 plane mirrors affect the number of virtual images observed?',
    keyConcepts: ['research question', 'IV = angle', 'DV = images'],
    keywords: ['angle', 'mirrors', 'number', 'images'],
    feedbackHit: 'Research question names IV (angle) and DV (number of images).',
    feedbackMiss: 'Question must name both IV (angle between mirrors) and DV (number of virtual images).',
  } as MSEntry,

  q4b: {
    marks: 3,
    exemplar: 'IV = angle between mirrors [1]. DV = number of images observed [1]. Controls = position of object AND size of mirrors AND shape of mirrors (two correct = 1 mark) [1].',
    keyConcepts: ['IV = angle', 'DV = images', 'controls = position, size, shape'],
    keywords: ['independent', 'angle', 'dependent', 'images', 'control', 'position', 'size', 'shape'],
    feedbackHit: 'All variables correctly classified.',
    feedbackMiss: 'IV = angle (what you change). DV = number of images (what you count). Controls = everything else.',
  } as MSEntry,

  q4c: {
    marks: 1,
    exemplar: 'Protractor.',
    keyConcepts: ['protractor to measure angle'],
    keywords: ['protractor'],
    feedbackHit: 'Correctly identified protractor.',
    feedbackMiss: 'To measure the angle between mirrors, use a protractor.',
  } as MSEntry,

  q4d: {
    marks: 1,
    exemplar: '≈ 60° (accept 55°–65°).',
    keyConcepts: ['graph reading: 3 images ≈ 60°'],
    keywords: ['60', 'three images', 'angle'],
    feedbackHit: 'Correct graph reading.',
    feedbackMiss: 'Follow across from y=3 on the graph to read off the angle (≈ 60°).',
  } as MSEntry,

  q4e: {
    marks: 3,
    exemplar: 'Images decrease as angle increases ✓ [1]. State condition for inverse proportion: N × angle = constant [1]. Test with data: not exactly constant → approximately but not perfectly inversely proportional [1].',
    keyConcepts: ['inverse trend confirmed', 'N × angle = constant test', 'not perfectly inverse proportional'],
    keywords: ['inverse', 'N × angle', 'constant', 'calculation', 'not exactly'],
    feedbackHit: 'Identified inverse trend, tested proportionality, and concluded correctly.',
    feedbackMiss: '(1) Confirm images decrease as angle increases; (2) state N×angle=constant for inverse proportion; (3) test with data — if not constant, not perfectly inversely proportional.',
  } as MSEntry,

  q4f: {
    marks: 2,
    exemplar: 'Only integer values of images are possible (cannot have 3.5 images) [1]. Data is discrete — bar chart appropriate for discrete data [1].',
    keyConcepts: ['discrete data', 'bar chart appropriate'],
    keywords: ['integer', 'discrete', 'whole number', 'bar chart'],
    feedbackHit: 'Correctly justified bar chart for discrete integer data.',
    feedbackMiss: 'Images must be whole numbers (discrete). Bar chart shows discrete data; line graph implies continuous.',
  } as MSEntry,

  q4g: {
    marks: 1,
    exemplar: 'Second student\'s data: more data points OR taken at regular intervals.',
    keyConcepts: ['more data points better', 'regular intervals better'],
    keywords: ['second student', 'more data', 'regular intervals'],
    feedbackHit: 'Correctly identified second student\'s data and valid reason.',
    feedbackMiss: 'Second student\'s data has more points at regular intervals → better for identifying the relationship.',
  } as MSEntry,

  // ── Q5: Speed of sound ──
  q5a: {
    marks: 3,
    exemplar: 'Total distance = 2 × 130 = 260 m [1]. Speed = distance / time = 260 / 0.78 [1]. = 333 ≈ 330 m s⁻¹ (2 s.f.) [1].',
    keyConcepts: ['total distance = 2 × one-way distance', 'speed = d/t', '330 m s⁻¹ at 2 s.f.'],
    keywords: ['260', '0.78', '330', '2 s.f.', 'm s⁻¹'],
    feedbackHit: 'Correctly doubled distance, calculated speed, and rounded to 2 s.f.',
    feedbackMiss: 'Sound travels 130m TO wall + 130m BACK = 260m. Speed = 260/0.78 = 333 ≈ 330 ms⁻¹ (2 s.f.).',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Repeat measurements and take mean [1] — reduces effect of random timing errors [1]. Increase distance to wall [1] — small human reaction errors are less significant relative to longer total time [1].',
    keyConcepts: ['repeat measurements reduce random error', 'greater distance reduces relative timing error'],
    keywords: ['repeat', 'average', 'distance', 'longer time', 'random error', 'reaction time'],
    feedbackHit: 'Two valid improvements described and justified.',
    feedbackMiss: 'No new equipment: (1) repeat and average (reduces random error); (2) increase wall distance (makes timing error relatively smaller).',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: 'Read t₁ ≈ 1.10 s and t₂ ≈ 2.65 s from recording [1]. Time = 2.65 − 1.10 = 1.55 ± 0.06 s [1].',
    keyConcepts: ['read two times from recording', 'subtract to find echo time'],
    keywords: ['1.10', '2.65', '1.55', 'subtract', '520 m'],
    feedbackHit: 'Correct times read and subtracted.',
    feedbackMiss: 'Read time of first sound and time of echo. Subtract: 2.65 − 1.10 = 1.55 s.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Column headers: Distance / m AND Time / s [1]. Results in order [1]. Units in headings only [1]. ECF value from (c) included for 520 m row [1].',
    keyConcepts: ['table with proper headers', 'ordered data'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order'],
    feedbackHit: 'Well-structured table with correct features.',
    feedbackMiss: 'Headers with units; data in order; units in headings not cells; include ECF from (c).',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Correct gradient of LOBF [1]. Speed = 330–355 m s⁻¹ [1].',
    keyConcepts: ['gradient = speed', '330–355 m s⁻¹'],
    keywords: ['gradient', 'LOBF', '330', '355'],
    feedbackHit: 'Correctly calculated speed from graph gradient.',
    feedbackMiss: 'Speed = gradient = Δdistance/Δtime. Use two points on the line (not data points).',
  } as MSEntry,

  q5f: {
    marks: 2,
    exemplar: 'Anomalous point at 400 m / time ≈ 1 s identified [1]. Actual time should be higher [1].',
    keyConcepts: ['anomalous point identification', 'time should be higher'],
    keywords: ['anomalous', '400 m', '1 s', 'higher', 'outlier'],
    feedbackHit: 'Correctly identified outlier and stated time should be higher.',
    feedbackMiss: 'The point at 400 m / ~1 s is below the LOBF. The actual time should be higher to fit the trend.',
  } as MSEntry,

  q5g: {
    marks: 3,
    exemplar: 'Sound travels faster at higher temperature [1]. Higher temperature → particles have more kinetic energy / move faster [1]. Time between collisions is shorter / energy transferred more quickly between particles [1].',
    keyConcepts: ['higher T → faster sound', 'kinetic energy of particles', 'shorter time between collisions'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particles', 'collisions'],
    feedbackHit: 'Correctly explained temperature-dependent sound speed using particle motion.',
    feedbackMiss: '3 steps: (1) sound faster at higher T; (2) higher T → particles move faster; (3) faster collisions → quicker energy transfer → faster sound.',
  } as MSEntry,

  // ── Q6: Pendulum oscillations ──
  q6a: {
    marks: 14,
    exemplar: 'IV = string length; DV = time period; two CVs (mass, amplitude) with justification; testable hypothesis with mechanism; ≥5 lengths × 3 trials; mean period calculated; clear method (measure length, displace, release, time 10 oscillations ÷10).',
    keyConcepts: ['IV = length', 'DV = time period', 'CV = mass AND amplitude', 'hypothesis with because', '5+ lengths', '3 trials', 'detailed method'],
    keywords: ['length', 'time period', 'pendulum', 'control', 'hypothesis', 'if', 'then', 'because', 'trials', 'mean', 'oscillation'],
    feedbackHit: 'Complete design with all required elements.',
    feedbackMiss: 'Must include: IV (length), DV (period), 2 justified CVs, if/then/because hypothesis, ≥5 lengths × 3 trials, mean, clear method.',
  } as MSEntry,

  q6b: {
    marks: 5,
    exemplar: 'IV identified (≠ length) [1]. DV = time period [1]. Research question stated [1]. Length as control variable [1]. One other CV [1].',
    keyConcepts: ['new IV ≠ length', 'DV = time period', 'length as control'],
    keywords: ['mass', 'bob', 'time period', 'research question', 'control', 'length', 'amplitude'],
    feedbackHit: 'Valid second investigation with variables and research question.',
    feedbackMiss: 'Do not repeat length as IV. Good choice: mass of bob. Must include RQ and 2 controls (string length most important here).',
  } as MSEntry,

  // ── Q7: Stopping distance ──
  q7a: {
    marks: 4,
    exemplar: 'v² = u² + 2as [1]. 0 = 30² + 2×(−3)×s → 0 = 900 − 6s [1]. s = 150 [1]. m [1].',
    keyConcepts: ['v² = u² + 2as', 'u = 30 m/s', 'a = 3 m/s²', 's = 150 m'],
    keywords: ['v² = u² + 2as', '30', '900', '3', '150', 'metres'],
    feedbackHit: 'Correctly applied kinematics and calculated 150 m.',
    feedbackMiss: 'v² = u² + 2as; v=0, u=30, a=3: s = 900/(2×3) = 900/6 = 150 m. Unit mark separate.',
  } as MSEntry,

  q7b: {
    marks: 2,
    exemplar: 'Cell phone → driver; Rain → environmental; Worn tyres → car; Faulty brakes → car; Alcohol → driver; Poor road surface → environmental. (2 correct = 1 mark; all correct = 2 marks)',
    keyConcepts: ['driver/environmental/car factor classification'],
    keywords: ['driver', 'environmental', 'car', 'classification'],
    feedbackHit: 'All six correctly classified.',
    feedbackMiss: 'Driver: cell phone, alcohol. Car: tyres, brakes. Environmental: rain, road surface.',
  } as MSEntry,

  q7c: {
    marks: 4,
    exemplar: 'Alcohol → increases reaction time [1] → increases thinking distance / stopping distance [1]. Poor road surface → less friction [1] → greater braking distance / stopping distance [1].',
    keyConcepts: ['alcohol → reaction time → thinking distance', 'poor surface → friction → braking distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'braking distance'],
    feedbackHit: 'Correctly linked each factor to its stopping distance component.',
    feedbackMiss: 'Alcohol → longer reaction time → longer thinking distance. Poor road → less friction → longer braking distance.',
  } as MSEntry,

  // ── Q8: Autonomous buses ──
  q8a: {
    marks: 14,
    exemplar: 'Mark against rubric: Safety technology [up to 4]; Society advantages/disadvantages [up to 4]; Economic implications [up to 4]; Concluding appraisal [up to 2]. Total 14.',
    keyConcepts: ['autonomous bus safety', 'societal impacts', 'economic implications', 'appraisal'],
    keywords: ['safety', 'sensors', 'AI', 'society', 'jobs', 'accessibility', 'economic', 'cost', 'conclude', 'evaluate'],
    feedbackHit: 'Comprehensive evaluation with all four areas and justified conclusion.',
    feedbackMiss: '4 areas: (1) safety technology; (2) society advantages AND disadvantages; (3) economic implications; (4) justified concluding opinion.',
  } as MSEntry,

}
