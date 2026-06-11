import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2016',
  subject: 'Biology',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Cells (14 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 14,
    stem: 'All living things are made of cells. All cells come from other cells. The cell is the basic unit of structure and function in all living things.',
    tasks: [
      {
        label: 'a',
        text: '**Describe** three functions cells perform to maintain life.',
        marks: 6,
        ph: 'Three of: Growth/differentiation — increasing in size/complexity; Respiration — release of energy from nutrients; Reproduction — replication/propagation; Digestion — breakdown of food; Homeostasis — regulation of internal environment; Excretion — elimination of metabolic waste/CO₂.',
      },
      {
        label: 'b',
        text: 'Look at the three cell images in the tabs below.\n\n**State** whether each cell is a plant cell or an animal cell. **Justify** your answers by identifying key structures.',
        marks: 6,
        ph: 'Cell 1: plant cell — has cell wall/chloroplasts/large central vacuole. Cell 2: plant cell — has cell wall/chloroplasts/large central vacuole. Cell 3: animal cell — no cell wall/no chloroplasts/has lysosomes.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Cell 1', 'Cell 2', 'Cell 3'],
        widgetOptions: ['Plant cell', 'Animal cell'],
        figImages: ['/images/papers/biology-nov-2016/page-02.png'],
      },
      {
        label: 'c',
        text: 'Some single-celled organisms are not easy to identify as either plant or animal.\n\n**Formulate** and **explain** a testable hypothesis which could be used to determine if a single-celled organism you are observing is a plant.',
        marks: 2,
        ph: 'Hypothesis: If the organism is exposed to light then it will produce oxygen, because plant-like organisms photosynthesize to produce oxygen.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Organisation & Circulation (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organisation & Circulation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 7,
    tasks: [
      {
        label: 'a',
        text: 'Look at the images below.\n\nDrag and drop to **organize** the images into a sequence in order of increasing complexity.\n\nImages: A (heart/organ tissue), B (single red blood cell), C (paramecium/single-celled organism), D (pug dog/organism), E (cluster of red blood cells/tissue).',
        marks: 2,
        ph: 'Correct order least → most complex: B → E → A → C → D.',
        figImages: ['/images/papers/biology-nov-2016/page-03.png'],
      },
      {
        label: 'b',
        text: '**Describe** the movement of an oxygen molecule from the lungs to a muscle cell. Use scientific language and include five points in your answer.',
        marks: 5,
        ph: 'Diffuses across alveolus membrane → into capillary → binds haemoglobin in red blood cell → transported to heart via pulmonary vein → through left atrium/ventricle → leaves via aorta → through arteries → through capillaries → diffuses into muscle cell.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Fish Gill Disease (12 marks, Criterion A/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Fish Gill Disease',
    topicCanonical: 'Gas Exchange',
    topicGroup: 'Metabolism',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 12,
    stem: 'A fishing community relies on its catch of a type of fish called Borch for its staple diet. The fish are starting to show signs of a gill disease which increases the thickness of the gas exchange surface. The increase in thickness affects the fish\'s oxygen uptake.',
    figImages: ['/images/papers/biology-nov-2016/page-04.png', '/images/papers/biology-nov-2016/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the graph, **state** the volume of oxygen taken up per hour by healthy fish without gill disease.',
        marks: 1,
        ph: '0.29 cm³ h⁻¹ (accept 0.28).',
      },
      {
        label: 'b',
        text: 'Using the graph, **outline** the relationship between the amount of gill affected and the oxygen uptake of the fish.',
        marks: 1,
        ph: 'Negative/inverse relationship — as % gill affected increases, oxygen uptake decreases.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the structure and function of the fish\'s gill to a human lung.',
        marks: 3,
        ph: 'Common: thin membrane, large surface area, moist surfaces, capillaries. Differences: oxygen from water (fish) vs air (human); gills external/lamellae vs lungs internal/alveoli.',
        figImages: ['/images/papers/biology-nov-2016/page-06.png'],
      },
      {
        label: 'd',
        text: 'Using the information provided, **suggest** why increased thickness of gills would impact oxygen uptake.',
        marks: 2,
        ph: 'Increased thickness → longer diffusion distance → oxygen cannot diffuse as quickly/efficiently across gas exchange surface → reduced oxygen uptake.',
      },
      {
        label: 'e',
        text: 'If the gill disease spreads through the fish population, **discuss** the potential consequences for the biological community. In your answer consider:\n- how the food chain will be affected\n- the size of the fish population\n- the effects of the activities of the diseased fish on the community\n- the effects on the human community that harvests the fish.',
        marks: 5,
        ph: 'Reduced fish numbers → food chain disruption; fish population declines; reduced protein/food source; economic hardship for fishing community.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Athlete Fitness & Oxygen Consumption (9 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Athlete Fitness & Oxygen Consumption',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'One indicator of fitness is a measurement of how efficiently the body can consume oxygen. The experiment must be designed to take account of variables.',
    tasks: [
      {
        label: 'a',
        text: 'List **two** variables that should be controlled during an experiment to measure maximum oxygen consumption.',
        marks: 2,
        ph: 'Any two, e.g.: time of exercise; time of day; age of athlete; body mass; type of exercise.',
      },
      {
        label: 'b',
        text: '**State** the type of relationship shown in the graph of oxygen consumption and exercise intensity.',
        marks: 2,
        ph: 'Positive/linear relationship — oxygen consumption increases with exercise intensity up to VO₂ max.',
        figImages: ['/images/papers/biology-nov-2016/page-08.png'],
      },
      {
        label: 'c',
        text: '**Describe** the pattern between oxygen consumption and exercise intensity and **explain** what is happening on a cellular level **just before** and **just after** point A.',
        marks: 5,
        ph: 'Before A: O₂ consumption increases; cells use more O₂ for energy (aerobic respiration). After A (VO₂ max): O₂ consumption plateaus; cells cannot consume more O₂; switch to anaerobic respiration.',
        figImages: ['/images/papers/biology-nov-2016/page-08.png'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — GM Maize Investigation (20 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GM Maize Investigation',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    marks: 20,
    stem: 'Scientists studied the growth of GM maize grown without fertilizer compared to traditional (non-GM) maize grown with fertilizer. One independent variable is the type of maize used.',
    figImages: ['/images/papers/biology-nov-2016/page-09.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** one other independent variable being investigated in this study.',
        marks: 1,
        ph: 'Use of fertilizer (with fertilizer vs without fertilizer).',
      },
      {
        label: 'b',
        text: '**Select** an appropriate hypothesis that could have been tested in this experiment.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Soils that are rich in nutrients produce better growth in maize crops than soils that are nutrient-poor.',
          'GM maize can produce more growth from nutrient-poor soil than traditional maize.',
          'GM maize can produce the same growth as traditional maize in nutrient-poor soils.',
          'GM maize produces better growth than traditional maize.',
        ],
        ph: 'Option C: GM maize can produce the same growth as traditional maize in nutrient-poor soils.',
      },
      {
        label: 'c',
        text: '**Label** the table for the scientists to collect the height of the plants. **Select** and **measure** suitable plants and record your data to an appropriate number of significant figures.',
        marks: 4,
        ph: 'Table headers include group names and unit (m). At least 5 values per group, 3–4 significant figures, all values 1.1–1.8 m.',
        figImages: ['/images/papers/biology-nov-2016/page-10.png'],
      },
      {
        label: 'd',
        text: '**Calculate** the mean (average) of your data for each group.',
        marks: 2,
        ph: 'Mean in range 1.43–1.46 m; expressed to 3 or 4 significant figures.',
      },
      {
        label: 'e',
        text: '**Select** a graph to present this data. **Label** the axes of your graph and give it a suitable title.',
        marks: 3,
        ph: 'Bar graph selected; x-axis: group names; y-axis: height (m); suitable title.',
      },
      {
        label: 'f',
        text: '**Analyse** the results of this experiment using scientific reasoning.',
        marks: 3,
        ph: 'Both groups have similar heights → GM maize without fertilizer achieves same growth as traditional maize with fertilizer → new gene enables more efficient nutrient absorption.',
      },
      {
        label: 'g',
        text: '**Discuss** and **evaluate** the method used to investigate the growth of GM maize. In your answer consider:\n- one feature of the method that ensures that it is valid\n- one feature that could be changed to improve the validity\n- how the investigation could be extended\n- how your suggested extension improves the validity of conclusions.',
        marks: 5,
        ph: 'Strength: number of trials/controls. Limitation: two variables changed simultaneously. Extension: test GM maize with fertilizer. Justification: confirms effects not due to fertilizer use alone.',
      },
      {
        label: 'h',
        text: 'In this experiment height was chosen as a measure of growth.\n\nOther than height, **suggest** another way the scientists could have chosen to measure growth of the maize plants.',
        marks: 1,
        ph: 'Biomass of maize; number/yield of kernels; number of leaves.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Bt Cotton & GMO Ecosystems (30 marks, Criterion B/D)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Bt Cotton & GMO Ecosystems',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pollution & Conservation'],
    marks: 30,
    stem: 'Bt cotton is a genetically modified (GM) cotton plant that has been developed to produce its own pesticide which kills or deters insects from eating the plant. However, this is not a selective pesticide and the plant itself is toxic to other organisms.',
    tasks: [
      {
        label: 'a',
        marks: 17,
        text: '**Design** one experiment that could be conducted to study the possible effects of growing Bt cotton on an ecosystem. Your answer should include:\n- a testable hypothesis\n- identification of the variables\n- a description of the method\n- a description of how to manipulate the variables.',
        ph: 'Hypothesis: Growing Bt cotton will reduce insect biodiversity compared to non-GM cotton. IV: type of cotton; DV: insect species diversity; CV: soil type, water, sunlight. Method: plant each type in separate plots; sample insects regularly; compare diversity. Safety: handle materials carefully.',
      },
      {
        label: 'b',
        marks: 13,
        text: 'Consider the wider use of genetically modified organisms (GMOs) either using examples from your MYP studies or from earlier questions. **Discuss** and **evaluate** two different implications of how the use of GMOs could impact an ecosystem. In your extended piece of writing you should support your answer with scientific evidence and explanations considering:\n- what is meant by the term ecosystem\n- the advantages and disadvantages of GMOs\n- the consequences we should consider before introducing GMOs from both an ethical and an economic perspective.',
        ph: 'Define ecosystem. Advantage: pest resistance, higher yield. Disadvantage: GM genes spreading, harm to non-target species, reduced biodiversity. Ethical: manipulation of organisms. Economic: cost vs benefit. Concluding appraisal.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Vaccines & Immunity (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Vaccines & Immunity',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 7,
    stem: 'Advances in human capability mean that vaccines are now available to treat diseases that once killed millions of people every year. The Global Vaccine Action Plan is a framework designed to increase equal access to vaccines for people in all communities.',
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *vaccine*.',
        marks: 2,
        ph: 'A preparation containing killed/weakened pathogens administered to stimulate specific antibody production / immune response.',
      },
      {
        label: 'b',
        text: '**Describe** how vaccines protect organisms against infectious diseases caused by pathogens.',
        marks: 5,
        ph: 'Pathogens have antigens; vaccine administered; body produces antibodies via B lymphocytes; antibodies bind antigens to neutralize; memory cells formed for lasting immunity.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — GM Bananas as Edible Vaccines (21 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'GM Bananas as Edible Vaccines',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Vaccination', 'Ethical Implications'],
    marks: 21,
    stem: 'Scientists have been testing several crops to use them as edible vaccines against tropical water-related diseases such as hepatitis, cholera, malaria and polio. The banana is a suitable fruit for this purpose.',
    tasks: [
      {
        label: 'a',
        text: 'A scientist would like to test if edible vaccines are as effective as traditional vaccines. **Identify** the dependent, independent and control variables in this study. For each one, justify your choice.',
        marks: 6,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Type of vaccine (GM banana vs traditional)', 'Immune response / antibody level', 'Age of participants', 'Health status of participants', 'Dosage amount', 'Type of disease tested against'],
        ph: 'IV: type of vaccine (what is changed). DV: immune response/antibody level (what is measured). CV: age, health status, dosage.',
      },
      {
        label: 'b',
        marks: 15,
        text: '**Discuss** and **evaluate** how using GM bananas as edible vaccines in tropical developing countries improves access to vaccines for protection against diseases. In this extended piece of writing you should consider:\n- advantages and disadvantages of using GM bananas compared to traditional vaccines\n- the consequences for a community as a result of an improved immune system\n- wider effects on the ecosystem\n- ethical issues related to vaccination.',
        ph: 'Advantages: cheap, no refrigeration, no needles, accessible. Disadvantages: dosage control, GM concerns. Community: reduced disease burden. Ecosystem: less pharmaceutical waste. Ethical: consent, GM food concerns. Appraisal.',
      },
    ],
  },
]
