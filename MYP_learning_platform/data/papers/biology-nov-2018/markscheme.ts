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
    exemplar: 'Rice: Carbohydrates. Olive oil: Fats. Milk: Fats or Proteins. Fish: Proteins.',
    keyConcepts: ['rice carbohydrates', 'olive oil fats', 'milk fat or protein', 'fish protein'],
    keywords: ['carbohydrates', 'fats', 'proteins', 'rice', 'olive oil', 'milk', 'fish'],
    feedbackHit: 'Correct: any two right pairings score 1 mark each (2 max).',
    feedbackMiss: 'Rice → Carbohydrates; Olive oil → Fats; Milk → Fats or Proteins; Fish → Proteins.',
    blankAnswers: ['Carbohydrates', 'Fats', 'Fats', 'Proteins'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'Protein is needed for growth, or repair, or structure, or enzymes.',
    keyConcepts: ['protein growth repair structure enzymes'],
    keywords: ['growth', 'repair', 'structure', 'enzymes'],
    feedbackHit: 'Correct role of protein stated.',
    feedbackMiss: 'Accept any one of: growth, repair, structure, or enzymes. Do not accept "energy" alone.',
  },
  q1_c: {
    marks: 2,
    exemplar: '50 g. Working: 10 g = 20%, so 100% = 10 × 5 = 50 g. Units: grams or g.',
    keyConcepts: ['protein daily intake calculation', '10g equals 20 percent', 'total 50g'],
    keywords: ['50', 'g', 'grams', '20%', 'calculation'],
    feedbackHit: 'Correct answer 50 g with correct working. 1 mark for method, 1 mark for answer with units.',
    feedbackMiss: 'If 10 g = 20%, then 1% = 0.5 g, so 100% = 50 g. Answer must include units (grams/g).',
  },
  q1_d: {
    marks: 4,
    exemplar: '(Yes) it contains all of the nutrient groups in the table. All of the daily vitamin C is included. Calcium is low so should be supplemented. (So) you would need to know what else was eaten during the day.',
    keyConcepts: [
      'contains all nutrient groups',
      'vitamin C daily requirement met',
      'calcium low needs supplementing',
      'need to know other meals eaten',
    ],
    keywords: ['balanced', 'nutrient groups', 'vitamin C', 'calcium', 'protein', 'carbohydrates', 'fat', 'supplemented'],
    feedbackHit: '4 valid analytical points made about the nutrition data.',
    feedbackMiss: 'Award 1 mark each for: (1) contains all named nutrient groups; (2) all vitamin C provided by OJ; (3) calcium is only 12% total so low/needs supplement; (4) cannot fully judge without knowing other foods eaten that day.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Any two from: an unbalanced diet can lead to high energy intake or low energy usage if activity levels are low; energy intake is higher than energy used; genetic factors or low metabolic rate.',
    keyConcepts: ['obesity causes', 'excess energy intake', 'low activity levels', 'genetic factors metabolic rate'],
    keywords: ['energy intake', 'activity', 'exercise', 'genetic', 'metabolic rate', 'unbalanced diet'],
    feedbackHit: 'Two valid causes of obesity stated.',
    feedbackMiss: 'Any two of: too much energy intake / too little physical activity / energy in > energy out / genetic factors / low metabolic rate.',
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
    exemplar: 'Drinking water supply chains or sewage facilities are broken. Any additional reasonable point: people do not have access to bottled or clean water; people do not have access to antibiotics/cures/medical care.',
    keyConcepts: ['cholera outbreaks natural disasters', 'contaminated water supply', 'broken sewage systems'],
    keywords: ['water supply', 'sewage', 'contaminated', 'clean water', 'flooding', 'infrastructure'],
    feedbackHit: 'Two valid reasons linking natural disasters to cholera outbreaks.',
    feedbackMiss: 'Award 1 mark for: water supply/sewage chains are broken. Award 2nd mark for another valid point, e.g. no access to clean water or medical care.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Skin: physical barrier, or pH, or oils, or sweat. White blood cells: destroy/deactivate/eat pathogen, or produce antibodies (in the bloodstream).',
    keyConcepts: ['skin physical barrier defence', 'white blood cells antibodies destroy pathogens'],
    keywords: ['barrier', 'pH', 'oils', 'sweat', 'white blood cells', 'antibodies', 'destroy', 'deactivate', 'phagocytosis'],
    feedbackHit: 'One correct mechanism for skin AND one correct mechanism for white blood cells.',
    feedbackMiss: 'Skin: physical barrier / acidic pH / oils / sweat (1 mark). White blood cells: engulf/destroy pathogen OR produce antibodies (1 mark).',
  },
  q2_e: {
    marks: 5,
    exemplar: 'Basic explanation: you do not get symptoms of disease, or subsequent infection will lead to quicker response. Additional points: vaccine is a weakened/inactive form of the pathogen or parts of the pathogen; vaccine triggers specific white blood cells/lymphocytes; immune system or white blood cells/lymphocytes produce specific antibodies; memory cells are present, or the selection of specific white blood cells/lymphocytes has already been done.',
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

  // ── Q3: Leech Investigation ───────────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 0,
  },
  q3_b: {
    marks: 1,
    exemplar: 'Any reasonable ethical consideration: the environment should be similar to the leeches\' normal habitat; moderate environmental conditions; handled with care.',
    keyConcepts: ['ethical consideration leeches', 'welfare natural habitat conditions'],
    keywords: ['habitat', 'handled', 'care', 'welfare', 'natural environment', 'conditions'],
    feedbackHit: 'Valid ethical consideration stated.',
    feedbackMiss: 'Accept any reasonable welfare point: environment similar to natural habitat, moderate conditions, handled gently/carefully.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Independent variable: light level/intensity. Control variables (two max): temperature; movement around leeches; where leeches start in the decision chamber.',
    keyConcepts: ['independent variable light intensity', 'control variables temperature movement starting position'],
    keywords: ['independent variable', 'light', 'intensity', 'control variable', 'temperature', 'movement', 'starting position'],
    feedbackHit: 'Independent variable correctly identified plus two valid control variables.',
    feedbackMiss: 'Independent variable = light level/intensity (1 mark). Control variables = any two of: temperature, movement of water, starting position of leeches (1 mark each).',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Leeches will prefer the dark side (more leeches on the dark side after 10 minutes). Second mark: this is a measurable prediction. Third mark: linked to observed hiding behaviour (in stream/rocks) as scientific explanation.',
    keyConcepts: ['hypothesis leeches dark side phototaxis', 'measurable prediction', 'linked to observed behaviour'],
    keywords: ['dark', 'prefer', 'avoid light', 'more leeches', 'dark side', 'hiding', 'behaviour'],
    feedbackHit: 'Testable hypothesis with direction AND measurable prediction AND scientific explanation.',
    feedbackMiss: '1 mark: leeches prefer dark / move away from light. 1 mark: measurable prediction (more on dark side after 10 min). 1 mark: explanation linked to observed behaviour (e.g. found hiding under rocks).',
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
    exemplar: 'Any two: it is not the same as the natural environment (so natural behaviour may not be shown); they were not given time for acclimation; a group of 10 might be an unnatural situation; a statement of any uncontrolled factor that should have been controlled.',
    keyConcepts: ['limitations leech investigation', 'artificial environment acclimation group size uncontrolled variables'],
    keywords: ['artificial', 'natural environment', 'acclimation', 'group size', 'uncontrolled', 'limitation'],
    feedbackHit: 'Two valid limitations identified.',
    feedbackMiss: 'Any two: artificial (not natural) environment; no acclimation time given; 10 leeches as a group is unnatural; any uncontrolled variable named.',
  },
  q3_g: {
    marks: 2,
    exemplar: 'Any reasonable improvement: a wider range of light levels; better control of the control variables; time for acclimation. A correctly linked justification.',
    keyConcepts: ['improvement leech experiment', 'wider light range better control acclimation'],
    keywords: ['improvement', 'range', 'light levels', 'control variables', 'acclimation', 'justify'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (e.g. wider range of light levels). 1 mark: correct justification linked to the improvement.',
  },
  q3_h: {
    marks: 1,
    exemplar: 'Any different independent variable: temperature; movement of water; starting position of leeches.',
    keyConcepts: ['different independent variable leech investigation'],
    keywords: ['temperature', 'water movement', 'starting position', 'independent variable'],
    feedbackHit: 'Valid alternative independent variable stated.',
    feedbackMiss: 'Accept any reasonable variable: temperature, movement of water, starting position of leeches. Accept different light intensities only if light intensity was not given in part (g).',
  },

  // ── Q4: Cricket Chirping & Temperature ───────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Animal(ia).',
    keyConcepts: ['kingdom animalia crickets insects'],
    keywords: ['animal', 'animalia', 'kingdom'],
    feedbackHit: 'Correct kingdom stated.',
    feedbackMiss: 'The kingdom is Animalia (animal). Do not accept Arthropoda (that is a phylum).',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Reactions are slower at low temperatures (or crickets are not active at low temperature). Reach an optimal temperature (or warm temperatures are close to the temperature of their natural habitat). Enzymes do not function at a temperature that is too hot (or above a certain temperature metabolism will not work properly and they stop chirping).',
    keyConcepts: ['chirp rate low temperature', 'optimal temperature enzyme activity', 'enzyme denaturation high temperature'],
    keywords: ['reactions', 'slower', 'low temperature', 'optimal', 'enzymes', 'denature', 'stop', 'metabolism'],
    feedbackHit: 'All three parts of the prediction explained with correct scientific reasoning.',
    feedbackMiss: '1 mark: reactions slower at low temps / not active. 1 mark: optimal temperature reached. 1 mark: enzymes denature / stop working above certain temperature.',
  },
  q4_c: {
    marks: 1,
    exemplar: '(First table selected — no mark.) Justification: mean should be calculated for each temperature; or it is inappropriate to calculate the mean for each cricket at different temperatures.',
    keyConcepts: ['mean calculated per temperature not per cricket', 'appropriate table selection justification'],
    keywords: ['mean', 'temperature', 'calculate', 'inappropriate', 'cricket', 'justification'],
    feedbackHit: 'Justification correctly states means should be calculated per temperature.',
    feedbackMiss: 'The mark is for justification only. Mean should be calculated for each temperature (not for each individual cricket across different temperatures).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'x-axis: temperature (with °C included). y-axis: chirps per minute (or number of chirps per minute).',
    keyConcepts: ['x-axis temperature Celsius', 'y-axis chirps per minute'],
    keywords: ['temperature', '°C', 'chirps per minute', 'x-axis', 'y-axis', 'axis labels'],
    feedbackHit: 'Both axis labels correct with °C unit included on x-axis.',
    feedbackMiss: 'x-axis: Temperature / °C (1 mark for label, 1 mark for °C unit). y-axis: Number of chirps per minute (1 mark).',
  },
  q4_e: {
    marks: 2,
    exemplar: 'The data in the graph supports the middle part of the prediction (the rate increases over the temperature range studied). The method gave insufficient data to test the chirp rate at higher temperatures (so the method is not fully valid); or there were insufficient temperatures investigated.',
    keyConcepts: ['data supports middle prediction', 'insufficient temperatures investigated', 'validity comment'],
    keywords: ['supports', 'middle', 'increases', 'insufficient', 'higher temperatures', 'not valid', 'validity'],
    feedbackHit: 'Comment on what data supports and what data is insufficient to fully test the prediction.',
    feedbackMiss: '1 mark: data supports increasing trend (middle of prediction). 1 mark: insufficient higher temperatures investigated / method cannot test the decrease part of the prediction.',
  },

  // ── Q5: Woodlice Investigation Design ────────────────────────────────────
  q5_: {
    marks: 15,
    exemplar: 'Award marks using the criteria B rubric: Identification of variables (0–4), Hypothesis (0–3), Manipulation of variables/method description (0–4), Collection of data (0–2), Ethical consideration (0–2). Full marks: Independent, dependent AND at least two control variables identified; testable hypothesis linked to variables with scientific explanation; complete replicable method; three trials with ≥4 conditions; relevant ethical statement.',
    keyConcepts: [
      'independent variable chosen factor',
      'dependent variable number of woodlice per section',
      'two control variables',
      'testable hypothesis with explanation',
      'complete method replicable',
      'sufficient data collection three trials',
      'ethical consideration woodlice welfare',
    ],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'hypothesis', 'method', 'trials', 'ethical', 'choice chamber', 'woodlice'],
    feedbackHit: 'Criteria B rubric: variables clearly identified, hypothesis testable with explanation, method replicable and complete, sufficient data, ethical consideration included.',
    feedbackMiss: 'Use Criteria B rubric scoring. Level 4: independent + dependent + 2 control variables, testable hypothesis with explanation, complete and replicable method with 3 trials ≥4 conditions, ethical consideration.',
  },

  // ── Q6: Woodland Food Web ─────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Woodlice will decrease because there is more competition for plant material or food.',
    keyConcepts: ['woodlice decrease competition worms', 'interspecific competition food web'],
    keywords: ['decrease', 'competition', 'food', 'plant material', 'worms'],
    feedbackHit: 'Woodlice decrease with correct reason (competition with worms for food/plant material).',
    feedbackMiss: 'Woodlice will decrease — more competition with worms for the same plant material/food source.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Woodlice will increase because there are fewer owls eating the woodlice. OR woodlice will decrease because there is more predation from rats (fewer owls → more rats → more predation on woodlice). Correct use of a term from: predator, prey, predation, trophic levels, consumer.',
    keyConcepts: ['woodlice population change fewer owls', 'predator prey chain rats owls woodlice'],
    keywords: ['owls', 'rats', 'predator', 'prey', 'predation', 'increase', 'decrease', 'trophic level', 'consumer'],
    feedbackHit: 'Correct prediction with valid food web chain reasoning AND scientific term used.',
    feedbackMiss: '1 mark: correct prediction with valid chain reasoning. 1 mark: correct scientific term (predator, prey, predation, trophic level, consumer).',
  },
  q6_c: {
    marks: 1,
    exemplar: 'Add units to axes.',
    keyConcepts: ['graph improvement units axes labels'],
    keywords: ['units', 'axes', 'labels', 'scale', 'title'],
    feedbackHit: 'Valid graph improvement suggested.',
    feedbackMiss: 'Add units to axes (e.g. population size / number of individuals on y-axis; time / weeks or months on x-axis).',
  },
  q6_d: {
    marks: 6,
    exemplar: 'First mark: population of both rats and woodlice goes up and down, or increases and decreases (over time). Any two additional points: maximum population is the same number for each species (over time); maximum population for woodlice is higher than rats; maximum for rats is after the maximum for woodlice; cycles are regularly spaced over time. Explanation (3 max): as population of woodlice grows, there is more food for the rats so their population increases; (so) there is more predation of woodlice so population falls; less food for rats so population falls; or less predation on woodlice so population of woodlice increases.',
    keyConcepts: [
      'both populations oscillate increase decrease over time',
      'rat peak after woodlice peak',
      'woodlice increase food for rats',
      'more predation woodlice fall',
      'less food rats fall',
      'woodlice recover cycle repeats',
    ],
    keywords: ['oscillate', 'increase', 'decrease', 'peak', 'population', 'predation', 'food', 'cycle', 'rats', 'woodlice'],
    feedbackHit: 'Description of oscillating trend PLUS 2 additional observations PLUS full predator-prey explanation chain.',
    feedbackMiss: '1 mark: both populations oscillate. 2 marks (any two): same max / woodlice higher / rats peak after woodlice / regular cycles. 3 marks for explanation chain: woodlice grow → food for rats → rats increase → more predation → woodlice fall → less food → rats fall → woodlice recover.',
  },

  // ── Q7: Fertilizers, Genes & Biofortification ─────────────────────────────
  q7_a: {
    marks: 4,
    exemplar: 'Taken in by the roots. By diffusion or active transport. Transported in the xylem / transport tissue / vascular tissue (to the leaves). Used in synthesis of (organic) molecules / amino acids / plant compounds / for growth.',
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
    exemplar: 'One similarity: both increase nutritional value of plants / both will give the desired minerals to the crops / if overused both could lead to environmental problems / accumulation of minerals in water sources. One difference: reference to price / one more expensive than other / chemically could be more controlled in terms of quantity of nutrients / organic could be produced in the same farm. Any two additional points for either similarities or differences (2 max).',
    keyConcepts: [
      'both increase crop nutritional value',
      'both can cause environmental problems runoff',
      'chemical vs organic price difference',
      'chemical more controlled quantity',
      'organic produced on same farm',
    ],
    keywords: ['similarity', 'difference', 'nutritional value', 'minerals', 'price', 'expensive', 'environmental', 'runoff', 'controlled', 'organic', 'chemical'],
    feedbackHit: 'At least one similarity and one difference with additional points correctly stated.',
    feedbackMiss: 'Similarity (1 mark): both increase nutritional value / both give minerals / both can cause environmental damage. Difference (1 mark): price / control of quantity / organic made on farm. Up to 2 more marks for additional valid points.',
  },
  q7_c: {
    marks: 1,
    exemplar: 'A section of a chromosome or DNA and that codes for a protein or trait.',
    keyConcepts: ['gene definition DNA chromosome protein trait'],
    keywords: ['gene', 'section', 'chromosome', 'DNA', 'codes', 'protein', 'trait'],
    feedbackHit: 'Correct definition of gene stated.',
    feedbackMiss: 'A gene is a section of chromosome / DNA that codes for a protein or trait/characteristic.',
  },
  q7_d: {
    marks: 3,
    exemplar: 'Table with data for at least four crops. Columns for crop name, nutrient added, country, and year (in any order). Data ordered logically in at least one column (e.g. increasing year or alphabetical by country/crop/nutrient).',
    keyConcepts: [
      'table four crops data',
      'columns crop nutrient country year',
      'logical order year alphabetical',
    ],
    keywords: ['table', 'crop', 'nutrient', 'country', 'year', 'maize', 'millet', 'wheat', 'cassava', 'sweet potato', 'beans'],
    feedbackHit: 'Table with ≥4 crops, all four required columns, and data in logical order.',
    feedbackMiss: '1 mark: data for at least 4 crops. 1 mark: columns for crop, year, nutrient, country. 1 mark: logical order in one column (increasing year or alphabetical).',
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

  // ── Q8: Biofortified Food Crops Evaluation ────────────────────────────────
  q8_: {
    marks: 14,
    exemplar: 'Criteria D rubric (0–14). Health: positive and negative health impacts with at least one supported by reasoning or example. Environmental: two environmental impacts with at least one linked to a consequence. Ethical: more than one ethical statement. Economic: more than one economic impact with at least one justification. Appraisal: recommendation linked to previous impacts discussed.',
    keyConcepts: [
      'health impacts vitamin A deficiency blindness immune function',
      'environmental cross-pollination invasive species loss of natural varieties',
      'ethical choice to consume GM food food sovereignty',
      'economic healthcare costs farmer dependency biotechnology companies',
      'appraisal recommendation with justification',
    ],
    keywords: ['health', 'vitamin A', 'blindness', 'environmental', 'cross-pollination', 'invasive', 'ethical', 'choice', 'economic', 'cost', 'appraisal', 'recommendation'],
    feedbackHit: 'Criteria D rubric: positive and negative health with reasoning; two environmental impacts with consequences; more than one ethical statement; more than one economic impact with justification; appraisal linked to impacts.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: positive and negative health statements at least one with reasoning/example; two+ environmental impacts with consequence; more than one ethical statement; more than one economic impact with justification; appraisal linked to previous impacts.',
  },
}
