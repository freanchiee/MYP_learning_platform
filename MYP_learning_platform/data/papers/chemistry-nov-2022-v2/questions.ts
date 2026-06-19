export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/**
 * Data-driven interactive artefact (context/stimulus slot). `component` names a
 * renderer registered in components/exam/QuestionImage.tsx; `data` is passed to
 * it. Lets a question embed a reusable figure (table, chart, sim, diagram).
 */
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Pure nickel', 'Nichrome (Ni–Cr alloy)'],
        rows: [
          ['Melting point / °C', '1455', '1400'],
          ['Resistance to corrosion', 'good', 'excellent'],
          ['Hardness (Mohs scale)', '4.0', '6.5'],
          ['Maximum working temperature / °C', '600', '1200'],
          ['Electrical resistivity / nΩ·m', '69', '1100'],
        ],
      },
      caption: 'Comparison of pure nickel with the nickel–chromium alloy nichrome — use these data in part (f).',
    },
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
        text: '**Outline** why catalytic converters are made from nichrome rather than pure nickel, using data from the table.',
        marks: 2,
        ph: 'Greater corrosion resistance (excellent vs good) / harder (6.5 vs 4.0 Mohs) / higher maximum working temperature (1200 vs 600 °C) — links to table data',
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Elements in this question (Period 3)</text><g><rect x="60" y="46" width="64" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="92" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 13</text><text x="92" y="80" font-size="17" font-weight="700" text-anchor="middle" fill="#0b7285">Al</text><text x="92" y="92" font-size="8" text-anchor="middle" fill="#64748b">aluminium · 13</text></g><g><rect x="200" y="46" width="64" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="232" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 15</text><text x="232" y="80" font-size="17" font-weight="700" text-anchor="middle" fill="#e8590c">P</text><text x="232" y="92" font-size="8" text-anchor="middle" fill="#64748b">phosphorus · 15</text></g><g><rect x="340" y="46" width="64" height="50" fill="#f3f0ff" stroke="#5b6b78"/><text x="372" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 17</text><text x="372" y="80" font-size="17" font-weight="700" text-anchor="middle" fill="#7048e8">Cl</text><text x="372" y="92" font-size="8" text-anchor="middle" fill="#64748b">chlorine · 17</text></g><text x="60" y="128" font-size="11" fill="#475569">Al is a metal (loses electrons to form Al³⁺).</text><text x="60" y="146" font-size="11" fill="#475569">Cl is a non-metal (gains 1 electron to form Cl⁻).</text><text x="60" y="164" font-size="11" fill="#475569">Electron configurations: Al 2.8.3 · P 2.8.5 · Cl 2.8.7</text><text x="60" y="190" font-size="10" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons.</text><text x="60" y="206" font-size="10" fill="#94a3ad">Metal + non-metal → ionic bonding (electron transfer).</text></svg>',
      },
      caption: 'Periodic-table positions and electron configurations of aluminium, phosphorus and chlorine.',
    },
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
        text: '**Select** the Lewis structure (electron dot diagram) that correctly represents a fluorine molecule (F₂).',
        marks: 1,
        ph: 'B — F₂ has one shared (bonding) pair making a single bond, and three lone pairs on each F (each F has 8 electrons)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four candidate Lewis (dot) structures for F₂ — choose the correct one</text><g><rect x="24" y="44" width="248" height="106" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="40" y="66" font-size="13" font-weight="700" fill="#0b7285">A</text><text x="120" y="106" font-size="20" font-weight="700" fill="#1f2d3a">F</text><line x1="148" y1="92" x2="172" y2="92" stroke="#1f2d3a" stroke-width="2"/><line x1="148" y1="100" x2="172" y2="100" stroke="#1f2d3a" stroke-width="2"/><text x="190" y="106" font-size="20" font-weight="700" fill="#1f2d3a">F</text><circle cx="110" cy="84" r="2.2" fill="#1f2d3a"/><circle cx="118" cy="78" r="2.2" fill="#1f2d3a"/><circle cx="110" cy="110" r="2.2" fill="#1f2d3a"/><circle cx="118" cy="116" r="2.2" fill="#1f2d3a"/><circle cx="200" cy="84" r="2.2" fill="#1f2d3a"/><circle cx="208" cy="78" r="2.2" fill="#1f2d3a"/><circle cx="200" cy="110" r="2.2" fill="#1f2d3a"/><circle cx="208" cy="116" r="2.2" fill="#1f2d3a"/><text x="148" y="140" font-size="9" fill="#94a3ad">double bond, 2 lone pairs each</text></g><g><rect x="288" y="44" width="248" height="106" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="304" y="66" font-size="13" font-weight="700" fill="#0b7285">B</text><text x="376" y="106" font-size="20" font-weight="700" fill="#1f2d3a">F</text><line x1="404" y1="96" x2="430" y2="96" stroke="#1f2d3a" stroke-width="2"/><text x="448" y="106" font-size="20" font-weight="700" fill="#1f2d3a">F</text><circle cx="366" cy="80" r="2.2" fill="#1f2d3a"/><circle cx="374" cy="76" r="2.2" fill="#1f2d3a"/><circle cx="360" cy="96" r="2.2" fill="#1f2d3a"/><circle cx="360" cy="104" r="2.2" fill="#1f2d3a"/><circle cx="366" cy="116" r="2.2" fill="#1f2d3a"/><circle cx="374" cy="120" r="2.2" fill="#1f2d3a"/><circle cx="458" cy="80" r="2.2" fill="#1f2d3a"/><circle cx="466" cy="76" r="2.2" fill="#1f2d3a"/><circle cx="474" cy="96" r="2.2" fill="#1f2d3a"/><circle cx="474" cy="104" r="2.2" fill="#1f2d3a"/><circle cx="458" cy="116" r="2.2" fill="#1f2d3a"/><circle cx="466" cy="120" r="2.2" fill="#1f2d3a"/><text x="404" y="140" font-size="9" fill="#94a3ad">single bond, 3 lone pairs each</text></g><g><rect x="24" y="166" width="248" height="106" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="40" y="188" font-size="13" font-weight="700" fill="#0b7285">C</text><text x="120" y="228" font-size="20" font-weight="700" fill="#1f2d3a">F</text><line x1="148" y1="218" x2="172" y2="218" stroke="#1f2d3a" stroke-width="2"/><text x="190" y="228" font-size="20" font-weight="700" fill="#1f2d3a">F</text><circle cx="110" cy="206" r="2.2" fill="#1f2d3a"/><circle cx="118" cy="202" r="2.2" fill="#1f2d3a"/><circle cx="110" cy="232" r="2.2" fill="#1f2d3a"/><circle cx="118" cy="238" r="2.2" fill="#1f2d3a"/><circle cx="200" cy="206" r="2.2" fill="#1f2d3a"/><circle cx="208" cy="202" r="2.2" fill="#1f2d3a"/><circle cx="200" cy="232" r="2.2" fill="#1f2d3a"/><circle cx="208" cy="238" r="2.2" fill="#1f2d3a"/><text x="148" y="262" font-size="9" fill="#94a3ad">single bond, 2 lone pairs each</text></g><g><rect x="288" y="166" width="248" height="106" rx="6" fill="#f8fafc" stroke="#cbd5e1"/><text x="304" y="188" font-size="13" font-weight="700" fill="#0b7285">D</text><text x="376" y="228" font-size="20" font-weight="700" fill="#1f2d3a">F</text><line x1="404" y1="214" x2="430" y2="214" stroke="#1f2d3a" stroke-width="2"/><line x1="404" y1="222" x2="430" y2="222" stroke="#1f2d3a" stroke-width="2"/><line x1="404" y1="230" x2="430" y2="230" stroke="#1f2d3a" stroke-width="2"/><text x="448" y="228" font-size="20" font-weight="700" fill="#1f2d3a">F</text><circle cx="366" cy="208" r="2.2" fill="#1f2d3a"/><circle cx="374" cy="204" r="2.2" fill="#1f2d3a"/><circle cx="458" cy="208" r="2.2" fill="#1f2d3a"/><circle cx="466" cy="204" r="2.2" fill="#1f2d3a"/><text x="404" y="262" font-size="9" fill="#94a3ad">triple bond, 1 lone pair each</text></g></svg>',
          },
          caption: 'Four possible electron-dot (Lewis) diagrams for F₂. Each fluorine atom has 7 outer electrons, so the molecule shares one pair (a single bond) and leaves three lone pairs on each atom.',
        },
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
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Average change in mass of limestone chips after one week',
        mode: 'bars',
        variable: 'Acidic solution',
        metric: 'Average change in mass / g',
        bars: [
          { label: 'Vinegar', value: 3.22 },
          { label: 'Cola', value: 0.14 },
          { label: 'Lemon juice', value: 1.48 },
        ],
        note: 'Average change in mass per acid (vinegar value = mean of the three trials). Compare with the pH-change data when judging which acid was most aggressive.',
      },
      caption: 'The greater the change in mass, the more limestone was eroded by the acid.',
    },
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
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Example results: baking soda vs balloon diameter',
        mode: 'scatter',
        lineOfBestFit: true,
        variable: 'balloon diameter',
        xLabel: 'Mass of baking soda / spoons',
        yLabel: 'Balloon diameter / cm',
        xAxis: { label: 'Mass of baking soda / spoons', min: 0, max: 6, tick: 1 },
        yAxis: { label: 'Balloon diameter / cm', min: 0, max: 30, tick: 5 },
        scatterPoints: [
          { x: 1, y: 6 },
          { x: 2, y: 11 },
          { x: 3, y: 15 },
          { x: 4, y: 20 },
          { x: 5, y: 24 },
        ],
        note: 'Sample data showing the expected trend — more baking soda produces more CO₂, so the balloon inflates to a larger diameter. Use a layout like this when you organise and plot your own results.',
      },
      caption: 'Illustrative scatter of balloon diameter against mass of baking soda, with a line of best fit.',
    },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Water mist', 'CO₂ cartridge', 'Powder ball'],
        rows: [
          ['Weight / kg', '0.38', '0.52', '0.21'],
          ['Coverage / m²', '6', '4', '35'],
          ['Temperature range', 'Moderate', 'Cold/cool', 'Any'],
          ['Operation', 'Manual spray', 'Release valve', 'Drop or throw'],
          ['Maintenance', 'Annual refill', '5-year check', '5-year check'],
        ],
      },
      caption: 'Data on three portable fire suppressants — use the weight and coverage values to test the research statement in part (a) and choose a suppressant in part (b).',
    },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two molecules — identify the circled functional groups</text><g><text x="140" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Molecule A</text><line x1="40" y1="120" x2="80" y2="120" stroke="#1f2d3a" stroke-width="2"/><line x1="80" y1="120" x2="120" y2="120" stroke="#1f2d3a" stroke-width="2"/><text x="60" y="112" font-size="11" text-anchor="middle" fill="#1f2d3a">CH₃</text><text x="100" y="112" font-size="11" text-anchor="middle" fill="#1f2d3a">CH₂</text><line x1="120" y1="120" x2="160" y2="120" stroke="#1f2d3a" stroke-width="2"/><text x="170" y="124" font-size="13" font-weight="700" fill="#0b7285">C</text><line x1="178" y1="112" x2="178" y2="86" stroke="#0b7285" stroke-width="2"/><line x1="182" y1="112" x2="182" y2="86" stroke="#0b7285" stroke-width="2"/><text x="180" y="80" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">O</text><line x1="184" y1="120" x2="210" y2="120" stroke="#0b7285" stroke-width="2"/><text x="226" y="124" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">O–H</text><ellipse cx="196" cy="106" rx="56" ry="40" fill="none" stroke="#e8590c" stroke-width="2" stroke-dasharray="5 4"/><text x="196" y="172" font-size="10" text-anchor="middle" fill="#e8590c">circled group on A</text></g><line x1="300" y1="40" x2="300" y2="200" stroke="#e2e8f0" stroke-width="1"/><g><text x="430" y="52" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">Molecule B</text><line x1="330" y1="120" x2="370" y2="120" stroke="#1f2d3a" stroke-width="2"/><text x="350" y="112" font-size="11" text-anchor="middle" fill="#1f2d3a">CH₃</text><line x1="370" y1="120" x2="410" y2="120" stroke="#1f2d3a" stroke-width="2"/><text x="392" y="112" font-size="11" text-anchor="middle" fill="#1f2d3a">CH₂</text><line x1="410" y1="120" x2="448" y2="120" stroke="#1f2d3a" stroke-width="2"/><text x="430" y="112" font-size="11" text-anchor="middle" fill="#1f2d3a">CH₂</text><text x="466" y="124" font-size="12" font-weight="700" text-anchor="middle" fill="#7048e8">O–H</text><ellipse cx="466" cy="120" rx="34" ry="26" fill="none" stroke="#e8590c" stroke-width="2" stroke-dasharray="5 4"/><text x="450" y="172" font-size="10" text-anchor="middle" fill="#e8590c">circled group on B</text></g><text x="280" y="214" font-size="10" text-anchor="middle" fill="#94a3ad">Look at the atoms inside each dashed circle to name the functional group.</text></svg>',
      },
      caption: 'Two molecules with one functional group circled on each — name the circled group on Molecule A and on Molecule B.',
    },
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
        text: 'A hotel is investigating which sleep spray should be provided for long-haul airline crew members to improve their sleep while staying at the hotel. Using the data on the four sprays in the table below and your wider MYP studies, **discuss** and **evaluate** which sleep spray the hotel company should select.\n\nIn your answer include:\n\n• an outline of why enough sleep is important for airline crew members\n• a comparison of the impact of each spray on the quality of sleep\n• a discussion of the economic considerations of using different sleep sprays\n• an evaluation with justification of your choice of spray for the hotel to choose',
        marks: 13,
        ph: 'Crit D: safety for pilots/crew; compare sleep quality (extra sleep / fewer awakenings) from the table; compare cost per bottle and bottle lifespan; justified final choice',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Property', 'Lavender', 'Chamomile', 'Valerian', 'Bergamot'],
            rows: [
              ['Main functional group', 'Alcohol', 'Ester', 'Carboxylic acid', 'Ester'],
              ['Extra sleep per night / min', '38', '29', '46', '21'],
              ['Reduction in night awakenings / %', '34', '22', '41', '15'],
              ['Reported next-day drowsiness', 'Low', 'Low', 'Moderate', 'None'],
              ['Cost per 30 ml bottle / $', '12.00', '9.50', '21.00', '14.50'],
              ['Bottle lasts / nights', '30', '30', '25', '40'],
            ],
          },
          caption: 'Trial data for four candidate sleep sprays — compare the impact on sleep quality (extra sleep, fewer awakenings) against the economic data (cost per bottle and how long each bottle lasts) to justify the hotel\'s choice.',
        },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Eucalyptus oil', 'Rose oil'],
        rows: [
          ['Source', 'Eucalyptus tree, fast-growing', 'Rosa damascena, slow-growing'],
          ['Growing conditions', 'Warm climate, low water, tolerates poor soil', 'Temperate climate, high water, specific soil'],
          ['Labour', 'Large mechanised farms', 'Small family farms, hand-harvested'],
          ['Social', 'Large corporations, limited community benefit', 'Supports traditional family livelihoods'],
          ['Cost per 15 ml / $', '18.50', '145.00'],
          ['Mass of plant per 15 ml extract / kg', '0.80', '4.50'],
          ['Yield per hectare / kg', '8500', '2800'],
        ],
      },
      caption: 'Production comparison of eucalyptus oil and rose oil — use the social, environmental and cost data to justify which extract the industry should use.',
    },
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
