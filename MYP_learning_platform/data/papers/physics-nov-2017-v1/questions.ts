import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2017/'

export const paperMeta = {
  id: 'physics-nov-2017-v1',
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
        text: 'A polythene strip is rubbed with a dry cloth. The strip becomes negatively charged. **Explain** how the polythene strip becomes negatively charged.',
        marks: 1,
        ph: 'Electrons were transferred from the cloth to the polythene strip (accept: electrons moved from cloth to strip).',
      },
      {
        label: 'c',
        text: 'Two polythene strips, each rubbed with a dry cloth, are placed close together. **Predict** what will happen and **explain why**.',
        marks: 2,
        ph: 'There will be repulsion / they will repel each other, because the two strips have the same (negative) charge.',
      },
      {
        label: 'd',
        text: '**Justify** what would happen if the two polythene strips were to touch.',
        marks: 1,
        ph: 'Nothing would happen / no particles would exchange, because both strips have the same charge.',
      },
    ],
  },

  // ── Q2: Snowflakes — Forces & Momentum (12 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 12,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A snowflake falls from a cloud that is 720 m above the ground.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'momentum', 'free fall', 'forces'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the theoretical maximum velocity of the snowflake before it hits the ground. Assume that the acceleration due to gravity, *g*, is equal to 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'v² = u² + 2as → v² = 0 + 2×10×720 = 14400 → v = 120 ms⁻¹',
      },
      {
        label: 'b',
        text: 'The snowflake does not reach this theoretical maximum speed — instead it reaches the **terminal velocity**.\n\n**Select** the free body diagram that shows the forces acting on the snowflake when it reaches its terminal velocity.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        figImages: [`${P}q2b-fbd-options.png`],
        ph: 'Select Diagram 1 (equal upward and downward arrows — balanced forces at terminal velocity)',
      },
      {
        label: 'c',
        text: '**Label** the forces A and B acting on the snowflake shown in the diagram.',
        marks: 1,
        figImages: [`${P}q2c-forces-label.png`],
        ph: 'Force A (upward) = air resistance / drag. Force B (downward) = weight / gravitational force.',
      },
      {
        label: 'd',
        text: 'A typical snowflake has a mass of 5.0 × 10⁻⁵ kg. **State** the mass of the snowflake in grams (g).',
        marks: 1,
        ph: '0.05 g / 5.0 × 10⁻² g',
      },
      {
        label: 'e',
        text: 'Use your answers to part (a) and part (d) to **calculate** the maximum final theoretical momentum of the snowflake. Include the unit in your answer.',
        marks: 2,
        ph: 'p = mv = 5.0 × 10⁻⁵ × 120 = 6.0 × 10⁻³ kg ms⁻¹',
      },
      {
        label: 'f',
        text: 'A student reads that the terminal velocity of a snowflake is determined by its radius. The student makes the prediction: *"The terminal velocity of a snowflake is proportional to the radius of the snowflake because the weight will be larger."*\n\nThe graph shows terminal velocity vs radius for measured snowflakes.\n\n**Discuss** the validity of the hypothesis.',
        marks: 2,
        figImages: [`${P}q2f-terminal-vel-graph.png`],
        ph: 'The graph should be a straight line through the origin for proportionality. As a straight line could not be drawn through all points, the hypothesis is incorrect / not fully supported.',
      },
      {
        label: 'g',
        text: 'A second student measures the terminal velocity of **ice pellets** and plots **terminal velocity squared** vs **radius** (shown below).\n\n**Explain** what these results show about the relationship between the radius of ice pellets and terminal velocity.',
        marks: 2,
        figImages: [`${P}q2g-hailstones-graph.png`],
        ph: 'The graph shows a straight line through the origin. Therefore v² is proportional to the radius of the ice pellet (v² ∝ r).',
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
    stem: 'A flow of charge around a circuit allows us to transfer energy. The circuit diagram shows a simple circuit with a battery, bulb, ammeter (0.3 A) and voltmeter (9 V).',
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
        ph: 'P = VI = 9 × 0.3 = 2.7 W',
      },
      {
        label: 'c',
        text: '**Calculate** the charge which flows through the bulb in 150 seconds.',
        marks: 1,
        ph: 'Q = It = 0.3 × 150 = 45 C',
      },
      {
        label: 'd',
        text: 'The circuit now has a **variable resistor** added in series. Changing the resistance of the variable resistor changes the brightness of the bulb.\n\n**Explain** why changing the resistance will affect the brightness of the bulb.',
        marks: 5,
        figImages: [`${P}q3d-var-resistor.png`],
        ph: 'Total resistance increases → current smaller (I = V/R, fixed V) → bulb draws smaller current → brightness decreases because brightness is related to current/power. OR: voltage drops across resistor → voltage across bulb decreases → brightness decreases.',
      },
      {
        label: 'e',
        text: 'The graph shows the costs of different types of light bulbs over time. Each bulb produces the same level of brightness.\n\nUse information from the table and the graph to **justify** why LED bulbs are more economical over the long term, even though they are more expensive to buy. Refer to the gradients, the y-intercepts, and the intersections of lines.',
        marks: 4,
        figImages: [`${P}q3e-bulb-cost-graph.png`],
        ph: 'LED gradient is shallowest (lowest running cost per hour, fewest watts). LED y-intercept is highest (most expensive to buy). LED line crosses filament/halogen lines early → becomes cheaper after relatively few hours. Overall LED is cheapest long term.',
      },
      {
        label: 'f',
        text: '**Suggest** one extra piece of information not included in the graph or table that you would need to reach a final judgement about which bulb is most economical.',
        marks: 1,
        ph: 'Life span of the bulb / how long each type of bulb lasts before needing replacement.',
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
        text: 'If 0.30 g of water evaporates from a container in 15 minutes, **calculate** the rate of evaporation. Give your answer in g h⁻¹.',
        marks: 3,
        ph: 'Rate = 0.30/15 min × 60 = 1.20 g h⁻¹',
      },
      {
        label: 'c',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the surface area increases, the rate of evaporation will increase. Because water molecules have a greater area from which to escape / more particles can escape at one time. Proportional prediction.',
      },
      {
        label: 'd',
        text: '**Identify** the independent variable and dependent variable, and **name two control variables** for this experiment.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Mass of water', 'Water temperature', 'Air temperature', 'Time', 'Surface area', 'Type of liquid', 'Movement of air above liquid'],
        ph: 'IV: Surface area. DV: Mass of water evaporated. CV (any 2): Time, type of liquid, water temperature, air temperature, air movement.',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect for this experiment. Include the number of increments of the independent variable and how many times you will repeat each measurement.',
        marks: 3,
        ph: 'Measure mass evaporated for at least 5 different surface areas. Repeat each at least 3 times; calculate mean.',
      },
      {
        label: 'f',
        text: 'The whole class collected their data and presented it in the following graph (mass evaporated vs area of dish).\n\n**Describe** the relationship shown in the graph.',
        marks: 2,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'As area increases, mass evaporated increases proportionally. Linear relationship through (approximately) zero.',
      },
      {
        label: 'g',
        text: '**Determine** the constant of proportionality from the graph. Give your answer in g cm⁻².',
        marks: 3,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'Gradient k ≈ 0.0200 g cm⁻² (calculated from two well-spaced points on the line).',
      },
      {
        label: 'h',
        text: 'A pond has a surface area of 6 m² (60 000 cm²). Using your answer from part (g), **calculate** the mass of water lost from this pond in an hour.',
        marks: 3,
        ph: 'Mass = k × area = 0.0200 × 60 000 = 1200 g ≈ 1.2 kg',
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
        ph: 'As temperature increases, rate of evaporation increases. Because molecules have greater kinetic energy → more can escape the surface per unit time.',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable and **name one control variable** for this investigation.',
        marks: 2,
        ph: 'IV: temperature of liquid. CV (any one): surface area, type of liquid, air speed, volume of liquid.',
      },
    ],
  },

  // ── Q6: Mount Fuji — Boiling Point vs Altitude (10 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 10,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student living in Japan decides to investigate if there is a relationship between the altitude (height above sea level) and the boiling point of water. She climbs Mount Fuji recording the temperature at which water boils at different altitudes, from the base of the mountain to the summit.',
    figImages: [`${P}q6-kilimanjaro.png`],
    tags: { unit: 'thermal-physics', topics: ['boiling point', 'altitude', 'pressure', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student forgot to label the table correctly. **Write** the correct column headings (Heading 1 and Heading 2) for the results table. At 2700 m, the student did not record a temperature but took a photo of the thermometer.\n\n**Measure** the temperature shown in the photograph and add it to the results table.',
        marks: 3,
        figImages: [`${P}q6a-data-table.png`, `${P}q6-kilimanjaro.png`],
        ph: 'Heading 1: Altitude / height (m). Heading 2: Boiling point / temperature (°C). Temperature at 2700 m = 91.5°C.',
      },
      {
        label: 'b',
        text: '**Describe** the type of graph that would be most appropriate to display this data, and **justify** your choice.',
        marks: 2,
        ph: 'A line graph would be most appropriate because both altitude and boiling point are continuous variables. A bar chart is for categorical/discrete data.',
      },
      {
        label: 'c',
        text: 'The student plots the data on a graph. **Identify** which altitude produced an anomalous result and **justify** your answer.',
        marks: 2,
        figImages: [`${P}q6c-anomalous-graph.png`],
        ph: '1600 m produced the anomalous result. This value does not lie on the line of best fit / is inconsistent with surrounding data points.',
      },
      {
        label: 'd',
        text: 'The student analyses the graph. **Describe** the relationship between altitude and boiling point of water.',
        marks: 2,
        ph: 'As altitude increases, the boiling point of water decreases. This is a linear relationship.',
      },
      {
        label: 'e',
        text: '**Explain**, using particle theory, why water boils at a lower temperature at higher altitudes.',
        marks: 1,
        ph: 'At higher altitudes air pressure is lower. Fewer air particles above the surface means water molecules need less energy to escape → lower boiling temperature.',
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
        ph: 'IV = air pressure (vacuum pump), DV = boiling point. CV: type of liquid, volume, container. Equipment: thermometer, vacuum pump with pressure gauge, sealed vessel, heater. Method: Set pressure → heat liquid → record boiling point → repeat. 5 pressures × 3 trials each.',
      },
    ],
  },

  // ── Q8: Troglodyte Housing & Evaporative Cooling Features (13 marks, Criterion D) ──
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
        text: 'It has been suggested that **fibre optic light guides** can be used for daylighting in underground houses.\n\n**State two advantages** and **two disadvantages** of using fibre optic light guides for lighting.',
        marks: 4,
        ph: 'Advantages (any 2): natural daylight; no electricity for lighting; low heat emission; flexible routing.\nDisadvantages (any 2): only works in daytime; expensive to install; limited intensity at long distances; requires maintenance/cleaning.',
      },
      {
        label: 'b',
        text: 'It has been suggested that indoor garden courtyards with fountains can also be used for air cooling in domestic houses. You are an architect and your client wants to create an innovative and environmentally friendly house in a hot country.\n\n**Discuss and evaluate** the implications of using indoor garden courtyards in your design. In your answer, you should include:\n- strengths of using garden courtyards\n- limitations of using garden courtyards\n- wider implications for the environment\n- economic considerations\n- a concluding appraisal of whether you would recommend garden courtyards.',
        marks: 9,
        ph: 'Strengths: natural cooling via plant transpiration and evaporation; aesthetics; improved air quality; no electricity for cooling. Limitations: water supply; humidity; structural requirements; maintenance. Environmental: reduces AC use → lower CO₂; BUT uses water and land. Economic: higher construction cost vs lower running cost. Conclusion: beneficial in hot dry climates with water access; not ideal for humid climates.',
      },
    ],
  },
]
