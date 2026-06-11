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

// Mark scheme: Biology May 2025 — VARIANT v2. All answers recomputed for the new data.

export const MS: Record<string, MSRecord> = {

  // ── Q1: Classification & Biological Molecules ──
  'q1_a': {
    marks: 1,
    exemplar: 'Virus',
    keyConcepts: ['virus', 'virus is not a kingdom'],
    keywords: ['virus'],
    feedbackHit: 'Correct — Virus is not one of the kingdoms used to classify living things.',
    feedbackMiss: 'Viruses are non-cellular and not a kingdom. The five kingdoms are: Animals, Plants, Fungi, Bacteria (Monera) and Protists.',
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
    exemplar: 'Gray wolf (Canis lupus) OR Coyote (Canis latrans) OR Golden jackal (Canis aureus). Justification: Ethiopian wolf is Canis simensis — same genus (Canis) as these three. Members of the same genus are most closely related.',
    keyConcepts: ['gray wolf', 'coyote', 'golden jackal', 'canis', 'same genus', 'most closely related'],
    keywords: ['canis', 'genus', 'gray wolf', 'coyote', 'jackal', 'closely related'],
    feedbackHit: 'Correct — the Ethiopian wolf shares the genus Canis, making it most closely related to the other Canis species.',
    feedbackMiss: 'Ethiopian wolves (Canis simensis) share the genus Canis with the gray wolf, coyote and golden jackal. Organisms in the same genus are most closely related. Do not score mp2 if an incorrect species is selected.',
  },
  'q1_d': {
    marks: 1,
    exemplar: 'Gray wolf and Coyote — their DNA sequences share 8 out of 10 bases in common.',
    keyConcepts: ['gray wolf', 'coyote', '8 out of 10', 'most bases in common', 'most similar DNA'],
    keywords: ['gray wolf', 'coyote', '8', 'similar', 'DNA', 'bases'],
    feedbackHit: 'Correct — Gray wolf and Coyote share 8/10 DNA bases, making them most closely related.',
    feedbackMiss: 'Compare each pair: Gray wolf vs Coyote share 8/10 bases (most similar). The golden jackal shares fewer bases (7/10) with the wolf.',
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
    exemplar: 'Adrenaline. Action: prepares the body for "fight or flight" — increases heart rate / breathing rate / releases glucose for energy.',
    keyConcepts: ['adrenaline', 'fight or flight', 'increases heart rate', 'increases breathing', 'releases glucose'],
    keywords: ['adrenaline', 'fight or flight', 'heart rate', 'breathing', 'glucose', 'increases'],
    feedbackHit: 'Correct — you identified the hormone and described its action.',
    feedbackMiss: 'Adrenaline (from the adrenal glands) prepares the body for fight or flight: it increases heart rate, breathing rate and releases glucose for energy.',
  },
  'q1_h': {
    marks: 1,
    exemplar: 'Homeostasis.',
    keyConcepts: ['homeostasis'],
    keywords: ['homeostasis'],
    feedbackHit: 'Correct — homeostasis is the maintenance of a constant internal environment.',
    feedbackMiss: 'Maintaining body conditions (temperature, blood sugar, water balance) within a narrow range is called homeostasis.',
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
    exemplar: 'During swimming (4–12 min): Pulse rate increased (from ~68 to ~128 beats/min) AND breathing rate increased (from ~14 to ~34 breaths/min). Exercising muscles require more energy, so cellular respiration increases. More oxygen is needed and more CO₂ is produced. The body responds by increasing heart rate (to deliver more oxygen/glucose to muscles faster) and breathing rate (to take in more oxygen and remove CO₂ faster).',
    keyConcepts: ['pulse rate increased', 'breathing rate increased', 'exercise', 'more energy', 'cellular respiration', 'more oxygen needed', 'more CO2 produced', 'heart rate', 'remove CO2'],
    keywords: ['pulse', 'breathing', 'respiration', 'oxygen', 'carbon dioxide', 'CO2', 'energy', 'muscles', 'exercise', 'increase', 'faster', '68', '128'],
    feedbackHit: 'Excellent — you explained the physiological changes during exercise with data reference.',
    feedbackMiss: 'During swimming (4–12 min): both pulse and breathing rate increase. Muscles need more energy → respiration increases → more O₂ consumed and more CO₂ produced → heart beats faster to deliver O₂/glucose → breathing rate increases to inhale O₂ and exhale CO₂. Must use at least one correct data point (e.g. pulse ~68→~128).',
  },
  'q2_d': {
    marks: 2,
    exemplar: 'Omar. Justification: Omar has the highest number of white blood cells (9800 per mm³). White blood cells fight infection.',
    keyConcepts: ['omar', 'highest white blood cells', 'white blood cells fight infection', '9800'],
    keywords: ['omar', 'white blood cell', 'highest', '9800', 'infection', 'immune'],
    feedbackHit: 'Correct — Omar has the most white blood cells and would best resist viral infection.',
    feedbackMiss: 'Omar has the highest white blood cell count (9800 per mm³). White blood cells (leukocytes) fight infections including viruses.',
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
    exemplar: 'Seed type L (8 seeds germinated at 75% light intensity).',
    keyConcepts: ['seed type L', 'L'],
    keywords: ['seed type L', 'L'],
    feedbackHit: 'Correct — Seed type L had 8 seeds germinated at 75%, the highest of the three.',
    feedbackMiss: 'At 75% light intensity: L=8, M=5, N=4. Seed type L had the highest germination.',
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
    exemplar: 'Similarity: Both seed types germinated / increasing light intensity increased germination in both L and M / both had maximum germination at 100%. Difference: Seed type L had more germination than M at every light intensity / at 0% light L had 2 germinations but M had 0 / M cannot germinate without light.',
    keyConcepts: ['both germinated', 'increasing light increases germination', 'maximum at 100%', 'L more than M', 'M cannot germinate without light', '0% M had 0'],
    keywords: ['both', 'similar', 'increase', 'difference', 'seed type L', 'seed type M', '0%', 'more', 'germinate'],
    feedbackHit: 'Well done — you identified a valid similarity and difference using the data.',
    feedbackMiss: 'Similarity examples: both germinated, both increase with light, both max at 100%. Difference examples: L always > M; at 0% L=2 but M=0; M cannot germinate without light.',
  },
  'q3_d': {
    marks: 1,
    exemplar: 'Seed type N does not require light to germinate / light intensity does not affect germination for seed type N.',
    keyConcepts: ['does not require light', 'light does not affect', 'no light needed', 'light independent'],
    keywords: ['does not need light', 'light independent', 'no light required', 'independent of light'],
    feedbackHit: 'Correct — Seed type N germinates regardless of light intensity.',
    feedbackMiss: 'Seed type N shows the same germination (4) at all light intensities including 0%. This suggests it does not require light to germinate.',
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
    exemplar: 'Seed type S: 90% light intensity. Seed type T: 75% light intensity.',
    keyConcepts: ['seed type S 90%', 'seed type T 75%', '90 percent', '75 percent'],
    keywords: ['90', '75', 'seed type S', 'seed type T'],
    feedbackHit: 'Correct — Seed type S reaches maximum at 90% and Seed type T at 75%.',
    feedbackMiss: 'Seed type S reaches its maximum germination at 90% light intensity; Seed type T at 75%. Award 1 mark if both values correct but the unit % is missing.',
  },
  'q3_g': {
    marks: 2,
    exemplar: '80% light intensity gives maximum germination for Seed type T (its optimum is 75%, and 80% is above that). For Seed type S the optimum is 90%, so 80% is below the optimum and does NOT guarantee maximum germination — so the decision is only partially supported.',
    keyConcepts: ['80% maxes T', 'T optimum 75', 'S optimum 90', '80 below S optimum', 'partially supported', 'energy cost reduction'],
    keywords: ['80', 'seed type S', 'seed type T', 'optimum', 'maximum', 'supported', 'not supported', '75', '90'],
    feedbackHit: 'Good analysis — you referenced specific data values and considered both seed types.',
    feedbackMiss: '80% supports maximum germination for T (optimum 75%, so 80% > optimum → full germination). For S (optimum 90%), 80% is below optimum → not maximum. So the decision is only partially supported.',
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
    exemplar: 'Independent variable: Light intensity. Dependent variable: Length/height of tomato stem (not just "plant growth"). Control variables (any two): temperature / same type of plant / same growth medium / same CO₂ level / same volume of water.',
    keyConcepts: ['independent variable light intensity', 'dependent variable stem length', 'control temperature', 'control same plant type', 'control CO2', 'control water volume'],
    keywords: ['independent', 'light intensity', 'dependent', 'stem length', 'stem height', 'control', 'temperature', 'same plant', 'CO2', 'water'],
    feedbackHit: 'Well done — you correctly identified all four variables.',
    feedbackMiss: 'IV = what you CHANGE = light intensity. DV = what you MEASURE = length/height of tomato stem. CVs = kept the same: temperature, plant type, growth medium, CO₂ level, water volume. Do NOT accept "plant growth" alone for DV.',
  },
  'q4_c': {
    marks: 2,
    exemplar: 'Increasing light intensity increases the rate of photosynthesis, which produces more glucose/sugar/food. This glucose is used for growth (cell division/elongation).',
    keyConcepts: ['increases rate of photosynthesis', 'more glucose', 'glucose used for growth', 'cell division'],
    keywords: ['photosynthesis', 'glucose', 'sugar', 'food', 'growth', 'rate', 'light', 'cell division'],
    feedbackHit: 'Correct — you linked light intensity → photosynthesis → glucose → growth.',
    feedbackMiss: 'More light → faster photosynthesis → more glucose → more glucose for growth (cell division and elongation). Do not accept energy alone.',
  },
  'q4_d': {
    marks: 2,
    exemplar: 'Measurement at 80%: 40 mm. Average: (26 + 34 + 40 + 40) ÷ 4 = 140 ÷ 4 = 35 mm. (Accept ECF if measurement wrong but average correctly calculated.)',
    keyConcepts: ['40mm at 80%', '35mm average', 'average'],
    keywords: ['40', '35', 'average', 'measurement', 'mm'],
    feedbackHit: 'Correct — 40mm at 80% and average of 35mm.',
    feedbackMiss: 'At 80% light intensity: 40mm. Average: (26+34+40+40)÷4 = 140÷4 = 35mm. Accept ECF (error carried forward) from a wrong reading.',
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
    exemplar: 'Growth stopped increasing at 80% light intensity. At this point light is no longer the limiting factor / another factor (e.g. CO₂, temperature) is now limiting.',
    keyConcepts: ['80 percent', 'no longer a limiting factor', 'another limiting factor', 'light not limiting'],
    keywords: ['80', 'limiting factor', 'plateau', 'maximum', 'stopped', 'another factor'],
    feedbackHit: 'Correct — growth plateaued because light was no longer the limiting factor.',
    feedbackMiss: 'Growth stopped increasing at 80% light intensity. Beyond this, light is no longer limiting — something else (CO₂, temperature, water) now limits the rate of photosynthesis.',
  },
  'q4_g': {
    marks: 1,
    exemplar: 'Any reasonable suggestion: increase carbon dioxide concentration / increase temperature (to optimum) / add fertiliser or minerals / grow for a longer time.',
    keyConcepts: ['increase carbon dioxide', 'increase temperature', 'add fertiliser', 'longer time'],
    keywords: ['carbon dioxide', 'CO2', 'temperature', 'fertiliser', 'minerals', 'longer', 'time'],
    feedbackHit: 'Good — you identified another factor that could increase growth.',
    feedbackMiss: 'To increase stem length further: increase CO₂ concentration, increase temperature to optimum, add fertiliser/minerals, or grow for longer.',
  },
  'q4_h': {
    marks: 2,
    exemplar: 'The results from 20% to 80% support the prediction (stem length increases from 26mm to 40mm). Beyond 80% (at 100%) the results do NOT support it / growth became constant at 40mm.',
    keyConcepts: ['data from 20 to 80 supports', 'stem length increases', 'beyond 80 does not support', 'growth constant'],
    keywords: ['support', 'does not support', '20', '80', '100', 'increase', 'constant', 'plateau', 'data'],
    feedbackHit: 'Correct — you referenced data and identified where the prediction is and is not supported.',
    feedbackMiss: 'The data PARTIALLY supports the prediction. From 20% to 80% stem length increases (26→40mm) — SUPPORTS. From 80% to 100% growth stays constant at 40mm — does NOT support. Must quote specific values.',
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
    exemplar: 'A correctly labelled graph: x-axis = Temperature / °C, y-axis = Increase in stem length after 15 days / mm. Even scale on both axes. Five points plotted: (20,5), (30,18), (40,38), (50,40), (60,2).',
    keyConcepts: ['x-axis temperature', 'y-axis stem length', 'units on axes', 'even scale', 'points plotted correctly'],
    keywords: ['temperature', 'stem length', 'increase', 'mm', 'axis', 'scale', 'plot', 'points'],
    feedbackHit: 'Well done — your graph has correct labels, units, scale and plotted points.',
    feedbackMiss: 'Graph: (1) x-axis "Temperature / °C", y-axis "Increase in stem length after 15 days / mm". (2) Even increments. (3) All 5 points: (20,5), (30,18), (40,38), (50,40), (60,2).',
  },
  'q5_c': {
    marks: 5,
    exemplar: 'As temperature increases from 20°C to 40–50°C, plant growth increases (5mm → 38mm → 40mm). Higher temperature increases the rate of photosynthesis, producing more glucose for growth. Beyond 50°C (60°C gives only 2mm) growth falls sharply because enzymes denature at high temperatures / stomata close / photosynthesis or transpiration stops, so growth stops. The optimum temperature is around 40–50°C.',
    keyConcepts: ['growth increases up to 40-50 degrees', 'photosynthesis increases', 'more glucose', 'growth stops beyond 50 degrees', 'enzymes denature', 'stomata close', 'optimum temperature'],
    keywords: ['temperature', 'increase', 'decrease', 'photosynthesis', 'enzyme', 'denature', 'optimum', 'stomata', 'glucose', '40', '50', '60', 'growth stops'],
    feedbackHit: 'Excellent — you described the trend, explained the increase via photosynthesis, and the decrease via enzyme denaturation.',
    feedbackMiss: 'As temperature increases 20→50°C: growth increases (5→40mm) because photosynthesis rate increases → more glucose. Beyond 50°C (60°C→2mm): enzymes denature so photosynthesis stops; OR stomata close; OR transpiration stops. Optimum ≈ 40–50°C.',
  },

  // ── Q6: Experimental Design (fertiliser concentration) ──
  'q6_a': {
    marks: 16,
    exemplar: 'A full design should include: IV=fertiliser concentration (0–10 g/L), DV=plant growth (stem length in mm), controlled variables (temperature, volume of solution added, plant species, light intensity). Equipment: pots, ruler, fertiliser solutions, identical seedlings, labels. Method: water identical plants with different fertiliser concentrations, keep all other conditions the same, measure stem length at regular intervals, repeat each concentration at least 3 times. Safety: wear gloves and wash hands after handling fertiliser.',
    keyConcepts: ['independent variable fertiliser concentration', 'dependent variable stem length', 'controlled temperature', 'controlled water volume', 'controlled plant type', 'equipment pots ruler solutions', 'method water plants', 'measure stem length', 'repeat each condition', 'safety gloves'],
    keywords: ['fertiliser', 'concentration', 'independent', 'dependent', 'controlled', 'stem length', 'growth', 'temperature', 'ruler', 'pots', 'measure', 'repeat', 'safety', 'gloves', 'seedlings'],
    feedbackHit: 'Excellent experimental design — you included all required elements.',
    feedbackMiss: 'Required: IV=fertiliser concentration (0–10 g/L), DV=plant growth (stem length/height in mm), 2 CVs (temperature, solution volume, plant species, light), equipment (pots, ruler, fertiliser solutions, seedlings), method (vary concentration, keep other factors constant, measure growth regularly, repeat 3+ times per concentration), safety (gloves, wash hands).',
  },

  // ── Q7: Turtle Tagging / Conservation ──
  'q7_a': {
    marks: 1,
    exemplar: 'Mediterranean.',
    keyConcepts: ['mediterranean'],
    keywords: ['mediterranean'],
    feedbackHit: 'Correct — the Mediterranean turtle population showed the greatest decline.',
    feedbackMiss: 'According to the graph, the Mediterranean turtle population showed the greatest decline in size between 1970 and 2019.',
  },
  'q7_b': {
    marks: 2,
    exemplar: 'Knowing migration routes lets scientists identify which habitats/areas are critical for the turtles (e.g. nesting beaches, feeding grounds). This information can be used to protect those areas, create marine protected zones along migration routes, and prevent habitat destruction.',
    keyConcepts: ['identify critical habitats', 'protect habitats', 'migration routes', 'nesting beaches', 'protected areas'],
    keywords: ['habitat', 'protect', 'migration', 'route', 'nesting', 'feeding', 'conservation', 'protected'],
    feedbackHit: 'Well done — you linked tracking data to conservation action.',
    feedbackMiss: 'Migration data helps identify critical habitats / nesting beaches / feeding grounds, so scientists can protect them, create marine protected areas along routes, and lobby for habitat protection.',
  },
  'q7_c': {
    marks: 2,
    exemplar: 'Any two from: the turtle may have died / the turtle was not seen again / people who found the tag did not know how to return it / poor communication in 1955 / the tag was lost or fell off.',
    keyConcepts: ['turtle died', 'not seen again', 'tag not returned', 'no return mechanism', 'tag lost', 'tag fell off'],
    keywords: ['died', 'not found', 'not returned', 'lost', 'fell off', 'awareness', 'communication'],
    feedbackHit: 'Good — you suggested two realistic reasons for low tag returns.',
    feedbackMiss: 'Reasons: (1) turtles may have died before being found; (2) people who found them may not have known how to return the tag; (3) communication was poor in 1955; (4) the tag may have been lost or fallen off.',
  },
  'q7_d': {
    marks: 2,
    exemplar: 'Scientists could repeat the study at different times of year / tag turtles from multiple beaches / use a larger sample size / tag different species. This makes the data more representative/reliable.',
    keyConcepts: ['repeat at different times', 'multiple locations', 'larger sample', 'different species', 'reliable', 'representative'],
    keywords: ['repeat', 'sample size', 'location', 'time', 'species', 'reliable', 'representative', 'replicate'],
    feedbackHit: 'Correct — you identified a strategy to improve data reliability.',
    feedbackMiss: 'To improve reliability: tag turtles at different times of year, from multiple beaches, tag more turtles (larger sample), and repeat the study. This makes data more reliable and representative.',
  },
  'q7_e': {
    marks: 3,
    exemplar: 'Human activity causing decline: coastal development on nesting beaches / plastic pollution / bycatch in fishing nets. Explanation: building on beaches destroys nesting sites so fewer eggs are laid. Reduction: protect nesting beaches / reduce plastic waste / require turtle-excluder devices on fishing nets.',
    keyConcepts: ['coastal development', 'plastic pollution', 'bycatch', 'nesting beaches destroyed', 'protect beaches', 'reduce plastic', 'turtle-excluder devices'],
    keywords: ['development', 'pollution', 'plastic', 'bycatch', 'fishing', 'nesting', 'beach', 'protect', 'reduce', 'net'],
    feedbackHit: 'Well done — you linked a human activity to the decline and proposed a solution.',
    feedbackMiss: 'Human activities: coastal development (destroys nesting beaches), plastic pollution (turtles eat/are trapped), bycatch in fishing nets (drowning). Solutions: protect nesting beaches, reduce plastic waste, require turtle-excluder devices on nets.',
  },

  // ── Q8: Technology in Animal Research ──
  'q8_a': {
    marks: 1,
    exemplar: 'A GPS collar is fitted to an individual animal and records that animal\'s position continuously over large areas. A camera trap is fixed in one place and only photographs animals that pass in front of it.',
    keyConcepts: ['gps collar tracks individual', 'gps continuous location', 'camera trap fixed location', 'camera only when animal passes'],
    keywords: ['collar', 'camera trap', 'individual', 'fixed', 'continuous', 'location', 'photograph', 'position'],
    feedbackHit: 'Correct — you identified a key difference between the two methods.',
    feedbackMiss: 'A GPS collar follows an individual animal\'s position continuously over a wide area; a camera trap is fixed in one location and only records animals that walk past it.',
  },
  'q8_b': {
    marks: 2,
    exemplar: 'Advantage: continuous location data / data from large or inaccessible areas / does not need a scientist present. Disadvantage: the collar may affect the animal\'s behaviour / cause injury or discomfort / battery may run out / expensive.',
    keyConcepts: ['advantage continuous data', 'large area', 'no scientist present', 'disadvantage affects behaviour', 'injury', 'expensive', 'battery'],
    keywords: ['advantage', 'disadvantage', 'continuous', 'behaviour', 'injury', 'discomfort', 'expensive', 'battery', 'area'],
    feedbackHit: 'Good — you identified a valid advantage and disadvantage.',
    feedbackMiss: 'Advantages: continuous location data, coverage of large/inaccessible areas, no scientist needed nearby. Disadvantages: collar may alter behaviour, cause injury/discomfort, run out of battery, be expensive.',
  },
  'q8_c': {
    marks: 4,
    exemplar: 'The data showing elephants on farmland could be used to: (1) identify human–elephant conflict zones where crops are raided; (2) build barriers (e.g. beehive fences) or wildlife corridors away from farms; (3) warn farmers when elephants approach so crops/people are protected; (4) reduce retaliation killing by compensating farmers, and inform protected-area management.',
    keyConcepts: ['identify conflict zones', 'barriers corridors', 'warn farmers', 'reduce retaliation killing', 'protected area management', 'reduce human-elephant conflict'],
    keywords: ['conflict', 'corridor', 'barrier', 'fence', 'warn', 'farmer', 'retaliation', 'killing', 'protected', 'manage', 'crop'],
    feedbackHit: 'Excellent — you proposed multiple specific conservation actions using the tracking data.',
    feedbackMiss: 'The data can inform: maps of human–elephant conflict zones → barriers/corridors; early warnings for farmers; compensation to reduce retaliation killings; protected-area and land-use planning to keep elephants away from farms.',
  },
  'q8_d': {
    marks: 6,
    exemplar: 'Benefits: technology allows continuous monitoring without following the animal; GPS collars cover large areas; long-term data reveals movement and population trends; helps identify threats and conservation needs. Limitations: collars may alter behaviour or cause injury; expensive, limiting use in poorer countries; technical failures cause data gaps; data needs expert interpretation. Overall: benefits outweigh limitations because the data could not be collected otherwise, but animal welfare and cost must be addressed.',
    keyConcepts: ['continuous monitoring', 'large-area coverage', 'long-term trends', 'identifies threats', 'alters behaviour', 'expensive', 'data gaps', 'expert interpretation', 'injury', 'benefits outweigh limitations'],
    keywords: ['benefit', 'limitation', 'behaviour', 'expensive', 'cost', 'injury', 'monitor', 'continuous', 'area', 'trend', 'population', 'welfare', 'data'],
    feedbackHit: 'Excellent evaluation — you balanced benefits and limitations with examples and reached a conclusion.',
    feedbackMiss: 'Benefits: continuous data without disturbance, large-area coverage, movement/population trends, informs conservation. Limitations: collars affect behaviour/cause injury, high cost, technical failure, expert analysis needed. Conclusion must weigh both sides.',
  },
  'q8_e': {
    marks: 3,
    exemplar: 'Scientists should communicate findings to non-scientists to: (1) increase public awareness of conservation issues; (2) gain community support (e.g. farmers cooperating with elephant corridors); (3) inform policy and secure funding; (4) encourage participation (citizen science / reporting sightings).',
    keyConcepts: ['public awareness', 'community support', 'secure funding', 'government policy', 'citizen science', 'conservation action'],
    keywords: ['awareness', 'public', 'community', 'support', 'funding', 'policy', 'government', 'citizen science', 'action', 'conservation'],
    feedbackHit: 'Well done — you explained why science communication matters for conservation.',
    feedbackMiss: 'Communicate to non-scientists to: raise awareness, gain community/farmer support, inform policy/funding, enable citizen science, and ensure local communities understand the importance of conservation.',
  },
}
