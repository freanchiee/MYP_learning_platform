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
  id: 'chemistry-nov-2022-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Silver / metals / ancient coinage (9m, Crit A) ──────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Atomic Structure',
    marks: 9,
    stem: 'Silver is one of the earliest metals used by humans. The period of time when silver coins first circulated is called the Silver Age. Silver and its alloys, such as sterling silver, have been used throughout history to make jewellery and decorative art objects.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the area in the periodic table where silver is found.',
        marks: 1,
        ph: 'Silver is a transition metal',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Transition metals'],
      },
      {
        label: 'b',
        text: '**State** which period silver is in: Period ___',
        marks: 1,
        ph: 'Period 5',
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
        text: '**Identify** the number of neutrons and the number of electrons in the isotope Ag-107.',
        marks: 2,
        ph: 'Neutrons = 60; Electrons = 47',
      },
      {
        label: 'e',
        text: '**Select** the term used to describe sterling silver.',
        marks: 1,
        ph: 'Sterling silver is an alloy (mixture of metals)',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Element', 'Molecule'],
      },
      {
        label: 'f',
        text: '**Outline** why jewellery is made from sterling silver rather than pure silver, using data from part (e).',
        marks: 2,
        ph: 'Harder / more durable / greater corrosion resistance — links to table data',
      },
    ],
  },

  // ─── Q2: Magnesium oxidation / MgCl₂ bonding (17m, Crit A) ──────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding & Chemical Reactions',
    marks: 17,
    stem: 'Some paints used by artists contain reactive metals. Magnesium powder is sometimes added to metallic paints to give a bright, silvery sheen. Magnesium reacts with oxygen in air, giving off a bright white light. Magnesium can also react with chlorine to form magnesium chloride (MgCl₂).',
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the reaction when magnesium reacts with oxygen.',
        marks: 1,
        ph: 'Magnesium gains oxygen — oxidation',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Displacement', 'Neutralization', 'Oxidation'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (electron dot diagram) of a chlorine molecule (Cl₂).',
        marks: 1,
        ph: 'Cl₂ has a single bond: :Cl–Cl: with three lone pairs on each Cl',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: '**Select** options to balance the chemical equation for the reaction between magnesium and oxygen: ___ Mg + ___ O₂ → ___ MgO',
        marks: 3,
        ph: '2 Mg + 1 O₂ → 2 MgO',
        widget: 'inline_dropdown_select',
        widgetItems: ['Mg coefficient', 'O₂ coefficient', 'MgO coefficient'],
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'd',
        text: '**Calculate** how many moles of oxygen react with 0.486 g of magnesium.',
        marks: 4,
        ph: 'n(Mg)=0.486/24.3=0.0200 mol; ratio 2:1 so n(O₂)=0.0100 mol',
      },
      {
        label: 'e',
        text: '**Identify** each substance using the information in the table below.\n\n| State at room temperature | Soluble in water | Conductivity at room temperature | Substance |\n|---|---|---|---|\n| Gas | Slightly | No | ___ |\n| Solid | No | Yes | ___ |\n| Solid | Yes | No | ___ |',
        marks: 2,
        ph: 'Gas/slightly/No = Chlorine; Solid/No/Yes = Magnesium; Solid/Yes/No = MgCl₂',
        widget: 'inline_dropdown_select',
        widgetItems: ['Gas / slightly soluble / not conductive', 'Solid / insoluble / conductive', 'Solid / soluble / not conductive'],
        widgetOptions: ['Chlorine', 'Magnesium', 'Magnesium chloride'],
      },
      {
        label: 'f',
        text: '**State** the electron configuration of nitrogen: ___',
        marks: 1,
        ph: '2.5',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Explain** how magnesium and chlorine bond together to form magnesium chloride.',
        marks: 4,
        ph: 'Mg loses 2e⁻ → Mg²⁺; 2×Cl gains 1e⁻ → Cl⁻; ionic bond = electrostatic attraction',
      },
      {
        label: 'h',
        text: '**Select** the meaning of the hazard symbol shown on a bottle of magnesium chloride solution.',
        marks: 1,
        ph: 'Irritant — causes skin/eye irritation',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Explosive', 'Flammable', 'Irritant'],
      },
    ],
  },

  // ─── Q3: Acid rain / marble erosion (26m, Crit B/C) ─────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Acids',
    marks: 26,
    stem: 'Pollution is causing damage to the environment. Sulfur dioxide from burning fossil fuels dissolves in water to produce sulfuric acid, making rain acidic. Acid rain affects plant life, water sources and building materials, including marble sculptures (calcium carbonate). A student investigated the effects of three acidic solutions (vinegar, cola, lemon juice) on marble chips over seven days.\n\nTable: Change in mass of marble chips / g\n\n| Acid | | Trial 1 | Trial 2 | Trial 3 | Average |\n|---|---|---|---|---|---|\n| Vinegar | Change in mass | 2.87 | 3.01 | 2.94 | __ |\n| Cola | Change in mass | 0.09 | 0.15 | 0.08 | 0.11 |\n| Lemon juice | Change in mass | 1.28 | 1.45 | 1.13 | 1.29 |\n\nTable: Change in pH\n\n| Acid | Average change in pH |\n|---|---|\n| Vinegar | 2.61 |\n| Cola | 2.73 |\n| Lemon juice | 3.52 |',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the average change in mass after the marble chips were exposed to vinegar for one week: ___ g',
        marks: 2,
        ph: '(2.87+3.01+2.94)/3 = 2.94 g',
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
        ph: 'Lemon juice; largest average increase in pH (3.52)',
      },
      {
        label: 'd',
        text: '**Design** a method to investigate the effect of 0.1 mol·dm⁻³ sulfuric acid on six different sizes of marble chips. In your answer include:\n\n• the independent, dependent and two control variables\n• a list of equipment needed\n• a description of how you will collect sufficient data\n• a description of the method\n• an outline of how you will make the method safe',
        marks: 17,
        ph: 'Crit B: IV = marble chip size; DV = mass change or pH; CVs stated; equipment listed; ≥5 chip sizes, ≥3 trials; step-by-step method; safety (acid hazard)',
      },
      {
        label: 'e',
        text: '**Suggest** a research question for an investigation into how the thickness of a protective paint layer affects the erosion of marble sculptures. Your research question should clearly state an independent and a dependent variable.',
        marks: 2,
        ph: 'How does thickness of paint layer (IV) affect change in mass of marble (DV)?',
      },
    ],
  },

  // ─── Q4: Balloon CO₂ inflation investigation (17m, Crit B/C) ─────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Chemical Reactions',
    marks: 17,
    stem: 'Environmental pollution is causing changes to our climate. A student is investigating the effectiveness of a home-made CO₂ generator that produces carbon dioxide to inflate a balloon.\n\nMethod:\n1. Measure 50 cm³ of citric acid solution (0.1 mol·dm⁻³) and place it in a 500 mL plastic bottle.\n2. Measure 1 spoon of baking soda (sodium bicarbonate, NaHCO₃) into a balloon.\n3. Attach the balloon over the mouth of the bottle.\n4. Tip the baking soda from the balloon into the acid solution.\n5. Record the maximum diameter of the balloon (in cm) after 1 minute.\n6. Repeat steps 1 to 5 using 2 spoons, 3 spoons, 4 spoons and 5 spoons of baking soda.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, the dependent variable and one control variable in the student\'s method.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable: ___',
        marks: 3,
        ph: 'IV = teaspoons of baking soda; DV = diameter of balloon; CV = volume of citric acid',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\n\nIf…\n\nthen…\n\nbecause…',
        marks: 3,
        ph: 'If mass of baking soda increases, then balloon diameter increases, because more CO₂ produced',
      },
      {
        label: 'c',
        text: '**Identify** two limitations in the student\'s method.',
        marks: 2,
        ph: 'Mass of baking soda not weighed (spoons vary); only one trial per amount; diameter hard to measure precisely',
      },
      {
        label: 'd',
        text: '**Suggest** a different independent variable to extend the student\'s investigation.',
        marks: 1,
        ph: 'Concentration of citric acid / type of acid / volume of acid / temperature',
      },
      {
        label: 'e',
        text: '**Organize** and **present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two-column table: Mass of baking soda / g | Balloon diameter / cm; data in order',
      },
      {
        label: 'f',
        text: '**Plot** the data from part (e) in a graph and add a line of best fit. Add axis labels.',
        marks: 5,
        ph: 'x = mass baking soda (g), y = balloon diameter (cm); even y scale from 0; all points; line of best fit',
      },
    ],
  },

  // ─── Q5: Smoke detector types comparison (7m, Crit C/A) ─────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Chemical Reactions',
    marks: 7,
    stem: 'There are many types of modern smoke detectors used in buildings. The table below gives data about three types:\n\n| | Ionisation detector | Optical detector | Heat detector |\n|---|---|---|---|\n| Weight / g | 120 | 185 | 145 |\n| Detection area / m² | 60 | 45 | 25 |\n| Battery life / years | 1 | 2 | 5 |\n| Best for | Fast-flaming fires | Slow-smouldering fires | High-heat areas |\n| False alarm risk | High | Low | Very low |',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the validity of the following research statement, using data from the table to support your answer:\n\n*"The heavier the smoke detector, the larger the detection area."*',
        marks: 3,
        ph: 'Optical is heaviest (185g) but covers 45 m²; ionisation is lightest (120g) but covers 60 m² → statement not valid',
      },
      {
        label: 'b',
        text: '**Identify** which smoke detector would be best for use in a hotel kitchen. **Justify** your answer using data from the table.',
        marks: 3,
        ph: 'Heat detector: very low false alarm risk; suitable for high-heat areas; 5-year battery',
      },
      {
        label: 'c',
        text: 'When a fire starts, wood burns in a combustion reaction. Combustion reactions are chemical reactions that produce heat.\n\n**Select** the type of reaction in which heat is produced.',
        marks: 1,
        ph: 'Combustion releases heat — exothermic',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Electrolysis', 'Endothermic', 'Exothermic'],
      },
    ],
  },

  // ─── Q6: Sleep / melatonin / ibuprofen organic chemistry (15m, Crit A/D) ─
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Organic Chemistry & Societal Impact',
    marks: 15,
    stem: 'High levels of anxiety about school work may cause disruption to sleep. The wellness industry has developed sleep sprays that contain plant extracts. Scientists have also identified melatonin (the hormone that promotes sleep) and found that many over-the-counter medicines contain ester or carboxylic acid functional groups that can affect sleep quality.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the functional groups that are circled in the two molecules shown.',
        marks: 2,
        ph: 'Molecule A: C-O-C = Ester; Molecule B: COOH = Carboxylic acid',
        widget: 'inline_dropdown_select',
        widgetItems: ['Molecule A functional group', 'Molecule B functional group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
      {
        label: 'b',
        text: 'A hotel is investigating which sleep spray should be provided for long-distance truck drivers to improve their sleep while staying at the hotel. Using the information about the four sprays and your wider MYP studies, **discuss** and **evaluate** which sleep spray the hotel company should select.\n\nIn your answer include:\n\n• an outline of why enough sleep is important for long-distance truck drivers\n• a comparison of the impact of each spray on the quality of sleep\n• a discussion of the economic considerations of using different sleep sprays\n• an evaluation with justification of your choice of spray for the hotel to choose',
        marks: 13,
        ph: 'Crit D: safety for drivers; compare sleep quality from graphs; compare cost/lifespan; justified final choice',
      },
    ],
  },

  // ─── Q7: Peppermint oil vs chamomile oil for sleep spray (9m, Crit D) ────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental & Social Impact of Chemistry',
    marks: 9,
    stem: 'Ingredients of sleep sprays often include peppermint and chamomile extracts. Peppermint has been harvested traditionally by small farming families for centuries, while chamomile is now grown intensively in large commercial operations.\n\nTable: Production comparison\n\n| | Peppermint | Chamomile |\n|---|---|---|\n| Source | Peppermint plant, small family farms | Chamomile flower, large commercial farms |\n| Growing conditions | Temperate climate, moderate water | Warm climate, high water, pesticides used |\n| Labour | Small family farms in rural communities | Large-scale agricultural workers |\n| Social | Supports family income; preserves tradition | Provides employment; lower product cost |\n| Cost per 15 ml / $ | 75.00 | 28.50 |\n| Mass of plant per 15 ml extract / kg | 0.35 | 1.20 |\n| Yield per hectare / kg | 1500 | 4200 |',
    tasks: [
      {
        label: '',
        text: 'Using the information provided, **discuss** which plant extract would be the best for the sleep spray industry to use.\n\nIn your answer consider:\n\n• the social impact of each extract\n• the environmental impact of each extract\n• the final choice of extract with justification',
        marks: 9,
        ph: 'Crit D: compare social (family farms vs commercial); environmental (water use, pesticides); justified choice',
      },
    ],
  },
]
