import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2018-v1',
  subject: 'Physics',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Wind Turbine Generator & Transformer (10 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'magnetism-electromagnetism',
    marks: 10,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Wind turbines use electromagnetic induction to generate electricity.',
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
        text: 'A bar magnet is pushed into a coil of wire connected to a galvanometer. **Suggest two ways** to increase the size of the induced current.',
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
        text: 'A step-up transformer in a wind farm has a primary coil of **5 turns** connected to a **220 V** supply. The secondary coil has **10 turns**. **Calculate** the output voltage of the secondary coil. Show your working.',
        marks: 2,
        ph: 'V_s / V_p = N_s / N_p → V_s = 220 × 10/5 = 440 V',
      },
      {
        label: 'e',
        text: 'A real transformer is tested and found to be less than 100% efficient.\n\n| | Primary coil | Secondary coil |\n|---|---|---|\n| Voltage | 230 V | 110 V |\n| Current | 1.20 A | 2.30 A |\n\n**Calculate the efficiency** of this transformer.',
        marks: 2,
        ph: 'P_primary = 230 × 1.20 = 276 W; P_secondary = 110 × 2.30 = 253 W; efficiency = 253/276 = 0.917 = 91.7%',
      },
      {
        label: 'f',
        text: 'Wind turbine generators use alternating current. **Suggest why** modern transformers use alternating current rather than direct current.',
        marks: 2,
        ph: 'Alternating current creates a constantly changing magnetic field / changing field continuously induces a current in the secondary coil. DC only induces current when switched on or off...',
      },
    ],
  },

  // ── Q2: Water Slide — Energy (9 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'work-energy',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Water slides at theme parks are an example of energy transformations in action.',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'gravitational potential energy', 'efficiency'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Different variables are relevant to studying motion on a water slide. **Match** each variable to its most appropriate description.\n\n| Variable | Description |\n|---|---|\n| Velocity | ? |\n| Kinetic energy | ? |\n| Power | ? |\n\nDescriptions: *Speed in a particular direction* / *Energy due to the motion of an object* / *Energy transformed per unit time* / *Energy stored due to the position of an object*',
        marks: 3,
        ph: 'Velocity = Speed in a particular direction; Kinetic energy = Energy due to the motion of an object; Power = Energy transformed per unit time',
      },
      {
        label: 'b',
        text: 'A water slide lift carries riders to the top of the slide. **Select** the type of energy that a rider gains when taken to the top.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Nuclear', 'Elastic potential', 'Thermal', 'Gravitational potential'],
        ph: 'Select the correct energy type',
      },
      {
        label: 'c',
        text: 'Calculate the size of the energy gained in part (b). The rider has a mass of **65 kg** and the top of the slide is **30 m** above the base. Give your answer in **kilojoules (kJ)**. Assume g = **10 m s⁻²**.',
        marks: 3,
        ph: 'GPE = mgh = 65 × 10 × 30 = 19 500 J = 19.5 kJ',
      },
      {
        label: 'd',
        text: 'A rider descends the slide and reaches the base. **State the force** that reduces the speed of the rider.',
        marks: 1,
        ph: 'Friction / drag / water resistance',
      },
      {
        label: 'e',
        text: 'Tests show that a water slide is **40% efficient** — 40% of the energy at the top is converted to kinetic energy at the base.\n\nDescribe the **three forms of energy output** involved in the motion of a rider who starts from rest at the top and reaches the base. Include approximate percentages.',
        marks: 1,
        ph: 'Kinetic energy (~40%), thermal/heat energy (~50%), sound energy (~10%)',
      },
    ],
  },

  // ── Q3: Refrigerated Warehouse — Heat Transfer (9 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Refrigerated warehouses store perishable food products at low temperatures. In the design of the cooling system, a decision must be made about the position of the air cooling units inside the warehouse. The air cooling units are positioned at the top of the building.',
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
        ph: 'Cold air is denser than warm air so it sinks / hot air is less dense so it rises. Cooling units at the top cool the air which sinks, creating convection currents that cool the entire warehouse more effectively...',
      },
      {
        label: 'c',
        text: 'Refrigeration systems use a refrigerant liquid that evaporates inside the cooling unit. As the refrigerant evaporates, the temperature of the cooling coil decreases. **Explain why** evaporation causes the temperature of the remaining liquid to decrease.',
        marks: 3,
        ph: 'High energy molecules at the surface escape / evaporate. Lower energy molecules remain behind. The average kinetic energy of the remaining molecules decreases, so the temperature decreases...',
      },
      {
        label: 'd',
        text: '**State the ideal colour** for the outer walls of a refrigerated warehouse to minimise the amount of energy absorbed from the surroundings. Justify your answer with reference to electromagnetic radiation.',
        marks: 2,
        ph: 'White / silver / shiny / light colour. These are poor absorbers / good reflectors of infrared radiation, so they absorb less thermal energy from the sun and surroundings...',
      },
    ],
  },

  // ── Q4: Sand Timer — Inquiry & Processing (19 marks, Criterion B) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 19,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'Sand timers (hourglasses) are ancient timing devices. They use the flow of sand through a narrow aperture to measure the passing of time.\n\nThe **aperture** (neck) connects the two glass bulbs. Sand flows from the upper bulb through the aperture into the lower bulb. The time measured depends on how quickly the sand flows through the aperture.',
    tags: { unit: 'measurement-motion', topics: ['variables', 'hypothesis', 'data collection', 'proportionality'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a question for a student to investigate about how the diameter of the aperture in a sand timer affects the time taken for the upper bulb to empty.',
        marks: 1,
        ph: 'How does the diameter of the aperture affect the time taken for the sand timer to empty? (WTTE)',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis that this question would test. Include a prediction and link to relevant scientific knowledge.',
        marks: 3,
        ph: 'As the diameter of the aperture increases, the time taken to empty will decrease. A larger aperture allows more sand to flow through per unit time, so the bulb empties faster...',
      },
      {
        label: 'c',
        text: 'Below is a list of variables for this experiment. **Select** the appropriate description for each of the variables used.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Type of sand', 'Diameter of aperture', 'Time to empty upper bulb', 'Volume of upper bulb', 'Density of sand'],
        ph: 'Diameter of aperture → Independent variable\nTime to empty upper bulb → Dependent variable\nType of sand → Control variable\nVolume of upper bulb → Control variable\nDensity of sand → Control variable',
      },
      {
        label: 'd',
        text: '**State two pieces of equipment** needed to carry out this experiment, including a device for measuring the diameter of the aperture.',
        marks: 2,
        ph: 'Stopwatch/timer; calipers/ruler (to measure diameter of aperture); digital scale',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect. Include the number of different values of the independent variable and the number of trials for each.',
        marks: 3,
        ph: 'Measure the time taken to empty the upper bulb for at least 5 different aperture diameters. Repeat each measurement 3 times to allow a mean to be calculated...',
      },
      {
        label: 'f',
        text: 'The student carries out the experiment and plots two graphs. **Write a title** for Graph 1 that links the independent and dependent variables.',
        marks: 1,
        ph: 'Variation of empty time with aperture diameter / How the aperture diameter affects the time to empty the sand timer',
      },
      {
        label: 'g',
        text: 'Using Graph 2, **describe the relationship** between the empty time and the inverse of the diameter shown in the second graph.',
        marks: 2,
        ph: 'As the inverse of the diameter increases, the empty time increases proportionally / The empty time is directly proportional to the inverse of the diameter (straight line through origin)...',
      },
      {
        label: 'h',
        text: '**Find the constant of proportionality** from Graph 2.',
        marks: 2,
        ph: 'k = gradient = Δy/Δx ≈ 12 s cm',
      },
      {
        label: 'i',
        text: 'Use your value from part (h) to **calculate the diameter** needed for an empty time of 60 seconds.',
        marks: 2,
        ph: 'k = t × d → d = k/t = 12/60 = 0.20 cm',
      },
    ],
  },

  // ── Q5: Sand Timer Full Design (13 marks, Criterion B — banded) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 13,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student wants to design an investigation into how the volume of sand in the upper bulb affects the time taken to empty the sand timer.',
    tags: { unit: 'measurement-motion', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how the **volume of sand** in the upper bulb affects the **time taken to empty** the sand timer. Your answer should include:\n\n- The **variables** (independent, dependent, and at least two control variables with justification)\n- The **equipment** needed, including how to measure the volume of sand and the time\n- A complete **method** that could be followed by another student\n- A **data collection plan** with at least five increments of the independent variable and three trials per increment',
        marks: 13,
        ph: 'Variables: IV = volume of sand in upper bulb; DV = time to empty the upper bulb; CV = diameter of aperture (constant), type of sand (same sand), orientation of timer (vertical). Equipment: measuring cylinder (to set volume), stopwatch, calipers. Method: Pour 10 cm³ of sand into upper bulb. Hold timer vertically. Start stopwatch. Stop when upper bulb empty. Repeat for 10, 20, 30, 40, 50 cm³. 3 trials each...',
      },
    ],
  },

  // ── Q6: Sand Timer Height Investigation (16 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 16,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student decides to investigate the effect that the initial depth of sand in the upper bulb has on the time taken for the bulb to empty. She uses five sand timers with different depths of sand and measures the time for each to empty completely.',
    tags: { unit: 'measurement-motion', topics: ['data processing', 'graphs', 'proportionality', 'evaluation'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The time for the sand timer with **8 cm** depth of sand was not recorded by the student. **Measure the time** shown in the stopwatch picture. Include the unit in your answer.',
        marks: 2,
        ph: '11.5 s (accept 11.4–11.6 seconds)',
      },
      {
        label: 'b',
        text: '**Organise and present** the data from the sand timers into a suitable table. Include the result from part (a) in your answer.\n\nData collected: 2 cm → 5.8 s; 4 cm → 8.2 s; 6 cm → 10.0 s; 8 cm → [your answer from a]; 10 cm → 12.9 s',
        marks: 4,
        ph: 'Table with: headers "Depth of sand / cm" and "Time taken to empty / s". Units in headers only. Data ordered. All 5 rows correct including 11.5 s for 8 cm.',
      },
      {
        label: 'c',
        text: 'Before starting the experiment, the student writes the following hypothesis:\n\n*"If the depth of sand in the upper bulb doubles, there will be twice as much sand, so the time taken to empty will be proportional to the depth of sand."*\n\nIf the results support the hypothesis, **select the most appropriate graph** that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Once the experiment is completed, the results produce the graph shown. The student declares that her results **support** the hypothesis. **Use the graph to outline one reason** why the student is incorrect.',
        marks: 2,
        ph: 'For proportionality the line must pass through (0,0), but the line of best fit intersects the y-axis at approximately 4.0 s (not zero), so the relationship is not proportional / OR the curve fit is better than a straight line...',
      },
      {
        label: 'e',
        text: 'Three more students completed the experiment. The data is shown in the graphs below. **Evaluate the method** with the greatest validity and explain why the other methods are less valid.',
        marks: 3,
        ph: 'Student D has the most valid method because their range of data most clearly reveals the true curved relationship. Other students used too narrow a data range and their data appears linear...',
      },
      {
        label: 'f',
        text: '**Suggest an alternative independent variable** to extend this investigation into sand timers.',
        marks: 1,
        ph: 'Grain size of sand / type of sand (density) / temperature / angle of tilt (do not accept: aperture diameter — that was investigated already)',
      },
      {
        label: 'g',
        text: 'For your alternative independent variable from part (f), **write a hypothesis** with a prediction and link to scientific knowledge.',
        marks: 3,
        ph: 'E.g. If the grain size increases, the time taken to empty will decrease. Larger grains flow through the aperture with less obstruction/interlocking, so they flow more quickly...',
      },
    ],
  },

  // ── Q7: India Electricity & Tidal Energy (10 marks, Criterion D) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The graph above shows the electrical energy consumption in kWh per person in India compared to the world average for the years 1975 to 2005.',
    tags: { unit: 'work-energy', topics: ['energy resources', 'tidal power', 'data interpretation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Outline how** India\'s electrical energy consumption per person changed over the 30-year period shown, compared with the world average.',
        marks: 2,
        ph: 'India\'s consumption increased over the 30-year period / rose from about 100 kWh/person in 1975 to over 600 kWh/person in 2005. The world average also increased but more steadily. India\'s consumption remained below the world average throughout...',
      },
      {
        label: 'b',
        text: '**Suggest one cause** for the change in India\'s electrical energy consumption per person between 1975 and 2005.',
        marks: 1,
        ph: 'Rapid industrialisation / economic growth / increased manufacturing / urbanisation / improved standard of living leading to greater use of electrical appliances...',
      },
      {
        label: 'c',
        text: 'The total number of units of electrical energy consumed in India in 1975 was **2.40 × 10¹¹ kWh**. Using appropriate data from the graphs, **calculate the total electrical energy consumed** in India in 2005. Show your working clearly. Give your answer in kWh.',
        marks: 2,
        ph: 'From graph: India 2005 ≈ 600 kWh/person. Population 2005 ≈ 1.10 × 10⁹. Total = 600 × 1.10 × 10⁹ = 6.60 × 10¹¹ kWh',
      },
      {
        label: 'd',
        text: 'Increased electrical energy demand has environmental impacts. **State three environmental impacts** linked to increased electrical energy demand.',
        marks: 3,
        ph: 'CO₂ / greenhouse gas emissions from fossil fuels (climate change) / air pollution from combustion / habitat destruction from mining / thermal pollution of water / deforestation for biomass...',
      },
      {
        label: 'e',
        text: 'One alternative method for the generation of electricity is tidal power. The diagram shows a tidal barrage.\n\n**Drag and drop** the correct forms of energy to outline the main energy transformations that take place in a tidal power station, in the correct order.',
        marks: 2,
        ph: 'Gravitational potential energy → Kinetic energy → Electrical energy',
      },
    ],
  },

  // ── Q8: Tidal Barrage Evaluation (14 marks, Criterion D — banded) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Swansea Bay Tidal Lagoon was proposed as one of the first tidal power projects in the United Kingdom. Tidal lagoons use the rise and fall of tides to generate electricity by trapping tidal water behind a sea wall and releasing it through turbines. The project remains one of the most debated renewable energy proposals in recent years.',
    tags: { unit: 'work-energy', topics: ['evaluation', 'tidal power', 'environmental impact', 'renewable energy'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'Using the information from the three tabs, **consider the positive and negative impacts** of the Swansea Bay Tidal Lagoon project, **discuss** and **evaluate** the environmental impact.\n\nIn your answer you should include:\n- the impacts on marine life and the intertidal ecosystem\n- the impacts on the wider coastal landscape\n- the impacts from a global perspective\n- a concluding appraisal',
        marks: 14,
        ph: 'Marine: positive = renewable, reliable, predictable; negative = disrupts migratory fish (salmon, eels), changes sediment flow, alters salinity in lagoon. Coastal: 9.5 km seawall changes coastal appearance; boating access affected; lagoon creates new habitats (bird feeding). Global: 320 MW capacity, replaces ~140,000 tonnes CO₂/year; concrete seawall construction emits significant CO₂. Conclusion: tidal lagoon is a reliable, low-carbon energy source but causes irreversible changes to marine and intertidal ecosystems; biodiversity mitigation plans must be implemented...',
      },
    ],
  },
]
