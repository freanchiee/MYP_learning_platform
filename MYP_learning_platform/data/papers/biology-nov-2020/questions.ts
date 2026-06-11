import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2020',
  subject: 'Biology',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 — Ecosystems & Evolution (11 marks, Crit A) ──────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Evolution',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Natural Selection'],
    marks: 11,
    stem: 'A biome contains plants and animals living in a major habitat. A biome can be made up of multiple ecosystems.',
    tasks: [
      {
        label: 'a',
        text: 'The images below show different organisms in a biome.\n\n**Organize** the organisms to create a food chain by dragging them into the correct order.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Grass', 'Frog', 'Snake', 'Grasshopper'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
        ph: 'Grass → Grasshopper → Frog → Snake.',
        figImages: ['/images/papers/biology-nov-2020/page-1.png'],
      },
      {
        label: 'b',
        text: 'The images below show three different interactions between organisms.\n\n**Select** the type of interaction shown in each image.',
        marks: 3,
        widget: 'inline_dropdown_select',
        widgetItems: ['Hippos', 'Lion and zebra', 'Mosquito and person'],
        widgetOptions: ['Transpiration', 'Predation', 'Parasitism', 'Respiration', 'Competition'],
        ph: 'Hippos = Competition; Lion and zebra = Predation; Mosquito and person = Parasitism.',
        figImages: ['/images/papers/biology-nov-2020/page-2.png'],
      },
      {
        label: 'c',
        text: '**State** the meaning of the term *ecosystem*.',
        marks: 2,
        ph: 'Community of living organisms interacting with each other and their non-living environment.',
      },
      {
        label: 'd',
        text: 'Using scientific terminology, **explain** the process of natural selection.',
        marks: 4,
        ph: 'Variation exists; selective pressure; better-adapted individuals survive and reproduce; pass on advantageous traits; population changes over generations.',
      },
    ],
  },

  // ── Q2 — Homeostasis & Dialysis (11 marks, Crit A) ──────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis & Kidney Function',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 11,
    stem: 'The human body depends on transport processes to maintain homeostasis. Kidneys filter all of the body\'s blood about 300 times per day. If kidneys fail, dialysis is the process that serves the same function.',
    figImages: ['/images/papers/biology-nov-2020/page-3.png', '/images/papers/biology-nov-2020/page-4.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *homeostasis*.',
        marks: 1,
        ph: 'Maintenance of a stable internal environment in the body.',
      },
      {
        label: 'b',
        text: 'The process of dialysis depends on diffusion and osmosis. **State** the part of the cell that regulates these processes.',
        marks: 1,
        ph: 'Cell membrane (plasma membrane).',
      },
      {
        label: 'c',
        text: '**Explain** the processes of diffusion and osmosis.',
        marks: 3,
        ph: 'Diffusion: movement of molecules from high to low concentration (passive). Osmosis: movement of water through a semi-permeable membrane from low to high solute concentration.',
      },
      {
        label: 'd',
        text: 'In dialysis, the dialysis fluid is continuously removed. **Suggest** a reason for removing the dialysis fluid and **predict** what would happen if it is not removed.',
        marks: 4,
        ph: 'Reason: to maintain concentration gradient so waste products continue to diffuse out. Prediction: waste products would build up; diffusion would stop or reverse; patient would be harmed.',
      },
      {
        label: 'e',
        text: 'In the dialyzer, the blood passes through many fine tubes rather than one large tube. **Justify** why many fine tubes are used.',
        marks: 2,
        ph: 'Many fine tubes increase surface area; greater surface area → faster rate of diffusion → more efficient removal of waste products.',
      },
    ],
  },

  // ── Q3 — Daphnia Investigation Design (13 marks, Crit B) ─────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Daphnia Heart Rate Investigation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    marks: 13,
    stem: 'Daphnia are small invertebrates that live in water. Daphnia are interesting to use for investigations into heart rate because they are transparent, so you can see their heart beating. Some of the information collected from studying Daphnia can model how certain factors might influence human heart rate.',
    figImages: ['/images/papers/biology-nov-2020/page-8.png'],
    tasks: [
      {
        label: 'a',
        text: '**List** two characteristics of living organisms.',
        marks: 2,
        ph: 'Any two of: movement, respiration, sensitivity, growth, reproduction, excretion, nutrition (MRSGREN).',
      },
      {
        label: 'b',
        text: '*Elodea* is a plant found in the same habitat as *Daphnia*. **Identify** one feature of *Elodea* cells that would make them different from cells found in *Daphnia*.',
        marks: 1,
        ph: 'Cell wall / chloroplasts / large central vacuole (any one plant-cell-specific feature).',
      },
      {
        label: 'c',
        text: 'Sugar can affect heart rate in humans. **Suggest** a hypothesis for what would happen to the heart rate of a *Daphnia* if it were provided with different amounts of sugar in its water. Your answer should include a scientific explanation.',
        marks: 2,
        ph: 'If sugar concentration increases, Daphnia heart rate will increase, because higher glucose provides more energy for cellular respiration, increasing metabolic activity and heart rate.',
      },
      {
        label: 'd',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Sugar concentration in water',
          'Heart rate of Daphnia (bpm)',
          'Temperature of water',
          'Type/size of Daphnia used',
          'Volume of solution',
          'Time period of observation',
        ],
        ph: 'IV: sugar concentration. DV: heart rate. CV: temperature, type/size of Daphnia, volume of solution.',
      },
      {
        label: 'e',
        text: '**State** how many different amounts of sugar should be given to the *Daphnia* to study changes in heart rate and **justify** your answer.',
        marks: 2,
        ph: 'At least 4–5 different concentrations; to identify a trend/pattern and determine if there is a dose–response relationship.',
      },
      {
        label: 'f',
        text: '**State** how many trials should be repeated for each amount of sugar and **justify** your answer.',
        marks: 2,
        ph: 'At least 3 trials per concentration; repetition increases reliability; allows calculation of a mean and identification of anomalous results.',
      },
    ],
  },

  // ── Q4 — Temperature & Daphnia Heart Rate Data (16 marks, Crit C) ────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Temperature & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 16,
    stem: 'A student planned the method below to study the effect of temperature on heart rate. Students counted the heartbeats of a Daphnia for 20 seconds at different temperatures.',
    figImages: ['/images/papers/biology-nov-2020/page-11.png'],
    tasks: [
      {
        label: 'a',
        text: 'Students counted the heartbeats of a *Daphnia* for 20 seconds. **Calculate** the *Daphnia\'s* heart rate in beats per minute (bpm). Show your working and add your answers to the table.',
        marks: 3,
        ph: 'Multiply heartbeats in 20 s by 3 to convert to bpm. Show calculation clearly for each temperature.',
      },
      {
        label: 'b',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Weakness 1: only one Daphnia used per temperature → not representative; should use multiple individuals. Weakness 2: only 20 seconds of counting → may introduce error; count for longer period.',
        figImages: ['/images/papers/biology-nov-2020/page-11.png', '/images/papers/biology-nov-2020/page-12.png'],
      },
      {
        label: 'c',
        text: '**Suggest** a different independent variable that could be used to extend this investigation.',
        marks: 1,
        ph: 'Sugar/caffeine/salt concentration; light intensity; pH of water.',
      },
      {
        label: 'd',
        text: 'At the start of the investigation, the student predicted that the *Daphnia\'s* heart rate would increase as temperature increased. **Discuss** this prediction using scientific reasoning.',
        marks: 2,
        ph: 'Higher temperature increases enzyme activity and metabolic rate; more oxygen needed → heart beats faster. Valid prediction up to an optimum temperature; above optimum enzymes may denature.',
      },
      {
        label: 'e',
        text: 'Based on the data presented in the table in part (a), **outline** whether or not the prediction was valid. Consider the method and the reliability of the data.',
        marks: 2,
        ph: 'Data supports prediction: heart rate increases with temperature. However, only 3 temperatures measured; no replication at each temperature → limited reliability.',
      },
      {
        label: 'f',
        text: 'The students were working with a school in another part of the world and wanted to compare this data to their own results. The graph of raw data and transformed data is presented. The graph is incomplete — **label** the x and y axes.',
        marks: 2,
        ph: 'x-axis: Temperature / °C; y-axis: Heart rate / bpm.',
        figImages: ['/images/papers/biology-nov-2020/page-14.png'],
      },
      {
        label: 'g',
        text: 'The table of transformed data is incomplete. Use information from the graph to **determine** the missing values and add them to the transformed data table.',
        marks: 2,
        ph: 'Read values from graph at 10 °C and 20 °C; record to appropriate precision.',
        figImages: ['/images/papers/biology-nov-2020/page-15.png'],
      },
    ],
  },

  // ── Q5 — Caffeine Investigation Design (17 marks, Crit B) ─────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Caffeine & Heart Rate Investigation Design',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 17,
    stem: 'Caffeine is a stimulant which is found in coffee and cola drinks. The health and fitness club in a school wants to collect some scientific evidence to support their argument that caffeinated drinks are bad for health. They want to collect some scientific evidence to support their argument. You are provided with a range of solutions of different caffeine concentrations (0–0.5 g/dm³ caffeine concentration) to model the effect of caffeinated drinks.',
    figImages: ['/images/papers/biology-nov-2020/page-15.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the influence of caffeine on human heart rate. Your answer should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- ethical considerations.',
        marks: 17,
        ph: 'Hypothesis: If caffeine concentration increases, heart rate increases. IV: caffeine concentration. DV: heart rate (bpm). CV: age/health of participants, time of measurement. Method: measure resting heart rate; consume caffeine solution; measure heart rate at intervals. Ethics: informed consent; exclude participants with heart conditions.',
      },
    ],
  },

  // ── Q6 — Energy Drink Data Analysis (7 marks, Crit C) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Caffeine & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 7,
    stem: 'After conducting their investigation, a student did some further research into caffeine in energy drinks. They studied the energy drink JHIVD, which contains 50 mg caffeine per 100 cm³.',
    figImages: ['/images/papers/biology-nov-2020/page-16.png', '/images/papers/biology-nov-2020/page-17.png'],
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows how caffeine concentration affects heart rate. **Add** a line of best fit to the graph and use this to **predict** the heart rate after drinking 100 cm³ of JHIVD.',
        marks: 2,
        ph: 'Line of best fit drawn through scatter points. At 50 mg/100 cm³ caffeine → read off predicted heart rate (approximately 85–90 bpm).',
        figImages: ['/images/papers/biology-nov-2020/page-17.png', '/images/papers/biology-nov-2020/page-18.png'],
      },
      {
        label: 'b',
        text: 'The student wanted to test their prediction from part (a). After drinking JHIVD, they measured a heart rate of 112 bpm. **Calculate** the percentage increase between the predicted heart rate and the measured value. Give your answer to three significant figures.',
        marks: 3,
        ph: '% increase = (112 − predicted) / predicted × 100. Show working. Answer to 3 s.f.',
        figImages: ['/images/papers/biology-nov-2020/page-19.png'],
      },
      {
        label: 'c',
        text: 'Using nutritional information from above, **suggest** why the actual heart rate was different from the predicted value.',
        marks: 2,
        ph: 'JHIVD contains other stimulants (e.g. vitamin B12, taurine) in addition to caffeine; combined effect is greater than caffeine alone; graph only modelled caffeine concentration.',
        figImages: ['/images/papers/biology-nov-2020/page-16.png'],
      },
    ],
  },

  // ── Q7 — Carbon Cycle & Climate Change (8 marks, Crit A/D) ───────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 8,
    stem: 'Humans have been interacting with and changing their environment for thousands of years. We have changed our environment to suit our needs, but these changes are causing the environment to respond in ways we have yet to fully understand. The diagram shows the natural processes that form the carbon cycle.',
    figImages: ['/images/papers/biology-nov-2020/page-22.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the processes that add CO₂ to the atmosphere and remove CO₂ from the atmosphere by dragging each process into the correct column.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Respiration', 'Photosynthesis', 'Tropism', 'Evaporation', 'Transpiration'],
        widgetOptions: ['Adds CO₂ to atmosphere', 'Removes CO₂ from atmosphere'],
        ph: 'Adds CO₂: Respiration. Removes CO₂: Photosynthesis.',
        figImages: ['/images/papers/biology-nov-2020/page-20.png'],
      },
      {
        label: 'b',
        text: 'The amount of carbon in the world is unchanging. The carbon cycle shows the flow of carbon from one compound to another. There have been many changes to the carbon cycle in the last 150 years.\n\n**State** two human actions that have caused the imbalance in the carbon cycle and **outline** a consequence of each of these actions.',
        marks: 4,
        ph: 'Action 1: burning fossil fuels → releases CO₂ → increases atmospheric CO₂ → greenhouse effect. Action 2: deforestation → fewer trees to absorb CO₂ → CO₂ levels rise → global warming.',
        figImages: ['/images/papers/biology-nov-2020/page-23.png'],
      },
      {
        label: 'c',
        text: 'One of the consequences of increased carbon in the atmosphere is an increase in the temperature of the Earth\'s surface. **Outline** a biological consequence of an increase in the temperature of the Earth\'s surface.',
        marks: 2,
        ph: 'Coral bleaching due to ocean warming; species migration or extinction; disruption of seasonal timing (phenology); increased spread of disease vectors.',
      },
    ],
  },

  // ── Q8 — Climate Change Solutions (17 marks, Crit D) ─────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Climate Change Solutions',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Human Influences'],
    marks: 17,
    stem: 'There have been many solutions suggested to reduce the cause of climate change. Four of the solutions are described in the interactive infographic: Geoengineering, Reducing population growth, Dietary choices, Habitat restoration.',
    figImages: ['/images/papers/biology-nov-2020/page-24.png', '/images/papers/biology-nov-2020/page-25.png'],
    tasks: [
      {
        label: '',
        text: 'Using information from the interactive infographic and your wider MYP studies, **discuss** and **evaluate** two possible solutions to reduce the impact of global climate change. In your answer you should include:\n- a description of two actions humans can take to reduce the impact of global climate change\n- an explanation of the science behind each human action\n- advantages of your two chosen climate change solutions\n- disadvantages of your two chosen climate change solutions\n- a concluding appraisal giving your opinion of the single best climate change solution with justification.',
        marks: 17,
        ph: 'Two solutions described with science; advantages and disadvantages for each; balanced appraisal with justified conclusion.',
      },
    ],
  },
]
