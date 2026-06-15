import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2017-v2',
  subject: 'Physics',
  session: 'May',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Star Colours & Light — Red Supergiant Mu Cephei (4 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Star Temperature and Colour Classification',
    marks: 4,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Stars are classified by their colour, which is directly related to their surface temperature. The hottest stars emit most of their radiation in the blue part of the spectrum, while cool red stars emit mostly red light. The Hertzsprung–Russell diagram shows star colour plotted against luminosity.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" font-family="Arial, Helvetica, sans-serif"> <defs> <radialGradient id="spaceL" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#1c1620"/> <stop offset="100%" stop-color="#0a0710"/> </radialGradient> <radialGradient id="spaceR" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#101a2e"/> <stop offset="100%" stop-color="#05080f"/> </radialGradient> <radialGradient id="redStar" cx="42%" cy="40%" r="65%"> <stop offset="0%" stop-color="#ffd690"/> <stop offset="30%" stop-color="#ff8a40"/> <stop offset="65%" stop-color="#d8431e"/> <stop offset="100%" stop-color="#771c08"/> </radialGradient> <radialGradient id="redGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#ff7a2a" stop-opacity="0.6"/> <stop offset="55%" stop-color="#e84d12" stop-opacity="0.2"/> <stop offset="100%" stop-color="#e84d12" stop-opacity="0"/> </radialGradient> <radialGradient id="blueStar" cx="44%" cy="40%" r="66%"> <stop offset="0%" stop-color="#ffffff"/> <stop offset="30%" stop-color="#d2ecff"/> <stop offset="62%" stop-color="#75bef0"/> <stop offset="100%" stop-color="#2563b8"/> </radialGradient> <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#a3d5ff" stop-opacity="0.6"/> <stop offset="55%" stop-color="#4a90e2" stop-opacity="0.2"/> <stop offset="100%" stop-color="#4a90e2" stop-opacity="0"/> </radialGradient> <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"> <feGaussianBlur stdDeviation="3.2"/> </filter> </defs> <!-- ===== LEFT : Mu Cephei (red supergiant — huge & cool) ===== --> <rect x="20" y="20" width="320" height="300" rx="10" fill="url(#spaceL)" stroke="#2a2230" stroke-width="1.5"/> <g fill="#fff"> <circle cx="70" cy="55" r="1.4" opacity="0.8"/><circle cx="300" cy="70" r="1.1" opacity="0.6"/> <circle cx="55" cy="240" r="1.2" opacity="0.7"/><circle cx="295" cy="270" r="1.5" opacity="0.8"/> <circle cx="115" cy="290" r="1" opacity="0.5"/><circle cx="250" cy="50" r="1.3" opacity="0.7"/> <circle cx="40" cy="160" r="1" opacity="0.5"/><circle cx="315" cy="180" r="1.2" opacity="0.6"/> </g> <!-- huge cool red supergiant --> <circle cx="180" cy="170" r="135" fill="url(#redGlow)" filter="url(#soft)"/> <circle cx="180" cy="170" r="108" fill="url(#redStar)"/> <g stroke="#ff8a3c" stroke-width="3" fill="none" opacity="0.8" stroke-linecap="round"> <path d="M108 100 q-18 -22 4 -34"/> <path d="M255 110 q24 -16 14 -42"/> <path d="M260 232 q28 14 16 44"/> <path d="M100 235 q-22 16 -8 44"/> </g> <g fill="#fff2c8" opacity="0.55"> <circle cx="148" cy="148" r="3.2"/><circle cx="206" cy="188" r="4"/><circle cx="172" cy="216" r="2.6"/> <circle cx="218" cy="142" r="2.3"/> </g> <text x="180" y="306" text-anchor="middle" fill="#ffd9a8" font-size="15" font-weight="bold">Mu Cephei — red supergiant (cool)</text> <!-- ===== RIGHT : hot blue star ===== --> <rect x="380" y="20" width="320" height="300" rx="10" fill="url(#spaceR)" stroke="#1a2436" stroke-width="1.5"/> <g fill="#fff"> <circle cx="430" cy="60" r="1.3" opacity="0.8"/><circle cx="660" cy="75" r="1.1" opacity="0.6"/> <circle cx="415" cy="245" r="1.2" opacity="0.7"/><circle cx="655" cy="265" r="1.4" opacity="0.8"/> <circle cx="480" cy="295" r="1" opacity="0.5"/><circle cx="610" cy="48" r="1.3" opacity="0.7"/> <circle cx="400" cy="165" r="1" opacity="0.5"/><circle cx="678" cy="185" r="1.2" opacity="0.6"/> </g> <circle cx="540" cy="170" r="120" fill="url(#blueGlow)" filter="url(#soft)"/> <circle cx="540" cy="170" r="80" fill="url(#blueStar)"/> <g stroke="#cfeaff" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"> <path d="M540 78 v-16"/><path d="M540 262 v16"/> <path d="M448 170 h-16"/><path d="M632 170 h16"/> <path d="M476 104 l-12 -12"/><path d="M604 236 l12 12"/> </g> <g fill="#ffffff" opacity="0.55"> <circle cx="514" cy="152" r="3.5"/><circle cx="560" cy="184" r="4"/><circle cx="538" cy="204" r="2.4"/> </g> <text x="540" y="306" text-anchor="middle" fill="#bfe0ff" font-size="15" font-weight="bold">Hot blue star (e.g. 25,000 °C)</text> <text x="360" y="344" text-anchor="middle" fill="#9aa3b2" font-size="12" font-style="italic">Schematic — not to scale</text> </svg>' },
      caption: 'Left: the cool red supergiant Mu Cephei. Right: a hot blue star (~25,000 \u00b0C). Star colour is set by surface temperature.',
    },
    tags: { unit: 'astrophysics', topics: ['star temperature', 'colour', 'EM spectrum', 'light properties'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the comparisons between red and blue light.\n\nThe speed of red light is **[greater than / equal to / less than]** the speed of blue light.\n\nThe wavelength of red light is **[greater than / equal to / less than]** the wavelength of blue light.\n\nThe frequency of red light is **[greater than / equal to / less than]** the frequency of blue light.',
        marks: 2,
        ph: 'Speed: equal to. Wavelength: greater than. Frequency: less than. All 3 correct = 2; any 1 correct = 1.',
      },
      {
        label: 'b',
        text: '**State** the expected surface temperature for the red supergiant star Mu Cephei.',
        marks: 1,
        ph: 'Less than (or equal to) 3200 °C.',
      },
      {
        label: 'c',
        text: '**State** the expected colour for a star with a surface temperature of 25,000 °C.',
        marks: 1,
        ph: 'Blue (accept: blue-white).',
      },
    ],
  },

  // ── Q2: White Light & Radiation Beyond the Red End (7 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light Dispersion and Infrared Radiation',
    marks: 7,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'White light from a halogen lamp passes through a glass prism into a darkened room. A student places a digital infrared thermometer sensor in different positions across the spectrum and in the region beyond the visible red end.',
    tags: { unit: 'em-spectrum', topics: ['white light', 'refraction', 'infrared radiation', 'electromagnetic spectrum'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why white light produces a spectrum when it passes through a glass prism.',
        marks: 2,
        ph: 'White light is a mixture of different colours/frequencies/wavelengths. Different frequencies are refracted by different amounts when passing through glass, separating the colours into a spectrum.',
      },
      {
        label: 'b',
        text: 'The student observes a temperature rise when the sensor is placed beyond the red end of the visible spectrum.\n\n**Explain** what physical process causes the temperature of the sensor to rise when infrared radiation falls on it.',
        marks: 2,
        ph: 'The sensor absorbs infrared radiation from the region beyond the red. Absorption of radiation increases the internal energy / kinetic energy of the sensor\'s molecules, raising its temperature. Dark/black surfaces are better absorbers of radiation.',
      },
      {
        label: 'c',
        text: '**Interpret** the data from the sensor readings across the spectrum and **explain** the results using scientific reasoning.',
        marks: 3,
        ph: 'Temperature increases from the violet end to the red end across the visible spectrum. Temperature continues to rise beyond the red end in the infrared region. The maximum temperature rise occurs in the infrared region, beyond the visible spectrum. This occurs because the infrared region carries more energy per unit area in this region of the spectrum. The sensor absorbs radiation at all wavelengths, with peak response in the infrared.',
      },
    ],
  },

  // ── Q3: Southern Observatory — Telescopes & Alpha Centauri (13 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Telescopes, Star Trails & Light Year Calculation',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Astronomers use optical and radio telescopes to study the universe. Long-exposure cameras can capture the motion of the sky over several hours from an observatory.',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'reflection', 'Earth rotation', 'pole star', 'light year', 'distance'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'A revolving mirror attached to a camera rotates continuously to track the sky. **Select** the correct diagram showing how the rotating mirror would appear in a long-exposure photograph of the night sky.',
        marks: 1,
        ph: 'The mirror appears as a continuous bright arc/streak in the long-exposure photograph.',
      },
      {
        label: 'b',
        text: 'A reflecting telescope uses a large concave primary mirror to collect and focus light. **Draw** on the diagram the path of two reflected rays from the curved mirror and show the correct **direction** of the arrows. Show where the rays converge to form an image.',
        marks: 3,
        ph: 'Both reflected rays converge at the focal point of the mirror. Arrows point from mirror toward focal point. Award 3 marks if both rays approximately correct; third mark for correct arrow direction.',
      },
      {
        label: 'c',
        text: 'A student takes a 3-hour long-exposure photograph of the night sky from an observatory in South Africa. The photograph shows curved arcs of light from stars.\n\n**Explain** why the stars appear to trace arcs across the sky.',
        marks: 2,
        ph: 'The apparent motion of the stars is caused by the rotation of the Earth on its own axis. The Earth rotates from west to east, making the stars appear to move from east to west. The stars themselves are not moving (relative to Earth).',
      },
      {
        label: 'd',
        text: 'In the photograph, the star marked T (Sigma Octantis, the south celestial pole star) appears stationary while all other stars trace arcs. **Explain why** Sigma Octantis appears not to move.',
        marks: 1,
        ph: 'Sigma Octantis is located almost directly above the Earth\'s South Pole, aligned with the Earth\'s axis of rotation. As Earth spins, Sigma Octantis stays in a fixed position above the rotation axis.',
      },
      {
        label: 'e',
        text: 'A cluster of three stars in a nearby galaxy are resolved into separate objects only using a telescope. **Explain why** the three stars cannot be seen as separate objects with the naked eye, and how a telescope solves this.',
        marks: 2,
        ph: 'The naked eye cannot resolve (separate) objects that are angularly very close together in the sky. A telescope increases magnification and light-gathering ability, allowing the angular gap between the three stars to be resolved into distinct objects.',
      },
      {
        label: 'f',
        text: 'Alpha Centauri is estimated to be 4.2 light years from Earth. A light year is the distance light travels in one year. Light travels at 3.0 × 10⁸ ms⁻¹ in a vacuum. Assume a year has 365 days.\n\n**Calculate** how far Alpha Centauri is from the Earth in metres. Show your working.',
        marks: 3,
        ph: '1 year = 365 × 24 × 3600 = 3.15 × 10⁷ s. 1 light year = 3.0 × 10⁸ × 3.15 × 10⁷ = 9.45 × 10¹⁵ m. Distance = 4.2 × 9.45 × 10¹⁵ = 3.97 × 10¹⁶ ≈ 4.0 × 10¹⁶ m.',
      },
      {
        label: 'g',
        text: 'Using your answer to part (f), **state** the distance from Alpha Centauri to Earth in metres. Give your answer in standard form.',
        marks: 1,
        ph: '4.0 × 10¹⁶ m (ECF from part f)',
      },
    ],
  },

  // ── Q4: Exoplanet Detection & Habitable Zone (8 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Exoplanet Detection and the Habitable Zone',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'The Kepler space telescope detected thousands of exoplanets by monitoring changes in starlight. Astronomers search particularly for planets in the "habitable zone" where liquid water could exist.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 380" font-family="Arial, Helvetica, sans-serif"> <defs> <radialGradient id="bgK" cx="50%" cy="50%" r="80%"> <stop offset="0%" stop-color="#0d1530"/> <stop offset="100%" stop-color="#04050e"/> </radialGradient> <radialGradient id="sunK" cx="42%" cy="42%" r="65%"> <stop offset="0%" stop-color="#fff4c0"/> <stop offset="55%" stop-color="#ffb244"/> <stop offset="100%" stop-color="#b3540c"/> </radialGradient> <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#ffcc66" stop-opacity="0.55"/> <stop offset="100%" stop-color="#ffcc66" stop-opacity="0"/> </radialGradient> <radialGradient id="planetK" cx="40%" cy="40%" r="60%"> <stop offset="0%" stop-color="#9ea3aa"/> <stop offset="100%" stop-color="#22262d"/> </radialGradient> <linearGradient id="telBody" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#6d7480"/> <stop offset="50%" stop-color="#c0c5cc"/> <stop offset="100%" stop-color="#5a606a"/> </linearGradient> <filter id="softK"> <feGaussianBlur stdDeviation="3"/> </filter> </defs> <rect x="0" y="0" width="720" height="380" fill="url(#bgK)"/> <!-- background stars --> <g fill="#fff"> <circle cx="50" cy="60" r="1.2" opacity="0.8"/><circle cx="130" cy="36" r="1" opacity="0.6"/> <circle cx="600" cy="46" r="1.4" opacity="0.8"/><circle cx="700" cy="100" r="1" opacity="0.6"/> <circle cx="40" cy="300" r="1.2" opacity="0.7"/><circle cx="690" cy="320" r="1.3" opacity="0.7"/> <circle cx="380" cy="40" r="0.9" opacity="0.5"/><circle cx="180" cy="280" r="1" opacity="0.5"/> </g> <text x="20" y="32" fill="#ffffff" font-size="16" font-weight="bold">Kepler space telescope — transit detection of an exoplanet</text> <!-- host star (right side) --> <circle cx="540" cy="200" r="115" fill="url(#sunGlow)" filter="url(#softK)"/> <circle cx="540" cy="200" r="76" fill="url(#sunK)"/> <text x="540" y="300" text-anchor="middle" fill="#ffd9a8" font-size="13" font-weight="bold">host star (Sun-like)</text> <!-- orbital path --> <ellipse cx="540" cy="200" rx="142" ry="48" fill="none" stroke="#7a8aa6" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.7"/> <!-- habitable zone band --> <ellipse cx="540" cy="200" rx="160" ry="56" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4" opacity="0.6"/> <ellipse cx="540" cy="200" rx="200" ry="70" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4" opacity="0.6"/> <text x="350" y="138" fill="#3bc77a" font-size="11" opacity="0.85">habitable zone</text> <line x1="380" y1="142" x2="395" y2="158" stroke="#3bc77a" stroke-width="0.8" opacity="0.7"/> <!-- transiting planet in front of star --> <circle cx="500" cy="200" r="10" fill="url(#planetK)" stroke="#06080c" stroke-width="0.8"/> <text x="500" y="178" text-anchor="middle" fill="#ffffff" font-size="11">exoplanet</text> <!-- inner too-hot planet (0.05 AU) --> <circle cx="556" cy="200" r="5" fill="#d24a2a" stroke="#7a1f08" stroke-width="0.6"/> <!-- Kepler telescope (left) --> <g transform="translate(70 170)"> <!-- main barrel --> <rect x="0" y="0" width="120" height="48" rx="6" fill="url(#telBody)" stroke="#3a4048" stroke-width="1.4"/> <!-- sunshield --> <polygon points="120,4 156,-10 156,58 120,44" fill="#3a4048" stroke="#1f2329" stroke-width="1.2"/> <!-- aperture (front lens) --> <ellipse cx="0" cy="24" rx="6" ry="22" fill="#0c1018" stroke="#82898f" stroke-width="1.4"/> <!-- solar panel --> <rect x="20" y="-22" width="80" height="18" fill="#22456e" stroke="#0c1830" stroke-width="0.8"/> <g stroke="#0c1830" stroke-width="0.6"> <line x1="40" y1="-22" x2="40" y2="-4"/><line x1="60" y1="-22" x2="60" y2="-4"/> <line x1="80" y1="-22" x2="80" y2="-4"/> </g> <!-- antenna --> <line x1="60" y1="48" x2="60" y2="68" stroke="#c0c5cc" stroke-width="1.4"/> <circle cx="60" cy="72" r="5" fill="#c0c5cc" stroke="#3a4048"/> <!-- label --> <text x="60" y="92" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Kepler telescope</text> </g> <!-- viewing line from telescope to star --> <line x1="190" y1="194" x2="464" y2="200" stroke="#ffe66d" stroke-width="0.9" stroke-dasharray="3 4" opacity="0.6"/> <!-- light-curve panel --> <g transform="translate(40 282)"> <rect x="0" y="0" width="220" height="86" rx="6" fill="#ffffff" opacity="0.94"/> <text x="110" y="14" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">Brightness vs time (light curve)</text> <line x1="14" y1="62" x2="210" y2="62" stroke="#2c3e50" stroke-width="1"/> <line x1="14" y1="22" x2="14" y2="62" stroke="#2c3e50" stroke-width="1"/> <polyline points="18,28 70,28 84,50 124,50 138,28 210,28" fill="none" stroke="#0b7285" stroke-width="2"/> <text x="110" y="80" text-anchor="middle" fill="#2c3e50" font-size="10">dip = planet transit</text> </g> </svg>' },
      caption: 'The Kepler space telescope detects an exoplanet by the dip in the host star\u2019s brightness as the planet transits across its face.',
    },
    tags: { unit: 'astrophysics', topics: ['planets', 'habitable zone', 'transit method', 'luminosity'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** how the transit method allows astronomers to detect an exoplanet orbiting a distant star.',
        marks: 2,
        ph: 'An exoplanet is opaque and passes in front of its star (transit), blocking some of the star\'s light. This causes a measurable periodic dip in the brightness of the star as observed from Earth, revealing the planet\'s presence.',
      },
      {
        label: 'b',
        text: '**Explain** why exoplanets cannot normally be directly imaged by telescopes (unlike stars).',
        marks: 2,
        ph: 'Exoplanets are non-luminous — they do not produce their own visible light. They are at least a billion times fainter than their host stars. Only their reflected light or their shadow (transit) can be detected; this reflected light is too faint to distinguish from the star\'s glare.',
      },
      {
        label: 'c',
        text: 'An exoplanet orbiting at a distance of only 0.05 AU from a Sun-like star would have no liquid water on its surface. **Explain why** liquid water cannot exist on such a planet.',
        marks: 2,
        ph: 'At 0.05 AU the planet is extremely close to the star and receives a very large amount of radiation. The surface temperature would be far too high. Any water would evaporate or boil away, leaving only vapour. Liquid water cannot exist at such high temperatures.',
      },
      {
        label: 'd',
        text: 'Observations show that the habitable zone around a cooler, smaller red dwarf star is much closer to the star than for a larger, hotter star like our Sun. **Explain why** the habitable zone is closer to a cool red dwarf star.',
        marks: 2,
        ph: 'A cooler red dwarf star emits much less energy per unit time than a hotter star. A planet must be much closer to a red dwarf to receive enough energy to maintain liquid water temperatures. The habitable zone for a low-luminosity star is therefore much closer to the star.',
      },
    ],
  },

  // ── Q5: Ramp Investigation — Toy Car (25 marks, Criterion B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GPE, KE & Friction — Toy Car on a Ramp',
    marks: 25,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The simulation shows a ramp with a toy car (mass 0.20 kg) that rolls down the ramp onto a flat surface. The ramp length is 80 cm. The height of the ramp and the distance the car travels along the flat surface can both be measured.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" font-family="Arial, Helvetica, sans-serif"> <defs> <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#e9d6b8"/> <stop offset="100%" stop-color="#cdb088"/> </linearGradient> <linearGradient id="rampG" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#9aa1a8"/> <stop offset="50%" stop-color="#d8dde1"/> <stop offset="100%" stop-color="#7e858c"/> </linearGradient> <linearGradient id="standG" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#5a6066"/> <stop offset="50%" stop-color="#8a9097"/> <stop offset="100%" stop-color="#5a6066"/> </linearGradient> <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#ff8a3a"/> <stop offset="100%" stop-color="#c0521b"/> </linearGradient> <radialGradient id="wheelG" cx="40%" cy="40%" r="60%"> <stop offset="0%" stop-color="#7a8088"/> <stop offset="100%" stop-color="#1d2026"/> </radialGradient> <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#c0392b"/> </marker> <marker id="arrowS" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#2c3e50"/> </marker> </defs> <rect x="0" y="0" width="720" height="480" fill="#ffffff"/> <!-- ground / bench --> <rect x="20" y="320" width="680" height="130" fill="url(#floor)" stroke="#b89a70" stroke-width="1.5"/> <line x1="20" y1="320" x2="700" y2="320" stroke="#a9875e" stroke-width="2"/> <!-- clamp stand --> <rect x="105" y="314" width="120" height="10" rx="3" fill="url(#standG)" stroke="#3f4549"/> <rect x="158" y="40" width="12" height="282" rx="3" fill="url(#standG)" stroke="#3f4549"/> <!-- clamp at top: 0.80 m above bench --> <rect x="150" y="76" width="30" height="16" rx="3" fill="#5a6066" stroke="#3f4549"/> <!-- ramp 0.80 m high, 80 cm length: steeper than v1 --> <g> <polygon points="170,84 480,300 480,312 170,96" fill="url(#rampG)" stroke="#646b71" stroke-width="1.5"/> <line x1="178" y1="90.5" x2="474" y2="303.5" stroke="#eef1f3" stroke-width="1.6" opacity="0.8"/> </g> <!-- toy car on the ramp (aligned with slope) --> <g transform="translate(270 190) rotate(35)"> <rect x="-26" y="-12" width="52" height="16" rx="4" fill="url(#carBody)" stroke="#7a2f08" stroke-width="1.2"/> <rect x="-14" y="-20" width="22" height="10" rx="3" fill="#ffd57a" stroke="#7a2f08" stroke-width="0.9"/> <circle cx="-16" cy="6" r="6" fill="url(#wheelG)" stroke="#0c0f14" stroke-width="0.8"/> <circle cx="14" cy="6" r="6" fill="url(#wheelG)" stroke="#0c0f14" stroke-width="0.8"/> <circle cx="-16" cy="6" r="2.2" fill="#c0c5cc"/> <circle cx="14" cy="6" r="2.2" fill="#c0c5cc"/> </g> <!-- label callout --> <line x1="290" y1="180" x2="380" y2="120" stroke="#1f2329" stroke-width="0.9"/> <rect x="338" y="92" width="130" height="28" rx="4" fill="#2c3e50"/> <text x="403" y="111" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Toy car — 0.20 kg</text> <!-- ramp height dimension (vertical) --> <line x1="78" y1="84" x2="78" y2="320" stroke="#2c3e50" stroke-width="1.5" marker-start="url(#arrowS)" marker-end="url(#arrowS)"/> <line x1="72" y1="84" x2="170" y2="84" stroke="#2c3e50" stroke-width="0.8" stroke-dasharray="4 3"/> <line x1="72" y1="320" x2="105" y2="320" stroke="#2c3e50" stroke-width="0.8" stroke-dasharray="4 3"/> <text x="50" y="210" text-anchor="middle" fill="#2c3e50" font-size="13" transform="rotate(-90 50 210)">Ramp height / cm</text> <rect x="84" y="194" width="44" height="20" rx="3" fill="#ffffff" opacity="0.95"/> <text x="106" y="208" text-anchor="middle" fill="#2c3e50" font-size="13" font-weight="bold">80 cm</text> <!-- ramp length dimension --> <line x1="170" y1="385" x2="480" y2="385" stroke="#c0392b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/> <line x1="170" y1="320" x2="170" y2="390" stroke="#c0392b" stroke-width="0.8" stroke-dasharray="4 3"/> <line x1="480" y1="320" x2="480" y2="390" stroke="#c0392b" stroke-width="0.8" stroke-dasharray="4 3"/> <rect x="300" y="376" width="50" height="18" rx="3" fill="#ffffff" opacity="0.95"/> <text x="325" y="389" text-anchor="middle" fill="#c0392b" font-size="13" font-weight="bold">80 cm</text> <text x="325" y="410" text-anchor="middle" fill="#2c3e50" font-size="13">Ramp length / cm</text> <!-- distance travelled on flat surface arrow --> <line x1="480" y1="435" x2="690" y2="435" stroke="#0b7285" stroke-width="1.6" marker-start="url(#arrowS)" marker-end="url(#arrowS)"/> <text x="585" y="455" text-anchor="middle" fill="#0b7285" font-size="12" font-weight="bold">distance travelled on flat surface</text> </svg>' },
      caption: 'A toy car (0.20 kg) is released on an 80 cm ramp set at a height of 80 cm and rolls onto the flat bench.',
    },
    tags: { unit: 'forces-interactions', topics: ['gravitational potential energy', 'kinetic energy', 'friction', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equation linking gravitational potential energy (GPE) and kinetic energy (KE) for a car rolling down a frictionless ramp.',
        marks: 1,
        ph: 'GPE = KE (gravitational potential energy converts to kinetic energy on a frictionless ramp)',
      },
      {
        label: 'b',
        text: '**Calculate** the gravitational potential energy of the car when the ramp height is 0.80 m. Use g = 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'GPE = mgh = 0.20 × 10 × 0.80 = 1.60 J',
      },
      {
        label: 'c',
        text: '**State** the question that this investigation could answer.',
        marks: 1,
        ph: 'How does the height of the ramp affect the distance the toy car travels along the flat surface?',
      },
      {
        label: 'd',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the height increases, the distance the car travels increases. Greater height → more GPE → more KE at base of ramp → car travels further before friction stops it. Doubling the height doubles the distance (quantitative).',
      },
      {
        label: 'e',
        text: '**Identify** the independent and dependent variables, and **name two control variables** for this experiment.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Height of ramp', 'Distance car travels', 'Type of car/wheel material', 'Surface the car rolls on', 'Mass of car', 'Length of ramp'],
        ph: 'IV: Height of ramp. DV: Distance car travels. CV (any 2): type of car/wheel material, surface the car rolls on, mass of car, length of ramp.',
      },
      {
        label: 'f',
        text: 'A student sets up the ramp at a very low height and finds the car does not travel beyond the end of the ramp. **Explain** why this happened.',
        marks: 1,
        ph: 'At very low heights the ramp is too shallow. The force component along the ramp is less than the friction force. The car cannot overcome friction and does not leave the ramp.',
      },
      {
        label: 'g',
        text: '**Describe two safety precautions** the student should take when carrying out this experiment.',
        marks: 2,
        ph: 'Clamp or support the ramp securely so it cannot fall over. Keep hands and feet clear of the car\'s rolling path. Provide a cushioned barrier to stop the car at the end of the track.',
      },
      {
        label: 'h',
        text: '**Describe** the data you will collect. Include the range of heights you will use and the number of trials.',
        marks: 4,
        ph: 'Measure distance for at least 5 different heights between 0.30 m and 0.80 m (evenly spaced). At least 2 trials per height. Record height (IV) and distance (DV) for each trial. Calculate mean distance at each height.',
      },
      {
        label: 'i',
        text: 'The student plots a graph of distance (y-axis) against height (x-axis). **Describe** the relationship shown by the graph.',
        marks: 2,
        ph: 'As height increases, distance increases. The relationship is linear (straight line). The line does NOT pass through the origin (x-intercept present) → NOT proportional.',
      },
      {
        label: 'j',
        text: '**Read** the x-intercept from the graph.',
        marks: 1,
        ph: 'Accept any value in the range 0.18–0.22 m (units not essential for this mark)',
      },
      {
        label: 'k',
        text: '**Explain** the significance of the x-intercept in this experiment.',
        marks: 2,
        ph: 'The x-intercept is the minimum height at which the car will travel beyond the ramp onto the flat surface. Below this height, friction on the ramp dissipates all the kinetic energy before the car reaches the flat section.',
      },
      {
        label: 'l',
        text: '**Evaluate** the quality of the student\'s method in terms of the conclusions that can be drawn.',
        marks: 1,
        ph: 'The method produced sufficient data for a valid conclusion (a graph showing the linear relationship between height and distance could be drawn and the x-intercept identified).',
      },
    ],
  },

  // ── Q6: Alternative Ramp Investigation — Surface Material (9 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Alternative Ramp Variable — Surface Texture',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student wants to extend the ramp investigation by changing a different variable.',
    tags: { unit: 'forces-interactions', topics: ['experimental design', 'variables', 'hypothesis', 'friction'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**State** a relevant question using a suitable **alternative independent variable** for a new ramp investigation.',
        marks: 1,
        ph: 'How does the surface material of the track (or mass of car / angle of ramp / ramp length) affect the distance the car travels? (Do NOT accept height as IV.)',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that the question in part (a) would test.',
        marks: 3,
        ph: 'As the surface becomes rougher, the distance the car travels will decrease. A rougher surface creates a greater friction force. Friction removes kinetic energy from the car more rapidly, so it stops sooner. Doubling the roughness halves the distance (quantitative prediction).',
      },
      {
        label: 'c',
        text: '**Identify** one independent variable and **name two control variables** (that can be measured) for this new investigation.',
        marks: 3,
        ph: 'IV: surface material of track (ECF from 6a; not height). CV (any 2): height of ramp, mass of car, length of ramp, wheel material.',
      },
      {
        label: 'd',
        text: '**Describe** the data you will collect. Include the number of different conditions of the IV and any relevant features of your plan.',
        marks: 2,
        ph: 'Test at least 5 different surface materials/textures. At least 2 trials per surface. Record both IV (surface) and DV (distance) for each trial.',
      },
    ],
  },

  // ── Q7: Cone Drag Device Investigation (9 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Cone Drag Device — Stopping Distance Investigation',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates how the base radius of a cone-shaped drag device attached to a toy trolley affects the stopping distance of the trolley. The trolley is launched with the same force each time.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" font-family="Arial, Helvetica, sans-serif"> <defs> <linearGradient id="bench7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#efe6d6"/> <stop offset="100%" stop-color="#ddd0b8"/> </linearGradient> <linearGradient id="ruler7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#ffe08a"/> <stop offset="100%" stop-color="#f3c64b"/> </linearGradient> <linearGradient id="body7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#e8c98c"/> <stop offset="55%" stop-color="#cfa65f"/> <stop offset="100%" stop-color="#a87e3e"/> </linearGradient> <linearGradient id="cone7" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#5b8aaf"/> <stop offset="50%" stop-color="#2c5c80"/> <stop offset="100%" stop-color="#143046"/> </linearGradient> <radialGradient id="coneBase7" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#5b8aaf"/> <stop offset="100%" stop-color="#1d3850"/> </radialGradient> <radialGradient id="wheel7" cx="40%" cy="38%" r="62%"> <stop offset="0%" stop-color="#ff6b5e"/> <stop offset="100%" stop-color="#b32b1f"/> </radialGradient> <radialGradient id="hub7" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#6b7077"/> <stop offset="100%" stop-color="#2c3036"/> </radialGradient> <marker id="dimM7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#ffd24a"/> </marker> </defs> <rect x="0" y="0" width="760" height="380" fill="#ffffff"/> <!-- title bar --> <rect x="20" y="20" width="720" height="34" fill="#1d1d20"/> <text x="730" y="43" text-anchor="end" fill="#ffffff" font-size="17" font-weight="bold">Dynamic trolley experiment — cone drag device</text> <!-- bench surface --> <rect x="20" y="54" width="720" height="198" fill="url(#bench7)"/> <!-- ===== TROLLEY ===== --> <g> <rect x="120" y="196" width="180" height="36" rx="7" fill="url(#body7)" stroke="#8a6a34" stroke-width="1.5"/> <line x1="130" y1="214" x2="290" y2="214" stroke="#9a7942" stroke-width="1" opacity="0.5"/> <path d="M134 206 q70 -4 150 2" stroke="#b89455" stroke-width="0.8" fill="none" opacity="0.5"/> </g> <!-- mast --> <rect x="232" y="120" width="6" height="80" fill="#5a4a2c"/> <!-- CONE drag device facing backward (apex left, base right): triangle silhouette --> <g> <!-- cone body: apex at (200, 150), base at x=280 vertical line --> <polygon points="200,150 280,108 280,192" fill="url(#cone7)" stroke="#0e1d2a" stroke-width="1.6"/> <!-- base ellipse (open end on the right) --> <ellipse cx="280" cy="150" rx="10" ry="42" fill="url(#coneBase7)" stroke="#0e1d2a" stroke-width="1.4"/> <!-- shading highlight --> <polygon points="200,150 280,112 280,128" fill="#ffffff" opacity="0.12"/> </g> <!-- radius R dimension (from cone axis to top of base ellipse) --> <line x1="280" y1="150" x2="280" y2="108" stroke="#ffd24a" stroke-width="1.6" marker-end="url(#dimM7)"/> <circle cx="280" cy="150" r="2.5" fill="#ffd24a"/> <rect x="288" y="116" width="26" height="20" rx="3" fill="#1d1d20"/> <text x="301" y="130" text-anchor="middle" fill="#ffd24a" font-size="13" font-weight="bold" font-style="italic">R</text> <!-- wheels --> <g> <circle cx="150" cy="234" r="17" fill="url(#wheel7)" stroke="#7d1f15" stroke-width="1.5"/> <circle cx="150" cy="234" r="6" fill="url(#hub7)"/> <circle cx="270" cy="234" r="17" fill="url(#wheel7)" stroke="#7d1f15" stroke-width="1.5"/> <circle cx="270" cy="234" r="6" fill="url(#hub7)"/> </g> <!-- release mechanism --> <rect x="96" y="206" width="26" height="18" rx="3" fill="#4a4f55" stroke="#2c3036" stroke-width="1.2"/> <rect x="104" y="190" width="6" height="18" rx="2" fill="#8a9097" stroke="#5a6066"/> <circle cx="107" cy="188" r="5" fill="#c0392b" stroke="#7d1f15"/> <line x1="107" y1="183" x2="60" y2="120" stroke="#c0392b" stroke-width="1.2"/> <rect x="34" y="86" width="166" height="34" rx="5" fill="#2b2f35"/> <text x="44" y="101" fill="#ffffff" font-size="12">Click to push down</text> <text x="44" y="116" fill="#ffffff" font-size="12">release mechanism</text> <!-- ===== RULER ===== --> <rect x="60" y="252" width="660" height="34" fill="url(#ruler7)" stroke="#cda430" stroke-width="1.5"/> <g stroke="#2c2a24"> <line x1="80" y1="252" x2="80" y2="278" stroke-width="1.6"/> <line x1="105" y1="252" x2="105" y2="266" stroke-width="0.9"/> <line x1="130" y1="252" x2="130" y2="266" stroke-width="0.9"/> <line x1="155" y1="252" x2="155" y2="266" stroke-width="0.9"/> <line x1="180" y1="252" x2="180" y2="266" stroke-width="0.9"/> <line x1="205" y1="252" x2="205" y2="278" stroke-width="1.6"/> <line x1="230" y1="252" x2="230" y2="266" stroke-width="0.9"/> <line x1="255" y1="252" x2="255" y2="266" stroke-width="0.9"/> <line x1="280" y1="252" x2="280" y2="266" stroke-width="0.9"/> <line x1="305" y1="252" x2="305" y2="266" stroke-width="0.9"/> <line x1="330" y1="252" x2="330" y2="278" stroke-width="1.6"/> <line x1="355" y1="252" x2="355" y2="266" stroke-width="0.9"/> <line x1="380" y1="252" x2="380" y2="266" stroke-width="0.9"/> <line x1="405" y1="252" x2="405" y2="266" stroke-width="0.9"/> <line x1="430" y1="252" x2="430" y2="266" stroke-width="0.9"/> <line x1="455" y1="252" x2="455" y2="278" stroke-width="1.6"/> <line x1="480" y1="252" x2="480" y2="266" stroke-width="0.9"/> <line x1="505" y1="252" x2="505" y2="266" stroke-width="0.9"/> <line x1="530" y1="252" x2="530" y2="266" stroke-width="0.9"/> <line x1="555" y1="252" x2="555" y2="266" stroke-width="0.9"/> <line x1="580" y1="252" x2="580" y2="278" stroke-width="1.6"/> <line x1="605" y1="252" x2="605" y2="266" stroke-width="0.9"/> <line x1="630" y1="252" x2="630" y2="266" stroke-width="0.9"/> <line x1="655" y1="252" x2="655" y2="266" stroke-width="0.9"/> <line x1="680" y1="252" x2="680" y2="266" stroke-width="0.9"/> <line x1="705" y1="252" x2="705" y2="278" stroke-width="1.6"/> </g> <g fill="#c0392b" font-size="13" font-weight="bold" text-anchor="middle"> <text x="80" y="298">0.0</text> </g> <g fill="#2c2a24" font-size="13" text-anchor="middle"> <text x="205" y="298">5</text> <text x="330" y="298">10</text> <text x="455" y="298">15</text> <text x="580" y="298">20</text> <text x="705" y="298">25</text> </g> <text x="380" y="326" text-anchor="middle" fill="#2c3e50" font-size="13">Distance scale / m</text> </svg>' },
      caption: 'A toy trolley fitted with a cone-shaped drag device of base radius R is launched along a metre scale; read the start and stopping positions to find the stopping distance.',
    },
    tags: { unit: 'forces-interactions', topics: ['drag', 'friction', 'stopping distance', 'data processing', 'proportionality'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student clicks the release mechanism. Take appropriate measurements and **determine** the stopping distance of the trolley.',
        marks: 3,
        ph: 'Read start and end positions. Stopping distance = final − initial ≈ 7.32 m (accept 7.28–7.36 m). Include unit: m.',
      },
      {
        label: 'b',
        text: 'The student records the stopping distance for several different cone radii. **Create a suitable table** to record the data collected, including appropriate column headings with units, data in order, and consistent decimal places.',
        marks: 5,
        ph: 'Table: Column 1 = Radius of cone / m. Column 2 = Stopping distance / m. Units in headers only. Data in ascending or descending order. Consistent decimal places. Include result from 7a for appropriate radius.',
      },
      {
        label: 'c',
        text: 'The student claims that a scatter graph with a line of best fit is the most appropriate way to present this data.\n\n**Justify** this choice.',
        marks: 1,
        ph: 'The data is continuous (both cone radius and stopping distance are continuous numerical variables). A scatter graph with a line of best fit allows the mathematical relationship to be identified and anomalous results to be spotted.',
      },
    ],
  },

  // ── Q7 continued: Cone Drag Data Analysis (7 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Cone Drag Data Analysis',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student analyses their stopping distance data further by plotting four graphs: Graph 1 (stopping distance vs radius R), Graph 2 (stopping distance vs R²), Graph 3 (stopping distance vs 1/R), Graph 4 (stopping distance vs 1/R²).',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816 600" font-family="Arial, Helvetica, sans-serif"><rect width="816" height="600" fill="#ffffff"/><g transform="translate(0,0)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="141.0" y1="30.0" x2="141.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="224.0" y1="30.0" x2="224.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="307.0" y1="30.0" x2="307.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="141.0" y1="260.0" x2="141.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="141.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.05</text><line x1="224.0" y1="260.0" x2="224.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="224.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.1</text><line x1="307.0" y1="260.0" x2="307.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="307.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.15</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.2</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">R / m</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 1: stopping distance vs R</text><polyline points="107.8,168.0 109.5,171.0 111.1,173.8 112.8,176.4 114.5,178.9 116.2,181.2 117.8,183.4 119.5,185.5 121.2,187.5 122.9,189.4 124.5,191.1 126.2,192.8 127.9,194.4 129.6,196.0 131.2,197.4 132.9,198.8 134.6,200.2 136.3,201.5 137.9,202.7 139.6,203.9 141.3,205.0 143.0,206.1 144.6,207.1 146.3,208.1 148.0,209.1 149.6,210.0 151.3,210.9 153.0,211.8 154.7,212.6 156.3,213.4 158.0,214.2 159.7,214.9 161.4,215.7 163.0,216.4 164.7,217.1 166.4,217.7 168.1,218.4 169.7,219.0 171.4,219.6 173.1,220.2 174.8,220.8 176.4,221.3 178.1,221.9 179.8,222.4 181.5,222.9 183.1,223.4 184.8,223.9 186.5,224.3 188.1,224.8 189.8,225.2 191.5,225.7 193.2,226.1 194.8,226.5 196.5,226.9 198.2,227.3 199.9,227.7 201.5,228.1 203.2,228.4 204.9,228.8 206.6,229.2 208.2,229.5 209.9,229.8 211.6,230.2 213.3,230.5 214.9,230.8 216.6,231.1 218.3,231.4 220.0,231.7 221.6,232.0 223.3,232.3 225.0,232.6 226.7,232.8 228.3,233.1 230.0,233.4 231.7,233.6 233.3,233.9 235.0,234.1 236.7,234.4 238.4,234.6 240.0,234.8 241.7,235.1 243.4,235.3 245.1,235.5 246.7,235.7 248.4,235.9 250.1,236.1 251.8,236.4 253.4,236.6 255.1,236.8 256.8,237.0 258.5,237.1 260.1,237.3 261.8,237.5 263.5,237.7 265.2,237.9 266.8,238.1 268.5,238.2 270.2,238.4 271.8,238.6 273.5,238.7 275.2,238.9 276.9,239.1 278.5,239.2 280.2,239.4 281.9,239.5 283.6,239.7 285.2,239.8 286.9,240.0 288.6,240.1 290.3,240.3 291.9,240.4 293.6,240.6 295.3,240.7 297.0,240.8 298.6,241.0 300.3,241.1 302.0,241.2 303.7,241.3 305.3,241.5 307.0,241.6" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="103.8" y1="164.0" x2="111.8" y2="172.0" stroke="#0b7285" stroke-width="1.3"/><line x1="103.8" y1="172.0" x2="111.8" y2="164.0" stroke="#0b7285" stroke-width="1.3"/><line x1="116.2" y1="182.4" x2="124.2" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="116.2" y1="190.4" x2="124.2" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="200.8" x2="145.0" y2="208.8" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="208.8" x2="145.0" y2="200.8" stroke="#0b7285" stroke-width="1.3"/><line x1="178.5" y1="219.2" x2="186.5" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="178.5" y1="227.2" x2="186.5" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="253.2" y1="233.0" x2="261.2" y2="241.0" stroke="#0b7285" stroke-width="1.3"/><line x1="253.2" y1="241.0" x2="261.2" y2="233.0" stroke="#0b7285" stroke-width="1.3"/><line x1="303.0" y1="237.6" x2="311.0" y2="245.6" stroke="#0b7285" stroke-width="1.3"/><line x1="303.0" y1="245.6" x2="311.0" y2="237.6" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(408,0)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="124.4" y1="30.0" x2="124.4" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="190.8" y1="30.0" x2="190.8" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="257.2" y1="30.0" x2="257.2" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="323.6" y1="30.0" x2="323.6" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="124.4" y1="260.0" x2="124.4" y2="264.0" stroke="#333" stroke-width="1"/><text x="124.4" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.005</text><line x1="190.8" y1="260.0" x2="190.8" y2="264.0" stroke="#333" stroke-width="1"/><text x="190.8" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.01</text><line x1="257.2" y1="260.0" x2="257.2" y2="264.0" stroke="#333" stroke-width="1"/><text x="257.2" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.015</text><line x1="323.6" y1="260.0" x2="323.6" y2="264.0" stroke="#333" stroke-width="1"/><text x="323.6" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.02</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.025</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">R² / m²</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 2: stopping distance vs R²</text><polyline points="70.0,168.0 70.8,171.0 71.6,173.8 72.5,176.4 73.4,178.9 74.3,181.2 75.3,183.4 76.2,185.5 77.2,187.5 78.3,189.4 79.3,191.1 80.4,192.8 81.5,194.4 82.7,196.0 83.8,197.4 85.0,198.8 86.3,200.2 87.5,201.5 88.8,202.7 90.1,203.9 91.4,205.0 92.8,206.1 94.2,207.1 95.6,208.1 97.0,209.1 98.5,210.0 100.0,210.9 101.5,211.8 103.0,212.6 104.6,213.4 106.2,214.2 107.8,214.9 109.5,215.7 111.2,216.4 112.9,217.1 114.6,217.7 116.4,218.4 118.2,219.0 120.0,219.6 121.8,220.2 123.7,220.8 125.6,221.3 127.5,221.9 129.5,222.4 131.4,222.9 133.5,223.4 135.5,223.9 137.5,224.3 139.6,224.8 141.7,225.2 143.9,225.7 146.1,226.1 148.2,226.5 150.5,226.9 152.7,227.3 155.0,227.7 157.3,228.1 159.6,228.4 162.0,228.8 164.4,229.2 166.8,229.5 169.2,229.8 171.7,230.2 174.2,230.5 176.7,230.8 179.2,231.1 181.8,231.4 184.4,231.7 187.0,232.0 189.7,232.3 192.4,232.6 195.1,232.8 197.8,233.1 200.6,233.4 203.4,233.6 206.2,233.9 209.0,234.1 211.9,234.4 214.8,234.6 217.7,234.8 220.7,235.1 223.6,235.3 226.6,235.5 229.7,235.7 232.7,235.9 235.8,236.1 238.9,236.4 242.1,236.6 245.2,236.8 248.4,237.0 251.7,237.1 254.9,237.3 258.2,237.5 261.5,237.7 264.8,237.9 268.2,238.1 271.5,238.2 275.0,238.4 278.4,238.6 281.9,238.7 285.3,238.9 288.9,239.1 292.4,239.2 296.0,239.4 299.6,239.5 303.2,239.7 306.9,239.8 310.5,240.0 314.2,240.1 318.0,240.3 321.7,240.4 325.5,240.6 329.3,240.7 333.2,240.8 337.1,241.0 340.9,241.1 344.9,241.2 348.8,241.3 352.8,241.5 356.8,241.6" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="66.0" y1="164.0" x2="74.0" y2="172.0" stroke="#0b7285" stroke-width="1.3"/><line x1="66.0" y1="172.0" x2="74.0" y2="164.0" stroke="#0b7285" stroke-width="1.3"/><line x1="72.7" y1="182.4" x2="80.7" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="72.7" y1="190.4" x2="80.7" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="87.2" y1="200.8" x2="95.2" y2="208.8" stroke="#0b7285" stroke-width="1.3"/><line x1="87.2" y1="208.8" x2="95.2" y2="200.8" stroke="#0b7285" stroke-width="1.3"/><line x1="128.7" y1="219.2" x2="136.7" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="128.7" y1="227.2" x2="136.7" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="245.2" y1="233.0" x2="253.2" y2="241.0" stroke="#0b7285" stroke-width="1.3"/><line x1="245.2" y1="241.0" x2="253.2" y2="233.0" stroke="#0b7285" stroke-width="1.3"/><line x1="352.8" y1="237.6" x2="360.8" y2="245.6" stroke="#0b7285" stroke-width="1.3"/><line x1="352.8" y1="245.6" x2="360.8" y2="237.6" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(0,300)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="141.0" y1="30.0" x2="141.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="224.0" y1="30.0" x2="224.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="307.0" y1="30.0" x2="307.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="141.0" y1="260.0" x2="141.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="141.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">10</text><line x1="224.0" y1="260.0" x2="224.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="224.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">20</text><line x1="307.0" y1="260.0" x2="307.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="307.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">30</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">40</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">1/R / m⁻¹</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 3: stopping distance vs 1/R</text><line x1="58.0" y1="260.0" x2="390.0" y2="149.6" stroke="#0b7285" stroke-width="2.0"/><line x1="330.7" y1="164.0" x2="338.7" y2="172.0" stroke="#0b7285" stroke-width="1.3"/><line x1="330.7" y1="172.0" x2="338.7" y2="164.0" stroke="#0b7285" stroke-width="1.3"/><line x1="275.3" y1="182.4" x2="283.3" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="275.3" y1="190.4" x2="283.3" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="220.0" y1="200.8" x2="228.0" y2="208.8" stroke="#0b7285" stroke-width="1.3"/><line x1="220.0" y1="208.8" x2="228.0" y2="200.8" stroke="#0b7285" stroke-width="1.3"/><line x1="164.7" y1="219.2" x2="172.7" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="164.7" y1="227.2" x2="172.7" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="123.2" y1="233.0" x2="131.2" y2="241.0" stroke="#0b7285" stroke-width="1.3"/><line x1="123.2" y1="241.0" x2="131.2" y2="233.0" stroke="#0b7285" stroke-width="1.3"/><line x1="109.3" y1="237.6" x2="117.3" y2="245.6" stroke="#0b7285" stroke-width="1.3"/><line x1="109.3" y1="245.6" x2="117.3" y2="237.6" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(408,300)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="141.0" y1="30.0" x2="141.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="224.0" y1="30.0" x2="224.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="307.0" y1="30.0" x2="307.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="141.0" y1="260.0" x2="141.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="141.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">300</text><line x1="224.0" y1="260.0" x2="224.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="224.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">600</text><line x1="307.0" y1="260.0" x2="307.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="307.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">900</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">1200</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">1/R² / m⁻²</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 4: stopping distance vs 1/R²</text><polyline points="70.3,241.6 72.8,239.8 75.3,238.2 77.7,236.7 80.2,235.3 82.7,233.9 85.2,232.6 87.7,231.4 90.1,230.3 92.6,229.1 95.1,228.0 97.6,227.0 100.1,226.0 102.5,225.0 105.0,224.0 107.5,223.1 110.0,222.2 112.5,221.3 114.9,220.4 117.4,219.6 119.9,218.7 122.4,217.9 124.9,217.1 127.3,216.3 129.8,215.5 132.3,214.8 134.8,214.0 137.3,213.3 139.7,212.6 142.2,211.8 144.7,211.1 147.2,210.4 149.7,209.8 152.1,209.1 154.6,208.4 157.1,207.8 159.6,207.1 162.1,206.5 164.5,205.8 167.0,205.2 169.5,204.6 172.0,204.0 174.5,203.4 176.9,202.8 179.4,202.2 181.9,201.6 184.4,201.0 186.9,200.4 189.3,199.9 191.8,199.3 194.3,198.7 196.8,198.2 199.3,197.6 201.7,197.1 204.2,196.6 206.7,196.0 209.2,195.5 211.7,195.0 214.1,194.4 216.6,193.9 219.1,193.4 221.6,192.9 224.1,192.4 226.5,191.9 229.0,191.4 231.5,190.9 234.0,190.4 236.5,189.9 238.9,189.4 241.4,188.9 243.9,188.5 246.4,188.0 248.9,187.5 251.3,187.0 253.8,186.6 256.3,186.1 258.8,185.7 261.3,185.2 263.7,184.7 266.2,184.3 268.7,183.8 271.2,183.4 273.7,182.9 276.1,182.5 278.6,182.1 281.1,181.6 283.6,181.2 286.0,180.8 288.5,180.3 291.0,179.9 293.5,179.5 296.0,179.1 298.4,178.6 300.9,178.2 303.4,177.8 305.9,177.4 308.4,177.0 310.8,176.6 313.3,176.2 315.8,175.7 318.3,175.3 320.8,174.9 323.2,174.5 325.7,174.1 328.2,173.7 330.7,173.4 333.2,173.0 335.6,172.6 338.1,172.2 340.6,171.8 343.1,171.4 345.6,171.0 348.0,170.6 350.5,170.3 353.0,169.9 355.5,169.5 358.0,169.1 360.4,168.7 362.9,168.4 365.4,168.0" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="361.4" y1="164.0" x2="369.4" y2="172.0" stroke="#0b7285" stroke-width="1.3"/><line x1="361.4" y1="172.0" x2="369.4" y2="164.0" stroke="#0b7285" stroke-width="1.3"/><line x1="250.7" y1="182.4" x2="258.7" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="250.7" y1="190.4" x2="258.7" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="164.7" y1="200.8" x2="172.7" y2="208.8" stroke="#0b7285" stroke-width="1.3"/><line x1="164.7" y1="208.8" x2="172.7" y2="200.8" stroke="#0b7285" stroke-width="1.3"/><line x1="103.2" y1="219.2" x2="111.2" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="103.2" y1="227.2" x2="111.2" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="73.2" y1="233.0" x2="81.2" y2="241.0" stroke="#0b7285" stroke-width="1.3"/><line x1="73.2" y1="241.0" x2="81.2" y2="233.0" stroke="#0b7285" stroke-width="1.3"/><line x1="66.3" y1="237.6" x2="74.3" y2="245.6" stroke="#0b7285" stroke-width="1.3"/><line x1="66.3" y1="245.6" x2="74.3" y2="237.6" stroke="#0b7285" stroke-width="1.3"/></g><line x1="408" y1="0" x2="408" y2="600" stroke="#bbb" stroke-width="1"/><line x1="0" y1="300" x2="816" y2="300" stroke="#bbb" stroke-width="1"/></svg>' },
      caption: 'Four graphs of the same stopping-distance data. Graph 1 (vs R) and Graph 2 (vs R\u00b2) are decreasing curves. Graph 3 (vs 1/R) is a straight line through the origin \u2014 so d \u221d 1/R. Graph 4 (vs 1/R\u00b2) is a curve (not a straight line through the origin), so d is NOT \u221d 1/R\u00b2.',
    },
    tags: { unit: 'forces-interactions', topics: ['data processing', 'proportionality', 'inverse relationship', 'drag'], level: 'advanced' },
    tasks: [
      {
        label: 'd',
        text: 'The student hypothesised: *"As the radius of the cone drag device increases, the stopping distance will decrease because drag force increases."*\n\n**Describe** the relationship shown between stopping distance and cone radius in Graph 1.',
        marks: 2,
        ph: 'As cone radius increases, stopping distance decreases. The relationship is inverse (not linear, not proportional).',
      },
      {
        label: 'e',
        text: '**Deduce** the relationship between the variables using the four graphs.',
        marks: 1,
        ph: 'Stopping distance is directly proportional to 1/R. Graph 3 (stopping distance vs 1/R) shows a straight line through the origin → d ∝ 1/R.',
      },
      {
        label: 'f',
        text: '**Explain** why increasing the cone radius reduces the stopping distance.',
        marks: 3,
        ph: 'A larger cone radius gives a larger cross-sectional area. Greater area → more air resistance/drag. Greater drag removes kinetic energy from the trolley faster → trolley decelerates more quickly → stops in a shorter distance. Larger area → more air particle collisions per unit time → greater retarding force.',
      },
      {
        label: 'g',
        text: 'Graph 4 shows stopping distance against 1/R². **Evaluate** the validity of the hypothesis that stopping distance is inversely proportional to R.',
        marks: 2,
        ph: 'Graph 4 (vs 1/R²) is NOT a straight line through origin; Graph 3 (vs 1/R) IS a straight line through origin → d ∝ 1/R. Direction of hypothesis (distance decreases as radius increases) IS supported. But the exact relationship is d ∝ 1/R (not d ∝ 1/R²).',
      },
    ],
  },

  // ── Q9: Prosthetic Materials — Stainless Steel vs Carbon Fibre (7 marks, Criterion C) ──
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Prosthetic Limb Materials — Stainless Steel vs Carbon Fibre',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'When a force is applied to a material it can cause a change in the length of that material. Young\'s modulus (E) is a measure of how much the material can be changed. Stiffer or more rigid materials have a bigger value of E. The table shows data for some materials used in prostheses.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Material', 'E / GPa', 'Density / g cm\u207b\u00b3'],
        rows: [
          ['Material Q (Nylon)', 3.0, 1.15],
          ['Bone', 15, 1.75],
          ['Stainless steel', 200, 7.90],
          ['Carbon fibre', 40, 1.60],
        ],
      },
      caption: 'Young\u2019s modulus (E) and density for materials used in prostheses.',
    },
    tags: { unit: 'forces-interactions', topics: ['materials', 'Young\'s modulus', 'density', 'prosthetics'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the name of the most rigid material in the table.',
        marks: 1,
        ph: 'Stainless steel (highest Young\'s modulus E = 200 GPa in the table).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why Material Q (nylon/polyamide) might not be ideal for use in a high-performance prosthetic limb.',
        marks: 1,
        ph: 'Material Q has low stiffness (E = 3.0 GPa) — it would flex/deform too much under the high forces encountered in athletic competition. OR: it may fatigue over repeated cycles.',
      },
      {
        label: 'c',
        text: '**Compare** the properties of stainless steel with carbon fibre composite, and **evaluate** which material would be more suitable for a high-performance prosthetic running blade. Refer to density, stiffness (Young\'s modulus), and how each property affects the function of a prosthesis.',
        marks: 5,
        ph: 'Stainless steel: E = 200 GPa (very stiff) but density = 7.9 g/cm³ (very heavy). Carbon fibre: E = 40 GPa (very stiff for purpose) but density = 1.60 g/cm³ (much lighter). Both are stiff enough for athletic use. Stainless steel is far heavier → requires much more energy to lift during running → poor athletic performance. Carbon fibre: sufficient stiffness, much lower mass → better for running prosthesis. Recommendation: carbon fibre composite is more suitable for high-performance athletic prosthetic.',
      },
    ],
  },

  // ── Q10: Gene Editing in Sport — Ethics Evaluation (11 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Gene Editing Technology in Sport',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Gene editing technologies such as CRISPR allow scientists to modify the DNA of living organisms. Some researchers are investigating whether gene editing could be used to enhance athletic performance by modifying muscle characteristics or oxygen-carrying capacity.',
    tags: { unit: 'forces-interactions', topics: ['gene editing', 'ethics', 'sport', 'technology', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the implications of using gene editing to enhance athletic performance. In your answer, consider:\n- the **ethical** implications of genetically modifying athletes\n- the **social** implications for sporting competition\n- a **concluding appraisal**',
        marks: 11,
        ph: 'Ethical: gene editing permanently alters DNA → irreversible changes to a person\'s genome → consent issues; potential harm if unintended mutations occur; "designer athletes" debate. Performance advantage: genetically modified athletes could have permanent, undetectable advantages → renders competition unfair; unlike doping, no drug test can detect DNA modifications. Social: pressure on athletes to undergo risky procedures to compete; athletes from wealthy countries with access to gene editing technology have unfair advantage → global inequality. May improve health/treatment of genetic diseases (dual use). Concluding appraisal: gene editing for performance enhancement is deeply unethical and should be prohibited; however, therapeutic gene editing for treating genuine medical conditions should remain permissible under regulation.',
      },
    ],
  },

  // ── Q11: Rhinoceros Prosthetic Foot — Pressure (7 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Pressure Calculation — Rhinoceros Prosthesis',
    marks: 7,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A rhinoceros at a wildlife sanctuary was fitted with a prosthetic foot after losing a leg to a poaching trap. The rhinoceros has a mass of 3000 kg and stands on four legs. Gravitational field strength g = 10 ms⁻². Each foot has a contact area of 0.04 m² with the ground.',
    tags: { unit: 'pressure', topics: ['pressure', 'force', 'area', 'prosthetics design'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the pressure that the rhinoceros exerts on the ground through one foot.',
        marks: 2,
        ph: 'Weight = mg = 3000 × 10 = 30 000 N. Force per foot = 30 000 / 4 = 7 500 N. Pressure = F/A = 7 500 / 0.04 = 187 500 Pa.',
      },
      {
        label: 'b',
        text: '**Explain** how the design of the prosthesis takes account of pressure when:\n1. Creating contact with the ground\n2. Connecting to the rhinoceros\'s limb',
        marks: 5,
        ph: 'Ground contact: contact area of the prosthesis with the ground should be the same as the natural rhino foot. Large area → low pressure → rhino foot will not sink into soft ground. P = F/A; large A → small P. Limb connection: the prosthesis must connect to the rhino\'s remaining limb stump over as large an area as possible. Distributing the 7500 N force over a large area → lower pressure on the skin and tissue → comfortable, reduces risk of pressure sores and injury.',
      },
    ],
  },
]
