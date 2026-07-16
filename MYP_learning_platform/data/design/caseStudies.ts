// MYP Design — Advanced Case Studies: an optional, ambitious tier alongside the
// core 3 exemplar projects (projects.ts). Students self-select into these.
//
// Unlike DesignProject (projects.ts), a CaseStudy carries no worked "exemplar"
// answers to copy — each criterion is a set of Socratic PROMPTS. Students write
// their own success criteria (B), their own build log (C), and test against
// their own spec (D). The interactive `artifacts` on each stage are what make
// that loop concrete (idea board, build log, testing table, wiring diagram, …).
//
// Reuses the canonical taxonomy from cycle.ts — no new concept vocabulary.

import type { CriterionKey } from './cycle'

export type CaseStudyTrack = 'Physical computing' | 'Digital design'

// Borrowed from the Raspberry Pi Foundation's Digital Making Curriculum skill
// ladder — used here purely to scope how ambitious a build should be, not as
// a literal project list.
export type DifficultyTier = 'Creator' | 'Builder' | 'Developer' | 'Maker'

export type ArtifactType =
  | 'idea-board' // Criterion B — forces N divergent concepts before a choice unlocks
  | 'build-log' // Criterion C — dated entries: what I did / skill used / change + why
  | 'testing-table' // Criterion D — columns pulled from the student's own B spec
  | 'wiring-diagram' // physical-computing track — annotated component/connection reference
  | 'weather-sim' // bespoke: live simulated sensor dashboard
  | 'todone-demo' // bespoke: scripted agent-execution log
  | 'spline-embed' // bespoke: read-only embed of a published 3D scene

export interface WiringItem {
  component: string // e.g. 'PN532 reader (SDA)'
  connectsTo: string // e.g. 'Raspberry Pi GPIO 2 (SDA1)'
  note: string
}

export interface CaseStudyStage {
  /** Socratic prompts — questions/instructions, never worked answers. */
  prompts: string[]
  /** A named technique/thinking-routine worth introducing at this stage. */
  technique?: { name: string; description: string }
  /** Interactive artifact(s) rendered under this criterion. */
  artifacts?: ArtifactType[]
  /** Reference wiring/connection list — only present when artifacts includes 'wiring-diagram'. */
  wiring?: WiringItem[]
}

export interface ExistingSolution {
  name: string
  note: string // what it does / why it's a useful real precedent for Criterion A
}

export interface CaseStudy {
  id: string
  title: string
  blurb: string
  track: CaseStudyTrack
  difficultyTier?: DifficultyTier
  hardwareNeeded?: string[]
  globalContext: string
  keyConcept: string
  relatedConcepts: string[]
  client: string
  situation: string
  challenge: string
  existingSolutions: ExistingSolution[]
  accent: { from: string; via: string; to: string }
  stages: Record<CriterionKey, CaseStudyStage>
}

