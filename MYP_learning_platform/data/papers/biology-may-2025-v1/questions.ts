import type { Question } from '@/lib/types'

// VARIANT v1 of biology-may-2025 — isomorphic: same crit, command terms, widgets,
// mark allocations, tags and difficulty as the source. Only the surface (context,
// stimulus, data, numbers) is changed. All answers are recomputed in markscheme.ts.

export const paperMeta = {
  id: 'biology-may-2025-v1',
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
    stem: 'Living organisms can be grouped according to their characteristics. This process is known as classification.\n\nThe diagram below shows how six bear species have been classified into a taxonomic hierarchy. All six species share Kingdom (Animals), Phylum (Chordates), Class (Mammals), Order (Carnivores) and Family (Bears, Ursidae).\n\nThe species are: Brown bear (Ursus arctos), Polar bear (Ursus maritimus), American black bear (Ursus americanus) — all Genus: Ursus; Giant panda (Ailuropoda melanoleuca) — Genus: Ailuropoda; Sun bear (Helarctos malayanus) — Genus: Helarctos; Spectacled bear (Tremarctos ornatus) — Genus: Tremarctos.',
    tasks: [
      {
        label: 'a',
        text: 'Bears are placed in the animal kingdom. Select the term from the list below that is NOT another kingdom used to classify living things.\n• Protist\n• Plant\n• Mineral\n• Fungi',
        marks: 1,
        ph: 'Select: Protist / Plant / Mineral / Fungi',
        widget: 'radio_select',
        widgetOptions: ['Protist', 'Plant', 'Mineral', 'Fungi'],
      },
      {
        label: 'b',
        text: 'All bears are classified as mammals. Mammals are a class of animals found in the chordate phylum. State a characteristic common to the chordate phylum and state one other class that belongs to this phylum.',
        marks: 2,
        ph: 'Characteristic of chordates:\n\nAnother class in phylum Chordata:',
      },
      {
        label: 'c',
        text: 'Asiatic black bears (Ursus thibetanus) are also bears. Select and justify which species of bear they are most closely related to.',
        marks: 2,
        ph: 'Most closely related to: [select species]\n\nJustification: They share the same genus (Ursus)...',
        widget: 'radio_select',
        widgetOptions: ['Brown bear (Ursus arctos)', 'Polar bear (Ursus maritimus)', 'American black bear (Ursus americanus)', 'Giant panda (Ailuropoda melanoleuca)', 'Sun bear (Helarctos malayanus)', 'Spectacled bear (Tremarctos ornatus)'],
      },
      {
        label: 'd',
        text: 'Living organisms can also be classified by comparing DNA sequences, as shown below.\n\nBrown bear: A T C G A C T G A C\nPolar bear: A T C G A C T A G C\nBlack bear: A G C T A G T A G C\n\nUsing the DNA sequences, justify which two species are most closely related.',
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
        text: 'Proteins have many different functions in the body. Some proteins are hormones. Identify a hormone that affects the body\'s metabolic rate and state its action.',
        marks: 2,
        ph: 'Hormone name:\nAction (what it does to metabolic rate):',
      },
      {
        label: 'h',
        text: 'Like metabolic rate, body temperature and water balance are maintained within a narrow range. State the name of this regulating process.',
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
    stem: 'Fitness trackers can record data about a person\'s body, such as blood oxygen levels, pulse rate and breathing rate. Gas exchange between the air and the blood takes place in the alveoli of the lungs.',
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
        text: 'A fitness tracker recorded pulse rate and breathing rate during a cycling session. The wearer cycled between 2 and 8 minutes. Pulse rate rose from about 72 to about 134 beats per minute, and breathing rate rose from about 16 to about 38 breaths per minute over this time.\n\nUse the data to explain the changes seen when the wearer was cycling between 2 and 8 minutes.',
        marks: 5,
        ph: 'Between 2 and 8 minutes, the pulse rate increased from ~72 to ~134 bpm and breathing rate from ~16 to ~38. This is because exercising muscles need more energy, so cellular respiration increases, requiring more oxygen and producing more CO₂...',
      },
      {
        label: 'd',
        text: 'The results of blood samples taken from four healthy females are shown below.\n\nMaya: WBC=5800, RBC=4,700,000, Platelets=255,000\nLeila: WBC=4300, RBC=5,200,000, Platelets=240,000\nSana: WBC=6100, RBC=4,600,000, Platelets=265,000\nPriya: WBC=10100, RBC=3,400,000, Platelets=275,000\n\nUsing the information, identify the person most likely to resist infection from a virus. Justify your answer.',
        marks: 2,
        ph: 'The person most likely to resist infection is: [select]\nJustification: highest white blood cell count...',
        widget: 'radio_select',
        widgetOptions: ['Maya', 'Leila', 'Sana', 'Priya'],
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
    stem: 'Light is an environmental factor essential for life on Earth. Different seeds need different conditions to germinate. A vertical-farming company measured the effect of light intensity on the germination of three seed types (P, Q, R) in a germination chamber.\n\nResults (number of seeds germinated out of 10):\nLight 100%: P=9, Q=7, R=5\nLight 75%:  P=6, Q=5, R=5\nLight 50%:  P=4, Q=2, R=5\nLight 25%:  P=2, Q=1, R=5\nLight 0%:   P=1, Q=0, R=5',
    tasks: [
      {
        label: 'a',
        text: 'Identify the seed type that had the highest number of germinated seeds at 75% light intensity.',
        marks: 1,
        ph: 'The seed type with the highest germination at 75% light intensity is...',
        widget: 'radio_select',
        widgetOptions: ['Seed type P', 'Seed type Q', 'Seed type R'],
      },
      {
        label: 'b',
        text: 'Suggest a reason for conducting the experiment at 0% light intensity.',
        marks: 1,
        ph: 'The reason for including 0% light intensity is... (think about control experiments)',
      },
      {
        label: 'c',
        text: 'Identify a similarity and a difference in germination between seed type P and seed type Q.',
        marks: 2,
        ph: 'Similarity:\n\nDifference:',
      },
      {
        label: 'd',
        text: 'Suggest a reason for the results obtained for seed type R.',
        marks: 1,
        ph: 'Seed type R shows an unusual pattern because...',
      },
      {
        label: 'e',
        text: 'State the reason for conducting all experiments inside a germination chamber.',
        marks: 1,
        ph: 'The germination chamber is used to...',
      },
      {
        label: 'f',
        text: 'The company ran a second trial on two new seed types and recorded germination at different light intensities. Seed type Y reaches its maximum germination at 85% light intensity (and stays constant above that). Seed type Z reaches its maximum at 70% light intensity (and stays constant above that).\n\nIdentify the lowest light intensity the company could use to maximize germination for each seed type.',
        marks: 2,
        ph: 'Seed type Y: lowest light intensity for maximum germination = ...%\nSeed type Z: lowest light intensity for maximum germination = ...%',
      },
      {
        label: 'g',
        text: 'To minimize energy costs and maximize germination, the company decides to germinate both new seed types in one chamber set to 80% light intensity. Outline whether the company\'s decision is supported by the data in part (f).',
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
    stem: 'Greenhouses can increase the carbon dioxide concentration of the air to improve crop yields. A grower decided to investigate the effect of carbon dioxide concentration on plant growth.',
    tasks: [
      {
        label: 'a',
        text: 'Carbon dioxide is needed for the process of photosynthesis. Select the correct location for each word to show the equation for photosynthesis.\n\nDraggable items: Carbon dioxide, Glucose, Oxygen, Water\n\nThe equation is: [reactant1] + [reactant2] → [product1] + [product2] (with light energy above the arrow)',
        marks: 1,
        ph: 'Arrange: Carbon dioxide + Water → Oxygen + Glucose',
        widget: 'match_drag_drop',
        widgetItems: ['Carbon dioxide', 'Water', 'Oxygen', 'Glucose'],
        widgetOptions: ['Reactant 1 (left of +)', 'Reactant 2 (right of +)', 'Product 1 (after arrow)', 'Product 2 (final +)'],
      },
      {
        label: 'b',
        text: 'A grower conducted an experiment to measure the effect of carbon dioxide concentration on plant growth (stem length measured after a fixed period, temperature kept at 25°C).\n\nIdentify the variables in this investigation.',
        marks: 4,
        ph: 'Independent variable:\nDependent variable:\nControl variable 1:\nControl variable 2:',
        widget: 'variable_classify',
      },
      {
        label: 'c',
        text: 'Explain how increasing carbon dioxide concentration causes an increase in plant growth.',
        marks: 2,
        ph: 'Increasing CO₂ concentration increases the rate of photosynthesis, which produces more glucose. This glucose is used for... (growth/respiration/cell division)',
      },
      {
        label: 'd',
        text: 'The grower recorded the following plant stem lengths at different carbon dioxide concentrations (0.04%=28mm, 0.08%=36mm, 0.12%=44mm, 0.16%=44mm). State the measurement at 0.12% and calculate the average stem length across all four concentrations.',
        marks: 2,
        ph: 'Measurement at 0.12%: ... mm\nAverage: ... mm',
      },
      {
        label: 'e',
        text: 'The grower forgot to include units in the data table. State what units should be added.',
        marks: 1,
        ph: 'The units that should be added to the table are...',
      },
      {
        label: 'f',
        text: 'Using the data, identify at what carbon dioxide concentration plant growth stopped increasing. Outline why growth stopped increasing beyond this point.',
        marks: 1,
        ph: 'Growth stopped increasing at ...% CO₂ because...',
      },
      {
        label: 'g',
        text: 'Suggest a way to increase the length of the plant stem further.',
        marks: 1,
        ph: 'To increase stem length further, the grower could...',
      },
      {
        label: 'h',
        text: 'The grower predicted that if the carbon dioxide concentration increases then the length of the plant stem will also increase. Comment on whether the data supports the prediction. You must refer to data in your answer.',
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
    stem: 'The grower also wanted to know how temperature affects plant growth. They used the following method:\n1. Select wheat seedlings with similar stem lengths.\n2. Place each seedling in an enclosed container with a heater and carbon dioxide controller.\n3. Conduct the experiment at different temperatures: 25°C, 30°C, 35°C, 40°C and 45°C.\n4. Measure the increase in stem length after 15 days.\n5. Repeat the experiment for each temperature.\n\nResults:\nTemperature 25°C → Stem increase 8 mm\nTemperature 30°C → Stem increase 20 mm\nTemperature 35°C → Stem increase 40 mm\nTemperature 40°C → Stem increase 41 mm\nTemperature 45°C → Stem increase 3 mm',
    tasks: [
      {
        label: 'a',
        text: 'State the independent variable in this investigation.',
        marks: 1,
        ph: 'The independent variable is...',
      },
      {
        label: 'b',
        text: 'Present the results of this investigation in a graph. Use the data provided:\n25°C=8mm, 30°C=20mm, 35°C=40mm, 40°C=41mm, 45°C=3mm\n\nYour graph should include: appropriate axes labels with units, a scale with even increments, all five data points plotted correctly.',
        marks: 3,
        ph: 'Describe your graph: x-axis = Temperature (°C), y-axis = Increase in stem length after 15 days (mm). Points: (25,8), (30,20), (35,40), (40,41), (45,3)',
      },
      {
        label: 'c',
        text: 'Explain the results of this investigation. Refer to the data in your answer.\n\nConsider: the trend as temperature increases up to 35–40°C, and what happens beyond 40°C.',
        marks: 5,
        ph: 'As temperature increases from 25°C to 35–40°C, stem growth increases because... Beyond 40°C (at 45°C), growth decreases dramatically to 3mm because enzymes denature / stomata close / photosynthesis stops...',
      },
    ],
  },

  // ── Q6 — Design an Investigation: Soil Salinity & Plant Growth (16 marks) Criterion B ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design: Soil Salinity & Plant Growth',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 16,
    stem: 'Irrigation with poor-quality water can increase the salt concentration (salinity) of soil, which can affect plant growth.\n\nDesign an investigation to test how changing soil salinity affects plant growth. You are provided with standard laboratory equipment and a range of salt (sodium chloride) solutions with concentrations between 0% and 5%.\n\nIn your answer, you should include:\n• the independent variable, dependent variable and two controlled variables\n• equipment you will use\n• details of how to manipulate, measure or monitor the variables\n• details of the method you will use to collect sufficient data\n• a safety consideration.',
    tasks: [
      {
        label: 'a',
        text: 'Design a full investigation to test how changing soil salinity affects plant growth. Your answer must include:\n• independent variable, dependent variable and two controlled variables\n• equipment list\n• how to manipulate, measure or monitor each variable\n• method for collecting sufficient data (include repetition/replication)\n• at least one safety consideration',
        marks: 16,
        ph: 'IV: salt concentration (0% to 5%). DV: plant growth (stem length in mm). CVs: temperature, water/solution volume, plant species, light. Equipment: pots, ruler, salt solutions, identical seedlings, labels. Method: water identical plants with different salt concentrations, keep other factors constant, measure stem length at intervals, repeat each concentration ≥3 times. Safety: wear gloves; avoid spills.',
      },
    ],
  },

  // ── Q7 — Animal Tracking & Conservation (10 marks) Criterion C ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Fish Tagging & Conservation',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 10,
    // FIGURE: constructable line chart → trends described in tasks; no asset needed.
    stem: 'Tagging animals to follow their movements has been used for over a century. Fish tagging attaches a small numbered or electronic tag to a fish so it can be identified again. It does not harm the fish or affect its behaviour, and lets scientists follow migration and survival.\n\nIn 1873, scientists tagged 32 young salmon with small numbered metal tags. Only two of the 32 tags were ever returned, one from 140 km away. This was one of the first uses of fish tagging for scientific research.',
    tasks: [
      {
        label: 'a',
        text: 'A graph shows the change in population size of four groups of fish (Coastal fish, Deep-sea fish, River fish, Reef fish) from 1970–2019. River fish declined the most over this period. Select the group of fish whose population size has declined the most.',
        marks: 1,
        ph: 'The group with the greatest population decline is...',
        widget: 'radio_select',
        widgetOptions: ['Coastal fish', 'Deep-sea fish', 'River fish', 'Reef fish'],
      },
      {
        label: 'b',
        text: 'Fish tagging data allows scientists to track where a fish has migrated. Suggest why this information is useful for conservation.',
        marks: 2,
        ph: 'Knowing where fish migrate is useful because...',
      },
      {
        label: 'c',
        text: 'In 1873, only 2 out of 32 tags were returned. Suggest two reasons why so few tags were returned.',
        marks: 2,
        ph: 'Reason 1:\n\nReason 2:',
      },
      {
        label: 'd',
        text: 'Scientists want to identify patterns in where fish migrate. They plan to tag 600 fish from the same river. Outline one way the scientists could improve the reliability of their data.',
        marks: 2,
        ph: 'To improve reliability, scientists could...',
      },
      {
        label: 'e',
        text: 'Tagging data showed that some river fish populations were declining. Suggest one human activity that could be causing this decline and explain how it could be reduced.',
        marks: 3,
        ph: 'Human activity causing decline:\n\nHow it affects river fish:\n\nHow it could be reduced:',
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
    stem: 'Acoustic and satellite tags provide information about a marine animal\'s location and movement. Scientists attach a small tag to an animal. An acoustic tag sends a sound signal to underwater receivers; a satellite tag sends a signal to a satellite when the animal surfaces, which records the animal\'s location.\n\nSatellite tagging allows scientists to record a marine animal\'s location across whole oceans, for months or years.',
    tasks: [
      {
        label: 'a',
        text: 'State one difference between acoustic tagging and satellite tagging.',
        marks: 1,
        ph: 'One difference is that acoustic tagging... whereas satellite tagging...',
      },
      {
        label: 'b',
        text: 'Suggest one advantage and one disadvantage of attaching a tracking tag to an animal.',
        marks: 2,
        ph: 'Advantage:\n\nDisadvantage:',
      },
      {
        label: 'c',
        text: 'Scientists tracked a population of great white sharks using satellite tags. The data showed that the sharks spent more time near popular swimming beaches than previously thought.\n\nDiscuss how this information could be used to help conserve the great white shark population.',
        marks: 4,
        ph: 'This data could be used to... (e.g. identify overlap zones, time beach closures, educate the public, reduce shark culling, inform protected-area management)',
      },
      {
        label: 'd',
        text: 'Evaluate the use of technology in studying and conserving animal populations. In your answer, consider both the benefits and limitations of using technology such as satellite tagging.\n\nYou should refer to specific examples in your answer.',
        marks: 6,
        ph: 'Benefits: continuous monitoring without disturbance, large ocean-scale coverage, long-term trends... Limitations: tags can affect behaviour/cause injury, high cost, technical failures, expert interpretation needed... Conclusion: weigh both sides.',
      },
      {
        label: 'e',
        text: 'A scientist presents their tagging data to a local fishing community. Suggest why it is important for scientists to communicate their findings to non-scientists.',
        marks: 3,
        ph: 'It is important to communicate findings to non-scientists because... (public understanding, community engagement, conservation action, funding support)',
      },
    ],
  },
]
