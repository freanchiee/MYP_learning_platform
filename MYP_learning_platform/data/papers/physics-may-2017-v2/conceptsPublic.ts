import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2017_V2: Record<string, ConceptEntry> = {
  // Q1 — Star colours (Mu Cephei)
  q1_a: { keyConcepts: ['electromagnetic spectrum', 'wave speed', 'wavelength', 'frequency'], keywords: ['speed of light', 'c', 'wavelength', 'frequency', 'red', 'blue', 'equal'] },
  q1_b: { keyConcepts: ['star surface temperature', 'red supergiant', 'Mu Cephei'], keywords: ['3200', '°C', 'red supergiant', 'temperature', 'less than'] },
  q1_c: { keyConcepts: ['star colour and temperature', 'black body radiation'], keywords: ['blue', '25000', '°C', 'hot star', 'colour'] },

  // Q2 — White light & IR thermometer
  q2_a: { keyConcepts: ['white light', 'dispersion', 'refraction', 'prism'], keywords: ['mixture', 'colours', 'frequencies', 'refract', 'dispersion', 'spectrum'] },
  q2_b: { keyConcepts: ['infrared radiation', 'energy absorption', 'temperature rise', 'IR thermometer'], keywords: ['infrared', 'absorbed', 'temperature rise', 'kinetic energy', 'sensor'] },
  q2_c: { keyConcepts: ['IR energy distribution', 'spectrum analysis', 'peak temperature region'], keywords: ['infrared', 'beyond red', 'highest temperature', 'increases', 'violet to red'] },

  // Q3 — Southern Observatory & Alpha Centauri
  q3_a: { keyConcepts: ['long-exposure photography', 'motion blur', 'rotating mirror'], keywords: ['arc', 'streak', 'rotating mirror', 'long-exposure'] },
  q3_b: { keyConcepts: ['reflecting telescope', 'concave mirror', 'focal point', 'ray diagram'], keywords: ['focal point', 'converge', 'reflect', 'arrows', 'concave'] },
  q3_c: { keyConcepts: ['Earth rotation', 'apparent stellar motion', 'star trails', 'southern hemisphere'], keywords: ['Earth rotating', 'axis', 'star trails', 'apparent motion', 'southern'] },
  q3_d: { keyConcepts: ['celestial south pole', 'Sigma Octantis', 'rotation axis'], keywords: ['south pole', 'axis', 'rotation', 'stationary', 'Sigma Octantis'] },
  q3_e: { keyConcepts: ['angular resolution', 'telescope magnification', 'resolving power'], keywords: ['resolve', 'distinct', 'magnification', 'angular separation', 'telescope'] },
  q3_f: { keyConcepts: ['light year to metres', 'distance calculation', 'speed of light', 'Alpha Centauri'], keywords: ['light year', '9.45 × 10¹⁵', 'Alpha Centauri', '4.2', '4.0 × 10¹⁶', 'm'] },
  q3_g: { keyConcepts: ['standard form', 'scientific notation'], keywords: ['standard form', '10¹⁶', 'A × 10ⁿ', 'significant figures'] },

  // Q4 — Kepler-452 habitable zone
  q4_a: { keyConcepts: ['transit method', 'exoplanet detection', 'brightness dip'], keywords: ['opaque', 'transit', 'brightness dip', 'light blocked', 'periodic'] },
  q4_b: { keyConcepts: ['non-luminous bodies', 'reflected light', 'planet vs star brightness'], keywords: ['non-luminous', 'reflected', 'faint', 'does not emit', 'transit'] },
  q4_c: { keyConcepts: ['habitable zone', 'radiation flux', 'liquid water', 'orbital distance'], keywords: ['too hot', 'evaporate', 'radiation', 'liquid water', 'boil', '0.05 AU'] },
  q4_d: { keyConcepts: ['stellar luminosity', 'habitable zone shift', 'red dwarf', 'energy output'], keywords: ['less energy', 'closer', 'red dwarf', 'habitable zone', 'luminosity'] },

  // Q5 — Toy car ramp
  q5_a: { keyConcepts: ['energy conservation', 'GPE = KE', 'frictionless ramp'], keywords: ['GPE', 'KE', 'gravitational potential energy', 'kinetic energy', 'conservation'] },
  q5_b: { keyConcepts: ['GPE formula', 'mgh', 'energy calculation'], keywords: ['GPE', 'mgh', '0.20', '10', '0.80', '1.60 J'] },
  q5_c: { keyConcepts: ['scientific question formation', 'IV and DV'], keywords: ['height', 'distance', 'affect', 'question', 'IV', 'DV'] },
  q5_d: { keyConcepts: ['hypothesis', 'scientific prediction', 'GPE→KE→distance'], keywords: ['hypothesis', 'height', 'distance increases', 'GPE', 'KE', 'quantitative'] },
  q5_e: { keyConcepts: ['variable classification', 'IV', 'DV', 'controlled variables'], keywords: ['independent', 'dependent', 'controlled', 'height', 'distance', 'surface', 'mass'] },
  q5_f: { keyConcepts: ['friction', 'minimum force', 'threshold height'], keywords: ['friction', 'too shallow', 'cannot overcome', 'driving force', 'threshold'] },
  q5_g: { keyConcepts: ['laboratory safety', 'risk assessment', 'secure equipment'], keywords: ['clamp', 'secure', 'barrier', 'path', 'safety precaution'] },
  q5_h: { keyConcepts: ['data collection plan', 'range and interval', 'repeats'], keywords: ['range', 'evenly spaced', 'repeats', 'mean', 'heights', '5 values'] },
  q5_i: { keyConcepts: ['linear vs proportional', 'graph shape', 'x-intercept'], keywords: ['linear', 'not proportional', 'x-intercept', 'straight line', 'not through origin'] },
  q5_j: { keyConcepts: ['graph reading', 'x-intercept value'], keywords: ['x-intercept', '0.18', '0.20', '0.22', 'read', 'graph'] },
  q5_k: { keyConcepts: ['x-intercept physical meaning', 'minimum height', 'friction threshold'], keywords: ['minimum height', 'x-intercept', 'friction', 'all KE lost', 'cannot reach flat'] },
  q5_l: { keyConcepts: ['method evaluation', 'data sufficiency', 'valid conclusion'], keywords: ['sufficient data', 'method', 'evaluate', 'conclusion', 'valid'] },

  // Q6 — Alternative ramp investigation (surface material)
  q6_a: { keyConcepts: ['alternative scientific question', 'new IV (surface material)'], keywords: ['surface material', 'alternative', 'question', 'distance'] },
  q6_b: { keyConcepts: ['hypothesis', 'friction', 'kinetic energy', 'quantitative prediction'], keywords: ['hypothesis', 'rougher', 'friction', 'distance decreases', 'quantitative'] },
  q6_c: { keyConcepts: ['variable identification', 'IV', 'controlled variables'], keywords: ['independent', 'controlled', 'height', 'mass', 'length', 'control'] },
  q6_d: { keyConcepts: ['data plan', '5+ conditions', 'repeats'], keywords: ['5 conditions', 'repeats', 'surfaces', 'data plan'] },

  // Q7 — Cone drag device
  q7_a: { keyConcepts: ['stopping distance measurement', 'tape measurement'], keywords: ['stopping distance', '7.32', 'm', 'read', 'tape'] },
  q7_b: { keyConcepts: ['data table', 'headers with units', 'consistent decimal places'], keywords: ['table', 'headers', 'units', 'ordered', 'decimal places', 'radius', 'cone'] },
  q7_c: { keyConcepts: ['scatter graph', 'continuous data', 'line of best fit'], keywords: ['scatter graph', 'continuous', 'line of best fit', 'relationship'] },

  // Q8 — Cone drag analysis
  q8_d: { keyConcepts: ['inverse relationship', 'drag vs radius'], keywords: ['inverse', 'decreases', 'radius increases', 'not proportional'] },
  q8_e: { keyConcepts: ['d ∝ 1/R', 'graph 3', 'straight line through origin'], keywords: ['1/R', 'proportional', 'graph 3', 'straight line', 'origin'] },
  q8_f: { keyConcepts: ['drag force mechanism', 'cross-sectional area', 'air resistance'], keywords: ['area', 'drag', 'air resistance', 'deceleration', 'shorter', 'collisions'] },
  q8_g: { keyConcepts: ['graph evaluation', 'd ∝ 1/R not 1/R²', 'hypothesis assessment'], keywords: ['1/R²', 'not straight line', '1/R', 'graph 3', 'd ∝ 1/R'] },

  // Q9 — Stainless steel vs Carbon fibre
  q9_a: { keyConcepts: ['Young\'s modulus', 'stiffness', 'material comparison'], keywords: ['stainless steel', 'stiffest', 'E = 200 GPa', 'Young\'s modulus', 'most rigid'] },
  q9_b: { keyConcepts: ['material limitation', 'stiffness requirements', 'nylon'], keywords: ['nylon', 'E = 3.0 GPa', 'too flexible', 'deforms', 'low stiffness'] },
  q9_c: { keyConcepts: ['material selection', 'stiffness vs density', 'prosthetics performance'], keywords: ['stiffness', 'density', 'stainless steel', 'carbon fibre', 'lighter', 'recommend'] },

  // Q10 — Gene editing ethics
  q10_a: { keyConcepts: ['ethics of gene editing', 'DNA modification', 'competitive fairness', 'access inequality'], keywords: ['DNA', 'irreversible', 'undetectable', 'unfair', 'global inequality', 'therapeutic', 'prohibit', 'conclusion'] },

  // Q11 — Rhinoceros pressure
  q11_a: { keyConcepts: ['pressure = force / area', 'P = F/A', 'weight calculation'], keywords: ['P = F/A', 'weight', 'mg', '3000', '7500', '0.04', '187500', 'Pa'] },
  q11_b: { keyConcepts: ['pressure distribution', 'contact area', 'prosthesis design', 'P = F/A'], keywords: ['contact area', 'large area', 'low pressure', 'P = F/A', 'ground', 'limb', 'sores'] },
}
