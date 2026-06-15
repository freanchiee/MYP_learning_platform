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

  // ── Q1: Natural Selection — Rock Pocket Mice ──────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Organisms of the same species (rock pocket mice) that live in the same area.',
    keyConcepts: ['population definition same species same area'],
    keywords: ['population', 'same species', 'same area', 'organisms', 'mice'],
    feedbackHit: 'Correct definition of population.',
    feedbackMiss: 'A population is organisms of the same species that live in the same area.',
  },
  q1_b: {
    marks: 3,
    exemplar: 'Reference to survival of the fittest. The mice with beneficial traits/characteristics (dark fur on dark rock) survive to reproduce. (So the frequency of) the dark fur trait/characteristic increases in the population.',
    keyConcepts: ['natural selection survival fittest', 'beneficial traits survive reproduce', 'frequency trait increases population'],
    keywords: ['survival', 'fittest', 'beneficial', 'traits', 'reproduce', 'frequency', 'population'],
    feedbackHit: 'All three natural selection steps correctly described.',
    feedbackMiss: '1: survival of the fittest. 2: mice with beneficial traits (dark fur) survive to reproduce. 3: frequency of that trait increases in population.',
  },
  q1_c: {
    marks: 4,
    exemplar: 'The background colour (dark lava rock) is dark. Dark-furred mice are camouflaged against the dark rock. Increased survival from predation (owls/hawks). Produced offspring with the same dark colour trait. OR increase in frequency of dark mice (from reproduction).',
    keyConcepts: ['dark background lava rock', 'dark mice camouflaged', 'increased survival predation', 'offspring same colour frequency increases'],
    keywords: ['camouflaged', 'dark rock', 'survival', 'predation', 'offspring', 'frequency', 'lava'],
    feedbackHit: 'All four steps of selection for dark mice correctly described.',
    feedbackMiss: '1: background (lava rock) is dark. 2: dark mice camouflaged. 3: increased survival from predation. 4: produced offspring with same colour (frequency increased).',
  },
  q1_d: {
    marks: 3,
    exemplar: 'The dark trait/allele is hidden by the pale trait/allele. The trait/allele is not expressed in heterozygous individuals. Only homozygous recessive individuals would express the trait/allele. Correct use of heterozygous (Dd/Bb) or homozygous (dd/bb or allele).',
    keyConcepts: ['recessive trait hidden pale allele', 'not expressed heterozygous', 'homozygous recessive express trait'],
    keywords: ['recessive', 'dominant', 'heterozygous', 'homozygous', 'allele', 'hidden', 'expressed'],
    feedbackHit: 'Correct explanation of recessive trait persistence with correct genetic terminology.',
    feedbackMiss: '1: dark trait hidden by pale/dominant allele. 2: not expressed in heterozygous individuals. 3: only homozygous recessive express trait. Bonus: correct use of Dd/dd notation.',
  },

  // ── Q2: Nitrogen Cycle ────────────────────────────────────────────────────────
  q2_a: {
    marks: 3,
    exemplar: 'First two marks any two from: plants take up nitrates (from the soil) to make protein/amino acids; animals eat plants to obtain nitrogen/protein; nitrates are returned to the soil when animals or plants decay/decompose. Third mark connecting animals and plants in the nitrogen cycle: linking nitrogen from plants to animals, OR correctly linking uptake with decay, OR nitrates released by decay are taken up again by plants.',
    keyConcepts: ['plants take up nitrates make protein', 'animals eat plants for nitrogen', 'decay returns nitrates to soil'],
    keywords: ['nitrates', 'protein', 'plants', 'animals', 'eat', 'decay', 'nitrogen cycle', 'soil'],
    feedbackHit: 'Two connections stated plus a linking statement between animals and plants.',
    feedbackMiss: 'Any two of: plants take up nitrates for protein; animals eat plants for nitrogen; decay returns nitrates to soil. Plus one linking statement connecting these processes.',
  },
  q2_b: {
    marks: 3,
    exemplar: 'An example of human activity affecting nitrogen: adding (excess) artificial fertilisers; intensive farming/agriculture; sewage or manure run-off. A consequence shown by the graph: nitrate concentration in the river has increased over time (e.g. from ~8 to ~52 mg dm⁻³). A further global/ecological impact: excess nitrates leach/wash into rivers; eutrophication / algal bloom; algae block light and then decay; decay uses up oxygen; fish and other organisms die (dead zone).',
    keyConcepts: ['human activity fertilisers leaching', 'rising nitrate concentration graph', 'eutrophication algal bloom oxygen loss'],
    keywords: ['fertiliser', 'nitrates', 'leaching', 'run-off', 'eutrophication', 'algal bloom', 'oxygen', 'river', 'increased'],
    feedbackHit: 'Human activity named, rising-nitrate trend read from the graph, plus an additional ecological impact.',
    feedbackMiss: '1: human activity (excess fertiliser / intensive farming). 2: nitrate concentration in the river has risen over time (use the graph). 3: ecological impact (leaching → eutrophication → algal bloom → oxygen loss → organisms die).',
  },

  // ── Q3: Reproduction & Hormones ───────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 2,
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
    exemplar: 'Correct key labelling: FSH (peaks early cycle, drops before ovulation); LH (sharp peak at ovulation, ~day 14); Oestrogen (rises, dips at ovulation, rises again); Progesterone (rises after ovulation, maintained). On the graph: curve 2 = LH (sharp ovulation peak); curve 4 = Progesterone (rises after ovulation); curve 1 = Oestrogen; curve 3 = FSH (low/early). 1 mark: one in correct position. 2 marks: two correct. 3 marks: all four correct.',
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

  // ── Q4: Enzyme Investigation — pH (catalase / hydrogen peroxide) ──────────────
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
    exemplar: 'How does pH affect the rate at which oxygen is produced? OR How does pH affect the time taken to collect the oxygen / the rate of catalase breaking down hydrogen peroxide? Accept "Does…" do not accept "Why…". Can accept "rate of reaction" for this mark.',
    keyConcepts: ['research question pH enzyme reaction'],
    keywords: ['pH', 'rate', 'oxygen', 'time', 'affect', 'research question'],
    feedbackHit: 'Valid testable research question linking pH to enzyme reaction rate.',
    feedbackMiss: 'Must link pH to rate of oxygen production / reaction rate. Accept "Does pH affect…". Do not accept "Why…" as opening.',
  },
  q4_c: {
    marks: 4,
    exemplar: 'Independent variable: pH. Dependent variable: rate of oxygen produced (or time to collect a fixed volume of oxygen). Control variables (any two): amount of hydrogen peroxide/substrate; surface area; amount of catalase/enzyme; volume of water; concentration of enzyme; temperature; type of enzyme. Do not accept rate or rate of reaction as DV if asked only for time.',
    keyConcepts: ['IV pH enzyme investigation', 'DV rate oxygen produced', 'CV amount hydrogen peroxide enzyme temperature'],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'pH', 'oxygen', 'hydrogen peroxide', 'catalase', 'temperature'],
    feedbackHit: 'IV, DV and two control variables all correctly identified.',
    feedbackMiss: 'IV = pH (1 mark). DV = rate of oxygen produced (1 mark). CV = any two of: amount of hydrogen peroxide, surface area, amount of catalase, volume of water, concentration of enzyme, temperature, type of enzyme (1 mark each).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'Range too extreme / not relevant to where catalase works in the body or cells. The number of values of the independent variable is not sufficient (not five values). Number of trials is not sufficient / a minimum of three trials is needed.',
    keyConcepts: ['insufficient data range pH values trials', 'not relevant catalase conditions'],
    keywords: ['range', 'insufficient', 'values', 'trials', 'pH', 'relevant', 'extreme'],
    feedbackHit: 'Three valid reasons why the data will be insufficient.',
    feedbackMiss: '1: range too extreme / not relevant to where catalase works. 2: not enough values of IV (only 3, need ≥5). 3: not enough trials (need at least 3 repeats).',
  },

  // ── Q5: Substrate (H₂O₂) Concentration Investigation ──────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Catalase.',
    keyConcepts: ['catalase enzyme breaks down hydrogen peroxide'],
    keywords: ['catalase', 'enzyme', 'hydrogen peroxide'],
    feedbackHit: 'Correct enzyme named.',
    feedbackMiss: 'The enzyme that breaks down hydrogen peroxide is catalase.',
  },
  q5_b: {
    marks: 5,
    exemplar: 'y-axis: Time to collect 20 cm³ of oxygen (with /s included with y-axis label). Unit included with y-axis label. All numbers in boxes given in evenly spaced increments on both axes. Plotting points: four plotted correctly = 1 mark; all seven plotted correctly = 2 marks (±1 unit on candidate\'s scale). Points: (2,84) (4,68) (6,67) (8,50) (10,46) (12,45) (14,44).',
    keyConcepts: ['graph plotting y-axis label unit evenly spaced points'],
    keywords: ['y-axis', 'time', 'oxygen', 'seconds', 'plot', 'evenly spaced', 'points'],
    feedbackHit: 'Graph plotted with correct axis label, units, evenly spaced scale, and all points correct.',
    feedbackMiss: '1 mark: y-axis = time to collect oxygen. 1 mark: /s unit included. 1 mark: evenly spaced increments on both axes. 1 mark: four points plotted correctly. 2 marks: all seven points plotted correctly.',
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
    exemplar: 'The time to collect the oxygen decreases as the concentration increases OR the oxygen is collected more quickly when the concentration is high OR there is a negative/inverse trend. (Do not accept inversely proportional, exponential.) Linking: increase in concentration leads to faster rate; more substrate (hydrogen peroxide molecules) is interacting with the enzyme; at a certain point, the time starts to plateau; all of the (active sites of) enzyme molecules are being used. A correct use of at least one term: active site, substrate, catalase, increasing rate of reaction.',
    keyConcepts: ['negative trend time decreases concentration increases', 'active sites occupied plateau', 'more substrate enzyme interaction rate'],
    keywords: ['decreases', 'concentration', 'faster', 'plateau', 'active sites', 'substrate', 'catalase', 'enzyme', 'interaction'],
    feedbackHit: 'Trend described, linked to enzyme activity, plateau explained with scientific terminology.',
    feedbackMiss: '1: negative trend stated. 2: linking increase in concentration to faster rate. 3: more substrate interacts with enzyme. 4: plateau described. 5: all active sites used. 6: correct use of scientific term (active site/substrate/catalase).',
  },
  q5_e: {
    marks: 5,
    exemplar: 'Valid at the lower concentrations (because the time to collect the oxygen is decreasing). Not valid at higher concentrations (because the time is approximately constant/plateau, e.g. ~45–44 s from 12 to 14 g dm⁻³). (Because) all the (active sites of) enzyme molecules are being used. (So) the hypothesis is partly valid.',
    keyConcepts: ['hypothesis partly valid lower concentrations', 'not valid plateau higher concentrations', 'all active sites occupied'],
    keywords: ['valid', 'lower concentrations', 'not valid', 'plateau', 'active sites', 'partly', 'hypothesis'],
    feedbackHit: 'Hypothesis evaluated as partly valid with reference to both lower and higher concentration data.',
    feedbackMiss: '1: valid at lower concentrations (time decreasing). 2: not valid at higher concentrations (plateau ~45 s). 3: all active sites used explains plateau. 4: hypothesis partly valid conclusion. 5: accept references to numbers throughout.',
  },
  q5_f: {
    marks: 2,
    exemplar: 'More trials/repeats to reduce experimental error or make data more reliable; OR extend the range of concentration to give a clearer indication of the trend; OR use a gas syringe with a data-logger to measure the volume of oxygen more precisely. Second marking point must be correctly linked to the first to score.',
    keyConcepts: ['improve reliability more trials', 'extend range concentration', 'gas syringe data-logger precision'],
    keywords: ['trials', 'repeats', 'range', 'concentration', 'gas syringe', 'data-logger', 'reliable', 'improve'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (more trials / extend range / gas syringe data-logger). 2nd mark: correctly linked justification. Do not accept "more accurate equipment" without link.',
  },
  q5_g: {
    marks: 1,
    exemplar: 'Change the concentration of the enzyme/catalase. OR change the volume of the enzyme solution (as this gives more active sites).',
    keyConcepts: ['enzyme investigation extension concentration of enzyme'],
    keywords: ['enzyme concentration', 'catalase concentration', 'active sites', 'volume', 'extension'],
    feedbackHit: 'Valid extension to enzyme investigation stated (not temperature/pH).',
    feedbackMiss: 'Accept: change enzyme/catalase concentration; change volume of enzyme solution. Do not accept "change the enzyme" as that is too vague.',
  },

  // ── Q6: Temperature Enzyme Design Investigation ───────────────────────────────
  q6_: {
    marks: 18,
    exemplar: 'Criteria B rubric (0–18 marks): Variables (V): IV=temperature, DV=time to collect a fixed volume of oxygen (or volume of oxygen in a fixed time), CV=amount of hydrogen peroxide AND concentration/volume of catalase. Hypothesis (H): testable, linked to variables, with correct scientific explanation (enzymes work faster at higher temperatures; above optimal, enzymes denature and the reaction slows/stops). Manipulation of IV (M): at least five stated values of IV. Method (M): correctly described, connected to IV, with some details of equipment (water baths, thermometer, gas syringe), measurements and units, could be followed by another student. Sufficient data (D): at least three trials. Safety (S): hydrogen peroxide is an irritant — wear goggles; handle hot water/glassware carefully.',
    keyConcepts: ['IV temperature DV oxygen collection CV hydrogen peroxide catalase', 'hypothesis enzymes temperature optimal denaturation', 'method 5 temperatures 3 trials safe'],
    keywords: ['temperature', 'oxygen', 'hydrogen peroxide', 'catalase', 'hypothesis', 'denaturation', 'optimal', 'trials', 'safety', 'goggles'],
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

  // ── Q8: Contour Ploughing vs Hydroponics ─────────────────────────────────────
  q8_a: {
    marks: 5,
    exemplar: 'Any five explicitly linked points: Similarities: both methods improve the supply of water to crops; both help meet the nutrient needs of the crops; both aim to maximise crop yield. Differences: Light: contour ploughing relies on natural light AND light in a hydroponic greenhouse can be controlled. Water: contour ploughing relies on rainfall/climate OR is not controlled AND hydroponics recirculates/controls the water. Soil: contour ploughing reduces soil erosion AND hydroponics has no soil so no erosion. Nutrients: contour relies on nutrients in the soil (which can be depleted) AND nutrients can be controlled in the hydroponic solution.',
    keyConcepts: ['contour ploughing vs hydroponics similarities differences', 'light water soil nutrients comparison'],
    keywords: ['contour ploughing', 'hydroponics', 'similarity', 'difference', 'light', 'water', 'soil', 'nutrients', 'controlled'],
    feedbackHit: 'Five explicitly linked similarities or differences stated with correct comparisons.',
    feedbackMiss: 'Award 1 mark per valid explicitly linked comparison (similarity or difference). Similarities and differences must both be explicitly linked to be awarded marks.',
  },

  // ── Q9: Wetland Drainage — Discuss & Evaluate ────────────────────────────────
  q9_: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Change in landscape (C): correct statement of landscape change (wetlands drained with ditches/pumps into flat farmland/polders; dykes and levees built). Scientific justification (SC): justification of changes (lowers the water table / exposes fertile silt soil / controls flooding). Advantages and disadvantages (AD): complete statement of advantage (more farmland, higher food production, flood protection) AND disadvantage (loss of wetland habitat & biodiversity, soil shrinkage/subsidence, greater flood risk if defences fail, release of stored carbon). Impacts (I): a description of an economic (food, jobs, cost of pumps/dykes) or social impact. Appraisal (A): a concluding appraisal. Level 4 (13–15): two or more changes with scientific justification; more than one advantage AND more than one disadvantage; a detailed economic/social impact; appraisal linked to previous impacts.',
    keyConcepts: ['wetland drainage polders landscape changes justified', 'advantages disadvantages economic social impact appraisal'],
    keywords: ['wetland', 'drainage', 'polder', 'water table', 'flooding', 'habitat', 'biodiversity', 'advantages', 'disadvantages', 'economic', 'social', 'appraisal'],
    feedbackHit: 'Full Criteria D: ≥2 changes with scientific justification; advantages and disadvantages; economic/social impact; appraisal linked to discussion.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: more than one change in landscape; scientific justification of changes; advantage AND disadvantage statements; detailed economic/social impact; appraisal linked to previous impacts.',
  },
}
