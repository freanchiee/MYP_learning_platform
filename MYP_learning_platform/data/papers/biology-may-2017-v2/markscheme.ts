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

  // ── Q1: Senses & Nervous System — Touch ───────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Any two of: sight, hearing, taste, smell/proprioception.',
    keyConcepts: ['human senses other than touch', 'sight hearing taste smell proprioception'],
    keywords: ['sight', 'hearing', 'taste', 'smell', 'proprioception', 'senses'],
    feedbackHit: 'Two valid human senses stated.',
    feedbackMiss: 'Accept any two of: sight, hearing, taste, smell/proprioception. Do not accept other organs.',
  },
  q1_b: {
    type: 'mcq',
    correct: 1,
  },
  q1_c: {
    marks: 2,
    exemplar: 'Any two from the following list in the correct order: sensory nerve cell → CNS/brain/spinal cord → motor nerve cell → effector/response. Accept: stimulus → receptor → CNS → effector.',
    keyConcepts: ['nervous system signal route sensory motor CNS', 'stimulus receptor brain spinal cord effector response'],
    keywords: ['sensory nerve', 'CNS', 'brain', 'spinal cord', 'motor nerve', 'effector', 'response', 'stimulus', 'receptor'],
    feedbackHit: 'Route correctly stated in correct sequence.',
    feedbackMiss: 'Correct order: sensory nerve → CNS/brain/spinal cord → motor nerve → effector/response. Do not accept details that are out of order.',
  },
  q1_d: {
    marks: 1,
    exemplar: 'Dermis.',
    keyConcepts: ['mechanoreceptor cells located in dermis skin', 'Pacinian corpuscle dermis pressure nerve signals'],
    keywords: ['dermis', 'mechanoreceptors', 'Pacinian', 'skin', 'pressure'],
    feedbackHit: 'Dermis correctly identified.',
    feedbackMiss: 'Mechanoreceptor cells (Pacinian corpuscles) are located in the dermis.',
  },
  q1_e: {
    marks: 4,
    exemplar: 'Cell division 1: Mitosis. Cell division 2: Meiosis. Any two valid differences, for example: mitosis produces identical cells / meiosis produces genetically different cells; mitosis produces cells with the same number of chromosomes as the parent / meiosis produces cells with half the number; mitosis produces 2 cells / meiosis produces 4 cells.',
    keyConcepts: ['mitosis meiosis cell division types differences', 'identical vs genetically different cells chromosome number'],
    keywords: ['mitosis', 'meiosis', 'identical', 'genetically different', 'chromosomes', 'haploid', 'diploid', '2 cells', '4 cells'],
    feedbackHit: 'Both types named and two valid differences stated.',
    feedbackMiss: 'Two types: mitosis and meiosis. Differences: identical vs genetically different cells; same vs half chromosome number; 2 vs 4 cells produced.',
  },
  q1_f: {
    marks: 2,
    exemplar: 'Anaerobic respiration / fermentation / lactic acid fermentation.',
    keyConcepts: ['anaerobic respiration fermentation energy without oxygen', 'muscle cells lactic acid'],
    keywords: ['anaerobic', 'respiration', 'fermentation', 'lactic acid', 'oxygen', 'energy', 'ATP'],
    feedbackHit: 'Anaerobic respiration (or fermentation) correctly stated.',
    feedbackMiss: 'The process is anaerobic respiration or fermentation. Do not accept "respiration" alone.',
  },
  q1_g: {
    marks: 3,
    exemplar: 'Any three points from the following: lack of energy/ATP; mechanoreceptor cells cannot produce ATP without oxygen; lack of energy means mechanoreceptor cells cannot be repaired or replaced; mechanoreceptor cells cannot be replaced through cell division; so loss of touch is permanent.',
    keyConcepts: ['oxygen shortage energy ATP mechanoreceptor cells permanent loss of touch', 'no cell division repair mechanoreceptors'],
    keywords: ['oxygen', 'ATP', 'energy', 'mechanoreceptors', 'repair', 'replace', 'cell division', 'permanent'],
    feedbackHit: 'Three correctly linked steps from oxygen shortage to permanent loss of touch.',
    feedbackMiss: '1: lack of oxygen. 2: lack of energy/ATP. 3: mechanoreceptor cells cannot be repaired/replaced. (Related cells cannot be replaced via cell division.)',
  },

  // ── Q2: Braille Pads & Tactile Implants ───────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: '250 ± 50 (Hz).',
    keyConcepts: ['most sensitive vibration frequency 250 Hz graph reading'],
    keywords: ['250', 'Hz', 'frequency', 'smallest', 'lightest', 'sensitive'],
    feedbackHit: 'Correct frequency read from graph within acceptable range.',
    feedbackMiss: 'Accept any value in the range 200–300 Hz.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'A biological advantage: stronger pressure pulses stimulate the mechanoreceptors more strongly; thereby more nerve signals are generated (making the touch easier to feel). A disadvantage: overstimulation/too-strong pulses could damage the remaining mechanoreceptor cells / cause numbness; the pad does not help when the fingertip nerve itself is damaged. Do not accept "using the pad lets the person read" alone.',
    keyConcepts: ['stronger pulses advantage mechanoreceptors stimulated stronger', 'disadvantage overstimulation damages remaining mechanoreceptors'],
    keywords: ['pressure', 'pulses', 'mechanoreceptors', 'stimulated', 'nerve signals', 'overstimulation', 'damage'],
    feedbackHit: 'Biological advantage and disadvantage of stronger pulses both correctly described.',
    feedbackMiss: 'Advantage: stronger pulses stimulate mechanoreceptors more; more nerve signals. Disadvantage: overstimulation damages remaining mechanoreceptors.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Either: electrical impulses/signals/stimuli (because) the stimulation/signal enters the fingertip nerve where otherwise mechanoreceptors would be generating nerve signals. OR: pressure/vibration, which would otherwise be detected by the mechanoreceptors and converted into nerve signals.',
    keyConcepts: ['tactile implant generates electrical impulses stimulate fingertip nerve', 'pressure electrical signal mechanoreceptor substitute'],
    keywords: ['electrical', 'impulse', 'signal', 'nerve', 'mechanoreceptors', 'pressure', 'stimulate'],
    feedbackHit: 'Correct stimulus type (electrical) and justification linked to skin/nerve function.',
    feedbackMiss: 'Stimulus = electrical impulses; because the skin/fingertip nerve carries nerve signals electrically where mechanoreceptors would normally generate them.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Any reasonable advantage: enables touch (even when mechanoreceptors do not generate any nerve impulses). Any reasonable disadvantage: expensive; requires surgery to fit. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['tactile implant advantage disadvantage enables touch expensive surgery'],
    keywords: ['touch', 'no mechanoreceptors needed', 'enables', 'expensive', 'surgery', 'tactile implant'],
    feedbackHit: 'Valid advantage and disadvantage of tactile implants stated.',
    feedbackMiss: 'Advantage: enables touch without functioning mechanoreceptors. Disadvantage: expensive / requires surgery.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Any reasonable advantage: enables reading by touch; does not require surgery; low(er) cost than implant; readily available. Any reasonable disadvantage: bulky; slow to read; do not help if the fingertip nerve is damaged. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['Braille pad advantages disadvantages no surgery low cost bulky slow'],
    keywords: ['reading', 'touch', 'no surgery', 'low cost', 'bulky', 'slow'],
    feedbackHit: 'Valid advantage and disadvantage of Braille reading pads stated.',
    feedbackMiss: 'Advantage: no surgery/low cost/readily available. Disadvantage: bulky/slow/do not help damaged fingertip nerve.',
  },

  // ── Q3: Genetics — Cystic Fibrosis ───────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Recessive/a. Because parents do not have the condition but the child does. OR because if it was dominant, the parents would be affected too.',
    keyConcepts: ['recessive allele parents unaffected child affected', 'heterozygous carriers Aa'],
    keywords: ['recessive', 'dominant', 'parents unaffected', 'child affected', 'heterozygous', 'carrier'],
    feedbackHit: 'Recessive stated with valid justification.',
    feedbackMiss: '1: recessive. 2: because parents do not have the condition but child does (or if dominant, parents would be affected too).',
  },
  q3_b: {
    marks: 3,
    exemplar: 'Mother: Aa. Father: Aa. Child: aa. (Accept aA for Child.)',
    keyConcepts: ['genetics cross Aa parents aa cystic fibrosis child Punnett'],
    keywords: ['Aa', 'aa', 'Mother', 'Father', 'Child', 'allele', 'heterozygous', 'homozygous recessive'],
    feedbackHit: 'Mother Aa, Father Aa, Child aa all correctly shown.',
    feedbackMiss: 'Mother = Aa, Father = Aa, Child = aa (accept aA). All three must be correctly shown.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'The aa parent will pass on an a (allele) to every child. The child will always inherit an a OR recessive allele. Whether the child has cystic fibrosis or is a carrier depends on the allele inherited from the other parent.',
    keyConcepts: ['aa homozygous recessive always passes a allele child always carries a'],
    keywords: ['aa', 'recessive', 'always', 'a allele', 'every child', 'carrier', 'cystic fibrosis'],
    feedbackHit: 'aa always passes a recessive allele; every child carries at least one a explained.',
    feedbackMiss: 'WTTE: 1: aa parent always passes on a to every child. 2: child always inherits at least one a; the other parent\'s allele decides if the child has cystic fibrosis or is a carrier.',
  },

  // ── Q4: Blood Glucose & Exercise ──────────────────────────────────────────
  q4_a: {
    marks: 1,
    exemplar: 'Red blood cell / erythrocyte.',
    keyConcepts: ['red blood cell erythrocyte transports oxygen haemoglobin'],
    keywords: ['red blood cell', 'erythrocyte', 'oxygen', 'transport', 'haemoglobin'],
    feedbackHit: 'Red blood cell or erythrocyte correctly stated.',
    feedbackMiss: 'The cell is the red blood cell (erythrocyte).',
  },
  q4_b: {
    marks: 1,
    exemplar: '(Does the) blood glucose concentration vary with the duration of exercise? WTTE. Accept any question that links IV and DV.',
    keyConcepts: ['research question blood glucose exercise duration IV DV linked'],
    keywords: ['glucose', 'blood', 'exercise', 'duration', 'vary', 'research question'],
    feedbackHit: 'Valid research question linking blood glucose (DV) to exercise duration (IV).',
    feedbackMiss: 'WTTE: Does blood glucose vary with the duration of exercise? Must link IV and DV. Do not accept reference to control variable.',
  },
  q4_c: {
    marks: 1,
    exemplar: 'There are only two data points. OR There is only one trial.',
    keyConcepts: ['data weakness two data points one trial insufficient'],
    keywords: ['two data points', 'one trial', 'insufficient', 'weakness'],
    feedbackHit: 'Valid weakness identified (too few data points or trials).',
    feedbackMiss: 'Do not accept reference to control variable. Only two data points OR only one trial.',
  },
  q4_d: {
    marks: 1,
    exemplar: 'Blood glucose concentration decreases as exercise duration increases. OR There is an inverse relationship.',
    keyConcepts: ['blood glucose decreases as exercise duration increases inverse relationship'],
    keywords: ['decreases', 'duration increases', 'inverse', 'relationship'],
    feedbackHit: 'Inverse relationship between exercise duration and blood glucose correctly stated.',
    feedbackMiss: 'ORA: as exercise duration increases, blood glucose concentration decreases / inverse relationship.',
  },
  q4_e: {
    marks: 1,
    exemplar: 'Accept any value in the range 5.4–5.7 mmol L⁻¹.',
    keyConcepts: ['predict blood glucose at start 5.4-5.7 extrapolate'],
    keywords: ['start', 'predict', '5.4', '5.5', '5.6', '5.7', 'extrapolate'],
    feedbackHit: 'Predicted value correctly extrapolated from graph.',
    feedbackMiss: 'Accept any value in range 5.4–5.7 mmol L⁻¹ (same units as graph).',
  },
  q4_f: {
    marks: 4,
    exemplar: 'A basic, correct reference to homeostasis. If blood glucose is falling, (then) the pancreas releases more glucagon. Glucagon makes the liver break down glycogen and release glucose into the blood. This raises (or slows the fall of) blood glucose. Over the ride glucose would fall a lot (45%) if there were no response, but blood glucose actually falls much less (26%); glucagon concentration increases to help maintain a stable blood glucose concentration. WTTE, points seen in any order.',
    keyConcepts: ['homeostasis glucagon increases liver releases glucose compensate falling glucose', 'blood glucose maintained despite exercise'],
    keywords: ['homeostasis', 'glucagon', 'increases', 'liver', 'glucose', 'glycogen', 'release', 'maintain'],
    feedbackHit: 'All four points: reference to homeostasis, falling glucose → more glucagon, liver releases glucose, blood glucose maintained/explained.',
    feedbackMiss: '1: correct reference to homeostasis. 2: falling glucose → pancreas releases more glucagon. 3: glucagon makes the liver release glucose into the blood. 4: blood glucose falls much less than it otherwise would / stable level maintained.',
  },

  // ── Q5: Sweat Rate & Heart Rate Investigation ─────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: ambient temperature. Dependent variable: sweat rate OR heart rate. First control variable from: age of students, resting heart rate of students, cycling intensity, humidity etc. Second, different control variable from list above.',
    keyConcepts: ['IV ambient temperature DV sweat rate heart rate CV age resting heart rate cycling intensity'],
    keywords: ['ambient temperature', 'sweat rate', 'heart rate', 'age', 'resting heart rate', 'independent', 'dependent', 'control'],
    feedbackHit: 'IV, DV and two different CVs correctly identified.',
    feedbackMiss: 'IV = ambient temperature. DV = sweat rate or heart rate. CV1 and CV2 from: age, resting heart rate, cycling intensity, humidity. Accept any measurable control variable.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Sweat rate increases with temperature. Heart rate increases with temperature. Any additional point (1 max): the body sweats more to lose heat by evaporation; more blood is pumped to the skin so the heart beats faster; this keeps the body cool / maintains core temperature as the surroundings get hotter. WTTE.',
    keyConcepts: ['sweat rate increases temperature heart rate increases body cools', 'sweat evaporation blood to skin maintain temperature'],
    keywords: ['sweat rate', 'increases', 'heart rate', 'temperature', 'cool', 'skin', 'evaporation'],
    feedbackHit: 'Two trends correctly described plus one explanation of body response.',
    feedbackMiss: '1: sweat rate increases with temperature. 2: heart rate increases with temperature. 3: body sweats and sends blood to skin to lose heat and stay cool.',
  },
  q5_c: {
    marks: 4,
    exemplar: 'Any two reasonable improvements (2 max): more than three temperatures; more than five people; another reasonable control variable. Correctly linked justifications (2 max): better idea of trend; data would be more reliable. Do not accept "use better equipment".',
    keyConcepts: ['improvement more temperatures more students additional control variable', 'justification reliable data better trend'],
    keywords: ['more temperatures', 'more students', 'control variable', 'reliable', 'trend', 'improvement', 'justification'],
    feedbackHit: 'Two valid improvements each with a correctly linked justification.',
    feedbackMiss: 'Improvement 1 + justification (2 marks): e.g. more temperatures → better idea of trend. Improvement 2 + justification (2 marks): e.g. more people → more reliable data.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Any reasonable extension (1 max): study various ages; study other physiological factors (e.g. core body temperature). Correctly linked justification.',
    keyConcepts: ['extension other ages physiological factors justification'],
    keywords: ['extension', 'age', 'physiological factors', 'justification'],
    feedbackHit: 'Valid extension with correctly linked justification.',
    feedbackMiss: '1: valid extension (e.g. different ages / other physiological factors). 2: correctly linked justification.',
  },

  // ── Q6: Ground Squirrel Body Mass & Latitude ──────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Any two reasonable control variables (2 max): age of squirrel; sex of squirrel; time of year. Correctly linked justification (2 max). Do not award justification mark if control variable is not correct.',
    keyConcepts: ['ground squirrel investigation control variables age sex time of year justification'],
    keywords: ['age', 'sex', 'time of year', 'control variable', 'justification', 'squirrel', 'body mass'],
    feedbackHit: 'Two valid CVs each with a correctly linked justification.',
    feedbackMiss: 'CV1: age of squirrel + justification. CV2: sex of squirrel + justification. CV3: time of year + justification. Two of these required.',
  },
  q6_b: {
    marks: 1,
    exemplar: 'At least three individuals.',
    keyConcepts: ['minimum three individuals reliable sample size'],
    keywords: ['three', 'individuals', 'sample', 'reliable'],
    feedbackHit: 'At least three individuals stated.',
    feedbackMiss: 'At least three individuals should be sampled per group.',
  },
  q6_c: {
    marks: 4,
    exemplar: 'Correct headings: latitude AND mean or average body mass. Both units correct: °N and g. At least five values recorded.',
    keyConcepts: ['data table latitude mean body mass units degrees g five values'],
    keywords: ['latitude', 'mean body mass', 'average', '°N', 'g', 'units', 'headings', 'five values'],
    feedbackHit: 'Correct headings, units, and at least five data values recorded.',
    feedbackMiss: '1: heading = latitude. 2: heading = mean/average body mass. 3: both units °N and g. 4: at least five values recorded.',
  },
  q6_d: {
    marks: 3,
    exemplar: 'Correct calculation of the difference in mass: 155 (g) (775 − 620). Correct final percentage: 155/620 × 100 = 25.0 (%). Any final value to an appropriate number of significant figures.',
    keyConcepts: ['percentage increase body mass 155g 25.0 percent significant figures'],
    keywords: ['155', '25.0', '25', 'percentage', 'increase', 'significant figures', 'calculation'],
    feedbackHit: 'Correct difference (155 g) and correct percentage (25.0%) to appropriate sig figs.',
    feedbackMiss: 'Step 1: difference = 775 − 620 = 155 g. Step 2: percentage = 155/620 × 100 = 25.0%. Step 3: correct to appropriate sig figs. ECF from table in (c).',
  },
  q6_e: {
    marks: 2,
    exemplar: 'Justification refers to trends in the data. Answer is supported by numerical data (body mass increases from 620 g to 775 g as latitude rises).',
    keyConcepts: ['hypothesis supported ground squirrel body mass increases latitude numerical data'],
    keywords: ['supported', 'hypothesis', 'trend', 'numerical', 'data', 'higher latitude', 'higher mass'],
    feedbackHit: 'Hypothesis supported/not supported stated with reference to numerical data trend.',
    feedbackMiss: '1: conclusion about hypothesis (supported/not). 2: justification with numerical reference to trend in data.',
  },
  q6_f: {
    marks: 5,
    exemplar: 'One strength (e.g. separate groups were identified; measurements taken at several latitudes; trait was reliably measured). One limitation (e.g. did not check if groups were isolated; only one region; did not check whether food was the same; change in body mass does not necessarily mean natural selection). Two further points from either list. A concluding appraisal that the method was inappropriate.',
    keyConcepts: ['evaluate ground squirrel investigation method strength limitation appraisal', 'only one region food not controlled natural selection not confirmed'],
    keywords: ['strength', 'limitation', 'appraisal', 'isolated', 'one region', 'food', 'natural selection', 'separate groups', 'reliable'],
    feedbackHit: 'One strength, one limitation, two further points, and concluding appraisal all correctly stated.',
    feedbackMiss: 'Strength (e.g. multiple latitudes / separate groups). Limitation (e.g. only one region / food not checked / mass ≠ natural selection). 2 further points. Appraisal: method inappropriate.',
  },

  // ── Q7: Investigation Design — Intermittent Hypoxia & Cycling ──────────────
  q7_: {
    marks: 21,
    exemplar: 'Criteria B rubric (0–21 marks): Problem: describes the relationship between sleeping in low-oxygen air and cycling performance (e.g. Does intermittent hypoxia improve cycling performance?). Variables: IV = oxygen level of the tent air; DV = performance measure (time/distance/power/VO2 max); CV = age/fitness/duration of exposure/diet. Hypothesis: testable, linked to variables, with scientific explanation (e.g. low-oxygen air triggers production of more red blood cells/hemoglobin, improving oxygen transport and performance). Manipulation: ≥5 IV values; method described so another student could follow it; measurement and units stated. Relevant equipment stated. Data: ≥3 trials/repeats. Safety: relevant comment relating to monitoring blood oxygen or staying within human body safe limits. Ethics: informed consent; not exceeding safe limits of human body.',
    keyConcepts: ['Criteria B hypoxic tent cycling investigation design variables hypothesis method safety ethics'],
    keywords: ['oxygen', 'performance', 'hemoglobin', 'red blood cells', 'IV', 'DV', 'CV', 'hypothesis', 'method', 'trials', 'safety', 'informed consent', 'ethics'],
    feedbackHit: 'Full Criteria B: problem, hypothesis with explanation, all variables, detailed method, ≥5 IV values, ≥3 trials, safety and ethics mentioned.',
    feedbackMiss: 'Level 4 (14-21): describes problem; testable hypothesis with scientific explanation; IV+DV+≥2CV identified; detailed method replicable by another student; relevant equipment; ≥3 trials; safety and ethics considered.',
  },

  // ── Q8: Cavendish Banana & Genetic Engineering ────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'Fungus.',
    keyConcepts: ['fungus caused Panama disease banana death'],
    keywords: ['fungus', 'Panama disease', 'Fusarium', 'organism', 'disease', 'pathogen'],
    feedbackHit: 'Fungus correctly identified.',
    feedbackMiss: 'The organism that caused the plants to die was a fungus.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Moving infected / contaminated soil or equipment between plantations (that was carrying the Panama disease fungus/infection). Not "soil" alone without the link to disease.',
    keyConcepts: ['moving infected soil equipment carrying fungus between plantations human action'],
    keywords: ['infected soil', 'contaminated', 'equipment', 'plantations', 'carrying', 'Panama disease', 'fungus', 'spread'],
    feedbackHit: 'Human action (moving infected soil/equipment carrying fungus) correctly described.',
    feedbackMiss: 'The specific action was moving infected soil/contaminated equipment between plantations that carried the Panama disease fungus. Do not accept "soil" alone.',
  },
  q8_c: {
    marks: 3,
    exemplar: 'Correct use of a term from the list: xylem, phloem, transpiration, translocation. Two points from the list (2 max): xylem or phloem or transport tissue is damaged/blocked; transport or transpiration or translocation will be affected; water or mineral nutrients are not transported (by damaged/blocked xylem); sugars or assimilates are not transported (by damaged phloem). WTTE.',
    keyConcepts: ['xylem phloem transport blocked diseased banana plants', 'water minerals not transported sugars not translocated'],
    keywords: ['xylem', 'phloem', 'transport', 'transpiration', 'translocation', 'water', 'mineral nutrients', 'sugars', 'assimilates', 'blocked', 'damaged'],
    feedbackHit: 'Correct scientific term used plus two transport effects correctly described.',
    feedbackMiss: '1: correct term (xylem/phloem/translocation/transpiration). 2: xylem/phloem/transport tissue damaged/blocked. 3: water/minerals OR sugars/assimilates not transported.',
  },
  q8_d: {
    marks: 2,
    exemplar: 'Similarity: both can add new traits/characteristics/features to an organism; both can create a new combination of genes. Difference: genetic engineering produces faster results; genetic engineering can add traits from one species to a new species.',
    keyConcepts: ['genetic engineering vs selective breeding similarity difference', 'both add traits GE faster cross-species'],
    keywords: ['genetic engineering', 'selective breeding', 'similarity', 'difference', 'traits', 'faster', 'species'],
    feedbackHit: 'One valid similarity and one valid difference correctly stated.',
    feedbackMiss: 'Similarity: both add traits / both create new gene combinations. Difference: GE faster / GE can cross species.',
  },
  q8_e: {
    marks: 4,
    exemplar: '(Extract the) resistance / target or desired gene / DNA / genetic information from a resistant wild banana. Insert the gene into the Cavendish banana using enzymes. Resistance/target/desired gene/DNA/genetic information is transferred to the offspring.',
    keyConcepts: ['extract resistance gene from wild banana insert Cavendish genetic engineering', 'gene transferred to offspring disease resistance'],
    keywords: ['resistance gene', 'wild banana', 'extract', 'insert', 'enzymes', 'Cavendish', 'offspring', 'transferred'],
    feedbackHit: 'All four steps: extract resistance gene from resistant wild banana, insert into Cavendish using enzymes, gene transferred to offspring.',
    feedbackMiss: '1: extract resistance gene from a resistant wild banana. 2: (using enzymes). 3: insert gene into the Cavendish banana. 4: resistance gene/DNA transferred to offspring.',
  },
  q8_f: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Advantages: crop saved; food source secured; farms protected; genetic diversity increased. Disadvantages: unknown ecological effects; resistance gene from different species; modified genes could spread to wild bananas; biodiversity concerns. Environmental impact: ecosystem and pollinators affected; OR modified genes spread to other banana plants. Economic impact: cash crop / farm jobs protected; cost of programme. Ecosystem impact: new variant impacts existing food web. Appraisal: concluding statement linking all factors discussed.',
    keyConcepts: ['genetic engineering Cavendish banana advantages disadvantages environmental economic ecosystem appraisal'],
    keywords: ['advantages', 'disadvantages', 'environmental', 'economic', 'ecosystem', 'cash crop', 'biodiversity', 'gene spread', 'pollinators', 'appraisal'],
    feedbackHit: 'Full Criteria D: advantage + disadvantage + environmental + economic impact + ecosystem impact + concluding appraisal, all correctly linked.',
    feedbackMiss: 'Level 4 (11-15): detailed advantage and disadvantage; environmental AND economic impact correctly linked; how new variant impacts wider ecosystem linking different factors; concluding appraisal.',
  },
}
