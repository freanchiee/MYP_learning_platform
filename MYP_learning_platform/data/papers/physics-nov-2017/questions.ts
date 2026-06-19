import type { Question } from '@/lib/types'

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
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Atoms are made up of particles called protons, neutrons and electrons, which are responsible for the mass and charge of atoms.',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'static electricity', 'charge'], level: 'developing' },
    // Context artefact: a static labelled diagram of atomic structure beside two
    // charged nylon strips that repel — a conceptual (non-parametric) figure, so a
    // clean GenericSVG is the right tool rather than a dynamic Sim.
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nucA" cx="0.4" cy="0.35"><stop offset="0" stop-color="#e07a5f"/><stop offset="1" stop-color="#b4452f"/></radialGradient></defs><rect width="600" height="280" fill="#ffffff"/><text x="150" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Atom</text><circle cx="150" cy="140" r="92" fill="none" stroke="#cbd5dd" stroke-width="1.5"/><circle cx="150" cy="140" r="60" fill="none" stroke="#cbd5dd" stroke-width="1.5"/><circle cx="150" cy="140" r="24" fill="url(#nucA)" stroke="#7a2c1c"/><text x="150" y="138" font-size="9" font-weight="700" text-anchor="middle" fill="#fff">protons +</text><text x="150" y="150" font-size="9" font-weight="700" text-anchor="middle" fill="#fff">neutrons</text><circle cx="210" cy="140" r="6" fill="#2b6cb0" stroke="#1b4a7a"/><circle cx="90" cy="140" r="6" fill="#2b6cb0" stroke="#1b4a7a"/><circle cx="150" cy="48" r="6" fill="#2b6cb0" stroke="#1b4a7a"/><circle cx="150" cy="232" r="6" fill="#2b6cb0" stroke="#1b4a7a"/><text x="244" y="143" font-size="10" fill="#1b4a7a">electron −</text><text x="455" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Two charged nylon strips</text><rect x="390" y="70" width="20" height="130" rx="4" fill="#d9e2ec" stroke="#8a99a6"/><rect x="500" y="70" width="20" height="130" rx="4" fill="#d9e2ec" stroke="#8a99a6"/><g font-size="11" font-weight="700" fill="#b4452f"><text x="400" y="64" text-anchor="middle">−</text><text x="400" y="90" text-anchor="middle">−</text><text x="400" y="120" text-anchor="middle">−</text><text x="400" y="150" text-anchor="middle">−</text><text x="510" y="64" text-anchor="middle">−</text><text x="510" y="90" text-anchor="middle">−</text><text x="510" y="120" text-anchor="middle">−</text><text x="510" y="150" text-anchor="middle">−</text></g><line x1="418" y1="135" x2="462" y2="135" stroke="#0b7285" stroke-width="2.5" marker-end="url(#repL)"/><line x1="492" y1="135" x2="448" y2="135" stroke="#0b7285" stroke-width="2.5" marker-end="url(#repR)"/><defs><marker id="repL" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker><marker id="repR" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><text x="455" y="222" font-size="11" text-anchor="middle" fill="#0b7285">like charges repel</text></svg>',
      },
      caption: 'Left: protons and neutrons in the nucleus with electrons in orbitals. Right: two negatively charged nylon strips repel because they carry like charges.',
    },
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
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A raindrop falls from a cloud that is 500 m above the ground.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'momentum', 'free fall', 'forces'], level: 'developing' },
    // Context artefact: the falling-raindrop scenario with the 500 m drop and the
    // balanced forces at terminal velocity (weight down, drag up).
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dceefb"/><stop offset="1" stop-color="#f4f9fd"/></linearGradient><marker id="ad2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="300" fill="url(#sky2)"/><ellipse cx="150" cy="44" rx="70" ry="26" fill="#cfd8e0"/><ellipse cx="110" cy="50" rx="40" ry="20" fill="#dde4ea"/><ellipse cx="195" cy="50" rx="44" ry="22" fill="#dde4ea"/><text x="150" y="48" font-size="11" text-anchor="middle" fill="#5b6b78">cloud</text><line x1="380" y1="44" x2="380" y2="262" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="5 5"/><line x1="370" y1="44" x2="390" y2="44" stroke="#5b6b78" stroke-width="1.5"/><line x1="370" y1="262" x2="390" y2="262" stroke="#5b6b78" stroke-width="1.5"/><text x="398" y="156" font-size="12" fill="#2c5468" font-weight="700">500 m</text><rect x="0" y="262" width="560" height="38" fill="#7fae6b"/><text x="40" y="286" font-size="12" fill="#33502a">ground</text><g transform="translate(150,150)"><path d="M0,-22 C14,-2 14,12 0,12 C-14,12 -14,-2 0,-22 Z" fill="#5aa9d6" stroke="#2c6c86"/><ellipse cx="-4" cy="-2" rx="3" ry="5" fill="#bfe3f2" opacity="0.8"/></g><line x1="150" y1="138" x2="150" y2="92" stroke="#0b7285" stroke-width="3" marker-end="url(#ad2)"/><text x="158" y="100" font-size="12" fill="#0b7285" font-weight="700">drag (air resistance)</text><line x1="150" y1="162" x2="150" y2="208" stroke="#c0392b" stroke-width="3" marker-end="url(#adW)"/><defs><marker id="adW" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#c0392b"/></marker></defs><text x="158" y="200" font-size="12" fill="#c0392b" font-weight="700">weight</text><text x="150" y="240" font-size="11" text-anchor="middle" fill="#5b6b78">at terminal velocity the two forces are balanced</text></svg>',
      },
      caption: 'A raindrop falls 500 m from a cloud. At terminal velocity the upward drag balances the downward weight, so the resultant force is zero.',
    },
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
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fu" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto"><path d="M0,7 L4.5,0 L9,7 Z" fill="#0b7285"/></marker><marker id="fd" markerWidth="9" markerHeight="9" refX="4.5" refY="2" orient="auto"><path d="M0,2 L4.5,9 L9,2 Z" fill="#c0392b"/></marker></defs><rect width="600" height="230" fill="#ffffff"/><g><path d="M75,118 C92,138 92,158 75,158 C58,158 58,138 75,118 Z" fill="#5aa9d6" stroke="#2c6c86"/><line x1="75" y1="116" x2="75" y2="66" stroke="#0b7285" stroke-width="3" marker-end="url(#fu)"/><text x="83" y="80" font-size="11" fill="#0b7285">A</text><line x1="75" y1="160" x2="75" y2="210" stroke="#c0392b" stroke-width="3" marker-end="url(#fd)"/><text x="83" y="200" font-size="11" fill="#c0392b">B</text><text x="75" y="26" font-size="12" font-weight="700" text-anchor="middle">Diagram 1</text></g><g><path d="M225,118 C242,138 242,158 225,158 C208,158 208,138 225,118 Z" fill="#5aa9d6" stroke="#2c6c86"/><line x1="225" y1="116" x2="225" y2="86" stroke="#0b7285" stroke-width="3" marker-end="url(#fu)"/><text x="233" y="100" font-size="11" fill="#0b7285">A</text><line x1="225" y1="160" x2="225" y2="210" stroke="#c0392b" stroke-width="3" marker-end="url(#fd)"/><text x="233" y="200" font-size="11" fill="#c0392b">B</text><text x="225" y="26" font-size="12" font-weight="700" text-anchor="middle">Diagram 2</text></g><g><path d="M375,118 C392,138 392,158 375,158 C358,158 358,138 375,118 Z" fill="#5aa9d6" stroke="#2c6c86"/><line x1="375" y1="116" x2="375" y2="66" stroke="#0b7285" stroke-width="3" marker-end="url(#fu)"/><text x="383" y="80" font-size="11" fill="#0b7285">A</text><line x1="375" y1="160" x2="375" y2="196" stroke="#c0392b" stroke-width="3" marker-end="url(#fd)"/><text x="383" y="190" font-size="11" fill="#c0392b">B</text><text x="375" y="26" font-size="12" font-weight="700" text-anchor="middle">Diagram 3</text></g><g><path d="M525,118 C542,138 542,158 525,158 C508,158 508,138 525,118 Z" fill="#5aa9d6" stroke="#2c6c86"/><line x1="525" y1="116" x2="525" y2="66" stroke="#0b7285" stroke-width="3" marker-end="url(#fu)"/><text x="533" y="80" font-size="11" fill="#0b7285">A</text></g><text x="525" y="26" font-size="12" font-weight="700" text-anchor="middle">Diagram 4</text></svg>',
          },
          caption: 'Four candidate free-body diagrams for the raindrop (A = upward force, B = downward force).',
        },
        ph: 'Select Diagram 1 (equal upward and downward arrows — balanced forces at terminal velocity)',
      },
      {
        label: 'c',
        text: '**Label** the forces A and B acting on the raindrop shown in the diagram.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cu" markerWidth="9" markerHeight="9" refX="4.5" refY="7" orient="auto"><path d="M0,7 L4.5,0 L9,7 Z" fill="#0b7285"/></marker><marker id="cd" markerWidth="9" markerHeight="9" refX="4.5" refY="2" orient="auto"><path d="M0,2 L4.5,9 L9,2 Z" fill="#c0392b"/></marker></defs><rect width="320" height="240" fill="#ffffff"/><path d="M160,108 C182,138 182,162 160,162 C138,162 138,138 160,108 Z" fill="#5aa9d6" stroke="#2c6c86"/><ellipse cx="152" cy="135" rx="4" ry="7" fill="#bfe3f2" opacity="0.85"/><line x1="160" y1="104" x2="160" y2="42" stroke="#0b7285" stroke-width="3.5" marker-end="url(#cu)"/><text x="172" y="60" font-size="14" font-weight="700" fill="#0b7285">A</text><line x1="160" y1="166" x2="160" y2="206" stroke="#c0392b" stroke-width="3.5" marker-end="url(#cd)"/><text x="172" y="194" font-size="14" font-weight="700" fill="#c0392b">B</text></svg>',
          },
          caption: 'Forces A (upward) and B (downward) acting on the falling raindrop.',
        },
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
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Terminal velocity vs radius (raindrops)',
            mode: 'readoff',
            xAxis: { label: 'radius of raindrop / m', min: 0, max: 0.012, tick: 0.002 },
            yAxis: { label: 'terminal velocity / m s⁻¹', min: 0, max: 25, tick: 5 },
            points: [[0.001, 6.9], [0.002, 9.7], [0.003, 11.9], [0.004, 13.5], [0.005, 15.2], [0.006, 16.4], [0.007, 17.7], [0.008, 18.9], [0.009, 20.2], [0.010, 21.1]],
            dataMaxX: 0.010,
            bestFit: 'The points lie on a curve that flattens — a straight line through the origin cannot be drawn, so velocity is NOT proportional to radius.',
          },
          caption: 'Measured terminal velocity against raindrop radius. The trend is a curve, not a straight line through the origin.',
        },
        ph: 'The graph should be a straight line through the origin for proportionality. As a straight line could not be drawn through all points, the hypothesis is incorrect / not fully supported.',
      },
      {
        label: 'g',
        text: 'A second student measures the terminal velocity of **hailstones** and plots **terminal velocity squared** vs **radius** (shown below).\n\n**Explain** what these results show about the relationship between the radius of hailstones and terminal velocity.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Terminal velocity² vs radius (hailstones)',
            mode: 'readoff',
            xAxis: { label: 'radius of hailstone / m', min: 0, max: 0.025, tick: 0.005 },
            yAxis: { label: 'terminal velocity² / m² s⁻²', min: 0, max: 1000, tick: 200 },
            points: [[0, 0], [0.002, 80], [0.004, 160], [0.006, 240], [0.008, 320], [0.010, 400], [0.012, 480], [0.014, 560], [0.016, 640], [0.018, 720], [0.020, 800]],
            dataMaxX: 0.020,
            bestFit: 'A straight line passing through the origin → v² is directly proportional to radius (v² ∝ r).',
          },
          caption: 'Terminal velocity squared against hailstone radius: a straight line through the origin shows v² ∝ r.',
        },
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
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A flow of charge around a circuit allows us to transfer energy. The circuit diagram shows a simple circuit with a battery, bulb, ammeter (0.5 A) and voltmeter (12 V).',
    tags: { unit: 'electricity-circuits', topics: ['energy transfer', 'power', 'charge', 'resistance'], level: 'developing' },
    // Context artefact: the live circuit — cell, bulb, ammeter (0.5 A in series),
    // voltmeter (12 V across the bulb). R = V/I = 24 Ω reads out.
    artefact: {
      component: 'CircuitSim',
      data: {
        title: 'Simple lighting circuit',
        mode: 'iv',
        component: 'bulb',
        battery: 'battery',
        ivPairs: [{ V: 12, I: 0.5, brightness: 'full' }],
      },
      caption: 'A battery drives a current through the bulb. The ammeter (series) reads 0.5 A; the voltmeter (across the bulb) reads 12 V.',
    },
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
        artefact: {
          component: 'CircuitSim',
          data: {
            title: 'Bulb in series with a variable resistor',
            mode: 'iv',
            component: 'bulb',
            battery: 'battery',
            variableResistor: { label: 'Variable resistor' },
            // Battery emf fixed at 12 V. As Rvar rises, total R rises, current falls,
            // the voltage across the bulb falls and it dims.
            ivPairs: [
              { Rvar: 0, Vbulb: 12.0, I: 0.5, brightness: 'full' },
              { Rvar: 12, Vbulb: 8.0, I: 0.33, brightness: 'dimmer' },
              { Rvar: 24, Vbulb: 6.0, I: 0.25, brightness: 'dim' },
              { Rvar: 48, Vbulb: 4.0, I: 0.17, brightness: 'very dim' },
            ],
          },
          caption: 'Increasing the variable resistor adds resistance in series: the current falls, the voltage across the bulb falls, and the bulb gets dimmer. Drag the slider to see the effect.',
        },
        ph: 'The total resistance in the circuit increases → the current flowing will be smaller (I = V/R, and voltage from battery is fixed) → (as components are in series) the bulb draws a smaller current → brightness decreases because brightness is related to current/power. OR: voltage drops across the resistor → voltage across the bulb decreases → brightness decreases as brightness related to voltage.',
      },
      {
        label: 'e',
        text: 'The graph shows the total cost (purchase + running) of different types of light bulbs over time. Each bulb produces the same level of brightness. The line labels give the power rating of each bulb.\n\nUse information from the graph to **justify** why LED bulbs are more economical over the long term, even though they are more expensive to buy. Refer to the gradients, the y-intercepts, and the intersections of lines.',
        marks: 4,
        // Accurate multi-line cost-vs-time chart (4 series → GenericSVG, since no Sim
        // renders 4 series). LED: highest y-intercept (£12), shallowest gradient (4 W);
        // Filament: lowest intercept (£1), steepest gradient (25 W). LED becomes cheapest
        // after ~15 000 h where its line crosses the filament/halogen lines.
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="360" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="70" y1="230" x2="410" y2="230"/><line x1="70" y1="150" x2="410" y2="150"/><line x1="70" y1="70" x2="410" y2="70"/><line x1="118.6" y1="70" x2="118.6" y2="310"/><line x1="215.7" y1="70" x2="215.7" y2="310"/><line x1="312.9" y1="70" x2="312.9" y2="310"/></g><line x1="70" y1="310" x2="410" y2="310" stroke="#111" stroke-width="1.5"/><line x1="70" y1="310" x2="70" y2="60" stroke="#111" stroke-width="1.5"/><g font-size="10" fill="#374151" text-anchor="middle"><text x="70" y="326">0</text><text x="118.6" y="326">5000</text><text x="215.7" y="326">15 000</text><text x="312.9" y="326">25 000</text><text x="410" y="326">35 000</text></g><g font-size="10" fill="#374151" text-anchor="end"><text x="63" y="313">0</text><text x="63" y="233">10</text><text x="63" y="153">20</text><text x="63" y="73">30</text></g><text x="240" y="346" font-size="11" font-weight="600" fill="#374151" text-anchor="middle">Time / hours</text><text x="20" y="185" font-size="11" font-weight="600" fill="#374151" text-anchor="middle" transform="rotate(-90 20 185)">Total cost / GBP</text><line x1="70" y1="302" x2="410" y2="58" stroke="#c0392b" stroke-width="2.5"/><line x1="70" y1="286" x2="410" y2="110" stroke="#e08a1e" stroke-width="2.5"/><line x1="70" y1="262" x2="410" y2="164" stroke="#2b8a3e" stroke-width="2.5"/><line x1="70" y1="214" x2="410" y2="175" stroke="#2b6cb0" stroke-width="2.5"/><g font-size="11"><rect x="424" y="70" width="14" height="3" fill="#2b6cb0"/><text x="442" y="76" fill="#2b6cb0">LED 4 W</text><rect x="424" y="92" width="14" height="3" fill="#2b8a3e"/><text x="442" y="98" fill="#2b8a3e">Fluorescent 10 W</text><rect x="424" y="114" width="14" height="3" fill="#e08a1e"/><text x="442" y="120" fill="#e08a1e">Halogen 18 W</text><rect x="424" y="136" width="14" height="3" fill="#c0392b"/><text x="442" y="142" fill="#c0392b">Filament 25 W</text></g></svg>',
          },
          caption: 'Total cost vs running time for four bulb types. The LED line starts highest (dearest to buy) but rises most slowly (cheapest to run), crossing the others after roughly 15 000 hours to become the cheapest overall.',
        },
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
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'The video shows how the particles in a liquid leave the surface and become gas particles when the liquid evaporates.\n\nMany different factors affect the rate at which a liquid evaporates. You have been asked to investigate the effect that **surface area** has on the **mass of liquid evaporated in an hour**.',
    tags: { unit: 'thermal-physics', topics: ['evaporation', 'surface area', 'variables', 'data processing'], level: 'proficient' },
    // Context artefact: the particle model of evaporation — fast particles escape the
    // surface; a wider dish exposes more surface so more particles can escape.
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ev" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="280" fill="#ffffff"/><text x="150" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Small surface area</text><text x="450" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Large surface area</text><path d="M105,150 h90 v70 h-90 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><rect x="105" y="170" width="90" height="50" fill="#bfe3f2" stroke="#6cb6d6"/><path d="M340,160 h220 v60 h-220 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><rect x="340" y="178" width="220" height="42" fill="#bfe3f2" stroke="#6cb6d6"/><g fill="#2c6c86"><circle cx="120" cy="200" r="5"/><circle cx="140" cy="195" r="5"/><circle cx="160" cy="205" r="5"/><circle cx="180" cy="198" r="5"/><circle cx="130" cy="210" r="5"/><circle cx="170" cy="212" r="5"/></g><g fill="#2c6c86"><circle cx="360" cy="200" r="5"/><circle cx="390" cy="196" r="5"/><circle cx="420" cy="205" r="5"/><circle cx="450" cy="198" r="5"/><circle cx="480" cy="206" r="5"/><circle cx="510" cy="197" r="5"/><circle cx="540" cy="204" r="5"/><circle cx="375" cy="211" r="5"/><circle cx="435" cy="212" r="5"/><circle cx="495" cy="211" r="5"/></g><g stroke="#0b7285" stroke-width="1.5"><line x1="150" y1="168" x2="150" y2="130" marker-end="url(#ev)"/><line x1="175" y1="168" x2="182" y2="132" marker-end="url(#ev)"/></g><g stroke="#0b7285" stroke-width="1.5"><line x1="375" y1="176" x2="372" y2="138" marker-end="url(#ev)"/><line x1="420" y1="176" x2="424" y2="134" marker-end="url(#ev)"/><line x1="465" y1="176" x2="462" y2="140" marker-end="url(#ev)"/><line x1="510" y1="176" x2="514" y2="136" marker-end="url(#ev)"/></g><text x="150" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">few particles escape</text><text x="450" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">more particles can escape per hour</text></svg>',
      },
      caption: 'During evaporation the fastest particles escape from the liquid surface. A larger surface area exposes more particles, so more can escape per hour.',
    },
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
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Mass of water evaporated in one hour vs area of dish',
            mode: 'readoff',
            xAxis: { label: 'area of dish / cm²', min: 0, max: 350, tick: 50 },
            yAxis: { label: 'mass evaporated after one hour / g', min: 0, max: 10, tick: 2 },
            points: [[25, 0.90], [50, 1.55], [80, 2.30], [115, 3.35], [150, 4.45], [200, 5.80], [255, 7.35], [315, 9.00]],
            dataMaxX: 315,
            bestFit: 'A straight line through the origin → mass evaporated is directly proportional to area. Gradient ≈ 0.0284 g cm⁻².',
          },
          caption: 'Class data: mass of water evaporated in an hour against dish area. The line of best fit is straight and passes through the origin.',
        },
        ph: 'As the area increases, the mass of water evaporated increases (proportionally). The mass evaporated is proportional to area / there is a linear relationship that goes through (approximately) zero.',
      },
      {
        label: 'g',
        text: '**Determine** the constant of proportionality from the graph. Give your answer in g cm⁻².',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Read off two points to find the gradient',
            mode: 'readoff',
            xAxis: { label: 'area of dish / cm²', min: 0, max: 350, tick: 50 },
            yAxis: { label: 'mass evaporated after one hour / g', min: 0, max: 10, tick: 2 },
            points: [[25, 0.90], [50, 1.55], [80, 2.30], [115, 3.35], [150, 4.45], [200, 5.80], [255, 7.35], [315, 9.00]],
            readouts: [{ x: 100, note: 'read mass at area = 100 cm²' }, { x: 300, note: 'read mass at area = 300 cm²' }],
            dataMaxX: 315,
            gradientReadout: 'Gradient k = Δmass / Δarea ≈ (9.0 − 0) / (315 − 0) ≈ 0.0284 g cm⁻².',
          },
          caption: 'Drag the crosshair to two well-spaced points on the line to read off coordinates and calculate the gradient.',
        },
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
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student wants to investigate the effect of **temperature** on the **rate of evaporation** of a liquid.',
    tags: { unit: 'thermal-physics', topics: ['evaporation', 'temperature', 'variables', 'hypothesis'], level: 'developing' },
    // Context artefact: cool vs warm dish — at higher temperature particles move faster
    // and more escape, supporting the hypothesis the student must formulate.
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ev5" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="280" fill="#ffffff"/><text x="150" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f6f9a">Cool liquid (20 °C)</text><text x="450" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#c0392b">Warm liquid (60 °C)</text><path d="M95,150 h110 v70 h-110 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><rect x="95" y="168" width="110" height="52" fill="#bfe3f2" stroke="#6cb6d6"/><path d="M395,150 h110 v70 h-110 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><rect x="395" y="168" width="110" height="52" fill="#f6cccc" stroke="#d98a8a"/><g fill="#2c6c86"><circle cx="115" cy="200" r="5"/><circle cx="140" cy="196" r="5"/><circle cx="165" cy="205" r="5"/><circle cx="190" cy="198" r="5"/><circle cx="128" cy="210" r="5"/><circle cx="178" cy="212" r="5"/></g><g fill="#a8531a"><circle cx="415" cy="200" r="5"/><circle cx="440" cy="196" r="5"/><circle cx="465" cy="205" r="5"/><circle cx="490" cy="198" r="5"/><circle cx="428" cy="210" r="5"/><circle cx="478" cy="212" r="5"/></g><g stroke="#0b7285" stroke-width="1.5"><line x1="155" y1="166" x2="158" y2="138" marker-end="url(#ev5)"/></g><g stroke="#c0392b" stroke-width="1.5"><line x1="425" y1="166" x2="421" y2="126" marker-end="url(#ev5)"/><line x1="455" y1="166" x2="460" y2="124" marker-end="url(#ev5)"/><line x1="485" y1="166" x2="481" y2="130" marker-end="url(#ev5)"/><line x1="505" y1="166" x2="509" y2="122" marker-end="url(#ev5)"/></g><text x="150" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">slower particles — fewer escape</text><text x="450" y="248" font-size="11" text-anchor="middle" fill="#5b6b78">faster particles — more escape</text></svg>',
      },
      caption: 'At a higher temperature the liquid particles have more kinetic energy, so more of them can escape from the surface and the rate of evaporation increases.',
    },
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
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student living in Tanzania decides to investigate if there is a relationship between the altitude (height above sea level) and the boiling point of water. She climbs Mount Kilimanjaro recording the temperature at which water boils at different altitudes, from the bottom of the mountain to the top.',
    tags: { unit: 'thermal-physics', topics: ['boiling point', 'altitude', 'pressure', 'data processing'], level: 'proficient' },
    // Context artefact: the Kilimanjaro results the student records (altitude / boiling
    // point). The 5200 m boiling point is missing — it is read from the thermometer in (a).
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Altitude / m', 'Boiling point / °C'],
        rows: [
          ['700', '97.5'], ['1200', '96.0'], ['1700', '94.0'], ['2200', '92.0'],
          ['2700', '91.5'], ['3200', '89.5'], ['3700', '88.0'], ['4200', '90.0'],
          ['4700', '84.5'], ['5200', '?'], ['5900', '80.0'],
        ],
      },
      caption: 'Boiling point of water recorded at eleven altitudes on Mount Kilimanjaro. At 5200 m the value was not recorded — it is read from the thermometer photograph in part (a).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student forgot to label the table correctly. **Write** the correct column headings (Heading 1 and Heading 2) for the results table. At 5200 m, the student did not record a temperature but took a photo of the thermometer.\n\n**Measure** the temperature shown in the photograph and add it to the results table.',
        marks: 3,
        artefact: {
          component: 'ThermalSim',
          data: {
            title: 'Thermometer photographed at 5200 m',
            mode: 'thermometer',
            thermometers: [{ label: '?', units: 'C', answer: 83.5 }],
          },
          caption: 'The thermometer photographed at 5200 m. Use the magnifier to read the boiling point from the scale.',
        },
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
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Boiling point vs altitude (Kilimanjaro)',
            mode: 'readoff',
            xAxis: { label: 'altitude / m', min: 0, max: 7000, tick: 1000 },
            yAxis: { label: 'boiling point / °C', min: 50, max: 100, tick: 10 },
            // Clean recorded values. 4200 m → 90.0 °C sits ABOVE the falling trend
            // (higher than the 3700 m value below it and the 4700 m value above it),
            // breaking the otherwise steady decline — it is the anomaly.
            points: [[700, 97.5], [1200, 96.0], [1700, 94.0], [2200, 92.0], [2700, 91.5], [3200, 89.5], [3700, 88.0], [4200, 90.0], [4700, 84.5], [5200, 83.5], [5900, 80.0]],
            readouts: [{ x: 4200, note: 'anomalous point: 90.0 °C lies above the line of best fit' }],
            dataMaxX: 5900,
            bestFit: 'Boiling point falls steadily with altitude. The 4200 m reading (90.0 °C) is higher than the points on either side, so it does not lie on this trend → it is the anomalous result.',
          },
          caption: 'Boiling point against altitude. The dashed marker at 4200 m flags the point that does not fit the falling trend.',
        },
        ph: '4200 m produced the anomalous result (90.0°C). This value does not lie on the line of best fit / is inconsistent with the surrounding values: it is HIGHER than both 3700 m (88.0°C, lower altitude) and 4700 m (84.5°C, higher altitude), so boiling point appears to rise with altitude there, which breaks the falling trend.',
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
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    stem: 'A student wants to design a laboratory investigation to test if the altitude (air pressure) affects the boiling point of a liquid. The student has access to a laboratory vacuum pump that can reduce the air pressure in a sealed container.',
    tags: { unit: 'thermal-physics', topics: ['experimental design', 'variables', 'boiling point', 'pressure'], level: 'proficient' },
    // Context artefact: the available apparatus — sealed flask with thermometer, heat
    // source, and a vacuum pump with a pressure gauge to vary the air pressure.
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><rect x="150" y="80" width="120" height="150" rx="10" fill="#eaf3f7" stroke="#3a6ea5" stroke-width="3"/><rect x="158" y="150" width="104" height="72" rx="4" fill="#bfe3f2" stroke="#6cb6d6"/><text x="210" y="195" font-size="11" text-anchor="middle" fill="#2c5468">liquid</text><rect x="200" y="40" width="20" height="6" rx="2" fill="#5b6b78"/><line x1="210" y1="46" x2="210" y2="80" stroke="#5b6b78" stroke-width="3"/><text x="222" y="64" font-size="11" fill="#5b6b78">sealed lid</text><rect x="188" y="92" width="8" height="120" rx="4" fill="#ffffff" stroke="#c0392b" stroke-width="1.5"/><circle cx="192" cy="216" r="8" fill="#c0392b"/><text x="150" y="120" font-size="10" fill="#c0392b" text-anchor="end">thermometer</text><path d="M170,232 q40,30 80,0" fill="none" stroke="#e08a1e" stroke-width="2"/><g stroke="#e08a1e" stroke-width="3" stroke-linecap="round"><line x1="180" y1="248" x2="184" y2="240"/><line x1="200" y1="252" x2="204" y2="244"/><line x1="220" y1="252" x2="224" y2="244"/><line x1="240" y1="248" x2="244" y2="240"/></g><text x="210" y="280" font-size="11" text-anchor="middle" fill="#a8721a">heat source</text><line x1="270" y1="110" x2="380" y2="110" stroke="#5b6b78" stroke-width="3"/><rect x="380" y="80" width="90" height="60" rx="6" fill="#d9e2ec" stroke="#5b6b78" stroke-width="2"/><text x="425" y="106" font-size="11" text-anchor="middle" fill="#1f2d3a">vacuum</text><text x="425" y="122" font-size="11" text-anchor="middle" fill="#1f2d3a">pump</text><circle cx="510" cy="110" r="34" fill="#fff" stroke="#0b7285" stroke-width="2"/><line x1="510" y1="110" x2="528" y2="92" stroke="#c0392b" stroke-width="2.5"/><circle cx="510" cy="110" r="3" fill="#c0392b"/><text x="510" y="158" font-size="10" text-anchor="middle" fill="#0b7285">pressure gauge</text><line x1="470" y1="110" x2="476" y2="110" stroke="#5b6b78" stroke-width="3"/></svg>',
      },
      caption: 'Available apparatus: a sealed flask of liquid with a thermometer, a heat source, and a vacuum pump with a pressure gauge to reduce (and measure) the air pressure above the liquid.',
    },
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
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Humans need shelter every night and that means they have been looking for a temperate place to live for centuries. Hundreds of years ago, one method of keeping houses warm in winter was to build part of the construction underground or inside mountains. Italy, Canada and the United States have examples of these constructions which are, in general, named dugouts.\n\nNowadays extreme temperatures in some cities means that large quantities of energy are used in air conditioners or heaters to keep people at comfortable temperatures. One way we could reduce the use of energy in cities is to build accommodation underground.',
    tags: { unit: 'thermal-physics', topics: ['thermal insulation', 'solar energy', 'sustainability', 'evaluation'], level: 'advanced' },
    // Context artefact: an underground dwelling using a solar tube for daylight and an
    // evaporative water feature for cooling — the two technologies the tasks evaluate.
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="sun8" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient><marker id="cool8" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto"><path d="M0,6 L4,0 L8,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect x="0" y="0" width="600" height="110" fill="#dceefb"/><rect x="0" y="110" width="600" height="210" fill="#cda985"/><circle cx="70" cy="50" r="26" fill="url(#sun8)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="100" y1="44" x2="200" y2="80"/><line x1="100" y1="56" x2="200" y2="92"/></g><rect x="120" y="150" width="360" height="120" rx="8" fill="#efe3d2" stroke="#8a7355" stroke-width="2"/><text x="300" y="216" font-size="13" text-anchor="middle" fill="#6b5232" font-weight="700">underground living space</text><rect x="206" y="92" width="14" height="70" fill="#cfd8e0" stroke="#9aa7b3"/><circle cx="213" cy="92" r="14" fill="#fff7cc" stroke="#c79a10" stroke-width="2"/><g stroke="#f0c419" stroke-width="2"><line x1="213" y1="106" x2="213" y2="160"/></g><text x="240" y="130" font-size="10" fill="#a8721a">solar tube</text><rect x="360" y="225" width="80" height="30" rx="6" fill="#bfe3f2" stroke="#6cb6d6"/><g stroke="#0b7285" stroke-width="1.5"><line x1="380" y1="224" x2="378" y2="200" marker-end="url(#cool8)"/><line x1="400" y1="224" x2="402" y2="196" marker-end="url(#cool8)"/><line x1="420" y1="224" x2="418" y2="202" marker-end="url(#cool8)"/></g><text x="400" y="272" font-size="10" text-anchor="middle" fill="#2c5468">water feature</text><text x="400" y="190" font-size="10" text-anchor="middle" fill="#0b7285">evaporative cooling</text></svg>',
      },
      caption: 'An underground dwelling: a solar tube channels daylight from the surface, and an evaporative water feature cools the air inside without using electricity.',
    },
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
