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

  // Q1 — DNA, Genetics & Sickle-Cell Anaemia

  q1_a: {
    marks: 1,
    exemplar: 'Nucleus.',
    keyConcepts: ['nucleus DNA animal cell organelle genetic material'],
    keywords: ['nucleus', 'DNA', 'organelle', 'genetic material'],
    feedbackHit: 'Correct organelle containing DNA identified.',
    feedbackMiss: 'The nucleus is the membrane-bound organelle in animal cells where DNA (as chromosomes) is stored.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'A paired with T [1]. G paired with C [1]. (U and N are distractors.)',
    keyConcepts: ['DNA base pairing complementary bases adenine thymine cytosine guanine'],
    keywords: ['A', 'T', 'C', 'G', 'complementary base pairs', 'double helix'],
    feedbackHit: 'Both complementary base pairs correctly matched.',
    feedbackMiss: 'DNA base pairing rules: A (adenine) always pairs with T (thymine); G (guanine) always pairs with C (cytosine). U is found in RNA, not DNA.',
    blankAnswers: ['T', 'C'],
  },

  q1_c: { type: 'mcq', correct: 1 },

  q1_d: {
    marks: 1,
    exemplar: 'Father A/a × Mother A/a: AA, Aa, Aa, aa. All correct = 1 mark. (Accept Aa or aA as heterozygous notation.)',
    keyConcepts: ['Punnett square alleles dominant recessive genotype inheritance sickle-cell anaemia'],
    keywords: ['AA', 'Aa', 'aa', 'Punnett square', 'dominant', 'recessive', 'genotype'],
    feedbackHit: 'Punnett square completed correctly with all four genotypes.',
    feedbackMiss: 'Father Aa × Mother Aa: top-left AA (healthy), top-right Aa (carrier), bottom-left Aa (carrier), bottom-right aa (affected). All four cells must be correct.',
  },

  q1_e: {
    marks: 1,
    exemplar: '50%. (Accept 0.5 or 1/2.)',
    keyConcepts: ['probability carrier Punnett square heterozygous Aa sickle-cell anaemia'],
    keywords: ['50%', '0.5', '1/2', 'carrier', 'Aa', 'probability'],
    feedbackHit: 'Correct probability of being a carrier (Aa) calculated.',
    feedbackMiss: 'From the Punnett square: 2 out of 4 offspring are Aa (carriers = do not have disease but can pass it on) = 50% or 1/2.',
  },

  q1_f: {
    marks: 2,
    exemplar: 'Biconcave disc shape gives a large surface area [1]. Accept any further point [1]: no nucleus so more room for haemoglobin (which binds oxygen); flexible/thin so it can squeeze through narrow capillaries; short diffusion distance for oxygen.',
    keyConcepts: ['red blood cell structure oxygen transport biconcave surface area haemoglobin no nucleus flexible'],
    keywords: ['biconcave', 'large surface area', 'no nucleus', 'haemoglobin', 'flexible', 'capillary', 'oxygen'],
    feedbackHit: 'Large surface area plus one further structural adaptation correctly outlined.',
    feedbackMiss: 'A red blood cell transports oxygen because: (1) the biconcave disc shape gives a large surface area for absorbing oxygen; (2) it has no nucleus, leaving more room for haemoglobin; (3) it is flexible to pass through narrow capillaries.',
  },

  q1_g: {
    marks: 1,
    exemplar: 'Accept any reasonable symptom: pain (in joints/chest) when vessels are blocked; tiredness/fatigue; shortness of breath; weakness due to reduced oxygen delivery to tissues.',
    keyConcepts: ['sickle-cell anaemia symptoms blocked blood vessels reduced oxygen pain tiredness'],
    keywords: ['pain', 'tiredness', 'fatigue', 'shortness of breath', 'low oxygen', 'blocked vessels'],
    feedbackHit: 'Valid symptom of sickled cells blocking blood vessels identified.',
    feedbackMiss: 'Rigid sickled cells block small blood vessels → less oxygen reaches tissues → pain (a sickle-cell "crisis"), tiredness/fatigue and shortness of breath.',
  },

  q1_h: {
    marks: 2,
    exemplar: 'Benefit [max 1]: can cure untreatable diseases; less medication is needed. (Accept correctly named disease, e.g. sickle-cell.) Ethical consideration [max 1]: don\'t know the long-term effects; can be used to make cosmetic rather than medical changes; regulations may be different in different countries. (WTTE)',
    keyConcepts: ['gene editing CRISPR benefit ethical consideration long-term unknown cosmetic regulations'],
    keywords: ['cure disease', 'less medication', 'long-term effects', 'cosmetic', 'regulations', 'ethical'],
    feedbackHit: 'One benefit and one ethical consideration of gene editing correctly stated.',
    feedbackMiss: 'Benefit: gene editing (CRISPR) could cure genetic diseases like sickle-cell anaemia. Ethics: unknown long-term effects; risk of cosmetic/non-medical use; varying regulations across countries.',
  },

  // Q2 — Nervous System & Homeostasis

  q2_a: { type: 'mcq', correct: 2 },

  q2_b: { type: 'mcq', correct: 1 },

  q2_c: {
    marks: 1,
    exemplar: 'Maintenance of a constant internal environment. (WTTE. Answers should be in general terms — do NOT accept a named example.)',
    keyConcepts: ['homeostasis constant internal environment nervous system body temperature'],
    keywords: ['constant', 'internal environment', 'maintain', 'stable'],
    feedbackHit: 'Homeostasis correctly defined.',
    feedbackMiss: 'Homeostasis = the maintenance of a constant internal environment (e.g. body temperature, blood glucose). Do not just name an example without defining it.',
  },

  q2_d: {
    marks: 1,
    exemplar: 'Shivering OR vasoconstriction. (Accept a description.)',
    keyConcepts: ['cold response homeostasis shivering vasoconstriction temperature regulation'],
    keywords: ['shivering', 'vasoconstriction', 'blood vessels narrow', 'muscle contraction'],
    feedbackHit: 'Valid cold-temperature response identified.',
    feedbackMiss: 'Other responses to cold: shivering (muscles rapidly contract to generate heat); vasoconstriction (blood vessels narrow to reduce heat loss at the surface).',
  },

  q2_e: {
    marks: 6,
    exemplar: 'Accept any two correct responses [max 2]: sweating increases; vasodilation / blood vessels widen; hair lies flat. Accept any two correctly linked explanations [max 4]: (sweat) evaporates which has a cooling effect OR heat is lost to surroundings; increased blood flow to surface / so more heat is lost to surroundings; no trapped layer of air or insulation is reduced / more heat lost to surroundings. (Only award the second mark of each explanation if the first mark is awarded. WTTE)',
    keyConcepts: ['sweating vasodilation hair flat body temperature reduction cooling heat loss'],
    keywords: ['sweating', 'evaporates', 'cooling effect', 'vasodilation', 'blood flow to surface', 'hair lies flat', 'heat loss'],
    feedbackHit: 'Two responses correctly identified each with a linked mechanistic explanation.',
    feedbackMiss: 'Sweating (evaporates → cooling); vasodilation (blood vessels widen → more blood at surface → more heat lost); hair lies flat (reduces insulating air layer → more heat lost).',
  },

  q2_f: {
    marks: 1,
    exemplar: 'Blood glucose levels; water; (certain) hormones; CO₂ concentration. (Accept sugar. Accept named examples such as FSH.)',
    keyConcepts: ['negative feedback examples blood glucose water hormones CO₂ homeostasis'],
    keywords: ['blood glucose', 'water', 'hormones', 'CO₂', 'FSH', 'insulin'],
    feedbackHit: 'Valid example of negative feedback in the body stated.',
    feedbackMiss: 'Other negative feedback examples: blood glucose (insulin/glucagon); water levels (ADH); CO₂ concentration; hormone levels (FSH/LH in the menstrual cycle).',
  },

  // Q3 — Wheat Seeds & Gamma Radiation Investigation

  q3_a: {
    marks: 1,
    exemplar: 'Growth. (Do NOT accept any other characteristic of life. Accept germination as growth.)',
    keyConcepts: ['characteristics of life growth germination wheat seeds'],
    keywords: ['growth', 'germination', 'seeds', 'getting bigger'],
    feedbackHit: 'Correct characteristic of life identified from germinating-seed video.',
    feedbackMiss: 'The video shows wheat seeds germinating and getting larger — this demonstrates growth, which is a key characteristic of living organisms.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'Sugar + oxygen → carbon dioxide + water + energy. Reactants and products correct.',
    keyConcepts: ['aerobic respiration word equation glucose oxygen carbon dioxide water energy'],
    keywords: ['sugar', 'oxygen', 'carbon dioxide', 'water', 'energy', 'aerobic respiration'],
    feedbackHit: 'All positions in the word equation correctly filled.',
    feedbackMiss: 'Aerobic respiration: Sugar + Oxygen → Carbon dioxide + Water + Energy. All five terms must be in the correct position.',
    blankAnswers: ['Sugar', 'Oxygen', 'Water', 'Energy'],
  },

  q3_c: {
    marks: 4,
    exemplar: 'Independent variable: duration/time of exposure to gamma radiation [1]. Dependent variable: CO₂ concentration [1]. (Accept ppm of CO₂; do NOT accept rate of CO₂.) Accept any two reasonable CVs [max 2]: temperature; mass/number of seeds; species of seed; volume of water available.',
    keyConcepts: ['variables gamma radiation wheat seeds respiration IV DV CV independent dependent control'],
    keywords: ['IV', 'gamma exposure time', 'DV', 'CO₂ concentration', 'CV', 'temperature', 'mass of seeds', 'number of seeds'],
    feedbackHit: 'IV, DV, and two CVs all correctly identified.',
    feedbackMiss: 'IV = duration/time of gamma exposure; DV = CO₂ concentration (ppm, not rate); CVs = temperature, mass/number of seeds, species of seed, water available.',
  },

  q3_d: {
    marks: 3,
    exemplar: 'If: reference to increasing exposure time [1]. Then: the amount of CO₂ produced decreases OR the rate of CO₂ production decreases OR the rate of respiration decreases [1]. Because: link to gamma radiation affecting enzyme OR DNA OR structure of the enzyme [1]. (ORA)',
    keyConcepts: ['hypothesis gamma radiation CO₂ respiration wheat seeds if then because enzyme DNA'],
    keywords: ['if', 'gamma exposure increases', 'then', 'CO₂ decreases', 'because', 'enzyme', 'DNA', 'structure'],
    feedbackHit: 'Well-formed If/Then/Because hypothesis with correct direction and scientific reasoning.',
    feedbackMiss: 'If gamma exposure time increases, then CO₂ production rate decreases, because gamma radiation affects the structure of enzymes (or DNA) needed for respiration.',
  },

  q3_e: {
    marks: 1,
    exemplar: 'To control the temperature.',
    keyConcepts: ['water bath temperature control variable respiration wheat seeds'],
    keywords: ['control temperature', 'constant temperature', 'water bath', 'CV'],
    feedbackHit: 'Correct reason for using water bath stated.',
    feedbackMiss: 'The water bath controls temperature — it is a control variable. Without it, temperature changes would affect the rate of respiration independently of gamma exposure.',
  },

  q3_f: {
    marks: 4,
    exemplar: 'Accept any two weaknesses [max 2]: not enough increments; not enough trials; lack of (named) control variables; inaccurate measuring equipment. Accept any two correctly linked justifications [max 2]: enough increments needed to observe a reliable trend; more trials yield more accurate data OR reduce random errors OR not enough data to calculate a valid average; (lack of CVs) data are not reliable OR not a fair test OR different seeds respire at different rates; imprecise data.',
    keyConcepts: ['investigation weakness justification increments trials CVs equipment accuracy'],
    keywords: ['not enough increments', 'not enough trials', 'no control variables', 'inaccurate equipment', 'reliable trend', 'valid average'],
    feedbackHit: 'Two weaknesses each with a correctly linked justification identified.',
    feedbackMiss: 'Weaknesses: (1) not enough increments → need more to see reliable trend; (2) only one trial → need repeats to get valid average/reduce random error; (3) no named CVs → data not reliable/fair test.',
  },

  q3_g: {
    marks: 1,
    exemplar: 'To ensure the results are due to gamma exposure. OR It is a control experiment. (Accept: to allow comparisons between gamma exposure and no gamma exposure.)',
    keyConcepts: ['control experiment wheat seeds gamma radiation baseline comparison'],
    keywords: ['control experiment', 'baseline', 'due to gamma', 'comparison', 'no gamma exposure'],
    feedbackHit: 'Correct reason for including non-irradiated seeds.',
    feedbackMiss: 'Including seeds with no gamma exposure is a control: it shows the baseline CO₂ production and allows comparison — confirming any changes are caused by the gamma radiation.',
  },

  // Q4 — Gamma Radiation Data Analysis

  q4_a: {
    marks: 2,
    exemplar: 'To increase the trials per exposure time [1]. Reduce random error OR increase accuracy OR calculate average [1]. (WTTE)',
    keyConcepts: ['repeats reliability accuracy random error average data collection'],
    keywords: ['increase trials', 'reduce random error', 'increase accuracy', 'calculate average'],
    feedbackHit: 'Reason and justification for using four students both correctly given.',
    feedbackMiss: 'Having four students repeat = more trials per data point → reduces random errors → allows calculation of a reliable average → increases accuracy of results.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Average concentration: 1194 [1]. Rate: 397.9333 [1]. Presentation with no decimal places: 398 [1]. (Accept any dp for the second mark.)',
    keyConcepts: ['average concentration CO₂ rate calculation data transformation ppm'],
    keywords: ['1194', '397.9', '398', 'average', 'rate', 'ppm min⁻¹', 'calculation'],
    feedbackHit: 'Average, rate calculation, and correct presentation all correct.',
    feedbackMiss: 'Average = (1142+1235+1088+1311) ÷ 4 = 4776 ÷ 4 = 1194 ppm. Rate = 1194 ÷ 3 = 397.93 → 398 ppm min⁻¹ (rounded to no dp).',
  },

  q4_c: {
    marks: 4,
    exemplar: 'Data points (0, 727) and (45, 212) plotted correctly [1+1]. Line of best fit [1]. X axis: Time of gamma exposure / min [1]. Y axis: Rate of CO₂ production / ppm min⁻¹ [1]. (Units must be included in marks 3 and 4. Plot the 30 min point at 398.)',
    keyConcepts: ['graph plot gamma exposure time CO₂ rate line of best fit axes labels units'],
    keywords: ['data points', 'line of best fit', 'gamma exposure time', 'CO₂ rate', 'ppm min⁻¹', 'axes labels'],
    feedbackHit: 'Both data points, line of best fit, and both axes correctly labelled with units.',
    feedbackMiss: 'Plot (0, 727), (15, 535), (30, 398) and (45, 212); draw a line of best fit; label X axis "Time of gamma exposure / min" and Y axis "Rate of CO₂ production / ppm min⁻¹" (units required).',
  },

  q4_d: {
    marks: 1,
    exemplar: '495 ± 5 (ppm min⁻¹). (ECF from part (c) — check the trend line if necessary.)',
    keyConcepts: ['graph prediction line of best fit 20 minutes CO₂ rate gamma exposure'],
    keywords: ['495', 'ppm min⁻¹', 'predict', '20 minutes', 'line of best fit', 'read off'],
    feedbackHit: 'Correct rate read from line of best fit at 20 minutes.',
    feedbackMiss: 'From the line of best fit at x = 20 min, read the y value → approximately 495 ppm min⁻¹ (accept ± 5).',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: the food/sugar store in the seed is a limiting factor (used up); the seeds are dead; no respiration is happening. (Do NOT accept lack of oxygen.)',
    keyConcepts: ['CO₂ concentration unchanged limiting factor seeds dead food store respiration'],
    keywords: ['sugar limiting', 'food store', 'seeds dead', 'no respiration', '690 ppm'],
    feedbackHit: 'Two valid reasons for unchanged CO₂ concentration identified.',
    feedbackMiss: 'CO₂ unchanged at 690 ppm because: (1) the seed\'s stored food (sugar/starch) ran out and is now limiting; (2) the seeds died; (3) no more respiration is occurring.',
  },

  q4_f: {
    marks: 2,
    exemplar: 'Accept any two points from: a section of DNA [1]; that leads to a heritable characteristic [1]; that codes for a protein [1]. (WTTE)',
    keyConcepts: ['gene definition DNA heritable characteristic protein code'],
    keywords: ['section of DNA', 'heritable characteristic', 'codes for a protein', 'gene'],
    feedbackHit: 'Two valid components of the definition of a gene stated.',
    feedbackMiss: 'A gene is: a section of DNA that codes for a protein and leads to a heritable characteristic in an organism.',
  },

  q4_g: {
    marks: 1,
    exemplar: 'As exposure time (to gamma radiation) increases, the number of changes in DNA increases. (Accept positive correlation.)',
    keyConcepts: ['gamma radiation DNA changes positive correlation exposure time mutations'],
    keywords: ['gamma increases', 'DNA changes increase', 'positive correlation', 'mutations'],
    feedbackHit: 'Correct positive relationship between gamma exposure and DNA changes stated.',
    feedbackMiss: 'The table shows: longer gamma exposure → more changes in the DNA of Genes A, B, and C (positive correlation).',
  },

  q4_h: {
    marks: 3,
    exemplar: 'Cellular respiration is less for longer exposure [1]. Longer exposure time (to gamma radiation) causes more changes in DNA of enzymes [1]. Accept a further point [1]: change in enzyme active site; can no longer bind to substrate; enzyme is denatured. (Accept mutations for changes.)',
    keyConcepts: ['gamma radiation enzyme DNA mutation active site denatured respiration decrease'],
    keywords: ['cellular respiration less', 'DNA changes', 'enzyme active site', 'denatured', 'cannot bind substrate'],
    feedbackHit: 'Complete chain from gamma → DNA changes → enzyme structure → reduced respiration.',
    feedbackMiss: 'Gamma radiation → more DNA mutations in enzyme genes → enzyme active site changes/denatured → cannot bind substrate → rate of respiration decreases.',
  },

  q4_i: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: wheat seeds were killed after 60 mins [1]; as gamma killed the seeds, it may also kill other microorganisms [1]; (but) no evidence that other microorganisms are killed [1]; may not be practical to use this method on all foods [1]; there is not sufficient detail about control variables/method [1].',
    keyConcepts: ['gamma sanitizing food microorganisms effectiveness evidence limitations'],
    keywords: ['seeds killed', 'other microorganisms', 'no evidence', 'not practical', 'lack of CVs'],
    feedbackHit: 'Two valid points (supporting and/or limiting) regarding gamma sanitisation effectiveness.',
    feedbackMiss: 'Evidence for: seeds killed at 60 min → gamma may kill bacteria too. Evidence against: no data on other microorganisms; impractical for all foods; missing CV details.',
  },

  // Q5 — Criteria B Design Investigation (temperature × wheat-seed respiration)

  q5_: {
    marks: 19,
    exemplar: 'Criteria B rubric (max 19). Variables [max 4]: some implied → IV or DV + one CV explicitly → IV and DV + one CV → IV and DV + two CVs. Hypothesis [max 3]: simple RQ → prediction linking IV to DV → hypothesis with scientific explanation. Equipment [assessed in method]. Method [max 4]: partial → sufficient for IV + DV only → sufficient to follow + replicate conditions → complete + two CVs. Manipulation/Data [max 4]: ref to different increments or trials → at least 5 increments or 3 trials → at least 5 increments AND 3 trials → at least 5 increments AND 3 trials AND plans to calculate mean. Justification of range [max 4]: temperature range stated → explicitly stated as appropriate → based on safety considerations → plus the active range of the seeds\' enzymes.',
    keyConcepts: ['temperature wheat seeds respiration design investigation Criteria B IV DV CVs hypothesis method range justification'],
    keywords: ['temperature', 'IV', 'DV', 'CO₂ concentration', 'CVs', 'hypothesis', 'water bath', 'repeats', 'range', 'active range of enzymes'],
    feedbackHit: 'Complete Criteria B design with IV/DV/2CVs, scientific hypothesis, detailed method, sufficient data plan, and justified range.',
    feedbackMiss: 'IV = temperature (°C); DV = CO₂ concentration (ppm); CVs = mass/number of seeds, species of seed, volume of solution; Hypothesis: if temperature increases, CO₂ rate increases because enzymes work faster; Range justification: 10–40°C covers the active range of the seeds\' enzymes; ≥5 temperature increments; ≥3 repeats; calculate mean.',
  },

  // Q6 — Avian Influenza & Ecosystems

  q6_a: {
    marks: 1,
    exemplar: 'Vaccination (of poultry) OR culling/killing of infected birds. (Do NOT accept use of fences. Accept improved biosecurity / fewer infected birds.)',
    keyConcepts: ['bird flu Europe human action vaccination culling disease control'],
    keywords: ['vaccination', 'culling', 'killing', 'infected birds', 'human action', 'cases decrease'],
    feedbackHit: 'Valid human action that reduced bird-flu cases in Europe identified.',
    feedbackMiss: 'Human actions that reduced bird flu in Europe: vaccination programmes (of poultry) or culling/killing of infected birds (NOT use of fences).',
  },

  q6_b: {
    marks: 2,
    exemplar: 'Starting with a producer and a chain of organisms that are NOT birds [1]: Pond plants – pond snails – frog – perch [1]. OR Pond plants – mayfly larvae – frog – perch [1]. (Heron must NOT appear, as it is a bird.)',
    keyConcepts: ['food chain non-bird organisms pond plants snails mayfly frog perch bird flu'],
    keywords: ['pond plants', 'pond snails', 'mayfly larvae', 'frog', 'perch', 'producer', 'food chain'],
    feedbackHit: 'Valid food chain containing only non-bird organisms correctly identified.',
    feedbackMiss: 'Bird flu infects birds. Non-bird organisms: pond plants, pond snails, mayfly larvae, frog, perch. Valid chains: Pond plants → pond snails → frog → perch; Pond plants → mayfly larvae → frog → perch (the heron is a bird, so exclude it).',
  },

  q6_c: {
    marks: 5,
    exemplar: 'A correct use of any of the terms [1]: predator, prey, energy, trophic level, population, consumer. Two consequences [max 2]: perch population increases; frog population increases; mayfly larvae/snails population increases; heron population would decrease. Two correctly linked justifications [max 2]: fewer herons to eat perch/frogs so those prey populations rise; frogs no longer eaten by herons increase; more frogs means more food for perch so perch rise; fewer herons reduces predation pressure throughout the web.',
    keyConcepts: ['ecosystem bird flu heron food web consequences predator prey population biodiversity'],
    keywords: ['perch increases', 'frog increases', 'heron decreases', 'snail increases', 'predator', 'prey', 'population'],
    feedbackHit: 'Correct scientific vocabulary used; two consequences each with linked justification.',
    feedbackMiss: 'Infected herons decrease → their prey (frogs, perch) are eaten less → those populations increase; with more frogs the perch have more food → perch increase. Use terms: predator, prey, population.',
  },

  // Q7 — Oral Bird-Flu Vaccine Criteria D

  q7_a: {
    marks: 14,
    exemplar: 'Criteria D rubric (max 14). Oral vaccines [max 4]: advantage implied → advantage stated → advantage and disadvantage stated → both with justification. Population control [max 3]: suggestion related to limiting bird numbers → linked to reducing disease spread with justification → with further justification. Ethics [max 3]: reasonable statement → two statements → one with further justification → ethics with at least one further justification. Collaboration [max 3]: economic/political consideration → more than one → one with further development → more than one with further development. Conclusion [max 1]: concluding statement.',
    keyConcepts: ['oral vaccine injectable advantage disadvantage population control ethics collaboration global bird flu birds'],
    keywords: ['oral vaccine', 'injectable', 'advantage', 'disadvantage', 'population control', 'ethics', 'collaboration', 'economic', 'political', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D covering oral vs injectable, population-control rationale, ethics, collaboration, and conclusion.',
    feedbackMiss: 'Cover: oral vaccine advantages (easy distribution in feed, no need to catch each bird, no trained staff) and disadvantages (correct dose not guaranteed, not all birds reached); population control = fewer wild birds reduces transmission/reservoir; ethics of medicating wild birds; economic/political collaboration needed for cross-border disease control; concluding statement.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Advantage [max 1]: protects people at highest risk of exposure; can be included in a regular vaccination schedule; correct dose is guaranteed; develops immunity against the disease. Disadvantage [max 1]: not all farmers can be vaccinated; supply issues in remote areas; doesn\'t protect the birds themselves; may cause side effects. (Do NOT accept idea that the vaccine may cause harm.)',
    keyConcepts: ['farmer vaccination bird flu advantage disadvantage dose access supply side effects'],
    keywords: ['protects at-risk', 'regular schedule', 'correct dose', 'immunity', 'not all vaccinated', 'supply issues', 'side effects'],
    feedbackHit: 'One valid advantage and one valid disadvantage of vaccinating poultry farmers stated.',
    feedbackMiss: 'Advantage: protects the people most exposed to infected poultry / guaranteed correct dose / builds immunity. Disadvantage: supply issues in remote areas / not all farmers accessible / possible side effects.',
  },
}
