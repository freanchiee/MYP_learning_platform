import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2025 · VARIANT 1  (isomorphic to chemistry-may-2025)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven interactive artefact in each question's context
// slot (no external image files). Answers recomputed throughout.
//   Q1 Periodic table + moles:        jewellery → meteorite minerals (olivine)
//   Q2 Reversible/endo + funct. group: thermochromic T-shirt → mood-ring CoCl₂
//   Q3 Redox/isotopes/atmosphere:     neon signs → lighthouse xenon lamps
//   Q4 Hard-water classify + plot:    soap titration → EDTA titration (spa waters)
//   Q5 Limescale-acid investigation:  pipe descaling → rust removal from tools
//   Q6 Crit B design (min conc):      ethanoic acid + limescale → citric acid + eggshell
//   Q7 Crit D evaluate plastics:      soap bottles → drinking-water bottles
//   Q8 Crit D discuss soap/social:    soap types → dye types
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2025-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Meteorite minerals: periodic table, moles ────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — meteorite minerals',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 6,
    stem: 'Stony meteorites that fall to Earth are made from several minerals that also occur in the planet\'s mantle. The table shows three minerals found in a freshly collected meteorite and their chemical formulae.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Mineral', 'Chemical formula'],
        rows: [
          ['Olivine', 'Mg₂SiO₄'],
          ['Anorthite', 'CaAl₂Si₂O₈'],
          ['Chromite', 'FeCr₂O₄'],
        ],
      },
      caption: 'Three minerals identified in a stony meteorite sample.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the meteorite minerals.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 42 g piece of olivine (Mg₂SiO₄). Give your answer to 2 significant figures.\n\n(Relative atomic masses: Mg = 24, Si = 28, O = 16)',
        marks: 3,
        ph: 'M(Mg₂SiO₄) = 140; n = 42/140 = 0.30 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where nickel (Ni), commonly found in iron meteorites, is located.',
        marks: 1,
        ph: 'Transition metals (d-block)',
        widget: 'radio_select',
        widgetOptions: [
          's-block / Groups 1–2',
          'p-block / Groups 13–18',
          'd-block / transition metals',
          'f-block / lanthanides and actinides',
        ],
      },
    ],
  },

  // ── Q2 (7 marks, Crit A) — Mood ring: reversible colour change, CoCl₂ ───────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reversible reactions & functional groups — mood-ring cobalt chloride',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 7,
    stem: 'A "mood ring" contains a thin gel layer of a cobalt compound that changes colour with temperature. When a warm finger wears the ring, the gel changes colour. When the ring is taken off and cools, it returns to its original colour. The colour-changing layer contains cobalt(II) chloride (CoCl₂), which is blue when warm and pink when cool. The same compound is used in some humidity indicators and novelty mugs.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Cobalt chloride gel as the ring warms and cools',
        mode: 'states',
        substance: 'cobalt(II) chloride gel',
        containers: ['Cool ring (pink)', 'Warm finger (blue)'],
        states: ['solid', 'liquid'],
        options: ['Pink (cool)', 'Blue (warm)'],
      },
      caption: 'The cobalt(II) chloride layer switches between pink (cool) and blue (warm) and back again — a reversible change.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the ring changes colour as a warm finger heats it.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the ring cools and returns to its original colour.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of cobalt(II) chloride.',
        marks: 1,
        ph: 'CoCl₂',
      },
      {
        label: 'd',
        text: '**Suggest** the colour of a mug coated with cobalt(II) chloride gel in each of the situations below.',
        marks: 3,
        ph: 'Room temp → Pink; Hot tea → Blue; Fridge → Pink',
        widget: 'inline_dropdown_select',
        widgetItems: ['Room temperature', 'Cup of hot tea', 'In a refrigerator'],
        widgetOptions: ['Pink', 'Blue', 'White', 'Yellow'],
      },
      {
        label: 'e',
        text: '**Select** the name of the organic functional group circled in the structure of the dye molecule bound to the gel.',
        marks: 1,
        ph: 'Hydroxyl (–OH) of an alcohol',
        widget: 'radio_select',
        widgetOptions: ['Alcohol', 'Aldehyde', 'Ketone', 'Ester'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="150" fill="#ffffff"/><text x="180" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Dye molecule (part)</text><line x1="60" y1="90" x2="100" y2="70" stroke="#334155" stroke-width="2"/><line x1="100" y1="70" x2="140" y2="90" stroke="#334155" stroke-width="2"/><line x1="140" y1="90" x2="180" y2="70" stroke="#334155" stroke-width="2"/><line x1="180" y1="70" x2="220" y2="90" stroke="#334155" stroke-width="2"/><text x="60" y="105" font-size="11" text-anchor="middle" fill="#334155">CH₃</text><text x="140" y="105" font-size="11" text-anchor="middle" fill="#334155">CH₂</text><line x1="220" y1="90" x2="260" y2="70" stroke="#334155" stroke-width="2"/><text x="266" y="74" font-size="13" font-weight="700" fill="#0b7285">O</text><text x="284" y="74" font-size="13" font-weight="700" fill="#0b7285">H</text><circle cx="272" cy="68" r="22" fill="none" stroke="#e8590c" stroke-width="2.5" stroke-dasharray="4 3"/><text x="272" y="120" font-size="10" text-anchor="middle" fill="#64748b">circled group</text></svg>',
          },
          caption: 'The circled group is bonded to a carbon chain.',
        },
      },
    ],
  },

  // ── Q3 (15 marks, Crit A) — Lighthouse lamps: redox, isotopes, atmosphere ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — lighthouse lamps',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 15,
    stem: 'Lighthouse lamps have changed greatly over time. Early lighthouses burned oil in lamps held in iron frameworks, while modern lighthouses use sealed high-intensity discharge bulbs. Many of these bulbs are filled with the noble gas xenon, which gives a bright white flash.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="230" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lighthouse lamp technologies</text><g><rect x="60" y="44" width="120" height="150" rx="6" fill="#fdf6ec" stroke="#b08968"/><text x="120" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#92400e">Early oil lamp</text><rect x="100" y="120" width="40" height="50" fill="#d6a875" stroke="#92400e"/><path d="M120 120 Q108 100 120 84 Q132 100 120 120" fill="#f59e0b"/><text x="120" y="186" font-size="9" text-anchor="middle" fill="#92400e">iron frame</text></g><g><rect x="220" y="44" width="120" height="150" rx="6" fill="#eef6ff" stroke="#3b82f6"/><text x="280" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">Xenon bulb</text><ellipse cx="280" cy="120" rx="26" ry="38" fill="#dbeafe" stroke="#1d4ed8"/><line x1="280" y1="158" x2="280" y2="172" stroke="#1d4ed8" stroke-width="3"/><text x="280" y="186" font-size="9" text-anchor="middle" fill="#1d4ed8">Xe gas fill</text></g><g><rect x="380" y="44" width="120" height="150" rx="6" fill="#f0fdf4" stroke="#16a34a"/><text x="440" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">Modern LED array</text><rect x="412" y="100" width="16" height="16" rx="2" fill="#22c55e"/><rect x="436" y="100" width="16" height="16" rx="2" fill="#22c55e"/><rect x="412" y="124" width="16" height="16" rx="2" fill="#22c55e"/><rect x="436" y="124" width="16" height="16" rx="2" fill="#22c55e"/><text x="440" y="170" font-size="9" text-anchor="middle" fill="#15803d">long-life LEDs</text></g></svg>',
      },
      caption: 'Lighthouse lamps: early oil lamp in an iron frame, a xenon discharge bulb, and a modern LED array.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make lighthouse lamps has changed over time.',
        marks: 1,
        ph: 'Lasts longer / brighter / more energy-efficient / less maintenance',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for iron(III) oxide.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when the iron framework rusts as iron reacts with oxygen to form iron(III) oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Iron; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each xenon isotope. The number of protons has been given.',
        marks: 3,
        ph: '¹²⁹Xe: e=54, n=75; ¹³²Xe: e=54, n=78',
        widget: 'fill_blank',
        widgetOptions: ['54', '75', '78', '129', '132', '70', '72', '56', '76'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Isotope', '¹²⁹₅₄Xe', '¹³²₅₄Xe'],
            rows: [
              ['Electrons', '[?]', '[?]'],
              ['Protons', '54', '54'],
              ['Neutrons', '[?]', '[?]'],
            ],
          },
          caption: 'Complete the electron and neutron counts for the two xenon isotopes.',
        },
      },
      {
        label: 'e',
        text: '**Outline** why noble gases such as xenon do not cause fires inside the sealed bulb.',
        marks: 1,
        ph: 'Have full/complete outer electron shells; do not react',
      },
      {
        label: 'f',
        text: '**State** the electronic configuration of an oxygen atom.',
        marks: 1,
        ph: '2,6',
      },
      {
        label: 'g',
        text: '**Outline** the bonding found in oxygen molecules (O₂).',
        marks: 2,
        ph: 'Covalent bonding; electrons shared between the two oxygen atoms',
      },
      {
        label: 'h',
        text: '**Identify** which layer of the atmosphere contains particles with the highest kinetic energy. **Justify** your answer.\n\nUse the temperature–height profile in the figure.',
        marks: 2,
        ph: 'Exosphere; highest temperature → highest kinetic energy',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Temperature against height in the atmosphere',
            xLabel: 'Temperature',
            yLabel: 'Height',
            xUnit: '°C',
            yUnit: 'km',
            xMin: -100,
            xMax: 1200,
            yMin: 0,
            yMax: 600,
            xStep: 200,
            yStep: 100,
            dataPoints: [
              { x: 15, y: 0 },
              { x: -55, y: 12 },
              { x: -2, y: 50 },
              { x: -90, y: 85 },
              { x: 500, y: 300 },
              { x: 1100, y: 550 },
            ],
          },
          caption: 'Diagram B: temperature rises sharply in the upper atmosphere. Read which layer is hottest.',
        },
      },
      {
        label: 'i',
        text: 'When oxygen high in the atmosphere gains energy from solar flares it becomes unstable. The gained energy is lost naturally and released as green light. **Suggest** which layer of the atmosphere you would expect to find the green lights in. **Justify** your answer.\n\nUse the composition profile in the figure.',
        marks: 2,
        ph: 'Thermosphere; this is where the most oxygen is found',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Atmospheric layer', 'Height / km', 'Oxygen content / %'],
            rows: [
              ['Troposphere', '0–12', '21'],
              ['Stratosphere', '12–50', '18'],
              ['Mesosphere', '50–85', '12'],
              ['Thermosphere', '85–600', '60'],
            ],
          },
          caption: 'Diagram A: proportion of atomic/molecular oxygen by layer.',
        },
      },
    ],
  },

  // ── Q4 (17 marks, Crit C) — Spa-water hardness, EDTA titration ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hard water classification — EDTA titration data processing',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Hard water contains dissolved calcium and magnesium salts. A spa company tested the hardness of five spring-water samples (A–E) by titrating each with EDTA solution: the more EDTA needed to reach the colour change, the harder the water.\n\nThey then boiled samples A, C and E and titrated them again. The titration data are shown in the table.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sample', 'Initial burette / cm³', 'Final burette / cm³', 'EDTA used / cm³', 'After boiling / cm³'],
        rows: [
          ['A', '0.0', '20.0', '20.0', '10.0'],
          ['B', '11.0', '21.0', '[?]', '—'],
          ['C', '0.0', '25.0', '25.0', '25.0'],
          ['D', '25.0', '[?]', '[?]', '—'],
          ['E', '0.0', '13.0', '13.0', '8.0'],
        ],
      },
      caption: 'EDTA titration volumes for five spa-water samples, before and after boiling.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Determine** the final burette reading for sample D using the burette diagram. State the reading to 1 decimal place.',
        marks: 2,
        ph: '49.0 cm³',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="200" height="220" fill="#ffffff"/><text x="100" y="18" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Burette (sample D, final)</text><rect x="86" y="30" width="28" height="160" rx="4" fill="#eaf6f8" stroke="#5b6b78"/><rect x="86" y="170" width="28" height="20" fill="#9bd3da"/><line x1="86" y1="50" x2="78" y2="50" stroke="#334155"/><text x="74" y="53" font-size="9" text-anchor="end" fill="#475569">47</text><line x1="86" y1="70" x2="78" y2="70" stroke="#334155"/><text x="74" y="73" font-size="9" text-anchor="end" fill="#475569">48</text><line x1="86" y1="90" x2="78" y2="90" stroke="#334155"/><text x="74" y="93" font-size="9" text-anchor="end" fill="#475569">49</text><line x1="86" y1="110" x2="78" y2="110" stroke="#334155"/><text x="74" y="113" font-size="9" text-anchor="end" fill="#475569">50</text><line x1="84" y1="90" x2="116" y2="90" stroke="#0b7285" stroke-width="1.5"/><path d="M86 90 Q100 96 114 90" fill="none" stroke="#0b7285" stroke-width="1.5"/><text x="130" y="93" font-size="9" fill="#0b7285">meniscus</text></svg>',
          },
          caption: 'Read the bottom of the meniscus to 1 decimal place.',
        },
      },
      {
        label: 'b',
        text: '**Calculate** the volume of EDTA solution used for samples B and D.',
        marks: 2,
        ph: 'B = 10.0 cm³; D = 24.0 cm³',
      },
      {
        label: 'c',
        text: '**Classify** each of the samples A, C, and E as temporary hard, permanent hard, or a mixture of both. **Justify** each classification.\n\nAfter boiling — Sample A: 10.0 cm³; Sample C: 25.0 cm³; Sample E: 8.0 cm³',
        marks: 5,
        ph: 'A: temporary (volume halved after boiling); C: permanent (volume unchanged); E: mixture (volume slightly reduced)',
      },
      {
        label: 'd',
        text: '**Formulate** a hypothesis linking the permanent hardness to the dissolved sulphate-salt concentration in the data table.',
        marks: 2,
        ph: 'If concentration of dissolved sulphate salts increases, then permanent hardness increases; because Ca²⁺/Mg²⁺ ions from sulphates cause permanent hardness',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Sample', 'Dissolved sulphate / mg dm⁻³', 'Permanent hardness / cm³ EDTA'],
            rows: [
              ['A', '40', '10.0'],
              ['C', '110', '25.0'],
              ['E', '32', '8.0'],
            ],
          },
          caption: 'Dissolved sulphate concentration and the permanent-hardness EDTA volume.',
        },
      },
      {
        label: 'e',
        text: '**Plot** a graph of pH against permanent hardness using the data provided. Label both axes with a quantity and a unit.\n\nData (hardness in mg dm⁻³, pH): (15, 6.6), (48, 7.4), (95, 7.6), (160, 7.9), (290, 8.3).',
        marks: 4,
        ph: 'Hardness on x-axis (mg dm⁻³); pH on y-axis; even scale; at least 3 points plotted correctly',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pH against permanent hardness (worked answer)',
            xLabel: 'Permanent hardness',
            yLabel: 'pH',
            xUnit: 'mg dm⁻³',
            xMin: 0,
            xMax: 300,
            yMin: 6,
            yMax: 9,
            xStep: 50,
            yStep: 0.5,
            dataPoints: [
              { x: 15, y: 6.6 },
              { x: 48, y: 7.4 },
              { x: 95, y: 7.6 },
              { x: 160, y: 7.9 },
              { x: 290, y: 8.3 },
            ],
          },
          caption: 'Plot hardness (mg dm⁻³) on the x-axis and pH on the y-axis.',
        },
      },
      {
        label: 'f',
        text: 'After analysing the results, the spa company concluded that hard water is acidic. **Comment** on the validity of their conclusion. **Justify** your answer.',
        marks: 2,
        ph: 'Invalid; hard water is not acidic / is basic; pH of hard water is above 7',
      },
    ],
  },

  // ── Q5 (12 marks, Crit B/C) — Rust removal investigation: acid types ───────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Rust removal investigation — acid types',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Garden tools left outdoors develop a coating of rust (hydrated iron(III) oxide). Rust can be removed by reacting it with an acid:\n\niron(III) oxide + acid → iron salt + water\n\nA group of students investigated which acid is best for removing rust from old steel tools. They used hydrochloric acid, oxalic acid, phosphoric acid and citric acid. They also tested a shop-bought rust remover.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Mass of rust removed by each acid',
        mode: 'bars',
        variable: 'Acid used',
        metric: 'Mass of rust removed / g',
        bars: [
          { label: 'Hydrochloric', value: 4.5 },
          { label: 'Oxalic', value: 4.0 },
          { label: 'Phosphoric', value: 3.0 },
          { label: 'Citric', value: 1.5 },
          { label: 'Shop remover', value: 4.2 },
        ],
        note: 'A larger mass of rust removed means the acid is more effective.',
      },
      caption: 'Mass of rust removed from identical rusty tools by each acid.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the hazard represented by the symbol shown.',
        marks: 1,
        ph: 'Corrosive',
        widget: 'radio_select',
        widgetOptions: ['Corrosive', 'Flammable', 'Toxic', 'Oxidising'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="160" height="160" fill="#ffffff"/><rect x="30" y="30" width="100" height="100" transform="rotate(45 80 80)" fill="#ffffff" stroke="#dc2626" stroke-width="6"/><path d="M52 64 l14 8 M70 60 v18" stroke="#111827" stroke-width="3" fill="none"/><path d="M48 78 q6 8 14 8" stroke="#111827" stroke-width="3" fill="none"/><path d="M60 86 l-6 12 M58 92 l8 0" stroke="#111827" stroke-width="3"/><path d="M92 60 v18 M88 64 l10 6" stroke="#111827" stroke-width="3" fill="none"/><path d="M100 78 q-6 8 -14 8" stroke="#111827" stroke-width="3" fill="none"/><path d="M96 86 l6 12 M94 92 l8 0" stroke="#111827" stroke-width="3"/><rect x="70" y="96" width="20" height="6" fill="#111827"/></svg>',
          },
          caption: 'GHS hazard pictogram on the acid bottle.',
        },
      },
      {
        label: 'b',
        text: '**Formulate** a research question for the students\' investigation.',
        marks: 1,
        ph: 'How does the type of acid affect the time / mass of rust removed?',
      },
      {
        label: 'c',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nTwo controlled variables:',
        marks: 4,
        ph: 'IV: type of acid; DV: time or mass; CVs: volume of acid, concentration of acid, temperature, size of tool',
      },
      {
        label: 'd',
        text: 'The students presented their data in the table below (mass of tool before and after rust removal for each acid). **Suggest** two ways in which the data **presentation** could be improved.',
        marks: 2,
        ph: 'Include unit of mass / give values to consistent d.p. / show change in mass / add title / give chemical name of shop-bought remover',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Acid', 'Mass before', 'Mass after'],
            rows: [
              ['Hydrochloric', '28', '23.5'],
              ['Oxalic', '27.4', '23.4'],
              ['Phosphoric', '29', '26'],
              ['Citric', '28.6', '27.1'],
              ['Shop remover', '30.2', '26'],
            ],
          },
          caption: 'Students\' results table — to be critiqued for presentation.',
        },
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at removing rust using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Hydrochloric acid; the mass changed the most (4.5 g reduction)',
      },
      {
        label: 'f',
        text: 'A second group of students noticed that the masses before rust removal in the table were all different. **Suggest** a reason why the masses before rust removal were different.',
        marks: 1,
        ph: 'Different masses of rust / different sized tools were used',
      },
      {
        label: 'g',
        text: 'The students only carried out this investigation once. **Comment** on how this will affect the validity of the data collected.',
        marks: 1,
        ph: 'Data not valid / should have more trials / cannot calculate average / cannot exclude outliers',
      },
    ],
  },

  // ── Q6 (19 marks, Crit B) — Citric acid + eggshell experiment design ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum citric acid concentration to dissolve eggshell',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'Eggshell is almost pure calcium carbonate, the same compound as limescale and marble. A food-science class wants to advise a bakery on the gentlest way to soften eggshells for a recipe. Citric acid (the acid in lemon juice) is a common, food-safe household acid. In line with the principles of green chemistry, the students want to find the lowest concentration of citric acid that would dissolve a given mass of eggshell.\n\nThe students are provided with distilled water, pieces of eggshell of known mass, and a citric acid solution of concentration 1.0 mol dm⁻³.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Eggshell dissolving — gas given off vs time at different citric acid concentrations',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 60, tick: 10 },
        reaction: 'CaCO₃ + citric acid → calcium citrate + CO₂ + H₂O',
        options: [
          { label: '0.25 mol dm⁻³', color: 'purple', ratePerSec: 0.28, plateauVolume: 30 },
          { label: '0.50 mol dm⁻³', color: 'teal', ratePerSec: 0.5, plateauVolume: 48 },
          { label: '1.00 mol dm⁻³', color: 'orange', ratePerSec: 0.95, plateauVolume: 50 },
        ],
        note: 'Higher acid concentration dissolves the eggshell faster, but all reach a similar final CO₂ volume.',
      },
      caption: 'A preliminary run showing how the rate of CO₂ release changes with acid concentration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test citric acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'HCl not a common household chemical / citric acid safer / weaker acid / food-safe / easier to dispose of',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of citric acid required to dissolve a given mass of eggshell. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: citric acid concentration; DV: mass eggshell remaining / time; CVs: mass eggshell, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastic bottles for drinking water ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for drinking-water bottles',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Bottled drinking water is sold worldwide, and demand has risen as more people avoid sugary drinks. This has increased the demand for plastic bottles and the waste they create.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic used for water bottles.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plastic', 'Source', 'Biodegradable?', 'Recyclable?', 'Relative cost'],
        rows: [
          ['PET', 'crude oil', 'no', 'yes (widely)', 'low'],
          ['PLA', 'plant starch', 'yes (industrial compost)', 'limited', 'high'],
          ['rPET', 'recycled crude-oil plastic', 'no', 'yes', 'medium'],
        ],
      },
      caption: 'Three plastics considered for drinking-water bottles.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Ethene can be used to produce a crude-oil-based non-biodegradable plastic called polyethene. **Select** the Lewis structure of ethene.',
        marks: 1,
        ph: 'Ethene (C₂H₄) has a C=C double bond with 2H on each carbon; option B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="140" fill="#ffffff"/><text x="240" y="18" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Which is ethene (C₂H₄)?</text><g><text x="60" y="40" font-size="10" font-weight="700" text-anchor="middle" fill="#475569">A</text><text x="60" y="80" font-size="13" text-anchor="middle" fill="#334155">H₃C–CH₃</text><text x="60" y="98" font-size="8" text-anchor="middle" fill="#94a3b8">single bond</text></g><g><text x="180" y="40" font-size="10" font-weight="700" text-anchor="middle" fill="#475569">B</text><text x="180" y="80" font-size="13" text-anchor="middle" fill="#0b7285">H₂C=CH₂</text><text x="180" y="98" font-size="8" text-anchor="middle" fill="#94a3b8">double bond</text></g><g><text x="300" y="40" font-size="10" font-weight="700" text-anchor="middle" fill="#475569">C</text><text x="300" y="80" font-size="13" text-anchor="middle" fill="#334155">HC≡CH</text><text x="300" y="98" font-size="8" text-anchor="middle" fill="#94a3b8">triple bond</text></g><g><text x="420" y="40" font-size="10" font-weight="700" text-anchor="middle" fill="#475569">D</text><text x="420" y="80" font-size="13" text-anchor="middle" fill="#334155">H₃C–OH</text><text x="420" y="98" font-size="8" text-anchor="middle" fill="#94a3b8">contains O</text></g></svg>',
          },
          caption: 'Four candidate structures A–D.',
        },
      },
      {
        label: '',
        text: '**Discuss** and **evaluate** the different types of plastic used for drinking-water bottles. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in water bottles\n• a comparison of the suitability of the three types of **plastic** for water bottles\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/transparent/durable justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Dye types, production & social impacts ──────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — dye types, production processes and social impacts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'For centuries, fabric dyes were made from natural sources such as plants, insects and minerals. Most modern dyes are synthetic, made from crude oil. A recent innovation grows pigments from engineered bacteria fed on food waste. The table below gives information about different types of dye.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Natural dye', 'Crude-oil-based dye', 'Dye from bacteria'],
        rows: [
          ['Raw materials', 'Plants / insects', 'Crude oil', 'Engineered bacteria + food waste'],
          ['Toxic potential', 'Low', 'High (some are toxic)', 'Not yet known'],
          ['Colour range', 'Limited', 'Very wide', 'Growing'],
          ['Cost', 'Intermediate', 'Lowest', 'Highest'],
          ['Availability', 'Limited', 'High', 'Very limited'],
          ['Allergy risk', 'Some natural sensitivities', 'Sensitivities to additives', 'Sensitivities to additives'],
        ],
      },
      caption: 'Comparison of three types of fabric dye.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of dye to use. In your answer you should include:\n• a comparison between the production processes of dye made using bacteria and one other type of dye\n• two social impacts that could be considered when choosing between these two types of dye.',
        marks: 7,
        ph: 'Production: bacterial dye grown from food waste vs crude oil / plant extraction; social: cost difference, toxic potential, allergy risk, environmental ethics, availability',
      },
    ],
  },
]
