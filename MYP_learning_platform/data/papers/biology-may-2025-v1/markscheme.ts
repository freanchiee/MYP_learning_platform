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

// Mark scheme: Biology May 2025 — VARIANT v1. All answers recomputed for the new data.

export const MS: Record<string, MSRecord> = {

  // ── Q1: Classification & Biological Molecules ──
  'q1_a': {
    marks: 1,
    exemplar: 'Mineral',
    keyConcepts: ['mineral', 'mineral is not a kingdom'],
    keywords: ['mineral'],
    feedbackHit: 'Correct — Mineral is not one of the kingdoms used to classify living things.',
    feedbackMiss: 'Minerals are non-living. The five kingdoms are: Animals, Plants, Fungi, Bacteria (Monera) and Protists.',
  },
  'q1_b': {
    marks: 2,
    exemplar: 'Characteristic: Vertebral column (backbone / spinal cord / spine). Another class: Birds OR Amphibians OR Reptiles OR Fish.',
    keyConcepts: ['vertebral column', 'backbone', 'spinal cord', 'birds', 'reptiles', 'amphibians', 'fish'],
    keywords: ['vertebral', 'backbone', 'spine', 'notochord', 'birds', 'reptiles', 'amphibians', 'fish'],
    feedbackHit: 'Well done — you identified a chordate characteristic and another class.',
    feedbackMiss: 'Chordates share characteristics such as a vertebral column/backbone. Other classes in phylum Chordata include Birds, Reptiles, Amphibians and Fish.',
  },
  'q1_c': {
    marks: 2,
    exemplar: 'Brown bear (Ursus arctos) OR Polar bear (Ursus maritimus) OR American black bear (Ursus americanus). Justification: Asiatic black bear is Ursus thibetanus — same genus (Ursus) as these three. Members of the same genus are most closely related.',
    keyConcepts: ['brown bear', 'polar bear', 'american black bear', 'ursus', 'same genus', 'most closely related'],
    keywords: ['ursus', 'genus', 'brown bear', 'polar bear', 'black bear', 'closely related'],
    feedbackHit: 'Correct — the Asiatic black bear shares the genus Ursus, making it most closely related to the other Ursus species.',
    feedbackMiss: 'Asiatic black bears (Ursus thibetanus) share the genus Ursus with brown, polar and American black bears. Organisms in the same genus are most closely related. Do not score mp2 if an incorrect species is selected.',
  },
  'q1_d': {
    marks: 1,
    exemplar: 'Brown bear and Polar bear — their DNA sequences share 8 out of 10 bases in common.',
    keyConcepts: ['brown bear', 'polar bear', '8 out of 10', 'most bases in common', 'most similar DNA'],
    keywords: ['brown bear', 'polar bear', '8', 'similar', 'DNA', 'bases'],
    feedbackHit: 'Correct — Brown bear and Polar bear share 8/10 DNA bases, making them most closely related.',
    feedbackMiss: 'Compare each pair: Brown vs Polar share 8/10 bases (most similar). Black bear shares fewer bases with either.',
  },
  'q1_e': {
    marks: 2,
    exemplar: 'Natural selection OR speciation OR survival of the fittest. Caused by one mechanism from: random mutations, sexual reproduction, meiosis.',
    keyConcepts: ['mutation', 'natural selection', 'speciation', 'random mutations', 'sexual reproduction', 'meiosis'],
    keywords: ['mutation', 'natural selection', 'speciation', 'evolution', 'random', 'meiosis'],
    feedbackHit: 'Good — you identified a mechanism by which DNA sequences change over time.',
    feedbackMiss: 'DNA sequences change over time due to mutations (random changes in DNA bases), passed on through reproduction. Natural selection/speciation leads to different species having different sequences. Do not accept "evolution" alone — a mechanism is needed.',
  },
  'q1_f': {
    marks: 1,
    exemplar: 'Amino acids.',
    keyConcepts: ['amino acids', 'amino acid'],
    keywords: ['amino acid', 'amino'],
    feedbackHit: 'Correct — amino acids are the building blocks of proteins.',
    feedbackMiss: 'Proteins are polymers made from monomers called amino acids.',
  },
  'q1_g': {
    marks: 2,
    exemplar: 'Thyroxine. Action: increases / raises the metabolic rate of body cells. (Accept adrenaline — increases heart rate / metabolic activity.)',
    keyConcepts: ['thyroxine', 'adrenaline', 'increases metabolic rate', 'raises metabolism'],
    keywords: ['thyroxine', 'adrenaline', 'metabolic rate', 'metabolism', 'increases', 'raises'],
    feedbackHit: 'Correct — you identified a hormone and described its action on metabolic rate.',
    feedbackMiss: 'Thyroxine (from the thyroid gland) raises the body\'s metabolic rate. Accept adrenaline (increases metabolic activity / heart rate) if a correct action is given.',
  },
  'q1_h': {
    marks: 1,
    exemplar: 'Homeostasis.',
    keyConcepts: ['homeostasis'],
    keywords: ['homeostasis'],
    feedbackHit: 'Correct — homeostasis is the maintenance of a constant internal environment.',
    feedbackMiss: 'Maintaining body conditions (temperature, metabolic rate, water balance) within a narrow range is called homeostasis.',
  },

  // ── Q2: Gas Exchange & Blood ──
  'q2_a': {
    marks: 2,
    exemplar: 'Oxygen moves from a high concentration in the alveoli to a low concentration in the blood (down a concentration gradient). It passes through the thin alveolar membrane / wall / capillary.',
    keyConcepts: ['high concentration in alveoli', 'low concentration in blood', 'concentration gradient', 'alveolar membrane', 'diffusion'],
    keywords: ['concentration gradient', 'high concentration', 'low concentration', 'alveolar', 'membrane', 'diffusion', 'thin wall'],
    feedbackHit: 'Well done — you explained diffusion from alveoli to blood correctly.',
    feedbackMiss: 'Oxygen diffuses from HIGH concentration in alveoli to LOW concentration in the blood (a concentration gradient), through the thin alveolar membrane/wall. Do not accept red blood cell (that is transport, not diffusion).',
  },
  'q2_b': {
    marks: 2,
    exemplar: 'Oxygen is transported by red blood cells / bound to haemoglobin. It travels through the circulatory system / blood vessels / arteries / capillaries to the body cells.',
    keyConcepts: ['red blood cells', 'haemoglobin', 'oxyhaemoglobin', 'circulatory system', 'blood vessels', 'arteries', 'capillaries'],
    keywords: ['red blood cell', 'haemoglobin', 'oxyhaemoglobin', 'blood vessel', 'artery', 'capillary', 'circulatory'],
    feedbackHit: 'Correct — oxygen is carried by haemoglobin in red blood cells through blood vessels.',
    feedbackMiss: 'Oxygen binds to haemoglobin in red blood cells (forming oxyhaemoglobin) and is transported through the circulatory system (blood vessels/arteries/capillaries) to body cells.',
  },
  'q2_c': {
    marks: 5,
    exemplar: 'During cycling (2–8 min): Pulse rate increased (from ~72 to ~134 beats/min) AND breathing rate increased (from ~16 to ~38 breaths/min). Exercising muscles require more energy, so cellular respiration increases. More oxygen is needed and more CO₂ is produced. The body responds by increasing heart rate (to deliver more oxygen/glucose to muscles faster) and breathing rate (to take in more oxygen and remove CO₂ faster).',
    keyConcepts: ['pulse rate increased', 'breathing rate increased', 'exercise', 'more energy', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'heart rate', 'remove CO2'],
    keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase', 'faster', '72', '134'],
    feedbackHit: 'Excellent — you explained the physiological changes during exercise with data reference.',
    feedbackMiss: 'During cycling (2–8 min): both pulse and breathing rate increase. Muscles need more energy → respiration increases → more O₂ consumed and more CO₂ produced → heart beats faster to deliver O₂/glucose → breathing rate increases to inhale O₂ and exhale CO₂. Must use at least one correct data point (e.g. pulse ~72→~134).',
  },
  'q2_d': {
    marks: 2,
    exemplar: 'Priya. Justification: Priya has the highest number of white blood cells (10100 per mm³). White blood cells fight infection.',
    keyConcepts: ['priya', 'highest white blood cells', 'white blood cells fight infection', '10100'],
    keywords: ['priya', 'white blood cell', 'highest', '10100', 'infection', 'immune'],
    feedbackHit: 'Correct — Priya has the most white blood cells and would best resist viral infection.',
    feedbackMiss: 'Priya has the highest white blood cell count (10100 per mm³). White blood cells (leukocytes) fight infections including viruses.',
  },
  'q2_e': {
    marks: 2,
    exemplar: 'Any two from: same age / same fitness level / same stress levels / same medical history / same medication / same ethnicity / same diet.',
    keyConcepts: ['age', 'fitness', 'stress', 'medical history', 'medication', 'ethnicity', 'diet'],
    keywords: ['age', 'fitness', 'stress', 'medication', 'medical history', 'ethnicity', 'diet'],
    feedbackHit: 'Good — you identified additional factors that would improve validity.',
    feedbackMiss: 'To increase validity, participants should also be matched for: age, fitness level, stress levels, medical history, medication, ethnicity or diet. Do NOT accept sex (already controlled) or the cell counts being measured.',
  },

  // ── Q3: Seed Germination ──
  'q3_a': {
    marks: 1,
    exemplar: 'Seed type P (6 seeds germinated at 75% light intensity).',
    keyConcepts: ['seed type P', 'P'],
    keywords: ['seed type P', 'P'],
    feedbackHit: 'Correct — Seed type P had 6 seeds germinated at 75%, the highest of the three.',
    feedbackMiss: 'At 75% light intensity: P=6, Q=5, R=5. Seed type P had the highest germination.',
  },
  'q3_b': {
    marks: 1,
    exemplar: 'Used as a control experiment / to see if the seeds germinate when no light is present / to establish a baseline.',
    keyConcepts: ['control experiment', 'control', 'no light present', 'baseline'],
    keywords: ['control', 'baseline', 'no light', 'compare', 'zero'],
    feedbackHit: 'Correct — 0% light is the control to show baseline germination without light.',
    feedbackMiss: 'The 0% light condition is a control, to establish a baseline and see whether seeds germinate without any light.',
  },
  'q3_c': {
    marks: 2,
    exemplar: 'Similarity: Both seed types germinated / increasing light intensity increased germination in both P and Q / both had maximum germination at 100%. Difference: Seed type P had more germination than Q at every light intensity / at 0% light P had 1 germination but Q had 0 / Q cannot germinate without light.',
    keyConcepts: ['both germinated', 'increasing light increases germination', 'maximum at 100%', 'P more than Q', 'Q cannot germinate without light', '0% Q had 0'],
    keywords: ['both', 'similar', 'increase', 'difference', 'seed type P', 'seed type Q', '0%', 'more', 'germinate'],
    feedbackHit: 'Well done — you identified a valid similarity and difference using the data.',
    feedbackMiss: 'Similarity examples: both germinated, both increase with light, both max at 100%. Difference examples: P always > Q; at 0% P=1 but Q=0; Q cannot germinate without light.',
  },
  'q3_d': {
    marks: 1,
    exemplar: 'Seed type R does not require light to germinate / light intensity does not affect germination for seed type R.',
    keyConcepts: ['does not require light', 'light does not affect', 'no light needed', 'light independent'],
    keywords: ['does not need light', 'light independent', 'no light required', 'independent of light'],
    feedbackHit: 'Correct — Seed type R germinates regardless of light intensity.',
    feedbackMiss: 'Seed type R shows the same germination (5) at all light intensities including 0%. This suggests it does not require light to germinate.',
  },
  'q3_e': {
    marks: 1,
    exemplar: 'To control (all) other variables / so that other variables do not affect the results.',
    keyConcepts: ['control other variables', 'control variables', 'fair test'],
    keywords: ['control', 'variable', 'fair test', 'other factors', 'standardise'],
    feedbackHit: 'Correct — the germination chamber controls all other variables.',
    feedbackMiss: 'The germination chamber controls other variables (temperature, humidity, CO₂) so they do not affect the results — making it a fair test.',
  },
  'q3_f': {
    marks: 2,
    exemplar: 'Seed type Y: 85% light intensity. Seed type Z: 70% light intensity.',
    keyConcepts: ['seed type Y 85%', 'seed type Z 70%', '85 percent', '70 percent'],
    keywords: ['85', '70', 'seed type Y', 'seed type Z'],
    feedbackHit: 'Correct — Seed type Y reaches maximum at 85% and Seed type Z at 70%.',
    feedbackMiss: 'Seed type Y reaches its maximum germination at 85% light intensity; Seed type Z at 70%. Award 1 mark if both values correct but the unit % is missing.',
  },
  'q3_g': {
    marks: 2,
    exemplar: '80% light intensity gives maximum germination for Seed type Z (its optimum is 70%, and 80% is above that). For Seed type Y the optimum is 85%, so 80% is below the optimum and does NOT guarantee maximum germination — so the decision is only partially supported.',
    keyConcepts: ['80% maxes Z', 'Z optimum 70', 'Y optimum 85', '80 below Y optimum', 'partially supported', 'energy cost reduction'],
    keywords: ['80', 'seed type Y', 'seed type Z', 'optimum', 'maximum', 'supported', 'not supported', '70', '85'],
    feedbackHit: 'Good analysis — you referenced specific data values and considered both seed types.',
    feedbackMiss: '80% supports maximum germination for Z (optimum 70%, so 80% > optimum → full germination). For Y (optimum 85%), 80% is below optimum → not maximum. So the decision is only partially supported.',
  },

  // ── Q4: Photosynthesis ──
  'q4_a': {
    marks: 1,
    exemplar: 'Carbon dioxide + Water → (light energy) → Oxygen + Glucose. All four placed correctly.',
    keyConcepts: ['carbon dioxide', 'water', 'oxygen', 'glucose', 'reactants', 'products'],
    keywords: ['carbon dioxide', 'water', 'oxygen', 'glucose'],
    feedbackHit: 'Correct — you placed all four substances correctly in the photosynthesis equation.',
    feedbackMiss: 'Photosynthesis: Carbon dioxide + Water → (light) → Oxygen + Glucose. Reactants: CO₂ and H₂O. Products: O₂ and glucose.',
  },
  'q4_b': {
    marks: 4,
    exemplar: 'Independent variable: Carbon dioxide concentration. Dependent variable: Length/height of plant stem (not just "plant growth"). Control variables (any two): temperature / same type of plant / same growth medium / same light intensity / same volume of water.',
    keyConcepts: ['independent variable CO2 concentration', 'dependent variable stem length', 'control temperature', 'control same plant type', 'control light', 'control water volume'],
    keywords: ['independent', 'carbon dioxide', 'CO2', 'dependent', 'stem length', 'stem height', 'control', 'temperature', 'same plant', 'light', 'water'],
    feedbackHit: 'Well done — you correctly identified all four variables.',
    feedbackMiss: 'IV = what you CHANGE = carbon dioxide concentration. DV = what you MEASURE = length/height of plant stem. CVs = kept the same: temperature, plant type, growth medium, light intensity, water volume. Do NOT accept "plant growth" alone for DV.',
  },
  'q4_c': {
    marks: 2,
    exemplar: 'Increasing carbon dioxide concentration increases the rate of photosynthesis, which produces more glucose/sugar/food. This glucose is used for growth (cell division/elongation).',
    keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'cell division'],
    keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'carbon dioxide', 'cell division'],
    feedbackHit: 'Correct — you linked CO₂ → photosynthesis → glucose → growth.',
    feedbackMiss: 'More CO₂ → faster photosynthesis → more glucose → more glucose for growth (cell division and elongation). Do not accept energy alone.',
  },
  'q4_d': {
    marks: 2,
    exemplar: 'Measurement at 0.12%: 44 mm. Average: (28 + 36 + 44 + 44) ÷ 4 = 152 ÷ 4 = 38 mm. (Accept ECF if measurement wrong but average correctly calculated.)',
    keyConcepts: ['44mm at 0.12%', '38mm average', 'average'],
    keywords: ['44', '38', 'average', 'measurement', 'mm'],
    feedbackHit: 'Correct — 44mm at 0.12% and average of 38mm.',
    feedbackMiss: 'At 0.12% CO₂: 44mm. Average: (28+36+44+44)÷4 = 152÷4 = 38mm. Accept ECF (error carried forward) from a wrong reading.',
  },
  'q4_e': {
    marks: 1,
    exemplar: 'mm (millimetres) or cm (centimetres).',
    keyConcepts: ['mm', 'millimetres', 'cm', 'centimetres'],
    keywords: ['mm', 'cm', 'millimetre', 'centimetre', 'length', 'units'],
    feedbackHit: 'Correct — mm or cm are the appropriate units for stem length.',
    feedbackMiss: 'The appropriate units for plant stem length are mm (millimetres) or cm (centimetres).',
  },
  'q4_f': {
    marks: 1,
    exemplar: 'Growth stopped increasing at 0.12% CO₂. At this point carbon dioxide is no longer the limiting factor / another factor (e.g. light, temperature) is now limiting.',
    keyConcepts: ['0.12 percent', 'no longer a limiting factor', 'another limiting factor', 'CO2 not limiting'],
    keywords: ['0.12', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'],
    feedbackHit: 'Correct — growth plateaued because CO₂ was no longer the limiting factor.',
    feedbackMiss: 'Growth stopped increasing at 0.12% CO₂. Beyond this, CO₂ is no longer limiting — something else (light, temperature, water) now limits the rate of photosynthesis.',
  },
  'q4_g': {
    marks: 1,
    exemplar: 'Any reasonable suggestion: increase light intensity / increase temperature (to optimum) / add fertiliser or minerals / grow for a longer time.',
    keyConcepts: ['increase light', 'increase temperature', 'add fertiliser', 'longer time'],
    keywords: ['light', 'temperature', 'fertiliser', 'minerals', 'longer', 'time'],
    feedbackHit: 'Good — you identified another factor that could increase growth.',
    feedbackMiss: 'To increase stem length further: increase light intensity, increase temperature to optimum, add fertiliser/minerals, or grow for longer.',
  },
  'q4_h': {
    marks: 2,
    exemplar: 'The results from 0.04% to 0.12% support the prediction (stem length increases from 28mm to 44mm). Beyond 0.12% (at 0.16%) the results do NOT support it / growth became constant at 44mm.',
    keyConcepts: ['data from 0.04 to 0.12 supports', 'stem length increases', 'beyond 0.12 does not support', 'growth constant'],
    keywords: ['support', 'does not support', '0.04', '0.12', '0.16', 'increase', 'constant', 'plateau', 'data'],
    feedbackHit: 'Correct — you referenced data and identified where the prediction is and is not supported.',
    feedbackMiss: 'The data PARTIALLY supports the prediction. From 0.04% to 0.12% stem length increases (28→44mm) — SUPPORTS. From 0.12% to 0.16% growth stays constant at 44mm — does NOT support. Must quote specific values.',
  },

  // ── Q5: Temperature Effect ──
  'q5_a': {
    marks: 1,
    exemplar: 'Temperature (in °C).',
    keyConcepts: ['temperature'],
    keywords: ['temperature'],
    feedbackHit: 'Correct — the independent variable is temperature.',
    feedbackMiss: 'The independent variable is the one you CHANGE — here it is temperature.',
  },
  'q5_b': {
    marks: 3,
    exemplar: 'A correctly labelled graph: x-axis = Temperature / °C, y-axis = Increase in stem length after 15 days / mm. Even scale on both axes. Five points plotted: (25,8), (30,20), (35,40), (40,41), (45,3).',
    keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'],
    keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'],
    feedbackHit: 'Well done — your graph has correct labels, units, scale and plotted points.',
    feedbackMiss: 'Graph: (1) x-axis "Temperature / °C", y-axis "Increase in stem length after 15 days / mm". (2) Even increments. (3) All 5 points: (25,8), (30,20), (35,40), (40,41), (45,3).',
  },
  'q5_c': {
    marks: 5,
    exemplar: 'As temperature increases from 25°C to 35–40°C, plant growth increases (8mm → 40mm → 41mm). Higher temperature increases the rate of photosynthesis, producing more glucose for growth. Beyond 40°C (45°C gives only 3mm) growth falls sharply because enzymes denature at high temperatures / stomata close / photosynthesis or transpiration stops, so growth stops. The optimum temperature is around 35–40°C.',
    keyConcepts: ['growth increases up to 35-40 degrees', 'photosynthesis increases', 'more glucose', 'growth stops beyond 40 degrees', 'enzymes denature', 'stomata close', 'optimum temperature'],
    keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '35', '40', '45', 'growth stops'],
    feedbackHit: 'Excellent — you described the trend, explained the increase via photosynthesis, and the decrease via enzyme denaturation.',
    feedbackMiss: 'As temperature increases 25→40°C: growth increases (8→41mm) because photosynthesis rate increases → more glucose. Beyond 40°C (45°C→3mm): enzymes denature so photosynthesis stops; OR stomata close; OR transpiration stops. Optimum ≈ 35–40°C.',
  },

  // ── Q6: Experimental Design (soil salinity) ──
  'q6_a': {
    marks: 16,
    exemplar: 'A full design should include: IV=soil salinity (salt concentration 0–5%), DV=plant growth (stem length in mm), controlled variables (temperature, volume of solution added, plant species, light intensity). Equipment: pots, ruler, salt solutions, identical seedlings, labels. Method: water identical plants with different salt concentrations, keep all other conditions the same, measure stem length at regular intervals, repeat each concentration at least 3 times. Safety: wear gloves and avoid spills/contact with concentrated salt solution.',
    keyConcepts: ['independent variable salinity', 'dependent variable stem length', 'controlled temperature', 'controlled water volume', 'controlled plant type', 'equipment pots ruler solutions', 'method water plants', 'measure stem length', 'repeat each condition', 'safety gloves'],
    keywords: ['salinity', 'salt', 'concentration', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves', 'seedlings'],
    feedbackHit: 'Excellent experimental design — you included all required elements.',
    feedbackMiss: 'Required: IV=salt concentration (0–5%), DV=plant growth (stem length/height in mm), 2 CVs (temperature, solution volume, plant species, light), equipment (pots, ruler, salt solutions, seedlings), method (vary salinity, keep other factors constant, measure growth regularly, repeat 3+ times per concentration), safety (gloves, avoid spills).',
  },

  // ── Q7: Fish Tagging / Conservation ──
  'q7_a': {
    marks: 1,
    exemplar: 'River fish.',
    keyConcepts: ['river fish', 'river'],
    keywords: ['river'],
    feedbackHit: 'Correct — River fish showed the greatest population decline.',
    feedbackMiss: 'According to the graph, River fish showed the greatest decline in population size between 1970 and 2019.',
  },
  'q7_b': {
    marks: 2,
    exemplar: 'Knowing migration routes lets scientists identify which habitats/areas are critical for the fish. This information can be used to protect those areas, create protected zones / fishing restrictions along migration routes, and prevent habitat destruction.',
    keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'protected areas', 'fishing restrictions'],
    keywords: ['habitat', 'protect', 'migration', 'route', 'spawning', 'conservation', 'restriction', 'breeding'],
    feedbackHit: 'Well done — you linked tracking data to conservation action.',
    feedbackMiss: 'Migration data helps identify critical habitats / spawning grounds / feeding areas, so scientists can protect them, restrict fishing along routes, and lobby for habitat protection.',
  },
  'q7_c': {
    marks: 2,
    exemplar: 'Any two from: the fish may have died / the fish were not caught again / people who caught the fish did not know how to return the tag / poor communication in 1873 / the tag was lost or fell off.',
    keyConcepts: ['fish died', 'not recaptured', 'tag not returned', 'no return mechanism', 'tag lost', 'tag fell off'],
    keywords: ['died', 'not caught', 'not returned', 'lost', 'fell off', 'awareness', 'communication'],
    feedbackHit: 'Good — you suggested two realistic reasons for low tag returns.',
    feedbackMiss: 'Reasons: (1) fish may have died before being caught; (2) people who caught them may not have known how to return the tag; (3) communication was poor in 1873; (4) the tag may have been lost or fallen off.',
  },
  'q7_d': {
    marks: 2,
    exemplar: 'Scientists could repeat the study at different times of year / tag fish from multiple rivers / use a larger sample size / tag different species. This makes the data more representative/reliable.',
    keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'different species', 'reliable', 'representative'],
    keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative', 'replicate'],
    feedbackHit: 'Correct — you identified a strategy to improve data reliability.',
    feedbackMiss: 'To improve reliability: tag fish at different times of year, from multiple rivers, tag more fish (larger sample), and repeat the study. This makes data more reliable and representative.',
  },
  'q7_e': {
    marks: 3,
    exemplar: 'Human activity causing decline: dam building / water pollution / overfishing. Explanation: dams block migration routes to spawning grounds so fish cannot reproduce. Reduction: install fish ladders / pass laws to reduce pollution / set fishing quotas / restore river habitats.',
    keyConcepts: ['dam building', 'pollution', 'overfishing', 'blocks migration', 'spawning prevented', 'fish ladders', 'reduce pollution', 'fishing quotas'],
    keywords: ['dam', 'pollution', 'overfishing', 'migration', 'spawning', 'fish ladder', 'quota', 'reduce', 'protect', 'restore'],
    feedbackHit: 'Well done — you linked a human activity to the decline and proposed a solution.',
    feedbackMiss: 'Human activities: dam building (blocks migration/spawning), water pollution (kills fish/food), overfishing (removes adults). Solutions: fish ladders, pollution laws, fishing quotas, habitat restoration.',
  },

  // ── Q8: Technology in Animal Research ──
  'q8_a': {
    marks: 1,
    exemplar: 'Acoustic tagging uses sound signals picked up only by nearby underwater receivers (limited range). Satellite tagging transmits to satellites and can track an animal across whole oceans (global range).',
    keyConcepts: ['acoustic limited range', 'satellite global range', 'acoustic needs receivers nearby', 'satellite anywhere'],
    keywords: ['range', 'global', 'local', 'distance', 'satellite', 'acoustic', 'receiver', 'sound', 'ocean'],
    feedbackHit: 'Correct — you identified a key difference in range/coverage.',
    feedbackMiss: 'Acoustic tags transmit sound to nearby underwater receivers (limited range). Satellite tags transmit to satellites and can track animals across whole oceans.',
  },
  'q8_b': {
    marks: 2,
    exemplar: 'Advantage: data collected without disturbing/following the animal / continuous data / data from inaccessible ocean areas. Disadvantage: the tag may affect the animal\'s behaviour / cause injury or drag / battery may run out / expensive.',
    keyConcepts: ['advantage non-disturbing', 'continuous data', 'inaccessible habitat', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'],
    keywords: ['advantage', 'disadvantage', 'disturb', 'behaviour', 'injury', 'drag', 'expensive', 'battery', 'continuous'],
    feedbackHit: 'Good — you identified a valid advantage and disadvantage.',
    feedbackMiss: 'Advantages: data without disturbing the animal, continuous tracking, data from remote ocean areas. Disadvantages: tag may alter behaviour, cause injury/drag, run out of battery, expensive.',
  },
  'q8_c': {
    marks: 4,
    exemplar: 'The data showing sharks near swimming beaches could be used to: (1) identify high-risk overlap zones where sharks and swimmers meet; (2) time beach warnings or temporary closures when sharks are present; (3) educate the public about shark behaviour to reduce fear and culling; (4) inform marine-protected-area management to conserve sharks while keeping people safe.',
    keyConcepts: ['identify overlap zones', 'beach warnings closures', 'reduce culling', 'educate public', 'protected area management', 'reduce human-shark conflict'],
    keywords: ['overlap', 'beach', 'warning', 'closure', 'cull', 'educate', 'public', 'protected', 'conflict', 'manage'],
    feedbackHit: 'Excellent — you proposed multiple specific conservation actions using the tagging data.',
    feedbackMiss: 'The data can inform: maps of shark–swimmer overlap zones → timed warnings/closures; public education to reduce culling; marine protected area design; policy balancing shark conservation and human safety.',
  },
  'q8_d': {
    marks: 6,
    exemplar: 'Benefits: technology allows non-invasive continuous monitoring; satellite tags cover whole oceans; long-term data reveals migration and population trends; helps identify threats and conservation needs. Limitations: tags may alter behaviour or cause drag/injury; expensive, limiting use in poorer countries; technical failures cause data gaps; data needs expert interpretation. Overall: benefits outweigh limitations because the data could not be collected otherwise, but tag welfare and cost must be addressed.',
    keyConcepts: ['non-invasive monitoring', 'continuous data', 'ocean coverage', 'long-term trends', 'identifies threats', 'alters behaviour', 'expensive', 'data gaps', 'expert interpretation', 'injury', 'benefits outweigh limitations'],
    keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'ocean', 'trend', 'population', 'migration', 'welfare', 'invasive', 'data'],
    feedbackHit: 'Excellent evaluation — you balanced benefits and limitations with examples and reached a conclusion.',
    feedbackMiss: 'Benefits: non-invasive continuous data, ocean-wide coverage, migration/population trends, informs conservation. Limitations: tags affect behaviour/cause injury, high cost, technical failure, expert analysis needed. Conclusion must weigh both sides.',
  },
  'q8_e': {
    marks: 3,
    exemplar: 'Scientists should communicate findings to non-scientists to: (1) increase public awareness of conservation issues; (2) gain community support for conservation (e.g. fishers respecting protected zones); (3) inform policy and secure funding; (4) encourage participation (citizen science / reporting tagged animals).',
    keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science', 'conservation action'],
    keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'action', 'conservation'],
    feedbackHit: 'Well done — you explained why science communication matters for conservation.',
    feedbackMiss: 'Communicate to non-scientists to: raise awareness, gain community/fisher support, inform policy/funding, enable citizen science, and ensure local communities understand the importance of conservation.',
  },
}
