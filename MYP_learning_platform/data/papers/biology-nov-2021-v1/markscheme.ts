import 'server-only'

type MSEntry = {
  marks: number
  exemplar: string
  keyConcepts: string[]
  keywords: string[]
  feedbackHit: string
  feedbackMiss: string
  blankAnswers?: string[]
}

type MCQEntry = {
  type: 'mcq'
  correct: number
}

type MSRecord = Record<string, MSEntry | MCQEntry>

export const MS: MSRecord = {

  // Q1 — Honeybees

  q1_a: {
    marks: 1,
    exemplar: 'Insect.',
    keyConcepts: ['classification insect honeybee arthropod'],
    keywords: ['insect', 'arthropod', 'honeybee', 'bee'],
    feedbackHit: 'Correct classification.',
    feedbackMiss: 'Honeybees are insects — they have six legs, three body parts (head, thorax, abdomen) and a pair of antennae.',
  },

  q1_b: {
    marks: 2,
    exemplar: 'Pollination: pollen needs to be transferred from one plant to another for reproduction / to increase genetic variation [1]. Seed dispersal: seeds are transported away from the parent plant for a better chance to survive / increased chance to grow / decreased competition [1]. Do not accept a description of pollen moving alone.',
    keyConcepts: ['pollination seed dispersal reproduction genetic variation plants'],
    keywords: ['pollination', 'pollen', 'transferred', 'reproduction', 'variation', 'seed dispersal', 'transported', 'survive', 'competition'],
    feedbackHit: 'Good explanation of why both pollination and seed dispersal matter for plants.',
    feedbackMiss: 'Pollination enables fertilization for reproduction. Seed dispersal spreads seeds to new areas, reducing competition with parent plants.',
  },

  q1_c: {
    marks: 1,
    exemplar: 'Apple tree / clover. Do not accept "plant" alone.',
    keyConcepts: ['food web producer photosynthesis autotroph'],
    keywords: ['producer', 'apple tree', 'clover', 'plant'],
    feedbackHit: 'Correct identification of a producer.',
    feedbackMiss: 'A producer makes its own food through photosynthesis — it must be a specific plant name from the food web (apple tree or clover).',
  },

  q1_d: {
    marks: 2,
    exemplar: 'Advantage: honeybees pollinate the apple blossom, increasing the fruit yield / improving crop quality [1]. Disadvantage: honeybees may sting workers, or visit clover instead of apple flowers so fewer apple flowers are pollinated, or compete with the crop for resources [1].',
    keyConcepts: ['keystone species advantage disadvantage pollination crop yield'],
    keywords: ['advantage', 'disadvantage', 'pollinate', 'yield', 'sting', 'clover', 'crop', 'compete'],
    feedbackHit: 'Good identification of both advantage and disadvantage to apple farmers.',
    feedbackMiss: 'Honeybees help by pollinating apple blossom (raising yield) but can harm by stinging workers or by favouring clover over the crop.',
  },

  // Q2 — Cell Division

  q2_a: {
    marks: 2,
    exemplar: 'Any two from: growth; repair or replacement (of damaged/dead cells); (sexual) reproduction — to produce gametes; (asexual) reproduction. Allow "reproduction" alone for one mark.',
    keyConcepts: ['cell division mitosis reasons growth repair reproduction'],
    keywords: ['growth', 'repair', 'replacement', 'gametes', 'reproduction', 'asexual'],
    feedbackHit: 'Correct reasons for cell division.',
    feedbackMiss: 'Cells divide for: growth (making more cells), repair (replacing damaged cells), and reproduction (producing gametes for sexual reproduction).',
  },

  q2_b: {
    marks: 2,
    exemplar: 'Mitosis only: daughter cells have 46 chromosomes. Both: begins with a single parent cell. Meiosis only: begins with two copies of each chromosome; genetically non-identical daughter cells. Scoring: one correctly placed in mitosis AND both AND meiosis = 1 mark; or mitosis OR both OR meiosis fully correct = 1 mark; all correctly placed = 2 marks.',
    keyConcepts: ['mitosis meiosis differences similarities chromosome daughter cells'],
    keywords: ['mitosis', 'meiosis', 'both', '46 chromosomes', 'single parent cell', 'two copies', 'genetically non-identical', 'daughter cells'],
    feedbackHit: 'Correct sorting of mitosis and meiosis characteristics.',
    feedbackMiss: 'Mitosis: 2 identical daughter cells with 46 chromosomes. Meiosis: 4 genetically different daughter cells with 23 chromosomes, starts with chromosome duplication.',
    blankAnswers: ['Daughter cells have 46 chromosomes', 'Begins with a single parent cell', 'Begins with two copies of each chromosome', 'Genetically non-identical daughter cells'],
  },

  q2_c: {
    marks: 4,
    exemplar: 'Every individual has different genetic material [1]. Every sex cell/gamete (pollen or egg) is unique [1]. Genetic material from two parent plants is combined [1]. Further point: every sex cell has an equal chance of being fertilised; offspring express traits from both parents; each individual is therefore unique [1].',
    keyConcepts: ['fertilization genetic variation gametes unique parents inheritance'],
    keywords: ['fertilization', 'genetic material', 'gamete', 'pollen', 'egg', 'unique', 'two parents', 'combined', 'variation', 'traits'],
    feedbackHit: 'Excellent explanation linking fertilization to genetic variation.',
    feedbackMiss: 'Each gamete (pollen or egg) is genetically unique (from meiosis). When two unique gametes from two parent plants fuse, the offspring gets a unique combination of genes from both parents.',
  },

  // Q3 — Homeostasis

  q3_a: {
    marks: 2,
    exemplar: 'System to monitor temperature: nervous system [1]. System to maintain temperature: cardio-vascular system OR muscular system [1].',
    keyConcepts: ['homeostasis body systems temperature monitoring nervous cardiovascular'],
    keywords: ['nervous system', 'cardio-vascular system', 'muscular system', 'monitor', 'maintain', 'temperature'],
    feedbackHit: 'Correct identification of the two body systems.',
    feedbackMiss: 'The nervous system detects temperature changes (monitoring). The cardiovascular or muscular system responds to maintain the correct temperature.',
    blankAnswers: ['Nervous system', 'Cardio-vascular system'],
  },

  q3_b: {
    marks: 3,
    exemplar: 'The nervous system detects/communicates the reduction in temperature in the cold water [1]. This causes vasoconstriction / blood is diverted away from extremities / hairs rise to trap warm air / shivering (involuntary muscle contractions) [1]. Thereby reducing heat loss / producing heat (in muscles) [1]. ORA.',
    keyConcepts: ['temperature regulation nervous system cardiovascular vasoconstriction shivering response'],
    keywords: ['nervous system', 'detects', 'vasoconstriction', 'blood vessels', 'narrow', 'hairs rise', 'shivering', 'muscle contractions', 'heat loss'],
    feedbackHit: 'Good description of the two systems working together in the cold.',
    feedbackMiss: 'Nervous system detects cold → sends signal → cardiovascular system (vasoconstriction) or muscular system (shivering) responds to conserve or generate heat.',
  },

  q3_c: {
    marks: 5,
    exemplar: 'Enzymes have an optimum temperature [1]. Too cold: reactions do not occur fast enough / insufficient kinetic energy for successful collisions [1]. Too hot: enzymes change shape / denature [1]. The active site changes shape [1]. The substrate can no longer fit / enzyme can no longer function/catalyse reactions [1]. Correct use of a term from: active site, denature, catalyse, lock and key, substrate. Do not accept "die".',
    keyConcepts: ['enzyme optimum temperature denaturation active site substrate temperature dependence'],
    keywords: ['optimum temperature', 'denature', 'active site', 'substrate', 'shape', 'kinetic energy', 'catalyse', 'lock and key', 'no longer function'],
    feedbackHit: 'Excellent explanation of enzyme temperature sensitivity with correct terminology.',
    feedbackMiss: 'Enzymes work best at optimum temperature. Too cold: not enough energy for reactions. Too hot: enzyme denatures — active site changes shape — substrate cannot fit — enzyme cannot catalyse reaction.',
  },

  // Q4 — Bacteria Investigation

  q4_a: {
    marks: 1,
    exemplar: 'Image C (the rod-shaped bacterium with flagellum — a prokaryotic cell).',
    keyConcepts: ['bacterial cell structure prokaryote rod-shaped flagellum identification'],
    keywords: ['bacterial cell', 'prokaryote', 'rod-shaped', 'flagellum', 'no nucleus', 'Image C'],
    feedbackHit: 'Correct identification of the bacterial cell.',
    feedbackMiss: 'Bacterial cells are prokaryotes: no membrane-bound nucleus, no mitochondria. They are usually rod-shaped, spherical, or spiral.',
  },

  q4_b: {
    marks: 1,
    exemplar: 'Species A.',
    keyConcepts: ['bacterial colony identification appearance form colour margin elevation'],
    keywords: ['species A', 'colony', 'appearance', 'colour', 'cream', 'circular', 'raised', 'entire'],
    feedbackHit: 'Correct species identified from colony appearance.',
    feedbackMiss: 'Match the circled colony characteristics (cream, circular, raised, entire margin) to the species identification chart — these match Species A.',
  },

  q4_c: {
    marks: 2,
    exemplar: 'Qualitative data (any one): colour; form (shape); elevation; margin [1]. Quantitative data (any one): number of colonies; measurement of size or diameter or radius of colony [1]. Allow named examples.',
    keyConcepts: ['qualitative quantitative data bacteria colony agar plate'],
    keywords: ['qualitative', 'quantitative', 'colour', 'form', 'elevation', 'margin', 'number of colonies', 'diameter', 'size'],
    feedbackHit: 'Correct identification of one qualitative and one quantitative data type.',
    feedbackMiss: 'Qualitative = descriptive (colour, shape). Quantitative = numerical/measurable (number of colonies, size in mm).',
  },

  q4_d: {
    marks: 2,
    exemplar: 'A research question linking different sanitising agents to an implied DV, e.g.: "How does the type of hand sanitiser affect the zone of no growth on an agar plate?" — 1 mark for linking sanitisers to zone of no growth/growth of bacteria; 1 mark for implied measurable DV.',
    keyConcepts: ['research question formulate hand sanitiser bacteria investigation'],
    keywords: ['type of sanitiser', 'hand sanitiser', 'zone of no growth', 'zone of inhibition', 'bacterial growth', 'research question', 'how does'],
    feedbackHit: 'Good research question linking independent and dependent variables.',
    feedbackMiss: 'Start with "How does..." Include the IV (type of hand sanitiser) and an implied DV (zone of no growth / bacterial growth).',
  },

  q4_e: {
    marks: 4,
    exemplar: 'IV: type of hand sanitiser [1]. DV: diameter of zone of inhibition OR clear zone around disk (must be measurable — do not accept "growth" without measurement context) [1]. CVs (any 2 reasonable): species of bacteria on the plate; size of disk; time of immersion of disk; concentration of sanitiser; time period of bacterial growth [2].',
    keyConcepts: ['variables independent dependent control hand sanitiser bacteria investigation'],
    keywords: ['type of sanitiser', 'IV', 'diameter', 'zone of inhibition', 'DV', 'measurable', 'species of bacteria', 'size of disk', 'concentration', 'CV'],
    feedbackHit: 'Correct identification of IV, DV and two CVs.',
    feedbackMiss: 'IV = what you change (type of hand sanitiser). DV = what you measure (diameter of zone of no growth). CVs = everything else kept the same.',
  },

  q4_f: {
    marks: 1,
    exemplar: 'Water is a negative control; to show the effect is not caused by the disk or the water itself; the zone of no growth is caused by the sanitiser (not the disk); to measure how effective water is at stopping growth.',
    keyConcepts: ['negative control water sanitiser experiment purpose'],
    keywords: ['negative control', 'water', 'effect not caused by disk', 'sanitiser', 'measure effectiveness'],
    feedbackHit: 'Good explanation of the control condition.',
    feedbackMiss: 'Water was tested as a negative control — it proves any zone of no growth is caused by the sanitiser, not by the disk itself.',
  },

  q4_g: {
    marks: 2,
    exemplar: 'Plate 2 measurements: Alcohol gel = 22 mm; Aloe-only gel = 6 mm; Benzalkonium gel = 14 mm; Triclosan gel = 17 mm; Water = 0 mm. Two correct measurements (±1 mm) = 1 mark; all correct (±1 mm) = 2 marks.',
    keyConcepts: ['measurement zone of no growth agar plate sanitiser accuracy'],
    keywords: ['alcohol gel', 'aloe', 'benzalkonium', 'triclosan', 'water', 'mm', 'measurement', 'zone of no growth'],
    feedbackHit: 'Accurate measurements of zones of no growth.',
    feedbackMiss: 'Measure the diameter of the clear zone around each disk to the nearest mm using the ruler.',
  },

  q4_h: {
    marks: 4,
    exemplar: 'Strengths (any 1): a range of sanitisers produced results that can be compared; a control (water) was used; reference to reliability of data linked to a named control variable. Weaknesses (any 1): only two trials; results cannot be verified with only two data points; cannot identify outliers; data for one sanitiser was not reproducible. Two additional statements from either list [4 marks total: 2 strengths + 2 weaknesses, or other combinations]. ORA accept either but not both.',
    keyConcepts: ['strength weakness method evaluation reliability control variables sanitiser'],
    keywords: ['strength', 'weakness', 'range', 'control', 'reliability', 'two trials', 'outliers', 'not reproducible', 'verify'],
    feedbackHit: 'Good evaluation of experimental strengths and weaknesses.',
    feedbackMiss: 'Strengths: range of variables, control used. Weaknesses: few repeats (only 2 trials) means you cannot spot outliers or verify results.',
  },

  // Q5 — Antibiotics and Resistance

  q5_a: {
    marks: 2,
    exemplar: 'Stage 2: bacteria sensitive to the antibiotic are killed by it [1] / only resistant individuals survive. Stage 5: no bacteria are killed (as all are now resistant) / population of resistant bacteria increases / antibiotic has no effect [1]. Do not accept references to immunity.',
    keyConcepts: ['antibiotic resistance evolution stages natural selection sensitive resistant'],
    keywords: ['sensitive bacteria', 'killed', 'resistant', 'survive', 'no effect', 'antibiotic', 'population increases'],
    feedbackHit: 'Correct outline of stages 2 and 5 of resistance evolution.',
    feedbackMiss: 'Stage 2: antibiotic kills non-resistant bacteria. Stage 5: all bacteria are now resistant — antibiotic has no effect on them.',
  },

  q5_b: {
    marks: 2,
    exemplar: 'Data points: 2010=7.0%, 2011=6.0%, 2012=7.8%, 2013=9.4%, 2014=10.2%. Two data points correctly plotted (±0.1) = 1 mark; all five data points correctly plotted (±0.1) = 2 marks.',
    keyConcepts: ['graph plotting data points antibiotic resistance percentage'],
    keywords: ['2010', '2011', '2012', '2013', '2014', 'percentage', 'resistance', 'data points', 'graph'],
    feedbackHit: 'Accurate data plotting on the graph.',
    feedbackMiss: 'Plot each year with the correct % resistance value. 2010=7.0, 2011=6.0, 2012=7.8, 2013=9.4, 2014=10.2.',
  },

  q5_c: {
    marks: 3,
    exemplar: 'Vancomycin [1]. It has the largest AND clearest (no hazy region) zone of no growth [1]. Scientific explanation: there are no resistant bacteria so the zone is completely clear; vancomycin is effective at a lower concentration than the other antibiotics [1].',
    keyConcepts: ['antibiotic sensitivity zone of inhibition effectiveness vancomycin agar plate'],
    keywords: ['vancomycin', 'largest zone', 'clearest', 'no resistant bacteria', 'effective', 'lower concentration'],
    feedbackHit: 'Correct antibiotic identified with good scientific explanation.',
    feedbackMiss: 'Vancomycin has the biggest, completely clear zone of no growth — no resistant bacteria present means it kills all bacteria in that zone.',
  },

  q5_d: {
    marks: 2,
    exemplar: 'As the population of bacteria increases, the percentage of light absorbed increases [1]. This is a positive / proportional / linear relationship [1]. Award two marks for a directly proportional statement.',
    keyConcepts: ['colorimeter light absorption bacteria population relationship proportional'],
    keywords: ['increases', 'positive relationship', 'proportional', 'linear', 'population', 'absorption', 'light'],
    feedbackHit: 'Correct description of the relationship.',
    feedbackMiss: 'More bacteria in the liquid means more light is absorbed (less light passes through). This is a positive/proportional relationship.',
  },

  q5_e: {
    marks: 6,
    exemplar: 'Two points from each stage [max 2 per stage]. Stage 1: slow growth [1]; plentiful resources [1]; few bacteria to reproduce [1]. Stage 2: rapid or steady population growth [1]; plentiful resources [1]; many bacteria to reproduce [1]. Stage 3: no (net) population growth [1]; because as many bacteria are dying as are reproducing [1]; limiting factors are present [1]. Do not accept "bacteria stop reproducing" for Stage 3.',
    keyConcepts: ['bacteria population growth curve stages lag log stationary limiting factors'],
    keywords: ['slow growth', 'rapid growth', 'plentiful resources', 'few bacteria', 'many bacteria', 'no net growth', 'dying', 'reproducing', 'limiting factors'],
    feedbackHit: 'Excellent explanation of all three stages with reasoning.',
    feedbackMiss: 'Stage 1 (lag): slow growth, resources plentiful, few bacteria. Stage 2 (log): rapid growth, many bacteria, resources still available. Stage 3 (stationary): equal birth and death rates, resources or space limiting.',
  },

  // Q6 — Design Investigation (Criteria B)

  q6_: {
    marks: 17,
    exemplar: 'Variables: IV = concentration of sugar solution (0–60%); DV = % absorption (measured with colorimeter); 2+ CVs (temperature, volume, type of bacteria, time period). Hypothesis: higher sugar concentration → less bacterial growth → lower % absorption; linked to osmosis/dehydration. Method: sufficient detail to manipulate IV, measure DV, control CVs; at least 3 repeats; at least 5 concentrations; range includes 0%. Safety: safe handling and disposal of bacteria.',
    keyConcepts: ['Criteria B investigation design sugar bacteria variables hypothesis method data safety'],
    keywords: ['sugar concentration', 'IV', 'DV', '% absorption', 'colorimeter', 'control variables', 'hypothesis', 'osmosis', 'dehydration', 'repeats', 'concentrations', 'safety'],
    feedbackHit: 'Strong investigation design meeting all rubric criteria.',
    feedbackMiss: 'Include all elements: IV (sugar %), DV (% absorption via colorimeter), 2 CVs, testable hypothesis referencing osmosis, detailed method with ≥5 concentrations and 3 repeats, safety note.',
  },

  // Q7 — Cardiovascular Disease

  q7_a: {
    marks: 3,
    exemplar: 'Coronary artery narrows / is obstructed by plaque [1]. Blood flow to the heart muscle is restricted [1]. Heart muscle receives less oxygen or nutrients [1]. This can lead to a heart attack / myocardial infarction. WTTE.',
    keyConcepts: ['atherosclerosis coronary artery narrowing blood flow heart attack'],
    keywords: ['coronary artery', 'narrows', 'obstructed', 'blood flow', 'restricted', 'oxygen', 'nutrients', 'heart attack'],
    feedbackHit: 'Good chain of reasoning from atherosclerosis to heart attack.',
    feedbackMiss: 'Atherosclerosis narrows coronary arteries → less blood/oxygen reaches heart muscle → heart attack risk increases.',
  },

  q7_b: {
    marks: 3,
    exemplar: 'Beta-blockers block the receptors that adrenaline normally acts on [1]; so the heart beats more slowly and with less force [1]; this lowers blood pressure and reduces the heart\'s demand for oxygen [1]. WTTE.',
    keyConcepts: ['beta-blockers adrenaline receptors heart rate blood pressure mechanism'],
    keywords: ['beta-blocker', 'block', 'adrenaline', 'receptor', 'heart rate', 'slower', 'blood pressure', 'oxygen demand'],
    feedbackHit: 'Good mechanistic explanation of beta-blocker action.',
    feedbackMiss: 'Beta-blockers block adrenaline receptors so the heart beats more slowly and with less force, lowering blood pressure and the heart\'s oxygen demand.',
  },

  q7_c: {
    marks: 2,
    exemplar: 'A healthy blood vessel (graft) is connected above and below the blockage [1]. Blood is re-routed around the narrowed/blocked section so it can flow more easily to the heart muscle [1]. Accept reference to restored/improved blood supply.',
    keyConcepts: ['bypass graft re-route blood blockage heart muscle blood flow'],
    keywords: ['graft', 'healthy vessel', 're-route', 'around', 'blockage', 'blood flow', 'heart muscle', 'restored'],
    feedbackHit: 'Correct description of the bypass graft mechanism.',
    feedbackMiss: 'In a bypass graft a healthy vessel is joined above and below the blockage, re-routing blood around it so flow to the heart muscle improves.',
  },

  q7_d: {
    marks: 4,
    exemplar: 'Bypass graft: advantage (long-term effective re-routing of blood / treats severe blockages) [1]; disadvantage (major surgery with risk of infection or blood clots / long recovery time) [1]. Beta-blockers: advantage (no surgery needed / lowers blood pressure and heart rate) [1]; disadvantage (must be taken long-term / possible side effects such as tiredness or cold hands) [1]. Take care each point is only awarded once. ORA accept either advantage but not both.',
    keyConcepts: ['bypass graft beta-blockers advantages disadvantages cardiovascular interventions evaluate'],
    keywords: ['bypass', 'graft', 'beta-blocker', 'advantage', 'disadvantage', 'long-term', 'surgery', 'side effects', 'blood clot', 'recovery'],
    feedbackHit: 'Good evaluation of both interventions with realistic advantages and disadvantages.',
    feedbackMiss: 'For each intervention, state one advantage AND one disadvantage that is health-related and specific to that treatment.',
  },

  // Q8 — Criteria D: Evaluate Lifestyle Choices

  q8_: {
    marks: 15,
    exemplar: 'Quality of life impacts: cardiovascular disease reduces quality of life (reduced mobility, chronic pain, fatigue, reduced life expectancy). Economic advantages: healthy lifestyle reduces long-term healthcare costs, maintains productivity. Economic disadvantages: healthy food and gym memberships can be expensive; loss of income during illness. Individual responsibility: individuals can choose not to smoke, to exercise, to eat healthily. Society responsibility: governments should ensure access to affordable healthy food, public spaces for exercise, health education campaigns. Concluding statement: both individuals and society share responsibility for good health — justified with specific examples from both sides.',
    keyConcepts: ['Criteria D lifestyle choices cardiovascular disease quality of life economic individual society responsibility conclusion'],
    keywords: ['quality of life', 'economic', 'advantage', 'disadvantage', 'individual', 'responsibility', 'society', 'healthy lifestyle', 'cardiovascular disease', 'conclusion', 'justified'],
    feedbackHit: 'Excellent evaluation with balanced individual and societal perspectives and a justified conclusion.',
    feedbackMiss: 'Structure: (1) quality of life impact of CVD; (2) economic advantages and disadvantages; (3) individual responsibility argument; (4) society responsibility argument; (5) concluding statement with justification.',
  },
}
