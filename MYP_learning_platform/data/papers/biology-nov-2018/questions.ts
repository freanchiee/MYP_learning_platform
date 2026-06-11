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
    figImages: ['/images/papers/biology-nov-2018/page-01.png'],
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
        text: 'The nutritional value of the student\'s breakfast is shown below.\n\n**Cheese sandwich (per 100 g):** Fat 18%, Carbohydrates 9%, Protein 20%, Calcium 10%, Vitamin C 0%\n\n**Orange juice (per 240 cm³):** Fat 0%, Carbohydrates 9%, Protein 0%, Calcium 2%, Vitamin C 120%\n\n**Analyse** the information in the tables to discuss whether or not the breakfast is part of a balanced diet.',
        marks: 4,
        ph: 'Yes/No — contains all nutrient groups / vitamin C covered / calcium low / need to know other meals...',
        figImages: ['/images/papers/biology-nov-2018/page-03.png'],
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
    figImages: [
      '/images/papers/biology-nov-2018/page-06.png',
      '/images/papers/biology-nov-2018/page-07.png',
    ],
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
    figImages: [
      '/images/papers/biology-nov-2018/page-10.png',
      '/images/papers/biology-nov-2018/page-11.png',
      '/images/papers/biology-nov-2018/page-12.png',
    ],
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
    figImages: [
      '/images/papers/biology-nov-2018/page-13.png',
      '/images/papers/biology-nov-2018/page-14.png',
    ],
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
    stem: 'Woodlice are eaten by several animals in the simplified woodland food web below:\n\nFood web: Various types of plant material → Woodlice → Rat, Badger; Worm → Rat, Badger, Fox; Rabbit → Fox, Owl; Rat → Fox, Badger, Owl',
    figImages: [
      '/images/papers/biology-nov-2018/page-15.png',
      '/images/papers/biology-nov-2018/page-16.png',
    ],
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
        figImages: ['/images/papers/biology-nov-2018/page-17.png'],
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
    figImages: ['/images/papers/biology-nov-2018/page-17.png'],
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
        figImages: ['/images/papers/biology-nov-2018/page-19.png'],
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
        figImages: ['/images/papers/biology-nov-2018/page-20.png'],
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
    figImages: [
      '/images/papers/biology-nov-2018/page-21.png',
      '/images/papers/biology-nov-2018/page-22.png',
    ],
    tasks: [
      {
        label: '',
        text: 'Using the information provided in this question and your wider MYP knowledge, **discuss** and **evaluate** the possible implications of introducing biofortified food crops. In your answer, you should include:\n\n- health impacts of introducing a new biofortified food on an individual\n- environmental impacts of introducing biofortified food crops in areas where the species has never been cultivated before\n- ethical impacts\n- economic impacts for the local community\n- a concluding recommendation based on the arguments you have discussed.',
        marks: 14,
        ph: 'Health impacts:\n+ Biofortified crops (e.g. golden rice) can reduce vitamin A deficiency, blindness, immune dysfunction, birth defects.\n− Unknown long-term effects of consuming GM food; may replace dietary variety.\n\nEnvironmental impacts:\n+ Reduces need for chemical supplements distributed separately.\n− Cross-pollination with non-GM crops could lead to loss of natural rice varieties; may become invasive; unknown ecosystem effects.\n\nEthical impacts:\n+ Reduces suffering from nutrient deficiencies in developing nations.\n− People may not have the choice to avoid GM food; loss of food sovereignty.\n\nEconomic impacts:\n+ May reduce healthcare costs related to deficiency diseases; supports local farming economy.\n− Developing GM crops is expensive; farmers may become dependent on biotechnology companies; loss of locally adapted varieties.\n\nConclusion: Biofortified crops can be a valuable tool in addressing malnutrition if introduced with proper regulation, labelling, and protections to prevent environmental harm.',
        figImages: ['/images/papers/biology-nov-2018/page-23.png'],
      },
    ],
  },
]
