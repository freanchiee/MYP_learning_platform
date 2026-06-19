import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string; subject: string; session: string; year: number
  totalMarks: number; durationMinutes: number; criteria: readonly string[]
}

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2020',
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
    stem: 'A biome contains plants and animals living in a major habitat. A biome can be made up of multiple ecosystems.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Feeding relationships in a grassland biome',
        center: { label: 'Grass (producer)', detail: 'Producers make their own food by photosynthesis and form the base of every food chain.', color: '#2f9e44' },
        nodes: [
          { id: 'grasshopper', label: 'Grasshopper', color: '#94c11f', detail: 'Primary consumer / herbivore — eats grass.' },
          { id: 'frog', label: 'Frog', color: '#1971c2', detail: 'Secondary consumer — eats grasshoppers.' },
          { id: 'snake', label: 'Snake', color: '#e8590c', detail: 'Tertiary consumer / top predator — eats frogs.' },
        ],
        edges: [
          { from: 'grasshopper', to: 'frog', label: 'eaten by' },
          { from: 'frog', to: 'snake', label: 'eaten by' },
        ],
      },
      caption: 'Energy flows from the producer (grass) through each consumer. Hover a node to see its role.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The images below show different organisms in a biome.\n\n**Organize** the organisms to create a food chain by dragging them into the correct order.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Grass', 'Frog', 'Snake', 'Grasshopper'],
        widgetOptions: ['Position 1', 'Position 2', 'Position 3', 'Position 4'],
        ph: 'Grass → Grasshopper → Frog → Snake.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Organisms found in the biome</text><g><rect x="30" y="40" width="110" height="80" rx="8" fill="#e6f4ea" stroke="#2f9e44"/><path d="M60,108 L62,72 M75,108 L74,68 M90,108 L92,74 M105,108 L104,70" stroke="#2f9e44" stroke-width="3" stroke-linecap="round"/><text x="85" y="136" font-size="11" text-anchor="middle" fill="#2f7a36">Grass</text></g><g><rect x="160" y="40" width="110" height="80" rx="8" fill="#f4fbe6" stroke="#94c11f"/><ellipse cx="215" cy="80" rx="22" ry="11" fill="#a7c957" stroke="#6a8e2a"/><line x1="237" y1="78" x2="252" y2="66" stroke="#6a8e2a" stroke-width="2"/><line x1="237" y1="84" x2="252" y2="92" stroke="#6a8e2a" stroke-width="2"/><text x="215" y="136" font-size="11" text-anchor="middle" fill="#5c7a1f">Grasshopper</text></g><g><rect x="290" y="40" width="110" height="80" rx="8" fill="#e7f0f9" stroke="#1971c2"/><ellipse cx="345" cy="82" rx="24" ry="16" fill="#74b3e0" stroke="#1862a0"/><circle cx="338" cy="74" r="3" fill="#143b5e"/><circle cx="352" cy="74" r="3" fill="#143b5e"/><text x="345" y="136" font-size="11" text-anchor="middle" fill="#1862a0">Frog</text></g><g><rect x="420" y="40" width="110" height="80" rx="8" fill="#fdecdc" stroke="#e8590c"/><path d="M438,95 Q460,55 482,85 Q500,108 512,78" fill="none" stroke="#d9480f" stroke-width="7" stroke-linecap="round"/><text x="475" y="136" font-size="11" text-anchor="middle" fill="#c14808">Snake</text></g></svg>',
          },
          caption: 'The four organisms to arrange into a food chain.',
        },
      },
      {
        label: 'b',
        text: 'The images below show three different interactions between organisms.\n\n**Select** the type of interaction shown in each image.',
        marks: 3,
        widget: 'inline_dropdown_select',
        widgetItems: ['Hippos', 'Lion and zebra', 'Mosquito and person'],
        widgetOptions: ['Transpiration', 'Predation', 'Parasitism', 'Respiration', 'Competition'],
        ph: 'Hippos = Competition; Lion and zebra = Predation; Mosquito and person = Parasitism.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Three interactions between organisms</text><g><rect x="20" y="34" width="160" height="100" rx="8" fill="#eef4f7" stroke="#5b6b78"/><ellipse cx="70" cy="92" rx="30" ry="18" fill="#8a99a6" stroke="#5b6b78"/><ellipse cx="120" cy="92" rx="30" ry="18" fill="#9aa8b4" stroke="#5b6b78"/><text x="100" y="120" font-size="9" text-anchor="middle" fill="#475569">two hippos sharing</text><text x="100" y="152" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hippos</text></g><g><rect x="200" y="34" width="160" height="100" rx="8" fill="#fdf3e8" stroke="#a8721a"/><ellipse cx="245" cy="90" rx="26" ry="15" fill="#e3a93c" stroke="#a8721a"/><path d="M271,90 l16,-7 l0,14 Z" fill="#e3a93c" stroke="#a8721a"/><rect x="300" y="80" width="40" height="20" rx="4" fill="#f0e4c9" stroke="#9c844a"/><path d="M300,85 h40 M300,95 h40" stroke="#3a2f1a" stroke-width="2"/><text x="280" y="120" font-size="9" text-anchor="middle" fill="#7a5512">lion chasing zebra</text><text x="280" y="152" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Lion and zebra</text></g><g><rect x="380" y="34" width="160" height="100" rx="8" fill="#fbe9ee" stroke="#c2255c"/><ellipse cx="450" cy="92" rx="34" ry="22" fill="#f1c8b8" stroke="#b07a5e"/><circle cx="450" cy="70" r="6" fill="#3a2c25"/><line x1="450" y1="76" x2="450" y2="62" stroke="#c2255c" stroke-width="2"/><circle cx="450" cy="58" r="3" fill="#c2255c"/><text x="460" y="120" font-size="9" text-anchor="middle" fill="#a01e4e">mosquito feeding on person</text><text x="460" y="152" font-size="11" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mosquito and person</text></g></svg>',
          },
          caption: 'Identify the type of interaction shown in each panel.',
        },
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

  // ── Q2 — Homeostasis & Dialysis (11 marks, Crit A) ──────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Homeostasis & Kidney Function',
    topicCanonical: 'Homeostasis',
    topicGroup: 'Metabolism',
    topicsAlso: ['Movement & Transport'],
    marks: 11,
    stem: 'The human body depends on transport processes to maintain homeostasis. Kidneys filter all of the body\'s blood about 300 times per day. If kidneys fail, dialysis is the process that serves the same function.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="bah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker><marker id="fah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1971c2"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Inside a dialyser (artificial kidney)</text><rect x="120" y="70" width="360" height="170" rx="14" fill="#eef4f7" stroke="#5b6b78" stroke-width="2"/><g stroke="#c0392b" stroke-width="6" stroke-linecap="round"><line x1="140" y1="100" x2="460" y2="100"/><line x1="140" y1="130" x2="460" y2="130"/><line x1="140" y1="160" x2="460" y2="160"/><line x1="140" y1="190" x2="460" y2="190"/><line x1="140" y1="220" x2="460" y2="220"/></g><text x="300" y="58" font-size="11" text-anchor="middle" fill="#a01e2e">blood flows through many fine tubes →</text><line x1="60" y1="155" x2="118" y2="100" stroke="#c0392b" stroke-width="4" marker-end="url(#bah)"/><text x="40" y="150" font-size="11" fill="#a01e2e">blood in</text><line x1="482" y1="220" x2="540" y2="265" stroke="#c0392b" stroke-width="4" marker-end="url(#bah)"/><text x="500" y="285" font-size="11" fill="#a01e2e">clean blood out</text><line x1="470" y1="255" x2="135" y2="255" stroke="#1971c2" stroke-width="3" marker-end="url(#fah)"/><text x="300" y="278" font-size="11" text-anchor="middle" fill="#1862a0">← dialysis fluid flows the opposite way (counter-current)</text><text x="300" y="302" font-size="10" text-anchor="middle" fill="#64748b">Waste diffuses from blood (high concentration) into the dialysis fluid (low concentration).</text></svg>',
      },
      caption: 'Blood is split into many fine tubes surrounded by dialysis fluid flowing the opposite way, giving a large surface area for diffusion of waste.',
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
        text: 'The process of dialysis depends on diffusion and osmosis. **State** the part of the cell that regulates these processes.',
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
        text: 'In dialysis, the dialysis fluid is continuously removed. **Suggest** a reason for removing the dialysis fluid and **predict** what would happen if it is not removed.',
        marks: 4,
        ph: 'Reason: to maintain concentration gradient so waste products continue to diffuse out. Prediction: waste products would build up; diffusion would stop or reverse; patient would be harmed.',
      },
      {
        label: 'e',
        text: 'In the dialyzer, the blood passes through many fine tubes rather than one large tube. **Justify** why many fine tubes are used.',
        marks: 2,
        ph: 'Many fine tubes increase surface area; greater surface area → faster rate of diffusion → more efficient removal of waste products.',
      },
    ],
  },

  // ── Q3 — Daphnia Investigation Design (13 marks, Crit B) ─────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Daphnia Heart Rate Investigation',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    marks: 13,
    stem: 'Daphnia are small invertebrates that live in water. Daphnia are interesting to use for investigations into heart rate because they are transparent, so you can see their heart beating. Some of the information collected from studying Daphnia can model how certain factors might influence human heart rate.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Labelled diagram of a Daphnia (water flea)</text><ellipse cx="300" cy="170" rx="150" ry="100" fill="#dfeef5" stroke="#7fa7bd" stroke-width="2"/><circle cx="178" cy="150" r="26" fill="#3a4a55" stroke="#22303a"/><circle cx="170" cy="146" r="6" fill="#fff" opacity="0.5"/><text x="150" y="120" font-size="11" fill="#22303a" text-anchor="end">eye</text><line x1="158" y1="135" x2="174" y2="146" stroke="#22303a" stroke-width="1"/><path d="M150,150 q-50,-30 -70,10 q40,-10 70,0" fill="none" stroke="#5b6b78" stroke-width="2"/><text x="70" y="135" font-size="11" fill="#5b6b78">antenna</text><ellipse cx="250" cy="130" rx="20" ry="15" fill="#c0392b" stroke="#8a1f1f"/><text x="250" y="92" font-size="11" font-weight="700" fill="#c0392b" text-anchor="middle">heart</text><line x1="250" y1="98" x2="250" y2="116" stroke="#c0392b" stroke-width="1"/><ellipse cx="330" cy="150" rx="50" ry="34" fill="#f1c453" stroke="#b8860b" opacity="0.7"/><circle cx="316" cy="142" r="6" fill="#e0a800"/><circle cx="338" cy="146" r="6" fill="#e0a800"/><circle cx="328" cy="162" r="6" fill="#e0a800"/><text x="430" y="120" font-size="11" font-weight="700" fill="#9c6a00" text-anchor="start">egg chamber</text><line x1="380" y1="138" x2="426" y2="118" stroke="#9c6a00" stroke-width="1"/><path d="M250,200 q30,40 70,30" fill="none" stroke="#6a4a2a" stroke-width="6" stroke-linecap="round"/><text x="240" y="250" font-size="11" font-weight="700" fill="#6a4a2a" text-anchor="middle">gut</text><line x1="255" y1="238" x2="270" y2="214" stroke="#6a4a2a" stroke-width="1"/><path d="M250,170 l-8,14 m12,-10 l-8,14 m12,-10 l-8,14" stroke="#2f9e44" stroke-width="3" stroke-linecap="round"/><text x="180" y="210" font-size="11" font-weight="700" fill="#2f7a36" text-anchor="end">gills</text><line x1="184" y1="206" x2="240" y2="186" stroke="#2f7a36" stroke-width="1"/></svg>',
      },
      caption: 'The transparent body of a Daphnia lets you see the beating heart, egg chamber, gut and gills.',
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
        text: '*Elodea* is a plant found in the same habitat as *Daphnia*. **Identify** one feature of *Elodea* cells that would make them different from cells found in *Daphnia*.',
        marks: 1,
        ph: 'Cell wall / chloroplasts / large central vacuole (any one plant-cell-specific feature).',
      },
      {
        label: 'c',
        text: 'Sugar can affect heart rate in humans. **Suggest** a hypothesis for what would happen to the heart rate of a *Daphnia* if it were provided with different amounts of sugar in its water. Your answer should include a scientific explanation.',
        marks: 2,
        ph: 'If sugar concentration increases, Daphnia heart rate will increase, because higher glucose provides more energy for cellular respiration, increasing metabolic activity and heart rate.',
      },
      {
        label: 'd',
        text: '**Identify** the variables in this investigation.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Independent', 'Dependent', 'Control'],
        widgetOptions: [
          'Sugar concentration in water',
          'Heart rate of Daphnia (bpm)',
          'Temperature of water',
          'Type/size of Daphnia used',
          'Volume of solution',
          'Time period of observation',
        ],
        ph: 'IV: sugar concentration. DV: heart rate. CV: temperature, type/size of Daphnia, volume of solution.',
      },
      {
        label: 'e',
        text: '**State** how many different amounts of sugar should be given to the *Daphnia* to study changes in heart rate and **justify** your answer.',
        marks: 2,
        ph: 'At least 4–5 different concentrations; to identify a trend/pattern and determine if there is a dose–response relationship.',
      },
      {
        label: 'f',
        text: '**State** how many trials should be repeated for each amount of sugar and **justify** your answer.',
        marks: 2,
        ph: 'At least 3 trials per concentration; repetition increases reliability; allows calculation of a mean and identification of anomalous results.',
      },
    ],
  },

  // ── Q4 — Temperature & Daphnia Heart Rate Data (16 marks, Crit C) ────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Temperature & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Homeostasis'],
    marks: 16,
    stem: 'A student planned the method below to study the effect of temperature on heart rate. Students counted the heartbeats of a Daphnia for 20 seconds at different temperatures.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Temperature / °C', 'Heartbeats in 20 s', 'Heart rate / bpm'],
        rows: [
          ['10', '47', '?'],
          ['15', '60', '?'],
          ['20', '66', '?'],
        ],
      },
      caption: 'Raw data: heartbeats counted in 20 seconds at three temperatures. Convert each count to beats per minute (× 3).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Students counted the heartbeats of a *Daphnia* for 20 seconds. **Calculate** the *Daphnia\'s* heart rate in beats per minute (bpm). Show your working and add your answers to the table.',
        marks: 3,
        ph: 'Multiply heartbeats in 20 s by 3 to convert to bpm. 10 °C: 47 × 3 = 141 bpm; 15 °C: 60 × 3 = 180 bpm; 20 °C: 66 × 3 = 198 bpm.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Heartbeats in 20 s', 'Heart rate / bpm'],
            rows: [
              ['10', '47', '?'],
              ['15', '60', '?'],
              ['20', '66', '?'],
            ],
          },
          caption: 'Complete the heart-rate column by multiplying the 20-second count by 3.',
        },
      },
      {
        label: 'b',
        text: '**Suggest** two weaknesses of the investigation and **justify** your answers.',
        marks: 4,
        ph: 'Weakness 1: only one Daphnia used per temperature → not representative; should use multiple individuals. Weakness 2: only 20 seconds of counting → may introduce error; count for longer period.',
      },
      {
        label: 'c',
        text: '**Suggest** a different independent variable that could be used to extend this investigation.',
        marks: 1,
        ph: 'Sugar/caffeine/salt concentration; light intensity; pH of water.',
      },
      {
        label: 'd',
        text: 'At the start of the investigation, the student predicted that the *Daphnia\'s* heart rate would increase as temperature increased. **Discuss** this prediction using scientific reasoning.',
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
        text: 'The students were working with a school in another part of the world and wanted to compare this data to their own results. The graph of raw data and transformed data is presented. The graph is incomplete — **label** the x and y axes.',
        marks: 2,
        ph: 'x-axis: Temperature / °C; y-axis: Heart rate / bpm.',
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Effect of temperature on Daphnia heart rate',
            xAxis: { label: 'Temperature / °C', min: 0, max: 45, tick: 5 },
            yAxis: { label: 'Heart rate / bpm', min: 0, max: 250, tick: 50 },
            points: [[0, 70], [10, 103], [20, 130], [30, 183], [40, 224]],
            readouts: [
              { x: 10, note: 'read the heart rate at 10 °C' },
              { x: 20, note: 'read the heart rate at 20 °C' },
            ],
            dataMaxX: 40,
          },
          caption: 'The graph is presented with unlabelled axes — state what each axis should be, then drag the cursor to read off values.',
        },
      },
      {
        label: 'g',
        text: 'The table of transformed data is incomplete. Use information from the graph to **determine** the missing values and add them to the transformed data table.',
        marks: 2,
        ph: 'Read values from graph at 10 °C (≈ 103 bpm) and 20 °C (≈ 130 bpm); record to appropriate precision.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Temperature / °C', 'Average heart rate / bpm'],
            rows: [
              ['0', '70'],
              ['10', '?'],
              ['20', '?'],
              ['30', '183'],
              ['40', '224'],
            ],
          },
          caption: 'Transformed data table with two values missing — read them from the graph in part (f).',
        },
      },
    ],
  },

  // ── Q5 — Caffeine Investigation Design (17 marks, Crit B) ─────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Caffeine & Heart Rate Investigation Design',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 17,
    stem: 'Caffeine is a stimulant which is found in coffee and cola drinks. The health and fitness club in a school wants to collect some scientific evidence to support their argument that caffeinated drinks are bad for health. They want to collect some scientific evidence to support their argument. You are provided with a range of solutions of different caffeine concentrations (0–0.5 g/dm³ caffeine concentration) to model the effect of caffeinated drinks.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Caffeine solutions provided (0 – 0.5 g/dm³)</text><g><rect x="40" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="40" y="160" width="34" height="20" rx="5" fill="#f3e0c7" stroke="#5b6b78"/><text x="57" y="200" font-size="11" text-anchor="middle" fill="#475569">0</text></g><g><rect x="110" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="110" y="150" width="34" height="30" rx="5" fill="#e3b977" stroke="#5b6b78"/><text x="127" y="200" font-size="11" text-anchor="middle" fill="#475569">0.1</text></g><g><rect x="180" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="180" y="140" width="34" height="40" rx="5" fill="#d4a14c" stroke="#5b6b78"/><text x="197" y="200" font-size="11" text-anchor="middle" fill="#475569">0.2</text></g><g><rect x="250" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="250" y="130" width="34" height="50" rx="5" fill="#c08a2e" stroke="#5b6b78"/><text x="267" y="200" font-size="11" text-anchor="middle" fill="#475569">0.3</text></g><g><rect x="320" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="320" y="120" width="34" height="60" rx="5" fill="#a8761f" stroke="#5b6b78"/><text x="337" y="200" font-size="11" text-anchor="middle" fill="#475569">0.4</text></g><g><rect x="390" y="70" width="34" height="110" rx="5" fill="#eef4f7" stroke="#5b6b78"/><rect x="390" y="110" width="34" height="70" rx="5" fill="#8a5e12" stroke="#5b6b78"/><text x="407" y="200" font-size="11" text-anchor="middle" fill="#475569">0.5</text></g><text x="232" y="222" font-size="11" text-anchor="middle" fill="#64748b">caffeine concentration / g dm⁻³</text><g><circle cx="520" cy="120" r="44" fill="#fdecec" stroke="#c0392b" stroke-width="2"/><path d="M490,120 h14 l6,-16 l8,30 l6,-14 h16" fill="none" stroke="#c0392b" stroke-width="2.5"/><text x="520" y="180" font-size="11" text-anchor="middle" fill="#a01e2e">heart-rate monitor</text></g></svg>',
      },
      caption: 'A range of caffeine solutions (0–0.5 g dm⁻³) and a heart-rate monitor are provided to model the effect of caffeinated drinks.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to study the influence of caffeine on human heart rate. Your answer should include:\n- the independent variable, dependent variable and two control variables\n- a testable hypothesis\n- details of how to manipulate, measure or monitor all of the variables\n- details of the method to collect sufficient data\n- ethical considerations.',
        marks: 17,
        ph: 'Hypothesis: If caffeine concentration increases, heart rate increases. IV: caffeine concentration. DV: heart rate (bpm). CV: age/health of participants, time of measurement. Method: measure resting heart rate; consume caffeine solution; measure heart rate at intervals. Ethics: informed consent; exclude participants with heart conditions.',
      },
    ],
  },

  // ── Q6 — Energy Drink Data Analysis (7 marks, Crit C) ────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Caffeine & Heart Rate Data Analysis',
    topicCanonical: 'Circulation',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 7,
    stem: 'After conducting their investigation, a student did some further research into caffeine in energy drinks. They studied the energy drink JHIVD, which contains 50 mg caffeine per 100 cm³.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['JHIVD nutrition facts (per 100 cm³)', 'Amount', '% Daily value'],
        rows: [
          ['Calories', '60', ''],
          ['Total fat', '0 g', '0%'],
          ['Sodium', '10 mg', '0%'],
          ['Total carbohydrate', '15 g', '5%'],
          ['Sugar', '15 g', ''],
          ['Caffeine', '50 mg', ''],
          ['Vitamin A', '', '25%'],
          ['Vitamin C', '', '250%'],
          ['Vitamin E', '', '100%'],
          ['Vitamin B12', '', '125%'],
          ['Riboflavin', '', '50%'],
        ],
      },
      caption: 'Nutritional information for the energy drink JHIVD — note the caffeine content and the added vitamins.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows how caffeine concentration affects heart rate. **Add** a line of best fit to the graph and use this to **predict** the heart rate after drinking 100 cm³ of JHIVD.',
        marks: 2,
        ph: 'Line of best fit drawn through the scatter points (roughly straight, gradient ≈ 0.55 bpm per mg). Extrapolating to 50 mg/100 cm³ caffeine → predicted heart rate ≈ 95 bpm (accept 90–96).',
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Effect of caffeine concentration on heart rate',
            xAxis: { label: 'Caffeine concentration / mg per 100 cm³', min: 0, max: 50, tick: 10 },
            yAxis: { label: 'Heart rate / bpm', min: 60, max: 100, tick: 5 },
            points: [[0, 68], [5, 70], [10, 72], [15, 76], [20, 78], [25, 82], [30, 85], [35, 88], [40, 90]],
            readouts: [{ x: 50, note: 'JHIVD = 50 mg per 100 cm³ — predict the heart rate (extrapolation)' }],
            dataMaxX: 40,
          },
          caption: 'Scatter of heart rate against caffeine concentration. Drag the cursor to 50 mg/100 cm³ to predict the heart rate for JHIVD.',
        },
      },
      {
        label: 'b',
        text: 'The student wanted to test their prediction from part (a). After drinking JHIVD, they measured a heart rate of 112 bpm. **Calculate** the percentage increase between the predicted heart rate and the measured value. Give your answer to three significant figures.',
        marks: 3,
        ph: '% increase = (measured − predicted) / predicted × 100 = (112 − 95) / 95 × 100 = 17.9 % (3 s.f.). Accept the value consistent with the student\'s own prediction from part (a), e.g. using 90 → (112 − 90)/90 × 100 = 24.4 %.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Heart rate', 'Value / bpm'],
            rows: [
              ['Predicted from graph (part a)', '≈ 95'],
              ['Measured after drinking JHIVD', '112'],
            ],
          },
          caption: 'Compare the predicted and measured heart rates to calculate the percentage increase.',
        },
      },
      {
        label: 'c',
        text: 'Using nutritional information from above, **suggest** why the actual heart rate was different from the predicted value.',
        marks: 2,
        ph: 'JHIVD contains other stimulants (e.g. vitamin B12, taurine) in addition to caffeine; combined effect is greater than caffeine alone; graph only modelled caffeine concentration.',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['JHIVD also contains', '% Daily value'],
            rows: [
              ['Caffeine', '50 mg'],
              ['Sugar', '15 g'],
              ['Vitamin C', '250%'],
              ['Vitamin B12', '125%'],
              ['Vitamin E', '100%'],
              ['Riboflavin', '50%'],
            ],
          },
          caption: 'JHIVD contains far more than caffeine — other ingredients may also affect heart rate.',
        },
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
    stem: 'Humans have been interacting with and changing their environment for thousands of years. We have changed our environment to suit our needs, but these changes are causing the environment to respond in ways we have yet to fully understand. The diagram shows the natural processes that form the carbon cycle.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'The carbon cycle',
        center: { label: 'CO₂ in the atmosphere', detail: 'Carbon dioxide is exchanged between the atmosphere, living things, the oceans and fossil fuels.', color: '#495057' },
        nodes: [
          { id: 'plants', label: 'Plants', color: '#2f9e44', detail: 'Photosynthesis REMOVES CO₂ from the atmosphere and stores carbon in glucose.' },
          { id: 'animals', label: 'Animals', color: '#e8590c', detail: 'Respiration ADDS CO₂ to the atmosphere as living things release energy from food.' },
          { id: 'dead', label: 'Dead organisms', color: '#a8721a', detail: 'Decomposers respire and break down dead matter, releasing CO₂.' },
          { id: 'fossil', label: 'Fossil fuels', color: '#212529', detail: 'Burning (combustion) of coal, oil and gas ADDS large amounts of CO₂ to the atmosphere.' },
          { id: 'ocean', label: 'Carbonates in the ocean', color: '#1971c2', detail: 'Oceans dissolve and store CO₂ as carbonates.' },
        ],
        edges: [
          { from: 'plants', to: 'animals', label: 'feeding' },
          { from: 'animals', to: 'dead', label: 'death' },
          { from: 'dead', to: 'fossil', label: 'over millions of years' },
        ],
      },
      caption: 'Processes move carbon between the atmosphere, organisms, oceans and fossil fuels. Hover a node to see whether it adds or removes CO₂.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the name of the processes that add CO₂ to the atmosphere and remove CO₂ from the atmosphere by dragging each process into the correct column.',
        marks: 2,
        widget: 'match_drag_drop',
        widgetItems: ['Respiration', 'Photosynthesis', 'Tropism', 'Evaporation', 'Transpiration'],
        widgetOptions: ['Adds CO₂ to atmosphere', 'Removes CO₂ from atmosphere'],
        ph: 'Adds CO₂: Respiration. Removes CO₂: Photosynthesis.',
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#495057"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><rect x="170" y="20" width="260" height="46" rx="10" fill="#dfe3e6" stroke="#495057"/><text x="300" y="48" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">CO₂ in the atmosphere</text><g><rect x="40" y="150" width="150" height="50" rx="10" fill="#e6f4ea" stroke="#2f9e44"/><text x="115" y="180" font-size="13" font-weight="700" text-anchor="middle" fill="#2f7a36">Plants</text><line x1="190" y1="160" x2="240" y2="70" stroke="#2f9e44" stroke-width="3" marker-end="url(#cah)"/><text x="160" y="118" font-size="11" fill="#2f7a36" transform="rotate(-58 175 120)">photosynthesis (removes)</text></g><g><rect x="240" y="150" width="150" height="50" rx="10" fill="#fdecdc" stroke="#e8590c"/><text x="315" y="180" font-size="13" font-weight="700" text-anchor="middle" fill="#c14808">Animals</text><line x1="320" y1="150" x2="312" y2="70" stroke="#e8590c" stroke-width="3" marker-end="url(#cah)"/><text x="330" y="118" font-size="11" fill="#c14808">respiration (adds)</text></g><g><rect x="430" y="150" width="150" height="50" rx="10" fill="#e9ecef" stroke="#212529"/><text x="505" y="180" font-size="13" font-weight="700" text-anchor="middle" fill="#212529">Fossil fuels</text><line x1="490" y1="150" x2="400" y2="68" stroke="#212529" stroke-width="3" marker-end="url(#cah)"/><text x="430" y="120" font-size="11" fill="#212529" transform="rotate(-42 460 120)">combustion (adds)</text></g></svg>',
          },
          caption: 'Sort the processes into those that add CO₂ to the atmosphere and those that remove it.',
        },
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
    stem: 'There have been many solutions suggested to reduce the cause of climate change. Four of the solutions are described in the interactive infographic: Geoengineering, Reducing population growth, Dietary choices, Habitat restoration.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Climate change solution', 'What it involves', 'How it helps', 'A limitation'],
        rows: [
          ['Geoengineering', 'Deliberately altering the climate, e.g. reflecting sunlight or capturing CO₂', 'Could cool the planet or remove CO₂ on a large scale', 'Untested, expensive and may have unknown side effects'],
          ['Reducing population growth', 'Slowing the rise in the number of people through education and access to healthcare', 'Fewer people means lower total emissions and resource use', 'Slow to take effect; raises ethical and political concerns'],
          ['Dietary choices', 'Eating less meat and more plant-based food', 'Reduces methane from livestock and land used for farming', 'Requires large changes in habits and culture'],
          ['Habitat restoration', 'Replanting forests and restoring wetlands and peatlands', 'Plants absorb CO₂ by photosynthesis, locking carbon in biomass', 'Takes many years; needs large areas of protected land'],
        ],
      },
      caption: 'The four climate-change solutions from the infographic — choose and evaluate any two.',
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
