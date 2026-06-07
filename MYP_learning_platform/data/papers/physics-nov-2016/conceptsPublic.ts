export interface ConceptEntry {
  keyConcepts: string[]
  keywords: string[]
}

export const CONCEPTS_PUBLIC: Record<string, ConceptEntry> = {

  // ─── Q1 Bird Migration & Motion ───────────────────────────────
  'q1_b': {
    keyConcepts: [
      'external resistive forces on moving objects',
      'environmental and biological factors affecting speed',
    ],
    keywords: ['headwind', 'air resistance', 'fatigue', 'weather', 'wind'],
  },

  'q1_d': {
    keyConcepts: [
      'deceleration as negative acceleration',
      'Newton\'s Second Law of Motion F = ma',
      'net retarding force causes deceleration',
    ],
    keywords: ['deceleration', 'retarding force', 'F=ma', 'Newton', 'negative acceleration', 'net force'],
  },

  'q1_e': {
    keyConcepts: [
      'area under velocity–time graph equals distance',
      'triangle area for uniformly decelerating motion',
    ],
    keywords: ['area', 'v-t graph', 'distance', 'triangle', 'deceleration'],
  },

  // ─── Q2 Wave Properties ───────────────────────────────────────
  'q2_a': {
    keyConcepts: [
      'wave properties: wavelength, amplitude, compression, rarefaction',
      'transverse vs longitudinal wave features',
    ],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'pressure', 'displacement'],
  },

  'q2_d': {
    keyConcepts: [
      'wave equation v = fλ',
      'calculating wavelength from frequency and wave speed',
    ],
    keywords: ['v=fλ', 'wavelength', 'frequency', '330 m/s', 'wave speed'],
  },

  'q2_f': {
    keyConcepts: [
      'diffraction of waves at obstacles',
      'long wavelength → greater diffraction',
      'infrasound diffracts over hills and obstacles',
    ],
    keywords: ['diffraction', 'spreading', 'wavelength', 'hill', 'obstacle', 'low frequency', 'infrasound'],
  },

  // ─── Q3 Refraction of Light ───────────────────────────────────
  'q3_a': {
    keyConcepts: [
      'refractive index determines optical density',
      'identifying materials from refractive index data and ray diagram',
    ],
    keywords: ['refractive index', 'air', 'water', 'glass', 'optical density'],
  },

  'q3_b': {
    keyConcepts: [
      'refraction caused by speed change at boundary',
      'light bends towards normal in denser medium',
      'greater refractive index = greater bending',
    ],
    keywords: ['speed', 'slows', 'normal', 'denser', 'bends', 'refractive index', 'boundary'],
  },

  // ─── Q4 Static Electricity ────────────────────────────────────
  'q4_b': {
    keyConcepts: [
      'electrons are the mobile charged particles',
      'electron transfer by friction causes charging',
      'loss of electrons results in positive charge',
    ],
    keywords: ['electrons', 'transfer', 'friction', 'rubbing', 'positive', 'mobile', 'nucleus'],
  },

  'q4_c': {
    keyConcepts: [
      'charging by friction',
      'charge induction in neutral objects',
      'electrostatic attraction between opposite charges',
    ],
    keywords: ['induction', 'friction', 'opposite charges', 'attract', 'neutral', 'redistribution'],
  },

  // ─── Q5 Thermal Insulation Investigation ──────────────────────
  'q5_a': {
    keyConcepts: [
      'three mechanisms of heat transfer: conduction, convection, radiation',
    ],
    keywords: ['conduction', 'convection', 'radiation', 'heat transfer'],
  },

  'q5_b': {
    keyConcepts: [
      'selecting appropriate equipment for a specific measurement',
      'justifying equipment choice with reference to experimental purpose',
    ],
    keywords: ['balance', 'timer', 'thermometer', 'mass', 'measure', 'justify'],
  },

  'q5_c': {
    keyConcepts: [
      'directional hypothesis with scientific justification',
      'insulation reduces rate of heat transfer',
    ],
    keywords: ['hypothesis', 'insulation', 'heat transfer', 'decreases', 'layers', 'justify'],
  },

  'q5_d': {
    keyConcepts: [
      'identifying and controlling variables for a fair test',
      'justifying why a variable must be controlled',
    ],
    keywords: ['control variable', 'fair test', 'constant', 'temperature', 'justify'],
  },

  'q5_e': {
    keyConcepts: [
      'sufficient relevant data: range, number of values, repeats',
      'repeat measurements and averages reduce random error',
    ],
    keywords: ['range', 'five values', 'repeat', 'average', 'reliable', 'random error'],
  },

  // ─── Q6 Coffee Cup Cooling Investigation ─────────────────────
  'q6_b': {
    keyConcepts: [
      'identifying weaknesses in experimental design',
      'scientific explanation of how each weakness affects results',
      'controlling variables for a valid investigation',
    ],
    keywords: ['material', 'colour', 'surface area', 'volume', 'room temperature', 'repeats', 'reliability', 'fair test'],
  },

  // ─── Q7 Radiation Investigation ───────────────────────────────
  'q7_a': {
    keyConcepts: [
      'independent and dependent variables',
      'what is changed vs what is measured',
    ],
    keywords: ['independent variable', 'dependent variable', 'aluminium thickness', 'count rate'],
  },

  'q7_c': {
    keyConcepts: [
      'directional hypothesis for radiation penetration',
      'thicker absorber → less radiation detected',
    ],
    keywords: ['hypothesis', 'thickness', 'intensity', 'decreases', 'absorbed'],
  },

  'q7_d': {
    keyConcepts: [
      'planning a valid and reliable radiation investigation',
      'range and number of data points',
      'baseline measurement and background correction',
      'control variables in radiation experiments',
    ],
    keywords: ['five values', 'repeat', 'baseline', 'no aluminium', 'distance', 'same source', 'reliable'],
  },

  'q7_f': {
    keyConcepts: [
      'background radiation correction',
      'subtracting background count from experimental readings',
    ],
    keywords: ['background radiation', 'subtract', 'without source', 'count rate', 'correction'],
  },

  'q7_g': {
    keyConcepts: [
      'radiation safety precautions',
      'justification of safety measures in terms of dose reduction',
    ],
    keywords: ['time', 'distance', 'shielding', 'lead', 'exposure', 'dose', 'protection'],
  },

  'q7_h': {
    keyConcepts: [
      'comparing penetrating power of alpha and beta radiation',
      'alpha stopped by air/paper; beta by aluminium',
      'mass and charge determine penetrating power',
    ],
    keywords: ['alpha', 'beta', 'penetrating power', 'mass', 'charge', 'aluminium', 'stopped', 'paper'],
  },

  // ─── Q8 Radioactive Decay & Half-Life ─────────────────────────
  'q8_a': {
    keyConcepts: [
      'systematic data collection from a simulation',
      'calculating mean averages from repeated trials',
      'significant figures in experimental data',
    ],
    keywords: ['average', 'sum', 'divide', 'trials', 'significant figures', 'frequency table'],
  },

  'q8_c': {
    keyConcepts: [
      'reading half-life from a radioactive decay graph',
      'multiple readings improve accuracy of half-life determination',
    ],
    keywords: ['half-life', 'graph reading', 'average', '50%', '25%', 'caesium-137'],
  },

  'q8_d': {
    keyConcepts: [
      'calculating number of half-lives from fraction remaining',
      'total time = number of half-lives × half-life duration',
    ],
    keywords: ['half-life', '1600000', '100000', '4 half-lives', '8 years', 'caesium-134', 'Fukushima'],
  },

  // ─── Q9 Power Stations & Electricity Transmission ─────────────
  'q9_a': {
    keyConcepts: [
      'social and environmental impacts of coal power stations',
    ],
    keywords: ['pollution', 'smoke', 'noise', 'traffic', 'visual impact', 'health'],
  },

  'q9_d': {
    keyConcepts: [
      'power loss in cables: P = I²R',
      'high voltage transmission reduces current and therefore heat loss',
    ],
    keywords: ['I²R', 'current', 'voltage', 'heat loss', 'P=IV', 'transmission'],
  },

  'q9_e': {
    keyConcepts: [
      'greenhouse gas mechanism and climate change',
      'acid rain formation from SO₂ and water',
      'environmental consequences of fossil fuel combustion',
    ],
    keywords: ['greenhouse gas', 'infrared', 'climate change', 'acid rain', 'sulfuric acid', 'CO2', 'SO2'],
  },

  'q9_f': {
    keyConcepts: [
      'variable electricity demand patterns (day vs night)',
      'electrical energy cannot be stored economically at large scale',
      'off-peak pricing to incentivise night-time use',
    ],
    keywords: ['demand', 'night', 'cannot store', 'excess', 'off-peak', 'cheaper', 'encourage'],
  },

  // ─── Q10 Solar Power & Traffic Management ─────────────────────
  'q10_b': {
    keyConcepts: [
      'evaluating solar power for a specific application',
      'advantages: grid-independent, renewable, low emissions',
      'disadvantages: intermittent, battery storage needed, high upfront cost',
      'economic analysis: capital cost vs running cost and payback',
      'social impact: safety, energy access, community benefit',
    ],
    keywords: ['solar', 'advantage', 'disadvantage', 'renewable', 'intermittent', 'battery', 'economic', 'social', 'load shedding', 'constant supply'],
  },
}
