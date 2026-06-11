import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2019',
  subject: 'Chemistry',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Modern Day Periodic Table / Mendeleev (Crit A, 6 marks) ────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Atomic Structure',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 117 is now officially recognised by the International Union of Pure and Applied Chemistry (IUPAC) and is named tennessine, symbol Ts.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-02.png',
      '/images/papers/chemistry-may-2019/page-03.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the symbol of one element present in the modern periodic table but not in Mendeleev\'s original version.',
        marks: 1,
        ph: 'Any noble gas, or element with atomic number > 200, or Sc/Ga/Ge/Hf',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a group of transition elements present in the modern periodic table is missing from Mendeleev\'s table.',
        marks: 2,
        ph: 'e.g. lanthanides/actinides — rare or not found in compounds',
      },
      {
        label: 'c',
        text: 'Element hassium, atomic number 108, is made in a laboratory. Hassium was created by the nuclear fusion of ²⁰⁸Pb and atoms of a lighter element. The isotope of hassium produced has a mass number 266: ²⁰⁸Pb + X → ²⁶⁶Hs. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '26 protons, 32 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Iron / Fe',
      },
    ],
  },

  // ─── Q2 — London Fog 1952 / Air Pollution / VOCs (Crit A, 12 marks) ──────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air Pollution, Organic Compounds and Molar Mass',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'On December 8, 1952, a British newspaper reported on a thick fog over London. When the fog lifted, at least 4000 people had died from lung diseases. The pollutants were made by burning coal. When the coal was burned, the following pollutants were formed: sulfur dioxide (SO₂) and nitrogen dioxide (NO₂).\n\nToday, most air pollution in cities is photochemical smog. Photochemical smog contains many different pollutants including volatile organic compounds (VOCs). Ball-and-stick models of two VOCs are shown: the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-04.png',
      '/images/papers/chemistry-may-2019/page-05.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct Lewis structure (dot cross diagram) for a water molecule.',
        marks: 1,
        ph: 'Middle structure: H with lone pairs on O symmetric',
        widget: 'radio_select',
        widgetOptions: ['Structure A', 'Structure B', 'Structure C'],
        figImages: ['/images/papers/chemistry-may-2019/page-05.png'],
      },
      {
        label: 'b',
        text: 'When NO₂ reacts with water in the presence of oxygen, nitric acid HNO₃ is produced. **Select** numbers to balance the chemical equation for NO₂ and HNO₃. Make sure you select an option for each box:\n[blank] NO₂(g) + O₂(g) + [blank] H₂O(l) → [blank] HNO₃(aq)',
        marks: 2,
        ph: '4 NO₂ + O₂ + 2 H₂O → 4 HNO₃',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'c',
        text: 'When the fog was tested with universal indicator paper, it turned red. **State** what this information can tell you about the chemical properties of the fog.',
        marks: 1,
        ph: 'Fog is acidic / contains acid / low pH',
      },
      {
        label: 'd',
        text: '**State** the group and period of sulfur.',
        marks: 2,
        ph: 'Group 6, Period 3',
      },
      {
        label: 'e',
        text: '**Calculate** the mass of one mole of sulfuric acid, H₂SO₄.',
        marks: 2,
        ph: '98 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds.',
        marks: 4,
        ph: 'Ester/Ethyl ethanoate; Alkane/Pentane; Alcohol/Propan-1-ol; Carboxylic acid/Pentanoic acid',
        figImages: [
          '/images/papers/chemistry-may-2019/page-06.png',
          '/images/papers/chemistry-may-2019/page-07.png',
        ],
      },
    ],
  },

  // ─── Q3 — Cooking Pans / Metals / Teflon (Crit A, 9 marks) ──────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Teflon Coatings',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 9,
    stem: 'One everyday task that people undertake is cooking food. A variety of materials are used to make cooking pans including different metals and heat-resistant glass. The main metals used for making cooking pans are copper, iron and aluminium.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-08.png',
      '/images/papers/chemistry-may-2019/page-09.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make cooking pans.',
        marks: 2,
        ph: 'e.g. good thermal/heat conductivity; high melting point; malleable; rigid/solid',
      },
      {
        label: 'b',
        text: 'During cooking, a chemical reaction takes place in which metals are converted into metal ions. These metal ions mix with the food being cooked and it has been suggested that these could have an impact on health. Copper ions have been linked with liver damage and aluminium ions have been linked to Alzheimer\'s disease. In rural Africa, iron ions in cooked food have been known to reduce anaemia in children. **Determine** the charge on an aluminium ion and **justify** if the aluminium has been reduced or oxidised.',
        marks: 3,
        ph: 'Al³⁺; oxidised (loses electrons, oxidation state increases from 0 to +3)',
      },
      {
        label: 'c',
        text: 'Some cooking pans have protective layers added to reduce the production of ions. An example of a protective layer used on a cooking pan is Teflon™, an unreactive plastic. **State** the type of bonding in the Teflon™ coated cooking pan and in the metal cooking pan in the diagram above. Use the diagram to **discuss** the advantages of Teflon™ coated cooking pans compared with metal cooking pans.',
        marks: 4,
        ph: 'Covalent (Teflon); metallic (pan); Teflon forms coating, metals produce soluble ions, Teflon insoluble, prevents health issues',
        figImages: ['/images/papers/chemistry-may-2019/page-09.png'],
      },
    ],
  },

  // ─── Q4 — Tea Bag Diffusion Experiment (Crit B+C, 9 marks) ───────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion and Scientific Method',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'A student has noticed that when making a cup of tea by placing a tea bag in boiling water, the colour of the water changes. This is due to the diffusion of tea from the tea bag. The student wanted to know whether there is a relationship between the temperature of the water and the time for the diffusion to be complete.\n\nThe variables for this experiment are:\n- Independent variable: Temperature\n- Dependent variable: Time taken for diffusion to be complete\n- Control variable 1: Type of tea\n- Control variable 2: Same type of glass or cup',
    figImages: ['/images/papers/chemistry-may-2019/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of water / mass of tea bag / brand of tea',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for diffusion to be complete [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy increases so particles mix more quickly',
        widget: 'fill_blank',
        widgetOptions: ['decreases', 'increases', 'stays the same'],
      },
      {
        label: 'c',
        text: 'The student carried out one trial and collected data to test his hypothesis. He presented this data in a graph. **Use** the graph to **predict** how long it would take for diffusion to be complete at a temperature of 50°C.',
        marks: 2,
        ph: '400 ± 10 seconds (s)',
        figImages: ['/images/papers/chemistry-may-2019/page-12.png'],
      },
      {
        label: 'd',
        text: 'After further research, the student determined that the relationship in the graph should have been non-linear. **Outline** how the method could be improved to confirm that the relationship is non-linear.',
        marks: 3,
        ph: 'record data at intermediate temperatures; more than one trial; calculate average',
      },
    ],
  },

  // ─── Q5 — Soap Bubble Lifespan (Crit B+C, 19 marks) ─────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Soap Bubbles, Rate and Data Analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 19,
    stem: 'Children enjoy blowing bubbles. The bubbles do not last a long time and burst easily if they come into contact with another object or if they are made with too much force. Bubbles used in play are made from a mixture of liquid soap and water in a fixed ratio. The basic structure of the bubble consists of two layers of soap film with a layer of water inside. The exact ratio of water to soap will determine its lifespan.\n\nA student has decided to explore the ratio of water to soap to determine the mixture that will produce the bubbles with longest lifespan. The student has liquid soap, distilled water and various pieces of laboratory equipment. A volume of 10 cm³ of each solution was produced in the following dilutions.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-13.png',
      '/images/papers/chemistry-may-2019/page-14.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the most appropriate piece of equipment for accurately measuring the volume of each liquid.',
        marks: 1,
        ph: '1 cm³ pipette',
        widget: 'radio_select',
        widgetOptions: ['Beaker', '100 cm³ measuring cylinder', 'Ruler', '1 cm³ pipette'],
      },
      {
        label: 'b',
        text: 'Bubbles were produced by dipping a straw into the bubble solution and blowing a bubble. The time of the bubble\'s lifespan for each solution is recorded in the table below. For bubble mixture 2, **calculate** the mean lifespan to 1 decimal place. Show your working in the box below and add your final value to the table.',
        marks: 2,
        ph: '(11.4 + 10.1 + 10.5) / 3 = 10.7 s',
        figImages: [
          '/images/papers/chemistry-may-2019/page-15.png',
          '/images/papers/chemistry-may-2019/page-16.png',
        ],
      },
      {
        label: 'c',
        text: '**Present** the bubble lifespan data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: bubble mixture (x-axis), mean lifespan/s (y-axis); title; correct scale; all points plotted',
        figImages: [
          '/images/papers/chemistry-may-2019/page-16.png',
          '/images/papers/chemistry-may-2019/page-17.png',
        ],
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The lifespan of a bubble will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap solution."',
        marks: 2,
        ph: 'IV: volume of glycerine; DV: lifespan of bubble',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of bubble', 'Lifespan of bubble', 'Type of additive', 'Volume of bubble solution', 'Volume of glycerine'],
      },
      {
        label: 'e',
        text: 'Two students examined the lifespan of bubbles made using a mixture of soap solution and different volumes of glycerine additive. One student produced bubbles using a straw and blew them onto the laboratory bench while the other student blew bubbles using a bubble wand. Their results are shown in the image above. **Suggest** which of the two methods for producing bubbles shown in the image above will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Straw/method 1 more reliable; wand bubbles different sizes/affected by gravity/not reproducible',
        figImages: ['/images/papers/chemistry-may-2019/page-18.png'],
      },
      {
        label: 'f',
        text: 'A student recorded lifespan values for bubbles with lemon juice or sugar added to the mixture. Their results are shown in the image. **Calculate** the mean lifespan for the bubble with lemon juice added.',
        marks: 3,
        ph: '(70 + 77 + 75) / 3 = 74 s (accept 1 min 14 s)',
        figImages: [
          '/images/papers/chemistry-may-2019/page-19.png',
          '/images/papers/chemistry-may-2019/page-20.png',
        ],
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "The lifespan of a bubble will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap solution." Use the data in part (f) to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Not valid; two additives show different trends; sugar decreases lifespan',
      },
    ],
  },

  // ─── Q6 — Bubble Investigation Design + Graph Selection (Crit B+C, 18 marks)
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 18,
    stem: 'Bubbles can burst when the soap film is pulled towards the ground by gravity. The soap film gets thinner and eventually pulls apart. A dry finger will also cause a bubble to burst as it breaks the bonding in the bubble. Water evaporating from the bubble is another cause of bubbles bursting.\n\nYou have seen that the lifespan of a bubble will change if additives are added to the bubble mixture.',
    figImages: ['/images/papers/chemistry-may-2019/page-21.png'],
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether corn syrup, glycerine, sugar or lemon juice produce the bubbles with the longest lifespan. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: additive type/volume; DV: lifespan; CVs); equipment (straw, beakers, pipette, stopwatch); method (add each additive, blow bubble, time until burst, repeat 3+ times); sufficient data',
      },
      {
        label: 'b',
        text: 'The student found that the best additive for increasing the lifespan of a bubble was glycerine. **Select** the correct graph to present the data for drops of glycerine added versus lifespan.',
        marks: 1,
        ph: 'Graph C (bar chart for discrete data)',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
        figImages: [
          '/images/papers/chemistry-may-2019/page-22.png',
          '/images/papers/chemistry-may-2019/page-23.png',
        ],
      },
    ],
  },

  // ─── Q7 — Green Chemistry / Plastics + Glass Bottles (Crit D, 10 marks) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry Principles and Life Cycle Assessment',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nIn 2006, the State of California in the United States approved two laws aiming to encourage green chemistry. Many European governments have also introduced legislation for chemical manufacturers to ensure that their products and processes are safe.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-24.png',
      '/images/papers/chemistry-may-2019/page-25.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why using plastics to generate energy fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Impact on landfills (reduction); pollution control; by-products used for energy; raw material reuse; compare advantages/disadvantages',
      },
      {
        label: 'b',
        text: 'The diagram shows the life cycle assessment of a glass bottle. **Use** the image above to **suggest** two reasons why companies are now reusing glass bottles.',
        marks: 2,
        ph: 'e.g. can be reused directly; fewer chemicals released; less material processed; economic benefits',
        figImages: ['/images/papers/chemistry-may-2019/page-26.png'],
      },
    ],
  },

  // ─── Q8 — Copper Removal / PCBs / Green Chemistry Evaluation (Crit D, 17 marks)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws to make sure that factories and processing plants remove waste products from any water that leaves their sites before it enters rivers or other water sources. Heavy metal ions such as copper, arsenic, mercury and lead need to be removed as they have been linked to a variety of health problems.\n\nModern chemical industries try to adopt the principles of green chemistry. This involves several aspects such as preventing waste, being energy efficient and using renewable raw materials.\n\nPrinted circuit boards (PCBs) are made using a copper layer. The electrical connections are removed using a chemical reaction. This reaction produces a waste copper ion solution. It is important that the dissolved copper ions are removed before the water is returned to the water supply as they may cause liver damage and anaemia.\n\nThere are several processes for removing copper ions in industry: Precipitation, Recovery using electrochemical methods, Chemisorption, and Photocatalysis.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-27.png',
      '/images/papers/chemistry-may-2019/page-28.png',
      '/images/papers/chemistry-may-2019/page-29.png',
      '/images/papers/chemistry-may-2019/page-30.png',
      '/images/papers/chemistry-may-2019/page-31.png',
    ],
    tasks: [
      {
        label: '',
        text: 'You are about to set up a company in an area with a population with high levels of liver disease and anaemia which have been caused by high amounts of copper in the water supply from an old factory. Your new factory will produce PCBs. **Discuss** and **evaluate** two processes for treating waste water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. electrochemical vs photocatalysis); efficiency, environmental, economic, green chemistry, complexity; justify final choice',
      },
    ],
  },
]
