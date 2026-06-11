import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

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
    marks: 16,
    stem: 'Throughout history, tin has been used to make bronze, pewter, and food-grade solder because of its low toxicity and resistance to corrosion. Tin ores such as cassiterite (SnS) are found in the Earth\'s crust. Tin is extracted by heating the ore to produce tin oxide. The tin oxide is then reduced using carbon to produce tin metal. The equations are not balanced. Antimony is a metalloid found in the same region of the periodic table.',
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
        ph: 'Two from: electrical conductivity, thermal conductivity, malleability, metallic lustre',
      },
      {
        label: 'e',
        text: '**Justify** whether the properties of tin you gave in part (d) would differ from those of antimony.',
        marks: 2,
        ph: 'Antimony is metalloid — different atomic structure gives different properties',
      },
      {
        label: 'f',
        text: 'Antimony has two stable isotopes, Sb-121 and Sb-123. **State** the missing values in the table: Sb-121 has atomic number 51, atomic mass 121, protons 51, electrons ?, neutrons ?; Sb-123 has atomic number 51, atomic mass 123, protons ?, electrons 51, neutrons ?.',
        marks: 2,
        ph: 'Sb-121: electrons=51, neutrons=70; Sb-123: protons=51, neutrons=72',
      },
      {
        label: 'g',
        text: 'Antimony reacts with oxygen in the air to form antimony oxide. **Suggest** whether or not all the isotopes of antimony react in the same way.',
        marks: 2,
        ph: 'Same electron configuration — all isotopes react the same way',
      },
    ],
  },

  // ─── Q2: Food Flavouring Esters (Crit B/A, 15 marks) ───────────────────────
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Esters — food flavourings, volatility, hydrolysis, structural formulae',
    marks: 15,
    stem: 'Food manufacturers use esters as artificial flavourings because they are volatile organic compounds (VOCs) that evaporate easily and reach our smell receptors. Shorter-chain esters tend to evaporate more quickly, creating a stronger initial burst of aroma, while longer-chain esters last longer on food surfaces. Pentyl ethanoate (apple), hexyl ethanoate (pear), and heptyl ethanoate (rose apple) are common examples. After a few hours the ester molecules evaporate completely from the food surface.',
    figImages: ['/images/papers/chemistry-nov-2017/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** a research question for an investigation that could test the volatility of these food-flavouring esters.',
        marks: 1,
        ph: 'How does volatility of flavouring esters depend on hydrocarbon chain length?',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis for the investigation in part (a).',
        marks: 3,
        ph: 'As chain length increases volatility decreases because intermolecular forces are stronger',
      },
      {
        label: 'c',
        text: 'The volatility of three food flavouring esters was investigated by measuring the time taken for a sample of the ester to completely evaporate from filter paper. **Identify** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: ester/chain length; DV: time to evaporate; CV: temperature, surface area, volume, mass',
      },
      {
        label: 'd',
        text: 'Flavouring esters are formed by the reversible reaction of a carboxylic acid and an alcohol. Ester hydrolysis can spoil the flavour of food. **Explain** why flavouring concentrates are ideally stored in sealed containers kept in cold and dry conditions.',
        marks: 4,
        ph: 'Cold: no heat so equilibrium stays right, no breakdown; dry: no water so no hydrolysis',
      },
      {
        label: 'e',
        text: 'Pentyl ethanoate gives an apple aroma and is added to fruit-flavoured drinks. **Select** the structural formula of pentyl ethanoate from the options A–D, and **state** the names of the carboxylic acid and the alcohol used to form this ester.',
        marks: 3,
        ph: 'A — pentyl ethanoate; ethanoic acid; pentan-1-ol (pentanol)',
        widget: 'radio_select',
        widgetOptions: [
          'A — pentyl ethanoate (CH₃COO–C₅H₁₁)',
          'B — butyl ethanoate (CH₃COO–C₄H₉)',
          'C — propyl ethanoate (CH₃COO–C₃H₇)',
          'D — methyl ethanoate (CH₃COO–CH₃)',
        ],
      },
    ],
  },

  // ─── Q3: Reactivity with Silver Nitrate (Crit B/C, 28 marks) ───────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Reactivity series — silver nitrate investigation, data presentation',
    marks: 28,
    stem: 'A more reactive metal can displace a less reactive metal from its compound in solution. Metal A + Metal B Compound → Metal A Compound + Metal B. When 1 mol dm⁻³ silver nitrate solution (AgNO₃) is added to metal powder a temperature change can be measured as silver ions are displaced from solution.',
    figImages: ['/images/papers/chemistry-nov-2017/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: 'Silver nitrate is oxidising. **Select** the hazard symbol that is used for silver nitrate.',
        marks: 1,
        ph: 'Option A — oxidising (flame on circle symbol)',
        widget: 'radio_select',
        widgetOptions: [
          'A — oxidising (flame on circle)',
          'B — flammable (flame)',
          'C — harmful / irritant (exclamation mark)',
          'D — toxic (skull and crossbones)',
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
        text: '**Design** a method which would allow you to collect sufficient data to place these metals in order of reactivity. The metals you will use are zinc, iron, magnesium, copper, and aluminium. Your answer should include: a list of equipment you will use, the method you will follow, and how you will make sure your data is sufficient, valid, and safe.',
        marks: 15,
        ph: 'Equipment, variables, stepwise method, repeats, safety with silver nitrate (oxidising/stains skin)',
      },
      {
        label: 'd',
        text: 'Here are some results from a similar investigation. Use the data in the table to **determine** the order of reactivity of these five metals by arranging them from least reactive (left) to most reactive (right).',
        marks: 1,
        ph: 'Copper → Iron → Zinc → Aluminium → Magnesium (least to most reactive)',
        widget: 'match_drag_drop',
        widgetItems: ['Aluminium', 'Copper', 'Iron', 'Magnesium', 'Zinc'],
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
        text: '**Present** the data in the graph. You need to give your graph an appropriate title, label the x axis, and add the correct unit to the y axis. Data: Aluminium 38°C, Copper 6°C, Iron 15°C, Magnesium 49°C, Zinc 31°C.',
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

  // ─── Q4: US Penny + Sulfuric Acid (Crit C, 17 marks) ───────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Metal reactivity — US penny composition, sulfuric acid investigation',
    marks: 17,
    stem: 'A scientist is studying the composition of US pennies using dilute sulfuric acid instead of nitric acid. When a coin is placed in sulfuric acid, a gas is produced. The rate of gas production depends on the metal composition of the coin. Using the same composition table as the original US penny study, the scientist can determine when each coin was minted.',
    figImages: ['/images/papers/chemistry-nov-2017/page-17.png', '/images/papers/chemistry-nov-2017/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'The coins are placed in sulfuric acid and a gas is produced. The scientist has suggested that the reaction is: metal + sulfuric acid → metal sulfate + hydrogen. **State** the test for hydrogen gas.',
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
        widgetItems: ['Coin 1 (≈ 55 s)', 'Coin 2 (≈ 25 s)', 'Coin 3 (≈ 90 s)'],
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

  // ─── Q5: Welcome Stranger Nugget (Crit C, 11 marks) ────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Gold purity — scientific notation, aqua regia method, percentage calculation',
    marks: 11,
    stem: 'Gold remains one of the most prized metals because of its chemical unreactivity. In 1869, two gold prospectors in Victoria, Australia discovered the largest gold nugget ever found — the "Welcome Stranger". The nugget was so large it had to be broken up to be weighed on a jeweller\'s scale. Its mass was recorded as 71 019 g. Gold does not react with most acids but dissolves in aqua regia (a mixture of concentrated nitric and hydrochloric acids). Aqua regia solutions of different concentrations are used to test the purity of gold.',
    tasks: [
      {
        label: 'a',
        text: '**State** the mass of the Welcome Stranger nugget in grams using scientific notation.',
        marks: 2,
        ph: '7.10 × 10⁴ g (accept 7.102 × 10⁴)',
      },
      {
        label: 'b',
        text: 'A scientist tests a suspicious golden artefact using aqua regia solutions of different concentrations (24K, 18K, 16K, 10K). Using the table showing which solutions dissolve the artefact, **discuss** the method and **comment** on the validity of the result.',
        marks: 4,
        ph: 'Destructive method; no safety precaution; no repeats; validity: inconclusive or object could be less than 24K',
      },
      {
        label: 'c',
        text: 'Before testing, a scientist proposed the hypothesis: "The purer the gold, the weaker the aqua regia solution needed, because gold is resistant to acids." Use the data in the table to **evaluate** this hypothesis.',
        marks: 2,
        ph: '"Weaker" is wrong (purer gold needs stronger/more concentrated acid); gold IS resistant; IV/DV relationship is inverted',
      },
      {
        label: 'd',
        text: 'The American Gold Eagle is a 1 troy-ounce gold coin with a total mass of 33.93 g. It is 22-karat gold and contains 31.1035 g of gold. **State** the mass of gold in the coin to 3 significant figures.',
        marks: 2,
        ph: '31.1 g',
      },
      {
        label: 'e',
        text: '**Calculate** the percentage of gold contained within the American Gold Eagle.',
        marks: 1,
        ph: '31.1035 / 33.93 × 100 = 91.7%',
      },
    ],
  },

  // ─── Q6: Carbon Cycle and Climate Change V1 (Crit D, 16 marks) ─────────────
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
        text: 'The Global Land–Ocean Temperature Index shows changes in temperature since the pre-industrial era. Use the graph to **calculate** the temperature increase from 1985 to 2015.',
        marks: 2,
        ph: '0.52°C (1985 ≈ +0.08°C; 2015 ≈ +0.60°C; increase = 0.52°C)',
      },
      {
        label: 'c',
        text: 'Human dependence on fossil fuels is altering the natural balance of the carbon cycle. Carbon footprint is the total mass of greenhouse gases produced by an individual or group through fossil fuel consumption. **Discuss** how society can respond to climate change by altering human behaviour to reduce the carbon footprint. In your answer you should refer to both individuals and larger groups and include: an outline of activities that increase the carbon footprint, an explanation of how these activities increase the carbon footprint, an outline of activities that would decrease the carbon footprint, and a justification of how these activities would affect the carbon cycle.',
        marks: 12,
        ph: 'Activities increasing/decreasing footprint; individual and societal scale; scientific explanation; carbon cycle effect',
      },
    ],
  },

  // ─── Q7: Evaluate Domestic Heating Systems (Crit D, 17 marks) ───────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental sustainability — evaluating domestic heating systems',
    marks: 17,
    stem: 'Rising fuel bills and concerns about greenhouse gas emissions have led homeowners and governments to consider alternatives to traditional gas boilers. Two main options for domestic heating are natural gas boilers and air-source heat pumps. A gas boiler burns natural gas to produce heat; an air-source heat pump uses electricity to move heat from outside air into the home. Emission and cost data for both systems are available for comparison.',
    tasks: [
      {
        label: '',
        text: '**Select** two different heating systems to compare from: gas boiler, air-source heat pump, oil boiler, hydrogen boiler. Using all of the information and your experience from your wider MYP studies, **discuss** and **evaluate** the impact of using these heating systems. In your answer you should consider: the environmental impact of the different systems, the costs of running each system, the sustainability of the fuel, and the usefulness of the systems.',
        marks: 17,
        ph: 'Environmental impact, running costs, fuel sustainability, usefulness — both systems with data and justification',
      },
    ],
  },
]
