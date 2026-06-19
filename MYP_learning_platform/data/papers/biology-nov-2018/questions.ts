import type { Question } from '@/lib/types'
import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'

export const paperMeta: PaperMeta = {
  id: 'biology-nov-2018',
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
    stem: 'This question is about diet and exercise. Lifestyle choices are important for health.',
    artefact: {
      component: 'GenericSVG',
      caption: 'Four everyday foods. Each is a main source of one nutrient group: carbohydrate, fat or protein.',
      data: {
        svg: '<svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="220" fill="#ffffff"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four foods and their main nutrient</text><g><ellipse cx="90" cy="120" rx="46" ry="20" fill="#c0392b" stroke="#8a2a1f"/><ellipse cx="90" cy="112" rx="42" ry="16" fill="#fafafa" stroke="#e2e8f0"/><text x="90" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Rice</text><text x="90" y="188" font-size="11" text-anchor="middle" fill="#0b7285">carbohydrate</text></g><g><rect x="222" y="96" width="36" height="44" rx="6" fill="#dbe24a" stroke="#a3a52b"/><rect x="232" y="78" width="16" height="22" rx="3" fill="#6b6f1a"/><circle cx="240" cy="118" r="9" fill="#b9c23a"/><text x="240" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Olive oil</text><text x="240" y="188" font-size="11" text-anchor="middle" fill="#e8590c">fat</text></g><g><path d="M360,92 h48 v44 a8,8 0 0 1 -8,8 h-32 a8,8 0 0 1 -8,-8 Z" fill="#eef4f7" stroke="#9fb6c2"/><rect x="362" y="84" width="44" height="10" rx="3" fill="#d7e6ee" stroke="#9fb6c2"/><text x="384" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Milk</text><text x="384" y="188" font-size="11" text-anchor="middle" fill="#2f9e44">protein</text></g><g><ellipse cx="520" cy="118" rx="50" ry="18" fill="#cfe0e6" stroke="#8fa9b3"/><ellipse cx="520" cy="118" rx="34" ry="11" fill="#9bb0bb"/><path d="M558,118 l16,-9 l0,18 Z" fill="#9bb0bb" stroke="#8fa9b3"/><circle cx="500" cy="114" r="2" fill="#1f2d3a"/><text x="520" y="170" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fish</text><text x="520" y="188" font-size="11" text-anchor="middle" fill="#2f9e44">protein</text></g></svg>',
      },
    },
    tasks: [
      {
        label: 'a',
        text: 'For each item, **select** the main nutrient this food contains.',
        marks: 2,
        ph: 'Rice → Carbohydrates; Olive oil → Fats; Milk → Proteins; Fish → Proteins.',
        widget: 'inline_dropdown_select',
        widgetItems: ['Rice', 'Olive oil', 'Milk', 'Fish'],
        widgetOptions: ['Carbohydrates', 'Fats', 'Proteins'],
      },
      {
        label: 'b',
        text: '**State** why protein is needed as part of a balanced diet.',
        marks: 1,
        ph: 'Protein is needed for...',
      },
      {
        label: 'c',
        text: 'Before going to school, a student eats a cheese sandwich and drinks a glass of orange juice. The cheese sandwich contained 10 g of protein which is equivalent to 20% of the recommended daily intake.\n\n**Calculate** the total mass of protein needed daily.',
        marks: 2,
        ph: 'Show working: 10 g = 20%, so daily protein = ...',
      },
      {
        label: 'd',
        text: 'The nutritional value of the student\'s breakfast is shown in the table below.\n\n**Analyse** the information in the table to discuss whether or not the breakfast is part of a balanced diet.',
        marks: 4,
        ph: 'Yes/No — contains all nutrient groups / vitamin C covered / calcium low / need to know other meals...',
        artefact: {
          component: 'DataTable',
          caption: 'Nutrition facts for the cheese sandwich and the orange juice (percentage of recommended daily intake).',
          data: {
            headers: ['Nutrient', 'Cheese sandwich — daily % per 100 g', 'Orange juice — daily % per 240 cm³'],
            rows: [
              ['Fat', '18', '0'],
              ['Carbohydrates', '9', '9'],
              ['Protein', '20', '0'],
              ['Calcium', '10', '2'],
              ['Vitamin C', '0', '120'],
            ],
          },
        },
      },
      {
        label: 'e',
        text: 'Obesity is a condition where a person\'s body mass is too high. **Outline** two causes of obesity.',
        marks: 2,
        ph: 'Cause 1: ...\nCause 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q2 — Infection & Immunity (12 marks, Criterion A)
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
    stem: 'Some interactions between organisms are harmful. Yearly, thousands of people die because of infection with the bacterium *Vibrio cholerae*, which causes the disease cholera.',
    artefact: {
      component: 'DataTable',
      caption: 'The body\'s natural defences against infection by pathogens such as Vibrio cholerae.',
      data: {
        headers: ['Line of defence', 'Type', 'How it protects the body'],
        rows: [
          ['Skin', 'Physical / chemical barrier', 'Unbroken surface stops pathogens entering; oils and sweat are slightly acidic and inhibit microbes'],
          ['Stomach acid', 'Chemical barrier', 'Low pH kills many pathogens swallowed in food or water'],
          ['White blood cells (phagocytes)', 'Immune response', 'Engulf and digest pathogens that get into the body'],
          ['White blood cells (lymphocytes)', 'Immune response', 'Produce specific antibodies and form memory cells'],
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: '*Vibrio cholerae* is a pathogen.\n\n**State** the meaning of the term *pathogen*.',
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
        text: '*Vibrio cholerae* is transmitted through drinking contaminated water.\n\n**Suggest** why cholera outbreaks often happen after natural disasters, such as hurricanes or floods.',
        marks: 2,
        ph: 'Natural disasters cause... which leads to...',
      },
      {
        label: 'd',
        text: 'The human body has natural defences which protect it from infection.\n\n**Outline** how the skin and white blood cells protect the body from infection.\n\n**Skin:**\n\n**White blood cells:**',
        marks: 2,
        ph: 'Skin: physical barrier / pH / oils / sweat\nWhite blood cells: destroy/eat pathogens / produce antibodies',
      },
      {
        label: 'e',
        text: 'Vaccinations have been developed against many other deadly diseases such as measles and polio. Vaccines work with the body\'s own immune system.\n\n**Explain** how vaccinations lead to immunity.',
        marks: 5,
        ph: 'Vaccine is a weakened/inactive form of pathogen. Triggers white blood cells/lymphocytes. Immune system produces specific antibodies. Memory cells are produced. If exposed again, faster and stronger immune response...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q3 — Leech Phototaxis Investigation (14 marks, Criterion A/B/C)
  // ─────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Leech Phototaxis',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Nervous System'],
    marks: 14,
    stem: 'Plants and animals can both respond to a stimulus in their environment. When a plant responds to a stimulus, it is called a tropism, and when an animal responds to a stimulus, it is called a taxis.\n\nA group of students had just returned from a trip to a stream and had observed leeches hiding under rocks or in the muddy water. They knew that leeches did not have true eyes, but they could detect light and dark and movement. They decided to investigate how leeches responded to light. This would be an example of a phototaxis.\n\nThe students placed leeches in a tank divided into a light half and a dark half. After 10 minutes they counted the number of leeches on each side.',
    artefact: {
      component: 'GenericSVG',
      caption: 'Apparatus: a water tank divided into a brightly lit half and a covered dark half, with a lamp over the light side and a timer.',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="24" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Leech phototaxis apparatus</text><line x1="60" y1="70" x2="170" y2="70" stroke="#868e96" stroke-width="6" stroke-linecap="round"/><line x1="170" y1="70" x2="170" y2="92" stroke="#868e96" stroke-width="6"/><path d="M150,92 h40 l-8,22 h-24 Z" fill="#343a40"/><ellipse cx="170" cy="114" rx="12" ry="4" fill="#ffe066"/><g stroke="#ffd43b" stroke-width="2"><line x1="170" y1="120" x2="158" y2="150"/><line x1="170" y1="120" x2="170" y2="152"/><line x1="170" y1="120" x2="182" y2="150"/></g><rect x="90" y="150" width="300" height="110" fill="none" stroke="#495057" stroke-width="2.5"/><rect x="92" y="180" width="146" height="78" fill="#a5d8ff" opacity="0.7"/><rect x="240" y="180" width="148" height="78" fill="#495057" opacity="0.55"/><rect x="240" y="150" width="150" height="32" fill="#343a40"/><text x="240" y="170" font-size="11" text-anchor="middle" fill="#ffffff">lid (dark cover)</text><line x1="240" y1="150" x2="240" y2="260" stroke="#212529" stroke-width="2" stroke-dasharray="4 3"/><text x="165" y="278" font-size="11" text-anchor="middle" fill="#1864ab">light half</text><text x="314" y="278" font-size="11" text-anchor="middle" fill="#f1f3f5">dark half</text><g fill="#5c3d2e"><path d="M120,222 q10,-10 20,0 q-10,8 -20,0" /><path d="M160,238 q12,-9 22,2 q-12,7 -22,-2" /><path d="M285,212 q11,-9 21,1 q-11,8 -21,-1" /><path d="M320,236 q12,-8 22,2 q-12,7 -22,-2" /><path d="M350,220 q10,-9 20,1 q-10,8 -20,-1" /></g><rect x="430" y="170" width="86" height="60" rx="8" fill="#212529"/><rect x="442" y="184" width="62" height="24" rx="3" fill="#0b3d2e"/><text x="473" y="202" font-size="16" font-weight="700" text-anchor="middle" fill="#51cf66" font-family="monospace">10:00</text><text x="473" y="246" font-size="10" text-anchor="middle" fill="#495057">timer (10 min)</text></svg>',
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the body system related to the leeches\' response to light.',
        marks: 1,
        ph: 'Select one option.',
        widget: 'radio_select',
        widgetOptions: ['Nervous', 'Endocrine', 'Respiratory', 'Digestive'],
      },
      {
        label: 'b',
        text: '**State** one ethical consideration related to the leeches used in the investigation.',
        marks: 1,
        ph: 'One ethical consideration is...',
      },
      {
        label: 'c',
        text: '**Identify** the variables in this investigation. The dependent variable has been completed for you.\n\n- **Independent variable:** ___\n- **Control variable 1:** ___\n- **Control variable 2:** ___\n- **Dependent variable:** Number of leeches on each side after 10 minutes *(given)*',
        marks: 3,
        ph: 'Independent variable: light level/intensity\nControl variable 1: temperature\nControl variable 2: movement around leeches / starting position / number of leeches',
      },
      {
        label: 'd',
        text: '**Formulate** and **explain** a testable hypothesis for this investigation.',
        marks: 3,
        ph: 'Hypothesis: Leeches will prefer the dark side (more leeches on dark side after 10 minutes).\nExplanation: Because leeches are usually found under rocks / avoid light / linked to observed hiding behaviour in stream...',
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
  // Q4 — Cricket Chirping & Temperature (10 marks, Criterion A/B/C)
  // ─────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Animal Behaviour — Cricket Chirping',
    topicCanonical: 'Nervous System',
    topicGroup: 'Interactions with Environment',
    marks: 10,
    stem: 'After studying the leeches, the students decided to look into another animal behaviour. One student said she was tired because a cricket chirping in her room had kept her from sleeping. She found information that indicated you could estimate the temperature based on the rate of a cricket chirping, so she decided to investigate this topic.\n\nThe students placed individual crickets in aquariums at 15°C, 20°C, and 25°C and recorded the number of chirps per minute for five crickets at each temperature.',
    artefact: {
      component: 'GraphSim',
      caption: 'The students\' mean chirp data plotted against temperature, with the axes deliberately left unlabelled. Drag the cursor to read off a value.',
      data: {
        mode: 'readoff',
        xAxis: { label: 'axis values', min: 0, max: 40, tick: 5 },
        yAxis: { label: 'axis values', min: 0, max: 180, tick: 20 },
        points: [
          [15, 83],
          [20, 127],
          [25, 168],
        ],
        dataMaxX: 25,
      },
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the kingdom that includes crickets.',
        marks: 1,
        ph: 'The kingdom is...',
      },
      {
        label: 'b',
        text: 'The students predicted that the rate of cricket chirps would be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature.\n\n**Explain** the students\' prediction using scientific reasoning.',
        marks: 3,
        ph: 'At low temperatures, reactions (and enzyme activity) are slower, so chirping rate is lower. As temperature increases, enzyme activity increases so chirp rate increases. Above an optimal temperature, enzymes denature and stop functioning so chirp rate decreases again...',
      },
      {
        label: 'c',
        text: 'The students collected the following data:\n\n**Table A:**\n| Temperature / °C | Cricket 1 | Cricket 2 | Cricket 3 | Cricket 4 | Cricket 5 | Mean |\n|---|---|---|---|---|---|---|\n| 15 | 91 | 80 | 89 | 78 | 77 | |\n| 20 | 135 | 124 | 130 | 125 | 121 | |\n| 25 | 180 | 169 | 176 | 158 | 157 | |\n\n**Table B** (same raw data plus a Mean row).\n\nThe students need to calculate means. **Select** which table is more appropriate for calculating means. **Justify** your answer.',
        marks: 1,
        ph: 'Table B is more appropriate because means should be calculated for each temperature (not for each cricket across different temperatures).',
        widget: 'radio_select',
        widgetOptions: ['Table A', 'Table B'],
        artefact: {
          component: 'DataTable',
          caption: 'Number of chirps per minute for each cricket. The Mean column is left blank for the students to complete.',
          data: {
            headers: ['Temperature / °C', 'Cricket 1', 'Cricket 2', 'Cricket 3', 'Cricket 4', 'Cricket 5', 'Mean'],
            rows: [
              ['15', '91', '80', '89', '78', '77', '—'],
              ['20', '135', '124', '130', '125', '121', '—'],
              ['25', '180', '169', '176', '158', '157', '—'],
            ],
          },
        },
      },
      {
        label: 'd',
        text: 'The students\' mean data is plotted on a graph.\n\n**State** appropriate labels for each axis of the graph.\n\n- x-axis: ___\n- y-axis: ___',
        marks: 3,
        ph: 'x-axis: Temperature / °C\ny-axis: Number of chirps per minute',
      },
      {
        label: 'e',
        text: 'The prediction the students made at the start of the experiment was: *"The rate of cricket chirps will be low at low temperatures, increase at warm temperatures, and decrease again above a certain temperature."*\n\nUse the graph to **comment on the validity of the method** used to test this prediction.',
        marks: 2,
        ph: 'The data supports the middle part of the prediction (rate increases with temperature from 15–25°C). However, the method gave insufficient data to test whether the rate decreases above a certain temperature — not enough temperatures investigated...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q5 — Woodlice Investigation Design (15 marks, Criterion B)
  // ─────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Investigation Design — Woodlice Behaviour',
    topicCanonical: 'Senses',
    topicGroup: 'Interactions with Environment',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 15,
    stem: 'The students were interested in studying the behaviour of another animal. They discovered that woodlice (from the genus Armadillidiidae) are small terrestrial crustaceans with segmented exoskeletons. They have many common names including pill bugs, potato bugs, slaters, and roly-polies. Woodlice live in cool, dark and damp environments, and feed on plant material.\n\nYou are provided with a choice chamber and some additional items: Choice chamber, Green leaves, Light meter, Gravel, Cucumber, Carrot, Lamp, Thermometer, Woodlice, Four types of paper with different transparency, Apple, Sand, Twigs, Pebbles, Potato.',
    artefact: {
      component: 'DataTable',
      caption: 'The choice chamber and additional items provided. Choose one factor (food, light intensity or surface material) to investigate.',
      data: {
        headers: ['Item provided', 'Useful for investigating…'],
        rows: [
          ['Choice chamber', 'Giving the woodlice two conditions to choose between'],
          ['Woodlice', 'The organism whose behaviour is studied'],
          ['Lamp + light meter', 'Setting and measuring light intensity'],
          ['Four papers of different transparency', 'Changing light intensity reaching each side'],
          ['Thermometer', 'Checking temperature is kept constant (control)'],
          ['Green leaves, cucumber, carrot, apple, potato', 'Different foods to test a food preference'],
          ['Gravel, sand, twigs, pebbles', 'Different surface materials to test a surface preference'],
        ],
      },
    },
    tasks: [
      {
        label: '',
        text: '**Select** one factor to investigate:\n\n- Food\n- Light intensity\n- Surface material\n\nThen **design** an investigation to study the relationship between the behaviour of the woodlice and your chosen factor. In your investigation, you should include:\n\n- an identification of the independent, dependent and control variables\n- a hypothesis that your method will test\n- how you will manipulate the variables\n- a description of your method\n- how you will collect sufficient data\n- a description of how you will ensure your method is ethical',
        marks: 15,
        ph: 'Factor chosen: e.g. Light intensity\n\nIndependent variable: light intensity (lamp distance from choice chamber)\nDependent variable: number of woodlice in each section of the choice chamber after 10 minutes\nControl variables: temperature, type of surface, starting position of woodlice\n\nHypothesis: If light intensity increases, woodlice will move to the darker section because woodlice prefer cool, dark environments.\n\nMethod: Set up choice chamber with two sections. Place lamp at different distances for each condition. Place 10 woodlice in the centre. Wait 10 minutes. Count woodlice in each section. Repeat 3 times.\n\nData collection: record number in each section for each light level, calculate means.\n\nEthics: handle woodlice gently, return to natural habitat after experiment.',
        widget: 'radio_select',
        widgetOptions: ['Food', 'Light intensity', 'Surface material'],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q6 — Woodland Food Web (10 marks, Criterion C)
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
    stem: 'Woodlice are eaten by several animals in the simplified woodland food web below. The arrows point from each organism to the organism that eats it (the direction energy flows).',
    artefact: {
      component: 'NetworkGraph',
      caption: 'Arrows point from prey to predator (in the direction energy flows). Hover a species to see what it eats and what eats it.',
      data: {
        title: 'Simplified woodland food web',
        nodes: [
          { id: 'plant', label: 'Plant material', color: '#2f9e44', detail: 'Producer — eaten by woodlice, worms and rabbits' },
          { id: 'woodlice', label: 'Woodlice', color: '#8a6d3b', detail: 'Primary consumer — eaten by rats and badgers' },
          { id: 'worm', label: 'Worm', color: '#c2255c', detail: 'Primary consumer — eaten by rats, badgers and foxes' },
          { id: 'rabbit', label: 'Rabbit', color: '#e8590c', detail: 'Primary consumer — eaten by foxes and owls' },
          { id: 'rat', label: 'Rat', color: '#9c36b5', detail: 'Eats woodlice and worms; eaten by foxes, badgers and owls' },
          { id: 'badger', label: 'Badger', color: '#1971c2', detail: 'Predator of woodlice, worms and rats' },
          { id: 'fox', label: 'Fox', color: '#f08c00', detail: 'Predator of worms, rabbits and rats' },
          { id: 'owl', label: 'Owl', color: '#495057', detail: 'Top predator of rabbits and rats' },
        ],
        edges: [
          { from: 'plant', to: 'woodlice' },
          { from: 'plant', to: 'worm' },
          { from: 'plant', to: 'rabbit' },
          { from: 'woodlice', to: 'rat' },
          { from: 'woodlice', to: 'badger' },
          { from: 'worm', to: 'rat' },
          { from: 'worm', to: 'badger' },
          { from: 'worm', to: 'fox' },
          { from: 'rabbit', to: 'fox' },
          { from: 'rabbit', to: 'owl' },
          { from: 'rat', to: 'fox' },
          { from: 'rat', to: 'badger' },
          { from: 'rat', to: 'owl' },
        ],
      },
    },
    tasks: [
      {
        label: 'a',
        text: 'Using this food web, **predict** how the number of woodlice will change if there is an increase in the number of worms. **Justify** your answer.',
        marks: 1,
        ph: 'Woodlice will decrease because there is more competition (from worms) for plant material / food.',
      },
      {
        label: 'b',
        text: 'Using this food web, **predict** how the number of woodlice will change if there is a decrease in the number of owls. Use scientific language to justify your answer.',
        marks: 2,
        ph: 'Woodlice will increase because there are fewer owls, so more rats survive. More rats eat more woodlice... OR fewer owls → more rats → more predation of woodlice → woodlice decrease. Accept either direction with correct reasoning using terms: predator, prey, predation, trophic level, consumer...',
      },
      {
        label: 'c',
        text: 'The graph below shows changing population sizes for woodlice and rats over time.\n\n**Suggest** how the graph could be improved.',
        marks: 1,
        ph: 'Add units to the axes / label axes more clearly / add a scale...',
        artefact: {
          component: 'GenericSVG',
          caption: 'Changing population size for a population of woodlice and a population of rats (axes have no scale or units).',
          data: {
            svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="300" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Changing population size of woodlice and rats</text><line x1="60" y1="40" x2="60" y2="250" stroke="#111" stroke-width="1.5"/><line x1="60" y1="250" x2="520" y2="250" stroke="#111" stroke-width="1.5"/><text transform="rotate(-90)" x="-145" y="26" font-size="12" text-anchor="middle" fill="#374151">Population</text><text x="290" y="278" font-size="12" text-anchor="middle" fill="#374151">Time</text><path d="M60,150 C100,70 140,70 175,150 C210,230 250,230 290,150 C330,70 370,70 405,150 C440,230 480,230 515,150" fill="none" stroke="#1971c2" stroke-width="2" stroke-dasharray="5 3"/><path d="M95,150 C135,70 175,70 210,150 C245,230 285,230 325,150 C365,70 405,70 440,150 C475,230 515,230 545,150" fill="none" stroke="#212529" stroke-width="2"/><g font-size="11"><rect x="400" y="44" width="14" height="3" fill="#1971c2"/><text x="420" y="49" fill="#1864ab">Woodlice</text><line x1="400" y1="63" x2="414" y2="63" stroke="#212529" stroke-width="2.5"/><text x="420" y="67" fill="#212529">Rats</text></g></svg>',
          },
        },
      },
      {
        label: 'd',
        text: '**Compare** the trend in populations of woodlice and rats in the graph in part (c) and **explain** each trend using scientific reasoning.',
        marks: 6,
        ph: 'Both populations go up and down (oscillate) over time. The maximum population for each species is approximately the same number per cycle. The maximum for rats occurs after the maximum for woodlice.\n\nExplanation: As woodlice population grows, more food is available for rats, so rat population increases. More rats eat more woodlice, so woodlice population decreases. With fewer woodlice (less food), rat population also decreases. With fewer rats (less predation), woodlice population recovers and the cycle repeats...',
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q7 — Fertilizers, Genetics & Biofortification (14 marks, Criterion A/C/D)
  // ─────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Fertilizers, Genes & Biofortified Crops',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Nutrition'],
    marks: 14,
    stem: 'The aim of farming is to produce enough food with a high nutritional content in order to provide a balanced diet across the world. Changes in the environment are causing more extreme weather which leads to severe floods and droughts. These environmental changes can make it impossible to grow food in some parts of the world. Farming methods must adapt to cope with these changing environmental conditions.',
    artefact: {
      component: 'GenericSVG',
      caption: 'Plant roots absorb nitrogen, phosphorus and potassium from the soil; these travel up the xylem to the leaves where they are used to build proteins and other molecules for growth.',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ahN" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="560" height="320" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">How a plant takes in and uses mineral nutrients</text><rect x="0" y="200" width="560" height="120" fill="#efe3cf"/><line x1="0" y1="200" x2="560" y2="200" stroke="#b89b6a" stroke-width="2"/><text x="20" y="220" font-size="11" fill="#8a6d3b">soil contains N, P, K from fertilizer</text><line x1="280" y1="200" x2="280" y2="90" stroke="#3a7d44" stroke-width="6"/><path d="M280,90 q-50,-20 -78,-2 M280,90 q50,-20 78,-2 M280,70 q-40,-24 -64,-8 M280,70 q40,-24 64,-8" fill="none" stroke="#3a7d44" stroke-width="4"/><ellipse cx="196" cy="80" rx="30" ry="14" fill="#5cb85c"/><ellipse cx="364" cy="80" rx="30" ry="14" fill="#5cb85c"/><ellipse cx="220" cy="56" rx="26" ry="12" fill="#5cb85c"/><ellipse cx="340" cy="56" rx="26" ry="12" fill="#5cb85c"/><g stroke="#8a6d3b" stroke-width="3" fill="none"><path d="M280,200 q-30,40 -60,70 M280,200 q30,40 60,70 M280,210 q-10,40 -16,80 M280,210 q10,40 16,80"/></g><line x1="240" y1="250" x2="276" y2="120" stroke="#2f9e44" stroke-width="2.2" stroke-dasharray="4 3" marker-end="url(#ahN)"/><text x="120" y="262" font-size="11" fill="#2f9e44">1. roots absorb N, P, K (active transport / diffusion)</text><line x1="285" y1="170" x2="285" y2="100" stroke="#2f9e44" stroke-width="2.2" stroke-dasharray="4 3" marker-end="url(#ahN)"/><text x="300" y="150" font-size="11" fill="#0b7285">2. carried up the xylem</text><text x="300" y="64" font-size="11" fill="#1f2d3a">3. used to make proteins, for growth</text></svg>',
      },
    },
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
        text: 'Scientists have been working to map the genome of different organisms for many years. Surprisingly, the rice genome consists of approximately 40 000 genes on 12 chromosomes.\n\n**Suggest** the meaning of the term *gene*.',
        marks: 1,
        ph: 'A gene is a section of chromosome / DNA that codes for a protein or trait...',
      },
      {
        label: 'd',
        text: 'Biofortified crops are crops which are genetically modified to contain additional nutritional value. Food from these crops can be used to give nutrients to people suffering from specific nutritional deficiencies.\n\nThe information below shows different biofortified crops and the year they were introduced:\n- Maize: Beta-carotene, Zambia, 2012\n- Millet: Iron, India, 2012\n- Wheat: Zinc, Pakistan, 2013\n- Sweet potato: Beta-carotene, Uganda, 2007\n- Beans: Iron, Rwanda, 2012\n- Cassava: Beta-carotene, Nigeria, 2011\n\n**Organise and present** this data in an appropriate table.',
        marks: 3,
        ph: 'Table with columns: Crop | Nutrient added | Country | Year (or similar). At least 4 crops listed. Data ordered logically (by year or alphabetically).',
        artefact: {
          component: 'DataTable',
          caption: 'Six biofortified crops, the nutrient added, the country and the year introduced — the raw data to organise and present.',
          data: {
            headers: ['Crop', 'Added nutrient', 'Country', 'Year introduced'],
            rows: [
              ['Maize', 'Beta-carotene', 'Zambia', '2012'],
              ['Millet', 'Iron', 'India', '2012'],
              ['Wheat', 'Zinc', 'Pakistan', '2013'],
              ['Sweet potato', 'Beta-carotene', 'Uganda', '2007'],
              ['Beans', 'Iron', 'Rwanda', '2012'],
              ['Cassava', 'Beta-carotene', 'Nigeria', '2011'],
            ],
          },
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
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Q8 — Biofortified Food Crops Evaluation (14 marks, Criterion D)
  // ─────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Biofortification — Evaluation & Ethics',
    topicCanonical: 'Genetic Modification',
    topicGroup: 'Biotechnology',
    topicsAlso: ['Ethical Implications', 'Nutrition'],
    marks: 14,
    stem: 'Getting the right nutrition is essential for our health and well-being. Food scarcity and poor nutrition are global problems that affect societies worldwide.\n\nBiofortified crops are crops which are genetically modified to contain additional nutritional value. The most common consequence of vitamin A deficiency is blindness. Other conditions include night blindness, weakened immune function, cancer, and birth defects when the mother had vitamin A deficiency during pregnancy.\n\nGolden rice is a genetically modified form of rice which contains beta-carotene in its grains. Beta-carotene is needed by the human body to produce vitamin A. Non-modified rice grains do not contain beta-carotene. In 2009, results of a clinical trial of golden rice carried out with adult volunteers found that beta-carotene from golden rice is effectively converted to vitamin A. Despite these results, as of March 2016, golden rice has not yet been grown commercially.\n\nSome groups are against the introduction of golden rice as they claim that people will eat this genetically modified rice without having the choice not to. Another concern is the possibility of this GM type of rice cross-pollinating with non-GM rice grown in nearby fields. This could lead to various types of rice being created that were unintentionally created, eventually leading to the loss of the non-modified form of rice.\n\nResearch continues in the biotechnology field of fortified foods and in 2016, the World Food Prize went to biofortified sweet potatoes.',
    artefact: {
      component: 'GenericSVG',
      caption: 'Vitamin A deficiency can cause blindness and night blindness, weaken the immune system, raise cancer risk, and cause birth defects during pregnancy.',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="26" font-size="15" font-weight="700" text-anchor="middle" fill="#1f2d3a">Consequences of <tspan fill="#c0392b">vitamin A deficiency</tspan></text><g><circle cx="120" cy="100" r="34" fill="#fdecea" stroke="#c0392b" stroke-width="2"/><ellipse cx="120" cy="100" rx="18" ry="10" fill="#fff" stroke="#c0392b"/><circle cx="120" cy="100" r="5" fill="#7a3d12"/><line x1="98" y1="120" x2="142" y2="80" stroke="#c0392b" stroke-width="3"/><text x="120" y="156" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Blindness /</text><text x="120" y="171" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">night blindness</text></g><g><circle cx="300" cy="100" r="34" fill="#fff7e6" stroke="#e8590c" stroke-width="2"/><circle cx="300" cy="100" r="16" fill="#ffd8a8"/><g stroke="#e8590c" stroke-width="2"><line x1="300" y1="78" x2="300" y2="70"/><line x1="316" y1="84" x2="322" y2="78"/><line x1="284" y1="84" x2="278" y2="78"/><line x1="320" y1="100" x2="328" y2="100"/><line x1="280" y1="100" x2="272" y2="100"/></g><text x="300" y="156" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Weakened</text><text x="300" y="171" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">immune function</text></g><g><circle cx="120" cy="230" r="34" fill="#f3e8f7" stroke="#9c36b5" stroke-width="2"/><circle cx="120" cy="230" r="13" fill="#9c36b5" opacity="0.5"/><circle cx="120" cy="230" r="6" fill="#9c36b5"/><text x="120" y="286" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Increased</text><text x="120" y="301" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">cancer risk</text></g><g><circle cx="300" cy="230" r="34" fill="#fde8ef" stroke="#c2255c" stroke-width="2"/><circle cx="300" cy="222" r="9" fill="#f7c6d8"/><path d="M300,232 q-12,8 -12,22 h24 q0,-14 -12,-22 Z" fill="#f7c6d8"/><text x="300" y="286" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">Birth defects</text><text x="300" y="301" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">(in pregnancy)</text></g><g><rect x="404" y="70" width="140" height="190" rx="10" fill="#eef4f7" stroke="#7fa6b1"/><circle cx="474" cy="108" r="20" fill="#f1c6a0"/><rect x="456" y="128" width="36" height="90" rx="14" fill="#f1c6a0"/><text x="474" y="240" font-size="11" text-anchor="middle" fill="#5b6b78">whole-body</text><text x="474" y="254" font-size="11" text-anchor="middle" fill="#5b6b78">health affected</text></g></svg>',
      },
    },
    tasks: [
      {
        label: '',
        text: 'Using the information provided in this question and your wider MYP knowledge, **discuss** and **evaluate** the possible implications of introducing biofortified food crops. In your answer, you should include:\n\n- health impacts of introducing a new biofortified food on an individual\n- environmental impacts of introducing biofortified food crops in areas where the species has never been cultivated before\n- ethical impacts\n- economic impacts for the local community\n- a concluding recommendation based on the arguments you have discussed.',
        marks: 14,
        ph: 'Health impacts:\n+ Biofortified crops (e.g. golden rice) can reduce vitamin A deficiency, blindness, immune dysfunction, birth defects.\n− Unknown long-term effects of consuming GM food; may replace dietary variety.\n\nEnvironmental impacts:\n+ Reduces need for chemical supplements distributed separately.\n− Cross-pollination with non-GM crops could lead to loss of natural rice varieties; may become invasive; unknown ecosystem effects.\n\nEthical impacts:\n+ Reduces suffering from nutrient deficiencies in developing nations.\n− People may not have the choice to avoid GM food; loss of food sovereignty.\n\nEconomic impacts:\n+ May reduce healthcare costs related to deficiency diseases; supports local farming economy.\n− Developing GM crops is expensive; farmers may become dependent on biotechnology companies; loss of locally adapted varieties.\n\nConclusion: Biofortified crops can be a valuable tool in addressing malnutrition if introduced with proper regulation, labelling, and protections to prevent environmental harm.',
      },
    ],
  },
]
