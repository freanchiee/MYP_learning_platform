import type { Question } from '@/lib/types'

// ════════════════════════════════════════════════════════════════════════════
// PHYSICS — May 2025 · VARIANT 1  (isomorphic to physics-may-2025)
// Every question re-tests the SAME construct (crit, command term, marks, task
// structure, tags) in a NEW real-world context, with self-contained data-driven
// artefacts (no external image files). Numbers recomputed throughout.
//   Q1 Electrostatics:  defibrillator → electrostatic precipitator (industrial)
//   Q2 Refraction:      straw in glass → angler/fish in a pond
//   Q3 Nuclear fission: ²³⁶U→¹⁴⁰Xe+⁹³Sr+3n → ²³⁶U→¹⁴¹Ba+⁹²Kr+3n
//   Q4 Motion:          cotton-reel car → balloon-powered toy car
//   Q5 Crit B design:   cotton-reel investigation → balloon-car investigation
//   Q6 Energy/V–IV:     thermoelectric generator → hand-crank dynamo (induction)
//   Q7 Space:           Clarke-belt comms → global satellite navigation (GNSS)
//   Q8 Crit D essay:    space elevator → first commercial fusion power plant
// ════════════════════════════════════════════════════════════════════════════

export const paperMeta = {
  id: 'physics-may-2025-v1',
  subject: 'Physics',
  session: 'May',
  year: 2025,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [
  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Electrostatic precipitator & electricity (7 marks) Criterion A
  // V1: E=180 J, V=450 V, t=40 ms → Q=0.40 C, I=10 A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Electricity — Electrostatic Precipitator',
    marks: 7,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'electricity-circuits', topics: ['electric charge', 'electrical power', 'potential difference (voltage)'], level: 'proficient' },
    stem: 'An electrostatic precipitator removes soot and ash particles from the waste gases of a coal-fired power station before they leave the chimney. Inside the precipitator a high-voltage discharge wire gives the particles a negative charge. The charged particles are then attracted to large positively charged collecting plates, leaving the gas clean.',
    artefact: {
      component: 'FieldSim',
      data: {
        title: 'Electrostatic precipitator',
        field: 'E',
        plates: { top: 'Collecting plate (+)', bottom: 'Discharge wire (−)' },
        particles: [{ name: 'charged soot', charge: -1 }],
        expected: 'The negatively charged soot particle is attracted toward the positive collecting plate.',
      },
      caption: 'Charged soot particles drift across the field and stick to the oppositely charged collecting plate.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Select** the particles that move to give the soot particles their charge inside the precipitator.\n\nOptions: Atoms | Electrons | Neutrons | Protons',
        marks: 1,
        ph: 'Write your chosen option here...',
      },
      {
        label: 'b',
        text: 'The high-voltage unit transfers **180 J** of electrical energy at a voltage of **450 V** to charge a section of plates. **Calculate** the current that flows during the **40 milliseconds** the charging pulse lasts.',
        marks: 3,
        ph: 'Show your working (equation, substitution, answer with unit)...',
      },
      {
        label: 'c',
        text: 'Before reaching the collecting plates, the soot particles are first given an electric charge by the discharge wire. **Suggest** why the particles must be charged in order to be removed from the waste gas.',
        marks: 1,
        ph: 'Suggest a reason...',
      },
      {
        label: 'd',
        text: 'Two designs of precipitator are used. A **plate-type** precipitator hangs thin discharge wires between large flat collecting plates. A **tubular** precipitator runs a single wire down the centre of a metal collecting tube. **Suggest** an advantage of each type of precipitator.\n\nPlate-type advantage:\n\nTubular advantage:',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="plt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b6c4cf"/><stop offset="1" stop-color="#8a99a6"/></linearGradient></defs><rect width="600" height="250" fill="#ffffff"/><text x="150" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Plate-type</text><rect x="60" y="40" width="22" height="150" fill="url(#plt)" stroke="#5b6b78"/><rect x="218" y="40" width="22" height="150" fill="url(#plt)" stroke="#5b6b78"/><line x1="120" y1="40" x2="120" y2="190" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4"/><line x1="180" y1="40" x2="180" y2="190" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4"/><text x="120" y="210" font-size="11" text-anchor="middle" fill="#0b7285">wires (−)</text><text x="71" y="210" font-size="11" text-anchor="middle" fill="#5b6b78">plate (+)</text><text x="229" y="210" font-size="11" text-anchor="middle" fill="#5b6b78">plate (+)</text><text x="450" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Tubular</text><circle cx="450" cy="115" r="78" fill="none" stroke="#5b6b78" stroke-width="3"/><circle cx="450" cy="115" r="60" fill="none" stroke="#8a99a6" stroke-width="1" stroke-dasharray="2 3"/><line x1="450" y1="55" x2="450" y2="175" stroke="#0b7285" stroke-width="2" stroke-dasharray="4 4"/><text x="450" y="210" font-size="11" text-anchor="middle" fill="#5b6b78">tube (+)</text><text x="486" y="119" font-size="11" fill="#0b7285">wire (−)</text></svg>',
          },
          caption: 'Plate-type (left) and tubular (right) electrostatic precipitators.',
        },
        ph: 'Plate-type: ...\n\nTubular: ...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Refraction of Light (10 marks) Criterion A
  // V1: green light 525 nm → f = 5.7×10¹⁴ Hz; longer wavelength: yellow/orange/red
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
    stem: 'Refraction of light can help people to see more clearly but it can also cause optical illusions. An angler standing on a riverbank sees a fish that appears to be in a different place from where it really is.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="watr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe3f2"/><stop offset="1" stop-color="#6cb6d6"/></linearGradient><marker id="ah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect x="0" y="150" width="600" height="170" fill="url(#watr)"/><line x1="0" y1="150" x2="600" y2="150" stroke="#3f7e98" stroke-width="2"/><text x="20" y="172" font-size="12" fill="#2c5468">water surface</text><circle cx="160" cy="70" r="13" fill="#f1c27d" stroke="#c98a3c"/><rect x="150" y="83" width="20" height="40" rx="6" fill="#3a6ea5"/><text x="138" y="135" font-size="11" fill="#1f2d3a">angler</text><ellipse cx="420" cy="245" rx="26" ry="13" fill="#e8772e" stroke="#a8531a"/><path d="M446,245 l18,-9 l0,18 Z" fill="#e8772e" stroke="#a8531a"/><text x="392" y="278" font-size="11" fill="#7a3d12">real fish</text><ellipse cx="420" cy="200" rx="22" ry="11" fill="none" stroke="#a8531a" stroke-dasharray="4 3"/><text x="392" y="193" font-size="11" fill="#a8531a">apparent fish</text><path d="M420,245 L300,150" stroke="#0b7285" stroke-width="2"/><path d="M300,150 L168,86" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah2)"/><line x1="300" y1="120" x2="300" y2="185" stroke="#94a3ad" stroke-width="1" stroke-dasharray="3 3"/><text x="306" y="118" font-size="10" fill="#94a3ad">normal</text><path d="M420,200 L300,150" stroke="#a8531a" stroke-width="1.5" stroke-dasharray="5 4"/></svg>',
      },
      caption: 'Light from the fish bends as it leaves the water, so the angler sees the fish higher than it really is.',
    },
    tasks: [
      {
        label: 'a',
        text: 'Green light has a wavelength of 525 nm. **Calculate** the frequency of green light. Assume the speed of light = 3.0 × 10⁸ m s⁻¹. Give your answer to two significant figures.',
        marks: 3,
        ph: 'State formula, convert units, show substitution, give answer with unit...',
      },
      {
        label: 'b',
        text: '**State** one colour of visible light that has a longer wavelength than green light.',
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
        text: 'Refraction can make us believe that objects are in a location different from reality. Using the diagram of the angler looking at the fish, **explain** why the angler believes the fish is in a different location from where it really is.',
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
  // V1: ²³⁶U→¹⁴¹Ba+⁹²Kr+3n; E=3.2×10⁻¹¹ J; m=3.6×10⁻²⁸ kg; 11.5 GJ→3.6×10²⁰; 32%→4.4×10⁹ W
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
    stem: 'Nuclear energy is a possible solution to our growing energy demands. Nuclear power stations use uranium as a fuel. Uranium-235 (²³⁵U) can absorb a neutron to form uranium-236 (²³⁶U), which then undergoes nuclear fission:\n\n    ²³⁶U  →  ¹⁴¹Ba  +  ⁹²Kr  +  ? n\n\nEach fission reaction releases 3.2 × 10⁻¹¹ J of energy.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="nuc" cx="0.4" cy="0.35"><stop offset="0" stop-color="#7fb2c9"/><stop offset="1" stop-color="#2c6c86"/></radialGradient><marker id="ah5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="600" height="220" fill="#ffffff"/><circle cx="50" cy="110" r="7" fill="#c0392b"/><text x="34" y="135" font-size="10" fill="#c0392b">neutron</text><line x1="60" y1="110" x2="150" y2="110" stroke="#444" stroke-width="1.5" marker-end="url(#ah5)"/><circle cx="185" cy="110" r="34" fill="url(#nuc)" stroke="#1f4a5c"/><text x="185" y="114" font-size="12" font-weight="700" text-anchor="middle" fill="#fff">²³⁶U</text><line x1="225" y1="110" x2="285" y2="110" stroke="#444" stroke-width="1.5"/><circle cx="345" cy="60" r="26" fill="#e3a93c" stroke="#a8721a"/><text x="345" y="64" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">¹⁴¹Ba</text><circle cx="345" cy="165" r="22" fill="#5b9a6b" stroke="#356b44"/><text x="345" y="169" font-size="11" font-weight="700" text-anchor="middle" fill="#fff">⁹²Kr</text><line x1="380" y1="55" x2="470" y2="35" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ah5)"/><line x1="385" y1="110" x2="475" y2="110" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ah5)"/><line x1="380" y1="172" x2="470" y2="190" stroke="#c0392b" stroke-width="1.5" marker-end="url(#ah5)"/><text x="500" y="113" font-size="11" fill="#c0392b">neutrons + energy</text></svg>',
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
        text: 'In a developed country, one family used 11.5 GJ of energy in a year. **Calculate** the number of fission reactions required to meet the energy needs of this family.',
        marks: 2,
        ph: 'Convert GJ to J first, then divide by energy per fission...',
      },
      {
        label: 'f',
        text: 'A nuclear power station operates with an efficiency of 32%. If the station generates 1.4 × 10⁹ W of electrical power, **calculate** the total power released through nuclear fission in the nuclear reactor.',
        marks: 2,
        ph: 'Use efficiency = useful power / total power. Rearrange for total power...',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Balloon-powered toy car / Motion (10 marks) Criterion C
  // V1: interval 0.08 s → f=12.5 Hz; read v at t=0.24 → 36 cm/s; gradient 150 cm/s²
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'C',
    type: 'extended',
    topic: 'Motion — Balloon-Powered Toy Car',
    marks: 10,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'acceleration', 'distance-time graphs'], level: 'proficient' },
    stem: 'An MYP student investigates the motion of a simple toy car powered by air escaping from an inflated balloon. As the balloon deflates, the escaping air pushes the car forward. The student uses video analysis to track the car\'s position at regular time intervals.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah6" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="560" height="220" fill="#ffffff"/><line x1="40" y1="170" x2="520" y2="170" stroke="#5b6b78" stroke-width="3"/><rect x="150" y="138" width="120" height="26" rx="8" fill="#3a6ea5"/><circle cx="172" cy="170" r="14" fill="#2c3e50"/><circle cx="248" cy="170" r="14" fill="#2c3e50"/><path d="M150,150 Q90,120 110,150 Q70,135 150,150 Z" fill="#e8772e" stroke="#a8531a"/><path d="M118,150 q-16,2 -28,-4" stroke="#9bb9cf" stroke-width="2" fill="none"/><path d="M114,158 q-18,4 -32,-2" stroke="#9bb9cf" stroke-width="2" fill="none"/><text x="120" y="186" font-size="11" fill="#a8531a">escaping air</text><line x1="280" y1="110" x2="400" y2="110" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah6)"/><text x="330" y="102" font-size="12" fill="#0b7285">motion</text><circle cx="40" cy="170" r="3" fill="#c0392b"/><circle cx="160" cy="190" r="2.5" fill="#c0392b"/><circle cx="260" cy="190" r="2.5" fill="#c0392b"/><circle cx="360" cy="190" r="2.5" fill="#c0392b"/><circle cx="460" cy="190" r="2.5" fill="#c0392b"/><text x="350" y="210" font-size="10" fill="#c0392b">tracked positions every 0.08 s</text></svg>',
      },
      caption: 'A balloon-powered toy car. Video analysis records the car\'s position at equal time intervals.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The video analysis records the position of the car every 0.08 s. **Calculate** the frequency with which the position data is recorded. Include an appropriate unit.',
        marks: 2,
        ph: 'State formula, substitute values, give unit...',
      },
      {
        label: 'b',
        text: 'Using the data table shown, read the velocity of the balloon car at t = 0.24 s.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Time t / s', 'Velocity v / cm s⁻¹'],
            rows: [['0.08', '12'], ['0.16', '24'], ['0.24', '36'], ['0.32', '48'], ['0.40', '60']],
          },
          caption: 'Velocity of the balloon car from the video analysis.',
        },
        ph: 'Velocity at t = 0.24 s = ... cm s⁻¹',
      },
      {
        label: 'c',
        text: 'The student processed the data and drew a velocity–time graph (shown below). **Calculate** the gradient of the line of best fit between t = 0.08 s and t = 0.40 s. Give the unit and **state** the quantity that the gradient represents.',
        marks: 3,
        artefact: {
          component: 'GraphSim',
          data: {
            mode: 'readoff',
            xLabel: 'time / s',
            yLabel: 'velocity / cm s⁻¹',
            points: [[0.08, 12], [0.16, 24], [0.24, 36], [0.32, 48], [0.40, 60]],
            readouts: [{ x: 0.24, note: 'read v at t = 0.24 s' }],
            dataMaxX: 0.40,
          },
          caption: 'Velocity–time graph for the balloon car (drag the crosshair to read values).',
        },
        ph: 'Gradient = Δv / Δt = ... / ... = ... (unit)\nQuantity: ...',
      },
      {
        label: 'd',
        text: 'The student repeated the experiment using a larger balloon holding more air. **Predict** how the line of best fit drawn in part (c) would change. **Justify** your answer.',
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
  // QUESTION 5 — Balloon-car Investigation Design (17 marks) Criterion B
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Experimental Design — Balloon-Car Investigation',
    marks: 17,
    topicCanonical: 'Kinematics & Motion Graphs',
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['speed and velocity', 'acceleration', 'equations of motion (SUVAT)'], level: 'proficient' },
    stem: 'After completing the first experiment investigating the motion of a balloon-powered car, a student wants to extend their investigation by measuring a different dependent variable.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="560" height="200" fill="#ffffff"/><line x1="30" y1="150" x2="530" y2="150" stroke="#5b6b78" stroke-width="3"/><g><rect x="60" y="124" width="80" height="18" rx="6" fill="#3a6ea5"/><circle cx="78" cy="150" r="10" fill="#2c3e50"/><circle cx="124" cy="150" r="10" fill="#2c3e50"/><path d="M60,132 Q34,116 50,132 Q24,124 60,132 Z" fill="#e8772e" stroke="#a8531a"/></g><line x1="30" y1="165" x2="530" y2="165" stroke="#94a3ad" stroke-width="1"/><g font-size="10" fill="#94a3ad"><text x="30" y="180">0</text><text x="180" y="180">50</text><text x="330" y="180">100</text><text x="480" y="180">150 cm</text></g><line x1="180" y1="160" x2="180" y2="170" stroke="#94a3ad"/><line x1="330" y1="160" x2="330" y2="170" stroke="#94a3ad"/><line x1="480" y1="160" x2="480" y2="170" stroke="#94a3ad"/><rect x="440" y="60" width="70" height="44" rx="6" fill="#222" stroke="#000"/><text x="475" y="86" font-size="13" fill="#3ad36a" text-anchor="middle" font-family="monospace">0.00</text><text x="475" y="118" font-size="10" fill="#5b6b78" text-anchor="middle">stopwatch</text><text x="60" y="40" font-size="13" font-weight="700" fill="#1f2d3a">Balloon car on a measured track</text></svg>',
      },
      caption: 'A balloon car released along a marked track, timed over a fixed distance.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Design** a method to investigate the effect of changing the number of breaths of air used to inflate the balloon on the time taken for the car to travel a fixed distance.\n\nIn your plan, you must include:\n• the independent variable, dependent variable, and one control variable\n• a hypothesis\n• details of any additional measuring equipment you will need to perform the experiment\n• a detailed method for how you will collect the data\n• details of how you will collect sufficient data',
        marks: 16,
        ph: 'VARIABLES:\nIndependent variable:\nDependent variable:\nControl variable (+ justification):\n\nHYPOTHESIS:\nIf ... then ... because ...\n\nEQUIPMENT:\n•\n•\n\nMETHOD:\n1.\n2.\n...\n\nSUFFICIENT DATA:\n• Number of different IV values:\n• Number of repeats per value:',
      },
      {
        label: 'b',
        text: 'The research question of the student in part (a) was:\n\n"How does the number of breaths of air used to inflate the balloon affect the time taken for the car to travel a fixed distance?"\n\nAnother student wants to carry out a different investigation using a similar balloon car. **Suggest** an alternative research question.',
        marks: 1,
        ph: 'How does [different variable] affect [outcome] of the balloon car?',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Solar (photovoltaic) cell (23 marks) Criterion B/C/A
  // V1: V vs light intensity; missing intensity = 6.0 − 0.2 (zero error) = 5.8 klux; P=VI=0.42×0.13=0.055 W
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'B',
    type: 'extended',
    topic: 'Energy — Solar (Photovoltaic) Cell',
    marks: 23,
    topicCanonical: 'Circuits, Resistance & Power',
    topicGroup: 'Electricity & Magnetism',
    tags: { unit: 'work-energy', topics: ['energy efficiency', 'power', 'energy transfer mechanisms'], level: 'proficient' },
    stem: 'A student has a kit containing a small solar (photovoltaic) cell. When light shines on the cell, it produces a voltage (V). A lamp is used to shine light on the cell, and a light meter measures the light intensity in kilolux (klux). By moving the lamp closer or further away, the student changes the light intensity and investigates the relationship between the voltage produced and the light intensity.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="lamp6" cx="0.5" cy="0.5"><stop offset="0" stop-color="#fff3b0"/><stop offset="1" stop-color="#f0c419"/></radialGradient><linearGradient id="pv6" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b3a67"/><stop offset="1" stop-color="#1b2748"/></linearGradient></defs><rect width="560" height="240" fill="#ffffff"/><circle cx="90" cy="90" r="26" fill="url(#lamp6)" stroke="#c79a10"/><g stroke="#f0c419" stroke-width="3" stroke-linecap="round"><line x1="130" y1="78" x2="250" y2="120"/><line x1="130" y1="90" x2="250" y2="132"/><line x1="130" y1="102" x2="250" y2="144"/></g><text x="90" y="138" font-size="11" text-anchor="middle" fill="#9a7d0f">lamp</text><rect x="250" y="120" width="120" height="40" rx="4" fill="url(#pv6)" stroke="#0b1f3a"/><g stroke="#5b76d6" stroke-width="1"><line x1="280" y1="120" x2="280" y2="160"/><line x1="310" y1="120" x2="310" y2="160"/><line x1="340" y1="120" x2="340" y2="160"/></g><text x="310" y="178" font-size="11" text-anchor="middle" fill="#2b3a67">solar cell</text><line x1="370" y1="130" x2="430" y2="130" stroke="#5b6b78" stroke-width="2"/><line x1="370" y1="150" x2="410" y2="150" stroke="#5b6b78" stroke-width="2"/><circle cx="460" cy="140" r="28" fill="#eef3f6" stroke="#0b7285" stroke-width="2"/><text x="460" y="145" font-size="15" font-weight="700" fill="#0b7285" text-anchor="middle">V</text><line x1="430" y1="130" x2="432" y2="130" stroke="#5b6b78" stroke-width="2"/><rect x="392" y="142" width="42" height="26" rx="3" fill="#222"/><text x="413" y="159" font-size="9" fill="#3ad36a" text-anchor="middle" font-family="monospace">klux</text><text x="200" y="220" font-size="11" text-anchor="middle" fill="#5b6b78">lamp → solar cell → voltmeter; light meter reads intensity</text></svg>',
      },
      caption: 'A lamp shines on a solar cell; a light meter reads the intensity and a voltmeter reads the voltage produced.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that would be tested in this investigation.',
        marks: 1,
        ph: 'How does [IV] affect [DV] of the solar cell?',
      },
      {
        label: 'b',
        text: '**Identify** two pieces of measuring equipment you would need to perform this experiment.',
        marks: 2,
        ph: 'Equipment 1: ...\nEquipment 2: ...',
      },
      {
        label: 'c',
        text: 'The data table was collected from the experiment. One light-intensity value is missing. For that trial, the light meter showed 6.0 klux, but the meter has a zero error and reads 0.2 klux too high.\n\n**Calculate** the corrected (true) light intensity and state your value.',
        marks: 1,
        artefact: {
          component: 'DataTable',
          data: {
            headers: ['Light intensity / klux', 'Voltage V / V'],
            rows: [['2.0', '0.18'], ['4.0', '0.34'], ['?', '0.46'], ['8.0', '0.58'], ['10.0', '0.66']],
          },
          caption: 'Voltage produced by the solar cell at different light intensities.',
        },
        ph: 'corrected intensity = meter reading − zero error = 6.0 − 0.2 = ... klux',
      },
      {
        label: 'd',
        text: '**Present** the voltage (V) versus light-intensity data from part (c) in a graph. Add an appropriate line of best fit.\n\nYour answer should include: labelled axes with units, all data points plotted correctly, and a suitable line of best fit.',
        marks: 4,
        ph: 'Describe your graph:\nX-axis label & unit:\nY-axis label & unit:\nData points (list the coordinates):\nLine of best fit — straight/curved, passes through origin?:',
      },
      {
        label: 'e',
        text: 'The student claims that the voltage is directly proportional to the light intensity. Use the data in part (c) or the graph in part (d) to **comment** on the validity of the student\'s claim. **Justify** your answer.',
        marks: 2,
        ph: 'State whether the claim is valid or not valid, then give evidence from the graph/data...',
      },
      {
        label: 'f',
        text: 'The student wants to find out how much the voltage increases for each extra klux of light intensity. **Outline** how you would use the graph in part (d) to calculate this value.',
        marks: 2,
        ph: 'Describe how to find the gradient of the line of best fit (ΔV ÷ Δintensity)...',
      },
      {
        label: 'g',
        text: 'The student connects the solar cell to a small motor and propeller mounted on a base with wheels, making a propeller-driven car.\n\nAt a voltage of 0.42 V, the current through the motor is 0.13 A. **Calculate** the motor\'s power. Include an appropriate unit in your answer.',
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
  // QUESTION 7 — Satellites & Global Navigation (GNSS) (16 marks) Criterion A/D
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
        text: 'Newton\'s thought experiment helped scientists understand how artificial satellites could be placed in orbit. Today, networks of satellites form Global Navigation Satellite Systems (GNSS) such as the United States\' GPS, Europe\'s Galileo and China\'s BeiDou, which allow precise positioning anywhere on Earth.\n\n**Discuss and evaluate** the development of a global satellite navigation system. In your answer you must include:\n• the scientific and technological challenges of putting a navigation satellite into orbit\n• the political implications for governments of relying on another country\'s navigation system\n• the positive and negative economic implications of navigation systems being controlled by a small number of nations or companies\n• a concluding appraisal',
        marks: 14,
        passage: 'Global Navigation Satellite Systems (GNSS) determine a receiver\'s position by timing radio signals from several satellites at once. To do this, each satellite carries an atomic clock accurate to better than a billionth of a second, and the system must correct for the tiny time differences predicted by Einstein\'s theory of relativity.\n\nMost GNSS satellites orbit at an altitude of around 20 000 km — much lower than the geostationary "Clarke belt" at 36 000 km — and complete two orbits of the Earth every day. A receiver needs signals from at least four satellites to fix its position.\n\nGPS was built and is operated by the United States military, which can in principle degrade or deny the civilian signal. Concerns about depending on another nation\'s system led the European Union to build Galileo and China to build BeiDou, so that each region controls its own positioning.\n\nGNSS now underpins aviation, shipping, farming, emergency services, mobile phones and financial-transaction timestamps. The global market is worth hundreds of billions of dollars each year, yet the whole system can be disrupted by deliberate "jamming" or "spoofing" of the weak satellite signals.',
        ph: 'SCIENTIFIC & TECHNOLOGICAL CHALLENGES:\n•\n•\n\nPOLITICAL IMPLICATIONS:\n•\n•\n\nECONOMIC IMPLICATIONS:\nPositive:\nNegative:\n\nCONCLUDING APPRAISAL:',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Fusion Power Plant (8 marks) Criterion D
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Science & Society — Fusion Power Plant',
    marks: 8,
    topicCanonical: 'Nuclear Reactions & Energy',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['nuclear energy', 'energy transfer mechanisms'], level: 'advanced' },
    stem: 'Most of the world\'s electricity is still generated by burning fossil fuels or by nuclear fission. Nuclear fusion — joining light nuclei such as hydrogen to release energy, the same process that powers the Sun — has been proposed as a clean, almost limitless energy source for the future.\n\nA fusion power plant would produce no greenhouse gases and very little long-lived radioactive waste. However, fusion requires temperatures of over 100 million °C, and no experimental reactor has yet produced more energy than it consumes for a sustained period. International projects such as ITER are testing whether commercial fusion is possible, at a cost of tens of billions of dollars.',
    tasks: [
      {
        label: '',
        text: '**Discuss and evaluate** the benefits and limitations of a country spending significant amounts of government money to build the first commercial nuclear fusion power plant.\n\nIn your answer you should include:\n• benefits of building a fusion power plant\n• limitations of building a fusion power plant\n• a conclusion stating whether a government should spend money on building a fusion power plant',
        marks: 8,
        ph: 'BENEFITS:\n•\n•\n\nLIMITATIONS:\n•\n•\n\nCONCLUSION:\nThe government should / should not ... because ...',
      },
    ],
  },
]
