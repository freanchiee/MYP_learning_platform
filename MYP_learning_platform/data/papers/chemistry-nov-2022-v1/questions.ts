export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/** Data-driven interactive artefact rendered in the context/stimulus slot. */
export interface ArtefactSpec {
  component: string
  data?: unknown
  caption?: string
}

export interface Task {
  label: string
  text: string
  marks: number
  ph: string
  widget?: Widget
  widgetOptions?: string[]
  widgetItems?: string[]
  figImages?: string[]
  artefact?: ArtefactSpec
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  marks: number
  stem: string
  figImages?: string[]
  artefact?: ArtefactSpec
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Where silver (Ag) sits in the periodic table</text><g><rect x="40" y="40" width="80" height="14" fill="#fde68a" stroke="#5b6b78"/><text x="80" y="50" font-size="8.5" text-anchor="middle" fill="#475569">Alkali</text><rect x="40" y="40" width="80" height="120" fill="none" stroke="#94a3ad"/></g><g><rect x="200" y="86" width="160" height="40" fill="#cffafe" stroke="#0b7285" stroke-width="1.5"/><text x="280" y="78" font-size="10" text-anchor="middle" fill="#0b7285" font-weight="700">Transition metals (Period 5)</text><rect x="270" y="92" width="44" height="30" fill="#0b7285"/><text x="292" y="106" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">47</text><text x="292" y="118" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">Ag</text></g><g><rect x="440" y="40" width="80" height="120" fill="#e0f2fe" stroke="#94a3ad"/><text x="480" y="36" font-size="8.5" text-anchor="middle" fill="#475569">Halogens</text></g><text x="40" y="186" font-size="11" fill="#475569">Silver is a transition metal in Period 5, atomic number 47.</text><text x="40" y="204" font-size="11" fill="#475569">Sterling silver = 92.5% Ag + 7.5% Cu (an alloy).</text><text x="40" y="226" font-size="10" fill="#94a3ad">Alloying with copper makes silver harder and more durable than the pure metal.</text></svg>',
      },
      caption: 'Silver (Ag, 47) is a Period-5 transition metal; sterling silver alloys it with copper for hardness.',
    },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ionic bonding: Mg + Cl₂ → MgCl₂</text><g><circle cx="120" cy="110" r="46" fill="none" stroke="#0b7285" stroke-width="1.5"/><circle cx="120" cy="110" r="30" fill="none" stroke="#0b7285" stroke-width="1.2"/><circle cx="120" cy="110" r="15" fill="#0b7285"/><text x="120" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">Mg</text><circle cx="120" cy="64" r="4" fill="#e8590c"/><circle cx="166" cy="110" r="4" fill="#e8590c"/><text x="120" y="178" font-size="11" text-anchor="middle" fill="#475569">Mg (2.8.2)</text><text x="120" y="194" font-size="10" text-anchor="middle" fill="#94a3ad">loses 2 outer e⁻</text></g><g><text x="250" y="100" font-size="22" fill="#1f2d3a">→</text><text x="250" y="130" font-size="11" text-anchor="middle" fill="#475569">transfer</text></g><g><circle cx="380" cy="80" r="22" fill="#fff7ed" stroke="#e8590c" stroke-width="1.5"/><text x="380" y="84" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">Cl⁻</text><circle cx="380" cy="150" r="22" fill="#fff7ed" stroke="#e8590c" stroke-width="1.5"/><text x="380" y="154" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">Cl⁻</text><rect x="455" y="92" width="70" height="46" rx="6" fill="#cffafe" stroke="#0b7285" stroke-width="1.5"/><text x="490" y="112" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Mg²⁺</text><text x="490" y="128" font-size="9" text-anchor="middle" fill="#0b7285">(full shell)</text></g><text x="40" y="222" font-size="11" fill="#475569">Mg loses 2 electrons → Mg²⁺ ; two Cl atoms each gain 1 electron → 2 Cl⁻.</text><text x="40" y="242" font-size="11" fill="#475569">Oppositely charged ions attract: ionic bonding holds MgCl₂ together.</text></svg>',
      },
      caption: 'Magnesium transfers two electrons to two chlorine atoms, forming the ionic compound MgCl₂.',
    },
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
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Average change in mass of marble chips after 7 days',
        mode: 'bars',
        variable: 'Acidic solution',
        metric: 'Average change in mass / g',
        bars: [
          { label: 'vinegar', value: 2.94 },
          { label: 'cola', value: 0.11 },
          { label: 'lemon juice', value: 1.29 },
        ],
        note: 'The taller the bar, the more marble (calcium carbonate) was eroded by that acid.',
      },
      caption: 'Average mass change per acid — vinegar eroded the most marble; cola the least.',
    },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><text x="230" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Home-made CO₂ generator</text><ellipse cx="160" cy="74" rx="46" ry="34" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><text x="160" y="70" font-size="9" text-anchor="middle" fill="#0369a1">balloon inflating</text><text x="160" y="84" font-size="9" text-anchor="middle" fill="#0369a1">with CO₂ gas</text><path d="M148 104 q12 14 24 0" fill="none" stroke="#0369a1" stroke-width="1.2"/><rect x="150" y="106" width="20" height="14" fill="#e2e8f0" stroke="#64748b"/><path d="M132 120 L188 120 L182 250 Q160 270 138 250 Z" fill="#eff6ff" stroke="#475569" stroke-width="1.5"/><rect x="138" y="200" width="44" height="50" fill="#bfdbfe" opacity="0.7"/><path d="M138 200 L182 200" stroke="#3b82f6" stroke-width="1"/><text x="160" y="228" font-size="9" text-anchor="middle" fill="#1e3a8a">citric acid</text><text x="160" y="240" font-size="9" text-anchor="middle" fill="#1e3a8a">50 cm³</text><circle cx="150" cy="150" r="2.5" fill="#94a3b8"/><circle cx="170" cy="160" r="2.5" fill="#94a3b8"/><circle cx="160" cy="140" r="2.5" fill="#94a3b8"/><text x="178" y="152" font-size="8" fill="#64748b">baking soda</text><text x="178" y="163" font-size="8" fill="#64748b">tipped in</text><text x="300" y="120" font-size="11" font-weight="700" fill="#1f2d3a">Reaction:</text><text x="300" y="140" font-size="10" fill="#475569">citric acid + NaHCO₃</text><text x="300" y="156" font-size="10" fill="#475569">→ CO₂ + water + salt</text><text x="300" y="184" font-size="10" fill="#475569">IV: spoons of baking soda</text><text x="300" y="200" font-size="10" fill="#475569">DV: balloon diameter / cm</text><text x="300" y="216" font-size="10" fill="#475569">CV: volume of citric acid</text><text x="300" y="250" font-size="9" fill="#94a3ad">More CO₂ → larger balloon.</text></svg>',
      },
      caption: 'Apparatus: baking soda is tipped into citric acid in a bottle; the CO₂ produced inflates the balloon, whose diameter is measured.',
    },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Ionisation detector', 'Optical detector', 'Heat detector'],
        rows: [
          ['Weight / g', 120, 185, 145],
          ['Detection area / m²', 60, 45, 25],
          ['Battery life / years', 1, 2, 5],
          ['Best for', 'Fast-flaming fires', 'Slow-smouldering fires', 'High-heat areas'],
          ['False alarm risk', 'High', 'Low', 'Very low'],
        ],
      },
      caption: 'Comparison of three smoke-detector types. Use the figures to test the research statement and pick the best detector.',
    },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two molecules — identify the circled functional group</text><g><text x="60" y="60" font-size="12" font-weight="700" fill="#0b7285">Molecule A</text><text x="40" y="110" font-size="15" font-family="monospace" fill="#1f2d3a">CH₃ — C( = O) — O — CH₃</text><ellipse cx="196" cy="105" rx="58" ry="26" fill="none" stroke="#e8590c" stroke-width="2"/><text x="196" y="150" font-size="10" text-anchor="middle" fill="#e8590c">circled group: –C(=O)–O–</text><text x="60" y="172" font-size="10" fill="#94a3ad">(methyl ethanoate, an ester)</text></g><line x1="300" y1="44" x2="300" y2="190" stroke="#e2e8f0" stroke-width="1.5"/><g><text x="340" y="60" font-size="12" font-weight="700" fill="#0b7285">Molecule B</text><text x="330" y="110" font-size="15" font-family="monospace" fill="#1f2d3a">CH₃ — C( = O) — O — H</text><ellipse cx="470" cy="105" rx="52" ry="26" fill="none" stroke="#e8590c" stroke-width="2"/><text x="470" y="150" font-size="10" text-anchor="middle" fill="#e8590c">circled group: –C(=O)–O–H</text><text x="340" y="172" font-size="10" fill="#94a3ad">(ethanoic acid, a carboxylic acid)</text></g><text x="280" y="210" font-size="10" text-anchor="middle" fill="#475569">An ester has –O– between two carbons; a carboxylic acid ends in –O–H.</text></svg>',
      },
      caption: 'Molecule A contains an ester group (–C(=O)–O–C); Molecule B contains a carboxylic acid group (–C(=O)–O–H).',
    },
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
        ph: 'Crit D: safety for drivers; compare sleep quality from data; compare cost/lifespan; justified final choice',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Sleep spray', 'Cost / USD', 'Volume / ml', 'Cost per sleep / USD', 'Plant extracts', 'Sleep quality (on test night)'],
            rows: [
              ['Spray A', 23, 30, 0.38, 'Lavender and chamomile', '1 time awake; 6 times interrupted sleep; 8 min awake'],
              ['Spray B', 35, 30, 0.58, 'Peppermint and valerian', '0 times awake; 3 times interrupted sleep; 4 min awake'],
              ['Spray C', 18, 50, 0.18, 'Chamomile only', '2 times awake; 9 times interrupted sleep; 15 min awake'],
              ['Spray D', 41, 50, 0.41, 'Peppermint, lavender and melatonin', '0 times awake; 1 time interrupted sleep; 2 min awake'],
            ],
          },
          caption: 'The four candidate sleep sprays (A–D). Cost per sleep is the bottle cost divided by the number of uses per bottle; sleep quality is read from each spray\'s overnight sleep trace — fewer interruptions and less time awake is better.',
        },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Peppermint', 'Chamomile'],
        rows: [
          ['Source', 'Peppermint plant, small family farms', 'Chamomile flower, large commercial farms'],
          ['Growing conditions', 'Temperate climate, moderate water', 'Warm climate, high water, pesticides used'],
          ['Labour', 'Small family farms in rural communities', 'Large-scale agricultural workers'],
          ['Social', 'Supports family income; preserves tradition', 'Provides employment; lower product cost'],
          ['Cost per 15 ml / $', 75.0, 28.5],
          ['Mass of plant per 15 ml extract / kg', 0.35, 1.2],
          ['Yield per hectare / kg', 1500, 4200],
        ],
      },
      caption: 'Production comparison of the two plant extracts — weigh the social, environmental and economic factors before choosing.',
    },
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
