import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2020 · VARIANT 1  (isomorphic to biology-nov-2020)
// Same crit / command term / marks / widget structure / tags as the source —
// only the species, ecosystem, scenario, data values and artefacts change.
// All figures are self-contained data-driven artefacts (no figImages).
//   Q1 Ecosystems & Evolution:  generic biome → DESERT (cactus/locust/lizard/hawk)
//   Q2 Homeostasis & transport: kidney dialysis → FISH GILL gas exchange
//   Q3 Crit B inquiry design:   Daphnia + sugar → BRINE SHRIMP (Artemia) + salt
//   Q4 Crit C data analysis:    Daphnia temp/heart → BRINE SHRIMP temp/heart rate
//   Q5 Crit B design:           caffeine → ELECTROLYTE sports drink & heart rate
//   Q6 Crit C data analysis:    energy drink JHIVD → sports drink ZYQORA
//   Q7 Carbon cycle & impact:   generic carbon cycle → carbon cycle (forest/soil framing)
//   Q8 Crit D essay:            climate solutions → RENEWABLE-ENERGY solutions
// ════════════════════════════════════════════════════════════════════════════

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2020-v1',
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
    stem: 'A biome contains plants and animals living in a major habitat. A biome can be made up of multiple ecosystems. A hot desert is one example of a biome.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Some organisms living in a hot desert',
        nodes: [
          { id: 'cactus', label: 'Cactus', color: '#2f9e44', detail: 'Producer — a plant that makes its own food by photosynthesis.' },
          { id: 'locust', label: 'Locust', color: '#94d82d', detail: 'Primary consumer — a herbivore that eats the cactus.' },
          { id: 'lizard', label: 'Lizard', color: '#f08c00', detail: 'Secondary consumer — eats the locust.' },
          { id: 'hawk', label: 'Hawk', color: '#e8590c', detail: 'Top predator — eats the lizard.' },
        ],
        edges: [],
      },
      caption: 'Four organisms found in a hot-desert ecosystem (not yet in feeding order).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The images above show different organisms in a desert biome.\n\n**Organize** the organisms to create a food chain by dragging them into the correct order.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Cactus', 'Lizard', 'Hawk', 'Locust'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
        ph: 'Cactus → Locust → Lizard → Hawk.',
      },
      {
        label: 'b',
        text: 'The descriptions below show three different interactions between organisms.\n\n**Select** the type of interaction shown in each case.',
        marks: 3,
        widget: 'inline_dropdown_select',
        widgetItems: ['Two meerkats fighting over the same burrow', 'Cheetah and gazelle', 'Tick and buffalo'],
        widgetOptions: ['Transpiration', 'Predation', 'Parasitism', 'Respiration', 'Competition'],
        ph: 'Two meerkats = Competition; Cheetah and gazelle = Predation; Tick and buffalo = Parasitism.',
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

  // ── Q2 — Homeostasis & Fish Gill (11 marks, Crit A) ─────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis & Gas Exchange',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 11,
    stem: 'The bodies of fish depend on transport processes to maintain homeostasis. A fish must take in dissolved oxygen from the water and remove dissolved waste gases. This gas exchange happens at the gills. Water flows over the gills in the opposite direction to the blood flowing inside them, which keeps the exchange efficient.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="watg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#8ccbe4"/></linearGradient><marker id="ahw" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="ahb" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Gas exchange at a fish gill</text><rect x="60" y="60" width="480" height="70" rx="6" fill="url(#watg)" stroke="#3f7e98"/><text x="300" y="50" font-size="11" text-anchor="middle" fill="#2c5468">water flow (oxygen-rich)</text><line x1="520" y1="95" x2="90" y2="95" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ahw)"/><g stroke="#37b24d" stroke-width="6" stroke-linecap="round"><line x1="120" y1="135" x2="120" y2="215"/><line x1="180" y1="135" x2="180" y2="215"/><line x1="240" y1="135" x2="240" y2="215"/><line x1="300" y1="135" x2="300" y2="215"/><line x1="360" y1="135" x2="360" y2="215"/><line x1="420" y1="135" x2="420" y2="215"/><line x1="480" y1="135" x2="480" y2="215"/></g><text x="300" y="245" font-size="11" text-anchor="middle" fill="#2b8a3e">gill filaments (large surface area, thin walls)</text><rect x="60" y="255" width="480" height="40" rx="6" fill="#f6d2d2" stroke="#c0392b"/><line x1="90" y1="275" x2="520" y2="275" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ahb)"/><text x="300" y="312" font-size="11" text-anchor="middle" fill="#a8331f">blood flow inside gill (carries oxygen away)</text></svg>',
      },
      caption: 'Oxygen-rich water flows over the gill filaments in the opposite direction to the blood inside them.',
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
        text: 'Gas exchange at the gill depends on diffusion and osmosis. **State** the part of the cell that regulates these processes.',
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
        text: 'At the gill, fresh oxygen-rich water flows continuously over the gill filaments. **Suggest** a reason for the continuous flow of fresh water and **predict** what would happen if the water around the gills was not refreshed.',
        marks: 4,
        ph: 'Reason: to maintain the concentration gradient so oxygen continues to diffuse into the blood. Prediction: water would lose its oxygen / fill with waste gas; diffusion would slow or stop; fish would not get enough oxygen and could die.',
      },
      {
        label: 'e',
        text: 'Each gill is divided into many thin filaments rather than being one solid flap. **Justify** why many thin filaments are used.',
        marks: 2,
        ph: 'Many thin filaments increase the surface area; greater surface area → faster rate of diffusion → more efficient uptake of oxygen.',
      },
    ],
  },

  // ── Q3 — Brine Shrimp Investigation Design (13 marks, Crit B) ────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Brine Shrimp Heart Rate Investigation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    marks: 13,
    stem: 'Brine shrimp (Artemia) are small invertebrates that live in salty water. Brine shrimp are useful for investigations into heart rate because they are transparent, so you can see their heart beating under a microscope. Some of the information collected from studying brine shrimp can model how certain factors might influence human heart rate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="bs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ffe3bf"/><stop offset="1" stop-color="#f6b26b"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><text x="280" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Brine shrimp (Artemia) under a microscope</text><ellipse cx="200" cy="130" rx="120" ry="34" fill="url(#bs)" stroke="#b87333" stroke-width="2"/><circle cx="92" cy="124" r="6" fill="#3a2a18"/><circle cx="108" cy="124" r="6" fill="#3a2a18"/><g stroke="#b87333" stroke-width="2"><line x1="200" y1="160" x2="186" y2="196"/><line x1="220" y1="160" x2="208" y2="198"/><line x1="240" y1="160" x2="232" y2="196"/><line x1="180" y1="160" x2="160" y2="194"/><line x1="160" y1="158" x2="138" y2="190"/></g><path d="M318,130 q34,-22 60,0 q-34,18 -60,0 Z" fill="url(#bs)" stroke="#b87333"/><circle cx="150" cy="118" r="9" fill="#c0392b" stroke="#7a1f12"/><text x="150" y="96" font-size="11" text-anchor="middle" fill="#c0392b">heart (visible, beating)</text><line x1="150" y1="105" x2="150" y2="112" stroke="#c0392b" stroke-width="1.5"/><text x="280" y="225" font-size="11" text-anchor="middle" fill="#5b6b78">Transparent body — the beating heart can be counted directly.</text></svg>',
      },
      caption: 'A transparent brine shrimp; the beating heart is visible and can be counted under the microscope.',
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
        text: '*Chara* (stonewort) is a plant found in the same salty pools as the brine shrimp. **Identify** one feature of *Chara* cells that would make them different from cells found in brine shrimp.',
        marks: 1,
        ph: 'Cell wall / chloroplasts / large central vacuole (any one plant-cell-specific feature).',
      },
      {
        label: 'c',
        text: 'Salt concentration can affect heart rate in animals. **Suggest** a hypothesis for what would happen to the heart rate of a brine shrimp if it were placed in water with different amounts of salt. Your answer should include a scientific explanation.',
        marks: 2,
        ph: 'If salt concentration increases, brine shrimp heart rate will change (e.g. increase), because the shrimp must work harder to regulate the water and ions in its body (osmoregulation), raising metabolic activity and heart rate.',
      },
      {
        label: 'd',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Salt concentration of water',
          'Heart rate of brine shrimp (bpm)',
          'Temperature of water',
          'Type/size of brine shrimp used',
          'Volume of solution',
          'Time period of observation',
        ],
        ph: 'IV: salt concentration. DV: heart rate. CV: temperature, type/size of brine shrimp, volume of solution.',
      },
      {
        label: 'e',
        text: '**State** how many different amounts of salt should be given to the brine shrimp to study changes in heart rate and **justify** your answer.',
        marks: 2,
        ph: 'At least 4–5 different concentrations; to identify a trend/pattern and determine if there is a dose–response relationship.',
      },
      {
        label: 'f',
        text: '**State** how many trials should be repeated for each amount of salt and **justify** your answer.',
        marks: 2,
        ph: 'At least 3 trials per concentration; repetition increases reliability; allows calculation of a mean and identification of anomalous results.',
      },
    ],
  },

  // ── Q4 — Temperature & Brine Shrimp Heart Rate Data (16 marks, Crit C) ────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Temperature & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 16,
    stem: 'A student planned the method below to study the effect of temperature on heart rate. Students counted the heartbeats of a brine shrimp for 20 seconds at different temperatures.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Heartbeats counted in 20 s', 'Heart rate / bpm'],
        rows: [['10', '38', ''], ['20', '46', ''], ['30', '54', '']],
      },
      caption: 'Raw heartbeat counts for a brine shrimp at three temperatures (heart-rate column to be completed in part a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Students counted the heartbeats of a brine shrimp for 20 seconds. **Calculate** the brine shrimp\'s heart rate in beats per minute (bpm). Show your working and add your answers to the table.',
        marks: 3,
        ph: 'Multiply heartbeats in 20 s by 3 to convert to bpm. Show calculation clearly for each temperature.',
      },
      {
        label: 'b',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Weakness 1: only one brine shrimp used per temperature → not representative; should use multiple individuals. Weakness 2: only 20 seconds of counting → may introduce error; count for a longer period.',
      },
      {
        label: 'c',
        text: '**Suggest** a different independent variable that could be used to extend this investigation.',
        marks: 1,
        ph: 'Salt/caffeine/sugar concentration; light intensity; pH of water; dissolved oxygen level.',
      },
      {
        label: 'd',
        text: 'At the start of the investigation, the student predicted that the brine shrimp\'s heart rate would increase as temperature increased. **Discuss** this prediction using scientific reasoning.',
        marks: 2,
        ph: 'Higher temperature increases enzyme activity and metabolic rate; more oxygen needed → heart beats faster. Valid prediction up to an optimum temperature; above optimum enzymes may denature.',
      },
      {
        label: 'e',
        text: 'Based on the data presented in the table in part (a), **outline** whether or not the prediction was valid. Consider the method and the reliability of the data.',
        marks: 2,
        ph: 'Data supports prediction: heart rate increases with temperature. However, only 3 temperatures measured; no replication at each temperature → limited reliability.',
      },
      {
        label: 'f',
        text: 'The students were working with a school in another part of the world and wanted to compare this data to their own results. The graph of the data is incomplete — **label** the x and y axes.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Temperature',
            yLabel: 'Heart rate',
            xUnit: '°C',
            yUnit: 'bpm',
            dataPoints: [{ x: 10, y: 114 }, { x: 20, y: 138 }, { x: 30, y: 162 }],
            lobf: true,
            xMin: 0, xMax: 40, yMin: 0, yMax: 200, xStep: 10, yStep: 40,
          },
          caption: 'Brine shrimp heart rate against temperature (axes to be labelled).',
        },
        ph: 'x-axis: Temperature / °C; y-axis: Heart rate / bpm.',
      },
      {
        label: 'g',
        text: 'The table of transformed data is incomplete. Use information from the graph to **determine** the missing values and add them to the transformed data table.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Heart rate / bpm'],
            rows: [['10', ''], ['20', ''], ['30', '162']],
          },
          caption: 'Transformed data table (read the missing values at 10 °C and 20 °C from the graph).',
        },
        ph: 'Read values from graph at 10 °C (114 bpm) and 20 °C (138 bpm); record to appropriate precision.',
      },
    ],
  },

  // ── Q5 — Sports Drink Investigation Design (17 marks, Crit B) ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Electrolytes & Heart Rate Investigation Design',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 17,
    stem: 'Electrolyte sports drinks contain dissolved salts such as sodium and potassium, which the body loses in sweat. The health and fitness club in a school wants to collect some scientific evidence about whether electrolyte sports drinks affect heart rate during exercise. They want to collect some scientific evidence to support their argument. You are provided with a range of solutions of different electrolyte (salt) concentrations (0–0.5 g/dm³) to model the effect of sports drinks.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="dr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9be7c4"/><stop offset="1" stop-color="#37b24d"/></linearGradient></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Electrolyte solutions of increasing concentration</text><g><rect x="40" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="42" y="150" width="46" height="28" fill="url(#dr)"/><text x="65" y="198" font-size="11" text-anchor="middle" fill="#2b8a3e">0.1</text></g><g><rect x="140" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="142" y="128" width="46" height="50" fill="url(#dr)"/><text x="165" y="198" font-size="11" text-anchor="middle" fill="#2b8a3e">0.2</text></g><g><rect x="240" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="242" y="108" width="46" height="70" fill="url(#dr)"/><text x="265" y="198" font-size="11" text-anchor="middle" fill="#2b8a3e">0.3</text></g><g><rect x="340" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="342" y="92" width="46" height="86" fill="url(#dr)"/><text x="365" y="198" font-size="11" text-anchor="middle" fill="#2b8a3e">0.4</text></g><g><rect x="440" y="70" width="50" height="110" rx="5" fill="#eef3f6" stroke="#5b6b78"/><rect x="442" y="78" width="46" height="100" fill="url(#dr)"/><text x="465" y="198" font-size="11" text-anchor="middle" fill="#2b8a3e">0.5</text></g><text x="280" y="58" font-size="11" text-anchor="middle" fill="#5b6b78">electrolyte concentration / g dm⁻³</text></svg>',
      },
      caption: 'A range of electrolyte solutions (0–0.5 g dm⁻³) provided to model sports drinks.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the influence of electrolyte (salt) concentration on human heart rate. Your answer should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- ethical considerations.',
        marks: 17,
        ph: 'Hypothesis: If electrolyte concentration increases, heart rate increases. IV: electrolyte concentration. DV: heart rate (bpm). CV: age/health of participants, time of measurement. Method: measure resting heart rate; consume electrolyte solution; measure heart rate at intervals. Ethics: informed consent; exclude participants with heart conditions.',
      },
    ],
  },

  // ── Q6 — Sports Drink Data Analysis (7 marks, Crit C) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Electrolytes & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 7,
    stem: 'After conducting their investigation, a student did some further research into commercial sports drinks. They studied the sports drink ZYQORA, which contains 60 mg of sodium per 100 cm³.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="230" fill="#ffffff"/><rect x="20" y="20" width="420" height="190" rx="8" fill="#f4fbf6" stroke="#37b24d"/><text x="230" y="46" font-size="15" font-weight="700" text-anchor="middle" fill="#2b8a3e">ZYQORA — Nutritional information (per 100 cm³)</text><line x1="40" y1="60" x2="420" y2="60" stroke="#b2dfbf"/><g font-size="13" fill="#1f2d3a"><text x="50" y="86">Sodium</text><text x="410" y="86" text-anchor="end">60 mg</text><text x="50" y="116">Potassium</text><text x="410" y="116" text-anchor="end">18 mg</text><text x="50" y="146">Sugar (glucose)</text><text x="410" y="146" text-anchor="end">6 g</text><text x="50" y="176">Caffeine</text><text x="410" y="176" text-anchor="end">0 mg</text><text x="50" y="200" font-size="11" fill="#5b6b78">Other: vitamin C, citric acid (flavour)</text></g></svg>',
      },
      caption: 'Nutritional information panel for the sports drink ZYQORA.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows how electrolyte (sodium) concentration affects heart rate. **Add** a line of best fit to the graph and use this to **predict** the heart rate after drinking 100 cm³ of ZYQORA.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            xLabel: 'Sodium concentration',
            yLabel: 'Heart rate',
            xUnit: 'mg / 100 cm³',
            yUnit: 'bpm',
            dataPoints: [{ x: 10, y: 74 }, { x: 25, y: 79 }, { x: 40, y: 83 }, { x: 70, y: 92 }, { x: 90, y: 97 }],
            xMin: 0, xMax: 100, yMin: 60, yMax: 120, xStep: 20, yStep: 10,
          },
          caption: 'Heart rate against sodium concentration (add a line of best fit and read off at 60 mg/100 cm³).',
        },
        ph: 'Line of best fit drawn through scatter points. At 60 mg/100 cm³ sodium → read off predicted heart rate (approximately 88–90 bpm).',
      },
      {
        label: 'b',
        text: 'The student wanted to test their prediction from part (a). After drinking ZYQORA, they measured a heart rate of 105 bpm. **Calculate** the percentage increase between the predicted heart rate and the measured value. Give your answer to three significant figures.',
        marks: 3,
        ph: '% increase = (105 − predicted) / predicted × 100. Show working. Answer to 3 s.f.',
      },
      {
        label: 'c',
        text: 'Using nutritional information from above, **suggest** why the actual heart rate was different from the predicted value.',
        marks: 2,
        ph: 'ZYQORA contains other ingredients (e.g. glucose/sugar, potassium) in addition to sodium; combined effect is greater than sodium alone; the graph only modelled sodium concentration.',
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
    stem: 'Humans have been interacting with and changing their environment for thousands of years. We have changed our environment to suit our needs, but these changes are causing the environment to respond in ways we have yet to fully understand. The diagram shows the natural processes that move carbon between the atmosphere, living things and the soil.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahc" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="360" fill="#ffffff"/><rect x="160" y="20" width="280" height="46" rx="10" fill="#dbeafe" stroke="#1971c2"/><text x="300" y="48" font-size="14" font-weight="700" text-anchor="middle" fill="#1864ab">CO₂ in the atmosphere</text><rect x="60" y="150" width="150" height="56" rx="10" fill="#d3f9d8" stroke="#2f9e44"/><text x="135" y="174" font-size="13" text-anchor="middle" fill="#2b8a3e">Trees &amp;</text><text x="135" y="192" font-size="13" text-anchor="middle" fill="#2b8a3e">green plants</text><rect x="390" y="150" width="150" height="56" rx="10" fill="#ffe8cc" stroke="#e8590c"/><text x="465" y="174" font-size="13" text-anchor="middle" fill="#d9480f">Animals &amp;</text><text x="465" y="192" font-size="13" text-anchor="middle" fill="#d9480f">soil microbes</text><rect x="225" y="290" width="150" height="46" rx="10" fill="#f1e7d0" stroke="#a8721a"/><text x="300" y="318" font-size="13" text-anchor="middle" fill="#8a5a14">Carbon in soil &amp; fossils</text><path d="M180,150 Q210,90 280,66" fill="none" stroke="#2f9e44" stroke-width="2.5" marker-end="url(#ahc)"/><text x="170" y="118" font-size="11" fill="#2b8a3e">photosynthesis</text><path d="M430,150 Q400,100 360,68" fill="none" stroke="#e8590c" stroke-width="2.5" marker-end="url(#ahc)"/><text x="430" y="118" font-size="11" fill="#d9480f">respiration</text><path d="M210,178 L388,178" fill="none" stroke="#5b6b78" stroke-width="2" marker-end="url(#ahc)"/><text x="300" y="170" font-size="11" text-anchor="middle" fill="#5b6b78">feeding</text><path d="M300,206 L300,288" fill="none" stroke="#a8721a" stroke-width="2" marker-end="url(#ahc)"/><text x="306" y="252" font-size="11" fill="#8a5a14">death / decay</text></svg>',
      },
      caption: 'The carbon cycle: carbon moves between the atmosphere, living things and the soil.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the processes that add CO₂ to the atmosphere and remove CO₂ from the atmosphere by dragging each process into the correct column.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Respiration', 'Photosynthesis', 'Phototropism', 'Condensation', 'Transpiration'],
        widgetOptions: ['Adds CO₂ to atmosphere', 'Removes CO₂ from atmosphere'],
        ph: 'Adds CO₂: Respiration. Removes CO₂: Photosynthesis.',
      },
      {
        label: 'b',
        text: 'The amount of carbon in the world is unchanging. The carbon cycle shows the flow of carbon from one compound to another. There have been many changes to the carbon cycle in the last 150 years.\n\n**State** two human actions that have caused the imbalance in the carbon cycle and **outline** a consequence of each of these actions.',
        marks: 4,
        ph: 'Action 1: burning fossil fuels → releases CO₂ → increases atmospheric CO₂ → greenhouse effect. Action 2: deforestation → fewer trees to absorb CO₂ → CO₂ levels rise → global warming.',
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
    stem: 'There have been many solutions suggested to reduce the cause of climate change. Four of the solutions are described in the interactive infographic: Switching to renewable energy (solar and wind), Carbon capture and storage, Reforestation (planting trees), Expanding public transport and electric vehicles.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="30" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four solutions to reduce climate change</text><g><rect x="30" y="55" width="260" height="100" rx="10" fill="#fff9db" stroke="#f08c00"/><text x="50" y="84" font-size="13" font-weight="700" fill="#b8860b">Renewable energy</text><circle cx="70" cy="118" r="14" fill="#ffd43b" stroke="#e6a700"/><g stroke="#f59f00" stroke-width="2" stroke-linecap="round"><line x1="70" y1="96" x2="70" y2="104"/><line x1="70" y1="132" x2="70" y2="140"/><line x1="48" y1="118" x2="56" y2="118"/><line x1="84" y1="118" x2="92" y2="118"/></g><path d="M150,135 l0,-26 M150,109 l-12,-8 M150,109 l12,-8" stroke="#1971c2" stroke-width="3" fill="none"/><text x="150" y="150" font-size="10" text-anchor="middle" fill="#1971c2">wind</text></g><g><rect x="310" y="55" width="260" height="100" rx="10" fill="#e7f5ff" stroke="#1971c2"/><text x="330" y="84" font-size="13" font-weight="700" fill="#1864ab">Carbon capture</text><rect x="350" y="100" width="40" height="40" fill="#a5d8ff" stroke="#1971c2"/><path d="M420,130 q20,-30 40,0" stroke="#5b6b78" stroke-width="2" fill="none"/><text x="450" y="120" font-size="20" fill="#1971c2">CO₂</text></g><g><rect x="30" y="175" width="260" height="100" rx="10" fill="#d3f9d8" stroke="#2f9e44"/><text x="50" y="204" font-size="13" font-weight="700" fill="#2b8a3e">Reforestation</text><path d="M90,255 l0,-20 M90,235 q-14,-2 -14,-16 q14,4 14,16 q14,-12 14,-16 q0,14 -14,16" fill="#2f9e44" stroke="#2b8a3e"/><path d="M150,255 l0,-24 M150,231 q-16,-2 -16,-18 q16,4 16,18 q16,-14 16,-18 q0,16 -16,18" fill="#37b24d" stroke="#2b8a3e"/></g><g><rect x="310" y="175" width="260" height="100" rx="10" fill="#f3e8ff" stroke="#9c36b5"/><text x="330" y="204" font-size="13" font-weight="700" fill="#862e9c">Public transport / EVs</text><rect x="350" y="225" width="90" height="30" rx="6" fill="#d0bfff" stroke="#9c36b5"/><circle cx="368" cy="258" r="7" fill="#495057"/><circle cx="422" cy="258" r="7" fill="#495057"/><rect x="470" y="232" width="60" height="23" rx="4" fill="#b197fc" stroke="#9c36b5"/><circle cx="484" cy="258" r="6" fill="#495057"/><circle cx="516" cy="258" r="6" fill="#495057"/></g></svg>',
      },
      caption: 'Four possible solutions to reduce the impact of climate change.',
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
