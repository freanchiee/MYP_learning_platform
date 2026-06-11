import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Cobalt (Crit A, 11 marks) ─────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Cobalt — periodic table, atomic structure, bonding, compound nomenclature',
    topicCanonical: 'Periodic Table & Atomic Structure',
    topicGroup: 'Atomic Structure & Periodic Table',
    marks: 11,
    stem: 'Cobalt (Co) has the atomic number 27 and the mass number 59. It is one of the transition metals and has been used for centuries to produce vibrant blue pigments in pottery and glassware. The main compounds used to produce the blue colours are CoAl₂O₄ (cobalt(II) aluminate), CoO and CoCO₃. Cobalt(II) chloride paper turns pink in the presence of water and is used as a simple water test.',
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period cobalt is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which cobalt appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that cobalt shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Cobalt can form Co²⁺ ions. **State** the number of protons, neutrons and electrons in a Co²⁺ ion.',
        marks: 3,
        ph: 'Protons 27; Neutrons 32; Electrons 25',
      },
      {
        label: 'e',
        text: 'Cobalt(II) chloride paper is used to test for water. **State** the formula for cobalt(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'CoCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds CoO and CoCO₃.',
        marks: 2,
        ph: 'CoO: cobalt(II) oxide; CoCO₃: cobalt(II) carbonate',
      },
    ],
  },

  // ─── Q2: Glass Recycling and Silicon Chemistry (Crit A, 17 marks) ───────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Glass recycling — separation, Fe₂O₃ formula, molar mass, moles, SiO₂ bonding',
    topicCanonical: 'Moles & Stoichiometry',
    topicGroup: 'Quantitative Chemistry',
    marks: 17,
    stem: 'Several jars made of glass need to be recycled. The jars have steel lids and plastic labels. Before the jar is recycled into silicon oxides it has to be processed to remove unwanted components. The following table contains the percentage chemical composition by mass of the compounds used to make glass through the ages: SiO₂ (Silica), Na₂O (Soda), CaO (Lime), K₂O (Potash), Fe₂O₃ (Iron oxide), MgO (Magnesia), Al₂O₃ (Alumina), PbO (Lead oxide) — present in different amounts across Laboratory glass, Venetian glass, Optical crystal glass, and Ancient Roman glass. Silicon oxide is the major component in sand and glass.',
    figImages: ['/images/papers/chemistry-nov-2018/page-05.png', '/images/papers/chemistry-nov-2018/page-06.png', '/images/papers/chemistry-nov-2018/page-07.png'],
    tasks: [
      {
        label: 'a',
        text: 'Before the jar is recycled into silicon oxides it has to be processed to remove unwanted components. **Select** which property could be used to separate each component.',
        marks: 3,
        ph: 'Plastic: dissolves in organic solvent; Steel: magnetic; Glass: sinks in water',
        widget: 'inline_dropdown_select',
        widgetItems: ['Plastic label', 'Steel lid', 'Glass jar'],
        widgetOptions: ['dissolves in water', 'magnetic', 'dissolves in organic solvent', 'sinks in water'],
      },
      {
        label: 'b',
        text: 'Using the data in the table, **identify** the chemical formula of the compound which is only present in ancient Roman glass.',
        marks: 1,
        ph: 'Fe₂O₃',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Fe=56, O=16; Mr = 2×56 + 3×16 = 160 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'A Roman glass bottle has a mass of 100 g. **Calculate** the number of moles of the compound from part (b) that are present in the bottle. Give your answer to three significant figures.',
        marks: 3,
        ph: 'n = 0.5/160 = 3.13 × 10⁻³ mol (0.5% of 100 g = 0.5 g)',
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

  // ─── Q3: Fruit Juice pH Investigation (Crit B→C, 21 marks) ─────────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Fruit juice acidity — variables, research question, pH data analysis, indicator colours',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 21,
    stem: 'The increase in travel has an impact on the health and well-being of individuals as they move from place to place globally. Michelle, Yuri and Pedro have recently moved to a tropical country and love the fruit juices. Fruit juices are acidic outside the body and stay acidic when digested. Fruit juices can therefore increase the acidity in the stomach and cause heartburn. The friends are interested in finding out which fruit juice is most acidic and would lower the pH in the stomach the most. They used the following method: using each of the following fruits — apple, pear, grape, cranberry, tomato — put 100 g of cut-up fruit and 100 cm³ of water into a mixer and mix it for 1 minute. Pour 100 cm³ of each juice into a 250 cm³ beaker, then use a pH probe to measure the pH of each juice. The pH readings were: apple 3.5, pear 3.8, grape 2.8, cranberry 2.4, tomato 4.1.',
    figImages: ['/images/papers/chemistry-nov-2018/page-09.png', '/images/papers/chemistry-nov-2018/page-10.png', '/images/papers/chemistry-nov-2018/page-11.png', '/images/papers/chemistry-nov-2018/page-12.png'],
    tasks: [
      {
        label: 'a',
        text: '**State** the variables in this experiment: independent variable, dependent variable, and at least two control variables.',
        marks: 4,
        ph: 'IV: type of fruit; DV: pH; CV: mass of fruit, volume of water, time of mixing, equipment',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does type of fruit affect the pH of the juice?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the fruit juice and pH that could cause the most severe heartburn. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Cranberry pH 2.4; lowest pH / highest acidity; lower pH = more acid in stomach',
        figImages: ['/images/papers/chemistry-nov-2018/page-13.png'],
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of fruit juice; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test different varieties of fruits / length of blending time / ripeness of fruit',
      },
      {
        label: 'f',
        text: 'The data in the table is from one trial for each fruit. **Outline** the benefits of carrying out more than one trial for each experiment.',
        marks: 2,
        ph: 'Calculate the mean; reduces experimental errors; increases accuracy',
      },
      {
        label: 'g',
        text: 'Instead of using a pH probe, indicators can be used to identify the pH of solutions. Cherry juice can be used as an indicator — its colour changes for different pH values as shown in the scale. Cherry juice was added to four beakers containing different clear, odourless liquids. Use information from the scale to **select** the colour that would be seen in each beaker.',
        marks: 4,
        ph: 'pH 3.2=Red; pH 9.5=Green; pH 7.0=Purple; pH 3.6=Red',
        figImages: ['/images/papers/chemistry-nov-2018/page-15.png', '/images/papers/chemistry-nov-2018/page-16.png'],
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 3.2', 'Beaker pH 9.5', 'Beaker pH 7.0', 'Beaker pH 3.6'],
        widgetOptions: ['Red', 'Orange', 'Purple', 'Green'],
      },
      {
        label: 'h',
        text: '**State** why cherry juice cannot be used to determine the exact pH of fruit juices.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in coloured fruit juice',
      },
    ],
  },

  // ─── Q4: Capsaicin in Chilli Peppers (Crit C, 9 marks) ─────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Capsaicin — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    topicCanonical: 'Organic Chemistry & Fuels',
    topicGroup: 'Organic Chemistry',
    marks: 9,
    stem: 'A compound called capsaicin gives the spicy flavour to chilli peppers. Scientists say there may be some evidence that capsaicin triggers stomach acid production. Increase in stomach acid may cause heartburn. Chromatography was used to measure the capsaicin content in different chilli peppers. Michelle, Yuri and Pedro want to find out which of the following is the spiciest: Habanero pepper, Jalapeño pepper, Red chilli pepper, Cayenne pepper. They gave the foods to a professional lab to perform the test. Before they got the result, Michelle predicted the outcome: "The red chilli pepper will have the most capsaicin as it tastes spicier than the other peppers."',
    figImages: ['/images/papers/chemistry-nov-2018/page-17.png', '/images/papers/chemistry-nov-2018/page-18.png'],
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the chilli peppers in order of how spicy they are, from most spicy (top) to least spicy (bottom).',
        marks: 2,
        ph: 'Most→Least: Habanero, Cayenne, Jalapeño, Red chilli (based on capsaicin content)',
        widget: 'match_drag_drop',
        widgetItems: ['Cayenne pepper', 'Habanero pepper', 'Jalapeño pepper', 'Red chilli pepper'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Michelle\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows habanero has most capsaicin; prediction is NOT valid',
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
        text: 'Capsaicin has a melting point of 65 °C and a boiling point of 210 °C. In the liquid state, capsaicin evaporates easily. Capsaicin can be found in jalapeños. There are several ways in which jalapeños can be added to food: raw; boiled in a water-based sauce (water boils at 100 °C); fried in an oil-based sauce (oil boils/reaches temperatures above 210 °C in frying). **Formulate** a hypothesis to identify which method of food preparation will produce food with the highest spiciness when using the same mass of jalapeño.',
        marks: 3,
        ph: 'If temperature low / raw → highest spiciness; capsaicin will not evaporate/be destroyed',
      },
    ],
  },

  // ─── Q5: Heartburn Remedy Design (Crit B, 19 marks) ────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Heartburn remedies — Crit B investigation design, neutralisation of metal carbonates',
    topicCanonical: 'Acids, Bases & Salts',
    topicGroup: 'Chemical Reactions',
    marks: 19,
    stem: 'There are many treatments that can be used to stop the pain of heartburn. Some of these treatments contain metal carbonates which neutralise the stomach acid. The reaction of metal carbonates with acids is: metal carbonate + acid → salt + water + carbon dioxide. Gaviscon® and TUMS® are heartburn treatments that contain metal carbonates. Traditional Chinese medicine uses natural substances: hai piao xiao (cuttlefish bone) and wa leng zi (cockle shell). Michelle, Yuri and Pedro are interested to find out which heartburn remedy will neutralise the acid most quickly. The method they will use is shown. You are provided with: 250 cm³ of 0.1 mol dm⁻³ aqueous hydrochloric acid; 50 cm³ beakers; medication: Gaviscon® tablets, TUMS® powder; Chinese medicine natural substances: hai piao xiao (cuttlefish fish bone), wa leng zi (cockle shell); 25 cm³ 0.1 mol dm⁻³ HCl (aq).',
    figImages: ['/images/papers/chemistry-nov-2018/page-20.png', '/images/papers/chemistry-nov-2018/page-21.png'],
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to find out which heartburn remedy will neutralise the acid the most quickly. In your answer, you should include: an identification of the variables; a list of any additional equipment you will need; the method you will follow; details of how you will use your data to decide which treatment will neutralise the acid most quickly; a statement of any assumptions you have made; how you will ensure that your method is safe.',
        marks: 19,
        ph: 'Variables, equipment, method, repeats, safety with HCl, plan to compare neutralisation times',
      },
    ],
  },

  // ─── Q6: Food Choices and Carbon Footprint (Crit D, 7 marks) ────────────────
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — food supply chain, vegetable vs meat-based diet comparison',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 7,
    stem: 'A video gives some information about food choices, including information about vegetable-based and meat-based diets. The food supply chain includes processing, storage, shops, transport and waste. Different foods have different carbon footprints. The table shows the carbon footprint for producing 1 kg of food or 4.2 kJ of food energy. A vegetable-based meal has an energy content of approximately 3000 kJ. A meat-based meal has an energy content of approximately 3000 kJ. The meat farming industry contributes 40% of global agricultural gross domestic product, provides jobs for 1.3 billion people, but contributes 14% of the harmful greenhouse gas emissions.',
    figImages: ['/images/papers/chemistry-nov-2018/page-22.png', '/images/papers/chemistry-nov-2018/page-23.png', '/images/papers/chemistry-nov-2018/page-24.png', '/images/papers/chemistry-nov-2018/page-25.png', '/images/papers/chemistry-nov-2018/page-26.png'],
    tasks: [
      {
        label: 'a',
        text: 'Complete the table using information from the bar chart. **Calculate** the carbon footprint for the meat-based meal to two significant figures.',
        marks: 4,
        ph: 'Beef mass ~2.9 kg from graph; potato CF ~0.65–0.74; total = 11 kgCO₂e (2 sig figs)',
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two meals. Use data from the tables to support your answer.',
        marks: 3,
        ph: 'Meat-based has higher CF (~11 vs ~1.91 kgCO₂e); meat uses 11.32 kgCO₂e vs 1.91; data comparison',
      },
    ],
  },

  // ─── Q7: Methane Combustion + Crit D Essay (Crit D/A, 16 marks) ─────────────
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Methane — balancing combustion equation, cow methane capture, ethical and environmental evaluation',
    topicCanonical: 'Environmental Impact & Sustainability',
    topicGroup: 'Environmental Chemistry',
    marks: 16,
    stem: 'Methane, also known as natural gas, can be used as a fuel. The equation for the combustion of methane is shown below. Select numbers to balance the chemical equation: [_]CH₄(g) + [_]O₂(g) → [_]CO₂(g) + [_]H₂O(g). Cows produce methane as a by-product of digestion. Research is being done into capturing the methane emitted by cows for use as fuel. This method of methane capture has advantages and disadvantages. The advantages and disadvantages of intensive cattle farming and the economic impacts, environmental impacts, and ethical aspects of CH₄ capture need to be considered.',
    figImages: ['/images/papers/chemistry-nov-2018/page-27.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** numbers to balance the chemical equation for the combustion of methane: CH₄(g) + O₂(g) → CO₂(g) + H₂O(g)',
        marks: 2,
        ph: 'CH₄ + 2O₂ → CO₂ + 2H₂O; reactants correct (2 before O₂); products correct (2 before H₂O)',
      },
      {
        label: 'b',
        text: '**Discuss** and **evaluate** the benefits of capturing the methane emitted by cows. In your answer you should include: the advantages and disadvantages of intensive cattle farming; the economic impacts of intensive cattle farming; the environmental advantages and disadvantages of using methane collected from cows as a source of energy; the ethical aspects of using methane collected from cows as a source of energy; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage of advantages, disadvantages, economic, environmental, ethical + appraisal',
      },
    ],
  },
]
