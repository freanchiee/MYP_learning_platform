import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2024-v1',
  subject: 'Chemistry',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (10 marks, Crit A) — Combustion & flower chromatography ─────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, Lewis structures & chromatography — camping gas and flower pigments',
    marks: 10,
    stem: 'Camping gas is a mixture of butane and propane. When butane burns completely in oxygen, it produces carbon dioxide and water. The word equation for the complete combustion of butane is: butane + oxygen → carbon dioxide + water.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct coefficients to balance the chemical equation for the complete combustion of butane:\n\n[?]C₄H₁₀ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O (reactants correct [1]; products correct [1])',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      },
      {
        label: 'b',
        text: 'Banana aroma is partly caused by the compound isoamyl acetate. The structure of isoamyl acetate contains a characteristic functional group. **Identify** the functional group present in isoamyl acetate that is circled.',
        marks: 1,
        ph: 'Ester / ester group (–COO–)',
      },
      {
        label: 'c',
        text: 'Chlorine gas (Cl₂) is used as a disinfectant. **Select** the Lewis structure (dot and cross) for Cl₂.',
        marks: 1,
        ph: 'Cl₂ has a single covalent bond with 3 lone pairs on each Cl — select B',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: 'Flower petals produce coloured pigments. The technique of chromatography can be used to separate these pigments.\n\n**Select** the term that best describes a flower petal extract used in chromatography.',
        marks: 1,
        ph: 'Flower petal extract contains many different pigments dissolved together — a mixture',
        widget: 'radio_select',
        widgetOptions: ['An element', 'A compound', 'A mixture', 'An allotrope'],
      },
      {
        label: 'e',
        text: '**Identify** the organic pigments corresponding to each band in the chromatography column.\n\nBand 1: [top]\nBand 2: [middle]\nBand 3: [bottom near petal stain]',
        marks: 2,
        ph: 'Band 1 = Anthocyanin C (highest Rf); Band 2 = Flavonoid B; Band 3 = Chlorophyll A (one correct [1]; all correct [2])',
      },
      {
        label: 'f',
        text: 'The Rf value is the ratio of the solute\'s distance travelled to the solvent\'s distance travelled.\n\nUsing the ruler in the diagram, **calculate** the Rf value for band 1.',
        marks: 3,
        ph: 'Solvent front from application point = 9.6 cm; Band 1 distance = 8.6 cm; Rf = 8.6/9.6 = 0.90 (±0.01)',
      },
    ],
  },

  // ── Q2 (9 marks, Crit A) — Baking soda, vinegar, pH ─────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'pH, acids, salts & molar mass — baking soda and vinegar',
    marks: 9,
    stem: 'Baking soda (sodium hydrogen carbonate, NaHCO₃) and vinegar (dilute acetic acid, CH₃COOH) are common household chemicals. When mixed, they react vigorously. Gardeners sometimes use vinegar to lower soil pH for acid-loving plants.',
    tasks: [
      {
        label: 'a',
        text: 'A student tests a sample of white vinegar with universal indicator.\n\n**Select** the pH reading that is most likely for white vinegar.',
        marks: 1,
        ph: 'Vinegar is a weak acid — pH 3',
        widget: 'radio_select',
        widgetOptions: ['3', '7', '9', '12'],
      },
      {
        label: 'b',
        text: 'Baking soda solution has pH = 9. The pH target for the acid-loving plant is pH = 7.\n\n**Outline** how you could adjust the pH of the baking soda solution to reach pH = 7.',
        marks: 2,
        ph: 'Decrease the pH / increase the acidity by adding vinegar / acetic acid / any dilute acid',
      },
      {
        label: 'c',
        text: 'Washing soda (sodium carbonate, Na₂CO₃) is closely related to baking soda. Using the periodic table, **calculate** the molar mass of sodium carbonate.',
        marks: 2,
        ph: 'M(Na₂CO₃) = (2×23) + 12 + (3×16) = 46 + 12 + 48 = 106 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'Sodium hydrogen carbonate reacts with hydrochloric acid (HCl) to produce a salt and two other products.\n\nNaHCO₃ + HCl → salt + product A + product B\n\n**Select** the other two products that are formed when sodium hydrogen carbonate reacts with hydrochloric acid.',
        marks: 2,
        ph: 'Products are H₂O and CO₂ (in either order)',
        widget: 'inline_dropdown_select',
        widgetItems: ['Product A', 'Product B'],
        widgetOptions: ['H₂O', 'CO₂', 'H₂', 'NaOH', 'Cl₂'],
      },
      {
        label: 'e',
        text: '**Determine** the formula of the salt that is produced when sodium hydrogen carbonate reacts with hydrochloric acid.',
        marks: 1,
        ph: 'NaCl (sodium chloride; correct subscripts required)',
      },
      {
        label: 'f',
        text: '**State** the pH of a solution of the salt produced in part (e).',
        marks: 1,
        ph: 'pH = 7 (NaCl is a neutral salt formed from strong acid + strong base)',
      },
    ],
  },

  // ── Q3 (9 marks, Crit A) — Ammonia synthesis, gas particles ─────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Balancing equations, particle model & diffusion — Haber process',
    marks: 9,
    stem: 'The Haber process is one of the most important chemical reactions in the world. It produces ammonia from nitrogen and hydrogen. Ammonia is used to make fertilisers, which help grow much of the world\'s food supply.\n\nHigh temperatures and pressures are used in the Haber process, which can cause gases such as ammonia to spread into the surrounding environment.',
    tasks: [
      {
        label: 'a',
        text: '**Write down** the balanced chemical equation for the formation of ammonia from nitrogen and hydrogen in the Haber process.',
        marks: 2,
        ph: 'N₂ + 3H₂ → 2NH₃ (reactants correct [1]; products correct [1])',
      },
      {
        label: 'b',
        text: 'In the box below, **draw** a diagram showing the arrangement of particles in a gas.',
        marks: 1,
        ph: 'Two or more particles randomly placed, not touching each other',
      },
      {
        label: 'c',
        text: '**Outline** how particles move in a gas.',
        marks: 2,
        ph: 'Random motion; high kinetic energy / high speed',
      },
      {
        label: 'd',
        text: 'Ammonia has a very strong smell. Even small leaks from the Haber process plant can be detected from a great distance away.\n\n**Explain** why the ammonia smell can spread over a large area even when there is no wind. You should use scientific terminology in your answer.',
        marks: 4,
        ph: 'Ammonia is a gas; gas particles spread/move/travel out; from area of high concentration to low concentration; this is diffusion',
      },
    ],
  },

  // ── Q4 (9 marks, Crit C/B/D) — Milk protein denaturation ─────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hypothesis, measurement & denaturation — milk protein and heat',
    marks: 9,
    stem: 'Milk contains several proteins, the main ones being casein and whey. These proteins are responsible for milk\'s white appearance and nutritional value. When heated, milk proteins denature and the milk becomes less cloudy.\n\nA special instrument called a turbidimeter measures the cloudiness (turbidity) of a liquid — giving a numeric reading. Higher turbidity readings mean the liquid is cloudier.',
    tasks: [
      {
        label: 'a',
        text: 'Two students are investigating the cloudiness of heated milk. One student uses a turbidimeter; the other holds the test tube up to the light and estimates cloudiness by eye.\n\n**Justify** which method gives a better measurement of milk cloudiness.',
        marks: 1,
        ph: 'Turbidimeter — gives quantitative/numerical data OR more accurate/precise OR removes human error / subjective judgement',
      },
      {
        label: 'b',
        text: 'A student wants to investigate how the concentration of casein affects the temperature at which milk denatures. Using the information above, **formulate** the student\'s hypothesis.',
        marks: 3,
        ph: 'If the concentration of casein is increased; Then the milk will denature at a lower/higher temperature / turbidity will change more; Because casein concentration changes the protein structure / affects the stability of the protein',
      },
      {
        label: 'c',
        text: 'A student separated full-fat milk into casein and whey fractions, heated each one and measured the temperature when the protein became denatured. The results are shown below.\n\n| | Starting temperature / °C | Temperature at which protein denatures / °C |\n|---|---|---|\n| Casein | 20 | 82 |\n| Whey | 20 | [blank] |\n\n**Measure** the temperature at which the whey protein becomes denatured. Add your value to the table.',
        marks: 1,
        ph: 'Accept any single value in the range 70–78 °C',
      },
      {
        label: 'd',
        text: 'The diagram below shows two different setups for measuring the temperature of denaturing milk proteins.\n\n**Select** which setup would produce the most valid measurement of the temperature at which the proteins denature. **Justify** your answer.',
        marks: 1,
        ph: 'Method A — thermometer is measuring where the milk protein is (directly in the protein fraction, not only in the water bath)',
        widget: 'radio_select',
        widgetOptions: ['Method A', 'Method B'],
      },
      {
        label: 'e',
        text: '**Predict** the temperature at which a mixture of casein and whey proteins would denature. **Justify** your answer.',
        marks: 3,
        ph: 'Accept range 70–78 °C; unit °C; because that is the maximum temperature at which the individual protein components denatured / whey denatures first since it has a lower denaturation temperature',
      },
    ],
  },

  // ── Q5 (8 marks, Crit B/C) — Kombucha fermentation ──────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Kombucha fermentation investigation — type of tea and pH',
    marks: 8,
    stem: 'Kombucha is a fermented drink made by adding a SCOBY (symbiotic culture of bacteria and yeast) to sweetened tea. During fermentation, the bacteria and yeast produce acids, which lower the pH of the drink. A student has decided to investigate how the type of tea used affects the pH of the final kombucha.\n\nThey record the following data after 7 days of fermentation:\n\n| Tea type | Starting pH of tea | Final pH of kombucha | Acidity score (taste panel) |\n|---|---|---|---|\n| Green tea | 7.2 | 3.2 | 8 |\n| Black tea | 7.0 | pH meter failure | 6 |\n| White tea | 7.1 | 3.6 | 7 |',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: type of tea; DV: pH of kombucha OR acidity score; CVs x2: volume of tea, mass of SCOBY, amount of sugar, fermentation temperature, fermentation time',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable research question for this investigation.',
        marks: 2,
        ph: 'How does the type of tea affect the final pH of the kombucha / acidity of the fermented drink?',
      },
      {
        label: 'c',
        text: 'The starting pH of each tea was approximately 7. **State** what happens to the pH during kombucha fermentation.',
        marks: 1,
        ph: 'The pH decreases / the drink becomes more acidic (bacteria produce acids during fermentation)',
      },
      {
        label: 'd',
        text: 'The student was surprised to find that there was no pH reading for black tea kombucha. **Suggest** an improvement to the method to increase the validity of the data.',
        marks: 1,
        ph: 'Use a new / calibrated pH meter OR use universal indicator paper as a backup measurement',
      },
    ],
  },

  // ── Q6 (14 marks, Crit C) — Vitamin C in frozen vs fresh strawberries ─────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Criterion C: Data processing & graph — vitamin C in strawberry products',
    marks: 14,
    stem: 'Vitamin C (ascorbic acid) is an essential nutrient that the body cannot produce on its own. Strawberries are an excellent natural source of vitamin C. However, the vitamin C content changes depending on how the strawberries are processed and stored. In the presence of heat or oxygen, vitamin C oxidises and breaks down.',
    tasks: [
      {
        label: 'a',
        text: 'The table below shows the vitamin C concentration of different strawberry products:\n\n| Strawberry product | Vitamin C concentration / mg 100g⁻¹ |\n|---|---|\n| Fresh strawberries | 59 |\n| Frozen strawberries | 48 |\n| Strawberry jam | 12 |\n| Strawberry yogurt | 21 |\n| Freeze-dried strawberries | 53 |\n\n**Present** this data in a graph.',
        marks: 5,
        ph: 'Title linking vit C and product type; x-axis = product type; y-axis = vit C concentration; correct scale from 0; all values plotted correctly (bar chart)',
      },
      {
        label: 'b',
        text: 'A student measured the vitamin C concentration in three strawberry juices stored at 4°C over 21 days:\n- fresh-pressed strawberry juice\n- juice heated to 75°C (pasteurised)\n- juice stored in a nitrogen (N₂) atmosphere (no oxygen)\n\nUsing the graph of vitamin C concentration over 21 days, **identify** which juice has the lowest vitamin C concentration at the start of the investigation. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Heat-treated (pasteurised) juice; vitamin C is broken down at high temperatures; vitamin C is oxidised / denatured by heat',
      },
      {
        label: 'c',
        text: 'Using the graph from part (b), **calculate** the rate of change in vitamin C concentration for the N₂-atmosphere strawberry juice over the 21-day period.',
        marks: 2,
        ph: 'Change = initial − final ≈ 320 − 298 = 22 mg 100g⁻¹; rate = 22/21 = 1.05 mg 100g⁻¹ day⁻¹ (accept 0.85–1.25)',
      },
      {
        label: 'd',
        text: 'A student made the following hypothesis:\n\n"If a whole strawberry is left for several weeks, the vitamin C concentration will decrease because the vitamin C will be oxidised."\n\nUsing the graph from part (b), **evaluate** the validity of this hypothesis.',
        marks: 4,
        ph: 'The vitamin C will not be oxidised as much; because the juice/pulp inside a whole strawberry is not exposed to oxygen / lower exposure to oxygen; due to the protective outer layer of the fruit skin; therefore the hypothesis is invalid',
      },
    ],
  },

  // ── Q7 (16 marks, Crit B) — Packaging film degradation design ────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — packaging film degradation in soil',
    marks: 16,
    stem: 'Environmental pollution from plastic packaging is a global problem. Scientists are investigating biodegradable packaging films made from different plant-based materials. A research company has developed four types of packaging film:\n- conventional plastic (polyethylene)\n- cornstarch-based film\n- cassava-based film\n- seaweed-based film\n\n**Design** an investigation to determine which packaging film degrades fastest when buried in soil. You are provided with standard laboratory equipment, pre-weighed samples of each film and a sample of standard garden soil.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine which packaging film degrades fastest when buried in soil. You are provided with standard laboratory equipment, pre-weighed samples of each film and a sample of standard garden soil.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
        marks: 16,
        ph: 'IV: type of film; DV: mass loss/change; CVs: mass of soil, depth of burial, temperature, time; equipment; method with 4 film types + control, 3 repeats, calculate mean mass loss',
      },
    ],
  },

  // ── Q8 (8 marks, Crit D/C) — River salinity and fish aquaculture ─────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Electrical conductivity, salinity & fish yield — aquaculture water quality',
    marks: 8,
    stem: 'Global demand for fish protein is growing rapidly as human populations increase. Many countries have turned to aquaculture (fish farming) to supplement wild fisheries. The salinity of the water in which fish are farmed is critical — it must fall within the tolerance range of the species being farmed. Salinity in water is caused by dissolved salts such as sodium chloride, which can be measured using electrical conductivity.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** why electrical conductivity can be used to determine the salt content of water.',
        marks: 2,
        ph: 'Na⁺ and Cl⁻ are charged particles; ions are mobile when dissolved in water / ions can conduct electricity',
      },
      {
        label: 'b',
        text: 'The table below shows electrical conductivity data for water from four different aquaculture sites.\n\n| Location | Amazon delta | Nile estuary | Baltic Sea | Mediterranean Sea |\n|---|---|---|---|---|\n| Electrical conductivity / mS cm⁻¹ | 0.18 | 0.52 | 8.3 | 52.4 |\n| Dissolved salt / mg L⁻¹ | 120 | 380 | 6200 | 38 000 |\n\nUsing the information in the table, **identify** the location of water with the highest salinity. **Justify** your answer.',
        marks: 2,
        ph: 'Mediterranean Sea; highest electrical conductivity OR highest dissolved salt concentration',
      },
      {
        label: 'c',
        text: 'The salinity of water affects the yield of farmed tilapia. The graph shows the percentage yield of tilapia relative to fresh water conditions at different salt concentrations.\n\n**Determine** the optimum concentration of salt for maximum tilapia yield.',
        marks: 1,
        ph: '0.8 ±0.15 mmol dm⁻³ (read from graph at maximum of tilapia curve)',
      },
      {
        label: 'd',
        text: '**Compare** how salinity affects the percentage yield of fish species A and fish species B. You should include data from the graph in your answer.',
        marks: 3,
        ph: 'Species A: yield decreases sharply above 0.5 mmol dm⁻³; Species B: yield decreases more gradually / starts dropping at higher concentration (1.2 mmol dm⁻³); Species B tolerates higher salinity than Species A',
      },
    ],
  },

  // ── Q9 (17 marks, Crit D) — Atmospheric water generation ─────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Atmospheric water generation — fog collection systems',
    marks: 17,
    stem: 'In many arid regions of the world, fresh water from rivers, lakes, and underground aquifers is very scarce. However, fog — which is composed of tiny water droplets suspended in the air — is common in certain coastal and mountainous regions. Atmospheric water generation (AWG) is the process of collecting water from atmospheric moisture such as fog, dew, or humid air.\n\nThree main types of atmospheric water generation have been developed: fog-net collection (passive), refrigeration-based condensation (active), and desiccant-based absorption. The data panels below describe these three approaches.',
    tasks: [
      {
        label: 'a',
        text: 'Use the data in both tabs to **identify** the region with the greatest need for atmospheric water generation and **justify** why this is the case.',
        marks: 3,
        ph: 'Sub-Saharan Africa / coastal North Africa / coastal Chile and Peru; limited or no surface/groundwater; high frequency of coastal fog / arid climate; large population needing water',
      },
      {
        label: 'b',
        text: 'There are three systems used for atmospheric water generation: fog-net collection, refrigeration-based condensation and desiccant-based absorption.\n\nUsing the information provided and your wider MYP knowledge, **discuss** and **evaluate** the systems available for atmospheric water generation. In your answer you should include:\n- a comparison of the efficiencies of the three systems\n- the economic impacts of the three systems\n- the environmental impacts of the three systems\n- an appraisal of the three systems.',
        marks: 14,
        ph: 'Efficiency: fog-net passive/no energy; condensation requires electricity; desiccant moderate energy; Economy: fog-net cheap to build/maintain; condensation expensive; desiccant moderate; Environment: condensation CO₂ emissions; fog-net minimal impact; desiccant moderate; Appraisal with evidence',
      },
    ],
  },
]
