import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2017-v1',
  subject: 'Physics',
  session: 'May',
  year: 2017,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ── Q1: Star Colours & Light Properties — Blue Hypergiant vs Red Dwarf (4 marks, Criterion A) ──
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Star Temperature and Light Colour',
    marks: 4,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Blue hypergiant stars are extremely massive and hot. Red dwarf stars are small, cool, and very long-lived. The colour of a star is related to its surface temperature: hotter stars emit more blue light, while cooler stars emit more red light.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 360" font-family="Arial, Helvetica, sans-serif"> <defs> <radialGradient id="spaceL" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#1c1620"/> <stop offset="100%" stop-color="#0a0710"/> </radialGradient> <radialGradient id="spaceR" cx="50%" cy="50%" r="75%"> <stop offset="0%" stop-color="#101a2e"/> <stop offset="100%" stop-color="#05080f"/> </radialGradient> <radialGradient id="redStar" cx="42%" cy="40%" r="65%"> <stop offset="0%" stop-color="#ffc070"/> <stop offset="35%" stop-color="#ff7e3a"/> <stop offset="70%" stop-color="#d04018"/> <stop offset="100%" stop-color="#7a1f08"/> </radialGradient> <radialGradient id="redGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#ff6a2a" stop-opacity="0.5"/> <stop offset="60%" stop-color="#c83a10" stop-opacity="0.15"/> <stop offset="100%" stop-color="#c83a10" stop-opacity="0"/> </radialGradient> <radialGradient id="blueStar" cx="44%" cy="40%" r="70%"> <stop offset="0%" stop-color="#ffffff"/> <stop offset="25%" stop-color="#e0f0ff"/> <stop offset="60%" stop-color="#7bbbf8"/> <stop offset="100%" stop-color="#1f4a9a"/> </radialGradient> <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#a8d6ff" stop-opacity="0.75"/> <stop offset="50%" stop-color="#4080d4" stop-opacity="0.25"/> <stop offset="100%" stop-color="#4080d4" stop-opacity="0"/> </radialGradient> <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"> <feGaussianBlur stdDeviation="3.2"/> </filter> </defs> <!-- ===== LEFT PANEL : Red Dwarf (small, cool) ===== --> <rect x="20" y="20" width="320" height="300" rx="10" fill="url(#spaceL)" stroke="#2a2230" stroke-width="1.5"/> <g fill="#fff"> <circle cx="65" cy="55" r="1.4" opacity="0.8"/><circle cx="300" cy="70" r="1.1" opacity="0.6"/> <circle cx="55" cy="240" r="1.2" opacity="0.7"/><circle cx="290" cy="270" r="1.5" opacity="0.8"/> <circle cx="120" cy="285" r="1" opacity="0.5"/><circle cx="250" cy="50" r="1.3" opacity="0.7"/> <circle cx="40" cy="160" r="1" opacity="0.5"/><circle cx="315" cy="180" r="1.2" opacity="0.6"/> <circle cx="95" cy="115" r="0.9" opacity="0.5"/><circle cx="270" cy="200" r="1" opacity="0.5"/> </g> <!-- smaller red dwarf --> <circle cx="180" cy="170" r="95" fill="url(#redGlow)" filter="url(#soft)"/> <circle cx="180" cy="170" r="58" fill="url(#redStar)"/> <!-- minor flares --> <g stroke="#ff8a3c" stroke-width="2.4" fill="none" opacity="0.8" stroke-linecap="round"> <path d="M138 142 q-12 -16 4 -28"/> <path d="M222 145 q14 -10 8 -28"/> <path d="M222 200 q14 8 8 26"/> </g> <g fill="#ffe4a8" opacity="0.55"> <circle cx="162" cy="158" r="2.4"/><circle cx="195" cy="180" r="2.8"/><circle cx="172" cy="190" r="2"/> </g> <text x="180" y="306" text-anchor="middle" fill="#ffd9a8" font-size="15" font-weight="bold">Red dwarf (cool)</text> <!-- ===== RIGHT PANEL : Blue Hypergiant (massive, hot) ===== --> <rect x="380" y="20" width="320" height="300" rx="10" fill="url(#spaceR)" stroke="#1a2436" stroke-width="1.5"/> <g fill="#fff"> <circle cx="430" cy="60" r="1.3" opacity="0.8"/><circle cx="660" cy="75" r="1.1" opacity="0.6"/> <circle cx="415" cy="245" r="1.2" opacity="0.7"/><circle cx="655" cy="265" r="1.4" opacity="0.8"/> <circle cx="480" cy="295" r="1" opacity="0.5"/><circle cx="610" cy="48" r="1.3" opacity="0.7"/> <circle cx="400" cy="165" r="1" opacity="0.5"/><circle cx="678" cy="185" r="1.2" opacity="0.6"/> </g> <!-- huge bright blue hypergiant --> <circle cx="540" cy="170" r="140" fill="url(#blueGlow)" filter="url(#soft)"/> <circle cx="540" cy="170" r="105" fill="url(#blueStar)"/> <g stroke="#dff0ff" stroke-width="2.2" fill="none" opacity="0.55" stroke-linecap="round"> <path d="M540 55 v-18"/><path d="M540 285 v18"/> <path d="M425 170 h-18"/><path d="M655 170 h18"/> <path d="M462 92 l-14 -14"/><path d="M618 248 l14 14"/> <path d="M462 248 l-14 14"/><path d="M618 92 l14 -14"/> </g> <g fill="#ffffff" opacity="0.6"> <circle cx="505" cy="148" r="3.5"/><circle cx="565" cy="186" r="4"/><circle cx="530" cy="208" r="2.6"/> <circle cx="568" cy="140" r="2.4"/> </g> <text x="540" y="306" text-anchor="middle" fill="#bfe0ff" font-size="15" font-weight="bold">Blue hypergiant (hot)</text> </svg>' },
      caption: 'Left: a cool red dwarf star. Right: a hot, massive blue hypergiant. Colour indicates surface temperature.',
    },
    tags: { unit: 'astrophysics', topics: ['star temperature', 'colour', 'EM spectrum', 'light properties'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Select** the correct options to complete the comparisons between red and blue light.\n\nThe speed of red light is **[greater than / equal to / less than]** the speed of blue light.\n\nThe wavelength of red light is **[greater than / equal to / less than]** the wavelength of blue light.\n\nThe frequency of red light is **[greater than / equal to / less than]** the frequency of blue light.',
        marks: 2,
        ph: 'Speed: equal to. Wavelength: greater than. Frequency: less than. All 3 correct = 2 marks; any 1 correct = 1 mark.',
      },
      {
        label: 'b',
        text: '**State** the expected maximum surface temperature for the red dwarf star Proxima Centauri.',
        marks: 1,
        ph: 'Less than (or equal to) 3200 °C.',
      },
      {
        label: 'c',
        text: '**State** the expected colour for a star with a surface temperature of 15,000 °C.',
        marks: 1,
        ph: 'Blue (accept: blue-white).',
      },
    ],
  },

  // ── Q2: White Light & UV Beyond the Violet (7 marks, Criterion A) ──
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light Dispersion and Ultraviolet Radiation',
    marks: 7,
    topicCanonical: 'Electromagnetic Spectrum',
    topicGroup: 'Electromagnetic Waves & Optics',
    stem: 'White light from a projector passes through a glass prism and produces a spectrum on a screen. A student places a UV-sensitive fluorescent card in different positions across the spectrum and beyond the violet end.',
    tags: { unit: 'em-spectrum', topics: ['white light', 'refraction', 'ultraviolet radiation', 'electromagnetic spectrum'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** why white light produces a spectrum when it passes through a glass prism.',
        marks: 2,
        ph: 'White light is a mixture of different colours/frequencies/wavelengths. Different frequencies are refracted by different amounts in glass, separating them into a spectrum.',
      },
      {
        label: 'b',
        text: 'The student observes that the fluorescent card glows strongly when placed beyond the violet end of the visible spectrum.\n\n**Explain** what physical process causes the card to fluoresce (glow) when ultraviolet radiation hits it.',
        marks: 2,
        ph: 'UV radiation is absorbed by the fluorescent material. The absorbed UV energy excites electrons to higher energy states. When electrons return to lower energy states they emit visible light (fluorescence). Black/dark surfaces absorb radiation most effectively.',
      },
      {
        label: 'c',
        text: '**Interpret** the results: the card does not glow in the visible spectrum, but glows brightly beyond the violet end. **Explain** this using scientific reasoning about the electromagnetic spectrum.',
        marks: 3,
        ph: 'The visible spectrum (violet to red) does not have enough photon energy to excite the fluorescent material. UV radiation beyond the violet has higher frequency (greater energy per photon) than visible light. The higher energy of UV photons is sufficient to excite the fluorescent dye molecules, causing them to emit visible light. This confirms UV radiation exists beyond the visible violet end.',
      },
    ],
  },

  // ── Q3: Exoplanet Observatory — Telescopes & Sirius (13 marks, Criterion A) ──
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Telescopes, Stellar Motion & Light Year Calculation',
    marks: 13,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Astronomers use ground-based and space telescopes to study the night sky. Long-exposure photographs reveal details of how the sky appears to change over time.',
    tags: { unit: 'astrophysics', topics: ['telescopes', 'reflection', 'Earth rotation', 'pole star', 'light year', 'distance'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'A spinning mirror attached to a telescope rotates at high speed to capture images of the sky. **Select** the correct diagram showing how the spinning mirror would appear in a long-exposure photograph of the sky.',
        marks: 1,
        ph: 'The mirror appears as a bright arc/trail in the photograph, tracing its rotation path.',
      },
      {
        label: 'b',
        text: 'A reflecting telescope uses a curved primary mirror to focus light. **Draw** on the diagram the path of two reflected rays from the curved mirror and show the correct **direction** of the arrows. Show where the rays converge to form an image.',
        marks: 3,
        ph: 'Both reflected rays converge at the focal point. Arrows correctly pointing away from mirror toward the focal point. Full marks if both rays approximately correct; third mark for correct arrow directions.',
      },
      {
        label: 'c',
        text: 'An astronomer takes a long-exposure photograph of the night sky from an observatory in Chile. The photograph shows arcs of light from stars.\n\n**Explain** why the stars appear to trace arcs across the sky during a long exposure.',
        marks: 2,
        ph: 'The stars appear to move because the Earth is rotating on its axis. The stars themselves are not moving (relative to Earth); the rotation of the Earth causes their apparent motion.',
      },
      {
        label: 'd',
        text: 'In the photograph, the star marked S (Sigma Octantis — the southern pole star) appears almost stationary compared with all other stars. **Explain why** Sigma Octantis appears to not move.',
        marks: 1,
        ph: 'Sigma Octantis is located almost directly above the Earth\'s South Pole, in line with the Earth\'s axis of rotation, so it does not appear to move as the Earth rotates.',
      },
      {
        label: 'e',
        text: 'Three faint stars close together in a distant galaxy are visible only as a single blurry point to the naked eye. **Explain why** the three stars cannot be seen as distinct objects with the naked eye, and how a telescope allows us to see them separately.',
        marks: 2,
        ph: 'The naked eye cannot resolve (separate) objects very close together in the sky. A telescope provides greater magnification and light-gathering ability, allowing the angular separation between the three stars to be resolved.',
      },
      {
        label: 'f',
        text: 'Sirius A is estimated to be 8.7 light years from Earth. A light year is the distance light travels in one year. Light travels at 3.0 × 10⁸ ms⁻¹ in a vacuum. Assume a year has 365 days.\n\n**Calculate** how far Sirius A is from the Earth in metres. Show your working.',
        marks: 3,
        ph: 'Time in 1 year = 365 × 24 × 3600 = 3.15 × 10⁷ s. 1 light year = 3.0 × 10⁸ × 3.15 × 10⁷ = 9.45 × 10¹⁵ m. Distance = 8.7 × 9.45 × 10¹⁵ = 8.22 × 10¹⁶ ≈ 8.3 × 10¹⁶ m.',
      },
      {
        label: 'g',
        text: 'Using your answer to part (f), **state** the distance from Sirius A to Earth in metres. Give your answer in standard form.',
        marks: 1,
        ph: '8.3 × 10¹⁶ m (ECF from part f)',
      },
    ],
  },

  // ── Q4: Binary Star System & Habitable Zone (8 marks, Criterion A) ──
  {
    id: 4,
    crit: 'A',
    type: 'extended',
    topic: 'Binary Stars, Exoplanets & Habitable Zone',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    stem: 'Many stars exist in binary systems — pairs of stars orbiting each other. Astronomers use the transit method to detect exoplanets: a planet passing in front of a star causes a dip in the star\'s brightness as measured from Earth.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 380" font-family="Arial, Helvetica, sans-serif"> <defs> <radialGradient id="bg4" cx="50%" cy="50%" r="80%"> <stop offset="0%" stop-color="#101730"/> <stop offset="100%" stop-color="#04060f"/> </radialGradient> <radialGradient id="blueB" cx="40%" cy="40%" r="65%"> <stop offset="0%" stop-color="#ffffff"/> <stop offset="35%" stop-color="#cde6ff"/> <stop offset="80%" stop-color="#5aa1ec"/> <stop offset="100%" stop-color="#1f4f9b"/> </radialGradient> <radialGradient id="redB" cx="42%" cy="42%" r="65%"> <stop offset="0%" stop-color="#ffd6a0"/> <stop offset="50%" stop-color="#ff7a44"/> <stop offset="100%" stop-color="#a02d10"/> </radialGradient> <radialGradient id="glowB" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#a3d5ff" stop-opacity="0.5"/> <stop offset="100%" stop-color="#a3d5ff" stop-opacity="0"/> </radialGradient> <radialGradient id="glowR" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#ff7e44" stop-opacity="0.45"/> <stop offset="100%" stop-color="#ff7e44" stop-opacity="0"/> </radialGradient> <radialGradient id="planet4" cx="40%" cy="40%" r="65%"> <stop offset="0%" stop-color="#7a8088"/> <stop offset="100%" stop-color="#1c1f23"/> </radialGradient> <filter id="soft4" x="-30%" y="-30%" width="160%" height="160%"> <feGaussianBlur stdDeviation="2.8"/> </filter> </defs> <rect x="0" y="0" width="720" height="380" fill="url(#bg4)"/> <!-- background stars --> <g fill="#fff"> <circle cx="50" cy="40" r="1.2" opacity="0.8"/><circle cx="120" cy="80" r="1" opacity="0.6"/> <circle cx="600" cy="55" r="1.4" opacity="0.8"/><circle cx="680" cy="100" r="1" opacity="0.6"/> <circle cx="40" cy="320" r="1.2" opacity="0.7"/><circle cx="700" cy="340" r="1.3" opacity="0.7"/> <circle cx="200" cy="40" r="0.9" opacity="0.5"/><circle cx="480" cy="60" r="1.1" opacity="0.6"/> <circle cx="80" cy="200" r="1" opacity="0.5"/><circle cx="650" cy="220" r="1" opacity="0.5"/> </g> <!-- title --> <text x="20" y="34" fill="#ffffff" font-size="16" font-weight="bold">Binary star system with transiting exoplanet</text> <!-- common centre of mass marker --> <g> <circle cx="320" cy="200" r="3" fill="#ffd24a"/> <text x="328" y="196" fill="#ffd24a" font-size="11">common centre of mass</text> </g> <!-- orbital paths (dashed ellipses) --> <ellipse cx="320" cy="200" rx="90" ry="40" fill="none" stroke="#5e7aa8" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.8"/> <ellipse cx="320" cy="200" rx="170" ry="76" fill="none" stroke="#a05a4a" stroke-width="1.1" stroke-dasharray="4 3" opacity="0.8"/> <!-- big blue star (left) with glow --> <circle cx="230" cy="200" r="72" fill="url(#glowB)" filter="url(#soft4)"/> <circle cx="230" cy="200" r="48" fill="url(#blueB)"/> <text x="230" y="284" text-anchor="middle" fill="#cfe5ff" font-size="13" font-weight="bold">Blue star (hot, large)</text> <!-- small red star (right) --> <circle cx="490" cy="200" r="36" fill="url(#glowR)" filter="url(#soft4)"/> <circle cx="490" cy="200" r="22" fill="url(#redB)"/> <text x="490" y="246" text-anchor="middle" fill="#ffd9a8" font-size="13" font-weight="bold">Red star (cool, small)</text> <!-- exoplanet transiting in front of blue star --> <circle cx="218" cy="200" r="8" fill="url(#planet4)" stroke="#0a0c10" stroke-width="0.8"/> <!-- arrow showing motion --> <line x1="200" y1="172" x2="248" y2="172" stroke="#ffffff" stroke-width="1.4" opacity="0.7" marker-end="url(#arrowW)"/> <text x="224" y="166" text-anchor="middle" fill="#ffffff" font-size="11" opacity="0.9">exoplanet transit</text> <defs> <marker id="arrowW" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#ffffff"/> </marker> </defs> <!-- habitable zones (concentric arcs) around blue star --> <g opacity="0.5"> <circle cx="230" cy="200" r="118" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4"/> <circle cx="230" cy="200" r="148" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4"/> </g> <text x="78" y="116" fill="#3bc77a" font-size="11" opacity="0.9">habitable zone (blue)</text> <line x1="120" y1="120" x2="115" y2="148" stroke="#3bc77a" stroke-width="0.8" opacity="0.7"/> <!-- habitable zone around red star (much closer) --> <g opacity="0.5"> <circle cx="490" cy="200" r="46" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4"/> <circle cx="490" cy="200" r="58" fill="none" stroke="#3bc77a" stroke-width="1" stroke-dasharray="2 4"/> </g> <text x="552" y="184" fill="#3bc77a" font-size="11" opacity="0.9">habitable zone (red)</text> <line x1="552" y1="180" x2="540" y2="180" stroke="#3bc77a" stroke-width="0.8" opacity="0.7"/> <!-- mini light-curve dip inset (top right) --> <g transform="translate(560 280)"> <rect x="0" y="0" width="140" height="86" rx="6" fill="#ffffff" opacity="0.92"/> <text x="70" y="14" text-anchor="middle" fill="#2c3e50" font-size="11" font-weight="bold">Brightness vs time</text> <line x1="10" y1="62" x2="130" y2="62" stroke="#2c3e50" stroke-width="1"/> <line x1="10" y1="20" x2="10" y2="62" stroke="#2c3e50" stroke-width="1"/> <polyline points="14,30 50,30 60,52 80,52 90,30 130,30" fill="none" stroke="#0b7285" stroke-width="2"/> <text x="70" y="80" text-anchor="middle" fill="#2c3e50" font-size="10">dip during transit</text> </g> </svg>' },
      caption: 'A binary system: a hot, large blue star and a cool, small red star, each with its own habitable zone. An exoplanet transits in front of the blue star, dimming its light.',
    },
    tags: { unit: 'astrophysics', topics: ['binary stars', 'habitable zone', 'transit method', 'luminosity'], level: 'developing' },
    tasks: [
      {
        label: 'a',
        text: '**Explain** how the transit method allows astronomers to detect an exoplanet orbiting a star.',
        marks: 2,
        ph: 'Exoplanets are opaque objects. When an exoplanet passes in front of its star, it blocks some of the star\'s light, causing a measurable dip in brightness as seen from Earth. The periodic dip in brightness reveals the planet.',
      },
      {
        label: 'b',
        text: '**Explain** why exoplanets cannot normally be directly detected by optical telescopes (unlike stars).',
        marks: 2,
        ph: 'Exoplanets are non-luminous — they do not produce their own light. They are only detectable via reflected light from their star (reflected light is extremely faint) or by the shadow they cast during a transit.',
      },
      {
        label: 'c',
        text: 'A rocky exoplanet orbits too close to its host star to support liquid water. **Explain why** liquid water cannot exist on the surface of a planet that is very close to a hot star.',
        marks: 2,
        ph: 'A planet very close to a hot star receives too much radiation. The surface temperature would be too high. Any water present on the surface would evaporate/boil away and cannot remain in liquid form.',
      },
      {
        label: 'd',
        text: 'A binary star system has two stars: a large, hot, blue star and a small, cool, red star. **Explain why** the habitable zone around the blue star is further from it than the habitable zone around the red star.',
        marks: 2,
        ph: 'The blue star is hotter and emits more energy per unit time than the red star. A planet must be further away from the blue star to receive the same energy per unit area needed for liquid water. Therefore the habitable zone is further out for the more energetic blue star.',
      },
    ],
  },

  // ── Q5: Ramp Investigation — Steel Ball Rolling (25 marks, Criterion B) ──
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'GPE, KE & Rolling Friction Investigation',
    marks: 25,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The simulation shows a ramp with a steel ball (mass 0.30 kg) that rolls down the ramp onto a flat surface. The ramp length is 80 cm. The height of the ramp and the distance the ball rolls along the flat surface can both be measured.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 440" font-family="Arial, Helvetica, sans-serif"> <defs> <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#e9d6b8"/> <stop offset="100%" stop-color="#cdb088"/> </linearGradient> <linearGradient id="rampG" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#9aa1a8"/> <stop offset="50%" stop-color="#d8dde1"/> <stop offset="100%" stop-color="#7e858c"/> </linearGradient> <linearGradient id="standG" x1="0" y1="0" x2="1" y2="0"> <stop offset="0%" stop-color="#5a6066"/> <stop offset="50%" stop-color="#8a9097"/> <stop offset="100%" stop-color="#5a6066"/> </linearGradient> <radialGradient id="ballG" cx="35%" cy="32%" r="65%"> <stop offset="0%" stop-color="#f5f7fa"/> <stop offset="55%" stop-color="#8a949f"/> <stop offset="100%" stop-color="#2d343c"/> </radialGradient> <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#c0392b"/> </marker> <marker id="arrowS" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#2c3e50"/> </marker> </defs> <rect x="0" y="0" width="720" height="440" fill="#ffffff"/> <!-- ground / bench --> <rect x="20" y="250" width="680" height="130" fill="url(#floor)" stroke="#b89a70" stroke-width="1.5"/> <line x1="20" y1="250" x2="700" y2="250" stroke="#a9875e" stroke-width="2"/> <!-- clamp stand: base + vertical rod --> <rect x="105" y="244" width="120" height="10" rx="3" fill="url(#standG)" stroke="#3f4549"/> <rect x="158" y="50" width="12" height="202" rx="3" fill="url(#standG)" stroke="#3f4549"/> <!-- boss/clamp holding ramp top (45 cm above bench) --> <rect x="150" y="172" width="30" height="16" rx="3" fill="#5a6066" stroke="#3f4549"/> <!-- ramp at 0.45 m height, 80 cm length --> <g> <polygon points="170,180 558,290 558,302 170,192" fill="url(#rampG)" stroke="#646b71" stroke-width="1.5"/> <line x1="178" y1="186.5" x2="552" y2="293.5" stroke="#eef1f3" stroke-width="1.6" opacity="0.8"/> </g> <!-- steel ball on ramp partway down --> <g> <circle cx="280" cy="208" r="14" fill="url(#ballG)" stroke="#202830" stroke-width="1.2"/> <ellipse cx="276" cy="204" rx="4" ry="2.5" fill="#ffffff" opacity="0.65"/> <!-- label callout --> <line x1="280" y1="195" x2="300" y2="120" stroke="#1f2329" stroke-width="0.9"/> <rect x="270" y="92" width="124" height="28" rx="4" fill="#2c3e50"/> <text x="332" y="111" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Steel ball — 0.30 kg</text> </g> <!-- ramp height dimension (vertical, left of stand) --> <line x1="78" y1="180" x2="78" y2="250" stroke="#2c3e50" stroke-width="1.5" marker-start="url(#arrowS)" marker-end="url(#arrowS)"/> <line x1="72" y1="180" x2="170" y2="180" stroke="#2c3e50" stroke-width="0.8" stroke-dasharray="4 3"/> <line x1="72" y1="250" x2="105" y2="250" stroke="#2c3e50" stroke-width="0.8" stroke-dasharray="4 3"/> <text x="60" y="222" text-anchor="middle" fill="#2c3e50" font-size="13" transform="rotate(-90 60 222)">Ramp height / cm</text> <rect x="86" y="208" width="40" height="18" rx="3" fill="#ffffff" opacity="0.95"/> <text x="106" y="221" text-anchor="middle" fill="#2c3e50" font-size="13" font-weight="bold">45 cm</text> <!-- ramp length dimension --> <line x1="170" y1="345" x2="558" y2="345" stroke="#c0392b" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)"/> <line x1="170" y1="300" x2="170" y2="350" stroke="#c0392b" stroke-width="0.8" stroke-dasharray="4 3"/> <line x1="558" y1="300" x2="558" y2="350" stroke="#c0392b" stroke-width="0.8" stroke-dasharray="4 3"/> <rect x="339" y="336" width="50" height="18" rx="3" fill="#ffffff" opacity="0.95"/> <text x="364" y="349" text-anchor="middle" fill="#c0392b" font-size="13" font-weight="bold">80 cm</text> <text x="364" y="370" text-anchor="middle" fill="#2c3e50" font-size="13">Ramp length / cm</text> <!-- flat-surface "distance rolled" indicator --> <line x1="558" y1="395" x2="690" y2="395" stroke="#0b7285" stroke-width="1.6" marker-start="url(#arrowS)" marker-end="url(#arrowS)"/> <text x="624" y="416" text-anchor="middle" fill="#0b7285" font-size="12" font-weight="bold">distance rolled on flat</text> </svg>' },
      caption: 'A steel ball (0.30 kg) is released on an 80 cm ramp set at a height of 45 cm and rolls onto the flat bench.',
    },
    tags: { unit: 'forces-interactions', topics: ['gravitational potential energy', 'kinetic energy', 'friction', 'variables', 'data processing'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**State** the equation linking gravitational potential energy (GPE) and kinetic energy (KE) for a ball rolling down a frictionless ramp.',
        marks: 1,
        ph: 'GPE = KE (gravitational potential energy converts to kinetic energy)',
      },
      {
        label: 'b',
        text: '**Calculate** the gravitational potential energy of the ball when the ramp height is 0.45 m. Use g = 10 ms⁻². Show your working.',
        marks: 3,
        ph: 'GPE = mgh = 0.30 × 10 × 0.45 = 1.35 J',
      },
      {
        label: 'c',
        text: '**State** the question that this investigation could answer.',
        marks: 1,
        ph: 'How does the height of the ramp affect the distance the ball rolls along the flat surface?',
      },
      {
        label: 'd',
        text: '**Formulate and explain** the hypothesis that this question would test.',
        marks: 3,
        ph: 'As the height increases, the distance rolled increases. Greater height → more GPE → more KE at base → ball rolls further before friction stops it. Doubling height doubles the distance (quantitative).',
      },
      {
        label: 'e',
        text: '**Identify** the independent and dependent variables, and **name two control variables** for this experiment.',
        marks: 4,
        widget: 'variable_classify',
        widgetItems: ['Height of ramp', 'Distance ball travels', 'Material of ball', 'Surface the ball rolls on', 'Mass of ball', 'Length of ramp'],
        ph: 'IV: Height of ramp. DV: Distance ball travels. CV (any 2): material of ball, surface the ball rolls on, mass of ball, length of ramp.',
      },
      {
        label: 'f',
        text: 'A student sets up the ramp at a very low height and finds the ball does not roll off onto the flat surface. **Explain** why this happened.',
        marks: 1,
        ph: 'At very low heights the ramp is not steep enough. The driving force component along the ramp is less than friction. The ball does not overcome friction and does not leave the ramp.',
      },
      {
        label: 'g',
        text: '**Describe two safety precautions** the student should take when carrying out this experiment.',
        marks: 2,
        ph: 'Clamp the ramp securely so it cannot fall. Keep hands and feet clear of the ball\'s rolling path. Ensure a barrier/backstop prevents the ball hitting equipment or people.',
      },
      {
        label: 'h',
        text: '**Describe** the data you will collect. Include the range of heights you will use and the number of trials.',
        marks: 4,
        ph: 'Measure rolling distance for at least 5 different heights between 0.20 m and 0.55 m, evenly spaced. At least 2 trials per height. Record both height (IV) and distance (DV). Calculate mean distance at each height.',
      },
      {
        label: 'i',
        text: 'The student plots a graph of distance (y-axis) against height (x-axis). **Describe** the relationship shown by the graph.',
        marks: 2,
        ph: 'As height increases, distance increases. The relationship is linear (straight line). The line does NOT pass through the origin (x-intercept exists) → NOT proportional.',
      },
      {
        label: 'j',
        text: '**Read** the x-intercept from the graph.',
        marks: 1,
        ph: 'Accept any value in the range 0.13–0.17 m (units not essential for this mark)',
      },
      {
        label: 'k',
        text: '**Explain** the significance of the x-intercept in this experiment.',
        marks: 2,
        ph: 'The x-intercept is the minimum ramp height at which the ball will roll off the ramp onto the flat surface. Below this height, friction on the ramp consumes all the kinetic energy before the ball reaches the flat section.',
      },
      {
        label: 'l',
        text: '**Evaluate** the quality of the student\'s method in terms of the conclusions that can be drawn.',
        marks: 1,
        ph: 'The method produced sufficient data to draw a valid conclusion (a graph showing the linear relationship between height and distance could be plotted).',
      },
    ],
  },

  // ── Q6: Alternative Ramp Investigation — Ball Mass (9 marks, Criterion B) ──
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Alternative Ramp Variable Investigation',
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
        ph: 'How does the mass of the ball (or surface material / angle of ramp / length of ramp) affect the distance the ball rolls? (Do NOT accept height as IV; do NOT accept speed as DV.)',
      },
      {
        label: 'b',
        text: '**Formulate and explain** the hypothesis that the question in part (a) would test.',
        marks: 3,
        ph: 'As the mass of the ball increases, the distance rolled will remain constant (GPE = mgh and KE = ½mv², so mass cancels). OR for surface roughness: rougher surface → more friction → shorter distance. Include quantitative prediction and scientific explanation.',
      },
      {
        label: 'c',
        text: '**Identify** one independent variable and **name two control variables** (that can be measured) for this new investigation.',
        marks: 3,
        ph: 'IV: mass of ball (ECF from 6a; not height). CV (any 2): height of ramp, surface material, ramp length, ball material/type.',
      },
      {
        label: 'd',
        text: '**Describe** the data you will collect. Include the number of different conditions of the IV and any relevant features of your plan.',
        marks: 2,
        ph: 'Test at least 5 different masses (or surface conditions). Multiple trials per condition. Record both IV and DV for each trial.',
      },
    ],
  },

  // ── Q7: Rectangular Sail Investigation (9 marks, Criterion C) ──
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Rectangular Sail — Stopping Distance Investigation',
    marks: 9,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'A student investigates how the width of a rectangular sail attached to a toy trolley affects the stopping distance of the trolley. The trolley is launched with the same force each time.',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 380" font-family="Arial, Helvetica, sans-serif"> <defs> <linearGradient id="bench7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#efe6d6"/> <stop offset="100%" stop-color="#ddd0b8"/> </linearGradient> <linearGradient id="ruler7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#ffe08a"/> <stop offset="100%" stop-color="#f3c64b"/> </linearGradient> <linearGradient id="body7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#e8c98c"/> <stop offset="55%" stop-color="#cfa65f"/> <stop offset="100%" stop-color="#a87e3e"/> </linearGradient> <linearGradient id="sail7" x1="0" y1="0" x2="0" y2="1"> <stop offset="0%" stop-color="#5a626b"/> <stop offset="50%" stop-color="#3a4048"/> <stop offset="100%" stop-color="#2c3138"/> </linearGradient> <radialGradient id="wheel7" cx="40%" cy="38%" r="62%"> <stop offset="0%" stop-color="#ff6b5e"/> <stop offset="100%" stop-color="#b32b1f"/> </radialGradient> <radialGradient id="hub7" cx="50%" cy="50%" r="50%"> <stop offset="0%" stop-color="#6b7077"/> <stop offset="100%" stop-color="#2c3036"/> </radialGradient> <marker id="dimM7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"> <path d="M0 0 L9 4.5 L0 9 z" fill="#ffd24a"/> </marker> </defs> <rect x="0" y="0" width="760" height="380" fill="#ffffff"/> <!-- title bar --> <rect x="20" y="20" width="720" height="34" fill="#1d1d20"/> <text x="730" y="43" text-anchor="end" fill="#ffffff" font-size="17" font-weight="bold">Dynamic trolley experiment — rectangular sail</text> <!-- bench surface --> <rect x="20" y="54" width="720" height="198" fill="url(#bench7)"/> <!-- ===== TROLLEY ===== --> <g> <rect x="120" y="196" width="180" height="36" rx="7" fill="url(#body7)" stroke="#8a6a34" stroke-width="1.5"/> <line x1="130" y1="214" x2="290" y2="214" stroke="#9a7942" stroke-width="1" opacity="0.5"/> <path d="M134 206 q70 -4 150 2" stroke="#b89455" stroke-width="0.8" fill="none" opacity="0.5"/> </g> <!-- mast --> <rect x="232" y="110" width="6" height="92" fill="#5a4a2c"/> <!-- RECTANGULAR SAIL of width W --> <rect x="200" y="100" width="92" height="100" fill="url(#sail7)" stroke="#23272d" stroke-width="2"/> <!-- subtle highlight panel --> <rect x="208" y="108" width="22" height="80" fill="#ffffff" opacity="0.08"/> <!-- mast bolt --> <circle cx="235" cy="150" r="2.5" fill="#ffd24a"/> <!-- width dimension arrows showing W across the sail --> <line x1="200" y1="80" x2="292" y2="80" stroke="#ffd24a" stroke-width="1.6" marker-start="url(#dimM7)" marker-end="url(#dimM7)"/> <line x1="200" y1="74" x2="200" y2="100" stroke="#ffd24a" stroke-width="0.8" stroke-dasharray="3 3"/> <line x1="292" y1="74" x2="292" y2="100" stroke="#ffd24a" stroke-width="0.8" stroke-dasharray="3 3"/> <rect x="234" y="66" width="24" height="20" rx="3" fill="#1d1d20"/> <text x="246" y="80" text-anchor="middle" fill="#ffd24a" font-size="13" font-weight="bold" font-style="italic">W</text> <!-- wheels --> <g> <circle cx="150" cy="234" r="17" fill="url(#wheel7)" stroke="#7d1f15" stroke-width="1.5"/> <circle cx="150" cy="234" r="6" fill="url(#hub7)"/> <circle cx="270" cy="234" r="17" fill="url(#wheel7)" stroke="#7d1f15" stroke-width="1.5"/> <circle cx="270" cy="234" r="6" fill="url(#hub7)"/> </g> <!-- release mechanism --> <rect x="96" y="206" width="26" height="18" rx="3" fill="#4a4f55" stroke="#2c3036" stroke-width="1.2"/> <rect x="104" y="190" width="6" height="18" rx="2" fill="#8a9097" stroke="#5a6066"/> <circle cx="107" cy="188" r="5" fill="#c0392b" stroke="#7d1f15"/> <line x1="107" y1="183" x2="60" y2="120" stroke="#c0392b" stroke-width="1.2"/> <rect x="34" y="86" width="166" height="34" rx="5" fill="#2b2f35"/> <text x="44" y="101" fill="#ffffff" font-size="12">Click to push down</text> <text x="44" y="116" fill="#ffffff" font-size="12">release mechanism</text> <!-- ===== RULER (scale) ===== --> <rect x="60" y="252" width="660" height="34" fill="url(#ruler7)" stroke="#cda430" stroke-width="1.5"/> <g stroke="#2c2a24"> <line x1="80" y1="252" x2="80" y2="278" stroke-width="1.6"/> <line x1="105" y1="252" x2="105" y2="266" stroke-width="0.9"/> <line x1="130" y1="252" x2="130" y2="266" stroke-width="0.9"/> <line x1="155" y1="252" x2="155" y2="266" stroke-width="0.9"/> <line x1="180" y1="252" x2="180" y2="266" stroke-width="0.9"/> <line x1="205" y1="252" x2="205" y2="278" stroke-width="1.6"/> <line x1="230" y1="252" x2="230" y2="266" stroke-width="0.9"/> <line x1="255" y1="252" x2="255" y2="266" stroke-width="0.9"/> <line x1="280" y1="252" x2="280" y2="266" stroke-width="0.9"/> <line x1="305" y1="252" x2="305" y2="266" stroke-width="0.9"/> <line x1="330" y1="252" x2="330" y2="278" stroke-width="1.6"/> <line x1="355" y1="252" x2="355" y2="266" stroke-width="0.9"/> <line x1="380" y1="252" x2="380" y2="266" stroke-width="0.9"/> <line x1="405" y1="252" x2="405" y2="266" stroke-width="0.9"/> <line x1="430" y1="252" x2="430" y2="266" stroke-width="0.9"/> <line x1="455" y1="252" x2="455" y2="278" stroke-width="1.6"/> <line x1="480" y1="252" x2="480" y2="266" stroke-width="0.9"/> <line x1="505" y1="252" x2="505" y2="266" stroke-width="0.9"/> <line x1="530" y1="252" x2="530" y2="266" stroke-width="0.9"/> <line x1="555" y1="252" x2="555" y2="266" stroke-width="0.9"/> <line x1="580" y1="252" x2="580" y2="278" stroke-width="1.6"/> <line x1="605" y1="252" x2="605" y2="266" stroke-width="0.9"/> <line x1="630" y1="252" x2="630" y2="266" stroke-width="0.9"/> <line x1="655" y1="252" x2="655" y2="266" stroke-width="0.9"/> <line x1="680" y1="252" x2="680" y2="266" stroke-width="0.9"/> <line x1="705" y1="252" x2="705" y2="278" stroke-width="1.6"/> </g> <g fill="#c0392b" font-size="13" font-weight="bold" text-anchor="middle"> <text x="80" y="298">0.0</text> </g> <g fill="#2c2a24" font-size="13" text-anchor="middle"> <text x="205" y="298">5</text> <text x="330" y="298">10</text> <text x="455" y="298">15</text> <text x="580" y="298">20</text> <text x="705" y="298">25</text> </g> <text x="380" y="326" text-anchor="middle" fill="#2c3e50" font-size="13">Distance scale / m</text> </svg>' },
      caption: 'A toy trolley with a rectangular sail of width W is launched along a metre scale; read the start and stopping positions to find the stopping distance.',
    },
    tags: { unit: 'forces-interactions', topics: ['drag', 'friction', 'stopping distance', 'data processing', 'proportionality'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: 'The student clicks the release mechanism in the simulation. Take appropriate measurements and **determine** the stopping distance of the trolley.',
        marks: 3,
        ph: 'Read start and stop positions. Stopping distance = final − initial ≈ 4.55 m (accept 4.50–4.60 m). Include unit: m.',
      },
      {
        label: 'b',
        text: 'The student records the stopping distance for several different sail widths. **Create a suitable table** to record the data collected, including appropriate column headings with units, data in order, and consistent decimal places.',
        marks: 5,
        ph: 'Table: Column 1 = Width of sail / m. Column 2 = Stopping distance / m. Units in headers only. Ascending or descending order. Consistent decimal places. Include result from part (a) for appropriate width.',
      },
      {
        label: 'c',
        text: 'The student claims that a scatter graph with a line of best fit is the most appropriate way to present this data.\n\n**Justify** this choice.',
        marks: 1,
        ph: 'The data is continuous (both sail width and stopping distance are continuous numerical variables). A scatter graph allows a line of best fit to show the relationship and identify anomalies.',
      },
    ],
  },

  // ── Q7 continued: Sail Data Analysis (7 marks, Criterion C) ──
  {
    id: 8,
    crit: 'C',
    type: 'extended',
    topic: 'Sail Data Analysis — Relationship Deduction',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'The student analyses their stopping distance data further by plotting four graphs: Graph 1 (stopping distance vs width W), Graph 2 (stopping distance vs W²), Graph 3 (stopping distance vs 1/W), Graph 4 (stopping distance vs 1/W²).',
    artefact: {
      component: 'GenericSVG',
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 348" font-family="Arial, Helvetica, sans-serif"><rect width="408" height="348" fill="#ffffff"/><g transform="translate(12,12)"><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="109.3" y1="18.0" x2="109.3" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="160.7" y1="18.0" x2="160.7" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="212.0" y1="18.0" x2="212.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="263.3" y1="18.0" x2="263.3" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="314.7" y1="18.0" x2="314.7" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="366.0" y1="18.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="226.0" x2="366.0" y2="226.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="174.0" x2="366.0" y2="174.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="366.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="70.0" x2="366.0" y2="70.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="366.0" y2="18.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="18.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="366.0" y2="278.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="278.0" x2="58.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="58.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="109.3" y1="278.0" x2="109.3" y2="282.0" stroke="#333" stroke-width="1"/><text x="109.3" y="294.0" font-size="10" fill="#333" text-anchor="middle">20</text><line x1="160.7" y1="278.0" x2="160.7" y2="282.0" stroke="#333" stroke-width="1"/><text x="160.7" y="294.0" font-size="10" fill="#333" text-anchor="middle">40</text><line x1="212.0" y1="278.0" x2="212.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="212.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">60</text><line x1="263.3" y1="278.0" x2="263.3" y2="282.0" stroke="#333" stroke-width="1"/><text x="263.3" y="294.0" font-size="10" fill="#333" text-anchor="middle">80</text><line x1="314.7" y1="278.0" x2="314.7" y2="282.0" stroke="#333" stroke-width="1"/><text x="314.7" y="294.0" font-size="10" fill="#333" text-anchor="middle">100</text><line x1="366.0" y1="278.0" x2="366.0" y2="282.0" stroke="#333" stroke-width="1"/><text x="366.0" y="294.0" font-size="10" fill="#333" text-anchor="middle">120</text><line x1="54.0" y1="278.0" x2="58.0" y2="278.0" stroke="#333" stroke-width="1"/><text x="51.0" y="281.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="226.0" x2="58.0" y2="226.0" stroke="#333" stroke-width="1"/><text x="51.0" y="229.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="174.0" x2="58.0" y2="174.0" stroke="#333" stroke-width="1"/><text x="51.0" y="177.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="70.0" x2="58.0" y2="70.0" stroke="#333" stroke-width="1"/><text x="51.0" y="73.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="18.0" x2="58.0" y2="18.0" stroke="#333" stroke-width="1"/><text x="51.0" y="21.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="212.0" y="318.0" font-size="11" fill="#222" text-anchor="middle">W⁻² / m⁻²</text><text x="14" y="148.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 148.0)">Stopping distance / m</text><text x="212.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Stopping distance against inverse of sail width squared</text><polyline points="129.1,163.1 129.7,162.6 130.3,162.1 131.0,161.6 131.6,161.1 132.2,160.6 132.8,160.1 133.4,159.6 134.0,159.1 134.7,158.6 135.3,158.2 135.9,157.7 136.5,157.2 137.1,156.7 137.8,156.3 138.4,155.8 139.0,155.3 139.6,154.8 140.2,154.4 140.9,153.9 141.5,153.5 142.1,153.0 142.7,152.5 143.3,152.1 143.9,151.6 144.6,151.2 145.2,150.7 145.8,150.3 146.4,149.8 147.0,149.4 147.7,148.9 148.3,148.5 148.9,148.0 149.5,147.6 150.1,147.2 150.7,146.7 151.4,146.3 152.0,145.8 152.6,145.4 153.2,145.0 153.8,144.5 154.5,144.1 155.1,143.7 155.7,143.3 156.3,142.8 156.9,142.4 157.6,142.0 158.2,141.6 158.8,141.1 159.4,140.7 160.0,140.3 160.6,139.9 161.3,139.5 161.9,139.1 162.5,138.6 163.1,138.2 163.7,137.8 164.4,137.4 165.0,137.0 165.6,136.6 166.2,136.2 166.8,135.8 167.4,135.4 168.1,135.0 168.7,134.6 169.3,134.2 169.9,133.8 170.5,133.4 171.2,133.0 171.8,132.6 172.4,132.2 173.0,131.8 173.6,131.4 174.3,131.0 174.9,130.6 175.5,130.2 176.1,129.8 176.7,129.5 177.3,129.1 178.0,128.7 178.6,128.3 179.2,127.9 179.8,127.5 180.4,127.2 181.1,126.8 181.7,126.4 182.3,126.0 182.9,125.6 183.5,125.3 184.2,124.9 184.8,124.5 185.4,124.1 186.0,123.8 186.6,123.4 187.2,123.0 187.9,122.7 188.5,122.3 189.1,121.9 189.7,121.5 190.3,121.2 191.0,120.8 191.6,120.4 192.2,120.1 192.8,119.7 193.4,119.4 194.0,119.0 194.7,118.6 195.3,118.3 195.9,117.9 196.5,117.6 197.1,117.2 197.8,116.8 198.4,116.5 199.0,116.1 199.6,115.8 200.2,115.4 200.9,115.1 201.5,114.7 202.1,114.4 202.7,114.0 203.3,113.7 203.9,113.3 204.6,113.0 205.2,112.6 205.8,112.3 206.4,111.9 207.0,111.6 207.7,111.2 208.3,110.9 208.9,110.5 209.5,110.2 210.1,109.9 210.7,109.5 211.4,109.2 212.0,108.8 212.6,108.5 213.2,108.2 213.8,107.8 214.5,107.5 215.1,107.1 215.7,106.8 216.3,106.5 216.9,106.1 217.6,105.8 218.2,105.5 218.8,105.1 219.4,104.8 220.0,104.5 220.6,104.1 221.3,103.8 221.9,103.5 222.5,103.2 223.1,102.8 223.7,102.5 224.4,102.2 225.0,101.8 225.6,101.5 226.2,101.2 226.8,100.9 227.4,100.5 228.1,100.2 228.7,99.9 229.3,99.6 229.9,99.3 230.5,98.9 231.2,98.6 231.8,98.3 232.4,98.0 233.0,97.7 233.6,97.3 234.3,97.0 234.9,96.7 235.5,96.4 236.1,96.1 236.7,95.8 237.3,95.4 238.0,95.1 238.6,94.8 239.2,94.5 239.8,94.2 240.4,93.9 241.1,93.6 241.7,93.2 242.3,92.9 242.9,92.6 243.5,92.3 244.2,92.0 244.8,91.7 245.4,91.4 246.0,91.1 246.6,90.8 247.2,90.5 247.9,90.2 248.5,89.9 249.1,89.5 249.7,89.2 250.3,88.9 251.0,88.6 251.6,88.3 252.2,88.0 252.8,87.7 253.4,87.4 254.0,87.1 254.7,86.8 255.3,86.5 255.9,86.2 256.5,85.9 257.1,85.6 257.8,85.3 258.4,85.0 259.0,84.7 259.6,84.4 260.2,84.1 260.9,83.8 261.5,83.5 262.1,83.2 262.7,83.0 263.3,82.7 263.9,82.4 264.6,82.1 265.2,81.8 265.8,81.5 266.4,81.2 267.0,80.9 267.7,80.6 268.3,80.3 268.9,80.0 269.5,79.7 270.1,79.5 270.7,79.2 271.4,78.9 272.0,78.6 272.6,78.3 273.2,78.0 273.8,77.7 274.5,77.4 275.1,77.1 275.7,76.9 276.3,76.6 276.9,76.3 277.6,76.0 278.2,75.7 278.8,75.4 279.4,75.2 280.0,74.9 280.6,74.6 281.3,74.3 281.9,74.0 282.5,73.7 283.1,73.5 283.7,73.2 284.4,72.9 285.0,72.6 285.6,72.3 286.2,72.1 286.8,71.8 287.5,71.5 288.1,71.2 288.7,70.9 289.3,70.7 289.9,70.4 290.5,70.1 291.2,69.8 291.8,69.6 292.4,69.3 293.0,69.0 293.6,68.7 294.3,68.5 294.9,68.2 295.5,67.9 296.1,67.6 296.7,67.4 297.3,67.1 298.0,66.8 298.6,66.6 299.2,66.3 299.8,66.0 300.4,65.7 301.1,65.5 301.7,65.2 302.3,64.9 302.9,64.7 303.5,64.4 304.2,64.1 304.8,63.9 305.4,63.6 306.0,63.3 306.6,63.0 307.2,62.8 307.9,62.5 308.5,62.2 309.1,62.0 309.7,61.7 310.3,61.5 311.0,61.2 311.6,60.9 312.2,60.7 312.8,60.4 313.4,60.1 314.0,59.9 314.7,59.6" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="310.7" y1="55.6" x2="318.7" y2="63.6" stroke="#0b7285" stroke-width="1.3"/><line x1="310.7" y1="63.6" x2="318.7" y2="55.6" stroke="#0b7285" stroke-width="1.3"/><line x1="266.1" y1="75.5" x2="274.1" y2="83.5" stroke="#0b7285" stroke-width="1.3"/><line x1="266.1" y1="83.5" x2="274.1" y2="75.5" stroke="#0b7285" stroke-width="1.3"/><line x1="232.2" y1="92.0" x2="240.2" y2="100.0" stroke="#0b7285" stroke-width="1.3"/><line x1="232.2" y1="100.0" x2="240.2" y2="92.0" stroke="#0b7285" stroke-width="1.3"/><line x1="205.9" y1="106.0" x2="213.9" y2="114.0" stroke="#0b7285" stroke-width="1.3"/><line x1="205.9" y1="114.0" x2="213.9" y2="106.0" stroke="#0b7285" stroke-width="1.3"/><line x1="185.0" y1="118.0" x2="193.0" y2="126.0" stroke="#0b7285" stroke-width="1.3"/><line x1="185.0" y1="126.0" x2="193.0" y2="118.0" stroke="#0b7285" stroke-width="1.3"/><line x1="168.1" y1="128.4" x2="176.1" y2="136.4" stroke="#0b7285" stroke-width="1.3"/><line x1="168.1" y1="136.4" x2="176.1" y2="128.4" stroke="#0b7285" stroke-width="1.3"/><line x1="154.3" y1="137.5" x2="162.3" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="154.3" y1="145.5" x2="162.3" y2="137.5" stroke="#0b7285" stroke-width="1.3"/><line x1="142.8" y1="145.5" x2="150.8" y2="153.5" stroke="#0b7285" stroke-width="1.3"/><line x1="142.8" y1="153.5" x2="150.8" y2="145.5" stroke="#0b7285" stroke-width="1.3"/><line x1="133.2" y1="152.7" x2="141.2" y2="160.7" stroke="#0b7285" stroke-width="1.3"/><line x1="133.2" y1="160.7" x2="141.2" y2="152.7" stroke="#0b7285" stroke-width="1.3"/><line x1="125.1" y1="159.1" x2="133.1" y2="167.1" stroke="#0b7285" stroke-width="1.3"/><line x1="125.1" y1="167.1" x2="133.1" y2="159.1" stroke="#0b7285" stroke-width="1.3"/></g></svg>' },
      caption: 'Graph 4 — stopping distance plotted against 1/W². The points lie on a curve (not a straight line through the origin), so the relationship is NOT d ∝ 1/W².',
    },
    tags: { unit: 'forces-interactions', topics: ['data processing', 'proportionality', 'inverse relationship', 'drag'], level: 'advanced' },
    tasks: [
      {
        label: 'd',
        text: 'The student hypothesised: *"As the width of the sail increases, the stopping distance will decrease because the drag force will be greater."*\n\n**Describe** the relationship shown between stopping distance and sail width in Graph 1.',
        marks: 2,
        ph: 'As sail width increases, stopping distance decreases. The relationship is inverse (not linear, not proportional).',
      },
      {
        label: 'e',
        text: '**Deduce** the relationship between the variables using the graphs.',
        marks: 1,
        ph: 'Stopping distance is directly proportional to 1/W (inversely proportional to W). Graph 3 (stopping distance vs 1/W) shows a straight line through the origin.',
      },
      {
        label: 'f',
        text: '**Explain** why increasing the sail width reduces the stopping distance.',
        marks: 3,
        ph: 'Increasing the sail width increases the cross-sectional area exposed to air. Larger area → more air resistance/drag. Greater drag removes kinetic energy from the trolley more quickly → faster deceleration → shorter stopping distance. More air particle collisions per unit time with the sail.',
      },
      {
        label: 'g',
        text: 'Graph 4 shows stopping distance against 1/W². **Evaluate** the validity of the hypothesis that stopping distance is inversely proportional to W.',
        marks: 2,
        ph: 'Graph 4 (vs 1/W²) is NOT a straight line through origin; Graph 3 (vs 1/W) IS a straight line through origin. Therefore d ∝ 1/W. The directional hypothesis (distance decreases with increasing width) is supported, but the relationship is d ∝ 1/W, not d ∝ 1/W².',
      },
    ],
  },

  // ── Q9: Prosthetic Materials — Titanium vs Carbon Fibre (7 marks, Criterion C) ──
  {
    id: 9,
    crit: 'C',
    type: 'extended',
    topic: 'Materials for Prosthetic Limbs',
    marks: 7,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'When a force is applied to a material it can cause a change in the length of that material. Young\'s modulus (E) is a measure of how much the material can be changed. Stiffer or more rigid materials have a bigger value of E. The table shows data for some materials used in prostheses.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Material', 'E / GPa', 'Density / g cm\u207b\u00b3'],
        rows: [
          ['Material P (UHMWPE)', 0.7, 0.94],
          ['Bone', 15, 1.75],
          ['Titanium alloy', 110, 4.50],
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
        ph: 'Titanium alloy (highest Young\'s modulus E = 110 GPa in the table).',
      },
      {
        label: 'b',
        text: '**Suggest** one reason why Material P (UHMWPE) might not be ideal for use in a prosthetic limb for an athlete.',
        marks: 1,
        ph: 'Material P has very low stiffness (E = 0.7 GPa) — much too flexible to support the high forces encountered in athletic competition. OR: its low density is an advantage but its very low Young\'s modulus means it would deform excessively under load.',
      },
      {
        label: 'c',
        text: '**Compare** the properties of titanium alloy with carbon fibre composite, and **evaluate** which material would be more suitable for a high-performance prosthetic running blade. Refer to density, stiffness (Young\'s modulus), and how each property affects the function of a prosthesis.',
        marks: 5,
        ph: 'Titanium alloy: E = 110 GPa (very stiff) but density = 4.5 g/cm³ (heavy). Carbon fibre: E = 40 GPa (very stiff) but density = 1.60 g/cm³ (much lighter). Both are stiff enough for athletic use. Carbon fibre is much lighter → less metabolic effort to lift limb during running. Carbon fibre preferred: sufficient stiffness + much lower mass. Recommendation: carbon fibre better suited for athletic prosthetic blade.',
      },
    ],
  },

  // ── Q10: Exoskeleton Technology Evaluation (11 marks, Criterion D — banded) ──
  {
    id: 10,
    crit: 'D',
    type: 'extended',
    topic: 'Powered Exoskeleton Technology in Sport',
    marks: 11,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    stem: 'Powered robotic exoskeletons are wearable devices that support the wearer\'s movements using motorised joints. They are used in rehabilitation, and some athletes are beginning to use them in training to assist with movement and protect against injury.',
    tags: { unit: 'forces-interactions', topics: ['exoskeleton', 'ethics', 'sport', 'technology', 'evaluation'], level: 'advanced' },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the implications of powered exoskeleton technology in sport and rehabilitation. In your answer, consider:\n- the **ethical** implications of using exoskeletons to enhance athletic performance\n- the **social** implications of exoskeleton-assisted athletes competing\n- a **concluding appraisal**',
        marks: 11,
        ph: 'Ethical: exoskeleton provides mechanical assistance (motorised joints) → significant performance advantage → debate about fair competition. Athletes without exoskeletons cannot compete equally. BUT: used in training (not competition) this might be acceptable. Access: exoskeletons very expensive → only elite/wealthy athletes can afford → inequality. Rehabilitation: huge benefit for injured athletes and people with disabilities → socially positive. Social: exoskeletons could make sport more inclusive for people with mobility impairments. Concluding appraisal: exoskeletons offer great benefit in rehabilitation; use in competition should be regulated; separate categories may be necessary; cost barrier limits access and creates inequality.',
      },
    ],
  },

  // ── Q11: Hippopotamus Prosthetic Foot — Pressure (7 marks, Criterion A) ──
  {
    id: 11,
    crit: 'A',
    type: 'extended',
    topic: 'Pressure Calculation — Hippopotamus Prosthesis',
    marks: 7,
    topicCanonical: 'Pressure, Density & Buoyancy',
    topicGroup: 'Pressure & Fluids',
    stem: 'A hippopotamus at a wildlife rescue centre was fitted with a prosthetic foot after an injury. The hippopotamus has a mass of 2000 kg and stands on four legs. Gravitational field strength g = 10 ms⁻². Each foot has a contact area of 0.04 m² with the ground.',
    tags: { unit: 'pressure', topics: ['pressure', 'force', 'area', 'prosthetics design'], level: 'proficient' },
    tasks: [
      {
        label: 'a',
        text: '**Calculate** the pressure that the hippopotamus exerts on the ground through one foot.',
        marks: 2,
        ph: 'Weight = mg = 2000 × 10 = 20 000 N. Force per foot = 20 000 / 4 = 5 000 N. Pressure = F/A = 5 000 / 0.04 = 125 000 Pa.',
      },
      {
        label: 'b',
        text: '**Explain** how the design of the prosthesis takes account of pressure when:\n1. Creating contact with the ground\n2. Connecting to the hippopotamus\'s limb',
        marks: 5,
        ph: 'Ground contact: area of prosthesis contacting ground should match the natural foot area → keeps pressure per unit area the same → prevents the foot sinking into soft ground (P = F/A: larger A → lower P). Limb contact: contact area between prosthesis and remaining limb stump should be maximised → distributes the large force over a wider area → reduces pressure on skin and tissue → prevents sores and injury.',
      },
    ],
  },
]
