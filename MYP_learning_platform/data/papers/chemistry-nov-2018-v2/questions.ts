import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2018 · VARIANT 2  (isomorphic to chemistry-nov-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW industrial / environmental
// context, with a self-contained data-driven INTERACTIVE artefact in each
// question's context slot (no external image files). Every answer recomputed.
// Distinct from v1 in BOTH scenario AND data.
//   Q1 transition-metal periodic/structure:  Cobalt → Chromium (chrome plating / pigments)
//   Q2 separation + moles + giant covalent:  glass recycling → e-waste screen-glass recycling (TiO₂)
//   Q3 acid pH investigation (Crit B):        fruit juices → fizzy soft drinks
//   Q4 organic data + structure (Crit C):     capsaicin/chillies → theobromine/chocolate
//   Q5 neutralisation design (Crit B):        antacid remedies → swimming-pool acid neutralisers
//   Q6 carbon footprint (Crit D):             meal types → building-material choice (wall)
//   Q7 methane combustion + evaluate (Crit D): cow methane → landfill-gas capture for energy
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Chromium (Crit A, 11 marks) ────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chromium — periodic table, atomic structure, bonding, compound nomenclature',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 11,
    stem: 'Chromium (Cr) has the atomic number 24 and the mass number 52. It is one of the transition metals and gives the shiny, hard-wearing "chrome" plating on taps, tools and car parts, as well as the green of stained glass and the orange-red of artists\' pigments. Common chromium compounds include CrO, CrCO₃ and Cr₂O₃ (chrome green). Chromium(II) chloride forms a blue solution used in some metal-finishing baths.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table — Period 4 transition metals</text><g><rect x="120" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="149" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 5</text><text x="149" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">V</text><text x="149" y="91" font-size="8" text-anchor="middle" fill="#64748b">vanadium · 23</text></g><g><rect x="182" y="46" width="58" height="48" fill="#eef4f7" stroke="#5b6b78" stroke-width="2"/><text x="211" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 6</text><text x="211" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Cr</text><text x="211" y="91" font-size="8" text-anchor="middle" fill="#64748b">chromium · 24</text></g><g><rect x="244" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="273" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 7</text><text x="273" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Mn</text><text x="273" y="91" font-size="8" text-anchor="middle" fill="#64748b">manganese · 25</text></g><g><rect x="306" y="46" width="58" height="48" fill="#fff7ed" stroke="#5b6b78"/><text x="335" y="62" font-size="9" text-anchor="middle" fill="#64748b">Group 8</text><text x="335" y="80" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Fe</text><text x="335" y="91" font-size="8" text-anchor="middle" fill="#64748b">iron · 26</text></g><text x="60" y="124" font-size="11" fill="#475569">Cr-52 nucleus:  24 protons + 28 neutrons (mass number 52).</text><text x="60" y="142" font-size="11" fill="#475569">Chromium is a transition metal in the d-block (Period 4).</text><text x="60" y="166" font-size="10" fill="#94a3ad">Period number = number of occupied electron shells.</text><text x="60" y="184" font-size="10" fill="#94a3ad">Transition metals share variable oxidation states and form coloured compounds.</text></svg>',
      },
      caption: 'Chromium (Cr) sits among the Period 4 transition metals, between vanadium and manganese.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period chromium is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which chromium appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that chromium shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Chromium can form Cr²⁺ ions. **State** the number of protons, neutrons and electrons in a Cr²⁺ ion.',
        marks: 3,
        ph: 'Protons 24; Neutrons 28; Electrons 22',
      },
      {
        label: 'e',
        text: 'Chromium(II) chloride is used in some metal-finishing baths. **State** the formula for chromium(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'CrCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds CrO and CrCO₃.',
        marks: 2,
        ph: 'CrO: chromium(II) oxide; CrCO₃: chromium(II) carbonate',
      },
    ],
  },

  // ─── Q2: E-waste Screen Glass Recycling (Crit A, 17 marks) ──────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'E-waste recycling — separation, TiO₂ formula, molar mass, moles, SiO₂ bonding',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 17,
    stem: 'An electronics recycling plant recovers the glass from old phone and tablet screens. Each cracked screen module has a frame held together with small steel fixing screws and a flexible plastic backing film bonded to the glass. Before the glass can be re-melted into new screen glass, the steel screws and the plastic film must be separated out. The table in the figure gives the percentage composition by mass of the metal-oxide additives and the silica (SiO₂) base in four types of display glass — a basic soda-lime glass, an aluminosilicate phone glass, a borosilicate camera-lens glass and an anti-glare coated screen glass. Silicon dioxide (silica) is the major component of all of them.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Component', 'Soda-lime / %', 'Aluminosilicate / %', 'Borosilicate / %', 'Anti-glare coated / %'],
        rows: [
          ['SiO₂ (silica)', '72.0', '63.0', '80.0', '60.0'],
          ['Al₂O₃ (alumina)', '1.5', '17.0', '2.0', '14.0'],
          ['Na₂O (soda)', '14.0', '13.0', '4.0', '11.0'],
          ['CaO (lime)', '9.0', '4.0', '0.0', '5.0'],
          ['B₂O₃ (boron oxide)', '0.0', '0.0', '13.0', '0.0'],
          ['MgO (magnesia)', '3.5', '3.0', '1.0', '5.0'],
          ['TiO₂ (titanium dioxide)', '0.0', '0.0', '0.0', '5.0'],
        ],
      },
      caption: 'Percentage composition by mass of four display glasses. TiO₂ forms the anti-glare optical coating.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Before the screen glass is re-melted it has to be processed to remove unwanted components. **Select** which property could be used to separate each component.',
        marks: 3,
        ph: 'Plastic backing film: dissolves in organic solvent; Steel screws in frame: magnetic; Glass screen: sinks in water',
        widget: 'inline_dropdown_select',
        widgetItems: ['Plastic backing film', 'Steel screws in frame', 'Glass screen'],
        widgetOptions: ['dissolves in water', 'magnetic', 'dissolves in organic solvent', 'sinks in water'],
      },
      {
        label: 'b',
        text: 'Using the data in the table, **identify** the chemical formula of the additive compound which is only present in the anti-glare coated glass.',
        marks: 1,
        ph: 'TiO₂',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Ti=48, O=16; Mr = 48 + 2×16 = 80 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'A sample of crushed anti-glare coated glass has a mass of 250 g. **Calculate** the number of moles of the compound from part (b) that are present in the sample. Give your answer to three significant figures.',
        marks: 3,
        ph: 'n = 12.5/80 = 0.156 mol (5% of 250 g = 12.5 g)',
      },
      {
        label: 'e',
        text: 'Silicon dioxide is the major component of the glass and has a giant structure. **State** the type of bonding found in silicon dioxide and **outline** how the bond is formed.',
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
        text: 'Recovered screen glass can be re-melted into new glass and the aluminium frames can be re-smelted, instead of dumping the whole module in electronic-waste landfill. **Suggest** why recycling the glass and metal would be better for the environment than burying old screens as e-waste.',
        marks: 3,
        ph: 'Conserves sand/ore raw materials; avoids toxic e-waste leaching; saves smelting energy; improves sustainability',
      },
    ],
  },

  // ─── Q3: Fizzy Soft Drink Acidity Investigation (Crit B→C, 21 marks) ────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Soft drink acidity — variables, research question, pH data analysis, indicator colours',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 21,
    stem: 'Fizzy soft drinks are acidic because they contain dissolved carbon dioxide (carbonic acid) and added phosphoric or citric acid. The lower the pH of a drink, the more it can erode tooth enamel over time. A dentist asks Nadia, Tom and Priya to compare five chilled fizzy drinks from a vending machine — cola, lemonade, orange soda, an energy drink and tonic water — to find out which is the most acidic. They used the following method: pour 50 cm³ of each freshly opened drink into a clean 100 cm³ beaker, let the bubbles settle for 1 minute at room temperature, then dip a calibrated pH probe into each and record the reading. The pH readings were: cola 2.5, lemonade 3.0, orange soda 3.3, energy drink 2.8, tonic water 3.9.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Fizzy drink', 'pH reading'],
        rows: [
          ['Cola', '2.5'],
          ['Lemonade', '3.0'],
          ['Orange soda', '3.3'],
          ['Energy drink', '2.8'],
          ['Tonic water', '3.9'],
        ],
      },
      caption: 'pH of five chilled fizzy drinks measured with a calibrated pH probe at room temperature.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: type of drink; DV: pH; CV: volume of drink, temperature, settling time, same probe',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does the type of fizzy drink affect the pH of the drink?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the drink and pH that would be most damaging to tooth enamel. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Cola pH 2.5; lowest pH / highest acidity; lower pH = more acid attacking enamel',
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of drink; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test sugar-free versions / effect of letting the drink go flat / effect of temperature on pH',
      },
      {
        label: 'f',
        text: 'The data in the table is from one reading for each drink. **Outline** the benefits of carrying out more than one trial for each experiment.',
        marks: 2,
        ph: 'Calculate the mean; reduces experimental errors; increases reliability',
      },
      {
        label: 'g',
        text: 'Instead of using a pH probe, indicators can be used to identify the pH of solutions. Beetroot extract can be used as an indicator — it turns bright red in strong acid, magenta in weak acid, purple when neutral, and yellow-brown in alkali, as shown on the scale. Beetroot extract was added to four beakers containing different clear, odourless liquids. Use information from the scale to **select** the colour that would be seen in each beaker.',
        marks: 4,
        ph: 'pH 1.5=Red; pH 9.0=Yellow; pH 7.0=Purple; pH 4.0=Magenta',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 122" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="122" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Beetroot indicator colour scale</text><g><rect x="40" y="34" width="120" height="30" fill="#dc2626"/><rect x="160" y="34" width="120" height="30" fill="#db2777"/><rect x="280" y="34" width="120" height="30" fill="#7c3aed"/><rect x="400" y="34" width="120" height="30" fill="#ca8a04"/></g><g font-size="9" fill="#ffffff" text-anchor="middle" font-weight="700"><text x="100" y="53">Red</text><text x="220" y="53">Magenta</text><text x="340" y="53">Purple</text><text x="460" y="53">Yellow</text></g><g font-size="9" fill="#475569" text-anchor="middle"><text x="100" y="80">pH 1–3</text><text x="220" y="80">pH 4–5</text><text x="340" y="80">pH 6–7</text><text x="460" y="80">pH 8–12</text></g><g font-size="9" fill="#64748b" text-anchor="middle"><text x="100" y="98">strong acid</text><text x="220" y="98">weak acid</text><text x="340" y="98">neutral</text><text x="460" y="98">alkaline</text></g></svg>',
          },
          caption: 'Beetroot indicator: red (pH 1–3), magenta (pH 4–5), purple (pH 6–7), yellow (pH 8–12).',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 1.5', 'Beaker pH 9.0', 'Beaker pH 7.0', 'Beaker pH 4.0'],
        widgetOptions: ['Red', 'Magenta', 'Purple', 'Yellow'],
      },
      {
        label: 'h',
        text: '**State** why beetroot extract cannot be used to determine the exact pH of a soft drink.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in a coloured drink (e.g. cola)',
      },
    ],
  },

  // ─── Q4: Theobromine in Chocolate (Crit C, 9 marks) ────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Theobromine — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 9,
    stem: 'Theobromine is the bitter stimulant compound in chocolate; the more cocoa solids a chocolate contains, the more theobromine it has. Theobromine is mildly stimulating to people but toxic to dogs. High-performance liquid chromatography (HPLC) was used to measure the theobromine content of four chocolate products: white chocolate, milk chocolate, dark chocolate and pure cocoa nibs. Nadia, Tom and Priya want to find out which product contains the most theobromine. Before the laboratory results came back, Tom predicted: "Milk chocolate will contain the most theobromine because it is the most popular and the sweetest of all the products."',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Theobromine content measured by HPLC',
        mode: 'bars',
        variable: 'Chocolate product (per 50 g)',
        metric: 'Theobromine content / mg per 50 g',
        bars: [
          { label: 'white', value: 5 },
          { label: 'milk', value: 75 },
          { label: 'dark', value: 280 },
          { label: 'cocoa nibs', value: 540 },
        ],
        note: 'Cocoa nibs have the highest theobromine content; white chocolate the lowest.',
      },
      caption: 'Theobromine content of four chocolate products (mg per 50 g) measured by HPLC.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the chocolate products in order of how much theobromine they contain, from most (top) to least (bottom).',
        marks: 2,
        ph: 'Most→Least: Cocoa nibs, Dark, Milk, White (based on theobromine content)',
        widget: 'match_drag_drop',
        widgetItems: ['Cocoa nibs', 'Dark chocolate', 'Milk chocolate', 'White chocolate'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Tom\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows cocoa nibs have most theobromine; prediction (milk chocolate) is NOT valid',
      },
      {
        label: 'c',
        text: 'Theobromine belongs to a family of compounds called methylxanthines. The two structures shown below are members of this family found in chocolate. The first has a stimulant strength rating of 100 and the second a rating of 30. **Identify** two differences in the structures that cause this difference in stimulant strength.',
        marks: 2,
        ph: 'Compound 1 has an extra methyl (–CH₃) group; compound 1 has one more N–CH₃ substitution on the ring',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="180" fill="#ffffff"/><text x="140" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Compound 1 (rating 100)</text><text x="420" y="22" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Compound 2 (rating 30)</text><g stroke="#334155" stroke-width="1.5" fill="none"><polygon points="90,70 130,50 170,70 170,110 130,130 90,110" /><polygon points="170,70 210,55 245,80 230,120 190,125 170,110" /></g><g stroke="#334155" stroke-width="1.5" fill="none"><polygon points="370,70 410,50 450,70 450,110 410,130 370,110" /><polygon points="450,70 490,55 525,80 510,120 470,125 450,110" /></g><g font-size="11" fill="#0b7285" font-weight="700"><text x="60" y="58">CH₃</text><text x="60" y="120">N</text><text x="128" y="150">CH₃</text><text x="250" y="70">CH₃</text></g><g font-size="11" fill="#94a3ad" font-weight="700"><text x="345" y="120">N</text><text x="408" y="150">CH₃</text><text x="530" y="70">CH₃</text></g><line x1="78" y1="62" x2="92" y2="70" stroke="#0b7285" stroke-width="1.5"/><text x="130" y="170" font-size="9" fill="#475569" text-anchor="middle">three –CH₃ groups (extra N–CH₃ on the left ring)</text><text x="420" y="170" font-size="9" fill="#475569" text-anchor="middle">two –CH₃ groups (one N–H instead of N–CH₃)</text></svg>',
          },
          caption: 'Two methylxanthines: compound 1 carries an extra N–CH₃ (methyl) group compared with compound 2.',
        },
      },
      {
        label: 'd',
        text: 'Theobromine has a melting point of 357 °C and dissolves more readily into hotter water. Hot chocolate can be made from the same mass of cocoa powder using: cold milk (about 5 °C); warm milk (about 50 °C); freshly boiled milk (about 90 °C). **Formulate** a hypothesis to identify which method will produce the drink with the highest theobromine content when using the same mass of cocoa powder.',
        marks: 3,
        ph: 'If milk temperature is high (90 °C) → highest theobromine; more theobromine dissolves at higher temperature',
      },
    ],
  },

  // ─── Q5: Swimming-Pool Acid Neutraliser Design (Crit B, 19 marks) ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Pool acid neutralisers — Crit B investigation design, neutralisation of metal carbonates',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'When the water in a swimming pool becomes too acidic it irritates swimmers\' eyes and corrodes the metal pipework, so pool operators add an alkaline "pH increaser" to neutralise the acid. Many of these products are metal carbonates, which neutralise acid by the reaction: metal carbonate + acid → salt + water + carbon dioxide. Common choices are sodium carbonate (soda ash), calcium carbonate (ground limestone) and sodium hydrogen carbonate (bicarbonate of soda). Nadia, Tom and Priya want to find out which carbonate neutralises the acidic pool water the most quickly. You are provided with: 250 cm³ of dilute sulfuric acid at the pool\'s acidity (0.05 mol dm⁻³); 50 cm³ beakers; a balance; a stopwatch; a pH probe; samples of each carbonate; safety goggles and gloves.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Carbon dioxide released as carbonates neutralise the acidic water',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ gas / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 60, tick: 10 },
        reaction: 'metal carbonate + acid → salt + H₂O + CO₂',
        options: [
          { label: 'Sodium carbonate', color: 'teal', ratePerSec: 0.85, plateauVolume: 50 },
          { label: 'Sodium bicarbonate', color: 'orange', ratePerSec: 0.5, plateauVolume: 50 },
          { label: 'Calcium carbonate', color: 'purple', ratePerSec: 0.25, plateauVolume: 50 },
        ],
        note: 'A steeper curve means a faster neutralisation. The carbonate whose fizzing finishes first neutralises the acid quickest.',
      },
      caption: 'Each carbonate gives a different reaction curve; the steeper the line, the faster the acid is neutralised.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which carbonate will neutralise the acidic water the most quickly. In your answer, you should include: an identification of the variables; a list of any additional equipment you will need; the method you will follow; details of how you will use your data to decide which carbonate neutralises the acid most quickly; a statement of any assumptions you have made; how you will ensure that your method is safe.',
        marks: 19,
        ph: 'Variables, equipment, method, repeats, safety with acid, plan to compare neutralisation times',
      },
    ],
  },

  // ─── Q6: Building Materials and Carbon Footprint (Crit D, 7 marks) ─────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — building-material choice for a wall compared',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'An architect must choose the material for the load-bearing walls of a new school building. The carbon footprint of a wall depends on the "embodied carbon" of the material — the CO₂ released to make it — and the mass of material needed. The table in the figure shows the embodied carbon for producing 1 kg of each material. Two equally strong walls are compared: one built from reinforced concrete needs 4000 kg of material, while one built from cross-laminated timber needs 1500 kg of material. Concrete is cheap, strong and fire-resistant, but cement production alone is responsible for about 8% of global CO₂ emissions.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Wall material', 'Embodied carbon / kgCO₂e per kg', 'Mass needed / kg', 'Carbon footprint / kgCO₂e'],
        rows: [
          ['Reinforced concrete', '0.16', '4000', '?'],
          ['Cross-laminated timber', '0.30', '1500', '450'],
          ['Fired-clay brick', '0.24', '3500', '840'],
          ['Structural steel', '1.50', '900', '1350'],
        ],
      },
      caption: 'Embodied carbon per kg for each wall material. Complete the missing value for reinforced concrete using the table.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Complete the table using information from the table. **Calculate** the carbon footprint for the reinforced-concrete wall to two significant figures.',
        marks: 4,
        ph: 'Concrete: 0.16 kgCO₂e/kg × 4000 kg = 640 kgCO₂e (2 sig figs ≈ 640 kgCO₂e)',
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two walls (reinforced concrete versus cross-laminated timber). Use data from the table to support your answer.',
        marks: 3,
        ph: 'Concrete 640 vs timber 450 kgCO₂e; concrete has higher footprint; timber also stores carbon; data comparison',
      },
    ],
  },

  // ─── Q7: Landfill Gas Combustion + Crit D Essay (Crit D/A, 16 marks) ───────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Landfill methane — balancing combustion equation, landfill-gas-to-energy, ethical and environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'Buried rubbish in a landfill site rots without oxygen and slowly releases landfill gas, which is about half methane (CH₄) — a powerful greenhouse gas that would otherwise leak into the air. Many modern landfills now drill wells to collect this gas and pipe it to an engine that burns it to generate electricity. The equation for the combustion of methane is shown below. Select numbers to balance the chemical equation: [_]CH₄(g) + [_]O₂(g) → [_]CO₂(g) + [_]H₂O(g). Capturing landfill methane for energy has advantages and disadvantages. The economic impacts, environmental impacts and ethical aspects of landfill-gas-to-energy schemes need to be considered.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Landfill-gas-to-energy — where the captured methane goes (arbitrary units)',
        units: 'units',
        flows: [
          { label: 'Methane captured from wells (input)', value: 100, kind: 'in' },
          { label: 'Burned in engine → CO₂ + electricity', value: 80, kind: 'loss' },
          { label: 'Flared off safely → CO₂', value: 12, kind: 'out' },
          { label: 'Leaks escaping as CH₄', value: 8, kind: 'out' },
        ],
        conservation: 'Methane in (100) = burned for power (80) + flared (12) + leaked unburned (8).',
      },
      caption: 'A landfill-gas system burns captured methane for electricity instead of letting the powerful greenhouse gas escape — though some still leaks.',
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
        text: '**Discuss** and **evaluate** the benefits of capturing methane from landfill sites to generate energy. In your answer you should include: the advantages and disadvantages of running landfill sites; the economic impacts of building landfill-gas-to-energy schemes; the environmental advantages and disadvantages of using methane collected from landfill as a source of energy; the ethical aspects of relying on landfill gas as a source of energy; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage of advantages, disadvantages, economic, environmental, ethical + appraisal',
      },
    ],
  },
]
