export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  figImages?: string[]
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  topicCanonical?: import('@/data/taxonomy/topics').Topic
  topicGroup?: import('@/data/taxonomy/topics').TopicGroup
  marks: number
  stem: string
  figImages?: string[]
  tasks: Task[]
}

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
  id: 'chemistry-nov-2022',
  subject: 'Chemistry',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Copper / metals / history (9m, Crit A) ───────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Atomic Structure',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 9,
    stem: 'Copper is one of the earliest metals used by humans. The period of time when copper was first used is called the Copper Age. Copper and its alloys, such as bronze, have been used throughout history to make sculptures and art objects.',
    figImages: ['/images/papers/chemistry-nov-2022/page-02.png', '/images/papers/chemistry-nov-2022/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the area in the periodic table where copper is found.',
        marks: 1,
        ph: 'Copper is a transition metal',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Transition metals'],
      },
      {
        label: 'b',
        text: '**State** which period copper is in: Period ___',
        marks: 1,
        ph: 'Period 4',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Outline** the meaning of the term isotope.',
        marks: 2,
        ph: 'Same atomic number, different mass number (different neutrons)',
      },
      {
        label: 'd',
        text: '**Identify** the number of neutrons and the number of electrons in the isotope Cu-65.',
        marks: 2,
        ph: 'Neutrons = 36; Electrons = 29',
      },
      {
        label: 'e',
        text: '**Select** the term used to describe bronze.',
        marks: 1,
        ph: 'Bronze is an alloy (mixture of metals)',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Element', 'Molecule'],
      },
      {
        label: 'f',
        text: '**Outline** why sculptures are made from bronze rather than pure copper, using data from part (e).',
        marks: 2,
        ph: 'Greater corrosion resistance / harder / malleable — links to table data',
      },
    ],
  },

  // ─── Q2: Reactive metals in paint / iron chemistry (17m, Crit A) ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding & Chemical Reactions',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Some paints used by artists contain reactive metals. When applied to a surface the metals in the paint will naturally tarnish over time. Iron reacts with oxygen in air to produce a red-brown colour. Iron can also react with chlorine to form iron(III) chloride (FeCl₃).',
    figImages: ['/images/papers/chemistry-nov-2022/page-04.png', '/images/papers/chemistry-nov-2022/page-05.png', '/images/papers/chemistry-nov-2022/page-06.png', '/images/papers/chemistry-nov-2022/page-07.png', '/images/papers/chemistry-nov-2022/page-08.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the reaction when iron reacts with oxygen.',
        marks: 1,
        ph: 'Iron gains oxygen — oxidation',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Displacement', 'Neutralization', 'Oxidation'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (electron dot diagram) of an oxygen molecule.',
        marks: 1,
        ph: 'O₂ has a double bond: O=O with two lone pairs on each O',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: ['/images/papers/chemistry-nov-2022/page-05.png'],
      },
      {
        label: 'c',
        text: '**Select** options to balance the chemical equation for the reaction between iron and oxygen: ___ Fe + ___ O₂ → ___ Fe₂O₃',
        marks: 3,
        ph: '4 Fe + 3 O₂ → 2 Fe₂O₃',
        widget: 'inline_dropdown_select',
        widgetItems: ['Fe coefficient', 'O₂ coefficient', 'Fe₂O₃ coefficient'],
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'd',
        text: '**Calculate** how many moles of oxygen react with 0.600 g of iron.',
        marks: 4,
        ph: 'n(Fe)=0.600/56=0.0107 mol; ratio 4:3 so n(O₂)=0.00803 mol',
      },
      {
        label: 'e',
        text: '**Identify** each substance using the information in the table below.\n\n| State at room temperature | Soluble in water | Conductivity at room temperature | Substance |\n|---|---|---|---|\n| Gas | Slightly | No | ___ |\n| Solid | No | Yes | ___ |\n| Solid | Yes | No | ___ |',
        marks: 2,
        ph: 'Gas/slightly/No = Chlorine; Solid/No/Yes = Iron; Solid/Yes/No = FeCl₃',
        widget: 'inline_dropdown_select',
        widgetItems: ['Gas / slightly soluble / not conductive', 'Solid / insoluble / conductive', 'Solid / soluble / not conductive'],
        widgetOptions: ['Chlorine', 'Iron', 'Iron(III) chloride'],
      },
      {
        label: 'f',
        text: '**State** the electron configuration of chlorine: ___',
        marks: 1,
        ph: '2.8.7',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Explain** how iron and chlorine bond together to form iron(III) chloride.',
        marks: 4,
        ph: 'Fe loses 3e⁻ → Fe³⁺; Cl gains 1e⁻ → Cl⁻; ionic bond = electrostatic attraction',
      },
      {
        label: 'h',
        text: '**Select** the meaning of the hazard symbol shown on a bottle of iron(III) chloride.',
        marks: 1,
        ph: 'Corrosive — damages skin and materials',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Explosive', 'Flammable', 'Toxic'],
        figImages: ['/images/papers/chemistry-nov-2022/page-08.png'],
      },
    ],
  },

  // ─── Q3: Acid rain / marble erosion investigation (26m, Crit B/C) ─────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Acids',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 26,
    stem: 'Pollution is causing damage to the environment. Sulfur dioxide from burning fossil fuels dissolves in water to produce sulfuric acid, making rain acidic. Acid rain affects plant life, water sources and building materials, including marble sculptures (calcium carbonate). A student investigated the effects of three acidic solutions (vinegar, cola, lemon juice) on marble chips over seven days.\n\nTable: Change in mass of marble chips / g\n\n| Acid | | Trial 1 | Trial 2 | Trial 3 | Average |\n|---|---|---|---|---|---|\n| Vinegar | Initial mass | 33.73 | 41.03 | 39.11 | – |\n| | After one week | 30.59 | 38.24 | 36.24 | – |\n| | Change in mass | 3.14 | 2.79 | 2.87 | __ |\n| Cola | Change in mass | 0.06 | 0.17 | 0.04 | 0.09 |\n| Lemon juice | Change in mass | 1.14 | 1.35 | 2.16 | 1.55 |\n\nTable: Change in pH\n\n| Acid | | Trial 1 | Trial 2 | Trial 3 | Average |\n|---|---|---|---|---|---|\n| Vinegar | Initial pH | 3.11 | 3.12 | 3.16 | – |\n| | pH after one week | 5.63 | 5.62 | 5.62 | – |\n| | Change in pH | 2.52 | 2.50 | 2.46 | 2.49 |\n| Cola | Change in pH | 2.61 | 2.68 | 2.66 | 2.65 |\n| Lemon juice | Change in pH | 3.41 | 3.52 | 3.53 | 3.49 |',
    figImages: ['/images/papers/chemistry-nov-2022/page-09.png', '/images/papers/chemistry-nov-2022/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the average change in mass after the marble chips were exposed to vinegar for one week: ___ g',
        marks: 2,
        ph: '(3.14+2.79+2.87)/3 = 2.93 g',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Evaluate** which method produced the most valid data: a pH probe (numerical data to 3 sig figs) or universal indicator paper (colour range).',
        marks: 3,
        ph: 'pH probe gives quantitative/numerical data; indicator gives qualitative/colour range → pH probe more valid',
      },
      {
        label: 'c',
        text: '**Identify** which acidic solution had the largest decrease in acidity. **Justify** your answer using the pH data.',
        marks: 2,
        ph: 'Lemon juice; largest average increase in pH (3.49)',
        figImages: ['/images/papers/chemistry-nov-2022/page-12.png'],
      },
      {
        label: 'd',
        text: '**Design** a method to investigate the effect of 0.1 mol·dm⁻³ sulfuric acid on six different sizes of marble chips. In your answer include:\n\n• the independent, dependent and two control variables\n• a list of equipment needed\n• a description of how you will collect sufficient data\n• a description of the method\n• an outline of how you will make the method safe',
        marks: 17,
        ph: 'Crit B: IV = marble chip size; DV = mass change or pH; CVs stated; equipment listed; ≥5 chip sizes, ≥3 trials; step-by-step method; safety (acid hazard)',
        figImages: ['/images/papers/chemistry-nov-2022/page-12.png', '/images/papers/chemistry-nov-2022/page-13.png'],
      },
      {
        label: 'e',
        text: '**Suggest** a research question for an investigation into how the thickness of a protective coating affects the erosion of marble sculptures. Your research question should clearly state an independent and a dependent variable.',
        marks: 2,
        ph: 'How does thickness of coating (IV) affect change in mass of marble (DV)?',
      },
    ],
  },

  // ─── Q4: Home-made CO₂ fire extinguisher investigation (17m, Crit B/C) ──────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Chemical Reactions',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Environmental pollution is causing changes to our climate. Climate change is a key factor in the increasing risk of wildfires. An MYP student is investigating the effectiveness of a home-made fire extinguisher that produces carbon dioxide to extinguish flames.\n\nMethod:\n1. Measure 100 cm³ of vinegar and place it in a teapot.\n2. Measure 1 spoon of baking soda (sodium bicarbonate, NaHCO₃).\n3. Add the baking soda to the teapot.\n4. Pour the carbon dioxide produced over lit candles without spilling any liquid inside the teapot.\n5. Record how many lit candles can be extinguished with the carbon dioxide produced.\n6. Repeat steps 1 to 5 using 2 spoons, 3 spoons, 4 spoons and 5 spoons of baking soda.',
    figImages: ['/images/papers/chemistry-nov-2022/page-13.png', '/images/papers/chemistry-nov-2022/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, the dependent variable and one control variable in the student\'s method.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable: ___',
        marks: 3,
        ph: 'IV = teaspoons/mass of baking soda; DV = candles extinguished; CV = volume of vinegar',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\n\nIf…\n\nthen…\n\nbecause…',
        marks: 3,
        ph: 'If mass of baking soda increases, then more candles extinguished, because more CO₂ produced',
      },
      {
        label: 'c',
        text: '**Identify** two limitations in the student\'s method.',
        marks: 2,
        ph: 'Mass of baking soda not measured; no lid replacement; distance from spout not fixed; only one trial',
      },
      {
        label: 'd',
        text: '**Suggest** a different independent variable to extend the student\'s investigation.',
        marks: 1,
        ph: 'Concentration of acid / type of acid / volume of acid / temperature of solution',
      },
      {
        label: 'e',
        text: '**Organize** and **present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two-column table: Mass of baking soda / g | Number of candles extinguished; data in order',
        figImages: ['/images/papers/chemistry-nov-2022/page-16.png'],
      },
      {
        label: 'f',
        text: '**Plot** the data from part (e) in a graph and add a line of best fit. Add axis labels.',
        marks: 5,
        ph: 'x = mass baking soda (g), y = candles extinguished; even y scale from 0; all points plotted; line of best fit',
      },
    ],
  },

  // ─── Q5: Fire extinguisher types comparison (7m, Crit C/A) ────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Chemical Reactions',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 7,
    stem: 'There are many types of modern fire extinguishers. The table below gives data about three extinguishers that all use dry powder:\n\n| | Handheld | Hanging | Ball |\n|---|---|---|---|\n| Weight / kg | 3.2 | 5.6 | 1.3 |\n| Area extinguished / m² | 2 | 3 | 35 |\n| Expiry time | Periodic refill | 5 yr periodic maintenance | 5 yr |\n| Direction | One point at a time | Vertically downward | Uniformly all directions |\n| Operation | Manual by trained user | Automatic by sensors | Drop or throw into fire |',
    figImages: ['/images/papers/chemistry-nov-2022/page-17.png', '/images/papers/chemistry-nov-2022/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the validity of the following research statement, using data from the table to support your answer:\n\n*"The heavier the fire extinguisher, the larger the area that can be extinguished."*',
        marks: 3,
        ph: 'Hanging is heaviest (5.6 kg) and covers 3 m²; ball covers 35 m² but only 1.3 kg → statement not valid',
      },
      {
        label: 'b',
        text: '**Identify** which extinguisher would be best for use on a forest fire. **Justify** your answer using data from the table.',
        marks: 3,
        ph: 'Fire extinguisher ball: can be thrown/dropped; spreads uniformly; covers 35 m²; lightweight',
      },
      {
        label: 'c',
        text: 'During forest fires, trees burn in a combustion reaction. Combustion reactions are chemical reactions that produce heat.\n\n**Select** the type of reaction in which heat is produced.',
        marks: 1,
        ph: 'Combustion releases heat — exothermic',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Electrolysis', 'Endothermic', 'Exothermic'],
      },
    ],
  },

  // ─── Q6: Sleep quality / sleep sprays / caffeine (15m, Crit A/D) ──────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Organic Chemistry & Societal Impact',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 15,
    stem: 'High levels of anxiety about school work may cause disruption to sleep. The wellness industry has developed sleep sprays containing plant extracts (e.g. lavender, basil, jasmine) that are sprayed onto a pillow or body before going to sleep to reduce sleep interruption. Scientists have also identified adenosine (a molecule that signals to the body that it needs sleep) and caffeine (which tricks the brain into believing there are lower levels of adenosine).',
    figImages: ['/images/papers/chemistry-nov-2022/page-19.png', '/images/papers/chemistry-nov-2022/page-20.png', '/images/papers/chemistry-nov-2022/page-21.png', '/images/papers/chemistry-nov-2022/page-22.png'],
    tasks: [
      {
        label: 'a',
        text: '**Identify** the functional groups that are circled in adenosine and caffeine.',
        marks: 2,
        ph: 'Adenosine: OH = Alcohol; Caffeine: C=C in ring = Alkene',
        widget: 'inline_dropdown_select',
        widgetItems: ['Adenosine functional group', 'Caffeine functional group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
        figImages: ['/images/papers/chemistry-nov-2022/page-20.png'],
      },
      {
        label: 'b',
        text: 'A hotel is investigating which sleep spray should be provided for long-distance bus drivers to improve their sleep while staying at the hotel. Using the information about the four sprays and your wider MYP studies, **discuss** and **evaluate** which sleep spray the hotel company should select.\n\nIn your answer include:\n\n• an outline of why enough sleep is important for long-distance bus drivers\n• a comparison of the impact of each spray on the quality of sleep\n• a discussion of the economic considerations of using different sleep sprays\n• an evaluation with justification of your choice of spray for the hotel to choose',
        marks: 13,
        ph: 'Crit D: safety for drivers; compare sleep quality from graphs; compare cost/lifespan; justified final choice',
      },
    ],
  },

  // ─── Q7: Frankincense vs lavender for sleep spray industry (9m, Crit D) ────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental & Social Impact of Chemistry',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Ingredients of sleep sprays often include lavender and frankincense extracts. Frankincense has been produced traditionally by families harvesting resin from boswellia trees by hand for centuries, while lavender is grown as bushes and harvested by machine in large agricultural operations.\n\nTable: Production comparison\n\n| | Frankincense | Lavender |\n|---|---|---|\n| Source | Boswellia tree (endangered species) | Lavender bush, easy to replant/harvest |\n| Growing conditions | Dry climate, rocky landscape, low water | Temperate climate, high water, used for food too |\n| Labour | Farmers in small villages | Large agricultural areas |\n| Social | Supports traditional farmers; low transport cost | Large corporations; highly industrialised |\n| Cost per 15 ml / $ | 90.67 | 30.67 |\n| Mass of primary product per 15 ml extract / kg | 0.25 | 1.36 |\n| Production per year | 1–2 trees, avg 261 g/tree (family) | 3264 kg/acre (commercial) |',
    figImages: ['/images/papers/chemistry-nov-2022/page-23.png', '/images/papers/chemistry-nov-2022/page-24.png'],
    tasks: [
      {
        label: '',
        text: 'Using the information provided, **discuss** which plant extract would be the best for the sleep spray industry to use.\n\nIn your answer consider:\n\n• the social impact of each extract\n• the environmental impact of each extract\n• the final choice of extract with justification',
        marks: 9,
        ph: 'Crit D: compare social (traditional vs industrial labour); environmental (endangered tree vs replantable); justified choice',
      },
    ],
  },
]
