import 'server-only'

export type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

export type MCQEntry = {
  type: 'mcq'
  correct: number
}

export type MSRecord = MSEntry | MCQEntry

// Mark scheme: Biology May 2025
// Criterion column: A = Criterion A, B = Criterion B, C = Criterion C, D = Criterion D

export const MS: Record<string, MSRecord> = {

  // ── Q1: Classification & Biological Molecules ──────────────────
  'q1_a': {
    marks: 1,
    exemplar: 'Virus',
    keyConcepts: ['virus', 'virus is not a kingdom'],
    keywords: ['virus'],
    feedbackHit: 'Correct — Virus is not one of the five kingdoms used to classify living things.',
    feedbackMiss: 'Virus is not classified as a kingdom. The five kingdoms are: Animals, Plants, Fungi, Bacteria (Monera) and Protists.',
  },

  'q1_b': {
    marks: 2,
    exemplar: 'Characteristic: Vertebral column (backbone / spinal cord / spine). Another class: Birds OR Amphibians OR Reptiles OR Fish.',
    keyConcepts: ['vertebral column', 'backbone', 'spinal cord', 'birds', 'reptiles', 'amphibians', 'fish', 'notochord', 'pharyngeal slits', 'post-anal tail'],
    keywords: ['vertebral', 'backbone', 'spine', 'notochord', 'birds', 'reptiles', 'amphibians', 'fish'],
    feedbackHit: 'Well done — you correctly identified a chordate characteristic and another class.',
    feedbackMiss: 'Chordates share characteristics such as a vertebral column/backbone. Other classes in phylum Chordata include Birds, Reptiles, Amphibians and Fish.',
  },

  'q1_c': {
    marks: 2,
    exemplar: 'Jaguar (Panthera onca) OR Tiger (Panthera tigris) OR Lion (Panthera leo). Justification: Snow leopard is Panthera uncia — same genus as Jaguar, Tiger and Lion. Members of the same genus are most closely related.',
    keyConcepts: ['jaguar', 'tiger', 'lion', 'panthera', 'same genus', 'most closely related'],
    keywords: ['panthera', 'genus', 'jaguar', 'tiger', 'lion', 'closely related'],
    feedbackHit: 'Correct — Snow leopards share the genus Panthera with jaguar, tiger and lion, making them most closely related.',
    feedbackMiss: 'Snow leopards (Panthera uncia) share the genus Panthera with jaguar, tiger and lion. Organisms in the same genus are most closely related. Do not score mp2 if an incorrect species is selected.',
  },

  'q1_d': {
    marks: 1,
    exemplar: 'Lion and Jaguar — their DNA sequences share 8 out of 10 bases in common.',
    keyConcepts: ['lion', 'jaguar', '8 out of 10', 'most bases in common', 'most similar DNA'],
    keywords: ['lion', 'jaguar', '8', 'similar', 'DNA', 'bases'],
    feedbackHit: 'Correct — Lion and Jaguar share 8/10 DNA bases, making them most closely related.',
    feedbackMiss: 'Compare each pair: Lion vs Jaguar share 8/10 bases (most similar). Tiger shares fewer bases with either.',
  },

  'q1_e': {
    marks: 2,
    exemplar: 'Natural selection OR speciation OR survival of the fittest. Any one mechanism from: random mutations, sexual reproduction, meiosis.',
    keyConcepts: ['mutation', 'natural selection', 'speciation', 'random mutations', 'sexual reproduction', 'meiosis', 'evolution'],
    keywords: ['mutation', 'natural selection', 'speciation', 'evolution', 'random', 'sexual reproduction', 'meiosis'],
    feedbackHit: 'Good — you identified a mechanism by which DNA sequences change over time.',
    feedbackMiss: 'DNA sequences change over time due to mutations (random changes in DNA base sequences). These are passed on through reproduction. Natural selection/speciation leads to different species having different sequences. Do not accept "evolution" alone — a mechanism is needed.',
  },

  'q1_f': {
    marks: 1,
    exemplar: 'Amino acids.',
    keyConcepts: ['amino acids', 'amino acid'],
    keywords: ['amino acid', 'amino'],
    feedbackHit: 'Correct — amino acids are the building blocks of proteins.',
    feedbackMiss: 'Proteins are polymers made from monomers called amino acids. Accept also: ribosomes or rough endoplasmic reticulum (where they are assembled, if stated clearly).',
  },

  'q1_g': {
    marks: 2,
    exemplar: 'Glucagon OR Insulin. Action: Glucagon raises blood sugar level OR Insulin lowers blood sugar level.',
    keyConcepts: ['glucagon', 'insulin', 'raises blood sugar', 'lowers blood sugar', 'increases blood glucose', 'decreases blood glucose'],
    keywords: ['glucagon', 'insulin', 'blood sugar', 'blood glucose', 'raises', 'lowers', 'increases', 'decreases'],
    feedbackHit: 'Correct — you identified the hormone and described its action on blood sugar.',
    feedbackMiss: 'Hormones that affect blood sugar include: Insulin (lowers blood glucose by stimulating cells to take up glucose) and Glucagon (raises blood glucose by stimulating glycogen breakdown in the liver). Accept adrenalin/cortisol/growth hormone/thyroxine if correct action is given.',
  },

  'q1_h': {
    marks: 1,
    exemplar: 'Homeostasis.',
    keyConcepts: ['homeostasis'],
    keywords: ['homeostasis'],
    feedbackHit: 'Correct — homeostasis is the maintenance of a constant internal environment.',
    feedbackMiss: 'The process of maintaining body conditions (temperature, blood sugar, water balance) within a narrow range is called homeostasis.',
  },

  // ── Q2: Gas Exchange & Blood ──────────────────────────────────
  'q2_a': {
    marks: 2,
    exemplar: 'Oxygen moves from a high concentration in the alveoli to a low concentration in the blood (down a concentration gradient). It passes through the thin alveolar membrane / wall / cell / capillary.',
    keyConcepts: ['high concentration in alveoli', 'low concentration in blood', 'concentration gradient', 'alveolar membrane', 'diffusion'],
    keywords: ['concentration gradient', 'high concentration', 'low concentration', 'alveolar', 'membrane', 'diffusion', 'thin wall'],
    feedbackHit: 'Well done — you explained diffusion from alveoli to blood correctly.',
    feedbackMiss: 'Oxygen diffuses from HIGH concentration in alveoli to LOW concentration in the blood — this is called a concentration gradient. It passes through the thin alveolar membrane/wall/capillary. Do not accept red blood cell (that is transport, not diffusion).',
  },

  'q2_b': {
    marks: 2,
    exemplar: 'Oxygen is transported by red blood cells / bound to haemoglobin. It travels through the circulatory system / blood vessels / arteries / capillaries to the body cells.',
    keyConcepts: ['red blood cells', 'haemoglobin', 'oxyhaemoglobin', 'circulatory system', 'blood vessels', 'arteries', 'capillaries'],
    keywords: ['red blood cell', 'haemoglobin', 'oxyhaemoglobin', 'blood vessel', 'artery', 'capillary', 'circulatory'],
    feedbackHit: 'Correct — oxygen is carried by haemoglobin in red blood cells through blood vessels.',
    feedbackMiss: 'Oxygen binds to haemoglobin in red blood cells (forming oxyhaemoglobin) and is transported through the circulatory system (blood vessels/arteries/capillaries) to body cells/tissues.',
  },

  'q2_c': {
    marks: 5,
    exemplar: 'During exercise (3–10 min): Pulse rate increased (e.g. from ~75 to ~120 beats/min) AND breathing rate increased (e.g. from ~20 to ~40 breaths/min). This is because muscles require more energy for movement, so cellular respiration rate increases. More oxygen is needed and more CO₂ is produced. The body responds by increasing heart rate (to deliver more oxygen/glucose to muscles faster) and breathing rate (to take in more oxygen and remove CO₂). This supplies cells/muscles/tissues with more O₂ OR glucose faster, and removes CO₂ to the lungs faster.',
    keyConcepts: ['pulse rate increased', 'breathing rate increased', 'exercise', 'more energy', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'heart rate', 'glucose to muscles', 'remove CO2'],
    keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase', 'faster'],
    feedbackHit: 'Excellent — you explained the physiological changes during exercise with data reference.',
    feedbackMiss: 'During exercise (3–10 min): Both pulse rate and breathing rate increase. This is because muscles need more energy → cellular respiration increases → more O₂ consumed and more CO₂ produced → heart beats faster to deliver O₂/glucose to muscles → breathing rate increases to inhale more O₂ and exhale CO₂. Must use at least one correct data point from the graph. Accept ATP for energy.',
  },

  'q2_d': {
    marks: 2,
    exemplar: 'Victor. Justification: Victor has the highest number of white blood cells (9500 per mm³). White blood cells fight infection.',
    keyConcepts: ['victor', 'highest white blood cells', 'white blood cells fight infection', '9500'],
    keywords: ['victor', 'white blood cell', 'highest', '9500', 'infection', 'immune'],
    feedbackHit: 'Correct — Victor has the most white blood cells and would best resist viral infection.',
    feedbackMiss: 'Victor has the highest white blood cell count (9500 per mm³). White blood cells (leukocytes) are part of the immune system and fight infections including viruses.',
  },

  'q2_e': {
    marks: 2,
    exemplar: 'Any two from: same age / same fitness level / same stress levels / same medical history / same medication / same ethnicity.',
    keyConcepts: ['age', 'fitness', 'stress', 'medical history', 'medication', 'ethnicity', 'diet'],
    keywords: ['age', 'fitness', 'stress', 'medication', 'medical history', 'ethnicity', 'diet'],
    feedbackHit: 'Good — you identified additional factors that would improve validity.',
    feedbackMiss: 'To increase validity, participants should also be matched for: age, fitness level, stress levels, medical history, medication taken, or ethnicity. Do NOT accept sex/health status/white blood cell count — these are already provided or the variables being measured.',
  },

  // ── Q3: Seed Germination ──────────────────────────────────────
  'q3_a': {
    marks: 1,
    exemplar: 'Species A (7 seeds germinated at 75% light intensity).',
    keyConcepts: ['species a', 'species A'],
    keywords: ['species A', 'A'],
    feedbackHit: 'Correct — Species A had 7 seeds germinated at 75%, the highest of the three.',
    feedbackMiss: 'At 75% light intensity: A=7, B=6, C=6. Species A had the highest germination.',
  },

  'q3_b': {
    marks: 1,
    exemplar: 'Used as a control experiment / to see if the plants germinated when no light was present / to establish a baseline.',
    keyConcepts: ['control experiment', 'control', 'no light present', 'baseline', 'see if plants germinate without light'],
    keywords: ['control', 'baseline', 'no light', 'compare', 'zero'],
    feedbackHit: 'Correct — 0% light is the control to show baseline germination without light.',
    feedbackMiss: 'The 0% light intensity condition is used as a control experiment, to establish a baseline and see whether seeds can germinate without any light.',
  },

  'q3_c': {
    marks: 2,
    exemplar: 'Similarity: Both species had seeds that germinated / increasing light intensity increased germination in both A and B / maximum germination at 100% for both. Difference: Species A had more seeds germinated than B at all light intensities / at 0% light intensity species A had 1 germination but species B had 0 / species B cannot germinate without light.',
    keyConcepts: ['both had seeds germinate', 'increasing light increases germination', 'maximum at 100%', 'species A more than B', 'species B cannot germinate without light', '0% light species B had 0'],
    keywords: ['both', 'similar', 'increase', 'difference', 'species A', 'species B', '0%', 'more', 'germinate'],
    feedbackHit: 'Well done — you identified a valid similarity and difference using the data.',
    feedbackMiss: 'Similarity examples: Both species germinated, both increase with light intensity, both have maximum at 100%. Difference examples: A always had more than B; at 0% A=1 but B=0; species B cannot germinate without light.',
  },

  'q3_d': {
    marks: 1,
    exemplar: 'Species C does not require light to germinate / light intensity does not affect germination for species C.',
    keyConcepts: ['does not require light', 'light does not affect', 'shade plant', 'no light needed'],
    keywords: ['does not need light', 'light independent', 'shade', 'no light required', 'independent of light'],
    feedbackHit: 'Correct — Species C germinates regardless of light intensity.',
    feedbackMiss: 'Species C shows roughly the same germination rate (~6) at all light intensities including 0%. This suggests it does not require light to germinate / light intensity does not affect its germination.',
  },

  'q3_e': {
    marks: 1,
    exemplar: 'To control (all) other variables / so that other variables do not affect the results.',
    keyConcepts: ['control other variables', 'control variables', 'other variables do not affect results', 'fair test'],
    keywords: ['control', 'variable', 'fair test', 'other factors', 'standardise'],
    feedbackHit: 'Correct — the germination chamber controls all other variables.',
    feedbackMiss: 'The germination chamber controls other variables (temperature, humidity, CO₂) so they do not affect the results, making the experiment a fair test. Accept naming specific controlled variables.',
  },

  'q3_f': {
    marks: 2,
    exemplar: 'Species Y: 90% light intensity. Species Z: 80% light intensity.',
    keyConcepts: ['species Y 90%', 'species Z 80%', '90 percent', '80 percent'],
    keywords: ['90', '80', 'species Y', 'species Z'],
    feedbackHit: 'Correct — Species Y reaches maximum at 90% and Species Z at 80%.',
    feedbackMiss: 'From the graph: Species Y reaches its maximum germination at 90% light intensity. Species Z reaches its maximum at 80%. Award 1 mark if both values correct but the unit % is missing.',
  },

  'q3_g': {
    marks: 2,
    exemplar: '85% light intensity allows maximum germination for Species Z / Species Z has its optimum below 85%. For Species Y, 85% is below the optimum (between 80 and 90%) so does not guarantee maximum germination / 85% was not tested for Species Y.',
    keyConcepts: ['85% allows maximum for Z', 'species Z optimum below 85%', 'species Y optimum between 80 and 90', '85% not tested for Y', 'energy cost reduction'],
    keywords: ['85', 'species Y', 'species Z', 'optimum', 'maximum', 'supported', 'not supported', 'between 80 and 90'],
    feedbackHit: 'Good analysis — you referenced specific data values and considered both species.',
    feedbackMiss: '85% light intensity supports maximum germination for Species Z (optimum=80%, so 85% is above optimum — full germination). For Species Y, the optimum is between 80 and 90%, so 85% may or may not give maximum germination — this part is not fully supported. Accept 85% as an acceptable average if the link to energy reduction is clear.',
  },

  // ── Q4: Photosynthesis ────────────────────────────────────────
  'q4_a': {
    marks: 1,
    exemplar: 'Carbon dioxide + Water → (light energy) → Oxygen + Glucose. All four placed correctly.',
    keyConcepts: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'reactants', 'products'],
    keywords: ['carbon dioxide', 'water', 'oxygen', 'glucose'],
    feedbackHit: 'Correct — you placed all four substances in the correct positions in the photosynthesis equation.',
    feedbackMiss: 'Photosynthesis equation: Carbon dioxide + Water → (light) → Oxygen + Glucose. Reactants (left): CO₂ and H₂O. Products (right): O₂ and C₆H₁₂O₆ (glucose).',
  },

  'q4_b': {
    marks: 4,
    exemplar: 'Independent variable: Light intensity. Dependent variable: Length/height of plant stem (not just "plant growth"). Control variables (any two): temperature of container / same type of plant / same growth medium / same humidity / same volume of water added.',
    keyConcepts: ['independent variable light intensity', 'dependent variable stem length', 'control temperature', 'control same plant type', 'control same growth medium', 'control humidity', 'control water volume'],
    keywords: ['independent', 'light intensity', 'dependent', 'stem length', 'stem height', 'control', 'temperature', 'same plant', 'same water', 'humidity', 'growth medium'],
    feedbackHit: 'Well done — you correctly identified all four variables.',
    feedbackMiss: 'Independent variable = what you CHANGE = light intensity. Dependent variable = what you MEASURE = length/height of plant stem. Control variables = what you KEEP THE SAME: temperature of container, same type of plant, same growth medium, same humidity, same volume of water. Do NOT accept "plant growth" alone for DV — must specify stem length/height.',
  },

  'q4_c': {
    marks: 2,
    exemplar: 'Increasing light intensity increases the rate of photosynthesis, which produces more glucose/sugar/food. This glucose is used for growth (cell division/elongation).',
    keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'more energy', 'cell division'],
    keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'energy', 'cell division'],
    feedbackHit: 'Correct — you linked light intensity → photosynthesis → glucose → growth.',
    feedbackMiss: 'More light → faster photosynthesis → more glucose produced → more glucose available for growth (cell division and elongation). Accept sugar/food for glucose; do not accept energy alone.',
  },

  'q4_d': {
    marks: 2,
    exemplar: 'Measurement at 90%: 45 mm. Average: (32 + 38 + 45 + 45) ÷ 4 = 160 ÷ 4 = 40 mm. (Accept ECF if measurement wrong but average correctly calculated.)',
    keyConcepts: ['45mm at 90%', '40mm average', 'average', 'measurement'],
    keywords: ['45', '40', 'average', 'measurement', 'mm'],
    feedbackHit: 'Correct — 45mm at 90% and average of 40mm.',
    feedbackMiss: 'At 90% light intensity: 45mm. Average of all four readings: (32+38+45+45)÷4 = 40mm. Accept ECF (error carried forward) if the 90% reading is wrong but the average is correctly calculated from their value.',
  },

  'q4_e': {
    marks: 1,
    exemplar: 'mm (millimetres) or cm (centimetres).',
    keyConcepts: ['mm', 'millimetres', 'cm', 'centimetres'],
    keywords: ['mm', 'cm', 'millimetre', 'centimetre', 'length', 'units'],
    feedbackHit: 'Correct — mm or cm are the appropriate units for measuring stem length.',
    feedbackMiss: 'The appropriate units for measuring plant stem length are mm (millimetres) or cm (centimetres).',
  },

  'q4_f': {
    marks: 1,
    exemplar: 'Maximum growth achieved at 90% (or between 60% and 90%). At this point light is no longer a limiting factor / another factor (e.g. CO₂, temperature) is now limiting.',
    keyConcepts: ['90 percent', '60 to 90 percent', 'no longer a limiting factor', 'another limiting factor', 'light not limiting'],
    keywords: ['90', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'],
    feedbackHit: 'Correct — growth plateaued because light was no longer the limiting factor.',
    feedbackMiss: 'Growth stopped increasing at 90% (or between 60–90%). This is because light is no longer the limiting factor — something else (e.g. CO₂ concentration, temperature, water) is now limiting the rate of photosynthesis.',
  },

  'q4_g': {
    marks: 1,
    exemplar: 'Any reasonable suggestion: increase temperature (to optimum) / increase carbon dioxide concentration / add fertiliser or minerals to soil / grow for a longer time.',
    keyConcepts: ['increase temperature', 'increase carbon dioxide', 'add fertiliser', 'longer time', 'more minerals'],
    keywords: ['temperature', 'carbon dioxide', 'CO2', 'fertiliser', 'minerals', 'longer', 'time'],
    feedbackHit: 'Good — you identified another factor that could increase growth.',
    feedbackMiss: 'To increase stem length further, the student could: increase temperature to optimum, increase CO₂ concentration, add fertiliser/minerals to the soil, or grow the plants for a longer period.',
  },

  'q4_h': {
    marks: 2,
    exemplar: 'The results from 30% to 90% light intensity support the hypothesis (stem length increases from 32mm to 45mm). Beyond 90% (at 100%) the results do not support the hypothesis / plant growth became constant above 90%.',
    keyConcepts: ['data from 30 to 90 supports', 'stem length increases', 'beyond 90 does not support', 'growth constant above 90'],
    keywords: ['support', 'does not support', '30', '90', '100', 'increase', 'constant', 'plateau', 'data'],
    feedbackHit: 'Correct — you referenced data and identified where the hypothesis is and is not supported.',
    feedbackMiss: 'The data PARTIALLY supports the hypothesis. From 30% to 90%: stem length increases (32mm → 45mm) — this SUPPORTS the prediction. But from 90% to 100%: growth stays constant at 45mm — this does NOT support the prediction. Must quote specific values.',
  },

  // ── Q5: Temperature Effect ─────────────────────────────────────
  'q5_a': {
    marks: 1,
    exemplar: 'Temperature (in °C).',
    keyConcepts: ['temperature'],
    keywords: ['temperature'],
    feedbackHit: 'Correct — the independent variable is temperature.',
    feedbackMiss: 'The independent variable is the one you CHANGE — in this investigation it is temperature. Do not accept "to control temperature" — that would make it a controlled variable.',
  },

  'q5_b': {
    marks: 3,
    exemplar: 'A correctly labelled graph with: x-axis = Temperature / °C, y-axis = Increase in average length of plant stems after 15 days / mm. Even scale on both axes. Four points plotted correctly: (30,9), (35,21), (40,42), (45,43), (50,2).',
    keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'],
    keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'],
    feedbackHit: 'Well done — your graph has correct labels, units, scale and plotted points.',
    feedbackMiss: 'Graph requirements: (1) x-axis labelled "Temperature / °C" and y-axis labelled "Increase in (average) length of plant stems after 15 days / mm". (2) Even increments on both axes. (3) All 5 points plotted correctly: (30,9), (35,21), (40,42), (45,43), (50,2). Accept degree symbol or word.',
  },

  'q5_c': {
    marks: 5,
    exemplar: 'As temperature increases from 30°C to 40°C (or 45°C), plant growth increases (9mm → 42mm → 43mm). This is because higher temperature increases the rate of photosynthesis, producing more glucose for growth. Plant growth is reduced beyond 45°C (50°C gives only 2mm) because enzymes denature at high temperatures / stomata close / photosynthesis or transpiration or gas exchange stops, so plant growth stops.',
    keyConcepts: ['growth increases up to 40-45 degrees', 'photosynthesis increases', 'more glucose', 'growth stops beyond 45 degrees', 'enzymes denature', 'stomata close', 'photosynthesis stops', 'optimum temperature'],
    keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '40', '45', '50', 'growth stops'],
    feedbackHit: 'Excellent — you described the trend, explained the increase using photosynthesis, and explained the decrease using enzyme denaturation.',
    feedbackMiss: 'As temperature increases 30→45°C: stem growth increases (9→43mm) because photosynthesis rate increases → more glucose for growth. Beyond 45°C (50°C→2mm): enzymes denature (lose their shape) so photosynthesis stops; OR stomata close stopping gas exchange; OR transpiration stops. The optimum temperature for plant growth is between 40–50°C.',
  },

  // ── Q6: Experimental Design ────────────────────────────────────
  'q6_a': {
    marks: 16,
    exemplar: 'A full experimental design should include: IV=soil pH (3.5–10.0 range), DV=plant growth (stem length in mm), controlled variables (temperature, water volume, plant species, light intensity). Equipment: pots/containers, ruler, pH solutions, identical plant seedlings. Method: water identical plants with different pH solutions, keep all other conditions same, measure stem length at regular intervals, repeat each pH condition at least 3 times. Safety: wear gloves with acidic/alkaline solutions.',
    keyConcepts: ['independent variable pH', 'dependent variable plant growth stem length', 'controlled temperature', 'controlled water', 'controlled plant type', 'equipment pots ruler solutions', 'method water plants', 'measure stem length', 'repeat each condition', 'safety gloves acid alkali'],
    keywords: ['pH', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'water', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves', 'acid', 'alkali', 'solutions', 'same plant'],
    feedbackHit: 'Excellent experimental design — you included all required elements.',
    feedbackMiss: 'Required elements: IV=pH of solution/soil, DV=plant growth (stem length/height in mm), 2 CVs (temperature, water volume, plant species, light intensity), equipment (pots, ruler, pH solutions, seedlings), method (vary pH solutions, keep other factors constant, measure growth regularly, repeat 3+ times per pH), safety (gloves for acidic/alkaline solutions).',
  },

  // ── Q7: Animal Tracking / Bird Banding ────────────────────────
  'q7_a': {
    marks: 1,
    exemplar: 'Grassland birds.',
    keyConcepts: ['grassland birds', 'grassland'],
    keywords: ['grassland'],
    feedbackHit: 'Correct — Grassland birds showed the greatest population decline.',
    feedbackMiss: 'According to the graph, Grassland birds showed the greatest decline in population size between 1970 and 2019.',
  },

  'q7_b': {
    marks: 2,
    exemplar: 'Knowing migration routes allows scientists to identify which habitats/areas are critical for the birds. This information can be used to protect those areas or create protected corridors, preventing habitat destruction along migration routes.',
    keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'protected areas', 'corridors', 'habitat destruction'],
    keywords: ['habitat', 'protect', 'migration', 'route', 'corridor', 'conservation', 'stopover', 'breeding'],
    feedbackHit: 'Well done — you linked tracking data to conservation action.',
    feedbackMiss: 'Tracking migration data helps identify: critical habitats/stopover points, breeding grounds, wintering areas. This allows scientists to create/protect nature reserves along migration routes and lobby for habitat protection in key areas.',
  },

  'q7_c': {
    marks: 2,
    exemplar: 'Any two from: birds may have died / the bird may not have been caught again / people who found the band did not know how to return it / no mechanism for returning bands in 1902 / bands may have been lost or fallen off.',
    keyConcepts: ['birds died', 'bird not recaptured', 'people did not return band', 'no return mechanism', 'band lost', 'band fell off'],
    keywords: ['died', 'not caught', 'not returned', 'lost', 'fell off', 'no address', 'awareness', 'communication'],
    feedbackHit: 'Good — you suggested two realistic reasons for low band returns.',
    feedbackMiss: 'Reasons few bands were returned: (1) The birds may have died before being found/recaptured; (2) People who found the band may not have known how to return it; (3) Communication methods were poor in 1902; (4) The band may have been lost or fallen off.',
  },

  'q7_d': {
    marks: 2,
    exemplar: 'Scientists could repeat the study at different times of year / band birds from multiple locations / use a larger sample size / use different species. This would make the data more representative/reliable.',
    keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'different species', 'reliable', 'representative'],
    keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative', 'replicate'],
    feedbackHit: 'Correct — you identified a strategy to improve data reliability.',
    feedbackMiss: 'To improve reliability: band birds at different times of year (seasons), from multiple locations, band more birds (larger sample size), repeat the study multiple times. This makes data more reliable and representative.',
  },

  'q7_e': {
    marks: 3,
    exemplar: 'Human activity causing decline: Habitat destruction (agriculture/urbanisation) / pesticide use / predation by domestic animals. Explanation: agriculture removes grassland habitat for nesting. This could be reduced by: creating protected grassland areas / reducing pesticide use / wildlife-friendly farming practices.',
    keyConcepts: ['habitat destruction', 'agriculture', 'pesticides', 'urbanisation', 'grassland removal', 'nesting sites lost', 'protected areas', 'reduce pesticides', 'wildlife farming'],
    keywords: ['habitat', 'agriculture', 'pesticide', 'urban', 'destruction', 'nesting', 'reduce', 'protect', 'conservation'],
    feedbackHit: 'Well done — you linked a human activity to the decline and proposed a solution.',
    feedbackMiss: 'Human activities causing grassland bird decline: habitat destruction by agriculture/urbanisation (removing nesting/feeding areas), pesticide use (killing insects = food source), predation by cats/domestic animals. Solutions: create protected reserves, reduce pesticides, promote wildlife-friendly farming, rewild agricultural land.',
  },

  // ── Q8: Technology in Animal Research ────────────────────────
  'q8_a': {
    marks: 1,
    exemplar: 'Radio tracking uses a radio receiver and has limited range (local) / requires the scientist to be nearby. Satellite tracking can track animals anywhere in the world / over much larger distances.',
    keyConcepts: ['radio limited range', 'satellite global range', 'radio requires nearby scientist', 'satellite anywhere in world'],
    keywords: ['range', 'global', 'local', 'distance', 'satellite', 'radio', 'receiver', 'anywhere', 'worldwide'],
    feedbackHit: 'Correct — you identified a key difference in range/coverage.',
    feedbackMiss: 'Radio tracking has a limited range and requires the scientist to be nearby with a receiver. Satellite tracking can track animals anywhere in the world over vast distances.',
  },

  'q8_b': {
    marks: 2,
    exemplar: 'Advantage: data collected without disturbing/following the animal / continuous data 24/7 / data from inaccessible habitats. Disadvantage: the tracking device may affect animal behaviour / cause injury or discomfort / battery may run out / expensive.',
    keyConcepts: ['advantage non-disturbing', 'continuous data', 'inaccessible habitat', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'],
    keywords: ['advantage', 'disadvantage', 'disturb', 'behaviour', 'injury', 'expensive', 'battery', 'continuous', 'habitat'],
    feedbackHit: 'Good — you identified a valid advantage and disadvantage.',
    feedbackMiss: 'Advantages: data collected without disturbing the animal, continuous tracking, data from remote/inaccessible areas. Disadvantages: device may alter behaviour, cause physical harm/injury, device may run out of battery, expensive to deploy and maintain.',
  },

  'q8_c': {
    marks: 4,
    exemplar: 'The tracking data showing bears near human activity could be used to: (1) Identify high-risk conflict zones where bears and humans overlap. (2) Create wildlife corridors or restricted human zones in key bear areas. (3) Educate local communities about bear behaviour and safe practices. (4) Inform park management — e.g. restrict human access in critical bear habitats.',
    keyConcepts: ['identify conflict zones', 'wildlife corridors', 'restrict human access', 'educate communities', 'park management', 'habitat protection', 'reduce human-bear conflict'],
    keywords: ['conflict', 'corridor', 'restrict', 'educate', 'community', 'management', 'habitat', 'protect', 'overlap', 'area'],
    feedbackHit: 'Excellent — you proposed multiple specific conservation actions using the tracking data.',
    feedbackMiss: 'The data can inform: (1) Maps of conflict zones where bears and humans overlap → restrict human activity. (2) Corridor design connecting bear habitats. (3) Education campaigns for communities near bear zones. (4) Policy decisions about land use near bear territories.',
  },

  'q8_d': {
    marks: 6,
    exemplar: 'Benefits: technology allows non-invasive continuous monitoring; satellite tracking covers global areas; long-term data reveals migration and population trends; helps identify threats and conservation needs. Limitations: devices may alter behaviour; expensive limiting use in developing countries; technical failures cause data gaps; data requires expert interpretation; fitting devices may cause injury. Overall evaluation: benefits outweigh limitations as technology provides data impossible to collect otherwise, but device welfare and cost must be addressed.',
    keyConcepts: ['non-invasive monitoring', 'continuous data', 'global coverage', 'long-term trends', 'identifies threats', 'alters behaviour', 'expensive', 'data gaps', 'expert interpretation', 'injury', 'welfare', 'benefits outweigh limitations'],
    keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'global', 'trend', 'population', 'migration', 'welfare', 'invasive', 'data'],
    feedbackHit: 'Excellent evaluation — you balanced benefits and limitations with examples and reached a conclusion.',
    feedbackMiss: 'Benefits: non-invasive data collection, continuous monitoring, global coverage, identification of migration routes/population trends, informs conservation decisions. Limitations: devices affect behaviour/cause injury, high cost, technical failures, data requires expert analysis, ethical concerns. Conclusion must weigh both sides.',
  },

  'q8_e': {
    marks: 3,
    exemplar: 'Scientists should communicate findings to non-scientists to: (1) Increase public awareness and understanding of conservation issues. (2) Gain community support for conservation actions (e.g. reducing habitat destruction). (3) Secure funding and government policy support. (4) Encourage public participation in data collection (citizen science).',
    keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science', 'conservation action', 'informed decisions'],
    keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'action', 'conservation', 'understand', 'inform'],
    feedbackHit: 'Well done — you explained why science communication matters for conservation.',
    feedbackMiss: 'Scientists should communicate to non-scientists to: raise public awareness of conservation issues, gain community/public support for conservation actions, inform policy makers/government decisions, secure funding, enable citizen science participation, and ensure communities who live near the animals understand the importance of conservation.',
  },
}
