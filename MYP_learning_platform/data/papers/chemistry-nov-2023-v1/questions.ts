import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2023 · VARIANT 1  (isomorphic to chemistry-nov-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven INTERACTIVE artefact in every question's context
// slot (no external image files). Answers recomputed throughout.
//   Q1 CO₂ equilibrium / bonding:   cola can → sparkling mineral water bottle
//   Q2 Moles / organic functional:  phosphoric acid+sucrose+xylitol+aspartame
//                                     → citric acid+sorbitol+erythritol+neotame
//   Q3 Periodic / materials:        aluminium drink cans → titanium implants
//   Q4 States / data presentation:  candy-floss sugar → toffee/caramel sucrose
//   Q5 Reactions / inquiry:         boiled eggs+toast → boiled chicken+pancakes
//   Q6 Acids / Crit B design:       lemon-cooked MR-P → citric-acid-cooked MPPS
//   Q7 Carbon footprint / Crit D:   plant-based beef burger → plant chicken nugget
//   Q8 Science & society / Crit D:  lab-grown meat → farmed insect protein
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-nov-2023-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Sparkling mineral water / CO₂ equilibrium (10m, Crit A) ─────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 10,
    stem: 'Carbon dioxide (CO₂) is dissolved in sparkling mineral water under high pressure to make it fizzy. When the bottle is opened the pressure above the liquid drops and the CO₂ starts to escape from solution.',
    artefact: {
      component: 'GasLawSim',
      data: {
        title: 'Pressure above the water controls how much CO₂ stays dissolved',
        vessel: 'sealed bottle of sparkling water',
        plungerArea: 0.0008,
        atmPressure: 101325,
        g: 9.81,
        massSlider_kg: [0, 2, 4, 6, 8],
        constantPV_kPa_cm3: 3000,
        pvUnit: 'cm³ CO₂',
        coupling: 'Capping the bottle raises the pressure and forces more CO₂ to stay dissolved; opening it lowers the pressure so CO₂ escapes and the equilibrium CO₂(aq) ⇌ CO₂(g) shifts to the gas.',
      },
      caption: 'Load the plunger to raise the pressure on the trapped gas: higher pressure keeps more CO₂ in solution, lower pressure lets it escape.',
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
        ph: 'Carbon in centre, two C=O double bonds, lone pairs on each oxygen',
      },
      {
        label: 'd',
        text: '**Select** the symbols below to form an equation showing the equilibrium between dissolved carbon dioxide and the carbon dioxide gas in the space above the liquid: ___ ⇌ ___',
        marks: 2,
        ph: 'CO₂(aq) ⇌ CO₂(g)',
        widget: 'fill_blank',
      },
      {
        label: 'e',
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in a bottle of sparkling water left open in a warm room for 30 minutes.',
        marks: 3,
        ph: 'Less fizzy; equilibrium shifts; CO₂ solubility decreases as temperature increases',
      },
    ],
  },

  // ─── Q2: Citric acid / sorbitol / erythritol / neotame (9m, Crit A) ─────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 9,
    stem: 'Citric acid (C₆H₈O₇) gives sparkling drinks their sharp, sour flavour and balances the sweetness. In sugar-free varieties the sucrose is replaced with sweeteners such as sorbitol, erythritol and neotame.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sweetener', 'Type', 'Molecular formula', 'Molar mass / g mol⁻¹', 'Relative sweetness (sucrose = 1)'],
        rows: [
          ['Sucrose', 'sugar', 'C₁₂H₂₂O₁₁', '342.3', '1'],
          ['Sorbitol', 'sugar alcohol', 'C₆H₁₄O₆', '182.0', '0.6'],
          ['Erythritol', 'sugar alcohol', 'C₄H₁₀O₄', '122.0', '0.7'],
          ['Neotame', 'artificial', 'C₂₀H₃₀N₂O₅', '378.5', '8000'],
        ],
      },
      caption: 'Ingredient panel for the sugar-free drink: read the formula and molar mass you need from this table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of citric acid, C₆H₈O₇. Give the unit.',
        marks: 2,
        ph: 'Mr = 192 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A bottle of sugar-free sparkling drink contains 18.2 g of sorbitol. The molar mass of sorbitol is 182.0 g mol⁻¹. **Calculate** the number of moles of sorbitol in the bottle. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 18.2/182.0 = 0.100 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of erythritol from the 3D molecular model shown.',
        marks: 3,
        ph: 'C₄H₁₀O₄',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="200" fill="#ffffff"/><text x="230" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">3D model of erythritol</text><g stroke="#94a3ad" stroke-width="6"><line x1="70" y1="120" x2="150" y2="90"/><line x1="150" y1="90" x2="230" y2="120"/><line x1="230" y1="120" x2="310" y2="90"/><line x1="70" y1="120" x2="60" y2="70"/><line x1="150" y1="90" x2="150" y2="40"/><line x1="230" y1="120" x2="230" y2="170"/><line x1="310" y1="90" x2="320" y2="40"/></g><g><circle cx="70" cy="120" r="15" fill="#3a3a3a"/><circle cx="150" cy="90" r="15" fill="#3a3a3a"/><circle cx="230" cy="120" r="15" fill="#3a3a3a"/><circle cx="310" cy="90" r="15" fill="#3a3a3a"/></g><g><circle cx="60" cy="70" r="12" fill="#d62828"/><circle cx="150" cy="40" r="12" fill="#d62828"/><circle cx="230" cy="170" r="12" fill="#d62828"/><circle cx="320" cy="40" r="12" fill="#d62828"/></g><g fill="#e2e8f0" stroke="#94a3ad"><circle cx="40" cy="135" r="8"/><circle cx="62" cy="160" r="8"/><circle cx="120" cy="78" r="8"/><circle cx="178" cy="78" r="8"/><circle cx="205" cy="135" r="8"/><circle cx="262" cy="135" r="8"/><circle cx="288" cy="78" r="8"/><circle cx="340" cy="78" r="8"/><circle cx="118" cy="22" r="8"/><circle cx="350" cy="22" r="8"/></g><g font-size="10" fill="#475569"><rect x="350" y="120" width="14" height="14" fill="#3a3a3a"/><text x="370" y="131">carbon</text><rect x="350" y="142" width="14" height="14" fill="#d62828"/><text x="370" y="153">oxygen</text><circle cx="357" cy="171" r="7" fill="#e2e8f0" stroke="#94a3ad"/><text x="370" y="175">hydrogen</text></g></svg>',
          },
          caption: 'Count each atom type from the model: black = carbon, red = oxygen, white = hydrogen.',
        },
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of neotame.',
        marks: 2,
        ph: 'First highlighted group = Carboxylic acid (COOH); Second highlighted group = Ester (COO)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="190" fill="#ffffff"/><text x="230" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the neotame structure</text><g stroke="#475569" stroke-width="2" fill="none"><polyline points="40,110 70,90 100,110 130,90 160,110"/><line x1="160" y1="110" x2="160" y2="150"/></g><text x="40" y="105" font-size="12" fill="#0f172a">HOOC</text><rect x="22" y="86" width="58" height="34" rx="5" fill="none" stroke="#e8590c" stroke-width="2.5" stroke-dasharray="4 3"/><text x="51" y="80" font-size="10" font-weight="700" fill="#e8590c" text-anchor="middle">group 1</text><g stroke="#475569" stroke-width="2" fill="none"><polyline points="230,110 260,90 290,110 320,90"/><line x1="290" y1="110" x2="290" y2="150"/><line x1="320" y1="90" x2="350" y2="110"/></g><text x="300" y="86" font-size="12" fill="#0f172a">C(=O)–O–CH₃</text><rect x="282" y="74" width="120" height="34" rx="5" fill="none" stroke="#2f9e44" stroke-width="2.5" stroke-dasharray="4 3"/><text x="342" y="68" font-size="10" font-weight="700" fill="#2f9e44" text-anchor="middle">group 2</text><text x="120" y="178" font-size="10" fill="#94a3ad" text-anchor="middle">Highlighted bonds show the two functional groups to identify.</text></svg>',
          },
          caption: 'Identify each ringed functional group on the neotame molecule.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Titanium medical implants (5m, Crit A) ─────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 5,
    stem: 'Medical implants such as hip joints and dental screws must be strong, long-lasting and safe to leave inside the human body for years. For a long time stainless steel was used, but more recently titanium (Ti) implants have become common.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Titanium', 'Stainless steel'],
        rows: [
          ['Density / g cm⁻³', '4.5', '8.0'],
          ['Reaction with body fluids', 'does not react (biocompatible)', 'can slowly corrode / release ions'],
          ['Relative strength', 'high', 'high'],
          ['Allergy / rejection risk', 'very low', 'higher (contains nickel)'],
          ['Approximate cost', 'high', 'lower'],
        ],
      },
      caption: 'Comparison of the two implant materials. Use the data to support your answer to part (b).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of titanium.',
        marks: 1,
        ph: '2.8.10.2',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of titanium implants compared to stainless-steel implants.',
        marks: 4,
        ph: 'Less reactive/biocompatible → safe in body, won\'t corrode; lower density → lighter, less stress on bone; lower allergy risk than nickel steel',
      },
    ],
  },

  // ─── Q4: Sugar solubility / toffee production (15m, Crit C) ─────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'In sweet-making, the concentration of sugar in the heated mixture decides what kind of sweet can be produced. A student investigated the maximum mass of sucrose that could be dissolved in 100 cm³ of water at different temperatures. The student\'s raw results are shown.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Maximum mass of sucrose dissolved in 100 cm³ of water',
        mode: 'scatter',
        variable: 'sucrose solubility',
        xLabel: 'Temperature / °C',
        yLabel: 'Mass of sucrose / g',
        xAxis: { label: 'Temperature / °C', min: 0, max: 100, tick: 20 },
        yAxis: { label: 'Mass of sucrose / g', min: 0, max: 400, tick: 50 },
        lineOfBestFit: true,
        points: [
          [0, 180],
          [20, 200],
          [40, 240],
          [60, 350],
          [80, 360],
          [100, 390],
        ],
        note: 'The 60 °C reading sits well above the trend — it is an outlier.',
      },
      caption: 'The student\'s six raw readings. Drag the cursor to read a value; the dashed line is the line of best fit.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Present** the student\'s raw data collected during the experiment in a table.',
        marks: 3,
        ph: 'Two labelled columns: Temperature/°C and Mass of sucrose/g; units in headers; data in ascending temperature order',
      },
      {
        label: 'b',
        text: '**Present** the data in part (a) in a graph.',
        marks: 5,
        ph: 'Scatter graph; x=Temperature/°C; y=Mass of sucrose/g; even scale from 0; all 6 points plotted; line of best fit; axes labelled with units',
      },
      {
        label: 'c',
        text: '**Select** the graph that shows the most appropriate line of best fit for a second student\'s data.',
        marks: 1,
        ph: 'Graph C — straight line balanced through the majority of points',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="170" fill="#ffffff"/><g><g transform="translate(10,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="90" r="3" fill="#0b7285"/><circle cx="40" cy="78" r="3" fill="#0b7285"/><circle cx="60" cy="60" r="3" fill="#0b7285"/><circle cx="80" cy="42" r="3" fill="#0b7285"/><circle cx="95" cy="28" r="3" fill="#0b7285"/><line x1="15" y1="80" x2="100" y2="50" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">A</text></g><g transform="translate(140,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="90" r="3" fill="#0b7285"/><circle cx="40" cy="78" r="3" fill="#0b7285"/><circle cx="60" cy="60" r="3" fill="#0b7285"/><circle cx="80" cy="42" r="3" fill="#0b7285"/><circle cx="95" cy="28" r="3" fill="#0b7285"/><line x1="15" y1="100" x2="100" y2="95" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">B</text></g><g transform="translate(270,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="90" r="3" fill="#0b7285"/><circle cx="40" cy="78" r="3" fill="#0b7285"/><circle cx="60" cy="60" r="3" fill="#0b7285"/><circle cx="80" cy="42" r="3" fill="#0b7285"/><circle cx="95" cy="28" r="3" fill="#0b7285"/><line x1="15" y1="95" x2="100" y2="25" stroke="#2f9e44" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">C</text></g><g transform="translate(400,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="90" r="3" fill="#0b7285"/><circle cx="40" cy="78" r="3" fill="#0b7285"/><circle cx="60" cy="60" r="3" fill="#0b7285"/><circle cx="80" cy="42" r="3" fill="#0b7285"/><circle cx="95" cy="28" r="3" fill="#0b7285"/><polyline points="15,95 40,70 60,68 80,30 100,25" fill="none" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">D</text></g></g></svg>',
          },
          caption: 'Four candidate lines of best fit (A–D) drawn on the same data.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier. **Suggest** what the expected mass of sucrose would be.',
        marks: 2,
        ph: 'Outlier at 60 °C; expected mass from the line of best fit ≈ 300 g',
      },
      {
        label: 'e',
        text: 'Toffee is made by heating sugar to 140 °C (the hard-crack stage), where it becomes a thick liquid, then pouring it into a mould to cool and solidify. **Select** the state and expected behaviour of the sugar in each location during toffee-making.',
        marks: 4,
        ph: 'Heated pan = liquid (takes the shape of the container); cooled mould = solid (no change of shape)',
        artefact: {
          component: 'ParticleSim',
          data: {
            title: 'Sugar particles during toffee-making',
            mode: 'states',
            substance: 'sugar',
            // NOTE: in multi-container "states" mode the component assigns states by
            // container index in the fixed order solid → liquid → gas. The solid
            // location (cooled mould) is therefore listed first and the liquid
            // location (heated pan) second, so each box renders the correct state.
            containers: ['Cooled mould (set toffee)', 'Heated pan (140 °C)'],
            states: ['solid', 'liquid'],
          },
          caption: 'The same sugar in two locations — watch how the particles are arranged and how they move in each.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: [
          'Sugar in the heated pan — State',
          'Sugar in the cooled mould — State',
          'Sugar in the heated pan — Behaviour',
          'Sugar in the cooled mould — Behaviour',
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

  // ─── Q5: Chicken cooking / Maillard reaction investigation (12m, Crit B) ─
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Chemical changes take place when food is cooked. When chicken is cooked in boiling water, the change in colour from pink to white and the change in texture are indicators that a chemical change has taken place. The Maillard reaction between sugars and proteins causes browning in foods cooked with dry heat, such as a pancake on a hot griddle.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Cooking chicken: % cooked through against time in boiling water',
        mode: 'saturating',
        variable: 'cooking time',
        xLabel: 'Time in boiling water / min',
        yLabel: 'Chicken cooked through / %',
        xAxis: { label: 'Time in boiling water / min', min: 0, max: 30, tick: 5 },
        yAxis: { label: 'Cooked through / %', min: 0, max: 100, tick: 20 },
        series: [
          { label: 'Small piece (20 g)', plateau: 100 },
          { label: 'Large piece (60 g)', plateau: 100 },
        ],
        note: 'The longer the chicken is heated, the more of it is cooked (white and firm) — until it is fully cooked.',
      },
      caption: 'Cooking curves for two sizes of chicken piece. Press Play and read off how cooked each is at a chosen time.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation of cooking time and chicken appearance:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV = time/duration; DV = how cooked (colour/firmness); CV = size of chicken piece; CV = temperature of water',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). Use the form If… Then… Because…',
        marks: 3,
        ph: 'If cooking time increases, then the chicken is more cooked/white/firm, because more chemical change (protein denaturation) takes place',
      },
      {
        label: 'c',
        text: 'Pancakes contain both sugar and protein. **Outline** why a pancake turns golden-brown when cooked on a hot griddle.',
        marks: 3,
        ph: 'Sugar and protein react together; heat drives the Maillard reaction; this produces the brown colour',
      },
      {
        label: 'd',
        text: 'A student lowered the temperature of the griddle and cooked a new pancake for the same time. **Predict** how the appearance would be different to the original pancake. **Justify** your answer.',
        marks: 2,
        ph: 'Less golden-brown; lower temperature → slower/fewer Maillard reactions → less chemical change',
      },
    ],
  },

  // ─── Q6: MPPS / citric-acid cooking / Crit B design (25m, Crit B) ────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 25,
    stem: 'Acids in fruit juice can be used to "cook" protein without heat. A food company has developed a plant-based protein strip (MPPS) that softens when soaked in acidic juice for 25 minutes. A student investigated which juice cooks the MPPS best by measuring the force needed to break strips soaked in different juices. The student\'s hypothesis was that soaking the strip makes it weaker. A breaking force above 290 N means the MPPS is cooked.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Force needed to break MPPS strips after 25 minutes of soaking',
        mode: 'bars',
        variable: 'Soaking liquid',
        metric: 'Force needed to break the strip / N',
        bars: [
          { label: 'Sample 1: juice only (no MPPS)', value: 0 },
          { label: 'Sample 2: water (control)', value: 150 },
          { label: 'Sample 3: orange juice', value: 240 },
          { label: 'Sample 4: lemon juice', value: 310 },
          { label: 'Sample 5: pineapple juice', value: 330 },
        ],
        note: 'A higher breaking force means the strip is more cooked. The threshold for "cooked" is 290 N.',
      },
      caption: 'Breaking-force results for each soaking liquid. Sample 1 is juice with no MPPS in it.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the results to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; the breaking force of soaked (cooked) MPPS is HIGHER than water, not lower',
      },
      {
        label: 'b',
        text: '**State** which samples of MPPS would be suitable to eat (breaking-force threshold = 290 N). **Justify** your answer using data.',
        marks: 2,
        ph: 'Lemon juice (310 N) and pineapple juice (330 N) — both above the 290 N threshold',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only fruit juice (no MPPS).',
        marks: 1,
        ph: 'As a control / baseline / for direct comparison',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Outline** an improvement to the method used.',
        marks: 2,
        ph: 'Repeat the experiment for each juice and calculate an average to reduce the effect of random error',
      },
      {
        label: 'e',
        text: 'The student wanted to know the minimum pH that would cook the MPPS, between pH 2.5 and 4.0. They decided to use solutions of citric acid of known pH instead of juice. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on the breaking force of MPPS?',
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would cook MPPS. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV = pH; DV = breaking force; CVs = size/mass of strip + soaking time; citric-acid solutions of 5+ pH values; force meter; ≥3 trials per pH; mean; acid safety (goggles)',
      },
    ],
  },

  // ─── Q7: Plant-based chicken nuggets / carbon footprint (9m, Crit D) ──────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Many people are cutting down the amount of animal protein in their diet. A growing industry makes plant-based versions of popular foods such as chicken nuggets. The graph compares the carbon footprint of producing protein from different sources, and the table below shows nutritional information for a plant-based nugget and a conventional chicken nugget (per 100 g).',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Carbon footprint of producing 1 kg of protein from different sources',
        mode: 'bars',
        variable: 'Protein source',
        metric: 'Carbon footprint / kg CO₂ eq per kg protein',
        bars: [
          { label: 'Average US diet (all sources)', value: 1800 },
          { label: 'Chicken removed from US diet', value: 700 },
          { label: 'Plant-based protein', value: 400 },
        ],
        note: 'Carbon footprint from chicken = total US diet − (US diet with chicken removed).',
      },
      caption: 'Bar chart of carbon footprint. Read the bars to find the contribution from chicken protein.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Using** the graph above, calculate the carbon footprint from the production of chicken protein in the average US diet.',
        marks: 2,
        ph: '1800 − 700 = 1100 kg CO₂ eq (accept 1050–1150)',
      },
      {
        label: 'b',
        text: '**Using** the graph in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of plant-based chicken nuggets compared to conventional chicken nuggets. In your answer you should include:\n• the advantages of producing plant-based protein compared to chicken-based protein\n• a comparison of the nutritional data\n• your opinion of why people may choose plant-based nuggets rather than chicken nuggets.',
        marks: 7,
        ph: 'AD: lower carbon/water/land footprint; nutrition: similar energy & protein, lower saturated fat but higher salt; opinion justified (ethics/environment/health)',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Per 100 g', 'Plant-based nugget', 'Chicken nugget'],
            rows: [
              ['Energy / kJ', '930', '1010'],
              ['Protein / g', '14.0', '15.0'],
              ['Total fat / g', '11.0', '14.0'],
              ['Saturated fat / g', '1.5', '3.0'],
              ['Salt / g', '1.4', '0.9'],
              ['Fibre / g', '4.5', '0.5'],
            ],
          },
          caption: 'Nutritional comparison per 100 g. Use this alongside the carbon-footprint chart.',
        },
      },
    ],
  },

  // ─── Q8: Farmed insect protein (15m, Crit D) ─────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'To reduce the environmental impact of meat and to feed a growing population, companies now farm insects such as crickets and mealworms for protein. Insects are rich in protein and can be reared on food waste using far less land, water and feed than cattle. The crickets are dried and milled into a flour used in protein bars, pasta and burger patties, and the farms can be stacked vertically inside city buildings.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Resources to produce 1 kg of protein: crickets vs beef cattle',
        units: 'relative units',
        flows: [
          { label: 'Feed needed', value: 100, kind: 'in' },
          { label: 'Cricket protein produced', value: 45, kind: 'out' },
          { label: 'Beef protein produced (same feed)', value: 10, kind: 'out' },
          { label: 'Lost as waste / not converted', value: 45, kind: 'loss' },
        ],
        conservation: 'For the same feed, crickets convert far more into edible protein than cattle — and they use about 12× less land and 8× less water.',
      },
      caption: 'How efficiently each animal turns feed into edible protein. Crickets need far fewer resources than cattle.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information provided, **discuss and evaluate** the use of farmed insect protein as a meat substitute from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: less land/water/feed, lower emissions, uses food waste; Ethical: insects farmed/killed but lower welfare concern than mammals; Socio-economic: cheap, urban vertical farms, but cultural acceptance low; Health: high protein/micronutrients but shellfish-allergy risk; justified conclusion',
      },
    ],
  },
]
