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

  // ── Q1: Natural Selection — Peppered Moths ────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Organisms of the same species that live in the same area.',
    keyConcepts: ['population definition same species same area'],
    keywords: ['population', 'same species', 'same area', 'organisms'],
    feedbackHit: 'Correct definition of population.',
    feedbackMiss: 'A population is organisms of the same species that live in the same area.',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Reference to survival of the fittest. These organisms with beneficial traits/characteristics survive to reproduce. (So the frequency of) the particular trait/characteristic increases in the population.',
    keyConcepts: ['natural selection survival fittest', 'beneficial traits survive reproduce', 'frequency trait increases population'],
    keywords: ['survival', 'fittest', 'beneficial', 'traits', 'reproduce', 'frequency', 'population'],
    feedbackHit: 'All three natural selection steps correctly described.',
    feedbackMiss: '1: survival of the fittest. 2: organisms with beneficial traits survive to reproduce. 3: frequency of that trait/characteristic increases in population.',
  },
  q1_c: {
    marks: 4,
    exemplar: 'The colour of the lichen or tree or background changed (to dark/black). Black moths were camouflaged (against the dark bark). Increased survival from predation. Produced offspring with same colour trait. OR increase in frequency of black moths (from reproduction).',
    keyConcepts: ['background colour changed dark', 'black moths camouflaged', 'increased survival predation', 'offspring same colour frequency increases'],
    keywords: ['camouflaged', 'dark bark', 'survival', 'predation', 'offspring', 'frequency', 'colour changed'],
    feedbackHit: 'All four steps of selection for black moths correctly described.',
    feedbackMiss: '1: background/lichen/bark colour changed (darker). 2: black moths camouflaged. 3: increased survival from predation. 4: produced offspring with same colour (frequency increased).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'The dark trait/allele is hidden by the grey trait/allele. The trait/allele is not expressed in heterozygous individuals. Only homozygous recessive individuals would express the trait/allele. Correct use of heterozygous (Bb/Gg/Ww) or homozygous (bb/gg/ww or allele).',
    keyConcepts: ['recessive trait hidden grey allele', 'not expressed heterozygous', 'homozygous recessive express trait'],
    keywords: ['recessive', 'dominant', 'heterozygous', 'homozygous', 'allele', 'hidden', 'expressed'],
    feedbackHit: 'Correct explanation of recessive trait persistence with correct genetic terminology.',
    feedbackMiss: '1: dark trait hidden by grey/dominant allele. 2: not expressed in heterozygous individuals. 3: only homozygous recessive express trait. Bonus: correct use of Bb/bb or similar notation.',
  },

  // ── Q2: Carbon Cycle ──────────────────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'First two marks any two from: animals eat plants; animals produce CO₂ during respiration; plants use CO₂ for photosynthesis; CO₂ is produced when animals or plants decay. Third mark connecting animals and plants in the carbon cycle: linking carbon from animals to plants, OR correctly linking photosynthesis with respiration, OR CO₂ produced when animals decay is used by plants.',
    keyConcepts: ['animals eat plants carbon transfer', 'respiration produces CO2', 'photosynthesis uses CO2', 'decay releases CO2'],
    keywords: ['respiration', 'photosynthesis', 'CO2', 'carbon dioxide', 'decay', 'eat', 'carbon cycle'],
    feedbackHit: 'Two connections stated plus a linking statement between animals and plants.',
    feedbackMiss: 'Any two of: animals eat plants; respiration produces CO2; photosynthesis uses CO2; decay produces CO2. Plus one linking statement connecting these processes.',
  },
  q2_b: {
    marks: 3,
    exemplar: 'An example of human activity affecting CO2: burning fossil fuels or industrialisation or cars; burning of trees; intensive cattle rearing; deforestation. A global impact: decreased carbon stored underground; increased carbon in atmosphere or dissolved in ocean; climate change or global warming; emissions decrease pH or increase acidity of oceans. A further point from either list.',
    keyConcepts: ['human activity burning fossil fuels deforestation', 'increased atmospheric CO2', 'global warming climate change ocean acidification'],
    keywords: ['fossil fuels', 'deforestation', 'CO2', 'methane', 'global warming', 'climate change', 'atmosphere', 'acidity'],
    feedbackHit: 'Human activity named, global impact stated, plus an additional point from either list.',
    feedbackMiss: '1: human activity (fossil fuels / deforestation / cattle). 2: global impact (increased CO2 / global warming / ocean acidification). 3: additional point from either list. Do not accept volcano references.',
  },

  // ── Q3: Reproduction & Hormones ───────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 2,
  },
  q3_b: {
    marks: 3,
    exemplar: 'Each parent has different genetic material/traits/genes/alleles. Half of the genetic material of the offspring comes from each parent. Combination of genetic material leads to a new individual.',
    keyConcepts: ['fertilization variation genetic material', 'half genetic material each parent', 'new combination genes offspring'],
    keywords: ['genetic material', 'genes', 'alleles', 'parent', 'offspring', 'combination', 'variation', 'fertilization'],
    feedbackHit: 'All three points about genetic variation from fertilization correctly stated.',
    feedbackMiss: '1: each parent has different genetic material. 2: half from each parent. 3: combination leads to new individual. Only accept "crossing over" in relation to gametes.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Correct key labelling: FSH (peaks early cycle, drops before ovulation); LH (sharp peak at ovulation day ~14); Estrogen (rises, dips at ovulation, rises again); Progesterone (rises after ovulation, maintained). 1 mark: one in correct position. 2 marks: two correct. 3 marks: all four correct.',
    keyConcepts: ['menstrual cycle hormones graph', 'FSH LH estrogen progesterone positions'],
    keywords: ['FSH', 'LH', 'estrogen', 'progesterone', 'ovulation', 'cycle', 'hormone levels'],
    feedbackHit: 'All four hormones correctly placed on graph key.',
    feedbackMiss: '1 mark: one hormone in correct position. 2 marks: two correct. 3 marks: all four (FSH early peak, LH sharp peak at ovulation, estrogen rises before/after, progesterone rises after ovulation).',
  },
  q3_d: {
    marks: 1,
    exemplar: 'More than one egg could mature. Could lead to twins or multiple developing embryos/fetuses. Causes hypersecretion of estrogen.',
    keyConcepts: ['FSH not stopped multiple eggs mature', 'twins multiple embryos'],
    keywords: ['multiple eggs', 'twins', 'embryos', 'FSH', 'estrogen', 'hypersecretion'],
    feedbackHit: 'Valid consequence of estrogen not stopping FSH production.',
    feedbackMiss: 'Accept: more than one egg matures; could cause twins/multiple births; hypersecretion of estrogen. Do not accept effects of estrogen alone.',
  },

  // ── Q4: Enzyme Investigation — pH ─────────────────────────────────────────────
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
    exemplar: 'How does pH affect the rate of colour change? OR How does pH affect the time taken for colour change? Accept "Does…" do not accept "Why…". Can accept "rate of reaction" for this mark.',
    keyConcepts: ['research question pH enzyme reaction'],
    keywords: ['pH', 'rate', 'colour change', 'time', 'affect', 'research question'],
    feedbackHit: 'Valid testable research question linking pH to enzyme reaction rate.',
    feedbackMiss: 'Must link pH to colour change rate/time. Accept "Does pH affect…". Do not accept "Why…" as opening.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: pH. Dependent variable: time for colour change. Control variables (any two): amount of lactose/substrate; surface area of lactose/substrate; amount of enzyme/lactase; volume of water; concentration of enzyme solution; temperature; type of enzyme. Do not accept rate or rate of reaction as DV.',
    keyConcepts: ['IV pH enzyme investigation', 'DV time colour change', 'CV amount lactose enzyme temperature'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'pH', 'time', 'colour change', 'lactose', 'enzyme', 'temperature'],
    feedbackHit: 'IV, DV and two control variables all correctly identified.',
    feedbackMiss: 'IV = pH (1 mark). DV = time for colour change (1 mark). CV = any two of: amount of lactose, surface area, amount of enzyme, volume of water, concentration of enzyme, temperature, type of enzyme (1 mark each).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Range not relevant to human body. The number of values of independent variable is not sufficient (not five values). Number of trials is not sufficient / a minimum of three trials is needed.',
    keyConcepts: ['insufficient data range pH values trials', 'not relevant human body conditions'],
    keywords: ['range', 'human body', 'insufficient', 'values', 'trials', 'pH', 'relevant'],
    feedbackHit: 'Three valid reasons why the data will be insufficient.',
    feedbackMiss: '1: range not relevant to human body (stomach pH ~2, not 1). 2: not enough values of IV (only 3, need ≥5). 3: not enough trials (need at least 3 repeats).',
  },

  // ── Q5: Lactose Concentration Investigation ───────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Lactase.',
    keyConcepts: ['lactase enzyme breaks down lactose'],
    keywords: ['lactase', 'enzyme', 'lactose'],
    feedbackHit: 'Correct enzyme named.',
    feedbackMiss: 'The enzyme that breaks down lactose is lactase.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'y-axis: Time for colour change (with /s included with y-axis label). Unit included with y-axis label. All numbers in boxes given in evenly spaced increments on both axes. Plotting points: four plotted correctly = 1 mark; all seven plotted correctly = 2 marks (±1 unit on candidate\'s scale).',
    keyConcepts: ['graph plotting y-axis label unit evenly spaced points'],
    keywords: ['y-axis', 'time', 'colour change', 'seconds', 'plot', 'evenly spaced', 'points'],
    feedbackHit: 'Graph plotted with correct axis label, units, evenly spaced scale, and all points correct.',
    feedbackMiss: '1 mark: y-axis = time for colour change. 1 mark: /s unit included. 1 mark: evenly spaced increments on both axes. 1 mark: four points plotted correctly. 2 marks: all seven points plotted correctly.',
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
    exemplar: 'The time for colour change decreases as the concentration increases OR the colour changes more quickly when the concentration is high OR there is a negative/inverse trend. (Do not accept inversely proportional, exponential.) Linking: increase in concentration leads to faster rate; more lactose is interacting with enzyme (molecules); at a certain point, the time of colour change starts to plateau; all of the (active sites of) enzyme molecules are being used. A correct use of at least one term: active site, substrate, lactase, increasing rate of reaction.',
    keyConcepts: ['negative trend time decreases concentration increases', 'active sites occupied plateau', 'more lactose enzyme interaction rate'],
    keywords: ['decreases', 'concentration', 'faster', 'plateau', 'active sites', 'substrate', 'lactase', 'enzyme', 'interaction'],
    feedbackHit: 'Trend described, linked to enzyme activity, plateau explained with scientific terminology.',
    feedbackMiss: '1: negative trend stated. 2: linking increase in concentration to faster rate. 3: more lactose interacts with enzyme. 4: plateau described. 5: all active sites used. 6: correct use of scientific term (active site/substrate/lactase).',
  },
  q5_e: {
    marks: 5,
    exemplar: 'Valid at the lower concentrations (because time of colour change is decreasing). Not valid at higher concentrations (because time of colour change is approximately constant/plateau). (Because) all the (active sites of) enzyme molecules are being used. (So) the hypothesis is partly valid.',
    keyConcepts: ['hypothesis partly valid lower concentrations', 'not valid plateau higher concentrations', 'all active sites occupied'],
    keywords: ['valid', 'lower concentrations', 'not valid', 'plateau', 'active sites', 'partly', 'hypothesis'],
    feedbackHit: 'Hypothesis evaluated as partly valid with reference to both lower and higher concentration data.',
    feedbackMiss: '1: valid at lower concentrations (time decreasing). 2: not valid at higher concentrations (plateau). 3: all active sites used explains plateau. 4: hypothesis partly valid conclusion. 5: accept references to numbers throughout.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'More trials/repeats to reduce experimental error or make data more reliable; OR extend the range of concentration to give a clearer indication of the trend; OR use of spectrometer or colorimeter to give time for consistent colour change. Second marking point must be correctly linked to the first to score.',
    keyConcepts: ['improve reliability more trials', 'extend range concentration', 'spectrometer colorimeter precision'],
    keywords: ['trials', 'repeats', 'range', 'concentration', 'spectrometer', 'colorimeter', 'reliable', 'improve'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (more trials / extend range / spectrometer). 2nd mark: correctly linked justification. Do not accept "more accurate equipment" without link.',
  },
  q5_g: {
    marks: 1,
    exemplar: 'Change the concentration of the enzyme/lactase. OR change the volume of the enzyme solution (as this gives more active sites).',
    keyConcepts: ['enzyme investigation extension concentration of enzyme'],
    keywords: ['enzyme concentration', 'lactase concentration', 'active sites', 'volume', 'extension'],
    feedbackHit: 'Valid extension to enzyme investigation stated (not temperature/pH).',
    feedbackMiss: 'Accept: change enzyme/lactase concentration; change volume of enzyme solution. Do not accept "change the enzyme" as that is too vague.',
  },

  // ── Q6: Temperature Enzyme Design Investigation ───────────────────────────────
  q6_: {
    marks: 18,
    exemplar: 'Criteria B rubric (0–18 marks): Variables (V): IV=temperature, DV=time for colour change, CV=amount of lactose AND concentration of enzyme solution. Hypothesis (H): testable, linked to variables, with correct scientific explanation (enzymes work faster at higher temperatures; above optimal, enzymes denature). Manipulation of IV (M): at least five stated values of IV. Method (M): correctly described, connected to IV, with some details of equipment, measurements and units, and could be followed by another student. Sufficient data (D): at least three trials. Safety (S): any relevant safety comment.',
    keyConcepts: ['IV temperature DV time colour change CV lactose enzyme', 'hypothesis enzymes temperature optimal denaturation', 'method 5 temperatures 3 trials safe'],
    keywords: ['temperature', 'time', 'colour change', 'lactose', 'enzyme concentration', 'hypothesis', 'denaturation', 'optimal', 'trials', 'safety'],
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
    feedbackMiss: 'State one factor (e.g. light) and link it to photosynthesis (light provides energy for photosynthesis which produces glucose for growth). Accept reference to any metabolic process for first mark.',
  },

  // ── Q8: Terracing vs Vertical Farming ────────────────────────────────────────
  q8_a: {
    marks: 5,
    exemplar: 'Any five explicitly linked points: Similarities: both types of farming maximize space for growing crops; both improve light available for crop growth; both types improve water supply to crops (accept flooding or drainage only when linked to plants or crops). Differences: Light: terracing relies on natural light AND light in vertical farming can be controlled. Water: terracing relies on climate OR is not controlled AND vertical farming reuses waste water OR is controlled. Soil: terracing reduces soil erosion AND vertical farming has no soil erosion. Nutrients: terracing relies on nutrients in soil OR nutrients can be depleted AND nutrients can be controlled in vertical farming.',
    keyConcepts: ['terracing vs vertical farming similarities differences', 'light water soil nutrients comparison'],
    keywords: ['terracing', 'vertical farming', 'similarity', 'difference', 'light', 'water', 'soil', 'nutrients', 'controlled'],
    feedbackHit: 'Five explicitly linked similarities or differences stated with correct comparisons.',
    feedbackMiss: 'Award 1 mark per valid explicitly linked comparison (similarity or difference). Similarities and differences must both be explicitly linked to be awarded marks.',
  },

  // ── Q9: Landscape Farming — Discuss & Evaluate ────────────────────────────────
  q9_: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Change in landscape (C): correct statement of landscape change. Scientific justification (SC): justification of changes (reduces soil erosion / absorbs rainfall / maximises light / controls nutrients). Advantages and disadvantages (AD): complete statement of advantage AND disadvantage. Impacts (I): a description of an economic or social impact. Appraisal (A): a concluding appraisal. Level 4 (13–15): two or more changes with scientific justification; more than one advantage AND more than one disadvantage; a detailed economic/social impact; appraisal linked to previous impacts.',
    keyConcepts: ['terracing vertical farming landscape changes justified', 'advantages disadvantages economic social impact appraisal'],
    keywords: ['terracing', 'vertical farming', 'soil erosion', 'flooding', 'light', 'nutrients', 'advantages', 'disadvantages', 'economic', 'social', 'appraisal'],
    feedbackHit: 'Full Criteria D: ≥2 changes with scientific justification; advantages and disadvantages; economic/social impact; appraisal linked to discussion.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: more than one change in landscape; scientific justification of changes; advantage AND disadvantage statements; detailed economic/social impact; appraisal linked to previous impacts.',
  },
}
