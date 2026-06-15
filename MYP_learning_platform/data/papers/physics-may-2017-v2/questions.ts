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
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" font-family="Arial, Helvetica, sans-serif"> <defs> <radialGradient id="spaceL" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#1c1620"/> <stop offset="100%" stop-color="#0a0710"/> </radialGradient> <radialGradient id="spaceR" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#101a2e"/> <stop offset="100%" stop-color="#05080f"/> </radialGradient> <radialGradient id="redStar" cx="42%" cy="40%" r="65%"> <stop offset="0%" stop-color="#ffd690"/> <stop offset="30%" stop-color="#ff8a40"/> <stop offset="65%" stop-color="#d8431e"/> <stop offset="100%" stop-color="#771c08"/> </radialGradient> <radialGradient id="redGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#ff7a2a" stop-opacity="0.6"/> <stop offset="55%" stop-color="#e84d12" stop-opacity="0.2"/> <stop offset="100%" stop-color="#e84d12" stop-opacity="0"/> </radialGradient> <radialGradient id="blueStar" cx="44%" cy="40%" r="66%"> <stop offset="0%" stop-color="#ffffff"/> <stop offset="30%" stop-color="#d2ecff"/> <stop offset="62%" stop-color="#75bef0"/> <stop offset="100%" stop-color="#2563b8"/> </radialGradient> <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#a3d5ff" stop-opacity="0.6"/> <stop offset="55%" stop-color="#4a90e2" stop-opacity="0.2"/> <stop offset="100%" stop-color="#4a90e2" stop-opacity="0"/> </radialGradient> <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"> <feGaussianBlur stdDeviation="3.2"/> </filter> </defs> <!-- ===== LEFT : Mu Cephei (red supergiant — huge & cool) ===== --> <rect x="20" y="20" width="320" height="300" rx="10" fill="url(#spaceL)" stroke="#2a2230" stroke-width="1.5"/> <g fill="#fff"> <circle cx="70" cy="55" r="1.4" opacity="0.8"/><circle cx="300" cy="70" r="1.1" opacity="0.6"/> <circle cx="55" cy="240" r="1.2" opacity="0.7"/><circle cx="295" cy="270" r="1.5" opacity="0.8"/> <circle cx="115" cy="290" r="1" opacity="0.5"/><circle cx="250" cy="50" r="1.3" opacity="0.7"/> <circle cx="40" cy="160" r="1" opacity="0.5"/><circle cx="315" cy="180" r="1.2" opacity="0.6"/> </g> <!-- huge cool red supergiant --> <circle cx="180" cy="170" r="135" fill="url(#redGlow)" filter="url(#soft)"/> <circle cx="180" cy="170" r="108" fill="url(#redStar)"/> <g stroke="#ff8a3c" stroke-width="3" fill="none" opacity="0.8" stroke-linecap="round"> <path d="M108 100 q-18 -22 4 -34"/> <path d="M255 110 q24 -16 14 -42"/> <path d="M260 232 q28 14 16 44"/> <path d="M100 235 q-22 16 -8 44"/> </g> <g fill="#fff2c8" opacity="0.55"> <circle cx="148" cy="148" r="3.2"/><circle cx="206" cy="188" r="4"/><circle cx="172" cy="216" r="2.6"/> <circle cx="218" cy="142" r="2.3"/> </g> <text x="180" y="306" text-anchor="middle" fill="#ffd9a8" font-size="15" font-weight="bold">Mu Cephei — red supergiant (cool)</text> <!-- ===== RIGHT : hot blue star ===== --> <rect x="380" y="20" width="320" height="300" rx="10" fill="url(#spaceR)" stroke="#1a2436" stroke-width="1.5"/> <g fill="#fff"> <circle cx="430" cy="60" r="1.3" opacity="0.8"/><circle cx="660" cy="75" r="1.1" opacity="0.6"/> <circle cx="415" cy="245" r="1.2" opacity="0.7"/><circle cx="655" cy="265" r="1.4" opacity="0.8"/> <circle cx="480" cy="295" r="1" opacity="0.5"/><circle cx="610" cy="48" r="1.3" opacity="0.7"/> <circle cx="400" cy="165" r="1" opacity="0.5"/><circle cx="678" cy="185" r="1.2" opacity="0.6"/> </g> <circle cx="540" cy="170" r="120" fill="url(#blueGlow)" filter="url(#soft)"/> <circle cx="540" cy="170" r="80" fill="url(#blueStar)"/> <g stroke="#cfeaff" stroke-width="2" fill="none" opacity="0.55" stroke-linecap="round"> <path d="M540 78 v-16"/><path d="M540 262 v16"/> <path d="M448 170 h-16"/><path d="M632 170 h16"/> <path d="M476 104 l-12 -12"/><path d="M604 236 l12 12"/> </g> <g fill="#ffffff" opacity="0.55"> <circle cx="514" cy="152" r="3.5"/><circle cx="560" cy="184" r="4"/><circle cx="538" cy="204" r="2.4"/> </g> <text x="540" y="306" text-anchor="middle" fill="#bfe0ff" font-size="15" font-weight="bold">Hot blue star (e.g. 25,000 °C)</text> </svg>' },
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
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 720" font-family="Arial, Helvetica, sans-serif"><rect width="408" height="720" fill="#ffffff"/><g transform="translate(0,0)"><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="135.0" y1="18.0" x2="135.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="212.0" y1="18.0" x2="212.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="289.0" y1="18.0" x2="289.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="366.0" y1="18.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="226.0" x2="366.0" y2="226.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="174.0" x2="366.0" y2="174.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="366.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="70.0" x2="366.0" y2="70.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="366.0" y2="18.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="58.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="58.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="135.0" y1="278.0" x2="135.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="135.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0.05</text><line x1="212.0" y1="278.0" x2="212.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="212.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0.1</text><line x1="289.0" y1="278.0" x2="289.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="289.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0.15</text><line x1="366.0" y1="278.0" x2="366.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="366.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0.2</text><line x1="54.0" y1="278.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1"/><text x="51.0" y="281.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="226.0" x2="58.0" y2="226.0" stroke="#333" stroke-width="1"/><text x="51.0" y="229.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="174.0" x2="58.0" y2="174.0" stroke="#333" stroke-width="1"/><text x="51.0" y="177.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="70.0" x2="58.0" y2="70.0" stroke="#333" stroke-width="1"/><text x="51.0" y="73.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="18.0" x2="58.0" y2="18.0" stroke="#333" stroke-width="1"/><text x="51.0" y="21.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="212.0" y="318.0" font-size="11" fill="#222" text-anchor="middle">R / m</text><text x="14" y="148.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 148.0)">Stopping distance / m</text><text x="212.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Stopping distance against cone radius</text><path d="M212.0,59.6 C214.6,62.9 222.3,73.4 227.4,79.5 C232.5,85.5 237.7,90.9 242.8,96.0 C247.9,101.1 253.1,105.7 258.2,110.0 C263.3,114.3 268.5,118.3 273.6,122.0 C278.7,125.7 283.9,129.1 289.0,132.4 C294.1,135.6 299.3,138.6 304.4,141.5 C309.5,144.4 314.7,147.0 319.8,149.5 C324.9,152.1 330.1,154.4 335.2,156.7 C340.3,158.9 348.0,162.0 350.6,163.1" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="208.0" y1="55.6" x2="216.0" y2="63.6" stroke="#0b7285" stroke-width="1.3"/><line x1="208.0" y1="63.6" x2="216.0" y2="55.6" stroke="#0b7285" stroke-width="1.3"/><line x1="223.4" y1="75.5" x2="231.4" y2="83.5" stroke="#0b7285" stroke-width="1.3"/><line x1="223.4" y1="83.5" x2="231.4" y2="75.5" stroke="#0b7285" stroke-width="1.3"/><line x1="238.8" y1="92.0" x2="246.8" y2="100.0" stroke="#0b7285" stroke-width="1.3"/><line x1="238.8" y1="100.0" x2="246.8" y2="92.0" stroke="#0b7285" stroke-width="1.3"/><line x1="254.2" y1="106.0" x2="262.2" y2="114.0" stroke="#0b7285" stroke-width="1.3"/><line x1="254.2" y1="114.0" x2="262.2" y2="106.0" stroke="#0b7285" stroke-width="1.3"/><line x1="269.6" y1="118.0" x2="277.6" y2="126.0" stroke="#0b7285" stroke-width="1.3"/><line x1="269.6" y1="126.0" x2="277.6" y2="118.0" stroke="#0b7285" stroke-width="1.3"/><line x1="285.0" y1="128.4" x2="293.0" y2="136.4" stroke="#0b7285" stroke-width="1.3"/><line x1="285.0" y1="136.4" x2="293.0" y2="128.4" stroke="#0b7285" stroke-width="1.3"/><line x1="300.4" y1="137.5" x2="308.4" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="300.4" y1="145.5" x2="308.4" y2="137.5" stroke="#0b7285" stroke-width="1.3"/><line x1="315.8" y1="145.5" x2="323.8" y2="153.5" stroke="#0b7285" stroke-width="1.3"/><line x1="315.8" y1="153.5" x2="323.8" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="331.2" y1="152.7" x2="339.2" y2="160.7" stroke="#0b7285" stroke-width="1.3"/><line x1="331.2" y1="160.7" x2="339.2" y2="152.7" stroke="#0b7285" stroke-width="1.3"/><line x1="346.6" y1="159.1" x2="354.6" y2="167.1" stroke="#0b7285" stroke-width="1.3"/><line x1="346.6" y1="167.1" x2="354.6" y2="159.1" stroke="#0b7285" stroke-width="1.3"/></g></g><g transform="translate(0,360)"><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="109.3" y1="18.0" x2="109.3" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="160.7" y1="18.0" x2="160.7" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="212.0" y1="18.0" x2="212.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="263.3" y1="18.0" x2="263.3" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="314.7" y1="18.0" x2="314.7" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="366.0" y1="18.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="226.0" x2="366.0" y2="226.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="174.0" x2="366.0" y2="174.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="366.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="70.0" x2="366.0" y2="70.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="366.0" y2="18.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="58.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="58.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="109.3" y1="278.0" x2="109.3" y2="282.0" stroke="#333" stroke-width="1"/><text x="109.3" y="294.0" font-size="10" fill="#333" text-anchor="middle">20</text><line x1="160.7" y1="278.0" x2="160.7" y2="282.0" stroke="#333" stroke-width="1"/><text x="160.7" y="294.0" font-size="10" fill="#333" text-anchor="middle">40</text><line x1="212.0" y1="278.0" x2="212.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="212.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">60</text><line x1="263.3" y1="278.0" x2="263.3" y2="282.0" stroke="#333" stroke-width="1"/><text x="263.3" y="294.0" font-size="10" fill="#333" text-anchor="middle">80</text><line x1="314.7" y1="278.0" x2="314.7" y2="282.0" stroke="#333" stroke-width="1"/><text x="314.7" y="294.0" font-size="10" fill="#333" text-anchor="middle">100</text><line x1="366.0" y1="278.0" x2="366.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="366.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">120</text><line x1="54.0" y1="278.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1"/><text x="51.0" y="281.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="226.0" x2="58.0" y2="226.0" stroke="#333" stroke-width="1"/><text x="51.0" y="229.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="174.0" x2="58.0" y2="174.0" stroke="#333" stroke-width="1"/><text x="51.0" y="177.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="70.0" x2="58.0" y2="70.0" stroke="#333" stroke-width="1"/><text x="51.0" y="73.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="18.0" x2="58.0" y2="18.0" stroke="#333" stroke-width="1"/><text x="51.0" y="21.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="212.0" y="318.0" font-size="11" fill="#222" text-anchor="middle">R⁻² / m⁻²</text><text x="14" y="148.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 148.0)">Stopping distance / m</text><text x="212.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Stopping distance against inverse of cone radius squared</text><polyline points="129.1,163.1 129.7,162.6 130.3,162.1 131.0,161.6 131.6,161.1 132.2,160.6 132.8,160.1 133.4,159.6 134.0,159.1 134.7,158.6 135.3,158.2 135.9,157.7 136.5,157.2 137.1,156.7 137.8,156.3 138.4,155.8 139.0,155.3 139.6,154.8 140.2,154.4 140.9,153.9 141.5,153.5 142.1,153.0 142.7,152.5 143.3,152.1 143.9,151.6 144.6,151.2 145.2,150.7 145.8,150.3 146.4,149.8 147.0,149.4 147.7,148.9 148.3,148.5 148.9,148.0 149.5,147.6 150.1,147.2 150.7,146.7 151.4,146.3 152.0,145.8 152.6,145.4 153.2,145.0 153.8,144.5 154.5,144.1 155.1,143.7 155.7,143.3 156.3,142.8 156.9,142.4 157.6,142.0 158.2,141.6 158.8,141.1 159.4,140.7 160.0,140.3 160.6,139.9 161.3,139.5 161.9,139.1 162.5,138.6 163.1,138.2 163.7,137.8 164.4,137.4 165.0,137.0 165.6,136.6 166.2,136.2 166.8,135.8 167.4,135.4 168.1,135.0 168.7,134.6 169.3,134.2 169.9,133.8 170.5,133.4 171.2,133.0 171.8,132.6 172.4,132.2 173.0,131.8 173.6,131.4 174.3,131.0 174.9,130.6 175.5,130.2 176.1,129.8 176.7,129.5 177.3,129.1 178.0,128.7 178.6,128.3 179.2,127.9 179.8,127.5 180.4,127.2 181.1,126.8 181.7,126.4 182.3,126.0 182.9,125.6 183.5,125.3 184.2,124.9 184.8,124.5 185.4,124.1 186.0,123.8 186.6,123.4 187.2,123.0 187.9,122.7 188.5,122.3 189.1,121.9 189.7,121.5 190.3,121.2 191.0,120.8 191.6,120.4 192.2,120.1 192.8,119.7 193.4,119.4 194.0,119.0 194.7,118.6 195.3,118.3 195.9,117.9 196.5,117.6 197.1,117.2 197.8,116.8 198.4,116.5 199.0,116.1 199.6,115.8 200.2,115.4 200.9,115.1 201.5,114.7 202.1,114.4 202.7,114.0 203.3,113.7 203.9,113.3 204.6,113.0 205.2,112.6 205.8,112.3 206.4,111.9 207.0,111.6 207.7,111.2 208.3,110.9 208.9,110.5 209.5,110.2 210.1,109.9 210.7,109.5 211.4,109.2 212.0,108.8 212.6,108.5 213.2,108.2 213.8,107.8 214.5,107.5 215.1,107.1 215.7,106.8 216.3,106.5 216.9,106.1 217.6,105.8 218.2,105.5 218.8,105.1 219.4,104.8 220.0,104.5 220.6,104.1 221.3,103.8 221.9,103.5 222.5,103.2 223.1,102.8 223.7,102.5 224.4,102.2 225.0,101.8 225.6,101.5 226.2,101.2 226.8,100.9 227.4,100.5 228.1,100.2 228.7,99.9 229.3,99.6 229.9,99.3 230.5,98.9 231.2,98.6 231.8,98.3 232.4,98.0 233.0,97.7 233.6,97.3 234.3,97.0 234.9,96.7 235.5,96.4 236.1,96.1 236.7,95.8 237.3,95.4 238.0,95.1 238.6,94.8 239.2,94.5 239.8,94.2 240.4,93.9 241.1,93.6 241.7,93.2 242.3,92.9 242.9,92.6 243.5,92.3 244.2,92.0 244.8,91.7 245.4,91.4 246.0,91.1 246.6,90.8 247.2,90.5 247.9,90.2 248.5,89.9 249.1,89.5 249.7,89.2 250.3,88.9 251.0,88.6 251.6,88.3 252.2,88.0 252.8,87.7 253.4,87.4 254.0,87.1 254.7,86.8 255.3,86.5 255.9,86.2 256.5,85.9 257.1,85.6 257.8,85.3 258.4,85.0 259.0,84.7 259.6,84.4 260.2,84.1 260.9,83.8 261.5,83.5 262.1,83.2 262.7,83.0 263.3,82.7 263.9,82.4 264.6,82.1 265.2,81.8 265.8,81.5 266.4,81.2 267.0,80.9 267.7,80.6 268.3,80.3 268.9,80.0 269.5,79.7 270.1,79.5 270.7,79.2 271.4,78.9 272.0,78.6 272.6,78.3 273.2,78.0 273.8,77.7 274.5,77.4 275.1,77.1 275.7,76.9 276.3,76.6 276.9,76.3 277.6,76.0 278.2,75.7 278.8,75.4 279.4,75.2 280.0,74.9 280.6,74.6 281.3,74.3 281.9,74.0 282.5,73.7 283.1,73.5 283.7,73.2 284.4,72.9 285.0,72.6 285.6,72.3 286.2,72.1 286.8,71.8 287.5,71.5 288.1,71.2 288.7,70.9 289.3,70.7 289.9,70.4 290.5,70.1 291.2,69.8 291.8,69.6 292.4,69.3 293.0,69.0 293.6,68.7 294.3,68.5 294.9,68.2 295.5,67.9 296.1,67.6 296.7,67.4 297.3,67.1 298.0,66.8 298.6,66.6 299.2,66.3 299.8,66.0 300.4,65.7 301.1,65.5 301.7,65.2 302.3,64.9 302.9,64.7 303.5,64.4 304.2,64.1 304.8,63.9 305.4,63.6 306.0,63.3 306.6,63.0 307.2,62.8 307.9,62.5 308.5,62.2 309.1,62.0 309.7,61.7 310.3,61.5 311.0,61.2 311.6,60.9 312.2,60.7 312.8,60.4 313.4,60.1 314.0,59.9 314.7,59.6" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="310.7" y1="55.6" x2="318.7" y2="63.6" stroke="#0b7285" stroke-width="1.3"/><line x1="310.7" y1="63.6" x2="318.7" y2="55.6" stroke="#0b7285" stroke-width="1.3"/><line x1="266.1" y1="75.5" x2="274.1" y2="83.5" stroke="#0b7285" stroke-width="1.3"/><line x1="266.1" y1="83.5" x2="274.1" y2="75.5" stroke="#0b7285" stroke-width="1.3"/><line x1="232.2" y1="92.0" x2="240.2" y2="100.0" stroke="#0b7285" stroke-width="1.3"/><line x1="232.2" y1="100.0" x2="240.2" y2="92.0" stroke="#0b7285" stroke-width="1.3"/><line x1="205.9" y1="106.0" x2="213.9" y2="114.0" stroke="#0b7285" stroke-width="1.3"/><line x1="205.9" y1="114.0" x2="213.9" y2="106.0" stroke="#0b7285" stroke-width="1.3"/><line x1="185.0" y1="118.0" x2="193.0" y2="126.0" stroke="#0b7285" stroke-width="1.3"/><line x1="185.0" y1="126.0" x2="193.0" y2="118.0" stroke="#0b7285" stroke-width="1.3"/><line x1="168.1" y1="128.4" x2="176.1" y2="136.4" stroke="#0b7285" stroke-width="1.3"/><line x1="168.1" y1="136.4" x2="176.1" y2="128.4" stroke="#0b7285" stroke-width="1.3"/><line x1="154.3" y1="137.5" x2="162.3" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="154.3" y1="145.5" x2="162.3" y2="137.5" stroke="#0b7285" stroke-width="1.3"/><line x1="142.8" y1="145.5" x2="150.8" y2="153.5" stroke="#0b7285" stroke-width="1.3"/><line x1="142.8" y1="153.5" x2="150.8" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="133.2" y1="152.7" x2="141.2" y2="160.7" stroke="#0b7285" stroke-width="1.3"/><line x1="133.2" y1="160.7" x2="141.2" y2="152.7" stroke="#0b7285" stroke-width="1.3"/><line x1="125.1" y1="159.1" x2="133.1" y2="167.1" stroke="#0b7285" stroke-width="1.3"/><line x1="125.1" y1="167.1" x2="133.1" y2="159.1" stroke="#0b7285" stroke-width="1.3"/></g></g></svg>' },
      caption: 'Graph 1 (top) shows stopping distance against cone radius R \u2014 a decreasing curve (inverse). Graph 4 (bottom) shows stopping distance against 1/R\u00b2 \u2014 the points curve and do not form a straight line through the origin, so d is NOT \u221d 1/R\u00b2.',
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
