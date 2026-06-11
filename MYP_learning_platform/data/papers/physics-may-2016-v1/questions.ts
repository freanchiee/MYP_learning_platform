import type { Question } from '@/lib/types'

const P = '/images/papers/physics-may-2016-v1/'

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
    figImages: [`${P}q1-table.png`],
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
    figImages: [`${P}q2-probe.png`],
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
    figImages: [`${P}q4-moon.png`],
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
    figImages: [`${P}q6a-circuits.png`],
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
    figImages: [`${P}q7-vi-graph.png`],
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
        figImages: [`${P}q11d-radiation-table.png`],
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
