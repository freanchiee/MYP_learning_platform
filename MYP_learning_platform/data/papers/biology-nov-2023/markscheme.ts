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

  // Q1 — DNA, Genetics & Cystic Fibrosis

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
    exemplar: 'A paired with T [1]. C paired with G [1]. (U and N are distractors.)',
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
    keyConcepts: ['Punnett square alleles dominant recessive genotype inheritance cystic fibrosis'],
    keywords: ['AA', 'Aa', 'aa', 'Punnett square', 'dominant', 'recessive', 'genotype'],
    feedbackHit: 'Punnett square completed correctly with all four genotypes.',
    feedbackMiss: 'Father Aa × Mother Aa: top-left AA (healthy), top-right Aa (carrier), bottom-left Aa (carrier), bottom-right aa (affected). All four cells must be correct.',
  },

  q1_e: {
    marks: 1,
    exemplar: '50%. (Accept 0.5 or 1/2.)',
    keyConcepts: ['probability carrier Punnett square heterozygous Aa cystic fibrosis'],
    keywords: ['50%', '0.5', '1/2', 'carrier', 'Aa', 'probability'],
    feedbackHit: 'Correct probability of being a carrier (Aa) calculated.',
    feedbackMiss: 'From the Punnett square: 2 out of 4 offspring are Aa (carriers = do not have disease but can pass it on) = 50% or 1/2.',
  },

  q1_f: {
    marks: 2,
    exemplar: 'Large surface area [1]. Accept any further point [1]: short diffusion distance or 1 cell thick; good blood supply or capillary network; they are moist.',
    keyConcepts: ['alveoli structure gas exchange surface area diffusion capillary moist thin'],
    keywords: ['large surface area', 'thin walls', 'moist', 'capillary network', 'blood supply', 'short diffusion distance'],
    feedbackHit: 'Large surface area plus one further structural adaptation correctly outlined.',
    feedbackMiss: 'Alveoli support gas exchange by: (1) large surface area — many alveoli increase total area; (2) thin/moist walls — short diffusion distance; (3) capillary network — maintains concentration gradient.',
  },

  q1_g: {
    marks: 1,
    exemplar: 'Accept any reasonable symptom: tiredness OR shortness of breath; cough; low blood oxygen; increased lung infections.',
    keyConcepts: ['cystic fibrosis symptoms mucus alveoli breathing oxygen infections'],
    keywords: ['tiredness', 'shortness of breath', 'cough', 'low blood oxygen', 'lung infections'],
    feedbackHit: 'Valid symptom of mucus accumulation in alveoli identified.',
    feedbackMiss: 'Mucus in alveoli blocks gas exchange → less oxygen absorbed → tiredness/shortness of breath/low blood oxygen. Also traps bacteria → increased infections.',
  },

  q1_h: {
    marks: 2,
    exemplar: 'Benefit [max 1]: can cure untreatable diseases; less medication is needed. (Accept correctly named disease.) Ethical consideration [max 1]: don\'t know the long-term effects; can be used to make cosmetic rather than medical changes; regulations may be different in different countries. (WTTE)',
    keyConcepts: ['gene editing CRISPR benefit ethical consideration long-term unknown cosmetic regulations'],
    keywords: ['cure disease', 'less medication', 'long-term effects', 'cosmetic', 'regulations', 'ethical'],
    feedbackHit: 'One benefit and one ethical consideration of gene editing correctly stated.',
    feedbackMiss: 'Benefit: gene editing (CRISPR) could cure genetic diseases like CF. Ethics: unknown long-term effects; risk of cosmetic/non-medical use; varying regulations across countries.',
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
    feedbackMiss: 'Other responses to cold: shivering (muscles rapidly contract to generate heat); vasoconstriction (blood vessels narrow to reduce heat loss at surface).',
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
    feedbackMiss: 'Other negative feedback examples: blood glucose (insulin/glucagon); water levels (ADH); CO₂ concentration; hormone levels (FSH/LH in menstrual cycle).',
  },

  // Q3 — Yeast & UV Radiation Investigation

  q3_a: {
    marks: 1,
    exemplar: 'Reproduction. (Do NOT accept any other characteristic of life.)',
    keyConcepts: ['characteristics of life reproduction yeast budding unicellular'],
    keywords: ['reproduction', 'budding', 'yeast', 'dividing'],
    feedbackHit: 'Correct characteristic of life identified from yeast budding video.',
    feedbackMiss: 'The video shows yeast cells dividing/budding — this demonstrates reproduction, which is a key characteristic of living organisms.',
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
    exemplar: 'Independent variable: duration/time of exposure to UV [1]. Dependent variable: CO₂ concentration [1]. (Accept ppm of CO₂; do NOT accept rate of CO₂.) Accept any two reasonable CVs [max 2]: temperature; concentration of sugar; type of sugar; concentration of yeast.',
    keyConcepts: ['variables UV radiation yeast respiration IV DV CV independent dependent control'],
    keywords: ['IV', 'UV exposure time', 'DV', 'CO₂ concentration', 'CV', 'temperature', 'sugar concentration', 'yeast concentration'],
    feedbackHit: 'IV, DV, and two CVs all correctly identified.',
    feedbackMiss: 'IV = duration/time of UV exposure; DV = CO₂ concentration (ppm, not rate); CVs = temperature, sugar concentration, yeast concentration, type of sugar.',
  },

  q3_d: {
    marks: 3,
    exemplar: 'If: reference to increasing exposure time [1]. Then: the amount of CO₂ produced decreases OR the rate of CO₂ production decreases OR the rate of respiration decreases [1]. Because: link to UV affecting enzyme OR DNA OR structure of the enzyme [1]. (ORA)',
    keyConcepts: ['hypothesis UV radiation CO₂ respiration yeast if then because enzyme DNA'],
    keywords: ['if', 'UV exposure increases', 'then', 'CO₂ decreases', 'because', 'enzyme', 'DNA', 'structure'],
    feedbackHit: 'Well-formed If/Then/Because hypothesis with correct direction and scientific reasoning.',
    feedbackMiss: 'If UV exposure time increases, then CO₂ production rate decreases, because UV radiation affects the structure of enzymes (or DNA) needed for respiration.',
  },

  q3_e: {
    marks: 1,
    exemplar: 'To control the temperature.',
    keyConcepts: ['water bath temperature control variable respiration yeast'],
    keywords: ['control temperature', 'constant temperature', 'water bath', 'CV'],
    feedbackHit: 'Correct reason for using water bath stated.',
    feedbackMiss: 'The water bath controls temperature — it is a control variable. Without it, temperature changes would affect the rate of respiration independently of UV exposure.',
  },

  q3_f: {
    marks: 4,
    exemplar: 'Accept any two weaknesses [max 2]: not enough increments; not enough trials; lack of (named) control variables; inaccurate measuring equipment. Accept any two correctly linked justifications [max 2]: enough increments needed to observe a reliable trend; more trials yield more accurate data OR reduce random errors OR not enough data to calculate a valid average; (lack of CVs) data are not reliable OR not a fair test OR different sugars respire at different rates; imprecise data.',
    keyConcepts: ['investigation weakness justification increments trials CVs equipment accuracy'],
    keywords: ['not enough increments', 'not enough trials', 'no control variables', 'inaccurate equipment', 'reliable trend', 'valid average'],
    feedbackHit: 'Two weaknesses each with a correctly linked justification identified.',
    feedbackMiss: 'Weaknesses: (1) not enough increments → need more to see reliable trend; (2) only one trial → need repeats to get valid average/reduce random error; (3) no named CVs → data not reliable/fair test.',
  },

  q3_g: {
    marks: 1,
    exemplar: 'To ensure the results are due to UV exposure. OR It is a control experiment. (Accept: to allow comparisons between UV exposure and no UV exposure.)',
    keyConcepts: ['control experiment yeast UV radiation baseline comparison'],
    keywords: ['control experiment', 'baseline', 'due to UV', 'comparison', 'no UV exposure'],
    feedbackHit: 'Correct reason for including non-UV-exposed yeast.',
    feedbackMiss: 'Including yeast with no UV exposure is a control: it shows the baseline CO₂ production and allows comparison — confirming any changes are caused by UV.',
  },

  // Q4 — UV Radiation Data Analysis

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
    exemplar: 'Average concentration: 1301 [1]. Rate: 433.6666 [1]. Presentation with no decimal places: 434 [1]. (Accept any dp for the second mark.)',
    keyConcepts: ['average concentration CO₂ rate calculation data transformation ppm'],
    keywords: ['1301', '433.67', '434', 'average', 'rate', 'ppm min⁻¹', 'calculation'],
    feedbackHit: 'Average, rate calculation, and correct presentation all correct.',
    feedbackMiss: 'Average = (1278+1199+1406+1321) ÷ 4 = 5204 ÷ 4 = 1301 ppm. Rate = 1301 ÷ 3 = 433.67 → 434 ppm min⁻¹ (rounded to no dp).',
  },

  q4_c: {
    marks: 4,
    exemplar: 'Data points (0, 783) and (45, 250) plotted correctly [1+1]. Line of best fit [1]. X axis: Time of UV exposure / min [1]. Y axis: Rate of CO₂ production / ppm min⁻¹ [1]. (Units must be included in marks 3 and 4. Ignore data point at 30 min.)',
    keyConcepts: ['graph plot UV exposure time CO₂ rate line of best fit axes labels units'],
    keywords: ['data points', 'line of best fit', 'UV exposure time', 'CO₂ rate', 'ppm min⁻¹', 'axes labels'],
    feedbackHit: 'Both data points, line of best fit, and both axes correctly labelled with units.',
    feedbackMiss: 'Plot (0, 783) and (45, 250); draw a line of best fit through both points; label X axis "Time of UV exposure / min" and Y axis "Rate of CO₂ production / ppm min⁻¹" (units required).',
  },

  q4_d: {
    marks: 1,
    exemplar: '550 ± 5 (ppm min⁻¹). (ECF from part (c) — check the trend line if necessary.)',
    keyConcepts: ['graph prediction line of best fit 20 minutes CO₂ rate UV exposure'],
    keywords: ['550', 'ppm min⁻¹', 'predict', '20 minutes', 'line of best fit', 'read off'],
    feedbackHit: 'Correct rate read from line of best fit at 20 minutes.',
    feedbackMiss: 'From the line of best fit at x = 20 min, read the y value → approximately 550 ppm min⁻¹ (accept ± 5).',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: sugar is a limiting factor; yeast is dead (from ethanol poisoning); no respiration is happening. (Do NOT accept lack of oxygen.)',
    keyConcepts: ['CO₂ concentration unchanged limiting factor yeast dead ethanol sugar respiration'],
    keywords: ['sugar limiting', 'yeast dead', 'ethanol', 'no respiration', '750 ppm'],
    feedbackHit: 'Two valid reasons for unchanged CO₂ concentration identified.',
    feedbackMiss: 'CO₂ unchanged at 750 ppm because: (1) sugar ran out and is now limiting; (2) yeast died from ethanol accumulation; (3) no more respiration occurring.',
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
    exemplar: 'As exposure time (to UV) increases, the number of changes in DNA increases. (Accept positive correlation.)',
    keyConcepts: ['UV radiation DNA changes positive correlation exposure time mutations'],
    keywords: ['UV increases', 'DNA changes increase', 'positive correlation', 'mutations'],
    feedbackHit: 'Correct positive relationship between UV exposure and DNA changes stated.',
    feedbackMiss: 'The table shows: longer UV exposure → more changes in DNA of Genes A, B, and C (positive correlation).',
  },

  q4_h: {
    marks: 3,
    exemplar: 'Cellular respiration is less for longer exposure [1]. Longer exposure time (to UV) causes more changes in DNA of enzymes [1]. Accept a further point [1]: change in enzyme active site; can no longer bind to substrate; enzyme is denatured. (Accept mutations for changes.)',
    keyConcepts: ['UV radiation enzyme DNA mutation active site denatured respiration decrease'],
    keywords: ['cellular respiration less', 'DNA changes', 'enzyme active site', 'denatured', 'cannot bind substrate'],
    feedbackHit: 'Complete chain from UV → DNA changes → enzyme structure → reduced respiration.',
    feedbackMiss: 'UV → more DNA mutations in enzyme genes → enzyme active site changes/denatured → cannot bind substrate → rate of respiration decreases.',
  },

  q4_i: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: yeast was killed after 60 mins [1]; as UV killed yeast, it may also kill other microorganisms [1]; (but) no evidence that other microorganisms are killed [1]; may not be practical to use this method outside the lab [1]; there is not sufficient detail about control variables/method [1].',
    keyConcepts: ['UV sanitizing surfaces microorganisms effectiveness evidence limitations'],
    keywords: ['yeast killed', 'other microorganisms', 'no evidence', 'not practical', 'lack of CVs'],
    feedbackHit: 'Two valid points (supporting and/or limiting) regarding UV sanitization effectiveness.',
    feedbackMiss: 'Evidence for: yeast killed at 60 min → UV may kill bacteria too. Evidence against: no data on other microorganisms; impractical outside lab; missing CV details.',
  },

  // Q5 — Criteria B Design Investigation

  q5_: {
    marks: 19,
    exemplar: 'Criteria B rubric (max 19). Variables [max 4]: some implied → IV or DV + one CV explicitly → IV and DV + one CV → IV and DV + two CVs. Hypothesis [max 3]: simple RQ → prediction linking IV to DV → hypothesis with scientific explanation. Equipment [assessed in method]. Method [max 4]: partial → sufficient for IV + DV only → sufficient to follow + replicate conditions → complete + two CVs. Manipulation/Data [max 4]: ref to different increments or trials → at least 5 increments or 3 trials → at least 5 increments AND 3 trials → at least 5 increments AND 3 trials AND plans to calculate mean. Justification of range [max 4]: temperature range stated → explicitly stated as appropriate → based on safety considerations → plus the active range of yeast.',
    keyConcepts: ['temperature yeast respiration design investigation Criteria B IV DV CVs hypothesis method range justification'],
    keywords: ['temperature', 'IV', 'DV', 'CO₂ concentration', 'CVs', 'hypothesis', 'water bath', 'repeats', 'range', 'active range of yeast'],
    feedbackHit: 'Complete Criteria B design with IV/DV/2CVs, scientific hypothesis, detailed method, sufficient data plan, and justified range.',
    feedbackMiss: 'IV = temperature (°C); DV = CO₂ concentration (ppm); CVs = sugar concentration, yeast concentration, volume of solution; Hypothesis: if temperature increases, CO₂ rate increases because enzymes work faster; Range justification: 20–40°C covers active range of yeast enzymes; ≥5 temperature increments; ≥3 repeats; calculate mean.',
  },

  // Q6 — Rabies & Ecosystems

  q6_a: {
    marks: 1,
    exemplar: 'Vaccination OR killing of infected bats. (Do NOT accept use of fences. Accept fewer bats.)',
    keyConcepts: ['bat rabies Europe human action vaccination killing disease control'],
    keywords: ['vaccination', 'killing', 'infected bats', 'human action', 'rabies cases decrease'],
    feedbackHit: 'Valid human action that reduced bat rabies cases in Europe identified.',
    feedbackMiss: 'Human actions that reduced bat rabies in Europe: vaccination programmes or culling/killing of infected bats (NOT use of fences, which doesn\'t work for bats).',
  },

  q6_b: {
    marks: 2,
    exemplar: 'Starting with a producer and three organisms linked in the web [1]: Plants – insects – frog – eagle [1]. OR Plants – insects – woodpecker – eagle [1].',
    keyConcepts: ['food chain non-mammal organisms plants insects frog eagle woodpecker rabies'],
    keywords: ['plants', 'insects', 'frog', 'eagle', 'woodpecker', 'producer', 'food chain'],
    feedbackHit: 'Valid 4-organism food chain containing only non-mammal organisms correctly identified.',
    feedbackMiss: 'Rabies infects mammals. Non-mammal organisms: plants, insects/crustaceans, frog, woodpecker, eagle. Valid chains: Plants → insects → frog → eagle; Plants → insects → woodpecker → eagle.',
  },

  q6_c: {
    marks: 5,
    exemplar: 'A correct use of any of the terms [1]: predator, prey, energy, trophic level, population, consumer. Two consequences [max 2]: cougar population decreases; squirrel population increases; frog population increases; eagle would increase; deer population would decrease; cougars become infected with rabies. Two correctly linked justifications [max 2]: fewer raccoons to eat so cougars lack food supply; squirrels are not being eaten by raccoons; frogs not eaten by raccoons; more squirrels/frogs as food for eagle; cougars eat deer to replace raccoons; scratched or bitten by raccoons.',
    keyConcepts: ['ecosystem rabies raccoon food web consequences predator prey population biodiversity'],
    keywords: ['cougar decreases', 'squirrel increases', 'frog increases', 'eagle increases', 'deer decreases', 'predator', 'prey', 'population'],
    feedbackHit: 'Correct scientific vocabulary used; two consequences each with linked justification.',
    feedbackMiss: 'Infected raccoons decrease → cougar has less food → cougar decreases; squirrels/frogs not being eaten by raccoons → they increase; eagle has more food → eagle increases. Use terms: predator, prey, population.',
  },

  // Q7 — Oral Rabies Vaccine Criteria D

  q7_a: {
    marks: 14,
    exemplar: 'Criteria D rubric (max 14). Oral vaccines [max 4]: advantage implied → advantage stated → advantage and disadvantage stated → both with justification. Contraceptive [max 3]: suggestion related to population control → suggestion linked to population control with justification → ethics with further justification. Ethics [max 3]: reasonable statement → two statements → one with further justification → ethics with at least one further justification. Collaboration [max 3]: economic/political consideration → more than one → one with further development → more than one with further development. Conclusion [max 1]: concluding statement.',
    keyConcepts: ['oral vaccine injectable advantage disadvantage contraceptive ethics collaboration global rabies dogs'],
    keywords: ['oral vaccine', 'injectable', 'advantage', 'disadvantage', 'contraceptive', 'population control', 'ethics', 'collaboration', 'economic', 'political', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D covering oral vs injectable, contraceptive rationale, ethics, collaboration, and conclusion.',
    feedbackMiss: 'Cover: oral vaccine advantages (easy distribution in food, no trained staff needed) and disadvantages (correct dose not guaranteed, not all animals vaccinated); contraceptive = population control reduces rabies vectors; ethics of using vaccines on wild animals; economic/political collaboration needed for cross-border disease control; concluding statement.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Advantage [max 1]: can be included in regular vaccination schedule; correct dose is guaranteed; develop immunity against the disease. Disadvantage [max 1]: not all people can be vaccinated; supply issues in remote areas; doesn\'t cure disease OR dogs will still suffer from it; may cause side effects. (Do NOT accept idea that the vaccine may cause harm.)',
    keyConcepts: ['child vaccination rabies advantage disadvantage dose access supply side effects'],
    keywords: ['regular schedule', 'correct dose', 'immunity', 'not all vaccinated', 'supply issues', 'side effects'],
    feedbackHit: 'One valid advantage and one valid disadvantage of child vaccination stated.',
    feedbackMiss: 'Advantage: included in regular vaccination schedule / guaranteed correct dose / builds immunity. Disadvantage: supply issues in remote areas / not all children accessible / possible side effects.',
  },
}
