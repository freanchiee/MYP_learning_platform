import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

// ════════════════════════════════════════════════════════════════════════════
// BIOLOGY — November 2018 · VARIANT 2  (isomorphic to biology-nov-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget, tags) in a NEW biological context, with self-contained
// data-driven artefacts (no external image files). Numbers recomputed throughout.
// v2 contexts differ from BOTH the source AND v1.
//   Q1 Diet & nutrition:   cheese-sandwich breakfast → hiker’s packed lunch
//   Q2 Infection/immunity: Vibrio cholerae (cholera) → Plasmodium / malaria
//   Q3 Phototaxis design:  leeches in a tank → brine shrimp in a tank
//   Q4 Behaviour vs temp:  cricket chirps → firefly flash rate
//   Q5 Crit B design:      woodlice choice chamber → earthworm choice chamber
//   Q6 Food web/pop-dyn:   woodland (woodlice/rats) → grassland (grasshoppers/voles)
//   Q7 Fertilizer/GM:      biofortified rice → salt-tolerant GM crops
//   Q8 Crit D evaluation:  golden rice → vaccine-producing GM bananas
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2018-v2',
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
  // V2: hiker’s packed lunch; 14 g protein = 28% RDI → 50 g
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
    stem: 'This question is about diet and exercise. A hiker prepares a packed lunch to eat during a full-day mountain walk. Lifestyle choices are important for health.',
    artefact: {
      component: 'PieChart',
      data: {
        kind: 'doughnut',
        title: 'Energy provided by the hiker’s packed lunch',
        unit: '%',
        series: [
          { name: 'Carbohydrates', value: 50, color: '#f08c00' },
          { name: 'Fats', value: 32, color: '#0b7285' },
          { name: 'Proteins', value: 18, color: '#2f9e44' },
        ],
      },
      caption: 'Proportion of energy supplied by each nutrient group in the hiker’s packed lunch.',
    },
    tasks: [
      {
        label: 'a',
        text: 'For each item, **select** the main nutrient this food contains.',
        marks: 2,
        ph: 'Bread → Carbohydrates; Avocado → Fats; Cheese → Fats or Proteins; Beans → Proteins.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Bread', 'Avocado', 'Cheese', 'Beans'],
        widgetOptions: ['Carbohydrates', 'Fats', 'Proteins'],
      },
      {
        label: 'b',
        text: '**State** why fats are needed as part of a balanced diet.',
        marks: 1,
        ph: 'Fats are needed for...',
      },
      {
        label: 'c',
        text: 'For lunch, the hiker eats a bean wrap and a piece of cheese. The bean wrap contained 14 g of protein which is equivalent to 28% of the recommended daily intake.\n\n**Calculate** the total mass of protein needed daily.',
        marks: 2,
        ph: 'Show working: 14 g = 28%, so daily protein = ...',
      },
      {
        label: 'd',
        text: 'The nutritional value of the hiker\'s packed lunch is shown below.\n\n**Bean wrap (per 100 g):** Fat 8%, Carbohydrates 20%, Protein 28%, Iron 14%, Vitamin C 5%\n\n**Piece of cheese (per 30 g):** Fat 18%, Carbohydrates 0%, Protein 14%, Calcium 20%, Vitamin C 0%\n\n**Analyse** the information in the tables to discuss whether or not the lunch is part of a balanced diet.',
        marks: 4,
        ph: 'Yes/No — contains all three nutrient groups / good source of protein and iron / very little vitamin C / need to know what else was eaten during the day...',
      },
      {
        label: 'e',
        text: 'Coronary heart disease can develop when a person\'s diet contains too much saturated fat over a long period of time. **Outline** two causes of coronary heart disease.',
        marks: 2,
        ph: 'Cause 1: ...\nCause 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Infection & Immunity (12 marks, Criterion A)
  // V2: Plasmodium falciparum (malaria)
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
    stem: 'Some interactions between organisms are harmful. Each year, hundreds of thousands of people die after infection with the microorganism *Plasmodium*, a single-celled parasite that causes the disease malaria.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="para2" cx="0.4" cy="0.35"><stop offset="0" stop-color="#b197d8"/><stop offset="1" stop-color="#9c36b5"/></radialGradient></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">How the body defends against the malaria parasite</text><rect x="40" y="60" width="160" height="180" rx="10" fill="#fdebd0" stroke="#f08c00" stroke-width="2"/><text x="120" y="84" font-size="12" font-weight="700" text-anchor="middle" fill="#b5651d">Skin barrier</text><rect x="60" y="96" width="120" height="14" fill="#f5cba7"/><rect x="60" y="112" width="120" height="14" fill="#f3c099"/><rect x="60" y="128" width="120" height="14" fill="#f0b48a"/><text x="120" y="170" font-size="10" text-anchor="middle" fill="#7a4a1e">physical barrier</text><text x="120" y="186" font-size="10" text-anchor="middle" fill="#7a4a1e">acidic pH · oils</text><ellipse cx="300" cy="150" rx="30" ry="22" fill="url(#para2)" stroke="#6b1f86" stroke-width="2"/><circle cx="300" cy="150" r="9" fill="#5a1670"/><text x="300" y="195" font-size="11" text-anchor="middle" fill="#6b1f86">Plasmodium (pathogen)</text><circle cx="470" cy="150" r="46" fill="#eaf3f7" stroke="#0b7285" stroke-width="2"/><circle cx="470" cy="150" r="18" fill="#a5d8e6" stroke="#0b7285"/><path d="M470,104 q-34,8 -30,46 q-4,40 30,46 q34,-6 30,-46 q4,-38 -30,-46 Z" fill="none" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="3 3"/><text x="470" y="214" font-size="11" text-anchor="middle" fill="#0b7285">white blood cell</text><line x1="332" y1="150" x2="420" y2="150" stroke="#c0392b" stroke-width="2" stroke-dasharray="5 4"/><text x="378" y="138" font-size="10" text-anchor="middle" fill="#c0392b">engulf &amp; destroy</text></svg>',
      },
      caption: 'The skin acts as a barrier, and white blood cells engulf and destroy pathogens that get inside the body.',
    },
    tasks: [
      {
        label: 'a',
        text: '*Plasmodium* is a pathogen.\n\n**State** the meaning of the term *pathogen*.',
        marks: 1,
        ph: 'A pathogen is...',
      },
      {
        label: 'b',
        text: '**List** two life processes that a single-celled parasite has in common with other living organisms.',
        marks: 2,
        ph: 'Life process 1: ...\nLife process 2: ...',
      },
      {
        label: 'c',
        text: '*Plasmodium* is transmitted to humans through the bite of an infected mosquito, which breeds in standing water.\n\n**Suggest** why malaria outbreaks often happen after heavy rains and flooding.',
        marks: 2,
        ph: 'Heavy rain causes... which leads to...',
      },
      {
        label: 'd',
        text: 'The human body has natural defences which protect it from infection.\n\n**Outline** how the skin and white blood cells protect the body from infection.\n\n**Skin:**\n\n**White blood cells:**',
        marks: 2,
        ph: 'Skin: physical barrier / pH / oils / sweat\nWhite blood cells: destroy/eat pathogens / produce antibodies',
      },
      {
        label: 'e',
        text: 'Vaccinations have been developed against many deadly diseases such as measles and polio, and the first malaria vaccines are now being used. Vaccines work with the body\'s own immune system.\n\n**Explain** how vaccinations lead to immunity.',
        marks: 5,
        ph: 'Vaccine is a weakened/inactive form of pathogen. Triggers white blood cells/lymphocytes. Immune system produces specific antibodies. Memory cells are produced. If exposed again, faster and stronger immune response...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Brine Shrimp Phototaxis Investigation (14 marks, Criterion B)
  // V2: brine shrimp, light/dark tank
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Brine Shrimp Phototaxis',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 14,
    stem: 'Plants and animals can both respond to a stimulus in their environment. When a plant responds to a stimulus, it is called a tropism, and when an animal responds to a stimulus, it is called a taxis.\n\nA group of students were studying brine shrimp (genus *Artemia*), tiny crustaceans that live in salty lakes. The students had read that newly hatched brine shrimp swim towards light, which helps them find the algae they feed on near the water surface. They decided to investigate how brine shrimp respond to light. This would be an example of a phototaxis.\n\nThe students placed brine shrimp in a tank divided into a brightly lit half and a dark half. After 10 minutes they counted the number of brine shrimp on each side.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lampb" cx="0.5" cy="0.3"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Brine shrimp phototaxis tank</text><circle cx="160" cy="70" r="24" fill="url(#lampb)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="160" y1="98" x2="140" y2="130"/><line x1="160" y1="98" x2="160" y2="132"/><line x1="160" y1="98" x2="180" y2="130"/></g><text x="160" y="58" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><rect x="60" y="150" width="240" height="90" rx="4" fill="#cdeefb" stroke="#3f7e98" stroke-width="2"/><rect x="300" y="150" width="240" height="90" rx="4" fill="#1f3a4d" stroke="#3f7e98" stroke-width="2"/><line x1="300" y1="150" x2="300" y2="240" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4"/><text x="180" y="258" font-size="11" text-anchor="middle" fill="#2c5468">lit half</text><text x="420" y="258" font-size="11" text-anchor="middle" fill="#cdd9e0">dark half</text><g fill="#e8772e"><ellipse cx="150" cy="185" rx="9" ry="3"/><ellipse cx="190" cy="200" rx="9" ry="3"/><ellipse cx="230" cy="190" rx="9" ry="3"/><ellipse cx="260" cy="210" rx="9" ry="3"/></g><g fill="#caa472"><ellipse cx="370" cy="195" rx="9" ry="3"/><ellipse cx="430" cy="215" rx="9" ry="3"/></g><text x="300" y="146" font-size="10" text-anchor="middle" fill="#0b7285">divider</text></svg>',
      },
      caption: 'Brine shrimp are placed in the centre of a tank that is lit on one half and dark on the other; their positions are counted after 10 minutes.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the body system related to the brine shrimp\'s response to light.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Nervous', 'Endocrine', 'Respiratory', 'Digestive'],
      },
      {
        label: 'b',
        text: '**State** one ethical consideration related to the brine shrimp used in the investigation.',
        marks: 1,
        ph: 'One ethical consideration is...',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation. The dependent variable has been completed for you.\n\n- **Independent variable:** ___\n- **Control variable 1:** ___\n- **Control variable 2:** ___\n- **Dependent variable:** Number of brine shrimp on each side after 10 minutes *(given)*',
        marks: 3,
        ph: 'Independent variable: light level/intensity\nControl variable 1: water temperature\nControl variable 2: salt concentration / starting position / number of brine shrimp',
      },
      {
        label: 'd',
        text: '**Formulate** and **explain** a testable hypothesis for this investigation.',
        marks: 3,
        ph: 'Hypothesis: Brine shrimp will prefer the lit side (more brine shrimp on the lit side after 10 minutes).\nExplanation: Because brine shrimp swim towards light to find algae near the surface / linked to the feeding behaviour described...',
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
  // Q4 — Firefly Flash Rate & Temperature (10 marks, Criterion B/C)
  // V2: firefly flash rate vs temperature; 15/20/25 °C
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Animal Behaviour — Firefly Flash Rate',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    marks: 10,
    stem: 'After studying the brine shrimp, the students decided to look into another animal behaviour. One student noticed that on warm summer evenings the fireflies in her garden flashed much more often than on cool evenings. She found information suggesting that the flash rate of a firefly depends on temperature, so she decided to investigate this topic.\n\nThe students placed individual fireflies in clear chambers kept at 15°C, 20°C, and 25°C and recorded the number of flashes per minute for five fireflies at each temperature.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Mean flash rate of fireflies at different temperatures',
        xLabel: 'Temperature',
        yLabel: 'Mean number of flashes per minute',
        xUnit: '°C',
        yUnit: 'min⁻¹',
        dataPoints: [
          { x: 15, y: 9 },
          { x: 20, y: 14 },
          { x: 25, y: 20 },
        ],
        xMin: 10,
        xMax: 30,
        yMin: 0,
        yMax: 25,
        xStep: 5,
        yStep: 5,
      },
      caption: 'Mean number of flashes per minute by fireflies at 15°C, 20°C and 25°C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the kingdom that includes fireflies.',
        marks: 1,
        ph: 'The kingdom is...',
      },
      {
        label: 'b',
        text: 'The students predicted that the flash rate of the fireflies would be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature.\n\n**Explain** the students\' prediction using scientific reasoning.',
        marks: 3,
        ph: 'At low temperatures, reactions (and enzyme activity) are slower, so flash rate is lower. As temperature increases, enzyme activity increases so flash rate increases. Above an optimal temperature, enzymes denature and stop functioning so flash rate decreases again...',
      },
      {
        label: 'c',
        text: 'The students collected the following data:\n\n**Table A:**\n| Temperature / °C | Firefly 1 | Firefly 2 | Firefly 3 | Firefly 4 | Firefly 5 | Mean |\n|---|---|---|---|---|---|---|\n| 15 | 10 | 8 | 9 | 9 | 9 | |\n| 20 | 15 | 13 | 14 | 14 | 14 | |\n| 25 | 21 | 19 | 20 | 20 | 20 | |\n\n**Table B** (same raw data plus a Mean row).\n\nThe students need to calculate means. **Select** which table is more appropriate for calculating means. **Justify** your answer.',
        marks: 1,
        ph: 'Table B is more appropriate because means should be calculated for each temperature (not for each firefly across different temperatures).',
        widget: 'radio_select',
        widgetOptions: ['Table A', 'Table B'],
      },
      {
        label: 'd',
        text: 'The students\' mean data is plotted on a graph.\n\n**State** appropriate labels for each axis of the graph.\n\n- x-axis: ___\n- y-axis: ___',
        marks: 3,
        ph: 'x-axis: Temperature / °C\ny-axis: Number of flashes per minute',
      },
      {
        label: 'e',
        text: 'The prediction the students made at the start of the experiment was: *"The flash rate of the fireflies will be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature."*\n\nUse the graph to **comment on the validity of the method** used to test this prediction.',
        marks: 2,
        ph: 'The data supports the middle part of the prediction (flash rate increases with temperature from 15–25°C). However, the method gave insufficient data to test whether the flash rate decreases above a certain temperature — not enough temperatures investigated...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Earthworm Investigation Design (15 marks, Criterion B)
  // V2: earthworm choice chamber
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Earthworm Behaviour',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 15,
    stem: 'The students were interested in studying the behaviour of another animal. They discovered that earthworms (from the genus *Lumbricus*) are soft-bodied invertebrates with segmented bodies and no eyes, but they can sense light, moisture and touch through their skin. Earthworms live in moist, dark soil and feed on decaying plant material.\n\nYou are provided with a choice chamber and some additional items: Choice chamber, Dead leaves, Light meter, Dry soil, Damp soil, Carrot, Lamp, Thermometer, Earthworms, Four types of paper with different transparency, Grass clippings, Moist filter paper, Gravel, Compost, Sand.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lampe" cx="0.5" cy="0.3"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><text x="300" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Earthworm choice chamber</text><circle cx="300" cy="64" r="22" fill="url(#lampe)" stroke="#c79a10"/><text x="300" y="50" font-size="10" text-anchor="middle" fill="#9a7d0f">lamp</text><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="300" y1="86" x2="280" y2="112"/><line x1="300" y1="86" x2="300" y2="114"/><line x1="300" y1="86" x2="320" y2="112"/></g><circle cx="300" cy="180" r="80" fill="none" stroke="#5b6b78" stroke-width="3"/><path d="M300,100 A80,80 0 0 1 300,260" fill="#cdb89a" stroke="#5b6b78" stroke-width="1"/><path d="M300,100 A80,80 0 0 0 300,260" fill="#5a3f28" stroke="#5b6b78" stroke-width="1"/><line x1="300" y1="100" x2="300" y2="260" stroke="#5b6b78" stroke-width="1.5" stroke-dasharray="4 3"/><text x="355" y="184" font-size="11" text-anchor="middle" fill="#6b4a2b">dry soil</text><text x="245" y="184" font-size="11" text-anchor="middle" fill="#e7d8c4">damp soil</text><rect x="334" y="150" width="36" height="22" rx="3" fill="#e0c9a6" stroke="#b08a3c"/><text x="352" y="165" font-size="8" text-anchor="middle" fill="#6b4f1e">dry</text><rect x="232" y="150" width="36" height="22" rx="3" fill="#7a5a3c" stroke="#4a3320"/><text x="250" y="165" font-size="8" text-anchor="middle" fill="#eee">damp</text><g stroke="#c0392b" stroke-width="4" stroke-linecap="round" fill="none"><path d="M310,205 q12,8 22,2"/><path d="M270,210 q-12,8 -22,2"/></g><text x="300" y="278" font-size="10" text-anchor="middle" fill="#5b6b78">earthworms placed in the centre</text></svg>',
      },
      caption: 'A choice chamber lets a researcher offer earthworms two conditions at once and count how many move to each side.',
    },
    tasks: [
      {
        label: '',
        text: '**Select** one factor to investigate:\n\n- Food\n- Light intensity\n- Moisture level\n\nThen **design** an investigation to study the relationship between the behaviour of the earthworms and your chosen factor. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will collect sufficient data\n- a description of how you will ensure your method is ethical',
        marks: 15,
        ph: 'Factor chosen: e.g. Moisture level\n\nIndependent variable: moisture level (damp soil vs dry soil side of choice chamber)\nDependent variable: number of earthworms in each section after 10 minutes\nControl variables: temperature, light level, starting position of earthworms\n\nHypothesis: If moisture decreases, earthworms will move to the damper section because earthworms prefer moist, dark soil.\n\nMethod: Set up choice chamber with two sections (damp soil / dry soil). Place 10 earthworms in the centre. Wait 10 minutes. Count earthworms in each section. Repeat 3 times.\n\nData collection: record number in each section for each condition, calculate means.\n\nEthics: handle earthworms gently with damp hands, return them to their habitat after the experiment.',
        widget: 'radio_select',
        widgetOptions: ['Food', 'Light intensity', 'Moisture level'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Grassland Food Web (10 marks, Criterion C)
  // V2: grassland food web; grass/grasshoppers/voles/kestrels
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
    stem: 'Grasshoppers are eaten by several animals in the simplified grassland food web below:\n\nFood web: Grass → Grasshopper, Vole, Rabbit; Grasshopper → Shrew, Lizard; Vole → Kestrel, Fox; Rabbit → Fox, Kestrel; Shrew → Kestrel, Fox.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Simplified grassland food web',
        nodes: [
          { id: 'grass', label: 'Grass', color: '#2f9e44', detail: 'Producer — makes its own food by photosynthesis. Eaten by grasshoppers, voles and rabbits.' },
          { id: 'grasshopper', label: 'Grasshopper', color: '#94d82d', detail: 'Primary consumer — eats grass. Eaten by shrews and lizards.' },
          { id: 'vole', label: 'Vole', color: '#a9e34b', detail: 'Primary consumer — eats grass. Eaten by kestrels and foxes.' },
          { id: 'rabbit', label: 'Rabbit', color: '#ffd43b', detail: 'Primary consumer — eats grass. Eaten by foxes and kestrels.' },
          { id: 'shrew', label: 'Shrew', color: '#0b7285', detail: 'Secondary consumer — eats grasshoppers. Eaten by kestrels and foxes.' },
          { id: 'lizard', label: 'Lizard', color: '#15aabf', detail: 'Secondary consumer — eats grasshoppers.' },
          { id: 'kestrel', label: 'Kestrel', color: '#9c36b5', detail: 'Top predator — eats voles, rabbits and shrews.' },
          { id: 'fox', label: 'Fox', color: '#e8590c', detail: 'Top predator — eats voles, rabbits and shrews.' },
        ],
        edges: [
          { from: 'grass', to: 'grasshopper' },
          { from: 'grass', to: 'vole' },
          { from: 'grass', to: 'rabbit' },
          { from: 'grasshopper', to: 'shrew' },
          { from: 'grasshopper', to: 'lizard' },
          { from: 'vole', to: 'kestrel' },
          { from: 'vole', to: 'fox' },
          { from: 'rabbit', to: 'fox' },
          { from: 'rabbit', to: 'kestrel' },
          { from: 'shrew', to: 'kestrel' },
          { from: 'shrew', to: 'fox' },
        ],
      },
      caption: 'Arrows point from each organism to the animal that eats it (energy flow).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using this food web, **predict** how the number of grasshoppers will change if there is an increase in the number of voles. **Justify** your answer.',
        marks: 1,
        ph: 'Grasshoppers will decrease because there is more competition (from voles) for grass / food.',
      },
      {
        label: 'b',
        text: 'Using this food web, **predict** how the number of grasshoppers will change if there is a decrease in the number of kestrels. Use scientific language to justify your answer.',
        marks: 2,
        ph: 'Grasshoppers may decrease because fewer kestrels means more shrews survive, and shrews eat grasshoppers. OR fewer kestrels → more voles/shrews → more predation of grasshoppers → grasshoppers decrease. Accept either direction with correct reasoning using terms: predator, prey, predation, trophic level, consumer...',
      },
      {
        label: 'c',
        text: 'The graph below shows changing population sizes for grasshoppers and shrews over time.\n\n**Suggest** how the graph could be improved.',
        marks: 1,
        ph: 'Add units to the axes / label axes more clearly / add a scale...',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Population sizes of grasshoppers and shrews over time',
            xLabel: 'Time',
            yLabel: 'Population size',
            dataPoints: [
              { x: 1, y: 45 },
              { x: 2, y: 80 },
              { x: 3, y: 55 },
              { x: 4, y: 25 },
              { x: 5, y: 38 },
              { x: 6, y: 78 },
              { x: 7, y: 58 },
              { x: 8, y: 28 },
            ],
            lobf: false,
            xMin: 0,
            xMax: 8,
            yMin: 0,
            yMax: 90,
            xStep: 1,
            yStep: 15,
          },
          caption: 'Grasshopper population over eight time periods (axis units deliberately omitted).',
        },
      },
      {
        label: 'd',
        text: '**Compare** the trend in populations of grasshoppers and shrews in the graph in part (c) and **explain** each trend using scientific reasoning.',
        marks: 6,
        ph: 'Both populations go up and down (oscillate) over time. The maximum population for each species is approximately the same number per cycle. The maximum for shrews occurs after the maximum for grasshoppers.\n\nExplanation: As the grasshopper population grows, more food is available for shrews, so the shrew population increases. More shrews eat more grasshoppers, so the grasshopper population decreases. With fewer grasshoppers (less food), the shrew population also decreases. With fewer shrews (less predation), the grasshopper population recovers and the cycle repeats...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Fertilizers, Genetics & Salt-tolerant GM crops (14 marks, Criterion A/C)
  // V2: salt-tolerant GM crops
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Fertilizers, Genes & Salt-Tolerant Crops',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Nutrition'],
    marks: 14,
    stem: 'The aim of farming is to produce enough food to feed a growing world population. As sea levels rise and irrigation leaves salt behind in the soil, more and more farmland is becoming too salty for ordinary crops to grow. These environmental changes can make it impossible to grow food in some parts of the world. Farming methods must adapt to cope with these changing environmental conditions.',
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
        text: 'Scientists have been working to map the genome of different organisms for many years. Surprisingly, the tomato genome consists of approximately 35 000 genes on 12 chromosomes.\n\n**Suggest** the meaning of the term *gene*.',
        marks: 1,
        ph: 'A gene is a section of chromosome / DNA that codes for a protein or trait...',
      },
      {
        label: 'd',
        text: 'Salt-tolerant crops are crops which are genetically modified to grow in soil with a high salt content. Growing them can help farmers in regions where soils are becoming salty.\n\nThe information below shows different salt-tolerant crops and the year they were introduced:\n- Rice: salt tolerance, Bangladesh, 2016\n- Tomato: salt tolerance, Israel, 2013\n- Barley: salt tolerance, Australia, 2014\n- Wheat: salt tolerance, Egypt, 2017\n- Soybean: salt tolerance, China, 2015\n- Quinoa: salt tolerance, Peru, 2018\n\n**Organise and present** this data in an appropriate table.',
        marks: 3,
        ph: 'Table with columns: Crop | Trait added | Country | Year (or similar). At least 4 crops listed. Data ordered logically (by year or alphabetically).',
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Crop', 'Trait added', 'Country', 'Year'],
            rows: [
              ['Tomato', 'Salt tolerance', 'Israel', '2013'],
              ['Barley', 'Salt tolerance', 'Australia', '2014'],
              ['Soybean', 'Salt tolerance', 'China', '2015'],
              ['Rice', 'Salt tolerance', 'Bangladesh', '2016'],
              ['Wheat', 'Salt tolerance', 'Egypt', '2017'],
              ['Quinoa', 'Salt tolerance', 'Peru', '2018'],
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
            svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahgm2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="200" fill="#ffffff"/><text x="300" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Genetic modification of a plant (steps shown out of order)</text><g><circle cx="80" cy="110" r="28" fill="none" stroke="#0b7285" stroke-width="4"/><path d="M70,86 l8,-6 l8,6" fill="none" stroke="#c0392b" stroke-width="2"/><text x="80" y="160" font-size="9" text-anchor="middle" fill="#0b7285">plasmid cut open</text></g><line x1="118" y1="110" x2="168" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm2)"/><g><circle cx="210" cy="110" r="28" fill="none" stroke="#0b7285" stroke-width="4"/><rect x="200" y="82" width="20" height="8" rx="2" fill="#2f9e44"/><text x="210" y="160" font-size="9" text-anchor="middle" fill="#2f9e44">gene inserted</text></g><line x1="248" y1="110" x2="298" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm2)"/><g><ellipse cx="350" cy="110" rx="34" ry="22" fill="#74c69d" stroke="#1f6b34" stroke-width="2"/><circle cx="350" cy="110" r="12" fill="none" stroke="#0b7285" stroke-width="2"/><text x="350" y="160" font-size="9" text-anchor="middle" fill="#1f6b34">bacterium carries plasmid</text></g><line x1="392" y1="110" x2="442" y2="110" stroke="#0b7285" stroke-width="2" marker-end="url(#ahgm2)"/><g><rect x="470" y="80" width="60" height="60" rx="6" fill="#dff0d8" stroke="#2f9e44" stroke-width="2"/><circle cx="500" cy="110" r="10" fill="#fff" stroke="#2f9e44"/><rect x="494" y="104" width="12" height="6" rx="1" fill="#2f9e44"/><text x="500" y="160" font-size="9" text-anchor="middle" fill="#2f9e44">gene enters plant cell</text></g></svg>',
          },
          caption: 'The four intermediate steps of plant genetic modification (your task is to put them in the correct order).',
        },
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Vaccine-Producing GM Bananas Evaluation (14 marks, Criterion D)
  // V2: edible-vaccine GM bananas
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Vaccine-Producing GM Bananas — Evaluation & Ethics',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications', 'Nutrition'],
    marks: 14,
    stem: 'Getting protection from disease is essential for our health and well-being. In many parts of the world, vaccines are difficult to deliver because they must be kept cold and injected by trained health workers, which is hard to do in remote villages.\n\nScientists are developing genetically modified bananas that contain harmless pieces of a pathogen. When a person eats one of these "edible-vaccine" bananas, their immune system reacts to these pieces and builds up immunity, just as it would after an injected vaccine. Bananas are a useful choice because they are eaten raw, grow in many poorer countries, and do not need refrigeration before being eaten.\n\nIn early laboratory trials, GM plants were shown to produce the harmless pathogen pieces in their fruit, and animals that ate them produced antibodies. However, as of 2020 no edible-vaccine banana had been approved for use in people.\n\nSome groups are against the introduction of vaccine-producing bananas as they claim it would be hard to control the exact dose each person receives. Another concern is the possibility of this GM type of banana cross-pollinating with ordinary banana crops, which could lead to vaccine genes spreading into the normal food supply.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="ban8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe066"/><stop offset="1" stop-color="#f0c419"/></linearGradient></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="28" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Vaccine-producing GM banana</text><path d="M120,90 q120,-30 230,40 q60,40 110,30 q-40,40 -120,40 q-150,10 -230,-90 q-10,-30 10,-50 Z" fill="url(#ban8)" stroke="#c79a10" stroke-width="2"/><path d="M120,90 q-6,-20 6,-30 l18,8 q-10,12 -4,28 Z" fill="#5a3f28" stroke="#3a2818"/><text x="300" y="150" font-size="12" font-weight="700" text-anchor="middle" fill="#7a5a08">GM banana</text><circle cx="430" cy="118" r="8" fill="#9c36b5" stroke="#6b1f86"/><circle cx="400" cy="138" r="6" fill="#9c36b5" stroke="#6b1f86"/><circle cx="455" cy="135" r="6" fill="#9c36b5" stroke="#6b1f86"/><text x="430" y="100" font-size="9" text-anchor="middle" fill="#6b1f86">harmless pathogen pieces</text><circle cx="480" cy="225" r="44" fill="#eaf3f7" stroke="#0b7285" stroke-width="2"/><circle cx="480" cy="225" r="16" fill="#a5d8e6" stroke="#0b7285"/><text x="480" y="284" font-size="10" text-anchor="middle" fill="#0b7285">immune system responds</text><line x1="430" y1="150" x2="466" y2="195" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="180" y="240" font-size="11" text-anchor="middle" fill="#5b6b78">eaten raw · no refrigeration needed</text></svg>',
      },
      caption: 'An experimental edible-vaccine banana: the GM fruit produces harmless pieces of a pathogen that trigger the eater’s immune system.',
    },
    tasks: [
      {
        label: '',
        text: 'Using the information provided in this question and your wider MYP knowledge, **discuss** and **evaluate** the possible implications of introducing vaccine-producing GM banana crops. In your answer, you should include:\n\n- health impacts of introducing a new edible-vaccine food on an individual\n- environmental impacts of introducing vaccine-producing crops in areas where the species has never been cultivated before\n- ethical impacts\n- economic impacts for the local community\n- a concluding recommendation based on the arguments you have discussed.',
        marks: 14,
        ph: 'Health impacts:\n+ Edible-vaccine bananas could protect people from disease without injections or refrigeration, reaching remote villages.\n− Hard to control the exact dose each person receives; possible over- or under-dosing; unknown long-term effects of GM food.\n\nEnvironmental impacts:\n+ Reduces need for cold-chain transport and disposable needles.\n− Cross-pollination with ordinary bananas could spread vaccine genes into the normal food supply; unknown ecosystem effects in new growing areas.\n\nEthical impacts:\n+ Saves lives and reaches people who cannot access injected vaccines.\n− People may eat the vaccine without consent or full information; loss of choice and food sovereignty.\n\nEconomic impacts:\n+ Cheaper to grow and distribute than injected vaccines; supports local banana farming.\n− Developing GM crops is expensive; farmers may depend on biotechnology companies; risk to ordinary banana exports if crops are mixed.\n\nConclusion: Vaccine-producing bananas could greatly improve access to immunity if introduced with strict dose control, labelling and protections against cross-pollination.',
      },
    ],
  },
]
