import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// CHEMISTRY — November 2017 · VARIANT 2  (isomorphic to chemistry-nov-2017)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, widget type/counts, tags) in a NEW real-world context — distinct
// from both the source AND variant 1 — with self-contained data-driven
// artefacts (no external image files). Answers recomputed throughout.
//   Q1 Periodic/extraction/isotopes:  Lead+Arsenic → Zinc (sphalerite)+Germanium
//   Q2 Esters/VOC/equilibrium:        methanoate esters → propanoate esters (fruit flavourings)
//   Q3 Reactivity investigation:      copper sulfate → iron(II) sulfate displacement
//   Q4 Coin composition / gas rate:   US penny → euro 1/2/5-cent coin (steel core, copper plating)
//   Q5 Gold purity / aqua regia:      gold nugget → silver hallmarking (nitric-acid touch test)
//   Q6 Carbon cycle / climate:        generic carbon cycle → wetland/peatland carbon balance
//   Q7 Evaluate (Crit D):             car types → electricity-generation methods
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2017-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Zinc and Germanium (Crit A, 16 marks) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Zinc and Germanium — periodic table, extraction, properties, isotopes',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 16,
    stem: 'Zinc has been used for thousands of years to make brass and, more recently, to galvanise steel against rust. Zinc is found in the Earth\'s crust as the ore sphalerite, which is zinc sulfide (ZnS). Zinc is extracted by first roasting the ore in air to produce zinc oxide. The zinc oxide is then reduced using carbon to produce zinc metal. The equations below are not balanced. Germanium, a key material in early transistors, is a metalloid found in the same region of the periodic table as zinc.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Part of the periodic table</text><g><rect x="60" y="44" width="60" height="46" fill="#eef4f7" stroke="#5b6b78"/><text x="90" y="60" font-size="9" text-anchor="middle" fill="#64748b">Group 12</text><text x="90" y="76" font-size="16" font-weight="700" text-anchor="middle" fill="#0b7285">Zn</text><text x="90" y="88" font-size="8" text-anchor="middle" fill="#64748b">zinc · 30</text></g><g><rect x="180" y="44" width="60" height="46" fill="#fff7ed" stroke="#5b6b78"/><text x="210" y="60" font-size="9" text-anchor="middle" fill="#64748b">Group 14</text><text x="210" y="76" font-size="16" font-weight="700" text-anchor="middle" fill="#e8590c">Ge</text><text x="210" y="88" font-size="8" text-anchor="middle" fill="#64748b">germanium · 32</text></g><line x1="120" y1="67" x2="180" y2="67" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="3 3"/><text x="60" y="118" font-size="11" fill="#475569">Zn is a metal (Group 12, Period 4).</text><text x="60" y="136" font-size="11" fill="#475569">Ge is a metalloid (Group 14, Period 4).</text><text x="60" y="160" font-size="10" fill="#94a3ad">Period number = number of occupied electron shells.</text><text x="60" y="176" font-size="10" fill="#94a3ad">Both elements sit in Period 4 of the periodic table.</text></svg>',
      },
      caption: 'Zinc (Zn) and germanium (Ge) both sit in Period 4 of the periodic table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the group and period of zinc using the periodic table.',
        marks: 2,
        ph: 'Group 12 (accept 2 for old numbering), Period 4',
      },
      {
        label: 'b',
        text: '**Select** numbers to balance the two chemical equations for extracting zinc from its ore. Equation 1: ZnS + O₂ → ZnO + SO₂. Equation 2: ZnO + C → Zn + CO₂',
        marks: 4,
        ph: 'Eq1: 2ZnS + 3O₂ → 2ZnO + 2SO₂; Eq2: 2ZnO + C → 2Zn + CO₂',
      },
      {
        label: 'c',
        text: '**Outline** why extracting zinc from its ore is damaging to the environment.',
        marks: 2,
        ph: 'SO₂ contributes to acid rain; CO₂ contributes to climate change',
      },
      {
        label: 'd',
        text: 'Zinc is a metal whilst germanium is a metalloid. **State** two properties of zinc as a metal.',
        marks: 2,
        ph: 'Two from: electrical conductivity, thermal conductivity, malleability, metallic appearance',
      },
      {
        label: 'e',
        text: '**Justify** whether the properties of zinc you gave in part (d) would differ from those of germanium.',
        marks: 2,
        ph: 'Germanium is a metalloid/semi-metal — different structure gives different properties',
      },
      {
        label: 'f',
        text: 'Zinc has five stable isotopes. **State** the missing values in the table for Zn-64 and Zn-70: Zn-64 has atomic number 30, atomic mass 64, protons 30, electrons ?, neutrons ?; Zn-70 has atomic number 30, atomic mass 70, protons ?, electrons 30, neutrons ?.',
        marks: 2,
        ph: 'Zn-64: electrons=30, neutrons=34; Zn-70: protons=30, neutrons=40',
      },
      {
        label: 'g',
        text: 'Zinc reacts with oxygen in the air to form zinc oxide. **Suggest** whether or not all the isotopes of zinc react in the same way.',
        marks: 2,
        ph: 'Same electron configuration — all isotopes react the same way',
      },
    ],
  },

  // ─── Q2: Propanoate Esters and Volatility (Crit B/A, 15 marks) ──────────────
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Esters — VOCs, volatility, hydrolysis, structural formulae',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 15,
    stem: 'Artificial fruit flavourings in sweets and drinks are often esters, which are classified as volatile organic compounds (VOCs). VOCs evaporate easily to become vapours that reach the smell receptors in your nose. A family of propanoate esters — methyl propanoate, ethyl propanoate, propyl propanoate, butyl propanoate and pentyl propanoate — have different volatilities, so a flavour droplet placed on a tile loses its smell over different times.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Evaporation time of propanoate esters',
        mode: 'bars',
        variable: 'Ester (increasing carbon-chain length →)',
        metric: 'Time for a 0.20 cm³ drop to fully evaporate / s',
        bars: [
          { label: 'methyl', value: 120 },
          { label: 'ethyl', value: 195 },
          { label: 'propyl', value: 290 },
          { label: 'butyl', value: 410 },
          { label: 'pentyl', value: 580 },
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
        text: 'Flavour concentrates contain complex mixtures of esters. The reaction of an alcohol and a carboxylic acid produces an ester and water. This is a reversible reaction. **Explain** why opened bottles of liquid flavouring are ideally stored in cold and dry conditions.',
        marks: 4,
        ph: 'Cold: no heat so no ester breakdown; dry: no water so equilibrium stays right',
      },
      {
        label: 'e',
        text: 'Ethyl propanoate is added to sweets to give a rum-and-pineapple flavour. **Select** the structural formula of ethyl propanoate from the options A–D, and **state** the names of the carboxylic acid and the alcohol used to form this ester.',
        marks: 3,
        ph: 'A — ethyl propanoate; propanoic acid; ethanol',
        widget: 'radio_select',
        widgetOptions: [
          'A — ethyl propanoate (C₂H₅COO–C₂H₅)',
          'B — methyl propanoate (C₂H₅COO–CH₃)',
          'C — propyl propanoate (C₂H₅COO–C₃H₇)',
          'D — butyl propanoate (C₂H₅COO–C₄H₉)',
        ],
      },
    ],
  },

  // ─── Q3: Metals Reactivity Investigation (Crit B/C, 28 marks) ──────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Reactivity series — iron(II) sulfate investigation, data presentation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 28,
    stem: 'The position of a metal in the reactivity series is related to that metal\'s ability to displace a different metal from its compound. Metal A + Metal B compound → Metal A compound + Metal B. When 1 mol dm⁻³ iron(II) sulfate solution is added to a metal powder, any metal more reactive than iron displaces it and a temperature change can be measured.',
    artefact: {
      component: 'EchemCellSim',
      data: {
        title: 'Displacement of iron from iron(II) sulfate',
        fixedAnode: 'Magnesium',
        cathodeChoices: ['Magnesium', 'Aluminium', 'Zinc', 'Nickel', 'Tin', 'Iron'],
        voltages: {
          'Mg-Al': 0.71,
          'Mg-Zn': 1.61,
          'Mg-Ni': 2.12,
          'Mg-Sn': 2.23,
          'Mg-Fe': 1.92,
        },
        units: 'V',
        voltmeter: true,
      },
      caption: 'The bigger the gap between two metals in the reactivity series, the larger the cell voltage — and the larger the temperature rise on displacement.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Iron(II) sulfate is harmful if swallowed and an irritant. **Select** the hazard symbol that is used for iron(II) sulfate.',
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
        text: '**Design** a method which would allow you to collect sufficient data to place these metals in order of reactivity. The metals you will use are zinc, nickel, magnesium, tin, and aluminium. Your answer should include: a list of equipment you will use, the method you will follow, and how you will make sure your data is sufficient, valid, and safe.',
        marks: 15,
        ph: 'Equipment, variables, stepwise method, repeats, safety with iron(II) sulfate',
      },
      {
        label: 'd',
        text: 'Here are some results from a similar investigation. Use the data in the table to **determine** the order of reactivity of these five metals by arranging them from least reactive (left) to most reactive (right).',
        marks: 1,
        ph: 'Tin → Nickel → Zinc → Aluminium → Magnesium (least to most reactive)',
        widget: 'match_drag_drop',
        widgetItems: ['Aluminium', 'Magnesium', 'Nickel', 'Tin', 'Zinc'],
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
        text: '**Present** the data in the graph. You need to give your graph an appropriate title, label the x axis, and add the correct unit to the y axis. Data: Aluminium 33°C, Nickel 11°C, Tin 7°C, Magnesium 40°C, Zinc 26°C.',
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

  // ─── Q4: Euro Cent Coins + Acid (Crit C, 17 marks) ────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Metal reactivity — euro cent coin composition, acid rate investigation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 17,
    stem: 'Coins have been made from metal throughout history, and as the availability and price of metals change, the composition of coins also changes. The small euro coins (1, 2 and 5 cent) are made from steel that is electroplated with a thin layer of copper, giving them their copper colour while keeping the cost low. Copper has traditionally been chosen for coins because it is one of the least reactive, inexpensive and widely available metals. The steel core is much more reactive than copper. A scientist has decided that the type of a coin can be identified by measuring the rate of gas production when the coin reacts with acid.',
    artefact: {
      component: 'RateSim',
      data: {
        title: 'Gas produced when euro cent coins react with dilute acid',
        xLabel: 'Time / s',
        yLabel: 'Volume of hydrogen gas / cm³',
        xAxis: { label: 'Time / s', min: 0, max: 120, tick: 20 },
        yAxis: { label: 'Volume of gas / cm³', min: 0, max: 60, tick: 10 },
        options: [
          { label: 'Coin 1 (≈ 85 s to finish)', color: 'teal', ratePerSec: 0.55, plateauVolume: 47 },
          { label: 'Coin 2 (≈ 105 s to finish)', color: 'orange', ratePerSec: 0.38, plateauVolume: 40 },
          { label: 'Coin 3 (≈ 55 s to finish)', color: 'purple', ratePerSec: 0.95, plateauVolume: 52 },
        ],
        reaction: 'steel core + acid → iron salt + hydrogen',
        note: 'A faster reaction (steeper line) means more exposed steel — thinner or worn copper plating.',
      },
      caption: 'Each coin gives a different reaction curve; read the finishing time to compare the coins.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The coins are placed in dilute sulfuric acid and a gas is produced. The scientist suggests the reaction is: metal + sulfuric acid → metal sulfate + hydrogen. **State** the test for hydrogen gas.',
        marks: 2,
        ph: 'Lit splint/stick; squeaky pop — gas burns with a pop sound',
      },
      {
        label: 'b',
        text: 'Copper has traditionally been chosen for coins as it is one of the least reactive metals, while the steel core of these coins is much more reactive. The scientist decided that the type of a coin can be determined by measuring the rate of gas production. **Formulate** a testable hypothesis about which coin will produce the slowest reaction.',
        marks: 3,
        ph: 'If a coin has the thickest copper plating (least exposed steel) it reacts slowest because Cu is least reactive',
      },
      {
        label: 'c',
        text: '**State** the independent, dependent and control variables in this investigation.',
        marks: 4,
        ph: 'IV: type/plating thickness of coin; DV: volume of gas in fixed time; CV: temperature, concentration of acid',
      },
      {
        label: 'd',
        text: 'The simulation shows the investigation being carried out. Using the graph, **determine** the type of each coin tested.',
        marks: 3,
        ph: 'Cross-reference reaction time with plating thickness, then with the coin-type table',
        widget: 'inline_dropdown_select',
        widgetItems: ['Coin 1 (≈ 85 s)', 'Coin 2 (≈ 105 s)', 'Coin 3 (≈ 55 s)'],
        widgetOptions: [
          'Solid copper (no steel)',
          '5-cent (thickest copper plating)',
          '2-cent (medium copper plating)',
          '1-cent (thinnest copper plating)',
          'Worn 1-cent (plating partly gone)',
          'Bronze pre-euro coin',
          'Nickel-brass coin',
        ],
      },
      {
        label: 'e',
        text: '**Discuss** why the results that you obtained are not exactly the same as those produced in the graph.',
        marks: 3,
        ph: 'Plating thickness varies between coins; calibration graph uses averages; no repeats; gas collection inaccurate',
      },
      {
        label: 'f',
        text: '**Outline** the disadvantage of using this method for determining the type of the coins.',
        marks: 2,
        ph: 'Destructive method — cannot keep the coin or repeat results',
      },
    ],
  },

  // ─── Q5: Silver Hallmarking and the Acid Test (Crit C, 11 marks) ──────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Precious-metal purity — scientific notation, nitric-acid test, percentage calculation',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'Silver has been used for coins, jewellery and tableware for thousands of years because it is fairly unreactive. To check its purity, jewellers use a nitric-acid "touch test": a drop of nitric acid of a chosen concentration is placed on a scratch of the metal, and the colour of any reaction shows how pure the silver is. An assay office has received a large bullion bar of recovered silver with a mass of 12 075.4 g for hallmarking.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Silver fineness tested', 'Weak acid (20%)', 'Medium acid (40%)', 'Strong acid (60%)'],
        rows: [
          ['Fine silver (999)', 'no reaction', 'creamy white', 'creamy white'],
          ['Sterling (925)', 'no reaction', 'grey-cream', 'grey'],
          ['Coin silver (800)', 'faint grey', 'grey-green', 'green'],
          ['Low-grade (500)', 'grey-green', 'green', 'dark green'],
        ],
      },
      caption: 'Acid-test colours: a greener colour means more copper present, so the silver is less pure.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the mass of the recovered silver bullion bar in grams using scientific notation.',
        marks: 2,
        ph: '1.20754 × 10⁴ g (accept 1.21 × 10⁴)',
      },
      {
        label: 'b',
        text: 'Hallmarking kits contain nitric-acid solutions of different concentrations. A raid was carried out on a suspected illegal silver dealer. Using the table showing the colours produced for 999, 925, 800 and 500 silver, **discuss** the method and **comment** on the validity of the result.',
        marks: 4,
        ph: 'Method: destructive; no safety precaution; no repeats; validity: colour is subjective so result inconclusive',
      },
      {
        label: 'c',
        text: 'The hypothesis was: "The purer the silver, the stronger the acid solution will need to be because pure silver is quick to dissolve." Use the data in the table to **evaluate** this hypothesis.',
        marks: 2,
        ph: '"react" not "dissolve"; "concentrated" not "stronger"; relationship IV/DV correct; silver is slow/unreactive',
      },
      {
        label: 'd',
        text: 'A silver bullion coin has a mass of 31.10 g and contains 31.07 g of pure silver. A fineness of 999.9 is stated as effectively 100% silver. **State** the mass of silver in the bullion coin to 3 significant figures.',
        marks: 2,
        ph: '31.1 g',
      },
      {
        label: 'e',
        text: '**Calculate** the percentage of silver contained within the bullion coin.',
        marks: 1,
        ph: '31.07 / 31.10 × 100 = 99.9%',
      },
    ],
  },

  // ─── Q6: Wetland Carbon Balance and Climate Change (Crit D, 16 marks) ─────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon cycle — combustion, respiration, photosynthesis, temperature, carbon footprint',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'A peatland wetland stores huge amounts of carbon. Living plants absorb carbon dioxide as they grow, while respiration and the slow decay of dead plants release some back. If the peat is drained and dries out, decay speeds up and the stored carbon is released. Scientists study these flows because recent warming is largely caused by human activities, especially the release of greenhouse gases from burning fossil fuels.',
    artefact: {
      component: 'SankeySim',
      data: {
        title: 'Carbon flows in and out of a healthy peatland (arbitrary units per year)',
        units: 'units',
        flows: [
          { label: 'Photosynthesis (CO₂ absorbed)', value: 100, kind: 'in' },
          { label: 'Respiration of plants (CO₂ released)', value: 40, kind: 'out' },
          { label: 'Slow decay of peat (CO₂ released)', value: 20, kind: 'out' },
          { label: 'Burning of dried peat as fuel (CO₂ released)', value: 15, kind: 'loss' },
          { label: 'Carbon locked into new peat', value: 25, kind: 'out' },
        ],
        conservation: 'CO₂ in (100) = CO₂ out (40 + 20 + 15) + carbon stored in peat (25).',
      },
      caption: 'Grey = combustion, red = respiration/decay, green = photosynthesis: the wetland absorbs and releases CO₂.',
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
        text: 'Carbon dioxide (CO₂) is the primary greenhouse gas emitted through human activities and traps heat in the atmosphere. Use the Global Land–Ocean Temperature Index graph to **calculate** the temperature increase from 1970 to 2000.',
        marks: 2,
        ph: '0.37°C (read from graph: ≈ 0.02°C at 1970, ≈ +0.39°C at 2000)',
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
          caption: 'Temperature anomaly relative to the 20th-century average. Read the value at 1970 and at 2000.',
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

  // ─── Q7: Evaluate Electricity-Generation Methods (Crit D, 17 marks) ───────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental sustainability — evaluating methods of generating electricity',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'The way a country generates its electricity has a large impact on its carbon dioxide emissions. To reduce pollution, many countries are replacing coal-fired power stations with alternatives such as natural-gas stations, wind farms and solar farms. A national energy report compares the carbon dioxide emissions, generating costs and fuel sustainability of each method.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Generation method', 'CO₂ emitted / g per kWh', 'Cost / p per kWh', 'Fuel source'],
        rows: [
          ['Coal-fired station', '820', '12', 'coal (finite)'],
          ['Natural-gas station', '490', '9', 'natural gas (finite)'],
          ['Wind farm', '11', '7', 'wind (renewable)'],
          ['Solar farm', '40', '8', 'sunlight (renewable)'],
        ],
      },
      caption: 'Comparison of four ways to generate electricity. Use the data to evaluate any two of them.',
    },
    tasks: [
      {
        label: '',
        text: '**Select** two different methods of generating electricity to compare from: coal-fired station, natural-gas station, wind farm, solar farm. Using all of the information and your experience from your wider MYP studies, **discuss** and **evaluate** the impact of using these methods of generating electricity. In your answer you should consider: the environmental impact of the different methods, the costs of generating the electricity, the sustainability of the fuel, and the usefulness of the methods.',
        marks: 17,
        ph: 'Environmental impact, generating costs, fuel sustainability, usefulness — for both methods with justification',
      },
    ],
  },
]
