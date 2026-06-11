import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'chemistry-may-2024-v2',
  subject: 'Chemistry',
  session: 'May',
  year: 2024,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1 (10 marks, Crit A) — Combustion & leaf pigment chromatography ───────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Combustion, Lewis structures & chromatography — natural gas and autumn leaf pigments',
    marks: 10,
    stem: 'Natural gas is mainly composed of ethane (C₂H₆). When ethane burns completely in oxygen, it produces carbon dioxide and water. The word equation for the complete combustion of ethane is: ethane + oxygen → carbon dioxide + water.',
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct coefficients to balance the chemical equation for the complete combustion of ethane:\n\n[?]C₂H₆ + [?]O₂ → [?]CO₂ + [?]H₂O',
        marks: 2,
        ph: '2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O (reactants correct [1]; products correct [1])',
        widget: 'fill_blank',
        widgetOptions: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      },
      {
        label: 'b',
        text: 'Vanilla flavour is partly caused by the compound vanillin. The structure of vanillin contains a characteristic functional group. **Identify** the functional group that is circled in vanillin.',
        marks: 1,
        ph: 'Aldehyde / aldehyde group (–CHO)',
      },
      {
        label: 'c',
        text: 'Water (H₂O) is produced by combustion. **Select** the Lewis structure (dot and cross) for H₂O.',
        marks: 1,
        ph: 'H₂O has two O–H single bonds with 2 lone pairs on O — select D',
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
      },
      {
        label: 'd',
        text: 'Autumn leaves produce many pigments. Chromatography is used to separate these pigments.\n\n**Select** the term that best describes an autumn leaf extract used in chromatography.',
        marks: 1,
        ph: 'An autumn leaf extract contains multiple dissolved pigments — a mixture',
        widget: 'radio_select',
        widgetOptions: ['A mixture', 'An element', 'A compound', 'An alloy'],
      },
      {
        label: 'e',
        text: '**Identify** the organic pigments corresponding to each band in the chromatography column.\n\nBand 1: [top]\nBand 2: [middle]\nBand 3: [bottom near leaf stain]',
        marks: 2,
        ph: 'Band 1 = Carotene C (highest Rf); Band 2 = Lutein B; Band 3 = Chlorophyll A (one correct [1]; all correct [2])',
      },
      {
        label: 'f',
        text: 'The Rf value is the ratio of the solute\'s distance travelled to the solvent\'s distance travelled.\n\nUsing the ruler in the diagram, **calculate** the Rf value for band 1.',
        marks: 3,
        ph: 'Solvent front from application point = 8.4 cm; Band 1 distance = 7.1 cm; Rf = 7.1/8.4 = 0.85 (±0.01)',
      },
    ],
  },

  // ── Q2 (9 marks, Crit A) — Limestone, acid rain, pH ─────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'pH, acids, salts & molar mass — acid rain and limestone buildings',
    marks: 9,
    stem: 'Acid rain is caused by the emission of sulfur dioxide and nitrogen dioxide from burning fossil fuels. These gases dissolve in rainwater to form dilute acids. Historic limestone buildings are damaged by acid rain, as the limestone (calcium carbonate, CaCO₃) reacts with the acidic rainwater.',
    tasks: [
      {
        label: 'a',
        text: 'A student tests a sample of acid rain with universal indicator.\n\n**Select** the pH reading that is most likely for acid rain.',
        marks: 1,
        ph: 'Acid rain is slightly acidic — pH 5',
        widget: 'radio_select',
        widgetOptions: ['2', '5', '9', '14'],
      },
      {
        label: 'b',
        text: 'Nitric acid (HNO₃) is a component of acid rain, with pH = 4. To protect a limestone statue, a conservator applies a neutralising solution. The conservator\'s goal is pH = 7.\n\n**Outline** how you could adjust the acidity of the HNO₃ solution to reach pH = 7.',
        marks: 2,
        ph: 'Decrease the acidity / increase the pH by adding a base or alkali such as NaOH / calcium hydroxide',
      },
      {
        label: 'c',
        text: 'Potassium carbonate (K₂CO₃) is a traditional stone preservative. Using the periodic table, **calculate** the molar mass of potassium carbonate.',
        marks: 2,
        ph: 'M(K₂CO₃) = (2×39) + 12 + (3×16) = 78 + 12 + 48 = 138 g mol⁻¹',
      },
      {
        label: 'd',
        text: 'Calcium carbonate reacts with nitric acid in acid rain to produce a salt and two other products.\n\nCaCO₃ + 2HNO₃ → salt + product A + product B\n\n**Select** the other two products that are formed when calcium carbonate reacts with nitric acid.',
        marks: 2,
        ph: 'Products are H₂O and CO₂ (in either order)',
        widget: 'inline_dropdown_select',
        widgetItems: ['Product A', 'Product B'],
        widgetOptions: ['H₂O', 'CO₂', 'H₂', 'CaO', 'NO'],
      },
      {
        label: 'e',
        text: '**Determine** the formula of the salt that is produced when calcium carbonate reacts with nitric acid.',
        marks: 1,
        ph: 'Ca(NO₃)₂ (calcium nitrate; correct subscripts required)',
      },
      {
        label: 'f',
        text: '**State** the pH of a solution of the salt produced in part (e).',
        marks: 1,
        ph: 'pH = 7 (Ca(NO₃)₂ is a neutral salt from strong acid + carbonate base)',
      },
    ],
  },

  // ── Q3 (9 marks, Crit A) — Car exhaust, water formation, diffusion ────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Balancing equations, particle model & diffusion — car exhaust emissions',
    marks: 9,
    stem: 'Car engines burn hydrocarbon fuels in oxygen. One important reaction in a car\'s catalytic converter converts hydrogen gas and oxygen gas into water vapour, helping to reduce the emission of unburned fuel.\n\nFurthermore, exhaust gases from car engines contain various pollutants that can spread widely in urban areas, even on calm days.',
    tasks: [
      {
        label: 'a',
        text: '**Write down** the balanced chemical equation for the formation of water from hydrogen and oxygen in the catalytic converter.',
        marks: 2,
        ph: '2H₂ + O₂ → 2H₂O (reactants correct [1]; products correct [1])',
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
        text: 'Car exhaust gases such as carbon monoxide (CO) can reach dangerous concentrations in poorly ventilated car parks and tunnels, even when there is no breeze.\n\n**Explain** why exhaust gases can pollute an enclosed area from a vehicle that has stopped. You should use scientific terminology in your answer.',
        marks: 4,
        ph: 'Carbon monoxide is a gas; gas particles spread/move/travel out; from area of high concentration to low concentration; this is diffusion',
      },
    ],
  },

  // ── Q4 (9 marks, Crit C/B/D) — Milk denaturation / rennet enzyme ──────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Hypothesis, measurement & denaturation — rennet enzyme and cheese making',
    marks: 9,
    stem: 'Rennet is a mixture of enzymes used in cheese making. The main enzyme, chymosin, cleaves the protein kappa-casein in milk, causing the milk to coagulate (curdle). The temperature at which milk is coagulated and the firmness of the curd can be measured using different methods.\n\nA conductivity meter measures how well the milk conducts electricity — as the proteins coagulate, conductivity changes.',
    tasks: [
      {
        label: 'a',
        text: 'Two students are investigating milk coagulation. One student uses a conductivity meter; the other holds the test tube up to the light and observes when the milk clouds.\n\n**Justify** which method gives a better measurement of milk coagulation.',
        marks: 1,
        ph: 'Conductivity meter — gives quantitative/numerical data OR more accurate/precise OR removes human error / subjective judgement',
      },
      {
        label: 'b',
        text: 'A student wants to investigate how the concentration of rennet affects the time taken for milk to coagulate. Using the information above, **formulate** the student\'s hypothesis.',
        marks: 3,
        ph: 'If the concentration of rennet is increased; Then the time taken for milk to coagulate will decrease / coagulation will happen faster; Because more enzyme molecules means more collisions with substrate per unit time',
      },
      {
        label: 'c',
        text: 'A student separated milk into low-fat (0.5%) and full-fat (3.5%) fractions, added the same concentration of rennet to each and measured the temperature when coagulation was observed. The results are shown below.\n\n| | Starting temperature / °C | Temperature at coagulation / °C |\n|---|---|---|\n| Full-fat milk | 30 | 38 |\n| Low-fat milk | 30 | [blank] |\n\n**Measure** the temperature at which the low-fat milk coagulates. Add your value to the table.',
        marks: 1,
        ph: 'Accept any single value in the range 36–42 °C',
      },
      {
        label: 'd',
        text: 'The diagram below shows two different setups for measuring the temperature of milk coagulation.\n\n**Select** which setup would produce the most valid measurement of the temperature at which the milk coagulates. **Justify** your answer.',
        marks: 1,
        ph: 'Method A — thermometer is immersed directly in the milk/curd, not just in the surrounding water bath',
        widget: 'radio_select',
        widgetOptions: ['Method A', 'Method B'],
      },
      {
        label: 'e',
        text: '**Predict** the temperature at which a mixture of full-fat and low-fat milk would begin to coagulate when rennet is added. **Justify** your answer.',
        marks: 3,
        ph: 'Accept range 36–42 °C; unit °C; because that is the lowest temperature at which either of the two components began to coagulate / the lower-fat fraction coagulates first',
      },
    ],
  },

  // ── Q5 (8 marks, Crit B/C) — Marinating chicken ─────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B/C: Marinating investigation — concentration of marinade and tenderness',
    marks: 8,
    stem: 'Marinating meat in acidic solutions (such as citrus juice or vinegar) is a traditional food preparation method. The acid partially denatures the muscle proteins, making the meat more tender.\n\nA student has decided to investigate how the concentration of citric acid (a key acid in lemon juice) affects the tenderness of chicken breast after 24 hours of marination.\n\nThey record the following data:\n\n| Citric acid concentration / % | Starting texture score | Final texture score (1–10, 10=most tender) | pH of marinade |\n|---|---|---|---|\n| 0.5% | 4 | 5.2 | 5.8 |\n| 1.0% | 4 | pH probe broken | 4.9 |\n| 2.0% | 4 | 7.8 | 4.1 |\n| 4.0% | 4 | 6.4 | 3.6 |',
    tasks: [
      {
        label: 'a',
        text: '**Identify** the independent variable, dependent variable and two control variables for this investigation.',
        marks: 4,
        ph: 'IV: concentration of citric acid; DV: texture score OR tenderness; CVs x2: mass of chicken, temperature, time of marination, size of chicken pieces, type of chicken cut',
      },
      {
        label: 'b',
        text: '**Suggest** a suitable research question for this investigation.',
        marks: 2,
        ph: 'How does the concentration of citric acid affect the tenderness of marinated chicken breast?',
      },
      {
        label: 'c',
        text: 'Looking at the table, **state** the general trend in texture score as citric acid concentration increases from 0.5% to 2.0%.',
        marks: 1,
        ph: 'Texture score increases / chicken becomes more tender as citric acid concentration increases (up to 2%)',
      },
      {
        label: 'd',
        text: 'The student was surprised that the texture score was missing for the 1.0% citric acid concentration. **Suggest** an improvement to the method to increase the validity of the data.',
        marks: 1,
        ph: 'Use a texture analyser instrument (instead of subjective scoring) OR use a new/calibrated probe to obtain the missing measurement',
      },
    ],
  },

  // ── Q6 (14 marks, Crit C) — Lycopene in cooked vs raw tomatoes ───────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Criterion C: Data processing & graph — lycopene in tomato products',
    marks: 14,
    stem: 'Lycopene is a powerful antioxidant found in tomatoes. It gives tomatoes their red colour. Unusually, the bioavailability of lycopene (how much the body can absorb) increases when tomatoes are cooked in oil, because heat breaks down cell walls and the fat helps absorption.',
    tasks: [
      {
        label: 'a',
        text: 'The table below shows the lycopene concentration of different tomato products:\n\n| Tomato product | Lycopene concentration / mg 100g⁻¹ |\n|---|---|\n| Raw tomato | 3.0 |\n| Tomato sauce (cooked 15 min) | 9.7 |\n| Tomato paste | 42.2 |\n| Sun-dried tomato | 45.9 |\n| Ketchup | 17.3 |\n\n**Present** this data in a graph.',
        marks: 5,
        ph: 'Title linking lycopene concentration and product type; x-axis = product type; y-axis = lycopene concentration; correct scale from 0; all values plotted correctly (bar chart)',
      },
      {
        label: 'b',
        text: 'A student was interested in how lycopene concentration changes over 21 days when tomato sauce is stored at different temperatures:\n- fresh tomato sauce at 4°C\n- fresh tomato sauce at room temperature (20°C)\n- tomato sauce treated with antioxidant (vitamin E) at 4°C\n\n**Identify** which storage condition leads to the highest lycopene loss over 21 days. **Justify** your answer using scientific reasoning.',
        marks: 3,
        ph: 'Room temperature (20°C) storage; lycopene is broken down / oxidised more rapidly at higher temperatures; oxygen reacts with lycopene faster at 20°C',
      },
      {
        label: 'c',
        text: 'Using the graph from part (b), **calculate** the rate of change in lycopene concentration for the room-temperature tomato sauce over the 21-day period.',
        marks: 2,
        ph: 'Change = initial − final ≈ 9.7 − 7.1 = 2.6 mg 100g⁻¹; rate = 2.6/21 = 0.124 mg 100g⁻¹ day⁻¹ (accept 0.10–0.15)',
      },
      {
        label: 'd',
        text: 'A student made the following hypothesis:\n\n"If a raw tomato is kept in a bowl for several weeks, the lycopene concentration will decrease because the lycopene will be oxidised."\n\nUsing the graph from part (b), **evaluate** the validity of this hypothesis.',
        marks: 4,
        ph: 'The lycopene inside the tomato will not be oxidised as much; because the flesh is not exposed to oxygen / protected by skin; due to the protective layer of the tomato skin; therefore the hypothesis is invalid',
      },
    ],
  },

  // ── Q7 (16 marks, Crit B) — Bioplastic degradation design ───────────────
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Criterion B: Investigation design — bioplastic degradation in compost',
    marks: 16,
    stem: 'Plastic waste pollution is a major environmental challenge. Biodegradable bioplastics made from renewable plant materials are a proposed alternative to conventional petroleum-based plastics. A materials company has developed three types of bioplastic:\n- polylactic acid (PLA) film\n- polyhydroxyalkanoate (PHA) film\n- thermoplastic starch (TPS) film\n\n**Design** an investigation to determine which bioplastic type degrades fastest when placed in a home compost bin. You are provided with standard laboratory equipment, pre-weighed samples of each bioplastic and a sample of standard home compost.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
    tasks: [
      {
        label: '',
        text: '**Design** an investigation to determine which bioplastic type degrades fastest when placed in a home compost bin. You are provided with standard laboratory equipment, pre-weighed samples of each bioplastic and a sample of standard home compost.\n\nIn your answer, you should include:\n- the independent, dependent and two control variables\n- a list of equipment you will use\n- the method you will follow\n- details of measurements you will take to collect sufficient data.',
        marks: 16,
        ph: 'IV: type of bioplastic (PLA/PHA/TPS/conventional); DV: mass loss/% degradation; CVs: mass of compost, temperature, moisture, time; equipment; method with 4 plastic types + control, 3 repeats, mean mass loss',
      },
    ],
  },

  // ── Q8 (8 marks, Crit D/C) — Lake salinity, mangrove tolerance ───────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Electrical conductivity, salinity & mangrove growth — coastal ecosystem water quality',
    marks: 8,
    stem: 'Mangrove forests grow along tropical coastlines and are highly productive ecosystems. They can tolerate a range of salinities, from fresh to full seawater. However, each mangrove species has an optimal salinity range for growth. Measuring the electrical conductivity of water is a fast way to estimate salinity levels in mangrove habitats.',
    tasks: [
      {
        label: 'a',
        text: '**Outline** why electrical conductivity can be used to determine the salt content of water.',
        marks: 2,
        ph: 'Na⁺ and Cl⁻ are charged particles; ions are mobile when dissolved in water / ions can conduct electricity',
      },
      {
        label: 'b',
        text: 'The table below shows electrical conductivity data for water from four different mangrove sites.\n\n| Location | Freshwater river | Estuary mouth | Coastal lagoon | Open sea |\n|---|---|---|---|---|\n| Electrical conductivity / mS cm⁻¹ | 0.05 | 12.4 | 28.7 | 51.8 |\n| Dissolved salt / g L⁻¹ | 0.04 | 9.5 | 22.1 | 38.5 |\n\nUsing the information in the table, **identify** the location of water with the highest salinity. **Justify** your answer.',
        marks: 2,
        ph: 'Open sea; highest electrical conductivity (51.8 mS cm⁻¹) OR highest dissolved salt concentration (38.5 g L⁻¹)',
      },
      {
        label: 'c',
        text: 'High salinity affects mangrove growth. The graph shows the percentage biomass production of two mangrove species at different salt concentrations.\n\n**Determine** the optimum concentration of salt for maximum biomass production in mangrove species C.',
        marks: 1,
        ph: '25 ±3 g L⁻¹ (read from graph at maximum of species C curve)',
      },
      {
        label: 'd',
        text: '**Compare** how salinity affects the percentage biomass production of mangrove species A and species B. You should include data from the graph in your answer.',
        marks: 3,
        ph: 'Species A: biomass peaks at ~10 g L⁻¹ and falls sharply above 20 g L⁻¹; Species B: biomass peaks at ~30 g L⁻¹ and decreases more gradually; Species B is more salt-tolerant than Species A',
      },
    ],
  },

  // ── Q9 (17 marks, Crit D) — Fog water collection / AWG ──────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Criterion D: Fog water collection systems — efficiency, economy & environment',
    marks: 17,
    stem: 'In many coastal and mountainous regions of the world, surface freshwater is scarce, but coastal fog occurs regularly. Fog water collection (FWC) technologies harvest fresh water directly from fog droplets. Three main fog water collection approaches have been developed: passive mesh fog collectors, active electrostatic fog collectors, and hybrid solar-assisted fog collectors.',
    tasks: [
      {
        label: 'a',
        text: 'Use the data in both tabs to **identify** the region where fog water collection would have the greatest impact on freshwater supply and **justify** why this is the case.',
        marks: 3,
        ph: 'Coastal sub-Saharan Africa / coastal Chile and Peru / coastal North Africa; high frequency of coastal fog; very limited surface freshwater; large rural population without access to clean water',
      },
      {
        label: 'b',
        text: 'There are three systems for fog water collection: passive mesh, active electrostatic, and hybrid solar-assisted.\n\nUsing the information provided and your wider MYP knowledge, **discuss** and **evaluate** the systems available for fog water collection. In your answer you should include:\n- a comparison of the efficiencies of the three systems\n- the economic impacts of the three systems\n- the environmental impacts of the three systems\n- an appraisal of the three systems.',
        marks: 14,
        ph: 'Efficiency: passive mesh no energy/limited output; electrostatic high yield/energy intensive; solar-assisted moderate energy/moderate yield; Economy: mesh cheapest to build/maintain; electrostatic most expensive; solar-assisted moderate cost; Environment: electrostatic CO₂ emissions; mesh minimal impact; solar minimal; Appraisal with evidence',
      },
    ],
  },
]
