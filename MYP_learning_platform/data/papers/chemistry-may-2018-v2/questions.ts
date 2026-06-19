import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2018 · VARIANT 2  (isomorphic to chemistry-may-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — distinct
// from both the source AND variant 1 — with a self-contained data-driven artefact
// in the question context (no image files). Answers recomputed throughout.
//   Q1 Acid / Lewis / equilibrium:  formic acid (ants) → carbonic acid (sparkling water)
//   Q2 Bonding / solubility:        hard water Mg/Ca → mine-water treatment Ba/Ca
//   Q3 Investigation design (B):    animal bones CaCO₃ → bird-eggshell CaCO₃ comparison
//   Q4 Graph / percentage (C):      bone CaCO₃ % → marble building-stone CaCO₃ %
//   Q5 Rates of reaction (C):       eggshell limestone/oyster → garden lime pellets/powder
//   Q6 Crude oil / spills (D):      sea spill → coastal tanker spill at an estuary
//   Q7 Evaluate transport (D):      Country X islands → inland region "Veldannia"
// ════════════════════════════════════════════════════════════════════════════

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
  // ─── Q1 — Carbonic Acid (Crit A, 11 marks) ──────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Carbonic Acid, Lewis Structures and Equilibrium',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'When carbon dioxide gas is dissolved in water under pressure to make sparkling water or fizzy drinks, a small amount of it reacts with the water to form carbonic acid. This is the weak acid that gives sparkling water its slightly sharp, tangy taste, and it is also how carbon dioxide is carried in the blood. The formula of carbonic acid is H₂CO₃.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Carbonic acid molecule, H₂CO₃</text><g stroke="#5b6b78" stroke-width="2"><line x1="240" y1="105" x2="240" y2="60"/><line x1="244" y1="105" x2="244" y2="60"/><line x1="240" y1="105" x2="190" y2="140"/><line x1="240" y1="105" x2="290" y2="140"/><line x1="190" y1="140" x2="150" y2="160"/><line x1="290" y1="140" x2="330" y2="160"/></g><g font-size="18" font-weight="700" text-anchor="middle"><circle cx="240" cy="105" r="15" fill="#eef4f7" stroke="#5b6b78"/><text x="240" y="111" fill="#475569">C</text><circle cx="242" cy="57" r="15" fill="#fde2e2" stroke="#c0392b"/><text x="242" y="63" fill="#c0392b">O</text><circle cx="187" cy="142" r="15" fill="#fde2e2" stroke="#c0392b"/><text x="187" y="148" fill="#c0392b">O</text><circle cx="293" cy="142" r="15" fill="#fde2e2" stroke="#c0392b"/><text x="293" y="148" fill="#c0392b">O</text><circle cx="150" cy="162" r="12" fill="#e8f5e9" stroke="#2e7d32"/><text x="150" y="167" font-size="13" fill="#2e7d32">H</text><circle cx="330" cy="162" r="12" fill="#e8f5e9" stroke="#2e7d32"/><text x="330" y="167" font-size="13" fill="#2e7d32">H</text></g><g font-size="11" fill="#94a3ad" text-anchor="middle"><text x="270" y="80">C=O</text><text x="150" y="135">O–H</text><text x="335" y="135">O–H</text></g><text x="60" y="195" font-size="11" fill="#475569">Skeleton: a central C with one double-bonded O (C=O) and two O–H groups.</text></svg>',
      },
      caption: 'Carbonic acid (H₂CO₃): a central carbon with a C=O and two O–H groups.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use** the periodic table to **identify** the group and period for each element present in carbonic acid (H₂CO₃).',
        marks: 3,
        ph: 'Carbon Grp 4 P 2; Hydrogen Grp 1 P 1; Oxygen Grp 6 P 2',
        widget: 'inline_dropdown_select',
        widgetItems: ['Carbon – Group', 'Carbon – Period', 'Hydrogen – Group', 'Hydrogen – Period', 'Oxygen – Group', 'Oxygen – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'b',
        text: '**State** the name of the salt (the type of ion) formed when carbonic acid is fully neutralised.',
        marks: 1,
        ph: 'Name of the ion/salt class formed from H₂CO₃',
      },
      {
        label: 'c',
        text: '**Draw** a Lewis (electron dot or dot cross) structure showing the bonding in carbonic acid, H₂CO₃.',
        marks: 2,
        ph: 'Lewis structure: central C double-bonded to one O, single-bonded to two O–H groups; show lone pairs',
      },
      {
        label: 'd',
        text: 'Carbonic acid partially dissociates in water to form an equilibrium. **Write down** a balanced equation for this equilibrium including state symbols.',
        marks: 4,
        ph: 'H₂CO₃(aq) + H₂O(l) ⇌ H₃O⁺(aq) + HCO₃⁻(aq)',
      },
      {
        label: 'e',
        text: '**State** how the acid can be neutralized.',
        marks: 1,
        ph: 'Neutralization method for carbonic acid',
      },
    ],
  },

  // ─── Q2 — Mine-Water Treatment, Ca²⁺ and Ba²⁺ (Crit A, 13 marks) ────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Mine-Water Treatment, Ionic Bonding and Solubility',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 13,
    stem: 'Water draining from old mines can carry dissolved group 2 ions, including calcium and barium ions (Ca²⁺ and Ba²⁺). Barium ions are poisonous, so before the water can be released into rivers the barium must be removed while keeping treatment cheap.\n\nWater-treatment chemists choose a method that removes one ion as an insoluble precipitate while leaving the other dissolved. The solubility data they use to decide are given in the table in the question context.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Anion', 'Ca²⁺', 'Ba²⁺'],
        rows: [
          ['Cl⁻, Br⁻, I⁻', 'soluble', 'soluble'],
          ['SO₄²⁻', 'soluble', 'insoluble'],
          ['OH⁻', 'slightly soluble', 'soluble'],
          ['CO₃²⁻, PO₄³⁻', 'insoluble', 'insoluble'],
        ],
      },
      caption: 'Solubility in water at 25 °C of compounds of Ca²⁺ and Ba²⁺ with various anions.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the number of protons and neutrons in a ¹³⁷Ba²⁺ ion.',
        marks: 2,
        ph: 'Protons = 56; neutrons = 81',
      },
      {
        label: 'b',
        text: 'Use the information in the table to **determine** the formula of barium phosphate.',
        marks: 1,
        ph: 'Formula of barium phosphate from ion charges',
      },
      {
        label: 'c',
        text: '**Identify** two physical properties that distinguish between barium and chlorine at a temperature of 25 °C. For each property, state how it distinguishes between the two elements.',
        marks: 4,
        ph: 'Property 1 + how it distinguishes (e.g. state: Ba solid, Cl gas); Property 2 + how it distinguishes',
      },
      {
        label: 'd',
        text: '**State** the type of bond that would form in a reaction between barium and chlorine.',
        marks: 1,
        ph: 'Type of bond formed when Ba reacts with Cl',
      },
      {
        label: 'e',
        text: 'Using the solubility data in the table above, **explain** how you would remove Ba²⁺ ions only from the mine water.',
        marks: 4,
        ph: 'Add sulphate; Ba²⁺ forms insoluble BaSO₄; Ca²⁺ stays in solution; filter off precipitate',
      },
      {
        label: 'f',
        text: 'Crystals of barium chloride dihydrate (BaCl₂·2H₂O) are heated to form anhydrous barium chloride. **State** the number of moles of water formed if 0.5 moles of BaCl₂·2H₂O are heated.',
        marks: 1,
        ph: 'Moles of water released from 0.5 mol BaCl₂·2H₂O',
      },
    ],
  },

  // ─── Q3 — Bird Eggshell Comparison, CaCO₃ and Inquiry Design (Crit B, 26 marks) ─
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Calcium Carbonate, Acid Reactions and Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 26,
    stem: 'Conservationists studying wild birds compare the eggshells of different species, because a shell\'s calcium carbonate content affects how strong it is and whether the chicks survive. Eggshells from different birds contain different percentages by mass of calcium carbonate. Scientists use this data to identify which species an abandoned shell came from and to monitor whether pollution is weakening the shells of protected species.\n\nThe percentage by mass of calcium carbonate in eggshells from different birds is shown in the table in the question context.\n\nMetal carbonates react with hydrochloric acid to form a metal chloride, water and a gas which will turn limewater cloudy.\n\nThe symbol equation for the reaction of calcium carbonate with hydrochloric acid is:\n\nCaCO₃(s) + 2HCl(aq) → salt (aq) + CO₂(g) + H₂O (l)',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Bird species', 'Thick end (%)', 'Pointed end (%)'],
        rows: [
          ['Chicken', '20.84', '22.49'],
          ['Duck', '28.71', '24.55'],
          ['Quail', '29.90', '23.07'],
          ['Goose', '29.95', '23.20'],
          ['Pigeon', '22.18', '15.11'],
        ],
      },
      caption: 'Percentage by mass of calcium carbonate at the thick end and pointed end of five birds\' eggshells.',
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
        text: 'A scientist investigating eggshells developed the following research statement: "The higher the percentage of calcium carbonate in the shell, the larger the volume of carbon dioxide produced when reacted with acid." **Identify** the variables in this investigation: Independent variable, Dependent variable, and two Control variables.',
        marks: 4,
        ph: 'IV: % CaCO₃ or species/region of shell; DV: volume CO₂; CV: mass, acid volume/concentration',
      },
      {
        label: 'c',
        text: '**Design** a table suitable for recording and processing your data. You should select the number of rows and columns and add labels.',
        marks: 4,
        ph: 'Table: Eggshell Sample column, Trial 1/2/3 columns, Volume CO₂ (cm³) header, ≥1 shell row',
      },
      {
        label: 'd',
        text: 'The percentage by mass of calcium carbonate can be determined using the following equipment: a gas syringe connected to a conical flask containing the reaction mixture. Using the equipment above, **design** a method to determine the mass of calcium carbonate in the eggshells. In your answer you should include:\n\n• a list of any additional equipment you will need\n• details of your method for manipulating the variables\n• details of the data you will collect\n• how you will use your data to decide which eggshell contains the most calcium carbonate\n• a statement of any assumptions that you have made\n• how you will ensure that your method is safe.',
        marks: 17,
        ph: 'Full design: equipment list, method, data collection, analysis, assumptions, safety (rubric 1-4)',
      },
    ],
  },

  // ─── Q4 — Graph Analysis, Marble Building-Stone CaCO₃ (Crit C, 6 marks) ─────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis and Percentage Calculations',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 6,
    stem: 'A conservation lab tests fragments that have fallen from old marble and limestone buildings to check how much calcium carbonate they still contain after years of acid-rain weathering. Each dried fragment is reacted with excess hydrochloric acid and the volume of carbon dioxide produced is measured. A calibration graph links the mass of pure calcium carbonate to the volume of CO₂ released. The graph is shown in the question context: the x-axis is mass of CaCO₃ (g) from 1.00 to 3.00 g, and the y-axis is volume of CO₂ produced (cm³) from 200 to 700 cm³.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Volume of CO₂ produced vs mass of CaCO₃',
        xLabel: 'Mass of CaCO₃',
        yLabel: 'Volume of CO₂',
        xUnit: 'g',
        yUnit: 'cm³',
        xMin: 1.0,
        xMax: 3.0,
        yMin: 200,
        yMax: 700,
        xStep: 0.5,
        yStep: 100,
        lobf: true,
        dataPoints: [
          { x: 1.0, y: 240 },
          { x: 1.3, y: 312 },
          { x: 1.6, y: 384 },
          { x: 1.9, y: 322 },
          { x: 2.2, y: 528 },
          { x: 2.5, y: 688 },
          { x: 2.8, y: 672 },
        ],
      },
      caption: 'Calibration curve. Two plotted points (at 1.9 g and 2.5 g) do not lie on the trend.',
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
        text: 'One stone fragment of mass 8.40 g was placed in hydrochloric acid and produced 552 cm³ of carbon dioxide. Using data from the graph and the table in Q3, **calculate** the percentage by mass of calcium carbonate in the stone fragment and **identify** which bird\'s eggshell has the most similar thick-end percentage.',
        marks: 4,
        ph: 'Read ~2.3g CaCO₃ from graph; % = 2.3/8.40 × 100 ≈ 27.4%; closest thick-end value is Duck (28.71%) — use ECF',
      },
    ],
  },

  // ─── Q5 — Garden Lime: Pellets vs Powder (Crit C, 18 marks) ─────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Rates of Reaction and Data Reliability',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 18,
    stem: 'Gardeners spread garden lime (calcium carbonate, CaCO₃) onto acidic soil to neutralise it so that crops grow better. The lime reacts with the acids in the soil, releasing carbon dioxide gas. Garden centres sell the lime either as hard pellets or as a fine powder.\n\nIt has been suggested that, because powdered lime reacts very quickly, it is washed out of the soil by rain before the soil has fully recovered, so gardeners may need to re-apply powder more often than pellets to keep the soil sweet for the same length of time.\n\nSome scientists want to compare the reactions of lime pellets and powdered lime. They take a fixed mass of lime pellets and add a fixed volume and concentration of hydrochloric acid (to model soil acid) to their measuring apparatus. The scientists then repeat the experiment with powdered lime. The volume of CO₂ over the first 60 seconds is shown in the interactive graph in the question context.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'CO₂ produced by lime pellets and powdered lime in acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 60, tick: 10 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 90, tick: 10 },
        options: [
          { label: 'Powdered lime', color: 'teal', ratePerSec: 1.33, plateauVolume: 80 },
          { label: 'Lime pellets', color: 'orange', ratePerSec: 0.28, plateauVolume: 80 },
        ],
        reaction: 'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O',
        note: 'Powdered lime has a much larger surface area, so it reacts faster but finishes sooner.',
      },
      caption: 'Volume of CO₂ over the first 60 s. Read the total volume at t = 60 s to find each rate.',
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
        text: 'The results for the powdered-lime reactions are shown in the table below. At t = 20 s: Trial 1 = 28 cm³, Trial 2 = 37 cm³, Trial 3 = 26 cm³. **Analyse** the data and **determine** an appropriate average volume of gas produced at a time of 20 seconds. **Justify** your answer.',
        marks: 2,
        ph: 'Exclude Trial 2 (37) as outlier; average of Trial 1 and Trial 3 = 27 cm³',
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for lime pellets and powdered lime is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each form over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Powdered lime ≈ 1.33 cm³s⁻¹; lime pellets ≈ 0.28 cm³s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the powdered lime produced more carbon dioxide in the same time as the lime pellets.',
        marks: 3,
        ph: 'Smaller particles → larger surface area → faster/greater rate of reaction',
      },
      {
        label: 'f',
        text: 'Using the data in the graph, **explain** why the lime pellets are a better soil treatment for long-lasting effect than the powdered lime.',
        marks: 2,
        ph: 'Lime pellets react more slowly → stay in the soil longer → neutralise acid over a longer period',
      },
      {
        label: 'g',
        text: 'Use the graph to **compare** the reliability of the powdered-lime and lime-pellet data.',
        marks: 4,
        ph: 'Powdered lime: less reliable, greater variability; lime pellets: more reliable, better consistency',
      },
      {
        label: 'h',
        text: '**Suggest** one way to improve the validity of the data.',
        marks: 1,
        ph: 'One improvement to validity of the investigation',
      },
    ],
  },

  // ─── Q6 — Crude Oil and Fractional Distillation (Crit D, 12 marks) ──────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Crude Oil, Fractional Distillation and Environmental Impact',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'A coastal tanker loading crude oil at an estuary terminal is holed in a collision and leaks oil into the estuary, where freshwater meets the sea and where salt marshes shelter wading birds and shellfish beds. The crude oil it was carrying is separated at the terminal\'s refinery into useful fuels by fractional distillation. The fractionating column is shown in the question context: petroleum gas leaves the top, then petrol (≈40 °C), naphtha (≈110 °C), kerosene (≈180 °C), diesel (≈250 °C), lubricants (≈350 °C), and bitumen leaves at the base.\n\nThe leaked oil must be cleaned from the estuary to protect the wildlife and the shellfish beds. Three methods are being considered: collecting the oil from the surface with a floating skimmer, burning the oil off the surface, and spraying chemical dispersants from a boat to break the oil into tiny droplets.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="300" fill="#ffffff"/><text x="230" y="20" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Fractional distillation of crude oil</text><polygon points="150,40 310,40 290,270 170,270" fill="#f1f5f9" stroke="#5b6b78" stroke-width="2"/><g font-size="10.5" text-anchor="start" fill="#1f2d3a"><line x1="160" y1="70" x2="300" y2="70" stroke="#cbd5e1"/><text x="320" y="61">Petroleum gas</text><text x="320" y="73" font-size="9" fill="#64748b">smallest molecules</text><line x1="161" y1="105" x2="299" y2="105" stroke="#cbd5e1"/><text x="320" y="108">Petrol · 40 °C</text><line x1="163" y1="140" x2="297" y2="140" stroke="#cbd5e1"/><text x="320" y="143">Naphtha · 110 °C</text><line x1="165" y1="175" x2="295" y2="175" stroke="#cbd5e1"/><text x="320" y="178">Kerosene · 180 °C</text><line x1="167" y1="210" x2="293" y2="210" stroke="#cbd5e1"/><text x="320" y="213">Diesel · 250 °C</text><line x1="169" y1="245" x2="291" y2="245" stroke="#cbd5e1"/><text x="320" y="248">Lubricants · 350 °C</text><text x="180" y="287" font-size="9.5" fill="#64748b">Bitumen (largest molecules)</text></g><g font-size="9" fill="#94a3ad"><text x="120" y="55" text-anchor="end">cool</text><text x="120" y="265" text-anchor="end">hot</text><line x1="125" y1="60" x2="125" y2="260" stroke="#cbd5e1" stroke-dasharray="3 3"/></g></svg>',
      },
      caption: 'Fractionating column: small molecules leave the cool top, large molecules the hot base.',
    },
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
        text: '**Discuss** and **evaluate** the three methods for cleaning the estuary oil spill (surface skimmer, burning, chemical dispersants) and identify one method as being the best for the environment.',
        marks: 8,
        ph: 'Comment on all 3 methods; advantages and disadvantages; identify best with scientific justification (rubric 1-4)',
      },
    ],
  },

  // ─── Q7 — Crude Oil Transport, Veldannia (Crit D, 14 marks) ─────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oil Transport Methods — Environmental and Social Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'Veldannia is a landlocked country split by a high mountain range into a developed Lowland Plain in the south and a remote Highland Valley in the north. The mountain passes suffer severe winters, with blizzards, winds up to 130 km/h and roads buried in deep snow for weeks. Veldannia is a Less Economically Developed Country (LEDC) eager to grow its economy. Its capital and only refinery sit on the Lowland Plain, while the Highland Valley is home to small farming and indigenous communities. The government promotes Veldannia to tourists for its glacial lakes, ancient forests and rare mountain wildlife.\n\nNew oil fields have just been found beneath the Highland Valley. The government plans to extract this oil to supply cheap energy across the whole country and to export the surplus to neighbouring countries by river barge to boost the economy.\n\nKnown ways to transport crude oil are: pipeline, road, and rail.\n\nCrude oil must be moved from the oil field over the mountains to the refinery, and then on to other facilities and to the river port for export. Pipelines, rail and road are some of the options. Pipes can run above ground or be buried up to 2 metres deep. Rail transport is economical over long distances and uses specially designed containers built to survive accidents. Road tankers are also specially designed to resist damage in accidents and can use existing roads. Both rail and road must cross the snowbound mountain passes.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="280" fill="#f3f7f4"/><text x="230" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Veldannia — proposed oil transport routes</text><rect x="30" y="170" width="400" height="90" fill="#dff0d8" stroke="#5b8a3c" stroke-width="1.5"/><text x="120" y="215" font-size="11" font-weight="700" text-anchor="middle" fill="#3d6b1f">Lowland Plain</text><text x="120" y="230" font-size="8.5" text-anchor="middle" fill="#6b8f4e">capital · refinery · river port</text><rect x="30" y="40" width="400" height="60" fill="#eef3e9" stroke="#5b8a3c" stroke-width="1.5"/><text x="120" y="66" font-size="11" font-weight="700" text-anchor="middle" fill="#3d6b1f">Highland Valley</text><text x="120" y="81" font-size="8.5" text-anchor="middle" fill="#6b8f4e">oil field · glacial lakes · farms</text><polygon points="60,170 130,100 200,170" fill="#cbd5e1" stroke="#94a3ad"/><polygon points="180,170 260,95 340,170" fill="#cbd5e1" stroke="#94a3ad"/><polygon points="300,170 370,105 430,170" fill="#cbd5e1" stroke="#94a3ad"/><text x="245" y="150" font-size="9" font-weight="700" text-anchor="middle" fill="#64748b">snowbound mountain passes</text><circle cx="250" cy="60" r="4" fill="#c0392b"/><text x="250" y="52" font-size="8" text-anchor="middle" fill="#c0392b">oil field</text><line x1="250" y1="64" x2="250" y2="205" stroke="#1d6fa5" stroke-width="2" stroke-dasharray="6 4"/><text x="285" y="135" font-size="8" text-anchor="middle" fill="#1d6fa5">route over passes</text></svg>',
      },
      caption: 'Veldannia: oil field in the Highland Valley; refinery and river port on the Lowland Plain; snowbound passes between.',
    },
    tasks: [
      {
        label: '',
        text: '**Discuss** and **evaluate** the most appropriate method of transporting crude oil from the oil field to various locations within the country and exporting excess oil. In your answer you should compare a pipeline with two alternative methods of transport and include:\n\n• advantages and disadvantages of a pipeline\n• advantages and disadvantages of your alternative methods\n• environmental considerations\n• social considerations\n• a concluding appraisal linking all the issues you have discussed.',
        marks: 14,
        ph: 'Pipeline vs road/rail: advantages, disadvantages, environmental/social impacts, concluding appraisal (rubric 1-4)',
      },
    ],
  },
]
