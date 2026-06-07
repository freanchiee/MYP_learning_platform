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
    keywords: ['Ns', 'kg m s⁻¹', 'kg', 'm s⁻¹', 'momentum', 'mass', 'velocity', 'unit'],
    feedbackHit: 'Correctly stated all three SI units for the momentum equation quantities.',
    feedbackMiss: 'p (momentum): unit is Ns or kg m s⁻¹. m (mass): unit is kg. v (velocity): unit is m s⁻¹. Note: momentum is NOT measured in N or kg m/s² — it requires the time component.',
  } as MSEntry,

  q1b: {
    marks: 1,
    exemplar: 'The train has a greater mass OR the train is heavier.',
    keyConcepts: ['greater mass → greater momentum at same speed', 'p = mv'],
    keywords: ['greater mass', 'heavier', 'mass', 'momentum', 'same speed'],
    feedbackHit: 'Correctly identified greater mass as the reason for greater momentum.',
    feedbackMiss: 'Since p = mv and both move at the same speed (v is the same), the object with greater mass has greater momentum. The train has much greater mass than the man.',
  } as MSEntry,

  q1c: {
    marks: 3,
    exemplar: 'The ball has forward momentum [1]. A force is required to change an object\'s momentum [1]. As no force is available to change the momentum, the ball keeps moving / Newton\'s first law states an object continues at the same velocity unless a net force acts [1].',
    keyConcepts: ['ball has forward momentum', 'force required to change momentum', 'no net force → velocity unchanged', 'Newton\'s first law / inertia'],
    keywords: ['forward momentum', 'force', 'change', 'momentum', 'no force', 'velocity', 'Newton', 'first law', 'inertia'],
    feedbackHit: 'Correctly applied Newton\'s first law / momentum conservation to explain the ball\'s motion.',
    feedbackMiss: 'Three marks require three ideas: (1) ball is moving forward at 5 m s⁻¹ (has forward momentum); (2) a force is needed to change momentum; (3) no force acts on the ball to change its momentum, so it continues moving forward (Newton\'s 1st law).',
  } as MSEntry,

  q1d: {
    marks: 1,
    exemplar: 'Friction (creates a force that prevents the bag from moving).',
    keyConcepts: ['friction opposes motion', 'static friction prevents sliding'],
    keywords: ['friction', 'force', 'prevents', 'moving', 'static'],
    feedbackHit: 'Correctly identified friction as the force preventing the bag from sliding.',
    feedbackMiss: 'Friction between the bag and the floor acts as a retarding force. Unlike the ball (which is free to roll), the bag has sufficient friction to resist the tendency to slide forward when the train decelerates.',
  } as MSEntry,

  // ── Q2: Smog filter ──
  q2a: {
    marks: 3,
    exemplar: 'P = IV OR I = P/V OR I = 1100/220 [1]. = 5 [1]. A or amp(s) [1].',
    keyConcepts: ['P = IV', 'I = P/V', 'current = 5 A', 'unit: amperes'],
    keywords: ['P = IV', 'I = P/V', '1100', '220', '5', 'A', 'ampere', 'current'],
    feedbackHit: 'Correctly applied P = IV, calculated I = 5 A with correct unit.',
    feedbackMiss: 'Use P = IV rearranged: I = P/V = 1100 W ÷ 220 V = 5 A. Award the unit mark separately — must state A (amperes).',
  } as MSEntry,

  q2b: {
    marks: 2,
    exemplar: 'Dust particles (become negatively) charged [1]. Reference to attraction between opposite charges [1].',
    keyConcepts: ['dust particles are negatively charged', 'opposite charges attract', 'negative attracted to positive plate'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'plate', 'electric'],
    feedbackHit: 'Correctly explained electrostatic attraction between negatively charged dust and positive plate.',
    feedbackMiss: 'Two steps: (1) dust particles gain negative charge in the ionization chamber; (2) opposite charges attract, so the negatively charged dust is attracted to the positively charged collection plate.',
  } as MSEntry,

  q2c: {
    marks: 2,
    exemplar: 'Addition of negative charges to the positive plate reduces/neutralizes the overall positive charge [1]. (So) the force of attraction is weaker / the electric field is weaker [1].',
    keyConcepts: ['dust neutralizes positive plate charge', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'negative charge', 'positive plate', 'weaker', 'field', 'attraction', 'clean'],
    feedbackHit: 'Correctly explained how accumulated dust reduces the plate\'s charge and weakens attraction.',
    feedbackMiss: 'As dust builds up on the plate, its negative charge partially cancels the positive charge on the plate. This weakens the electric field and the attractive force, so fewer new dust particles are collected — the plates need cleaning to restore their charge.',
  } as MSEntry,

  // ── Q3: EM spectrum / RFID ──
  q3a: {
    marks: 1,
    exemplar: 'Infrared placed between Microwave and Visible; Ultraviolet placed between Visible and X-rays. Both correct for 1 mark.',
    keyConcepts: ['EM spectrum order', 'infrared between microwave and visible', 'ultraviolet between visible and X-rays'],
    keywords: ['infrared', 'ultraviolet', 'spectrum', 'order', 'microwave', 'visible', 'X-ray'],
    feedbackHit: 'Correctly placed infrared and ultraviolet in the EM spectrum.',
    feedbackMiss: 'The EM spectrum in order of increasing frequency: Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays. Both gaps must be correct for the mark.',
  } as MSEntry,

  q3b: {
    marks: 1,
    exemplar: 'Any reasonable suggestion: infra-red does not pass through fur/tissue; infra-red could adversely affect health/damage tissue; radio waves travel further from the body; infra-red has higher energy (so is more harmful).',
    keyConcepts: ['radio waves penetrate tissue', 'infrared absorbed by tissue', 'infrared higher energy than radio'],
    keywords: ['penetrate', 'tissue', 'fur', 'infra-red', 'health', 'harmful', 'range', 'higher energy'],
    feedbackHit: 'Gave a valid scientific advantage of radio waves over infrared for RFID in animals.',
    feedbackMiss: 'Valid answers include: infrared is absorbed by fur/tissue (doesn\'t penetrate as well); infrared has higher energy so could be more harmful; radio waves can travel further / penetrate the body better.',
  } as MSEntry,

  q3c: {
    marks: 3,
    exemplar: 'v = fλ [1]. = 134 500 × 2238 [1]. = 2.999 × 10⁸ OR 3.00 × 10⁸ m s⁻¹ [1].',
    keyConcepts: ['v = fλ', 'frequency × wavelength', 'scientific notation', 'speed of light ≈ 3 × 10⁸'],
    keywords: ['v = fλ', '134500', '2238', '3 × 10⁸', '2.999 × 10⁸', 'scientific notation', 'm s⁻¹'],
    feedbackHit: 'Correctly applied v = fλ and expressed the answer in scientific notation.',
    feedbackMiss: 'v = fλ = 134,500 Hz × 2238 m = 2.9989... × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Award 2 marks for a correct answer without showing the calculation. Answer must be in scientific notation.',
  } as MSEntry,

  q3d: {
    marks: 2,
    exemplar: 'Induction allows no internal power source [1]. Alternative: a battery/power source would lose power over time (requiring a replacement RFID or battery) OR an internal power source would be too large [1].',
    keyConcepts: ['no battery needed', 'battery loses power over time', 'RFID powered wirelessly'],
    keywords: ['no battery', 'power source', 'lose power', 'replace', 'too large', 'induction', 'wireless'],
    feedbackHit: 'Correctly identified an advantage of induction powering over a battery.',
    feedbackMiss: 'Key advantage: the RFID needs no internal battery. A battery would: (a) eventually run out requiring surgery to replace the chip, or (b) be too large to fit under an animal\'s skin. Induction from the scanner provides power on demand.',
  } as MSEntry,

  q3e: {
    marks: 3,
    exemplar: 'AC in the scanner coil produces an alternating magnetic field/flux [1]. The magnetic field passes through the cat to the RFID [1]. The changing magnetic field in the RFID induces an EMF/current in the RFID coil [1].',
    keyConcepts: ['AC → alternating magnetic field', 'field passes through to RFID', 'changing field induces EMF/current', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'flux', 'changing', 'RFID', 'induce', 'EMF', 'current', 'coil'],
    feedbackHit: 'Correctly described all three steps of electromagnetic induction in the RFID system.',
    feedbackMiss: 'Three steps: (1) the AC in the scanner coil creates an alternating (changing) magnetic field; (2) this field passes through the animal\'s body to reach the RFID coil; (3) the changing magnetic field through the RFID coil induces an EMF (and therefore a current) in the RFID coil — this is electromagnetic induction.',
  } as MSEntry,

  // ── Q4: Mirrors / virtual images ──
  q4a: {
    marks: 1,
    exemplar: 'How does the angle between 2 (plane) mirrors affect the number of virtual images?',
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['angle', 'mirrors', 'number', 'images', 'affect', 'research question'],
    feedbackHit: 'Correctly stated a research question identifying angle as IV and number of images as DV.',
    feedbackMiss: 'The research question must name both: the independent variable (angle between the mirrors) and the dependent variable (number of virtual images observed). Accept responses phrased as questions.',
  } as MSEntry,

  q4b: {
    marks: 3,
    exemplar: 'IV = angle between the mirrors only [1]. DV = number of images observed only [1]. Control = position of the object AND size of the mirrors AND shape of the mirrors used (two correct = 1 mark; all correct = 2 marks) [2].',
    keyConcepts: ['IV = angle between mirrors', 'DV = number of images', 'controls = object position, mirror size, mirror shape'],
    keywords: ['independent', 'angle', 'dependent', 'images', 'control', 'position', 'size', 'shape'],
    feedbackHit: 'Correctly classified all variables.',
    feedbackMiss: 'IV = only the angle between the mirrors (what you change). DV = only the number of images observed (what you count). Everything else is a control variable: the object used, its position, the size and shape of the mirrors.',
  } as MSEntry,

  q4c: {
    marks: 1,
    exemplar: 'Protractor.',
    keyConcepts: ['protractor measures angle', 'appropriate measuring instrument'],
    keywords: ['protractor', 'angle', 'measure', 'instrument'],
    feedbackHit: 'Correctly identified a protractor as the measuring instrument.',
    feedbackMiss: 'To measure the angle between the two mirrors, you need a protractor. A ruler would measure length, not angle.',
  } as MSEntry,

  q4d: {
    marks: 1,
    exemplar: 'Approximately 60° (accept 55°–65° based on graph reading).',
    keyConcepts: ['read graph', 'angle for 3 images ≈ 60°'],
    keywords: ['60', '55', '65', 'three images', 'angle', 'graph', 'read'],
    feedbackHit: 'Correctly read the angle for 3 images from the graph.',
    feedbackMiss: 'Read across from 3 on the y-axis (number of images) to the curve, then down to the x-axis. The angle should be approximately 60°.',
  } as MSEntry,

  q4e: {
    marks: 3,
    exemplar: 'As angle increases, number of images decreases ✓ [1]. Conditions of inverse proportion stated (N × angle = constant) or implied in calculation [1]. Data from graph used to show relationship is NOT exactly inversely proportional (e.g. 7×24≈168, 5×40=200, 3×60=180 — not constant) [1].',
    keyConcepts: ['inverse relationship confirmed', 'test N × angle = constant', 'not perfectly inversely proportional from data'],
    keywords: ['inverse', 'proportional', 'N × angle', 'constant', 'not exactly', 'calculation', 'data'],
    feedbackHit: 'Correctly identified the inverse trend and tested proportionality with graph data.',
    feedbackMiss: 'Three marks: (1) confirm images decrease as angle increases; (2) state the condition for inverse proportion: N × angle = constant; (3) test with data from graph — calculate N × angle for several points. If not constant, the relationship is approximately but not perfectly inversely proportional.',
  } as MSEntry,

  q4f: {
    marks: 2,
    exemplar: 'Only integer values of numbers of images are allowed (cannot have 3.5 images) [1]. The relationship between angle and images is discrete / easier to see [1].',
    keyConcepts: ['discrete data', 'integer values only', 'bar chart for discrete data'],
    keywords: ['integer', 'discrete', 'whole number', 'bar chart', 'appropriate', 'cannot', 'half image'],
    feedbackHit: 'Correctly justified bar chart for discrete integer data.',
    feedbackMiss: 'Bar charts are more appropriate for discrete (non-continuous) data. The number of images must be a whole number (you cannot observe 3.5 images). A line graph would imply continuous data, which is misleading here.',
  } as MSEntry,

  q4g: {
    marks: 1,
    exemplar: 'The second student\'s data because: there are more data points OR data are taken at regular intervals.',
    keyConcepts: ['more data points better', 'regular intervals better for trend analysis'],
    keywords: ['second student', 'more data', 'regular intervals', 'better', 'trend'],
    feedbackHit: 'Correctly identified the second student\'s data as better and gave a valid reason.',
    feedbackMiss: 'The second student\'s data is better because it has more data points AND they are collected at regular angle intervals. This makes it easier to identify the mathematical relationship between the variables.',
  } as MSEntry,

  // ── Q5: Speed of sound ──
  q5a: {
    marks: 3,
    exemplar: 'Distance = 2 × 110 = 220 m (noted or implied) [1]. Evidence of speed = distance/time [1]. 280 m s⁻¹ (rounded correctly to 2 s.f.) [1].',
    keyConcepts: ['total distance = 2 × 110 m', 'speed = distance / time', '280 m s⁻¹ at 2 s.f.'],
    keywords: ['220', '0.79', 'speed', 'distance', 'time', '280', '2 s.f.', 'm s⁻¹'],
    feedbackHit: 'Correctly calculated speed of sound as 280 m s⁻¹ to 2 significant figures.',
    feedbackMiss: 'The sound travels to the wall (110 m) AND back (110 m) = 220 m total. Speed = 220/0.79 = 278 m s⁻¹ ≈ 280 m s⁻¹ (2 s.f.). Award the third mark if an incorrect total distance is correctly rounded to 2 s.f.',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Increase the number of time measurements at this distance [1] — this will improve reliability by minimising the effect of random errors in timing [1]. Increase the overall time for the sound to travel by increasing the distance to the wall [1] — because small timing errors (due to human reactions) become less significant when the overall time is longer [1].',
    keyConcepts: ['repeat measurements reduce random error', 'greater distance → smaller relative timing error', 'no new equipment required'],
    keywords: ['repeat', 'multiple', 'average', 'distance', 'longer time', 'random error', 'reaction time', 'reliable'],
    feedbackHit: 'Described and justified two valid improvements using the same basic method.',
    feedbackMiss: 'Two improvements WITHOUT new equipment: (1) Take more measurements and average — reduces random timing errors. (2) Increase the distance to the wall — this makes the travel time longer, so human reaction time error becomes a smaller fraction of the total time. Do not suggest electronic timing (that requires new equipment).',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: '2.65 ± 0.03 AND 0.90 ± 0.03 (both values identified) [1]. (2.65 − 0.90 =) 1.75 ± 0.06 s [1].',
    keyConcepts: ['read two times from recording', 'time difference = echo time', 't = 1.75 s'],
    keywords: ['2.65', '0.90', '1.75', 'subtract', 'difference', 'time', 'echo'],
    feedbackHit: 'Correctly read both times and calculated the time difference.',
    feedbackMiss: 'Read the time of the first sound and the time of the echo from the recording. Subtract: echo time − first clap time = 2.65 − 0.90 = 1.75 s. Award 2 marks for the correct answer.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Column headers: Distance (m) AND Time (s) [1]. Results in order [1]. Units in column headings only [1]. Data rounded to 2 d.p. including ECF value from part (c) [1].',
    keyConcepts: ['table with distance and time', 'headers with units', 'ordered data', '2 d.p. values'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', 'decimal', '2 d.p.'],
    feedbackHit: 'Correctly presented the data table with proper headers, units, and ordered values.',
    feedbackMiss: 'Table needs: (1) column headers "Distance / m" and "Time / s"; (2) data in ascending order of distance; (3) units only in column headings, not in cells; (4) values to 2 d.p., including ECF value from Q5c for the 600 m row.',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Correct gradient of LOBF seen or implied [1]. Speed = 330 to 355 m s⁻¹ [1].',
    keyConcepts: ['gradient = speed', 'read gradient from LOBF', '330–355 m s⁻¹'],
    keywords: ['gradient', 'line of best fit', 'speed', '330', '340', '355', 'Δd/Δt'],
    feedbackHit: 'Correctly calculated speed of sound from the gradient of the line of best fit.',
    feedbackMiss: 'Speed = gradient of the distance-time graph = Δdistance / Δtime. Use two points on the line of best fit (not data points). Answer should be in the range 330–355 m s⁻¹.',
  } as MSEntry,

  q5f: {
    marks: 2,
    exemplar: 'Identification of the data point at 400 m or time ≈ 1 s [1]. Time is too low — should be greater to follow the trend and be closer to the line of best fit [1].',
    keyConcepts: ['identify anomalous point', 'time too low', 'should be higher to match LOBF'],
    keywords: ['anomalous', '400 m', '1 s', 'too low', 'higher', 'line of best fit', 'outlier'],
    feedbackHit: 'Correctly identified the anomalous point and stated the time should be higher.',
    feedbackMiss: 'The anomalous point is at 400 m / time ≈ 1 s — it lies well below the line of best fit. The actual time should be higher (greater) than the recorded value to be consistent with the trend shown by the other data points.',
  } as MSEntry,

  q5g: {
    marks: 3,
    exemplar: 'Sound faster at higher temperature [1]. Temperature linked to kinetic energy OR speed of particles [1]. Time between collisions is reduced OR faster rate of energy transfer between particles [1].',
    keyConcepts: ['higher temperature → faster sound', 'temperature links to particle kinetic energy', 'faster particles → quicker energy transfer / shorter time between collisions'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particles', 'collisions', 'energy transfer', 'speed'],
    feedbackHit: 'Correctly explained temperature-dependent sound speed using particle theory.',
    feedbackMiss: 'Three steps: (1) sound travels faster at higher temperatures; (2) higher temperature means particles have greater kinetic energy / move faster; (3) faster-moving particles collide more frequently → energy is transferred more quickly through the medium → sound travels faster.',
  } as MSEntry,

  // ── Q6: Spring oscillations ──
  q6a: {
    marks: 14,
    exemplar: 'Full design: IV = mass on spring; DV = time period; two CVs justified (spring constant AND length of spring); testable hypothesis (If mass increases, then time period increases, because of greater inertia); data collection with ≥5 masses and 3 trials, calculate mean; detailed replicable method.',
    keyConcepts: ['IV = mass', 'DV = time period', 'CV = spring constant AND amplitude', 'hypothesis with because', '5+ increments', '3 trials', 'mean', 'detailed method'],
    keywords: ['mass', 'time period', 'spring', 'control', 'hypothesis', 'if', 'then', 'because', 'trials', 'mean', 'method', 'repeat', 'oscillation', 'displace', 'release'],
    feedbackHit: 'Provided a complete, well-justified experimental design covering all required elements.',
    feedbackMiss: 'Must include: IV (mass), DV (time period), two justified CVs (spring constant, amplitude or length), a testable if/then/because hypothesis, method with at least 5 mass values × 3 trials, plan to calculate mean time period.',
  } as MSEntry,

  q6b: {
    marks: 5,
    exemplar: 'IV identified or implied (e.g. spring constant/stiffness/different spring) [1]. DV identified as time period [1]. Research question stated [1]. Mass identified as a control variable [1]. One other control variable [1].',
    keyConcepts: ['new IV ≠ mass', 'DV = time period', 'research question', 'mass as control', 'second control variable'],
    keywords: ['spring constant', 'stiffness', 'time period', 'research question', 'control', 'mass', 'amplitude', 'length'],
    feedbackHit: 'Suggested a valid second investigation with appropriate variables and research question.',
    feedbackMiss: 'Must not repeat mass as IV. Good choices for new IV: spring constant (use different springs), amplitude of oscillation, number of coils. DV remains time period. Must include research question and two control variables (mass is the most important control here).',
  } as MSEntry,

  // ── Q7: Stopping distance ──
  q7a: {
    marks: 4,
    exemplar: 'v² = u² + 2as OR u²/2a = s [1]. 400/(2×2) = s OR 20²/(2×2) = s [1]. s = 100 [1]. m [1].',
    keyConcepts: ['v² = u² + 2as', 'u = 20 m/s', 'a = 2 m/s²', 's = 100 m'],
    keywords: ['v² = u² + 2as', '20', '400', '2', '100', 'metres', 'braking distance', 'deceleration'],
    feedbackHit: 'Correctly applied kinematics equation and calculated 100 m braking distance.',
    feedbackMiss: 'Use v² = u² + 2as with v = 0, u = 20 m s⁻¹, a = −2 m s⁻². Rearranging: s = u²/(2a) = 400/(2×2) = 400/4 = 100 m. Award the unit mark separately.',
  } as MSEntry,

  q7b: {
    marks: 2,
    exemplar: 'Cell phone → driver factor; Heavy rain → environmental factor; Worn tyre tread → car factor; Faulty brakes → car factor; Drinking alcohol → driver factor; Poor road surface → environmental factor. (2 correct = 1 mark; all correct = 2 marks)',
    keyConcepts: ['cell phone = driver factor', 'heavy rain = environmental', 'worn tyre = car factor', 'faulty brakes = car factor', 'alcohol = driver factor', 'poor road surface = environmental'],
    keywords: ['driver', 'environmental', 'car', 'cell phone', 'rain', 'tyre', 'brakes', 'alcohol', 'road surface'],
    feedbackHit: 'Correctly classified all six factors into driver, environmental, or car categories.',
    feedbackMiss: 'Driver factors (relate to the person driving): cell phone use, drinking alcohol. Car factors (relate to the vehicle): worn tyre tread, faulty brakes. Environmental factors (relate to conditions outside): heavy rain, poor road surface.',
  } as MSEntry,

  q7c: {
    marks: 4,
    exemplar: 'Alcohol: increases time taken to respond / delayed reactions [1] → so thinking distance / stopping distance increases [1]. Poor road surface: friction is lower on a poor road surface [1] → so braking distance / stopping distance increases [1].',
    keyConcepts: ['alcohol increases reaction time → thinking distance', 'poor surface reduces friction → braking distance', 'both increase stopping distance'],
    keywords: ['alcohol', 'reaction time', 'thinking distance', 'friction', 'road surface', 'braking distance', 'increases', 'stopping distance'],
    feedbackHit: 'Correctly explained how each factor affects its relevant component of stopping distance.',
    feedbackMiss: 'Two sets of two marks: Alcohol → increases reaction time → increases thinking distance. Poor road surface → reduces friction between tyres and road → less braking force → greater braking distance. Both ultimately increase total stopping distance.',
  } as MSEntry,

  // ── Q8: Driverless cars ──
  q8a: {
    marks: 14,
    exemplar: 'Mark against rubric: Driverless technology (safety features) [up to 4]; Society (advantages and disadvantages) [up to 4]; Economic implications [up to 4]; Concluding appraisal [up to 2]. Total 14 marks.',
    keyConcepts: ['driverless technology safety', 'societal advantages and disadvantages', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'reaction time', 'society', 'jobs', 'independence', 'economic', 'cost', 'conclude', 'evaluate', 'driverless'],
    feedbackHit: 'Provided a comprehensive, balanced evaluation with safety, societal, and economic dimensions plus a justified conclusion.',
    feedbackMiss: 'Structure around four areas: (1) Safety technology: driverless cars use sensors/AI with faster reactions, fewer human errors; (2) Society: safer roads AND loss of driving jobs, benefits for elderly/disabled; (3) Economic: high development cost AND cheaper transport long-term, impact on transport industry; (4) Concluding appraisal: justify your opinion by linking all arguments together.',
  } as MSEntry,

}
