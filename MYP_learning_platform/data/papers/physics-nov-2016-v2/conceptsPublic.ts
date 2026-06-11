import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2016_V2: Record<string, ConceptEntry> = {

  // ─── Q1 Peregrine Falcon Migration ────────────────────────────
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
    keyConcepts: ['wavelength', 'amplitude', 'compression', 'rarefaction', 'wave features'],
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
    keyConcepts: ['wave equation v = fλ', 'λ = v/f', 'speed of sound in water 1480 m/s'],
    keywords: ['v=fλ', 'wavelength', 'frequency', '1480 m/s', 'ocean', 'wave equation'],
  },
  'q2_e': {
    keyConcepts: ['infrasound has frequency below 20 Hz', 'human hearing range 20-20000 Hz'],
    keywords: ['infrasound', '20 Hz', 'frequency'],
  },
  'q2_f': {
    keyConcepts: ['diffraction allows waves to spread around obstacles underwater', 'diffraction greatest when wavelength ≥ obstacle size', 'infrasound long wavelength in water'],
    keywords: ['diffraction', 'spreading', 'wavelength', 'underwater ridge', 'low frequency'],
  },

  // ─── Q3 Refraction of Light ────────────────────────────────────
  'q3_a': {
    keyConcepts: ['refractive index indicates optical density', 'higher n = slower light'],
    keywords: ['air', 'water', 'glass', 'refractive index', 'optical density'],
  },
  'q3_b': {
    keyConcepts: ['light slows in denser medium', 'bends towards normal when entering denser medium'],
    keywords: ['speed', 'slows', 'normal', 'bends towards', 'denser', 'refractive index'],
  },

  // ─── Q4 Static Electricity ─────────────────────────────────────
  'q4_a': {
    keyConcepts: ['electron −1, proton +1, neutron 0'],
    keywords: ['electron', 'proton', 'neutron', 'charge', '-1', '+1', '0'],
  },
  'q4_b': {
    keyConcepts: ['only electrons are mobile in solids', 'friction transfers electrons', 'gaining electrons = negative charge'],
    keywords: ['electrons', 'mobile', 'friction', 'fur', 'transfer', 'negative charge'],
  },
  'q4_c': {
    keyConcepts: ['charging by friction', 'electrostatic induction', 'opposite charges attract'],
    keywords: ['friction', 'induction', 'redistribution', 'opposite charges', 'attract', 'balloon'],
  },

  // ─── Q5 Aluminium Foil Insulation Investigation ─────────────────
  'q5_a': {
    keyConcepts: ['conduction', 'convection', 'radiation'],
    keywords: ['conduction', 'convection', 'radiation'],
  },
  'q5_b': {
    keyConcepts: ['selecting appropriate measuring equipment and justification'],
    keywords: ['balance', 'mass', 'thermometer', 'stopwatch', 'equipment'],
  },
  'q5_c': {
    keyConcepts: ['aluminium foil reflects infrared radiation reducing heat transfer', 'more foil = less melting'],
    keywords: ['foil', 'reflect', 'radiation', 'insulation', 'layers', 'decreases'],
  },
  'q5_d': {
    keyConcepts: ['control variables ensure fair test', 'named variable + method + reason'],
    keywords: ['control variable', 'fair test', 'constant', 'room temperature'],
  },
  'q5_e': {
    keyConcepts: ['measure initial and final mass', '≥5 IV values', 'repeat and average'],
    keywords: ['initial mass', 'final mass', 'five values', 'repeat', 'average', 'reliable'],
  },

  // ─── Q6 Cup Cooling Investigation ──────────────────────────────
  'q6_a': {
    keyConcepts: ['evaluate data against hypothesis', 'no trend = not supported', 'cite specific data'],
    keywords: ['not supported', 'no trend', 'inconsistent', 'data evidence'],
  },
  'q6_b': {
    keyConcepts: ['experimental weaknesses', 'uncontrolled variables reduce validity', 'no repeats reduces reliability'],
    keywords: ['weakness', 'material', 'surface area', 'no repeats', 'uncontrolled'],
  },

  // ─── Q7 Radiation Investigation ────────────────────────────────
  'q7_a': {
    keyConcepts: ['IV = glass thickness', 'DV = beta count rate'],
    keywords: ['independent variable', 'glass thickness', 'dependent variable', 'count rate'],
  },
  'q7_b': {
    keyConcepts: ['beta particle is a high-energy electron from nucleus', 'negative charge'],
    keywords: ['beta particle', 'electron', 'high energy', 'negative', 'nucleus'],
  },
  'q7_c': {
    keyConcepts: ['glass absorbs beta radiation', 'thicker glass = lower count rate'],
    keywords: ['glass thickness', 'count rate', 'absorbed', 'decreases'],
  },
  'q7_d': {
    keyConcepts: ['radiation experiment design', '≥5 thickness values', 'repeat and average', 'constant distance'],
    keywords: ['five values', 'repeat', 'baseline', 'zero', 'distance', 'constant', 'same source'],
  },
  'q7_e': {
    keyConcepts: ['background radiation from natural sources'],
    keywords: ['background radiation', 'cosmic rays', 'rocks', 'radon'],
  },
  'q7_f': {
    keyConcepts: ['measure background without source', 'subtract from all readings'],
    keywords: ['background', 'subtract', 'net count rate', 'source removed'],
  },
  'q7_g': {
    keyConcepts: ['time, distance, shielding reduce radiation dose'],
    keywords: ['time', 'distance', 'shielding', 'lead', 'dose'],
  },
  'q7_h': {
    keyConcepts: ['alpha stopped by air — won\'t penetrate glass', 'alpha less penetrating due to greater mass and charge'],
    keywords: ['alpha', 'stopped by air', 'less penetrating', 'helium nucleus'],
  },

  // ─── Q8 Radioactive Decay ──────────────────────────────────────
  'q8_a': {
    keyConcepts: ['constructing results table with multiple trials', 'mean = sum/3', 'appropriate significant figures'],
    keywords: ['table', 'trials', 'average', 'mean', 'significant figures'],
  },
  'q8_c': {
    keyConcepts: ['read half-life from graph at 50%', 'average three readings', 'krypton-85'],
    keywords: ['half-life', '50%', '25%', '12.5%', 'graph', 'krypton-85', 'average'],
  },
  'q8_d': {
    keyConcepts: ['counting half-lives: 800000 → 50000 = 4 half-lives', 'Ba-140 half-life 12 days', '4 × 12 = 48 days'],
    keywords: ['half-lives', 'barium-140', '12 days', '48 days', '800000', '50000'],
  },

  // ─── Q9 Gas-Fired Power Station ────────────────────────────────
  'q9_a': {
    keyConcepts: ['social and environmental impacts of gas power stations'],
    keywords: ['pollution', 'noise', 'traffic', 'health', 'visual', 'explosion risk'],
  },
  'q9_b': {
    keyConcepts: ['water used to produce steam and for cooling in power stations'],
    keywords: ['steam', 'turbines', 'cooling', 'condenser'],
  },
  'q9_c': {
    keyConcepts: ['P = IV: voltage doubles → current halves in transformer'],
    keywords: ['current', 'halves', 'voltage', 'doubles', 'P=IV'],
  },
  'q9_d': {
    keyConcepts: ['I²R power loss', 'step-up transformer reduces current', 'lower I = less heat loss'],
    keywords: ['I²R', 'heat loss', 'current', 'voltage', 'reduces'],
  },
  'q9_e': {
    keyConcepts: ['H₂O and CO₂ cause greenhouse warming', 'NOₓ causes acid rain and smog via nitric acid'],
    keywords: ['greenhouse gas', 'global warming', 'NOx', 'acid rain', 'smog', 'nitric acid'],
  },
  'q9_f': {
    keyConcepts: ['lower night demand', 'cannot store electricity at large scale', 'off-peak pricing reduces waste'],
    keywords: ['demand', 'night', 'lower', 'cannot store', 'off-peak', 'surplus'],
  },

  // ─── Q10 Small-Scale Hydroelectric Power ──────────────────────
  'q10_a': {
    keyConcepts: ['applications requiring constant uninterrupted electricity supply'],
    keywords: ['hospital', 'water treatment', 'data centre', 'constant supply'],
  },
  'q10_b': {
    keyConcepts: ['evaluate hydroelectric microgeneration system', 'constant supply with battery storage', 'hydro: renewable consistent but geography-dependent', 'economic: high capital low running cost', 'social: safety, independence, ecological impact'],
    keywords: ['constant', 'renewable', 'consistent', 'geography', 'ecology', 'capital cost', 'running cost', 'social', 'safety'],
  },

}
