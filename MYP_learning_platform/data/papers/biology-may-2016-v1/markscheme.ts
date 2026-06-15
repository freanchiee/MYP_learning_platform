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
  // ── Q1 Transport ──────────────────────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Mangrove root hair cells – Osmosis; Amoeba engulfing food – Neither; Fish gills – Diffusion; Gill cells (CO₂) – Diffusion. Award 1 mark for two correct; 2 marks for all four correct.',
    keyConcepts: ['osmosis', 'diffusion', 'passive transport', 'cell membrane'],
    keywords: ['osmosis', 'diffusion', 'neither', 'transport mechanism'],
    feedbackHit: 'You correctly identified the transport mechanisms from the diagrams.',
    feedbackMiss: 'Remember: osmosis = water movement through a semi-permeable membrane; diffusion = movement of molecules down a concentration gradient (passive); engulfing a food particle (phagocytosis) is an active, energy-requiring process — neither osmosis nor diffusion.',
    blankAnswers: ['Osmosis', 'Neither', 'Diffusion', 'Diffusion'],
  },
  q1_b: {
    marks: 1,
    exemplar: 'Circulatory system.',
    keyConcepts: ['circulatory system', 'heart', 'blood vessels'],
    keywords: ['circulatory', 'cardiovascular'],
    feedbackHit: 'Correct — the circulatory system transports blood.',
    feedbackMiss: 'The system that carries blood is the circulatory (cardiovascular) system, not the respiratory or digestive system.',
  },
  q1_c: {
    marks: 2,
    exemplar: 'Diffusion is a passive process (1). Oxygen moves down its concentration gradient from the water (high O₂) to the blood (low O₂), so no energy (ATP) is needed (1).',
    keyConcepts: ['passive transport', 'diffusion', 'concentration gradient', 'ATP'],
    keywords: ['passive', 'concentration gradient', 'no energy', 'ATP', 'diffusion'],
    feedbackHit: 'You correctly explained that diffusion is passive and occurs down a concentration gradient.',
    feedbackMiss: 'Diffusion does not require energy because it is a passive process driven by the concentration gradient (high → low concentration).',
  },
  q1_d: {
    marks: 1,
    exemplar: 'Nervous system.',
    keyConcepts: ['nervous system', 'signal transmission', 'neurones'],
    keywords: ['nervous system', 'endocrine', 'neurone'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'The nervous system transmits signals as electrical impulses. (The endocrine system also transmits chemical signals via hormones — accept either.)',
  },
  q1_e: {
    marks: 4,
    exemplar: 'Award 1 mark for naming a suitable sense organ and stimulus (e.g. eye–light). Award 1 mark for stimulus detected by receptor and nerve impulse sent to brain. Award 1 mark for brain interprets signal and coordinates response. Award 1 mark for explaining how response aids survival (e.g. detecting movement of a predator → fleeing → avoids being eaten).',
    keyConcepts: ['sense organs', 'stimulus', 'nerve impulse', 'receptor', 'effector', 'survival response'],
    keywords: ['sense organ', 'stimulus', 'receptor', 'nerve impulse', 'brain', 'response', 'survival'],
    feedbackHit: 'Excellent — you linked stimulus, signal transmission and survival response clearly.',
    feedbackMiss: 'Structure your answer: (1) name sense/stimulus; (2) receptor detects → impulse to brain; (3) brain coordinates response via effector; (4) explain why response helps survival.',
  },

  // ── Q2 DNA & Cell Division ────────────────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: 'DNA (deoxyribonucleic acid).',
    keyConcepts: ['DNA', 'genetic information', 'nucleus'],
    keywords: ['DNA', 'deoxyribonucleic acid', 'genetic'],
    feedbackHit: 'Correct — DNA stores genetic information.',
    feedbackMiss: 'The molecule that stores genetic information is DNA (deoxyribonucleic acid), located in the nucleus.',
  },
  q2_b: {
    marks: 3,
    exemplar: '(1) Centromeres split/divide; (2) spindle fibres shorten, pulling chromatids to opposite poles; (3) each pole receives an identical set of chromosomes, ensuring both daughter cells have the same genetic information.',
    keyConcepts: ['anaphase', 'mitosis', 'chromatids', 'spindle fibres', 'centromere', 'identical cells'],
    keywords: ['anaphase', 'centromere', 'spindle fibres', 'chromatids', 'poles', 'identical'],
    feedbackHit: 'You accurately described anaphase events.',
    feedbackMiss: 'In anaphase: centromeres split → spindle fibres contract → sister chromatids pulled to opposite poles → ensures identical chromosome sets in both daughter cells.',
  },
  q2_c: {
    marks: 3,
    exemplar: 'One mark each for three differences from: number of cells (2 vs 4); ploidy (diploid 2n vs haploid n); genetic variation (identical vs genetically varied); purpose (growth/repair vs sexual reproduction); number of divisions (1 vs 2).',
    keyConcepts: ['mitosis', 'meiosis', 'diploid', 'haploid', 'genetic variation', 'cell division'],
    keywords: ['mitosis', 'meiosis', 'diploid', 'haploid', '2 cells', '4 cells', 'genetic variation'],
    feedbackHit: 'You outlined clear differences between mitosis and meiosis products.',
    feedbackMiss: 'Key differences: mitosis → 2 diploid identical cells; meiosis → 4 haploid genetically varied cells.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Non-disjunction: homologous chromosomes (or sister chromatids) fail to separate properly during meiosis (1), resulting in gametes with too many or too few chromosomes; offspring may be aneuploid (e.g. trisomy 21 / Down syndrome) (1). Accept: mutation — change to DNA base sequence during replication.',
    keyConcepts: ['non-disjunction', 'mutation', 'aneuploidy', 'meiosis', 'chromosome number'],
    keywords: ['non-disjunction', 'mutation', 'aneuploidy', 'trisomy', 'chromosome', 'fail to separate'],
    feedbackHit: 'Good — you described a specific problem and its effect on offspring.',
    feedbackMiss: 'Non-disjunction = failure of chromosomes to separate during meiosis → gametes with wrong chromosome number → offspring with conditions such as Down syndrome.',
  },
  q2_e: {
    marks: 3,
    exemplar: 'Crossing over: during prophase I, homologous chromosomes pair and exchange segments (1); new combinations of alleles formed on each chromosome (1); gametes with novel allele combinations → genetically different offspring (1). Accept: independent assortment — random orientation of bivalents at metaphase I → different combinations of maternal/paternal chromosomes in gametes.',
    keyConcepts: ['crossing over', 'independent assortment', 'genetic variation', 'meiosis', 'alleles', 'gametes'],
    keywords: ['crossing over', 'independent assortment', 'allele', 'gamete', 'genetic variation', 'prophase I'],
    feedbackHit: 'You explained how meiotic processes generate genetic diversity.',
    feedbackMiss: 'Crossing over exchanges DNA segments between homologous chromosomes → new allele combinations → genetically unique gametes → genetically different offspring.',
  },

  // ── Q3 Identical Twins ────────────────────────────────────────────────────
  q3_a: {
    marks: 1,
    exemplar: 'Accept any pair with a clearly stated distinguishing feature (e.g. Pair 1: one twin has more tanned skin; Pair 2: one twin has dyed hair; Pair 3: one twin is more muscular).',
    keyConcepts: ['phenotype', 'genotype', 'environment', 'identical twins'],
    keywords: ['feature', 'difference', 'twins', 'phenotype', 'identify'],
    feedbackHit: 'You identified a clear observable difference between the twins.',
    feedbackMiss: 'State which pair and describe one feature that differs between the two individuals (e.g. skin tone, dyed hair, muscle build).',
  },
  q3_b: {
    marks: 1,
    exemplar: 'Any environmental factor consistent with the identified difference: e.g. sun exposure (tanning), hair dye, exercise/diet (muscle build), lifestyle choice.',
    keyConcepts: ['environment', 'gene expression', 'phenotype', 'epigenetics'],
    keywords: ['environment', 'diet', 'lifestyle', 'sun exposure', 'factor'],
    feedbackHit: 'Correct — environmental factors can modify the phenotype of genetically identical individuals.',
    feedbackMiss: 'Since twins are genetically identical, any phenotypic difference must be due to an environmental factor (e.g. sun exposure, hair dye, exercise).',
  },
  q3_c: {
    marks: 2,
    exemplar: 'Environmental modifications to phenotype are not encoded in DNA (1) and therefore are not passed on to offspring; children inherit genes (genotype) not acquired characteristics (1). Accept: epigenetic changes may not be heritable.',
    keyConcepts: ['inheritance', 'genotype vs phenotype', 'acquired characteristics', 'DNA'],
    keywords: ['inherited', 'DNA', 'not encoded', 'acquired', 'offspring', 'genotype'],
    feedbackHit: 'You correctly explained that environmentally acquired traits are not heritable.',
    feedbackMiss: 'Only changes to DNA are inherited. Environmental modifications (hair dye, sun tan, gained muscle) are not encoded in the genetic material and cannot be passed to children.',
  },
  q3_d: {
    marks: 3,
    exemplar: 'B and D are identical twins (1). Both can roll the tongue, a genetic trait (1); both have attached earlobes, a genetic trait (1) — and both have blue eyes. Accept any two genetic traits shared by B and D but not by A and C. Note: the difference between B and D (D is more tanned) is an environmental trait and does not rule them out.',
    keyConcepts: ['identical twins', 'genetic traits', 'evidence from data', 'justify'],
    keywords: ['B', 'D', 'identical', 'tongue rolling', 'earlobes', 'eye colour', 'genetic trait', 'justify'],
    feedbackHit: 'You correctly identified B and D as identical twins with valid justification.',
    feedbackMiss: 'Identical twins share all genetic traits. Look for two people with the same values for every genetic trait (eye colour, tongue rolling, earlobes). The environmental trait (skin tone) may differ.',
  },

  // ── Q4 Photosynthesis Investigation ──────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'water + carbon dioxide → glucose + oxygen. Accept reactants in either order; accept products in either order.',
    keyConcepts: ['photosynthesis', 'word equation', 'reactants', 'products'],
    keywords: ['water', 'carbon dioxide', 'glucose', 'oxygen', 'photosynthesis'],
    feedbackHit: 'Correct word equation.',
    feedbackMiss: 'Photosynthesis: water + carbon dioxide → glucose + oxygen. Reactants (inputs) on the left; products (outputs) on the right.',
    blankAnswers: ['water', 'carbon dioxide', 'glucose', 'oxygen'],
  },
  q4_b: {
    marks: 1,
    exemplar: 'How does temperature affect the rate of photosynthesis? (Accept equivalent formulation naming IV and DV — e.g. how does temperature affect the number of bubbles produced per minute.)',
    keyConcepts: ['problem statement', 'independent variable', 'dependent variable'],
    keywords: ['temperature', 'rate of photosynthesis', 'problem', 'affect', 'bubbles'],
    feedbackHit: 'You correctly stated the problem linking IV and DV.',
    feedbackMiss: 'A problem statement names the independent variable (temperature) and dependent variable (rate of photosynthesis / bubbles per minute). Format: "How does [IV] affect [DV]?"',
  },
  q4_c: {
    marks: 4,
    exemplar: 'If the temperature of the water bath is increased, then the rate of photosynthesis (bubbles per minute) will increase (1), because higher temperatures increase the kinetic energy of molecules and the activity of the enzymes that control photosynthesis (1), up to an optimum temperature (1); beyond the optimum, the enzymes denature and the rate decreases (1).',
    keyConcepts: ['hypothesis', 'enzyme activity', 'temperature', 'photosynthesis rate', 'optimum'],
    keywords: ['hypothesis', 'temperature', 'enzyme', 'kinetic energy', 'optimum', 'denature', 'rate', 'bubbles'],
    feedbackHit: 'Excellent hypothesis with clear prediction, mechanism and limitation.',
    feedbackMiss: 'A strong hypothesis: state prediction (rate increases with temperature); explain WHY (enzyme activity increases); mention optimum and denaturation above optimum.',
  },
  q4_d: {
    marks: 10,
    exemplar: 'IV: temperature of water bath — change by 10 °C intervals (e.g. 10, 20, 30, 40, 50 °C) using water baths (2). DV: number of bubbles per minute released from the pondweed — count with a timer (2). CV (at least 3): species of pondweed (same species throughout) (1); length of pondweed used (same length) (1); volume/concentration of NaHCO₃ solution (same) (1); light intensity/distance from lamp (same) (1); time allowed before counting (same) (1). Total capped at 10.',
    keyConcepts: ['variables', 'independent variable', 'dependent variable', 'control variable', 'manipulation', 'measurement'],
    keywords: ['independent', 'dependent', 'control', 'temperature', 'bubbles', 'count', 'manipulate'],
    feedbackHit: 'You identified all key variables and outlined how to manipulate/measure them.',
    feedbackMiss: 'State IV (temperature), DV (bubbles per minute), and at least 3 CVs. For each, explain HOW it will be changed/measured/kept constant.',
  },
  q4_e: {
    marks: 2,
    exemplar: 'At least 3 trials (1). Justification: to increase reliability of data / to allow calculation of a mean / to identify and discard anomalous results (1).',
    keyConcepts: ['reliability', 'trials', 'mean', 'anomalous results', 'reproducibility'],
    keywords: ['trials', 'repeat', 'reliability', 'mean', 'anomalous'],
    feedbackHit: 'Correct — repeating trials increases reliability.',
    feedbackMiss: 'State a number (≥3 trials) and justify: repetition reduces the effect of anomalous results and improves reliability; allows calculation of a mean.',
  },

  // ── Q5 Light Intensity & Photosynthesis Data ─────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Table includes: title (1); column headers with units (light intensity in %; bubbles per minute) (1); rows for each intensity 20–100 % (1); columns for Trial 1, Trial 2, Trial 3 and Mean (1).',
    keyConcepts: ['data table design', 'headers', 'units', 'title', 'trials'],
    keywords: ['table', 'header', 'unit', 'percent', 'bubbles per minute', 'trial', 'mean', 'title'],
    feedbackHit: 'Your table design is clear with all required components.',
    feedbackMiss: 'A complete data table needs: title, column headers with units, rows for each light intensity, columns for each trial and a mean column.',
  },
  q5_b: {
    marks: 3,
    exemplar: '20 % → 11; 40 % → 23; 60 % → 34; 80 % → 41; 100 % → 44. Award 1 mark per two correct means (round to nearest whole number).',
    keyConcepts: ['mean calculation', 'data processing', 'rounding'],
    keywords: ['mean', 'average', 'calculate', '11', '23', '34', '41', '44'],
    feedbackHit: 'Correct mean values calculated.',
    feedbackMiss: 'Add the three trial values and divide by 3 to find the mean. Round to the nearest whole number (e.g. (10+12+11)/3 = 11).',
  },
  q5_c: {
    marks: 3,
    exemplar: 'Appropriate graph type (line graph) (1); axes correctly labelled with units (x = light intensity in %; y = mean bubbles per minute) (1); points plotted accurately and a smooth curve that levels off (plateaus) at high intensity (1).',
    keyConcepts: ['graph construction', 'axes', 'units', 'line graph', 'plateau'],
    keywords: ['graph', 'axes', 'x-axis', 'y-axis', 'unit', 'label', 'plot', 'title', 'plateau'],
    feedbackHit: 'Your graph is correctly constructed with labelled axes and accurate data.',
    feedbackMiss: 'Use a line graph (continuous IV). Label both axes with units; plot all five mean values accurately; the curve should level off at high light intensity.',
  },

  // ── Q6 Fertiliser & Biomass Investigation Analysis ───────────────────────
  q6_a: {
    marks: 1,
    exemplar: 'Plants receiving more fertiliser (4 g/week) showed a greater increase in biomass / gained more mass than plants receiving 2 g/week.',
    keyConcepts: ['trend', 'data analysis', 'biomass', 'fertiliser'],
    keywords: ['trend', 'biomass', 'increase', 'more fertiliser', 'greater'],
    feedbackHit: 'You correctly identified the key trend in the data.',
    feedbackMiss: 'State the general pattern: as the amount of nitrogen fertiliser increases, the increase in plant biomass also increases.',
  },
  q6_b: {
    marks: 3,
    exemplar: 'Nitrogen is needed to make amino acids/proteins and chlorophyll (1); plants with more nitrogen build more chlorophyll and can carry out more photosynthesis, producing more glucose (1); glucose and proteins are used to build new tissue, increasing biomass (1).',
    keyConcepts: ['photosynthesis', 'nitrogen', 'proteins', 'chlorophyll', 'biomass', 'organic molecules'],
    keywords: ['nitrogen', 'protein', 'amino acid', 'chlorophyll', 'photosynthesis', 'glucose', 'biomass'],
    feedbackHit: 'Excellent scientific explanation linking nitrogen, growth and biomass.',
    feedbackMiss: 'Explain the mechanism: nitrogen is needed for proteins and chlorophyll → more nitrogen → more chlorophyll → more photosynthesis and more protein → more tissue built → greater biomass.',
  },
  q6_c: {
    marks: 1,
    exemplar: 'The results support the hypothesis because the 4 g/week group showed a greater increase in biomass (36 g) than the 2 g/week group (18 g).',
    keyConcepts: ['hypothesis evaluation', 'data support', 'conclusion'],
    keywords: ['support', 'hypothesis', 'data', 'results', 'greater increase'],
    feedbackHit: 'Correct — you linked the data to the hypothesis.',
    feedbackMiss: 'State whether the data supports or refutes the hypothesis and refer to specific data values (e.g. 36 g vs 18 g increase).',
  },
  q6_d: {
    marks: 4,
    exemplar: 'Strength: e.g. multiple plants measured in each group → more reliable mean (2). Weakness: e.g. only two fertiliser amounts tested → limited data range, cannot identify optimum; OR other confounding variables not controlled (2).',
    keyConcepts: ['strength', 'weakness', 'validity', 'reliability', 'method evaluation'],
    keywords: ['strength', 'weakness', 'reliable', 'valid', 'replicates', 'range', 'confounding'],
    feedbackHit: 'You identified a clear strength and weakness with justification.',
    feedbackMiss: 'Strength: state what feature makes the investigation reliable (e.g. multiple replicates). Weakness: identify a limitation (e.g. only two fertiliser amounts tested).',
  },
  q6_e: {
    marks: 4,
    exemplar: 'Improvement 1: test a wider range of fertiliser amounts (e.g. 0, 1, 2, 3, 4, 5 g) (1) to identify the optimum amount and produce a more complete picture of the relationship (1). Improvement 2: increase the number of plants per group (e.g. to 10+) (1) to improve reliability of the mean and reduce the effect of anomalies (1).',
    keyConcepts: ['investigation improvement', 'range of values', 'replicates', 'reliability', 'validity'],
    keywords: ['improvement', 'range', 'replicates', 'reliability', 'optimum', 'anomalous'],
    feedbackHit: 'You suggested two improvements and justified each.',
    feedbackMiss: 'For each improvement: state what you would change AND explain why it improves the investigation (reliability/validity).',
  },
  q6_f: {
    marks: 1,
    exemplar: 'Accept any valid extension other than temperature or light: e.g. effect of a different nutrient (phosphorus, potassium); soil pH; amount of water; species of plant.',
    keyConcepts: ['extension', 'further investigation', 'variables'],
    keywords: ['extension', 'phosphorus', 'potassium', 'pH', 'water', 'species', 'further investigation'],
    feedbackHit: 'Good — a valid extension to the investigation.',
    feedbackMiss: 'Suggest a new independent variable to test (not temperature or light). Examples: a different nutrient, soil pH, amount of water, plant species.',
  },

  // ── Q7 Photosynthesis Design (Criteria B) ─────────────────────────────────
  q7_: {
    marks: 16,
    exemplar: 'Full Criteria B rubric (16 marks). Hypothesis (2): testable prediction naming IV and DV with scientific reason (e.g. red and blue light give a higher rate than green because chlorophyll absorbs red/blue and reflects green). Variables (4): IV = colour/wavelength of light (red, green, blue filters); DV = rate of photosynthesis (bubbles/min); ≥3 CVs with justification (light intensity, temperature, plant type, NaHCO₃ concentration). Method (4): step-by-step, reproducible, appropriately sequenced. Data table (2): titled, labelled columns with units. Data processing (2): means calculated, appropriate graph (bar chart for discrete colours). Safety (2): at least one safety consideration with mitigation.',
    keyConcepts: ['Criteria B', 'investigation design', 'hypothesis', 'variables', 'method', 'data collection', 'light colour', 'wavelength', 'photosynthesis'],
    keywords: ['hypothesis', 'independent variable', 'dependent variable', 'control variable', 'method', 'colour', 'wavelength', 'chlorophyll', 'bubbles', 'data table', 'graph'],
    feedbackHit: 'Your investigation design covers all components of Criteria B.',
    feedbackMiss: 'A complete Criteria B answer needs: hypothesis with reasoning; IV/DV/CV; step-by-step method; data table design; data processing plan; safety considerations.',
  },

  // ── Q8 Biodiversity ───────────────────────────────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'The variety of different species of organisms in a given area/ecosystem.',
    keyConcepts: ['biodiversity', 'species richness', 'variety'],
    keywords: ['biodiversity', 'variety', 'species', 'different', 'area'],
    feedbackHit: 'Correct definition of biodiversity.',
    feedbackMiss: 'Biodiversity = the variety/number of different species in a given area or ecosystem.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Overfishing (1): removing large numbers of fish from the reef destroys feeding relationships and can cause several species to disappear, reducing biodiversity (1). Accept: pollution, coral bleaching caused by warming seas, coastal development/destruction of the reef.',
    keyConcepts: ['human impact', 'overfishing', 'coral bleaching', 'species loss'],
    keywords: ['overfishing', 'pollution', 'bleaching', 'species', 'reef', 'human action'],
    feedbackHit: 'You identified and explained a specific human action that reduces biodiversity.',
    feedbackMiss: 'Name a specific action (e.g. overfishing or coral bleaching from warming seas) and explain how it reduces biodiversity (removes/kills species → fewer species survive).',
  },
  q8_c: {
    marks: 4,
    exemplar: 'If a prey species is lost: predators that rely on it for food will decline (1); this may allow other prey species to increase unchecked (1). Loss of a producer (e.g. coral or algae) removes shelter/energy input for many reef organisms (1). Disruption of the food web causes cascade effects through multiple trophic levels (1). Keystone species removal amplifies effects. Accept other valid food web reasoning (max 4).',
    keyConcepts: ['food web', 'predator-prey', 'trophic levels', 'cascade effects', 'keystone species'],
    keywords: ['food web', 'predator', 'prey', 'trophic level', 'cascade', 'population', 'increase', 'decrease'],
    feedbackHit: 'You traced the cascade effects of species loss through the food web.',
    feedbackMiss: 'Think in food-chain terms: loss of one species affects what eats it AND what it eats. Describe both upward and downward effects in the food web.',
  },

  // ── Q9 Food Web ───────────────────────────────────────────────────────────
  q9_a: {
    marks: 1,
    exemplar: 'Food web.',
    keyConcepts: ['food web', 'ecological diagram'],
    keywords: ['food web'],
    feedbackHit: 'Correct.',
    feedbackMiss: 'The diagram shows multiple interconnected food chains — this is called a food web.',
  },
  q9_b: {
    marks: 2,
    exemplar: 'Water plant: producer (1) — converts light energy into glucose/organic molecules by photosynthesis; forms the base of the food web. Pond snail: primary consumer/herbivore (1) — eats algae and plants, transfers energy to secondary consumers.',
    keyConcepts: ['producer', 'consumer', 'herbivore', 'ecosystem roles', 'trophic level'],
    keywords: ['producer', 'primary consumer', 'herbivore', 'photosynthesis', 'energy', 'role'],
    feedbackHit: 'You correctly stated the trophic roles of both organisms.',
    feedbackMiss: 'Water plant = producer (makes its own food by photosynthesis). Pond snail = primary consumer/herbivore (eats the plant/algae).',
  },
  q9_c: {
    marks: 2,
    exemplar: 'Loss of the water plant would remove a primary energy source from the food web, causing the snails and tadpoles that feed on it to decline, and then the consumers above them (1). Loss of the pond snail would remove a key food source for the stickleback fish, causing the fish and then the heron to decline (1). Both are essential links in the food web and the ecosystem cannot sustain itself without either.',
    keyConcepts: ['ecosystem stability', 'food web', 'interdependence', 'justification'],
    keywords: ['justify', 'equally important', 'food web', 'energy', 'producer', 'consumer', 'decline'],
    feedbackHit: 'You justified the importance of both organisms with food-web reasoning.',
    feedbackMiss: 'Justify each organism separately: explain what would happen to the ecosystem if each one were lost.',
  },

  // ── Q10 Frozen Zoos / Animal Cryobanks ────────────────────────────────────
  q10_a: {
    marks: 1,
    exemplar: 'Accept any of: preserves animal genetic diversity; safeguards endangered species from extinction; maintains genetic resources for future breeding; insurance against habitat destruction.',
    keyConcepts: ['frozen zoo', 'conservation', 'genetic diversity', 'extinction'],
    keywords: ['conservation', 'diversity', 'genetic', 'extinction', 'breeding', 'insurance'],
    feedbackHit: 'Correct reason for the importance of a frozen zoo.',
    feedbackMiss: 'Frozen zoos preserve the genetic diversity of animals and prevent extinction of endangered species.',
  },
  q10_b: {
    marks: 3,
    exemplar: 'Cells, eggs or sperm are collected from animals (especially endangered species) (1); a cryoprotectant is added and the samples are cooled to prevent damaging ice crystals (1); they are stored at a very low temperature in liquid nitrogen (approximately −196 °C) to halt all biological activity and extend viability (1). Accept: periodic viability testing and use in breeding programmes as an additional point.',
    keyConcepts: ['frozen zoo process', 'cryoprotectant', 'storage temperature', 'viability', 'liquid nitrogen'],
    keywords: ['collect', 'cells', 'cryoprotectant', 'freeze', 'liquid nitrogen', '−196 °C', 'viability', 'store'],
    feedbackHit: 'You outlined the key steps in creating a frozen zoo.',
    feedbackMiss: 'Three key steps: (1) collect cells/eggs/sperm; (2) add cryoprotectant and cool to avoid ice damage; (3) store in liquid nitrogen at about −196 °C to halt biological activity.',
  },
  q10_c: {
    marks: 17,
    exemplar: 'Full Criteria D rubric (17 marks). Define key terms: biodiversity, frozen zoo, conservation (2). Advantages: preserves genetic diversity; insurance against extinction; supports research and future breeding; can store many species in a small space (4). Disadvantages: expensive infrastructure; does not preserve habitat or natural behaviour; not all species can be revived; samples may lose viability; limited equity of access (4). Social implications: ethics of de-extinction; public engagement and support (2). Economic implications: high cost vs long-term benefit (2). Environmental: does not replace in-situ conservation; must be complemented by habitat protection (2). Appraisal: frozen zoos are valuable but not sufficient alone; must integrate with habitat conservation and addressing root causes of biodiversity loss (1).',
    keyConcepts: ['Criteria D', 'frozen zoo', 'advantages', 'disadvantages', 'social implications', 'economic implications', 'environmental implications', 'appraisal', 'conservation'],
    keywords: ['advantage', 'disadvantage', 'social', 'economic', 'environmental', 'appraisal', 'frozen zoo', 'biodiversity', 'conservation', 'in-situ', 'ex-situ'],
    feedbackHit: 'Your extended response covers multiple perspectives and includes a strong appraisal.',
    feedbackMiss: 'Structure: define terms → advantages → disadvantages → social/economic/environmental implications → balanced appraisal. Use scientific language and specific examples throughout.',
  },
}
