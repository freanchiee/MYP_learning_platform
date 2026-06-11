import type { Question } from '@/lib/types'

// VARIANT v2 of biology-may-2025 — isomorphic: same crit, command terms, widgets,
// mark allocations, tags and difficulty as the source. Surface differs from both the
// source and v1. All answers are recomputed in markscheme.ts.

export const paperMeta = {
  id: 'biology-may-2025-v2',
  subject: 'Biology',
  session: 'May',
  year: 2025,
  totalMarks: 88,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ── Q1 — Classification & Biological Molecules (12 marks) Criterion A ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Classification & Biological Molecules',
    topicCanonical: 'Classification',
    topicGroup: 'Organisms',
    topicsAlso: ['Unity & Diversity of Life'],
    marks: 12,
    // FIGURE: constructable taxonomy tree → described as data in stem; no asset needed.
    stem: 'Living organisms can be grouped according to their characteristics. This process is known as classification.\n\nThe diagram below shows how six members of the dog family have been classified into a taxonomic hierarchy. All six species share Kingdom (Animals), Phylum (Chordates), Class (Mammals), Order (Carnivores) and Family (Dogs, Canidae).\n\nThe species are: Gray wolf (Canis lupus), Coyote (Canis latrans), Golden jackal (Canis aureus) — all Genus: Canis; Red fox (Vulpes vulpes) — Genus: Vulpes; African wild dog (Lycaon pictus) — Genus: Lycaon; Maned wolf (Chrysocyon brachyurus) — Genus: Chrysocyon.',
    tasks: [
      {
        label: 'a',
        text: 'Members of the dog family are placed in the animal kingdom. Select the term from the list below that is NOT another kingdom used to classify living things.\n• Animal\n• Virus\n• Fungi\n• Bacteria',
        marks: 1,
        ph: 'Select: Animal / Virus / Fungi / Bacteria',
        widget: 'radio_select',
        widgetOptions: ['Animal', 'Virus', 'Fungi', 'Bacteria'],
      },
      {
        label: 'b',
        text: 'All members of the dog family are classified as mammals. Mammals are a class of animals found in the chordate phylum. State a characteristic common to the chordate phylum and state one other class that belongs to this phylum.',
        marks: 2,
        ph: 'Characteristic of chordates:\n\nAnother class in phylum Chordata:',
      },
      {
        label: 'c',
        text: 'Ethiopian wolves (Canis simensis) are also members of the dog family. Select and justify which species they are most closely related to.',
        marks: 2,
        ph: 'Most closely related to: [select species]\n\nJustification: They share the same genus (Canis)...',
        widget: 'radio_select',
        widgetOptions: ['Gray wolf (Canis lupus)', 'Coyote (Canis latrans)', 'Golden jackal (Canis aureus)', 'Red fox (Vulpes vulpes)', 'African wild dog (Lycaon pictus)', 'Maned wolf (Chrysocyon brachyurus)'],
      },
      {
        label: 'd',
        text: 'Living organisms can also be classified by comparing DNA sequences, as shown below.\n\nGray wolf:     G C A T G C A T G C\nCoyote:        G C A T G C A G T C\nGolden jackal: G A A T C C A T G G\n\nUsing the DNA sequences, justify which two species are most closely related.',
        marks: 1,
        ph: 'The most closely related two species are... because they share the most bases in common (8 out of 10)...',
      },
      {
        label: 'e',
        text: 'All of the species in part (d) have evolved from a common ancestor. Outline why their DNA sequences have changed over time.',
        marks: 2,
        ph: 'DNA sequences change over time due to... (mention mutations and a mechanism such as natural selection or speciation)',
      },
      {
        label: 'f',
        text: 'Proteins can also be compared when classifying organisms. State the name of the building blocks used to make proteins.',
        marks: 1,
        ph: 'Building blocks of proteins are called...',
      },
      {
        label: 'g',
        text: 'Proteins have many different functions in the body. Some proteins are hormones. Identify a hormone released during the "fight-or-flight" response and state its action.',
        marks: 2,
        ph: 'Hormone name:\nAction (what it does to the body):',
      },
      {
        label: 'h',
        text: 'Body temperature, blood sugar and water balance are all maintained within a narrow range. State the name of this regulating process.',
        marks: 1,
        ph: 'The process is called...',
      },
    ],
  },

  // ── Q2 — Gas Exchange & Blood (13 marks) Criterion A ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Gas Exchange & Blood',
    topicCanonical: 'Gas Exchange',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 13,
    // FIGURE: constructable diagram → alveolus/capillary described in stem; no asset needed.
    stem: 'A smart ring can record data about a person\'s body, such as blood oxygen levels, pulse rate and breathing rate. Gas exchange between the air and the blood takes place in the alveoli of the lungs.',
    tasks: [
      {
        label: 'a',
        text: 'Outline how oxygen diffuses into the blood from the alveoli in the lungs.',
        marks: 2,
        ph: 'Oxygen moves from a high concentration (in the alveoli) to a low concentration (in the blood)... through the alveolar membrane...',
      },
      {
        label: 'b',
        text: 'Outline how oxygen is transported within the body by the blood.',
        marks: 2,
        ph: 'Oxygen is transported by red blood cells / bound to haemoglobin... through the circulatory system...',
      },
      {
        label: 'c',
        text: 'A smart ring recorded pulse rate and breathing rate during a swimming session. The wearer swam between 4 and 12 minutes. Pulse rate rose from about 68 to about 128 beats per minute, and breathing rate rose from about 14 to about 34 breaths per minute over this time.\n\nUse the data to explain the changes seen when the wearer was swimming between 4 and 12 minutes.',
        marks: 5,
        ph: 'Between 4 and 12 minutes, the pulse rate increased from ~68 to ~128 bpm and breathing rate from ~14 to ~34. This is because exercising muscles need more energy, so cellular respiration increases, requiring more oxygen and producing more CO₂...',
      },
      {
        label: 'd',
        text: 'The results of blood samples taken from four healthy males are shown below.\n\nTom: WBC=5500, RBC=4,900,000, Platelets=250,000\nRaj: WBC=4800, RBC=5,300,000, Platelets=245,000\nBen: WBC=6200, RBC=4,700,000, Platelets=260,000\nOmar: WBC=9800, RBC=3,500,000, Platelets=280,000\n\nUsing the information, identify the person most likely to resist infection from a virus. Justify your answer.',
        marks: 2,
        ph: 'The person most likely to resist infection is: [select]\nJustification: highest white blood cell count...',
        widget: 'radio_select',
        widgetOptions: ['Tom', 'Raj', 'Ben', 'Omar'],
      },
      {
        label: 'e',
        text: 'The blood samples were taken from four individuals of the same sex to support valid comparisons. Suggest two additional pieces of information that would also increase the validity of a comparison.',
        marks: 2,
        ph: 'Additional information 1:\n\nAdditional information 2:',
      },
    ],
  },

  // ── Q3 — Seed Germination & Light Intensity (10 marks) Criterion B & C ──
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Seed Germination & Light Intensity',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Photosynthesis'],
    marks: 10,
    // FIGURE: constructable data table → values given in stem; no asset needed.
    stem: 'Light is an environmental factor essential for life on Earth. Different seeds need different conditions to germinate. A research lab measured the effect of light intensity on the germination of three seed types (L, M, N) in a germination chamber.\n\nResults (number of seeds germinated out of 10):\nLight 100%: L=10, M=6, N=4\nLight 75%:  L=8,  M=5, N=4\nLight 50%:  L=5,  M=3, N=4\nLight 25%:  L=3,  M=1, N=4\nLight 0%:   L=2,  M=0, N=4',
    tasks: [
      {
        label: 'a',
        text: 'Identify the seed type that had the highest number of germinated seeds at 75% light intensity.',
        marks: 1,
        ph: 'The seed type with the highest germination at 75% light intensity is...',
        widget: 'radio_select',
        widgetOptions: ['Seed type L', 'Seed type M', 'Seed type N'],
      },
      {
        label: 'b',
        text: 'Suggest a reason for conducting the experiment at 0% light intensity.',
        marks: 1,
        ph: 'The reason for including 0% light intensity is... (think about control experiments)',
      },
      {
        label: 'c',
        text: 'Identify a similarity and a difference in germination between seed type L and seed type M.',
        marks: 2,
        ph: 'Similarity:\n\nDifference:',
      },
      {
        label: 'd',
        text: 'Suggest a reason for the results obtained for seed type N.',
        marks: 1,
        ph: 'Seed type N shows an unusual pattern because...',
      },
      {
        label: 'e',
        text: 'State the reason for conducting all experiments inside a germination chamber.',
        marks: 1,
        ph: 'The germination chamber is used to...',
      },
      {
        label: 'f',
        text: 'The lab ran a second trial on two new seed types and recorded germination at different light intensities. Seed type S reaches its maximum germination at 90% light intensity (and stays constant above that). Seed type T reaches its maximum at 75% light intensity (and stays constant above that).\n\nIdentify the lowest light intensity the lab could use to maximize germination for each seed type.',
        marks: 2,
        ph: 'Seed type S: lowest light intensity for maximum germination = ...%\nSeed type T: lowest light intensity for maximum germination = ...%',
      },
      {
        label: 'g',
        text: 'To minimize energy costs and maximize germination, the lab decides to germinate both new seed types in one chamber set to 80% light intensity. Outline whether the lab\'s decision is supported by the data in part (f).',
        marks: 2,
        ph: 'The decision is/is not fully supported because... (refer to the data values for both seed types)',
      },
    ],
  },

  // ── Q4 — Photosynthesis & Plant Growth (14 marks) Criterion A, B & C ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Photosynthesis & Plant Growth',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 14,
    // FIGURE: constructable equation/data → described in text; no asset needed.
    stem: 'Indoor farms use artificial lighting to grow crops. A student decided to investigate the effect of light intensity on the growth of tomato seedlings.',
    tasks: [
      {
        label: 'a',
        text: 'Light is needed for the process of photosynthesis. Select the correct location for each word to show the equation for photosynthesis.\n\nDraggable items: Carbon dioxide, Glucose, Oxygen, Water\n\nThe equation is: [reactant1] + [reactant2] → [product1] + [product2] (with light energy above the arrow)',
        marks: 1,
        ph: 'Arrange: Carbon dioxide + Water → Oxygen + Glucose',
        widget: 'match_drag_drop',
        widgetItems: ['Carbon dioxide', 'Water', 'Oxygen', 'Glucose'],
        widgetOptions: ['Reactant 1 (left of +)', 'Reactant 2 (right of +)', 'Product 1 (after arrow)', 'Product 2 (final +)'],
      },
      {
        label: 'b',
        text: 'A student conducted an experiment to measure the effect of light intensity on the growth of tomato seedlings (stem length measured after a fixed period, temperature kept at 25°C).\n\nIdentify the variables in this investigation.',
        marks: 4,
        ph: 'Independent variable:\nDependent variable:\nControl variable 1:\nControl variable 2:',
        widget: 'variable_classify',
      },
      {
        label: 'c',
        text: 'Explain how increasing light intensity causes an increase in plant growth.',
        marks: 2,
        ph: 'Increasing light intensity increases the rate of photosynthesis, which produces more glucose. This glucose is used for... (growth/respiration/cell division)',
      },
      {
        label: 'd',
        text: 'The student recorded the following tomato stem lengths at different light intensities (20%=26mm, 50%=34mm, 80%=40mm, 100%=40mm). State the measurement at 80% light intensity and calculate the average stem length across all four intensities.',
        marks: 2,
        ph: 'Measurement at 80%: ... mm\nAverage: ... mm',
      },
      {
        label: 'e',
        text: 'The student forgot to include units in the data table. State what units should be added.',
        marks: 1,
        ph: 'The units that should be added to the table are...',
      },
      {
        label: 'f',
        text: 'Using the data, identify at what light intensity plant growth stopped increasing. Outline why growth stopped increasing beyond this point.',
        marks: 1,
        ph: 'Growth stopped increasing at ...% light intensity because...',
      },
      {
        label: 'g',
        text: 'Suggest a way to increase the length of the tomato stem further.',
        marks: 1,
        ph: 'To increase stem length further, the student could...',
      },
      {
        label: 'h',
        text: 'The student predicted that if the light intensity increases then the length of the tomato stem will also increase. Comment on whether the data supports the prediction. You must refer to data in your answer.',
        marks: 2,
        ph: 'The data partially/fully supports the prediction because... (quote specific values)',
      },
    ],
  },

  // ── Q5 — Temperature Effect on Plant Growth (9 marks) Criterion B ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Temperature Effect on Plant Growth',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 9,
    stem: 'The student also wanted to know how temperature affects plant growth. They used the following method:\n1. Select rice seedlings with similar stem lengths.\n2. Place each seedling in an enclosed container with a heater and carbon dioxide controller.\n3. Conduct the experiment at different temperatures: 20°C, 30°C, 40°C, 50°C and 60°C.\n4. Measure the increase in stem length after 15 days.\n5. Repeat the experiment for each temperature.\n\nResults:\nTemperature 20°C → Stem increase 5 mm\nTemperature 30°C → Stem increase 18 mm\nTemperature 40°C → Stem increase 38 mm\nTemperature 50°C → Stem increase 40 mm\nTemperature 60°C → Stem increase 2 mm',
    tasks: [
      {
        label: 'a',
        text: 'State the independent variable in this investigation.',
        marks: 1,
        ph: 'The independent variable is...',
      },
      {
        label: 'b',
        text: 'Present the results of this investigation in a graph. Use the data provided:\n20°C=5mm, 30°C=18mm, 40°C=38mm, 50°C=40mm, 60°C=2mm\n\nYour graph should include: appropriate axes labels with units, a scale with even increments, all five data points plotted correctly.',
        marks: 3,
        ph: 'Describe your graph: x-axis = Temperature (°C), y-axis = Increase in stem length after 15 days (mm). Points: (20,5), (30,18), (40,38), (50,40), (60,2)',
      },
      {
        label: 'c',
        text: 'Explain the results of this investigation. Refer to the data in your answer.\n\nConsider: the trend as temperature increases up to 40–50°C, and what happens beyond 50°C.',
        marks: 5,
        ph: 'As temperature increases from 20°C to 40–50°C, stem growth increases because... Beyond 50°C (at 60°C), growth decreases dramatically to 2mm because enzymes denature / stomata close / photosynthesis stops...',
      },
    ],
  },

  // ── Q6 — Design an Investigation: Fertiliser Concentration & Plant Growth (16 marks) Criterion B ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design: Fertiliser Concentration & Plant Growth',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 16,
    stem: 'Farmers add dissolved fertiliser to crops to supply nutrients, but too much fertiliser can harm plants and pollute waterways.\n\nDesign an investigation to test how changing the concentration of dissolved fertiliser affects plant growth. You are provided with standard laboratory equipment and a range of fertiliser solutions with concentrations between 0 and 10 g/L.\n\nIn your answer, you should include:\n• the independent variable, dependent variable and two controlled variables\n• equipment you will use\n• details of how to manipulate, measure or monitor the variables\n• details of the method you will use to collect sufficient data\n• a safety consideration.',
    tasks: [
      {
        label: 'a',
        text: 'Design a full investigation to test how changing fertiliser concentration affects plant growth. Your answer must include:\n• independent variable, dependent variable and two controlled variables\n• equipment list\n• how to manipulate, measure or monitor each variable\n• method for collecting sufficient data (include repetition/replication)\n• at least one safety consideration',
        marks: 16,
        ph: 'IV: fertiliser concentration (0 to 10 g/L). DV: plant growth (stem length in mm). CVs: temperature, volume of solution added, plant species, light. Equipment: pots, ruler, fertiliser solutions, identical seedlings, labels. Method: water identical plants with different fertiliser concentrations, keep other factors constant, measure stem length at intervals, repeat each concentration ≥3 times. Safety: wear gloves; wash hands after handling fertiliser.',
      },
    ],
  },

  // ── Q7 — Animal Tracking & Conservation (10 marks) Criterion C ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Turtle Tagging & Conservation',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 10,
    // FIGURE: constructable line chart → trends described in tasks; no asset needed.
    stem: 'Tagging animals to follow their movements has been used for over a century. Sea turtles can be tagged with a small numbered flipper tag or a satellite tag, so each turtle can be identified again. Tagging does not harm the turtle, and lets scientists follow migration and survival.\n\nIn 1955, scientists tagged 40 young sea turtles with small numbered flipper tags. Only three of the 40 tags were ever returned, one from over 2000 km away. This was one of the first uses of sea-turtle tagging for scientific research.',
    tasks: [
      {
        label: 'a',
        text: 'A graph shows the change in population size of four sea-turtle populations (Pacific, Atlantic, Indian Ocean, Mediterranean) from 1970–2019. The Mediterranean population declined the most over this period. Select the population whose size has declined the most.',
        marks: 1,
        ph: 'The population with the greatest decline is...',
        widget: 'radio_select',
        widgetOptions: ['Pacific', 'Atlantic', 'Indian Ocean', 'Mediterranean'],
      },
      {
        label: 'b',
        text: 'Turtle tagging data allows scientists to track where a turtle has migrated. Suggest why this information is useful for conservation.',
        marks: 2,
        ph: 'Knowing where turtles migrate is useful because...',
      },
      {
        label: 'c',
        text: 'In 1955, only 3 out of 40 tags were returned. Suggest two reasons why so few tags were returned.',
        marks: 2,
        ph: 'Reason 1:\n\nReason 2:',
      },
      {
        label: 'd',
        text: 'Scientists want to identify patterns in where turtles migrate. They plan to tag 500 turtles from the same beach. Outline one way the scientists could improve the reliability of their data.',
        marks: 2,
        ph: 'To improve reliability, scientists could...',
      },
      {
        label: 'e',
        text: 'Tagging data showed that the Mediterranean turtle population was declining. Suggest one human activity that could be causing this decline and explain how it could be reduced.',
        marks: 3,
        ph: 'Human activity causing decline:\n\nHow it affects sea turtles:\n\nHow it could be reduced:',
      },
    ],
  },

  // ── Q8 — Technology in Animal Research (16 marks) Criterion D ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Technology in Animal Research',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 16,
    stem: 'GPS collars and camera traps provide information about a land animal\'s location and movement. A GPS collar is fitted around an animal\'s neck and records its position regularly. A camera trap is a fixed camera that photographs any animal that passes in front of it.\n\nGPS collars allow scientists to follow an individual animal\'s movements continuously over large areas, for months or years.',
    tasks: [
      {
        label: 'a',
        text: 'State one difference between a GPS collar and a camera trap.',
        marks: 1,
        ph: 'One difference is that a GPS collar... whereas a camera trap...',
      },
      {
        label: 'b',
        text: 'Suggest one advantage and one disadvantage of fitting a GPS collar to an animal.',
        marks: 2,
        ph: 'Advantage:\n\nDisadvantage:',
      },
      {
        label: 'c',
        text: 'Scientists tracked a population of African elephants using GPS collars. The data showed that the elephants spent more time on farmland than previously thought.\n\nDiscuss how this information could be used to help conserve the African elephant population.',
        marks: 4,
        ph: 'This data could be used to... (e.g. identify human–elephant conflict zones, build barriers/corridors, warn farmers, reduce retaliation killing, inform protected-area management)',
      },
      {
        label: 'd',
        text: 'Evaluate the use of technology in studying and conserving animal populations. In your answer, consider both the benefits and limitations of using technology such as GPS collars.\n\nYou should refer to specific examples in your answer.',
        marks: 6,
        ph: 'Benefits: continuous monitoring, large-area coverage, long-term trends... Limitations: collars can affect behaviour/cause injury, high cost, technical failures, expert interpretation needed... Conclusion: weigh both sides.',
      },
      {
        label: 'e',
        text: 'A scientist presents their tracking data to a local farming community. Suggest why it is important for scientists to communicate their findings to non-scientists.',
        marks: 3,
        ph: 'It is important to communicate findings to non-scientists because... (public understanding, community engagement, conservation action, funding support)',
      },
    ],
  },
]
