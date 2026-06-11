import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2018-v2',
  subject: 'Physics',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Electric Bicycle Motor & Transformer (10 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'magnetism-electromagnetism',
    marks: 10,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Electric bicycles use motors and generators based on electromagnetic induction.',
    tags: { unit: 'magnetism-electromagnetism', topics: ['electromagnetic induction', 'transformers'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the diagram that correctly shows the magnetic field lines around a bar magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: 'A bar magnet is pushed into a coil of wire connected to an ammeter. **Suggest two ways** to increase the size of the induced current.',
        marks: 2,
        ph: 'Use a stronger magnet / move the magnet faster / use more turns of wire...',
      },
      {
        label: 'c',
        text: 'The bar magnet is turned so that the south pole enters the coil first. **Predict the change** on the induced current.',
        marks: 1,
        ph: 'The current will flow in the opposite direction...',
      },
      {
        label: 'd',
        text: 'A step-down transformer on an electric bicycle charger has a primary coil of **8 turns** connected to a **240 V** mains supply. The secondary coil has **4 turns**. **Calculate** the output voltage of the secondary coil. Show your working.',
        marks: 2,
        ph: 'V_s / V_p = N_s / N_p → V_s = 240 × 4/8 = 120 V',
      },
      {
        label: 'e',
        text: 'A real transformer in an e-bike charger is tested and found to be less than 100% efficient.\n\n| | Primary coil | Secondary coil |\n|---|---|---|\n| Voltage | 12 V | 5 V |\n| Current | 5.0 A | 10.8 A |\n\n**Calculate the efficiency** of this transformer.',
        marks: 2,
        ph: 'P_primary = 12 × 5.0 = 60 W; P_secondary = 5 × 10.8 = 54 W; efficiency = 54/60 = 0.90 = 90%',
      },
      {
        label: 'f',
        text: 'The e-bike charger uses alternating current from the mains supply. **Suggest why** modern transformers use alternating current rather than direct current.',
        marks: 2,
        ph: 'Alternating current creates a constantly changing magnetic field / changing field continuously induces a current in the secondary coil. DC only induces current when switched on or off...',
      },
    ],
  },

  // ── Q2: Roller Coaster — Energy (9 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'work-energy',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Roller coasters at amusement parks provide thrilling examples of energy transformations.',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'gravitational potential energy', 'efficiency'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Different variables are relevant to studying motion on a roller coaster. **Match** each variable to its most appropriate description.\n\n| Variable | Description |\n|---|---|\n| Velocity | ? |\n| Kinetic energy | ? |\n| Power | ? |\n\nDescriptions: *Speed in a particular direction* / *Energy due to the motion of an object* / *Energy transformed per unit time* / *Energy stored due to the position of an object*',
        marks: 3,
        ph: 'Velocity = Speed in a particular direction; Kinetic energy = Energy due to the motion of an object; Power = Energy transformed per unit time',
      },
      {
        label: 'b',
        text: 'A chain lift carries roller coaster cars to the top of the first drop. **Select** the type of energy that the car gains when lifted to the top.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Nuclear', 'Elastic potential', 'Thermal', 'Gravitational potential'],
        ph: 'Select the correct energy type',
      },
      {
        label: 'c',
        text: 'Calculate the size of the energy gained in part (b). The roller coaster car and passengers have a total mass of **75 kg** and the top of the drop is **40 m** above the base. Give your answer in **kilojoules (kJ)**. Assume g = **10 m s⁻²**.',
        marks: 3,
        ph: 'GPE = mgh = 75 × 10 × 40 = 30 000 J = 30 kJ',
      },
      {
        label: 'd',
        text: 'The roller coaster car descends the drop and reaches the base. **State the force** that reduces the speed of the car.',
        marks: 1,
        ph: 'Friction / drag / air resistance',
      },
      {
        label: 'e',
        text: 'Tests show that a roller coaster drop is **40% efficient** — 40% of the energy at the top is converted to kinetic energy at the base.\n\nDescribe the **three forms of energy output** involved in the motion of a car that starts from rest at the top and reaches the base. Include approximate percentages.',
        marks: 1,
        ph: 'Kinetic energy (~40%), thermal/heat energy (~50%), sound energy (~10%)',
      },
    ],
  },

  // ── Q3: Refrigerated Cargo Ship — Heat Transfer (9 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Refrigerated cargo ships transport perishable food at low temperatures across oceans. The cooling system must maintain low temperatures throughout the ship\'s cargo holds. The air cooling units are positioned at the top of each cargo hold.',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'convection', 'evaporation', 'radiation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the type of heat transfer relevant to the positioning of the air cooling units at the top of each cargo hold.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Conduction', 'Convection', 'Induction', 'Radiation'],
        ph: 'Select the correct heat transfer type',
      },
      {
        label: 'b',
        text: '**Describe why** the air cooling units are positioned at the top of the cargo hold. Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Cold air is denser than warm air so it sinks / warm air is less dense so it rises. Units at the top cool the air which then sinks, creating convection currents that cool the entire hold more effectively...',
      },
      {
        label: 'c',
        text: 'The refrigeration system uses a refrigerant that evaporates in the cooling coils. As the refrigerant evaporates, the temperature of the cooling coils and surrounding air decreases. **Explain why** evaporation causes the temperature of the remaining liquid to decrease.',
        marks: 3,
        ph: 'High energy molecules at the surface escape (evaporate). Lower energy molecules remain. The average kinetic energy of the remaining molecules decreases, so the temperature decreases...',
      },
      {
        label: 'd',
        text: '**State the ideal colour** for the outer hull of the ship (above the waterline) to minimise the amount of solar energy absorbed from the surroundings. Justify your answer with reference to electromagnetic radiation.',
        marks: 2,
        ph: 'White / silver / light colour. These are poor absorbers / good reflectors of infrared radiation, so they absorb less solar thermal energy...',
      },
    ],
  },

  // ── Q4: Drip Irrigation — Inquiry & Processing (19 marks, Criterion B) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 19,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'Drip irrigation systems deliver water slowly to plant roots using drip nozzles. The rate at which water drips out depends on the size of the nozzle opening.\n\nAn **inflow container** measures how long it takes to collect a fixed volume of water from a drip nozzle.\n\nAn **outflow container** is filled to a set level and the time taken to drain completely through a nozzle is recorded.',
    tags: { unit: 'measurement-motion', topics: ['variables', 'hypothesis', 'data collection', 'proportionality'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a question for a student to investigate about how the cross-sectional area of the drip nozzle affects the time it takes the inflow container to fill.',
        marks: 1,
        ph: 'How does the cross-sectional area of the drip nozzle affect the time it takes the container to fill? (WTTE)',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis that this question would test. Include a prediction and link to relevant scientific knowledge.',
        marks: 3,
        ph: 'As the cross-sectional area increases, the time to fill will decrease. A larger nozzle area allows more liquid through per unit time (greater flow rate), so the container fills faster...',
      },
      {
        label: 'c',
        text: 'Below is a list of variables for this experiment. **Select** the appropriate description for each of the variables used.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Type of liquid', 'Cross-sectional area of drip nozzle', 'Time to fill the catch container', 'Volume of catch container', 'Viscosity of liquid'],
        ph: 'Cross-sectional area of drip nozzle → Independent variable\nTime to fill catch container → Dependent variable\nType of liquid → Control variable\nVolume of catch container → Control variable\nViscosity of liquid → Control variable',
      },
      {
        label: 'd',
        text: '**State two pieces of equipment** needed to carry out this experiment, including a device for measuring the size of the nozzle opening.',
        marks: 2,
        ph: 'Stopwatch/timer; calipers/ruler (to measure diameter/area of nozzle opening); measuring cylinder',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect. Include the number of different values of the independent variable and the number of trials for each.',
        marks: 3,
        ph: 'Measure the time to fill the container for at least 5 different nozzle areas. Repeat each measurement 3 times to allow a mean to be calculated and improve reliability...',
      },
      {
        label: 'f',
        text: 'The student carries out the experiment and plots two graphs. **Write a title** for Graph 1 that links the independent and dependent variables.',
        marks: 1,
        ph: 'Variation of fill time with nozzle area / How the cross-sectional area of the nozzle affects the time to fill the container',
      },
      {
        label: 'g',
        text: 'Using Graph 2, **describe the relationship** between the fill time and the inverse of the nozzle area shown in the second graph.',
        marks: 2,
        ph: 'As the inverse of the area increases, the fill time increases proportionally / The fill time is directly proportional to the inverse of the area (straight line through origin)...',
      },
      {
        label: 'h',
        text: '**Find the constant of proportionality** from Graph 2.',
        marks: 2,
        ph: 'k = gradient = Δy/Δx ≈ 18 s cm²',
      },
      {
        label: 'i',
        text: 'Use your value from part (h) to **calculate the nozzle area** needed for a fill time of 120 seconds.',
        marks: 2,
        ph: 'k = t × a → a = k/t = 18/120 = 0.15 cm²',
      },
    ],
  },

  // ── Q5: Drip Irrigation Full Design (13 marks, Criterion B — banded) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 13,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student wants to design an investigation into how the volume of liquid in the outflow container affects the time taken for the container to empty through the drip nozzle.',
    tags: { unit: 'measurement-motion', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how the **volume of liquid** in the outflow container affects the **time taken to empty** the container. Your answer should include:\n\n- The **variables** (independent, dependent, and at least two control variables with justification)\n- The **equipment** needed, including how to measure the volume and time\n- A complete **method** that could be followed by another student\n- A **data collection plan** with at least five increments of the independent variable and three trials per increment',
        marks: 13,
        ph: 'Variables: IV = volume of liquid; DV = time to empty; CV = nozzle area (constant), type of liquid (same water), temperature (room temperature). Equipment: measuring cylinder, stopwatch, ruler to measure nozzle. Method: Fill container to 100 mL. Open nozzle. Start stopwatch. Stop when empty. Repeat for 100, 200, 300, 400, 500 mL. 3 trials each...',
      },
    ],
  },

  // ── Q6: Drip Nozzle Height Investigation (16 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 16,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates the effect that the initial height of liquid in an outflow container has on the time taken for the container to empty. He uses five containers with the same nozzle at the bottom, filling each to a different height, and allows the liquid to drain out completely.',
    tags: { unit: 'measurement-motion', topics: ['data processing', 'graphs', 'proportionality', 'evaluation'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The time for the container with the **8 cm** height of liquid was not recorded by the student. **Measure the time** shown in the stopwatch picture. Include the unit in your answer.',
        marks: 2,
        ph: '13.2 s (accept 13.1–13.3 seconds)',
      },
      {
        label: 'b',
        text: '**Organise and present** the data from the containers into a suitable table. Include the result from part (a) in your answer.\n\nData collected: 2 cm → 6.6 s; 4 cm → 9.3 s; 6 cm → 11.4 s; 8 cm → [your answer from a]; 10 cm → 14.8 s',
        marks: 4,
        ph: 'Table with: headers "Height of liquid / cm" and "Time taken to empty / s". Units in headers only. Data ordered. All 5 rows correct including 13.2 s for 8 cm.',
      },
      {
        label: 'c',
        text: 'Before starting the experiment, the student writes the following hypothesis:\n\n*"If the height of the liquid in the container doubles, there will be twice as much liquid, so the time taken to empty the container will be proportional to the height of the liquid."*\n\nIf the results support the hypothesis, **select the most appropriate graph** that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Once the experiment is completed, the results produce the graph shown. The student declares that his results **support** the hypothesis. **Use the graph to outline one reason** why the student is incorrect.',
        marks: 2,
        ph: 'For proportionality the line must pass through (0,0), but the line of best fit intersects the y-axis at approximately 4.5 s (not zero) / OR the line is curved (not straight), indicating a non-proportional relationship...',
      },
      {
        label: 'e',
        text: 'Three more students completed the experiment. The data is shown in the graphs below. **Evaluate the method** with the greatest validity and explain why the other methods are less valid.',
        marks: 3,
        ph: 'Student D has greatest validity — their data range reveals the true curved relationship. Others used too narrow a range and their data appeared linear across that range...',
      },
      {
        label: 'f',
        text: '**Suggest an alternative independent variable** to extend this investigation into drip irrigation.',
        marks: 1,
        ph: 'Viscosity of the liquid / type of liquid / temperature of liquid / density of liquid (do not accept: size of nozzle, volume of container)',
      },
      {
        label: 'g',
        text: 'For your alternative independent variable from part (f), **write a hypothesis** with a prediction and link to scientific knowledge.',
        marks: 3,
        ph: 'E.g. As viscosity increases, the time to empty will increase. More viscous liquids have stronger intermolecular forces, flow more slowly through the nozzle, taking longer to drain...',
      },
    ],
  },

  // ── Q7: Brazil Electricity & Wind Power (10 marks, Criterion D) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The graph above shows the electrical energy consumption in kWh per person in Brazil compared to the world average for the years 1975 to 2005.',
    tags: { unit: 'work-energy', topics: ['energy resources', 'wind power', 'data interpretation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Outline how** Brazil\'s electrical energy consumption per person changed over the 30-year period shown, compared with the world average.',
        marks: 2,
        ph: 'Brazil\'s consumption increased over the 30-year period / rose from about 600 kWh/person in 1975 to approximately 2350 kWh/person in 2005. The world average also increased but at a slower rate. Brazil\'s consumption was close to the world average throughout...',
      },
      {
        label: 'b',
        text: '**Suggest one cause** for the change in Brazil\'s electrical energy consumption per person between 1975 and 2005.',
        marks: 1,
        ph: 'Expansion of manufacturing / industrialisation / economic growth / population growth in cities / increased use of electrical appliances...',
      },
      {
        label: 'c',
        text: 'The total number of units of electrical energy consumed in Brazil in 1975 was **1.80 × 10¹¹ kWh**. Using appropriate data from the graphs, **calculate the total electrical energy consumed** in Brazil in 2005. Show your working clearly. Give your answer in kWh.',
        marks: 2,
        ph: 'From graph: Brazil 2005 ≈ 2350 kWh/person. Population 2005 ≈ 1.9 × 10⁸. Total = 2350 × 1.9 × 10⁸ = 4.47 × 10¹¹ ≈ 4.5 × 10¹¹ kWh',
      },
      {
        label: 'd',
        text: 'Increased electrical energy demand has environmental impacts. **State three environmental impacts** linked to increased electrical energy demand.',
        marks: 3,
        ph: 'CO₂ / greenhouse gas emissions from fossil fuels (climate change) / air pollution / deforestation for biomass / habitat destruction from dam construction / thermal water pollution...',
      },
      {
        label: 'e',
        text: 'One alternative method for generating electricity is wind power. The diagram shows a wind turbine.\n\n**Drag and drop** the correct forms of energy to outline the main energy transformations that take place in a wind turbine, in the correct order.',
        marks: 2,
        ph: 'Kinetic energy (wind) → Kinetic energy (rotor) → Electrical energy',
      },
    ],
  },

  // ── Q8: Offshore Wind Farm Evaluation (14 marks, Criterion D — banded) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Hornsea Offshore Wind Farm in the North Sea (UK) is one of the world\'s largest offshore wind farms. The facility generates enough electricity to power over one million homes. Its development has been both celebrated as a renewable energy milestone and criticised for its environmental and social impacts.',
    tags: { unit: 'work-energy', topics: ['evaluation', 'wind power', 'environmental impact', 'renewable energy'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'Using the information from the three tabs, **consider the positive and negative impacts** of the Hornsea Wind Farm, **discuss** and **evaluate** the environmental impact of the offshore wind project.\n\nIn your answer you should include:\n- the impacts on marine life and the ocean floor ecosystem\n- the impacts on the wider coastal environment and communities\n- the impacts from a global perspective\n- a concluding appraisal',
        marks: 14,
        ph: 'Marine: positive = no direct CO₂ in operation; negative = cable laying disturbs seabed, construction noise harms whales/dolphins, electromagnetic fields affect elasmobranch navigation. Coastal: visual impact on coastline, noise during construction, affects fishing and shipping lanes. Global: 1.2 GW capacity, displaces ~1.5 million tonnes CO₂/year; manufacturing turbines requires rare earth metals (mining impact). Conclusion: offshore wind provides vital low-carbon electricity but must be planned to minimise marine disruption; ongoing monitoring and biodiversity commitments are essential...',
      },
    ],
  },
]
