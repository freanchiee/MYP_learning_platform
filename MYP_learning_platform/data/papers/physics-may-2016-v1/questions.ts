import type { Question } from '@/lib/types'


export const paperMeta = {
  id: 'physics-may-2016-v1',
  subject: 'Physics',
  session: 'May',
  year: 2016,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Mass vs Weight — Jupiter Moons context (5 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Mass, Weight & the Solar System',
    marks: 5,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'A space probe is sent to explore Jupiter\'s moons. The following table contains information that can be used to describe mass or weight.',
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
        text: 'The probe travels past several moons of Jupiter. **Name** the three moons listed below in order of their distance from Jupiter, starting with the closest.\n\nMoons: Callisto, Io, Ganymede',
        marks: 2,
        ph: 'Io → Ganymede → Callisto (order by distance from Jupiter).',
      },
      {
        label: 'c',
        text: 'The probe detects that Io is hotter than Callisto. **Suggest one reason** related to Jupiter\'s gravity why Io experiences more internal heating than Callisto.',
        marks: 1,
        ph: 'Io is closer to Jupiter so the gravitational tidal forces are stronger, generating more internal heat through tidal flexing.',
      },
    ],
  },

  // ── Q2: Probe — Gravity on Moons of Jupiter (11 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Gravitational Field Strength on Jupiter\'s Moons',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'While passing close by each moon, the probe drops a test object from a height of 50.0 m. The shape of the object ensures that any frictional forces are negligible over a fall of this distance. All of the test object\'s gravitational potential energy (E_p) transforms to kinetic energy before hitting the surface.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 440" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0d18"/><stop offset="1" stop-color="#15101a"/></linearGradient><radialGradient id="planet" cx="0.5" cy="1.4" r="1.1"><stop offset="0" stop-color="#d4a877"/><stop offset="0.5" stop-color="#b88656"/><stop offset="1" stop-color="#7a5536"/></radialGradient><linearGradient id="probebody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfd6dc"/><stop offset="1" stop-color="#8a929a"/></linearGradient><linearGradient id="readout" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbfbf6"/><stop offset="1" stop-color="#eceae0"/></linearGradient></defs><rect x="20" y="20" width="720" height="400" rx="6" fill="url(#sky)"/><g fill="#dde6f5"><circle cx="90" cy="70" r="1.4"/><circle cx="180" cy="55" r="1"/><circle cx="260" cy="90" r="1.6"/><circle cx="350" cy="60" r="1.1"/><circle cx="470" cy="80" r="1.4"/><circle cx="560" cy="55" r="1"/><circle cx="650" cy="95" r="1.5"/><circle cx="710" cy="140" r="1.2"/><circle cx="120" cy="150" r="1.1"/><circle cx="300" cy="170" r="1.3"/><circle cx="420" cy="150" r="1"/><circle cx="600" cy="170" r="1.4"/><circle cx="700" cy="220" r="1.1"/><circle cx="80" cy="240" r="1.3"/><circle cx="220" cy="250" r="1"/><circle cx="510" cy="240" r="1.2"/><circle cx="660" cy="280" r="1.4"/><circle cx="150" cy="320" r="1"/><circle cx="380" cy="300" r="1.2"/><circle cx="600" cy="330" r="1.1"/></g><g><circle cx="555" cy="125" r="42" fill="#caa379" opacity="0.95"/><g stroke="#9a7148" stroke-width="3" fill="none" opacity="0.7"><path d="M517,115 q38,-8 76,0"/><path d="M514,128 q42,-6 84,0"/><path d="M518,142 q38,-6 74,0"/><path d="M524,155 q30,-5 62,0"/></g><ellipse cx="540" cy="120" rx="6" ry="3.5" fill="#7e5331" opacity="0.85"/></g><clipPath id="frameClip"><rect x="20" y="20" width="720" height="400" rx="6"/></clipPath><g clip-path="url(#frameClip)"><path d="M20,440 L20,360 Q380,250 740,360 L740,440 Z" fill="url(#planet)"/><path d="M20,360 Q380,250 740,360" fill="none" stroke="#e6c184" stroke-width="2" opacity="0.55"/><g fill="#5e3920" opacity="0.65"><ellipse cx="170" cy="380" rx="14" ry="5"/><ellipse cx="430" cy="345" rx="18" ry="6"/><ellipse cx="620" cy="385" rx="12" ry="4"/></g></g><text x="330" y="225" text-anchor="middle" font-size="16" font-weight="bold" fill="#7ee08a">Metres</text><g stroke="#7ee08a" stroke-width="2.4" stroke-linecap="round"><line x1="300" y1="245" x2="320" y2="245"/><line x1="300" y1="276" x2="320" y2="276"/><line x1="300" y1="307" x2="320" y2="307"/><line x1="300" y1="338" x2="320" y2="338"/><line x1="300" y1="369" x2="320" y2="369"/><line x1="300" y1="400" x2="320" y2="400"/></g><g fill="#7ee08a" font-size="15"><text x="328" y="250">50</text><text x="328" y="281">40</text><text x="328" y="312">30</text><text x="328" y="343">20</text><text x="328" y="374">10</text><text x="328" y="405">0</text></g><g transform="translate(255,392)"><rect x="-34" y="-6" width="20" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6" stroke-width="1"/><rect x="14" y="-6" width="20" height="14" rx="2" fill="#2b4a7a" stroke="#9fb6d6" stroke-width="1"/><line x1="-14" y1="1" x2="-7" y2="1" stroke="#9fb6d6" stroke-width="1.6"/><line x1="7" y1="1" x2="14" y2="1" stroke="#9fb6d6" stroke-width="1.6"/><rect x="-9" y="-9" width="18" height="18" rx="3" fill="url(#probebody)" stroke="#5c656d" stroke-width="1.2"/><ellipse cx="0" cy="-13" rx="7" ry="3.5" fill="#e6ebef" stroke="#5c656d" stroke-width="1"/><line x1="0" y1="-9" x2="0" y2="-13" stroke="#5c656d" stroke-width="1.4"/><line x1="-6" y1="9" x2="-10" y2="14" stroke="#5c656d" stroke-width="1.6"/><line x1="6" y1="9" x2="10" y2="14" stroke="#5c656d" stroke-width="1.6"/></g><g><rect x="40" y="42" width="160" height="62" rx="5" fill="url(#readout)" stroke="#9aa0a6" stroke-width="1.2"/><text x="54" y="66" font-size="16" fill="#27343a">time / s</text><text x="64" y="90" font-size="16" font-weight="bold" fill="#27343a">Io: 7.4 s</text></g><g font-size="15" font-weight="bold" text-anchor="middle"><rect x="620" y="200" width="100" height="30" rx="4" fill="#caa23a"/><text x="670" y="220" fill="#2a2410">Io</text><rect x="620" y="238" width="100" height="30" rx="4" fill="#7fa4c6"/><text x="670" y="258" fill="#102234">Europa</text><rect x="620" y="276" width="100" height="30" rx="4" fill="#8a7355"/><text x="670" y="296" fill="#f6efe2">Ganymede</text><rect x="620" y="314" width="100" height="30" rx="4" fill="#5b5550"/><text x="670" y="334" fill="#f0ece4">Callisto</text></g></svg>' },
      caption: 'A probe drops a test object 50.0 m to the surface of each of Jupiter\u2019s moons; the panel shows the fall time on Io.',
    },
    tags: { unit: 'forces-interactions', topics: ['gravitational field strength', 'density', 'gravitational potential energy', 'kinetic energy', 'velocity'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The table shows the time it takes the test object to fall 50.0 m on different moons. Using the equation *s = ½at²*, **calculate** the gravitational field strength on Io and on Callisto.\n\n| Moon | Time (s) |\n|------|----------|\n| Io | 7.4 |\n| Callisto | 11.1 |',
        marks: 3,
        ph: 'g = 2s/t². Io: g = 2×50/(7.4)² = 100/54.76 = 1.83 ms⁻². Callisto: g = 2×50/(11.1)² = 100/123.21 = 0.81 ms⁻².',
      },
      {
        label: 'b',
        text: 'The gravitational field strength (g) is related to both the density and the radius of a moon. The gravitational field strength on Io is greater than on Callisto, even though Io has a smaller radius.\n\n**Explain** what this tells us about the relationship between density and g, and between radius and g.',
        marks: 2,
        ph: 'Io must have higher density than Callisto. As density increases, g increases. A larger radius alone does not guarantee higher g — Callisto has larger radius but lower density, giving lower g.',
      },
      {
        label: 'c',
        text: 'The probe then releases a test object of mass **600 g** from a height of **50.0 m** above the surface of Europa (g on Europa = 1.3 ms⁻²). **Calculate** the gravitational potential energy of the test object before it is released.',
        marks: 3,
        ph: 'Ep = mgh = 0.6 × 1.3 × 50.0 = 39 J.',
      },
      {
        label: 'd',
        text: 'The test object travels faster before hitting the surface of Io than it does before hitting the surface of Europa. **Explain** this observation.',
        marks: 3,
        ph: 'g on Io is greater than on Europa. Ep = mgh is therefore greater on Io (same m and h). All Ep converts to KE, so KE is greater on Io. Since KE = ½mv² and mass is the same, velocity must be greater on Io.',
      },
    ],
  },

  // ── Q3: Sphere in Oil Investigation (11 marks, Criterion B) ──
  {
    id: 3,
    crit: 'B',
    type: 'extended',
    topic: 'Terminal Velocity — Sphere Diameter in Oil',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student is going to investigate how the **diameter of a sphere** affects the **terminal velocity** of the sphere falling through oil.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Sphere diameter (mm)', 'Repeat 1 — fall time (s)', 'Repeat 2 — fall time (s)', 'Repeat 3 — fall time (s)', 'Mean terminal velocity (cm s⁻¹)'],
        rows: [
          ['5.0', '0.62', '0.60', '0.61', '49.2'],
          ['10.0', '0.85', '0.83', '0.84', '35.7'],
          ['15.0', '1.04', '1.06', '1.05', '28.6'],
          ['20.0', '1.27', '1.25', '1.26', '23.8'],
          ['25.0', '1.49', '1.51', '1.50', '20.0'],
        ],
      },
      caption: 'Planned results table: spheres of the same material but different diameters dropped through a 30 cm column of oil. Each diameter is timed three times and a mean terminal velocity calculated.',
    },
    tags: { unit: 'forces-interactions', topics: ['terminal velocity', 'drag', 'experimental design', 'variables'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equipment the student would need and give a reason why each piece of equipment is needed.',
        marks: 2,
        ph: 'Stopwatch/timer: to measure the time for the sphere to fall. Metre rule: to measure the distance fallen. Set of spheres of different diameters (same material). Graduated cylinder/tube of oil.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the diameter of the sphere increases, the terminal velocity decreases. Because a larger sphere has greater cross-sectional area → more drag force. Increased drag lowers terminal velocity (at terminal v, drag = weight). Quantitative: doubling the diameter reduces terminal velocity.',
      },
      {
        label: 'c',
        text: '**State** one variable that must be controlled and **describe** how this variable should be controlled in this experiment.',
        marks: 3,
        ph: 'Control variable: density/material of the sphere. How to control: use spheres made of the same material (same density) each time. Reason: the density affects the weight of the sphere, which affects the terminal velocity.',
      },
      {
        label: 'd',
        text: '**Describe** the data to collect. Include the number of different values of diameter and the number of repeats.',
        marks: 3,
        ph: 'At least five different sphere diameters. Values evenly spread across a range. At least 3 repetitions for each diameter to allow a mean to be calculated and improve reliability.',
      },
    ],
  },

  // ── Q4: Phases of Europa (3 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Phases of Jupiter\'s Moons',
    marks: 3,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Jupiter\'s moon Europa orbits Jupiter in approximately 3.5 days. Observers using powerful telescopes can watch Europa\'s lit face change over the course of its orbit.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="space" cx="0.5" cy="0.4" r="0.9"><stop offset="0" stop-color="#10182b"/><stop offset="1" stop-color="#05070f"/></radialGradient><radialGradient id="europalit" cx="0.32" cy="0.34" r="0.85"><stop offset="0" stop-color="#f7eed8"/><stop offset="0.55" stop-color="#dcd1b5"/><stop offset="1" stop-color="#a89c80"/></radialGradient><radialGradient id="jupiterg" cx="0.35" cy="0.32" r="0.9"><stop offset="0" stop-color="#e6c9a3"/><stop offset="0.55" stop-color="#caa379"/><stop offset="1" stop-color="#7a5736"/></radialGradient><clipPath id="cropCrescent1"><circle cx="170" cy="195" r="55"/></clipPath><clipPath id="cropGibbous1"><circle cx="540" cy="180" r="92"/></clipPath></defs><rect x="0" y="0" width="720" height="360" fill="#ffffff"/><text x="40" y="34" font-size="15" fill="#2a3b42">Animation 1: Europa orbiting Jupiter.</text><text x="400" y="34" font-size="15" fill="#2a3b42">Animation 2: how Europa looks from Earth</text><text x="400" y="52" font-size="15" fill="#2a3b42">over a complete orbit (about 3.5 days).</text><rect x="20" y="70" width="320" height="250" rx="6" fill="url(#space)"/><g fill="#cfd8ee"><circle cx="70" cy="110" r="1.3"/><circle cx="130" cy="95" r="1"/><circle cx="210" cy="120" r="1.5"/><circle cx="290" cy="100" r="1.1"/><circle cx="300" cy="180" r="1.3"/><circle cx="60" cy="260" r="1.2"/><circle cx="250" cy="290" r="1"/><circle cx="180" cy="300" r="1.4"/><circle cx="110" cy="285" r="1"/><circle cx="40" cy="170" r="1"/><circle cx="320" cy="250" r="1.2"/></g><circle cx="85" cy="262" r="34" fill="url(#jupiterg)"/><g stroke="#8a6038" stroke-width="2.2" fill="none" opacity="0.75"><path d="M55,252 q30,-7 60,0"/><path d="M52,265 q33,-6 66,0"/><path d="M56,278 q30,-5 58,0"/></g><ellipse cx="75" cy="260" rx="5" ry="3" fill="#6b3f23" opacity="0.85"/><path d="M120,232 A140,140 0 0 1 220,140" fill="none" stroke="#9fb0d4" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.7"/><g clip-path="url(#cropCrescent1)"><circle cx="170" cy="195" r="55" fill="url(#europalit)"/><circle cx="146" cy="190" r="55" fill="#0c1322"/><g stroke="#9a8d70" stroke-width="0.8" fill="none" opacity="0.55"><path d="M190,170 q12,8 18,18"/><path d="M188,200 q14,3 22,12"/><path d="M195,215 q8,5 14,10"/></g></g><circle cx="170" cy="195" r="55" fill="none" stroke="#2a3b42" stroke-width="1" opacity="0.25"/><text x="170" y="270" text-anchor="middle" font-size="12" fill="#cfd8ee">Europa</text><text x="85" y="310" text-anchor="middle" font-size="12" fill="#cfd8ee">Jupiter</text><rect x="380" y="70" width="320" height="220" rx="6" fill="url(#space)"/><g fill="#cfd8ee"><circle cx="420" cy="100" r="1.2"/><circle cx="660" cy="110" r="1.3"/><circle cx="680" cy="200" r="1"/><circle cx="410" cy="250" r="1.2"/><circle cx="640" cy="260" r="1"/><circle cx="690" cy="160" r="1.1"/></g><g clip-path="url(#cropGibbous1)"><circle cx="540" cy="180" r="92" fill="url(#europalit)"/><ellipse cx="470" cy="180" rx="58" ry="92" fill="#0c1322"/><g stroke="#8a7c5b" stroke-width="1.4" fill="none" opacity="0.6"><path d="M510,130 Q560,160 610,150"/><path d="M500,180 Q560,200 615,180"/><path d="M515,220 Q560,235 600,225"/><path d="M530,150 Q555,200 540,250"/></g><g fill="#b3a684" opacity="0.4"><ellipse cx="555" cy="185" rx="18" ry="12"/><ellipse cx="595" cy="185" rx="9" ry="7"/></g></g><circle cx="540" cy="180" r="92" fill="none" stroke="#2a3b42" stroke-width="1" opacity="0.25"/></svg>' },
      caption: 'Europa orbiting Jupiter, and how its lit face appears from Earth over one orbit.',
    },
    tags: { unit: 'astrophysics', topics: ['moon phases', 'gravity', 'orbit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why Europa appears to change its lit shape (phases) when viewed from Earth over the course of its orbit.',
        marks: 2,
        ph: 'Europa orbits Jupiter, so its position changes. As its position changes, different amounts of the sunlit surface of Europa are visible from Earth. Different fractions of the lit surface face Earth at different orbital positions.',
      },
      {
        label: 'b',
        text: '**State** the force that keeps Europa in orbit around Jupiter.',
        marks: 1,
        ph: 'Gravitational force / pull / attraction. (Accept: gravity)',
      },
    ],
  },

  // ── Q5: Heliocentric Model Evidence (2 marks, Criterion A) ──
  {
    id: 5,
    crit: 'A',
    type: 'extended',
    topic: 'Heliocentric vs Geocentric Model',
    marks: 2,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'For many centuries, astronomers believed in the geocentric model — that the Earth was at the centre of the universe and that the Sun and planets orbited the Earth. This was later replaced by the heliocentric model, in which the Sun is at the centre of the solar system.',
    artefact: {
      component: 'OrbitSim',
      data: {
        title: 'The heliocentric model — planets orbit the Sun',
        mode: 'orbit',
        central: 'Sun',
        showForce: true,
        bodies: [
          { name: 'Sun', role: 'center', fixed: true, color: '#f6c343' },
          { name: 'Venus', role: 'orbiter', orbitalPeriod: 225, orbitRadius: 46, radius: 5, color: '#d9a066' },
          { name: 'Earth', role: 'orbiter', orbitalPeriod: 365, orbitRadius: 78, radius: 6, color: '#60a5fa' },
          { name: 'Mars', role: 'orbiter', orbitalPeriod: 687, orbitRadius: 112, radius: 5, color: '#e06848' },
        ],
        caption: 'In the Sun-centred (heliocentric) model the planets move on orbits of different periods around the Sun. The force arrow on each planet always points to the Sun.',
      },
      caption: 'The heliocentric model: Venus, Earth and Mars orbit the Sun with periods that increase with orbital radius.',
    },
    tags: { unit: 'astrophysics', topics: ['heliocentric model', 'evidence', 'solar system'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State two pieces of evidence** that support the heliocentric model rather than the geocentric model.',
        marks: 2,
        ph: 'Any two: the phases of Venus can only be fully explained if Venus orbits the Sun. Parallax shift of nearby stars shows Earth moves around the Sun. Retrograde motion of outer planets is better explained by a Sun-centred model. Gravitational calculations based on heliocentrism correctly predict planetary positions.',
      },
    ],
  },

  // ── Q6: Voltage–Resistance Wire Investigation (7 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'V-I Investigation — Resistance Wire',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student is planning to investigate how the voltage (potential difference) across a nichrome resistance wire affects the current through it.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 640" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wireg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f1e7"/><stop offset="1" stop-color="#ddd6c0"/></linearGradient><radialGradient id="meterg" cx="0.5" cy="0.4" r="0.7"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#eef2f4"/></radialGradient><marker id="arrow" markerWidth="10" markerHeight="10" refX="2" refY="5" orient="auto"><path d="M0,1 L9,5 L0,9" fill="none" stroke="#2a3b42" stroke-width="1.4"/></marker></defs><rect x="0" y="0" width="560" height="640" fill="#ffffff"/><g><text x="60" y="44" font-size="26" font-weight="bold" fill="#27343a">Incorrect</text><g fill="none" stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M70,90 L235,90"/><path d="M335,90 L490,90"/><path d="M70,90 L70,250"/><path d="M490,90 L490,250"/><path d="M70,250 L210,250"/><path d="M350,250 L490,250"/><path d="M210,250 L210,300"/><path d="M350,250 L350,300"/><path d="M210,300 L240,300"/><path d="M320,300 L350,300"/><path d="M210,300 L210,375"/><path d="M350,300 L350,375"/><path d="M210,375 L253,375"/><path d="M307,375 L350,375"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round"><line x1="252" y1="74" x2="252" y2="106"/><line x1="266" y1="82" x2="266" y2="98"/><line x1="284" y1="74" x2="284" y2="106"/><line x1="298" y1="82" x2="298" y2="98"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" fill="#2a3b42"><circle cx="305" cy="90" r="3"/><line x1="305" y1="90" x2="335" y2="68" marker-end="url(#arrow)"/></g><rect x="240" y="288" width="80" height="24" fill="url(#wireg)" stroke="#2a3b42" stroke-width="2.4"/><text x="280" y="280" text-anchor="middle" font-size="13" fill="#27343a">resistance wire</text><circle cx="280" cy="375" r="22" fill="url(#meterg)" stroke="#2a3b42" stroke-width="2.4"/><text x="280" y="383" text-anchor="middle" font-size="22" font-weight="bold" fill="#27343a">A</text></g><g transform="translate(0,300)"><text x="60" y="78" font-size="26" font-weight="bold" fill="#27343a">Correct</text><g fill="none" stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M120,130 L235,130"/><path d="M335,130 L470,130"/><path d="M470,130 L470,270"/><path d="M470,270 L320,270"/><path d="M240,270 L120,270"/><path d="M120,270 L120,222"/><path d="M120,178 L120,130"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round"><line x1="252" y1="114" x2="252" y2="146"/><line x1="266" y1="122" x2="266" y2="138"/><line x1="284" y1="114" x2="284" y2="146"/><line x1="298" y1="122" x2="298" y2="138"/></g><g stroke="#2a3b42" stroke-width="2.6" stroke-linecap="round" fill="#2a3b42"><circle cx="305" cy="130" r="3"/><line x1="305" y1="130" x2="335" y2="108" marker-end="url(#arrow)"/></g><circle cx="120" cy="200" r="22" fill="url(#meterg)" stroke="#2a3b42" stroke-width="2.4"/><text x="120" y="208" text-anchor="middle" font-size="22" font-weight="bold" fill="#27343a">A</text><rect x="240" y="258" width="80" height="24" fill="url(#wireg)" stroke="#2a3b42" stroke-width="2.4"/><text x="280" y="251" text-anchor="middle" font-size="13" fill="#27343a">resistance wire</text></g></svg>' },
      caption: 'Two circuits for measuring the current through a nichrome resistance wire \u2014 one correct (ammeter in series), one incorrect (ammeter in parallel).',
    },
    tags: { unit: 'electricity-circuits', topics: ['voltage', 'current', 'experimental design', 'ammeter', 'circuit'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Two circuit diagrams are shown — one labelled "Correct" and one "Incorrect".\n\n**Explain** why the current through the wire could not be measured using the incorrect circuit.',
        marks: 2,
        ph: 'In the incorrect diagram, the ammeter is in parallel with the wire (not in series). The ammeter has negligible resistance, so most current flows through the ammeter, not through the wire. The ammeter is therefore not measuring the current through the wire.',
      },
      {
        label: 'b',
        text: '**State** the independent and dependent variables in this investigation.',
        marks: 2,
        ph: 'Independent variable: voltage / potential difference (across the wire). Dependent variable: current (through the wire).',
      },
      {
        label: 'c',
        text: 'The student collects data at 8 voltage values ranging from 0 to 10 V, but the values are not evenly spread. **Evaluate** the quality of this data collection approach.',
        marks: 3,
        ph: '8 measurements is sufficient for analysis. Covers 0–10 V range (appropriate). However, values are not evenly distributed — clustered in some parts with gaps elsewhere. This reduces the reliability of identifying the relationship between voltage and current.',
      },
    ],
  },

  // ── Q7: V-I Characteristic — Nichrome Wire (13 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'V-I Characteristic of a Nichrome Resistance Wire',
    marks: 13,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'A student investigates the V-I characteristic of a nichrome resistance wire by varying the voltage and measuring the current.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'V\u2013I characteristic of a nichrome resistance wire',
        xLabel: 'Voltage', xUnit: 'V',
        yLabel: 'Current', yUnit: 'A',
        dataPoints: [{ x: 0, y: 0 }, { x: 2, y: 0.40 }, { x: 4, y: 0.80 }, { x: 6, y: 1.20 }, { x: 8, y: 1.60 }, { x: 10, y: 2.00 }],
        xMin: 0, xMax: 12, yMin: 0, yMax: 2, xStep: 2, yStep: 0.4,
      },
      caption: 'Current through the nichrome wire against voltage. The line is straight through the origin (R = 5.0 \u03a9). Resistance remains approximately constant across the range, showing the nichrome wire is Ohmic.',
    },
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'V-I characteristic', 'proportionality', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student plots their data on a scatter graph. **Evaluate** the student\'s choice to plot the data this way, and describe what they should do to show the relationship between voltage and current.',
        marks: 3,
        ph: 'The scatter graph is appropriate for continuous data. A line of best fit should be drawn through the points. At least 5 evenly distributed voltage values should be used to show the relationship reliably.',
      },
      {
        label: 'b',
        text: '**Describe** the relationship between potential difference (voltage) and current shown by the graph.',
        marks: 3,
        ph: 'Current increases as voltage increases. The relationship is linear (straight line through the origin) across the full range — current is directly proportional to voltage. This is consistent with Ohm\'s law for a metallic conductor at constant temperature.',
      },
      {
        label: 'c',
        text: 'Resistance (R) is defined as R = V/I. **Describe** how resistance changes in the nichrome wire across the range of the experiment. Choose two points on the graph to calculate values of resistance to support your answer.',
        marks: 4,
        ph: 'Calculate R = V/I at a low voltage point → R value. Calculate R = V/I at a higher voltage point → approximately same R value. Resistance stays approximately constant (Ohmic). Award 1 mark each for two correct calculations + two linked observations.',
      },
      {
        label: 'd',
        text: 'The student\'s original hypothesis was: *"The current through the wire is directly proportional to the voltage across it."*\n\n**Evaluate** the hypothesis using the data recorded. Refer to whether the graph supports or rejects the hypothesis.',
        marks: 3,
        ph: 'For directly proportional: graph must be a straight line through the origin. The graph IS a straight line through the origin → relationship is directly proportional → hypothesis IS supported by the data.',
      },
    ],
  },

  // ── Q8: Nichrome Wire — Temperature and Resistance (10 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Wire Resistance and Temperature',
    marks: 10,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    stem: 'Resistance (R) is defined as R = V/I. The V-I characteristic of a nichrome wire is being investigated across a range of temperatures.',
    artefact: {
      component: 'GraphSim',
      data: {
        title: 'Resistance of the nichrome wire as voltage (and temperature) rises',
        mode: 'readoff',
        xAxis: { label: 'Voltage / V', min: 0, max: 12, tick: 2 },
        yAxis: { label: 'Resistance  R = V/I  / Ω', min: 0, max: 9, tick: 1 },
        points: [
          [0, 5.0], [2, 5.0], [4, 5.0], [6, 5.1], [8, 5.3], [10, 6.4], [11, 7.4], [12, 8.5],
        ],
        dataMaxX: 12,
        readouts: [
          { x: 8, note: 'resistance starts to rise noticeably above its room-temperature value (~5.0 Ω)' },
        ],
        task: 'Drag the cursor along the curve: resistance is flat (~5.0 Ω, Ohmic) up to about 8 V, then climbs steeply as the wire heats and glows.',
      },
      caption: 'Resistance R = V/I against voltage for the nichrome wire. Flat at ~5.0 Ω up to ~8 V, then rising sharply as the wire heats — the wire stops being Ohmic at high temperature.',
    },
    tags: { unit: 'electricity-circuits', topics: ['resistance', 'temperature', 'Ohm\'s law', 'EM spectrum'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'From the graph, **state** the voltage at which the resistance of the nichrome wire begins to increase noticeably above its room-temperature value.',
        marks: 1,
        ph: 'Approximately 8.0 V (accept range 7.5–8.5 V).',
      },
      {
        label: 'b',
        text: '**Explain** why the nichrome wire begins to glow red-hot above a certain voltage.',
        marks: 2,
        ph: 'At high voltages the temperature of the wire increases greatly. Above a threshold temperature, the thermal energy emitted by the wire includes visible red wavelengths of the electromagnetic spectrum. Below this temperature only infrared radiation is emitted.',
      },
      {
        label: 'c',
        text: '**Explain** why the current through the nichrome wire does not increase as much at higher voltages (higher temperatures) as it does at lower voltages.',
        marks: 5,
        ph: 'Current increases with voltage. At higher voltages the temperature of the wire increases. Higher temperature → atoms vibrate faster / have greater kinetic energy. Electrons collide more frequently with the vibrating atoms. These collisions slow electrons, increasing resistance. Therefore current does not increase as much per unit voltage increase at high temperatures.',
      },
      {
        label: 'd',
        text: '**Suggest** one way of extending this investigation, and **justify** your suggestion.',
        marks: 2,
        ph: 'Any reasonable suggestion e.g.: test a different wire material (e.g. copper or tungsten). Justification: to compare whether resistance also increases with temperature for different metals, or to find a material with more stable resistance.',
      },
    ],
  },

  // ── Q9: Radar Signal Distance Investigation (10 marks, Criterion B) ──
  {
    id: 9,
    crit: 'B',
    type: 'extended',
    topic: 'Radar Signal Transmission Time',
    marks: 10,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'A student investigates how the distance to a reflecting object affects the time for a radar signal to travel to the object and back.',
    artefact: {
      component: 'LineGraph',
      data: {
        title: 'Radar return time vs distance to the object',
        xLabel: 'Distance to object', xUnit: 'km',
        yLabel: 'Signal return time', yUnit: 'µs',
        dataPoints: [
          { x: 0, y: 0 }, { x: 30, y: 200 }, { x: 60, y: 400 }, { x: 90, y: 600 }, { x: 120, y: 800 }, { x: 150, y: 1000 },
        ],
        xMin: 0, xMax: 150, yMin: 0, yMax: 1000, xStep: 30, yStep: 200,
      },
      caption: 'Return time of the radar pulse against distance. The line is straight through the origin: the signal travels to the object and back (2 × distance) at the speed of light, so return time is directly proportional to distance.',
    },
    tags: { unit: 'astrophysics', topics: ['radar', 'signal transmission', 'variables', 'hypothesis'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct classification for each variable in this investigation.\n\nVariables: signal return time, frequency of radar waves, distance to the object.',
        marks: 2,
        widget: 'variable_classify',
        widgetItems: ['Signal return time', 'Frequency of radar waves', 'Distance to the object'],
        ph: 'Signal return time = dependent variable. Distance to the object = independent variable. Frequency of radar waves = control variable.',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that this investigation would test.',
        marks: 3,
        ph: 'As the distance to the object increases, the signal return time will increase. Because the radar signal must travel a greater total distance (to object and back). Prediction: if distance doubles, return time doubles (directly proportional).',
      },
      {
        label: 'c',
        text: '**Explain** why the distance to the object is the independent variable, and why the frequency of the radar waves is a control variable.',
        marks: 3,
        ph: 'Distance is the IV because it is what the student changes to investigate the effect. Frequency is a CV because it could affect signal behaviour (different frequencies have different properties) and must be kept constant to ensure a fair test.',
      },
      {
        label: 'd',
        text: '**Suggest** why there is a maximum distance beyond which the radar system cannot detect the reflecting object.',
        marks: 2,
        ph: 'The intensity of the radar signal decreases with distance (inverse square law). Beyond the maximum distance, the signal reflected by the object is too weak to be detected by the receiver. OR: the signal takes so long to return that it is indistinguishable from background noise.',
      },
    ],
  },

  // ── Q10: Drone Delivery Evaluation (12 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Drone Delivery Technology',
    marks: 12,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Drone delivery technology can provide medical supplies, vaccines, and other essential items to remote communities that are not connected by reliable road infrastructure.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Factor', 'Delivery drone', 'Road vehicle'],
        rows: [
          ['Maximum payload', '2 kg', '1000 kg'],
          ['Typical range on one charge / tank', '40 km', '600 km'],
          ['Average delivery time to remote village', '18 min', '5 h'],
          ['Affected by poor / no roads', 'No', 'Yes'],
          ['Affected by strong wind or rain', 'Yes', 'Less so'],
          ['Cost per delivery (medical kit)', 'US$15', 'US$60'],
          ['Up-front cost of equipment / infrastructure', 'High (drones + charging)', 'High (vehicles + roads)'],
        ],
      },
      caption: 'Comparison of drone delivery and road delivery for reaching remote communities — payload, range, speed, dependence on roads and weather, and cost.',
    },
    tags: { unit: 'astrophysics', topics: ['drone technology', 'evaluation', 'technology', 'economics'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the use of drone delivery for providing essential supplies to remote communities. In your answer, consider:\n- **advantages** and **disadvantages** of drone delivery (with justification)\n- **technological considerations**\n- **economic factors**\n- a **concluding appraisal** linking all issues discussed',
        marks: 12,
        ph: 'Advantages: reaches remote areas without roads; faster than traditional delivery; operates in disaster zones. Disadvantages: limited payload capacity; weather dependent; battery/fuel range limited; safety risks. Technology: autonomous navigation; GPS required; maintenance needs; charging infrastructure. Economic: high initial cost; reduces labour costs; affordable in long run; infrastructure investment. Conclusion: drone delivery valuable for emergency medical supplies in remote areas; limitations must be addressed; justified recommendation.',
      },
    ],
  },

  // ── Q11: Ionisation & Radiotherapy (9 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Ionising Radiation and Radiotherapy',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Ionising radiation can affect the human body. Radiotherapy uses controlled doses of ionising radiation to target and destroy cancer cells in the human body.',
    artefact: {
      component: 'SpectrumSim',
      data: {
        title: 'The high-energy end of the electromagnetic spectrum',
        mode: 'scrub',
        axis: 'photon energy increases left → right (penetrating power increases)',
        bands: ['radio', 'microwave', 'infrared', 'visible', 'ultraviolet', 'X-ray', 'gamma ray'],
        target: 'gamma ray',
      },
      caption: 'The electromagnetic spectrum from radio to gamma. Photon energy — and penetrating power — increase from left to right, so ultraviolet < X-ray < gamma ray. The ionising, deeply penetrating gamma rays at the far right are used in radiotherapy.',
    },
    tags: { unit: 'atomic-physics', topics: ['ionisation', 'DNA damage', 'gamma rays', 'radiotherapy', 'medical imaging'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** how an atom can become ionised.',
        marks: 3,
        ph: 'An atom absorbs energy from radiation (or a charged particle collides with the atom). An electron gains enough energy to escape from the atom. A positive ion is left behind.',
      },
      {
        label: 'b',
        text: '**Explain** how ionising radiation can damage healthy tissue during radiotherapy. Use a linked chain of reasoning.',
        marks: 2,
        ph: 'Ionising radiation damages DNA in healthy cells. DNA damage causes mutations. Mutations in healthy cells can lead to cancer or cell death.',
      },
      {
        label: 'c',
        text: '**Order** these three types of electromagnetic radiation from lowest to highest penetrating power: gamma rays, ultraviolet radiation, X-rays.',
        marks: 1,
        ph: 'Ultraviolet → X-ray → gamma ray (increasing penetrating power)',
      },
      {
        label: 'd',
        text: 'In external beam radiotherapy, beams of high-energy radiation are directed at a tumour from multiple angles outside the body. The table shows how different radiation types penetrate tissue.\n\n**Explain** why high-energy gamma rays are used for external beam radiotherapy rather than ultraviolet radiation or low-energy X-rays.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 260" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="hdr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a6b80"/><stop offset="1" stop-color="#2b5566"/></linearGradient></defs><rect x="0" y="0" width="760" height="260" fill="#ffffff"/><g stroke="#5b7884" stroke-width="1.4"><rect x="30" y="40" width="260" height="55" fill="#ffffff"/><rect x="290" y="40" width="160" height="55" fill="url(#hdr2)"/><rect x="450" y="40" width="150" height="55" fill="url(#hdr2)"/><rect x="600" y="40" width="140" height="55" fill="url(#hdr2)"/><rect x="30" y="95" width="260" height="55" fill="#eef4f6"/><rect x="290" y="95" width="160" height="55" fill="#ffffff"/><rect x="450" y="95" width="150" height="55" fill="#ffffff"/><rect x="600" y="95" width="140" height="55" fill="#ffffff"/><rect x="30" y="150" width="260" height="55" fill="#f6fafb"/><rect x="290" y="150" width="160" height="55" fill="#ffffff"/><rect x="450" y="150" width="150" height="55" fill="#ffffff"/><rect x="600" y="150" width="140" height="55" fill="#ffffff"/><rect x="30" y="205" width="260" height="55" fill="#eef4f6"/><rect x="290" y="205" width="160" height="55" fill="#ffffff"/><rect x="450" y="205" width="150" height="55" fill="#ffffff"/><rect x="600" y="205" width="140" height="55" fill="#ffffff"/></g><text x="370" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">ultraviolet</text><text x="525" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">X-rays (low energy)</text><text x="670" y="74" text-anchor="middle" font-size="16" font-weight="bold" fill="#ffffff">gamma rays</text><text x="160" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by skin</text><text x="160" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by bones</text><text x="160" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">absorption by soft tissue</text><text x="370" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="370" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="370" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="525" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="525" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">high</text><text x="525" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">medium</text><text x="670" y="129" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="670" y="184" text-anchor="middle" font-size="15" fill="#1d2d33">low</text><text x="670" y="239" text-anchor="middle" font-size="15" fill="#1d2d33">low</text></svg>' },
          caption: 'How ultraviolet, low-energy X-rays and gamma rays are absorbed by skin, bone and soft tissue.',
        },
        ph: 'UV is absorbed by skin → cannot reach deep tumours. Low-energy X-rays are absorbed by tissue before reaching deep tumours. Only high-energy gamma rays penetrate deeply enough to reach tumours deep within the body. Multiple beams from different angles ensure maximum dose at the tumour, minimising damage to surrounding healthy tissue.',
      },
    ],
  },

  // ── Q12: X-ray Inspection of Aircraft Weld (3 marks, Criterion D) ──
  {
    id: 12,
    crit: 'D',
    type: 'extended',
    topic: 'Industrial X-ray Inspection',
    marks: 3,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'X-rays are used to inspect metal welds in aircraft wings without cutting or removing any material. An X-ray image of a weld is formed by projecting X-rays through the metal and detecting the pattern on the other side.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 320" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7178"/><stop offset="1" stop-color="#3c4147"/></linearGradient><linearGradient id="bead" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9aa1a8"/><stop offset="0.5" stop-color="#7c828a"/><stop offset="1" stop-color="#565b61"/></linearGradient><radialGradient id="void1" cx="0.5" cy="0.45" r="0.6"><stop offset="0" stop-color="#0b0d10"/><stop offset="1" stop-color="#1d2227"/></radialGradient></defs><rect x="0" y="0" width="720" height="320" fill="#11151a"/><text x="360" y="34" text-anchor="middle" font-size="18" font-weight="bold" fill="#e7edf2">X-ray image of an aircraft-wing weld</text><rect x="60" y="120" width="280" height="90" fill="url(#plate)" stroke="#2a2e33" stroke-width="2"/><rect x="380" y="120" width="280" height="90" fill="url(#plate)" stroke="#2a2e33" stroke-width="2"/><path d="M340,118 q20,-14 40,0 l0,94 q-20,14 -40,0 Z" fill="url(#bead)" stroke="#23272c" stroke-width="2"/><g stroke="#aab1b8" stroke-width="1" opacity="0.35"><line x1="345" y1="128" x2="375" y2="128"/><line x1="343" y1="148" x2="377" y2="148"/><line x1="345" y1="168" x2="375" y2="168"/><line x1="343" y1="188" x2="377" y2="188"/><line x1="345" y1="202" x2="375" y2="202"/></g><ellipse cx="360" cy="150" rx="13" ry="10" fill="url(#void1)" stroke="#000000" stroke-width="0.5"/><path d="M352,182 q8,6 4,16 q-3,7 6,10" fill="none" stroke="#0b0d10" stroke-width="3.2" stroke-linecap="round"/><g fill="#cfd6dc" font-size="13"><line x1="360" y1="150" x2="470" y2="78" stroke="#e0a93b" stroke-width="1.5"/><circle cx="470" cy="78" r="3" fill="#e0a93b"/><text x="478" y="74" fill="#f0d28a">dark spot — gas pore (void)</text><text x="478" y="92" fill="#aab1b8" font-size="11">less metal → more X-rays pass → darker</text><line x1="358" y1="200" x2="470" y2="250" stroke="#e0a93b" stroke-width="1.5"/><circle cx="470" cy="250" r="3" fill="#e0a93b"/><text x="478" y="246" fill="#f0d28a">dark thread — internal crack</text><line x1="200" y1="165" x2="200" y2="250" stroke="#7f8a93" stroke-width="1.2"/><text x="150" y="268" fill="#aab1b8" font-size="12">solid metal plate (light grey)</text></g><text x="360" y="300" text-anchor="middle" font-size="12" fill="#8b949c">Defects (pore + crack) show as dark regions because less metal absorbs the X-rays there.</text></svg>' },
      caption: 'X-ray radiograph of the weld joining two wing plates. The weld bead runs down the centre; a gas pore and a hairline crack inside it show up as darker regions where less metal absorbs the X-rays.',
    },
    tags: { unit: 'atomic-physics', topics: ['X-rays', 'industrial inspection', 'interpretation'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Describe** what can be seen in the X-ray image of the aircraft weld, and **explain** what scientific information the image reveals about the quality of the weld.',
        marks: 3,
        ph: 'First point must refer to the image. Any internal crack or air bubble (void) in the weld appears as a dark region in the X-ray image (less metal to absorb X-rays). The image reveals structural defects not visible on the surface. This provides information about the strength and safety of the weld.',
      },
    ],
  },

  // ── Q13: CT Scanning vs Conventional X-ray (4 marks, Criterion D) ──
  {
    id: 13,
    crit: 'D',
    type: 'extended',
    topic: 'CT Scanning Technology',
    marks: 4,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    stem: 'Computed Tomography (CT scanning) is a medical imaging technique that takes many X-ray images from different angles around a patient and uses a computer to reconstruct a three-dimensional image of the internal structure.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 300" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="film" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1f26"/><stop offset="1" stop-color="#0c0f13"/></linearGradient><radialGradient id="slice" cx="0.5" cy="0.5" r="0.6"><stop offset="0" stop-color="#3a4350"/><stop offset="1" stop-color="#10141a"/></radialGradient><linearGradient id="recon" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#243244"/><stop offset="1" stop-color="#0e151f"/></linearGradient></defs><rect x="0" y="0" width="760" height="300" fill="#ffffff"/><g><rect x="20" y="40" width="220" height="220" rx="6" fill="url(#film)" stroke="#444b54" stroke-width="1.5"/><text x="130" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2d33">Image A</text><text x="130" y="282" text-anchor="middle" font-size="12" fill="#5b6b78">conventional X-ray (flat shadow)</text><g opacity="0.85"><path d="M130,70 Q108,72 104,100 Q100,140 116,190 L144,190 Q160,140 156,100 Q152,72 130,70 Z" fill="#cdd6de" opacity="0.45"/><g stroke="#e8eef3" stroke-width="6" stroke-linecap="round" opacity="0.7"><line x1="116" y1="120" x2="116" y2="200"/><line x1="130" y1="118" x2="130" y2="205"/><line x1="144" y1="120" x2="144" y2="200"/></g><path d="M104,108 Q130,118 156,108" fill="none" stroke="#e8eef3" stroke-width="5" opacity="0.6"/></g></g><g><rect x="270" y="40" width="220" height="220" rx="6" fill="#0c0f13" stroke="#444b54" stroke-width="1.5"/><text x="380" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2d33">Image B</text><text x="380" y="282" text-anchor="middle" font-size="12" fill="#5b6b78">CT cross-section (one slice)</text><circle cx="380" cy="150" r="92" fill="url(#slice)" stroke="#5a6470" stroke-width="1.5"/><circle cx="380" cy="150" r="92" fill="none" stroke="#7c8794" stroke-width="6" opacity="0.5"/><ellipse cx="362" cy="138" rx="22" ry="16" fill="#566373" opacity="0.85"/><ellipse cx="404" cy="142" rx="18" ry="14" fill="#4a5564" opacity="0.85"/><circle cx="380" cy="178" r="10" fill="#79505a" opacity="0.9"/><rect x="372" y="96" width="16" height="22" rx="4" fill="#2a323d"/><line x1="380" y1="58" x2="380" y2="242" stroke="#9aa6b2" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.5"/><line x1="288" y1="150" x2="472" y2="150" stroke="#9aa6b2" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.5"/></g><g><rect x="520" y="40" width="220" height="220" rx="6" fill="url(#recon)" stroke="#444b54" stroke-width="1.5"/><text x="630" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d2d33">Image C</text><text x="630" y="282" text-anchor="middle" font-size="12" fill="#5b6b78">3D CT reconstruction</text><g opacity="0.92"><ellipse cx="630" cy="92" rx="34" ry="40" fill="#c9d3dc"/><path d="M598,120 Q592,170 604,225 L656,225 Q668,170 662,120 Q646,138 630,138 Q614,138 598,120 Z" fill="#aeb9c4"/><g stroke="#dde4ea" stroke-width="2" opacity="0.6"><path d="M604,150 Q630,158 656,150"/><path d="M606,175 Q630,182 654,175"/><path d="M608,200 Q630,206 652,200"/></g><circle cx="618" cy="86" r="4" fill="#3a4350"/><circle cx="642" cy="86" r="4" fill="#3a4350"/></g><g stroke="#6f7b88" stroke-width="0.8" opacity="0.35"><line x1="540" y1="60" x2="720" y2="60"/><line x1="540" y1="240" x2="720" y2="240"/></g></g></svg>' },
      caption: 'Three representations of the same patient: a flat conventional X-ray (A), a single CT cross-sectional slice (B), and a computer-reconstructed 3D CT image (C).',
    },
    tags: { unit: 'atomic-physics', topics: ['CT scan', 'X-ray', 'medical imaging', 'scientific applications'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: 'Three representations of a patient are shown: Image A (conventional X-ray), Image B (CT cross-section scan), Image C (3D CT reconstruction).\n\n**Explain** what CT scanning reveals about the patient that a conventional X-ray does not show.',
        marks: 2,
        ph: 'A conventional X-ray (Image A) produces a flat shadow image — internal structures overlap. CT scanning (Images B and C) produces cross-sectional slices and 3D reconstructions. This reveals depth, the shape of internal organs, and the exact location of abnormalities that overlap in a standard X-ray.',
      },
      {
        label: 'b',
        text: '**State two advantages** of using CT scanning rather than exploratory surgery to examine internal structures.',
        marks: 2,
        ph: 'Any two: the patient is not cut open → no surgical risk. Recovery time is much shorter. The whole body can be examined simultaneously. Soft tissue can be visualised in detail. No risk of surgical infection.',
      },
    ],
  },
]
