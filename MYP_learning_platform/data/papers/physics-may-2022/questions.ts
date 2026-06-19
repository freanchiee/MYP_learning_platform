import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2022',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: High-Speed Train Design (11 marks) Criterion A
  // Context: A high-speed maglev train was redesigned after the shape of the kingfisher bird's beak.
  // Numbers changed: tunnel length calculation from v-t graph
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Forces & Motion',
    marks: 11,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['forces', 'balanced forces', 'speed and velocity', 'drag'], level: 'proficient' },
    stem: 'Engineers redesigned a high-speed maglev train after the shape of the kingfisher bird\'s beak. The new train design reduces drag and improves speed. The diagrams below show the train and the bird that inspired it.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="m22sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dceef6"/><stop offset="1" stop-color="#f3f9fc"/></linearGradient><linearGradient id="m22body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4f7"/><stop offset="1" stop-color="#b9cdd9"/></linearGradient><marker id="m22arr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="620" height="250" fill="url(#m22sky)"/><text x="310" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Magnetic levitation (maglev) train</text><line x1="20" y1="170" x2="600" y2="170" stroke="#5b6b78" stroke-width="3"/><rect x="40" y="178" width="20" height="34" fill="#9aa9b4"/><rect x="200" y="178" width="20" height="34" fill="#9aa9b4"/><rect x="360" y="178" width="20" height="34" fill="#9aa9b4"/><rect x="520" y="178" width="20" height="34" fill="#9aa9b4"/><g><path d="M70,150 L470,150 Q520,150 540,120 Q470,108 70,108 Q56,129 70,150 Z" fill="url(#m22body)" stroke="#5b6b78" stroke-width="1.5"/><rect x="110" y="118" width="34" height="18" rx="3" fill="#bfe3f2" stroke="#7aa8bd"/><rect x="170" y="118" width="34" height="18" rx="3" fill="#bfe3f2" stroke="#7aa8bd"/><rect x="230" y="118" width="34" height="18" rx="3" fill="#bfe3f2" stroke="#7aa8bd"/><rect x="290" y="118" width="34" height="18" rx="3" fill="#bfe3f2" stroke="#7aa8bd"/><rect x="350" y="118" width="34" height="18" rx="3" fill="#bfe3f2" stroke="#7aa8bd"/><path d="M540,120 Q560,116 566,124 Q556,132 540,132 Z" fill="#cdd9e1" stroke="#5b6b78"/></g><rect x="70" y="156" width="470" height="6" rx="3" fill="#3a6ea5" opacity="0.85"/><g stroke="#c0392b" stroke-width="2" stroke-linecap="round"><line x1="120" y1="156" x2="120" y2="150"/><line x1="220" y1="156" x2="220" y2="150"/><line x1="320" y1="156" x2="320" y2="150"/><line x1="420" y1="156" x2="420" y2="150"/></g><text x="150" y="92" font-size="11" fill="#1f2d3a">beak-shaped (streamlined) front</text><line x1="150" y1="96" x2="120" y2="116" stroke="#94a3ad" stroke-width="1"/><text x="300" y="200" font-size="11" text-anchor="middle" fill="#3a6ea5">repelling magnets levitate the train above the track → near-zero friction</text><g><line x1="450" y1="80" x2="540" y2="80" stroke="#0b7285" stroke-width="2.5" marker-end="url(#m22arr)"/><text x="495" y="72" font-size="11" text-anchor="middle" fill="#0b7285">thrust →</text></g></svg>',
      },
      caption: 'A maglev train levitated by repelling magnets; its streamlined, kingfisher-beak front reduces drag.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The train uses magnetic levitation to travel. The upward magnetic force on the train is 580 000 N. **State** the unit of force.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams below show the forces on the train in two different situations.\n\n**Identify** which diagram shows the train:\n- Travelling at **constant speed**\n- **Accelerating** forward\n\nExplain your reasoning for each.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="m22b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="200" fill="#ffffff"/><g><text x="140" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram X</text><rect x="70" y="80" width="140" height="34" rx="6" fill="#bcd0dd" stroke="#5b6b78"/><line x1="140" y1="97" x2="240" y2="97" stroke="#c0392b" stroke-width="3" marker-end="url(#m22b)"/><line x1="140" y1="97" x2="40" y2="97" stroke="#c0392b" stroke-width="3" marker-end="url(#m22b)"/><text x="252" y="100" font-size="11" fill="#c0392b">thrust 60 kN</text><text x="0" y="100" font-size="11" fill="#c0392b">drag 60 kN</text><text x="140" y="150" font-size="11" text-anchor="middle" fill="#5b6b78">forces equal in size</text></g><line x1="280" y1="40" x2="280" y2="170" stroke="#e2e8f0" stroke-width="2"/><g><text x="420" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Diagram Y</text><rect x="350" y="80" width="140" height="34" rx="6" fill="#bcd0dd" stroke="#5b6b78"/><line x1="420" y1="97" x2="530" y2="97" stroke="#c0392b" stroke-width="3" marker-end="url(#m22b)"/><line x1="420" y1="97" x2="370" y2="97" stroke="#c0392b" stroke-width="3" marker-end="url(#m22b)"/><text x="450" y="84" font-size="11" text-anchor="middle" fill="#c0392b">thrust 90 kN</text><text x="362" y="84" font-size="11" text-anchor="end" fill="#c0392b">drag 60 kN</text><text x="420" y="150" font-size="11" text-anchor="middle" fill="#5b6b78">thrust larger than drag</text></g></svg>',
          },
          caption: 'Diagram X: thrust and drag are balanced. Diagram Y: thrust is larger than drag.',
        },
        ph: 'Diagram [X] shows constant speed because the forces are balanced (resultant = 0).\nDiagram [Y] shows acceleration because the thrust force is greater than the drag force.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The original train design had a flat front. The redesigned train has a beak-shaped front modelled on the kingfisher.\n\n**Explain** how the redesigned beak-shaped front allows the train to travel at higher speeds. In your answer, refer to:\n- the drag force\n- balanced forces\n- the shape of the train',
        marks: 3,
        ph: 'The streamlined beak-shaped front reduces the drag force (air resistance). With less drag, the forces on the train become balanced at a higher speed, since thrust no longer needs to overcome as much resistance. The streamlined shape allows air to flow smoothly around the train.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The train enters a tunnel and travels through it. The velocity–time graph below shows the train\'s motion: it enters at **80 m s⁻¹** and accelerates steadily to **120 m s⁻¹** over the **20 s** it takes to pass through.\n\n**Calculate** the length of the tunnel. Show your working.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Train velocity through the tunnel',
            xAxis: { label: 'time / s', min: 0, max: 20, tick: 4 },
            yAxis: { label: 'velocity / m s⁻¹', min: 0, max: 140, tick: 20 },
            points: [[0, 80], [20, 120]],
            dataMaxX: 20,
            readouts: [{ x: 0, note: 'enters tunnel at 80 m s⁻¹' }, { x: 20, note: 'exits tunnel at 120 m s⁻¹' }],
            areaReadout: 'Tunnel length = area under the line = average velocity × time.',
          },
          caption: 'Velocity–time graph for the train passing through the tunnel; the area under the line is the tunnel length.',
        },
        ph: 'Length = area under graph (trapezoid)\n= area of rectangle + area of triangle\nor: average speed × time\n= (v₁ + v₂)/2 × t\n= (80 + 120)/2 × 20\n= 2000 m',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the original train entering the tunnel at a certain speed.\n\nThe redesigned train enters the **same tunnel** at the **same speed** but exits at a **higher speed**.\n\n**Draw** a line on the graph to represent the motion of the redesigned train through the tunnel. The train enters at the same time and position.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Original train (dashed) — draw the redesigned train above it',
            xAxis: { label: 'time / s', min: 0, max: 20, tick: 4 },
            yAxis: { label: 'velocity / m s⁻¹', min: 0, max: 140, tick: 20 },
            points: [[0, 80], [20, 120]],
            originalLine: [[0, 80], [20, 120]],
            dataMaxX: 20,
            task: 'Your redesigned-train line should start at the same point (0 s, 80 m s⁻¹) and stay above the dashed original line, ending at a velocity higher than 120 m s⁻¹.',
          },
          caption: 'The dashed line is the original train. The redesigned train enters at the same speed but exits faster, so its line lies above the original throughout.',
        },
        ph: 'Draw a line starting at the same y-intercept as the original, always above the original line (showing higher speed throughout), with the same starting point but ending at a higher velocity. The line should not show acceleration at the start (it enters at the same initial speed).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Transformers (7 marks) Criterion A
  // Context: A transformer used in a power distribution network
  // Numbers changed: Vp = 11500V (from 12000V)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity',
    marks: 7,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['transformers', 'power', 'voltage', 'current'], level: 'proficient' },
    stem: 'Transformers are used in electricity distribution networks to change the voltage of an alternating current. The diagram below shows a step-up transformer used in a power grid.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="240" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Step-up transformer</text><rect x="230" y="60" width="100" height="120" fill="none" stroke="#6b5232" stroke-width="14"/><text x="280" y="125" font-size="12" text-anchor="middle" fill="#6b5232">iron core</text><g stroke="#c0392b" stroke-width="2.5" fill="none"><path d="M210,70 q-14,8 0,16 q-14,8 0,16 q-14,8 0,16 q-14,8 0,16 q-14,8 0,16"/></g><g stroke="#2b6cb0" stroke-width="2.5" fill="none"><path d="M350,66 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12 q14,7 0,12"/></g><line x1="150" y1="78" x2="200" y2="78" stroke="#c0392b" stroke-width="2"/><line x1="150" y1="162" x2="200" y2="162" stroke="#c0392b" stroke-width="2"/><line x1="360" y1="72" x2="420" y2="72" stroke="#2b6cb0" stroke-width="2"/><line x1="360" y1="168" x2="420" y2="168" stroke="#2b6cb0" stroke-width="2"/><text x="150" y="50" font-size="12" font-weight="700" fill="#c0392b">Primary coil</text><text x="150" y="200" font-size="11" fill="#c0392b">N&#8346; = 850 turns</text><text x="150" y="216" font-size="11" fill="#c0392b">input V&#8346;</text><text x="420" y="50" font-size="12" font-weight="700" text-anchor="end" fill="#2b6cb0">Secondary coil</text><text x="420" y="200" font-size="11" text-anchor="end" fill="#2b6cb0">N&#8347; = 15 300 turns</text><text x="420" y="216" font-size="11" text-anchor="end" fill="#2b6cb0">output V&#8347; = 525 V</text></svg>',
      },
      caption: 'A step-up transformer: 850 turns on the primary coil and 15 300 turns on the secondary coil, wound on a shared iron core.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A transformer is described as \'ideal\' when it has no energy losses.\n\n**State** the relationship between the power input and power output in an ideal transformer.',
        marks: 1,
        ph: 'Power input = Power output (power in equals power out)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A step-up transformer has **850 turns** in the primary coil and **15 300 turns** in the secondary coil. The secondary (output) voltage is **525 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\nVp = 525 × (850/15300)\n= 525 × (1/18)\n≈ 29.2 V\n\nor rearranging:\nVp = 525 × 850/15300 ≈ 29.2 V',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **97%**. The power input to the transformer is **14 800 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.97 × 14800\n= 14356 W (≈ 14 400 W)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is transmitted at very high voltages across the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'By increasing the voltage, the current in the transmission cables is reduced. Since energy is wasted as heat in the wires (P = I²R), a lower current means less energy is wasted as heat, so more power reaches the destination.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Ice Melting Investigation (9 marks) Criterion A/B
  // Context: Comparing how ice melts in pure water vs salt water
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'density'], level: 'proficient' },
    stem: 'A student investigates how quickly ice melts when placed in a cup of liquid. They compare two cups — one containing pure water and one containing salt water — both at the same initial temperature.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="m22w" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dff1fa"/><stop offset="1" stop-color="#9fd0e8"/></linearGradient><marker id="m22c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#2c5468"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><rect x="0" y="250" width="560" height="30" fill="#e7d6bf"/><g><text x="150" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pure water</text><path d="M80,70 L220,70 L210,250 L90,250 Z" fill="url(#m22w)" stroke="#5b7c8c" stroke-width="2"/><rect x="125" y="95" width="50" height="40" rx="4" fill="#bfe3f2" stroke="#7aa8bd"/><text x="150" y="120" font-size="10" text-anchor="middle" fill="#2c5468">ice</text><path d="M150,140 C140,170 160,190 150,230" stroke="#2c5468" stroke-width="1.5" fill="none" marker-end="url(#m22c)"/><path d="M120,150 C112,185 128,205 120,235" stroke="#2c5468" stroke-width="1.5" fill="none" marker-end="url(#m22c)" opacity="0.7"/><text x="150" y="270" font-size="10" text-anchor="middle" fill="#3a7d44">strong convection → ice melts faster</text></g><g><text x="410" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Salt water</text><path d="M340,70 L480,70 L470,250 L350,250 Z" fill="url(#m22w)" stroke="#5b7c8c" stroke-width="2"/><rect x="385" y="95" width="50" height="40" rx="4" fill="#bfe3f2" stroke="#7aa8bd"/><text x="410" y="120" font-size="10" text-anchor="middle" fill="#2c5468">ice</text><line x1="360" y1="155" x2="460" y2="155" stroke="#c98a3c" stroke-width="1.5" stroke-dasharray="4 4"/><text x="410" y="172" font-size="9" text-anchor="middle" fill="#a8531a">cold melt-water stays near the top</text><text x="410" y="270" font-size="10" text-anchor="middle" fill="#a8531a">weak convection → ice melts slower</text></g></svg>',
      },
      caption: 'Ice melting in pure water (left) and dense salt water (right). In salt water the cold melt-water floats on top, weakening convection.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Heat can be transferred by different processes. **Match** each description to the correct method of heat transfer:\n\n- Transfer of thermal energy through direct contact between particles\n- Transfer of thermal energy through bulk movement of a fluid\n- Transfer of thermal energy as electromagnetic waves without needing a medium',
        marks: 1,
        widget: 'variable_classify',
        widgetOptions: ['Conduction', 'Convection', 'Radiation'],
        ph: 'Conduction | Convection | Radiation',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student observes droplets of water forming on the outside of the cold cup. **Select** the correct name for this process.\n\nA. Evaporation\nB. Melting\nC. Sublimation\nD. Condensation',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Evaporation', 'B. Melting', 'C. Sublimation', 'D. Condensation'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'c',
        text: '**Name** the process by which the water droplets formed on the outside of the cup.',
        marks: 1,
        ph: 'Condensation',
        level: 'foundation',
      },
      {
        label: 'd',
        text: '**Explain** why condensation occurs on the outside surface of the cold cup.',
        marks: 1,
        ph: 'The outside of the cup is cold. Water vapour in the air loses thermal energy when it contacts the cold surface and changes state to liquid (condenses).',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student finds that the ice melts more **slowly** in the salt water than in the pure water.\n\n**Explain** this observation using ideas about heat transfer by convection and the density of salt water.',
        marks: 3,
        ph: 'Salt water is more dense than pure water. As the ice melts, the cold (melt)water produced is less dense and would normally rise — but in salt water, the denser salt water stays near the surface. This reduces convection currents, so heat is transferred less quickly to the ice, causing it to melt more slowly.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student stirs the salt water with a spoon throughout the experiment.\n\n**Predict** and **explain** what would happen to the melting time of the ice in the salt water.',
        marks: 2,
        ph: 'Stirring would distribute the cold melt water throughout the cup, increasing convection. This would increase the rate of heat transfer to the ice, so the melting time would decrease (the ice would melt faster).',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: Tube Length & Frequency (16 marks) Criterion B/C
  // Context: Investigation into how tube length affects the frequency of sound produced
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of a tube affects the frequency of the sound it produces when air is blown across the open end. The student\'s hypothesis is: "As the length of a tube increases, the frequency of the sound produced decreases (inverse proportion)."',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="m22tube" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#d9b382"/><stop offset="0.5" stop-color="#c79a5e"/><stop offset="1" stop-color="#a87b43"/></linearGradient></defs><rect width="560" height="260" fill="#ffffff"/><text x="280" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pan-flute tubes (wooden, 2.5 cm diameter)</text><line x1="40" y1="62" x2="250" y2="62" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 3"/><text x="40" y="56" font-size="9" fill="#94a3ad">open tops (all level)</text><g><rect x="55" y="62" width="26" height="80" fill="url(#m22tube)" stroke="#7a5a31"/><rect x="105" y="62" width="26" height="120" fill="url(#m22tube)" stroke="#7a5a31"/><rect x="155" y="62" width="26" height="160" fill="url(#m22tube)" stroke="#7a5a31"/><rect x="205" y="62" width="26" height="200" fill="url(#m22tube)" stroke="#7a5a31"/></g><text x="68" y="156" font-size="10" text-anchor="middle" fill="#5b6b78">20 cm</text><text x="118" y="196" font-size="10" text-anchor="middle" fill="#5b6b78">30 cm</text><text x="168" y="236" font-size="10" text-anchor="middle" fill="#5b6b78">40 cm</text><text x="218" y="252" font-size="10" text-anchor="middle" fill="#ffffff">50 cm</text><g><path d="M300,72 q14,-10 28,0 q14,10 28,0" stroke="#0b7285" stroke-width="2" fill="none"/><text x="312" y="56" font-size="11" fill="#0b7285">blow air across the open top</text></g><rect x="340" y="110" width="130" height="74" rx="6" fill="#222"/><text x="405" y="142" font-size="16" font-family="monospace" fill="#3ad36a" text-anchor="middle">860 Hz</text><text x="405" y="164" font-size="10" fill="#9aa9b4" text-anchor="middle">frequency meter (40 cm tube)</text><text x="405" y="210" font-size="11" text-anchor="middle" fill="#5b6b78">longer tube &#8594; lower frequency</text></svg>',
      },
      caption: 'Wooden pan-flute tubes of different lengths; blowing across the open end makes the air vibrate, and a frequency meter reads the pitch.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of a tube affect the frequency of the sound it produces?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 wooden tubes of **2.5 cm** diameter (lengths: 20 cm, 30 cm, 40 cm, 50 cm, 60 cm)\n- 3 wooden tubes of **4.0 cm** diameter\n- 4 plastic tubes of **2.5 cm** diameter\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 wooden tubes of 2.5 cm diameter.\nJustification:\n- Only one material (wood) should be used to keep material as a control variable.\n- Only one diameter (2.5 cm) should be used to keep diameter as a control variable.\n- Five lengths are needed to collect enough data to identify a pattern.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of tube.\n\nControl variables:\n1. Material (wood) — different materials have different properties that could affect the frequency.\n2. Diameter of the tube — a different diameter would change the volume of air inside and affect the frequency.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **tube length (m)**.\n\nThe student takes two data points from the graph to test if the relationship is an inverse proportion.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Length L / m', 'Frequency f / Hz'],
            rows: [['0.20', '1720'], ['0.25', '1376'], ['0.30', '1147'], ['0.40', '860'], ['0.50', '688']],
          },
          caption: 'Measured frequency for each tube length. Test whether L × f is constant.',
        },
        ph: 'Choose two data points, e.g. (0.20 m, 1720 Hz) and (0.40 m, 860 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1720 = 344\n0.40 × 860 = 344\nThe products are equal, confirming inverse proportion.\nConclusion: The data supports the hypothesis — as length doubles, frequency halves.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1720 | 5.0 |\n| 0.25 | 1376 | 4.0 |\n| 0.30 | 1147 | 3.3 |\n| **0.40** | **860** | **?** |\n| 0.50 | 688 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m tube.',
        marks: 1,
        ph: '1/0.40 = 2.5 m⁻¹',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the tube of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Frequency against 1/length',
            xAxis: { label: '1 / Length / m⁻¹', min: 0, max: 5.5, tick: 1 },
            yAxis: { label: 'frequency / Hz', min: 0, max: 1800, tick: 200 },
            points: [[2.0, 688], [3.33, 1147], [4.0, 1376], [5.0, 1720]],
            dataMaxX: 5.5,
            readouts: [{ x: 2.5, note: 'plot the missing 0.40 m tube here: (2.5, 860)' }],
            task: 'The four known points are shown. Add the missing point (2.5 m⁻¹, 860 Hz), then draw a straight line of best fit through the origin.',
          },
          caption: 'Frequency vs 1/length. The plotted points (excluding the missing 0.40 m tube) lie on a straight line through the origin.',
        },
        ph: 'Plot the point (2.5, 860) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below the line.',
        level: 'developing',
      },
      {
        label: 'g',
        text: 'The graph of frequency against 1/length is a straight line through the origin.\n\n**Select** what physical quantity the **gradient** of this graph represents.\n\nA. Wavelength of the sound\nB. Amplitude of the sound\nC. Speed of sound in air\nD. Period of the sound wave',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Wavelength', 'B. Amplitude', 'C. Speed of sound in air', 'D. Period'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'h',
        text: '**Calculate** the speed of sound in air using the gradient of your line of best fit from part (f).\n\nShow your working and give appropriate units.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            title: 'Line of best fit: frequency against 1/length',
            xAxis: { label: '1 / Length / m⁻¹', min: 0, max: 5.5, tick: 1 },
            yAxis: { label: 'frequency / Hz', min: 0, max: 1800, tick: 200 },
            points: [[0, 0], [2.0, 688], [2.5, 860], [3.33, 1147], [4.0, 1376], [5.0, 1720]],
            dataMaxX: 5.5,
            readouts: [{ x: 5.0, note: 'far point on the line: (5.0, 1720)' }],
            gradientReadout: 'Gradient = Δf ÷ Δ(1/L) = 1720 ÷ 5.0 = 344 (= speed of sound in m s⁻¹).',
          },
          caption: 'A straight line of best fit through the origin; its gradient (Δf ÷ Δ(1/L)) equals the speed of sound in air.',
        },
        ph: 'Choose two points on the line of best fit that are far apart.\nGradient = Δfrequency / Δ(1/length)\nGradient = (1720 − 0) / (5.0 − 0) = 344\nSpeed of sound = 344 m s⁻¹\n(Accept values in range 333–353 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Guitar String Tension (15 marks) Criterion C/B
  // Context: Investigation into how string tension affects frequency
  // Numbers changed: mass = 0.32 kg (from ~0.3 kg)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 15,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['frequency', 'tension', 'sound', 'investigation design'], level: 'proficient' },
    stem: 'A student investigates how the tension in a guitar string affects the frequency of the note produced. They attach different masses to the end of the wire to change the tension.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Vibrating-wire apparatus</text><rect x="40" y="120" width="200" height="20" fill="#8a6d3b"/><rect x="60" y="140" width="18" height="110" fill="#8a6d3b"/><rect x="40" y="110" width="40" height="14" fill="#5b6b78"/><circle cx="250" cy="118" r="14" fill="#cdd9e1" stroke="#5b6b78" stroke-width="2"/><circle cx="250" cy="118" r="4" fill="#5b6b78"/><line x1="70" y1="112" x2="240" y2="112" stroke="#c0392b" stroke-width="1.5"/><text x="150" y="104" font-size="10" fill="#c0392b">metal wire</text><line x1="262" y1="118" x2="262" y2="200" stroke="#5b6b78" stroke-width="1.5"/><path d="M254,200 a8,8 0 0 0 16,0" fill="none" stroke="#5b6b78" stroke-width="1.5"/><rect x="248" y="208" width="28" height="34" rx="3" fill="#9aa9b4" stroke="#5b6b78"/><text x="262" y="262" font-size="11" text-anchor="middle" fill="#5b6b78">0.32 kg mass</text><line x1="262" y1="208" x2="262" y2="226" stroke="#0b7285" stroke-width="2" marker-end="url(#m22dn)"/><defs><marker id="m22dn" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><path d="M0,0 L6,0 L3,6 Z" fill="#0b7285"/></marker></defs><rect x="400" y="150" width="90" height="70" rx="6" fill="#222"/><text x="445" y="180" font-size="15" font-family="monospace" fill="#3ad36a" text-anchor="middle">165 Hz</text><text x="445" y="206" font-size="9" fill="#9aa9b4" text-anchor="middle">guitar tuner</text><path d="M340,150 q14,-8 28,0" stroke="#0b7285" stroke-width="1.5" fill="none"/><text x="360" y="138" font-size="10" fill="#0b7285">pluck the wire</text></svg>',
      },
      caption: 'A metal wire is clamped over a pulley with a hanging mass providing the tension; plucking it sounds a note whose frequency is read on a tuner.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.32 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.32 × 9.8\n= 3.136 N ≈ 3.1 N',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student wants to investigate how tension affects the frequency of the guitar string.\n\n**State** two variables that should be controlled in this investigation.',
        marks: 2,
        ph: 'Any two of:\n- Length of the wire\n- Thickness (diameter) of the wire\n- Material of the wire\n- Force used to pluck/strum the string',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 3.1 | 165 |\n| 12.3 | 330 |\n| 27.8 | 495 |\n| **39.3** | **660** |\n| 49.0 | 737 |\n\nA student accidentally records the tension for the fourth row as 38.7 N. The correct value, rounded consistently to 1 decimal place, is **39.3 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Tension / N', 'Frequency / Hz'],
            rows: [['3.1', '165'], ['12.3', '330'], ['27.8', '495'], ['39.3 (recorded 38.7)', '660'], ['49.0', '737']],
          },
          caption: 'Student results. The fourth tension was recorded as 38.7 N; corrected and rounded to 1 d.p. it is 39.3 N.',
        },
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension\n- All tensions to 1 d.p., all frequencies as whole numbers\n- 39.3 N correctly rounded (not 38.7 or 39.28)',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Suggest** one improvement the student could make to this investigation to improve the quality of the data. **Explain** why this improvement would be beneficial.',
        marks: 2,
        ph: 'Improvement: Repeat each measurement at least 3 times and calculate a mean.\nExplanation: This reduces the effect of random errors and makes the results more reliable.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student wants to extend the investigation by changing the **independent variable** (currently: tension).\n\n**State** one new independent variable the student could investigate.\n\n**State** two variables that would need to be controlled if this new independent variable were used.',
        marks: 3,
        ph: 'New IV: Length of the wire (or thickness/material/temperature)\n\nControl variables (if length is the new IV):\n1. Tension (keep constant by using same hanging mass)\n2. Material/thickness of the wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire vibrates more slowly, producing a lower-pitched sound.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound: Intensity Through Walls (17 marks) Criterion C/B
  // Context: Measuring how sound intensity level changes through different numbers of cardboard layers
  // Numbers changed: mean = 112 dB (from 113), mean of means = 104 dB (from 105)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound',
    marks: 17,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound intensity', 'investigation design', 'data analysis'], level: 'proficient' },
    stem: 'A student investigates how layers of cardboard affect the sound intensity level measured on the other side. They use a sound level meter placed a fixed distance from a speaker, with cardboard layers placed between the speaker and the meter.',
    artefact: {
      component: 'WaveSim',
      data: {
        title: 'Speaker and sound level meter',
        mode: 'soundDistance',
        scale: { label: 'Distance from speaker / m', min: 0, max: 12 },
        speakerAt: 0,
        meterStart: 2,
        refDb: 120,
        readoutUnit: 'dB',
      },
      caption: 'A speaker emits sound that a sound level meter (in dB) measures. Drag the meter to see how loudness falls with distance; in the experiment the distance is fixed and cardboard layers are added instead.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of cardboard layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements improves reliability. It allows the student to identify anomalous results and calculate a more accurate mean.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of cardboard:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 114 |\n| 2 | 112 |\n| 3 | 112 |\n\nAnd for **4 layers** of cardboard:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 114 |\n| 2 | 113 |\n| 3 | 111 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (114 + 112 + 112) / 3 = 338 / 3 = 112.7 → 113 dB (or 112 dB if using mode/median)\n4 layers: mean = (114 + 113 + 111) / 3 = 338 / 3 = 112.7 → 113 dB\n\n(Award 1 mark per correct mean)',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 120 |\n| 2 | 113 |\n| 4 | 113 |\n| 6 | 108 |\n| 8 | 102 |\n| 10 | 96 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (108 + 102) / 2 = 210 / 2 = 105 dB',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the equipment shown. The investigation will test how the **number of layers of cardboard** affects the **sound intensity level** measured through the cardboard wall.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="m22box" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8c99a"/><stop offset="1" stop-color="#c79a5e"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cardboard-box model of a wall</text><polygon points="80,120 300,90 480,140 480,250 80,250" fill="url(#m22box)" stroke="#8a6d3b" stroke-width="2"/><polygon points="80,120 300,90 300,200 80,230" fill="#d9b382" stroke="#8a6d3b"/><rect x="270" y="100" width="14" height="120" fill="#b9b9b9" stroke="#7a7a7a"/><rect x="288" y="103" width="14" height="120" fill="#cccccc" stroke="#7a7a7a"/><text x="220" y="80" font-size="11" fill="#1f2d3a">cardboard layers (the &quot;wall&quot;)</text><line x1="260" y1="84" x2="284" y2="104" stroke="#94a3ad" stroke-width="1"/><g><circle cx="160" cy="195" r="16" fill="#2c3e50"/><circle cx="160" cy="195" r="7" fill="#5b6b78"/><g stroke="#f0c419" stroke-width="2" stroke-linecap="round"><line x1="176" y1="180" x2="186" y2="174"/><line x1="178" y1="195" x2="190" y2="195"/><line x1="176" y1="210" x2="186" y2="216"/></g><text x="140" y="230" font-size="11" fill="#5b6b78">buzzer</text></g><g><line x1="400" y1="150" x2="400" y2="200" stroke="#94a3ad" stroke-width="2"/><rect x="382" y="150" width="36" height="50" rx="4" fill="#c0392b" stroke="#7a2418"/><rect x="388" y="158" width="24" height="16" rx="2" fill="#111"/><text x="400" y="170" font-size="9" font-family="monospace" fill="#3ad36a" text-anchor="middle">dB</text><text x="400" y="225" font-size="11" text-anchor="middle" fill="#5b6b78">sound level meter</text></g></svg>',
          },
          caption: 'A cardboard box split by stackable cardboard layers, with a buzzer on one side and a sound level meter on the other.',
        },
        ph: 'Variables:\n- IV: number of layers of cardboard\n- DV: sound intensity level (measured in dB using a sound level meter)\n- CV1: distance between speaker and meter (kept constant — changing distance would affect intensity)\n- CV2: type and thickness of cardboard (same material — different materials absorb sound differently)\n- CV3: volume of the speaker/sound source\n\nHypothesis:\nIf the number of layers of cardboard increases, then the sound intensity level measured will decrease, because each layer absorbs some of the sound energy, so more layers will result in more total absorption.\n\nMethod:\n1. Set up speaker and sound level meter 50 cm apart\n2. Place 0 layers of cardboard between them; record sound level 3 times\n3. Add 2 layers of cardboard; record 3 measurements\n4. Repeat for 4, 6, 8, 10 layers\n5. Calculate mean for each number of layers\n\nData collection:\nRecord at least 5 different numbers of layers with 3 trials each. Plot a graph of sound intensity level (y-axis) vs number of layers (x-axis). Draw a line of best fit.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Mars & Retrograde Motion (6 marks) Criterion A/D
  // Context: Mars missions and communication with Earth
  // Numbers changed: distance = 3.6×10¹¹ m (from 4×10¹¹ m)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['retrograde motion', 'speed of light', 'heliocentric model'], level: 'proficient' },
    stem: 'Humans have been observing the planets in the night sky for thousands of years. Ancient astronomers noticed that Mars appeared to move backwards in the sky at certain times of the year, which is known as retrograde motion.',
    artefact: {
      component: 'OrbitSim',
      data: {
        title: 'Earth and Mars orbiting the Sun',
        mode: 'orbit',
        central: 'Sun',
        bodies: [
          { name: 'Sun', role: 'center', radius: 16, colour: '#f0a91e' },
          { name: 'Earth', role: 'orbiter', orbitalPeriod_days: 365, orbitRadius: 70, radius: 7, colour: '#2b6cb0' },
          { name: 'Mars', role: 'orbiter', orbitalPeriod_days: 687, orbitRadius: 110, radius: 6, colour: '#c0392b' },
        ],
      },
      caption: 'In the heliocentric model, the faster-moving Earth periodically overtakes Mars. As Earth passes Mars, Mars appears to move backwards (retrograde) against the background stars.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Ancient astronomers believed in the **geocentric model** of the solar system (Earth at the centre).\n\n**Explain** why the retrograde motion of Mars was difficult to explain using the geocentric model.',
        marks: 2,
        ph: 'In the geocentric model, Mars would orbit around Earth in a circular or elliptical path. If Earth were the centre, Mars would always appear to move in the same direction. Retrograde motion (Mars appearing to move backwards) cannot be explained if Mars simply orbits Earth — it would need to follow a circular path around Earth, which would always appear to move in one direction from Earth.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a spacecraft on Mars. The distance between Earth and Mars is **3.6 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Mars. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 3.6 × 10¹¹ / 3.0 × 10⁸\n= 1200 s\n= 1200 / 60\n= 20 minutes',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Mars.\n\n**Explain** why the launch date is important for a mission to Mars.',
        marks: 2,
        ph: 'The launch date is calculated to minimise the distance between Earth and Mars (since both planets are in different orbital positions). A shorter distance means:\n- Less travel time for the spacecraft\n- Less fuel needed\n- Less communication delay\nLaunching at the wrong time would mean travelling a much greater distance.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Mars Missions Evaluation (13 marks) Criterion D
  // Context: Evaluating Mars missions from technical, economic, and political perspectives
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space exploration', 'evaluation', 'evidence', 'stakeholders'], level: 'proficient' },
    stem: 'Several space agencies and private companies are planning crewed missions to Mars within the next few decades. The table below summarises proposed Mars missions and their objectives.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Organisation', 'Type', 'Estimated cost', 'Main objective'],
        rows: [
          ['NASA (USA)', 'Government agency', '$230 billion', 'Crewed landing and sample return'],
          ['SpaceX (private)', 'Private company', '~$10 billion per person', 'Build a self-sustaining Mars colony'],
          ['Mars One (Netherlands)', 'Private/non-profit', '$6 billion', 'One-way settlement of four people'],
          ['CNSA (China)', 'Government agency', '$100 billion', 'Crewed mission and base by the 2040s'],
        ],
      },
      caption: 'Proposed crewed Mars missions, their backers, estimated costs and objectives.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** the proposal to send humans to Mars. In your answer, discuss:\n\n- At least **two technical challenges** involved in planning the journey to Mars (with scientific explanations)\n- **Economic advantages and disadvantages** for the government of a country funding the mission\n- **Political implications** of a crewed Mars mission\n- A **concluding appraisal** of whether the mission should proceed\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical challenges:\n1. Distance/communication delay — signals take 20 minutes each way, making real-time communication impossible. Engineers must design autonomous systems.\n2. Radiation exposure — Mars has no protective magnetosphere; astronauts face high doses of cosmic radiation, increasing cancer risk. Shielding is needed.\n3. (Others: low gravity effects, food/water supply, life support systems)\n\nEconomic advantages: technological spin-offs, creation of jobs, international prestige, potential resource extraction.\nEconomic disadvantages: enormous cost (estimated $500 billion+), opportunity cost (could fund healthcare/education), uncertain return on investment.\n\nPolitical implications: national prestige and soft power, international cooperation or competition, debate over resource rights on Mars.\n\nConclusion: Weigh the long-term scientific benefits against short-term costs; a collaborative international mission would distribute costs and share benefits.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Mars Environment Challenges (6 marks) Criterion D
  // Context: Scientific challenges of living on Mars
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space', 'temperature', 'radiation', 'gravity', 'colonisation'], level: 'proficient' },
    stem: 'Some scientists propose that humans could eventually live permanently on Mars. However, the environment on Mars is very different from Earth.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Earth', 'Mars'],
        rows: [
          ['Average surface temperature', '+15 °C', '−60 °C'],
          ['Atmosphere', 'Thick (≈101 kPa), mostly N₂/O₂', 'Very thin (≈0.6 kPa), mostly CO₂'],
          ['Global magnetic field', 'Yes — shields from radiation', 'No — surface exposed to radiation'],
          ['Surface gravity', '9.8 N kg⁻¹ (100%)', '3.7 N kg⁻¹ (38%)'],
        ],
      },
      caption: 'Comparing conditions on Earth and Mars for the factors a coloniser must overcome.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on Mars by explaining the effect of each factor listed below on human colonisers, and suggesting how each challenge could be overcome:\n\n1. **Low temperature** (average surface temperature is −60 °C)\n2. **Radiation** (Mars has a very thin atmosphere and no global magnetic field)\n3. **Low gravity** (Mars has 38% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Low temperature:\n   Effect: Too cold for humans to survive; too cold to grow food outdoors.\n   Solution: Insulated habitats that minimise heat transfer; heated growing chambers for food production.\n\n2. Radiation:\n   Effect: High exposure to cosmic rays and solar radiation; increased risk of cancer and cell damage.\n   Solution: Underground habitats (Martian rock provides shielding); reflective suits; radiation-absorbing materials.\n\n3. Low gravity:\n   Effect: Bone density loss and muscle wasting over time; cardiovascular problems; difficulties moving.\n   Solution: Regular exercise programmes to maintain muscle mass; possible use of rotating habitat sections to simulate gravity.',
        level: 'advanced',
      },
    ],
  },

]
