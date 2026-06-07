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

  // ── Q1: Electromagnetic Waves ──────────────────────────────
  'q1a': {
    marks: 2,
    exemplar: 'Radio waves travel at the same speed as light waves in a vacuum [1]. Radio waves have a longer wavelength than light waves [1].',
    keyConcepts: ['all EM waves travel at the same speed in a vacuum (3.0 × 10⁸ m s⁻¹)', 'radio waves have the longest wavelength in the EM spectrum'],
    keywords: ['same speed', 'speed of light', 'longer wavelength', 'electromagnetic spectrum', 'radio waves'],
    feedbackHit: 'Correctly identified that radio waves travel at the same speed and have longer wavelength than light.',
    feedbackMiss: 'All electromagnetic waves travel at the same speed (3.0 × 10⁸ m s⁻¹) in a vacuum. Radio waves have a much longer wavelength than visible light.',
  },

  'q1b': {
    type: 'mcq',
    correct: 1, // B. Diffraction (index 1)
  } as MCQEntry,

  'q1c': {
    marks: 3,
    exemplar: 'Evidence of conversion of km to m (7 km = 7000 m) seen or implied [1]. Correct answer: t = 7000/(3.0 × 10⁸) = 2.333... × 10⁻⁵ s [1]. Expressed in standard form: **2.3 × 10⁻⁵ s** [1]. Award 3 marks if correct answer in standard form is seen alone.',
    keyConcepts: ['t = d/v', 'convert km to m before dividing', 'express answer in standard form (scientific notation)'],
    keywords: ['time = distance/speed', '7000 m', '3.0 × 10⁸', '2.3 × 10⁻⁵ s', 'standard form', 'scientific notation'],
    feedbackHit: 'Correctly converted units, calculated time, and expressed in standard form.',
    feedbackMiss: 'Step 1: Convert 7 km to metres = 7000 m. Step 2: t = d/v = 7000 / (3.0 × 10⁸) = 2.33 × 10⁻⁵ s. Express in standard form: 2.3 × 10⁻⁵ s.',
  },

  'q1d': {
    marks: 2,
    exemplar: 'Accept any 2 from: able to communicate while moving (e.g. boats) [1]; communication over larger distances or with other countries / previously inaccessible locations [1]; high speed communication is possible [1]; no failures of wired connections or saves material/money for wired connections [1]; led to development of (named) new technology [1]. Max 2 marks.',
    keyConcepts: ['radio waves enable mobile and long-distance communication', 'no physical infrastructure (wires) needed', 'high-speed signal transmission'],
    keywords: ['mobile communication', 'long distance', 'no wires', 'high speed', 'new technology', 'inaccessible areas'],
    feedbackHit: 'Gave two valid reasons why radio communication was an important discovery.',
    feedbackMiss: 'Suggest any two advantages: communication while moving, over long distances, without wires, at high speed, or the technologies it enabled (TV, mobile phones, etc.).',
  },

  // ── Q2: Radioactivity ─────────────────────────────────────
  'q2a': {
    marks: 2,
    exemplar: '29 is the number of protons (atomic number) in the nucleus [1]. 63 is the mass number (number of nucleons) in the nucleus [1].',
    keyConcepts: ['atomic number = number of protons', 'mass number = total number of protons + neutrons (nucleons)'],
    keywords: ['atomic number', 'proton number', 'mass number', 'nucleons', 'protons'],
    feedbackHit: 'Correctly identified 29 as atomic number (protons) and 63 as mass number.',
    feedbackMiss: 'Atomic number (29) = number of protons. Mass number (63) = protons + neutrons (total nucleons).',
  },

  'q2b': {
    marks: 3,
    exemplar: 'Correct image selected: the one showing deflection towards the positive plate [1]. Beta particles are electrons / are negatively charged [1]. (So they are) deflected towards the positive plate in an electric field [1]. Only consider the justification if the correct image (C) is selected.',
    keyConcepts: ['beta particles = electrons → negatively charged', 'negative charges attracted to positive plate in electric field', 'opposite charges attract'],
    keywords: ['beta particles', 'electrons', 'negatively charged', 'positive plate', 'electric field', 'deflected'],
    feedbackHit: 'Selected correct image and justified with beta = electrons → attracted to positive plate.',
    feedbackMiss: 'Beta particles are electrons (negatively charged). In an electric field, negative charges are attracted to the positive plate and repelled by the negative plate. Select the image showing deflection towards the positive plate.',
  },

  'q2c': {
    marks: 2,
    exemplar: 'Evidence of use of half-life method (begin at 100 g, halve to 50 g) [1]. Answer: 62 h (accept 60 ± 2 h) [1]. Award 2 marks for correct answer with no working shown.',
    keyConcepts: ['half-life = time for radioactive material to halve in amount', 'read from graph: time for initial mass → half initial mass'],
    keywords: ['half-life', 'half the mass', 'graph reading', '62 h', 'radioactive decay'],
    feedbackHit: 'Correctly read half-life from the graph.',
    feedbackMiss: 'To find half-life: find the initial mass on the y-axis, then find when the mass has halved. Read the corresponding time from the x-axis. Accept 60–62 hours.',
  },

  'q2d': {
    marks: 2,
    exemplar: 'Half-life (time period) is suitable to allow treatment / short enough to limit long-term effects [1]. Beta or gamma radiation can kill cancer cells or tumours [1]. Ignore references to penetrating power for second mark.',
    keyConcepts: ['suitable half-life: short enough to minimise long-term damage, long enough for treatment', 'beta/gamma radiation ionises and kills cancer cells'],
    keywords: ['half-life', 'suitable', 'short enough', 'beta radiation', 'gamma radiation', 'cancer cells', 'treatment'],
    feedbackHit: 'Explained why the half-life is suitable and how beta/gamma radiation treats cancer.',
    feedbackMiss: 'Two points: (1) half-life suitable — long enough for treatment, short enough to limit exposure, (2) beta/gamma kills cancer cells by ionisation.',
  },

  // ── Q3: Kinetic Energy & Hybrid Cars ──────────────────────
  'q3a': {
    marks: 2,
    exemplar: 'KE = ½mv² seen or implied [1]. Correct answer: ½ × 1600 × 22² = ½ × 1600 × 484 = **387 200 J** (accept 387 kJ) [1]. Accept correctly rounded answers to 2+ s.f.',
    keyConcepts: ['KE = ½mv²', 'square the speed before multiplying'],
    keywords: ['KE = ½mv²', '387 200 J', '387 kJ', 'kinetic energy', 'mass', 'velocity squared'],
    feedbackHit: 'Correctly applied KE = ½mv².',
    feedbackMiss: 'KE = ½mv² = ½ × 1600 × (22)² = ½ × 1600 × 484 = 387 200 J. Don\'t forget to square the speed.',
  },

  'q3b': {
    marks: 4,
    exemplar: 'Use of v² = u² + 2as [1]. Correct substitution: 0 = 22² + 2a × 25 [1]. Correct answer: a = −484/50 = **−9.68 m s⁻²** (to 3 s.f.) [1]. Unit mark: m s⁻² [1]. Award 3 marks if only 9.68 is seen (magnitude). Superscripts must be used correctly.',
    keyConcepts: ['v² = u² + 2as', 'v = 0 (stops completely)', 'u = 22 m s⁻¹, s = 25 m', 'negative answer indicates deceleration'],
    keywords: ['v² = u² + 2as', '−9.68 m s⁻²', 'deceleration', '3 significant figures', 'braking'],
    feedbackHit: 'Correctly used v² = u² + 2as and got −9.68 m s⁻² to 3 s.f.',
    feedbackMiss: 'v² = u² + 2as → 0 = 22² + 2(a)(25) → −484 = 50a → a = −9.68 m s⁻². Units: m s⁻² (use superscripts, not caret).',
  },

  'q3c': {
    marks: 1,
    exemplar: 'Heat energy cannot be used (by the car) / cannot perform work (WTTE). Do not accept "wasted / lost energy" as this is given in the question.',
    keyConcepts: ['wasted heat energy cannot be converted back to useful kinetic energy', 'heat dissipates to surroundings and cannot drive the car'],
    keywords: ['cannot perform work', 'cannot be used', 'not useful', 'dissipated'],
    feedbackHit: 'Correctly stated that heat energy cannot perform work/drive the car.',
    feedbackMiss: 'Heat energy is wasted because it cannot be converted back to useful energy to drive the car forward — it cannot perform work.',
  },

  'q3d': {
    marks: 1,
    exemplar: 'Kinetic energy → Chemical potential energy [for the missing first box]. (The Electrical energy is shown; the chemical potential energy is where it is stored.) All correct for 1 mark.',
    keyConcepts: ['regenerative braking: KE → electrical energy → chemical potential (battery)', 'energy stored in battery as chemical potential energy'],
    keywords: ['kinetic energy', 'electrical energy', 'chemical potential energy', 'battery', 'regenerative'],
    feedbackHit: 'Correctly identified all energy forms in the regenerative braking sequence.',
    feedbackMiss: 'The regenerative braking sequence: Kinetic → [Kinetic / mechanical] → Electrical energy → [Chemical potential energy stored in battery] → (some heat loss as Thermal).',
  },

  'q3e': {
    marks: 1,
    exemplar: 'Energy (stored in the battery) can be transformed into kinetic energy (to drive the car) [1]. Accept: energy stored in the battery can be transformed into electrical energy to drive the car.',
    keyConcepts: ['battery stores energy that would otherwise be wasted', 'stored chemical potential energy → electrical → kinetic reduces need for fuel'],
    keywords: ['stored energy', 'kinetic energy', 'battery', 'less fuel', 'electrical energy'],
    feedbackHit: 'Explained that stored battery energy reduces fuel needed.',
    feedbackMiss: 'The battery stores energy recovered during braking. This stored energy can later be converted to kinetic energy to drive the car, reducing the amount of fuel needed.',
  },

  'q3f': {
    marks: 2,
    exemplar: 'Burning fuel produces carbon dioxide (CO₂) [1]. CO₂ is a greenhouse gas contributing to global warming / climate change, which affects all countries / future generations [1].',
    keyConcepts: ['burning fossil fuels → CO₂ emissions', 'CO₂ is greenhouse gas → global warming → affects everyone globally'],
    keywords: ['CO₂', 'carbon dioxide', 'greenhouse gas', 'global warming', 'climate change', 'global significance'],
    feedbackHit: 'Linked fuel reduction to CO₂ reduction and global warming.',
    feedbackMiss: 'Two steps: (1) burning fuel produces CO₂, (2) CO₂ causes global warming/climate change, which is a global issue affecting all countries.',
  },

  // ── Q4: Galileo's Ramp Experiment ─────────────────────────
  'q4a': {
    marks: 1,
    exemplar: 'How does the distance a ball rolls affect the time taken? (WTTE — any reasonable RQ linking distance as IV to time as DV.)',
    keyConcepts: ['research question links IV (distance) to DV (time)'],
    keywords: ['distance', 'time', 'research question', 'ball', 'ramp'],
    feedbackHit: 'Wrote a valid research question linking distance to time.',
    feedbackMiss: 'Format: "How does [IV: distance] affect [DV: time taken]?" Your question must clearly state both variables.',
  },

  'q4b': {
    marks: 3,
    exemplar: 'IV: distance travelled by ball only [1]. DV: time taken only [1]. CV: mass, size, angle of slope (any two, not IV or DV) [1].',
    keyConcepts: ['IV = what is changed (distance)', 'DV = what is measured (time)', 'CVs = what is kept constant (mass, size, angle)'],
    keywords: ['independent variable', 'distance', 'dependent variable', 'time', 'control variable', 'mass', 'size', 'angle'],
    feedbackHit: 'Correctly identified IV=distance, DV=time, and valid CVs.',
    feedbackMiss: 'IV = distance (what you change). DV = time (what you measure). CVs = mass of ball, size of ball, angle of slope (anything kept constant).',
  },

  'q4c': {
    marks: 2,
    exemplar: 'Weight of the ball / gravitational force / gravity (provides the force) [1]. Use of Newton\'s 2nd law (F = ma) to correctly link constant force to constant acceleration [1]. No need to explain why the force is constant.',
    keyConcepts: ['gravity/weight provides a constant force along the slope', 'F = ma: constant force on constant mass → constant acceleration (Newton\'s 2nd law)'],
    keywords: ['gravity', 'weight', 'constant force', 'Newton\'s second law', 'F = ma', 'constant acceleration'],
    feedbackHit: 'Identified gravity as the constant force and used F=ma to explain constant acceleration.',
    feedbackMiss: 'The force causing acceleration is gravity (weight component along slope). Since F and m are both constant, F = ma → a = F/m = constant.',
  },

  'q4d': {
    type: 'mcq',
    correct: 1, // B (index 1) — straight line through origin on s vs t² graph
  } as MCQEntry,

  'q4e': {
    marks: 3,
    exemplar: 'Unit = s² (seconds squared; do not accept s^2) [1]. Correct calculated value: 2.19² = 4.7961 [1]. Correctly rounded to 2 d.p.: **4.80** s² [1]. Award 2 marks for correctly rounded value to 2 d.p. only (4.80). Accept 4.796 or 4.8 for first calculated value mark.',
    keyConcepts: ['(time)² has units of s²', 'square the time value: 2.19² = 4.7961', 'round to consistent decimal places (2 d.p.)'],
    keywords: ['s²', 'seconds squared', '4.80', 'square', 'unit', 'consistent'],
    feedbackHit: 'Correctly gave unit s² and calculated 4.80.',
    feedbackMiss: 'Unit: s² (not s^2). Value: 2.19² = 4.7961 ≈ 4.80 (to 2 d.p., matching the other values in the column).',
  },

  'q4f': {
    marks: 1,
    exemplar: 'Accept any one: not using common/standard units (others cannot compare); measurements rely on having the same tool; all water clocks are different; difficulty in getting regular water flow / difficulty of construction.',
    keyConcepts: ['water clock lacks standardised units', 'non-standard measurement = results cannot be shared/replicated'],
    keywords: ['standard units', 'not universal', 'different clocks', 'cannot compare', 'reproducible'],
    feedbackHit: 'Explained that the water clock lacks standard units making results hard to share.',
    feedbackMiss: 'A water clock doesn\'t measure in standard units (like seconds). Other scientists with different water clocks would get different measurements for the same time, making results impossible to compare or replicate.',
  },

  'q4g': {
    marks: 1,
    exemplar: 'Stopwatch / stopclock / chronometer / digital timer. Accept any standard time-measuring instrument.',
    keyConcepts: ['modern time measurement uses standardised instruments calibrated in seconds'],
    keywords: ['stopwatch', 'stopclock', 'chronometer', 'timer', 'digital'],
    feedbackHit: 'Correctly named a stopwatch/stopclock.',
    feedbackMiss: 'A stopwatch (or stopclock/chronometer/digital timer) measures time in standard units (seconds) that all scientists can share and compare.',
  },

  'q4h': {
    marks: 4,
    exemplar: 'Reasonable new IV selected — NOT distance, NOT non-specific (e.g. "type of ball") [1]. Two reasonable CVs (not IV, not DV=time, not temperature/gravity/pressure for this context) [2]. Reasonable RQ linking new IV and DV (time) [1]. Award 0 marks for IV = distance.',
    keyConcepts: ['new IV must be different from original IV (distance) and DV (time)', 'CVs must include something from the variable list that is not the new IV', 'RQ must link new IV to time'],
    keywords: ['new IV', 'control variables', 'research question', 'time', 'angle', 'mass', 'size'],
    feedbackHit: 'Stated valid new IV, two appropriate CVs, and a clear research question.',
    feedbackMiss: 'New IV: angle of slope (or mass, size). CVs: two variables not the same as new IV (e.g. if IV = angle, then CVs = mass + size + distance). RQ: "How does [new IV] affect the time taken?"',
  },

  // ── Q5: Parachute Investigation ────────────────────────────
  'q5a': {
    marks: 3,
    exemplar: 'If surface area increases then the time taken to fall will increase [1]. Because air resistance will increase [1]. Because the parachute will have more collisions with air particles [1]. Accept correct responses appearing in any order in any box.',
    keyConcepts: ['larger surface area → more air particle collisions → greater air resistance', 'greater air resistance → smaller net downward force → slower fall → longer time'],
    keywords: ['surface area', 'time increases', 'air resistance', 'collisions', 'air particles', 'force', 'particle theory'],
    feedbackHit: 'Correctly linked larger surface area → more air collisions → greater resistance → longer fall time.',
    feedbackMiss: 'Three linked steps: (1) larger surface area → more collisions with air particles → (2) greater air resistance force → (3) slower fall/longer time.',
  },

  'q5b': {
    marks: 11,
    exemplar: `Marked on 4-category rubric:

Variables (max 4 marks):
- 1 mark: time implied as DV or surface area as IV (partially identified)
- 2 marks: IV = surface area AND DV = time stated
- 3 marks: IV and DV correct AND two CVs stated
- 4 marks: IV, DV, two CVs stated AND at least one CV correctly justified

Equipment (max 2 marks):
- 1 mark: equipment to measure time OR length stated
- 2 marks: equipment to measure BOTH time AND length/area stated

Method (max 4 marks):
- 1 mark: attempt at method linked to either surface area or time
- 2 marks: method linked to measuring both surface area and fall time
- 3 marks: complete method with measurements of surface area and time
- 4 marks: complete method including how to ensure sufficient/reliable data

Safety (max 1 mark):
- 1 mark: any sensible safety precaution (e.g. stand on stable platform, clear drop zone)`,
    keyConcepts: ['IV = surface area of parachute; DV = time to fall; CVs = mass, height of drop, material', 'equipment: stopwatch for time, ruler for area and height', 'safety: stable platform, clear area below'],
    keywords: ['surface area', 'time', 'IV', 'DV', 'control variable', 'mass', 'height', 'stopwatch', 'ruler', 'method', 'safety'],
    feedbackHit: 'Full design with justified variables, equipment for time and length, clear method with safety consideration.',
    feedbackMiss: 'Must include: IV=surface area, DV=time, 2 justified CVs (mass, drop height); equipment for measuring time AND area; clear method with sufficient data; safety note.',
  },

  // ── Q6: Convex Lens ────────────────────────────────────────
  'q6a': {
    marks: 3,
    exemplar: 'Correct reading from scale: 42.8 ± 0.1 [1]. dᵢ = 12.8 ± 0.1 [1] (allow ECF if calculation dᵢ = reading − 30 is evident). Unit: cm [1] (can be awarded independently anywhere in response). Award 3 marks for 12.8 cm with no working shown.',
    keyConcepts: ['dᵢ = image screen position − lens position', 'dᵢ = 42.8 − 30 = 12.8 cm'],
    keywords: ['42.8 cm', '12.8 cm', 'image distance', 'measurement', 'ruler reading'],
    feedbackHit: 'Correctly read 42.8 cm from the ruler and calculated dᵢ = 12.8 cm.',
    feedbackMiss: 'The lens is at 30 cm. The image is in focus at 42.8 cm. dᵢ = 42.8 − 30.0 = 12.8 cm.',
  },

  'q6b': {
    marks: 4,
    exemplar: 'Column headings (using symbols/words) and units in header only [1]. All data in order (ascending dₒ) and complete [1]. dₒ to 1 d.p. or nearest cm [1]. All dᵢ data expressed to consistent number of d.p. [1]. ECF from part (a) for 12.8 cm entry.',
    keyConcepts: ['table headers: quantity and unit (in header only)', 'ascending order of IV', 'consistent decimal places', 'unit conversion: 0.90 m = 90.0 cm'],
    keywords: ['dₒ / cm', 'dᵢ / cm', 'ascending order', 'consistent d.p.', '90.0 cm', 'headers'],
    feedbackHit: 'Correct headers, ascending order, consistent d.p., and unit conversion.',
    feedbackMiss: '4 marks: headers with units; ascending order; consistent decimal places; all data present including ECF from (a).',
  },

  'q6c': {
    marks: 3,
    exemplar: 'Column header: f / m (metres) [1]. Missing 1/f: 2.00 + 3.87 = **5.87** m⁻¹ [1]. Missing f: 1/5.87 = **0.170** m [1].',
    keyConcepts: ['1/f = 1/dₒ + 1/dᵢ (sum the reciprocals)', 'f = 1/(1/f) — take reciprocal of the sum', 'units of f = metres (m)'],
    keywords: ['1/f = 5.87', 'f = 0.170 m', 'column header', 'm (metres)', 'reciprocal sum'],
    feedbackHit: 'Correctly labelled column as f/m and calculated 5.87 and 0.170.',
    feedbackMiss: 'Missing 1/f = 1/dₒ + 1/dᵢ = 2.00 + 3.87 = 5.87 m⁻¹. Then f = 1/5.87 = 0.170 m. Column header: f / m.',
  },

  'q6d': {
    marks: 1,
    exemplar: 'The anomalous value is 0.187 m (row with 1/dₒ = 1.67 m⁻¹). It is noticeably different from the cluster of other values (≈ 0.168–0.173 m).',
    keyConcepts: ['anomalous data point: one value significantly different from the rest', 'anomaly identified by comparing with the cluster of other values'],
    keywords: ['anomalous', '0.187', 'different from others', 'outlier'],
    feedbackHit: 'Correctly identified 0.187 as the anomalous value.',
    feedbackMiss: 'Compare all f values: most cluster around 0.168–0.173 m. The value 0.187 m is significantly different — it is the anomalous point.',
  },

  'q6e': {
    type: 'mcq',
    correct: 2, // C (index 2 in options A, B, C, D)
  } as MCQEntry,

  'q6f': {
    marks: 2,
    exemplar: 'y-intercept from graph C stated: 5.8 ± 0.1 m⁻¹ [1]. f = 1/intercept = 1/5.8 = **0.172 ± 0.003 m** [1]. Award second mark for evidence of calculation involving 1/intercept.',
    keyConcepts: ['y-intercept of 1/dᵢ vs 1/dₒ graph = 1/f', 'focal length f = 1/(y-intercept)'],
    keywords: ['y-intercept', '5.8 m⁻¹', 'f = 0.172 m', 'focal length', '1/f'],
    feedbackHit: 'Read y-intercept = 5.8 and calculated f = 1/5.8 = 0.172 m.',
    feedbackMiss: 'The y-intercept of graph C ≈ 5.8 m⁻¹. Since y-intercept = 1/f: f = 1/5.8 ≈ 0.172 m.',
  },

  // ── Q7: Drones & Forces ────────────────────────────────────
  'q7a': {
    type: 'mcq',
    correct: 0, // A (index 0) — forces unbalanced, T > W → taking off
  } as MCQEntry,

  'q7b': {
    marks: 7,
    exemplar: `Marked on 3-category rubric:

Advantages (max 3):
- 1 mark: one advantage stated
- 2 marks: one advantage stated with explanation OR two advantages stated
- 3 marks: two or more advantages with at least one explained

Disadvantages (max 3):
- 1 mark: one disadvantage stated
- 2 marks: one disadvantage with explanation OR two stated
- 3 marks: two or more disadvantages with at least one explained

Conclusion (max 1):
- 1 mark: a simple conclusion/appraisal`,
    keyConcepts: ['advantages: speed, remote access, no driver risk, low emissions', 'disadvantages: payload limit (3 kg), range (20 km), weather, privacy, regulations', 'conclusion: overall usefulness for medical delivery'],
    keywords: ['advantage', 'disadvantage', 'fast delivery', 'traffic', 'limited payload', 'weather', 'privacy', 'regulation', 'conclusion'],
    feedbackHit: 'Discussed advantages and disadvantages with explanations and gave a conclusion.',
    feedbackMiss: 'Cover: advantages (speed, bypass traffic, remote areas), disadvantages (payload 3 kg, range 20 km, weather, privacy, regulations), and a concluding statement.',
  },

  // ── Q8: Drones in Environmental Monitoring ─────────────────
  'q8a': {
    marks: 14,
    exemplar: `Marked on 4-category rubric:

Environmental uses (max 4):
- 1 mark: one use of drones in environmental monitoring
- 2 marks: one use + how it relates to science
- 3 marks: two uses of drones in environmental monitoring + one with benefit to science
- 4 marks: two uses with both linked to a scientific benefit

Social implications (max 4):
- 1 mark: one positive OR negative social implication for an individual
- 2 marks: one positive AND one negative social implication
- 3 marks: positive and negative, one with justification
- 4 marks: positive and negative, both with justification

Political implications (max 4):
- 1 mark: one political implication
- 2 marks: one with further explanation OR two stated
- 3 marks: two with further explanation for one
- 4 marks: two with further explanation for both

Conclusion (max 2):
- 1 mark: a simple conclusion
- 2 marks: a balanced concluding appraisal`,
    keyConcepts: ['environmental: wildlife monitoring, deforestation, atmospheric sampling, pollution tracking', 'social: faster emergency response (+), privacy invasion (−)', 'political: border surveillance, military use, international regulation'],
    keywords: ['environmental monitoring', 'wildlife', 'deforestation', 'social', 'privacy', 'political', 'surveillance', 'regulation', 'conclusion', 'appraisal'],
    feedbackHit: 'Covered environmental uses, social implications (both positive and negative), political implications, and gave a balanced conclusion.',
    feedbackMiss: 'Cover all four: (1) 2 environmental uses with scientific benefit, (2) positive AND negative social implications with justification, (3) political implications with explanation, (4) balanced appraisal.',
  },

}
