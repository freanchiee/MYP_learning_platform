import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2017/'

export const paperMeta = {
  id: 'physics-nov-2017-v2',
  subject: 'Physics',
  session: 'November',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Atoms & Static Electricity (7 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'atomic-physics',
    marks: 7,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Atoms are made up of particles called protons, neutrons and electrons, which are responsible for the mass and charge of atoms.',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'static electricity', 'charge'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the statements below.\n\nA proton is a particle found in the **[nucleus/orbitals]** of an atom. It has a relative mass of **[1/0]** and a charge of +1.\n\nA neutron is a particle found in the **[nucleus/orbitals]** of an atom. It has a relative mass of 1 and a charge of **[+1/0/−1]**.\n\nAn electron is a particle found in the **[nucleus/orbitals]** of an atom. It has a relative mass of **[1/0]** and a charge of **[+1/0/−1]**.',
        marks: 3,
        ph: 'Proton: nucleus, mass 1, charge +1. Neutron: nucleus, mass 1, charge 0. Electron: orbitals, mass 0, charge −1.',
      },
      {
        label: 'b',
        text: 'A PVC pipe is rubbed with a silk cloth. The pipe becomes negatively charged. **Explain** how the PVC pipe becomes negatively charged.',
        marks: 1,
        ph: 'Electrons were transferred from the silk cloth to the PVC pipe.',
      },
      {
        label: 'c',
        text: 'Two PVC pipes, each rubbed with a silk cloth, are placed close together. **Predict** what will happen and **explain why**.',
        marks: 2,
        ph: 'There will be repulsion / they will repel each other, because the two pipes have the same (negative) charge.',
      },
      {
        label: 'd',
        text: '**Justify** what would happen if the two PVC pipes were to touch.',
        marks: 1,
        ph: 'Nothing would happen / no particles would exchange, because both pipes have the same charge.',
      },
    ],
  },

  // ── Q2: Hailstones — Forces & Momentum (12 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 12,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A hailstone falls from a cloud that is 320 m above the ground.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'momentum', 'free fall', 'forces'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the theoretical maximum velocity of the hailstone before it hits the ground. Assume that the acceleration due to gravity, *g*, is equal to 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'v² = u² + 2as → v² = 0 + 2×10×320 = 6400 → v = 80 ms⁻¹',
      },
      {
        label: 'b',
        text: 'The hailstone does not reach this theoretical maximum speed — instead it reaches the **terminal velocity**.\n\n**Select** the free body diagram that shows the forces acting on the hailstone when it reaches its terminal velocity.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        figImages: [`${P}q2b-fbd-options.png`],
        ph: 'Select Diagram 1 (equal upward and downward arrows — balanced forces at terminal velocity)',
      },
      {
        label: 'c',
        text: '**Label** the forces A and B acting on the hailstone shown in the diagram.',
        marks: 1,
        figImages: [`${P}q2c-forces-label.png`],
        ph: 'Force A (upward) = air resistance / drag. Force B (downward) = weight / gravitational force.',
      },
      {
        label: 'd',
        text: 'A typical hailstone has a mass of 4.0 × 10⁻⁵ kg. **State** the mass of the hailstone in grams (g).',
        marks: 1,
        ph: '0.04 g / 4.0 × 10⁻² g',
      },
      {
        label: 'e',
        text: 'Use your answers to part (a) and part (d) to **calculate** the maximum final theoretical momentum of the hailstone. Include the unit in your answer.',
        marks: 2,
        ph: 'p = mv = 4.0 × 10⁻⁵ × 80 = 3.2 × 10⁻³ kg ms⁻¹',
      },
      {
        label: 'f',
        text: 'A student reads that the terminal velocity of a hailstone is determined by its radius. The student makes the prediction: *"The terminal velocity of a hailstone is proportional to the radius of the hailstone because the weight will be larger."*\n\nThe graph shows terminal velocity vs radius for measured hailstones.\n\n**Discuss** the validity of the hypothesis.',
        marks: 2,
        figImages: [`${P}q2f-terminal-vel-graph.png`],
        ph: 'For proportionality the graph should be a straight line through the origin. As a straight line cannot be drawn through all points, the hypothesis is incorrect / not fully supported.',
      },
      {
        label: 'g',
        text: 'A second student measures the terminal velocity of **ice spheres** and plots **terminal velocity squared** vs **radius** (shown below).\n\n**Explain** what these results show about the relationship between the radius of ice spheres and terminal velocity.',
        marks: 2,
        figImages: [`${P}q2g-hailstones-graph.png`],
        ph: 'The graph shows a straight line through the origin. Therefore v² is directly proportional to radius (v² ∝ r).',
      },
    ],
  },

  // ── Q3: Electricity & Light Bulbs (14 marks, Criterion A/D) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'electricity-circuits',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A flow of charge around a circuit allows us to transfer energy. The circuit diagram shows a simple circuit with a battery, bulb, ammeter (0.6 A) and voltmeter (15 V).',
    figImages: [`${P}q3-circuit.png`],
    tags: { unit: 'electricity-circuits', topics: ['energy transfer', 'power', 'charge', 'resistance'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** appropriate terms and **organise** them into a sequence to show the energy changes taking place in the circuit.\n\nDraggable items: nuclear / light / electrical / sound / chemical',
        marks: 1,
        ph: 'chemical → electrical → light',
      },
      {
        label: 'b',
        text: '**Calculate** the power transferred to the bulb in the circuit. Include the unit in your answer.',
        marks: 2,
        ph: 'P = VI = 15 × 0.6 = 9.0 W',
      },
      {
        label: 'c',
        text: '**Calculate** the charge which flows through the bulb in 80 seconds.',
        marks: 1,
        ph: 'Q = It = 0.6 × 80 = 48 C',
      },
      {
        label: 'd',
        text: 'The circuit now has a **variable resistor** added in series. Changing the resistance of the variable resistor changes the brightness of the bulb.\n\n**Explain** why changing the resistance will affect the brightness of the bulb.',
        marks: 5,
        figImages: [`${P}q3d-var-resistor.png`],
        ph: 'Total resistance increases → current decreases (I = V/R, fixed V) → less current through bulb → power decreases → brightness decreases. OR: voltage drops across resistor → voltage across bulb decreases → brightness decreases.',
      },
      {
        label: 'e',
        text: 'The graph shows the costs of different types of light bulbs over time. Each bulb produces the same level of brightness.\n\nUse information from the table and the graph to **justify** why LED bulbs are more economical over the long term, even though they are more expensive to buy. Refer to the gradients, the y-intercepts, and the intersections of lines.',
        marks: 4,
        figImages: [`${P}q3e-bulb-cost-graph.png`],
        ph: 'LED gradient shallowest (lowest running cost). LED y-intercept highest (most expensive to buy). LED line intersects halogen/filament lines early → cheapest overall after relatively few hours.',
      },
      {
        label: 'f',
        text: '**Suggest** one extra piece of information not included in the graph or table that you would need to reach a final judgement about which bulb is most economical.',
        marks: 1,
        ph: 'Life span of the bulb / how long each type lasts before replacement.',
      },
    ],
  },

  // ── Q4: Evaporation Investigation — Surface Area (21 marks, Criterion B) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 21,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'The video shows how the particles in a liquid leave the surface and become gas particles when the liquid evaporates.\n\nMany different factors affect the rate at which a liquid evaporates. You have been asked to investigate the effect that **surface area** has on the **mass of liquid evaporated in an hour**.',
    tags: { unit: 'thermal-physics', topics: ['evaporation', 'surface area', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the question that could be answered in this scientific investigation.',
        marks: 1,
        ph: 'How does the surface area affect the mass of liquid evaporated (in an hour)?',
      },
      {
        label: 'b',
        text: 'If 0.48 g of water evaporates from a container in 16 minutes, **calculate** the rate of evaporation. Give your answer in g h⁻¹.',
        marks: 3,
        ph: 'Rate = 0.48/16 × 60 = 1.80 g h⁻¹',
      },
      {
        label: 'c',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As surface area increases, rate of evaporation increases. More surface area means more molecules can escape the surface per unit time.',
      },
      {
        label: 'd',
        text: '**Identify** the independent variable and dependent variable, and **name two control variables** for this experiment.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Mass of water', 'Water temperature', 'Air temperature', 'Time', 'Surface area', 'Type of liquid', 'Movement of air above liquid'],
        ph: 'IV: Surface area. DV: Mass of water evaporated. CV (any 2): Time, type of liquid, temperature, air movement.',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect for this experiment. Include the number of increments of the independent variable and how many times you will repeat each measurement.',
        marks: 3,
        ph: 'At least 5 different surface areas; repeat each at least 3 times; calculate mean.',
      },
      {
        label: 'f',
        text: 'The whole class collected their data and presented it in the following graph (mass evaporated vs area of dish).\n\n**Describe** the relationship shown in the graph.',
        marks: 2,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'Mass evaporated increases proportionally with area. Linear relationship through (approximately) zero.',
      },
      {
        label: 'g',
        text: '**Determine** the constant of proportionality from the graph. Give your answer in g cm⁻².',
        marks: 3,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'k = gradient ≈ 0.0350 g cm⁻² (from two well-spaced points on the line).',
      },
      {
        label: 'h',
        text: 'A reservoir has a surface area of 8 m² (80 000 cm²). Using your answer from part (g), **calculate** the mass of water lost from this reservoir in an hour.',
        marks: 3,
        ph: 'Mass = k × area = 0.0350 × 80 000 = 2800 g = 2.8 kg',
      },
    ],
  },

  // ── Q5: Temperature & Evaporation — Short Inquiry (6 marks, Criterion B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 6,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student wants to investigate the effect of **temperature** on the **rate of evaporation** of a liquid.',
    tags: { unit: 'thermal-physics', topics: ['evaporation', 'temperature', 'variables', 'hypothesis'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the question that could be answered in this investigation.',
        marks: 1,
        ph: 'How does the temperature affect the rate of evaporation?',
      },
      {
        label: 'b',
        text: '**Formulate and explain** a hypothesis that this question would test.',
        marks: 3,
        ph: 'As temperature increases, rate of evaporation increases. At higher temperature, molecules have more kinetic energy → more escape surface per unit time.',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable and **name one control variable** for this investigation.',
        marks: 2,
        ph: 'IV: temperature of liquid. CV (any one): surface area, type of liquid, air speed, volume of liquid.',
      },
    ],
  },

  // ── Q6: Mont Blanc — Boiling Point vs Altitude (10 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 10,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student living in France decides to investigate if there is a relationship between the altitude (height above sea level) and the boiling point of water. She climbs Mont Blanc recording the temperature at which water boils at different altitudes, from the valley to the summit.',
    figImages: [`${P}q6-kilimanjaro.png`],
    tags: { unit: 'thermal-physics', topics: ['boiling point', 'altitude', 'pressure', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student forgot to label the table correctly. **Write** the correct column headings (Heading 1 and Heading 2) for the results table. At 3100 m, the student did not record a temperature but took a photo of the thermometer.\n\n**Measure** the temperature shown in the photograph and add it to the results table.',
        marks: 3,
        figImages: [`${P}q6a-data-table.png`, `${P}q6-kilimanjaro.png`],
        ph: 'Heading 1: Altitude / height (m). Heading 2: Boiling point / temperature (°C). Temperature at 3100 m = 90.5°C.',
      },
      {
        label: 'b',
        text: '**Describe** the type of graph that would be most appropriate to display this data, and **justify** your choice.',
        marks: 2,
        ph: 'A line graph is appropriate because both altitude and boiling point are continuous variables. Bar charts are for categorical/discrete data.',
      },
      {
        label: 'c',
        text: 'The student plots the data on a graph. **Identify** which altitude produced an anomalous result and **justify** your answer.',
        marks: 2,
        figImages: [`${P}q6c-anomalous-graph.png`],
        ph: '2200 m produced the anomalous result. Its value does not lie on the line of best fit / is inconsistent with surrounding data points.',
      },
      {
        label: 'd',
        text: 'The student analyses the graph. **Describe** the relationship between altitude and boiling point of water.',
        marks: 2,
        ph: 'As altitude increases, boiling point of water decreases. Linear relationship.',
      },
      {
        label: 'e',
        text: '**Explain**, using particle theory, why water boils at a lower temperature at higher altitudes.',
        marks: 1,
        ph: 'At higher altitude air pressure is lower. Fewer air particles above surface → molecules need less energy to escape → lower boiling point.',
      },
    ],
  },

  // ── Q7: Boiling Point Investigation Design (17 marks, Criterion B — banded) ──
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 17,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student wants to design a laboratory investigation to test if the altitude (air pressure) affects the boiling point of a liquid. The student has access to a laboratory vacuum pump that can reduce the air pressure in a sealed container.',
    tags: { unit: 'thermal-physics', topics: ['experimental design', 'variables', 'boiling point', 'pressure'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how **altitude (air pressure)** affects the **boiling point** of a liquid.\n\nIn your answer, include:\n- The **independent and dependent variables**, and at least **two justified control variables**\n- The **equipment** needed, including how to measure both variables\n- A complete **method** that another student could follow\n- A **data collection plan** with an appropriate number of measurements and repeats',
        marks: 17,
        ph: 'IV = air pressure (vacuum pump), DV = boiling point. CV: type of liquid, volume, container. Equipment: thermometer, vacuum pump + gauge, sealed container, heater. Method: Set pressure → heat → record boiling temp → repeat. 5 pressures × 3 trials.',
      },
    ],
  },

  // ── Q8: Rammed-Earth Housing & Pond Cooling (13 marks, Criterion D) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 13,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Humans need shelter every night and that means they have been looking for a temperate place to live for centuries. Hundreds of years ago, one method of keeping houses warm in winter was to build part of the construction underground or inside mountains. Italy, Canada and the United States have examples of these constructions which are, in general, named dugouts.\n\nNowadays extreme temperatures in some cities means that large quantities of energy are used in air conditioners or heaters to keep people at comfortable temperatures. One way we could reduce the use of energy in cities is to build accommodation underground.',
    tags: { unit: 'thermal-physics', topics: ['thermal insulation', 'solar energy', 'sustainability', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'It has been suggested that **light shelves** (reflective horizontal panels near windows) can be used for daylighting in partially underground houses.\n\n**State two advantages** and **two disadvantages** of using light shelves for lighting.',
        marks: 4,
        ph: 'Advantages (any 2): redirect natural light deeper into rooms; reduce glare; no electricity for lighting; reduce heat gain from direct sunlight.\nDisadvantages (any 2): only work in daytime; effectiveness depends on orientation; limited to rooms near windows; structural installation needed.',
      },
      {
        label: 'b',
        text: 'It has been suggested that indoor reflective ponds can also be used for air cooling in domestic houses. You are an architect and your client wants to create an innovative and environmentally friendly house in a hot country.\n\n**Discuss and evaluate** the implications of using indoor ponds in your design. In your answer, you should include:\n- strengths of using indoor ponds\n- limitations of using indoor ponds\n- wider implications for the environment\n- economic considerations\n- a concluding appraisal of whether you would recommend indoor ponds.',
        marks: 9,
        ph: 'Strengths: evaporation cools air; no electricity; aesthetic; reflects light. Limitations: humidity increases; water supply needed; structural load; algae/maintenance risk. Environmental: reduces AC → less CO₂; uses water (scarce in hot countries). Economic: construction cost vs low running cost. Conclusion: beneficial in hot, dry climates with water access; not ideal for humid regions.',
      },
    ],
  },
]
