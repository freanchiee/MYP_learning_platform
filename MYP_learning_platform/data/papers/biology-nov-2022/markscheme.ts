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

  // Q1 — Food Webs & Ecosystems

  q1_a: {
    marks: 1,
    exemplar: 'Sea urchin OR small fish OR large crab.',
    keyConcepts: ['food web predator prey sea otter kelp ecosystem'],
    keywords: ['sea urchin', 'small fish', 'large crab', 'prey', 'sea otter'],
    feedbackHit: 'Correct prey organism of the sea otter identified.',
    feedbackMiss: 'Sea otters are predators — they eat sea urchins, small fish, or large crabs in this food web.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Producers carry out photosynthesis OR producers can convert/capture light energy [1]. Into sugar or chemical energy or food for a consumer [1]. (WTTE — accept references to autotrophs for mp1.)',
    keyConcepts: ['producers photosynthesis light energy sugar food web autotrophs'],
    keywords: ['producers', 'photosynthesis', 'light energy', 'sugar', 'glucose', 'autotroph', 'food'],
    feedbackHit: 'Both roles of producers correctly stated.',
    feedbackMiss: 'Producers photosynthesise (convert light energy) to make sugar/glucose, which is food for consumers.',
  },

  q1_c: {
    marks: 1,
    exemplar: 'Accept any reasonable suggestion: conservation zones or creation of national parks; captive breeding program; reintroduction into the wild. (The role of humans in the action must be clear.)',
    keyConcepts: ['conservation human action population increase species protection'],
    keywords: ['conservation zone', 'national park', 'captive breeding', 'reintroduction', 'protection'],
    feedbackHit: 'Valid human conservation action identified.',
    feedbackMiss: 'Human actions include creating protected areas (national parks), captive breeding programmes, or reintroducing sea otters from other regions.',
  },

  q1_d: {
    marks: 4,
    exemplar: 'Number of sea urchins has decreased [1]. (As) more are being eaten by the sea otters [1]. There are fewer sea urchins to eat kelp [1]. (So) the number of kelp (plants) has increased [1]. (Accept reference to prey with respect to sea urchins and otters eating them.)',
    keyConcepts: ['pyramid of numbers population change sea otter sea urchin kelp predator prey'],
    keywords: ['sea urchins decreased', 'eaten by sea otters', 'fewer sea urchins', 'kelp increased', 'predation'],
    feedbackHit: 'Complete chain of population effects correctly explained using the pyramids.',
    feedbackMiss: 'More sea otters → eat more sea urchins → sea urchin population decreases → fewer sea urchins eat kelp → kelp population increases.',
  },

  // Q2 — Nutrition, Digestion & Transport

  q2_a: {
    marks: 1,
    exemplar: 'Carbohydrates OR fats OR sugars OR a named example. ("Protein" alongside a correct answer is a CON — do not award.)',
    keyConcepts: ['nutrition energy source nutrients carbohydrates fats'],
    keywords: ['carbohydrates', 'fats', 'sugars', 'glucose', 'energy source'],
    feedbackHit: 'Correct energy-providing nutrient identified.',
    feedbackMiss: 'Under normal circumstances, carbohydrates (or fats) are the main energy sources. Proteins are used for growth and repair, not primarily for energy.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Amino acids.',
    keyConcepts: ['protein digestion proteases amino acids stomach'],
    keywords: ['amino acids', 'proteases', 'protein digestion'],
    feedbackHit: 'Correct product of protein digestion.',
    feedbackMiss: 'Proteases break proteins into their monomer units — amino acids (not glucose or fatty acids).',
  },

  q2_c: {
    marks: 2,
    exemplar: 'A [1]. The optimum pH is acidic or 1.9 [1]. (No ECF — first mark must be correct for second to be awarded.)',
    keyConcepts: ['enzyme activity pH optimum stomach acid protease'],
    keywords: ['enzyme A', 'acidic', 'pH 1.9', 'optimum pH', 'stomach', 'hydrochloric acid'],
    feedbackHit: 'Correct enzyme selected with accurate pH justification.',
    feedbackMiss: 'The stomach produces hydrochloric acid (pH ≈ 1.9). Enzyme A has its peak activity at the lowest (most acidic) pH on the graph — that is the stomach protease.',
  },

  q2_d: {
    marks: 2,
    exemplar: 'Diffusion [1] — (passively) moved from an area of high concentration to an area of lower concentration [1]. OR Active transport [1] — (actively) moved from an area of low concentration to an area of higher concentration [1]. (Accept facilitated or passive diffusion.)',
    keyConcepts: ['diffusion active transport absorption bloodstream concentration gradient'],
    keywords: ['diffusion', 'active transport', 'high concentration', 'low concentration', 'bloodstream', 'absorption'],
    feedbackHit: 'Correct transport process named with direction of movement.',
    feedbackMiss: 'Most nutrients enter by diffusion (high to low concentration). Some use active transport (low to high, requiring energy).',
  },

  q2_e: {
    marks: 4,
    exemplar: 'Accept any two correct features [max 2]: no nucleus; haemoglobin; biconcave disc or curved shape; small and flexible. Accept any two correctly linked explanations [max 2]: to create more space (for haemoglobin); binds to oxygen (to transport around the body); maximize surface area (to volume ratio); can pass through capillaries. (Do not accept arteries or veins.)',
    keyConcepts: ['red blood cell adaptations haemoglobin biconcave disc surface area oxygen transport'],
    keywords: ['no nucleus', 'haemoglobin', 'biconcave disc', 'small and flexible', 'surface area', 'oxygen', 'capillaries'],
    feedbackHit: 'Two structural features and correct linked explanations given.',
    feedbackMiss: 'RBCs: no nucleus (more space for haemoglobin); biconcave disc shape (maximizes surface area for oxygen uptake); small and flexible (pass through capillaries).',
  },

  // Q3 — Reproduction & Genetics

  q3_a: {
    marks: 2,
    exemplar: 'Testosterone → Testes; Progesterone → Ovaries. Correct row OR correct column = 1 mark. All correct = 2 marks.',
    keyConcepts: ['sex hormones testosterone progesterone testes ovaries site of production'],
    keywords: ['testosterone', 'testes', 'progesterone', 'ovaries', 'sex hormone', 'site of production'],
    feedbackHit: 'Both hormones correctly matched to their sites of production.',
    feedbackMiss: 'Testosterone is produced in the testes (males). Progesterone is produced in the ovaries (females). Insulin is produced by the pancreas — a distractor.',
    blankAnswers: ['Testes', 'Ovaries'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Males: Sperm production starts, Facial hair grows. Both: Sex organs grow and develop, Pubic hair grows. Females: Hips widen, Development of breast tissue, Menstruation starts. One zone correct = 1 mark. All correct = 2 marks.',
    keyConcepts: ['puberty changes sex hormones males females both secondary sexual characteristics'],
    keywords: ['sperm production', 'facial hair', 'pubic hair', 'sex organs', 'hips widen', 'breast tissue', 'menstruation'],
    feedbackHit: 'Puberty changes correctly classified for males, both, and females.',
    feedbackMiss: 'Males only: sperm production, facial hair. Both sexes: sex organs grow, pubic hair grows. Females only: hips widen, breast tissue, menstruation.',
    blankAnswers: ['Sperm production starts', 'Facial hair grows', 'Sex organs grow and develop', 'Pubic hair grows', 'Hips widen', 'Development of breast tissue', 'Menstruation starts'],
  },

  q3_c: {
    marks: 2,
    exemplar: 'Two sex cells will come together (in fertilization) [1]. To produce offspring with 46 chromosomes [1].',
    keyConcepts: ['meiosis sex cells chromosomes fertilization haploid diploid'],
    keywords: ['meiosis', 'sex cells', '23 chromosomes', 'fertilization', '46 chromosomes', 'haploid'],
    feedbackHit: 'Correct explanation linking meiosis to fertilization and chromosome number.',
    feedbackMiss: 'Sex cells (gametes) have 23 chromosomes (half) so that when two gametes fuse at fertilization, the offspring has the correct number: 46.',
  },

  q3_d: {
    marks: 3,
    exemplar: 'Female (genotype) is XX AND male is XY [1]. Sperm can pass on either X or Y (chromosome) [1]. Egg always passes on X [1].',
    keyConcepts: ['sex chromosomes X Y sperm egg determination male female offspring'],
    keywords: ['XX', 'XY', 'sperm', 'X chromosome', 'Y chromosome', 'egg', 'sex determination'],
    feedbackHit: 'Complete explanation of sex determination by sperm chromosome.',
    feedbackMiss: 'Females are XX, males are XY. Eggs always carry X. Sperm carry either X (→ girl XX) or Y (→ boy XY). Sperm determines the sex.',
  },

  // Q4 — Photosynthesis Investigation

  q4_a: {
    marks: 1,
    exemplar: 'Carbon dioxide + Water → Glucose + Oxygen. All correct.',
    keyConcepts: ['photosynthesis word equation reactants products carbon dioxide water glucose oxygen'],
    keywords: ['carbon dioxide', 'water', 'glucose', 'oxygen', 'photosynthesis', 'word equation'],
    feedbackHit: 'Photosynthesis word equation correctly completed.',
    feedbackMiss: 'Photosynthesis: Carbon dioxide + Water → Glucose + Oxygen (using light energy).',
    blankAnswers: ['Carbon dioxide', 'Water', 'Glucose', 'Oxygen'],
  },

  q4_b: {
    marks: 4,
    exemplar: 'IV: Temperature [1]. DV: O₂ concentration or amount of O₂ [1] (do not accept biomass). Accept any two CVs [max 2]: CO₂ concentration; length of plant stem; type of plant; light level.',
    keyConcepts: ['variables investigation photosynthesis temperature oxygen independent dependent control'],
    keywords: ['IV', 'temperature', 'DV', 'O₂ concentration', 'CV', 'CO₂', 'light level', 'plant type'],
    feedbackHit: 'All four variables correctly identified.',
    feedbackMiss: 'IV = temperature (what changes); DV = O₂ concentration (what is measured); CVs = CO₂ concentration, light level, type of plant, stem length.',
  },

  q4_c: {
    marks: 3,
    exemplar: 'If: the temperature increases [1]. Then: oxygen concentration will increase [1]. Because: (the rate of) photosynthesis increases [1]. ORA. Direction of change must be stated.',
    keyConcepts: ['hypothesis photosynthesis temperature oxygen rate scientific reasoning'],
    keywords: ['if', 'then', 'because', 'temperature increases', 'oxygen increases', 'photosynthesis rate'],
    feedbackHit: 'Well-formed hypothesis with correct direction and scientific reasoning.',
    feedbackMiss: 'If temperature increases, then O₂ concentration will increase, because the rate of photosynthesis increases (up to the optimum temperature).',
  },

  q4_d: {
    marks: 2,
    exemplar: '260.666… OR 261. Award 2 marks for correct answer only.',
    keyConcepts: ['calculating average data table photosynthesis oxygen concentration'],
    keywords: ['average', '262', '261', '259', '260.666', '261', 'calculation'],
    feedbackHit: 'Correct average calculated and rounded appropriately.',
    feedbackMiss: 'Average = (262 + 261 + 259) ÷ 3 = 782 ÷ 3 = 260.666… Round to 261 (3 significant figures).',
  },

  q4_e: {
    marks: 1,
    exemplar: 'Add units for temperature to the table.',
    keyConcepts: ['data presentation table improvement units temperature'],
    keywords: ['units', 'temperature', '°C', 'table heading', 'improvement'],
    feedbackHit: 'Correct improvement to data table presentation identified.',
    feedbackMiss: 'The temperature column heading is missing units (°C). Always include units in table headings.',
  },

  q4_f: {
    marks: 2,
    exemplar: 'Results do not support the prediction from 20°C to 40°C [1]. Results support the prediction as temperature rises above 40°C [1]. OR There is insufficient data to draw a conclusion / At least five increments or temperatures are needed to show a reliable trend [1+1].',
    keyConcepts: ['prediction validity data analysis temperature photosynthesis trend'],
    keywords: ['do not support', 'support', '20°C to 40°C', 'above 40°C', 'insufficient data', 'trend'],
    feedbackHit: 'Both parts of the prediction validity correctly commented on.',
    feedbackMiss: 'From 20→40°C O₂ increases (data do not support the prediction). Above 40°C O₂ decreases (data do support). Only 3 temperatures tested — insufficient for a reliable trend.',
  },

  // Q5 — CO₂ & Photosynthesis Evaluation

  q5_a: {
    marks: 2,
    exemplar: 'Accept any two reasonable CVs [max 2]: one CV associated with plant e.g. stem length or type of plant or number of leaves; light level/intensity was not controlled; initial O₂ concentration.',
    keyConcepts: ['control variables method repeatability photosynthesis CO2 investigation'],
    keywords: ['stem length', 'type of plant', 'light level', 'initial O₂', 'control variable', 'repeatable'],
    feedbackHit: 'Two valid control variables that should be monitored identified.',
    feedbackMiss: 'The method needs to specify how to control variables such as: light intensity, plant stem length/type of plant, and initial O₂ concentration.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'To control the temperature OR temperature is a control variable [1]. This is the optimum temperature for the reaction OR the reaction will take place quickly [1]. (WTTE)',
    keyConcepts: ['temperature control variable optimum photosynthesis 40°C enzyme'],
    keywords: ['control temperature', 'optimum', 'reaction rate', '40°C', 'control variable'],
    feedbackHit: 'Two reasons for setting heater at 40°C correctly identified.',
    feedbackMiss: '40°C is used (1) to keep temperature constant as a control variable, and (2) because it is near the optimum temperature so the reaction proceeds quickly.',
  },

  q5_c: {
    marks: 4,
    exemplar: 'Suggestions [max 2]: more trials/repeats; more increments of IV or intermediate values of IV; there is no control experiment (with CO₂=0% or atmospheric CO₂ level). Justifications [max 2]: more reliable data or allows identification of outliers or can calculate an average or more accurate results; more values give a clearer pattern; cannot establish a baseline. (WTTE)',
    keyConcepts: ['investigation improvement data collection repeats increments control baseline reliability'],
    keywords: ['more repeats', 'more increments', 'control experiment', 'reliable', 'baseline', 'outliers', 'pattern'],
    feedbackHit: 'Two improvements with linked justifications correctly given.',
    feedbackMiss: 'Improvements: more repeats (more reliable/identify outliers) + more CO₂ increments (clearer pattern) + add a control at 0% CO₂ (establish baseline).',
  },

  q5_d: {
    marks: 5,
    exemplar: 'As the concentration of CO₂ increases the rate of photosynthesis increases (below 0.10%) [1]. The line plateaus (above 0.10% CO₂) [1]. Value of 0.10% correctly referenced [1]. Because CO₂ is limiting (below 0.10%) [1]. Other limiting factors are involved (above 0.10%) [1].',
    keyConcepts: ['CO₂ concentration photosynthesis rate limiting factor plateau graph interpretation'],
    keywords: ['increases', 'plateaus', '0.10%', 'CO₂ limiting', 'limiting factors', 'light intensity', 'temperature'],
    feedbackHit: 'Complete explanation of graph including limiting factors and plateau reference.',
    feedbackMiss: 'Rate increases as CO₂ rises (CO₂ is limiting below 0.10%); rate plateaus above 0.10% because other factors (light/temperature) become limiting.',
  },

  q5_e: {
    marks: 1,
    exemplar: 'Increase the temperature OR light intensity.',
    keyConcepts: ['limiting factors photosynthesis light temperature rate increase'],
    keywords: ['temperature', 'light intensity', 'limiting factor', 'increase rate'],
    feedbackHit: 'Correct limiting factor identified.',
    feedbackMiss: 'Above 0.10% CO₂, other factors limit the rate. Increasing temperature or light intensity would allow the rate to exceed 8 ppm O₂ min⁻¹.',
  },

  // Q6 — Criteria B: Light Intensity & Photosynthesis Design

  q6_: {
    marks: 15,
    exemplar: 'Criteria B rubric (max 15). Variables (max 4): IV = light intensity (measurable, e.g. lux or distance from lamp) + DV = O₂ concentration measurable + one CV identified + two CVs identified. Hypothesis (max 3): connected to relevant variable + linked to stated DV + correct scientific direction + correct scientific explanation. Equipment (included in method). Method (max 4): sufficient to follow and collect similar data + sufficient to repeat experiment + explicit mention of monitor at least one CV. Data (max 4): plans to repeat at least three trials + plans at least three trials AND collect data for at least five increments of IV.',
    keyConcepts: ['light intensity photosynthesis rate investigation design Criteria B variables hypothesis method data'],
    keywords: ['light intensity', 'IV', 'DV', 'O₂ concentration', 'CV', 'hypothesis', 'repeats', 'increments', 'equipment'],
    feedbackHit: 'Well-structured Criteria B design with measurable IV/DV, testable hypothesis, detailed method, and sufficient data plan.',
    feedbackMiss: 'Ensure: IV = light intensity (measured in lux or by distance); DV = O₂ concentration; 2 CVs stated and monitored; testable hypothesis with scientific direction; method with ≥3 repeats and ≥5 light increments.',
  },

  // Q7 — Pesticides & Plant Yield

  q7_a: {
    marks: 1,
    exemplar: 'Plant W.',
    keyConcepts: ['plant yield pesticide boric acid species comparison highest yield'],
    keywords: ['plant W', 'highest yield', '3.0 kg m⁻²', 'pesticide'],
    feedbackHit: 'Correct plant species with highest yield using pesticide identified.',
    feedbackMiss: 'Plant W has the highest yield with pesticide at 3.0 kg m⁻² — higher than X (2.0), Y (2.4), and Z (1.2).',
  },

  q7_b: {
    marks: 1,
    exemplar: 'Boric acid does not have an impact on the pest species attacking those plants [1]. OR Not all plants are affected by pests [1]. (Allow reference to plant X only.)',
    keyConcepts: ['pesticide effectiveness species-specific pest boric acid impact'],
    keywords: ['pest species', 'boric acid', 'no impact', 'not affected', 'specific'],
    feedbackHit: 'Valid reason for limited pesticide impact identified.',
    feedbackMiss: 'Boric acid only kills specific pests. Some plant species may not be attacked by the pests that boric acid targets, so there is little benefit to yield.',
  },

  q7_c: {
    marks: 1,
    exemplar: 'To control all other variables.',
    keyConcepts: ['greenhouse controlled environment variables control experiment'],
    keywords: ['control variables', 'greenhouse', 'constant conditions', 'environmental control'],
    feedbackHit: 'Correct reason for using a greenhouse stated.',
    feedbackMiss: 'A greenhouse allows all environmental variables (temperature, light, humidity) to be controlled so only the pesticide concentration causes differences in yield.',
  },

  q7_d: {
    marks: 2,
    exemplar: 'Plant W – 4% [1]. Plant Y – 6% [1].',
    keyConcepts: ['minimum concentration maximum yield graph reading boric acid plant W Y'],
    keywords: ['4%', '6%', 'minimum concentration', 'maximum yield', 'plant W', 'plant Y'],
    feedbackHit: 'Minimum concentrations for both plants correctly read from the graph.',
    feedbackMiss: 'Read the concentration where each plant\'s yield line first reaches its maximum and stops increasing: Plant W plateaus at 4%, Plant Y at 6%.',
    blankAnswers: ['4', '6'],
  },

  q7_e: {
    marks: 2,
    exemplar: 'The farmer should use 6% [1]. Because 6% is the lowest concentration which gives maximum yield of both plants [1]. (WTTE)',
    keyConcepts: ['minimum concentration both species maximum yield decision justification'],
    keywords: ['6%', 'both plants', 'maximum yield', 'lowest concentration', 'justification'],
    feedbackHit: 'Correct concentration identified with clear justification.',
    feedbackMiss: '6% gives maximum yield for Plant Y (the higher of the two minimums). At 6%, Plant W also achieves its maximum yield. Using less than 6% would not maximise yield for Plant Y.',
  },

  // Q8 — Cancer & Disease

  q8_a: {
    marks: 2,
    exemplar: 'Similarity [1]: number of new cases increases and then decreases with age in both males and females. Difference [1]: males increase until 74 (peak) while females increase until 69 (peak); OR female cases higher than males 0–59 and 85+; OR male cases higher than females 60–84.',
    keyConcepts: ['cancer incidence age sex male female trend graph similarity difference'],
    keywords: ['increases', 'decreases', 'age', 'peak', 'males', 'females', 'similarity', 'difference'],
    feedbackHit: 'One valid similarity and one valid difference in cancer trends stated.',
    feedbackMiss: 'Similarity: both sexes show increase then decrease with age. Difference: males peak at 70–74, females at 65–69; or male cases exceed female cases in the 60–84 age range.',
  },

  q8_b: {
    marks: 2,
    exemplar: '(Greater) exposure to (named) risk factor(s) over time [1]. Accept a correctly linked justification [1]: greater chance of mutations occurring; (and) more mutations can accumulate over time.',
    keyConcepts: ['cancer incidence age risk factors mutations accumulation lifetime exposure'],
    keywords: ['risk factors', 'exposure', 'mutations', 'accumulate', 'age', 'lifetime'],
    feedbackHit: 'Exposure to risk factors and mutation accumulation correctly linked to age.',
    feedbackMiss: 'As people age, they have had longer exposure to risk factors (UV, smoking, alcohol). This increases the chance of mutations accumulating in cells, leading to cancer.',
  },

  q8_c: {
    marks: 6,
    exemplar: 'Positive health impacts [max 2]: good for mental health/SAD; Vitamin D production; calcium absorption and strong bones/prevention of rickets; able to do sports outside. Negative health impacts [max 2]: increased risk of (skin) cancer; cataracts; sunburn. A brief concluding statement [1]. A statement giving advice linked to minimizing health concerns [1].',
    keyConcepts: ['sun exposure health benefits risks Vitamin D cancer cataracts mental health balance advice'],
    keywords: ['Vitamin D', 'mental health', 'SAD', 'skin cancer', 'cataracts', 'sunburn', 'sunscreen', 'limit exposure'],
    feedbackHit: 'Balanced discussion with benefits, risks, and practical concluding advice.',
    feedbackMiss: 'Benefits: Vitamin D/bone health, mental health. Risks: skin cancer, cataracts, sunburn. Conclusion: beneficial in moderation with sunscreen and limited exposure time.',
  },

  // Q9 — Personalized Medicine (Criteria D)

  q9_: {
    marks: 14,
    exemplar: 'Criteria D rubric (max 14). Medical [max 4]: one medical benefit stated → two benefits → two with further development → two benefits both with further development. Economic [max 4]: one economic consideration → two → one with further development → two with further development. Ethical [max 4]: one ethical consideration → two → one with further development → two with further development. Conclusion [max 2]: simple conclusion stated → conclusion with further development.',
    keyConcepts: ['personalized medicine DNA sequencing medical benefits economic ethical Criteria D discussion'],
    keywords: ['personalized medicine', 'DNA sequencing', 'medical benefit', 'economic', 'ethical', 'privacy', 'cost', 'access', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D essay covering medical, economic, and ethical dimensions with a justified conclusion.',
    feedbackMiss: 'Cover: medical benefits (effective treatment, fewer side effects, society-wide impact); economic costs/savings (development cost vs. fewer failed treatments); ethical issues (genetic privacy, equitable access, data use); justified conclusion on whether personalized medicine should be pursued.',
  },
}
