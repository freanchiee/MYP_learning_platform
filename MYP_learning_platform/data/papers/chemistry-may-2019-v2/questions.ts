import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2019 · VARIANT 2  (isomorphic to chemistry-may-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven interactive artefact on EVERY question — no image
// files, no markdown tables. Answers recomputed throughout. v2 ≠ v1 ≠ source.
//   Q1 Periodic table / fusion synthesis: hassium(Pb+Fe) → nihonium (Bi-209 + Zn-70)
//   Q2 Air pollution + VOCs + molar mass: London 1952 smog → indoor air in a new-build home
//   Q3 Metals / bonding / protective layer: cooking pans (Teflon) → drink cans (lacquered tin-plate)
//   Q4 Diffusion + scientific method: tea-bag diffusion → potassium-permanganate drop in water
//   Q5 Rate / data analysis: soap-bubble lifespan → marble-chip + acid gas rate (different acids)
//   Q6 Investigation design (Crit B): bubble additives → keeping cut flowers fresh (plant-food)
//   Q7 Green chemistry + LCA: plastics-to-energy + glass bottle → PET bottle-to-fibre + glass jar
//   Q8 Water-treatment evaluation (Crit D): copper from PCB water → lead from old-pipe drinking water
// ════════════════════════════════════════════════════════════════════════════

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
  // ─── Q1 — Periodic table / fusion synthesis of nihonium (Crit A, 6 marks)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Nuclear Synthesis of Nihonium',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 113 is now officially recognised by the International Union of Pure and Applied Chemistry (IUPAC) and is named nihonium, symbol Nh — the first element to be discovered in Asia. It is made by firing a beam of zinc atoms at a bismuth target.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Nuclide', 'Symbol', 'Atomic number Z', 'Mass number A', 'Neutrons (A − Z)'],
        rows: [
          ['bismuth-209 (target)', '²⁰⁹Bi', '83', '209', '126'],
          ['zinc-70 (beam)', '⁷⁰Zn', '30', '70', '40'],
          ['nihonium-278 (product)', '²⁷⁸Nh', '113', '278', '165'],
          ['+ 1 free neutron released', '1 n', '0', '1', '—'],
        ],
      },
      caption: 'Fusion route ²⁰⁹Bi + ⁷⁰Zn → ²⁷⁸Nh + 1n. Atomic numbers and mass numbers are each conserved across the reaction.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the symbol of one element present in the modern periodic table but not in Mendeleev\'s original version.',
        marks: 1,
        ph: 'Any noble gas, or element with atomic number > 200, or Sc/Ga/Ge/Hf',
      },
      {
        label: 'b',
        text: '**Suggest** a reason why a group of transition elements present in the modern periodic table is missing from Mendeleev\'s table.',
        marks: 2,
        ph: 'e.g. lanthanides/actinides — rare or not found in compounds',
      },
      {
        label: 'c',
        text: 'Nihonium, atomic number 113, is made in a laboratory. The isotope ²⁷⁸Nh is created by the nuclear fusion of a bismuth target ²⁰⁹Bi and atoms of a lighter element X, releasing 1 neutron: ²⁰⁹Bi + X → ²⁷⁸Nh + 1n. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '30 protons, 40 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Zinc / Zn',
      },
    ],
  },

  // ─── Q2 — Indoor air quality / air pollution / VOCs / molar mass (Crit A, 12 marks)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Indoor Air Pollution, Organic Compounds and Molar Mass',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'When a family moves into a newly built and freshly decorated home, the air inside can be more polluted than the air outside. Burning gas on the hob produces nitrogen dioxide (NO₂), and the hob can also release small amounts of sulfur dioxide (SO₂) from impurities in the fuel. People are advised to open windows when cooking. The fresh paint, glue and new furniture also release volatile organic compounds (VOCs) into the air. Ball-and-stick models of four VOCs are shown in the artefact: the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Indoor pollutant', 'Formula', 'Source in the home', 'Effect'],
        rows: [
          ['Nitrogen dioxide', 'NO₂', 'burning gas on the hob', 'irritates lungs; forms nitric acid'],
          ['Sulfur dioxide', 'SO₂', 'impurities in the fuel', 'forms acid; irritates airways'],
          ['Carbon monoxide', 'CO', 'incomplete combustion', 'toxic; reduces oxygen in blood'],
          ['Mixed VOCs', 'various', 'paint, glue, new furniture', 'headaches; "new house" smell'],
        ],
      },
      caption: 'Common pollutants in indoor air. NO₂ and SO₂ both make the air acidic.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct Lewis structure (dot cross diagram) for a water molecule.',
        marks: 1,
        ph: 'Middle structure: O bonded to two H with two lone pairs on O',
        widget: 'radio_select',
        widgetOptions: ['Structure A', 'Structure B', 'Structure C'],
      },
      {
        label: 'b',
        text: 'When NO₂ reacts with water in the presence of oxygen, nitric acid HNO₃ is produced. **Select** numbers to balance the chemical equation for NO₂ and HNO₃. Make sure you select an option for each box:\n[blank] NO₂(g) + O₂(g) + [blank] H₂O(l) → [blank] HNO₃(aq)',
        marks: 2,
        ph: '4 NO₂ + O₂ + 2 H₂O → 4 HNO₃',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6'],
      },
      {
        label: 'c',
        text: 'When moisture from the indoor air was collected and tested with universal indicator paper, the paper turned red. **State** what this information can tell you about the chemical properties of the indoor air.',
        marks: 1,
        ph: 'Indoor air/moisture is acidic / contains acid / low pH',
      },
      {
        label: 'd',
        text: '**State** the group and period of sulfur.',
        marks: 2,
        ph: 'Group 6, Period 3',
      },
      {
        label: 'e',
        text: 'The nitrogen dioxide from the hob is converted to nitric acid, HNO₃, on damp surfaces. **Calculate** the mass of one mole of nitric acid, HNO₃.',
        marks: 2,
        ph: '63 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds released indoors.',
        marks: 4,
        ph: 'Alcohol/Ethanol; Alkane/Butane; Ester/Ethyl ethanoate; Carboxylic acid/Methanoic acid',
      },
    ],
  },

  // ─── Q3 — Drink cans / metals / lacquer coating (Crit A, 9 marks)
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Protective Coatings on Drink Cans',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 9,
    stem: 'One everyday object made from metal is a drink can. A variety of materials are used to make cans, including different metals coated to protect them. The main metals used for making drink cans are aluminium and tin-plated steel (steel is mostly iron).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Can type', 'Main metal', 'Density / g cm⁻³', 'Why it is used'],
        rows: [
          ['Fizzy-drink can', 'Aluminium', '2.7', 'light, easy to shape, recyclable'],
          ['Food / soup can', 'Tin-plated steel (iron)', '7.9', 'strong, cheap, holds its shape'],
          ['Premium can', 'Aluminium', '2.7', 'light, smooth printed surface'],
        ],
      },
      caption: 'Metals chosen for cans. All are good conductors, malleable and have high melting points.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make drink cans.',
        marks: 2,
        ph: 'e.g. malleable; high melting point; strong/rigid; good thermal conductivity',
      },
      {
        label: 'b',
        text: 'If the inside of a bare aluminium can is left in contact with an acidic drink, a chemical reaction takes place in which aluminium atoms are converted into aluminium ions. **Determine** the charge on an aluminium ion and **justify** whether the aluminium has been reduced or oxidised.',
        marks: 3,
        ph: 'Al³⁺; oxidised (loses electrons, oxidation state increases from 0 to +3)',
      },
      {
        label: 'c',
        text: 'The inside of most drink cans is sprayed with a thin lacquer — an unreactive plastic (polymer) layer held together by covalent bonding — to stop the drink touching the metal. **State** the type of bonding in the lacquer layer and in the metal of the can itself. Use this information to **discuss** the advantages of a lacquered can compared with a bare metal can.',
        marks: 4,
        ph: 'Covalent (lacquer); metallic (can); lacquer forms an insoluble coating, metal would otherwise form soluble ions, prevents the drink tasting metallic and protects health',
      },
    ],
  },

  // ─── Q4 — Potassium-permanganate diffusion + scientific method (Crit B, 9 marks)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion and Scientific Method',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'A student has noticed that when a single crystal of purple potassium permanganate is dropped into a beaker of still water, the purple colour slowly spreads out until the whole beaker is evenly coloured. This is due to the diffusion of the dissolved particles. The student wanted to know whether there is a relationship between the temperature of the water and the time for the purple colour to spread evenly through the beaker.\n\nThe variables for this experiment are:\n- Independent variable: Temperature of the water\n- Dependent variable: Time taken for the colour to spread evenly\n- Control variable 1: Size of the potassium permanganate crystal\n- Control variable 2: Same size and shape of beaker',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Time for potassium permanganate to spread evenly vs water temperature',
        xLabel: 'Water temperature',
        yLabel: 'Time for colour to spread evenly',
        xUnit: '°C',
        yUnit: 's',
        xMin: 0,
        xMax: 80,
        yMin: 0,
        yMax: 800,
        xStep: 10,
        yStep: 100,
        dataPoints: [
          { x: 10, y: 680 },
          { x: 30, y: 520 },
          { x: 50, y: 400 },
          { x: 70, y: 260 },
        ],
      },
      caption: 'Result of one trial. Read the diffusion time off the line at any temperature, e.g. at 50 °C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of water / mass of the crystal / not stirring the water',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for the colour to spread evenly [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy increases so particles mix more quickly',
        widget: 'fill_blank',
        widgetOptions: ['decreases', 'increases', 'stays the same'],
      },
      {
        label: 'c',
        text: 'The student carried out one trial and collected data to test the hypothesis. The data is shown in the graph. **Use** the graph to **predict** how long it would take for the colour to spread evenly at a temperature of 50 °C.',
        marks: 2,
        ph: '400 ± 10 seconds (s)',
      },
      {
        label: 'd',
        text: 'After further research, the student determined that the relationship in the graph should have been non-linear. **Outline** how the method could be improved to confirm that the relationship is non-linear.',
        marks: 3,
        ph: 'record data at intermediate temperatures; more than one trial; calculate average',
      },
    ],
  },

  // ─── Q5 — Marble chips + acid gas rate / data analysis (Crit B, 19 marks)
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Marble Chip Reaction Rate and Data Analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 19,
    stem: 'When marble chips (calcium carbonate) are dropped into an acid, they fizz as carbon dioxide gas is released. The chips keep reacting until either all the chips or all the acid is used up. How fast the gas comes off depends on the acid used.\n\nA student decided to explore how the acid used affects the time taken for a fixed mass of marble chips to stop fizzing. The student has identical 5 g portions of marble chips, a range of acids and various pieces of laboratory equipment. A fixed volume of 50 cm³ of each acid was used.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Time for 5 g of marble chips to stop fizzing in different acids',
        mode: 'bars',
        variable: 'Acid the marble chips are dropped into',
        metric: 'Mean time for the chips to stop fizzing / s',
        bars: [
          { label: 'dilute ethanoic acid', value: 120 },
          { label: 'dilute hydrochloric acid', value: 55 },
          { label: 'concentrated hydrochloric acid', value: 28 },
          { label: 'dilute citric acid', value: 95 },
          { label: 'dilute sulfuric acid', value: 70 },
        ],
        note: 'A shorter bar means a faster reaction — the chips stop fizzing sooner.',
      },
      caption: 'Mean reaction time for each acid. The stronger and more concentrated the acid, the faster the chips react.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the most appropriate piece of equipment for accurately measuring the volume of each acid.',
        marks: 1,
        ph: '50 cm³ measuring cylinder',
        widget: 'radio_select',
        widgetOptions: ['Beaker', '50 cm³ measuring cylinder', 'Ruler', 'Thermometer'],
      },
      {
        label: 'b',
        text: 'The reaction time for dilute hydrochloric acid was measured three times: 54.0 s, 56.7 s and 54.3 s. For dilute hydrochloric acid, **calculate** the mean reaction time to 1 decimal place. Show your working and add your final value to the data.',
        marks: 2,
        ph: '(54.0 + 56.7 + 54.3) / 3 = 55.0 s',
      },
      {
        label: 'c',
        text: '**Present** the mean reaction-time data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: acid (x-axis), mean reaction time/s (y-axis); title; correct scale; all bars plotted',
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The marble chips will stop fizzing sooner if a more concentrated acid is used, because there are more acid particles to collide with the chips."',
        marks: 2,
        ph: 'IV: concentration of acid; DV: time for chips to stop fizzing',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of acid', 'Time for chips to stop fizzing', 'Type of marble chip', 'Volume of acid', 'Concentration of acid'],
      },
      {
        label: 'e',
        text: 'Two students measured the reaction time. One student used whole 5 g marble chips, while the other student ground each 5 g portion into powder first. Their results are shown in the artefact above. **Suggest** which of the two methods will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Whole-chip method more reliable/reproducible; ground powder has different surface areas each time, reacts at different rates, harder to repeat',
      },
      {
        label: 'f',
        text: 'A student recorded the reaction time for chips in dilute citric acid. The three trials gave 1 min 12 s, 30 s and 33 s. **Calculate** the mean reaction time for the chips in dilute citric acid.',
        marks: 3,
        ph: '(72 + 30 + 33) / 3 = 45 s',
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "The chips will always stop fizzing faster in a more concentrated acid because there are more acid particles." Use the data in part (f) and the artefact to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Concentrated HCl is faster than dilute HCl, so concentration matters; but dilute citric acid is slower than dilute sulfuric acid, so the type/strength of acid also matters — only partly valid',
      },
    ],
  },

  // ─── Q6 — Investigation design: keeping cut flowers fresh (Crit B, 18 marks)
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 18,
    stem: 'When flowers are cut and put in a vase, they wilt after a few days as bacteria block the stems and the petals lose water. Florists add substances to the vase water to keep the flowers fresh for longer. Plain water alone lets the flowers wilt fastest.\n\nYou have seen that the number of days that cut flowers stay fresh will change if different substances are added to the vase water.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Vase-water additive', 'Idea behind it', 'Equipment needed'],
        rows: [
          ['Sugar', 'feeds the flower with energy', 'balance, measuring cylinder'],
          ['Lemonade (citric acid + sugar)', 'acid lowers pH and slows bacteria', 'measuring cylinder'],
          ['A drop of bleach', 'kills bacteria in the water', 'pipette, measuring cylinder'],
          ['Plain water (control)', 'water only', 'measuring cylinder'],
        ],
      },
      caption: 'Four additives a florist could compare. Use the table to help plan a fair test of which keeps flowers fresh longest.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether sugar, lemonade, a drop of bleach or plain water keeps cut flowers fresh for the longest time. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: type/amount of additive; DV: days/time flowers stay fresh; CVs: flower type, stem length, volume of water, room temperature, light); equipment (vases, flowers, additives, balance, measuring cylinder, pipette, ruler); method (cut equal stems, add each additive, record freshness/wilting daily, repeat with several flowers); sufficient data',
      },
      {
        label: 'b',
        text: 'The florist found that the best additive for keeping flowers fresh was sugar. **Select** the correct graph to present the data for mass of sugar added versus days the flowers stayed fresh.',
        marks: 1,
        ph: 'Graph C (bar chart for discrete data)',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
      },
    ],
  },

  // ─── Q7 — Green chemistry: PET bottle-to-fibre + glass jar LCA (Crit D, 10 marks)
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry Principles and Life Cycle Assessment',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nMillions of clear plastic (PET) drinks bottles are thrown away every day. Some companies now collect used PET bottles, clean them and melt them down into polyester fibre, which is spun into fleece jackets and carpets. The artefact compares the flows of material when used PET bottles are recycled into fibre.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Mass of plastic in PET bottle-to-fibre recycling (arbitrary units)',
        units: 'units',
        flows: [
          { label: 'Used PET bottles collected', value: 100, kind: 'in' },
          { label: 'Polyester fibre produced', value: 82, kind: 'out' },
          { label: 'Clean flake recycled into new bottles', value: 9, kind: 'out' },
          { label: 'Labels and caps recovered for reuse', value: 5, kind: 'out' },
          { label: 'Dirty residue to disposal', value: 4, kind: 'loss' },
        ],
        conservation: 'PET collected (100) = polyester fibre (82) + recycled flake (9) + recovered caps/labels (5) + residue (4).',
      },
      caption: 'Almost all of the collected PET becomes a useful product; only a small fraction becomes waste.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why recycling used PET bottles into polyester fibre fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Impact on landfills (bottles diverted from landfill); pollution control; by-products (flake into new bottles, caps/labels reused); raw material reuse (less new crude oil needed); compare advantages/disadvantages',
      },
      {
        label: 'b',
        text: 'A food company compares the life cycle of a glass jam jar that is reused with one that is thrown away. **Use** the information about reuse to **suggest** two reasons why companies are now reusing glass jars.',
        marks: 2,
        ph: 'e.g. jars can be washed and refilled directly; less new material processed; fewer chemicals/energy used; economic savings',
      },
    ],
  },

  // ─── Q8 — Removing lead ions from old-pipe drinking water (Crit D, 17 marks)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws to make sure that drinking water is safe before it reaches people\'s homes. In older towns, the water mains are still connected to lead pipes. As the water sits in the pipes, dissolved lead ions slowly enter the water. Lead is a toxic heavy metal: even small amounts in drinking water are linked to brain damage in children, so the lead ions must be removed before the water reaches the tap.\n\nModern water companies try to adopt the principles of green chemistry. This involves several aspects such as preventing waste, being energy efficient and using renewable raw materials.\n\nA water company supplies an old town whose drinking water contains dissolved lead ions from the lead pipes. It is important that the lead ions are removed before the water reaches people\'s taps. There are several processes for removing lead ions: Precipitation (add a chemical so lead forms a solid), Activated-carbon filtration, Ion-exchange resin, and Reverse osmosis.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Treatment process', 'Lead removed / %', 'Energy use', 'Set-up cost', 'Waste produced'],
        rows: [
          ['Precipitation (add chemical)', '90', 'low', 'low', 'lead sludge to dispose of'],
          ['Activated-carbon filtration', '80', 'low', 'medium', 'spent carbon to replace'],
          ['Ion-exchange resin', '96', 'low', 'medium', 'concentrated brine to dispose of'],
          ['Reverse osmosis', '99', 'high', 'high', 'concentrated waste water'],
        ],
      },
      caption: 'Four ways to strip lead ions from drinking water, compared by efficiency, energy use, cost and waste.',
    },
    tasks: [
      {
        label: '',
        text: 'You are about to set up a project to clean the drinking water for an old town where children have shown high blood-lead levels caused by lead pipes. **Discuss** and **evaluate** two processes for treating the lead-rich drinking water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. ion-exchange resin vs reverse osmosis); efficiency, environmental, economic, green chemistry, complexity; justify final choice',
      },
    ],
  },
]
