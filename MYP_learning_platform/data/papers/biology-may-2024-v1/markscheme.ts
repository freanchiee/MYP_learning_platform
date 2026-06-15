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

// ── Mark Scheme — Biology May 2024 · VARIANT 1 ──────────────────────────────
// Isomorphic to biology-may-2024. Every answer RECOMPUTED for the new contexts:
// jackrabbit / water-lily / marram · Arctic tundra food web / Arctic wolf ·
// English oak (circ 220 cm, GF 1.00 → 70 yr) · silver birch (GF 1.66, circ 180 cm
// → 95 yr) · paper spinner · solar still · carbon cycle.

export const MS: Record<string, MSRecord> = {

  // ── Question 1 — Life Processes & Homeostasis ─────────────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Removal of toxic waste products of metabolism = Excretion; Taking in of materials for energy, growth and development = Nutrition; Detecting changes in the surroundings = Sensitivity (accept Response).',
    keyConcepts: ['excretion removes metabolic waste', 'nutrition takes in materials', 'sensitivity detects stimuli'],
    keywords: ['excretion', 'nutrition', 'sensitivity', 'response', 'waste', 'stimulus'],
    feedbackHit: 'Correct identification of life processes.',
    feedbackMiss: 'Remember: Excretion = removing metabolic waste; Nutrition = taking in food/materials; Sensitivity = detecting changes in the surroundings.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'A jackrabbit\'s ears have a large surface area which allows more heat to be lost/radiated to the environment. Many blood vessels run close to the surface of the thin ears, so heat is lost by radiation/convection, cooling the blood and helping to maintain a stable body temperature in the hot desert.',
    keyConcepts: ['large surface area increases heat loss', 'blood vessels near surface of ear', 'radiation heat loss', 'maintains stable body temperature homeostasis'],
    keywords: ['surface area', 'heat loss', 'radiation', 'blood vessels', 'homeostasis', 'temperature'],
    feedbackHit: 'Good explanation linking ear surface area to heat loss and homeostasis.',
    feedbackMiss: 'Jackrabbits use their large thin ears as radiators — blood flows through many vessels near the surface, losing heat to the surrounding air to keep cool.',
  },

  q1_c: {
    marks: 2,
    exemplar: 'A large surface area allows more light to be absorbed for photosynthesis. The large flat pad also allows more CO₂ to enter through stomata, increasing the rate of photosynthesis and therefore energy/sugar production for the plant.',
    keyConcepts: ['large surface area absorbs more light', 'more stomata allow greater CO2 absorption', 'increases rate of photosynthesis'],
    keywords: ['photosynthesis', 'light absorption', 'stomata', 'CO2', 'surface area'],
    feedbackHit: 'Correct advantage of large pad surface area for photosynthesis.',
    feedbackMiss: 'Large lily pads absorb more sunlight and CO₂ — both are needed for photosynthesis, which provides the plant with glucose/energy.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'A small (rolled) surface area reduces water loss by transpiration/evaporation, which is an advantage on exposed, windy sand dunes where water is scarce. Rolling traps moist air and shelters the stomata, preventing dehydration and allowing marram grass to survive in dry, sandy conditions.',
    keyConcepts: ['small surface area reduces water loss', 'transpiration reduced', 'rolled leaf shelters stomata', 'survival in dry windy dune conditions'],
    keywords: ['water loss', 'transpiration', 'evaporation', 'dune', 'rolled', 'surface area', 'stomata'],
    feedbackHit: 'Correct — small/rolled surface area minimises water loss, crucial for dune survival.',
    feedbackMiss: 'On a windy dune water is scarce. A small rolled leaf shelters the stomata, so less water is lost through transpiration.',
  },

  q1_e: {
    marks: 3,
    exemplar: 'A high SA:V ratio means more surface area is available relative to the volume of the cell. This allows nutrients (e.g. glucose, oxygen) to diffuse in quickly and waste products (e.g. CO₂) to diffuse out quickly. If the ratio were low, the diffusion distance to the centre would be too great and the middle of the cell would not receive enough nutrients/oxygen, limiting metabolic activity.',
    keyConcepts: ['more surface area relative to volume', 'faster diffusion of nutrients into cell', 'faster removal of waste products', 'diffusion distance short', 'efficient metabolic activity'],
    keywords: ['surface area', 'volume', 'diffusion', 'nutrients', 'oxygen', 'waste', 'CO2', 'glucose', 'metabolism'],
    feedbackHit: 'Excellent explanation of SA:V ratio and cell efficiency.',
    feedbackMiss: 'A high SA:V ratio means the cell surface is large compared to its internal volume, so substances can diffuse in/out quickly — the centre is never too far from the membrane.',
  },

  // ── Question 2 — Arctic Tundra Food Web ──────────────────────────────────

  q2_a: {
    marks: 3,
    exemplar: 'A valid 5-species food chain with Arctic fox at the 4th trophic level, e.g.: Lichen & moss → Lemming → Ptarmigan → Arctic fox → Arctic wolf. Arrows must show direction of energy flow (prey → predator).',
    keyConcepts: ['lichen moss producer trophic 1', 'arctic fox fourth trophic level', 'arrows show energy flow direction', 'five species in chain'],
    keywords: ['food chain', 'trophic level', 'producer', 'consumer', 'energy flow', 'arrow'],
    feedbackHit: 'Correct food chain with Arctic fox at the 4th trophic level.',
    feedbackMiss: 'The chain must have exactly 5 organisms with Arctic fox 4th. Arrows should point from prey to predator (energy direction). Lichen & moss must be at level 1.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'The Arctic wolf feeds at trophic levels 3 and 4. It eats Arctic hares and ptarmigan (level 2 herbivores), placing it at level 3; it also eats the Arctic fox (a level-3 carnivore), placing it at level 4. Award 1 mark for each correct trophic level stated (3 and 4).',
    keyConcepts: ['arctic wolf trophic level 3', 'arctic wolf trophic level 4', 'feeds at multiple trophic levels'],
    keywords: ['trophic level', 'arctic wolf', 'consumer', 'top predator'],
    feedbackHit: 'Correct trophic levels for the Arctic wolf.',
    feedbackMiss: 'Check all the arrows pointing to the Arctic wolf in the food web — eating a herbivore puts it at level 3, eating the fox puts it at level 4.',
  },

  q2_c: {
    marks: 3,
    exemplar: 'For organisms to be classified as different species they must be unable to interbreed to produce fertile offspring (biological species concept). Different physical features (coat colour, size) and habitats alone are not sufficient — variation within a species can produce different physical traits due to different environments. Without data on whether they can interbreed, we cannot conclude they are separate species.',
    keyConcepts: ['species definition unable to interbreed', 'produce fertile offspring species criterion', 'physical differences insufficient alone', 'need interbreeding data'],
    keywords: ['species', 'interbreed', 'fertile', 'offspring', 'classification', 'variation', 'physical features'],
    feedbackHit: 'Good use of the biological species concept — interbreeding is the key criterion.',
    feedbackMiss: 'Species are defined by reproductive isolation: if they can interbreed and produce fertile offspring, they are the same species regardless of coat colour or habitat differences.',
  },

  q2_d: {
    marks: 4,
    exemplar: 'Genome mapping allows scientists to compare the DNA sequences of the different wolf types. If the genome sequences are very similar (high percentage identity), they are likely the same species. If there are significant differences in key genes (e.g. those controlling reproduction), they may be different species. Scientists can also look for genes that would prevent successful interbreeding. This gives more objective, quantitative data than physical features alone.',
    keyConcepts: ['compare DNA sequences genome', 'high similarity same species', 'significant differences different species', 'reproductive isolation genes', 'quantitative objective evidence'],
    keywords: ['genome', 'DNA', 'sequence', 'similarity', 'comparison', 'genes', 'reproductive', 'species', 'objective'],
    feedbackHit: 'Excellent — genome comparison provides objective evidence for species classification.',
    feedbackMiss: 'Genome mapping shows how similar the DNA of the wolf types is. Very similar DNA = likely same species; large differences in key genes = possibly different species.',
  },

  // ── Question 3 — Tree Age Estimation (English Oak) ───────────────────────

  q3_a: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q3_b: {
    marks: 3,
    exemplar: 'age = (circumference ÷ π) × growth factor = (220 ÷ π) × 1.00 = (220 ÷ 3.14159) × 1 = 70.03 ≈ 70 years. Award: 1 mark for correct formula substitution; 1 mark for correct calculation of circumference ÷ π (≈70.0); 1 mark for correct final answer (70 years, accept 69–71).',
    keyConcepts: ['formula age = circumference divided by pi times growth factor', 'circumference 220 cm divided by pi', 'growth factor 1.00 for oak', 'answer 70 years'],
    keywords: ['circumference', 'pi', 'growth factor', 'age', 'oak', '220', '70', 'calculation'],
    feedbackHit: 'Correct calculation — 70 years.',
    feedbackMiss: 'Use: age = (circumference ÷ π) × growth factor. For the oak: (220 ÷ 3.14159) × 1.00 ≈ 70 years.',
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

  // ── Question 4 — Silver Birch Investigation ──────────────────────────────

  q4_a: {
    marks: 2,
    exemplar: 'Random sampling avoids bias in selection — without it, students might unconsciously select larger/smaller/more accessible trees, which would not represent the whole woodland. Random selection ensures every tree has an equal chance of being included, making the sample more representative of all 600+ silver birch trees.',
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
    exemplar: 'Award marks for: both axes correctly labelled with units (Age/years on x-axis, Height/m on y-axis) [1]; appropriate scale on both axes [1]; all 5 data points plotted correctly (75yr/18m, 45yr/14m, 25yr/10m, 15yr/6m, 5yr/2m) [2, lose 1 for each error]; straight line of best fit drawn through the data [1].',
    keyConcepts: ['x-axis age years', 'y-axis height metres', 'all five points correctly plotted', 'line of best fit drawn', 'appropriate scale'],
    keywords: ['axis', 'label', 'units', 'scale', 'plot', 'point', 'line of best fit', 'graph'],
    feedbackHit: 'Graph correctly drawn with all points plotted and a line of best fit.',
    feedbackMiss: 'Check: axes labelled with units? Scale appropriate? All 5 points plotted (75/18, 45/14, 25/10, 15/6, 5/2)? Line of best fit drawn (not dot-to-dot)?',
  },

  q4_d: {
    marks: 2,
    exemplar: 'From the graph, a change of 70 years (from 5 to 75 years) corresponds to a change in height of 16 m (from 2 to 18 m). Growth rate = 16 ÷ 70 ≈ 0.23 m/year. Accept values read from the line of best fit (approximately 0.22–0.24 m/year).',
    keyConcepts: ['gradient of line of best fit', 'change in height divided by change in age', 'approximately 0.23 m per year'],
    keywords: ['gradient', 'growth rate', 'metres per year', 'line of best fit', 'calculate', '0.23'],
    feedbackHit: 'Correct calculation of growth rate from the graph gradient.',
    feedbackMiss: 'Growth rate = rise ÷ run = (change in height) ÷ (change in age). Read two points from your line of best fit, e.g. (5,2) and (75,18) → 16 ÷ 70 ≈ 0.23 m/year.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'The prediction may not be reliable because the data only goes up to 75 years — predicting at 100 years is extrapolation, which assumes the linear trend continues. Older trees may grow more slowly as they reach their maximum height, so the line may not stay straight; a larger sample might also show a different pattern.',
    keyConcepts: ['extrapolation beyond data range unreliable', 'trend may not continue linearly', 'growth rate may slow with age', 'limited sample size'],
    keywords: ['extrapolation', 'beyond data', 'unreliable', 'trend', 'sample size', 'linear'],
    feedbackHit: 'Good — extrapolation beyond the data range can be unreliable.',
    feedbackMiss: 'The data only goes to 75 years. Predicting at 100 years means extrapolating — the growth rate might slow as trees age, so the linear trend may not continue.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'age = (180 ÷ π) × 1.66 = (180 ÷ 3.14159) × 1.66 = 57.30 × 1.66 ≈ 95.1 ≈ 95 years.',
    keyConcepts: ['circumference 180 divided by pi', 'multiply by growth factor 1.66', 'answer approximately 95 years'],
    keywords: ['circumference', 'pi', 'growth factor', '1.66', 'silver birch', '95'],
    feedbackHit: 'Correct — approximately 95 years.',
    feedbackMiss: 'age = (180 ÷ 3.14159) × 1.66 = 57.3 × 1.66 ≈ 95 years.',
  },

  // ── Question 5 — Paper Spinner Experiment ────────────────────────────────

  q5_a: {
    marks: 2,
    exemplar: 'Independent variable (IV): the height from which the spinner is dropped (in metres). Dependent variable (DV): the time the spinner spends in the air (in seconds).',
    keyConcepts: ['independent variable drop height', 'dependent variable time in air', 'IV is what you change', 'DV is what you measure'],
    keywords: ['independent', 'dependent', 'variable', 'drop height', 'time', 'air', 'IV', 'DV'],
    feedbackHit: 'Correct identification of IV and DV.',
    feedbackMiss: 'IV = what you change (drop height); DV = what you measure as a result (time in air).',
  },

  q5_b: {
    marks: 2,
    exemplar: 'Any two of: size/shape of the paper spinner (same template); mass of the spinner (same paperclip); location/air currents (same room, no wind/draught); person releasing the spinner; orientation of the spinner when released; type of paper used.',
    keyConcepts: ['spinner size same', 'mass paperclip same', 'location wind conditions controlled', 'same person releasing'],
    keywords: ['controlled', 'variable', 'constant', 'paperclip', 'size', 'shape', 'wind', 'location'],
    feedbackHit: 'Two valid controlled variables identified.',
    feedbackMiss: 'Controlled variables must be kept constant. Think: what else could affect the time apart from drop height?',
  },

  q5_c: {
    marks: 2,
    exemplar: 'As the height from which the spinner is dropped increases, the time spent in the air also increases. There is a positive correlation between drop height and time in air, and the relationship appears to be roughly linear/proportional.',
    keyConcepts: ['as height increases time increases', 'positive correlation', 'greater height longer time in air'],
    keywords: ['positive correlation', 'increases', 'proportional', 'height', 'time', 'pattern', 'relationship'],
    feedbackHit: 'Correct pattern described — positive correlation between height and time.',
    feedbackMiss: 'Look at how time changes as height increases. Does time go up, go down, or stay the same?',
  },

  q5_d: {
    marks: 2,
    exemplar: 'A paper spinner is a simplified model — it does not have the same shape, mass distribution, or material as a real sycamore seed. A real seed is irregular and may not spin uniformly, whereas the paper model is symmetric. The added paperclip changes the mass distribution compared with a real seed, so it may not fall in the same way.',
    keyConcepts: ['paper model simplified not identical to real seed', 'different shape or mass distribution', 'paperclip changes mass real seed has no clip', 'model may not spin like real seed'],
    keywords: ['model', 'limitation', 'simplified', 'shape', 'mass', 'distribution', 'seed', 'paper', 'artificial'],
    feedbackHit: 'Valid limitation of using the paper model identified.',
    feedbackMiss: 'Think about what is different between the paper spinner and a real sycamore seed (shape, mass, material, symmetry).',
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
    exemplar: 'A complete investigation design addressing: focused research question stating IV (wing/blade length) and DV (time in air); identification of IV, DV, and at least 2 CVs (e.g. drop height, paper type, mass/paperclip); clear step-by-step method (make spinner, cut blades to set length, measure length, drop from a fixed height, time the fall, repeat); safety consideration (e.g. standing on a step stool with a partner steadying it); data table with appropriate headings and units; data processing plan (mean time, graph of blade length vs mean time, line of best fit, identify trend, conclusion).',
    keyConcepts: ['research question IV blade length DV time', 'controlled variables listed', 'step by step method reproducible', 'safety consideration identified', 'data table with units', 'data processing plan graph mean'],
    keywords: ['research question', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'data table', 'mean', 'graph', 'conclusion'],
    feedbackHit: 'Well-structured investigation design covering all key elements of Criterion B.',
    feedbackMiss: 'A full design needs: research question, all 3 variable types, reproducible method, safety notes, data table with units, and a plan for processing data into a graph/conclusion.',
  },

  // ── Question 7 — Dehydration, Osmosis & Solar Still ──────────────────────

  q7_a: {
    marks: 4,
    exemplar: 'Excretion of waste: dehydration means less water is available for urine production, so urine becomes more concentrated; toxic waste products (urea) may build up in the blood as the kidneys cannot flush them out effectively. Temperature control: dehydration reduces sweat production, so less cooling by evaporation occurs; body temperature rises and it becomes harder to maintain a stable internal temperature (homeostasis is disrupted).',
    keyConcepts: ['less water urine more concentrated', 'waste products build up in blood', 'less sweat produced dehydration', 'body temperature rises harder to regulate', 'homeostasis disrupted'],
    keywords: ['urine', 'concentrated', 'waste', 'urea', 'sweat', 'evaporation', 'temperature', 'homeostasis', 'dehydration'],
    feedbackHit: 'Good explanation of dehydration effects on excretion and temperature control.',
    feedbackMiss: 'Dehydration → less water → (excretion) urine concentrated, waste builds up; (temperature) less sweat → less cooling → body overheats.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Net movement of water is into the cell (from low solute/high water concentration outside to high solute/low water concentration inside). The arrows pointing into the cell represent the net movement. Award 2 marks for showing net movement INTO the cell by osmosis.',
    keyConcepts: ['water moves from low solute to high solute', 'net movement into cell', 'osmosis down water potential gradient', 'arrows pointing into cell'],
    keywords: ['osmosis', 'net movement', 'into cell', 'water potential', 'solute concentration', 'arrows', 'semipermeable'],
    feedbackHit: 'Correct — water moves into the cell by osmosis (from low to high solute concentration).',
    feedbackMiss: 'Osmosis: water moves from low solute concentration (outside) to high solute concentration (inside) — net movement is INTO the cell.',
  },

  q7_c: {
    marks: 5,
    exemplar: 'Ecosystem impacts (up to 2 marks): drawing up seawater can harm small marine organisms; the salty brine left behind in the basin, if returned to the sea, increases local salinity and harms marine life/coral. Energy/sunlight consequences (up to 2 marks): the solar still relies entirely on sunlight, so it produces freshwater slowly and only works well in sunny weather — output is unreliable on cloudy days and at night; however it uses free, renewable solar energy and produces almost no CO₂. Concluding appraisal (1 mark): overall the solar still is a low-cost, low-emission way to provide small amounts of clean freshwater in sunny, water-scarce regions, but its low and weather-dependent output limits its use for large-scale supply.',
    keyConcepts: ['marine organisms harmed by seawater extraction', 'brine increases local salinity', 'relies on sunlight slow weather dependent', 'renewable solar energy low CO2', 'benefits freshwater in sunny water scarce regions', 'low output limits large scale use'],
    keywords: ['ecosystem', 'marine', 'salinity', 'brine', 'sunlight', 'solar', 'renewable', 'weather', 'CO2', 'freshwater', 'conclusion', 'appraisal'],
    feedbackHit: 'Good balanced discussion of ecosystem impacts, the sunlight energy source, and a concluding appraisal.',
    feedbackMiss: 'Structure your answer: 1) ecosystem impacts (harm to marine organisms, salty brine), 2) consequences of relying on sunlight (slow, weather-dependent, but free and clean), 3) concluding appraisal (low-cost clean water vs low output).',
  },

  // ── Question 8 — Carbon Cycle & Sustainability ───────────────────────────

  q8_a: {
    marks: 1,
    exemplar: 'All four labels correctly placed: Photosynthesis (plants remove CO₂ from the air), Respiration (animals/plants release CO₂ to the air), Combustion (burning fossil fuels releases CO₂), Feeding (carbon passes from plants to animals). Award 1 mark for all correct.',
    keyConcepts: ['photosynthesis removes CO2', 'respiration releases CO2', 'combustion burning fuels releases CO2', 'feeding transfers carbon plants to animals'],
    keywords: ['photosynthesis', 'respiration', 'combustion', 'feeding', 'carbon cycle'],
    feedbackHit: 'All carbon cycle labels correctly placed.',
    feedbackMiss: 'Carbon cycle processes: Photosynthesis (plants take in CO₂) → Feeding (carbon to animals) → Respiration (CO₂ back to air) → Combustion (burning fuels adds CO₂).',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Increased atmospheric CO₂: enhanced greenhouse effect/global warming; rising temperatures; melting ice; rising sea levels; more extreme weather; ocean acidification. (1 mark for any one reasonable consequence.) Decreased atmospheric CO₂: less photosynthesis/slower plant growth; cooling of the planet; reduced crop yields. (1 mark for any one reasonable consequence.)',
    keyConcepts: ['increased CO2 greenhouse effect global warming melting ice', 'decreased CO2 less photosynthesis cooling reduced plant growth'],
    keywords: ['global warming', 'greenhouse', 'temperature', 'sea level', 'photosynthesis', 'cooling', 'carbon dioxide', 'climate change'],
    feedbackHit: 'One consequence of increased and one of decreased atmospheric CO₂ correctly identified.',
    feedbackMiss: 'More CO₂ → enhanced greenhouse effect, warming, melting ice. Less CO₂ → less photosynthesis, slower plant growth, cooling.',
  },

  q8_c: {
    marks: 12,
    exemplar: 'Home carbon reduction (up to 3 marks): 1=statement of a way carbon is emitted at home (heating, electricity, car travel); 2=statement + justification of how one source can be reduced (e.g. lower the thermostat / switch to LED bulbs to use less electricity); 3=two actions stated + both justified.\n\nDietary carbon footprint (up to 4 marks): 1=simple reference to carbon emitted in food production or transport; 2=effect of one dietary choice on the footprint; 3=effect of two choices + one supported by evidence; 4=effect of two choices both supported by evidence (e.g. beef produces ~60 kg CO₂e per kg, far more than vegetables; eating local, plant-based food lowers the footprint).\n\nGovernment policies (up to 3 marks): 1=one government action stated (carbon tax, renewable subsidy, education); 2=one action + how it reduces emissions; 3=two actions both explained.\n\nConcluding appraisal (up to 2 marks): 1=basic conclusion (individuals can reduce their emissions); 2=appraisal comparing individual and government actions (e.g. individual choices help but are small compared with industry/power generation, so government policy and renewable energy have the largest impact, while education builds long-term change).',
    keyConcepts: ['home carbon use examples heating electricity travel', 'justify how home emissions reduced', 'meat high carbon footprint beef 60 kg CO2 per kg', 'plant based local food lower footprint', 'government policy carbon tax renewable subsidy education', 'individual action small scale government large scale', 'balanced concluding appraisal'],
    keywords: ['carbon footprint', 'dietary choice', 'beef', 'plant-based', 'government', 'carbon tax', 'renewable', 'subsidy', 'individual', 'sustainable', 'home', 'electricity', 'conclusion', 'appraisal'],
    feedbackHit: 'Comprehensive evaluation of individual and government actions to reduce carbon emissions.',
    feedbackMiss: 'Structure: (1) home emissions with justified ways to reduce; (2) dietary choices — meat vs plant-based carbon footprint with evidence; (3) government policies (carbon tax, subsidies) explained; (4) balanced conclusion comparing the scale of individual vs government impact.',
  },
}
