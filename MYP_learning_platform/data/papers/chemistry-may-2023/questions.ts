import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2023',
  subject: 'Chemistry',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (8 marks, Crit A) — Fossil fuels: propane, coal combustion ─────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, organic families & surface area — fossil fuels',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'Propane is an alkane. It is a fossil fuel widely used as a domestic heating gas. The combustion of propane releases energy. The structures of some other organic molecules are shown below.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structures of two organic molecules</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="92" y1="120" x2="120" y2="120"/><line x1="120" y1="120" x2="180" y2="120"/><line x1="120" y1="120" x2="120" y2="92"/><line x1="120" y1="120" x2="120" y2="148"/><line x1="180" y1="120" x2="180" y2="92"/><line x1="180" y1="120" x2="212" y2="120"/></g><g font-size="15" fill="#1f2d3a" text-anchor="middle"><text x="80" y="125">H</text><text x="120" y="125" font-weight="700">C</text><text x="180" y="125" font-weight="700">C</text><text x="120" y="88">H</text><text x="120" y="164">H</text><text x="180" y="88">H</text><text x="224" y="125" font-weight="700">O</text><text x="248" y="125">H</text></g><text x="160" y="198" font-size="13" font-weight="600" text-anchor="middle" fill="#0b7285">Molecule A</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="372" y1="120" x2="410" y2="120"/><line x1="407" y1="115" x2="407" y2="88"/><line x1="413" y1="115" x2="413" y2="88"/><line x1="410" y1="120" x2="450" y2="120"/></g><g font-size="15" fill="#1f2d3a" text-anchor="middle"><text x="360" y="125">H</text><text x="410" y="125" font-weight="700">C</text><text x="410" y="82" font-weight="700">O</text><text x="462" y="125" font-weight="700">O</text><text x="486" y="125">H</text></g><text x="420" y="198" font-size="13" font-weight="600" text-anchor="middle" fill="#0b7285">Molecule B</text><text x="280" y="220" font-size="10" text-anchor="middle" fill="#94a3ad">Molecule A has an –OH (hydroxyl) group; Molecule B has a –COOH (carboxyl) group.</text></svg>',
      },
      caption: 'Molecule A (a two-carbon alcohol) and Molecule B (a carboxylic acid). Identify the family of each from its functional group.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the type of energy change when propane burns in air.',
        marks: 1,
        ph: 'Exothermic',
      },
      {
        label: 'b',
        text: '**Complete** the balanced equation for the complete combustion of propane in oxygen:\n\nC₃H₈ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '5, 3, 4 (balance oxygen last)',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8'],
      },
      {
        label: 'c',
        text: 'The structures of some other organic molecules are shown above.\n\n**Identify** the family that each molecule belongs to.',
        marks: 2,
        ph: 'Molecule A: Alcohol (alkanol); Molecule B: Carboxylic acid (organic acid)',
      },
      {
        label: 'd',
        text: 'Coal is commonly used in power plants to generate electricity. **Explain** why powdered coal should be used rather than lumps of solid coal.',
        marks: 3,
        ph: 'Greater surface area → faster rate of reaction → more energy released per unit time',
      },
    ],
  },

  // ── Q2 (8 marks, Crit A) — Solar power, silicon, periodic table ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, Lewis structures & covalent bonding — solar panels',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 8,
    stem: 'An alternative to the use of fossil fuels is solar power. Solar panels capture the Sun\'s energy and convert it into electricity. Silicon (Si) is used in 95% of the panels sold today. Elements like gallium (Ga), arsenic (As) and tellurium (Te) can also be used in solar panels.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="230" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g font-size="10" fill="#64748b" text-anchor="middle"><text x="80" y="46">Group 3 (13)</text><text x="150" y="46">Group 4 (14)</text><text x="220" y="46">Group 5 (15)</text><text x="290" y="46">Group 6 (16)</text></g><text x="30" y="92" font-size="10" fill="#64748b" text-anchor="middle" transform="rotate(-90 30 92)">Period 3</text><text x="30" y="150" font-size="10" fill="#64748b" text-anchor="middle" transform="rotate(-90 30 150)">Period 4</text><g><rect x="50" y="64" width="60" height="46" fill="#f1f5f9" stroke="#5b6b78"/><text x="80" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Al</text><text x="80" y="105" font-size="8" text-anchor="middle" fill="#64748b">13</text></g><g><rect x="120" y="64" width="60" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="150" y="92" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Si</text><text x="150" y="105" font-size="8" text-anchor="middle" fill="#64748b">14</text></g><g><rect x="50" y="124" width="60" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="80" y="152" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Ga</text><text x="80" y="165" font-size="8" text-anchor="middle" fill="#64748b">31</text></g><g><rect x="120" y="124" width="60" height="46" fill="#f1f5f9" stroke="#5b6b78"/><text x="150" y="152" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Ge</text><text x="150" y="165" font-size="8" text-anchor="middle" fill="#64748b">32</text></g><g><rect x="190" y="124" width="60" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="220" y="152" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">As</text><text x="220" y="165" font-size="8" text-anchor="middle" fill="#64748b">33</text></g><g><rect x="260" y="124" width="60" height="46" fill="#f1f5f9" stroke="#5b6b78"/><text x="290" y="152" font-size="16" font-weight="700" text-anchor="middle" fill="#475569">Se</text><text x="290" y="165" font-size="8" text-anchor="middle" fill="#64748b">34</text></g><text x="360" y="92" font-size="11" fill="#475569">Group number (main groups) =</text><text x="360" y="108" font-size="11" fill="#475569">number of outer-shell electrons.</text><text x="360" y="138" font-size="11" fill="#475569">Period number =</text><text x="360" y="154" font-size="11" fill="#475569">number of occupied electron shells.</text><text x="360" y="190" font-size="10" fill="#94a3ad">Ga and As (highlighted) are both in Period 4.</text></svg>',
      },
      caption: 'Periodic-table excerpt: locate gallium (Ga) and arsenic (As) to find their group and period.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **identify** the missing information from the table below.\n\n| Element | Ga | As |\n|---|---|---|\n| Group | [blank] | [blank] |\n| Period | [blank] | [blank] |',
        marks: 2,
        ph: 'Ga: Group 3, Period 4; As: Group 5, Period 4',
      },
      {
        label: 'b',
        text: '**Outline** why solar power is considered better for the environment than fossil fuels.',
        marks: 2,
        ph: 'No emissions from solar; solar is renewable; fossil fuels release CO₂/greenhouse gases',
      },
      {
        label: 'c',
        text: 'Another common fossil fuel is methane. Methane is one of the main gases used throughout the world for heating and cooking. **Select** the Lewis structure (also known as a dot diagram or dot cross diagram) for methane.',
        marks: 1,
        ph: 'CH₄ has 4 H atoms bonded to C with 4 single bonds — select A',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="260" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate dot-and-cross diagrams for methane</text><g font-size="14" fill="#1f2d3a" text-anchor="middle"><g><text x="60" y="50" font-size="13" font-weight="700">A</text><text x="80" y="92">H</text><text x="40" y="132">H</text><text x="80" y="135" font-weight="700">C</text><text x="120" y="132">H</text><text x="80" y="175">H</text><circle cx="80" cy="112" r="2" fill="#0b7285"/><circle cx="72" cy="120" r="2" fill="#0b7285"/><circle cx="88" cy="120" r="2" fill="#0b7285"/><circle cx="64" cy="112" r="2" fill="#0b7285"/></g><g><text x="220" y="50" font-size="13" font-weight="700">B</text><text x="240" y="92">H</text><text x="200" y="132">H</text><text x="240" y="135" font-weight="700">C</text><text x="280" y="132">H</text><circle cx="240" cy="112" r="2" fill="#0b7285"/><circle cx="226" cy="120" r="2" fill="#0b7285"/><circle cx="254" cy="120" r="2" fill="#0b7285"/></g><g><text x="380" y="50" font-size="13" font-weight="700">C</text><text x="400" y="92">H</text><text x="360" y="132">H</text><text x="400" y="135" font-weight="700">C</text><text x="440" y="132">H</text><text x="400" y="175">H</text><line x1="400" y1="100" x2="400" y2="126" stroke="#1f2d3a"/><line x1="374" y1="128" x2="392" y2="128" stroke="#1f2d3a"/><line x1="408" y1="128" x2="426" y2="128" stroke="#1f2d3a"/><line x1="400" y1="140" x2="400" y2="165" stroke="#1f2d3a"/></g><g><text x="540" y="50" font-size="13" font-weight="700">D</text><text x="560" y="92">H</text><text x="520" y="135" font-weight="700">C</text><text x="600" y="132">H</text><text x="560" y="175">H</text><circle cx="560" cy="112" r="2" fill="#0b7285"/><circle cx="552" cy="120" r="2" fill="#0b7285"/></g></g><text x="310" y="232" font-size="10" text-anchor="middle" fill="#94a3ad">Only one diagram shows carbon sharing four electron pairs, one with each of four hydrogen atoms.</text></svg>',
          },
          caption: 'Four candidate Lewis (dot-and-cross) diagrams A–D. Select the one that correctly shows methane, CH₄.',
        },
      },
      {
        label: 'd',
        text: 'Carbon and silicon form compounds with similar formulas. Some examples are methane (CH₄) and silane (SiH₄). **Explain** why methane and silane have similar formulas.',
        marks: 3,
        ph: 'Same group (Group 4) → same valence electrons; share electrons to form 4 covalent bonds',
      },
    ],
  },

  // ── Q3 (12 marks, Crit A/D) — Hydrogen gas: production, catalysts, ammonia ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Reactivity, catalysts, moles & implications — hydrogen production',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 12,
    stem: 'Hydrogen was discovered by Sir Henry Cavendish in 1766 when he reacted metals with acid. He called the gas produced "inflammable air." We now call this gas hydrogen. Cavendish placed three different metals: Zinc, Iron and Tin into acid. He observed that hydrogen was produced at different rates. Hydrogen is the most abundant element in the universe, but there is not enough in our atmosphere for it to be used as a renewable energy source. Manufactured hydrogen can be classified into different categories depending on the processes used.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Metal added to acid', 'Position in reactivity series', 'Rate of hydrogen produced'],
        rows: [
          ['Zinc (Zn)', 'most reactive of the three', 'fast — steady stream of bubbles'],
          ['Iron (Fe)', 'middle', 'moderate — bubbles form slowly'],
          ['Tin (Sn)', 'least reactive of the three', 'very slow — few bubbles'],
        ],
      },
      caption: 'Cavendish reacted three metals with the same acid. The more reactive the metal, the faster hydrogen gas is produced.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why hydrogen was produced at different rates when Cavendish reacted the three metals with acid.',
        marks: 2,
        ph: 'More reactive metals produce hydrogen more quickly; metals have different reactivities',
      },
      {
        label: 'b',
        text: 'Grey and blue hydrogen are produced in the presence of a nickel catalyst. **Explain** how a catalyst works in a chemical reaction.',
        marks: 3,
        ph: 'Speeds up rate of reaction; by lowering activation energy or providing alternative pathway; without being used up',
      },
      {
        label: 'c',
        text: '**Calculate** the number of moles of hydrogen produced when 8.00 kg of methane reacts with excess steam vapour when producing grey and blue hydrogen.\n\nCH₄(g) + H₂O(g) → CO(g) + 3H₂(g)',
        marks: 4,
        ph: 'M(CH₄)=16; n(CH₄)=8000/16=500 mol; 1 mol CH₄→3 mol H₂; n(H₂)=1500 mol',
      },
      {
        label: 'd',
        text: 'After it is produced, hydrogen must be transported to where it is needed. To allow it to be transported safely, the hydrogen is reacted with nitrogen to form ammonia. **Suggest** why it is safer to transport ammonia rather than hydrogen.',
        marks: 1,
        ph: 'Ammonia not flammable (hydrogen is); ammonia has distinct smell so leaks detected; ammonia less reactive',
      },
      {
        label: 'e',
        text: 'The blue hydrogen process uses CO₂ from the reaction of CH₄ and combines it with calcium oxide to produce calcium carbonate:\n\nCaO(s) + CO₂(g) → CaCO₃(s)\n\n**State** one environmental benefit of using the carbon dioxide in this process. **Justify** your answer.',
        marks: 2,
        ph: 'CO₂ not released into atmosphere → reduces greenhouse gas emissions; reduces climate change',
      },
    ],
  },

  // ── Q4 (16 marks, Crit A/B/C) — Frozen desserts, ice crystals ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of matter, data analysis & hypothesis — frozen desserts',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'Frozen desserts come in a variety of types depending on the country. Some examples are shown: Kulfi (India, boiled milk with pistachio/saffron), Paleta (Mexico, fruit/sugar/milk), Ice cream (United Kingdom, cream/egg/sugar/milk), and Mochi (Japan, ice cream wrapped in coloured rice flour sheets). One of the main ingredients of these various frozen desserts is milk. Milk is a solution of protein, fats and other substances in water. When the milk and other ingredients in frozen desserts are cooled, the water inside the milk freezes producing ice crystals which trap the other ingredients.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Frozen dessert', 'Country', 'Main ingredients'],
        rows: [
          ['Kulfi', 'India', 'Boiled milk flavoured with pistachio, saffron or cardamom'],
          ['Paleta', 'Mexico', 'Fruit, sugar and milk'],
          ['Ice cream', 'United Kingdom', 'Cream, egg, sugar and milk'],
          ['Mochi', 'Japan', 'Ice cream wrapped in coloured sheets made from rice flour'],
        ],
      },
      caption: 'Four frozen desserts from around the world. Milk (a water-based solution) is a main ingredient in each.',
    },
    tasks: [
      {
        label: 'a',
        text: 'In the boxes below, **draw** a diagram showing the arrangement of at least 10 water molecules before and after freezing.\n\nBefore freezing → After freezing',
        marks: 2,
        ph: 'Before: irregular arrangement, molecules close but not all touching; After: regular arrangement, all molecules in contact',
        artefact: {
          component: 'ParticleSim',
          data: {
            mode: 'freeze',
            substance: 'water',
            particleCount: 16,
            states: ['liquid (before freezing)', 'solid (after freezing)'],
            before: 'Liquid water: molecules are close together but arranged irregularly and can move past one another.',
            after: 'Ice: molecules are held in a fixed, regular pattern and only vibrate about fixed positions.',
          },
          caption: 'Toggle between liquid (before) and solid (after) to compare the arrangement of the water molecules as they freeze. Use this as a reference for your own before/after drawing.',
        },
      },
      {
        label: 'b',
        text: 'The microscope image shows the structure of a frozen dessert. **Measure** the size of the ice crystal at A. You should give your measurement in metres using standard form.',
        marks: 2,
        ph: 'Measurement = 55 μm (±5); conversion = 5.5 × 10⁻⁵ m',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="320" fill="#0f172a"/><text x="230" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#e2e8f0">Microscope image of a frozen dessert</text><g fill="#cbd5e1" stroke="#94a3b8" stroke-width="1"><ellipse cx="120" cy="120" rx="28" ry="24"/><ellipse cx="232" cy="104" rx="40" ry="34"/><ellipse cx="330" cy="140" rx="44" ry="36"/><ellipse cx="160" cy="214" rx="36" ry="30"/><ellipse cx="270" cy="224" rx="50" ry="40"/><ellipse cx="362" cy="232" rx="30" ry="26"/></g><g fill="#475569"><ellipse cx="200" cy="160" rx="14" ry="11"/><ellipse cx="300" cy="192" rx="10" ry="9"/><ellipse cx="116" cy="186" rx="9" ry="8"/></g><g stroke="#22c55e" stroke-width="1.6" fill="none"><line x1="92" y1="120" x2="147" y2="120" stroke-dasharray="4 3"/><line x1="92" y1="113" x2="92" y2="127"/><line x1="147" y1="113" x2="147" y2="127"/></g><text x="120" y="92" font-size="14" font-weight="700" text-anchor="middle" fill="#22c55e">A</text><text x="250" y="285" font-size="11" fill="#22c55e" text-anchor="middle">ice crystals</text><g stroke="#e2e8f0" stroke-width="2"><line x1="330" y1="298" x2="410" y2="298"/><line x1="330" y1="292" x2="330" y2="304"/><line x1="410" y1="292" x2="410" y2="304"/></g><text x="370" y="288" font-size="11" fill="#e2e8f0" text-anchor="middle">80 μm</text></svg>',
          },
          caption: 'Microscope image of ice crystals in a frozen dessert. Crystal A is marked by the green line; the scale bar represents 80 μm.',
        },
      },
      {
        label: 'c',
        text: 'A student used the following method to make ice cream at home. While the ice cream was being made, the student measured the temperature of the mixture and estimated the percentage of water that had frozen. Their results are shown in the table below.\n\n| Temperature / °C | Percentage of ice cream frozen / % |\n|---|---|\n| −1.38 | 0 |\n| −2.38 | 8 |\n| −4.38 | 40 |\n| −7.38 | 80 |\n| −11.38 | 90 |\n\n**Present** this data in a graph.',
        marks: 4,
        ph: 'x-axis: Temperature / °C; y-axis: % ice cream frozen; two points correct; all data plotted correctly',
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Percentage of ice cream frozen vs temperature',
            mode: 'plot',
            xLabel: 'Temperature / °C',
            yLabel: 'Ice cream frozen / %',
            xRange: [-12, 0],
            yRange: [0, 100],
            minor: 2,
            dataTable: [
              { x: -11.38, y: 90 },
              { x: -7.38, y: 80 },
              { x: -4.38, y: 40 },
              { x: -2.38, y: 8 },
              { x: -1.38, y: 0 },
            ],
          },
          caption: 'Drag each point up to its value from the table to present the data, then press Check. Part (d) reads back from 50 % frozen.',
        },
      },
      {
        label: 'd',
        text: 'Using your graph from part (c), **estimate** the temperature when 50% of the water would be frozen.',
        marks: 2,
        ph: 'Read from graph at y=50%: approximately −6 °C (accept −6 ± 0.5)',
      },
      {
        label: 'e',
        text: 'The texture of ice cream is affected by the size of the ice crystals it contains. This size is determined by the temperature it is made at. The colder the ice cream mixture becomes, the smaller the size of the ice crystals. Ice cream made using liquid nitrogen (at −196°C) will have a smoother texture than ice cream made using the method in part (c).\n\n**Formulate** a hypothesis to test the effect of temperature on the texture of ice cream.',
        marks: 3,
        ph: 'If temperature is lower → then texture will be smoother → because ice crystals are smaller/form more quickly',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Freezing method', 'Temperature it is made at / °C', 'Typical ice-crystal size', 'Resulting texture'],
            rows: [
              ['Home freezer (part c)', '−18', 'large', 'coarse / icy'],
              ['Commercial blast freezer', '−40', 'medium', 'smoother'],
              ['Liquid nitrogen', '−196', 'very small', 'very smooth'],
            ],
          },
          caption: 'The colder the mixture is made, the smaller the ice crystals and the smoother the ice cream. Use this relationship to formulate a hypothesis.',
        },
      },
      {
        label: 'f',
        text: 'A student wanted to investigate the mixtures found in frozen desserts. They were interested in how quickly different frozen desserts containing soda, water or milk melted. The student collected the following data:\n\n| Frozen ingredient | Trial 1 | Trial 2 | Trial 3 |\n|---|---|---|---|\n| Soda | 45 min 54 s | 38 min 02 s | 44 min 45 s |\n| Water | 42 min 31 s | 48 min 56 s | 43 min 22 s |\n| Milk | 1 hr 02 min | 1 hr 06 min | 56 min 34 s |\n\n**Suggest** one way that the student\'s data **presentation** could be improved.',
        marks: 1,
        ph: 'Use same units throughout; include mean value; include units in heading; consistent precision',
      },
      {
        label: 'g',
        text: '**Outline** if the data above validates the student\'s hypothesis.',
        marks: 2,
        ph: 'Milk does not melt quickest (water melts quickest) → hypothesis is invalid',
      },
    ],
  },

  // ── Q5 (17 marks, Crit B/C) — Salt & ice: melting investigation ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Salt de-icing investigation design & data analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 17,
    stem: 'The student decided to investigate the time taken for salt (sodium chloride, NaCl) to melt crushed ice and solid ice. They set up their investigation as shown in the diagram — using crushed ice on one side and an ice cube on the other.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="300" fill="#ffffff"/><text x="240" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Investigation set-up: salt added to two forms of ice</text><g stroke="#1f2d3a" stroke-width="2" fill="none"><path d="M120 70 L120 230 Q120 250 140 250 L150 250 Q170 250 170 230 L170 70"/></g><rect x="120" y="120" width="50" height="110" fill="#cfe8f3"/><g fill="#9cc7dc" stroke="#7fb0c8" stroke-width="0.6"><rect x="124" y="128" width="12" height="12"/><rect x="142" y="124" width="10" height="14"/><rect x="156" y="132" width="11" height="10"/><rect x="128" y="150" width="13" height="11"/><rect x="148" y="146" width="12" height="13"/><rect x="123" y="172" width="11" height="12"/><rect x="146" y="170" width="13" height="12"/><rect x="130" y="196" width="12" height="11"/><rect x="152" y="198" width="11" height="12"/></g><text x="145" y="278" font-size="12" text-anchor="middle" fill="#1f2d3a">Crushed ice</text><g stroke="#1f2d3a" stroke-width="2" fill="none"><path d="M310 70 L310 230 Q310 250 330 250 L340 250 Q360 250 360 230 L360 70"/></g><rect x="310" y="150" width="50" height="80" fill="#cfe8f3"/><rect x="316" y="158" width="38" height="64" fill="#bfe0ef" stroke="#7fb0c8" stroke-width="1"/><text x="335" y="278" font-size="12" text-anchor="middle" fill="#1f2d3a">Ice cube</text><g fill="#e8590c"><circle cx="145" cy="92" r="2"/><circle cx="138" cy="100" r="2"/><circle cx="152" cy="104" r="2"/><circle cx="335" cy="92" r="2"/><circle cx="328" cy="100" r="2"/><circle cx="342" cy="104" r="2"/></g><text x="240" y="60" font-size="11" text-anchor="middle" fill="#e8590c">same mass of salt added to each</text></svg>',
      },
      caption: 'The same mass of salt is added to crushed ice (left) and a single ice cube (right). The crushed ice has a much larger surface area.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Formulate** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'How does the surface area of ice affect the time taken for salt to melt ice?',
      },
      {
        label: 'b',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nControl variable 1:\n\nControl variable 2:',
        marks: 4,
        ph: 'IV: surface area of ice; DV: time for ice to melt; CV1: mass of salt; CV2: type of salt / mass of ice / room temperature',
      },
      {
        label: 'c',
        text: '**State** how the set-up of the investigation in part (a) could be improved.',
        marks: 1,
        ph: 'Same mass of ice used; same surface area; more values of IV; carry out more trials',
      },
      {
        label: 'd',
        text: 'After studying how salt affects ice, the student wanted to study how quickly different household substances would melt ice compared to salt. The results for salt and sugar are shown below. The data table above is incomplete. **Calculate** the missing values to complete the table, giving your values to a suitable number of decimal places.\n\n| Substance | Trial | Initial ice mass/g | Remaining ice/g | % remaining | % melted |\n|---|---|---|---|---|---|\n| Salt | 1 | 150.00 | 80.00 | [blank A] | 46.67 |\n| Sugar | 2 | 145.00 | 100.00 | 68.97 | [blank B] |\n| Coffee powder | 3 | 160.00 | 120.00 | 75.00 | 25.00 |',
        marks: 3,
        ph: 'Blank A: 80/150×100 = 53.33%; Blank B: (145−100)/145×100 = 31.03%',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Substance', 'Trial', 'Initial ice mass / g', 'Remaining ice / g', '% remaining', '% melted'],
            rows: [
              ['Salt', '1', '150.00', '80.00', 'A = ?', '46.67'],
              ['Sugar', '2', '145.00', '100.00', '68.97', 'B = ?'],
              ['Coffee powder', '3', '160.00', '120.00', '75.00', '25.00'],
            ],
          },
          caption: 'Incomplete results table. Calculate the missing values A (% remaining for salt) and B (% melted for sugar).',
        },
      },
      {
        label: 'e',
        text: '**Suggest** why salt was used in the investigation in part (d).',
        marks: 1,
        ph: 'Salt is the control/reference to which all other substances could be compared',
      },
      {
        label: 'f',
        text: 'In some areas of the world, temperatures drop below 0°C. This causes problems for transport. The infographic shows a variety of chemicals that can be used to remove ice and the temperature at which the ice will melt when each chemical is used.\n\nAn airport which is based above the Arctic Circle uses a variety of de-icers depending upon the surface that needs to have ice removed. The average temperatures range from −15°C to −2°C but with the wind it can get as cold as −45°C.\n\nUse the infographic to **suggest** one de-icing material that would **not** be suitable to use to clear the airport runways and surrounding roads. **Justify** your answer.',
        marks: 2,
        ph: 'Urea — only works above ~−15°C; temperatures can reach −45°C where it is ineffective',
        widget: 'radio_select',
        widgetOptions: ['Urea', 'Sodium chloride', 'Calcium magnesium acetate', 'Calcium chloride', 'Magnesium chloride', 'Potassium acetate'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['De-icing material', 'Formula', 'Lowest temperature it melts ice / °C', 'Contains chloride?'],
            rows: [
              ['Urea', 'CO(NH₂)₂', '−11.9', 'No'],
              ['Sodium chloride', 'NaCl', '−21.0', 'Yes'],
              ['Calcium magnesium acetate', 'C₈H₁₂CaMgO₈', '−27.5', 'No'],
              ['Magnesium chloride', 'MgCl₂', '−33.0', 'Yes'],
              ['Calcium chloride', 'CaCl₂', '−51.0', 'Yes'],
              ['Potassium acetate', 'CH₃COOK', '−60.0', 'No'],
            ],
          },
          caption: 'De-icing infographic data: the lowest temperature at which each material melts ice, and whether it contains chloride. The airport can reach −45 °C.',
        },
      },
      {
        label: 'g',
        text: 'Chemicals containing chlorides can damage airplane surfaces by corrosion. Using information from part (f), **state** which substance could be used to de-ice runways and also could be used to remove any ice from airplane wings before flight. **Justify** your answer.',
        marks: 2,
        ph: 'Potassium acetate — contains no chloride AND works below −45°C (only substance meeting both criteria)',
      },
      {
        label: 'h',
        text: 'Natural snow is produced when water droplets fall at specific temperatures forming crystals in different patterns. Machine-made snow is produced by forcing water droplets into the air. The water droplets then become coated with more water and form small balls of ice. **Discuss** the validity of using machine-made snow to compare the effects of different de-icers.',
        marks: 3,
        ph: 'Machine-made more compact than natural; structures different; de-icers pass through natural but act on surface of machine-made; limited validity',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Property', 'Natural snow', 'Machine-made snow'],
            rows: [
              ['How it forms', 'Water droplets freeze into crystals as they fall', 'Water droplets forced into the air and coated to form small ice balls'],
              ['Particle shape', 'Branched, six-sided crystals', 'Rounded balls of ice'],
              ['Packing', 'Loose, lots of air gaps', 'More compact, fewer gaps'],
              ['How de-icer acts', 'Can pass through the open structure', 'Acts mainly on the dense surface'],
            ],
          },
          caption: 'Comparison of natural and machine-made snow. Their different structures affect how a de-icer behaves, so machine-made snow may have limited validity as a substitute.',
        },
      },
    ],
  },

  // ── Q6 (17 marks, Crit D/B) — Airport de-icing: hazards & design ──────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D/B: Hazards & investigation design — de-icing salts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'A new company is looking to provide a local community with a better de-icer for roads. You are provided with the following salts and asked to determine which will be the best one for de-icing roads: lithium chloride (LiCl), potassium chloride (KCl), magnesium chloride (MgCl₂), calcium chloride (CaCl₂), strontium chloride (SrCl₂).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Candidate de-icer salt', 'Formula', 'Group of the metal'],
        rows: [
          ['Lithium chloride', 'LiCl', 'Group 1'],
          ['Potassium chloride', 'KCl', 'Group 1'],
          ['Magnesium chloride', 'MgCl₂', 'Group 2'],
          ['Calcium chloride', 'CaCl₂', 'Group 2'],
          ['Strontium chloride', 'SrCl₂', 'Group 2'],
        ],
      },
      caption: 'The five salts provided to the company for testing as a road de-icer.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The image below shows a bottle of strontium chloride, SrCl₂. **Select** the hazard represented by this symbol.',
        marks: 1,
        ph: 'Skull and crossbones symbol = Toxic',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Radioactive', 'Toxic'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="260" height="260" fill="#ffffff"/><rect x="40" y="40" width="180" height="180" rx="6" transform="rotate(45 130 130)" fill="#ffffff" stroke="#d11507" stroke-width="10"/><g fill="#111111"><circle cx="130" cy="108" r="26"/><circle cx="120" cy="105" r="6" fill="#ffffff"/><circle cx="140" cy="105" r="6" fill="#ffffff"/><path d="M122 122 L126 134 L130 122 L134 134 L138 122 Z" fill="#ffffff"/><rect x="118" y="132" width="24" height="8" rx="3"/></g><g stroke="#111111" stroke-width="9" stroke-linecap="round"><line x1="104" y1="150" x2="156" y2="178"/><line x1="156" y1="150" x2="104" y2="178"/></g><text x="130" y="232" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Label on the SrCl₂ bottle</text></svg>',
          },
          caption: 'The hazard symbol printed on the strontium chloride bottle: a skull and crossbones on a red-bordered diamond.',
        },
      },
      {
        label: 'b',
        text: '**Design** an experiment to investigate which salt would be the best de-icer for roads. In your answer, you should include:\n- independent, dependent and control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data\n- any safety precautions you need to take.',
        marks: 16,
        ph: 'Variables (IV: type of salt, DV: time for ice to melt, CVs); equipment; method (3 repeats, same mass salt, same mass ice); safety (ionic irritants)',
      },
    ],
  },

  // ── Q7 (8 marks, Crit A/D) — Textiles: polyester and fabric comparison ─────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Ester bonds, fabric properties & sports clothing evaluation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 8,
    stem: 'The fashion industry has evolved to use a variety of textiles. Natural materials such as cotton and hemp have been used since ancient times. Newer synthetic materials such as polyester and nylon are used in weatherproof clothing. The purpose and properties of each type of material are different. As new materials are developed, we need to consider their sustainability compared to natural sources.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="200" fill="#ffffff"/><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Formation of polyester: an alcohol reacts with a carboxylic acid</text><text x="70" y="100" font-size="13" text-anchor="middle" fill="#1f2d3a">alcohol</text><text x="70" y="118" font-size="11" text-anchor="middle" fill="#64748b">(–OH)</text><text x="130" y="105" font-size="20" text-anchor="middle" fill="#1f2d3a">+</text><text x="210" y="100" font-size="13" text-anchor="middle" fill="#1f2d3a">carboxylic acid</text><text x="210" y="118" font-size="11" text-anchor="middle" fill="#64748b">(–COOH)</text><g stroke="#0b7285" stroke-width="2" fill="none" marker-end="url(#ar)"><line x1="285" y1="100" x2="345" y2="100"/></g><defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker></defs><text x="430" y="100" font-size="13" text-anchor="middle" fill="#1f2d3a">ester</text><text x="430" y="118" font-size="11" text-anchor="middle" fill="#64748b">(ester linkage)</text><text x="495" y="105" font-size="20" text-anchor="middle" fill="#1f2d3a">+</text><text x="555" y="100" font-size="13" text-anchor="middle" fill="#1f2d3a">water</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="395" y1="150" x2="420" y2="150"/><line x1="417" y1="146" x2="417" y2="128"/><line x1="423" y1="146" x2="423" y2="128"/><line x1="420" y1="150" x2="445" y2="150"/></g><g font-size="12" fill="#1f2d3a" text-anchor="middle"><text x="385" y="154">C</text><text x="420" y="124">O</text><text x="455" y="154">O</text></g><text x="420" y="178" font-size="10" text-anchor="middle" fill="#94a3ad">The ester linkage is the –C(=O)–O– group highlighted above.</text></svg>',
      },
      caption: 'Polyester forms when an alcohol (–OH) reacts with a carboxylic acid (–COOH) to make an ester plus water. The ester linkage is the –C(=O)–O– group.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Polyester is a strong synthetic fibre made when an alcohol and a carboxylic acid react to form an ester. The reaction is shown in a simplified form below.\n\n**Select** the Lewis structure showing the ester linkage formed in this reaction.',
        marks: 1,
        ph: 'Ester linkage = –C(=O)–O– group; select model B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="230" fill="#ffffff"/><text x="310" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Candidate structures for the ester linkage</text><g font-size="14" fill="#1f2d3a"><g><text x="30" y="60" font-size="13" font-weight="700">A</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="40" y1="120" x2="80" y2="120"/><line x1="80" y1="120" x2="120" y2="120"/></g><text x="80" y="125" text-anchor="middle" font-weight="700">O</text><text x="80" y="95" text-anchor="middle">H</text><line x1="80" y1="100" x2="80" y2="110" stroke="#1f2d3a" stroke-width="1.6"/><text x="130" y="125">C</text><text x="35" y="125" text-anchor="end">C</text></g><g><text x="180" y="60" font-size="13" font-weight="700">B</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="190" y1="120" x2="225" y2="120"/><line x1="222" y1="115" x2="222" y2="96"/><line x1="228" y1="115" x2="228" y2="96"/><line x1="225" y1="120" x2="260" y2="120"/><line x1="260" y1="120" x2="295" y2="120"/></g><text x="185" y="125" text-anchor="end">C</text><text x="225" y="125" text-anchor="middle" font-weight="700">C</text><text x="225" y="92" text-anchor="middle" font-weight="700">O</text><text x="263" y="125" font-weight="700">O</text><text x="300" y="125">C</text></g><g><text x="370" y="60" font-size="13" font-weight="700">C</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="380" y1="120" x2="415" y2="120"/><line x1="415" y1="120" x2="450" y2="120"/></g><text x="375" y="125" text-anchor="end">C</text><text x="415" y="125" text-anchor="middle" font-weight="700">O</text><text x="455" y="125">C</text></g><g><text x="520" y="60" font-size="13" font-weight="700">D</text><g stroke="#1f2d3a" stroke-width="1.6" fill="none"><line x1="530" y1="120" x2="565" y2="120"/><line x1="562" y1="115" x2="562" y2="96"/><line x1="568" y1="115" x2="568" y2="96"/><line x1="565" y1="120" x2="600" y2="120"/></g><text x="525" y="125" text-anchor="end">C</text><text x="565" y="125" text-anchor="middle" font-weight="700">C</text><text x="565" y="92" text-anchor="middle" font-weight="700">O</text><text x="605" y="125">H</text></g></g><text x="310" y="200" font-size="10" text-anchor="middle" fill="#94a3ad">Only one structure shows the full ester linkage: a carbon double-bonded to one oxygen and single-bonded to another oxygen.</text></svg>',
          },
          caption: 'Four candidate structures A–D. Select the one that shows the ester linkage, –C(=O)–O–, formed in the reaction.',
        },
      },
      {
        label: 'b',
        text: 'Global warming causes our planet\'s temperature to increase, therefore light and breathable materials are needed for clothing. Using information from the table and your wider MYP studies, **discuss** and **evaluate** the suitability of different types of fabric for sports clothing. In your answer you should include:\n- properties for fabrics suitable for sports clothing\n- a comparison of at least three different fabrics\n- your opinion on which fabric is the most suitable.',
        marks: 7,
        ph: 'Properties: breathable/comfort; compare Cotton/Velvet/Polyester/Nylon; opinion with justification for at least two',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Fabric', 'Fibre type', 'Breathability', 'Comfort', 'Wrinkle resistant', 'Function', 'Machine wash', 'Cost'],
            rows: [
              ['Cotton', 'Natural', '60%', '100%', 'No', 'Cooling', 'Yes', 'Medium'],
              ['Silk', 'Natural', '20%', '100%', 'No', 'Cooling', 'No', 'High'],
              ['Satin', 'Natural–synthetic mix', '60%', '100%', 'Yes', 'Warming', 'No', 'High'],
              ['Velvet', 'Natural–synthetic mix', '20%', '60%', 'No', 'Warming', 'No', 'High'],
              ['Polyester', 'Synthetic', '20%', '60%', 'Yes', 'Warming / cooling', 'Yes', 'Low'],
              ['Nylon', 'Synthetic', '0%', '60%', 'Yes', 'Warming', 'Yes', 'Low'],
            ],
          },
          caption: 'Properties of six fabrics (breathability = ability to let sweat evaporate). Use the table to compare fabrics for sports clothing.',
        },
      },
    ],
  },

  // ── Q8 (14 marks, Crit D) — Clothing waste & sustainability ─────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Environmental, economic & individual implications — clothing waste',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'The fashion industry has evolved to use a variety of textiles. Buying clothes is cheaper and more accessible than ever before. In 2011, 80 billion items of clothing were manufactured. The fashion industry is also responsible for 10% of all greenhouse gas emissions. The infographic below gives some information comparing the use of cotton to the use of fibres from reclaimed clothing.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Step', 'Making new clothing from cotton', 'Making clothing from reclaimed fibres'],
        rows: [
          ['1', 'Grow cotton (needs land, water, pesticides)', 'Used clothing is collected'],
          ['2', 'Transported to spinning facilities', 'Sorted into types of fabric'],
          ['3', 'Fibres are blended, carded, combed, pulled, stretched and twisted by machines', 'Dye removed'],
          ['4', 'Fibres transported to mills to be woven into fabric, dyed or bleached', 'Fabrics broken down mechanically into fibres'],
          ['5', 'Clothes are sewn by workers in factories', 'Fibres transported to mills to be woven into fabric'],
          ['6', 'Transported to stores to be sold', 'Clothes are sewn and sold'],
        ],
      },
      caption: 'The two routes to making clothing: growing new cotton (left) versus reclaiming fibres from used clothing (right). Reclaiming skips the land-, water- and energy-intensive growing stage.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the video and the infographic, **discuss** and **evaluate** reusing clothing as a solution to the waste created by the fashion industry. In your answer you should include:\n- advantages to the environment of reclaiming compared to manufacturing new clothing\n- impacts on the economy of reclaiming\n- choices of an individual when considering how to reuse clothing\n- a final appraisal on reusing rather than manufacturing new clothing.',
        marks: 12,
        ph: 'Environment: less deforestation/emissions; Economy: new industry/job creation; Individual: extend lifetime/make new items; Appraisal with evidence',
      },
      {
        label: 'b',
        text: 'In the nineteenth century, sewing machines were first developed. By 1876, almost a million homes in the US owned a sewing machine. Nowadays, owning a sewing machine is again growing in popularity.\n\n**Suggest** how the sewing machine could be part of the solution to reduce clothing waste.',
        marks: 2,
        ph: 'Extending the lifetime of clothing; can make new clothing to suit personal preference; less likely to discard clothing',
      },
    ],
  },
]
