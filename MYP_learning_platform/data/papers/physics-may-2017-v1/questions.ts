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
      data: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 816 600" font-family="Arial, Helvetica, sans-serif"><rect width="816" height="600" fill="#ffffff"/><g transform="translate(0,0)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="124.4" y1="30.0" x2="124.4" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="190.8" y1="30.0" x2="190.8" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="257.2" y1="30.0" x2="257.2" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="323.6" y1="30.0" x2="323.6" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="124.4" y1="260.0" x2="124.4" y2="264.0" stroke="#333" stroke-width="1"/><text x="124.4" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.1</text><line x1="190.8" y1="260.0" x2="190.8" y2="264.0" stroke="#333" stroke-width="1"/><text x="190.8" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.2</text><line x1="257.2" y1="260.0" x2="257.2" y2="264.0" stroke="#333" stroke-width="1"/><text x="257.2" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.3</text><line x1="323.6" y1="260.0" x2="323.6" y2="264.0" stroke="#333" stroke-width="1"/><text x="323.6" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.4</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.5</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">W / m</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 1: stopping distance vs W</text><polyline points="124.4,76.0 126.6,81.9 128.8,87.5 131.0,92.7 133.3,97.6 135.5,102.3 137.7,106.7 139.9,110.8 142.1,114.7 144.3,118.5 146.5,122.0 148.7,125.4 151.0,128.6 153.2,131.6 155.4,134.5 157.6,137.3 159.8,140.0 162.0,142.6 164.2,145.0 166.5,147.3 168.7,149.6 170.9,151.8 173.1,153.8 175.3,155.8 177.5,157.8 179.7,159.6 181.9,161.4 184.2,163.2 186.4,164.8 188.6,166.4 190.8,168.0 193.0,169.5 195.2,171.0 197.4,172.4 199.7,173.8 201.9,175.1 204.1,176.4 206.3,177.6 208.5,178.8 210.7,180.0 212.9,181.1 215.1,182.3 217.4,183.3 219.6,184.4 221.8,185.4 224.0,186.4 226.2,187.4 228.4,188.3 230.6,189.2 232.9,190.1 235.1,191.0 237.3,191.9 239.5,192.7 241.7,193.5 243.9,194.3 246.1,195.1 248.3,195.8 250.6,196.6 252.8,197.3 255.0,198.0 257.2,198.7 259.4,199.3 261.6,200.0 263.8,200.6 266.1,201.3 268.3,201.9 270.5,202.5 272.7,203.1 274.9,203.7 277.1,204.2 279.3,204.8 281.5,205.3 283.8,205.9 286.0,206.4 288.2,206.9 290.4,207.4 292.6,207.9 294.8,208.4 297.0,208.9 299.3,209.4 301.5,209.8 303.7,210.3 305.9,210.7 308.1,211.2 310.3,211.6 312.5,212.0 314.7,212.4 317.0,212.8 319.2,213.2 321.4,213.6 323.6,214.0 325.8,214.4 328.0,214.8 330.2,215.1 332.5,215.5 334.7,215.8 336.9,216.2 339.1,216.5 341.3,216.9 343.5,217.2 345.7,217.5 347.9,217.9 350.2,218.2 352.4,218.5 354.6,218.8 356.8,219.1 359.0,219.4 361.2,219.7 363.4,220.0 365.7,220.3 367.9,220.6 370.1,220.9 372.3,221.1 374.5,221.4 376.7,221.7 378.9,221.9 381.1,222.2 383.4,222.4 385.6,222.7 387.8,223.0 390.0,223.2" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="120.4" y1="72.0" x2="128.4" y2="80.0" stroke="#0b7285" stroke-width="1.3"/><line x1="120.4" y1="80.0" x2="128.4" y2="72.0" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="108.8" x2="145.0" y2="116.8" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="116.8" x2="145.0" y2="108.8" stroke="#0b7285" stroke-width="1.3"/><line x1="164.9" y1="145.8" x2="172.9" y2="153.8" stroke="#0b7285" stroke-width="1.3"/><line x1="164.9" y1="153.8" x2="172.9" y2="145.8" stroke="#0b7285" stroke-width="1.3"/><line x1="220.0" y1="182.4" x2="228.0" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="220.0" y1="190.4" x2="228.0" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="319.6" y1="210.0" x2="327.6" y2="218.0" stroke="#0b7285" stroke-width="1.3"/><line x1="319.6" y1="218.0" x2="327.6" y2="210.0" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="219.2" x2="394.0" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="227.2" x2="394.0" y2="219.2" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(408,0)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="124.4" y1="30.0" x2="124.4" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="190.8" y1="30.0" x2="190.8" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="257.2" y1="30.0" x2="257.2" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="323.6" y1="30.0" x2="323.6" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="124.4" y1="260.0" x2="124.4" y2="264.0" stroke="#333" stroke-width="1"/><text x="124.4" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.05</text><line x1="190.8" y1="260.0" x2="190.8" y2="264.0" stroke="#333" stroke-width="1"/><text x="190.8" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.1</text><line x1="257.2" y1="260.0" x2="257.2" y2="264.0" stroke="#333" stroke-width="1"/><text x="257.2" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.15</text><line x1="323.6" y1="260.0" x2="323.6" y2="264.0" stroke="#333" stroke-width="1"/><text x="323.6" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.2</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0.25</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">W² / m²</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 2: stopping distance vs W²</text><polyline points="71.3,76.0 72.2,81.9 73.1,87.5 74.1,92.7 75.1,97.6 76.1,102.3 77.1,106.7 78.2,110.8 79.3,114.7 80.4,118.5 81.6,122.0 82.8,125.4 84.0,128.6 85.3,131.6 86.6,134.5 87.9,137.3 89.2,140.0 90.6,142.6 92.0,145.0 93.4,147.3 94.9,149.6 96.4,151.8 97.9,153.8 99.4,155.8 101.0,157.8 102.6,159.6 104.3,161.4 105.9,163.2 107.6,164.8 109.4,166.4 111.1,168.0 112.9,169.5 114.7,171.0 116.6,172.4 118.4,173.8 120.3,175.1 122.3,176.4 124.2,177.6 126.2,178.8 128.3,180.0 130.3,181.1 132.4,182.3 134.5,183.3 136.6,184.4 138.8,185.4 141.0,186.4 143.2,187.4 145.5,188.3 147.8,189.2 150.1,190.1 152.4,191.0 154.8,191.9 157.2,192.7 159.7,193.5 162.1,194.3 164.6,195.1 167.1,195.8 169.7,196.6 172.3,197.3 174.9,198.0 177.5,198.7 180.2,199.3 182.9,200.0 185.6,200.6 188.4,201.3 191.2,201.9 194.0,202.5 196.8,203.1 199.7,203.7 202.6,204.2 205.6,204.8 208.5,205.3 211.5,205.9 214.5,206.4 217.6,206.9 220.7,207.4 223.8,207.9 226.9,208.4 230.1,208.9 233.3,209.4 236.5,209.8 239.8,210.3 243.1,210.7 246.4,211.2 249.8,211.6 253.1,212.0 256.6,212.4 260.0,212.8 263.5,213.2 267.0,213.6 270.5,214.0 274.0,214.4 277.6,214.8 281.2,215.1 284.9,215.5 288.6,215.8 292.3,216.2 296.0,216.5 299.8,216.9 303.5,217.2 307.4,217.5 311.2,217.9 315.1,218.2 319.0,218.5 323.0,218.8 326.9,219.1 330.9,219.4 334.9,219.7 339.0,220.0 343.1,220.3 347.2,220.6 351.4,220.9 355.5,221.1 359.7,221.4 364.0,221.7 368.2,221.9 372.5,222.2 376.9,222.4 381.2,222.7 385.6,223.0 390.0,223.2" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="67.3" y1="72.0" x2="75.3" y2="80.0" stroke="#0b7285" stroke-width="1.3"/><line x1="67.3" y1="80.0" x2="75.3" y2="72.0" stroke="#0b7285" stroke-width="1.3"/><line x1="74.8" y1="108.8" x2="82.8" y2="116.8" stroke="#0b7285" stroke-width="1.3"/><line x1="74.8" y1="116.8" x2="82.8" y2="108.8" stroke="#0b7285" stroke-width="1.3"/><line x1="91.0" y1="145.8" x2="99.0" y2="153.8" stroke="#0b7285" stroke-width="1.3"/><line x1="91.0" y1="153.8" x2="99.0" y2="145.8" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="182.4" x2="145.0" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="190.4" x2="145.0" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="266.5" y1="210.0" x2="274.5" y2="218.0" stroke="#0b7285" stroke-width="1.3"/><line x1="266.5" y1="218.0" x2="274.5" y2="210.0" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="219.2" x2="394.0" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="227.2" x2="394.0" y2="219.2" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(0,300)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="124.4" y1="30.0" x2="124.4" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="190.8" y1="30.0" x2="190.8" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="257.2" y1="30.0" x2="257.2" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="323.6" y1="30.0" x2="323.6" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="124.4" y1="260.0" x2="124.4" y2="264.0" stroke="#333" stroke-width="1"/><text x="124.4" y="276.0" font-size="10" fill="#333" text-anchor="middle">2</text><line x1="190.8" y1="260.0" x2="190.8" y2="264.0" stroke="#333" stroke-width="1"/><text x="190.8" y="276.0" font-size="10" fill="#333" text-anchor="middle">4</text><line x1="257.2" y1="260.0" x2="257.2" y2="264.0" stroke="#333" stroke-width="1"/><text x="257.2" y="276.0" font-size="10" fill="#333" text-anchor="middle">6</text><line x1="323.6" y1="260.0" x2="323.6" y2="264.0" stroke="#333" stroke-width="1"/><text x="323.6" y="276.0" font-size="10" fill="#333" text-anchor="middle">8</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">10</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">1/W / m⁻¹</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 3: stopping distance vs 1/W</text><line x1="58.0" y1="260.0" x2="390.0" y2="76.0" stroke="#0b7285" stroke-width="2.0"/><line x1="120.4" y1="219.2" x2="128.4" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="120.4" y1="227.2" x2="128.4" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="210.0" x2="145.0" y2="218.0" stroke="#0b7285" stroke-width="1.3"/><line x1="137.0" y1="218.0" x2="145.0" y2="210.0" stroke="#0b7285" stroke-width="1.3"/><line x1="186.8" y1="182.4" x2="194.8" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="186.8" y1="190.4" x2="194.8" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="252.8" y1="145.8" x2="260.8" y2="153.8" stroke="#0b7285" stroke-width="1.3"/><line x1="252.8" y1="153.8" x2="260.8" y2="145.8" stroke="#0b7285" stroke-width="1.3"/><line x1="319.6" y1="108.8" x2="327.6" y2="116.8" stroke="#0b7285" stroke-width="1.3"/><line x1="319.6" y1="116.8" x2="327.6" y2="108.8" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="72.0" x2="394.0" y2="80.0" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="80.0" x2="394.0" y2="72.0" stroke="#0b7285" stroke-width="1.3"/></g><g transform="translate(408,300)"><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="124.4" y1="30.0" x2="124.4" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="190.8" y1="30.0" x2="190.8" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="257.2" y1="30.0" x2="257.2" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="323.6" y1="30.0" x2="323.6" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="390.0" y1="30.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="214.0" x2="390.0" y2="214.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="168.0" x2="390.0" y2="168.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="122.0" x2="390.0" y2="122.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="76.0" x2="390.0" y2="76.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="390.0" y2="30.0" stroke="#d7dce0" stroke-width="0.8"/><line x1="58.0" y1="30.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="390.0" y2="260.0" stroke="#333" stroke-width="1.5"/><line x1="58.0" y1="260.0" x2="58.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="58.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">0</text><line x1="124.4" y1="260.0" x2="124.4" y2="264.0" stroke="#333" stroke-width="1"/><text x="124.4" y="276.0" font-size="10" fill="#333" text-anchor="middle">20</text><line x1="190.8" y1="260.0" x2="190.8" y2="264.0" stroke="#333" stroke-width="1"/><text x="190.8" y="276.0" font-size="10" fill="#333" text-anchor="middle">40</text><line x1="257.2" y1="260.0" x2="257.2" y2="264.0" stroke="#333" stroke-width="1"/><text x="257.2" y="276.0" font-size="10" fill="#333" text-anchor="middle">60</text><line x1="323.6" y1="260.0" x2="323.6" y2="264.0" stroke="#333" stroke-width="1"/><text x="323.6" y="276.0" font-size="10" fill="#333" text-anchor="middle">80</text><line x1="390.0" y1="260.0" x2="390.0" y2="264.0" stroke="#333" stroke-width="1"/><text x="390.0" y="276.0" font-size="10" fill="#333" text-anchor="middle">100</text><line x1="54.0" y1="260.0" x2="58.0" y2="260.0" stroke="#333" stroke-width="1"/><text x="51.0" y="263.5" font-size="10" fill="#333" text-anchor="end">0</text><line x1="54.0" y1="214.0" x2="58.0" y2="214.0" stroke="#333" stroke-width="1"/><text x="51.0" y="217.5" font-size="10" fill="#333" text-anchor="end">5</text><line x1="54.0" y1="168.0" x2="58.0" y2="168.0" stroke="#333" stroke-width="1"/><text x="51.0" y="171.5" font-size="10" fill="#333" text-anchor="end">10</text><line x1="54.0" y1="122.0" x2="58.0" y2="122.0" stroke="#333" stroke-width="1"/><text x="51.0" y="125.5" font-size="10" fill="#333" text-anchor="end">15</text><line x1="54.0" y1="76.0" x2="58.0" y2="76.0" stroke="#333" stroke-width="1"/><text x="51.0" y="79.5" font-size="10" fill="#333" text-anchor="end">20</text><line x1="54.0" y1="30.0" x2="58.0" y2="30.0" stroke="#333" stroke-width="1"/><text x="51.0" y="33.5" font-size="10" fill="#333" text-anchor="end">25</text><text x="224.0" y="294.0" font-size="11" fill="#222" text-anchor="middle">1/W² / m⁻²</text><text x="14" y="145.0" font-size="11" fill="#222" text-anchor="middle" transform="rotate(-90 14 145.0)">Stopping distance / m</text><text x="224.0" y="13" font-size="12" font-weight="bold" fill="#222" text-anchor="middle">Graph 4: stopping distance vs 1/W²</text><polyline points="71.3,223.2 71.5,223.0 71.6,222.7 71.8,222.4 72.0,222.2 72.2,221.9 72.4,221.7 72.6,221.4 72.8,221.1 73.0,220.9 73.2,220.6 73.5,220.3 73.7,220.0 73.9,219.7 74.2,219.4 74.4,219.1 74.6,218.8 74.9,218.5 75.1,218.2 75.4,217.9 75.7,217.5 76.0,217.2 76.2,216.9 76.5,216.5 76.8,216.2 77.1,215.8 77.4,215.5 77.8,215.1 78.1,214.8 78.4,214.4 78.8,214.0 79.1,213.6 79.5,213.2 79.8,212.8 80.2,212.4 80.6,212.0 81.0,211.6 81.4,211.2 81.8,210.7 82.3,210.3 82.7,209.8 83.1,209.4 83.6,208.9 84.1,208.4 84.6,207.9 85.1,207.4 85.6,206.9 86.2,206.4 86.7,205.9 87.3,205.3 87.9,204.8 88.5,204.2 89.1,203.7 89.8,203.1 90.4,202.5 91.1,201.9 91.8,201.3 92.5,200.6 93.3,200.0 94.1,199.3 94.9,198.7 95.7,198.0 96.6,197.3 97.5,196.6 98.4,195.8 99.4,195.1 100.3,194.3 101.4,193.5 102.4,192.7 103.5,191.9 104.7,191.0 105.9,190.1 107.1,189.2 108.4,188.3 109.7,187.4 111.1,186.4 112.6,185.4 114.1,184.4 115.6,183.3 117.3,182.3 119.0,181.1 120.8,180.0 122.6,178.8 124.6,177.6 126.6,176.4 128.7,175.1 130.9,173.8 133.3,172.4 135.7,171.0 138.3,169.5 141.0,168.0 143.8,166.4 146.8,164.8 150.0,163.2 153.3,161.4 156.8,159.6 160.5,157.8 164.4,155.8 168.5,153.8 172.9,151.8 177.5,149.6 182.4,147.3 187.7,145.0 193.3,142.6 199.2,140.0 205.6,137.3 212.3,134.5 219.6,131.6 227.4,128.6 235.8,125.4 244.8,122.0 254.4,118.5 264.9,114.7 276.3,110.8 288.6,106.7 301.9,102.3 316.5,97.6 332.4,92.7 349.8,87.5 368.9,81.9 390.0,76.0" fill="none" stroke="#0b7285" stroke-width="2.0"/><line x1="67.3" y1="219.2" x2="75.3" y2="227.2" stroke="#0b7285" stroke-width="1.3"/><line x1="67.3" y1="227.2" x2="75.3" y2="219.2" stroke="#0b7285" stroke-width="1.3"/><line x1="74.8" y1="210.0" x2="82.8" y2="218.0" stroke="#0b7285" stroke-width="1.3"/><line x1="74.8" y1="218.0" x2="82.8" y2="210.0" stroke="#0b7285" stroke-width="1.3"/><line x1="107.1" y1="182.4" x2="115.1" y2="190.4" stroke="#0b7285" stroke-width="1.3"/><line x1="107.1" y1="190.4" x2="115.1" y2="182.4" stroke="#0b7285" stroke-width="1.3"/><line x1="173.0" y1="145.8" x2="181.0" y2="153.8" stroke="#0b7285" stroke-width="1.3"/><line x1="173.0" y1="153.8" x2="181.0" y2="145.8" stroke="#0b7285" stroke-width="1.3"/><line x1="266.5" y1="108.8" x2="274.5" y2="116.8" stroke="#0b7285" stroke-width="1.3"/><line x1="266.5" y1="116.8" x2="274.5" y2="108.8" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="72.0" x2="394.0" y2="80.0" stroke="#0b7285" stroke-width="1.3"/><line x1="386.0" y1="80.0" x2="394.0" y2="72.0" stroke="#0b7285" stroke-width="1.3"/></g><line x1="408" y1="0" x2="408" y2="600" stroke="#bbb" stroke-width="1"/><line x1="0" y1="300" x2="816" y2="300" stroke="#bbb" stroke-width="1"/></svg>' },
      caption: 'Four graphs of the same stopping-distance data. Graph 1 (vs W) and Graph 2 (vs W²) are decreasing curves. Graph 3 (vs 1/W) is a straight line through the origin — so d ∝ 1/W. Graph 4 (vs 1/W²) is a curve (not a straight line through the origin), so d is NOT ∝ 1/W².',
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
