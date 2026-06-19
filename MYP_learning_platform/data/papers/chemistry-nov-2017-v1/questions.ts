import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2017 · VARIANT 1  (isomorphic to chemistry-nov-2017)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context, with
// self-contained data-driven artefacts (no external image files). Answers
// recomputed throughout.
//   Q1 Periodic/extraction/isotopes:  Lead+Arsenic → Tin (cassiterite)+Antimony
//   Q2 Esters/VOC/equilibrium:        methanoate esters → ethanoate esters (nail-polish remover)
//   Q3 Reactivity investigation:      copper sulfate → silver nitrate displacement
//   Q4 Coin composition / gas rate:   US penny → UK 1p/2p coin (bronze → copper-plated steel)
//   Q5 Gold purity / aqua regia:      gold nugget → platinum sponge (catalytic converter recovery)
//   Q6 Carbon cycle / climate:        generic carbon cycle → forest/biofuel carbon balance
//   Q7 Evaluate (Crit D):             car types → domestic home-heating systems
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2017-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Tin and Antimony (Crit A, 16 marks) ────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Tin and Antimony — periodic table, extraction, properties, isotopes',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 16,
    stem: 'For thousands of years tin has been alloyed with copper to make bronze for tools, bells and statues. Tin is found in the Earth\'s crust as the ore cassiterite, which is tin sulfide (SnS). Tin is extracted by first roasting the ore in air to produce tin oxide. The tin oxide is then reduced using carbon to produce tin metal. The equations below are not balanced. Antimony, used to harden the lead in old printing type, is found in the same region of the periodic table as tin.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="60" y="44" width="60" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="90" y="60" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="90" y="76" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Sn</text><text x="90" y="88" font-size="8" text-anchor="middle" fill="#64748b">tin · 50</text></g><g><rect x="180" y="44" width="60" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="210" y="60" font-size="9" text-anchor="middle" fill="#64748b">Group 15</text><text x="210" y="76" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Sb</text><text x="210" y="88" font-size="8" text-anchor="middle" fill="#64748b">antimony · 51</text></g><line x1="120" y1="67" x2="180" y2="67" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="3 3"/><text x="60" y="118" font-size="11" fill="#475569">Sn is a metal (Group 14, Period 5).</text><text x="60" y="136" font-size="11" fill="#475569">Sb is a metalloid (Group 15, Period 5).</text><text x="60" y="160" font-size="10" fill="#94a3ad">Period number = number of occupied electron shells.</text><text x="60" y="176" font-size="10" fill="#94a3ad">Group number (main groups) = number of outer-shell electrons.</text></svg>',
      },
      caption: 'Tin (Sn) and antimony (Sb) sit next to each other in Period 5.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the group and period of tin using the periodic table.',
        marks: 2,
        ph: 'Group 4 (accept 14), Period 5',
      },
      {
        label: 'b',
        text: '**Select** numbers to balance the two chemical equations for extracting tin from its ore. Equation 1: SnS + O₂ → SnO + SO₂. Equation 2: SnO + C → Sn + CO₂',
        marks: 4,
        ph: 'Eq1: 2SnS + 3O₂ → 2SnO + 2SO₂; Eq2: 2SnO + C → 2Sn + CO₂',
      },
      {
        label: 'c',
        text: '**Outline** why extracting tin from its ore is damaging to the environment.',
        marks: 2,
        ph: 'SO₂ contributes to acid rain; CO₂ contributes to climate change',
      },
      {
        label: 'd',
        text: 'Tin is a metal whilst antimony is a metalloid. **State** two properties of tin as a metal.',
        marks: 2,
        ph: 'Two from: electrical conductivity, thermal conductivity, malleability, metallic appearance',
      },
      {
        label: 'e',
        text: '**Justify** whether the properties of tin you gave in part (d) would differ from those of antimony.',
        marks: 2,
        ph: 'Antimony is a metalloid/semi-metal — different structure gives different properties',
      },
      {
        label: 'f',
        text: 'Tin has ten stable isotopes — more than any other element. **State** the missing values in the table for Sn-112 and Sn-124: Sn-112 has atomic number 50, atomic mass 112, protons 50, electrons ?, neutrons ?; Sn-124 has atomic number 50, atomic mass 124, protons ?, electrons 50, neutrons ?.',
        marks: 2,
        ph: 'Sn-112: electrons=50, neutrons=62; Sn-124: protons=50, neutrons=74',
      },
      {
        label: 'g',
        text: 'Tin reacts with oxygen in the air to form tin oxide. **Suggest** whether or not all the isotopes of tin react in the same way.',
        marks: 2,
        ph: 'Same electron configuration — all isotopes react the same way',
      },
    ],
  },

  // ─── Q2: Ethanoate Esters and Volatility (Crit B/A, 15 marks) ───────────────
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Esters — VOCs, volatility, hydrolysis, structural formulae',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 15,
    stem: 'Many nail-varnish removers and solvent-based glues are scented with esters, which are classified as volatile organic compounds (VOCs). VOCs evaporate easily to become vapours, which is why you can smell them from across a room. A family of ethanoate esters — methyl ethanoate, ethyl ethanoate, propyl ethanoate, butyl ethanoate and pentyl ethanoate — have different volatilities, so the scent fades over different times once a drop is left on a watch-glass.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Evaporation time of ethanoate esters',
        mode: 'bars',
        variable: 'Ester (increasing carbon-chain length →)',
        metric: 'Time for a 0.20 cm³ drop to fully evaporate / s',
        bars: [
          { label: 'methyl', value: 95 },
          { label: 'ethyl', value: 165 },
          { label: 'propyl', value: 250 },
          { label: 'butyl', value: 360 },
          { label: 'pentyl', value: 520 },
        ],
        note: 'Longer carbon chains evaporate more slowly — they are less volatile.',
      },
      caption: 'As the carbon chain lengthens, the ester takes longer to evaporate (lower volatility).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for an investigation that could test the volatility of these esters.',
        marks: 1,
        ph: 'How does volatility of esters depend on length of hydrocarbon chain?',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the investigation in part (a).',
        marks: 3,
        ph: 'As carbon chain length increases volatility decreases because intermolecular forces are stronger',
      },
      {
        label: 'c',
        text: 'The volatility of three esters was investigated by measuring the time taken for a sample of the ester to completely evaporate. **Identify** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: ester/chain length; DV: time to evaporate; CV: temperature, surface area, container, volume, air flow',
      },
      {
        label: 'd',
        text: 'Scented products contain complex mixtures of esters. The reaction of an alcohol and a carboxylic acid produces an ester and water. This is a reversible reaction. **Explain** why opened bottles of scented nail-varnish remover are ideally stored in cold and dry conditions.',
        marks: 4,
        ph: 'Cold: no heat so no ester breakdown; dry: no water so equilibrium stays right',
      },
      {
        label: 'e',
        text: 'Propyl ethanoate is added to products to give a pear-drop smell. **Select** the structural formula of propyl ethanoate from the options A–D, and **state** the names of the carboxylic acid and the alcohol used to form this ester.',
        marks: 3,
        ph: 'A — propyl ethanoate; ethanoic acid; propanol',
        widget: 'radio_select',
        widgetOptions: [
          'A — propyl ethanoate (CH₃COO–C₃H₇)',
          'B — ethyl ethanoate (CH₃COO–C₂H₅)',
          'C — methyl ethanoate (CH₃COO–CH₃)',
          'D — butyl ethanoate (CH₃COO–C₄H₉)',
        ],
      },
    ],
  },

  // ─── Q3: Metals Reactivity Investigation (Crit B/C, 28 marks) ──────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Reactivity series — silver nitrate investigation, data presentation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 28,
    stem: 'The position of a metal in the reactivity series is related to that metal\'s ability to displace a different metal from its compound. Metal A + Metal B compound → Metal A compound + Metal B. When 0.5 mol dm⁻³ silver nitrate solution is added to a metal powder, the more reactive metal displaces silver and a temperature change can be measured.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Displacement of silver from silver nitrate',
        fixedAnode: 'Magnesium',
        cathodeChoices: ['Magnesium', 'Aluminium', 'Zinc', 'Iron', 'Tin', 'Silver'],
        voltages: {
          'Mg-Al': 0.71,
          'Mg-Zn': 1.61,
          'Mg-Fe': 1.92,
          'Mg-Sn': 2.23,
          'Mg-Ag': 3.17,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'The bigger the gap between two metals in the reactivity series, the larger the cell voltage — and the larger the temperature rise on displacement.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Silver nitrate is toxic and an irritant. **Select** the hazard symbol that is used for silver nitrate.',
        marks: 1,
        ph: 'Option C — harmful/irritant symbol',
        widget: 'radio_select',
        widgetOptions: [
          'A — oxidising (flame on circle)',
          'B — flammable (flame)',
          'C — harmful / irritant (exclamation mark)',
          'D — corrosive (corrosion symbol)',
        ],
      },
      {
        label: 'b',
        text: '**Select** one piece of equipment needed to collect appropriate data in this experiment.',
        marks: 1,
        ph: 'Thermometer or temperature probe',
        widget: 'radio_select',
        widgetOptions: [
          'Ruler',
          'Thermometer',
          'Gas syringe',
          'pH probe',
        ],
      },
      {
        label: 'c',
        text: '**Design** a method which would allow you to collect sufficient data to place these metals in order of reactivity. The metals you will use are zinc, iron, magnesium, tin, and aluminium. Your answer should include: a list of equipment you will use, the method you will follow, and how you will make sure your data is sufficient, valid, and safe.',
        marks: 15,
        ph: 'Equipment, variables, stepwise method, repeats, safety with silver nitrate',
      },
      {
        label: 'd',
        text: 'Here are some results from a similar investigation. Use the data in the table to **determine** the order of reactivity of these five metals by arranging them from least reactive (left) to most reactive (right).',
        marks: 1,
        ph: 'Tin → Iron → Zinc → Aluminium → Magnesium (least to most reactive)',
        widget: 'match_drag_drop',
        widgetItems: ['Aluminium', 'Iron', 'Magnesium', 'Tin', 'Zinc'],
      },
      {
        label: 'e',
        text: '**Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'Larger temperature rise means more reactive; temperature change is the measure of reactivity',
      },
      {
        label: 'f',
        text: '**Select** the most appropriate graph to present the temperature change data.',
        marks: 1,
        ph: 'Bar graph — discrete categories (metals)',
        widget: 'radio_select',
        widgetOptions: [
          'Bar graph',
          'Line graph',
          'Scatter (xy) graph',
          'Pie chart',
        ],
      },
      {
        label: 'g',
        text: '**Present** the data in the graph. You need to give your graph an appropriate title, label the x axis, and add the correct unit to the y axis. Data: Aluminium 35°C, Iron 14°C, Tin 9°C, Magnesium 42°C, Zinc 28°C.',
        marks: 5,
        ph: 'Title + x-axis metal labels + y-axis "Temperature change / °C" + all 5 bars correct',
      },
      {
        label: 'h',
        text: '**Comment** on the validity of the results in the table and **suggest** an improvement to this investigation.',
        marks: 2,
        ph: 'Only one set of results — limited validity; carry out repeats to calculate an average',
      },
    ],
  },

  // ─── Q4: UK Penny Coins + Acid (Crit C, 17 marks) ─────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Metal reactivity — UK 1p coin composition, acid rate investigation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 17,
    stem: 'Coins have been made from metal throughout history, and as the availability and price of metals change, the composition of coins also changes. The UK one-penny and two-penny coins were made from bronze (copper, tin and zinc) until 1992, when the rising price of copper forced a change to copper-plated steel. Copper has traditionally been chosen for coins because it is one of the least reactive, inexpensive and widely available metals. The steel core is much more reactive than copper. A scientist has decided that the date of the coin can be estimated by measuring the rate of gas production when it reacts with acid.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Gas produced when penny coins react with dilute acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of hydrogen gas / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of gas / cm³', min: 0, max: 60, tick: 10 },
        options: [
          { label: 'Coin 1 (≈ 90 s to finish)', color: 'teal', ratePerSec: 0.5, plateauVolume: 45 },
          { label: 'Coin 2 (≈ 110 s to finish)', color: 'orange', ratePerSec: 0.36, plateauVolume: 40 },
          { label: 'Coin 3 (≈ 60 s to finish)', color: 'purple', ratePerSec: 0.9, plateauVolume: 54 },
        ],
        reaction: 'steel core + acid → iron salt + hydrogen',
        note: 'A faster reaction (steeper line) means more exposed steel — a newer, copper-plated coin.',
      },
      caption: 'Each coin gives a different reaction curve; read the finishing time to compare the coins.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The coins are placed in dilute hydrochloric acid and a gas is produced. The scientist suggests the reaction is: metal + hydrochloric acid → metal chloride + hydrogen. **State** the test for hydrogen gas.',
        marks: 2,
        ph: 'Lit splint/stick; squeaky pop — gas burns with a pop sound',
      },
      {
        label: 'b',
        text: 'Copper has traditionally been chosen for coins as it is one of the least reactive metals, while the steel core of newer coins is much more reactive. The scientist decided that the date of the coin can be determined by measuring the rate of gas production. **Formulate** a testable hypothesis about which coin will produce the slowest reaction.',
        marks: 3,
        ph: 'If coin is solid bronze (mostly copper) it will react slowest because Cu is least reactive',
      },
      {
        label: 'c',
        text: '**State** the independent, dependent and control variables in this investigation.',
        marks: 4,
        ph: 'IV: composition/date of coin; DV: volume of gas in fixed time; CV: temperature, concentration of acid',
      },
      {
        label: 'd',
        text: 'The simulation shows the investigation being carried out. Using the graph, **determine** the type of each coin tested.',
        marks: 3,
        ph: 'Cross-reference reaction time with composition, then with the date-composition table',
        widget: 'inline_dropdown_select',
        widgetItems: ['Coin 1 (≈ 90 s)', 'Coin 2 (≈ 110 s)', 'Coin 3 (≈ 60 s)'],
        widgetOptions: [
          'Before 1860 (pure copper)',
          '1860–1971 (bronze, high copper)',
          '1971–1992 (bronze, decimal)',
          '1992–1998 (copper-plated steel)',
          '1998–2008 (copper-plated steel)',
          '2008–2011 (copper-plated steel)',
          '2011–present (copper-plated steel)',
        ],
      },
      {
        label: 'e',
        text: '**Discuss** why the results that you obtained are not exactly the same as those produced in the graph.',
        marks: 3,
        ph: 'Coin plating thickness varies; calibration graph uses averages; no repeats; gas collection inaccurate',
      },
      {
        label: 'f',
        text: '**Outline** the disadvantage of using this method for determining the age of the coins.',
        marks: 2,
        ph: 'Destructive method — cannot keep the coin or repeat results',
      },
    ],
  },

  // ─── Q5: Platinum Recovery and the Acid Test (Crit C, 11 marks) ───────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Precious-metal purity — scientific notation, aqua regia test, percentage calculation',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'Platinum is a very unreactive precious metal used in jewellery and in the catalytic converters of cars. Like gold, platinum does not react with most acids, but it does react with aqua regia ("royal water"), a mixture of concentrated nitric acid and concentrated hydrochloric acid. A recycling plant recovers platinum sponge from scrapped catalytic converters. One large batch of recovered platinum sponge has a mass of 18 642.7 g.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Platinum purity tested', 'Weak aqua regia (1:4)', 'Medium aqua regia (1:3)', 'Strong aqua regia (1:2)'],
        rows: [
          ['999 (99.9% pure)', 'no reaction', 'slow reaction', 'reacts'],
          ['950 (95.0% pure)', 'no reaction', 'reacts', 'reacts'],
          ['900 (90.0% pure)', 'slow reaction', 'reacts', 'reacts'],
          ['850 (85.0% pure)', 'reacts', 'reacts', 'reacts'],
        ],
      },
      caption: 'Acid-test kit results: which strength of aqua regia makes platinum of a given purity react.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the mass of the recovered platinum sponge in grams using scientific notation.',
        marks: 2,
        ph: '1.86427 × 10⁴ g (accept 1.86 × 10⁴)',
      },
      {
        label: 'b',
        text: 'Platinum testing kits contain aqua regia solutions of different concentrations. A raid was carried out on a suspected illegal precious-metal trader. Using the table showing which solutions make platinum of 999, 950, 900 and 850 purity react, **discuss** the method and **comment** on the validity of the result.',
        marks: 4,
        ph: 'Method: destructive; no safety precaution; no repeats; validity: result inconclusive or purity could be lower',
      },
      {
        label: 'c',
        text: 'The hypothesis was: "The purer the platinum, the stronger the aqua regia solution will need to be because pure platinum is quick to dissolve." Use the data in the table to **evaluate** this hypothesis.',
        marks: 2,
        ph: '"react" not "dissolve"; "concentrated" not "stronger"; relationship IV/DV correct; platinum is slow/unreactive',
      },
      {
        label: 'd',
        text: 'A platinum investment bar has a mass of 31.10 g and contains 31.06845 g of platinum. A purity of 999.9 is stated as effectively 100% platinum. **State** the mass of platinum in the investment bar to 3 significant figures.',
        marks: 2,
        ph: '31.1 g',
      },
      {
        label: 'e',
        text: '**Calculate** the percentage of platinum contained within the investment bar.',
        marks: 1,
        ph: '31.1 / 31.10 × 100 = 99.9%',
      },
    ],
  },

  // ─── Q6: Forest Carbon Balance and Climate Change (Crit D, 16 marks) ──────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon cycle — combustion, respiration, photosynthesis, temperature, carbon footprint',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'A managed forest absorbs carbon dioxide as the trees grow and releases it again through respiration, decay and — if the timber is burned as fuel — combustion. Scientists study these flows to understand how forests can help slow climate change, because recent warming is largely caused by human activities, especially the release of greenhouse gases from burning fossil fuels.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon flows in and out of a managed forest (arbitrary units per year)',
        units: 'units',
        flows: [
          { label: 'Photosynthesis (CO₂ absorbed)', value: 100, kind: 'in' },
          { label: 'Respiration of trees (CO₂ released)', value: 35, kind: 'out' },
          { label: 'Decay of leaf litter (CO₂ released)', value: 25, kind: 'out' },
          { label: 'Combustion of timber fuel (CO₂ released)', value: 20, kind: 'loss' },
          { label: 'Carbon locked into new wood', value: 20, kind: 'out' },
        ],
        conservation: 'CO₂ in (100) = CO₂ out (35 + 25 + 20) + carbon stored in wood (20).',
      },
      caption: 'Grey = combustion, red = respiration/decay, green = photosynthesis: the forest absorbs and releases CO₂.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Label** the grey (1), red (2) and green (3) arrows in the key with the correct chemical reactions. Drag each reaction to the correct arrow.',
        marks: 2,
        ph: 'Grey: fuel + O₂ → CO₂ + H₂O; Red: glucose + O₂ → CO₂ + H₂O; Green: CO₂ + H₂O → glucose + O₂',
        widget: 'match_drag_drop',
        widgetItems: [
          'carbon dioxide + water → glucose + oxygen',
          'fuel + oxygen → carbon dioxide + water',
          'glucose + oxygen → carbon dioxide + water',
        ],
      },
      {
        label: 'b',
        text: 'Carbon dioxide (CO₂) is the primary greenhouse gas emitted through human activities and traps heat in the atmosphere. Use the Global Land–Ocean Temperature Index graph to **calculate** the temperature increase from 1975 to 2015.',
        marks: 2,
        ph: '0.62°C (read from graph: ≈ -0.01°C at 1975, ≈ +0.61°C at 2015)',
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Global Land–Ocean Temperature Index',
            xLabel: 'Year',
            yLabel: 'Temperature anomaly',
            yUnit: '°C',
            xMin: 1960,
            xMax: 2020,
            yMin: -0.2,
            yMax: 0.8,
            xStep: 10,
            yStep: 0.2,
            dataPoints: [
              { x: 1960, y: -0.03 },
              { x: 1965, y: -0.09 },
              { x: 1970, y: 0.02 },
              { x: 1975, y: -0.01 },
              { x: 1980, y: 0.18 },
              { x: 1985, y: 0.11 },
              { x: 1990, y: 0.32 },
              { x: 1995, y: 0.38 },
              { x: 2000, y: 0.39 },
              { x: 2005, y: 0.54 },
              { x: 2010, y: 0.62 },
              { x: 2015, y: 0.61 },
              { x: 2020, y: 0.74 },
            ],
          },
          caption: 'Temperature anomaly relative to the 20th-century average. Read the value at 1975 and at 2015.',
        },
      },
      {
        label: 'c',
        text: 'Human dependence on fossil fuels is altering the natural balance of the carbon cycle. Carbon footprint is the term used to describe the mass of greenhouse gases (carbon dioxide and other carbon compounds) produced by the activities of a particular individual or group. **Discuss** how society can respond to climate change by altering human behaviour to reduce the carbon footprint. In your answer you should refer to both individuals and larger groups and include: an outline of activities that increase the carbon footprint, an explanation of how these activities increase the carbon footprint, an outline of activities that would decrease the carbon footprint, and a justification of how these activities would affect the carbon cycle.',
        marks: 12,
        ph: 'Activities increasing/decreasing footprint with scientific explanation; individual and societal level; justification',
      },
    ],
  },

  // ─── Q7: Evaluate Home-Heating Systems (Crit D, 17 marks) ─────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental sustainability — evaluating domestic heating systems and fuels',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'Heating homes is one of the largest sources of household carbon dioxide emissions. To reduce pollution, manufacturers now sell several alternatives to the traditional gas boiler, including electric heat pumps, wood-pellet (biomass) boilers and solar thermal systems. A government report compares the carbon dioxide emissions, running costs and fuel sustainability of each option.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Heating system', 'CO₂ emitted / kg per year', 'Running cost / £ per year', 'Fuel source'],
        rows: [
          ['Gas boiler', '2400', '900', 'natural gas (finite)'],
          ['Electric heat pump', '600', '750', 'grid electricity (mixed)'],
          ['Wood-pellet (biomass) boiler', '300', '850', 'wood pellets (renewable)'],
          ['Solar thermal + backup', '450', '500', 'sunlight (renewable)'],
        ],
      },
      caption: 'Comparison of four domestic heating systems. Use the data to evaluate any two of them.',
    },
    tasks: [
      {
        label: '',
        text: '**Select** two different types of home-heating systems to compare from: gas boiler, electric heat pump, wood-pellet (biomass) boiler, solar thermal. Using all of the information and your experience from your wider MYP studies, **discuss** and **evaluate** the impact of installing these types of heating systems. In your answer you should consider: the environmental impact of the different systems, the costs of running the system, the sustainability of the fuel, and the usefulness of the systems.',
        marks: 17,
        ph: 'Environmental impact, running costs, fuel sustainability, usefulness — for both systems with justification',
      },
    ],
  },
]
