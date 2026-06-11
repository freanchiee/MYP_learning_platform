import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

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
  // ─── Q1: Copper and Silicon (Crit A, 16 marks) ──────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Copper and Silicon — periodic table, extraction, properties, isotopes',
    marks: 16,
    stem: 'Copper has been used by humans for over 10 000 years, making it one of the earliest metals worked by civilisation. Copper ore chalcocite (Cu₂S) is found in the Earth\'s crust. Copper is extracted by heating the ore to produce copper(I) oxide. The copper(I) oxide is then reduced using carbon to produce copper metal. The equations are not balanced. Silicon is a metalloid found in the same region of the periodic table as carbon.',
    tasks: [
      {
        label: 'a',
        text: '**State** the group and period of copper using the periodic table.',
        marks: 2,
        ph: 'Group 11 (accept IB/Group 1B), Period 4',
      },
      {
        label: 'b',
        text: '**Select** numbers to balance the two chemical equations for extracting copper from its ore. Equation 1: Cu₂S + O₂ → Cu₂O + SO₂. Equation 2: Cu₂O + C → Cu + CO₂',
        marks: 4,
        ph: 'Eq1: 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂; Eq2: 2Cu₂O + C → 4Cu + CO₂',
      },
      {
        label: 'c',
        text: '**Outline** why extracting copper from its ore is damaging to the environment.',
        marks: 2,
        ph: 'SO₂ contributes to acid rain; CO₂ contributes to climate change',
      },
      {
        label: 'd',
        text: 'Copper is a metal whilst silicon is a metalloid. **State** two properties of copper as a metal.',
        marks: 2,
        ph: 'Two from: electrical conductivity, thermal conductivity, malleability, metallic lustre',
      },
      {
        label: 'e',
        text: '**Justify** whether the properties of copper you gave in part (d) would differ from those of silicon.',
        marks: 2,
        ph: 'Silicon is a metalloid — different atomic structure gives different (intermediate) properties',
      },
      {
        label: 'f',
        text: 'Silicon has several stable isotopes, including Si-28 and Si-30. **State** the missing values in the table: Si-28 has atomic number 14, atomic mass 28, protons 14, electrons ?, neutrons ?; Si-30 has atomic number 14, atomic mass 30, protons ?, electrons 14, neutrons ?.',
        marks: 2,
        ph: 'Si-28: electrons=14, neutrons=14; Si-30: protons=14, neutrons=16',
      },
      {
        label: 'g',
        text: 'Silicon reacts with oxygen in the air to form silicon dioxide. **Suggest** whether or not all the isotopes of silicon react in the same way.',
        marks: 2,
        ph: 'Same electron configuration — all isotopes react the same way',
      },
    ],
  },

  // ─── Q2: Formate Esters — Laboratory Solvents (Crit B, 15 marks) ────────────
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Esters — laboratory solvents, volatility, hydrolysis, structural formulae',
    marks: 15,
    stem: 'Laboratory solvents include a family of formate esters formed from methanoic acid. Common examples are methyl methanoate, ethyl methanoate, propyl methanoate, and butyl methanoate. These esters are volatile and evaporate from surfaces. Shorter-chain formate esters tend to evaporate more quickly than longer-chain ones due to weaker intermolecular forces. After a period of time the ester molecules evaporate completely from the surface.',
    figImages: ['/images/papers/chemistry-nov-2017/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for an investigation that could test the volatility of these laboratory formate esters.',
        marks: 1,
        ph: 'How does the volatility of formate esters depend on hydrocarbon chain length?',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the investigation in part (a).',
        marks: 3,
        ph: 'As chain length increases volatility decreases because intermolecular forces are stronger',
      },
      {
        label: 'c',
        text: 'The volatility of four formate esters was investigated by measuring the time taken for a sample of the ester to completely evaporate from filter paper. **Identify** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: ester/chain length; DV: time to evaporate; CV: temperature, surface area, volume, mass',
      },
      {
        label: 'd',
        text: 'Formate esters are formed by the reversible reaction of methanoic acid and an alcohol. Ester hydrolysis can degrade solvent quality. **Explain** why formate ester solvents are ideally stored in sealed containers kept in cold and dry conditions.',
        marks: 4,
        ph: 'Cold: no heat so equilibrium stays right, no breakdown; dry: no water so no hydrolysis',
      },
      {
        label: 'e',
        text: 'Butyl methanoate is used as a cherry-flavouring agent and industrial solvent. **Select** the structural formula of butyl methanoate from the options A–D, and **state** the names of the carboxylic acid and the alcohol used to form this ester.',
        marks: 3,
        ph: 'A — butyl methanoate (HCOO–C₄H₉); methanoic acid; butan-1-ol',
        widget: 'radio_select',
        widgetOptions: [
          'A — butyl methanoate (HCOO–C₄H₉)',
          'B — propyl methanoate (HCOO–C₃H₇)',
          'C — ethyl methanoate (HCOO–C₂H₅)',
          'D — pentyl methanoate (HCOO–C₅H₁₁)',
        ],
      },
    ],
  },

  // ─── Q3: Reactivity with Lead(II) Nitrate (Crit B/C, 28 marks) ──────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Reactivity series — lead nitrate investigation, data presentation',
    marks: 28,
    stem: 'A more reactive metal can displace a less reactive metal from its compound in solution. Metal A + Metal B Compound → Metal A Compound + Metal B. When 0.5 mol dm⁻³ lead(II) nitrate solution Pb(NO₃)₂ is added to metal powder a temperature change can be measured as lead ions are displaced from solution.',
    figImages: ['/images/papers/chemistry-nov-2017/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: 'Lead(II) nitrate is toxic. **Select** the hazard symbol that is used for lead(II) nitrate.',
        marks: 1,
        ph: 'Option B — toxic (skull and crossbones)',
        widget: 'radio_select',
        widgetOptions: [
          'A — oxidising (flame on circle)',
          'B — toxic (skull and crossbones)',
          'C — harmful / irritant (exclamation mark)',
          'D — flammable (flame)',
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
        text: '**Design** a method which would allow you to collect sufficient data to place these metals in order of reactivity. The metals you will use are zinc, iron, magnesium, nickel, and aluminium. Your answer should include: a list of equipment you will use, the method you will follow, and how you will make sure your data is sufficient, valid, and safe.',
        marks: 15,
        ph: 'Equipment, variables, stepwise method, repeats, safety with lead nitrate (toxic)',
      },
      {
        label: 'd',
        text: 'Here are some results from a similar investigation. Use the data in the table to **determine** the order of reactivity of these five metals by arranging them from least reactive (left) to most reactive (right).',
        marks: 1,
        ph: 'Nickel → Iron → Zinc → Aluminium → Magnesium (least to most reactive)',
        widget: 'match_drag_drop',
        widgetItems: ['Aluminium', 'Iron', 'Magnesium', 'Nickel', 'Zinc'],
      },
      {
        label: 'e',
        text: '**Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'Larger temperature rise means more reactive; temp change measures reactivity',
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
        text: '**Present** the data in the graph. You need to give your graph an appropriate title, label the x axis, and add the correct unit to the y axis. Data: Nickel 7°C, Iron 12°C, Zinc 28°C, Aluminium 45°C, Magnesium 53°C.',
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

  // ─── Q4: US Penny + Phosphoric Acid (Crit C, 17 marks) ─────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Metal reactivity — US penny composition, phosphoric acid investigation',
    marks: 17,
    stem: 'A scientist is studying the composition of US pennies using dilute phosphoric acid instead of nitric acid. When a coin is placed in phosphoric acid, a gas is produced. The rate of gas production depends on the metal composition of the coin. Using the same composition table as the original US penny study, the scientist can determine when each coin was minted.',
    figImages: ['/images/papers/chemistry-nov-2017/page-17.png', '/images/papers/chemistry-nov-2017/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'The coins are placed in phosphoric acid and a gas is produced. The scientist has suggested that the reaction is: metal + phosphoric acid → metal phosphate + hydrogen. **State** the test for hydrogen gas.',
        marks: 2,
        ph: 'Lit splint/stick; squeaky pop — gas burns with pop sound',
      },
      {
        label: 'b',
        text: 'Copper is one of the least reactive metals used in US pennies, while zinc is more reactive than copper. The scientist measures the rate of gas production to identify coin composition. **Formulate** a testable hypothesis about which coin will produce the slowest reaction.',
        marks: 3,
        ph: 'If coin is 100% copper it will react slowest because Cu is least reactive of metals used',
      },
      {
        label: 'c',
        text: '**State** the independent, dependent and control variables in this investigation.',
        marks: 4,
        ph: 'IV: composition/date of coin; DV: volume of gas in fixed time; CV: temperature, acid concentration',
      },
      {
        label: 'd',
        text: 'The simulation shows the investigation being carried out. Using the graph, **determine** the year of manufacture of each coin tested.',
        marks: 3,
        ph: 'Cross-reference reaction time with bar chart composition, then with year-composition table',
        widget: 'inline_dropdown_select',
        widgetItems: ['Coin 1 (≈ 120 s)', 'Coin 2 (≈ 70 s)', 'Coin 3 (≈ 35 s)'],
        widgetOptions: [
          '1793–1849',
          '1849–1857',
          '1857–1865',
          '1865–1943',
          '1943–1962',
          '1962–1982',
          '1982–present',
        ],
      },
      {
        label: 'e',
        text: '**Discuss** why the results that you obtained are not exactly the same as those produced in the graph.',
        marks: 3,
        ph: 'Coins not exact percentages; calibration from averages; no repeats; gas collection inaccurate',
      },
      {
        label: 'f',
        text: '**Outline** the disadvantage of using this method for determining the age of the coins.',
        marks: 2,
        ph: 'Destructive method — cannot keep coin or repeat results',
      },
    ],
  },

  // ─── Q5: Pepita Canaa Nugget (Crit C, 11 marks) ─────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Gold purity — scientific notation, aqua regia method, percentage calculation',
    marks: 11,
    stem: 'Gold remains one of the most prized metals because of its chemical unreactivity. In 1983, miners in Pará, Brazil discovered the Pepita Canaa — one of the largest gold nuggets found in recent history. Its mass was recorded as 60 820 g. Gold does not react with most acids but dissolves in aqua regia (a mixture of concentrated nitric and hydrochloric acids). Aqua regia solutions of different concentrations are used to test the purity of gold.',
    tasks: [
      {
        label: 'a',
        text: '**State** the mass of the Pepita Canaa nugget in grams using scientific notation.',
        marks: 2,
        ph: '6.08 × 10⁴ g (accept 6.082 × 10⁴)',
      },
      {
        label: 'b',
        text: 'A scientist tests a suspicious golden artefact using aqua regia solutions of different concentrations (24K, 18K, 16K, 10K). Using the table showing which solutions dissolve the artefact, **discuss** the method and **comment** on the validity of the result.',
        marks: 4,
        ph: 'Destructive method; no safety precaution; no repeats; validity: inconclusive or object could be less than 24K',
      },
      {
        label: 'c',
        text: 'Before testing, a scientist proposed the hypothesis: "Purer gold requires a more concentrated aqua regia solution to dissolve it, and gold dissolves more easily than other metals because aqua regia is a strong acid." Use the data in the table to **evaluate** this hypothesis.',
        marks: 2,
        ph: '"More concentrated for purer gold" is correct; "dissolves more easily" is wrong — gold is resistant/unreactive',
      },
      {
        label: 'd',
        text: 'The Spanish gold escudo coin has a total mass of 8.50 g and contains exactly 7.6500 g of gold. **State** the mass of gold in the coin to 3 significant figures.',
        marks: 2,
        ph: '7.65 g',
      },
      {
        label: 'e',
        text: '**Calculate** the percentage of gold contained within the Spanish gold escudo.',
        marks: 1,
        ph: '7.6500 / 8.50 × 100 = 90.0%',
      },
    ],
  },

  // ─── Q6: Carbon Cycle and Climate Change V2 (Crit D, 16 marks) ─────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon cycle — greenhouse gases, temperature anomaly, carbon footprint',
    marks: 16,
    stem: 'The burning of fossil fuels has significantly altered the Earth\'s carbon cycle. Carbon dioxide concentrations in the atmosphere have increased dramatically since the industrial revolution, leading to measurable increases in global temperatures. Scientists monitor the Global Land–Ocean Temperature Index to track the effect of rising CO₂ on climate.',
    figImages: ['/images/papers/chemistry-nov-2017/page-28.png', '/images/papers/chemistry-nov-2017/page-29.png'],
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
        text: 'The Global Land–Ocean Temperature Index shows changes in temperature since the pre-industrial era. Use the graph to **calculate** the temperature increase from 1985 to 2005.',
        marks: 2,
        ph: '0.30°C (1985 ≈ +0.05°C; 2005 ≈ +0.35°C; increase = 0.30°C)',
      },
      {
        label: 'c',
        text: 'Human dependence on fossil fuels is altering the natural balance of the carbon cycle. Carbon footprint is the total mass of greenhouse gases produced by an individual or group through fossil fuel consumption. **Discuss** how society can respond to climate change by altering human behaviour to reduce the carbon footprint. In your answer you should refer to both individuals and larger groups and include: an outline of activities that increase the carbon footprint, an explanation of how these activities increase the carbon footprint, an outline of activities that would decrease the carbon footprint, and a justification of how these activities would affect the carbon cycle.',
        marks: 12,
        ph: 'Activities increasing/decreasing footprint; individual and societal scale; scientific explanation; carbon cycle effect',
      },
    ],
  },

  // ─── Q7: Evaluate Vehicle Fuel Systems (Crit D, 17 marks) ───────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental sustainability — evaluating vehicle fuel systems',
    marks: 17,
    stem: 'Concerns about greenhouse gas emissions and air quality have led governments and manufacturers to develop alternatives to conventional internal-combustion engines. Two main options for road transport are diesel cars and hydrogen fuel-cell cars. A diesel car burns diesel fuel in an internal combustion engine; a hydrogen fuel-cell car uses hydrogen gas to generate electricity through a fuel cell, emitting only water vapour. Emission and cost data for both systems are available for comparison.',
    tasks: [
      {
        label: '',
        text: '**Select** two different vehicle fuel systems to compare from: diesel car, hydrogen fuel-cell car, petrol car, electric car. Using all of the information and your experience from your wider MYP studies, **discuss** and **evaluate** the impact of using these vehicle fuel systems. In your answer you should consider: the environmental impact of the different systems, the costs of running each system, the sustainability of the fuel, and the usefulness of the systems.',
        marks: 17,
        ph: 'Environmental impact, running costs, fuel sustainability, usefulness — both systems with data and justification',
      },
    ],
  },
]
