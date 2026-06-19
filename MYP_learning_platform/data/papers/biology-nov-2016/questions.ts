import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2016',
  subject: 'Biology',
  session: 'November',
  year: 2016,
  totalMarks: 120,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Cells (14 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cells',
    topicCanonical: 'Cell Structure & Function',
    topicGroup: 'Cells',
    marks: 14,
    stem: 'All living things are made of cells. All cells come from other cells. The cell is the basic unit of structure and function in all living things.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="720" height="300" fill="#ffffff"/><text x="360" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three cells viewed under a microscope</text>'
          // ── Cell 1: plant cell (rectangular, cell wall + chloroplasts + large vacuole + nucleus) ──
          + '<text x="120" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Cell 1</text>'
          + '<rect x="60" y="58" width="120" height="200" rx="6" fill="#f1f8f3" stroke="#5a6b78" stroke-width="6"/>'
          + '<rect x="74" y="72" width="92" height="172" rx="4" fill="#ffffff" stroke="#bcd0c6" stroke-width="1.5"/>'
          + '<ellipse cx="90" cy="92" rx="11" ry="6" fill="#74b266"/><ellipse cx="150" cy="100" rx="11" ry="6" fill="#74b266"/><ellipse cx="86" cy="220" rx="11" ry="6" fill="#74b266"/><ellipse cx="148" cy="216" rx="11" ry="6" fill="#74b266"/><ellipse cx="150" cy="160" rx="11" ry="6" fill="#74b266"/>'
          + '<circle cx="98" cy="160" r="15" fill="#2f3b45"/>'
          + '<text x="120" y="278" font-size="9" text-anchor="middle" fill="#475569">cell wall · chloroplasts · vacuole</text>'
          // ── Cell 2: plant cells / moss with spore capsule on top (green cells, brown spores) ──
          + '<text x="360" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Cell 2</text>'
          + '<g>'
          + '<circle cx="340" cy="80" r="9" fill="#7a4a1e"/><circle cx="360" cy="74" r="9" fill="#7a4a1e"/><circle cx="380" cy="80" r="9" fill="#7a4a1e"/><circle cx="350" cy="94" r="9" fill="#8a5524"/><circle cx="372" cy="94" r="9" fill="#8a5524"/><circle cx="360" cy="108" r="9" fill="#7a4a1e"/>'
          + '<rect x="332" y="120" width="56" height="46" rx="5" fill="#eaf6ea" stroke="#5a9a55" stroke-width="3"/>'
          + '<ellipse cx="346" cy="134" rx="6" ry="4" fill="#5a9a55"/><ellipse cx="372" cy="148" rx="6" ry="4" fill="#5a9a55"/><circle cx="360" cy="143" r="6" fill="#2f3b45"/>'
          + '<path d="M360 166 q-22 40 -34 84" stroke="#7fae5a" stroke-width="9" fill="none" stroke-linecap="round"/>'
          + '</g>'
          + '<text x="360" y="278" font-size="9" text-anchor="middle" fill="#475569">cell wall · chloroplasts present</text>'
          // ── Cell 3: animal cell (irregular blob, nucleus, mitochondria, lysosomes, no wall) ──
          + '<text x="600" y="48" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Cell 3</text>'
          + '<path d="M540 110 q-12 -40 40 -44 q60 -8 78 30 q26 22 8 70 q14 48 -38 62 q-58 18 -86 -22 q-24 -34 -2 -96 z" fill="#f4eef7" stroke="#9c8aa8" stroke-width="2"/>'
          + '<circle cx="598" cy="158" r="22" fill="#f08fb0"/><circle cx="598" cy="158" r="9" fill="#c2255c"/>'
          + '<ellipse cx="560" cy="120" rx="13" ry="7" fill="#9c36b5" transform="rotate(-25 560 120)"/><ellipse cx="640" cy="195" rx="13" ry="7" fill="#9c36b5" transform="rotate(20 640 195)"/>'
          + '<circle cx="630" cy="120" r="6" fill="#1971c2"/><circle cx="565" cy="200" r="6" fill="#1971c2"/><circle cx="618" cy="205" r="5" fill="#1971c2"/>'
          + '<text x="600" y="278" font-size="9" text-anchor="middle" fill="#475569">no cell wall · no chloroplasts · lysosomes</text>'
          + '</svg>',
      },
      caption: 'Cell 1, Cell 2 and Cell 3 as seen under the microscope. Use the visible structures to decide if each is a plant cell or an animal cell.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Describe** three functions cells perform to maintain life.',
        marks: 6,
        ph: 'Three of: Growth/differentiation — increasing in size/complexity; Respiration — release of energy from nutrients; Reproduction — replication/propagation; Digestion — breakdown of food; Homeostasis — regulation of internal environment; Excretion — elimination of metabolic waste/CO₂.',
      },
      {
        label: 'b',
        text: 'Look at the three cell images in the tabs below.\n\n**State** whether each cell is a plant cell or an animal cell. **Justify** your answers by identifying key structures.',
        marks: 6,
        ph: 'Cell 1: plant cell — has cell wall/chloroplasts/large central vacuole. Cell 2: plant cell — has cell wall and chloroplasts. Cell 3: animal cell — no cell wall/no chloroplasts/has lysosomes.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Cell 1', 'Cell 2', 'Cell 3'],
        widgetOptions: ['Plant cell', 'Animal cell'],
      },
      {
        label: 'c',
        text: 'Some single-celled organisms are not easy to identify as either plant or animal.\n\n**Formulate** and **explain** a testable hypothesis which could be used to determine if a single-celled organism you are observing is a plant.',
        marks: 2,
        ph: 'Hypothesis: If the organism is exposed to light then it will produce oxygen, because plant-like organisms photosynthesize to produce oxygen.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Organisation & Circulation (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Organisation & Circulation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Tissues, Organs & Systems'],
    marks: 7,
    artefact: {
      component: 'DragSort',
      data: {
        mode: 'order',
        title: 'Organize the five images by increasing complexity',
        prompt: 'Click an image, then click a numbered slot to place it from least complex (1) to most complex (5).',
        items: [
          'A — heart muscle (organ tissue)',
          'B — a single red blood cell',
          'C — a paramecium (single-celled organism)',
          'D — a pug dog (whole organism)',
          'E — a cluster of red blood cells (tissue)',
        ],
        slots: ['1 — least complex', '2', '3', '4', '5 — most complex'],
        correctOrder: [
          'B — a single red blood cell',
          'E — a cluster of red blood cells (tissue)',
          'A — heart muscle (organ tissue)',
          'C — a paramecium (single-celled organism)',
          'D — a pug dog (whole organism)',
        ],
      },
      caption: 'Five biological images (A–E) to arrange from least to most complex.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Look at the images above.\n\nDrag and drop to **organize** the images into a sequence in order of increasing complexity.\n\nImages: A (heart/organ tissue), B (single red blood cell), C (paramecium/single-celled organism), D (pug dog/organism), E (cluster of red blood cells/tissue).',
        marks: 2,
        ph: 'Correct order least → most complex: B → E → A → C → D.',
      },
      {
        label: 'b',
        text: '**Describe** the movement of an oxygen molecule from the lungs to a muscle cell. Use scientific language and include five points in your answer.',
        marks: 5,
        ph: 'Diffuses across alveolus membrane → into capillary → binds haemoglobin in red blood cell → transported to heart via pulmonary vein → through left atrium/ventricle → leaves via aorta → through arteries → through capillaries → diffuses into muscle cell.',
        artefact: {
          component: 'NetworkGraph',
          data: {
            title: 'Pathway of an oxygen molecule: lungs → muscle cell',
            center: { label: 'O₂ molecule', detail: 'follows this route from the air you breathe in to a respiring muscle cell', color: '#1971c2' },
            nodes: [
              { id: 'alveolus', label: 'Alveolus', detail: 'O₂ diffuses across the thin, moist alveolar membrane into the blood.' },
              { id: 'capillary', label: 'Lung capillary', detail: 'O₂ enters a capillary surrounding the alveolus.' },
              { id: 'rbc', label: 'Red blood cell', detail: 'O₂ binds to haemoglobin inside red blood cells.' },
              { id: 'heart', label: 'Heart', detail: 'Oxygenated blood returns to the heart (left atrium → left ventricle) and is pumped out via the aorta.' },
              { id: 'artery', label: 'Artery', detail: 'Blood travels through arteries towards the working muscle.' },
              { id: 'muscle', label: 'Muscle cell', detail: 'O₂ diffuses out of a capillary into the muscle cell for aerobic respiration.' },
            ],
            edges: [
              { from: 'alveolus', to: 'capillary', label: 'diffuses' },
              { from: 'capillary', to: 'rbc', label: 'binds' },
              { from: 'rbc', to: 'heart', label: 'pulmonary vein' },
              { from: 'heart', to: 'artery', label: 'aorta' },
              { from: 'artery', to: 'muscle', label: 'capillary → cell' },
            ],
          },
          caption: 'Tap a node to read how oxygen moves through each structure on its way to a muscle cell.',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Fish Gill Disease (12 marks, Criterion A/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Fish Gill Disease',
    topicCanonical: 'Gas Exchange',
    topicGroup: 'Metabolism',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 12,
    stem: 'A fishing community relies on its catch of a type of fish called Borch for its staple diet. The fish are starting to show signs of a gill disease which increases the thickness of the gas exchange surface. The increase in thickness affects the fish\'s oxygen uptake.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Effect of gill disease on oxygen uptake',
        xLabel: 'percentage of gill affected',
        xUnit: '%',
        yLabel: 'oxygen uptake',
        yUnit: 'cm³ h⁻¹',
        xMin: 0,
        xMax: 100,
        yMin: 0,
        yMax: 0.35,
        xStep: 20,
        yStep: 0.05,
        lobf: true,
        dataPoints: [
          { x: 0, y: 0.29 },
          { x: 30, y: 0.21 },
          { x: 45, y: 0.20 },
          { x: 60, y: 0.14 },
          { x: 65, y: 0.18 },
          { x: 90, y: 0.08 },
          { x: 95, y: 0.11 },
        ],
      },
      caption: 'Average oxygen uptake of Borch fish against the percentage of gill affected by the disease. The dashed red line is the line of best fit — read the value where it meets 0% to find the uptake of a healthy fish.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the graph, **state** the volume of oxygen taken up per hour by healthy fish without gill disease.',
        marks: 1,
        ph: '0.29 cm³ h⁻¹ (accept 0.28).',
      },
      {
        label: 'b',
        text: 'Using the graph, **outline** the relationship between the amount of gill affected and the oxygen uptake of the fish.',
        marks: 1,
        ph: 'Negative/inverse relationship — as % gill affected increases, oxygen uptake decreases.',
      },
      {
        label: 'c',
        text: '**Compare and contrast** the structure and function of the fish\'s gill to a human lung.',
        marks: 3,
        ph: 'Common: thin membrane, large surface area, moist surfaces, capillaries. Differences: oxygen from water (fish) vs air (human); gills external/lamellae vs lungs internal/alveoli.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="720" height="320" fill="#ffffff"/><text x="360" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Gas exchange surfaces: fish gill vs human lung</text>'
              // ── Fish (left) ──
              + '<text x="180" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Fish gill</text>'
              + '<path d="M70 150 q40 -55 130 -48 q70 6 120 48 q-50 42 -120 48 q-90 7 -130 -48 z" fill="#cfe8c9" stroke="#5a9a55" stroke-width="2"/>'
              + '<circle cx="280" cy="138" r="6" fill="#1f2d3a"/>'
              + '<path d="M300 122 q22 8 22 28 q0 20 -22 28" fill="none" stroke="#e8590c" stroke-width="3"/>'
              + '<text x="332" y="120" font-size="9" fill="#475569">water flows in</text><text x="332" y="170" font-size="9" fill="#475569">(through mouth)</text>'
              // gill filaments / lamellae detail
              + '<g stroke="#c2255c" stroke-width="2" fill="none">'
              + '<path d="M120 200 q10 -14 0 -28 q-10 -14 0 -28"/><path d="M138 204 q10 -16 0 -32 q-10 -16 0 -32"/><path d="M156 206 q10 -16 0 -34 q-10 -16 0 -34"/><path d="M174 204 q10 -16 0 -32 q-10 -16 0 -32"/></g>'
              + '<text x="150" y="250" font-size="9" text-anchor="middle" fill="#475569">thin lamellae · many capillaries</text>'
              + '<text x="150" y="265" font-size="9" text-anchor="middle" fill="#475569">O₂ taken from WATER</text>'
              // ── Human lung (right) ──
              + '<text x="540" y="50" font-size="12" font-weight="700" text-anchor="middle" fill="#0b7285">Human lung</text>'
              + '<path d="M540 70 v34" stroke="#5a6b78" stroke-width="6" fill="none"/>'
              + '<path d="M540 104 q-50 6 -64 70 q-12 60 30 86 q40 22 34 -20 q-4 -56 0 -136 z" fill="#f7d6dd" stroke="#c2255c" stroke-width="2"/>'
              + '<path d="M540 104 q50 6 64 70 q12 60 -30 86 q-40 22 -34 -20 q4 -56 0 -136 z" fill="#f7d6dd" stroke="#c2255c" stroke-width="2"/>'
              + '<circle cx="520" cy="210" r="8" fill="#ffffff" stroke="#1971c2" stroke-width="1.5"/><circle cx="560" cy="210" r="8" fill="#ffffff" stroke="#1971c2" stroke-width="1.5"/><circle cx="540" cy="235" r="8" fill="#ffffff" stroke="#1971c2" stroke-width="1.5"/>'
              + '<text x="540" y="285" font-size="9" text-anchor="middle" fill="#475569">alveoli · many capillaries</text>'
              + '<text x="540" y="300" font-size="9" text-anchor="middle" fill="#475569">O₂ taken from AIR</text>'
              // shared-features banner
              + '<text x="360" y="312" font-size="10" font-weight="600" text-anchor="middle" fill="#0b7285">Both: thin moist surface · large surface area · rich blood supply</text>'
              + '</svg>',
          },
          caption: 'Both surfaces are thin, moist and have a large surface area with many capillaries; the gill takes O₂ from water via lamellae, the lung takes O₂ from air via alveoli.',
        },
      },
      {
        label: 'd',
        text: 'Using the information provided, **suggest** why increased thickness of gills would impact oxygen uptake.',
        marks: 2,
        ph: 'Increased thickness → longer diffusion distance → oxygen cannot diffuse as quickly/efficiently across gas exchange surface → reduced oxygen uptake.',
      },
      {
        label: 'e',
        text: 'If the gill disease spreads through the fish population, **discuss** the potential consequences for the biological community. In your answer consider:\n- how the food chain will be affected\n- the size of the fish population\n- the effects of the activities of the diseased fish on the community\n- the effects on the human community that harvests the fish.',
        marks: 5,
        ph: 'Reduced fish numbers → food chain disruption; fish population declines; reduced protein/food source; economic hardship for fishing community.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Athlete Fitness & Oxygen Consumption (9 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Athlete Fitness & Oxygen Consumption',
    topicCanonical: 'Aerobic & Anaerobic Respiration',
    topicGroup: 'Processes',
    topicsAlso: ['Circulation'],
    marks: 9,
    stem: 'One indicator of fitness is a measurement of how efficiently the body can consume oxygen. The experiment must be designed to take account of variables.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Oxygen consumption during exercise of varying intensity',
        xLabel: 'Exercise intensity',
        xUnit: '%',
        yLabel: 'Average O₂ consumption',
        yUnit: 'cm³ kg⁻¹ min⁻¹',
        xMin: 0,
        xMax: 90,
        yMin: 0,
        yMax: 60,
        xStep: 10,
        yStep: 10,
        dataPoints: [
          { x: 5, y: 8 },
          { x: 10, y: 13 },
          { x: 15, y: 18 },
          { x: 20, y: 22 },
          { x: 25, y: 26 },
          { x: 30, y: 30 },
          { x: 35, y: 33 },
          { x: 40, y: 36 },
          { x: 45, y: 38 },
          { x: 50, y: 38 },
          { x: 60, y: 38 },
          { x: 70, y: 38 },
          { x: 80, y: 38 },
        ],
      },
      caption: 'Point A (≈ 50% intensity, where the line flattens) is the VO₂ max — oxygen consumption rises with intensity, then plateaus.',
    },
    tasks: [
      {
        label: 'a',
        text: 'List **two** variables that should be controlled during an experiment to measure maximum oxygen consumption.',
        marks: 2,
        ph: 'Any two, e.g.: time of exercise; time of day; age of athlete; body mass; type of exercise.',
      },
      {
        label: 'b',
        text: '**State** the type of relationship shown in the graph of oxygen consumption and exercise intensity.',
        marks: 2,
        ph: 'Positive/linear relationship — oxygen consumption increases with exercise intensity up to VO₂ max.',
      },
      {
        label: 'c',
        text: '**Describe** the pattern between oxygen consumption and exercise intensity and **explain** what is happening on a cellular level **just before** and **just after** point A.',
        marks: 5,
        ph: 'Before A: O₂ consumption increases; cells use more O₂ for energy (aerobic respiration). After A (VO₂ max): O₂ consumption plateaus; cells cannot consume more O₂; switch to anaerobic respiration.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — GM Maize Investigation (20 marks, Criterion B/C)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GM Maize Investigation',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    marks: 20,
    stem: 'Scientists studied the growth of GM maize grown without fertilizer compared to traditional (non-GM) maize grown with fertilizer. One independent variable is the type of maize used.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Plant', 'GM maize, no fertilizer — height / m', 'Traditional maize, with fertilizer — height / m'],
        rows: [
          ['1', '1.52', '1.41'],
          ['2', '1.38', '1.58'],
          ['3', '1.61', '1.36'],
          ['4', '1.29', '1.49'],
          ['5', '1.47', '1.44'],
          ['6', '1.55', '1.31'],
          ['7', '1.33', '1.62'],
        ],
      },
      caption: 'Heights of seven plants in each group after 10 weeks of growth. Use these data when calculating means and choosing a graph.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one other independent variable being investigated in this study.',
        marks: 1,
        ph: 'Use of fertilizer (with fertilizer vs without fertilizer).',
      },
      {
        label: 'b',
        text: '**Select** an appropriate hypothesis that could have been tested in this experiment.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: [
          'Soils that are rich in nutrients produce better growth in maize crops than soils that are nutrient-poor.',
          'GM maize can produce more growth from nutrient-poor soil than traditional maize.',
          'GM maize can produce the same growth as traditional maize in nutrient-poor soils.',
          'GM maize produces better growth than traditional maize.',
        ],
        ph: 'Option C: GM maize can produce the same growth as traditional maize in nutrient-poor soils.',
      },
      {
        label: 'c',
        text: '**Label** the table for the scientists to collect the height of the plants. **Select** and **measure** suitable plants and record your data to an appropriate number of significant figures.',
        marks: 4,
        ph: 'Table headers include group names and unit (m). At least 5 values per group, 3–4 significant figures, all values 1.1–1.8 m.',
        artefact: {
          component: 'DataTableInteractive',
          data: {
            title: 'Measured plant heights after 10 weeks (read off the scale, 0–2 m)',
            caption: 'Each plant is measured against the metre scale shown on the growth plots. Click a row to pin the value you are reading. Heights are recorded to 3 significant figures and the unit (m) is in the header.',
            headers: ['Plant number', 'GM maize, no fertilizer / m', 'Traditional maize, with fertilizer / m'],
            rows: [
              ['1', '1.52', '1.41'],
              ['2', '1.38', '1.58'],
              ['3', '1.61', '1.36'],
              ['4', '1.29', '1.49'],
              ['5', '1.47', '1.44'],
              ['6', '1.55', '1.31'],
              ['7', '1.33', '1.62'],
            ],
          },
          caption: 'A correctly labelled results table (named groups + unit in the header), with at least five height measurements per group recorded to an appropriate number of significant figures.',
        },
      },
      {
        label: 'd',
        text: '**Calculate** the mean (average) of your data for each group.',
        marks: 2,
        ph: 'Mean in range 1.43–1.46 m; expressed to 3 or 4 significant figures.',
      },
      {
        label: 'e',
        text: '**Select** a graph to present this data. **Label** the axes of your graph and give it a suitable title.',
        marks: 3,
        ph: 'Bar graph selected; x-axis: group names; y-axis: height (m); suitable title.',
      },
      {
        label: 'f',
        text: '**Analyse** the results of this experiment using scientific reasoning.',
        marks: 3,
        ph: 'Both groups have similar heights → GM maize without fertilizer achieves same growth as traditional maize with fertilizer → new gene enables more efficient nutrient absorption.',
      },
      {
        label: 'g',
        text: '**Discuss** and **evaluate** the method used to investigate the growth of GM maize. In your answer consider:\n- one feature of the method that ensures that it is valid\n- one feature that could be changed to improve the validity\n- how the investigation could be extended\n- how your suggested extension improves the validity of conclusions.',
        marks: 5,
        ph: 'Strength: number of trials/controls. Limitation: two variables changed simultaneously. Extension: test GM maize with fertilizer. Justification: confirms effects not due to fertilizer use alone.',
      },
      {
        label: 'h',
        text: 'In this experiment height was chosen as a measure of growth.\n\nOther than height, **suggest** another way the scientists could have chosen to measure growth of the maize plants.',
        marks: 1,
        ph: 'Biomass of maize; number/yield of kernels; number of leaves.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Bt Cotton & GMO Ecosystems (30 marks, Criterion B/D)
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Bt Cotton & GMO Ecosystems',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Pollution & Conservation'],
    marks: 30,
    stem: 'Bt cotton is a genetically modified (GM) cotton plant that has been developed to produce its own pesticide which kills or deters insects from eating the plant. However, this is not a selective pesticide and the plant itself is toxic to other organisms.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'How Bt cotton can affect an ecosystem',
        center: { label: 'Bt cotton', detail: 'produces its own (non-selective) Bt toxin, which spreads through the food web', color: '#2f9e44' },
        nodes: [
          { id: 'pest', label: 'Target pest (bollworm)', detail: 'The intended target — eats the cotton and is killed by the Bt toxin.' },
          { id: 'nontarget', label: 'Non-target insects (bees, butterflies)', detail: 'Harmed even though they are not pests — toxin is not selective, reducing biodiversity.' },
          { id: 'predator', label: 'Insect-eating birds', detail: 'Fewer insects to eat → predator numbers fall (knock-on effect up the food chain).' },
          { id: 'soil', label: 'Soil organisms', detail: 'Bt toxin from roots and dead leaves can build up in the soil.' },
          { id: 'wildcotton', label: 'Wild cotton plants', detail: 'GM genes can spread by cross-pollination (gene flow) to nearby wild relatives.' },
          { id: 'farmer', label: 'Farmers / community', detail: 'Higher yield and less spraying, but seed cost and dependence on the seed company.' },
        ],
        edges: [
          { from: 'pest', to: 'predator', label: 'eaten by' },
          { from: 'nontarget', to: 'predator', label: 'eaten by' },
          { from: 'soil', to: 'wildcotton', label: 'affects' },
        ],
      },
      caption: 'Tap a node to see how the Bt toxin can move beyond the target pest to non-target species, predators, soil, wild relatives and the farming community.',
    },
    tasks: [
      {
        label: 'a',
        marks: 17,
        text: '**Design** one experiment that could be conducted to study the possible effects of growing Bt cotton on an ecosystem. Your answer should include:\n- a testable hypothesis\n- identification of the variables\n- a description of the method\n- a description of how to manipulate the variables.',
        ph: 'Hypothesis: Growing Bt cotton will reduce insect biodiversity compared to non-GM cotton. IV: type of cotton; DV: insect species diversity; CV: soil type, water, sunlight. Method: plant each type in separate plots; sample insects regularly; compare diversity. Safety: handle materials carefully.',
      },
      {
        label: 'b',
        marks: 13,
        text: 'Consider the wider use of genetically modified organisms (GMOs) either using examples from your MYP studies or from earlier questions. **Discuss** and **evaluate** two different implications of how the use of GMOs could impact an ecosystem. In your extended piece of writing you should support your answer with scientific evidence and explanations considering:\n- what is meant by the term ecosystem\n- the advantages and disadvantages of GMOs\n- the consequences we should consider before introducing GMOs from both an ethical and an economic perspective.',
        ph: 'Define ecosystem. Advantage: pest resistance, higher yield. Disadvantage: GM genes spreading, harm to non-target species, reduced biodiversity. Ethical: manipulation of organisms. Economic: cost vs benefit. Concluding appraisal.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Vaccines & Immunity (7 marks, Criterion A)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Vaccines & Immunity',
    topicCanonical: 'Vaccination',
    topicGroup: 'Cells',
    topicsAlso: ['Pathogens & Parasites'],
    marks: 7,
    stem: 'Advances in human capability mean that vaccines are now available to treat diseases that once killed millions of people every year. The Global Vaccine Action Plan is a framework designed to increase equal access to vaccines for people in all communities.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 760 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="760" height="260" fill="#ffffff"/><text x="380" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How a vaccine triggers immunity</text>'
          // Step 1: vaccine = weakened pathogen with antigens
          + '<circle cx="90" cy="120" r="34" fill="#fdecec" stroke="#c2255c" stroke-width="2"/>'
          + '<g stroke="#c2255c" stroke-width="3">'
          + '<line x1="90" y1="86" x2="90" y2="72"/><line x1="124" y1="120" x2="138" y2="120"/><line x1="90" y1="154" x2="90" y2="168"/><line x1="56" y1="120" x2="42" y2="120"/><line x1="114" y1="96" x2="124" y2="86"/><line x1="66" y1="96" x2="56" y2="86"/></g>'
          + '<text x="90" y="124" font-size="9" text-anchor="middle" fill="#c2255c">antigens</text>'
          + '<text x="90" y="205" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">1 · Vaccine</text>'
          + '<text x="90" y="220" font-size="9" text-anchor="middle" fill="#475569">weakened/killed</text><text x="90" y="232" font-size="9" text-anchor="middle" fill="#475569">pathogen + antigens</text>'
          + '<path d="M132 120 h44" stroke="#94a3ad" stroke-width="2" marker-end="url(#ar)"/>'
          // Step 2: B-lymphocyte recognises antigen
          + '<circle cx="250" cy="120" r="34" fill="#e7f0fb" stroke="#1971c2" stroke-width="2"/><circle cx="250" cy="120" r="13" fill="#1971c2"/>'
          + '<text x="250" y="205" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">2 · B-lymphocyte</text>'
          + '<text x="250" y="220" font-size="9" text-anchor="middle" fill="#475569">recognises the antigen</text>'
          + '<path d="M292 120 h44" stroke="#94a3ad" stroke-width="2" marker-end="url(#ar)"/>'
          // Step 3: antibodies produced
          + '<g stroke="#2f9e44" stroke-width="3" fill="none">'
          + '<path d="M396 96 l10 12 l-10 12"/><path d="M430 96 l-10 12 l10 12"/><path d="M396 132 l10 12 l-10 12"/><path d="M430 132 l-10 12 l10 12"/></g>'
          + '<text x="413" y="124" font-size="9" text-anchor="middle" fill="#2f9e44">antibodies (Y)</text>'
          + '<text x="413" y="205" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">3 · Antibodies</text>'
          + '<text x="413" y="220" font-size="9" text-anchor="middle" fill="#475569">bind &amp; neutralise</text><text x="413" y="232" font-size="9" text-anchor="middle" fill="#475569">the antigens</text>'
          + '<path d="M456 120 h44" stroke="#94a3ad" stroke-width="2" marker-end="url(#ar)"/>'
          // Step 4: memory cells
          + '<circle cx="560" cy="120" r="30" fill="#f3edf8" stroke="#9c36b5" stroke-width="2"/><circle cx="548" cy="116" r="7" fill="#9c36b5"/><circle cx="572" cy="124" r="7" fill="#9c36b5"/>'
          + '<text x="560" y="205" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">4 · Memory cells</text>'
          + '<text x="560" y="220" font-size="9" text-anchor="middle" fill="#475569">stay in the body</text>'
          + '<path d="M594 120 h44" stroke="#94a3ad" stroke-width="2" marker-end="url(#ar)"/>'
          // Step 5: fast response on re-infection
          + '<circle cx="700" cy="120" r="30" fill="#fff7e6" stroke="#f08c00" stroke-width="2"/><text x="700" y="116" font-size="11" font-weight="700" text-anchor="middle" fill="#f08c00">FAST</text><text x="700" y="130" font-size="9" text-anchor="middle" fill="#f08c00">response</text>'
          + '<text x="700" y="205" font-size="10" font-weight="600" text-anchor="middle" fill="#1f2d3a">5 · Immunity</text>'
          + '<text x="700" y="220" font-size="9" text-anchor="middle" fill="#475569">if pathogen returns</text>'
          + '<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#94a3ad"/></marker></defs>'
          + '</svg>',
      },
      caption: 'A vaccine carries antigens that B-lymphocytes recognise, triggering antibody production and lasting memory cells — so the body responds quickly if the real pathogen attacks.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *vaccine*.',
        marks: 2,
        ph: 'A preparation containing killed/weakened pathogens administered to stimulate specific antibody production / immune response.',
      },
      {
        label: 'b',
        text: '**Describe** how vaccines protect organisms against infectious diseases caused by pathogens.',
        marks: 5,
        ph: 'Pathogens have antigens; vaccine administered; body produces antibodies via B lymphocytes; antibodies bind antigens to neutralize; memory cells formed for lasting immunity.',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — GM Bananas as Edible Vaccines (21 marks, Criterion A/D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'GM Bananas as Edible Vaccines',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Vaccination', 'Ethical Implications'],
    marks: 21,
    stem: 'Scientists have been testing several crops to use them as edible vaccines against tropical water-related diseases such as hepatitis, cholera, malaria and polio. The banana is a suitable fruit for this purpose.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Feature', 'GM banana (edible vaccine)', 'Traditional injected vaccine'],
        rows: [
          ['Cost per dose', 'low — grown locally', 'higher — manufactured & shipped'],
          ['Needs refrigeration (cold chain)', 'no', 'yes'],
          ['Needles / trained staff required', 'no', 'yes'],
          ['Dosage control / accuracy', 'harder to control', 'precise'],
          ['Risk of cross-pollination with wild plants', 'yes', 'none'],
          ['Suitability for remote tropical areas', 'high', 'lower'],
        ],
      },
      caption: 'Comparison of GM-banana edible vaccines with traditional injected vaccines. Use these features when identifying variables and when evaluating advantages and disadvantages.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A scientist would like to test if edible vaccines are as effective as traditional vaccines. **Identify** the dependent, independent and control variables in this study. For each one, justify your choice.',
        marks: 6,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: ['Type of vaccine (GM banana vs traditional)', 'Immune response / antibody level', 'Age of participants', 'Health status of participants', 'Dosage amount', 'Type of disease tested against'],
        ph: 'IV: type of vaccine (what is changed). DV: immune response/antibody level (what is measured). CV: age, health status, dosage.',
      },
      {
        label: 'b',
        marks: 15,
        text: '**Discuss** and **evaluate** how using GM bananas as edible vaccines in tropical developing countries improves access to vaccines for protection against diseases. In this extended piece of writing you should consider:\n- advantages and disadvantages of using GM bananas compared to traditional vaccines\n- the consequences for a community as a result of an improved immune system\n- wider effects on the ecosystem\n- ethical issues related to vaccination.',
        ph: 'Advantages: cheap, no refrigeration, no needles, accessible. Disadvantages: dosage control, GM concerns. Community: reduced disease burden. Ecosystem: less pharmaceutical waste. Ethical: consent, GM food concerns. Appraisal.',
      },
    ],
  },
]
