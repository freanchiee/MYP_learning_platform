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

  // ── Q1: Natural Selection — Grove Snails ──────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Organisms of the same species (grove snails) that live in the same area.',
    keyConcepts: ['population definition same species same area'],
    keywords: ['population', 'same species', 'same area', 'organisms', 'snails'],
    feedbackHit: 'Correct definition of population.',
    feedbackMiss: 'A population is organisms of the same species that live in the same area.',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Reference to survival of the fittest. The snails with beneficial traits/characteristics (dark unbanded shells on dark leaf litter) survive to reproduce. (So the frequency of) the dark shell trait/characteristic increases in the population.',
    keyConcepts: ['natural selection survival fittest', 'beneficial traits survive reproduce', 'frequency trait increases population'],
    keywords: ['survival', 'fittest', 'beneficial', 'traits', 'reproduce', 'frequency', 'population'],
    feedbackHit: 'All three natural selection steps correctly described.',
    feedbackMiss: '1: survival of the fittest. 2: snails with beneficial traits (dark shells) survive to reproduce. 3: frequency of that trait increases in population.',
  },
  q1_c: {
    marks: 4,
    exemplar: 'The background colour (dark leaf litter) is dark. Dark unbanded snails are camouflaged against the dark floor. Increased survival from predation (thrushes). Produced offspring with the same dark shell trait. OR increase in frequency of dark snails (from reproduction).',
    keyConcepts: ['dark background leaf litter', 'dark snails camouflaged', 'increased survival predation', 'offspring same colour frequency increases'],
    keywords: ['camouflaged', 'dark', 'leaf litter', 'survival', 'predation', 'offspring', 'frequency'],
    feedbackHit: 'All four steps of selection for dark snails correctly described.',
    feedbackMiss: '1: background (leaf litter) is dark. 2: dark snails camouflaged. 3: increased survival from predation. 4: produced offspring with same colour (frequency increased).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'The dark trait/allele is hidden by the pale trait/allele. The trait/allele is not expressed in heterozygous individuals. Only homozygous recessive individuals would express the trait/allele. Correct use of heterozygous (Dd/Bb) or homozygous (dd/bb or allele).',
    keyConcepts: ['recessive trait hidden pale allele', 'not expressed heterozygous', 'homozygous recessive express trait'],
    keywords: ['recessive', 'dominant', 'heterozygous', 'homozygous', 'allele', 'hidden', 'expressed'],
    feedbackHit: 'Correct explanation of recessive trait persistence with correct genetic terminology.',
    feedbackMiss: '1: dark trait hidden by pale/dominant allele. 2: not expressed in heterozygous individuals. 3: only homozygous recessive express trait. Bonus: correct use of Dd/dd notation.',
  },

  // ── Q2: Carbon Cycle — Oceans ─────────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'First two marks any two from: animals eat phytoplankton; animals produce CO₂ during respiration; phytoplankton use CO₂ for photosynthesis; CO₂ is produced when animals or plants decay. Third mark connecting animals and plants in the carbon cycle: linking carbon from animals to phytoplankton, OR correctly linking photosynthesis with respiration, OR CO₂ released by decay is taken up again by phytoplankton.',
    keyConcepts: ['animals eat phytoplankton carbon transfer', 'respiration produces CO2', 'photosynthesis uses CO2', 'decay releases CO2'],
    keywords: ['respiration', 'photosynthesis', 'CO2', 'carbon dioxide', 'decay', 'eat', 'phytoplankton', 'carbon cycle'],
    feedbackHit: 'Two connections stated plus a linking statement between animals and phytoplankton.',
    feedbackMiss: 'Any two of: animals eat phytoplankton; respiration produces CO2; photosynthesis uses CO2; decay produces CO2. Plus one linking statement connecting these processes.',
  },
  q2_b: {
    marks: 3,
    exemplar: 'An example of human activity affecting CO2: burning fossil fuels or industrialisation; deforestation. A consequence shown by the graph: more CO2 dissolves into the sea, so the pH of surface seawater has fallen over time (e.g. from ~8.12 to ~8.04). A further global impact: the ocean becomes more acidic (ocean acidification); this dissolves/weakens shells and coral / harms marine organisms.',
    keyConcepts: ['human activity burning fossil fuels deforestation', 'increased dissolved CO2 pH falls', 'ocean acidification harms shells coral'],
    keywords: ['fossil fuels', 'deforestation', 'CO2', 'dissolves', 'pH', 'acidification', 'acidic', 'shells', 'coral'],
    feedbackHit: 'Human activity named, falling-pH trend read from the graph, plus ocean acidification impact.',
    feedbackMiss: '1: human activity (fossil fuels / deforestation increasing CO2). 2: more CO2 dissolves so seawater pH falls over time (use the graph). 3: ocean acidification harms shells/coral/marine life.',
  },

  // ── Q3: Reproduction & Hormones ───────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 1,
  },
  q3_b: {
    marks: 3,
    exemplar: 'Each parent has different genetic material/traits/genes/alleles. Half of the genetic material of the offspring comes from each parent. Combination of genetic material leads to a new (genetically unique) individual.',
    keyConcepts: ['fertilization variation genetic material', 'half genetic material each parent', 'new combination genes offspring'],
    keywords: ['genetic material', 'genes', 'alleles', 'parent', 'offspring', 'combination', 'variation', 'fertilization'],
    feedbackHit: 'All three points about genetic variation from fertilization correctly stated.',
    feedbackMiss: '1: each parent has different genetic material. 2: half from each parent. 3: combination leads to new individual. Only accept "crossing over" in relation to gametes.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Correct key labelling: FSH (peaks early cycle, drops before ovulation); LH (sharp peak at ovulation, ~day 14); Oestrogen (rises, dips at ovulation, rises again); Progesterone (rises after ovulation, maintained). On the graph: curve 2 = LH (sharp ovulation peak); curve 4 = Progesterone (rises after ovulation); curve 3 = Oestrogen (rises then dips); curve 1 = FSH (low/early). 1 mark: one in correct position. 2 marks: two correct. 3 marks: all four correct.',
    keyConcepts: ['menstrual cycle hormones graph', 'FSH LH oestrogen progesterone positions'],
    keywords: ['FSH', 'LH', 'oestrogen', 'progesterone', 'ovulation', 'cycle', 'hormone levels'],
    feedbackHit: 'All four hormones correctly placed on graph key.',
    feedbackMiss: '1 mark: one hormone in correct position. 2 marks: two correct. 3 marks: all four (FSH early peak, LH sharp peak at ovulation, oestrogen rises before/after, progesterone rises after ovulation).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'More than one egg could mature. Could lead to twins or multiple developing embryos/fetuses. Causes hypersecretion of oestrogen.',
    keyConcepts: ['FSH not stopped multiple eggs mature', 'twins multiple embryos'],
    keywords: ['multiple eggs', 'twins', 'embryos', 'FSH', 'oestrogen', 'hypersecretion'],
    feedbackHit: 'Valid consequence of oestrogen not stopping FSH production.',
    feedbackMiss: 'Accept: more than one egg matures; could cause twins/multiple births; hypersecretion of oestrogen. Do not accept effects of oestrogen alone.',
  },

  // ── Q4: Enzyme Investigation — pH (amylase / starch) ─────────────────────────
  q4_a: {
    marks: 4,
    exemplar: 'Salivary amylase → mouth/salivary glands. Pepsin → stomach. Trypsin → small intestine/pancreas. Carbonic anhydrase → small intestine. Alkaline phosphatase → intestinal wall. Accept enzyme in either position at each location. 1 mark: one correct. 2: two correct. 3: three correct. 4: all five correct.',
    keyConcepts: ['enzyme location digestive system', 'salivary amylase mouth pepsin stomach trypsin small intestine'],
    keywords: ['salivary amylase', 'pepsin', 'trypsin', 'carbonic anhydrase', 'alkaline phosphatase', 'mouth', 'stomach', 'small intestine'],
    feedbackHit: 'All five enzymes correctly matched to body locations.',
    feedbackMiss: 'Salivary amylase→mouth; Pepsin→stomach; Trypsin→small intestine/pancreas; Carbonic anhydrase→small intestine; Alkaline phosphatase→intestinal wall. Accept either position at each location.',
  },
  q4_b: {
    marks: 1,
    exemplar: 'How does pH affect the time taken for the iodine to change colour? OR How does pH affect the rate at which amylase breaks down starch? Accept "Does…" do not accept "Why…". Can accept "rate of reaction" for this mark.',
    keyConcepts: ['research question pH enzyme reaction'],
    keywords: ['pH', 'rate', 'colour change', 'time', 'affect', 'research question', 'starch'],
    feedbackHit: 'Valid testable research question linking pH to enzyme reaction rate.',
    feedbackMiss: 'Must link pH to time for the colour change / reaction rate. Accept "Does pH affect…". Do not accept "Why…" as opening.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: pH. Dependent variable: time for the iodine colour change. Control variables (any two): amount of starch/substrate; amount of amylase/enzyme; volume of water; concentration of enzyme; temperature; type of enzyme. Do not accept rate or rate of reaction as DV.',
    keyConcepts: ['IV pH enzyme investigation', 'DV time colour change', 'CV amount starch amylase temperature'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'pH', 'time', 'colour change', 'starch', 'amylase', 'temperature'],
    feedbackHit: 'IV, DV and two control variables all correctly identified.',
    feedbackMiss: 'IV = pH (1 mark). DV = time for the iodine colour change (1 mark). CV = any two of: amount of starch, amount of amylase, volume of water, concentration of enzyme, temperature, type of enzyme (1 mark each).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Range too wide / not relevant to where amylase works (mouth/small intestine, near neutral). The number of values of the independent variable is not sufficient (not five values). Number of trials is not sufficient / a minimum of three trials is needed.',
    keyConcepts: ['insufficient data range pH values trials', 'not relevant amylase conditions'],
    keywords: ['range', 'insufficient', 'values', 'trials', 'pH', 'relevant', 'amylase'],
    feedbackHit: 'Three valid reasons why the data will be insufficient.',
    feedbackMiss: '1: range too wide / not relevant to where amylase works. 2: not enough values of IV (only 3, need ≥5). 3: not enough trials (need at least 3 repeats).',
  },

  // ── Q5: Amylase Concentration Investigation ──────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Amylase.',
    keyConcepts: ['amylase enzyme breaks down starch'],
    keywords: ['amylase', 'enzyme', 'starch'],
    feedbackHit: 'Correct enzyme named.',
    feedbackMiss: 'The enzyme that breaks down starch is amylase.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'y-axis: Time for iodine colour change (with /s included with y-axis label). Unit included with y-axis label. All numbers in boxes given in evenly spaced increments on both axes. Plotting points: four plotted correctly = 1 mark; all seven plotted correctly = 2 marks (±1 unit on candidate\'s scale). Points: (2,90) (4,72) (6,71) (8,54) (10,49) (12,48) (14,47).',
    keyConcepts: ['graph plotting y-axis label unit evenly spaced points'],
    keywords: ['y-axis', 'time', 'colour change', 'seconds', 'plot', 'evenly spaced', 'points'],
    feedbackHit: 'Graph plotted with correct axis label, units, evenly spaced scale, and all points correct.',
    feedbackMiss: '1 mark: y-axis = time for iodine colour change. 1 mark: /s unit included. 1 mark: evenly spaced increments on both axes. 1 mark: four points plotted correctly. 2 marks: all seven points plotted correctly.',
  },
  q5_c: {
    marks: 1,
    exemplar: 'g dm⁻³. Accept g/dm³ or g/l or g per dm³.',
    keyConcepts: ['concentration unit g per dm cubed'],
    keywords: ['g dm⁻³', 'g/dm³', 'unit', 'concentration', 'x-axis'],
    feedbackHit: 'Correct unit stated.',
    feedbackMiss: 'The missing unit is g dm⁻³ (grams per cubic decimetre). Also accept g/l or g per dm³.',
    blankAnswers: ['g dm⁻³'],
  },
  q5_d: {
    marks: 6,
    exemplar: 'The time for the colour change decreases as the amylase concentration increases OR the colour changes more quickly when the concentration is high OR there is a negative/inverse trend. (Do not accept inversely proportional, exponential.) Linking: increase in enzyme concentration leads to faster rate; more enzyme (active sites) is interacting with the starch (substrate); at a certain point, the time starts to plateau; the substrate becomes the limiting factor / all the starch is being broken down quickly. A correct use of at least one term: active site, substrate, amylase, increasing rate of reaction.',
    keyConcepts: ['negative trend time decreases concentration increases', 'active sites plateau substrate limiting', 'more enzyme starch interaction rate'],
    keywords: ['decreases', 'concentration', 'faster', 'plateau', 'active sites', 'substrate', 'amylase', 'enzyme', 'starch'],
    feedbackHit: 'Trend described, linked to enzyme activity, plateau explained with scientific terminology.',
    feedbackMiss: '1: negative trend stated. 2: linking increase in enzyme concentration to faster rate. 3: more enzyme interacts with starch. 4: plateau described. 5: substrate becomes limiting. 6: correct use of scientific term (active site/substrate/amylase).',
  },
  q5_e: {
    marks: 5,
    exemplar: 'Valid at the lower concentrations (because the time of colour change is decreasing). Not valid at higher concentrations (because the time is approximately constant/plateau, e.g. ~48–47 s from 12 to 14 g dm⁻³). (Because) the substrate (starch) is now the limiting factor / all the starch is being broken down. (So) the hypothesis is partly valid.',
    keyConcepts: ['hypothesis partly valid lower concentrations', 'not valid plateau higher concentrations', 'substrate limiting'],
    keywords: ['valid', 'lower concentrations', 'not valid', 'plateau', 'substrate', 'limiting', 'partly', 'hypothesis'],
    feedbackHit: 'Hypothesis evaluated as partly valid with reference to both lower and higher concentration data.',
    feedbackMiss: '1: valid at lower concentrations (time decreasing). 2: not valid at higher concentrations (plateau ~48 s). 3: substrate limiting explains plateau. 4: hypothesis partly valid conclusion. 5: accept references to numbers throughout.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'More trials/repeats to reduce experimental error or make data more reliable; OR extend the range of concentration to give a clearer indication of the trend; OR use a colorimeter to judge the colour change consistently. Second marking point must be correctly linked to the first to score.',
    keyConcepts: ['improve reliability more trials', 'extend range concentration', 'colorimeter precision'],
    keywords: ['trials', 'repeats', 'range', 'concentration', 'colorimeter', 'reliable', 'improve'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (more trials / extend range / colorimeter). 2nd mark: correctly linked justification. Do not accept "more accurate equipment" without link.',
  },
  q5_g: {
    marks: 1,
    exemplar: 'Change the concentration of the substrate/starch. OR change the volume/amount of starch used.',
    keyConcepts: ['enzyme investigation extension concentration of substrate'],
    keywords: ['substrate concentration', 'starch concentration', 'amount of starch', 'extension'],
    feedbackHit: 'Valid extension to enzyme investigation stated (not temperature/pH).',
    feedbackMiss: 'Accept: change the substrate/starch concentration; change the amount of starch. Do not accept "change the starch" as that is too vague.',
  },

  // ── Q6: Temperature Enzyme Design Investigation ───────────────────────────────
  q6_: {
    marks: 18,
    exemplar: 'Criteria B rubric (0–18 marks): Variables (V): IV=temperature, DV=time for the iodine colour change (time to break down the starch), CV=amount of starch AND concentration/volume of amylase. Hypothesis (H): testable, linked to variables, with correct scientific explanation (enzymes work faster at higher temperatures; above optimal, enzymes denature and the reaction slows/stops). Manipulation of IV (M): at least five stated values of IV. Method (M): correctly described, connected to IV, with some details of equipment (water baths, thermometer, iodine on a spotting tile), measurements and units, could be followed by another student. Sufficient data (D): at least three trials. Safety (S): handle hot water/glassware carefully; iodine is an irritant — wear goggles.',
    keyConcepts: ['IV temperature DV time colour change CV starch amylase', 'hypothesis enzymes temperature optimal denaturation', 'method 5 temperatures 3 trials safe'],
    keywords: ['temperature', 'time', 'colour change', 'starch', 'amylase', 'hypothesis', 'denaturation', 'optimal', 'trials', 'safety'],
    feedbackHit: 'Full Criteria B: Variables correctly identified; testable hypothesis with explanation; ≥5 IV values; complete replicable method; ≥3 trials; safety comment.',
    feedbackMiss: 'Use Criteria B rubric. Level 4 (max): IV+DV+2CV identified; testable hypothesis correctly linked with scientific explanation; ≥5 IV values stated; complete method replicable by another student; ≥3 trials; relevant safety comment.',
  },

  // ── Q7: Plant Growth Factors ─────────────────────────────────────────────────
  q7_a: {
    type: 'mcq',
    correct: 0,
  },
  q7_b: {
    marks: 2,
    exemplar: 'One factor linked to the process of photosynthesis or respiration. A correct use of the term photosynthesis or respiration for the first mark.',
    keyConcepts: ['plant growth factor role photosynthesis', 'light water nutrients CO2 role'],
    keywords: ['photosynthesis', 'respiration', 'light', 'water', 'nutrients', 'carbon dioxide', 'growth'],
    feedbackHit: 'Factor role correctly linked to photosynthesis or respiration.',
    feedbackMiss: 'State one factor (e.g. water) and link it to photosynthesis (water is a raw material for photosynthesis which produces glucose for growth). Accept reference to any metabolic process for first mark.',
  },

  // ── Q8: Crop Rotation vs Aquaponics ──────────────────────────────────────────
  q8_a: {
    marks: 5,
    exemplar: 'Any five explicitly linked points: Similarities: both keep the crops supplied with nutrients; both protect or reuse a resource (soil/water); both aim to maximise crop yield. Differences: Light: crop rotation relies on natural light AND light in an aquaponic greenhouse can be controlled. Water: crop rotation relies on rainfall/climate OR is not controlled AND aquaponics recirculates/controls the water. Soil: cover crops protect the soil from erosion AND aquaponics has no soil so no erosion. Nutrients: crop rotation/cover crops restore nutrients to the soil (which can be depleted) AND nutrients come from fish waste in a controlled solution in aquaponics.',
    keyConcepts: ['crop rotation vs aquaponics similarities differences', 'light water soil nutrients comparison'],
    keywords: ['crop rotation', 'cover crop', 'aquaponics', 'similarity', 'difference', 'light', 'water', 'soil', 'nutrients', 'controlled'],
    feedbackHit: 'Five explicitly linked similarities or differences stated with correct comparisons.',
    feedbackMiss: 'Award 1 mark per valid explicitly linked comparison (similarity or difference). Similarities and differences must both be explicitly linked to be awarded marks.',
  },

  // ── Q9: Mangrove Clearance — Discuss & Evaluate ──────────────────────────────
  q9_: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Change in landscape (C): correct statement of landscape change (mangrove forest cleared; land flattened and embanked with channels/bunds to make rice paddies and shrimp ponds). Scientific justification (SC): justification of changes (creates flat fertile land / lets farmers control salt and fresh water / manages water for crops and fish). Advantages and disadvantages (AD): complete statement of advantage (more farmland/food, income from shrimp) AND disadvantage (loss of mangrove habitat & fish nursery, loss of coastal storm/erosion protection, saltwater intrusion, release of stored carbon). Impacts (I): a description of an economic (export income, cost when storms/disease hit) or social impact. Appraisal (A): a concluding appraisal. Level 4 (13–15): two or more changes with scientific justification; more than one advantage AND more than one disadvantage; a detailed economic/social impact; appraisal linked to previous impacts.',
    keyConcepts: ['mangrove clearance landscape changes justified', 'advantages disadvantages economic social impact appraisal'],
    keywords: ['mangrove', 'clearance', 'rice paddy', 'shrimp pond', 'habitat', 'coastal protection', 'erosion', 'advantages', 'disadvantages', 'economic', 'social', 'appraisal'],
    feedbackHit: 'Full Criteria D: ≥2 changes with scientific justification; advantages and disadvantages; economic/social impact; appraisal linked to discussion.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: more than one change in landscape; scientific justification of changes; advantage AND disadvantage statements; detailed economic/social impact; appraisal linked to previous impacts.',
  },
}
