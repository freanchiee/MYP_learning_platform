import type { Question } from '@/lib/types'

const P = '/images/papers/physics-nov-2017/'

export const paperMeta = {
  id: 'physics-nov-2017',
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
        text: 'A piece of nylon is rubbed with a cloth. The nylon becomes negatively charged. **Explain** how the nylon becomes negatively charged.',
        marks: 1,
        ph: 'Electrons were transferred from the cloth to the nylon (accept: electrons moved from cloth to nylon).',
      },
      {
        label: 'c',
        text: 'Two pieces of nylon, each rubbed with a cloth, are placed close together. **Predict** what will happen and **explain why**.',
        marks: 2,
        ph: 'There will be repulsion / they will repel each other, because the two pieces of nylon have the same (negative) charge.',
      },
      {
        label: 'd',
        text: '**Justify** what would happen if the two nylon pieces were to touch.',
        marks: 1,
        ph: 'Nothing would happen / no particles would exchange, because the nylon pieces have the same charge.',
      },
    ],
  },

  // ── Q2: Raindrops — Forces & Momentum (12 marks, Criterion A/C) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 12,
    stem: 'A raindrop falls from a cloud that is 500 m above the ground.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'momentum', 'free fall', 'forces'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the theoretical maximum velocity of the raindrop before it hits the ground. Assume that the acceleration due to gravity, *g*, is equal to 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'v² = u² + 2as → v² = 0 + 2×10×500 = 10000 → v = 100 ms⁻¹ (or: mgh = ½mv² → v = √(2gh) = √10000 = 100 ms⁻¹)',
      },
      {
        label: 'b',
        text: 'The raindrop does not reach this theoretical maximum speed — instead it reaches the **terminal velocity**.\n\n**Select** the free body diagram that shows the forces acting on the raindrop when it reaches its terminal velocity.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        figImages: [`${P}q2b-fbd-options.png`],
        ph: 'Select Diagram 1 (equal upward and downward arrows — balanced forces at terminal velocity)',
      },
      {
        label: 'c',
        text: '**Label** the forces A and B acting on the raindrop shown in the diagram.',
        marks: 1,
        figImages: [`${P}q2c-forces-label.png`],
        ph: 'Force A (upward) = air resistance / drag. Force B (downward) = weight / gravitational force.',
      },
      {
        label: 'd',
        text: 'A typical raindrop has a mass of 3.0 × 10⁻⁵ kg. **State** the mass of the raindrop in grams (g).',
        marks: 1,
        ph: '0.03 g / 3.0 × 10⁻² g',
      },
      {
        label: 'e',
        text: 'Use your answers to part (a) and part (d) to **calculate** the maximum final theoretical momentum of the raindrop. Include the unit in your answer.',
        marks: 2,
        ph: 'p = mv = 3.0 × 10⁻⁵ × 100 = 3.0 × 10⁻³ kg ms⁻¹ (or: p = 0.03 g × 100 ms⁻¹ = 3 g ms⁻¹)',
      },
      {
        label: 'f',
        text: 'A student reads that the terminal velocity of a raindrop is determined by its radius. The student makes the prediction: *"The terminal velocity of a raindrop is proportional to the radius of the raindrop because the weight will be larger."*\n\nThe graph shows terminal velocity vs radius for measured raindrops.\n\n**Discuss** the validity of the hypothesis.',
        marks: 2,
        figImages: [`${P}q2f-terminal-vel-graph.png`],
        ph: 'The graph should be a straight line through the origin for proportionality. As a straight line could not be drawn through all points, the hypothesis is incorrect / not fully supported.',
      },
      {
        label: 'g',
        text: 'A second student measures the terminal velocity of **hailstones** and plots **terminal velocity squared** vs **radius** (shown below).\n\n**Explain** what these results show about the relationship between the radius of hailstones and terminal velocity.',
        marks: 2,
        figImages: [`${P}q2g-hailstones-graph.png`],
        ph: 'The graph shows a straight line through the origin. Therefore v² is proportional to the radius of the hailstone (v² ∝ r).',
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
    stem: 'A flow of charge around a circuit allows us to transfer energy. The circuit diagram shows a simple circuit with a battery, bulb, ammeter (0.5 A) and voltmeter (12 V).',
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
        ph: 'P = VI = 12 × 0.5 = 6 W',
      },
      {
        label: 'c',
        text: '**Calculate** the charge which flows through the bulb in 100 seconds.',
        marks: 1,
        ph: 'Q = It = 0.5 × 100 = 50 C',
      },
      {
        label: 'd',
        text: 'The circuit now has a **variable resistor** added in series. Changing the resistance of the variable resistor changes the brightness of the bulb.\n\n**Explain** why changing the resistance will affect the brightness of the bulb.',
        marks: 5,
        figImages: [`${P}q3d-var-resistor.png`],
        ph: 'The total resistance in the circuit increases → the current flowing will be smaller (I = V/R, and voltage from battery is fixed) → (as components are in series) the bulb draws a smaller current → brightness decreases because brightness is related to current/power. OR: voltage drops across the resistor → voltage across the bulb decreases → brightness decreases as brightness related to voltage.',
      },
      {
        label: 'e',
        text: 'The graph shows the costs of different types of light bulbs over time. Each bulb produces the same level of brightness.\n\nUse information from the table and the graph to **justify** why LED bulbs are more economical over the long term, even though they are more expensive to buy. Refer to the gradients, the y-intercepts, and the intersections of lines.',
        marks: 4,
        figImages: [`${P}q3e-bulb-cost-graph.png`],
        ph: 'LED gradient (running cost rate) is shallowest because LEDs use only 4W (lowest power → least energy → cheapest to run). LED y-intercept is highest (most expensive to buy). LED line intersects filament/halogen lines early, meaning LED becomes cheaper overall after relatively few hours. LED bulbs are cheapest in the long run because their running costs are far lower than halogen (18W) or filament (25W) bulbs.',
      },
      {
        label: 'f',
        text: '**Suggest** one extra piece of information not included in the graph or table that you would need to reach a final judgement about which bulb is most economical.',
        marks: 1,
        ph: 'Life span of the bulb / how long each type of bulb lasts before needing replacement.',
      },
    ],
  },

  // ── Q4: Evaporation Investigation — Surface Area (21 marks, B/A/C/D) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 21,
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
        text: 'If 0.25 g of water evaporates from a container in 12 minutes, **calculate** the rate of evaporation. Give your answer in g h⁻¹.',
        marks: 3,
        ph: 'Rate = mass/time = 0.25/12 min = convert to per hour: 0.25/12 × 60 = 1.25 g h⁻¹',
      },
      {
        label: 'c',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the surface area increases, the rate of evaporation (mass evaporated) will increase. Because the water molecules/particles have a greater area from which to escape the surface / more collisions at surface / more particles can escape at one time. Proportional prediction: as area doubles, mass evaporated doubles.',
      },
      {
        label: 'd',
        text: '**Identify** the independent variable and dependent variable, and **name two control variables** for this experiment.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Mass of water', 'Water temperature', 'Air temperature', 'Time', 'Surface area', 'Type of liquid', 'Movement of air above liquid'],
        ph: 'Independent: Surface area. Dependent: Mass of water (evaporated). Control variables: Time (duration), Type of liquid, Water temperature, Air temperature, Movement of air above liquid (any two).',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect for this experiment. Include the number of increments of the independent variable and how many times you will repeat each measurement.',
        marks: 3,
        ph: 'Measure mass evaporated for at least 5 different surface areas (e.g. dish diameters/radii). Measure both the mass AND the diameter/radius of each dish. Repeat each measurement at least 3 times to allow a mean to be calculated.',
      },
      {
        label: 'f',
        text: 'The whole class collected their data and presented it in the following graph (mass evaporated vs area of dish).\n\n**Describe** the relationship shown in the graph.',
        marks: 2,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'As the area increases, the mass of water evaporated increases (proportionally). The mass evaporated is proportional to area / there is a linear relationship that goes through (approximately) zero.',
      },
      {
        label: 'g',
        text: '**Determine** the constant of proportionality from the graph. Give your answer in g cm⁻².',
        marks: 3,
        figImages: [`${P}q4f-evap-graph.png`],
        ph: 'Gradient = Δy/Δx from two well-spaced points on the line. k ≈ 0.0284 g cm⁻² (units not required for full marks)',
      },
      {
        label: 'h',
        text: 'A pond has a surface area of 4 m² (40 000 cm²). Using your answer from part (g), **calculate** the mass of water lost from this pond in an hour.',
        marks: 3,
        ph: 'Mass = k × area = 0.0284 × 40 000 = 1136 g ≈ 1.1 kg (accept 1.0–1.2 kg)',
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
    stem: 'A student wants to investigate the effect of **temperature** on the **rate of evaporation** of a liquid.',
    tags: { unit: 'thermal-physics', topics: ['evaporation', 'temperature', 'variables', 'hypothesis'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the question that could be answered in this investigation.',
        marks: 1,
        ph: 'How does the temperature affect the rate of evaporation (or mass evaporated in an hour)?',
      },
      {
        label: 'b',
        text: '**Formulate and explain** a hypothesis that this question would test.',
        marks: 3,
        ph: 'As temperature increases, the rate of evaporation increases. Because at higher temperatures, the water molecules/particles have greater velocity/energy, so they find it easier to escape from the surface / more particles have sufficient energy to escape. Quantitative: doubling the temperature doubles the rate of evaporation.',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable and **name one control variable** for this investigation.',
        marks: 2,
        ph: 'Independent variable: temperature (of the liquid / air). Control variable (any one): type of liquid / air speed / surface area of dish / mass of liquid at start.',
      },
    ],
  },

  // ── Q6: Kilimanjaro — Boiling Point vs Altitude (10 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 10,
    stem: 'A student living in Tanzania decides to investigate if there is a relationship between the altitude (height above sea level) and the boiling point of water. She climbs Mount Kilimanjaro recording the temperature at which water boils at different altitudes, from the bottom of the mountain to the top.',
    figImages: [`${P}q6-kilimanjaro.png`],
    tags: { unit: 'thermal-physics', topics: ['boiling point', 'altitude', 'pressure', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student forgot to label the table correctly. **Write** the correct column headings (Heading 1 and Heading 2) for the results table. At 5200 m, the student did not record a temperature but took a photo of the thermometer.\n\n**Measure** the temperature shown in the photograph and add it to the results table.',
        marks: 3,
        figImages: [`${P}q6a-data-table.png`, `${P}q6-kilimanjaro.png`],
        ph: 'Heading 1: Altitude / height (m). Heading 2: Boiling point / temperature (°C). Temperature at 5200 m = 83.5°C.',
      },
      {
        label: 'b',
        text: '**Describe** the type of graph that would be most appropriate to display this data, and **justify** your choice.',
        marks: 2,
        ph: 'A line graph would be most appropriate. A bar chart is used for discrete/categorical data; a line graph is used when there is a continuous relationship between two variables (altitude and boiling point are both continuous). OR: A line of best fit can be drawn to show the relationship and identify anomalies.',
      },
      {
        label: 'c',
        text: 'The student plots the data on a graph. **Identify** which altitude produced an anomalous result and **justify** your answer.',
        marks: 2,
        figImages: [`${P}q6c-anomalous-graph.png`],
        ph: '3700 m produced the anomalous result (88.0°C). This value does not lie on the line of best fit / is inconsistent with the surrounding values (3200m→89.5°C and 4200m→90.0°C are both higher; 3700 should be between these).',
      },
      {
        label: 'd',
        text: 'The student analyses the graph. **Describe** the relationship between altitude and boiling point of water.',
        marks: 2,
        ph: 'As altitude increases, the boiling point of water decreases. This is a linear relationship (straight line relationship).',
      },
      {
        label: 'e',
        text: '**Explain**, using particle theory, why water boils at a lower temperature at higher altitudes.',
        marks: 1,
        ph: 'At higher altitudes there are fewer air particles (lower air pressure). Water particles need sufficient energy to escape the surface; at lower pressure fewer collisions prevent them from escaping, so less energy (lower temperature) is needed to boil.',
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
    stem: 'A student wants to design a laboratory investigation to test if the altitude (air pressure) affects the boiling point of a liquid. The student has access to a laboratory vacuum pump that can reduce the air pressure in a sealed container.',
    tags: { unit: 'thermal-physics', topics: ['experimental design', 'variables', 'boiling point', 'pressure'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how **altitude (air pressure)** affects the **boiling point** of a liquid.\n\nIn your answer, include:\n- The **independent and dependent variables**, and at least **two justified control variables**\n- The **equipment** needed, including how to measure both variables\n- A complete **method** that another student could follow\n- A **data collection plan** with an appropriate number of measurements and repeats',
        marks: 17,
        ph: 'Variables: IV = air pressure / altitude (simulate with vacuum pump); DV = boiling point/temperature. CV: type of liquid (same water), volume of liquid, container/vessel (same), starting temperature.\nEquipment: thermometer/temperature probe, vacuum pump with pressure gauge, sealed container, heat source/Bunsen burner, ruler or altimeter.\nMethod: Set vacuum pump to first pressure. Heat liquid and record temperature when it boils. Repeat for at least 5 different pressures. Carry out 3 trials for each pressure.\nData: At least 5 different pressure/altitude values; 3 repeats; calculate mean boiling point for each.',
      },
    ],
  },

  // ── Q8: Underground Housing & Solar Tubes (13 marks, Criterion D) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 13,
    stem: 'Humans need shelter every night and that means they have been looking for a temperate place to live for centuries. Hundreds of years ago, one method of keeping houses warm in winter was to build part of the construction underground or inside mountains. Italy, Canada and the United States have examples of these constructions which are, in general, named dugouts.\n\nNowadays extreme temperatures in some cities means that large quantities of energy are used in air conditioners or heaters to keep people at comfortable temperatures. One way we could reduce the use of energy in cities is to build accommodation underground.',
    tags: { unit: 'thermal-physics', topics: ['thermal insulation', 'solar energy', 'sustainability', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'It has been suggested that **solar tubes** can be used for lighting in underground houses.\n\n**State two advantages** and **two disadvantages** of using solar tubes for lighting.',
        marks: 4,
        ph: 'Advantages (any 2): free light / natural light / no light bulbs needed / no electricity supply needed.\nDisadvantages (any 2): limited range — light cannot travel far / hole required in roof for solar tube / only suitable for daytime use / external surface needs cleaning.',
      },
      {
        label: 'b',
        text: 'It has been suggested that water features can also be used for air cooling in domestic houses. You are an architect and your client wants to create an innovative and environmentally friendly house in a hot country.\n\n**Discuss and evaluate** the implications of using water features in your design. In your answer, you should include:\n- strengths of using water features in the home\n- limitations of using water features in the home\n- wider implications for the environment\n- economic considerations\n- a concluding appraisal of whether you would recommend water features.',
        marks: 9,
        ph: 'Strengths: evaporation of water cools air naturally / no electricity needed / sustainable / aesthetic. Limitations: needs constant water supply / humidity increases → discomfort / structural moisture risk / maintenance. Environmental: reduces electricity demand (lower CO₂), BUT uses water (scarce resource in hot countries). Economic: low running cost but installation cost; water bills may increase. Conclusion: water features are recommended for hot dry climates with adequate water supply, as natural cooling outweighs limitations; not ideal for humid climates.',
      },
    ],
  },
]
