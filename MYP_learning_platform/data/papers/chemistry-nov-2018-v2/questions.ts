import type { PaperMeta } from '@/data/papers/biology-may-2024/questions'
import type { Question } from '@/lib/types'

export const paperMeta: PaperMeta = {
  id: 'chemistry-nov-2018-v2',
  subject: 'Chemistry',
  session: 'November',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'],
}

export const questions: Question[] = [
  // ─── Q1: Manganese (Crit A, 11 marks) ─────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Manganese — periodic table, atomic structure, bonding, compound nomenclature',
    marks: 11,
    stem: 'Manganese (Mn) has the atomic number 25 and the mass number 55. It is one of the transition metals and is widely used in steel production, dry-cell batteries, and as a pigment in ancient cave paintings. The main compounds used in industrial processes are MnO₂ (manganese(IV) oxide), MnO and MnCO₃. The permanganate ion MnO₄⁻ gives a distinctive purple colour to solutions of potassium permanganate.',
    tasks: [
      {
        label: 'a',
        text: 'Use the periodic table to **state** which period manganese is in.',
        marks: 1,
        ph: 'Period 4',
        widget: 'radio_select',
        widgetOptions: ['1', '2', '3', '4'],
      },
      {
        label: 'b',
        text: '**Select** the block of the periodic table in which manganese appears.',
        marks: 1,
        ph: 'Transition metals',
        widget: 'radio_select',
        widgetOptions: ['Alkali metals', 'Transition metals', 'Halogens', 'Noble gases', 'Lanthanides'],
      },
      {
        label: 'c',
        text: '**Identify** two properties that manganese shares with other elements in the same block of the periodic table.',
        marks: 2,
        ph: 'Variable oxidation state; forms coloured compounds; any metallic property',
      },
      {
        label: 'd',
        text: 'Manganese can form Mn²⁺ ions. **State** the number of protons, neutrons and electrons in a Mn²⁺ ion formed from manganese-55.',
        marks: 3,
        ph: 'Protons 25; Neutrons 30; Electrons 23',
      },
      {
        label: 'e',
        text: 'Manganese(II) chloride is used in the preparation of other manganese compounds. **State** the formula for manganese(II) chloride and **state** the type of bonding found in this compound.',
        marks: 2,
        ph: 'MnCl₂; ionic bonding',
        widget: 'radio_select',
        widgetOptions: ['ionic', 'covalent', 'metallic', 'hydrogen'],
      },
      {
        label: 'f',
        text: '**State** the names for the compounds MnO and MnCO₃.',
        marks: 2,
        ph: 'MnO: manganese(II) oxide; MnCO₃: manganese(II) carbonate',
      },
    ],
  },

  // ─── Q2: Glass Recycling — TiO₂ in Byzantine mosaic glass (Crit A, 17 marks) ─
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Glass recycling — separation, TiO₂ formula, molar mass, moles, SiO₂ bonding',
    marks: 17,
    stem: 'Glass recycling plants receive mixed waste containing glass bottles, steel lids, and plastic labels. Before the glass is recycled it has to be processed to remove unwanted components. Chemists analyse ancient glass to trace its historical origins. The following table compares the percentage chemical composition by mass of four types of glass: Laboratory glass, Venetian glass, Optical crystal glass, and Ancient Byzantine mosaic glass. A compound called TiO₂ (titania) appears only in ancient Byzantine mosaic glass. Silicon oxide is the major component in sand and glass.',
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
        text: 'Using the data in the table, **identify** the chemical formula of the compound which is only present in ancient Byzantine mosaic glass.',
        marks: 1,
        ph: 'TiO₂',
      },
      {
        label: 'c',
        text: '**Calculate** the molar mass of the compound you identified in part (b). State the unit.',
        marks: 3,
        ph: 'Ti=48, O=16; Mr = 48 + 2×16 = 80 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'An ancient Byzantine glass mosaic tile has a mass of 500 g. The tile contains 0.6% by mass of the compound from part (b). **Calculate** the number of moles of that compound in the tile. Give your answer to three significant figures.',
        marks: 3,
        ph: 'mass = 0.6/100 × 500 = 3.0 g; n = 3.0/80 = 0.0375 mol = 3.75 × 10⁻² mol',
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

  // ─── Q3: Carbonated Drink pH Investigation (Crit B, 21 marks) ─────────────
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Carbonated drink acidity — variables, research question, pH data analysis, indicator colours',
    marks: 21,
    stem: 'The increase in global travel has an impact on the health and well-being of individuals. Michelle, Yuri and Pedro have recently moved to a new country and enjoy carbonated drinks. Carbonated drinks are acidic due to dissolved carbon dioxide and added acids. Carbonated drinks can increase the acidity in the stomach, causing heartburn and tooth enamel erosion. The friends investigated which carbonated drink is most acidic. Using each of the following drinks — cola, lemon-lime soda, ginger beer, tonic water, sparkling water — they poured 100 cm³ into a 250 cm³ beaker, then used a pH probe to measure the pH. The pH readings were: cola 2.5, lemon-lime soda 2.7, ginger beer 2.9, tonic water 3.0, sparkling water 4.2.',
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
        ph: 'IV: type of carbonated drink; DV: pH; CV: volume of drink, probe calibration, temperature',
      },
      {
        label: 'b',
        text: '**State** the research question that this experiment would investigate.',
        marks: 1,
        ph: 'How does the type of carbonated drink affect the pH of the drink?',
      },
      {
        label: 'c',
        text: 'Using data in the table, **identify** the carbonated drink and pH that could cause the most severe heartburn. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Cola pH 2.5; lowest pH / highest acidity; lower pH = more [H⁺] ions in stomach',
        figImages: ['/images/papers/chemistry-nov-2018/page-13.png'],
      },
      {
        label: 'd',
        text: '**Present** the data in a graph. You need to give your graph an appropriate title and label the axes.',
        marks: 5,
        ph: 'Bar chart; title links DV with IV; x-axis type of carbonated drink; y-axis pH',
      },
      {
        label: 'e',
        text: '**Suggest** an extension for this investigation.',
        marks: 1,
        ph: 'Test flat vs carbonated versions of same drink / different temperatures / different brands',
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
        ph: 'pH 2.8=Red; pH 9.0=Green; pH 6.0=Purple; pH 4.5=Orange',
        figImages: [
          '/images/papers/chemistry-nov-2018/page-15.png',
          '/images/papers/chemistry-nov-2018/page-16.png',
        ],
        widget: 'inline_dropdown_select',
        widgetItems: ['Beaker pH 2.8', 'Beaker pH 9.0', 'Beaker pH 6.0', 'Beaker pH 4.5'],
        widgetOptions: ['Red', 'Orange', 'Purple', 'Green'],
      },
      {
        label: 'h',
        text: '**State** why cherry juice cannot be used to determine the exact pH of carbonated drinks.',
        marks: 1,
        ph: 'Indicator gives a range of pH / colour change would not be visible in dark carbonated drinks',
      },
    ],
  },

  // ─── Q4: Capsaicin — V2 variants (Crit C, 9 marks) ────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Capsaicin — data analysis, hypothesis validity, molecular structures, hypothesis formulation',
    marks: 9,
    stem: 'A compound called capsaicin gives the spicy flavour to chilli peppers. Scientists say there may be some evidence that capsaicin triggers stomach acid production. Chromatography was used to measure the capsaicin content in four different chilli peppers. Michelle, Yuri and Pedro want to find out which of the following is the spiciest: Trinidad Moruga Scorpion, Habanero pepper, Cayenne pepper, Pasilla pepper. Before getting the results, Michelle predicted: "The Cayenne pepper will have the most capsaicin as it is the most commonly used pepper in hot sauce."',
    figImages: [
      '/images/papers/chemistry-nov-2018/page-17.png',
      '/images/papers/chemistry-nov-2018/page-18.png',
    ],
    tasks: [
      {
        label: 'a',
        text: '**Analyse** the graph and put the chilli peppers in order of how spicy they are, from most spicy (top) to least spicy (bottom).',
        marks: 2,
        ph: 'Most→Least: Trinidad Moruga Scorpion, Habanero, Cayenne, Pasilla',
        widget: 'match_drag_drop',
        widgetItems: ['Cayenne pepper', 'Habanero pepper', 'Pasilla pepper', 'Trinidad Moruga Scorpion'],
      },
      {
        label: 'b',
        text: 'Use the data from the graph to **comment** on the validity of Michelle\'s prediction. **Justify** your answer.',
        marks: 2,
        ph: 'Data shows Trinidad Moruga Scorpion has most capsaicin; prediction NOT valid — Cayenne is third',
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
        text: 'Capsaicin has a melting point of 65 °C and a boiling point of 210 °C. In the liquid state, capsaicin evaporates easily. Capsaicin can be found in Habanero peppers. There are several ways in which Habanero peppers can be added to food: raw; simmered in a sauce at 90 °C; stir-fried in oil (oil reaches temperatures above 210 °C). **Formulate** a hypothesis to identify which method of food preparation will produce food with the highest spiciness when using the same mass of Habanero pepper.',
        marks: 3,
        ph: 'If raw (lowest temperature) → highest spiciness; capsaicin will not evaporate or be destroyed',
      },
    ],
  },

  // ─── Q5: Heartburn Remedy Design — V2 variants (Crit B, 19 marks) ──────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Heartburn remedies — Crit B investigation design, neutralisation of antacids',
    marks: 19,
    stem: 'There are many treatments that can be used to stop the pain of heartburn. Some of these treatments contain metal hydroxides and carbonates which neutralise the stomach acid. The reaction of metal carbonates with acids is: metal carbonate + acid → salt + water + carbon dioxide. The following heartburn remedies are available: Milk of magnesia (magnesium hydroxide, Mg(OH)₂), Calcium carbonate tablets (CaCO₃), Alka-Seltzer tablets (sodium bicarbonate + citric acid), Dolomite powder (calcium magnesium carbonate). Michelle, Yuri and Pedro are interested to find out which heartburn remedy will neutralise the acid most quickly. You are provided with: 250 cm³ of 0.1 mol dm⁻³ aqueous hydrochloric acid; 50 cm³ beakers; milk of magnesia; calcium carbonate tablets; Alka-Seltzer tablets; dolomite powder; 25 cm³ 0.1 mol dm⁻³ HCl (aq).',
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

  // ─── Q6: Food Choices and Carbon Footprint — chicken meal (Crit D, 7 marks) ─
  {
    id: 6,
    crit: 'D',
    type: 'extended',
    topic: 'Carbon footprint — food supply chain, chicken vs vegetable-based diet comparison',
    marks: 7,
    stem: 'A video gives some information about food choices, including information about vegetable-based and meat-based diets. Different foods have different carbon footprints. The table shows the carbon footprint for producing 1 kg of food or 4.2 kJ of food energy. A vegetable-based meal has an energy content of approximately 3000 kJ. A chicken-based meal has an energy content of approximately 3000 kJ. The poultry farming industry provides affordable protein to billions of people worldwide but contributes to greenhouse gas emissions through feed production and waste.',
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
        text: 'Complete the table using information from the bar chart. **Calculate** the carbon footprint for the chicken-based meal to two significant figures.\n\n| Ingredient | Mass (kg) | Carbon footprint (kgCO₂e per kg) | Carbon footprint (kgCO₂e) |\n|---|---|---|---|\n| Chicken | Read from chart | 6.9 | |\n| Rice | 0.2 | 2.7 | 0.54 |\n| Tomato | 0.2 | 1.1 | 0.22 |\n| **Total** | | | |',
        marks: 4,
        ph: 'Chicken mass ~0.6 kg from chart; CF chicken = 0.6 × 6.9 = 4.14; total = 4.90 ≈ 4.9 kgCO₂e',
      },
      {
        label: 'b',
        text: '**Outline** the environmental impact of the two meals. Use data from the tables to support your answer.',
        marks: 3,
        ph: 'Chicken-based ~2.6× higher CF than veg-based (~1.9 kgCO₂e); meat contributes more to climate change',
      },
    ],
  },

  // ─── Q7: Ethanol Combustion + Biomass Burning Crit D Essay (Crit D, 16 marks) ─
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Ethanol combustion — balancing equation, biomass burning for energy, ethical and environmental evaluation',
    marks: 16,
    stem: 'Ethanol (C₂H₅OH) is a renewable fuel produced by fermenting sugars from crops such as sugarcane and maize. Burning wood pellets and other biomass materials (such as crop residues) for household heating is increasingly promoted as a low-carbon alternative to fossil fuels. This method of energy production has advantages and disadvantages. The economic impacts, environmental impacts, and ethical aspects of biomass burning need to be considered.',
    figImages: ['/images/papers/chemistry-nov-2018/page-27.png'],
    tasks: [
      {
        label: 'a',
        text: '**Select** numbers to balance the chemical equation for the complete combustion of ethanol:\n\n[_] C₂H₅OH(l) + [_] O₂(g) → [_] CO₂(g) + [_] H₂O(g)',
        marks: 2,
        ph: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O; reactants correct (1,3); products correct (2,3)',
      },
      {
        label: 'b',
        text: '**Discuss** and **evaluate** the benefits of burning biomass (such as wood pellets and crop residues) for household heating instead of using fossil fuels. In your answer you should include: the advantages and disadvantages of intensive biomass farming; the economic impacts of biomass energy; the environmental advantages and disadvantages of burning biomass; the ethical aspects of using farmland for energy crops instead of food; a concluding appraisal.',
        marks: 14,
        ph: 'Balanced coverage: advantages (carbon neutral claim, renewable, energy security), disadvantages (land use, deforestation, air pollution), economic/environmental/ethical + appraisal',
      },
    ],
  },
]
