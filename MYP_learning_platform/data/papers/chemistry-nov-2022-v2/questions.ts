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
  id: 'chemistry-nov-2022-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Nickel / metals / catalytic converters (9m, Crit A) ─────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Atomic Structure',
    marks: 9,
    stem: 'Nickel is a metal that has been used by humans for thousands of years. Today nickel and its alloys, such as nichrome, are used in catalytic converters in cars and in electrical heating elements because of their heat-resistant and corrosion-resistant properties.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the area in the periodic table where nickel is found.',
        marks: 1,
        ph: 'Nickel is a transition metal',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Transition metals'],
      },
      {
        label: 'b',
        text: '**State** which period nickel is in: Period ___',
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
        text: '**Identify** the number of neutrons and the number of electrons in the isotope Ni-60.',
        marks: 2,
        ph: 'Neutrons = 32; Electrons = 28',
      },
      {
        label: 'e',
        text: '**Select** the term used to describe nichrome.',
        marks: 1,
        ph: 'Nichrome is an alloy (mixture of nickel and chromium)',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Element', 'Molecule'],
      },
      {
        label: 'f',
        text: '**Outline** why catalytic converters are made from nichrome rather than pure nickel, using data from part (e).',
        marks: 2,
        ph: 'Higher melting point / greater corrosion resistance / harder — links to table data',
      },
    ],
  },

  // ─── Q2: Aluminium oxidation / AlCl₃ bonding (17m, Crit A) ──────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding & Chemical Reactions',
    marks: 17,
    stem: 'Some paints used by artists contain reactive metals. Aluminium powder is added to metallic paints to give a reflective silver finish. Aluminium reacts with oxygen in air to form a tough oxide layer. Aluminium can also react with chlorine to form aluminium chloride (AlCl₃).',
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the reaction when aluminium reacts with oxygen.',
        marks: 1,
        ph: 'Aluminium gains oxygen — oxidation',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Displacement', 'Neutralization', 'Oxidation'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (electron dot diagram) of a fluorine molecule (F₂).',
        marks: 1,
        ph: 'F₂ has a single bond: :F–F: with three lone pairs on each F',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: '**Select** options to balance the chemical equation for the reaction between aluminium and chlorine: ___ Al + ___ Cl₂ → ___ AlCl₃',
        marks: 3,
        ph: '2 Al + 3 Cl₂ → 2 AlCl₃',
        widget: 'inline_dropdown_select',
        widgetItems: ['Al coefficient', 'Cl₂ coefficient', 'AlCl₃ coefficient'],
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'd',
        text: '**Calculate** how many moles of chlorine react with 0.540 g of aluminium.',
        marks: 4,
        ph: 'n(Al)=0.540/27.0=0.0200 mol; ratio 2:3 so n(Cl₂)=0.0300 mol',
      },
      {
        label: 'e',
        text: '**Identify** each substance using the information in the table below.\n\n| State at room temperature | Soluble in water | Conductivity at room temperature | Substance |\n|---|---|---|---|\n| Gas | Slightly | No | ___ |\n| Solid | No | Yes | ___ |\n| Solid | Yes | No | ___ |',
        marks: 2,
        ph: 'Gas/slightly/No = Chlorine; Solid/No/Yes = Aluminium; Solid/Yes/No = AlCl₃',
        widget: 'inline_dropdown_select',
        widgetItems: ['Gas / slightly soluble / not conductive', 'Solid / insoluble / conductive', 'Solid / soluble / not conductive'],
        widgetOptions: ['Aluminium', 'Aluminium chloride', 'Chlorine'],
      },
      {
        label: 'f',
        text: '**State** the electron configuration of phosphorus: ___',
        marks: 1,
        ph: '2.8.5',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Explain** how aluminium and chlorine bond together to form aluminium chloride.',
        marks: 4,
        ph: 'Al loses 3e⁻ → Al³⁺; 3×Cl gains 1e⁻ → Cl⁻; ionic bond = electrostatic attraction',
      },
      {
        label: 'h',
        text: '**Select** the meaning of the hazard symbol shown on a bottle of aluminium chloride.',
        marks: 1,
        ph: 'Corrosive — damages skin and materials',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Explosive', 'Flammable', 'Toxic'],
      },
    ],
  },

  // ─── Q3: Acid rain / limestone erosion (26m, Crit B/C) ───────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Acids',
    marks: 26,
    stem: 'Pollution is causing damage to the environment. Sulfur dioxide from burning fossil fuels dissolves in water to produce sulfuric acid, making rain acidic. Acid rain affects plant life, water sources and building materials, including limestone buildings (calcium carbonate). A student investigated the effects of three acidic solutions (vinegar, cola, lemon juice) on limestone chips over seven days.\n\nTable: Change in mass of limestone chips / g\n\n| Acid | | Trial 1 | Trial 2 | Trial 3 | Average |\n|---|---|---|---|---|---|\n| Vinegar | Change in mass | 3.25 | 3.19 | 3.23 | __ |\n| Cola | Change in mass | 0.12 | 0.16 | 0.14 | 0.14 |\n| Lemon juice | Change in mass | 1.53 | 1.39 | 1.52 | 1.48 |\n\nTable: Change in pH\n\n| Acid | Average change in pH |\n|---|---|\n| Vinegar | 2.58 |\n| Cola | 2.67 |\n| Lemon juice | 3.44 |',
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the average change in mass after the limestone chips were exposed to vinegar for one week: ___ g',
        marks: 2,
        ph: '(3.25+3.19+3.23)/3 = 3.22 g',
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
        ph: 'Lemon juice; largest average increase in pH (3.44)',
      },
      {
        label: 'd',
        text: '**Design** a method to investigate the effect of 0.1 mol·dm⁻³ hydrochloric acid on six different sizes of limestone chips. In your answer include:\n\n• the independent, dependent and two control variables\n• a list of equipment needed\n• a description of how you will collect sufficient data\n• a description of the method\n• an outline of how you will make the method safe',
        marks: 17,
        ph: 'Crit B: IV = limestone chip size; DV = mass change or pH or gas volume; CVs stated; equipment listed; ≥5 sizes, ≥3 trials; step-by-step method; safety (acid hazard)',
      },
      {
        label: 'e',
        text: '**Suggest** a research question for an investigation into how the thickness of a wax coating affects the erosion of limestone buildings. Your research question should clearly state an independent and a dependent variable.',
        marks: 2,
        ph: 'How does thickness of wax coating (IV) affect change in mass of limestone (DV)?',
      },
    ],
  },

  // ─── Q4: Lemon juice + baking soda investigation (17m, Crit B/C) ─────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation & Chemical Reactions',
    marks: 17,
    stem: 'Environmental pollution is causing changes to our climate. A student is investigating the effectiveness of a home-made CO₂ generator using lemon juice and baking soda to inflate a balloon.\n\nMethod:\n1. Measure 50 cm³ of lemon juice and place it in a 500 mL plastic bottle.\n2. Measure 1 spoon of baking soda (sodium bicarbonate, NaHCO₃) into a balloon.\n3. Attach the balloon over the mouth of the bottle.\n4. Tip the baking soda from the balloon into the lemon juice.\n5. Record the maximum diameter of the balloon (in cm) after 1 minute.\n6. Repeat steps 1 to 5 using 2 spoons, 3 spoons, 4 spoons and 5 spoons of baking soda.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, the dependent variable and one control variable in the student\'s method.\n\nIndependent variable: ___\nDependent variable: ___\nControl variable: ___',
        marks: 3,
        ph: 'IV = teaspoons of baking soda; DV = diameter of balloon; CV = volume of lemon juice',
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
        ph: 'Mass of baking soda not weighed; only one trial; balloon diameter hard to measure accurately',
      },
      {
        label: 'd',
        text: '**Suggest** a different independent variable to extend the student\'s investigation.',
        marks: 1,
        ph: 'Concentration of lemon juice / temperature / volume of lemon juice / type of acid',
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

  // ─── Q5: Portable fire suppressants comparison (7m, Crit C/A) ──────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis & Chemical Reactions',
    marks: 7,
    stem: 'There are many types of portable fire suppressants. The table below gives data about three types:\n\n| | Water mist | CO₂ cartridge | Powder ball |\n|---|---|---|---|\n| Weight / kg | 0.38 | 0.52 | 0.21 |\n| Coverage / m² | 6 | 4 | 35 |\n| Temperature range | Moderate | Cold/cool | Any |\n| Operation | Manual spray | Release valve | Drop or throw |\n| Maintenance | Annual refill | 5-year check | 5-year check |',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the validity of the following research statement, using data from the table to support your answer:\n\n*"The heavier the fire suppressant, the larger the coverage area."*',
        marks: 3,
        ph: 'CO₂ is heaviest (0.52kg) but covers only 4m²; powder ball is lightest (0.21kg) but covers 35m² → statement NOT valid',
      },
      {
        label: 'b',
        text: '**Identify** which fire suppressant would be best for use on a forest fire. **Justify** your answer using data from the table.',
        marks: 3,
        ph: 'Powder ball: lightest (0.21kg) so easy to deploy; covers 35m²; works at any temperature; can be dropped/thrown from distance',
      },
      {
        label: 'c',
        text: 'When food catches fire, it burns in a combustion reaction. Combustion reactions are chemical reactions that produce heat.\n\n**Select** the type of reaction in which heat is produced.',
        marks: 1,
        ph: 'Combustion releases heat — exothermic',
        widget: 'radio_select',
        widgetOptions: ['Decomposition', 'Electrolysis', 'Endothermic', 'Exothermic'],
      },
    ],
  },

  // ─── Q6: Sleep / serotonin / organic chemistry (15m, Crit A/D) ───────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Organic Chemistry & Societal Impact',
    marks: 15,
    stem: 'High levels of anxiety about school work may cause disruption to sleep. The wellness industry has developed sleep sprays containing plant extracts sprayed onto a pillow or body before sleep. Scientists have also studied serotonin (a mood and sleep-regulating hormone) and found that certain molecules with carboxylic acid or alcohol functional groups can influence sleep quality.',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the functional groups that are circled in the two molecules shown.',
        marks: 2,
        ph: 'Molecule A: COOH = Carboxylic acid; Molecule B: OH = Alcohol',
        widget: 'inline_dropdown_select',
        widgetItems: ['Molecule A functional group', 'Molecule B functional group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
      {
        label: 'b',
        text: 'A hotel is investigating which sleep spray should be provided for long-haul airline crew members to improve their sleep while staying at the hotel. Using the information about the four sprays and your wider MYP studies, **discuss** and **evaluate** which sleep spray the hotel company should select.\n\nIn your answer include:\n\n• an outline of why enough sleep is important for airline crew members\n• a comparison of the impact of each spray on the quality of sleep\n• a discussion of the economic considerations of using different sleep sprays\n• an evaluation with justification of your choice of spray for the hotel to choose',
        marks: 13,
        ph: 'Crit D: safety for pilots/crew; compare sleep quality from graphs; compare cost/lifespan; justified final choice',
      },
    ],
  },

  // ─── Q7: Eucalyptus oil vs rose oil for sleep spray (9m, Crit D) ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental & Social Impact of Chemistry',
    marks: 9,
    stem: 'Ingredients of sleep sprays often include eucalyptus and rose extracts. Eucalyptus oil is produced by large-scale industrial farming operations in Australia and China, while rose oil (attar of roses) has been produced for centuries by small family farms in Bulgaria\'s Rose Valley.\n\nTable: Production comparison\n\n| | Eucalyptus oil | Rose oil |\n|---|---|---|\n| Source | Eucalyptus tree, fast-growing | Rosa damascena, slow-growing |\n| Growing conditions | Warm climate, low water, tolerates poor soil | Temperate climate, high water, specific soil |\n| Labour | Large mechanised farms | Small family farms, hand-harvested |\n| Social | Large corporations, limited community benefit | Supports traditional family livelihoods |\n| Cost per 15 ml / $ | 18.50 | 145.00 |\n| Mass of plant per 15 ml extract / kg | 0.80 | 4.50 |\n| Yield per hectare / kg | 8500 | 2800 |',
    tasks: [
      {
        label: '',
        text: 'Using the information provided, **discuss** which plant extract would be the best for the sleep spray industry to use.\n\nIn your answer consider:\n\n• the social impact of each extract\n• the environmental impact of each extract\n• the final choice of extract with justification',
        marks: 9,
        ph: 'Crit D: compare social (industrial vs family farms); environmental (low water fast-growing vs high water slow-growing); justified choice',
      },
    ],
  },
]
