import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018-v1',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Nickel (Crit A, 11 marks) ────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Nickel — periodic table, atomic structure, bonding, compound nomenclature',
    marks: 11,
    stem: 'Nickel (Ni) has the atomic number 28 and the mass number 58. It is one of the transition metals and has been used for centuries in coins, jewellery, and protective coatings for steel. The main compounds used in industrial processes are Ni₂O₃ (nickel(III) oxide), NiO and NiCO₃. Nickel dimethylglyoximate is a bright red precipitate used as a chemical test for Ni²⁺ ions in solution.',
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period nickel is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which nickel appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that nickel shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Nickel can form Ni²⁺ ions. **State** the number of protons, neutrons and electrons in a Ni²⁺ ion formed from nickel-58.',
        marks: 3,
        ph: 'Protons 28; Neutrons 30; Electrons 26',
      },
      {
        label: 'e',
        text: 'Nickel(II) chloride is used in nickel electroplating baths. **State** the formula for nickel(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'NiCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds NiO and NiCO₃.',
        marks: 2,
        ph: 'NiO: nickel(II) oxide; NiCO₃: nickel(II) carbonate',
      },
    ],
  },

  // ─── Q2: Glass Recycling — MgO in ancient Persian glass (Crit A, 17 marks) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Glass recycling — separation, MgO formula, molar mass, moles, SiO₂ bonding',
    marks: 17,
    stem: 'Glass recycling plants receive mixed waste containing glass bottles, steel lids, and plastic labels. Before the glass is recycled it has to be processed to remove unwanted components. Chemists also analyse ancient glass to trace its historical origins. The following table compares the percentage chemical composition by mass of four types of glass: Laboratory glass, Venetian glass, Optical crystal glass, and Ancient Persian glass. A compound called MgO (magnesia) appears only in ancient Persian glass. Silicon oxide is the major component in sand and glass.',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-05.png',
      '/images/papers/chemistry-nov-2018/page-06.png',
      '/images/papers/chemistry-nov-2018/page-07.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Before the glass is recycled it has to be processed to remove unwanted components. **Select** which property could be used to separate each component.',
        marks: 3,
        ph: 'Plastic: dissolves in organic solvent; Steel: magnetic; Glass: sinks in water',
        widget: 'inline_dropdown_select',
        widgetItems: ['Plastic label', 'Steel lid', 'Glass bottle'],
        widgetOptions: ['dissolves in water', 'magnetic', 'dissolves in organic solvent', 'sinks in water'],
      },
      {
        label: 'b',
        text: 'Using the data in the table, **identify** the chemical formula of the compound which is only present in ancient Persian glass.',
        marks: 1,
        ph: 'MgO',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Mg=24, O=16; Mr = 24 + 16 = 40 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'An ancient Persian glass fragment has a mass of 250 g. The fragment contains 0.4% by mass of the compound from part (b). **Calculate** the number of moles of that compound in the fragment. Give your answer to three significant figures.',
        marks: 3,
        ph: 'mass = 0.4/100 × 250 = 1.0 g; n = 1.0/40 = 0.025 mol = 2.50 × 10⁻² mol',
      },
      {
        label: 'e',
        text: 'Silicon oxide is the major component in sand and glass and has the structure shown in the diagram. **State** the type of bonding found in silicon oxide and **outline** how the bond is formed.',
        marks: 2,
        ph: 'Covalent; electrons shared between silicon and oxygen atoms',
        figImages: ['/images/papers/chemistry-nov-2018/page-07.png'],
        widget: 'radio_select',
        widgetOptions: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
      },
      {
        label: 'f',
        text: '**State** if silicon oxide is soluble in water. **Justify** your answer.',
        marks: 2,
        ph: 'Insoluble; giant covalent structure — strong bonds throughout will not dissolve',
      },
      {
        label: 'g',
        text: 'Glass bottles can be recycled to make sand, which can replace eroded beaches, and plastic bottles recycled to make pellets for road construction. **Suggest** why recycling glass and plastics would be better for the environment than burying used bottles as waste.',
        marks: 3,
        ph: 'Saves beaches; preserves biodiversity; conserves raw materials; improves sustainability',
      },
    ],
  },

  // ─── Q3: Citrus Drink pH Investigation (Crit B, 21 marks) ──────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Citrus drink acidity — variables, research question, pH data analysis, indicator colours',
    marks: 21,
    stem: 'The increase in global travel has an impact on the health and well-being of individuals. Michelle, Yuri and Pedro have recently moved to a tropical country and enjoy citrus-based drinks. Citrus drinks are acidic and can increase the acidity in the stomach, causing heartburn and tooth enamel erosion. The friends investigated which citrus drink is most acidic. Using each of the following drinks — lemon soda, orange juice, grapefruit juice, lime cordial, pineapple juice — they poured 100 cm³ into a 250 cm³ beaker, then used a pH probe to measure the pH. The pH readings were: lemon soda 2.8, orange juice 3.2, grapefruit juice 3.0, lime cordial 2.3, pineapple juice 3.7.',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-09.png',
      '/images/papers/chemistry-nov-2018/page-10.png',
      '/images/papers/chemistry-nov-2018/page-11.png',
      '/images/papers/chemistry-nov-2018/page-12.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: type of citrus drink; DV: pH; CV: volume of drink, probe calibration, temperature',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does the type of citrus drink affect the pH of the drink?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the citrus drink and pH that could cause the most severe heartburn. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Lime cordial pH 2.3; lowest pH / highest acidity; lower pH = more [H⁺] ions in stomach',
        figImages: ['/images/papers/chemistry-nov-2018/page-13.png'],
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of citrus drink; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test carbonated vs non-carbonated versions / different concentrations / temperature effect',
      },
      {
        label: 'f',
        text: 'The data in the table is from one trial for each drink. **Outline** the benefits of carrying out more than one trial for each experiment.',
        marks: 2,
        ph: 'Calculate the mean; reduces experimental errors; increases accuracy and reliability',
      },
      {
        label: 'g',
        text: 'Instead of using a pH probe, indicators can be used to identify the pH of solutions. Cherry juice can be used as an indicator — its colour changes for different pH values as shown in the scale. Cherry juice was added to four beakers containing different clear, odourless liquids. Use information from the scale to **select** the colour that would be seen in each beaker.',
        marks: 4,
        ph: 'pH 3.5=Red; pH 8.5=Green; pH 5.0=Orange; pH 7.0=Purple',
        figImages: [
          '/images/papers/chemistry-nov-2018/page-15.png',
          '/images/papers/chemistry-nov-2018/page-16.png',
        ],
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 3.5', 'Beaker pH 8.5', 'Beaker pH 5.0', 'Beaker pH 7.0'],
        widgetOptions: ['Red', 'Orange', 'Purple', 'Green'],
      },
      {
        label: 'h',
        text: '**State** why cherry juice cannot be used to determine the exact pH of citrus drinks.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in coloured citrus drinks',
      },
    ],
  },

  // ─── Q4: Capsaicin in Chilli Peppers — V1 variants (Crit C, 9 marks) ───────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Capsaicin — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    marks: 9,
    stem: 'A compound called capsaicin gives the spicy flavour to chilli peppers. Scientists say there may be some evidence that capsaicin triggers stomach acid production. Chromatography was used to measure the capsaicin content in four different chilli peppers. Michelle, Yuri and Pedro want to find out which of the following is the spiciest: Carolina Reaper, Ghost pepper (Bhut jolokia), Jalapeño pepper, Bell pepper. Before getting the results, Michelle predicted: "The Ghost pepper will have the most capsaicin as it is the most famous hot pepper worldwide."',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-17.png',
      '/images/papers/chemistry-nov-2018/page-18.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the chilli peppers in order of how spicy they are, from most spicy (top) to least spicy (bottom).',
        marks: 2,
        ph: 'Most→Least: Carolina Reaper, Ghost pepper, Jalapeño, Bell pepper',
        widget: 'match_drag_drop',
        widgetItems: ['Bell pepper', 'Carolina Reaper', 'Ghost pepper', 'Jalapeño pepper'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Michelle\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows Carolina Reaper has most capsaicin; prediction NOT valid as Ghost pepper is second',
        figImages: ['/images/papers/chemistry-nov-2018/page-19.png'],
      },
      {
        label: 'c',
        text: 'The Scoville scale is a measurement of the spiciness of foods. The following structures show two commonly occurring members of the capsaicin family. The first structure has a Scoville heat unit of 16 000 000 and the second has 9 100 000. **Identify** two differences in the structures that cause this difference in Scoville heat measurement.',
        marks: 2,
        ph: 'C=C double bond (alkene) in compound 1; longer carbon chain in compound 1',
        figImages: ['/images/papers/chemistry-nov-2018/page-19.png'],
      },
      {
        label: 'd',
        text: 'Capsaicin has a melting point of 65 °C and a boiling point of 210 °C. In the liquid state, capsaicin evaporates easily. Capsaicin can be found in the Carolina Reaper. There are several ways in which Carolina Reaper peppers can be added to food: raw; steamed at 100 °C; deep-fried in oil (oil reaches temperatures above 210 °C). **Formulate** a hypothesis to identify which method of food preparation will produce food with the highest spiciness when using the same mass of Carolina Reaper.',
        marks: 3,
        ph: 'If raw (lowest temperature) → highest spiciness; capsaicin will not evaporate or be destroyed',
      },
    ],
  },

  // ─── Q5: Heartburn Remedy Design — V1 variants (Crit B, 19 marks) ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Heartburn remedies — Crit B investigation design, neutralisation of metal carbonates',
    marks: 19,
    stem: 'There are many treatments that can be used to stop the pain of heartburn. Some of these treatments contain metal carbonates which neutralise the stomach acid. The reaction of metal carbonates with acids is: metal carbonate + acid → salt + water + carbon dioxide. The following heartburn remedies are available: Rennie tablets (calcium carbonate and magnesium carbonate), Activated charcoal powder, Kaolin clay powder, Baking soda (sodium bicarbonate, NaHCO₃). Michelle, Yuri and Pedro are interested to find out which heartburn remedy will neutralise the acid most quickly. You are provided with: 250 cm³ of 0.1 mol dm⁻³ aqueous hydrochloric acid; 50 cm³ beakers; Rennie tablets; activated charcoal powder; kaolin clay powder; baking soda; 25 cm³ 0.1 mol dm⁻³ HCl (aq).',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-20.png',
      '/images/papers/chemistry-nov-2018/page-21.png',
    ],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which heartburn remedy will neutralise the acid the most quickly. In your answer, you should include: an identification of the variables; a list of any additional equipment you will need; the method you will follow; details of how you will use your data to decide which treatment will neutralise the acid most quickly; a statement of any assumptions you have made; how you will ensure that your method is safe.',
        marks: 19,
        ph: 'Variables, equipment, method, repeats, safety with HCl, plan to compare neutralisation times',
      },
    ],
  },

  // ─── Q6: Food Choices and Carbon Footprint — pork meal (Crit D, 7 marks) ───
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — food supply chain, pork vs vegetable-based diet comparison',
    marks: 7,
    stem: 'A video gives some information about food choices, including information about vegetable-based and meat-based diets. Different foods have different carbon footprints. The table shows the carbon footprint for producing 1 kg of food or 4.2 kJ of food energy. A vegetable-based meal has an energy content of approximately 3000 kJ. A pork-based meal has an energy content of approximately 3000 kJ. The pork farming industry contributes significantly to global food security, providing livelihoods for many farmers, but also contributes to greenhouse gas emissions.',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-22.png',
      '/images/papers/chemistry-nov-2018/page-23.png',
      '/images/papers/chemistry-nov-2018/page-24.png',
      '/images/papers/chemistry-nov-2018/page-25.png',
      '/images/papers/chemistry-nov-2018/page-26.png',
    ],
    tasks: [
      {
        label: 'a',
        text: 'Complete the table using information from the bar chart. **Calculate** the carbon footprint for the pork-based meal to two significant figures.\n\n| Ingredient | Mass (kg) | Carbon footprint (kgCO₂e per kg) | Carbon footprint (kgCO₂e) |\n|---|---|---|---|\n| Pork | Read from chart | 7.6 | |\n| Potato | 0.3 | 2.9 | 0.87 |\n| Broccoli | 0.1 | 0.7 | 0.07 |\n| **Total** | | | |',
        marks: 4,
        ph: 'Pork mass ~0.8 kg from chart; CF pork = 0.8 × 7.6 = 6.08; total = 7.02 ≈ 7.0 kgCO₂e',
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two meals. Use data from the tables to support your answer.',
        marks: 3,
        ph: 'Pork-based ~3.7× higher CF than veg-based (~1.9 kgCO₂e); meat contributes more to climate change',
      },
    ],
  },

  // ─── Q7: Ethane Combustion + Landfill Biogas Crit D Essay (Crit D, 16 marks) ─
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Ethane combustion — balancing equation, landfill biogas capture, ethical and environmental evaluation',
    marks: 16,
    stem: 'Ethane (C₂H₆) is a hydrocarbon gas that is produced during natural gas processing and refinery operations. Landfill sites generate biogas — a mixture of methane and ethane — from the anaerobic decomposition of organic waste. Research is being done into capturing biogas from landfill sites for use as fuel instead of allowing it to escape into the atmosphere. This method of biogas capture has advantages and disadvantages. The economic impacts, environmental impacts, and ethical aspects of landfill biogas capture need to be considered.',
    figImages: ['/images/papers/chemistry-nov-2018/page-27.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** numbers to balance the chemical equation for the complete combustion of ethane:\n\n[_] C₂H₆(g) + [_] O₂(g) → [_] CO₂(g) + [_] H₂O(g)',
        marks: 2,
        ph: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O; reactants correct (2,7); products correct (4,6)',
      },
      {
        label: 'b',
        text: '**Discuss** and **evaluate** the benefits of capturing biogas from landfill sites and burning it as a fuel rather than allowing it to escape into the atmosphere. In your answer you should include: the advantages and disadvantages of using landfill biogas as a fuel; the economic impacts of landfill biogas capture; the environmental advantages and disadvantages of this approach; the ethical aspects of using landfill sites for energy recovery; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage: advantages (reduces GHG release, energy recovery, renewable), disadvantages (infrastructure cost, leakage risk), economic/environmental/ethical + appraisal',
      },
    ],
  },
]
