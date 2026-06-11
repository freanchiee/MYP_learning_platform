import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2016_V1: Record<string, ConceptEntry> = {

  // ─── Q1 Arctic Tern Migration ──────────────────────────────────
  'q1_b': {
    keyConcepts: ['average speed vs instantaneous speed', 'factors affecting animal migration speed'],
    keywords: ['headwind', 'air resistance', 'fatigue', 'weather', 'navigate'],
  },
  'q1_d': {
    keyConcepts: ['net force causes deceleration', 'Newton\'s Second Law F=ma', 'velocity changes under net force'],
    keywords: ['retarding force', 'velocity', 'deceleration', 'Newton', 'F=ma'],
  },
  'q1_e': {
    keyConcepts: ['area under velocity-time graph equals distance', 'triangle area = ½ × base × height'],
    keywords: ['area', 'v-t graph', 'triangle', 'distance', 'displacement'],
  },

  // ─── Q2 Wave Properties ────────────────────────────────────────
  'q2_a': {
    keyConcepts: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'transverse vs longitudinal wave features'],
    keywords: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'distance', 'displacement'],
  },
  'q2_b': {
    keyConcepts: ['frequency = number of complete cycles per second', 'unit hertz (Hz)'],
    keywords: ['frequency', 'cycles', 'Hz', 'per second'],
  },
  'q2_c': {
    keyConcepts: ['waves with equal frequency complete same cycles per second'],
    keywords: ['same frequency', 'equal cycles'],
  },
  'q2_d': {
    keyConcepts: ['wave equation v = fλ', 'rearranging to λ = v/f', 'speed of sound in air 330 m/s'],
    keywords: ['v=fλ', 'wavelength', 'frequency', '330 m/s', 'wave equation'],
  },
  'q2_e': {
    keyConcepts: ['infrasound has frequency below 20 Hz', 'human hearing range 20-20000 Hz'],
    keywords: ['infrasound', '20 Hz', 'frequency', 'hearing'],
  },
  'q2_f': {
    keyConcepts: ['diffraction allows waves to spread around obstacles', 'diffraction greatest when wavelength ≥ obstacle size', 'infrasound has long wavelength'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'obstacle', 'low frequency'],
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    keyConcepts: ['refractive index indicates optical density', 'higher n = slower light = more bending'],
    keywords: ['air', 'water', 'glass', 'refractive index', 'optical density'],
  },
  'q3_b': {
    keyConcepts: ['light slows in denser medium', 'bends towards normal when entering denser medium', 'refraction mechanism'],
    keywords: ['speed', 'slows', 'normal', 'bends towards', 'denser', 'refractive index'],
  },

  // ─── Q4 Static Electricity ─────────────────────────────────────
  'q4_a': {
    keyConcepts: ['electron has charge −1', 'proton has charge +1', 'neutron is neutral (0)'],
    keywords: ['electron', 'proton', 'neutron', 'charge', '-1', '+1', '0'],
  },
  'q4_b': {
    keyConcepts: ['only electrons are mobile in solids', 'friction transfers electrons between surfaces', 'gaining electrons produces negative charge'],
    keywords: ['electrons', 'mobile', 'friction', 'rubbing', 'transfer', 'negative charge'],
  },
  'q4_c': {
    keyConcepts: ['charging by friction', 'electrostatic induction', 'induced charge redistribution', 'opposite charges attract'],
    keywords: ['friction', 'induction', 'redistribution', 'opposite charges', 'attract', 'electrostatic'],
  },

  // ─── Q5 Bubble Wrap Insulation Investigation ───────────────────
  'q5_a': {
    keyConcepts: ['conduction through direct contact', 'convection through fluid movement', 'radiation via infrared waves'],
    keywords: ['conduction', 'convection', 'radiation'],
  },
  'q5_b': {
    keyConcepts: ['selecting appropriate measuring equipment for the experiment', 'equipment justification'],
    keywords: ['balance', 'mass', 'thermometer', 'stopwatch', 'timer', 'equipment'],
  },
  'q5_c': {
    keyConcepts: ['more insulation reduces heat transfer', 'hypothesis states direction of change with justification'],
    keywords: ['layers', 'insulation', 'heat transfer', 'mass melted', 'decreases'],
  },
  'q5_d': {
    keyConcepts: ['control variables ensure fair test', 'named variable + method + reason'],
    keywords: ['control variable', 'fair test', 'constant', 'room temperature'],
  },
  'q5_e': {
    keyConcepts: ['measure initial and final mass', '≥5 IV values for trend', 'repeat and average to reduce random error'],
    keywords: ['initial mass', 'final mass', 'five values', 'repeat', 'average', 'reliable'],
  },

  // ─── Q6 Cup Cooling Investigation ──────────────────────────────
  'q6_a': {
    keyConcepts: ['evaluate data against hypothesis', 'identify trend or lack thereof', 'cite specific data as evidence'],
    keywords: ['not supported', 'no trend', 'inconsistent', 'data evidence'],
  },
  'q6_b': {
    keyConcepts: ['experimental design weaknesses', 'uncontrolled variables affect validity', 'no repeats reduces reliability'],
    keywords: ['weakness', 'material', 'surface area', 'no repeats', 'uncontrolled', 'fair test'],
  },

  // ─── Q7 Radiation Investigation ────────────────────────────────
  'q7_a': {
    keyConcepts: ['independent variable is what is deliberately changed', 'dependent variable is what is measured'],
    keywords: ['independent variable', 'paper thickness', 'dependent variable', 'count rate'],
  },
  'q7_b': {
    keyConcepts: ['beta particle is a high-energy electron emitted from nucleus', 'beta has negative charge'],
    keywords: ['beta particle', 'electron', 'high energy', 'negative charge', 'nucleus'],
  },
  'q7_c': {
    keyConcepts: ['beta radiation is absorbed by paper', 'thicker material = lower count rate'],
    keywords: ['thickness', 'count rate', 'absorbed', 'decreases'],
  },
  'q7_d': {
    keyConcepts: ['experimental design for radiation investigation', 'range of IV values', 'baseline measurement', 'controlled source-detector distance'],
    keywords: ['five values', 'repeat', 'baseline', 'zero', 'distance', 'constant', 'same source'],
  },
  'q7_e': {
    keyConcepts: ['background radiation from natural sources', 'cosmic rays and radioactive rocks'],
    keywords: ['background radiation', 'cosmic rays', 'rocks', 'radon', 'natural'],
  },
  'q7_f': {
    keyConcepts: ['background radiation must be subtracted from experimental readings', 'net count rate'],
    keywords: ['background', 'subtract', 'net', 'count rate', 'source removed'],
  },
  'q7_g': {
    keyConcepts: ['radiation safety: time, distance, shielding', 'reduce exposure dose'],
    keywords: ['time', 'distance', 'shielding', 'lead', 'exposure', 'dose'],
  },
  'q7_h': {
    keyConcepts: ['alpha particles stopped by a few cm of air', 'alpha less penetrating than beta', 'alpha has greater mass and charge'],
    keywords: ['alpha', 'stopped by air', 'less penetrating', 'helium nucleus', 'mass', 'charge'],
  },

  // ─── Q8 Radioactive Decay ──────────────────────────────────────
  'q8_a': {
    keyConcepts: ['constructing a results table with multiple trials', 'calculating mean from repeated values', 'appropriate significant figures'],
    keywords: ['table', 'trials', 'average', 'mean', 'significant figures', 'decreasing'],
  },
  'q8_c': {
    keyConcepts: ['half-life from graph: read time at 50% remaining', 'average three half-life readings'],
    keywords: ['half-life', '50%', '25%', '12.5%', 'graph', 'average'],
  },
  'q8_d': {
    keyConcepts: ['counting half-lives to find elapsed time', 'iodine-131 half-life 8 days', '4 half-lives × 8 = 32 days'],
    keywords: ['half-lives', 'iodine-131', '8 days', '32 days', '640000', '40000'],
  },

  // ─── Q9 Oil-Fired Power Station ────────────────────────────────
  'q9_a': {
    keyConcepts: ['social and environmental impacts of power stations', 'air pollution and health'],
    keywords: ['pollution', 'smoke', 'noise', 'traffic', 'tankers', 'health', 'visual'],
  },
  'q9_b': {
    keyConcepts: ['water used for steam generation and cooling in power stations'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser', 'water'],
  },
  'q9_c': {
    keyConcepts: ['transformer: P = IV; if V doubles, I halves', 'power conservation in ideal transformer'],
    keywords: ['current', 'halves', 'voltage', 'doubles', 'P=IV', 'transformer'],
  },
  'q9_d': {
    keyConcepts: ['power line heat loss = I²R', 'step-up transformer reduces current for transmission', 'lower current reduces I²R losses'],
    keywords: ['I²R', 'heat loss', 'current', 'voltage', 'transmission', 'reduces'],
  },
  'q9_e': {
    keyConcepts: ['H₂O and CO₂ are greenhouse gases causing global warming', 'SO₂ causes acid rain via sulfuric acid formation'],
    keywords: ['greenhouse gas', 'infrared', 'global warming', 'acid rain', 'SO₂', 'H₂O', 'CO₂'],
  },
  'q9_f': {
    keyConcepts: ['electricity demand is lower at night', 'electricity cannot be economically stored at large scale', 'off-peak pricing reduces waste'],
    keywords: ['demand', 'night', 'lower', 'cannot store', 'off-peak', 'surplus', 'wasted'],
  },

  // ─── Q10 Wind Turbine & Battery Storage ────────────────────────
  'q10_a': {
    keyConcepts: ['applications requiring constant uninterrupted electricity supply'],
    keywords: ['hospital', 'water treatment', 'data centre', 'constant supply', 'critical'],
  },
  'q10_b': {
    keyConcepts: ['evaluate wind-based microgeneration system against all criteria', 'constant supply advantage of battery', 'wind: renewable but intermittent', 'economic: high capital low running cost', 'social: safety and community impacts'],
    keywords: ['constant supply', 'renewable', 'intermittent', 'battery', 'capital cost', 'running cost', 'economic', 'social', 'safety'],
  },

}
