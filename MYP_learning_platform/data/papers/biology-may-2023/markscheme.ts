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

  // Q1 — Bones, Joints & Muscles

  q1_a: {
    marks: 1,
    exemplar: 'Knee. (Accept ankle or knuckle.)',
    keyConcepts: ['hinge joint skeleton movement bones cartilage'],
    keywords: ['hinge joint', 'knee', 'ankle', 'knuckle'],
    feedbackHit: 'Correct hinge joint identified.',
    feedbackMiss: 'Hinge joints move in one plane: knee, ankle, and knuckle are all valid examples.',
  },

  q1_b: { type: 'mcq', correct: 0 },

  q1_c: {
    marks: 2,
    exemplar: 'Accept any two from: one muscle contracts while the other extends [1]; X (Bicep) contracts or shortens AND to flex or bend the arm [1]; Y (Tricep) contracts or shortens AND to extend or straighten the arm [1].',
    keyConcepts: ['antagonistic muscles bicep tricep contract extend movement joint'],
    keywords: ['contracts', 'extends', 'bicep', 'tricep', 'flex', 'bend', 'straighten', 'antagonistic'],
    feedbackHit: 'Both antagonistic muscle roles correctly described.',
    feedbackMiss: 'Bicep contracts to bend the arm; tricep contracts to straighten it. They work as an antagonistic pair — when one contracts the other extends.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'Similarity [max 1]: both produce energy OR both produce ATP OR both use glucose. Difference [max 1]: aerobic requires oxygen / anaerobic does not; waste products are different (aerobic: water + CO₂; anaerobic: lactic acid); anaerobic releases less energy. (Do NOT accept ethanol as a product in humans.)',
    keyConcepts: ['aerobic anaerobic respiration similarity difference oxygen glucose energy ATP lactic acid'],
    keywords: ['aerobic', 'anaerobic', 'oxygen', 'glucose', 'energy', 'ATP', 'lactic acid', 'CO₂', 'water'],
    feedbackHit: 'One correct similarity and one correct difference stated.',
    feedbackMiss: 'Similarity: both use glucose / release energy / produce ATP. Difference: aerobic uses oxygen and produces CO₂ + water; anaerobic produces lactic acid in humans and releases less energy.',
  },

  q1_e: {
    marks: 2,
    exemplar: 'Protection [max 1]: protect the organs OR (hard) bones reduce risk of injury on impact. Blood cell production [max 1]: (long) bones contain bone marrow OR (long) bones produce stem cells. (Accept named organ examples. Do NOT accept mineral storage.)',
    keyConcepts: ['skeleton functions protection blood cell production bone marrow stem cells organs'],
    keywords: ['protect organs', 'reduce injury', 'bone marrow', 'blood cell production', 'stem cells'],
    feedbackHit: 'Both skeleton functions correctly explained.',
    feedbackMiss: 'Protection: bones protect internal organs from impact. Blood cell production: long bones contain red bone marrow where stem cells produce blood cells.',
  },

  // Q2 — Active Packaging & Food Storage

  q2_a: {
    marks: 2,
    exemplar: 'Accept any two reasonable benefits: slows ripening [1]; prevents microbe growth OR keeps food safe to eat for longer [1]; reduces waste OR extends shelf life [1]. (WTTE)',
    keyConcepts: ['active packaging food preservation ripening microbes shelf life transport'],
    keywords: ['slows ripening', 'prevents microbe growth', 'extends shelf life', 'reduces waste', 'food safe'],
    feedbackHit: 'Two valid benefits of active packaging identified.',
    feedbackMiss: 'Active packaging: slows ripening (absorbs ethylene gas), prevents microbial growth, extends shelf life, reduces food waste.',
  },

  q2_b: {
    marks: 3,
    exemplar: '(This temperature range) reduces or stops microorganism activity or reproduction [1]. Does not freeze (at this temperature range) [1]. One correct justification [1]: slows deterioration of food; prevents ice damage or freezer burn or changes in appearance. (Do NOT accept "kills." WTTE)',
    keyConcepts: ['refrigeration temperature microorganism activity food preservation freezing deterioration'],
    keywords: ['slows microorganism', 'does not freeze', 'deterioration', 'ice damage', 'food safe', '3°C', '5°C'],
    feedbackHit: 'Microorganism inhibition, no freezing, and a valid justification all given.',
    feedbackMiss: '3–5°C slows (not kills) microbial growth/reproduction, prevents freezing damage, and slows deterioration while keeping food safe.',
  },

  q2_c: {
    marks: 3,
    exemplar: '(Bacteria has) decreased in volume OR shrunk OR shrivelled [1]. Water has left OR (bacteria is) dehydrated [1]. By osmosis [1]. (Accept a correct description of osmosis if "osmosis" is not named.)',
    keyConcepts: ['osmosis bacteria salt dehydration water loss shrinkage preservation'],
    keywords: ['shrunk', 'shrivelled', 'dehydrated', 'water left', 'osmosis', 'salt', 'concentration gradient'],
    feedbackHit: 'Correct osmosis explanation with dehydration and shape change.',
    feedbackMiss: 'Salt creates a high solute concentration outside bacteria. By osmosis, water moves out of the bacteria → they dehydrate and shrink, losing their smooth surface.',
  },

  // Q3 — Enzymes, Lactase & Genetics

  q3_a: {
    marks: 2,
    exemplar: 'Speed up reactions OR biological catalyst [1]. Build up molecules OR break down molecules [1]. (Accept specific examples.)',
    keyConcepts: ['enzyme function catalyst speed up reactions build break molecules metabolism'],
    keywords: ['speed up reactions', 'biological catalyst', 'build up', 'break down', 'substrate'],
    feedbackHit: 'Two distinct enzyme functions correctly stated.',
    feedbackMiss: 'Enzymes (1) speed up chemical reactions as biological catalysts, and (2) can build up OR break down molecules in metabolism.',
  },

  q3_b: {
    marks: 1,
    exemplar: 'TT = Yes; Tt = Yes; tt = No. All correct = 1 mark. (A selection must be made in ALL boxes.)',
    keyConcepts: ['genotype phenotype dominant recessive allele lactose tolerance TT Tt tt'],
    keywords: ['TT', 'Tt', 'tt', 'dominant', 'recessive', 'lactose tolerant', 'Yes', 'No'],
    feedbackHit: 'All three genotype-phenotype relationships correctly identified.',
    feedbackMiss: 'T is dominant: TT (homozygous dominant) = tolerant; Tt (heterozygous) = tolerant (T present); tt (homozygous recessive) = intolerant.',
    blankAnswers: ['Yes', 'Yes', 'No'],
  },

  q3_c: {
    marks: 1,
    exemplar: 'The (observable) characteristics of an organism (resulting from the expression of genes). (Incorrect use of "gene" is a CON, award 0.)',
    keyConcepts: ['phenotype observable characteristics gene expression genotype'],
    keywords: ['observable', 'characteristics', 'expression', 'genes', 'organism'],
    feedbackHit: 'Phenotype correctly defined.',
    feedbackMiss: 'Phenotype = the observable physical characteristics of an organism resulting from the expression of its genes (NOT the genes themselves).',
  },

  q3_d: {
    marks: 4,
    exemplar: 'Similarity [max 1]: highest levels directly after birth; both decrease (after birth). Justification [max 1]: maternal milk is primary food source; decrease as transition to other food sources. Difference [max 1]: production is much higher in pigs; pigs level off later than rats; production decreases at a faster rate or earlier in pigs. Justification [max 1]: consume more lactose OR pigs are bigger than rats; rats transition to other foods earlier than pigs; pigs and rats mature at different rates.',
    keyConcepts: ['lactase production pigs rats comparison similarity difference graph analysis justification'],
    keywords: ['highest at birth', 'both decrease', 'pigs higher', 'pigs level off later', 'maternal milk', 'transition to food'],
    feedbackHit: 'Similarity + justification + difference + justification all correctly identified.',
    feedbackMiss: 'Similarity: both start high and decrease. Difference: lactase is much higher in pigs and stays elevated longer (pigs are larger/take longer to wean). Justify each with scientific reasoning.',
  },

  q3_e: {
    marks: 1,
    exemplar: 'The higher the % lactose tolerance, the higher the milk consumption. (ORA. Do NOT accept linear or proportional.)',
    keyConcepts: ['lactose tolerance milk consumption correlation world data infographic'],
    keywords: ['higher tolerance', 'higher consumption', 'positive relationship', 'correlation'],
    feedbackHit: 'Correct directional relationship stated.',
    feedbackMiss: 'Countries with higher % lactose tolerance tend to have higher milk consumption per person (positive correlation).',
  },

  q3_f: {
    marks: 1,
    exemplar: 'Accept any reasonable suggestion: data not available for all countries; correlation does not guarantee causation; people choose not to drink milk for reasons other than lactose intolerance; data is from one year or one source only.',
    keyConcepts: ['scientific caution correlation causation data limitations world data'],
    keywords: ['correlation not causation', 'incomplete data', 'single source', 'confounding factors'],
    feedbackHit: 'Valid reason for caution in drawing conclusions identified.',
    feedbackMiss: 'Reasons for caution: data missing for many countries; correlation ≠ causation; other factors affect milk consumption; data from a single time point.',
  },

  // Q4 — Agave Fibre Humidity Investigation

  q4_a: {
    marks: 1,
    exemplar: 'How does the humidity affect the mass needed to break the fibre? (Must link % fibre/humidity to mass/strength to be credited.)',
    keyConcepts: ['research question humidity agave plant fibre strength investigation formulate'],
    keywords: ['humidity', 'mass', 'break', 'fibre', 'research question', 'affect'],
    feedbackHit: 'Well-formed research question linking IV (humidity) to DV (mass to break fibre).',
    feedbackMiss: 'Research question must state BOTH the IV (humidity) and DV (mass/force needed to break fibre), e.g. "How does humidity affect the mass needed to break agave fibre?"',
  },

  q4_b: {
    marks: 2,
    exemplar: 'Independent variable: humidity [1]. Dependent variable: mass AND needed to break the fibre [1]. (Do NOT accept "strength.")',
    keyConcepts: ['independent variable humidity dependent variable mass fibre breaking'],
    keywords: ['IV', 'humidity', 'DV', 'mass', 'break', 'fibre', 'independent', 'dependent'],
    feedbackHit: 'Both IV and DV correctly identified.',
    feedbackMiss: 'IV = humidity (% — what you change). DV = mass needed to break the fibre (what you measure). "Strength" alone is not accepted for DV.',
  },

  q4_c: {
    marks: 2,
    exemplar: 'Accept any two reasonable CVs: diameter of fibre; storage or room temperature; length of fibre; age of plant; storage time; type of plant. (Do NOT accept increments of mass used, length of time masses are hung, or "use the same fibre.")',
    keyConcepts: ['control variables fibre investigation humidity temperature diameter length'],
    keywords: ['diameter of fibre', 'temperature', 'length of fibre', 'age of plant', 'storage time', 'type of plant'],
    feedbackHit: 'Two valid control variables correctly identified.',
    feedbackMiss: 'Keep constant: fibre diameter, fibre length, temperature, plant species/age. Do not list mass increments as a CV.',
  },

  q4_d: {
    marks: 1,
    exemplar: 'The DV is only affected by the IV. (WTTE)',
    keyConcepts: ['control variables importance fair test dependent variable independent variable'],
    keywords: ['DV only affected by IV', 'fair test', 'only one variable changes'],
    feedbackHit: 'Correct reason for controlling variables stated.',
    feedbackMiss: 'Control variables ensure the DV (mass to break) is only affected by the IV (humidity), making it a fair test.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'Greater range of data [1] and better for identifying a pattern [1]. OR Repeats [1] and can repeat to give an average / identify anomalous data [1]. (WTTE)',
    keyConcepts: ['investigation improvement range data pattern repeats reliability anomalous'],
    keywords: ['greater range', 'more data points', 'repeats', 'average', 'anomalous', 'pattern', 'reliable'],
    feedbackHit: 'One improvement with correctly linked justification given.',
    feedbackMiss: 'More humidity levels gives a greater range of data to identify patterns. Adding repeats lets you calculate averages and spot anomalous results.',
  },

  q4_f: {
    marks: 4,
    exemplar: 'Equal increments on Y axis scale [1]; three points plotted correctly [1]; all six points plotted correctly [1]; data points matching the key [1]. (Ignore the key for first 2 marks; only award mark 4 if at least 3 points correctly plotted.)',
    keyConcepts: ['graph plotting data presentation humidity mass plant fibre two groups key'],
    keywords: ['equal increments', 'Y axis', 'plotted correctly', 'key', 'Group 1', 'Group 2'],
    feedbackHit: 'Graph has equal Y-scale, all 6 points plotted correctly with key.',
    feedbackMiss: 'Graph needs: equal Y-axis increments; all 6 data points correctly plotted; a key differentiating Group 1 and Group 2.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Group 1: increases AND then plateaus [1]. Group 2: increases AND linear [1]. (WTTE)',
    keyConcepts: ['data pattern trend graph Group 1 Group 2 humidity mass fibre plateau linear'],
    keywords: ['Group 1', 'increases', 'plateaus', 'Group 2', 'increases', 'linear'],
    feedbackHit: 'Correct trend for both groups described.',
    feedbackMiss: 'Group 1: mass needed increases with humidity then plateaus. Group 2: mass needed increases linearly with humidity.',
  },

  q4_h: {
    marks: 2,
    exemplar: 'Different strengths [1]: natural variation in fibre strength OR fibres come from a different plant. Different masses [1]: less precise equipment gave less valid outcome. (WTTE)',
    keyConcepts: ['variation fibre strength equipment precision data validity natural variation'],
    keywords: ['natural variation', 'fibre strength', 'different plant', 'less precise', 'equipment', 'validity'],
    feedbackHit: 'One valid reason for each group\'s different data identified.',
    feedbackMiss: 'Claim 1 (different strengths): natural variation in agave fibres (fibres from different plants vary). Claim 2 (different masses): less precise measuring equipment produced less valid/accurate results.',
  },

  // Q5 — Plant Cell Diameter & Water Movement

  q5_a: {
    marks: 1,
    exemplar: '95 (micrometres) ± 5. (Ignore incorrect units.)',
    keyConcepts: ['measuring cell diameter microscope scale bar micrometer humidity'],
    keywords: ['95', 'micrometres', 'diameter', 'cell', 'scale bar', 'measure'],
    feedbackHit: 'Cell diameter correctly measured from scale bar.',
    feedbackMiss: 'Use the 80 µm scale bar to calibrate. The highlighted cell at 75% humidity measures approximately 95 µm in diameter (± 5 µm accepted).',
  },

  q5_b: {
    marks: 3,
    exemplar: '(Candidate\'s value from (a) − 80) ÷ 80 × 100 [1]. Evidence of calculation [1]. Rounded to nearest % [1]. (ECF from part (a). Award third mark for any correctly rounded percentage if calculation is seen.)',
    keyConcepts: ['percentage increase calculation diameter cell humidity formula ECF'],
    keywords: ['% increase', '80', 'difference', 'divide', 'multiply by 100', 'nearest %'],
    feedbackHit: 'Correct formula applied, calculation shown, answer rounded appropriately.',
    feedbackMiss: '% increase = (new − original) ÷ original × 100 = (95 − 80) ÷ 80 × 100 = 18.75% ≈ 19%. Show working.',
  },

  q5_c: {
    marks: 4,
    exemplar: 'Any two increases in size from: cells or vacuoles; cell walls; gaps or lamella [max 2]. Water enters the fibres or cells by osmosis or diffusion [1]. (As humidity increases) larger difference between cell and environment [1] OR (as humidity increases) more rapid entry of water (into the cell) [1].',
    keyConcepts: ['osmosis water movement plant cell humidity vacuole cell wall turgid expansion'],
    keywords: ['osmosis', 'diffusion', 'water enters', 'cells expand', 'vacuoles', 'concentration gradient', 'turgid'],
    feedbackHit: 'Two structures and mechanism of water entry with explanation of increased rate.',
    feedbackMiss: 'Higher humidity → greater water potential gradient → water enters cells by osmosis → vacuoles/cells expand → cell walls pushed out → fibres increase in size.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'Measurement [max 1]: change in mass; length in other planes or 3 dimensions; measure the increase of the labelled parts of the diagram. Justification [max 1]: to calculate the % water absorbed; to calculate (increase in) volume rather than length; to see if all parts increased at the same rate OR find out where the water had gone. (WTTE)',
    keyConcepts: ['investigation extension measurement mass volume 3D dimensions water absorbed'],
    keywords: ['change in mass', '3 dimensions', 'volume', '% water absorbed', 'labelled parts'],
    feedbackHit: 'Valid alternative measurement and correctly linked justification given.',
    feedbackMiss: 'Measure mass change (to calculate % water absorbed), or measure in 3D (to calculate volume increase), or measure specific labelled parts (to see where water went).',
  },

  // Q6 — Sodium Hydroxide Treatment

  q6_a: {
    marks: 1,
    exemplar: 'Accept any CV from: volume of NaOH; fibres immersed in same chemical or NaOH; initial fibre length or diameter; type of fibre (agave).',
    keyConcepts: ['control variable sodium hydroxide treatment flow chart fibre processing'],
    keywords: ['volume of NaOH', 'fibre length', 'fibre diameter', 'type of fibre', 'same chemical'],
    feedbackHit: 'Valid CV from the flow chart correctly identified.',
    feedbackMiss: 'The flow chart shows CVs such as: volume of NaOH used, initial fibre length/diameter, type of plant fibre (agave). All fibres are treated the same to control these.',
  },

  q6_b: {
    marks: 1,
    exemplar: 'So the method could be repeated / compared with other processes. OR Because time in the solution might affect the results / time in solution is a control variable. (WTTE)',
    keyConcepts: ['method improvement repeatability time immersion control variable comparison'],
    keywords: ['repeated', 'compared', 'time affects results', 'control variable', 'reproducible'],
    feedbackHit: 'Valid reason for including immersion time identified.',
    feedbackMiss: 'Immersion time affects how much NaOH the fibres absorb. Including it makes the method repeatable and allows fair comparison with other processes.',
  },

  q6_c: {
    marks: 3,
    exemplar: 'Accept any three points: identify the alkali (as NaOH) [1]; include a reference to the direction of change of IV [1]; include a possible range of IV concentrations [1]; specify fibres are agave [1]; specify what will be measured [1]. (Accept aspects of a re-written hypothesis. Do NOT accept "include adding scientific justification as an improvement.")',
    keyConcepts: ['hypothesis testable IV direction range NaOH concentration alkali agave fibre measurement'],
    keywords: ['NaOH', 'concentration increases', 'range', 'agave', 'extension', 'measured', 'testable'],
    feedbackHit: 'Three elements to improve hypothesis correctly identified.',
    feedbackMiss: 'Improve hypothesis by: naming NaOH as the alkali; specifying direction (as concentration increases); including a range (e.g. 0–10%); specifying it is agave fibre; stating what is measured (extension in cm/mm).',
  },

  q6_d: {
    marks: 2,
    exemplar: 'First marking point: hypothesis is valid or partially valid [1]; as the extension increases from 0–2% or 5% (NaOH) [1]. Second marking point linked to hypothesis being invalid [1]: between 2 or 5–10% the extension decreases; above 10% there is no clear increase or decrease despite the change in concentration. (Accept reference to a plateau. Do NOT accept constant.)',
    keyConcepts: ['graph results hypothesis support partial valid extension NaOH concentration'],
    keywords: ['partially valid', 'increases 0–2%', 'decreases 5–10%', 'plateau above 10%', 'partially supported'],
    feedbackHit: 'Correct evaluation of hypothesis against graph data at both concentration ranges.',
    feedbackMiss: '0–2% (or 5%) NaOH: extension increases → hypothesis supported. Above 5–10%: extension decreases/plateaus → hypothesis not supported. Result: partially valid.',
  },

  // Q7 — Criteria B: Plant Fibre % in Rope Design

  q7_: {
    marks: 15,
    exemplar: 'Criteria B rubric (max 15). RQ [max 2]: simple RQ → RQ linked to % fibre and length/stretch. Variables [max 4]: IV as fibre % and DV as length + one CV → IV and DV + two CVs. Equipment [assessed in Method]. Method [max 4]: attempt at method → incomplete but some relevant data → sufficient to follow and collect similar data → sufficient to repeat. Data [max 4]: plans at least 3 trials → plans 3 trials AND 5 stated fibre % → also includes 0% and 20% → 5+ fibre %. Safety [max 1]: care with heavy masses, breaking ropes.',
    keyConcepts: ['plant fibre rope stretch design investigation Criteria B RQ IV DV CVs method data safety'],
    keywords: ['% plant fibres', 'IV', 'DV', 'extension/stretch', 'CVs', 'repeats', '5 fibre levels', '0%', '20%', 'safety'],
    feedbackHit: 'Well-structured Criteria B design with measurable RQ, IV/DV, CVs, detailed method, sufficient data plan, and safety statement.',
    feedbackMiss: 'Key elements: RQ linking % fibres to stretch/extension; IV = % plant fibres; DV = extension/length at fixed mass; 2 CVs (e.g. mass, rope diameter); ≥5 fibre % values including 0% and 20%; ≥3 repeats; safety (heavy masses, ropes breaking).',
  },

  // Q8 — Urbanisation & Biodiversity

  q8_a: { type: 'mcq', correct: 3 },

  q8_b: {
    marks: 4,
    exemplar: 'Fewer bees will mean there is less pollination of the flowers [1]. This may reduce the population of plants [1]. (Which will) result in less food being available (for consumers) [1]. Link to how biodiversity is reduced [1]. (Accept references to plant reproduction.)',
    keyConcepts: ['pollinators bees pollination biodiversity food web plants flowers consumers'],
    keywords: ['fewer bees', 'less pollination', 'plant population reduces', 'less food', 'biodiversity reduced'],
    feedbackHit: 'Complete causal chain from pollinator loss to biodiversity reduction.',
    feedbackMiss: 'Fewer bees → less pollination → fewer plants reproduce → plant population falls → less food for consumers → animals affected → biodiversity reduced.',
  },

  q8_c: {
    marks: 8,
    exemplar: 'Individual action [1] + correctly linked justification [1] + difficulty linked to action [1]. Government action [1] + correctly linked justification [1] + difficulty linked to action [1]. Simple conclusion [1]. Further justification of conclusion drawing on both individual and government [1].',
    keyConcepts: ['sustainable city individual action government action justification difficulty conclusion urbanisation'],
    keywords: ['individual action', 'government action', 'justification', 'difficulty', 'conclusion', 'sustainable', 'urban'],
    feedbackHit: 'Both actions with justifications and difficulties, plus a reasoned conclusion.',
    feedbackMiss: 'Cover: individual action (e.g. reduce car use) + why it helps + why it\'s difficult; government action (e.g. invest in public transport/green spaces) + why it helps + why it\'s difficult; conclude which is more effective and why.',
  },

  // Q9 — Biosolar Roof Technology (Criteria D)

  q9_: {
    marks: 13,
    exemplar: 'Criteria D rubric (max 13). Environmental [max 4]: one aspect → one green roof OR solar panel + one other → both with further justification → both aspects with further justification for both. Economic [max 4]: same progression. Biosolar additional benefits [max 2]: one benefit (solar panels work more efficiently when cooled by plants / more efficient use of space) → with further development. Location factor [max 2]: one reasonable factor → with justification. Conclusion [max 1]: a concluding statement.',
    keyConcepts: ['biosolar technology green roofs solar panels environmental economic sustainability urban biodiversity'],
    keywords: ['green roof', 'solar panels', 'environmental', 'economic', 'biosolar', 'location', 'cooling', 'biodiversity', 'conclusion'],
    feedbackHit: 'Comprehensive Criteria D covering environmental, economic, combined biosolar benefits, location factor, and conclusion.',
    feedbackMiss: 'Environmental: green roofs (biodiversity, cooling, flood reduction, mental health, food); solar panels (renewable energy, reduce fossil fuels). Economic: installation cost vs energy savings. Biosolar: solar works better when cooled by plants; combined use of space. Location: consider roof age/strength, sunlight exposure. Conclude on overall impact.',
  },
}
