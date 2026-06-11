import type { PaperMeta } from '@/data/papers/chemistry-nov-2019/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2019-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Talc / cosmetic powder (4 marks, Crit A) ────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    marks: 4,
    stem: 'Talcum powder is a widely used cosmetic product made from the mineral talc. Talc is a naturally occurring clay mineral composed mainly of magnesium, silicon, oxygen and hydrogen. The chemical formula for talc is Mg₃Si₄O₁₀(OH)₂.',
    figImages: ['/images/papers/chemistry-nov-2019/page-02.png'],
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in talc, Mg₃Si₄O₁₀(OH)₂.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in talc are magnesium and silicon. Identify the group and period of each element in the periodic table.',
        marks: 2,
        ph: 'Mg: Group 2 Period 3; Si: Group 4 Period 3',
        widget: 'inline_dropdown_select',
        widgetItems: ['Magnesium – Group', 'Magnesium – Period', 'Silicon – Group', 'Silicon – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'c',
        text: 'Silica has the chemical formula SiO₂. Silicon is in the same group as carbon and their oxides have similar formulas. Silica has a giant covalent structure but carbon dioxide has a simple molecular structure. Select the diagram that shows the Lewis electron dot structure of carbon dioxide.',
        marks: 1,
        ph: 'Shared pairs; double bonds on C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
    ],
  },

  // ─── Q2: Bedspring / nickel-steel + tin cooling curve (11 marks, Crit A) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    marks: 11,
    stem: 'The innerspring mattress was invented in the 1870s and used a type of nickel-steel alloy. Nickel-steel is composed of iron with nickel and small amounts of carbon. Springs with different compositions of nickel and carbon are used for different applications. Here are the properties of four different nickel-steel compositions.',
    figImages: ['/images/papers/chemistry-nov-2019/page-03.png', '/images/papers/chemistry-nov-2019/page-04.png', '/images/papers/chemistry-nov-2019/page-05.png', '/images/papers/chemistry-nov-2019/page-06.png'],
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of iron, nickel and carbon that makes up nickel-steel.',
        marks: 1,
        ph: 'A mixture of metals / non-metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
      },
      {
        label: 'b',
        text: 'Suggest why nickel-steel with very low nickel content and nickel-steel with very high carbon content would both be unsuitable materials to make a bed spring.',
        marks: 2,
        ph: 'Low nickel: corrodes/too soft; Very high carbon: brittle/breaks',
      },
      {
        label: 'c',
        text: 'A bed spring is made from 15.6 m of nickel-steel wire. The mass of the spring is 0.174 kg. Calculate the number of moles of iron needed to make the spring, assuming all the wire is made of iron. Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 174/56 = 3.1 mol',
      },
      {
        label: 'd',
        text: 'Old toy soldiers were sometimes made from tin. The graph shows how the temperature of a sample of tin changes over time as it cools and solidifies. State the physical state of tin at point B on the graph.',
        marks: 1,
        ph: 'Solid',
      },
      {
        label: 'e',
        text: 'In the boxes below, draw the arrangement of particles at point A and point B on the cooling curve.',
        marks: 2,
        ph: 'A: irregular liquid arrangement; B: regular solid lattice',
      },
      {
        label: 'f',
        text: 'State the melting point of tin from the graph.',
        marks: 1,
        ph: '232 °C (accept ±1 °C)',
      },
    ],
  },

  // ─── Q3: Radium-dial watches (10 marks, Crit A) ──────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    marks: 10,
    stem: 'Luminous radium paint, used in watch dials from 1910 to 1960, contained radium-226 and zinc sulphide. Workers known as "Radium Girls" painted watch dials using brushes they pointed with their lips, unknowingly ingesting radioactive material. The radium in the paint also caused radioactive decay to produce radon-222 and other products.',
    figImages: ['/images/papers/chemistry-nov-2019/page-07.png', '/images/papers/chemistry-nov-2019/page-08.png', '/images/papers/chemistry-nov-2019/page-09.png'],
    tasks: [
      {
        label: 'a',
        text: 'Radium carbonate reacts with nitric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Radium nitrate + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Write a balanced symbol equation for the reaction of radium carbonate with nitric acid.',
        marks: 3,
        ph: 'RaCO₃ + 2HNO₃ → Ra(NO₃)₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why having watch dials with zinc sulphide would be better for workers\' health than those containing radium.',
        marks: 2,
        ph: 'ZnS not radioactive; radiation damages body cells',
      },
      {
        label: 'd',
        text: 'The radium paint also contained radium-226 (²²⁶Ra) and radon-222 (²²²Rn). Determine the number of protons, neutrons and electrons in an atom of ²²⁶Ra and ²²²Rn.',
        marks: 2,
        ph: 'Ra: p=88,n=138,e=88; Rn: p=86,n=136,e=86',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²²⁶Ra', 'Neutrons – ²²⁶Ra', 'Electrons – ²²⁶Ra', 'Protons – ²²²Rn', 'Neutrons – ²²²Rn', 'Electrons – ²²²Rn'],
        widgetOptions: ['84', '85', '86', '87', '88', '89', '134', '135', '136', '137', '138'],
      },
      {
        label: 'e',
        text: 'Select the hazard symbol used to warn people about radioactive materials.',
        marks: 1,
        ph: 'Trefoil radioactive symbol = C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
    ],
  },

  // ─── Q4: Superabsorbent polymers for wound dressings (16 marks, Crit C+B) ─
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – superabsorbent polymers',
    marks: 16,
    stem: 'A student investigates which brand of superabsorbent polymer (SAP) wound dressing absorbs the most liquid. The student measures 500 cm³ of saline solution into a beaker, adds a fixed mass of SAP, stirs for 5 minutes, and then pours the mixture through a filter. The volume of saline remaining is recorded.',
    figImages: ['/images/papers/chemistry-nov-2019/page-11.png', '/images/papers/chemistry-nov-2019/page-12.png', '/images/papers/chemistry-nov-2019/page-13.png', '/images/papers/chemistry-nov-2019/page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=SAP brand; DV=volume saline absorbed; CVs=mass, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table: SAP brand | volume remaining (cm³) | 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=SAP brand; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which SAP absorbs the most liquid?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — graph shows liquid NOT absorbed; need to process data',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which SAP you could use to absorb 300 cm³ of saline. You should use calculations to support your answer.',
        marks: 3,
        ph: 'SAP-2: 500−150=350 cm³ absorbed (≥300 needed); justification',
      },
    ],
  },

  // ─── Q5: Disposable vs reusable wound dressings (20 marks, Crit D+B) ─────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    marks: 20,
    stem: 'The main absorbent material in disposable wound dressings is superabsorbent polymer (SAP). Millions of disposable wound dressings are used in hospitals each year, contributing to medical waste. Reusable wound dressings made from cotton can be sterilised and used multiple times, but require energy and water for the sterilisation process.',
    figImages: ['/images/papers/chemistry-nov-2019/page-14.png', '/images/papers/chemistry-nov-2019/page-15.png', '/images/papers/chemistry-nov-2019/page-16.png'],
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using disposable wound dressings compared to reusable cotton dressings. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Disposable: landfill/plastic waste/oil-based; Reusable: energy/water/chemicals for sterilisation; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different SAP wound dressing brands absorbs the most saline solution. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=dressing brand; DV=volume absorbed; CVs=mass, temp, time; 5 brands×3 trials; replicable method',
      },
    ],
  },

  // ─── Q6: Wound dressing brand data analysis (8 marks, Crit C+B) ──────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – wound dressing absorbency',
    marks: 8,
    stem: 'A researcher tests five brands of SAP wound dressing. Each dressing contains a different mass of SAP crystal and a different mass of gauze (cotton fibre material). The total volume of saline absorbed by each brand is measured.',
    figImages: ['/images/papers/chemistry-nov-2019/page-17.png', '/images/papers/chemistry-nov-2019/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the dressing components and the volume of saline absorbed.',
        marks: 3,
        ph: 'Hypothesis not supported; DressMed most absorbent with least SAP; gauze also affects absorption',
      },
      {
        label: 'b',
        text: 'A student suggests that the mass of SAP crystal determines the volume of saline absorbed. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If SAP increases, then absorption increases, because SAP absorbs saline; BUT DressMed contradicts this',
      },
      {
        label: 'c',
        text: 'Gauze is found in wound dressings alongside SAP crystals. Suggest how gauze helps the SAP absorb wound fluid.',
        marks: 2,
        ph: 'Gauze removes proteins/ions from fluid; SAP absorbs remaining water',
      },
    ],
  },

  // ─── Q7: Chromatography of food dyes in sports drinks (8 marks, Crit C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    marks: 8,
    stem: 'A food scientist investigates the dyes used to colour sports drinks. The scientist tests four reference dyes (A, B, C and D) and a sample taken from a sports drink using chromatography. One of the dyes has been linked to allergic reactions.',
    figImages: ['/images/papers/chemistry-nov-2019/page-19.png', '/images/papers/chemistry-nov-2019/page-20.png', '/images/papers/chemistry-nov-2019/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the dye that the sports drink sample contains. Justify your answer.',
        marks: 2,
        ph: 'Dye B; same spot pattern / same pigment components',
        widget: 'radio_select',
        widgetOptions: ['Dye A', 'Dye B', 'Dye C', 'Dye D'],
      },
      {
        label: 'b',
        text: 'For each of the other dyes, explain why they are not contained in the sports drink sample.',
        marks: 3,
        ph: 'Other dyes lack same components; A missing one spot; C and D have extra pigments not in sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the spot in Dye B responsible for the allergic reaction.',
        marks: 3,
        ph: 'Yellow spot ÷ solvent front; Rf ≈ 0.50',
      },
    ],
  },

  // ─── Q8: Bioplastics — functional groups & HDPE vs PHB (10 marks, Crit A+D) ─
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – biopolymers & plastics',
    marks: 10,
    stem: 'Bioplastics are plastics produced from renewable biological sources such as corn starch or vegetable oils. Polyhydroxybutyrate (PHB) is a bioplastic that can be produced by bacteria and used as an alternative to conventional oil-based plastics such as high-density polyethylene (HDPE).',
    figImages: ['/images/papers/chemistry-nov-2019/page-22.png', '/images/papers/chemistry-nov-2019/page-23.png', '/images/papers/chemistry-nov-2019/page-24.png'],
    tasks: [
      {
        label: 'a',
        text: 'Below are three different monomers used to make different types of bioplastic. Select the class name of the functional group that is circled in each monomer.',
        marks: 3,
        ph: 'A=Carboxylic acid; B=Alkene; C=Alcohol',
        widget: 'inline_dropdown_select',
        widgetItems: ['Monomer A', 'Monomer B', 'Monomer C'],
        widgetOptions: ['Alkane', 'Alcohol', 'Ester', 'Carboxylic acid', 'Alkene'],
      },
      {
        label: 'b',
        text: 'A packaging company wants to switch from high-density polyethylene (HDPE) to polyhydroxybutyrate (PHB) for their food packaging. Using the data table, explain the advantages and disadvantages of using PHB compared to HDPE for food packaging. In your answer you should outline the physical properties required in food packaging, describe the advantages and disadvantages that PHB has compared to HDPE, and justify whether PHB would make a suitable replacement for HDPE.',
        marks: 7,
        ph: 'HDPE properties; PHB biodegrade/renewable; PHB costly/lower strength; justified conclusion',
      },
    ],
  },

  // ─── Q9: Biofuel vs fossil fuel essay (13 marks, Crit D) ─────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – biofuels vs fossil fuels',
    marks: 13,
    stem: 'Most transport vehicles run on petrol or diesel, which are fossil fuels refined from crude oil. Scientists are finding innovative solutions to replace fossil fuels with biofuels — fuels made from recently living biological material such as sugar cane, corn or algae. Oil-based fuels release large amounts of CO₂ when burned. Biofuels can be grown and harvested on agricultural land. However, large volumes of biofuel are needed, requiring large areas of land and significant water resources. Biofuels also provide jobs in rural farming communities, but can compete with food crops for agricultural land.',
    figImages: ['/images/papers/chemistry-nov-2019/page-25.png'],
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of using biofuels as a replacement for fossil fuels in transportation. In your answer you should consider the sustainability of production of biofuels and fossil fuels, the environmental impacts of the production and use of biofuels and fossil fuels, the social impacts of the production, use and end of use of biofuels and fossil fuels, and your opinion about replacing fossil fuels with biofuels.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
