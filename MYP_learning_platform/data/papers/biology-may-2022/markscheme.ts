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

  // Q1 — Cells & Organisation

  q1_a: {
    marks: 1,
    exemplar: 'All correct: Does it have a nucleus? NO → Bacterial cell. YES → Does it have a large central vacuole? YES → Plant cell. NO → Animal cell.',
    keyConcepts: ['cell classification dichotomous key nucleus vacuole plant animal bacterial'],
    keywords: ['nucleus', 'vacuole', 'plant cell', 'animal cell', 'bacterial cell', 'key'],
    feedbackHit: 'Correct use of the classification key.',
    feedbackMiss: 'Bacterial cells have no nucleus. Plant cells have a large central vacuole; animal cells do not.',
  },

  q1_b: {
    marks: 1,
    exemplar: 'Any reasonable suggestion, for example: Does it have chloroplasts? / Does it have a cell wall? (Do not accept references to colour, shape or vacuole.)',
    keyConcepts: ['cell differences plant animal chloroplasts cell wall'],
    keywords: ['chloroplast', 'cell wall', 'plant', 'animal', 'distinction'],
    feedbackHit: 'Good — you identified a feature unique to one cell type.',
    feedbackMiss: 'Think of an organelle or structure only found in plant cells (chloroplasts, cell wall) that is absent in animal cells.',
  },

  q1_c: {
    marks: 1,
    exemplar: 'Mitochondrion (accept mitochondria).',
    keyConcepts: ['organelle mitochondrion metabolic reactions energy'],
    keywords: ['mitochondrion', 'mitochondria', 'site of metabolic reactions'],
    feedbackHit: 'Correct — mitochondria are the site of cellular respiration.',
    feedbackMiss: 'Organelle A is the site of all metabolic reactions — that is the mitochondrion.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Controls what enters or exits the cell. OR Separates the cell from the outside. (Do not accept references to protection or to the cell wall — this is a CON.)',
    keyConcepts: ['cell membrane function selective permeability transport'],
    keywords: ['cell membrane', 'controls entry', 'exits', 'separates', 'outside'],
    feedbackHit: 'Correct function of the cell membrane.',
    feedbackMiss: 'Organelle B is the cell membrane. It controls what enters and exits — not the same as protection (that is rejected).',
  },

  q1_e: {
    marks: 3,
    exemplar: 'Tissues are made out of cells [1]. Cells in a tissue are similar [1]. (And) work together (to perform a shared function) [1] OR Different tissues perform different functions [1]. Accept named examples of cells and tissues.',
    keyConcepts: ['cells tissues organisation function similarity cooperation'],
    keywords: ['tissue', 'cells', 'similar', 'work together', 'shared function', 'different tissues'],
    feedbackHit: 'Good outline covering composition, similarity, and function of tissues.',
    feedbackMiss: 'State: tissues are made of similar cells that work together to perform a shared function. Different tissues have different functions.',
  },

  // Q2 — Body Systems & Digestion

  q2_a: {
    marks: 2,
    exemplar: 'System 1: Nervous system [1]. System 2: Reproductive system [1].',
    keyConcepts: ['body systems nervous reproductive identification'],
    keywords: ['nervous system', 'reproductive system', 'body system'],
    feedbackHit: 'Both body systems correctly identified.',
    feedbackMiss: 'System 1 shows the brain and spinal cord — that is the nervous system. System 2 shows reproductive organs.',
  },

  q2_b: {
    marks: 1,
    exemplar: 'Metabolism.',
    keyConcepts: ['metabolism chemical processes cells'],
    keywords: ['metabolism', 'chemical processes', 'cells'],
    feedbackHit: 'Correct — metabolism is the term for all chemical processes in cells.',
    feedbackMiss: 'Digestion and circulation are specific processes; enzymes are catalysts. Metabolism covers ALL chemical processes in cells.',
  },

  q2_c: {
    marks: 3,
    exemplar: 'Breaks into smaller pieces [1] OR Easier to swallow [1]. To increase the surface area [1]. (So) chemical digestion is faster [1]. (WTTE — do not accept "easier" alone for 3rd mark.)',
    keyConcepts: ['mechanical digestion surface area enzyme efficiency mouth'],
    keywords: ['smaller pieces', 'surface area', 'chemical digestion', 'faster', 'enzyme'],
    feedbackHit: 'Good — you linked smaller pieces to increased surface area and faster enzyme digestion.',
    feedbackMiss: 'Breaking food into smaller pieces increases surface area, which allows enzymes to work faster during chemical digestion.',
  },

  q2_d: {
    marks: 1,
    exemplar: 'Sugars OR a named sugar (accept disaccharide or monosaccharide).',
    keyConcepts: ['carbohydrate digestion product sugar monosaccharide'],
    keywords: ['sugars', 'monosaccharide', 'disaccharide', 'glucose', 'carbohydrate digestion'],
    feedbackHit: 'Correct — carbohydrates are chemically digested to sugars/monosaccharides.',
    feedbackMiss: 'Carbohydrates are broken down into simple sugars (monosaccharides such as glucose) by enzyme action.',
  },

  q2_e: {
    marks: 4,
    exemplar: 'Accept any two correct features [max 2]: folds or villi or micro-villi or finger-like projection or long length; good blood supply; walls of villi/small intestine are one cell thick or semi-permeable; lacteal. Accept any two correct explanations [max 2]: large surface area for absorption; to carry nutrients to cell or maintains concentration gradient; short diffusion distance or efficient transfer of nutrients; absorbs/transports fatty acids and glycerol.',
    keyConcepts: ['small intestine villi adaptation absorption surface area diffusion blood supply lacteal'],
    keywords: ['villi', 'micro-villi', 'surface area', 'blood supply', 'one cell thick', 'lacteal', 'diffusion distance', 'concentration gradient'],
    feedbackHit: 'Excellent — you linked structural features of the small intestine to efficient nutrient absorption.',
    feedbackMiss: 'Describe features: villi increase surface area; thin walls shorten diffusion distance; blood supply maintains concentration gradient; lacteals absorb fatty acids.',
  },

  // Q3 — Eutrophication

  q3_a: {
    marks: 1,
    exemplar: 'Accept any reasonable natural source, for example: decaying or dead plants or animals; animal waste; soil or dirt. (WTTE — do not accept named nutrients.)',
    keyConcepts: ['eutrophication natural nutrient source decomposition'],
    keywords: ['decaying', 'dead plants', 'dead animals', 'animal waste', 'soil', 'dirt', 'natural'],
    feedbackHit: 'Correct natural source of nutrients identified.',
    feedbackMiss: 'Natural sources include dead/decaying organisms, animal waste, or soil erosion — not human activities.',
  },

  q3_b: {
    marks: 2,
    exemplar: 'Direct source [1]: fish farm; sewage treatment plants; industrial plants. Indirect source [1]: residential runoff; runoff from farms; runoff from industrial plants; runoff from sewage plant. (WTTE)',
    keyConcepts: ['eutrophication human sources direct indirect runoff sewage'],
    keywords: ['fish farm', 'sewage', 'industrial', 'residential runoff', 'farming runoff', 'direct', 'indirect'],
    feedbackHit: 'Correct direct and indirect human sources identified.',
    feedbackMiss: 'Direct = enters water directly (fish farms, sewage plants). Indirect = reaches water via runoff (farms, residential areas, industrial sites).',
  },

  q3_c: {
    marks: 3,
    exemplar: 'Nutrients reaching water source from a named source [1]. Providing the algae with increased nutrients [1]. (So) the algae reproduce more [1]. (WTTE — do not accept "grow". Do not accept "algal bloom" for 3rd mark. Do not award 3rd mark unless 2nd mark awarded.)',
    keyConcepts: ['eutrophication algae nutrients reproduction bloom mechanism'],
    keywords: ['nutrients', 'algae', 'reproduce', 'increased nutrients', 'water source', 'algal bloom'],
    feedbackHit: 'Good chain: nutrients enter water → algae get more nutrients → algae reproduce rapidly.',
    feedbackMiss: 'Nutrients from human sources enter the water body → algae receive more nutrients → algae reproduce more rapidly, causing a bloom.',
  },

  q3_d: {
    marks: 4,
    exemplar: 'Algal bloom blocks out sunlight [1]. Aquatic plants die due to lack of (sunlight for) photosynthesis [1]. Organic material broken down by bacteria causes oxygen in water to be depleted [1]. Oxygen depletion leads to death of aquatic organisms [1]. (Accept named organisms.)',
    keyConcepts: ['algal bloom sunlight photosynthesis oxygen depletion decomposition aquatic organisms death biomass'],
    keywords: ['blocks sunlight', 'photosynthesis', 'aquatic plants die', 'bacteria', 'oxygen depletion', 'death', 'biomass decrease'],
    feedbackHit: 'Excellent chain from algal bloom through to biomass decrease.',
    feedbackMiss: 'Algae block sunlight → aquatic plants cannot photosynthesise and die → bacteria decompose organic matter using up oxygen → aquatic animals die from lack of oxygen.',
  },

  // Q4 — Transpiration Investigation

  q4_a: {
    marks: 1,
    exemplar: 'The colour of the solution OR food colouring (added to water).',
    keyConcepts: ['independent variable transpiration food colouring investigation'],
    keywords: ['colour', 'food colouring', 'solution', 'independent variable', 'IV'],
    feedbackHit: 'Correct — the colour of the food colouring solution is the independent variable.',
    feedbackMiss: 'The IV is what the students changed between beakers — the colour of the food colouring added to water.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Volume (of water in beaker) [1]. Final and initial volumes [1]. Time (over which change occurred) or duration of experiment [1]. (Accept quantity/amount/cm³ of water.)',
    keyConcepts: ['transpiration rate calculation volume change time measurement'],
    keywords: ['volume', 'initial volume', 'final volume', 'time', 'duration', 'cm³', 'rate'],
    feedbackHit: 'Three measurements correctly identified for calculating transpiration rate.',
    feedbackMiss: 'Rate = change in volume ÷ time. You need: initial volume, final volume (to find change), and duration of experiment.',
  },

  q4_c: {
    marks: 2,
    exemplar: 'Accept any two: temperature of the environment; temperature of the water; species of plant; wind/air movement; dimensions of plant stem; surface area of plant leaves; light intensity/distance of light (from plant). (WTTE — do not accept quantity/amount of light.)',
    keyConcepts: ['control variables transpiration investigation temperature light species'],
    keywords: ['temperature', 'species of plant', 'wind', 'air movement', 'stem dimensions', 'light intensity', 'control variable'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables are kept constant: e.g. temperature, species of plant, light intensity, wind conditions, stem size.',
  },

  q4_d: {
    marks: 4,
    exemplar: 'Improvements [max 2]: stem was identified [1]; solution identified as water [1]; specified the numbers of dyes used / greater than 5 dyes used [1]. Justifications [max 2]: different parts of the plant may be affected differently [1]; shows this is controlled / enables repetition of the experiment [1]; gives information about how the IV is manipulated [1]. (Do not accept group 2 posed a question.)',
    keyConcepts: ['research question improvement justification investigation design variables'],
    keywords: ['stem identified', 'solution', 'number of dyes', 'controlled', 'repetition', 'IV manipulation'],
    feedbackHit: 'Good identification of improvements and matching justifications.',
    feedbackMiss: 'Group 2 identified the stem, specified water as the solution, and stated the number of dye colours — each improvement makes the method more controlled and repeatable.',
  },

  q4_e: {
    marks: 4,
    exemplar: 'Two significant figures used instead of one [1]; (so) smaller rounding errors or measurements are more precise [1]. (WTTE — ignore "accurate".) Inclusion of a control [1]; (control) enables a comparison to be made with no dye or normal water [1]. (WTTE)',
    keyConcepts: ['validity significant figures precision control group comparison'],
    keywords: ['significant figures', 'precision', 'rounding errors', 'control', 'comparison', 'no dye', 'valid'],
    feedbackHit: 'Both reasons with justifications correctly stated.',
    feedbackMiss: 'Two sig. figs. → more precise data. A control group (no dye) → comparison baseline to confirm water transport is not affected by dye itself.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'Accept any suggestion: not clear if they followed the same method; too many variables were not explicitly controlled or monitored; differences in the precision of data recorded; the two groups had different research questions. (Do not accept inclusion of control as not following the same method; do not accept number of decimal places; do not accept accuracy.)',
    keyConcepts: ['combining results reliability method consistency variables'],
    keywords: ['different method', 'variables not controlled', 'precision', 'different research question'],
    feedbackHit: 'Valid reason for not combining results identified.',
    feedbackMiss: 'The two groups had different research questions and methods — combining data from incompatible experiments is not valid.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Water cannot evaporate directly from the beaker [1]. Change in volume is due to transpiration [1] OR Evaporation does not affect the volume of water lost [1].',
    keyConcepts: ['sealing beakers evaporation transpiration confounding variable control'],
    keywords: ['evaporation', 'sealed', 'transpiration', 'volume', 'confounding', 'water loss'],
    feedbackHit: 'Correctly identified that sealing prevents evaporation from confounding transpiration data.',
    feedbackMiss: 'If the beaker is unsealed, water evaporates from the surface — sealing ensures any volume decrease is only due to transpiration through the plant.',
  },

  // Q5 — Criteria B: Potometer Design

  q5_: {
    marks: 17,
    exemplar: 'Criteria B rubric (max 17): Variables (max 4): IV = fan speed/air movement; DV = volume of water taken up / rate of water movement in potometer; 2 CVs = temperature, light intensity, species of plant, size of shoot. Hypothesis (max 4): testable, linked to DV, correct scientific direction, scientific explanation using transpiration/evaporation. Manipulation (max 4): how to change fan speed; how to measure DV (water movement in capillary tube); how to monitor CVs. Method (max 4): sufficient detail to follow and repeat; ≥3 trials; control condition. Justification (max 1): justify one calculation (e.g. rate = distance/time or volume/time). Safety (max 1): specific hazard linked to the investigation (e.g. avoid getting water on electrical fan).',
    keyConcepts: ['transpiration investigation design fan speed potometer variables hypothesis method safety Criteria B'],
    keywords: ['fan speed', 'air movement', 'IV', 'DV', 'potometer', 'transpiration rate', 'control variable', 'hypothesis', 'safety', 'calculation'],
    feedbackHit: 'Well-structured Criteria B design with clear variables, testable hypothesis, detailed method, and safety consideration.',
    feedbackMiss: 'Ensure you identify IV (fan speed), DV (water uptake rate), 2 CVs, a testable hypothesis with scientific reasoning, step-by-step method with repeats, one justified calculation, and a specific safety precaution.',
  },

  // Q6 — Stomata Investigation

  q6_a: {
    marks: 2,
    exemplar: 'Accept one point from list 1 [1] and one from list 2 [1]. List 1: too difficult/time-consuming to sample all leaves on a plant; to increase the accuracy of results; to allow the calculation of averages. List 2: to ensure the sample represents the whole plant; to avoid (sampling) bias; to avoid intentionally selecting certain leaves.',
    keyConcepts: ['random sampling bias representative accuracy averages leaves'],
    keywords: ['random sample', 'representative', 'bias', 'accuracy', 'averages', 'whole plant'],
    feedbackHit: 'Two valid reasons for random sampling given.',
    feedbackMiss: 'Random sampling: (1) allows averages and improves accuracy; (2) avoids bias and ensures the sample represents the whole plant.',
  },

  q6_b: {
    marks: 1,
    exemplar: 'Accept any reasonable response: the leaf might not be representative; the leaf might be damaged or dead or diseased. (WTTE)',
    keyConcepts: ['leaf rejection sampling criteria damaged diseased unrepresentative'],
    keywords: ['damaged', 'dead', 'diseased', 'not representative', 'rejected'],
    feedbackHit: 'Valid reason for leaf rejection given.',
    feedbackMiss: 'A leaf may be rejected if it is damaged, diseased, or otherwise not representative of a typical healthy leaf.',
  },

  q6_c: {
    marks: 1,
    exemplar: 'Sample 10 = 9 stomata.',
    keyConcepts: ['stomata count microscope field of view maize leaf sample'],
    keywords: ['stomata', 'count', 'sample 10', '9', 'field of view'],
    feedbackHit: 'Correct count for maize leaf sample 10.',
    feedbackMiss: 'Count each stomata visible in the 0.3 × 0.3 mm field of view for sample 10. The correct count is 9.',
    blankAnswers: ['9'],
  },

  q6_d: {
    marks: 3,
    exemplar: 'Any correctly calculated average e.g. 80/10 = 8 [1]. Stomatal density calculated: 88.88(…) or 88.89 [1]. Correctly rounded to 89 (mm⁻²) [1]. ECF from part c. Award one mark max if average is not used and stomatal density is shown ECF from 1st marking point. Award three marks if only 89 is seen ECF from 1st marking point.',
    keyConcepts: ['stomatal density calculation average area formula rounding significant figures'],
    keywords: ['average', '80/10', '8', '88.88', '88.89', '89', 'mm⁻²', 'stomatal density', 'calculation'],
    feedbackHit: 'Correct calculation of average and stomatal density with appropriate rounding.',
    feedbackMiss: 'Step 1: average stomata count = 80 ÷ 10 = 8. Step 2: density = 8 ÷ 0.09 mm² = 88.88... Step 3: round to 89 mm⁻².',
  },

  q6_e: {
    marks: 1,
    exemplar: 'Qualitative.',
    keyConcepts: ['data types qualitative quantitative descriptive pictures habitat'],
    keywords: ['qualitative', 'descriptive', 'pictures', 'habitat', 'non-numerical'],
    feedbackHit: 'Correct — pictures and habitat descriptions are qualitative data.',
    feedbackMiss: 'The pictures and habitat descriptions are non-numerical and descriptive — that is qualitative data.',
  },

  q6_f: {
    marks: 1,
    exemplar: 'Pondweed grows underwater / transpiration does not take place / gases diffuse through the epidermis (and not stomata). (Do not accept "it is an aquatic plant" alone.)',
    keyConcepts: ['pondweed stomata underwater gas exchange transpiration aquatic'],
    keywords: ['underwater', 'transpiration', 'gas exchange', 'epidermis', 'aquatic', 'no stomata'],
    feedbackHit: 'Correct — pondweed is submerged so stomata are not needed for gas exchange or water regulation.',
    feedbackMiss: 'Pondweed grows underwater, so transpiration does not occur and gases can diffuse directly through the epidermis without stomata.',
  },

  q6_g: {
    marks: 5,
    exemplar: 'Sunflowers have stomata on both sides [1]. Water lilies have stomata on one side or the top only [1]. Further explanatory points [max 3]: because transpiration happens in both / no stomata on surface in contact with water [1]; gas exchange occurs between stomata and air or not between stomata and water [1]; high stomatal density on top of water lily leaves or water lilies have greater stomatal density than sunflowers [1]; water lilies do not need to limit water loss or sunflowers do need to limit water loss [1].',
    keyConcepts: ['stomata distribution sunflower water lily adaptation transpiration gas exchange habitat comparison'],
    keywords: ['both sides', 'top only', 'transpiration', 'stomatal density', 'water contact', 'gas exchange', 'water loss', 'comparison'],
    feedbackHit: 'Excellent comparison of stomata distribution with scientific explanation of adaptations.',
    feedbackMiss: 'Sunflowers: stomata on both surfaces (terrestrial, needs gas exchange on both sides). Water lilies: stomata on upper surface only (lower surface contacts water — no transpiration or gas exchange needed there).',
  },

  // Q7 — Plastics, Enzymes & Natural Selection

  q7_a: {
    marks: 1,
    exemplar: 'The interconnected food chains in an ecosystem.',
    keyConcepts: ['food web definition interconnected food chains ecosystem'],
    keywords: ['food web', 'interconnected', 'food chains', 'ecosystem'],
    feedbackHit: 'Correct definition of a food web.',
    feedbackMiss: 'A food web shows all the interconnected food chains in an ecosystem — not just one chain.',
  },

  q7_b: {
    marks: 4,
    exemplar: 'Enzymes break the bonds (between the building blocks) [1]. Enzymes speed up the break down of plastics [1]. Further mark from the list [max 1]: (by) lowering activation energy; specific enzymes will break down specific plastics. Terminology mark [1]: correct use of one of: catalyse, catalyst, active site, substrate, product, induced fit, lock-and-key, catabolic. (WTTE)',
    keyConcepts: ['enzyme action plastic degradation bonds active site substrate catabolic natural selection'],
    keywords: ['bonds', 'building blocks', 'break down', 'activation energy', 'specific', 'active site', 'substrate', 'catabolic', 'catalyse'],
    feedbackHit: 'Good explanation of enzyme mechanism with correct scientific terminology.',
    feedbackMiss: 'Enzymes bind to plastic substrate at the active site, breaking bonds between building blocks, speeding up degradation by lowering activation energy. Use terms: catabolic, active site, substrate.',
  },

  q7_c: {
    marks: 2,
    exemplar: 'One of boxes 2, 3 or 4 correctly placed = 1 mark. Boxes 2, 3 and 4 all correctly placed = 2 marks. Correct order: Box 2 = "Individuals in a population have different characteristics from one another." Box 3 = "Individuals with characteristics adapted to the environment survive longer." Box 4 = "Characteristics of individuals who reproduce become more common in the population."',
    keyConcepts: ['natural selection variation survival reproduction adaptation population'],
    keywords: ['variation', 'adapted', 'survive longer', 'reproduce', 'more common', 'natural selection', 'population'],
    feedbackHit: 'Natural selection sequence correctly ordered.',
    feedbackMiss: 'Natural selection sequence: variation (Box 2) → survival of adapted individuals (Box 3) → traits become more common in population (Box 4).',
    blankAnswers: [
      'Individuals in a population have different characteristics from one another',
      'Individuals with characteristics adapted to the environment survive longer',
      'Characteristics of individuals who reproduce become more common in the population',
    ],
  },

  // Q8 — Plastics Recycling (Criteria D)

  q8_a: {
    marks: 13,
    exemplar: 'Criteria D rubric (max 13). Properties and uses (max 4): statement of one physical property or use → 2 physical properties + why useful → 2 properties + statement of why both are useful → 2 properties + why both are useful + why properties matter. Environmental consequences (max 4): one consequence stated → any 2 consequences or one in detail → consequence for one method + different consequence for second → different consequences for both methods with discussion. Economic impacts (max 4): one economic impact stated → 2 impacts or one in detail → impact for one method + different for second → different impacts for each method with discussion. Concluding appraisal: giving a concluding opinion about how best to recycle plastics → opinion with specific detail or comparison of methods.',
    keyConcepts: ['plastics properties recycling methods environmental consequences economic impacts Criteria D discussion evaluation'],
    keywords: ['chemical recycling', 'mechanical recycling', 'biological recycling', 'properties', 'environmental', 'economic', 'appraisal', 'lightweight', 'durable'],
    feedbackHit: 'Comprehensive Criteria D response with properties, environmental/economic consequences of two methods, and a justified conclusion.',
    feedbackMiss: 'Cover: (1) plastic properties and uses, (2) environmental consequences of two recycling methods, (3) economic impacts of two methods, (4) a concluding appraisal with your justified opinion.',
  },

  q8_b: {
    marks: 4,
    exemplar: 'Accept any two reasonable suggestions [max 2]: government actions (taxes, policy changes); education (raise awareness of impact of pollution); behavioural changes (choose alternatives, clean-up, reuse). Accept any two correctly linked justifications [max 2]: incentives would reward or penalise behaviours; knowing the impact of pollution; recognising how personal responsibility leads to change.',
    keyConcepts: ['plastic pollution reduction policy education behaviour government incentives'],
    keywords: ['government', 'taxes', 'policy', 'education', 'awareness', 'behaviour', 'alternatives', 'reuse', 'incentives'],
    feedbackHit: 'Two valid suggestions with justified links to reducing plastic pollution.',
    feedbackMiss: 'Suggest (e.g. government taxes on plastics / education campaigns) and justify why each would reduce pollution (e.g. financial incentives change behaviour / awareness leads to personal responsibility).',
  },
}
