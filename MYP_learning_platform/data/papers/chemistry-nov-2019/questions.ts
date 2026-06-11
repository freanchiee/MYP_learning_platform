import type { Question } from '@/lib/types'

export interface PaperMeta {
  id: string
  subject: string
  session: string
  year: number
  totalMarks: number
  durationMinutes: number
  criteria: string[]
}

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2019',
  subject: 'Chemistry',
  session: 'November',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Terracotta / Nacrite clay (4 marks, Crit A) ─────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic structure & the periodic table',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 4,
    stem: 'Terracotta is made from baked clay. Clay is composed of a number of minerals including kaolin. One of the main compounds found in kaolin is nacrite. The formula for nacrite is Al₂Si₂O₅(OH)₄.',
    figImages: ['page-02.png'],
    tasks: [
      {
        label: 'a',
        text: 'State the number of oxygen atoms in nacrite, Al₂Si₂O₅(OH)₄.',
        marks: 1,
        ph: 'Count all O in formula',
      },
      {
        label: 'b',
        text: 'Two of the elements in nacrite are aluminium and silicon. Identify the group and period of each element in the periodic table.',
        marks: 2,
        ph: 'Al: Group 3 Period 3; Si: Group 4 Period 3',
        widget: 'inline_dropdown_select',
        widgetItems: ['Aluminium – Group', 'Aluminium – Period', 'Silicon – Group', 'Silicon – Period'],
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

  // ─── Q2: Slinky / Steel + Lead cooling curve (11 marks, Crit A) ──────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Properties of metals & mixtures',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 11,
    stem: 'The Slinky was invented in 1943 and was made of a type of high carbon steel. High carbon steel is composed of iron with carbon and manganese. In the 1970s, plastic became more common and a large number of cheaper Slinkys were produced from this new material.',
    figImages: ['page-03.png', 'page-04.png', 'page-05.png', 'page-06.png'],
    tasks: [
      {
        label: 'a',
        text: 'Select the term used to describe the mixture of iron, carbon and manganese that makes up steel.',
        marks: 1,
        ph: 'A mixture of metals / non-metals',
        widget: 'radio_select',
        widgetOptions: ['Allotrope', 'Alloy', 'Compound', 'Ester'],
      },
      {
        label: 'b',
        text: 'Suggest why low carbon steel and very high carbon steel would both be unsuitable materials to make a Slinky.',
        marks: 2,
        ph: 'Low C: too soft/malleable; Very high C: too brittle',
      },
      {
        label: 'c',
        text: 'The original Slinky was made from 24.4 m of high carbon steel wire. The mass of a Slinky is 0.405 kg. Calculate the number of moles of iron needed to make a Slinky, assuming that all the wire is made of iron. Give your answer to 2 significant figures.',
        marks: 4,
        ph: 'n = 405/56 = 7.2 mol',
      },
      {
        label: 'd',
        text: 'Old toy figures were sometimes made from lead. The graph below shows how the temperature of a sample of lead changes over time as it cools and solidifies. State the physical state of lead at point B on the graph.',
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
        text: 'State the melting point of lead from the graph.',
        marks: 1,
        ph: '327 °C (accept ±1 °C)',
      },
    ],
  },

  // ─── Q3: Radioactive toys / Atomic Energy Lab (10 marks, Crit A) ─────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Radioactivity & atomic structure',
    topicCanonical: 'Nuclear Chemistry & Radioactivity',
    topicGroup: 'Nuclear Chemistry',
    marks: 10,
    stem: 'The Gilbert U-238 Atomic Energy Lab was a chemistry set produced in the 1950s. It contained real radioactive samples including strontium-90 and radium-226, alongside other materials such as zinc sulphide.',
    figImages: ['page-07.png', 'page-08.png', 'page-09.png'],
    tasks: [
      {
        label: 'a',
        text: 'Strontium carbonate reacts with nitric acid. State the names of the products of this reaction.',
        marks: 2,
        ph: 'Strontium nitrate + carbon dioxide + water',
      },
      {
        label: 'b',
        text: 'Write a balanced symbol equation for the reaction of strontium carbonate with nitric acid.',
        marks: 3,
        ph: 'SrCO₃ + 2HNO₃ → Sr(NO₃)₂ + CO₂ + H₂O',
      },
      {
        label: 'c',
        text: 'Outline why having toys with zinc sulphide would be better for your health than those containing radium.',
        marks: 2,
        ph: 'ZnS not radioactive; radiation damages body cells',
      },
      {
        label: 'd',
        text: 'The Atomic Energy Lab also contained samples of polonium-210 (²¹⁰Po) and lead-210 (²¹⁰Pb). Determine the number of protons, neutrons and electrons in an atom of ²¹⁰Po and ²¹⁰Pb.',
        marks: 2,
        ph: 'Po: p=84,n=126,e=84; Pb: p=82,n=128,e=82',
        widget: 'inline_dropdown_select',
        widgetItems: ['Protons – ²¹⁰Po', 'Neutrons – ²¹⁰Po', 'Electrons – ²¹⁰Po', 'Protons – ²¹⁰Pb', 'Neutrons – ²¹⁰Pb', 'Electrons – ²¹⁰Pb'],
        widgetOptions: ['82', '83', '84', '85', '86', '126', '127', '128', '129', '130'],
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

  // ─── Q4: Hydrogels experiment (16 marks, Crit B/C) ────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Scientific investigation – hydrogels',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 16,
    stem: 'A student investigates how much water different hydrogels can absorb. The student measures 400 cm³ of water into a beaker, adds a fixed mass of hydrogel, stirs for 5 minutes, and then pours the mixture through a filter. The volume of water left over is recorded.',
    figImages: ['page-11.png', 'page-12.png', 'page-13.png', 'page-14.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the independent variable (IV), dependent variable (DV) and two controlled variables (CVs) for this investigation.',
        marks: 4,
        ph: 'IV=type of hydrogel; DV=volume water absorbed; CVs=mass, temperature',
      },
      {
        label: 'b',
        text: 'The student collects the following data. Organise the raw data into a suitable table.',
        marks: 4,
        ph: 'Table: hydrogel type | volume water remaining (cm³) | 3 trials',
      },
      {
        label: 'c',
        text: 'Using the data in the table, draw a suitable graph to display the results.',
        marks: 4,
        ph: 'Bar chart; title; x=hydrogel type; y=volume/cm³; data plotted',
      },
      {
        label: 'd',
        text: 'A student says the graph directly answers the research question "Which hydrogel absorbs the most water?" Is the student correct? Explain your answer.',
        marks: 1,
        ph: 'No — raw data is water NOT absorbed; must process',
        widget: 'radio_select',
        widgetOptions: ['Yes', 'No'],
      },
      {
        label: 'e',
        text: 'Using the data in part (b), explain which hydrogel you could use to absorb 340 cm³ of water. You should use calculations to support your answer.',
        marks: 3,
        ph: 'Hydrogel 1: 400−60=340 cm³ absorbed; most water absorbed',
      },
    ],
  },

  // ─── Q5: Disposable vs reusable nappies (20 marks, Crit D+B) ─────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Environmental impact & experimental design',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 20,
    stem: 'The main absorbent material in disposable nappies is hydrogel. In the UK, 2–3 % of all household waste is estimated to be disposable nappies. This is approximately 3 × 10⁹ nappies, equivalent to approximately 5 × 10⁵ kg of waste (nappy + body waste) each year. The alternative is reusable nappies, which reduce demands on landfill but require energy and water for washing.',
    figImages: ['page-14.png', 'page-15.png', 'page-16.png'],
    tasks: [
      {
        label: 'a',
        text: 'Discuss the environmental impacts and advantages and disadvantages of using disposable nappies compared to reusable nappies. Include a conclusion that appraises which type causes less harm to the environment.',
        marks: 5,
        ph: 'Disposable: landfill/waste/energy in production; Reusable: water/energy for washing; balanced conclusion',
      },
      {
        label: 'b',
        text: 'Design an investigation to test which of five different nappy brands absorbs the most water. Your investigation should include the independent and dependent variables, how you will control variables, the equipment needed, sufficient data collection, and a method that could be replicated to produce relevant data.',
        marks: 15,
        ph: 'IV=nappy brand; DV=volume absorbed; CVs=mass, temp, time; 5 brands×3 trials; detailed replicable method',
      },
    ],
  },

  // ─── Q6: Nappy brand data analysis (8 marks, Crit C+B) ──────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Data analysis – nappy absorbency',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A student investigates different brands of nappy. Each nappy contains a different mass of hydrogel and a different mass of fluff pulp (cellulose material). The student measures the total volume of water each brand absorbs.',
    figImages: ['page-17.png', 'page-18.png'],
    tasks: [
      {
        label: 'a',
        text: 'Using the data, make three statements about the relationship between the nappy components and the volume of water absorbed.',
        marks: 3,
        ph: 'Not supported: Pugs most absorbent; Pugs least hydrogel; fluff pulp also affects absorption',
      },
      {
        label: 'b',
        text: 'A student suggests that the mass of hydrogel determines the volume of water absorbed. Using an if–then–because framework, explain how the data supports or does not support this suggestion.',
        marks: 3,
        ph: 'If hydrogel increases, then water absorbed increases, because hydrogel absorbs water; OR data shows Pugs contradicts this',
      },
      {
        label: 'c',
        text: 'Fluff pulp is found in nappies alongside hydrogel. Suggest how fluff pulp helps the hydrogel absorb urine.',
        marks: 2,
        ph: 'Fluff pulp removes ions; hydrogel absorbs pure water',
      },
    ],
  },

  // ─── Q7: Chromatography of nappy dyes (8 marks, Crit C) ─────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Chromatography & data interpretation',
    topicCanonical: 'Separation & Purification',
    topicGroup: 'States of Matter',
    marks: 8,
    stem: 'A scientist investigates the dyes used to colour disposable nappies. The scientist tests four different dyes (A, B, C and D) and a sample from the nappy using chromatography.',
    figImages: ['page-19.png', 'page-20.png', 'page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'Identify the dye that the nappy sample contains. Justify your answer.',
        marks: 2,
        ph: 'Dye C; same spot pattern / same pigment components',
        widget: 'radio_select',
        widgetOptions: ['Dye A', 'Dye B', 'Dye C', 'Dye D'],
      },
      {
        label: 'b',
        text: 'For each of the other dyes, explain why they are not contained in the nappy sample.',
        marks: 3,
        ph: 'Other dyes lack same components; B has only 2 in common; D has extra pigment not in sample',
      },
      {
        label: 'c',
        text: 'The Rf value compares the distance moved by each spot with the distance moved by the solvent front. Calculate the Rf value of the spot responsible for the irritation in Dye C.',
        marks: 3,
        ph: 'Yellow spot distance ÷ solvent front; Rf ≈ 0.48',
      },
    ],
  },

  // ─── Q8: Plastics — functional groups & PET vs PLA (10 marks, Crit A+D) ──
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Organic chemistry – polymers & plastics',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 10,
    stem: 'Plastic is a synthetic material made from a variety of organic polymers. Polymers are made up from a large number of monomers that are chemically bonded together.',
    figImages: ['page-22.png', 'page-23.png', 'page-24.png'],
    tasks: [
      {
        label: 'a',
        text: 'Below are three different monomers used to make different types of plastic. Select the class name of the group that is circled in each monomer.',
        marks: 3,
        ph: 'A=Ester; B=Alcohol; C=Alkene',
        widget: 'inline_dropdown_select',
        widgetItems: ['Monomer A', 'Monomer B', 'Monomer C'],
        widgetOptions: ['Alkane', 'Alcohol', 'Ester', 'Carboxylic acid', 'Alkene'],
      },
      {
        label: 'b',
        text: 'Michelle, Yuri and Paul are excited to open their own new coffee shop. They are deciding which type of cup to use and want their cups to be environmentally friendly, practical to use and inexpensive to maximise profit. Using the table above, explain the advantages and disadvantages of using PLA compared to PET for the take-away cups in the coffee shop. In your answer you should outline the physical properties required in a coffee cup, describe the advantages and disadvantages that PLA has compared to PET, and justify whether PLA would make a suitable replacement for PET.',
        marks: 7,
        ph: 'PET properties; PLA biodegrade/renewable; PLA limited capacity/more expensive; justified conclusion',
      },
    ],
  },

  // ─── Q9: Algae-based plastics essay (13 marks, Crit D) ───────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Sustainability – algae-based vs oil-based plastics',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 13,
    stem: 'Most plastics are made from chemicals that come from oil. Scientists are finding innovative solutions to produce plastics that have less impact on the environment. One solution is to produce plastic using algae. Oil-based plastics are made from fossil fuels and have unlimited uses but they release greenhouse gases. Algae-based plastics can be made into new plastic alternatively it can be reused and made into household items. In some areas of the ocean, plastics form large islands of waste that pose threats to wildlife.',
    figImages: ['page-25.png'],
    tasks: [
      {
        label: '',
        text: 'Using your experience from your wider MYP studies and the information above, discuss and evaluate the impact of algae-based biodegradable plastics as a replacement for oil-based plastics. In your answer you should consider the sustainability of production of algae-based and oil-based plastics, the environmental impacts of the production and end of use of algae-based and oil-based plastics, the social impacts of the production, use and end of use of algae-based and oil-based plastics, and your opinion about replacing oil-based with algae-based plastics.',
        marks: 13,
        ph: 'Sustainability, environmental impacts, social impacts, justified conclusion on replacement',
      },
    ],
  },
]
