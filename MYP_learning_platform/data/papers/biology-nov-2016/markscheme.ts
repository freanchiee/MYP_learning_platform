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

export const MS: MSRecord = {

  // ── Q1: Cells ──────────────────────────────────────────────────────────────
  q1_a: {
    marks: 6,
    exemplar: 'Any three functions with description (2 marks each): Growth/differentiation — increasing in size/becoming more complex; Respiration — release of energy from nutrients; Reproduction — replication of cells/propagation of species; Digestion — breakdown of food to simpler molecules; Homeostasis — regulation of internal environment; Excretion — elimination of metabolic waste/CO₂.',
    keyConcepts: ['cell functions growth respiration reproduction homeostasis excretion'],
    keywords: ['growth', 'respiration', 'reproduction', 'digestion', 'homeostasis', 'excretion'],
    feedbackHit: 'Good — correctly described cell functions.',
    feedbackMiss: 'Describe the function in detail, not just name it. E.g. "Respiration — release of energy from nutrients."',
  },
  q1_b: {
    marks: 6,
    exemplar: 'Image A: plant cell — cell wall or chloroplast or large central vacuole. Image B: plant cell — cell wall or chloroplast or large central vacuole. Image C: animal cell — absence of cell wall/absence of chloroplast/presence of lysosomes. (2 marks per cell: 1 for identification, 1 for justification by structure.)',
    keyConcepts: ['plant cell animal cell key structures cell wall chloroplast vacuole lysosomes'],
    keywords: ['plant cell', 'animal cell', 'cell wall', 'chloroplast', 'large central vacuole', 'lysosomes'],
    feedbackHit: 'Correct identification with structural justification.',
    feedbackMiss: 'Justify by naming a key structure — e.g. "plant cell because it has a cell wall and chloroplasts."',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Hypothesis: If the cell is exposed to light then it will produce oxygen / if the cell is given nutrients but placed in dark it will not survive. Explanation: plant-like organisms photosynthesize to produce oxygen / carry out photosynthesis so do not survive without light.',
    keyConcepts: ['testable hypothesis plant cell photosynthesis oxygen light'],
    keywords: ['hypothesis', 'light', 'oxygen', 'photosynthesis', 'plant', 'testable'],
    feedbackHit: 'Good hypothesis with correct explanation.',
    feedbackMiss: 'A testable hypothesis must be measurable (e.g. oxygen production in light vs dark).',
  },

  // ── Q2: Organisation & Circulation ────────────────────────────────────────
  q2_a: {
    marks: 2,
    exemplar: 'Correct order least → most complex: B – E – A – C – D. Award 1 mark for three adjacent images in correct order; 2 marks for all correct.',
    keyConcepts: ['levels of biological organisation cell tissue organ organism'],
    keywords: ['cell', 'tissue', 'organ', 'organism', 'complexity', 'organisation'],
    feedbackHit: 'Correct sequence of increasing biological complexity.',
    feedbackMiss: 'Order from least to most complex: single cell → tissue (group of cells) → organ → organism.',
  },
  q2_b: {
    marks: 5,
    exemplar: 'Any five in order: O₂ diffuses across alveolus membrane → into capillary → binds haemoglobin/red blood cell → transported to heart via pulmonary vein → through left atrium/ventricle → leaves via aorta → through arteries → through capillaries → diffuses into muscle cell. (3 max for five points in incorrect order; ignore "vein" without "pulmonary".)',
    keyConcepts: ['oxygen transport lungs to muscle alveolus haemoglobin heart aorta capillary diffusion'],
    keywords: ['alveolus', 'diffusion', 'haemoglobin', 'red blood cell', 'pulmonary vein', 'heart', 'aorta', 'artery', 'capillary', 'muscle cell'],
    feedbackHit: 'Accurate route using correct anatomical terms.',
    feedbackMiss: 'Include the pathway: alveolus → capillary → red blood cell/haemoglobin → heart → aorta → arteries → capillaries → muscle cell.',
  },

  // ── Q3: Fish Gill Disease ──────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: '0.29 cm³ h⁻¹ (accept 0.28; ignore incorrect units).',
    keyConcepts: ['read graph oxygen uptake healthy fish gill disease'],
    keywords: ['0.29', 'cm³', 'h⁻¹', 'oxygen uptake', 'healthy fish'],
    feedbackHit: 'Correct value read from graph.',
    feedbackMiss: 'Read the y-intercept (0% gill affected) from the graph — approximately 0.29 cm³ h⁻¹.',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Negative/inverse relationship, or: as the percentage of gill affected increases, oxygen uptake decreases.',
    keyConcepts: ['inverse negative relationship gill affected oxygen uptake'],
    keywords: ['negative', 'inverse', 'gill affected', 'oxygen uptake', 'decreases'],
    feedbackHit: 'Correct description of the inverse relationship.',
    feedbackMiss: 'As more of the gill is affected (%), the oxygen uptake decreases — this is a negative/inverse relationship.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'One feature in common (e.g. thin membrane/large surface area/moist surface/capillaries) + one different feature (e.g. oxygen from water vs air; fish gills external/plate-like lamellae vs human lungs internal/globular alveoli) + any third additional point from either list.',
    keyConcepts: ['fish gill vs human lung comparison structure function'],
    keywords: ['gill', 'lung', 'lamellae', 'alveoli', 'thin membrane', 'surface area', 'moist', 'external', 'internal', 'water', 'air'],
    feedbackHit: 'Good comparison including both similarities and differences.',
    feedbackMiss: 'Compare: both have large surface area and thin membrane. Differ: gills external/lamellae (fish) vs internal/alveoli (humans); oxygen from water vs air.',
  },
  q3_d: {
    marks: 2,
    exemplar: 'Increased thickness increases the diffusion distance → oxygen cannot diffuse as quickly/efficiently; reduced surface area/declared surface area decreases as thickness increases.',
    keyConcepts: ['gill thickness diffusion distance oxygen uptake gas exchange'],
    keywords: ['thickness', 'diffusion distance', 'oxygen', 'gas exchange', 'surface area'],
    feedbackHit: 'Correctly links increased thickness to slower diffusion.',
    feedbackMiss: 'Greater thickness = longer diffusion distance = less oxygen reaches the blood efficiently.',
  },
  q3_e: {
    marks: 5,
    exemplar: 'How food chain will be affected; size of fish population reduced; effects on diseased fish activities on the community; effects on human community that harvests the fish (economic/food security impact).',
    keyConcepts: ['gill disease consequences food chain population human community economic'],
    keywords: ['food chain', 'population', 'predator', 'human community', 'economic', 'fishing', 'food security'],
    feedbackHit: 'Discussed multiple consequences covering ecosystem and human impacts.',
    feedbackMiss: 'Consider: food chain disruption, declining fish population, impact on the fishing community\'s food and income.',
  },

  // ── Q4: Athlete Fitness & Oxygen Consumption ──────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'Any two: time of exercise; time of day; age; body mass; type of exercise. (2nd mark awarded if justification is correct even if variable incorrectly identified.)',
    keyConcepts: ['control variables fitness experiment oxygen consumption'],
    keywords: ['control variable', 'time', 'age', 'body mass', 'type of exercise'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables keep conditions fair — e.g. same age, same time of day, same type of exercise.',
  },
  q4_b: {
    marks: 2,
    exemplar: 'Positive (linear) relationship — oxygen consumption increases with exercise intensity (up to VO₂ max/point A); levels off/constant after point A.',
    keyConcepts: ['positive linear relationship oxygen consumption exercise intensity graph'],
    keywords: ['positive', 'linear', 'relationship', 'oxygen consumption', 'exercise intensity', 'VO₂ max'],
    feedbackHit: 'Correctly stated positive/linear relationship.',
    feedbackMiss: 'As exercise intensity increases, oxygen consumption increases proportionally — this is a positive/linear relationship.',
  },
  q4_c: {
    marks: 5,
    exemplar: 'Before point A: oxygen consumption increases with exercise intensity; cells use more O₂ for energy (aerobic respiration). After point A: oxygen consumption plateaus/stays constant at VO₂ max; cells cannot consume more O₂; cells switch to anaerobic respiration to obtain extra energy.',
    keyConcepts: ['VO₂ max aerobic anaerobic respiration oxygen consumption cellular level'],
    keywords: ['VO₂ max', 'aerobic', 'anaerobic', 'point A', 'oxygen', 'plateau', 'respiration', 'energy'],
    feedbackHit: 'Accurately described both before and after VO₂ max with cellular explanation.',
    feedbackMiss: 'Before A: aerobic respiration increases O₂ use. After A (VO₂ max): cells cannot use more O₂; anaerobic respiration begins.',
  },

  // ── Q5: GM Maize Investigation ─────────────────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Use of fertilizer (with fertilizer vs without fertilizer).',
    keyConcepts: ['second independent variable fertilizer GM maize investigation'],
    keywords: ['fertilizer', 'independent variable', 'with fertilizer', 'without fertilizer'],
    feedbackHit: 'Correctly identified use of fertilizer as the second IV.',
    feedbackMiss: 'The second variable being changed is the use of fertilizer (GM grown without, traditional grown with).',
  },
  q5_b: { type: 'mcq', correct: 2 },
  q5_c: {
    marks: 4,
    exemplar: 'At least five values per data set; outliers excluded (all values 1.1–1.8 m); data sets identified by headers including unit of m; data consistently to 3 or 4 significant figures.',
    keyConcepts: ['data table GM maize plant height significant figures units'],
    keywords: ['table', 'height', 'significant figures', 'unit', 'm', 'group', 'data'],
    feedbackHit: 'Table correctly labelled with appropriate data and significant figures.',
    feedbackMiss: 'Table needs: group headers, unit (m), at least 5 values per group, 3–4 significant figures, no outliers.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Mean in range 1.43–1.46 m; expressed to 3 or 4 significant figures.',
    keyConcepts: ['mean average plant height group calculation significant figures'],
    keywords: ['mean', 'average', '1.43', '1.46', 'significant figures'],
    feedbackHit: 'Mean calculated correctly and to appropriate significant figures.',
    feedbackMiss: 'Sum all heights and divide by the number of plants. Express to 3–4 significant figures.',
  },
  q5_e: {
    marks: 3,
    exemplar: 'Bar graph selected; x-axis labelled with group names; y-axis labelled with height (m) with units; appropriate title.',
    keyConcepts: ['bar graph axes labels title height GM traditional maize'],
    keywords: ['bar graph', 'axes', 'label', 'title', 'units', 'height', 'm'],
    feedbackHit: 'Bar graph with correct axis labels and title.',
    feedbackMiss: 'Use a bar graph; label x-axis (group name) and y-axis (height/m); add a suitable title.',
  },
  q5_f: {
    marks: 3,
    exemplar: 'Result: both groups have similar heights. Conclusion: GM maize without fertilizer has same growth as traditional maize with fertilizer. Scientific explanation: the new gene allowed maize to obtain nutrients more efficiently.',
    keyConcepts: ['analyse results GM maize conclusion scientific explanation nutrient gene'],
    keywords: ['similar heights', 'same growth', 'no fertilizer', 'GM gene', 'nutrients', 'conclusion'],
    feedbackHit: 'Analysis includes result, conclusion, and scientific explanation.',
    feedbackMiss: 'State the result from your data, draw a conclusion, then explain scientifically (the GM gene enables efficient nutrient absorption).',
  },
  q5_g: {
    marks: 5,
    exemplar: 'Strength: e.g. number of trials/controls/ignore outliers. Feature to change: e.g. two variables altered simultaneously (poor control). Extension: e.g. test GM maize with fertilizer. Justification: confirms effects are not due to fertilizer use alone.',
    keyConcepts: ['evaluate method strength limitation extension justification validity GM maize'],
    keywords: ['strength', 'limitation', 'validity', 'extension', 'justification', 'two variables', 'fertilizer'],
    feedbackHit: 'Evaluation includes strength, limitation, extension, and linked justification.',
    feedbackMiss: 'Identify a strength, a feature to improve, an extension, and explain how the extension improves validity.',
  },
  q5_h: {
    marks: 1,
    exemplar: 'Any reasonable answer: biomass of maize; number/yield of kernels; number of leaves.',
    keyConcepts: ['alternative growth measure plant biomass yield leaves'],
    keywords: ['biomass', 'yield', 'kernels', 'leaves', 'growth'],
    feedbackHit: 'Valid alternative measure of plant growth suggested.',
    feedbackMiss: 'Any physical measure of growth other than height: biomass, leaf count, seed yield.',
  },

  // ── Q6: Bt Cotton & GMO Ecosystems ────────────────────────────────────────
  q6_a: {
    marks: 17,
    exemplar: 'Criteria B (17 marks): 1–2: incomplete hypothesis, IV or DV stated, CV stated. 3–6: clear hypothesis, IV+DV stated, CV stated and partially justified, attempt at method. 7–11: clear hypothesis with scientific explanation (general terms), IV+DV with incomplete justification, CV stated/justified (general), equipment linked to CV, method followable. 12–17: clear hypothesis with correct scientific explanation, IV+DV fully justified, CV fully justified, equipment specified and justified, complete reproducible method, appropriate data range, relevant safety concern.',
    keyConcepts: ['Bt cotton experiment design Criteria B hypothesis variables method ecosystem'],
    keywords: ['Bt cotton', 'GMO', 'hypothesis', 'IV', 'DV', 'CV', 'method', 'ecosystem', 'Criteria B', 'safety'],
    feedbackHit: 'Design includes testable hypothesis, identified variables, detailed method, and safety.',
    feedbackMiss: 'Full Criteria B answer needs: hypothesis with scientific explanation, fully justified IV/DV/CV, complete reproducible method, safety concern.',
  },
  q6_b: {
    marks: 13,
    exemplar: 'Criteria D (13 marks): 1–2: consequence of GMOs suggested. 3–5: incomplete definition of ecosystem, one advantage or disadvantage, correct consequence, ethical or economic responsibility. 6–9: correct ecosystem definition, advantage and disadvantage of GMOs, correct consequence supported by science, relevant ethical and economic responsibility. 10–13: correct ecosystem definition linked to question, relevant advantage and disadvantage, at least two correct consequences supported by science, explicit ethical and economic responsibilities, concluding appraisal.',
    keyConcepts: ['GMO ecosystem implications advantages disadvantages ethical economic Criteria D'],
    keywords: ['ecosystem', 'advantage', 'disadvantage', 'ethical', 'economic', 'biodiversity', 'gene spread', 'appraisal'],
    feedbackHit: 'Evaluated GMO impacts with ecosystem definition, advantages/disadvantages, ethical/economic considerations, and appraisal.',
    feedbackMiss: 'Define ecosystem; give GMO advantage and disadvantage; discuss ethical and economic responsibilities; conclude with an appraisal.',
  },

  // ── Q7: Vaccines & Immunity ────────────────────────────────────────────────
  q7_a: {
    marks: 2,
    exemplar: 'A preparation containing killed/weakened pathogens administered to stimulate specific antibody production / immune response / to immunize against pathogens.',
    keyConcepts: ['vaccine definition killed weakened pathogens antibodies immune response'],
    keywords: ['vaccine', 'killed', 'weakened', 'pathogen', 'antibody', 'immune response', 'immunize'],
    feedbackHit: 'Correctly defined vaccine with key components.',
    feedbackMiss: 'A vaccine contains killed/weakened pathogens to stimulate the body\'s immune response and produce antibodies.',
  },
  q7_b: {
    marks: 5,
    exemplar: 'Apply scientific language; use "antibody" correctly. Any four: pathogens cause disease; pathogens have antigens; vaccine administered to body; body produces antibodies specific to those antigens/pathogens; antibodies produced by white blood cells/B lymphocytes; antibodies combine with antigens to neutralize/destroy pathogen; memory cells maintain ability to produce antibodies for many years; memory cells give immunity against pathogen.',
    keyConcepts: ['vaccines immunity antibodies B lymphocytes memory cells pathogen antigen'],
    keywords: ['antigen', 'antibody', 'B lymphocyte', 'white blood cell', 'memory cell', 'immunity', 'pathogen', 'neutralize'],
    feedbackHit: 'Described the immune response to vaccination including memory cells.',
    feedbackMiss: 'Vaccine introduces antigens → body makes antibodies via B lymphocytes → memory cells formed → future exposure triggers fast antibody response = immunity.',
  },

  // ── Q8: GM Bananas as Edible Vaccines ─────────────────────────────────────
  q8_a: {
    marks: 6,
    exemplar: 'DV: immune response/antibody level + justification (what is being measured). IV: type of vaccine (GM banana vs traditional) + justification (what is being changed). CV: any variable e.g. age, health, dosage + justification. (2 marks per pair: 1 variable + 1 justification.)',
    keyConcepts: ['variables study GM banana edible vaccine IV DV CV justify'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'type of vaccine', 'immune response', 'antibody', 'justify'],
    feedbackHit: 'Correctly identified DV, IV, and CV with justifications.',
    feedbackMiss: 'IV = what is changed (type of vaccine). DV = what is measured (immune response/antibody level). CV = what is kept constant (age, dose, etc.).',
  },
  q8_b: {
    marks: 15,
    exemplar: 'Criteria D (15 marks): 1–2: comparison of GM bananas with traditional vaccines. 3–6: advantage or disadvantage, incomplete science, effect on individual and community. 7–10: relevant advantage and disadvantage with GM bananas, complete scientific statement, effect on individual and community, ecosystem mention. 11–15: clear statements of advantage and disadvantage, complete science linked to question, fully described effect on individual and community, correct ecosystem impact supported by science, ethical issue, economic consideration, concluding appraisal.',
    keyConcepts: ['GM banana edible vaccine advantages disadvantages ecosystem ethical economic Criteria D'],
    keywords: ['GM banana', 'edible vaccine', 'advantage', 'disadvantage', 'ethical', 'ecosystem', 'community', 'economic', 'appraisal'],
    feedbackHit: 'Evaluated GM banana vaccines covering advantages, disadvantages, ecosystem, ethics, economics, and appraisal.',
    feedbackMiss: 'Advantages (cheap, no refrigeration, no needles) vs disadvantages (dosage control, GM concerns). Discuss community, ecosystem, ethical, economic impacts. Conclude with appraisal.',
  },
}
