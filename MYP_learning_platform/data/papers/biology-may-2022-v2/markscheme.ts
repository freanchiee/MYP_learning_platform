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
    exemplar: 'All correct: Does it have a nucleus? NO → Bacterial cell. YES → Does it have a cell wall? NO → Animal cell. YES → Plant cell.',
    keyConcepts: ['cell classification dichotomous key nucleus cell wall plant animal bacterial'],
    keywords: ['nucleus', 'cell wall', 'plant cell', 'animal cell', 'bacterial cell', 'key'],
    feedbackHit: 'Correct use of the classification key.',
    feedbackMiss: 'Bacterial cells have no nucleus. Of the nucleated cells, plant cells have a cell wall and animal cells do not.',
  },

  q1_b: {
    marks: 1,
    exemplar: 'Any reasonable suggestion, for example: Does it have chloroplasts? / Does it have a large central vacuole? (Do not accept references to colour, shape or size alone.)',
    keyConcepts: ['cell differences plant animal chloroplasts vacuole cell wall'],
    keywords: ['chloroplast', 'cell wall', 'vacuole', 'plant', 'animal', 'distinction'],
    feedbackHit: 'Good — you identified a feature unique to one cell type.',
    feedbackMiss: 'Think of an organelle or structure only found in plant cells (chloroplasts, cell wall, large vacuole) that is absent in animal cells.',
  },

  q1_c: {
    marks: 1,
    exemplar: 'Mitochondrion (accept mitochondria).',
    keyConcepts: ['organelle mitochondrion metabolic reactions energy respiration'],
    keywords: ['mitochondrion', 'mitochondria', 'site of metabolic reactions'],
    feedbackHit: 'Correct — mitochondria are the site of cellular respiration.',
    feedbackMiss: 'Organelle A is the site of all metabolic reactions — that is the mitochondrion.',
  },

  q1_d: {
    marks: 1,
    exemplar: 'Controls what enters or exits the cell. OR Separates the inside of the cell from the outside. (Do not accept references to protection — this is a CON.)',
    keyConcepts: ['cell membrane function selective permeability transport'],
    keywords: ['cell membrane', 'controls entry', 'exits', 'separates', 'outside'],
    feedbackHit: 'Correct function of the cell membrane.',
    feedbackMiss: 'Structure B is the cell membrane. It controls what enters and exits — not the same as protection (that is rejected).',
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
    exemplar: 'System 1: Respiratory system [1]. System 2: Muscular system [1].',
    keyConcepts: ['body systems respiratory muscular identification'],
    keywords: ['respiratory system', 'muscular system', 'body system'],
    feedbackHit: 'Both body systems correctly identified.',
    feedbackMiss: 'System 1 shows the lungs and airways — that is the respiratory system. System 2 shows the muscles — the muscular system.',
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
    exemplar: 'Fatty acids and glycerol (accept either named correctly).',
    keyConcepts: ['fat lipid digestion product fatty acids glycerol'],
    keywords: ['fatty acids', 'glycerol', 'fat digestion', 'lipid'],
    feedbackHit: 'Correct — fats are chemically digested to fatty acids and glycerol.',
    feedbackMiss: 'Fats (lipids) are broken down into their building blocks — fatty acids and glycerol — by enzyme action.',
  },

  q2_e: {
    marks: 4,
    exemplar: 'Accept any two correct features [max 2]: folds or villi or micro-villi or finger-like projection or long length; good blood supply; walls of villi/small intestine are one cell thick or semi-permeable; lacteal. Accept any two correct explanations [max 2]: large surface area for absorption; to carry nutrients to cells or maintains concentration gradient; short diffusion distance or efficient transfer of nutrients; absorbs/transports fatty acids and glycerol.',
    keyConcepts: ['small intestine villi adaptation absorption surface area diffusion blood supply lacteal'],
    keywords: ['villi', 'micro-villi', 'surface area', 'blood supply', 'one cell thick', 'lacteal', 'diffusion distance', 'concentration gradient'],
    feedbackHit: 'Excellent — you linked structural features of the small intestine to efficient nutrient absorption.',
    feedbackMiss: 'Describe features: villi increase surface area; thin walls shorten diffusion distance; blood supply maintains concentration gradient; lacteals absorb fatty acids.',
  },

  // Q3 — Reservoir Eutrophication

  q3_a: {
    marks: 1,
    exemplar: 'Accept any reasonable natural source, for example: decaying or dead plants or animals; animal waste; soil washed in from the surrounding land. (WTTE — do not accept named nutrients.)',
    keyConcepts: ['eutrophication natural nutrient source decomposition'],
    keywords: ['decaying', 'dead plants', 'dead animals', 'animal waste', 'soil', 'natural'],
    feedbackHit: 'Correct natural source of nutrients identified.',
    feedbackMiss: 'Natural sources include dead/decaying organisms, animal waste, or soil erosion — not human activities.',
  },

  q3_b: {
    marks: 2,
    exemplar: 'Direct source [1]: fish farm in the reservoir; sewage treatment plant discharge; industrial discharge. Indirect source [1]: runoff from crop fields; runoff from residential areas; runoff from industrial sites. (WTTE)',
    keyConcepts: ['eutrophication human sources direct indirect runoff sewage'],
    keywords: ['fish farm', 'sewage', 'industrial', 'crop field runoff', 'residential runoff', 'direct', 'indirect'],
    feedbackHit: 'Correct direct and indirect human sources identified.',
    feedbackMiss: 'Direct = enters water directly (fish farm, sewage discharge). Indirect = reaches water via runoff (crop fields, residential areas, industrial sites).',
  },

  q3_c: {
    marks: 3,
    exemplar: 'Nutrients reaching the water from a named source [1]. Providing the algae with increased nutrients [1]. (So) the algae reproduce more [1]. (WTTE — do not accept "grow". Do not accept "algal bloom" for 3rd mark. Do not award 3rd mark unless 2nd mark awarded.)',
    keyConcepts: ['eutrophication algae nutrients reproduction bloom mechanism'],
    keywords: ['nutrients', 'algae', 'reproduce', 'increased nutrients', 'water', 'algal bloom'],
    feedbackHit: 'Good chain: nutrients enter water → algae get more nutrients → algae reproduce rapidly.',
    feedbackMiss: 'Nutrients from human sources enter the reservoir → algae receive more nutrients → algae reproduce more rapidly, causing a bloom.',
  },

  q3_d: {
    marks: 4,
    exemplar: 'Algal bloom blocks out sunlight [1]. Aquatic plants die due to lack of (sunlight for) photosynthesis [1]. Organic material broken down by bacteria causes oxygen in the water to be depleted [1]. Oxygen depletion leads to death of aquatic organisms [1]. (Accept named organisms.)',
    keyConcepts: ['algal bloom sunlight photosynthesis oxygen depletion decomposition aquatic organisms death biomass'],
    keywords: ['blocks sunlight', 'photosynthesis', 'aquatic plants die', 'bacteria', 'oxygen depletion', 'death', 'biomass decrease'],
    feedbackHit: 'Excellent chain from algal bloom through to biomass decrease.',
    feedbackMiss: 'Algae block sunlight → aquatic plants cannot photosynthesise and die → bacteria decompose organic matter using up oxygen → aquatic animals die from lack of oxygen.',
  },

  // Q4 — Transpiration Investigation

  q4_a: {
    marks: 1,
    exemplar: 'The number of leaves on the shoot.',
    keyConcepts: ['independent variable transpiration number of leaves investigation'],
    keywords: ['number of leaves', 'leaves', 'leaf number', 'independent variable', 'IV'],
    feedbackHit: 'Correct — the number of leaves on the shoot is the independent variable.',
    feedbackMiss: 'The IV is what the students changed between the shoots — the number of leaves on each shoot.',
  },

  q4_b: {
    marks: 3,
    exemplar: 'Mass (of flask and shoot) [1]. Final and initial masses [1]. Time (over which change occurred) or duration of experiment [1]. (Accept change in mass / mass of water lost.)',
    keyConcepts: ['transpiration rate calculation mass change time measurement'],
    keywords: ['mass', 'initial mass', 'final mass', 'time', 'duration', 'grams', 'rate'],
    feedbackHit: 'Three measurements correctly identified for calculating transpiration rate.',
    feedbackMiss: 'Rate = change in mass ÷ time. You need: initial mass, final mass (to find change), and duration of experiment.',
  },

  q4_c: {
    marks: 2,
    exemplar: 'Accept any two: temperature of the environment; temperature of the water; species of plant; wind/air movement; dimensions of plant stem; humidity; light intensity/distance of light (from plant). (WTTE — do not accept quantity/amount of light.)',
    keyConcepts: ['control variables transpiration investigation temperature light species'],
    keywords: ['temperature', 'species of plant', 'wind', 'air movement', 'stem dimensions', 'humidity', 'light intensity', 'control variable'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables are kept constant: e.g. temperature, species of plant, light intensity, humidity, stem size.',
  },

  q4_d: {
    marks: 4,
    exemplar: 'Improvements [max 2]: the plant stem/shoot was identified [1]; the species of plant was stated [1]; the size/dimensions of the shoot were specified [1]. Justifications [max 2]: different plants may transpire differently so this is now controlled [1]; enables repetition of the experiment [1]; gives information about how the IV is manipulated [1]. (Do not accept group 2 posed a question.)',
    keyConcepts: ['research question improvement justification investigation design variables'],
    keywords: ['stem identified', 'species', 'shoot size specified', 'controlled', 'repetition', 'IV manipulation'],
    feedbackHit: 'Good identification of improvements and matching justifications.',
    feedbackMiss: 'Group 2 identified the shoot, stated the species, and specified the shoot size — each improvement makes the method more controlled and repeatable.',
  },

  q4_e: {
    marks: 4,
    exemplar: 'Two significant figures used instead of one [1]; (so) smaller rounding errors or measurements are more precise [1]. (WTTE — ignore "accurate".) Inclusion of a control [1]; (control) enables a comparison to be made with a flask and no shoot [1]. (WTTE)',
    keyConcepts: ['validity significant figures precision control group comparison'],
    keywords: ['significant figures', 'precision', 'rounding errors', 'control', 'comparison', 'no shoot', 'valid'],
    feedbackHit: 'Both reasons with justifications correctly stated.',
    feedbackMiss: 'Two sig. figs. → more precise data. A control (flask with no shoot) → comparison baseline to confirm the mass loss is due to transpiration, not just evaporation.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'Accept any suggestion: not clear if they followed the same method; too many variables were not explicitly controlled or monitored; differences in the precision of data recorded; the two groups had different research questions. (Do not accept inclusion of control as not following the same method; do not accept number of decimal places; do not accept accuracy.)',
    keyConcepts: ['combining results reliability method consistency variables'],
    keywords: ['different method', 'variables not controlled', 'precision', 'different research question'],
    feedbackHit: 'Valid reason for not combining results identified.',
    feedbackMiss: 'The two groups had different methods and research questions — combining data from incompatible experiments is not valid.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Water cannot evaporate directly from the surface of the flask [1]. (So) the change in mass is due to transpiration [1] OR Evaporation does not affect the mass of water lost [1].',
    keyConcepts: ['oil layer evaporation transpiration confounding variable control'],
    keywords: ['evaporation', 'oil layer', 'transpiration', 'mass', 'confounding', 'water loss', 'surface'],
    feedbackHit: 'Correctly identified that the oil layer prevents evaporation from confounding transpiration data.',
    feedbackMiss: 'Without an oil layer, water evaporates from the open surface — the oil ensures any mass decrease is only due to transpiration through the plant.',
  },

  // Q5 — Criteria B: Potometer Design (light intensity)

  q5_: {
    marks: 17,
    exemplar: 'Criteria B rubric (max 17): Variables (max 4): IV = light intensity (e.g. moving the lamp to set distances, measured with a light meter); DV = volume of water taken up / distance the air bubble moves in the potometer per unit time; 2 CVs = temperature, humidity, species of plant, size/leaf area of shoot. Hypothesis (max 4): testable, linked to DV, correct scientific direction (higher light intensity → higher transpiration rate as stomata open), scientific explanation using stomatal opening / photosynthesis / evaporation. Manipulation (max 4): how to change light intensity (lamp distance + light meter); how to measure DV (movement of the air bubble along the scale per minute); how to monitor CVs (use a heat shield/water bath to keep temperature constant). Method (max 4): sufficient detail to follow and repeat; ≥3 trials; control/repeats. Justification (max 1): justify one calculation (e.g. rate = distance/time or volume/time, or 1/distance² for intensity). Safety (max 1): specific hazard linked to the investigation (e.g. hot lamp, care cutting the shoot with a sharp blade).',
    keyConcepts: ['transpiration investigation design light intensity potometer variables hypothesis method safety Criteria B'],
    keywords: ['light intensity', 'lamp distance', 'IV', 'DV', 'potometer', 'transpiration rate', 'control variable', 'hypothesis', 'stomata', 'safety', 'calculation'],
    feedbackHit: 'Well-structured Criteria B design with clear variables, testable hypothesis, detailed method, and safety consideration.',
    feedbackMiss: 'Ensure you identify IV (light intensity), DV (water uptake / bubble movement rate), 2 CVs, a testable hypothesis with scientific reasoning (stomata open in light), step-by-step method with repeats, one justified calculation, and a specific safety precaution.',
  },

  // Q6 — Stomata Investigation (eucalyptus / pine)

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
    exemplar: 'Sample 10 = 16 stomata.',
    keyConcepts: ['stomata count microscope field of view eucalyptus leaf sample'],
    keywords: ['stomata', 'count', 'sample 10', '16', 'field of view'],
    feedbackHit: 'Correct count for eucalyptus leaf sample 10.',
    feedbackMiss: 'Count each stomata visible in the 0.5 × 0.5 mm field of view for sample 10. The correct count is 16.',
    blankAnswers: ['16'],
  },

  q6_d: {
    marks: 3,
    exemplar: 'Any correctly calculated average e.g. 150/10 = 15 [1]. Stomatal density calculated: 15 ÷ 0.25 = 60 [1]. Correctly stated as 60 (mm⁻²) [1]. ECF from part c. Award one mark max if average is not used and stomatal density is shown ECF from 1st marking point. Award three marks if only 60 is seen ECF from 1st marking point.',
    keyConcepts: ['stomatal density calculation average area formula rounding significant figures'],
    keywords: ['average', '150/10', '15', '60', 'mm⁻²', 'stomatal density', 'calculation', '0.25'],
    feedbackHit: 'Correct calculation of average and stomatal density with appropriate accuracy.',
    feedbackMiss: 'Step 1: average stomata count = 150 ÷ 10 = 15. Step 2: density = 15 ÷ 0.25 mm² = 60 mm⁻².',
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
    exemplar: 'The lower surface floats on / is in contact with the water, so transpiration does not take place there and gases diffuse directly through the epidermis (not through stomata). (Do not accept "it is an aquatic plant" alone.)',
    keyConcepts: ['floating water lettuce stomata water contact gas exchange transpiration aquatic'],
    keywords: ['underwater', 'water contact', 'transpiration', 'gas exchange', 'epidermis', 'lower surface', 'no stomata'],
    feedbackHit: 'Correct — the lower surface contacts water so stomata are not needed for gas exchange or water regulation there.',
    feedbackMiss: 'The lower surface of floating water lettuce touches the water, so transpiration does not occur and gases diffuse directly through the epidermis without stomata.',
  },

  q6_g: {
    marks: 5,
    exemplar: 'Eucalyptus leaves have stomata on both surfaces [1]. Pine needles have stomata in rows/lines sunk into pits along the needle (fewer, protected) [1]. Further explanatory points [max 3]: eucalyptus hangs its leaves vertically so both sides receive similar light and need gas exchange [1]; gas exchange still occurs between stomata and air [1]; pine has sunken stomata / a thick waxy cuticle to reduce water loss in cold or dry conditions [1]; eucalyptus does not need to limit water loss as strongly as pine [1].',
    keyConcepts: ['stomata distribution eucalyptus pine adaptation transpiration gas exchange habitat comparison'],
    keywords: ['both surfaces', 'sunken stomata', 'rows', 'transpiration', 'stomatal density', 'waxy cuticle', 'gas exchange', 'water loss', 'comparison'],
    feedbackHit: 'Excellent comparison of stomata distribution with scientific explanation of adaptations.',
    feedbackMiss: 'Eucalyptus has stomata on both surfaces (vertical leaves, both sides lit). Pine needles have sunken stomata in rows with a thick waxy cuticle to reduce water loss in harsher conditions.',
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
    feedbackMiss: 'Enzymes bind to the plastic substrate at the active site, breaking bonds between building blocks, speeding up degradation by lowering activation energy. Use terms: catabolic, active site, substrate.',
  },

  q7_c: {
    marks: 2,
    exemplar: 'One of boxes 2, 3 or 4 correctly placed = 1 mark. Boxes 2, 3 and 4 all correctly placed = 2 marks. Correct order: Box 2 = "Beetle larvae in a population have different characteristics from one another." Box 3 = "Larvae whose gut microbes digest plastic survive and reproduce more." Box 4 = "The ability to digest plastic becomes more common in the population."',
    keyConcepts: ['natural selection variation survival reproduction adaptation population'],
    keywords: ['variation', 'gut microbes', 'survive', 'reproduce', 'more common', 'natural selection', 'population'],
    feedbackHit: 'Natural selection sequence correctly ordered.',
    feedbackMiss: 'Natural selection sequence: variation (Box 2) → survival and reproduction of larvae that can digest plastic (Box 3) → trait becomes more common in the population (Box 4).',
    blankAnswers: [
      'Beetle larvae in a population have different characteristics from one another',
      'Larvae whose gut microbes digest plastic survive and reproduce more',
      'The ability to digest plastic becomes more common in the population',
    ],
  },

  // Q8 — Plastics Recycling (Criteria D)

  q8_a: {
    marks: 13,
    exemplar: 'Criteria D rubric (max 13). Properties and uses (max 4): statement of one physical property or use → 2 physical properties + why useful → 2 properties + statement of why both are useful → 2 properties + why both are useful + why properties matter. Environmental consequences (max 4): one consequence stated → any 2 consequences or one in detail → consequence for one method + different consequence for second → different consequences for both methods with discussion. Economic impacts (max 4): one economic impact stated → 2 impacts or one in detail → impact for one method + different for second → different impacts for each method with discussion. Concluding appraisal: giving a concluding opinion about how best to recycle plastics → opinion with specific detail or comparison of methods.',
    keyConcepts: ['plastics properties recycling methods environmental consequences economic impacts Criteria D discussion evaluation'],
    keywords: ['chemical recycling', 'mechanical recycling', 'biological recycling', 'properties', 'environmental', 'economic', 'appraisal', 'lightweight', 'waterproof'],
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
