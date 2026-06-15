import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2020 · VARIANT 2  (isomorphic to biology-nov-2020)
// Same crit / command term / marks / widget structure / tags as the source —
// only the species, ecosystem, scenario, data values and artefacts change.
// All figures are self-contained data-driven artefacts (no figImages).
// v2 differs from BOTH the source AND variant 1.
//   Q1 Ecosystems & Evolution:  generic biome → MARINE (phytoplankton/krill/herring/seal)
//   Q2 Homeostasis & transport: kidney dialysis → PLANT LEAF gas exchange / transport
//   Q3 Crit B inquiry design:   Daphnia + sugar → BLACKWORM (Lumbriculus) + caffeine
//   Q4 Crit C data analysis:    Daphnia temp/heart → BLACKWORM temp/pulsation rate
//   Q5 Crit B design:           caffeine → GLUCOSE energy gel & heart rate
//   Q6 Crit C data analysis:    energy drink JHIVD → energy gel VOLTREK
//   Q7 Carbon cycle & impact:   generic carbon cycle → carbon cycle (wetland/peatland framing)
//   Q8 Crit D essay:            climate solutions → OCEAN / blue-carbon solutions
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2020-v2',
  subject: 'Biology',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 — Ecosystems & Evolution (11 marks, Crit A) ──────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Ecosystems & Evolution',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Natural Selection'],
    marks: 11,
    stem: 'A biome contains plants and animals living in a major habitat. A biome can be made up of multiple ecosystems. The open ocean is one example of a biome.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Some organisms living in the open ocean',
        nodes: [
          { id: 'phyto', label: 'Phytoplankton', color: '#2f9e44', detail: 'Producer — microscopic algae that make food by photosynthesis.' },
          { id: 'krill', label: 'Krill', color: '#94d82d', detail: 'Primary consumer — small crustaceans that feed on phytoplankton.' },
          { id: 'herring', label: 'Herring', color: '#0b7285', detail: 'Secondary consumer — a fish that eats krill.' },
          { id: 'seal', label: 'Seal', color: '#e8590c', detail: 'Top predator — eats the herring.' },
        ],
        edges: [],
      },
      caption: 'Four organisms found in an open-ocean ecosystem (not yet in feeding order).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The images above show different organisms in a marine biome.\n\n**Organize** the organisms to create a food chain by dragging them into the correct order.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Phytoplankton', 'Herring', 'Seal', 'Krill'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
        ph: 'Phytoplankton → Krill → Herring → Seal.',
      },
      {
        label: 'b',
        text: 'The descriptions below show three different interactions between organisms.\n\n**Select** the type of interaction shown in each case.',
        marks: 3,
        widget: 'inline_dropdown_select',
        widgetItems: ['Two barnacles growing on the same rock', 'Orca and seal', 'Sea louse and salmon'],
        widgetOptions: ['Transpiration', 'Predation', 'Parasitism', 'Respiration', 'Competition'],
        ph: 'Two barnacles = Competition; Orca and seal = Predation; Sea louse and salmon = Parasitism.',
      },
      {
        label: 'c',
        text: '**State** the meaning of the term *ecosystem*.',
        marks: 2,
        ph: 'Community of living organisms interacting with each other and their non-living environment.',
      },
      {
        label: 'd',
        text: 'Using scientific terminology, **explain** the process of natural selection.',
        marks: 4,
        ph: 'Variation exists; selective pressure; better-adapted individuals survive and reproduce; pass on advantageous traits; population changes over generations.',
      },
    ],
  },

  // ── Q2 — Homeostasis & Plant Leaf Transport (11 marks, Crit A) ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis & Gas Exchange in Plants',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 11,
    stem: 'Plants depend on transport processes to maintain homeostasis. A leaf must take in carbon dioxide for photosynthesis and lose water vapour through tiny pores called stomata on the underside of the leaf. Gases and water move into and out of the leaf cells across their cell membranes. The constant movement of air around the leaf affects how quickly this exchange happens.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="leaf2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b2f2bb"/><stop offset="1" stop-color="#69db7c"/></linearGradient><marker id="ahg2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker><marker id="ahw2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1971c2"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Gas exchange at a leaf stoma</text><rect x="80" y="70" width="440" height="120" rx="10" fill="url(#leaf2)" stroke="#2f9e44" stroke-width="2"/><text x="300" y="135" font-size="13" text-anchor="middle" fill="#2b8a3e">leaf — air spaces inside (photosynthesising cells)</text><path d="M250,190 q12,28 24,0" fill="#74c69d" stroke="#2b8a3e" stroke-width="2"/><path d="M326,190 q12,28 24,0" fill="#74c69d" stroke="#2b8a3e" stroke-width="2"/><text x="300" y="232" font-size="11" text-anchor="middle" fill="#2b8a3e">guard cells (stoma open)</text><line x1="300" y1="68" x2="300" y2="135" stroke="#2f9e44" stroke-width="2.5" marker-end="url(#ahg2)"/><text x="312" y="60" font-size="11" fill="#2b8a3e">CO₂ in</text><line x1="265" y1="245" x2="245" y2="295" stroke="#1971c2" stroke-width="2.5" marker-end="url(#ahw2)"/><text x="200" y="295" font-size="11" fill="#1864ab">water vapour out</text><line x1="345" y1="245" x2="365" y2="295" stroke="#1971c2" stroke-width="2.5" marker-end="url(#ahw2)"/><g stroke="#adb5bd" stroke-width="1.5"><line x1="430" y1="60" x2="470" y2="60"/><line x1="445" y1="50" x2="485" y2="50"/></g><text x="470" y="44" font-size="11" fill="#868e96">moving air</text></svg>',
      },
      caption: 'CO₂ diffuses into the leaf and water vapour diffuses out through the open stoma.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the meaning of the term *homeostasis*.',
        marks: 1,
        ph: 'Maintenance of a stable internal environment in the body.',
      },
      {
        label: 'b',
        text: 'Gas exchange and water loss at the leaf depend on diffusion and osmosis. **State** the part of the cell that regulates these processes.',
        marks: 1,
        ph: 'Cell membrane (plasma membrane).',
      },
      {
        label: 'c',
        text: '**Explain** the processes of diffusion and osmosis.',
        marks: 3,
        ph: 'Diffusion: movement of molecules from high to low concentration (passive). Osmosis: movement of water through a semi-permeable membrane from low to high solute concentration.',
      },
      {
        label: 'd',
        text: 'Air moving across the leaf continuously carries away the water vapour just outside the stomata. **Suggest** a reason for the moving air carrying away the water vapour and **predict** what would happen to gas exchange if the air around the leaf was completely still.',
        marks: 4,
        ph: 'Reason: to maintain the concentration gradient so water vapour and gases continue to diffuse out/in. Prediction: water vapour would build up just outside the stomata; the gradient would be reduced; diffusion would slow; gas exchange and transpiration would decrease.',
      },
      {
        label: 'e',
        text: 'A leaf has very many tiny stomata rather than one large pore. **Justify** why many tiny stomata are used.',
        marks: 2,
        ph: 'Many tiny stomata spread over the leaf increase the total surface area for exchange; greater surface area → faster rate of diffusion → more efficient gas exchange.',
      },
    ],
  },

  // ── Q3 — Blackworm Investigation Design (13 marks, Crit B) ───────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Blackworm Pulsation Rate Investigation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    marks: 13,
    stem: 'Blackworms (Lumbriculus) are small worms that live in fresh water. Blackworms are useful for investigations into circulation because they are almost transparent, so you can see the wave of contraction (pulsation) moving along their main blood vessel. Some of the information collected from studying blackworms can model how certain factors might influence human heart rate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f3b6c9"/><stop offset="1" stop-color="#d6336c"/></linearGradient></defs><rect width="560" height="200" fill="#ffffff"/><text x="280" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Blackworm (Lumbriculus) under a microscope</text><path d="M40,120 Q140,80 240,120 Q340,160 440,120 Q480,104 520,120" fill="none" stroke="url(#bw)" stroke-width="22" stroke-linecap="round"/><line x1="40" y1="120" x2="520" y2="120" stroke="#a61e4d" stroke-width="2" stroke-dasharray="6 6"/><text x="280" y="150" font-size="11" text-anchor="middle" fill="#a61e4d">dorsal blood vessel — pulses can be counted along its length</text><circle cx="160" cy="103" r="6" fill="#c0392b"/><circle cx="320" cy="138" r="6" fill="#c0392b"/><text x="160" y="86" font-size="11" text-anchor="middle" fill="#c0392b">pulse</text><text x="280" y="180" font-size="11" text-anchor="middle" fill="#5b6b78">Transparent body — the pulsing blood vessel can be counted directly.</text></svg>',
      },
      caption: 'A transparent blackworm; the pulsing dorsal blood vessel is visible and can be counted under the microscope.',
    },
    tasks: [
      {
        label: 'a',
        text: '**List** two characteristics of living organisms.',
        marks: 2,
        ph: 'Any two of: movement, respiration, sensitivity, growth, reproduction, excretion, nutrition (MRSGREN).',
      },
      {
        label: 'b',
        text: '*Egeria* is a water plant found in the same ponds as the blackworm. **Identify** one feature of *Egeria* cells that would make them different from cells found in blackworms.',
        marks: 1,
        ph: 'Cell wall / chloroplasts / large central vacuole (any one plant-cell-specific feature).',
      },
      {
        label: 'c',
        text: 'Caffeine can affect heart rate in animals. **Suggest** a hypothesis for what would happen to the pulsation rate of a blackworm if it were placed in water with different amounts of caffeine. Your answer should include a scientific explanation.',
        marks: 2,
        ph: 'If caffeine concentration increases, blackworm pulsation rate will increase, because caffeine is a stimulant that speeds up nerve and muscle activity, raising the metabolic rate and pulsation rate.',
      },
      {
        label: 'd',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Caffeine concentration of water',
          'Pulsation rate of blackworm (bpm)',
          'Temperature of water',
          'Type/size of blackworm used',
          'Volume of solution',
          'Time period of observation',
        ],
        ph: 'IV: caffeine concentration. DV: pulsation rate. CV: temperature, type/size of blackworm, volume of solution.',
      },
      {
        label: 'e',
        text: '**State** how many different amounts of caffeine should be given to the blackworm to study changes in pulsation rate and **justify** your answer.',
        marks: 2,
        ph: 'At least 4–5 different concentrations; to identify a trend/pattern and determine if there is a dose–response relationship.',
      },
      {
        label: 'f',
        text: '**State** how many trials should be repeated for each amount of caffeine and **justify** your answer.',
        marks: 2,
        ph: 'At least 3 trials per concentration; repetition increases reliability; allows calculation of a mean and identification of anomalous results.',
      },
    ],
  },

  // ── Q4 — Temperature & Blackworm Pulsation Rate Data (16 marks, Crit C) ───
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Temperature & Pulsation Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 16,
    stem: 'A student planned the method below to study the effect of temperature on pulsation rate. Students counted the pulses of a blackworm for 20 seconds at different temperatures.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Pulses counted in 20 s', 'Pulsation rate / bpm'],
        rows: [['10', '36', ''], ['20', '44', ''], ['30', '52', '']],
      },
      caption: 'Raw pulse counts for a blackworm at three temperatures (pulsation-rate column to be completed in part a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Students counted the pulses of a blackworm for 20 seconds. **Calculate** the blackworm\'s pulsation rate in beats per minute (bpm). Show your working and add your answers to the table.',
        marks: 3,
        ph: 'Multiply pulses in 20 s by 3 to convert to bpm. Show calculation clearly for each temperature.',
      },
      {
        label: 'b',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Weakness 1: only one blackworm used per temperature → not representative; should use multiple individuals. Weakness 2: only 20 seconds of counting → may introduce error; count for a longer period.',
      },
      {
        label: 'c',
        text: '**Suggest** a different independent variable that could be used to extend this investigation.',
        marks: 1,
        ph: 'Caffeine/sugar/salt concentration; light intensity; pH of water; dissolved oxygen level.',
      },
      {
        label: 'd',
        text: 'At the start of the investigation, the student predicted that the blackworm\'s pulsation rate would increase as temperature increased. **Discuss** this prediction using scientific reasoning.',
        marks: 2,
        ph: 'Higher temperature increases enzyme activity and metabolic rate; more oxygen needed → pulses faster. Valid prediction up to an optimum temperature; above optimum enzymes may denature.',
      },
      {
        label: 'e',
        text: 'Based on the data presented in the table in part (a), **outline** whether or not the prediction was valid. Consider the method and the reliability of the data.',
        marks: 2,
        ph: 'Data supports prediction: pulsation rate increases with temperature. However, only 3 temperatures measured; no replication at each temperature → limited reliability.',
      },
      {
        label: 'f',
        text: 'The students were working with a school in another part of the world and wanted to compare this data to their own results. The graph of the data is incomplete — **label** the x and y axes.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Temperature',
            yLabel: 'Pulsation rate',
            xUnit: '°C',
            yUnit: 'bpm',
            dataPoints: [{ x: 10, y: 108 }, { x: 20, y: 132 }, { x: 30, y: 156 }],
            lobf: true,
            xMin: 0, xMax: 40, yMin: 0, yMax: 200, xStep: 10, yStep: 40,
          },
          caption: 'Blackworm pulsation rate against temperature (axes to be labelled).',
        },
        ph: 'x-axis: Temperature / °C; y-axis: Pulsation rate / bpm.',
      },
      {
        label: 'g',
        text: 'The table of transformed data is incomplete. Use information from the graph to **determine** the missing values and add them to the transformed data table.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Pulsation rate / bpm'],
            rows: [['10', ''], ['20', ''], ['30', '156']],
          },
          caption: 'Transformed data table (read the missing values at 10 °C and 20 °C from the graph).',
        },
        ph: 'Read values from graph at 10 °C (108 bpm) and 20 °C (132 bpm); record to appropriate precision.',
      },
    ],
  },

  // ── Q5 — Energy Gel Investigation Design (17 marks, Crit B) ───────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Glucose & Heart Rate Investigation Design',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 17,
    stem: 'Energy gels contain dissolved glucose (sugar), which athletes use for a quick supply of energy during exercise. The health and fitness club in a school wants to collect some scientific evidence about whether glucose energy gels affect heart rate. They want to collect some scientific evidence to support their argument. You are provided with a range of solutions of different glucose concentrations (0–0.5 g/dm³) to model the effect of energy gels.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="gl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe8a3"/><stop offset="1" stop-color="#f08c00"/></linearGradient></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Glucose solutions of increasing concentration</text><g><rect x="40" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="42" y="150" width="46" height="28" fill="url(#gl)"/><text x="65" y="198" font-size="11" text-anchor="middle" fill="#b8860b">0.1</text></g><g><rect x="140" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="142" y="128" width="46" height="50" fill="url(#gl)"/><text x="165" y="198" font-size="11" text-anchor="middle" fill="#b8860b">0.2</text></g><g><rect x="240" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="242" y="108" width="46" height="70" fill="url(#gl)"/><text x="265" y="198" font-size="11" text-anchor="middle" fill="#b8860b">0.3</text></g><g><rect x="340" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="342" y="92" width="46" height="86" fill="url(#gl)"/><text x="365" y="198" font-size="11" text-anchor="middle" fill="#b8860b">0.4</text></g><g><rect x="440" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="442" y="78" width="46" height="100" fill="url(#gl)"/><text x="465" y="198" font-size="11" text-anchor="middle" fill="#b8860b">0.5</text></g><text x="280" y="58" font-size="11" text-anchor="middle" fill="#5b6b78">glucose concentration / g dm⁻³</text></svg>',
      },
      caption: 'A range of glucose solutions (0–0.5 g dm⁻³) provided to model energy gels.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the influence of glucose (sugar) concentration on human heart rate. Your answer should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- ethical considerations.',
        marks: 17,
        ph: 'Hypothesis: If glucose concentration increases, heart rate increases. IV: glucose concentration. DV: heart rate (bpm). CV: age/health of participants, time of measurement. Method: measure resting heart rate; consume glucose solution; measure heart rate at intervals. Ethics: informed consent; exclude participants with diabetes/heart conditions.',
      },
    ],
  },

  // ── Q6 — Energy Gel Data Analysis (7 marks, Crit C) ──────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Glucose & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 7,
    stem: 'After conducting their investigation, a student did some further research into commercial energy gels. They studied the energy gel VOLTREK, which contains 40 mg of glucose per 100 cm³.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="230" fill="#ffffff"/><rect x="20" y="20" width="420" height="190" rx="8" fill="#fff7e6" stroke="#f08c00"/><text x="230" y="46" font-size="15" font-weight="700" text-anchor="middle" fill="#b8860b">VOLTREK — Nutritional information (per 100 cm³)</text><line x1="40" y1="60" x2="420" y2="60" stroke="#ffe3a3"/><g font-size="13" fill="#1f2d3a"><text x="50" y="86">Glucose (sugar)</text><text x="410" y="86" text-anchor="end">40 mg</text><text x="50" y="116">Sodium</text><text x="410" y="116" text-anchor="end">22 mg</text><text x="50" y="146">Caffeine</text><text x="410" y="146" text-anchor="end">30 mg</text><text x="50" y="176">Taurine</text><text x="410" y="176" text-anchor="end">25 mg</text><text x="50" y="200" font-size="11" fill="#5b6b78">Other: vitamin B12, citric acid (flavour)</text></g></svg>',
      },
      caption: 'Nutritional information panel for the energy gel VOLTREK.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows how glucose concentration affects heart rate. **Add** a line of best fit to the graph and use this to **predict** the heart rate after consuming 100 cm³ of VOLTREK.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Glucose concentration',
            yLabel: 'Heart rate',
            xUnit: 'mg / 100 cm³',
            yUnit: 'bpm',
            dataPoints: [{ x: 10, y: 72 }, { x: 25, y: 76 }, { x: 40, y: 80 }, { x: 70, y: 88 }, { x: 90, y: 93 }],
            xMin: 0, xMax: 100, yMin: 60, yMax: 120, xStep: 20, yStep: 10,
          },
          caption: 'Heart rate against glucose concentration (add a line of best fit and read off at 40 mg/100 cm³).',
        },
        ph: 'Line of best fit drawn through scatter points. At 40 mg/100 cm³ glucose → read off predicted heart rate (approximately 80 bpm).',
      },
      {
        label: 'b',
        text: 'The student wanted to test their prediction from part (a). After consuming VOLTREK, they measured a heart rate of 98 bpm. **Calculate** the percentage increase between the predicted heart rate and the measured value. Give your answer to three significant figures.',
        marks: 3,
        ph: '% increase = (98 − predicted) / predicted × 100. Show working. Answer to 3 s.f.',
      },
      {
        label: 'c',
        text: 'Using nutritional information from above, **suggest** why the actual heart rate was different from the predicted value.',
        marks: 2,
        ph: 'VOLTREK contains other stimulants (e.g. caffeine, taurine) in addition to glucose; combined effect is greater than glucose alone; the graph only modelled glucose concentration.',
      },
    ],
  },

  // ── Q7 — Carbon Cycle & Climate Change (8 marks, Crit A/D) ───────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon Cycle & Human Impact',
    topicCanonical: 'Nutrient/Carbon/Nitrogen Cycles',
    topicGroup: 'Organisms',
    topicsAlso: ['Human Influences'],
    marks: 8,
    stem: 'Humans have been interacting with and changing their environment for thousands of years. We have changed our environment to suit our needs, but these changes are causing the environment to respond in ways we have yet to fully understand. The diagram shows how carbon moves through a wetland, where waterlogged peat soils store large amounts of carbon.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahc2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="360" fill="#ffffff"/><rect x="160" y="20" width="280" height="46" rx="10" fill="#dbeafe" stroke="#1971c2"/><text x="300" y="48" font-size="14" font-weight="700" text-anchor="middle" fill="#1864ab">CO₂ in the atmosphere</text><rect x="60" y="150" width="150" height="56" rx="10" fill="#d3f9d8" stroke="#2f9e44"/><text x="135" y="174" font-size="13" text-anchor="middle" fill="#2b8a3e">Wetland</text><text x="135" y="192" font-size="13" text-anchor="middle" fill="#2b8a3e">plants &amp; mosses</text><rect x="390" y="150" width="150" height="56" rx="10" fill="#ffe8cc" stroke="#e8590c"/><text x="465" y="174" font-size="13" text-anchor="middle" fill="#d9480f">Animals &amp;</text><text x="465" y="192" font-size="13" text-anchor="middle" fill="#d9480f">decomposers</text><rect x="210" y="290" width="180" height="46" rx="10" fill="#e8dcc0" stroke="#8a5a14"/><text x="300" y="318" font-size="13" text-anchor="middle" fill="#7a4f12">Carbon stored in peat soil</text><path d="M180,150 Q210,90 280,66" fill="none" stroke="#2f9e44" stroke-width="2.5" marker-end="url(#ahc2)"/><text x="170" y="118" font-size="11" fill="#2b8a3e">photosynthesis</text><path d="M430,150 Q400,100 360,68" fill="none" stroke="#e8590c" stroke-width="2.5" marker-end="url(#ahc2)"/><text x="430" y="118" font-size="11" fill="#d9480f">respiration</text><path d="M210,178 L388,178" fill="none" stroke="#5b6b78" stroke-width="2" marker-end="url(#ahc2)"/><text x="300" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">feeding</text><path d="M180,206 L260,288" fill="none" stroke="#8a5a14" stroke-width="2" marker-end="url(#ahc2)"/><text x="150" y="252" font-size="11" fill="#7a4f12">death / burial</text></svg>',
      },
      caption: 'The carbon cycle in a wetland: carbon moves between the atmosphere, living things and waterlogged peat soil.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the processes that add CO₂ to the atmosphere and remove CO₂ from the atmosphere by dragging each process into the correct column.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Respiration', 'Photosynthesis', 'Geotropism', 'Sedimentation', 'Transpiration'],
        widgetOptions: ['Adds CO₂ to atmosphere', 'Removes CO₂ from atmosphere'],
        ph: 'Adds CO₂: Respiration. Removes CO₂: Photosynthesis.',
      },
      {
        label: 'b',
        text: 'The amount of carbon in the world is unchanging. The carbon cycle shows the flow of carbon from one compound to another. There have been many changes to the carbon cycle in the last 150 years.\n\n**State** two human actions that have caused the imbalance in the carbon cycle and **outline** a consequence of each of these actions.',
        marks: 4,
        ph: 'Action 1: burning fossil fuels → releases CO₂ → increases atmospheric CO₂ → greenhouse effect. Action 2: draining wetlands/deforestation → stored carbon released / fewer plants to absorb CO₂ → CO₂ levels rise → global warming.',
      },
      {
        label: 'c',
        text: 'One of the consequences of increased carbon in the atmosphere is an increase in the temperature of the Earth\'s surface. **Outline** a biological consequence of an increase in the temperature of the Earth\'s surface.',
        marks: 2,
        ph: 'Coral bleaching due to ocean warming; species migration or extinction; disruption of seasonal timing (phenology); increased spread of disease vectors.',
      },
    ],
  },

  // ── Q8 — Climate Change Solutions (17 marks, Crit D) ─────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Climate Change Solutions',
    topicCanonical: 'Mitigation of Adverse Effects',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Human Influences'],
    marks: 17,
    stem: 'There have been many solutions suggested to reduce the cause of climate change. Four ocean-based solutions are described in the interactive infographic: Restoring mangroves and seagrass (blue carbon), Protecting and growing seaweed/kelp farms, Offshore wind farms, Protecting whale and fish populations that move carbon into the deep ocean.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="30" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four ocean-based solutions to reduce climate change</text><g><rect x="30" y="55" width="260" height="100" rx="10" fill="#d3f9d8" stroke="#2f9e44"/><text x="50" y="84" font-size="13" font-weight="700" fill="#2b8a3e">Mangroves &amp; seagrass</text><path d="M70,140 l0,-22 M70,118 q-10,-10 -16,-22 M70,118 q10,-10 16,-22 M70,128 q-8,-6 -14,-14 M70,128 q8,-6 14,-14" stroke="#2b8a3e" stroke-width="2" fill="none"/><rect x="40" y="140" width="240" height="8" fill="#a5d8ff"/></g><g><rect x="310" y="55" width="260" height="100" rx="10" fill="#e6fcf5" stroke="#0ca678"/><text x="330" y="84" font-size="13" font-weight="700" fill="#087f5b">Kelp / seaweed farms</text><path d="M360,148 q-8,-30 0,-60 q8,16 0,60 M400,148 q8,-30 0,-60 q-8,16 0,60 M440,148 q-8,-26 0,-52 q8,14 0,52" stroke="#087f5b" stroke-width="2.5" fill="none"/><rect x="320" y="148" width="240" height="6" fill="#a5d8ff"/></g><g><rect x="30" y="175" width="260" height="100" rx="10" fill="#e7f5ff" stroke="#1971c2"/><text x="50" y="204" font-size="13" font-weight="700" fill="#1864ab">Offshore wind</text><line x1="90" y1="265" x2="90" y2="225" stroke="#5b6b78" stroke-width="3"/><path d="M90,225 l0,-18 M90,225 l-15,9 M90,225 l15,9" stroke="#1971c2" stroke-width="3" fill="none"/><rect x="40" y="265" width="240" height="6" fill="#a5d8ff"/></g><g><rect x="310" y="175" width="260" height="100" rx="10" fill="#dbeafe" stroke="#3b5bdb"/><text x="330" y="204" font-size="13" font-weight="700" fill="#364fc7">Whale populations</text><path d="M360,245 q40,-26 90,-4 q-12,14 -30,12 q10,8 0,12 q-14,-2 -18,-10 q-24,4 -42,-10 Z" fill="#748ffc" stroke="#3b5bdb"/><circle cx="375" cy="240" r="3" fill="#1f2d3a"/><rect x="320" y="262" width="240" height="6" fill="#a5d8ff"/></g></svg>',
      },
      caption: 'Four ocean-based solutions to reduce the impact of climate change.',
    },
    tasks: [
      {
        label: '',
        text: 'Using information from the interactive infographic and your wider MYP studies, **discuss** and **evaluate** two possible solutions to reduce the impact of global climate change. In your answer you should include:\n- a description of two actions humans can take to reduce the impact of global climate change\n- an explanation of the science behind each human action\n- advantages of your two chosen climate change solutions\n- disadvantages of your two chosen climate change solutions\n- a concluding appraisal giving your opinion of the single best climate change solution with justification.',
        marks: 17,
        ph: 'Two solutions described with science; advantages and disadvantages for each; balanced appraisal with justified conclusion.',
      },
    ],
  },
]
