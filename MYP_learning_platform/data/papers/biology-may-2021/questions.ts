import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2021',
  subject: 'Biology',
  session: 'May',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Cells and Genetics (14 marks, Crit A) ──────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells and Genetics',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    topicsAlso: ['DNA & Genetics', 'Inheritance & Variation'],
    marks: 14,
    figImages: ['/images/papers/biology-may-2021/page-2.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** whether each feature is found in bacteria cells, animal cells, or both by selecting the correct option from the dropdown.',
        marks: 2,
        ph: 'Mitochondria → Animal cells; Cell wall → Bacteria cells; Cell membrane → Both; Nucleus → Animal cells.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mitochondria', 'Cell wall', 'Cell membrane', 'Nucleus'],
        widgetOptions: ['Bacteria cells', 'Animal cells', 'Both'],
      },
      {
        label: 'b',
        text: '**Outline** two advantages of using a 3D model of a cell compared to a 2D diagram.',
        marks: 2,
        ph: '3D model is closer to reality; shows spatial relationships between organelles.',
        figImages: ['/images/papers/biology-may-2021/page-2.png'],
      },
      {
        label: 'c',
        text: '**Label** the diagram by dragging each term to the correct position: Chromosome, DNA, Gene, Nucleus, Nucleotide.',
        marks: 2,
        ph: 'Nucleus (large oval) → Chromosome (condensed inside) → DNA (helix strand) → Gene (segment of DNA) → Nucleotide (single unit).',
        figImages: ['/images/papers/biology-may-2021/page-3.png'],
        widget: 'match_drag_drop',
        widgetItems: ['Chromosome', 'DNA', 'Gene', 'Nucleus', 'Nucleotide'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4', 'Position 5'],
      },
      {
        label: 'd',
        text: 'The father has dimples and his genotype is Dd. The mother has no dimples. **State** the genotype of the mother.',
        marks: 1,
        ph: 'dd (no dimples = homozygous recessive).',
        figImages: ['/images/papers/biology-may-2021/page-4.png'],
      },
      {
        label: 'e',
        text: '**Complete** the Punnett square using the father\'s alleles (D, d) and mother\'s alleles (d, d), then **determine** the probability that a child would have dimples.',
        marks: 2,
        ph: 'Punnett square: Dd, Dd, dd, dd. Probability of dimples = 50% (2/4).',
        figImages: ['/images/papers/biology-may-2021/page-5.png'],
        widget: 'fill_blank',
        widgetOptions: ['Dd', 'dd'],
      },
      {
        label: 'f',
        text: '**Explain** why variation within a species is important for its survival.',
        marks: 5,
        ph: 'Variation → selection pressure → favourable individuals survive → reproduce → pass on heritable traits → species better adapted over generations.',
      },
    ],
  },

  // ── Q2 — Forest Food Web (8 marks, Crit A) ──────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems and Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency', 'Habitat Change & Destruction'],
    marks: 8,
    figImages: ['/images/papers/biology-may-2021/page-6.png'],
    tasks: [
      {
        label: 'a',
        text: 'Use the food web to **identify** one producer, one omnivore, and one primary consumer.',
        marks: 3,
        ph: 'Producer: grasses or oak tree. Omnivore: black bear. Primary consumer: deer, rabbit, squirrel, or black bear.',
      },
      {
        label: 'b',
        text: 'A housing development is planned in part of the forest. **Outline** how this could affect the fox population.',
        marks: 2,
        ph: 'Habitat destroyed → less territory/prey → fox population decreases. OR alternative food (rubbish) → fox population increases.',
      },
      {
        label: 'c',
        text: 'Using your answer to (b), **describe** how the deer population might be affected.',
        marks: 3,
        ph: 'If fox population decreases → fewer rabbits eaten → rabbit population increases → more competition for food with deer → deer may decrease. OR foxes eat fewer deer → deer population increases.',
      },
    ],
  },

  // ── Q3 — Aquatic Plants and Prey Survival (5 marks, Crit C) ─────────────
  {
    id: 3,
    crit: 'C',
    type: 'extended',
    topic: 'Aquatic Plants and Prey Survival',
    topicCanonical: 'Predator/Prey',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 5,
    stem: 'A student investigated how different aquatic plants affect the survival rate of small prey fish. The bar graph shows percentage survival of prey in tanks with different plant types.',
    figImages: ['/images/papers/biology-may-2021/page-8.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** which plant provided the highest prey survival rate.',
        marks: 1,
        ph: 'Plant B (accept Plant C).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why that plant gave the highest survival rate.',
        marks: 1,
        ph: 'Plant B is a native plant; provides better hiding places / more branches / better camouflage for prey.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the results for native plants with the results for non-native plants.',
        marks: 2,
        ph: 'Both provide hiding places for prey compared to no plants (similarity). Native plants give higher survival rates than non-native plants; greater range between native plant results (difference).',
      },
      {
        label: 'd',
        text: '**State** why a "no plants" condition was also tested in this investigation.',
        marks: 1,
        ph: 'To show the effect of plants on results; it is the control condition.',
      },
    ],
  },

  // ── Q4 — Photosynthesis Investigation: Light (8 marks, Crit B) ──────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Photosynthesis Investigation — Light Distance',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 8,
    stem: 'A student placed a Cabomba water plant in a beaker of water and moved a light source to different distances. They counted the number of gas bubbles produced by the plant.',
    figImages: ['/images/papers/biology-may-2021/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Complete** the word equation for photosynthesis by filling in the missing reactants and products.',
        marks: 1,
        ph: 'Carbon dioxide + Water → Glucose + Oxygen.',
        widget: 'fill_blank',
        widgetOptions: ['Carbon dioxide', 'Water', 'Glucose', 'Oxygen'],
      },
      {
        label: 'b',
        text: '**Identify** the independent variable, dependent variable, and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: distance of light source from plant. DV: number of bubbles / volume of gas produced. CV1: temperature of water. CV2: same plant / same light bulb / same CO₂ concentration.',
        figImages: ['/images/papers/biology-may-2021/page-12.png'],
      },
      {
        label: 'c',
        text: '**Formulate** a hypothesis for this investigation by selecting the correct prediction and completing the scientific explanation.',
        marks: 3,
        ph: 'Rate of photosynthesis decreases; because light intensity decreases with distance, less light absorbed by chlorophyll, fewer successful reactions.',
        figImages: ['/images/papers/biology-may-2021/page-13.png'],
        widget: 'radio_select',
        widgetOptions: [
          'the rate of photosynthesis decreases',
          'the rate of photosynthesis increases',
          'the rate of photosynthesis stays the same',
        ],
      },
    ],
  },

  // ── Q5 — Temperature Investigation (15 marks, Crit B/C) ─────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Photosynthesis Investigation — Temperature',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    stem: 'A student investigated the effect of temperature on the rate of photosynthesis in Cabomba. The method involved 6 steps: placing the plant in a beaker, adding a funnel, measuring gas with a measuring cylinder, placing the beaker in a ___ to keep temperature constant, counting bubbles for 5 minutes, and repeating 4 trials at each of 5 different temperatures.',
    figImages: ['/images/papers/biology-may-2021/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the piece of equipment missing from step 4 to keep the temperature constant.',
        marks: 1,
        ph: 'Temperature-controlled water bath (accept: thermometer).',
      },
      {
        label: 'b',
        text: 'After reading the student\'s method, the teacher said it would not give sufficient data to draw a conclusion. **State** two ways the method should be improved.',
        marks: 2,
        ph: 'Increase the number of different temperatures tested; collect enough data to calculate a reliable average / reduce experimental error.',
      },
      {
        label: 'c',
        text: '**Justify** why the student planned to repeat four trials at each temperature.',
        marks: 3,
        ph: 'To reduce the impact of experimental error; to identify anomalous/outlier results; to increase the reliability/accuracy of the calculated mean.',
      },
      {
        label: 'd',
        text: '**State** a way to improve the precision of measurements in this investigation using the equipment provided.',
        marks: 1,
        ph: 'Use a measuring cylinder to measure the volume of gas produced (rather than counting bubbles).',
      },
      {
        label: 'e',
        text: '**Calculate** the missing average(s) from the data table and show your working. **State** two improvements to the data presentation.',
        marks: 4,
        ph: 'Average at 10°C = 6 (5+7+5+7=24÷4). Improvements: consistent significant figures; correct column headings; plot results as a line/scatter graph.',
        figImages: ['/images/papers/biology-may-2021/page-15.png', '/images/papers/biology-may-2021/page-16.png'],
      },
      {
        label: 'f',
        text: '**Identify** the data point in the table that appears to be an outlier.',
        marks: 1,
        ph: 'Trial 3 at 30°C (value of 14, much higher than other 30°C values).',
      },
      {
        label: 'g',
        text: '**Suggest** how to analyse data that contains an outlier.',
        marks: 1,
        ph: 'Exclude the outlier when calculating the mean / repeat the trial to verify whether it is a genuine result.',
      },
      {
        label: 'h',
        text: 'The graph below shows the effect of temperature on average number of gas bubbles produced. A student concludes the rate is "partially valid." **Evaluate** this conclusion.',
        marks: 2,
        ph: 'Partially valid: rate increases up to optimum (supported). Above 30°C, enzyme denatures — active site changes shape, substrate cannot fit, photosynthesis stops.',
        figImages: ['/images/papers/biology-may-2021/page-17.png'],
      },
    ],
  },

  // ── Q6 — Design Investigation: Stem Length (15 marks, Crit B) ───────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Design Investigation — Cabomba Stem Length',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 15,
    figImages: ['/images/papers/biology-may-2021/page-19.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to test how changing the length of a Cabomba stem affects the rate of photosynthesis. Include: IV, DV, two control variables; a testable hypothesis; equipment; a method with at least 5 steps sufficient to collect data for at least 5 different stem lengths with 3 repeats.',
        marks: 15,
        ph: 'IV = stem length; DV = volume of gas / number of bubbles; CVs = light intensity, temperature, CO₂. Hypothesis: longer stem → more chloroplasts → higher rate. Equipment: measuring cylinder, ruler, lamp, water bath. Method: set up plant, set stem length, count bubbles for fixed time, repeat 3× per length, test 5 lengths.',
      },
    ],
  },

  // ── Q7 — Enzyme Action (7 marks, Crit A/C) ──────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Enzyme Action',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Photosynthesis'],
    marks: 7,
    stem: 'The enzyme that catalyses the photosynthesis reaction is called rubisco. Enzymes are affected by different factors, including temperature and concentration of substrate.',
    figImages: ['/images/papers/biology-may-2021/page-19.png', '/images/papers/biology-may-2021/page-20.png'],
    tasks: [
      {
        label: 'a',
        text: 'The diagram below illustrates an enzyme-catalysed reaction. **Identify** the enzyme, the substrate, and the product from the dropdown.',
        marks: 2,
        ph: 'Shape 1 (large dark) = Substrate; Shape 2 = Enzyme; Shape 3 (after reaction) = Enzyme; Shape 4 (small) = Product.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Shape 1 (large dark molecule)', 'Shape 2 (enzyme shape)', 'Shape 3 (after arrow)', 'Shape 4 (small molecule)'],
        widgetOptions: ['Carbohydrate', 'Enzyme', 'Product', 'Substrate'],
      },
      {
        label: 'b',
        text: '**Interpret** the rate of reaction graph: explain the trend from A to B, and from B to C.',
        marks: 4,
        ph: 'A→B: rate increases as substrate conc increases; more substrate for enzymes to act on. B→C: rate is constant/plateau; all active sites occupied — enzyme concentration is limiting.',
      },
      {
        label: 'c',
        text: 'More enzyme is added at point C. **Identify** which graph (A–D) correctly shows the effect on the rate of reaction.',
        marks: 1,
        ph: 'Graph D (rate rises above the plateau, then levels off at a new higher rate).',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
      },
    ],
  },

  // ── Q8 — Stress, Arteries, and Hypertension (9 marks, Crit A/D) ─────────
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Stress, Arteries and Hypertension',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 9,
    stem: 'Stress can lead to health problems including hypertension. One effect of stress is a temporary increase in blood pressure.',
    figImages: ['/images/papers/biology-may-2021/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'One effect of stress is a temporary increase in blood pressure. **Outline** how arteries are better able to withstand high blood pressure than veins.',
        marks: 2,
        ph: 'Arteries have more elastic fibres in their walls; arteries have thicker and more muscular walls.',
        figImages: ['/images/papers/biology-may-2021/page-22.png'],
      },
      {
        label: 'b',
        text: 'Exercise can be prescribed to reduce hypertension. Besides reducing blood pressure, **suggest** two advantages and two disadvantages of exercise for health.',
        marks: 4,
        ph: 'Advantages: weight loss, improved mood/mental health, increased fitness, reduced risk of heart disease. Disadvantages: risk of injury/muscle ache, complications for at-risk groups, hard to maintain long-term.',
        figImages: ['/images/papers/biology-may-2021/page-22.png', '/images/papers/biology-may-2021/page-23.png'],
      },
      {
        label: 'c',
        text: 'Using information from the video, **explain** how hypertension medication lowers blood pressure.',
        marks: 3,
        ph: 'Medication causes blood vessels to relax/stop contracting; lumen increases in diameter (vasodilation); same volume of blood flows through a larger space, reducing pressure.',
        figImages: ['/images/papers/biology-may-2021/page-24.png'],
      },
    ],
  },

  // ── Q9 — Evaluate Medication for Hypertension (11 marks, Crit D) ─────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Evaluating Medication for Hypertension',
    topicCanonical: 'Factors Affecting Human Health',
    topicGroup: 'Cells',
    topicsAlso: ['Circulation'],
    marks: 11,
    figImages: ['/images/papers/biology-may-2021/page-24.png'],
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** using medication to solve the problem of hypertension. In your answer, include: positive and negative impacts on an individual\'s lifestyle; positive and negative impacts on wider society; a concluding appraisal giving your opinion of how hypertension should be treated.',
        marks: 11,
        ph: 'Individual: positive (controls blood pressure, reduces stroke risk); negative (side effects, cost, dependency, lifestyle not addressed). Society: positive (reduces healthcare burden); negative (cost of prescriptions, over-reliance). Appraisal: medication useful but best combined with lifestyle changes — justify.',
      },
    ],
  },

  // ── Q10 — Melatonin, Cortisol and Sleep (8 marks, Crit D) ───────────────
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Melatonin, Cortisol and Sleep',
    topicCanonical: 'Receptors & Hormones',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Ethical Implications'],
    marks: 8,
    stem: 'Melatonin and cortisol are hormones released by the body to regulate the sleep-wake cycle. The graph shows hormone levels during the day and night for a stressed and non-stressed person.',
    figImages: ['/images/papers/biology-may-2021/page-25.png'],
    tasks: [
      {
        label: 'a',
        text: 'People with sleeping problems due to stress sometimes take a melatonin pill. **Suggest** how this would help them to fall asleep.',
        marks: 2,
        ph: 'The pill increases melatonin levels; stress raises cortisol which lowers melatonin — the pill compensates by raising melatonin to the level needed to fall asleep.',
      },
      {
        label: 'b',
        text: '**Discuss and evaluate** the use of rats to test the long-term effects of melatonin on humans with sleep problems. In your answer, include: a benefit and a limitation of using rats; two ethical considerations; a concluding appraisal with justification.',
        marks: 6,
        ph: 'Benefit: rats are mammals similar to humans; easy to control external variables. Limitation: different physiology; side effects may not translate. Ethical: rats exposed to stress (harmful); cannot give consent; unknown side effects; bred for experiments. Appraisal: justified conclusion on whether using rats is appropriate.',
        figImages: ['/images/papers/biology-may-2021/page-26.png'],
      },
    ],
  },
]
