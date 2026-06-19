import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2018 · VARIANT 1  (isomorphic to chemistry-nov-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW everyday-life context, with a
// self-contained data-driven INTERACTIVE artefact in each question's context
// slot (no external image files). Every answer recomputed.
//   Q1 transition-metal periodic/structure:  Cobalt → Nickel (stainless steel / coins)
//   Q2 separation + moles + giant covalent:  glass recycling → ceramic-glaze recycling
//   Q3 acid pH investigation (Crit B):        fruit juices → cooking vinegars
//   Q4 organic data + structure (Crit C):     capsaicin/chillies → caffeine/teas & coffees
//   Q5 neutralisation design (Crit B):        antacid remedies → kettle/limescale descalers
//   Q6 carbon footprint (Crit D):             meal types → daily commute transport modes
//   Q7 methane combustion + evaluate (Crit D): cow methane → food-waste biogas digesters
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Nickel (Crit A, 11 marks) ──────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Nickel — periodic table, atomic structure, bonding, compound nomenclature',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 11,
    stem: 'Nickel (Ni) has the atomic number 28 and the mass number 58. It is one of the transition metals and is used to make stainless steel cutlery, rechargeable batteries and the "silver" outer layer of many coins. The green colour in some glazes and ceramics comes from nickel compounds such as NiO, NiCO₃ and NiCr₂O₄ (nickel chromite). Nickel(II) chloride forms a green solution that fades when diluted, and is used in electroplating baths.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table — Period 4 transition metals</text><g><rect x="120" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="149" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 8</text><text x="149" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Fe</text><text x="149" y="91" font-size="8" text-anchor="middle" fill="#64748b">iron · 26</text></g><g><rect x="182" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="211" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 9</text><text x="211" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Co</text><text x="211" y="91" font-size="8" text-anchor="middle" fill="#64748b">cobalt · 27</text></g><g><rect x="244" y="46" width="58" height="48" fill="#eef4f7" stroke="#5b6b78" stroke-width="2"/><text x="273" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 10</text><text x="273" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Ni</text><text x="273" y="91" font-size="8" text-anchor="middle" fill="#64748b">nickel · 28</text></g><g><rect x="306" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="335" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 11</text><text x="335" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Cu</text><text x="335" y="91" font-size="8" text-anchor="middle" fill="#64748b">copper · 29</text></g><text x="60" y="124" font-size="11" fill="#475569">Ni-58 nucleus:  28 protons + 30 neutrons (mass number 58).</text><text x="60" y="142" font-size="11" fill="#475569">Nickel is a transition metal in the d-block (Period 4).</text><text x="60" y="166" font-size="10" fill="#94a3ad">Period number = number of occupied electron shells.</text><text x="60" y="184" font-size="10" fill="#94a3ad">Transition metals share variable oxidation states and form coloured compounds.</text></svg>',
      },
      caption: 'Nickel (Ni) sits among the Period 4 transition metals, between cobalt and copper.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period nickel is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which nickel appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that nickel shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Nickel can form Ni²⁺ ions. **State** the number of protons, neutrons and electrons in a Ni²⁺ ion.',
        marks: 3,
        ph: 'Protons 28; Neutrons 30; Electrons 26',
      },
      {
        label: 'e',
        text: 'Nickel(II) chloride is used in electroplating baths. **State** the formula for nickel(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'NiCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds NiO and NiCO₃.',
        marks: 2,
        ph: 'NiO: nickel(II) oxide; NiCO₃: nickel(II) carbonate',
      },
    ],
  },

  // ─── Q2: Ceramic Glaze Recycling and Silicate Chemistry (Crit A, 17 marks) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Ceramic recycling — separation, Cr₂O₃ formula, molar mass, moles, SiO₂ bonding',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 17,
    stem: 'A pottery studio recycles its broken glazed tiles. Each tile has a steel hanging clip on the back and a paper bar-code sticker on the front. Before the ceramic can be ground back into silicate raw material, the unwanted clip and sticker must be removed. The table in the figure gives the percentage composition by mass of the metal-oxide colourants and the silica (SiO₂) base in four historic glaze recipes — a plain stoneware glaze, a Persian turquoise glaze, a Japanese celadon glaze and a Tang green glaze. Silicon dioxide (silica) is the major component of the clay body and of the glassy glaze.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Component', 'Stoneware glaze / %', 'Persian turquoise / %', 'Japanese celadon / %', 'Tang green glaze / %'],
        rows: [
          ['SiO₂ (silica)', '68.0', '60.0', '66.5', '57.0'],
          ['Al₂O₃ (alumina)', '14.0', '10.0', '13.0', '9.0'],
          ['CaO (lime)', '11.0', '6.0', '12.0', '7.0'],
          ['Na₂O (soda)', '5.0', '14.0', '6.0', '8.0'],
          ['CuO (copper oxide)', '0.0', '8.0', '0.0', '4.0'],
          ['Fe₂O₃ (iron oxide)', '2.0', '2.0', '2.5', '4.0'],
          ['Cr₂O₃ (chromium oxide)', '0.0', '0.0', '0.0', '11.0'],
        ],
      },
      caption: 'Percentage composition by mass of four historic ceramic glazes. Cr₂O₃ gives the Tang glaze its green colour.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Before the tile is ground back into silicate raw material it has to be processed to remove unwanted components. **Select** which property could be used to separate each component.',
        marks: 3,
        ph: 'Paper sticker: dissolves in organic solvent; Steel clip: magnetic; Ceramic tile: sinks in water',
        widget: 'inline_dropdown_select',
        widgetItems: ['Paper sticker', 'Steel clip', 'Ceramic tile'],
        widgetOptions: ['dissolves in water', 'magnetic', 'dissolves in organic solvent', 'sinks in water'],
      },
      {
        label: 'b',
        text: 'Using the data in the table, **identify** the chemical formula of the colourant compound which is only present in the Tang green glaze.',
        marks: 1,
        ph: 'Cr₂O₃',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Cr=52, O=16; Mr = 2×52 + 3×16 = 152 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'A Tang green glazed tile contains 200 g of glaze. **Calculate** the number of moles of the compound from part (b) that are present in the glaze. Give your answer to three significant figures.',
        marks: 3,
        ph: 'n = 22/152 = 0.145 mol (11% of 200 g = 22 g)',
      },
      {
        label: 'e',
        text: 'Silicon dioxide is the major component of the ceramic and has a giant structure. **State** the type of bonding found in silicon dioxide and **outline** how the bond is formed.',
        marks: 2,
        ph: 'Covalent; electrons shared between silicon and oxygen atoms',
        widget: 'radio_select',
        widgetOptions: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
      },
      {
        label: 'f',
        text: '**State** if silicon dioxide is soluble in water. **Justify** your answer.',
        marks: 2,
        ph: 'Insoluble; giant covalent structure — strong bonds throughout will not dissolve',
      },
      {
        label: 'g',
        text: 'Broken ceramics can be crushed to make a recycled aggregate for new tiles, and the steel clips can be melted down and reused. **Suggest** why recycling the ceramic and steel would be better for the environment than sending the broken tiles to landfill.',
        marks: 3,
        ph: 'Conserves clay/ore raw materials; reduces landfill; saves energy of new production; improves sustainability',
      },
    ],
  },

  // ─── Q3: Cooking Vinegar Acidity Investigation (Crit B→C, 21 marks) ─────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Vinegar acidity — variables, research question, pH data analysis, indicator colours',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 21,
    stem: 'Vinegars are dilute solutions of acids (mainly ethanoic acid) used worldwide in cooking and food preservation. The more acidic a vinegar is, the more sharply sour it tastes and the better it preserves food, but a very low pH can also damage tooth enamel. Amara, Wei and Diego are comparing five cooking vinegars from a market — white vinegar, cider vinegar, red wine vinegar, balsamic vinegar and rice vinegar — to find out which is the most acidic. They used the following method: pour 50 cm³ of each vinegar into a clean 100 cm³ beaker, stir for 30 seconds at room temperature, then dip a calibrated pH probe into each and record the reading. The pH readings were: white 2.4, cider 3.1, red wine 2.9, balsamic 3.6, rice 4.2.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Cooking vinegar', 'pH reading'],
        rows: [
          ['White vinegar', '2.4'],
          ['Cider vinegar', '3.1'],
          ['Red wine vinegar', '2.9'],
          ['Balsamic vinegar', '3.6'],
          ['Rice vinegar', '4.2'],
        ],
      },
      caption: 'pH of five cooking vinegars measured with a calibrated pH probe at room temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: type of vinegar; DV: pH; CV: volume of vinegar, temperature, stirring time, same probe',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does the type of vinegar affect the pH of the vinegar?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the vinegar and pH that would be most damaging to tooth enamel. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'White vinegar pH 2.4; lowest pH / highest acidity; lower pH = more acid attacking enamel',
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of vinegar; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test different brands of the same vinegar / effect of dilution / effect of temperature on pH',
      },
      {
        label: 'f',
        text: 'The data in the table is from one reading for each vinegar. **Outline** the benefits of carrying out more than one trial for each experiment.',
        marks: 2,
        ph: 'Calculate the mean; reduces experimental errors; increases reliability',
      },
      {
        label: 'g',
        text: 'Instead of using a pH probe, indicators can be used to identify the pH of solutions. Red-cabbage extract can be used as an indicator — it turns red in strong acid, pink in weak acid, purple when neutral, blue in mild alkali and green in strong alkali, as shown on the scale. Red-cabbage extract was added to four beakers containing different clear, odourless liquids. Use information from the scale to **select** the colour that would be seen in each beaker.',
        marks: 4,
        ph: 'pH 2.0=Red; pH 11.5=Green; pH 7.0=Purple; pH 4.5=Pink',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 122" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="122" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Red-cabbage indicator colour scale</text><g><rect x="40" y="34" width="96" height="30" fill="#e11d48"/><rect x="136" y="34" width="96" height="30" fill="#f472b6"/><rect x="232" y="34" width="96" height="30" fill="#7c3aed"/><rect x="328" y="34" width="96" height="30" fill="#2563eb"/><rect x="424" y="34" width="96" height="30" fill="#16a34a"/></g><g font-size="9" fill="#ffffff" text-anchor="middle" font-weight="700"><text x="88" y="53">Red</text><text x="184" y="53">Pink</text><text x="280" y="53">Purple</text><text x="376" y="53">Blue</text><text x="472" y="53">Green</text></g><g font-size="9" fill="#475569" text-anchor="middle"><text x="88" y="80">pH 1–3</text><text x="184" y="80">pH 4–5</text><text x="280" y="80">pH 6–7</text><text x="376" y="80">pH 8–9</text><text x="472" y="80">pH 10–13</text></g><g font-size="9" fill="#64748b" text-anchor="middle"><text x="88" y="98">strong acid</text><text x="184" y="98">weak acid</text><text x="280" y="98">neutral</text><text x="376" y="98">mild alkali</text><text x="472" y="98">strong alkali</text></g></svg>',
          },
          caption: 'Red-cabbage indicator: red (pH 1–3), pink (pH 4–5), purple (pH 6–7), blue (pH 8–9), green (pH 10–13).',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 2.0', 'Beaker pH 11.5', 'Beaker pH 7.0', 'Beaker pH 4.5'],
        widgetOptions: ['Red', 'Pink', 'Purple', 'Green'],
      },
      {
        label: 'h',
        text: '**State** why red-cabbage extract cannot be used to determine the exact pH of a vinegar.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in a coloured vinegar',
      },
    ],
  },

  // ─── Q4: Caffeine in Tea and Coffee (Crit C, 9 marks) ──────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Caffeine — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 9,
    stem: 'Caffeine is the compound that makes tea and coffee stimulating. Drinks with more caffeine make people feel more awake but can also disturb sleep. High-performance liquid chromatography (HPLC) was used to measure the caffeine content of four drinks prepared from the same 200 cm³ serving: green tea, black tea, instant coffee and espresso. Amara, Wei and Diego want to find out which drink contains the most caffeine, so they sent identical samples to a laboratory. Before the results came back, Wei predicted: "Black tea will contain the most caffeine because it tastes the strongest and most bitter of all the drinks."',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Caffeine content measured by HPLC',
        mode: 'bars',
        variable: 'Drink (same 200 cm³ serving)',
        metric: 'Caffeine content / mg per 200 cm³',
        bars: [
          { label: 'green tea', value: 30 },
          { label: 'black tea', value: 55 },
          { label: 'instant coffee', value: 80 },
          { label: 'espresso', value: 130 },
        ],
        note: 'Espresso has the highest caffeine content; green tea the lowest.',
      },
      caption: 'Caffeine content of four drinks (mg per 200 cm³ serving) measured by HPLC.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the drinks in order of how much caffeine they contain, from most (top) to least (bottom).',
        marks: 2,
        ph: 'Most→Least: Espresso, Instant coffee, Black tea, Green tea (based on caffeine content)',
        widget: 'match_drag_drop',
        widgetItems: ['Black tea', 'Espresso', 'Green tea', 'Instant coffee'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Wei\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows espresso has most caffeine; prediction (black tea) is NOT valid',
      },
      {
        label: 'c',
        text: 'Caffeine belongs to a family of compounds called methylxanthines. The two structures shown below are members of this family found in these drinks. The first has a stimulant strength rating of 100 and the second a rating of 10. **Identify** two differences in the structures that cause this difference in stimulant strength.',
        marks: 2,
        ph: 'Compound 1 has an extra methyl (–CH₃) group; compound 1 has one more N–CH₃ substitution on the ring',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="180" fill="#ffffff"/><text x="140" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Compound 1 (rating 100)</text><text x="420" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Compound 2 (rating 10)</text><g stroke="#334155" stroke-width="1.5" fill="none"><polygon points="90,70 130,50 170,70 170,110 130,130 90,110" /><polygon points="170,70 210,55 245,80 230,120 190,125 170,110" /></g><g stroke="#334155" stroke-width="1.5" fill="none"><polygon points="370,70 410,50 450,70 450,110 410,130 370,110" /><polygon points="450,70 490,55 525,80 510,120 470,125 450,110" /></g><g font-size="11" fill="#0b7285" font-weight="700"><text x="60" y="58">CH₃</text><text x="60" y="120">N</text><text x="128" y="150">CH₃</text><text x="250" y="70">CH₃</text></g><g font-size="11" fill="#94a3ad" font-weight="700"><text x="345" y="120">N</text><text x="408" y="150">CH₃</text><text x="530" y="70">CH₃</text></g><line x1="78" y1="62" x2="92" y2="70" stroke="#0b7285" stroke-width="1.5"/><text x="130" y="170" font-size="9" fill="#475569" text-anchor="middle">three –CH₃ groups (extra N–CH₃ on the left ring)</text><text x="420" y="170" font-size="9" fill="#475569" text-anchor="middle">two –CH₃ groups (one N–H instead of N–CH₃)</text></svg>',
          },
          caption: 'Two methylxanthines: compound 1 carries an extra N–CH₃ (methyl) group compared with compound 2.',
        },
      },
      {
        label: 'd',
        text: 'Caffeine has a melting point of 235 °C and sublimes (turns straight to vapour) at about 178 °C. When tea leaves or coffee are brewed, more caffeine dissolves into hotter water. There are several ways to brew the same mass of tea leaves: in cold water (about 5 °C); in warm water (about 60 °C); in freshly boiled water (about 95 °C). **Formulate** a hypothesis to identify which brewing method will produce the drink with the highest caffeine content when using the same mass of tea leaves.',
        marks: 3,
        ph: 'If water temperature is high (95 °C) → highest caffeine; more caffeine dissolves at higher temperature',
      },
    ],
  },

  // ─── Q5: Kettle Descaler Design (Crit B, 19 marks) ─────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Kettle descalers — Crit B investigation design, neutralisation of metal carbonates',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'In hard-water areas, a chalky white limescale (mostly calcium carbonate, CaCO₃) builds up inside kettles and coffee machines. Descaler products contain acids that react with the carbonate to dissolve it: metal carbonate + acid → salt + water + carbon dioxide. Some shop-bought descalers contain citric acid powder; others contain sulfamic acid. People also use household items such as white vinegar (ethanoic acid) and lemon juice. Amara, Wei and Diego want to find out which descaler will dissolve a fixed lump of limescale the fastest. You are provided with: identical 5 g pieces of limescale (calcium carbonate); 250 cm³ of each descaler solution at the same concentration; 50 cm³ beakers; a balance; a stopwatch; a way of detecting when the reaction has finished.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Carbon dioxide released as descalers dissolve limescale (CaCO₃)',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ gas / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 70, tick: 10 },
        reaction: 'CaCO₃ + acid → salt + H₂O + CO₂',
        options: [
          { label: 'Sulfamic acid', color: 'teal', ratePerSec: 0.9, plateauVolume: 60 },
          { label: 'Citric acid', color: 'orange', ratePerSec: 0.55, plateauVolume: 60 },
          { label: 'White vinegar (ethanoic)', color: 'purple', ratePerSec: 0.32, plateauVolume: 60 },
        ],
        note: 'A steeper curve means a faster reaction — the descaler that finishes first works the quickest. All descalers release the same total CO₂ from a fixed 5 g of CaCO₃.',
      },
      caption: 'Each descaler gives a different reaction curve; the steeper the line, the faster the limescale dissolves.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which descaler will dissolve the limescale the most quickly. In your answer, you should include: an identification of the variables; a list of any additional equipment you will need; the method you will follow; details of how you will use your data to decide which descaler dissolves the limescale most quickly; a statement of any assumptions you have made; how you will ensure that your method is safe.',
        marks: 19,
        ph: 'Variables, equipment, method, repeats, safety with acids, plan to compare reaction (dissolving) times',
      },
    ],
  },

  // ─── Q6: Commuting and Carbon Footprint (Crit D, 7 marks) ──────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — daily commute transport modes compared',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'A school runs a campaign about how students and staff travel to school. The carbon footprint of a journey depends on the mode of transport and the distance travelled. The table in the figure shows the carbon dioxide emitted per passenger for each kilometre travelled by different transport modes. Two people each travel the same 20 km round trip to school every day: one drives alone in a petrol car for the whole 20 km, the other takes a city bus for 16 km and walks the final 4 km. Using a private car provides convenience and door-to-door travel, but the transport sector is responsible for around a quarter of global energy-related CO₂ emissions.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Transport mode', 'CO₂ emitted / g per passenger-km', 'Distance / km', 'CO₂ for the trip / g'],
        rows: [
          ['Petrol car (driver alone)', '170', '20', '?'],
          ['City bus', '95', '16', '1520'],
          ['Walking', '0', '4', '0'],
          ['Electric train', '35', '20', '700'],
        ],
      },
      caption: 'CO₂ emitted per passenger-km for each mode. Complete the missing value for the petrol car using the table.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Complete the table using information from the table. **Calculate** the carbon footprint for the 20 km petrol-car commute to two significant figures.',
        marks: 4,
        ph: 'Petrol car: 170 g/km × 20 km = 3400 g; to 2 sig figs = 3400 g (3.4 kg)',
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two journeys (petrol car alone versus bus-and-walking). Use data from the table to support your answer.',
        marks: 3,
        ph: 'Car 3400 g vs bus+walking 1520 g; car emits over twice as much CO₂; data comparison',
      },
    ],
  },

  // ─── Q7: Biogas Combustion + Crit D Essay (Crit D/A, 16 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Methane biogas — balancing combustion equation, food-waste digesters, ethical and environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'When food waste rots in landfill it releases methane, a powerful greenhouse gas. Instead, food waste can be collected and fed into an anaerobic digester, where microbes break it down to make biogas (mainly methane, CH₄) that can be burned as a fuel. The equation for the combustion of methane is shown below. Select numbers to balance the chemical equation: [_]CH₄(g) + [_]O₂(g) → [_]CO₂(g) + [_]H₂O(g). Capturing food-waste methane in a digester has advantages and disadvantages. The economic impacts, environmental impacts and ethical aspects of building local food-waste digesters need to be considered.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Food-waste anaerobic digester — where the carbon goes (arbitrary units per tonne)',
        units: 'units',
        flows: [
          { label: 'Carbon in food waste (input)', value: 100, kind: 'in' },
          { label: 'Methane biogas burned as fuel → CO₂', value: 55, kind: 'loss' },
          { label: 'CO₂ released by microbes (respiration)', value: 25, kind: 'out' },
          { label: 'Carbon locked into digestate fertiliser', value: 20, kind: 'out' },
        ],
        conservation: 'Carbon in (100) = burned biogas (55) + microbial CO₂ (25) + carbon stored in digestate (20).',
      },
      caption: 'A food-waste digester turns rotting carbon into burnable biogas plus a fertiliser, instead of letting it escape as landfill methane.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** numbers to balance the chemical equation for the combustion of methane: CH₄(g) + O₂(g) → CO₂(g) + H₂O(g)',
        marks: 2,
        ph: 'CH₄ + 2O₂ → CO₂ + 2H₂O; reactants correct (2 before O₂); products correct (2 before H₂O)',
      },
      {
        label: 'b',
        text: '**Discuss** and **evaluate** the benefits of capturing methane from food waste in anaerobic digesters. In your answer you should include: the advantages and disadvantages of collecting and processing food waste; the economic impacts of building and running digesters; the environmental advantages and disadvantages of using biogas collected from food waste as a source of energy; the ethical aspects of using food waste as a source of energy; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage of advantages, disadvantages, economic, environmental, ethical + appraisal',
      },
    ],
  },
]
