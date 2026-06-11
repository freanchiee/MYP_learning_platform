import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2019-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Periodic Table / Meitnerium Synthesis (Crit A, 6 marks) ─────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Nuclear Synthesis',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 113, nihonium (Nh), was synthesised in Japan in 2004 and is the first element to be discovered in Asia.',
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
        ph: 'e.g. lanthanides/actinides — not naturally occurring or unreactive noble gases',
      },
      {
        label: 'c',
        text: 'Element meitnerium, atomic number 109, is made in a laboratory. Meitnerium was created by the nuclear fusion of ²⁰⁸Pb and atoms of a lighter element. The isotope of meitnerium produced has a mass number 268: ²⁰⁸Pb + X → ²⁶⁸Mt. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '27 protons, 33 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Cobalt / Co',
      },
    ],
  },

  // ─── Q2 — Los Angeles Smog / Organic Compounds / HCl Lewis Structure (Crit A, 12 marks)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Air Pollution, Organic Compounds and Molar Mass',
    marks: 12,
    stem: 'Los Angeles has experienced severe photochemical smog since the 1940s. Vehicle exhaust releases nitrogen oxides (NOₓ) which react with sunlight to produce ground-level ozone and secondary pollutants. One key reaction involves NO₂ reacting with water to produce both nitric acid (HNO₃) and nitrous acid (HNO₂). Modern Los Angeles smog contains many different volatile organic compounds (VOCs). Ball-and-stick models of four VOCs are shown: the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-04.png',
      '/images/papers/chemistry-may-2019/page-05.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct Lewis structure (dot cross diagram) for a hydrogen chloride molecule (HCl).',
        marks: 1,
        ph: 'Third structure: H bonded to Cl with 3 lone pairs on Cl correctly placed',
        widget: 'radio_select',
        widgetOptions: ['Structure A', 'Structure B', 'Structure C'],
      },
      {
        label: 'b',
        text: 'NO₂ reacts with water to form both nitric acid and nitrous acid. **Select** numbers to balance the chemical equation for this reaction. Make sure you select an option for each box:\n[blank] NO₂(g) + H₂O(l) → [blank] HNO₃(aq) + [blank] NO(g)',
        marks: 2,
        ph: '3 NO₂ + H₂O → 2 HNO₃ + NO',
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
        text: '**State** the group and period of chlorine.',
        marks: 2,
        ph: 'Group 7, Period 3',
      },
      {
        label: 'e',
        text: '**Calculate** the mass of one mole of hydrogen sulfide, H₂S.',
        marks: 2,
        ph: '34 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds found in Los Angeles smog.',
        marks: 4,
        ph: 'Ester/Propyl methanoate; Alkane/Butane; Alcohol/Propan-2-ol; Carboxylic acid/Ethanoic acid',
        figImages: [
          '/images/papers/chemistry-may-2019/page-06.png',
          '/images/papers/chemistry-may-2019/page-07.png',
        ],
      },
    ],
  },

  // ─── Q3 — Camping Cookware / Metals / Anodised Coating (Crit A, 9 marks) ─
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Protective Coatings',
    marks: 9,
    stem: 'One everyday task that people undertake is cooking food while camping. A variety of materials are used to make camping cookware including different metals. The main metals used for making camping cookware are titanium, aluminium and stainless steel.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-08.png',
      '/images/papers/chemistry-may-2019/page-09.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make camping cookware.',
        marks: 2,
        ph: 'e.g. good thermal conductivity; high melting point; malleable; lightweight',
      },
      {
        label: 'b',
        text: 'During cooking, a chemical reaction takes place in which metals are converted into metal ions. These metal ions can mix with the food being cooked. Titanium ions have been studied for their biocompatibility. Aluminium ions have been linked to Alzheimer\'s disease. In some populations, iron ions from stainless steel have been known to reduce anaemia. **Determine** the charge on a titanium ion (Ti⁴⁺) and **justify** if the titanium has been reduced or oxidised.',
        marks: 3,
        ph: 'Ti⁴⁺; oxidised (loses electrons, oxidation state increases from 0 to +4)',
      },
      {
        label: 'c',
        text: 'Some camping cookware has an anodised protective layer. The anodised layer is an unreactive aluminium oxide (Al₂O₃) ceramic. **State** the type of bonding in the anodised layer and in the metal cookware. Use the diagram to **discuss** the advantages of anodised camping cookware compared with non-coated metal cookware.',
        marks: 4,
        ph: 'Ionic (Al₂O₃ layer); metallic (metal); oxide layer prevents metal ions; harder surface; heat resistant',
        figImages: ['/images/papers/chemistry-may-2019/page-09.png'],
      },
    ],
  },

  // ─── Q4 — Inkdrop Diffusion Experiment (Crit B+C, 9 marks) ──────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion and Scientific Method',
    marks: 9,
    stem: 'A student has noticed that when a drop of ink is placed into a beaker of water, the ink spreads through the water and the colour of the water changes. This is due to the diffusion of ink particles through the water. The student wanted to know whether there is a relationship between the temperature of the water and the time for the ink to fully disperse.\n\nThe variables for this experiment are:\n- Independent variable: Temperature\n- Dependent variable: Time taken for ink to fully disperse\n- Control variable 1: Type of ink\n- Control variable 2: Same volume of water',
    figImages: ['/images/papers/chemistry-may-2019/page-10.png'],
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of ink drop / type of container / amount of ink used',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for the ink to fully disperse [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy of particles increases so ink disperses more quickly',
        widget: 'fill_blank',
        widgetOptions: ['decreases', 'increases', 'stays the same'],
      },
      {
        label: 'c',
        text: 'The student carried out one trial and collected data to test his hypothesis. He presented this data in a graph. **Use** the graph to **predict** how long it would take for the ink to fully disperse at a temperature of 70°C.',
        marks: 2,
        ph: '200 ± 10 seconds (s)',
        figImages: ['/images/papers/chemistry-may-2019/page-12.png'],
      },
      {
        label: 'd',
        text: 'After further research, the student determined that the relationship in the graph should have been non-linear. **Outline** how the method could be improved to confirm that the relationship is non-linear.',
        marks: 3,
        ph: 'record data at more temperatures; more than one trial per temperature; calculate average',
      },
    ],
  },

  // ─── Q5 — Foam Stability Experiment (Crit B+C, 19 marks) ─────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Foam Stability, Rate and Data Analysis',
    marks: 19,
    stem: 'Scientists studying detergents examine the stability of foam. Foam consists of gas bubbles trapped in a liquid film. The foam does not last a long time and collapses when the liquid film drains or when the bubbles merge. The stability depends on the ratio of water to detergent. A student decided to explore this ratio to determine the mixture that will produce the most stable foam. The student has liquid detergent, distilled water and various pieces of laboratory equipment. A volume of 10 cm³ of each solution was produced in the following dilutions.',
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
        text: 'Foam was produced by shaking each solution in a sealed container. The time of the foam\'s lifespan for each solution is recorded in the table below. For foam mixture 4, **calculate** the mean lifespan to 1 decimal place. Show your working in the box below and add your final value to the table.\n\nData: Mixture 4 — Trial 1: 4.1 s, Trial 2: 4.6 s, Trial 3: 3.8 s',
        marks: 2,
        ph: '(4.1 + 4.6 + 3.8) / 3 = 4.2 s',
        figImages: [
          '/images/papers/chemistry-may-2019/page-15.png',
          '/images/papers/chemistry-may-2019/page-16.png',
        ],
      },
      {
        label: 'c',
        text: '**Present** the foam lifespan data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: foam mixture (x-axis), mean lifespan/s (y-axis); title; correct scale; all points plotted',
        figImages: [
          '/images/papers/chemistry-may-2019/page-16.png',
          '/images/papers/chemistry-may-2019/page-17.png',
        ],
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The lifespan of foam will increase if honey is added to the detergent solution because honey increases the viscosity of the liquid film."',
        marks: 2,
        ph: 'IV: volume of honey; DV: lifespan of foam',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of foam', 'Lifespan of foam', 'Temperature', 'Type of honey', 'Volume of honey'],
      },
      {
        label: 'e',
        text: 'Two students examined the lifespan of foam made using a mixture of detergent solution and different volumes of honey additive. One student produced foam by shaking a sealed tube while the other student produced foam by blowing through a straw. Their results are shown in the image above. **Suggest** which of the two methods for producing foam shown in the image above will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Shaking method more reliable; blowing produces different foam volumes/uneven; shaking more reproducible',
        figImages: ['/images/papers/chemistry-may-2019/page-18.png'],
      },
      {
        label: 'f',
        text: 'A student recorded lifespan values for foam with baking soda or glycerine added to the mixture. Their results are shown in the image. **Calculate** the mean lifespan for the foam with baking soda added.\n\nData: Trial 1: 31 s, Trial 2: 38 s, Trial 3: 36 s',
        marks: 3,
        ph: '(31 + 38 + 36) / 3 = 35 s',
        figImages: [
          '/images/papers/chemistry-may-2019/page-19.png',
          '/images/papers/chemistry-may-2019/page-20.png',
        ],
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "The lifespan of foam will increase if an additive is added to the detergent solution because the additive increases viscosity." Use the data in part (f) to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Not valid; baking soda and glycerine show different trends; baking soda decreases lifespan',
      },
    ],
  },

  // ─── Q6 — Foam Investigation Design + Graph (Crit B+C, 18 marks) ─────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    marks: 18,
    stem: 'Foam collapses when liquid drains from the film walls and when gas escapes through the film. Additives can change the viscosity of the liquid film and alter the lifespan of the foam.\n\nYou have seen that the lifespan of foam will change if additives are added to the detergent solution.',
    figImages: ['/images/papers/chemistry-may-2019/page-21.png'],
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether honey, gelatin, glycerine or baking soda produce the most stable foam. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: additive type/volume; DV: lifespan of foam; CVs); equipment (sealed tubes, pipette, stopwatch, balance); method; at least 3 trials',
      },
      {
        label: 'b',
        text: 'The student found that the best additive for increasing the lifespan of foam was glycerine. **Select** the correct graph to present the data for drops of glycerine added versus lifespan of foam.',
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

  // ─── Q7 — Green Chemistry / E-Waste Recycling (Crit D, 10 marks) ─────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry and Electronic Waste Life Cycle',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nElectronic waste (e-waste) from discarded mobile phones, computers and circuit boards is one of the fastest growing waste streams globally. E-waste contains valuable metals (gold, silver, copper) as well as hazardous substances (lead, mercury, cadmium). Recovering metals from e-waste reduces mining demand and prevents toxic substances entering the environment.',
    figImages: [
      '/images/papers/chemistry-may-2019/page-24.png',
      '/images/papers/chemistry-may-2019/page-25.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why recycling e-waste to recover metals fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Landfills reduced; toxic metals monitored and contained; by-products (recovered gold/copper) valuable; rare metals reused; evaluate trade-offs',
      },
      {
        label: 'b',
        text: 'The diagram shows the life cycle assessment of a mobile phone. **Use** the image above to **suggest** two reasons why companies are now offering phone take-back schemes.',
        marks: 2,
        ph: 'e.g. metals can be recovered and reused; toxic substances prevented from entering landfill; economic value of recovered metals; fewer chemicals in new manufacturing',
        figImages: ['/images/papers/chemistry-may-2019/page-26.png'],
      },
    ],
  },

  // ─── Q8 — Arsenic Removal / Water Treatment Evaluation (Crit D, 17 marks) ─
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws requiring that factories remove waste products from any water before it enters rivers or water sources. Heavy metal ions such as arsenic, lead and copper need to be removed as they have been linked to a variety of cancers and health problems.\n\nIntensive agricultural regions use arsenic-based pesticides, which contaminate groundwater. Arsenic ions (As³⁺/As⁵⁺) must be removed before the water is used for drinking or irrigation as high arsenic levels cause skin cancer, lung disease and neurological damage.\n\nThere are several processes for removing arsenic ions in industry: Precipitation, Recovery using electrochemical methods, Chemisorption, and Photocatalysis.',
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
        text: 'You are about to set up a company in an agricultural region where high levels of arsenic in the groundwater have caused cancer and skin disease in the local population. Your new factory will process agricultural chemicals. **Discuss** and **evaluate** two processes for treating waste water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. precipitation vs chemisorption); all 6 dimensions; final choice justified for arsenic removal from agricultural waste water',
      },
    ],
  },
]
