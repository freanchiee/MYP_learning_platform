import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2019-v1',
  subject: 'Physics',
  session: 'May',
  year: 2019,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Thermos Flask',
    marks: 7,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Heat and temperature are different quantities associated with the study of thermal physics. Heat transfer takes place through three processes: conduction, convection and radiation.',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'radiation', 'insulation'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="360" fill="#ffffff"/><defs><marker id="ah" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f08c00"/></marker><marker id="ahr" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c92a2a"/></marker><marker id="ahb" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect x="0" y="300" width="560" height="60" fill="#f1f3f5"/><line x1="0" y1="300" x2="560" y2="300" stroke="#adb5bd" stroke-width="1.5"/><rect x="60" y="170" width="150" height="130" rx="6" fill="#e9ecef" stroke="#868e96" stroke-width="2"/><g stroke="#fa5252" stroke-width="6" stroke-linecap="round"><line x1="78" y1="180" x2="78" y2="290"/><line x1="98" y1="180" x2="98" y2="290"/><line x1="118" y1="180" x2="118" y2="290"/><line x1="138" y1="180" x2="138" y2="290"/><line x1="158" y1="180" x2="158" y2="290"/><line x1="178" y1="180" x2="178" y2="290"/><line x1="198" y1="180" x2="198" y2="290"/></g><rect x="58" y="166" width="154" height="10" rx="4" fill="#868e96"/><text x="135" y="318" font-size="13" fill="#222" text-anchor="middle" font-weight="bold">Hot radiator</text><g stroke="#0b7285" stroke-width="2.5" fill="none"><path d="M90,165 q-8,-22 4,-40 q10,-18 0,-36" marker-end="url(#ahb)"/><path d="M135,165 q8,-22 -4,-40 q-10,-18 0,-36" marker-end="url(#ahb)"/><path d="M180,165 q-8,-22 4,-40 q10,-18 0,-36" marker-end="url(#ahb)"/></g><text x="135" y="44" font-size="12" fill="#0b7285" text-anchor="middle" font-weight="bold">Warm air rising (convection)</text><g stroke="#c92a2a" stroke-width="2.5" fill="none"><path d="M214,210 q40,-6 80,0" marker-end="url(#ahr)"/><path d="M214,235 q40,-6 80,0" marker-end="url(#ahr)"/><path d="M214,260 q40,-6 80,0" marker-end="url(#ahr)"/></g><circle cx="360" cy="235" r="26" fill="#ffd8a8" stroke="#e8590c" stroke-width="2"/><rect x="350" y="261" width="20" height="38" fill="#495057"/><text x="360" y="200" font-size="12" fill="#c92a2a" text-anchor="middle" font-weight="bold">Heat felt across the room (radiation)</text><rect x="430" y="172" width="14" height="128" fill="#adb5bd" stroke="#495057" stroke-width="1.5"/><text x="437" y="160" font-size="11" fill="#495057" text-anchor="middle">metal bracket</text><line x1="437" y1="300" x2="437" y2="330" stroke="#f08c00" stroke-width="3" marker-end="url(#ah)"/><text x="495" y="320" font-size="12" fill="#f08c00" text-anchor="middle" font-weight="bold">heat through bracket (conduction)</text></svg>',
      },
      caption: 'Heat transfer from a hot radiator: warm air rising (convection), heat felt across the room (radiation), and heat spreading through the metal mounting bracket (conduction).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows heat transfer occurring from a hot radiator. **Select** the process label (Convection, Radiation, or Conduction) for each situation shown in the diagram.',
        marks: 1,
        ph: 'Identify which heat transfer process applies to each scenario shown (e.g. warm air rising from radiator = convection; radiator warming nearby objects without contact = radiation; heat spreading through a metal bracket = conduction).',
      },
      {
        label: 'b',
        text: '**State** the units used to measure temperature and heat.',
        marks: 2,
        ph: 'Temperature: ...\nHeat: ...',
      },
      {
        label: 'c',
        text: 'A cyclist fills a thermos flask with hot coffee and goes for a long ride. Three hours later she opens the flask and finds the coffee is still hot. **Explain** why the coffee has stayed hot. In your answer, you should refer to two features of the flask and use your knowledge and understanding of heat transfer.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="360" fill="#ffffff"/><rect x="150" y="20" width="120" height="26" rx="6" fill="#495057"/><text x="210" y="38" font-size="11" fill="#fff" text-anchor="middle">screw stopper</text><path d="M150 46 L150 330 Q150 348 168 348 L252 348 Q270 348 270 330 L270 46 Z" fill="#dee2e6" stroke="#868e96" stroke-width="3"/><path d="M168 46 L168 322 Q168 334 180 334 L240 334 Q252 334 252 322 L252 46 Z" fill="#f8f9fa" stroke="#0b7285" stroke-width="2.5"/><path d="M182 60 L182 318 Q182 322 186 322 L234 322 Q238 322 238 318 L238 60 Z" fill="#a5d8ff" stroke="#1971c2" stroke-width="2"/><text x="210" y="200" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">hot</text><text x="210" y="218" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">coffee</text><rect x="168" y="46" width="14" height="288" fill="#ced4da" opacity="0.6"/><rect x="238" y="46" width="14" height="288" fill="#ced4da" opacity="0.6"/><line x1="300" y1="120" x2="246" y2="120" stroke="#333" stroke-width="1"/><text x="305" y="124" font-size="12" fill="#0b7285" font-weight="bold">silvered surfaces</text><text x="305" y="140" font-size="11" fill="#555">reflect infrared radiation</text><line x1="300" y1="220" x2="174" y2="220" stroke="#333" stroke-width="1"/><text x="305" y="216" font-size="12" fill="#e8590c" font-weight="bold">vacuum</text><text x="305" y="232" font-size="11" fill="#555">between double walls —</text><text x="305" y="246" font-size="11" fill="#555">no conduction or convection</text><line x1="120" y1="120" x2="166" y2="120" stroke="#333" stroke-width="1"/><text x="115" y="124" font-size="11" fill="#555" text-anchor="end">double-walled</text><line x1="120" y1="300" x2="160" y2="320" stroke="#333" stroke-width="1"/><text x="115" y="312" font-size="11" fill="#555" text-anchor="end">insulated support</text></svg>',
          },
          caption: 'Cross-section of a vacuum (thermos) flask: a vacuum between double walls stops conduction and convection; silvered surfaces reflect infrared radiation back into the coffee.',
        },
        ph: 'Feature 1 of flask: ...\nFeature 2 of flask: ...\nExplanation of how these prevent heat transfer: ...',
      },
    ],
  },

  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Structure — Laser Printer Toner',
    marks: 10,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'For centuries, atoms were believed to be solid spheres with no internal components. However, as experimental procedures improved, it was found that they contain protons, neutrons and electrons.',
    tags: { unit: 'electricity-circuits', topics: ['atomic structure', 'electrostatics', 'charge', 'forces', 'electric field'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'A helium atom has 2 protons, 2 neutrons and 2 electrons. **Draw** a diagram to show the structure of an atom of helium.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="440" height="300" fill="#ffffff"/><rect x="8" y="8" width="280" height="284" rx="8" fill="#f8f9fa" stroke="#adb5bd" stroke-width="1.5"/><circle cx="148" cy="150" r="110" fill="none" stroke="#ced4da" stroke-width="1.5" stroke-dasharray="5 5"/><circle cx="148" cy="150" r="34" fill="none" stroke="#868e96" stroke-width="1.5" stroke-dasharray="4 4"/><text x="148" y="154" font-size="11" fill="#adb5bd" text-anchor="middle">nucleus</text><text x="148" y="46" font-size="11" fill="#adb5bd" text-anchor="middle">electron shell</text><text x="148" y="284" font-size="11" fill="#868e96" text-anchor="middle" font-style="italic">drawing area</text><rect x="304" y="8" width="128" height="284" rx="8" fill="#ffffff" stroke="#adb5bd" stroke-width="1.5"/><text x="368" y="30" font-size="12" fill="#333" text-anchor="middle" font-weight="bold">Key</text><circle cx="328" cy="70" r="14" fill="#fa5252" stroke="#c92a2a" stroke-width="1.5"/><text x="328" y="75" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">+</text><text x="350" y="75" font-size="12" fill="#333">proton</text><circle cx="328" cy="130" r="14" fill="#e9ecef" stroke="#868e96" stroke-width="1.5"/><text x="328" y="135" font-size="13" fill="#495057" text-anchor="middle" font-weight="bold">0</text><text x="350" y="135" font-size="12" fill="#333">neutron</text><circle cx="328" cy="190" r="11" fill="#1971c2" stroke="#1864ab" stroke-width="1.5"/><text x="328" y="195" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">−</text><text x="350" y="195" font-size="12" fill="#333">electron</text></svg>',
          },
          caption: 'Blank atom canvas: place 2 protons and 2 neutrons in the nucleus, and 2 electrons in the surrounding shell.',
        },
        ph: 'Nucleus contains 2 protons and 2 neutrons; 2 electrons orbit/surround the nucleus.',
      },
      {
        label: 'b',
        text: '**Select** the force that keeps the electron in the atom.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Magnetic force', 'Gravitational force', 'Electrostatic force', 'Frictional force'],
        ph: 'Select the correct force.',
      },
      {
        label: 'c',
        text: 'Laser printers work using the electric properties of matter. Negatively charged toner particles are attracted to positively charged regions on a drum. **Outline** why positive and negative charges attract each other.',
        marks: 2,
        ph: 'Positive and negative charges are opposite charges. Opposite/unlike charges attract each other. The electrostatic force acts between them.',
      },
      {
        label: 'd',
        text: 'The diagram below shows a negatively charged toner particle and the positively charged drum surface. **Draw** arrows to represent the forces acting on the toner particle. Use the text tool to label your arrows.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="440" height="300" fill="#ffffff"/><path d="M40 70 Q220 40 400 70" fill="none" stroke="#0b7285" stroke-width="14" stroke-linecap="round"/><g fill="#fff" font-size="14" font-weight="bold" text-anchor="middle"><text x="80" y="66">+</text><text x="130" y="62">+</text><text x="180" y="59">+</text><text x="230" y="58">+</text><text x="280" y="59">+</text><text x="330" y="62">+</text><text x="380" y="66">+</text></g><text x="220" y="32" font-size="13" fill="#0b7285" text-anchor="middle" font-weight="bold">Positively charged drum surface</text><circle cx="220" cy="200" r="24" fill="#1971c2" stroke="#1864ab" stroke-width="2"/><text x="220" y="206" font-size="20" fill="#fff" text-anchor="middle" font-weight="bold">−</text><text x="220" y="252" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">Negatively charged toner particle</text><line x1="40" y1="285" x2="400" y2="285" stroke="#adb5bd" stroke-width="2"/></svg>',
          },
          caption: 'A negatively charged toner particle below the positively charged drum. Draw and label the forces acting on the particle.',
        },
        ph: 'Arrow 1: pointing upward toward positive drum surface — label: electrostatic (attractive) force\nArrow 2: pointing downward — label: weight/gravitational force\n(Arrows must touch/start from the particle surface)',
      },
      {
        label: 'e',
        text: '**Outline** the importance of the negatively charged toner particle and the positively charged drum being in close proximity in the process of laser printing.',
        marks: 3,
        ph: 'Small distance → electrostatic force large enough to overcome opposing forces (weight). As distance increases, the electrostatic force decreases. Toner must stick to drum to fix the image.',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Gravity — Solar System and Apophis',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The movement of planets and asteroids in the solar system can be determined by our understanding of the action of gravitational attraction.',
    tags: { unit: 'forces-interactions', topics: ['gravity', 'solar system', 'gravitational field strength', 'mass calculation', 'force'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="720" height="240" fill="#0b1026"/><circle cx="30" cy="120" r="44" fill="#ffd43b"/><circle cx="30" cy="120" r="44" fill="none" stroke="#ffe066" stroke-width="3" opacity="0.5"/><text x="30" y="124" font-size="11" fill="#7a5c00" text-anchor="middle" font-weight="bold">Sun</text><g fill="#fff" font-size="10" text-anchor="middle"><circle cx="120" cy="120" r="6" fill="#adb5bd"/><text x="120" y="148">?</text><circle cx="170" cy="120" r="9" fill="#e8a87c"/><text x="170" y="156" fill="#cfd4dc">Venus</text><circle cx="225" cy="120" r="10" fill="#4dabf7"/><text x="225" y="158" fill="#cfd4dc">Earth</text><circle cx="280" cy="120" r="8" fill="#fa5252"/><text x="280" y="154" fill="#cfd4dc">Mars</text></g><g fill="#ced4da"><circle cx="330" cy="108" r="1.6"/><circle cx="345" cy="128" r="1.6"/><circle cx="338" cy="118" r="1.4"/><circle cx="352" cy="112" r="1.5"/><circle cx="360" cy="130" r="1.6"/><circle cx="333" cy="135" r="1.4"/><circle cx="356" cy="122" r="1.3"/><circle cx="368" cy="116" r="1.5"/></g><text x="348" y="170" font-size="10" fill="#cfd4dc" text-anchor="middle">?</text><g fill="#fff" font-size="10" text-anchor="middle"><circle cx="430" cy="120" r="20" fill="#e8b96f"/><text x="430" y="156" fill="#cfd4dc">Jupiter</text><g><ellipse cx="540" cy="120" rx="28" ry="9" fill="none" stroke="#d8c08a" stroke-width="3"/><circle cx="540" cy="120" r="15" fill="#dcc790"/></g><text x="540" y="156" fill="#cfd4dc">?</text><circle cx="620" cy="120" r="12" fill="#74c0fc"/><text x="620" y="150" fill="#cfd4dc">Uranus</text><circle cx="685" cy="120" r="12" fill="#4263eb"/><text x="685" y="150" fill="#cfd4dc">Neptune</text></g><text x="360" y="24" font-size="13" fill="#ffe066" text-anchor="middle" font-weight="bold">The Solar System (not to scale)</text><text x="360" y="216" font-size="11" fill="#adb5bd" text-anchor="middle">Three features are marked with "?" — label the asteroid belt, Mercury and Saturn.</text></svg>',
      },
      caption: 'The Sun and planets in order (not to scale). Three features are marked with "?": the innermost planet, the band of rocky objects between Mars and Jupiter, and the ringed planet.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram of the solar system below is missing some information. **Label** the diagram to show: the asteroid belt, Mercury and Saturn.',
        marks: 2,
        ph: 'Asteroid belt: ring of objects between Mars and Jupiter. Mercury: innermost planet. Saturn: sixth planet from the Sun (prominent rings).',
      },
      {
        label: 'b',
        text: '**State** one factor that determines the size of the force of attraction between objects in the solar system.',
        marks: 1,
        ph: 'Distance between the objects OR mass of the objects.',
      },
      {
        label: 'c',
        text: 'Asteroid Apophis will make a close approach to Earth in 2029. **Draw** arrows to represent the force of attraction that the Sun exerts on Apophis at positions A and B shown in the diagram.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#0b1026"/><ellipse cx="300" cy="160" rx="210" ry="110" fill="none" stroke="#74809a" stroke-width="1.5" stroke-dasharray="6 5"/><circle cx="121" cy="160" r="26" fill="#ffd43b"/><circle cx="121" cy="160" r="26" fill="none" stroke="#ffe066" stroke-width="3" opacity="0.5"/><text x="121" y="164" font-size="11" fill="#7a5c00" text-anchor="middle" font-weight="bold">Sun</text><circle cx="510" cy="160" r="8" fill="#e8590c" stroke="#ffd8a8" stroke-width="1.5"/><text x="510" y="138" font-size="15" fill="#ffd8a8" text-anchor="middle" font-weight="bold">A</text><text x="510" y="190" font-size="10" fill="#cfd4dc" text-anchor="middle">(farther from Sun)</text><circle cx="90" cy="160" r="8" fill="#e8590c" stroke="#ffd8a8" stroke-width="1.5"/><text x="78" y="138" font-size="15" fill="#ffd8a8" text-anchor="middle" font-weight="bold">B</text><text x="78" y="190" font-size="10" fill="#cfd4dc" text-anchor="middle">(closer to Sun)</text><text x="300" y="24" font-size="13" fill="#ffe066" text-anchor="middle" font-weight="bold">Orbit of asteroid Apophis around the Sun (not to scale)</text><text x="300" y="300" font-size="11" fill="#adb5bd" text-anchor="middle">Apophis is shown at positions A and B. Draw a force arrow at each position.</text></svg>',
          },
          caption: 'Asteroid Apophis at positions A (farther from the Sun) and B (closer to the Sun) on its orbit. Draw an arrow at each position to represent the Sun\'s gravitational pull: both point toward the Sun, and the arrow at B is longer because the force is larger there (B is closer, 3.8×10¹⁰ m, where g = 0.42 N kg⁻¹). At closest approach F = m × g = 1.4×10⁷ kg × 0.42 N kg⁻¹ = 5.88×10⁶ N.',
        },
        ph: 'Arrow at A (farther from Sun): pointing toward the Sun, shorter/smaller length.\nArrow at B (closer to Sun): pointing toward the Sun, longer/larger length.\nBoth arrows must point directly toward the Sun.',
      },
      {
        label: 'd',
        text: 'The estimated volume of Apophis is **5600 m³**. The density of Apophis is estimated to be **2500 kg m⁻³**. **Calculate** the mass of Apophis.',
        marks: 2,
        ph: 'mass = density × volume\n= 2500 × 5600\n= 14 000 000 kg (or 1.4 × 10⁷ kg)',
      },
      {
        label: 'e',
        text: 'At its closest approach to the Sun, Apophis was **3.8 × 10¹⁰ m** away. At this distance the gravitational field strength is **0.42 N kg⁻¹**. Using the formula sheet and your answer to part (d), **calculate** the force of attraction experienced by Apophis.',
        marks: 2,
        ph: 'F = m × g\n= 1.4 × 10⁷ × 0.42\n= 5.88 × 10⁶ N',
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Parachute Testing — Experiment Design',
    marks: 15,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Parachute testing simulates conditions experienced by skydivers. Air flowing past an open parachute creates a drag force large enough to balance the weight of the skydiver. The relationship between weight and air speed can be modelled using parachute models of different sizes in a controlled stream of air in a wind tunnel.\n\nThe relationship can be summarised in the following equation:\n**Weight of parachutist = constant × CSA × air speed²**\n(where CSA is cross-sectional area of the parachute canopy)',
    tags: { unit: 'forces-interactions', topics: ['drag force', 'weight', 'experiment design', 'variables', 'hypothesis', 'CSA'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="340" fill="#ffffff"/><defs><marker id="up" markerWidth="9" markerHeight="9" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#1c7ed6"/></marker></defs><rect x="0" y="310" width="480" height="30" fill="#e9ecef"/><line x1="0" y1="310" x2="480" y2="310" stroke="#adb5bd" stroke-width="1.5"/><path d="M120 110 Q240 30 360 110 Q300 96 240 100 Q180 96 120 110 Z" fill="#fa5252" stroke="#c92a2a" stroke-width="2"/><path d="M120 110 L160 110 M200 100 L210 110 M270 100 L280 110 M360 110 L320 110" stroke="#c92a2a" stroke-width="0" /><g stroke="#868e96" stroke-width="1.5"><line x1="130" y1="110" x2="232" y2="200"/><line x1="200" y1="102" x2="240" y2="198"/><line x1="280" y1="102" x2="248" y2="198"/><line x1="350" y1="110" x2="256" y2="200"/></g><circle cx="244" cy="214" r="12" fill="#495057"/><rect x="238" y="224" width="12" height="34" rx="4" fill="#1971c2"/><g stroke="#1c7ed6" stroke-width="3"><line x1="150" y1="300" x2="150" y2="250" marker-end="url(#up)"/><line x1="195" y1="300" x2="195" y2="240" marker-end="url(#up)"/><line x1="290" y1="300" x2="290" y2="240" marker-end="url(#up)"/><line x1="335" y1="300" x2="335" y2="250" marker-end="url(#up)"/></g><text x="120" y="300" font-size="11" fill="#1c7ed6" text-anchor="middle" font-weight="bold">Air flow</text><text x="370" y="300" font-size="11" fill="#1c7ed6" text-anchor="middle" font-weight="bold">Air flow</text><text x="240" y="20" font-size="13" fill="#222" text-anchor="middle" font-weight="bold">Parachute model in a wind-tunnel air stream</text></svg>',
      },
      caption: 'A parachute canopy held in an upward stream of fast-moving air. The drag force from the airflow balances the weight hanging below.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows the air speed needed for people with different body weights to be safely supported by a parachute. Using the graph, **state** the air speed needed for a 600 N person to descend safely.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 324" font-family="Arial, Helvetica, sans-serif"><rect width="384" height="324" fill="#ffffff"/><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="105.3" y1="18.0" x2="105.3" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="152.7" y1="18.0" x2="152.7" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="200.0" y1="18.0" x2="200.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="247.3" y1="18.0" x2="247.3" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="294.7" y1="18.0" x2="294.7" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="342.0" y1="18.0" x2="342.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="254.0" x2="342.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="195.0" x2="342.0" y2="195.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="136.0" x2="342.0" y2="136.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="77.0" x2="342.0" y2="77.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="18.0" x2="342.0" y2="18.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="18.0" x2="58.0" y2="254.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="254.0" x2="342.0" y2="254.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="254.0" x2="58.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="58.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="105.3" y1="254.0" x2="105.3" y2="258.0" stroke="#333" stroke-width="1"/><text x="105.3" y="270.0" font-size="10" fill="#333" text-anchor="middle">200</text><line x1="152.7" y1="254.0" x2="152.7" y2="258.0" stroke="#333" stroke-width="1"/><text x="152.7" y="270.0" font-size="10" fill="#333" text-anchor="middle">400</text><line x1="200.0" y1="254.0" x2="200.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="200.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">600</text><line x1="247.3" y1="254.0" x2="247.3" y2="258.0" stroke="#333" stroke-width="1"/><text x="247.3" y="270.0" font-size="10" fill="#333" text-anchor="middle">800</text><line x1="294.7" y1="254.0" x2="294.7" y2="258.0" stroke="#333" stroke-width="1"/><text x="294.7" y="270.0" font-size="10" fill="#333" text-anchor="middle">1000</text><line x1="342.0" y1="254.0" x2="342.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="342.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">1200</text><line x1="54.0" y1="254.0" x2="58.0" y2="254.0" stroke="#333" stroke-width="1"/><text x="51.0" y="257.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="195.0" x2="58.0" y2="195.0" stroke="#333" stroke-width="1"/><text x="51.0" y="198.5" font-size="10" fill="#333" text-anchor="end">40</text><line x1="54.0" y1="136.0" x2="58.0" y2="136.0" stroke="#333" stroke-width="1"/><text x="51.0" y="139.5" font-size="10" fill="#333" text-anchor="end">80</text><line x1="54.0" y1="77.0" x2="58.0" y2="77.0" stroke="#333" stroke-width="1"/><text x="51.0" y="80.5" font-size="10" fill="#333" text-anchor="end">120</text><line x1="54.0" y1="18.0" x2="58.0" y2="18.0" stroke="#333" stroke-width="1"/><text x="51.0" y="21.5" font-size="10" fill="#333" text-anchor="end">160</text><text x="200.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">Weight / N</text><text x="14" y="136.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 136.0)">Air speed / km h⁻¹</text><path d="M81.7,193.2 C110,170 150,140 200,106.5 C250,82 300,62 318,52" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="200.0" y1="254.0" x2="200.0" y2="106.5" stroke="#f08c00" stroke-width="1" stroke-dasharray="4 3"/><line x1="58.0" y1="106.5" x2="200.0" y2="106.5" stroke="#f08c00" stroke-width="1" stroke-dasharray="4 3"/><circle cx="200.0" cy="106.5" r="3.5" fill="#f08c00"/></g></svg>',
          },
          caption: 'Air speed needed against parachutist weight. Reading across from 600 N gives an air speed of about 100 km h⁻¹.',
        },
        ph: 'Read from graph at weight = 600 N: approximately 100 km/h',
      },
      {
        label: 'b',
        text: 'A list of variables that are important in this experiment is provided below. **Select** the description that best describes each variable.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Weight', 'Air speed', 'CSA', 'Mass', 'Volume'],
        ph: 'Weight → Independent variable (IV)\nAir speed → Dependent variable (DV)\nCSA → Control variable\nMass → Control variable\nVolume → Control variable',
      },
      {
        label: 'c',
        text: 'Using the equation above, **formulate and explain** a suitable hypothesis that could address the research question.',
        marks: 3,
        ph: 'As the weight of the parachutist increases, the air speed needed will increase. From Weight = k × CSA × v², with CSA controlled, weight ∝ v² → v ∝ √weight.',
      },
      {
        label: 'd',
        text: 'You have a box of parachute models of different CSAs. **Select** the models you will use for this experiment and place them in the equipment box.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><rect x="20" y="40" width="320" height="260" rx="10" fill="#f8f1e4" stroke="#b08968" stroke-width="3"/><text x="180" y="30" font-size="13" fill="#6f4518" text-anchor="middle" font-weight="bold">Available box of parachute models</text><g font-size="10" text-anchor="middle"><g><path d="M50 80 q26 -28 52 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="76" y="108" fill="#333">5.0 N</text><text x="76" y="120" fill="#0b7285">10 cm²</text></g><g><path d="M150 80 q31 -33 62 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="181" y="108" fill="#333">5.0 N</text><text x="181" y="120" fill="#0b7285">15 cm²</text></g><g><path d="M250 80 q28 -30 56 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="278" y="108" fill="#333">3.0 N</text><text x="278" y="120" fill="#0b7285">12 cm²</text></g><g><path d="M50 160 q36 -38 72 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="86" y="190" fill="#333">5.0 N</text><text x="86" y="202" fill="#0b7285">20 cm²</text></g><g><path d="M155 160 q40 -42 80 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="195" y="190" fill="#333">5.0 N</text><text x="195" y="202" fill="#0b7285">25 cm²</text></g><g><path d="M270 160 q24 -25 48 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="294" y="190" fill="#333">7.0 N</text><text x="294" y="202" fill="#0b7285">9 cm²</text></g><g><path d="M50 240 q44 -47 88 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="94" y="270" fill="#333">5.0 N</text><text x="94" y="282" fill="#0b7285">30 cm²</text></g><g><path d="M170 240 q34 -36 68 0 Z" fill="#e8590c" stroke="#c92a2a"/><text x="204" y="270" fill="#333">4.0 N</text><text x="204" y="282" fill="#0b7285">18 cm²</text></g></g><rect x="360" y="40" width="180" height="200" rx="10" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 4"/><text x="450" y="30" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">Equipment box</text><g fill="none" stroke="#74c0fc" stroke-width="1.5"><circle cx="395" cy="80" r="16"/><circle cx="450" cy="80" r="16"/><circle cx="505" cy="80" r="16"/><circle cx="395" cy="140" r="16"/><circle cx="450" cy="140" r="16"/><circle cx="505" cy="140" r="16"/><circle cx="422" cy="200" r="16"/><circle cx="478" cy="200" r="16"/></g><text x="450" y="262" font-size="10" fill="#1864ab" text-anchor="middle">drag your chosen models here</text></svg>',
          },
          caption: 'A box of parachute models, each labelled with the weight it supports and its canopy CSA. Choose models that share the same weight and span the widest CSA range.',
        },
        ph: 'Select models that: (1) all support the same weight/cargo (to control weight), (2) cover the greatest possible range of CSAs, (3) at least 5 models with regular CSA intervals.',
      },
      {
        label: 'e',
        text: '**Justify** the selection you have made in part (d).',
        marks: 2,
        ph: 'The models all support the same weight to keep weight as a control variable. They cover the greatest range of CSAs to establish a relationship. Regular intervals allow patterns to be identified.',
      },
      {
        label: 'f',
        text: '**State** how many trials you will record. **Justify** your answer.',
        marks: 2,
        ph: '3–5 trials per data point.\nJustification: Repeating measurements reduces random errors and allows calculation of a mean, improving reliability.',
      },
    ],
  },

  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Parachute CSA Investigation — Data Processing',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates the effect that the CSA of the parachute canopy has on the air speed needed to keep the parachutist model floating. He proposes the following hypothesis:\n\n"According to my research I know that the CSA of the parachute is inversely proportional to the square of the air speed flowing past it. I can write this as: CSA ∝ 1/air speed². This means that as the CSA of the parachute increases, the air speed needed for the model to float can be reduced."\n\nThe student collects one set of data.',
    tags: { unit: 'forces-interactions', topics: ['data analysis', 'graphs', 'hypothesis testing', 'CSA', 'processing data', 'line of best fit'], level: 'developing' },
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Parachute canopy size', 'Air speed / m s⁻¹'],
        rows: [
          ['radius = 4.0 cm', '28'],
          ['area = 13 cm²', '25'],
          ['area = 20 cm²', '22'],
          ['area = 24 cm²', '19'],
          ['area = 28 cm²', '17'],
          ['area = 33 cm²', '16'],
          ['area = 40 cm²', '14'],
        ],
      },
      caption: 'The student\'s recorded raw data. The first canopy was recorded as a radius (4.0 cm) rather than an area — its CSA must be converted to an area in part (b): πr² = π × 4.0² ≈ 50 cm² for the results table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the question that the student is investigating.',
        marks: 1,
        ph: 'How does the CSA of the parachute canopy affect the air speed needed to keep the model floating?',
      },
      {
        label: 'b',
        text: 'The student has recorded the first value as radius rather than area. The student uses **area = πr²** to calculate the CSA. **Select** which of the following values would be most appropriate to present the CSA in a results table.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['4.0 cm (radius)', '25.1 cm (circumference)', '50 cm² (area from πr²)', '12.6 cm² (πr, radius not squared)'],
        ph: 'Select the most appropriate CSA value.',
      },
      {
        label: 'c',
        text: '**Organise** and present the data into a table. In your answer you should include the result from part (b).',
        marks: 4,
        ph: 'Table with:\n- Column heading: CSA / cm² (unit in header only)\n- Column heading: Air speed / m s⁻¹ (unit in header only)\n- Data in ascending or descending order\n- Consistent decimal places\n- Include 50 cm² from part (b)',
      },
      {
        label: 'd',
        text: 'The student draws three graphs of the data. **Select** the most appropriate graph to determine the relationship between CSA and air speed. **Justify** your choice.',
        marks: 3,
        widget: 'radio_select',
        widgetOptions: ['Graph A', 'Graph B', 'Graph C'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 948 264" font-family="Arial, Helvetica, sans-serif"><rect width="948" height="264" fill="#ffffff"/><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="194.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="194.0" x2="282.0" y2="194.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="58.0" y2="194.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="194.0" x2="282.0" y2="194.0" stroke="#333" stroke-width="1.5"/><text x="170.0" y="234.0" font-size="11" fill="#222" text-anchor="middle">Air speed / m s⁻¹</text><text x="14" y="106.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 106.0)">CSA / cm²</text><text x="170.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph A</text><g fill="#0b7285"><circle cx="92" cy="48" r="3"/><circle cx="104" cy="70" r="3"/><circle cx="122" cy="96" r="3"/><circle cx="146" cy="118" r="3"/><circle cx="178" cy="140" r="3"/><circle cx="216" cy="158" r="3"/><circle cx="252" cy="170" r="3"/></g><path d="M88,44 C120,70 150,118 190,142 C220,158 245,168 256,172" fill="none" stroke="#0b7285" stroke-width="2.0"/></g><g transform="translate(324,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="194.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="194.0" x2="282.0" y2="194.0" stroke="#333" stroke-width="1.5"/><text x="170.0" y="234.0" font-size="11" fill="#222" text-anchor="middle">1 / air speed / m⁻¹ s</text><text x="14" y="106.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 106.0)">CSA / cm²</text><text x="170.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph B</text><g fill="#0b7285"><circle cx="86" cy="166" r="3"/><circle cx="100" cy="150" r="3"/><circle cx="124" cy="132" r="3"/><circle cx="158" cy="108" r="3"/><circle cx="196" cy="86" r="3"/><circle cx="234" cy="64" r="3"/><circle cx="262" cy="40" r="3"/></g><path d="M84,168 C110,150 150,118 196,90 C230,66 256,46 264,40" fill="none" stroke="#0b7285" stroke-width="2.0"/></g><g transform="translate(636,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="194.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="194.0" x2="282.0" y2="194.0" stroke="#333" stroke-width="1.5"/><text x="170.0" y="234.0" font-size="11" fill="#222" text-anchor="middle">1 / (air speed)² / m⁻² s²</text><text x="14" y="106.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 106.0)">CSA / cm²</text><text x="170.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph C</text><g fill="#0b7285"><circle cx="70" cy="176" r="3"/><circle cx="92" cy="158" r="3"/><circle cx="120" cy="136" r="3"/><circle cx="152" cy="112" r="3"/><circle cx="190" cy="86" r="3"/><circle cx="226" cy="62" r="3"/><circle cx="258" cy="40" r="3"/></g><line x1="64" y1="180" x2="262" y2="38" stroke="#0b7285" stroke-width="2.0"/></g></svg>',
          },
          caption: 'Three ways of plotting the same data. Graph A (CSA vs air speed) curves; Graph B (CSA vs 1/air speed) curves; Graph C (CSA vs 1/(air speed)²) is the straight line through the origin.',
        },
        ph: 'Graph C — it plots 1/v² against CSA, which gives a straight line if the hypothesis CSA ∝ 1/v² is correct. A straight-line graph through the origin confirms direct proportionality.',
      },
      {
        label: 'e',
        text: 'The student\'s hypothesis was: CSA ∝ 1/air speed². **Explain** if the data supports the hypothesis.',
        marks: 3,
        ph: 'If Graph C shows a straight line through the origin, this confirms CSA ∝ 1/v², which supports the hypothesis. State whether the line of best fit is straight, passes through origin, and whether any anomalous points exist. Conclude whether hypothesis is supported with reference to the graph.',
      },
      {
        label: 'f',
        text: 'The student\'s results do not all sit on the line of best fit. **Describe** what change should be made to the method and data collected that would benefit the scientific investigation.',
        marks: 2,
        ph: 'Repeat measurements for each CSA value and calculate the mean, to reduce the effect of random errors. OR Collect more data points to better establish the relationship.',
      },
    ],
  },

  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Logs Floating — Analysis and Design',
    marks: 20,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A second student models how logs float in water to investigate the logging industry. She knows that the weight of the log floating and the volume of the log below the water are linked by:\n\n**Weight of the log = volume of log below water × gravitational field strength × density of liquid**\n\nHer hypothesis is: "As the weight of the log increases, the volume of the log below the water will increase proportionally. This means that as the weight of the log doubles the volume of the log under the water will also double."\n\nThe student collects one set of data shown in the table.',
    tags: { unit: 'forces-interactions', topics: ['buoyancy', 'density', 'experiment design', 'graphing', 'Archimedes'], level: 'developing' },
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Weight of the log / N', 'Volume of log below the water / cm³'],
        rows: [
          ['0.5', '50'],
          ['1.1', '110'],
          ['2.0', '200'],
          ['4.2', '420'],
        ],
      },
      caption: 'The student\'s results: as the weight of the log increases, the volume of the log below the water increases in proportion.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the type of graph that the student should draw of this data. **State** the quantities that should be presented on the graph.',
        marks: 3,
        ph: 'Type: Scatter graph.\nX-axis: weight of log (N)\nY-axis: volume of log below water (cm³)\nTitle: Graph of weight of log against volume below water.',
      },
      {
        label: 'b',
        text: 'The results support the relationship given in the hypothesis. Without drawing the graph, **describe** two features of the graph that would support the hypothesis.',
        marks: 2,
        ph: '1. Straight line of best fit through the data points (linear).\n2. Line passes through the origin (directly proportional — weight=0 → volume=0).',
      },
      {
        label: 'c',
        text: '**Discuss** two improvements to the method and data collected that would benefit the scientific investigation.',
        marks: 4,
        ph: 'Improvement 1: greater range of log weights → more evidence for proportionality over a wider range\nImprovement 2: more trials (repeat readings) at each weight → reduces uncertainty, identifies anomalous results',
      },
      {
        label: 'd',
        text: 'You extend the experiment to investigate how the density of salt water affects the weight of a log able to float. Your teacher suggests: "As the mass of salt dissolved in the water increases, the weight of the log able to float at a fixed level will also increase."\n\n**Design** an investigation that you could use to test this prediction. In your plan you should include:\n- the research question\n- the independent, dependent and two control variables\n- the equipment you will use\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 11,
        ph: 'Research question: How does the mass of salt dissolved in water affect the weight of a log floating at a fixed level?\n\nIV: mass of salt (g)\nDV: weight of log floating at fixed level (N)\nCV: volume of water (constant), same container, same log shape/size\n\nEquipment: measuring cylinder, balance, NaCl salt, water, model log (wooden block), ruler/marker for fixed waterline\n\nMethod: Dissolve increasing measured masses of salt in a fixed volume of water. Float the log and measure the maximum weight able to float at the fixed waterline marker. Repeat for each concentration.\n\nData: Minimum 5 salt masses; 3 trials per; calculate mean weight.',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Radioactivity — I-131 Thyroid Imaging',
    marks: 13,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Over 10,000 hospitals around the world use radioisotopes. About 80% of this use is in helping to diagnose disease. Iodine-131 (I-131) is a radioactive isotope used to diagnose and treat thyroid conditions. I-131 emits gamma rays and beta particles. After injection, I-131 is naturally absorbed by the thyroid gland. Its half-life is approximately **8 days**.',
    tags: { unit: 'atomic-physics', topics: ['radioactivity', 'half-life', 'gamma radiation', 'medical imaging', 'nuclear reactors', 'evaluation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a half-life of 8 days is useful for producing medical images and treating thyroid conditions.',
        marks: 2,
        ph: 'Long enough to complete the treatment/scanning period (days, not hours).\nShort enough to minimise long-term radiation exposure to the patient after treatment ends.',
      },
      {
        label: 'b',
        text: '**Outline** two advantages a gamma-emitting isotope would have when used for detection purposes in the human body rather than alpha and beta emitters.',
        marks: 2,
        ph: 'Advantage 1: Gamma rays penetrate tissue and bone → detected externally by gamma camera.\nAdvantage 2: Gamma rays cause less ionisation of cells than alpha/beta → less tissue damage.',
      },
      {
        label: 'c',
        text: 'The source of I-131 is produced in nuclear reactors. You are an adviser to a government agency. Using the information above, **discuss** and **evaluate** which method you think should be used to produce I-131 in a country of your choice. In your answer, you should include:\n- the advantages and disadvantages of your chosen method for your country\n- a conclusion',
        marks: 9,
        ph: 'Choose one method (nuclear reactor / cyclotron).\n\nAdvantages of chosen method (linked to country): e.g. cyclotron — local production inside hospital, shorter supply chain, no radioactive waste accumulation...\nDisadvantages: e.g. cyclotron — high capital cost, only local supply...\n\nConclusion: Justify with country-specific factors (hospital distribution, infrastructure, cost, safety).',
      },
    ],
  },

  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Radioactive Materials in Medicine — Extended Evaluation',
    marks: 11,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'In 2000, a cancer patient in Spain received a radiation overdose during radiotherapy treatment due to a software error. Multiple similar incidents have occurred worldwide when radiotherapy equipment malfunctions or is incorrectly calibrated. These incidents highlight the risks associated with using radioactive materials in medicine. However, radiotherapy has also saved millions of lives through cancer treatment.\n\nUsing radioactive materials for diagnoses and treatment helps many patients but there are also risks attached to its use.',
    tags: { unit: 'atomic-physics', topics: ['radioactivity', 'medical applications', 'evaluation', 'implications', 'safety'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the implications of using radioactive materials in medicine. In your answer you should include:\n- an advantage and a disadvantage of using radioactive materials in a hospital\n- the political implications for governments of using radioactive materials in medicine\n- the environmental implications\n- a concluding appraisal',
        marks: 11,
        ph: 'Advantage: saves lives through cancer treatment and diagnosis.\nDisadvantage: radiation overdose incidents, equipment malfunction risks.\n\nPolitical: Governments must regulate equipment calibration, training, storage, disposal. International safety standards (IAEA). Cost of regulation and compensation.\n\nEnvironmental: radioactive waste disposal, contamination risk from equipment or transport accidents.\n\nConclusion: Benefits (millions of lives saved) outweigh risks if strict regulation and quality control are maintained.',
      },
    ],
  },
]
