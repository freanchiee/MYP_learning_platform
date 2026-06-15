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

  // ── Q1: Momentum (truck on a car ferry) ──
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
    exemplar: 'The ferry has a greater mass OR the ferry is heavier.',
    keyConcepts: ['greater mass → greater momentum at same speed', 'p = mv'],
    keywords: ['greater mass', 'heavier', 'mass', 'momentum', 'same speed', 'ferry'],
    feedbackHit: 'Correctly identified greater mass as the reason for greater momentum.',
    feedbackMiss: 'Since p = mv and both move at the same speed (v is the same), the object with greater mass has greater momentum. The ferry has much greater mass than the truck.',
  } as MSEntry,

  q1c: {
    marks: 3,
    exemplar: 'The can has forward momentum [1]. A force is required to change an object\'s momentum [1]. As no force is available to change the momentum, the can keeps moving / Newton\'s first law states an object continues at the same velocity unless a net force acts [1].',
    keyConcepts: ['can has forward momentum', 'force required to change momentum', 'no net force → velocity unchanged', 'Newton\'s first law / inertia'],
    keywords: ['forward momentum', 'force', 'change', 'momentum', 'no force', 'velocity', 'Newton', 'first law', 'inertia', 'can'],
    feedbackHit: 'Correctly applied Newton\'s first law / momentum to explain the can\'s motion.',
    feedbackMiss: 'Three marks require three ideas: (1) the can is moving forward at 5 m s⁻¹ (has forward momentum); (2) a force is needed to change momentum; (3) no force acts on the can to change its momentum, so it continues moving forward (Newton\'s 1st law).',
  } as MSEntry,

  q1d: {
    marks: 1,
    exemplar: 'Friction (creates a force that prevents the crate from moving).',
    keyConcepts: ['friction opposes motion', 'static friction prevents sliding'],
    keywords: ['friction', 'force', 'prevents', 'moving', 'static', 'crate'],
    feedbackHit: 'Correctly identified friction as the force preventing the crate from sliding.',
    feedbackMiss: 'Friction between the crate and the deck acts as a retarding force. Unlike the can (which is free to roll), the crate has sufficient friction to resist the tendency to slide forward when the ferry decelerates.',
  } as MSEntry,

  // ── Q2: Electrostatic paint spraying ──
  q2a: {
    marks: 3,
    exemplar: 'P = IV OR I = P/V OR I = 990/220 [1]. = 4.5 [1]. A or amp(s) [1].',
    keyConcepts: ['P = IV', 'I = P/V', 'current = 4.5 A', 'unit: amperes'],
    keywords: ['P = IV', 'I = P/V', '990', '220', '4.5', 'A', 'ampere', 'current'],
    feedbackHit: 'Correctly applied P = IV, calculated I = 4.5 A with correct unit.',
    feedbackMiss: 'Use P = IV rearranged: I = P/V = 990 W ÷ 220 V = 4.5 A. Award the unit mark separately — must state A (amperes).',
  } as MSEntry,

  q2b: {
    marks: 2,
    exemplar: 'Paint droplets are (negatively) charged [1]. Reference to attraction between opposite charges, so they are attracted to the positive car body [1].',
    keyConcepts: ['paint droplets are negatively charged', 'opposite charges attract', 'negative attracted to positive body'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'body', 'droplet'],
    feedbackHit: 'Correctly explained electrostatic attraction between negatively charged droplets and the positive car body.',
    feedbackMiss: 'Two steps: (1) the paint droplets gain a negative charge from the electrode; (2) opposite charges attract, so the negatively charged droplets are attracted to the positively charged car body.',
  } as MSEntry,

  q2c: {
    marks: 2,
    exemplar: 'Dried paint builds up on the electrode and reduces/insulates the charge it can give each droplet [1]. (So) the force of attraction is weaker / the electric field is weaker and the droplets are less strongly attracted [1].',
    keyConcepts: ['dried paint reduces electrode charge', 'weaker electric field', 'reduced attraction'],
    keywords: ['build up', 'dried paint', 'electrode', 'weaker', 'field', 'attraction', 'clean', 'charge'],
    feedbackHit: 'Correctly explained how accumulated dried paint reduces charging and weakens attraction.',
    feedbackMiss: 'As dried paint builds up on the electrode, it reduces or insulates the charge that can be put onto each droplet. This weakens the electric field and the attractive force, so the droplets are less strongly attracted onto the body — the electrode needs cleaning to restore effective charging.',
  } as MSEntry,

  // ── Q3: EM spectrum / contactless card ──
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
    exemplar: 'Any reasonable suggestion: infra-red needs a clear line of sight and would be blocked by a wallet/clothing; radio waves pass through the card sleeve and clothing; infra-red has higher energy.',
    keyConcepts: ['radio waves pass through materials', 'infrared needs line of sight / blocked', 'infrared higher energy than radio'],
    keywords: ['line of sight', 'blocked', 'wallet', 'pass through', 'infra-red', 'penetrate', 'higher energy'],
    feedbackHit: 'Gave a valid scientific advantage of radio waves over infrared for a contactless card.',
    feedbackMiss: 'Valid answers include: infrared needs a clear line of sight and is blocked by a wallet/clothing; radio waves pass through the card sleeve and clothing; infrared has higher energy.',
  } as MSEntry,

  q3c: {
    marks: 3,
    exemplar: 'v = fλ [1]. = 13 560 000 × 22.1 [1]. = 2.997 × 10⁸ OR 3.00 × 10⁸ m s⁻¹ [1].',
    keyConcepts: ['v = fλ', 'frequency × wavelength', 'scientific notation', 'speed of light ≈ 3 × 10⁸'],
    keywords: ['v = fλ', '13560000', '22.1', '3 × 10⁸', '2.997 × 10⁸', 'scientific notation', 'm s⁻¹'],
    feedbackHit: 'Correctly applied v = fλ and expressed the answer in scientific notation.',
    feedbackMiss: 'v = fλ = 13 560 000 Hz × 22.1 m = 2.997 × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Award 2 marks for a correct answer without showing the calculation. Answer must be in scientific notation.',
  } as MSEntry,

  q3d: {
    marks: 2,
    exemplar: 'Induction means the card needs no internal power source [1]. Alternative: a battery would lose power over time (requiring a replacement card) OR a battery would be too thick to fit inside a card [1].',
    keyConcepts: ['no battery needed', 'battery loses power over time', 'card powered wirelessly'],
    keywords: ['no battery', 'power source', 'lose power', 'replace', 'too large', 'thick', 'induction', 'wireless'],
    feedbackHit: 'Correctly identified an advantage of induction powering over a battery.',
    feedbackMiss: 'Key advantage: the card needs no internal battery. A battery would: (a) eventually run out requiring the card to be replaced, or (b) be too thick to fit inside a thin card. Induction from the terminal provides power on demand.',
  } as MSEntry,

  q3e: {
    marks: 3,
    exemplar: 'AC in the terminal coil produces an alternating magnetic field/flux [1]. The magnetic field passes across the gap to the card coil [1]. The changing magnetic field in the card induces an EMF/current in the card coil [1].',
    keyConcepts: ['AC → alternating magnetic field', 'field passes to card coil', 'changing field induces EMF/current', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'flux', 'changing', 'card', 'induce', 'EMF', 'current', 'coil'],
    feedbackHit: 'Correctly described all three steps of electromagnetic induction in the card system.',
    feedbackMiss: 'Three steps: (1) the AC in the terminal coil creates an alternating (changing) magnetic field; (2) this field passes across the small gap to the card coil; (3) the changing magnetic field through the card coil induces an EMF (and therefore a current) in the card coil — this is electromagnetic induction.',
  } as MSEntry,

  // ── Q4: Kaleidoscope two-mirror virtual-images investigation ──
  q4a: {
    marks: 1,
    exemplar: 'How does the angle between the 2 (plane) kaleidoscope mirrors affect the number of virtual images of the bead?',
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['angle', 'mirrors', 'number', 'images', 'affect', 'research question'],
    feedbackHit: 'Correctly stated a research question identifying angle as IV and number of images as DV.',
    feedbackMiss: 'The research question must name both: the independent variable (angle between the mirrors) and the dependent variable (number of virtual images observed). Accept responses phrased as questions.',
  } as MSEntry,

  q4b: {
    marks: 3,
    exemplar: 'IV = angle between the mirrors only [1]. DV = number of images observed only [1]. Control = the bead used AND its position AND size of the mirrors AND shape of the mirrors used (two correct = 1 mark; all correct = 2 marks) [2].',
    keyConcepts: ['IV = angle between mirrors', 'DV = number of images', 'controls = bead, position, mirror size, mirror shape'],
    keywords: ['independent', 'angle', 'dependent', 'images', 'control', 'bead', 'position', 'size', 'shape'],
    feedbackHit: 'Correctly classified all variables.',
    feedbackMiss: 'IV = only the angle between the mirrors (what you change). DV = only the number of images observed (what you count). Everything else is a control variable: the bead used, its position, and the size and shape of the mirrors.',
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
    exemplar: 'Approximately 90° (accept 85°–95° based on graph reading).',
    keyConcepts: ['read graph', 'angle for 3 images ≈ 90°'],
    keywords: ['90', '85', '95', 'three images', 'angle', 'graph', 'read'],
    feedbackHit: 'Correctly read the angle for 3 images from the graph.',
    feedbackMiss: 'Read across from 3 on the y-axis (number of images) to the curve, then down to the x-axis. The angle should be approximately 90° (since N = 360/θ − 1 gives 360/90 − 1 = 3).',
  } as MSEntry,

  q4e: {
    marks: 3,
    exemplar: 'As angle increases, number of images decreases ✓ [1]. Conditions of inverse proportion stated (N × angle = constant) or implied in calculation [1]. Data from graph used to show the relationship is NOT exactly inversely proportional (e.g. 11×30 = 330, 7×45 = 315, 5×60 = 300, 3×90 = 270 — not constant) [1].',
    keyConcepts: ['inverse relationship confirmed', 'test N × angle = constant', 'not perfectly inversely proportional from data'],
    keywords: ['inverse', 'proportional', 'N × angle', 'constant', 'not exactly', 'calculation', 'data'],
    feedbackHit: 'Correctly identified the inverse trend and tested proportionality with graph data.',
    feedbackMiss: 'Three marks: (1) confirm images decrease as angle increases; (2) state the condition for inverse proportion: N × angle = constant; (3) test with data from the graph — calculate N × angle for several points (11×30 = 330, 7×45 = 315, 5×60 = 300, 3×90 = 270). The product is not constant, so the relationship is approximately but not perfectly inversely proportional.',
  } as MSEntry,

  q4f: {
    marks: 2,
    exemplar: 'Only integer values of the number of images are allowed (cannot have 3.5 images) [1]. The number of images is discrete, so a bar chart shows each separate value clearly rather than implying continuous in-between values [1].',
    keyConcepts: ['discrete data', 'integer values only', 'bar chart for discrete data'],
    keywords: ['integer', 'discrete', 'whole number', 'bar chart', 'appropriate', 'cannot', 'half image'],
    feedbackHit: 'Correctly justified a bar chart for discrete integer data.',
    feedbackMiss: 'Bar charts are more appropriate for discrete (non-continuous) data. The number of images must be a whole number (you cannot observe 3.5 images). A line graph would imply continuous data, which is misleading here.',
  } as MSEntry,

  q4g: {
    marks: 1,
    exemplar: 'The third student\'s data because: there are more data points OR data are taken at regular intervals (every 20°).',
    keyConcepts: ['more data points better', 'regular intervals better for trend analysis'],
    keywords: ['third student', 'more data', 'regular intervals', 'better', 'trend'],
    feedbackHit: 'Correctly identified the third student\'s data as better and gave a valid reason.',
    feedbackMiss: 'The third student\'s data is better because it has more data points AND they are collected at regular angle intervals (every 20°). This makes it easier to identify the mathematical relationship between the variables.',
  } as MSEntry,

  // ── Q5: Speed of sound (sonar off seabed) ──
  q5a: {
    marks: 3,
    exemplar: 'Distance = 2 × 150 = 300 m (noted or implied) [1]. Evidence of speed = distance/time [1]. 1500 m s⁻¹ (correct to 2 s.f.) [1].',
    keyConcepts: ['total distance = 2 × 150 m', 'speed = distance / time', '1500 m s⁻¹ at 2 s.f.'],
    keywords: ['300', '0.20', 'speed', 'distance', 'time', '1500', '2 s.f.', 'm s⁻¹'],
    feedbackHit: 'Correctly calculated the speed of sound in water as 1500 m s⁻¹ to 2 significant figures.',
    feedbackMiss: 'The sound travels down to the seabed (150 m) AND back (150 m) = 300 m total. Speed = 300/0.20 = 1500 m s⁻¹ (2 s.f.). Award the third mark if an incorrect total distance is correctly rounded to 2 s.f.',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Repeat the time measurement several times at the same point and take a mean [1] — this reduces the effect of random errors in timing [1]. Take readings where the water is deeper, increasing the total travel time [1] — because small timing errors then become less significant relative to the longer total time [1].',
    keyConcepts: ['repeat measurements reduce random error', 'greater depth → smaller relative timing error', 'no new equipment required'],
    keywords: ['repeat', 'multiple', 'average', 'mean', 'deeper', 'longer time', 'random error', 'reliable'],
    feedbackHit: 'Described and justified two valid improvements using the same basic method.',
    feedbackMiss: 'Two improvements WITHOUT new equipment: (1) Take more time measurements at a point and average — reduces random timing errors. (2) Survey where the water is deeper — this makes the travel time longer, so timing error becomes a smaller fraction of the total. Do not suggest new electronic timing equipment.',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: '1.30 ± 0.02 AND 0.10 ± 0.02 (both peak times identified) [1]. (1.30 − 0.10 =) 1.20 ± 0.04 s [1].',
    keyConcepts: ['read two peak times from recording', 'time difference = echo time', 't = 1.20 s'],
    keywords: ['1.30', '0.10', '1.20', 'subtract', 'difference', 'time', 'echo', 'peak'],
    feedbackHit: 'Correctly read both peak times and calculated the time difference.',
    feedbackMiss: 'Read the time of the outgoing pulse and the time of the returning echo from the recording. Subtract: echo time − pulse time = 1.30 − 0.10 = 1.20 s. Award 2 marks for the correct answer.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Column headers: Total distance (m) AND Time (s) [1]. Results in order [1]. Units in column headings only [1]. Data to 2 d.p. including ECF value from part (c) (1.20 s for the 1800 m row) [1]. Expected times: 300/0.20, 600/0.40, 1200/0.80, 1800/1.20, 2400/1.60.',
    keyConcepts: ['table with distance and time', 'headers with units', 'ordered data', '2 d.p. values'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', 'decimal', '2 d.p.', '1.20'],
    feedbackHit: 'Correctly presented the data table with proper headers, units, and ordered values.',
    feedbackMiss: 'Table needs: (1) column headers "Total distance / m" and "Time / s"; (2) data in ascending order of distance; (3) units only in column headings, not in cells; (4) values to 2 d.p., including the ECF value from Q5c (1.20 s) for the 1800 m row.',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Correct gradient of LOBF seen or implied [1]. Speed = 1480 to 1520 m s⁻¹ [1].',
    keyConcepts: ['gradient = speed', 'read gradient from LOBF', '1480–1520 m s⁻¹'],
    keywords: ['gradient', 'line of best fit', 'speed', '1500', '1480', '1520', 'Δd/Δt'],
    feedbackHit: 'Correctly calculated the speed of sound from the gradient of the line of best fit.',
    feedbackMiss: 'Speed = gradient of the distance-time graph = Δdistance / Δtime. Use two points on the line of best fit (not data points). Answer should be in the range 1480–1520 m s⁻¹.',
  } as MSEntry,

  q5f: {
    marks: 2,
    exemplar: 'Identification of the data point at 1000 m / time ≈ 0.80 s [1]. Time is too low — should be greater to follow the trend and be closer to the line of best fit [1].',
    keyConcepts: ['identify anomalous point', 'time too low', 'should be higher to match LOBF'],
    keywords: ['anomalous', '1000 m', '0.80 s', 'too low', 'higher', 'line of best fit', 'outlier'],
    feedbackHit: 'Correctly identified the anomalous point and stated the time should be higher.',
    feedbackMiss: 'The anomalous point is at 1000 m / time ≈ 0.80 s — it lies above the line of best fit (a 1000 m distance should take more time). The actual time should be higher (greater) than the recorded value to be consistent with the trend.',
  } as MSEntry,

  q5g: {
    marks: 3,
    exemplar: 'Sound faster at higher temperature [1]. Temperature linked to kinetic energy OR speed of particles [1]. Time between collisions is reduced OR faster rate of energy transfer between particles [1].',
    keyConcepts: ['higher temperature → faster sound', 'temperature links to particle kinetic energy', 'faster particles → quicker energy transfer / shorter time between collisions'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particles', 'collisions', 'energy transfer', 'speed'],
    feedbackHit: 'Correctly explained temperature-dependent sound speed using particle theory.',
    feedbackMiss: 'Three steps: (1) sound travels faster at higher temperatures; (2) higher temperature means particles have greater kinetic energy / move faster; (3) faster-moving particles collide more frequently → energy is transferred more quickly through the water → sound travels faster.',
  } as MSEntry,

  // ── Q6: Spring oscillations ──
  q6a: {
    marks: 14,
    exemplar: 'Full design: IV = mass on spring; DV = time period; two CVs justified (spring constant/stiffness AND amplitude of oscillation); testable hypothesis (If mass increases, then time period increases, because of greater inertia); data collection with ≥5 masses and 3 trials, calculate mean; detailed replicable method.',
    keyConcepts: ['IV = mass', 'DV = time period', 'CV = spring constant AND amplitude', 'hypothesis with because', '5+ increments', '3 trials', 'mean', 'detailed method'],
    keywords: ['mass', 'time period', 'spring', 'control', 'hypothesis', 'if', 'then', 'because', 'trials', 'mean', 'method', 'repeat', 'oscillation', 'displace', 'release'],
    feedbackHit: 'Provided a complete, well-justified experimental design covering all required elements.',
    feedbackMiss: 'Must include: IV (mass), DV (time period), two justified CVs (spring constant, amplitude), a testable if/then/because hypothesis, method with at least 5 mass values × 3 trials, plan to time 10 oscillations and calculate the mean time period.',
  } as MSEntry,

  q6b: {
    marks: 5,
    exemplar: 'IV identified or implied (e.g. spring constant/stiffness/different spring) [1]. DV identified as time period [1]. Research question stated [1]. Mass identified as a control variable [1]. One other control variable (e.g. amplitude) [1].',
    keyConcepts: ['new IV ≠ mass', 'DV = time period', 'research question', 'mass as control', 'second control variable'],
    keywords: ['spring constant', 'stiffness', 'time period', 'research question', 'control', 'mass', 'amplitude', 'length'],
    feedbackHit: 'Suggested a valid second investigation with appropriate variables and research question.',
    feedbackMiss: 'Must not repeat mass as IV. Good choices for new IV: spring constant (use different springs), amplitude of oscillation, number of coils. DV remains time period. Must include a research question and two control variables (mass is the most important control here).',
  } as MSEntry,

  // ── Q7: Stopping distance (motorway) ──
  q7a: {
    marks: 4,
    exemplar: 'v² = u² + 2as OR s = u²/2a [1]. 900/(2×3) = s OR 30²/(2×3) = s [1]. s = 150 [1]. m [1].',
    keyConcepts: ['v² = u² + 2as', 'u = 30 m/s', 'a = 3 m/s²', 's = 150 m'],
    keywords: ['v² = u² + 2as', '30', '900', '3', '150', 'metres', 'braking distance', 'deceleration'],
    feedbackHit: 'Correctly applied the kinematics equation and calculated 150 m braking distance.',
    feedbackMiss: 'Use v² = u² + 2as with v = 0, u = 30 m s⁻¹, a = −3 m s⁻². Rearranging: s = u²/(2a) = 900/(2×3) = 900/6 = 150 m. Award the unit mark separately.',
  } as MSEntry,

  q7b: {
    marks: 2,
    exemplar: 'Texting while driving → driver factor; Thick fog → environmental factor; Bald tyres → car factor; Failed brake pads → car factor; Feeling drowsy → driver factor; Ice on the road → environmental factor. (2 correct = 1 mark; all correct = 2 marks)',
    keyConcepts: ['texting = driver factor', 'thick fog = environmental', 'bald tyres = car factor', 'failed brake pads = car factor', 'drowsy = driver factor', 'ice on road = environmental'],
    keywords: ['driver', 'environmental', 'car', 'texting', 'fog', 'tyres', 'brake', 'drowsy', 'ice'],
    feedbackHit: 'Correctly classified all six factors into driver, environmental, or car categories.',
    feedbackMiss: 'Driver factors (relate to the person driving): texting while driving, feeling drowsy. Car factors (relate to the vehicle): bald tyres, failed brake pads. Environmental factors (relate to conditions outside): thick fog, ice on the road.',
  } as MSEntry,

  q7c: {
    marks: 4,
    exemplar: 'Drowsiness: increases time taken to respond / delayed reactions [1] → so thinking distance / stopping distance increases [1]. Ice on the road: friction is lower on ice [1] → so braking distance / stopping distance increases [1].',
    keyConcepts: ['drowsiness increases reaction time → thinking distance', 'ice reduces friction → braking distance', 'both increase stopping distance'],
    keywords: ['drowsy', 'reaction time', 'thinking distance', 'friction', 'ice', 'braking distance', 'increases', 'stopping distance'],
    feedbackHit: 'Correctly explained how each factor affects its relevant component of stopping distance.',
    feedbackMiss: 'Two sets of two marks: Drowsiness → increases reaction time → increases thinking distance. Ice on the road → reduces friction between tyres and road → less braking force → greater braking distance. Both ultimately increase total stopping distance.',
  } as MSEntry,

  // ── Q8: Driverless delivery trucks ──
  q8a: {
    marks: 14,
    exemplar: 'Mark against rubric: Driverless technology (safety features) [up to 4]; Society (advantages and disadvantages) [up to 4]; Economic implications [up to 4]; Concluding appraisal [up to 2]. Total 14 marks.',
    keyConcepts: ['driverless technology safety', 'societal advantages and disadvantages', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'reaction time', 'fatigue', 'society', 'jobs', 'freight', 'economic', 'cost', 'conclude', 'evaluate', 'driverless', 'truck'],
    feedbackHit: 'Provided a comprehensive, balanced evaluation with safety, societal, and economic dimensions plus a justified conclusion.',
    feedbackMiss: 'Structure around four areas: (1) Safety technology: driverless trucks use sensors/AI with faster reactions, no driver fatigue on long routes; (2) Society: safer roads AND loss of driving jobs, faster goods delivery; (3) Economic: high development cost AND cheaper freight long-term, impact on the haulage industry; (4) Concluding appraisal: justify your opinion by linking all arguments together.',
  } as MSEntry,

}
