import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2018',
  subject: 'Physics',
  session: 'May',
  year: 2018,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Magnetism & Electromagnetic Induction (10 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'magnetism-electromagnetism',
    marks: 10,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Magnets can be used to induce a current in a wire. When a bar magnet is pushed into a coil of wire, the changing magnetic field induces a current in the coil — the principle behind generators and transformers.',
    tags: { unit: 'magnetism-electromagnetism', topics: ['electromagnetic induction', 'transformers'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="qa1m" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Inducing a current with a moving magnet</text><g><rect x="60" y="92" width="44" height="36" fill="#c0392b"/><rect x="104" y="92" width="44" height="36" fill="#2c5282"/><text x="82" y="116" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">N</text><text x="126" y="116" font-size="14" font-weight="700" text-anchor="middle" fill="#fff">S</text></g><line x1="148" y1="110" x2="210" y2="110" stroke="#0b7285" stroke-width="2.5" marker-end="url(#qa1m)"/><text x="180" y="100" font-size="11" text-anchor="middle" fill="#0b7285">push</text><g stroke="#5b6b78" stroke-width="3" fill="none"><ellipse cx="300" cy="110" rx="14" ry="44"/><ellipse cx="320" cy="110" rx="14" ry="44"/><ellipse cx="340" cy="110" rx="14" ry="44"/><ellipse cx="360" cy="110" rx="14" ry="44"/></g><path d="M300,66 L420,66" stroke="#5b6b78" stroke-width="2" fill="none"/><path d="M360,154 L420,154" stroke="#5b6b78" stroke-width="2" fill="none"/><circle cx="470" cy="110" r="26" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="470" y="116" font-size="15" font-weight="700" text-anchor="middle" fill="#0b7285">A</text><line x1="420" y1="66" x2="446" y2="92" stroke="#5b6b78" stroke-width="2"/><line x1="420" y1="154" x2="446" y2="128" stroke="#5b6b78" stroke-width="2"/><text x="330" y="186" font-size="11" text-anchor="middle" fill="#5b6b78">coil of wire connected to an ammeter (A)</text></svg>',
      },
      caption: 'A bar magnet pushed into a coil induces a current that registers on the ammeter.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the diagram that correctly shows the magnetic field lines around a bar magnet.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="fa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><g><text x="150" y="24" font-size="13" font-weight="700" text-anchor="middle">A</text><rect x="120" y="70" width="30" height="30" fill="#c0392b"/><rect x="150" y="70" width="30" height="30" fill="#2c5282"/><text x="135" y="91" font-size="11" fill="#fff" text-anchor="middle">N</text><text x="165" y="91" font-size="11" fill="#fff" text-anchor="middle">S</text><path d="M180,85 C230,40 230,130 180,85" fill="none" stroke="#0b7285" marker-end="url(#fa)"/><path d="M180,85 C235,55 235,115 180,85" fill="none" stroke="#0b7285"/><path d="M120,85 C70,40 70,130 120,85" fill="none" stroke="#0b7285"/><path d="M180,85 Q210,20 150,30" fill="none" stroke="#0b7285" marker-end="url(#fa)"/><path d="M180,85 Q210,150 150,140" fill="none" stroke="#0b7285" marker-end="url(#fa)"/><text x="150" y="170" font-size="9" fill="#94a3ad" text-anchor="middle">lines leave N, enter S</text></g><g><text x="450" y="24" font-size="13" font-weight="700" text-anchor="middle">B</text><rect x="420" y="70" width="30" height="30" fill="#c0392b"/><rect x="450" y="70" width="30" height="30" fill="#2c5282"/><text x="435" y="91" font-size="11" fill="#fff" text-anchor="middle">N</text><text x="465" y="91" font-size="11" fill="#fff" text-anchor="middle">S</text><circle cx="450" cy="85" r="34" fill="none" stroke="#0b7285"/><circle cx="450" cy="85" r="50" fill="none" stroke="#0b7285"/><text x="450" y="170" font-size="9" fill="#94a3ad" text-anchor="middle">concentric circles</text></g><g><text x="150" y="200" font-size="13" font-weight="700" text-anchor="middle">C</text><rect x="120" y="240" width="30" height="30" fill="#c0392b"/><rect x="150" y="240" width="30" height="30" fill="#2c5282"/><text x="135" y="261" font-size="11" fill="#fff" text-anchor="middle">N</text><text x="165" y="261" font-size="11" fill="#fff" text-anchor="middle">S</text><line x1="150" y1="230" x2="150" y2="200" stroke="#0b7285" marker-end="url(#fa)"/><line x1="120" y1="255" x2="80" y2="255" stroke="#0b7285" marker-end="url(#fa)"/><line x1="180" y1="255" x2="220" y2="255" stroke="#0b7285" marker-end="url(#fa)"/><text x="150" y="300" font-size="9" fill="#94a3ad" text-anchor="middle">straight radial lines</text></g><g><text x="450" y="200" font-size="13" font-weight="700" text-anchor="middle">D</text><rect x="420" y="240" width="30" height="30" fill="#c0392b"/><rect x="450" y="240" width="30" height="30" fill="#2c5282"/><text x="435" y="261" font-size="11" fill="#fff" text-anchor="middle">N</text><text x="465" y="261" font-size="11" fill="#fff" text-anchor="middle">S</text><path d="M480,255 C540,200 540,310 480,255" fill="none" stroke="#0b7285"/><path d="M420,255 C360,200 360,310 420,255" fill="none" stroke="#0b7285"/><text x="450" y="300" font-size="9" fill="#94a3ad" text-anchor="middle">loops on both N and S ends</text></g></svg>',
          },
          caption: 'Four candidate magnetic-field patterns around a bar magnet (A–D).',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'b',
        text: 'A bar magnet is pushed into a coil of wire. **Suggest two ways** to increase the size of the induced current.',
        marks: 2,
        ph: 'E.g. Use a stronger magnet / move the magnet faster / use more turns of wire / use a coil with lower resistance...',
      },
      {
        label: 'c',
        text: 'The bar magnet is turned so that the south pole enters the coil first. **Predict the change** on the induced current.',
        marks: 1,
        ph: 'E.g. The current will flow in the opposite direction...',
      },
      {
        label: 'd',
        text: 'The diagram shows a transformer with a primary coil of **10 turns** connected to a **110 V** supply. The secondary coil has **20 turns**. **Calculate** the output voltage of the secondary coil. Show your working.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="540" height="240" fill="#ffffff"/><text x="270" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Step-up transformer</text><rect x="245" y="50" width="50" height="150" fill="#9aa7b2" stroke="#5b6b78"/><text x="270" y="218" font-size="11" text-anchor="middle" fill="#5b6b78">soft-iron core</text><g stroke="#b8860b" stroke-width="3" fill="none"><ellipse cx="210" cy="80" rx="18" ry="9"/><ellipse cx="210" cy="100" rx="18" ry="9"/><ellipse cx="210" cy="120" rx="18" ry="9"/><ellipse cx="210" cy="140" rx="18" ry="9"/><ellipse cx="210" cy="160" rx="18" ry="9"/></g><g stroke="#b8860b" stroke-width="3" fill="none"><ellipse cx="330" cy="70" rx="18" ry="9"/><ellipse cx="330" cy="88" rx="18" ry="9"/><ellipse cx="330" cy="106" rx="18" ry="9"/><ellipse cx="330" cy="124" rx="18" ry="9"/><ellipse cx="330" cy="142" rx="18" ry="9"/><ellipse cx="330" cy="160" rx="18" ry="9"/><ellipse cx="330" cy="178" rx="18" ry="9"/></g><line x1="192" y1="80" x2="120" y2="80" stroke="#444" stroke-width="2"/><line x1="192" y1="160" x2="120" y2="160" stroke="#444" stroke-width="2"/><circle cx="105" cy="120" r="22" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="105" y="118" font-size="11" font-weight="700" text-anchor="middle" fill="#0b7285">110 V</text><text x="105" y="132" font-size="8" text-anchor="middle" fill="#5b6b78">supply</text><text x="210" y="195" font-size="11" text-anchor="middle" fill="#b8860b">primary</text><text x="210" y="208" font-size="10" text-anchor="middle" fill="#5b6b78">10 turns</text><line x1="348" y1="70" x2="430" y2="70" stroke="#444" stroke-width="2"/><line x1="348" y1="178" x2="430" y2="178" stroke="#444" stroke-width="2"/><circle cx="450" cy="124" r="22" fill="#eef3f6" stroke="#c0392b" stroke-width="2"/><text x="450" y="121" font-size="13" font-weight="700" text-anchor="middle" fill="#c0392b">?</text><text x="450" y="135" font-size="8" text-anchor="middle" fill="#5b6b78">output</text><text x="330" y="206" font-size="11" text-anchor="middle" fill="#b8860b">secondary</text><text x="330" y="219" font-size="10" text-anchor="middle" fill="#5b6b78">20 turns</text></svg>',
          },
          caption: 'Transformer: 110 V primary with 10 turns, secondary with 20 turns. Find the output voltage.',
        },
        ph: 'V_s / V_p = N_s / N_p → V_s = 110 × 20/10 = 220 V',
      },
      {
        label: 'e',
        text: 'The data in the table is taken from a real transformer which is not 100% efficient. **Calculate the efficiency** of this transformer.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Quantity', 'Primary coil', 'Secondary coil'],
            rows: [
              ['Voltage / V', '24', '12'],
              ['Current / A', '2.50', '4.75'],
            ],
          },
          caption: 'Measured voltage and current on each coil of a real transformer.',
        },
        ph: 'P_primary = 24 × 2.50 = 60 W; P_secondary = 12 × 4.75 = 57 W; efficiency = 57/60 = 0.95 = 95%',
      },
      {
        label: 'f',
        text: 'Faraday performed his experiment using direct current. **Suggest why** modern transformers use alternating current.',
        marks: 2,
        ph: 'Alternating current creates a constantly changing magnetic field / changing magnetic field continuously induces a current in the secondary coil. DC only induces current when switched on or off...',
      },
    ],
  },

  // ── Q2: Dry Ski Slope — Energy (9 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'work-energy',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Dry ski slopes are an example of artificial landscapes built by humans. A skier is carried to the top of a slope, gaining energy, and then descends, transferring that energy into other forms.',
    tags: { unit: 'work-energy', topics: ['kinetic energy', 'gravitational potential energy', 'efficiency'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="slp2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8dee3"/><stop offset="1" stop-color="#aab4bd"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Ski-slope dimensions</text><path d="M60,230 L60,90 L100,90 L320,230 Z" fill="url(#slp2)" stroke="#5b6b78" stroke-width="1.5"/><line x1="40" y1="90" x2="40" y2="230" stroke="#0b7285" stroke-width="1.5"/><line x1="36" y1="90" x2="44" y2="90" stroke="#0b7285" stroke-width="1.5"/><line x1="36" y1="230" x2="44" y2="230" stroke="#0b7285" stroke-width="1.5"/><text x="20" y="165" font-size="13" font-weight="700" fill="#0b7285" transform="rotate(-90 20 165)">50 m</text><line x1="100" y1="250" x2="320" y2="250" stroke="#0b7285" stroke-width="1.5"/><line x1="100" y1="246" x2="100" y2="254" stroke="#0b7285" stroke-width="1.5"/><line x1="320" y1="246" x2="320" y2="254" stroke="#0b7285" stroke-width="1.5"/><text x="210" y="268" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">205 m</text><g transform="translate(420,120)"><circle cx="0" cy="0" r="12" fill="#2c3e50"/><rect x="-7" y="12" width="14" height="34" rx="5" fill="#2c3e50"/><rect x="-22" y="48" width="44" height="6" rx="3" fill="#a8531a"/></g><rect x="392" y="80" width="78" height="60" rx="6" fill="#eef3f6" stroke="#5b6b78"/><text x="431" y="100" font-size="11" text-anchor="middle" fill="#1f2d3a">Mass of</text><text x="431" y="116" font-size="11" text-anchor="middle" fill="#1f2d3a">skier</text><text x="431" y="134" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">52 kg</text><text x="280" y="200" font-size="10" fill="#94a3ad">g = 10 m s⁻²</text></svg>',
      },
      caption: 'A ski slope of vertical height 50 m and slope length 205 m. The skier has a mass of 52 kg (g = 10 m s⁻²).',
    },
    tasks: [
      {
        label: 'a',
        text: 'Different variables are relevant to studying skiing. **Match** each variable to its most appropriate description.\n\n| Variable | Description |\n|---|---|\n| Velocity | ? |\n| Kinetic energy | ? |\n| Power | ? |\n\nDescriptions: *Speed in a particular direction* / *Energy due to the motion of an object* / *Energy transformed per unit time* / *Energy stored due to the position of an object*',
        marks: 3,
        ph: 'Velocity = Speed in a particular direction; Kinetic energy = Energy due to the motion of an object; Power = Energy transformed per unit time',
      },
      {
        label: 'b',
        text: 'Ski facilities use lifts to take users uphill. **Select** the type of energy that a skier gains when taken uphill.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Nuclear', 'Elastic potential', 'Thermal', 'Gravitational potential'],
        ph: 'Select the correct energy type',
      },
      {
        label: 'c',
        text: 'Calculate the size of the energy gained in part (b) using the diagram. Give your answer in **kilojoules (kJ)**. Assume the gravitational field strength is **10 ms⁻²**.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="slp2c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#d8dee3"/><stop offset="1" stop-color="#aab4bd"/></linearGradient></defs><rect width="520" height="260" fill="#ffffff"/><path d="M50,210 L50,70 L92,70 L300,210 Z" fill="url(#slp2c)" stroke="#5b6b78" stroke-width="1.5"/><line x1="30" y1="70" x2="30" y2="210" stroke="#0b7285" stroke-width="1.5"/><line x1="26" y1="70" x2="34" y2="70" stroke="#0b7285" stroke-width="1.5"/><line x1="26" y1="210" x2="34" y2="210" stroke="#0b7285" stroke-width="1.5"/><text x="14" y="145" font-size="13" font-weight="700" fill="#0b7285" transform="rotate(-90 14 145)">50 m</text><line x1="92" y1="230" x2="300" y2="230" stroke="#0b7285" stroke-width="1.5"/><line x1="92" y1="226" x2="92" y2="234" stroke="#0b7285" stroke-width="1.5"/><line x1="300" y1="226" x2="300" y2="234" stroke="#0b7285" stroke-width="1.5"/><text x="196" y="248" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">205 m</text><g transform="translate(400,100)"><circle cx="0" cy="0" r="11" fill="#2c3e50"/><rect x="-6" y="11" width="12" height="30" rx="5" fill="#2c3e50"/></g><rect x="372" y="64" width="74" height="54" rx="6" fill="#eef3f6" stroke="#5b6b78"/><text x="409" y="84" font-size="10" text-anchor="middle" fill="#1f2d3a">Mass of skier</text><text x="409" y="106" font-size="13" font-weight="700" text-anchor="middle" fill="#0b7285">52 kg</text><text x="260" y="180" font-size="10" fill="#94a3ad">g = 10 m s⁻²</text></svg>',
          },
          caption: 'Vertical height 50 m, slope length 205 m, skier mass 52 kg. Use GPE = mgh.',
        },
        ph: 'GPE = mgh = 52 × 10 × 50 = 26 000 J = 26 kJ',
      },
      {
        label: 'd',
        text: 'A skier descends the slope and reaches the base. **State the force** that reduces the speed of the skier.',
        marks: 1,
        ph: 'Friction (accept: drag / air resistance)',
      },
      {
        label: 'e',
        text: 'Tests show that an indoor ski slope is **40% efficient** — 40% of the energy at the top is converted to kinetic energy at the base. The diagram shows two slopes A (real) and B (indoor).\n\nDescribe the **three forms of energy output** involved in the motion of a skier who starts from rest at the top and reaches the base. Include approximate percentages.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="slpA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#eef3f7"/><stop offset="1" stop-color="#c4d0d9"/></linearGradient><linearGradient id="slpB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#dbe7f0"/><stop offset="1" stop-color="#9fb6c8"/></linearGradient></defs><rect width="560" height="230" fill="#ffffff"/><text x="150" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A: Real snow slope</text><path d="M40,180 C40,120 70,90 100,90 L120,90 L260,180 Z" fill="url(#slpA)" stroke="#5b6b78" stroke-width="1.5"/><rect x="96" y="78" width="20" height="14" fill="#c0392b"/><text x="150" y="205" font-size="10" text-anchor="middle" fill="#94a3ad">outdoor, full efficiency reference</text><text x="410" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">B: Indoor ski slope</text><path d="M300,180 C300,120 330,90 360,90 L380,90 L520,180 Z" fill="url(#slpB)" stroke="#5b6b78" stroke-width="1.5"/><rect x="356" y="78" width="20" height="14" fill="#c0392b"/><text x="410" y="205" font-size="10" text-anchor="middle" fill="#94a3ad">indoor, 40% efficient</text></svg>',
          },
          caption: 'Slope A (real snow) and slope B (indoor, 40% efficient). The skier starts from rest at the top of each.',
        },
        ph: 'Kinetic energy (~40%), thermal/heat energy (~50%), sound energy (~10%)',
      },
    ],
  },

  // ── Q3: Indoor Ski Slope — Heat Transfer (9 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'thermal-physics',
    marks: 9,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    stem: 'In addition to the efficiency of indoor snow slopes, environmental conditions such as temperature need to be reproduced. In the design of the cooling system for an indoor snow slope, a decision must be made about the position of the air cooling units. The air cooling units are positioned at the top of the building.',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'convection', 'evaporation', 'radiation'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="cold3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2563eb"/></marker><marker id="warm3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="520" height="300" fill="#ffffff"/><text x="260" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Air-cooling units at the top of the building</text><path d="M50,260 L50,80 L260,40 L470,80 L470,260 Z" fill="#f4f7f9" stroke="#5b6b78" stroke-width="1.5"/><rect x="120" y="58" width="60" height="22" rx="4" fill="#bcd6ee" stroke="#2563eb"/><rect x="340" y="58" width="60" height="22" rx="4" fill="#bcd6ee" stroke="#2563eb"/><text x="260" y="74" font-size="11" text-anchor="middle" fill="#2563eb">cooling units</text><path d="M150,86 C150,140 150,200 150,250" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#cold3)"/><text x="120" y="170" font-size="10" fill="#2563eb">cold air sinks</text><path d="M370,250 C370,200 370,140 370,86" fill="none" stroke="#c0392b" stroke-width="2.5" marker-end="url(#warm3)"/><text x="380" y="170" font-size="10" fill="#c0392b">warm air rises</text><path d="M150,250 C220,265 300,265 370,250" fill="none" stroke="#94a3ad" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M260,232 L260,180 L420,160" fill="none" stroke="#cbd5e1" stroke-width="1"/><rect x="50" y="250" width="420" height="14" fill="#e2e8f0"/><text x="260" y="262" font-size="10" text-anchor="middle" fill="#5b6b78">snow slope surface</text></svg>',
      },
      caption: 'Cooling units at the top chill the air, which becomes denser and sinks — setting up convection currents over the whole slope.',
    },
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
        ph: 'Cold air is denser than warm air so it sinks / hot air is less dense so it rises. Cooling units at the top cool the air which then sinks, creating convection currents that cool the whole slope more effectively than if placed at the bottom...',
      },
      {
        label: 'c',
        text: 'Snow cannons use water to make artificial snow. As water droplets evaporate, the temperature of the remaining water decreases. **Explain why** evaporation causes the temperature of the remaining liquid to decrease.',
        marks: 3,
        ph: 'High energy particles (molecules) at the surface escape / evaporate. Lower energy particles remain behind. The average kinetic energy of the remaining particles decreases, so the temperature decreases...',
      },
      {
        label: 'd',
        text: '**State the ideal colour** for snow cannons to minimise the amount of energy they absorb from the surroundings. Justify your answer with reference to electromagnetic radiation.',
        marks: 2,
        ph: 'Silver / white / shiny / metallic. These colours are poor absorbers / good reflectors of infrared radiation, so they absorb less thermal energy from the surroundings...',
      },
    ],
  },

  // ── Q4: Water Clocks — Inquiry & Processing (19 marks, B+C) ──
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 19,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'Water clocks are amongst the world\'s oldest timing devices. They use the flow of water to measure the passing of time.\n\nAn **inflow water clock** uses a constant flow of water into a fixed container. The time is recorded either when the water reaches the top of the container or against a scale as the water rises.\n\nAn **outflow water clock** uses a prefilled container of water. As the water drains out of the container the time is recorded either when the container is empty or against a scale as the water falls.',
    tags: { unit: 'measurement-motion', topics: ['variables', 'hypothesis', 'data collection', 'proportionality'], level: 'developing' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><marker id="dropm" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3f7e98"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><text x="150" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Inflow water clock</text><line x1="150" y1="44" x2="150" y2="74" stroke="#3f7e98" stroke-width="2" marker-end="url(#dropm)"/><text x="190" y="62" font-size="10" fill="#3f7e98">constant inflow</text><path d="M100,90 L100,240 L200,240 L200,90" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="102" y="160" width="96" height="78" fill="url(#wc)"/><g stroke="#94a3ad" stroke-width="1"><line x1="200" y1="120" x2="212" y2="120"/><line x1="200" y1="160" x2="212" y2="160"/><line x1="200" y1="200" x2="212" y2="200"/></g><text x="150" y="262" font-size="10" text-anchor="middle" fill="#94a3ad">water rises against a scale</text><text x="410" y="26" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Outflow water clock</text><path d="M360,70 L360,220 L460,220 L460,70" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="362" y="120" width="96" height="100" fill="url(#wc)"/><circle cx="410" cy="220" r="5" fill="#1f2d3a"/><line x1="410" y1="226" x2="410" y2="258" stroke="#3f7e98" stroke-width="2" marker-end="url(#dropm)"/><text x="448" y="248" font-size="10" fill="#3f7e98">drains through hole</text><g stroke="#94a3ad" stroke-width="1"><line x1="460" y1="100" x2="472" y2="100"/><line x1="460" y1="140" x2="472" y2="140"/><line x1="460" y1="180" x2="472" y2="180"/></g></svg>',
      },
      caption: 'Inflow clock (water rises at constant inflow) and outflow clock (water drains through a hole at the base).',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a question for a student to investigate about how the hole in an outflow water clock affects the time it takes the container to empty.',
        marks: 1,
        ph: 'How does the area of the hole affect the time it takes to fill/empty a container? (WTTE)',
      },
      {
        label: 'b',
        text: '**Formulate** a hypothesis that this question would test. Include a prediction and link to relevant scientific knowledge.',
        marks: 3,
        ph: 'As the area of the hole increases, the time to fill will decrease. The larger the hole, the greater the amount of water flowing through per unit time, so the container fills faster...',
      },
      {
        label: 'c',
        text: 'Below is a list of variables for this experiment. **Select** the appropriate description for each of the variables used.',
        marks: 3,
        widget: 'variable_classify',
        widgetItems: ['Type of liquid', 'Area of the out-flow tube', 'Time to fill the second container', 'Volume of second container', 'Viscosity of the liquid'],
        ph: 'Area of out-flow tube → Independent variable\nTime to fill container → Dependent variable\nType of liquid → Control variable\nVolume of second container → Control variable\nViscosity of the liquid → Control variable',
      },
      {
        label: 'd',
        text: '**State two pieces of equipment** needed to carry out this experiment, including a device for measuring the size of the hole.',
        marks: 2,
        ph: 'Stopwatch/timer; calipers/ruler (to measure the size/area of the hole); measuring cylinder',
      },
      {
        label: 'e',
        text: '**Describe** the data you will collect. Include the number of different values of the independent variable and the number of trials for each.',
        marks: 3,
        ph: 'Measure the time taken to fill the second container for at least 5 different areas of the hole. Repeat each measurement 3 times to allow a mean to be calculated and improve reliability...',
      },
      {
        label: 'f',
        text: 'The student carries out the experiment and plots two graphs. **Write a title** for Graph 1 that links the independent and dependent variables.',
        marks: 1,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Graph 1',
            xLabel: 'Area of the hole',
            xUnit: 'cm²',
            yLabel: 'Time to fill',
            yUnit: 's',
            xMin: 0,
            xMax: 2.0,
            yMin: 0,
            yMax: 100,
            xStep: 0.5,
            yStep: 20,
            dataPoints: [
              { x: 0.17, y: 90 },
              { x: 0.25, y: 60 },
              { x: 0.30, y: 50 },
              { x: 0.50, y: 30 },
              { x: 0.75, y: 20 },
              { x: 1.00, y: 15 },
              { x: 2.00, y: 7.5 },
            ],
          },
          caption: 'Graph 1 — fill time falls as the area of the hole increases (a curved, inverse relationship).',
        },
        ph: 'Variation of fill time with area of the hole / How the area of the hole affects the time to fill the container',
      },
      {
        label: 'g',
        text: 'Using Graph 2, **describe the relationship** between the fill time and the inverse of the area shown in the second graph.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Graph 2',
            mode: 'readoff',
            xAxis: { label: '1 / area  /  cm⁻²', min: 0, max: 6, tick: 1 },
            yAxis: { label: 'Time to fill  /  s', min: 0, max: 100, tick: 20 },
            points: [[0, 0], [1, 15], [2, 30], [3, 45], [4, 60], [5, 75], [6, 90]],
            readouts: [{ x: 6, note: 'read the fill time at 1/area = 6 cm⁻²' }],
            dataMaxX: 6,
          },
          caption: 'Graph 2 — fill time against the inverse of the hole area: a straight line through the origin (drag the crosshair to read off values).',
        },
        ph: 'As the inverse of the area increases, the fill time increases proportionally / The fill time is directly proportional to the inverse of the area (straight line through origin)...',
      },
      {
        label: 'h',
        text: '**Find the constant of proportionality** from Graph 2.',
        marks: 2,
        artefact: {
          component: 'GraphSim',
          data: {
            title: 'Graph 2',
            mode: 'readoff',
            xAxis: { label: '1 / area  /  cm⁻²', min: 0, max: 6, tick: 1 },
            yAxis: { label: 'Time to fill  /  s', min: 0, max: 100, tick: 20 },
            points: [[0, 0], [1, 15], [2, 30], [3, 45], [4, 60], [5, 75], [6, 90]],
            readouts: [
              { x: 2, note: 'read t at 1/area = 2' },
              { x: 6, note: 'read t at 1/area = 6' },
            ],
            dataMaxX: 6,
            gradientReadout: 'gradient = Δ(time) ÷ Δ(1/area)',
          },
          caption: 'Graph 2 — read two points off the straight line to find its gradient (the constant of proportionality).',
        },
        ph: 'k = gradient = Δy/Δx ≈ 15 s cm²',
      },
      {
        label: 'i',
        text: 'Use your value from part (h) to **calculate the area** needed for a fill time of 90 seconds.',
        marks: 2,
        ph: 'k = t × a → a = k/t = 15/90 ≈ 0.17 cm²',
      },
    ],
  },

  // ── Q5: Water Clock Design (13 marks, Criterion B — banded) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 13,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student wants to design an investigation into how the volume of water in the container affects the time taken to empty the container.',
    tags: { unit: 'measurement-motion', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'proficient' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wc5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><marker id="dr5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3f7e98"/></marker></defs><rect width="560" height="300" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Outflow water clock apparatus</text><path d="M120,60 L120,210 L220,210 L220,60" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="122" y="110" width="96" height="100" fill="url(#wc5)"/><g stroke="#94a3ad" stroke-width="1"><line x1="220" y1="90" x2="234" y2="90"/><text x="238" y="94" font-size="9" fill="#94a3ad">volume</text><line x1="220" y1="130" x2="234" y2="130"/><line x1="220" y1="170" x2="234" y2="170"/></g><circle cx="170" cy="210" r="5" fill="#1f2d3a"/><text x="120" y="232" font-size="9" fill="#5b6b78">hole (fixed size)</text><line x1="170" y1="216" x2="170" y2="250" stroke="#3f7e98" stroke-width="2" marker-end="url(#dr5)"/><rect x="330" y="120" width="44" height="120" rx="4" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="332" y="190" width="40" height="48" fill="url(#wc5)"/><text x="352" y="258" font-size="10" text-anchor="middle" fill="#5b6b78">measuring</text><text x="352" y="270" font-size="10" text-anchor="middle" fill="#5b6b78">cylinder</text><rect x="430" y="120" width="80" height="56" rx="6" fill="#222"/><text x="470" y="153" font-size="16" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00</text><text x="470" y="192" font-size="10" text-anchor="middle" fill="#5b6b78">stopwatch</text></svg>',
      },
      caption: 'A container with a fixed-size hole drains into a measuring cylinder; the time to empty is read from a stopwatch.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Design a complete investigation into how the **volume of water** in the container affects the **time taken to empty** the container. Your answer should include:\n\n- The **variables** (independent, dependent, and at least two control variables with justification)\n- The **equipment** needed, including how to measure the volume and time\n- A complete **method** that could be followed by another student\n- A **data collection plan** with at least five increments of the independent variable and three trials per increment',
        marks: 13,
        ph: 'Variables: IV = volume of water in container; DV = time to empty container; CV = size of hole (constant), type of liquid (same water), temperature (room temperature). Equipment: measuring cylinder (to set volume), stopwatch (to measure time), ruler (to measure hole size), container with hole. Method: Fill container to 100 mL. Start stopwatch when water begins to drain. Stop when container is empty. Record time. Repeat for volumes: 100, 200, 300, 400, 500 mL. Carry out 3 trials for each volume. Calculate mean time for each volume...',
      },
    ],
  },

  // ── Q6: Water Clock Height Investigation (16 marks, Criterion C) ──
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'measurement-motion',
    marks: 16,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    stem: 'A student decides to investigate the effect that the initial height of water in a tube has on the time taken for the tube to empty. He adds water to five tubes, fitted with a tap at the bottom, at different heights and allows the water to drain out.',
    tags: { unit: 'measurement-motion', topics: ['data processing', 'graphs', 'proportionality', 'evaluation'], level: 'proficient' },
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wc6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Five tubes filled to different heights</text><g><rect x="50" y="70" width="40" height="130" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="52" y="178" width="36" height="22" fill="url(#wc6)"/><polygon points="60,200 80,200 70,214" fill="#1f2d3a"/><text x="70" y="230" font-size="11" text-anchor="middle" fill="#0b7285">2 cm</text></g><g><rect x="150" y="70" width="40" height="130" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="152" y="158" width="36" height="42" fill="url(#wc6)"/><polygon points="160,200 180,200 170,214" fill="#1f2d3a"/><text x="170" y="230" font-size="11" text-anchor="middle" fill="#0b7285">4 cm</text></g><g><rect x="250" y="70" width="40" height="130" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="252" y="138" width="36" height="62" fill="url(#wc6)"/><polygon points="260,200 280,200 270,214" fill="#1f2d3a"/><text x="270" y="230" font-size="11" text-anchor="middle" fill="#0b7285">6 cm</text></g><g><rect x="350" y="70" width="40" height="130" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="352" y="118" width="36" height="82" fill="url(#wc6)"/><polygon points="360,200 380,200 370,214" fill="#1f2d3a"/><text x="370" y="230" font-size="11" text-anchor="middle" fill="#0b7285">8 cm</text></g><g><rect x="450" y="70" width="40" height="130" fill="none" stroke="#5b6b78" stroke-width="2"/><rect x="452" y="98" width="36" height="102" fill="url(#wc6)"/><polygon points="460,200 480,200 470,214" fill="#1f2d3a"/><text x="470" y="230" font-size="11" text-anchor="middle" fill="#0b7285">10 cm</text></g><text x="280" y="58" font-size="10" text-anchor="middle" fill="#94a3ad">each tube has an identical tap at the bottom (▽)</text></svg>',
      },
      caption: 'Five identical tubes, each fitted with a tap, filled to water heights of 2, 4, 6, 8 and 10 cm.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The time for the tube with the **8 cm** height of water was not recorded by the student. **Measure the time** shown in the stopwatch picture. Include the unit in your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="280" height="280" fill="#ffffff"/><circle cx="140" cy="150" r="110" fill="#f4f7f9" stroke="#5b6b78" stroke-width="3"/><circle cx="140" cy="150" r="100" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/><rect x="128" y="22" width="24" height="20" rx="4" fill="#9aa7b2" stroke="#5b6b78"/><g stroke="#1f2d3a"><line x1="140" y1="54" x2="140" y2="44" stroke-width="3"/><line x1="230" y1="150" x2="240" y2="150" stroke-width="3"/><line x1="140" y1="250" x2="140" y2="240" stroke-width="3"/><line x1="40" y1="150" x2="50" y2="150" stroke-width="3"/></g><text x="140" y="72" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">0</text><text x="218" y="155" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">15</text><text x="140" y="238" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">30</text><text x="62" y="155" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">45</text><text x="180" y="85" font-size="12" text-anchor="middle" fill="#5b6b78">5</text><text x="209" y="114" font-size="12" text-anchor="middle" fill="#5b6b78">10</text><text x="209" y="194" font-size="12" text-anchor="middle" fill="#5b6b78">20</text><text x="180" y="223" font-size="12" text-anchor="middle" fill="#5b6b78">25</text><g><line x1="140" y1="150" x2="197" y2="137" stroke="#c0392b" stroke-width="3"/><circle cx="140" cy="150" r="6" fill="#c0392b"/></g><text x="140" y="276" font-size="12" font-weight="700" text-anchor="middle" fill="#1f2d3a">60-second stopwatch · final reading</text></svg>',
          },
          caption: 'Analogue stopwatch showing the time for the tube to empty (60-second dial).',
        },
        ph: '12.8 s (accept 12.8 seconds; do not accept 12.8 sec)',
      },
      {
        label: 'b',
        text: '**Organise and present** the data from the water clocks into a suitable table. Include the result from part (a) in your answer.\n\nData collected: 2 cm → 6.4 s; 4 cm → 9.0 s; 6 cm → 11.1 s; 8 cm → [your answer from a]; 10 cm → 14.3 s',
        marks: 4,
        ph: 'Table with: headers "Height of water / cm" and "Time taken to empty the tube / s". Units in headers only. Data ordered (ascending or descending). All 5 rows correct including 12.8 s for 8 cm.',
      },
      {
        label: 'c',
        text: 'Before starting the experiment, the student writes the following hypothesis:\n\n*"If the height of the water in the tube doubles, there will be twice as much water, so the time taken to empty the tube will be proportional to the height of the water."*\n\nIf the results support the hypothesis, **select the most appropriate graph** that would represent the data.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="320" fill="#ffffff"/><g transform="translate(40,40)"><text x="100" y="-12" font-size="13" font-weight="700" text-anchor="middle">A</text><line x1="20" y1="100" x2="180" y2="100" stroke="#111" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="0" stroke="#111" stroke-width="1.5"/><line x1="20" y1="100" x2="170" y2="14" stroke="#2563eb" stroke-width="2.5"/><text x="100" y="118" font-size="9" text-anchor="middle" fill="#5b6b78">straight, through origin</text></g><g transform="translate(320,40)"><text x="100" y="-12" font-size="13" font-weight="700" text-anchor="middle">B</text><line x1="20" y1="100" x2="180" y2="100" stroke="#111" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="0" stroke="#111" stroke-width="1.5"/><line x1="20" y1="60" x2="170" y2="6" stroke="#2563eb" stroke-width="2.5"/><text x="100" y="118" font-size="9" text-anchor="middle" fill="#5b6b78">straight, positive y-intercept</text></g><g transform="translate(40,200)"><text x="100" y="-12" font-size="13" font-weight="700" text-anchor="middle">C</text><line x1="20" y1="100" x2="180" y2="100" stroke="#111" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="0" stroke="#111" stroke-width="1.5"/><path d="M20,100 Q80,90 170,12" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="100" y="118" font-size="9" text-anchor="middle" fill="#5b6b78">upward curve</text></g><g transform="translate(320,200)"><text x="100" y="-12" font-size="13" font-weight="700" text-anchor="middle">D</text><line x1="20" y1="100" x2="180" y2="100" stroke="#111" stroke-width="1.5"/><line x1="20" y1="100" x2="20" y2="0" stroke="#111" stroke-width="1.5"/><line x1="20" y1="14" x2="170" y2="100" stroke="#2563eb" stroke-width="2.5"/><text x="100" y="118" font-size="9" text-anchor="middle" fill="#5b6b78">straight, negative gradient</text></g></svg>',
          },
          caption: 'Four candidate graph shapes (A–D) for time to empty against initial height of water.',
        },
        ph: 'Select A, B, C, or D',
      },
      {
        label: 'd',
        text: 'Once the experiment is completed, the results produce the graph shown. The student declares that his results **support** the hypothesis. **Use the graph to outline one reason** why the student is incorrect.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Time to empty vs initial height of water',
            xLabel: 'Initial height of water',
            xUnit: 'cm',
            yLabel: 'Time to empty',
            yUnit: 's',
            xMin: 0,
            xMax: 10,
            yMin: 0,
            yMax: 16,
            xStep: 2,
            yStep: 2,
            lobf: true,
            dataPoints: [
              { x: 2, y: 6.4 },
              { x: 4, y: 9.0 },
              { x: 6, y: 11.1 },
              { x: 8, y: 12.8 },
              { x: 10, y: 14.3 },
            ],
          },
          caption: 'The plotted data (with line of best fit). Note where the line meets the time axis and whether the points lie on a straight line.',
        },
        ph: 'For the results to be proportional the line must go through (0,0), but the line crosses the y-axis at approximately 5.0 (not zero), so the relationship is not proportional / OR the line of best fit is not straight (a curve fits the data better), so the results are not proportional...',
      },
      {
        label: 'e',
        text: 'Three more students completed the experiment. The data is shown in the graphs below. **Evaluate the method** with the greatest validity and explain why the other methods are less valid.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><g transform="translate(30,30)"><text x="0" y="-8" font-size="11" font-weight="700" fill="#1f2d3a">Data from method A</text><line x1="20" y1="110" x2="240" y2="110" stroke="#111" stroke-width="1.2"/><line x1="20" y1="110" x2="20" y2="6" stroke="#111" stroke-width="1.2"/><text x="130" y="128" font-size="8" text-anchor="middle" fill="#5b6b78">Initial height / m  (0 → 0.6)</text><text x="6" y="60" font-size="8" fill="#5b6b78" transform="rotate(-90 6 60)">Time / s</text><line x1="20" y1="100" x2="90" y2="40" stroke="#2563eb" stroke-width="1.5"/><g fill="#c0392b"><circle cx="36" cy="92" r="2.2"/><circle cx="48" cy="84" r="2.2"/><circle cx="58" cy="76" r="2.2"/><circle cx="70" cy="66" r="2.2"/><circle cx="82" cy="56" r="2.2"/></g><text x="130" y="105" font-size="8" fill="#94a3ad">narrow low range — looks linear</text></g><g transform="translate(330,30)"><text x="0" y="-8" font-size="11" font-weight="700" fill="#1f2d3a">Data from method B</text><line x1="20" y1="110" x2="240" y2="110" stroke="#111" stroke-width="1.2"/><line x1="20" y1="110" x2="20" y2="6" stroke="#111" stroke-width="1.2"/><line x1="20" y1="100" x2="200" y2="22" stroke="#2563eb" stroke-width="1.5"/><g fill="#c0392b"><circle cx="96" cy="62" r="2.2"/><circle cx="108" cy="56" r="2.2"/><circle cx="120" cy="50" r="2.2"/><circle cx="132" cy="45" r="2.2"/><circle cx="144" cy="40" r="2.2"/></g><text x="130" y="105" font-size="8" fill="#94a3ad">narrow mid range — looks linear</text></g><g transform="translate(30,210)"><text x="0" y="-8" font-size="11" font-weight="700" fill="#1f2d3a">Data from method C</text><line x1="20" y1="110" x2="240" y2="110" stroke="#111" stroke-width="1.2"/><line x1="20" y1="110" x2="20" y2="6" stroke="#111" stroke-width="1.2"/><line x1="20" y1="92" x2="220" y2="20" stroke="#2563eb" stroke-width="1.5"/><g fill="#c0392b"><circle cx="168" cy="36" r="2.2"/><circle cx="180" cy="32" r="2.2"/><circle cx="192" cy="28" r="2.2"/><circle cx="204" cy="24" r="2.2"/><circle cx="216" cy="20" r="2.2"/></g><text x="130" y="105" font-size="8" fill="#94a3ad">narrow high range — looks linear</text></g><g transform="translate(330,210)"><text x="0" y="-8" font-size="11" font-weight="700" fill="#1f2d3a">Data from method D</text><line x1="20" y1="110" x2="240" y2="110" stroke="#111" stroke-width="1.2"/><line x1="20" y1="110" x2="20" y2="6" stroke="#111" stroke-width="1.2"/><path d="M28,96 Q90,44 220,22" fill="none" stroke="#2563eb" stroke-width="1.5"/><g fill="#c0392b"><circle cx="28" cy="96" r="2.2"/><circle cx="64" cy="66" r="2.2"/><circle cx="108" cy="48" r="2.2"/><circle cx="160" cy="34" r="2.2"/><circle cx="220" cy="22" r="2.2"/></g><text x="130" y="105" font-size="8" fill="#94a3ad">full range — reveals the curve</text></g></svg>',
          },
          caption: 'Methods A, B and C each used a narrow range of heights; method D spread its readings across the full range and shows the relationship is a curve, not a straight line.',
        },
        ph: 'Student D has the most valid method because the range of data most clearly shows the correct relationship. The other students used too narrow a range of data / their range of data shows an apparently linear relationship across the range selected, which does not reveal the true curve...',
      },
      {
        label: 'f',
        text: '**Suggest an alternative independent variable** to extend this investigation into water clocks.',
        marks: 1,
        ph: 'Viscosity of the liquid / pressure / type of liquid / density of liquid (do not accept: size of hole, volume of container, gravitational field strength)',
      },
      {
        label: 'g',
        text: 'For your alternative independent variable from part (f), **write a hypothesis** with a prediction and link to scientific knowledge.',
        marks: 3,
        ph: 'E.g. If viscosity increases, the time taken to empty the tube will increase. More viscous liquids have stronger intermolecular forces, so they flow more slowly through the hole, taking longer to drain...',
      },
    ],
  },

  // ── Q7: China Electricity & Three Gorges Dam (10 marks, Criterion D) ──
  {
    id: 7,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The graph shows the electrical energy consumption in kWh per person in China compared to the world average for the years 1975 to 2005.',
    tags: { unit: 'work-energy', topics: ['energy resources', 'hydroelectric power', 'data interpretation'], level: 'developing' },
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'Electrical energy consumption per person, 1975–2005',
        mode: 'readoff',
        xAxis: { label: 'Year', min: 1975, max: 2005, tick: 5 },
        yAxis: { label: 'Energy per person / kWh', min: 0, max: 3500, tick: 500 },
        points: [[1975, 200], [1980, 350], [1985, 540], [1990, 760], [1995, 1100], [2000, 1900], [2005, 3150]],
        originalLine: [[1975, 1500], [1980, 1700], [1985, 1900], [1990, 2100], [1995, 2300], [2000, 2550], [2005, 2800]],
        readouts: [{ x: 2005, note: 'China in 2005 ≈ 3150 kWh per person' }],
        dataMaxX: 2005,
        bestFit: 'Solid line = China · dashed line = world average.',
      },
      caption: 'China (solid) vs the world average (dashed). Drag the crosshair to read China\'s value in any year.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Outline how** China\'s electrical energy consumption per person changed over the 30-year period shown, compared with the world average.',
        marks: 2,
        ph: 'China\'s consumption increased significantly over the 30-year period / rose from about 200 kWh/person in 1975 to over 1000 kWh/person in 2005. The world average also increased but more slowly. China\'s consumption was below the world average in 1975 but approached it by 2005...',
      },
      {
        label: 'b',
        text: '**Suggest one cause** for the change in China\'s electrical energy consumption per person between 1975 and 2005.',
        marks: 1,
        ph: 'Rapid industrialisation / economic growth / increased manufacturing / population moving to cities / improved standard of living leading to greater use of electrical appliances...',
      },
      {
        label: 'c',
        text: 'The total number of units of electrical energy consumed in China in 1975 was **6.24 × 10¹¹ kWh**. Using the energy graph above and the population data below, **calculate the total electrical energy consumed** in China in 2005. Show your working clearly. Give your answer in kWh.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Year', 'Population of China / people'],
            rows: [
              ['1975', '9.16 × 10⁸'],
              ['1985', '1.05 × 10⁹'],
              ['1995', '1.20 × 10⁹'],
              ['2005', '1.25 × 10⁹'],
            ],
          },
          caption: 'Population of China. Combine the 2005 population with China\'s 2005 energy-per-person from the graph above.',
        },
        ph: 'From energy graph: China 2005 ≈ 3150 kWh/person. From population table: China 2005 ≈ 1.25 × 10⁹ people. Total = 3150 × 1.25 × 10⁹ = 3.94 × 10¹² kWh',
      },
      {
        label: 'd',
        text: 'Increased electrical energy demand has environmental impacts. **State three environmental impacts** linked to increased electrical energy demand.',
        marks: 3,
        ph: 'Burning fossil fuels releases CO₂ (climate change) / air pollution from combustion products / habitat destruction from mining / water pollution / deforestation for biofuels / thermal pollution of water from power stations...',
      },
      {
        label: 'e',
        text: 'One alternative method for the generation of electricity is hydroelectric power. The diagram shows a typical hydroelectric facility.\n\n**Drag and drop** the correct forms of energy to outline the main energy transformations that take place in a hydroelectric power plant, in the correct order.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="res7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><marker id="flow7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3f7e98"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Hydroelectric facility</text><path d="M430,70 L590,70 L590,260 L430,260 Z" fill="url(#res7)" stroke="#3f7e98"/><text x="510" y="160" font-size="12" font-weight="700" text-anchor="middle" fill="#1f5c7a">Reservoir</text><path d="M430,80 L300,200 L430,260 Z" fill="#9aa7b2" stroke="#5b6b78"/><text x="400" y="150" font-size="12" font-weight="700" text-anchor="middle" fill="#3a4a57">Dam</text><path d="M430,210 L300,240 L240,250" fill="none" stroke="#3f7e98" stroke-width="6" marker-end="url(#flow7)"/><circle cx="225" cy="252" r="22" fill="#cbd5e1" stroke="#5b6b78" stroke-width="2"/><g stroke="#5b6b78" stroke-width="2"><line x1="225" y1="234" x2="225" y2="270"/><line x1="207" y1="252" x2="243" y2="252"/><line x1="212" y1="239" x2="238" y2="265"/><line x1="212" y1="265" x2="238" y2="239"/></g><text x="225" y="292" font-size="11" text-anchor="middle" fill="#5b6b78">Turbine</text><rect x="150" y="150" width="100" height="70" rx="4" fill="#dbe7f0" stroke="#5b6b78"/><text x="200" y="190" font-size="12" font-weight="700" text-anchor="middle" fill="#2c5468">Generator</text><line x1="200" y1="220" x2="225" y2="234" stroke="#5b6b78" stroke-width="3"/><g><rect x="100" y="120" width="50" height="26" rx="3" fill="#9aa7b2" stroke="#5b6b78"/><text x="125" y="138" font-size="9" text-anchor="middle" fill="#1f2d3a">Transformer</text></g><line x1="175" y1="150" x2="135" y2="146" stroke="#5b6b78" stroke-width="2"/><line x1="100" y1="133" x2="30" y2="133" stroke="#444" stroke-width="2"/><text x="55" y="124" font-size="10" text-anchor="middle" fill="#5b6b78">Power output</text></svg>',
          },
          caption: 'Water stored high in the reservoir falls through the dam, spins the turbine, drives the generator, then passes through the transformer to the grid.',
        },
        ph: 'Gravitational potential energy → Kinetic energy → Electrical energy',
      },
    ],
  },

  // ── Q8: Three Gorges Dam Evaluation (14 marks, Criterion D — banded) ──
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'work-energy',
    marks: 14,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Towards the end of the 20th century, China planned the largest hydropower project the world had ever seen called the Three Gorges Dam. The dam, which was completed in 2006, remains one of the most controversial projects in modern times.',
    tags: { unit: 'work-energy', topics: ['evaluation', 'Three Gorges Dam', 'environmental impact', 'hydroelectric power'], level: 'advanced' },
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Perspective (the three tabs)', 'Positive impacts', 'Negative impacts'],
        rows: [
          ['1. The river itself', 'Flood control prevents loss of life (past floods killed ~300 000); generating capacity 22 500 MW', '177 fish species disrupted; baiji river dolphin driven extinct; sediment trapped behind the dam'],
          ['2. Surrounding landscape', 'New shipping route lets larger vessels reach inland cities', '632 km² of land flooded; 1.2 million people relocated from 13 cities, 140 towns, 1350 villages; more landslides'],
          ['3. Global perspective', 'Replaces ~31 million tonnes of coal per year, saving ~80 million tonnes of CO₂ each year', 'Concrete production released ~7 million tonnes of CO₂; decay of flooded vegetation releases methane'],
        ],
      },
      caption: 'The "three tabs" of evidence on the Three Gorges Dam: impacts on the river, the wider landscape, and the global picture.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using the information from the three tabs, **consider the positive and negative impacts** of the changes to the landscape, **discuss** and **evaluate** the environmental impact of the Three Gorges Dam hydropower project.\n\nIn your answer you should include:\n- the impacts on living and non-living things within the river\n- the impacts on the wider surrounding natural landscape\n- the impacts from a global perspective\n- a concluding appraisal',
        marks: 14,
        ph: 'Impacts on river: positive = flood control (300,000 deaths from flooding), power generation (22,500 MW); negative = 177 fish species disrupted, river dolphins extinct, sediment trapped. Wider landscape: 632 km² flooded, 1.2 million people relocated from 13 cities/140 towns/1350 villages; landslides increased. Global perspective: replaces 31 million tonnes of coal/year, saves ~80 million tonnes CO₂/year; concrete production released 7 million tonnes CO₂. Conclusion: overall the dam provides significant clean energy and flood protection but at major cost to biodiversity and local communities...',
      },
    ],
  },
]
