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
    exemplar: 'Bread: Carbohydrates. Avocado: Fats. Cheese: Fats or Proteins. Beans: Proteins.',
    keyConcepts: ['bread carbohydrates', 'avocado fats', 'cheese fat or protein', 'beans protein'],
    keywords: ['carbohydrates', 'fats', 'proteins', 'bread', 'avocado', 'cheese', 'beans'],
    feedbackHit: 'Correct: any two right pairings score 1 mark each (2 max).',
    feedbackMiss: 'Bread → Carbohydrates; Avocado → Fats; Cheese → Fats or Proteins; Beans → Proteins.',
    blankAnswers: ['Carbohydrates', 'Fats', 'Fats', 'Proteins'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'Fats are needed as a store of energy / for insulation (keeping warm) / to make cell membranes / to carry fat-soluble vitamins.',
    keyConcepts: ['fat function energy store insulation'],
    keywords: ['energy', 'store', 'insulation', 'warmth', 'membranes', 'vitamins'],
    feedbackHit: 'Correct role of fat stated.',
    feedbackMiss: 'Accept any one of: energy store, insulation/warmth, making cell membranes, carrying fat-soluble vitamins.',
  },
  q1_c: {
    marks: 2,
    exemplar: '50 g. Working: 14 g = 28%, so 1% = 0.5 g and 100% = 0.5 × 100 = 50 g. Units: grams or g.',
    keyConcepts: ['protein daily intake calculation', '14g equals 28 percent', 'total 50g'],
    keywords: ['50', 'g', 'grams', '28%', 'calculation'],
    feedbackHit: 'Correct answer 50 g with correct working. 1 mark for method, 1 mark for answer with units.',
    feedbackMiss: 'If 14 g = 28%, then 1% = 0.5 g, so 100% = 50 g. Answer must include units (grams/g).',
  },
  q1_d: {
    marks: 4,
    exemplar: '(Yes/partly) it contains the carbohydrate, fat and protein groups in the tables. It is a good source of protein (28% + 14%) and iron, which is useful for a long walk. However it provides very little vitamin C, so other foods are needed. (So) you would need to know what else was eaten during the day to fully judge.',
    keyConcepts: [
      'contains carbohydrate fat protein groups',
      'good source of protein and iron',
      'very little vitamin C needs other foods',
      'need to know other meals eaten',
    ],
    keywords: ['balanced', 'nutrient groups', 'vitamin C', 'iron', 'protein', 'carbohydrates', 'fat', 'other foods'],
    feedbackHit: '4 valid analytical points made about the nutrition data.',
    feedbackMiss: 'Award 1 mark each for: (1) contains carbohydrate, fat and protein groups; (2) high in protein and iron (good for a hike); (3) provides only 5% / 0% vitamin C so not complete on its own; (4) cannot fully judge without knowing other foods eaten that day.',
  },
  q1_e: {
    marks: 2,
    exemplar: 'Any two from: a diet high in saturated fat / cholesterol over a long time; being overweight or obese; lack of physical activity; smoking; genetic factors / family history.',
    keyConcepts: ['coronary heart disease causes', 'high saturated fat diet', 'overweight low activity smoking', 'genetic factors'],
    keywords: ['saturated fat', 'cholesterol', 'overweight', 'obesity', 'activity', 'exercise', 'smoking', 'genetic'],
    feedbackHit: 'Two valid causes of coronary heart disease stated.',
    feedbackMiss: 'Any two of: high saturated-fat/cholesterol diet over time / being overweight or obese / lack of physical activity / smoking / genetic or family-history factors.',
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
    keyConcepts: ['life processes single-celled parasite', 'MRS GREN movement respiration growth'],
    keywords: ['movement', 'respiration', 'response', 'growth', 'reproduction', 'excretion', 'nutrition', 'digestion'],
    feedbackHit: 'Two valid life processes listed.',
    feedbackMiss: 'Accept any two of: movement, respiration, response to stimulus, growth, reproduction, excretion, digestion/nutrition.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Heavy rain and flooding leaves lots of standing/pooled water where mosquitoes can breed, so the mosquito population increases. Any additional reasonable point: more mosquitoes means more bites and more transmission of Plasmodium; people may have less access to medical care after flooding.',
    keyConcepts: ['malaria outbreaks after rain flooding', 'standing water mosquito breeding', 'more mosquitoes more transmission'],
    keywords: ['standing water', 'flooding', 'mosquito', 'breed', 'bites', 'transmission', 'rain'],
    feedbackHit: 'Two valid reasons linking heavy rain/flooding to malaria outbreaks.',
    feedbackMiss: 'Award 1 mark for: standing water lets mosquitoes breed (more mosquitoes). Award 2nd mark for another valid point, e.g. more bites/transmission, or reduced medical care after flooding.',
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

  // ── Q3: Brine Shrimp Investigation ────────────────────────────────────────
  q3_a: {
    type: 'mcq',
    correct: 0,
  },
  q3_b: {
    marks: 1,
    exemplar: 'Any reasonable ethical consideration: the water should be similar to the brine shrimp\'s normal salty habitat; moderate environmental conditions; handled with care.',
    keyConcepts: ['ethical consideration brine shrimp', 'welfare natural habitat conditions'],
    keywords: ['habitat', 'handled', 'care', 'welfare', 'natural environment', 'conditions', 'salt water'],
    feedbackHit: 'Valid ethical consideration stated.',
    feedbackMiss: 'Accept any reasonable welfare point: water similar to natural salty habitat, moderate conditions, handled gently/carefully.',
  },
  q3_c: {
    marks: 3,
    exemplar: 'Independent variable: light level/intensity. Control variables (two max): water temperature; salt concentration of the water; where the brine shrimp start in the tank.',
    keyConcepts: ['independent variable light intensity', 'control variables temperature salt concentration starting position'],
    keywords: ['independent variable', 'light', 'intensity', 'control variable', 'temperature', 'salt concentration', 'starting position'],
    feedbackHit: 'Independent variable correctly identified plus two valid control variables.',
    feedbackMiss: 'Independent variable = light level/intensity (1 mark). Control variables = any two of: water temperature, salt concentration, starting position of brine shrimp (1 mark each).',
  },
  q3_d: {
    marks: 3,
    exemplar: 'Brine shrimp will prefer the lit side (more brine shrimp on the lit side after 10 minutes). Second mark: this is a measurable prediction. Third mark: linked to the described behaviour (they swim towards light to find algae near the surface) as a scientific explanation.',
    keyConcepts: ['hypothesis brine shrimp lit side phototaxis', 'measurable prediction', 'linked to feeding behaviour'],
    keywords: ['lit', 'light', 'prefer', 'towards light', 'more brine shrimp', 'algae', 'behaviour'],
    feedbackHit: 'Testable hypothesis with direction AND measurable prediction AND scientific explanation.',
    feedbackMiss: '1 mark: brine shrimp prefer light / move towards light. 1 mark: measurable prediction (more on lit side after 10 min). 1 mark: explanation linked to behaviour (swim to light to find algae near the surface).',
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
    exemplar: 'Any two: the tank is not the same as the natural environment (so natural behaviour may not be shown); the brine shrimp were not given time to acclimatise; placing many together might be an unnatural situation; any uncontrolled factor that should have been controlled.',
    keyConcepts: ['limitations brine shrimp investigation', 'artificial environment acclimation group size uncontrolled variables'],
    keywords: ['artificial', 'natural environment', 'acclimation', 'group size', 'uncontrolled', 'limitation'],
    feedbackHit: 'Two valid limitations identified.',
    feedbackMiss: 'Any two: artificial (not natural) environment; no acclimation time given; placing many brine shrimp together is unnatural; any uncontrolled variable named.',
  },
  q3_g: {
    marks: 2,
    exemplar: 'Any reasonable improvement: a wider range of light levels; better control of the control variables; time for acclimation. A correctly linked justification.',
    keyConcepts: ['improvement brine shrimp experiment', 'wider light range better control acclimation'],
    keywords: ['improvement', 'range', 'light levels', 'control variables', 'acclimation', 'justify'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: '1 mark: valid improvement (e.g. wider range of light levels). 1 mark: correct justification linked to the improvement.',
  },
  q3_h: {
    marks: 1,
    exemplar: 'Any different independent variable: water temperature; salt concentration of the water; starting position of the brine shrimp.',
    keyConcepts: ['different independent variable brine shrimp investigation'],
    keywords: ['temperature', 'salt concentration', 'starting position', 'independent variable'],
    feedbackHit: 'Valid alternative independent variable stated.',
    feedbackMiss: 'Accept any reasonable variable: water temperature, salt concentration, starting position of brine shrimp. Accept different light intensities only if light intensity was not given in part (g).',
  },

  // ── Q4: Firefly Flash Rate & Temperature ──────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Animal(ia).',
    keyConcepts: ['kingdom animalia fireflies insects beetles'],
    keywords: ['animal', 'animalia', 'kingdom'],
    feedbackHit: 'Correct kingdom stated.',
    feedbackMiss: 'The kingdom is Animalia (animal). Do not accept Arthropoda (that is a phylum).',
  },
  q4_b: {
    marks: 3,
    exemplar: 'Reactions are slower at low temperatures (or fireflies are not very active at low temperature), so they flash slowly. At warmer temperatures enzyme activity is higher / they reach an optimal temperature, so flash rate increases. At a temperature that is too hot the enzymes denature / metabolism stops working properly, so flash rate decreases.',
    keyConcepts: ['flash rate low temperature', 'optimal temperature enzyme activity', 'enzyme denaturation high temperature'],
    keywords: ['reactions', 'slower', 'low temperature', 'optimal', 'enzymes', 'denature', 'stop', 'metabolism'],
    feedbackHit: 'All three parts of the prediction explained with correct scientific reasoning.',
    feedbackMiss: '1 mark: reactions slower at low temps / not active. 1 mark: optimal temperature reached. 1 mark: enzymes denature / stop working above a certain temperature.',
  },
  q4_c: {
    marks: 1,
    exemplar: '(Table B selected — no mark for selection.) Justification: the mean should be calculated for each temperature; it is inappropriate to calculate a mean for each firefly across different temperatures.',
    keyConcepts: ['mean calculated per temperature not per firefly', 'appropriate table selection justification'],
    keywords: ['mean', 'temperature', 'calculate', 'inappropriate', 'firefly', 'justification'],
    feedbackHit: 'Justification correctly states means should be calculated per temperature.',
    feedbackMiss: 'The mark is for justification only. The mean should be calculated for each temperature (not for each individual firefly across different temperatures).',
  },
  q4_d: {
    marks: 3,
    exemplar: 'x-axis: temperature (with °C included). y-axis: number of flashes per minute.',
    keyConcepts: ['x-axis temperature Celsius', 'y-axis flashes per minute'],
    keywords: ['temperature', '°C', 'flashes per minute', 'x-axis', 'y-axis', 'axis labels'],
    feedbackHit: 'Both axis labels correct with °C unit included on x-axis.',
    feedbackMiss: 'x-axis: Temperature / °C (1 mark for label, 1 mark for °C unit). y-axis: Number of flashes per minute (1 mark).',
  },
  q4_e: {
    marks: 2,
    exemplar: 'The data in the graph supports the middle part of the prediction (flash rate increases over the temperature range studied, 15–25°C). The method gave insufficient data to test the flash rate at higher temperatures (so the method is not fully valid); there were insufficient temperatures investigated.',
    keyConcepts: ['data supports middle prediction', 'insufficient temperatures investigated', 'validity comment'],
    keywords: ['supports', 'middle', 'increases', 'insufficient', 'higher temperatures', 'not valid', 'validity'],
    feedbackHit: 'Comment on what data supports and what data is insufficient to fully test the prediction.',
    feedbackMiss: '1 mark: data supports increasing trend (middle of prediction). 1 mark: insufficient higher temperatures investigated / method cannot test the "decrease" part of the prediction.',
  },

  // ── Q5: Earthworm Investigation Design ────────────────────────────────────
  q5_: {
    marks: 15,
    exemplar: 'Award marks using the criteria B rubric: Identification of variables (0–4), Hypothesis (0–3), Manipulation of variables/method description (0–4), Collection of data (0–2), Ethical consideration (0–2). Full marks: Independent, dependent AND at least two control variables identified; testable hypothesis linked to variables with scientific explanation (e.g. earthworms move to the damper/darker side because they prefer moist, dark soil); complete replicable method using the choice chamber; three trials with ≥4 conditions; relevant ethical statement (handle gently with damp hands, return to soil).',
    keyConcepts: [
      'independent variable chosen factor',
      'dependent variable number of earthworms per section',
      'two control variables',
      'testable hypothesis with explanation',
      'complete method replicable',
      'sufficient data collection three trials',
      'ethical consideration earthworm welfare',
    ],
    keywords: ['independent variable', 'dependent variable', 'control variable', 'hypothesis', 'method', 'trials', 'ethical', 'choice chamber', 'earthworms'],
    feedbackHit: 'Criteria B rubric: variables clearly identified, hypothesis testable with explanation, method replicable and complete, sufficient data, ethical consideration included.',
    feedbackMiss: 'Use Criteria B rubric scoring. Level 4: independent + dependent + 2 control variables, testable hypothesis with explanation, complete and replicable method with 3 trials ≥4 conditions, ethical consideration.',
  },

  // ── Q6: Grassland Food Web ────────────────────────────────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Grasshoppers will decrease because there is more competition for grass / food.',
    keyConcepts: ['grasshoppers decrease competition voles', 'interspecific competition food web'],
    keywords: ['decrease', 'competition', 'food', 'grass', 'voles'],
    feedbackHit: 'Grasshoppers decrease with correct reason (competition with voles for grass/food).',
    feedbackMiss: 'Grasshoppers will decrease — more competition with voles for the same grass/food source.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Grasshoppers may decrease: with fewer kestrels, more voles and shrews survive, and shrews eat grasshoppers, so there is more predation of grasshoppers. Accept either: fewer kestrels → more shrews → more predation → grasshoppers decrease; OR a valid increase argument with reasoning. Correct use of a term from: predator, prey, predation, trophic level, consumer.',
    keyConcepts: ['grasshopper population change fewer kestrels', 'predator prey chain kestrels shrews grasshoppers'],
    keywords: ['kestrels', 'shrews', 'predator', 'prey', 'predation', 'increase', 'decrease', 'trophic level', 'consumer'],
    feedbackHit: 'Correct prediction with valid food-web chain reasoning AND scientific term used.',
    feedbackMiss: '1 mark: correct prediction with valid chain reasoning (fewer kestrels → more shrews → more predation of grasshoppers → grasshoppers fall, or a valid reverse with reasoning). 1 mark: correct scientific term (predator, prey, predation, trophic level, consumer).',
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
    exemplar: 'First mark: the populations of both grasshoppers and shrews go up and down (oscillate) over time. Any two additional points: the maximum population is about the same number each cycle; the maximum for grasshoppers is higher than for shrews; the maximum for shrews occurs after the maximum for grasshoppers; the cycles are regularly spaced over time. Explanation (3 max): as the grasshopper population grows there is more food for shrews, so the shrew population increases; there is then more predation of grasshoppers so the grasshopper population falls; with fewer grasshoppers there is less food for shrews so their population falls; with fewer shrews there is less predation, so the grasshopper population recovers and the cycle repeats.',
    keyConcepts: [
      'both populations oscillate increase decrease over time',
      'shrew peak after grasshopper peak',
      'grasshoppers increase food for shrews',
      'more predation grasshoppers fall',
      'less food shrews fall',
      'grasshoppers recover cycle repeats',
    ],
    keywords: ['oscillate', 'increase', 'decrease', 'peak', 'population', 'predation', 'food', 'cycle', 'shrews', 'grasshoppers'],
    feedbackHit: 'Description of oscillating trend PLUS 2 additional observations PLUS full predator-prey explanation chain.',
    feedbackMiss: '1 mark: both populations oscillate. 2 marks (any two): same max / grasshoppers higher / shrews peak after grasshoppers / regular cycles. 3 marks for explanation chain: grasshoppers grow → food for shrews → shrews increase → more predation → grasshoppers fall → less food → shrews fall → grasshoppers recover.',
  },

  // ── Q7: Fertilizers, Genes & Salt-Tolerant Crops ──────────────────────────
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
    exemplar: 'Table with data for at least four crops. Columns for crop name, trait added (salt tolerance), country, and year (in any order). Data ordered logically in at least one column (e.g. increasing year, or alphabetical by crop/country).',
    keyConcepts: [
      'table four crops data',
      'columns crop trait country year',
      'logical order year alphabetical',
    ],
    keywords: ['table', 'crop', 'trait', 'country', 'year', 'rice', 'tomato', 'barley', 'wheat', 'soybean', 'quinoa'],
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

  // ── Q8: Vaccine-Producing GM Bananas Evaluation ───────────────────────────
  q8_: {
    marks: 14,
    exemplar: 'Criteria D rubric (0–14). Health: positive and negative health impacts with at least one supported by reasoning or example (e.g. edible-vaccine bananas protect people without injections or refrigeration; but dose is hard to control and long-term GM effects are unknown). Environmental: two environmental impacts with at least one linked to a consequence (less need for cold-chain transport and needles; but cross-pollination could spread vaccine genes into ordinary bananas/food supply). Ethical: more than one ethical statement (saves lives / reaches people without access to injected vaccines vs people may eat the vaccine without consent or full information). Economic: more than one economic impact with at least one justification (cheaper to grow and distribute vs high development cost / dependency on biotech companies / risk to banana exports). Appraisal: a recommendation linked to the impacts discussed.',
    keyConcepts: [
      'health edible vaccine no injection no refrigeration vs uncontrolled dose unknown long-term effects',
      'environmental less cold-chain needles vs cross-pollination vaccine genes spread',
      'ethical saves lives reaches remote people vs consent food sovereignty',
      'economic cheaper distribution vs development cost dependency export risk',
      'appraisal recommendation with justification',
    ],
    keywords: ['health', 'vaccine', 'dose', 'refrigeration', 'environmental', 'cross-pollination', 'ethical', 'consent', 'economic', 'cost', 'appraisal', 'recommendation'],
    feedbackHit: 'Criteria D rubric: positive and negative health with reasoning; two environmental impacts with consequences; more than one ethical statement; more than one economic impact with justification; appraisal linked to impacts.',
    feedbackMiss: 'Use Criteria D rubric. Level 4: positive and negative health statements at least one with reasoning/example; two+ environmental impacts with consequence; more than one ethical statement; more than one economic impact with justification; appraisal linked to previous impacts.',
  },
}
