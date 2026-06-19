import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2025 · VARIANT 2  (isomorphic to chemistry-may-2025)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context (distinct
// from both the source and variant 1), with a self-contained data-driven
// interactive artefact in each question's context slot (no external image
// files). Answers recomputed throughout.
//   Q1 Periodic table + moles:        jewellery → stained-glass pigments
//   Q2 Reversible/endo + funct. group: thermochromic T-shirt → vanadium-dioxide smart window
//   Q3 Redox/isotopes/atmosphere:     neon signs → emergency rescue flares (argon)
//   Q4 Hard-water classify + plot:    soap titration → boiler-scale washing-soda titration
//   Q5 Limescale-acid investigation:  pipe descaling → seashell-dissolving acids
//   Q6 Crit B design (min conc):      ethanoic acid + limescale → acetic acid + marble chips
//   Q7 Crit D evaluate plastics:      soap bottles → takeaway food containers
//   Q8 Crit D discuss soap/social:    soap types → laundry-detergent types
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-may-2025-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Stained-glass pigments: periodic table, moles ────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — stained-glass pigments',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 6,
    stem: 'Medieval stained-glass windows were coloured by adding metal-oxide pigments to molten glass. The table shows three pigments used to colour glass and their chemical formulae.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Pigment (colour)', 'Chemical formula'],
        rows: [
          ['Cobalt blue', 'CoAl₂O₄'],
          ['Chrome green', 'Cr₂O₃'],
          ['Cuprite red', 'Cu₂O'],
        ],
      },
      caption: 'Three metal-oxide pigments used to colour stained glass.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the stained-glass pigments.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 38 g sample of chrome green (Cr₂O₃). Give your answer to 2 significant figures.\n\n(Relative atomic masses: Cr = 52, O = 16)',
        marks: 3,
        ph: 'M(Cr₂O₃) = 152; n = 38/152 = 0.25 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where manganese (Mn), used to make purple glass, is found.',
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

  // ── Q2 (7 marks, Crit A) — Smart window: reversible change, VO₂ ────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Reversible reactions & functional groups — vanadium-dioxide smart window',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 7,
    stem: 'A "smart window" is coated with a thin film of a vanadium compound that changes how it transmits heat as the temperature changes. On a hot day the warm film turns a darker shade and blocks more infrared. When the film cools again at night, it returns to its original clear state. The coating contains vanadium(IV) oxide (VO₂), which is pale below 68 °C and darker above it. The same coating is used on some greenhouse panels and novelty drink coasters.',
    artefact: {
      component: 'ParticleSim',
      data: {
        title: 'Vanadium-dioxide film as the window warms and cools',
        mode: 'states',
        substance: 'vanadium(IV) oxide film',
        containers: ['Cool window (pale)', 'Hot sun (darker)'],
        states: ['solid', 'liquid'],
        options: ['Pale (cool)', 'Darker (hot)'],
      },
      caption: 'The VO₂ film switches between pale (cool) and darker (hot) and back again — a reversible change.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the film changes shade as the sun warms it.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the film cools and returns to its original pale state.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of vanadium(IV) oxide.',
        marks: 1,
        ph: 'VO₂',
      },
      {
        label: 'd',
        text: '**Suggest** the shade of a drink coaster coated with vanadium(IV) oxide in each of the situations below.',
        marks: 3,
        ph: 'Room temp → Pale; Hot mug → Darker; Fridge → Pale',
        widget: 'inline_dropdown_select',
        widgetItems: ['Room temperature', 'Under a hot mug', 'In a refrigerator'],
        widgetOptions: ['Pale', 'Darker', 'White', 'Yellow'],
      },
      {
        label: 'e',
        text: '**Select** the name of the organic functional group circled in the structure of the binder molecule that holds the film to the glass.',
        marks: 1,
        ph: 'Carboxylic acid (–COOH)',
        widget: 'radio_select',
        widgetOptions: ['Carboxylic acid', 'Aldehyde', 'Ketone', 'Ester'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="360" height="150" fill="#ffffff"/><text x="180" y="20" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Binder molecule (part)</text><line x1="50" y1="95" x2="90" y2="75" stroke="#334155" stroke-width="2"/><line x1="90" y1="75" x2="130" y2="95" stroke="#334155" stroke-width="2"/><line x1="130" y1="95" x2="170" y2="75" stroke="#334155" stroke-width="2"/><text x="50" y="110" font-size="11" text-anchor="middle" fill="#334155">CH₃</text><text x="130" y="110" font-size="11" text-anchor="middle" fill="#334155">CH₂</text><line x1="170" y1="75" x2="210" y2="75" stroke="#334155" stroke-width="2"/><text x="216" y="62" font-size="13" font-weight="700" fill="#0b7285">O</text><line x1="210" y1="75" x2="210" y2="55" stroke="#334155" stroke-width="2"/><line x1="214" y1="75" x2="214" y2="55" stroke="#334155" stroke-width="2"/><line x1="210" y1="75" x2="250" y2="95" stroke="#334155" stroke-width="2"/><text x="256" y="99" font-size="13" font-weight="700" fill="#0b7285">O</text><text x="272" y="99" font-size="13" font-weight="700" fill="#0b7285">H</text><circle cx="232" cy="80" r="30" fill="none" stroke="#e8590c" stroke-width="2.5" stroke-dasharray="4 3"/><text x="232" y="135" font-size="10" text-anchor="middle" fill="#64748b">circled group</text></svg>',
          },
          caption: 'The circled group sits at the end of the carbon chain.',
        },
      },
    ],
  },

  // ── Q3 (15 marks, Crit A) — Rescue flares: redox, isotopes, atmosphere ─────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — rescue flares',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 15,
    stem: 'Emergency rescue beacons have changed greatly over time. Early ships fired burning distress rockets from iron mortars, while modern beacons use sealed electronic strobe lamps. Some calibration lamps for these beacons are filled with the noble gas argon, which glows when an electric current passes through it.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="230" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rescue-beacon technologies</text><g><rect x="60" y="44" width="120" height="150" rx="6" fill="#fdf6ec" stroke="#b08968"/><text x="120" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#92400e">Distress rocket</text><rect x="108" y="110" width="24" height="60" fill="#d6a875" stroke="#92400e"/><path d="M120 110 L110 90 L130 90 Z" fill="#ef4444"/><path d="M120 90 Q112 74 120 62 Q128 74 120 90" fill="#f59e0b"/><text x="120" y="186" font-size="9" text-anchor="middle" fill="#92400e">iron mortar</text></g><g><rect x="220" y="44" width="120" height="150" rx="6" fill="#eef6ff" stroke="#3b82f6"/><text x="280" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#1d4ed8">Argon lamp</text><ellipse cx="280" cy="120" rx="26" ry="38" fill="#dbeafe" stroke="#1d4ed8"/><line x1="280" y1="158" x2="280" y2="172" stroke="#1d4ed8" stroke-width="3"/><text x="280" y="186" font-size="9" text-anchor="middle" fill="#1d4ed8">Ar gas fill</text></g><g><rect x="380" y="44" width="120" height="150" rx="6" fill="#f0fdf4" stroke="#16a34a"/><text x="440" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#15803d">LED strobe beacon</text><rect x="412" y="100" width="16" height="16" rx="2" fill="#22c55e"/><rect x="436" y="100" width="16" height="16" rx="2" fill="#22c55e"/><rect x="412" y="124" width="16" height="16" rx="2" fill="#22c55e"/><rect x="436" y="124" width="16" height="16" rx="2" fill="#22c55e"/><text x="440" y="170" font-size="9" text-anchor="middle" fill="#15803d">long-life LEDs</text></g></svg>',
      },
      caption: 'Rescue beacons: an early distress rocket in an iron mortar, an argon calibration lamp, and a modern LED strobe.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make rescue beacons has changed over time.',
        marks: 1,
        ph: 'Lasts longer / safer / reusable / more energy-efficient / no explosive charge',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for iron(III) oxide.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when the iron mortar rusts as iron reacts with oxygen to form iron(III) oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Iron; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each argon isotope. The number of protons has been given.',
        marks: 3,
        ph: '³⁶Ar: e=18, n=18; ⁴⁰Ar: e=18, n=22',
        widget: 'fill_blank',
        widgetOptions: ['18', '22', '36', '40', '20', '16', '24', '38', '34'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Isotope', '³⁶₁₈Ar', '⁴⁰₁₈Ar'],
            rows: [
              ['Electrons', '[?]', '[?]'],
              ['Protons', '18', '18'],
              ['Neutrons', '[?]', '[?]'],
            ],
          },
          caption: 'Complete the electron and neutron counts for the two argon isotopes.',
        },
      },
      {
        label: 'e',
        text: '**Outline** why noble gases such as argon do not cause fires inside the sealed lamp.',
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

  // ── Q4 (17 marks, Crit C) — Boiler-scale hardness, washing-soda titration ──
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hard water classification — washing-soda titration data processing',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Hard water contains dissolved calcium and magnesium salts that build up as scale inside boilers. A maintenance team tested the hardness of five boiler-feed water samples (A–E) by titrating each with a standard washing-soda solution: the more solution needed to remove all the hardness ions, the harder the water.\n\nThey then boiled samples A, C and E and titrated them again. The titration data are shown in the table.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sample', 'Initial burette / cm³', 'Final burette / cm³', 'Solution used / cm³', 'After boiling / cm³'],
        rows: [
          ['A', '0.0', '20.0', '20.0', '10.0'],
          ['B', '11.0', '21.0', '[?]', '—'],
          ['C', '0.0', '25.0', '25.0', '25.0'],
          ['D', '25.0', '[?]', '[?]', '—'],
          ['E', '0.0', '13.0', '13.0', '8.0'],
        ],
      },
      caption: 'Washing-soda titration volumes for five boiler-feed samples, before and after boiling.',
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
        text: '**Calculate** the volume of washing-soda solution used for samples B and D.',
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
            headers: ['Sample', 'Dissolved sulphate / mg dm⁻³', 'Permanent hardness / cm³ solution'],
            rows: [
              ['A', '40', '10.0'],
              ['C', '110', '25.0'],
              ['E', '32', '8.0'],
            ],
          },
          caption: 'Dissolved sulphate concentration and the permanent-hardness titration volume.',
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
        text: 'After analysing the results, the maintenance team concluded that hard water is acidic. **Comment** on the validity of their conclusion. **Justify** your answer.',
        marks: 2,
        ph: 'Invalid; hard water is not acidic / is basic; pH of hard water is above 7',
      },
    ],
  },

  // ── Q5 (12 marks, Crit B/C) — Seashell-dissolving investigation: acid types ─
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Seashell-dissolving investigation — acid types',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Seashells are made almost entirely of calcium carbonate, the same compound as limescale. Marine scientists study how ocean acidification dissolves shells by reacting shell pieces with acids:\n\ncalcium carbonate + acid → calcium salt + carbon dioxide + water\n\nA group of students investigated which acid dissolves seashell fastest. They used hydrochloric acid, ethanoic acid, sulfuric acid and carbonic acid. They also tested a sample of acidified seawater.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Mass of seashell dissolved by each acid',
        mode: 'bars',
        variable: 'Acid used',
        metric: 'Mass of shell dissolved / g',
        bars: [
          { label: 'Hydrochloric', value: 4.5 },
          { label: 'Ethanoic', value: 2.6 },
          { label: 'Sulfuric', value: 1.8 },
          { label: 'Carbonic', value: 0.8 },
          { label: 'Acid seawater', value: 0.4 },
        ],
        note: 'A larger mass of shell dissolved means the acid is more effective. (Sulfuric acid forms an insoluble calcium sulfate layer on the shell, which slows the reaction.)',
      },
      caption: 'Mass of seashell dissolved by each acid in a fixed time.',
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
        ph: 'How does the type of acid affect the time / mass of seashell dissolved?',
      },
      {
        label: 'c',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nTwo controlled variables:',
        marks: 4,
        ph: 'IV: type of acid; DV: time or mass; CVs: volume of acid, concentration of acid, temperature, mass of shell',
      },
      {
        label: 'd',
        text: 'The students presented their data in the table below (mass of shell before and after for each acid). **Suggest** two ways in which the data **presentation** could be improved.',
        marks: 2,
        ph: 'Include unit of mass / give values to consistent d.p. / show change in mass / add title / give concentration of acid seawater',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Acid', 'Mass before', 'Mass after'],
            rows: [
              ['Hydrochloric', '8', '3.5'],
              ['Ethanoic', '7.6', '5'],
              ['Sulfuric', '8.1', '6.3'],
              ['Carbonic', '8.4', '7.6'],
              ['Acid seawater', '8.2', '7.8'],
            ],
          },
          caption: 'Students\' results table — to be critiqued for presentation.',
        },
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at dissolving seashell using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Hydrochloric acid; the mass changed the most (4.5 g reduction)',
      },
      {
        label: 'f',
        text: 'A second group of students noticed that the masses before the test in the table were all different. **Suggest** a reason why the masses before were different.',
        marks: 1,
        ph: 'Different masses / sizes of shell pieces were used',
      },
      {
        label: 'g',
        text: 'The students only carried out this investigation once. **Comment** on how this will affect the validity of the data collected.',
        marks: 1,
        ph: 'Data not valid / should have more trials / cannot calculate average / cannot exclude outliers',
      },
    ],
  },

  // ── Q6 (19 marks, Crit B) — Acetic acid + marble experiment design ─────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum acetic acid concentration to dissolve marble',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'Acid rain slowly damages marble statues, which are made of calcium carbonate. A conservation team wants to test how dilute an acid can be while still attacking marble, so they can warn cities about pollution limits. Acetic acid (vinegar) is a safe, cheap acid for modelling acid rain in the lab. In line with the principles of green chemistry, the students want to find the lowest concentration of acetic acid that would dissolve a given mass of marble chips.\n\nThe students are provided with distilled water, marble chips of known mass, and an acetic acid solution of concentration 1.5 mol dm⁻³.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Marble dissolving — gas given off vs time at different acetic acid concentrations',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 60, tick: 10 },
        reaction: 'CaCO₃ + acetic acid → calcium acetate + CO₂ + H₂O',
        options: [
          { label: '0.375 mol dm⁻³', color: 'purple', ratePerSec: 0.3, plateauVolume: 32 },
          { label: '0.75 mol dm⁻³', color: 'teal', ratePerSec: 0.55, plateauVolume: 48 },
          { label: '1.50 mol dm⁻³', color: 'orange', ratePerSec: 1.0, plateauVolume: 50 },
        ],
        note: 'Higher acid concentration dissolves the marble faster, but all reach a similar final CO₂ volume.',
      },
      caption: 'A preliminary run showing how the rate of CO₂ release changes with acid concentration.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test acetic acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'HCl not a common household chemical / acetic acid safer / weaker acid / better models acid rain / easier to dispose of',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of acetic acid required to dissolve a given mass of marble. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: acetic acid concentration; DV: mass marble remaining / time; CVs: mass marble, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastics for takeaway food containers ──────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for takeaway food containers',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Takeaway and delivery food is increasingly popular, and most meals are served in single-use plastic containers. This has increased the demand for food-grade plastic and the waste it creates.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic used for food containers.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plastic', 'Source', 'Biodegradable?', 'Recyclable?', 'Relative cost'],
        rows: [
          ['Polypropylene (PP)', 'crude oil', 'no', 'yes', 'low'],
          ['Bagasse fibre', 'sugarcane waste', 'yes (compostable)', 'limited', 'high'],
          ['PLA', 'plant starch', 'yes (industrial compost)', 'limited', 'medium'],
        ],
      },
      caption: 'Three materials considered for takeaway food containers.',
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
        text: '**Discuss** and **evaluate** the different types of plastic used for takeaway food containers. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in food containers\n• a comparison of the suitability of the three types of **plastic** for food containers\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/heat-resistant/food-safe justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Detergent types, production & social impacts ────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — laundry-detergent types, production processes and social impacts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'Laundry detergents lift dirt and grease from clothes. Traditional soap-based detergents are made from animal and plant fats. Most modern detergents are synthetic, made from crude oil. A recent innovation produces the cleaning agents by fermenting sugar with engineered yeast. The table below gives information about different types of laundry detergent.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Soap-based detergent', 'Crude-oil-based detergent', 'Detergent from yeast'],
        rows: [
          ['Raw materials', 'Plant or animal fat', 'Crude oil', 'Fermented sugar (yeast)'],
          ['Toxic potential', 'Low', 'High (additives needed)', 'Not yet known'],
          ['Cleaning in hard water', 'Poor (forms scum)', 'Good', 'Good'],
          ['Cost', 'Intermediate', 'Lowest', 'Highest'],
          ['Availability', 'Limited', 'High', 'Very limited'],
          ['Allergy risk', 'Sensitivities to fats', 'Sensitivities to additives', 'Sensitivities to additives'],
        ],
      },
      caption: 'Comparison of three types of laundry detergent.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of laundry detergent to use. In your answer you should include:\n• a comparison between the production processes of detergent made using yeast and one other type of detergent\n• two social impacts that could be considered when choosing between these two types of detergent.',
        marks: 7,
        ph: 'Production: yeast detergent fermented from sugar vs crude oil / animal fat; social: cost difference, toxic potential, allergy risk, environmental ethics, availability, performance in hard water',
      },
    ],
  },
]