export const ADVANCED_CASE_STUDIES: CaseStudy[] = [
  // ── PHYSICAL COMPUTING ──────────────────────────────────────────────────
  {
    id: 'nfc-access-interaction',
    title: 'NFC Access & Interaction System',
    blurb: 'Tap-to-unlock, tap-to-log, tap-to-personalise — a real NFC-triggered system.',
    track: 'Physical computing',
    difficultyTier: 'Developer',
    hardwareNeeded: [
      'Raspberry Pi (any model with GPIO)',
      'PN532 NFC/RFID reader module',
      'NFC tags or cards',
      'Breadboard + jumper wires',
      'Optional: relay module + electric strike/servo for a physical lock',
      'Optional: buzzer/LED for feedback',
    ],
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Systems',
    relatedConcepts: ['Innovation', 'Function', 'Adaptation'],
    client: 'Your school library, makerspace, or a community club that currently uses a manual sign-in sheet or a shared physical key.',
    situation:
      'Manual sign-in sheets get forgotten or falsified, and shared physical keys get lost, copied, or simply handed to the wrong person. Somewhere in your own school or community there is a real access or attendance process still running on paper or a single spare key.',
    challenge:
      'Design and build a working NFC-triggered system that recognises a tapped tag or card and does something useful in response — unlocks, logs attendance, or personalises an experience — for a client you choose.',
    existingSolutions: [
      {
        name: 'Starling Crossing (Umbrellium)',
        note: 'A camera-and-sensor crossing that distinguishes pedestrians, cyclists and vehicles and only lights up when needed — a precedent for a system that reacts intelligently rather than just switching on/off.',
      },
      {
        name: 'Contactless transit cards (Oyster, etc.)',
        note: 'Tap-based NFC identification at scale — the same reader technology you’ll use, applied to access and logging.',
      },
      {
        name: 'Hotel key cards / office badge readers',
        note: 'An everyday tap-to-unlock precedent, and a good source for interviewing real users about what "feels safe and fast" actually means.',
      },
    ],
    accent: { from: '#0a1f2e', via: '#12475c', to: '#1fb0a3' },
    stages: {
      A: {
        prompts: [
          'Who is your client, and what do they currently do instead of tapping a tag — a key, a sign-in sheet, a password? Time or observe the current process: how long does it take, and where does it go wrong?',
          'Interview at least two real potential users (not just your teacher) — what do they want, and just as importantly, what do they NOT want (surveillance worries, forgotten cards, cost)?',
          'Analyse two real existing tap-based systems (see the precedents above, or find your own) — what does each do well, and where does it fail?',
          'Push your design brief up the command-term ladder: state the problem, then outline it, then explain it, then justify why an NFC-based system specifically — not just any electronic lock — is the right solution.',
        ],
        technique: {
          name: 'Command-term ladder (1–8)',
          description: 'Practise the same sentence through states → outlines → explains → justifies before writing your final brief — most students stop at "explains".',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. For example: a recognised tag triggers a response within __ seconds; an unregistered tag is rejected __% of the time; the reader survives __ taps without an error.',
          'Generate at least three genuinely different ideas for WHAT happens when a valid tag is tapped — not three versions of the same idea. Use "options explosion" (list the obvious responses, then push for one nobody else in your class will have thought of).',
          'Sketch the wiring: PN532 reader → Raspberry Pi GPIO/SPI pins → your chosen output (relay, servo, LED, buzzer). Annotate what each pin does.',
          'Justify your final choice against your OWN spec from the first prompt — not against whatever sounds coolest.',
        ],
        artifacts: ['idea-board', 'wiring-diagram'],
        wiring: [
          { component: 'PN532 reader — VCC', connectsTo: 'Raspberry Pi 3.3V (pin 1)', note: 'Never wire a PN532 to 5V — most breakout boards are 3.3V logic only.' },
          { component: 'PN532 reader — GND', connectsTo: 'Raspberry Pi GND (pin 6)', note: 'Shared ground is required for any reading to work.' },
          { component: 'PN532 reader — SDA', connectsTo: 'Raspberry Pi GPIO 2 / SDA1 (pin 3)', note: 'I²C mode — simplest wiring; enable I²C in raspi-config first.' },
          { component: 'PN532 reader — SCL', connectsTo: 'Raspberry Pi GPIO 3 / SCL1 (pin 5)', note: 'I²C clock line.' },
          { component: 'Output device (relay / servo / LED)', connectsTo: 'A free GPIO pin, e.g. GPIO 17 (pin 11)', note: 'Switch this in software once a valid tag is read — never power a lock/relay coil directly from a GPIO pin.' },
        ],
      },
      C: {
        prompts: [
          'Build a logical plan/task list before you touch the breadboard — order matters (e.g. test the reader alone before wiring the output).',
          'Log each build session: date, what you did, which skill you used (soldering, Python, GPIO wiring, laser-cut enclosure), and any problems hit.',
          'When something doesn’t work as planned — and something will — log the change AND the reason for it. That justification is worth real marks, not just the fix.',
          'Demonstrate a specific technical skill: reading a datasheet pinout, writing a Python script against an NFC library, soldering header pins, or 3D-printing/laser-cutting a housing.',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against the success criteria YOU wrote in Criterion B — not a vague "does it work?". Record what you measured, the target you set, what you actually got, and pass/fail.',
          'Run an authentic test: have your real client, or a real potential user, use the system — not just yourself.',
          'Critically evaluate: where did it fall short of your OWN spec, and why?',
          'Explain the impact on your specific client — what changes for them now versus their old manual process?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },
  {
    id: 'weather-station-datalogger',
    title: 'Weather Station & Data Logger',
    blurb: 'A real sensor rig that logs your own microclimate — because the weather app doesn\'t know your garden.',
    track: 'Physical computing',
    difficultyTier: 'Builder',
    hardwareNeeded: ['Raspberry Pi or microcontroller (e.g. Pi Pico, Arduino)', 'DHT22 or BME280 temperature/humidity sensor', 'Optional: BMP280/BME280 barometric pressure sensor', 'Optional: tipping-bucket rain gauge or cup anemometer', 'Breadboard + jumper wires', '10kΩ resistor (pull-up for DHT22 data line)', 'Weatherproof housing (e.g. a vented enclosure or modified food container) if sensors will sit outdoors', 'MicroSD card or cloud logging destination for stored readings'],
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Systems',
    relatedConcepts: ['Function', 'Resources', 'Adaptation'],
    client: 'The coordinator of your school\'s garden, allotment, or greenhouse — someone who makes real decisions (when to cover seedlings, when to water, when to open vents) based on conditions that a city-wide forecast simply doesn\'t capture.',
    situation: 'Weather apps report conditions for an entire city or region, updated at best every hour, from a station that might be miles away at the airport. Your garden coordinator needs to know what\'s actually happening at plant height, in the actual bed or greenhouse — and they need a history of it. Right now, when a coordinator asks "was it cold enough last Tuesday night to damage the seedlings?" or "is the greenhouse actually more humid than outside?", there is no record to check — only a memory, or nothing at all.',
    challenge: 'Design and build a working weather station that logs at least two real environmental variables over time at your chosen site, and that can answer a genuine, specific question your client actually has — not just display a number on a screen.',
    existingSolutions: [
      { name: 'Netatmo Smart Weather Station', note: 'A polished consumer product with app-based history graphs — a strong precedent for what good data presentation looks like, but costly, and its sensors are still a single fixed point, not necessarily where your client needs one.' },
      { name: 'A generic weather app (e.g. the phone\'s built-in forecast)', note: 'City-wide and forecast-driven rather than site-specific or historical — useful as the "what my client currently has instead" baseline you are trying to improve on.' },
      { name: 'A school\'s existing manual max-min thermometer or rain gauge', note: 'A real, primitive precedent likely already sitting in the garden or storeroom — accurate at the moment someone reads it, but unlogged, easily forgotten, and impossible to query later.' },
    ],
    accent: { from: '#0d1b2a', via: '#3a6a8a', to: '#a8d8e8' },
    stages: {
      A: {
        prompts: [
          'Who is your client, and what specific decision do they currently make using guesswork or a generic forecast — covering seedlings, watering, opening a vent, timing a harvest? Ask them directly.',
          'What does your client currently use instead of a logged station — a phone app, a wall thermometer, nothing at all? What can it NOT tell them that they wish it could?',
          'Analyse two of the existing solutions above (or find your own) — what does each get right, and where does each fail your client specifically?',
          'Visit the actual site (garden bed, greenhouse, allotment) and note where a sensor would need to sit. Would it face direct sun for part of the day? Is it sheltered from rain? These physical details will matter later.',
          'Push your brief up the command-term ladder: state what the client needs, then outline it, then explain why generic weather data fails them, then justify why a logged, site-specific station is the right response.',
        ],
        technique: { name: 'Command-term ladder (1–8)', description: 'Run your client\'s problem through states → outlines → explains → justifies before locking in your brief — it forces you past the first shallow description.' },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. For example: temperature logged within ±__°C accuracy every __ minutes; humidity readings stored for at least __ days; the station survives __ hours outdoors without failing; data is retrievable within __ seconds of asking.',
          'Generate at least three genuinely different ideas for WHAT your station actually measures and reports beyond raw temperature — not three versions of the same dashboard. Use "options explosion": list the obvious variables (temperature, humidity), then push for one your client hasn\'t thought to ask for (e.g. a frost-risk alert, a soil-adjacent microclimate reading, a dawn/dusk comparison).',
          'Sketch the wiring: your DHT22 (or BME280) data pin into a GPIO pin, VCC and GND, and — critically — where the pull-up resistor sits on the data line and why it\'s needed. Annotate each connection.',
          'Where exactly will the sensor physically sit, and what could distort its reading there? A sensor in direct sunlight will read several degrees too high; one too close to a heat-radiating wall or a watering can will be misleading. Design the housing/placement to avoid this, not just the circuit.',
          'Justify your final design choice against your OWN spec from the first prompt — not against whichever idea looks most impressive.',
        ],
        artifacts: ['idea-board', 'wiring-diagram'],
        wiring: [
          { component: 'DHT22 — VCC (pin 1)', connectsTo: 'Raspberry Pi 3.3V or 5V rail (check your specific breakout board\'s rating)', note: 'Most bare DHT22 modules tolerate 3.3–5.5V — confirm on the datasheet before powering it.' },
          { component: 'DHT22 — Data (pin 2)', connectsTo: 'A GPIO pin, e.g. GPIO 4, WITH a 10kΩ pull-up resistor between Data and VCC', note: 'The DHT22 needs this pull-up to hold the data line high between readings — without it, readings are unreliable or fail entirely.' },
          { component: 'DHT22 — GND (pin 4)', connectsTo: 'Raspberry Pi GND', note: 'Shared ground is required for the data line to be read correctly.' },
          { component: 'Optional: BME280 pressure/humidity sensor — SDA/SCL', connectsTo: 'Raspberry Pi GPIO 2 (SDA1) / GPIO 3 (SCL1)', note: 'I²C mode — if you add a second sensor, this keeps wiring simple and lets both devices share the same bus (different addresses).' },
          { component: 'Enclosure vent/gap', connectsTo: 'Positioned away from direct sun and any heat source', note: 'Not an electrical connection, but get this wrong and every reading downstream is wrong too.' },
        ],
      },
      C: {
        prompts: [
          'Build a logical task order before touching hardware — e.g. get one sensor reading correctly on a breadboard indoors before you seal anything into a weatherproof housing outdoors.',
          'Use the simulated dashboard below to prototype your data display before your real sensors arrive — what would you actually want to see at a glance: current readings, a trend line, an alert threshold? Sketch or configure it, then justify your choices.',
          'Log each build session: date, what you did, which skill you used (breadboarding, Python/logging code, sealing an enclosure, mounting outdoors), and any problems hit.',
          'When a reading looks wrong or the sensor fails outdoors — and it will, at some point — log the change AND your reasoning for the fix. That justification is worth real marks, not just the patch.',
          'Demonstrate a specific technical skill: writing the logging script, reading the DHT22/BME280 datasheet correctly, weatherproofing the housing, or setting up scheduled/automatic data capture.',
        ],
        artifacts: ['build-log', 'weather-sim'],
      },
      D: {
        prompts: [
          'Test against the success criteria YOU wrote in Criterion B — not a vague "does it log stuff?". Record what you measured, your target, what you actually got, and pass/fail for each.',
          'Run the station for real, outdoors, at the actual site, for long enough to answer your client\'s original question (e.g. "was it too cold for seedlings last Tuesday night?"). Can you now actually answer it, with data?',
          'Have your real client look at the logged data — does it tell them something the old method (app, manual thermometer, guesswork) couldn\'t?',
          'Critically evaluate: where did readings drift, fail, or mislead (sun exposure, power loss, sensor placement) — and why, against your OWN spec?',
          'Explain the impact for your client specifically — what decision can they now make with logged data that they couldn\'t make before?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'raspberry-pi-open-build',
    title: 'Raspberry Pi: Solve Your Own Problem',
    blurb: 'No fixed brief. Pick a real annoyance in your own life, size your ambition to a tier, and build it.',
    track: 'Physical computing',
    difficultyTier: 'Builder',
    hardwareNeeded: [
      'Raspberry Pi (any model with GPIO)',
      'Breadboard + jumper wires',
      'Whatever input/output components your chosen idea needs (sensor, motor, display, buzzer, camera, etc. — you decide)',
      'A housing/enclosure material of your choice (cardboard, 3D print, laser-cut acrylic, repurposed container)',
    ],
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Development',
    relatedConcepts: ['Innovation', 'Invention', 'Resources'],
    client: 'A real person with a real, recurring annoyance — a family member, a housemate, a neighbour, a teacher, a club you belong to, or you yourself. Not a hypothetical "user".',
    situation: 'Search "cool Raspberry Pi projects" and you get two piles: things so trivial they barely justify the hardware (blink an LED, print "hello world"), and things so copy-pasted from a tutorial that the builder never had to think. Neither pile demonstrates design skill. The Raspberry Pi Foundation\'s own Digital Making Curriculum solves this with a skill ladder instead of a single fixed difficulty: Creator projects read a sensor and control an output (e.g. a "Whoopi cushion" that detects pressure and plays a sound); Builder projects combine multiple inputs and outputs to solve a small problem (e.g. a GPIO music box); Developer projects process data over time to monitor or react to an environment (e.g. a camera-based "parent detector"); Maker projects are automated systems that solve a genuine real-world problem, often monitorable over the internet (e.g. an automatic pet feeder, or a system that keeps fish or plants alive unattended). The real design skill is not "build the hardest thing" — it is picking a genuine problem, then honestly sizing an ambitious-but-achievable build to it, and being able to justify why that tier — not a harder or easier one — was the right call.',
    challenge: 'Find a real, recurring problem in your own life, home, or community. Choose a tier on the Creator → Builder → Developer → Maker ladder that matches the problem\'s real difficulty and your own realistic build capacity. Design and build a working Raspberry-Pi-powered solution at that tier, and be ready to justify — with evidence, not just a claim — why that tier was the right ambition level for this problem, not a harder or easier one.',
    existingSolutions: [
      { name: 'Whoopi cushion (Raspberry Pi Foundation, Creator tier)', note: 'Reads a single pressure input and triggers a single sound output. Deliberately simple — a Creator-tier project demonstrates the core input-process-output loop and nothing more.' },
      { name: 'GPIO Music box (Raspberry Pi Foundation, Builder tier)', note: 'Combines several physical inputs (buttons/switches) with sound output to make a genuinely playable instrument. Builder tier: multiple inputs and outputs working together to solve a slightly bigger problem than a single sensor-to-output link.' },
      { name: 'Parent detector (Raspberry Pi Foundation, Developer tier)', note: 'Uses a Camera Module and continuous data processing to monitor an environment and react to a change over time (someone entering a room). Developer tier: the system has to interpret data, not just relay it.' },
    ],
    accent: { from: '#2b0812', via: '#7a1338', to: '#e8527a' },
    stages: {
      A: {
        prompts: [
          'What is the actual recurring annoyance, and whose annoyance is it? Name the real person, not "users" — describe an actual recent moment where the problem happened to them.',
          'How does this person currently deal with it (or not deal with it) without your device? Watch, ask, or recall the current workaround in specific detail.',
          'Using the Creator → Builder → Developer → Maker ladder, which tier does this problem genuinely call for? Could it honestly be solved at a lower tier than you\'re tempted to build? Could a higher tier serve it much better?',
          'Look at the Whoopi cushion, GPIO Music box, and Parent detector. For each, name what specifically makes it that tier and not another — is it the number of inputs, the need to process data over time, or something else?',
          'Push your one-sentence problem statement up the command-term ladder: state it, then outline it, then explain it, then justify why it is worth a Raspberry Pi rather than a simpler fix (a note on the fridge, an existing app, a kitchen timer).',
        ],
        technique: {
          name: 'The Creator → Builder → Developer → Maker ladder',
          description: 'A four-rung skill ladder for physical computing: Creator (single input, single output), Builder (multiple inputs/outputs combined to solve a small problem), Developer (process data over time to monitor/react to an environment), Maker (an automated system solving a genuine real-world problem, possibly networked). Place your own idea on this ladder honestly before you design anything — the tier is your success criterion for ambition, separate from your Criterion B success criteria for function.',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. Include at least one criterion that tests whether your build actually matches the tier you chose in Criterion A.',
          'Options explosion: list at least five obvious ideas that solve this problem (the ones anyone would think of in thirty seconds). Then force yourself to generate one option nobody else in your class would arrive at — what constraint, combination, or inversion gets you there?',
          'For your three strongest options, place each one on the Creator → Builder → Developer → Maker ladder. Do any of them not match the tier you committed to in Criterion A? Why is that a problem or not?',
          'Sketch how your chosen idea will actually sense, decide, and act — what goes in, what the Pi has to figure out, what comes out. You do not need exact pin numbers yet, but you do need the logic.',
          'Justify your final choice against your OWN spec from prompt 1, not against how impressive it sounds.',
        ],
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Build a logical task list before you touch any hardware. Order it so you can test the riskiest, least-certain part first.',
          'Log every build session: what you attempted, what state you left it in, and what you\'ll tackle next time.',
          'When something doesn\'t work as planned, log the change AND the reasoning behind it — a rewired input, a rewritten function, a scaled-back feature.',
          'Demonstrate at least one specific technical skill clearly in your log (a working code snippet, a wiring photo, a screen recording) — not just a description of it.',
          'If your build is drifting toward a different tier than the one you chose in Criterion A, log that drift honestly — did the problem turn out to need more, or less, than you first thought?',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against the success criteria YOU wrote in Criterion B, including the one about matching your chosen tier. Did you actually hit that tier, undershoot it, or overshoot it?',
          'Run an authentic test with the real person named in Criterion A, on their real problem, not a simulated one.',
          'Critically evaluate: where did the build fall short, and specifically why — a hardware limitation, a design decision, a time constraint?',
          'Now that it is built and tested, was the tier you chose in Criterion A actually the right ambition level for this problem? Argue both sides before you settle on an answer.',
          'Explain the real impact on your specific client — what changes for them now, and what still doesn\'t?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'iot-connected-device',
    title: "A Connected (IoT) Device for Something You Can't Watch Yourself",
    blurb: 'Sense something remotely, send the reading over WiFi, and put it in front of a client who genuinely cannot check in person.',
    track: 'Physical computing',
    difficultyTier: 'Developer',
    hardwareNeeded: [
      'ESP8266 (NodeMCU) or ESP32 microcontroller — WiFi-capable',
      'A sensor or actuator matched to your problem (e.g. capacitive soil moisture probe, waterproof DS18B20 temperature probe, ultrasonic water-level sensor, or reed switch for door/lid state)',
      'A free online dashboard service (e.g. Adafruit IO, ThingSpeak, or a simple self-hosted webpage + database)',
      'Breadboard, jumper wires, and a stable USB power source',
    ],
    globalContext: 'Globalization and sustainability',
    keyConcept: 'Systems',
    relatedConcepts: ['Innovation', 'Resources', 'Adaptation'],
    client: "The volunteer coordinator of your school's community garden allotment",
    situation:
      "Real IoT products already prove the pattern: sense something, send it somewhere, act on it remotely. The Kohler Numi toilet uses onboard sensors and an Amazon Alexa integration so a household object reports its own status and takes voice commands. Starling Crossing (Umbrellium) uses cameras and sensors embedded in a road surface to detect who and what is present, and only lights up the crossing when it's actually needed — sensing feeding a real-time decision, not just a screen. Consumer devices like the Xiaomi Flower Care sensor do the same for houseplants: push a probe into soil, and moisture/light data appears in an app with no one needing to check the plant by hand. Your client — the coordinator of a shared allotment or school garden plot — can only visit two or three times a week. Plants have died in the gap between visits because nobody knew the water butt ran dry or the raised bed dried out over a hot weekend.",
    challenge:
      "Design and build a working IoT device that senses a real physical condition in the garden (soil moisture, water butt level, or greenhouse temperature) and pushes that reading to an online dashboard your client can check from their phone, without ever having to visit in person to find out.",
    existingSolutions: [
      { name: 'Kohler Numi (smart toilet)', note: 'Onboard sensors and Amazon Alexa integration let a physical object report status and respond to voice commands — proof that everyday objects can be networked, not just screens and phones.' },
      { name: 'Starling Crossing (Umbrellium)', note: 'A camera-and-sensor road crossing that distinguishes pedestrians, cyclists and vehicles and only activates when genuinely needed — sensing that drives an automatic, real-time decision.' },
      { name: 'Xiaomi Flower Care sensor', note: 'A cheap consumer soil probe that reports moisture, light and fertility to a phone app via Bluetooth — the closest mainstream precedent to this exact problem, but short-range only, not WiFi.' },
    ],
    accent: { from: '#041c2c', via: '#0e5c7a', to: '#4fd6e8' },
    stages: {
      A: {
        prompts: [
          "Who is your client, and what do they currently do to check on this condition — how often do they visit, and what has already gone wrong in the gap between visits?",
          "Interview your client directly: which single reading matters most to them, and what value would count as an emergency versus just background information?",
          "Analyse two of the existing solutions above — what does each one sense, what triggers its response, and where would it be overkill (or underpowered) for a garden bed?",
          "Draw your system as a diagram: what physical quantity is sensed, what happens to that data next, and where does a human actually see it?",
          "Push your design brief up the command-term ladder: state, outline, explain, then justify what you are building and why.",
        ],
        technique: {
          name: 'Systems mapping (sense → send → show)',
          description: 'Sketch the three-stage pipeline of your IoT system — the sensor, the network step, and the display/alert — before you design any single part of it.',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you.',
          'List the obvious sensor-plus-notification combinations first (e.g. moisture sensor feeding an email alert), then push yourself for one option nobody else in your class would think of.',
          "Sketch your wiring diagram and annotate it: which pins carry power, ground, and data, and what voltage does each part actually need?",
          "Decide whether your client needs an instant push alert or just a dashboard they check when it suits them — justify the choice against your own success criteria, not convenience.",
          'Justify your final design choice against your OWN spec, referencing at least one existing solution you analysed in Criterion A.',
        ],
        artifacts: ['idea-board', 'wiring-diagram'],
        wiring: [
          { component: 'Capacitive soil moisture sensor — VCC', connectsTo: 'NodeMCU ESP8266 3V3 pin', note: 'Capacitive sensors resist the corrosion that kills cheap resistive probes left in wet soil for weeks — worth the small extra cost.' },
          { component: 'Capacitive soil moisture sensor — AOUT', connectsTo: 'NodeMCU ESP8266 A0 (analog input)', note: "The ESP8266 has only one analog pin and a 0–1V range — check your specific sensor board's onboard divider matches this before wiring it in." },
          { component: 'NodeMCU ESP8266 — GND', connectsTo: 'Sensor GND and breadboard ground rail', note: 'A shared, common ground is essential — without it, analog readings drift or read as pure noise.' },
          { component: 'Status LED — anode (via 220Ω resistor)', connectsTo: 'NodeMCU ESP8266 D4', note: 'A local LED that lights on a successful WiFi upload lets you debug connectivity without opening a laptop in the garden.' },
        ],
      },
      C: {
        prompts: [
          "Before touching the breadboard, write a build plan with milestones in order: sensor reads a sensible value, device connects to WiFi, a single reading reaches your dashboard, readings repeat automatically.",
          'Keep two separate threads in your build log — hardware sessions (wiring, soldering, sensor calibration) and "cloud"/dashboard sessions (account setup, API keys, feed configuration) — since they use genuinely different skills.',
          'Set up your chosen dashboard service and get one manual test reading to appear on it before you write any code that automates the process.',
          "When something doesn't work — a failed WiFi connection, a flat-lined sensor reading, an API rejecting your request — log the exact error message and what you changed, not just \"fixed it\".",
          'Demonstrate a specific technical skill with evidence: calibrating a sensor threshold, writing to a REST API, or managing power so the device survives being left outside.',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against YOUR OWN Criterion B numbers: does the reading match reality, and does it reach the dashboard within the time you specified?',
          'Run an authentic test: leave the device running unattended for at least 48 hours and have your actual client check the dashboard without any help from you.',
          'Critically evaluate where it fell short — missed WiFi drops, false readings, delayed updates, battery life — and explain why each happened.',
          'Explain the real impact on your client: what can they now do, or stop worrying about, that they could not before?',
          'Compare your solution honestly against the existing solutions you researched in Criterion A — is yours better, worse, or just different, and for whom?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'ultrasonic-mist-machine',
    title: 'Automated Ultrasonic Misting System',
    blurb: 'Build a humidity-triggered ultrasonic misting rig that keeps a vivarium in its safe range — without anyone remembering to pick up a spray bottle.',
    track: 'Physical computing',
    difficultyTier: 'Developer',
    hardwareNeeded: [
      'Raspberry Pi or Arduino-compatible microcontroller',
      'Ultrasonic mist maker module (piezo atomizer disc + driver board, 12V or 24V DC input — check your specific unit\'s datasheet)',
      'Relay module (to switch the mist maker driver board on/off from a GPIO signal)',
      'DHT22 (or capacitive soil-moisture sensor, depending on build)',
      'Small food-safe water reservoir',
      'DC power adapter matching your mist maker\'s rated voltage (kept physically separate from the reservoir)',
      'Splash-safe enclosure materials (e.g., acrylic sheet, silicone sealant, cable glands)',
    ],
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Systems',
    relatedConcepts: ['Function', 'Adaptation', 'Resources'],
    client: 'A dart-frog or crested-gecko keeper who currently hand-mists their vivarium with a spray bottle and wants it to hold a stable humidity range automatically.',
    situation: 'Many terrarium and vivarium animals need humidity held within a fairly narrow band — too dry and amphibians can\'t breathe properly through their skin or geckos struggle to shed; too wet for too long and mould or bacterial growth sets in. Hand-misting with a spray bottle depends entirely on someone remembering, and it produces a spike-and-crash humidity curve rather than a steady one, especially overnight or across a weekend away.',
    challenge: 'Design and build a working automated misting system that reads real humidity data from inside the enclosure and triggers an ultrasonic mist maker only when needed — built and wired so that the water reservoir and any mains-connected power stay completely isolated from each other.',
    existingSolutions: [
      { name: 'MistKing Reptile Misting System', note: 'Commercial timer-and-pump misting system widely used by reptile keepers — but most base models fire on a fixed timer, not on measured humidity, so it still over- or under-mists in changing weather.' },
      { name: 'Exo Terra Monsoon RS400', note: 'A more advanced commercial system that can pair with a separate hygrometer/controller — shows that humidity-triggered (rather than timer-only) control is the feature keepers actually want, but it is expensive and closed-source.' },
      { name: 'Basic ultrasonic room humidifier with built-in hygrometer cutoff', note: 'Cheap consumer humidifiers already do simple threshold switching (on below X% RH, off above Y%) — a useful, low-tech precedent for the control logic, though not built for a sealed animal enclosure.' },
    ],
    accent: { from: '#0d2b26', via: '#146356', to: '#5fe0c7' },
    stages: {
      A: {
        prompts: [
          'What species (or plants, if this is a propagator) is this actually for, and what is its real published humidity range? Find this from a credible husbandry or horticultural source — do not guess.',
          'Interview your client: how do they currently mist, how often do they forget, and what has gone wrong before (too dry, mould, a dead plant or stressed animal)?',
          'Analyse two of the existing solutions above — what does each get right, and where does a timer-only or overly expensive system fail your specific client?',
          'Safety check: before you design anything, sketch where the water reservoir will physically sit relative to every piece of electronics. Which parts absolutely cannot get wet, and how will you guarantee that?',
          'Push your design brief up the command-term ladder: state, outline, explain, then justify what your system must do and why.',
        ],
        technique: { name: 'Species/plant data sheet', description: 'Before setting any threshold numbers, look up the real minimum/maximum humidity tolerance for your specific organism from a credible source and write it down — your whole system is calibrated against this figure.' },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. What humidity range (in % RH) must the enclosure stay within, and how quickly must it respond to a drop?',
          'Generate at least three genuinely different control approaches (not just "sensor triggers relay triggers mister") using "options explosion" — then push yourself for a fourth idea nobody else in your class would think of.',
          'Sketch the full wiring, including the relay isolating the mist maker\'s power line. Annotate what each pin and each wire actually does.',
          'Justify your final design choice against your OWN spec from prompt 1 — why does it meet your numbers better than your other options?',
        ],
        artifacts: ['idea-board', 'wiring-diagram'],
        wiring: [
          { component: 'DHT22 — DATA pin', connectsTo: 'Microcontroller GPIO (digital input)', note: 'Needs a ~10kΩ pull-up resistor between DATA and VCC if your board doesn\'t already have one built in.' },
          { component: 'DHT22 — VCC / GND', connectsTo: 'Microcontroller 3.3V/5V and GND (check your sensor\'s rated voltage)', note: 'Low-voltage logic side only — this sensor sits inside the enclosure, near but not in the water.' },
          { component: 'Relay module — IN pin', connectsTo: 'Microcontroller GPIO (digital output)', note: 'This is the ONLY connection between your logic circuit and the switched power side — it triggers the relay, it does not carry the mist maker\'s power.' },
          { component: 'Relay module — COM and NO terminals', connectsTo: 'In series with the mist maker driver board\'s DC+ supply line', note: 'The relay switches the LOW-VOLTAGE DC line to the driver board only. Never wire the relay into mains AC — if you must switch a mains-side wall adapter at all, use a mains-rated relay module designed for it and keep that connection fully enclosed and away from any water.' },
          { component: 'Mist maker driver board — DC power input', connectsTo: 'DC power adapter (matching your unit\'s rated voltage — commonly 12V or 24V DC, check your datasheet)', note: 'This adapter and all of its wiring must sit outside the enclosure, above and away from the reservoir, with drip loops so any condensation runs away from the plug, not into it.' },
          { component: 'Microcontroller / relay module — common GND', connectsTo: 'Shared ground rail', note: 'All low-voltage grounds must be tied together for the logic signal to work correctly.' },
        ],
      },
      C: {
        prompts: [
          'Build a logical plan (pseudocode or flowchart) before touching the breadboard: at what humidity does the mister turn ON, and at what humidity does it turn OFF? Why should these be two different numbers (hysteresis) rather than one?',
          'Safety check, logged before first power-up: confirm the driver board and all connectors sit above the water line and behind a splash barrier, confirm the DC adapter is nowhere near the reservoir, and confirm you have tested the enclosure for leaks with the mister OFF before switching it on.',
          'Log each build session — what you built, what you tested, and what still doesn\'t work.',
          'When something doesn\'t work (relay chatters, sensor reads erratically in the mist, mister floods a corner), log the change AND your reasoning for it.',
          'Demonstrate a specific technical skill during the build (e.g., soldering a header, sealing a cable gland, calibrating the sensor reading against a reference hygrometer).',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against YOUR OWN Criterion B numbers — does the enclosure actually stay within your target % RH range over a full day/night cycle?',
          'Run an authentic test in the real environment (the actual vivarium or grow space) over multiple days, and log the humidity swings you measure, not just a single reading.',
          'Critically evaluate where it fell short and why — overshoot after misting, lag before the sensor detects a drop, mist condensing on the sensor itself, etc.',
          'Explain the impact on your client: has this actually solved the forgetting/inconsistency problem from Criterion A, or created a new one?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'sensor-augmented-everyday-object',
    title: 'Give an Everyday Object One New Sense',
    blurb: 'Pick one real object someone already owns and uses. Give it exactly one new sensing capability — no more.',
    track: 'Physical computing',
    difficultyTier: 'Builder',
    hardwareNeeded: [
      'A microcontroller of your choice (Raspberry Pi Pico, micro:bit, or Arduino)',
      'ONE sensor, chosen to match your object (e.g. light-dependent resistor, tilt/vibration switch, magnetic reed switch, moisture sensor, or sound sensor)',
      'Basic mounting materials (tape, hot glue, small enclosure or project box)',
      'A real everyday object that you or someone you know already owns and uses daily',
    ],
    globalContext: 'Fairness and development',
    keyConcept: 'Development',
    relatedConcepts: ['Adaptation', 'Function', 'Form'],
    client: 'A specific real person you know — for example a grandparent who forgets whether they took their tablets, a younger sibling who leaves the fridge or front door open, or yourself and a habit you actually struggle with. Name the real person and their real object in your journal before you start.',
    situation: 'Most of the objects around us are "dumb" — a pillbox, a door, a chair, a drawer. They cannot tell anyone what happened to them. But you do not need to reinvent them or turn them into a full smart-home gadget. One well-chosen sensor, added to one object, can give it exactly one new capability: detect, remind, alert, or log. Accessibility and eldercare contexts are especially rich territory here — a bed sensor that senses when someone has got up in the night, or a pillbox that senses whether it was opened, can matter far more than a novelty gadget, precisely because it stays simple enough to actually be trusted and used.',
    challenge: 'Choose ONE everyday object belonging to a real person you know, and ONE sensor. Give that object exactly one new capability that solves a real, specific problem for that real, specific person. Do not add a second sensor and do not redesign the object itself — the object stays recognisably itself, with one new sense bolted discreetly onto it.',
    existingSolutions: [
      { name: 'Pillsy Smart Pill Bottle Cap', note: 'A retrofit cap that senses whether the bottle was opened and reminds the user if a dose is missed — it augments an ordinary pill bottle rather than replacing it.' },
      { name: 'Apple AirTag / Tile', note: 'A small retrofittable sensor-and-radio unit that gives any existing object exactly one new capability: reporting its own location.' },
      { name: 'Bed/chair pressure-sensitive alarm mats (eldercare)', note: 'Used in care homes to detect when a resident at fall or wandering risk has left their bed or chair, alerting a carer elsewhere in the building.' },
    ],
    accent: { from: '#2e1a0f', via: '#7a4a2a', to: '#e8a24a' },
    stages: {
      A: {
        prompts: [
          'Who is your client — name the real person — and what is the ONE object of theirs you are augmenting? What does that object currently fail to tell anyone?',
          'Shadow or interview your client about how they actually use this object on a normal day. What goes wrong, and how often?',
          'Analyse two of the existing solutions above (or similar real products). What single capability does each add, and what do they deliberately leave alone?',
          'Push your design brief up the command-term ladder: state the problem, outline it, explain it, then justify why ONE sensor is enough to solve it.',
        ],
        technique: { name: 'Command-term ladder (1–8)', description: 'Practise the same sentence through states → outlines → explains → justifies before writing your final brief.' },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. What exactly must your sensor detect, and how will you know it worked?',
          'List the obvious sensor choices for your object first (the ones anyone would think of), then push for "options explosion" — what is the ONE choice nobody else in your class would pick, and why might it actually work better?',
          'Sketch the wiring for your single sensor and microcontroller. Annotate what each pin and connection does.',
          'You will be tempted to add a second sensor "just in case." Name that temptation explicitly, then justify why exactly ONE sensor is the harder and better design choice here.',
          'Justify your final sensor choice against your OWN spec from prompt 1 — not against what looked coolest.',
        ],
        artifacts: ['idea-board', 'wiring-diagram'],
        wiring: [
          { component: 'Light-dependent resistor (LDR) — leg 1', connectsTo: 'Microcontroller 3.3V pin (through a fixed resistor, forming a voltage divider)', note: 'The LDR alone does not vary voltage on its own — pair it with a fixed resistor so the midpoint voltage changes with light.' },
          { component: 'Voltage divider midpoint', connectsTo: 'Microcontroller analogue input pin', note: 'This is the pin you read to detect light level changes (e.g. a drawer or lid opening).' },
          { component: 'LDR leg 2 / fixed resistor', connectsTo: 'Microcontroller GND', note: 'Completes the divider circuit — check polarity is not required for an LDR, but the resistor value sets your sensitivity range.' },
        ],
      },
      C: {
        prompts: [
          'Build a logical plan before you touch the breadboard or enclosure — what order will you assemble, mount, and test in, and why that order?',
          'Log each build session with date, what you changed, and a photo or sketch of the current state.',
          'When your sensor reading does not behave as expected, log the change you made AND your reasoning for why you tried it.',
          'Demonstrate a specific technical skill in your build (e.g. debouncing a switch, calibrating a threshold, soldering a joint, 3D printing or hand-building an enclosure).',
          'Mount the sensor onto the real object itself. What compromises did you make to keep the object recognisably itself, rather than turning it into something new?',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against YOUR OWN Criterion B numbers from Stage B, not vague impressions. Record actual readings or trigger events.',
          'Run an authentic test with your real client using the real object in its real everyday location — not just on your desk.',
          'Critically evaluate where the single-sensor capability fell short. Was one sensor really enough, or did you discover a limitation only a second capability could fix?',
          'Explain the impact on your specific client: did the new capability actually change what they do, worry about, or need help with?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  // ── DIGITAL DESIGN ──────────────────────────────────────────────────────
  {
    id: 'todone-agentic-app',
    title: 'ToDone — an AI that actually finishes your to-dos',
    blurb: 'Not another to-do list. An agent that attempts the task for you.',
    track: 'Digital design',
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Systems',
    relatedConcepts: ['Innovation', 'Function', 'Perspective'],
    client: 'One real, specific overwhelmed user you choose — e.g. a Year 11 student drowning in deadlines, a parent running a household, a small-business owner.',
    situation:
      'Adding a task to a to-do list costs almost no willpower; doing it costs a lot. That gap is where most to-do items die — apps are excellent at capturing tasks and almost useless at finishing them.',
    challenge:
      'Design, and prototype the interaction of, a to-do app where adding a task can trigger an agent that actually attempts to complete simple, well-defined tasks on the user’s behalf — not just remind them.',
    existingSolutions: [
      {
        name: 'Todoist / Things',
        note: 'Excellent at capturing and organising tasks, but entirely passive — they never do anything for you.',
      },
      {
        name: 'Aloe Bud',
        note: 'A caring, low-pressure check-in app — a good precedent for tone, and for the UX 7-element framework (accessible / credible / desirable / findable / usable / useful / valuable) even though it never executes a task.',
      },
      {
        name: 'Siri / Google Assistant reminders',
        note: 'Can set a reminder or a timer — a very narrow slice of "doing" — worth analysing for what it gets right (zero-friction voice capture) and where it stops short.',
      },
    ],
    accent: { from: '#160b2e', via: '#3a1a5c', to: '#8a3fd6' },
    stages: {
      A: {
        prompts: [
          'Pick ONE real, specific person — not "busy people" in general. Shadow or interview them about their actual to-do list for a week: how many items get added versus actually finished? Where do they get stuck — starting, or finishing?',
          'Analyse two existing to-do/reminder apps against the UX 7-element framework (accessible, credible, desirable, findable, usable, useful, valuable) — score each element and note where the app is weakest.',
          'Not every to-do item CAN be "done" by an agent (compare "call mum" vs "pay this specific bill" vs "feel less anxious"). Categorise your target user’s real to-do items — how many are genuinely agent-completable, and which are not? Be honest about the limits.',
          'Push the command-term ladder: state, outline, explain, then justify why THIS user needs an agent that acts, not just a list that reminds.',
        ],
        technique: {
          name: 'UX 7-element framework',
          description: 'Score existing apps against accessible / credible / desirable / findable / usable / useful / valuable before designing your own.',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria for what "the agent did the task" means — e.g. a tagged task auto-completes within __ of being added, for at least __% of eligible tasks; the user trusts the result without double-checking it __% of the time. Vague specs ("it should work well") cost marks.',
          'Use options explosion: list the obvious agent actions (send a templated email, add a calendar event), then push for at least one genuinely divergent idea nobody else in class will pick.',
          'Sketch three different interaction flows for how a user hands a task to the agent and how the agent reports back what it did — annotate each against your spec.',
          'Justify your chosen flow against your OWN spec, not against "looks cool". Which flow builds trust fastest?',
        ],
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Build log: what you built each session, which technical skill (wireframing tool, a scripted mock "agent" flow, a coded prototype), and what changed.',
          'This agent is SIMULATED for the prototype, not a live API call — be explicit in your build log about what’s real versus simulated, and why that’s a legitimate prototyping choice at this stage.',
          'When you change your plan mid-build, log why.',
        ],
        artifacts: ['build-log', 'todone-demo'],
      },
      D: {
        prompts: [
          'Test against YOUR OWN Criterion B numbers, not a vague "did people like it".',
          'Run an authentic test with your real target user, or someone close to that profile — not a classmate.',
          'Evaluate critically: where did trust break down? Did users double-check the agent’s work anyway, undermining the whole point?',
          'Explain the impact — what does this user get back (time, headspace) if the agent-completable slice of their list actually got smaller?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },
  {
    id: 'salon-website-brief',
    title: "Design a Local Salon's Website",
    blurb: 'Research a real salon, barbershop, or spa near you and design the website plan it actually needs — wireframes, service copy, and a booking flow, grounded in real client feedback.',
    track: 'Digital design',
    globalContext: 'Personal and cultural expression',
    keyConcept: 'Communication',
    relatedConcepts: ['Markets and trends', 'Function', 'Perspective'],
    client: 'A real local salon, barbershop, spa, or personal-care business you can actually visit, call, or interview — one you or a family member genuinely uses, or one within walking/driving distance. Do not invent a business.',
    situation: 'Many small local personal-care businesses run entirely on word of mouth and walk-ins: their "website" is a Facebook page last updated two years ago, or nothing at all. Meanwhile customers increasingly expect to check services, prices, and hours, and book online, before they ever pick up the phone — and competitors who offer that are winning the customers who don\'t.',
    challenge: 'Design (not build or code) a full website plan — wireframes plus a written content and service plan — for the real local business you have chosen, including a real service menu drawn from their actual pricing, a realistic booking flow, and at least one genuine differentiator you found through real research into their real competitors.',
    existingSolutions: [
      { name: 'Fresha', note: 'A real, widely used booking platform adopted by many salons and spas worldwide — reliable booking, payments, and reminders, but a generic look that could belong to almost any salon anywhere.' },
      { name: 'Booksy', note: 'Another real mainstream salon/barber booking platform, strong on discovery and customer reviews, but again visually generic and not tailored to any one business\'s identity.' },
      { name: 'A real local competitor\'s website', note: 'Find and analyse ONE actual website belonging to a real competing salon, barbershop, or spa near your chosen business — do not invent this. Search for it yourself and record its genuine strengths and weaknesses.' },
    ],
    accent: { from: '#2a1a1f', via: '#8c3f5d', to: '#e0a458' },
    stages: {
      A: {
        prompts: [
          'Choose a real local salon, barbershop, spa, or personal-care business you can actually visit, call, or interview — never invent one. What is its name, and how do people currently find out about it and book appointments (walk-in, phone, Facebook, nothing at all)?',
          'Visit or call the business and find out what services they actually offer, what they actually charge, and what their actual opening hours are. Record this as raw real data, not estimates.',
          'Search for the business on Google Maps or a review site and read at least five real customer reviews. What do real customers praise, and what do they genuinely complain about?',
          'Using the Head, Heart, Hands framework: state the Head (what is factually missing or broken in their current online presence), the Heart (why this actually matters to the owner and to customers who can\'t find or book them), and the Hands (what a website could concretely change).',
          'Find and analyse ONE real competitor\'s actual website nearby offering similar services. What does it do that your chosen business\'s current online presence doesn\'t?',
        ],
        technique: { name: 'Head, Heart, Hands framework', description: 'State the problem factually (Head), explain why it matters to real people (Heart), then name the concrete action your design will take (Hands) — most students skip straight to Hands and lose the other two.' },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria for the website plan — nobody hands these to you.',
          'List every obvious page or feature idea for this site (Home, Services, Book Now, Contact...) then push further with an "options explosion": what is one page, feature, or piece of content for THIS specific real business that a generic template site would never think of?',
          'Build a design-specification table for your homepage covering Copy, Location, Audience, Size, Function, and Time — what exact content goes where, aimed at whom, at what size, doing what job, and ready by when.',
          'Separate UI from UX in your plan: sketch what the page will look like (UI) separately from what a nervous first-time customer needs to be able to DO in under 30 seconds — find a service, see a price, book a slot (UX).',
          'Justify your final wireframe choices against your OWN success criteria from the first prompt — not against whichever layout simply looks nicest.',
        ],
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Turn your wireframes into an ordered content plan: for every page, write the actual real copy — real service names, real prices, real opening hours. No placeholder business, no lorem ipsum.',
          'Log each work session in your build-log: date, which page or section you produced, which technique you used, and any problem you hit.',
          'Show your work-in-progress wireframes and content plan to your real client, or the closest real contact you have at that business, and log their actual feedback verbatim — remember "the customer is always right": what did they ask you to change, and why?',
          'Revise at least one page based on that real feedback, and log both the change and the reason for it in your build-log.',
          'Demonstrate a specific design skill in your finished content plan — for example a clear visual hierarchy, an accessible colour and contrast choice, or a genuinely mobile-first layout.',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test your finished wireframes and content plan against the success criteria YOU wrote in Criterion B.',
          'Show the finished plan to your real client or a real potential customer of theirs, and record their authentic reaction — did they find what they needed, and how fast?',
          'Compare your plan directly against the real competitor site you analysed in Criterion A — where does yours now do better, and where does it still fall short?',
          'Critically evaluate: where did your plan fall short of your OWN spec, and why?',
          'Explain the real, specific impact this website plan could have on your chosen business if it were actually built.',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'face-shape-haircut-match',
    title: 'Face-Shape Analysis & Haircut Matching',
    blurb: 'A real, working system already does the shape-matching — your job is the part it doesn\'t do yet.',
    track: 'Digital design',
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Development',
    relatedConcepts: ['Innovation', 'Function', 'Perspective'],
    client: 'A hair salon or barbershop (real or one you choose) whose clients often ask "what cut actually suits my face?" and get an inconsistent answer depending on which stylist they see.',
    situation:
      'A working face-shape analysis feature already exists for a real salon: a client uploads a selfie, an on-device model finds 468 points on their face, geometric ratios between those points classify the face into one of seven shapes (Oval, Round, Square, Heart, Oblong, Diamond, Triangle), and a stylist-curated matrix recommends three cuts for that shape and gender. It runs entirely on the client\'s own device — no photo is ever uploaded — and shows a confidence level and a plain-English reason ("your jawline is the widest part of your face"). It does one thing very well: it recommends. It does not show the client what any of those three cuts would actually look like on their own face.',
    challenge:
      'Analyse the real system described above as your existing product, then design the missing piece: a way for a client to actually SEE a recommended cut on their own photo — not just read its name — before their appointment.',
    existingSolutions: [
      {
        name: 'The real face-shape recommender described above',
        note: 'On-device MediaPipe face-landmark detection → geometric ratio classifier (length-to-width, forehead-to-jaw ratio, chin taper) → a curated gender/shape → cuts matrix, with a confidence score and a manual "not quite right, pick your own shape" override. Study this as your Criterion A precedent: what does it get right (privacy, speed, a reasoned explanation), and what is its one clear gap?',
      },
      {
        name: 'YouCam Makeup / Perfect Corp virtual try-on apps',
        note: 'Consumer apps that DO overlay makeup or hair colour onto a live selfie in real time — a precedent for the visual-overlay problem you are being asked to solve, though not specifically for haircut shape (rather than colour).',
      },
      {
        name: 'Snapchat / Instagram face filters',
        note: 'Mainstream, extremely fast face-tracking overlays — worth analysing for how they keep an overlay aligned to a moving face using landmark points, the same underlying idea (landmarks → geometry → overlay) as your challenge.',
      },
    ],
    accent: { from: '#2a0f1c', via: '#7a2a4a', to: '#e0a4c4' },
    stages: {
      A: {
        prompts: [
          'Try the reasoning behind the real system yourself: for a face you know well (a photo of a friend, family member, or yourself), work out by eye which of the 7 shapes it is, using the same signals it uses — is the face longer than it is wide? Is the forehead wider than the jaw, or the reverse? Where a system might read landmark coordinates, you\'re reading proportions by eye — what does that tell you about which cases are easy to classify and which are borderline?',
          'Interview at least two people who have had a haircut recommendation (from a stylist, an app, or a magazine quiz) — did they trust it? Did they act on it? If not, why not?',
          'Analyse the real system and the two other precedents above — specifically, what does EACH do that the others don\'t? Where does each fall short of "I can see myself with that haircut"?',
          'Push your design brief up the command-term ladder: state the gap (recommends but doesn\'t show), outline why that gap matters to a real client deciding whether to book, explain the risk of getting a visual overlay wrong (an ugly or obviously fake-looking result could put someone off a cut that would actually suit them), then justify why solving this gap specifically is worth doing.',
        ],
        technique: {
          name: 'Analysing a real system\'s architecture, not just its output',
          description: 'Before designing anything, describe the existing system as a pipeline: input → processing → output. Here that\'s photo → on-device landmark detection → geometric classification → curated recommendation. Naming each stage tells you exactly which stage your new feature needs to plug into.',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. For example: the overlay stays aligned within __ pixels as the head tilts up to __ degrees; a first-time user understands what they\'re looking at within __ seconds without instructions; the overlay renders in under __ seconds on a normal phone.',
          'Generate at least three genuinely different ways to show a client "you, with this haircut" — not three versions of the same idea. Use "options explosion": the obvious answer is "warp a stock photo of the haircut onto their face" — list that, then push for at least one approach nobody else in your class would propose (e.g. simple silhouette/outline overlays using the same landmark points the real system already computes, rather than a photorealistic warp).',
          'The real system already computes 468 facial landmark points for every photo it analyses. Sketch how your chosen overlay approach would actually use those SAME points — where would a hairline outline, a length guide, or a silhouette need to attach to the face geometrically?',
          'What happens when the overlay looks bad — too fake, badly aligned, or unflattering? Design for that failure case explicitly, not just the success case.',
          'Justify your final choice against your OWN spec from the first prompt — not against whichever mockup looks most impressive in a slide.',
        ],
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Build a logical plan: what has to be figured out first (how the overlay will be positioned using landmark points) before anything about its visual style?',
          'Log each build/prototyping session: date, what you did (paper sketches, a clickable mockup, annotated screenshots of the real app with your overlay drawn on top by hand), which skill you used, and any problems hit.',
          'When you change your approach mid-project — and you likely will, once you see how hard precise alignment actually is — log the change AND the reason for it.',
          'Demonstrate a specific technical or design skill: annotating real landmark-point diagrams, producing a clickable prototype, or writing the actual copy/UI text a user would see (e.g. how do you explain "medium confidence" without sounding unreliable?).',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test against the success criteria YOU wrote in Criterion B — not a vague "does it look cool?". Record what you measured, your target, what you actually got, and pass/fail.',
          'Run an authentic test: show your prototype/mockup to real people (ideally people who have used a face-shape or filter app before) and watch their actual reaction, don\'t just ask "do you like it?".',
          'Critically evaluate: where did your overlay concept fall short of your OWN spec — alignment, speed, trust, honesty about confidence — and why?',
          'Explain the impact for the salon client: does seeing the cut, not just reading its name, actually change whether someone books the appointment? What evidence do you have either way?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'spline-3d-redesign',
    title: 'Redesign a Real Object in 3D',
    blurb: 'Find something that actually annoys you. Model the fix — properly, in 3D — and publish it.',
    track: 'Digital design',
    hardwareNeeded: ['Optional: access to a 3D printer to physically produce your redesign'],
    globalContext: 'Scientific and technical innovation',
    keyConcept: 'Development',
    relatedConcepts: ['Form', 'Function', 'Innovation'],
    client:
      'You, or someone you live with — pick a real physical object you or they own that has a genuine, specific, repeated annoyance (not a hypothetical). Examples: a kitchen tool that\'s awkward to grip one-handed, a phone stand that tips over on soft surfaces, a cable organiser that doesn\'t actually fit your desk\'s actual cables, a bathroom caddy that traps water.',
    situation:
      'Every object in your house was designed by someone, at some point, under some set of constraints — and most of those constraints have quietly changed since. Tools like SketchUp, Fusion 360, Blender, Unity and CoSpaces exist precisely so you don\'t have to just complain about a bad design in words: you can actually model a fix, at real dimensions, and see whether it holds up. The challenge here is to stop describing the flaw and start modelling the fix.',
    challenge:
      'Use Spline, Onshape, or a similar 3D tool to redesign a real object you own end-to-end — from measuring the actual flaw, through multiple 3D concepts, to one finished model that specifically addresses it. Publish the result: a public Spline scene link (Export → Public URL) or a set of Onshape screenshots/exported views of your parametric model.',
    existingSolutions: [
      {
        name: 'SketchUp vs Fusion 360 vs Unity vs CoSpaces',
        note: 'Four real, widely-used 3D tools that are NOT interchangeable — SketchUp is built for fast concept massing, Fusion 360 for precise dimensioned/parametric parts, Unity for interactive real-time scenes, and CoSpaces for accessible browser-based 3D/VR. Comparing what each is actually for (and picking the one that fits YOUR redesign) is itself a design decision worth justifying.',
      },
      {
        name: 'Onshape public document gallery',
        note: 'Onshape lets any user publish their parametric CAD documents publicly, so anyone can inspect the full feature history of a real, finished part — a genuine precedent for "publish your model, not just a screenshot of it," which is exactly what this challenge asks you to do.',
      },
    ],
    accent: { from: '#0f0c29', via: '#7c3aed', to: '#38bdf8' },
    stages: {
      A: {
        prompts: [
          'Choose a real object you or someone you know owns that genuinely annoys them — not an imagined problem. What EXACTLY goes wrong, when, and for whom? Photograph or sketch it from at least three angles, and measure its actual dimensions where you can.',
          'Interview the real owner/user of the object (yourself counts, but talk to at least one other real user too) — how often does the flaw actually occur, and what workaround do they currently use instead of a proper fix?',
          'Compare at least two real 3D tools for this specific job — SketchUp, Fusion 360, Unity, CoSpaces, Spline, Onshape, Blender. Which is built for fast concept sketching, which for precise dimensioned parts, which for interactive scenes? Justify which tool actually fits YOUR redesign before you commit to one.',
          'Analyse the two precedents above (the tools comparison and Onshape\'s public gallery) — what does each tell you about how professionals choose a 3D medium and how they share a finished model?',
          'Push your design brief up the command-term ladder: state the flaw, outline it, explain why it happens, then justify why a 3D-modelled redesign — not just a written suggestion — is the right response.',
        ],
        technique: {
          name: 'Command-term ladder (1–8)',
          description: 'Practise the same sentence through states → outlines → explains → justifies before writing your final brief — most students stop at "explains".',
        },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria — nobody hands these to you. For example: the new grip fits a hand of __mm without slipping in __% of test grips; the redesigned base resists tipping on a __-degree slope; the part fits within your desk\'s actual __mm gap.',
          'Use "options explosion": list the three or four obvious fixes anyone would think of first, then push for at least one genuinely divergent redesign direction nobody else in your class would land on.',
          'Rough-model each direction in your chosen 3D tool — even crude blocked-out shapes count at this stage. Annotate what changed geometrically in each one to actually address the flaw, not just how it looks different.',
          'Justify your final choice against your OWN spec from the first prompt — not against whichever version renders the prettiest.',
        ],
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Build a logical modelling plan before you open the tool properly — which geometry, constraints, or components need to exist before others can be added?',
          'Log each modelling session: date, what you built, which specific technical skill you used (extrude, boolean cut, parametric constraint, material/lighting pass), and any problems hit.',
          'When a shape or constraint doesn\'t behave as planned, log the change AND the reason for it — that justification is worth real marks, not just the fix.',
          'Once your model is finished, publish it: in Spline use Export → Public URL and paste the link into the embed below; in Onshape (or another tool), export screenshots or a short screen-recording of the finished parametric model instead.',
          'Demonstrate a specific technical skill clearly in your build log — a boolean operation, a parametric dimension change, a UV/material pass, or a physically-informed constraint (wall thickness, tolerance, grip radius).',
        ],
        artifacts: ['build-log', 'spline-embed'],
      },
      D: {
        prompts: [
          'Test against the success criteria YOU wrote in Criterion B — not a vague "does it look better?". Record what you measured, the target you set, what you actually got, and pass/fail.',
          'Run an authentic test: have the real owner/user from Criterion A react to the finished 3D model (or a printed version, if you have access to a 3D printer) — not just yourself.',
          'Critically evaluate: where did the redesign fall short of your OWN spec, and why — a tool limitation, a measurement you got wrong, a trade-off you didn\'t foresee?',
          'Explain the impact on your specific client — what changes for them now versus the original object\'s flaw?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },

  {
    id: 'school-community-digital-campaign',
    title: 'A Digital Campaign for a Cause You Actually Care About',
    blurb: 'Turn a cause you already belong to into a real campaign that changes what people DO, not just what they know.',
    track: 'Digital design',
    globalContext: 'Fairness and development',
    keyConcept: 'Communication',
    relatedConcepts: ['Perspective', 'Markets and trends', 'Collaboration'],
    client: 'A REAL school club, Service-as-Action initiative, or community group you are genuinely a member of. Your client is that group\'s real leader or coordinator — not a fictional stand-in and not a hypothetical charity.',
    situation: 'Plenty of genuinely worthwhile school clubs, Service-as-Action groups, and community initiatives fail to reach anyone — not because the cause is weak, but because the communication is weak or non-existent: a poster papered over within a week, a social account with a dozen followers, an announcement nobody remembers by lunchtime. The cause deserves better than a forgotten flyer.',
    challenge: 'Design a real, multi-channel digital campaign for the cause you chose — at least a social media content plan, a webpage or app mockup, and one persuasive video/animation concept — aimed at getting a specific audience to take ONE measurable action (sign up, attend, pledge, download, report), not just "raise awareness" in the abstract.',
    existingSolutions: [
      { name: 'Iceland / Greenpeace "Rang-tan" advert (2018)', note: 'Banned from UK TV for being "too political," it went viral anyway. It skips statistics entirely and uses one emotional character — an orphaned orangutan — to drive a single concrete ask: check your palm oil sourcing.' },
      { name: 'UNICEF Kid Power', note: 'Converted awareness into behaviour by gamifying it: kids earned "Kid Power Points" for physical activity, and those points unlocked real therapeutic food packets for malnourished children. The ask was specific, tracked, and rewarded — not just "learn about hunger."' },
      { name: 'School Anti-Bullying Club "anonymous support app" concept', note: 'A real MYP Design precedent: a club found students wouldn\'t use visible reporting channels, so their campaign concept centred on one low-friction action — submitting an anonymous report — instead of generic "anti-bullying awareness."' },
    ],
    accent: { from: '#4a0e0e', via: '#b91c1c', to: '#f59e0b' },
    stages: {
      A: {
        prompts: [
          'Name your REAL client: which school club, Service-as-Action group, or community initiative are you actually a member of? Who leads it, and what does it currently do instead of a real campaign — a poster, an Instagram nobody follows, word of mouth?',
          'Interview the group\'s real leader AND at least two people outside the group who are the intended audience. What do insiders think the message is? What do outsiders actually remember or understand? Where exactly is the gap?',
          'Find two or three real digital campaigns for causes similar to yours (Rang-tan, UNICEF Kid Power, or a local NGO\'s account) and run each through the CRAAP test — Currency, Relevance, Authority, Accuracy, Purpose. Which one actually changed behaviour, and which just "raised awareness" and stopped there?',
          'Push your design brief up the command-term ladder: state the problem, outline the current communication gap, explain why previous attempts underperformed, then justify a specific behaviour-change target for your campaign.',
        ],
        technique: { name: 'CRAAP test', description: 'Evaluate every source or precedent campaign against Currency, Relevance, Authority, Accuracy, and Purpose before you let it influence your own design.' },
      },
      B: {
        prompts: [
          'Write your OWN measurable success criteria using SMART (Specific, Measurable, Achievable, Realistic, Timely) — not "more people know about X" but e.g. "Y students sign the pledge / attend the meeting / submit the form by [date]." Nobody hands these to you.',
          'List every obvious content idea first — an Instagram post, a poster, an announcement. Then push for "options explosion": what is ONE idea nobody at your school has tried for this cause (a TikTok-style skit, a QR code hidden in a mural, a peer challenge)?',
          'Storyboard your persuasive video/animation concept using Head, Heart, Hands — the problem, why it matters emotionally, the exact action to take — and PEEL (Point, Evidence, Explain, Link) for any on-screen script or captions.',
          'Wireframe your webpage or app mockup. What is the ONE button or action you want a visitor to take? Cut every element that doesn\'t serve that single action.',
          'Justify your final combination of channels — social plan, webpage/app, video — against the real objections or indifference your outside interviewees raised back in Criterion A.',
        ],
        technique: { name: 'SMART objectives', description: 'Specific, Measurable, Achievable, Realistic, Timely — the filter every success criterion in your campaign must pass before it counts.' },
        artifacts: ['idea-board'],
      },
      C: {
        prompts: [
          'Plan your production schedule across all three channels — social content calendar, webpage/app build, video/animation — realistically, against your actual deadline.',
          'Log every build session: date, what you produced (a post, a screen, a storyboard frame, a video cut), which specific digital skill you used, and any problems hit.',
          'When a piece of content doesn\'t land with peers in testing, log the change you made AND the reason — not just that you changed it.',
          'Demonstrate at least one specific technical skill in real depth (video editing/motion graphics, responsive web layout, professional-tool graphic design) rather than spreading effort thinly across all three channels.',
        ],
        artifacts: ['build-log'],
      },
      D: {
        prompts: [
          'Test your finished campaign against the SMART success criteria YOU wrote in Criterion B — did the specific, measurable action actually happen, or not?',
          'Run an authentic test: show the campaign to real members of your target audience — not friends who\'ll just be nice — and track an actual metric (clicks, sign-ups, attendance, downloads), not just opinions.',
          'Critically evaluate using a Big Number vs Human Scale lens: which of your statistics or facts actually landed with your real audience, and which felt abstract or fell flat?',
          'Explain the impact on your specific client — what will the real club, group, or leader do differently because of your campaign, and what would you change if you ran it again?',
        ],
        artifacts: ['testing-table'],
      },
    },
  },
]

export function getCaseStudy(id: string): CaseStudy | undefined {
  return ADVANCED_CASE_STUDIES.find((c) => c.id === id)
}
