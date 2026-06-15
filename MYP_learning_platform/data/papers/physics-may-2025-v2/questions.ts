import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — May 2025 · VARIANT 2  (isomorphic to physics-may-2025)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags) in a NEW real-world context — DIFFERENT from both the source
// and Variant 1 — with self-contained data-driven artefacts (no image files).
// Numbers recomputed throughout.
//   Q1 Electrostatics:  defibrillator → electrostatic PAINT SPRAYING (car body)
//   Q2 Refraction:      straw in glass → SWIMMER seeing a coin on a pool floor
//   Q3 Nuclear fission: ²³⁶U→¹⁴⁰Xe+⁹³Sr+3n → ²³⁶U→¹⁴⁴Cs+⁹⁰Rb+2n
//   Q4 Motion:          cotton-reel car → WIND-UP (clockwork) spring toy car
//   Q5 Crit B design:   cotton-reel investigation → wind-up car investigation
//   Q6 Energy/V–IV:     thermoelectric generator → WIND-TURBINE generator (V vs wind speed)
//   Q7 Space:           Clarke-belt comms → STARLINK mega-constellation & space debris
//   Q8 Crit D essay:    space elevator → first crewed MARS BASE
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-may-2025-v2',
  subject: 'Physics',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electrostatic paint spraying & electricity (7 marks) Criterion A
  // V2: E=240 J, V=600 V, t=50 ms → I = E/(V·t) = 240/(600×0.050) = 8 A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Electrostatic Paint Spraying',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['electric charge', 'electrical power', 'potential difference (voltage)'], level: 'proficient' },
    stem: 'In a car factory, body panels are painted using an electrostatic spray gun. As the paint leaves the nozzle, a high-voltage unit gives every paint droplet a negative charge. The metal car body is connected to earth (a positive terminal), so the negatively charged droplets are attracted to it and spread into an even coat, even reaching around the back of the panel.',
    artefact: {
      component: 'FieldSim',
      data: {
        title: 'Electrostatic paint spraying',
        field: 'E',
        plates: { top: 'Earthed car panel (+)', bottom: 'Spray nozzle (−)' },
        particles: [{ name: 'charged paint droplet', charge: -1 }],
        expected: 'The negatively charged paint droplet is attracted toward the positive earthed car panel.',
      },
      caption: 'Negatively charged paint droplets drift across the field and are attracted to the positive earthed car panel.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the particles that move to give the paint droplets their negative charge in the spray gun.\n\nOptions: Atoms | Electrons | Neutrons | Protons',
        marks: 1,
        ph: 'Write your chosen option here...',
      },
      {
        label: 'b',
        text: 'The high-voltage unit transfers **240 J** of electrical energy at a voltage of **600 V** to charge a batch of droplets. **Calculate** the current that flows during the **50 milliseconds** the charging pulse lasts.',
        marks: 3,
        ph: 'Show your working (equation, substitution, answer with unit)...',
      },
      {
        label: 'c',
        text: 'Before reaching the car body, every paint droplet is first given an electric charge by the spray gun. **Suggest** why the droplets must be charged in order to coat the panel evenly.',
        marks: 1,
        ph: 'Suggest a reason...',
      },
      {
        label: 'd',
        text: 'Two designs of spray gun are used. A **corona** gun charges the paint with a sharp electrode at the nozzle tip. A **bell** gun spins the paint off the rim of a fast-rotating disc while charging it. **Suggest** an advantage of each type of spray gun.\n\nCorona-gun advantage:\n\nBell-gun advantage:',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="gun" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="600" height="250" fill="#ffffff"/><text x="150" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Corona gun</text><rect x="40" y="95" width="90" height="36" rx="6" fill="url(#gun)" stroke="#5b6b78"/><polygon points="130,100 170,113 130,126" fill="#8a99a6" stroke="#5b6b78"/><line x1="170" y1="113" x2="182" y2="113" stroke="#0b7285" stroke-width="3"/><text x="186" y="100" font-size="11" fill="#0b7285">electrode (−)</text><g fill="#e8772e"><circle cx="210" cy="100" r="3"/><circle cx="230" cy="113" r="3"/><circle cx="212" cy="128" r="3"/><circle cx="245" cy="106" r="3"/><circle cx="248" cy="122" r="3"/></g><rect x="270" y="60" width="14" height="120" fill="#5b6b78"/><text x="277" y="200" font-size="11" text-anchor="middle" fill="#5b6b78">panel (+)</text><text x="450" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Bell gun</text><rect x="360" y="95" width="70" height="36" rx="6" fill="url(#gun)" stroke="#5b6b78"/><ellipse cx="440" cy="113" rx="10" ry="26" fill="#b6c4cf" stroke="#5b6b78"/><path d="M440,87 A26,26 0 0 1 440,139" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="3 3"/><text x="440" y="160" font-size="11" text-anchor="middle" fill="#0b7285">spinning bell (−)</text><g fill="#e8772e"><circle cx="470" cy="92" r="3"/><circle cx="478" cy="113" r="3"/><circle cx="470" cy="134" r="3"/><circle cx="495" cy="100" r="3"/><circle cx="498" cy="126" r="3"/></g><rect x="540" y="60" width="14" height="120" fill="#5b6b78"/><text x="547" y="200" font-size="11" text-anchor="middle" fill="#5b6b78">panel (+)</text></svg>',
          },
          caption: 'Corona spray gun (left) and rotating-bell spray gun (right).',
        },
        ph: 'Corona gun: ...\n\nBell gun: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Refraction of Light (10 marks) Criterion A
  // V2: blue light 450 nm → f = (3.0×10⁸)/(450×10⁻⁹) = 6.7×10¹⁴ Hz
  //     longer wavelength than blue: green/yellow/orange/red
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Waves — Refraction of Light',
    marks: 10,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['refraction', 'refractive index', "Snell's law"], level: 'proficient' },
    stem: 'Refraction of light can help people to see more clearly but it can also cause optical illusions. A swimmer floating at the surface of a swimming pool looks down at a coin lying on the bottom. The coin appears to be in a shallower position than it really is.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#5aa9cf"/></linearGradient><marker id="ah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect x="0" y="120" width="600" height="200" fill="url(#pool)"/><line x1="0" y1="120" x2="600" y2="120" stroke="#3f7e98" stroke-width="2"/><text x="20" y="142" font-size="12" fill="#2c5468">water surface</text><line x1="0" y1="312" x2="600" y2="312" stroke="#9aa7ad" stroke-width="6"/><text x="20" y="304" font-size="11" fill="#6b7780">pool floor</text><circle cx="150" cy="60" r="14" fill="#f1c27d" stroke="#c98a3c"/><path d="M150,74 q-22,18 0,40 q22,-22 0,-40 Z" fill="#3a6ea5"/><text x="124" y="132" font-size="11" fill="#1f2d3a">swimmer</text><ellipse cx="430" cy="296" rx="20" ry="7" fill="#e3a93c" stroke="#a8721a"/><text x="404" y="290" font-size="11" fill="#7a5310">real coin</text><ellipse cx="430" cy="220" rx="17" ry="6" fill="none" stroke="#a8721a" stroke-dasharray="4 3"/><text x="404" y="214" font-size="11" fill="#a8721a">apparent coin</text><path d="M430,296 L290,120" stroke="#0b7285" stroke-width="2"/><path d="M290,120 L162,76" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah2)"/><line x1="290" y1="92" x2="290" y2="155" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="296" y="90" font-size="10" fill="#94a3ad">normal</text><path d="M430,220 L290,120" stroke="#a8721a" stroke-width="1.5" stroke-dasharray="5 4"/></svg>',
      },
      caption: 'Light from the coin bends as it leaves the water, so the swimmer sees the coin shallower than it really is.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Blue light has a wavelength of 450 nm. **Calculate** the frequency of blue light. Assume the speed of light = 3.0 × 10⁸ m s⁻¹. Give your answer to two significant figures.',
        marks: 3,
        ph: 'State formula, convert units, show substitution, give answer with unit...',
      },
      {
        label: 'b',
        text: '**State** one colour of visible light that has a longer wavelength than blue light.',
        marks: 1,
        ph: 'Colour: ...',
      },
      {
        label: 'c',
        text: 'Light travels as waves. Refraction of light changes some of the characteristics of light. The diagram shows a light ray passing from air into water.\n\n**Select** one quantity that remains constant when light is refracted through transparent materials.\n\nOptions: Direction | Frequency | Speed | Wavelength',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="420" height="280" fill="#ffffff"/><rect x="0" y="140" width="420" height="140" fill="#cfe9f6"/><line x1="0" y1="140" x2="420" y2="140" stroke="#3f7e98" stroke-width="2"/><text x="14" y="30" font-size="12" fill="#5b6b78">air</text><text x="14" y="166" font-size="12" fill="#2c5468">water</text><line x1="210" y1="40" x2="210" y2="240" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="216" y="52" font-size="10" fill="#94a3ad">normal</text><path d="M90,55 L210,140" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah3)"/><path d="M210,140 L300,235" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah3)"/><path d="M210,80 A60,60 0 0 1 178,128" fill="none" stroke="#a8531a" stroke-width="1.2"/><text x="150" y="108" font-size="11" fill="#a8531a">i</text><path d="M210,170 A50,50 0 0 0 236,208" fill="none" stroke="#a8531a" stroke-width="1.2"/><text x="240" y="196" font-size="11" fill="#a8531a">r</text></svg>',
          },
          caption: 'A ray of light refracting as it passes from air into water.',
        },
        ph: 'Write your chosen quantity...',
      },
      {
        label: 'd',
        text: 'Refraction can make us believe that objects are in a location different from reality. Using the diagram of the swimmer looking at the coin, **explain** why the swimmer believes the coin is in a different location from where it really is.',
        marks: 3,
        ph: 'Explain the path of light and how the brain interprets it...',
      },
      {
        label: 'e',
        text: 'One use of refraction is to correct short-sightedness, which happens when light rays meet in front of the retina. **Outline** how the use of a diverging lens helps to correct short-sightedness.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah4" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="480" height="260" fill="#ffffff"/><path d="M300,60 Q360,130 300,200 Q260,130 300,60 Z" fill="#eaf3f7" stroke="#3a6ea5" stroke-width="2"/><text x="300" y="222" font-size="11" text-anchor="middle" fill="#3a6ea5">eyeball</text><path d="M150,90 Q138,130 150,170 Q162,130 150,90 Z" fill="#dff0d8" stroke="#3a7d44" stroke-width="2"/><text x="150" y="200" font-size="11" text-anchor="middle" fill="#3a7d44">diverging lens</text><line x1="40" y1="110" x2="150" y2="110" stroke="#0b7285" stroke-width="2"/><line x1="40" y1="150" x2="150" y2="150" stroke="#0b7285" stroke-width="2"/><path d="M150,110 L330,118" stroke="#0b7285" stroke-width="2" marker-end="url(#ah4)"/><path d="M150,150 L330,142" stroke="#0b7285" stroke-width="2" marker-end="url(#ah4)"/><circle cx="333" cy="130" r="4" fill="#c0392b"/><text x="340" y="128" font-size="10" fill="#c0392b">retina</text><text x="36" y="100" font-size="10" fill="#0b7285">parallel rays</text></svg>',
          },
          caption: 'A diverging (concave) lens spreads the rays before they enter the eye.',
        },
        ph: 'Describe what the lens does to the light rays and how this shifts the focal point onto the retina...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Nuclear Energy & Uranium Fission (9 marks) Criterion A
  // V2: ²³⁶U→¹⁴⁴Cs+⁹⁰Rb+? n  →  236 = 144 + 90 + 2  →  2 neutrons
  //     E = 2.9×10⁻¹¹ J;  m = E/c² = 2.9×10⁻¹¹ / 9×10¹⁶ = 3.2×10⁻²⁸ kg
  //     10.4 GJ → (10.4×10⁹)/(2.9×10⁻¹¹) = 3.59×10²⁰ ≈ 3.6×10²⁰ reactions
  //     efficiency 38%, 1.6×10⁹ W → P_total = 1.6×10⁹/0.38 = 4.2×10⁹ W
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Nuclear Physics — Uranium Fission',
    marks: 9,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['nuclear equations', 'radioactive decay', 'nuclear energy'], level: 'proficient' },
    stem: 'Nuclear energy is a possible solution to our growing energy demands. Nuclear power stations use uranium as a fuel. Uranium-235 (²³⁵U) can absorb a neutron to form uranium-236 (²³⁶U), which then undergoes nuclear fission:\n\n    ²³⁶U  →  ¹⁴⁴Cs  +  ⁹⁰Rb  +  ? n\n\nEach fission reaction releases 2.9 × 10⁻¹¹ J of energy.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nuc" cx="0.4" cy="0.35"><stop offset="0" stop-color="#7fb2c9"/><stop offset="1" stop-color="#2c6c86"/></radialGradient><marker id="ah5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><circle cx="50" cy="110" r="7" fill="#c0392b"/><text x="34" y="135" font-size="10" fill="#c0392b">neutron</text><line x1="60" y1="110" x2="150" y2="110" stroke="#444" stroke-width="1.5" marker-end="url(#ah5)"/><circle cx="185" cy="110" r="34" fill="url(#nuc)" stroke="#1f4a5c"/><text x="185" y="114" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">²³⁶U</text><line x1="225" y1="110" x2="285" y2="110" stroke="#444" stroke-width="1.5"/><circle cx="345" cy="60" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="345" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">¹⁴⁴Cs</text><circle cx="345" cy="165" r="22" fill="#5b9a6b" stroke="#356b44"/><text x="345" y="169" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">⁹⁰Rb</text><line x1="380" y1="55" x2="470" y2="40" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ah5)"/><line x1="385" y1="110" x2="475" y2="110" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ah5)"/><text x="500" y="113" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
      },
      caption: 'A slow neutron is absorbed by uranium-236, which splits into two daughter nuclei and releases more neutrons and energy.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** one problem with using fossil fuels as an energy resource.',
        marks: 1,
        ph: 'One problem: ...',
      },
      {
        label: 'b',
        text: '**State** the difference between a nucleus of U-235 and a nucleus of U-236.',
        marks: 1,
        ph: 'The difference is in the number of ...',
      },
      {
        label: 'c',
        text: '**Identify** the number of neutrons (?) that would balance the nuclear fission equation shown above.',
        marks: 1,
        ph: 'Number of neutrons = ...',
      },
      {
        label: 'd',
        text: 'Use the equation E = mc² to **calculate** the mass difference between U-236 and the fission products. Assume c = 3.0 × 10⁸ m s⁻¹. Give your answer to 2 or more significant figures and include the unit.',
        marks: 2,
        ph: 'Rearrange E = mc² for m, then substitute values. State unit...',
      },
      {
        label: 'e',
        text: 'In a developed country, one family used 10.4 GJ of energy in a year. **Calculate** the number of fission reactions required to meet the energy needs of this family.',
        marks: 2,
        ph: 'Convert GJ to J first, then divide by energy per fission...',
      },
      {
        label: 'f',
        text: 'A nuclear power station operates with an efficiency of 38%. If the station generates 1.6 × 10⁹ W of electrical power, **calculate** the total power released through nuclear fission in the nuclear reactor.',
        marks: 2,
        ph: 'Use efficiency = useful power / total power. Rearrange for total power...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Wind-up (clockwork) spring toy car / Motion (10 marks) Criterion C
  // V2: interval 0.05 s → f = 1/0.05 = 20 Hz
  //     read v at t = 0.20 s → 32 cm/s
  //     gradient (0.05→0.25): (40−8)/(0.25−0.05)=32/0.20=160 cm s⁻² (=1.6 m s⁻²)
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Motion — Wind-Up Spring Toy Car',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'acceleration', 'distance-time graphs'], level: 'proficient' },
    stem: 'An MYP student investigates the motion of a wind-up (clockwork) toy car. The car is powered by a coiled metal spring inside it. The student winds the spring with a key, releases the car, and uses video analysis to track its position at regular time intervals as the spring unwinds.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah6" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><line x1="40" y1="170" x2="520" y2="170" stroke="#5b6b78" stroke-width="3"/><rect x="150" y="136" width="130" height="28" rx="8" fill="#f08c00"/><circle cx="174" cy="170" r="15" fill="#2c3e50"/><circle cx="256" cy="170" r="15" fill="#2c3e50"/><circle cx="174" cy="170" r="5" fill="#9aa7ad"/><circle cx="256" cy="170" r="5" fill="#9aa7ad"/><g stroke="#a8531a" stroke-width="2" fill="none"><circle cx="215" cy="150" r="4"/><circle cx="215" cy="150" r="8"/><circle cx="215" cy="150" r="12"/></g><text x="215" y="128" font-size="10" text-anchor="middle" fill="#a8531a">coiled spring</text><rect x="288" y="146" width="10" height="3" fill="#5b6b78"/><line x1="298" y1="147" x2="312" y2="147" stroke="#5b6b78" stroke-width="3"/><circle cx="316" cy="147" r="6" fill="none" stroke="#5b6b78" stroke-width="2"/><text x="322" y="138" font-size="10" fill="#5b6b78">winding key</text><line x1="300" y1="110" x2="420" y2="110" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah6)"/><text x="350" y="102" font-size="12" fill="#0b7285">motion</text><circle cx="40" cy="190" r="2.5" fill="#c0392b"/><circle cx="140" cy="190" r="2.5" fill="#c0392b"/><circle cx="240" cy="190" r="2.5" fill="#c0392b"/><circle cx="340" cy="190" r="2.5" fill="#c0392b"/><circle cx="440" cy="190" r="2.5" fill="#c0392b"/><text x="350" y="210" font-size="10" fill="#c0392b">tracked positions every 0.05 s</text></svg>',
      },
      caption: 'A wind-up spring toy car. Video analysis records the car\'s position at equal time intervals as the spring unwinds.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The video analysis records the position of the car every 0.05 s. **Calculate** the frequency with which the position data is recorded. Include an appropriate unit.',
        marks: 2,
        ph: 'State formula, substitute values, give unit...',
      },
      {
        label: 'b',
        text: 'Using the data table shown, read the velocity of the wind-up car at t = 0.20 s.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Time t / s', 'Velocity v / cm s⁻¹'],
            rows: [['0.05', '8'], ['0.10', '16'], ['0.15', '24'], ['0.20', '32'], ['0.25', '40']],
          },
          caption: 'Velocity of the wind-up car from the video analysis.',
        },
        ph: 'Velocity at t = 0.20 s = ... cm s⁻¹',
      },
      {
        label: 'c',
        text: 'The student processed the data and drew a velocity–time graph (shown below). **Calculate** the gradient of the line of best fit between t = 0.05 s and t = 0.25 s. Give the unit and **state** the quantity that the gradient represents.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'velocity / cm s⁻¹',
            points: [[0.05, 8], [0.10, 16], [0.15, 24], [0.20, 32], [0.25, 40]],
            readouts: [{ x: 0.20, note: 'read v at t = 0.20 s' }],
            dataMaxX: 0.25,
          },
          caption: 'Velocity–time graph for the wind-up car (drag the crosshair to read values).',
        },
        ph: 'Gradient = Δv / Δt = ... / ... = ... (unit)\nQuantity: ...',
      },
      {
        label: 'd',
        text: 'The student repeated the experiment after winding the spring with twice as many turns of the key. **Predict** how the line of best fit drawn in part (c) would change. **Justify** your answer.',
        marks: 2,
        ph: 'Prediction: ...\nJustification (link to force / energy): ...',
      },
      {
        label: 'e',
        text: 'A second student collects motion data using only a ruler and a stopwatch. **Outline** two limitations of this second student\'s data compared to data obtained using video analysis.',
        marks: 2,
        ph: 'Limitation 1: ...\n\nLimitation 2: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Wind-up car Investigation Design (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design — Wind-Up Car Investigation',
    marks: 17,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'acceleration', 'equations of motion (SUVAT)'], level: 'proficient' },
    stem: 'After completing the first experiment investigating the motion of a wind-up toy car, a student wants to extend their investigation by measuring a different dependent variable.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><line x1="30" y1="150" x2="530" y2="150" stroke="#5b6b78" stroke-width="3"/><g><rect x="60" y="124" width="90" height="20" rx="6" fill="#f08c00"/><circle cx="82" cy="150" r="11" fill="#2c3e50"/><circle cx="128" cy="150" r="11" fill="#2c3e50"/><circle cx="105" cy="134" r="5" fill="none" stroke="#a8531a" stroke-width="1.5"/></g><line x1="30" y1="165" x2="530" y2="165" stroke="#94a3ad" stroke-width="1"/><g font-size="10" fill="#94a3ad"><text x="30" y="180">0</text><text x="180" y="180">50</text><text x="330" y="180">100</text><text x="480" y="180">150 cm</text></g><line x1="180" y1="160" x2="180" y2="170" stroke="#94a3ad"/><line x1="330" y1="160" x2="330" y2="170" stroke="#94a3ad"/><line x1="480" y1="160" x2="480" y2="170" stroke="#94a3ad"/><rect x="440" y="60" width="70" height="44" rx="6" fill="#222" stroke="#000"/><text x="475" y="86" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00</text><text x="475" y="118" font-size="10" fill="#5b6b78" text-anchor="middle">stopwatch</text><text x="60" y="40" font-size="13" font-weight="700" fill="#1f2d3a">Wind-up car on a measured track</text></svg>',
      },
      caption: 'A wind-up car released along a marked track, timed over a fixed distance.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a method to investigate the effect of changing the number of turns used to wind the spring on the time taken for the car to travel a fixed distance.\n\nIn your plan, you must include:\n• the independent variable, dependent variable, and one control variable\n• a hypothesis\n• details of any additional measuring equipment you will need to perform the experiment\n• a detailed method for how you will collect the data\n• details of how you will collect sufficient data',
        marks: 16,
        ph: 'VARIABLES:\nIndependent variable:\nDependent variable:\nControl variable (+ justification):\n\nHYPOTHESIS:\nIf ... then ... because ...\n\nEQUIPMENT:\n•\n•\n\nMETHOD:\n1.\n2.\n...\n\nSUFFICIENT DATA:\n• Number of different IV values:\n• Number of repeats per value:',
      },
      {
        label: 'b',
        text: 'The research question of the student in part (a) was:\n\n"How does the number of turns used to wind the spring affect the time taken for the car to travel a fixed distance?"\n\nAnother student wants to carry out a different investigation using a similar wind-up car. **Suggest** an alternative research question.',
        marks: 1,
        ph: 'How does [different variable] affect [outcome] of the wind-up car?',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Wind-turbine generator (23 marks) Criterion B/C/A
  // V2: V vs wind speed; missing wind speed: anemometer reads 5.0 m/s but
  //     over-reads by 0.4 m/s (calibration) → true = 5.0 − 0.4 = 4.6 m/s
  //     motor power P = VI = 0.48×0.15 = 0.072 W
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Energy — Wind-Turbine Generator',
    marks: 23,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'power', 'energy transfer mechanisms'], level: 'proficient' },
    stem: 'A student has a kit containing a small model wind turbine. When air flows over the blades they spin a generator inside the hub, which produces a voltage (V). A fan blows air at the blades and an anemometer measures the wind speed in metres per second (m s⁻¹). By changing the fan setting the student changes the wind speed and investigates the relationship between the voltage produced and the wind speed.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="fan6" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9aa7ad"/><stop offset="1" stop-color="#6b7780"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><circle cx="80" cy="120" r="34" fill="url(#fan6)" stroke="#4a555c"/><g stroke="#cfd8dc" stroke-width="6" stroke-linecap="round"><line x1="80" y1="120" x2="80" y2="92"/><line x1="80" y1="120" x2="104" y2="134"/><line x1="80" y1="120" x2="56" y2="134"/></g><circle cx="80" cy="120" r="6" fill="#37474f"/><text x="80" y="172" font-size="11" text-anchor="middle" fill="#4a555c">fan</text><g stroke="#0b7285" stroke-width="2" stroke-linecap="round"><line x1="120" y1="105" x2="220" y2="105"/><line x1="120" y1="120" x2="220" y2="120"/><line x1="120" y1="135" x2="220" y2="135"/></g><text x="170" y="96" font-size="10" text-anchor="middle" fill="#0b7285">wind</text><line x1="300" y1="60" x2="300" y2="180" stroke="#5b6b78" stroke-width="6"/><circle cx="300" cy="80" r="6" fill="#37474f"/><g stroke="#f08c00" stroke-width="4" stroke-linecap="round"><line x1="300" y1="80" x2="300" y2="40"/><line x1="300" y1="80" x2="334" y2="100"/><line x1="300" y1="80" x2="266" y2="100"/></g><text x="300" y="200" font-size="11" text-anchor="middle" fill="#5b6b78">turbine</text><line x1="306" y1="120" x2="400" y2="120" stroke="#5b6b78" stroke-width="2"/><line x1="306" y1="140" x2="380" y2="140" stroke="#5b6b78" stroke-width="2"/><circle cx="445" cy="130" r="28" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="445" y="135" font-size="15" font-weight="700" fill="#0b7285" text-anchor="middle">V</text><line x1="400" y1="120" x2="417" y2="120" stroke="#5b6b78" stroke-width="2"/><rect x="360" y="132" width="42" height="26" rx="3" fill="#222"/><text x="381" y="149" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">m/s</text><text x="280" y="225" font-size="11" text-anchor="middle" fill="#5b6b78">fan → turbine → voltmeter; anemometer reads wind speed</text></svg>',
      },
      caption: 'A fan blows air at a model wind turbine; an anemometer reads the wind speed and a voltmeter reads the voltage produced.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does [IV] affect [DV] of the wind turbine?',
      },
      {
        label: 'b',
        text: '**Identify** two pieces of measuring equipment you would need to perform this experiment.',
        marks: 2,
        ph: 'Equipment 1: ...\nEquipment 2: ...',
      },
      {
        label: 'c',
        text: 'The data table was collected from the experiment. One wind-speed value is missing. For that trial, the anemometer showed 5.0 m s⁻¹, but the anemometer has a calibration error and reads 0.4 m s⁻¹ too high.\n\n**Calculate** the corrected (true) wind speed and state your value.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Wind speed / m s⁻¹', 'Voltage V / V'],
            rows: [['1.0', '0.16'], ['3.0', '0.40'], ['?', '0.56'], ['7.0', '0.74'], ['9.0', '0.84']],
          },
          caption: 'Voltage produced by the wind turbine at different wind speeds.',
        },
        ph: 'corrected wind speed = meter reading − calibration error = 5.0 − 0.4 = ... m s⁻¹',
      },
      {
        label: 'd',
        text: '**Present** the voltage (V) versus wind-speed data from part (c) in a graph. Add an appropriate line of best fit.\n\nYour answer should include: labelled axes with units, all data points plotted correctly, and a suitable line of best fit.',
        marks: 4,
        ph: 'Describe your graph:\nX-axis label & unit:\nY-axis label & unit:\nData points (list the coordinates):\nLine of best fit — straight/curved, passes through origin?:',
      },
      {
        label: 'e',
        text: 'The student claims that the voltage is directly proportional to the wind speed. Use the data in part (c) or the graph in part (d) to **comment** on the validity of the student\'s claim. **Justify** your answer.',
        marks: 2,
        ph: 'State whether the claim is valid or not valid, then give evidence from the graph/data...',
      },
      {
        label: 'f',
        text: 'The student wants to find out how much the voltage increases for each extra 1 m s⁻¹ of wind speed. **Outline** how you would use the graph in part (d) to calculate this value.',
        marks: 2,
        ph: 'Describe how to find the gradient of the line of best fit (ΔV ÷ Δwind speed)...',
      },
      {
        label: 'g',
        text: 'The student connects the wind turbine to a small motor and propeller mounted on a base with wheels, making a propeller-driven car.\n\nAt a voltage of 0.48 V, the current through the motor is 0.15 A. **Calculate** the motor\'s power. Include an appropriate unit in your answer.',
        marks: 2,
        ph: 'State formula P = ..., substitute values, give unit...',
      },
      {
        label: 'h',
        text: 'The student noticed that the propeller-driven car did not accelerate forwards. **Suggest** an improvement to the car\'s design that could increase its acceleration. **Justify** your answer by referring to scientific principles.',
        marks: 2,
        ph: 'Improvement: ...\nScientific justification: ...',
      },
      {
        label: 'i',
        text: '**Select** the missing term to complete the useful energy transformation chain for the propeller-driven car moving horizontally.',
        marks: 1,
        widget: 'energy_chain',
        ph: 'The missing energy form is: ...',
      },
      {
        label: 'j',
        text: '**Identify** the variables for a new investigation using the propeller-driven car:\n\nIndependent variable:\nDependent variable:\nControl variable 1:\nControl variable 2:',
        marks: 4,
        ph: 'IV:\nDV:\nControl 1:\nControl 2:',
        widget: 'variable_classify',
      },
      {
        label: 'k',
        text: '**Formulate** a hypothesis for the investigation in part (j). Use the format:\n\n"If [IV]... then [DV]... because [scientific reasoning]..."',
        marks: 2,
        ph: 'If ... then ... because ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Satellites & Starlink mega-constellation (16 marks) Criterion A/D
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'A',
    type: 'extended',
    topic: 'Space Physics — Satellites & Orbital Mechanics',
    marks: 16,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['satellites and orbital mechanics', 'gravitational fields', "Newton's law of gravitation"], level: 'proficient' },
    stem: 'In 1728, Isaac Newton conducted a thought experiment often referred to as "Newton\'s cannonball". A cannonball is fired horizontally from a cannon on the top of a very tall mountain. If the only force experienced by the cannonball is the gravitational force, then the path followed by the cannonball depends on its initial horizontal speed.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="earth7" cx="0.4" cy="0.4"><stop offset="0" stop-color="#5b9bd5"/><stop offset="1" stop-color="#1f5c8a"/></radialGradient></defs><rect width="420" height="360" fill="#ffffff"/><circle cx="210" cy="200" r="110" fill="url(#earth7)" stroke="#13405f"/><path d="M210,90 l-6,-26 l14,4 Z" fill="#6b5232"/><text x="225" y="78" font-size="10" fill="#6b5232">cannon</text><path d="M210,90 Q300,120 330,200" fill="none" stroke="#c0392b" stroke-width="2"/><text x="335" y="160" font-size="11" fill="#c0392b">A</text><path d="M210,90 Q360,150 360,200" fill="none" stroke="#e08a1e" stroke-width="2"/><text x="368" y="200" font-size="11" fill="#e08a1e">B</text><circle cx="210" cy="200" r="150" fill="none" stroke="#0b7285" stroke-width="2" stroke-dasharray="6 5"/><text x="210" y="44" font-size="11" fill="#0b7285" text-anchor="middle">C — circular orbit</text><path d="M210,90 Q120,40 70,200" fill="none" stroke="#7a4fb5" stroke-width="2"/><text x="60" y="150" font-size="11" fill="#7a4fb5">D</text></svg>',
      },
      caption: 'Paths A–D for a cannonball fired horizontally from a mountain top at increasing speeds.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The diagram shows four paths (A, B, C, D) a cannonball could follow depending on its initial horizontal speed. **Identify** the correct path for each speed by matching each path label to one of the speeds below.\n\nAll four must be correct to gain the mark.',
        marks: 1,
        widget: 'cannonball_paths',
        ph: 'A = ... m s⁻¹  |  B = ... m s⁻¹  |  C = ... m s⁻¹  |  D = ... m s⁻¹',
      },
      {
        label: 'b',
        text: '**Identify** the free-body force diagram (A, B, C, or D shown below) that correctly shows the force(s) acting on Newton\'s cannonball when it is in a circular orbit around Earth.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah7" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#c0392b"/></marker></defs><rect width="560" height="170" fill="#ffffff"/><g><text x="65" y="24" font-size="13" font-weight="700" text-anchor="middle">A</text><circle cx="65" cy="80" r="12" fill="#2c3e50"/><line x1="65" y1="92" x2="65" y2="140" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ah7)"/><text x="65" y="156" font-size="10" text-anchor="middle" fill="#c0392b">gravity</text></g><g><text x="205" y="24" font-size="13" font-weight="700" text-anchor="middle">B</text><circle cx="205" cy="80" r="12" fill="#2c3e50"/><line x1="205" y1="68" x2="205" y2="30" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ah7)"/><line x1="205" y1="92" x2="205" y2="140" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ah7)"/></g><g><text x="345" y="24" font-size="13" font-weight="700" text-anchor="middle">C</text><circle cx="345" cy="80" r="12" fill="#2c3e50"/><line x1="357" y1="80" x2="405" y2="80" stroke="#c0392b" stroke-width="2.5" marker-end="url(#ah7)"/><text x="381" y="100" font-size="10" text-anchor="middle" fill="#c0392b">motion</text></g><g><text x="485" y="24" font-size="13" font-weight="700" text-anchor="middle">D</text><circle cx="485" cy="80" r="12" fill="#2c3e50"/></g></svg>',
          },
          caption: 'Four candidate free-body diagrams for an orbiting cannonball.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'Correct diagram: ...',
      },
      {
        label: 'c',
        text: 'Newton\'s thought experiment helped scientists understand how artificial satellites could be placed in orbit. Today, private companies launch "mega-constellations" of thousands of small satellites into low Earth orbit to provide global internet, such as SpaceX\'s Starlink.\n\n**Discuss and evaluate** the development of satellite-internet mega-constellations. In your answer you must include:\n• the scientific and technological challenges of putting thousands of satellites into low Earth orbit\n• the political implications for governments of a single private company controlling global internet access\n• the positive and negative economic implications of one company dominating low-Earth-orbit internet\n• a concluding appraisal',
        marks: 14,
        passage: 'Low-Earth-orbit (LEO) satellites circle the Earth at altitudes of around 550 km — far below the geostationary "Clarke belt" at 36 000 km — and complete an orbit in about 90 minutes. Because each satellite is only overhead for a few minutes, thousands of them are needed so that one is always in view of every user.\n\nReaching and maintaining these orbits is challenging. At 550 km there is still a faint trace of atmosphere, so the satellites slowly lose height and must use thrusters to stay in orbit, then be de-orbited safely at the end of their life.\n\nThe rapid growth in the number of satellites has raised concerns about "space debris". A collision between two satellites could create a cloud of fragments that threatens other spacecraft. Astronomers also report that the bright satellites leave trails across telescope images of the night sky.\n\nBy 2024 a single company, SpaceX, operated more than 6 000 Starlink satellites — over half of all active satellites in orbit. Spaces and radio frequencies for satellites are coordinated by the International Telecommunication Union, an agency of the United Nations, which helps settle disputes between countries and companies.\n\nMega-constellations can bring fast internet to remote regions with no ground infrastructure, but the prospect of one company providing internet to much of the world has raised concerns about who controls access during conflicts or disasters.',
        ph: 'SCIENTIFIC & TECHNOLOGICAL CHALLENGES:\n•\n•\n\nPOLITICAL IMPLICATIONS:\n•\n•\n\nECONOMIC IMPLICATIONS:\nPositive:\nNegative:\n\nCONCLUDING APPRAISAL:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Crewed Mars base (8 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Crewed Mars Base',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['satellites and orbital mechanics', 'gravitational fields'], level: 'advanced' },
    stem: 'Several space agencies and private companies have proposed building the first permanently crewed base on Mars. A Mars base would need to be largely self-sufficient: water and oxygen would have to be extracted from the Martian environment, food grown on site, and the crew protected from harmful radiation and the very thin atmosphere.\n\nA journey to Mars takes around seven months, and the gravitational field strength at the surface is only about 3.7 N kg⁻¹, roughly one third of Earth\'s. The enormous cost, estimated at hundreds of billions of dollars, and the risk to the crew, mean that the decision to fund such a project is highly controversial.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the benefits and limitations of a country spending significant amounts of government money to build the first permanently crewed base on Mars.\n\nIn your answer you should include:\n• benefits of building a crewed Mars base\n• limitations of building a crewed Mars base\n• a conclusion stating whether a government should spend money on building a crewed Mars base',
        marks: 8,
        ph: 'BENEFITS:\n•\n•\n\nLIMITATIONS:\n•\n•\n\nCONCLUSION:\nThe government should / should not ... because ...',
      },
    ],
  },
]
