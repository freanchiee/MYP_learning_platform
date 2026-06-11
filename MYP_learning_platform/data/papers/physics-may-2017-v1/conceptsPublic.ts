import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2017_V1: Record<string, ConceptEntry> = {
  // Q1 — Star colours
  q1_a: { keyConcepts: ['electromagnetic spectrum', 'wave speed', 'wavelength', 'frequency'], keywords: ['speed of light', 'c', 'wavelength', 'frequency', 'red', 'blue', 'equal'] },
  q1_b: { keyConcepts: ['star surface temperature', 'red dwarf', 'Proxima Centauri'], keywords: ['3200', '°C', 'red dwarf', 'temperature', 'less than'] },
  q1_c: { keyConcepts: ['star colour and temperature', 'black body radiation'], keywords: ['blue', '15000', '°C', 'hot star', 'colour'] },

  // Q2 — White light & UV fluorescence
  q2_a: { keyConcepts: ['white light', 'dispersion', 'refraction', 'prism'], keywords: ['mixture', 'colours', 'frequencies', 'refract', 'dispersion', 'spectrum'] },
  q2_b: { keyConcepts: ['UV fluorescence', 'energy absorption', 'electron excitation', 'visible emission'], keywords: ['UV', 'absorbed', 'excites', 'electrons', 'visible light', 'fluorescence'] },
  q2_c: { keyConcepts: ['photon energy', 'E = hf', 'UV beyond visible spectrum', 'fluorescent card'], keywords: ['photon energy', 'UV', 'beyond violet', 'frequency', 'higher energy', 'fluorescence'] },

  // Q3 — Telescopes & Sirius
  q3_a: { keyConcepts: ['long-exposure photography', 'motion blur', 'reflection'], keywords: ['arc', 'trail', 'spinning mirror', 'long-exposure'] },
  q3_b: { keyConcepts: ['reflecting telescope', 'concave mirror', 'focal point', 'ray diagram'], keywords: ['focal point', 'converge', 'reflect', 'arrows', 'concave mirror'] },
  q3_c: { keyConcepts: ['Earth rotation', 'apparent stellar motion', 'star trails'], keywords: ['Earth rotating', 'axis', 'star trails', 'apparent motion'] },
  q3_d: { keyConcepts: ['celestial pole', 'Sigma Octantis', 'Earth rotation axis'], keywords: ['south pole', 'axis', 'rotation', 'stationary', 'Sigma Octantis'] },
  q3_e: { keyConcepts: ['angular resolution', 'telescope magnification', 'resolving power'], keywords: ['resolve', 'distinct', 'magnification', 'angular separation', 'telescope'] },
  q3_f: { keyConcepts: ['light year to metres', 'distance calculation', 'speed of light'], keywords: ['light year', '9.45 × 10¹⁵', 'Sirius', '8.7', '8.3 × 10¹⁶', 'm'] },
  q3_g: { keyConcepts: ['standard form', 'scientific notation'], keywords: ['standard form', '10¹⁶', 'A × 10ⁿ', 'significant figures'] },

  // Q4 — Exoplanet habitable zone
  q4_a: { keyConcepts: ['transit method', 'exoplanet detection', 'brightness dip'], keywords: ['opaque', 'transit', 'brightness dip', 'light blocked', 'periodic'] },
  q4_b: { keyConcepts: ['non-luminous bodies', 'reflected light', 'planet vs star brightness'], keywords: ['non-luminous', 'reflected light', 'faint', 'does not emit', 'transit'] },
  q4_c: { keyConcepts: ['habitable zone', 'radiation flux', 'liquid water', 'orbital distance'], keywords: ['too hot', 'evaporate', 'radiation', 'liquid water', 'boil', '0.05 AU'] },
  q4_d: { keyConcepts: ['stellar luminosity', 'habitable zone distance', 'energy output'], keywords: ['luminous', 'energy', 'further away', 'blue star', 'habitable zone'] },

  // Q5 — Steel ball ramp
  q5_a: { keyConcepts: ['energy conservation', 'GPE = KE', 'frictionless ramp'], keywords: ['GPE', 'KE', 'gravitational potential energy', 'kinetic energy', 'conservation'] },
  q5_b: { keyConcepts: ['GPE formula', 'mgh', 'energy calculation'], keywords: ['GPE', 'mgh', '0.30', '10', '0.45', '1.35 J'] },
  q5_c: { keyConcepts: ['scientific question formation', 'IV and DV'], keywords: ['height', 'distance', 'affect', 'question', 'IV', 'DV'] },
  q5_d: { keyConcepts: ['hypothesis', 'scientific prediction', 'GPE→KE→distance'], keywords: ['hypothesis', 'height', 'distance increases', 'GPE', 'KE', 'quantitative'] },
  q5_e: { keyConcepts: ['variable classification', 'IV', 'DV', 'controlled variables'], keywords: ['independent', 'dependent', 'controlled', 'height', 'distance', 'surface', 'mass'] },
  q5_f: { keyConcepts: ['friction', 'minimum force', 'threshold height'], keywords: ['friction', 'too shallow', 'cannot overcome', 'driving force', 'threshold'] },
  q5_g: { keyConcepts: ['laboratory safety', 'risk assessment', 'secure equipment'], keywords: ['clamp', 'secure', 'barrier', 'path', 'safety precaution'] },
  q5_h: { keyConcepts: ['data collection plan', 'range and interval', 'repeats'], keywords: ['range', 'evenly spaced', 'repeats', 'mean', 'heights', '5 values'] },
  q5_i: { keyConcepts: ['linear vs proportional', 'graph shape', 'x-intercept'], keywords: ['linear', 'not proportional', 'x-intercept', 'straight line', 'not through origin'] },
  q5_j: { keyConcepts: ['graph reading', 'x-intercept value'], keywords: ['x-intercept', '0.13', '0.15', '0.17', 'read', 'graph'] },
  q5_k: { keyConcepts: ['x-intercept physical meaning', 'minimum height', 'friction threshold'], keywords: ['minimum height', 'x-intercept', 'friction', 'all KE lost', 'cannot reach flat'] },
  q5_l: { keyConcepts: ['method evaluation', 'data sufficiency', 'valid conclusion'], keywords: ['sufficient data', 'method', 'evaluate', 'conclusion', 'valid'] },

  // Q6 — Alternative ramp investigation
  q6_a: { keyConcepts: ['alternative scientific question', 'new IV'], keywords: ['alternative', 'mass', 'surface', 'angle', 'question', 'distance'] },
  q6_b: { keyConcepts: ['hypothesis', 'friction', 'kinetic energy', 'quantitative prediction'], keywords: ['hypothesis', 'friction', 'distance', 'increases or decreases', 'quantitative'] },
  q6_c: { keyConcepts: ['variable identification', 'IV', 'controlled variables'], keywords: ['independent', 'controlled', 'height', 'mass', 'surface', 'control'] },
  q6_d: { keyConcepts: ['data plan', '5+ values', 'repeats'], keywords: ['5 values', 'repeats', 'conditions', 'data plan'] },

  // Q7 — Rectangular sail
  q7_a: { keyConcepts: ['stopping distance measurement', 'tape measurement'], keywords: ['stopping distance', '4.55', 'm', 'read', 'tape'] },
  q7_b: { keyConcepts: ['data table', 'headers with units', 'consistent decimal places'], keywords: ['table', 'headers', 'units', 'ordered', 'decimal places', 'width', 'sail'] },
  q7_c: { keyConcepts: ['scatter graph', 'continuous data', 'line of best fit'], keywords: ['scatter graph', 'continuous', 'line of best fit', 'relationship'] },

  // Q8 — Sail analysis
  q8_d: { keyConcepts: ['inverse relationship', 'drag vs width'], keywords: ['inverse', 'decreases', 'width increases', 'not proportional'] },
  q8_e: { keyConcepts: ['d ∝ 1/W', 'graph 3', 'straight line through origin'], keywords: ['1/W', 'proportional', 'graph 3', 'straight line', 'origin'] },
  q8_f: { keyConcepts: ['drag force mechanism', 'cross-sectional area', 'air resistance'], keywords: ['area', 'drag', 'air resistance', 'deceleration', 'shorter', 'collisions'] },
  q8_g: { keyConcepts: ['graph evaluation', 'd ∝ 1/W not 1/W²', 'hypothesis assessment'], keywords: ['1/W²', 'not straight line', '1/W', 'graph 3', 'd ∝ 1/W'] },

  // Q9 — Titanium vs Carbon fibre
  q9_a: { keyConcepts: ['Young\'s modulus', 'stiffness', 'material comparison'], keywords: ['titanium alloy', 'stiffest', 'E = 110 GPa', 'Young\'s modulus', 'most rigid'] },
  q9_b: { keyConcepts: ['material limitation', 'stiffness requirements', 'UHMWPE'], keywords: ['UHMWPE', 'E = 0.7 GPa', 'too flexible', 'deforms', 'low stiffness'] },
  q9_c: { keyConcepts: ['material selection', 'stiffness vs density', 'prosthetics performance'], keywords: ['stiffness', 'density', 'titanium', 'carbon fibre', 'lighter', 'recommend'] },

  // Q10 — Exoskeleton ethics
  q10_a: { keyConcepts: ['ethics of technology', 'mechanical advantage', 'access inequality', 'rehabilitation'], keywords: ['ethical', 'advantage', 'fairness', 'rehabilitation', 'social', 'access', 'inequality', 'conclusion'] },

  // Q11 — Hippopotamus pressure
  q11_a: { keyConcepts: ['pressure = force / area', 'P = F/A', 'weight calculation'], keywords: ['P = F/A', 'weight', 'mg', '2000', '5000', '0.04', '125000', 'Pa'] },
  q11_b: { keyConcepts: ['pressure distribution', 'contact area', 'prosthesis design', 'P = F/A'], keywords: ['contact area', 'large area', 'low pressure', 'P = F/A', 'ground', 'limb', 'sores'] },
}
