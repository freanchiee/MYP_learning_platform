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

  // ── Q1: Diet & Nutrition ──────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Pasta: Carbohydrates. Butter: Fats. Yogurt: Proteins or Fats. Eggs: Proteins.',
    keyConcepts: ['pasta carbohydrates', 'butter fats', 'yogurt protein or fat', 'eggs protein'],
    keywords: ['carbohydrates', 'fats', 'proteins', 'pasta', 'butter', 'yogurt', 'eggs'],
    feedbackHit: 'Correct: any two right pairings score 1 mark each (2 max).',
    feedbackMiss: 'Pasta → Carbohydrates; Butter → Fats; Yogurt → Proteins or Fats; Eggs → Proteins.',
    blankAnswers: ['Carbohydrates', 'Fats', 'Proteins', 'Proteins'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'Carbohydrates are needed to provide energy (the main/quick source of energy for the body).',
    keyConcepts: ['carbohydrate function energy supply'],
    keywords: ['energy', 'fuel', 'respiration', 'glucose', 'quick source'],
    feedbackHit: 'Correct role of carbohydrate stated.',
    feedbackMiss: 'Carbohydrates are the body’s main/quick source of energy. Do not accept "growth and repair" (that is protein).',
  },
  q1_c: {
    marks: 2,
    exemplar: '50 g. Working: 12 g = 24%, so 1% = 0.5 g and 100% = 0.5 × 100 = 50 g. Units: grams or g.',
    keyConcepts: ['protein daily intake calculation', '12g equals 24 percent', 'total 50g'],
    keywords: ['50', 'g', 'grams', '24%', 'calculation'],
    feedbackHit: 'Correct answer 50 g with correct working. 1 mark for method, 1 mark for answer with units.',
    feedbackMiss: 'If 12 g = 24%, then 1% = 0.5 g, so 100% = 50 g. Answer must include units (grams/g).',
  },
  q1_d: {
    marks: 4,
    exemplar: '(Yes/partly) it contains the carbohydrate, fat and protein groups in the tables. It is a good source of protein (24% + 16%). However it provides no vitamin C, so other foods are needed. (So) you would need to know what else was eaten during the day to fully judge.',
    keyConcepts: [
      'contains carbohydrate fat protein groups',
      'good source of protein',
      'no vitamin C provided needs other foods',
      'need to know other meals eaten',
    ],
    keywords: ['balanced', 'nutrient groups', 'vitamin C', 'iron', 'protein', 'carbohydrates', 'fat', 'other foods'],
    feedbackHit: '4 valid analytical points made about the nutrition data.',
    feedbackMiss: 'Award 1 mark each for: (1) contains carbohydrate, fat and protein groups; (2) high in protein (good for an athlete); (3) provides 0% vitamin C so not complete on its own; (4) cannot fully judge without knowing other foods eaten that day.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Any two from: a diet too high in sugar/refined carbohydrate over a long time; being overweight or obese; low levels of physical activity; genetic factors / family history.',
    keyConcepts: ['type 2 diabetes causes', 'high sugar diet', 'overweight low activity', 'genetic factors'],
    keywords: ['sugar', 'diet', 'overweight', 'obesity', 'activity', 'exercise', 'genetic', 'family history'],
    feedbackHit: 'Two valid causes of type 2 diabetes stated.',
    feedbackMiss: 'Any two of: high-sugar diet over time / being overweight or obese / lack of physical activity / genetic or family-history factors.',
  },

  // ── Q2: Pathogens, Infection & Immunity ──────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'An organism or virus that causes a disease, or an infection.',
    keyConcepts: ['pathogen causes disease infection'],
    keywords: ['organism', 'virus', 'disease', 'infection', 'causes'],
    feedbackHit: 'Correct definition of pathogen.',
    feedbackMiss: 'A pathogen is an organism (or virus) that causes a disease or infection. Do not accept "germ" alone.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'Any two from: movement, respiration, response to stimulus, growth, reproduction, excretion, digestion or nutrition.',
    keyConcepts: ['life processes bacterium', 'MRS GREN movement respiration growth'],
    keywords: ['movement', 'respiration', 'response', 'growth', 'reproduction', 'excretion', 'nutrition', 'digestion'],
    feedbackHit: 'Two valid life processes listed.',
    feedbackMiss: 'Accept any two of: movement, respiration, response to stimulus, growth, reproduction, excretion, digestion/nutrition.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'In crowded camps there is poor sanitation, so clean water and sewage facilities are limited and food/water becomes contaminated. Any additional reasonable point: people live close together so the bacterium spreads easily from person to person; limited access to medical care.',
    keyConcepts: ['typhoid outbreaks crowded camps', 'poor sanitation contaminated water', 'close contact rapid spread'],
    keywords: ['sanitation', 'contaminated', 'clean water', 'sewage', 'crowded', 'close contact', 'spread'],
    feedbackHit: 'Two valid reasons linking crowded camps to typhoid outbreaks.',
    feedbackMiss: 'Award 1 mark for: poor sanitation / contaminated water or food. Award 2nd mark for another valid point, e.g. people close together so it spreads easily, or limited medical care.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Skin: physical barrier, or pH, or oils, or sweat. White blood cells: destroy/deactivate/eat (engulf) the pathogen, or produce antibodies (in the bloodstream).',
    keyConcepts: ['skin physical barrier defence', 'white blood cells antibodies destroy pathogens'],
    keywords: ['barrier', 'pH', 'oils', 'sweat', 'white blood cells', 'antibodies', 'destroy', 'deactivate', 'phagocytosis'],
    feedbackHit: 'One correct mechanism for skin AND one correct mechanism for white blood cells.',
    feedbackMiss: 'Skin: physical barrier / acidic pH / oils / sweat (1 mark). White blood cells: engulf/destroy pathogen OR produce antibodies (1 mark).',
  },
  q2_e: {
    marks: 5,
    exemplar: 'Basic explanation: you do not get the symptoms of disease, or a later infection will lead to a quicker response. Additional points: the vaccine is a weakened/inactive form of the pathogen or parts of the pathogen; the vaccine triggers specific white blood cells/lymphocytes; the immune system or white blood cells/lymphocytes produce specific antibodies; memory cells are produced/remain so the selection of specific white blood cells has already been done.',
    keyConcepts: [
      'vaccine weakened inactive pathogen',
      'triggers white blood cells lymphocytes',
      'specific antibodies produced',
      'memory cells formed',
      'faster stronger response to future infection',
    ],
    keywords: ['vaccine', 'pathogen', 'antibodies', 'white blood cells', 'lymphocytes', 'memory cells', 'immune response', 'immunity'],
    feedbackHit: 'Five valid points about how vaccination leads to immunity.',
    feedbackMiss: '1 mark: vaccine = weakened/inactive pathogen. 1 mark: triggers white blood cells/lymphocytes. 1 mark: antibodies produced. 1 mark: memory cells formed. 1 mark: faster/stronger future response (or no symptoms of disease).',
  },

  // ── Q3: Planarian Investigation ───────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 0,
  },
  q3_b: {
    marks: 1,
    exemplar: 'Any reasonable ethical consideration: the water/environment should be similar to the planarians\' normal habitat; moderate environmental conditions; handled with care.',
    keyConcepts: ['ethical consideration planarians', 'welfare natural habitat conditions'],
    keywords: ['habitat', 'handled', 'care', 'welfare', 'natural environment', 'conditions', 'water'],
    feedbackHit: 'Valid ethical consideration stated.',
    feedbackMiss: 'Accept any reasonable welfare point: water/environment similar to natural habitat, moderate conditions, handled gently/carefully.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Independent variable: light level/intensity. Control variables (two max): water temperature; movement of the water; where the planarians start in the trough.',
    keyConcepts: ['independent variable light intensity', 'control variables temperature movement starting position'],
    keywords: ['independent variable', 'light', 'intensity', 'control variable', 'temperature', 'water movement', 'starting position'],
    feedbackHit: 'Independent variable correctly identified plus two valid control variables.',
    feedbackMiss: 'Independent variable = light level/intensity (1 mark). Control variables = any two of: water temperature, movement of water, starting position of planarians (1 mark each).',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Planarians will prefer the shaded side (more planarians on the shaded side after 10 minutes). Second mark: this is a measurable prediction. Third mark: linked to observed behaviour (found on shaded undersides of leaves/stones) as a scientific explanation.',
    keyConcepts: ['hypothesis planarians shaded side phototaxis', 'measurable prediction', 'linked to observed behaviour'],
    keywords: ['shaded', 'dark', 'prefer', 'avoid light', 'more planarians', 'hiding', 'behaviour'],
    feedbackHit: 'Testable hypothesis with direction AND measurable prediction AND scientific explanation.',
    feedbackMiss: '1 mark: planarians prefer dark/shade / move away from light. 1 mark: measurable prediction (more on shaded side after 10 min). 1 mark: explanation linked to observed behaviour (e.g. found on shaded undersides of leaves and stones).',
  },
  q3_e: {
    marks: 1,
    exemplar: 'A minimum of three trials is needed for sufficient data; repetition improves accuracy.',
    keyConcepts: ['three trials sufficient data reliability accuracy'],
    keywords: ['sufficient data', 'reliability', 'accuracy', 'repetition', 'trials'],
    feedbackHit: 'Valid justification for three trials.',
    feedbackMiss: 'Accept: minimum trials for sufficient/reliable data OR repetition improves accuracy.',
  },
  q3_f: {
    marks: 2,
    exemplar: 'Any two: the trough is not the same as the natural environment (so natural behaviour may not be shown); the planarians were not given time to acclimatise; a group placed together might be an unnatural situation; any uncontrolled factor that should have been controlled.',
    keyConcepts: ['limitations planarian investigation', 'artificial environment acclimation group size uncontrolled variables'],
    keywords: ['artificial', 'natural environment', 'acclimation', 'group size', 'uncontrolled', 'limitation'],
    feedbackHit: 'Two valid limitations identified.',
    feedbackMiss: 'Any two: artificial (not natural) environment; no acclimation time given; placing many planarians together is unnatural; any uncontrolled variable named.',
  },
  q3_g: {
    marks: 2,
    exemplar: 'Any reasonable improvement: a wider range of light levels; better control of the control variables; time for acclimation. A correctly linked justification.',
    keyConcepts: ['improvement planarian experiment', 'wider light range better control acclimation'],
    keywords: ['improvement', 'range', 'light levels', 'control variables', 'acclimation', 'justify'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (e.g. wider range of light levels). 1 mark: correct justification linked to the improvement.',
  },
  q3_h: {
    marks: 1,
    exemplar: 'Any different independent variable: water temperature; movement of the water; starting position of the planarians.',
    keyConcepts: ['different independent variable planarian investigation'],
    keywords: ['temperature', 'water movement', 'starting position', 'independent variable'],
    feedbackHit: 'Valid alternative independent variable stated.',
    feedbackMiss: 'Accept any reasonable variable: water temperature, movement of water, starting position of planarians. Accept different light intensities only if light intensity was not given in part (g).',
  },

  // ── Q4: Garden Snail Crawling Speed & Temperature ─────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Animal(ia).',
    keyConcepts: ['kingdom animalia snails molluscs'],
    keywords: ['animal', 'animalia', 'kingdom'],
    feedbackHit: 'Correct kingdom stated.',
    feedbackMiss: 'The kingdom is Animalia (animal). Do not accept Mollusca (that is a phylum).',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Reactions are slower at low temperatures (or snails are not very active at low temperature), so they crawl slowly. At warmer temperatures enzyme activity is higher / they reach an optimal temperature, so they crawl faster. At a temperature that is too hot the enzymes denature / metabolism stops working properly, so crawling speed decreases.',
    keyConcepts: ['crawling speed low temperature', 'optimal temperature enzyme activity', 'enzyme denaturation high temperature'],
    keywords: ['reactions', 'slower', 'low temperature', 'optimal', 'enzymes', 'denature', 'stop', 'metabolism'],
    feedbackHit: 'All three parts of the prediction explained with correct scientific reasoning.',
    feedbackMiss: '1 mark: reactions slower at low temps / not active. 1 mark: optimal temperature reached. 1 mark: enzymes denature / stop working above a certain temperature.',
  },
  q4_c: {
    marks: 1,
    exemplar: '(Table B selected — no mark for selection.) Justification: the mean should be calculated for each temperature; it is inappropriate to calculate a mean for each snail across different temperatures.',
    keyConcepts: ['mean calculated per temperature not per snail', 'appropriate table selection justification'],
    keywords: ['mean', 'temperature', 'calculate', 'inappropriate', 'snail', 'justification'],
    feedbackHit: 'Justification correctly states means should be calculated per temperature.',
    feedbackMiss: 'The mark is for justification only. The mean should be calculated for each temperature (not for each individual snail across different temperatures).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'x-axis: temperature (with °C included). y-axis: mean distance crawled in 5 minutes (with mm included).',
    keyConcepts: ['x-axis temperature Celsius', 'y-axis distance crawled mm'],
    keywords: ['temperature', '°C', 'distance', 'mm', 'x-axis', 'y-axis', 'axis labels'],
    feedbackHit: 'Both axis labels correct with units included.',
    feedbackMiss: 'x-axis: Temperature / °C (1 mark for label, 1 mark for °C unit). y-axis: Mean distance crawled in 5 minutes / mm (1 mark).',
  },
  q4_e: {
    marks: 2,
    exemplar: 'The data in the graph supports the middle part of the prediction (crawling speed increases over the temperature range studied, 15–25°C). The method gave insufficient data to test the crawling speed at higher temperatures (so the method is not fully valid); there were insufficient temperatures investigated.',
    keyConcepts: ['data supports middle prediction', 'insufficient temperatures investigated', 'validity comment'],
    keywords: ['supports', 'middle', 'increases', 'insufficient', 'higher temperatures', 'not valid', 'validity'],
    feedbackHit: 'Comment on what data supports and what data is insufficient to fully test the prediction.',
    feedbackMiss: '1 mark: data supports increasing trend (middle of prediction). 1 mark: insufficient higher temperatures investigated / method cannot test the "decrease" part of the prediction.',
  },

  // ── Q5: Mealworm Investigation Design ─────────────────────────────────────
  q5_: {
    marks: 15,
    exemplar: 'Award marks using the criteria B rubric: Identification of variables (0–4), Hypothesis (0–3), Manipulation of variables/method description (0–4), Collection of data (0–2), Ethical consideration (0–2). Full marks: Independent, dependent AND at least two control variables identified; testable hypothesis linked to variables with scientific explanation (e.g. mealworms move to the drier/darker side because they prefer dark, dry, sheltered habitats); complete replicable method using the choice chamber; three trials with ≥4 conditions; relevant ethical statement (handle gently, return to habitat).',
    keyConcepts: [
      'independent variable chosen factor',
      'dependent variable number of mealworms per section',
      'two control variables',
      'testable hypothesis with explanation',
      'complete method replicable',
      'sufficient data collection three trials',
      'ethical consideration mealworm welfare',
    ],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'hypothesis', 'method', 'trials', 'ethical', 'choice chamber', 'mealworms'],
    feedbackHit: 'Criteria B rubric: variables clearly identified, hypothesis testable with explanation, method replicable and complete, sufficient data, ethical consideration included.',
    feedbackMiss: 'Use Criteria B rubric scoring. Level 4: independent + dependent + 2 control variables, testable hypothesis with explanation, complete and replicable method with 3 trials ≥4 conditions, ethical consideration.',
  },

  // ── Q6: Pond Food Web ─────────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Pond snails will decrease because there is more competition for algae / food.',
    keyConcepts: ['pond snails decrease competition mayfly larvae', 'interspecific competition food web'],
    keywords: ['decrease', 'competition', 'food', 'algae', 'mayfly'],
    feedbackHit: 'Pond snails decrease with correct reason (competition with mayfly larvae for algae/food).',
    feedbackMiss: 'Pond snails will decrease — more competition with mayfly larvae for the same algae/food source.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Pond snails will increase because there are fewer herons eating sticklebacks, but this still depends on the chain. Accept either: fewer herons → more sticklebacks → more predation of snails → snails decrease; OR fewer herons reduce predation higher up so snails increase. Correct use of a term from: predator, prey, predation, trophic level, consumer.',
    keyConcepts: ['pond snail population change fewer herons', 'predator prey chain herons sticklebacks snails'],
    keywords: ['herons', 'sticklebacks', 'predator', 'prey', 'predation', 'increase', 'decrease', 'trophic level', 'consumer'],
    feedbackHit: 'Correct prediction with valid food-web chain reasoning AND scientific term used.',
    feedbackMiss: '1 mark: correct prediction with valid chain reasoning (fewer herons → more sticklebacks → more predation on snails → snails fall, or the reverse with reasoning). 1 mark: correct scientific term (predator, prey, predation, trophic level, consumer).',
  },
  q6_c: {
    marks: 1,
    exemplar: 'Add units to the axes.',
    keyConcepts: ['graph improvement units axes labels'],
    keywords: ['units', 'axes', 'labels', 'scale', 'title'],
    feedbackHit: 'Valid graph improvement suggested.',
    feedbackMiss: 'Add units to the axes (e.g. population size / number of individuals on the y-axis; time / weeks or months on the x-axis).',
  },
  q6_d: {
    marks: 6,
    exemplar: 'First mark: the populations of both pond snails and sticklebacks go up and down (oscillate) over time. Any two additional points: the maximum population is about the same number each cycle; the maximum for snails is higher than for sticklebacks; the maximum for sticklebacks occurs after the maximum for snails; the cycles are regularly spaced over time. Explanation (3 max): as the pond-snail population grows there is more food for sticklebacks, so the stickleback population increases; there is then more predation of snails so the snail population falls; with fewer snails there is less food for sticklebacks so their population falls; with fewer sticklebacks there is less predation, so the snail population recovers and the cycle repeats.',
    keyConcepts: [
      'both populations oscillate increase decrease over time',
      'stickleback peak after snail peak',
      'snails increase food for sticklebacks',
      'more predation snails fall',
      'less food sticklebacks fall',
      'snails recover cycle repeats',
    ],
    keywords: ['oscillate', 'increase', 'decrease', 'peak', 'population', 'predation', 'food', 'cycle', 'sticklebacks', 'snails'],
    feedbackHit: 'Description of oscillating trend PLUS 2 additional observations PLUS full predator-prey explanation chain.',
    feedbackMiss: '1 mark: both populations oscillate. 2 marks (any two): same max / snails higher / sticklebacks peak after snails / regular cycles. 3 marks for explanation chain: snails grow → food for sticklebacks → sticklebacks increase → more predation → snails fall → less food → sticklebacks fall → snails recover.',
  },

  // ── Q7: Fertilizers, Genes & Drought-Tolerant Crops ───────────────────────
  q7_a: {
    marks: 4,
    exemplar: 'Taken in by the roots. By diffusion or active transport. Transported in the xylem / transport tissue / vascular tissue (to the leaves). Used in the synthesis of (organic) molecules / amino acids / proteins / for growth.',
    keyConcepts: [
      'nutrients taken in by roots',
      'diffusion or active transport',
      'xylem transport tissue',
      'synthesis of organic molecules amino acids growth',
    ],
    keywords: ['roots', 'diffusion', 'active transport', 'xylem', 'vascular tissue', 'synthesis', 'amino acids', 'proteins', 'growth'],
    feedbackHit: 'All four points about nutrient uptake and use in plants correctly stated.',
    feedbackMiss: '1 mark: taken in by roots. 1 mark: diffusion or active transport. 1 mark: transported in xylem/vascular tissue. 1 mark: used in synthesis of organic molecules/amino acids/growth.',
  },
  q7_b: {
    marks: 4,
    exemplar: 'One similarity: both increase the nutritional value/yield of crops / both give the desired minerals to the crops / if overused both could lead to environmental problems such as run-off into water sources. One difference: reference to price / one more expensive than the other / chemical can be more controlled in terms of quantity of nutrients / organic can be produced on the same farm. Award up to two additional marks for further valid similarities or differences (4 max).',
    keyConcepts: [
      'both increase crop nutritional value or yield',
      'both can cause environmental problems runoff',
      'chemical vs organic price difference',
      'chemical more controlled quantity',
      'organic produced on same farm',
    ],
    keywords: ['similarity', 'difference', 'nutritional value', 'yield', 'minerals', 'price', 'expensive', 'environmental', 'runoff', 'controlled', 'organic', 'chemical'],
    feedbackHit: 'At least one similarity and one difference with additional points correctly stated.',
    feedbackMiss: 'Similarity (1 mark): both increase yield/nutritional value / both give minerals / both can cause environmental damage. Difference (1 mark): price / control of quantity / organic made on farm. Up to 2 more marks for additional valid points.',
  },
  q7_c: {
    marks: 1,
    exemplar: 'A section of a chromosome or DNA that codes for a protein or trait.',
    keyConcepts: ['gene definition DNA chromosome protein trait'],
    keywords: ['gene', 'section', 'chromosome', 'DNA', 'codes', 'protein', 'trait'],
    feedbackHit: 'Correct definition of gene stated.',
    feedbackMiss: 'A gene is a section of chromosome / DNA that codes for a protein or trait/characteristic.',
  },
  q7_d: {
    marks: 3,
    exemplar: 'Table with data for at least four crops. Columns for crop name, trait added (drought tolerance), country, and year (in any order). Data ordered logically in at least one column (e.g. increasing year, or alphabetical by crop/country).',
    keyConcepts: [
      'table four crops data',
      'columns crop trait country year',
      'logical order year alphabetical',
    ],
    keywords: ['table', 'crop', 'trait', 'country', 'year', 'maize', 'wheat', 'rice', 'soybean', 'sorghum', 'cowpea'],
    feedbackHit: 'Table with ≥4 crops, all four required columns, and data in logical order.',
    feedbackMiss: '1 mark: data for at least 4 crops. 1 mark: columns for crop, trait, country, year. 1 mark: logical order in one column (increasing year or alphabetical).',
  },
  q7_e: {
    marks: 2,
    exemplar: 'Correct sequence: (1. Genes are cut from two original species — given.) 2. Restriction enzymes cut open a plasmid. 3. The new genes are inserted into the plasmid. 4. The plasmid is transferred into a bacterium. 5. The modified bacterium inserts the new genes to the plant cell. (6. Modified plant cell grown into individual plants — given.)',
    keyConcepts: [
      'restriction enzymes cut plasmid',
      'new genes inserted into plasmid',
      'plasmid transferred to bacterium',
      'bacterium inserts genes to plant cell',
    ],
    keywords: ['restriction enzymes', 'plasmid', 'bacterium', 'insert', 'genes', 'sequence', 'GMO', 'genetic modification'],
    feedbackHit: 'All four steps in correct sequence.',
    feedbackMiss: '1 mark: any two steps in correct relative sequence. 2 marks: all four steps correct.',
  },

  // ── Q8: Nitrogen-Fixing GM Cereals Evaluation ─────────────────────────────
  q8_: {
    marks: 14,
    exemplar: 'Criteria D rubric (0–14). Health: positive and negative health impacts with at least one supported by reasoning or example (e.g. cheaper grain improves food security; unknown long-term effects of GM food). Environmental: two environmental impacts with at least one linked to a consequence (less fertilizer → less river pollution/eutrophication and lower emissions; but engineered bacteria or cross-pollination could spread and harm ecosystems). Ethical: more than one ethical statement (helps poor farmers / reduces pollution vs consumer choice and food sovereignty). Economic: more than one economic impact with at least one justification (lower fertilizer costs vs high development cost / dependency on biotech companies). Appraisal: a recommendation linked to the impacts discussed.',
    keyConcepts: [
      'health impacts food security unknown long-term GM effects',
      'environmental less fertilizer pollution but engineered bacteria cross-pollination spread',
      'ethical helps poor farmers vs consumer choice food sovereignty',
      'economic lower fertilizer cost vs development cost farmer dependency',
      'appraisal recommendation with justification',
    ],
    keywords: ['health', 'food security', 'environmental', 'fertilizer', 'pollution', 'eutrophication', 'cross-pollination', 'ethical', 'choice', 'economic', 'cost', 'appraisal', 'recommendation'],
    feedbackHit: 'Criteria D rubric: positive and negative health with reasoning; two environmental impacts with consequences; more than one ethical statement; more than one economic impact with justification; appraisal linked to impacts.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: positive and negative health statements at least one with reasoning/example; two+ environmental impacts with consequence; more than one ethical statement; more than one economic impact with justification; appraisal linked to previous impacts.',
  },
}
