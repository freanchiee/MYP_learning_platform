import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'biology-may-2025',
  subject: 'Biology',
  session: 'May',
  year: 2025,
  totalMarks: 88,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Classification & Biological Molecules (12 marks) Criterion A & D
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Classification & Biological Molecules',
    topicCanonical: 'Classification',
    topicGroup: 'Organisms',
    topicsAlso: ['Unity & Diversity of Life'],
    marks: 12,
    stem: 'Living organisms can be grouped according to their characteristics. This process is known as classification.\n\nThe diagram below shows how six different big cat species have been classified into a taxonomic hierarchy. All six species share Kingdom (Animals), Phylum (Chordates), Class (Mammals), Order (Carnivores) and Family (Felines).\n\nThe species are: Jaguar (Panthera onca), Tiger (Panthera tigris), Lion (Panthera leo) — all Genus: Panthera; Clouded leopard (Neofelis nebulosa) — Genus: Neofelis; Cheetah (Acinonyx jubatus) — Genus: Acinonyx; Cougar (Puma concolor) — Genus: Puma.',
    figImages: [
      '/images/papers/biology-may-2025/page-01.png',
      '/images/papers/biology-may-2025/page-02.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Big cats are placed in the animal kingdom. Select the term from the list below that is NOT another kingdom used to classify living things.\n• Bacteria\n• Fungi\n• Plant\n• Virus',
        marks: 1,
        ph: 'Select: Bacteria / Fungi / Plant / Virus',
        widget: 'radio_select',
        widgetOptions: ['Bacteria', 'Fungi', 'Plant', 'Virus'],
      },
      {
        label: 'b',
        text: 'All big cats are classified as mammals. Mammals are a class of animals found in the chordate phylum. State a characteristic common to the chordate phylum and state one other class that belongs to this phylum.',
        marks: 2,
        ph: 'Characteristic of chordates:\n\nAnother class in phylum Chordata:',
      },
      {
        label: 'c',
        text: 'Snow leopards (Panthera uncia) are also big cats. Select and justify which species of cat they are most closely related to.',
        marks: 2,
        ph: 'Most closely related to: [select species]\n\nJustification: They share the same genus (Panthera), meaning they share more classification levels...',
        widget: 'radio_select',
        widgetOptions: ['Jaguar (Panthera onca)', 'Tiger (Panthera tigris)', 'Lion (Panthera leo)', 'Clouded leopard (Neofelis nebulosa)', 'Cheetah (Acinonyx jubatus)', 'Cougar (Puma concolor)'],
      },
      {
        label: 'd',
        text: 'Living organisms can also be classified by comparing DNA sequences, as shown in the diagram below.\n\nLion:   G C G T A T C C C A\nTiger:  G C A T A A G G T A\nJaguar: G T G T A T G C C A\n\nUsing the DNA sequences, justify which two species are most closely related.',
        marks: 1,
        ph: 'The most closely related two species are... because they share the most bases in common (8 out of 10)...',
        figImages: ['/images/papers/biology-may-2025/page-06.png'],
      },
      {
        label: 'e',
        text: 'All of the species in part (d) have evolved from a common ancestor. Outline why their DNA sequences have changed over time.',
        marks: 2,
        ph: 'DNA sequences change over time due to... (mention mutations and a mechanism such as natural selection, speciation or survival of the fittest)',
      },
      {
        label: 'f',
        text: 'Proteins can also be compared when classifying organisms. State the name of the building blocks used to make proteins.',
        marks: 1,
        ph: 'Building blocks of proteins are called...',
      },
      {
        label: 'g',
        text: 'Proteins have many different functions in the body. Some proteins are hormones. Identify a hormone that affects blood sugar levels and state its action.',
        marks: 2,
        ph: 'Hormone name:\nAction (what it does to blood sugar):',
      },
      {
        label: 'h',
        text: 'Like blood sugar levels, body temperature and water balance are maintained within a narrow range. State the name of this regulating process.',
        marks: 1,
        ph: 'The process is called...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Gas Exchange & Blood (13 marks) Criterion A
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Gas Exchange & Blood',
    topicCanonical: 'Gas Exchange',
    topicGroup: 'Metabolism',
    topicsAlso: ['Circulation'],
    marks: 13,
    stem: 'Smartwatches can provide wearers with data about their lifestyles, such as blood oxygen levels, pulse rates and breathing rates. The diagram below shows gas exchange occurring in the lungs.',
    figImages: [
      '/images/papers/biology-may-2025/page-11.png',
    ],
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
        ph: 'Oxygen is transported by red blood cells / bound to haemoglobin... through the circulatory system / blood vessels / arteries...',
      },
      {
        label: 'c',
        text: 'The graph below shows pulse rate and breathing rate data from a smartwatch. The wearer exercised between 3 and 10 minutes.\n\nUse data from the graph to explain the changes seen when the wearer was exercising between 3 and 10 minutes.',
        marks: 5,
        ph: 'Between 3 and 10 minutes, the pulse rate increased from approximately... to ... beats per minute. The breathing rate also increased from... to... breaths per minute. This is because during exercise, muscles require more energy, so cellular respiration increases, requiring more oxygen and producing more CO₂...',
        figImages: ['/images/papers/biology-may-2025/page-14.png'],
      },
      {
        label: 'd',
        text: 'The results of blood samples taken from four healthy males are shown in the table below.\n\nAlex: WBC=6500, RBC=4,800,000, Platelets=250,000\nDenzel: WBC=4500, RBC=5,500,000, Platelets=260,000\nImad: WBC=5200, RBC=4,900,000, Platelets=240,000\nVictor: WBC=9500, RBC=3,300,000, Platelets=270,000\n\nUsing the information in the table, identify the person most likely to resist infection from a virus. Justify your answer.',
        marks: 2,
        ph: 'The person most likely to resist infection is: [select]\nJustification: Because they have the highest white blood cell count (9500 per mm³), and white blood cells fight infection...',
        figImages: ['/images/papers/biology-may-2025/page-16.png'],
        widget: 'radio_select',
        widgetOptions: ['Alex', 'Denzel', 'Imad', 'Victor'],
      },
      {
        label: 'e',
        text: 'The blood samples were taken from four individuals of the same sex to support valid comparisons. Suggest two additional pieces of information that would also increase the validity of a comparison.',
        marks: 2,
        ph: 'Additional information 1:\n\nAdditional information 2:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Seed Germination & Light (10 marks) Criterion B & C
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Seed Germination & Light Intensity',
    topicCanonical: 'Life Cycles',
    topicGroup: 'Evolution',
    topicsAlso: ['Photosynthesis'],
    marks: 10,
    stem: 'Light is an environmental factor that is essential for life on Earth. Different seeds need different environmental conditions to germinate. An experiment measured the effect of light intensity on seed germination using three species (A, B, C) in a germination chamber.\n\nResults (number of seeds germinated out of 10):\nLight 100%: A=10, B=8, C=7\nLight 75%: A=7, B=6, C=6\nLight 50%: A=4, B=3, C=7\nLight 25%: A=2, B=1, C=6\nLight 0%: A=1, B=0, C=6',
    figImages: [
      '/images/papers/biology-may-2025/page-19.png',
      '/images/papers/biology-may-2025/page-20.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Identify the plant species that had the highest number of germinated seeds at 75% light intensity.',
        marks: 1,
        ph: 'The species with the highest germination at 75% light intensity is...',
        widget: 'radio_select',
        widgetOptions: ['Species A', 'Species B', 'Species C'],
      },
      {
        label: 'b',
        text: 'Suggest a reason for conducting the experiment at 0% light intensity.',
        marks: 1,
        ph: 'The reason for including 0% light intensity is... (think about control experiments)',
      },
      {
        label: 'c',
        text: 'Identify a similarity and a difference in germination between species A and species B.',
        marks: 2,
        ph: 'Similarity:\n\nDifference:',
      },
      {
        label: 'd',
        text: 'Suggest a reason for the results obtained for species C.',
        marks: 1,
        ph: 'Species C shows an unusual pattern because...',
      },
      {
        label: 'e',
        text: 'State the reason for conducting all experiments inside a germination chamber.',
        marks: 1,
        ph: 'The germination chamber is used to...',
      },
      {
        label: 'f',
        text: 'An agricultural company conducted an experiment to find the lowest light intensity that yields the highest number of germinated seeds for species Y and species Z. The graph shows seeds germinated at different light intensities (Species Y plateaus at 90%, Species Z plateaus at 80%).\n\nIdentify the lowest light intensity the company could use to maximize seed germination for each species.',
        marks: 2,
        ph: 'Species Y: lowest light intensity for maximum germination = ...%\nSpecies Z: lowest light intensity for maximum germination = ...%',
        figImages: ['/images/papers/biology-may-2025/page-26.png'],
      },
      {
        label: 'g',
        text: 'To minimize energy costs and maximize seed germination, the company decides to germinate the seeds of both species in one chamber. They decide to run the chamber at 85% light intensity. Outline whether the company\'s decision is supported by the data in part (f).',
        marks: 2,
        ph: 'The decision is/is not fully supported because... (refer to the data values for both species)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Photosynthesis & Plant Growth (14 marks) Criterion A, B & C
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Photosynthesis & Plant Growth',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    marks: 14,
    stem: 'Construction of high-rise buildings in urban areas reduces the intensity of natural light reaching ground level. A student decided to investigate the effect of light intensity on plant growth.',
    figImages: [
      '/images/papers/biology-may-2025/page-29.png',
      '/images/papers/biology-may-2025/page-31.png',
      '/images/papers/biology-may-2025/page-32.png',
    ],
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
        text: 'A student conducted an experiment to measure the effect of light intensity on plant growth (stem length measured after a fixed period, temperature kept at 30°C).\n\nIdentify the variables in this investigation.',
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
        text: 'The student recorded the following plant stem lengths at different light intensities (30%=32mm, 60%=38mm, 90%=45mm, 100%=45mm). State the measurement at 90% light intensity and calculate the average stem length across all intensities.',
        marks: 2,
        ph: 'Measurement at 90%: ... mm\nAverage: ... mm',
        figImages: ['/images/papers/biology-may-2025/page-36.png'],
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
        text: 'Suggest a way to increase the length of the plant stem further.',
        marks: 1,
        ph: 'To increase stem length further, the student could...',
      },
      {
        label: 'h',
        text: 'The student predicted that if the light intensity increases then the length of the plant stem will also increase. Comment on whether the data supports the student\'s prediction. You must refer to data in your answer.',
        marks: 2,
        ph: 'The data partially/fully supports the prediction because... (quote specific values e.g. from 30% to 90% light intensity, stem length increased from... to... mm)',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Temperature & Plant Growth (9 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Temperature Effect on Plant Growth',
    topicCanonical: 'Photosynthesis',
    topicGroup: 'Processes',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 9,
    stem: 'The student also noticed that urban areas have higher temperatures than rural areas. Therefore, they decided to measure the effect of temperature on plant growth. They used the following method:\n1. Select plants with similar length of stems.\n2. Place the plant in an enclosed container with a heater and carbon dioxide controller.\n3. Conduct the experiment at different temperatures: 30°C, 35°C, 40°C, 45°C and 50°C.\n4. Measure the increase in the lengths of the plant stems after 15 days.\n5. Repeat the experiment for each temperature.\n\nResults:\nTemperature 30°C → Stem increase 9 mm\nTemperature 35°C → Stem increase 21 mm\nTemperature 40°C → Stem increase 42 mm\nTemperature 45°C → Stem increase 43 mm\nTemperature 50°C → Stem increase 2 mm',
    figImages: [
      '/images/papers/biology-may-2025/page-42.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'State the independent variable in this investigation.',
        marks: 1,
        ph: 'The independent variable is...',
      },
      {
        label: 'b',
        text: 'Present the results of this investigation in a graph. Use the data provided:\n30°C=9mm, 35°C=21mm, 40°C=42mm, 45°C=43mm, 50°C=2mm\n\nYour graph should include: appropriate axes labels with units, a scale with even increments, all four data points plotted correctly.',
        marks: 3,
        ph: 'Describe your graph: x-axis = Temperature (°C), y-axis = Increase in stem length after 15 days (mm). Points: (30,9), (35,21), (40,42), (45,43), (50,2)',
      },
      {
        label: 'c',
        text: 'Explain the results of this investigation. Refer to the data in your answer.\n\nConsider: the trend as temperature increases up to 40-45°C, and what happens beyond 45°C.',
        marks: 5,
        ph: 'As temperature increases from 30°C to 40-45°C, stem growth increases because... Beyond 45°C (at 50°C), growth decreases dramatically to 2mm because enzymes denature / stomata close / photosynthesis/transpiration stops...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Design an Investigation: Soil pH & Plant Growth (16 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design: Soil pH & Plant Growth',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 16,
    stem: 'Industrialization has resulted in more factories producing waste gases which cause acid rain. Acid rain leads to changes in soil pH which can affect plant growth.\n\nDesign an investigation to test how changing soil pH affects plant growth. You are provided with standard laboratory equipment and a range of solutions with pH between 3.5 and 10.0.\n\nIn your answer, you should include:\n• the independent variable, dependent variable and two controlled variables\n• equipment you will use\n• details of how to manipulate, measure or monitor the variables\n• details of the method you will use to collect sufficient data\n• a safety consideration.',
    tasks: [
      {
        label: 'a',
        text: 'Design a full investigation to test how changing soil pH affects plant growth. Your answer must include:\n• independent variable, dependent variable and two controlled variables\n• equipment list\n• how to manipulate, measure or monitor each variable\n• method for collecting sufficient data (include repetition/replication)\n• at least one safety consideration',
        marks: 16,
        ph: 'Independent variable: soil pH (using solutions pH 3.5 to 10.0)\nDependent variable: plant growth (measure stem length in mm after [X] days)\nControlled variables: temperature, amount of water/solution added, type of plant, light intensity\n\nEquipment: pots/containers, ruler/mm ruler, pH solutions, plants of same species/size, labels\n\nMethod:\n1. Set up [N] pots each with the same soil type and same plant species\n2. Water each pot with a different pH solution (e.g. pH 3.5, 5.0, 7.0, 8.5, 10.0)\n3. Place all pots in the same location with the same light and temperature conditions\n4. Measure and record plant stem length every [X] days for [Y] weeks\n5. Repeat each pH condition with at least 3 plants to ensure reliability\n\nSafety: Wear gloves when handling acidic/alkaline solutions; pH 3.5 is corrosive',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Animal Tracking (10 marks) Criterion C
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Animal Tracking & Conservation',
    topicCanonical: 'Habitats & Ecosystems',
    topicGroup: 'Organisms',
    topicsAlso: ['Pollution & Conservation'],
    marks: 10,
    stem: 'Animal tracking has been used for hundreds of years. It began as a method of hunting and of keeping track of animals. As technology has advanced, animal tracking has evolved into a method for scientific data collection.\n\nBird banding is a method of collecting data for research, management and conservation. Bird banding uses plastic or metal rings placed around the leg of a bird. The band has a unique number or colour sequence allowing the bird to be identified individually. It does not harm the bird or affect its behaviour.\n\nIn 1902, 23 young birds were banded with aluminium rings marked with the year, a serial number and a return address. Only one of the 23 rings was returned from 69km away. This was the first use of bird banding for scientific research.',
    figImages: [
      '/images/papers/biology-may-2025/page-49.png',
      '/images/papers/biology-may-2025/page-50.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'A graph shows the change in population size of different groups of birds (Arctic tundra birds, Forest birds, Shorebirds, Grassland birds) from 1970–2019. Select the group of birds whose population size has declined the most.',
        marks: 1,
        ph: 'The group with the greatest population decline is...',
        widget: 'radio_select',
        widgetOptions: ['Arctic tundra birds', 'Forest birds', 'Shorebirds', 'Grassland birds'],
        figImages: ['/images/papers/biology-may-2025/page-53.png'],
      },
      {
        label: 'b',
        text: 'Bird banding data allows scientists to track where a bird has migrated. Suggest why this information is useful for conservation.',
        marks: 2,
        ph: 'Knowing where birds migrate is useful because...',
      },
      {
        label: 'c',
        text: 'In 1902, only 1 out of 23 bands was returned. Suggest two reasons why so few bands were returned.',
        marks: 2,
        ph: 'Reason 1:\n\nReason 2:',
      },
      {
        label: 'd',
        text: 'Scientists want to identify patterns in where birds migrate. They plan to band 500 birds from the same location. Outline one way the scientists could improve the reliability of their data.',
        marks: 2,
        ph: 'To improve reliability, scientists could...',
      },
      {
        label: 'e',
        text: 'Bird banding data showed that some species of grassland birds were declining in population. Suggest one human activity that could be causing this decline and explain how it could be reduced.',
        marks: 3,
        ph: 'Human activity causing decline:\n\nHow it affects grassland birds:\n\nHow it could be reduced:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Radio/Satellite Tracking (16 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Technology in Animal Research',
    topicCanonical: 'Pollution & Conservation',
    topicGroup: 'Human Interactions with Environments',
    topicsAlso: ['Habitats & Ecosystems'],
    marks: 16,
    stem: 'Radio and satellite tracking systems provide information about an animal\'s location and movement. Scientists attach a small tracking device to an animal. The device sends a signal to a receiver or satellite, which records the animal\'s location.\n\nSatellite tracking allows scientists to record an animal\'s location every few minutes, anywhere in the world, for months or years.',
    figImages: [
      '/images/papers/biology-may-2025/page-60.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'State one difference between radio tracking and satellite tracking.',
        marks: 1,
        ph: 'One difference is that radio tracking... whereas satellite tracking...',
      },
      {
        label: 'b',
        text: 'Suggest one advantage and one disadvantage of attaching a tracking device to an animal.',
        marks: 2,
        ph: 'Advantage:\n\nDisadvantage:',
      },
      {
        label: 'c',
        text: 'Scientists tracked a population of grizzly bears using satellite technology. The data showed that the bears spent more time in areas with more human activity than previously thought.\n\nDiscuss how this information could be used to help conserve the grizzly bear population.',
        marks: 4,
        ph: 'This data could be used to... (e.g. identify conflict zones, create protected corridors, educate local communities, limit human activity in key bear habitats, inform park management policies)',
      },
      {
        label: 'd',
        text: 'Evaluate the use of technology in studying and conserving animal populations. In your answer, consider both the benefits and limitations of using technology such as satellite tracking.\n\nYou should refer to specific examples in your answer.',
        marks: 6,
        ph: 'Benefits of technology in conservation:\n• Satellite tracking allows continuous monitoring without disturbing animals\n• Data can cover large geographic areas\n• Long-term trends can be identified...\n\nLimitations:\n• Devices can affect animal behaviour or cause injury\n• High cost limits use in developing countries\n• Data requires interpretation by experts\n• Technical failures can cause data gaps\n\nConclusion: Overall, the benefits outweigh/are balanced by the limitations because...',
      },
      {
        label: 'e',
        text: 'A scientist presents their tracking data to a local community. Suggest why it is important for scientists to communicate their findings to non-scientists.',
        marks: 3,
        ph: 'It is important for scientists to communicate findings to non-scientists because... (consider: public understanding, community engagement, conservation action, funding support)',
      },
    ],
  },
]
