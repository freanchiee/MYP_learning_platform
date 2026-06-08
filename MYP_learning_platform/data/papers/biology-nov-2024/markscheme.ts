import 'server-only'

// ── Inline types (mirrors physics convention) ──────────────────────────────
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

// ── Mark Scheme: Biology November 2024 ────────────────────────────────────
export const MS: MSRecord = {

  // ── Q1a: Organelle → Function (match_drag_drop, 2 marks) ──
  q1_a: {
    marks: 2,
    exemplar: 'Stores genetic material → Nucleus; Controls what goes in and out of the cell → Cell membrane; Makes proteins → Ribosome',
    keyConcepts: [
      'Stores genetic material → Nucleus',
      'Controls what goes in and out of the cell → Cell membrane',
      'Makes proteins → Ribosome',
    ],
    keywords: ['nucleus', 'cell membrane', 'ribosome', 'genetic material', 'proteins'],
    feedbackHit: 'Correct — all three organelles matched to the right functions.',
    feedbackMiss: 'The nucleus stores genetic material (DNA). The cell membrane controls what enters and leaves the cell. Ribosomes make proteins.',
  },

  // ── Q1b: Red/white blood cell functions (2 marks) ──
  q1_b: {
    marks: 2,
    exemplar: 'Red blood cells transport oxygen (or CO₂). White blood cells produce antibodies (or immune system defence, or fight infection or disease).',
    keyConcepts: [
      'red blood cells transport oxygen',
      'white blood cells produce antibodies',
    ],
    keywords: ['oxygen', 'CO2', 'haemoglobin', 'antibodies', 'immune', 'infection', 'disease'],
    feedbackHit: 'Both blood cell functions correctly identified.',
    feedbackMiss: 'Red blood cells carry oxygen using haemoglobin. White blood cells defend against infection by producing antibodies or engulfing pathogens.',
  },

  // ── Q1c: Haploid nucleus importance (3 marks) ──
  q1_c: {
    marks: 3,
    exemplar: 'The nucleus is haploid (contains 23 chromosomes / half the genetic material required). When a sperm fertilises an egg, the zygote will be diploid (have 46 chromosomes / full set of chromosomes). This avoids polyploidy.',
    keyConcepts: [
      'nucleus is haploid or contains 23 chromosomes or half the genetic material',
      'when sperm fertilises egg the zygote will be diploid or have 46 chromosomes or full set',
      'correct use of term from the list: haploid, diploid, gamete, zygote',
    ],
    keywords: ['haploid', 'diploid', 'gamete', 'zygote', 'chromosomes', 'fertilisation', '23', '46'],
    feedbackHit: 'Excellent — correct use of haploid/diploid terminology with reasoning.',
    feedbackMiss: 'Haploid = half the normal chromosome number (23 in humans). This ensures that after fertilisation with another haploid egg, the resulting zygote has 46 chromosomes (diploid) — the correct number for human cells.',
  },

  // ── Q1d: Aerobic vs anaerobic respiration (3 marks) ──
  q1_d: {
    marks: 3,
    exemplar: 'Aerobic requires oxygen and anaerobic does not. Aerobic releases more energy (or ATP) than anaerobic. Accept further points: aerobic produces water and CO₂, anaerobic produces lactic acid; aerobic occurs in mitochondria, anaerobic in cytoplasm.',
    keyConcepts: [
      'aerobic requires oxygen and anaerobic does not',
      'aerobic releases more energy or ATP than anaerobic',
    ],
    keywords: ['oxygen', 'ATP', 'energy', 'lactic acid', 'mitochondria', 'cytoplasm', 'CO2', 'water'],
    feedbackHit: 'Good comparison of aerobic and anaerobic respiration.',
    feedbackMiss: 'Aerobic respiration requires oxygen and produces much more ATP; it occurs in the mitochondria. Anaerobic respiration does not require oxygen, produces lactic acid in animals, and occurs in the cytoplasm.',
  },

  // ── Q2a: Puberty physical changes (2 marks) ──
  q2_a: {
    marks: 2,
    exemplar: 'Female only: breasts develop / hips widen / ovulation starts. Male only: facial hair grows / penis enlargement / enlargement of larynx / voice deepens / shoulders broaden.',
    keyConcepts: [
      'one change in females only: breasts develop or hips widen or ovulation starts',
      'one change in males only: facial hair grows or penis enlargement or voice deepens',
    ],
    keywords: ['breasts', 'hips', 'ovulation', 'facial hair', 'penis', 'larynx', 'voice', 'shoulders'],
    feedbackHit: 'Correct sex-specific puberty changes identified.',
    feedbackMiss: 'Female-only changes include breasts developing, hips widening, and ovulation starting. Male-only changes include facial hair growth, penis enlargement, and voice deepening due to larynx growth.',
  },

  // ── Q2b: Menstrual cycle hormones (3 marks) ──
  q2_b: {
    marks: 3,
    exemplar: 'Estrogen thickens the uterus lining. Progesterone maintains the uterus lining. So that a fertilised egg or zygote can implant or survive.',
    keyConcepts: [
      'estrogen thickens uterus lining',
      'progesterone maintains uterus lining',
      'so that a fertilised egg or zygote can implant or survive',
    ],
    keywords: ['estrogen', 'progesterone', 'uterus', 'lining', 'implant', 'fertilised', 'zygote'],
    feedbackHit: 'Correct roles of estrogen and progesterone described with linked purpose.',
    feedbackMiss: 'Estrogen causes the uterus lining to thicken (proliferate). Progesterone maintains the thick lining so a fertilised egg can successfully implant and develop.',
  },

  // ── Q2c: LH role (1 mark) ──
  q2_c: {
    marks: 1,
    exemplar: 'LH triggers ovulation.',
    keyConcepts: ['LH triggers ovulation'],
    keywords: ['LH', 'luteinising hormone', 'ovulation', 'triggers'],
    feedbackHit: 'Correct — LH triggers ovulation.',
    feedbackMiss: 'LH (luteinising hormone) triggers ovulation — the release of an egg from the ovary.',
  },

  // ── Q2d: HGH fill_blank — steps 1, 4, 5 (3 marks) ──
  q2_d: {
    marks: 3,
    exemplar: 'Step 1: HGH gene extracted. Step 4: Combined genetic material is inserted into bacteria. Step 5: Genetically modified bacteria reproduce and make HGH.',
    blankAnswers: [
      'HGH gene extracted',
      'Combined genetic material is inserted into bacteria',
      'Genetically modified bacteria reproduce and make HGH',
    ],
    keyConcepts: [
      'HGH gene extracted',
      'combined genetic material inserted into bacteria',
      'genetically modified bacteria reproduce and make HGH',
    ],
    keywords: ['HGH', 'gene', 'extracted', 'plasmid', 'bacteria', 'genetically modified', 'reproduce'],
    feedbackHit: 'All three missing steps in the genetic modification process correctly identified.',
    feedbackMiss: 'Step 1: The HGH gene is extracted from human DNA. Step 4: The combined genetic material (HGH gene in plasmid) is inserted into bacteria. Step 5: The genetically modified bacteria reproduce and produce HGH.',
  },

  // ── Q2e: Why HGH injected not swallowed (2 marks) ──
  q2_e: {
    marks: 2,
    exemplar: 'HGH goes directly into the blood when injected. If taken as a tablet, it would be digested or denatured (broken down by enzymes in the stomach).',
    keyConcepts: [
      'goes directly into the blood',
      'will not be digested or denatured',
    ],
    keywords: ['blood', 'digested', 'denatured', 'enzymes', 'stomach', 'protein', 'absorbed'],
    feedbackHit: 'Correct explanation of why injection is required for HGH.',
    feedbackMiss: 'HGH is a protein hormone. If swallowed, it would be broken down (digested/denatured) by digestive enzymes in the stomach and intestines, so it would never reach the target cells. Injection delivers it directly into the bloodstream.',
  },

  // ── Q3a: Mammal characteristic (radio_select, 1 mark) ──
  q3_a: { type: 'mcq', correct: 0 },
  // Index 0 = 'Have mammary glands to feed young with milk'

  // ── Q3b: Homologous limb bones evaluation (3 marks) ──
  q3_b: {
    marks: 3,
    exemplar: 'Homologous limb bones are present in mammals AND (some) non-mammals. Examples from the diagram: frog and bird are not mammals. So homologous bones cannot be used to identify mammals.',
    keyConcepts: [
      'homologous limb bones present in mammals and non-mammals',
      'example from diagram: frog and bird are not mammals',
      'so it cannot be used to identify mammals',
    ],
    keywords: ['mammals', 'non-mammals', 'frog', 'bird', 'homologous', 'identify'],
    feedbackHit: 'Correct evaluation using diagram evidence.',
    feedbackMiss: 'Homologous limb bones are found in both mammals (humans, cats, whales) AND non-mammals (frogs, birds). Since frogs and birds are NOT mammals but still have homologous limb bones, this feature cannot be used alone to identify mammals.',
  },

  // ── Q3c: Bird bone structure adaptations (3 marks) ──
  q3_c: {
    marks: 3,
    exemplar: 'Dense bones increase strength or stiffness. Air pockets reduce weight or allow oxygen to circulate. Linked justification: support take-off or landing / do not bend excessively in flight / reduce energy demand / increase aerobic respiration.',
    keyConcepts: [
      'dense bones increase strength or stiffness',
      'air pockets reduce weight or allow oxygen to circulate',
      'linked justification for flight',
    ],
    keywords: ['dense', 'strength', 'stiffness', 'air pockets', 'weight', 'oxygen', 'flight', 'takeoff', 'landing'],
    feedbackHit: 'Both structural features explained with linked flight justification.',
    feedbackMiss: 'Dense bones: provide strength so wings do not bend during flight. Air pockets: reduce overall body weight so less energy is needed for flight, and may allow oxygen to circulate to support high aerobic respiration during flying.',
  },

  // ── Q4a: Biotic/abiotic classification (match_drag_drop, 1 mark) ──
  q4_a: {
    marks: 1,
    exemplar: 'Biotic factors: Bacteria, Insects. Abiotic factors: Water, Light, Soil pH, Temperature.',
    keyConcepts: [
      'Bacteria → Biotic factors',
      'Insects → Biotic factors',
      'Water → Abiotic factors',
      'Light → Abiotic factors',
      'Soil pH → Abiotic factors',
      'Temperature → Abiotic factors',
    ],
    keywords: ['biotic', 'abiotic', 'bacteria', 'insects', 'water', 'light', 'soil pH', 'temperature'],
    feedbackHit: 'All six factors correctly classified as biotic or abiotic.',
    feedbackMiss: 'Biotic factors are living things: Bacteria and Insects. Abiotic factors are non-living: Water, Light, Soil pH, and Temperature.',
  },

  // ── Q4b: Calculate mean soil pH (2 marks) ──
  q4_b: {
    marks: 2,
    exemplar: 'Mean = (5.2 + 5.1 + 5.4 + 5.7 + 5.3 + 5.5) ÷ 6 = 32.2 ÷ 6 = 5.36 (to three significant figures).',
    keyConcepts: ['5.36', 'calculation of mean'],
    keywords: ['5.36', '5.35666', 'mean', 'average', 'divide', 'sum'],
    feedbackHit: 'Correct mean calculated to three significant figures.',
    feedbackMiss: 'Add all six soil pH values: 5.2 + 5.1 + 5.4 + 5.7 + 5.3 + 5.5 = 32.2. Divide by 6: 32.2 ÷ 6 = 5.3667, which rounds to 5.37 to 3 sig figs. (Accept 5.36 or 5.37.)',
  },

  // ── Q4c: Bar chart (5 marks) ──
  q4_c: {
    marks: 5,
    exemplar: 'Y-axis labelled "(average) soil pH". X-axis labelled "colour (of flower)". Equal intervals on y-axis starting at zero. Two bars correctly labelled and plotted. Four bars correctly labelled and plotted (including blue at ~5.36).',
    keyConcepts: [
      'y axis labelled average soil pH',
      'x axis labelled colour of flower',
      'equal intervals on y axis starting at zero',
      'bars correctly labelled and plotted',
    ],
    keywords: ['y axis', 'x axis', 'average', 'soil pH', 'colour', 'flower', 'bar chart', 'intervals'],
    feedbackHit: 'Bar chart correctly drawn with both axes labelled, equal intervals, and all bars plotted.',
    feedbackMiss: 'The y-axis should be labelled "Average soil pH" (starting at 0 with equal intervals). The x-axis should show "Colour of flower" with four categories. Each bar should represent the mean soil pH for that colour, including blue at approximately 5.36.',
  },

  // ── Q4d: Type of data (1 mark) ──
  q4_d: {
    marks: 1,
    exemplar: 'The data on the x-axis is categorical data (or qualitative data, or discrete data, or colour is not continuous).',
    keyConcepts: ['categorical data or qualitative data or discrete data or colour not continuous'],
    keywords: ['categorical', 'qualitative', 'discrete', 'not continuous'],
    feedbackHit: 'Correct — flower colour data is categorical/qualitative.',
    feedbackMiss: 'Flower colour (white, blue, pink, purple) is categorical/qualitative data — it belongs to named categories rather than a numerical scale.',
  },

  // ── Q4e: Improve reliability (2 marks) ──
  q4_e: {
    marks: 2,
    exemplar: 'Increase the number of trials (measurements). This gives more representative results, reduces the impact of random errors, and means the mean is closer to the true value.',
    keyConcepts: [
      'increase the number of trials',
      'more representative or reduced impact of random errors or gets closer to true value',
    ],
    keywords: ['repeat', 'trials', 'reliability', 'random errors', 'representative', 'mean'],
    feedbackHit: 'Correct suggestion with valid justification.',
    feedbackMiss: 'To improve reliability, increase the number of measurements/repeats at each soil pH. More trials give a more representative result and reduce the effect of random errors.',
  },

  // ── Q4f: Species identification from dot plot (2 marks) ──
  q4_f: {
    marks: 2,
    exemplar: 'White hydrangea identified. White hydrangeas are found in a wider range of soil pH (or at the range of pH tested, they do not change colour, unlike the other species) — this suggests they are a different species.',
    keyConcepts: [
      'white hydrangea identified',
      'white plants found in a wider range of soil pH or does not change colour at different pH',
    ],
    keywords: ['white', 'range', 'soil pH', 'different species', 'colour', 'wide'],
    feedbackHit: 'Correct identification of white as potentially different species with evidence from dot plot.',
    feedbackMiss: 'White hydrangeas show a much wider spread of soil pH values compared to blue and pink, and they do not change colour with pH as the other varieties do. This suggests white hydrangeas may be a genetically different species that does not produce pH-sensitive pigment.',
  },

  // ── Q5a: Safety precaution (2 marks) ──
  q5_a: {
    marks: 2,
    exemplar: 'Wear protective equipment such as safety goggles or gloves. A hazard is identified AND connected to acidic or alkaline soils (e.g. chemicals could irritate skin or eyes).',
    keyConcepts: [
      'wear protective equipment or safety goggles or gloves',
      'hazard identified and connected to acidic or alkaline soils',
    ],
    keywords: ['goggles', 'gloves', 'protective', 'safety', 'acidic', 'alkaline', 'chemicals', 'irritate'],
    feedbackHit: 'Safety precaution correctly stated with linked hazard justification.',
    feedbackMiss: 'The soils could be highly acidic (pH 5) or alkaline (pH 9), which could irritate skin and eyes. Safety precaution: wear safety goggles and gloves to protect against chemical burns from unknown acid/alkaline agents.',
  },

  // ── Q5b: IV / DV / CVs (4 marks) ──
  q5_b: {
    marks: 4,
    exemplar: 'IV: soil pH. DV: number of blades of grass (or length of grass blades). Control variables (any two): watered with same volume of water; same plant species (Zoysia) grass used; length of experiment; size of pot; proximity to other seeds; mass of soil.',
    keyConcepts: [
      'IV: soil pH',
      'DV: number of blades or leaves of grass',
      'CV1: from list',
      'CV2: from list',
    ],
    keywords: ['independent', 'dependent', 'control', 'soil pH', 'blades', 'leaves', 'water', 'species', 'pot', 'mass'],
    feedbackHit: 'IV, DV, and two valid control variables correctly identified.',
    feedbackMiss: 'Independent variable (what you change): soil pH. Dependent variable (what you measure): number of blades of grass. Control variables (keep the same): volume of water, same grass species, pot size, mass of soil, length of experiment.',
  },

  // ── Q5c: Additional CVs not in method (2 marks) ──
  q5_c: {
    marks: 2,
    exemplar: 'Any two from: light intensity; light exposure or duration; temperature of soil or surroundings; age of seeds; soil composition.',
    keyConcepts: [
      'light intensity or light exposure or duration',
      'temperature of soil or surroundings or age of seeds or soil composition',
    ],
    keywords: ['light', 'temperature', 'age', 'seeds', 'soil composition', 'humidity', 'sunlight'],
    feedbackHit: 'Two valid additional control variables identified that were not in the original method.',
    feedbackMiss: 'Control variables NOT already in the method include: light intensity, light duration, ambient temperature, age of seeds, and soil composition. These would all need to be kept constant for a fair test.',
  },

  // ── Q5d: Hypothesis validity (3 marks) ──
  q5_d: {
    marks: 3,
    exemplar: 'Maximum number of blades at pH 7 (but also the same number at pH 6). The hypothesis is only partially supported — or it is not fully supported — because pH 6 gives the same number of blades as pH 7. Do not award third mark if second mark is not awarded.',
    keyConcepts: [
      'maximum number of blades at pH 7',
      'same number of blades at pH 6 also',
      'hypothesis only partially supported or not fully supported',
    ],
    keywords: ['pH 7', 'pH 6', 'partially supported', 'same number', 'hypothesis', 'validity'],
    feedbackHit: 'Good evaluation — maximum correctly identified, limitation noted, correct conclusion.',
    feedbackMiss: 'The data shows maximum blades at pH 7 (5 blades), which appears to support the hypothesis. However, pH 6 also produced 5 blades, so pH 7 is NOT the unique optimum. The hypothesis is only partially supported — pH 7 gives the most but so does pH 6.',
  },

  // ── Q5e: Optimum soil pH (2 marks) ──
  q5_e: {
    marks: 2,
    exemplar: 'pH 7 is the optimum. This is the pH giving the most blades AND the greatest average height.',
    keyConcepts: [
      'pH 7',
      'most blades AND greatest average height',
    ],
    keywords: ['pH 7', 'optimum', 'most blades', 'greatest length', 'height'],
    feedbackHit: 'pH 7 correctly identified as optimum with both supporting reasons.',
    feedbackMiss: 'pH 7 is the optimum because it produced both the highest number of blades (5) AND the greatest average blade length (approximately 4.5 cm). At pH 6, the blades were shorter on average, so pH 7 gives the best overall growth.',
  },

  // ── Q5f: How to verify pH 6.5 (1 mark) ──
  q5_f: {
    marks: 1,
    exemplar: 'Repeat both tests (count blades and measure length) for a pot of soil with pH 6.5.',
    keyConcepts: ['repeat both tests for soil with pH 6.5'],
    keywords: ['repeat', 'test', 'pH 6.5', 'soil', 'verify'],
    feedbackHit: 'Correct — repeat the investigation at pH 6.5 to verify.',
    feedbackMiss: 'To verify whether pH 6.5 is optimal, the student should repeat the experiment with a pot of soil at pH 6.5 and measure both the number of blades and the blade lengths.',
  },

  // ── Q5g: Improvements to data presentation (2 marks) ──
  q5_g: {
    marks: 2,
    exemplar: 'Any two from: consistent significant figures or same number of decimal places; consistent units; units should be in the header only.',
    keyConcepts: [
      'consistent significant figures or same number of decimal places',
      'consistent units or units in header only',
    ],
    keywords: ['significant figures', 'decimal places', 'units', 'consistent', 'header'],
    feedbackHit: 'Two valid presentation improvements correctly suggested.',
    feedbackMiss: 'In the table, some values use mm and others use cm — units should be consistent (all cm) and placed in the column header, not repeated in every cell. Values should also use the same number of decimal places.',
  },

  // ── Q6 (single design task, 17 marks) — Criterion B rubric ──
  q6_: {
    marks: 17,
    exemplar: 'IV: temperature (e.g. 10°C, 20°C, 30°C, 40°C). DV: dry biomass (g) of mushrooms. CVs: volume of soil, amount of spores, container size.\n\nHypothesis: If temperature increases, mushroom biomass will increase up to an optimum temperature and then decrease, because enzymes work faster at higher temperatures but denature above the optimum.\n\nEquipment: incubators set to different temperatures, electronic balance, drying oven, identical containers/pots, timer.\n\nMethod: Set up 5 identical containers of soil (equal mass), add equal quantities of mushroom spores to each, place in incubators at 10, 20, 30, 40, 50°C, leave for same time period, harvest mushrooms, dry in oven at 70°C until constant mass, weigh dried biomass.\n\nSufficient data: use at least 5 different temperatures and repeat each at least three times to calculate mean.\n\nSafety: wear gloves and safety goggles when handling spores; wash hands after handling soil.',
    keyConcepts: [
      'IV temperature identified and range stated',
      'DV dry biomass identified with method of measurement',
      'two CVs identified from valid list',
      'testable hypothesis with scientific explanation',
      'equipment named and specific to this investigation',
      'method linked to IV with how to measure DV',
      'sufficient data: 5+ temperatures and repeats',
      'safety consideration linked to chemicals or organisms',
    ],
    keywords: ['temperature', 'biomass', 'incubator', 'drying oven', 'spores', 'hypothesis', 'enzymes', 'optimum', 'repeat', 'safety', 'gloves'],
    feedbackHit: 'Excellent design — variables identified, hypothesis with science, method detailed and sufficient, safety noted.',
    feedbackMiss: 'A full Criterion B design should include: (1) IV = temperature with specific values, DV = dry mass/biomass with measurement method, and 2 named CVs. (2) A hypothesis linking temperature to enzyme activity. (3) Equipment list including incubator, drying oven, balance. (4) Step-by-step method showing how to vary temperature, measure biomass, and collect sufficient data. (5) A safety precaution.',
  },

  // ── Q7a: Ecosystem services match_drag_drop (1 mark) ──
  q7_a: {
    marks: 1,
    exemplar: 'Products → Raw materials; Regulation → Purification of water; Cultural → Recreational activities; Support → Soil formation.',
    keyConcepts: [
      'Products → Raw materials',
      'Regulation → Purification of water',
      'Cultural → Recreational activities',
      'Support → Soil formation',
    ],
    keywords: ['products', 'regulation', 'cultural', 'support', 'raw materials', 'purification', 'recreational', 'soil formation'],
    feedbackHit: 'All four ecosystem services correctly matched.',
    feedbackMiss: 'Products = Raw materials (timber, food); Regulation = Purification of water (filtration); Cultural = Recreational activities (hiking, tourism); Support = Soil formation (underpins all other services).',
  },

  // ── Q7b: Nutrient cycling as support service (2 marks) ──
  q7_b: {
    marks: 2,
    exemplar: 'Nutrient cycling leads to increased availability of nutrients. This supports all other organisms/services (increased food, increased raw materials, better organism health).',
    keyConcepts: [
      'leads to increased availability of nutrients',
      'supports all other organisms or services such as increased food or raw materials or organism health',
    ],
    keywords: ['nutrients', 'availability', 'cycling', 'support', 'food', 'organisms', 'health', 'minerals'],
    feedbackHit: 'Good outline linking nutrient availability to support of all ecosystem functions.',
    feedbackMiss: 'Nutrient cycling breaks down dead organic material and returns minerals to the soil. This increases nutrient availability, which supports plant growth and thus benefits all organisms and other ecosystem services (food production, habitat quality, biodiversity).',
  },

  // ── Q7c: Deforestation and carbon cycle (6 marks) ──
  q7_c: {
    marks: 6,
    exemplar: 'Deforestation causes: (1) increase in atmospheric carbon dioxide; (2) less carbon stored in living organisms; (3) increase in carbon in oceans or increase in carbonates in oceans. Explanatory points (any 3): fewer trees → less photosynthesis; increased combustion from burning releases stored carbon; fewer trees to store carbon; fewer organisms to store carbon; as more CO₂ dissolves into oceans.',
    keyConcepts: [
      'increase in atmospheric carbon dioxide',
      'less carbon stored in living organisms',
      'increase in carbon in oceans or carbonates',
      'fewer trees so less photosynthesis',
      'increased combustion from burning',
      'fewer organisms to store carbon',
    ],
    keywords: ['carbon dioxide', 'atmospheric', 'photosynthesis', 'combustion', 'burning', 'carbon cycle', 'stored', 'oceans', 'carbonates'],
    feedbackHit: 'Strong discussion linking deforestation to specific carbon cycle pathways.',
    feedbackMiss: 'Deforestation has multiple effects on the carbon cycle: (1) Fewer trees → less photosynthesis → less CO₂ absorbed from atmosphere → more CO₂ builds up. (2) Burning the cleared trees releases all the stored carbon back to the atmosphere. (3) With higher atmospheric CO₂, more dissolves into oceans, increasing ocean acidity.',
  },

  // ── Q7d: Other environmental consequence (1 mark) ──
  q7_d: {
    marks: 1,
    exemplar: 'Any one from: reduction in biodiversity; disruption of the water cycle; soil degradation or erosion; habitat destruction or forced migration; urbanisation.',
    keyConcepts: [
      'reduction in biodiversity or habitat destruction or soil degradation or disruption of water cycle or erosion or urbanisation',
    ],
    keywords: ['biodiversity', 'water cycle', 'soil erosion', 'habitat', 'migration', 'species loss'],
    feedbackHit: 'Valid environmental consequence of deforestation identified.',
    feedbackMiss: 'Other environmental consequences include: loss of biodiversity (animals lose habitat), soil erosion (tree roots no longer hold soil), disruption of the water cycle (less transpiration), and increased flooding.',
  },

  // ── Q8 (single essay task, 16 marks) — Criterion D rubric ──
  q8_: {
    marks: 16,
    exemplar: 'Reasons to regenerate forests (2): more resources/raw materials; renewal/restoration of habitats; protect/promote/increase biodiversity.\n\nScientific explanation of planning (4): soil must be prepared; weeds must be removed; seeding trees to remain must be selected; need to plan timing of cutting/planting; nutrients must be added; healthiest trees are selected; to provide optimal conditions for growth; trees must be cut down before they release seeds.\n\nEnvironmental consequences for 2 methods (4): natural regeneration — no transport emissions, low herbicide use; direct seeding — herbicide use may affect wildlife, airplanes pollute; planting seedlings — refrigeration energy, vehicle emissions, high water requirement.\n\nEconomic considerations for 2 methods (4): planting seedlings — cost of nutrients, refrigeration, machinery, but matures fastest (5 years); direct seeding — cost of seed storage, treatment; natural regeneration — lowest ongoing cost but takes longest (9 years).\n\nConcluding appraisal (2): e.g. planting seedlings is best because matures fastest and GM seedlings give efficient growth, despite higher initial cost.',
    keyConcepts: [
      'two reasons to regenerate forests',
      'scientific explanation of why planning is important',
      'environmental consequence for one method',
      'environmental consequence for a different method',
      'economic consideration for one method',
      'economic consideration for a different method',
      'concluding opinion stated',
      'concluding appraisal with specific detail or justification',
    ],
    keywords: [
      'biodiversity', 'habitats', 'resources', 'planning', 'soil preparation', 'weeds', 'seeds', 'seeding trees',
      'natural regeneration', 'direct seeding', 'planting seedlings',
      'herbicide', 'environmental', 'carbon emissions', 'transport',
      'cost', 'machinery', 'fertiliser', 'economic',
      'concluding', 'best method',
    ],
    feedbackHit: 'Excellent evaluation — reasons, science of planning, environmental and economic consequences for two methods, and a justified conclusion.',
    feedbackMiss: 'A full Q8 answer should: (1) Give 2 reasons to regenerate forests. (2) Explain the science behind why planning matters (soil nutrients, competition, timing). (3) Compare environmental effects of 2 methods (e.g. herbicide impact vs carbon from transport). (4) Compare economic factors for 2 methods (e.g. cost of seeds vs seedling care). (5) Give a concluding opinion with a specific justified reason.',
  },
}
