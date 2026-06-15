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
    exemplar: 'Blank 1 (top, between Atoms and Tissue): Molecule. Blank 2 (bottom, between Cell and Population): Organ system. Blank 3 (bottom, between Population and Ecosystem): Community.',
    keyConcepts: ['molecule between atoms and tissue', 'organ system between cell and population', 'community between population and ecosystem'],
    keywords: ['molecule', 'organ system', 'community'],
    feedbackHit: 'All three terms placed correctly in the levels of organisation diagram.',
    feedbackMiss: 'The three blanks are: Molecule (after Atoms on the top track), Organ system (after Cell on the bottom track), Community (after Population before Ecosystem).',
  },
  q1_b: {
    marks: 2,
    exemplar: 'Plant cell only: Chloroplast, Cell wall, Large central vacuole. Both cells: Nucleus, Mitochondria, Cell membrane. Animal cell only: Lysosome.',
    keyConcepts: [
      'plant only chloroplast cell wall large central vacuole',
      'both cells nucleus mitochondria cell membrane',
      'animal only lysosome',
    ],
    keywords: ['chloroplast', 'cell wall', 'large central vacuole', 'nucleus', 'mitochondria', 'cell membrane', 'lysosome'],
    feedbackHit: 'Correct classification of cell structures into plant only, both, and animal only.',
    feedbackMiss: 'Plant only: Chloroplast, Cell wall, Large central vacuole. Both: Nucleus, Mitochondria, Cell membrane. Animal only: Lysosome.',
  },
  q1_c: {
    marks: 3,
    exemplar: 'Function of chloroplasts is to carry out photosynthesis. They absorb/capture light energy (using chlorophyll). They use this energy to make food/glucose from carbon dioxide and water. Correct use of one of the following terms: photosynthesis, chlorophyll, light energy, glucose.',
    keyConcepts: [
      'chloroplasts carry out photosynthesis',
      'absorb capture light energy chlorophyll',
      'make food glucose from carbon dioxide and water',
    ],
    keywords: ['photosynthesis', 'light energy', 'chlorophyll', 'glucose', 'carbon dioxide', 'chloroplast'],
    feedbackHit: 'Correct description of chloroplast function with scientific terminology.',
    feedbackMiss: 'Chloroplasts absorb light energy (using chlorophyll) and use it to make glucose from carbon dioxide and water — the process of photosynthesis. Do not accept "store energy".',
  },
  q1_d: {
    marks: 2,
    exemplar: 'The stacked thylakoid membranes give/provide an increase in (surface) area. More sites for light absorption / the reactions of photosynthesis to take place.',
    keyConcepts: [
      'thylakoid membranes increase surface area',
      'more sites for light absorption photosynthesis',
    ],
    keywords: ['thylakoid', 'membranes', 'surface area', 'sites', 'light absorption', 'photosynthesis'],
    feedbackHit: 'Correct adaptation: stacked thylakoids increase surface area providing more reaction sites.',
    feedbackMiss: 'The stacked thylakoid membranes increase the surface area inside the chloroplast. This provides more sites for light absorption and the reactions of photosynthesis to take place. Do not accept "exchange of materials".',
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
    exemplar: 'Moths are more likely to survive when wing colour matches the bark (less visible to predators such as birds — camouflage). Longer survival means greater chance of reproduction. Concentration of wing types by location means breeding more likely between similar types. Offspring are more likely to inherit advantageous wing colour. Offspring born with disadvantageous wing colour are less likely to survive.',
    keyConcepts: [
      'matching wing colour camouflage less visible to predators survive',
      'survive longer greater chance of reproduction',
      'concentration of wing types breeding between similar types',
      'offspring inherit advantageous wing colour',
    ],
    keywords: ['camouflage', 'survive', 'predator', 'bird', 'reproduce', 'offspring', 'advantageous', 'inherit', 'natural selection'],
    feedbackHit: 'Clear natural selection explanation linking camouflage → survival → reproduction → inheritance.',
    feedbackMiss: 'Key steps: matching wing colour = camouflage = less likely to be caught by predatory birds → survive longer → more likely to reproduce → pass on advantageous wing colour to offspring → disadvantageous wing types less likely to survive and reproduce.',
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
    exemplar: 'Presence of fertilizer (containing phosphorus) / whether fertilizer was added to the soil',
    keyConcepts: ['independent variable presence of fertilizer phosphorus'],
    keywords: ['fertilizer', 'phosphorus', 'independent variable', 'presence'],
    feedbackHit: 'Correct independent variable identified.',
    feedbackMiss: 'The independent variable is the presence (or absence) of fertilizer/phosphorus in the soil — the factor that was deliberately changed by the students.',
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
    exemplar: '303.0 mm (accept 303 mm or 303.0 mm). (286 + 319 + 304) ÷ 3 = 909 ÷ 3 = 303.',
    keyConcepts: ['mean 303 303.0'],
    keywords: ['303', 'mean', 'average', 'fertilizer'],
    feedbackHit: 'Correct mean calculated.',
    feedbackMiss: '(286 + 319 + 304) ÷ 3 = 909 ÷ 3 = 303.0 mm. Accept 303 or 303.0 or calculator display. Award 2 marks if only the final answer 303 is given.',
  },
  q4_g: {
    marks: 2,
    exemplar: 'Strength: three trials were conducted / both quantitative and qualitative data were recorded. Limitation: limited range of IV (only two values — fertilizer or no fertilizer) / limited range of phosphorus amounts tested / specific reference to lack of control variables.',
    keyConcepts: ['strength three trials quantitative and qualitative data', 'limitation limited range two IV values lack of control variables'],
    keywords: ['strength', 'limitation', 'trials', 'range', 'control variables', 'quantitative', 'qualitative'],
    feedbackHit: 'One valid strength and one valid limitation of the method.',
    feedbackMiss: 'Strength: three trials (repetition) or recording two types of data. Limitation: limited range of independent variable (only two conditions: with/without fertilizer) or insufficient control of variables. Do not accept general reference to CVs or "only three trials" as a limitation.',
  },

  // ── Q5: Azolla Light Design (Criterion B rubric) ───────────────────────────
  q5_: {
    marks: 14,
    exemplar: 'Full Criterion B: IV = light intensity/amount (at least 4 levels). CVs = 2 clearly identified. Hypothesis = testable, linked to growth/number of plants, with scientific explanation. Method = sufficient detail for IV, DV and at least 1 CV. Data = 3+ groups, 5+ light conditions. Safety = any relevant consideration.',
    keyConcepts: [
      'IV light intensity distance from lamp',
      'two control variables temperature volume water',
      'testable hypothesis light increases Azolla growth photosynthesis',
      'method detailed IV DV CV',
      'sufficient data 3 groups 5 light conditions',
      'safety consideration',
    ],
    keywords: ['light', 'intensity', 'independent', 'control', 'hypothesis', 'photosynthesis', 'method', 'safety', 'repeat', 'Azolla'],
    feedbackHit: 'Well-designed investigation with IV, hypothesis, method, data collection plan and safety.',
    feedbackMiss: 'Design must include: IV (light intensity — vary by distance or number of lamps, at least 4 levels), 2 CVs (temperature, volume of water, etc.), testable hypothesis (if light increases, number of Azolla increases, because photosynthesis provides energy for growth), method with sufficient detail for IV/DV/CVs, plan for sufficient data (3 replicates at 5+ light levels), safety consideration.',
  },

  // ── Q6: Azolla Temperature ────────────────────────────────────────────────
  q6_a: {
    marks: 2,
    exemplar: 'Step 2: Select equally healthy Azolla plants. Step 8: Place lamp facing water bath. Step 11: Count final number of Azolla plants and record values.',
    keyConcepts: [
      'step 2 select equally healthy Azolla plants',
      'step 8 place lamp facing water bath',
      'step 11 count final number Azolla plants record values',
    ],
    keywords: ['healthy', 'select', 'lamp', 'facing', 'count', 'final', 'record'],
    feedbackHit: 'All three steps placed correctly.',
    feedbackMiss: 'Step 2: Select equally healthy Azolla plants (ensures CV). Step 8: Place lamp facing water bath (light). Step 11: Count final number and record values (DV). First mark for one correct; second for all correct.',
  },
  q6_b: {
    marks: 2,
    exemplar: 'Improvement: measure volume of water precisely / place lamp at fixed distance / allow time for water bath to reach set temperature. Justification: ensures constant value for control variable / ensures light level is constant / ensures Azolla experience constant temperature.',
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
    exemplar: 'X-axis: temperature / °C (with unit). Y-axis: mean number of plants. Both axes evenly numbered. All 8 points plotted correctly (±1 unit): (7.5,16) (10,24) (12.5,36) (15,46) (20,64) (27.5,74) (30,64) (37.5,14). Smooth curve drawn through points.',
    keyConcepts: [
      'temperature on x axis with degree C',
      'mean number of plants on y axis',
      'evenly numbered intervals both axes',
      'all 8 points plotted correctly',
    ],
    keywords: ['x-axis', 'y-axis', 'temperature', 'mean number', 'units', 'degrees', 'plotted', 'points', 'curve'],
    feedbackHit: 'Graph correctly plotted with labelled axes, units and accurate data points.',
    feedbackMiss: 'X-axis: temperature (°C), evenly spaced. Y-axis: mean number of plants, evenly spaced. All 8 points must be plotted within ±1 unit. Connect with a smooth curve. Unit (°C) must be on x-axis.',
  },
  q6_d: {
    marks: 5,
    exemplar: 'Trend (3 max): below 27.5°C, rate of photosynthesis/growth increases with temperature; max at 27.5°C (74 plants); above 27.5°C, rate decreases; general description of asymmetrical bell curve. Explanation (2 max): photosynthesis/growth is controlled by enzymes; chemical reactions increase with temperature; enzymes denature above 27.5°C; at higher temperature water lost through evaporation.',
    keyConcepts: [
      'increases below 27.5 degrees',
      'maximum at 27.5 degrees 74 plants',
      'decreases above 27.5 degrees',
      'enzymes control photosynthesis growth',
      'enzymes denature high temperature',
    ],
    keywords: ['increase', 'decrease', 'maximum', '27.5', 'enzymes', 'denature', 'photosynthesis', 'temperature', 'chemical reactions'],
    feedbackHit: 'Three trend points and two scientific explanations.',
    feedbackMiss: 'Trend: increases up to 27.5°C (max 74 plants), then decreases sharply to 14 at 37.5°C. Explanation: enzyme-controlled reactions increase with temperature; above optimum, enzymes denature reducing growth rate.',
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
    feedbackMiss: 'The hypothesis is only partially supported. Below 27.5°C, the increase in plants was approximately proportional to temperature. Above 27.5°C, there was a decrease — not a proportional increase. Third mark only awarded if at least one of the first two marks is earned.',
  },

  // ── Q7: Common Reed ───────────────────────────────────────────────────────
  q7_a: {
    marks: 3,
    exemplar: 'If we add common reed to waste water, then there will be a decrease in the amount of nitrogen (or named contaminant), because common reed has been shown to uptake/store/remove nitrogen (or named contaminant such as lead).',
    keyConcepts: [
      'add common reed to waste water',
      'decrease in named contaminant nitrogen lead',
      'because common reed uptakes stores removes contaminant',
    ],
    keywords: ['common reed', 'waste water', 'decrease', 'nitrogen', 'contaminant', 'uptake', 'absorb', 'remove'],
    feedbackHit: 'Hypothesis correctly structured: if → then (with named contaminant) → because (scientific reason from table).',
    feedbackMiss: 'Structure: If (common reed added to waste water) → then (decrease in named contaminant) → because (scientific justification using data from the table, e.g. common reed shows 50-70% nitrogen removal).',
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
    exemplar: 'Poor control of variables leads to invalid results. Different amounts of nitrogen could lead to different growth rates of the common reed. Or: the starting nitrogen concentration is not the same so the final difference may not be due to the common reed.',
    keyConcepts: [
      'poor control of variables invalid results',
      'different starting nitrogen different growth rates',
      'final result not solely due to common reed',
    ],
    keywords: ['invalid', 'control', 'nitrogen', 'growth rate', 'starting amount', 'results'],
    feedbackHit: 'Correctly explains how uncontrolled nitrogen levels invalidate the results.',
    feedbackMiss: 'Different starting amounts of nitrogen = poor control = invalid results. The different growth rates of common reed due to different nitrogen levels mean the final nitrogen levels cannot be compared fairly.',
  },
  q7_d: {
    marks: 1,
    exemplar: 'Use a known amount of nitrogen each trial (measure using nitrogen test kit/water testing equipment). Or: measure the amount of nitrogen at the beginning so percentage change could be calculated.',
    keyConcepts: ['measure nitrogen at start known amount test kit'],
    keywords: ['measure', 'nitrogen', 'known amount', 'test kit', 'start', 'initial'],
    feedbackHit: 'Specific action to control starting nitrogen amount with appropriate equipment.',
    feedbackMiss: 'Use a nitrogen test kit or water testing equipment to measure and set the same starting amount of nitrogen in each trial, or to record the initial concentration so percentage change can be calculated.',
  },

  // ── Q8: Wild Fish & Fishing Technology ───────────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'Over fishing / habitat loss / pollution / increased fish consumption due to growing human population',
    keyConcepts: ['overfishing habitat loss pollution increased fish consumption'],
    keywords: ['overfishing', 'habitat loss', 'pollution', 'consumption', 'population'],
    feedbackHit: 'Valid reason for decrease in wild fish since 1950.',
    feedbackMiss: 'Reasons include: overfishing, habitat loss, pollution, increased consumption due to growing human population.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Sonar has helped fishermen locate fish populations. Sonar allows fishermen to catch more fish. Larger boats allow more fish to be caught at one time. GPS allows boats to accurately locate fishing areas and track fish. Technical use of larger nets such as trawling.',
    keyConcepts: [
      'sonar locate fish more fish caught',
      'GPS locate fishing areas track fish',
      'larger boats catch more fish at once',
      'larger nets trawling',
    ],
    keywords: ['sonar', 'GPS', 'larger boats', 'nets', 'trawling', 'locate', 'technology'],
    feedbackHit: 'Two valid ways technology has increased fish catches.',
    feedbackMiss: 'Sonar (to locate fish), GPS (to track fishing areas), larger boats (catch more fish), larger/new-material nets. Do not accept "bigger nets" alone without technological context.',
  },
  q8_c: {
    marks: 5,
    exemplar: 'Identifies change in organism 1 (e.g. seal population decreases) because cod is food for seals so less food available. Identifies change in organism 2 (e.g. haddock increases) because fewer cod competing for herring and sand eels (less competition). Correct use of ecological terminology (predator, prey, trophic level, consumer, producer, competition, etc.)',
    keyConcepts: [
      'seal population decreases less food prey',
      'haddock population increases less competition for herring sand eels',
      'ecological terminology predator prey trophic level competition',
    ],
    keywords: ['seal', 'haddock', 'predator', 'prey', 'competition', 'trophic level', 'population', 'decrease', 'increase', 'consumer'],
    feedbackHit: 'Two organisms identified with change stated, justified and ecological terminology used.',
    feedbackMiss: 'Identify two organisms affected. State the change clearly (not just implied). Justify with food web reasoning (less prey for predators; less competition for shared food). Use ecological terminology (predator, prey, consumer, competition, trophic level, etc.).',
  },

  // ── Q9: GM Tilapia & Fish Farming ────────────────────────────────────────
  q9_a: {
    marks: 2,
    exemplar: 'Advantage: fish grow faster so reach market sooner / provides more kg of fish / less feed required. Disadvantage: potentially more expensive / people may not want to buy GM fish / unknown impact on ecosystem.',
    keyConcepts: [
      'advantage faster growth more fish less feed',
      'disadvantage expensive unknown ecosystem impact consumer resistance',
    ],
    keywords: ['advantage', 'disadvantage', 'faster', 'growth', 'expensive', 'ecosystem', 'GM', 'tilapia'],
    feedbackHit: 'One valid advantage and one valid disadvantage of GM tilapia farming.',
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
