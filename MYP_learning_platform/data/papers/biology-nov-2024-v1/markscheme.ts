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

// ── Mark Scheme: Biology November 2024 — VARIANT 1 ─────────────────────────
export const MS: MSRecord = {

  // ── Q1a: Organelle → Function (match_drag_drop, 2 marks) ──
  q1_a: {
    marks: 2,
    exemplar: 'Absorbs light energy for photosynthesis → Chloroplast; Provides support and a fixed shape to the cell → Cell wall; Stores cell sap and keeps the cell turgid → Vacuole',
    keyConcepts: [
      'Absorbs light energy for photosynthesis → Chloroplast',
      'Provides support and a fixed shape to the cell → Cell wall',
      'Stores cell sap and keeps the cell turgid → Vacuole',
    ],
    keywords: ['chloroplast', 'cell wall', 'vacuole', 'photosynthesis', 'support', 'turgid'],
    feedbackHit: 'Correct — all three plant organelles matched to the right functions.',
    feedbackMiss: 'Chloroplasts absorb light for photosynthesis. The cell wall gives the cell support and a fixed shape. The vacuole stores cell sap and keeps the cell turgid.',
  },

  // ── Q1b: Root hair / xylem cell functions (2 marks) ──
  q1_b: {
    marks: 2,
    exemplar: 'Root hair cells absorb water (and mineral ions) from the soil. Xylem cells transport water (and minerals) up the plant (and provide support).',
    keyConcepts: [
      'root hair cells absorb water or mineral ions',
      'xylem cells transport water up the plant',
    ],
    keywords: ['root hair', 'absorb', 'water', 'mineral ions', 'xylem', 'transport', 'support'],
    feedbackHit: 'Both plant cell functions correctly identified.',
    feedbackMiss: 'Root hair cells have a large surface area to absorb water and mineral ions from the soil. Xylem cells form hollow tubes that carry water and minerals up from the roots and help support the plant.',
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
    exemplar: 'Aerobic requires oxygen and anaerobic does not. Aerobic releases more energy (or ATP) than anaerobic. Accept further points: aerobic produces water and CO₂, anaerobic in plants produces ethanol and CO₂; aerobic occurs in mitochondria, anaerobic in cytoplasm.',
    keyConcepts: [
      'aerobic requires oxygen and anaerobic does not',
      'aerobic releases more energy or ATP than anaerobic',
    ],
    keywords: ['oxygen', 'ATP', 'energy', 'ethanol', 'mitochondria', 'cytoplasm', 'CO2', 'water'],
    feedbackHit: 'Good comparison of aerobic and anaerobic respiration.',
    feedbackMiss: 'Aerobic respiration requires oxygen and releases much more ATP; it occurs in the mitochondria. Anaerobic respiration does not require oxygen, produces ethanol and CO₂ in plants/yeast, and occurs in the cytoplasm.',
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

  // ── Q2b: Insulin & glucagon roles (3 marks) ──
  q2_b: {
    marks: 3,
    exemplar: 'Insulin lowers blood glucose (by making the liver/cells take up glucose and store it as glycogen). Glucagon raises blood glucose (by making the liver convert glycogen back to glucose). So that blood glucose is kept within a narrow, safe range (homeostasis).',
    keyConcepts: [
      'insulin lowers blood glucose',
      'glucagon raises blood glucose',
      'so that blood glucose is kept within a safe range or homeostasis',
    ],
    keywords: ['insulin', 'glucagon', 'glucose', 'glycogen', 'liver', 'lower', 'raise', 'homeostasis'],
    feedbackHit: 'Correct roles of insulin and glucagon described with linked purpose.',
    feedbackMiss: 'Insulin is released when blood glucose is high; it makes cells take up glucose and the liver store it as glycogen, so glucose falls. Glucagon is released when glucose is low; it makes the liver break glycogen back into glucose, so glucose rises. Together they keep glucose stable.',
  },

  // ── Q2c: Organ releasing insulin/glucagon (1 mark) ──
  q2_c: {
    marks: 1,
    exemplar: 'The pancreas.',
    keyConcepts: ['pancreas releases insulin and glucagon'],
    keywords: ['pancreas'],
    feedbackHit: 'Correct — the pancreas releases insulin and glucagon.',
    feedbackMiss: 'The pancreas releases both insulin and glucagon into the blood to control blood glucose concentration.',
  },

  // ── Q2d: Insulin fill_blank — steps 1, 4, 5 (3 marks) ──
  q2_d: {
    marks: 3,
    exemplar: 'Step 1: Insulin gene extracted. Step 4: Combined genetic material is inserted into bacteria. Step 5: Genetically modified bacteria reproduce and make insulin.',
    blankAnswers: [
      'Insulin gene extracted',
      'Combined genetic material is inserted into bacteria',
      'Genetically modified bacteria reproduce and make insulin',
    ],
    keyConcepts: [
      'insulin gene extracted',
      'combined genetic material inserted into bacteria',
      'genetically modified bacteria reproduce and make insulin',
    ],
    keywords: ['insulin', 'gene', 'extracted', 'plasmid', 'bacteria', 'genetically modified', 'reproduce'],
    feedbackHit: 'All three missing steps in the genetic modification process correctly identified.',
    feedbackMiss: 'Step 1: The insulin gene is extracted from human DNA. Step 4: The combined genetic material (insulin gene in plasmid) is inserted into bacteria. Step 5: The genetically modified bacteria reproduce and produce insulin.',
  },

  // ── Q2e: Why insulin injected not swallowed (2 marks) ──
  q2_e: {
    marks: 2,
    exemplar: 'Insulin goes directly into the blood when injected. If taken as a tablet, it would be digested or denatured (broken down by enzymes in the stomach).',
    keyConcepts: [
      'goes directly into the blood',
      'will not be digested or denatured',
    ],
    keywords: ['blood', 'digested', 'denatured', 'enzymes', 'stomach', 'protein', 'absorbed'],
    feedbackHit: 'Correct explanation of why injection is required for insulin.',
    feedbackMiss: 'Insulin is a protein hormone. If swallowed, it would be broken down (digested/denatured) by digestive enzymes in the stomach and intestines, so it would never reach the blood. Injection delivers it directly into the bloodstream.',
  },

  // ── Q3a: Bird characteristic (radio_select, 1 mark) ──
  q3_a: { type: 'mcq', correct: 0 },
  // Index 0 = 'Have feathers covering their body'

  // ── Q3b: Homologous limb bones evaluation (3 marks) ──
  q3_b: {
    marks: 3,
    exemplar: 'Homologous limb bones are present in birds AND non-birds. Examples from the diagram: human, whale and frog are not birds but have the same limb bones. So homologous bones cannot be used to identify birds.',
    keyConcepts: [
      'homologous limb bones present in birds and non-birds',
      'example from diagram: human, whale or frog are not birds',
      'so it cannot be used to identify birds',
    ],
    keywords: ['birds', 'non-birds', 'human', 'whale', 'frog', 'homologous', 'identify'],
    feedbackHit: 'Correct evaluation using diagram evidence.',
    feedbackMiss: 'Homologous limb bones are found in both birds AND non-birds (humans, whales, frogs). Since humans, whales and frogs are NOT birds but still have homologous limb bones, this feature cannot be used alone to identify birds.',
  },

  // ── Q3c: Fish aquatic adaptations (3 marks) ──
  q3_c: {
    marks: 3,
    exemplar: 'A streamlined body shape reduces water resistance or drag. A gas-filled swim bladder controls buoyancy (makes the fish more/less dense). Linked justification: streamlining lets the fish swim faster using less energy; the swim bladder lets it stay at a chosen depth without sinking or floating up.',
    keyConcepts: [
      'streamlined shape reduces water resistance or drag',
      'swim bladder controls buoyancy or density',
      'linked justification for life in water',
    ],
    keywords: ['streamlined', 'drag', 'resistance', 'swim bladder', 'buoyancy', 'density', 'depth', 'energy'],
    feedbackHit: 'Both adaptations explained with linked justification for life in water.',
    feedbackMiss: 'Streamlined shape: reduces drag/water resistance so the fish can swim faster using less energy. Swim bladder: holds gas to control buoyancy, letting the fish float at a chosen depth without using energy to swim up or down.',
  },

  // ── Q4a: Biotic/abiotic classification (match_drag_drop, 1 mark) ──
  q4_a: {
    marks: 1,
    exemplar: 'Biotic factors: Earthworms, Bees. Abiotic factors: Rainfall, Sunlight, Soil pH, Air temperature.',
    keyConcepts: [
      'Earthworms → Biotic factors',
      'Bees → Biotic factors',
      'Rainfall → Abiotic factors',
      'Sunlight → Abiotic factors',
      'Soil pH → Abiotic factors',
      'Air temperature → Abiotic factors',
    ],
    keywords: ['biotic', 'abiotic', 'earthworms', 'bees', 'rainfall', 'sunlight', 'soil pH', 'air temperature'],
    feedbackHit: 'All six factors correctly classified as biotic or abiotic.',
    feedbackMiss: 'Biotic factors are living things: Earthworms and Bees. Abiotic factors are non-living: Rainfall, Sunlight, Soil pH, and Air temperature.',
  },

  // ── Q4b: Calculate mean soil pH (2 marks) ──
  q4_b: {
    marks: 2,
    exemplar: 'Mean = (6.8 + 7.0 + 6.9 + 7.1 + 6.7 + 7.0) ÷ 6 = 41.5 ÷ 6 = 6.92 (to three significant figures).',
    keyConcepts: ['6.92', 'calculation of mean'],
    keywords: ['6.92', '6.9166', 'mean', 'average', 'divide', 'sum'],
    feedbackHit: 'Correct mean calculated to three significant figures.',
    feedbackMiss: 'Add all six soil pH values: 6.8 + 7.0 + 6.9 + 7.1 + 6.7 + 7.0 = 41.5. Divide by 6: 41.5 ÷ 6 = 6.9167, which rounds to 6.92 to 3 significant figures.',
  },

  // ── Q4c: Bar chart (5 marks) ──
  q4_c: {
    marks: 5,
    exemplar: 'Y-axis labelled "(average) soil pH". X-axis labelled "colour (of flower)". Equal intervals on y-axis starting at zero. Two bars correctly labelled and plotted. All three bars correctly labelled and plotted (including purple at ~6.92).',
    keyConcepts: [
      'y axis labelled average soil pH',
      'x axis labelled colour of flower',
      'equal intervals on y axis starting at zero',
      'bars correctly labelled and plotted',
    ],
    keywords: ['y axis', 'x axis', 'average', 'soil pH', 'colour', 'flower', 'bar chart', 'intervals'],
    feedbackHit: 'Bar chart correctly drawn with both axes labelled, equal intervals, and all bars plotted.',
    feedbackMiss: 'The y-axis should be labelled "Average soil pH" (starting at 0 with equal intervals). The x-axis should show "Colour of flower" with the three categories. Each bar should represent the mean soil pH for that colour, including purple at approximately 6.92.',
  },

  // ── Q4d: Type of data (1 mark) ──
  q4_d: {
    marks: 1,
    exemplar: 'The data on the x-axis is categorical data (or qualitative data, or discrete data, or colour is not continuous).',
    keyConcepts: ['categorical data or qualitative data or discrete data or colour not continuous'],
    keywords: ['categorical', 'qualitative', 'discrete', 'not continuous'],
    feedbackHit: 'Correct — flower colour data is categorical/qualitative.',
    feedbackMiss: 'Flower colour (pink, purple, white) is categorical/qualitative data — it belongs to named categories rather than a numerical scale.',
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
    exemplar: 'White morning glory identified. White flowers are found across a much wider range of soil pH (or do not change colour with pH, unlike the other colours) — this suggests they are a different species.',
    keyConcepts: [
      'white morning glory identified',
      'white flowers found in a wider range of soil pH or does not change colour at different pH',
    ],
    keywords: ['white', 'range', 'soil pH', 'different species', 'colour', 'wide'],
    feedbackHit: 'Correct identification of white as potentially different species with evidence from dot plot.',
    feedbackMiss: 'White morning glory flowers show a much wider spread of soil pH values compared to pink and purple, and they do not change colour with pH as the other varieties do. This suggests white may be a genetically different species that does not produce pH-sensitive pigment.',
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
    exemplar: 'IV: soil pH. DV: number of clover seedlings (or height of seedlings). Control variables (any two): same volume of water; same plant species (white clover) used; length of experiment; size of pot; number of seeds sown; mass of soil.',
    keyConcepts: [
      'IV: soil pH',
      'DV: number of clover seedlings or height of seedlings',
      'CV1: from list',
      'CV2: from list',
    ],
    keywords: ['independent', 'dependent', 'control', 'soil pH', 'seedlings', 'height', 'water', 'species', 'pot', 'mass'],
    feedbackHit: 'IV, DV, and two valid control variables correctly identified.',
    feedbackMiss: 'Independent variable (what you change): soil pH. Dependent variable (what you measure): number of clover seedlings. Control variables (keep the same): volume of water, same clover species, pot size, mass of soil, length of experiment.',
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
    feedbackMiss: 'pH 7 is the optimum because it produced both the highest number of seedlings (6) AND the greatest average height (about 4.4 cm). At pH 6 the seedlings were shorter on average, so pH 7 gives the best overall growth.',
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
    exemplar: 'IV: light intensity (e.g. 1000, 2000, 4000, 8000, 16000 lux). DV: dry biomass (g) of moss. CVs: volume/mass of soil, amount of moss spores, temperature, water added.\n\nHypothesis: If light intensity increases, moss biomass will increase up to a point and then level off, because more light increases the rate of photosynthesis until another factor (e.g. CO₂ or temperature) becomes limiting.\n\nEquipment: lamps of known brightness (or one lamp at measured distances), light meter, drying oven, electronic balance, identical trays of soil, timer.\n\nMethod: Set up 5 identical trays of soil (equal mass), add equal quantities of moss spores to each, expose each to a different light intensity (measured with the light meter), keep all other conditions the same, leave for the same time period, then dry each moss sample in the oven at ~70°C to constant mass and weigh the dry biomass.\n\nSufficient data: use at least 5 different light intensities and repeat each at least three times to calculate a mean.\n\nSafety: take care with hot lamps/drying oven (burns); wash hands after handling soil and spores.',
    keyConcepts: [
      'IV light intensity identified and range stated',
      'DV dry biomass identified with method of measurement',
      'two CVs identified from valid list',
      'testable hypothesis with scientific explanation',
      'equipment named and specific to this investigation',
      'method linked to IV with how to measure DV',
      'sufficient data: 5+ light intensities and repeats',
      'safety consideration linked to apparatus or organisms',
    ],
    keywords: ['light intensity', 'biomass', 'lamp', 'light meter', 'drying oven', 'spores', 'hypothesis', 'photosynthesis', 'limiting', 'repeat', 'safety'],
    feedbackHit: 'Excellent design — variables identified, hypothesis with science, method detailed and sufficient, safety noted.',
    feedbackMiss: 'A full Criterion B design should include: (1) IV = light intensity with specific values, DV = dry mass/biomass with measurement method, and 2 named CVs. (2) A hypothesis linking light to photosynthesis. (3) Equipment including lamps, light meter, drying oven, balance. (4) Step-by-step method showing how to vary light intensity, measure biomass, and collect sufficient data. (5) A safety precaution.',
  },

  // ── Q7a: Ecosystem services match_drag_drop (1 mark) ──
  q7_a: {
    marks: 1,
    exemplar: 'Products → Drinking water; Regulation → Water filtration; Cultural → Educational visits; Support → Habitat formation.',
    keyConcepts: [
      'Products → Drinking water',
      'Regulation → Water filtration',
      'Cultural → Educational visits',
      'Support → Habitat formation',
    ],
    keywords: ['products', 'regulation', 'cultural', 'support', 'drinking water', 'filtration', 'educational', 'habitat'],
    feedbackHit: 'All four ecosystem services correctly matched.',
    feedbackMiss: 'Products = Drinking water (a resource taken from the wetland); Regulation = Water filtration (the wetland cleans water); Cultural = Educational visits (non-material benefit); Support = Habitat formation (underpins all other services).',
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
    feedbackMiss: 'Nutrient cycling breaks down dead organic material and returns minerals to the soil and water. This increases nutrient availability, which supports plant growth and thus benefits all organisms and other ecosystem services (food production, habitat quality, biodiversity).',
  },

  // ── Q7c: Draining wetlands and nitrogen cycle (6 marks) ──
  q7_c: {
    marks: 6,
    exemplar: 'Draining wetlands disturbs the nitrogen cycle: (1) fewer plants take up fewer nitrates from the soil; (2) exposed (aerated) soils let decomposers and nitrifying bacteria release stored nitrogen faster; (3) denitrifying bacteria return more nitrogen gas to the atmosphere, or nitrates wash out (leach) into rivers. Explanatory points (any 3): fewer plants → less nitrogen stored in living things; ploughing/burning releases stored nitrogen; excess nitrates leach into waterways causing eutrophication; drier conditions change which bacteria dominate.',
    keyConcepts: [
      'fewer plants take up fewer nitrates',
      'less nitrogen stored in living organisms',
      'exposed soils release stored nitrogen faster',
      'nitrates leach into waterways or cause eutrophication',
      'denitrifying bacteria return nitrogen gas to atmosphere',
      'ploughing or burning releases stored nitrogen',
    ],
    keywords: ['nitrogen', 'nitrates', 'plants', 'bacteria', 'denitrifying', 'nitrifying', 'leaching', 'eutrophication', 'atmosphere', 'decomposers'],
    feedbackHit: 'Strong discussion linking wetland drainage to specific nitrogen-cycle pathways.',
    feedbackMiss: 'Draining wetlands disrupts the nitrogen cycle: (1) Fewer wetland plants take up fewer nitrates and store less nitrogen. (2) Exposing the soil to air speeds up decomposers and nitrifying bacteria, releasing stored nitrogen. (3) Excess nitrates leach into rivers (eutrophication) and denitrifying bacteria return more nitrogen gas to the atmosphere.',
  },

  // ── Q7d: Other environmental consequence (1 mark) ──
  q7_d: {
    marks: 1,
    exemplar: 'Any one from: reduction in biodiversity; increased flooding (loss of natural water storage); soil degradation or erosion; habitat destruction or forced migration; loss of water filtration.',
    keyConcepts: [
      'reduction in biodiversity or habitat destruction or soil degradation or increased flooding or loss of water filtration',
    ],
    keywords: ['biodiversity', 'flooding', 'soil erosion', 'habitat', 'migration', 'species loss', 'filtration'],
    feedbackHit: 'Valid environmental consequence of draining wetlands identified.',
    feedbackMiss: 'Other environmental consequences include: loss of biodiversity (species lose their habitat), increased flooding (wetlands no longer store water), soil erosion, and reduced natural water filtration.',
  },

  // ── Q8 (single essay task, 16 marks) — Criterion D rubric ──
  q8_: {
    marks: 16,
    exemplar: 'Reasons to restore reefs (2): provide habitat/nursery for fish (food and fisheries); protect coastlines from storms and erosion; protect/promote/increase biodiversity; tourism income.\n\nScientific explanation of planning (4): rubble must be stabilised so new coral can attach; algae and predators must be removed; healthiest/most heat-tolerant corals selected; timing of transplanting matters (spawning season, water temperature); conditions must be optimised so transplanted coral survives.\n\nEnvironmental consequences for 2 methods (4): natural recovery — no disturbance, low impact but slow; coral gardening — nursery structures and diver activity can disturb the seabed; larval seeding — tanks on land use energy, cooled transport has a carbon cost.\n\nEconomic considerations for 2 methods (4): larval seeding — cost of tanks, cooled transport and equipment, but recovers fastest (5 years); coral gardening — cost of nurseries and diver time; natural recovery — lowest ongoing cost but takes longest (12 years).\n\nConcluding appraisal (2): e.g. larval seeding is best because it recovers fastest and can plant the most corals with equipment, despite higher initial cost — OR natural recovery is best where reefs nearby are healthy and budgets are low.',
    keyConcepts: [
      'two reasons to restore coral reefs',
      'scientific explanation of why planning is important',
      'environmental consequence for one method',
      'environmental consequence for a different method',
      'economic consideration for one method',
      'economic consideration for a different method',
      'concluding opinion stated',
      'concluding appraisal with specific detail or justification',
    ],
    keywords: [
      'biodiversity', 'habitats', 'fisheries', 'coastal protection', 'planning', 'rubble', 'algae', 'larvae', 'fragments',
      'natural recovery', 'coral gardening', 'larval seeding',
      'environmental', 'carbon', 'transport', 'disturbance',
      'cost', 'equipment', 'nursery', 'economic',
      'concluding', 'best method',
    ],
    feedbackHit: 'Excellent evaluation — reasons, science of planning, environmental and economic consequences for two methods, and a justified conclusion.',
    feedbackMiss: 'A full Q8 answer should: (1) Give 2 reasons to restore reefs. (2) Explain the science behind why planning matters (stabilising rubble, removing algae, timing, heat tolerance). (3) Compare environmental effects of 2 methods (e.g. diver disturbance vs carbon from cooled transport). (4) Compare economic factors for 2 methods (e.g. nursery cost vs tank/equipment cost). (5) Give a concluding opinion with a specific justified reason.',
  },
}
