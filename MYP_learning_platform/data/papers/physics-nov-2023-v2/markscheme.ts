import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

export type MCQEntry = {
  type: 'mcq'
  correct: number
}

export type MSRecord = MSEntry | MCQEntry

export const MS: Record<string, MSRecord> = {
  // Q1 — Astronomy (Sirius)
  'q1_a': {
    marks: 2,
    exemplar: 'The two missing objects in order from the Sun are: Jupiter (between Mars and Saturn) and then any of: Pluto or Eris (dwarf planets beyond Neptune).',
    keyConcepts: ['Jupiter', 'between Mars and Saturn', 'order from sun', 'dwarf planet'],
    keywords: ['Jupiter', 'Pluto', 'Eris', 'Ceres', 'order', 'Mars', 'Saturn'],
    feedbackHit: 'Correct identification of Jupiter and the dwarf planet beyond Neptune.',
    feedbackMiss: 'Jupiter is the largest planet, located between Mars and Saturn. Pluto and Eris are dwarf planets beyond Neptune.',
  },
  'q1_b': {
    marks: 1,
    exemplar: 'Acceptable answers include: moons/natural satellites, comets, asteroids, meteoroids, dwarf planets (e.g. Pluto, Eris), the Oort cloud.',
    keyConcepts: ['moon', 'comet', 'asteroid', 'meteoroid', 'natural satellite'],
    keywords: ['moon', 'comet', 'asteroid', 'meteoroid', 'natural', 'satellite', 'dwarf'],
    feedbackHit: 'Correct — a valid non-human-made solar system object was named.',
    feedbackMiss: 'Examples include: moons (natural satellites), comets, asteroids, meteoroids, or dwarf planets.',
  },
  'q1_c': {
    marks: 2,
    exemplar: '1. A star produces its own light/energy (by nuclear fusion), whereas a planet does not produce its own light and only reflects light from a star. 2. A star is much larger/more massive than a planet.',
    keyConcepts: ['star produces light', 'nuclear fusion', 'planet reflects light', 'size mass difference'],
    keywords: ['fusion', 'produces', 'own light', 'reflects', 'larger', 'more massive', 'energy'],
    feedbackHit: 'Good — valid differences between stars and planets identified.',
    feedbackMiss: 'Key differences: (1) Stars produce their own light via nuclear fusion; planets only reflect light. (2) Stars are far larger/more massive than planets.',
  },
  'q1_d': {
    marks: 3,
    exemplar: 'The Big Bang theory states that the universe began from an extremely hot, dense point (singularity) and has been expanding ever since. The observation that distant galaxies are moving away from us (and the further away, the faster they recede) supports this theory because it shows the universe is still expanding — consistent with starting from a single point. This is also supported by cosmic microwave background radiation.',
    keyConcepts: ['hot dense point', 'expanding universe', 'singularity', 'galaxies moving away', 'supports expansion'],
    keywords: ['big bang', 'expanding', 'hot', 'dense', 'singularity', 'galaxies receding', 'faster', 'further', 'supports'],
    feedbackHit: 'Well done — the Big Bang theory was described and linked to the observational evidence.',
    feedbackMiss: 'The Big Bang: universe started as hot, dense singularity and expanded. Evidence: galaxies moving away (red-shift), further = faster, showing ongoing expansion from a single point.',
  },
  'q1_e': {
    marks: 2,
    exemplar: 'Advantage: parsecs are more convenient/practical for expressing very large astronomical distances (8.1×10¹⁶ m vs 2.6 parsecs — a much smaller, more manageable number). Disadvantage: non-SI units can cause confusion/errors when doing calculations with SI-based equations, or when comparing with other scientific fields.',
    keyConcepts: ['convenient', 'practical', 'large distances', 'confusion', 'calculation errors', 'non-SI'],
    keywords: ['convenient', 'smaller number', 'easier', 'confusion', 'error', 'calculation', 'convert', 'comparison'],
    feedbackHit: 'Good — a valid advantage and disadvantage of non-SI units were given.',
    feedbackMiss: 'Advantage: convenient for very large distances (smaller numbers). Disadvantage: confusion/errors when mixing with SI units in calculations.',
  },

  // Q2 — Cobalt-60 sterilisation source
  'q2_a': {
    marks: 2,
    exemplar: 'Number of protons = 27 (the atomic number). Number of neutrons = 60 − 27 = 33.',
    keyConcepts: ['protons equals atomic number', '27 protons', '33 neutrons', 'mass number minus atomic number'],
    keywords: ['27', '33', 'protons', 'neutrons', 'atomic number', 'mass number', 'subtract'],
    feedbackHit: 'Correct — protons = atomic number = 27; neutrons = mass number − atomic number = 33.',
    feedbackMiss: 'Protons = atomic number = 27. Neutrons = mass number − atomic number = 60 − 27 = 33.',
  },
  'q2_b': {
    marks: 2,
    exemplar: 'Type of decay: beta (β⁻) decay. One product (apart from nickel-60): a beta particle (fast-moving electron, β⁻), an antineutrino, or gamma radiation emitted by the excited nickel nucleus.',
    keyConcepts: ['beta decay', 'beta particle', 'electron', 'antineutrino', 'gamma'],
    keywords: ['beta', 'β', 'electron', 'antineutrino', 'gamma', 'beta minus'],
    feedbackHit: 'Correct — beta decay identified and a valid product stated.',
    feedbackMiss: 'Co-60 → Ni-60 is beta (β⁻) decay. A neutron converts to a proton, emitting a beta particle (electron) and an antineutrino (gamma rays are also released).',
  },
  'q2_c': {
    marks: 1,
    exemplar: 'Half-life of cobalt-60 ≈ 5.3 years (accept 5–5.5 years from reading the graph where 100% → 50%).',
    keyConcepts: ['half life', '5.3 years', 'time for 50 percent', 'graph reading'],
    keywords: ['5.3', '5', '5.5', 'half', '50%', 'years'],
    feedbackHit: 'Correct graph reading — half-life approximately 5.3 years.',
    feedbackMiss: 'Find where the curve reaches 50% on the y-axis, then read the corresponding x-value. This gives the half-life ≈ 5.3 years.',
  },
  'q2_d': {
    marks: 1,
    exemplar: '25% remaining means the source has gone through 2 half-lives (100% → 50% → 25%). From the graph, at 25% the time is approximately 10.6 years (2 × 5.3 years).',
    keyConcepts: ['25 percent', '2 half-lives', '10.6 years', 'graph reading'],
    keywords: ['25%', '10.6', '11', '2 half-lives', 'years', 'two'],
    feedbackHit: 'Correct — reading ~10.6 years from the graph at 25% (two half-lives).',
    feedbackMiss: 'Read the time on the x-axis where the curve passes through y = 25%. 25% is two half-lives (100→50→25), so ≈ 10.6 years.',
  },
  'q2_e': {
    marks: 2,
    exemplar: 'The claim is incorrect/invalid. The half-life of cobalt-60 is only about 5.3 years. After even a few hundred years the amount of cobalt-60 remaining would be so tiny (effectively zero) that it could not be detected, let alone after millions of years. The graph shows the source is essentially gone within about 26 years. Because its half-life is far too short, cobalt-60 cannot be used to date fossils that are millions of years old — a very long-lived isotope is required for that.',
    keyConcepts: ['incorrect claim', 'half-life too short', 'undetectable', 'gone within decades', 'cannot date millions of years'],
    keywords: ['incorrect', 'invalid', 'too short', 'zero', 'undetectable', '5.3 years', 'decades', 'cannot', 'impossible'],
    feedbackHit: 'Excellent evaluation — the claim correctly rejected using evidence from the graph.',
    feedbackMiss: 'Co-60 has a half-life of ~5.3 years. Within a few decades essentially none remains, so it cannot date fossils millions of years old. A very long-lived isotope is required for that.',
  },

  // Q3 — Incandescent vs LED Torch
  'q3_a': {
    marks: 2,
    exemplar: 'Thermal energy output = 100 − 5 = 95 J. The two output forms are: light energy (5 J) and thermal/heat energy (95 J).',
    keyConcepts: ['95 joules', 'thermal energy', 'heat', 'conservation of energy', '100 minus 5'],
    keywords: ['95', 'thermal', 'heat', 'light', '5', 'conservation', 'energy'],
    feedbackHit: 'Correct — energy conservation applied: thermal = 100 − 5 = 95 J.',
    feedbackMiss: 'By conservation of energy: thermal energy = total input − light output = 100 − 5 = 95 J.',
  },
  'q3_b': {
    marks: 2,
    exemplar: 'Connect an ammeter in series with the LED (to measure current through it). Connect a voltmeter in parallel across the LED (to measure voltage across it). The circuit also needs a battery/power supply and possibly a variable resistor.',
    keyConcepts: ['ammeter in series', 'voltmeter in parallel', 'measure current', 'measure voltage'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'current', 'voltage', 'in series', 'across'],
    feedbackHit: 'Correct circuit design — ammeter in series, voltmeter in parallel.',
    feedbackMiss: 'Ammeter measures current and must be connected in SERIES with the LED. Voltmeter measures voltage and must be connected in PARALLEL (across) the LED.',
  },
  'q3_c': {
    marks: 2,
    exemplar: 'P = IV = 0.06 A × 10 V = 0.60 W',
    keyConcepts: ['P equals IV', '0.60 watts', 'power formula', 'substitution'],
    keywords: ['p=iv', '0.60', '0.6', 'watts', 'power', 'multiply', '10', '0.06'],
    feedbackHit: 'Correct calculation: P = IV = 0.06 × 10 = 0.60 W.',
    feedbackMiss: 'Use P = IV. Substitute I = 0.06 A and V = 10 V: P = 0.06 × 10 = 0.60 W.',
  },
  'q3_d': {
    marks: 3,
    exemplar: 'Incandescent efficiency = useful output / total input = 5/100 = 0.05 (5%). LED efficiency = 0.21 W / 0.60 W = 0.35 (35%). The LED is much more efficient (35% vs 5%) — it converts a much greater proportion of the electrical energy into useful light energy and wastes far less as heat.',
    keyConcepts: ['efficiency formula', '5 percent incandescent', '35 percent LED', 'LED more efficient', 'comparison'],
    keywords: ['efficiency', '5%', '35%', 'more efficient', '0.05', '0.35', 'incandescent', 'LED', 'useful', 'output/input'],
    feedbackHit: 'Both efficiencies calculated correctly and a clear comparison made.',
    feedbackMiss: 'Efficiency = useful power out / total power in. Incandescent: 5/100 = 5%. LED: 0.21/0.60 = 35%. The LED is far more efficient.',
  },

  // Q4 — Tennis-Ball Bounce
  'q4_a': {
    marks: 1,
    exemplar: 'How does the drop height of a tennis ball affect the height of the first bounce on a clay court?',
    keyConcepts: ['drop height', 'first bounce height', 'research question', 'affect'],
    keywords: ['drop height', 'bounce height', 'affect', 'how does', 'first bounce'],
    feedbackHit: 'Good research question — clearly states independent and dependent variables.',
    feedbackMiss: 'A good research question names both variables: "How does [drop height] affect [height of first bounce]?"',
  },
  'q4_b': {
    marks: 3,
    exemplar: 'Independent variable: Drop height (this is what you change). Dependent variable: Height of the first bounce (this is what you measure). Control variables: The kind of ball used, the surface the ball bounces from, and the temperature of the ball.',
    keyConcepts: ['independent drop height', 'dependent bounce height', 'control ball type', 'control surface', 'control temperature'],
    keywords: ['independent', 'dependent', 'control', 'drop height', 'bounce height', 'ball type', 'surface', 'temperature'],
    feedbackHit: 'Variables correctly classified.',
    feedbackMiss: 'Independent: drop height (what you change). Dependent: height of first bounce (what you measure). Controls: ball type, surface, temperature (things kept the same).',
  },
  'q4_c': {
    marks: 2,
    exemplar: 'When dropped from approximately 60 cm, the height of the first bounce is approximately 8–10 cm (accept reasonable values from simulation observation; the bounce is always lower than the drop height).',
    keyConcepts: ['bounce height', 'cm', 'observation', 'less than drop height'],
    keywords: ['cm', 'bounce', 'height', 'approximately', 'observation'],
    feedbackHit: 'Simulation observation recorded.',
    feedbackMiss: 'Read the height of the bounce from the ruler in the simulation. The ball bounces to a lower height than it was dropped from.',
  },
  'q4_d': {
    marks: 3,
    exemplar: 'When the tennis ball is held at the drop height, it has gravitational potential energy (GPE). As it falls, GPE is converted to kinetic energy (KE). When the ball hits the clay, some KE is converted to thermal energy (heat) and sound energy due to the inelastic collision. Therefore the ball bounces back with less KE, and rises to a lower height than it started.',
    keyConcepts: ['gravitational potential energy', 'kinetic energy', 'thermal energy', 'sound', 'energy conversion', 'not all converted back'],
    keywords: ['GPE', 'KE', 'thermal', 'heat', 'sound', 'converted', 'less', 'inelastic', 'collision', 'energy'],
    feedbackHit: 'Excellent — energy transformation chain correctly described.',
    feedbackMiss: 'GPE (at drop height) → KE (falling) → at impact: some KE converts to heat + sound. Less KE remains to convert back to GPE, so the ball bounces lower.',
  },
  'q4_e': {
    marks: 2,
    exemplar: 'Average = (0.25 + 0.27 + 0.25) / 3 = 0.77 / 3 = 0.257 m ≈ 0.26 m',
    keyConcepts: ['0.26 m', 'average calculation', 'add three values', 'divide by three'],
    keywords: ['0.26', '0.257', 'average', '0.25', '0.27', 'divide', 'three'],
    feedbackHit: 'Average correctly calculated.',
    feedbackMiss: 'Average = (0.25 + 0.27 + 0.25) ÷ 3 = 0.77 ÷ 3 ≈ 0.26 m.',
  },
  'q4_f': {
    marks: 2,
    exemplar: 'Multiple trials were performed to reduce the effect of random errors/anomalies. Taking an average of multiple trials gives a more reliable result because it reduces the impact of any single inaccurate measurement. If an anomalous result occurs in one trial, the other trials prevent it from significantly affecting the average.',
    keyConcepts: ['random error', 'anomaly', 'average', 'reliable', 'reduce error'],
    keywords: ['random error', 'anomalous', 'average', 'reliable', 'reduce', 'error', 'repeat', 'trials'],
    feedbackHit: 'Good explanation linking multiple trials to reliability through averaging.',
    feedbackMiss: 'Multiple trials reduce random errors. The average is more reliable than any single result because anomalous readings have less effect.',
  },
  'q4_g': {
    marks: 2,
    exemplar: 'Graph B shows the relationship more clearly. Graph B\'s best-fit line passes through the origin, showing a proportional relationship. The scale in Graph B is more appropriate (y-axis 0–1.0 m), making the data points spread more evenly and the trend clearer to see.',
    keyConcepts: ['Graph B', 'passes through origin', 'proportional', 'better scale', 'relationship clearer'],
    keywords: ['graph B', 'origin', 'proportional', 'scale', 'clearer', 'trendline', 'best fit'],
    feedbackHit: 'Graph B correctly identified with valid justification.',
    feedbackMiss: 'Graph B is better: its trendline passes through the origin (showing proportionality) and the y-axis scale (0–1.0) makes the relationship easier to see.',
  },
  'q4_h': {
    marks: 3,
    exemplar: 'The prediction is partially correct. The first part is supported: as drop height increases, bounce height does also increase (both graphs show a positive relationship). The second part about proportionality is also supported: Graph B shows the best-fit line passing through the origin, which is characteristic of a proportional (directly proportional) relationship. The data points lie close to the line of best fit, confirming the proportional relationship.',
    keyConcepts: ['partially correct', 'positive relationship', 'proportional', 'through origin', 'supported by data'],
    keywords: ['correct', 'increases', 'proportional', 'origin', 'linear', 'positive', 'evidence', 'graph', 'support'],
    feedbackHit: 'Prediction well-evaluated with reference to both parts and the graphical evidence.',
    feedbackMiss: 'First part correct (bounce height increases with drop height — both graphs show this). Second part: Graph B shows the line through the origin → proportional relationship confirmed.',
  },

  // Q5 — Coefficient of Restitution (Golf Ball)
  'q5_a': {
    marks: 1,
    exemplar: 'Height is easier to measure than speed because a ruler can be used to directly measure the height of the bounce visually/using a ruler/camera. Speed would require electronic sensors or high-speed cameras to measure the very fast-moving ball, which are more complex and expensive.',
    keyConcepts: ['ruler', 'direct measurement', 'speed difficult', 'sensors needed', 'easier'],
    keywords: ['ruler', 'easier', 'direct', 'speed', 'fast', 'sensor', 'measure', 'difficult', 'height'],
    feedbackHit: 'Good — practical reason why height measurement is easier given.',
    feedbackMiss: 'Height can be measured directly with a ruler. Speed requires electronic sensors/high-speed cameras because the ball moves too fast to measure easily.',
  },
  'q5_b': {
    marks: 1,
    exemplar: 'If e = 0, the golf ball would not bounce at all — it would come to rest immediately upon hitting the ground (all kinetic energy is lost in the collision).',
    keyConcepts: ['no bounce', 'comes to rest', 'no rebound', 'all energy lost'],
    keywords: ['no bounce', 'rest', 'stop', 'zero bounce', 'does not bounce', 'energy lost', 'all'],
    feedbackHit: 'Correct — e = 0 means no rebound/bounce.',
    feedbackMiss: 'e = speed after / speed before = 0 means speed after = 0, so the ball does not bounce and stays on the ground.',
  },
  'q5_c': {
    marks: 6,
    exemplar: 'Corrected table (consistent SI units, correct column headers with units):\n\nDrop height (h₁) / m | Avg bounce height (h₂) / m | e\n0.50                 | 0.34                       | 0.82\n1.00                 | 0.65                       | 0.806\n1.50                 | 0.94                       | 0.79\n2.00                 | 1.21                       | 0.78\n2.50                 | 1.44                       | 0.76\n\nCalculation: e = √(1.21/2.00) = √(0.605) = 0.778 ≈ 0.78',
    keyConcepts: ['consistent units', 'SI units', 'square root', '0.78', 'correct table format', 'headers with units'],
    keywords: ['0.78', '0.777', '0.605', 'square root', 'consistent', 'units', 'metres', 'SI', 'table'],
    feedbackHit: 'Data presented correctly with consistent units and e value calculated correctly.',
    feedbackMiss: 'All drop heights should be in metres (0.50 m, not 50 cm). e = √(h₂/h₁) = √(1.21/2.00) = √0.605 ≈ 0.78.',
  },
  'q5_d': {
    marks: 3,
    exemplar: 'The data partially supports the hypothesis. Looking at the e values: 0.82, 0.806, 0.79, 0.78, 0.76 — these are not exactly constant; they decrease slightly as drop height increases. However, the values are all similar (approximately 0.76–0.82), suggesting e is roughly constant. The hypothesis that e depends on the material and not on the drop height has some support, but there is a slight downward trend at higher heights, which means e is not perfectly constant.',
    keyConcepts: ['not exactly constant', 'slight decrease', 'broadly similar', 'partially supported', 'trend'],
    keywords: ['constant', 'not constant', 'decreases', 'similar', 'support', 'hypothesis', 'trend', 'material'],
    feedbackHit: 'Good evaluation using the data values to assess the hypothesis.',
    feedbackMiss: 'e values: 0.82 → 0.806 → 0.79 → 0.78 → 0.76. They are similar but not identical — a slight downward trend. Hypothesis is partially supported but not perfectly.',
  },
  'q5_e': {
    marks: 3,
    exemplar: 'The statement is incorrect. If e = 0.8, then v₂ = 0.8v₁. The fraction of KE remaining = KE₂/KE₁ = (½mv₂²)/(½mv₁²) = (v₂/v₁)² = e² = (0.8)² = 0.64. So 64% of the KE remains after the collision, meaning only 36% is converted — not 80% as the student claimed.',
    keyConcepts: ['e squared', '0.64', '64 percent remains', '36 percent converted', 'incorrect statement'],
    keywords: ['e squared', '0.64', '64%', '36%', 'incorrect', 'KE', 'kinetic', 'v squared', '0.8'],
    feedbackHit: 'Excellent — correctly derived that KE fraction = e², so e = 0.8 means only 36% KE converted, not 80%.',
    feedbackMiss: 'KE ∝ v². If e = v₂/v₁ = 0.8, then KE₂/KE₁ = (v₂/v₁)² = e² = 0.64. 64% KE remains, so only 36% is converted. The statement is wrong.',
  },

  // Q6 — Foam-Mat Thickness Investigation
  'q6_a': {
    marks: 14,
    exemplar: 'Independent variable: thickness of the foam mat (varied from 5 mm to 50 mm)\nDependent variable: height of first bounce (measured with ruler)\nControl variable (with justification): drop height — keep constant (e.g. 1.0 m) to ensure any change in bounce height is due to mat thickness only\n\nHypothesis: As mat thickness increases, the height of the first bounce will decrease, because a thicker foam mat absorbs more of the ball\'s kinetic energy as it deforms (converting it to heat), so less energy is returned to the ball.\n\nEquipment: Same ball, foam mats of different thicknesses (5, 10, 20, 30, 40, 50 mm), metre ruler, clamp stand, retort stand, camera (optional for accuracy)\n\nMethod: 1. Set up ruler vertically beside the floor. 2. Place a mat on the floor. 3. Drop the ball from a fixed height (e.g. 1.0 m) onto the mat. 4. Measure the height of the first bounce using the ruler. 5. Repeat 3 times for each mat thickness. 6. Calculate the average. 7. Repeat for each mat thickness.',
    keyConcepts: ['independent variable', 'dependent variable', 'control variable', 'justification', 'hypothesis', 'equipment list', 'method steps', 'repeat trials'],
    keywords: ['mat', 'thickness', 'bounce', 'height', 'ruler', 'control', 'drop height', 'repeat', 'average', 'hypothesis', 'equipment'],
    feedbackHit: 'Comprehensive investigation plan with all required components.',
    feedbackMiss: 'Check: Did you state IV (mat thickness), DV (bounce height), a justified CV, a hypothesis with explanation, equipment, and a step-by-step method with repeats?',
  },
  'q6_b': {
    marks: 4,
    exemplar: 'Research question: How does the temperature of the ball affect the height of the first bounce?\nIndependent variable: temperature of the ball (e.g. varied from 5°C to 40°C)\nControl variable 1: drop height (kept constant, e.g. 1.0 m)\nControl variable 2: type/brand of ball and the surface (use the same ball and surface throughout)',
    keyConcepts: ['research question', 'independent variable', 'control variables', 'new factor'],
    keywords: ['research question', 'independent', 'control', 'temperature', 'pressure', 'mass', 'type of ball', 'surface'],
    feedbackHit: 'Good — a valid new investigation design with research question and variables.',
    feedbackMiss: 'Choose a new factor (e.g. ball temperature, inflation pressure, ball material). State a research question, the independent variable, and two control variables.',
  },

  // Q7 — Low-Energy Eco-Home
  'q7_a': {
    marks: 2,
    exemplar: 'Low-energy eco-homes use thick insulation in walls and roof to reduce heat loss by conduction. Airtight construction prevents heat loss by convection (drafts). Triple-glazed windows reduce heat loss and allow solar gain, and the insulated foundation slab reduces heat loss to the ground. These features greatly reduce the rate of heat transfer from inside to outside, so less energy input is needed to maintain a warm temperature.',
    keyConcepts: ['insulation', 'reduces conduction', 'airtight', 'reduces convection', 'less energy needed', 'heat transfer reduced'],
    keywords: ['insulation', 'conduction', 'convection', 'airtight', 'heat loss', 'reduce', 'less energy', 'thermal'],
    feedbackHit: 'Good explanation linking the eco-home features to reduced heat loss.',
    feedbackMiss: 'Eco-homes reduce heat loss by: insulation (less conduction), airtightness (less convection/drafts), triple glazing, and an insulated slab. Less heat escapes → less energy needed.',
  },
  'q7_b': {
    marks: 2,
    exemplar: 'Three layers of glass create two air gaps (or vacuum/gas gaps) between the panes. Air (or the sealed gas) is a poor thermal conductor, so heat must travel through multiple layers of poorly conducting material. This greatly reduces the rate of heat transfer by conduction compared to a single pane of glass.',
    keyConcepts: ['air gap', 'poor conductor', 'two gaps', 'reduces conduction', 'multiple layers'],
    keywords: ['air gap', 'poor conductor', 'insulator', 'three layers', 'two gaps', 'conduction', 'reduce', 'transfer'],
    feedbackHit: 'Correct — air gaps between glass layers reduce conduction.',
    feedbackMiss: 'Three layers → two air gaps. Air is a poor conductor of heat. Heat must pass through multiple insulating layers → much less conduction than one pane.',
  },
  'q7_c': {
    marks: 3,
    exemplar: 'Higher pressure inside means there are more gas particles per unit volume moving with high speed. These particles collide with the walls more frequently. Where there are gaps/cracks, particles will flow outward from high to low pressure (net movement of particles from inside to outside). Technicians can detect this airflow using smoke, special sensors, or by feeling air movement, allowing them to identify where leaks are located.',
    keyConcepts: ['more particles', 'higher frequency collisions', 'particles move through gaps', 'high to low pressure', 'detect leaks'],
    keywords: ['particles', 'pressure', 'higher', 'gaps', 'flow', 'escape', 'collisions', 'detect', 'kinetic theory', 'movement'],
    feedbackHit: 'Good kinetic theory explanation linking particle behaviour to leak detection.',
    feedbackMiss: 'Higher pressure = more particles moving faster. At gaps, particles flow out (high → low pressure). Technicians detect this outward air movement to find leaks.',
  },
  'q7_d': {
    marks: 1,
    exemplar: 'Approximately 12% of households use district heat as a source of energy for heating (reading from the stacked bar chart).',
    keyConcepts: ['12 percent', 'district heat', 'bar chart reading'],
    keywords: ['12', 'percent', '%', 'district', 'heat'],
    feedbackHit: 'Correct reading from the bar chart.',
    feedbackMiss: 'Read the district-heat section from the stacked bar chart. It occupies the band from about 75–87%, making it about 12%.',
  },
  'q7_e': {
    marks: 2,
    exemplar: 'Low-energy eco-homes reduce energy consumption for heating. This means less fossil fuel is burned, leading to lower CO₂ and other greenhouse gas emissions. This reduces the contribution to global warming/climate change, making it environmentally beneficial. Less fuel use also reduces air pollution.',
    keyConcepts: ['less energy', 'less fossil fuel', 'less CO2', 'greenhouse gas', 'climate change', 'positive environment'],
    keywords: ['energy', 'fossil fuel', 'CO2', 'carbon', 'greenhouse', 'climate', 'pollution', 'reduce', 'emission'],
    feedbackHit: 'Good — energy reduction linked to fewer emissions and environmental benefit.',
    feedbackMiss: 'Less heating energy → less fossil fuel burned → fewer CO₂/greenhouse gas emissions → reduced contribution to climate change.',
  },

  // Q8 — Low-Energy Housing Policy
  'q8_': {
    marks: 13,
    exemplar: 'Social/economic positives for individuals: reduced heating bills (saves ~€690/year), improved health (better air quality, warmer home reduces cold-related illness), reduced fuel poverty. Negatives: high upfront retrofit cost (€21,000), disruption during renovation, low-income households may not afford the upgrade even with a subsidy.\n\nFor governments/businesses: Positive: reduced national energy consumption, meets climate targets, creates jobs in the construction/retrofit sector. Negative: high public expenditure (many houses to upgrade), slow regulatory process, may increase inequality if only wealthier households can afford it.\n\nConclusion: Overall, government funding is justified because the long-term savings (energy, healthcare, environmental) outweigh the costs, and it addresses fuel poverty by helping those who cannot afford the upgrade independently.',
    keyConcepts: ['positive social', 'negative social', 'positive economic', 'negative economic', 'government perspective', 'conclusion', 'opinion'],
    keywords: ['savings', 'health', 'fuel poverty', 'upfront cost', 'climate', 'jobs', 'inequality', 'environment', 'justify', 'government'],
    feedbackHit: 'Comprehensive discussion covering all required aspects with a justified conclusion.',
    feedbackMiss: 'Ensure you cover: (1) social+economic pros/cons for individuals, (2) pros/cons for government/businesses, (3) your own concluded opinion with justification.',
  },
}
