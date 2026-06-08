import 'server-only'

// ── Inline types (mirrors biology convention) ──────────────────────────────
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

// ── Mark Scheme: Biology November 2019 ────────────────────────────────────
export const MS: MSRecord = {

  // ── Q1: Food Web ──────────────────────────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Food web',
    keyConcepts: ['food web'],
    keywords: ['food', 'web', 'trophic'],
    feedbackHit: 'Correct — this type of diagram showing many feeding relationships is called a food web.',
    feedbackMiss: 'This model is called a food web (also accept "trophic web"). A food chain shows only one feeding pathway; a food web shows many.',
  },
  q1_b: {
    marks: 1,
    exemplar: 'Energy flow through the system / direction of energy transfer / what organisms eat other organisms / predation',
    keyConcepts: ['energy flow', 'energy transfer', 'what eats what', 'predation'],
    keywords: ['energy', 'flow', 'transfer', 'predation', 'feeding'],
    feedbackHit: 'Correct — arrows represent the flow of energy (or feeding relationships) from prey to predator.',
    feedbackMiss: 'The arrows represent the flow of energy through the ecosystem — from the organism being eaten to the organism doing the eating.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Producer: tree, grass, or shrub. Secondary consumers (any two): shrike, baboon, caracal, lion, vulture, leopard.',
    keyConcepts: ['producer tree grass shrub', 'secondary consumer shrike baboon caracal lion vulture leopard'],
    keywords: ['producer', 'secondary consumer', 'tree', 'grass', 'shrub', 'shrike', 'baboon', 'caracal', 'lion', 'vulture', 'leopard'],
    feedbackHit: 'Correct producer and secondary consumers identified.',
    feedbackMiss: 'Producers make their own food through photosynthesis (tree, grass, shrub). Secondary consumers eat primary consumers — e.g. shrike, baboon, caracal, lion, vulture, leopard.',
  },
  q1_d: {
    marks: 5,
    exemplar: 'Shrub population increases because there are fewer impalas eating the shrub. Baboon population decreases because leopards eat more baboons (leopards switch prey as there are fewer impalas).',
    keyConcepts: [
      'shrub population increases',
      'fewer impalas eating shrub',
      'baboon population decreases',
      'leopards eat more baboons',
      'leopards no longer eat impala',
    ],
    keywords: ['shrub', 'increases', 'baboon', 'decreases', 'leopard', 'impala', 'fewer', 'prey'],
    feedbackHit: 'Good explanation of population changes through the food web.',
    feedbackMiss: 'Shrub: increases — fewer impalas eating it. Baboon: decreases — leopards switch to eating more baboons since impala numbers fell. Award marks for each correctly reasoned chain of effect.',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Break down dead organisms / recycle nutrients',
    keyConcepts: ['break down dead organisms', 'recycle nutrients', 'decompose'],
    keywords: ['decompose', 'break down', 'recycle', 'nutrients', 'dead'],
    feedbackHit: 'Correct — decomposers break down dead organisms and recycle nutrients back into the ecosystem.',
    feedbackMiss: 'Decomposers break down dead organisms (and waste) and recycle nutrients back into the soil.',
  },
  q1_f: {
    marks: 1,
    exemplar: 'Not all relationships shown / no abiotic factors shown / no development over time / no indication of biomass or numbers',
    keyConcepts: ['relationships not shown', 'no abiotic factors', 'no development over time', 'no biomass or numbers'],
    keywords: ['limitation', 'abiotic', 'biomass', 'numbers', 'time', 'relationships'],
    feedbackHit: 'Valid limitation identified.',
    feedbackMiss: 'Limitations include: not all feeding relationships are shown, abiotic factors are not shown, there is no indication of population sizes or biomass, and it does not show changes over time.',
  },

  // ── Q2: Cells & Photosynthesis ────────────────────────────────────────────
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 4,
    exemplar: 'Structure 1: Cell wall — provides support/structure/protection. Structure 2: Chloroplast — where photosynthesis occurs. (Also accept: large central vacuole — stores water and provides support.)',
    keyConcepts: [
      'cell wall support structure protection',
      'chloroplast photosynthesis',
      'vacuole stores water support',
    ],
    keywords: ['cell wall', 'chloroplast', 'vacuole', 'support', 'photosynthesis', 'water'],
    feedbackHit: 'Correct plant-only structures and functions identified.',
    feedbackMiss: 'Plant-only structures: cell wall (support/protection), chloroplast (photosynthesis), large central vacuole (stores water/support). Do not accept chlorophyll as a structure.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Chlorophyll absorbs light. A correct use of the term photosynthesis. Light energy is transformed into chemical energy. To combine carbon dioxide and water. Glucose and oxygen are formed.',
    keyConcepts: [
      'chlorophyll absorbs light',
      'photosynthesis',
      'light energy transformed to chemical energy',
      'carbon dioxide and water converted to glucose and oxygen',
    ],
    keywords: ['chlorophyll', 'absorbs', 'light', 'photosynthesis', 'energy', 'glucose', 'oxygen', 'carbon dioxide', 'water'],
    feedbackHit: 'Good description of chlorophyll\'s role in photosynthesis.',
    feedbackMiss: 'Chlorophyll absorbs light energy. This drives photosynthesis — light energy is converted to chemical energy to combine CO₂ and water, producing glucose and oxygen.',
  },
  q2_d: {
    marks: 3,
    exemplar: 'Sugar (glucose) is transported (down the phloem) from where it is produced to where it is used. A correct use of the term translocation or phloem.',
    keyConcepts: [
      'glucose transported from leaves to roots',
      'phloem',
      'translocation',
    ],
    keywords: ['transport', 'phloem', 'translocation', 'glucose', 'leaves', 'roots', 'moves'],
    feedbackHit: 'Correct description of glucose transport via phloem/translocation.',
    feedbackMiss: 'Glucose produced in leaves by photosynthesis moves via the phloem (translocation) down to the roots where it is used for growth.',
  },

  // ── Q3: Yeast Respiration ─────────────────────────────────────────────────
  q3_a: {
    marks: 4,
    exemplar: 'IV: temperature (of water bath). DV: size/volume of balloon or volume of CO₂ produced. CVs (any two): volume of solutions, concentration of sugar, duration of reaction, starting temperature of solution.',
    keyConcepts: [
      'independent variable temperature',
      'dependent variable size volume balloon CO2',
      'control variable volume solutions',
      'control variable concentration of sugar or duration',
    ],
    keywords: ['independent', 'dependent', 'control', 'temperature', 'balloon', 'volume', 'CO2', 'concentration', 'duration'],
    feedbackHit: 'Correct variables identified with appropriate units/quantities.',
    feedbackMiss: 'IV: temperature (of water bath). DV: volume/size of balloon or volume of CO₂ produced — must indicate a quantity. CVs: volume of solutions, concentration/type of sugar, duration of reaction, starting temperature.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'No — the range is insufficient (only 3 temperatures, large increment). No — no repeats so no mean can be calculated. No — no numerical data generated so no graph is possible.',
    keyConcepts: [
      'no insufficient data range',
      'no no repeats',
      'no no numerical data',
    ],
    keywords: ['insufficient', 'range', 'repeats', 'numerical', 'data', 'graph', 'increment'],
    feedbackHit: 'Correct evaluation of data sufficiency.',
    feedbackMiss: 'The method does NOT give sufficient data: only 3 temperatures with a large increment, no repeats are performed, and no numerical data is produced — making it impossible to draw a graph or calculate a mean.',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Use a better measuring tool (e.g. syringe to measure CO₂ volume directly) — gives more precise/quantitative data. More trials/repeats at each temperature — reduces uncertainty/gives reliable data. Larger temperature range. Control the mass of yeast or sugar.',
    keyConcepts: [
      'use better measuring tool more precise',
      'more trials repeats reduce uncertainty',
      'larger temperature range',
      'control mass of yeast or sugar',
    ],
    keywords: ['precise', 'quantitative', 'repeats', 'trials', 'range', 'reliable', 'control', 'mass'],
    feedbackHit: 'Two valid improvements with correctly linked justifications.',
    feedbackMiss: 'Improvements: (1) use a more precise measuring tool for quantitative data; (2) add repeats to reduce uncertainty; (3) larger temperature range; (4) control mass/concentration of yeast or sugar.',
  },

  // ── Q4: Different Sugars ──────────────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'How does the type of sugar affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 15 minutes?',
    keyConcepts: [
      'research question different sugars',
      'measurable dependent variable CO2 volume balloon',
    ],
    keywords: ['sugar', 'respiration', 'yeast', 'rate', 'CO2', 'volume', 'balloon', 'measure'],
    feedbackHit: 'Research question correctly links different sugars to a measurable dependent variable.',
    feedbackMiss: 'The research question must link the type of sugar (IV) to a measurable outcome such as volume of CO₂ or size of balloon (DV).',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Glucose — it fits in the active site of the enzyme / glucose is the correct shape / the other sugars do not fit. A correct use of the term "active site" or lock-and-key model.',
    keyConcepts: [
      'glucose most likely respired',
      'glucose fits active site of enzyme',
      'lock and key model',
      'other sugars wrong shape do not fit',
    ],
    keywords: ['glucose', 'active site', 'lock and key', 'shape', 'fits', 'enzyme', 'zymase'],
    feedbackHit: 'Correct prediction with valid lock-and-key justification.',
    feedbackMiss: 'Glucose — because its shape matches the active site of zymase (lock-and-key model). The other sugars have different shapes and cannot be broken down by zymase.',
  },
  q4_c: {
    marks: 15,
    exemplar: 'Full Criterion B: IV: type of sugar (all 5); DV: volume of CO₂/balloon size; 2 CVs. Three repeats, mean calculated. Equipment to measure DV and control CVs. Complete replicable method measuring a rate.',
    keyConcepts: [
      'IV type of sugar five sugars',
      'DV volume CO2 balloon size',
      'two control variables',
      'three repeats calculate mean',
      'complete replicable method',
    ],
    keywords: ['independent', 'dependent', 'control', 'repeat', 'mean', 'method', 'equipment', 'rate', 'sugar', 'CO2'],
    feedbackHit: 'Well-designed investigation with all required components.',
    feedbackMiss: 'Design must include: IV (type of sugar — all 5), DV (volume of CO₂ or balloon size with units), 2 CVs, repeats with mean, equipment for the DV, and a clear replicable method.',
  },

  // ── Q5: Fermentation & Biofuels ──────────────────────────────────────────
  q5_a: {
    marks: 1,
    exemplar: 'Biofuels are renewable / fossil fuels are non-renewable',
    keyConcepts: ['biofuels renewable', 'fossil fuels non-renewable'],
    keywords: ['renewable', 'non-renewable', 'sustainable', 'carbon neutral'],
    feedbackHit: 'Correct advantage of biofuels identified.',
    feedbackMiss: 'Biofuels are renewable (can be regrown) while fossil fuels are non-renewable (finite). Accept "less pollution" only if linked to production, not combustion.',
  },
  q5_b: {
    marks: 2,
    exemplar: 'If crops were used there would be less food for eating / waste would otherwise be thrown away / less waste in landfills / agricultural land could be used for crop production.',
    keyConcepts: [
      'food waste otherwise thrown away',
      'less waste in landfills',
      'food crops kept for eating',
      'agricultural land for food not biofuel',
    ],
    keywords: ['waste', 'food', 'landfill', 'crops', 'agricultural', 'land', 'thrown away'],
    feedbackHit: 'Two valid advantages of using food waste over food crops.',
    feedbackMiss: 'Advantages: waste would otherwise go to landfill; using food crops reduces food supply; agricultural land can be dedicated to food production.',
  },
  q5_c: {
    marks: 1,
    exemplar: 'Water chestnut: Day 3; Pineapple: Day 5',
    blankAnswers: ['3', '5'],
    keyConcepts: ['water chestnut day 3', 'pineapple day 5'],
    keywords: ['day 3', 'day 5'],
    feedbackHit: 'Correct days identified for peak ethanol production.',
    feedbackMiss: 'Water chestnut peak = Day 3 (4.5 mg). Pineapple peak = Day 5 (9.0 mg).',
  },
  q5_d: {
    marks: 5,
    exemplar: 'Title: Mass of ethanol produced from food waste over time. X-axis: Day / day(s). Y-axis: Mass of ethanol / mg. Three water chestnut points correctly plotted ± 0.2; all points correctly plotted.',
    keyConcepts: [
      'title linked to food waste and time',
      'x axis day time',
      'y axis mass of ethanol mg',
      'water chestnut points correctly plotted',
    ],
    keywords: ['title', 'axis', 'label', 'units', 'mg', 'day', 'plot', 'points', 'graph'],
    feedbackHit: 'Graph correctly plotted with title and labelled axes.',
    feedbackMiss: 'Title must reference both types of food waste and time. X-axis: day. Y-axis: mass of ethanol / mg (unit required). Plot all 6 water chestnut data points accurately.',
  },
  q5_e: {
    marks: 6,
    exemplar: 'Trend 1: Ethanol production increases initially (until day 5). Yeast population increases so more respiration occurs. Trend 2: After day 5, ethanol production decreases. Food supply becomes limited so less respiration; or ethanol accumulates to toxic levels causing yeast cells to die / enzymes denatured.',
    keyConcepts: [
      'trend 1 ethanol increases initially until day 5',
      'yeast population increases more respiration',
      'trend 2 ethanol decreases after day 5',
      'food supply limited less respiration',
      'ethanol toxic yeast cells die enzymes denatured',
    ],
    keywords: ['increases', 'decreases', 'yeast', 'population', 'respiration', 'food', 'limited', 'toxic', 'enzymes', 'denatured'],
    feedbackHit: 'Two trends correctly identified with valid scientific explanations.',
    feedbackMiss: 'Trend 1: increases to day 5 — yeast population growing → more respiration. Trend 2: decreases after day 5 — food supply limited OR ethanol toxic → yeast dies/enzymes denature.',
  },
  q5_f: {
    marks: 1,
    exemplar: '22.9 mg',
    keyConcepts: ['22.9', 'total pineapple ethanol'],
    keywords: ['22.9', 'total', 'pineapple'],
    feedbackHit: 'Correct total calculated.',
    feedbackMiss: '2.3 + 5.6 + 9.0 + 3.4 + 1.3 + 1.3 = 22.9 mg',
  },
  q5_g: {
    marks: 1,
    exemplar: '5.0 mg',
    keyConcepts: ['5.0', 'difference'],
    keywords: ['5.0', 'difference'],
    feedbackHit: 'Correct difference calculated (must be given to 2 significant figures).',
    feedbackMiss: '22.9 − 17.9 = 5.0 mg (must be given to 2 significant figures).',
  },
  q5_h: {
    marks: 2,
    exemplar: 'Water chestnut has the highest carbohydrate content and the lowest total ethanol. The sugars in the carbohydrate may not all be fermented by yeast. Or: nutritional data is about food, not food waste used in the investigation.',
    keyConcepts: [
      'water chestnut highest carbohydrate lowest ethanol',
      'sugars in carbohydrate not always fermented by yeast',
      'nutritional data about food not food waste',
    ],
    keywords: ['carbohydrate', 'fermented', 'yeast', 'sugars', 'food waste', 'nutritional'],
    feedbackHit: 'Valid reasons given for why the prediction is not supported.',
    feedbackMiss: 'Water chestnut has MORE carbohydrate but produced LESS ethanol. Reasons: (1) not all carbohydrates can be fermented by yeast; (2) nutritional data is for whole food, not the food waste portion used.',
  },
  q5_i: {
    marks: 4,
    exemplar: 'Variables (2 max): storage of waste / whether food been dried completely / different mass/volume of food or yeast / time in water bath. Linked effects: more food gives more ethanol; longer time gives more ethanol; higher temperature gives faster rate.',
    keyConcepts: [
      'uncontrolled variable storage of waste',
      'uncontrolled variable mass amount volume food yeast',
      'uncontrolled variable time in water bath',
      'effect more food more ethanol',
      'effect temperature faster rate',
    ],
    keywords: ['variable', 'controlled', 'mass', 'volume', 'time', 'temperature', 'effect', 'ethanol', 'storage'],
    feedbackHit: 'Two uncontrolled variables identified with linked effects.',
    feedbackMiss: 'Uncontrolled variables: storage of waste (food might already have started fermenting), mass/volume of food or yeast (more → more ethanol), time in water bath (longer → more ethanol). Each variable must be paired with a plausible effect.',
  },

  // ── Q6: Diabetes & Insulin ────────────────────────────────────────────────
  q6_a: { type: 'mcq', correct: 1 },
  q6_b: {
    marks: 4,
    exemplar: 'Stage 1: Human insulin gene extracted. Stage 2: Plasmid DNA opened. Stage 3: Genetically modified bacteria reproduce. Stage 4: Extraction and purification of human insulin.',
    keyConcepts: [
      'stage 1 human insulin gene extracted',
      'stage 2 plasmid DNA opened',
      'stage 3 genetically modified bacteria reproduce',
      'stage 4 extraction purification human insulin',
    ],
    keywords: ['insulin gene', 'plasmid', 'bacteria reproduce', 'extraction', 'purification'],
    feedbackHit: 'All four stages correctly identified.',
    feedbackMiss: 'Stage 1: Human insulin gene extracted. Stage 2: Plasmid DNA opened. Stage 3: Genetically modified bacteria reproduce. Stage 4: Extraction and purification of human insulin.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'Eating increases blood glucose. Insulin reduces blood sugar. People with diabetes do not produce or respond to insulin. Fast-acting insulin means people with diabetes do not need to plan ahead.',
    keyConcepts: [
      'eating increases blood glucose',
      'insulin reduces blood sugar',
      'people with diabetes do not produce respond to insulin',
    ],
    keywords: ['blood glucose', 'insulin', 'eating', 'diabetes', 'fast-acting', 'regulate'],
    feedbackHit: 'Correctly explains why fast-acting insulin is needed before a meal.',
    feedbackMiss: 'Eating raises blood glucose. People with diabetes cannot produce/respond to insulin to lower it. Taking fast-acting insulin before a meal allows the blood glucose rise to be managed immediately.',
  },
  q6_d: {
    marks: 14,
    exemplar: 'Individual: more available/affordable insulin, different forms for personalised treatment, death rate dropped dramatically. Community: more people can access insulin; diabetes prevalence increased from 108M to 422M. Economic: mass production reduced cost; healthcare systems face large burden. Concluding appraisal linking two or more of the above.',
    keyConcepts: [
      'individual health more available affordable insulin',
      'different forms personalised treatment',
      'death rate dropped',
      'community access improved',
      'diabetes prevalence increased 108 to 422 million',
      'economic mass production reduced cost',
      'healthcare economic burden',
      'concluding appraisal opinion',
    ],
    keywords: ['individual', 'health', 'community', 'economic', 'cost', 'access', 'death rate', 'prevalence', 'opinion', 'conclusion'],
    feedbackHit: 'Comprehensive discussion covering all four aspects with a concluding appraisal.',
    feedbackMiss: 'Address: (1) individual health impacts, (2) community/social implications, (3) economic considerations, (4) concluding opinion on whether industrialization improved diabetes management.',
  },
  q6_e: {
    marks: 2,
    exemplar: 'Some religious groups may have concerns. Vegetarians or others may object to using animals. Concerns that diseases could be transmitted. DNA crossing the species barrier.',
    keyConcepts: [
      'religious concerns',
      'animal welfare vegetarians',
      'disease transmission',
      'DNA crossing species barrier',
    ],
    keywords: ['religious', 'ethical', 'animal', 'disease', 'transmission', 'species', 'vegetarian'],
    feedbackHit: 'Two valid ethical implications identified.',
    feedbackMiss: 'Ethical implications: religious objections to pig tissue; animal welfare concerns; risk of transmitting animal diseases to humans; concerns about DNA crossing the species barrier.',
  },
}
