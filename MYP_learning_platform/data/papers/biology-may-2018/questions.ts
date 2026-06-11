import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-may-2018',
  subject: 'Biology',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Q1: Natural Selection — Peppered Moths (11 marks, Criterion A) ──────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Natural Selection & Genetics',
    topicCanonical: 'Natural Selection',
    topicGroup: 'Evolution',
    topicsAlso: ['Inheritance & Variation'],
    marks: 11,
    stem: 'This question is about natural selection and genetics. The images show peppered moths on tree bark before and after the industrial revolution.',
    figImages: ['/images/papers/biology-may-2018/page-02.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *population* in the context of the peppered moths.',
        marks: 1,
        ph: 'A population is organisms of the same species living in the same area.',
      },
      {
        label: 'b',
        text: '**Describe** how natural selection results in the increase in frequency of the black-coloured moths after the industrial revolution.',
        marks: 3,
        ph: 'Reference to survival of fittest; beneficial traits survive to reproduce; frequency of trait increases...',
      },
      {
        label: 'c',
        text: '**Describe** how this change in the environment selected for the black-coloured moths and affected their frequency in the population.',
        marks: 4,
        ph: 'Colour of lichen/tree/background changed; black moths camouflaged; increased survival from predation; produced offspring with same colour...',
      },
      {
        label: 'd',
        text: 'Before the industrial revolution, most peppered moths were grey in colour. The black colour trait in moths is recessive.\n\n**Explain** how the black colour trait remained in the population even though it was an undesirable trait.',
        marks: 3,
        ph: 'Dark trait hidden by grey/allele; not expressed in heterozygous individuals; only homozygous recessive show it...',
      },
    ],
  },

  // ── Q2: Carbon Cycle (6 marks, Criterion A) ──────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 6,
    stem: 'The diagram shows the carbon cycle. The graph shows changes in methane and carbon dioxide levels in the atmosphere over time.',
    figImages: ['/images/papers/biology-may-2018/page-04.png', '/images/papers/biology-may-2018/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: '**Outline** how plants and animals are connected in the carbon cycle.',
        marks: 3,
        ph: 'Animals eat plants; animals produce CO₂ during respiration; plants use CO₂ in photosynthesis; CO₂ produced when animals/plants decay...',
      },
      {
        label: 'b',
        text: 'Use information from the diagram and graph above to **describe** how human activity has led to a change in the carbon cycle.',
        marks: 3,
        ph: 'Burning fossil fuels / deforestation / cattle rearing; increased carbon in atmosphere; climate change / global warming...',
      },
    ],
  },

  // ── Q3: Reproduction & Hormones (8 marks, Criterion A) ───────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reproduction, Variation & Hormones',
    topicCanonical: 'Reproduction',
    topicGroup: 'Evolution',
    topicsAlso: ['Receptors & Hormones', 'Inheritance & Variation'],
    marks: 8,
    figImages: ['/images/papers/biology-may-2018/page-06.png', '/images/papers/biology-may-2018/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the process that produces sperm and egg cells in organisms.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Mitosis', 'Homeostasis', 'Meiosis', 'Photosynthesis'],
      },
      {
        label: 'b',
        text: '**Outline** how fertilization leads to variation in a population.',
        marks: 3,
        ph: 'Each parent has different genetic material; half genetic material comes from each parent; combination leads to new individual...',
      },
      {
        label: 'c',
        text: 'The table below gives information about the role of hormones involved in the menstrual cycle.\n\n| Hormone | Role |\n|---|---|\n| Estrogen | Stops FSH being produced; causes egg to mature; thickens uterus lining; stimulates pituitary to release LH |\n| FSH (follicle stimulating hormone) | Stimulates the ovaries to release estrogen |\n| LH (luteinising hormone) | Triggers ovulation |\n| Progesterone | Maintains thickening of uterus during middle part of cycle |\n\n**Analyse** the information in the table to label the key of the following graph by dragging the hormone names to the correct positions.',
        marks: 3,
        ph: 'Drag: FSH → first peak early cycle; LH → sharp peak at ovulation; Estrogen → rises then dips; Progesterone → rises after ovulation.',
        widget: 'match_drag_drop',
        widgetItems: ['Follicle stimulating hormone (FSH)', 'Progesterone', 'Luteinising hormone (LH)', 'Estrogen'],
        widgetOptions: ['Key position 1', 'Key position 2', 'Key position 3', 'Key position 4'],
        figImages: ['/images/papers/biology-may-2018/page-07.png'],
      },
      {
        label: 'd',
        text: 'The graph above shows changing hormone levels during the menstrual cycle.\n\nUse information from the table above to **suggest** one possible result if estrogen did not stop the production of FSH.',
        marks: 1,
        ph: 'More than one egg could mature; could lead to twins or multiple embryos...',
      },
    ],
  },

  // ── Q4: Enzyme Investigation — pH (12 marks, Criterion B/C) ──────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Enzymes & Investigation Design',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    topicsAlso: ['Digestion'],
    marks: 12,
    stem: 'Enzymes are biological compounds that speed up biochemical reactions in organisms. Enzymes are a type of catalyst.\n\nThe graph below shows data about five enzymes found in the human digestive system.',
    figImages: ['/images/papers/biology-may-2018/page-08.png'],
    tasks: [
      {
        label: 'a',
        text: '**Interpret** the graph and use your scientific knowledge to drag and drop the correct enzyme to the correct location in the human body.',
        marks: 4,
        ph: 'Salivary amylase → mouth; Pepsin → stomach; Trypsin → small intestine/pancreas; Carbonic anhydrase → small intestine; Alkaline phosphatase → intestinal wall.',
        widget: 'match_drag_drop',
        widgetItems: ['Salivary amylase', 'Pepsin', 'Trypsin', 'Carbonic anhydrase', 'Alkaline phosphatase'],
        widgetOptions: ['Mouth/Salivary glands', 'Stomach', 'Small intestine (upper)', 'Small intestine / Pancreas', 'Intestinal wall (lower)'],
      },
      {
        label: 'b',
        text: 'A group of students investigated the effect of pH on enzyme-based reactions using lactase and lactose at pH 1, 7 and 14 at 37°C. The colour change of an indicator shows when the reaction is complete.\n\n**Formulate** a research question for this investigation.',
        marks: 1,
        ph: 'How does pH affect the rate of colour change / time for colour change of lactase breaking down lactose?',
        figImages: ['/images/papers/biology-may-2018/page-09.png', '/images/papers/biology-may-2018/page-10.png'],
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        ph: 'IV: pH. DV: time for colour change. CV (any 2): amount of lactose, surface area of lactose, amount of enzyme, volume of water, concentration of enzyme, temperature, type of enzyme.',
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['pH', 'Time for colour change', 'Amount of lactose/substrate', 'Volume of water', 'Temperature', 'Amount of enzyme/lactase'],
      },
      {
        label: 'd',
        text: 'Lactase is an enzyme present in the human digestive system.\n\n**Explain** why the values of pH chosen in the investigation above will not give sufficient relevant data.',
        marks: 3,
        ph: 'Range not relevant to human body; insufficient number of values; no repeats/minimum 3 trials needed...',
        figImages: ['/images/papers/biology-may-2018/page-11.png'],
      },
    ],
  },

  // ── Q5: Lactose Concentration Investigation (21 marks, Criterion A/C) ─────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Enzyme Concentration',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 21,
    stem: 'The students knew that each enzyme molecule could be used multiple times but wondered if the concentration of lactose would affect the time of reaction. The students conducted an investigation changing the concentration of lactose. The students hypothesised that if the concentration of lactose increases, then the time to change colour would be shorter because more lactose would be interacting with the enzyme.\n\n| Concentration of lactose / gdm⁻³ | Time for colour change / s |\n|---|---|\n| 2 | 78 |\n| 4 | 63 |\n| 6 | 64 |\n| 8 | 46 |\n| 10 | 43 |\n| 12 | 42 |\n| 14 | 41 |',
    figImages: ['/images/papers/biology-may-2018/page-12.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the enzyme that breaks down lactose.',
        marks: 1,
        ph: 'The enzyme is...',
      },
      {
        label: 'b',
        text: '**Plot** the data from the table on the axes below, add values to both axes and label the *y* axis.',
        marks: 5,
        ph: 'y-axis: Time for colour change / s (with unit). x-axis values evenly spaced. All 7 points plotted correctly ± 1 unit on candidate\'s scale.',
        figImages: ['/images/papers/biology-may-2018/page-12.png'],
      },
      {
        label: 'c',
        text: '**State** the unit that is missing from the *x* axis.',
        marks: 1,
        ph: 'The missing unit is...',
      },
      {
        label: 'd',
        text: 'Use scientific reasoning to **explain** the trend shown by the data in the graph above.',
        marks: 6,
        ph: 'As lactose concentration increases, time decreases (negative trend); more lactose interacts with enzyme; at plateau all active sites occupied; one correct scientific term used (active site, substrate, lactase)...',
        figImages: ['/images/papers/biology-may-2018/page-13.png'],
      },
      {
        label: 'e',
        text: 'The students hypothesised that if the concentration of lactose increases, then the time to change colour would be shorter because more lactose would be interacting with the enzyme.\n\nUsing the graph, **evaluate** the validity of the students\' hypothesis.',
        marks: 5,
        ph: 'Valid at lower concentrations (time decreasing); not valid at higher concentrations (plateau reached); all active sites being used; hypothesis partly valid...',
      },
      {
        label: 'f',
        text: '**State** one improvement to the investigation. **Justify** your answer.',
        marks: 2,
        ph: 'Improvement: more trials / extend range of concentrations / use spectrometer. Justification: linked to improvement...',
      },
      {
        label: 'g',
        text: 'The action of enzymes is temperature dependent. **State** one extension to the enzyme investigation other than changing the temperature or pH.',
        marks: 1,
        ph: 'Change the concentration of the enzyme/lactase...',
      },
    ],
  },

  // ── Q6: Temperature Enzyme Design Investigation (18 marks, Criterion B) ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Temperature & Enzymes',
    topicCanonical: 'Enzymes & Biochemistry',
    topicGroup: 'Metabolism',
    marks: 18,
    stem: 'In a third enzyme investigation using lactose, the students wanted to study the effects of temperature on enzyme activity.',
    figImages: ['/images/papers/biology-may-2018/page-14.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation into the effect of temperature on enzyme activity. In your design, you should:\n\n- identify the independent, dependent and two control variables\n- formulate a testable hypothesis with a scientific explanation\n- describe how you will manipulate the variables\n- describe the method\n- state how you will make sure your method is safe',
        marks: 18,
        ph: 'IV: temperature. DV: time for colour change. CV: amount/concentration of lactose, volume of enzyme solution. Hypothesis: As temperature increases, time to change colour decreases (up to optimal), because enzymes work faster at higher temperatures. Above optimal temperature enzymes denature and reaction stops. Method: set water baths at different temperatures (e.g. 10, 20, 30, 37, 50°C); add 10cm³ enzyme + 1g lactose; record time for colour change; repeat 3 times. Safety: handle glassware carefully; avoid extreme temperatures.',
      },
    ],
  },

  // ── Q7: Plant Growth Factors (4 marks, Criterion A/D) ────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Plant Growth & Photosynthesis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 4,
    figImages: ['/images/papers/biology-may-2018/page-15.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** all the factors needed for plant growth.',
        marks: 2,
        ph: 'Light, Water, Nutrients and Carbon dioxide.',
        widget: 'radio_select',
        widgetOptions: [
          'Light, Water, Nutrients and Carbon dioxide',
          'Glucose, Light, Oxygen and Water',
          'Light, Oxygen, Nutrients and Carbon dioxide',
          'Glucose, Water, Nutrients and Oxygen',
        ],
      },
      {
        label: 'b',
        text: 'For **one** of the factors you selected in part (a), **outline** the role of this factor in plant growth.',
        marks: 2,
        ph: 'e.g. Light: used in photosynthesis to produce glucose for energy and growth...',
      },
    ],
  },

  // ── Q8: Terracing vs Vertical Farming — Compare (5 marks, Criterion D) ────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Farming Methods — Compare & Contrast',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitat Change & Destruction'],
    marks: 5,
    stem: 'Ancient civilisations used landscape terracing to ensure a supply of water. Terraces are still used today in rice-growing areas of South-East Asia. Vertical farming involves growing crops on the outside walls of buildings. Nutrients can be controlled and all waste water is recirculated.',
    figImages: [
      '/images/papers/biology-may-2018/page-16.png',
      '/images/papers/biology-may-2018/page-17.png',
      '/images/papers/biology-may-2018/page-18.png',
      '/images/papers/biology-may-2018/page-19.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Compare and contrast** how the needs of the crops have been met in landscape terracing and vertical farming. **Justify** your answers.',
        marks: 5,
        ph: 'Similarity: both maximize space / improve light / improve water supply. Difference: terracing uses natural light vs vertical can control light; terracing relies on climate vs vertical reuses water; terracing reduces soil erosion vs vertical has no soil erosion...',
      },
    ],
  },

  // ── Q9: Landscape Farming — Discuss & Evaluate (15 marks, Criterion D) ────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Human Impact on Landscape — Evaluation',
    topicCanonical: 'Human Influences',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Mitigation of Adverse Effects'],
    marks: 15,
    stem: 'Using information from the reading passage about terracing and vertical farming.',
    figImages: ['/images/papers/biology-may-2018/page-20.png', '/images/papers/biology-may-2018/page-21.png'],
    tasks: [
      {
        label: '',
        text: 'Using information from the video, **discuss** and **evaluate** how humans have changed their natural landscape to optimise their local environment for farming. In your answer, you should include:\n\n- a discussion of how the landscape has been changed\n- scientific justification of the changes to the landscape\n- advantages of changing the landscape\n- disadvantages of changing the landscape\n- an economic impact or a social impact\n- a concluding appraisal.',
        marks: 15,
        ph: 'Change: terracing creates stepped fields / vertical farming uses building walls. Scientific justification: reduces soil erosion / absorbs heavy rainfall / maximises light. Advantages: more food produced / reduces flooding. Disadvantages: unmaintained terraces lead to mudslides / ground saturation. Economic/social: provides food for growing population / labour intensive. Appraisal: both methods effective but vertical farming more sustainable in urban areas...',
      },
    ],
  },
]
