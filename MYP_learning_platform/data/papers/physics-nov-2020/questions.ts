import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-nov-2020',
  subject: 'Physics',
  session: 'November',
  year: 2020,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─── Q1: Thermoregulation in animals (8 marks, Criterion A) ───
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Thermal Physics — Thermoregulation',
    marks: 8,
    topicCanonical: 'Heat Transfer',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['heat transfer', 'conduction', 'convection', 'radiation', 'evaporation'], level: 'developing' },
    stem: 'Mammals need to keep their body temperature within a given range, a concept called thermoregulation. This question is about the physics of heat transfer used in thermoregulation.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="230" fill="#ffffff"/><text x="300" y="22" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Four mammals and their coats</text><g><rect x="24" y="40" width="128" height="150" rx="8" fill="#f6e6cf" stroke="#caa36a"/><text x="88" y="62" font-size="13" font-weight="700" text-anchor="middle" fill="#7a5a2a">A — Pig</text><ellipse cx="88" cy="105" rx="44" ry="28" fill="#f0c8b4" stroke="#c98a7a"/><text x="88" y="158" font-size="10" text-anchor="middle" fill="#6b5234">smooth,</text><text x="88" y="172" font-size="10" text-anchor="middle" fill="#6b5234">light skin</text></g><g><rect x="168" y="40" width="128" height="150" rx="8" fill="#eef2f4" stroke="#9bb0bd"/><text x="232" y="62" font-size="13" font-weight="700" text-anchor="middle" fill="#324b58">B — Zebra</text><ellipse cx="232" cy="105" rx="44" ry="28" fill="#f5f5f5" stroke="#333"/><g stroke="#222" stroke-width="3"><line x1="210" y1="84" x2="210" y2="126"/><line x1="222" y1="80" x2="222" y2="130"/><line x1="234" y1="80" x2="234" y2="130"/><line x1="246" y1="80" x2="246" y2="130"/><line x1="258" y1="84" x2="258" y2="126"/></g><text x="232" y="158" font-size="10" text-anchor="middle" fill="#324b58">short, smooth</text><text x="232" y="172" font-size="10" text-anchor="middle" fill="#324b58">fur</text></g><g><rect x="312" y="40" width="128" height="150" rx="8" fill="#eaf3fa" stroke="#9cc3de"/><text x="376" y="62" font-size="13" font-weight="700" text-anchor="middle" fill="#1f5c8a">C — Polar bear</text><ellipse cx="376" cy="105" rx="48" ry="32" fill="#ffffff" stroke="#bcd6e8" stroke-width="6"/><text x="376" y="158" font-size="10" text-anchor="middle" fill="#1f5c8a">thick, long,</text><text x="376" y="172" font-size="10" text-anchor="middle" fill="#1f5c8a">white fur</text></g><g><rect x="456" y="40" width="120" height="150" rx="8" fill="#eef0ec" stroke="#a7ad9c"/><text x="516" y="62" font-size="13" font-weight="700" text-anchor="middle" fill="#4a4f3a">D — Buffalo</text><ellipse cx="516" cy="105" rx="44" ry="28" fill="#9a9488" stroke="#5e5a4e"/><text x="516" y="158" font-size="10" text-anchor="middle" fill="#4a4f3a">short, grey</text><text x="516" y="172" font-size="10" text-anchor="middle" fill="#4a4f3a">hair</text></g><text x="300" y="214" font-size="11" text-anchor="middle" fill="#64748b">Trapped-air thickness of the coat sets how well heat is kept in.</text></svg>',
      },
      caption: 'Four mammals with different coats. A thicker coat traps more insulating air and reduces heat loss.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** which of these animals is better adapted to living in cold conditions.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A — Pig: smooth, light-coloured skin', 'B — Zebra: short, smooth black and white fur', 'C — Polar bear: thick, long, white fur', 'D — Buffalo: short, grey hair'],
        ph: 'Select one option.',
      },
      {
        label: 'b',
        text: 'Reindeer have fur with hollow hairs. **Outline** how this feature enables reindeer to keep warm in cold weather.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="230" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Cross-section of a hollow reindeer hair</text><circle cx="180" cy="120" r="78" fill="#f3e7d3" stroke="#b9924f" stroke-width="4"/><circle cx="180" cy="120" r="56" fill="#eaf3fa" stroke="#cbd5e1"/><text x="180" y="118" font-size="13" font-weight="700" text-anchor="middle" fill="#3f7e98">trapped</text><text x="180" y="134" font-size="13" font-weight="700" text-anchor="middle" fill="#3f7e98">air</text><text x="180" y="216" font-size="10" text-anchor="middle" fill="#7a5a2a">hollow hair shaft</text><g font-size="11" fill="#475569"><text x="300" y="78">• Air inside each hair is a poor</text><text x="312" y="94">conductor of heat (good insulator).</text><text x="300" y="124">• Trapped air cannot circulate, so</text><text x="312" y="140">convection currents are reduced.</text><text x="300" y="170">• Less heat is conducted/convected</text><text x="312" y="186">away → the reindeer stays warm.</text></g></svg>',
          },
          caption: 'Each hollow hair traps still air, a poor conductor, reducing heat loss by conduction and convection.',
        },
        ph: 'Describe the physics of how hollow fur reduces heat loss (2 points).',
      },
      {
        label: 'c',
        text: 'The Arctic fox is another animal adapted to living in cold conditions, while its distant cousin, the fennec fox, has evolved to live in a hot desert environment.\n\n**Outline** how the colour of the Arctic fox\'s fur **and** the size of the fennec fox\'s ears help with thermoregulation. You should use scientific language in your answer.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="rad1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#e8772e"/></marker></defs><rect width="560" height="250" fill="#ffffff"/><g><rect x="20" y="36" width="250" height="196" rx="10" fill="#eef6fb" stroke="#9cc3de"/><text x="145" y="58" font-size="13" font-weight="700" text-anchor="middle" fill="#1f5c8a">Arctic fox (cold)</text><ellipse cx="120" cy="130" rx="46" ry="40" fill="#ffffff" stroke="#cbd9e3"/><path d="M86,98 l16,-26 l14,22 Z" fill="#ffffff" stroke="#cbd9e3"/><path d="M154,98 l-16,-26 l-14,22 Z" fill="#ffffff" stroke="#cbd9e3"/><circle cx="120" cy="132" r="4" fill="#444"/><text x="145" y="206" font-size="10" text-anchor="middle" fill="#1f5c8a">white fur reflects light;</text><text x="145" y="220" font-size="10" text-anchor="middle" fill="#1f5c8a">small ears → little surface to lose heat</text></g><g><rect x="290" y="36" width="250" height="196" rx="10" fill="#fdf3e7" stroke="#e0b072"/><text x="415" y="58" font-size="13" font-weight="700" text-anchor="middle" fill="#a8531a">Fennec fox (hot)</text><ellipse cx="415" cy="150" rx="36" ry="30" fill="#f1c27d" stroke="#caa36a"/><path d="M392,124 q-30,-58 -8,-72 q20,30 22,66 Z" fill="#f7d9a6" stroke="#caa36a"/><path d="M438,124 q30,-58 8,-72 q-20,30 -22,66 Z" fill="#f7d9a6" stroke="#caa36a"/><circle cx="415" cy="152" r="4" fill="#444"/><line x1="384" y1="86" x2="356" y2="70" stroke="#e8772e" stroke-width="2" marker-end="url(#rad1)"/><line x1="446" y1="86" x2="474" y2="70" stroke="#e8772e" stroke-width="2" marker-end="url(#rad1)"/><text x="415" y="216" font-size="10" text-anchor="middle" fill="#a8531a">large ears → big surface area</text></g></svg>',
          },
          caption: 'White Arctic-fox fur reflects radiation; the fennec fox\'s large ears give a big surface area to radiate heat away.',
        },
        ph: 'Address both features: (1) white fur and radiation, (2) large ears and conduction/convection/radiation.',
      },
      {
        label: 'd',
        text: 'One method of thermoregulation in dogs is evaporation from their wet tongue and nose.\n\n**Explain** how the process of evaporation will lead to a cooling effect in a dog.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="esc1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="240" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Evaporation from a wet surface (tongue)</text><rect x="60" y="150" width="440" height="46" rx="6" fill="#cfe9f6" stroke="#3f7e98"/><text x="280" y="178" font-size="12" text-anchor="middle" fill="#2c5468">water film on the tongue</text><g fill="#0b7285"><circle cx="120" cy="172" r="5"/><circle cx="170" cy="178" r="5"/><circle cx="230" cy="170" r="5"/><circle cx="300" cy="180" r="5"/><circle cx="360" cy="172" r="5"/><circle cx="430" cy="178" r="5"/></g><g><circle cx="150" cy="96" r="5" fill="#0b7285"/><circle cx="250" cy="74" r="5" fill="#0b7285"/><circle cx="350" cy="90" r="5" fill="#0b7285"/><circle cx="420" cy="70" r="5" fill="#0b7285"/></g><line x1="135" y1="148" x2="150" y2="104" stroke="#0b7285" stroke-width="1.5" marker-end="url(#esc1)"/><line x1="240" y1="148" x2="250" y2="82" stroke="#0b7285" stroke-width="1.5" marker-end="url(#esc1)"/><line x1="345" y1="148" x2="350" y2="98" stroke="#0b7285" stroke-width="1.5" marker-end="url(#esc1)"/><text x="470" y="64" font-size="11" fill="#0b7285">fastest particles</text><text x="470" y="78" font-size="11" fill="#0b7285">escape as vapour</text><text x="60" y="222" font-size="11" fill="#475569">The most energetic particles leave → the average energy of those left falls → the tongue (and dog) cools.</text></svg>',
          },
          caption: 'The fastest-moving water particles escape as vapour, lowering the average kinetic energy of those left behind — so the surface cools.',
        },
        ph: 'Use particle theory: which particles escape, what happens to those left behind, and why this cools the dog.',
      },
    ],
  },

  // ─── Q2: Pikes Peak hill climb / energy (9 marks, Criterion A) ───
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power — Hill Climb',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['gravitational potential energy', 'Sankey diagrams', 'power'], level: 'developing' },
    stem: 'Hill climbing is a motor sport where drivers compete against each other to drive up a hill in the fastest time. A major event in the sport is the Pikes Peak event, held in the USA.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="mtn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdd9c6"/><stop offset="1" stop-color="#7e8d72"/></linearGradient></defs><rect width="600" height="260" fill="#eaf2f8"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Pikes Peak hill-climb course</text><path d="M20,230 L180,150 L320,90 L470,50 L580,40 L580,240 L20,240 Z" fill="url(#mtn)" stroke="#5e6b54"/><path d="M50,222 Q200,170 300,120 Q420,80 540,56" fill="none" stroke="#c0392b" stroke-width="3" stroke-dasharray="2 4"/><circle cx="50" cy="222" r="6" fill="#2f9e44"/><text x="34" y="214" font-size="11" font-weight="700" fill="#2f9e44">Start</text><text x="20" y="246" font-size="11" fill="#475569">altitude 2880 m</text><circle cx="540" cy="56" r="6" fill="#c0392b"/><text x="500" y="48" font-size="11" font-weight="700" fill="#c0392b">Finish</text><text x="468" y="36" font-size="11" fill="#475569">altitude 4300 m</text><g><rect x="210" y="208" width="180" height="24" rx="4" fill="#ffffff" stroke="#94a3ad"/><text x="226" y="225" font-size="12" font-weight="700" fill="#1f2d3a">Course length</text><text x="372" y="225" font-size="12" text-anchor="end" fill="#1f2d3a">20 km</text></g></svg>',
      },
      caption: 'The 20 km course climbs from 2880 m at the start to 4300 m at the finish — a height gain of 1420 m.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The Sankey diagram below represents the energy changes associated with a car engine. **Label** the energy forms on the diagram.',
        marks: 2,
        artefact: {
          component: 'SankeySim',
          data: {
            title: 'Energy changes in a car engine',
            units: '%',
            input: { label: 'Chemical energy (fuel)', value: 100 },
            outputs: [
              { label: 'Useful energy output', value: 25, kind: 'out' },
              { label: 'Heat losses', value: 70, kind: 'loss' },
              { label: 'Frictional losses', value: 5, kind: 'loss' },
            ],
            conservation: '100% in = 25% useful + 70% heat + 5% friction',
          },
          caption: 'Band widths are proportional to the percentage of the fuel\'s chemical energy. Only 25% becomes useful output.',
        },
        ph: 'Label all three output arrows: Useful energy output (25%), Heat losses (70%), Frictional losses (5%).',
      },
      {
        label: 'b',
        text: 'The event starts at an altitude of 2880 m and ends at an altitude of 4300 m. A car competing in the 1988 race had a mass of 880 kg. **Calculate** the gain in gravitational potential energy. You should assume that the gravitational field strength is 10 N kg⁻¹.',
        marks: 4,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ht" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="520" height="240" fill="#ffffff"/><line x1="90" y1="40" x2="90" y2="200" stroke="#0b7285" stroke-width="1.5" marker-end="url(#ht)"/><line x1="84" y1="200" x2="430" y2="200" stroke="#5b6b78" stroke-width="2"/><line x1="84" y1="60" x2="430" y2="60" stroke="#94a3ad" stroke-width="1" stroke-dasharray="4 4"/><text x="96" y="214" font-size="11" fill="#475569">start: 2880 m</text><text x="96" y="54" font-size="11" fill="#475569">finish: 4300 m</text><line x1="60" y1="60" x2="60" y2="200" stroke="#c0392b" stroke-width="1.5"/><text x="36" y="134" font-size="12" font-weight="700" fill="#c0392b" transform="rotate(-90 36 134)">Δh = 1420 m</text><g><rect x="320" y="160" width="56" height="30" rx="4" fill="#3a6ea5"/><circle cx="332" cy="194" r="7" fill="#2c3e50"/><circle cx="364" cy="194" r="7" fill="#2c3e50"/></g><g><rect x="330" y="34" width="56" height="30" rx="4" fill="#c0392b"/><circle cx="342" cy="68" r="7" fill="#2c3e50"/><circle cx="374" cy="68" r="7" fill="#2c3e50"/></g><text x="250" y="120" font-size="12" font-weight="700" fill="#1f2d3a">mass m = 880 kg</text><text x="250" y="138" font-size="11" fill="#475569">g = 10 N kg⁻¹</text></svg>',
          },
          caption: 'A car of mass 880 kg rises through a height Δh. Use ΔEp = mgΔh.',
        },
        ph: 'Show working: Δh = 4300 − 2880 = 1420 m; ΔEp = mgh = 880 × 10 × 1420 = ? J or MJ',
      },
      {
        label: 'c',
        text: 'A lighter car travelling the same route gained 8.8 MJ in 546 s. **Calculate** the power of this car.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="170" fill="#ffffff"/><text x="260" y="30" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Energy transferred by the lighter car</text><rect x="60" y="60" width="180" height="56" rx="8" fill="#eef6fb" stroke="#9cc3de"/><text x="150" y="88" font-size="13" font-weight="700" text-anchor="middle" fill="#1f5c8a">E = 8.8 MJ</text><text x="150" y="106" font-size="10" text-anchor="middle" fill="#1f5c8a">energy gained</text><rect x="300" y="60" width="160" height="56" rx="8" fill="#fef3e7" stroke="#e0b072"/><text x="380" y="88" font-size="13" font-weight="700" text-anchor="middle" fill="#a8531a">t = 546 s</text><text x="380" y="106" font-size="10" text-anchor="middle" fill="#a8531a">time taken</text><text x="260" y="150" font-size="12" text-anchor="middle" fill="#475569">power P = energy ÷ time = E / t</text></svg>',
          },
          caption: 'Use P = E / t with E = 8.8 MJ = 8 800 000 J and t = 546 s.',
        },
        ph: 'Show working: P = E / t = 8 800 000 / 546 = ? W   Include correct units.',
      },
    ],
  },

  // ─── Q3: Light waves and space (9 marks, Criterion A) ───
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Astrophysics — Light & Satellites',
    marks: 9,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['light emission and reflection', 'geostationary satellites', 'speed of light', 'Big Bang'], level: 'proficient' },
    stem: 'This question is about light waves and space. When we look up at the night sky, many bright objects are visible.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0b1a3a"/><stop offset="0.7" stop-color="#274472"/><stop offset="1" stop-color="#e8a25a"/></linearGradient><radialGradient id="moon3" cx="0.4" cy="0.4"><stop offset="0" stop-color="#f8f6ee"/><stop offset="1" stop-color="#c9c6b8"/></radialGradient></defs><rect width="600" height="280" fill="url(#sky)"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#ffffff">Objects in the night sky</text><g fill="#fff7d6"><circle cx="90" cy="70" r="3"/><circle cx="150" cy="50" r="2"/><circle cx="220" cy="80" r="2.5"/><circle cx="300" cy="55" r="2"/><circle cx="380" cy="90" r="2.5"/></g><circle cx="120" cy="120" r="9" fill="#fff7c0" stroke="#ffe066"/><text x="120" y="150" font-size="11" text-anchor="middle" fill="#ffe066">Star</text><circle cx="480" cy="80" r="34" fill="url(#moon3)"/><circle cx="470" cy="72" r="6" fill="#bdb9a8"/><circle cx="492" cy="92" r="4" fill="#bdb9a8"/><text x="480" y="138" font-size="11" text-anchor="middle" fill="#f8f6ee">Moon</text><circle cx="280" cy="150" r="13" fill="#d98a4a" stroke="#a86327"/><text x="280" y="182" font-size="11" text-anchor="middle" fill="#e7b07a">Planet</text><g transform="translate(380,150)"><rect x="-6" y="-6" width="12" height="12" fill="#cbd5e1" stroke="#94a3ad"/><rect x="-26" y="-3" width="18" height="6" fill="#3a6ea5"/><rect x="8" y="-3" width="18" height="6" fill="#3a6ea5"/></g><text x="380" y="182" font-size="11" text-anchor="middle" fill="#cbd5e1">Satellite</text><path d="M0,210 Q150,196 300,206 Q450,214 600,200 L600,280 L0,280 Z" fill="#0a0a12"/></svg>',
      },
      caption: 'Stars emit their own light; the Moon, planets and satellites are only visible because they reflect sunlight.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** whether each object emits its own light or reflects light.\n\n| Object | Emits or reflects light |\n|--------|------------------------|\n| Star | ? |\n| Moon | ? |\n| Planet | ? |\n| Satellite | ? |',
        marks: 2,
        widget: 'radio_select',
        widgetOptions: ['Star — Emits; Moon — Reflects; Planet — Reflects; Satellite — Reflects'],
        ph: 'Select Emits or Reflects for each: Star, Moon, Planet, Satellite.',
      },
      {
        label: 'b',
        text: 'Some satellites are always at the same point above the surface of the Earth. These are known as geostationary satellites. **State** why these satellites appear to be stationary.',
        marks: 1,
        artefact: {
          component: 'OrbitSim',
          data: {
            title: 'A geostationary satellite above the equator',
            mode: 'orbit',
            central: 'Earth',
            showForce: true,
            bodies: [
              { name: 'Earth', role: 'center', orbitalPeriod: 1, radius: 26, colour: '#1f5c8a' },
              { name: 'Geostationary satellite (period 24 h)', role: 'orbiter', orbitalPeriod: 1, orbitRadius: 1, radius: 7, colour: '#c0392b' },
            ],
          },
          caption: 'The satellite orbits once every 24 hours — the same time the Earth takes to rotate — so it stays above the same point.',
        },
        ph: 'State the orbital period of a geostationary satellite.',
      },
      {
        label: 'c',
        text: 'Satellite phones allow people to communicate in remote areas. **State** one additional application of geostationary satellites.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="170" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Some uses of geostationary satellites</text><g><rect x="24" y="50" width="120" height="90" rx="10" fill="#eef6fb" stroke="#9cc3de"/><text x="84" y="92" font-size="22" text-anchor="middle">📡</text><text x="84" y="124" font-size="11" text-anchor="middle" fill="#1f5c8a">TV / comms relay</text></g><g><rect x="160" y="50" width="120" height="90" rx="10" fill="#eef7ed" stroke="#9cd0a8"/><text x="220" y="92" font-size="22" text-anchor="middle">🌦️</text><text x="220" y="124" font-size="11" text-anchor="middle" fill="#2f7a44">weather forecasting</text></g><g><rect x="296" y="50" width="120" height="90" rx="10" fill="#fdf3e7" stroke="#e0b072"/><text x="356" y="92" font-size="22" text-anchor="middle">🗺️</text><text x="356" y="124" font-size="11" text-anchor="middle" fill="#a8531a">navigation / GPS</text></g><g><rect x="432" y="50" width="120" height="90" rx="10" fill="#f4eef9" stroke="#c2a8de"/><text x="492" y="92" font-size="22" text-anchor="middle">🛰️</text><text x="492" y="124" font-size="11" text-anchor="middle" fill="#6b3fa0">Earth observation</text></g></svg>',
          },
          caption: 'Geostationary satellites are used for TV relay, weather forecasting, navigation and Earth observation.',
        },
        ph: 'Give one use other than mobile phone communication (e.g. weather forecasting, GPS, TV relay, navigation).',
      },
      {
        label: 'd',
        text: 'Geostationary orbit is approximately 36 000 km above the surface of the Earth. Light travels at 3 × 10⁸ m s⁻¹. For someone using a satellite phone to communicate with a friend, **calculate** the minimum time delay between sending a message and it being received back on Earth.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="sig" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="230" fill="#f3f7fb"/><path d="M0,196 Q280,176 560,196 L560,230 L0,230 Z" fill="#1f5c8a"/><g transform="translate(280,30)"><rect x="-12" y="-12" width="24" height="24" fill="#cbd5e1" stroke="#94a3ad"/><rect x="-36" y="-5" width="22" height="10" fill="#3a6ea5"/><rect x="14" y="-5" width="22" height="10" fill="#3a6ea5"/></g><text x="280" y="14" font-size="11" text-anchor="middle" fill="#1f5c8a">geostationary satellite</text><circle cx="120" cy="196" r="6" fill="#c0392b"/><text x="120" y="218" font-size="11" text-anchor="middle" fill="#475569">sender</text><circle cx="440" cy="196" r="6" fill="#2f9e44"/><text x="440" y="218" font-size="11" text-anchor="middle" fill="#475569">receiver</text><line x1="126" y1="190" x2="268" y2="44" stroke="#0b7285" stroke-width="2" marker-end="url(#sig)"/><line x1="292" y1="44" x2="434" y2="190" stroke="#0b7285" stroke-width="2" marker-end="url(#sig)"/><text x="150" y="118" font-size="11" fill="#0b7285">up 36 000 km</text><text x="360" y="118" font-size="11" fill="#0b7285">down 36 000 km</text><text x="280" y="160" font-size="11" text-anchor="middle" fill="#475569">total distance = 2 × 36 000 km = 7.2 × 10⁷ m;  t = d / c</text></svg>',
          },
          caption: 'The signal travels up to the satellite and back down: distance = 2 × 36 000 km. Use t = d / c with c = 3 × 10⁸ m s⁻¹.',
        },
        ph: 'Convert km → m; total distance = 2 × 3.6 × 10⁷ m; t = d / c = ? Show all steps.',
      },
      {
        label: 'e',
        text: 'The Hubble Space Telescope is a satellite currently orbiting the Earth. Astronomers can use the light gathered by the telescope to observe that distant galaxies are moving away from each other. **Outline** how this observation provides evidence for the origin of the universe.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="exp" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#7a4fb5"/></marker></defs><rect width="560" height="200" fill="#0b1a3a"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#ffffff">Galaxies moving apart (expanding universe)</text><circle cx="280" cy="110" r="10" fill="#ffd166"/><g fill="#9cc3de"><circle cx="160" cy="70" r="7"/><circle cx="420" cy="70" r="7"/><circle cx="150" cy="150" r="7"/><circle cx="430" cy="150" r="7"/><circle cx="280" cy="40" r="6"/><circle cx="280" cy="180" r="6"/></g><g stroke="#7a4fb5" stroke-width="2"><line x1="266" y1="100" x2="180" y2="78" marker-end="url(#exp)"/><line x1="294" y1="100" x2="400" y2="78" marker-end="url(#exp)"/><line x1="266" y1="120" x2="172" y2="142" marker-end="url(#exp)"/><line x1="294" y1="120" x2="408" y2="142" marker-end="url(#exp)"/></g><text x="280" y="118" font-size="9" text-anchor="middle" fill="#0b1a3a">now</text></svg>',
          },
          caption: 'Galaxies are moving apart in all directions — so in the past they were closer together, evidence for the Big Bang.',
        },
        ph: 'Link: galaxies moving apart → in the past they were closer together → evidence for the Big Bang.',
      },
    ],
  },

  // ─── Q4: Kibble balance / electromagnet investigation (12 marks, Criterion B) ───
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Magnetism & Electromagnetism — Kibble Balance',
    marks: 12,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['scientific inquiry', 'electromagnets', 'variables', 'hypothesis'], level: 'proficient' },
    stem: 'Between 1889 and 2019, the kilogram was defined as the mass of a block of metal known as the International Prototype of the Kilogram. In 2019, scientists decided that a new way to define the mass of a kilogram was needed. The Kibble balance uses the force of an electromagnetic field produced by a current in a wire to balance the weight of an object and therefore calculate its mass. It is possible to investigate the same effect in your school classroom.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="300" fill="#ffffff"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Classroom Kibble balance</text><polygon points="300,70 320,100 280,100" fill="#7a6fb5"/><rect x="298" y="100" width="4" height="60" fill="#7a6fb5"/><path d="M120,76 Q300,56 480,76" fill="none" stroke="#7a6fb5" stroke-width="8" stroke-linecap="round"/><line x1="120" y1="80" x2="120" y2="150" stroke="#7a6fb5" stroke-width="2"/><line x1="480" y1="80" x2="480" y2="150" stroke="#7a6fb5" stroke-width="2"/><g><rect x="468" y="150" width="24" height="20" fill="#5b6b78"/><text x="500" y="165" font-size="12" fill="#1f2d3a">1 kg</text></g><g><rect x="110" y="150" width="20" height="60" rx="3" fill="#9aa3ad"/><g stroke="#c0392b" stroke-width="3" fill="none"><path d="M110,158 q20,0 20,8"/><path d="M110,170 q20,0 20,8"/><path d="M110,182 q20,0 20,8"/><path d="M110,194 q20,0 20,8"/></g><text x="120" y="230" font-size="11" text-anchor="middle" fill="#c0392b">electromagnet</text><text x="120" y="244" font-size="10" text-anchor="middle" fill="#475569">(coil on iron rod)</text></g><text x="300" y="200" font-size="11" text-anchor="middle" fill="#475569">An electric current through the electromagnet is</text><text x="300" y="216" font-size="11" text-anchor="middle" fill="#475569">increased until its pull balances the 1 kg mass.</text></svg>',
      },
      caption: 'The current through the electromagnet is increased until its magnetic pull balances the weight on the other side.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the research question this experiment could investigate.',
        marks: 1,
        ph: 'Write a research question identifying the independent variable (current) and dependent variable (electromagnet strength / weight supported).',
      },
      {
        label: 'b',
        text: 'Below is a list of variables that are important in this experiment. **Select** the description that best describes each.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Current | | | |\n| Diameter of the iron rod | | | |\n| Number of turns | | | |\n| Total length taken up by the turns | | | |\n| Total weight of paper clips supported by the electromagnet | | | |\n| Size of the paper clips | | | |',
        marks: 4,
        widget: 'variable_classify',
        widgetOptions: ['Current', 'Diameter of the iron rod', 'Number of turns', 'Total length taken up by the turns', 'Total weight of paper clips supported', 'Size of the paper clips'],
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Variable', 'Type of variable'],
            rows: [
              ['Current', '?'],
              ['Diameter of the iron rod', '?'],
              ['Number of turns', '?'],
              ['Total length taken up by the turns', '?'],
              ['Total weight of paper clips supported', '?'],
              ['Size of the paper clips', '?'],
            ],
          },
          caption: 'Classify each variable as independent, dependent or control.',
        },
        ph: 'Classify each variable: Current = Independent; Weight of clips = Dependent; all others = Control.',
      },
      {
        label: 'c',
        text: 'Using the information contained in the video and your knowledge of electromagnets, **formulate** a testable hypothesis that could test your research question from part (a).',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="220" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">More current → stronger electromagnet</text><g><text x="140" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#3a6ea5">low current</text><rect x="120" y="64" width="16" height="70" rx="3" fill="#9aa3ad"/><g stroke="#3a6ea5" stroke-width="2.5" fill="none"><path d="M120,72 q16,0 16,7"/><path d="M120,86 q16,0 16,7"/><path d="M120,100 q16,0 16,7"/></g><g stroke="#c0392b" stroke-width="1.5" fill="none"><path d="M128,138 q14,0 14,8"/><path d="M128,150 q14,0 14,8"/></g><text x="140" y="186" font-size="11" text-anchor="middle" fill="#c0392b">2 paper clips held</text></g><g><text x="420" y="56" font-size="12" font-weight="700" text-anchor="middle" fill="#3a6ea5">high current</text><rect x="400" y="64" width="16" height="70" rx="3" fill="#9aa3ad"/><g stroke="#3a6ea5" stroke-width="2.5" fill="none"><path d="M400,72 q16,0 16,7"/><path d="M400,86 q16,0 16,7"/><path d="M400,100 q16,0 16,7"/></g><g stroke="#c0392b" stroke-width="1.5" fill="none"><path d="M408,138 q14,0 14,8"/><path d="M408,150 q14,0 14,8"/><path d="M408,162 q14,0 14,8"/><path d="M408,174 q14,0 14,8"/><path d="M408,186 q14,0 14,8"/></g><text x="420" y="206" font-size="11" text-anchor="middle" fill="#c0392b">5 paper clips held</text></g><line x1="180" y1="110" x2="380" y2="110" stroke="#94a3ad" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#arrowM)"/><defs><marker id="arrowM" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#94a3ad"/></marker></defs><text x="280" y="102" font-size="11" text-anchor="middle" fill="#475569">increase current</text></svg>',
          },
          caption: 'A larger current produces a stronger magnetic field, so the electromagnet supports more paper clips.',
        },
        ph: 'Structure: If [current increases], then [weight of paper clips supported will increase] because [the electromagnetic field is stronger / more current → stronger magnetic field].',
      },
      {
        label: 'd',
        text: 'In the laboratory, you have a range of equipment available. **Select** one piece of equipment that you would need and state how it would be used in the experiment.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="160" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Equipment available</text><g><circle cx="90" cy="86" r="26" fill="#eef6fb" stroke="#3a6ea5" stroke-width="2"/><text x="90" y="91" font-size="15" font-weight="700" text-anchor="middle" fill="#3a6ea5">A</text><text x="90" y="130" font-size="11" text-anchor="middle" fill="#475569">ammeter</text></g><g><circle cx="210" cy="86" r="26" fill="#fef3e7" stroke="#a8531a" stroke-width="2"/><text x="210" y="91" font-size="15" font-weight="700" text-anchor="middle" fill="#a8531a">V</text><text x="210" y="130" font-size="11" text-anchor="middle" fill="#475569">voltmeter</text></g><g><rect x="304" y="64" width="52" height="44" rx="3" fill="#222"/><text x="330" y="92" font-size="11" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.0g</text><text x="330" y="130" font-size="11" text-anchor="middle" fill="#475569">balance</text></g><g><rect x="408" y="60" width="14" height="52" fill="#cbd5e1" stroke="#94a3ad"/><text x="415" y="130" font-size="11" text-anchor="middle" fill="#475569">ruler</text></g><g><circle cx="500" cy="86" r="20" fill="#fff" stroke="#5b6b78"/><line x1="500" y1="86" x2="500" y2="72" stroke="#5b6b78" stroke-width="2"/><text x="500" y="130" font-size="11" text-anchor="middle" fill="#475569">stopwatch</text></g></svg>',
          },
          caption: 'Choose suitable equipment — e.g. an ammeter to measure the current (the independent variable).',
        },
        ph: 'Name the equipment (e.g. ammeter) and state its purpose (to measure the size of the current).',
      },
      {
        label: 'e',
        text: 'A second piece of equipment is also needed to measure the dependent variable. **Select** the most appropriate choice and justify your selection.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Balance', 'Range', 'Resolution', 'Best for'],
            rows: [
              ['Balance 1', '0 – 10 g', '0.1 g', 'a few light paper clips'],
              ['Balance 2', '0 – 100 g', '0.1 g', 'many paper clips (widest range)'],
              ['Balance 3', '0 – 5 kg', '10 g', 'heavy masses, poor resolution'],
            ],
          },
          caption: 'Three balances available to measure the total weight of paper clips (the dependent variable).',
        },
        ph: 'Name the equipment (e.g. balance/scale) and explain why that range is most suitable (greatest range to measure the total weight of paper clips).',
      },
    ],
  },

  // ─── Q5: Electromagnet paper clip investigation (15 marks, Criterion C) ───
  {
    id: 5,
    crit: 'C',
    type: 'extended',
    topic: 'Magnetism — Paper Clip Investigation',
    marks: 15,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['data collection', 'data processing', 'graph analysis', 'proportional relationships'], level: 'proficient' },
    stem: 'Two different groups of students in your class choose to investigate a different variable. They both investigate whether the strength of the electromagnet is affected by the spacing of the turns wrapped around the iron rod. They decide to keep the current constant in the coil at 2 A. Your teacher tells the class that:\n\n**magnetic force ~ current × number of turns per centimetre**\n\nThe first group of students uses large paper clips, each with a weight of 0.2 N, to determine the weight supported by the electromagnet.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Coil length / cm', 'Number of large paper clips supported'],
        rows: [
          ['1.0', '6'],
          ['2.0', '3'],
          ['3.0', '2'],
          ['4.0', '1'],
          ['5.0', '1'],
          ['6.0', '1'],
        ],
      },
      caption: 'First group\'s raw data: the 6 turns were spread over different coil lengths and the number of paper clips held was recorded.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Present** the data from the tablet in a table.',
        marks: 3,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Coil length / cm', 'Number of paper clips supported'],
            rows: [
              ['1.0', '6'],
              ['2.0', '3'],
              ['3.0', '2'],
              ['4.0', '1'],
              ['5.0', '1'],
              ['6.0', '1'],
            ],
          },
          caption: 'The readings shown on the tablet, ready to be presented in your own clearly headed table.',
        },
        ph: 'Draw a table with clear headings and units. Include all 6 data rows (coil length / cm vs number of paperclips): 1.0→6, 2.0→3, 3.0→2, 4.0→1, 5.0→1, 6.0→1.',
      },
      {
        label: 'b',
        text: '**Calculate** the number of turns per centimetre and the total paper clip weight for each measurement. Present this processed data in a second table.',
        marks: 4,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Coil length / cm', 'Turns per cm / cm⁻¹', 'Number of clips', 'Total weight / N'],
            rows: [
              ['1.0', '6.0', '6', '1.2'],
              ['2.0', '3.0', '3', '0.6'],
              ['3.0', '2.0', '2', '0.4'],
              ['4.0', '1.5', '1', '0.2'],
              ['5.0', '1.2', '1', '0.2'],
              ['6.0', '1.0', '1', '0.2'],
            ],
          },
          caption: 'Worked example of the processed table: turns per cm = 6 turns ÷ length, weight = clips × 0.2 N.',
        },
        ph: 'Calculate turns per cm (= 6 turns ÷ length/cm) and weight/N (= clips × 0.2 N) for each row. Show working and correct units (cm⁻¹ and N). All values to 1 d.p.',
      },
      {
        label: 'c',
        text: 'The first group used large paper clips in their experiment. The second group uses small pins, each with a weight of 0.01 N. **Justify** why the second group of students will produce a better set of data.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Group', 'Object used', 'Weight of each object / N', 'Smallest step in measured weight'],
            rows: [
              ['First', 'large paper clip', '0.20', '0.20 N'],
              ['Second', 'small pin', '0.01', '0.01 N'],
            ],
          },
          caption: 'The second group can detect much smaller changes in supported weight (0.01 N steps vs 0.20 N steps).',
        },
        ph: 'This would lead to more accurate data because small pins produce a more precise measure of weight supported (0.01 N increments vs 0.2 N increments).',
      },
      {
        label: 'd',
        text: 'The relationship given for this experiment was:\n\n**weight supported ~ current × number of turns per centimetre**\n\nThe second group produced the following graph of their results. Use the graph to **explain** if the data supports the relationship.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'turns per cm / cm⁻¹',
            yLabel: 'weight supported / N',
            points: [[1.0, 0.10], [2.0, 0.20], [3.0, 0.30], [4.0, 0.40], [5.0, 0.50], [6.0, 0.60]],
            dataMaxX: 6.0,
          },
          caption: 'Second group\'s processed graph: a straight line through the origin (drag the crosshair to check proportionality).',
        },
        ph: 'Describe: straight line through the origin → relationship is proportional. State this supports the given relationship (weight ∝ turns per cm at constant current).',
      },
      {
        label: 'e',
        text: 'The independent variable in this experiment was number of turns per centimetre. If the independent variable was changed to current, **predict** the shape and the gradient of a graph drawn from the new data.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="230" fill="#ffffff"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Predict the new graph: weight vs current</text><line x1="70" y1="40" x2="70" y2="190" stroke="#1f2d3a" stroke-width="1.5"/><line x1="70" y1="190" x2="470" y2="190" stroke="#1f2d3a" stroke-width="1.5"/><text x="270" y="216" font-size="11" text-anchor="middle" fill="#475569">current / A</text><text x="30" y="120" font-size="11" text-anchor="middle" fill="#475569" transform="rotate(-90 30 120)">weight / N</text><line x1="70" y1="190" x2="420" y2="70" stroke="#0b7285" stroke-width="2.5"/><circle cx="70" cy="190" r="4" fill="#0b7285"/><text x="300" y="118" font-size="11" fill="#0b7285">straight line through</text><text x="300" y="134" font-size="11" fill="#0b7285">the origin (proportional)</text></svg>',
          },
          caption: 'A new straight line through the origin is expected, but its gradient differs because current is a different variable.',
        },
        ph: 'Shape: same (straight line through the origin — still proportional). Gradient: would be different because current is a different variable with a different constant of proportionality.',
      },
    ],
  },

  // ─── Q6: Capillary action investigation (11 marks, Criterion C & A) ───
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Pressure — Capillary Action',
    marks: 11,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['capillary action', 'proportional relationships', 'graphical analysis', 'gradient calculation'], level: 'proficient' },
    stem: 'We normally expect liquids to flow downwards through a tube. However, if the diameter of the tube is small enough, the liquid will rise up through the tube. This process is known as capillary action. This is one of the mechanisms by which liquids flow up through plant stems and tree trunks.\n\nA student decides to perform an experiment to investigate capillary action. After some research, they discover that the height to which the water level has risen above the liquid surface is determined by the following equation:\n\n**height above liquid surface = capillary constant × (1 / diameter)**\n\nThe capillary constant is the constant of proportionality for capillary action.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="cap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="250" fill="#ffffff"/><text x="280" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Five tubes of decreasing diameter in water</text><rect x="40" y="196" width="480" height="30" fill="url(#cap)" stroke="#3f7e98"/><text x="48" y="216" font-size="10" fill="#2c5468">water surface</text><g stroke="#94a3ad" stroke-width="1.5"><rect x="70" y="60" width="20" height="150" fill="none"/><rect x="160" y="60" width="16" height="150" fill="none"/><rect x="250" y="60" width="12" height="150" fill="none"/><rect x="340" y="60" width="9" height="150" fill="none"/><rect x="430" y="60" width="7" height="150" fill="none"/></g><rect x="71" y="74" width="18" height="136" fill="url(#cap)"/><rect x="161" y="118" width="14" height="92" fill="url(#cap)"/><rect x="251" y="148" width="10" height="62" fill="url(#cap)"/><rect x="341" y="166" width="7" height="44" fill="url(#cap)"/><rect x="431" y="174" width="5" height="36" fill="url(#cap)"/><g font-size="11" text-anchor="middle" fill="#1f2d3a"><text x="80" y="52">A</text><text x="168" y="52">B</text><text x="256" y="52">C</text><text x="344" y="52">D</text><text x="433" y="52">E</text></g><g font-size="9" text-anchor="middle" fill="#64748b"><text x="80" y="244">0.8 mm</text><text x="168" y="244">1.6 mm</text><text x="256" y="244">2.5 mm</text><text x="344" y="244">3.2 mm</text><text x="433" y="244">4.0 mm</text></g></svg>',
      },
      caption: 'The narrower the tube, the higher the water rises — height is inversely related to tube diameter.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The results of the experiment are recorded in the table below. **Measure** the height of the water in the tube and complete the table.',
        marks: 2,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Tube', 'Diameter / mm', '1 / diameter / mm⁻¹', 'Height of water / mm'],
            rows: [
              ['A', '0.8', '1.25', '37.0'],
              ['B', '1.6', '0.63', '19.0'],
              ['C', '2.5', '0.40', '?'],
              ['D', '3.2', '0.31', '9.0'],
              ['E', '4.0', '0.25', '7.0'],
            ],
          },
          caption: 'Results table — measure the height for tube C (≈ 12.0 mm) using the diagram and the ruler scale.',
        },
        ph: 'Read tube C height from the diagram (≈ 12.0 mm) and enter: C: diameter 2.5 mm, 1/diameter = 0.40 mm⁻¹, height = 12.0 mm.',
      },
      {
        label: 'b',
        text: '**Plot** your measured value on the graph below, and draw a line of best fit. You should add labels to the axes.',
        marks: 4,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'plot',
            xLabel: '1 / diameter / mm⁻¹',
            yLabel: 'height of water / mm',
            xRange: [0, 1.4],
            yRange: [0, 40],
            dataTable: [
              { x: 0.25, y: 7.0 },
              { x: 0.31, y: 9.0 },
              { x: 0.40, y: 12.0 },
              { x: 0.63, y: 19.0 },
              { x: 1.25, y: 37.0 },
            ],
          },
          caption: 'Drag each point to its (1/diameter, height) value, then Check — the points should lie on a straight line through the origin.',
        },
        ph: 'Plot point C at (0.40, 12.0). Draw line of best fit (through origin, approximately equal points above and below). Label x-axis: "1/diameter / mm⁻¹" and y-axis: "Height of liquid / mm".',
      },
      {
        label: 'c',
        text: '**Calculate** the capillary constant from the graph. You must show your working in your answer.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: '1 / diameter / mm⁻¹',
            yLabel: 'height of water / mm',
            points: [[0.25, 7.0], [0.31, 9.0], [0.40, 12.0], [0.63, 19.0], [1.25, 37.0]],
            readouts: [{ x: 1.25, note: 'top point ≈ (1.25, 37.0)' }, { x: 0.25, note: 'bottom point ≈ (0.25, 7.0)' }],
            dataMaxX: 1.25,
          },
          caption: 'Read two well-separated points off the line; gradient = Δheight / Δ(1/diameter) ≈ 30 mm² is the capillary constant.',
        },
        ph: 'Choose two points on the line of best fit with Δy ≥ 20 mm. Calculate gradient = Δy / Δx. Capillary constant ≈ 30 mm² (accept 25–35).',
      },
      {
        label: 'd',
        text: 'Giant redwood trees can grow to almost 100 m in height. From this experiment, we can conclude that capillary action is not the only mechanism used to move water through tree trunks. Use data from the image below to **suggest** how this experiment supports this conclusion.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="520" height="280" fill="#eef6f0"/><text x="260" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A giant redwood ≈ 100 m tall</text><rect x="60" y="240" width="400" height="14" fill="#cdbfa3"/><rect x="120" y="60" width="26" height="182" fill="#7a5230"/><g fill="#3f7d4f"><ellipse cx="133" cy="60" rx="60" ry="40"/><ellipse cx="133" cy="100" rx="48" ry="30"/></g><g stroke="#1f2d3a" stroke-width="1"><line x1="180" y1="60" x2="180" y2="240"/><line x1="174" y1="60" x2="186" y2="60"/><line x1="174" y1="240" x2="186" y2="240"/></g><text x="196" y="156" font-size="12" font-weight="700" fill="#1f2d3a">≈ 100 m</text><g font-size="11" fill="#475569"><text x="300" y="120">height ∝ 1 / diameter</text><text x="300" y="146">To raise water 100 m by capillary</text><text x="300" y="162">action alone, the tube would need an</text><text x="300" y="178">impossibly tiny diameter.</text><text x="300" y="204">So capillary action cannot be the</text><text x="300" y="220">only mechanism in tall trees.</text></g></svg>',
          },
          caption: 'Because height ∝ 1/diameter, reaching 100 m by capillary action would need an impossibly small tube — so it cannot be the only mechanism.',
        },
        ph: 'Use the inverse relationship: height ∝ 1/diameter. To raise water to ≈ 100 m the tube diameter would need to be unrealistically small → capillary action alone cannot explain water reaching 100 m heights.',
      },
    ],
  },

  // ─── Q7: Design investigation — temperature and capillary action (13 marks, Criterion B) ───
  {
    id: 7,
    crit: 'B',
    type: 'extended',
    topic: 'Pressure — Capillary Action Design',
    marks: 13,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    tags: { unit: 'pressure', topics: ['experimental design', 'variables', 'method', 'data collection'], level: 'advanced' },
    stem: 'You decide to extend the experiment and investigate how the temperature of the water affects the height that the water rises up a tube.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="cap7" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Apparatus: heating the water, then measuring the rise</text><path d="M150,120 L150,230 Q150,250 170,250 L290,250 Q310,250 310,230 L310,120 Z" fill="#dff0f7" stroke="#3f7e98" stroke-width="2"/><rect x="150" y="150" width="160" height="100" fill="url(#cap7)" opacity="0.8"/><text x="230" y="206" font-size="11" text-anchor="middle" fill="#2c5468">water (heated)</text><rect x="224" y="60" width="8" height="120" fill="none" stroke="#94a3ad" stroke-width="1.5"/><rect x="225" y="96" width="6" height="84" fill="url(#cap7)"/><text x="252" y="86" font-size="10" fill="#475569">capillary tube</text><g><rect x="360" y="120" width="14" height="120" rx="7" fill="#fff" stroke="#94a3ad"/><rect x="361" y="170" width="12" height="70" fill="#c0392b"/><circle cx="367" cy="246" r="10" fill="#c0392b"/><text x="367" y="112" font-size="10" text-anchor="middle" fill="#475569">thermometer</text></g><path d="M170,256 q60,18 120,0" fill="none" stroke="#e8772e" stroke-width="3"/><g stroke="#e8772e" stroke-width="2" fill="none"><path d="M200,262 q4,8 0,14"/><path d="M230,262 q4,8 0,14"/><path d="M260,262 q4,8 0,14"/></g><text x="230" y="276" font-size="10" text-anchor="middle" fill="#e8772e">heat source</text><g><rect x="430" y="120" width="14" height="120" fill="#cbd5e1" stroke="#94a3ad"/><text x="437" y="112" font-size="10" text-anchor="middle" fill="#475569">ruler</text></g></svg>',
      },
      caption: 'Suggested apparatus: heat the water to a set temperature (thermometer), then measure how high it rises in the capillary tube (ruler).',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** an investigation that you could use to carry out this investigation. In your plan, you must include:\n- a research question\n- the independent, dependent and one control variable\n- the equipment you need and how it will be used\n- your method for manipulating the variables\n- how you will collect sufficient data',
        marks: 13,
        ph: 'Research question: How does water temperature affect the height water rises in a capillary tube?\nIV: water temperature (°C); DV: height of water rise (mm); CV: tube diameter, type of liquid, tube length.\nEquipment: capillary tube(s), thermometer, ruler, beaker, water, heat source.\nMethod: heat water to at least 5 different temperatures; measure height of rise in each case; repeat 3 times; calculate mean.\nData: record in table with temperatures and height values; at least 5 increments AND 3 trials to calculate mean.',
      },
    ],
  },

  // ─── Q8: Maglev trains (8 marks, Criterion A & D) ───
  {
    id: 8,
    crit: 'A',
    type: 'extended',
    topic: 'Magnetism — Maglev Trains',
    marks: 8,
    topicCanonical: 'Electromagnetic Induction & Motors',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'magnetism-electromagnetism', topics: ['magnetic forces', 'friction', 'electromagnetic levitation'], level: 'proficient' },
    stem: 'One strategy used by infrastructure planners to transport people quickly in urban areas is the maglev (magnetic levitation) train. This type of train moves using powerful electromagnets instead of the conventional rail-and-wheels system.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 230" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="train8" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b76d6"/><stop offset="1" stop-color="#2b3a8f"/></linearGradient><marker id="lev8" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="230" fill="#eaf2f8"/><text x="300" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Maglev train floating above the guideway</text><rect x="80" y="150" width="440" height="22" rx="4" fill="#9aa3ad"/><text x="300" y="166" font-size="10" text-anchor="middle" fill="#fff">guideway with electromagnets</text><path d="M90,140 Q90,96 150,92 L470,92 Q510,96 510,140 Z" fill="url(#train8)" stroke="#1b245e"/><rect x="160" y="104" width="60" height="20" rx="4" fill="#bcd0f0" opacity="0.8"/><rect x="260" y="104" width="60" height="20" rx="4" fill="#bcd0f0" opacity="0.8"/><rect x="360" y="104" width="60" height="20" rx="4" fill="#bcd0f0" opacity="0.8"/><g stroke="#0b7285" stroke-width="2.5"><line x1="200" y1="148" x2="200" y2="132" marker-end="url(#lev8)"/><line x1="300" y1="148" x2="300" y2="132" marker-end="url(#lev8)"/><line x1="400" y1="148" x2="400" y2="132" marker-end="url(#lev8)"/></g><text x="300" y="200" font-size="11" text-anchor="middle" fill="#0b7285">repelling forces lift the train ≈ 1 cm above the track (no wheels touching)</text><text x="300" y="216" font-size="10" text-anchor="middle" fill="#475569">average speed ≈ 430 km h⁻¹</text></svg>',
      },
      caption: 'Repelling magnetic forces lift the train about 1 cm above the guideway, so no wheels touch the track.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Some metals are attracted to magnets, some are not. **Select** the metal that is attracted to magnets.',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['Aluminium', 'Copper', 'Iron', 'Lead'],
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="150" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">A magnet brought near four metals</text><g><path d="M70,60 h28 v40 h-12 v-22 h-4 v22 h-12 Z" fill="#c0392b"/><rect x="70" y="60" width="8" height="10" fill="#c0392b"/><rect x="90" y="60" width="8" height="10" fill="#5b6b78"/><text x="84" y="120" font-size="10" text-anchor="middle" fill="#475569">magnet</text></g><g font-size="11" text-anchor="middle"><circle cx="200" cy="80" r="22" fill="#dfe6ea" stroke="#94a3ad"/><text x="200" y="84" fill="#475569">Al</text><text x="200" y="120" fill="#475569">aluminium</text><circle cx="300" cy="80" r="22" fill="#e7c9a8" stroke="#b07a44"/><text x="300" y="84" fill="#7a4a1a">Cu</text><text x="300" y="120" fill="#475569">copper</text><circle cx="400" cy="80" r="22" fill="#c7ccd1" stroke="#5b6b78" stroke-width="2.5"/><text x="400" y="84" fill="#1f2d3a">Fe</text><text x="400" y="120" fill="#475569">iron</text><circle cx="500" cy="80" r="22" fill="#b9bcc4" stroke="#6b6f78"/><text x="500" y="84" fill="#475569">Pb</text><text x="500" y="120" fill="#475569">lead</text></g></svg>',
          },
          caption: 'Only one of these metals is magnetic (ferromagnetic) and is attracted to the magnet.',
        },
        ph: 'Select one metal.',
      },
      {
        label: 'b',
        text: 'Maglev trains use repelling forces between strong electromagnets attached to the tracks and the underside of the train. These electromagnets lift the whole train to float at about 1 cm above the tracks. The train can travel at an average speed of 430 km h⁻¹.\n\nIn order to function, the maglev train uses magnetic forces to control three systems: the levitation system, the guidance system, and the propulsion system.\n\n**Identify** the force corresponding to each system in the diagram.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="up8" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2b6cb0"/></marker><marker id="side8" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2f9e44"/></marker><marker id="fwd8" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="280" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Forces on the maglev train (end view)</text><rect x="200" y="120" width="160" height="70" rx="8" fill="#bcd0f0" stroke="#2b3a8f" stroke-width="2"/><text x="280" y="160" font-size="13" font-weight="700" text-anchor="middle" fill="#1b245e">Train</text><rect x="160" y="208" width="240" height="20" rx="4" fill="#9aa3ad"/><text x="280" y="246" font-size="11" text-anchor="middle" fill="#475569">Tracks / guideway</text><line x1="280" y1="118" x2="280" y2="60" stroke="#2b6cb0" stroke-width="3" marker-end="url(#up8)"/><text x="290" y="78" font-size="12" font-weight="700" fill="#2b6cb0">1 — Levitation (up)</text><line x1="362" y1="155" x2="450" y2="155" stroke="#2f9e44" stroke-width="3" marker-end="url(#side8)"/><text x="370" y="142" font-size="12" font-weight="700" fill="#2f9e44">2 — Guidance (sideways)</text><line x1="120" y1="100" x2="60" y2="78" stroke="#c0392b" stroke-width="3" marker-end="url(#fwd8)"/><text x="20" y="68" font-size="12" font-weight="700" fill="#c0392b">3 — Propulsion (forward)</text><line x1="198" y1="155" x2="120" y2="155" stroke="#c0392b" stroke-width="3" marker-end="url(#fwd8)" opacity="0.35"/></svg>',
          },
          caption: 'Three magnetic forces: an upward force levitates the train, a sideways force guides it, and a forward force propels it.',
        },
        ph: 'Match each force arrow to a system: Levitation = upward force (blue), Guidance = sideways force (green), Propulsion = forward force (red).',
      },
      {
        label: 'c',
        text: 'Compared to a conventional train with wheels in contact with the track, the frictional forces in maglev trains are lower. **Suggest** two advantages of lower frictional forces.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><text x="280" y="24" font-size="13" font-weight="700" text-anchor="middle" fill="#1f2d3a">Conventional wheels vs maglev (friction)</text><g><rect x="40" y="60" width="220" height="70" rx="8" fill="#fdeceb" stroke="#e0a8a4"/><text x="150" y="84" font-size="12" font-weight="700" text-anchor="middle" fill="#a8312a">wheels on rails</text><text x="150" y="106" font-size="11" text-anchor="middle" fill="#a8312a">high friction → heat, wear, noise</text></g><g><rect x="300" y="60" width="220" height="70" rx="8" fill="#eafaf0" stroke="#9cd0a8"/><text x="410" y="84" font-size="12" font-weight="700" text-anchor="middle" fill="#2f7a44">floating maglev</text><text x="410" y="106" font-size="11" text-anchor="middle" fill="#2f7a44">low friction → faster, efficient</text></g><text x="280" y="166" font-size="11" text-anchor="middle" fill="#475569">Lower friction → higher top speed · less energy wasted as heat · less wear · lower maintenance</text></svg>',
          },
          caption: 'With almost no contact friction, the maglev wastes less energy as heat and suffers less wear than a wheeled train.',
        },
        ph: 'Give two distinct advantages: e.g. higher maximum speed; less energy wasted as heat; less wear and tear on components; lower maintenance costs.',
      },
      {
        label: 'd',
        text: 'The size of the repelling force depends on the distance between the magnets. The graph below shows how the repelling force varies when the distance between the magnets increases.\n\nUse the graph to **explain** the effect on the repelling force of an increase in the number of passengers.',
        marks: 3,
        artefact: {
          component: 'FieldSim',
          data: {
            title: 'Repelling force vs distance between the magnets',
            quantity: 'magnetic repelling force',
            relationship: 'force decreases as the gap increases',
            k: 12,
            distanceUnits: 'cm',
            distanceRange: [0.5, 4],
            forceUnits: 'kN',
            slider: 'gap between train and track',
            passengerCoupling: 'More passengers → heavier train → train sinks → smaller gap → larger repelling force.',
          },
          caption: 'Drag the distance slider: as the gap between the magnets gets smaller, the repelling force rises sharply.',
        },
        ph: 'Step 1: more passengers → greater weight/load on train. Step 2: train sinks closer to track → smaller distance between magnets. Step 3: from graph, smaller distance → larger repelling force.',
      },
    ],
  },

  // ─── Q9: Transportation evaluation (15 marks, Criterion D) ───
  {
    id: 9,
    crit: 'D',
    type: 'extended',
    topic: 'Forces & Transport — Evaluation',
    marks: 15,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'forces-interactions', topics: ['evaluation', 'transport', 'science in society', 'economic and environmental impact'], level: 'advanced' },
    stem: 'The increase in world population has created a need for a complex and varied transportation infrastructure. New technologies have given people the choice of several options for moving between cities. More people are able to travel long distances for work and leisure. People value comfort, reduced travel times and low cost. The infographic shows some information related to four transport options that could be taken when travelling between two cities (driving distance ≈ 480 km).',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Transport option', 'Journey time', 'Cost / €', 'CO₂ emitted / kg per passenger', 'Safety (deaths per billion km)'],
        rows: [
          ['Car (driving)', '5 h 0 min', '70', '104', '3.1'],
          ['Train', '3 h 20 min', '95', '14', '0.6'],
          ['Air', '1 h 15 min', '140', '180', '0.05'],
          ['Coach', '6 h 30 min', '40', '27', '0.4'],
        ],
      },
      caption: 'Comparison of four ways to travel ≈ 480 km between two cities. Use these figures to evaluate one option against driving.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Using information from the infographic above and your wider MYP knowledge, choose one of the alternative transportation methods. **Discuss and evaluate** your chosen method compared to driving a car. In your answer you should include:\n- the economic advantages and disadvantages of your chosen method compared to driving\n- the environmental advantages and disadvantages of your chosen method compared to driving\n- the comfort of your chosen method compared to driving\n- the safety of your chosen method compared to driving\n- your final recommendation',
        marks: 15,
        ph: 'Choose train, air, or coach. Compare systematically on: cost, CO₂/environmental impact, comfort (seating, space, journey experience), safety data, and make a justified final recommendation. Use specific data from the infographic where possible.',
      },
    ],
  },

]
