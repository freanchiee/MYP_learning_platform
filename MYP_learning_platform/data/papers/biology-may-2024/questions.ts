import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-may-2024',
  subject: 'Biology',
  session: 'May',
  year: 2024,
  totalMarks: 98,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ── Question 1 — Criterion A (11 marks) ─────────────────────────────────────
  // Life processes, homeostasis, surface area to volume ratio
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Life Processes & Homeostasis',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 11,
    figImages: ['/images/papers/biology-may-2024/page-01.png'],
    tasks: [
      {
        label: 'a',
        text: 'Select the function described by each of the definitions below.\n\n• Production of offspring\n• Permanent increase in size\n• Reaction to an internal or external stimulus',
        marks: 2,
        ph: 'Select the matching life process for each definition.',
        widget: 'inline_dropdown_select',
        widgetOptions: ['Excretion', 'Growth', 'Metabolism', 'Nutrition', 'Reproduction', 'Response', 'Sensitivity'],
        widgetItems: ['Production of offspring', 'Permanent increase in size', 'Reaction to an internal or external stimulus'],
      },
      {
        label: 'b',
        text: 'Homeostasis is the maintenance of a stable internal environment. The image shows the temperature of an elephant. Outline how an elephant\'s ears help to maintain its body temperature.',
        marks: 2,
        ph: 'Describe how elephant ears help regulate body temperature...',
        figImages: ['/images/papers/biology-may-2024/page-02.png'],
      },
      {
        label: 'c',
        text: 'Plants have adapted to their environments by evolving a variety of leaf shapes and sizes. Broad-leaf plants, like the maple tree found in temperate forests, have large leaves which grow quickly.\n\nOutline one possible advantage of maple leaves having a large surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of large surface area in maple leaves...',
        figImages: ['/images/papers/biology-may-2024/page-03.png'],
      },
      {
        label: 'd',
        text: 'Other plants, like the saguaro cactus found in the desert, have spines, which are modified leaves.\n\nOutline one possible advantage of cactus leaves having a small surface area.',
        marks: 2,
        ph: 'State and briefly explain one advantage of small surface area in cactus spines...',
        figImages: ['/images/papers/biology-may-2024/page-03.png'],
      },
      {
        label: 'e',
        text: 'All cells need to obtain nutrients and eliminate waste efficiently. Because of this, cells are limited in size by the relationship between their surface area and their volume.\n\nExplain why having a high surface area to volume ratio is beneficial to a cell.',
        marks: 3,
        ph: 'Explain the benefit of a high SA:V ratio for cells, referencing nutrient uptake and waste removal...',
        figImages: ['/images/papers/biology-may-2024/page-04.png'],
      },
    ],
  },

  // ── Question 2 — Criterion A / D (12 marks) ─────────────────────────────────
  // North Pacific Ocean food web
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 12,
    stem: 'Below is a food web from the North Pacific Ocean.',
    figImages: ['/images/papers/biology-may-2024/page-05.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the food web above, construct a food chain that consists of five species including the Pacific halibut at the fourth trophic level.',
        marks: 3,
        ph: 'Write out a 5-species food chain with Pacific halibut at the 4th trophic level...',
        widget: 'match_drag_drop',
        widgetItems: ['Armhook squid', 'Chinook salmon', 'Copepods', 'Krill', 'Pacific herring', 'Phytoplankton', 'Resident killer whale'],
        widgetOptions: ['Trophic level 1', 'Trophic level 2', 'Trophic level 3', 'Trophic level 4 (Pacific halibut)', 'Trophic level 5'],
      },
      {
        label: 'b',
        text: 'State the trophic levels at which the resident killer whale feeds.',
        marks: 2,
        ph: 'State which trophic level(s) the killer whale occupies...',
      },
      {
        label: 'c',
        text: 'There are three different types of killer whale that live in the North Pacific Ocean. Each type has different physical features and eats a different diet.\n\nComment on whether the three different types of killer whale should be classified as three different species.',
        marks: 3,
        ph: 'Discuss species classification based on physical features and diet differences...',
      },
      {
        label: 'd',
        text: 'Scientists have mapped the genomes of different killer whale types. Suggest how this information could help scientists to decide whether the killer whale types should be classified as different species.',
        marks: 4,
        ph: 'Explain how genome mapping can inform species classification...',
      },
    ],
  },

  // ── Question 3 — Criterion B / C (10 marks) ─────────────────────────────────
  // Tree age estimation using growth factor values
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Measurement & Tree Biology',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    marks: 10,
    stem: 'The oldest living tree is thought to be over 5000 years old. The age of a tree can be estimated using growth factor values. Trees that grow faster have a higher growth factor. Different tree species have different growth factors.',
    figImages: [
      '/images/papers/biology-may-2024/page-08.png',
      '/images/papers/biology-may-2024/page-09.png',
      '/images/papers/biology-may-2024/page-10.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'A student wants to measure the circumference of a tree trunk at a height of 135 cm above the ground. Select the most appropriate piece of equipment to measure the circumference of the tree trunk.',
        marks: 1,
        ph: 'Select the best measuring instrument.',
        widget: 'radio_select',
        widgetOptions: ['Ruler', 'Tape measure', 'Protractor', 'Thermometer'],
      },
      {
        label: 'b',
        text: 'A student measures the circumference of a beech tree trunk at a height of 135 cm. The circumference is 170 cm. The growth factor for a beech tree is 1.00.\n\nUse the formula below to estimate the age of the beech tree. Show your working.\n\nage (years) = (circumference in cm ÷ π) × growth factor',
        marks: 3,
        ph: 'Show your calculation step by step. Age = (circumference ÷ π) × growth factor',
        ans: '54',
      },
      {
        label: 'c',
        text: 'An alternative method for estimating tree age is counting growth rings in the cross section of a trunk. Growth rings occur because trees grow faster in the spring and summer and slower in the autumn.\n\nOutline why counting both the light and dark rings would not accurately estimate the age of the tree.',
        marks: 2,
        ph: 'Explain why counting both light and dark rings is inaccurate...',
        figImages: ['/images/papers/biology-may-2024/page-13.png'],
      },
      {
        label: 'd',
        text: 'Justify why cutting near the base of the tree gives a more valid estimate of the tree\'s age.',
        marks: 1,
        ph: 'Justify why the base gives the most accurate ring count...',
      },
      {
        label: 'e',
        text: 'The image below shows cross sections of the same species of tree of the same age — one grown in a temperate climate and one grown in a tropical climate.\n\nIdentify a limitation of each method used to estimate the age of trees.\n\n• Growth factor values\n• Counting rings',
        marks: 3,
        ph: 'State one limitation of the growth factor method and one limitation of counting rings...',
        figImages: ['/images/papers/biology-may-2024/page-14.png'],
      },
    ],
  },

  // ── Question 4 — Criterion B / C (13 marks) ─────────────────────────────────
  // Sycamore tree age vs height investigation
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Data Collection & Analysis',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 13,
    stem: 'Some MYP students wanted to investigate the relationship between the age and height of sycamore trees growing in their local forest. The forest had over 500 sycamore trees. After discussing with their teacher how height could be estimated, they collected data on a sample of 20 randomly selected sycamore trees.',
    figImages: ['/images/papers/biology-may-2024/page-16.png'],
    tasks: [
      {
        label: 'a',
        text: 'Suggest why the sample of 20 sycamore trees was randomly selected.',
        marks: 2,
        ph: 'Explain the purpose of random sampling in this investigation...',
      },
      {
        label: 'b',
        text: 'Outline how the sample could be randomly selected.',
        marks: 1,
        ph: 'Describe a method for randomly selecting trees from the forest...',
        figImages: ['/images/papers/biology-may-2024/page-17.png'],
      },
      {
        label: 'c',
        text: 'The students collected the following data from five of the 20 trees:\n\n| Age (years) | Height (m) |\n|-------------|------------|\n| 80          | 22         |\n| 40          | 17         |\n| 20          | 12         |\n| 10          | 7          |\n| 5           | 3          |\n\nPlot the data from the table on the grid. Draw a line of best fit.',
        marks: 5,
        ph: 'Plot all 5 data points and draw a line of best fit. Marks: axes labelled (1), correct scale (1), all points plotted (2), line of best fit (1).',
        widget: 'radio_select',
        widgetOptions: ['I have plotted the points and drawn a line of best fit'],
      },
      {
        label: 'd',
        text: 'Using your graph, deduce the growth rate of the sycamore tree in metres per year.',
        marks: 2,
        ph: 'Calculate growth rate from the graph (change in height ÷ change in age)...',
      },
      {
        label: 'e',
        text: 'The students used their graph to predict the height of a 100-year-old sycamore tree. Outline one reason why this prediction may not be reliable.',
        marks: 2,
        ph: 'Explain why extrapolating the graph may give an unreliable prediction...',
      },
      {
        label: 'f',
        text: 'The growth factor for a sycamore tree is 1.57. Calculate the age of a sycamore tree with a circumference of 250 cm. Show your working.',
        marks: 1,
        ph: 'Use age = (circumference ÷ π) × growth factor to calculate the sycamore\'s age.',
      },
    ],
  },

  // ── Question 5 — Criterion B / C (10 marks) ─────────────────────────────────
  // Paper helicopter experiment
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Experimental Design — Paper Helicopter',
    marks: 10,
    stem: 'A paper helicopter model is made by following the steps shown. The time spent in the air is measured for three different drop heights.',
    figImages: [
      '/images/papers/biology-may-2024/page-21.png',
      '/images/papers/biology-may-2024/page-22.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent and dependent variables in this experiment.',
        marks: 2,
        ph: 'State the independent variable (IV) and the dependent variable (DV)...',
      },
      {
        label: 'b',
        text: 'State two controlled variables in this experiment.',
        marks: 2,
        ph: 'List two variables that must be kept constant throughout the experiment...',
      },
      {
        label: 'c',
        text: 'The students collected the following data:\n\n| Height from which seed is dropped (m) | Time spent in the air, Trial 1 (s) | Time spent in the air, Trial 2 (s) |\n|----------------------------------------|--------------------------------------|--------------------------------------|\n| 0.50 | 0.56 | 0.67 |\n| 0.75 | 1.15 | 1.07 |\n| 2.00 | 2.16 | 2.38 |\n\nDescribe the pattern shown in the data.',
        marks: 2,
        ph: 'Describe the relationship between drop height and time in air...',
        figImages: ['/images/papers/biology-may-2024/page-22.png'],
      },
      {
        label: 'd',
        text: 'Identify one limitation of using a paper helicopter as a model for a real maple seed.',
        marks: 2,
        ph: 'State one way the model differs from a real seed and explain why this is a limitation...',
      },
      {
        label: 'e',
        text: 'Suggest one way the experimental method could be improved to increase the reliability of the results.',
        marks: 2,
        ph: 'Propose a specific improvement to increase reliability...',
      },
    ],
  },

  // ── Question 6 — Criterion B (16 marks) ─────────────────────────────────────
  // Design a full investigation: effect of wing angle on seed fall time
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 16,
    stem: 'Design an investigation to test how the angle of the wing of the paper helicopter affects the time the helicopter spends in the air.\n\nYour investigation should be clearly described so that it could be repeated by another student. Use the method from Question 5 as a starting point.',
    figImages: [
      '/images/papers/biology-may-2024/page-23.png',
      '/images/papers/biology-may-2024/page-24.png',
      '/images/papers/biology-may-2024/page-25.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Design a full scientific investigation to determine how the wing angle of the paper helicopter affects the time it spends in the air. Your answer should include:\n\n• A focused research question\n• Identification of independent, dependent, and controlled variables\n• A step-by-step method that could be repeated by another student\n• Identification of safety and ethical considerations\n• A description of how data will be collected and recorded\n• How you will process the data to reach a conclusion',
        marks: 16,
        ph: 'Write your complete investigation design here. Include research question, variables, method, safety considerations, data collection table, and data processing plan...',
      },
    ],
  },

  // ── Question 7 — Criterion D / A (11 marks) ──────────────────────────────────
  // Dehydration, osmosis, reverse osmosis
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Water, Osmosis & Sustainability',
    topicCanonical: 'Osmosis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 11,
    stem: 'The human body is 65% water. Different body systems use water to carry out their specific functions. If a person does not drink enough water, they become dehydrated and their body systems do not work effectively.',
    figImages: ['/images/papers/biology-may-2024/page-26.png'],
    tasks: [
      {
        label: 'a',
        text: 'For each of the functions below, outline the effect of dehydration.\n\n• Excretion of waste\n• Temperature control',
        marks: 4,
        ph: 'For each function, describe what happens when the body is dehydrated...',
      },
      {
        label: 'b',
        text: 'Water can enter and exit cells by osmosis. Select arrows to show the net movement of water across the cell membrane in the diagram.\n\nThe diagram shows a cell with a high solute concentration inside and a low solute concentration outside.',
        marks: 2,
        ph: 'Select the arrow(s) showing net water movement by osmosis.',
        widget: 'match_drag_drop',
        widgetItems: ['Arrow pointing left (into cell)', 'Arrow pointing right (out of cell)'],
        widgetOptions: ['Net movement direction 1', 'Net movement direction 2', 'Net movement direction 3'],
        figImages: ['/images/papers/biology-may-2024/page-26.png'],
      },
      {
        label: 'c',
        text: 'Reverse osmosis can be used to provide freshwater from seawater. The process pumps seawater through a semipermeable membrane under high pressure.\n\nDiscuss the implications of using reverse osmosis to provide freshwater. In your answer, you should include:\n• the impacts on different ecosystems\n• the consequences of high energy use\n• a concluding appraisal',
        marks: 5,
        ph: 'Discuss ecosystem impacts (marine ecosystems, energy source effects), energy consequences, and provide a balanced conclusion...',
        figImages: [
          '/images/papers/biology-may-2024/page-28.png',
          '/images/papers/biology-may-2024/page-29.png',
          '/images/papers/biology-may-2024/page-30.png',
        ],
      },
    ],
  },

  // ── Question 8 — Criterion D (15 marks) ──────────────────────────────────────
  // Water cycle, precipitation, water sustainability
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Cycle & Sustainability',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 15,
    stem: 'The water cycle describes the continuous movement of water on Earth.',
    figImages: ['/images/papers/biology-may-2024/page-31.png'],
    tasks: [
      {
        label: 'a',
        text: 'Label the water cycle diagram. Drag the correct labels to the diagram.',
        marks: 1,
        ph: 'Place the labels: Condensation, Precipitation, Evaporation, Collection.',
        widget: 'match_drag_drop',
        widgetItems: ['Condensation', 'Precipitation', 'Evaporation', 'Collection'],
        widgetOptions: ['Position 1 (top – cloud formation)', 'Position 2 (falling rain)', 'Position 3 (water rising from surface)', 'Position 4 (water gathering in rivers/lakes)'],
      },
      {
        label: 'b',
        text: 'Some of the processes in the water cycle are changing due to climate change. Precipitation is one of these processes.\n\nOutline the consequences to a region if precipitation changes due to climate change.\n\n• Increased precipitation\n• Decreased precipitation',
        marks: 2,
        ph: 'For each: state one consequence of increased precipitation and one of decreased precipitation...',
        figImages: ['/images/papers/biology-may-2024/page-32.png'],
      },
      {
        label: 'c',
        text: 'Water is a finite resource. It is essential for life. It is necessary for hydration, hygiene, agriculture and food production. Human actions have changed the water cycle.\n\nEvaluate the actions that individuals and governments can take to ensure water is used sustainably. In your answer, you should include:\n\n• steps that could be taken to reduce water shortage in the home\n• a description of how an individual\'s dietary choices can affect their water footprint\n• a suggestion of how government policies can influence water usage\n• a concluding appraisal',
        marks: 12,
        ph: 'Evaluate individual and government actions for sustainable water use. Include home water saving, dietary water footprint (e.g. meat vs. vegetables), government policies (laws, education, subsidies), and a balanced concluding appraisal...',
        figImages: [
          '/images/papers/biology-may-2024/page-32.png',
          '/images/papers/biology-may-2024/page-33.png',
          '/images/papers/biology-may-2024/page-34.png',
          '/images/papers/biology-may-2024/page-35.png',
        ],
      },
    ],
  },
]
