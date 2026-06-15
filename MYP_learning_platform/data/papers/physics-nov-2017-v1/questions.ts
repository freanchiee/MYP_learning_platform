import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — November 2017 · VARIANT 1  (isomorphic to physics-nov-2017)
// Same crit / command term / marks / task structure / tags / widgets throughout.
// Only the real-world context, numbers and (data-driven) artefacts change.
//   Q1 Atoms & static:   nylon strips → rubbed acrylic ruler (everyday)
//   Q2 Terminal velocity: raindrop (500 m) → hailstone (845 m)
//   Q3 Circuits & bulbs: 12 V/0.5 A lab bulb → 4 V/0.25 A torch bulb
//   Q4 Evaporation/area: water dishes → drying playground puddles (widget locked)
//   Q5 Evaporation/temp: generic liquid → drying wet laundry
//   Q6 Boiling vs alt:   Kilimanjaro → Mount Kenya
//   Q7 Crit B design:    vacuum-pump boiling point (kept)
//   Q8 Crit D essay:     solar tubes + water features → light pipes + roof pond
// ════════════════════════════════════════════════════════════════════════════

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
        text: 'An acrylic ruler is rubbed with a dry cloth. The ruler becomes negatively charged. **Explain** how the acrylic ruler becomes negatively charged.',
        marks: 1,
        ph: 'Electrons were transferred from the cloth to the acrylic ruler (accept: electrons moved from cloth to ruler).',
      },
      {
        label: 'c',
        text: 'Two acrylic rulers, each rubbed with a dry cloth, are held close together. **Predict** what will happen and **explain why**.',
        marks: 2,
        ph: 'There will be repulsion / they will repel each other, because both rulers carry the same (negative) charge.',
      },
      {
        label: 'd',
        text: '**Justify** what would happen if the two acrylic rulers were to touch.',
        marks: 1,
        ph: 'Nothing would happen / no particles would exchange, because both rulers have the same charge.',
      },
    ],
  },

  // ── Q2: Hailstone — Forces & Momentum (12 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'forces-interactions',
    marks: 12,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A hailstone forms inside a storm cloud and begins to fall from a height of 845 m above the ground.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'momentum', 'free fall', 'forces'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the theoretical maximum velocity of the hailstone before it hits the ground. Assume that the acceleration due to gravity, *g*, is equal to 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'v² = u² + 2as → v² = 0 + 2×10×845 = 16900 → v = 130 ms⁻¹ (or: v = √(2gh) = √16900 = 130 ms⁻¹)',
      },
      {
        label: 'b',
        text: 'The hailstone does not reach this theoretical maximum speed — instead it reaches the **terminal velocity**.\n\n**Select** the free body diagram that shows the forces acting on the hailstone when it reaches its terminal velocity.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Diagram 1', 'Diagram 2', 'Diagram 3', 'Diagram 4'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="t1up" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="t1dn" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="560" height="200" fill="#ffffff"/><g><text x="70" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram 1</text><circle cx="70" cy="100" r="11" fill="#9bbdd1" stroke="#3f7e98"/><line x1="70" y1="89" x2="70" y2="45" stroke="#0b7285" stroke-width="3" marker-end="url(#t1up)"/><line x1="70" y1="111" x2="70" y2="155" stroke="#f08c00" stroke-width="3" marker-end="url(#t1dn)"/></g><g><text x="210" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram 2</text><circle cx="210" cy="100" r="11" fill="#9bbdd1" stroke="#3f7e98"/><line x1="210" y1="89" x2="210" y2="62" stroke="#0b7285" stroke-width="3" marker-end="url(#t1up)"/><line x1="210" y1="111" x2="210" y2="165" stroke="#f08c00" stroke-width="3" marker-end="url(#t1dn)"/></g><g><text x="350" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram 3</text><circle cx="350" cy="100" r="11" fill="#9bbdd1" stroke="#3f7e98"/><line x1="350" y1="89" x2="350" y2="35" stroke="#0b7285" stroke-width="3" marker-end="url(#t1up)"/><line x1="350" y1="111" x2="350" y2="138" stroke="#f08c00" stroke-width="3" marker-end="url(#t1dn)"/></g><g><text x="490" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram 4</text><circle cx="490" cy="100" r="11" fill="#9bbdd1" stroke="#3f7e98"/><line x1="490" y1="111" x2="490" y2="165" stroke="#f08c00" stroke-width="3" marker-end="url(#t1dn)"/></g></svg>',
          },
          caption: 'Four candidate free-body diagrams for the falling hailstone (upward = drag, downward = weight).',
        },
        ph: 'Select Diagram 1 (equal upward and downward arrows — balanced forces at terminal velocity)',
      },
      {
        label: 'c',
        text: '**Label** the forces A and B acting on the hailstone shown in the diagram.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="c1up" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker><marker id="c1dn" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#f08c00"/></marker></defs><rect width="320" height="240" fill="#ffffff"/><circle cx="160" cy="120" r="20" fill="#cfe6f2" stroke="#3f7e98" stroke-width="2"/><text x="160" y="125" font-size="12" text-anchor="middle" fill="#2c5468">hailstone</text><line x1="160" y1="98" x2="160" y2="36" stroke="#0b7285" stroke-width="3.5" marker-end="url(#c1up)"/><text x="174" y="60" font-size="14" font-weight="700" fill="#0b7285">A</text><line x1="160" y1="142" x2="160" y2="204" stroke="#f08c00" stroke-width="3.5" marker-end="url(#c1dn)"/><text x="174" y="186" font-size="14" font-weight="700" fill="#f08c00">B</text></svg>',
          },
          caption: 'The two forces A (upward) and B (downward) acting on the falling hailstone.',
        },
        ph: 'Force A (upward) = air resistance / drag. Force B (downward) = weight / gravitational force.',
      },
      {
        label: 'd',
        text: 'A typical hailstone has a mass of 4.0 × 10⁻⁵ kg. **State** the mass of the hailstone in grams (g).',
        marks: 1,
        ph: '0.040 g / 4.0 × 10⁻² g',
      },
      {
        label: 'e',
        text: 'Use your answers to part (a) and part (d) to **calculate** the maximum final theoretical momentum of the hailstone. Include the unit in your answer.',
        marks: 2,
        ph: 'p = mv = 4.0 × 10⁻⁵ × 130 = 5.2 × 10⁻³ kg ms⁻¹',
      },
      {
        label: 'f',
        text: 'A student reads that the terminal velocity of a hailstone is determined by its radius. The student makes the prediction: *"The terminal velocity of a hailstone is proportional to the radius of the hailstone because the weight will be larger."*\n\nThe graph shows terminal velocity vs radius for measured hailstones.\n\n**Discuss** the validity of the hypothesis.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Terminal velocity vs radius (hailstones)',
            xLabel: 'radius', xUnit: 'mm', yLabel: 'terminal velocity', yUnit: 'm s⁻¹',
            dataPoints: [{ x: 1, y: 4 }, { x: 2, y: 7 }, { x: 3, y: 9 }, { x: 4, y: 12 }, { x: 5, y: 13.5 }, { x: 6, y: 14.5 }],
            xMin: 0, xMax: 7, yMin: 0, yMax: 16, xStep: 1, yStep: 2,
          },
          caption: 'Measured terminal velocity against radius for hailstones (the points curve and flatten).',
        },
        ph: 'For proportionality the graph should be a straight line through the origin. As a straight line could not be drawn through all the points (the data curves/flattens), the hypothesis is incorrect / not fully supported.',
      },
      {
        label: 'g',
        text: 'A second student measures the terminal velocity of **graupel (soft hail)** and plots **terminal velocity squared** vs **radius** (shown below).\n\n**Explain** what these results show about the relationship between the radius of graupel and terminal velocity.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Terminal velocity² vs radius (graupel)',
            xLabel: 'radius', xUnit: 'mm', yLabel: 'terminal velocity²', yUnit: 'm² s⁻²',
            dataPoints: [{ x: 1, y: 20 }, { x: 2, y: 41 }, { x: 3, y: 59 }, { x: 4, y: 80 }, { x: 5, y: 101 }],
            xMin: 0, xMax: 6, yMin: 0, yMax: 120, xStep: 1, yStep: 20, lobf: true,
          },
          caption: 'Terminal velocity squared against radius for graupel — a straight line through the origin.',
        },
        ph: 'The graph shows a straight line through the origin. Therefore v² is proportional to the radius of the graupel (v² ∝ r).',
      },
    ],
  },

  // ── Q3: Electricity & Light Bulbs (14 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'electricity-circuits',
    marks: 14,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A flow of charge around a circuit allows us to transfer energy. The circuit diagram shows a simple torch circuit with a battery, bulb, ammeter (0.25 A) and voltmeter (4 V).',
    artefact: {
      component: 'CircuitDiagram',
      data: {
        topology: 'series',
        components: [
          { type: 'battery', label: '4 V battery' },
          { type: 'ammeter', label: '0.25 A' },
          { type: 'bulb', label: 'torch bulb' },
          { type: 'voltmeter', label: '4 V' },
        ],
      },
      caption: 'A simple series torch circuit: battery, ammeter (0.25 A), bulb and voltmeter (4 V).',
    },
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
        ph: 'P = VI = 4 × 0.25 = 1.0 W',
      },
      {
        label: 'c',
        text: '**Calculate** the charge which flows through the bulb in 100 seconds.',
        marks: 1,
        ph: 'Q = It = 0.25 × 100 = 25 C',
      },
      {
        label: 'd',
        text: 'The circuit now has a **variable resistor** added in series. Changing the resistance of the variable resistor changes the brightness of the bulb.\n\n**Explain** why changing the resistance will affect the brightness of the bulb.',
        marks: 5,
        artefact: {
          component: 'CircuitDiagram',
          data: {
            topology: 'series',
            components: [
              { type: 'battery', label: '4 V battery' },
              { type: 'resistor', label: 'variable resistor' },
              { type: 'bulb', label: 'torch bulb' },
            ],
          },
          caption: 'The torch circuit with a variable resistor added in series with the bulb.',
        },
        ph: 'The total resistance in the circuit increases → the current flowing is smaller (I = V/R, battery voltage fixed) → (components are in series) the bulb draws a smaller current → brightness decreases because brightness is related to current/power. OR: voltage drops across the resistor → voltage across the bulb decreases → brightness decreases.',
      },
      {
        label: 'e',
        text: 'The graph shows the costs of different types of light bulbs over time. Each bulb produces the same level of brightness.\n\nUse information from the graph to **justify** why LED bulbs are more economical over the long term, even though they are more expensive to buy. Refer to the gradients, the y-intercepts, and the intersections of lines.',
        marks: 4,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Cumulative cost of three bulb types',
            xLabel: 'time used', xUnit: 'thousand hours', yLabel: 'total cost', yUnit: '£',
            dataPoints: [
              { x: 0, y: 1 }, { x: 10, y: 26 },
              { x: 0, y: 0.5 }, { x: 10, y: 18.5 },
              { x: 0, y: 4 }, { x: 10, y: 8 },
            ],
            xMin: 0, xMax: 10, yMin: 0, yMax: 28, xStep: 2, yStep: 4,
          },
          caption: 'Total running cost over time: filament (25 W, steep), halogen (18 W) and LED (4 W, shallow, high start cost).',
        },
        ph: 'LED gradient is shallowest because LEDs use only 4 W (lowest power → least energy → cheapest to run). LED y-intercept is highest (most expensive to buy). LED line crosses the filament/halogen lines early, so LED becomes cheapest overall after relatively few hours. Long term, LED is cheapest because its low running cost outweighs its high purchase price.',
      },
      {
        label: 'f',
        text: '**Suggest** one extra piece of information not shown in the graph that you would need to reach a final judgement about which bulb is most economical.',
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
    stem: 'When rain stops, shallow puddles left on a playground slowly dry up as the water evaporates — the particles at the surface of the water leave and become gas particles.\n\nMany different factors affect the rate at which a liquid evaporates. You have been asked to investigate the effect that **surface area** has on the **mass of liquid evaporated in an hour**.',
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
        text: 'If 0.20 g of water evaporates from a shallow tray in 10 minutes, **calculate** the rate of evaporation. Give your answer in g h⁻¹.',
        marks: 3,
        ph: 'Rate = mass/time = 0.20 g in 10 min; convert to per hour: 0.20 × (60/10) = 1.20 g h⁻¹',
      },
      {
        label: 'c',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the surface area increases, the rate of evaporation (mass evaporated) will increase. Because the water molecules/particles have a greater area from which to escape the surface / more particles can escape at one time. Proportional prediction: as area doubles, mass evaporated doubles.',
      },
      {
        label: 'd',
        text: '**Identify** the independent variable and dependent variable, and **name two control variables** for this experiment.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Mass of water', 'Water temperature', 'Air temperature', 'Time', 'Surface area', 'Type of liquid', 'Movement of air above liquid'],
        ph: 'Independent: Surface area. Dependent: Mass of water (evaporated). Control variables: Time, type of liquid, water temperature, air temperature, movement of air (any two).',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect for this experiment. Include the number of increments of the independent variable and how many times you will repeat each measurement.',
        marks: 3,
        ph: 'Measure mass evaporated for at least 5 different surface areas (e.g. tray dimensions/areas). Measure both the mass AND the surface area of each tray. Repeat each measurement at least 3 times to allow a mean to be calculated.',
      },
      {
        label: 'f',
        text: 'The whole class collected their data and presented it in the following graph (mass evaporated vs area of tray).\n\n**Describe** the relationship shown in the graph.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mass evaporated vs area of tray',
            xLabel: 'area of tray', xUnit: 'cm²', yLabel: 'mass evaporated', yUnit: 'g',
            dataPoints: [{ x: 100, y: 2.5 }, { x: 200, y: 5.0 }, { x: 300, y: 7.5 }, { x: 400, y: 10.0 }, { x: 500, y: 12.5 }],
            xMin: 0, xMax: 600, yMin: 0, yMax: 16, xStep: 100, yStep: 2, lobf: true,
          },
          caption: 'Class results: mass of water evaporated against the surface area of the tray.',
        },
        ph: 'As the area increases, the mass of water evaporated increases (proportionally). The mass evaporated is proportional to area / a straight line through (approximately) zero.',
      },
      {
        label: 'g',
        text: '**Determine** the constant of proportionality from the graph. Give your answer in g cm⁻².',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Mass evaporated vs area of tray',
            xLabel: 'area of tray', xUnit: 'cm²', yLabel: 'mass evaporated', yUnit: 'g',
            dataPoints: [{ x: 100, y: 2.5 }, { x: 200, y: 5.0 }, { x: 300, y: 7.5 }, { x: 400, y: 10.0 }, { x: 500, y: 12.5 }],
            xMin: 0, xMax: 600, yMin: 0, yMax: 16, xStep: 100, yStep: 2, lobf: true,
          },
          caption: 'Use two well-spaced points on the line to find the gradient.',
        },
        ph: 'Gradient = Δy/Δx from two well-spaced points: k = (12.5 − 2.5)/(500 − 100) = 10/400 = 0.0250 g cm⁻² (units not required for full marks).',
      },
      {
        label: 'h',
        text: 'A pond has a surface area of 5 m² (50 000 cm²). Using your answer from part (g), **calculate** the mass of water lost from this pond in an hour.',
        marks: 3,
        ph: 'Mass = k × area = 0.0250 × 50 000 = 1250 g ≈ 1.25 kg (accept 1.2–1.3 kg)',
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
    stem: 'A student notices that wet laundry dries faster on a warm day than on a cold day. They want to investigate the effect of **temperature** on the **rate of evaporation** of water from a piece of fabric.',
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
        ph: 'As temperature increases, the rate of evaporation increases. Because at higher temperatures the water molecules have greater velocity/energy, so more particles have sufficient energy to escape the surface. Quantitative: a higher temperature gives a faster drying rate.',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable and **name one control variable** for this investigation.',
        marks: 2,
        ph: 'Independent variable: temperature (of the air / water). Control variable (any one): type of fabric / air speed / surface area exposed / mass of water at the start.',
      },
    ],
  },

  // ── Q6: Mount Kenya — Boiling Point vs Altitude (10 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 10,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student living in Kenya decides to investigate if there is a relationship between the altitude (height above sea level) and the boiling point of water. She climbs Mount Kenya recording the temperature at which water boils at different altitudes, from the bottom of the mountain to the top.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfeaf6"/><stop offset="1" stop-color="#eaf6fb"/></linearGradient><linearGradient id="mtn6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7c8a8f"/><stop offset="1" stop-color="#4a5a60"/></linearGradient></defs><rect width="600" height="280" fill="url(#sky6)"/><polygon points="40,250 230,70 300,130 360,60 560,250" fill="url(#mtn6)" stroke="#34474d"/><polygon points="330,86 360,60 392,92 372,100 360,90 348,100" fill="#ffffff"/><polygon points="208,90 230,70 256,96 240,102 230,92 220,102" fill="#ffffff"/><line x1="40" y1="250" x2="560" y2="250" stroke="#3a5a3a" stroke-width="3"/><g font-size="11" fill="#1f2d3a"><circle cx="120" cy="218" r="4" fill="#0b7285"/><text x="130" y="222">1000 m</text><circle cx="200" cy="170" r="4" fill="#0b7285"/><text x="210" y="174">2400 m</text><circle cx="290" cy="128" r="4" fill="#0b7285"/><text x="300" y="132">3600 m</text><circle cx="358" cy="64" r="4" fill="#f08c00"/><text x="368" y="68">5199 m summit</text></g><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Mount Kenya — boiling point at increasing altitude</text></svg>',
      },
      caption: 'The student climbs Mount Kenya, boiling water and recording its temperature at each altitude.',
    },
    tags: { unit: 'thermal-physics', topics: ['boiling point', 'altitude', 'pressure', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student forgot to label the table correctly. **Write** the correct column headings (Heading 1 and Heading 2) for the results table. At 4600 m, the student did not record a temperature but took a photo of the thermometer.\n\n**Measure** the temperature shown in the photograph and add it to the results table.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="230" fill="#ffffff"/><g><rect x="20" y="20" width="300" height="190" fill="none" stroke="#5b6b78" stroke-width="1.5"/><line x1="170" y1="20" x2="170" y2="210" stroke="#5b6b78"/><line x1="20" y1="52" x2="320" y2="52" stroke="#5b6b78"/><g font-size="12" fill="#1f2d3a"><text x="95" y="42" text-anchor="middle" font-weight="700">Heading 1</text><text x="245" y="42" text-anchor="middle" font-weight="700">Heading 2</text><text x="95" y="74" text-anchor="middle">1000</text><text x="245" y="74" text-anchor="middle">96.5</text><text x="95" y="100" text-anchor="middle">2400</text><text x="245" y="100" text-anchor="middle">92.0</text><text x="95" y="126" text-anchor="middle">3600</text><text x="245" y="126" text-anchor="middle">88.0</text><text x="95" y="152" text-anchor="middle">4600</text><text x="245" y="152" text-anchor="middle" fill="#c0392b">? (photo)</text><text x="95" y="178" text-anchor="middle">5199</text><text x="245" y="178" text-anchor="middle">83.0</text></g></g><g><rect x="430" y="30" width="22" height="150" rx="11" fill="#f2f2f2" stroke="#5b6b78"/><rect x="436" y="92" width="10" height="84" fill="#c0392b"/><circle cx="441" cy="186" r="16" fill="#c0392b" stroke="#7a1f15"/><g font-size="9" fill="#1f2d3a"><line x1="452" y1="50" x2="462" y2="50" stroke="#5b6b78"/><text x="466" y="53">90</text><line x1="452" y1="92" x2="462" y2="92" stroke="#5b6b78"/><text x="466" y="95">85</text><line x1="452" y1="134" x2="462" y2="134" stroke="#5b6b78"/><text x="466" y="137">80</text></g><text x="441" y="210" font-size="10" text-anchor="middle" fill="#5b6b78">°C</text></g></svg>',
          },
          caption: 'The results table (one value missing) and a photo of the thermometer taken at 4600 m.',
        },
        ph: 'Heading 1: Altitude / height (m). Heading 2: Boiling point / temperature (°C). Temperature at 4600 m = 85.0°C.',
      },
      {
        label: 'b',
        text: '**Describe** the type of graph that would be most appropriate to display this data, and **justify** your choice.',
        marks: 2,
        ph: 'A line graph would be most appropriate. A bar chart is used for discrete/categorical data; a line graph is used when there is a continuous relationship between two variables (altitude and boiling point are both continuous). A line of best fit can also be drawn to show the relationship and identify anomalies.',
      },
      {
        label: 'c',
        text: 'The student plots the data on a graph. **Identify** which altitude produced an anomalous result and **justify** your answer.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Boiling point vs altitude (Mount Kenya)',
            xLabel: 'altitude', xUnit: 'm', yLabel: 'boiling point', yUnit: '°C',
            dataPoints: [{ x: 1000, y: 96.5 }, { x: 1900, y: 93.5 }, { x: 2400, y: 92.0 }, { x: 2800, y: 88.0 }, { x: 3600, y: 88.0 }, { x: 4600, y: 85.0 }, { x: 5199, y: 83.0 }],
            xMin: 0, xMax: 6000, yMin: 80, yMax: 100, xStep: 1000, yStep: 2, lobf: true,
          },
          caption: 'Boiling point against altitude. One point lies well off the trend.',
        },
        ph: '2800 m produced the anomalous result (88.0°C). This value does not lie on the line of best fit / is inconsistent with surrounding values (1900 m → 93.5°C and 2400 m → 92.0°C are higher; 2800 m should be just below 92°C, not 88°C).',
      },
      {
        label: 'd',
        text: 'The student analyses the graph. **Describe** the relationship between altitude and boiling point of water.',
        marks: 2,
        ph: 'As altitude increases, the boiling point of water decreases. This is a linear relationship (straight-line relationship).',
      },
      {
        label: 'e',
        text: '**Explain**, using particle theory, why water boils at a lower temperature at higher altitudes.',
        marks: 1,
        ph: 'At higher altitudes there are fewer air particles (lower air pressure). Water particles need sufficient energy to escape the surface; at lower pressure fewer collisions push them back, so less energy (a lower temperature) is needed to boil.',
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
        ph: 'Variables: IV = air pressure / altitude (simulated with the vacuum pump); DV = boiling point/temperature. CV: type of liquid (same water), volume of liquid, container/vessel, starting temperature.\nEquipment: thermometer/temperature probe, vacuum pump with pressure gauge, sealed container, heat source/hot plate.\nMethod: Set vacuum pump to the first pressure. Heat the liquid and record the temperature when it boils. Repeat for at least 5 different pressures. Carry out 3 trials for each pressure.\nData: at least 5 different pressure/altitude values; 3 repeats each; calculate a mean boiling point for each.',
      },
    ],
  },

  // ── Q8: Underground Housing — Light Pipes & Roof Ponds (13 marks, Criterion D) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 13,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Humans need shelter every night and that means they have been looking for a temperate place to live for centuries. Hundreds of years ago, one method of keeping houses comfortable was to build part of the construction underground or into a hillside. Italy, Canada and the United States have examples of these constructions which are, in general, named dugouts.\n\nNowadays extreme temperatures in some cities means that large quantities of energy are used in air conditioners or heaters to keep people at comfortable temperatures. One way we could reduce the use of energy in cities is to build accommodation underground.',
    tags: { unit: 'thermal-physics', topics: ['thermal insulation', 'solar energy', 'sustainability', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: 'It has been suggested that **light pipes** (mirrored tubes that channel sunlight from the roof down into rooms below) can be used for lighting in underground houses.\n\n**State two advantages** and **two disadvantages** of using light pipes for lighting.',
        marks: 4,
        ph: 'Advantages (any 2): free light / natural daylight / no light bulbs needed / no electricity supply needed.\nDisadvantages (any 2): only works in the daytime / limited reach — light cannot travel far underground / a hole is required in the roof / the external dome needs cleaning and maintenance.',
      },
      {
        label: 'b',
        text: 'It has been suggested that a **roof pond** (a shallow layer of water on a flat roof) can also be used for cooling in domestic houses. You are an architect and your client wants to create an innovative and environmentally friendly house in a hot country.\n\n**Discuss and evaluate** the implications of using a roof pond in your design. In your answer, you should include:\n- strengths of using a roof pond in the home\n- limitations of using a roof pond in the home\n- wider implications for the environment\n- economic considerations\n- a concluding appraisal of whether you would recommend a roof pond.',
        marks: 9,
        ph: 'Strengths: evaporation of the pond water cools the building naturally / no electricity needed / sustainable / thermal mass evens out temperature. Limitations: needs a constant water supply / water can become stagnant / extra structural load on the roof / maintenance. Environmental: reduces electricity demand for air conditioning (lower CO₂), BUT consumes water (scarce in hot countries). Economic: low running cost but higher construction cost; water bills may rise. Conclusion: roof ponds are recommended for hot dry climates with adequate water and strong roofs, as natural cooling outweighs the limitations; less suitable for water-scarce or humid regions.',
      },
    ],
  },
]
