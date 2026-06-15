import 'server-only'

type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

type MCQEntry = {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {

  // Q1 — Cells and Genetics

  q1_a: {
    marks: 2,
    exemplar: 'Chloroplast → Plant cells only; Cell wall → Both (plant and bacteria); Nucleus → Plant cells only; Cytoplasm → Both.',
    keyConcepts: ['cell structure organelles bacteria plant'],
    keywords: ['chloroplast', 'cell wall', 'nucleus', 'cytoplasm', 'plant cells', 'bacteria cells', 'both'],
    feedbackHit: 'Correct identification of organelle distribution between cell types.',
    feedbackMiss: 'Remember: bacteria have no membrane-bound organelles; chloroplast and nucleus are only in eukaryotic (plant) cells. Cell wall and cytoplasm are in both.',
    blankAnswers: ['Plant cells', 'Both', 'Plant cells', 'Both'],
  },

  q1_b: {
    marks: 2,
    exemplar: 'A 3D model is closer to reality / easier to visualise the true shape; it shows the spatial relationships between organelles / more detail about organelle structure.',
    keyConcepts: ['cell model 3D advantage visualise structure'],
    keywords: ['3D model', 'closer to reality', 'visualise', 'spatial', 'relationships', 'organelles', 'detail'],
    feedbackHit: 'Good understanding of advantages of 3D vs 2D models.',
    feedbackMiss: 'Focus on spatial relationships and realistic representation, not just appearance.',
  },

  q1_c: {
    marks: 2,
    exemplar: 'Nucleus (whole oval structure, Position 1), Chromosome (condensed structure inside nucleus, Position 2), DNA (double helix strand, Position 3), Gene (segment of DNA strand, Position 4), Nucleotide (single unit of DNA, Position 5).',
    keyConcepts: ['chromosome DNA gene nucleus nucleotide hierarchy'],
    keywords: ['chromosome', 'DNA', 'gene', 'nucleus', 'nucleotide', 'label', 'diagram'],
    feedbackHit: 'Correct labelling of cell components from large to small.',
    feedbackMiss: 'Note: gene and DNA positions may be reversed. Nucleus is the large oval; chromosome is condensed DNA; nucleotide is the single unit.',
    blankAnswers: ['Nucleus', 'Chromosome', 'DNA', 'Gene', 'Nucleotide'],
  },

  q1_d: {
    marks: 1,
    exemplar: 'ww (the mother has a straight hairline; widow\'s peak W is dominant, so no widow\'s peak = ww homozygous recessive).',
    keyConcepts: ['genotype phenotype dominant recessive alleles'],
    keywords: ['genotype', 'ww', 'homozygous', 'recessive', 'dominant', "widow's peak"],
    feedbackHit: 'Correct genotype using recessive alleles.',
    feedbackMiss: 'A straight hairline is the recessive phenotype — both alleles must be w, giving genotype ww.',
  },

  q1_e: {
    marks: 2,
    exemplar: 'Punnett square: Ww, Ww, ww, ww. Probability of widow\'s peak = 2/4 = 50% (or 1/2 or 1:1 ratio). ECF from part (d).',
    keyConcepts: ['Punnett square inheritance probability dominant recessive'],
    keywords: ['Punnett square', 'Ww', 'ww', '50%', 'probability', '2/4', 'ECF'],
    feedbackHit: 'Correct Punnett square and probability calculation.',
    feedbackMiss: "Cross father W,w with mother w,w → Ww, ww, Ww, ww. Widow's peak (Ww) = 2 out of 4 offspring = 50%.",
    blankAnswers: ['Ww', 'Ww', 'ww', 'ww'],
  },

  q1_f: {
    marks: 5,
    exemplar: 'Variation exists within a species due to genetic differences. When a selection pressure occurs (e.g. disease, predation, climate change), individuals with favourable variations are more likely to survive. They reproduce and pass on the favourable characteristics to offspring. Over many generations, the frequency of beneficial traits increases. This allows the species to become better adapted to its environment, increasing chances of long-term survival.',
    keyConcepts: ['variation natural selection adaptation survival species selection pressure'],
    keywords: ['variation', 'selection pressure', 'survive', 'reproduce', 'pass on', 'heritable', 'adapted', 'favourable', 'characteristics'],
    feedbackHit: 'Strong explanation linking variation to selection and adaptation.',
    feedbackMiss: 'Structure your answer: variation exists → selection pressure → favourable survive → reproduce → pass on traits → species adapted.',
  },

  // Q2 — Wetland Food Web

  q2_a: {
    marks: 3,
    exemplar: 'Producer: reeds & algae (accept any plant/alga in food web). Omnivore: river otter (eats animals and some plant roots). Primary consumer: muskrat / pond snail. Do not accept "plant" for producer.',
    keyConcepts: ['food web trophic levels producer consumer omnivore'],
    keywords: ['producer', 'omnivore', 'primary consumer', 'reeds', 'algae', 'river otter', 'muskrat', 'pond snail'],
    feedbackHit: 'Correct identification of ecological roles from the food web.',
    feedbackMiss: 'A producer makes its own food (plant/alga). A primary consumer eats producers. An omnivore eats both plants and animals.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'Draining the wetland destroys otter habitat, so otters lose water and may have less prey available → otter population decreases. OR: nearby alternative food sources → otter population increases. Note: only credit population increase OR decrease (not both); do not allow extinction.',
    keyConcepts: ['human impact habitat destruction population change otter'],
    keywords: ['habitat', 'drained', 'destroyed', 'food source', 'population', 'decrease', 'increase', 'alternative'],
    feedbackHit: 'Clear reasoning linking the drainage scheme to otter population change.',
    feedbackMiss: 'State the change (increase or decrease) AND give a clear reason. Do not say "extinct".',
  },

  q2_c: {
    marks: 3,
    exemplar: 'If otter population decreases: otters eat fewer muskrats → muskrat population increases → more competition for reeds → muskrat numbers may then level off. OR: herons still prey on muskrats, so the muskrat increase is limited. Third mark awarded only if the first two points are logically connected.',
    keyConcepts: ['food web cascade effect population change predator prey'],
    keywords: ['otters', 'muskrats', 'reeds', 'competition', 'predation', 'heron', 'increase', 'decrease'],
    feedbackHit: 'Good chain-of-effect reasoning linking otter change to muskrat change.',
    feedbackMiss: 'Follow the food web chain step by step: otter change → muskrat predation changes → effect on muskrat numbers through competition or other predators.',
  },

  // Q3 — Coral-Reef Shelters and Juvenile Fish

  q3_a: {
    marks: 1,
    exemplar: 'Branching coral / Structure 2 (accept Staghorn coral / Structure 3).',
    keyConcepts: ['graph reading highest value native structures'],
    keywords: ['branching coral', 'staghorn coral', 'structure 2', 'highest', 'survival rate'],
    feedbackHit: 'Correct identification of highest survival rate structure.',
    feedbackMiss: 'Read the tallest bar from the graph.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Branching coral is a native structure, providing more complex hiding spaces / branches / better shelter and camouflage for juvenile fish than artificial structures.',
    keyConcepts: ['native structure habitat hiding places prey survival'],
    keywords: ['native', 'branching', 'hiding', 'shelter', 'camouflage', 'complex', 'protection'],
    feedbackHit: 'Good suggestion linking native coral features to fish survival.',
    feedbackMiss: 'Think about what natural coral offers that artificial structures do not — complex branching shelter, camouflage, familiarity to the fish.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Similarity: both native coral and artificial structures provide better survival than bare sand (ORA). Difference: native coral gives higher survival rates than artificial structures; there is a greater range of survival rates between the two native corals than between the two artificial structures.',
    keyConcepts: ['compare contrast native artificial structures survival data'],
    keywords: ['both', 'similarity', 'difference', 'native', 'artificial', 'higher survival', 'range', 'shelter'],
    feedbackHit: 'Correct comparison with both similarity and difference stated.',
    feedbackMiss: 'State one way they are similar AND one way they differ. Use data from the graph.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'To show the effect of the reef structure on the results / it acts as a control (to compare with structure conditions).',
    keyConcepts: ['control group experimental design investigation'],
    keywords: ['control', 'effect of structure', 'compare', 'baseline', 'results'],
    feedbackHit: 'Correct understanding of a control group.',
    feedbackMiss: 'Do not say "control variables". A control condition/group is used to compare with experimental conditions.',
  },

  // Q4 — Photosynthesis Investigation (Light)

  q4_a: {
    marks: 1,
    exemplar: 'Carbon dioxide + Water → Glucose + Oxygen (accept products and reactants in either order).',
    keyConcepts: ['photosynthesis word equation reactants products'],
    keywords: ['carbon dioxide', 'water', 'glucose', 'oxygen', 'photosynthesis'],
    feedbackHit: 'Correct photosynthesis word equation.',
    feedbackMiss: 'Reactants: Carbon dioxide + Water. Products: Glucose + Oxygen.',
    blankAnswers: ['Carbon dioxide', 'Water', 'Glucose', 'Oxygen'],
  },

  q4_b: {
    marks: 4,
    exemplar: 'IV: distance of lamp from plant (accept light intensity — ORA, WTTE; do not accept "rate of photosynthesis"). DV: volume of gas produced OR number of bubbles in a fixed time. CV1: temperature of water. CV2: same plant or same length of plant or same number of leaves used for each trial; OR same lamp; OR same CO₂ concentration in water.',
    keyConcepts: ['variables independent dependent control investigation photosynthesis'],
    keywords: ['distance', 'lamp', 'volume of gas', 'bubbles', 'temperature', 'same plant', 'control variable'],
    feedbackHit: 'Good identification of all four variable types.',
    feedbackMiss: 'IV changes per trial (distance of lamp). DV is what you measure (bubbles/volume of gas). CVs keep everything else the same.',
  },

  q4_c: {
    marks: 3,
    exemplar: 'The rate of photosynthesis decreases [1 mark]. Because: light intensity decreases as distance increases [1 mark]. Correct scientific explanation e.g. less light energy is absorbed by chlorophyll / light is converted to chemical energy / there is less kinetic energy / fewer successful reactions [1 mark]. Accept energy as alternative to light. No ORA for second marking point.',
    keyConcepts: ['hypothesis photosynthesis light intensity distance formulate'],
    keywords: ['rate of photosynthesis decreases', 'light intensity', 'distance', 'chlorophyll', 'energy', 'absorbed'],
    feedbackHit: 'Good hypothesis with correct direction and scientific justification.',
    feedbackMiss: 'As distance increases, light intensity decreases → less light absorbed by chlorophyll → lower rate of photosynthesis.',
  },

  // Q5 — Temperature Investigation

  q5_a: {
    marks: 1,
    exemplar: 'Temperature-controlled water bath (accept: thermometer; accept description of a water bath using correct terminology).',
    keyConcepts: ['equipment temperature control investigation water bath'],
    keywords: ['water bath', 'temperature controlled', 'thermometer', 'thermostat'],
    feedbackHit: 'Correct identification of missing equipment.',
    feedbackMiss: 'Step 4 says "to keep temperature constant" — a water bath or thermometer maintains a stable temperature.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'To increase the number of different temperatures tested (e.g. test more than 5 temperatures) [1 mark]. To collect enough data to calculate a reliable average / to reduce the impact of experimental error [1 mark]. Accept "more data points gives a better trend line".',
    keyConcepts: ['method improvement data collection temperatures range reliability'],
    keywords: ['more temperatures', 'range', 'sufficient data', 'average', 'reliable', 'experimental error'],
    feedbackHit: 'Good identification of two improvements to the method.',
    feedbackMiss: 'Think: why did the teacher say the data was insufficient? More temperatures = better trend; more data = more reliable averages.',
  },

  q5_c: {
    marks: 3,
    exemplar: 'To reduce the impact of experimental error (random errors average out over multiple trials) [1 mark]. To identify anomalous/outlier results [1 mark]. To increase the accuracy/reliability of the mean/average calculated [1 mark].',
    keyConcepts: ['repeating trials reliability anomalous results mean accuracy'],
    keywords: ['experimental error', 'anomalous', 'outlier', 'reliability', 'accuracy', 'mean', 'random error'],
    feedbackHit: 'Good justification of repeated trials for reliability.',
    feedbackMiss: 'Repeating trials: reduces random errors, helps identify outliers, and gives a more reliable mean.',
  },

  q5_d: {
    marks: 1,
    exemplar: 'Use a measuring cylinder to measure the volume of gas produced (rather than just counting bubbles). Do not accept "count bubbles more carefully".',
    keyConcepts: ['precision measurement measuring cylinder volume gas'],
    keywords: ['measuring cylinder', 'volume', 'gas', 'precision', 'measure', 'rather than counting bubbles'],
    feedbackHit: 'Correct improvement for precision of measurements.',
    feedbackMiss: 'Counting bubbles is imprecise; a measuring cylinder gives a quantitative volume measurement.',
  },

  q5_e: {
    marks: 4,
    exemplar: 'Averages: 10°C average = 6 (5+7+5+7=24÷4); 30°C average = 16 (15+13+21+15=64÷4) [2 marks, 1 per correct average with working shown]. Improvements to data presentation [any 2 from: need consistent significant figures for average data; provide a heading/units for the average column; provide a heading for the trial columns; plot results as a line graph or scatter graph] [2 marks].',
    keyConcepts: ['calculate mean average data presentation improvements significant figures graph'],
    keywords: ['average', 'mean', '6', '16', 'significant figures', 'heading', 'column', 'line graph', 'scatter graph', 'working'],
    feedbackHit: 'Correct calculation with working shown, plus valid presentation improvements.',
    feedbackMiss: 'Show working: sum all trials ÷ 4. 10°C → 24÷4 = 6; 30°C → 64÷4 = 16. Presentation improvements: consistent sig figs, column headings, consider plotting a graph.',
  },

  q5_f: {
    marks: 1,
    exemplar: 'The outlier is Trial 3 at 30°C (value of 21, which is much higher than the other 30°C values of 15, 13, and 15). Accept any specific data point identified with justification.',
    keyConcepts: ['outlier anomalous data point identification'],
    keywords: ['outlier', 'anomalous', '30°C', 'trial 3', '21', 'much higher'],
    feedbackHit: 'Correct identification of outlier data point.',
    feedbackMiss: 'An outlier is a result noticeably different from the others at the same temperature. Identify the temperature and trial number.',
  },

  q5_g: {
    marks: 1,
    exemplar: 'Exclude/ignore the outlier when calculating the mean / repeat the trial to check if the outlier is reproducible / calculate mean without the outlier.',
    keyConcepts: ['outlier handling analysis exclude repeat mean'],
    keywords: ['exclude', 'ignore', 'repeat', 'mean without outlier', 'anomalous'],
    feedbackHit: 'Good suggestion for handling outlier data.',
    feedbackMiss: 'Do not include the outlier in the mean, or repeat the trial to verify whether it is a genuine result.',
  },

  q5_h: {
    marks: 2,
    exemplar: 'Partially valid: the graph shows rate increases up to about 30°C (supported by data) but the decrease above 30°C is explained by enzyme denaturation — the active site changes shape so the substrate can no longer fit [1 mark]. Not fully valid above 30°C because the enzyme can no longer catalyse the reaction / photosynthesis slows above the enzyme\'s optimum temperature [1 mark]. WTTE.',
    keyConcepts: ['graph evaluation enzyme denaturation temperature photosynthesis validity'],
    keywords: ['partially valid', 'enzyme', 'denaturation', 'active site', 'substrate', 'optimum temperature', '30°C'],
    feedbackHit: 'Good evaluation linking graph trend to enzyme activity.',
    feedbackMiss: 'Above the optimum temperature, enzymes denature — the active site changes shape and the substrate cannot bind, slowing photosynthesis.',
  },

  // Q6 — Design Investigation (Criteria B)

  q6_: {
    marks: 15,
    exemplar: 'Variables (max 4): IV = concentration of CO₂ (sodium hydrogencarbonate) in the water; DV = volume of gas produced or number of bubbles; 2 CVs = light intensity/distance, temperature, same plant/mass of plant, type of water. Hypothesis (max 4): testable, linked to stated DV, correct scientific direction, use of term chlorophyll/chloroplast or "raw material/reactant". Equipment (max 2): equipment to measure DV and manipulate IV (e.g. balance to weigh NaHCO₃); equipment to monitor/measure CVs. Method (max 4): detailed steps sufficient to follow and repeat the experiment. Data (max 3): plan to repeat at least 3 trials; collect data for at least 5 different CO₂ concentrations.',
    keyConcepts: ['Criteria B investigation design variables hypothesis equipment method data collection photosynthesis'],
    keywords: ['IV', 'DV', 'control variables', 'hypothesis', 'testable', 'equipment', 'method', 'repeats', 'CO2 concentration', 'sodium hydrogencarbonate', 'photosynthesis'],
    feedbackHit: 'Strong investigation design with all rubric components addressed.',
    feedbackMiss: 'Include all 5 elements: Variables (IV, DV, 2×CV), Hypothesis (testable, linked to DV, scientific term), Equipment (measure IV and DV), Method (sufficient detail to repeat), Data (at least 5 concentrations, 3 repeats).',
  },

  // Q7 — Enzymes

  q7_a: {
    marks: 2,
    exemplar: 'Shape 1 (large starch chain) = Substrate; Shape 2 (enzyme) = Enzyme; Shape 3 (after arrow, enzyme) = Enzyme; Shape 4 (small sugar) = Product. One enzyme labelled correctly = 1 mark. All four correct = 2 marks. Ignore any errors in the other enzyme label for first mark.',
    keyConcepts: ['enzyme substrate product active site enzyme-catalysed reaction'],
    keywords: ['enzyme', 'substrate', 'product', 'active site', 'catalyse', 'reaction', 'starch', 'sugar'],
    feedbackHit: 'Correct identification of enzyme, substrate, and product.',
    feedbackMiss: 'The enzyme is unchanged after the reaction (appears before and after). The large starch chain that binds is the substrate; the smaller sugar result is the product.',
    blankAnswers: ['Substrate', 'Enzyme', 'Enzyme', 'Product'],
  },

  q7_b: {
    marks: 4,
    exemplar: 'A to B: as substrate concentration increases, rate of reaction increases [1 mark]; because more substrate is available for enzymes to act on / greater number of successful collisions between enzyme and substrate [1 mark]. B to C: as substrate concentration increases, rate is unchanged / constant / plateau [1 mark]; because all active sites are occupied / enzyme concentration is limiting [1 mark]. WTTE.',
    keyConcepts: ['rate of reaction enzyme substrate concentration limiting factor active site'],
    keywords: ['increases', 'substrate concentration', 'active sites', 'occupied', 'plateau', 'constant', 'limiting', 'enzyme concentration'],
    feedbackHit: 'Excellent interpretation of both sections of the enzyme graph.',
    feedbackMiss: 'A–B: more substrate → more collisions → faster rate. B–C: plateau because all enzyme active sites are busy — enzyme is now the limiting factor.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'Graph D (rate rises above the previous plateau when more enzyme is added at point C, then levels off at a new higher plateau).',
    keyConcepts: ['enzyme concentration rate of reaction graph effect'],
    keywords: ['Graph D', 'rises', 'new plateau', 'more enzyme', 'active sites'],
    feedbackHit: 'Correct graph showing increased rate with more enzyme.',
    feedbackMiss: 'Adding more enzyme at point C provides more active sites, so rate increases above the plateau, then levels off again.',
  },

  // Q8 — Arteries, Exercise and Hypertension

  q8_a: {
    marks: 2,
    exemplar: 'Arteries have more elastic fibres (in their walls) [1 mark]. Arteries have thicker walls OR are more muscular [1 mark]. Accept "arteries are more elastic".',
    keyConcepts: ['artery vein blood pressure structure elastic fibres muscular wall'],
    keywords: ['elastic fibres', 'thicker walls', 'muscular', 'arteries', 'veins', 'high pressure'],
    feedbackHit: 'Correct structural differences between arteries and veins.',
    feedbackMiss: 'Arteries carry blood at high pressure from the heart — they need thick, elastic walls to stretch and recoil.',
  },

  q8_b: {
    marks: 4,
    exemplar: 'Advantages (any 2): weight loss; improved mood or mental health; increased fitness; reduced risk of developing other medical issues (e.g. heart disease) [2 marks]. Disadvantages (any 2): may lead to injuries / muscle ache or soreness; may lead to complications for people in risk groups; hard to keep up or long-term effect only [2 marks]. Do not accept responses not related to health.',
    keyConcepts: ['exercise advantages disadvantages health hypertension lifestyle'],
    keywords: ['weight loss', 'mood', 'fitness', 'reduced risk', 'injury', 'muscle ache', 'complications', 'hard to maintain'],
    feedbackHit: 'Good range of health-related advantages and disadvantages of exercise.',
    feedbackMiss: 'Give two clear advantages AND two clear disadvantages. All must relate to health — not convenience or cost.',
  },

  q8_c: {
    marks: 3,
    exemplar: 'Medication causes blood vessels to stop contracting OR relax [1 mark]. The blood vessel (lumen) increases in diameter / vasodilation / dilates [1 mark]. So the same volume of blood flows through a larger space / reduced pressure on vessel walls [1 mark]. A correct use of one of the terms: volume, vasodilation, dilate, lumen. Accept arteries or veins.',
    keyConcepts: ['hypertension medication vasodilation lumen blood pressure mechanism'],
    keywords: ['relax', 'vasodilation', 'dilate', 'lumen', 'volume', 'blood pressure', 'diameter', 'blood vessels'],
    feedbackHit: 'Good mechanistic explanation of how medication lowers blood pressure.',
    feedbackMiss: 'Medication relaxes blood vessels → they dilate (lumen gets wider) → blood flows through a larger space → lower pressure.',
  },

  // Q9 — Criteria D: Evaluate Medication for High Cholesterol

  q9_: {
    marks: 11,
    exemplar: 'Individual impacts (positive: statins effectively lower blood cholesterol, reducing the risk of heart attack/stroke; negative: side effects such as muscle pain, dependency, cost to individual, diet/lifestyle not addressed). Society impacts (positive: reduces healthcare burden from heart disease, productivity maintained; negative: increased cost of prescriptions to the health service, over-reliance on medication). Concluding appraisal: medication is useful but should be combined with diet and lifestyle changes; both lines of argument considered with justification of preferred approach.',
    keyConcepts: ['Criteria D evaluate medication cholesterol statins impacts individual society appraisal'],
    keywords: ['positive', 'negative', 'individual', 'society', 'statins', 'cholesterol', 'heart disease', 'lifestyle', 'appraisal', 'justification'],
    feedbackHit: 'Excellent evaluation with balanced individual and societal impacts and a justified conclusion.',
    feedbackMiss: 'Structure: (1) positive AND negative impacts on the individual; (2) positive AND negative impacts on society; (3) concluding appraisal that considers both sides and gives your opinion with justification.',
  },

  // Q10 — Thyroxine and Metabolism

  q10_a: {
    marks: 2,
    exemplar: 'The pill increases thyroxine levels [1 mark]. Thyroxine speeds up the rate of chemical reactions (metabolism) in body cells, so the metabolic rate rises toward a healthy level [1 mark]. Do not accept "the pill gives energy" without reference to metabolism/reactions.',
    keyConcepts: ['thyroxine metabolism hormone thyroid regulation'],
    keywords: ['thyroxine', 'increases', 'metabolic rate', 'chemical reactions', 'metabolism', 'cells', 'raise', 'speeds up'],
    feedbackHit: 'Good understanding of how a thyroxine pill raises metabolic rate.',
    feedbackMiss: 'Thyroxine controls metabolic rate — the pill raises thyroxine, which speeds up chemical reactions in cells, raising metabolism.',
  },

  q10_b: {
    marks: 6,
    exemplar: 'Benefit (1 max): rabbits are mammals and similar to humans; easy to keep; easy to control external variables in a laboratory. Limitation (1 max): rabbits have different physiology to humans; side effects may not be measurable/translatable; rabbits exist in a controlled lab environment unlike humans. Ethical considerations (2 max): rabbits are given disease/treatment (which causes them harm); side effects of the new thyroxine treatment are unknown; rabbits cannot give consent; rabbits are specifically bred for use in experiments (reference to welfare). Concluding appraisal: a justified conclusion stating whether using rabbits is appropriate, considering the benefit and ethical concerns.',
    keyConcepts: ['animal research ethics rabbits benefit limitation thyroxine evaluation'],
    keywords: ['rabbits', 'mammals', 'similar to humans', 'control variables', 'different physiology', 'treatment', 'consent', 'welfare', 'ethical', 'side effects', 'appraisal'],
    feedbackHit: 'Comprehensive evaluation covering benefit, limitation, ethics, and a justified conclusion.',
    feedbackMiss: 'Include: 1 benefit, 1 limitation, 2 ethical issues, and a concluding appraisal with justification about whether using rabbits is appropriate.',
  },
}
