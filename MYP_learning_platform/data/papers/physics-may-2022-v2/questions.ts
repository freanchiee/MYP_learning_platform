import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2022-v2',
  subject: 'Physics',
  session: 'May',
  year: 2022,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Forces & Motion: Aerodynamic Submarine Design (11 marks) Criterion A
  // V2: High-speed underwater drone modelled on shark skin/profile
  // Tunnel (pipe): v_in=80 m/s, v_out=60 m/s, t=20 s → L=(80+60)/2×20=70×20=1400 m
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
    stem: 'Engineers studied the skin texture of sharks to redesign the hull of a high-speed underwater vehicle. The tiny V-shaped ridges (denticles) on shark skin reduce drag by disrupting turbulent water flow. The diagrams below show the vehicle and the shark that inspired its design.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6eef2"/><stop offset="1" stop-color="#a8d8e0"/></linearGradient><marker id="arrR" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#0b7285"/></marker></defs><rect width="620" height="340" fill="url(#seaG)"/><text x="310" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Shark-skin inspired underwater vehicle</text><g><text x="150" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#0b7285">High-speed vehicle</text><ellipse cx="150" cy="110" rx="110" ry="30" fill="#37708a" stroke="#1f3a44" stroke-width="2"/><path d="M40,110 Q15,98 8,110 Q15,122 40,110 Z" fill="#2a5567" stroke="#1f3a44"/><path d="M250,96 q24,-22 38,-8 q-10,12 -38,22 Z" fill="#2a5567" stroke="#1f3a44"/><circle cx="225" cy="104" r="7" fill="#cfe9ef" stroke="#1f3a44"/><g stroke="#9ad0dc" stroke-width="1.4"><line x1="90" y1="100" x2="120" y2="100"/><line x1="90" y1="110" x2="120" y2="110"/><line x1="90" y1="120" x2="120" y2="120"/><line x1="140" y1="98" x2="170" y2="98"/><line x1="140" y1="110" x2="170" y2="110"/><line x1="140" y1="122" x2="170" y2="122"/></g><text x="150" y="160" text-anchor="middle" font-size="9" fill="#1f3a44">micro-ridged (denticle) hull</text></g><g><text x="460" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="#0b7285">Shark that inspired the design</text><path d="M360,110 Q430,78 540,108 Q560,112 575,100 Q566,118 558,116 Q566,126 575,138 Q556,128 540,116 Q430,142 360,110 Z" fill="#5b7e8c" stroke="#1f3a44" stroke-width="2"/><path d="M452,84 L470,58 L478,86 Z" fill="#4a6d7a" stroke="#1f3a44"/><path d="M430,126 L440,150 L456,128 Z" fill="#4a6d7a" stroke="#1f3a44"/><circle cx="386" cy="106" r="4" fill="#1f3a44"/><g stroke="#3a5662" stroke-width="0.9"><line x1="420" y1="104" x2="438" y2="100"/><line x1="430" y1="112" x2="448" y2="108"/><line x1="445" y1="100" x2="463" y2="96"/><line x1="455" y1="112" x2="473" y2="108"/></g><text x="460" y="168" text-anchor="middle" font-size="9" fill="#1f3a44">V-shaped denticles reduce turbulence</text></g><g font-size="11" fill="#0b7285"><text x="300" y="215" text-anchor="middle" font-weight="700">water flow direction</text><line x1="120" y1="240" x2="500" y2="240" stroke="#0b7285" stroke-width="2.5" marker-end="url(#arrR)"/><line x1="120" y1="268" x2="500" y2="268" stroke="#0b7285" stroke-width="2.5" marker-end="url(#arrR)"/><line x1="120" y1="296" x2="500" y2="296" stroke="#0b7285" stroke-width="2.5" marker-end="url(#arrR)"/></g><text x="310" y="324" text-anchor="middle" font-size="10" fill="#3a5662">Smooth streamlined flow past the textured hull</text></svg>',
      },
      caption: 'A high-speed underwater vehicle with a micro-ridged hull modelled on shark denticles.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The underwater vehicle uses electric motors that produce a total thrust of **380 000 N**.\n\n**State** the unit of thrust.',
        marks: 1,
        ph: 'newtons (N)',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The diagrams below show the forces on the vehicle in two situations.\n\n**Identify** which diagram shows the vehicle:\n- Travelling at **constant speed**\n- **Decelerating**\n\nExplain your reasoning for each.',
        marks: 2,
        ph: 'Diagram [X] shows constant speed: thrust = drag, forces are balanced, net force = 0.\nDiagram [Y] shows deceleration: drag > thrust, net force is backward, vehicle slows down.',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The original vehicle had a smooth cylindrical hull. The shark-skin inspired design has micro-ridges on its surface.\n\n**Explain** how the micro-ridge design allows the vehicle to travel at higher speeds.\n\nIn your answer, refer to:\n- drag force\n- balanced forces\n- the surface texture of the vehicle',
        marks: 3,
        ph: 'The micro-ridges break up turbulent water flow around the hull, reducing drag force (water resistance). With less drag, the thrust and drag balance at a higher speed. The textured surface disrupts the turbulent boundary layer, allowing water to flow more smoothly, just as it does along a shark\'s body.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The vehicle enters a water pipe and decelerates while travelling through it. The velocity–time graph shows the motion through the pipe.\n\nThe vehicle enters at **80 m s⁻¹** and exits at **60 m s⁻¹** after **20 seconds**.\n\n**Calculate** the length of the pipe section. Show your working.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'velocity / m s⁻¹',
            points: [[0, 80], [5, 75], [10, 70], [15, 65], [20, 60]],
            readouts: [{ x: 0, note: 'entry speed' }, { x: 20, note: 'exit speed after 20 s' }],
            dataMaxX: 20,
          },
          caption: 'Velocity–time graph for the vehicle in the pipe (80 m s⁻¹ → 60 m s⁻¹ over 20 s). Area under the line = length of pipe.',
        },
        ph: 'Length = area under v–t graph (trapezoid)\n= (v₁ + v₂)/2 × t\n= (80 + 60)/2 × 20\n= 70 × 20\n= **1400 m**',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The graph from part (d) shows the original vehicle entering the pipe at the same speed.\n\nThe redesigned shark-skin vehicle enters the **same pipe** at the **same initial speed** but exits at a **higher speed** (less drag).\n\n**Draw** a line on the graph to represent the motion of the redesigned vehicle through the pipe.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'velocity / m s⁻¹',
            points: [[0, 80], [5, 75], [10, 70], [15, 65], [20, 60]],
            readouts: [{ x: 0, note: 'same entry speed = 80 m s⁻¹' }, { x: 20, note: 'original exit = 60 m s⁻¹' }],
            dataMaxX: 20,
          },
          caption: 'Original vehicle motion. The redesigned (less-drag) vehicle starts at the same 80 m s⁻¹ but stays above this line, exiting above 60 m s⁻¹.',
        },
        ph: 'Draw a line starting at v = 80 m/s at the same start time as the original. The new line lies above the original throughout — it decelerates less steeply (less drag) and exits at a speed higher than 60 m/s.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Electricity: Step-Up Transformer (7 marks) Criterion A
  // V2: Step-up transformer for wind farm grid connection
  // Np=450, Ns=9000, Vs=6600 V → Vp=330 V; Efficiency=88%, Pin=25000 W → Pout=22000 W
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Transformers',
    marks: 7,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['transformers', 'power', 'voltage', 'current'], level: 'proficient' },
    stem: 'Wind farms generate electricity at a relatively low voltage. A step-up transformer is used to increase the voltage before electricity is fed into the national grid. The diagram below shows the transformer connecting a wind turbine to the high-voltage transmission line.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="640" height="320" fill="#ffffff"/><text x="320" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Step-up transformer: wind turbine to national grid</text><g><line x1="70" y1="250" x2="70" y2="120" stroke="#5b6b78" stroke-width="6"/><circle cx="70" cy="116" r="6" fill="#0b7285"/><g stroke="#0b7285" stroke-width="4" fill="none"><path d="M70,116 L70,72"/><path d="M70,116 L108,138"/><path d="M70,116 L32,138"/></g><text x="70" y="272" text-anchor="middle" font-size="10" fill="#3a5662">wind turbine</text><text x="70" y="286" text-anchor="middle" font-size="9" fill="#3a5662">(low voltage)</text></g><g stroke="#1f3a44" stroke-width="2.5" fill="none"><line x1="100" y1="150" x2="220" y2="150"/><line x1="100" y1="210" x2="220" y2="210"/></g><g><rect x="280" y="120" width="34" height="120" fill="#b0bec5" stroke="#5b6b78" stroke-width="2"/><rect x="326" y="120" width="34" height="120" fill="#b0bec5" stroke="#5b6b78" stroke-width="2"/><text x="320" y="110" text-anchor="middle" font-size="10" fill="#3a5662">iron core</text><g stroke="#0b7285" stroke-width="3" fill="none"><path d="M280,140 q-22,0 -22,12 q0,12 22,12"/><path d="M280,166 q-22,0 -22,12 q0,12 22,12"/><path d="M280,192 q-22,0 -22,12 q0,12 22,12"/></g><line x1="258" y1="152" x2="220" y2="150" stroke="#0b7285" stroke-width="2.5"/><line x1="258" y1="216" x2="220" y2="210" stroke="#0b7285" stroke-width="2.5"/><text x="232" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#0b7285">Primary</text><text x="232" y="266" text-anchor="middle" font-size="11" fill="#0b7285">Nₚ = 450 turns</text><g stroke="#f08c00" stroke-width="3" fill="none"><path d="M360,134 q22,0 22,10 q0,10 -22,10"/><path d="M360,156 q22,0 22,10 q0,10 -22,10"/><path d="M360,178 q22,0 22,10 q0,10 -22,10"/><path d="M360,200 q22,0 22,10 q0,10 -22,10"/></g><line x1="382" y1="144" x2="430" y2="150" stroke="#f08c00" stroke-width="2.5"/><line x1="382" y1="214" x2="430" y2="210" stroke="#f08c00" stroke-width="2.5"/><text x="408" y="100" text-anchor="middle" font-size="11" font-weight="700" fill="#f08c00">Secondary</text><text x="408" y="266" text-anchor="middle" font-size="11" fill="#f08c00">Nₛ = 9000 turns</text></g><g stroke="#f08c00" stroke-width="2.5" fill="none"><line x1="430" y1="150" x2="540" y2="150"/><line x1="430" y1="210" x2="540" y2="210"/></g><g><line x1="560" y1="250" x2="560" y2="120" stroke="#5b6b78" stroke-width="5"/><line x1="546" y1="130" x2="574" y2="130" stroke="#5b6b78" stroke-width="3"/><line x1="548" y1="150" x2="572" y2="150" stroke="#5b6b78" stroke-width="3"/><line x1="540" y1="150" x2="548" y2="150" stroke="#f08c00" stroke-width="2.5"/><line x1="540" y1="210" x2="560" y2="210" stroke="#f08c00" stroke-width="2.5"/><text x="560" y="272" text-anchor="middle" font-size="10" fill="#3a5662">transmission line</text><text x="560" y="286" text-anchor="middle" font-size="9" fill="#f08c00" font-weight="700">Vₛ = 6600 V</text></g></svg>',
      },
      caption: 'Step-up transformer: 450-turn primary (turbine side) and 9000-turn secondary (grid side), output 6600 V.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A transformer is described as \'ideal\' when it has no energy losses.\n\n**State** the relationship between the power input and power output in an ideal transformer.',
        marks: 1,
        ph: 'Power input = Power output',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'A step-up transformer has **450 turns** in the primary coil and **9 000 turns** in the secondary coil. The secondary (output) voltage is **6 600 V**.\n\n**Calculate** the primary (input) voltage.',
        marks: 2,
        ph: 'Vp/Vs = Np/Ns\nVp = Vs × (Np/Ns)\n= 6600 × (450/9000)\n= 6600 × (1/20)\n= **330 V**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'A real transformer has an efficiency of **88%**. The power input to the transformer is **25 000 W**.\n\n**Calculate** the useful power output.',
        marks: 2,
        ph: 'Power output = efficiency × power input\n= 0.88 × 25000\n= **22 000 W**',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'Electricity is transmitted at very high voltages across the national grid.\n\n**Explain** why high voltage is used for transmitting electricity over long distances. In your answer, refer to current and energy losses.',
        marks: 2,
        ph: 'High voltage → low current (for same power, P = IV). Lower current → less heating in cables (P_waste = I²R). So less energy is wasted as heat, and more electricity reaches consumers.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Thermal Physics: Ice Melting in Sugar Syrup (9 marks) Criterion A
  // V2: Ice melting in fresh water vs concentrated sugar syrup
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Ice Melting',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'density'], level: 'proficient' },
    stem: 'A student compares how fast an ice cube melts when placed in a cup of fresh water versus a cup of concentrated sugar syrup. Both liquids are at the same initial temperature. Concentrated sugar syrup is significantly denser than fresh water.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><text x="280" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Ice melting: fresh water vs sugar syrup</text><g><text x="150" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#0b7285">Cup A — fresh water</text><path d="M86,80 L214,80 L204,260 L96,260 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><path d="M92,118 L208,118 L200,254 L100,254 Z" fill="#cdeaf4" stroke="none"/><rect x="128" y="96" width="44" height="40" rx="5" fill="#ffffff" stroke="#7fb6c8" stroke-width="2" opacity="0.92"/><text x="150" y="121" text-anchor="middle" font-size="10" fill="#3a5662">ice</text><g stroke="#7fb6c8" stroke-width="1.4" fill="none"><path d="M150,138 q-6,16 0,30"/><path d="M150,138 q6,16 0,30"/></g><circle cx="78" cy="150" r="3" fill="#9ad0dc"/><circle cx="80" cy="172" r="3" fill="#9ad0dc"/><circle cx="76" cy="194" r="3" fill="#9ad0dc"/><text x="150" y="282" text-anchor="middle" font-size="10" fill="#3a5662">meltwater sinks → strong convection</text><text x="150" y="296" text-anchor="middle" font-size="10" font-weight="700" fill="#0b7285">ice melts faster</text></g><g><text x="410" y="54" text-anchor="middle" font-size="12" font-weight="700" fill="#f08c00">Cup B — sugar syrup</text><path d="M346,80 L474,80 L464,260 L356,260 Z" fill="none" stroke="#5b6b78" stroke-width="3"/><path d="M352,118 L468,118 L460,254 L360,254 Z" fill="#f3d59b" stroke="none"/><rect x="388" y="96" width="44" height="40" rx="5" fill="#ffffff" stroke="#7fb6c8" stroke-width="2" opacity="0.92"/><text x="410" y="121" text-anchor="middle" font-size="10" fill="#3a5662">ice</text><path d="M388,138 L432,138 L432,160 L388,160 Z" fill="#cdeaf4" opacity="0.85"/><text x="410" y="178" text-anchor="middle" font-size="8" fill="#0b7285">cold meltwater trapped (less dense)</text><circle cx="338" cy="150" r="3" fill="#d8a24a"/><circle cx="340" cy="172" r="3" fill="#d8a24a"/><circle cx="336" cy="194" r="3" fill="#d8a24a"/><text x="410" y="282" text-anchor="middle" font-size="10" fill="#3a5662">meltwater cannot sink → convection suppressed</text><text x="410" y="296" text-anchor="middle" font-size="10" font-weight="700" fill="#f08c00">ice melts slower</text></g><line x1="280" y1="70" x2="280" y2="300" stroke="#dde5ea" stroke-width="1.5" stroke-dasharray="4 4"/></svg>',
      },
      caption: 'An ice cube in fresh water (Cup A) and in denser concentrated sugar syrup (Cup B), both at the same starting temperature.',
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
        text: 'The student notices moisture forming on the **outside** of the cold cup.\n\n**Select** the correct name for this process.\n\nA. Evaporation\nB. Melting\nC. Sublimation\nD. Condensation',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A. Evaporation', 'B. Melting', 'C. Sublimation', 'D. Condensation'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'c',
        text: '**Name** the process by which water droplets formed on the outer surface of the cold cup.',
        marks: 1,
        ph: 'Condensation',
        level: 'foundation',
      },
      {
        label: 'd',
        text: '**Explain** why condensation occurs on the outside surface of the cold cup.',
        marks: 1,
        ph: 'The cup surface is cold. Water vapour in the warm surrounding air loses thermal energy on contact with the cold surface and changes state to liquid water (condenses).',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student finds that the ice melts more **slowly** in the sugar syrup than in the fresh water.\n\n**Explain** this observation using ideas about heat transfer by convection and the density of the sugar syrup.',
        marks: 3,
        ph: 'Sugar syrup is more dense than fresh water. As the ice melts, the cold fresh meltwater produced is less dense than the surrounding syrup. The cold meltwater cannot sink through the denser syrup, forming an insulating cold layer around the ice. This suppresses convection currents, reducing the rate of heat transfer to the ice and slowing the melting.',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'The student gently heats the sugar syrup on a hot plate while conducting the experiment.\n\n**Predict** and **explain** what would happen to the melting time of the ice in the sugar syrup.',
        marks: 2,
        ph: 'The ice would melt faster. Heating the sugar syrup increases the thermal energy of the liquid, increasing the temperature gradient between the liquid and ice. This increases the rate of heat transfer to the ice by convection, speeding up the melting.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Waves/Sound: Bottle Length & Frequency (16 marks) Criterion B/C
  // V2: Blowing across bottles of different lengths; speed of sound = 360 m/s
  // Data: 0.20→1800, 0.25→1440, 0.30→1200, 0.40→900 (missing 1/L=2.5), 0.50→720 Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Waves & Sound — Bottle Resonance',
    marks: 16,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound', 'frequency', 'wavelength', 'inverse proportion'], level: 'proficient' },
    stem: 'A student investigates how the length of air column inside a glass bottle affects the frequency of the sound produced when air is blown across the bottle\'s opening. The student\'s hypothesis is: "As the length of the air column increases, the frequency of the sound produced decreases (inverse proportion)."',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><text x="310" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Blowing across bottles with different air-column lengths</text><g><g transform="translate(30,60)"><path d="M14,0 h12 v18 q14 6 14 24 v118 h-40 v-118 q0 -18 14 -24 Z" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M0,128 h40 v32 h-40 Z" fill="#cdeaf4"/><text x="20" y="178" text-anchor="middle" font-size="10" fill="#0b7285">20 cm</text></g><g transform="translate(140,60)"><path d="M14,0 h12 v18 q14 6 14 24 v118 h-40 v-118 q0 -18 14 -24 Z" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M0,116 h40 v44 h-40 Z" fill="#cdeaf4"/><text x="20" y="178" text-anchor="middle" font-size="10" fill="#0b7285">25 cm</text></g><g transform="translate(250,60)"><path d="M14,0 h12 v18 q14 6 14 24 v118 h-40 v-118 q0 -18 14 -24 Z" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M0,104 h40 v56 h-40 Z" fill="#cdeaf4"/><text x="20" y="178" text-anchor="middle" font-size="10" fill="#0b7285">30 cm</text></g><g transform="translate(360,60)"><path d="M14,0 h12 v18 q14 6 14 24 v118 h-40 v-118 q0 -18 14 -24 Z" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M0,84 h40 v76 h-40 Z" fill="#cdeaf4"/><text x="20" y="178" text-anchor="middle" font-size="10" fill="#0b7285">40 cm</text></g><g transform="translate(470,60)"><path d="M14,0 h12 v18 q14 6 14 24 v118 h-40 v-118 q0 -18 14 -24 Z" fill="none" stroke="#0b7285" stroke-width="2.5"/><path d="M0,68 h40 v92 h-40 Z" fill="#cdeaf4"/><text x="20" y="178" text-anchor="middle" font-size="10" fill="#0b7285">50 cm</text></g></g><g><path d="M52,48 q14,-14 28,0" fill="none" stroke="#f08c00" stroke-width="2.5"/><path d="M76,42 l8,2 l-5,6 Z" fill="#f08c00"/><text x="78" y="38" font-size="9" fill="#f08c00">blow across opening</text></g><g><rect x="250" y="250" width="120" height="40" rx="6" fill="#1f3a44"/><text x="310" y="268" text-anchor="middle" font-size="11" fill="#3ad36a" font-family="monospace">1800 Hz</text><text x="310" y="284" text-anchor="middle" font-size="9" fill="#9ad0dc">frequency meter</text></g><text x="120" y="248" text-anchor="middle" font-size="10" fill="#3a5662">air column = height of air above the water line</text></svg>',
      },
      caption: 'Five identical glass bottles with air-column lengths of 20, 25, 30, 40 and 50 cm, blown across the opening; frequency read on a meter.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Write** a suitable research question for this investigation.',
        marks: 1,
        ph: 'How does the length of the air column inside a bottle affect the frequency of the sound produced?',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The student is given the following equipment:\n\n- 5 identical glass bottles with different water levels (air column lengths: 20 cm, 25 cm, 30 cm, 40 cm, 50 cm)\n- 3 identical glass bottles with a larger diameter\n- 4 plastic bottles of the same diameter as the first set\n- A frequency meter\n- A ruler\n\n**Select** the most appropriate equipment to use, and **justify** your selection.',
        marks: 3,
        ph: 'Select: 5 identical glass bottles with air column lengths 20, 25, 30, 40, 50 cm.\nJustification:\n- Same material (glass) controls the effect of material properties.\n- Same diameter controls cross-sectional area of air column.\n- 5 lengths gives sufficient data to identify pattern and plot a graph.',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Identify** the independent variable in this investigation.\n\n**State** two variables that should be controlled, and **explain** why each must be controlled.',
        marks: 2,
        ph: 'Independent variable: length of air column (height of air above water).\n\nControl variables:\n1. Bottle diameter — wider bottle → different air column volume → different frequency.\n2. Bottle material — different materials resonate differently, affecting frequency.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The student produces a graph of **frequency (Hz)** against **air column length (m)**.\n\n**Use** two data points from the graph to determine whether the data supports the hypothesis. **State** your conclusion.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Air column length / m', 'Frequency / Hz'],
            rows: [['0.20', '1800'], ['0.25', '1440'], ['0.30', '1200'], ['0.40', '900'], ['0.50', '720']],
          },
          caption: 'Frequency of the sound produced for each air-column length.',
        },
        ph: 'Choose two data points, e.g. (0.20 m, 1800 Hz) and (0.40 m, 900 Hz).\nFor inverse proportion: L × f = constant.\n0.20 × 1800 = 360\n0.40 × 900 = 360\nProducts are equal → confirms inverse proportion.\nConclusion: Data supports the hypothesis.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'The student creates a new table with an additional column for **1/Length (m⁻¹)**.\n\nPart of the table is shown below:\n\n| Length / m | Frequency / Hz | 1/Length / m⁻¹ |\n|------------|----------------|----------------|\n| 0.20 | 1800 | 5.0 |\n| 0.25 | 1440 | 4.0 |\n| 0.30 | 1200 | 3.3 |\n| **0.40** | **900** | **?** |\n| 0.50 | 720 | 2.0 |\n\n**Calculate** the missing value of 1/Length for the 0.40 m bottle.',
        marks: 1,
        ph: '1/0.40 = **2.5 m⁻¹**',
        level: 'foundation',
      },
      {
        label: 'f',
        text: 'The student plots a graph of **frequency (Hz)** on the y-axis against **1/Length (m⁻¹)** on the x-axis.\n\n**Plot** the data point for the bottle of length 0.40 m on the graph, and **draw** a line of best fit through all points.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xAxis: { label: '1/Length / m⁻¹', min: 0, max: 5, tick: 1 },
            yAxis: { label: 'Frequency / Hz', min: 0, max: 2000, tick: 200 },
            dataTable: [{ x: 2.0, y: 720 }, { x: 3.3, y: 1200 }, { x: 4.0, y: 1440 }, { x: 5.0, y: 1800 }],
            plotMissing: [2.5, 900],
          },
          caption: 'Frequency against 1/Length. Plot the missing point for the 0.40 m bottle (1/L = 2.5 m⁻¹) and draw a line of best fit through the origin.',
        },
        ph: 'Plot the point (2.5, 900) on the graph.\nDraw a straight line of best fit through the origin, with roughly equal numbers of data points above and below.',
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
            xLabel: '1/Length / m⁻¹',
            yLabel: 'Frequency / Hz',
            points: [[0, 0], [2.0, 720], [2.5, 900], [3.3, 1200], [4.0, 1440], [5.0, 1800]],
            readouts: [{ x: 0, note: 'line passes through origin' }, { x: 5.0, note: 'f = 1800 Hz at 1/L = 5.0' }],
            dataMaxX: 5.0,
          },
          caption: 'Line of best fit (through the origin) for frequency against 1/Length. Gradient = Δf / Δ(1/L) = speed of sound.',
        },
        ph: 'Choose two points on the line of best fit.\nGradient = Δfrequency / Δ(1/length)\n= (1800 − 0) / (5.0 − 0) = **360 m s⁻¹**\n(Accept values 354–366 m s⁻¹)',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Waves/Sound: Guitar String Tension (15 marks) Criterion C/B
  // V2: Mass = 0.60 kg → tension = 0.60 × 9.8 = 5.88 ≈ 5.9 N
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound — Guitar String',
    marks: 15,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['frequency', 'tension', 'sound', 'investigation design'], level: 'proficient' },
    stem: 'A student investigates how the tension in a guitar string affects the frequency of the note produced. They attach different masses to one end of the wire, which is clamped at both ends, to change the tension.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="arrG" markerWidth="9" markerHeight="9" refX="4" refY="8" orient="auto"><path d="M0,0 L8,0 L4,8 Z" fill="#0b7285"/></marker></defs><rect width="600" height="300" fill="#ffffff"/><text x="300" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Wire under tension from a hanging mass</text><rect x="40" y="70" width="40" height="150" fill="#9aa7b0" stroke="#5b6b78" stroke-width="2"/><text x="60" y="240" text-anchor="middle" font-size="9" fill="#3a5662">bench / clamp</text><rect x="80" y="96" width="22" height="20" rx="3" fill="#37708a" stroke="#1f3a44"/><text x="60" y="92" font-size="9" fill="#0b7285">fixed clamp</text><line x1="102" y1="106" x2="470" y2="106" stroke="#1f3a44" stroke-width="2.5"/><g><rect x="170" y="92" width="16" height="28" rx="3" fill="#f08c00" stroke="#a8531a"/><rect x="380" y="92" width="16" height="28" rx="3" fill="#f08c00" stroke="#a8531a"/><text x="283" y="86" text-anchor="middle" font-size="9" fill="#f08c00">two bridges set the vibrating length</text></g><circle cx="478" cy="106" r="12" fill="none" stroke="#5b6b78" stroke-width="3"/><circle cx="478" cy="106" r="2.5" fill="#5b6b78"/><text x="478" y="88" text-anchor="middle" font-size="9" fill="#3a5662">pulley</text><line x1="478" y1="118" x2="478" y2="180" stroke="#1f3a44" stroke-width="2.5"/><rect x="462" y="180" width="32" height="40" rx="4" fill="#37708a" stroke="#1f3a44" stroke-width="2"/><text x="478" y="204" text-anchor="middle" font-size="10" fill="#ffffff">0.60</text><text x="478" y="216" text-anchor="middle" font-size="8" fill="#cfe9ef">kg</text><line x1="478" y1="225" x2="478" y2="258" stroke="#0b7285" stroke-width="2" marker-end="url(#arrG)"/><text x="500" y="248" font-size="10" fill="#0b7285">weight = mg</text><text x="500" y="262" font-size="10" fill="#0b7285">→ tension T</text><text x="283" y="138" text-anchor="middle" font-size="10" fill="#3a5662">pluck the wire between the bridges</text></svg>',
      },
      caption: 'A wire clamped over two bridges with a 0.60 kg mass hung over a pulley; the hanging weight sets the tension.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student hangs a mass of **0.60 kg** from the end of the wire.\n\n**Calculate** the tension in the wire. Use **g = 9.8 N kg⁻¹**.',
        marks: 2,
        ph: 'Tension = weight = mg\n= 0.60 × 9.8\n= 5.88 N ≈ **5.9 N**',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'The student wants to investigate how tension affects the frequency of the guitar string.\n\n**State** two variables that should be controlled in this investigation.',
        marks: 2,
        ph: 'Any two of:\n- Length of the wire (between the clamps)\n- Thickness (diameter) of the wire\n- Material of the wire\n- Method of plucking the string',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The student collects data for different masses hung on the wire. Part of their results table is shown below:\n\n| Tension / N | Frequency / Hz |\n|-------------|----------------|\n| 5.9 | 210 |\n| 23.5 | 420 |\n| 52.9 | 630 |\n| **75.2** | **750** |\n| 94.1 | 840 |\n\nA student accidentally records the tension for the fourth row as 74.8 N. The correct value, rounded consistently to 1 decimal place, is **75.2 N**.\n\n**Complete** the table, ensuring:\n- Column headers include the correct quantities and units\n- Results are recorded in ascending order\n- Values are rounded consistently',
        marks: 4,
        ph: 'The table should show:\n- Column headers: "Tension / N" and "Frequency / Hz"\n- Results in ascending order of tension (5.9, 23.5, 52.9, 75.2, 94.1)\n- Tensions to 1 d.p.; frequencies as whole numbers\n- 75.2 N correctly (not 74.8)',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Suggest** one improvement the student could make to this investigation to improve the quality of the data. **Explain** why this improvement would be beneficial.',
        marks: 2,
        ph: 'Improvement: Repeat each measurement at least 3 times and calculate a mean.\nExplanation: Reduces the impact of random error (e.g. imprecise plucking) and gives a more reliable result.',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The student wants to extend the investigation by changing the **independent variable** (currently: tension).\n\n**State** one new independent variable the student could investigate.\n\n**State** two variables that would need to be controlled if this new independent variable were used.',
        marks: 3,
        ph: 'New IV: Length of the wire\n\nControl variables (if length is IV):\n1. Tension (keep constant with same hanging mass)\n2. Material and diameter of wire',
        level: 'proficient',
      },
      {
        label: 'f',
        text: '**Write** a hypothesis for the new investigation you described in part (e).\n\nYour hypothesis should follow the format: "If [independent variable] increases, then [dependent variable] will ... because ..."',
        marks: 2,
        ph: 'If the length of the wire increases, then the frequency of the sound produced will decrease, because a longer wire vibrates at a lower natural frequency, producing a lower-pitched sound wave.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Sound Intensity: Bubble Wrap Layers (17 marks) Criterion C/B
  // V2: How layers of bubble wrap affect sound intensity level
  // Q6b: 2 layers → (116+115+114)/3=115 dB; 4 layers → (113+112+114)/3=113 dB
  // Q6c: mean of 6 and 8 layers = (109+103)/2=106 dB
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Sound — Sound Intensity',
    marks: 17,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['sound intensity', 'investigation design', 'data analysis'], level: 'proficient' },
    stem: 'A student investigates how layers of bubble wrap affect the sound intensity level measured on the other side of the barrier. They use a sound level meter placed a fixed distance from a speaker, with bubble wrap layers placed between them.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 620 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="280" fill="#ffffff"/><text x="310" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Sound intensity through layers of bubble wrap</text><line x1="40" y1="220" x2="580" y2="220" stroke="#5b6b78" stroke-width="2"/><g><path d="M60,120 L90,120 L120,96 L120,176 L90,152 L60,152 Z" fill="#37708a" stroke="#1f3a44" stroke-width="2"/><circle cx="92" cy="136" r="10" fill="#1f3a44"/><text x="92" y="200" text-anchor="middle" font-size="10" fill="#3a5662">speaker</text></g><g><line x1="124" y1="110" x2="172" y2="98" stroke="#f08c00" stroke-width="2"/><line x1="124" y1="136" x2="178" y2="136" stroke="#f08c00" stroke-width="2"/><line x1="124" y1="162" x2="172" y2="174" stroke="#f08c00" stroke-width="2"/><text x="150" y="86" text-anchor="middle" font-size="9" fill="#f08c00">sound waves</text></g><g><rect x="270" y="86" width="9" height="100" rx="3" fill="#bfe3ec" stroke="#7fb6c8"/><rect x="282" y="86" width="9" height="100" rx="3" fill="#bfe3ec" stroke="#7fb6c8"/><rect x="294" y="86" width="9" height="100" rx="3" fill="#bfe3ec" stroke="#7fb6c8"/><rect x="306" y="86" width="9" height="100" rx="3" fill="#bfe3ec" stroke="#7fb6c8"/><g fill="#7fb6c8"><circle cx="274" cy="100" r="2"/><circle cx="274" cy="130" r="2"/><circle cx="274" cy="160" r="2"/><circle cx="298" cy="100" r="2"/><circle cx="298" cy="130" r="2"/><circle cx="298" cy="160" r="2"/></g><text x="288" y="206" text-anchor="middle" font-size="10" fill="#3a5662">bubble wrap layers</text></g><g><rect x="450" y="96" width="60" height="100" rx="8" fill="#1f3a44" stroke="#0b2530" stroke-width="2"/><rect x="460" y="108" width="40" height="34" rx="3" fill="#0b1f28"/><text x="480" y="130" text-anchor="middle" font-size="13" fill="#3ad36a" font-family="monospace">115</text><text x="480" y="160" text-anchor="middle" font-size="9" fill="#9ad0dc">dB</text><circle cx="480" cy="180" r="6" fill="#5b6b78"/><text x="480" y="212" text-anchor="middle" font-size="10" fill="#3a5662">sound level meter</text></g><line x1="120" y1="244" x2="450" y2="244" stroke="#0b7285" stroke-width="1.5"/><line x1="120" y1="238" x2="120" y2="250" stroke="#0b7285"/><line x1="450" y1="238" x2="450" y2="250" stroke="#0b7285"/><text x="285" y="262" text-anchor="middle" font-size="10" fill="#0b7285">fixed distance speaker → meter</text></svg>',
      },
      caption: 'A speaker and a sound level meter a fixed distance apart, with layers of bubble wrap placed between them.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student takes **three measurements** for each number of bubble wrap layers.\n\n**State** one reason why taking three measurements improves the investigation.',
        marks: 1,
        ph: 'Taking three measurements allows identification of anomalous values and gives a more reliable mean result, reducing the effect of random error.',
        level: 'foundation',
      },
      {
        label: 'b',
        text: 'The table below shows the student\'s results for **2 layers** of bubble wrap:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 116 |\n| 2 | 115 |\n| 3 | 114 |\n\nAnd for **4 layers** of bubble wrap:\n\n| Trial | Sound intensity level / dB |\n|-------|---------------------------|\n| 1 | 113 |\n| 2 | 112 |\n| 3 | 114 |\n\n**Calculate** the mean sound intensity level for **2 layers** and for **4 layers**.',
        marks: 2,
        ph: '2 layers: mean = (116 + 115 + 114) / 3 = 345/3 = **115 dB**\n4 layers: mean = (113 + 112 + 114) / 3 = 339/3 = **113 dB**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The complete results for all numbers of layers are shown below:\n\n| Layers | Mean sound intensity level / dB |\n|--------|--------------------------------|\n| 0 | 120 |\n| 2 | 115 |\n| 4 | 113 |\n| 6 | 109 |\n| 8 | 103 |\n| 10 | 97 |\n\n**Calculate** the mean of the sound intensity levels for 6 and 8 layers combined.',
        marks: 1,
        ph: 'Mean = (109 + 103) / 2 = 212/2 = **106 dB**',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The student wants to design a **new investigation** using the available equipment. The investigation will test how the **number of layers of bubble wrap** affects the **sound intensity level** measured through it.\n\n**Design** a full investigation. In your answer, include:\n- The independent variable, dependent variable, and at least **two** control variables with justification\n- A **hypothesis** with a scientific explanation\n- A **method** that could be followed by another student\n- How you would **collect sufficient data** to draw a valid conclusion',
        marks: 13,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="260" fill="#ffffff"/><text x="300" y="26" text-anchor="middle" font-size="15" font-weight="700" fill="#1f3a44">Layered-barrier model: sound energy absorbed per layer</text><g><rect x="40" y="70" width="60" height="120" rx="6" fill="#37708a" stroke="#1f3a44" stroke-width="2"/><text x="70" y="206" text-anchor="middle" font-size="10" fill="#3a5662">source</text><text x="70" y="134" text-anchor="middle" font-size="11" fill="#ffffff" font-weight="700">120 dB</text></g><g><rect x="200" y="56" width="14" height="148" rx="3" fill="#cfe9ef" stroke="#7fb6c8" stroke-width="1.5"/><rect x="220" y="56" width="14" height="148" rx="3" fill="#bfe0ea" stroke="#7fb6c8" stroke-width="1.5"/><rect x="240" y="56" width="14" height="148" rx="3" fill="#aad6e3" stroke="#7fb6c8" stroke-width="1.5"/><rect x="260" y="56" width="14" height="148" rx="3" fill="#94ccdc" stroke="#7fb6c8" stroke-width="1.5"/><rect x="280" y="56" width="14" height="148" rx="3" fill="#7fc1d4" stroke="#7fb6c8" stroke-width="1.5"/><text x="247" y="224" text-anchor="middle" font-size="10" fill="#3a5662">each layer traps air and absorbs sound energy</text></g><g><line x1="106" y1="90" x2="196" y2="90" stroke="#f08c00" stroke-width="4"/><line x1="300" y1="90" x2="430" y2="90" stroke="#f08c00" stroke-width="2" stroke-dasharray="6 4"/><line x1="106" y1="130" x2="196" y2="130" stroke="#f08c00" stroke-width="4"/><line x1="300" y1="130" x2="430" y2="130" stroke="#f08c00" stroke-width="1.5" stroke-dasharray="6 4"/><text x="150" y="78" text-anchor="middle" font-size="9" fill="#f08c00">strong</text><text x="365" y="78" text-anchor="middle" font-size="9" fill="#f08c00">weaker</text></g><g><rect x="450" y="70" width="60" height="120" rx="8" fill="#1f3a44" stroke="#0b2530" stroke-width="2"/><rect x="460" y="84" width="40" height="34" rx="3" fill="#0b1f28"/><text x="480" y="107" text-anchor="middle" font-size="13" fill="#3ad36a" font-family="monospace">97</text><text x="480" y="200" text-anchor="middle" font-size="10" fill="#3a5662">meter</text></g></svg>',
          },
          caption: 'Layered-barrier model: sound passes through successive layers, each absorbing energy, so the level measured at the meter falls as layers are added.',
        },
        ph: 'Variables:\n- IV: number of bubble wrap layers\n- DV: sound intensity level (dB)\n- CV1: distance speaker to meter (changing distance changes intensity)\n- CV2: type/thickness of bubble wrap (different wrap → different properties)\n- CV3: sound frequency/volume of speaker\n\nHypothesis:\nIf number of bubble wrap layers increases, sound intensity level will decrease, because each layer traps air (poor conductor) and absorbs more sound energy.\n\nMethod:\n1. Place speaker and meter 50 cm apart; record baseline (0 layers)\n2. Place 2 layers between them; record 3 measurements\n3. Repeat for 4, 6, 8, 10 layers\n4. Calculate mean for each\n\nData: ≥5 values, 3 repeats, plot dB vs layers.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Space Physics: Mars at Farther Orbital Position (6 marks) Criterion A
  // V2: Mars at farther orbital position; d = 5.4×10¹¹ m → t = 1800 s = 30 minutes
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics — Mars Communication',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['retrograde motion', 'speed of light', 'heliocentric model'], level: 'proficient' },
    stem: 'Ancient astronomers noticed that the apparent position of Mars in the night sky appeared to move backwards relative to the stars at certain times of the year. This phenomenon is called retrograde motion.',
    artefact: {
      component: 'OrbitSim',
      data: {
        mode: 'orbit',
        central: 'Sun',
        bodies: [
          { name: 'Sun', role: 'center', radius: 16, colour: '#f08c00', fixed: true },
          { name: 'Earth', role: 'orbiter', orbitalPeriod: 365, orbitRadius: 70, radius: 7, colour: '#0b7285' },
          { name: 'Mars', role: 'orbiter', orbitalPeriod: 687, orbitRadius: 110, radius: 6, colour: '#c0552f' },
        ],
      },
      caption: 'Heliocentric model: Earth (faster, inner orbit) overtakes Mars (slower, outer orbit). When Earth passes Mars, Mars appears to move backwards against the stars — retrograde motion.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Ancient astronomers believed in the **geocentric model** of the solar system (Earth at the centre).\n\n**Explain** why the retrograde motion of Mars was difficult to explain using the geocentric model.',
        marks: 2,
        ph: 'In the geocentric model, Mars orbits Earth in one direction — it should always appear to move in the same direction from Earth. Retrograde motion (apparent backward movement) cannot occur if Mars has a simple circular orbit around Earth.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A signal is sent from Earth to a space probe orbiting Mars. At this orbital configuration, the distance between Earth and Mars is **5.4 × 10¹¹ m**. The speed of light (and radio waves) is **3.0 × 10⁸ m s⁻¹**.\n\n**Calculate** the time it takes for the signal to travel from Earth to Mars. Give your answer in **minutes**.',
        marks: 2,
        ph: 't = d/v\n= 5.4 × 10¹¹ / 3.0 × 10⁸\n= 1800 s\n= 1800 / 60\n= **30 minutes**',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Scientists calculate a precise **launch date** for a rocket to travel from Earth to Mars.\n\n**Explain** why the launch date is important for a mission to Mars.',
        marks: 2,
        ph: 'The launch date is chosen when Earth and Mars are at optimal orbital alignment, minimising travel distance. A shorter distance requires less fuel and travel time. If launched at the wrong alignment, the enormous extra distance makes the mission far more expensive and longer.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Mars Missions Evaluation (13 marks) Criterion D
  // V2: Same structure — evaluate robotic vs crewed Mars mission comparison
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Mars Missions',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space exploration', 'evaluation', 'evidence', 'stakeholders'], level: 'proficient' },
    stem: 'Several space agencies are debating whether to send robotic or crewed missions to Mars. The table below presents data on proposed missions from different agencies.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Proposed mission', 'Type', 'Estimated cost / billion US$', 'Crew', 'Main objective'],
        rows: [
          ['Agency A — "Ares"', 'Crewed', '480', '4 astronauts', 'Surface sample return + human research'],
          ['Agency B — "Pathfinder II"', 'Robotic', '6', '0 (rover)', 'Soil and atmosphere analysis'],
          ['Agency C — "Helios"', 'Crewed', '520', '6 astronauts', 'Build first permanent base'],
          ['Agency D — "Swarm"', 'Robotic', '9', '0 (3 rovers)', 'Map water-ice deposits'],
        ],
      },
      caption: 'Proposed crewed and robotic Mars missions from four agencies, with estimated cost, crew and objective.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Evaluate** whether a crewed mission to Mars represents a better scientific investment than a robotic mission. In your answer, discuss:\n\n- At least **two technical advantages and two technical disadvantages** of sending humans compared to robots (with scientific explanations)\n- **Economic implications** for the space agency funding the mission\n- **Ethical considerations** for a crewed versus robotic approach\n- A **concluding appraisal** of which approach is more justified\n\nUse evidence and scientific reasoning to support your points.',
        marks: 13,
        ph: 'Technical advantages of crewed: real-time decision-making, fine motor dexterity for sample collection, adaptability to unexpected events.\nTechnical disadvantages of crewed: life support systems add mass/cost, radiation exposure, bone loss/muscle atrophy, communication delay prevents Earth-control.\nEconomic: crewed costs 10–100× more than robotic; robotic allows parallel missions at lower unit cost.\nEthical: human life risk vs scientific gain; who selects crew (representation); international cooperation vs national prestige.\nConclusion: Robotic missions currently offer better cost-to-science ratio; crewed missions justified for complex tasks requiring human judgment.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 9 — Mars Environment Challenges (6 marks) Criterion D
  // V2: Same 3 factors — temperature, radiation, low gravity
  // ─────────────────────────────────────────────────────────────
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Life on Mars',
    marks: 6,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['space', 'temperature', 'radiation', 'gravity', 'colonisation'], level: 'proficient' },
    stem: 'A Mars colony would face extreme environmental conditions. Scientists and engineers must find ways to support human life in these conditions over a long period.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss** the challenges of living on Mars by explaining the effect of each factor listed below on human colonisers, and suggesting how each challenge could be overcome:\n\n1. **Low temperature** (average surface temperature −60 °C)\n2. **Radiation** (Mars has no global magnetic field and a very thin atmosphere)\n3. **Low gravity** (Mars has 38% of Earth\'s surface gravity)',
        marks: 6,
        ph: '1. Low temperature:\n   Effect: Impossible to survive outside without protection; water freezes; crops cannot grow outdoors.\n   Solution: Pressurised, insulated domed habitats; geothermal heating.\n\n2. Radiation:\n   Effect: High exposure to solar wind and cosmic rays; increases cancer risk and cellular DNA damage.\n   Solution: Build underground habitat; use lead/polyethylene shielding; radiation-resistant construction materials.\n\n3. Low gravity:\n   Effect: Muscles and bones weaken over months; cardiovascular system adapts (heart shrinks); balance disruption.\n   Solution: Daily resistance exercise regime; centrifuge facilities; calcium and vitamin D supplements.',
        level: 'advanced',
      },
    ],
  },

]
