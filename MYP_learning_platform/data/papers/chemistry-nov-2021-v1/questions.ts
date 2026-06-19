export type Widget =
  | 'radio_select'
  | 'inline_dropdown_select'
  | 'variable_classify'
  | 'match_drag_drop'
  | 'fill_blank'

/**
 * Data-driven interactive artefact (context/stimulus slot). `component` names a
 * renderer registered in components/exam/QuestionImage.tsx; `data` is passed to
 * it as render_data. Mirrors lib/types.ts ArtefactSpec.
 */
export interface Artefact {
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
  artefact?: Artefact
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
  id: 'chemistry-nov-2021-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2021,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 (7 marks, Crit A) ─── Rock salt mining / NaCl / potassium / chlorine ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table — rock salt and halite',
    marks: 7,
    stem: 'Rock salt, also called halite, is a naturally occurring mineral that has been used by humans for thousands of years as a food preservative and seasoning. The main component of rock salt is sodium chloride. Ancient salt-mining communities in Central Europe developed sophisticated techniques for extracting salt from underground deposits. Salt mines also yield other minerals including potassium-bearing salts and chloride-containing compounds used in industrial processes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Elements found in rock salt deposits</text><g><rect x="60" y="44" width="62" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="91" y="60" font-size="9" text-anchor="middle" fill="#64748b">Group 1 · Period 3</text><text x="91" y="79" font-size="18" font-weight="700" text-anchor="middle" fill="#0b7285">Na</text><text x="91" y="91" font-size="8" text-anchor="middle" fill="#64748b">sodium · 11</text></g><g><rect x="60" y="110" width="62" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="91" y="126" font-size="9" text-anchor="middle" fill="#64748b">Group 1 · Period 4</text><text x="91" y="145" font-size="18" font-weight="700" text-anchor="middle" fill="#0b7285">K</text><text x="91" y="157" font-size="8" text-anchor="middle" fill="#64748b">potassium · 19</text></g><g><rect x="420" y="77" width="62" height="50" fill="#fff7ed" stroke="#5b6b78"/><text x="451" y="93" font-size="9" text-anchor="middle" fill="#64748b">Group 17 · Period 3</text><text x="451" y="112" font-size="18" font-weight="700" text-anchor="middle" fill="#e8590c">Cl</text><text x="451" y="124" font-size="8" text-anchor="middle" fill="#64748b">chlorine · 17</text></g><text x="60" y="190" font-size="11" fill="#475569">Na: 2.8.1   ·   K: 2.8.8.1   ·   Cl: 2.8.7</text><text x="60" y="210" font-size="10" fill="#94a3ad">K has one more occupied shell than Na — its outer electron is further from the nucleus.</text><text x="60" y="228" font-size="10" fill="#94a3ad">Group number (main groups) = outer-shell electrons; period number = occupied shells.</text></svg>',
      },
      caption: 'Sodium and potassium (Group 1) and chlorine (Group 17), with their electron arrangements.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the formula of sodium carbonate.',
        marks: 1,
        ph: 'Select one formula',
        widget: 'radio_select',
        widgetOptions: ['Na₂O', 'NaCl', 'Na₂CO₃', 'NaOH'],
      },
      {
        label: 'b',
        text: 'Rock salt deposits often contain potassium chloride (KCl). Use the periodic table to **state** the group and period of potassium. Group: ___ Period: ___',
        marks: 2,
        ph: 'Group 1, Period 4',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**State** the electron configuration of chlorine.',
        marks: 1,
        ph: '2.8.7 or 1s² 2s² 2p⁶ 3s² 3p⁵',
      },
      {
        label: 'd',
        text: 'The diagram shows the electron arrangements of sodium (2.8.1) and potassium (2.8.8.1). Using these electron arrangements, **explain** why potassium is more reactive than sodium.',
        marks: 3,
        ph: 'More electron shells → outer e⁻ further from nucleus → less attraction → easier to remove',
      },
    ],
  },

  // ─── Q2 (9 marks, Crit A) ─── Swimming pool disinfection / chlorine ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Bonding and chemical equations — pool disinfection',
    marks: 9,
    stem: 'Swimming pools are disinfected using chlorine-based compounds to kill harmful bacteria and prevent the spread of disease. Sodium hypochlorite (NaClO) is widely used as a pool disinfectant. When dissolved in water it releases chlorine, which is the active disinfecting agent.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="220" fill="#ffffff"/><text x="270" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bonding in a chlorine molecule, Cl₂</text><circle cx="190" cy="120" r="52" fill="#e6f5f0" stroke="#0b7285" stroke-width="1.5"/><circle cx="350" cy="120" r="52" fill="#e6f5f0" stroke="#0b7285" stroke-width="1.5"/><text x="178" y="126" font-size="22" font-weight="700" fill="#0b7285">Cl</text><text x="338" y="126" font-size="22" font-weight="700" fill="#0b7285">Cl</text><circle cx="262" cy="113" r="4" fill="#e8590c"/><circle cx="278" cy="113" r="4" fill="#1971c2"/><circle cx="262" cy="127" r="4" fill="#e8590c"/><circle cx="278" cy="127" r="4" fill="#1971c2"/><circle cx="150" cy="86" r="4" fill="#e8590c"/><circle cx="166" cy="80" r="4" fill="#e8590c"/><circle cx="214" cy="80" r="4" fill="#e8590c"/><circle cx="230" cy="86" r="4" fill="#e8590c"/><circle cx="150" cy="154" r="4" fill="#e8590c"/><circle cx="230" cy="154" r="4" fill="#e8590c"/><circle cx="310" cy="86" r="4" fill="#1971c2"/><circle cx="326" cy="80" r="4" fill="#1971c2"/><circle cx="374" cy="80" r="4" fill="#1971c2"/><circle cx="390" cy="86" r="4" fill="#1971c2"/><circle cx="310" cy="154" r="4" fill="#1971c2"/><circle cx="390" cy="154" r="4" fill="#1971c2"/><text x="180" y="200" font-size="11" fill="#475569">One shared pair of electrons = a single covalent bond.</text><g><circle cx="430" cy="186" r="4" fill="#e8590c"/><circle cx="442" cy="186" r="4" fill="#1971c2"/><text x="452" y="190" font-size="10" fill="#94a3ad">outer electrons of each Cl atom</text></g></svg>',
      },
      caption: 'Two chlorine atoms share one pair of electrons (a single covalent bond); each atom keeps three lone pairs.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of bonds in chlorine gas (Cl₂).',
        marks: 1,
        ph: 'Covalent',
        widget: 'radio_select',
        widgetOptions: ['Ionic', 'Covalent', 'Metallic', 'Coordinate'],
      },
      {
        label: 'b',
        text: '**Select** the Lewis structure (dot cross diagram) of chlorine gas (Cl₂).',
        marks: 1,
        ph: 'Option C — :Cl–Cl: with three lone pairs on each Cl and one bonding pair',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'c',
        text: 'Sodium hypochlorite decomposes slowly when exposed to light. When sodium hypochlorite decomposes, it forms sodium chloride and oxygen. **Write down** the balanced equation for the decomposition of sodium hypochlorite. You should include state symbols in your answer.',
        marks: 3,
        ph: '2NaClO(aq) → 2NaCl(aq) + O₂(g)',
      },
      {
        label: 'd',
        text: '**Select** the hazard symbol for chlorine gas.',
        marks: 1,
        ph: 'Option A — toxic (skull and crossbones)',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'e',
        text: 'Pool operators vary the concentration of NaClO in pool water. Using your knowledge of collision theory, **explain** how the concentration of NaClO affects the rate at which bacteria are killed.',
        marks: 3,
        ph: 'Higher concentration → more NaClO particles → more frequent successful collisions with bacteria → faster kill rate',
      },
    ],
  },

  // ─── Q3 (12 marks, Crit A/C) ─── Air fresheners / noble gases / Freon-22 / butane ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atmosphere and particle theory — air fresheners',
    marks: 12,
    stem: 'Air fresheners are used in homes and offices worldwide. Many types release scented compounds into the air, or use compressed gas propellants to spray liquid fragrance.',
    artefact: {
      component: 'PieChart',
      data: {
        kind: 'doughnut',
        title: 'Composition of dry air',
        unit: '%',
        series: [
          { name: 'Nitrogen (N₂)', value: 78, color: '#0b7285' },
          { name: 'Oxygen (O₂)', value: 20.9, color: '#1971c2' },
          { name: 'Argon (Ar)', value: 0.9, color: '#9c36b5' },
          { name: 'Other gases (incl. CO₂)', value: 0.2, color: '#94a3b8' },
        ],
      },
      caption: 'Percentage of each gas in dry air. Hover a slice to read its share.',
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
        text: 'Air freshener propellant canisters contain different types of gas molecules. **Select** the correct classification for each molecule as Monatomic gas, Diatomic gas, or Polyatomic gas.',
        marks: 3,
        ph: 'N₂→Diatomic; Argon→Monatomic; O₃→Polyatomic',
        widget: 'match_drag_drop',
        widgetItems: ['N₂ (nitrogen)', 'Argon', 'O₃ (ozone)'],
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
        text: 'Some older air fresheners used Freon-22 (chemical name chlorodifluoromethane, CHClF₂) as a propellant. Use the periodic table and the formula CHClF₂ to **calculate** the relative molecular mass of Freon-22.',
        marks: 2,
        ph: '12 + 1 + 35.5 + 2(19) = 86.5',
      },
      {
        label: 'e',
        text: 'The scent molecules from an air freshener diffuse through the room. Using particle theory, **explain** why the scent spreads faster in a warm room at 30°C than in a cool room at 10°C.',
        marks: 3,
        ph: 'Higher temperature → particles have more kinetic energy → move faster → diffuse more quickly',
      },
      {
        label: 'f',
        text: 'Modern eco-friendly air fresheners use butane (C₄H₁₀) as a propellant instead of CFCs. **Draw** the structure of butane.',
        marks: 1,
        ph: '4 carbon chain, CH₃–CH₂–CH₂–CH₃, all C–C and C–H bonds shown',
      },
    ],
  },

  // ─── Q4 (12 marks, Crit B/C) ─── Indium melting point / indium-bismuth alloys ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Melting points and alloys — indium and indium-bismuth',
    marks: 12,
    stem: 'Indium is a soft, silvery metal used in electronics and LCD screens. Its melting point is a useful characteristic for quality control in manufacturing. Two students measured the melting point of indium using different equipment. Student A used a thermometer and Student B used a digital temperature probe connected to a data logger.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Alloy type', 'Bismuth / %', 'Indium / %', 'Melting point / °C', 'Density / g cm⁻³'],
        rows: [
          ['Type A', '0', '100', '157', '7.31'],
          ['Type B', '10', '90', '143', '7.40'],
          ['Type C', '30', '70', '110', '7.58'],
          ['Type D', '50', '50', '89', '7.76'],
          ['Type E', '67', '33', '72', '7.91'],
        ],
      },
      caption: 'Melting point and density of indium–bismuth alloys at different bismuth percentages.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the temperature shown on the thermometer for Student A.',
        marks: 1,
        ph: '156.5°C',
        widget: 'fill_blank',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="300" height="220" fill="#ffffff"/><text x="150" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Student A — thermometer reading</text><g transform="translate(120,30)"><rect x="0" y="0" width="22" height="150" rx="11" fill="#f1f5f9" stroke="#475569" stroke-width="1.5"/><circle cx="11" cy="168" r="20" fill="#e8590c" stroke="#475569" stroke-width="1.5"/><rect x="6" y="70" width="10" height="100" fill="#e8590c"/><rect x="6" y="168" width="10" height="2" fill="#e8590c"/></g><g stroke="#475569" stroke-width="1" font-size="10" fill="#334155"><line x1="146" y1="40" x2="156" y2="40"/><text x="160" y="44">160</text><line x1="146" y1="65" x2="160" y2="65" stroke-width="1.5"/><text x="164" y="69" font-weight="700" fill="#e8590c">156.5</text><line x1="146" y1="80" x2="156" y2="80"/><text x="160" y="84">155</text><line x1="146" y1="120" x2="156" y2="120"/><text x="160" y="124">150</text><line x1="146" y1="160" x2="156" y2="160"/><text x="160" y="164">145</text></g><text x="150" y="212" font-size="10" text-anchor="middle" fill="#94a3ad">Scale in °C. The liquid reaches the 156.5 mark.</text></svg>',
          },
          caption: 'The mercury thermometer used by Student A; read the temperature at the top of the liquid column.',
        },
      },
      {
        label: 'b',
        text: 'Student B used a temperature probe and plotted a graph. **Determine** the melting point of indium from Student B\'s graph.',
        marks: 1,
        ph: '156.8°C',
        widget: 'fill_blank',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Student B: temperature of indium during melting',
            xLabel: 'Time',
            yLabel: 'Temperature',
            xUnit: 'min',
            yUnit: '°C',
            xMin: 0,
            xMax: 10,
            yMin: 140,
            yMax: 170,
            xStep: 2,
            yStep: 5,
            dataPoints: [
              { x: 0, y: 142.0 },
              { x: 1, y: 149.0 },
              { x: 2, y: 156.8 },
              { x: 3, y: 156.8 },
              { x: 4, y: 156.8 },
              { x: 5, y: 156.8 },
              { x: 6, y: 158.0 },
              { x: 7, y: 162.0 },
              { x: 8, y: 166.0 },
            ],
          },
          caption: 'The flat plateau is the melting point — read the temperature where the line stays steady.',
        },
      },
      {
        label: 'c',
        text: '**State** which student has measured the melting point correctly and justify your answer.',
        marks: 2,
        ph: 'Student B — measured temperature when all indium had melted and temperature was steady (plateau)',
      },
      {
        label: 'd',
        text: 'The table shows the melting points of different indium–bismuth alloys with varying percentages of bismuth. **State** the trend in melting point as the percentage of bismuth increases.',
        marks: 1,
        ph: 'Melting point decreases as percentage of bismuth increases',
      },
      {
        label: 'e',
        text: 'Using the data from the table, **formulate** a hypothesis to predict how the density of an indium–bismuth alloy changes as the percentage of bismuth increases. Use the If/Then/Because format.',
        marks: 3,
        ph: 'If bismuth % increases then density increases because bismuth has higher density than indium',
      },
      {
        label: 'f',
        text: 'Using the graph, **predict** the melting point of an alloy made of 70% indium and 30% bismuth.',
        marks: 2,
        ph: '110°C (±10)',
        widget: 'fill_blank',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Melting point of indium–bismuth alloys',
            xLabel: 'Bismuth content',
            yLabel: 'Melting point',
            xUnit: '%',
            yUnit: '°C',
            xMin: 0,
            xMax: 70,
            yMin: 60,
            yMax: 170,
            xStep: 10,
            yStep: 10,
            dataPoints: [
              { x: 0, y: 157 },
              { x: 10, y: 143 },
              { x: 30, y: 110 },
              { x: 50, y: 89 },
              { x: 67, y: 72 },
            ],
          },
          caption: 'Read the melting point off the curve at 30% bismuth.',
        },
      },
      {
        label: 'g',
        text: '**Select** the type of indium–bismuth alloy most suitable for soldering components that must not exceed 120°C and justify your choice.',
        marks: 2,
        ph: 'Type C — melting point below 120°C so it can be soldered without damaging heat-sensitive components',
      },
    ],
  },

  // ─── Q5 (7 marks, Crit A/B) ─── Boiling point elevation / pasta cooking ───
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Boiling point elevation — dissolved solutes in cooking',
    marks: 7,
    stem: 'A student investigated whether adding different solutes to water changes its boiling point. The student tested salt water, sugar water, vinegar solution, baking soda solution and pure water.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Solution (1 spoon solute in 200 cm³ water)', 'Solute added', 'Boiling point / °C'],
        rows: [
          ['Pure water (control)', 'none', '100.0'],
          ['Salt water', 'sodium chloride', '101.7'],
          ['Sugar water', 'sucrose', '100.5'],
          ['Vinegar solution', 'ethanoic acid', '100.6'],
          ['Baking soda solution', 'sodium hydrogencarbonate', '100.4'],
        ],
      },
      caption: 'Boiling point measured for each solution; pure water is the control.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the gas that is produced when baking soda (NaHCO₃) is heated.',
        marks: 1,
        ph: 'Carbon dioxide (CO₂)',
      },
      {
        label: 'b',
        text: '**State** the variables in the student\'s experiment. Independent variable: ___ Dependent variable: ___',
        marks: 2,
        ph: 'IV: type of solute; DV: boiling point / boiling temperature',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Suggest** two control variables for this experiment.',
        marks: 2,
        ph: 'Any two: volume of water; concentration/mass of solute; type of heating equipment; starting temperature; container material',
      },
      {
        label: 'd',
        text: '**Formulate** a research question for this experiment.',
        marks: 2,
        ph: 'How does the type of solute affect the boiling point/temperature of the solution?',
      },
    ],
  },

  // ─── Q6 (14 marks, Crit C) ─── Coffee roasting data analysis ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis — coffee bean roasting temperatures',
    marks: 14,
    stem: 'The roasting of coffee beans involves carefully controlled temperature changes. During roasting, chemical reactions including the Maillard reaction and caramelisation change the flavour compounds in the beans. The table shows the internal temperatures of coffee bean samples at different percentages of moisture content for three different roast levels.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Time / min', 'Moisture content / %', 'Roast A (light) temp / °C', 'Roast B (dark) temp / °C', 'Roast C (medium) temp / °C'],
        rows: [
          ['0', '12', '95', '95', '95'],
          ['4', '9', '150', '152', '151'],
          ['8', '5', '171', '195', '185'],
          ['12', '3', '186', '204', '197'],
          ['16', '2', '195', '204', '200'],
        ],
      },
      caption: 'Internal bean temperature and moisture content during three roast profiles. Roast B plateaus at the highest temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Plot** the data for Roast B on the graph provided. Your graph should include: missing data points, a title linking temperature change with time, and correct axis labels (time in minutes, temperature in °C).',
        marks: 5,
        ph: 'Plot all Roast B data points; title: Temperature of coffee beans Roast B vs time; x-axis: time (min); y-axis: temperature (°C)',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Roast B — temperature of coffee beans vs time',
            xLabel: 'Time',
            yLabel: 'Temperature',
            xUnit: 'min',
            yUnit: '°C',
            xMin: 0,
            xMax: 16,
            yMin: 80,
            yMax: 220,
            xStep: 2,
            yStep: 20,
            dataPoints: [
              { x: 0, y: 95 },
              { x: 4, y: 152 },
              { x: 8, y: 195 },
              { x: 16, y: 204 },
            ],
          },
          caption: 'The plotted points for Roast B; the 12-minute reading is missing — add it from the table.',
        },
      },
      {
        label: 'b',
        text: '**Determine** which roast level represents a dark roast and justify your answer using the graph.',
        marks: 2,
        ph: 'Roast B — graph shows plateau at highest temperature (~204°C) characteristic of dark roast',
      },
      {
        label: 'c',
        text: 'Using the table, **calculate** the average internal temperature of the three roast levels (A, B and C) at the 12-minute mark.',
        marks: 3,
        ph: '(186 + 204 + 197) / 3 = 587 / 3 = 195.7°C',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: 'Using the table, **determine** the temperature at the 8-minute mark for the medium roast (Roast C).',
        marks: 2,
        ph: '185°C (±2)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Suggest** why the data point for the 5% moisture sample might be an outlier.',
        marks: 1,
        ph: 'Sample had incorrect moisture content measured; probe not properly inserted; oven temperature fluctuation',
      },
      {
        label: 'f',
        text: '**Suggest** how the experiment could be improved to better understand the relationship between moisture content and roasting temperature.',
        marks: 1,
        ph: 'Test samples with intermediate moisture content percentages between the values already tested',
      },
    ],
  },

  // ─── Q7 (15 marks, Crit B) ─── Coffee bean moisture investigation design ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation design — moisture content and coffee roasting time',
    marks: 15,
    stem: 'A student wants to investigate how the moisture content of coffee beans affects the time needed to complete roasting. **Design** a complete investigation to test this.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Bean sample', 'Moisture content / % (independent variable)', 'Oven temperature / °C (control)', 'Mass of beans / g (control)', 'Roasting time to first crack / min (dependent variable)'],
        rows: [
          ['Sample 1', '12', '200', '100', 'to be measured'],
          ['Sample 2', '9', '200', '100', 'to be measured'],
          ['Sample 3', '6', '200', '100', 'to be measured'],
          ['Sample 4', '3', '200', '100', 'to be measured'],
        ],
      },
      caption: 'A blank results plan: vary moisture content, hold oven temperature and bean mass constant, and measure roasting time (repeat each sample three times).',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a full investigation into how the moisture content of coffee beans affects the time needed to complete roasting. Include: (1) identification of independent and dependent variables and at least two control variables; (2) equipment needed; (3) a clear step-by-step method; (4) a plan for sufficient data; (5) a safety precaution linked to a specific hazard.',
        marks: 15,
        ph: 'IV: % moisture content of beans; DV: roasting time (minutes); CVs: oven temperature, mass of beans, bean variety; Method: dry beans to different moisture levels, roast at fixed temp, measure time until first crack; Sufficient data: ≥3 trials per moisture level, calculate averages; Safety: hot oven — use heat-resistant gloves',
      },
    ],
  },

  // ─── Q8 (12 marks, Crit D/A/C) ─── Sodium-ion batteries ───
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Sodium-ion batteries — environmental evaluation',
    marks: 12,
    stem: 'Sodium-ion batteries are an emerging technology for energy storage in electric vehicles and grid systems. Sodium is more abundant than lithium and can be extracted from seawater. The relative atomic mass of sodium is 22.99.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Sodium-ion battery', 'Lithium-ion battery'],
        rows: [
          ['Abundance in Earth’s crust', 'high (2.3%)', 'low (0.002%)'],
          ['Main source', 'seawater and rock salt', 'hard-rock and brine mining'],
          ['Relative raw-material cost', 'low', 'high'],
          ['Energy stored per kg', 'lower', 'higher'],
          ['Mining impact', 'less land/water disruption', 'habitat loss, high water use'],
          ['Technology maturity', 'still developing', 'well established'],
        ],
      },
      caption: 'Comparison of sodium-ion and lithium-ion batteries across resource, cost and impact factors.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** the symbol for a sodium ion.',
        marks: 1,
        ph: 'Na⁺',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A sodium-ion battery has a mass of 8 kg and is made entirely of sodium. **Calculate** the number of moles of sodium in this battery.',
        marks: 2,
        ph: 'n = 8000 / 22.99 = 348.0 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Evaluate** the environmental and social consequences of using sodium-ion batteries compared to lithium-ion batteries for electric vehicles. In your answer, consider advantages and disadvantages of both options and state your conclusion.',
        marks: 9,
        ph: 'Env: Na from seawater — less land disruption; Li mining — habitat loss, water use; Social: Na more abundant/cheaper → wider access; Li mining — community displacement; Conclusion: Na-ion batteries more sustainable resource-wise but technology still developing',
      },
    ],
  },

  // ─── Q9 (12 marks, Crit D) ─── Fast fashion vs sustainable fashion ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Fast fashion vs sustainable fashion — resource use and social impact',
    marks: 12,
    stem: 'The fast fashion model produces large quantities of cheap clothing at high speed, encouraging frequent purchases and disposal. Sustainable fashion aims to reduce environmental impact by using eco-friendly materials, fair labour practices, and designing clothes for longer use.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Aspect', 'Fast fashion model', 'Sustainable fashion model'],
        rows: [
          ['Price to consumer', 'low upfront cost', 'higher upfront cost'],
          ['Garment lifespan', 'short — designed to be replaced', 'long — designed for durability'],
          ['Water use per garment', 'high', 'lower (recycled / organic fibres)'],
          ['Main materials', 'virgin polyester, conventional cotton', 'recycled fibres, organic cotton'],
          ['Textile waste sent to landfill', 'high', 'low (reuse and recycling)'],
          ['Labour conditions', 'often low wages, unsafe factories', 'fair wages, safer conditions'],
        ],
      },
      caption: 'Comparison of the fast fashion and sustainable fashion models on economic, resource and social aspects.',
    },
    tasks: [
      {
        label: '',
        text: '**Evaluate** the sustainable fashion model compared to the fast fashion model. In your answer, consider economic aspects, use of resources, social impacts, and state a justified conclusion.',
        marks: 12,
        ph: 'Economic: fast fashion cheap for consumers but hidden environmental costs; sustainable fashion higher upfront cost but lower long-term waste costs; Resources: fast fashion uses more water/chemicals; sustainable uses recycled fibres, organic cotton; Social: fast fashion — sweatshop labour; sustainable — fair wages, safer working conditions; Conclusion: sustainable fashion reduces long-term harm despite higher cost',
      },
    ],
  },
]
