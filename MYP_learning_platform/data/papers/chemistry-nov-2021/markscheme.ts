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
    correct: 1, // CaCO₃
  },
  q1_b: {
    marks: 2,
    exemplar: 'Group 1; Period 3',
    keyConcepts: ['Periodic table', 'Groups and periods'],
    keywords: ['group 1', 'period 3', 'sodium', 'alkali metal'],
    feedbackHit: 'Correct — sodium is in Group 1 (alkali metals) and Period 3.',
    feedbackMiss: 'Check the periodic table: sodium (Na, atomic number 11) is in Group 1, Period 3.',
    blankAnswers: ['1', '3'],
  },
  q1_c: {
    marks: 1,
    exemplar: '2.7 (or 1s² 2s² 2p⁵ or K²L⁷)',
    keyConcepts: ['Electron configuration', 'Electron shells'],
    keywords: ['2.7', 'fluorine', 'seven outer electrons', 'electron arrangement'],
    feedbackHit: 'Correct — fluorine has 9 electrons arranged 2.7.',
    feedbackMiss: 'Fluorine has 9 electrons: 2 in the first shell and 7 in the second shell → 2.7.',
  },
  q1_d: {
    marks: 3,
    exemplar: 'Sodium has less energy required to remove the outer electron (ORA: the outer electron is easier to remove) because the outermost electron is further away from the nucleus. There is less attraction from the nucleus because sodium has more electron shells/levels than lithium.',
    keyConcepts: ['Reactivity of metals', 'Bohr model', 'Nuclear attraction'],
    keywords: ['more electron shells', 'outer electron further', 'less attraction', 'easier to remove', 'Bohr model'],
    feedbackHit: 'Excellent — you linked more electron shells → outer electron further → less nuclear attraction → more reactive.',
    feedbackMiss: 'Use the Bohr model: sodium has 3 shells (Li has 2), so the outer electron in Na is further from the nucleus → less attraction → easier to lose → more reactive.',
  },

  // ─── Q2 ───
  q2_a: {
    type: 'mcq',
    correct: 1, // Covalent
  },
  q2_b: {
    type: 'mcq',
    correct: 2, // Option C — H-O-O-H with lone pairs
  },
  q2_c: {
    marks: 3,
    exemplar: '2H₂O₂(aq) → 2H₂O(l) + O₂(g)',
    keyConcepts: ['Balancing equations', 'State symbols', 'Decomposition reactions'],
    keywords: ['2H₂O₂', '2H₂O', 'O₂', 'state symbols', 'aq l g', 'balanced equation'],
    feedbackHit: 'Correct — fully balanced equation with correct formulae and state symbols.',
    feedbackMiss: 'Check: formulae of products (H₂O and O₂); coefficients (2:2:1); state symbols (aq, l, g).',
  },
  q2_d: {
    type: 'mcq',
    correct: 3, // Option D — oxidising (flame over circle)
  },
  q2_e: {
    marks: 3,
    exemplar: 'At higher concentrations, more hydrogen peroxide particles are present. Therefore there are more successful collisions with stain particles, so the teeth are being whitened more quickly (rate of reaction is faster).',
    keyConcepts: ['Collision theory', 'Concentration and reaction rate'],
    keywords: ['more H₂O₂ particles', 'more collisions', 'more successful collisions', 'faster rate', 'whitened more quickly'],
    feedbackHit: 'Well done — you correctly linked higher concentration → more particles → more collisions → faster whitening.',
    feedbackMiss: 'Apply collision theory: higher concentration means more H₂O₂ particles in the same volume → more frequent collisions with stain particles → faster rate of whitening.',
  },

  // ─── Q3 ───
  q3_a: {
    marks: 2,
    exemplar: 'Gas 1: nitrogen, 78%; Gas 2: oxygen, 20.9% (accept in either order)',
    keyConcepts: ['Composition of the atmosphere', 'Data reading'],
    keywords: ['nitrogen', '78%', 'oxygen', '20.9%', 'most common gases'],
    feedbackHit: 'Correct — nitrogen (78%) and oxygen (20.9%) are the two most abundant atmospheric gases.',
    feedbackMiss: 'Read the pie chart: the largest segment is nitrogen at 78%; the second largest is oxygen at 20.9%.',
    blankAnswers: ['nitrogen', '78', 'oxygen', '20.9'],
  },
  q3_b: {
    marks: 3,
    exemplar: 'Helium → Monatomic gas; Carbon dioxide → Polyatomic gas; Oxygen → Diatomic gas. All correct pairings score 3; correct pairing and correct structure earn full marks.',
    keyConcepts: ['Atomic structure', 'Classification of molecules'],
    keywords: ['monatomic helium', 'diatomic oxygen', 'polyatomic carbon dioxide', 'noble gas', 'molecule types'],
    feedbackHit: 'All three molecules correctly classified.',
    feedbackMiss: 'Monatomic = single atom (He); Diatomic = two atoms bonded (O₂); Polyatomic = three or more atoms (CO₂).',
    blankAnswers: ['Monatomic gas', 'Polyatomic gas', 'Diatomic gas'],
  },
  q3_c: {
    marks: 1,
    exemplar: 'Noble gases are unreactive (or inert) because they have full outer shells of electrons and therefore do not share electrons with other atoms.',
    keyConcepts: ['Noble gases', 'Full outer shell', 'Electron configuration'],
    keywords: ['full outer shell', 'unreactive', 'inert', 'do not bond', 'stable configuration'],
    feedbackHit: 'Correct — full outer electron shell means noble gases do not need to share or transfer electrons.',
    feedbackMiss: 'Noble gases have 8 electrons (or 2 for helium) in their outer shell — this is a stable configuration, so they do not react or bond with other atoms.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'RMM(C₂Cl₃F₃) = 2(12) + 3(35.5) + 3(19) = 24 + 106.5 + 57 = 187.5',
    keyConcepts: ['Relative molecular mass', 'Calculation', 'Periodic table'],
    keywords: ['12', '35.5', '19', '187.5', 'C₂Cl₃F₃', 'trichlorotrifluoroethane', 'RMM calculation'],
    feedbackHit: 'Correct — identified C, Cl and F atomic masses and summed correctly to get 187.5.',
    feedbackMiss: 'Use the periodic table: C=12, Cl=35.5, F=19. Count atoms: 2C, 3Cl, 3F. RMM = 2(12)+3(35.5)+3(19) = 24+106.5+57 = 187.5.',
  },
  q3_e: {
    marks: 3,
    exemplar: 'Scent or deodorant particles move (diffuse or spread) more slowly at lower temperatures. At higher temperatures (20°C), the particles have more kinetic energy (or move faster), so they diffuse until equally spread out more quickly.',
    keyConcepts: ['Diffusion', 'Particle theory', 'Kinetic energy and temperature'],
    keywords: ['particles move faster', 'more kinetic energy', 'diffuse more quickly', 'lower temperature slower', 'particle theory'],
    feedbackHit: 'Good explanation linking temperature → kinetic energy → speed of diffusion.',
    feedbackMiss: 'Particle theory: at higher temperatures, particles have greater kinetic energy so they move faster → diffuse and spread out more quickly → room fills with scent sooner.',
  },
  q3_f: {
    marks: 1,
    exemplar: 'Correct structural formula of propane (C₃H₈): three carbon atoms in a chain, each carbon bonded to sufficient hydrogen atoms (CH₃–CH₂–CH₃), all bonds shown.',
    keyConcepts: ['Structural formulae', 'Alkanes', 'Covalent bonding'],
    keywords: ['propane', 'C₃H₈', 'three carbons', 'full structural formula', 'H atoms correct'],
    feedbackHit: 'Correct structural formula for propane with all bonds shown.',
    feedbackMiss: 'Propane is C₃H₈: draw 3 carbons in a chain, add enough H atoms so each carbon forms 4 bonds (CH₃–CH₂–CH₃).',
  },

  // ─── Q4 ───
  q4_a: {
    marks: 1,
    exemplar: '28.1 (°C)',
    keyConcepts: ['Reading instruments', 'Temperature measurement'],
    keywords: ['28.1', 'thermometer reading', 'scale', 'meniscus'],
    feedbackHit: 'Correct thermometer reading: 28.1°C.',
    feedbackMiss: 'Read the scale carefully — the mercury level is between 28 and 29°C, at the 28.1°C mark.',
    blankAnswers: ['28.1'],
  },
  q4_b: {
    marks: 1,
    exemplar: '29.7 (°C)',
    keyConcepts: ['Graph reading', 'Melting point determination'],
    keywords: ['29.7', 'plateau', 'melting point from graph', 'Student B'],
    feedbackHit: 'Correct — the plateau of Student B\'s graph is at 29.7°C, which is the melting point.',
    feedbackMiss: 'Look for the flat plateau in Student B\'s temperature-time graph — that constant temperature is the melting point: 29.7°C.',
    blankAnswers: ['29.7'],
  },
  q4_c: {
    marks: 2,
    exemplar: 'Student B is correct. Student B measured the temperature when all of the gallium had melted and the change of state had occurred, and the temperature was steady (plateau).',
    keyConcepts: ['Melting point', 'Change of state', 'Experimental technique'],
    keywords: ['Student B', 'all gallium melted', 'temperature steady', 'plateau', 'change of state complete'],
    feedbackHit: 'Correct — identified Student B and gave a valid reason relating to steady temperature at completion of melting.',
    feedbackMiss: 'The melting point is the temperature when all of a substance has changed state. Student B\'s temperature probe recorded a steady plateau (constant T) when all gallium had melted.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'As the percentage of zinc increases, the melting point of the brass alloy decreases.',
    keyConcepts: ['Trends in data', 'Alloy composition'],
    keywords: ['melting point decreases', 'zinc increases', 'inverse relationship', 'trend'],
    feedbackHit: 'Correct — melting point decreases as zinc percentage increases.',
    feedbackMiss: 'Look at the table: as % zinc goes up (from 0% to 40%), the melting point values go down → inverse/negative trend.',
  },
  q4_e: {
    marks: 3,
    exemplar: 'If the percentage of zinc increases in a brass alloy, then the density of that alloy will decrease, because zinc has a lower density than copper.',
    keyConcepts: ['Hypothesis formulation', 'If/Then/Because', 'Density of alloys'],
    keywords: ['if zinc increases', 'then density decreases', 'because zinc lower density', 'hypothesis', 'If/Then/Because'],
    feedbackHit: 'Well-structured hypothesis with correct If/Then/Because reasoning.',
    feedbackMiss: 'Use the format: "If [IV changes]… then [DV response]… because [scientific reasoning]". Zinc (density ~7.1 g/cm³) is less dense than copper (8.9 g/cm³) so increasing zinc % should reduce overall density.',
  },
  q4_f: {
    marks: 2,
    exemplar: '1000°C (accept 990–1010°C)',
    keyConcepts: ['Graph extrapolation', 'Interpolation', 'Predicting values'],
    keywords: ['1000', '80% copper 20% zinc', 'read from graph', 'interpolate'],
    feedbackHit: 'Correct prediction from the graph — 1000°C (±10) for 20% zinc alloy.',
    feedbackMiss: 'Read the graph at 20% zinc on the x-axis and read across to the y-axis — the predicted melting point is approximately 1000°C.',
    blankAnswers: ['1000'],
  },
  q4_g: {
    marks: 2,
    exemplar: 'Type A. The melting point of Type A brass is 1066°C, which is above 1050°C, so it will not melt in that environment.',
    keyConcepts: ['Applying data to real-world contexts', 'Melting point selection'],
    keywords: ['Type A', '1066°C', 'above 1050°C', 'will not melt', 'justify'],
    feedbackHit: 'Correct — Type A selected and correctly justified using melting point data.',
    feedbackMiss: 'You need a brass with melting point above 1050°C. Only Type A (1066°C) exceeds this threshold — Type B and C would melt.',
  },

  // ─── Q5 ───
  q5_a: {
    marks: 1,
    exemplar: 'Carbon dioxide (CO₂)',
    keyConcepts: ['Dissolved gases', 'Carbonation'],
    keywords: ['carbon dioxide', 'CO₂', 'carbonated', 'dissolved gas'],
    feedbackHit: 'Correct — carbon dioxide (CO₂) is dissolved under pressure to make drinks fizzy.',
    feedbackMiss: 'Carbonated drinks are made by dissolving carbon dioxide (CO₂) gas under pressure.',
  },
  q5_b: {
    marks: 2,
    exemplar: 'Independent variable: type of solute (type of substance dissolved); Dependent variable: freezing point (freezing temperature)',
    keyConcepts: ['Variables', 'Independent and dependent variables', 'Criterion B'],
    keywords: ['type of solute', 'freezing point', 'independent variable', 'dependent variable', 'IV DV'],
    feedbackHit: 'Correct — IV is what is changed (type of solute), DV is what is measured (freezing point).',
    feedbackMiss: 'The IV is what the student deliberately changes (type of solute: salt, sugar, carbonated etc.). The DV is what is measured as a result (freezing point/temperature).',
    blankAnswers: ['type of solute', 'freezing point'],
  },
  q5_c: {
    marks: 2,
    exemplar: 'Any two from: volume/size of ice cube; amount/mass/concentration of solute; temperature of freezer; shape/material of container; starting temperature of solution; time in freezer.',
    keyConcepts: ['Control variables', 'Fair test', 'Criterion B'],
    keywords: ['volume of solution', 'concentration of solute', 'temperature of freezer', 'control variable', 'fair test'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables are things that must stay the same to make it a fair test. Examples: concentration of solute, volume of water, freezer temperature.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'How does the type of solute affect the freezing point/temperature of the solution?',
    keyConcepts: ['Research question', 'IV and DV in question form', 'Criterion B'],
    keywords: ['how does type of solute', 'affect freezing point', 'research question', 'IV to DV'],
    feedbackHit: 'Well-formulated research question linking IV (type of solute) to DV (freezing point).',
    feedbackMiss: 'A research question should ask how the IV affects the DV: "How does the [type of solute] affect the [freezing point] of the solution?"',
  },

  // ─── Q6 ───
  q6_a: {
    marks: 5,
    exemplar: 'Graph for Sample B: two data points plotted correctly (1); all data points plotted correctly (1); title linking temperature change with time (1); x-axis label: time (s) (1); y-axis label: temperature (°C) (1).',
    keyConcepts: ['Graph plotting', 'Axis labels', 'Data presentation', 'Criterion C'],
    keywords: ['data points correct', 'title', 'x-axis time s', 'y-axis temperature °C', 'line of best fit'],
    feedbackHit: 'Graph plotted with all data points correct, proper title, and correct axis labels.',
    feedbackMiss: 'Check: (1) plot all data points accurately; (2) title must link temperature change with time; (3) x-axis labelled "time (s)"; (4) y-axis labelled "temperature (°C)"; (5) all points plotted correctly.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Sample B is Form V chocolate because the graph shows a steady plateau at 35°C, which is the melting temperature of Form V.',
    keyConcepts: ['Data interpretation', 'Melting point plateau', 'Criterion C'],
    keywords: ['Sample B', 'plateau at 35°C', 'Form V melting point', 'steady temperature', 'phase change'],
    feedbackHit: 'Correct — identified Sample B and correctly linked the plateau at 35°C to Form V.',
    feedbackMiss: 'Form V chocolate melts at 35°C. Look for a sample whose graph shows a flat plateau (constant temperature during melting) at 35°C — that is Sample B.',
  },
  q6_c: {
    marks: 3,
    exemplar: 'Average = (37.0 + 36.0 + 37.0) / 3 = 110.0 / 3 = 36.6(6…) ≈ 36.7°C (to 3 significant figures)',
    keyConcepts: ['Mean calculation', 'Significant figures', 'Criterion C'],
    keywords: ['average', 'mean', '36.7', '36.6', '(37+36+37)/3', 'three significant figures'],
    feedbackHit: 'Correct — method shown (sum/3), unrounded value, and correctly rounded to 36.7°C.',
    feedbackMiss: 'Add the three values: 37.0 + 36.0 + 37.0 = 110.0; divide by 3 = 36.6̄°C; round to 3 significant figures = 36.7°C.',
    blankAnswers: ['36.7'],
  },
  q6_d: {
    marks: 2,
    exemplar: '43°C (accept 42.5–43.5°C)',
    keyConcepts: ['Graph reading', 'Interpolation', 'Criterion C'],
    keywords: ['43', '50% cocoa', 'read from graph', 'interpolation'],
    feedbackHit: 'Correct — read the graph at 50% cocoa and obtained 43°C.',
    feedbackMiss: 'Find 50% on the x-axis (% cocoa), draw a vertical line up to the curve, then read across to the y-axis — the melting point is approximately 43°C.',
    blankAnswers: ['43'],
  },
  q6_e: {
    marks: 1,
    exemplar: 'Any reasonable suggestion, for example: melting point not measured correctly; incorrect percentage of cocoa used; not all of the sample was melted; water bath was at an incorrect temperature.',
    keyConcepts: ['Anomalous results', 'Experimental error', 'Criterion C'],
    keywords: ['outlier', 'anomalous', 'measurement error', 'incorrect cocoa %', 'temperature not controlled'],
    feedbackHit: 'Valid suggestion for why the 37% cocoa data is anomalous.',
    feedbackMiss: 'An outlier can arise from measurement errors (wrong temperature reading), sample preparation errors (wrong % cocoa), or experimental setup issues.',
  },
  q6_f: {
    marks: 1,
    exemplar: 'Investigate samples with intermediate percentages of cocoa between 30% and 60% to better understand the trend.',
    keyConcepts: ['Improving investigations', 'Filling data gaps', 'Criterion C'],
    keywords: ['intermediate %', 'between 30 and 60', 'more data points', 'improve', 'fill gap'],
    feedbackHit: 'Good suggestion — investigating intermediate values would clarify the trend between 30% and 60% cocoa.',
    feedbackMiss: 'The gap between 30% and 60% cocoa has no data points. To improve, investigate chocolates with percentages in between (e.g., 40%, 50%) to confirm the trend.',
  },

  // ─── Q7 ───
  q7_: {
    marks: 15,
    exemplar: `Criterion B rubric — Investigation design (chocolate sugar and melting point):

Score 1: Either IV or DV identified; one control variable stated; equipment to measure temperature listed; method with chocolate in boiling tube described; at least three trials for one chocolate; a safety precaution mentioned.

Score 2: IV (type/amount of sugar) AND DV (melting point/°C) identified; two control variables stated; equipment to measure temperature AND monitor boiling tube listed; method with all samples, measure melting, all samples same size/mass; at least three trials for all chocolates; safety precaution linked to a specific named hazard (e.g. burns from hot water).

Score 3 (full marks for each criterion row): As score 2, plus: at least three trials for all chocolates AND plan to calculate average; method includes heating until temperature is stable and recording plateau temperature.

Score 4 (for Meth row): As score 3 plus heating until temperature is stable (steady state).`,
    keyConcepts: ['Criterion B', 'Investigation design', 'Variables', 'Method', 'Sufficient data', 'Safety'],
    keywords: ['IV sugar %', 'DV melting point', 'CV cocoa %', 'CV mass chocolate', 'boiling tube water bath', 'temperature probe', 'three trials', 'average', 'safety burns'],
    feedbackHit: 'Comprehensive design with IV/DV/CVs, equipment, clear method, sufficient data plan, and specific safety precaution.',
    feedbackMiss: 'Ensure you include: (1) IV and DV clearly named; (2) two CVs; (3) equipment list; (4) step-by-step method including heating until temperature is steady; (5) at least 3 trials for each chocolate AND plan to calculate averages; (6) a safety precaution linked to a named hazard.',
  },

  // ─── Q8 ───
  q8_a: {
    marks: 1,
    exemplar: 'Li⁺',
    keyConcepts: ['Ionic symbols', 'Lithium ion', 'Charge'],
    keywords: ['Li⁺', 'lithium ion', 'positive charge', '+1'],
    feedbackHit: 'Correct — lithium forms a +1 ion, written as Li⁺.',
    feedbackMiss: 'Lithium (Group 1) loses 1 electron to form a +1 ion: write Li⁺ (accept Li+ without superscript).',
    blankAnswers: ['Li⁺'],
  },
  q8_b: {
    marks: 2,
    exemplar: 'n = m/Mr = 12000 g ÷ 6.94 g mol⁻¹ = 1714.3 mol (accept 1714.28)',
    keyConcepts: ['Moles calculation', 'Relative atomic mass', 'Quantitative chemistry'],
    keywords: ['n = m/Mr', '12000/6.94', '1714', '1714.3', 'moles', 'Mr lithium 6.94'],
    feedbackHit: 'Correct calculation: n = 12000/6.94 = 1714.3 mol.',
    feedbackMiss: 'Use n = mass/Mr. Convert 12 kg to grams: 12000 g. Mr(Li) = 6.94. n = 12000/6.94 = 1714.3 mol.',
    blankAnswers: ['1714.3'],
  },
  q8_c: {
    marks: 9,
    exemplar: `Criterion D rubric — Lithium-ion batteries vs crude oil (environmental & social):

Environmental (max 4):
- Score 1: comment about lithium-ion batteries OR crude oil
- Score 2: comment about both lithium-ion batteries AND crude oil
- Score 3: statement of advantage AND disadvantage for lithium-ion OR petrol; OR advantage or disadvantage for BOTH
- Score 4: statement of advantage AND disadvantage for lithium-ion AND crude oil

Social impacts (max 3):
- Score 1: a social impact of lithium-ion batteries OR crude oil
- Score 2: a social impact of lithium-ion batteries AND crude oil
- Score 3: a social impact of lithium-ion batteries AND crude oil AND an additional impact of either

Appraisal (max 2):
- Score 1: a choice is stated
- Score 2: a choice is stated with further justification

Environmental points: Li mining — habitat destruction, water use, soil contamination, toxic chemicals; but no direct CO₂ from car use. Crude oil — CO₂/NOₓ/SOₓ emissions, oil spills, habitat loss, air pollution.
Social points: Li mining — displacement of local communities, water scarcity for local populations; Petrol — health effects from air pollution, economic dependence on oil-producing nations.
Conclusion: both have significant impacts; Li batteries preferred for urban air quality and climate; mining impacts require regulation.`,
    keyConcepts: ['Criterion D', 'Environmental impact', 'Social impact', 'Lithium mining', 'Crude oil extraction', 'Appraisal'],
    keywords: ['lithium mining habitat loss', 'water contamination', 'CO₂ crude oil', 'air quality electric cars', 'social impacts', 'appraisal justified conclusion'],
    feedbackHit: 'Thorough evaluation with environmental and social impacts for both options, and a justified conclusion.',
    feedbackMiss: 'Cover: (1) environmental impact of Li mining (land, water) AND crude oil (CO₂, spills); (2) social impact of both; (3) state a conclusion with justification comparing the two.',
  },

  // ─── Q9 ───
  q9_: {
    marks: 12,
    exemplar: `Criterion D rubric — Circular vs linear economy:

Economic aspects (max 4):
- Score 1: a comment about an economic impact
- Score 2: a statement about an economic impact linked to the linear OR circular economy
- Score 3: a statement about an economic impact linked to the linear economy AND the circular economy (or the circular economy WITH justification)
- Score 4: a statement about an economic impact linked to the linear economy AND the circular economy WITH justification

Use of resources (max 4):
- Score 1: a comment about use of resources
- Score 2: a statement about use of resources linked to the linear OR circular economy
- Score 3: a statement about use of resources linked to the linear economy AND the circular economy
- Score 4: a statement about use of resources linked to the linear economy AND the circular economy WITH justification

Social impacts (max 2):
- Score 1: a comment about a social impact
- Score 2: a statement about social impacts linked to the linear economy AND the circular economy

A concluding appraisal (max 2):
- Score 1: a concluding appraisal is given
- Score 2: a concluding appraisal is given with justification

Key points: Linear economy — cheap upfront, finite resources depleted, waste generation, pollution. Circular economy — design for longevity, reuse, recycling, reduces raw material costs long-term, job creation in recycling sector, reduces waste and pollution. Social: circular economy creates green jobs; linear causes waste management burdens on communities. Conclusion: circular economy is more sustainable for long-term resource security and environmental health.`,
    keyConcepts: ['Criterion D', 'Circular economy', 'Linear economy', 'Resource use', 'Economic impact', 'Social impact', 'Sustainability'],
    keywords: ['linear take-make-dispose', 'circular reuse recycle', 'economic cost benefit', 'resource depletion', 'social impacts', 'sustainability', 'concluding appraisal'],
    feedbackHit: 'Comprehensive evaluation covering economic, resource, and social dimensions of both models with a justified conclusion.',
    feedbackMiss: 'Address all four areas: (1) economic aspects of both economies; (2) use of resources in both; (3) social impacts; (4) a justified conclusion stating which is preferable and why.',
  },
}
