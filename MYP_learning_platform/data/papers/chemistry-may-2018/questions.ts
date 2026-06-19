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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Formic acid, HCOOH</text><g stroke="#475569" stroke-width="2"><line x1="150" y1="150" x2="220" y2="150"/><line x1="248" y1="142" x2="318" y2="142"/><line x1="248" y1="158" x2="318" y2="158"/><line x1="248" y1="150" x2="288" y2="200"/><line x1="316" y1="200" x2="356" y2="200"/></g><text x="138" y="156" font-size="20" font-weight="700" text-anchor="middle" fill="#0b7285">H</text><text x="234" y="156" font-size="22" font-weight="700" text-anchor="middle" fill="#1f2d3a">C</text><text x="332" y="148" font-size="20" font-weight="700" text-anchor="middle" fill="#c0392b">O</text><text x="300" y="210" font-size="20" font-weight="700" text-anchor="middle" fill="#c0392b">O</text><text x="368" y="206" font-size="18" font-weight="700" text-anchor="middle" fill="#0b7285">H</text><text x="270" y="128" font-size="11" fill="#94a3ad">C=O (double bond)</text><text x="248" y="232" font-size="11" fill="#94a3ad">C–O–H (single bonds)</text><g><rect x="430" y="50" width="46" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="453" y="64" font-size="8" text-anchor="middle" fill="#64748b">Grp 1</text><text x="453" y="82" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">H</text><text x="453" y="93" font-size="7" text-anchor="middle" fill="#64748b">P 1</text></g><g><rect x="430" y="110" width="46" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="453" y="124" font-size="8" text-anchor="middle" fill="#64748b">Grp 4</text><text x="453" y="142" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">C</text><text x="453" y="153" font-size="7" text-anchor="middle" fill="#64748b">P 2</text></g><g><rect x="430" y="170" width="46" height="46" fill="#fdecea" stroke="#5b6b78"/><text x="453" y="184" font-size="8" text-anchor="middle" fill="#64748b">Grp 6</text><text x="453" y="202" font-size="16" font-weight="700" text-anchor="middle" fill="#c0392b">O</text><text x="453" y="213" font-size="7" text-anchor="middle" fill="#64748b">P 2</text></g><text x="498" y="80" font-size="10" fill="#475569">Hydrogen</text><text x="498" y="140" font-size="10" fill="#475569">Carbon</text><text x="498" y="200" font-size="10" fill="#475569">Oxygen</text></svg>',
      },
      caption: 'Formic acid (HCOOH): a central carbon double-bonded to one oxygen and single-bonded to an –O–H group and an H. The cards show the group and period of each element present.',
    },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Anion', 'Mg²⁺', 'Ca²⁺'],
        rows: [
          ['Cl⁻, Br⁻, I⁻', 'soluble', 'soluble'],
          ['SO₄²⁻', 'soluble', 'insoluble'],
          ['OH⁻', 'insoluble', 'insoluble'],
          ['CO₃²⁻, PO₄³⁻', 'insoluble', 'insoluble'],
        ],
      },
      caption: 'Solubility in water at 25 °C of compounds formed from Mg²⁺ and Ca²⁺ ions with different anions. Use it to choose an anion that precipitates Ca²⁺ but not Mg²⁺.',
    },
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
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Animal', 'Teeth (% CaCO₃ by mass)', 'Bone (% CaCO₃ by mass)'],
        rows: [
          ['Elephant', '20.93', '22.58'],
          ['Horse', '28.60', '24.70'],
          ['Human', '29.82', '23.10'],
          ['Monkey', '29.93', '23.12'],
          ['Dolphin', '22.12', '15.16'],
        ],
      },
      caption: 'Percentage by mass of calcium carbonate in teeth and bone for five animals. Scientists match a measured percentage against this table to identify the animal.',
    },
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
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="280" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Gas-syringe apparatus</text><g><rect x="70" y="70" width="200" height="34" rx="6" fill="#e7eef2" stroke="#5b6b78" stroke-width="2"/><line x1="120" y1="70" x2="120" y2="104" stroke="#9fb3bf"/><line x1="160" y1="70" x2="160" y2="104" stroke="#9fb3bf"/><line x1="200" y1="70" x2="200" y2="104" stroke="#9fb3bf"/><rect x="240" y="74" width="40" height="26" rx="4" fill="#c7d6de" stroke="#5b6b78"/></g><text x="150" y="60" font-size="11" text-anchor="middle" fill="#475569">gas syringe (measures volume of CO₂)</text><line x1="280" y1="100" x2="340" y2="100" stroke="#5b6b78" stroke-width="3"/><line x1="340" y1="100" x2="360" y2="150" stroke="#5b6b78" stroke-width="3"/><text x="320" y="92" font-size="10" fill="#94a3ad">rubber tubing / delivery tube</text><path d="M345,150 L375,150 L405,235 Q420,250 360,250 Q300,250 315,235 Z" fill="#dff1fb" stroke="#5b6b78" stroke-width="2"/><rect x="352" y="142" width="16" height="14" fill="#c7d6de" stroke="#5b6b78"/><g fill="#cfe8f7" stroke="#7aa9c2"><circle cx="350" cy="240" r="3"/><circle cx="365" cy="244" r="3"/><circle cx="380" cy="238" r="3"/><circle cx="358" cy="232" r="2.5"/></g><text x="430" y="200" font-size="11" fill="#475569">conical flask</text><text x="430" y="218" font-size="11" fill="#475569">reaction mixture</text><text x="430" y="236" font-size="10" fill="#94a3ad">(crushed bone/tooth + dilute HCl)</text></svg>',
          },
          caption: 'A gas syringe collects and measures the carbon dioxide given off as the crushed bone/tooth sample reacts with dilute hydrochloric acid in the conical flask.',
        },
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
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Volume of CO₂ produced vs mass of CaCO₃',
        xLabel: 'Mass of CaCO₃',
        xUnit: 'g',
        yLabel: 'Volume of CO₂ produced',
        yUnit: 'cm³',
        xMin: 1.0,
        xMax: 3.0,
        yMin: 200,
        yMax: 700,
        xStep: 0.5,
        yStep: 100,
        lobf: true,
        dataPoints: [
          { x: 1.4, y: 386 },
          { x: 1.5, y: 408 },
          { x: 1.6, y: 430 },
          { x: 1.7, y: 452 },
          { x: 1.8, y: 474 },
          { x: 1.9, y: 560 },
          { x: 2.0, y: 518 },
          { x: 2.1, y: 540 },
          { x: 2.2, y: 562 },
          { x: 2.3, y: 584 },
          { x: 2.4, y: 606 },
          { x: 2.5, y: 470 },
          { x: 2.6, y: 650 },
          { x: 2.7, y: 672 },
          { x: 2.8, y: 688 },
        ],
      },
      caption: 'Each point is one run. The dashed line is the line of best fit; two points (1.9 g and 2.5 g) lie well off the trend. Read the mass of CaCO₃ that corresponds to 540 cm³ of CO₂ off the best-fit line.',
    },
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
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Volume of CO₂ produced by limestone and crushed oyster shell',
        xLabel: 'Time / s',
        yLabel: 'Volume of carbon dioxide / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 80, tick: 10 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 100, tick: 10 },
        options: [
          { label: 'Limestone', color: 'teal', ratePerSec: 1.37, plateauVolume: 95 },
          { label: 'Crushed oyster shell', color: 'orange', ratePerSec: 0.28, plateauVolume: 17 },
        ],
        reaction: 'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O',
        note: 'Limestone reacts steadily, reaching ~82 cm³ by 60 s; crushed oyster shell reacts slowly, reaching only ~17 cm³ in 60 s. Rate = total volume of gas ÷ total time.',
      },
      caption: 'CO₂ volume against time for equal masses of limestone (fast, ~82 cm³ by 60 s) and crushed oyster shell (slow, ~17 cm³ by 60 s). Read values off each curve to compare rates and reliability.',
    },
    tasks: [
      {
        label: 'a',
        text: 'It is important investigations take place in a safe environment. **Select** the meaning of each hazard symbol shown (Image 1: corrosive symbol, Image 2: flammable symbol, Image 3: toxic/skull symbol).',
        marks: 3,
        ph: 'Image 1 = Corrosive; Image 2 = Flammable; Image 3 = Toxic',
        widget: 'inline_dropdown_select',
        widgetItems: ['Image 1', 'Image 2', 'Image 3'],
        widgetOptions: ['Corrosive', 'Irritant', 'Radioactive', 'Flammable', 'Toxic'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><g transform="translate(100,90)"><rect x="-46" y="-46" width="92" height="92" transform="rotate(45)" fill="#ffffff" stroke="#d6342c" stroke-width="6"/><path d="M-26,-6 h18 v-6 l10,8 -10,8 v-6 h-18 z" fill="#1f2d3a"/><path d="M-22,18 q6,-10 22,-4" fill="none" stroke="#1f2d3a" stroke-width="3"/><path d="M-26,10 l8,8 M-18,8 l6,10" stroke="#1f2d3a" stroke-width="2.5"/><path d="M2,12 l8,8 M10,10 l6,10" stroke="#1f2d3a" stroke-width="2.5"/></g><text x="100" y="200" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 1</text><g transform="translate(300,90)"><rect x="-46" y="-46" width="92" height="92" transform="rotate(45)" fill="#ffffff" stroke="#d6342c" stroke-width="6"/><path d="M0,-30 C12,-12 22,-6 14,10 C24,2 20,-14 8,-26 C12,-8 0,-2 0,-2 C-4,-12 -10,-18 -6,-30 C-18,-16 -14,4 0,22 C16,6 12,-14 0,-30 Z" fill="#1f2d3a"/></g><text x="300" y="200" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 2</text><g transform="translate(500,90)"><rect x="-46" y="-46" width="92" height="92" transform="rotate(45)" fill="#ffffff" stroke="#d6342c" stroke-width="6"/><circle cx="0" cy="-8" r="15" fill="#1f2d3a"/><circle cx="-6" cy="-10" r="3" fill="#ffffff"/><circle cx="6" cy="-10" r="3" fill="#ffffff"/><path d="M-3,-2 l3,5 l3,-5 z" fill="#ffffff"/><path d="M-10,8 L10,8 L6,20 L-6,20 Z" fill="#1f2d3a"/><path d="M-14,2 l28,14 M14,2 l-28,14" stroke="#1f2d3a" stroke-width="3"/></g><text x="500" y="200" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Image 3</text></svg>',
          },
          caption: 'Three GHS hazard symbols. Image 1 shows a hand and surface being eaten away; Image 2 shows a flame; Image 3 shows a skull and crossbones.',
        },
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
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Time / s', 'Trial 1 / cm³', 'Trial 2 / cm³', 'Trial 3 / cm³', 'Average / cm³'],
            rows: [
              ['0', '0', '0', '0', '0'],
              ['10', '17', '16', '15', '16'],
              ['20', '33', '30', '31', '32'],
              ['30', '46', '48', '44', '46'],
              ['40', '57', '67', '55', '—'],
              ['50', '70', '70', '70', '70'],
              ['60', '81', '83', '82', '82'],
              ['70', '93', '91', '92', '92'],
            ],
          },
          caption: 'Volume of CO₂ produced from limestone (three trials). At t = 40 s one trial (67 cm³) does not fit the pattern — decide whether to include it when finding the average.',
        },
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for limestone and crushed oyster shell is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each supplement over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Limestone ≈ 82 ÷ 60 ≈ 1.37 cm³ s⁻¹; Crushed oyster shell ≈ 17 ÷ 60 ≈ 0.28 cm³ s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the limestone produced more carbon dioxide in the same time as the crushed oyster shell.',
        marks: 3,
        ph: 'Limestone has the faster rate (≈1.37 vs ≈0.28 cm³ s⁻¹), so in a fixed time it produces more CO₂; suggest a reason e.g. limestone is a purer/more reactive form of CaCO₃ or exposes more reacting surface area than the oyster-shell particles, giving more frequent successful collisions with the acid',
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="340" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fractional distillation of crude oil</text><defs><linearGradient id="col" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3b35a"/><stop offset="1" stop-color="#e8772e"/></linearGradient></defs><path d="M180,50 L300,50 L300,300 L180,300 Z" fill="url(#col)" stroke="#a8531a" stroke-width="2"/><path d="M180,300 L150,300 L150,315 L120,315" fill="none" stroke="#a8531a" stroke-width="3"/><text x="60" y="318" font-size="10" fill="#475569">heated crude oil</text><g font-size="11" fill="#1f2d3a"><line x1="300" y1="62" x2="360" y2="62" stroke="#d6342c" stroke-width="2"/><text x="366" y="66">Petroleum gas — top, coolest</text><line x1="300" y1="100" x2="360" y2="100" stroke="#d6342c" stroke-width="2"/><text x="190" y="96" font-size="10" fill="#7a3d12">40 °C</text><text x="366" y="104">Petrol (fuel for cars)</text><line x1="300" y1="140" x2="360" y2="140" stroke="#d6342c" stroke-width="2"/><text x="190" y="136" font-size="10" fill="#7a3d12">110 °C</text><text x="366" y="144">Naphtha (chemicals)</text><line x1="300" y1="180" x2="360" y2="180" stroke="#d6342c" stroke-width="2"/><text x="190" y="176" font-size="10" fill="#7a3d12">180 °C</text><text x="366" y="184">Kerosene (aircraft fuel)</text><line x1="300" y1="220" x2="360" y2="220" stroke="#d6342c" stroke-width="2"/><text x="190" y="216" font-size="10" fill="#7a3d12">250 °C</text><text x="366" y="224">Diesel (fuel for lorries)</text><line x1="300" y1="260" x2="360" y2="260" stroke="#d6342c" stroke-width="2"/><text x="190" y="256" font-size="10" fill="#7a3d12">350 °C</text><text x="366" y="264">Lubricants (factories)</text><line x1="300" y1="295" x2="360" y2="295" stroke="#d6342c" stroke-width="2"/><text x="366" y="299">Bitumen — base, hottest (roads)</text></g><text x="240" y="328" font-size="10" text-anchor="middle" fill="#94a3ad">Temperature increases down the column; smallest molecules condense highest.</text></svg>',
      },
      caption: 'Fractional distillation column. Crude oil is vaporised at the base; fractions condense at different heights — the smallest molecules (lowest boiling points) reach the cool top, the largest stay at the hot base.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the hydrocarbon that would be distilled with petroleum gases. (Three molecular structures are shown: A = single carbon skeleton; B = medium chain ~10 carbons; C = long chain ~14 carbons.)',
        marks: 1,
        ph: 'Smallest hydrocarbon molecule distils with petroleum gases',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#0d1117"/><text x="300" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#e6edf3">Three hydrocarbon molecules (carbon = large, hydrogen = small)</text><g><text x="70" y="60" font-size="16" font-weight="700" fill="#e6edf3">A</text><g stroke="#9fb3bf" stroke-width="2"><line x1="120" y1="80" x2="120" y2="50"/><line x1="120" y1="80" x2="120" y2="110"/><line x1="120" y1="80" x2="92" y2="80"/><line x1="120" y1="80" x2="148" y2="80"/></g><circle cx="120" cy="80" r="11" fill="#cbd5e1"/><circle cx="120" cy="50" r="6" fill="#94a3ad"/><circle cx="120" cy="110" r="6" fill="#94a3ad"/><circle cx="92" cy="80" r="6" fill="#94a3ad"/><circle cx="148" cy="80" r="6" fill="#94a3ad"/><text x="200" y="84" font-size="11" fill="#8b98a5">1 carbon (smallest)</text></g><g><text x="70" y="150" font-size="16" font-weight="700" fill="#e6edf3">B</text><g stroke="#9fb3bf" stroke-width="2"><line x1="110" y1="160" x2="470" y2="160"/></g><g fill="#cbd5e1">' +
              Array.from({length: 10}, (_, i) => '<circle cx="' + (110 + i*40) + '" cy="160" r="10"/>').join('') +
              '</g><g fill="#94a3ad">' +
              Array.from({length: 10}, (_, i) => '<circle cx="' + (110 + i*40) + '" cy="135" r="5"/><circle cx="' + (110 + i*40) + '" cy="185" r="5"/>').join('') +
              '</g><text x="110" y="210" font-size="11" fill="#8b98a5">~10 carbons (medium chain)</text></g><g><text x="70" y="245" font-size="16" font-weight="700" fill="#e6edf3">C</text><g stroke="#9fb3bf" stroke-width="2"><line x1="80" y1="255" x2="540" y2="255"/></g><g fill="#cbd5e1">' +
              Array.from({length: 14}, (_, i) => '<circle cx="' + (80 + i*34) + '" cy="255" r="9"/>').join('') +
              '</g><text x="80" y="288" font-size="11" fill="#8b98a5">~14 carbons (long chain)</text></g></svg>',
          },
          caption: 'Three hydrocarbons of increasing size: A (1 carbon), B (~10 carbons), C (~14 carbons). Smaller molecules have lower boiling points and leave the column with the petroleum gases.',
        },
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
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="380" fill="#bfe3f2"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Country X</text><path d="M150,50 Q250,40 300,70 Q340,95 320,140 Q300,175 240,170 Q170,165 140,120 Q120,80 150,50 Z" fill="#cfe9c8" stroke="#5b8a4f" stroke-width="2"/><text x="225" y="110" font-size="12" font-weight="700" text-anchor="middle" fill="#3d6b33">North Island</text><path d="M210,215 Q300,205 350,235 Q400,265 380,320 Q350,360 270,355 Q200,350 175,300 Q160,250 210,215 Z" fill="#cfe9c8" stroke="#5b8a4f" stroke-width="2"/><text x="285" y="290" font-size="12" font-weight="700" text-anchor="middle" fill="#3d6b33">South Island</text><line x1="240" y1="172" x2="265" y2="212" stroke="#6cb6d6" stroke-width="6" stroke-dasharray="4 4"/><text x="300" y="195" font-size="10" fill="#2c5468">sea crossing</text><g><circle cx="200" cy="85" r="6" fill="#5b3a1a"/><text x="210" y="89" font-size="10" fill="#3a2a14">oil field</text></g><g><rect x="270" y="305" width="11" height="11" fill="#d6342c"/><text x="286" y="315" font-size="10" fill="#7a1e18">Capital (South Island, more developed)</text></g><g><circle cx="170" cy="140" r="4" fill="#0b7285"/><text x="178" y="144" font-size="9" fill="#0b5563">port</text></g><g><circle cx="330" cy="250" r="4" fill="#0b7285"/><text x="338" y="254" font-size="9" fill="#0b5563">refinery / port</text></g><path d="M195,250 q15,-15 35,-8" fill="none" stroke="#e8772e" stroke-width="2"/><text x="200" y="245" font-size="9" fill="#a8531a">coral reef</text><g><text x="40" y="330" font-size="9" fill="#2c5468">Severe weather: winds up to 130 km/h,</text><text x="40" y="343" font-size="9" fill="#2c5468">heavy snow and very high tides.</text><text x="40" y="356" font-size="9" fill="#2c5468">North Island: smaller indigenous communities,</text><text x="40" y="369" font-size="9" fill="#2c5468">forests, mountains, beaches, coral reefs.</text></g></svg>',
      },
      caption: 'Country X: a North Island (oil field, indigenous communities, forests and reefs) and a more-developed South Island (capital, refinery) separated by a stormy sea. Crude oil must move from the oil field to refineries and ports for export.',
    },
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
