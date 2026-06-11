import type { PaperMeta } from '@/data/papers/chemistry-nov-2019/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2019-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Diopside / Roman concrete (4 marks, Crit A) ────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    marks: 4,
    stem: 'Ancient Roman concrete is famous for its incredible durability, lasting more than 2,000 years. One of the key minerals that gives Roman concrete its strength is diopside. Diopside is a naturally occurring mineral. The chemical formula for diopside is CaMgSi₂O₆.',
    figImages: ['page-02.png'],
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in diopside, CaMgSi₂O₆.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in diopside are calcium and silicon. Identify the group and period of each element in the periodic table.',
        marks: 2,
        ph: 'Ca: Group 2 Period 4; Si: Group 4 Period 3',
        widget: 'inline_dropdown_select',
        widgetItems: ['Calcium – Group', 'Calcium – Period', 'Silicon – Group', 'Silicon – Period'],
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

  // ─── Q2: Guitar string / brass + bismuth cooling curve (11 marks, Crit A) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    marks: 11,
    stem: 'Guitar strings have been made from bronze (an alloy of copper and tin) for hundreds of years. Modern guitar strings use various brass (copper-zinc) and steel alloys. Different compositions of metal give strings different acoustic properties. Here are the compositions and properties of four different guitar string alloys.',
    figImages: ['page-03.png', 'page-04.png', 'page-05.png', 'page-06.png'],
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of copper and zinc that makes up brass.',
        marks: 1,
        ph: 'A mixture of metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
      },
      {
        label: 'b',
        text: 'Suggest why brass with very low zinc content and brass with very high zinc content would both be unsuitable materials to make a guitar string.',
        marks: 2,
        ph: 'Low zinc: too soft/poor resonance; Very high zinc: too brittle/snaps',
      },
      {
        label: 'c',
        text: 'A complete set of guitar strings is made from 12.8 m of steel wire. The total mass of the strings is 0.224 kg. Calculate the number of moles of iron needed to make the strings, assuming all the wire is made of iron. Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 224/56 = 4.0 mol',
      },
      {
        label: 'd',
        text: 'Bismuth is a brittle metal sometimes used in low-melting-point alloys for fire sprinklers. The graph shows how the temperature of a sample of bismuth changes over time as it cools and solidifies. State the physical state of bismuth at point B on the graph.',
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
        text: 'State the melting point of bismuth from the graph.',
        marks: 1,
        ph: '271 °C (accept ±1 °C)',
      },
    ],
  },

  // ─── Q3: Fireworks chemistry (10 marks, Crit A) ──────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    marks: 10,
    stem: 'Fireworks contain various metal salts that produce colourful effects when burned. Historical fireworks also contained small amounts of radium compounds for luminous effects. Scientific investigations into the chemistry of fireworks led to the discovery of actinium-227 and francium-223 as decay products of uranium. Both actinium and francium are radioactive elements.',
    figImages: ['page-07.png', 'page-08.png', 'page-09.png'],
    tasks: [
      {
        label: 'a',
        text: 'Calcium carbonate reacts with hydrochloric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Calcium chloride + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Write a balanced symbol equation for the reaction of calcium carbonate with hydrochloric acid.',
        marks: 3,
        ph: 'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why using barium nitrate in fireworks would be safer for spectators than using actinium-227 compounds.',
        marks: 2,
        ph: 'Barium nitrate not radioactive; radioactivity damages body cells',
      },
      {
        label: 'd',
        text: 'Firework chemistry research revealed the isotopes actinium-227 (²²⁷Ac) and francium-223 (²²³Fr). Determine the number of protons, neutrons and electrons in an atom of ²²⁷Ac and ²²³Fr.',
        marks: 2,
        ph: 'Ac: p=89,n=138,e=89; Fr: p=87,n=136,e=87',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²²⁷Ac', 'Neutrons – ²²⁷Ac', 'Electrons – ²²⁷Ac', 'Protons – ²²³Fr', 'Neutrons – ²²³Fr', 'Electrons – ²²³Fr'],
        widgetOptions: ['85', '86', '87', '88', '89', '90', '134', '135', '136', '137', '138'],
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

  // ─── Q4: Soil wetting agents investigation (16 marks, Crit C+B) ──────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – soil wetting agents',
    marks: 16,
    stem: 'A student investigates how much water different brands of soil wetting agent can absorb when mixed with sandy soil. The student measures 400 cm³ of water into a beaker, adds a fixed mass of treated sandy soil containing a wetting agent, stirs for 5 minutes, and then pours the mixture through a filter. The volume of water left over is recorded.',
    figImages: ['page-11.png', 'page-12.png', 'page-13.png', 'page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=brand of wetting agent; DV=volume water absorbed; CVs=mass soil, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table: wetting agent brand | volume remaining (cm³) | 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=brand; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which brand absorbs the most water?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — graph shows water NOT absorbed; need to process data',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which brand of wetting agent you could use to absorb 250 cm³ of water. You should use calculations to support your answer.',
        marks: 3,
        ph: 'Brand 2: 400−150=250 cm³ absorbed; exactly meets requirement; justification',
      },
    ],
  },

  // ─── Q5: Disposable vs reusable coffee cups (20 marks, Crit D+B) ─────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    marks: 20,
    stem: 'The main insulating material in disposable coffee cups is expanded polystyrene (EPS) or paper with a plastic lining. Approximately 500 billion disposable coffee cups are used worldwide each year, and fewer than 1% are recycled due to their plastic lining. Reusable cups made from ceramic or stainless steel can be used hundreds of times but require energy and water for washing.',
    figImages: ['page-14.png', 'page-15.png', 'page-16.png'],
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using disposable coffee cups compared to reusable cups. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Disposable: landfill/plastic lining/oil-based; Reusable: water/energy for washing; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different cup materials keeps a hot drink warmest for the longest time. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=cup material; DV=temperature after time; CVs=initial temp, volume, time; 5 materials×3 trials; replicable method',
      },
    ],
  },

  // ─── Q6: Coffee cup brand data analysis (8 marks, Crit C+B) ─────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – cup insulation',
    marks: 8,
    stem: 'A researcher tests five brands of reusable coffee cup. Each cup has a different wall thickness and a different type of insulation material. The researcher measures how much heat is lost after 30 minutes for each cup brand.',
    figImages: ['page-17.png', 'page-18.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the cup properties and heat loss.',
        marks: 3,
        ph: 'Hypothesis not supported; ThermoSip retains most heat with thinnest wall; insulation type matters',
      },
      {
        label: 'b',
        text: 'A student suggests that increasing wall thickness reduces heat loss. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If wall thicker, then heat loss reduces, because more insulation; BUT ThermoSip contradicts this',
      },
      {
        label: 'c',
        text: 'Many reusable cups have a double-wall design with a vacuum between the walls. Suggest how the vacuum between the walls helps reduce heat loss.',
        marks: 2,
        ph: 'Vacuum removes air/particles; no conduction/convection through vacuum; heat retained',
      },
    ],
  },

  // ─── Q7: Chromatography of ink dyes in pens (8 marks, Crit C) ────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    marks: 8,
    stem: 'A forensic scientist investigates the ink dyes used in four different brands of blue pen (A, B, C and D) to help identify which pen was used to write a disputed signature. A sample taken from the document is also tested using chromatography.',
    figImages: ['page-19.png', 'page-20.png', 'page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the pen brand whose ink was used to write the signature. Justify your answer.',
        marks: 2,
        ph: 'Dye D; same spot pattern / same pigment components',
        widget: 'radio_select',
        widgetOptions: ['Dye A', 'Dye B', 'Dye C', 'Dye D'],
      },
      {
        label: 'b',
        text: 'For each of the other pen brands, explain why their ink was not used to write the signature.',
        marks: 3,
        ph: 'Other inks lack same components; A has extra pigment; B and C missing components found in sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the unique spot found only in Dye D.',
        marks: 3,
        ph: 'Spot distance ÷ solvent front; Rf ≈ 0.40',
      },
    ],
  },

  // ─── Q8: Bioplastics — functional groups & HDPE vs PHA (10 marks, Crit A+D) ─
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – biopolymers & packaging',
    marks: 10,
    stem: 'Polyhydroxyalkanoate (PHA) is a bioplastic produced by bacteria feeding on organic waste. It can be used as an environmentally friendly alternative to conventional plastics. High-density polyethylene (HDPE) is the most widely used packaging plastic today.',
    figImages: ['page-22.png', 'page-23.png', 'page-24.png'],
    tasks: [
      {
        label: 'a',
        text: 'Below are three different monomers used to make different types of plastic. Select the class name of the functional group that is circled in each monomer.',
        marks: 3,
        ph: 'A=Alcohol; B=Ester; C=Alkene',
        widget: 'inline_dropdown_select',
        widgetItems: ['Monomer A', 'Monomer B', 'Monomer C'],
        widgetOptions: ['Alkane', 'Alcohol', 'Ester', 'Carboxylic acid', 'Alkene'],
      },
      {
        label: 'b',
        text: 'A supermarket chain is deciding whether to switch from HDPE plastic bags to PHA bioplastic bags to reduce their environmental impact. Using the data table, explain the advantages and disadvantages of using PHA compared to HDPE for carrier bags. In your answer you should outline the physical properties required in a carrier bag, describe the advantages and disadvantages that PHA has compared to HDPE, and justify whether PHA would make a suitable replacement for HDPE.',
        marks: 7,
        ph: 'HDPE properties; PHA biodegrade/renewable; PHA costly/lower strength; justified conclusion',
      },
    ],
  },

  // ─── Q9: Wind energy vs fossil fuel essay (13 marks, Crit D) ────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – wind energy vs fossil fuels',
    marks: 13,
    stem: 'Fossil fuels such as coal, oil and natural gas supply approximately 80% of the world\'s energy needs. Scientists and engineers are developing renewable energy sources to replace fossil fuels. Wind energy is produced by wind turbines, which convert kinetic energy from wind into electricity. Wind turbines are made from fibreglass, steel and rare earth metals. Fossil fuel power stations release CO₂ and other pollutants. Wind turbines can be built on farmland, allowing agricultural use to continue underneath them, but they require large areas of land and can affect local wildlife and communities.',
    figImages: ['page-25.png'],
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of using wind energy as a replacement for fossil fuels in electricity generation. In your answer you should consider the sustainability of production of wind energy and fossil fuels, the environmental impacts of the production and use of wind energy and fossil fuels, the social impacts of the production, use and end of use of wind energy and fossil fuels, and your opinion about replacing fossil fuels with wind energy.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
