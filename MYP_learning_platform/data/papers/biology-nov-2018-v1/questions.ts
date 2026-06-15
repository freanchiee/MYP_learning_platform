import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2018 · VARIANT 1  (isomorphic to biology-nov-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Numbers recomputed throughout.
//   Q1 Diet & nutrition:   cheese-sandwich breakfast → endurance-athlete pasta meal
//   Q2 Infection/immunity: Vibrio cholerae (cholera) → Salmonella Typhi (typhoid)
//   Q3 Phototaxis design:  leeches in a tank → planarian flatworms in a trough
//   Q4 Behaviour vs temp:  cricket chirps → garden-snail crawling speed
//   Q5 Crit B design:      woodlice choice chamber → mealworms choice chamber
//   Q6 Food web/pop-dyn:   woodland (woodlice/rats) → pond (snails/sticklebacks)
//   Q7 Fertilizer/GM:      biofortified rice → drought-tolerant GM crops
//   Q8 Crit D evaluation:  golden rice → nitrogen-fixing GM cereals
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2018-v1',
  subject: 'Biology',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────
  // Q1 — Diet & Exercise (11 marks, Criterion A)
  // V1: endurance athlete pre-race pasta meal; 12 g protein = 24% RDI → 50 g
  // ─────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Diet & Nutrition',
    topicCanonical: 'Nutrition',
    topicGroup: 'Metabolism',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 11,
    stem: 'This question is about diet and exercise. An endurance athlete plans the food she will eat before a long-distance race. Lifestyle choices are important for health.',
    artefact: {
      component: 'PieChart',
      data: {
        kind: 'doughnut',
        title: 'Energy provided by the athlete’s pre-race meal',
        unit: '%',
        series: [
          { name: 'Carbohydrates', value: 62, color: '#f08c00' },
          { name: 'Fats', value: 23, color: '#0b7285' },
          { name: 'Proteins', value: 15, color: '#2f9e44' },
        ],
      },
      caption: 'Proportion of energy supplied by each nutrient group in the athlete’s pre-race meal.',
    },
    tasks: [
      {
        label: 'a',
        text: 'For each item, **select** the main nutrient this food contains.',
        marks: 2,
        ph: 'Pasta → Carbohydrates; Butter → Fats; Yogurt → Proteins; Eggs → Proteins.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Pasta', 'Butter', 'Yogurt', 'Eggs'],
        widgetOptions: ['Carbohydrates', 'Fats', 'Proteins'],
      },
      {
        label: 'b',
        text: '**State** why carbohydrates are needed as part of a balanced diet.',
        marks: 1,
        ph: 'Carbohydrates are needed for...',
      },
      {
        label: 'c',
        text: 'Before her race, the athlete eats a bowl of pasta with a glass of milk. The pasta contained 12 g of protein which is equivalent to 24% of the recommended daily intake.\n\n**Calculate** the total mass of protein needed daily.',
        marks: 2,
        ph: 'Show working: 12 g = 24%, so daily protein = ...',
      },
      {
        label: 'd',
        text: 'The nutritional value of the athlete\'s pre-race meal is shown below.\n\n**Pasta with tomato sauce (per 100 g):** Fat 4%, Carbohydrates 25%, Protein 24%, Iron 12%, Vitamin C 0%\n\n**Glass of milk (per 250 cm³):** Fat 4%, Carbohydrates 5%, Protein 16%, Iron 0%, Vitamin C 0%\n\n**Analyse** the information in the tables to discuss whether or not the meal is part of a balanced diet.',
        marks: 4,
        ph: 'Yes/No — contains carbohydrate, fat and protein groups / no vitamin C provided / good source of protein / need to know what else was eaten during the day...',
      },
      {
        label: 'e',
        text: 'Type 2 diabetes is a condition that can develop when a person\'s diet contains too much sugar over a long period of time. **Outline** two causes of type 2 diabetes.',
        marks: 2,
        ph: 'Cause 1: ...\nCause 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Infection & Immunity (12 marks, Criterion A)
  // V1: Salmonella Typhi (typhoid)
  // ─────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Pathogens, Infection & Immunity',
    topicCanonical: 'Pathogens & Parasites',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Factors Affecting Human Health'],
    marks: 12,
    stem: 'Some interactions between organisms are harmful. Each year, hundreds of thousands of people fall ill after infection with the bacterium *Salmonella* Typhi, which causes the disease typhoid fever.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="bact1" cx="0.4" cy="0.35"><stop offset="0" stop-color="#74c69d"/><stop offset="1" stop-color="#2f9e44"/></radialGradient></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">How the body defends against Salmonella Typhi</text><rect x="40" y="60" width="160" height="180" rx="10" fill="#fdebd0" stroke="#f08c00" stroke-width="2"/><text x="120" y="84" font-size="12" font-weight="700" text-anchor="middle" fill="#b5651d">Skin barrier</text><rect x="60" y="96" width="120" height="14" fill="#f5cba7"/><rect x="60" y="112" width="120" height="14" fill="#f3c099"/><rect x="60" y="128" width="120" height="14" fill="#f0b48a"/><text x="120" y="170" font-size="10" text-anchor="middle" fill="#7a4a1e">physical barrier</text><text x="120" y="186" font-size="10" text-anchor="middle" fill="#7a4a1e">acidic pH · oils</text><ellipse cx="300" cy="150" rx="34" ry="20" fill="url(#bact1)" stroke="#1f6b34" stroke-width="2"/><line x1="334" y1="150" x2="352" y2="142" stroke="#1f6b34" stroke-width="2"/><line x1="334" y1="156" x2="352" y2="164" stroke="#1f6b34" stroke-width="2"/><text x="300" y="195" font-size="11" text-anchor="middle" fill="#1f6b34">Salmonella (pathogen)</text><circle cx="470" cy="150" r="46" fill="#eaf3f7" stroke="#0b7285" stroke-width="2"/><circle cx="470" cy="150" r="18" fill="#a5d8e6" stroke="#0b7285"/><path d="M470,104 q-34,8 -30,46 q-4,40 30,46 q34,-6 30,-46 q4,-38 -30,-46 Z" fill="none" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="3 3"/><text x="470" y="214" font-size="11" text-anchor="middle" fill="#0b7285">white blood cell</text><line x1="338" y1="150" x2="420" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><text x="380" y="138" font-size="10" text-anchor="middle" fill="#c0392b">engulf &amp; destroy</text></svg>',
      },
      caption: 'The skin acts as a barrier, and white blood cells engulf and destroy pathogens that get inside the body.',
    },
    tasks: [
      {
        label: 'a',
        text: '*Salmonella* Typhi is a pathogen.\n\n**State** the meaning of the term *pathogen*.',
        marks: 1,
        ph: 'A pathogen is...',
      },
      {
        label: 'b',
        text: '**List** two life processes that a bacterium has in common with other living organisms.',
        marks: 2,
        ph: 'Life process 1: ...\nLife process 2: ...',
      },
      {
        label: 'c',
        text: '*Salmonella* Typhi is transmitted through eating food or drinking water contaminated with infected faeces.\n\n**Suggest** why typhoid outbreaks often happen in refugee camps where many people live close together.',
        marks: 2,
        ph: 'Crowded camps cause... which leads to...',
      },
      {
        label: 'd',
        text: 'The human body has natural defences which protect it from infection.\n\n**Outline** how the skin and white blood cells protect the body from infection.\n\n**Skin:**\n\n**White blood cells:**',
        marks: 2,
        ph: 'Skin: physical barrier / pH / oils / sweat\nWhite blood cells: destroy/eat pathogens / produce antibodies',
      },
      {
        label: 'e',
        text: 'Vaccinations have been developed against typhoid and many other deadly diseases such as measles and polio. Vaccines work with the body\'s own immune system.\n\n**Explain** how vaccinations lead to immunity.',
        marks: 5,
        ph: 'Vaccine is a weakened/inactive form of pathogen. Triggers white blood cells/lymphocytes. Immune system produces specific antibodies. Memory cells are produced. If exposed again, faster and stronger immune response...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Planarian Phototaxis Investigation (14 marks, Criterion B)
  // V1: planarian flatworms, light/dark trough
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Planarian Phototaxis',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 14,
    stem: 'Plants and animals can both respond to a stimulus in their environment. When a plant responds to a stimulus, it is called a tropism, and when an animal responds to a stimulus, it is called a taxis.\n\nA group of students had just returned from a field trip to a freshwater pond, where they had observed planarian flatworms gliding along the shaded undersides of submerged leaves and stones. They knew that planarians do not have true eyes, but they have light-sensitive eyespots that can detect light and dark. They decided to investigate how planarians respond to light. This would be an example of a phototaxis.\n\nThe students placed planarians in a shallow trough divided into a brightly lit half and a shaded half. After 10 minutes they counted the number of planarians on each side.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lampg" cx="0.5" cy="0.3"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Planarian phototaxis trough</text><circle cx="160" cy="70" r="24" fill="url(#lampg)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="160" y1="98" x2="140" y2="130"/><line x1="160" y1="98" x2="160" y2="132"/><line x1="160" y1="98" x2="180" y2="130"/></g><text x="160" y="58" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><rect x="60" y="150" width="240" height="90" rx="4" fill="#cdeefb" stroke="#3f7e98" stroke-width="2"/><rect x="300" y="150" width="240" height="90" rx="4" fill="#1f3a4d" stroke="#3f7e98" stroke-width="2"/><line x1="300" y1="150" x2="300" y2="240" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4"/><text x="180" y="258" font-size="11" text-anchor="middle" fill="#2c5468">lit half</text><text x="420" y="258" font-size="11" text-anchor="middle" fill="#cdd9e0">shaded half</text><g fill="#7a4a1e"><ellipse cx="150" cy="195" rx="14" ry="5"/><ellipse cx="230" cy="215" rx="14" ry="5"/></g><g fill="#caa472"><ellipse cx="360" cy="180" rx="14" ry="5"/><ellipse cx="420" cy="205" rx="14" ry="5"/><ellipse cx="480" cy="225" rx="14" ry="5"/><ellipse cx="400" cy="225" rx="14" ry="5"/></g><text x="300" y="146" font-size="10" text-anchor="middle" fill="#0b7285">divider</text></svg>',
      },
      caption: 'Planarians are placed in the centre of a trough that is lit on one half and shaded on the other; their positions are counted after 10 minutes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the body system related to the planarians\' response to light.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Nervous', 'Endocrine', 'Respiratory', 'Digestive'],
      },
      {
        label: 'b',
        text: '**State** one ethical consideration related to the planarians used in the investigation.',
        marks: 1,
        ph: 'One ethical consideration is...',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation. The dependent variable has been completed for you.\n\n- **Independent variable:** ___\n- **Control variable 1:** ___\n- **Control variable 2:** ___\n- **Dependent variable:** Number of planarians on each side after 10 minutes *(given)*',
        marks: 3,
        ph: 'Independent variable: light level/intensity\nControl variable 1: water temperature\nControl variable 2: movement of water / starting position / number of planarians',
      },
      {
        label: 'd',
        text: '**Formulate** and **explain** a testable hypothesis for this investigation.',
        marks: 3,
        ph: 'Hypothesis: Planarians will prefer the shaded side (more planarians on the shaded side after 10 minutes).\nExplanation: Because planarians are usually found under leaves/stones / avoid light / linked to observed shaded behaviour in the pond...',
      },
      {
        label: 'e',
        text: 'The students repeated the experiment twice. **Justify** the use of three trials in this experiment.',
        marks: 1,
        ph: 'Three trials ensure sufficient data / improve reliability / repetition improves accuracy...',
      },
      {
        label: 'f',
        text: '**Suggest** two limitations of this method.',
        marks: 2,
        ph: 'Limitation 1: ...\nLimitation 2: ...',
      },
      {
        label: 'g',
        text: '**Suggest** an improvement for this experiment. **Justify** your improvement.',
        marks: 2,
        ph: 'Improvement: ...\nJustification: ...',
      },
      {
        label: 'h',
        text: '**State** a different independent variable that could be investigated using this experimental setup.',
        marks: 1,
        ph: 'A different independent variable could be...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q4 — Garden Snail Crawling Speed & Temperature (10 marks, Criterion B/C)
  // V1: snail crawling speed vs temperature; 15/20/25 °C
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Animal Behaviour — Garden Snail Crawling Speed',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    marks: 10,
    stem: 'After studying the planarians, the students decided to look into another animal behaviour. One student noticed that the garden snails in her greenhouse moved much faster on warm afternoons than on cool mornings. She found information suggesting that the crawling speed of a snail depends on temperature, so she decided to investigate this topic.\n\nThe students placed individual garden snails on a damp glass plate kept at 15°C, 20°C, and 25°C and recorded the distance crawled in five minutes (in mm) for five snails at each temperature.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean crawling distance of garden snails at different temperatures',
        xLabel: 'Temperature',
        yLabel: 'Mean distance crawled in 5 min',
        xUnit: '°C',
        yUnit: 'mm',
        dataPoints: [
          { x: 15, y: 83 },
          { x: 20, y: 127 },
          { x: 25, y: 168 },
        ],
        xMin: 10,
        xMax: 30,
        yMin: 0,
        yMax: 200,
        xStep: 5,
        yStep: 40,
      },
      caption: 'Mean distance crawled by garden snails in 5 minutes at 15°C, 20°C and 25°C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the kingdom that includes garden snails.',
        marks: 1,
        ph: 'The kingdom is...',
      },
      {
        label: 'b',
        text: 'The students predicted that the crawling speed of the snails would be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature.\n\n**Explain** the students\' prediction using scientific reasoning.',
        marks: 3,
        ph: 'At low temperatures, reactions (and enzyme activity) are slower, so crawling speed is lower. As temperature increases, enzyme activity increases so speed increases. Above an optimal temperature, enzymes denature and stop functioning so speed decreases again...',
      },
      {
        label: 'c',
        text: 'The students collected the following data:\n\n**Table A:**\n| Temperature / °C | Snail 1 | Snail 2 | Snail 3 | Snail 4 | Snail 5 | Mean |\n|---|---|---|---|---|---|---|\n| 15 | 88 | 79 | 85 | 81 | 82 | |\n| 20 | 131 | 124 | 129 | 122 | 129 | |\n| 25 | 173 | 165 | 170 | 162 | 170 | |\n\n**Table B** (same raw data plus a Mean row).\n\nThe students need to calculate means. **Select** which table is more appropriate for calculating means. **Justify** your answer.',
        marks: 1,
        ph: 'Table B is more appropriate because means should be calculated for each temperature (not for each snail across different temperatures).',
        widget: 'radio_select',
        widgetOptions: ['Table A', 'Table B'],
      },
      {
        label: 'd',
        text: 'The students\' mean data is plotted on a graph.\n\n**State** appropriate labels for each axis of the graph.\n\n- x-axis: ___\n- y-axis: ___',
        marks: 3,
        ph: 'x-axis: Temperature / °C\ny-axis: Mean distance crawled in 5 minutes / mm',
      },
      {
        label: 'e',
        text: 'The prediction the students made at the start of the experiment was: *"The crawling speed of the snails will be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature."*\n\nUse the graph to **comment on the validity of the method** used to test this prediction.',
        marks: 2,
        ph: 'The data supports the middle part of the prediction (speed increases with temperature from 15–25°C). However, the method gave insufficient data to test whether the speed decreases above a certain temperature — not enough temperatures investigated...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Mealworm Investigation Design (15 marks, Criterion B)
  // V1: mealworm beetle larvae choice chamber
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Mealworm Behaviour',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 15,
    stem: 'The students were interested in studying the behaviour of another animal. They discovered that mealworms (the larvae of the beetle *Tenebrio molitor*) are small invertebrates with segmented bodies. They are widely kept as food for reptiles and birds. Mealworms live in dark, dry sheltered places such as grain stores, and feed on cereal grains and bran.\n\nYou are provided with a choice chamber and some additional items: Choice chamber, Bran flakes, Light meter, Dry sand, Apple slices, Carrot, Lamp, Thermometer, Mealworms, Four types of paper with different transparency, Oats, Moist cotton wool, Wood shavings, Wheat grains, Cardboard.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lampm" cx="0.5" cy="0.3"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mealworm choice chamber</text><circle cx="300" cy="64" r="22" fill="url(#lampm)" stroke="#c79a10"/><text x="300" y="50" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="300" y1="86" x2="280" y2="112"/><line x1="300" y1="86" x2="300" y2="114"/><line x1="300" y1="86" x2="320" y2="112"/></g><circle cx="300" cy="180" r="80" fill="none" stroke="#5b6b78" stroke-width="3"/><path d="M300,100 A80,80 0 0 1 300,260" fill="#f5e6c8" stroke="#5b6b78" stroke-width="1"/><path d="M300,100 A80,80 0 0 0 300,260" fill="#2b2b33" stroke="#5b6b78" stroke-width="1"/><line x1="300" y1="100" x2="300" y2="260" stroke="#5b6b78" stroke-width="1.5" stroke-dasharray="4 3"/><text x="355" y="184" font-size="11" text-anchor="middle" fill="#7a5a1e">dry side</text><text x="245" y="184" font-size="11" text-anchor="middle" fill="#d8d8e0">damp side</text><rect x="334" y="150" width="36" height="22" rx="3" fill="#e8c98a" stroke="#b08a3c"/><text x="352" y="165" font-size="8" text-anchor="middle" fill="#6b4f1e">sand</text><rect x="232" y="150" width="36" height="22" rx="3" fill="#7fa8b5" stroke="#3f7e98"/><text x="250" y="165" font-size="8" text-anchor="middle" fill="#eaf3f7">cotton</text><g fill="#caa05a"><ellipse cx="320" cy="200" rx="12" ry="4"/><ellipse cx="280" cy="210" rx="12" ry="4" fill="#a8804a"/></g><text x="300" y="278" font-size="10" text-anchor="middle" fill="#5b6b78">mealworms placed in the centre</text></svg>',
      },
      caption: 'A choice chamber lets a researcher offer mealworms two conditions at once and count how many move to each side.',
    },
    tasks: [
      {
        label: '',
        text: '**Select** one factor to investigate:\n\n- Food\n- Light intensity\n- Moisture level\n\nThen **design** an investigation to study the relationship between the behaviour of the mealworms and your chosen factor. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will collect sufficient data\n- a description of how you will ensure your method is ethical',
        marks: 15,
        ph: 'Factor chosen: e.g. Moisture level\n\nIndependent variable: moisture level (damp vs dry side of choice chamber)\nDependent variable: number of mealworms in each section after 10 minutes\nControl variables: temperature, light level, starting position of mealworms\n\nHypothesis: If moisture increases, mealworms will move to the drier section because mealworms prefer dry, sheltered environments.\n\nMethod: Set up choice chamber with two sections (damp cotton wool / dry sand). Place 10 mealworms in the centre. Wait 10 minutes. Count mealworms in each section. Repeat 3 times.\n\nData collection: record number in each section for each condition, calculate means.\n\nEthics: handle mealworms gently, return them to their habitat after the experiment.',
        widget: 'radio_select',
        widgetOptions: ['Food', 'Light intensity', 'Moisture level'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Pond Food Web (10 marks, Criterion C)
  // V1: pond food web; algae/snails/sticklebacks
  // ─────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Food Webs & Population Dynamics',
    topicCanonical: 'Food Chains & Webs',
    topicGroup: 'Interactions Between Organisms',
    topicsAlso: ['Predator/Prey'],
    marks: 10,
    stem: 'Pond snails are eaten by several animals in the simplified pond food web below:\n\nFood web: Algae → Pond snails → Stickleback, Newt; Mayfly larvae → Stickleback, Newt, Diving beetle; Tadpoles → Diving beetle, Heron; Stickleback → Diving beetle, Newt, Heron.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Simplified pond food web',
        nodes: [
          { id: 'algae', label: 'Algae', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis. Eaten by pond snails and mayfly larvae.' },
          { id: 'snail', label: 'Pond snail', color: '#94d82d', detail: 'Primary consumer — grazes on algae. Eaten by sticklebacks and newts.' },
          { id: 'mayfly', label: 'Mayfly larva', color: '#a9e34b', detail: 'Primary consumer — feeds on algae. Eaten by sticklebacks, newts and diving beetles.' },
          { id: 'tadpole', label: 'Tadpole', color: '#66d9e8', detail: 'Primary consumer — eats algae and plant matter. Eaten by diving beetles and herons.' },
          { id: 'stickleback', label: 'Stickleback', color: '#0b7285', detail: 'Secondary consumer — eats snails and mayfly larvae. Eaten by diving beetles, newts and herons.' },
          { id: 'newt', label: 'Newt', color: '#f08c00', detail: 'Predator — eats snails, mayfly larvae and sticklebacks.' },
          { id: 'beetle', label: 'Diving beetle', color: '#e8590c', detail: 'Predator — eats mayfly larvae, tadpoles and sticklebacks.' },
          { id: 'heron', label: 'Heron', color: '#9c36b5', detail: 'Top predator — eats tadpoles and sticklebacks.' },
        ],
        edges: [
          { from: 'algae', to: 'snail' },
          { from: 'algae', to: 'mayfly' },
          { from: 'algae', to: 'tadpole' },
          { from: 'snail', to: 'stickleback' },
          { from: 'snail', to: 'newt' },
          { from: 'mayfly', to: 'stickleback' },
          { from: 'mayfly', to: 'newt' },
          { from: 'mayfly', to: 'beetle' },
          { from: 'tadpole', to: 'beetle' },
          { from: 'tadpole', to: 'heron' },
          { from: 'stickleback', to: 'beetle' },
          { from: 'stickleback', to: 'newt' },
          { from: 'stickleback', to: 'heron' },
        ],
      },
      caption: 'Arrows point from each organism to the animal that eats it (energy flow).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using this food web, **predict** how the number of pond snails will change if there is an increase in the number of mayfly larvae. **Justify** your answer.',
        marks: 1,
        ph: 'Pond snails will decrease because there is more competition (from mayfly larvae) for algae / food.',
      },
      {
        label: 'b',
        text: 'Using this food web, **predict** how the number of pond snails will change if there is a decrease in the number of herons. Use scientific language to justify your answer.',
        marks: 2,
        ph: 'Pond snails will increase because there are fewer herons, so more sticklebacks survive. More sticklebacks eat more snails... OR fewer herons → more sticklebacks → more predation of snails → snails decrease. Accept either direction with correct reasoning using terms: predator, prey, predation, trophic level, consumer...',
      },
      {
        label: 'c',
        text: 'The graph below shows changing population sizes for pond snails and sticklebacks over time.\n\n**Suggest** how the graph could be improved.',
        marks: 1,
        ph: 'Add units to the axes / label axes more clearly / add a scale...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Population sizes of pond snails and sticklebacks over time',
            xLabel: 'Time',
            yLabel: 'Population size',
            dataPoints: [
              { x: 1, y: 40 },
              { x: 2, y: 75 },
              { x: 3, y: 50 },
              { x: 4, y: 20 },
              { x: 5, y: 35 },
              { x: 6, y: 72 },
              { x: 7, y: 52 },
              { x: 8, y: 22 },
            ],
            lobf: false,
            xMin: 0,
            xMax: 8,
            yMin: 0,
            yMax: 80,
            xStep: 1,
            yStep: 20,
          },
          caption: 'Pond snail population over eight time periods (axis units deliberately omitted).',
        },
      },
      {
        label: 'd',
        text: '**Compare** the trend in populations of pond snails and sticklebacks in the graph in part (c) and **explain** each trend using scientific reasoning.',
        marks: 6,
        ph: 'Both populations go up and down (oscillate) over time. The maximum population for each species is approximately the same number per cycle. The maximum for sticklebacks occurs after the maximum for pond snails.\n\nExplanation: As the pond snail population grows, more food is available for sticklebacks, so the stickleback population increases. More sticklebacks eat more snails, so the snail population decreases. With fewer snails (less food), the stickleback population also decreases. With fewer sticklebacks (less predation), the snail population recovers and the cycle repeats...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Fertilizers, Genetics & Drought-tolerant GM crops (14 marks, Criterion A/C)
  // V1: drought-tolerant GM crops
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Fertilizers, Genes & Drought-Tolerant Crops',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Nutrition'],
    marks: 14,
    stem: 'The aim of farming is to produce enough food to feed a growing world population. Changes in the climate are causing more extreme weather, including longer and more severe droughts. These environmental changes can make it impossible to grow food in some parts of the world. Farming methods must adapt to cope with these changing environmental conditions.',
    tasks: [
      {
        label: 'a',
        text: 'Fertilizers are used to increase crop yields. Most fertilizers contain nitrogen, phosphorus and potassium. Plants take in and use these nutrients.\n\n**Explain** how plants take in and use these nutrients.',
        marks: 4,
        ph: 'Nutrients are taken in by the roots by diffusion or active transport. They are transported in the xylem / vascular tissue to the leaves. Nutrients are used in the synthesis of (organic) molecules / amino acids / proteins / plant compounds / for growth...',
      },
      {
        label: 'b',
        text: 'Fertilizers can be produced by the chemical industry, or they can be organic materials such as compost or manure from plant or animal waste.\n\n**Compare and contrast** the use of chemically produced fertilizers with organic-based fertilizers.',
        marks: 4,
        ph: 'Similarity: both increase nutritional value of crops / both give desired minerals to plants / both could cause environmental problems (run-off into water sources).\nDifference: chemical fertilizers may be more expensive / organic fertilizers can be produced on the same farm / chemical fertilizers can be more controlled in terms of nutrient quantity...',
      },
      {
        label: 'c',
        text: 'Scientists have been working to map the genome of different organisms for many years. Surprisingly, the maize (corn) genome consists of approximately 32 000 genes on 10 chromosomes.\n\n**Suggest** the meaning of the term *gene*.',
        marks: 1,
        ph: 'A gene is a section of chromosome / DNA that codes for a protein or trait...',
      },
      {
        label: 'd',
        text: 'Drought-tolerant crops are crops which are genetically modified to survive with less water. Growing them can help farmers in regions where rainfall is becoming less reliable.\n\nThe information below shows different drought-tolerant crops and the year they were introduced:\n- Maize: drought tolerance, Kenya, 2017\n- Wheat: drought tolerance, Australia, 2015\n- Rice: drought tolerance, India, 2014\n- Soybean: drought tolerance, Argentina, 2015\n- Sorghum: drought tolerance, Sudan, 2016\n- Cowpea: drought tolerance, Nigeria, 2019\n\n**Organise and present** this data in an appropriate table.',
        marks: 3,
        ph: 'Table with columns: Crop | Trait added | Country | Year (or similar). At least 4 crops listed. Data ordered logically (by year or alphabetically).',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Crop', 'Trait added', 'Country', 'Year'],
            rows: [
              ['Rice', 'Drought tolerance', 'India', '2014'],
              ['Wheat', 'Drought tolerance', 'Australia', '2015'],
              ['Soybean', 'Drought tolerance', 'Argentina', '2015'],
              ['Sorghum', 'Drought tolerance', 'Sudan', '2016'],
              ['Maize', 'Drought tolerance', 'Kenya', '2017'],
              ['Cowpea', 'Drought tolerance', 'Nigeria', '2019'],
            ],
          },
          caption: 'Worked example of the data organised into a table ordered by year of introduction.',
        },
      },
      {
        label: 'e',
        text: '**Organise** the following statements into the correct order to show how biotechnology can be used to genetically modify a plant.\n\n*(The first step "Genes are cut from two original species" and the last step "The modified plant cell is grown into individual plants" are already given.)*',
        marks: 2,
        ph: 'Correct sequence (steps 2–5):\n1. Restriction enzymes cut open a plasmid\n2. The new genes are inserted into the plasmid\n3. The plasmid is transferred into a bacterium\n4. The modified bacterium inserts the new genes to the plant cell',
        widget: 'match_drag_drop',
        widgetItems: [
          'The plasmid is transferred into a bacterium',
          'The modified bacterium inserts the new genes to the plant cell',
          'Restriction enzymes cut open a plasmid',
          'The new genes are inserted into the plasmid',
        ],
        widgetOptions: ['Step 2', 'Step 3', 'Step 4', 'Step 5'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahgm1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Genetic modification of a plant (steps shown out of order)</text><g><circle cx="80" cy="110" r="28" fill="none" stroke="#0b7285" stroke-width="4"/><path d="M70,86 l8,-6 l8,6" fill="none" stroke="#c0392b" stroke-width="2"/><text x="80" y="160" font-size="9" text-anchor="middle" fill="#0b7285">plasmid cut open</text></g><line x1="118" y1="110" x2="168" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm1)"/><g><circle cx="210" cy="110" r="28" fill="none" stroke="#0b7285" stroke-width="4"/><rect x="200" y="82" width="20" height="8" rx="2" fill="#2f9e44"/><text x="210" y="160" font-size="9" text-anchor="middle" fill="#2f9e44">gene inserted</text></g><line x1="248" y1="110" x2="298" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm1)"/><g><ellipse cx="350" cy="110" rx="34" ry="22" fill="#74c69d" stroke="#1f6b34" stroke-width="2"/><circle cx="350" cy="110" r="12" fill="none" stroke="#0b7285" stroke-width="2"/><text x="350" y="160" font-size="9" text-anchor="middle" fill="#1f6b34">bacterium carries plasmid</text></g><line x1="392" y1="110" x2="442" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm1)"/><g><rect x="470" y="80" width="60" height="60" rx="6" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><circle cx="500" cy="110" r="10" fill="#fff" stroke="#2f9e44"/><rect x="494" y="104" width="12" height="6" rx="1" fill="#2f9e44"/><text x="500" y="160" font-size="9" text-anchor="middle" fill="#2f9e44">gene enters plant cell</text></g></svg>',
          },
          caption: 'The four intermediate steps of plant genetic modification (your task is to put them in the correct order).',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Nitrogen-fixing GM cereals Evaluation (14 marks, Criterion D)
  // V1: nitrogen-fixing GM cereals
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Nitrogen-Fixing GM Cereals — Evaluation & Ethics',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications', 'Nutrition'],
    marks: 14,
    stem: 'Producing enough food while protecting the environment is a global challenge. Most cereal crops, such as wheat, rice and maize, cannot make their own nitrogen fertilizer. Instead, farmers must add large quantities of nitrogen fertilizer to their fields, which is expensive and can pollute rivers.\n\nLegumes such as beans and peas are different: their roots form a partnership with nitrogen-fixing bacteria that convert nitrogen gas from the air into nitrogen compounds the plant can use. Scientists are now trying to genetically modify cereal crops so that they too can fix their own nitrogen, just like legumes.\n\nIf successful, nitrogen-fixing cereals could be grown using far less fertilizer. In a 2018 field trial, an experimental nitrogen-fixing maize variety obtained much of its nitrogen from the air. However, as of 2020 no nitrogen-fixing cereal had been grown commercially.\n\nSome groups are against the introduction of nitrogen-fixing cereals as they claim that the engineered bacteria could spread into the wider environment in unpredictable ways. Another concern is the possibility of this GM type of cereal cross-pollinating with non-GM cereal grown in nearby fields, which could lead to the loss of traditional, locally adapted varieties.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="soil8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9794e"/><stop offset="1" stop-color="#6b4a2b"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Nitrogen-fixing GM cereal</text><rect x="0" y="200" width="600" height="100" fill="url(#soil8)"/><line x1="0" y1="200" x2="600" y2="200" stroke="#4a3320" stroke-width="2"/><g stroke="#2f9e44" stroke-width="4" stroke-linecap="round"><line x1="300" y1="200" x2="300" y2="80"/><line x1="300" y1="120" x2="266" y2="86"/><line x1="300" y1="140" x2="334" y2="104"/></g><ellipse cx="262" cy="80" rx="16" ry="7" fill="#37b24d" transform="rotate(-35 262 80)"/><ellipse cx="338" cy="98" rx="16" ry="7" fill="#37b24d" transform="rotate(35 338 98)"/><ellipse cx="300" cy="70" rx="9" ry="20" fill="#f0c419" stroke="#c79a10"/><text x="318" y="66" font-size="10" fill="#9a7d0f">grain head</text><g stroke="#6b4a2b" stroke-width="3" stroke-linecap="round" fill="none"><path d="M300,200 q-20,30 -40,40"/><path d="M300,200 q20,30 40,40"/><path d="M300,200 q0,40 0,55"/></g><circle cx="258" cy="244" r="9" fill="#e8590c" stroke="#a8531a"/><circle cx="342" cy="244" r="9" fill="#e8590c" stroke="#a8531a"/><circle cx="300" cy="256" r="9" fill="#e8590c" stroke="#a8531a"/><text x="300" y="290" font-size="10" text-anchor="middle" fill="#fbe3cf">root nodules with nitrogen-fixing bacteria</text><text x="150" y="120" font-size="11" fill="#0b7285">N₂ from air</text><path d="M150,128 q40,20 70,28" fill="none" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="4 3"/></svg>',
      },
      caption: 'An experimental nitrogen-fixing cereal: engineered root nodules host bacteria that convert nitrogen gas from the air into usable nitrogen compounds.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the information provided in this question and your wider MYP knowledge, **discuss** and **evaluate** the possible implications of introducing nitrogen-fixing GM cereal crops. In your answer, you should include:\n\n- health impacts of introducing a new GM cereal on an individual\n- environmental impacts of introducing nitrogen-fixing cereal crops in areas where the species has never been cultivated before\n- ethical impacts\n- economic impacts for the local community\n- a concluding recommendation based on the arguments you have discussed.',
        marks: 14,
        ph: 'Health impacts:\n+ Cheaper grain could improve food security and nutrition.\n− Unknown long-term effects of consuming GM food; possible allergens.\n\nEnvironmental impacts:\n+ Far less nitrogen fertilizer needed, so less river pollution / eutrophication and lower greenhouse-gas emissions from fertilizer manufacture.\n− Engineered nitrogen-fixing bacteria could spread to other plants; cross-pollination could lead to loss of traditional varieties; unknown ecosystem effects.\n\nEthical impacts:\n+ Reduces pollution and helps poorer farmers who cannot afford fertilizer.\n− People may not have the choice to avoid GM food; loss of food sovereignty.\n\nEconomic impacts:\n+ Lower fertilizer costs for farmers; supports the local farming economy.\n− Developing GM crops is expensive; farmers may become dependent on biotechnology companies; loss of locally adapted varieties.\n\nConclusion: Nitrogen-fixing cereals could greatly reduce fertilizer pollution and costs if introduced with proper regulation, labelling and protections against environmental harm.',
      },
    ],
  },
]
