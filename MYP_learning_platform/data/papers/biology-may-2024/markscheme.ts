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

// ── Mark Scheme — Biology May 2024 ──────────────────────────────────────────

export const MS: Record<string, MSRecord> = {

  // ── Question 1 — Life Processes & Homeostasis ─────────────────────────────

  q1_a: {
    marks: 2,
    exemplar: 'Production of offspring = Reproduction; Permanent increase in size = Growth; Reaction to an internal or external stimulus = Sensitivity/Response.',
    keyConcepts: ['reproduction produces offspring', 'growth permanent increase size', 'sensitivity response stimulus'],
    keywords: ['reproduction', 'growth', 'sensitivity', 'response', 'stimulus'],
    feedbackHit: 'Correct identification of life processes.',
    feedbackMiss: 'Remember: Reproduction = producing offspring; Growth = permanent increase in size; Sensitivity = reacting to stimuli.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Elephant ears have a large surface area which allows more heat to be lost/radiated to the environment. Blood vessels in the ears are close to the surface, increasing heat loss by radiation/convection, thus cooling the blood and maintaining stable body temperature.',
    keyConcepts: ['large surface area increases heat loss', 'blood vessels near surface', 'radiation heat loss', 'maintains stable body temperature homeostasis'],
    keywords: ['surface area', 'heat loss', 'radiation', 'blood vessels', 'homeostasis', 'temperature'],
    feedbackHit: 'Good explanation linking ear surface area to heat loss and homeostasis.',
    feedbackMiss: 'Elephants use their large ears as radiators — blood flows through many vessels near the surface, losing heat to the surrounding air.',
  },

  q1_c: {
    marks: 2,
    exemplar: 'A large surface area allows more light to be absorbed for photosynthesis. A larger area also allows more CO₂ to enter through stomata, increasing the rate of photosynthesis and therefore energy/sugar production.',
    keyConcepts: ['large surface area absorbs more light', 'more stomata allow greater CO2 absorption', 'increases rate of photosynthesis'],
    keywords: ['photosynthesis', 'light absorption', 'stomata', 'CO2', 'surface area'],
    feedbackHit: 'Correct advantage of large leaf surface area for photosynthesis.',
    feedbackMiss: 'Large leaves absorb more sunlight and CO₂ — both are needed for photosynthesis, which provides the tree with glucose/energy.',
  },

  q1_d: {
    marks: 2,
    exemplar: 'A small surface area reduces water loss by transpiration/evaporation, which is an advantage in dry/desert conditions where water is scarce. This prevents dehydration and allows the cactus to survive in arid environments.',
    keyConcepts: ['small surface area reduces water loss', 'transpiration reduced', 'survival in dry desert conditions'],
    keywords: ['water loss', 'transpiration', 'evaporation', 'desert', 'arid', 'surface area'],
    feedbackHit: 'Correct — small surface area minimises water loss, crucial for desert survival.',
    feedbackMiss: 'In a desert, water is scarce. Small surface area = fewer stomata = less water lost through transpiration.',
  },

  q1_e: {
    marks: 3,
    exemplar: 'A high SA:V ratio means more surface area is available relative to the volume of the cell. This allows nutrients (e.g. glucose, oxygen) to diffuse in quickly and waste products (e.g. CO₂) to diffuse out quickly. If the ratio were low, the diffusion distance would be too great and the centre of the cell would not receive enough nutrients/oxygen, limiting metabolic activity.',
    keyConcepts: ['more surface area relative to volume', 'faster diffusion of nutrients into cell', 'faster removal of waste products', 'diffusion distance short', 'efficient metabolic activity'],
    keywords: ['surface area', 'volume', 'diffusion', 'nutrients', 'oxygen', 'waste', 'CO2', 'glucose', 'metabolism'],
    feedbackHit: 'Excellent explanation of SA:V ratio and cell efficiency.',
    feedbackMiss: 'A high SA:V ratio means the cell surface is large compared to its internal volume, so substances can diffuse in/out quickly — the centre is never too far from the membrane.',
  },

  // ── Question 2 — North Pacific Food Web ──────────────────────────────────

  q2_a: {
    marks: 3,
    exemplar: 'A valid 5-species food chain with Pacific halibut at the 4th trophic level, e.g.: Phytoplankton → Copepods → Pacific herring → Pacific halibut → Resident killer whale. Arrows must show direction of energy flow (prey → predator).',
    keyConcepts: ['phytoplankton producer trophic 1', 'pacific halibut fourth trophic level', 'arrows show energy flow direction', 'five species in chain'],
    keywords: ['food chain', 'trophic level', 'producer', 'consumer', 'energy flow', 'arrow'],
    feedbackHit: 'Correct food chain with halibut at the 4th trophic level.',
    feedbackMiss: 'The chain must have exactly 5 organisms with Pacific halibut 4th. Arrows should point from prey to predator (energy direction). Phytoplankton must be at level 1.',
  },

  q2_b: {
    marks: 2,
    exemplar: 'The resident killer whale feeds at trophic levels 4 and 5 (it eats Pacific halibut which is at level 4 and also eats Chinook salmon at level 3, making killer whale level 4; but it also eats other organisms at different levels). Award 1 mark for each correct trophic level stated (4 and 5).',
    keyConcepts: ['killer whale trophic level 4', 'killer whale trophic level 5', 'omnivore multiple trophic levels'],
    keywords: ['trophic level', 'killer whale', 'consumer', 'top predator'],
    feedbackHit: 'Correct trophic levels for killer whale.',
    feedbackMiss: 'Check all the arrows pointing to the killer whale in the food web — each prey species tells you a trophic level.',
  },

  q2_c: {
    marks: 3,
    exemplar: 'For organisms to be classified as different species they must be unable to interbreed to produce fertile offspring (biological species concept). Different physical features and diets alone are not sufficient — variation within a species can lead to different physical traits (e.g. due to different diets/environments). Without data on whether they can interbreed, we cannot conclude they are separate species.',
    keyConcepts: ['species definition unable to interbreed', 'produce fertile offspring species criterion', 'physical differences insufficient alone', 'need interbreeding data'],
    keywords: ['species', 'interbreed', 'fertile', 'offspring', 'classification', 'variation', 'physical features'],
    feedbackHit: 'Good use of the biological species concept — interbreeding is the key criterion.',
    feedbackMiss: 'Species are defined by reproductive isolation: if they can interbreed and produce fertile offspring, they are the same species regardless of physical differences.',
  },

  q2_d: {
    marks: 4,
    exemplar: 'Genome mapping allows scientists to compare the DNA sequences of the three killer whale types. If the genome sequences are very similar (high percentage identity), they are likely the same species. If there are significant differences in key genes (e.g. those controlling reproduction), they may be different species. Scientists can also look for genes that would prevent successful interbreeding. This provides more objective, quantitative data than physical features alone.',
    keyConcepts: ['compare DNA sequences genome', 'high similarity same species', 'significant differences different species', 'reproductive isolation genes', 'quantitative objective evidence'],
    keywords: ['genome', 'DNA', 'sequence', 'similarity', 'comparison', 'genes', 'reproductive', 'species', 'objective'],
    feedbackHit: 'Excellent — genome comparison provides objective evidence for species classification.',
    feedbackMiss: 'Genome mapping shows how similar the DNA of the killer whale types is. Very similar DNA = likely same species; large differences in key genes = possibly different species.',
  },

  // ── Question 3 — Tree Age Estimation ─────────────────────────────────────

  q3_a: {
    type: 'mcq',
    correct: 1,
  } as MCQEntry,

  q3_b: {
    marks: 3,
    exemplar: 'age = (circumference ÷ π) × growth factor = (170 ÷ π) × 1.00 = (170 ÷ 3.14159) × 1 = 54.11 ≈ 54 years. Award: 1 mark for correct formula substitution; 1 mark for correct calculation of circumference ÷ π; 1 mark for correct final answer (54 years, accept 53–55).',
    keyConcepts: ['formula age = circumference divided by pi times growth factor', 'circumference 170 cm divided by pi', 'growth factor 1.00 for beech', 'answer 54 years'],
    keywords: ['circumference', 'pi', 'growth factor', 'age', 'beech', 'calculation'],
    feedbackHit: 'Correct calculation — 54 years.',
    feedbackMiss: 'Use: age = (circumference ÷ π) × growth factor. For beech: (170 ÷ 3.14159) × 1.00 ≈ 54 years.',
  },

  q3_c: {
    marks: 2,
    exemplar: 'Each year produces two rings — one light ring (spring/summer growth) and one dark ring (autumn growth). Counting both light and dark rings would give double the actual number of years, so the estimate would be twice the real age.',
    keyConcepts: ['one light and one dark ring per year', 'counting both doubles the count', 'two rings equal one year not two'],
    keywords: ['growth ring', 'light ring', 'dark ring', 'spring', 'summer', 'autumn', 'annual', 'double'],
    feedbackHit: 'Correct — each year produces a pair of rings (light + dark), so counting both gives double the age.',
    feedbackMiss: 'Each year produces TWO rings (one light, one dark). If you count both, you divide by 2 — otherwise you\'re counting twice per year.',
  },

  q3_d: {
    marks: 1,
    exemplar: 'The tree has grown for its entire life from the base, so the base contains rings from every year. Higher up the trunk, the tree grew after the base section was formed, so fewer rings would be present — the count would underestimate the age.',
    keyConcepts: ['base contains all growth rings since germination', 'entire lifetime of growth at base', 'more rings at base = more accurate count'],
    keywords: ['base', 'rings', 'all years', 'oldest', 'germination', 'trunk'],
    feedbackHit: 'Correct — the base has been growing longest and contains rings from every year.',
    feedbackMiss: 'The tree starts growing from the base. Higher sections only start accumulating rings after the section forms — so only the base has rings representing every year of the tree\'s life.',
  },

  q3_e: {
    marks: 3,
    exemplar: 'Growth factor values: assumes constant growth rate throughout life; growth factor may vary with environmental conditions (drought, disease); only an average estimate. Counting rings: requires cutting down the tree (destructive); in tropical climates there may be no clear rings as growth is continuous year-round (no seasonal variation); difficult to distinguish rings accurately.',
    keyConcepts: ['growth factor assumes constant growth rate', 'environmental conditions affect growth rate', 'counting rings requires cutting tree destructive', 'tropical trees lack clear seasonal rings'],
    keywords: ['limitation', 'growth factor', 'constant', 'environmental', 'rings', 'tropical', 'seasonal', 'destructive', 'accuracy'],
    feedbackHit: 'Good identification of limitations for both methods.',
    feedbackMiss: 'Growth factor limitation: growth isn\'t always constant (affected by drought/disease). Ring counting limitation: tropical trees don\'t have clear rings because there are no seasons.',
  },

  // ── Question 4 — Sycamore Investigation ──────────────────────────────────

  q4_a: {
    marks: 2,
    exemplar: 'Random sampling avoids bias in selection — without it, students might unconsciously select larger/smaller/more accessible trees, which would not represent the whole forest population. Random selection ensures every tree has an equal chance of being included, making the sample more representative of all 500+ sycamore trees.',
    keyConcepts: ['avoid bias in selection', 'every tree equal chance of selection', 'representative sample of population', 'valid generalisation to all trees'],
    keywords: ['random', 'bias', 'representative', 'population', 'sample', 'valid', 'equal chance'],
    feedbackHit: 'Correct — random sampling prevents bias and ensures representativeness.',
    feedbackMiss: 'Random sampling means every tree has an equal chance of being picked, which avoids the researcher unconsciously choosing particular trees (selection bias).',
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
    exemplar: 'Award marks for: both axes correctly labelled with units (Age/years on x-axis, Height/m on y-axis) [1]; appropriate scale on both axes [1]; all 5 data points plotted correctly (80yr/22m, 40yr/17m, 20yr/12m, 10yr/7m, 5yr/3m) [2, lose 1 for each error]; straight line of best fit drawn through the data [1].',
    keyConcepts: ['x-axis age years', 'y-axis height metres', 'all five points correctly plotted', 'line of best fit drawn', 'appropriate scale'],
    keywords: ['axis', 'label', 'units', 'scale', 'plot', 'point', 'line of best fit', 'graph'],
    feedbackHit: 'Graph correctly drawn with all points plotted and a line of best fit.',
    feedbackMiss: 'Check: axes labelled with units? Scale appropriate? All 5 points plotted? Line of best fit drawn (not dot-to-dot)?',
  },

  q4_d: {
    marks: 2,
    exemplar: 'From the graph, a change of 75 years (from 5 to 80 years) corresponds to a change in height of 19 m (from 3 to 22 m). Growth rate = 19 ÷ 75 ≈ 0.25 m/year. Accept values from reading the line of best fit (approximately 0.24–0.27 m/year).',
    keyConcepts: ['gradient of line of best fit', 'change in height divided by change in age', 'approximately 0.25 m per year'],
    keywords: ['gradient', 'growth rate', 'metres per year', 'line of best fit', 'calculate'],
    feedbackHit: 'Correct calculation of growth rate from graph gradient.',
    feedbackMiss: 'Growth rate = rise ÷ run = (change in height) ÷ (change in age). Read two points from your line of best fit.',
  },

  q4_e: {
    marks: 2,
    exemplar: 'The prediction may not be reliable because: the data only goes up to 80 years — predicting beyond this range is extrapolation, which assumes the linear trend continues; older trees may grow more slowly as they reach maximum height; a larger sample size might show a different pattern.',
    keyConcepts: ['extrapolation beyond data range unreliable', 'trend may not continue linearly', 'growth rate may slow with age', 'limited sample size'],
    keywords: ['extrapolation', 'beyond data', 'unreliable', 'trend', 'sample size', 'linear'],
    feedbackHit: 'Good — extrapolation beyond the data range can be unreliable.',
    feedbackMiss: 'The data only goes to 80 years. Predicting height at 100 years means extrapolating — the growth rate might slow down as trees age, so the linear trend may not continue.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'age = (250 ÷ π) × 1.57 = (250 ÷ 3.14159) × 1.57 = 79.58 × 1.57 ≈ 124.9 ≈ 125 years.',
    keyConcepts: ['circumference 250 divided by pi', 'multiply by growth factor 1.57', 'answer approximately 125 years'],
    keywords: ['circumference', 'pi', 'growth factor', '1.57', 'sycamore', '125'],
    feedbackHit: 'Correct — approximately 125 years.',
    feedbackMiss: 'age = (250 ÷ 3.14159) × 1.57 ≈ 125 years.',
  },

  // ── Question 5 — Paper Helicopter Experiment ─────────────────────────────

  q5_a: {
    marks: 2,
    exemplar: 'Independent variable (IV): the height from which the helicopter is dropped (in metres). Dependent variable (DV): the time the helicopter spends in the air (in seconds).',
    keyConcepts: ['independent variable drop height', 'dependent variable time in air', 'IV is what you change', 'DV is what you measure'],
    keywords: ['independent', 'dependent', 'variable', 'drop height', 'time', 'air', 'IV', 'DV'],
    feedbackHit: 'Correct identification of IV and DV.',
    feedbackMiss: 'IV = what you change (drop height); DV = what you measure as a result (time in air).',
  },

  q5_b: {
    marks: 2,
    exemplar: 'Any two of: size/shape of paper helicopter (same template); mass of helicopter (same number of paperclips); location/air currents (same room, no wind); person releasing the helicopter; time of drop; orientation of helicopter when released.',
    keyConcepts: ['helicopter size same', 'number of paperclips same mass', 'location wind conditions controlled', 'same person releasing'],
    keywords: ['controlled', 'variable', 'constant', 'paperclip', 'size', 'shape', 'wind', 'location'],
    feedbackHit: 'Two valid controlled variables identified.',
    feedbackMiss: 'Controlled variables must be kept constant. Think: what else could affect the time apart from drop height?',
  },

  q5_c: {
    marks: 2,
    exemplar: 'As the height from which the helicopter is dropped increases, the time spent in the air also increases. There is a positive correlation between drop height and time in air. The relationship appears to be roughly linear/proportional.',
    keyConcepts: ['as height increases time increases', 'positive correlation', 'greater height longer time in air'],
    keywords: ['positive correlation', 'increases', 'proportional', 'height', 'time', 'pattern', 'relationship'],
    feedbackHit: 'Correct pattern described — positive correlation between height and time.',
    feedbackMiss: 'Look at how time changes as height increases. Does time go up, go down, or stay the same?',
  },

  q5_d: {
    marks: 2,
    exemplar: 'A paper helicopter is a simplified model — it does not have the same shape, mass distribution, or material as a real maple seed. A real seed is irregular in shape and may not spin uniformly, whereas the paper model is symmetric. The mass of the paperclip changes the mass distribution compared to a real seed.',
    keyConcepts: ['paper model simplified not identical to real seed', 'different shape or mass distribution', 'paperclip changes mass real seed has no clip', 'model may not behave like real seed'],
    keywords: ['model', 'limitation', 'simplified', 'shape', 'mass', 'distribution', 'seed', 'paper', 'artificial'],
    feedbackHit: 'Valid limitation of using the paper model identified.',
    feedbackMiss: 'Think about what is different between the paper helicopter and a real maple seed (shape, mass, material, symmetry).',
  },

  q5_e: {
    marks: 2,
    exemplar: 'Increase the number of trials (repeats) for each drop height to at least 3 or more to calculate a more reliable mean and identify anomalous results. This would reduce the effect of random errors and improve reliability.',
    keyConcepts: ['increase number of repeats trials', 'calculate mean reduces random error', 'identify anomalous results', 'more data more reliable'],
    keywords: ['repeat', 'trial', 'mean', 'average', 'reliability', 'anomaly', 'random error'],
    feedbackHit: 'Correct — more repeats improve reliability by reducing random error.',
    feedbackMiss: 'Only 2 trials were done. Adding more repeats lets you calculate a mean and identify anomalous results, making the data more reliable.',
  },

  // ── Question 6 — Design Investigation (Criterion B rubric) ───────────────

  q6_a: {
    marks: 16,
    exemplar: 'A complete investigation design addressing: focused research question stating IV (wing angle) and DV (time in air); identification of IV, DV, and at least 2 CVs; clear step-by-step method (at minimum: make helicopter, set wing angle, measure angle, drop from fixed height, record time, repeat); safety consideration (e.g. standing on chair — use step stool, have partner); data table with appropriate headings and units; data processing plan (mean time, graph of angle vs mean time, line of best fit, identify trend).',
    keyConcepts: ['research question IV wing angle DV time', 'controlled variables listed', 'step by step method reproducible', 'safety consideration identified', 'data table with units', 'data processing plan graph mean'],
    keywords: ['research question', 'independent variable', 'dependent variable', 'controlled variable', 'method', 'safety', 'data table', 'mean', 'graph', 'conclusion'],
    feedbackHit: 'Well-structured investigation design covering all key elements of Criterion B.',
    feedbackMiss: 'A full design needs: research question, all 3 variable types, reproducible method, safety notes, data table with units, and a plan for processing data into a graph/conclusion.',
  },

  // ── Question 7 — Dehydration, Osmosis & Reverse Osmosis ──────────────────

  q7_a: {
    marks: 4,
    exemplar: 'Excretion of waste: dehydration means less water available for urine production, so urine becomes more concentrated; toxic waste products (urea) may build up in the blood as the kidneys cannot flush them out effectively. Temperature control: dehydration reduces sweat production, so less cooling by evaporation occurs; body temperature rises and it becomes harder to maintain a stable internal temperature (homeostasis is disrupted).',
    keyConcepts: ['less water urine more concentrated', 'waste products build up in blood', 'less sweat produced dehydration', 'body temperature rises harder to regulate', 'homeostasis disrupted'],
    keywords: ['urine', 'concentrated', 'waste', 'urea', 'sweat', 'evaporation', 'temperature', 'homeostasis', 'dehydration'],
    feedbackHit: 'Good explanation of dehydration effects on excretion and temperature control.',
    feedbackMiss: 'Dehydration → less water → (excretion) urine concentrated, waste builds up; (temperature) less sweat → less cooling → body overheats.',
  },

  q7_b: {
    marks: 2,
    exemplar: 'Net movement of water is into the cell (from low solute/high water concentration outside to high solute/low water concentration inside). Two arrows pointing left (into cell) and one arrow pointing right represent net movement left/into cell. Award 2 marks for correct net direction (into cell, two left arrows selected).',
    keyConcepts: ['water moves from low solute to high solute', 'net movement into cell', 'osmosis down water potential gradient', 'two arrows pointing into cell'],
    keywords: ['osmosis', 'net movement', 'into cell', 'water potential', 'solute concentration', 'arrows', 'semipermeable'],
    feedbackHit: 'Correct — water moves into the cell by osmosis (from low to high solute concentration).',
    feedbackMiss: 'Osmosis: water moves from low solute concentration (outside) to high solute concentration (inside) — net movement is INTO the cell.',
  },

  q7_c: {
    marks: 5,
    exemplar: 'Ecosystem impacts (up to 2 marks): pumping seawater disrupts marine ecosystems (marine organisms sucked into intakes); waste saltwater/brine discharged back into ocean increases salinity, harming marine life/coral reefs. Energy consequences (up to 2 marks): reverse osmosis requires very high pressure = large amounts of energy; if energy comes from fossil fuels, it increases CO₂ emissions and contributes to climate change/global warming; affects energy security. Concluding appraisal (1 mark): overall reverse osmosis has benefits (provides clean freshwater in water-scarce regions) but significant environmental costs; sustainability depends on energy source — using renewable energy would reduce impact.',
    keyConcepts: ['marine ecosystem disruption seawater pumping', 'brine discharge increases ocean salinity', 'high energy requirement fossil fuels CO2', 'climate change from energy use', 'benefits freshwater provision water scarce', 'renewable energy reduces impact'],
    keywords: ['ecosystem', 'marine', 'salinity', 'brine', 'energy', 'fossil fuel', 'CO2', 'climate change', 'freshwater', 'renewable', 'conclusion', 'appraisal'],
    feedbackHit: 'Good balanced discussion of ecosystem impacts, energy consequences, and concluding appraisal.',
    feedbackMiss: 'Structure your answer: 1) ecosystem impacts (marine disruption, brine discharge), 2) energy consequences (high energy use, CO₂ if fossil fuels), 3) concluding appraisal (benefits vs costs, role of renewable energy).',
  },

  // ── Question 8 — Water Cycle & Sustainability ─────────────────────────────

  q8_a: {
    marks: 1,
    exemplar: 'All four labels correctly placed: Condensation (top — cloud formation), Precipitation (falling rain/snow), Evaporation (water rising from surface), Collection (water in rivers/lakes/oceans). Award 1 mark for all correct.',
    keyConcepts: ['condensation cloud formation', 'precipitation rain snow falling', 'evaporation water vapour rising', 'collection rivers lakes oceans'],
    keywords: ['condensation', 'precipitation', 'evaporation', 'collection', 'water cycle'],
    feedbackHit: 'All water cycle labels correctly placed.',
    feedbackMiss: 'Water cycle stages: Evaporation (water heats up, rises as vapour) → Condensation (cools, forms clouds) → Precipitation (falls as rain/snow) → Collection (gathers in rivers/lakes).',
  },

  q8_b: {
    marks: 2,
    exemplar: 'Increased precipitation: flooding; loss of habitat; decrease in water quality; change in growing season. (1 mark for any one reasonable consequence.) Decreased precipitation: drought; reduced water supply for animals, humans, agriculture; change in growing season; wildfires; land gained from lowering river levels. (1 mark for any one reasonable consequence.)',
    keyConcepts: ['increased precipitation flooding habitat loss water quality', 'decreased precipitation drought water supply agriculture wildfires'],
    keywords: ['flooding', 'drought', 'habitat', 'water supply', 'agriculture', 'precipitation', 'climate change'],
    feedbackHit: 'One consequence of increased and one of decreased precipitation correctly identified.',
    feedbackMiss: 'More rain → flooding, habitat loss. Less rain → drought, water shortage for humans/animals/farming.',
  },

  q8_c: {
    marks: 12,
    exemplar: 'Home water shortage (up to 3 marks): 1=statement of how water is used at home (shower, washing clothes, watering plants); 2=statement + justification of how one use can be reduced (e.g. turn shower off while shampooing); 3=two uses stated + both justified.\n\nDietary water footprint (up to 4 marks): 1=simple reference to water use in food production or transport; 2=effect of one dietary choice on footprint; 3=effect of two choices + one supported by evidence; 4=effect of two choices both supported by evidence (e.g. beef requires 15,415 L water per kg; eating vegetables reduces footprint).\n\nGovernment policies (up to 3 marks): 1=one government action stated; 2=one action + how it reduces water use; 3=two actions both explained.\n\nConcluding appraisal (up to 2 marks): 1=basic conclusion (individuals can reduce water use); 2=appraisal comparing individual and government actions (e.g. domestic use tiny compared to industry/agriculture, so government action is more impactful, but education builds long-term change).',
    keyConcepts: ['home water use examples shower washing watering', 'justify how home use reduced', 'meat high water footprint beef 15415 litres per kg', 'vegetables lower water footprint', 'government policy education campaign laws fines subsidies', 'individual action small scale government large scale', 'balanced concluding appraisal'],
    keywords: ['water footprint', 'dietary choice', 'beef', 'vegetables', 'government', 'policy', 'education', 'law', 'subsidy', 'individual', 'sustainable', 'home', 'shower', 'conclusion', 'appraisal'],
    feedbackHit: 'Comprehensive evaluation of individual and government water sustainability actions.',
    feedbackMiss: 'Structure: (1) Home usage with justification of how to reduce; (2) dietary choices — meat vs plant-based water footprint with evidence; (3) government policies with explanation; (4) balanced conclusion comparing scale of individual vs. government impact.',
  },
}
