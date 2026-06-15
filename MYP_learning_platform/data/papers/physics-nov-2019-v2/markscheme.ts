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

  // ── Q1: Momentum (curling stone on ice) ──
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
    exemplar: 'The curling stone has a greater mass OR the stone is heavier than the puck.',
    keyConcepts: ['greater mass → greater momentum at same speed', 'p = mv'],
    keywords: ['greater mass', 'heavier', 'mass', 'momentum', 'same speed', 'stone'],
    feedbackHit: 'Correctly identified greater mass as the reason for greater momentum.',
    feedbackMiss: 'Since p = mv and both move at the same speed (v is the same), the object with greater mass has greater momentum. The granite curling stone has much greater mass than the plastic puck.',
  } as MSEntry,

  q1c: {
    marks: 3,
    exemplar: 'The stone has forward momentum [1]. A force is required to change an object\'s momentum [1]. As almost no net force acts on the stone on smooth ice, it keeps moving / Newton\'s first law states an object continues at the same velocity unless a net force acts [1].',
    keyConcepts: ['stone has forward momentum', 'force required to change momentum', 'no net force → velocity unchanged', 'Newton\'s first law / inertia'],
    keywords: ['forward momentum', 'force', 'change', 'momentum', 'no force', 'velocity', 'Newton', 'first law', 'inertia', 'stone'],
    feedbackHit: 'Correctly applied Newton\'s first law / momentum to explain the stone\'s motion.',
    feedbackMiss: 'Three marks require three ideas: (1) the stone is moving forward at 4 m s⁻¹ (has forward momentum); (2) a force is needed to change momentum; (3) almost no net force acts on the stone on smooth ice, so it continues moving forward (Newton\'s 1st law).',
  } as MSEntry,

  q1d: {
    marks: 1,
    exemplar: 'Friction (between the stone and the ice creates a backward force that slows the stone).',
    keyConcepts: ['friction opposes motion', 'friction slows the stone'],
    keywords: ['friction', 'force', 'slows', 'stops', 'ice', 'backward'],
    feedbackHit: 'Correctly identified friction as the force that slows and stops the stone.',
    feedbackMiss: 'Although ice is slippery, a small friction force still acts between the stone and the ice. This backward force gradually reduces the stone\'s momentum until it stops.',
  } as MSEntry,

  // ── Q2: Photocopier toner drum ──
  q2a: {
    marks: 3,
    exemplar: 'P = IV OR I = P/V OR I = 1380/230 [1]. = 6 [1]. A or amp(s) [1].',
    keyConcepts: ['P = IV', 'I = P/V', 'current = 6 A', 'unit: amperes'],
    keywords: ['P = IV', 'I = P/V', '1380', '230', '6', 'A', 'ampere', 'current'],
    feedbackHit: 'Correctly applied P = IV, calculated I = 6 A with correct unit.',
    feedbackMiss: 'Use P = IV rearranged: I = P/V = 1380 W ÷ 230 V = 6 A. Award the unit mark separately — must state A (amperes).',
  } as MSEntry,

  q2b: {
    marks: 2,
    exemplar: 'Toner grains are (negatively) charged [1]. Reference to attraction between opposite charges, so they are attracted to the positive image areas [1].',
    keyConcepts: ['toner grains are negatively charged', 'opposite charges attract', 'negative attracted to positive drum'],
    keywords: ['negative', 'charged', 'opposite', 'attract', 'positive', 'drum', 'toner'],
    feedbackHit: 'Correctly explained electrostatic attraction between negatively charged toner and the positive drum areas.',
    feedbackMiss: 'Two steps: (1) the toner grains are negatively charged; (2) opposite charges attract, so the negatively charged toner is attracted to the positively charged image areas of the drum.',
  } as MSEntry,

  q2c: {
    marks: 2,
    exemplar: 'Leftover negative toner on the positive drum reduces/neutralizes the positive charge in the image areas [1]. (So) the force of attraction is weaker / the electric field is weaker and less new toner is attracted, making copies faint [1].',
    keyConcepts: ['leftover toner neutralizes drum charge', 'weaker electric field', 'reduced attraction'],
    keywords: ['neutralize', 'leftover', 'toner', 'positive', 'weaker', 'field', 'attraction', 'clean', 'faint'],
    feedbackHit: 'Correctly explained how accumulated toner reduces the drum\'s charge and weakens attraction.',
    feedbackMiss: 'As leftover negative toner builds up on the positive drum, it cancels some of the positive charge in the image areas. This weakens the electric field and the attractive force, so less new toner is attracted and copies become faint — the drum needs cleaning to restore its charge pattern.',
  } as MSEntry,

  // ── Q3: EM spectrum / metro travel card ──
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
    exemplar: 'Any reasonable suggestion: infra-red needs a clear line of sight and would be blocked by a wallet/bag; radio waves pass through the wallet or case; infra-red has higher energy.',
    keyConcepts: ['radio waves pass through materials', 'infrared needs line of sight / blocked', 'infrared higher energy than radio'],
    keywords: ['line of sight', 'blocked', 'wallet', 'bag', 'pass through', 'infra-red', 'higher energy'],
    feedbackHit: 'Gave a valid scientific advantage of radio waves over infrared for a travel card.',
    feedbackMiss: 'Valid answers include: infrared needs a clear line of sight and is blocked by a wallet/bag; radio waves pass through the wallet or card case; infrared has higher energy.',
  } as MSEntry,

  q3c: {
    marks: 3,
    exemplar: 'v = fλ [1]. = 13 560 000 × 22.12 [1]. = 3.000 × 10⁸ OR 3.00 × 10⁸ m s⁻¹ [1].',
    keyConcepts: ['v = fλ', 'frequency × wavelength', 'scientific notation', 'speed of light ≈ 3 × 10⁸'],
    keywords: ['v = fλ', '13560000', '22.12', '3 × 10⁸', '3.000 × 10⁸', 'scientific notation', 'm s⁻¹'],
    feedbackHit: 'Correctly applied v = fλ and expressed the answer in scientific notation.',
    feedbackMiss: 'v = fλ = 13 560 000 Hz × 22.12 m = 3.000 × 10⁸ m s⁻¹ ≈ 3.00 × 10⁸ m s⁻¹. Award 2 marks for a correct answer without showing the calculation. Answer must be in scientific notation.',
  } as MSEntry,

  q3d: {
    marks: 2,
    exemplar: 'Induction means the card needs no internal power source [1]. Alternative: a battery would lose power over time (requiring a replacement card) OR a battery would be too thick to fit inside a thin card [1].',
    keyConcepts: ['no battery needed', 'battery loses power over time', 'card powered wirelessly'],
    keywords: ['no battery', 'power source', 'lose power', 'replace', 'too large', 'thick', 'induction', 'wireless'],
    feedbackHit: 'Correctly identified an advantage of induction powering over a battery.',
    feedbackMiss: 'Key advantage: the card needs no internal battery. A battery would: (a) eventually run out requiring the card to be replaced, or (b) be too thick to fit inside a thin card. Induction from the gate reader provides power on demand.',
  } as MSEntry,

  q3e: {
    marks: 3,
    exemplar: 'AC in the reader coil produces an alternating magnetic field/flux [1]. The magnetic field passes across the gap to the card coil [1]. The changing magnetic field in the card induces an EMF/current in the card coil [1].',
    keyConcepts: ['AC → alternating magnetic field', 'field passes to card coil', 'changing field induces EMF/current', 'electromagnetic induction'],
    keywords: ['alternating', 'magnetic field', 'flux', 'changing', 'card', 'induce', 'EMF', 'current', 'coil'],
    feedbackHit: 'Correctly described all three steps of electromagnetic induction in the card system.',
    feedbackMiss: 'Three steps: (1) the AC in the reader coil creates an alternating (changing) magnetic field; (2) this field passes across the small gap to the card coil; (3) the changing magnetic field through the card coil induces an EMF (and therefore a current) in the card coil — this is electromagnetic induction.',
  } as MSEntry,

  // ── Q4: Hinged dressing-table mirrors virtual-images investigation ──
  q4a: {
    marks: 1,
    exemplar: 'How does the angle between the 2 (plane) hinged mirrors affect the number of virtual images of the ornament?',
    keyConcepts: ['research question', 'angle as IV', 'number of images as DV'],
    keywords: ['angle', 'mirrors', 'number', 'images', 'affect', 'research question'],
    feedbackHit: 'Correctly stated a research question identifying angle as IV and number of images as DV.',
    feedbackMiss: 'The research question must name both: the independent variable (angle between the mirrors) and the dependent variable (number of virtual images observed). Accept responses phrased as questions.',
  } as MSEntry,

  q4b: {
    marks: 3,
    exemplar: 'IV = angle between the mirrors only [1]. DV = number of images observed only [1]. Control = the ornament used AND its position AND size of the mirrors AND shape of the mirrors used (two correct = 1 mark; all correct = 2 marks) [2].',
    keyConcepts: ['IV = angle between mirrors', 'DV = number of images', 'controls = ornament, position, mirror size, mirror shape'],
    keywords: ['independent', 'angle', 'dependent', 'images', 'control', 'ornament', 'position', 'size', 'shape'],
    feedbackHit: 'Correctly classified all variables.',
    feedbackMiss: 'IV = only the angle between the mirrors (what you change). DV = only the number of images observed (what you count). Everything else is a control variable: the ornament used, its position, and the size and shape of the mirrors.',
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
    exemplar: 'As angle increases, number of images decreases ✓ [1]. Conditions of inverse proportion stated (N × angle = constant) or implied in calculation [1]. Data from graph used to show the relationship is NOT exactly inversely proportional (e.g. 9×36 = 324, 7×45 = 315, 5×60 = 300, 3×90 = 270, 2×120 = 240 — not constant) [1].',
    keyConcepts: ['inverse relationship confirmed', 'test N × angle = constant', 'not perfectly inversely proportional from data'],
    keywords: ['inverse', 'proportional', 'N × angle', 'constant', 'not exactly', 'calculation', 'data'],
    feedbackHit: 'Correctly identified the inverse trend and tested proportionality with graph data.',
    feedbackMiss: 'Three marks: (1) confirm images decrease as angle increases; (2) state the condition for inverse proportion: N × angle = constant; (3) test with data from the graph — calculate N × angle for several points (9×36 = 324, 7×45 = 315, 5×60 = 300, 3×90 = 270, 2×120 = 240). The product is not constant, so the relationship is approximately but not perfectly inversely proportional.',
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

  // ── Q5: Speed of sound (echo off a canyon cliff) ──
  q5a: {
    marks: 3,
    exemplar: 'Distance = 2 × 140 = 280 m (noted or implied) [1]. Evidence of speed = distance/time [1]. 330 m s⁻¹ (rounded correctly to 2 s.f.) [1].',
    keyConcepts: ['total distance = 2 × 140 m', 'speed = distance / time', '330 m s⁻¹ at 2 s.f.'],
    keywords: ['280', '0.85', 'speed', 'distance', 'time', '330', '2 s.f.', 'm s⁻¹'],
    feedbackHit: 'Correctly calculated the speed of sound as 330 m s⁻¹ to 2 significant figures.',
    feedbackMiss: 'The sound travels to the cliff (140 m) AND back (140 m) = 280 m total. Speed = 280/0.85 = 329 m s⁻¹ ≈ 330 m s⁻¹ (2 s.f.). Award the third mark if an incorrect total distance is correctly rounded to 2 s.f.',
  } as MSEntry,

  q5b: {
    marks: 4,
    exemplar: 'Repeat the time measurement several times at this distance and take a mean [1] — this reduces the effect of random errors in timing [1]. Stand further from the cliff so the sound travels for longer [1] — because small timing errors (human reactions) then become less significant relative to the longer total time [1].',
    keyConcepts: ['repeat measurements reduce random error', 'greater distance → smaller relative timing error', 'no new equipment required'],
    keywords: ['repeat', 'multiple', 'average', 'mean', 'distance', 'further', 'longer time', 'random error', 'reaction time'],
    feedbackHit: 'Described and justified two valid improvements using the same basic method.',
    feedbackMiss: 'Two improvements WITHOUT new equipment: (1) Take more time measurements and average — reduces random timing errors. (2) Stand further from the cliff — this makes the travel time longer, so human reaction-time error becomes a smaller fraction of the total. Do not suggest electronic timing (that needs new equipment).',
  } as MSEntry,

  q5c: {
    marks: 2,
    exemplar: '3.05 ± 0.03 AND 0.05 ± 0.03 (both peak times identified) [1]. (3.05 − 0.05 =) 3.00 ± 0.06 s [1].',
    keyConcepts: ['read two times from recording', 'time difference = echo time', 't = 3.00 s'],
    keywords: ['3.05', '0.05', '3.00', 'subtract', 'difference', 'time', 'echo', 'peak'],
    feedbackHit: 'Correctly read both times and calculated the time difference.',
    feedbackMiss: 'Read the time of the first sound and the time of the echo from the recording. Subtract: echo time − whistle time = 3.05 − 0.05 = 3.00 s. Award 2 marks for the correct answer.',
  } as MSEntry,

  q5d: {
    marks: 4,
    exemplar: 'Column headers: Total distance (m) AND Time (s) [1]. Results in order [1]. Units in column headings only [1]. Data to 2 d.p. including ECF value from part (c) (3.00 s for the 1020 m row) [1]. Expected times: 280/0.85, 500/1.52, 760/2.30, 1020/3.00, 1320/4.00.',
    keyConcepts: ['table with distance and time', 'headers with units', 'ordered data', '2 d.p. values'],
    keywords: ['table', 'distance', 'time', 'headers', 'units', 'order', 'decimal', '2 d.p.', '3.00'],
    feedbackHit: 'Correctly presented the data table with proper headers, units, and ordered values.',
    feedbackMiss: 'Table needs: (1) column headers "Total distance / m" and "Time / s"; (2) data in ascending order of distance; (3) units only in column headings, not in cells; (4) values to 2 d.p., including the ECF value from Q5c (3.00 s) for the 1020 m row.',
  } as MSEntry,

  q5e: {
    marks: 2,
    exemplar: 'Correct gradient of LOBF seen or implied [1]. Speed = 325 to 345 m s⁻¹ [1].',
    keyConcepts: ['gradient = speed', 'read gradient from LOBF', '325–345 m s⁻¹'],
    keywords: ['gradient', 'line of best fit', 'speed', '330', '340', '325', '345', 'Δd/Δt'],
    feedbackHit: 'Correctly calculated the speed of sound from the gradient of the line of best fit.',
    feedbackMiss: 'Speed = gradient of the distance-time graph = Δdistance / Δtime. Use two points on the line of best fit (not data points). Answer should be in the range 325–345 m s⁻¹.',
  } as MSEntry,

  q5f: {
    marks: 2,
    exemplar: 'Identification of the data point at 600 m / time ≈ 2.30 s [1]. Time is too high — should be lower to follow the trend and be closer to the line of best fit [1].',
    keyConcepts: ['identify anomalous point', 'time too high', 'should be lower to match LOBF'],
    keywords: ['anomalous', '600 m', '2.30 s', 'too high', 'lower', 'line of best fit', 'outlier'],
    feedbackHit: 'Correctly identified the anomalous point and stated the time should be lower.',
    feedbackMiss: 'The anomalous point is at 600 m / time ≈ 2.30 s — it lies well below the line of best fit (a 600 m distance should take less time). The actual time should be lower than the recorded value to be consistent with the trend.',
  } as MSEntry,

  q5g: {
    marks: 3,
    exemplar: 'Sound faster at higher temperature [1]. Temperature linked to kinetic energy OR speed of particles [1]. Time between collisions is reduced OR faster rate of energy transfer between particles [1].',
    keyConcepts: ['higher temperature → faster sound', 'temperature links to particle kinetic energy', 'faster particles → quicker energy transfer / shorter time between collisions'],
    keywords: ['faster', 'higher temperature', 'kinetic energy', 'particles', 'collisions', 'energy transfer', 'speed'],
    feedbackHit: 'Correctly explained temperature-dependent sound speed using particle theory.',
    feedbackMiss: 'Three steps: (1) sound travels faster at higher temperatures; (2) higher temperature means particles have greater kinetic energy / move faster; (3) faster-moving particles collide more frequently → energy is transferred more quickly through the air → sound travels faster.',
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

  // ── Q7: Stopping distance (icy winter road) ──
  q7a: {
    marks: 4,
    exemplar: 'v² = u² + 2as OR s = u²/2a [1]. 625/(2×2.5) = s OR 25²/(2×2.5) = s [1]. s = 125 [1]. m [1].',
    keyConcepts: ['v² = u² + 2as', 'u = 25 m/s', 'a = 2.5 m/s²', 's = 125 m'],
    keywords: ['v² = u² + 2as', '25', '625', '2.5', '125', 'metres', 'braking distance', 'deceleration'],
    feedbackHit: 'Correctly applied the kinematics equation and calculated 125 m braking distance.',
    feedbackMiss: 'Use v² = u² + 2as with v = 0, u = 25 m s⁻¹, a = −2.5 m s⁻². Rearranging: s = u²/(2a) = 625/(2×2.5) = 625/5 = 125 m. Award the unit mark separately.',
  } as MSEntry,

  q7b: {
    marks: 2,
    exemplar: 'Adjusting the radio → driver factor; Falling snow → environmental factor; Worn brake discs → car factor; Under-inflated tyres → car factor; Driving while medicated → driver factor; Wet leaves on the road → environmental factor. (2 correct = 1 mark; all correct = 2 marks)',
    keyConcepts: ['adjusting radio = driver factor', 'falling snow = environmental', 'worn brake discs = car factor', 'under-inflated tyres = car factor', 'medicated = driver factor', 'wet leaves = environmental'],
    keywords: ['driver', 'environmental', 'car', 'radio', 'snow', 'brake', 'tyres', 'medicated', 'leaves'],
    feedbackHit: 'Correctly classified all six factors into driver, environmental, or car categories.',
    feedbackMiss: 'Driver factors (relate to the person driving): adjusting the radio, driving while medicated. Car factors (relate to the vehicle): worn brake discs, under-inflated tyres. Environmental factors (relate to conditions outside): falling snow, wet leaves on the road.',
  } as MSEntry,

  q7c: {
    marks: 4,
    exemplar: 'Medication: increases time taken to respond / delayed reactions [1] → so thinking distance / stopping distance increases [1]. Wet leaves: friction is lower on wet leaves [1] → so braking distance / stopping distance increases [1].',
    keyConcepts: ['medication increases reaction time → thinking distance', 'wet leaves reduce friction → braking distance', 'both increase stopping distance'],
    keywords: ['medication', 'reaction time', 'thinking distance', 'friction', 'wet leaves', 'braking distance', 'increases', 'stopping distance'],
    feedbackHit: 'Correctly explained how each factor affects its relevant component of stopping distance.',
    feedbackMiss: 'Two sets of two marks: Medication → increases reaction time → increases thinking distance. Wet leaves → reduce friction between tyres and road → less braking force → greater braking distance. Both ultimately increase total stopping distance.',
  } as MSEntry,

  // ── Q8: Autonomous robotaxis ──
  q8a: {
    marks: 14,
    exemplar: 'Mark against rubric: Robotaxi technology (safety features) [up to 4]; Society (advantages and disadvantages) [up to 4]; Economic implications [up to 4]; Concluding appraisal [up to 2]. Total 14 marks.',
    keyConcepts: ['robotaxi technology safety', 'societal advantages and disadvantages', 'economic implications', 'concluding appraisal'],
    keywords: ['safety', 'sensors', 'reaction time', 'society', 'jobs', 'mobility', 'economic', 'cost', 'fare', 'conclude', 'evaluate', 'robotaxi'],
    feedbackHit: 'Provided a comprehensive, balanced evaluation with safety, societal, and economic dimensions plus a justified conclusion.',
    feedbackMiss: 'Structure around four areas: (1) Safety technology: robotaxis use sensors/AI with faster reactions, no tired or distracted driver; (2) Society: safer streets AND loss of taxi-driving jobs, mobility for elderly/disabled; (3) Economic: high development cost AND cheaper fares, impact on taxi drivers and operators; (4) Concluding appraisal: justify your opinion by linking all arguments together.',
  } as MSEntry,

}
