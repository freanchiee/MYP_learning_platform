import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Cobalt (Crit A, 11 marks) ─────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cobalt — periodic table, atomic structure, bonding, compound nomenclature',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 11,
    stem: 'Cobalt (Co) has the atomic number 27 and the mass number 59. It is one of the transition metals and has been used for centuries to produce vibrant blue pigments in pottery and glassware. The main compounds used to produce the blue colours are CoAl₂O₄ (cobalt(II) aluminate), CoO and CoCO₃. Cobalt(II) chloride paper turns pink in the presence of water and is used as a simple water test.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="250" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cobalt in the periodic table and its atom</text><g><rect x="30" y="36" width="250" height="120" fill="none" stroke="#cbd5e1"/><text x="155" y="52" font-size="9" text-anchor="middle" fill="#64748b">Transition-metal block (Period 4 row shown)</text><g font-size="9" text-anchor="middle"><rect x="40" y="62" width="26" height="26" fill="#eef4f7" stroke="#94a3ad"/><text x="53" y="79" fill="#475569">Fe</text><rect x="68" y="62" width="26" height="26" fill="#0b7285" stroke="#0b7285"/><text x="81" y="79" fill="#ffffff" font-weight="700">Co</text><rect x="96" y="62" width="26" height="26" fill="#eef4f7" stroke="#94a3ad"/><text x="109" y="79" fill="#475569">Ni</text><rect x="124" y="62" width="26" height="26" fill="#eef4f7" stroke="#94a3ad"/><text x="137" y="79" fill="#475569">Cu</text></g><text x="81" y="106" font-size="8" text-anchor="middle" fill="#0b7285" font-weight="700">Z = 27</text><text x="155" y="130" font-size="9" text-anchor="middle" fill="#475569">Cobalt sits in Period 4, the transition (d-block) metals.</text><text x="155" y="146" font-size="8" text-anchor="middle" fill="#94a3ad">Transition metals: variable oxidation states, coloured compounds.</text></g><g><circle cx="420" cy="120" r="3" fill="#0b7285"/><text x="420" y="106" font-size="8" text-anchor="middle" fill="#0b7285" font-weight="700">27p · 32n</text><circle cx="420" cy="120" r="28" fill="none" stroke="#94a3ad"/><circle cx="420" cy="120" r="46" fill="none" stroke="#94a3ad"/><circle cx="420" cy="120" r="64" fill="none" stroke="#94a3ad"/><circle cx="420" cy="120" r="80" fill="none" stroke="#94a3ad"/><circle cx="448" cy="120" r="2.4" fill="#e8590c"/><circle cx="392" cy="120" r="2.4" fill="#e8590c"/><circle cx="420" cy="74" r="2.4" fill="#e8590c"/><circle cx="420" cy="166" r="2.4" fill="#e8590c"/><circle cx="420" cy="200" r="2.4" fill="#e8590c"/><text x="420" y="222" font-size="9" text-anchor="middle" fill="#475569">Neutral Co atom: 27 electrons (2,8,15,2)</text><text x="420" y="236" font-size="8" text-anchor="middle" fill="#94a3ad">A Co²⁺ ion loses 2 electrons → 25 electrons.</text></g></svg>',
      },
      caption: 'Cobalt (Z = 27, mass number 59) is a Period-4 transition metal. A Co²⁺ ion has 27 protons, 32 neutrons and 25 electrons.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period cobalt is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which cobalt appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that cobalt shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Cobalt can form Co²⁺ ions. **State** the number of protons, neutrons and electrons in a Co²⁺ ion.',
        marks: 3,
        ph: 'Protons 27; Neutrons 32; Electrons 25',
      },
      {
        label: 'e',
        text: 'Cobalt(II) chloride paper is used to test for water. **State** the formula for cobalt(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'CoCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds CoO and CoCO₃.',
        marks: 2,
        ph: 'CoO: cobalt(II) oxide; CoCO₃: cobalt(II) carbonate',
      },
    ],
  },

  // ─── Q2: Glass Recycling and Silicon Chemistry (Crit A, 17 marks) ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Glass recycling — separation, Fe₂O₃ formula, molar mass, moles, SiO₂ bonding',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 17,
    stem: 'Several jars made of glass need to be recycled. The jars have steel lids and plastic labels. Before the jar is recycled into silicon oxides it has to be processed to remove unwanted components. The following table contains the percentage chemical composition by mass of the compounds used to make glass through the ages: SiO₂ (Silica), Na₂O (Soda), CaO (Lime), K₂O (Potash), Fe₂O₃ (Iron oxide), MgO (Magnesia), Al₂O₃ (Alumina), PbO (Lead oxide) — present in different amounts across Modern glass, Laboratory glass, Optical/crystal glass, and Ancient Roman glass. Silicon oxide is the major component in sand and glass.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Common name', 'Chemical formula', 'Modern glass (bottles & windows) / %', 'Laboratory glass / %', 'Optical & crystal glass / %', 'Ancient Roman glass / %'],
        rows: [
          ['Silica', 'SiO₂', '73.6', '80.0', '35.0', '67.0'],
          ['Soda', 'Na₂O', '5.2', '4.0', '-', '18.0'],
          ['Lime', 'CaO', '0.6', '-', '-', '8.0'],
          ['Potash', 'K₂O', '3.6', '0.4', '7.2', '1.0'],
          ['Magnesia', 'MgO', '1.0', '-', '-', '1.0'],
          ['Alumina', 'Al₂O₃', '-', '2.0', '-', '2.5'],
          ['Iron oxide', 'Fe₂O₃', '-', '-', '-', '0.5'],
          ['Boric oxide', 'B₂O₃', '-', '13.0', '-', '-'],
          ['Lead oxide', 'PbO', '-', '-', '58.0', '0.01'],
        ],
      },
      caption: 'Percentage composition by mass of compounds in glass through the ages. Fe₂O₃ (iron oxide) appears only in Ancient Roman glass (0.5%).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Before the jar is recycled into silicon oxides it has to be processed to remove unwanted components. **Select** which property could be used to separate each component.',
        marks: 3,
        ph: 'Plastic: dissolves in organic solvent; Steel: magnetic; Glass: sinks in water',
        widget: 'inline_dropdown_select',
        widgetItems: ['Plastic label', 'Steel lid', 'Glass jar'],
        widgetOptions: ['dissolves in water', 'magnetic', 'dissolves in organic solvent', 'sinks in water'],
      },
      {
        label: 'b',
        text: 'Using the data in the table, **identify** the chemical formula of the compound which is only present in ancient Roman glass.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Fe=56, O=16; Mr = 2×56 + 3×16 = 160 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'A Roman glass bottle has a mass of 100 g. **Calculate** the number of moles of the compound from part (b) that are present in the bottle. Give your answer to three significant figures.',
        marks: 3,
        ph: 'n = 0.5/160 = 3.13 × 10⁻³ mol (0.5% of 100 g = 0.5 g)',
      },
      {
        label: 'e',
        text: 'Silicon oxide is the major component in sand and glass and has the structure shown in the diagram. **State** the type of bonding found in silicon oxide and **outline** how the bond is formed.',
        marks: 2,
        ph: 'Covalent; electrons shared between silicon and oxygen atoms',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="300" fill="#ffffff"/><text x="210" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of silicon oxide (SiO₂)</text><g stroke="#5b6b78" stroke-width="2"><line x1="120" y1="90" x2="180" y2="130"/><line x1="180" y1="130" x2="240" y2="90"/><line x1="240" y1="90" x2="300" y2="130"/><line x1="180" y1="130" x2="180" y2="200"/><line x1="240" y1="90" x2="240" y2="40"/><line x1="120" y1="90" x2="120" y2="40"/><line x1="300" y1="130" x2="300" y2="200"/><line x1="180" y1="200" x2="240" y2="240"/><line x1="240" y1="240" x2="300" y2="200"/><line x1="180" y1="200" x2="120" y2="240"/></g><g><circle cx="180" cy="130" r="12" fill="#0b7285"/><circle cx="300" cy="130" r="12" fill="#0b7285"/><circle cx="240" cy="240" r="12" fill="#0b7285"/></g><g><circle cx="120" cy="90" r="9" fill="#e8590c"/><circle cx="240" cy="90" r="9" fill="#e8590c"/><circle cx="180" cy="200" r="9" fill="#e8590c"/><circle cx="300" cy="200" r="9" fill="#e8590c"/><circle cx="120" cy="40" r="9" fill="#e8590c"/><circle cx="240" cy="40" r="9" fill="#e8590c"/><circle cx="120" cy="240" r="9" fill="#e8590c"/></g><g font-size="11"><circle cx="40" cy="270" r="9" fill="#0b7285"/><text x="54" y="274" fill="#475569">Silicon atom</text><circle cx="190" cy="270" r="9" fill="#e8590c"/><text x="204" y="274" fill="#475569">Oxygen atom</text></g><text x="210" y="292" font-size="9" text-anchor="middle" fill="#94a3ad">Giant covalent lattice: each Si shares electrons with 4 O atoms.</text></svg>',
          },
          caption: 'Silicon oxide forms a giant covalent (macromolecular) structure — every silicon atom is covalently bonded to oxygen atoms throughout the lattice.',
        },
        widget: 'radio_select',
        widgetOptions: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
      },
      {
        label: 'f',
        text: '**State** if silicon oxide is soluble in water. **Justify** your answer.',
        marks: 2,
        ph: 'Insoluble; giant covalent structure — strong bonds throughout will not dissolve',
      },
      {
        label: 'g',
        text: 'Glass bottles can be recycled to make sand, which can replace eroded beaches, and plastic bottles recycled to make pellets for road construction. **Suggest** why recycling glass and plastics would be better for the environment than burying used bottles as waste.',
        marks: 3,
        ph: 'Saves beaches; preserves biodiversity; conserves raw materials; improves sustainability',
      },
    ],
  },

  // ─── Q3: Fruit Juice pH Investigation (Crit B→C, 21 marks) ─────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Fruit juice acidity — variables, research question, pH data analysis, indicator colours',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 21,
    stem: 'The increase in travel has an impact on the health and well-being of individuals as they move from place to place globally. Michelle, Yuri and Pedro have recently moved to a tropical country and love the fruit juices. Fruit juices are acidic outside the body and stay acidic when digested. Fruit juices can therefore increase the acidity in the stomach and cause heartburn. The friends are interested in finding out which fruit juice is most acidic and would lower the pH in the stomach the most. They used the following method: using each of the following fruits — apple, pear, grape, cranberry, tomato — put 100 g of cut-up fruit and 100 cm³ of water into a mixer and mix it for 1 minute. Pour 100 cm³ of each juice into a 250 cm³ beaker, then use a pH probe to measure the pH of each juice.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Type of fruit juice', 'pH'],
        rows: [
          ['apple', '3.5'],
          ['pear', '3.8'],
          ['grape', '2.8'],
          ['cranberry', '2.4'],
          ['tomato', '4.1'],
        ],
      },
      caption: 'pH of each fruit juice measured with a pH probe (one trial each). The lower the pH, the more acidic the juice — cranberry (pH 2.4) is the most acidic.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: type of fruit; DV: pH; CV: mass of fruit, volume of water, time of mixing, equipment',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does type of fruit affect the pH of the juice?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the fruit juice and pH that could cause the most severe heartburn. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Cranberry pH 2.4; lowest pH / highest acidity; lower pH = more acid in stomach',
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of fruit juice; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test different varieties of fruits / length of blending time / ripeness of fruit',
      },
      {
        label: 'f',
        text: 'The data in the table is from one trial for each fruit. **Outline** the benefits of carrying out more than one trial for each experiment.',
        marks: 2,
        ph: 'Calculate the mean; reduces experimental errors; increases accuracy',
      },
      {
        label: 'g',
        text: 'Instead of using a pH probe, indicators can be used to identify the pH of solutions. Cherry juice can be used as an indicator — its colour changes for different pH values as shown in the scale. Cherry juice was added to four beakers containing different clear, odourless liquids. Use information from the scale to **select** the colour that would be seen in each beaker.',
        marks: 4,
        ph: 'pH 3.2=Red; pH 9.5=Green; pH 7.0=Purple; pH 3.6=Red',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cherry-juice indicator colour scale</text><g><rect x="40" y="34" width="120" height="30" fill="#d62828"/><rect x="160" y="34" width="80" height="30" fill="#f08c00"/><rect x="240" y="34" width="80" height="30" fill="#7048e8"/><rect x="320" y="34" width="160" height="30" fill="#2f9e44"/></g><g font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle"><text x="100" y="54">Red</text><text x="200" y="54">Orange</text><text x="280" y="54">Purple</text><text x="400" y="54">Green</text></g><g stroke="#94a3ad"><line x1="40" y1="64" x2="40" y2="72"/><line x1="80" y1="64" x2="80" y2="72"/><line x1="120" y1="64" x2="120" y2="72"/><line x1="160" y1="64" x2="160" y2="72"/><line x1="200" y1="64" x2="200" y2="72"/><line x1="240" y1="64" x2="240" y2="72"/><line x1="280" y1="64" x2="280" y2="72"/><line x1="320" y1="64" x2="320" y2="72"/><line x1="360" y1="64" x2="360" y2="72"/><line x1="400" y1="64" x2="400" y2="72"/><line x1="440" y1="64" x2="440" y2="72"/><line x1="480" y1="64" x2="480" y2="72"/><line x1="520" y1="64" x2="520" y2="72"/></g><g font-size="10" fill="#475569" text-anchor="middle"><text x="40" y="86">1</text><text x="80" y="86">2</text><text x="120" y="86">3</text><text x="160" y="86">4</text><text x="200" y="86">5</text><text x="240" y="86">6</text><text x="280" y="86">7</text><text x="320" y="86">8</text><text x="360" y="86">9</text><text x="400" y="86">10</text><text x="440" y="86">11</text><text x="480" y="86">12</text></g><text x="280" y="108" font-size="10" text-anchor="middle" fill="#64748b">pH</text><text x="280" y="130" font-size="9" text-anchor="middle" fill="#94a3ad">Red: pH 1–4 · Orange: pH 4–6 · Purple: pH 6–8 · Green: pH 8–12</text></svg>',
          },
          caption: 'Cherry juice acts as an indicator: red at pH 1–4, orange at pH 4–6, purple at pH 6–8, green at pH 8–12.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 3.2', 'Beaker pH 9.5', 'Beaker pH 7.0', 'Beaker pH 3.6'],
        widgetOptions: ['Red', 'Orange', 'Purple', 'Green'],
      },
      {
        label: 'h',
        text: '**State** why cherry juice cannot be used to determine the exact pH of fruit juices.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in coloured fruit juice',
      },
    ],
  },

  // ─── Q4: Capsaicin in Chilli Peppers (Crit C, 9 marks) ─────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Capsaicin — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 9,
    stem: 'A compound called capsaicin gives the spicy flavour to chilli peppers. Scientists say there may be some evidence that capsaicin triggers stomach acid production. Increase in stomach acid may cause heartburn. Chromatography was used to measure the capsaicin content in different chilli peppers. Michelle, Yuri and Pedro want to find out which of the following is the spiciest: Habanero pepper, Jalapeño pepper, Red chilli pepper, Cayenne pepper. They gave the foods to a professional lab to perform the test. Before they got the result, Michelle predicted the outcome: "The red chilli pepper will have the most capsaicin as it tastes spicier than the other peppers."',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Chilli pepper', 'Capsaicin content / mg dm⁻³'],
        rows: [
          ['Red chilli', '0.22'],
          ['Jalapeño', '0.07'],
          ['Habanero', '0.48'],
          ['Cayenne', '0.05'],
        ],
      },
      caption: 'Capsaicin content measured by chromatography (the "graph" data). The more capsaicin, the spicier: Habanero (0.48) > Red chilli (0.22) > Jalapeño (0.07) > Cayenne (0.05) mg dm⁻³.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the chilli peppers in order of how spicy they are, from most spicy (top) to least spicy (bottom).',
        marks: 2,
        ph: 'Most→Least: Habanero (0.48), Red chilli (0.22), Jalapeño (0.07), Cayenne (0.05) — by capsaicin content',
        widget: 'match_drag_drop',
        widgetItems: ['Cayenne pepper', 'Habanero pepper', 'Jalapeño pepper', 'Red chilli pepper'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Michelle\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows habanero has most capsaicin; prediction is NOT valid',
      },
      {
        label: 'c',
        text: 'The Scoville scale is a measurement of the spiciness of foods. The following structures show two commonly occurring members of the capsaicin family. The first structure has a Scoville heat unit of 16 000 000 and the second has 9 100 000. **Identify** two differences in the structures that cause this difference in Scoville heat measurement.',
        marks: 2,
        ph: 'C=C double bond (alkene) in compound 1; longer carbon chain in compound 1',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two members of the capsaicin family</text><g><rect x="14" y="40" width="96" height="50" rx="6" fill="#eef4f7" stroke="#94a3ad"/><text x="62" y="62" font-size="9" text-anchor="middle" fill="#475569">Remainder of</text><text x="62" y="76" font-size="9" text-anchor="middle" fill="#475569">the molecule</text><text x="135" y="48" font-size="11" font-weight="700" fill="#0b7285">Structure 1 · 16 000 000 SHU</text><text x="120" y="76" font-size="12" fill="#1f2d3a" font-family="monospace">–CH₂–N(H)–C(=O)–CH₂–CH₂–CH₂–CH₂–CH=CH–CH(CH₃)₂</text><rect x="468" y="62" width="118" height="22" fill="none" stroke="#e8590c" stroke-dasharray="4 3"/><text x="527" y="100" font-size="9" text-anchor="middle" fill="#e8590c" font-weight="700">C=C double bond + longer chain</text></g><line x1="14" y1="130" x2="586" y2="130" stroke="#e2e8f0"/><g><rect x="14" y="150" width="96" height="50" rx="6" fill="#eef4f7" stroke="#94a3ad"/><text x="62" y="172" font-size="9" text-anchor="middle" fill="#475569">Remainder of</text><text x="62" y="186" font-size="9" text-anchor="middle" fill="#475569">the molecule</text><text x="135" y="158" font-size="11" font-weight="700" fill="#0b7285">Structure 2 · 9 100 000 SHU</text><text x="120" y="186" font-size="12" fill="#1f2d3a" font-family="monospace">–CH₂–N(H)–C(=O)–CH₂–CH₂–CH₂–CH₂–CH(CH₃)₂</text><text x="430" y="210" font-size="9" text-anchor="middle" fill="#64748b">fully saturated · shorter chain</text></g><text x="300" y="244" font-size="9" text-anchor="middle" fill="#94a3ad">Compare the two chains: Structure 1 has a C=C double bond and one more carbon than Structure 2.</text></svg>',
          },
          caption: 'Structure 1 (16 000 000 SHU) has a C=C double bond and a longer carbon chain; Structure 2 (9 100 000 SHU) is fully saturated and shorter.',
        },
      },
      {
        label: 'd',
        text: 'Capsaicin has a melting point of 65 °C and a boiling point of 210 °C. In the liquid state, capsaicin evaporates easily. Capsaicin can be found in jalapeños. There are several ways in which jalapeños can be added to food: raw; boiled in a water-based sauce (water boils at 100 °C); fried in an oil-based sauce (oil boils/reaches temperatures above 210 °C in frying). **Formulate** a hypothesis to identify which method of food preparation will produce food with the highest spiciness when using the same mass of jalapeño.',
        marks: 3,
        ph: 'If temperature low / raw → highest spiciness; capsaicin will not evaporate/be destroyed',
      },
    ],
  },

  // ─── Q5: Heartburn Remedy Design (Crit B, 19 marks) ────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Heartburn remedies — Crit B investigation design, neutralisation of metal carbonates',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'There are many treatments that can be used to stop the pain of heartburn. Some of these treatments contain metal carbonates which neutralise the stomach acid. The reaction of metal carbonates with acids is: metal carbonate + acid → salt + water + carbon dioxide. Gaviscon® and TUMS® are heartburn treatments that contain metal carbonates. Traditional Chinese medicine uses natural substances: hai piao xiao (cuttlefish bone) and wa leng zi (cockle shell). Michelle, Yuri and Pedro are interested to find out which heartburn remedy will neutralise the acid most quickly. The method they will use is shown. You are provided with: 250 cm³ of 0.1 mol dm⁻³ aqueous hydrochloric acid; 50 cm³ beakers; medication: Gaviscon® tablets, TUMS® powder; Chinese medicine natural substances: hai piao xiao (cuttlefish fish bone), wa leng zi (cockle shell); 25 cm³ 0.1 mol dm⁻³ HCl (aq).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Provided item', 'Quantity / detail', 'Role in the investigation'],
        rows: [
          ['Hydrochloric acid (aq)', '250 cm³ of 0.1 mol dm⁻³', 'models stomach acid to be neutralised'],
          ['HCl portion per test', '25 cm³ of 0.1 mol dm⁻³', 'fixed volume reacted with each remedy'],
          ['Beakers', '50 cm³', 'reaction vessels'],
          ['Gaviscon® tablets', 'metal carbonate medication', 'remedy 1 (test substance)'],
          ['TUMS® powder', 'metal carbonate medication', 'remedy 2 (test substance)'],
          ['Hai piao xiao', 'cuttlefish bone (natural)', 'remedy 3 (test substance)'],
          ['Wa leng zi', 'cockle shell (natural)', 'remedy 4 (test substance)'],
        ],
      },
      caption: 'Equipment and materials provided. Each heartburn remedy is reacted with the same 25 cm³ of 0.1 mol dm⁻³ HCl so the neutralisation rate can be compared fairly.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which heartburn remedy will neutralise the acid the most quickly. In your answer, you should include: an identification of the variables; a list of any additional equipment you will need; the method you will follow; details of how you will use your data to decide which treatment will neutralise the acid most quickly; a statement of any assumptions you have made; how you will ensure that your method is safe.',
        marks: 19,
        ph: 'Variables, equipment, method, repeats, safety with HCl, plan to compare neutralisation times',
      },
    ],
  },

  // ─── Q6: Food Choices and Carbon Footprint (Crit D, 7 marks) ────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — food supply chain, vegetable vs meat-based diet comparison',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'A video gives some information about food choices, including information about vegetable-based and meat-based diets. The food supply chain includes processing, storage, shops, transport and waste. Different foods have different carbon footprints. The table shows the carbon footprint for producing 1 kg of food or 4.2 kJ of food energy. A vegetable-based meal has an energy content of approximately 3000 kJ. A meat-based meal has an energy content of approximately 3000 kJ. The meat farming industry contributes 40% of global agricultural gross domestic product, provides jobs for 1.3 billion people, but contributes 14% of the harmful greenhouse gas emissions.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Food', 'Carbon footprint / kg CO₂e per kg of food'],
        rows: [
          ['Beef', '27.0'],
          ['Cheese', '13.5'],
          ['Pork', '12.1'],
          ['Chicken', '6.9'],
          ['Eggs', '4.8'],
          ['Potatoes', '2.9'],
          ['Rice', '2.7'],
          ['Nuts', '2.3'],
          ['Yogurt', '2.2'],
          ['Broccoli', '2.0'],
          ['Tofu', '2.0'],
          ['Dry beans', '2.0'],
          ['2% milk', '1.9'],
          ['Tomatoes', '1.9'],
          ['Lentils', '0.9'],
        ],
      },
      caption: 'Carbon footprint for producing 1 kg of different foods (kg CO₂e). Meat (beef 27.0) has a far higher footprint than plant foods.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Complete the table using information from the bar chart. **Calculate** the carbon footprint for the meat-based meal to two significant figures.',
        marks: 4,
        ph: 'Potato CF for meal = 0.24 × 2.9 = 0.70; meat total = 0.70 + 0.36 + 10.26 = 11.32 → 11 kg CO₂e (2 sig figs)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Meal', 'Food', 'Mass of food / kg', 'CF per kg / kg CO₂e', 'CF for the meal / kg CO₂e'],
            rows: [
              ['Vegetable-based', 'Rice', '0.18', '2.7', '0.49'],
              ['Vegetable-based', 'Tomato', '0.20', '1.9', '0.38'],
              ['Vegetable-based', 'Broccoli', '0.20', '2.0', '0.40'],
              ['Vegetable-based', 'Beans', '0.40', '2.0', '0.80'],
              ['Vegetable-based', 'Total', '-', '-', '2.07'],
              ['Meat-based', 'Potato', '0.24', '2.9', '?'],
              ['Meat-based', 'Broccoli', '0.18', '2.0', '0.36'],
              ['Meat-based', 'Beef steak', '0.38', '27', '10.26'],
              ['Meat-based', 'Total', '-', '-', '?'],
            ],
          },
          caption: 'Two meals of ≈ 3000 kJ. Complete the meat-based meal: potato 0.24 × 2.9 = 0.70, so total = 0.70 + 0.36 + 10.26 = 11 kg CO₂e (2 sig figs).',
        },
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two meals. Use data from the tables to support your answer.',
        marks: 3,
        ph: 'Meat-based has higher CF (~11.32 vs ~2.07 kgCO₂e); beef dominates the meat meal; data comparison',
      },
    ],
  },

  // ─── Q7: Methane Combustion + Crit D Essay (Crit D/A, 16 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Methane — balancing combustion equation, cow methane capture, ethical and environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'Methane, also known as natural gas, can be used as a fuel. The equation for the combustion of methane is shown below. Select numbers to balance the chemical equation: [_]CH₄(g) + [_]O₂(g) → [_]CO₂(g) + [_]H₂O(g). Cows produce methane as a by-product of digestion. Research is being done into capturing the methane emitted by cows for use as fuel. This method of methane capture has advantages and disadvantages. The advantages and disadvantages of intensive cattle farming and the economic impacts, environmental impacts, and ethical aspects of CH₄ capture need to be considered.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="240" fill="#ffffff"/><text x="300" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Capturing and burning methane from cattle</text><g><rect x="20" y="40" width="150" height="56" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="95" y="64" font-size="10" text-anchor="middle" fill="#475569">Cattle digestion</text><text x="95" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">CH₄ released</text><path d="M170 68 H210" stroke="#5b6b78" stroke-width="2" marker-end="url(#a)"/><rect x="210" y="40" width="150" height="56" rx="8" fill="#eef4f7" stroke="#94a3ad"/><text x="285" y="64" font-size="10" text-anchor="middle" fill="#475569">Captured &amp; stored</text><text x="285" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">CH₄ fuel</text><path d="M360 68 H400" stroke="#5b6b78" stroke-width="2" marker-end="url(#a)"/><rect x="400" y="40" width="180" height="56" rx="8" fill="#fff4e6" stroke="#e8a33d"/><text x="490" y="64" font-size="10" text-anchor="middle" fill="#475569">Burned for energy</text><text x="490" y="82" font-size="11" font-weight="700" text-anchor="middle" fill="#e8590c">combustion</text></g><defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#5b6b78"/></marker></defs><g><text x="300" y="130" font-size="11" text-anchor="middle" fill="#475569">Balanced combustion of methane:</text><text x="300" y="156" font-size="16" font-weight="700" text-anchor="middle" fill="#1f2d3a" font-family="monospace">CH₄ + 2 O₂ → CO₂ + 2 H₂O</text><text x="300" y="182" font-size="9" text-anchor="middle" fill="#94a3ad">Atom check — C: 1 = 1 · H: 4 = 4 · O: 4 = 2 + 2</text></g><text x="300" y="216" font-size="9" text-anchor="middle" fill="#64748b">Capturing cow methane turns a greenhouse gas into a usable fuel — with economic, environmental and ethical trade-offs.</text></svg>',
      },
      caption: 'Methane from cattle can be captured, stored and burned as a fuel. Balanced equation: CH₄ + 2 O₂ → CO₂ + 2 H₂O (1 C, 4 H, 4 O on each side).',
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
        text: '**Discuss** and **evaluate** the benefits of capturing the methane emitted by cows. In your answer you should include: the advantages and disadvantages of intensive cattle farming; the economic impacts of intensive cattle farming; the environmental advantages and disadvantages of using methane collected from cows as a source of energy; the ethical aspects of using methane collected from cows as a source of energy; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage of advantages, disadvantages, economic, environmental, ethical + appraisal',
      },
    ],
  },
]
