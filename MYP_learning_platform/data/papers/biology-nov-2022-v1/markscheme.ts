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

  // Q1 — Food Webs & Ecosystems (savanna grassland)

  q1_a: {
    marks: 1,
    exemplar: 'Zebra OR gazelle.',
    keyConcepts: ['food web predator prey lion grass savanna ecosystem'],
    keywords: ['zebra', 'gazelle', 'prey', 'lion'],
    feedbackHit: 'Correct prey organism of the lion identified.',
    feedbackMiss: 'Lions are predators — they hunt zebras and gazelles in this food web.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Producers carry out photosynthesis OR producers can convert/capture light energy [1]. Into sugar or chemical energy or food for a consumer [1]. (WTTE — accept references to autotrophs for mp1.)',
    keyConcepts: ['producers photosynthesis light energy sugar food web autotrophs'],
    keywords: ['producers', 'photosynthesis', 'light energy', 'sugar', 'glucose', 'autotroph', 'food'],
    feedbackHit: 'Both roles of producers correctly stated.',
    feedbackMiss: 'Producers (grass) photosynthesise (convert light energy) to make sugar/glucose, which is food for consumers.',
  },

  q1_c: {
    marks: 1,
    exemplar: 'Accept any reasonable suggestion: creation of national parks or protected reserves; captive breeding program; reintroduction into the wild; anti-poaching patrols. (The role of humans in the action must be clear.)',
    keyConcepts: ['conservation human action population increase species protection'],
    keywords: ['national park', 'reserve', 'protected area', 'captive breeding', 'reintroduction', 'anti-poaching', 'protection'],
    feedbackHit: 'Valid human conservation action identified.',
    feedbackMiss: 'Human actions include creating protected reserves/national parks, captive breeding programmes, anti-poaching patrols, or reintroducing lions from other regions.',
  },

  q1_d: {
    marks: 4,
    exemplar: 'Number of gazelles has decreased [1]. (As) more are being eaten by the lions [1]. There are fewer gazelles to eat grass [1]. (So) the amount of grass has increased [1]. (Accept reference to prey with respect to gazelles and lions eating them.)',
    keyConcepts: ['pyramid of numbers population change lion gazelle grass predator prey'],
    keywords: ['gazelles decreased', 'eaten by lions', 'fewer gazelles', 'grass increased', 'predation'],
    feedbackHit: 'Complete chain of population effects correctly explained using the pyramids.',
    feedbackMiss: 'More lions → eat more gazelles → gazelle population decreases → fewer gazelles eat grass → grass population increases.',
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
    exemplar: 'A [1]. The optimum pH is acidic or about pH 2 [1]. (No ECF — first mark must be correct for second to be awarded.)',
    keyConcepts: ['enzyme activity pH optimum stomach acid protease'],
    keywords: ['enzyme A', 'acidic', 'pH 2', 'optimum pH', 'stomach', 'hydrochloric acid'],
    feedbackHit: 'Correct enzyme selected with accurate pH justification.',
    feedbackMiss: 'The stomach produces hydrochloric acid (pH ≈ 2). Enzyme A has its peak activity at the lowest (most acidic) pH on the graph — that is the stomach protease.',
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
    feedbackMiss: 'Testosterone is produced in the testes (males). Progesterone is produced in the ovaries (females). The liver and adrenaline are distractors.',
    blankAnswers: ['Testes', 'Ovaries'],
  },

  q3_b: {
    marks: 2,
    exemplar: 'Males: Sperm production starts, Voice deepens. Both: Sex organs grow and develop, Underarm hair grows. Females: Hips widen, Development of breast tissue, Menstruation starts. One zone correct = 1 mark. All correct = 2 marks.',
    keyConcepts: ['puberty changes sex hormones males females both secondary sexual characteristics'],
    keywords: ['sperm production', 'voice deepens', 'underarm hair', 'sex organs', 'hips widen', 'breast tissue', 'menstruation'],
    feedbackHit: 'Puberty changes correctly classified for males, both, and females.',
    feedbackMiss: 'Males only: sperm production, voice deepens. Both sexes: sex organs grow, underarm hair grows. Females only: hips widen, breast tissue, menstruation.',
    blankAnswers: ['Sperm production starts', 'Voice deepens', 'Sex organs grow and develop', 'Underarm hair grows', 'Hips widen', 'Development of breast tissue', 'Menstruation starts'],
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
    exemplar: '322 ppm. Average = (324 + 321 + 321) ÷ 3 = 966 ÷ 3 = 322. Award 2 marks for correct answer only.',
    keyConcepts: ['calculating average data table photosynthesis oxygen concentration'],
    keywords: ['average', '324', '321', '322', '966', 'calculation'],
    feedbackHit: 'Correct average calculated and rounded appropriately.',
    feedbackMiss: 'Average = (324 + 321 + 321) ÷ 3 = 966 ÷ 3 = 322 ppm.',
  },

  q4_e: {
    marks: 1,
    exemplar: 'Add units (ppm) for oxygen concentration to the table, OR the temperature column is fine — give the trial columns their units. (Any valid missing-units / heading improvement.)',
    keyConcepts: ['data presentation table improvement units oxygen concentration'],
    keywords: ['units', 'ppm', 'oxygen', 'table heading', 'improvement'],
    feedbackHit: 'Correct improvement to data table presentation identified.',
    feedbackMiss: 'Always include units in every table heading. State a missing or unclear unit/heading as the improvement.',
  },

  q4_f: {
    marks: 2,
    exemplar: 'Results do not support the prediction from 20 °C to 40 °C [1]. Results support the prediction as temperature rises above 40 °C [1]. OR There is insufficient data to draw a conclusion / At least five increments or temperatures are needed to show a reliable trend [1+1].',
    keyConcepts: ['prediction validity data analysis temperature photosynthesis trend'],
    keywords: ['do not support', 'support', '20°C to 40°C', 'above 40°C', 'insufficient data', 'trend'],
    feedbackHit: 'Both parts of the prediction validity correctly commented on.',
    feedbackMiss: 'From 20→40 °C O₂ increases (data do not support the prediction). Above 40 °C O₂ decreases (data do support). With wider gaps the trend is harder to confirm reliably.',
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
    keyConcepts: ['temperature control variable optimum photosynthesis 35°C enzyme'],
    keywords: ['control temperature', 'optimum', 'reaction rate', '35°C', 'control variable'],
    feedbackHit: 'Two reasons for setting heater at 35 °C correctly identified.',
    feedbackMiss: '35 °C is used (1) to keep temperature constant as a control variable, and (2) because it is near the optimum temperature so the reaction proceeds quickly.',
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
    exemplar: 'As the concentration of CO₂ increases the rate of photosynthesis increases (below 0.08%) [1]. The line plateaus (above 0.08% CO₂) [1]. Value of 0.08% correctly referenced [1]. Because CO₂ is limiting (below 0.08%) [1]. Other limiting factors are involved (above 0.08%) [1].',
    keyConcepts: ['CO₂ concentration photosynthesis rate limiting factor plateau graph interpretation'],
    keywords: ['increases', 'plateaus', '0.08%', 'CO₂ limiting', 'limiting factors', 'light intensity', 'temperature'],
    feedbackHit: 'Complete explanation of graph including limiting factors and plateau reference.',
    feedbackMiss: 'Rate increases as CO₂ rises (CO₂ is limiting below 0.08%); rate plateaus above 0.08% because other factors (light/temperature) become limiting.',
  },

  q5_e: {
    marks: 1,
    exemplar: 'Increase the temperature OR light intensity.',
    keyConcepts: ['limiting factors photosynthesis light temperature rate increase'],
    keywords: ['temperature', 'light intensity', 'limiting factor', 'increase rate'],
    feedbackHit: 'Correct limiting factor identified.',
    feedbackMiss: 'Above 0.08% CO₂, other factors limit the rate. Increasing temperature or light intensity would allow the rate to exceed 10 ppm O₂ min⁻¹.',
  },

  // Q6 — Criteria B: Water Temperature & Photosynthesis Design

  q6_: {
    marks: 15,
    exemplar: 'Criteria B rubric (max 15). Variables (max 4): IV = water temperature (measurable, e.g. °C set by a water bath) + DV = O₂ concentration or bubbles of O₂ per minute measurable + one CV identified + two CVs identified. Hypothesis (max 3): connected to relevant variable + linked to stated DV + correct scientific direction + correct scientific explanation. Equipment (included in method). Method (max 4): sufficient to follow and collect similar data + sufficient to repeat experiment + explicit mention of monitor at least one CV. Data (max 4): plans to repeat at least three trials + plans at least three trials AND collect data for at least five increments of IV.',
    keyConcepts: ['water temperature photosynthesis rate investigation design Criteria B variables hypothesis method data pondweed'],
    keywords: ['water temperature', 'IV', 'DV', 'O₂ concentration', 'bubbles', 'CV', 'hypothesis', 'repeats', 'increments', 'equipment'],
    feedbackHit: 'Well-structured Criteria B design with measurable IV/DV, testable hypothesis, detailed method, and sufficient data plan.',
    feedbackMiss: 'Ensure: IV = water temperature (set by a water bath, measured with a thermometer); DV = O₂ bubbles per minute; 2 CVs stated and monitored (light, CO₂, pondweed length); testable hypothesis with scientific direction; method with ≥3 repeats and ≥5 temperature increments.',
  },

  // Q7 — Pesticides & Plant Yield

  q7_a: {
    marks: 1,
    exemplar: 'Plant P.',
    keyConcepts: ['plant yield pesticide neem oil species comparison highest yield'],
    keywords: ['plant P', 'highest yield', '3.2 kg m⁻²', 'pesticide'],
    feedbackHit: 'Correct plant species with highest yield using pesticide identified.',
    feedbackMiss: 'Plant P has the highest yield with pesticide at 3.2 kg m⁻² — higher than Q (2.1), R (2.6), and S (1.3).',
  },

  q7_b: {
    marks: 1,
    exemplar: 'Neem oil does not have an impact on the pest species attacking those plants [1]. OR Not all plants are affected by pests [1]. (Allow reference to plant S only.)',
    keyConcepts: ['pesticide effectiveness species-specific pest neem oil impact'],
    keywords: ['pest species', 'neem oil', 'no impact', 'not affected', 'specific'],
    feedbackHit: 'Valid reason for limited pesticide impact identified.',
    feedbackMiss: 'Neem oil only kills specific pests. Some plant species may not be attacked by the pests that neem oil targets, so there is little benefit to yield.',
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
    exemplar: 'Plant P – 3% [1]. Plant S – 5% [1].',
    keyConcepts: ['minimum concentration maximum yield graph reading neem oil plant P S'],
    keywords: ['3%', '5%', 'minimum concentration', 'maximum yield', 'plant P', 'plant S'],
    feedbackHit: 'Minimum concentrations for both plants correctly read from the graph.',
    feedbackMiss: 'Read the concentration where each plant\'s yield line first reaches its maximum and stops increasing: Plant P plateaus at 3%, Plant S at 5%.',
    blankAnswers: ['3', '5'],
  },

  q7_e: {
    marks: 2,
    exemplar: 'The farmer should use 5% [1]. Because 5% is the lowest concentration which gives maximum yield of both plants [1]. (WTTE)',
    keyConcepts: ['minimum concentration both species maximum yield decision justification'],
    keywords: ['5%', 'both plants', 'maximum yield', 'lowest concentration', 'justification'],
    feedbackHit: 'Correct concentration identified with clear justification.',
    feedbackMiss: '5% gives maximum yield for Plant S (the higher of the two minimums). At 5%, Plant P also achieves its maximum yield. Using less than 5% would not maximise yield for Plant S.',
  },

  // Q8 — Physical Activity & Disease

  q8_a: {
    marks: 2,
    exemplar: 'Similarity [1]: number of new cases increases and then decreases with age in both males and females. Difference [1]: males have more new cases than females at every age / for any given age band; OR the lines peak at the same age (75) but males peak higher.',
    keyConcepts: ['heart disease incidence age sex male female trend graph similarity difference'],
    keywords: ['increases', 'decreases', 'age', 'peak', 'males', 'females', 'similarity', 'difference'],
    feedbackHit: 'One valid similarity and one valid difference in heart-disease trends stated.',
    feedbackMiss: 'Similarity: both sexes show increase then decrease with age, peaking around 75. Difference: males have more new cases than females across the age range.',
  },

  q8_b: {
    marks: 2,
    exemplar: '(Greater) exposure to (named) risk factor(s) over time [1]. Accept a correctly linked justification [1]: greater chance of damage to blood vessels / build-up of fatty deposits; (and) these effects accumulate over time.',
    keyConcepts: ['heart disease incidence age risk factors damage accumulation lifetime exposure'],
    keywords: ['risk factors', 'exposure', 'damage', 'fatty deposits', 'accumulate', 'age', 'lifetime'],
    feedbackHit: 'Exposure to risk factors and damage accumulation correctly linked to age.',
    feedbackMiss: 'As people age, they have had longer exposure to risk factors (inactivity, poor diet, smoking). Damage and fatty deposits in the arteries accumulate over time, increasing heart-disease cases.',
  },

  q8_c: {
    marks: 6,
    exemplar: 'Positive health impacts [max 2]: strengthens the heart and improves circulation; helps control body weight; improves mental health/mood; lowers blood pressure. Negative health impacts [max 2]: risk of injury (joints, muscles); overtraining/exhaustion; strain on the heart if done without building up gradually. A brief concluding statement [1]. A statement giving advice linked to minimizing health concerns [1].',
    keyConcepts: ['exercise health benefits risks heart fitness injury overtraining balance advice'],
    keywords: ['heart', 'fitness', 'weight', 'mental health', 'injury', 'overtraining', 'warm up', 'moderate', 'rest'],
    feedbackHit: 'Balanced discussion with benefits, risks, and practical concluding advice.',
    feedbackMiss: 'Benefits: stronger heart, weight control, better mood. Risks: injury, overtraining. Conclusion: exercise is beneficial in moderation with warm-ups, rest days and gradual increases.',
  },

  // Q9 — Gene Therapy (Criteria D)

  q9_: {
    marks: 14,
    exemplar: 'Criteria D rubric (max 14). Medical [max 4]: one medical benefit stated → two benefits → two with further development → two benefits both with further development. Economic [max 4]: one economic consideration → two → one with further development → two with further development. Ethical [max 4]: one ethical consideration → two → one with further development → two with further development. Conclusion [max 2]: simple conclusion stated → conclusion with further development.',
    keyConcepts: ['gene therapy inherited disease medical benefits economic ethical Criteria D discussion'],
    keywords: ['gene therapy', 'inherited disease', 'medical benefit', 'cure', 'economic', 'cost', 'ethical', 'safety', 'germline', 'access', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D essay covering medical, economic, and ethical dimensions with a justified conclusion.',
    feedbackMiss: 'Cover: medical benefits (could cure inherited disease, treat the cause not just symptoms, reduce suffering for society); economic costs/savings (high cost of therapy vs. lifelong treatment savings); ethical issues (safety risks, consent, editing germline/inherited DNA, equal access); justified conclusion on whether gene therapy should be used.',
  },
}
