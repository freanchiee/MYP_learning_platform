import 'server-only'

// ── Inline type definitions ──────────────────────────────────────────────────

interface MSEntry {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
}

interface MCQEntry {
  type: 'mcq'
  correct: number
}

type MSRecord = MSEntry | MCQEntry

// ── Mark Scheme — Biology May 2024 · VARIANT 2 ──────────────────────────────
// Isomorphic to biology-may-2024. Every answer RECOMPUTED for the new contexts:
// fennec fox / banana leaf / pine needle · Antarctic Southern Ocean food web /
// leopard seal · coast redwood (circ 314 cm, GF 1.00 → 100 yr) · Norway spruce
// (GF 1.34, circ 200 cm → 85 yr) · winged-seed glider model · distillation
// desalination · nitrogen cycle.

export const MS: Record<string, MSRecord> = {

  // ── Question 1 — Life Processes & Homeostasis ─────────────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Chemical reactions that take place inside an organism = Metabolism; Movement of the whole organism from place to place = Movement; Release of energy from food inside cells = Respiration.',
    keyConcepts: ['metabolism chemical reactions', 'movement of organism', 'respiration releases energy from food'],
    keywords: ['metabolism', 'movement', 'respiration', 'chemical reactions', 'energy', 'food'],
    feedbackHit: 'Correct identification of life processes.',
    feedbackMiss: 'Remember: Metabolism = chemical reactions in the body; Movement = the organism moving place to place; Respiration = releasing energy from food in cells.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'A fennec fox\'s ears have a large surface area which allows more heat to be lost/radiated to the environment. Many blood vessels run close to the surface of the thin ears, so heat is lost by radiation/convection, cooling the blood and helping to maintain a stable body temperature in the hot desert.',
    keyConcepts: ['large surface area increases heat loss', 'blood vessels near surface of ear', 'radiation heat loss', 'maintains stable body temperature homeostasis'],
    keywords: ['surface area', 'heat loss', 'radiation', 'blood vessels', 'homeostasis', 'temperature'],
    feedbackHit: 'Good explanation linking ear surface area to heat loss and homeostasis.',
    feedbackMiss: 'Fennec foxes use their large thin ears as radiators — blood flows through many vessels near the surface, losing heat to the surrounding air to keep cool.',
  },

  q1_c: {
    marks: 2,
    exemplar: 'A large surface area allows more light to be absorbed for photosynthesis. The large broad leaf also allows more CO₂ to enter through stomata, increasing the rate of photosynthesis and therefore energy/sugar production — useful in the shady rainforest understorey where light is limited.',
    keyConcepts: ['large surface area absorbs more light', 'more stomata allow greater CO2 absorption', 'increases rate of photosynthesis'],
    keywords: ['photosynthesis', 'light absorption', 'stomata', 'CO2', 'surface area'],
    feedbackHit: 'Correct advantage of large leaf surface area for photosynthesis.',
    feedbackMiss: 'Large banana leaves absorb more sunlight and CO₂ — both are needed for photosynthesis, which provides the plant with glucose/energy.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'A small surface area reduces water loss by transpiration/evaporation, which is an advantage in cold/frozen northern winters where liquid water is scarce. The thin waxy needles also resist freezing and wind damage, helping the pine survive in harsh conditions.',
    keyConcepts: ['small surface area reduces water loss', 'transpiration reduced', 'survival in cold dry windy conditions'],
    keywords: ['water loss', 'transpiration', 'evaporation', 'cold', 'needle', 'surface area'],
    feedbackHit: 'Correct — small surface area minimises water loss, crucial for survival in cold dry conditions.',
    feedbackMiss: 'In a cold northern winter, liquid water is scarce. Small needle leaves = less surface area = less water lost through transpiration.',
  },

  q1_e: {
    marks: 3,
    exemplar: 'A high SA:V ratio means more surface area is available relative to the volume of the cell. This allows nutrients (e.g. glucose, oxygen) to diffuse in quickly and waste products (e.g. CO₂) to diffuse out quickly. If the ratio were low, the diffusion distance to the centre would be too great and the middle of the cell would not receive enough nutrients/oxygen, limiting metabolic activity.',
    keyConcepts: ['more surface area relative to volume', 'faster diffusion of nutrients into cell', 'faster removal of waste products', 'diffusion distance short', 'efficient metabolic activity'],
    keywords: ['surface area', 'volume', 'diffusion', 'nutrients', 'oxygen', 'waste', 'CO2', 'glucose', 'metabolism'],
    feedbackHit: 'Excellent explanation of SA:V ratio and cell efficiency.',
    feedbackMiss: 'A high SA:V ratio means the cell surface is large compared to its internal volume, so substances can diffuse in/out quickly — the centre is never too far from the membrane.',
  },

  // ── Question 2 — Antarctic Southern Ocean Food Web ───────────────────────

  q2_a: {
    marks: 3,
    exemplar: 'A valid 5-species food chain with leopard seal at the 4th trophic level, e.g.: Phytoplankton (level 1) → Antarctic krill (2) → Adélie penguin (3) → Leopard seal (4) → Orca (5). Arrows must show direction of energy flow (prey → predator).',
    keyConcepts: ['phytoplankton producer trophic 1', 'leopard seal fourth trophic level', 'arrows show energy flow direction', 'five species in chain'],
    keywords: ['food chain', 'trophic level', 'producer', 'consumer', 'energy flow', 'arrow'],
    feedbackHit: 'Correct food chain with leopard seal at the 4th trophic level.',
    feedbackMiss: 'The chain must have exactly 5 organisms with leopard seal 4th, e.g. Phytoplankton → krill → Adélie penguin → leopard seal → orca. Arrows point from prey to predator; phytoplankton must be at level 1.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'The orca feeds at trophic levels 4 and 5. It eats squid (a level-4 consumer), placing the orca at level 5; it also eats leopard seals (level 4–5). Award 1 mark for each correct trophic level stated (4 and 5).',
    keyConcepts: ['orca trophic level 4', 'orca trophic level 5', 'feeds at multiple trophic levels apex predator'],
    keywords: ['trophic level', 'orca', 'consumer', 'apex predator'],
    feedbackHit: 'Correct trophic levels for the orca.',
    feedbackMiss: 'Check all the arrows pointing to the orca in the food web — each prey species tells you a trophic level.',
  },

  q2_c: {
    marks: 3,
    exemplar: 'For organisms to be classified as different species they must be unable to interbreed to produce fertile offspring (biological species concept). Different body size, markings and diet alone are not sufficient — variation within a species can produce different physical traits due to different environments/diets. Without data on whether they can interbreed, we cannot conclude they are separate species.',
    keyConcepts: ['species definition unable to interbreed', 'produce fertile offspring species criterion', 'physical differences insufficient alone', 'need interbreeding data'],
    keywords: ['species', 'interbreed', 'fertile', 'offspring', 'classification', 'variation', 'physical features'],
    feedbackHit: 'Good use of the biological species concept — interbreeding is the key criterion.',
    feedbackMiss: 'Species are defined by reproductive isolation: if they can interbreed and produce fertile offspring, they are the same species regardless of size or markings.',
  },

  q2_d: {
    marks: 4,
    exemplar: 'Genome mapping allows scientists to compare the DNA sequences of the different seal populations. If the genome sequences are very similar (high percentage identity), they are likely the same species. If there are significant differences in key genes (e.g. those controlling reproduction), they may be different species. Scientists can also look for genes that would prevent successful interbreeding. This gives more objective, quantitative data than physical features alone.',
    keyConcepts: ['compare DNA sequences genome', 'high similarity same species', 'significant differences different species', 'reproductive isolation genes', 'quantitative objective evidence'],
    keywords: ['genome', 'DNA', 'sequence', 'similarity', 'comparison', 'genes', 'reproductive', 'species', 'objective'],
    feedbackHit: 'Excellent — genome comparison provides objective evidence for species classification.',
    feedbackMiss: 'Genome mapping shows how similar the DNA of the seal populations is. Very similar DNA = likely same species; large differences in key genes = possibly different species.',
  },

  // ── Question 3 — Tree Age Estimation (Coast Redwood) ─────────────────────

  q3_a: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q3_b: {
    marks: 3,
    exemplar: 'age = (circumference ÷ π) × growth factor = (314 ÷ π) × 1.00 = (314 ÷ 3.14159) × 1 = 99.95 ≈ 100 years. Award: 1 mark for correct formula substitution; 1 mark for correct calculation of circumference ÷ π (≈100); 1 mark for correct final answer (100 years, accept 99–101).',
    keyConcepts: ['formula age = circumference divided by pi times growth factor', 'circumference 314 cm divided by pi', 'growth factor 1.00 for redwood', 'answer 100 years'],
    keywords: ['circumference', 'pi', 'growth factor', 'age', 'redwood', '314', '100', 'calculation'],
    feedbackHit: 'Correct calculation — 100 years.',
    feedbackMiss: 'Use: age = (circumference ÷ π) × growth factor. For the redwood: (314 ÷ 3.14159) × 1.00 ≈ 100 years.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Each year produces two rings — one light ring (spring/summer growth) and one dark ring (autumn growth). Counting both light and dark rings would give double the actual number of years, so the estimate would be twice the real age.',
    keyConcepts: ['one light and one dark ring per year', 'counting both doubles the count', 'two rings equal one year not two'],
    keywords: ['growth ring', 'light ring', 'dark ring', 'spring', 'summer', 'autumn', 'annual', 'double'],
    feedbackHit: 'Correct — each year produces a pair of rings (light + dark), so counting both gives double the age.',
    feedbackMiss: 'Each year produces TWO rings (one light, one dark). If you count both, you must divide by 2 — otherwise you count twice per year.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'The tree has grown for its entire life from the base, so the base contains rings from every year. Higher up the trunk, the tree grew after the base section was formed, so fewer rings would be present — the count higher up would underestimate the age.',
    keyConcepts: ['base contains all growth rings since germination', 'entire lifetime of growth at base', 'more rings at base = more accurate count'],
    keywords: ['base', 'rings', 'all years', 'oldest', 'germination', 'trunk'],
    feedbackHit: 'Correct — the base has been growing longest and contains rings from every year.',
    feedbackMiss: 'The tree starts growing from the base. Higher sections only accumulate rings after the section forms — so only the base has rings for every year of the tree\'s life.',
  },

  q3_e: {
    marks: 3,
    exemplar: 'Growth factor values: assumes a constant growth rate throughout life; growth factor may vary with environmental conditions (drought, disease); only gives an average estimate. Counting rings: requires cutting down the tree (destructive); in tropical climates there may be no clear rings because growth is continuous year-round (no seasonal variation), so rings are hard to distinguish accurately.',
    keyConcepts: ['growth factor assumes constant growth rate', 'environmental conditions affect growth rate', 'counting rings requires cutting tree destructive', 'tropical trees lack clear seasonal rings'],
    keywords: ['limitation', 'growth factor', 'constant', 'environmental', 'rings', 'tropical', 'seasonal', 'destructive', 'accuracy'],
    feedbackHit: 'Good identification of limitations for both methods.',
    feedbackMiss: 'Growth factor limitation: growth isn\'t always constant (affected by drought/disease). Ring counting limitation: tropical trees don\'t have clear rings because there are no distinct seasons.',
  },

  // ── Question 4 — Norway Spruce Investigation ─────────────────────────────

  q4_a: {
    marks: 2,
    exemplar: 'Random sampling avoids bias in selection — without it, students might unconsciously select larger/smaller/more accessible trees, which would not represent the whole forest. Random selection ensures every tree has an equal chance of being included, making the sample more representative of all 700+ spruce trees.',
    keyConcepts: ['avoid bias in selection', 'every tree equal chance of selection', 'representative sample of population', 'valid generalisation to all trees'],
    keywords: ['random', 'bias', 'representative', 'population', 'sample', 'valid', 'equal chance'],
    feedbackHit: 'Correct — random sampling prevents bias and ensures representativeness.',
    feedbackMiss: 'Random sampling means every tree has an equal chance of being picked, avoiding the researcher unconsciously choosing particular trees (selection bias).',
  },

  q4_b: {
    marks: 1,
    exemplar: 'Assign each tree a number; use a random number generator (or random number table) to select 20 numbers; measure the trees corresponding to those numbers.',
    keyConcepts: ['assign numbers to trees', 'random number generator or table', 'select 20 random numbers'],
    keywords: ['random number', 'number each tree', 'random selection method', 'generator', 'table'],
    feedbackHit: 'Correct method for random selection.',
    feedbackMiss: 'Number all the trees, then use a random number generator or table to pick 20 numbers — measure those trees.',
  },

  q4_c: {
    marks: 5,
    exemplar: 'Award marks for: both axes correctly labelled with units (Age/years on x-axis, Height/m on y-axis) [1]; appropriate scale on both axes [1]; all 5 data points plotted correctly (90yr/28m, 60yr/22m, 30yr/15m, 15yr/9m, 5yr/4m) [2, lose 1 for each error]; straight line of best fit drawn through the data [1].',
    keyConcepts: ['x-axis age years', 'y-axis height metres', 'all five points correctly plotted', 'line of best fit drawn', 'appropriate scale'],
    keywords: ['axis', 'label', 'units', 'scale', 'plot', 'point', 'line of best fit', 'graph'],
    feedbackHit: 'Graph correctly drawn with all points plotted and a line of best fit.',
    feedbackMiss: 'Check: axes labelled with units? Scale appropriate? All 5 points plotted (90/28, 60/22, 30/15, 15/9, 5/4)? Line of best fit drawn (not dot-to-dot)?',
  },

  q4_d: {
    marks: 2,
    exemplar: 'From the graph, a change of 85 years (from 5 to 90 years) corresponds to a change in height of 24 m (from 4 to 28 m). Growth rate = 24 ÷ 85 ≈ 0.28 m/year. Accept values read from the line of best fit (approximately 0.27–0.30 m/year).',
    keyConcepts: ['gradient of line of best fit', 'change in height divided by change in age', 'approximately 0.28 m per year'],
    keywords: ['gradient', 'growth rate', 'metres per year', 'line of best fit', 'calculate', '0.28'],
    feedbackHit: 'Correct calculation of growth rate from the graph gradient.',
    feedbackMiss: 'Growth rate = rise ÷ run = (change in height) ÷ (change in age). Read two points from your line of best fit, e.g. (5,4) and (90,28) → 24 ÷ 85 ≈ 0.28 m/year.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'The prediction may not be reliable because the data only goes up to 90 years — predicting at 120 years is extrapolation, which assumes the linear trend continues. Older trees may grow more slowly as they reach their maximum height, so the line may not stay straight; a larger sample might also show a different pattern.',
    keyConcepts: ['extrapolation beyond data range unreliable', 'trend may not continue linearly', 'growth rate may slow with age', 'limited sample size'],
    keywords: ['extrapolation', 'beyond data', 'unreliable', 'trend', 'sample size', 'linear'],
    feedbackHit: 'Good — extrapolation beyond the data range can be unreliable.',
    feedbackMiss: 'The data only goes to 90 years. Predicting at 120 years means extrapolating — the growth rate might slow as trees age, so the linear trend may not continue.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'age = (200 ÷ π) × 1.34 = (200 ÷ 3.14159) × 1.34 = 63.66 × 1.34 ≈ 85.3 ≈ 85 years.',
    keyConcepts: ['circumference 200 divided by pi', 'multiply by growth factor 1.34', 'answer approximately 85 years'],
    keywords: ['circumference', 'pi', 'growth factor', '1.34', 'spruce', '85'],
    feedbackHit: 'Correct — approximately 85 years.',
    feedbackMiss: 'age = (200 ÷ 3.14159) × 1.34 = 63.7 × 1.34 ≈ 85 years.',
  },

  // ── Question 5 — Winged-Seed Glider Model Experiment ─────────────────────

  q5_a: {
    marks: 2,
    exemplar: 'Independent variable (IV): the height from which the model is dropped (in metres). Dependent variable (DV): the time the model spends in the air (in seconds).',
    keyConcepts: ['independent variable drop height', 'dependent variable time in air', 'IV is what you change', 'DV is what you measure'],
    keywords: ['independent', 'dependent', 'variable', 'drop height', 'time', 'air', 'IV', 'DV'],
    feedbackHit: 'Correct identification of IV and DV.',
    feedbackMiss: 'IV = what you change (drop height); DV = what you measure as a result (time in air).',
  },

  q5_b: {
    marks: 2,
    exemplar: 'Any two of: size/shape of the paper wing (same template); mass of the model (same number of paperclips); location/air currents (same room, no wind/draught); person releasing the model; orientation of the model when released; type of paper used.',
    keyConcepts: ['wing size same', 'mass paperclip same', 'location wind conditions controlled', 'same person releasing'],
    keywords: ['controlled', 'variable', 'constant', 'paperclip', 'size', 'shape', 'wind', 'location'],
    feedbackHit: 'Two valid controlled variables identified.',
    feedbackMiss: 'Controlled variables must be kept constant. Think: what else could affect the time apart from drop height?',
  },

  q5_c: {
    marks: 2,
    exemplar: 'As the height from which the model is dropped increases, the time spent in the air also increases. There is a positive correlation between drop height and time in air, and the relationship appears to be roughly linear/proportional.',
    keyConcepts: ['as height increases time increases', 'positive correlation', 'greater height longer time in air'],
    keywords: ['positive correlation', 'increases', 'proportional', 'height', 'time', 'pattern', 'relationship'],
    feedbackHit: 'Correct pattern described — positive correlation between height and time.',
    feedbackMiss: 'Look at how time changes as height increases. Does time go up, go down, or stay the same?',
  },

  q5_d: {
    marks: 2,
    exemplar: 'A paper winged-seed model is a simplified model — it does not have the same shape, mass distribution, or material as a real ash seed. A real seed is irregular and its wing is shaped differently, so it may not spin or glide the same way. The added paperclip changes the mass distribution compared with a real seed.',
    keyConcepts: ['paper model simplified not identical to real seed', 'different shape or mass distribution', 'paperclip changes mass real seed has no clip', 'model may not behave like real seed'],
    keywords: ['model', 'limitation', 'simplified', 'shape', 'mass', 'distribution', 'seed', 'paper', 'artificial'],
    feedbackHit: 'Valid limitation of using the paper model identified.',
    feedbackMiss: 'Think about what is different between the paper model and a real ash seed (shape, mass, material, wing structure).',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Increase the number of trials (repeats) for each drop height to at least 3 or more to calculate a more reliable mean and identify anomalous results. This reduces the effect of random errors and improves reliability.',
    keyConcepts: ['increase number of repeats trials', 'calculate mean reduces random error', 'identify anomalous results', 'more data more reliable'],
    keywords: ['repeat', 'trial', 'mean', 'average', 'reliability', 'anomaly', 'random error'],
    feedbackHit: 'Correct — more repeats improve reliability by reducing random error.',
    feedbackMiss: 'Only 2 trials were done. Adding more repeats lets you calculate a mean and spot anomalous results, making the data more reliable.',
  },

  // ── Question 6 — Design Investigation (Criterion B rubric) ───────────────

  q6_a: {
    marks: 16,
    exemplar: 'A complete investigation design addressing: focused research question stating IV (number of paperclips / mass) and DV (time in air); identification of IV, DV, and at least 2 CVs (e.g. drop height, wing size, paper type); clear step-by-step method (make the model, attach a set number of paperclips, weigh it, drop from a fixed height, time the fall, repeat for 1–5 paperclips); safety consideration (e.g. standing on a step stool with a partner steadying it); data table with appropriate headings and units; data processing plan (mean time, graph of number of paperclips vs mean time, line of best fit, identify trend, conclusion).',
    keyConcepts: ['research question IV paperclips mass DV time', 'controlled variables listed', 'step by step method reproducible', 'safety consideration identified', 'data table with units', 'data processing plan graph mean'],
    keywords: ['research question', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'data table', 'mean', 'graph', 'conclusion'],
    feedbackHit: 'Well-structured investigation design covering all key elements of Criterion B.',
    feedbackMiss: 'A full design needs: research question, all 3 variable types, reproducible method, safety notes, data table with units, and a plan for processing data into a graph/conclusion.',
  },

  // ── Question 7 — Dehydration, Osmosis & Distillation Desalination ────────

  q7_a: {
    marks: 4,
    exemplar: 'Transport of substances in the blood: dehydration reduces the volume of water in the blood plasma, so the blood becomes thicker/more concentrated and flows less easily; this slows the delivery of oxygen, glucose and other substances to cells and the removal of waste. Digestion of food: water is needed to make digestive juices/saliva and to soften food; with less water, digestion is less efficient, food is harder to break down and move through the gut, and constipation can occur.',
    keyConcepts: ['less water in plasma blood thicker', 'slower transport of oxygen glucose waste', 'less water for digestive juices saliva', 'digestion less efficient constipation'],
    keywords: ['blood', 'plasma', 'transport', 'thicker', 'digestion', 'digestive juices', 'saliva', 'gut', 'dehydration'],
    feedbackHit: 'Good explanation of dehydration effects on blood transport and digestion.',
    feedbackMiss: 'Dehydration → less water → (transport) blood becomes thicker/concentrated, so substances move more slowly; (digestion) less water for digestive juices, so food is harder to break down and move.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Net movement of water is into the cell (from low solute/high water concentration outside to high solute/low water concentration inside). The arrows pointing into the cell (A and C in the diagram) represent the net movement. Award 2 marks for showing net movement INTO the cell by osmosis.',
    keyConcepts: ['water moves from low solute to high solute', 'net movement into cell', 'osmosis down water potential gradient', 'arrows pointing into cell'],
    keywords: ['osmosis', 'net movement', 'into cell', 'water potential', 'solute concentration', 'arrows', 'semipermeable'],
    feedbackHit: 'Correct — water moves into the cell by osmosis (from low to high solute concentration).',
    feedbackMiss: 'Osmosis: water moves from low solute concentration (outside) to high solute concentration (inside) — net movement is INTO the cell.',
  },

  q7_c: {
    marks: 5,
    exemplar: 'Ecosystem impacts (up to 2 marks): drawing up seawater can harm marine organisms (sucked into intakes); the hot, very salty brine discharged back into the sea raises local temperature and salinity, harming marine life/coral reefs. Energy consequences (up to 2 marks): boiling seawater needs a very large amount of heat energy = high energy use; if this energy comes from fossil fuels it increases CO₂ emissions and contributes to climate change, and it is expensive. Concluding appraisal (1 mark): overall distillation desalination provides reliable clean freshwater in water-scarce coastal regions, but its high energy demand and brine discharge make it costly and environmentally damaging; using waste heat or renewable energy and treating the brine would reduce its impact.',
    keyConcepts: ['marine organisms harmed by seawater intake', 'hot brine discharge increases temperature salinity', 'boiling needs large energy fossil fuels CO2', 'climate change from energy use expensive', 'benefits reliable freshwater water scarce coast', 'renewable energy or waste heat reduces impact'],
    keywords: ['ecosystem', 'marine', 'salinity', 'brine', 'energy', 'boil', 'fossil fuel', 'CO2', 'climate change', 'freshwater', 'renewable', 'conclusion', 'appraisal'],
    feedbackHit: 'Good balanced discussion of ecosystem impacts, energy consequences, and a concluding appraisal.',
    feedbackMiss: 'Structure your answer: 1) ecosystem impacts (harm to marine life, hot brine discharge), 2) energy consequences (boiling needs lots of energy, CO₂ if fossil fuels), 3) concluding appraisal (reliable clean water vs high energy cost and environmental damage).',
  },

  // ── Question 8 — Nitrogen Cycle & Sustainability ─────────────────────────

  q8_a: {
    marks: 1,
    exemplar: 'All four labels correctly placed: Nitrogen fixation (nitrogen gas → nitrates in the soil), Decomposition (dead matter → nitrates in the soil), Denitrification (nitrates in the soil → nitrogen gas in the air), Absorption (nitrates taken up by plant roots). Award 1 mark for all correct.',
    keyConcepts: ['nitrogen fixation N2 to nitrates', 'decomposition dead matter to nitrates', 'denitrification nitrates to N2 gas', 'absorption nitrates into roots'],
    keywords: ['nitrogen fixation', 'decomposition', 'denitrification', 'absorption', 'nitrogen cycle', 'nitrate'],
    feedbackHit: 'All nitrogen cycle labels correctly placed.',
    feedbackMiss: 'Nitrogen cycle: Fixation (N₂ gas → nitrates) → Absorption (roots take up nitrates) → Decomposition (dead matter → nitrates) → Denitrification (nitrates → N₂ gas).',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Too much nitrate (heavy fertiliser use): nitrates wash into rivers/lakes (leaching) causing eutrophication — algal blooms, oxygen depletion and death of fish and other aquatic life; contamination of drinking water. (1 mark for any one reasonable consequence.) Too little nitrate (poor soils): plants cannot make enough protein, so they grow poorly, leaves yellow and crop yields fall, reducing food available for animals and people. (1 mark for any one reasonable consequence.)',
    keyConcepts: ['excess nitrate leaching eutrophication algal bloom oxygen death of fish', 'too little nitrate poor plant growth low yield protein shortage'],
    keywords: ['eutrophication', 'algal bloom', 'leaching', 'oxygen', 'fish', 'yield', 'protein', 'growth', 'nitrate', 'fertiliser'],
    feedbackHit: 'One consequence of too much and one of too little nitrate correctly identified.',
    feedbackMiss: 'Too much nitrate → leaching → eutrophication (algal blooms, low oxygen, fish die). Too little nitrate → plants grow poorly, low protein, low crop yields.',
  },

  q8_c: {
    marks: 12,
    exemplar: 'Reducing nitrate pollution on farms (up to 3 marks): 1=statement of a farming action (use less fertiliser, plant buffer strips, crop rotation with legumes); 2=statement + justification of how one action reduces pollution (e.g. buffer strips of plants beside rivers absorb run-off before it reaches the water); 3=two actions stated + both justified.\n\nFood choices and nitrogen use (up to 4 marks): 1=simple reference to fertiliser/nitrogen used to grow food; 2=effect of one food choice on fertiliser demand; 3=effect of two choices + one supported by evidence; 4=effect of two choices both supported by evidence (e.g. producing meat needs large amounts of fertilised feed crops, so eating less meat and more plants directly lowers the nitrogen fertiliser needed; buying local/seasonal food reduces nitrogen use).\n\nGovernment policies (up to 3 marks): 1=one government action stated (limits on fertiliser use, subsidies for low-input farming, education); 2=one action + how it reduces nitrate pollution; 3=two actions both explained.\n\nConcluding appraisal (up to 2 marks): 1=basic conclusion (farmers and individuals can reduce nitrate pollution); 2=appraisal comparing individual/farmer and government actions (e.g. individual food choices help but most fertiliser is applied by large farms, so government limits and farmer practices have the biggest impact, while education builds long-term change).',
    keyConcepts: ['farming actions less fertiliser buffer strips crop rotation legumes', 'justify how action reduces nitrate pollution', 'meat needs more fertilised feed crops eat less meat', 'local seasonal food lowers nitrogen use', 'government policy fertiliser limits subsidies education', 'individual action small scale government farm large scale', 'balanced concluding appraisal'],
    keywords: ['fertiliser', 'buffer strip', 'crop rotation', 'legume', 'eutrophication', 'food choice', 'meat', 'plant-based', 'government', 'limit', 'subsidy', 'sustainable', 'conclusion', 'appraisal'],
    feedbackHit: 'Comprehensive evaluation of farmer, individual and government actions for sustainable nitrogen use.',
    feedbackMiss: 'Structure: (1) farming actions with justified ways to cut nitrate run-off; (2) food choices — meat vs plant-based fertiliser demand with evidence; (3) government policies (limits, subsidies) explained; (4) balanced conclusion comparing the scale of individual vs farmer/government impact.',
  },
}
