import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2023-v1',
  subject: 'Physics',
  session: 'May',
  year: 2023,
  totalMarks: 100,
  durationMinutes: 90,
  criteria: ['A', 'B', 'C', 'D'] as const,
}

export const questions: Question[] = [

  // ─────────────────────────────────────────────────────────────
  // QUESTION 1 — Work, Energy & Power (11 marks) Criterion A
  // V1: Working oxen in agricultural fields
  // Q1a: 3.5 km in 42 min → 5.0 km/h; Q1c: A=420 kg→4116 N, B=5096 N→520 kg
  // Q1e: h=16 m, t=7.5 s, m=520 kg → ΔEp=81536 J, P=10871 W=10.9 kW
  // Q1f: 2.5 hp × 746 = 1865 W; I = 1865/230 = 8.1 A
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    crit: 'A',
    type: 'extended',
    topic: 'Work, Energy & Power',
    marks: 11,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'work-energy', topics: ['speed and velocity', 'work done', 'power', 'gravitational potential energy'], level: 'proficient' },
    stem: 'Oxen have been used in agriculture for thousands of years. They perform work by pulling ploughs and heavy loads across fields. Physics can be used to analyse how oxen complete these tasks.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="oxF" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect width="600" height="190" fill="#dcefe6"/><path d="M0 160 Q160 120 330 152 Q470 178 600 142 L600 205 L0 205 Z" fill="#9fd3b4"/><path d="M0 320 L0 215 Q300 165 600 250 L600 320 Z" fill="#caa472"/><g stroke="#a07b46" stroke-width="2" opacity="0.6" fill="none"><path d="M20 252 Q300 200 580 268"/><path d="M20 270 Q300 218 580 286"/><path d="M20 288 Q300 238 580 304"/></g><g transform="translate(330,150)"><g fill="#6b4a2f"><ellipse cx="40" cy="40" rx="56" ry="27"/><rect x="20" y="55" width="8" height="40"/><rect x="58" y="55" width="8" height="40"/><path d="M92 28 Q108 16 110 34 L100 40 Z"/><path d="M86 22 L80 6 M96 22 L102 6" stroke="#4a3220" stroke-width="3"/><rect x="-12" y="34" width="20" height="10" rx="4"/></g><g fill="#8a5e3a"><ellipse cx="55" cy="55" rx="60" ry="30"/><rect x="34" y="72" width="9" height="44"/><rect x="72" y="72" width="9" height="44"/><path d="M110 40 Q128 28 130 48 L118 54 Z"/><path d="M104 34 L98 16 M114 34 L120 16" stroke="#5a3d22" stroke-width="3"/><rect x="0" y="48" width="22" height="11" rx="4"/></g></g><line x1="252" y1="200" x2="330" y2="190" stroke="#5a3d22" stroke-width="4"/><g fill="#3a4a5a"><circle cx="246" cy="172" r="9"/><rect x="240" y="181" width="13" height="34" rx="4"/></g><g stroke="#444" stroke-width="3" fill="none"><path d="M252 215 L300 235 M252 215 L262 245"/></g><line x1="430" y1="100" x2="510" y2="100" stroke="#0b7285" stroke-width="3" marker-end="url(#oxF)"/><text x="470" y="92" font-size="12" fill="#0b7285" text-anchor="middle" font-weight="bold">direction of motion</text><text x="300" y="306" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Oxen pulling a plough across a field</text></svg>',
      },
      caption: 'A team of oxen doing work as they pull a plough across a field.',
    },
    tasks: [
      {
        label: 'a',
        text: 'An ox covers a distance of **3.5 km** in **42 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 3.5 ÷ (42/60)\n= 3.5 × (60/42)\n= 5.0 km h⁻¹',
        level: 'developing',
      },
      {
        label: 'b',
        text: 'Power is the rate of transforming energy or the rate of doing work. **Select** the formula for power.\n\nA. energy transformed = power ÷ distance\nB. energy transformed = power + distance\nC. energy transformed = power × time\nD. energy transformed = power − time',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'foundation',
      },
      {
        label: 'c',
        text: 'The table below gives data about two oxen A and B. **Calculate** the missing values and complete the table. Use **g = 9.8 N kg⁻¹**.\n\n| Ox | Mass / kg | Weight / N |\n|----|-----------|------------|\n| A | 420 | ? |\n| B | ? | 5096 |',
        marks: 2,
        ph: 'Ox A weight = 420 × 9.8 = 4116 N\nOx B mass = 5096 ÷ 9.8 = 520 kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for an ox that starts from rest at the bottom of a hill, runs up the hill and then stops at the top.\n\nThe energy transformations are: [?] → [?] → [?]',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **16 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for ox B to reach this height in **7.5 s**. Give your answer in kW.',
        marks: 3,
        ph: 'ΔEp = mgΔh = 520 × 9.8 × 16 = 81536 J\nPower = ΔEp ÷ t = 81536 ÷ 7.5 = 10871 W ≈ 10.9 kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'Power is sometimes given in horsepower (hp), where **1.0 hp = 746 W**. An electric irrigation pump has a power of **2.5 hp** and operates at a voltage of **230 V**. **Calculate** the current the pump requires.',
        marks: 2,
        ph: 'Power = 2.5 × 746 = 1865 W\nI = P ÷ V = 1865 ÷ 230 = 8.1 A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & EM Waves (7 marks) Criterion A
  // V1: Prism dispersion; wavelength 420 nm (violet)
  // f = 3×10⁸ / (420×10⁻⁹) = 7.14×10¹⁴ Hz
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    crit: 'A',
    type: 'extended',
    topic: 'Light & Electromagnetic Waves',
    marks: 7,
    topicCanonical: 'Light, Reflection & Refraction',
    topicGroup: 'Electromagnetic Waves & Optics',
    tags: { unit: 'light-optics', topics: ['dispersion', 'refraction', 'electromagnetic spectrum', 'wave equation'], level: 'proficient' },
    stem: 'When white light passes through a glass prism, it separates into the colours of the visible spectrum. Scientists use this phenomenon to study the properties of light.',
    tasks: [
      {
        label: 'a',
        text: 'The image shows white light being separated into different colours as it passes through a prism. **Select** the term that best describes this process.\n\nA. Absorption\nB. Deflection\nC. Reflection\nD. Dispersion',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="320" fill="#ffffff"/><rect x="40" y="150" width="180" height="6" fill="#9aa3ad"/><line x1="42" y1="153" x2="216" y2="153" stroke="#5b6b78" stroke-width="1"/><text x="120" y="140" font-size="12" fill="#1f2d3a" text-anchor="middle">white light</text><polygon points="250,90 320,210 180,210" fill="#bcd8e8" opacity="0.4" stroke="#0b7285" stroke-width="2"/><text x="250" y="232" font-size="12" fill="#0b7285" text-anchor="middle">glass prism</text><g stroke-width="5"><line x1="300" y1="160" x2="560" y2="118" stroke="#e23b3b"/><line x1="300" y1="163" x2="560" y2="138" stroke="#ef7d2e"/><line x1="300" y1="166" x2="560" y2="158" stroke="#f2c512"/><line x1="300" y1="169" x2="560" y2="178" stroke="#3aa14b"/><line x1="300" y1="172" x2="560" y2="198" stroke="#2f6fd0"/><line x1="300" y1="175" x2="560" y2="218" stroke="#3b3be2"/><line x1="300" y1="178" x2="560" y2="238" stroke="#8e3be2"/></g><text x="578" y="122" font-size="12" fill="#e23b3b" text-anchor="end" font-weight="bold">Red</text><text x="578" y="242" font-size="12" fill="#8e3be2" text-anchor="end" font-weight="bold">Violet</text><text x="300" y="300" font-size="13" fill="#1f2d3a" text-anchor="middle">White light dispersed into the visible spectrum by a prism</text></svg>',
          },
          caption: 'White light splitting into the visible spectrum as it passes through a glass prism (red at the top, violet at the bottom).',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Explain** why violet light is at the bottom of the spectrum in part (a). Use scientific terminology in your answer.',
        marks: 3,
        ph: 'Violet light has the shortest wavelength (highest frequency) of the visible colours. It is refracted the most by the glass prism. Violet light travels slowest through the glass (highest refractive index), so it is bent the most at the glass surface, appearing at the bottom of the spectrum.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Ultraviolet (UV) waves exist just beyond violet in the spectrum. Unlike violet light, UV waves are not visible to the human eye. **State** one other difference between UV waves and violet light.',
        marks: 1,
        ph: 'UV waves have a shorter wavelength than violet light / UV has a higher frequency than violet light / UV carries more energy per photon.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all colours of light travel at **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of violet light with a wavelength of **420 nm**. Give your answer in scientific notation.',
        marks: 2,
        ph: 'f = v ÷ λ = (3.00 × 10⁸) ÷ (420 × 10⁻⁹) = 7.14 × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // V1: Nitrogen-14 atom (Z=7, A=14; 7p, 7n)
  // Q3c: same variable_classify (Gamma/X-ray/Cosmic/Ultrasound → 3 categories)
  // Q3d: ²²⁶₈₈Ra→⁴₂He alpha; ¹⁴₆C→¹⁴₇N beta
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    crit: 'A',
    type: 'extended',
    topic: 'Atomic Physics & Radioactivity',
    marks: 9,
    topicCanonical: 'Atomic Structure & Radioactivity',
    topicGroup: 'Nuclear & Atomic Physics',
    tags: { unit: 'atomic-physics', topics: ['atomic structure', 'isotopes', 'alpha and beta decay', 'gamma radiation and x-rays'], level: 'proficient' },
    stem: 'The diagram shows an atom of nitrogen-14, which has 7 protons and 7 neutrons.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="420" fill="#ffffff"/><circle cx="210" cy="210" r="90" fill="none" stroke="#5b6b78" stroke-width="1.5"/><circle cx="210" cy="210" r="150" fill="none" stroke="#5b6b78" stroke-width="1.5"/><g stroke="#fff" stroke-width="1"><circle cx="200" cy="198" r="10" fill="#e8553b"/><circle cx="218" cy="196" r="10" fill="#9aa3ad"/><circle cx="210" cy="212" r="10" fill="#e8553b"/><circle cx="226" cy="210" r="10" fill="#9aa3ad"/><circle cx="194" cy="214" r="10" fill="#9aa3ad"/><circle cx="208" cy="226" r="10" fill="#e8553b"/><circle cx="224" cy="224" r="10" fill="#9aa3ad"/><circle cx="192" cy="228" r="10" fill="#e8553b"/><circle cx="208" cy="186" r="10" fill="#9aa3ad"/><circle cx="226" cy="186" r="10" fill="#e8553b"/><circle cx="190" cy="200" r="10" fill="#9aa3ad"/><circle cx="228" cy="226" r="10" fill="#e8553b"/><circle cx="184" cy="216" r="10" fill="#e8553b"/><circle cx="234" cy="200" r="10" fill="#9aa3ad"/></g><circle cx="210" cy="120" r="8" fill="#0b7285"/><circle cx="210" cy="300" r="8" fill="#0b7285"/><circle cx="60" cy="210" r="8" fill="#0b7285"/><circle cx="360" cy="210" r="8" fill="#0b7285"/><circle cx="125" cy="125" r="8" fill="#0b7285"/><circle cx="295" cy="125" r="8" fill="#0b7285"/><circle cx="295" cy="295" r="8" fill="#0b7285"/><g font-size="12" fill="#1f2d3a"><circle cx="40" cy="396" r="7" fill="#e8553b"/><text x="52" y="400">7 protons</text><circle cx="150" cy="396" r="7" fill="#9aa3ad"/><text x="162" y="400">7 neutrons</text><circle cx="270" cy="396" r="7" fill="#0b7285"/><text x="282" y="400">7 electrons</text></g><text x="210" y="28" font-size="14" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Nitrogen-14 atom</text></svg>',
      },
      caption: 'An atom of nitrogen-14: 7 protons and 7 neutrons in the nucleus, with 7 electrons in shells.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: 7\nMass number: 14',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of nitrogen-13 and a nucleus of nitrogen-14.',
        marks: 2,
        ph: 'Similarity: both have the same number of protons (7) / same atomic number / same positive charge\nDifference: nitrogen-14 has one more neutron (7) than nitrogen-13 (6) / different mass number / nitrogen-13 is radioactively unstable',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Gamma rays and X-rays are both types of electromagnetic radiation. The key below shows where each type is produced. **Classify** each type of radiation by placing it in the correct category.\n\n• Gamma ray — produced from the nucleus of an atom\n• X-ray — produced from the inner orbits of electrons\n• Cosmic ray — produced outside the atom\n• Ultrasound wave — not EM radiation',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="600" height="360" fill="#ffffff"/><g transform="translate(0,10)"><circle cx="190" cy="180" r="78" fill="none" stroke="#5b6b78" stroke-width="1.5"/><circle cx="190" cy="180" r="130" fill="none" stroke="#5b6b78" stroke-width="1.5"/><g stroke="#fff" stroke-width="1"><circle cx="182" cy="170" r="9" fill="#e8553b"/><circle cx="198" cy="168" r="9" fill="#9aa3ad"/><circle cx="190" cy="182" r="9" fill="#e8553b"/><circle cx="206" cy="180" r="9" fill="#9aa3ad"/><circle cx="176" cy="184" r="9" fill="#9aa3ad"/><circle cx="190" cy="196" r="9" fill="#e8553b"/><circle cx="204" cy="194" r="9" fill="#9aa3ad"/><circle cx="174" cy="196" r="9" fill="#e8553b"/></g><circle cx="190" cy="100" r="7" fill="#0b7285"/><circle cx="190" cy="260" r="7" fill="#0b7285"/><circle cx="60" cy="180" r="7" fill="#0b7285"/><circle cx="320" cy="180" r="7" fill="#0b7285"/><g stroke="#7048b8" stroke-width="4"><path d="M206 166 l9 -9 m4 0 l9 -9 m4 0 l9 -9"/></g><line x1="206" y1="166" x2="258" y2="114" stroke="#7048b8" stroke-width="2" stroke-dasharray="3 3"/><g stroke="#f08c00" stroke-width="4"><path d="M140 130 l-9 -9 m0 -5 l-9 -9 m0 -5 l-9 -9"/></g><line x1="131" y1="121" x2="92" y2="82" stroke="#f08c00" stroke-width="2" stroke-dasharray="3 3"/></g><g transform="translate(360,40)"><text x="0" y="0" font-size="14" font-weight="bold" fill="#1f2d3a">Key</text><g stroke="#7048b8" stroke-width="4"><path d="M0 18 l9 -9 m4 0 l9 -9"/></g><text x="40" y="14" font-size="12" fill="#1f2d3a">Produced from the</text><text x="40" y="30" font-size="12" fill="#1f2d3a">nucleus of an atom</text><g stroke="#f08c00" stroke-width="4"><path d="M0 70 l9 -9 m4 0 l9 -9"/></g><text x="40" y="66" font-size="12" fill="#1f2d3a">Produced from the inner</text><text x="40" y="82" font-size="12" fill="#1f2d3a">orbit of electrons</text></g><text x="300" y="350" font-size="12" fill="#5b6b78" text-anchor="middle">Two types of electromagnetic radiation emitted from an atom</text></svg>',
          },
          caption: 'Gamma rays are emitted from the nucleus; X-rays from the inner electron orbits.',
        },
        widget: 'variable_classify',
        widgetOptions: ['Gamma ray', 'X-ray', 'Cosmic ray', 'Ultrasound wave'],
        widgetItems: ['Produced from nucleus', 'Produced from inner electron orbit', 'Neither'],
        ph: 'Nucleus: Gamma ray\nInner electron orbit: X-ray\nNeither: Cosmic ray, Ultrasound wave',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²²⁶₈₈Ra → ²²²₈₆Rn + ?₂α\n\n¹⁴₆C → ?₇N + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: alpha particle = ⁴₂He (mass number 226−222=4, atomic number 88−86=2 ✓)\nEquation 2: daughter nucleus = ¹⁴₇N (mass 14, atomic number 6+1=7)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below:\n\n¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁p',
        marks: 1,
        ph: 'A nitrogen-14 nucleus absorbs an alpha particle (helium-4 nucleus) to produce an oxygen-17 nucleus and a proton. This is a nuclear transmutation (artificial nuclear reaction).',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B
  // V1: Piston in a cylinder
  // Q4b: variable_classify (same structure)
  // Q4c: radio_select correct=0 (increase)
  // Q4d: area=9.0×10⁻⁴ m², mass=1.8 kg, P_atm=100000 Pa
  //   ΔP=1.8×9.81/9.0×10⁻⁴=19620 Pa; Total=119620 Pa≈1.20×10⁵ Pa
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: "Ideal Gas & Boyle's Law",
    marks: 13,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['pressure and volume', "Boyle's law", 'gas laws', 'scientific investigation'], level: 'advanced' },
    stem: "A student investigates how the pressure on a fixed mass of gas affects its volume. They use a piston in a sealed cylinder, adding masses slowly to the top of the piston so that temperature remains constant. The cylinder is sealed so the amount of gas is fixed.",
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 360 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="pmass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#94a3ad"/><stop offset="1" stop-color="#6b7a85"/></linearGradient></defs><rect width="360" height="420" fill="#ffffff"/><rect x="132" y="16" width="96" height="24" rx="3" fill="url(#pmass)" stroke="#3a4750" stroke-width="1.5"/><rect x="120" y="40" width="120" height="26" rx="3" fill="url(#pmass)" stroke="#3a4750" stroke-width="1.5"/><text x="180" y="58" font-size="12" fill="#fff" text-anchor="middle" font-weight="bold">masses</text><rect x="172" y="66" width="16" height="40" fill="#d3dadf" stroke="#8a99a6" stroke-width="1.5"/><rect x="118" y="104" width="124" height="16" rx="2" fill="#aab4bd" stroke="#5b6b78" stroke-width="1.5"/><text x="262" y="116" font-size="11" fill="#1f2d3a">piston</text><rect x="126" y="120" width="108" height="240" rx="4" fill="#eef6fb" stroke="#0b7285" stroke-width="2.5"/><rect x="130" y="222" width="100" height="134" fill="#bfe3f2"/><line x1="130" y1="222" x2="230" y2="222" stroke="#0b7285" stroke-width="1.5" stroke-dasharray="4 3"/><text x="180" y="296" font-size="13" fill="#1f4d61" text-anchor="middle" font-weight="bold">gas</text><g stroke="#0b7285" stroke-width="1"><line x1="234" y1="150" x2="246" y2="150"/><line x1="234" y1="186" x2="246" y2="186"/><line x1="234" y1="222" x2="246" y2="222"/><line x1="234" y1="258" x2="246" y2="258"/><line x1="234" y1="294" x2="246" y2="294"/><line x1="234" y1="330" x2="246" y2="330"/></g><text x="262" y="226" font-size="10" fill="#0b7285">scale</text><rect x="126" y="360" width="108" height="20" rx="3" fill="#cfd6dc" stroke="#0b7285" stroke-width="2.5"/><rect x="170" y="380" width="20" height="14" fill="#3a4750"/><text x="262" y="386" font-size="11" fill="#3a4750">sealed base</text><line x1="300" y1="20" x2="300" y2="98" stroke="#e8553b" stroke-width="3"/><polygon points="300,100 293,84 307,84" fill="#e8553b"/><text x="312" y="64" font-size="12" fill="#e8553b">force</text></svg>',
      },
      caption: 'Masses are added to the piston, compressing the fixed amount of gas sealed in the cylinder.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** a research question that this investigation could answer.',
        marks: 1,
        ph: 'How does the mass added to the piston affect the volume of gas in the cylinder? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of gas in cylinder | | | |\n| Mass added to piston | | | |\n| Temperature | | | |\n| Volume of gas | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of gas in cylinder', 'Mass added to piston', 'Temperature', 'Volume of gas'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass added to piston\nDependent: Volume of gas\nControl: Amount of gas in cylinder, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the piston, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The piston has an area of **9.0 × 10⁻⁴ m²**. Atmospheric pressure is **100 000 Pa**. **Calculate** the total pressure on the gas in the cylinder when the mass applied is **1.8 kg**. Use **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'ΔP = F/A = mg/A = (1.8 × 9.81) / (9.0 × 10⁻⁴)\n= 17.658 / 0.0009 = 19620 Pa\nTotal pressure = 19620 + 100000 = 119620 Pa ≈ 1.20 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each mass. They presented the processed data in two graphs below.\n\n**Use both graphs** to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="300" fill="#ffffff"/><g transform="translate(0,0)"><text x="160" y="22" font-size="13" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Volume vs Pressure</text><line x1="60" y1="40" x2="60" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="230" x2="290" y2="230" stroke="#333" stroke-width="1.5"/><path d="M78 58 Q120 150 150 180 Q200 215 280 224" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="80" cy="62" r="3" fill="#0b7285"/><circle cx="110" cy="120" r="3" fill="#0b7285"/><circle cx="150" cy="180" r="3" fill="#0b7285"/><circle cx="210" cy="210" r="3" fill="#0b7285"/><circle cx="278" cy="224" r="3" fill="#0b7285"/><text x="175" y="270" font-size="11" fill="#1f2d3a" text-anchor="middle">Pressure / kPa</text><text x="22" y="135" font-size="11" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 22 135)">Volume / cm³</text></g><g transform="translate(310,0)"><text x="160" y="22" font-size="13" font-weight="bold" fill="#1f2d3a" text-anchor="middle">1/V vs Pressure</text><line x1="60" y1="40" x2="60" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="230" x2="290" y2="230" stroke="#333" stroke-width="1.5"/><line x1="60" y1="225" x2="278" y2="60" stroke="#f08c00" stroke-width="2.5"/><circle cx="78" cy="211" r="3" fill="#f08c00"/><circle cx="118" cy="181" r="3" fill="#f08c00"/><circle cx="168" cy="143" r="3" fill="#f08c00"/><circle cx="218" cy="105" r="3" fill="#f08c00"/><circle cx="268" cy="67" r="3" fill="#f08c00"/><text x="175" y="270" font-size="11" fill="#1f2d3a" text-anchor="middle">Pressure / kPa</text><text x="22" y="135" font-size="11" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 22 135)">1/V × 10⁻³ / cm⁻³</text></g></svg>',
          },
          caption: 'Left: volume falls as pressure rises (inverse curve). Right: 1/V is a straight line through the origin against pressure.',
        },
        ph: "As pressure increases, volume decreases. The relationship is non-linear (inverse) — as seen in the curved V vs P graph. This is consistent with Boyle's law: pressure and volume are inversely proportional at constant temperature.",
        level: 'proficient',
      },
      {
        label: 'f',
        text: "Another student multiplied pressure × volume (pV) and plotted the result. Boyle's law states that pV is constant at constant temperature. **Suggest** whether the graph supports Boyle's law. **Justify** your answer.",
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pV against pressure',
            xLabel: 'Pressure', xUnit: 'kPa',
            yLabel: 'pV', yUnit: 'kPa·cm³',
            dataPoints: [{ x: 50, y: 10900 }, { x: 75, y: 11050 }, { x: 100, y: 10950 }, { x: 125, y: 11100 }, { x: 150, y: 11000 }],
            xMin: 0, xMax: 175, yMin: 0, yMax: 14000, xStep: 25, yStep: 2000,
          },
          caption: 'pV stays close to a constant value of about 11 000 kPa·cm³ across the range of pressures.',
        },
        ph: "The graph broadly supports Boyle's law. The pV values are approximately constant (close to a horizontal line) across the range of pressures, with only small deviations likely due to experimental error.",
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. Include a unit in your answer.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pV against pressure',
            xLabel: 'Pressure', xUnit: 'kPa',
            yLabel: 'pV', yUnit: 'kPa·cm³',
            dataPoints: [{ x: 50, y: 10900 }, { x: 75, y: 11050 }, { x: 100, y: 10950 }, { x: 125, y: 11100 }, { x: 150, y: 11000 }],
            xMin: 0, xMax: 175, yMin: 0, yMax: 14000, xStep: 25, yStep: 2000,
          },
          caption: 'Read the constant pV value (≈ 11 000 kPa·cm³), then divide by the pressure to find the volume.',
        },
        ph: 'Read the constant pV value from the graph (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 ≈ 147 cm³\n(Accept 140–155 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // V1: Gas in balloon — temperature vs circumference (same structure, different framing)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    crit: 'B',
    type: 'extended',
    topic: 'Gas in a Balloon: Temperature Investigation',
    marks: 17,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['kinetic theory', 'temperature and gas volume', 'experimental design'], level: 'advanced' },
    stem: 'A group of students decides to investigate the effect of temperature on the volume of a gas trapped inside a sealed balloon.\n\nThey make the following prediction:\n\n*"If the temperature of a fixed amount of gas inside a balloon increases, the circumference of the balloon will increase."*',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 420" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="balg1" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#e8772e"/></radialGradient></defs><rect width="420" height="420" fill="#ffffff"/><ellipse cx="220" cy="195" rx="120" ry="135" fill="url(#balg1)" stroke="#c25e15" stroke-width="2"/><polygon points="212,325 230,325 221,346" fill="#c25e15"/><path d="M221 346 Q236 372 216 392 Q202 406 220 418" fill="none" stroke="#7a4a16" stroke-width="2"/><path d="M104 210 Q220 252 336 200" fill="none" stroke="#0b7285" stroke-width="14" opacity="0.85"/><path d="M104 210 Q220 252 336 200" fill="none" stroke="#ffffff" stroke-width="14" stroke-dasharray="2 9"/><line x1="150" y1="118" x2="200" y2="150" stroke="#1f2d3a" stroke-width="1.5"/><text x="142" y="116" font-size="14" fill="#1f2d3a" text-anchor="end">Balloon</text><line x1="160" y1="300" x2="200" y2="228" stroke="#1f2d3a" stroke-width="1.5"/><text x="152" y="312" font-size="14" fill="#0b7285" text-anchor="end" font-weight="bold">Circumference</text><text x="350" y="216" font-size="11" fill="#0b7285">tape measure</text></svg>',
      },
      caption: 'A tape measure is wrapped around the balloon to record its circumference.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'As temperature increases, gas particles gain more kinetic energy and move faster. They collide with the inside of the balloon more frequently and with greater force per collision. This increases the outward pressure on the balloon walls, causing the elastic balloon to expand — so the circumference increases.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Directly measuring the volume of a balloon is difficult, so students measure the circumference instead.\n\n**Design** an experiment the students could use to carry out this investigation. They are provided with standard laboratory equipment including a water bath to control temperature. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment needed\n• a detailed method for collecting data\n• an explanation of how sufficient data will be collected\n• details of how to make the method safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIV: temperature of gas (°C)\nDV: circumference of balloon (cm)\nCV: amount of gas in balloon (same initial inflations)\n\nEquipment: balloon, tape measure or string and ruler, thermometer, water bath with heater, tongs, stopwatch, clamp stand\n\nMethod:\n1. Inflate balloon to fixed size; measure circumference with tape measure.\n2. Place in water bath at 20°C; wait 5 min for temperature equilibrium; measure circumference.\n3. Repeat at 30, 40, 50, 60, 70°C.\n4. Record temperature and circumference for each trial.\n5. Take 3 repeats at each temperature; calculate mean.\n\nSufficiency: ≥5 temperatures, 3 repeats, graph of circumference vs temperature.\n\nSafety: use tongs; do not exceed 80°C (balloon may burst); keep water away from electrical equipment.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // V1: Same balloon-rocket structure; different diameter
  // Q6c: diameter = 10.5 cm → C = π×10.5 = 33.0 cm
  // Q6d: raw data includes 33.0 cm result; ascending order
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: "Balloon Rocket & Newton's Laws",
    marks: 17,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ["Newton's second law", "Newton's third law", 'data processing', 'hypothesis evaluation'], level: 'advanced' },
    stem: 'When the air inside an inflated balloon is released, the balloon accelerates along a string.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><radialGradient id="balg2" cx="38%" cy="34%" r="72%"><stop offset="0" stop-color="#f6b26b"/><stop offset="1" stop-color="#e8772e"/></radialGradient><marker id="airA" markerWidth="10" markerHeight="10" refX="2" refY="3" orient="auto"><path d="M8,0 L1,3 L8,6 Z" fill="#0b7285"/></marker><marker id="motA" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#2f9e44"/></marker></defs><rect width="600" height="320" fill="#ffffff"/><rect y="248" width="600" height="72" fill="#eef2f4"/><rect x="80" y="70" width="8" height="180" fill="#9aa3ad"/><rect x="55" y="248" width="58" height="14" rx="3" fill="#5b6b78"/><rect x="512" y="70" width="8" height="180" fill="#9aa3ad"/><rect x="487" y="248" width="58" height="14" rx="3" fill="#5b6b78"/><line x1="84" y1="100" x2="516" y2="100" stroke="#5b6b78" stroke-width="2"/><text x="430" y="92" font-size="11" fill="#5b6b78">string</text><rect x="250" y="95" width="70" height="9" rx="3" fill="#cfd6dc" stroke="#9aa3ad"/><text x="330" y="90" font-size="12" fill="#5b6b78">straw on string</text><ellipse cx="222" cy="120" rx="60" ry="34" fill="url(#balg2)" stroke="#c25e15" stroke-width="2"/><polygon points="166,120 148,108 148,132" fill="url(#balg2)" stroke="#c25e15" stroke-width="2"/><line x1="146" y1="120" x2="96" y2="120" stroke="#0b7285" stroke-width="3" marker-start="url(#airA)"/><text x="118" y="148" font-size="11" fill="#0b7285" text-anchor="middle">escaping air</text><line x1="290" y1="120" x2="350" y2="120" stroke="#2f9e44" stroke-width="3" marker-end="url(#motA)"/><text x="324" y="112" font-size="11" fill="#2f9e44" text-anchor="middle">motion</text><line x1="180" y1="172" x2="216" y2="148" stroke="#1f2d3a" stroke-width="1.5"/><text x="172" y="180" font-size="14" fill="#1f2d3a" text-anchor="end">Balloon</text></svg>',
      },
      caption: 'Air escaping backwards pushes the balloon forwards along the string (action–reaction).',
    },
    tasks: [
      {
        label: 'a',
        text: "**Use Newton's laws** to **explain** the motion of the balloon along the string.",
        marks: 3,
        ph: "Newton's 3rd law: the balloon pushes air backwards; the air pushes the balloon forwards with an equal and opposite reaction force (action-reaction pair).\nNewton's 2nd law: the net (unbalanced) forward force causes the balloon to accelerate forward (F = ma).",
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Students investigate the distance travelled by a balloon along a string when inflated to different circumferences.\n\n**State** the research question the students are investigating.',
        marks: 1,
        ph: 'How does the circumference of a balloon affect the distance it travels along the string when released?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **10.5 cm**. **Calculate** the circumference of this balloon. Include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 10.5 = 33.0 cm\n(Accept 32.9–33.1 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook. **Organise and present** the data into a table, including the result from part (c) with an estimated distance of **1.15 m**.\n\nRaw data (unordered):\n- Circumference 28.5 cm → 0.75 m\n- Circumference 36.4 cm → 1.48 m\n- Circumference 44.2 cm → 2.85 m\n- Circumference 51.7 cm → 4.35 m\n- Circumference 55.3 cm → 5.72 m',
        marks: 4,
        ph: 'Table headers: Circumference / cm | Distance travelled / m\nData in ascending circumference order:\n28.5 | 0.75\n33.0 | 1.15 (from part c)\n36.4 | 1.48\n44.2 | 2.85\n51.7 | 4.35\n55.3 | 5.72\nUnits in headers only; consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, the students suggested the following hypothesis:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the net force will be greater with more air."*\n\nThe students plotted three different graphs of their data. **Use the graphs** to **describe** the relationship between circumference and distance, and **evaluate** the validity of their hypothesis.',
        marks: 3,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 660 250" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="660" height="250" fill="#ffffff"/><g transform="translate(0,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Graph A</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><path d="M58 184 Q140 178 150 150 Q170 95 200 44" fill="none" stroke="#0b7285" stroke-width="2.5"/><circle cx="60" cy="183" r="3" fill="#0b7285"/><circle cx="110" cy="172" r="3" fill="#0b7285"/><circle cx="150" cy="150" r="3" fill="#0b7285"/><circle cx="180" cy="100" r="3" fill="#0b7285"/><circle cx="198" cy="48" r="3" fill="#0b7285"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">Circumference / cm</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g><g transform="translate(220,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#1f2d3a" text-anchor="middle">Graph B</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><path d="M58 50 Q90 150 120 168 Q160 184 200 187" fill="none" stroke="#7048b8" stroke-width="2.5"/><circle cx="62" cy="60" r="3" fill="#7048b8"/><circle cx="90" cy="135" r="3" fill="#7048b8"/><circle cx="130" cy="172" r="3" fill="#7048b8"/><circle cx="170" cy="184" r="3" fill="#7048b8"/><circle cx="200" cy="187" r="3" fill="#7048b8"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">1/circumference / cm⁻¹</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g><g transform="translate(440,0)"><text x="115" y="20" font-size="12" font-weight="bold" fill="#2f9e44" text-anchor="middle">Graph C</text><line x1="50" y1="34" x2="50" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="210" y2="190" stroke="#333" stroke-width="1.5"/><line x1="50" y1="190" x2="202" y2="44" stroke="#2f9e44" stroke-width="2.5"/><circle cx="74" cy="167" r="3" fill="#2f9e44"/><circle cx="110" cy="132" r="3" fill="#2f9e44"/><circle cx="146" cy="98" r="3" fill="#2f9e44"/><circle cx="178" cy="68" r="3" fill="#2f9e44"/><circle cx="200" cy="46" r="3" fill="#2f9e44"/><text x="130" y="218" font-size="10" fill="#1f2d3a" text-anchor="middle">Circumference cubed / cm³</text><text x="20" y="112" font-size="10" fill="#1f2d3a" text-anchor="middle" transform="rotate(-90 20 112)">Distance / m</text></g></svg>',
          },
          caption: 'Graph A: distance vs circumference (curved). Graph B: distance vs 1/circumference. Graph C: distance vs circumference³ (straight line through the origin).',
        },
        ph: 'As circumference increases, distance increases — hypothesis direction is correct. However, the relationship is NOT directly proportional (Graph A does not pass through origin / is not straight). Graph C (distance vs circumference³) shows a straight line through origin, suggesting distance ∝ circumference³. Hypothesis is only partially valid: direction is correct but the direct-proportion claim is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The students want to extend their investigation. **Suggest** a new independent variable and two control variables for an extension investigation. The dependent variable (distance travelled) has been given.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'IV: temperature of the gas inside the balloon / type of gas / length of string\nCV1: circumference of balloon (same starting volume)\nCV2: length of straw attached to balloon (affects friction/drag)',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis for the extension investigation described in part (f).',
        marks: 2,
        ph: 'If [IV] increases, then the distance travelled will [increase/decrease] because [scientific reasoning].\nE.g. If the temperature of the gas inside the balloon increases, the distance travelled will increase, because higher temperature → greater kinetic energy of gas → larger volume of gas released → greater net force on balloon.',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Mobile Phone Communication (18 marks) Criterion C/D
  // V1: Different waveform period (T=2.0 s → f=0.50 Hz)
  // Q7b: radio_select 4 opts, correct=2 (C)
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    crit: 'C',
    type: 'extended',
    topic: 'Waves & Radio Communication',
    marks: 18,
    topicCanonical: 'Waves, Sound & Frequency',
    topicGroup: 'Waves & Sound',
    tags: { unit: 'sound-waves', topics: ['wave properties', 'frequency and period', 'radio waves', 'electromagnetic communication'], level: 'advanced' },
    stem: 'The frequency of any wave can be found from a graph of displacement against time.',
    tasks: [
      {
        label: 'a',
        text: 'The graph below shows a wave. **Calculate** the frequency of the waveform shown. Give your answer to two significant figures and include a unit.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Position against time',
            xLabel: 'Time', xUnit: 's',
            yLabel: 'Position', yUnit: 'cm',
            dataPoints: [{ x: 0.0, y: 0.0 }, { x: 0.2, y: 0.588 }, { x: 0.4, y: 0.951 }, { x: 0.6, y: 0.951 }, { x: 0.8, y: 0.588 }, { x: 1.0, y: 0.0 }, { x: 1.2, y: -0.588 }, { x: 1.4, y: -0.951 }, { x: 1.6, y: -0.951 }, { x: 1.8, y: -0.588 }, { x: 2.0, y: 0.0 }, { x: 2.2, y: 0.588 }, { x: 2.4, y: 0.951 }, { x: 2.6, y: 0.951 }, { x: 2.8, y: 0.588 }, { x: 3.0, y: 0.0 }, { x: 3.2, y: -0.588 }, { x: 3.4, y: -0.951 }, { x: 3.6, y: -0.951 }, { x: 3.8, y: -0.588 }, { x: 4.0, y: 0.0 }],
            xMin: 0, xMax: 4, yMin: -1.5, yMax: 1.5, xStep: 0.5, yStep: 0.5,
          },
          caption: 'One complete cycle of the wave takes 2.0 s.',
        },
        ph: 'Period T = read from graph ≈ 2.0 s (one complete cycle)\nFrequency f = 1/T = 1/2.0 = 0.50 Hz\n(Answer to 2 s.f. with unit)',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Select** the waveform with the **same frequency** as the waveform in part (a). Waveforms A–D are shown below.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="500" height="300" fill="#ffffff"/><g transform="translate(0,0)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">A</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,71.3 36,63.5 39,57.3 42,53.4 45,52 48,53.4 51,57.3 54,63.5 57,71.3 60,80 63,88.7 66,96.5 69,102.7 72,106.6 75,108 78,106.6 81,102.7 84,96.5 87,88.7 90,80 93,71.3 96,63.5 99,57.3 102,53.4 105,52 108,53.4 111,57.3 114,63.5 117,71.3 120,80 123,88.7 126,96.5 129,102.7 132,106.6 135,108 138,106.6 141,102.7 144,96.5 147,88.7 150,80 153,71.3 156,63.5 159,57.3 162,53.4 165,52 168,53.4 171,57.3 174,63.5 177,71.3 180,80 183,88.7 186,96.5 189,102.7 192,106.6 195,108 198,106.6 201,102.7 204,96.5 207,88.7 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(250,0)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">B</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 36,74.2 42,68.6 48,63.5 54,59.2 60,55.8 66,53.4 72,52.2 78,52.2 84,53.4 90,55.8 96,59.2 102,63.5 108,68.6 114,74.2 120,80 126,85.8 132,91.4 138,96.5 144,100.8 150,104.2 156,106.6 162,107.8 168,107.8 174,106.6 180,104.2 186,100.8 192,96.5 198,91.4 204,85.8 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(0,150)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">C</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,74.2 36,68.6 39,63.5 42,59.2 45,55.8 48,53.4 51,52.2 54,52.2 57,53.4 60,55.8 63,59.2 66,63.5 69,68.6 72,74.2 75,80 78,85.8 81,91.4 84,96.5 87,100.8 90,104.2 93,106.6 96,107.8 99,107.8 102,106.6 105,104.2 108,100.8 111,96.5 114,91.4 117,85.8 120,80 123,74.2 126,68.6 129,63.5 132,59.2 135,55.8 138,53.4 141,52.2 144,52.2 147,53.4 150,55.8 153,59.2 156,63.5 159,68.6 162,74.2 165,80 168,85.8 171,91.4 174,96.5 177,100.8 180,104.2 183,106.6 186,107.8 189,107.8 192,106.6 195,104.2 198,100.8 201,96.5 204,91.4 207,85.8 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g><g transform="translate(250,150)"><rect x="10" y="10" width="230" height="130" fill="#fbfdfe" stroke="#cdd6dc"/><text x="22" y="30" font-size="15" font-weight="bold" fill="#1f2d3a">D</text><line x1="30" y1="80" x2="220" y2="80" stroke="#cdd6dc" stroke-width="1"/><polyline points="30,80 33,68.6 36,59.2 39,53.4 42,52.2 45,55.8 48,63.5 51,74.2 54,85.8 57,96.5 60,104.2 63,107.8 66,106.6 69,100.8 72,91.4 75,80 78,68.6 81,59.2 84,53.4 87,52.2 90,55.8 93,63.5 96,74.2 99,85.8 102,96.5 105,104.2 108,107.8 111,106.6 114,100.8 117,91.4 120,80 123,68.6 126,59.2 129,53.4 132,52.2 135,55.8 138,63.5 141,74.2 144,85.8 147,96.5 150,104.2 153,107.8 156,106.6 159,100.8 162,91.4 165,80 168,68.6 171,59.2 174,53.4 177,52.2 180,55.8 183,63.5 186,74.2 189,85.8 192,96.5 195,104.2 198,107.8 201,106.6 204,100.8 207,91.4 210,80" fill="none" stroke="#0b7285" stroke-width="2"/></g></svg>',
          },
          caption: 'Four candidate waveforms A–D plotted over the same time window.',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Khalid and Sena are communicating using mobile phones. The phones send and receive information as radio waves. Different frequencies are used to transmit this information.\n\n**Put the following statements in order** to outline how the phone network works.',
        marks: 1,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 620 360" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="620" height="360" fill="#ffffff"/><line x1="0" y1="320" x2="620" y2="320" stroke="#cdd6dc" stroke-width="2"/><g transform="translate(60,230)"><circle cx="0" cy="0" r="14" fill="#0b7285"/><rect x="-12" y="14" width="24" height="50" rx="8" fill="#0e5d6e"/><rect x="10" y="6" width="8" height="14" rx="2" fill="#1f2d3a"/><text x="0" y="90" font-size="13" fill="#1f2d3a" text-anchor="middle">Khalid</text></g><g transform="translate(230,150)"><polygon points="0,0 -18,150 18,150" fill="none" stroke="#5b6b78" stroke-width="2.5"/><line x1="-12" y1="50" x2="12" y2="50" stroke="#5b6b78" stroke-width="2"/><line x1="-15" y1="100" x2="15" y2="100" stroke="#5b6b78" stroke-width="2"/><path d="M-6 -6 q-14 6 0 18 M6 -6 q14 6 0 18" fill="none" stroke="#2f9e44" stroke-width="2"/><text x="0" y="-18" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Tower A</text></g><g transform="translate(420,110)"><polygon points="0,0 -20,190 20,190" fill="none" stroke="#5b6b78" stroke-width="2.5"/><line x1="-13" y1="60" x2="13" y2="60" stroke="#5b6b78" stroke-width="2"/><line x1="-17" y1="125" x2="17" y2="125" stroke="#5b6b78" stroke-width="2"/><path d="M-6 -6 q-14 6 0 18 M6 -6 q14 6 0 18" fill="none" stroke="#2f9e44" stroke-width="2"/><text x="0" y="-18" font-size="13" fill="#1f2d3a" text-anchor="middle" font-weight="bold">Tower B</text></g><g transform="translate(560,230)"><circle cx="0" cy="0" r="14" fill="#f08c00"/><rect x="-12" y="14" width="24" height="50" rx="8" fill="#c87400"/><rect x="-18" y="6" width="8" height="14" rx="2" fill="#1f2d3a"/><text x="0" y="90" font-size="13" fill="#1f2d3a" text-anchor="middle">Sena</text></g><path d="M85 215 q40 -30 130 -55" fill="none" stroke="#0b7285" stroke-width="1.8" stroke-dasharray="5 4"/><text x="135" y="170" font-size="10" fill="#0b7285">radio wave</text><path d="M230 305 q95 30 190 -10" fill="none" stroke="#1f2d3a" stroke-width="2"/><text x="320" y="345" font-size="10" fill="#5b6b78" text-anchor="middle">wired / fibre-optic link</text><path d="M420 130 q70 30 130 90" fill="none" stroke="#0b7285" stroke-width="1.8" stroke-dasharray="5 4"/><text x="512" y="160" font-size="10" fill="#0b7285">radio wave</text></svg>',
          },
          caption: "Khalid's phone sends a radio wave to Tower A, which links via fibre-optic cable to Tower B, which sends a radio wave to Sena's phone.",
        },
        ph: "1. Khalid's voice is converted into an electrical signal by the microphone. The phone converts that signal into a radio wave.\n2. The radio wave is transmitted from Khalid's phone to tower A.\n3. Tower A sends the signal via fibre-optic cables to tower B, where it is converted to a radio wave again.\n4. Sena's phone receives the radio wave and converts it back into sound she can hear.",
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'Location data from mobile phones can be used in navigation apps and to track movements of individuals in public spaces.\n\nPeople in large gatherings can be tracked and this data can reveal where they live and other personal details.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, discuss:\n\n• the advantages and disadvantages of location tracking for an individual\n• the economic benefits of location tracking for a company\n• the positive and negative security implications for a country\n• an overall appraisal evaluating the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation; fitness tracking; emergency location services; family safety.\nDisadvantages: loss of privacy; data sold without consent; risk of stalking; movements monitored.\n\nEconomic for companies: targeted advertising; consumer behaviour analytics; delivery optimisation; data as revenue.\n\nSecurity (positive): track criminals/terrorists; crowd monitoring for public safety; disaster response.\nSecurity (negative): mass surveillance; suppression of protest; data breach risks.\n\nConclusion: Benefits exist but significant privacy risks. Consent and regulation are key to balancing benefits and civil liberties.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Scientific Misinformation Online (8 marks) Criterion D
  // V1: Moon landing conspiracy theories and internet misinformation
  // topicCanonical and topicGroup preserved from source
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Scientific Misinformation Online',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['science and society', 'misinformation', 'internet and science communication'], level: 'advanced' },
    stem: 'Social media and internet communities allow people to share ideas rapidly. Some online communities promote the idea that the Apollo moon landings were faked by NASA — a claim that contradicts overwhelming scientific evidence.\n\nSome scientists and governments have suggested that platforms should automatically remove such scientifically inaccurate claims.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information shared on the internet.',
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Reduces spread of dangerous misinformation (e.g. moon landing denial may erode trust in all science)\n• Protects public understanding of evidence-based science\n• Prevents misinformation influencing policy decisions\n\nLimitations:\n• Who determines what is "correct" science? Scientific knowledge evolves — past consensus has been revised\n• Risk of censorship suppressing legitimate minority scientific views\n• Technically difficult and expensive to implement across all platforms\n• Governments could exploit content control to suppress inconvenient scientific findings\n• Undermines freedom of speech and open debate\n\nConclusion: Removal of clearly dangerous or false content has merit, but broad content control risks censorship. Labelling disputed content with the scientific consensus may be preferable to outright removal.',
        level: 'advanced',
      },
    ],
  },

]
