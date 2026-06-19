import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2025',
  subject: 'Chemistry',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (6 marks, Crit A) — Jewellery: periodic table, moles ────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic table, moles & chromatography — jewellery materials',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 6,
    stem: 'Jewellery from around the world uses different materials. The table shows three precious materials and their chemical formulas.\n\n| Material | Chemical formula |\n|---|---|\n| Pearl | CaCO₃ |\n| Jade | NaAlSi₂O₆ |\n| Ruby | Al₂O₃ |',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="240" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Where the key elements sit in the periodic table</text><g><rect x="40" y="40" width="56" height="48" fill="#e8f3ef" stroke="#5b6b78"/><text x="68" y="56" font-size="8" text-anchor="middle" fill="#64748b">P3 · G16</text><text x="68" y="74" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">O</text><text x="68" y="85" font-size="8" text-anchor="middle" fill="#64748b">oxygen · 8</text></g><text x="40" y="108" font-size="10" fill="#475569">Oxygen (O): Group 16, Period 2 — present in all</text><text x="40" y="122" font-size="10" fill="#475569">three jewellery materials (CaCO₃, NaAlSi₂O₆, Al₂O₃).</text><g><rect x="40" y="150" width="540" height="56" fill="#fbf3e8" stroke="#c98a3c"/><text x="52" y="168" font-size="10" font-weight="700" fill="#9a6a26">d-block — transition metals (Groups 3–12)</text><rect x="300" y="176" width="48" height="24" fill="#f1c27d" stroke="#9a6a26"/><text x="324" y="192" font-size="12" font-weight="700" text-anchor="middle" fill="#7a3d12">Cr</text><text x="356" y="192" font-size="10" fill="#7a3d12">chromium (24) — a transition metal</text></g><text x="40" y="226" font-size="9" fill="#94a3ad">s-block = Groups 1–2 · p-block = Groups 13–18 · d-block = transition metals · f-block = lanthanides/actinides</text></svg>',
      },
      caption: 'Oxygen sits in Group 16, Period 2; chromium sits in the d-block (transition metals).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the group and the period of the element that is present in all three of the jewellery materials.',
        marks: 2,
        ph: 'Oxygen (O); Group 16, Period 2',
      },
      {
        label: 'b',
        text: '**Calculate** the number of moles in a 75 g piece of jade (NaAlSi₂O₆). Give your answer to 2 significant figures.\n\n(Relative atomic masses: Na = 23, Al = 27, Si = 28, O = 16)',
        marks: 3,
        ph: 'M(NaAlSi₂O₆) = 202; n = 75/202 = 0.37 mol',
      },
      {
        label: 'c',
        text: '**Select** the section of the periodic table where chromium (Cr) is found.',
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

  // ── Q2 (7 marks, Crit A) — Thermochromism, CuI, functional groups ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Thermochromism, reversible reactions & functional groups — CuI colour-change',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 7,
    stem: 'Some T-shirts are made with thermochromic dyes that change colour when the temperature changes. When a warm hand is placed on the T-shirt, the dye changes colour. When the hand is removed, the T-shirt returns to its original colour.\n\nThermochromic compounds contain copper(I) iodide (CuI), which changes colour when heated or cooled. Mugs and other objects can also be made with CuI.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="200" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Colour of copper(I) iodide (CuI) versus temperature</text><defs><linearGradient id="tgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8b5a2b"/><stop offset="0.5" stop-color="#8b5a2b"/><stop offset="0.7" stop-color="#6aa84f"/><stop offset="1" stop-color="#6aa84f"/></linearGradient></defs><rect x="60" y="60" width="500" height="30" fill="url(#tgrad)" stroke="#5b6b78"/><line x1="60" y1="90" x2="60" y2="100" stroke="#333"/><line x1="310" y1="90" x2="310" y2="100" stroke="#333"/><line x1="560" y1="90" x2="560" y2="100" stroke="#333"/><text x="60" y="116" font-size="10" text-anchor="middle" fill="#475569">cold</text><text x="310" y="116" font-size="10" text-anchor="middle" fill="#475569">warm (≈ 60 °C)</text><text x="560" y="116" font-size="10" text-anchor="middle" fill="#475569">hot</text><text x="160" y="80" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">BROWN</text><text x="450" y="80" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">GREEN</text><text x="60" y="150" font-size="11" fill="#475569">Below the transition temperature CuI is brown; on heating it</text><text x="60" y="166" font-size="11" fill="#475569">becomes green, then turns brown again on cooling (reversible).</text></svg>',
      },
      caption: 'CuI is brown when cool and green when hot — the colour change is reversible.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of change that occurs when the T-shirt changes colour as a hand is placed on it.',
        marks: 1,
        ph: 'Endothermic',
        widget: 'radio_select',
        widgetOptions: ['Endothermic', 'Exothermic', 'Irreversible', 'Physical'],
      },
      {
        label: 'b',
        text: '**State** the scientific term used to describe the colour change when the T-shirt returns to its original colour.',
        marks: 1,
        ph: 'Reversible',
      },
      {
        label: 'c',
        text: '**State** the chemical formula of copper(I) iodide.',
        marks: 1,
        ph: 'CuI',
      },
      {
        label: 'd',
        text: '**Suggest** the colour of a cup made from CuI in each of the situations below.',
        marks: 3,
        ph: 'Room temp → Brown; Hot coffee → Green; Fridge → Brown',
        widget: 'inline_dropdown_select',
        widgetItems: ['Room temperature', 'Cup of hot coffee', 'In a refrigerator'],
        widgetOptions: ['Brown', 'Green', 'White', 'Yellow'],
      },
      {
        label: 'e',
        text: '**Select** the name of the organic functional group circled in the structure of the thermochromic compound.',
        marks: 1,
        ph: 'Carboxylic acid (–COOH)',
        widget: 'radio_select',
        widgetOptions: ['Carboxylic acid', 'Aldehyde', 'Ketone', 'Ester'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="220" fill="#ffffff"/><text x="260" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Structure of the thermochromic compound</text><text x="20" y="120" font-size="16" fill="#1f2d3a">CH₃</text><line x1="62" y1="114" x2="92" y2="114" stroke="#333" stroke-width="1.5"/><text x="96" y="120" font-size="16" fill="#1f2d3a">CH₂</text><line x1="140" y1="114" x2="170" y2="114" stroke="#333" stroke-width="1.5"/><text x="174" y="120" font-size="16" fill="#1f2d3a">CH₂</text><line x1="218" y1="114" x2="248" y2="114" stroke="#333" stroke-width="1.5"/><g><text x="300" y="120" font-size="18" font-weight="700" fill="#1f2d3a">C</text><line x1="312" y1="100" x2="312" y2="76" stroke="#333" stroke-width="1.5"/><line x1="318" y1="100" x2="318" y2="76" stroke="#333" stroke-width="1.5"/><text x="307" y="72" font-size="16" font-weight="700" fill="#c0392b">O</text><line x1="324" y1="114" x2="352" y2="114" stroke="#333" stroke-width="1.5"/><text x="356" y="120" font-size="16" font-weight="700" fill="#c0392b">O</text><line x1="382" y1="114" x2="408" y2="114" stroke="#333" stroke-width="1.5"/><text x="412" y="120" font-size="16" font-weight="700" fill="#c0392b">H</text></g><ellipse cx="358" cy="100" rx="78" ry="56" fill="none" stroke="#c0392b" stroke-width="2.5" stroke-dasharray="6 4"/><text x="358" y="185" font-size="11" text-anchor="middle" fill="#c0392b">circled functional group</text></svg>',
          },
          caption: 'The circled group at the end of the carbon chain is –C(=O)–O–H.',
        },
      },
    ],
  },

  // ── Q3 (15 marks, Crit A) — Signs, noble gases, isotopes, atmosphere ───────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Oxidation/reduction, noble gases, isotopes & atmospheric layers — illuminated signs',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 15,
    stem: 'Illuminated signs can be made from different materials. Older signs used iron frameworks, while modern signs use light-emitting diodes (LEDs). Some coloured signs use noble gases such as neon, argon, or krypton.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><text x="310" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Group 18 — the noble gases used in coloured signs</text><g font-size="8" fill="#64748b"><rect x="100" y="46" width="56" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="128" y="60" text-anchor="middle">2</text><text x="128" y="78" font-size="16" font-weight="700" fill="#0b7285" text-anchor="middle">He</text><text x="128" y="92" text-anchor="middle">helium</text><rect x="170" y="46" width="56" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="198" y="60" text-anchor="middle">10</text><text x="198" y="78" font-size="16" font-weight="700" fill="#0b7285" text-anchor="middle">Ne</text><text x="198" y="92" text-anchor="middle">neon</text><rect x="240" y="46" width="56" height="50" fill="#eef4f7" stroke="#5b6b78"/><text x="268" y="60" text-anchor="middle">18</text><text x="268" y="78" font-size="16" font-weight="700" fill="#0b7285" text-anchor="middle">Ar</text><text x="268" y="92" text-anchor="middle">argon</text><rect x="310" y="46" width="56" height="50" fill="#fdeaea" stroke="#c0392b"/><text x="338" y="60" text-anchor="middle">36</text><text x="338" y="78" font-size="16" font-weight="700" fill="#c0392b" text-anchor="middle">Kr</text><text x="338" y="92" text-anchor="middle">krypton</text></g><text x="100" y="126" font-size="11" fill="#475569">Noble gases (Group 18) have full outer electron shells, so they are</text><text x="100" y="142" font-size="11" fill="#475569">very unreactive and do not burn or support combustion.</text><g><rect x="100" y="158" width="120" height="44" fill="#f4faf7" stroke="#0b7285"/><text x="160" y="176" font-size="10" font-weight="700" text-anchor="middle" fill="#0b7285">Oxygen (O)</text><text x="160" y="192" font-size="10" text-anchor="middle" fill="#475569">2,6 · forms O₂</text></g><text x="236" y="180" font-size="11" fill="#475569">Iron (Fe) frameworks rust in air, forming</text><text x="236" y="196" font-size="11" fill="#475569">iron(III) oxide, Fe₂O₃ (oxidation of iron).</text></svg>',
      },
      caption: 'The noble gases helium, neon, argon and krypton all have full outer shells, so they are unreactive.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the material used to make illuminated signs has changed over time.',
        marks: 1,
        ph: 'Lasts longer / more appealing / more modern',
      },
      {
        label: 'b',
        text: '**State** the chemical formula for iron(III) oxide.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**State** which element is oxidised and which element is reduced when iron reacts with oxygen to form iron(III) oxide.\n\nOxidised:\n\nReduced:',
        marks: 2,
        ph: 'Oxidised: Iron; Reduced: Oxygen',
      },
      {
        label: 'd',
        text: '**Determine** the number of electrons and neutrons in each krypton isotope. The number of protons has been given.\n\n| Isotope | ⁸²₃₆Kr | ⁸⁴₃₆Kr |\n|---|---|---|\n| Electrons | [?] | [?] |\n| Protons | 36 | 36 |\n| Neutrons | [?] | [?] |',
        marks: 3,
        ph: '⁸²Kr: e=36, n=46; ⁸⁴Kr: e=36, n=48',
        widget: 'fill_blank',
        widgetOptions: ['36', '46', '48', '82', '84', '40', '42', '38', '44'],
      },
      {
        label: 'e',
        text: '**Outline** why noble gases do not cause fires.',
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
        text: '**Identify** which layer of the atmosphere contains particles with the highest kinetic energy. **Justify** your answer.',
        marks: 2,
        ph: 'Exosphere; highest temperature → highest kinetic energy',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Temperature profile of the atmosphere',
            xLabel: 'Height',
            yLabel: 'Temperature',
            xUnit: 'km',
            yUnit: '°C',
            xMin: 0,
            xMax: 800,
            yMin: -100,
            yMax: 1600,
            xStep: 100,
            yStep: 200,
            dataPoints: [
              { x: 0, y: 17 },
              { x: 12, y: -55 },
              { x: 30, y: -30 },
              { x: 50, y: 0 },
              { x: 70, y: -60 },
              { x: 85, y: -90 },
              { x: 120, y: 120 },
              { x: 200, y: 700 },
              { x: 350, y: 1300 },
              { x: 600, y: 1500 },
              { x: 800, y: 1550 },
            ],
          },
          caption: 'Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere. Temperature is highest in the outermost layers.',
        },
      },
      {
        label: 'i',
        text: 'When oxygen gains energy from solar flares it becomes unstable. The gained energy is lost naturally and released as green light. **Suggest** which layer of the atmosphere you would expect to find the green lights in. **Justify** your answer.',
        marks: 2,
        ph: 'Thermosphere; this is where the most oxygen is found',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Percentage of oxygen in the atmosphere by height',
            xLabel: 'Height',
            yLabel: 'Oxygen',
            xUnit: 'km',
            yUnit: '%',
            xMin: 0,
            xMax: 1000,
            yMin: 0,
            yMax: 100,
            xStep: 100,
            yStep: 10,
            dataPoints: [
              { x: 0, y: 21 },
              { x: 100, y: 30 },
              { x: 200, y: 55 },
              { x: 300, y: 80 },
              { x: 400, y: 88 },
              { x: 500, y: 80 },
              { x: 600, y: 60 },
              { x: 700, y: 38 },
              { x: 800, y: 20 },
              { x: 900, y: 10 },
              { x: 1000, y: 4 },
            ],
          },
          caption: 'The proportion of oxygen peaks in the thermosphere (roughly 300–500 km) before helium and hydrogen take over higher up.',
        },
      },
    ],
  },

  // ── Q4 (17 marks, Crit C) — Hard water, soap titration ─────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hard water classification — soap titration data processing',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 17,
    stem: 'Hard water contains dissolved calcium and magnesium salts. A group of students investigated the hardness of five water samples (A–E) by measuring the volume of soap solution needed to produce a lasting lather.\n\nThe students also boiled samples A, C, and E and measured the volume of soap needed again. Their results are shown in the table.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Water sample', 'Initial burette reading / cm³', 'Final burette reading / cm³', 'Volume of soap used / cm³'],
        rows: [
          ['A', '0.0', '20.0', '20.0'],
          ['B', '0.0', '10.0', '?'],
          ['C', '0.0', '25.0', '25.0'],
          ['D', '25.0', '? (read from burette)', '?'],
          ['E', '0.0', '13.0', '13.0'],
        ],
      },
      caption: 'Burette readings for the soap titration. The final reading for sample D is read from the burette in part (a); volumes for B and D are calculated in part (b).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Determine** the final burette reading for sample D using the photograph. State the reading to 1 decimal place.',
        marks: 2,
        ph: '49.0 cm³',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 300 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="300" height="320" fill="#ffffff"/><text x="150" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Close-up of the burette scale</text><rect x="120" y="40" width="44" height="250" rx="6" fill="#eaf4fb" stroke="#5b6b78" stroke-width="2"/><rect x="120" y="250" width="44" height="40" fill="#cfe7f6" stroke="#5b6b78" stroke-width="2"/><path d="M120 250 q22 8 44 0" fill="none" stroke="#2c5468" stroke-width="2"/><g font-size="11" fill="#1f2d3a" text-anchor="end"><line x1="120" y1="60" x2="108" y2="60" stroke="#333"/><text x="104" y="64">45</text><line x1="120" y1="98" x2="108" y2="98" stroke="#333"/><text x="104" y="102">46</text><line x1="120" y1="136" x2="108" y2="136" stroke="#333"/><text x="104" y="140">47</text><line x1="120" y1="174" x2="108" y2="174" stroke="#333"/><text x="104" y="178">48</text><line x1="120" y1="212" x2="108" y2="212" stroke="#333"/><text x="104" y="216">49</text><line x1="120" y1="250" x2="108" y2="250" stroke="#333"/><text x="104" y="254">50</text></g><g stroke="#94a3ad"><line x1="120" y1="79" x2="113" y2="79"/><line x1="120" y1="117" x2="113" y2="117"/><line x1="120" y1="155" x2="113" y2="155"/><line x1="120" y1="193" x2="113" y2="193"/><line x1="120" y1="231" x2="113" y2="231"/></g><line x1="118" y1="212" x2="200" y2="212" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="206" y="216" font-size="11" fill="#c0392b">bottom of meniscus</text><text x="150" y="308" font-size="10" text-anchor="middle" fill="#475569">Scale in cm³ — read where the curved liquid surface sits.</text></svg>',
          },
          caption: 'The bottom of the meniscus sits on the 49.0 cm³ line.',
        },
      },
      {
        label: 'b',
        text: '**Calculate** the volume of soap solution used for samples B and D.',
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
        text: '**Formulate** a hypothesis linking the permanent hardness to the dissolved salt concentration in the data table.',
        marks: 2,
        ph: 'If mass/concentration of dissolved salts increases, then permanent hardness increases; because Ca²⁺/Mg²⁺ ions from sulphates cause permanent hardness',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Water type', 'Calcium sulfate / mg dm⁻³', 'Magnesium sulfate / mg dm⁻³', 'Sodium hydrogen carbonate / mg dm⁻³', 'Permanent hardness / mg dm⁻³', 'pH'],
            rows: [
              ['Soft', '7.5', '7.5', '96.0', '11', '6.5'],
              ['Slightly hard', '30.0', '38.0', '96.0', '44', '7.4'],
              ['Moderately hard', '60.0', '57.0', '96.0', '90', '7.6'],
              ['Hard', '130.0', '120.0', '96.0', '170', '7.8'],
              ['Very hard', '240.0', '260.0', '96.0', '300', '8.2'],
            ],
          },
          caption: 'Data from a water company. As the dissolved sulfate concentrations rise, the permanent hardness increases.',
        },
      },
      {
        label: 'e',
        text: '**Plot** a graph of pH against permanent hardness using the data provided. Label both axes with a quantity and a unit.',
        marks: 4,
        ph: 'Hardness on x-axis (mg dm⁻³); pH on y-axis; even scale; at least 3 points plotted correctly',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Water type', 'Permanent hardness / mg dm⁻³', 'pH'],
            rows: [
              ['Soft', '11', '6.5'],
              ['Slightly hard', '44', '7.4'],
              ['Moderately hard', '90', '7.6'],
              ['Hard', '170', '7.8'],
              ['Very hard', '300', '8.2'],
            ],
          },
          caption: 'Use these permanent-hardness and pH values to plot your graph (hardness on the x-axis, pH on the y-axis).',
        },
      },
      {
        label: 'f',
        text: 'After analysing the results, the students concluded that hard water is acidic. **Comment** on the validity of their conclusion. **Justify** your answer.',
        marks: 2,
        ph: 'Invalid; hard water is not acidic / is basic; pH of hard water is above 7',
      },
    ],
  },

  // ── Q5 (12 marks, Crit B/C) — Limescale removal investigation ──────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Limescale removal investigation — acid types',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'When water with temporary hardness is boiled, the soluble calcium hydrogen carbonate (Ca(HCO₃)₂) decomposes:\n\nCa(HCO₃)₂(aq) → CaCO₃(s) + CO₂(g) + H₂O(l)\n\nLimescale can be removed by reacting it with an acid:\n\ncalcium carbonate + acid → calcium salt + carbon dioxide + water\n\nA group of students investigated which acid is best for removing limescale from used hot water pipes. They used hydrochloric acid, lactic acid, phosphoric acid, and citric acid. They also tested a shop-bought liquid descaler.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Acid tested', 'Type', 'Found in'],
        rows: [
          ['Hydrochloric acid (HCl)', 'Strong mineral acid', 'Lab reagent / descalers'],
          ['Lactic acid', 'Weak organic acid', 'Sour milk, yoghurt'],
          ['Phosphoric acid', 'Weak mineral acid', 'Cola drinks, descalers'],
          ['Citric acid', 'Weak organic acid', 'Citrus fruits'],
          ['Shop-bought liquid descaler', 'Acid mixture', 'Household product'],
        ],
      },
      caption: 'The five acids the students used to remove limescale (calcium carbonate) from hot-water pipes.',
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
            svg: '<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="240" height="240" fill="#ffffff"/><rect x="120" y="20" width="155" height="155" transform="rotate(45 120 120)" fill="#ffffff" stroke="#e2231a" stroke-width="9"/><g stroke="#111" stroke-width="3" fill="none"><rect x="64" y="118" width="44" height="10" fill="#111" stroke="none"/><path d="M74 118 l-6 -22" /><path d="M86 118 l0 -24" /><path d="M98 118 l6 -22" /><line x1="70" y1="98" x2="78" y2="98"/><line x1="82" y1="94" x2="90" y2="94"/><line x1="98" y1="98" x2="106" y2="98"/></g><g stroke="#111" stroke-width="3" fill="none"><path d="M132 132 q14 -4 30 -2 q10 1 16 8" /><path d="M132 132 q-2 8 4 12 q10 6 22 4" /><path d="M150 110 l-3 -18"/><path d="M160 110 l0 -20"/><path d="M170 112 l4 -18"/><line x1="146" y1="94" x2="152" y2="94"/><line x1="158" y1="90" x2="164" y2="90"/><line x1="172" y1="96" x2="178" y2="96"/></g><text x="120" y="222" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hazard symbol on two of the acids</text></svg>',
          },
          caption: 'The red-bordered diamond shows liquid attacking both a metal surface and a hand.',
        },
      },
      {
        label: 'b',
        text: '**Formulate** a research question for the students\' investigation.',
        marks: 1,
        ph: 'How does the type of acid affect the time / mass of limescale or calcium carbonate removed?',
      },
      {
        label: 'c',
        text: '**State** the variables in this investigation.\n\nIndependent variable:\n\nDependent variable:\n\nTwo controlled variables:',
        marks: 4,
        ph: 'IV: type of acid; DV: time or mass; CVs: volume of acid, concentration of acid, temperature, length of pipe',
      },
      {
        label: 'd',
        text: 'The students presented their data in the table below (mass of pipe before and after descaling for each acid). **Suggest** two ways in which the data **presentation** could be improved.',
        marks: 2,
        ph: 'Include unit of mass / give values to consistent d.p. / show change in mass / add title / give chemical name of shop-bought descaler',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Acid', 'Mass of pipe before descaling', 'Mass of pipe after descaling'],
            rows: [
              ['Hydrochloric acid', '28', '23.5'],
              ['Lactic acid', '35.0', '32.4'],
              ['Phosphoric acid', '25', '22'],
              ['Citric acid', '27.0', '25.5'],
              ['Shop-bought descaler', '31', '27.0'],
            ],
          },
          caption: 'The students’ results as presented. Note the missing units and inconsistent decimal places.',
        },
      },
      {
        label: 'e',
        text: '**Determine** which acid is most effective at removing limescale using the students\' results. **Justify** your answer.',
        marks: 2,
        ph: 'Hydrochloric acid; the mass changed the most (4.5 g reduction)',
      },
      {
        label: 'f',
        text: 'A second group of students noticed that the masses before descaling in the table were all different. **Suggest** a reason why the masses before descaling were different.',
        marks: 1,
        ph: 'Different masses of limescale / different lengths of pipe were used',
      },
      {
        label: 'g',
        text: 'The students only carried out this investigation once. **Comment** on how this will affect the validity of the data collected.',
        marks: 1,
        ph: 'Data not valid / should have more trials / cannot calculate average / cannot exclude outliers',
      },
    ],
  },

  // ── Q6 (19 marks, Crit B) — Ethanoic acid limescale experiment design ───────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — minimum ethanoic acid concentration to remove limescale',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'Limescale inside kettles can reduce their heating efficiency. Students want to help the school community save energy by advising them on how to descale their kettles. Ethanoic acid (vinegar) is commonly available in households. In line with the principles of green chemistry, the students want to find the lowest concentration of ethanoic acid that would remove a given mass of limescale.\n\nTo model limescale, the students use calcium carbonate. They are provided with distilled water, different sized pieces of calcium carbonate, and vinegar with an ethanoic acid concentration of 1.5 mol dm⁻³.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Reacting calcium carbonate with ethanoic acid',
        reaction: 'CaCO₃ + 2CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂',
        variable: 'ethanoic acid concentration',
        mode: 'gasVolume' as const,
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'CO₂ released / cm³', min: 0, max: 80, tick: 20 },
        // Same mass of CaCO₃ in every run → same total CO₂ (plateau 72 cm³);
        // a higher ethanoic acid concentration only makes the reaction faster.
        options: [
          { label: '1.5 mol dm⁻³', color: 'teal', ratePerSec: 2.4, plateauVolume: 72 },
          { label: '1.0 mol dm⁻³', color: 'orange', ratePerSec: 1.6, plateauVolume: 72 },
          { label: '0.5 mol dm⁻³', color: 'purple', ratePerSec: 0.8, plateauVolume: 72 },
        ],
        prompt:
          'Each run uses the same mass of limescale (CaCO₃), so the same total volume of CO₂ is given off — only the rate changes with concentration.',
        note: 'Stand the flask on a balance and record the loss of mass as CO₂ escapes. Press Play to watch the gas build up, then drag the cursor to read a value.',
      },
      caption: 'Follow the reaction by the loss of mass as carbon dioxide escapes. A more concentrated acid reacts faster but releases the same total CO₂ for a fixed mass of limescale.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** why the students decided to test ethanoic acid rather than hydrochloric acid.',
        marks: 1,
        ph: 'HCl not a common household chemical / ethanoic acid safer / weaker acid / less hazardous / easier to dispose of',
      },
      {
        label: '',
        text: '**Design** an experiment to investigate the minimum concentration of ethanoic acid required to remove a given mass of limescale. In your answer you must include:\n• the independent variable, the dependent variable and two controlled variables\n• a list of the equipment that you will use\n• the method you will follow\n• the details of the measurements you will take to collect sufficient data\n• any safety precautions you will need to take.',
        marks: 18,
        ph: 'IV: ethanoic acid concentration; DV: mass CaCO₃ remaining / time; CVs: mass CaCO₃, temperature, volume acid; equipment: balance, burette/measuring cylinder, beakers, timer; step-by-step method with repeats; measurements; safety: goggles, gloves',
      },
    ],
  },

  // ── Q7 (17 marks, Crit D) — Plastic packaging for liquid soap ──────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Evaluate — plastic types for liquid soap packaging',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Handwashing with soap reduces the spread of diseases and infections caused by microbes. The COVID-19 pandemic increased the frequency of handwashing globally. This increased the demand for liquid soap and its plastic packaging.\n\nPlastics can be split into two groups: those made from crude oil and those made from plant-based materials. These two groups can be split further into biodegradable and non-biodegradable plastics. The table shows information about three different types of plastic.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Crude-oil-based non-biodegradable', 'Plant-based non-biodegradable', 'Plant-based biodegradable'],
        rows: [
          ['Strength / MPa', '98', '55.8', '11.2'],
          ['Stretch before breaking / %', '55.4', '5.58', '9.3'],
          ['Greenhouse gas emission in production', 'High', 'Low', 'Low'],
          ['Production cost', 'Low', 'High', 'High'],
          ['Biodegradable?', 'No', 'No', 'Yes'],
        ],
      },
      caption: 'Information about three different types of plastic that could be used for liquid-soap packaging.',
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
            svg: '<svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="380" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four possible Lewis structures for ethene (C₂H₄)</text><g font-size="18" fill="#1f2d3a"><text x="20" y="60" font-size="15" font-weight="700">A.</text><text x="70" y="90">H</text><text x="170" y="90">H</text><text x="55" y="140">H</text><text x="95" y="140" font-weight="700">C</text><text x="135" y="140" font-weight="700">C</text><text x="175" y="140">H</text><text x="70" y="185">H</text><text x="170" y="185">H</text><g font-size="10" fill="#444"><text x="118" y="135">·</text><text x="125" y="135">×</text></g></g><text x="55" y="215" font-size="10" fill="#7a3d12">single C–C bond (only one shared pair)</text><g font-size="18" fill="#1f2d3a"><text x="300" y="60" font-size="15" font-weight="700">B.</text><text x="345" y="100">H</text><text x="475" y="100">H</text><text x="380" y="140" font-weight="700">C</text><text x="440" y="140" font-weight="700">C</text><text x="345" y="185">H</text><text x="475" y="185">H</text><g font-size="13" fill="#c0392b" font-weight="700"><text x="406" y="130">×</text><text x="406" y="142">×</text><text x="418" y="130">·</text><text x="418" y="142">·</text></g></g><text x="345" y="215" font-size="10" fill="#0b7285" font-weight="700">C=C double bond (two shared pairs), 2 H per C</text><g font-size="18" fill="#1f2d3a"><text x="20" y="250" font-size="15" font-weight="700">C.</text><text x="65" y="290">H</text><text x="195" y="290">H</text><text x="100" y="330" font-weight="700">C</text><text x="160" y="330" font-weight="700">C</text><text x="65" y="370">H</text><text x="195" y="370">H</text><g font-size="11" fill="#444"><text x="60" y="278">··</text><text x="190" y="278">··</text><text x="60" y="360">··</text><text x="190" y="360">··</text></g></g><text x="40" y="252" font-size="10" fill="#7a3d12" >too many electrons drawn around H</text><g font-size="18" fill="#1f2d3a"><text x="300" y="250" font-size="15" font-weight="700">D.</text><text x="345" y="290">H</text><text x="475" y="290">H</text><text x="380" y="330" font-weight="700">C</text><text x="440" y="330" font-weight="700">C</text><text x="345" y="370">H</text><text x="475" y="370">H</text><g font-size="11" fill="#444"><text x="406" y="326">·</text><text x="418" y="326">×</text></g></g><text x="330" y="252" font-size="10" fill="#7a3d12">single C–C bond with extra lone dots</text></svg>',
          },
          caption: 'Ethene has a C=C double bond and two hydrogen atoms on each carbon.',
        },
      },
      {
        label: '',
        text: '**Discuss** and **evaluate** the different types of plastic used for liquid soap packaging. In your answer you should include:\n• a justification of the **properties** needed for the **plastic** used in liquid soap packaging\n• a comparison of the suitability of the three types of **plastic** for liquid soap packaging\n• the economic impacts of the three types of plastic\n• the environmental impacts of the three types of plastic\n• your choice with justification.',
        marks: 16,
        ph: 'Properties: waterproof/flexible/durable justified; suitability comparison (biodegradability, recyclability); economic impacts all 3 types; environmental impacts all 3 types; reasoned final choice',
      },
    ],
  },

  // ── Q8 (7 marks, Crit D) — Soap types, production & social impacts ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Discuss — soap types, production processes and social impacts',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'Traditionally, soaps are made from naturally occurring materials such as animal and plant fats (containing carboxylic acids) and wood ash. A recent technical innovation uses waste plastic as an alternative source of the carboxylic acids used to make soap. The table below gives information about different types of soap.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['', 'Natural soap', 'Crude-oil-based soap', 'Soap from recycled plastic'],
        rows: [
          ['Raw materials', 'Plant or animal fat', 'Crude oil', 'Recycled plastic'],
          ['Toxic potential', 'Low (no additives needed)', 'High (additives needed)', 'Not yet known'],
          ['Antimicrobial properties', 'Naturally occurring', 'Needs additives', 'Needs additives'],
          ['Cost', 'Intermediate', 'Lowest', 'Highest'],
          ['Availability', 'Limited', 'High', 'Very limited'],
          ['Allergy risk', 'Sensitivities to natural ingredients', 'Sensitivities to additives', 'Sensitivities to additives'],
        ],
      },
      caption: 'Information about three different types of soap, including soap made from recycled plastic.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** the issues an individual would consider when choosing which type of soap to use. In your answer you should include:\n• a comparison between the production processes of soap made using recycled plastic and one other type of soap\n• two social impacts that could be considered when choosing between these two types of soap.',
        marks: 7,
        ph: 'Production: recycled plastic uses waste plastic vs crude oil / animal fat; social: cost difference, toxic potential, allergy risk, environmental ethics, availability',
      },
    ],
  },
]
