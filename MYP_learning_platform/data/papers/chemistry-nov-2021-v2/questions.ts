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

export interface Artefact {
  component: string
  data: Record<string, unknown>
  caption?: string
}

export interface Question {
  id: number
  crit: 'A' | 'B' | 'C' | 'D'
  type: 'extended'
  topic: string
  marks: number
  stem: string
  figImages?: string[]
  artefact?: Artefact
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
  id: 'chemistry-nov-2021-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 (7 marks, Crit A) ─── Limestone caves / calcium / magnesium / neon ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table — limestone caves and minerals',
    marks: 7,
    stem: 'Limestone caves are formed when slightly acidic rainwater dissolves calcium carbonate (CaCO₃) in limestone rock over thousands of years. The resulting caves contain dramatic formations called stalactites and stalagmites made from calcium and magnesium minerals. Cave systems also trap noble gases such as neon in pockets underground, which scientists use to date the age of the rock formations.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bohr models: sodium vs rubidium</text><g><circle cx="150" cy="130" r="6" fill="#e8590c"/><circle cx="150" cy="130" r="22" fill="none" stroke="#94a3ad"/><circle cx="150" cy="130" r="42" fill="none" stroke="#94a3ad"/><circle cx="150" cy="130" r="62" fill="none" stroke="#94a3ad"/><circle cx="150" cy="108" r="3.5" fill="#0b7285"/><circle cx="150" cy="88" r="3.5" fill="#0b7285"/><circle cx="172" cy="98" r="3.5" fill="#0b7285"/><circle cx="150" cy="68" r="3.5" fill="#1f9d55"/><text x="150" y="208" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Sodium (Na)</text><text x="150" y="224" font-size="9" text-anchor="middle" fill="#64748b">3 shells · 2.8.1</text></g><g><circle cx="400" cy="130" r="6" fill="#e8590c"/><circle cx="400" cy="130" r="18" fill="none" stroke="#94a3ad"/><circle cx="400" cy="130" r="34" fill="none" stroke="#94a3ad"/><circle cx="400" cy="130" r="50" fill="none" stroke="#94a3ad"/><circle cx="400" cy="130" r="66" fill="none" stroke="#94a3ad"/><circle cx="400" cy="130" r="82" fill="none" stroke="#94a3ad"/><circle cx="400" cy="112" r="3.2" fill="#0b7285"/><circle cx="400" cy="96" r="3.2" fill="#0b7285"/><circle cx="400" cy="80" r="3.2" fill="#0b7285"/><circle cx="400" cy="64" r="3.2" fill="#0b7285"/><circle cx="400" cy="48" r="3.5" fill="#1f9d55"/><text x="400" y="208" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rubidium (Rb)</text><text x="400" y="224" font-size="9" text-anchor="middle" fill="#64748b">5 shells · 2.8.18.8.1</text></g><text x="280" y="130" font-size="9" text-anchor="middle" fill="#1f9d55">green = outer e⁻</text></svg>',
      },
      caption: 'Bohr models of a sodium atom (3 shells) and a rubidium atom (5 shells). The green outer electron is further from the nucleus in rubidium.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the formula of calcium hydroxide.',
        marks: 1,
        ph: 'Select one formula',
        widget: 'radio_select',
        widgetOptions: ['CaO', 'CaCO₃', 'Ca(OH)₂', 'CaSO₄'],
      },
      {
        label: 'b',
        text: 'Cave minerals often contain magnesium compounds. Use the periodic table to **state** the group and period of magnesium. Group: ___ Period: ___',
        marks: 2,
        ph: 'Group 2, Period 3',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** the electron configuration of neon.',
        marks: 1,
        ph: '2.8 or 1s² 2s² 2p⁶',
      },
      {
        label: 'd',
        text: 'The diagram below shows the Bohr model of a rubidium atom and a sodium atom. Using the Bohr model, **explain** why rubidium is more reactive than sodium.',
        marks: 3,
        ph: 'More electron shells → outer e⁻ further from nucleus → less attraction → easier to remove',
      },
    ],
  },

  // ─── Q2 (9 marks, Crit A) ─── Wound care / ethanol antiseptic ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding and chemical equations — ethanol antiseptic',
    marks: 9,
    stem: 'Ethanol (C₂H₅OH) is widely used as an antiseptic in hand sanitisers, wound cleaners, and surgical preparations. When applied to skin it evaporates rapidly, killing bacteria through dehydration of cells. The effectiveness of ethanol as an antiseptic depends on its concentration — typically 70% ethanol solutions are most effective.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Time to kill a standard bacterial sample at different ethanol concentrations',
        mode: 'bars',
        variable: 'Ethanol concentration (increasing →)',
        metric: 'Time to kill the bacteria / s',
        bars: [
          { label: '20%', value: 240 },
          { label: '40%', value: 140 },
          { label: '60%', value: 70 },
          { label: '70%', value: 45 },
          { label: '90%', value: 60 },
        ],
        note: 'Higher concentration → more frequent successful collisions with bacteria → faster kill, until very high concentration when too little water slows protein denaturation.',
      },
      caption: 'A more concentrated ethanol solution kills the bacteria faster (shorter bar) — used to reason with collision theory in part (e).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonds in ethanol (C₂H₅OH).',
        marks: 1,
        ph: 'Covalent',
        widget: 'radio_select',
        widgetOptions: ['Ionic', 'Covalent', 'Metallic', 'Coordinate'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (dot cross diagram) of water (H₂O).',
        marks: 1,
        ph: 'Option B — H–O–H with two lone pairs on O',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Ethanol burns completely in air to produce carbon dioxide and water. **Write down** the balanced equation for the complete combustion of ethanol. You should include state symbols in your answer.',
        marks: 3,
        ph: 'C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l)',
      },
      {
        label: 'd',
        text: '**Select** the hazard symbol for ethanol.',
        marks: 1,
        ph: 'Option B — flammable (flame symbol)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'Different concentrations of ethanol hand sanitiser are available. Using your knowledge of collision theory, **explain** how the concentration of ethanol affects the rate at which bacteria are killed.',
        marks: 3,
        ph: 'Higher concentration → more ethanol molecules → more frequent successful collisions with bacteria → faster kill rate',
      },
    ],
  },

  // ─── Q3 (12m, Crit A/C) ─── Car exhaust / atmosphere / Freon-11 / ethane ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atmosphere and particle theory — car exhaust systems',
    marks: 12,
    stem: 'Car engines burn petrol or diesel to produce energy for movement. The exhaust gases released contain a mixture of substances that enter the atmosphere, where they can affect air quality and climate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="260" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Composition of dry air</text><g transform="translate(150,140)"><path d="M0 0 L0 -90 A90 90 0 0 1 79.6 -42.0 Z" fill="#2563eb"/><path d="M0 0 L79.6 -42.0 A90 90 0 0 1 87.7 20.2 Z" fill="#0b7285"/><path d="M0 0 L87.7 20.2 A90 90 0 0 1 84.0 32.4 Z" fill="#e8590c"/><path d="M0 0 L84.0 32.4 A90 90 0 0 1 0 90 A90 90 0 0 1 -90 0 A90 90 0 0 1 0 -90 Z" fill="#94a3ad"/></g><g font-size="11"><rect x="330" y="60" width="14" height="14" fill="#2563eb"/><text x="352" y="72" fill="#1f2d3a">Nitrogen (N₂) — 78.0%</text><rect x="330" y="86" width="14" height="14" fill="#0b7285"/><text x="352" y="98" fill="#1f2d3a">Oxygen (O₂) — 20.9%</text><rect x="330" y="112" width="14" height="14" fill="#e8590c"/><text x="352" y="124" fill="#1f2d3a">Argon (Ar) — 0.93%</text><rect x="330" y="138" width="14" height="14" fill="#94a3ad"/><text x="352" y="150" fill="#1f2d3a">CO₂ + other gases — 0.17%</text></g><text x="280" y="246" font-size="9" text-anchor="middle" fill="#64748b">Percentages by volume of dry air at sea level.</text></svg>',
      },
      caption: 'Pie chart of the composition of dry air — read off the two most common gases and their percentages for part (a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the diagram below to **state** the two most common gases in the atmosphere and their percentage. Gas 1: ___ Percentage: ___% Gas 2: ___ Percentage: ___%',
        marks: 2,
        ph: 'Nitrogen 78%, Oxygen 20.9%',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Exhaust gases contain a variety of molecules. **Select** the correct classification for each molecule as Monatomic gas, Diatomic gas, or Polyatomic gas.',
        marks: 3,
        ph: 'CO₂→Polyatomic; Argon→Monatomic; N₂→Diatomic',
        widget: 'match_drag_drop',
        widgetItems: ['CO₂ (carbon dioxide)', 'Argon', 'N₂ (nitrogen)'],
        widgetOptions: ['Monatomic gas', 'Polyatomic gas', 'Diatomic gas'],
      },
      {
        label: 'c',
        text: '**State** a reason why argon is found naturally as a monatomic gas.',
        marks: 1,
        ph: 'Full outer electron shell — unreactive/inert; does not bond with other atoms',
      },
      {
        label: 'd',
        text: 'Old car air conditioning systems used Freon-11 (trichlorofluoromethane, CCl₃F) as a refrigerant. Here is the structure of Freon-11. Use the periodic table to **calculate** the relative molecular mass of Freon-11.',
        marks: 2,
        ph: '12 + 3(35.5) + 19 = 12 + 106.5 + 19 = 137.5',
      },
      {
        label: 'e',
        text: 'Exhaust fumes containing nitrogen dioxide (NO₂) diffuse into the surrounding air. Using particle theory, **explain** why NO₂ diffuses more quickly on a hot summer day (35°C) than on a cold winter day (0°C).',
        marks: 3,
        ph: 'Higher temperature → NO₂ particles have more kinetic energy → move faster → diffuse more quickly',
      },
      {
        label: 'f',
        text: 'Modern catalytic converters can convert exhaust hydrocarbons into harmless products. **Draw** the structure of ethane (C₂H₆), a simple hydrocarbon found in exhaust gases.',
        marks: 1,
        ph: 'Two carbon atoms, CH₃–CH₃, all C–C and C–H bonds shown correctly',
      },
    ],
  },

  // ─── Q4 (12m, Crit B/C) ─── Bismuth melting point / bismuth-tin alloys ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Melting points and alloys — bismuth and bismuth-tin',
    marks: 12,
    stem: 'Bismuth is a brittle, silvery-pink metal used in cosmetics, pharmaceuticals, and low-melting alloys. Its melting point is an important property for quality control. Two students measured the melting point of bismuth in the laboratory. Student A used a thermometer and Student B used a digital temperature probe connected to a data logger.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Melting point of bismuth–tin alloys vs % tin',
        xLabel: 'Percentage of tin',
        xUnit: '%',
        yLabel: 'Melting point',
        yUnit: '°C',
        xMin: 0,
        xMax: 60,
        yMin: 120,
        yMax: 280,
        xStep: 10,
        yStep: 20,
        dataPoints: [
          { x: 0, y: 271 },
          { x: 10, y: 250 },
          { x: 20, y: 222 },
          { x: 30, y: 200 },
          { x: 40, y: 180 },
          { x: 50, y: 158 },
          { x: 57, y: 138 },
        ],
      },
      caption: 'Melting point falls as the percentage of tin increases, reaching the low-melting eutectic near 138°C — read off this graph for parts (d), (f) and (g).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the temperature shown on the thermometer for Student A.',
        marks: 1,
        ph: '271.5°C',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'Student B used a temperature probe and plotted a graph. **Determine** the melting point of bismuth from Student B\'s graph.',
        marks: 1,
        ph: '271.3°C',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** which student has measured the melting point correctly and justify your answer.',
        marks: 2,
        ph: 'Student B — measured temperature when all bismuth had melted and temperature was steady (plateau)',
      },
      {
        label: 'd',
        text: 'The table shows the melting points of different bismuth–tin alloys with varying percentages of tin. **State** the trend in melting point as the percentage of tin increases.',
        marks: 1,
        ph: 'Melting point decreases as percentage of tin increases',
      },
      {
        label: 'e',
        text: 'Using the data from the table, **formulate** a hypothesis to predict how the hardness of a bismuth–tin alloy changes as the percentage of tin increases. Use the If/Then/Because format.',
        marks: 3,
        ph: 'If tin % increases then hardness increases because tin is harder than bismuth',
      },
      {
        label: 'f',
        text: 'Using the graph, **predict** the melting point of an alloy made of 60% bismuth and 40% tin.',
        marks: 2,
        ph: '180°C (±10)',
        widget: 'fill_blank',
      },
      {
        label: 'g',
        text: '**Select** the type of bismuth–tin alloy most suitable for making fire sprinkler fuse plugs that must melt at exactly 138°C and justify your choice.',
        marks: 2,
        ph: 'Type B — melting point is approximately 138°C matching the required activation temperature',
      },
    ],
  },

  // ─── Q5 (7m, Crit A/B) ─── Osmosis / beetroot cells investigation ───
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Osmosis and diffusion — beetroot cell investigation',
    marks: 7,
    stem: 'A student cut equal-sized pieces of beetroot and placed them into solutions of different salt concentrations to investigate how salt concentration affects osmosis. After 30 minutes the student observed changes in the mass and appearance of the beetroot pieces.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Change in beetroot mass after 30 min vs salt concentration',
        xLabel: 'Salt concentration',
        xUnit: 'mol dm⁻³',
        yLabel: 'Change in mass',
        yUnit: '%',
        xMin: 0,
        xMax: 1,
        yMin: -10,
        yMax: 8,
        xStep: 0.2,
        yStep: 2,
        lobf: true,
        dataPoints: [
          { x: 0, y: 6 },
          { x: 0.2, y: 3.5 },
          { x: 0.4, y: 0.5 },
          { x: 0.6, y: -3 },
          { x: 0.8, y: -6 },
          { x: 1, y: -8.5 },
        ],
      },
      caption: 'In dilute salt the beetroot gains mass (water enters by osmosis); in concentrated salt it loses mass (water leaves). The independent variable is salt concentration; the dependent variable is the change in mass.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the process by which water moves across a semi-permeable membrane from a dilute to a concentrated solution.',
        marks: 1,
        ph: 'Osmosis',
      },
      {
        label: 'b',
        text: '**State** the variables in the student\'s experiment. Independent variable: ___ Dependent variable: ___',
        marks: 2,
        ph: 'IV: salt concentration; DV: mass of beetroot / change in mass',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables for this experiment.',
        marks: 2,
        ph: 'Any two: size/mass of beetroot pieces; volume of solution; temperature of solution; time in solution; surface area of beetroot',
      },
      {
        label: 'd',
        text: '**Formulate** a research question for this experiment.',
        marks: 2,
        ph: 'How does the salt concentration affect the change in mass of beetroot pieces?',
      },
    ],
  },

  // ─── Q6 (14m, Crit C) ─── Candle wax solidification data analysis ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis — candle wax composition and solidification',
    marks: 14,
    stem: 'Candle wax is a mixture of paraffin wax and stearic acid. The ratio of paraffin to stearic acid affects the solidification temperature and hardness of the candle. The table shows the solidification temperatures of candle wax samples with different percentages of paraffin wax for three different candle types.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Paraffin wax / %', 'Candle Type A — solidification temp / °C', 'Candle Type B — solidification temp / °C', 'Candle Type C — solidification temp / °C'],
        rows: [
          ['20', '60.0', '38.0', '60.5'],
          ['40', '54.0', '55.0', '54.0'],
          ['60', '48.0', '57.0', '47.5'],
          ['80', '42.0', '52.0', '41.5'],
          ['100', '37.0', '46.0', '37.0'],
        ],
      },
      caption: 'Solidification temperature of three candle types at different percentages of paraffin wax. Note the 20% Type B value looks anomalous; Type B holds the highest plateau (~57°C). Plot the Type B column for part (a) and read values for parts (b)–(e).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** the data for Candle Type B on the graph provided. Your graph should include: missing data points, a title linking temperature change with time, and correct axis labels (time in minutes, temperature in °C).',
        marks: 5,
        ph: 'Plot all Type B data points; title: Temperature of candle wax Type B vs time; x-axis: time (min); y-axis: temperature (°C)',
      },
      {
        label: 'b',
        text: '**Determine** which candle type forms the hardest candle and justify your answer using the graph.',
        marks: 2,
        ph: 'Type B — graph shows highest solidification temperature plateau (~57°C) indicating strongest crystal structure and hardest wax',
      },
      {
        label: 'c',
        text: '**Calculate** the average solidification temperature of the three samples with 40% paraffin.',
        marks: 3,
        ph: '(54.0 + 55.0 + 54.0) / 3 = 163.0 / 3 = 54.3°C',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Determine** the solidification temperature of Candle Type B at 60% paraffin content from the graph you plotted.',
        marks: 2,
        ph: '57°C (±1)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Suggest** why the data point for the 20% paraffin candle might be an anomalous result.',
        marks: 1,
        ph: 'Candle sample not fully solidified during measurement; incorrect % paraffin mixed; thermometer placed incorrectly',
      },
      {
        label: 'f',
        text: '**Suggest** how the experiment could be improved to better understand the relationship between paraffin content and solidification temperature.',
        marks: 1,
        ph: 'Test samples with intermediate percentages of paraffin between the values already investigated',
      },
    ],
  },

  // ─── Q7 (15m, Crit B) ─── Candle wax dye investigation design ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation design — candle dye concentration and burn time',
    marks: 15,
    stem: 'A student wants to investigate how the concentration of dye added to candle wax affects the burn time of the candle. **Design** a complete investigation to test this.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Example preliminary data: candle burn time vs dye concentration',
        mode: 'bars',
        variable: 'Dye concentration (increasing →)',
        metric: 'Burn time / minutes',
        bars: [
          { label: '0%', value: 95 },
          { label: '1%', value: 88 },
          { label: '2%', value: 80 },
          { label: '4%', value: 70 },
          { label: '6%', value: 61 },
        ],
        note: 'Illustrative trial data only — the independent variable is dye concentration (%) and the dependent variable is burn time (minutes). Your design should produce data like this with repeats and averages.',
      },
      caption: 'Example of the kind of data this investigation produces: as dye concentration increases the burn time changes. Use it to frame the variables, method and sufficient-data plan.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a full investigation into how the concentration of dye in candle wax affects the burn time of the candle. Include: (1) identification of independent and dependent variables and at least two control variables; (2) equipment needed; (3) a clear step-by-step method; (4) a plan for sufficient data; (5) a safety precaution linked to a specific hazard.',
        marks: 15,
        ph: 'IV: % dye concentration; DV: burn time (minutes); CVs: mass of wax, candle wick length, candle diameter; Method: melt wax, add measured dye, pour into mould, set wick, allow to cool, light candle, measure time until extinguished; Sufficient data: ≥3 trials per dye concentration, calculate averages; Safety: naked flame — do not lean over candle, keep flammables away',
      },
    ],
  },

  // ─── Q8 (12m, Crit D/A/C) ─── Cobalt batteries / electric vehicles ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Cobalt in batteries — environmental evaluation',
    marks: 12,
    stem: 'Cobalt is a key component of lithium-cobalt-oxide cathodes in many electric vehicle batteries. Cobalt is primarily mined in the Democratic Republic of Congo. The relative atomic mass of cobalt is 58.93.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Impact', 'Cobalt mining (EV batteries)', 'Crude-oil extraction (petrol engines)'],
        rows: [
          ['Main emissions / pollution', 'Mine tailings, toxic dust, heavy-metal water pollution', 'CO₂, NOₓ and SOₓ; oil spills, refinery emissions'],
          ['Climate effect', 'One-off mining footprint; EV runs with low ongoing CO₂', 'Continuous CO₂ released each time fuel is burned'],
          ['Land / habitat', 'Open-pit and artisanal mines degrade land', 'Drilling, pipelines and spills damage habitats'],
          ['Social concerns', 'Reports of unsafe and child labour in DRC', 'Economic dependence on oil states; air-quality health effects'],
          ['Resource lifetime', 'Cobalt is finite but recyclable from old batteries', 'Crude oil is finite and burned only once'],
        ],
      },
      caption: 'Comparison of the environmental and social consequences of cobalt mining versus crude-oil extraction — use both columns to support the evaluation and conclusion in part (c).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** the symbol for a cobalt(II) ion.',
        marks: 1,
        ph: 'Co²⁺',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A cobalt battery cathode material has a mass of 6 kg and is assumed to be entirely cobalt. **Calculate** the number of moles of cobalt in this material.',
        marks: 2,
        ph: 'n = 6000 / 58.93 = 101.8 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Evaluate** the environmental and social consequences of cobalt mining for electric vehicle batteries compared to crude oil (petrol) extraction for combustion engines. In your answer, consider advantages and disadvantages of both and state your conclusion.',
        marks: 9,
        ph: 'Env: cobalt mining — land degradation, toxic waste, water pollution; crude oil — CO₂ NOₓ SOₓ emissions, oil spills, climate change; Social: cobalt — labour rights issues DRC, child labour concerns; crude oil — economic dependence on oil states, health from air pollution; Conclusion: both have severe impacts; electric vehicles better for climate if cobalt supply chain is regulated',
      },
    ],
  },

  // ─── Q9 (12m, Crit D) ─── Right-to-repair vs planned obsolescence ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Right-to-repair vs planned obsolescence — resource use and sustainability',
    marks: 12,
    stem: 'Planned obsolescence is a design strategy where products are intentionally made to become outdated or stop working after a set time, encouraging consumers to buy new ones. The right-to-repair movement advocates for products that can be easily repaired and upgraded, reducing electronic waste.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Aspect', 'Planned obsolescence', 'Right-to-repair'],
        rows: [
          ['Economic — consumer', 'Higher long-term costs; must keep re-buying', 'Lower costs; cheaper to repair than replace'],
          ['Economic — manufacturer', 'Repeat sales drive company profit', 'Lower new-unit sales but new repair-service revenue'],
          ['Use of resources', 'High demand for rare metals; rapid depletion', 'Longer product life; less mining and material use'],
          ['Electronic waste', 'Large volumes of e-waste, often exported', 'Less e-waste as devices last longer'],
          ['Social impact', 'Few repair jobs; throwaway culture', 'Creates local repair jobs; more equitable access'],
        ],
      },
      caption: 'Side-by-side comparison of the planned-obsolescence and right-to-repair models across economic, resource and social aspects — use it to structure the evaluation and justified conclusion.',
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the right-to-repair model compared to the planned obsolescence model. In your answer, consider economic aspects, use of resources, social impacts, and state a justified conclusion.',
        marks: 12,
        ph: 'Economic: planned obsolescence drives company profits but increases costs for consumers; right-to-repair reduces consumer costs but may reduce manufacturer revenue; Resources: planned obsolescence creates massive e-waste and depletes rare metals; right-to-repair extends product lifespan reducing mining; Social: right-to-repair creates local repair jobs, reduces e-waste in developing countries; Conclusion: right-to-repair is more sustainable and equitable in the long term',
      },
    ],
  },
]
