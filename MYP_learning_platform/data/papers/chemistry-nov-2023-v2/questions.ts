import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2023 · VARIANT 2  (isomorphic to chemistry-nov-2023)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — moved out
// of the food/drink domain into household/industrial/energy chemistry — with a
// self-contained data-driven INTERACTIVE artefact in every question's context
// slot (no external image files). Answers recomputed throughout.
//   Q1 CO₂ equilibrium / bonding:   cola can → home soda-maker carbonator
//   Q2 Moles / organic functional:  phosphoric acid+sucrose → ethanoic acid
//                                     (vinegar) + glycerol + propane-1,2-diol + ester
//   Q3 Periodic / materials:        aluminium cans → copper vs galvanised water pipe
//   Q4 States / data presentation:  candy-floss sugar → KNO₃ fertiliser crystals
//   Q5 Reactions / inquiry:         boiled eggs+toast → rusting iron nail + charcoal
//   Q6 Acids / Crit B design:       lemon-cooked MR-P → acid descaler vs limescale
//   Q7 Carbon footprint / Crit D:   plant-based burger → petrol vs electric car
//   Q8 Science & society / Crit D:  lab-grown meat → hydrogen fuel-cell buses
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'chemistry-nov-2023-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Home soda-maker / CO₂ equilibrium (10m, Crit A) ─────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Chemical Equilibrium & Bonding',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 10,
    stem: 'A home soda-maker forces carbon dioxide (CO₂) from a pressurised cartridge into a bottle of water to make it fizzy. While the bottle is sealed and under pressure the CO₂ stays dissolved; when the bottle is opened the pressure drops and the CO₂ begins to escape.',
    artefact: {
      component: 'GasLawSim',
      data: {
        title: 'Pressure from the cartridge controls how much CO₂ stays dissolved',
        vessel: 'sealed soda-maker bottle',
        plungerArea: 0.0008,
        atmPressure: 101325,
        g: 9.81,
        massSlider_kg: [0, 2, 4, 6, 8],
        constantPV_kPa_cm3: 3000,
        pvUnit: 'cm³ CO₂',
        coupling: 'A higher pressure pushes more CO₂ into solution; releasing the pressure lets CO₂ escape, so the equilibrium CO₂(aq) ⇌ CO₂(g) shifts towards the gas.',
      },
      caption: 'Load the plunger to raise the pressure on the trapped gas: higher pressure keeps more CO₂ dissolved, lower pressure lets it escape.',
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
        text: '**Explain** what will happen to the concentration of dissolved carbon dioxide in a bottle of home-made soda water left open on a warm kitchen counter for 30 minutes.',
        marks: 3,
        ph: 'Less fizzy; equilibrium shifts; CO₂ solubility decreases as temperature increases',
      },
    ],
  },

  // ─── Q2: Vinegar / glycerol / propane-1,2-diol / ester (9m, Crit A) ──────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organic Chemistry & Moles',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 9,
    stem: 'Ethanoic acid (acetic acid, C₂H₄O₂) is the acid in vinegar and is widely used as a household cleaner and food preservative. Related organic liquids — glycerol and propane-1,2-diol — are used as moisturisers and food additives, while esters give many products their fruity smell.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Liquid', 'Use', 'Molecular formula', 'Molar mass / g mol⁻¹'],
        rows: [
          ['Ethanoic acid (vinegar)', 'cleaner / preservative', 'C₂H₄O₂', '60.0'],
          ['Glycerol', 'moisturiser', 'C₃H₈O₃', '92.0'],
          ['Propane-1,2-diol', 'food additive', 'C₃H₈O₂', '76.0'],
          ['Ethyl ethanoate', 'fruity-smell ester', 'C₄H₈O₂', '88.0'],
        ],
      },
      caption: 'Ingredient data for the household liquids: read the formula and molar mass you need from this table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the molar mass of ethanoic acid, C₂H₄O₂. Give the unit.',
        marks: 2,
        ph: 'Mr = 60 g mol⁻¹',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: 'A bottle of cleaning product contains 23.0 g of glycerol. The molar mass of glycerol is 92.0 g mol⁻¹. **Calculate** the number of moles of glycerol in the bottle. Give your answer to 3 significant figures.',
        marks: 2,
        ph: 'n = 23.0/92.0 = 0.250 mol',
        widget: 'fill_blank',
      },
      {
        label: 'c',
        text: '**Determine** the molecular formula of propane-1,2-diol from the 3D molecular model shown.',
        marks: 3,
        ph: 'C₃H₈O₂',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="200" fill="#ffffff"/><text x="230" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">3D model of propane-1,2-diol</text><g stroke="#94a3ad" stroke-width="6"><line x1="100" y1="120" x2="180" y2="90"/><line x1="180" y1="90" x2="260" y2="120"/><line x1="100" y1="120" x2="90" y2="70"/><line x1="180" y1="90" x2="180" y2="40"/></g><g><circle cx="100" cy="120" r="15" fill="#3a3a3a"/><circle cx="180" cy="90" r="15" fill="#3a3a3a"/><circle cx="260" cy="120" r="15" fill="#3a3a3a"/></g><g><circle cx="90" cy="70" r="12" fill="#d62828"/><circle cx="180" cy="40" r="12" fill="#d62828"/></g><g fill="#e2e8f0" stroke="#94a3ad"><circle cx="70" cy="135" r="8"/><circle cx="92" cy="160" r="8"/><circle cx="150" cy="78" r="8"/><circle cx="232" cy="135" r="8"/><circle cx="288" cy="108" r="8"/><circle cx="262" cy="162" r="8"/><circle cx="60" cy="58" r="8"/><circle cx="150" cy="24" r="8"/></g><g font-size="10" fill="#475569"><rect x="350" y="120" width="14" height="14" fill="#3a3a3a"/><text x="370" y="131">carbon</text><rect x="350" y="142" width="14" height="14" fill="#d62828"/><text x="370" y="153">oxygen</text><circle cx="357" cy="171" r="7" fill="#e2e8f0" stroke="#94a3ad"/><text x="370" y="175">hydrogen</text></g></svg>',
          },
          caption: 'Count each atom type from the model: black = carbon, red = oxygen, white = hydrogen.',
        },
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Select** the name of the highlighted functional group in each structure of an air-freshener fragrance molecule.',
        marks: 2,
        ph: 'First highlighted group = Ester (COO); Second highlighted group = Alcohol (OH)',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="190" fill="#ffffff"/><text x="230" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of a fragrance molecule</text><g stroke="#475569" stroke-width="2" fill="none"><polyline points="30,110 60,90 90,110 120,90"/><line x1="90" y1="110" x2="90" y2="150"/><line x1="120" y1="90" x2="150" y2="110"/></g><text x="100" y="86" font-size="12" fill="#0f172a">C(=O)–O–CH₂</text><rect x="82" y="74" width="120" height="34" rx="5" fill="none" stroke="#e8590c" stroke-width="2.5" stroke-dasharray="4 3"/><text x="142" y="68" font-size="10" font-weight="700" fill="#e8590c" text-anchor="middle">group 1</text><g stroke="#475569" stroke-width="2" fill="none"><polyline points="280,110 310,90 340,110"/><line x1="340" y1="110" x2="370" y2="90"/></g><text x="340" y="86" font-size="12" fill="#0f172a">CH₂–OH</text><rect x="332" y="74" width="78" height="34" rx="5" fill="none" stroke="#2f9e44" stroke-width="2.5" stroke-dasharray="4 3"/><text x="371" y="68" font-size="10" font-weight="700" fill="#2f9e44" text-anchor="middle">group 2</text><text x="230" y="178" font-size="10" fill="#94a3ad" text-anchor="middle">Highlighted bonds show the two functional groups to identify.</text></svg>',
          },
          caption: 'Identify each ringed functional group on the fragrance molecule.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: ['First highlighted group', 'Second highlighted group'],
        widgetOptions: ['Alcohol', 'Alkene', 'Carboxylic acid', 'Ester'],
      },
    ],
  },

  // ─── Q3: Copper vs galvanised steel water pipes (5m, Crit A) ─────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table & Materials Science',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 5,
    stem: 'Water pipes inside buildings must last for decades without leaking or contaminating the water. Two common choices are copper pipe and galvanised steel pipe (steel coated with a thin layer of zinc).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Property', 'Copper', 'Galvanised steel'],
        rows: [
          ['Reaction with water / air', 'very slow (does not rust)', 'zinc protects, but rusts once the zinc wears away'],
          ['Density / g cm⁻³', '8.96', '7.85'],
          ['Bends without cracking', 'yes (malleable)', 'less easily'],
          ['Electrical / thermal conductor', 'excellent', 'moderate'],
          ['Approximate cost', 'higher', 'lower'],
        ],
      },
      caption: 'Comparison of the two pipe materials. Use the data to support your answer to part (b).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the electron configuration of zinc.',
        marks: 1,
        ph: '2.8.18.2',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Using the information in the table and your wider MYP studies, explain** two advantages of copper pipes compared to galvanised steel pipes.',
        marks: 4,
        ph: 'Copper does not rust → no contamination/leaks, lasts longer; copper is malleable → bends round corners without cracking; copper is a better conductor; (accept other linked advantages)',
      },
    ],
  },

  // ─── Q4: KNO₃ fertiliser solubility / crystal growing (15m, Crit C) ──────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'States of Matter & Data Processing',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 15,
    stem: 'Potassium nitrate (KNO₃) is a soluble fertiliser salt that is also used to grow crystals. A student investigated the maximum mass of potassium nitrate that could be dissolved in 100 cm³ of water at different temperatures. The student\'s raw results are shown.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Maximum mass of KNO₃ dissolved in 100 cm³ of water',
        mode: 'scatter',
        variable: 'KNO₃ solubility',
        xLabel: 'Temperature / °C',
        yLabel: 'Mass of KNO₃ / g',
        xAxis: { label: 'Temperature / °C', min: 0, max: 100, tick: 20 },
        yAxis: { label: 'Mass of KNO₃ / g', min: 0, max: 250, tick: 50 },
        lineOfBestFit: true,
        points: [
          [0, 14],
          [20, 32],
          [40, 64],
          [60, 155],
          [80, 169],
          [100, 246],
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
        ph: 'Two labelled columns: Temperature/°C and Mass of KNO₃/g; units in headers; data in ascending temperature order',
      },
      {
        label: 'b',
        text: '**Present** the data in part (a) in a graph.',
        marks: 5,
        ph: 'Scatter graph; x=Temperature/°C; y=Mass of KNO₃/g; even scale from 0; all 6 points plotted; line of best fit; axes labelled with units',
      },
      {
        label: 'c',
        text: '**Select** the graph that shows the most appropriate line of best fit for a second student\'s data.',
        marks: 1,
        ph: 'Graph C — straight line balanced through the majority of points',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="170" fill="#ffffff"/><g><g transform="translate(10,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="92" r="3" fill="#0b7285"/><circle cx="40" cy="84" r="3" fill="#0b7285"/><circle cx="60" cy="62" r="3" fill="#0b7285"/><circle cx="80" cy="40" r="3" fill="#0b7285"/><circle cx="95" cy="24" r="3" fill="#0b7285"/><line x1="15" y1="82" x2="100" y2="52" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">A</text></g><g transform="translate(140,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="92" r="3" fill="#0b7285"/><circle cx="40" cy="84" r="3" fill="#0b7285"/><circle cx="60" cy="62" r="3" fill="#0b7285"/><circle cx="80" cy="40" r="3" fill="#0b7285"/><circle cx="95" cy="24" r="3" fill="#0b7285"/><line x1="15" y1="100" x2="100" y2="95" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">B</text></g><g transform="translate(270,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="92" r="3" fill="#0b7285"/><circle cx="40" cy="84" r="3" fill="#0b7285"/><circle cx="60" cy="62" r="3" fill="#0b7285"/><circle cx="80" cy="40" r="3" fill="#0b7285"/><circle cx="95" cy="24" r="3" fill="#0b7285"/><line x1="15" y1="98" x2="100" y2="22" stroke="#2f9e44" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#2f9e44">C</text></g><g transform="translate(400,20)"><rect width="110" height="110" fill="#f8fafc" stroke="#cbd5e1"/><circle cx="20" cy="92" r="3" fill="#0b7285"/><circle cx="40" cy="84" r="3" fill="#0b7285"/><circle cx="60" cy="62" r="3" fill="#0b7285"/><circle cx="80" cy="40" r="3" fill="#0b7285"/><circle cx="95" cy="24" r="3" fill="#0b7285"/><polyline points="15,98 40,72 60,70 80,30 100,22" fill="none" stroke="#e8590c" stroke-width="2"/><text x="55" y="128" font-size="12" font-weight="700" text-anchor="middle" fill="#475569">D</text></g></g></svg>',
          },
          caption: 'Four candidate lines of best fit (A–D) drawn on the same data.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: '**Identify** the data point that is an outlier. **Suggest** what the expected mass of KNO₃ would be.',
        marks: 2,
        ph: 'Outlier at 60 °C; expected mass from the line of best fit ≈ 130 g',
      },
      {
        label: 'e',
        text: 'To grow a large crystal, the student dissolves the maximum mass of KNO₃ in hot water, then lets the clear solution cool slowly so solid crystals form. **Select** the state and expected behaviour of the potassium nitrate at each stage of crystal growing.',
        marks: 4,
        ph: 'Hot solution (dissolved): liquid — takes the shape of the container; cooled crystal: solid — no change of shape',
        artefact: {
          component: 'ParticleSim',
          data: {
            title: 'KNO₃ particles while growing a crystal',
            mode: 'states',
            substance: 'potassium nitrate',
            // NOTE: in multi-container "states" mode the component assigns states by
            // container index in the fixed order solid → liquid → gas. The solid
            // location (cooled crystal) is therefore listed first and the liquid
            // location (hot solution) second, so each box renders the correct state.
            containers: ['Cooled crystal (solid KNO₃)', 'Hot solution (dissolved)'],
            states: ['solid', 'liquid'],
          },
          caption: 'The same KNO₃ at two stages — watch how the particles are arranged and how they move in each.',
        },
        widget: 'inline_dropdown_select',
        widgetItems: [
          'KNO₃ in the hot solution — State',
          'KNO₃ in the cooled crystal — State',
          'KNO₃ in the hot solution — Behaviour',
          'KNO₃ in the cooled crystal — Behaviour',
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

  // ─── Q5: Rusting iron nail / charcoal combustion (12m, Crit B) ───────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Chemical Reactions & Scientific Inquiry',
    topicCanonical: 'Chemical Equations & Reactions',
    topicGroup: 'Chemical Reactions',
    marks: 12,
    stem: 'Chemical changes happen all around the home and garden. When an iron nail is left outdoors it slowly rusts: the new orange-brown coating and the change in mass are indicators that a chemical change has taken place. Burning is another chemical change — when charcoal burns on a barbecue it glows and produces a new gas (carbon dioxide).',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Rusting of iron nails: % of the nail rusted against time',
        mode: 'saturating',
        variable: 'time left outdoors',
        xLabel: 'Time left outdoors / days',
        yLabel: 'Nail surface rusted / %',
        xAxis: { label: 'Time left outdoors / days', min: 0, max: 30, tick: 5 },
        yAxis: { label: 'Surface rusted / %', min: 0, max: 100, tick: 20 },
        series: [
          { label: 'Nail in damp air', plateau: 100 },
          { label: 'Nail in dry air', plateau: 30 },
        ],
        note: 'The longer the nail is left in damp air, the more of its surface rusts — until it is fully covered.',
      },
      caption: 'Rusting curves for two conditions. Press Play and read off how much of each nail has rusted at a chosen time.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the variables in the student\'s investigation of how long nails are left outdoors and how rusted they become:\n\nIndependent variable: ___\nDependent variable: ___\nControl variable 1: ___\nControl variable 2: ___',
        marks: 4,
        ph: 'IV = time left outdoors; DV = how rusted (area/mass of rust); CV = size/type of nail; CV = amount of moisture (or temperature)',
        widget: 'fill_blank',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable hypothesis for the investigation in part (a). Use the form If… Then… Because…',
        marks: 3,
        ph: 'If the nail is left outdoors for longer, then more of it rusts, because more chemical change (iron + oxygen + water → rust) takes place',
      },
      {
        label: 'c',
        text: 'Charcoal is almost pure carbon. **Outline** why charcoal glows and loses mass when it burns on a barbecue.',
        marks: 3,
        ph: 'Carbon reacts with oxygen from the air; combustion releases heat so it glows; carbon dioxide gas is produced and escapes so mass is lost',
      },
      {
        label: 'd',
        text: 'A student lit a fresh piece of charcoal but partly covered the barbecue so less air could reach it. **Predict** how the burning would be different to the original. **Justify** your answer.',
        marks: 2,
        ph: 'Burns more slowly / glows less brightly; less oxygen available → slower combustion reaction',
      },
    ],
  },

  // ─── Q6: Acid descaler vs limescale / Crit B design (25m, Crit B) ────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Acids & Scientific Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 25,
    stem: 'Limescale (calcium carbonate) builds up inside kettles in hard-water areas. Descaler products use acids to dissolve it, fizzing as carbon dioxide is released. A student investigated which acid removes limescale fastest by placing identical limescale-coated discs into different acids and measuring the mass of limescale removed in 25 minutes. The student\'s hypothesis was that all the acids would remove the same mass. A mass loss above 0.80 g means the disc is fully descaled.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Mass of limescale removed from a disc after 25 minutes',
        mode: 'bars',
        variable: 'Descaling liquid',
        metric: 'Mass of limescale removed / g',
        bars: [
          { label: 'Sample 1: acid only (no disc)', value: 0 },
          { label: 'Sample 2: water (control)', value: 0.05 },
          { label: 'Sample 3: weak vinegar', value: 0.55 },
          { label: 'Sample 4: citric-acid descaler', value: 0.90 },
          { label: 'Sample 5: sulfamic-acid descaler', value: 0.98 },
        ],
        note: 'A larger mass removed means faster descaling. The threshold for "fully descaled" is 0.80 g.',
      },
      caption: 'Mass-removed results for each liquid. Sample 1 is acid with no disc in it.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use** data from the results to state whether the student\'s hypothesis is correct. **Justify** your answer.',
        marks: 2,
        ph: 'Hypothesis NOT supported; the acids remove different masses of limescale (e.g. vinegar 0.55 g vs sulfamic 0.98 g)',
      },
      {
        label: 'b',
        text: '**State** which samples would be suitable for fully descaling a kettle (mass-removed threshold = 0.80 g). **Justify** your answer using data.',
        marks: 2,
        ph: 'Citric-acid (0.90 g) and sulfamic-acid (0.98 g) descalers — both above the 0.80 g threshold',
      },
      {
        label: 'c',
        text: '**State** why sample 1 was measured using only acid (no limescale disc).',
        marks: 1,
        ph: 'As a control / baseline / for direct comparison',
        widget: 'fill_blank',
      },
      {
        label: 'd',
        text: '**Outline** an improvement to the method used.',
        marks: 2,
        ph: 'Repeat the experiment for each acid and calculate an average to reduce the effect of random error',
      },
      {
        label: 'e',
        text: 'The student wanted to know the minimum pH that would descale the disc, between pH 1.5 and 3.0. They decided to use solutions of hydrochloric acid of known pH. **Suggest** a research question for the student\'s investigation.',
        marks: 1,
        ph: 'What is the effect of pH on the mass of limescale removed?',
      },
      {
        label: 'f',
        text: '**Design** a method to identify the pH that would descale the disc. In your answer you should include:\n• the independent, dependent and two control variables\n• a list of equipment you will use\n• details of the method you will use\n• how many measurements you will take to collect sufficient data\n• safety considerations.',
        marks: 17,
        ph: 'IV = pH; DV = mass of limescale removed; CVs = size/mass of disc + reaction time; HCl solutions of 5+ pH values; balance; ≥3 trials per pH; mean; acid safety (goggles)',
      },
    ],
  },

  // ─── Q7: Petrol vs electric car / carbon footprint (9m, Crit D) ──────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental Chemistry & Societal Impact',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 9,
    stem: 'Many drivers are switching from petrol cars to battery-electric cars to cut their emissions. The graph compares the carbon dioxide produced over the life of each type of car, and the table below shows further data comparing a petrol car and an electric car of the same size.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Lifetime CO₂ from a petrol car and an electric car',
        mode: 'bars',
        variable: 'Stage of car life',
        metric: 'CO₂ produced / tonnes',
        bars: [
          { label: 'Petrol car: total lifetime', value: 35 },
          { label: 'Petrol car: just making it', value: 9 },
          { label: 'Electric car: total lifetime', value: 18 },
          { label: 'Electric car: just making it', value: 12 },
        ],
        note: 'Driving emissions = total lifetime − emissions from making the car.',
      },
      caption: 'Bar chart of lifetime CO₂. Read the bars to find how much CO₂ comes from driving the petrol car.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Using** the graph above, calculate the carbon dioxide produced from driving (using) the petrol car over its lifetime.',
        marks: 2,
        ph: '35 − 9 = 26 tonnes CO₂ (accept 24–28)',
      },
      {
        label: 'b',
        text: '**Using** the graph in part (a) and the data in the table above, **discuss and evaluate** the advantages and disadvantages of an electric car compared to a petrol car. In your answer you should include:\n• the advantages of an electric car compared to a petrol car\n• a comparison of the data in the table\n• your opinion of why people may choose an electric car rather than a petrol car.',
        marks: 7,
        ph: 'AD: lower lifetime CO₂ and no exhaust fumes vs higher CO₂ from making the battery and longer charging; data comparison; opinion justified',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Feature', 'Petrol car', 'Electric car'],
            rows: [
              ['Lifetime CO₂ / tonnes', '35', '18'],
              ['Exhaust fumes in towns', 'yes', 'none'],
              ['Fuel/energy cost per 100 km / £', '12', '4'],
              ['Range on a full tank/charge / km', '650', '350'],
              ['Refuel/recharge time', '5 min', '40 min'],
              ['Purchase price / £', '24 000', '32 000'],
            ],
          },
          caption: 'Comparison of the two cars. Use this alongside the carbon-footprint chart.',
        },
      },
    ],
  },

  // ─── Q8: Hydrogen fuel-cell buses (15m, Crit D) ──────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science, Technology & Society',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 15,
    stem: 'To cut air pollution in cities, some bus companies are replacing diesel buses with hydrogen fuel-cell buses. In a fuel cell, hydrogen reacts with oxygen to produce electricity, and the only substance released from the bus is water. The hydrogen can be made by using electricity to split water (electrolysis); this is truly clean only when the electricity comes from renewable sources. Hydrogen is a gas that must be stored under high pressure, and refuelling stations are still rare and expensive to build.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Where the energy goes: hydrogen fuel-cell bus (per 100 units of fuel energy)',
        units: 'units',
        flows: [
          { label: 'Fuel energy in', value: 100, kind: 'in' },
          { label: 'Useful energy moving the bus', value: 45, kind: 'out' },
          { label: 'Energy lost as heat', value: 55, kind: 'loss' },
        ],
        conservation: 'A hydrogen fuel-cell bus turns about 45% of its fuel energy into motion and emits only water, while a diesel bus turns about 30% into motion and emits CO₂ and soot.',
      },
      caption: 'Energy flow for a fuel-cell bus. Most fuel energy still becomes useful motion, and the exhaust is only water.',
    },
    tasks: [
      {
        label: '',
        text: '**Using** the information provided, **discuss and evaluate** the use of hydrogen fuel-cell buses to replace diesel buses from environmental, ethical, social and economic perspectives. In your answer include an assessment of the potential impact on health.',
        marks: 15,
        ph: 'Environmental: only water emitted, no CO₂/soot at the bus, but only clean if hydrogen made with renewables; Ethical: fairer to make hydrogen with renewable not fossil electricity; Socio-economic: cleaner city transport and jobs but high cost of buses/refuelling stations; Health: removes exhaust fumes that cause lung disease in cities; justified conclusion',
      },
    ],
  },
]
