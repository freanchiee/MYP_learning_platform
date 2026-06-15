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

// ── Mark Scheme: Biology November 2024 — VARIANT 2 ─────────────────────────
export const MS: MSRecord = {

  // ── Q1a: Structure → Function (match_drag_drop, 2 marks) ──
  q1_a: {
    marks: 2,
    exemplar: 'Carries the main genetic material → Circular DNA; Controls what goes in and out of the cell → Cell membrane; Makes proteins → Ribosome',
    keyConcepts: [
      'Carries the main genetic material → Circular DNA',
      'Controls what goes in and out of the cell → Cell membrane',
      'Makes proteins → Ribosome',
    ],
    keywords: ['circular DNA', 'cell membrane', 'ribosome', 'genetic material', 'proteins'],
    feedbackHit: 'Correct — all three bacterial structures matched to the right functions.',
    feedbackMiss: 'The circular DNA (nucleoid) carries the main genetic material. The cell membrane controls what enters and leaves the cell. Ribosomes make proteins.',
  },

  // ── Q1b: Nerve/muscle cell functions (2 marks) ──
  q1_b: {
    marks: 2,
    exemplar: 'Nerve cells carry/transmit electrical impulses (information around the body). Muscle cells contract (to produce movement).',
    keyConcepts: [
      'nerve cells transmit electrical impulses',
      'muscle cells contract to produce movement',
    ],
    keywords: ['nerve', 'impulse', 'signal', 'transmit', 'muscle', 'contract', 'movement'],
    feedbackHit: 'Both specialised cell functions correctly identified.',
    feedbackMiss: 'Nerve cells carry electrical impulses (information) quickly around the body. Muscle cells contract to produce movement of the body or organs.',
  },

  // ── Q1c: Haploid nucleus importance (3 marks) ──
  q1_c: {
    marks: 3,
    exemplar: 'The egg nucleus is haploid (contains half the genetic material / e.g. 23 chromosomes in humans). When the egg is fertilised by a sperm, the zygote will be diploid (have the full set / 46 chromosomes). This avoids doubling the chromosome number each generation (polyploidy).',
    keyConcepts: [
      'nucleus is haploid or contains half the genetic material',
      'when egg is fertilised by sperm the zygote will be diploid or have full set',
      'correct use of term from the list: haploid, diploid, gamete, zygote',
    ],
    keywords: ['haploid', 'diploid', 'gamete', 'zygote', 'chromosomes', 'fertilisation', '23', '46'],
    feedbackHit: 'Excellent — correct use of haploid/diploid terminology with reasoning.',
    feedbackMiss: 'Haploid = half the normal chromosome number. This ensures that after fertilisation with a haploid sperm, the resulting zygote has the full diploid number of chromosomes — the correct number for body cells — and the number stays constant each generation.',
  },

  // ── Q1d: Aerobic vs anaerobic respiration (3 marks) ──
  q1_d: {
    marks: 3,
    exemplar: 'Aerobic requires oxygen and anaerobic does not. Aerobic releases more energy (or ATP) than anaerobic. Accept further points: aerobic produces water and CO₂, anaerobic produces lactic acid in animals; aerobic occurs in mitochondria, anaerobic in cytoplasm.',
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

  // ── Q2d: Clotting-factor fill_blank — steps 1, 4, 5 (3 marks) ──
  q2_d: {
    marks: 3,
    exemplar: 'Step 1: Clotting-factor gene extracted. Step 4: Combined genetic material is inserted into bacteria. Step 5: Genetically modified bacteria reproduce and make clotting factor.',
    blankAnswers: [
      'Clotting-factor gene extracted',
      'Combined genetic material is inserted into bacteria',
      'Genetically modified bacteria reproduce and make clotting factor',
    ],
    keyConcepts: [
      'clotting-factor gene extracted',
      'combined genetic material inserted into bacteria',
      'genetically modified bacteria reproduce and make clotting factor',
    ],
    keywords: ['clotting factor', 'gene', 'extracted', 'plasmid', 'bacteria', 'genetically modified', 'reproduce'],
    feedbackHit: 'All three missing steps in the genetic modification process correctly identified.',
    feedbackMiss: 'Step 1: The clotting-factor gene is extracted from human DNA. Step 4: The combined genetic material (gene in plasmid) is inserted into bacteria. Step 5: The genetically modified bacteria reproduce and produce clotting factor.',
  },

  // ── Q2e: Why clotting factor injected not swallowed (2 marks) ──
  q2_e: {
    marks: 2,
    exemplar: 'Clotting factor goes directly into the blood when injected. If taken as a tablet, it would be digested or denatured (broken down by enzymes in the stomach).',
    keyConcepts: [
      'goes directly into the blood',
      'will not be digested or denatured',
    ],
    keywords: ['blood', 'digested', 'denatured', 'enzymes', 'stomach', 'protein', 'absorbed'],
    feedbackHit: 'Correct explanation of why injection is required for clotting factor.',
    feedbackMiss: 'Clotting factor is a protein. If swallowed, it would be broken down (digested/denatured) by digestive enzymes in the stomach and intestines, so it would never reach the blood. Injection delivers it directly into the bloodstream.',
  },

  // ── Q3a: Reptile characteristic (radio_select, 1 mark) ──
  q3_a: { type: 'mcq', correct: 0 },
  // Index 0 = 'Have dry scaly skin and lay eggs with leathery shells'

  // ── Q3b: Homologous limb bones evaluation (3 marks) ──
  q3_b: {
    marks: 3,
    exemplar: 'Homologous limb bones are present in reptiles AND non-reptiles. Examples from the diagram: cat, bat and frog are not reptiles but have the same limb bones. So homologous bones cannot be used to identify reptiles.',
    keyConcepts: [
      'homologous limb bones present in reptiles and non-reptiles',
      'example from diagram: cat, bat or frog are not reptiles',
      'so it cannot be used to identify reptiles',
    ],
    keywords: ['reptiles', 'non-reptiles', 'cat', 'bat', 'frog', 'homologous', 'identify'],
    feedbackHit: 'Correct evaluation using diagram evidence.',
    feedbackMiss: 'Homologous limb bones are found in both reptiles AND non-reptiles (cats, bats, frogs). Since cats, bats and frogs are NOT reptiles but still have homologous limb bones, this feature cannot be used alone to identify reptiles.',
  },

  // ── Q3c: Cactus desert adaptations (3 marks) ──
  q3_c: {
    marks: 3,
    exemplar: 'A thick waxy outer layer reduces water loss by evaporation/transpiration. Storing water in a swollen stem provides a reserve of water. Linked justification: both adaptations let the cactus survive long periods without rain in a hot, dry desert.',
    keyConcepts: [
      'thick waxy layer reduces water loss or transpiration',
      'swollen stem stores water as a reserve',
      'linked justification for survival in hot dry conditions',
    ],
    keywords: ['waxy', 'water loss', 'transpiration', 'evaporation', 'store water', 'stem', 'reserve', 'drought', 'desert'],
    feedbackHit: 'Both adaptations explained with linked justification for desert life.',
    feedbackMiss: 'Thick waxy layer: reduces water loss by evaporation/transpiration so the plant conserves water. Swollen stem: stores water as a reserve, so the cactus can survive long dry periods between rains in the hot desert.',
  },

  // ── Q4a: Biotic/abiotic classification (match_drag_drop, 1 mark) ──
  q4_a: {
    marks: 1,
    exemplar: 'Biotic factors: Aphids, Butterflies. Abiotic factors: Rainfall, Sunlight, Soil pH, Air temperature.',
    keyConcepts: [
      'Aphids → Biotic factors',
      'Butterflies → Biotic factors',
      'Rainfall → Abiotic factors',
      'Sunlight → Abiotic factors',
      'Soil pH → Abiotic factors',
      'Air temperature → Abiotic factors',
    ],
    keywords: ['biotic', 'abiotic', 'aphids', 'butterflies', 'rainfall', 'sunlight', 'soil pH', 'air temperature'],
    feedbackHit: 'All six factors correctly classified as biotic or abiotic.',
    feedbackMiss: 'Biotic factors are living things: Aphids and Butterflies. Abiotic factors are non-living: Rainfall, Sunlight, Soil pH, and Air temperature.',
  },

  // ── Q4b: Calculate mean soil pH (2 marks) ──
  q4_b: {
    marks: 2,
    exemplar: 'Mean = (6.2 + 6.5 + 6.3 + 6.6 + 6.1 + 6.7) ÷ 6 = 38.4 ÷ 6 = 6.40 (to three significant figures).',
    keyConcepts: ['6.40', 'calculation of mean'],
    keywords: ['6.40', '6.4', 'mean', 'average', 'divide', 'sum'],
    feedbackHit: 'Correct mean calculated to three significant figures.',
    feedbackMiss: 'Add all six soil pH values: 6.2 + 6.5 + 6.3 + 6.6 + 6.1 + 6.7 = 38.4. Divide by 6: 38.4 ÷ 6 = 6.40 to 3 significant figures.',
  },

  // ── Q4c: Bar chart (5 marks) ──
  q4_c: {
    marks: 5,
    exemplar: 'Y-axis labelled "(average) soil pH". X-axis labelled "colour (of flower)". Equal intervals on y-axis starting at zero. Two bars correctly labelled and plotted. All three bars correctly labelled and plotted (including magenta at ~6.40).',
    keyConcepts: [
      'y axis labelled average soil pH',
      'x axis labelled colour of flower',
      'equal intervals on y axis starting at zero',
      'bars correctly labelled and plotted',
    ],
    keywords: ['y axis', 'x axis', 'average', 'soil pH', 'colour', 'flower', 'bar chart', 'intervals'],
    feedbackHit: 'Bar chart correctly drawn with both axes labelled, equal intervals, and all bars plotted.',
    feedbackMiss: 'The y-axis should be labelled "Average soil pH" (starting at 0 with equal intervals). The x-axis should show "Colour of flower" with the three categories. Each bar should represent the mean soil pH for that colour, including magenta at approximately 6.40.',
  },

  // ── Q4d: Type of data (1 mark) ──
  q4_d: {
    marks: 1,
    exemplar: 'The data on the x-axis is categorical data (or qualitative data, or discrete data, or colour is not continuous).',
    keyConcepts: ['categorical data or qualitative data or discrete data or colour not continuous'],
    keywords: ['categorical', 'qualitative', 'discrete', 'not continuous'],
    feedbackHit: 'Correct — flower colour data is categorical/qualitative.',
    feedbackMiss: 'Flower colour (pink, magenta, purple) is categorical/qualitative data — it belongs to named categories rather than a numerical scale.',
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
    feedbackMiss: 'To improve reliability, increase the number of measurements/repeats at each colour. More trials give a more representative result and reduce the effect of random errors.',
  },

  // ── Q4f: Species identification from dot plot (2 marks) ──
  q4_f: {
    marks: 2,
    exemplar: 'White petunia identified. White petunias are found across a much wider range of soil pH (or do not change colour with pH, unlike the other colours) — this suggests they are a different species.',
    keyConcepts: [
      'white petunia identified',
      'white petunias found in a wider range of soil pH or does not change colour at different pH',
    ],
    keywords: ['white', 'range', 'soil pH', 'different species', 'colour', 'wide'],
    feedbackHit: 'Correct identification of white as potentially different species with evidence from dot plot.',
    feedbackMiss: 'White petunias show a much wider spread of soil pH values compared to pink, magenta and purple, and they do not change colour with pH as the others do. This suggests white may be a genetically different species that does not produce pH-sensitive pigment.',
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
    exemplar: 'IV: soil pH. DV: number of cress seedlings (or height of seedlings). Control variables (any two): same volume of water; same plant species (cress) used; length of experiment; size of pot; number of seeds sown; mass of soil.',
    keyConcepts: [
      'IV: soil pH',
      'DV: number of cress seedlings or height of seedlings',
      'CV1: from list',
      'CV2: from list',
    ],
    keywords: ['independent', 'dependent', 'control', 'soil pH', 'seedlings', 'height', 'water', 'species', 'pot', 'mass'],
    feedbackHit: 'IV, DV, and two valid control variables correctly identified.',
    feedbackMiss: 'Independent variable (what you change): soil pH. Dependent variable (what you measure): number of cress seedlings. Control variables (keep the same): volume of water, same cress species, pot size, mass of soil, length of experiment.',
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
    exemplar: 'Maximum number of seedlings at pH 7 (but also the same number at pH 6). The hypothesis is only partially supported — or it is not fully supported — because pH 6 gives the same number of seedlings as pH 7. Do not award third mark if second mark is not awarded.',
    keyConcepts: [
      'maximum number of seedlings at pH 7',
      'same number of seedlings at pH 6 also',
      'hypothesis only partially supported or not fully supported',
    ],
    keywords: ['pH 7', 'pH 6', 'partially supported', 'same number', 'hypothesis', 'validity'],
    feedbackHit: 'Good evaluation — maximum correctly identified, limitation noted, correct conclusion.',
    feedbackMiss: 'The data shows maximum seedlings at pH 7 (6 seedlings), which appears to support the hypothesis. However, pH 6 also produced 6 seedlings, so pH 7 is NOT the unique optimum. The hypothesis is only partially supported.',
  },

  // ── Q5e: Optimum soil pH (2 marks) ──
  q5_e: {
    marks: 2,
    exemplar: 'pH 7 is the optimum. This is the pH giving the most seedlings AND the greatest average height.',
    keyConcepts: [
      'pH 7',
      'most seedlings AND greatest average height',
    ],
    keywords: ['pH 7', 'optimum', 'most seedlings', 'greatest height', 'average'],
    feedbackHit: 'pH 7 correctly identified as optimum with both supporting reasons.',
    feedbackMiss: 'pH 7 is the optimum because it produced both the highest number of seedlings (6) AND the greatest average height (about 4.5 cm). At pH 6 the seedlings were shorter on average, so pH 7 gives the best overall growth.',
  },

  // ── Q5f: How to verify pH 6.5 (1 mark) ──
  q5_f: {
    marks: 1,
    exemplar: 'Repeat both tests (count seedlings and measure height) for a pot of soil with pH 6.5.',
    keyConcepts: ['repeat both tests for soil with pH 6.5'],
    keywords: ['repeat', 'test', 'pH 6.5', 'soil', 'verify'],
    feedbackHit: 'Correct — repeat the investigation at pH 6.5 to verify.',
    feedbackMiss: 'To verify whether pH 6.5 is optimal, the student should repeat the experiment with a pot of soil at pH 6.5 and measure both the number of seedlings and their heights.',
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
    exemplar: 'IV: salt concentration of the water (e.g. 0, 10, 20, 30, 40 g/L). DV: dry biomass (g) of bean seedlings. CVs: volume of solution added, number/type of bean seeds, pot size, temperature, light.\n\nHypothesis: If the salt concentration increases, the dry biomass of the bean seedlings will decrease, because a higher salt concentration outside the roots lowers the water potential of the soil, reducing water uptake by osmosis (and can be toxic to cells).\n\nEquipment: measuring cylinders to make solutions, balance, drying oven, identical pots of soil, salt, distilled water, timer.\n\nMethod: Set up 5 identical pots of soil (equal mass) with the same number of bean seeds, water each daily with the same volume of a different salt concentration, keep all other conditions the same, leave for the same time period, then dry each set of seedlings in the oven at ~70°C to constant mass and weigh the dry biomass.\n\nSufficient data: use at least 5 different salt concentrations and repeat each at least three times to calculate a mean.\n\nSafety: wear gloves and wash hands after handling soil; take care with the hot drying oven.',
    keyConcepts: [
      'IV salt concentration identified and range stated',
      'DV dry biomass identified with method of measurement',
      'two CVs identified from valid list',
      'testable hypothesis with scientific explanation (osmosis / water potential)',
      'equipment named and specific to this investigation',
      'method linked to IV with how to measure DV',
      'sufficient data: 5+ concentrations and repeats',
      'safety consideration linked to apparatus or handling',
    ],
    keywords: ['salt concentration', 'biomass', 'osmosis', 'water potential', 'drying oven', 'balance', 'hypothesis', 'distilled water', 'repeat', 'safety'],
    feedbackHit: 'Excellent design — variables identified, hypothesis with science (osmosis), method detailed and sufficient, safety noted.',
    feedbackMiss: 'A full Criterion B design should include: (1) IV = salt concentration with specific values, DV = dry mass/biomass with measurement method, and 2 named CVs. (2) A hypothesis linking salt concentration to osmosis/water uptake. (3) Equipment including measuring cylinders, balance, drying oven. (4) Step-by-step method showing how to vary salt concentration, measure biomass, and collect sufficient data. (5) A safety precaution.',
  },

  // ── Q7a: Ecosystem services match_drag_drop (1 mark) ──
  q7_a: {
    marks: 1,
    exemplar: 'Products → Timber for building; Regulation → Carbon storage; Cultural → Recreational fishing; Support → Soil formation.',
    keyConcepts: [
      'Products → Timber for building',
      'Regulation → Carbon storage',
      'Cultural → Recreational fishing',
      'Support → Soil formation',
    ],
    keywords: ['products', 'regulation', 'cultural', 'support', 'timber', 'carbon storage', 'recreational fishing', 'soil formation'],
    feedbackHit: 'All four ecosystem services correctly matched.',
    feedbackMiss: 'Products = Timber for building (a material resource); Regulation = Carbon storage (the mangrove regulates the atmosphere); Cultural = Recreational fishing (a non-material benefit); Support = Soil formation (underpins all other services).',
  },

  // ── Q7b: Nutrient cycling as support service (2 marks) ──
  q7_b: {
    marks: 2,
    exemplar: 'Nutrient cycling leads to increased availability of nutrients. This supports all other organisms/services (increased plant growth, increased food, better organism health).',
    keyConcepts: [
      'leads to increased availability of nutrients',
      'supports all other organisms or services such as increased food or plant growth or organism health',
    ],
    keywords: ['nutrients', 'availability', 'cycling', 'support', 'food', 'organisms', 'health', 'minerals'],
    feedbackHit: 'Good outline linking nutrient availability to support of all ecosystem functions.',
    feedbackMiss: 'Nutrient cycling breaks down dead organic material and returns minerals to the mud and water. This increases nutrient availability, which supports plant growth and thus benefits all organisms and other ecosystem services (food production, habitat quality, biodiversity).',
  },

  // ── Q7c: Clearing mangroves and carbon cycle (6 marks) ──
  q7_c: {
    marks: 6,
    exemplar: 'Clearing mangroves causes: (1) increase in atmospheric carbon dioxide; (2) less carbon stored in living organisms; (3) increase in carbon dissolved in the oceans / increased ocean acidity. Explanatory points (any 3): fewer mangroves → less photosynthesis → less CO₂ absorbed; burning the cut trees releases stored carbon (combustion); disturbing the carbon-rich mud lets stored carbon decompose and escape; fewer organisms to store carbon; more CO₂ dissolves into the sea.',
    keyConcepts: [
      'increase in atmospheric carbon dioxide',
      'less carbon stored in living organisms',
      'increase in carbon in oceans or ocean acidity',
      'fewer mangroves so less photosynthesis',
      'increased combustion from burning',
      'disturbed mud releases stored carbon',
    ],
    keywords: ['carbon dioxide', 'atmospheric', 'photosynthesis', 'combustion', 'burning', 'carbon cycle', 'stored', 'oceans', 'mud', 'decompose'],
    feedbackHit: 'Strong discussion linking mangrove clearing to specific carbon cycle pathways.',
    feedbackMiss: 'Clearing mangroves affects the carbon cycle: (1) Fewer mangroves → less photosynthesis → less CO₂ absorbed → more CO₂ builds up. (2) Burning the cleared trees releases their stored carbon back to the atmosphere. (3) Disturbing the carbon-rich mud lets stored carbon decompose and escape, and more CO₂ dissolves into the ocean, raising acidity.',
  },

  // ── Q7d: Other environmental consequence (1 mark) ──
  q7_d: {
    marks: 1,
    exemplar: 'Any one from: reduction in biodiversity; loss of coastal protection so more storm damage or erosion; loss of fish nursery habitat; soil/sediment erosion; saltwater intrusion inland.',
    keyConcepts: [
      'reduction in biodiversity or loss of coastal protection or habitat destruction or coastal erosion or loss of fish nursery',
    ],
    keywords: ['biodiversity', 'coastal protection', 'erosion', 'habitat', 'storm', 'fish nursery', 'species loss'],
    feedbackHit: 'Valid environmental consequence of clearing mangroves identified.',
    feedbackMiss: 'Other environmental consequences include: loss of biodiversity (species lose their habitat), loss of coastal protection (more storm damage and erosion), loss of fish nursery habitat, and increased coastal erosion.',
  },

  // ── Q8 (single essay task, 16 marks) — Criterion D rubric ──
  q8_: {
    marks: 16,
    exemplar: 'Reasons to restore mangroves (2): protect coastlines from storms and erosion; store large amounts of carbon; provide nursery habitat for fish and fisheries; protect/promote/increase biodiversity.\n\nScientific explanation of planning (4): tidal flow must be restored so the right amount of seawater reaches the site; mud must be prepared and invasive plants removed; healthiest trees/propagules selected; timing of planting matters (wet season, tides); conditions optimised so young mangroves survive waves and salt.\n\nEnvironmental consequences for 2 methods (4): natural recovery — no transport emissions, very low disturbance; direct seeding — handling and storage of propagules has a small impact; planting nursery seedlings — nursery and shaded transport use energy and have a carbon cost.\n\nEconomic considerations for 2 methods (4): planting nursery seedlings — cost of nursery, transport, labour, but matures fastest (5 years); direct seeding — cost of collecting, storing and treating propagules; natural recovery — lowest ongoing cost but takes longest (11 years).\n\nConcluding appraisal (2): e.g. planting nursery seedlings is best because it recovers fastest and gives the highest survival, despite higher initial cost — OR natural recovery is best where seed sources remain and budgets are low.',
    keyConcepts: [
      'two reasons to restore mangroves',
      'scientific explanation of why planning is important',
      'environmental consequence for one method',
      'environmental consequence for a different method',
      'economic consideration for one method',
      'economic consideration for a different method',
      'concluding opinion stated',
      'concluding appraisal with specific detail or justification',
    ],
    keywords: [
      'biodiversity', 'coastal protection', 'carbon storage', 'fisheries', 'planning', 'tidal flow', 'mud', 'propagules', 'invasive plants',
      'natural recovery', 'direct seeding', 'planting seedlings',
      'environmental', 'carbon emissions', 'transport', 'disturbance',
      'cost', 'labour', 'nursery', 'economic',
      'concluding', 'best method',
    ],
    feedbackHit: 'Excellent evaluation — reasons, science of planning, environmental and economic consequences for two methods, and a justified conclusion.',
    feedbackMiss: 'A full Q8 answer should: (1) Give 2 reasons to restore mangroves. (2) Explain the science behind why planning matters (restoring tides, removing invasive plants, timing, salt tolerance). (3) Compare environmental effects of 2 methods (e.g. disturbance vs carbon from transport). (4) Compare economic factors for 2 methods (e.g. nursery cost vs propagule storage cost). (5) Give a concluding opinion with a specific justified reason.',
  },
}
