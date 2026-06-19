import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — May 2019 · VARIANT 1  (isomorphic to chemistry-may-2019)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with a
// self-contained data-driven interactive artefact on EVERY question — no image
// files, no markdown tables. Answers recomputed throughout.
//   Q1 Periodic table / fusion synthesis: hassium(Pb+Fe) → livermorium (Cm-248 + Ca-48)
//   Q2 Air pollution + VOCs + molar mass: London 1952 smog → Hawai'i volcanic vog (Kīlauea)
//   Q3 Metals / bonding / protective layer: cooking pans (Teflon) → bicycle frames (anodised Al)
//   Q4 Diffusion + scientific method: tea-bag diffusion → food-colouring drop in water
//   Q5 Rate / data analysis: soap-bubble lifespan → antacid tablet fizzing time
//   Q6 Investigation design (Crit B): bubble additives → cut-apple anti-browning dips
//   Q7 Green chemistry + LCA: plastics-to-energy + glass bottle → waste-oil biodiesel + aluminium can
//   Q8 Water-treatment evaluation (Crit D): copper from PCB water → nitrate from farm runoff
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-may-2019-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1 — Periodic table / fusion synthesis of livermorium (Crit A, 6 marks)
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Periodic Table and Nuclear Synthesis of Livermorium',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 6,
    stem: 'The modern day periodic table is arranged by atomic number. Dmitri Mendeleev\'s original periodic table (1869) arranged elements by atomic mass. Some elements present in the modern periodic table did not appear in Mendeleev\'s original table. Element 116 is now officially recognised by the International Union of Pure and Applied Chemistry (IUPAC) and is named livermorium, symbol Lv. It is made in a laboratory by colliding a beam of atoms with a heavy target.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Nuclide', 'Symbol', 'Atomic number Z', 'Mass number A', 'Neutrons (A − Z)'],
        rows: [
          ['curium-248 (target)', '²⁴⁸Cm', '96', '248', '152'],
          ['calcium-48 (beam)', '⁴⁸Ca', '20', '48', '28'],
          ['livermorium-292 (product)', '²⁹²Lv', '116', '292', '176'],
          ['+ 4 free neutrons released', '4 n', '0', '4', '—'],
        ],
      },
      caption: 'Fusion route ²⁴⁸Cm + ⁴⁸Ca → ²⁹²Lv + 4n. Atomic numbers and mass numbers are each conserved across the reaction.',
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
        text: 'Livermorium, atomic number 116, is made in a laboratory. The isotope ²⁹²Lv is created by the nuclear fusion of a curium target ²⁴⁸Cm and atoms of a lighter element X, releasing 4 neutrons: ²⁴⁸Cm + X → ²⁹²Lv + 4n. **Calculate** the number of protons and neutrons in element X.',
        marks: 2,
        ph: '20 protons, 28 neutrons',
      },
      {
        label: 'd',
        text: '**State** the name of element X from part (c).',
        marks: 1,
        ph: 'Calcium / Ca',
      },
    ],
  },

  // ─── Q2 — Volcanic vog / air pollution / VOCs / molar mass (Crit A, 12 marks)
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Volcanic Air Pollution, Organic Compounds and Molar Mass',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 12,
    stem: 'When the Kīlauea volcano in Hawai\'i erupts, it releases huge volumes of gas that mix with sunlight to form a haze the islanders call "vog" (volcanic smog). The main pollutant gas released is sulfur dioxide (SO₂); nitrogen dioxide (NO₂) also forms when the hot gases react with the air. People with breathing problems are warned to stay indoors when the vog is thick. The vog also contains volatile organic compounds (VOCs). Ball-and-stick models of four VOCs are shown in the artefact: the black spheres represent C atoms, the white spheres represent H atoms and the red spheres represent O atoms.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Pollutant gas in vog', 'Formula', 'Source', 'Effect'],
        rows: [
          ['Sulfur dioxide', 'SO₂', 'released directly from the magma', 'forms acid haze; irritates lungs'],
          ['Nitrogen dioxide', 'NO₂', 'hot volcanic gases react with air', 'forms nitric acid; brown haze'],
          ['Carbon dioxide', 'CO₂', 'released directly from the magma', 'greenhouse gas'],
          ['Water vapour', 'H₂O', 'released directly from the magma', 'forms the visible haze'],
        ],
      },
      caption: 'Composition of the gas plume from Kīlauea. SO₂ is the gas that makes the vog acidic.',
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
        text: 'When droplets of the vog were tested with universal indicator paper, the paper turned red. **State** what this information can tell you about the chemical properties of the vog.',
        marks: 1,
        ph: 'Vog is acidic / contains acid / low pH',
      },
      {
        label: 'd',
        text: '**State** the group and period of sulfur.',
        marks: 2,
        ph: 'Group 6, Period 3',
      },
      {
        label: 'e',
        text: 'Sulfur dioxide dissolves in rain to make sulfurous acid, H₂SO₃. **Calculate** the mass of one mole of sulfurous acid, H₂SO₃.',
        marks: 2,
        ph: '82 g/mol',
      },
      {
        label: 'f',
        text: '**Select** the class and name of each VOC compound shown. The four compounds shown are ball-and-stick models of volatile organic compounds found in the vog.',
        marks: 4,
        ph: 'Alcohol/Methanol; Alkane/Propane; Carboxylic acid/Ethanoic acid; Ester/Methyl methanoate',
      },
    ],
  },

  // ─── Q3 — Bicycle frames / metals / anodised coating (Crit A, 9 marks)
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Metals, Bonding and Protective Coatings on Bicycle Frames',
    topicCanonical: 'Bonding & Molecular Structure',
    topicGroup: 'Bonding & Structure',
    marks: 9,
    stem: 'One everyday object made from metal is a bicycle frame. A variety of materials are used to build frames, including different metals and carbon-fibre composites. The main metals used for making bicycle frames are aluminium, steel (mostly iron) and titanium.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Frame material', 'Main metal', 'Density / g cm⁻³', 'Why it is used'],
        rows: [
          ['Road frame', 'Aluminium', '2.7', 'light, conducts heat, can be drawn into tubes'],
          ['Touring frame', 'Steel (iron)', '7.9', 'strong, can be bent and welded into shape'],
          ['Race frame', 'Titanium', '4.5', 'light, very strong, resists corrosion'],
        ],
      },
      caption: 'Metals chosen for bicycle frames. All are good conductors, malleable and have high melting points.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** two physical properties of metals that make them suitable to make bicycle frames.',
        marks: 2,
        ph: 'e.g. malleable; high melting point; strong/rigid; good thermal conductivity',
      },
      {
        label: 'b',
        text: 'When a bare aluminium frame is left out in the rain, a chemical reaction takes place in which aluminium atoms are converted into aluminium ions. **Determine** the charge on an aluminium ion and **justify** whether the aluminium has been reduced or oxidised.',
        marks: 3,
        ph: 'Al³⁺; oxidised (loses electrons, oxidation state increases from 0 to +3)',
      },
      {
        label: 'c',
        text: 'Many aluminium frames have a protective anodised layer added to reduce the production of ions. Anodising builds up a hard layer of aluminium oxide (Al₂O₃), held together by ionic bonding, on the surface. **State** the type of bonding in the anodised aluminium oxide layer and in the metal of the frame itself. Use this information to **discuss** the advantages of an anodised aluminium frame compared with a bare metal frame.',
        marks: 4,
        ph: 'Ionic (oxide layer); metallic (frame); oxide layer is unreactive/insoluble, protects metal, stops ions forming, prevents corrosion',
      },
    ],
  },

  // ─── Q4 — Food-colouring diffusion + scientific method (Crit B, 9 marks)
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Diffusion and Scientific Method',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 9,
    stem: 'A student has noticed that when a single drop of food colouring is added to a glass of still water, the colour slowly spreads out until the whole glass is evenly coloured. This is due to the diffusion of the dye particles. The student wanted to know whether there is a relationship between the temperature of the water and the time for the colour to spread evenly through the glass.\n\nThe variables for this experiment are:\n- Independent variable: Temperature of the water\n- Dependent variable: Time taken for the colour to spread evenly\n- Control variable 1: Volume of food colouring (one drop)\n- Control variable 2: Same size and shape of glass',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Time for food colouring to spread evenly vs water temperature',
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
          { x: 10, y: 700 },
          { x: 30, y: 540 },
          { x: 50, y: 400 },
          { x: 70, y: 250 },
        ],
      },
      caption: 'Result of one trial. Read the diffusion time off the line at any temperature, e.g. at 50 °C.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Suggest** another control variable for this investigation.',
        marks: 1,
        ph: 'e.g. volume of water / type (brand) of food colouring / not stirring the water',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the student\'s investigation.\nIf the temperature of the water increases then the time taken for the colour to spread evenly [blank] because:',
        marks: 3,
        ph: 'decreases; kinetic energy increases so dye particles mix more quickly',
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

  // ─── Q5 — Antacid tablet fizzing time / rate & data analysis (Crit B, 19 marks)
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Antacid Tablet Reaction Rate and Data Analysis',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 19,
    stem: 'Effervescent antacid tablets fizz when dropped into water because the citric acid and sodium hydrogen carbonate inside them react to release carbon dioxide gas. The tablet keeps fizzing until it has completely dissolved. How long the fizzing lasts depends on the liquid the tablet is dropped into.\n\nA student decided to explore how the liquid used affects the time taken for a tablet to fully dissolve. The student has identical antacid tablets, a range of liquids and various pieces of laboratory equipment. A fixed volume of 50 cm³ of each liquid was used.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Time for an antacid tablet to fully dissolve in different liquids',
        mode: 'bars',
        variable: 'Liquid the tablet is dropped into',
        metric: 'Mean time for the tablet to fully dissolve / s',
        bars: [
          { label: 'iced water (5 °C)', value: 95 },
          { label: 'cold water (20 °C)', value: 58 },
          { label: 'warm water (40 °C)', value: 30 },
          { label: 'lemon juice', value: 22 },
          { label: 'cola', value: 41 },
        ],
        note: 'A shorter bar means a faster reaction — the tablet dissolves more quickly.',
      },
      caption: 'Mean dissolving time for each liquid. The warmer / more acidic the liquid, the faster the tablet fizzes away.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the most appropriate piece of equipment for accurately measuring the volume of each liquid.',
        marks: 1,
        ph: '50 cm³ measuring cylinder',
        widget: 'radio_select',
        widgetOptions: ['Beaker', '50 cm³ measuring cylinder', 'Ruler', 'Thermometer'],
      },
      {
        label: 'b',
        text: 'The dissolving time for cold water was measured three times: 56.0 s, 59.4 s and 58.6 s. For cold water, **calculate** the mean dissolving time to 1 decimal place. Show your working and add your final value to the data.',
        marks: 2,
        ph: '(56.0 + 59.4 + 58.6) / 3 = 58.0 s',
      },
      {
        label: 'c',
        text: '**Present** the mean dissolving-time data in a graph. You should give your graph an appropriate title, add the scale and label the axes.',
        marks: 6,
        ph: 'Bar chart: liquid (x-axis), mean dissolving time/s (y-axis); title; correct scale; all bars plotted',
      },
      {
        label: 'd',
        text: '**Identify** the independent and dependent variables for the following research question: "The dissolving time of an antacid tablet will decrease if the water is warmed, because the particles have more kinetic energy and collide more often."',
        marks: 2,
        ph: 'IV: temperature of water; DV: dissolving time of tablet',
        widget: 'inline_dropdown_select',
        widgetItems: ['Independent variable', 'Dependent variable'],
        widgetOptions: ['Colour of liquid', 'Dissolving time of tablet', 'Type of antacid tablet', 'Volume of liquid', 'Temperature of water'],
      },
      {
        label: 'e',
        text: 'Two students measured the dissolving time. One student dropped whole tablets into the liquid, while the other student crushed each tablet into powder first. Their results are shown in the artefact above. **Suggest** which of the two methods will produce the most reliable data. **Justify** your answer.',
        marks: 3,
        ph: 'Whole tablet method more reliable/reproducible; crushed powder has different surface areas each time, dissolves at different rates, harder to repeat',
      },
      {
        label: 'f',
        text: 'A student recorded the dissolving time for tablets dropped into lemon juice. The three trials gave 1 min 5 s, 17 s and 20 s. **Calculate** the mean dissolving time for the tablet in lemon juice.',
        marks: 3,
        ph: '(65 + 17 + 20) / 3 = 34 s',
      },
      {
        label: 'g',
        text: 'The hypothesis for this experiment was: "Any liquid that is acidic will make the tablet dissolve faster than plain water because the extra acid speeds up the reaction." Use the data in part (f) and the artefact to **comment** on the validity of the hypothesis.',
        marks: 2,
        ph: 'Lemon juice (acidic) is faster than cold water, but cola (also acidic) is slower than warm water — temperature also matters, so the hypothesis is only partly valid',
      },
    ],
  },

  // ─── Q6 — Investigation design: anti-browning dips (Crit B, 18 marks)
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Scientific Investigation Design',
    topicCanonical: 'States of Matter & Particle Theory',
    topicGroup: 'States of Matter',
    marks: 18,
    stem: 'When an apple is cut, the exposed flesh turns brown within minutes as it reacts with oxygen in the air. Cooks slow this browning down by dipping the cut surface in different liquids. A dry surface left in the air browns fastest. Coating the surface with a liquid is thought to block the oxygen and slow the browning.\n\nYou have seen that the time taken for cut apple to turn brown will change if it is dipped in different liquids.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Anti-browning dip', 'Idea behind it', 'Equipment needed'],
        rows: [
          ['Lemon juice', 'acid slows the browning reaction', 'pipette, beaker'],
          ['Salt water', 'salt blocks oxygen reaching the surface', 'balance, measuring cylinder'],
          ['Sugar water', 'sugar coating blocks oxygen', 'balance, measuring cylinder'],
          ['Plain water (control)', 'thin water layer only', 'measuring cylinder'],
        ],
      },
      caption: 'Four dips a cook could compare. Use the table to help plan a fair test of which dip slows browning most.',
    },
    tasks: [
      {
        label: '',
        text: '**Design** a method to investigate whether lemon juice, salt water, sugar water or plain water produces the cut apple with the longest time before it turns brown. In your answer you should include:\n- the independent, dependent and control variables\n- a list of equipment you will use\n- details of the measurements you will take to collect sufficient data',
        marks: 17,
        ph: 'Variables (IV: type of dip; DV: time to turn brown; CVs: apple type, piece size, temperature, volume of dip); equipment (knife, apples, dips, beakers, pipette, timer/colour chart); method (cut equal pieces, dip each, time/photograph until brown, repeat 3+ times); sufficient data',
      },
      {
        label: 'b',
        text: 'The student found that the best dip for slowing browning was lemon juice. **Select** the correct graph to present the data for volume of lemon juice used versus time before browning.',
        marks: 1,
        ph: 'Graph C (bar chart for discrete data)',
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C', 'Graph D'],
      },
    ],
  },

  // ─── Q7 — Green chemistry: waste-oil biodiesel + aluminium can LCA (Crit D, 10 marks)
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Green Chemistry Principles and Life Cycle Assessment',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 10,
    stem: 'In 1998, some scientists proposed a framework called green chemistry. Green chemistry promotes products, processes and systems which focus on sustainability and a safe environment. There are 12 principles of green chemistry. This task will reflect on four of these principles: constant monitoring of processes for hazardous chemicals, prevention of waste, energy efficiency and use of renewable raw materials.\n\nUsed cooking oil from restaurants is often poured away as waste, where it can block drains and pollute rivers. Some companies now collect this waste oil and react it with methanol to make biodiesel, a fuel that can run buses and lorries. The artefact compares the carbon flows when waste oil is turned into biodiesel.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Mass of carbon-containing material in waste-oil biodiesel production (arbitrary units)',
        units: 'units',
        flows: [
          { label: 'Waste cooking oil collected', value: 100, kind: 'in' },
          { label: 'Biodiesel fuel produced', value: 78, kind: 'out' },
          { label: 'Glycerol by-product (sold for soap)', value: 12, kind: 'out' },
          { label: 'Unreacted oil recycled back', value: 6, kind: 'out' },
          { label: 'Waste sludge to disposal', value: 4, kind: 'loss' },
        ],
        conservation: 'Waste oil in (100) = biodiesel (78) + glycerol by-product (12) + recycled oil (6) + waste sludge (4).',
      },
      caption: 'Almost all of the collected waste oil becomes a useful product; only a small fraction becomes waste.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** why turning waste cooking oil into biodiesel fits with the green chemistry principles of constant monitoring of processes for pollution prevention and prevention of waste. In your answer, you should consider:\n- the impact on landfills and drains\n- the effects of pollution\n- the use of by-products\n- reuse of raw materials',
        marks: 8,
        ph: 'Impact on landfills/drains (waste oil diverted from disposal); pollution control; by-products (glycerol sold, oil recycled); raw material reuse; compare advantages/disadvantages',
      },
      {
        label: 'b',
        text: 'A drinks company compares the life cycle of an aluminium drinks can that is recycled with one that is thrown away. **Use** the information about recycling to **suggest** two reasons why companies are now recycling aluminium cans.',
        marks: 2,
        ph: 'e.g. recycling aluminium uses far less energy than extraction; saves raw ore/bauxite; less mining waste; economic savings',
      },
    ],
  },

  // ─── Q8 — Removing nitrate ions from farm runoff (Crit D, 17 marks)
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Water Treatment Methods and Green Chemistry Evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Global population increases have caused an increased demand for safe drinking water. Many governments are passing laws to make sure that farms and factories remove harmful substances from any water that leaves their land before it enters rivers or other water sources. Dissolved nitrate ions from fertiliser run-off need to be removed because high nitrate levels cause algae to grow rapidly in rivers, using up oxygen and killing fish (a process called eutrophication). High nitrate levels in drinking water are also linked to health problems in babies.\n\nModern industries try to adopt the principles of green chemistry. This involves several aspects such as preventing waste, being energy efficient and using renewable raw materials.\n\nA large farm produces run-off water containing dissolved nitrate ions. It is important that the nitrate ions are removed before the water reaches the local river. There are several processes for removing nitrate ions: Constructed wetlands (plants take up nitrate), Ion-exchange resin, Reverse osmosis, and Denitrifying bioreactor (bacteria convert nitrate to nitrogen gas).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Treatment process', 'Nitrate removed / %', 'Energy use', 'Set-up cost', 'Waste produced'],
        rows: [
          ['Constructed wetland (plants)', '70', 'very low', 'medium', 'none — plants reused'],
          ['Ion-exchange resin', '95', 'low', 'medium', 'concentrated brine to dispose of'],
          ['Reverse osmosis', '98', 'high', 'high', 'concentrated brine to dispose of'],
          ['Denitrifying bioreactor (bacteria)', '85', 'very low', 'low', 'harmless nitrogen gas'],
        ],
      },
      caption: 'Four ways to strip nitrate ions from farm run-off, compared by efficiency, energy use, cost and waste.',
    },
    tasks: [
      {
        label: '',
        text: 'You are about to set up a project to clean the run-off water from a large farm in an area where a nearby river has suffered fish deaths from eutrophication. **Discuss** and **evaluate** two processes for treating the nitrate-rich run-off water from the information given. In your answer, you should consider:\n- the efficiency of each process\n- the environmental impact of each process\n- the economic impact of each process\n- how each process matches the principles of green chemistry\n- the complexity of each process\n- your final choice of process with justification',
        marks: 17,
        ph: 'Compare 2 processes (e.g. denitrifying bioreactor vs reverse osmosis); efficiency, environmental, economic, green chemistry, complexity; justify final choice',
      },
    ],
  },
]
