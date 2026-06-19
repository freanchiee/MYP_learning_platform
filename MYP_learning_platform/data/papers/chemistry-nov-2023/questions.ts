export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/**
 * Data-driven interactive artefact (matches lib/types.ts ArtefactSpec).
 * `component` names a renderer in components/exam/QuestionImage.tsx's switch;
 * `data` is passed to it. Used in the question/task context slot in place of
 * copyrighted figure screenshots.
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
  id: 'chemistry-nov-2023',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Cola / CO₂ / equilibrium (10m, Crit A) ──────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 10,
    stem: 'Carbon dioxide (CO₂) is dissolved in cola drinks under pressure to make them fizzy. When the can is opened, the pressure is released and the CO₂ comes out of solution.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 580 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="580" height="250" fill="#ffffff"/><text x="290" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Carbonated cola — CO₂ equilibrium</text><g><rect x="36" y="44" width="150" height="184" rx="10" fill="#f3e0c8" stroke="#b5894f" stroke-width="2"/><rect x="44" y="120" width="134" height="100" rx="4" fill="#6b3410" opacity="0.82"/><text x="111" y="62" font-size="10" text-anchor="middle" fill="#7a5a32">space above drink</text><text x="111" y="78" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">CO₂ gas</text><circle cx="70" cy="96" r="4" fill="#475569"/><circle cx="100" cy="104" r="4" fill="#475569"/><circle cx="138" cy="92" r="4" fill="#475569"/><circle cx="120" cy="108" r="4" fill="#475569"/><text x="111" y="176" font-size="11" font-weight="700" text-anchor="middle" fill="#ffffff">dissolved CO₂</text><circle cx="70" cy="200" r="3" fill="#cbd5e1"/><circle cx="96" cy="190" r="3" fill="#cbd5e1"/><circle cx="132" cy="206" r="3" fill="#cbd5e1"/><circle cx="150" cy="186" r="3" fill="#cbd5e1"/><g stroke="#0b7285" stroke-width="2" fill="none"><path d="M104 124 C112 116 112 116 120 124" marker-end="url(#au)"/><path d="M126 116 C118 124 118 124 110 116" marker-end="url(#ad)"/></g><defs><marker id="au" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker><marker id="ad" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker></defs></g><g><text x="380" y="120" font-size="20" font-weight="700" text-anchor="middle" fill="#1f2d3a">CO₂(aq) ⇌ CO₂(g)</text><text x="380" y="150" font-size="11" text-anchor="middle" fill="#64748b">An equilibrium between dissolved CO₂ and CO₂ gas.</text><g transform="translate(330,180)"><circle cx="0" cy="0" r="13" fill="#dc2626"/><text x="0" y="4" font-size="10" font-weight="700" text-anchor="middle" fill="#fff">O</text><circle cx="40" cy="0" r="16" fill="#334155"/><text x="40" y="4" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">C</text><circle cx="80" cy="0" r="13" fill="#dc2626"/><text x="80" y="4" font-size="10" font-weight="700" text-anchor="middle" fill="#fff">O</text><rect x="14" y="-3" width="22" height="2" fill="#334155"/><rect x="14" y="2" width="22" height="2" fill="#334155"/><rect x="55" y="-3" width="22" height="2" fill="#334155"/><rect x="55" y="2" width="22" height="2" fill="#334155"/><text x="40" y="36" font-size="10" text-anchor="middle" fill="#64748b">O=C=O (two double bonds)</text></g></g></svg>',
      },
      caption: 'CO₂ dissolved in the cola is in equilibrium with the CO₂ gas in the space above the drink.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the number of oxygen atoms in one molecule of carbon dioxide.',
        marks: 1,
        ph: '2 oxygen atoms',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**State** the chemical formula of carbon dioxide.',
        marks: 1,
        ph: 'CO₂',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Draw** a dot-and-cross diagram to show the bonding in a molecule of CO₂.',
        marks: 3,
        ph: 'Carbon in centre, two double bonds to O atoms, lone pairs on each O',
      },
      {
        label: 'd',
        text: '**Select** the symbols below to form an equation showing the equilibrium between dissolved carbon dioxide and the carbon dioxide gas in the space above the drink: ___ ⇌ ___',
        marks: 2,
        ph: 'CO₂(aq) ⇌ CO₂(g)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in the drink after a cold can of cola is taken outside on a warm day for 10 minutes.',
        marks: 3,
        ph: 'Less fizzy; equilibrium shifts; CO₂ solubility decreases with temperature',
      },
    ],
  },

  // ─── Q2: Phosphoric acid / sucrose / xylitol / aspartame (9m, Crit A) ────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 9,
    stem: 'Phosphoric acid (H₃PO₄) is added to cola to make it sour and to balance the sweet taste of sucrose. In some varieties of cola, sugar is replaced with artificial sweeteners such as xylitol and aspartame.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Substance', 'Role in cola', 'Molecular formula', 'Molar mass / g mol⁻¹'],
        rows: [
          ['Phosphoric acid', 'sour / acid taste', 'H₃PO₄', '98.0'],
          ['Sucrose', 'natural sweetener (sugar)', 'C₁₂H₂₂O₁₁', '342.3'],
          ['Xylitol', 'sugar-alcohol sweetener', 'C₅H₁₂O₅', '152.1'],
          ['Aspartame', 'artificial sweetener', 'C₁₄H₁₈N₂O₅', '294.3'],
        ],
      },
      caption: 'Relative atomic masses: H = 1.0, C = 12.0, N = 14.0, O = 16.0, P = 31.0.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of phosphoric acid, H₃PO₄. Give the unit.',
        marks: 2,
        ph: 'Mr = 98 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'In a can of cola there is 39 g of sucrose. The molar mass of sucrose is 342.3 g mol⁻¹. **Calculate** the number of moles of sucrose in one can of cola. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 39/342.3 = 0.114 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of xylitol from the molecular model shown.',
        marks: 3,
        ph: 'C₅H₁₂O₅',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="220" fill="#ffffff"/><text x="320" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Xylitol — molecular model (count the atoms)</text><g stroke="#475569" stroke-width="2"><line x1="70" y1="120" x2="170" y2="120"/><line x1="170" y1="120" x2="270" y2="120"/><line x1="270" y1="120" x2="370" y2="120"/><line x1="370" y1="120" x2="470" y2="120"/><line x1="70" y1="120" x2="40" y2="80"/><line x1="170" y1="120" x2="170" y2="70"/><line x1="270" y1="120" x2="270" y2="70"/><line x1="370" y1="120" x2="370" y2="70"/><line x1="470" y1="120" x2="500" y2="80"/></g><g font-size="13" font-weight="700" text-anchor="middle"><circle cx="70" cy="120" r="16" fill="#334155"/><text x="70" y="125" fill="#fff">C</text><circle cx="170" cy="120" r="16" fill="#334155"/><text x="170" y="125" fill="#fff">C</text><circle cx="270" cy="120" r="16" fill="#334155"/><text x="270" y="125" fill="#fff">C</text><circle cx="370" cy="120" r="16" fill="#334155"/><text x="370" y="125" fill="#fff">C</text><circle cx="470" cy="120" r="16" fill="#334155"/><text x="470" y="125" fill="#fff">C</text><circle cx="40" cy="80" r="13" fill="#dc2626"/><text x="40" y="85" fill="#fff" font-size="11">O</text><circle cx="170" cy="70" r="13" fill="#dc2626"/><text x="170" y="75" fill="#fff" font-size="11">O</text><circle cx="270" cy="70" r="13" fill="#dc2626"/><text x="270" y="75" fill="#fff" font-size="11">O</text><circle cx="370" cy="70" r="13" fill="#dc2626"/><text x="370" y="75" fill="#fff" font-size="11">O</text><circle cx="500" cy="80" r="13" fill="#dc2626"/><text x="500" y="85" fill="#fff" font-size="11">O</text></g><g font-size="11" text-anchor="middle" fill="#94a3ad"><text x="24" y="70">H</text><text x="170" y="52">H</text><text x="270" y="52">H</text><text x="370" y="52">H</text><text x="516" y="70">H</text></g><text x="320" y="180" font-size="12" text-anchor="middle" fill="#475569">Carbon backbone: HO–CH₂–CHOH–CHOH–CHOH–CH₂–OH</text><text x="320" y="200" font-size="11" text-anchor="middle" fill="#94a3ad">grey = carbon · red = oxygen · each carbon also carries hydrogen atoms (not all shown)</text></svg>',
          },
          caption: 'Each grey sphere is a carbon, each red sphere an oxygen. Use the displayed structure to count the atoms.',
        },
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of aspartame.',
        marks: 2,
        ph: 'Carboxylic acid (COOH), Ester (COO)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="240" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Aspartame — two highlighted functional groups</text><g stroke="#334155" stroke-width="2" fill="none"><polyline points="60,150 95,130 130,150 165,130 200,150"/><polyline points="200,150 235,130 270,150 305,130 340,150"/><polyline points="340,150 375,130 410,150"/><polygon points="430,115 470,115 450,80" fill="none"/><line x1="410" y1="150" x2="430" y2="115"/></g><g><text x="95" y="120" font-size="11" text-anchor="middle" fill="#0b7285">NH₂</text></g><g><circle cx="130" cy="150" r="2.5" fill="#334155"/></g><g stroke="#334155" stroke-width="2"><line x1="165" y1="130" x2="165" y2="100"/><line x1="305" y1="130" x2="305" y2="100"/></g><g font-size="11" text-anchor="middle" fill="#dc2626"><text x="165" y="94">O</text><text x="305" y="94">O</text></g><g><rect x="42" y="120" width="78" height="58" rx="8" fill="none" stroke="#e8590c" stroke-width="2.5" stroke-dasharray="5 3"/><text x="81" y="200" font-size="12" font-weight="700" text-anchor="middle" fill="#e8590c">Group 1</text><text x="81" y="138" font-size="10" text-anchor="middle" fill="#7a3d12">HO–C=O</text></g><g><rect x="386" y="92" width="84" height="74" rx="8" fill="none" stroke="#7048e8" stroke-width="2.5" stroke-dasharray="5 3"/><text x="428" y="200" font-size="12" font-weight="700" text-anchor="middle" fill="#7048e8">Group 2</text><text x="450" y="150" font-size="10" text-anchor="middle" fill="#3b2a7a">–C(=O)–O–CH₃</text></g><text x="310" y="226" font-size="11" text-anchor="middle" fill="#94a3ad">Group 1 is at one end of the molecule; Group 2 links to an –OCH₃ at the other end.</text></svg>',
          },
          caption: 'Identify each highlighted group: Group 1 (–COOH end) and Group 2 (–COO– link to OCH₃).',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Aluminium cans (5m, Crit A) ─────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 5,
    stem: 'For many years, food and drink have been stored in cans to make them easy to transport and store. Most cans were made from tin-plated steel. More recently, aluminium has been used to make cans.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Aluminium can', 'Tin-plated steel can'],
        rows: [
          ['Density / g cm⁻³', '2.70', '7.50'],
          ['Melting point / °C', '660.0', '1510'],
          ['Resistant to corrosion caused by', 'water, acids and bases', 'water'],
          ['Malleability relative to iron', 'very high', 'high'],
          ['Mohs hardness (resistance to scratching)', '2.5', '4.5'],
        ],
      },
      caption: 'Comparison of aluminium and tin-plated steel cans. Use these properties to explain the advantages of aluminium.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of aluminium.',
        marks: 1,
        ph: '2.8.3',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of aluminium cans compared to tin-plated steel cans.',
        marks: 4,
        ph: 'Less reactive (less likely to react with food); lighter (cheaper to transport); recyclable',
      },
    ],
  },

  // ─── Q4: Sugar solubility / candy floss (15m, Crit C) ───────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'In cooking, and in particular the manufacture of sweets, the mass of sugar in the stirring mixture will determine what type of sweets can be produced. A student decided to investigate the maximum mass of sugar that can be dissolved in 100 cm³ of water at different temperatures. The student\'s raw data is shown.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Maximum mass of sugar dissolved / g'],
        rows: [
          ['100', '480.00'],
          ['0', '100.00'],
          ['40', '250.00'],
          ['60', '346.00'],
          ['20', '210.00'],
          ['80', '370.00'],
        ],
      },
      caption: 'The student\'s raw data, recorded in the order the measurements were taken (not in temperature order).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two labelled columns with units; data in ascending temperature order',
      },
      {
        label: 'b',
        text: '**Present** the data in part (a) in a graph.',
        marks: 5,
        ph: 'Scatter graph; x=Temperature/°C; y=Mass of sugar/g; suitable scale; all points; line of best fit',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Maximum mass of sugar dissolved vs temperature',
            xLabel: 'Temperature',
            yLabel: 'Maximum mass of sugar dissolved',
            xUnit: '°C',
            yUnit: 'g',
            xMin: 0,
            xMax: 100,
            yMin: 0,
            yMax: 500,
            xStep: 20,
            yStep: 100,
            lobf: true,
            dataPoints: [
              { x: 0, y: 100 },
              { x: 20, y: 210 },
              { x: 40, y: 250 },
              { x: 60, y: 346 },
              { x: 80, y: 370 },
              { x: 100, y: 480 },
            ],
          },
          caption: 'A scatter graph of the data with a line of best fit, plotted in ascending temperature order.',
        },
      },
      {
        label: 'c',
        text: '**Select** the graph that shows the most appropriate line of best fit for the second student\'s data.',
        marks: 1,
        ph: 'Graph C — best straight line through majority of points',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><text x="310" y="18" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which graph shows the most appropriate line of best fit?</text><g><g transform="translate(20,30)"><rect width="270" height="140" fill="#ffffff" stroke="#cbd5e1"/><text x="8" y="14" font-size="11" font-weight="700" fill="#1f2d3a">A</text><line x1="30" y1="120" x2="255" y2="120" stroke="#94a3ad"/><line x1="30" y1="20" x2="30" y2="120" stroke="#94a3ad"/><circle cx="55" cy="108" r="3" fill="#2563eb"/><circle cx="90" cy="92" r="3" fill="#2563eb"/><circle cx="125" cy="84" r="3" fill="#2563eb"/><circle cx="160" cy="58" r="3" fill="#2563eb"/><circle cx="195" cy="56" r="3" fill="#2563eb"/><circle cx="230" cy="34" r="3" fill="#2563eb"/><polyline points="55,108 90,92 125,84 160,58 195,56 230,34" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="140" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">dot-to-dot (not a line of best fit)</text></g><g transform="translate(330,30)"><rect width="270" height="140" fill="#ffffff" stroke="#cbd5e1"/><text x="8" y="14" font-size="11" font-weight="700" fill="#1f2d3a">B</text><line x1="30" y1="120" x2="255" y2="120" stroke="#94a3ad"/><line x1="30" y1="20" x2="30" y2="120" stroke="#94a3ad"/><circle cx="55" cy="108" r="3" fill="#2563eb"/><circle cx="90" cy="92" r="3" fill="#2563eb"/><circle cx="125" cy="84" r="3" fill="#2563eb"/><circle cx="160" cy="58" r="3" fill="#2563eb"/><circle cx="195" cy="56" r="3" fill="#2563eb"/><circle cx="230" cy="34" r="3" fill="#2563eb"/><line x1="40" y1="60" x2="245" y2="40" stroke="#dc2626" stroke-width="1.5"/><text x="140" y="138" font-size="9" text-anchor="middle" fill="#94a3ad">line too high (above most points)</text></g><g transform="translate(20,195)"><rect width="270" height="150" fill="#ffffff" stroke="#16a34a" stroke-width="2"/><text x="8" y="14" font-size="11" font-weight="700" fill="#16a34a">C</text><line x1="30" y1="125" x2="255" y2="125" stroke="#94a3ad"/><line x1="30" y1="22" x2="30" y2="125" stroke="#94a3ad"/><circle cx="55" cy="112" r="3" fill="#2563eb"/><circle cx="90" cy="96" r="3" fill="#2563eb"/><circle cx="125" cy="88" r="3" fill="#2563eb"/><circle cx="160" cy="60" r="3" fill="#2563eb"/><circle cx="195" cy="60" r="3" fill="#2563eb"/><circle cx="230" cy="38" r="3" fill="#2563eb"/><line x1="42" y1="112" x2="245" y2="40" stroke="#dc2626" stroke-width="1.5"/><text x="140" y="144" font-size="9" text-anchor="middle" fill="#16a34a">straight line through the middle of the points</text></g><g transform="translate(330,195)"><rect width="270" height="150" fill="#ffffff" stroke="#cbd5e1"/><text x="8" y="14" font-size="11" font-weight="700" fill="#1f2d3a">D</text><line x1="30" y1="125" x2="255" y2="125" stroke="#94a3ad"/><line x1="30" y1="22" x2="30" y2="125" stroke="#94a3ad"/><circle cx="55" cy="112" r="3" fill="#2563eb"/><circle cx="90" cy="96" r="3" fill="#2563eb"/><circle cx="125" cy="88" r="3" fill="#2563eb"/><circle cx="160" cy="60" r="3" fill="#2563eb"/><circle cx="195" cy="60" r="3" fill="#2563eb"/><circle cx="230" cy="38" r="3" fill="#2563eb"/><path d="M42,118 Q150,118 245,42" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="140" y="144" font-size="9" text-anchor="middle" fill="#94a3ad">curved line (data is linear)</text></g></g></svg>',
          },
          caption: 'Four candidate lines of best fit (A–D) for the same scatter of points.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier in part (c). **Suggest** what the expected mass of sugar would be.',
        marks: 2,
        ph: 'Outlier at 60°C; expected mass ≈ 290 g',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Second student\'s data — spot the outlier',
            xLabel: 'Temperature',
            yLabel: 'Maximum mass of sugar dissolved',
            xUnit: '°C',
            yUnit: 'g',
            xMin: 0,
            xMax: 100,
            yMin: 0,
            yMax: 500,
            xStep: 20,
            yStep: 100,
            lobf: true,
            dataPoints: [
              { x: 0, y: 100 },
              { x: 20, y: 170 },
              { x: 40, y: 230 },
              { x: 60, y: 346 },
              { x: 80, y: 350 },
              { x: 100, y: 420 },
            ],
          },
          caption: 'One point sits well above the line of best fit. Read off the value the line predicts at that temperature.',
        },
      },
      {
        label: 'e',
        text: 'Candy floss is made from pure sugar. The machine melts sugar at 160°C, spins it through holes to form fine threads, and the threads solidify in the collection bowl. **Select** the state and expected behaviour of sugar in each location when the candy floss machine is operating.',
        marks: 4,
        ph: 'Spinning container = liquid (takes shape of container); Collection bowl = solid (no change of shape)',
        artefact: {
          component: 'ParticleSim',
          data: {
            // NOTE: the multi-container ParticleSim renders containers in a fixed
            // solid→liquid→gas order by index, so the cooled (solid) bowl is listed
            // FIRST and the hot (liquid) spinning container SECOND. This makes the
            // particle picture match the chemistry: cooled threads = solid lattice,
            // molten sugar at ≈160 °C = liquid sliding past one another.
            title: 'Sugar in the candy-floss machine',
            mode: 'states',
            substance: 'sugar',
            containers: [
              'Collection bowl (cooled) — solid threads',
              'Spinning container (≈160 °C) — molten sugar',
            ],
            options: ['solid', 'liquid'],
          },
          caption: 'Left: cooled, solidified threads in the collection bowl (solid). Right: molten sugar in the heated spinning container (liquid).',
        },
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Sugar in spinning container — State',
          'Sugar in collection bowl — State',
          'Sugar in spinning container — Behaviour',
          'Sugar in collection bowl — Behaviour',
        ],
        widgetOptions: [
          'Evaporates',
          'Gas',
          'Liquid',
          'No change of shape when changing container',
          'Solid',
          'Sublimes',
          'Takes the shape of the container',
        ],
      },
    ],
  },

  // ─── Q5: Eggs / Maillard reaction investigation (12m, Crit B) ────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Chemical changes take place when food is cooked. When eggs are cooked there is a change in colour, state or even gas produced, all of which are indicators that a chemical change has taken place. The Maillard reaction between sugars and proteins causes browning in foods such as bread and toast.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Egg sample', 'Time in boiling water / min', 'Appearance after cooking'],
        rows: [
          ['1', '2', 'runny yolk, partly set white'],
          ['2', '5', 'soft-set yolk, firm white'],
          ['3', '8', 'firm yolk, fully set white'],
          ['4', '12', 'firm pale-grey yolk, fully set white'],
        ],
      },
      caption: 'A student timed how long identical eggs were boiled and recorded how cooked each became — the basis of the investigation in part (a).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV=time/duration; DV=how cooked/colour; CV=size of egg; CV=temperature of water',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). If... Then... Because...',
        marks: 3,
        ph: 'If time increases, then egg is more cooked/white/solid, because more chemical change',
      },
      {
        label: 'c',
        text: '**Outline** why bread turns brown when toast is made.',
        marks: 3,
        ph: 'Sugar and protein react with heat; Maillard reaction causes brown colour',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">The Maillard reaction (browning of toast)</text><g><rect x="40" y="70" width="110" height="60" rx="8" fill="#fff7ed" stroke="#e8590c"/><text x="95" y="96" font-size="12" font-weight="700" text-anchor="middle" fill="#7a3d12">sugars</text><text x="95" y="116" font-size="10" text-anchor="middle" fill="#7a5a32">(in bread)</text><text x="170" y="106" font-size="22" font-weight="700" text-anchor="middle" fill="#475569">+</text><rect x="190" y="70" width="110" height="60" rx="8" fill="#eef4f7" stroke="#0b7285"/><text x="245" y="96" font-size="12" font-weight="700" text-anchor="middle" fill="#0b5563">proteins</text><text x="245" y="116" font-size="10" text-anchor="middle" fill="#3f6b78">(amino acids)</text></g><g transform="translate(330,100)"><line x1="0" y1="0" x2="70" y2="0" stroke="#475569" stroke-width="2" marker-end="url(#mh)"/><text x="35" y="-10" font-size="11" font-weight="700" text-anchor="middle" fill="#dc2626">heat</text><defs><marker id="mh" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#475569"/></marker></defs></g><g><rect x="420" y="64" width="150" height="72" rx="8" fill="#7a4a23" stroke="#5a3416"/><text x="495" y="92" font-size="12" font-weight="700" text-anchor="middle" fill="#ffffff">brown products</text><text x="495" y="112" font-size="10" text-anchor="middle" fill="#f1e0cf">+ new flavours/aromas</text></g><text x="300" y="176" font-size="11" text-anchor="middle" fill="#94a3ad">A new substance with a new colour forms — evidence of a chemical change.</text></svg>',
          },
          caption: 'Heat drives sugars and proteins in the bread to react, forming brown-coloured products (the Maillard reaction).',
        },
      },
      {
        label: 'd',
        text: 'A student lowered the temperature of the toaster and heated a piece of bread for the same time. **Predict** how the appearance would be different to the original toast shown. **Justify** your answer.',
        marks: 2,
        ph: 'Less brown; lower temperature → slower/fewer Maillard reactions',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Original toast (higher toaster temperature)</text><g transform="translate(150,40)"><rect x="0" y="0" width="120" height="100" rx="16" fill="#8a5a2b" stroke="#5a3416" stroke-width="2"/><rect x="14" y="14" width="92" height="74" rx="10" fill="#a8703a"/></g><text x="280" y="170" font-size="11" text-anchor="middle" fill="#475569">Same bread, same time — only the toaster temperature is changed in part (d).</text><text x="280" y="190" font-size="11" text-anchor="middle" fill="#94a3ad">Predict and justify the appearance at a lower temperature.</text></svg>',
          },
          caption: 'The original toast at the higher toaster temperature. Predict how it would look if the temperature were lowered for the same time.',
        },
      },
    ],
  },

  // ─── Q6: Lemon juice / MR-P / Crit B design (25m, Crit B) ───────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 25,
    stem: 'Protein is an important part of the human diet. Another method of causing chemical change in food is to use acids from fruit juice. Ceviche uses lemon juice and lime juice to "cook" fish. A company has developed a new laboratory-based meat substitute called MR-P that is cooked using lime juice and lemon juice. After 25 minutes, the product is ready to eat. A student investigated the best juice to cook MR-P by measuring the force needed to break samples cooked in different juices. The student\'s hypothesis was that cooking would make the MR-P easier to break (a lower breaking force) than uncooked MR-P.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Force needed to break MR-P samples cooked in different juices',
        mode: 'bars',
        variable: 'Sample',
        metric: 'Force needed to break the sample / N',
        bars: [
          { label: 'Uncooked', value: 250 },
          { label: 'Lime juice', value: 310 },
          { label: 'Lemon juice', value: 295 },
          { label: 'Orange juice', value: 265 },
        ],
        note: 'The dashed threshold for a sample to be "suitable to eat" is 280 N. Cooked samples are HARDER to break than uncooked, not easier.',
      },
      caption: 'Breaking force for each sample. Compare each cooked sample with the uncooked control (250 N) and the 280 N suitability threshold.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the diagrams above to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; force to break cooked meat is HIGHER than uncooked',
      },
      {
        label: 'b',
        text: '**State** which samples of MR-P would be suitable to eat (breaking force threshold = 280 N). **Justify** your answer using data.',
        marks: 2,
        ph: 'Lime and lemon; lemon and lime — breaking forces > 280 N',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only juice (no MR-P).',
        marks: 1,
        ph: 'As a control / baseline / for direct comparison',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Outline** an improvement to the method in part (b).',
        marks: 2,
        ph: 'Repeat the experiment; calculate an average to reduce random error',
      },
      {
        label: 'e',
        text: 'The student wanted to know the minimum pH that would cook MR-P, between pH 2.0 and 3.8. They decided to use HCl to model the behaviour of fruit juice. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on (breaking force of MR-P)?',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Fruit juice', 'pH'],
            rows: [
              ['Lime', '2.0'],
              ['Lemon', '2.6'],
              ['Orange', '3.8'],
            ],
          },
          caption: 'pH of the fruit juices used to cook MR-P. The student wants the minimum pH that cooks MR-P, between pH 2.0 and 3.8.',
        },
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would cook MR-P. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV=pH; DV=breaking force; CVs=size of sample+time; equipment list; ≥5 pH levels; ≥3 trials; acid safety',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="280" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus: measuring the force to break MR-P</text><rect x="60" y="250" width="400" height="14" rx="3" fill="#94a3b8"/><rect x="90" y="60" width="16" height="190" fill="#cbd5e1" stroke="#94a3b8"/><rect x="414" y="60" width="16" height="190" fill="#cbd5e1" stroke="#94a3b8"/><rect x="90" y="56" width="340" height="14" rx="3" fill="#94a3b8"/><g><rect x="220" y="78" width="80" height="34" rx="6" fill="#eef4f7" stroke="#0b7285" stroke-width="2"/><text x="260" y="100" font-size="11" font-weight="700" text-anchor="middle" fill="#0b5563">force meter</text><text x="318" y="100" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">/ N</text><line x1="260" y1="112" x2="260" y2="150" stroke="#475569" stroke-width="3"/><path d="M250,150 L270,150 L260,166 Z" fill="#475569"/></g><g><rect x="200" y="186" width="120" height="20" rx="4" fill="#d9a066" stroke="#a8703a"/><text x="260" y="200" font-size="10" font-weight="700" text-anchor="middle" fill="#5a3416">MR-P sample</text><rect x="206" y="206" width="14" height="30" fill="#94a3b8"/><rect x="300" y="206" width="14" height="30" fill="#94a3b8"/></g><text x="260" y="262" font-size="0" fill="#fff"> </text><text x="260" y="276" font-size="10" text-anchor="middle" fill="#94a3ad">The sample rests on two supports; the force meter pushes down until the sample breaks.</text></svg>',
          },
          caption: 'A force meter pushes down on a fixed-size MR-P sample until it breaks; the breaking force is read in newtons.',
        },
      },
    ],
  },

  // ─── Q7: Carbon footprint / plant-based burgers (9m, Crit D) ────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Many people around the world are choosing to reduce the amount of meat they eat. The graphs show data comparing food production of different diets. Due to increasing demand for meat substitutes, a growing industry provides plant-based products such as beef burgers and chicken nuggets. The table below shows nutritional information for a plant-based burger designed to taste like meat.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Carbon footprint of the average US diet, split by food group',
        mode: 'bars',
        variable: 'Food group',
        metric: 'Carbon footprint / kg CO₂ eq per person per year',
        bars: [
          { label: 'Fats, oils & sugars', value: 250 },
          { label: 'Grains', value: 300 },
          { label: 'Fruit & vegetables', value: 400 },
          { label: 'Proteins', value: 1050 },
        ],
        note: 'The four food groups together make up the total carbon footprint of the average US diet (≈ 2000 kg CO₂ eq).',
      },
      caption: 'Contribution of each food group to the carbon footprint of the average US diet. Total ≈ 2000 kg CO₂ eq; the non-protein groups total ≈ 950.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Using** the graphs above, calculate the carbon footprint from the production of protein in the average US diet.',
        marks: 2,
        ph: '2000 − 950 = 1050 kg CO₂ eq (accept 1050–1100)',
      },
      {
        label: 'b',
        text: '**Using** the graphs in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of plant-based burgers compared to beef burgers. In your answer you should include:\n• the advantages of the production of plant-based protein compared to meat-based protein\n• a comparison of the nutritional data\n• your opinion of why people may choose plant-based burgers rather than beef burgers.',
        marks: 7,
        ph: 'AD: lower carbon/water/land; Nutritional data: similar energy/protein, less fat; opinion justified',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Per 100 g (patty only)', 'Plant-based burger', 'Beef burger'],
            rows: [
              ['Energy / kJ', '1000', '1000'],
              ['Total fat / g', '14', '13'],
              ['of which saturates / g', '9', '0'],
              ['Protein / g', '19', '29'],
              ['Fibre / g', '3', '0'],
              ['Salt / g', 'less than 1', '0'],
            ],
          },
          caption: 'Nutritional information for a plant-based burger designed to taste like a beef burger, compared with a beef burger.',
        },
      },
    ],
  },

  // ─── Q8: Lab-grown meat (15m, Crit D) ───────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'In the effort to reduce the environmental impact of the meat industry and to meet the demands of a growing global population, companies have developed a process to grow meat in a lab using a small sample of animal cells. The lab-grown cells combine to form muscle tissue. During the growth process, the cells could be harvested from a live animal and then checked for animal borne disease. From one tissue sample, 80,000 burgers can be grown compared to 1,250 from one cow. The cost of a lab-grown burger has reduced significantly to $10 per burger in 2020. In the future, it is anticipated that more people will choose lab-grown burgers and they will become widely available.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Lab-grown meat', 'Conventional (farmed) meat'],
        rows: [
          ['Burgers from one starting sample / cow', '80 000 (per tissue sample)', '1 250 (per cow)'],
          ['Cost per burger (2020)', '$10', 'a few dollars'],
          ['Land and water use', 'much lower', 'high'],
          ['Greenhouse-gas emissions', 'lower', 'higher'],
          ['Animal welfare', 'cells taken without slaughter', 'animals slaughtered'],
          ['Disease control', 'cells checked for animal-borne disease', 'varies'],
        ],
      },
      caption: 'Comparison of lab-grown and conventional meat. Use this — with the information in the video — to discuss and evaluate lab-grown meat.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information in the video, **discuss and evaluate** the use of lab-grown meat from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: less land/water/emissions; Ethical: animal cells but no slaughter; Socio-economic: cheaper/accessible; Health: tested for disease; justified conclusion',
      },
    ],
  },
]
