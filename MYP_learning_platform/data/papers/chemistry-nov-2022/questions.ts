export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/**
 * Data-driven interactive artefact spec (matches @/lib/types ArtefactSpec).
 * `component` names a renderer in components/exam/QuestionImage.tsx; `data` is
 * passed to it as render_data. Used to replace copyrighted figure screenshots
 * with original interactive artefacts in the context/stimulus slot.
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
  topicCanonical?: import('@/data/taxonomy/topics').Topic
  topicGroup?: import('@/data/taxonomy/topics').TopicGroup
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Melting point / °C', 'Ability to corrode', 'Hardness / malleability / ductility', 'Conductor of electricity'],
        rows: [
          ['Copper (Cu)', '1085', 'Corrodes easily', 'Soft, malleable and ductile', 'High conductor'],
          ['Tin (Sn)', '232', 'Does not corrode easily', 'Soft, malleable and ductile', 'Good conductor'],
          ['Bronze (88% Cu + 12% Sn)', '950', 'Resists corrosion', 'Hard, malleable and ductile', 'High conductor'],
        ],
      },
      caption: 'Data about copper, tin and the alloy bronze. Use this table for parts (e) and (f).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the area in the periodic table where copper is found.',
        marks: 1,
        ph: 'Copper is a transition metal',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Transition metals'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="240" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Areas of the periodic table</text><rect x="40" y="40" width="40" height="150" fill="#dbeafe" stroke="#5b6b78"/><text x="60" y="205" font-size="9" text-anchor="middle" fill="#1d4ed8">alkali</text><text x="60" y="217" font-size="9" text-anchor="middle" fill="#1d4ed8">metals</text><rect x="80" y="40" width="40" height="150" fill="#e0f2fe" stroke="#5b6b78"/><text x="100" y="205" font-size="9" text-anchor="middle" fill="#0369a1">alkaline</text><text x="100" y="217" font-size="9" text-anchor="middle" fill="#0369a1">earth</text><rect x="160" y="92" width="220" height="98" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="270" y="150" font-size="13" font-weight="700" text-anchor="middle" fill="#92400e">transition metals</text><rect x="300" y="40" width="38" height="46" fill="#fed7aa" stroke="#9a3412"/><text x="319" y="60" font-size="9" text-anchor="middle" fill="#9a3412">Period 4</text><text x="319" y="76" font-size="14" font-weight="700" text-anchor="middle" fill="#c2410c">Cu</text><line x1="319" y1="86" x2="319" y2="92" stroke="#9a3412" stroke-width="1.5"/><text x="430" y="60" font-size="11" fill="#475569">Copper (Cu) is a transition metal</text><text x="430" y="78" font-size="11" fill="#475569">found in Period 4.</text><rect x="520" y="40" width="40" height="150" fill="#bbf7d0" stroke="#5b6b78"/><text x="540" y="205" font-size="9" text-anchor="middle" fill="#15803d">halogens</text><text x="170" y="232" font-size="9" fill="#94a3ad">Schematic block layout — not to scale.</text></svg>',
          },
          caption: 'The transition metals occupy the central block of the periodic table; copper (Cu) sits in Period 4.',
        },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Substance', 'State at room temperature', 'Soluble in water', 'Conductivity at room temperature'],
        rows: [
          ['Substance 1', 'Gas', 'Slightly', 'No'],
          ['Substance 2', 'Solid', 'No', 'Yes'],
          ['Substance 3', 'Solid', 'Yes', 'No'],
        ],
      },
      caption: 'Properties of three substances — chlorine, iron and iron(III) chloride (in some order). Use this table for part (e).',
    },
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
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="200" fill="#ffffff"/><g font-size="22" font-weight="700" fill="#1f2d3a"><text x="40" y="40" font-size="13" font-weight="700" fill="#475569">A</text><text x="200" y="40" font-size="13" font-weight="700" fill="#475569">B</text><text x="360" y="40" font-size="13" font-weight="700" fill="#475569">C</text><text x="520" y="40" font-size="13" font-weight="700" fill="#475569">D</text></g><g font-size="22" font-weight="700" fill="#0b3a4a" text-anchor="middle"><g><text x="70" y="110">O</text><text x="130" y="110">O</text><line x1="88" y1="102" x2="112" y2="102" stroke="#0b3a4a" stroke-width="2"/><line x1="88" y1="110" x2="112" y2="110" stroke="#0b3a4a" stroke-width="2"/></g></g><g fill="#0b3a4a" font-size="22" font-weight="700" text-anchor="middle"><g><text x="230" y="110">O</text><text x="290" y="110">O</text><line x1="248" y1="100" x2="272" y2="100" stroke="#0b3a4a" stroke-width="2"/><line x1="248" y1="110" x2="272" y2="110" stroke="#0b3a4a" stroke-width="2"/><line x1="248" y1="120" x2="272" y2="120" stroke="#0b3a4a" stroke-width="2"/></g><g><text x="390" y="110">O</text><text x="450" y="110">O</text><line x1="408" y1="110" x2="432" y2="110" stroke="#0b3a4a" stroke-width="2"/></g><g><text x="550" y="98">O</text><text x="600" y="120">O</text><line x1="566" y1="104" x2="588" y2="116" stroke="#0b3a4a" stroke-width="2"/></g></g><g fill="#0b3a4a"><circle cx="56" cy="98" r="2.6"/><circle cx="56" cy="110" r="2.6"/><circle cx="62" cy="90" r="2.6"/><circle cx="78" cy="90" r="2.6"/><circle cx="144" cy="98" r="2.6"/><circle cx="144" cy="110" r="2.6"/><circle cx="122" cy="90" r="2.6"/><circle cx="138" cy="90" r="2.6"/></g><text x="320" y="175" font-size="11" text-anchor="middle" fill="#94a3ad">A: double bond (O=O) · B: triple bond · C: single bond · D: bent single bond. Each O also carries lone-pair dots.</text></svg>',
          },
          caption: 'Four candidate electron-dot (Lewis) diagrams for an oxygen molecule, labelled A–D.',
        },
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
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="240" height="240" fill="#ffffff"/><rect x="120" y="20" width="155" height="155" transform="rotate(45 120 120)" fill="#ffffff" stroke="#d11a1a" stroke-width="10" rx="8"/><g stroke="#111111" stroke-width="3" fill="none"><line x1="74" y1="92" x2="74" y2="112"/><line x1="86" y1="92" x2="86" y2="112"/><line x1="98" y1="92" x2="98" y2="112"/></g><g fill="#111111"><polygon points="62,112 110,112 104,124 68,124"/><path d="M68,124 q18,16 36,0" fill="none" stroke="#111111" stroke-width="3"/></g><g stroke="#111111" stroke-width="3" fill="none"><path d="M62,124 q-6,18 14,26"/></g><rect x="58" y="150" width="58" height="6" fill="#111111"/><g stroke="#111111" stroke-width="3"><line x1="150" y1="92" x2="150" y2="118"/></g><g fill="#111111"><circle cx="150" cy="124" r="4"/><circle cx="158" cy="116" r="3"/></g><path d="M138,150 l24,0 l-8,12 l-8,0 Z" fill="#111111"/><g stroke="#111111" stroke-width="3" fill="none"><path d="M150,150 q14,-2 22,8"/><path d="M168,156 l6,4 l-2,-7"/></g><text x="120" y="222" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hazard symbol on the bottle</text></svg>',
          },
          caption: 'The GHS pictogram printed on the bottle: a red-bordered diamond showing material and a hand being eaten away by liquid drops.',
        },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Investigating acid on marble chips</text><rect x="330" y="250" width="220" height="46" rx="8" fill="#f2c200" stroke="#b08900" stroke-width="2"/><rect x="392" y="262" width="96" height="22" rx="3" fill="#1a1a1a"/><text x="440" y="279" font-size="15" font-weight="700" text-anchor="middle" fill="#22ff55" font-family="monospace">24.3 g</text><text x="440" y="312" font-size="10" text-anchor="middle" fill="#64748b">balance</text><path d="M392,250 L378,170 L502,170 L488,250 Z" fill="#cfeefa" stroke="#3f7e98" stroke-width="2"/><rect x="430" y="160" width="20" height="14" fill="#cfeefa" stroke="#3f7e98" stroke-width="2"/><path d="M392,236 L488,236 L482,250 L398,250 Z" fill="#bfe3f2" stroke="#3f7e98" stroke-width="1.5"/><g fill="#8a99a6" stroke="#5b6b78" stroke-width="0.8"><circle cx="415" cy="244" r="5"/><circle cx="432" cy="246" r="6"/><circle cx="452" cy="243" r="5"/><circle cx="468" cy="246" r="6"/><circle cx="440" cy="240" r="4"/></g><line x1="380" y1="120" x2="540" y2="120" stroke="#475569" stroke-width="1"/><text x="545" y="124" font-size="11" fill="#475569">conical flask</text><text x="545" y="178" font-size="11" fill="#475569">acid solution</text><line x1="500" y1="174" x2="540" y2="174" stroke="#475569" stroke-width="1"/><text x="545" y="246" font-size="11" fill="#475569">marble chips</text><line x1="476" y1="244" x2="540" y2="244" stroke="#475569" stroke-width="1"/><rect x="60" y="170" width="120" height="120" rx="10" fill="#2b3742" stroke="#1b2026" stroke-width="2"/><rect x="74" y="184" width="92" height="40" rx="4" fill="#0b1f14"/><text x="120" y="212" font-size="20" font-weight="700" text-anchor="middle" fill="#39ff88" font-family="monospace">3.80</text><text x="120" y="252" font-size="13" font-weight="700" text-anchor="middle" fill="#cbd5e1">pH probe</text><line x1="180" y1="210" x2="330" y2="170" stroke="#64748b" stroke-width="2"/><circle cx="330" cy="170" r="3" fill="#64748b"/><text x="120" y="278" font-size="10" text-anchor="middle" fill="#94a3ad">measures pH of solution</text></svg>',
      },
      caption: 'Apparatus used to measure the change in mass (balance, 24.3 g) and pH (pH probe, 3.80) of marble chips in each acid.',
    },
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
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Acid', 'Average change in pH', 'Average change in mass / g'],
            rows: [
              ['Vinegar', '2.49', '2.93'],
              ['Cola', '2.65', '0.09'],
              ['Lemon juice', '3.49', '1.55'],
            ],
          },
          caption: 'Average change in pH (a larger increase in pH means a larger decrease in acidity) and average change in mass for each acid.',
        },
      },
      {
        label: 'd',
        text: '**Design** a method to investigate the effect of 0.1 mol·dm⁻³ sulfuric acid on six different sizes of marble chips. In your answer include:\n\n• the independent, dependent and two control variables\n• a list of equipment needed\n• a description of how you will collect sufficient data\n• a description of the method\n• an outline of how you will make the method safe',
        marks: 17,
        ph: 'Crit B: IV = marble chip size; DV = mass change or pH; CVs stated; equipment listed; ≥5 chip sizes, ≥3 trials; step-by-step method; safety (acid hazard)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="220" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Six sizes of marble chip available</text><g><g transform="translate(40,50)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad" stroke-width="0.5"><circle cx="20" cy="30" r="2"/><circle cx="30" cy="40" r="2"/><circle cx="45" cy="25" r="2.2"/><circle cx="60" cy="38" r="2"/><circle cx="75" cy="28" r="2.2"/><circle cx="92" cy="40" r="2"/><circle cx="108" cy="30" r="2"/><circle cx="122" cy="38" r="2.2"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">0–1 mm</text></g><g transform="translate(230,50)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad" stroke-width="0.6"><circle cx="22" cy="32" r="3.5"/><circle cx="42" cy="26" r="3"/><circle cx="60" cy="40" r="3.5"/><circle cx="82" cy="28" r="3"/><circle cx="104" cy="38" r="3.5"/><circle cx="122" cy="30" r="3"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">0.5–1.5 mm</text></g><g transform="translate(420,50)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad" stroke-width="0.7"><circle cx="28" cy="32" r="6"/><circle cx="56" cy="28" r="5"/><circle cx="84" cy="38" r="6"/><circle cx="112" cy="30" r="5"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">1–3 mm</text></g><g transform="translate(40,130)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad"><circle cx="34" cy="32" r="9"/><circle cx="68" cy="30" r="8"/><circle cx="102" cy="34" r="9"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">3–6 mm</text></g><g transform="translate(230,130)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad"><circle cx="42" cy="32" r="13"/><circle cx="92" cy="30" r="12"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">6–9 mm</text></g><g transform="translate(420,130)"><rect width="140" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/><g fill="#cdd6df" stroke="#94a3ad"><circle cx="48" cy="30" r="17"/><circle cx="100" cy="30" r="16"/></g><text x="70" y="55" font-size="11" font-weight="700" text-anchor="middle" fill="#334155">9–12 mm</text></g></g></svg>',
          },
          caption: 'The six sizes of marble chip you can choose from for the investigation (chip size is the independent variable).',
        },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Home-made carbon dioxide fire extinguisher</text><ellipse cx="150" cy="180" rx="90" ry="58" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/><path d="M70,160 q-2,40 16,52 q64,18 128,0 q18,-12 16,-52" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/><path d="M70,165 q80,30 160,0" fill="#bfe3f2" stroke="#3f7e98" stroke-width="1.5"/><path d="M62,168 q-30,-6 -44,18 q-4,8 4,12" fill="none" stroke="#64748b" stroke-width="6" stroke-linecap="round"/><ellipse cx="150" cy="132" rx="20" ry="8" fill="#94a3ad" stroke="#64748b"/><text x="150" y="250" font-size="11" text-anchor="middle" fill="#475569">teapot: vinegar + baking soda → CO₂</text><g fill="#8ad0ec" opacity="0.7"><circle cx="34" cy="180" r="6"/><circle cx="20" cy="196" r="7"/><circle cx="40" cy="206" r="6"/><circle cx="14" cy="212" r="5"/><circle cx="34" cy="222" r="6"/></g><text x="20" y="245" font-size="10" text-anchor="middle" fill="#3f7e98">CO₂ poured out</text><g><rect x="360" y="210" width="14" height="46" rx="2" fill="#f5deb3" stroke="#b08900"/><rect x="364" y="200" width="6" height="12" fill="#cbd5e1"/><line x1="380" y1="206" x2="392" y2="218" stroke="#d11a1a" stroke-width="3"/><line x1="392" y1="206" x2="380" y2="218" stroke="#d11a1a" stroke-width="3"/></g><g><rect x="420" y="210" width="14" height="46" rx="2" fill="#f5deb3" stroke="#b08900"/><rect x="424" y="200" width="6" height="12" fill="#cbd5e1"/><line x1="440" y1="206" x2="452" y2="218" stroke="#d11a1a" stroke-width="3"/><line x1="452" y1="206" x2="440" y2="218" stroke="#d11a1a" stroke-width="3"/></g><g><rect x="480" y="210" width="14" height="46" rx="2" fill="#f5deb3" stroke="#b08900"/><path d="M487,188 q8,8 0,16 q-8,-8 0,-16Z" fill="#ffb020" stroke="#e8772e"/></g><g><rect x="528" y="210" width="14" height="46" rx="2" fill="#f5deb3" stroke="#b08900"/><path d="M535,188 q8,8 0,16 q-8,-8 0,-16Z" fill="#ffb020" stroke="#e8772e"/></g><text x="470" y="278" font-size="11" text-anchor="middle" fill="#475569">candles: ✗ = extinguished · 🔥 = still lit</text></svg>',
      },
      caption: 'Carbon dioxide produced in the teapot is poured over a row of lit candles; the student counts how many are extinguished.',
    },
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
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Run (in the order recorded)', 'Mass of baking soda / g', 'Number of candles extinguished'],
            rows: [
              ['1', '5', '9'],
              ['2', '1', '2'],
              ['3', '3', '6'],
              ['4', '4', '7'],
              ['5', '2', '4'],
            ],
          },
          caption: 'The student\'s raw results, written down in the order the runs were carried out (not yet ordered). Organize these into a clear results table.',
        },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Handheld', 'Hanging', 'Ball'],
        rows: [
          ['Weight / kg', '3.2', '5.6', '1.3'],
          ['Area extinguished / m²', '2', '3', '35'],
          ['Expiry time', 'Periodic refill', '5 yr periodic maintenance', '5 yr'],
          ['Direction', 'One point at a time', 'Vertically downward', 'Uniformly all directions'],
          ['Operation', 'Manual by trained user', 'Automatic by sensors', 'Drop or throw into fire'],
        ],
      },
      caption: 'Data about three dry-powder fire extinguishers. Use this table for parts (a) and (b).',
    },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><text x="160" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Adenosine</text><text x="480" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Caffeine</text><g stroke="#1f2d3a" stroke-width="2" fill="none"><polygon points="120,70 152,80 152,114 120,124 100,97"/><polygon points="152,80 188,72 200,100 188,128 152,114"/></g><text x="124" y="62" font-size="12" fill="#1f2d3a">NH₂</text><text x="110" y="100" font-size="12" fill="#1f2d3a">N</text><text x="172" y="78" font-size="12" fill="#1f2d3a">N</text><text x="196" y="104" font-size="12" fill="#1f2d3a">N</text><text x="156" y="120" font-size="12" fill="#1f2d3a">N</text><g stroke="#1f2d3a" stroke-width="2" fill="none"><polygon points="120,150 150,160 142,190 110,190 100,160"/></g><line x1="120" y1="124" x2="120" y2="150" stroke="#1f2d3a" stroke-width="2"/><text x="84" y="158" font-size="12" fill="#1f2d3a">O</text><text x="60" y="150" font-size="12" font-weight="700" fill="#b91c1c">HO</text><line x1="78" y1="146" x2="100" y2="158" stroke="#1f2d3a" stroke-width="2"/><circle cx="64" cy="146" r="20" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="100" y="214" font-size="12" font-weight="700" fill="#b91c1c">OH</text><text x="148" y="214" font-size="12" fill="#1f2d3a">OH</text><line x1="112" y1="190" x2="106" y2="204" stroke="#1f2d3a" stroke-width="2"/><line x1="140" y1="190" x2="146" y2="204" stroke="#1f2d3a" stroke-width="2"/><text x="64" y="300" font-size="11" text-anchor="middle" fill="#dc2626">circled group on adenosine</text><g stroke="#1f2d3a" stroke-width="2" fill="none"><polygon points="430,90 470,78 500,100 488,140 446,140 420,116"/><polygon points="500,100 540,96 552,130 520,150 488,140"/></g><text x="406" y="92" font-size="12" fill="#1f2d3a">N</text><text x="446" y="68" font-size="12" fill="#1f2d3a">CH₃</text><text x="414" y="124" font-size="12" fill="#1f2d3a">N</text><text x="556" y="98" font-size="12" fill="#1f2d3a">O</text><text x="558" y="138" font-size="12" fill="#1f2d3a">N–CH₃</text><text x="470" y="170" font-size="12" fill="#1f2d3a">CH₃</text><text x="416" y="160" font-size="12" fill="#1f2d3a">O</text><line x1="446" y1="140" x2="470" y2="160" stroke="#1f2d3a" stroke-width="2"/><line x1="488" y1="103" x2="500" y2="103" stroke="#1f2d3a" stroke-width="2"/><line x1="486" y1="111" x2="502" y2="111" stroke="#1f2d3a" stroke-width="2"/><ellipse cx="492" cy="107" rx="22" ry="16" fill="none" stroke="#dc2626" stroke-width="2.5"/><text x="486" y="300" font-size="11" text-anchor="middle" fill="#dc2626">circled group on caffeine (a C=C double bond in the ring)</text></svg>',
      },
      caption: 'Skeletal structures of adenosine and caffeine, with one functional group circled in red on each molecule.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the functional groups that are circled in adenosine and caffeine.',
        marks: 2,
        ph: 'Adenosine: OH = Alcohol; Caffeine: C=C in ring = Alkene',
        widget: 'inline_dropdown_select',
        widgetItems: ['Adenosine functional group', 'Caffeine functional group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
      {
        label: 'b',
        text: 'A hotel is investigating which sleep spray should be provided for long-distance bus drivers to improve their sleep while staying at the hotel. Using the information about the four sprays and your wider MYP studies, **discuss** and **evaluate** which sleep spray the hotel company should select.\n\nIn your answer include:\n\n• an outline of why enough sleep is important for long-distance bus drivers\n• a comparison of the impact of each spray on the quality of sleep\n• a discussion of the economic considerations of using different sleep sprays\n• an evaluation with justification of your choice of spray for the hotel to choose',
        marks: 13,
        ph: 'Crit D: safety for drivers; compare sleep quality from graphs; compare cost/lifespan; justified final choice',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Sleep spray', 'Cost / USD', 'Volume / ml', 'Cost per sleep / USD', 'Plant extracts', 'Sleep quality (on test night)'],
            rows: [
              ['Spray A', '23', '30', '0.38', 'Lavender, basil and jasmine', '1 time awake; 6 times interrupted sleep; 8 min awake'],
              ['Spray B', '—', '—', '—', '(see spray selector)', '(see spray selector)'],
              ['Spray C', '—', '—', '—', '(see spray selector)', '(see spray selector)'],
              ['Spray D', '—', '—', '—', '(see spray selector)', '(see spray selector)'],
            ],
          },
          caption: 'Data card for Spray A from the four-spray selector (Sprays A–D). Cost per sleep is the cost divided by the number of uses per bottle; sleep quality is read from each spray\'s overnight sleep trace.',
        },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Frankincense', 'Lavender'],
        rows: [
          ['Source', 'Boswellia tree (endangered species)', 'Lavender bush, easy to replant/harvest'],
          ['Growing conditions', 'Dry climate, rocky landscape, low water', 'Temperate climate, high water, used for food too'],
          ['Labour', 'Farmers in small villages', 'Large agricultural areas'],
          ['Social', 'Supports traditional farmers; low transport cost', 'Large corporations; highly industrialised'],
          ['Cost per 15 ml / $', '90.67', '30.67'],
          ['Mass of primary product per 15 ml extract / kg', '0.25', '1.36'],
          ['Production per year', '1–2 trees, avg 261 g/tree (family)', '3264 kg/acre (commercial)'],
        ],
      },
      caption: 'Production comparison of frankincense and lavender extracts. Use this data for the social, environmental and economic discussion.',
    },
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
