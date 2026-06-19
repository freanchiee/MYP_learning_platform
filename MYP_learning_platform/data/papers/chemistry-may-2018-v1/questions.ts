import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2018 · VARIANT 1  (isomorphic to chemistry-may-2018)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven artefact in the question context (no image files).
// Answers recomputed throughout.
//   Q1 Acid / Lewis / equilibrium:  formic acid (ants) → ethanoic acid (vinegar)
//   Q2 Bonding / solubility:        hard water Mg/Ca → kettle limescale Ca/Sr
//   Q3 Investigation design (B):    animal bones CaCO₃ → estuary-sediment CaCO₃ grading
//   Q4 Graph / percentage (C):      bone CaCO₃ % → estuary-sediment CaCO₃ %
//   Q5 Rates of reaction (C):       eggshell limestone/oyster → antacid chalk lumps/powder
//   Q6 Crude oil / spills (D):      fractional distillation + sea spill → river-barge spill
//   Q7 Evaluate transport (D):      Country X islands → island nation "Marisla"
// ════════════════════════════════════════════════════════════════════════════

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
  // ─── Q1 — Ethanoic Acid (Crit A, 11 marks) ──────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Ethanoic Acid, Lewis Structures and Equilibrium',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'Vinegar has been produced for thousands of years by allowing wine or fruit juice to ferment and then sour in the air. The sharp taste and smell come from ethanoic acid, the second-simplest carboxylic acid, which gives vinegar its acidity. Household vinegar is a dilute solution of ethanoic acid in water. The formula of ethanoic acid is CH₃COOH.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="210" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ethanoic acid molecule, CH₃COOH</text><g stroke="#5b6b78" stroke-width="2"><line x1="120" y1="120" x2="180" y2="120"/><line x1="180" y1="120" x2="240" y2="95"/><line x1="184" y1="124" x2="244" y2="99"/><line x1="180" y1="120" x2="240" y2="150"/><line x1="240" y1="150" x2="300" y2="150"/></g><g font-size="18" font-weight="700" text-anchor="middle"><circle cx="120" cy="120" r="15" fill="#eef4f7" stroke="#5b6b78"/><text x="120" y="126" fill="#475569">C</text><circle cx="180" cy="120" r="15" fill="#eef4f7" stroke="#5b6b78"/><text x="180" y="126" fill="#475569">C</text><circle cx="240" cy="93" r="15" fill="#fde2e2" stroke="#c0392b"/><text x="240" y="99" fill="#c0392b">O</text><circle cx="240" cy="152" r="15" fill="#fde2e2" stroke="#c0392b"/><text x="240" y="158" fill="#c0392b">O</text><circle cx="300" cy="150" r="13" fill="#e8f5e9" stroke="#2e7d32"/><text x="300" y="155" font-size="14" fill="#2e7d32">H</text></g><g font-size="11" fill="#94a3ad" text-anchor="middle"><text x="120" y="100">CH₃ group</text><text x="222" y="84">C=O</text><text x="272" y="170">O–H</text></g><text x="60" y="195" font-size="11" fill="#475569">Skeleton: a CH₃ group joined to a carbon bonded to a double-bonded O (C=O) and an O–H group.</text></svg>',
      },
      caption: 'Ethanoic acid (CH₃COOH): a CH₃ group joined to a carboxyl group (C=O and O–H).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use** the periodic table to **identify** the group and period for each element present in ethanoic acid (CH₃COOH).',
        marks: 3,
        ph: 'Carbon Grp 4 P 2; Hydrogen Grp 1 P 1; Oxygen Grp 6 P 2',
        widget: 'inline_dropdown_select',
        widgetItems: ['Carbon – Group', 'Carbon – Period', 'Hydrogen – Group', 'Hydrogen – Period', 'Oxygen – Group', 'Oxygen – Period'],
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7'],
      },
      {
        label: 'b',
        text: '**State** the common (traditional) name for ethanoic acid.',
        marks: 1,
        ph: 'Common/trivial name of CH₃COOH',
      },
      {
        label: 'c',
        text: '**Draw** a Lewis (electron dot or dot cross) structure showing the bonding in ethanoic acid, CH₃COOH.',
        marks: 2,
        ph: 'Lewis structure: CH₃ carbon (3 C–H), C double-bonded to O, single-bonded to O–H; show lone pairs',
      },
      {
        label: 'd',
        text: 'Ethanoic acid partially dissociates in water to form an equilibrium. **Write down** a balanced equation for this equilibrium including state symbols.',
        marks: 4,
        ph: 'CH₃COOH(aq) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)',
      },
      {
        label: 'e',
        text: '**State** how the acid can be neutralized.',
        marks: 1,
        ph: 'Neutralization method for ethanoic acid',
      },
    ],
  },

  // ─── Q2 — Kettle Limescale, Ca²⁺ and Sr²⁺ (Crit A, 13 marks) ────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Limescale, Ionic Bonding and Solubility',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 13,
    stem: 'When water that is rich in dissolved group 2 ions is boiled in a kettle, a hard white solid called limescale builds up on the heating element. The main culprits are calcium and strontium ions (Ca²⁺ and Sr²⁺), which come from the rocks the water has flowed through.\n\nWater-treatment chemists choose a softening method that removes one of these ions as an insoluble precipitate while leaving the other dissolved. The solubility data they use to decide are given in the table in the question context.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Anion', 'Ca²⁺', 'Sr²⁺'],
        rows: [
          ['Cl⁻, Br⁻, I⁻', 'soluble', 'soluble'],
          ['SO₄²⁻', 'soluble', 'insoluble'],
          ['OH⁻', 'slightly soluble', 'soluble'],
          ['CO₃²⁻, PO₄³⁻', 'insoluble', 'insoluble'],
        ],
      },
      caption: 'Solubility in water at 25 °C of compounds of Ca²⁺ and Sr²⁺ with various anions.',
    },
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
        ph: 'Property 1 + how it distinguishes (e.g. state: Ca solid, Cl gas); Property 2 + how it distinguishes',
      },
      {
        label: 'd',
        text: '**State** the type of bond that would form in a reaction between calcium and chlorine.',
        marks: 1,
        ph: 'Type of bond formed when Ca reacts with Cl',
      },
      {
        label: 'e',
        text: 'Using the solubility data in the table above, **explain** how you would remove Sr²⁺ ions only from the water.',
        marks: 4,
        ph: 'Add sulphate; Sr²⁺ forms insoluble SrSO₄; Ca²⁺ stays in solution; filter off precipitate',
      },
      {
        label: 'f',
        text: 'Crystals of calcium chloride hexahydrate (CaCl₂·6H₂O) are heated to form anhydrous calcium chloride. **State** the number of moles of water formed if 0.5 moles of CaCl₂·6H₂O are heated.',
        marks: 1,
        ph: 'Moles of water released from 0.5 mol CaCl₂·6H₂O',
      },
    ],
  },

  // ─── Q3 — Estuary Sediment Grading, CaCO₃ and Inquiry Design (Crit B, 26 marks) ─
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Calcium Carbonate, Acid Reactions and Investigation Design',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 26,
    stem: 'Environmental scientists grade estuary and river-bank sediments by how much calcium carbonate (from broken shell and chalk) they contain, because carbonate-rich sediments protect against acidification. Mud dredged from different sites contains different percentages by mass of calcium carbonate. Scientists use this data to identify where a sediment sample came from and to check that protected carbonate-rich mudflats are not being dug up illegally.\n\nThe percentage by mass of calcium carbonate in sediment from different sites is shown in the table in the question context.\n\nMetal carbonates react with hydrochloric acid to form a metal chloride, water and a gas which will turn limewater cloudy.\n\nThe symbol equation for the reaction of calcium carbonate with hydrochloric acid is:\n\nCaCO₃(s) + 2HCl(aq) → salt (aq) + CO₂(g) + H₂O (l)',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sampling site', 'Surface mud (%)', 'Deep mud (%)'],
        rows: [
          ['Harbour mouth', '20.74', '22.41'],
          ['Tidal flat', '28.55', '24.62'],
          ['Salt marsh', '29.88', '23.05'],
          ['River bend', '29.95', '23.18'],
          ['Mangrove creek', '22.06', '15.09'],
        ],
      },
      caption: 'Percentage by mass of calcium carbonate in surface mud and deep mud at five estuary sites.',
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
        text: 'A scientist investigating estuary sediments developed the following research statement: "The higher the percentage of calcium carbonate in the sediment, the larger the volume of carbon dioxide produced when reacted with acid." **Identify** the variables in this investigation: Independent variable, Dependent variable, and two Control variables.',
        marks: 4,
        ph: 'IV: % CaCO₃ or site/depth of sediment; DV: volume CO₂; CV: mass, acid volume/concentration',
      },
      {
        label: 'c',
        text: '**Design** a table suitable for recording and processing your data. You should select the number of rows and columns and add labels.',
        marks: 4,
        ph: 'Table: Sediment Sample column, Trial 1/2/3 columns, Volume CO₂ (cm³) header, ≥1 sediment row',
      },
      {
        label: 'd',
        text: 'The percentage by mass of calcium carbonate can be determined using the following equipment: a gas syringe connected to a conical flask containing the reaction mixture. Using the equipment above, **design** a method to determine the mass of calcium carbonate in the sediment samples. In your answer you should include:\n\n• a list of any additional equipment you will need\n• details of your method for manipulating the variables\n• details of the data you will collect\n• how you will use your data to decide which sediment contains the most calcium carbonate\n• a statement of any assumptions that you have made\n• how you will ensure that your method is safe.',
        marks: 17,
        ph: 'Full design: equipment list, method, data collection, analysis, assumptions, safety (rubric 1-4)',
      },
    ],
  },

  // ─── Q4 — Graph Analysis, Estuary Sediment CaCO₃ (Crit C, 6 marks) ──────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Data Analysis and Percentage Calculations',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 6,
    stem: 'To grade an estuary sediment, scientists react a dried sediment sample with excess hydrochloric acid and measure the volume of carbon dioxide produced. A calibration graph links the mass of pure calcium carbonate to the volume of CO₂ released. The graph is shown in the question context: the x-axis is mass of CaCO₃ (g) from 1.00 to 3.00 g, and the y-axis is volume of CO₂ produced (cm³) from 200 to 700 cm³.',
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
          { x: 1.9, y: 320 },
          { x: 2.2, y: 528 },
          { x: 2.5, y: 690 },
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
        text: 'One sediment sample of mass 8.94 g was placed in hydrochloric acid and produced 504 cm³ of carbon dioxide. Using data from the graph and the table in Q3, **calculate** the percentage by mass of calcium carbonate in the sediment sample and **identify** which sampling site the sample most likely came from.',
        marks: 4,
        ph: 'Read ~2.1g CaCO₃ from graph; % = 2.1/8.94 × 100 ≈ 23.5%; closest table value is River bend deep mud (23.18%)',
      },
    ],
  },

  // ─── Q5 — Antacid: Chalk Lumps vs Powdered Chalk (Crit C, 18 marks) ─────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Rates of Reaction and Data Reliability',
    topicCanonical: 'Rates of Reaction & Catalysis',
    topicGroup: 'Chemical Reactions',
    marks: 18,
    stem: 'Antacid remedies for indigestion contain calcium carbonate (chalk) to neutralise excess stomach acid. The chalk reacts with the hydrochloric acid in the stomach, releasing carbon dioxide gas. Manufacturers can sell the chalk as small lumps or as a fine powder.\n\nIt has been suggested that, because powdered chalk reacts very quickly, it is used up before it reaches the part of the gut where it is most needed, so patients may need a larger dose of powder than of lumps to give relief for the same length of time.\n\nSome scientists want to compare the reactions of chalk lumps and powdered chalk. They take a fixed mass of chalk lumps and add a fixed volume and concentration of hydrochloric acid to their measuring apparatus. The scientists then repeat the experiment with powdered chalk. The volume of CO₂ over the first 60 seconds is shown in the interactive graph in the question context.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'CO₂ produced by chalk lumps and powdered chalk in acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of CO₂ / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 60, tick: 10 },
        yAxis: { label: 'Volume of CO₂ / cm³', min: 0, max: 90, tick: 10 },
        options: [
          { label: 'Powdered chalk', color: 'teal', ratePerSec: 1.33, plateauVolume: 80 },
          { label: 'Chalk lumps', color: 'orange', ratePerSec: 0.28, plateauVolume: 80 },
        ],
        reaction: 'CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O',
        note: 'Powdered chalk has a much larger surface area, so it reacts faster but finishes sooner.',
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
        text: 'The results for the powdered-chalk reactions are shown in the table below. At t = 30 s: Trial 1 = 41 cm³, Trial 2 = 51 cm³, Trial 3 = 39 cm³. **Analyse** the data and **determine** an appropriate average volume of gas produced at a time of 30 seconds. **Justify** your answer.',
        marks: 2,
        ph: 'Exclude Trial 2 (51) as outlier; average of Trial 1 and Trial 3 = 40 cm³',
      },
      {
        label: 'd',
        text: 'The volume of CO₂ produced for chalk lumps and powdered chalk is shown in the graph over the first 60 seconds. Using the data in the graph, **calculate** the average rate of gas production for each form over the first 60 seconds. Rate of reaction = total volume of gas produced ÷ total time taken.',
        marks: 2,
        ph: 'Powdered chalk ≈ 1.33 cm³s⁻¹; chalk lumps ≈ 0.28 cm³s⁻¹',
      },
      {
        label: 'e',
        text: 'Using your answer from part (d), **suggest** why the powdered chalk produced more carbon dioxide in the same time as the chalk lumps.',
        marks: 3,
        ph: 'Smaller particles → larger surface area → faster/greater rate of reaction',
      },
      {
        label: 'f',
        text: 'Using the data in the graph, **explain** why the chalk lumps are a better antacid for slow, lasting relief than the powdered chalk.',
        marks: 2,
        ph: 'Chalk lumps react more slowly → stay in the gut longer → neutralise acid over a longer period',
      },
      {
        label: 'g',
        text: 'Use the graph to **compare** the reliability of the powdered-chalk and chalk-lump data.',
        marks: 4,
        ph: 'Powdered chalk: less reliable, greater variability; chalk lumps: more reliable, better consistency',
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
    stem: 'A river barge carrying crude oil to an inland refinery runs aground and leaks oil into a slow-moving freshwater river that feeds drinking-water reservoirs and wetland bird reserves. At the refinery, the crude oil is separated into useful fuels by fractional distillation. The fractionating column is shown in the question context: petroleum gas leaves the top, then petrol (≈40 °C), naphtha (≈110 °C), kerosene (≈180 °C), diesel (≈250 °C), lubricants (≈350 °C), and bitumen leaves at the base.\n\nThe leaked oil must be cleaned from the river to protect the wildlife and the water supply. Three methods are being considered: collecting the oil from the surface with a floating skimmer, burning the oil off the surface, and spraying chemical dispersants from a boat to break the oil into tiny droplets.',
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
        text: '**Discuss** and **evaluate** the three methods for cleaning the river oil spill (surface skimmer, burning, chemical dispersants) and identify one method as being the best for the environment.',
        marks: 8,
        ph: 'Comment on all 3 methods; advantages and disadvantages; identify best with scientific justification (rubric 1-4)',
      },
    ],
  },

  // ─── Q7 — Crude Oil Transport, Marisla (Crit D, 14 marks) ───────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Oil Transport Methods — Environmental and Social Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 14,
    stem: 'Marisla is an island nation made up of a large Main Island and a smaller Outer Island separated by a narrow strait. The strait is famous for sudden storms, with winds gusting up to 140 km/h and dangerous tidal currents. Marisla is a Less Economically Developed Country (LEDC) keen to grow its economy. Its capital and only refinery are on the wealthier Main Island, while the Outer Island is home to small fishing and indigenous communities. The government markets Marisla to tourists for its mangrove forests, sandy bays and protected coral reefs.\n\nNew oil fields have just been found beneath the Outer Island. The government plans to extract this oil to supply cheap energy across both islands and to export the surplus to neighbouring countries to boost the economy.\n\nKnown ways to transport crude oil are: pipeline, road, and sea.\n\nCrude oil must be moved from the oil field to the refinery and then on to other facilities and to ports for export. Pipelines, rail, road and sea are some of the options. Pipes can run above ground or be buried up to 2 metres deep. Rail transport is economical over long distances and uses specially designed containers built to survive accidents. Road tankers are also specially designed to resist damage in accidents and can use existing roads. Crude oil has been carried at sea by tankers since 1862.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="280" fill="#eaf4fb"/><text x="230" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Marisla — proposed oil transport routes</text><path d="M40,90 Q120,60 200,95 Q250,120 230,180 Q200,235 110,225 Q40,210 40,150 Z" fill="#dff0d8" stroke="#5b8a3c" stroke-width="2"/><text x="125" y="160" font-size="11" font-weight="700" text-anchor="middle" fill="#3d6b1f">Main Island</text><text x="125" y="175" font-size="8.5" text-anchor="middle" fill="#6b8f4e">capital · refinery · port</text><path d="M320,150 Q380,130 415,165 Q435,200 400,235 Q350,255 320,225 Q300,190 320,150 Z" fill="#dff0d8" stroke="#5b8a3c" stroke-width="2"/><text x="368" y="195" font-size="11" font-weight="700" text-anchor="middle" fill="#3d6b1f">Outer Island</text><text x="368" y="209" font-size="8.5" text-anchor="middle" fill="#6b8f4e">oil field · reefs · fishing</text><text x="277" y="128" font-size="9" font-weight="700" text-anchor="middle" fill="#1d6fa5">stormy strait</text><line x1="235" y1="175" x2="318" y2="180" stroke="#1d6fa5" stroke-width="2" stroke-dasharray="6 4"/><text x="277" y="168" font-size="8" text-anchor="middle" fill="#1d6fa5">sea / pipeline route</text><circle cx="345" cy="228" r="4" fill="#c0392b"/><g fill="#1d6fa5" font-size="16"><text x="262" y="150">~</text><text x="290" y="200">~</text></g></svg>',
      },
      caption: 'Marisla: oil field on the Outer Island; refinery and port on the Main Island; a stormy strait between.',
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
