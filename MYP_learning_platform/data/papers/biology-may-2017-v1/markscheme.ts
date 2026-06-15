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

  // ── Q1: Senses & Nervous System — Vision ──────────────────────────────────
  q1_a: {
    marks: 2,
    exemplar: 'Any two of: hearing, taste, smell, touch/proprioception.',
    keyConcepts: ['human senses other than sight', 'hearing taste smell touch proprioception'],
    keywords: ['hearing', 'taste', 'smell', 'touch', 'proprioception', 'senses'],
    feedbackHit: 'Two valid human senses stated.',
    feedbackMiss: 'Accept any two of: hearing, taste, smell, touch/proprioception. Do not accept other organs.',
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
    exemplar: 'Retina.',
    keyConcepts: ['photoreceptor cells located in retina eye', 'retina light nerve signals'],
    keywords: ['retina', 'photoreceptors', 'rods', 'cones', 'eye', 'back of eye'],
    feedbackHit: 'Retina correctly identified.',
    feedbackMiss: 'Photoreceptor cells are located in the retina.',
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
    exemplar: 'Any three points from the following: lack of energy/ATP; photoreceptor cells cannot produce ATP without oxygen; lack of energy means photoreceptor cells cannot be repaired or replaced; photoreceptor cells cannot be replaced through cell division; so vision loss is permanent.',
    keyConcepts: ['oxygen shortage energy ATP photoreceptor cells permanent vision loss', 'no cell division repair photoreceptors'],
    keywords: ['oxygen', 'ATP', 'energy', 'photoreceptors', 'repair', 'replace', 'cell division', 'permanent'],
    feedbackHit: 'Three correctly linked steps from oxygen shortage to permanent vision loss.',
    feedbackMiss: '1: lack of oxygen. 2: lack of energy/ATP. 3: photoreceptor cells cannot be repaired/replaced. (Related cells cannot be replaced via cell division.)',
  },

  // ── Q2: Spectacles & Retinal Implants ─────────────────────────────────────
  q2_a: {
    marks: 1,
    exemplar: '555 ± 15 (nm).',
    keyConcepts: ['most sensitive wavelength 555 nm graph reading'],
    keywords: ['555', 'nm', 'wavelength', 'dimmest', 'green'],
    feedbackHit: 'Correct wavelength read from graph within acceptable range.',
    feedbackMiss: 'Accept any value in the range 540–570 nm.',
  },
  q2_b: {
    marks: 2,
    exemplar: 'A biological advantage: focusing more light onto the retina forms a brighter, sharper image; photoreceptors are stimulated more strongly; thereby more nerve signals are generated (improving vision). A disadvantage: too much light (overstimulation) could damage remaining photoreceptor cells; spectacles do not help when the retina itself is damaged. Do not accept "wearing glasses lets the person see" alone.',
    keyConcepts: ['focusing light advantage photoreceptors stimulated stronger', 'disadvantage overstimulation damages remaining photoreceptors'],
    keywords: ['focus', 'light', 'photoreceptors', 'stimulated', 'nerve signals', 'overstimulation', 'damage'],
    feedbackHit: 'Biological advantage and disadvantage of focusing more light both correctly described.',
    feedbackMiss: 'Advantage: brighter image stimulates photoreceptors more; more nerve signals. Disadvantage: too much light damages remaining photoreceptors.',
  },
  q2_c: {
    marks: 2,
    exemplar: 'Either: electrical impulses/signals/stimuli (because) the stimulation/signal enters the retina where otherwise photoreceptors would be generating nerve signals. OR: light, which would otherwise be detected by the photoreceptors and converted into nerve signals.',
    keyConcepts: ['retinal implant generates electrical impulses stimulate retina', 'light electrical signal photoreceptor substitute'],
    keywords: ['electrical', 'impulse', 'signal', 'retina', 'photoreceptors', 'nerve', 'light', 'stimulate'],
    feedbackHit: 'Correct stimulus type (electrical) and justification linked to retinal function.',
    feedbackMiss: 'Stimulus = electrical impulses; because the retina generates nerve signals electrically where photoreceptors would normally do so.',
  },
  q2_d: {
    marks: 2,
    exemplar: 'Any reasonable advantage: enables vision (even when photoreceptors do not generate any nerve impulses). Any reasonable disadvantage: expensive; requires surgery to fit. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['retinal implant advantage disadvantage enables vision expensive surgery'],
    keywords: ['vision', 'no photoreceptors needed', 'enables', 'expensive', 'surgery', 'retinal implant'],
    feedbackHit: 'Valid advantage and disadvantage of retinal implants stated.',
    feedbackMiss: 'Advantage: enables vision without functioning photoreceptors. Disadvantage: expensive / requires surgery.',
  },
  q2_e: {
    marks: 2,
    exemplar: 'Any reasonable advantage: improves vision; does not require surgery; low(er) cost than implant; readily available. Any reasonable disadvantage: can break; uncomfortable; do not help if the retina is damaged. Advantage and disadvantage should not contradict each other.',
    keyConcepts: ['spectacles advantages disadvantages no surgery low cost can break'],
    keywords: ['vision', 'no surgery', 'low cost', 'readily available', 'break', 'uncomfortable'],
    feedbackHit: 'Valid advantage and disadvantage of spectacles stated.',
    feedbackMiss: 'Advantage: no surgery/low cost/readily available. Disadvantage: can break/uncomfortable/do not help damaged retina.',
  },

  // ── Q3: Genetics — Albinism ──────────────────────────────────────────────
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
    keyConcepts: ['genetics cross Aa parents aa albinism child Punnett'],
    keywords: ['Aa', 'aa', 'Mother', 'Father', 'Child', 'allele', 'heterozygous', 'homozygous recessive'],
    feedbackHit: 'Mother Aa, Father Aa, Child aa all correctly shown.',
    feedbackMiss: 'Mother = Aa, Father = Aa, Child = aa (accept aA). All three must be correctly shown.',
  },
  q3_c: {
    marks: 2,
    exemplar: 'The aa parent will pass on an a (allele) to every child. The child will always inherit an a OR recessive allele. Whether the child shows albinism or is a carrier depends on the allele inherited from the other parent.',
    keyConcepts: ['aa homozygous recessive always passes a allele child always carries a'],
    keywords: ['aa', 'recessive', 'always', 'a allele', 'every child', 'carrier', 'albinism'],
    feedbackHit: 'aa always passes a recessive allele; every child carries at least one a explained.',
    feedbackMiss: 'WTTE: 1: aa parent always passes on a to every child. 2: child always inherits at least one a; the other parent\'s allele decides if the child shows albinism or is a carrier.',
  },

  // ── Q4: Core Temperature & Cold-Water Diving ──────────────────────────────
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
    exemplar: '(Does the) core body temperature vary with dive depth? WTTE. Accept any question that links IV and DV.',
    keyConcepts: ['research question core temperature dive depth IV DV linked'],
    keywords: ['temperature', 'core', 'depth', 'vary', 'dive', 'research question'],
    feedbackHit: 'Valid research question linking core body temperature (DV) to dive depth (IV).',
    feedbackMiss: 'WTTE: Does core body temperature vary with dive depth? Must link IV and DV. Do not accept reference to control variable.',
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
    exemplar: 'Core body temperature decreases as dive depth increases. OR There is an inverse relationship.',
    keyConcepts: ['core temperature decreases as depth increases inverse relationship'],
    keywords: ['decreases', 'depth increases', 'inverse', 'relationship'],
    feedbackHit: 'Inverse relationship between dive depth and core temperature correctly stated.',
    feedbackMiss: 'ORA: as dive depth increases, core body temperature decreases / inverse relationship.',
  },
  q4_e: {
    marks: 1,
    exemplar: 'Accept any value in the range 37.0–37.3 °C.',
    keyConcepts: ['predict core temperature at surface 37.0-37.3 extrapolate'],
    keywords: ['surface', 'predict', '37.0', '37.1', '37.2', '37.3', 'extrapolate'],
    feedbackHit: 'Predicted value correctly extrapolated from graph.',
    feedbackMiss: 'Accept any value in range 37.0–37.3 °C (same units as graph).',
  },
  q4_f: {
    marks: 4,
    exemplar: 'A basic, correct reference to homeostasis. If the body is losing heat, (then) blood flow to the skin is reduced (vasoconstriction). This keeps warm blood in the core and reduces heat loss to the cold water. As the diver descends the water gets colder; if there were no response the core would cool quickly; instead the core temperature falls far less (3%) than the water temperature (45%); reduced skin blood flow helps maintain a stable core temperature. WTTE, points seen in any order.',
    keyConcepts: ['homeostasis reduced skin blood flow vasoconstriction conserve core heat', 'core temperature maintained despite cold water'],
    keywords: ['homeostasis', 'blood flow', 'skin', 'vasoconstriction', 'reduced', 'core', 'heat loss', 'maintain'],
    feedbackHit: 'All four points: reference to homeostasis, heat loss → reduced skin blood flow, keeps warm blood in core, core temperature maintained/explained.',
    feedbackMiss: '1: correct reference to homeostasis. 2: heat loss → reduced blood flow to skin (vasoconstriction). 3: keeps warm blood in the core. 4: core temperature falls much less than water temperature / stable core maintained.',
  },

  // ── Q5: Cold-Water Diving Investigation ───────────────────────────────────
  q5_a: {
    marks: 4,
    exemplar: 'Independent variable: dive depth. Dependent variable: breathing rate OR heart rate. First control variable from: age of divers, resting heart rate of divers, wetsuit thickness, time underwater etc. Second, different control variable from list above.',
    keyConcepts: ['IV dive depth DV breathing rate heart rate CV age resting heart rate wetsuit'],
    keywords: ['dive depth', 'breathing rate', 'heart rate', 'age', 'resting heart rate', 'independent', 'dependent', 'control'],
    feedbackHit: 'IV, DV and two different CVs correctly identified.',
    feedbackMiss: 'IV = dive depth. DV = breathing rate or heart rate. CV1 and CV2 from: age, resting heart rate, wetsuit thickness, time underwater. Accept any measurable control variable.',
  },
  q5_b: {
    marks: 3,
    exemplar: 'Breathing rate decreases with depth. Heart rate decreases with depth. Any additional point (1 max): this is the mammalian dive reflex; the body slows the heart and breathing to conserve oxygen; oxygen is saved for the brain and heart at depth. WTTE.',
    keyConcepts: ['breathing rate decreases depth heart rate decreases dive reflex', 'body conserves oxygen slows heart breathing'],
    keywords: ['breathing rate', 'decreases', 'heart rate', 'depth', 'dive reflex', 'conserve oxygen', 'slows'],
    feedbackHit: 'Two trends correctly described plus one explanation of body response.',
    feedbackMiss: '1: breathing rate decreases with depth. 2: heart rate decreases with depth. 3: dive reflex slows heart/breathing to conserve oxygen.',
  },
  q5_c: {
    marks: 4,
    exemplar: 'Any two reasonable improvements (2 max): more than three depths; more than five people; another reasonable control variable. Correctly linked justifications (2 max): better idea of trend; data would be more reliable. Do not accept "use better equipment".',
    keyConcepts: ['improvement more depths more divers additional control variable', 'justification reliable data better trend'],
    keywords: ['more depths', 'more divers', 'control variable', 'reliable', 'trend', 'improvement', 'justification'],
    feedbackHit: 'Two valid improvements each with a correctly linked justification.',
    feedbackMiss: 'Improvement 1 + justification (2 marks): e.g. more depths → better idea of trend. Improvement 2 + justification (2 marks): e.g. more people → more reliable data.',
  },
  q5_d: {
    marks: 2,
    exemplar: 'Any reasonable extension (1 max): study various ages; study other physiological factors (e.g. blood oxygen saturation). Correctly linked justification.',
    keyConcepts: ['extension other ages physiological factors justification'],
    keywords: ['extension', 'age', 'physiological factors', 'justification'],
    feedbackHit: 'Valid extension with correctly linked justification.',
    feedbackMiss: '1: valid extension (e.g. different ages / other physiological factors). 2: correctly linked justification.',
  },

  // ── Q6: Marmot Tail Length & Altitude ─────────────────────────────────────
  q6_a: {
    marks: 4,
    exemplar: 'Any two reasonable control variables (2 max): age of marmot; sex of marmot; time of year. Correctly linked justification (2 max). Do not award justification mark if control variable is not correct.',
    keyConcepts: ['marmot investigation control variables age sex time of year justification'],
    keywords: ['age', 'sex', 'time of year', 'control variable', 'justification', 'marmot', 'tail length'],
    feedbackHit: 'Two valid CVs each with a correctly linked justification.',
    feedbackMiss: 'CV1: age of marmot + justification. CV2: sex of marmot + justification. CV3: time of year + justification. Two of these required.',
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
    exemplar: 'Correct headings: altitude AND mean or average tail length. Both units correct: m and mm. At least five values recorded.',
    keyConcepts: ['data table altitude mean tail length units m mm five values'],
    keywords: ['altitude', 'mean tail length', 'average', 'm', 'mm', 'units', 'headings', 'five values'],
    feedbackHit: 'Correct headings, units, and at least five data values recorded.',
    feedbackMiss: '1: heading = altitude. 2: heading = mean/average tail length. 3: both units m and mm. 4: at least five values recorded.',
  },
  q6_d: {
    marks: 3,
    exemplar: 'Correct calculation of the difference in tail length: 28 (mm) (152 − 124). Correct final percentage: 28/152 × 100 = 18.42105 ≈ 18.4 or 18 (%). Any final value to an appropriate number of significant figures.',
    keyConcepts: ['percentage decrease tail length 28mm 18.4 percent significant figures'],
    keywords: ['28', '18.4', '18', 'percentage', 'decrease', 'significant figures', 'calculation'],
    feedbackHit: 'Correct difference (28 mm) and correct percentage (18.4% ≈ 18%) to appropriate sig figs.',
    feedbackMiss: 'Step 1: difference = 152 − 124 = 28 mm. Step 2: percentage = 28/152 × 100 = 18.4%. Step 3: correct to appropriate sig figs. ECF from table in (c).',
  },
  q6_e: {
    marks: 2,
    exemplar: 'Justification refers to trends in the data. Answer is supported by numerical data (tail length decreases from 152 mm to 124 mm as altitude rises).',
    keyConcepts: ['hypothesis supported marmot tail length decreases altitude numerical data'],
    keywords: ['supported', 'hypothesis', 'trend', 'numerical', 'data', 'higher altitude', 'shorter tail'],
    feedbackHit: 'Hypothesis supported/not supported stated with reference to numerical data trend.',
    feedbackMiss: '1: conclusion about hypothesis (supported/not). 2: justification with numerical reference to trend in data.',
  },
  q6_f: {
    marks: 5,
    exemplar: 'One strength (e.g. separate groups were identified; measurements taken at several altitudes; trait was reliably measured). One limitation (e.g. did not check if groups were isolated; only one mountain; did not check whether food was the same; change in tail length does not necessarily mean natural selection). Two further points from either list. A concluding appraisal that the method was inappropriate.',
    keyConcepts: ['evaluate marmot investigation method strength limitation appraisal', 'only one mountain food not controlled natural selection not confirmed'],
    keywords: ['strength', 'limitation', 'appraisal', 'isolated', 'one mountain', 'food', 'natural selection', 'separate groups', 'reliable'],
    feedbackHit: 'One strength, one limitation, two further points, and concluding appraisal all correctly stated.',
    feedbackMiss: 'Strength (e.g. multiple altitudes / separate groups). Limitation (e.g. only one mountain / food not checked / tail length ≠ natural selection). 2 further points. Appraisal: method inappropriate.',
  },

  // ── Q7: Investigation Design — Heat Acclimation & Athletics ────────────────
  q7_: {
    marks: 21,
    exemplar: 'Criteria B rubric (0–21 marks): Problem: describes the relationship between heat acclimation training and athletic performance (e.g. Does training in hot conditions improve performance in the heat?). Variables: IV = temperature of training environment; DV = performance measure (time/distance/VO2 max); CV = age/fitness/training duration/hydration. Hypothesis: testable, linked to variables, with scientific explanation (e.g. heat training increases plasma volume and sweating efficiency, improving cooling and performance). Manipulation: ≥5 IV values; method described so another student could follow it; measurement and units stated. Relevant equipment stated. Data: ≥3 trials/repeats. Safety: relevant comment relating to monitoring core temperature/hydration or staying within human body safe limits. Ethics: informed consent; not exceeding safe limits of human body.',
    keyConcepts: ['Criteria B heat acclimation athletics investigation design variables hypothesis method safety ethics'],
    keywords: ['temperature', 'performance', 'sweating', 'plasma', 'IV', 'DV', 'CV', 'hypothesis', 'method', 'trials', 'safety', 'informed consent', 'ethics'],
    feedbackHit: 'Full Criteria B: problem, hypothesis with explanation, all variables, detailed method, ≥5 IV values, ≥3 trials, safety and ethics mentioned.',
    feedbackMiss: 'Level 4 (14-21): describes problem; testable hypothesis with scientific explanation; IV+DV+≥2CV identified; detailed method replicable by another student; relevant equipment; ≥3 trials; safety and ethics considered.',
  },

  // ── Q8: American Elm & Genetic Engineering ────────────────────────────────
  q8_a: {
    marks: 1,
    exemplar: 'Fungus.',
    keyConcepts: ['fungus caused Dutch elm disease tree death'],
    keywords: ['fungus', 'Dutch elm disease', 'organism', 'disease', 'pathogen'],
    feedbackHit: 'Fungus correctly identified.',
    feedbackMiss: 'The organism that caused the trees to die was a fungus.',
  },
  q8_b: {
    marks: 2,
    exemplar: 'Importing infected / non-native elm logs or wood (that were carrying the Dutch elm disease fungus/infection). Not "tree" alone.',
    keyConcepts: ['importing infected elm logs carrying fungus North America human action'],
    keywords: ['imported', 'logs', 'non-native', 'elm wood', 'carrying', 'Dutch elm disease', 'fungus', 'introduced'],
    feedbackHit: 'Human action (importing infected elm logs carrying fungus) correctly described.',
    feedbackMiss: 'The specific action was importing infected/non-native elm logs that carried the Dutch elm disease fungus. Do not accept "tree" alone.',
  },
  q8_c: {
    marks: 3,
    exemplar: 'Correct use of a term from the list: xylem, phloem, transpiration, translocation. Two points from the list (2 max): xylem or phloem or transport tissue is damaged/blocked; transport or transpiration or translocation will be affected; water or mineral nutrients are not transported (by damaged/blocked xylem); sugars or assimilates are not transported (by damaged phloem). WTTE.',
    keyConcepts: ['xylem phloem transport blocked diseased elm trees', 'water minerals not transported sugars not translocated'],
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
    exemplar: '(Extract the) resistance / target or desired gene / DNA / genetic information from a resistant Asian elm. Insert the gene into the American elm using enzymes. Resistance/target/desired gene/DNA/genetic information is transferred to the offspring.',
    keyConcepts: ['extract resistance gene from Asian elm insert American elm genetic engineering', 'gene transferred to offspring disease resistance'],
    keywords: ['resistance gene', 'Asian elm', 'extract', 'insert', 'enzymes', 'American elm', 'offspring', 'transferred'],
    feedbackHit: 'All four steps: extract resistance gene from resistant elm, insert into American elm using enzymes, gene transferred to offspring.',
    feedbackMiss: '1: extract resistance gene from a resistant Asian elm. 2: (using enzymes). 3: insert gene into American elm. 4: resistance gene/DNA transferred to offspring.',
  },
  q8_f: {
    marks: 15,
    exemplar: 'Criteria D rubric (0–15 marks): Advantages: restore ecosystem; habitat and shade return; animals benefit; genetic diversity increased. Disadvantages: unknown ecological effects; resistance gene from different species; modified genes could spread to wild elms; biodiversity concerns. Environmental impact: restored ecosystem for birds/insects; OR modified genes spread to other trees/plants. Economic impact: timber/street-tree value; cost of programme. Ecosystem impact: new variant impacts existing food web. Appraisal: concluding statement linking all factors discussed.',
    keyConcepts: ['genetic engineering elm trees advantages disadvantages environmental economic ecosystem appraisal'],
    keywords: ['advantages', 'disadvantages', 'environmental', 'economic', 'ecosystem', 'habitat', 'biodiversity', 'gene spread', 'animals', 'appraisal'],
    feedbackHit: 'Full Criteria D: advantage + disadvantage + environmental + economic impact + ecosystem impact + concluding appraisal, all correctly linked.',
    feedbackMiss: 'Level 4 (11-15): detailed advantage and disadvantage; environmental AND economic impact correctly linked; how new variant impacts wider ecosystem linking different factors; concluding appraisal.',
  },
}
