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
    correct: 2, // Ca(OH)₂
  },
  q1_b: {
    marks: 2,
    exemplar: 'Group 2; Period 3',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 2', 'period 3', 'magnesium', 'alkaline earth metal'],
    feedbackHit: 'Correct — magnesium (Mg, atomic number 12) is in Group 2, Period 3.',
    feedbackMiss: 'Magnesium (Mg) is in Group 2 (alkaline earth metals) and Period 3 of the periodic table.',
    blankAnswers: ['2', '3'],
  },
  q1_c: {
    marks: 1,
    exemplar: '2.8 (or 1s² 2s² 2p⁶ or K²L⁸)',
    keyConcepts: ['Electron configuration', 'Noble gases'],
    keywords: ['2.8', 'neon', 'ten electrons', 'electron arrangement'],
    feedbackHit: 'Correct — neon has 10 electrons arranged 2.8.',
    feedbackMiss: 'Neon has 10 electrons: 2 in shell 1 and 8 in shell 2 → 2.8.',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Rubidium has less energy required to remove the outer electron (the outer electron is easier to remove) because the outermost electron is further away from the nucleus. There is less nuclear attraction because rubidium has more electron shells than sodium.',
    keyConcepts: ['Reactivity of metals', 'Bohr model', 'Nuclear attraction'],
    keywords: ['more electron shells Rb', 'outer electron further', 'less attraction', 'easier to remove', 'rubidium vs sodium'],
    feedbackHit: 'Correct — more electron shells in Rb → outer electron further → less nuclear attraction → more reactive.',
    feedbackMiss: 'Rb has 5 electron shells (Na has 3), so Rb outer electron is further from nucleus → less attraction → easier to lose → more reactive.',
  },

  // ─── Q2 ───
  q2_a: {
    type: 'mcq',
    correct: 1, // Covalent
  },
  q2_b: {
    type: 'mcq',
    correct: 1, // Option B — H–O–H with lone pairs on O
  },
  q2_c: {
    marks: 3,
    exemplar: 'C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)',
    keyConcepts: ['Balancing equations', 'State symbols', 'Combustion reactions'],
    keywords: ['C₂H₅OH', '3O₂', '2CO₂', '3H₂O', 'state symbols l g', 'ethanol combustion balanced'],
    feedbackHit: 'Correct — balanced combustion equation with correct formulae and state symbols.',
    feedbackMiss: 'Check: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O; verify balance: C=2, H=6, O=7 on both sides ✓; add state symbols (l, g, g, l).',
  },
  q2_d: {
    type: 'mcq',
    correct: 1, // Option B — flammable (flame symbol)
  },
  q2_e: {
    marks: 3,
    exemplar: 'At higher concentrations, more ethanol molecules are present. Therefore there are more successful collisions with bacteria, so bacteria are killed more quickly (rate of reaction is faster).',
    keyConcepts: ['Collision theory', 'Concentration and reaction rate'],
    keywords: ['more ethanol molecules', 'more collisions', 'more successful collisions', 'faster kill rate', 'antiseptic concentration'],
    feedbackHit: 'Correct — linked higher concentration → more particles → more collisions → faster disinfection.',
    feedbackMiss: 'Collision theory: higher ethanol concentration → more ethanol molecules per unit volume → more frequent collisions with bacteria → faster kill rate.',
  },

  // ─── Q3 ───
  q3_a: {
    marks: 2,
    exemplar: 'Gas 1: nitrogen, 78%; Gas 2: oxygen, 20.9% (accept either order)',
    keyConcepts: ['Composition of the atmosphere'],
    keywords: ['nitrogen', '78%', 'oxygen', '20.9%'],
    feedbackHit: 'Correct — nitrogen (78%) and oxygen (20.9%).',
    feedbackMiss: 'Nitrogen ~78% and oxygen ~20.9% are the two most abundant atmospheric gases.',
    blankAnswers: ['nitrogen', '78', 'oxygen', '20.9'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'CO₂ → Polyatomic gas; Argon → Monatomic gas; N₂ → Diatomic gas',
    keyConcepts: ['Classification of molecules', 'Monatomic diatomic polyatomic'],
    keywords: ['CO₂ polyatomic', 'argon monatomic', 'N₂ diatomic', 'exhaust gas classification'],
    feedbackHit: 'All three molecules correctly classified.',
    feedbackMiss: 'Monatomic = single atom (noble gases, Ar); Diatomic = two atoms (N₂, O₂); Polyatomic = three or more atoms (CO₂, H₂O).',
    blankAnswers: ['Polyatomic gas', 'Monatomic gas', 'Diatomic gas'],
  },
  q3_c: {
    marks: 1,
    exemplar: 'Argon is unreactive (inert) because it has a full outer electron shell and therefore does not bond with other atoms.',
    keyConcepts: ['Noble gases', 'Full outer shell'],
    keywords: ['full outer shell argon', 'unreactive', 'inert', 'stable configuration'],
    feedbackHit: 'Correct — full outer electron shell makes argon unreactive and monatomic.',
    feedbackMiss: 'Argon has 8 electrons in its outer shell → stable → does not react or bond → remains single atoms.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'RMM(CCl₃F) = 12 + 3(35.5) + 19 = 12 + 106.5 + 19 = 137.5',
    keyConcepts: ['Relative molecular mass', 'Calculation'],
    keywords: ['12', '35.5', '19', '137.5', 'CCl₃F', 'Freon-11', 'trichlorofluoromethane'],
    feedbackHit: 'Correct — C=12, Cl×3=106.5, F=19 → 137.5.',
    feedbackMiss: 'Use the periodic table: C=12, Cl=35.5, F=19. CCl₃F has 1C, 3Cl, 1F: 12+3(35.5)+19 = 12+106.5+19 = 137.5.',
  },
  q3_e: {
    marks: 3,
    exemplar: 'NO₂ particles diffuse more slowly at 0°C. At 35°C the particles have more kinetic energy (or move faster), so they diffuse until equally spread out more quickly.',
    keyConcepts: ['Diffusion', 'Particle theory', 'Kinetic energy and temperature'],
    keywords: ['NO₂ particles faster', 'more kinetic energy 35°C', 'diffuse quickly', 'particle theory exhaust'],
    feedbackHit: 'Correct — linked higher temperature → greater kinetic energy → faster diffusion of NO₂.',
    feedbackMiss: 'At 35°C, NO₂ molecules have more kinetic energy → move faster → spread/diffuse through air more quickly than at 0°C.',
  },
  q3_f: {
    marks: 1,
    exemplar: 'Correct structural formula of ethane (C₂H₆): CH₃–CH₃, two carbon atoms, each bonded to three hydrogen atoms, all bonds shown.',
    keyConcepts: ['Structural formulae', 'Alkanes', 'Ethane'],
    keywords: ['ethane', 'C₂H₆', 'two carbons', 'CH₃–CH₃', 'structural formula'],
    feedbackHit: 'Correct structural formula for ethane with all bonds shown.',
    feedbackMiss: 'Ethane is C₂H₆: draw 2 carbons bonded together, each with 3 H atoms: H₃C–CH₃.',
  },

  // ─── Q4 ───
  q4_a: {
    marks: 1,
    exemplar: '271.5 (°C)',
    keyConcepts: ['Reading instruments', 'Temperature measurement'],
    keywords: ['271.5', 'thermometer bismuth', 'melting point reading'],
    feedbackHit: 'Correct thermometer reading: 271.5°C.',
    feedbackMiss: 'Read the thermometer scale carefully — the mercury level is at 271.5°C.',
    blankAnswers: ['271.5'],
  },
  q4_b: {
    marks: 1,
    exemplar: '271.3 (°C)',
    keyConcepts: ['Graph reading', 'Melting point determination'],
    keywords: ['271.3', 'plateau bismuth graph', 'Student B melting point'],
    feedbackHit: 'Correct — the plateau of Student B\'s graph is at 271.3°C.',
    feedbackMiss: 'Find the flat plateau in Student B\'s temperature-time graph — that constant temperature is the melting point: 271.3°C.',
    blankAnswers: ['271.3'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'Student B is correct. Student B measured the temperature when all of the bismuth had melted and the change of state had occurred, and the temperature was steady (plateau).',
    keyConcepts: ['Melting point', 'Change of state'],
    keywords: ['Student B bismuth', 'all melted', 'steady temperature', 'plateau technique'],
    feedbackHit: 'Correct — Student B identified with valid reason about steady temperature at completion of melting.',
    feedbackMiss: 'The melting point is the temperature when ALL of the substance has changed state. Student B recorded a steady plateau — that is the true melting point.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'As the percentage of tin increases, the melting point of the bismuth–tin alloy decreases.',
    keyConcepts: ['Trends in data', 'Alloy composition'],
    keywords: ['melting point decreases', 'tin increases', 'negative trend', 'bismuth-tin alloy'],
    feedbackHit: 'Correct — melting point decreases as tin percentage increases.',
    feedbackMiss: 'Look at the table: as % tin increases, the melting point values fall → negative/inverse trend.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'If the percentage of tin increases in a bismuth–tin alloy, then the hardness of that alloy will increase, because tin is harder than bismuth.',
    keyConcepts: ['Hypothesis formulation', 'If/Then/Because', 'Material properties'],
    keywords: ['if tin increases', 'then hardness increases', 'tin harder than bismuth', 'hypothesis If/Then/Because'],
    feedbackHit: 'Well-structured hypothesis with correct If/Then/Because format.',
    feedbackMiss: 'Format: "If [% tin increases]… then [hardness increases]… because [tin is harder than bismuth]."',
  },
  q4_f: {
    marks: 2,
    exemplar: '180°C (accept 170–190°C)',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['180°C', '40% tin', 'bismuth-tin melting point graph'],
    feedbackHit: 'Correct prediction from graph — approximately 180°C for 60% bismuth/40% tin alloy.',
    feedbackMiss: 'Find 40% tin on the x-axis, read up to the curve, then across to y-axis — approximately 180°C.',
    blankAnswers: ['180'],
  },
  q4_g: {
    marks: 2,
    exemplar: 'Type B. The melting point of Type B alloy is approximately 138°C, which matches the required activation temperature for fire sprinkler fuse plugs.',
    keyConcepts: ['Applying data', 'Material selection for specific melting point'],
    keywords: ['Type B', '138°C', 'fire sprinkler fuse', 'exact melting temperature'],
    feedbackHit: 'Correct — Type B selected with valid justification matching required temperature.',
    feedbackMiss: 'Find the alloy type with a melting point closest to 138°C on the table/graph. Type B matches this specification.',
  },

  // ─── Q5 ───
  q5_a: {
    marks: 1,
    exemplar: 'Osmosis',
    keyConcepts: ['Osmosis', 'Semi-permeable membrane', 'Water potential'],
    keywords: ['osmosis', 'semi-permeable membrane', 'water moves', 'dilute to concentrated'],
    feedbackHit: 'Correct — the process is osmosis.',
    feedbackMiss: 'Osmosis is the movement of water molecules across a semi-permeable membrane from a dilute (low solute) to a concentrated (high solute) solution.',
  },
  q5_b: {
    marks: 2,
    exemplar: 'Independent variable: salt concentration; Dependent variable: mass of beetroot (change in mass)',
    keyConcepts: ['Variables', 'IV and DV'],
    keywords: ['salt concentration', 'change in mass', 'IV DV beetroot osmosis'],
    feedbackHit: 'Correct — IV is salt concentration (what changes), DV is mass/change in mass (what is measured).',
    feedbackMiss: 'IV = what is deliberately changed (salt concentration); DV = what is measured (mass of beetroot / change in mass).',
    blankAnswers: ['salt concentration', 'change in mass'],
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two from: size/mass of beetroot pieces; volume of solution; temperature of solution; time in solution; type of beetroot/batch; surface area of pieces.',
    keyConcepts: ['Control variables', 'Fair test'],
    keywords: ['beetroot mass', 'volume solution', 'temperature solution', 'time in solution', 'control variable'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Things to keep the same: size of beetroot pieces (so surface area is equal), volume of solution, temperature, and time in solution.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'How does the salt concentration affect the change in mass of beetroot pieces?',
    keyConcepts: ['Research question', 'Criterion B'],
    keywords: ['how does salt concentration', 'affect mass change', 'research question osmosis'],
    feedbackHit: 'Good research question linking IV (salt concentration) to DV (mass change).',
    feedbackMiss: 'Format: "How does [salt concentration] affect [change in mass of beetroot]?"',
  },

  // ─── Q6 ───
  q6_a: {
    marks: 5,
    exemplar: 'Graph for Candle Type B: two data points plotted correctly (1); all data points plotted correctly (1); title linking temperature change with time (1); x-axis label: time (min) (1); y-axis label: temperature (°C) (1).',
    keyConcepts: ['Graph plotting', 'Axis labels', 'Data presentation'],
    keywords: ['candle type B data points', 'title temperature vs time', 'x-axis time min', 'y-axis temperature °C'],
    feedbackHit: 'Graph plotted correctly with all data points, title, and axis labels.',
    feedbackMiss: 'Check: plot all data points; title links temperature change with time; x-axis: time (min); y-axis: temperature (°C).',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Type B forms the hardest candle because the graph shows a solidification plateau at the highest temperature (~57°C), indicating a more structured crystal lattice and harder wax.',
    keyConcepts: ['Data interpretation', 'Solidification temperature'],
    keywords: ['Type B hardest', 'highest plateau 57°C', 'crystal structure', 'candle hardness'],
    feedbackHit: 'Correct — Type B identified with valid reasoning from the graph.',
    feedbackMiss: 'A harder candle solidifies at a higher temperature because it forms stronger crystal bonds. Type B shows the highest plateau temperature.',
  },
  q6_c: {
    marks: 3,
    exemplar: 'Average = (54.0 + 55.0 + 54.0) / 3 = 163.0 / 3 = 54.3°C',
    keyConcepts: ['Mean calculation', 'Significant figures'],
    keywords: ['54.3°C', '(54+55+54)/3', '163/3', 'average solidification 40% paraffin'],
    feedbackHit: 'Correct — method shown, values summed, divided by 3 = 54.3°C.',
    feedbackMiss: 'Sum the three values: 54.0 + 55.0 + 54.0 = 163.0. Divide by 3: 163.0 ÷ 3 = 54.3°C.',
    blankAnswers: ['54.3'],
  },
  q6_d: {
    marks: 2,
    exemplar: '48°C (accept 47–49°C)',
    keyConcepts: ['Graph reading', 'Interpolation'],
    keywords: ['48°C', '60% paraffin', 'solidification temperature graph candle'],
    feedbackHit: 'Correct — read approximately 48°C at 60% paraffin from the graph.',
    feedbackMiss: 'Find 60% paraffin on the x-axis, draw a vertical line up to the curve, then read across to y-axis: approximately 48°C.',
    blankAnswers: ['48'],
  },
  q6_e: {
    marks: 1,
    exemplar: 'Any reasonable suggestion: incorrect percentage of paraffin mixed; wax not fully cooled before reading; thermometer not correctly positioned; contamination of sample.',
    keyConcepts: ['Anomalous results', 'Experimental error'],
    keywords: ['outlier 20% paraffin', 'measurement error candle', 'anomalous wax data'],
    feedbackHit: 'Valid suggestion for why the 20% paraffin data is anomalous.',
    feedbackMiss: 'Consider errors in sample preparation (wrong % mixed), measurement (thermometer position), or cooling (not fully solidified).',
  },
  q6_f: {
    marks: 1,
    exemplar: 'Test samples with intermediate percentages of paraffin between the values already investigated to fill the gaps in the data.',
    keyConcepts: ['Improving investigations', 'Data gaps'],
    keywords: ['intermediate paraffin values', 'more data points candle', 'improve solidification study'],
    feedbackHit: 'Good — testing intermediate values fills gaps and clarifies the trend.',
    feedbackMiss: 'Add more data points between existing measurements to better define the relationship between paraffin % and solidification temperature.',
  },

  // ─── Q7 ───
  q7_: {
    marks: 15,
    exemplar: `Criterion B rubric — Candle dye concentration and burn time investigation:

Score 1: Either IV or DV identified; one CV; basic equipment; simple method; one trial per dye level; a safety precaution.

Score 2: IV (% dye concentration) AND DV (burn time) identified; two CVs; equipment including measuring cylinder and stopwatch; method with all candles same size/mass; three trials for one dye level; safety linked to named hazard (e.g. burns from naked flame).

Score 3: As score 2 plus three trials for all dye levels AND plan to calculate averages; method includes allowing candle to cool completely before measuring.

Score 4 (Meth): As score 3 plus standardised conditions (ambient temperature, draught-free environment, consistent ignition method).`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Safety'],
    keywords: ['IV dye concentration', 'DV burn time', 'CVs mass wick length diameter', 'three trials average', 'safety naked flame'],
    feedbackHit: 'Comprehensive design with all required elements.',
    feedbackMiss: 'Include: (1) IV and DV; (2) two CVs; (3) equipment; (4) step-by-step method; (5) ≥3 trials per level + average plan; (6) named hazard + precaution.',
  },

  // ─── Q8 ───
  q8_a: {
    marks: 1,
    exemplar: 'Co²⁺',
    keyConcepts: ['Ionic symbols', 'Cobalt ion', 'Transition metals'],
    keywords: ['Co²⁺', 'cobalt ion', '+2 charge', 'transition metal ion'],
    feedbackHit: 'Correct — cobalt(II) forms a 2+ ion: Co²⁺.',
    feedbackMiss: 'Cobalt(II) means Co has a 2+ charge: write Co²⁺.',
    blankAnswers: ['Co²⁺'],
  },
  q8_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 6000 g ÷ 58.93 g mol⁻¹ = 101.8 mol (accept 101.82)',
    keyConcepts: ['Moles calculation', 'Relative atomic mass'],
    keywords: ['n = m/Mr', '6000/58.93', '101.8', 'moles cobalt', 'Mr Co 58.93'],
    feedbackHit: 'Correct: n = 6000/58.93 = 101.8 mol.',
    feedbackMiss: 'n = mass/Mr. Convert 6 kg to g: 6000 g. Mr(Co) = 58.93. n = 6000/58.93 = 101.8 mol.',
    blankAnswers: ['101.8'],
  },
  q8_c: {
    marks: 9,
    exemplar: `Criterion D rubric — Cobalt mining vs crude oil extraction:

Environmental (max 4):
- Score 1: comment about cobalt or crude oil environmental impact
- Score 2: comment about both cobalt AND crude oil
- Score 3: advantage AND disadvantage for cobalt OR crude oil; or advantage/disadvantage for both
- Score 4: advantage AND disadvantage for cobalt AND crude oil

Social impacts (max 3):
- Score 1: a social impact of cobalt or crude oil
- Score 2: social impacts of both
- Score 3: social impacts of both AND an additional impact of either

Appraisal (max 2):
- Score 1: a choice stated
- Score 2: choice with justification

Key points: Cobalt — land degradation, toxic leachate, water pollution; but per km driven electric vehicles emit less CO₂. Crude oil — greenhouse gas emissions, oil spills, acid rain. Social: cobalt DRC — child labour, community displacement, unsafe conditions; crude oil — economic dependence, air pollution health impacts. Conclusion: both harmful; electric vehicles with regulated cobalt supply chains reduce long-term climate impact.`,
    keyConcepts: ['Criterion D', 'Cobalt mining', 'Crude oil', 'Environmental and social impact'],
    keywords: ['cobalt mining DRC', 'child labour', 'crude oil CO₂ emissions', 'oil spills', 'social impacts', 'appraisal justified'],
    feedbackHit: 'Thorough evaluation with environmental and social impacts for both, and justified conclusion.',
    feedbackMiss: 'Cover: env impact of cobalt mining AND crude oil; social impacts of both; justified conclusion.',
  },

  // ─── Q9 ───
  q9_: {
    marks: 12,
    exemplar: `Criterion D rubric — Right-to-repair vs planned obsolescence:

Economic aspects (max 4):
- Score 1: economic comment
- Score 2: economic statement for planned obsolescence OR right-to-repair
- Score 3: economic statement for both (or one with justification)
- Score 4: economic statement for both WITH justification

Use of resources (max 4):
- Score 1: comment about resources
- Score 2: resource statement for one model
- Score 3: resource statement for both models
- Score 4: resource statement for both WITH justification

Social impacts (max 2):
- Score 1: a social comment
- Score 2: social impacts for both models

Concluding appraisal (max 2):
- Score 1: concluding appraisal given
- Score 2: concluding appraisal with justification

Key points: Planned obsolescence — drives company profits, consumer buying cycles, huge e-waste, rare metal depletion. Right-to-repair — cheaper for consumers, reduces e-waste, extends product life, but lower company profits. Social: e-waste exported to developing nations harms communities; repair industry creates local jobs. Conclusion: right-to-repair is more sustainable and equitable.`,
    keyConcepts: ['Criterion D', 'Right-to-repair', 'Planned obsolescence', 'E-waste', 'Sustainability'],
    keywords: ['planned obsolescence e-waste', 'right-to-repair extends life', 'economic impacts', 'rare metals', 'social impacts e-waste', 'concluding appraisal'],
    feedbackHit: 'Comprehensive evaluation covering all four dimensions with justified conclusion.',
    feedbackMiss: 'Address: (1) economic aspects; (2) resource use; (3) social impacts; (4) justified conclusion comparing both models.',
  },
}
