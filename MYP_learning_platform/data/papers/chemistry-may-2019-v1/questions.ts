import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2019-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Modern Day Periodic Table / Roentgenium synthesis (Crit A, 6 marks)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Nuclear Synthesis',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 118, oganesson (Og), is the heaviest element currently confirmed in the periodic table and was first synthesised in 2002.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-02.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the symbol of one element present in the modern periodic table but not in Mendeleev\'s original version.',
        marks: 1,
        ph: 'Any noble gas, or element > 200, or Sc/Ga/Ge/Hf',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a group of transition elements present in the modern periodic table is missing from Mendeleev\'s table.',
        marks: 2,
        ph: 'e.g. lanthanides/actinides — rare or not naturally occurring',
      },
      {
        label: 'c',
        text: 'Element roentgenium, atomic number 111, is made in a laboratory. Roentgenium was created by the nuclear fusion of ²⁰⁹Bi and atoms of a lighter element. The isotope of roentgenium produced has a mass number 272: ²⁰⁹Bi + X → ²⁷²Rg. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '28 protons, 35 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Nickel / Ni',
      },
    ],
  },

  // ─── Q2 — Beijing Smog / Organic Compounds / Sulfuric Acid (Crit A, 12 marks)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air Pollution, Organic Compounds and Molar Mass',
    marks: 12,
    stem: 'Beijing has experienced severe air pollution episodes. Industrial combustion of coal and diesel fuel releases large quantities of sulfur dioxide (SO₂), nitrogen dioxide (NO₂) and particulates. When SO₂ reacts with oxygen and water in the atmosphere, sulfuric acid (H₂SO₄) forms, contributing to acid rain. Today photochemical smog in Beijing contains many different volatile organic compounds (VOCs). Ball-and-stick models of four VOCs are shown: the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-04.png',
      '/images/papers/chemistry-may-2019/page-05.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct Lewis structure (dot cross diagram) for an ammonia molecule (NH₃).',
        marks: 1,
        ph: 'First structure: N centre with 3 H bonded and 1 lone pair correctly placed',
        widget: 'radio_select',
        widgetOptions: ['Structure A', 'Structure B', 'Structure C'],
      },
      {
        label: 'b',
        text: 'When SO₂ reacts with oxygen and water, sulfuric acid H₂SO₄ is produced. **Select** numbers to balance the chemical equation for SO₂ and H₂SO₄. Make sure you select an option for each box:\n[blank] SO₂(g) + O₂(g) + [blank] H₂O(l) → [blank] H₂SO₄(l)',
        marks: 2,
        ph: '2 SO₂ + O₂ + 2 H₂O → 2 H₂SO₄',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'c',
        text: 'When the smog was tested with universal indicator paper, it turned red. **State** what this information can tell you about the chemical properties of the smog.',
        marks: 1,
        ph: 'Smog is acidic / contains acid / low pH',
      },
      {
        label: 'd',
        text: '**State** the group and period of carbon.',
        marks: 2,
        ph: 'Group 4, Period 2',
      },
      {
        label: 'e',
        text: '**Calculate** the mass of one mole of nitric acid, HNO₃.',
        marks: 2,
        ph: '63 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds found in Beijing smog.',
        marks: 4,
        ph: 'Ester/Methyl propanoate; Alkane/Hexane; Alcohol/Ethanol; Carboxylic acid/Butanoic acid',
        figImages: [
          '/images/papers/chemistry-may-2019/page-06.png',
          '/images/papers/chemistry-may-2019/page-07.png',
        ],
      },
    ],
  },

  // ─── Q3 — Baking Trays / Metals / Non-stick Coating (Crit A, 9 marks) ────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Non-Stick Coatings',
    marks: 9,
    stem: 'One everyday task that people undertake is baking food. A variety of materials are used to make baking trays including different metals. The main metals used for making baking trays are copper, steel and aluminium.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-08.png',
      '/images/papers/chemistry-may-2019/page-09.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make baking trays.',
        marks: 2,
        ph: 'e.g. good thermal conductivity; high melting point; malleable; rigid/solid',
      },
      {
        label: 'b',
        text: 'During baking, a chemical reaction takes place in which metals are converted into metal ions. These metal ions can mix with the food being baked. Copper ions have been linked with liver damage and aluminium ions have been linked to Alzheimer\'s disease. In some populations, iron ions in cooked food have been known to reduce anaemia. **Determine** the charge on a copper ion and **justify** if the copper has been reduced or oxidised.',
        marks: 3,
        ph: 'Cu²⁺; oxidised (loses electrons, oxidation state increases from 0 to +2)',
      },
      {
        label: 'c',
        text: 'Some baking trays have non-stick protective layers. An example is Teflon™ coating, an unreactive plastic. **State** the type of bonding in the Teflon™ coated baking tray and in the metal baking tray. Use the diagram to **discuss** the advantages of Teflon™ coated baking trays compared with metal baking trays.',
        marks: 4,
        ph: 'Covalent (Teflon); metallic (tray); Teflon coating prevents metal ions entering food; protects health',
        figImages: ['/images/papers/chemistry-may-2019/page-09.png'],
      },
    ],
  },

  // ─── Q4 — Coffee Dissolving Experiment (Crit B+C, 9 marks) ───────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Dissolution Rate and Scientific Method',
    marks: 9,
    stem: 'A student has noticed that when dissolving instant coffee in hot water, the colour of the water changes more quickly at higher temperatures. This is due to the diffusion of coffee particles into the water. The student wanted to know whether there is a relationship between the temperature of the water and the time taken for the coffee to dissolve completely.\n\nThe variables for this experiment are:\n- Independent variable: Temperature\n- Dependent variable: Time taken for coffee to dissolve completely\n- Control variable 1: Brand of coffee\n- Control variable 2: Same type of glass or cup',
    figImages: ['/images/papers/chemistry-may-2019/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of water / mass of coffee / stirring',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for the coffee to dissolve completely [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy increases so coffee particles dissolve faster',
        widget: 'fill_blank',
        widgetOptions: ['decreases', 'increases', 'stays the same'],
      },
      {
        label: 'c',
        text: 'The student carried out one trial and collected data to test his hypothesis. He presented this data in a graph. **Use** the graph to **predict** how long it would take for the coffee to dissolve completely at a temperature of 40°C.',
        marks: 2,
        ph: '480 ± 10 seconds (s)',
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

  // ─── Q5 — Soap Film Lifespan Experiment (Crit B+C, 19 marks) ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Soap Films, Rate and Data Analysis',
    marks: 19,
    stem: 'Soap films can be formed on wire frames. These films do not last a long time and burst if disturbed or if water evaporates. The lifespan depends on the ratio of water to soap. A student decided to explore this ratio to determine the mixture that will produce the longest-lasting soap films. The student has liquid soap, distilled water and various pieces of laboratory equipment. A volume of 10 cm³ of each solution was produced in the following dilutions.',
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
        text: 'Soap films were produced by dipping a wire frame into the soap solution. The time of the soap film\'s lifespan for each solution is recorded in the table below. For soap film mixture 3, **calculate** the mean lifespan to 1 decimal place. Show your working in the box below and add your final value to the table.\n\nData: Mixture 3 — Trial 1: 8.8 s, Trial 2: 9.4 s, Trial 3: 9.3 s',
        marks: 2,
        ph: '(8.8 + 9.4 + 9.3) / 3 = 9.2 s',
        figImages: [
          '/images/papers/chemistry-may-2019/page-15.png',
          '/images/papers/chemistry-may-2019/page-16.png',
        ],
      },
      {
        label: 'c',
        text: '**Present** the soap film lifespan data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: film mixture (x-axis), mean lifespan/s (y-axis); title; correct scale; all points plotted',
        figImages: [
          '/images/papers/chemistry-may-2019/page-16.png',
          '/images/papers/chemistry-may-2019/page-17.png',
        ],
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The lifespan of a soap film will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap molecules."',
        marks: 2,
        ph: 'IV: volume of corn syrup; DV: lifespan of soap film',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of bubble', 'Lifespan of soap film', 'Type of additive', 'Volume of soap solution', 'Volume of corn syrup'],
      },
      {
        label: 'e',
        text: 'Two students examined the lifespan of soap films made using a mixture of soap solution and different volumes of corn syrup additive. One student produced films using a wire loop held stationary on a bench while the other student swung the wire loop through the air. Their results are shown in the image above. **Suggest** which of the two methods for producing soap films shown in the image above will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Static wire loop more reliable; swinging wand produces films of different sizes/shapes, affected by air currents',
        figImages: ['/images/papers/chemistry-may-2019/page-18.png'],
      },
      {
        label: 'f',
        text: 'A student recorded lifespan values for soap films with vinegar or honey added to the mixture. Their results are shown in the image. **Calculate** the mean lifespan for the soap film with vinegar added.\n\nData: Trial 1: 1 min 45 s, Trial 2: 1 min 51 s, Trial 3: 2 min',
        marks: 3,
        ph: '(105 + 111 + 120) / 3 = 112 s',
        figImages: [
          '/images/papers/chemistry-may-2019/page-19.png',
          '/images/papers/chemistry-may-2019/page-20.png',
        ],
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "The lifespan of a soap film will increase if an additive is added to the soap solution because there is increased bonding between the additive and the soap molecules." Use the data in part (f) to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Not valid; vinegar and honey show different trends; vinegar decreases lifespan',
      },
    ],
  },

  // ─── Q6 — Soap Film Design + Graph (Crit B+C, 18 marks) ──────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 18,
    stem: 'Soap films burst when the film thins due to evaporation or when mechanical force is applied. The lifespan depends on the bonding between water and soap molecules, which can be altered by additives.\n\nYou have seen that the lifespan of a soap film will change if additives are added to the soap solution.',
    figImages: ['/images/papers/chemistry-may-2019/page-21.png'],
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether corn syrup, gelatin, sugar or salt produce the soap films with the longest lifespan. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: additive type/volume; DV: lifespan; CVs); equipment (wire frame, beakers, pipette, stopwatch); method steps; at least 3 trials per additive',
      },
      {
        label: 'b',
        text: 'The student found that the best additive for increasing the lifespan of a soap film was corn syrup. **Select** the correct graph to present the data for concentration of corn syrup (g/cm³) versus lifespan of soap film.',
        marks: 1,
        ph: 'Graph A (scatter plot with line of best fit for continuous data)',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
        figImages: [
          '/images/papers/chemistry-may-2019/page-22.png',
          '/images/papers/chemistry-may-2019/page-23.png',
        ],
      },
    ],
  },

  // ─── Q7 — Green Chemistry / Paper Recycling (Crit D, 10 marks) ───────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry and Paper Life Cycle Assessment',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nPaper and cardboard production is a major industrial process. Non-recycled paper goes to landfill or is incinerated. Recycled paper reduces the need for virgin wood pulp, lowers chemical use and reduces carbon emissions.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-24.png',
      '/images/papers/chemistry-may-2019/page-25.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why recycling paper fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Landfills reduced; pollution monitoring in pulping; by-products (lignin) used for energy; wood is renewable raw material; evaluate trade-offs',
      },
      {
        label: 'b',
        text: 'The diagram shows the life cycle assessment of a paper cup. **Use** the image above to **suggest** two reasons why companies are now producing reusable cups instead of disposable paper cups.',
        marks: 2,
        ph: 'e.g. reusable cup used many times; fewer chemicals in production; less waste to landfill; economic benefits',
        figImages: ['/images/papers/chemistry-may-2019/page-26.png'],
      },
    ],
  },

  // ─── Q8 — Mercury Removal / Green Chemistry Evaluation (Crit D, 17 marks)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws requiring that factories remove waste products from any water before it enters rivers or water sources. Heavy metal ions such as mercury, lead and arsenic need to be removed as they have been linked to a variety of neurological and health problems.\n\nGold mining operations produce large amounts of mercury-contaminated water. Mercury ions (Hg²⁺) must be removed before the water is returned to the water supply as they cause damage to the nervous system.\n\nThere are several processes for removing mercury ions in industry: Precipitation, Recovery using electrochemical methods, Chemisorption, and Photocatalysis.',
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
        text: 'You are about to set up a company near a gold mining region where high levels of mercury in the water supply have caused neurological disease in the population. Your new factory will use mercury-based processes. **Discuss** and **evaluate** two processes for treating waste water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. chemisorption vs photocatalysis); all 6 dimensions; justify final choice for mercury removal from gold mining waste water',
      },
    ],
  },
]
