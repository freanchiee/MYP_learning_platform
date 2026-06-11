import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2017',
  subject: 'Chemistry',
  session: 'November',
  year: 2017,
  totalMarks: 120,
  durationMinutes: 120,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Lead and Arsenic (Crit A, 16 marks) ───────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Lead and Arsenic — periodic table, extraction, properties, isotopes',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 16,
    stem: 'Throughout history, make-up has been used for cosmetic purposes and to indicate social status. Coloured ores of copper and iron were some of the first substances used. Lead and arsenic are also elements found in ores. Lead is normally found as an ore in the Earth\'s crust. The most common lead ore is galena or lead sulphide (PbS). Lead is extracted by heating the ore to produce lead oxide. The lead oxide is reduced using carbon to produce lead metal. The equations are not balanced.',
    figImages: ['/images/papers/chemistry-nov-2017/page-02.png', '/images/papers/chemistry-nov-2017/page-03.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the group and period of lead using the periodic table.',
        marks: 2,
        ph: 'Group 4 (accept 14), Period 6',
      },
      {
        label: 'b',
        text: '**Select** numbers to balance the two chemical equations for extracting lead from its ore. Equation 1: PbS + O₂ → PbO + SO₂. Equation 2: PbO + C → Pb + CO₂',
        marks: 4,
        ph: 'Eq1: 2PbS + 3O₂ → 2PbO + 2SO₂; Eq2: 2PbO + C → 2Pb + CO₂',
      },
      {
        label: 'c',
        text: '**Outline** why extracting lead from its ore is damaging to the environment.',
        marks: 2,
        ph: 'SO₂ forms acid rain; CO₂ causes climate change',
      },
      {
        label: 'd',
        text: 'Lead is a metal whilst arsenic is a metalloid. **State** two properties of lead as a metal.',
        marks: 2,
        ph: 'Two from: electrical conductivity, thermal conductivity, malleability, appearance',
      },
      {
        label: 'e',
        text: '**Justify** whether the properties of lead you gave in part (d) would differ from those of arsenic.',
        marks: 2,
        ph: 'Arsenic is a metalloid/semi-metal — different structure gives different properties',
      },
      {
        label: 'f',
        text: 'Arsenic has only one stable isotope, Arsenic-75. Since 2003, several synthetic isotopes have been identified. **State** the missing values in the table for As-65 and As-70: As-65 has atomic number 33, atomic mass 65, protons 33, electrons ?, neutrons ?; As-70 has atomic number 33, atomic mass 70, protons ?, electrons 33, neutrons ?.',
        marks: 2,
        ph: 'As-65: electrons=33, neutrons=32; As-70: protons=33, neutrons=37',
      },
      {
        label: 'g',
        text: 'Arsenic reacts with oxygen in the air to form arsenic oxide. **Suggest** whether or not all the isotopes of arsenic react in the same way.',
        marks: 2,
        ph: 'Same electron configuration — all isotopes react the same way',
      },
    ],
  },

  // ─── Q2: Esters and Volatility (Crit B/A, 15 marks) ───────────────────────
  {
    id: 2,
    crit: 'B',
    type: 'extended',
    topic: 'Esters — VOCs, volatility, hydrolysis, structural formulae',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 15,
    stem: 'Esters can be classified as volatile organic compounds or VOCs. VOCs are compounds which evaporate easily to become vapours or gases. Esters are described as being volatile substances. All the molecules have left the surface of the skin after approximately 4 hours. Some esters with different volatilities include methyl methanoate, ethyl methanoate, propyl methanoate, butyl methanoate, and pentyl methanoate.',
    figImages: ['/images/papers/chemistry-nov-2017/page-07.png', '/images/papers/chemistry-nov-2017/page-09.png'],
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
        ph: 'IV: ester/chain length; DV: time to evaporate; CV: temperature, surface area, container, volume, wind',
      },
      {
        label: 'd',
        text: 'Perfumes contain complex mixtures of esters. The reaction of alcohol and a carboxylic acid produces an ester and water. This is a reversible reaction. **Explain** why opened bottles of perfume are ideally stored in cold and dry conditions.',
        marks: 4,
        ph: 'Cold: no heat so no ester breakdown; dry: no water so equilibrium stays right',
      },
      {
        label: 'e',
        text: 'Butyl ethanoate is added to creams to make them smell like fresh apples. **Select** the structural formula of butyl ethanoate from the options A–D, and **state** the names of the carboxylic acid and the alcohol used to form this ester.',
        marks: 3,
        ph: 'A — butyl ethanoate; ethanoic acid; butanol',
        widget: 'radio_select',
        widgetOptions: [
          'A — butyl ethanoate (CH₃COO–C₄H₉)',
          'B — propyl ethanoate (CH₃COO–C₃H₇)',
          'C — ethyl ethanoate (CH₃COO–C₂H₅)',
          'D — methyl ethanoate (CH₃COO–CH₃)',
        ],
      },
    ],
  },

  // ─── Q3: Metals Reactivity Investigation (Crit B/C, 28 marks) ──────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Reactivity series — copper sulfate investigation, data presentation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 28,
    stem: 'The position of a metal in the reactivity series is related to that metal\'s ability to displace a different metal from its compound. Metal A + Metal B Compound → Metal A Compound + Metal B. When 1 mol dm⁻³ copper sulfate solution is added to metal powder a temperature change can be measured.',
    figImages: ['/images/papers/chemistry-nov-2017/page-13.png'],
    tasks: [
      {
        label: 'a',
        text: 'Copper sulfate is toxic. **Select** the hazard symbol that is used for copper sulfate.',
        marks: 1,
        ph: 'Option C — harmful/toxic symbol',
        widget: 'radio_select',
        widgetOptions: [
          'A — oxidising (flame on circle)',
          'B — flammable (flame)',
          'C — harmful / toxic (exclamation mark)',
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
        text: '**Design** a method which would allow you to collect sufficient data to place these metals in order of reactivity. The metals you will use are zinc, iron, magnesium, lead, and aluminium. Your answer should include: a list of equipment you will use, the method you will follow, and how you will make sure your data is sufficient, valid, and safe.',
        marks: 15,
        ph: 'Equipment, variables, stepwise method, repeats, safety with copper sulfate',
      },
      {
        label: 'd',
        text: 'Here are some results from a similar investigation. Use the data in the table to **determine** the order of reactivity of these five metals by arranging them from least reactive (left) to most reactive (right).',
        marks: 1,
        ph: 'Lead → Iron → Zinc → Aluminium → Magnesium (least to most reactive)',
        widget: 'match_drag_drop',
        widgetItems: ['Aluminium', 'Iron', 'Lead', 'Magnesium', 'Zinc'],
      },
      {
        label: 'e',
        text: '**Justify** your answer using scientific reasoning.',
        marks: 2,
        ph: 'Larger temperature rise means more reactive; temp change is the measure of reactivity',
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
        text: '**Present** the data in the graph. You need to give your graph an appropriate title, label the x axis, and add the correct unit to the y axis. Data: Aluminium 39°C, Iron 16°C, Lead 12°C, Magnesium 46°C, Zinc 32°C.',
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

  // ─── Q4: US Penny Coins + Nitric Acid (Crit C, 17 marks) ──────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Metal reactivity — US penny composition, nitric acid investigation',
    topicCanonical: 'Electrochemistry & Redox',
    topicGroup: 'Electrochemistry',
    marks: 17,
    stem: 'Coins have been made from metal throughout history. As the availability of metals changes, the composition of coins may also have to change. The composition of the US penny or 1 cent coin has changed several times since its introduction in 1793. Copper has traditionally been chosen for making coins as it is one of the least reactive, inexpensive metals and is readily available. Zinc is not normally reactive; Zinc is also more reactive than copper. A scientist has decided that the date of the coin can be determined by measuring the rate of gas production.',
    figImages: ['/images/papers/chemistry-nov-2017/page-17.png', '/images/papers/chemistry-nov-2017/page-21.png'],
    tasks: [
      {
        label: 'a',
        text: 'The coins are placed in nitric acid and a gas is produced. The scientist has suggested that the reaction is: metal + nitric acid → metal nitrate + hydrogen. **State** the test for hydrogen gas.',
        marks: 2,
        ph: 'Lit splint/stick; squeaky pop — gas burns with pop sound',
      },
      {
        label: 'b',
        text: 'Copper has traditionally been chosen for making coins as it is one of the least reactive metals. Zinc is also more reactive than copper. The scientist decided that the date of the coin can be determined by measuring the rate of gas production. **Formulate** a testable hypothesis about which coin will produce the slowest reaction.',
        marks: 3,
        ph: 'If coin is 100% copper it will react slowest because Cu is least reactive of metals used',
      },
      {
        label: 'c',
        text: '**State** the independent, dependent and control variables in this investigation.',
        marks: 4,
        ph: 'IV: composition/date of coin; DV: volume of gas in fixed time; CV: temperature, concentration of acid',
      },
      {
        label: 'd',
        text: 'The simulation shows the investigation being carried out. Using the graph, **determine** the year of manufacture of each coin tested.',
        marks: 3,
        ph: 'Cross-reference reaction time with bar chart composition, then with year-composition table',
        widget: 'inline_dropdown_select',
        widgetItems: ['Coin 1 (≈ 80 s)', 'Coin 2 (≈ 100 s)', 'Coin 3 (≈ 70 s)'],
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
        ph: 'Coins not exact percentages; calibration graph uses averages; no repeats; gas collection inaccurate',
      },
      {
        label: 'f',
        text: '**Outline** the disadvantage of using this method for determining the age of the coins.',
        marks: 2,
        ph: 'Destructive method — cannot keep coin or repeat results',
      },
    ],
  },

  // ─── Q5: Gold Nugget and Touchstone Method (Crit C, 11 marks) ─────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Gold purity — scientific notation, touchstone method, percentage calculation',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 11,
    stem: 'Throughout history gold has been used for making masks, jewellery and even coins because it is very unreactive. Gold does not react with most acids, however it does react with aqua regia (sometimes called "royal water"), which is a mixture of concentrated nitric acid and concentrated hydrochloric acid. Aqua regia is used in the touchstone method to test the purity of gold. The world\'s second largest gold nugget is called the Perth Mint nugget. The mass of the nugget is 23 218.3 g.',
    figImages: ['/images/papers/chemistry-nov-2017/page-23.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the mass of the nugget in grams using scientific notation.',
        marks: 2,
        ph: '2.32183 × 10⁴ g (accept 2.32 × 10⁴)',
      },
      {
        label: 'b',
        text: 'Gold testing kits contain solutions of aqua regia with different concentrations of nitric and hydrochloric acid. A raid was carried out on a suspected illegal trader. Using the table showing which solutions dissolve gold at 24K, 18K, 16K and 10K, **discuss** the method and **comment** on the validity of the result.',
        marks: 4,
        ph: 'Method: destructive; no safety precaution; no repeats; validity: result inconclusive or gold could be <24K',
      },
      {
        label: 'c',
        text: 'The hypothesis was: "The purer the gold, the stronger the aqua regia solution will need to be because gold is quick to dissolve." Use the data in the table to **evaluate** this hypothesis.',
        marks: 2,
        ph: '"react" not "dissolve"; "concentrated" not "stronger"; relationship IV/DV is correct; gold is slow/unreactive',
      },
      {
        label: 'd',
        text: 'A gold sovereign is a coin used as safety money by British military special forces. The coin has a mass of 7.89 g and contains 7.32381 g of gold. 24K gold is stated as 100% gold. **State** the mass of gold in the gold sovereign coin to 3 significant figures.',
        marks: 2,
        ph: '7.32 g',
      },
      {
        label: 'e',
        text: '**Calculate** the percentage of gold contained within the sovereign.',
        marks: 1,
        ph: '7.32 / 7.89 × 100 = 92.8%',
      },
    ],
  },

  // ─── Q6: Carbon Cycle and Climate Change (Crit D, 16 marks) ───────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon cycle — greenhouse gases, temperature, carbon footprint',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'Science has made enormous progress towards understanding climate change and its effects on the Earth\'s ecosystem. Scientists have strong evidence that recent warming is largely caused by human activities, especially the release of greenhouse gases through the burning of fossil fuels.',
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
        text: 'Carbon dioxide (CO₂) is the primary greenhouse gas emitted through human activities. In 2013, CO₂ accounted for about 82% of all US greenhouse gas emissions from human activities. Use the Global Land–Ocean Temperature Index graph to **calculate** the temperature increase from 1980 to 2010.',
        marks: 2,
        ph: '0.44°C (read from graph: ~0.00°C at 1980, ~0.44°C at 2010)',
      },
      {
        label: 'c',
        text: 'Human dependence on fossil fuels is altering the natural balance of the carbon cycle. Carbon footprint is the term used to describe the mass of greenhouse gases (carbon dioxide and other carbon compounds) produced by the consumption of fossil fuels by a particular individual or group. **Discuss** how society can respond to climate change by altering human behaviour to reduce the carbon footprint. In your answer you should refer to both individuals and larger groups and include: an outline of activities that increase the carbon footprint, an explanation of how these activities increase the carbon footprint, an outline of activities that would decrease the carbon footprint, and a justification of how these activities would affect the carbon cycle.',
        marks: 12,
        ph: 'Activities increasing/decreasing footprint with scientific explanation; individual and societal level; justification',
      },
    ],
  },

  // ─── Q7: Evaluate Types of Cars (Crit D, 17 marks) ────────────────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Environmental sustainability — evaluating car types and fuels',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 17,
    stem: 'The car industry has produced electric cars and hybrid cars to reduce the emission of pollutants, including carbon dioxide. A car manufacturer announced that their scientists have developed a new type of plug-in hybrid car. The emission comparison graph shows the emissions from petrol, electric, hybrid, and plug-in hybrid cars.',
    figImages: ['/images/papers/chemistry-nov-2017/page-32.png', '/images/papers/chemistry-nov-2017/page-34.png'],
    tasks: [
      {
        label: '',
        text: '**Select** two different types of cars to compare from: petrol, electric, hybrid, plug-in hybrid. Using all of the information and your experience from your wider MYP studies, **discuss** and **evaluate** the impact of driving these types of cars. In your answer you should consider: the environmental impact of the different types of cars, the costs of running the car, the sustainability of the fuel, and the usefulness of the cars.',
        marks: 17,
        ph: 'Environmental impact, running costs, fuel sustainability, usefulness — for both car types with justification',
      },
    ],
  },
]
