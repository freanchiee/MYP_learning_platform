import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2018/'

export const paperMeta = {
  id: 'physics-may-2018',
  subject: 'Physics',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Magnetism & Electromagnetic Induction (10 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'magnetism-electromagnetism',
    marks: 10,
    stem: 'Magnets can be used to induce a current in a wire.',
    tags: { unit: 'magnetism-electromagnetism', topics: ['electromagnetic induction', 'transformers'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the diagram that correctly shows the magnetic field lines around a bar magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}q1a-field-diagrams.png`],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: 'A bar magnet is pushed into a coil of wire. **Suggest two ways** to increase the size of the induced current.',
        marks: 2,
        ph: 'E.g. Use a stronger magnet / move the magnet faster / use more turns of wire / use a coil with lower resistance...',
      },
      {
        label: 'c',
        text: 'The bar magnet is turned so that the south pole enters the coil first. **Predict the change** on the induced current.',
        marks: 1,
        ph: 'E.g. The current will flow in the opposite direction...',
      },
      {
        label: 'd',
        text: 'The diagram shows a transformer with a primary coil of **10 turns** connected to a **110 V** supply. The secondary coil has **20 turns**. **Calculate** the output voltage of the secondary coil. Show your working.',
        marks: 2,
        figImages: [`${P}q1d-transformer.png`],
        ph: 'V_s / V_p = N_s / N_p → V_s = 110 × 20/10 = 220 V',
      },
      {
        label: 'e',
        text: 'The following data is taken from a real transformer which is not 100% efficient.\n\n| | Primary coil | Secondary coil |\n|---|---|---|\n| Voltage | 24 V | 12 V |\n| Current | 2.50 A | 4.75 A |\n\n**Calculate the efficiency** of this transformer.',
        marks: 2,
        figImages: [`${P}q1e-table.png`],
        ph: 'P_primary = 24 × 2.50 = 60 W; P_secondary = 12 × 4.75 = 57 W; efficiency = 57/60 = 0.95 = 95%',
      },
      {
        label: 'f',
        text: 'Faraday performed his experiment using direct current. **Suggest why** modern transformers use alternating current.',
        marks: 2,
        ph: 'Alternating current creates a constantly changing magnetic field / changing magnetic field continuously induces a current in the secondary coil. DC only induces current when switched on or off...',
      },
    ],
  },

  // ── Q2: Dry Ski Slope — Energy (9 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'work-energy',
    marks: 9,
    stem: 'Dry ski slopes are an example of artificial landscapes built by humans.',
    figImages: [`${P}q2-ski-slopes.png`],
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'gravitational potential energy', 'efficiency'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Different variables are relevant to studying skiing. **Match** each variable to its most appropriate description.\n\n| Variable | Description |\n|---|---|\n| Velocity | ? |\n| Kinetic energy | ? |\n| Power | ? |\n\nDescriptions: *Speed in a particular direction* / *Energy due to the motion of an object* / *Energy transformed per unit time* / *Energy stored due to the position of an object*',
        marks: 3,
        ph: 'Velocity = Speed in a particular direction; Kinetic energy = Energy due to the motion of an object; Power = Energy transformed per unit time',
      },
      {
        label: 'b',
        text: 'Ski facilities use lifts to take users uphill. **Select** the type of energy that a skier gains when taken uphill.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Nuclear', 'Elastic potential', 'Thermal', 'Gravitational potential'],
        ph: 'Select the correct energy type',
      },
      {
        label: 'c',
        text: 'Calculate the size of the energy gained in part (b) using the diagram. Give your answer in **kilojoules (kJ)**. Assume the gravitational field strength is **10 ms⁻²**.',
        marks: 3,
        figImages: [`${P}q2c-slope-diagram.png`],
        ph: 'GPE = mgh = 52 × 10 × 50 = 26 000 J = 26 kJ',
      },
      {
        label: 'd',
        text: 'A skier descends the slope and reaches the base. **State the force** that reduces the speed of the skier.',
        marks: 1,
        ph: 'Friction (accept: drag / air resistance)',
      },
      {
        label: 'e',
        text: 'Tests show that an indoor ski slope is **40% efficient** — 40% of the energy at the top is converted to kinetic energy at the base. The diagram shows two slopes A (real) and B (indoor).\n\nDescribe the **three forms of energy output** involved in the motion of a skier who starts from rest at the top and reaches the base. Include approximate percentages.',
        marks: 1,
        figImages: [`${P}q2d-comparison.png`],
        ph: 'Kinetic energy (~40%), thermal/heat energy (~50%), sound energy (~10%)',
      },
    ],
  },

  // ── Q3: Indoor Ski Slope — Heat Transfer (9 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 9,
    stem: 'In addition to the efficiency of indoor snow slopes, environmental conditions such as temperature need to be reproduced. In the design of the cooling system for an indoor snow slope, a decision must be made about the position of the air cooling units. The air cooling units are positioned at the top of the building.',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'convection', 'evaporation', 'radiation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of heat transfer relevant to the positioning of the air cooling units at the top of the building.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Conduction', 'Convection', 'Induction', 'Radiation'],
        ph: 'Select the correct heat transfer type',
      },
      {
        label: 'b',
        text: '**Describe why** the air cooling units are positioned at the top of the building. Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Cold air is denser than warm air so it sinks / hot air is less dense so it rises. Cooling units at the top cool the air which then sinks, creating convection currents that cool the whole slope more effectively than if placed at the bottom...',
      },
      {
        label: 'c',
        text: 'Snow cannons use water to make artificial snow. As water droplets evaporate, the temperature of the remaining water decreases. **Explain why** evaporation causes the temperature of the remaining liquid to decrease.',
        marks: 3,
        ph: 'High energy particles (molecules) at the surface escape / evaporate. Lower energy particles remain behind. The average kinetic energy of the remaining particles decreases, so the temperature decreases...',
      },
      {
        label: 'd',
        text: '**State the ideal colour** for snow cannons to minimise the amount of energy they absorb from the surroundings. Justify your answer with reference to electromagnetic radiation.',
        marks: 2,
        ph: 'Silver / white / shiny / metallic. These colours are poor absorbers / good reflectors of infrared radiation, so they absorb less thermal energy from the surroundings...',
      },
    ],
  },

  // ── Q4: Water Clocks — Inquiry & Processing (19 marks, B+C) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 19,
    stem: 'Water clocks are amongst the world\'s oldest timing devices. They use the flow of water to measure the passing of time.\n\nAn **inflow water clock** uses a constant flow of water into a fixed container. The time is recorded either when the water reaches the top of the container or against a scale as the water rises.\n\nAn **outflow water clock** uses a prefilled container of water. As the water drains out of the container the time is recorded either when the container is empty or against a scale as the water falls.',
    tags: { unit: 'measurement-motion', topics: ['variables', 'hypothesis', 'data collection', 'proportionality'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a question for a student to investigate about how the hole in an outflow water clock affects the time it takes the container to empty.',
        marks: 1,
        ph: 'How does the area of the hole affect the time it takes to fill/empty a container? (WTTE)',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis that this question would test. Include a prediction and link to relevant scientific knowledge.',
        marks: 3,
        ph: 'As the area of the hole increases, the time to fill will decrease. The larger the hole, the greater the amount of water flowing through per unit time, so the container fills faster...',
      },
      {
        label: 'c',
        text: 'Below is a list of variables for this experiment. **Select** the appropriate description for each of the variables used.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Type of liquid', 'Area of the out-flow tube', 'Time to fill the second container', 'Volume of second container', 'Viscosity of the liquid'],
        ph: 'Area of out-flow tube → Independent variable\nTime to fill container → Dependent variable\nType of liquid → Control variable\nVolume of second container → Control variable\nViscosity of the liquid → Control variable',
      },
      {
        label: 'd',
        text: '**State two pieces of equipment** needed to carry out this experiment, including a device for measuring the size of the hole.',
        marks: 2,
        ph: 'Stopwatch/timer; calipers/ruler (to measure the size/area of the hole); measuring cylinder',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect. Include the number of different values of the independent variable and the number of trials for each.',
        marks: 3,
        ph: 'Measure the time taken to fill the second container for at least 5 different areas of the hole. Repeat each measurement 3 times to allow a mean to be calculated and improve reliability...',
      },
      {
        label: 'f',
        text: 'The student carries out the experiment and plots two graphs. **Write a title** for Graph 1 that links the independent and dependent variables.',
        marks: 1,
        figImages: [`${P}q4-graphs.png`],
        ph: 'Variation of fill time with area of the hole / How the area of the hole affects the time to fill the container',
      },
      {
        label: 'g',
        text: 'Using Graph 2, **describe the relationship** between the fill time and the inverse of the area shown in the second graph.',
        marks: 2,
        figImages: [`${P}q4-graphs.png`],
        ph: 'As the inverse of the area increases, the fill time increases proportionally / The fill time is directly proportional to the inverse of the area (straight line through origin)...',
      },
      {
        label: 'h',
        text: '**Find the constant of proportionality** from Graph 2.',
        marks: 2,
        figImages: [`${P}q4-graphs.png`],
        ph: 'k = gradient = Δy/Δx ≈ 15 s cm²',
      },
      {
        label: 'i',
        text: 'Use your value from part (h) to **calculate the area** needed for a fill time of 90 seconds.',
        marks: 2,
        ph: 'k = t × a → a = k/t = 15/90 ≈ 0.17 cm²',
      },
    ],
  },

  // ── Q5: Water Clock Design (13 marks, Criterion B — banded) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 13,
    stem: 'A student wants to design an investigation into how the volume of water in the container affects the time taken to empty the container.',
    tags: { unit: 'measurement-motion', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how the **volume of water** in the container affects the **time taken to empty** the container. Your answer should include:\n\n- The **variables** (independent, dependent, and at least two control variables with justification)\n- The **equipment** needed, including how to measure the volume and time\n- A complete **method** that could be followed by another student\n- A **data collection plan** with at least five increments of the independent variable and three trials per increment',
        marks: 13,
        ph: 'Variables: IV = volume of water in container; DV = time to empty container; CV = size of hole (constant), type of liquid (same water), temperature (room temperature). Equipment: measuring cylinder (to set volume), stopwatch (to measure time), ruler (to measure hole size), container with hole. Method: Fill container to 100 mL. Start stopwatch when water begins to drain. Stop when container is empty. Record time. Repeat for volumes: 100, 200, 300, 400, 500 mL. Carry out 3 trials for each volume. Calculate mean time for each volume...',
      },
    ],
  },

  // ── Q6: Water Clock Height Investigation (16 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 16,
    stem: 'A student decides to investigate the effect that the initial height of water in a tube has on the time taken for the tube to empty. He adds water to five tubes, fitted with a tap at the bottom, at different heights and allows the water to drain out.',
    tags: { unit: 'measurement-motion', topics: ['data processing', 'graphs', 'proportionality', 'evaluation'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The time for the tube with the **8 cm** height of water was not recorded by the student. **Measure the time** shown in the stopwatch picture. Include the unit in your answer.',
        marks: 2,
        figImages: [`${P}q6a-simulation.png`, `${P}q6a-stopwatch.png`],
        ph: '12.8 s (accept 12.8 seconds; do not accept 12.8 sec)',
      },
      {
        label: 'b',
        text: '**Organise and present** the data from the water clocks into a suitable table. Include the result from part (a) in your answer.\n\nData collected: 2 cm → 6.4 s; 4 cm → 9.0 s; 6 cm → 11.1 s; 8 cm → [your answer from a]; 10 cm → 14.3 s',
        marks: 4,
        ph: 'Table with: headers "Height of water / cm" and "Time taken to empty the tube / s". Units in headers only. Data ordered (ascending or descending). All 5 rows correct including 12.8 s for 8 cm.',
      },
      {
        label: 'c',
        text: 'Before starting the experiment, the student writes the following hypothesis:\n\n*"If the height of the water in the tube doubles, there will be twice as much water, so the time taken to empty the tube will be proportional to the height of the water."*\n\nIf the results support the hypothesis, **select the most appropriate graph** that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        figImages: [`${P}q6c-graph-options.png`],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Once the experiment is completed, the results produce the graph shown. The student declares that his results **support** the hypothesis. **Use the graph to outline one reason** why the student is incorrect.',
        marks: 2,
        figImages: [`${P}q6d-graph.png`],
        ph: 'For the results to be proportional the line must go through (0,0), but the line crosses the y-axis at approximately 5.0 (not zero), so the relationship is not proportional / OR the line of best fit is not straight (a curve fits the data better), so the results are not proportional...',
      },
      {
        label: 'e',
        text: 'Three more students completed the experiment. The data is shown in the graphs below. **Evaluate the method** with the greatest validity and explain why the other methods are less valid.',
        marks: 3,
        figImages: [`${P}q6e-student-graphs.png`],
        ph: 'Student D has the most valid method because the range of data most clearly shows the correct relationship. The other students used too narrow a range of data / their range of data shows an apparently linear relationship across the range selected, which does not reveal the true curve...',
      },
      {
        label: 'f',
        text: '**Suggest an alternative independent variable** to extend this investigation into water clocks.',
        marks: 1,
        ph: 'Viscosity of the liquid / pressure / type of liquid / density of liquid (do not accept: size of hole, volume of container, gravitational field strength)',
      },
      {
        label: 'g',
        text: 'For your alternative independent variable from part (f), **write a hypothesis** with a prediction and link to scientific knowledge.',
        marks: 3,
        ph: 'E.g. If viscosity increases, the time taken to empty the tube will increase. More viscous liquids have stronger intermolecular forces, so they flow more slowly through the hole, taking longer to drain...',
      },
    ],
  },

  // ── Q7: China Electricity & Three Gorges Dam (10 marks, Criterion D) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 10,
    stem: 'The graph above shows the electrical energy consumption in kWh per person in China compared to the world average for the years 1975 to 2005.',
    figImages: [`${P}q7-energy-graph.png`],
    tags: { unit: 'work-energy', topics: ['energy resources', 'hydroelectric power', 'data interpretation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Outline how** China\'s electrical energy consumption per person changed over the 30-year period shown, compared with the world average.',
        marks: 2,
        ph: 'China\'s consumption increased significantly over the 30-year period / rose from about 200 kWh/person in 1975 to over 1000 kWh/person in 2005. The world average also increased but more slowly. China\'s consumption was below the world average in 1975 but approached it by 2005...',
      },
      {
        label: 'b',
        text: '**Suggest one cause** for the change in China\'s electrical energy consumption per person between 1975 and 2005.',
        marks: 1,
        ph: 'Rapid industrialisation / economic growth / increased manufacturing / population moving to cities / improved standard of living leading to greater use of electrical appliances...',
      },
      {
        label: 'c',
        text: 'The total number of units of electrical energy consumed in China in 1975 was **6.24 × 10¹¹ kWh**. Using appropriate data from the graphs below, **calculate the total electrical energy consumed** in China in 2005. Show your working clearly. Give your answer in kWh.',
        marks: 2,
        figImages: [`${P}q7-energy-graph.png`, `${P}q7c-population-graph.png`],
        ph: 'From energy graph: China 2005 ≈ 3150 kWh/person. From population graph: China 2005 ≈ 1.25 × 10⁹ people. Total = 3150 × 1.25 × 10⁹ = 3.94 × 10¹² kWh',
      },
      {
        label: 'd',
        text: 'Increased electrical energy demand has environmental impacts. **State three environmental impacts** linked to increased electrical energy demand.',
        marks: 3,
        ph: 'Burning fossil fuels releases CO₂ (climate change) / air pollution from combustion products / habitat destruction from mining / water pollution / deforestation for biofuels / thermal pollution of water from power stations...',
      },
      {
        label: 'e',
        text: 'One alternative method for the generation of electricity is hydroelectric power. The diagram shows a typical hydroelectric facility.\n\n**Drag and drop** the correct forms of energy to outline the main energy transformations that take place in a hydroelectric power plant, in the correct order.',
        marks: 2,
        figImages: [`${P}q7e-hydro-diagram.png`],
        ph: 'Gravitational potential energy → Kinetic energy → Electrical energy',
      },
    ],
  },

  // ── Q8: Three Gorges Dam Evaluation (14 marks, Criterion D — banded) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 14,
    stem: 'Towards the end of the 20th century, China planned the largest hydropower project the world had ever seen called the Three Gorges Dam. The dam, which was completed in 2006, remains one of the most controversial projects in modern times.',
    tags: { unit: 'work-energy', topics: ['evaluation', 'Three Gorges Dam', 'environmental impact', 'hydroelectric power'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'Using the information from the three tabs, **consider the positive and negative impacts** of the changes to the landscape, **discuss** and **evaluate** the environmental impact of the Three Gorges Dam hydropower project.\n\nIn your answer you should include:\n- the impacts on living and non-living things within the river\n- the impacts on the wider surrounding natural landscape\n- the impacts from a global perspective\n- a concluding appraisal',
        marks: 14,
        ph: 'Impacts on river: positive = flood control (300,000 deaths from flooding), power generation (22,500 MW); negative = 177 fish species disrupted, river dolphins extinct, sediment trapped. Wider landscape: 632 km² flooded, 1.2 million people relocated from 13 cities/140 towns/1350 villages; landslides increased. Global perspective: replaces 31 million tonnes of coal/year, saves ~80 million tonnes CO₂/year; concrete production released 7 million tonnes CO₂. Conclusion: overall the dam provides significant clean energy and flood protection but at major cost to biodiversity and local communities...',
      },
    ],
  },
]
