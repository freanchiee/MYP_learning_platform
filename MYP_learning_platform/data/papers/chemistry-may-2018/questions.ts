import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2018',
  subject: 'Chemistry',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Formic Acid (Crit A, 11 marks) ────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Formic Acid, Lewis Structures and Equilibrium',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'In 1671 John Ray, an English naturalist, distilled a liquid collected from ants. He produced a strong-smelling acidic liquid that he named formic acid from the Latin word formica meaning ant. Formic acid is the simplest carboxylic acid. The formula of formic acid is HCOOH.',
    figImages: [
      '/images/papers/chemistry-may-2018/page-02.png',
      '/images/papers/chemistry-may-2018/page-03.png',
      '/images/papers/chemistry-may-2018/page-04.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Use** the periodic table to **identify** the group and period for each element present in formic acid (HCOOH).',
        marks: 3,
        ph: 'Carbon Grp 4 P 2; Hydrogen Grp 1 P 1; Oxygen Grp 6 P 2',
        widget: 'inline_dropdown_select',
        widgetItems: ['Carbon – Group', 'Carbon – Period', 'Hydrogen – Group', 'Hydrogen – Period', 'Oxygen – Group', 'Oxygen – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'b',
        text: '**State** the systematic name for formic acid.',
        marks: 1,
        ph: 'Systematic (IUPAC) name of HCOOH',
      },
      {
        label: 'c',
        text: '**Draw** a Lewis (electron dot or dot cross) structure showing the bonding in formic acid, HCOOH.',
        marks: 2,
        ph: 'Lewis structure: C double-bonded to O, single-bonded to OH and H; show lone pairs',
      },
      {
        label: 'd',
        text: 'Formic acid partially dissociates in water to form an equilibrium. **Write down** a balanced equation for this equilibrium including state symbols.',
        marks: 4,
        ph: 'HCOOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCOO⁻(aq)',
      },
      {
        label: 'e',
        text: '**State** how the acid can be neutralized.',
        marks: 1,
        ph: 'Neutralization method for formic acid',
      },
    ],
  },

  // ─── Q2 — Hard Water, Mg²⁺ and Ca²⁺ (Crit A, 13 marks) ─────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hard Water, Ionic Bonding and Solubility',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 13,
    stem: 'Natural sources of water can contain different dissolved ions. Water containing mainly group 2 ions such as calcium and magnesium (Ca²⁺ and Mg²⁺) is known as "hard" water.\n\nThe most common method to investigate the "hardness" of water is by looking at the foam produced when the water is treated with soap. There is less foam formed when soap is used with hard water compared to soft water.\n\nMany methods can be used to soften hard water. These methods work by removing the Ca²⁺ and Mg²⁺ ions from the water. One method softens water by forming a precipitate of an insoluble solid in an aqueous solution. The table below compares the solubility in water of different combinations of anions with Ca²⁺ and Mg²⁺ ions.\n\nSolubility in water at 25 °C of Ca²⁺ and Mg²⁺ ions:\n\n| Anion | Mg²⁺ | Ca²⁺ |\n|---|---|---|\n| Cl⁻, Br⁻, I⁻ | soluble | soluble |\n| SO₄²⁻ | soluble | insoluble |\n| OH⁻ | insoluble | insoluble |\n| CO₃²⁻, PO₄³⁻ | insoluble | insoluble |',
    figImages: [
      '/images/papers/chemistry-may-2018/page-05.png',
      '/images/papers/chemistry-may-2018/page-06.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the number of protons and neutrons in a ²⁴Mg²⁺ ion.',
        marks: 2,
        ph: 'Protons = 12; neutrons = 12',
      },
      {
        label: 'b',
        text: 'Use the information in the table to **determine** the formula of magnesium phosphate.',
        marks: 1,
        ph: 'Formula of magnesium phosphate from ion charges',
      },
      {
        label: 'c',
        text: '**Identify** two physical properties that distinguish between magnesium and chlorine at a temperature of 25 °C. For each property, state how it distinguishes between the two elements.',
        marks: 4,
        ph: 'Property 1 + how it distinguishes (e.g. state: Mg solid, Cl gas); Property 2 + how it distinguishes',
      },
      {
        label: 'd',
        text: '**State** the type of bond that would form in a reaction between magnesium and chlorine.',
        marks: 1,
        ph: 'Type of bond formed when Mg reacts with Cl',
      },
      {
        label: 'e',
        text: 'Using the solubility data in the table above, **explain** how you would remove Ca²⁺ ions only from hard water.',
        marks: 4,
        ph: 'Add sulphate; Ca²⁺ forms insoluble CaSO₄; Mg²⁺ stays in solution; filter off precipitate',
      },
      {
        label: 'f',
        text: 'Crystals of magnesium sulphate pentahydrate (MgSO₄·5H₂O) are heated to form magnesium sulphate. **State** the number of moles of water formed if 0.5 moles of MgSO₄·5H₂O are heated.',
        marks: 1,
        ph: 'Moles of water released from 0.5 mol MgSO₄·5H₂O',
      },
    ],
  },

  // ─── Q3 — Animal Bones/Teeth, CaCO₃ and Inquiry Design (Crit B, 26 marks) ─
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Calcium Carbonate, Acid Reactions and Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 26,
    stem: 'Many animals are at risk of extinction because of illegal trading of their teeth and bones. Teeth and bones from different animals contain different percentages by mass of calcium carbonate. Scientists can use calcium carbonate data to identify which bone samples come from different animals and to check that the bones are not being traded illegally.\n\nThe percentage by mass of calcium carbonate in bones and teeth from different animals are shown below.\n\n| Animal | Teeth (%) | Bone (%) |\n|---|---|---|\n| Elephant | 20.93 | 22.58 |\n| Horse | 28.60 | 24.70 |\n| Human | 29.82 | 23.10 |\n| Monkey | 29.93 | 23.12 |\n| Dolphin | 22.12 | 15.16 |\n\nMetal carbonates react with hydrochloric acid to form a metal chloride, water and a gas which will turn limewater cloudy.\n\nThe symbol equation for the reaction of calcium carbonate with hydrochloric acid is:\n\nCaCO₃(s) + 2HCl(aq) → salt (aq) + CO₂(g) + H₂O (l)',
    figImages: [
      '/images/papers/chemistry-may-2018/page-09.png',
      '/images/papers/chemistry-may-2018/page-10.png',
      '/images/papers/chemistry-may-2018/page-11.png',
      '/images/papers/chemistry-may-2018/page-12.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the salt produced in the reaction above.',
        marks: 1,
        ph: 'Identify the salt product of CaCO₃ + HCl',
        widget: 'radio_select',
        widgetOptions: ['CaCl₂', 'CaO', 'CaCl', 'H₂'],
      },
      {
        label: 'b',
        text: 'A scientist investigating teeth and bones developed the following research statement: "The higher the percentage of calcium carbonate in the bones or teeth, the larger the volume of carbon dioxide produced when reacted with acid." **Identify** the variables in this investigation: Independent variable, Dependent variable, and two Control variables.',
        marks: 4,
        ph: 'IV: % CaCO₃ or type of bone/tooth; DV: volume CO₂; CV: mass, acid volume/concentration',
      },
      {
        label: 'c',
        text: '**Design** a table suitable for recording and processing your data. You should select the number of rows and columns and add labels.',
        marks: 4,
        ph: 'Table: Animal Part column, Trial 1/2/3 columns, Volume CO₂ (cm³) header, ≥1 animal row',
      },
      {
        label: 'd',
        text: 'The percentage by mass of calcium carbonate can be determined using the following equipment: a gas syringe connected to a conical flask containing the reaction mixture. Using the equipment above, **design** a method to determine the mass of calcium carbonate in the teeth or bones. In your answer you should include:\n\n• a list of any additional equipment you will need\n• details of your method for manipulating the variables\n• details of the data you will collect\n• how you will use your data to decide which tooth or bone contains the most calcium carbonate\n• a statement of any assumptions that you have made\n• how you will ensure that your method is safe.',
        marks: 17,
        ph: 'Full design: equipment list, method, data collection, analysis, assumptions, safety (rubric 1-4)',
      },
    ],
  },

  // ─── Q4 — Graph Analysis, CaCO₃ Percentage (Crit C, 6 marks) ────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis and Percentage Calculations',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 6,
    stem: 'The graph below shows the volume of carbon dioxide produced when calcium carbonate reacts with hydrochloric acid. The x-axis shows mass of CaCO₃ (g) from 1.00 to 3.00 g; the y-axis shows volume of CO₂ produced (cm³) from 200 to 700 cm³.',
    figImages: [
      '/images/papers/chemistry-may-2018/page-13.png',
      '/images/papers/chemistry-may-2018/page-14.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'The data points for 1.9 g and 2.5 g of calcium carbonate do not appear to be correct. **Comment** on the data for 1.9 g and 2.5 g and **suggest** what could be done to check the data for these two points.',
        marks: 2,
        ph: 'Outliers/anomalous; repeat measurements for 1.9g and 2.5g',
      },
      {
        label: 'b',
        text: 'One bone sample of mass 8.71 g was placed in hydrochloric acid and produced 540 cm³ of carbon dioxide. Using data from the graph and the table, **calculate** the percentage by mass of calcium carbonate in the bone sample and **identify** which animal the sample comes from.',
        marks: 4,
        ph: 'Read ~2.1g CaCO₃ from graph; % = 2.1/8.71 × 100 ≈ 24.1%; identify as Horse bone',
      },
    ],
  },

  // ─── Q5 — Eggshells, Limestone vs Oyster Shell (Crit B/C/D, 18 marks) ────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Rates of Reaction and Data Reliability',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 18,
    stem: 'Chickens and eggs are a major source of food for most of the world population. Eggshells need to be thick and strong to ensure that they are transported and stored so they do not break. The quality of the eggshell is improved by eating dietary supplements to help with the formation of eggshells. Farmers use dietary supplements of limestone chips (CaCO₃) or crushed oyster shell (also mainly CaCO₃) to improve eggshell thickness.\n\nAs these supplements move through the digestive system they come into contact with hydrochloric acid which causes the limestone or crushed oyster shell to react.\n\nIt has been suggested that due to the size of the limestone chips, they do not spend a long time in the digestive system, so farmers need to give the hens more of the limestone chips compared to the crushed oyster shell to produce eggs of the same thickness.\n\nSome scientists want to compare the reactions of limestone and crushed oyster shell. They take a fixed mass of limestone and add a fixed volume and concentration of hydrochloric acid to their measuring apparatus. The scientists then repeat the experiment with crushed oyster shell.',
    figImages: [
      '/images/papers/chemistry-may-2018/page-14.png',
      '/images/papers/chemistry-may-2018/page-15.png',
      '/images/papers/chemistry-may-2018/page-16.png',
      '/images/papers/chemistry-may-2018/page-17.png',
      '/images/papers/chemistry-may-2018/page-18.png',
      '/images/papers/chemistry-may-2018/page-19.png',
      '/images/papers/chemistry-may-2018/page-20.png',
      '/images/papers/chemistry-may-2018/page-21.png',
      '/images/papers/chemistry-may-2018/page-22.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'It is important investigations take place in a safe environment. **Select** the meaning of each hazard symbol shown (Image 1: corrosive symbol, Image 2: flammable symbol, Image 3: toxic/skull symbol).',
        marks: 3,
        ph: 'Image 1 = Corrosive; Image 2 = Flammable; Image 3 = Toxic',
        widget: 'inline_dropdown_select',
        widgetItems: ['Image 1', 'Image 2', 'Image 3'],
        widgetOptions: ['Corrosive', 'Irritant', 'Radioactive', 'Flammable', 'Toxic'],
      },
      {
        label: 'b',
        text: '**Select** the symbol from part (a) that would be found on the hydrochloric acid used in this investigation.',
        marks: 1,
        ph: 'Which hazard symbol appears on the HCl bottle',
        widget: 'radio_select',
        widgetOptions: ['Image 1', 'Image 2', 'Image 3'],
      },
      {
        label: 'c',
        text: 'The results for the limestone reactions are shown in the table below. At t = 40 s: Trial 1 = 57 cm³, Trial 2 = 67 cm³, Trial 3 = 55 cm³. **Analyse** the data and **determine** an appropriate average volume of gas produced at a time of 40 seconds. **Justify** your answer.',
        marks: 2,
        ph: 'Exclude Trial 2 (67) as outlier; average of Trial 1 and Trial 3 = 56 cm³',
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for limestone and crushed oyster shell is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each supplement over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Limestone ≈ 1.33 cm³s⁻¹; Crushed oyster shell ≈ 0.28 cm³s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the limestone produced more carbon dioxide in the same time as the crushed oyster shell.',
        marks: 3,
        ph: 'Smaller particles → larger surface area → faster/greater rate of reaction',
      },
      {
        label: 'f',
        text: 'Using the data in the graph, **explain** why the crushed oyster shell is a better supplement for the hens than the limestone chips.',
        marks: 2,
        ph: 'Oyster shell dissolves more slowly → stays in digestive system longer → more time to absorb CaCO₃',
      },
      {
        label: 'g',
        text: 'Use the graph to **compare** the reliability of the limestone and oyster shell data.',
        marks: 4,
        ph: 'Limestone: less reliable, greater variability; Oyster shell: more reliable, better consistency',
      },
      {
        label: 'h',
        text: '**Suggest** one way to improve the validity of the data.',
        marks: 1,
        ph: 'One improvement to validity of the investigation',
      },
    ],
  },

  // ─── Q6 — Crude Oil and Fractional Distillation (Crit A/D, 12 marks) ─────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Crude Oil, Fractional Distillation and Environmental Impact',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'Crude oil is a mixture of different sized hydrocarbons and other chemicals and is a source of various fuels. Crude oil can be separated into useful products by fractional distillation. The diagram shows the process: petroleum gas (top), petrol at 40°C, naphtha at 110°C, kerosene at 180°C, diesel at 250°C, lubricants at 350°C, and bitumen at the base (roads).\n\nAccidental oil spills in seas, lakes and rivers can have consequences for birds, fish and other wildlife. Some methods used to clean up oil spills include: oil collected from surface water using a skimmer, burning, dispersion (airplane using chemicals to break down the oil).',
    figImages: [
      '/images/papers/chemistry-may-2018/page-22.png',
      '/images/papers/chemistry-may-2018/page-23.png',
      '/images/papers/chemistry-may-2018/page-24.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Select** the hydrocarbon that would be distilled with petroleum gases. (Three molecular structures are shown: A = single carbon skeleton; B = medium chain ~10 carbons; C = long chain ~14 carbons.)',
        marks: 1,
        ph: 'Smallest hydrocarbon molecule distils with petroleum gases',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
      },
      {
        label: 'b',
        text: '**Outline** the process of fractional distillation.',
        marks: 3,
        ph: 'Crude oil vaporised; rises in column; different fractions condense at different temperatures; smallest molecules have lowest boiling point',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the three methods for cleaning oil spills and identify one method as being the best for the environment.',
        marks: 8,
        ph: 'Comment on all 3 methods; advantages and disadvantages; identify best with scientific justification (rubric 1-4)',
      },
    ],
  },

  // ─── Q7 — Crude Oil Transport, Country X (Crit D, 14 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oil Transport Methods — Environmental and Social Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'Country X consists of a North Island and a South Island separated by a sea. It is known to have severe weather with very strong winds reaching speeds of up to 130 km/h and heavy snow and very high tides. Country X is classified as a Less Economically Developed Country (LEDC) looking forward to improving its economic activity. The capital of the country is located in the more developed South Island. The North Island has smaller indigenous communities. The government is planning to use the image of the country as a tourist destination by promoting its blend of beautiful seas, beaches, coral reefs, natural forests and mountains.\n\nOil fields have been recently discovered under the North Island and the government is currently planning to exploit the oil reserves to provide cheap energy throughout the country and beyond by expanding the surrounding region and exporting the surplus to boost its economy.\n\nKnown ways to transport crude oil are: pipeline, road, and sea.\n\nCrude oil products must be transported from the oil field to refineries and on to other industrial facilities. Pipelines, rail, road and sea are some of the options. The pipes can be above ground or buried at depths of up to 2 metres. Rail transport is economical over long distances. Rail transport uses containers that are specially designed to avoid damage in case of an accident. Road tankers are also specially designed to avoid damage in accidents. Road tankers can travel on existing road systems. Crude oil has been transported at sea by tankers since 1862.',
    figImages: [
      '/images/papers/chemistry-may-2018/page-25.png',
      '/images/papers/chemistry-may-2018/page-26.png',
      '/images/papers/chemistry-may-2018/page-27.png',
    ],
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the most appropriate method of transporting crude oil from the oil field to various locations within the country and exporting excess oil. In your answer you should compare a pipeline with two alternative methods of transport and include:\n\n• advantages and disadvantages of a pipeline\n• advantages and disadvantages of your alternative methods\n• environmental considerations\n• social considerations\n• a concluding appraisal linking all the issues you have discussed.',
        marks: 14,
        ph: 'Pipeline vs road/sea: advantages, disadvantages, environmental/social impacts, concluding appraisal (rubric 1-4)',
      },
    ],
  },
]
