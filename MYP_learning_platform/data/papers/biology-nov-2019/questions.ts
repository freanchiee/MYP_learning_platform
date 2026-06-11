import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2019',
  subject: 'Biology',
  session: 'Nov',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Food Web & Ecosystems (11 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Food Webs',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Interdependency'],
    marks: 11,
    stem: 'The diagram shows a food web from a savanna ecosystem. The organisms shown include: lion, vulture, leopard, giraffe, rhino, baboon, skunk, shrike, snake, impala, caracal, grasshopper, mouse, tree, grass, and shrub.',
    figImages: ['/images/papers/biology-nov-2019/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the type of model shown in the diagram.',
        marks: 1,
        ph: 'The model is called a ...',
      },
      {
        label: 'b',
        text: '**State** what the arrows in the diagram represent.',
        marks: 1,
        ph: 'The arrows represent...',
      },
      {
        label: 'c',
        text: '**Identify** one producer and two secondary consumers from the food web.',
        marks: 2,
        ph: 'Producer: ...\nSecondary consumer 1: ...\nSecondary consumer 2: ...',
      },
      {
        label: 'd',
        text: 'The impala population decreases due to disease. **Explain** how the populations of shrub and baboon would change.',
        marks: 5,
        ph: 'Shrub population: ...\nBaboon population: ...',
      },
      {
        label: 'e',
        text: '**State** the role of decomposers in an ecosystem.',
        marks: 1,
        ph: 'Decomposers...',
      },
      {
        label: 'f',
        text: '**Suggest** one other limitation of a food web as a model of an ecosystem.',
        marks: 1,
        ph: 'Another limitation is...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Cells & Photosynthesis (12 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Cell Biology & Photosynthesis',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Structure & Function'],
    marks: 12,
    stem: 'This question is about cells and how plants produce glucose.',
    figImages: [
      '/images/papers/biology-nov-2019/page-05.png',
      '/images/papers/biology-nov-2019/page-06.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct statement about cells.',
        marks: 1,
        ph: 'Select the correct statement.',
        widget: 'radio_select',
        widgetOptions: [
          'Cells are found in plants but not fungi',
          'Cells are the smallest unit of life',
          'All cells go through meiosis',
          'All cells are the same size',
        ],
      },
      {
        label: 'b',
        text: 'The diagram below shows an animal cell and a plant cell. **State** two structures present in the plant cell but not in the animal cell and **outline** the function of each structure.',
        marks: 4,
        ph: 'Structure 1: ... Function: ...\nStructure 2: ... Function: ...',
      },
      {
        label: 'c',
        text: '**Describe** the role of chlorophyll in glucose production in plants.',
        marks: 4,
        ph: 'Chlorophyll absorbs light... light energy is used to...',
      },
      {
        label: 'd',
        text: 'The roots of a plant cannot produce glucose but they need glucose for growth. **Outline** how the roots obtain glucose.',
        marks: 3,
        ph: 'Glucose is produced in the leaves by photosynthesis. It is then transported...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Yeast Respiration Experiment (10 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Respiration',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Cell Respiration'],
    marks: 10,
    stem: 'Yeast is a microorganism that is commonly used to make bread and beer.\n\nYeast must respire to survive. Respiration is a reaction that occurs in the cells of living things, and is controlled by specific enzymes.\n\nSome students planned a simple experiment to find out how temperature affects respiration in yeast. The students collected the carbon dioxide produced during respiration in a balloon. They suggested the following research question:\n\n**"How does temperature affect the rate of respiration in yeast as measured by the volume of carbon dioxide produced in 15 minutes?"**\n\nThe experiment used sugar solution mixed with yeast solution, placed in three flasks held in water baths at 20 °C, 40 °C, and 60 °C for 15 minutes. The size of the balloon attached to each flask was compared after 15 minutes.',
    figImages: [
      '/images/papers/biology-nov-2019/page-09.png',
      '/images/papers/biology-nov-2019/page-10.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: the independent variable, the dependent variable, and **two** control variables.',
        marks: 4,
        ph: 'Independent variable: ...\nDependent variable: ...\nControl variable 1: ...\nControl variable 2: ...',
      },
      {
        label: 'b',
        text: '**Outline** if the method in the interactive graphic above will give sufficient data to answer the research question. **Justify** your answer.',
        marks: 2,
        ph: 'The method will / will not give sufficient data because...',
      },
      {
        label: 'c',
        text: '**Suggest** two improvements to this experiment. **Justify** your improvements.',
        marks: 4,
        ph: 'Improvement 1: ...\nJustification: ...\nImprovement 2: ...\nJustification: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Investigating Different Sugars (21 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation — Enzymes & Sugars',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Enzymes & Biochemistry'],
    marks: 21,
    stem: 'The students continued to investigate respiration in yeast. They were interested in investigating different sugars.\n\nZymase is an enzyme found in yeast which is important in respiration. The image below shows a model of zymase and five different sugars: fructose, glucose, sucrose, lactose and maltose.',
    figImages: [
      '/images/papers/biology-nov-2019/page-13.png',
      '/images/papers/biology-nov-2019/page-14.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for an investigation into the effect of different sugars on the rate of respiration of yeast.',
        marks: 2,
        ph: 'How does the type of sugar affect the rate of respiration in yeast as measured by...',
      },
      {
        label: 'b',
        text: 'Using the model of zymase and the five sugars shown above, **predict** which sugar is most likely to be respired by the yeast. **Justify** your answer.',
        marks: 4,
        ph: 'The sugar most likely to be respired is ... because its shape fits the active site of zymase...',
      },
      {
        label: 'c',
        text: '**Design** an investigation into the effect of different sugars on the **rate** of respiration of yeast. In your answer, you should include:\n\n- the independent, dependent and two control variables\n- how you will collect sufficient data and process it\n- any additional equipment you will need to make measurements or to control variables\n- the method that you will use.',
        marks: 15,
        ph: 'Independent variable: type of sugar (fructose, glucose, sucrose, lactose, maltose)\nDependent variable: volume of CO₂ produced / size of balloon after 15 minutes\nControl variables: (1) volume of sugar solution, (2) concentration of sugar solution, (3) temperature...\n\nEquipment: flasks, balloons, measuring cylinders, water bath, ruler/syringe to measure balloon size...\n\nMethod: Prepare equal volumes of each sugar solution at the same concentration. Mix with equal volumes of yeast solution. Attach a balloon to each flask. Place all flasks in a water bath at the same temperature. Record balloon size after 15 minutes. Repeat three times for each sugar. Calculate mean. Process by comparing means...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Fermentation & Biofuels (23 marks, Criterion C/D)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis — Fermentation & Biofuels',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    marks: 23,
    stem: 'Another term for respiration in yeast is *fermentation*. Fermentation of plant materials is used to produce ethanol, which can be used as biofuel. The main sources of plant material used around the world today are wheat, corn, soybeans, and sugarcane. These food sources are used because they have a high sugar content and they ferment easily.\n\nSome students decided to investigate if other food sources could be fermented. They were particularly interested in waste products — parts of food that are thrown away rather than eaten.\n\nThe food waste they chose to study was from **water chestnuts** and **pineapples**.',
    figImages: [
      '/images/papers/biology-nov-2019/page-16.png',
      '/images/papers/biology-nov-2019/page-17.png',
      '/images/papers/biology-nov-2019/page-18.png',
      '/images/papers/biology-nov-2019/page-19.png',
      '/images/papers/biology-nov-2019/page-20.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** one advantage of biofuels over fossil fuels.',
        marks: 1,
        ph: 'One advantage of biofuels is...',
      },
      {
        label: 'b',
        text: '**State** two advantages of using food waste rather than food crops to produce biofuels.',
        marks: 2,
        ph: 'Advantage 1: ...\nAdvantage 2: ...',
      },
      {
        label: 'c',
        text: 'The results from the students\' investigation are shown in the table below. For each of the food wastes, **identify** the day on which the largest mass of ethanol was produced.\n\n| | Day 1 | Day 3 | Day 5 | Day 7 | Day 9 | Day 11 |\n|---|---|---|---|---|---|---|\n| Water chestnut | 2.6 | 4.5 | 3.4 | 3.1 | 2.3 | 2.0 |\n| Pineapple | 2.3 | 5.6 | 9.0 | 3.4 | 1.3 | 1.3 |\n\n*(Mass of ethanol produced each day from 10 g of food waste / mg)*\n\nWater chestnut: Day ___BLANK_1___\nPineapple: Day ___BLANK_2___',
        marks: 1,
        ph: 'Fill in the day numbers for each food waste.',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'The graph below already shows the data for pineapple waste. **Plot** the data for water chestnut waste on the graph. You should also **add a title** to the graph and **label the axes**.\n\n*(Describe what your completed graph would look like, including key features.)*',
        marks: 5,
        ph: 'Title: Mass of ethanol produced from food waste over time\nX-axis: Day / day(s)\nY-axis: Mass of ethanol / mg\nWater chestnut points: Day 1 = 2.6, Day 3 = 4.5, Day 5 = 3.4, Day 7 = 3.1, Day 9 = 2.3, Day 11 = 2.0\nPoints correctly plotted and joined with a smooth curve...',
      },
      {
        label: 'e',
        text: '**Outline** two trends in ethanol production for pineapple waste. **Explain** these trends using scientific reasoning.',
        marks: 6,
        ph: 'Trend 1: Ethanol production increases initially (until day 5).\nExplanation: The yeast population is growing, so there is more respiration occurring...\n\nTrend 2: After day 5, ethanol production decreases.\nExplanation: Food supply becomes limited, so less respiration occurs. Or ethanol builds up to toxic levels, causing yeast cells to die...',
      },
      {
        label: 'f',
        text: 'The table shows that the total mass of ethanol produced by water chestnut over all days was 17.9 mg. **Calculate** the total mass of ethanol produced by pineapple waste over the 11 days. Show your working.',
        marks: 1,
        ph: 'Total = 2.3 + 5.6 + 9.0 + 3.4 + 1.3 + 1.3 = ...',
      },
      {
        label: 'g',
        text: '**Calculate** the difference in total mass of ethanol produced between the two types of food waste.',
        marks: 1,
        ph: 'Difference = ... − 17.9 = ...',
      },
      {
        label: 'h',
        text: 'The nutritional information shows that pineapple contains 13 g of carbohydrates per 100 g, while water chestnut contains 24 g of carbohydrates per 100 g. The students predicted that a food source containing more carbohydrate will produce more ethanol.\n\n**Suggest** reasons why this prediction is **not** supported by the results in part (f).',
        marks: 2,
        ph: 'Water chestnut has a higher carbohydrate content but produced less ethanol because...',
      },
      {
        label: 'i',
        text: 'The temperature of the water baths was not controlled in the students\' method. **Identify** two other variables that were not controlled and **suggest** how the results may have been affected.',
        marks: 4,
        ph: 'Variable 1: ...\nEffect: ...\nVariable 2: ...\nEffect: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Diabetes & Insulin (23 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Diabetes, Hormones & Genetics',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Receptors & Hormones'],
    marks: 23,
    stem: 'Diabetes has been recognised since ancient times as a disease that can be linked to diet. We now know that this disease is caused when the body cannot regulate its blood sugar levels. In the 1920s, it was discovered that the hormone insulin is involved in regulating blood sugar levels.\n\nBetween the 1930s and the 1980s, factories purified insulin extracted from pigs\' pancreases. Around 1980, human insulin was produced by genetically modified bacteria for the first time. By changing the human insulin gene slightly, different versions of insulin are produced. In 1980, there were 108 million people worldwide with diabetes; by 2014 this figure rose to 422 million. However, over this time the death rate from diabetes dropped dramatically.',
    figImages: [
      '/images/papers/biology-nov-2019/page-21.png',
      '/images/papers/biology-nov-2019/page-22.png',
      '/images/papers/biology-nov-2019/page-23.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The regulation of blood sugar is an example of homeostasis. **Select** the correct meaning of the word *homeostasis*.',
        marks: 1,
        ph: 'Select the correct meaning.',
        widget: 'radio_select',
        widgetOptions: [
          'The conversion of glucose to glycogen',
          'The maintenance of a constant internal environment',
          'The release of energy from glucose',
          'The development of red blood cells in bone marrow',
        ],
      },
      {
        label: 'b',
        text: 'Gene transfer is an example of genetic modification and is used to produce human insulin. The diagram shows the industrial manufacture of insulin with four numbered stages. **Select** the correct statement for each numbered stage.\n\n**Stage 1:** ___SELECT_1___\n**Stage 2:** ___SELECT_2___\n**Stage 3:** ___SELECT_3___\n**Stage 4:** ___SELECT_4___',
        marks: 4,
        ph: 'Select the correct statement for each of the four stages.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
        widgetOptions: [
          'Human insulin gene extracted',
          'Plasmid DNA opened',
          'Bacterial diabetes gene removed',
          'Extraction and purification of human insulin',
          'Genetically modified bacteria reproduce',
          'Insulin extracted from pancreas cell',
        ],
      },
      {
        label: 'c',
        text: 'Fast-acting insulin can be taken before a meal. **Suggest** why this might be necessary for people with diabetes.',
        marks: 2,
        ph: 'Eating a meal causes blood glucose to rise. People with diabetes cannot produce enough insulin to lower it, so...',
      },
      {
        label: 'd',
        text: 'The industrialization of insulin production has been developed to help manage diabetes. **Discuss** and **evaluate** the impacts of the industrialization of insulin production. In your answer you should include:\n\n- the impacts on an individual\'s health\n- social implications for communities\n- economic considerations\n- your opinion of whether or not industrialization has improved the management of diabetes.',
        marks: 14,
        ph: 'Individual health: Industrialization has made insulin more available and affordable, meaning people with diabetes can manage their blood sugar levels more effectively. Different forms of insulin (fast-acting, long-lasting) allow personalised treatment...\n\nSocial implications: More people can access insulin in developing countries. However, the number of people with diabetes has increased from 108 million to 422 million, suggesting broader social challenges...\n\nEconomic considerations: Mass production has reduced the cost of insulin. However, diabetes still places a large economic burden on healthcare systems...\n\nConclusion: In my opinion, industrialization has improved the management of diabetes because the death rate has dropped dramatically despite the large increase in the number of people with diabetes...',
      },
      {
        label: 'e',
        text: 'Insulin treatment is not always effective. Recently, scientists have been working to develop a permanent cure for diabetes. This cure involves transplanting insulin-producing pancreas cells from pigs into humans. **Outline** the ethical implications of this procedure.',
        marks: 2,
        ph: 'Ethical implications include...',
      },
    ],
  },
]
