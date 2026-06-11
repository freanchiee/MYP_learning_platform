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

  // ── Q1: Senses & Nervous System ───────────────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Any two of: taste, sight, smell, touch/proprioception.',
    keyConcepts: ['human senses other than hearing', 'sight taste smell touch proprioception'],
    keywords: ['sight', 'taste', 'smell', 'touch', 'proprioception', 'senses'],
    feedbackHit: 'Two valid human senses stated.',
    feedbackMiss: 'Accept any two of: sight, taste, smell, touch/proprioception. Do not accept other organs.',
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
    exemplar: 'Cochlea.',
    keyConcepts: ['hair cells located in cochlea ear', 'cochlea vibrations nerve signals'],
    keywords: ['cochlea', 'hair cells', 'ear', 'inner ear', 'vibrations'],
    feedbackHit: 'Cochlea correctly identified.',
    feedbackMiss: 'Hair cells are located in the cochlea.',
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
    exemplar: 'Any three points from the following: lack of energy/ATP; hair cells cannot produce ATP without oxygen; lack of energy means hair cells cannot be repaired or replaced; hair cells cannot be replaced through cell division; so hearing loss is permanent.',
    keyConcepts: ['oxygen shortage energy ATP hair cells permanent hearing loss', 'no cell division repair hair cells'],
    keywords: ['oxygen', 'ATP', 'energy', 'hair cells', 'repair', 'replace', 'cell division', 'permanent'],
    feedbackHit: 'Three correctly linked steps from oxygen shortage to permanent hearing loss.',
    feedbackMiss: '1: lack of oxygen. 2: lack of energy/ATP. 3: hair cells cannot be repaired/replaced. (Related cells cannot be replaced via cell division.)',
  },

  // ── Q2: Hearing Aids & Cochlear Implants ──────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: '3900 ± 100 (Hz).',
    keyConcepts: ['quietest audible frequency 3900 Hz graph reading'],
    keywords: ['3900', 'Hz', 'frequency', 'quietest', 'audible'],
    feedbackHit: 'Correct frequency read from graph within acceptable range.',
    feedbackMiss: 'Accept any value in the range 3800–4000 Hz.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'A biological advantage: as the loudness of sounds is increased, stronger vibrations are transmitted to the cochlea; hair cells are stimulated more intensely; thereby more nerve signals are generated (improving hearing). A disadvantage: overstimulation/amplification could lead to further damage of (remaining) hair cells; hearing aids do not help when no functioning hair cells are left; hearing aids are ineffective if vibrations are not transmitted to cochlea. Do not accept "using the implant allows the person to hear" alone.',
    keyConcepts: ['amplification advantage hair cells stimulated stronger', 'disadvantage overstimulation damages remaining hair cells'],
    keywords: ['amplification', 'vibrations', 'hair cells', 'stimulated', 'nerve signals', 'overstimulation', 'damage'],
    feedbackHit: 'Biological advantage and disadvantage of amplification both correctly described.',
    feedbackMiss: 'Advantage: stronger vibrations stimulate hair cells more; more nerve signals. Disadvantage: overstimulation damages remaining hair cells.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Either: electrical impulses/signals/stimuli (because) the stimulation/signal enters the cochlea where otherwise hair cells would be generating nerve signals. OR: vibration, which would otherwise originate from eardrum or middle ear bones and stimulate hair cells.',
    keyConcepts: ['cochlear implant generates electrical impulses stimulate cochlea', 'vibration electrical signal hair cell substitute'],
    keywords: ['electrical', 'impulse', 'signal', 'cochlea', 'hair cells', 'nerve', 'vibration', 'stimulate'],
    feedbackHit: 'Correct stimulus type (electrical) and justification linked to cochlear function.',
    feedbackMiss: 'Stimulus = electrical impulses; because cochlea generates nerve signals electrically where hair cells would normally do so.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Any reasonable advantage: enables hearing; does not require surgery; low(er) cost than implant; readily available. Any reasonable disadvantage: expensive; heavy; uncomfortable to wear. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['hearing aid advantages disadvantages no surgery low cost uncomfortable'],
    keywords: ['hearing', 'no surgery', 'low cost', 'readily available', 'expensive', 'heavy', 'uncomfortable'],
    feedbackHit: 'Valid advantage and disadvantage of hearing aids stated.',
    feedbackMiss: 'Advantage: no surgery/low cost/readily available. Disadvantage: heavy/expensive/uncomfortable.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Any reasonable advantage: enables hearing (even when hair cells do not generate any nerve impulses or even when sound is not transmitted to cochlea). Any reasonable disadvantage: expensive; requires surgery to fit. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['cochlear implant advantage disadvantage enables hearing expensive surgery'],
    keywords: ['hearing', 'no hair cells needed', 'enables', 'expensive', 'surgery', 'cochlear implant'],
    feedbackHit: 'Valid advantage and disadvantage of cochlear implants stated.',
    feedbackMiss: 'Advantage: enables hearing without functioning hair cells. Disadvantage: expensive / requires surgery.',
  },

  // ── Q3: Genetics — Hearing Loss ──────────────────────────────────────────
  q3_a: {
    marks: 2,
    exemplar: 'Recessive/h. Because parents do not have the condition but the child does. OR because if it was dominant, the parents would be affected too.',
    keyConcepts: ['recessive allele parents unaffected child affected', 'heterozygous carriers Hh'],
    keywords: ['recessive', 'dominant', 'parents unaffected', 'child affected', 'heterozygous', 'carrier'],
    feedbackHit: 'Recessive stated with valid justification.',
    feedbackMiss: '1: recessive. 2: because parents do not have the condition but child does (or if dominant, parents would be affected too).',
  },
  q3_b: {
    marks: 3,
    exemplar: 'Mother: Hh. Father: Hh. Child: hh. (Accept hH for Child.)',
    keyConcepts: ['genetics cross Hh parents hh hearing loss child Punnett'],
    keywords: ['Hh', 'hh', 'Mother', 'Father', 'Child', 'allele', 'heterozygous', 'homozygous recessive'],
    feedbackHit: 'Mother Hh, Father Hh, Child hh all correctly shown.',
    feedbackMiss: 'Mother = Hh, Father = Hh, Child = hh (accept hH). All three must be correctly shown.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'The AA parent will pass on an A (allele) to every child. The child will always inherit an A OR dominant allele. The allele inherited from the other parent will have no effect.',
    keyConcepts: ['AA homozygous dominant always passes A allele child always hearing loss'],
    keywords: ['AA', 'dominant', 'always', 'A allele', 'every child', 'no effect', 'hearing loss'],
    feedbackHit: 'AA always passes A dominant allele; child always has hearing loss explained.',
    feedbackMiss: 'WTTE: 1: AA parent always passes on A to every child. 2: child always inherits at least one A (dominant); allele from other parent has no effect.',
  },

  // ── Q4: Blood Oxygen & Altitude ───────────────────────────────────────────
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
    exemplar: '(Does the) quantity or amount of oxygen in the blood or body vary with altitude? WTTE. Accept any question that links IV and DV.',
    keyConcepts: ['research question oxygen blood altitude IV DV linked'],
    keywords: ['oxygen', 'blood', 'altitude', 'vary', 'quantity', 'research question'],
    feedbackHit: 'Valid research question linking oxygen in blood (DV) to altitude (IV).',
    feedbackMiss: 'WTTE: Does the quantity of oxygen in the blood vary with altitude? Must link IV and DV. Do not accept reference to control variable.',
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
    exemplar: 'Quantity of oxygen in the blood decreases as altitude increases. OR There is an inverse relationship.',
    keyConcepts: ['oxygen decreases as altitude increases inverse relationship'],
    keywords: ['decreases', 'altitude increases', 'inverse', 'relationship'],
    feedbackHit: 'Inverse relationship between altitude and blood oxygen correctly stated.',
    feedbackMiss: 'ORA: as altitude increases, quantity of oxygen in blood decreases / inverse relationship.',
  },
  q4_e: {
    marks: 1,
    exemplar: 'Accept any value in the range 78–82 (arbitrary units).',
    keyConcepts: ['predict blood oxygen at sea level 78-82 extrapolate'],
    keywords: ['sea level', 'predict', '78', '79', '80', '81', '82', 'extrapolate'],
    feedbackHit: 'Predicted value correctly extrapolated from graph.',
    feedbackMiss: 'Accept any value in range 78–82 (same units as graph).',
  },
  q4_f: {
    marks: 4,
    exemplar: 'A basic, correct reference to homeostasis. If there is less oxygen in the blood, (then) the body produces more hemoglobin. To try and increase the quantity of oxygen in the blood. At higher altitude the availability of oxygen decreases; if there is less oxygen in the air there will be less oxygen in the blood; the availability of oxygen in the air decreases more than the quantity of oxygen in blood decreases; hemoglobin concentration increases as altitude increases. WTTE, points seen in any order.',
    keyConcepts: ['homeostasis hemoglobin increases compensate less oxygen altitude', 'more hemoglobin more oxygen transport maintain blood oxygen'],
    keywords: ['homeostasis', 'hemoglobin', 'increases', 'less oxygen', 'blood', 'altitude', 'compensate', 'maintain'],
    feedbackHit: 'All four points: reference to homeostasis, less oxygen → more hemoglobin, increase oxygen in blood, plateau/explanation of why hemoglobin helps.',
    feedbackMiss: '1: correct reference to homeostasis. 2: less O2 in blood → body produces more hemoglobin. 3: to increase O2 quantity in blood. 4: O2 in air decreases more than in blood / hemoglobin concentration increases.',
  },

  // ── Q5: Altitude & Physiological Investigation ────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: altitude. Dependent variable: quantity of oxygen in the blood OR (percentage) blood oxygen saturation OR heart rate. First control variable from: age of runners, resting heart rate of runners, time of runners acclimatizing, mass of food etc. Second, different control variable from list above.',
    keyConcepts: ['IV altitude DV blood oxygen saturation heart rate CV age resting heart rate'],
    keywords: ['altitude', 'blood oxygen saturation', 'heart rate', 'age', 'resting heart rate', 'independent', 'dependent', 'control'],
    feedbackHit: 'IV, DV and two different CVs correctly identified.',
    feedbackMiss: 'IV = altitude. DV = blood O2 saturation or heart rate. CV1 and CV2 from: age, resting heart rate, acclimatization time, food mass. Accept any measurable control variable.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Blood oxygen saturation decreases with altitude. Heart rate increases with altitude. Any additional point (1 max): to move blood through the body more quickly; to supply oxygen to meet oxygen demand; (because) as the altitude increases the availability of oxygen in the air decreases. WTTE.',
    keyConcepts: ['blood oxygen saturation decreases altitude heart rate increases', 'body compensates faster heart rate supply oxygen demand'],
    keywords: ['blood oxygen saturation', 'decreases', 'heart rate', 'increases', 'altitude', 'supply oxygen', 'faster'],
    feedbackHit: 'Two trends correctly described plus one explanation of body response.',
    feedbackMiss: '1: blood O2 saturation decreases with altitude. 2: heart rate increases with altitude. 3: body moves blood faster to supply oxygen OR altitude reduces O2 availability.',
  },
  q5_c: {
    marks: 4,
    exemplar: 'Any two reasonable improvements (2 max): more than three altitudes; more than five people; another reasonable control variable. Correctly linked justifications (2 max): better idea of trend; data would be more reliable. Do not accept "use better equipment".',
    keyConcepts: ['improvement more altitudes more runners additional control variable', 'justification reliable data better trend'],
    keywords: ['more altitudes', 'more runners', 'control variable', 'reliable', 'trend', 'improvement', 'justification'],
    feedbackHit: 'Two valid improvements each with a correctly linked justification.',
    feedbackMiss: 'Improvement 1 + justification (2 marks): e.g. more altitudes → better idea of trend. Improvement 2 + justification (2 marks): e.g. more people → more reliable data.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Any reasonable extension (1 max): study various ages; study other physiological factors. Correctly linked justification.',
    keyConcepts: ['extension other ages physiological factors justification'],
    keywords: ['extension', 'age', 'physiological factors', 'justification'],
    feedbackHit: 'Valid extension with correctly linked justification.',
    feedbackMiss: '1: valid extension (e.g. different ages / other physiological factors). 2: correctly linked justification.',
  },

  // ── Q6: Pika Body Mass & Altitude ─────────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Any two reasonable control variables (2 max): age of pika; sex of pika; time of year. Correctly linked justification (2 max). Do not award justification mark if control variable is not correct.',
    keyConcepts: ['pika investigation control variables age sex time of year justification'],
    keywords: ['age', 'sex', 'time of year', 'control variable', 'justification', 'pika', 'body mass'],
    feedbackHit: 'Two valid CVs each with a correctly linked justification.',
    feedbackMiss: 'CV1: age of pika + justification. CV2: sex of pika + justification. CV3: time of year + justification. Two of these required.',
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
    exemplar: 'Correct headings: altitude AND mean or average (body) mass. Both units correct: m and g. At least five values recorded.',
    keyConcepts: ['data table altitude mean body mass units m g five values'],
    keywords: ['altitude', 'mean body mass', 'average', 'm', 'g', 'units', 'headings', 'five values'],
    feedbackHit: 'Correct headings, units, and at least five data values recorded.',
    feedbackMiss: '1: heading = altitude. 2: heading = mean/average body mass. 3: both units m and g. 4: at least five values recorded.',
  },
  q6_d: {
    marks: 3,
    exemplar: 'Correct calculation of the difference in mass: 16.6 (g). Correct final percentage: 11.874106 or 11.87411 or 12 etc. (%). Any final value to three significant figures.',
    keyConcepts: ['percentage increase body mass 16.6g 11.87 percent three significant figures'],
    keywords: ['16.6', '11.87', '12', 'percentage', 'increase', 'significant figures', 'calculation'],
    feedbackHit: 'Correct mass difference (16.6 g) and correct percentage (11.87% ≈ 12%) to 3 sig figs.',
    feedbackMiss: 'Step 1: difference = 16.6 g (award 3 if only 11.9 seen; award 2 if only 10.6 seen). Step 2: percentage = 11.87% or 12%. Step 3: correct to 3 sig figs. ECF from table in (c).',
  },
  q6_e: {
    marks: 2,
    exemplar: 'Justification refers to trends in the data. Answer is supported by numerical data.',
    keyConcepts: ['hypothesis supported pika body mass increases altitude numerical data'],
    keywords: ['supported', 'hypothesis', 'trend', 'numerical', 'data', 'higher altitude', 'higher mass'],
    feedbackHit: 'Hypothesis supported/not supported stated with reference to numerical data trend.',
    feedbackMiss: '1: conclusion about hypothesis (supported/not). 2: justification with numerical reference to trend in data.',
  },
  q6_f: {
    marks: 5,
    exemplar: 'One strength (e.g. separate groups were identified; measurements taken at several altitudes; trait was reliably measured). One limitation (e.g. did not check if groups were isolated; only one mountain; did not check whether food was the same; change in mass does not necessarily mean natural selection). Two further points from either list. A concluding appraisal that the method was inappropriate.',
    keyConcepts: ['evaluate pika investigation method strength limitation appraisal', 'only one mountain food not controlled natural selection not confirmed'],
    keywords: ['strength', 'limitation', 'appraisal', 'isolated', 'one mountain', 'food', 'natural selection', 'separate groups', 'reliable'],
    feedbackHit: 'One strength, one limitation, two further points, and concluding appraisal all correctly stated.',
    feedbackMiss: 'Strength (e.g. multiple altitudes / separate groups). Limitation (e.g. only one mountain / food not checked / mass ≠ natural selection). 2 further points. Appraisal: method inappropriate.',
  },

  // ── Q7: Investigation Design — Altitude & Athletics ───────────────────────
  q7_: {
    marks: 21,
    exemplar: 'Criteria B rubric (0–21 marks): Problem: describes the relationship between altitude training and athletic performance (e.g. Does training at high altitude improve performance at low altitude?). Variables: IV = altitude of training site; DV = performance measure (time/distance/VO2 max); CV = age/fitness/training duration/diet. Hypothesis: testable, linked to variables, with scientific explanation (e.g. high altitude increases hemoglobin, improves O2 transport, better performance). Manipulation: ≥5 IV values; method described so another student could follow it; measurement and units stated. Relevant equipment stated. Data: ≥3 trials/repeats. Safety: relevant comment relating to monitoring health or staying within human body safe limits. Ethics: informed consent; not exceeding safe limits of human body.',
    keyConcepts: ['Criteria B altitude athletics investigation design variables hypothesis method safety ethics'],
    keywords: ['altitude', 'performance', 'hemoglobin', 'IV', 'DV', 'CV', 'hypothesis', 'method', 'trials', 'safety', 'informed consent', 'ethics'],
    feedbackHit: 'Full Criteria B: problem, hypothesis with explanation, all variables, detailed method, ≥5 IV values, ≥3 trials, safety and ethics mentioned.',
    feedbackMiss: 'Level 4 (14-21): describes problem; testable hypothesis with scientific explanation; IV+DV+≥2CV identified; detailed method replicable by another student; relevant equipment; ≥3 trials; safety and ethics considered.',
  },

  // ── Q8: Chestnut Trees & Genetic Engineering ──────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'Fungus.',
    keyConcepts: ['fungus caused chestnut blight disease tree death'],
    keywords: ['fungus', 'blight', 'organism', 'disease', 'pathogen'],
    feedbackHit: 'Fungus correctly identified.',
    feedbackMiss: 'The organism that caused the trees to die was a fungus.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Introduction of Japanese / foreign / non-native / exotic trees (that were carrying the blight disease/fungus/infection). Not "tree" alone.',
    keyConcepts: ['introduction non-native trees carrying fungus blight North America human action'],
    keywords: ['Japanese', 'non-native', 'foreign', 'exotic', 'trees', 'carrying', 'blight', 'fungus', 'introduced'],
    feedbackHit: 'Human action (importing non-native trees carrying fungus) correctly described.',
    feedbackMiss: 'The specific action was importing/introducing Japanese or non-native trees that carried the blight fungus. Do not accept "tree" alone.',
  },
  q8_c: {
    marks: 3,
    exemplar: 'Correct use of a term from the list: xylem, phloem, transpiration, translocation. Two points from the list (2 max): xylem or phloem or transport tissue is damaged; transport or transpiration or translocation will be affected; water or mineral nutrients are not transported (by damaged xylem); sugars or assimilates are not transported (by damaged phloem). WTTE.',
    keyConcepts: ['xylem phloem transport damaged diseased chestnut trees', 'water minerals not transported sugars not translocated'],
    keywords: ['xylem', 'phloem', 'transport', 'transpiration', 'translocation', 'water', 'mineral nutrients', 'sugars', 'assimilates', 'damaged'],
    feedbackHit: 'Correct scientific term used plus two transport effects correctly described.',
    feedbackMiss: '1: correct term (xylem/phloem/translocation/transpiration). 2: xylem/phloem/transport tissue damaged. 3: water/minerals OR sugars/assimilates not transported.',
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
    exemplar: '(Extract the) resistance / target or desired gene / DNA / genetic information from wheat. …(oxo gene) from wheat. OR …oxo gene (from wheat). Insert the gene into the American chestnut using enzymes. Resistance/target/desired gene/DNA/genetic information is transferred to the offspring.',
    keyConcepts: ['extract oxo resistance gene from wheat insert chestnut genetic engineering', 'gene transferred to offspring disease resistance'],
    keywords: ['oxo gene', 'resistance gene', 'wheat', 'extract', 'insert', 'enzymes', 'American chestnut', 'offspring', 'transferred'],
    feedbackHit: 'All four steps: extract resistance gene from wheat, insert into chestnut using enzymes, gene transferred to offspring.',
    feedbackMiss: '1: extract resistance/oxo gene from wheat. 2: (using enzymes). 3: insert gene into American chestnut. 4: resistance gene/DNA transferred to offspring.',
  },
  q8_f: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Advantages: restore ecosystem; food source returns; animals benefit; genetic diversity increased. Disadvantages: unknown ecological effects; resistance gene from different species; modified genes could spread; biodiversity concerns. Environmental impact: restored ecosystem for squirrels/bears/birds; OR modified genes spread to other trees/plants. Economic impact: food source / lumber industry / cost of programme. Ecosystem impact: new variant impacts existing food web. Appraisal: concluding statement linking all factors discussed.',
    keyConcepts: ['genetic engineering chestnut trees advantages disadvantages environmental economic ecosystem appraisal'],
    keywords: ['advantages', 'disadvantages', 'environmental', 'economic', 'ecosystem', 'food source', 'biodiversity', 'gene spread', 'animals', 'appraisal'],
    feedbackHit: 'Full Criteria D: advantage + disadvantage + environmental + economic impact + ecosystem impact + concluding appraisal, all correctly linked.',
    feedbackMiss: 'Level 4 (11-15): detailed advantage and disadvantage; environmental AND economic impact correctly linked; how new variant impacts wider ecosystem linking different factors; concluding appraisal.',
  },
}
