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

  // Q1 — DNA, Genetics & Albinism

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
    keyConcepts: ['Punnett square alleles dominant recessive genotype inheritance albinism'],
    keywords: ['AA', 'Aa', 'aa', 'Punnett square', 'dominant', 'recessive', 'genotype'],
    feedbackHit: 'Punnett square completed correctly with all four genotypes.',
    feedbackMiss: 'Father Aa × Mother Aa: top-left AA (unaffected), top-right Aa (carrier), bottom-left Aa (carrier), bottom-right aa (affected). All four cells must be correct.',
  },

  q1_e: {
    marks: 1,
    exemplar: '50%. (Accept 0.5 or 1/2.)',
    keyConcepts: ['probability carrier Punnett square heterozygous Aa albinism'],
    keywords: ['50%', '0.5', '1/2', 'carrier', 'Aa', 'probability'],
    feedbackHit: 'Correct probability of being a carrier (Aa) calculated.',
    feedbackMiss: 'From the Punnett square: 2 out of 4 offspring are Aa (carriers = do not have the condition but can pass it on) = 50% or 1/2.',
  },

  q1_f: {
    marks: 2,
    exemplar: 'Large surface area (villi/microvilli increase area) [1]. Accept any further point [1]: thin wall / one cell thick → short diffusion distance; rich capillary (blood) supply maintains the concentration gradient; lacteal absorbs fats.',
    keyConcepts: ['villus structure absorption surface area thin wall capillary diffusion small intestine'],
    keywords: ['large surface area', 'villi', 'thin wall', 'one cell thick', 'capillary network', 'short diffusion distance'],
    feedbackHit: 'Large surface area plus one further structural adaptation correctly outlined.',
    feedbackMiss: 'A villus aids absorption by: (1) large surface area — many villi/microvilli; (2) thin wall (one cell thick) → short diffusion distance; (3) rich capillary network → maintains the concentration gradient.',
  },

  q1_g: {
    marks: 1,
    exemplar: 'Accept any reasonable problem: greater risk of sunburn / skin damage from UV light; higher risk of skin cancer; eye problems / sensitivity to bright light (poor vision). (Melanin normally protects skin from UV.)',
    keyConcepts: ['albinism melanin UV protection sunburn skin damage eyes vision'],
    keywords: ['sunburn', 'skin damage', 'UV light', 'skin cancer', 'eye problems', 'sensitive to light'],
    feedbackHit: 'Valid problem caused by the absence of melanin identified.',
    feedbackMiss: 'Without melanin the skin is not protected from UV light → greater risk of sunburn, skin damage and skin cancer; the eyes are also more sensitive to bright light.',
  },

  q1_h: {
    marks: 2,
    exemplar: 'Benefit [max 1]: can cure untreatable diseases; less medication is needed. (Accept correctly named condition.) Ethical consideration [max 1]: don\'t know the long-term effects; can be used to make cosmetic rather than medical changes; regulations may be different in different countries. (WTTE)',
    keyConcepts: ['gene editing CRISPR benefit ethical consideration long-term unknown cosmetic regulations'],
    keywords: ['cure disease', 'less medication', 'long-term effects', 'cosmetic', 'regulations', 'ethical'],
    feedbackHit: 'One benefit and one ethical consideration of gene editing correctly stated.',
    feedbackMiss: 'Benefit: gene editing (CRISPR) could cure genetic conditions like albinism. Ethics: unknown long-term effects; risk of cosmetic/non-medical use; varying regulations across countries.',
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

  // Q3 — Mung-Bean Seeds & Salt Stress Investigation

  q3_a: {
    marks: 1,
    exemplar: 'Growth. (Do NOT accept any other characteristic of life. Accept germination as growth.)',
    keyConcepts: ['characteristics of life growth germination mung-bean seeds'],
    keywords: ['growth', 'germination', 'seeds', 'getting bigger'],
    feedbackHit: 'Correct characteristic of life identified from germinating-seed video.',
    feedbackMiss: 'The video shows mung-bean seeds germinating and getting larger — this demonstrates growth, which is a key characteristic of living organisms.',
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
    exemplar: 'Independent variable: time spent in salt solution [1]. Dependent variable: CO₂ concentration [1]. (Accept ppm of CO₂; do NOT accept rate of CO₂.) Accept any two reasonable CVs [max 2]: temperature; mass/number of seeds; concentration of the salt solution; species of seed.',
    keyConcepts: ['variables salt stress mung-bean seeds respiration IV DV CV independent dependent control'],
    keywords: ['IV', 'time in salt solution', 'DV', 'CO₂ concentration', 'CV', 'temperature', 'mass of seeds', 'salt concentration'],
    feedbackHit: 'IV, DV, and two CVs all correctly identified.',
    feedbackMiss: 'IV = time spent in salt solution; DV = CO₂ concentration (ppm, not rate); CVs = temperature, mass/number of seeds, salt concentration, species of seed.',
  },

  q3_d: {
    marks: 3,
    exemplar: 'If: reference to increasing time in salt solution [1]. Then: the amount of CO₂ produced decreases OR the rate of CO₂ production decreases OR the rate of respiration decreases [1]. Because: link to salt drawing water out of the cells by osmosis OR affecting enzyme/cell function [1]. (ORA)',
    keyConcepts: ['hypothesis salt stress osmosis CO₂ respiration mung-bean seeds if then because enzyme'],
    keywords: ['if', 'time in salt solution increases', 'then', 'CO₂ decreases', 'because', 'osmosis', 'water leaves cells', 'enzyme'],
    feedbackHit: 'Well-formed If/Then/Because hypothesis with correct direction and scientific reasoning.',
    feedbackMiss: 'If the time in salt solution increases, then CO₂ production rate decreases, because the salt draws water out of the cells by osmosis, harming enzymes/cell function needed for respiration.',
  },

  q3_e: {
    marks: 1,
    exemplar: 'To control the temperature.',
    keyConcepts: ['water bath temperature control variable respiration mung-bean seeds'],
    keywords: ['control temperature', 'constant temperature', 'water bath', 'CV'],
    feedbackHit: 'Correct reason for using water bath stated.',
    feedbackMiss: 'The water bath controls temperature — it is a control variable. Without it, temperature changes would affect the rate of respiration independently of the salt treatment.',
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
    exemplar: 'To ensure the results are due to the salt treatment. OR It is a control experiment. (Accept: to allow comparisons between salt-treated and untreated seeds.)',
    keyConcepts: ['control experiment mung-bean seeds salt stress baseline comparison'],
    keywords: ['control experiment', 'baseline', 'due to salt', 'comparison', 'no salt'],
    feedbackHit: 'Correct reason for including untreated seeds.',
    feedbackMiss: 'Including seeds not soaked in salt is a control: it shows the baseline CO₂ production and allows comparison — confirming any changes are caused by the salt treatment.',
  },

  // Q4 — Salt Stress Data Analysis

  q4_a: {
    marks: 2,
    exemplar: 'To increase the trials per time-in-salt value [1]. Reduce random error OR increase accuracy OR calculate average [1]. (WTTE)',
    keyConcepts: ['repeats reliability accuracy random error average data collection'],
    keywords: ['increase trials', 'reduce random error', 'increase accuracy', 'calculate average'],
    feedbackHit: 'Reason and justification for using four students both correctly given.',
    feedbackMiss: 'Having four students repeat = more trials per data point → reduces random errors → allows calculation of a reliable average → increases accuracy of results.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Average concentration: 1010 [1]. Rate: 336.6666 [1]. Presentation with no decimal places: 337 [1]. (Accept any dp for the second mark.)',
    keyConcepts: ['average concentration CO₂ rate calculation data transformation ppm'],
    keywords: ['1010', '336.67', '337', 'average', 'rate', 'ppm min⁻¹', 'calculation'],
    feedbackHit: 'Average, rate calculation, and correct presentation all correct.',
    feedbackMiss: 'Average = (1006+1064+958+1012) ÷ 4 = 4040 ÷ 4 = 1010 ppm. Rate = 1010 ÷ 3 = 336.67 → 337 ppm min⁻¹ (rounded to no dp).',
  },

  q4_c: {
    marks: 4,
    exemplar: 'Data points (0, 680) and (36, 185) plotted correctly [1+1]. Line of best fit [1]. X axis: Time in salt solution / min [1]. Y axis: Rate of CO₂ production / ppm min⁻¹ [1]. (Units must be included in marks 3 and 4. Plot the 24 min point at 337.)',
    keyConcepts: ['graph plot salt solution time CO₂ rate line of best fit axes labels units'],
    keywords: ['data points', 'line of best fit', 'time in salt solution', 'CO₂ rate', 'ppm min⁻¹', 'axes labels'],
    feedbackHit: 'Both data points, line of best fit, and both axes correctly labelled with units.',
    feedbackMiss: 'Plot (0, 680), (12, 497), (24, 337) and (36, 185); draw a line of best fit; label X axis "Time in salt solution / min" and Y axis "Rate of CO₂ production / ppm min⁻¹" (units required).',
  },

  q4_d: {
    marks: 1,
    exemplar: '433 ± 5 (ppm min⁻¹). (ECF from part (c) — check the trend line if necessary.)',
    keyConcepts: ['graph prediction line of best fit 18 minutes CO₂ rate salt solution'],
    keywords: ['433', 'ppm min⁻¹', 'predict', '18 minutes', 'line of best fit', 'read off'],
    feedbackHit: 'Correct rate read from line of best fit at 18 minutes.',
    feedbackMiss: 'From the line of best fit at x = 18 min, read the y value → approximately 433 ppm min⁻¹ (accept ± 5).',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: the food/sugar store in the seed is a limiting factor (used up); the seeds are dead; no respiration is happening. (Do NOT accept lack of oxygen.)',
    keyConcepts: ['CO₂ concentration unchanged limiting factor seeds dead food store respiration'],
    keywords: ['sugar limiting', 'food store', 'seeds dead', 'no respiration', '600 ppm'],
    feedbackHit: 'Two valid reasons for unchanged CO₂ concentration identified.',
    feedbackMiss: 'CO₂ unchanged at 600 ppm because: (1) the seed\'s stored food (sugar/starch) ran out and is now limiting; (2) the seeds died; (3) no more respiration is occurring.',
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
    exemplar: 'As the time in salt solution increases, the number of changes in gene expression increases. (Accept positive correlation.)',
    keyConcepts: ['salt stress gene expression changes positive correlation time osmosis'],
    keywords: ['salt time increases', 'gene changes increase', 'positive correlation', 'expression'],
    feedbackHit: 'Correct positive relationship between time in salt and gene-expression changes stated.',
    feedbackMiss: 'The table shows: longer time in salt solution → more changes in the expression of Genes A, B, and C (positive correlation).',
  },

  q4_h: {
    marks: 3,
    exemplar: 'Cellular respiration is less for longer salt exposure [1]. Longer time in salt solution causes more changes in genes coding for enzymes [1]. Accept a further point [1]: change in enzyme active site; can no longer bind to substrate; enzyme is denatured; water lost by osmosis disrupts the cell. (Accept mutations for changes.)',
    keyConcepts: ['salt stress enzyme gene change active site denatured osmosis respiration decrease'],
    keywords: ['cellular respiration less', 'gene changes', 'enzyme active site', 'denatured', 'cannot bind substrate', 'osmosis'],
    feedbackHit: 'Complete chain from salt → gene/enzyme change → reduced respiration.',
    feedbackMiss: 'More salt exposure → more changes in genes for enzymes → enzyme active site changes/denatured (and water lost by osmosis) → cannot respire → rate of respiration decreases.',
  },

  q4_i: {
    marks: 2,
    exemplar: 'Accept any two reasonable suggestions: salt stopped seed respiration after 48 mins [1]; as salt inhibited the seeds, it may also inhibit/kill other microorganisms [1]; (but) no evidence that other microorganisms are killed [1]; may not be practical to use this method on all foods [1]; there is not sufficient detail about control variables/method [1].',
    keyConcepts: ['salt preserving food microorganisms effectiveness evidence limitations'],
    keywords: ['seeds stopped respiring', 'other microorganisms', 'no evidence', 'not practical', 'lack of CVs'],
    feedbackHit: 'Two valid points (supporting and/or limiting) regarding salt preservation effectiveness.',
    feedbackMiss: 'Evidence for: seeds stop respiring at 48 min → salt may inhibit microbes too. Evidence against: no data on other microorganisms; impractical/changes taste for all foods; missing CV details.',
  },

  // Q5 — Criteria B Design Investigation (glucose concentration × seed respiration)

  q5_: {
    marks: 19,
    exemplar: 'Criteria B rubric (max 19). Variables [max 4]: some implied → IV or DV + one CV explicitly → IV and DV + one CV → IV and DV + two CVs. Hypothesis [max 3]: simple RQ → prediction linking IV to DV → hypothesis with scientific explanation. Equipment [assessed in method]. Method [max 4]: partial → sufficient for IV + DV only → sufficient to follow + replicate conditions → complete + two CVs. Manipulation/Data [max 4]: ref to different increments or trials → at least 5 increments or 3 trials → at least 5 increments AND 3 trials → at least 5 increments AND 3 trials AND plans to calculate mean. Justification of range [max 4]: glucose-concentration range stated → explicitly stated as appropriate → covers low to high concentrations → plus reference to avoiding water loss by osmosis at very high concentrations.',
    keyConcepts: ['glucose concentration mung-bean seeds respiration design investigation Criteria B IV DV CVs hypothesis method range justification'],
    keywords: ['glucose concentration', 'IV', 'DV', 'CO₂ concentration', 'CVs', 'hypothesis', 'repeats', 'range', 'osmosis'],
    feedbackHit: 'Complete Criteria B design with IV/DV/2CVs, scientific hypothesis, detailed method, sufficient data plan, and justified range.',
    feedbackMiss: 'IV = glucose concentration (%); DV = CO₂ concentration (ppm); CVs = temperature, mass/number of seeds, volume of solution; Hypothesis: as glucose concentration increases, CO₂ rate increases because more substrate is available for respiration (up to a point); Range justification: 0–8% covers low to high concentrations and avoids extreme water loss by osmosis; ≥5 increments; ≥3 repeats; calculate mean.',
  },

  // Q6 — Canine Distemper & Ecosystems

  q6_a: {
    marks: 1,
    exemplar: 'Vaccination (of wild or domestic animals) OR culling/killing of infected animals. (Do NOT accept use of fences. Accept fewer infected animals.)',
    keyConcepts: ['canine distemper Europe human action vaccination culling disease control'],
    keywords: ['vaccination', 'culling', 'killing', 'infected animals', 'human action', 'cases decrease'],
    feedbackHit: 'Valid human action that reduced distemper cases in Europe identified.',
    feedbackMiss: 'Human actions that reduced distemper in Europe: vaccination programmes (of domestic dogs or wild foxes) or culling/killing of infected animals (NOT use of fences).',
  },

  q6_b: {
    marks: 2,
    exemplar: 'Starting with a producer and a chain of organisms that are NOT mammals [1]: Oak tree – caterpillars – song thrush [1]. OR Grasses/Oak – caterpillars – song thrush [1]. (No mammals — vole, fox and owl... note owl and thrush are birds, caterpillar is an insect; the vole/fox are mammals and must be excluded.)',
    keyConcepts: ['food chain non-mammal organisms oak caterpillars song thrush owl canine distemper'],
    keywords: ['oak tree', 'caterpillars', 'song thrush', 'owl', 'producer', 'food chain', 'not mammals'],
    feedbackHit: 'Valid food chain containing only non-mammal organisms correctly identified.',
    feedbackMiss: 'Canine distemper infects mammals. Non-mammal organisms here: oak tree, grasses, caterpillars, song thrush, tawny owl. Valid chains: Oak tree → caterpillars → song thrush (→ tawny owl). Exclude the vole and fox, which are mammals.',
  },

  q6_c: {
    marks: 5,
    exemplar: 'A correct use of any of the terms [1]: predator, prey, energy, trophic level, population, consumer. Two consequences [max 2]: vole population increases; song thrush population increases; tawny owl population increases (or decreases if foxes were its competitor); caterpillar population changes. Two correctly linked justifications [max 2]: fewer foxes means voles are eaten less so vole numbers rise; with more voles the owl has more prey so owl numbers rise; less competition from foxes for the owl; energy passes to fewer predators.',
    keyConcepts: ['ecosystem canine distemper fox food web consequences predator prey population biodiversity'],
    keywords: ['vole increases', 'owl increases', 'thrush increases', 'predator', 'prey', 'population', 'competition'],
    feedbackHit: 'Correct scientific vocabulary used; two consequences each with linked justification.',
    feedbackMiss: 'Infected foxes decrease → their prey (voles, thrushes) are eaten less → those populations increase; with more voles the owl has more food → owl numbers may rise; less competition for the owl. Use terms: predator, prey, population.',
  },

  // Q7 — Oral Fox Distemper Vaccine Criteria D

  q7_a: {
    marks: 14,
    exemplar: 'Criteria D rubric (max 14). Oral vaccines [max 4]: advantage implied → advantage stated → advantage and disadvantage stated → both with justification. Population control [max 3]: suggestion related to limiting fox numbers → linked to reducing disease spread with justification → with further justification. Ethics [max 3]: reasonable statement → two statements → one with further justification → ethics with at least one further justification. Collaboration [max 3]: economic/political consideration → more than one → one with further development → more than one with further development. Conclusion [max 1]: concluding statement.',
    keyConcepts: ['oral vaccine injectable advantage disadvantage population control ethics collaboration global canine distemper foxes'],
    keywords: ['oral vaccine', 'injectable', 'advantage', 'disadvantage', 'population control', 'ethics', 'collaboration', 'economic', 'political', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D covering oral vs injectable, population-control rationale, ethics, collaboration, and conclusion.',
    feedbackMiss: 'Cover: oral vaccine advantages (easy distribution in bait, no need to catch each fox, no trained staff) and disadvantages (correct dose not guaranteed, not all foxes reached); population control = fewer foxes reduces transmission/reservoir; ethics of medicating wild foxes; economic/political collaboration needed for cross-border disease control; concluding statement.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Advantage [max 1]: can be included in a routine pet vaccination schedule; correct dose is guaranteed; develops immunity against the disease. Disadvantage [max 1]: not all dogs are vaccinated; supply/cost issues in some areas; doesn\'t protect wild animals; may cause side effects. (Do NOT accept idea that the vaccine may cause harm.)',
    keyConcepts: ['dog vaccination canine distemper advantage disadvantage dose access supply side effects'],
    keywords: ['routine schedule', 'correct dose', 'immunity', 'not all vaccinated', 'supply issues', 'side effects'],
    feedbackHit: 'One valid advantage and one valid disadvantage of vaccinating domestic dogs stated.',
    feedbackMiss: 'Advantage: included in routine pet vaccination schedule / guaranteed correct dose / builds immunity. Disadvantage: not all dog owners vaccinate / cost or supply issues / does not protect wild foxes / possible side effects.',
  },
}
