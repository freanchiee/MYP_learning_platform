import type { Question } from '@/lib/types'


export const paperMeta = {
  id: 'physics-may-2016-v2',
  subject: 'Physics',
  session: 'May',
  year: 2016,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Mass vs Weight — Inner Planets context (5 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Mass, Weight & the Inner Planets',
    marks: 5,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'An astronaut is planning a mission to the inner planets of the solar system. The following table contains information that can be used to describe mass or weight.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hdr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f6f8b"/><stop offset="1" stop-color="#155366"/></linearGradient><linearGradient id="rowlbl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef4f6"/><stop offset="1" stop-color="#dfeaee"/></linearGradient></defs><rect x="0" y="0" width="720" height="320" fill="#ffffff"/><g stroke="#5b7884" stroke-width="1.5"><rect x="30" y="30" width="220" height="60" fill="#ffffff"/><rect x="250" y="30" width="235" height="60" fill="url(#hdr)"/><rect x="485" y="30" width="205" height="60" fill="url(#hdr)"/><rect x="30" y="90" width="220" height="75" fill="url(#rowlbl)"/><rect x="30" y="165" width="220" height="75" fill="url(#rowlbl)"/><rect x="30" y="240" width="220" height="60" fill="url(#rowlbl)"/><rect x="250" y="90" width="235" height="75" fill="#ffffff"/><rect x="250" y="165" width="235" height="75" fill="#ffffff"/><rect x="250" y="240" width="235" height="60" fill="#ffffff"/><rect x="485" y="90" width="205" height="75" fill="#ffffff"/><rect x="485" y="165" width="205" height="75" fill="#ffffff"/><rect x="485" y="240" width="205" height="60" fill="#ffffff"/></g><text x="367.5" y="67" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff">Mass</text><text x="587.5" y="67" text-anchor="middle" font-size="20" font-weight="bold" fill="#ffffff">Weight</text><text x="46" y="134" font-size="17" fill="#1d2d33">Units</text><text x="46" y="208" font-size="17" fill="#1d2d33">Type of quantity</text><text x="46" y="266" font-size="17" fill="#1d2d33">Effect of gravitational</text><text x="46" y="287" font-size="17" fill="#1d2d33">field strength</text></svg>' },
      caption: 'Information that can be used to describe mass or weight.',
    },
    tags: { unit: 'forces-interactions', topics: ['mass', 'weight', 'gravitational field strength', 'solar system'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct option to complete the table. Drag the correct items into the Mass and Weight columns for: Units, Type of quantity, Effect of gravitational field strength.\n\nDraggable items: *newton* / *kilogram* / *size only* / *size and direction* / *independent of gravitational field strength* / *dependent on gravitational field strength*',
        marks: 2,
        ph: 'Mass: kilogram, size only, independent. Weight: newton, size and direction, dependent on g.',
      },
      {
        label: 'b',
        text: 'The astronaut studies the inner planets. **Name** the three inner planets listed below in order of their distance from the Sun, starting with the closest.\n\nPlanets: Venus, Mars, Mercury',
        marks: 2,
        ph: 'Mercury → Venus → Mars (order by distance from the Sun).',
      },
      {
        label: 'c',
        text: 'Venus is hotter at its surface than Mercury, even though Mercury is closer to the Sun. **Suggest one reason** related to its atmosphere why Venus has a higher surface temperature than Mercury.',
        marks: 1,
        ph: 'Venus has a thick atmosphere (mainly CO₂) that creates a strong greenhouse effect, trapping heat and raising its surface temperature far above Mercury, which has almost no atmosphere.',
      },
    ],
  },

  // ── Q2: Probe — Gravity on Inner Planets (11 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Gravitational Field Strength on Inner Planets',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'A space probe drops a test object from a height of 90.0 m on each inner planet. The shape of the object ensures frictional forces are negligible. All of the object\'s gravitational potential energy (E_p) transforms to kinetic energy before hitting the surface.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0d18"/><stop offset="1" stop-color="#15101a"/></linearGradient><radialGradient id="planet" cx="0.5" cy="1.4" r="1.1"><stop offset="0" stop-color="#f4c890"/><stop offset="0.55" stop-color="#d6a060"/><stop offset="1" stop-color="#a06b2c"/></radialGradient><linearGradient id="probebody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd6dc"/><stop offset="1" stop-color="#8a929a"/></linearGradient><linearGradient id="readout" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfbf6"/><stop offset="1" stop-color="#eceae0"/></linearGradient></defs><rect x="20" y="20" width="720" height="400" rx="6" fill="url(#sky)"/><g fill="#dde6f5"><circle cx="90" cy="70" r="1.4"/><circle cx="180" cy="55" r="1"/><circle cx="260" cy="90" r="1.6"/><circle cx="350" cy="60" r="1.1"/><circle cx="470" cy="80" r="1.4"/><circle cx="560" cy="55" r="1"/><circle cx="650" cy="95" r="1.5"/><circle cx="710" cy="140" r="1.2"/><circle cx="120" cy="150" r="1.1"/><circle cx="300" cy="170" r="1.3"/><circle cx="420" cy="150" r="1"/><circle cx="600" cy="170" r="1.4"/><circle cx="700" cy="220" r="1.1"/><circle cx="80" cy="240" r="1.3"/><circle cx="220" cy="250" r="1"/><circle cx="510" cy="240" r="1.2"/><circle cx="660" cy="280" r="1.4"/><circle cx="150" cy="320" r="1"/><circle cx="380" cy="300" r="1.2"/><circle cx="600" cy="330" r="1.1"/></g><radialGradient id="sunhalo" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#fff3c0" stop-opacity="0.85"/><stop offset="1" stop-color="#fff3c0" stop-opacity="0"/></radialGradient><circle cx="600" cy="100" r="60" fill="url(#sunhalo)"/><circle cx="600" cy="100" r="18" fill="#fff1a8"/><clipPath id="frameClip"><rect x="20" y="20" width="720" height="400" rx="6"/></clipPath><g clip-path="url(#frameClip)"><path d="M20,440 L20,360 Q380,250 740,360 L740,440 Z" fill="url(#planet)"/><path d="M20,360 Q380,250 740,360" fill="none" stroke="#ffd9a0" stroke-width="2" opacity="0.55"/><path d="M20,358 Q380,248 740,358" fill="none" stroke="#ffba70" stroke-width="14" opacity="0.18"/><g fill="#7a4a18" opacity="0.5"><ellipse cx="180" cy="385" rx="22" ry="6"/><ellipse cx="450" cy="350" rx="28" ry="7"/><ellipse cx="640" cy="390" rx="18" ry="5"/></g></g><text x="330" y="225" text-anchor="middle" font-size="16" font-weight="bold" fill="#7ee08a">Metres</text><g stroke="#7ee08a" stroke-width="2.4" stroke-linecap="round"><line x1="300" y1="245" x2="320" y2="245"/><line x1="300" y1="270" x2="320" y2="270"/><line x1="300" y1="296" x2="320" y2="296"/><line x1="300" y1="322" x2="320" y2="322"/><line x1="300" y1="348" x2="320" y2="348"/><line x1="300" y1="374" x2="320" y2="374"/><line x1="300" y1="400" x2="320" y2="400"/></g><g fill="#7ee08a" font-size="15"><text x="328" y="250">90</text><text x="328" y="275">75</text><text x="328" y="301">60</text><text x="328" y="327">45</text><text x="328" y="353">30</text><text x="328" y="379">15</text><text x="328" y="405">0</text></g><g transform="translate(255,392)"><rect x="-34" y="-6" width="20" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6" stroke-width="1"/><rect x="14" y="-6" width="20" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6" stroke-width="1"/><line x1="-14" y1="1" x2="-7" y2="1" stroke="#9fb6d6" stroke-width="1.6"/><line x1="7" y1="1" x2="14" y2="1" stroke="#9fb6d6" stroke-width="1.6"/><rect x="-9" y="-9" width="18" height="18" rx="3" fill="url(#probebody)" stroke="#5c656d" stroke-width="1.2"/><ellipse cx="0" cy="-13" rx="7" ry="3.5" fill="#e6ebef" stroke="#5c656d" stroke-width="1"/><line x1="0" y1="-9" x2="0" y2="-13" stroke="#5c656d" stroke-width="1.4"/><line x1="-6" y1="9" x2="-10" y2="14" stroke="#5c656d" stroke-width="1.6"/><line x1="6" y1="9" x2="10" y2="14" stroke="#5c656d" stroke-width="1.6"/></g><g><rect x="40" y="42" width="160" height="62" rx="5" fill="url(#readout)" stroke="#9aa0a6" stroke-width="1.2"/><text x="54" y="66" font-size="16" fill="#27343a">time / s</text><text x="64" y="90" font-size="16" font-weight="bold" fill="#27343a">Venus: 4.5 s</text></g><g font-size="15" font-weight="bold" text-anchor="middle"><rect x="620" y="200" width="100" height="30" rx="4" fill="#4a4f55"/><text x="670" y="220" fill="#f2f4f6">Mercury</text><rect x="620" y="238" width="100" height="30" rx="4" fill="#caa23a"/><text x="670" y="258" fill="#2a2410">Venus</text><rect x="620" y="276" width="100" height="30" rx="4" fill="#2f6fb0"/><text x="670" y="296" fill="#eef5fb">Earth</text><rect x="620" y="314" width="100" height="30" rx="4" fill="#c75a2e"/><text x="670" y="334" fill="#fff3ec">Mars</text></g></svg>' },
      caption: 'A probe drops a test object 90.0 m to the surface of each inner planet; the panel shows the fall time on Venus.',
    },
    tags: { unit: 'forces-interactions', topics: ['gravitational field strength', 'density', 'gravitational potential energy', 'kinetic energy', 'velocity'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The table shows the time it takes the test object to fall 90.0 m on different planets. Using the equation *s = ½at²*, **calculate** the gravitational field strength on Venus and on Mercury.\n\n| Planet | Time (s) |\n|--------|----------|\n| Venus | 4.5 |\n| Mercury | 7.0 |',
        marks: 3,
        ph: 'g = 2s/t². Venus: g = 2×90/(4.5)² = 180/20.25 = 8.9 ms⁻². Mercury: g = 2×90/(7.0)² = 180/49.0 = 3.7 ms⁻².',
      },
      {
        label: 'b',
        text: 'The gravitational field strength (g) is related to both the density and the radius of a planet. Venus has a greater g than Mercury.\n\n**Explain** what this tells us about the relationship between density and g, and between radius and g.',
        marks: 2,
        ph: 'A planet\'s g depends on both its density and radius. Venus is larger and denser than Mercury. Greater density → higher g. Greater radius also contributes to higher g when paired with higher density.',
      },
      {
        label: 'c',
        text: 'The probe releases a test object of mass **450 g** from a height of **90.0 m** above the surface of Mars (g on Mars = 3.8 ms⁻²). **Calculate** the gravitational potential energy of the test object before release.',
        marks: 3,
        ph: 'Ep = mgh = 0.45 × 3.8 × 90.0 = 154.35 J ≈ 154 J.',
      },
      {
        label: 'd',
        text: 'The test object travels faster before hitting the surface of Venus than before hitting the surface of Mars. **Explain** this observation.',
        marks: 3,
        ph: 'g on Venus is greater than on Mars. Ep = mgh is therefore greater on Venus (same m and h). All Ep converts to KE, so KE is greater on Venus. Since KE = ½mv² and mass is the same, velocity must be greater on Venus.',
      },
    ],
  },

  // ── Q3: Cone Parachute Terminal Velocity Investigation (11 marks, Criterion B) ──
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Terminal Velocity — Mass Attached to Cone Parachute',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student is going to investigate how the **mass attached to a cone parachute** affects the **terminal velocity** of the parachute falling through air.',
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'drag', 'experimental design', 'variables'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equipment the student would need and give a reason why each piece of equipment is needed.',
        marks: 2,
        ph: 'Stopwatch/timer: to measure time for the parachute to fall. Metre rule: to measure the distance fallen. Set of masses (varying mass). Cone parachutes of identical shape/size (controlled).',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the mass attached increases, the terminal velocity increases. Because higher mass → greater weight force. To reach a new terminal velocity (where drag = weight), the parachute must fall faster to increase drag. Therefore terminal velocity increases with mass.',
      },
      {
        label: 'c',
        text: '**State** one variable that must be controlled and **describe** how this variable should be controlled in this experiment.',
        marks: 3,
        ph: 'Control variable: size/shape of the cone parachute. How to control: use identical cone parachutes throughout. Reason: the size and shape of the parachute affects the drag force, which determines terminal velocity.',
      },
      {
        label: 'd',
        text: '**Describe** the data to collect. Include the number of different values of mass and the number of repeats.',
        marks: 3,
        ph: 'At least five different masses attached to the parachute. Values evenly spread across a range (e.g. 5 g to 25 g). At least 3 repetitions for each mass value to improve reliability and allow a mean to be calculated.',
      },
    ],
  },

  // ── Q4: Phases of Venus (3 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Phases of Venus',
    marks: 3,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Venus orbits the Sun closer than Earth does. Observers using telescopes can watch Venus\'s lit face change over the course of its orbit.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="space" cx="0.5" cy="0.4" r="0.9"><stop offset="0" stop-color="#10182b"/><stop offset="1" stop-color="#05070f"/></radialGradient><radialGradient id="venuslit" cx="0.32" cy="0.34" r="0.85"><stop offset="0" stop-color="#fff5d2"/><stop offset="0.55" stop-color="#f3d28a"/><stop offset="1" stop-color="#b07f3a"/></radialGradient><radialGradient id="sung" cx="0.4" cy="0.4" r="0.85"><stop offset="0" stop-color="#fff7c2"/><stop offset="0.5" stop-color="#ffd86a"/><stop offset="1" stop-color="#f59e2c"/></radialGradient><radialGradient id="sunhalo2" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#ffe89a" stop-opacity="0.7"/><stop offset="1" stop-color="#ffe89a" stop-opacity="0"/></radialGradient><clipPath id="cropCrescent2"><circle cx="200" cy="200" r="55"/></clipPath><clipPath id="cropGibbous2"><circle cx="540" cy="180" r="92"/></clipPath></defs><rect x="0" y="0" width="720" height="360" fill="#ffffff"/><text x="40" y="34" font-size="15" fill="#2a3b42">Animation 1: Venus orbiting the Sun.</text><text x="400" y="34" font-size="15" fill="#2a3b42">Animation 2: how Venus looks from Earth</text><text x="400" y="52" font-size="15" fill="#2a3b42">over the course of its orbit.</text><rect x="20" y="70" width="320" height="250" rx="6" fill="url(#space)"/><g fill="#cfd8ee"><circle cx="70" cy="110" r="1.3"/><circle cx="130" cy="95" r="1"/><circle cx="290" cy="100" r="1.1"/><circle cx="60" cy="260" r="1.2"/><circle cx="250" cy="290" r="1"/><circle cx="180" cy="300" r="1.4"/><circle cx="110" cy="285" r="1"/><circle cx="40" cy="170" r="1"/><circle cx="320" cy="250" r="1.2"/></g><circle cx="90" cy="262" r="60" fill="url(#sunhalo2)"/><circle cx="90" cy="262" r="32" fill="url(#sung)"/><g stroke="#ffd86a" stroke-width="1.6" stroke-linecap="round" opacity="0.6"><line x1="90" y1="218" x2="90" y2="208"/><line x1="90" y1="316" x2="90" y2="326"/><line x1="50" y1="262" x2="40" y2="262"/><line x1="130" y1="262" x2="140" y2="262"/><line x1="62" y1="232" x2="55" y2="225"/><line x1="118" y1="232" x2="125" y2="225"/><line x1="62" y1="292" x2="55" y2="299"/><line x1="118" y1="292" x2="125" y2="299"/></g><path d="M130,232 A140,140 0 0 1 220,140" fill="none" stroke="#9fb0d4" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.7"/><g clip-path="url(#cropCrescent2)"><circle cx="200" cy="200" r="55" fill="url(#venuslit)"/><circle cx="176" cy="195" r="55" fill="#0c1322"/><g fill="#c69b56" opacity="0.5"><ellipse cx="225" cy="185" rx="10" ry="4"/><ellipse cx="222" cy="215" rx="8" ry="3"/></g></g><circle cx="200" cy="200" r="55" fill="none" stroke="#2a3b42" stroke-width="1" opacity="0.25"/><text x="200" y="275" text-anchor="middle" font-size="12" fill="#cfd8ee">Venus</text><text x="90" y="310" text-anchor="middle" font-size="12" fill="#cfd8ee">Sun</text><rect x="380" y="70" width="320" height="220" rx="6" fill="url(#space)"/><g fill="#cfd8ee"><circle cx="420" cy="100" r="1.2"/><circle cx="660" cy="110" r="1.3"/><circle cx="680" cy="200" r="1"/><circle cx="410" cy="250" r="1.2"/><circle cx="640" cy="260" r="1"/><circle cx="690" cy="160" r="1.1"/></g><g clip-path="url(#cropGibbous2)"><circle cx="540" cy="180" r="92" fill="url(#venuslit)"/><ellipse cx="480" cy="180" rx="55" ry="92" fill="#0c1322"/><g stroke="#c69b56" stroke-width="1.6" fill="none" opacity="0.55"><path d="M510,140 Q560,148 615,140"/><path d="M505,175 Q565,185 620,178"/><path d="M510,215 Q560,225 615,215"/></g><g fill="#a87a37" opacity="0.3"><ellipse cx="565" cy="190" rx="20" ry="10"/><ellipse cx="600" cy="170" rx="11" ry="6"/></g></g><circle cx="540" cy="180" r="92" fill="none" stroke="#2a3b42" stroke-width="1" opacity="0.25"/></svg>' },
      caption: 'Venus orbiting the Sun, and how its lit face appears from Earth over the course of its orbit.',
    },
    tags: { unit: 'astrophysics', topics: ['moon phases', 'gravity', 'orbit', 'inner planets'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why Venus appears to change its lit shape (phases) when viewed from Earth over the course of its orbit.',
        marks: 2,
        ph: 'Venus orbits the Sun, so its position relative to Earth changes. As its position changes, different amounts of the sunlit surface of Venus are visible from Earth. Different fractions of the lit surface face Earth at different orbital positions.',
      },
      {
        label: 'b',
        text: '**State** the force that keeps Venus in orbit around the Sun.',
        marks: 1,
        ph: 'Gravitational force / gravity / gravitational attraction.',
      },
    ],
  },

  // ── Q5: Big Bang Evidence (2 marks, Criterion A) ──
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Evidence for the Big Bang',
    marks: 2,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Big Bang theory is the prevailing cosmological model for the origin and evolution of the universe. It states that the universe began approximately 13.8 billion years ago in an extremely hot and dense state and has been expanding ever since.',
    tags: { unit: 'astrophysics', topics: ['Big Bang', 'evidence', 'cosmology', 'redshift'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State two observations** that provide evidence supporting the Big Bang theory.',
        marks: 2,
        ph: 'Any two: redshift of distant galaxies shows the universe is expanding. Cosmic Microwave Background radiation (CMB) — uniform low-temperature radiation matching Big Bang predictions. Abundance of light elements (hydrogen and helium) consistent with nucleosynthesis after the Big Bang.',
      },
    ],
  },

  // ── Q6: Voltage vs LED Brightness Investigation (7 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Voltage vs LED Brightness Investigation',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student is planning to investigate how the voltage (potential difference) across a light-emitting diode (LED) affects the brightness of the LED.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 640" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="ledg" cx="0.4" cy="0.4" r="0.7"><stop offset="0" stop-color="#ffeaea"/><stop offset="0.6" stop-color="#ff9b9b"/><stop offset="1" stop-color="#c93b3b"/></radialGradient><radialGradient id="meterg" cx="0.5" cy="0.4" r="0.7"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eef2f4"/></radialGradient><marker id="arrow" markerWidth="10" markerHeight="10" refX="2" refY="5" orient="auto"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#2a3b42" stroke-width="1.4"/></marker><marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 Z" fill="#2a3b42"/></marker></defs><rect x="0" y="0" width="560" height="640" fill="#ffffff"/><symbol id="led" viewBox="-30 -30 60 60" overflow="visible"><polygon points="-14,-12 -14,12 6,0" fill="url(#ledg)" stroke="#2a3b42" stroke-width="2"/><line x1="6" y1="-12" x2="6" y2="12" stroke="#2a3b42" stroke-width="2.4"/><g stroke="#c93b3b" stroke-width="1.8" marker-end="url(#arrowhead)" fill="none"><line x1="-3" y1="-16" x2="10" y2="-26"/><line x1="3" y1="-16" x2="16" y2="-26"/></g></symbol><g><text x="60" y="44" font-size="26" font-weight="bold" fill="#27343a">Incorrect</text><g fill="none" stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M70,90 L235,90"/><path d="M335,90 L490,90"/><path d="M70,90 L70,250"/><path d="M490,90 L490,250"/><path d="M70,250 L210,250"/><path d="M350,250 L490,250"/><path d="M210,250 L210,300"/><path d="M350,250 L350,300"/><path d="M210,300 L260,300"/><path d="M300,300 L350,300"/><path d="M210,300 L210,375"/><path d="M350,300 L350,375"/><path d="M210,375 L253,375"/><path d="M307,375 L350,375"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round"><line x1="252" y1="74" x2="252" y2="106"/><line x1="266" y1="82" x2="266" y2="98"/><line x1="284" y1="74" x2="284" y2="106"/><line x1="298" y1="82" x2="298" y2="98"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" fill="#2a3b42"><circle cx="305" cy="90" r="3"/><line x1="305" y1="90" x2="335" y2="68" marker-end="url(#arrow)"/></g><use href="#led" x="250" y="270" width="60" height="60"/><text x="280" y="350" text-anchor="middle" font-size="14" font-weight="bold" fill="#27343a">LED</text><circle cx="280" cy="375" r="22" fill="url(#meterg)" stroke="#2a3b42" stroke-width="2.4"/><text x="280" y="383" text-anchor="middle" font-size="22" font-weight="bold" fill="#27343a">A</text></g><g transform="translate(0,300)"><text x="60" y="78" font-size="26" font-weight="bold" fill="#27343a">Correct</text><g fill="none" stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M120,130 L235,130"/><path d="M335,130 L470,130"/><path d="M470,130 L470,270"/><path d="M470,270 L300,270"/><path d="M260,270 L120,270"/><path d="M120,270 L120,222"/><path d="M120,178 L120,130"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round"><line x1="252" y1="114" x2="252" y2="146"/><line x1="266" y1="122" x2="266" y2="138"/><line x1="284" y1="114" x2="284" y2="146"/><line x1="298" y1="122" x2="298" y2="138"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" fill="#2a3b42"><circle cx="305" cy="130" r="3"/><line x1="305" y1="130" x2="335" y2="108" marker-end="url(#arrow)"/></g><circle cx="120" cy="200" r="22" fill="url(#meterg)" stroke="#2a3b42" stroke-width="2.4"/><text x="120" y="208" text-anchor="middle" font-size="22" font-weight="bold" fill="#27343a">A</text><use href="#led" x="250" y="240" width="60" height="60"/><text x="280" y="320" text-anchor="middle" font-size="14" font-weight="bold" fill="#27343a">LED</text></g></svg>' },
      caption: 'Two circuits for measuring the current through an LED \u2014 one correct (ammeter in series), one incorrect (ammeter in parallel).',
    },
    tags: { unit: 'electricity-circuits', topics: ['voltage', 'LED', 'experimental design', 'circuit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Two circuit diagrams are shown — one labelled "Correct" and one "Incorrect".\n\n**Explain** why the current through the LED could not be measured using the incorrect circuit.',
        marks: 2,
        ph: 'In the incorrect diagram, the ammeter is connected in parallel with the LED. The ammeter has near-zero resistance, so most current bypasses the LED. The ammeter therefore measures current through the short circuit, not through the LED.',
      },
      {
        label: 'b',
        text: '**State** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'Independent variable: voltage / potential difference (across the LED). Dependent variable: brightness of the LED / current through the LED.',
      },
      {
        label: 'c',
        text: 'The student collects data at 8 voltage values ranging from 0 to 5 V, but the values are not evenly spread. **Evaluate** the quality of this data collection approach.',
        marks: 3,
        ph: '8 measurements is sufficient. Covers 0–5 V range (appropriate for an LED). However, values are not evenly distributed — some regions are denser and others are sparse. This reduces confidence in identifying the true relationship between voltage and brightness.',
      },
    ],
  },

  // ── Q7: V-I Characteristic — Diode (13 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'V-I Characteristic of a Diode',
    marks: 13,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student investigates the V-I characteristic of a silicon diode by varying the forward voltage and measuring the current through the diode.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'V\u2013I characteristic of a silicon diode',
        xLabel: 'Forward voltage', xUnit: 'V',
        yLabel: 'Current', yUnit: 'mA',
        dataPoints: [{ x: 0, y: 0 }, { x: 0.2, y: 0 }, { x: 0.4, y: 0.4 }, { x: 0.5, y: 1.5 }, { x: 0.6, y: 4.5 }, { x: 0.65, y: 7 }, { x: 0.7, y: 10 }, { x: 0.75, y: 14 }],
        xMin: 0, xMax: 0.8, yMin: 0, yMax: 16, xStep: 0.1, yStep: 2,
      },
      caption: 'Current through the diode against forward voltage. Below the threshold (about 0.6 V) almost no current flows; above it the current rises steeply (at 0.7 V, I \u2248 10 mA, so R = 70 \u03a9).',
    },
    tags: { unit: 'electricity-circuits', topics: ['diode', 'V-I characteristic', 'threshold voltage', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student plots their data on a scatter graph. **Evaluate** the student\'s choice to plot the data this way, and describe what they should do to show the relationship between voltage and current.',
        marks: 3,
        ph: 'Scatter graph is appropriate for continuous data. A smooth curve of best fit (not a straight line) should be drawn. Data at the threshold region (around 0.6 V) should be denser, since that is where the most interesting change occurs.',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between potential difference (voltage) and current shown by the graph.',
        marks: 3,
        ph: 'Below approximately 0.6 V (threshold voltage), current is approximately zero. Above the threshold, current increases very rapidly with increasing voltage — the relationship is non-linear (exponential). The diode only conducts significantly above the threshold voltage.',
      },
      {
        label: 'c',
        text: 'Resistance (R) is defined as R = V/I. **Describe** how resistance changes in the diode across the range of the experiment. Choose two points on the graph to calculate values of resistance to support your answer.',
        marks: 4,
        ph: 'At low voltages (e.g. 0.4 V, I ≈ 0) → resistance is very high (effectively infinite). At higher voltages (e.g. 0.7 V, I ≈ 10 mA) → R = 0.7/0.01 = 70 Ω. Resistance decreases significantly as voltage increases above threshold. Diode is NOT ohmic.',
      },
      {
        label: 'd',
        text: 'The student\'s original hypothesis was: *"The current through the diode is directly proportional to the voltage across it."*\n\n**Evaluate** the hypothesis using the data recorded. Refer to whether the graph supports or rejects the hypothesis.',
        marks: 3,
        ph: 'For directly proportional: the graph must be a straight line through the origin. The diode graph is NOT a straight line — it is non-linear with a threshold. The graph REJECTS the hypothesis. The diode does not obey Ohm\'s law.',
      },
    ],
  },

  // ── Q8: Thermistor V-I Characteristic (10 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Thermistor Resistance and Temperature',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Resistance (R) is defined as R = V/I. A student investigates how a negative temperature coefficient (NTC) thermistor behaves when it is heated.',
    tags: { unit: 'electricity-circuits', topics: ['thermistor', 'resistance', 'temperature', 'NTC'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'From the graph, **state** the temperature at which the resistance of the NTC thermistor begins to decrease noticeably from its room-temperature value.',
        marks: 1,
        ph: 'Approximately 30°C (accept range 25–35°C depending on graph).',
      },
      {
        label: 'b',
        text: '**Explain** why the resistance of an NTC thermistor decreases as its temperature increases.',
        marks: 2,
        ph: 'As temperature increases, the thermistor releases more charge carriers (electrons). More charge carriers are available to carry current. For the same voltage, more current flows → resistance decreases (R = V/I).',
      },
      {
        label: 'c',
        text: '**Explain** why an NTC thermistor is useful in temperature-sensing circuits.',
        marks: 5,
        ph: 'Resistance of the thermistor decreases as temperature rises. This change in resistance changes the voltage across the thermistor in a potential divider circuit. The voltage change can be detected and used as an input to a control system. The output can trigger an alarm or switch a heater/cooler on or off. The thermistor therefore converts temperature into a measurable electrical signal.',
      },
      {
        label: 'd',
        text: '**Suggest** one way of extending this investigation, and **justify** your suggestion.',
        marks: 2,
        ph: 'Suggestion: compare a positive temperature coefficient (PTC) thermistor. Justification: resistance of a PTC increases with temperature — comparing the two types would reveal different applications (e.g. PTC used as a self-resetting fuse).',
      },
    ],
  },

  // ── Q9: Sonar Depth Investigation (10 marks, Criterion B) ──
  {
    id: 9,
    crit: 'B',
    type: 'extended',
    topic: 'Sonar Echo Return Time Investigation',
    marks: 10,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    stem: 'A student investigates how the depth of water in a tank affects the time for a sonar pulse to travel to the bottom of the tank and return.',
    tags: { unit: 'sound-waves', topics: ['sonar', 'echo', 'variables', 'hypothesis', 'investigation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct classification for each variable in this investigation.\n\nVariables: echo return time, frequency of sonar pulse, depth of water.',
        marks: 2,
        widget: 'variable_classify',
        widgetItems: ['Echo return time', 'Frequency of sonar pulse', 'Depth of water'],
        ph: 'Echo return time = dependent variable. Depth of water = independent variable. Frequency of sonar pulse = control variable.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the depth of water increases, the sonar echo return time increases. The sound wave must travel a greater total distance (down and back). Prediction: if depth doubles, return time doubles (directly proportional).',
      },
      {
        label: 'c',
        text: '**Explain** why the depth of water is the independent variable, and why the frequency of the sonar pulse is a control variable.',
        marks: 3,
        ph: 'Depth is the IV because it is what the student changes. Frequency is a CV because frequency could affect the behaviour of the sound pulse in water and must be kept constant to ensure a fair test.',
      },
      {
        label: 'd',
        text: '**Suggest** why sonar is more useful than light for measuring water depth in murky water.',
        marks: 2,
        ph: 'Light is absorbed and scattered by particles suspended in murky water and cannot penetrate to large depths. Sound (sonar) waves pass through murky water with much less absorption and can travel to the seabed and return without being blocked by particles.',
      },
    ],
  },

  // ── Q10: Nuclear Power Plant Evaluation (12 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Nuclear Power for Developing Countries',
    marks: 12,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Some developing countries are considering building nuclear power plants as part of their plan to increase electricity generation and reduce dependence on fossil fuels.',
    tags: { unit: 'atomic-physics', topics: ['nuclear power', 'evaluation', 'environment', 'economics'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** whether developing countries should invest in nuclear power plants. In your answer, consider:\n- **advantages** and **disadvantages** of nuclear power (with justification)\n- **safety and environmental considerations**\n- **economic factors**\n- a **concluding appraisal** linking all issues discussed',
        marks: 12,
        ph: 'Advantages: large reliable power output; no CO₂ emissions during operation; low fuel cost per kWh. Disadvantages: risk of accident/meltdown; radioactive waste management for thousands of years; risk of nuclear proliferation. Safety/environment: cooling water discharge affects local ecosystem; mining uranium causes environmental damage. Economic: high construction cost; long build time; high decommissioning cost; creates skilled jobs. Conclusion: nuclear power could reduce fossil fuel dependence in developing countries; significant challenges remain; cost-benefit analysis essential.',
      },
    ],
  },

  // ── Q11: Ionisation & X-ray Security Screening (9 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Ionising Radiation and X-ray Screening',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Ionising radiation can affect the human body. Airport security systems use X-rays to scan baggage and detect prohibited items without opening bags.',
    tags: { unit: 'atomic-physics', topics: ['ionisation', 'DNA damage', 'X-rays', 'security screening', 'electromagnetic spectrum'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** how an atom can become ionised.',
        marks: 3,
        ph: 'An atom absorbs energy from radiation. An electron gains enough energy to overcome the electrostatic attraction of the nucleus. The electron escapes from the atom, leaving behind a positive ion.',
      },
      {
        label: 'b',
        text: '**Explain** how ionising radiation can damage the DNA of airport security workers exposed to scattered X-rays. Use a linked chain of reasoning.',
        marks: 2,
        ph: 'Ionising radiation ionises atoms in DNA molecules. This breaks chemical bonds in the DNA strand. Broken DNA can lead to mutations in cells, which may cause cancer.',
      },
      {
        label: 'c',
        text: '**Order** these three types of electromagnetic radiation from lowest to highest penetrating power: gamma rays, ultraviolet radiation, X-rays.',
        marks: 1,
        ph: 'Ultraviolet → X-ray → gamma ray (increasing penetrating power)',
      },
      {
        label: 'd',
        text: 'The table shows how different radiation types penetrate through a steel security door.\n\n**Explain** why X-rays rather than ultraviolet radiation or gamma rays are chosen for baggage screening at airports.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 260" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hdr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a6b80"/><stop offset="1" stop-color="#2b5566"/></linearGradient></defs><rect x="0" y="0" width="760" height="260" fill="#ffffff"/><g stroke="#5b7884" stroke-width="1.4"><rect x="30" y="40" width="260" height="55" fill="#ffffff"/><rect x="290" y="40" width="160" height="55" fill="url(#hdr2)"/><rect x="450" y="40" width="150" height="55" fill="url(#hdr2)"/><rect x="600" y="40" width="140" height="55" fill="url(#hdr2)"/><rect x="30" y="95" width="260" height="55" fill="#eef4f6"/><rect x="290" y="95" width="160" height="55" fill="#ffffff"/><rect x="450" y="95" width="150" height="55" fill="#ffffff"/><rect x="600" y="95" width="140" height="55" fill="#ffffff"/><rect x="30" y="150" width="260" height="55" fill="#f6fafb"/><rect x="290" y="150" width="160" height="55" fill="#ffffff"/><rect x="450" y="150" width="150" height="55" fill="#ffffff"/><rect x="600" y="150" width="140" height="55" fill="#ffffff"/><rect x="30" y="205" width="260" height="55" fill="#eef4f6"/><rect x="290" y="205" width="160" height="55" fill="#ffffff"/><rect x="450" y="205" width="150" height="55" fill="#ffffff"/><rect x="600" y="205" width="140" height="55" fill="#ffffff"/></g><text x="370" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">ultraviolet</text><text x="525" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">X-rays</text><text x="670" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">gamma rays</text><text x="160" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by metal</text><text x="160" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by plastic</text><text x="160" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by clothing</text><text x="370" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="370" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="370" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="525" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="525" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">medium</text><text x="525" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="670" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="670" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="670" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">low</text></svg>' },
          caption: 'How ultraviolet, X-rays and gamma rays are absorbed by metal, plastic and clothing.',
        },
        ph: 'UV cannot penetrate metal (absorbed too quickly) → cannot pass through baggage. Gamma rays are too penetrating — they pass straight through everything without being absorbed/scattered enough to form a clear image, and pose a greater radiation hazard. X-rays have intermediate penetration — absorbed more by dense objects (metal weapons) than by soft materials — producing a clear differential image of baggage contents.',
      },
    ],
  },

  // ── Q12: X-ray Authentication of Painting (3 marks, Criterion D) ──
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'X-ray Authentication in Art',
    marks: 3,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'X-ray imaging is used by art experts to examine paintings non-destructively. By passing X-rays through a painting and detecting the pattern on the other side, conservators can investigate what lies beneath the visible surface.',
    tags: { unit: 'atomic-physics', topics: ['X-rays', 'art authentication', 'interpretation', 'non-destructive testing'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** what can be seen in the X-ray image of the Rembrandt painting, and **explain** what scientific information the image reveals about the history of the artwork.',
        marks: 3,
        ph: 'First point must refer to image. X-ray reveals an earlier composition (underdrawing or different scene) beneath the visible paint layer. Denser paints (containing lead-white) absorb more X-rays and appear lighter. Revisions made by the artist (pentimenti) are visible. This confirms the painting\'s history of reworking and can help authenticate it.',
      },
    ],
  },

  // ── Q13: Infrared Thermography of Buildings (4 marks, Criterion D) ──
  {
    id: 13,
    crit: 'D',
    type: 'extended',
    topic: 'Infrared Thermography for Energy Efficiency',
    marks: 4,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'Infrared thermography is a technique that uses a special camera to detect infrared radiation emitted by warm objects. It is used to survey buildings and identify areas of high heat loss.',
    tags: { unit: 'em-spectrum', topics: ['infrared', 'thermography', 'heat loss', 'energy efficiency', 'scientific applications'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'A thermographic image of a house is shown. **Explain** what the thermographic image reveals about heat loss in the building, with reference to the colours visible in the image.',
        marks: 2,
        ph: 'Areas that appear white/yellow are warmest (e.g. windows, roof edges) — indicating greatest heat loss. Areas that appear blue/purple are coldest — indicating good insulation. The image reveals that windows and the roof are the main sources of heat loss.',
      },
      {
        label: 'b',
        text: '**State two advantages** of using infrared thermography rather than physical inspection to assess heat loss in a building.',
        marks: 2,
        ph: 'Any two: surveys the whole building quickly without removing cladding. Non-destructive (building is not damaged). Provides quantitative temperature data. Can survey areas that are inaccessible by physical inspection. Results are immediately visible as a colour map.',
      },
    ],
  },
]
