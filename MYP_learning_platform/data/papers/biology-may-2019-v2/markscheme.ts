import 'server-only'

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

export const MS: MSRecord = {

  // ── Q1: Organisation & Cell Biology ──────────────────────────────────────
  q1_a: {
    marks: 1,
    exemplar: 'Blank 1 (top, between Atoms and Cell): Molecule. Blank 2 (top, between Cell and Organ): Tissue. Blank 3 (bottom, between Population and Ecosystem): Community.',
    keyConcepts: ['molecule between atoms and cell', 'tissue between cell and organ', 'community between population and ecosystem'],
    keywords: ['molecule', 'tissue', 'community'],
    feedbackHit: 'All three terms placed correctly in the levels of organisation diagram.',
    feedbackMiss: 'The three blanks are: Molecule (after Atoms on the top track), Tissue (after Cell before Organ), Community (after Population before Ecosystem).',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Plant cell only: Cell wall, Chloroplast, Large central vacuole. Both cells: Cytoplasm, Mitochondria, Cell membrane. Animal cell only: Centriole.',
    keyConcepts: [
      'plant only cell wall chloroplast large central vacuole',
      'both cells cytoplasm mitochondria cell membrane',
      'animal only centriole',
    ],
    keywords: ['cell wall', 'chloroplast', 'large central vacuole', 'cytoplasm', 'mitochondria', 'cell membrane', 'centriole'],
    feedbackHit: 'Correct classification of cell structures into plant only, both, and animal only.',
    feedbackMiss: 'Plant only: Cell wall, Chloroplast, Large central vacuole. Both: Cytoplasm, Mitochondria, Cell membrane. Animal only: Centriole.',
  },
  q1_c: {
    marks: 3,
    exemplar: 'Function of the small-intestine epithelial cell is to absorb / take up digested food (nutrients such as glucose and amino acids). It moves these molecules from the gut/lumen into the blood. Correct use of one of the following terms: absorption, nutrients, digested food, blood.',
    keyConcepts: [
      'epithelial cell absorbs digested food nutrients',
      'glucose amino acids from gut into blood',
      'absorption into blood',
    ],
    keywords: ['absorb', 'absorption', 'nutrients', 'glucose', 'amino acids', 'blood', 'digested food', 'epithelial'],
    feedbackHit: 'Correct description of epithelial-cell function with scientific terminology.',
    feedbackMiss: 'The epithelial cell absorbs digested food molecules (glucose, amino acids) from the small intestine into the blood. Accept "absorbs nutrients". Do not accept "digests food" — digestion is done by enzymes, not this cell.',
  },
  q1_d: {
    marks: 2,
    exemplar: 'The microvilli give/provide an increase in (surface) area. More area for absorption of nutrients to take place.',
    keyConcepts: [
      'microvilli increase surface area',
      'more area for absorption',
    ],
    keywords: ['microvilli', 'surface area', 'absorption', 'nutrients', 'folds'],
    feedbackHit: 'Correct adaptation: microvilli increase surface area for faster absorption.',
    feedbackMiss: 'The microvilli increase the surface area of the cell membrane. This provides more area for the absorption of nutrients to take place. Do not accept "more sites for respiration".',
  },

  // ── Q2: Mitosis, Meiosis, Genetics ───────────────────────────────────────
  q2_a: {
    type: 'mcq',
    correct: 0,
  },
  q2_b: {
    marks: 2,
    exemplar: 'Meiosis produces haploid cells (23 chromosomes) / 4 cells / genetically non-identical / gametes (sex cells). Mitosis produces diploid cells (46 chromosomes) / 2 cells / genetically identical / somatic cells.',
    keyConcepts: [
      'meiosis haploid 23 chromosomes 4 cells non-identical gametes',
      'mitosis diploid 46 chromosomes 2 cells identical somatic',
    ],
    keywords: ['haploid', 'diploid', '23', '46', '4 cells', '2 cells', 'identical', 'non-identical', 'gametes', 'somatic'],
    feedbackHit: 'Correct differences stated — both statements must be explicitly given.',
    feedbackMiss: 'Meiosis: 4 cells, haploid (23 chromosomes), genetically non-identical, gametes/sex cells. Mitosis: 2 cells, diploid (46 chromosomes), genetically identical, somatic cells.',
  },
  q2_c: {
    marks: 4,
    exemplar: 'Source 1: sexual reproduction / mutation / crossing over / random assortment / arrival of new individuals. How variation occurs: new combination of genes from two individuals / change in DNA sequence / exchange of DNA segments / new combination of chromosomes / new traits from different gene pool.',
    keyConcepts: [
      'source 1 sexual reproduction mutation crossing over random assortment',
      'how variation new gene combinations DNA changes',
      'source 2 different from source 1',
    ],
    keywords: ['sexual reproduction', 'mutation', 'crossing over', 'random assortment', 'gene pool', 'variation', 'DNA', 'chromosomes'],
    feedbackHit: 'Two sources of genetic variation each with a correctly linked explanation.',
    feedbackMiss: 'Two sources (e.g. sexual reproduction and mutation) each paired with how variation arises. Mark awarded for the source statement even if the link to variation is incorrect.',
  },

  // ── Q3: Mass Extinction & Natural Selection ───────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Extinction: disappearance of a species. Mass extinction: disappearance of many species. Correct use of the word "species".',
    keyConcepts: [
      'extinction disappearance of one species',
      'mass extinction disappearance of many species',
    ],
    keywords: ['species', 'extinction', 'mass extinction', 'disappearance', 'many'],
    feedbackHit: 'Clear distinction between extinction (one species) and mass extinction (many species).',
    feedbackMiss: 'Extinction = disappearance of one species. Mass extinction = disappearance of many species. The second mark is only awarded if the first is awarded.',
  },
  q3_b: {
    marks: 2,
    exemplar: 'One example of a change that decreases population: increased predation / habitat reduction / decreased food supply / increased competition / disease / natural disaster / human interference. Correct justification for how this decreases population size.',
    keyConcepts: [
      'population decreases due to predation habitat loss food shortage disease competition',
      'justification eaten before reproduce insufficient resources',
    ],
    keywords: ['predation', 'habitat', 'food supply', 'disease', 'competition', 'human interference', 'natural disaster'],
    feedbackHit: 'One valid cause identified with a correctly linked justification.',
    feedbackMiss: 'Causes include: increased predation, habitat reduction, decreased food supply, disease, natural disaster, human interference. Each must be paired with a reason why it reduces population size. Do not award two marks for two examples without justification.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Any two from: fur (for warmth/insulation in cold conditions); warm-blooded (can control own body temperature); carry their young or high level of parental care; mothers feed their young (milk).',
    keyConcepts: [
      'fur warmth insulation cold conditions',
      'warm-blooded control body temperature',
      'carry young parental care',
      'mothers feed young milk',
    ],
    keywords: ['fur', 'warmth', 'insulation', 'warm-blooded', 'parental care', 'milk', 'young'],
    feedbackHit: 'Two valid mammalian traits that aided survival in cold, resource-scarce conditions.',
    feedbackMiss: 'Traits that helped: fur (insulation/warmth), warm-blooded (thermoregulation), carrying young/parental care, producing milk for young. All relate to surviving cold temperatures or maintaining survival in changed conditions.',
  },
  q3_d: {
    marks: 4,
    exemplar: 'Mice are more likely to survive when fur colour matches the ground (less visible to predators such as owls/hawks — camouflage). Longer survival means greater chance of reproduction. Concentration of fur types by location means breeding more likely between similar types. Offspring are more likely to inherit advantageous fur colour. Offspring born with disadvantageous fur are less likely to survive.',
    keyConcepts: [
      'matching fur colour camouflage less visible to predators survive',
      'survive longer greater chance of reproduction',
      'concentration of fur types breeding between similar types',
      'offspring inherit advantageous fur colour',
    ],
    keywords: ['camouflage', 'survive', 'predator', 'owl', 'hawk', 'reproduce', 'offspring', 'advantageous', 'inherit', 'natural selection'],
    feedbackHit: 'Clear natural selection explanation linking camouflage → survival → reproduction → inheritance.',
    feedbackMiss: 'Key steps: matching fur colour = camouflage = less likely to be caught by predators (owls/hawks) → survive longer → more likely to reproduce → pass on advantageous fur colour to offspring → disadvantageous fur types less likely to survive and reproduce.',
  },

  // ── Q4: Plant Growth & Data Analysis ─────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Biotic: Fungi and Microbes. Abiotic: Water. (Soil can be placed in either list.)',
    keyConcepts: ['fungi microbes biotic', 'water abiotic'],
    keywords: ['biotic', 'abiotic', 'fungi', 'microbes', 'water', 'soil'],
    feedbackHit: 'Correct classification of biotic and abiotic factors.',
    feedbackMiss: 'Biotic = living factors: Fungi, Microbes. Abiotic = non-living factors: Water. Soil can go in either category.',
  },
  q4_b: {
    marks: 2,
    exemplar: 'carbon dioxide + water → oxygen + glucose',
    blankAnswers: ['water', 'glucose'],
    keyConcepts: ['water first blank', 'glucose second blank'],
    keywords: ['water', 'glucose', 'photosynthesis', 'equation'],
    feedbackHit: 'Correct: carbon dioxide + water → oxygen + glucose.',
    feedbackMiss: 'Photosynthesis word equation: carbon dioxide + **water** → oxygen + **glucose**. (Light energy from sun is required.)',
  },
  q4_c: {
    marks: 1,
    exemplar: 'Presence of fertilizer (containing potassium) / whether fertilizer was added to the soil',
    keyConcepts: ['independent variable presence of fertilizer potassium'],
    keywords: ['fertilizer', 'potassium', 'independent variable', 'presence'],
    feedbackHit: 'Correct independent variable identified.',
    feedbackMiss: 'The independent variable is the presence (or absence) of fertilizer/potassium in the soil — the factor that was deliberately changed by the students.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'Height of plant OR colour of leaves / leaf appearance',
    keyConcepts: ['dependent variable height plant leaf colour'],
    keywords: ['height', 'leaf colour', 'leaf appearance', 'dependent variable'],
    feedbackHit: 'Correct dependent variable identified.',
    feedbackMiss: 'The dependent variable is what was measured: height of plant (in mm) OR colour/appearance of leaves. Do not accept "growth" as it is too vague.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'Quantitative data: numerical / can be measured / states example (e.g. height in mm). Qualitative data: non-numerical / descriptive / states example (e.g. leaf colour description).',
    keyConcepts: ['quantitative data numerical measurable', 'qualitative data non-numerical descriptive'],
    keywords: ['quantitative', 'qualitative', 'numerical', 'descriptive', 'non-numerical', 'measurable'],
    feedbackHit: 'Correct features of both data types with examples.',
    feedbackMiss: 'Quantitative: numerical/measurable (e.g. height in mm). Qualitative: non-numerical/descriptive (e.g. colour description of leaves).',
  },
  q4_f: {
    marks: 2,
    exemplar: '278.0 mm (accept 278 mm or 278.0 mm). (264 + 291 + 279) ÷ 3 = 834 ÷ 3 = 278.',
    keyConcepts: ['mean 278 278.0'],
    keywords: ['278', 'mean', 'average', 'fertilizer'],
    feedbackHit: 'Correct mean calculated.',
    feedbackMiss: '(264 + 291 + 279) ÷ 3 = 834 ÷ 3 = 278.0 mm. Accept 278 or 278.0 or calculator display. Award 2 marks if only the final answer 278 is given.',
  },
  q4_g: {
    marks: 2,
    exemplar: 'Strength: three trials were conducted / both quantitative and qualitative data were recorded. Limitation: limited range of IV (only two values — fertilizer or no fertilizer) / limited range of potassium amounts tested / specific reference to lack of control variables.',
    keyConcepts: ['strength three trials quantitative and qualitative data', 'limitation limited range two IV values lack of control variables'],
    keywords: ['strength', 'limitation', 'trials', 'range', 'control variables', 'quantitative', 'qualitative'],
    feedbackHit: 'One valid strength and one valid limitation of the method.',
    feedbackMiss: 'Strength: three trials (repetition) or recording two types of data. Limitation: limited range of independent variable (only two conditions: with/without fertilizer) or insufficient control of variables. Do not accept general reference to CVs or "only three trials" as a limitation.',
  },

  // ── Q5: Algae Light Design (Criterion B rubric) ────────────────────────────
  q5_: {
    marks: 14,
    exemplar: 'Full Criterion B: IV = light intensity/amount (at least 4 levels). CVs = 2 clearly identified. Hypothesis = testable, linked to growth/mass of algae, with scientific explanation. Method = sufficient detail for IV, DV and at least 1 CV. Data = 3+ groups, 5+ light conditions. Safety = any relevant consideration.',
    keyConcepts: [
      'IV light intensity distance from lamp',
      'two control variables temperature volume water',
      'testable hypothesis light increases algae growth photosynthesis',
      'method detailed IV DV CV',
      'sufficient data 3 groups 5 light conditions',
      'safety consideration',
    ],
    keywords: ['light', 'intensity', 'independent', 'control', 'hypothesis', 'photosynthesis', 'method', 'safety', 'repeat', 'algae'],
    feedbackHit: 'Well-designed investigation with IV, hypothesis, method, data collection plan and safety.',
    feedbackMiss: 'Design must include: IV (light intensity — vary by distance or number of lamps, at least 4 levels), 2 CVs (temperature, volume of water, etc.), testable hypothesis (if light increases, mass of algae increases, because photosynthesis provides energy for growth), method with sufficient detail for IV/DV/CVs, plan for sufficient data (3 replicates at 5+ light levels), safety consideration.',
  },

  // ── Q6: Algae Temperature ─────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Step 2: Select equally healthy strands of algae. Step 8: Place lamp facing water bath. Step 11: Weigh the final mass of algae and record values.',
    keyConcepts: [
      'step 2 select equally healthy strands of algae',
      'step 8 place lamp facing water bath',
      'step 11 weigh final mass algae record values',
    ],
    keywords: ['healthy', 'select', 'lamp', 'facing', 'weigh', 'mass', 'final', 'record'],
    feedbackHit: 'All three steps placed correctly.',
    feedbackMiss: 'Step 2: Select equally healthy strands of algae (ensures CV). Step 8: Place lamp facing water bath (light). Step 11: Weigh final mass and record values (DV). First mark for one correct; second for all correct.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Improvement: measure volume of water precisely / place lamp at fixed distance / allow time for water bath to reach set temperature. Justification: ensures constant value for control variable / ensures light level is constant / ensures algae experience constant temperature.',
    keyConcepts: [
      'improvement measure water volume precisely place lamp fixed distance allow time reach temperature',
      'justification ensures control variable constant light constant temperature constant',
    ],
    keywords: ['improvement', 'justification', 'constant', 'control variable', 'volume', 'lamp', 'distance', 'temperature'],
    feedbackHit: 'Valid improvement with correctly linked justification.',
    feedbackMiss: 'Improvement must be specific (not just "more trials" or "shorter temperature increments"). It should control a variable, e.g. place lamp at fixed distance (ensures constant light level). Do not accept: add more trials or use shorter temperature increments.',
  },
  q6_c: {
    marks: 6,
    exemplar: 'X-axis: temperature / °C (with unit). Y-axis: mean mass of algae / g. Both axes evenly numbered. All 8 points plotted correctly (±1 unit): (7.5,4) (10,7) (12.5,11) (15,15) (20,22) (27.5,26) (30,22) (37.5,5). Smooth curve drawn through points.',
    keyConcepts: [
      'temperature on x axis with degree C',
      'mean mass of algae on y axis with grams',
      'evenly numbered intervals both axes',
      'all 8 points plotted correctly',
    ],
    keywords: ['x-axis', 'y-axis', 'temperature', 'mean mass', 'units', 'degrees', 'grams', 'plotted', 'points', 'curve'],
    feedbackHit: 'Graph correctly plotted with labelled axes, units and accurate data points.',
    feedbackMiss: 'X-axis: temperature (°C), evenly spaced. Y-axis: mean mass of algae (g), evenly spaced. All 8 points must be plotted within ±1 unit. Connect with a smooth curve. Units (°C and g) must be on the axes.',
  },
  q6_d: {
    marks: 5,
    exemplar: 'Trend (3 max): below 27.5°C, rate of photosynthesis/growth increases with temperature; max at 27.5°C (26 g); above 27.5°C, rate decreases; general description of asymmetrical bell curve. Explanation (2 max): photosynthesis/growth is controlled by enzymes; chemical reactions increase with temperature; enzymes denature above 27.5°C; at higher temperature water lost through evaporation.',
    keyConcepts: [
      'increases below 27.5 degrees',
      'maximum at 27.5 degrees 26 grams',
      'decreases above 27.5 degrees',
      'enzymes control photosynthesis growth',
      'enzymes denature high temperature',
    ],
    keywords: ['increase', 'decrease', 'maximum', '27.5', 'enzymes', 'denature', 'photosynthesis', 'temperature', 'chemical reactions'],
    feedbackHit: 'Three trend points and two scientific explanations.',
    feedbackMiss: 'Trend: increases up to 27.5°C (max 26 g), then decreases sharply to 5 g at 37.5°C. Explanation: enzyme-controlled reactions increase with temperature; above optimum, enzymes denature reducing growth rate.',
  },
  q6_e: {
    marks: 3,
    exemplar: 'Below 27.5°C the increase was proportional (or at lower temperatures the increase was proportional). Above 27.5°C there was a decrease (or the increase was not proportional over the full range). The prediction is not supported (or only partially supported) by the data.',
    keyConcepts: [
      'below 27.5 degrees proportional increase',
      'above 27.5 degrees decrease not proportional',
      'hypothesis partially supported not fully supported',
    ],
    keywords: ['proportional', 'below', 'above', '27.5', 'decrease', 'not supported', 'partially supported'],
    feedbackHit: 'Hypothesis correctly evaluated: partially supported below 27.5°C, not above.',
    feedbackMiss: 'The hypothesis is only partially supported. Below 27.5°C, the increase in mass was approximately proportional to temperature. Above 27.5°C, there was a decrease — not a proportional increase. Third mark only awarded if at least one of the first two marks is earned.',
  },

  // ── Q7: Water Lettuce ─────────────────────────────────────────────────────
  q7_a: {
    marks: 3,
    exemplar: 'If we add water lettuce to waste water, then there will be a decrease in the amount of nitrogen (or named contaminant), because water lettuce has been shown to uptake/store/remove nitrogen (or named contaminant such as lead).',
    keyConcepts: [
      'add water lettuce to waste water',
      'decrease in named contaminant nitrogen lead',
      'because water lettuce uptakes stores removes contaminant',
    ],
    keywords: ['water lettuce', 'waste water', 'decrease', 'nitrogen', 'contaminant', 'uptake', 'absorb', 'remove'],
    feedbackHit: 'Hypothesis correctly structured: if → then (with named contaminant) → because (scientific reason from table).',
    feedbackMiss: 'Structure: If (water lettuce added to waste water) → then (decrease in named contaminant) → because (scientific justification using data from the table, e.g. water lettuce shows 55-75% nitrogen removal).',
  },
  q7_b: {
    marks: 2,
    exemplar: 'Any two reasonable suggestions: temperature of water, size of test pond/container, amount of contaminants (initial), light level. Do not accept anything related to plants as that is the IV.',
    keyConcepts: [
      'control variable temperature',
      'control variable size container pond volume',
      'control variable light',
    ],
    keywords: ['temperature', 'container', 'size', 'volume', 'light', 'initial', 'contaminant'],
    feedbackHit: 'Two valid control variables identified.',
    feedbackMiss: 'Control variables: temperature of water, size of container/volume of water, initial amount of contaminants, light level. Do not accept anything related to plants (that is the IV).',
  },
  q7_c: {
    marks: 2,
    exemplar: 'Poor control of variables leads to invalid results. Different amounts of nitrogen could lead to different growth rates of the water lettuce. Or: the starting nitrogen concentration is not the same so the final difference may not be due to the water lettuce.',
    keyConcepts: [
      'poor control of variables invalid results',
      'different starting nitrogen different growth rates',
      'final result not solely due to water lettuce',
    ],
    keywords: ['invalid', 'control', 'nitrogen', 'growth rate', 'starting amount', 'results'],
    feedbackHit: 'Correctly explains how uncontrolled nitrogen levels invalidate the results.',
    feedbackMiss: 'Different starting amounts of nitrogen = poor control = invalid results. The different growth rates of water lettuce due to different nitrogen levels mean the final nitrogen levels cannot be compared fairly.',
  },
  q7_d: {
    marks: 1,
    exemplar: 'Use a known amount of nitrogen each trial (measure using nitrogen test kit/water testing equipment). Or: measure the amount of nitrogen at the beginning so percentage change could be calculated.',
    keyConcepts: ['measure nitrogen at start known amount test kit'],
    keywords: ['measure', 'nitrogen', 'known amount', 'test kit', 'start', 'initial'],
    feedbackHit: 'Specific action to control starting nitrogen amount with appropriate equipment.',
    feedbackMiss: 'Use a nitrogen test kit or water testing equipment to measure and set the same starting amount of nitrogen in each trial, or to record the initial concentration so percentage change can be calculated.',
  },

  // ── Q8: Wild Sea Otters & Fishing Technology ─────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'Over hunting / over fishing / habitat loss / pollution / increased demand due to growing human population',
    keyConcepts: ['overhunting overfishing habitat loss pollution increased demand'],
    keywords: ['overhunting', 'overfishing', 'habitat loss', 'pollution', 'demand', 'population'],
    feedbackHit: 'Valid reason for decrease in wild sea otters since 1950.',
    feedbackMiss: 'Reasons include: over hunting (fur trade), over fishing, habitat loss, pollution, increased demand due to growing human population.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Sonar has helped locate populations. Sonar allows more to be caught. Larger boats allow more to be caught at one time. GPS allows boats to accurately locate hunting/fishing areas and track populations. Technical use of larger nets/traps such as trawling.',
    keyConcepts: [
      'sonar locate populations more caught',
      'GPS locate areas track populations',
      'larger boats catch more at once',
      'larger nets traps trawling',
    ],
    keywords: ['sonar', 'GPS', 'larger boats', 'nets', 'traps', 'trawling', 'locate', 'technology'],
    feedbackHit: 'Two valid ways technology has increased catches.',
    feedbackMiss: 'Sonar (to locate populations), GPS (to track hunting/fishing areas), larger boats (catch more), larger/new-material nets or traps. Do not accept "bigger nets" alone without technological context.',
  },
  q8_c: {
    marks: 5,
    exemplar: 'Identifies change in organism 1 (e.g. sea urchin population increases) because there are fewer otters (predators) to eat them. Identifies change in organism 2 (e.g. giant kelp decreases) because more urchins graze on the kelp (the producer). Correct use of ecological terminology (predator, prey, producer, primary consumer, trophic level, etc.)',
    keyConcepts: [
      'sea urchin population increases fewer predators',
      'giant kelp decreases more grazing by urchins',
      'ecological terminology predator prey producer primary consumer',
    ],
    keywords: ['sea urchin', 'kelp', 'predator', 'prey', 'producer', 'primary consumer', 'trophic level', 'population', 'increase', 'decrease', 'graze'],
    feedbackHit: 'Two organisms identified with change stated, justified and ecological terminology used.',
    feedbackMiss: 'Identify two organisms affected. State the change clearly (not just implied). Justify with food web reasoning (fewer predators → more urchins → less kelp). Use ecological terminology (predator, prey, producer, primary consumer, trophic level, etc.).',
  },

  // ── Q9: GM Carp & Fish Farming ───────────────────────────────────────────
  q9_a: {
    marks: 2,
    exemplar: 'Advantage: fish grow faster so reach market sooner / provides more kg of fish / less feed required. Disadvantage: potentially more expensive / people may not want to buy GM fish / unknown impact on ecosystem.',
    keyConcepts: [
      'advantage faster growth more fish less feed',
      'disadvantage expensive unknown ecosystem impact consumer resistance',
    ],
    keywords: ['advantage', 'disadvantage', 'faster', 'growth', 'expensive', 'ecosystem', 'GM', 'carp'],
    feedbackHit: 'One valid advantage and one valid disadvantage of GM carp farming.',
    feedbackMiss: 'Advantage: faster growth = ready for market sooner, more kg per fish, less feed needed. Disadvantage: more expensive, public resistance to GM food, unknown ecosystem effects. Do not accept "GMOs are not good for human health".',
  },
  q9_b: {
    marks: 14,
    exemplar: 'Environmental +/-: Fish farming reduces pressure on wild stocks (positive); diseases/parasites spread to wild fish, water quality reduced, invasive species if escape, increased organic waste (negative). Social/Economic +/-: increases food supply, reduces cost, provides employment (positive); GM fish more expensive, public may reject GM food (negative). Location: inland enclosed facility to prevent escape, prevent disease spread, better water quality control. Concluding appraisal: opinion with specific detail.',
    keyConcepts: [
      'environmental positive reduces wild fish pressure',
      'environmental negative disease parasites water quality invasive organic waste',
      'social economic positive food supply cost employment',
      'social economic negative expensive public rejection',
      'location inland enclosed prevent escape disease',
      'concluding appraisal opinion specific detail',
    ],
    keywords: ['environmental', 'economic', 'social', 'disease', 'escape', 'location', 'inland', 'wild fish', 'opinion', 'appraisal'],
    feedbackHit: 'Full Criterion D response covering all four components with specific detail.',
    feedbackMiss: 'Must address: (1) positive AND negative environmental impacts with justification, (2) positive AND negative social/economic impacts with justification, (3) location suggestion with detailed scientific justification, (4) concluding appraisal with specific opinion.',
  },
}
