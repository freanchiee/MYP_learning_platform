import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2018-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Propanoic Acid (Crit A, 11 marks) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Propanoic Acid, Lewis Structures and Equilibrium',
    marks: 11,
    stem: 'In 1844, Johan Gottlieb first described propionic acid as a component of fermented dairy products such as Swiss cheese, where it is produced by bacteria during the fermentation process. Propanoic acid gives certain cheeses their distinctive sharp flavour. It is also used commercially as a food preservative because it inhibits the growth of mould. Propanoic acid is a three-carbon carboxylic acid. The formula of propanoic acid is CH₃CH₂COOH.',
    tasks: [
      {
        label: 'a',
        text: '**Use** the periodic table to **identify** the group and period for each element present in propanoic acid (CH₃CH₂COOH).',
        marks: 3,
        ph: 'Carbon Grp 4 P 2; Hydrogen Grp 1 P 1; Oxygen Grp 6 P 2',
        widget: 'inline_dropdown_select',
        widgetItems: ['Carbon – Group', 'Carbon – Period', 'Hydrogen – Group', 'Hydrogen – Period', 'Oxygen – Group', 'Oxygen – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'b',
        text: '**State** the systematic name for propanoic acid.',
        marks: 1,
        ph: 'IUPAC systematic name of CH₃CH₂COOH',
      },
      {
        label: 'c',
        text: '**Draw** a Lewis (electron dot or dot cross) structure showing the bonding in propanoic acid, CH₃CH₂COOH.',
        marks: 2,
        ph: 'Lewis structure: CH₃–CH₂–C(=O)–OH; show all bonds and lone pairs on O atoms',
      },
      {
        label: 'd',
        text: 'Propanoic acid partially dissociates in water to form an equilibrium. **Write down** a balanced equation for this equilibrium including state symbols.',
        marks: 4,
        ph: 'CH₃CH₂COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃CH₂COO⁻(aq)',
      },
      {
        label: 'e',
        text: '**State** how the acid can be neutralized.',
        marks: 1,
        ph: 'Neutralization method for propanoic acid',
      },
    ],
  },

  // ─── Q2 — Hot Spring Water, Ca²⁺ and Mg²⁺ (Crit A, 13 marks) ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hard Water, Ionic Bonding and Solubility',
    marks: 13,
    stem: 'Natural hot springs emerge from geothermal activity and often contain high concentrations of dissolved mineral ions. Water from hot springs in volcanic regions typically contains calcium (Ca²⁺) and magnesium (Mg²⁺) ions leached from the surrounding rocks. This mineral-rich water is known as "hard" water and can cause significant scale deposits in pipes and equipment used at geothermal facilities.\n\nMany methods can be used to soften hard water for industrial and domestic use. These methods work by removing the Ca²⁺ and Mg²⁺ ions from the water. One method softens water by forming a precipitate of an insoluble solid in an aqueous solution. The table below compares the solubility in water of different combinations of anions with Ca²⁺ and Mg²⁺ ions.\n\nSolubility in water at 25 °C of Ca²⁺ and Mg²⁺ ions:\n\n| Anion | Mg²⁺ | Ca²⁺ |\n|---|---|---|\n| Cl⁻, Br⁻, I⁻ | soluble | soluble |\n| SO₄²⁻ | soluble | insoluble |\n| OH⁻ | insoluble | insoluble |\n| CO₃²⁻, PO₄³⁻ | insoluble | insoluble |',
    tasks: [
      {
        label: 'a',
        text: '**State** the number of protons and neutrons in a ²⁶Mg²⁺ ion.',
        marks: 2,
        ph: 'Protons = 12; neutrons = 14',
      },
      {
        label: 'b',
        text: 'Use the information in the table to **determine** the formula of magnesium carbonate.',
        marks: 1,
        ph: 'Formula of magnesium carbonate from ion charges',
      },
      {
        label: 'c',
        text: '**Identify** two physical properties that distinguish between magnesium and bromine at a temperature of 25 °C. For each property, state how it distinguishes between the two elements.',
        marks: 4,
        ph: 'Property 1 + how distinguishes (e.g. Mg solid, Br₂ liquid); Property 2 + how distinguishes',
      },
      {
        label: 'd',
        text: '**State** the type of bond that would form in a reaction between magnesium and bromine.',
        marks: 1,
        ph: 'Type of bond formed when Mg reacts with Br',
      },
      {
        label: 'e',
        text: 'Using the solubility data in the table above, **explain** how you would remove Ca²⁺ ions only from the hot spring water.',
        marks: 4,
        ph: 'Add sulphate; Ca²⁺ forms insoluble CaSO₄; Mg²⁺ stays in solution; filter off precipitate',
      },
      {
        label: 'f',
        text: 'Crystals of magnesium sulphate heptahydrate (MgSO₄·7H₂O) are heated to form anhydrous magnesium sulphate. **State** the number of moles of water formed if 0.4 moles of MgSO₄·7H₂O are heated.',
        marks: 1,
        ph: 'Moles of water released from 0.4 mol MgSO₄·7H₂O',
      },
    ],
  },

  // ─── Q3 — Asian Wildlife, CaCO₃ (Crit B, 26 marks) ─────────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Calcium Carbonate, Acid Reactions and Investigation Design',
    marks: 26,
    stem: 'Many Asian wildlife species are at risk of extinction because of illegal trading of their teeth and bones. Teeth and bones from different animals contain different percentages by mass of calcium carbonate. Scientists can use calcium carbonate data to identify which bone samples come from different animals and to check that the bones are not being traded illegally.\n\nThe percentage by mass of calcium carbonate in bones and teeth from different animals are shown below.\n\n| Animal | Teeth (%) | Bone (%) |\n|---|---|---|\n| Tiger | 32.16 | 26.44 |\n| Bear | 29.83 | 24.12 |\n| Cheetah | 31.52 | 25.71 |\n| Gorilla | 28.41 | 23.37 |\n| Rhinoceros | 18.94 | 16.82 |\n\nMetal carbonates react with hydrochloric acid to form a metal chloride, water and a gas which will turn limewater cloudy.\n\nThe symbol equation for the reaction of calcium carbonate with hydrochloric acid is:\n\nCaCO₃(s) + 2HCl(aq) → salt (aq) + CO₂(g) + H₂O (l)',
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
        ph: 'Identify salt product of CaCO₃ + HCl',
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
        ph: 'Table: Animal Part column, Trial 1/2/3 columns, Volume CO₂ (cm³) header, ≥1 row',
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
        text: 'One bone sample of mass 9.14 g was placed in hydrochloric acid and produced 570 cm³ of carbon dioxide. Using data from the graph and the table, **calculate** the percentage by mass of calcium carbonate in the bone sample and **identify** which animal the sample comes from.',
        marks: 4,
        ph: 'Read ~2.2g CaCO₃ from graph; % = 2.2/9.14 × 100 ≈ 24.1%; identify as Bear bone',
      },
    ],
  },

  // ─── Q5 — Marble vs Chalk, Agricultural pH (Crit B/C/D, 18 marks) ────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Rates of Reaction and Data Reliability',
    marks: 18,
    stem: 'Acidic soils are common in agricultural regions with high rainfall. Farmers add calcium carbonate to neutralise soil acidity, a process called liming. Two calcium carbonate materials are commonly used: marble chips (large crystalline CaCO₃) and chalk granules (finely divided CaCO₃). The effectiveness of soil liming depends on how quickly the calcium carbonate reacts with the acids present in soil.\n\nScientists investigate the rate at which marble chips and chalk granules react with hydrochloric acid (used to simulate soil acid). They take a fixed mass of marble chips and add a fixed volume and concentration of hydrochloric acid to their measuring apparatus. The scientists then repeat the experiment with chalk granules.',
    tasks: [
      {
        label: 'a',
        text: 'It is important investigations take place in a safe environment. **Select** the meaning of each hazard symbol shown (Image 1: toxic/skull symbol, Image 2: flammable symbol, Image 3: corrosive symbol).',
        marks: 3,
        ph: 'Image 1 = Toxic; Image 2 = Flammable; Image 3 = Corrosive',
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
        text: 'The results for the marble chips reactions are shown in the table below. At t = 40 s: Trial 1 = 67 cm³, Trial 2 = 55 cm³, Trial 3 = 65 cm³. **Analyse** the data and **determine** an appropriate average volume of gas produced at a time of 40 seconds. **Justify** your answer.',
        marks: 2,
        ph: 'Exclude Trial 2 (55) as outlier; average of Trial 1 and Trial 3 = 66 cm³',
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for marble chips and chalk granules is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each material over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Chalk granules ≈ 1.45 cm³s⁻¹; Marble chips ≈ 0.30 cm³s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the chalk granules produced more carbon dioxide in the same time as the marble chips.',
        marks: 3,
        ph: 'Smaller chalk granules → larger surface area → faster rate of reaction',
      },
      {
        label: 'f',
        text: 'Using the data in the graph, **explain** why marble chips are a better supplement for soil liming than chalk granules.',
        marks: 2,
        ph: 'Marble dissolves more slowly → stays in soil longer → neutralises acid over longer period',
      },
      {
        label: 'g',
        text: 'Use the graph to **compare** the reliability of the marble chips and chalk granules data.',
        marks: 4,
        ph: 'Chalk: less reliable, greater variability; Marble: more reliable, better consistency',
      },
      {
        label: 'h',
        text: '**Suggest** one way to improve the validity of the data.',
        marks: 1,
        ph: 'One improvement to validity of the investigation',
      },
    ],
  },

  // ─── Q6 — Crude Oil, Fractional Distillation (Crit A/D, 12 marks) ─────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Crude Oil, Fractional Distillation and Environmental Impact',
    marks: 12,
    stem: 'Crude oil is a mixture of different sized hydrocarbons and other chemicals and is a source of various fuels. Crude oil can be separated into useful products by fractional distillation. The diagram shows the process: petroleum gas (top), petrol at 40°C, naphtha at 110°C, kerosene at 180°C, diesel at 250°C, lubricants at 350°C, and bitumen at the base (roads).\n\nAccidental oil spills at sea near coral reef ecosystems can cause severe damage to marine biodiversity. Scientists have proposed three methods to clean up oil spills in shallow reef environments: mechanical skimming using modified boats, in-situ burning of surface oil, and application of dispersant chemicals from aircraft.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the hydrocarbon that would be used as aircraft fuel (kerosene) during fractional distillation. (Three molecular structures are shown: A = single carbon skeleton; B = medium chain ~10 carbons; C = long chain ~14 carbons.)',
        marks: 1,
        ph: 'Kerosene is a medium-chain hydrocarbon collected at 180°C',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
      },
      {
        label: 'b',
        text: '**Outline** the process of fractional distillation.',
        marks: 3,
        ph: 'Crude oil vaporised; rises in column; fractions condense at different temperatures; smallest molecules lowest boiling point',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the three methods for cleaning oil spills near coral reefs and identify one method as being the best for the environment.',
        marks: 8,
        ph: 'Comment on skimming, burning, dispersants; advantages and disadvantages; identify best with scientific justification (rubric 1-4)',
      },
    ],
  },

  // ─── Q7 — Crude Oil Transport, Country C (Crit D, 14 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oil Transport Methods — Environmental and Social Evaluation',
    marks: 14,
    stem: 'Country C is a small tropical archipelago of 17 islands in the Pacific Ocean. It is known for its pristine coral reefs, white sandy beaches, and clear blue waters. Country C is classified as a Small Island Developing State (SIDS) and its economy depends heavily on eco-tourism and traditional fishing. The indigenous population lives mainly on the main island.\n\nOil reserves have recently been discovered under the northern offshore shelf. The government is considering exploiting these reserves to generate income and provide cheaper energy for the islands. However, there are concerns about the impact of oil extraction and transport on the fragile reef ecosystem.\n\nMethods for transporting offshore crude oil include: a submarine pipeline connecting the offshore platforms to the main island refinery, a floating production storage and offloading vessel (FPSO) that fills oil tankers directly offshore for export, or a series of small coastal tankers to move oil between islands to a central processing facility.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the most appropriate method of transporting crude oil from the offshore oil fields to a refinery and for exporting the excess oil. In your answer you should compare a pipeline with two alternative methods of transport and include:\n\n• advantages and disadvantages of a pipeline\n• advantages and disadvantages of your alternative methods\n• environmental considerations\n• social considerations\n• a concluding appraisal linking all the issues you have discussed.',
        marks: 14,
        ph: 'Pipeline vs FPSO/tanker vs coastal tankers: advantages, disadvantages, reef/social impacts, concluding appraisal (rubric 1-4)',
      },
    ],
  },
]
