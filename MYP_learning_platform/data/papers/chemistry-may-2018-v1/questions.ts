import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2018-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Acetic Acid (Crit A, 11 marks) ────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Acetic Acid, Lewis Structures and Equilibrium',
    marks: 11,
    stem: 'In 1847, Hermann Kolbe, a German chemist, synthesised acetic acid from inorganic compounds for the first time, demonstrating that organic compounds could be produced without living organisms. Acetic acid is responsible for the characteristic sour taste and pungent smell of vinegar, and is produced naturally by certain bacteria during fermentation. Acetic acid is a simple carboxylic acid. The formula of acetic acid is CH₃COOH.',
    tasks: [
      {
        label: 'a',
        text: '**Use** the periodic table to **identify** the group and period for each element present in acetic acid (CH₃COOH).',
        marks: 3,
        ph: 'Carbon Grp 4 P 2; Hydrogen Grp 1 P 1; Oxygen Grp 6 P 2',
        widget: 'inline_dropdown_select',
        widgetItems: ['Carbon – Group', 'Carbon – Period', 'Hydrogen – Group', 'Hydrogen – Period', 'Oxygen – Group', 'Oxygen – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'b',
        text: '**State** the systematic name for acetic acid.',
        marks: 1,
        ph: 'IUPAC systematic name of CH₃COOH',
      },
      {
        label: 'c',
        text: '**Draw** a Lewis (electron dot or dot cross) structure showing the bonding in acetic acid, CH₃COOH.',
        marks: 2,
        ph: 'Lewis structure: C–C(=O)–OH with 3 H on first C; show lone pairs and all bonds',
      },
      {
        label: 'd',
        text: 'Acetic acid partially dissociates in water to form an equilibrium. **Write down** a balanced equation for this equilibrium including state symbols.',
        marks: 4,
        ph: 'CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)',
      },
      {
        label: 'e',
        text: '**State** how the acid can be neutralized.',
        marks: 1,
        ph: 'Neutralization method for acetic acid',
      },
    ],
  },

  // ─── Q2 — Industrial Cooling Water, Ca²⁺ and Mg²⁺ (Crit A, 13 marks) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Hard Water, Ionic Bonding and Solubility',
    marks: 13,
    stem: 'Industrial cooling towers use large volumes of water. The water used in cooling towers can contain different dissolved ions, particularly calcium (Ca²⁺) and magnesium (Mg²⁺) ions from the local geology. Water containing mainly group 2 ions such as calcium and magnesium is known as "hard" water. Hard water causes scale build-up in pipes and heat exchangers, reducing efficiency.\n\nMany methods can be used to soften hard water for industrial use. These methods work by removing the Ca²⁺ and Mg²⁺ ions from the water. One method softens water by forming a precipitate of an insoluble solid in an aqueous solution. The table below compares the solubility in water of different combinations of anions with Ca²⁺ and Mg²⁺ ions.\n\nSolubility in water at 25 °C of Ca²⁺ and Mg²⁺ ions:\n\n| Anion | Mg²⁺ | Ca²⁺ |\n|---|---|---|\n| Cl⁻, Br⁻, I⁻ | soluble | soluble |\n| SO₄²⁻ | soluble | insoluble |\n| OH⁻ | insoluble | insoluble |\n| CO₃²⁻, PO₄³⁻ | insoluble | insoluble |',
    tasks: [
      {
        label: 'a',
        text: '**State** the number of protons and neutrons in a ⁴⁰Ca²⁺ ion.',
        marks: 2,
        ph: 'Protons = 20; neutrons = 20',
      },
      {
        label: 'b',
        text: 'Use the information in the table to **determine** the formula of calcium phosphate.',
        marks: 1,
        ph: 'Formula of calcium phosphate from ion charges',
      },
      {
        label: 'c',
        text: '**Identify** two physical properties that distinguish between calcium and chlorine at a temperature of 25 °C. For each property, state how it distinguishes between the two elements.',
        marks: 4,
        ph: 'Property 1 + how distinguishes (e.g. Ca solid, Cl₂ gas); Property 2 + how distinguishes',
      },
      {
        label: 'd',
        text: '**State** the type of bond that would form in a reaction between calcium and chlorine.',
        marks: 1,
        ph: 'Type of bond formed when Ca reacts with Cl',
      },
      {
        label: 'e',
        text: 'Using the solubility data in the table above, **explain** how you would remove Ca²⁺ ions only from the industrial cooling water.',
        marks: 4,
        ph: 'Add sulphate; Ca²⁺ forms insoluble CaSO₄; Mg²⁺ stays in solution; filter off precipitate',
      },
      {
        label: 'f',
        text: 'Crystals of copper(II) sulphate pentahydrate (CuSO₄·5H₂O) are heated to form anhydrous copper(II) sulphate. **State** the number of moles of water formed if 0.3 moles of CuSO₄·5H₂O are heated.',
        marks: 1,
        ph: 'Moles of water released from 0.3 mol CuSO₄·5H₂O',
      },
    ],
  },

  // ─── Q3 — African Savanna Wildlife, CaCO₃ (Crit B, 26 marks) ───────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Calcium Carbonate, Acid Reactions and Investigation Design',
    marks: 26,
    stem: 'Many African savanna animals are at risk of extinction because of illegal trading of their teeth and bones (poaching). Teeth and bones from different animals contain different percentages by mass of calcium carbonate. Scientists can use calcium carbonate data to identify which bone samples come from different animals and to check that the bones are not being traded illegally.\n\nThe percentage by mass of calcium carbonate in bones and teeth from different animals are shown below.\n\n| Animal | Teeth (%) | Bone (%) |\n|---|---|---|\n| Giraffe | 31.45 | 25.82 |\n| Lion | 27.36 | 23.84 |\n| Zebra | 30.12 | 24.33 |\n| Buffalo | 28.94 | 22.76 |\n| Crocodile | 19.67 | 17.43 |\n\nMetal carbonates react with hydrochloric acid to form a metal chloride, water and a gas which will turn limewater cloudy.\n\nThe symbol equation for the reaction of calcium carbonate with hydrochloric acid is:\n\nCaCO₃(s) + 2HCl(aq) → salt (aq) + CO₂(g) + H₂O (l)',
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
        text: 'One bone sample of mass 7.56 g was placed in hydrochloric acid and produced 500 cm³ of carbon dioxide. Using data from the graph and the table, **calculate** the percentage by mass of calcium carbonate in the bone sample and **identify** which animal the sample comes from.',
        marks: 4,
        ph: 'Read ~2.0g CaCO₃ from graph; % = 2.0/7.56 × 100 ≈ 26.5%; identify as Lion teeth',
      },
    ],
  },

  // ─── Q5 — Snail Shell vs Chalk, Rates of Reaction (Crit B/C/D, 18 marks) ─
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Rates of Reaction and Data Reliability',
    marks: 18,
    stem: 'Garden snails (Helix aspersa) require calcium carbonate to build and maintain their shells. Snail farmers add dietary supplements to the soil or feed to improve shell quality and thickness. Snail shell (CaCO₃) and chalk powder (also mainly CaCO₃) are two common supplements used in snail farming.\n\nAs these supplements move through the snail\'s digestive system they come into contact with weak acid which causes the calcium carbonate to dissolve and release Ca²⁺ ions for shell production.\n\nIt has been suggested that snail shell reacts more slowly with acid than chalk powder, allowing the snail more time to absorb calcium carbonate for shell building.\n\nSome scientists want to compare the reactions of snail shell and chalk powder with hydrochloric acid. They take a fixed mass of snail shell and add a fixed volume and concentration of hydrochloric acid to their measuring apparatus. The scientists then repeat the experiment with chalk powder.',
    tasks: [
      {
        label: 'a',
        text: 'It is important investigations take place in a safe environment. **Select** the meaning of each hazard symbol shown (Image 1: flammable symbol, Image 2: corrosive symbol, Image 3: toxic/skull symbol).',
        marks: 3,
        ph: 'Image 1 = Flammable; Image 2 = Corrosive; Image 3 = Toxic',
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
        text: 'The results for the snail shell reactions are shown in the table below. At t = 40 s: Trial 1 = 43 cm³, Trial 2 = 53 cm³, Trial 3 = 41 cm³. **Analyse** the data and **determine** an appropriate average volume of gas produced at a time of 40 seconds. **Justify** your answer.',
        marks: 2,
        ph: 'Exclude Trial 2 (53) as outlier; average of Trial 1 and Trial 3 = 42 cm³',
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for snail shell and chalk powder is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each supplement over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Snail shell ≈ 1.05 cm³s⁻¹; Chalk powder ≈ 0.23 cm³s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the chalk powder produced more carbon dioxide in the same time as the snail shell.',
        marks: 3,
        ph: 'Smaller chalk particles → larger surface area → faster rate of reaction',
      },
      {
        label: 'f',
        text: 'Using the data in the graph, **explain** why the snail shell is a better supplement for the snails than the chalk powder.',
        marks: 2,
        ph: 'Snail shell dissolves more slowly → stays in digestive system longer → more time to absorb Ca²⁺',
      },
      {
        label: 'g',
        text: 'Use the graph to **compare** the reliability of the snail shell and chalk powder data.',
        marks: 4,
        ph: 'Chalk: less reliable, greater variability; Snail shell: more reliable, better consistency',
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
    marks: 12,
    stem: 'Crude oil is a mixture of different sized hydrocarbons and other chemicals and is a source of various fuels. Crude oil can be separated into useful products by fractional distillation. The diagram shows the process: petroleum gas (top), petrol at 40°C, naphtha at 110°C, kerosene at 180°C, diesel at 250°C, lubricants at 350°C, and bitumen at the base (roads).\n\nAccidental oil spills from pipelines and storage facilities can contaminate freshwater rivers and lakes, threatening aquatic ecosystems. Some methods used to clean up freshwater oil spills include: absorbent booms stretched across the river to collect oil, bioremediation (using naturally occurring oil-degrading bacteria), and mechanical dredging (removing contaminated sediment from the riverbed).',
    tasks: [
      {
        label: 'a',
        text: '**Select** the hydrocarbon that would be collected as diesel during fractional distillation. (Three molecular structures are shown: A = single carbon skeleton; B = medium chain ~10 carbons; C = long chain ~14 carbons.)',
        marks: 1,
        ph: 'Diesel is collected at higher temperature = longer chain hydrocarbon',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
      },
      {
        label: 'b',
        text: '**Outline** the process of fractional distillation.',
        marks: 3,
        ph: 'Crude oil vaporised; rises in column; different fractions condense at different temperatures; smallest molecules lowest boiling point',
      },
      {
        label: 'c',
        text: '**Discuss** and **evaluate** the three methods for cleaning freshwater oil spills and identify one method as being the best for the environment.',
        marks: 8,
        ph: 'Comment on all 3 methods (booms, bioremediation, dredging); advantages and disadvantages; identify best (rubric 1-4)',
      },
    ],
  },

  // ─── Q7 — Crude Oil Transport, Country B (Crit D, 14 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oil Transport Methods — Environmental and Social Evaluation',
    marks: 14,
    stem: 'Country B is a landlocked mountainous nation in central Asia. It is known to have extreme weather with heavy snowfall, avalanches and severe winter temperatures. Country B is classified as a Less Economically Developed Country (LEDC) seeking to improve its economic activity. The capital city is located in the western lowlands. The eastern highlands are home to nomadic herding communities who have lived there for generations.\n\nSignificant oil reserves have been recently discovered beneath the eastern highlands. The government is planning to exploit these oil reserves to provide energy and economic growth. However, because Country B has no access to the sea, all crude oil must be transported overland to refineries in the west or exported via neighbouring countries.\n\nKnown ways to transport crude oil overland include: pipeline, road tanker, and rail. A pipeline can be buried underground to protect it from weather and avalanches. Road tankers can travel on the existing highway network. Rail transport can carry large volumes and uses the existing railway that connects the east and west of the country.',
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the most appropriate method of transporting crude oil from the eastern oil fields to refineries in the western capital and to export the oil to neighbouring countries. In your answer you should compare a pipeline with two alternative methods of transport and include:\n\n• advantages and disadvantages of a pipeline\n• advantages and disadvantages of your alternative methods\n• environmental considerations\n• social considerations\n• a concluding appraisal linking all the issues you have discussed.',
        marks: 14,
        ph: 'Pipeline vs road/rail: advantages, disadvantages, environmental/social impacts (nomadic communities, mountains), concluding appraisal (rubric 1-4)',
      },
    ],
  },
]
