import type { Question } from '@/lib/types'

export const paperMeta = {
  id: 'physics-may-2023',
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
  // Context: Horses performing farm work — rephrased: "draft horses clearing land"
  // Numbers changed: 3 km/45 min → 4 km/55 min; Horse B mass 510 kg → 480 kg; hill 12 m → 14 m; time 5.5 s → 6.2 s
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
    stem: 'Horses can perform work for farming activities. In the past, they were used to clear land before planting. Physics can be used to explore the ways in which horses complete these tasks.',
    artefact: {
      component: 'DataTable',
      data: {
        headers: ['Horse', 'Mass of horse / kg', 'Weight / N'],
        rows: [
          ['A', '350', '?'],
          ['B', '?', '4704'],
        ],
      },
      caption: 'Data for two draft horses, A and B (g = 9.8 N kg⁻¹). One value in each row is missing.',
    },
    tasks: [
      {
        label: 'a',
        text: 'A horse covers a distance of **4 km** in **55 minutes**. **Calculate** its speed in km per hour (km h⁻¹).',
        marks: 2,
        ph: 'Speed = distance ÷ time\n= 4 ÷ (55/60)\n= ... km h⁻¹',
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
        text: 'The table below gives some data about two horses A and B. **Calculate** the missing values and complete the table. You should assume the value of **g = 9.8 N kg⁻¹**.\n\n| Horse | Mass of horse / kg | Weight / N |\n|-------|-------------------|------------|\n| A | 350 | ? |\n| B | ? | 4704 |',
        marks: 2,
        ph: 'Horse A weight = mass × g = 350 × 9.8 = ... N\nHorse B mass = weight ÷ g = 4704 ÷ 9.8 = ... kg',
        level: 'developing',
      },
      {
        label: 'd',
        text: '**Select** the correct terms to complete the energy transformation diagram for a horse that starts from rest at the bottom of a hill, runs up the hill and then stops at the top of the hill.',
        marks: 1,
        widget: 'energy_chain',
        widgetOptions: ['Chemical potential energy', 'Gravitational potential energy', 'Elastic potential energy', 'Electrical energy', 'Kinetic energy'],
        ph: 'Chemical potential energy → Kinetic energy → Gravitational potential energy',
        level: 'developing',
      },
      {
        label: 'e',
        text: 'The hill in part (d) is **14 m** high. Using information from part (c) and the formula **ΔEₚ = mgΔh**, calculate the minimum power required for horse B to reach this height in **6.2 s**. You should give your answer in kW.',
        marks: 3,
        ph: 'Work done = ΔEp = mgΔh = (mass from c) × 9.8 × 14 = ... J\nPower = work done ÷ time = ... ÷ 6.2 = ... W = ... kW',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The power of some modern devices is given in horsepower (hp), where **1.0 hp is equivalent to 746 W**. An example of such a device is an electric water pump. **Calculate** the current that would be needed by a water pump with a power of **2.0 hp** operating at a voltage of **230 V**.',
        marks: 2,
        ph: 'Power = 2.0 × 746 = 1492 W\nI = P ÷ V = 1492 ÷ 230 = ... A',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 2 — Light & Electromagnetic Waves (7 marks) Criterion A
  // Context: Newton's prism experiments — dispersion of white light
  // Numbers changed: wavelength 750 nm → 680 nm (red light)
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
    stem: 'Newton carried out experiments on light. Working in his darkened room, he directed white light through a glass prism, which separated the light into the seven colours we now know as the visible spectrum.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="spec23" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8392b"/><stop offset="0.17" stop-color="#f08c00"/><stop offset="0.34" stop-color="#f5d000"/><stop offset="0.5" stop-color="#3a9b3a"/><stop offset="0.66" stop-color="#2f7ed8"/><stop offset="0.83" stop-color="#3b3bb0"/><stop offset="1" stop-color="#7a2fb5"/></linearGradient></defs><rect width="600" height="300" fill="#0f1722"/><rect x="0" y="0" width="600" height="300" fill="#0f1722"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#e8edf2">White light dispersed by a glass prism</text><rect x="40" y="138" width="150" height="10" fill="#f7f7f7"/><text x="60" y="130" font-size="11" fill="#cbd5e1">white light</text><polygon points="240,90 320,200 200,200" fill="#9fb6c9" fill-opacity="0.45" stroke="#cbd5e1" stroke-width="2"/><text x="262" y="220" font-size="11" text-anchor="middle" fill="#cbd5e1">glass prism</text><polygon points="290,150 560,70 560,250" fill="url(#spec23)" fill-opacity="0.9"/><g font-size="11" fill="#0f1722" font-weight="700"><text x="566" y="82">red (longest λ, bent least)</text><text x="566" y="118">orange</text><text x="566" y="146">yellow</text><text x="566" y="170">green</text><text x="566" y="196">blue</text><text x="566" y="222">indigo</text><text x="566" y="252">violet (shortest λ, bent most)</text></g></svg>',
      },
      caption: 'White light passing through a glass prism is separated (dispersed) into the visible spectrum, red bent least and violet bent most.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The image shows white light being separated into different colours. **Select** the term that best describes this process.\n\nA. Absorption\nB. Deflection\nC. Reflection\nD. Dispersion',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'D',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**Explain** why red light is at the top of the image in part (a). You should use scientific terminology in your answer.',
        marks: 3,
        ph: 'Red light has the longest wavelength (or lowest frequency) of the visible colours.\nIt is refracted the least by the glass prism.\nRed light travels fastest through the glass (lowest refractive index), so it is bent the least at the glass surface.',
        level: 'proficient',
      },
      {
        label: 'c',
        text: 'Another scientist called Herschel detected infrared waves beyond the visible spectrum. Unlike red light, infrared waves are not visible to the human eye. **State** one other difference between infrared waves and red light.',
        marks: 1,
        ph: 'Infrared waves have a longer wavelength than red light / infrared has a lower frequency / infrared is detectable as heat.',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'In air, all the colours of light in the spectrum travel at a speed of **3.00 × 10⁸ m s⁻¹**. **Calculate** the frequency of red light with a wavelength of **680 nm**. You should use scientific notation in your answer.',
        marks: 2,
        ph: 'f = v ÷ λ\n= (3.00 × 10⁸) ÷ (680 × 10⁻⁹)\n= ... × 10¹⁴ Hz',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 3 — Atomic Physics (9 marks) Criterion A
  // Context: Carbon-14 atom, radiation types, nuclear decay equations
  // Numbers/details kept (historical/scientific facts)
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
    stem: 'The diagram shows an atom of carbon-14, which has 6 protons and 8 neutrons.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><rect width="420" height="300" fill="#ffffff"/><text x="210" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Atom of carbon-14</text><ellipse cx="210" cy="160" rx="150" ry="92" fill="none" stroke="#94a3ad" stroke-width="1.2"/><ellipse cx="210" cy="160" rx="92" ry="56" fill="none" stroke="#94a3ad" stroke-width="1.2"/><g><circle cx="210" cy="160" r="34" fill="#fde2e2" stroke="#c0392b"/><g fill="#c0392b"><circle cx="200" cy="150" r="6"/><circle cx="219" cy="150" r="6"/><circle cx="210" cy="162" r="6"/><circle cx="200" cy="172" r="6"/><circle cx="219" cy="172" r="6"/><circle cx="210" cy="150" r="6"/></g><g fill="#2c6c86"><circle cx="195" cy="158" r="6"/><circle cx="225" cy="158" r="6"/><circle cx="205" cy="146" r="6"/><circle cx="215" cy="173" r="6"/><circle cx="225" cy="170" r="6"/><circle cx="194" cy="170" r="6"/><circle cx="232" cy="160" r="6"/><circle cx="188" cy="160" r="6"/></g></g><g fill="#1971c2"><circle cx="60" cy="160" r="6"/><circle cx="360" cy="160" r="6"/><circle cx="164" cy="108" r="6"/><circle cx="256" cy="212" r="6"/><circle cx="118" cy="160" r="6"/><circle cx="302" cy="160" r="6"/></g><text x="210" y="285" font-size="11" text-anchor="middle" fill="#475569">6 protons (red) + 8 neutrons (blue-grey) in the nucleus; 6 electrons (blue) orbit.</text></svg>',
      },
      caption: 'A carbon-14 atom: 6 protons and 8 neutrons in the nucleus, with 6 orbiting electrons.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the atomic number and mass number for this atom.',
        marks: 2,
        ph: 'Atomic number: ...\nMass number: ...',
        level: 'foundation',
      },
      {
        label: 'b',
        text: '**State** one similarity and one difference between a nucleus of carbon-12 and a nucleus of carbon-14.',
        marks: 2,
        ph: 'Similarity: both nuclei have the same number of protons / same positive charge\nDifference: carbon-14 has more neutrons (8) than carbon-12 (6) / carbon-14 has more nucleons / carbon-14 is radioactively unstable',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Gamma rays and X-rays are both types of electromagnetic radiation. The key below shows where each type is produced. **Classify** each type of radiation by dragging it to the correct location on the atom diagram.\n\n• Gamma ray — produced from the nucleus of an atom\n• X-ray — produced from inner orbit of electrons\n• Cosmic ray — produced outside the atom (drag to tray)\n• Ultrasound wave — not EM radiation (drag to tray)',
        marks: 2,
        artefact: {
          component: 'GenericSVG',
          data: {
            svg: '<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah3c" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#444"/></marker></defs><rect width="460" height="280" fill="#ffffff"/><ellipse cx="210" cy="150" rx="140" ry="86" fill="none" stroke="#94a3ad" stroke-width="1.2"/><ellipse cx="210" cy="150" rx="78" ry="48" fill="none" stroke="#94a3ad" stroke-width="1.2"/><circle cx="210" cy="150" r="26" fill="#fde2e2" stroke="#c0392b"/><text x="210" y="154" font-size="11" font-weight="700" text-anchor="middle" fill="#c0392b">nucleus</text><circle cx="288" cy="150" r="6" fill="#1971c2"/><circle cx="132" cy="150" r="6" fill="#1971c2"/><circle cx="350" cy="150" r="6" fill="#1971c2"/><line x1="210" y1="150" x2="120" y2="70" stroke="#9c36b5" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah3c)"/><text x="96" y="64" font-size="11" fill="#9c36b5" font-weight="700">from nucleus →</text><line x1="288" y1="150" x2="370" y2="80" stroke="#0b7285" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah3c)"/><text x="330" y="72" font-size="11" fill="#0b7285" font-weight="700">from inner electron orbit →</text><text x="210" y="262" font-size="11" text-anchor="middle" fill="#475569">Two drop-zones on the atom; a tray holds radiation types that fit neither.</text></svg>',
          },
          caption: 'Atom diagram with two drop-zones: one at the nucleus (gamma) and one at the inner electron orbit (X-ray).',
        },
        widget: 'variable_classify',
        widgetOptions: ['Gamma ray', 'X-ray', 'Cosmic ray', 'Ultrasound wave'],
        widgetItems: ['Produced from nucleus', 'Produced from inner electron orbit', 'Neither'],
        ph: 'Produced from nucleus: Gamma ray\nProduced from inner electron orbit: X-ray\nNeither: Cosmic ray, Ultrasound wave',
        level: 'proficient',
      },
      {
        label: 'd',
        text: '**Complete** the following two nuclear decay equations by filling in the missing values:\n\n²³⁸₉₂U → ²³⁴₉₀Th + ?₂α\n\n²³²₉₀Th → ?₉₁Pa + ⁰₋₁β',
        marks: 2,
        ph: 'Equation 1: α particle is ⁴₂He, so the alpha particle is ⁴₂α ✓\nEquation 2: ²³²₉₁Pa (mass number 232, atomic number 91)',
        level: 'proficient',
      },
      {
        label: 'e',
        text: '**Suggest** what is happening in the reaction shown below that results in the formation of a uranium-239 nucleus:\n\n²³⁸₉₂U + ¹₀n → ²³⁹₉₂U',
        marks: 1,
        ph: 'A neutron is absorbed by the nucleus of uranium-238 to form uranium-239.',
        level: 'developing',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 4 — Ideal Gas & Boyle's Law Investigation (13 marks) Criterion B/C
  // Context: Student adds masses to syringe plunger; temperature constant
  // Numbers changed: area 7.8×10⁻⁴ → 8.2×10⁻⁴ m²; mass 1.2 kg → 1.4 kg; atm pressure 100300 → 101300 Pa
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    crit: 'B',
    type: 'extended',
    topic: 'Ideal Gas & Boyle\'s Law',
    marks: 13,
    topicCanonical: 'States of Matter & Kinetic Theory',
    topicGroup: 'Thermal Physics',
    tags: { unit: 'thermal-physics', topics: ['pressure and volume', 'Boyle\'s law', 'gas laws', 'scientific investigation'], level: 'advanced' },
    stem: 'The pressure, volume and temperature of a gas are related. The ideal gas law describes the relationship between them.\n\nA student decides to investigate the effect of adding masses to the volume of air in a syringe. The student adds the masses slowly so that the temperature of the air in the syringe remains constant. The tip of the syringe is sealed so that the amount of air is constant. Masses are added and the plunger is pushed downwards, compressing the air in the syringe.',
    artefact: {
      component: 'GasLawSim',
      data: {
        title: 'Sealed syringe under load (constant temperature)',
        vessel: 'vertical sealed syringe',
        plungerArea: 0.00082,
        atmPressure: 101300,
        g: 9.81,
        massSlider_kg: [0, 0.5, 1.0, 1.4, 2.0],
        constantPV_kPa_cm3: 11000,
        pvUnit: 'kPa·cm³',
        coupling: 'Adding masses raises the pressure P = Patm + mg/A, which compresses the trapped air inversely (Boyle\'s law).',
      },
      caption: 'Add masses to the plunger to raise the pressure and watch the trapped air compress. Plunger area = 8.2 × 10⁻⁴ m², atmospheric pressure = 101 300 Pa.',
    },
    tasks: [
      {
        label: 'a',
        text: '**State** the research question that could be answered by this scientific investigation.',
        marks: 1,
        ph: 'How does the mass added to the plunger affect the volume of air in the syringe? (or: How does pressure affect the volume of a fixed amount of gas at constant temperature?)',
        level: 'developing',
      },
      {
        label: 'b',
        text: '**Identify** the variables for this investigation.\n\n| Variable | Independent | Dependent | Control |\n|----------|-------------|-----------|--------|\n| Amount of air in the syringe | | | |\n| Mass added to plunger | | | |\n| Temperature | | | |\n| Volume of air | | | |',
        marks: 2,
        widget: 'variable_classify',
        widgetOptions: ['Amount of air in the syringe', 'Mass added to plunger', 'Temperature', 'Volume of air'],
        widgetItems: ['Independent', 'Dependent', 'Control'],
        ph: 'Independent: Mass added to plunger\nDependent: Volume of air\nControl: Amount of air in syringe, Temperature',
        level: 'developing',
      },
      {
        label: 'c',
        text: '**Select** the correct response to complete the sentence:\n\nWhen masses are added to the plunger, the pressure will: [Select]',
        marks: 1,
        widget: 'radio_select',
        widgetOptions: ['increase', 'decrease', 'stay the same'],
        ph: 'increase',
        level: 'foundation',
      },
      {
        label: 'd',
        text: 'The plunger has an area of **8.2 × 10⁻⁴ m²**. Atmospheric pressure is **101 300 Pa**. **Calculate** the total pressure on the air in the syringe if the mass applied is **1.4 kg**. You should assume the value of **g = 9.81 N kg⁻¹**.',
        marks: 3,
        ph: 'Increase in pressure = F ÷ A = (mg) ÷ A = (1.4 × 9.81) ÷ (8.2 × 10⁻⁴)\n= 13.734 ÷ 8.2×10⁻⁴\n= 16748 Pa (or 1.67 × 10⁴ Pa)\nTotal pressure = 16748 + 101300 = 118048 Pa ≈ 1.18 × 10⁵ Pa',
        level: 'advanced',
      },
      {
        label: 'e',
        text: 'The student calculated the pressure for each of the masses used. They presented the processed data in the graphs below.\n\n**Use both graphs** above to **describe** the relationship between pressure and volume of a gas.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Volume vs pressure for the trapped air',
            xLabel: 'Pressure p',
            xUnit: 'kPa',
            yLabel: 'Volume V',
            yUnit: 'cm³',
            xMin: 0,
            xMax: 160,
            xStep: 20,
            yMin: 0,
            yMax: 160,
            yStep: 20,
            dataPoints: [
              { x: 100, y: 110 },
              { x: 110, y: 100 },
              { x: 118, y: 93 },
              { x: 130, y: 85 },
              { x: 147, y: 75 },
            ],
          },
          caption: 'As pressure increases the volume falls along a curve — an inverse (non-linear) relationship.',
        },
        ph: 'As the pressure increases, the volume decreases. The relationship is an inverse (non-linear) relationship — as seen in the curved line of the V vs P graph. The volume is inversely proportional to the pressure (Boyle\'s law).',
        level: 'proficient',
      },
      {
        label: 'f',
        text: 'Another student decided to multiply pressure by volume (pV) and presented this on the graph below.\n\nBoyle\'s law states that pV is constant for a fixed amount of gas at constant temperature. **Suggest** whether the graph supports Boyle\'s law. **Justify** your answer.',
        marks: 2,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'pV product vs pressure',
            xLabel: 'Pressure p',
            xUnit: 'kPa',
            yLabel: 'pV',
            yUnit: 'kPa·cm³',
            xMin: 0,
            xMax: 160,
            xStep: 20,
            yMin: 0,
            yMax: 14000,
            yStep: 2000,
            dataPoints: [
              { x: 100, y: 11000 },
              { x: 110, y: 11000 },
              { x: 118, y: 10974 },
              { x: 130, y: 11050 },
              { x: 147, y: 11025 },
            ],
          },
          caption: 'The pV product stays close to 11 000 kPa·cm³ across the pressure range — approximately constant.',
        },
        ph: 'The graph (does / does not) fully support Boyle\'s law.\nJustification: The pV values are approximately constant (close to horizontal line) across the range of pressures, but there is a slight slope / the value is not perfectly constant. Within experimental error, the data supports Boyle\'s law.',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Use the graph** in part (f) to **calculate** the volume of the gas when the pressure is **75 kPa**. You should include a unit in your answer.',
        marks: 2,
        ph: 'From the pV graph, read the approximate constant pV value (e.g. ≈ 11000 kPa·cm³).\nV = pV ÷ p = 11000 ÷ 75 = ... cm³\n(Accept answer in range 140–150 cm³)',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 5 — Balloon Temperature Investigation Design (17 marks) Criterion B
  // Context: Gas in balloon — temperature affects circumference
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
    stem: 'Another group of students decides to use balloons to investigate the relationship between the volume of a gas and its temperature.\n\nThey make the following prediction:\n\n*"If the temperature of a fixed amount of gas inside a balloon increases, the volume of the balloon will increase."*',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><linearGradient id="wb5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdeaf6"/><stop offset="1" stop-color="#86c5e0"/></linearGradient></defs><rect width="560" height="300" fill="#ffffff"/><text x="280" y="24" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Measuring how temperature changes a balloon\'s circumference</text><rect x="120" y="150" width="200" height="110" rx="6" fill="url(#wb5)" stroke="#3f7e98" stroke-width="2"/><rect x="120" y="150" width="200" height="14" fill="#bfe3f2" stroke="#3f7e98" stroke-width="1"/><text x="220" y="252" font-size="11" text-anchor="middle" fill="#2c5468">heated water bath</text><ellipse cx="220" cy="135" rx="40" ry="46" fill="#f3b6c2" stroke="#c0506a" stroke-width="2"/><path d="M214,180 q6,12 12,0 z" fill="#c0506a"/><path d="M170,118 a50,52 0 0 1 100,0" fill="none" stroke="#a83b54" stroke-width="1.5" stroke-dasharray="4 3"/><text x="296" y="104" font-size="11" fill="#a83b54">tape measure → circumference</text><line x1="400" y1="70" x2="400" y2="250" stroke="#5b6b78" stroke-width="3"/><rect x="392" y="70" width="16" height="120" rx="6" fill="#eef3f6" stroke="#5b6b78"/><rect x="392" y="150" width="16" height="40" rx="6" fill="#e8392b"/><circle cx="400" cy="196" r="11" fill="#e8392b"/><text x="416" y="120" font-size="11" fill="#475569">thermometer</text><text x="416" y="136" font-size="11" fill="#475569">(gas temperature)</text></svg>',
      },
      caption: 'Apparatus the students design: a balloon of fixed gas in a heated water bath, with a thermometer for temperature and a tape measure for circumference.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use kinetic theory to explain** the prediction.',
        marks: 3,
        ph: 'As temperature increases, the kinetic energy (and speed) of the gas particles increases.\nThe particles collide with the walls of the balloon more frequently and with greater force.\nThis increases the pressure on the balloon walls, causing the elastic balloon to expand outwards — so the volume increases.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'Measuring the volume of a balloon directly is difficult. The students plan to measure the circumference of the balloon instead of measuring its volume.\n\n**Design** an experiment that the students could use to carry out this investigation. They are provided with standard laboratory equipment, including an oven to change the temperature. In your plan, you must include:\n\n• a research question\n• the independent, dependent and one control variable\n• a list of the equipment they will need\n• a detailed method for collecting data\n• an explanation of how the students will collect sufficient data\n• details of how they will make sure that the method is safe',
        marks: 14,
        ph: 'Research question: How does temperature affect the circumference of a balloon containing a fixed amount of gas?\n\nIndependent variable: temperature of the gas inside the balloon (°C)\nDependent variable: circumference of the balloon (cm)\nControl variable: amount of gas in the balloon (same number of inflations / same initial volume)\n\nEquipment: balloon, string or tape measure, ruler/metre stick, oven, thermometer, ice bath, clamp stand, stopwatch\n\nMethod:\n1. Inflate the balloon to a fixed circumference at room temperature; measure and record the initial circumference using a tape measure.\n2. Place the balloon in a water bath set to a known temperature (e.g. 20°C). Wait 5 min for equilibrium. Measure circumference.\n3. Repeat at temperatures: 30, 40, 50, 60, 70°C by heating the water bath or using the oven.\n4. Record temperature and circumference for each trial.\n5. For safety: do not overheat the balloon; use tongs when handling hot water; do not exceed 80°C as balloon may burst.\n\nSufficient data: take at least 5 different temperature values; repeat each measurement 3 times and calculate the mean.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 6 — Balloon Rocket & Newton's Laws (17 marks) Criterion C
  // Context: Balloon rocket along string; circumference vs distance
  // Numbers changed: circumference values slightly adjusted
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    crit: 'C',
    type: 'extended',
    topic: 'Balloon Rocket & Newton\'s Laws',
    marks: 17,
    topicCanonical: "Newton's Laws & Momentum",
    topicGroup: 'Forces & Motion',
    tags: { unit: 'measurement-motion', topics: ['Newton\'s second law', 'Newton\'s third law', 'data processing', 'hypothesis evaluation'], level: 'advanced' },
    stem: 'When the air inside an inflated balloon is released, the balloon accelerates forward.',
    artefact: {
      component: 'GenericSVG',
      data: {
        svg: '<svg viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg" font-family="Arial, Helvetica, sans-serif"><defs><marker id="ah6r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#0b7285"/></marker></defs><rect width="600" height="240" fill="#ffffff"/><text x="300" y="26" font-size="14" font-weight="700" text-anchor="middle" fill="#1f2d3a">Balloon rocket threaded on a string</text><line x1="30" y1="80" x2="570" y2="80" stroke="#5b6b78" stroke-width="2"/><circle cx="30" cy="80" r="5" fill="#5b6b78"/><circle cx="570" cy="80" r="5" fill="#5b6b78"/><rect x="250" y="70" width="70" height="20" rx="4" fill="#bcd4e6" stroke="#5b6b78"/><text x="285" y="62" font-size="10" text-anchor="middle" fill="#475569">straw on string</text><path d="M250,100 q-40,-20 -90,0 q40,20 90,0 z" fill="#e8772e" stroke="#a8531a" stroke-width="2"/><path d="M160,100 q-22,4 -40,-6" stroke="#9bb9cf" stroke-width="2.5" fill="none"/><path d="M158,108 q-26,6 -46,-3" stroke="#9bb9cf" stroke-width="2.5" fill="none"/><text x="120" y="128" font-size="11" fill="#a8531a">escaping air (thrust backward)</text><line x1="330" y1="140" x2="470" y2="140" stroke="#0b7285" stroke-width="2.5" marker-end="url(#ah6r)"/><text x="400" y="132" font-size="12" fill="#0b7285" font-weight="700">balloon accelerates forward</text></svg>',
      },
      caption: 'An inflated balloon, taped to a straw threaded on a string, is released; escaping air drives it forward along the string.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Use Newton\'s laws** to **explain** the motion of the balloon.',
        marks: 3,
        ph: 'Newton\'s 2nd law: there is a net (unbalanced) force acting on the balloon. F = ma — the expelled air exerts a thrust force on the balloon, causing it to accelerate.\nNewton\'s 3rd law: the balloon pushes air backwards; the air pushes the balloon forwards with an equal and opposite reaction force. The expulsion of gas and the thrust on the balloon are an action-reaction pair.',
        level: 'proficient',
      },
      {
        label: 'b',
        text: 'A group of students decide to investigate the distance travelled by a balloon filled with different volumes of air. They use a drinking straw attached to the balloon and thread it along a string.\n\n**State** the research question that the students are investigating.',
        marks: 1,
        ph: 'How does the circumference (or volume) of air in the balloon affect the distance it travels along the string?',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'The students inflate a balloon until its diameter is **12.2 cm**. **Calculate** the circumference of this balloon. You should include a unit in your answer.',
        marks: 1,
        ph: 'Circumference = π × d = π × 12.2 = 38.3 cm\n(Accept answers in range 38.2–38.4 cm)',
        level: 'developing',
      },
      {
        label: 'd',
        text: 'The students recorded their raw data in their notebook as shown below. **Organise and present** the data from the experiment into a table, including the result from part (c).\n\nRaw data (unordered):\n- Circumference 35.8 cm → 1.07 m\n- Circumference 41.0 cm → 1.97 m\n- Circumference 50.3 cm → 3.10 m\n- Circumference 54.9 cm → 3.99 m\n- Circumference 58.2 cm → 5.06 m',
        marks: 4,
        ph: 'Table with headers: Circumference / cm | Distance travelled / m\nData in ascending order of circumference:\n35.8 | 1.07\n38.3 | 1.30 (from part c)\n41.0 | 1.97\n50.3 | 3.10\n54.9 | 3.99\n58.2 | 5.06\nUnits only in column headers; data to consistent decimal places.',
        level: 'proficient',
      },
      {
        label: 'e',
        text: 'Before their investigation, the students suggested the following hypothesis:\n\n*"If the circumference of the balloon increases, then the distance travelled will increase because the resultant or net force will be greater with an increased volume of air."*\n\nThe students plotted three different graphs of their data below. **Use the graphs** to **describe** the relationship between the circumference of the balloon and the distance travelled, and evaluate the validity of their hypothesis.',
        marks: 3,
        artefact: {
          component: 'LineGraph',
          data: {
            title: 'Distance travelled vs balloon circumference',
            xLabel: 'Circumference',
            xUnit: 'cm',
            yLabel: 'Distance travelled',
            yUnit: 'm',
            xMin: 30,
            xMax: 60,
            xStep: 5,
            yMin: 0,
            yMax: 6,
            yStep: 1,
            dataPoints: [
              { x: 35.8, y: 1.07 },
              { x: 38.3, y: 1.30 },
              { x: 41.0, y: 1.97 },
              { x: 50.3, y: 3.10 },
              { x: 54.9, y: 3.99 },
              { x: 58.2, y: 5.06 },
            ],
          },
          caption: 'Distance increases as circumference increases, but the curve steepens — the relationship is positive but not directly proportional (data fit best to circumference³).',
        },
        ph: 'The graphs show that as circumference increases, the distance travelled increases (positive relationship — hypothesis is partially valid on direction).\nHowever, the relationship is NOT directly proportional (Graph A) — the data fits better with circumference cubed (Graph C shows a straight line through origin), suggesting distance ∝ circumference³.\nThe hypothesis is therefore only partially valid: direction is correct but the "directly proportional" claim is not supported.',
        level: 'advanced',
      },
      {
        label: 'f',
        text: 'The students wanted to extend their investigation. **Suggest** variables that the students could use to extend this investigation. The dependent variable has been completed for you.\n\n• Independent variable: ...\n• Dependent variable: distance travelled\n• Control variable 1: ...\n• Control variable 2: ...',
        marks: 3,
        ph: 'Independent variable: temperature of the gas inside the balloon / type of gas / shape of the balloon\nControl variable 1: length of straw attached to balloon (affects drag/friction)\nControl variable 2: angle of the string / circumference of balloon (consistent starting volume)',
        level: 'advanced',
      },
      {
        label: 'g',
        text: '**Formulate** a hypothesis that your extension in part (f) would test.',
        marks: 2,
        ph: 'If [the independent variable you chose] increases, then the distance travelled will [increase/decrease] because [scientific reasoning linking IV to net force or energy].',
        level: 'proficient',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 7 — Waves & Mobile Phone Communication (18 marks) Criterion C/D
  // Context: Wave properties + radio waves + mobile phone location tracking
  // Numbers changed: wave period ~1.7s → 2.4s for fresh calculation
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
    stem: 'The frequency of any wave can be found from a graph of the wave position against time.',
    artefact: {
      component: 'WaveSim',
      data: {
        mode: 'wave',
        title: 'Displacement of the wave against time',
        period: 2.4,
        amplitude: 1.4,
        windowSeconds: 4.8,
      },
      caption: 'A transverse waveform plotted as displacement against time. One complete cycle takes T = 2.4 s.',
    },
    tasks: [
      {
        label: 'a',
        text: 'The student plotted this data on a graph. **Calculate** the frequency of the waveform shown below. Give your answer to two significant figures and include a unit.',
        marks: 3,
        artefact: {
          component: 'WaveSim',
          data: {
            mode: 'wave',
            title: 'Waveform: displacement vs time',
            period: 2.4,
            amplitude: 1.4,
            windowSeconds: 4.8,
          },
          caption: 'Read one complete cycle (period T = 2.4 s) from the time axis, then f = 1/T.',
        },
        ph: 'Period T = read from graph (one complete wave cycle) ≈ ... s\nFrequency f = 1/T = 1/... = ... Hz\nAnswer to 2 s.f. with unit: ... Hz',
        level: 'proficient',
      },
      {
        label: 'b',
        text: '**Select** the waveform with the same frequency as the waveform in part (a).',
        marks: 1,
        artefact: {
          component: 'WaveSim',
          data: {
            mode: 'match',
            title: 'Which waveform has the same frequency as part (a)?',
            windowSeconds: 4.8,
            target: { label: 'Waveform from part (a)', period_s: 2.4, amplitude: 1.4 },
            options: [
              { id: 'A', period_s: 1.2, amplitude: 1.4 },
              { id: 'B', period_s: 1.6, amplitude: 1.0 },
              { id: 'C', period_s: 2.4, amplitude: 0.9, note: 'Same period (2.4 s) ⇒ same frequency as part (a), even though the amplitude differs.' },
              { id: 'D', period_s: 4.8, amplitude: 1.4 },
            ],
            correct: 'C',
            concept: 'Frequency depends only on the period (f = 1/T), not on the amplitude. The matching waveform has the same period as part (a).',
          },
          caption: 'Compare each waveform with the target and pick the one with the same period (frequency).',
        },
        widget: 'radio_select',
        widgetOptions: ['A', 'B', 'C', 'D'],
        ph: 'C',
        level: 'developing',
      },
      {
        label: 'c',
        text: 'Pedro and Natasha are communicating using mobile phones. The phones send and receive information in the form of radio waves. Different frequencies are used to transmit this information.\n\nThe animation below shows a simplified view of the mobile phone network that is used. **Put the following statements in order** to outline the process taking place in the animation.',
        marks: 1,
        artefact: {
          component: 'NetworkGraph',
          data: {
            title: 'Mobile phone network — Pedro to Natasha',
            nodes: [
              { id: 'pedro', label: "Pedro's phone", color: '#0b7285', detail: '1. Pedro\'s voice → microphone → electrical signal → radio wave transmitted.' },
              { id: 'towerA', label: 'Tower A', color: '#1971c2', detail: '2. Tower A receives the radio wave from Pedro\'s phone.' },
              { id: 'towerB', label: 'Tower B', color: '#9c36b5', detail: '3. The signal travels Tower A → Tower B through wires / fibre-optic cables.' },
              { id: 'natasha', label: "Natasha's phone", color: '#e8590c', detail: '4. Tower B transmits a radio wave to Natasha\'s phone, which converts it back to sound.' },
            ],
            edges: [
              { from: 'pedro', to: 'towerA', label: 'radio wave' },
              { from: 'towerA', to: 'towerB', label: 'cable / fibre' },
              { from: 'towerB', to: 'natasha', label: 'radio wave' },
            ],
          },
          caption: 'Click each node to see its step in the signal path from Pedro to Natasha.',
        },
        ph: '1. Pedro\'s voice is converted into an electrical signal by the microphone in his mobile phone. The phone then converts that electrical signal into a radio wave.\n2. The radio wave signal is transmitted from the mobile phone to tower A.\n3. Tower A receives the signal, then sends the signal out through a connection using wires or fibre-optic cables to Tower B, where the signal is converted again.\n4. Natasha\'s phone receives the radio wave signal and converts it back into a sound wave that she can hear.',
        level: 'proficient',
      },
      {
        label: 'd',
        text: 'The use of radio waves enables high-speed communication, but the technology requires the location of the phone to be detectable. This has consequences for security and data protection.\n\nLocation data can be used in navigation apps and fitness trackers. Even applications not directly used in navigation can track the location of the phone and map the movements of the user.\n\nPeople in large gatherings can be tracked and this information can be used to identify where they live and other personal details.\n\n**Discuss and evaluate** the implications of mobile phone technology being used to track the locations and movements of individuals. In your answer, you should discuss:\n\n• the advantages and disadvantages of location-tracking technology for an individual\n• the economic benefits of location-tracking technology for a company\n• the positive and negative security implications of location-tracking technology for a country\n• an overall appraisal in which you evaluate the points discussed',
        marks: 13,
        ph: 'Advantages for individual: navigation/directions; fitness tracking; finding lost devices; emergency services can locate you; family safety apps.\nDisadvantages for individual: loss of privacy; personal data can be sold without consent; movements monitored without knowledge; risk of stalking or targeted crime.\n\nEconomic benefits for companies: targeted advertising using location data; better understanding of consumer behaviour; logistics and delivery optimisation; data sold as a commodity generating revenue.\n\nSecurity implications (positive): governments can track terrorists and criminals; crowd monitoring helps public safety; tracking can help in natural disasters to locate survivors.\nSecurity implications (negative): authoritarian governments can suppress protest movements; mass surveillance undermines democratic freedoms; data breaches expose sensitive movements of citizens.\n\nAppraisal/conclusion: Location tracking has genuine benefits for individuals and companies but poses significant risks to privacy and civil liberties. The key issue is consent and regulation — with appropriate laws, the benefits can be retained while protecting individuals from misuse.',
        level: 'advanced',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // QUESTION 8 — Controlling Scientific Information Online (8 marks) Criterion D
  // Context: Flat Earth conspiracy theories, internet misinformation
  // ─────────────────────────────────────────────────────────────
  {
    id: 8,
    crit: 'D',
    type: 'extended',
    topic: 'Controlling Scientific Information Online',
    marks: 8,
    topicCanonical: 'Solar System, Gravity & Space',
    topicGroup: 'Space & Astrophysics',
    tags: { unit: 'astrophysics', topics: ['science and society', 'misinformation', 'internet and science communication'], level: 'advanced' },
    stem: 'The ability of modern mobile phones to access the internet has influenced the way that people communicate. On the internet, people tend to communicate with other people that have the same ideas as they do, which can reinforce opinions that may not be logical or scientifically accurate.\n\nSome people think that this kind of communication has led to an increase in the number of people believing in conspiracy theories. One such idea is the flat-Earth theory.\n\nSome people have suggested that any scientific information that is shared through the internet should be checked for accuracy. Information that is incorrect or misleading should be removed.\n\n**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
    artefact: {
      component: 'NetworkGraph',
      data: {
        title: 'Controlling scientific information online — issues to weigh',
        center: { label: 'Should false scientific information online be removed?', color: '#334155', detail: 'Discuss and evaluate the benefits and limitations of controlling scientific information shared on the internet.' },
        nodes: [
          { id: 'benefit-harm', label: 'Reduces harm', color: '#2f9e44', detail: 'Benefit: removing false content limits dangerous misinformation (e.g. fake health advice, flat-Earth claims) and protects public trust in science.' },
          { id: 'benefit-trust', label: 'Protects reliable access', color: '#1971c2', detail: 'Benefit: people are more likely to find evidence-based information, supporting good decisions.' },
          { id: 'limit-censor', label: 'Risk of censorship', color: '#c2255c', detail: 'Limitation: who decides what is "correct"? Legitimate debate and changing consensus (e.g. plate tectonics once dismissed) could be suppressed.' },
          { id: 'limit-cost', label: 'Hard to enforce', color: '#e8590c', detail: 'Limitation: monitoring all platforms is expensive and could be abused by governments to hide inconvenient findings (e.g. climate data).' },
        ],
      },
      caption: 'A concept map of the competing benefits and limitations to evaluate in your answer. Click each node for detail.',
    },
    tasks: [
      {
        label: 'a',
        text: '**Discuss and evaluate** the benefits and limitations of controlling scientific information that is shared through the internet.',
        marks: 8,
        ph: 'Benefits of controlling:\n• Reduces spread of dangerous misinformation (e.g. anti-vaccine content, flat-Earth claims)\n• Protects public trust in scientific consensus\n• Prevents health harms caused by false medical advice\n• Ensures people have access to reliable, evidence-based information\n\nLimitations of controlling:\n• Who decides what counts as correct science? Scientific consensus changes over time (e.g. plate tectonics was once dismissed)\n• Risk of censorship — legitimate scientific debate could be suppressed\n• Difficult and expensive to implement at scale across all platforms\n• Could be used by governments to suppress inconvenient scientific findings (e.g. climate data)\n• Undermines freedom of speech and open scientific debate\n\nConclusion: There is a genuine case for removing clearly false and harmful content, but broad content control raises serious risks of censorship. A balanced approach — labelling disputed content with scientific consensus rather than removal — may better serve both accuracy and open debate.',
        level: 'advanced',
      },
    ],
  },

]
