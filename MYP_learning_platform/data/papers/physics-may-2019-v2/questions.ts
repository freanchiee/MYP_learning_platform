import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2019-v2',
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
    topic: 'Thermal Physics — Insulated Lunchbox',
    marks: 7,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'Heat and temperature are different quantities associated with the study of thermal physics. Heat transfer takes place through three processes: conduction, convection and radiation.',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'radiation', 'insulation'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="360" fill="#eef6fb"/><defs><marker id="ah2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#f08c00"/></marker><marker id="ahr2" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#c92a2a"/></marker><marker id="ahb2" markerWidth="9" markerHeight="9" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#0b7285"/></marker></defs><rect x="0" y="290" width="560" height="70" fill="#f4e3c1"/><line x1="0" y1="290" x2="560" y2="290" stroke="#d6b97a" stroke-width="1.5"/><g><path d="M180 130 q-10 -34 6 -54 q12 36 -2 50 Z" fill="#fa5252"/><path d="M200 138 q-14 -46 8 -72 q16 48 -4 66 Z" fill="#ff922b"/><path d="M220 130 q-10 -34 6 -54 q12 36 -2 50 Z" fill="#ffd43b"/><g stroke="#8c5e2a" stroke-width="7" stroke-linecap="round"><line x1="168" y1="290" x2="232" y2="262"/><line x1="232" y1="290" x2="168" y2="262"/></g></g><text x="200" y="312" font-size="13" fill="#6f4518" text-anchor="middle" font-weight="bold">Bonfire on the beach</text><g stroke="#0b7285" stroke-width="2.5" fill="none"><line x1="180" y1="60" x2="180" y2="20" marker-end="url(#ahb2)"/><line x1="200" y1="46" x2="200" y2="14" marker-end="url(#ahb2)"/><line x1="220" y1="60" x2="220" y2="20" marker-end="url(#ahb2)"/></g><text x="200" y="10" font-size="12" fill="#0b7285" text-anchor="middle" font-weight="bold">Hot air rising (convection)</text><g stroke="#c92a2a" stroke-width="2.5" fill="none"><path d="M252 150 q40 -4 78 0" marker-end="url(#ahr2)"/><path d="M252 178 q40 -4 78 0" marker-end="url(#ahr2)"/><path d="M252 206 q40 -4 78 0" marker-end="url(#ahr2)"/></g><circle cx="392" cy="178" r="22" fill="#ffd8a8" stroke="#e8590c" stroke-width="2"/><rect x="383" y="200" width="18" height="40" fill="#495057"/><text x="392" y="148" font-size="12" fill="#c92a2a" text-anchor="middle" font-weight="bold">Warmth felt from a distance (radiation)</text><line x1="200" y1="290" x2="200" y2="320" stroke="#f08c00" stroke-width="3" marker-end="url(#ah2)"/><text x="120" y="345" font-size="12" fill="#f08c00" text-anchor="middle" font-weight="bold">Heat through the sand (conduction)</text></svg>',
      },
      caption: 'Heat transfer from a beach bonfire: hot air rising (convection), warmth felt from a distance (radiation), and heat spreading through the sand beneath the fire (conduction).',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows heat transfer occurring from a bonfire on a beach. **Select** the process label (Convection, Radiation, or Conduction) for each situation shown in the diagram.',
        marks: 1,
        ph: 'Identify which heat transfer process applies to each scenario shown (e.g. heat felt from a distance = radiation; hot air rising = convection; heat through sand = conduction).',
      },
      {
        label: 'b',
        text: '**State** the units used to measure temperature and heat.',
        marks: 2,
        ph: 'Temperature: ...\nHeat: ...',
      },
      {
        label: 'c',
        text: 'A student puts a cold ice pack into an insulated lunchbox and places it in a hot car. Three hours later he opens the lunchbox and finds the ice pack has not melted. **Explain** why the ice pack has not melted. In your answer, you should refer to two features of the lunchbox and use your knowledge and understanding of heat transfer.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="460" height="340" fill="#ffffff"/><rect x="120" y="60" width="180" height="36" rx="6" fill="#495057"/><text x="210" y="84" font-size="11" fill="#fff" text-anchor="middle">sealed airtight lid</text><rect x="110" y="96" width="200" height="200" rx="14" fill="#dee2e6" stroke="#868e96" stroke-width="4"/><rect x="128" y="112" width="164" height="168" rx="8" fill="#fff3bf" stroke="#f08c00" stroke-width="3"/><rect x="146" y="130" width="128" height="132" rx="6" fill="#a5d8ff" stroke="#1971c2" stroke-width="2"/><text x="210" y="190" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">cold</text><text x="210" y="208" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">ice pack</text><line x1="330" y1="120" x2="290" y2="120" stroke="#333" stroke-width="1"/><text x="335" y="116" font-size="12" fill="#495057" font-weight="bold">sealed airtight lid</text><text x="335" y="132" font-size="11" fill="#555">prevents convection</text><line x1="330" y1="200" x2="284" y2="200" stroke="#333" stroke-width="1"/><text x="335" y="196" font-size="12" fill="#e8590c" font-weight="bold">thick foam walls</text><text x="335" y="212" font-size="11" fill="#555">poor conductor —</text><text x="335" y="226" font-size="11" fill="#555">reduce conduction</text><line x1="100" y1="200" x2="148" y2="200" stroke="#333" stroke-width="1"/><text x="95" y="204" font-size="11" fill="#555" text-anchor="end">reflective lining</text></svg>',
          },
          caption: 'Cross-section of an insulated lunchbox: thick foam walls are poor conductors and a sealed airtight lid stops warm air convecting in, keeping the ice pack cold.',
        },
        ph: 'Feature 1 of lunchbox: ...\nFeature 2 of lunchbox: ...\nExplanation of how these prevent heat transfer: ...',
      },
    ],
  },

  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Structure — Inkjet Printer',
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
        text: 'Inkjet printers steer charged ink droplets onto paper using electric fields. A positively charged deflector plate attracts negatively charged ink droplets. **Outline** why positive and negative charges attract each other.',
        marks: 2,
        ph: 'Positive and negative charges are opposite charges. Opposite/unlike charges attract each other. The electrostatic force acts between them.',
      },
      {
        label: 'd',
        text: 'The diagram below shows a negatively charged ink droplet and the positively charged deflector plate. **Draw** arrows to represent the forces acting on the ink droplet. Use the text tool to label your arrows.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="440" height="300" fill="#ffffff"/><rect x="60" y="56" width="320" height="22" rx="4" fill="#0b7285"/><g fill="#fff" font-size="14" font-weight="bold" text-anchor="middle"><text x="90" y="72">+</text><text x="140" y="72">+</text><text x="190" y="72">+</text><text x="240" y="72">+</text><text x="290" y="72">+</text><text x="340" y="72">+</text></g><text x="220" y="44" font-size="13" fill="#0b7285" text-anchor="middle" font-weight="bold">Positively charged deflector plate</text><circle cx="220" cy="190" r="22" fill="#1971c2" stroke="#1864ab" stroke-width="2"/><text x="220" y="196" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">−</text><text x="220" y="242" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">Negatively charged ink droplet</text><line x1="60" y1="286" x2="380" y2="286" stroke="#adb5bd" stroke-width="2"/></svg>',
          },
          caption: 'A negatively charged ink droplet below the positively charged deflector plate. Draw and label the forces acting on the droplet.',
        },
        ph: 'Arrow 1: pointing toward positive deflector plate — label: electrostatic (attractive) force\nArrow 2: pointing downward — label: weight/gravitational force\n(Arrows must start from the droplet surface)',
      },
      {
        label: 'e',
        text: '**Outline** the importance of the negatively charged ink droplet and the positively charged deflector plate being in close proximity to successfully steer the droplet.',
        marks: 3,
        ph: 'Small distance → larger electrostatic force able to deflect the droplet. As distance increases, electric force decreases. Droplet must be close to plate for sufficient deflection to produce accurate printing.',
      },
    ],
  },

  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Gravity — Solar System and Comet Halley',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The movement of planets and comets in the solar system can be determined by our understanding of the action of gravitational attraction.',
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
        ph: 'Asteroid belt: between Mars and Jupiter. Mercury: innermost planet. Saturn: sixth planet (rings).',
      },
      {
        label: 'b',
        text: '**State** one factor that determines the size of the force of attraction between objects in the solar system.',
        marks: 1,
        ph: 'Distance between the objects OR mass of the objects.',
      },
      {
        label: 'c',
        text: 'Comet Halley follows an elliptical orbit around the Sun. **Draw** arrows to represent the force of attraction that the Sun exerts on Comet Halley at positions A and B shown in the diagram.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#0b1026"/><ellipse cx="310" cy="160" rx="225" ry="95" fill="none" stroke="#74809a" stroke-width="1.5" stroke-dasharray="6 5"/><circle cx="106" cy="160" r="26" fill="#ffd43b"/><circle cx="106" cy="160" r="26" fill="none" stroke="#ffe066" stroke-width="3" opacity="0.5"/><text x="106" y="164" font-size="11" fill="#7a5c00" text-anchor="middle" font-weight="bold">Sun</text><g><circle cx="535" cy="160" r="7" fill="#37b24d" stroke="#d3f9d8" stroke-width="1.5"/><path d="M535,160 L552,152 M535,160 L552,168 M535,160 L549,160" stroke="#69db7c" stroke-width="1.5"/></g><text x="535" y="138" font-size="15" fill="#d3f9d8" text-anchor="middle" font-weight="bold">A</text><text x="528" y="190" font-size="10" fill="#cfd4dc" text-anchor="middle">(farther from Sun)</text><g><circle cx="85" cy="160" r="7" fill="#37b24d" stroke="#d3f9d8" stroke-width="1.5"/><path d="M85,160 L68,152 M85,160 L68,168 M85,160 L71,160" stroke="#69db7c" stroke-width="1.5"/></g><text x="74" y="138" font-size="15" fill="#d3f9d8" text-anchor="middle" font-weight="bold">B</text><text x="74" y="190" font-size="10" fill="#cfd4dc" text-anchor="middle">(closer to Sun)</text><text x="300" y="24" font-size="13" fill="#ffe066" text-anchor="middle" font-weight="bold">Elliptical orbit of Comet Halley around the Sun (not to scale)</text><text x="300" y="300" font-size="11" fill="#adb5bd" text-anchor="middle">Comet Halley is shown at positions A and B. Draw a force arrow at each position.</text></svg>',
          },
          caption: 'Comet Halley at positions A (farther from the Sun) and B (closer to the Sun) on its elliptical orbit. Draw an arrow at each position to represent the Sun\'s gravitational pull: both point toward the Sun, and the arrow at B is longer because the force is larger there (B is closer, 8.9×10¹⁰ m, where g = 0.025 N kg⁻¹). At closest approach F = m × g = 4.15×10⁸ kg × 0.025 N kg⁻¹ = 1.04×10⁷ N.',
        },
        ph: 'Arrow at A (farther from Sun): pointing toward Sun, shorter length.\nArrow at B (closer to Sun): pointing toward Sun, longer/larger length.\nBoth arrows must point directly toward the Sun.',
      },
      {
        label: 'd',
        text: 'The estimated volume of Comet Halley is **830 000 m³**. The density of the comet is estimated to be **500 kg m⁻³**. **Calculate** the mass of Comet Halley.',
        marks: 2,
        ph: 'mass = density × volume\n= 500 × 830 000\n= 415 000 000 kg (or 4.15 × 10⁸ kg)',
      },
      {
        label: 'e',
        text: 'At its closest, Comet Halley was **8.9 × 10¹⁰ m** away from the Sun. At this distance the gravitational field strength is **0.025 N kg⁻¹**. Using the formula sheet and your answer to part (d), **calculate** the force of attraction experienced by Comet Halley.',
        marks: 2,
        ph: 'F = m × g\n= 4.15 × 10⁸ × 0.025\n= 1.04 × 10⁷ N (accept 1.0 × 10⁷ N)',
      },
    ],
  },

  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Hot Air Balloon — Experiment Design',
    marks: 15,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Hot air balloon tests can be modelled in a laboratory using small balloons of different canopy areas in a controlled stream of air. The drag force created by the airflow must be large enough to support the weight of the balloon.\n\nThe relationship can be summarised in the following equation:\n**Weight of balloon = constant × CSA × air speed²**\n(where CSA is cross-sectional area of the balloon canopy)',
    tags: { unit: 'forces-interactions', topics: ['drag force', 'weight', 'experiment design', 'variables', 'hypothesis', 'CSA'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="480" height="360" fill="#eef6fb"/><defs><marker id="up2" markerWidth="9" markerHeight="9" refX="3" refY="1" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#1c7ed6"/></marker><linearGradient id="balloon" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ff922b"/><stop offset="100%" stop-color="#e8590c"/></linearGradient></defs><path d="M240 60 C160 60 150 150 200 200 L280 200 C330 150 320 60 240 60 Z" fill="url(#balloon)" stroke="#c92a2a" stroke-width="2"/><g stroke="#d9480f" stroke-width="1"><path d="M240 60 L240 200" /><path d="M205 66 L218 198" /><path d="M275 66 L262 198" /></g><path d="M205 200 L222 232 M275 200 L258 232" stroke="#7a4a1d" stroke-width="1.5"/><rect x="222" y="232" width="36" height="22" rx="3" fill="#8c5e2a"/><g stroke="#1c7ed6" stroke-width="3"><line x1="150" y1="320" x2="150" y2="266" marker-end="url(#up2)"/><line x1="200" y1="320" x2="200" y2="256" marker-end="url(#up2)"/><line x1="280" y1="320" x2="280" y2="256" marker-end="url(#up2)"/><line x1="330" y1="320" x2="330" y2="266" marker-end="url(#up2)"/></g><rect x="0" y="320" width="480" height="40" fill="#e9ecef"/><line x1="0" y1="320" x2="480" y2="320" stroke="#adb5bd" stroke-width="1.5"/><text x="120" y="312" font-size="11" fill="#1c7ed6" text-anchor="middle" font-weight="bold">Air flow</text><text x="360" y="312" font-size="11" fill="#1c7ed6" text-anchor="middle" font-weight="bold">Air flow</text><text x="240" y="40" font-size="13" fill="#222" text-anchor="middle" font-weight="bold">Balloon model in a controlled air stream</text></svg>',
      },
      caption: 'A model balloon held aloft by an upward stream of fast-moving air. The drag force from the airflow supports the weight of the balloon.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows the air speed needed for balloons with different weights to stay aloft. Using the graph, **state** the air speed needed for a 600 N balloon to stay aloft.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 324" font-family="Arial, Helvetica, sans-serif"><rect width="384" height="324" fill="#ffffff"/><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="105.3" y1="18.0" x2="105.3" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="152.7" y1="18.0" x2="152.7" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="200.0" y1="18.0" x2="200.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="247.3" y1="18.0" x2="247.3" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="294.7" y1="18.0" x2="294.7" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="342.0" y1="18.0" x2="342.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="254.0" x2="342.0" y2="254.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="195.0" x2="342.0" y2="195.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="136.0" x2="342.0" y2="136.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="77.0" x2="342.0" y2="77.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="18.0" x2="342.0" y2="18.0" stroke="#e6e6e6" stroke-width="0.7"/><line x1="58.0" y1="18.0" x2="58.0" y2="254.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="254.0" x2="342.0" y2="254.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="254.0" x2="58.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="58.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="105.3" y1="254.0" x2="105.3" y2="258.0" stroke="#333" stroke-width="1"/><text x="105.3" y="270.0" font-size="10" fill="#333" text-anchor="middle">200</text><line x1="152.7" y1="254.0" x2="152.7" y2="258.0" stroke="#333" stroke-width="1"/><text x="152.7" y="270.0" font-size="10" fill="#333" text-anchor="middle">400</text><line x1="200.0" y1="254.0" x2="200.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="200.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">600</text><line x1="247.3" y1="254.0" x2="247.3" y2="258.0" stroke="#333" stroke-width="1"/><text x="247.3" y="270.0" font-size="10" fill="#333" text-anchor="middle">800</text><line x1="294.7" y1="254.0" x2="294.7" y2="258.0" stroke="#333" stroke-width="1"/><text x="294.7" y="270.0" font-size="10" fill="#333" text-anchor="middle">1000</text><line x1="342.0" y1="254.0" x2="342.0" y2="258.0" stroke="#333" stroke-width="1"/><text x="342.0" y="270.0" font-size="10" fill="#333" text-anchor="middle">1200</text><line x1="54.0" y1="254.0" x2="58.0" y2="254.0" stroke="#333" stroke-width="1"/><text x="51.0" y="257.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="195.0" x2="58.0" y2="195.0" stroke="#333" stroke-width="1"/><text x="51.0" y="198.5" font-size="10" fill="#333" text-anchor="end">40</text><line x1="54.0" y1="136.0" x2="58.0" y2="136.0" stroke="#333" stroke-width="1"/><text x="51.0" y="139.5" font-size="10" fill="#333" text-anchor="end">80</text><line x1="54.0" y1="77.0" x2="58.0" y2="77.0" stroke="#333" stroke-width="1"/><text x="51.0" y="80.5" font-size="10" fill="#333" text-anchor="end">120</text><line x1="54.0" y1="18.0" x2="58.0" y2="18.0" stroke="#333" stroke-width="1"/><text x="51.0" y="21.5" font-size="10" fill="#333" text-anchor="end">160</text><text x="200.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">Weight / N</text><text x="14" y="136.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 136.0)">Air speed / km h⁻¹</text><path d="M81.7,193.2 C110,170 150,140 200,106.5 C250,82 300,62 318,52" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="200.0" y1="254.0" x2="200.0" y2="106.5" stroke="#f08c00" stroke-width="1" stroke-dasharray="4 3"/><line x1="58.0" y1="106.5" x2="200.0" y2="106.5" stroke="#f08c00" stroke-width="1" stroke-dasharray="4 3"/><circle cx="200.0" cy="106.5" r="3.5" fill="#f08c00"/></g></svg>',
          },
          caption: 'Air speed needed against balloon weight. Reading across from 600 N gives an air speed of about 100 km h⁻¹.',
        },
        ph: 'Read from graph at weight = 600 N: approximately 100 km/h',
      },
      {
        label: 'b',
        text: 'A list of variables important in this experiment is provided below. **Select** the description that best describes each variable.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Weight', 'Air speed', 'CSA', 'Mass', 'Volume'],
        ph: 'Weight → Independent variable (IV)\nAir speed → Dependent variable (DV)\nCSA → Control variable\nMass → Control variable\nVolume → Control variable',
      },
      {
        label: 'c',
        text: 'Using the equation above, **formulate and explain** a suitable hypothesis that could address the research question.',
        marks: 3,
        ph: 'As the weight of the balloon increases, the air speed needed will increase. From Weight = k × CSA × v², with CSA controlled, weight ∝ v² → v ∝ √weight.',
      },
      {
        label: 'd',
        text: 'You have a box of balloon models with a variety of different CSAs. **Select** the models you will use for this experiment and place them in the equipment box.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><rect x="20" y="40" width="320" height="260" rx="10" fill="#f8f1e4" stroke="#b08968" stroke-width="3"/><text x="180" y="30" font-size="13" fill="#6f4518" text-anchor="middle" font-weight="bold">Available box of balloon models</text><g font-size="10" text-anchor="middle"><g><circle cx="74" cy="84" r="17" fill="#ff922b" stroke="#c92a2a"/><text x="74" y="112" fill="#333">6.0 N</text><text x="74" y="124" fill="#0b7285">10 cm²</text></g><g><circle cx="180" cy="84" r="21" fill="#ff922b" stroke="#c92a2a"/><text x="180" y="116" fill="#333">6.0 N</text><text x="180" y="128" fill="#0b7285">15 cm²</text></g><g><circle cx="282" cy="84" r="18" fill="#ff922b" stroke="#c92a2a"/><text x="282" y="112" fill="#333">4.0 N</text><text x="282" y="124" fill="#0b7285">12 cm²</text></g><g><circle cx="78" cy="180" r="24" fill="#ff922b" stroke="#c92a2a"/><text x="78" y="216" fill="#333">6.0 N</text><text x="78" y="228" fill="#0b7285">20 cm²</text></g><g><circle cx="190" cy="180" r="26" fill="#ff922b" stroke="#c92a2a"/><text x="190" y="218" fill="#333">6.0 N</text><text x="190" y="230" fill="#0b7285">25 cm²</text></g><g><circle cx="290" cy="180" r="16" fill="#ff922b" stroke="#c92a2a"/><text x="290" y="206" fill="#333">8.0 N</text><text x="290" y="218" fill="#0b7285">9 cm²</text></g><g><circle cx="84" cy="262" r="29" fill="#ff922b" stroke="#c92a2a"/><text x="84" y="300" fill="#333">6.0 N</text><text x="84" y="312" fill="#0b7285">30 cm²</text></g><g><circle cx="200" cy="262" r="22" fill="#ff922b" stroke="#c92a2a"/><text x="200" y="294" fill="#333">5.0 N</text><text x="200" y="306" fill="#0b7285">18 cm²</text></g></g><rect x="360" y="40" width="180" height="200" rx="10" fill="#e7f5ff" stroke="#1c7ed6" stroke-width="3" stroke-dasharray="6 4"/><text x="450" y="30" font-size="13" fill="#1864ab" text-anchor="middle" font-weight="bold">Equipment box</text><g fill="none" stroke="#74c0fc" stroke-width="1.5"><circle cx="395" cy="80" r="16"/><circle cx="450" cy="80" r="16"/><circle cx="505" cy="80" r="16"/><circle cx="395" cy="140" r="16"/><circle cx="450" cy="140" r="16"/><circle cx="505" cy="140" r="16"/><circle cx="422" cy="200" r="16"/><circle cx="478" cy="200" r="16"/></g><text x="450" y="262" font-size="10" fill="#1864ab" text-anchor="middle">drag your chosen models here</text></svg>',
          },
          caption: 'A box of balloon models, each labelled with the weight it supports and its canopy CSA. Choose models that share the same weight and span the widest CSA range.',
        },
        ph: 'Select models that: (1) all have the same weight, (2) cover the greatest possible range of CSAs, (3) at least 5 models with regular CSA intervals.',
      },
      {
        label: 'e',
        text: '**Justify** the selection you have made in part (d).',
        marks: 2,
        ph: 'All same weight → controls weight variable. Greatest range of CSAs → establishes relationship. Regular intervals → patterns identifiable.',
      },
      {
        label: 'f',
        text: '**State** how many trials you will record. **Justify** your answer.',
        marks: 2,
        ph: '3–5 trials per data point.\nJustification: Reduces random errors; allows mean calculation; improves reliability.',
      },
    ],
  },

  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Balloon CSA Investigation — Data Processing',
    marks: 14,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates the effect that the CSA of the balloon canopy has on the air speed needed to keep it aloft. He proposes the following hypothesis:\n\n"According to my research I know that the CSA of the balloon canopy is inversely proportional to the square of the air speed flowing past it. I can write this as: CSA ∝ 1/air speed². This means that as the CSA of the balloon increases, the air speed needed can be reduced."\n\nThe student collects one set of data.',
    tags: { unit: 'forces-interactions', topics: ['data analysis', 'graphs', 'hypothesis testing', 'CSA', 'processing data', 'line of best fit'], level: 'developing' },
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Balloon canopy size', 'Air speed / m s⁻¹'],
        rows: [
          ['radius = 4.9 cm', '12'],
          ['area = 50 cm²', '15'],
          ['area = 60 cm²', '14'],
          ['area = 85 cm²', '11'],
          ['area = 100 cm²', '10'],
          ['area = 120 cm²', '9'],
          ['area = 150 cm²', '8'],
        ],
      },
      caption: 'The student\'s recorded raw data. The first canopy was recorded as a radius (4.9 cm) rather than an area — its CSA must be converted to an area in part (b): πr² = π × 4.9² ≈ 75 cm² for the results table.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the question that the student is investigating.',
        marks: 1,
        ph: 'How does the CSA of the balloon canopy affect the air speed needed to keep it aloft?',
      },
      {
        label: 'b',
        text: 'The student has recorded the first value as radius rather than area. The student uses **area = πr²** to calculate the CSA. **Select** which of the following values would be most appropriate to present the CSA in a results table.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['4.9 cm (radius)', '30.8 cm (circumference)', '75 cm² (area from πr²)', '15.4 cm² (πr, radius not squared)'],
        ph: 'Select the most appropriate CSA value.',
      },
      {
        label: 'c',
        text: '**Organise** and present the data into a table. In your answer you should include the result from part (b).',
        marks: 4,
        ph: 'Table with:\n- Column heading: CSA / cm² (unit in header only)\n- Column heading: Air speed / m s⁻¹ (unit in header only)\n- Data in ascending or descending order\n- Consistent decimal places\n- Include 75 cm² from part (b)',
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
        ph: 'Graph C — it plots 1/v² against CSA, giving a straight line if CSA ∝ 1/v² is correct. A straight line through the origin confirms direct proportionality.',
      },
      {
        label: 'e',
        text: 'The student\'s hypothesis was: CSA ∝ 1/air speed². **Explain** if the data supports the hypothesis.',
        marks: 3,
        ph: 'If Graph C shows a straight line through the origin, CSA ∝ 1/v² is confirmed, supporting the hypothesis. State line shape, whether it passes through origin, and any anomalous points. Conclude whether hypothesis is supported.',
      },
      {
        label: 'f',
        text: 'The student\'s results do not all sit on the line of best fit. **Describe** what change should be made to the method and data collected that would benefit the scientific investigation.',
        marks: 2,
        ph: 'Repeat measurements for each CSA and calculate mean, reducing random errors. OR Add more data points to better establish the relationship.',
      },
    ],
  },

  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Ice Floating — Analysis and Design',
    marks: 20,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A second student models how ice blocks float in water. She knows that the weight of the ice block floating and the volume of the block below the water are linked by:\n\n**Weight of the ice block = volume of block below water × gravitational field strength × density of liquid**\n\nHer hypothesis is: "As the weight of the ice block increases, the volume of the ice block below the water will increase proportionally. This means that as the weight doubles the volume below water will also double."\n\nThe student collects one set of data shown in the table.',
    tags: { unit: 'forces-interactions', topics: ['buoyancy', 'density', 'experiment design', 'graphing', 'Archimedes'], level: 'developing' },
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Weight of the ice block / N', 'Volume of block below the water / cm³'],
        rows: [
          ['0.5', '50'],
          ['1.1', '110'],
          ['2.0', '200'],
          ['4.2', '420'],
        ],
      },
      caption: 'The student\'s results: as the weight of the ice block increases, the volume of the block below the water increases in proportion.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Identify** the type of graph that the student should draw of this data. **State** the quantities that should be presented on the graph.',
        marks: 3,
        ph: 'Type: Scatter graph.\nX-axis: weight of ice block (N)\nY-axis: volume of ice block below water (cm³)\nTitle: Graph of weight of ice block against volume below water.',
      },
      {
        label: 'b',
        text: 'The results support the relationship given in the hypothesis. Without drawing the graph, **describe** two features of the graph that would support the hypothesis.',
        marks: 2,
        ph: '1. Straight line of best fit (linear relationship).\n2. Line passes through the origin (directly proportional).',
      },
      {
        label: 'c',
        text: '**Discuss** two improvements to the method and data collected that would benefit the scientific investigation.',
        marks: 4,
        ph: 'Improvement 1: greater range of ice block weights → more evidence over wider range\nImprovement 2: more trials at each weight → reduces uncertainty, identifies anomalies',
      },
      {
        label: 'd',
        text: 'You extend the experiment to investigate how the density of sugar water affects the weight of an ice block able to float. Your teacher suggests: "As the mass of sugar dissolved in the water increases, the weight of the ice block able to float at a fixed level will also increase."\n\n**Design** an investigation to test this prediction. In your plan include:\n- the research question\n- the independent, dependent and two control variables\n- the equipment you will use\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 11,
        ph: 'Research question: How does the mass of sugar dissolved in water affect the weight of an ice block floating at a fixed level?\n\nIV: mass of sugar (g)\nDV: weight of ice block floating at fixed level (N)\nCV: volume of water (constant), same container, same ice block size\n\nEquipment: measuring cylinder, balance, sugar, water, model ice block (density-matched plastic), ruler for waterline\n\nMethod: Dissolve increasing measured sugar masses in fixed water volume. Float block and measure maximum weight at fixed waterline. Repeat.\n\nData: Minimum 5 sugar masses; 3 trials each; calculate mean weight.',
      },
    ],
  },

  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'Radioactivity — F-18 PET Scanning',
    marks: 13,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Over 10,000 hospitals around the world use radioisotopes. About 80% of this use is in helping to diagnose disease. Fluorine-18 (F-18) is a radioactive isotope used in Positron Emission Tomography (PET) scanning, which helps detect cancers and other metabolic diseases. F-18 emits positrons. It has a half-life of approximately **110 minutes**.',
    tags: { unit: 'atomic-physics', topics: ['radioactivity', 'half-life', 'gamma radiation', 'medical imaging', 'nuclear reactors', 'evaluation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Outline** why a half-life of 110 minutes is useful for PET scanning.',
        marks: 2,
        ph: 'Long enough (nearly 2 hours) to complete the scanning procedure and imaging.\nShort enough to minimise long-term radiation exposure to the patient after the scan.',
      },
      {
        label: 'b',
        text: '**Outline** two advantages a gamma-emitting isotope would have when used for detection purposes in the human body rather than alpha and beta emitters.',
        marks: 2,
        ph: 'Advantage 1: Gamma rays penetrate bone and tissue → detected externally by gamma camera.\nAdvantage 2: Lower ionising power → less cell/tissue damage than alpha or beta.',
      },
      {
        label: 'c',
        text: 'F-18 is produced in particle accelerators (cyclotrons) that must be on-site at the hospital. You are an adviser to a government agency. Using the information above, **discuss** and **evaluate** which method you think should be used to produce F-18 in a country of your choice. In your answer, you should include:\n- the advantages and disadvantages of your chosen method for your country\n- a conclusion',
        marks: 9,
        ph: 'Choose one method (on-site cyclotron / regional cyclotron centre / alternative production route).\n\nAdvantages of on-site cyclotron (linked to country): just-in-time production; no transport delay for 110-min half-life; reduces waste...\nDisadvantages: very high capital cost; requires specialist operators; only serves one hospital...\n\nConclusion: Justified with country-specific factors (hospital density, budget, geography).',
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
    stem: 'In 1987, a forgotten radiotherapy source was stolen from an abandoned hospital in Brazil. By the time the authorities had been notified, 249 people who had been in contact with the stolen source were found to have very high levels of radioactive matter in or on their bodies. Four people died from exposure to the radioactive isotope. Houses that had been contaminated had to be demolished and the topsoil had to be removed due to contamination. The International Atomic Energy Agency called it "one of the world\'s worst radiological incidents".\n\nUsing radioactive materials for diagnoses and treatment helps many patients but there are also risks attached to its use.',
    tags: { unit: 'atomic-physics', topics: ['radioactivity', 'medical applications', 'evaluation', 'implications', 'safety'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss** and **evaluate** the implications of using radioactive materials in medicine. In your answer you should include:\n- an advantage and a disadvantage of using radioactive materials in a hospital\n- the political implications for governments of using radioactive materials in medicine\n- the environmental implications\n- a concluding appraisal',
        marks: 11,
        ph: 'Advantage: enables life-saving cancer diagnosis and treatment.\nDisadvantage: risk of accidents causing contamination (Brazil incident — 4 deaths, 249 exposed).\n\nPolitical: governments must regulate storage, transport, disposal. International obligations (IAEA). Emergency response cost.\n\nEnvironmental: contamination of soil and water; long-term environmental hazard; demolition/removal of contaminated structures.\n\nConclusion: Medical benefits (millions of lives) outweigh risks with robust safety protocols and regulatory oversight.',
      },
    ],
  },
]
