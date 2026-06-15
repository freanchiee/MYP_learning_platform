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

// ── Mark Scheme: Biology November 2019 — Variant 2 ────────────────────────
export const MS: MSRecord = {

  // ── Q1: Food Web (kelp forest) ─────────────────────────────────────────────
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
    exemplar: 'Producer: giant kelp, surfgrass, or phytoplankton. Secondary consumers (any two): sea star, rockfish, lingcod, sea otter, harbour seal.',
    keyConcepts: ['producer giant kelp surfgrass phytoplankton', 'secondary consumer sea star rockfish lingcod sea otter harbour seal'],
    keywords: ['producer', 'secondary consumer', 'kelp', 'surfgrass', 'phytoplankton', 'sea star', 'rockfish', 'lingcod', 'otter', 'seal'],
    feedbackHit: 'Correct producer and secondary consumers identified.',
    feedbackMiss: 'Producers make their own food through photosynthesis (giant kelp, surfgrass, phytoplankton). Secondary consumers eat primary consumers — e.g. sea star, rockfish, lingcod, sea otter, harbour seal.',
  },
  q1_d: {
    marks: 5,
    exemplar: 'Giant kelp population increases because there are fewer sea urchins eating the kelp. Sea otter population decreases because there are fewer sea urchins (a main prey) for the otters to eat, so the otters have less food.',
    keyConcepts: [
      'giant kelp population increases',
      'fewer sea urchins eating kelp',
      'sea otter population decreases',
      'fewer sea urchins as prey for otters',
      'otters have less food',
    ],
    keywords: ['kelp', 'increases', 'otter', 'decreases', 'urchin', 'fewer', 'prey', 'food'],
    feedbackHit: 'Good explanation of population changes through the food web.',
    feedbackMiss: 'Giant kelp: increases — fewer sea urchins grazing it. Sea otter: decreases — fewer sea urchins to eat, so less food for the otters. Award marks for each correctly reasoned chain of effect.',
  },
  q1_e: {
    marks: 1,
    exemplar: 'Break down dead organisms / recycle nutrients',
    keyConcepts: ['break down dead organisms', 'recycle nutrients', 'decompose'],
    keywords: ['decompose', 'break down', 'recycle', 'nutrients', 'dead'],
    feedbackHit: 'Correct — decomposers break down dead organisms and recycle nutrients back into the ecosystem.',
    feedbackMiss: 'Decomposers break down dead organisms (and waste) and recycle nutrients back into the water/seabed.',
  },
  q1_f: {
    marks: 1,
    exemplar: 'Not all relationships shown / no abiotic factors shown / no development over time / no indication of biomass or numbers',
    keyConcepts: ['relationships not shown', 'no abiotic factors', 'no development over time', 'no biomass or numbers'],
    keywords: ['limitation', 'abiotic', 'biomass', 'numbers', 'time', 'relationships'],
    feedbackHit: 'Valid limitation identified.',
    feedbackMiss: 'Limitations include: not all feeding relationships are shown, abiotic factors are not shown, there is no indication of population sizes or biomass, and it does not show changes over time.',
  },

  // ── Q2: Cells & Photosynthesis (moss) ──────────────────────────────────────
  q2_a: { type: 'mcq', correct: 1 },
  q2_b: {
    marks: 4,
    exemplar: 'Structure 1: Cell wall — provides support/structure/protection. Structure 2: Chloroplast — where photosynthesis occurs. (Also accept: large vacuole — stores water/cell sap and provides support.)',
    keyConcepts: [
      'cell wall support structure protection',
      'chloroplast photosynthesis',
      'vacuole stores water support',
    ],
    keywords: ['cell wall', 'chloroplast', 'vacuole', 'support', 'photosynthesis', 'water'],
    feedbackHit: 'Correct plant-only structures and functions identified.',
    feedbackMiss: 'Plant-only structures: cell wall (support/protection), chloroplast (photosynthesis), large vacuole (stores water/support). Do not accept chlorophyll as a structure.',
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
    exemplar: 'IV: temperature (of water bath). DV: volume of gas/CO₂ collected in the measuring cylinder. CVs (any two): volume of solutions, concentration of glucose, duration of reaction (25 min), starting temperature of solution.',
    keyConcepts: [
      'independent variable temperature',
      'dependent variable volume of CO2 measuring cylinder',
      'control variable volume solutions',
      'control variable concentration of glucose or duration',
    ],
    keywords: ['independent', 'dependent', 'control', 'temperature', 'cylinder', 'volume', 'CO2', 'concentration', 'duration'],
    feedbackHit: 'Correct variables identified with appropriate units/quantities.',
    feedbackMiss: 'IV: temperature (of water bath). DV: volume of CO₂ collected in the measuring cylinder — must indicate a quantity. CVs: volume of solutions, concentration/type of sugar, duration of reaction, starting temperature.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'No — the range is insufficient (only 3 temperatures, large 20 °C increment). No — no repeats so no mean can be calculated. No — too few numerical readings to draw a reliable graph.',
    keyConcepts: [
      'no insufficient data range',
      'no no repeats',
      'no too few numerical data',
    ],
    keywords: ['insufficient', 'range', 'repeats', 'numerical', 'data', 'graph', 'increment'],
    feedbackHit: 'Correct evaluation of data sufficiency.',
    feedbackMiss: 'The method does NOT give sufficient data: only 3 temperatures with a large 20 °C increment, no repeats are performed, and too few readings are produced — making it impossible to draw a reliable graph or calculate a mean.',
  },
  q3_c: {
    marks: 4,
    exemplar: 'Use a more precise measuring tool (e.g. read the measuring cylinder to the nearest cm³) — gives more precise/quantitative data. More trials/repeats at each temperature — reduces uncertainty/gives reliable data. Larger temperature range with smaller increments. Control the mass of yeast or glucose.',
    keyConcepts: [
      'use better measuring tool more precise',
      'more trials repeats reduce uncertainty',
      'larger temperature range smaller increments',
      'control mass of yeast or glucose',
    ],
    keywords: ['precise', 'quantitative', 'repeats', 'trials', 'range', 'reliable', 'control', 'mass'],
    feedbackHit: 'Two valid improvements with correctly linked justifications.',
    feedbackMiss: 'Improvements: (1) read the measuring cylinder precisely for quantitative data; (2) add repeats to reduce uncertainty; (3) larger temperature range with smaller increments; (4) control mass/concentration of yeast or glucose.',
  },

  // ── Q4: Different Sugars (sucrase) ────────────────────────────────────────
  q4_a: {
    marks: 2,
    exemplar: 'How does the type of sugar affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 25 minutes?',
    keyConcepts: [
      'research question different sugars',
      'measurable dependent variable CO2 volume cylinder',
    ],
    keywords: ['sugar', 'respiration', 'yeast', 'rate', 'CO2', 'volume', 'cylinder', 'measure'],
    feedbackHit: 'Research question correctly links different sugars to a measurable dependent variable.',
    feedbackMiss: 'The research question must link the type of sugar (IV) to a measurable outcome such as volume of CO₂ produced (DV).',
  },
  q4_b: {
    marks: 4,
    exemplar: 'Sucrose — it fits in the active site of the enzyme / sucrose is the correct shape / the other sugars do not fit. A correct use of the term "active site" or lock-and-key model.',
    keyConcepts: [
      'sucrose most likely respired',
      'sucrose fits active site of enzyme',
      'lock and key model',
      'other sugars wrong shape do not fit',
    ],
    keywords: ['sucrose', 'active site', 'lock and key', 'shape', 'fits', 'enzyme', 'sucrase'],
    feedbackHit: 'Correct prediction with valid lock-and-key justification.',
    feedbackMiss: 'Sucrose — because its shape matches the active site of sucrase (lock-and-key model). The other sugars have different shapes and cannot be broken down by sucrase.',
  },
  q4_c: {
    marks: 15,
    exemplar: 'Full Criterion B: IV: type of sugar (all 5); DV: volume of CO₂/measuring-cylinder reading; 2 CVs. Three repeats, mean calculated. Equipment to measure DV and control CVs. Complete replicable method measuring a rate.',
    keyConcepts: [
      'IV type of sugar five sugars',
      'DV volume CO2 measuring cylinder',
      'two control variables',
      'three repeats calculate mean',
      'complete replicable method',
    ],
    keywords: ['independent', 'dependent', 'control', 'repeat', 'mean', 'method', 'equipment', 'rate', 'sugar', 'CO2'],
    feedbackHit: 'Well-designed investigation with all required components.',
    feedbackMiss: 'Design must include: IV (type of sugar — all 5), DV (volume of CO₂ with units), 2 CVs, repeats with mean, equipment for the DV, and a clear replicable method.',
  },

  // ── Q5: Fermentation & Biofuels (potato peel + mango skin) ────────────────
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
    exemplar: 'Potato peel: Day 3; Mango skin: Day 5',
    blankAnswers: ['3', '5'],
    keyConcepts: ['potato peel day 3', 'mango skin day 5'],
    keywords: ['day 3', 'day 5'],
    feedbackHit: 'Correct days identified for peak ethanol production.',
    feedbackMiss: 'Potato peel peak = Day 3 (4.6 mg). Mango skin peak = Day 5 (9.4 mg).',
  },
  q5_d: {
    marks: 5,
    exemplar: 'Title: Mass of ethanol produced from food waste over time. X-axis: Day / day(s). Y-axis: Mass of ethanol / mg. Six potato peel points correctly plotted ± 0.2; all points correctly plotted.',
    keyConcepts: [
      'title linked to food waste and time',
      'x axis day time',
      'y axis mass of ethanol mg',
      'potato peel points correctly plotted',
    ],
    keywords: ['title', 'axis', 'label', 'units', 'mg', 'day', 'plot', 'points', 'graph'],
    feedbackHit: 'Graph correctly plotted with title and labelled axes.',
    feedbackMiss: 'Title must reference both types of food waste and time. X-axis: day. Y-axis: mass of ethanol / mg (unit required). Plot all 6 potato peel data points accurately.',
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
    exemplar: '23.1 mg',
    keyConcepts: ['23.1', 'total mango skin ethanol'],
    keywords: ['23.1', 'total', 'mango'],
    feedbackHit: 'Correct total calculated.',
    feedbackMiss: '2.1 + 5.0 + 9.4 + 3.6 + 1.6 + 1.4 = 23.1 mg',
  },
  q5_g: {
    marks: 1,
    exemplar: '5.7 mg',
    keyConcepts: ['5.7', 'difference'],
    keywords: ['5.7', 'difference'],
    feedbackHit: 'Correct difference calculated (must be given to 2 significant figures).',
    feedbackMiss: '23.1 − 17.4 = 5.7 mg (must be given to 2 significant figures).',
  },
  q5_h: {
    marks: 2,
    exemplar: 'Potato peel has the highest carbohydrate content and the lowest total ethanol. The sugars in the carbohydrate may not all be fermented by yeast. Or: nutritional data is about food, not the food waste used in the investigation.',
    keyConcepts: [
      'potato peel highest carbohydrate lowest ethanol',
      'sugars in carbohydrate not always fermented by yeast',
      'nutritional data about food not food waste',
    ],
    keywords: ['carbohydrate', 'fermented', 'yeast', 'sugars', 'food waste', 'nutritional'],
    feedbackHit: 'Valid reasons given for why the prediction is not supported.',
    feedbackMiss: 'Potato peel has MORE carbohydrate but produced LESS ethanol. Reasons: (1) not all carbohydrates can be fermented by yeast (much of potato is starch, not fermentable sugar); (2) nutritional data is for whole food, not the food waste portion used.',
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

  // ── Q6: Clotting Factor VIII & GM Bacteria ────────────────────────────────
  q6_a: { type: 'mcq', correct: 1 },
  q6_b: {
    marks: 4,
    exemplar: 'Stage 1: Human factor-VIII gene extracted. Stage 2: Plasmid DNA opened. Stage 3: Genetically modified bacteria reproduce. Stage 4: Extraction and purification of clotting factor VIII.',
    keyConcepts: [
      'stage 1 human factor VIII gene extracted',
      'stage 2 plasmid DNA opened',
      'stage 3 genetically modified bacteria reproduce',
      'stage 4 extraction purification clotting factor VIII',
    ],
    keywords: ['factor VIII gene', 'plasmid', 'bacteria reproduce', 'extraction', 'purification'],
    feedbackHit: 'All four stages correctly identified.',
    feedbackMiss: 'Stage 1: Human factor-VIII gene extracted. Stage 2: Plasmid DNA opened. Stage 3: Genetically modified bacteria reproduce. Stage 4: Extraction and purification of clotting factor VIII.',
  },
  q6_c: {
    marks: 2,
    exemplar: 'An injury during sport would cause bleeding. People with haemophilia cannot clot their blood properly to stop the bleeding. Injecting factor VIII beforehand means the blood can clot if an injury occurs, reducing the risk of dangerous bleeding.',
    keyConcepts: [
      'injury causes bleeding',
      'haemophilia blood cannot clot properly',
      'factor VIII allows clotting to stop bleeding',
    ],
    keywords: ['bleeding', 'clot', 'haemophilia', 'factor VIII', 'injury', 'injection'],
    feedbackHit: 'Correctly explains why factor VIII is injected before sport.',
    feedbackMiss: 'Sport risks injury and bleeding. People with haemophilia cannot clot their blood properly, so injecting factor VIII beforehand lets the blood clot and stops dangerous bleeding.',
  },
  q6_d: {
    marks: 14,
    exemplar: 'Individual: more available/affordable factor VIII; GM-made factor VIII is safer than plasma-derived (no risk of donor-borne infection); different forms allow personalised treatment. Community: more patients can access treatment; questions of fairness if only the wealthy benefit. Economic: mass production reduced cost; healthcare systems still face a large burden. Concluding appraisal linking two or more of the above.',
    keyConcepts: [
      'individual health more available affordable factor VIII',
      'GM safer than plasma derived no infection risk',
      'different forms personalised treatment',
      'community access improved',
      'fairness only wealthy benefit',
      'economic mass production reduced cost',
      'healthcare economic burden',
      'concluding appraisal opinion',
    ],
    keywords: ['individual', 'health', 'community', 'economic', 'cost', 'access', 'safety', 'fairness', 'opinion', 'conclusion'],
    feedbackHit: 'Comprehensive discussion covering all four aspects with a concluding appraisal.',
    feedbackMiss: 'Address: (1) individual health impacts, (2) community/social implications, (3) economic considerations, (4) concluding opinion on whether industrialization improved haemophilia treatment.',
  },
  q6_e: {
    marks: 2,
    exemplar: 'Pooling blood from many donors carried a risk of transmitting diseases (e.g. HIV, hepatitis) to patients. Consent and screening of donors raised concerns. Some religious or cultural groups may object to receiving donated blood. Limited supply meant not everyone could be treated fairly.',
    keyConcepts: [
      'risk of disease transmission from pooled blood',
      'consent and screening of donors',
      'religious or cultural objections to donated blood',
      'limited supply fairness',
    ],
    keywords: ['disease', 'transmission', 'HIV', 'hepatitis', 'consent', 'religious', 'donated blood', 'fairness'],
    feedbackHit: 'Two valid ethical implications identified.',
    feedbackMiss: 'Ethical implications: risk of transmitting disease (HIV/hepatitis) from pooled donor blood; consent and screening of donors; religious/cultural objections to donated blood; limited supply raising fairness issues.',
  },
}
