import 'server-only'

interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>
export type { MSRecord }

export const MS: MSRecord = {
  // ─── Q1 ───
  q1_a: {
    type: 'mcq',
    correct: 2, // Na₂CO₃
  },
  q1_b: {
    marks: 2,
    exemplar: 'Group 1; Period 4',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 1', 'period 4', 'potassium', 'alkali metal'],
    feedbackHit: 'Correct — potassium (K, atomic number 19) is in Group 1, Period 4.',
    feedbackMiss: 'Check the periodic table: potassium (K) is directly below sodium in Group 1, one period lower, in Period 4.',
    blankAnswers: ['1', '4'],
  },
  q1_c: {
    marks: 1,
    exemplar: '2.8.7 (or 1s² 2s² 2p⁶ 3s² 3p⁵ or K²L⁸M⁷)',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2.8.7', 'chlorine', 'seventeen electrons', 'electron arrangement'],
    feedbackHit: 'Correct — chlorine has 17 electrons arranged 2.8.7.',
    feedbackMiss: 'Chlorine has 17 electrons: 2 in shell 1, 8 in shell 2, 7 in shell 3 → 2.8.7.',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Potassium has less energy required to remove the outer electron (the outer electron is easier to remove) because the outermost electron is further away from the nucleus. There is less nuclear attraction because potassium has more electron shells than sodium.',
    keyConcepts: ['Reactivity of metals', 'Bohr model', 'Nuclear attraction'],
    keywords: ['more electron shells', 'outer electron further', 'less attraction', 'easier to remove', 'Bohr model K vs Na'],
    feedbackHit: 'Correct — linked more electron shells in K → outer electron further → less nuclear attraction → more reactive.',
    feedbackMiss: 'Use the Bohr model: K has 4 shells (Na has 3), so K outer electron is further from nucleus → less attraction → easier to remove → more reactive.',
  },

  // ─── Q2 ───
  q2_a: {
    type: 'mcq',
    correct: 1, // Covalent
  },
  q2_b: {
    type: 'mcq',
    correct: 2, // Option C — :Cl–Cl: with lone pairs
  },
  q2_c: {
    marks: 3,
    exemplar: '2NaClO(aq) → 2NaCl(aq) + O₂(g)',
    keyConcepts: ['Balancing equations', 'State symbols', 'Decomposition reactions'],
    keywords: ['2NaClO', '2NaCl', 'O₂', 'state symbols', 'aq g', 'balanced equation sodium hypochlorite'],
    feedbackHit: 'Correct — fully balanced equation with correct formulae and state symbols.',
    feedbackMiss: 'Check: formulae (NaClO → NaCl and O₂); coefficients (2:2:1 for Na/Cl balance); state symbols (aq for NaClO and NaCl, g for O₂).',
  },
  q2_d: {
    type: 'mcq',
    correct: 0, // Option A — toxic (skull and crossbones)
  },
  q2_e: {
    marks: 3,
    exemplar: 'At higher concentrations, more NaClO particles are present in the water. Therefore there are more successful collisions with bacterial particles, so bacteria are killed more quickly (rate of reaction is faster).',
    keyConcepts: ['Collision theory', 'Concentration and reaction rate'],
    keywords: ['more NaClO particles', 'more collisions', 'more successful collisions', 'faster rate', 'bacteria killed quickly'],
    feedbackHit: 'Correct — linked higher concentration → more particles → more collisions → faster disinfection.',
    feedbackMiss: 'Apply collision theory: higher concentration = more NaClO particles per unit volume → more frequent collisions with bacteria → faster kill rate.',
  },

  // ─── Q3 ───
  q3_a: {
    marks: 2,
    exemplar: 'Gas 1: nitrogen, 78%; Gas 2: oxygen, 20.9% (accept in either order)',
    keyConcepts: ['Composition of the atmosphere'],
    keywords: ['nitrogen', '78%', 'oxygen', '20.9%'],
    feedbackHit: 'Correct — nitrogen (78%) and oxygen (20.9%).',
    feedbackMiss: 'Nitrogen is ~78% and oxygen is ~20.9% of the atmosphere.',
    blankAnswers: ['nitrogen', '78', 'oxygen', '20.9'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'N₂ → Diatomic gas; Argon → Monatomic gas; O₃ → Polyatomic gas',
    keyConcepts: ['Classification of molecules', 'Monatomic diatomic polyatomic'],
    keywords: ['N₂ diatomic', 'argon monatomic', 'ozone O₃ polyatomic', 'molecule classification'],
    feedbackHit: 'All three molecules correctly classified.',
    feedbackMiss: 'Monatomic = one atom (noble gases like Ar); Diatomic = two atoms bonded (N₂, O₂); Polyatomic = three or more atoms (O₃, CO₂).',
    blankAnswers: ['Diatomic gas', 'Monatomic gas', 'Polyatomic gas'],
  },
  q3_c: {
    marks: 1,
    exemplar: 'Argon is unreactive (inert) because it has a full outer electron shell and therefore does not bond with other atoms.',
    keyConcepts: ['Noble gases', 'Full outer shell'],
    keywords: ['full outer shell', 'unreactive', 'inert', 'noble gas argon'],
    feedbackHit: 'Correct — full outer electron shell makes argon unreactive and monatomic.',
    feedbackMiss: 'Argon has 8 electrons in its outer shell → stable configuration → does not bond → remains as single atoms.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'RMM(CHClF₂) = 12 + 1 + 35.5 + 2(19) = 12 + 1 + 35.5 + 38 = 86.5',
    keyConcepts: ['Relative molecular mass', 'Calculation'],
    keywords: ['12', '1', '35.5', '19', '86.5', 'CHClF₂', 'Freon-22', 'chlorodifluoromethane'],
    feedbackHit: 'Correct — C=12, H=1, Cl=35.5, F×2=38 → 86.5.',
    feedbackMiss: 'Use the periodic table: C=12, H=1, Cl=35.5, F=19. One of each C, H, Cl and two F atoms: 12+1+35.5+2(19)=86.5.',
  },
  q3_e: {
    marks: 3,
    exemplar: 'Scent particles move (diffuse) more slowly at lower temperatures. At 30°C, the particles have more kinetic energy (or move faster) than at 10°C, so they diffuse until equally spread out more quickly.',
    keyConcepts: ['Diffusion', 'Particle theory', 'Kinetic energy and temperature'],
    keywords: ['particles move faster', 'more kinetic energy', 'diffuse more quickly', '30°C vs 10°C'],
    feedbackHit: 'Good — linked higher temperature → greater kinetic energy → faster diffusion.',
    feedbackMiss: 'Particle theory: at 30°C, scent molecules have more kinetic energy → move faster → spread through the room more quickly.',
  },
  q3_f: {
    marks: 1,
    exemplar: 'Correct structural formula of butane (C₄H₁₀): CH₃–CH₂–CH₂–CH₃, four carbons in a chain, all bonds shown.',
    keyConcepts: ['Structural formulae', 'Alkanes', 'Butane'],
    keywords: ['butane', 'C₄H₁₀', 'four carbons', 'full structural formula', 'H atoms correct'],
    feedbackHit: 'Correct structural formula for butane with four C in a chain.',
    feedbackMiss: 'Butane is C₄H₁₀: draw 4 carbons in a chain, add enough H atoms so each carbon forms 4 bonds: CH₃–CH₂–CH₂–CH₃.',
  },

  // ─── Q4 ───
  q4_a: {
    marks: 1,
    exemplar: '156.5 (°C)',
    keyConcepts: ['Reading instruments', 'Temperature measurement'],
    keywords: ['156.5', 'thermometer reading', 'indium melting point'],
    feedbackHit: 'Correct thermometer reading: 156.5°C.',
    feedbackMiss: 'Read the thermometer scale carefully — the mercury level is at 156.5°C.',
    blankAnswers: ['156.5'],
  },
  q4_b: {
    marks: 1,
    exemplar: '156.8 (°C)',
    keyConcepts: ['Graph reading', 'Melting point determination'],
    keywords: ['156.8', 'plateau', 'Student B graph', 'indium'],
    feedbackHit: 'Correct — the plateau of Student B\'s graph is at 156.8°C.',
    feedbackMiss: 'Find the flat plateau in Student B\'s temperature-time graph — that constant temperature is the melting point: 156.8°C.',
    blankAnswers: ['156.8'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'Student B is correct. Student B measured the temperature when all of the indium had melted and the change of state had occurred, and the temperature was steady (plateau).',
    keyConcepts: ['Melting point', 'Change of state', 'Experimental technique'],
    keywords: ['Student B', 'all indium melted', 'temperature steady', 'plateau'],
    feedbackHit: 'Correct — Student B and valid reason about steady temperature at completion of melting.',
    feedbackMiss: 'The melting point is the temperature when all of a substance has changed state. Student B\'s probe recorded a steady plateau when all indium had melted.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'As the percentage of bismuth increases, the melting point of the indium–bismuth alloy decreases.',
    keyConcepts: ['Trends in data', 'Alloy composition'],
    keywords: ['melting point decreases', 'bismuth increases', 'negative trend', 'indium-bismuth alloy'],
    feedbackHit: 'Correct — melting point decreases as bismuth percentage increases.',
    feedbackMiss: 'Look at the table: as % bismuth increases, the melting point values go down → negative/inverse trend.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'If the percentage of bismuth increases in an indium–bismuth alloy, then the density of that alloy will increase, because bismuth has a higher density than indium.',
    keyConcepts: ['Hypothesis formulation', 'If/Then/Because', 'Density of alloys'],
    keywords: ['if bismuth increases', 'then density increases', 'bismuth denser than indium', 'hypothesis If/Then/Because'],
    feedbackHit: 'Well-structured hypothesis with correct If/Then/Because format and scientific reasoning.',
    feedbackMiss: 'Format: "If [% bismuth increases]… then [density increases]… because [bismuth has higher density than indium]."',
  },
  q4_f: {
    marks: 2,
    exemplar: '110°C (accept 100–120°C)',
    keyConcepts: ['Graph extrapolation', 'Interpolation'],
    keywords: ['110°C', '30% bismuth', 'read from graph', 'interpolate indium-bismuth'],
    feedbackHit: 'Correct prediction from the graph — approximately 110°C for 30% bismuth alloy.',
    feedbackMiss: 'Read the graph at 30% bismuth on the x-axis and read across to the y-axis — approximately 110°C.',
    blankAnswers: ['110'],
  },
  q4_g: {
    marks: 2,
    exemplar: 'Type C. The melting point of Type C alloy is below 120°C, so it can be used to solder heat-sensitive components without causing thermal damage.',
    keyConcepts: ['Applying data to context', 'Melting point selection'],
    keywords: ['Type C', 'below 120°C', 'will melt at low temperature', 'soldering heat-sensitive'],
    feedbackHit: 'Correct — Type C selected with valid justification relating melting point to application.',
    feedbackMiss: 'You need an alloy that melts at a temperature below 120°C. Type C has the lowest melting point, making it suitable for soldering heat-sensitive electronics.',
  },

  // ─── Q5 ───
  q5_a: {
    marks: 1,
    exemplar: 'Carbon dioxide (CO₂)',
    keyConcepts: ['Thermal decomposition', 'Sodium bicarbonate'],
    keywords: ['carbon dioxide', 'CO₂', 'baking soda decomposes', 'gas produced'],
    feedbackHit: 'Correct — heating NaHCO₃ produces CO₂.',
    feedbackMiss: 'Baking soda (NaHCO₃) decomposes on heating: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂.',
  },
  q5_b: {
    marks: 2,
    exemplar: 'Independent variable: type of solute; Dependent variable: boiling point (boiling temperature)',
    keyConcepts: ['Variables', 'IV and DV'],
    keywords: ['type of solute', 'boiling point', 'IV', 'DV'],
    feedbackHit: 'Correct — IV is type of solute (what is changed), DV is boiling point (what is measured).',
    feedbackMiss: 'IV = what the student changes (type of solute: salt, sugar, vinegar etc.); DV = what is measured (boiling point/temperature).',
    blankAnswers: ['type of solute', 'boiling point'],
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two from: volume of water; concentration/mass of solute; type of heating source; initial temperature of water; container material/size.',
    keyConcepts: ['Control variables', 'Fair test'],
    keywords: ['volume of water', 'concentration of solute', 'control variable', 'fair test'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables keep the test fair. Examples: volume of water (same for all), concentration of solute (same mass per volume for all).',
  },
  q5_d: {
    marks: 2,
    exemplar: 'How does the type of solute affect the boiling point/temperature of the solution?',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['how does type of solute', 'affect boiling point', 'research question'],
    feedbackHit: 'Good research question linking IV (type of solute) to DV (boiling point).',
    feedbackMiss: 'Link IV to DV: "How does the [type of solute] affect the [boiling point] of the solution?"',
  },

  // ─── Q6 ───
  q6_a: {
    marks: 5,
    exemplar: 'Graph for Roast B: two data points plotted correctly (1); all data points plotted correctly (1); title linking temperature change with time (1); x-axis label: time (min) (1); y-axis label: temperature (°C) (1).',
    keyConcepts: ['Graph plotting', 'Axis labels', 'Data presentation'],
    keywords: ['data points correct', 'title', 'x-axis time min', 'y-axis temperature °C'],
    feedbackHit: 'Graph plotted correctly with accurate data points, title, and axis labels.',
    feedbackMiss: 'Check: (1) plot all data points accurately; (2) title links temperature with time; (3) x-axis: time (min); (4) y-axis: temperature (°C).',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Roast B is the dark roast because the graph shows the beans reaching the highest plateau temperature (~204°C), which is characteristic of dark roasting.',
    keyConcepts: ['Data interpretation', 'Temperature plateau'],
    keywords: ['Roast B dark', 'highest temperature', 'plateau 204°C', 'dark roast identification'],
    feedbackHit: 'Correct — identified Roast B and linked plateau temperature to dark roast.',
    feedbackMiss: 'Dark roast reaches the highest temperatures. Find the sample with the highest plateau temperature on the graph.',
  },
  q6_c: {
    marks: 3,
    exemplar: 'Average = (204 + 203 + 205) / 3 = 612 / 3 = 204°C',
    keyConcepts: ['Mean calculation', 'Significant figures'],
    keywords: ['average', '204°C', '(204+203+205)/3', '612/3'],
    feedbackHit: 'Correct — method shown, values summed, divided by 3, answer = 204°C.',
    feedbackMiss: 'Sum the three values: 204 + 203 + 205 = 612. Divide by 3: 612 ÷ 3 = 204°C.',
    blankAnswers: ['204'],
  },
  q6_d: {
    marks: 2,
    exemplar: '185°C (accept 183–187°C)',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['185°C', '8 minutes', 'medium roast', 'read from graph'],
    feedbackHit: 'Correct — read ~185°C at the 8-minute mark for medium roast.',
    feedbackMiss: 'Find 8 minutes on the x-axis, draw a vertical line up to the medium roast curve, then read across to y-axis: approximately 185°C.',
    blankAnswers: ['185'],
  },
  q6_e: {
    marks: 1,
    exemplar: 'Any reasonable suggestion, for example: moisture content not accurately measured; probe not correctly placed in bean; bean sample had different initial moisture; equipment malfunction.',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['outlier', 'anomalous', 'moisture measurement error', 'probe placement'],
    feedbackHit: 'Valid suggestion for why the 5% moisture data is anomalous.',
    feedbackMiss: 'Consider measurement errors (wrong moisture reading), sample preparation issues, or equipment problems.',
  },
  q6_f: {
    marks: 1,
    exemplar: 'Test samples with intermediate moisture content percentages between the currently tested values to better understand the relationship.',
    keyConcepts: ['Improving investigations', 'Data gaps'],
    keywords: ['intermediate moisture values', 'more data points', 'improve experiment'],
    feedbackHit: 'Good — adding intermediate data points would reveal the trend more clearly.',
    feedbackMiss: 'There are gaps in moisture content data. Test more values in between to fill those gaps and clarify the trend.',
  },

  // ─── Q7 ───
  q7_: {
    marks: 15,
    exemplar: `Criterion B rubric — Coffee bean moisture and roasting time investigation:

Score 1: Either IV or DV identified; one CV; basic equipment list; simple method; one trial per moisture level; a safety precaution.

Score 2: IV (% moisture content) AND DV (roasting time) identified; two CVs; equipment including temperature sensor; method with roasting all samples at fixed temperature; three trials for one moisture level; safety linked to named hazard (e.g. burns from hot oven).

Score 3: As score 2, equipment includes oven thermometer; method with all samples same size/mass; three trials for all moisture levels AND plan to calculate averages; safety precaution with specific hazard.

Score 4 (Meth): As score 3 plus heating until first crack sound is heard (defining completion criterion).`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Safety'],
    keywords: ['IV moisture content', 'DV roasting time', 'CVs oven temperature mass', 'temperature sensor', 'three trials average', 'safety oven burns'],
    feedbackHit: 'Comprehensive design with all required elements.',
    feedbackMiss: 'Include: (1) IV and DV; (2) two CVs; (3) equipment; (4) step-by-step method with clear completion criterion; (5) ≥3 trials per level + average plan; (6) named hazard + safety precaution.',
  },

  // ─── Q8 ───
  q8_a: {
    marks: 1,
    exemplar: 'Na⁺',
    keyConcepts: ['Ionic symbols', 'Sodium ion'],
    keywords: ['Na⁺', 'sodium ion', 'group 1 loses electron', '+1 charge'],
    feedbackHit: 'Correct — sodium forms a +1 ion: Na⁺.',
    feedbackMiss: 'Sodium (Group 1) loses 1 electron to form Na⁺.',
    blankAnswers: ['Na⁺'],
  },
  q8_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 8000 g ÷ 22.99 g mol⁻¹ = 348.0 mol (accept 347.97)',
    keyConcepts: ['Moles calculation', 'Relative atomic mass'],
    keywords: ['n = m/Mr', '8000/22.99', '348.0', 'moles', 'Mr sodium 22.99'],
    feedbackHit: 'Correct: n = 8000/22.99 = 348.0 mol.',
    feedbackMiss: 'n = mass/Mr. Convert 8 kg to g: 8000 g. Mr(Na) = 22.99. n = 8000/22.99 = 348.0 mol.',
    blankAnswers: ['348.0'],
  },
  q8_c: {
    marks: 9,
    exemplar: `Criterion D rubric — Sodium-ion vs lithium-ion batteries:

Environmental (max 4):
- Score 1: comment about Na or Li batteries
- Score 2: comment about both Na AND Li batteries
- Score 3: advantage AND disadvantage for Na-ion OR Li-ion; or advantage/disadvantage for both
- Score 4: advantage AND disadvantage for Na-ion AND Li-ion

Social impacts (max 3):
- Score 1: a social impact of Na or Li batteries
- Score 2: a social impact of both
- Score 3: social impact of both AND an additional impact

Appraisal (max 2):
- Score 1: a choice stated
- Score 2: choice stated with justification

Key points: Na-ion — sodium abundant in seawater, less land disruption, lower cost potential; Li-ion — mature technology, higher energy density but Li mining causes habitat damage. Social: Na-ion could democratise energy storage; Li mining displaces communities. Conclusion: Na-ion more sustainable but technology still maturing.`,
    keyConcepts: ['Criterion D', 'Environmental impact', 'Social impact', 'Battery technology'],
    keywords: ['sodium abundant seawater', 'less mining impact', 'lithium habitat loss', 'social impacts', 'appraisal'],
    feedbackHit: 'Thorough evaluation with environmental and social impacts for both, and justified conclusion.',
    feedbackMiss: 'Cover: env impact of Na-ion AND Li-ion; social impacts of both; justified conclusion.',
  },

  // ─── Q9 ───
  q9_: {
    marks: 12,
    exemplar: `Criterion D rubric — Sustainable vs fast fashion:

Economic aspects (max 4):
- Score 1: economic comment about fashion
- Score 2: economic statement linked to fast OR sustainable fashion
- Score 3: economic statement for fast AND sustainable fashion (or one with justification)
- Score 4: economic statement for fast AND sustainable fashion WITH justification

Use of resources (max 4):
- Score 1: comment about resources in fashion
- Score 2: resource statement for fast OR sustainable fashion
- Score 3: resource statement for fast AND sustainable fashion
- Score 4: resource statement for both WITH justification

Social impacts (max 2):
- Score 1: a social comment about fashion
- Score 2: social impact for fast AND sustainable fashion

Concluding appraisal (max 2):
- Score 1: concluding appraisal given
- Score 2: concluding appraisal with justification

Key points: Fast fashion — cheap for consumers, low wages for workers, massive water/chemical use, short product lifetime, textile waste. Sustainable — higher cost, eco materials, better worker conditions, longer lifespan, less waste. Conclusion: sustainable fashion is preferable for long-term environmental and social health, though economic accessibility must be addressed.`,
    keyConcepts: ['Criterion D', 'Sustainable fashion', 'Fast fashion', 'Resource use', 'Economic impact', 'Social impact'],
    keywords: ['fast fashion cheap', 'sustainable eco-materials', 'economic cost', 'water use', 'worker conditions', 'concluding appraisal'],
    feedbackHit: 'Comprehensive evaluation covering economic, resource, and social dimensions with justified conclusion.',
    feedbackMiss: 'Address: (1) economic aspects of both; (2) resource use; (3) social impacts; (4) justified conclusion.',
  },
}
