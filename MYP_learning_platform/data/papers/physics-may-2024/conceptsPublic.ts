/**
 * CLIENT-SAFE concept data for Physics May 2024.
 * keyConcepts and keywords ONLY — no exemplar answers, no feedbackHit/Miss.
 * Used by LiveKeywordTracker on the client side.
 *
 * Key format: `q{id}_{label}`  e.g. 'q1_a', 'q3_h'
 */
import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_MAY2024: Record<string, ConceptEntry> = {

  // ── Q1: Thermal Power Station ──────────────────────────────────
  q1_a: {
    keyConcepts: ['states of matter: solid/liquid/gas', 'coal = solid fuel', 'water = liquid', 'steam = gas'],
    keywords: ['water', 'steam', 'coal', 'solid', 'liquid', 'gas', 'boiler', 'cooling tower'],
  },
  q1_b: {
    keyConcepts: ['kinetic energy of molecules', 'temperature = average KE', 'heat increases molecular speed'],
    keywords: ['faster', 'vibrate', 'kinetic energy', 'molecules', 'speed', 'move'],
  },
  q1_c: {
    keyConcepts: ['latent heat', 'phase change at constant temperature', 'bonds broken', 'PE increases'],
    keywords: ['bonds', 'latent heat', 'potential energy', 'arrangement', 'disorder', 'break', 'separate', 'intermolecular'],
  },
  q1_d: {
    keyConcepts: ['energy = energy/kg × mass', 'powers of 10', '1.1 × 10¹³ J'],
    keywords: ['1.1', '10¹³', 'multiply', '2.9', '3.8', 'energy', 'joules'],
  },
  q1_e: {
    keyConcepts: ['efficiency formula', 'useful power = total × efficiency', '7875 MW'],
    keywords: ['efficiency', 'useful', 'power', '0.25', '25%', '7875', '7900', 'MW'],
  },
  q1_f: {
    keyConcepts: ['greenhouse gas arrow', 'heat energy absorbed and re-emitted'],
    keywords: ['greenhouse', 'absorbed', 're-emitted', 'heat', 'atmosphere'],
  },
  q1_g: {
    keyConcepts: ['greenhouse effect → temperature rise', 'evaporation increases', 'convection strengthens', 'extreme weather'],
    keywords: ['temperature', 'evaporation', 'convection', 'storm', 'flood', 'drought', 'kinetic energy', 'atmosphere', 'extreme'],
  },

  // ── Q2: Nuclear Fission ────────────────────────────────────────
  q2_a: {
    keyConcepts: ['protons = atomic number = 92', 'neutrons = mass number − atomic number = 143'],
    keywords: ['protons', 'neutrons', '92', '143', 'atomic number', 'mass number'],
  },
  q2_b: {
    keyConcepts: ['nucleons divided between daughter nuclei', 'conservation of nucleons', 'two free neutrons released'],
    keywords: ['divided', 'daughter', 'Cs-140', 'Rb-94', 'neutrons', 'conservation', 'total same'],
  },
  q2_c: {
    keyConcepts: ['chain reaction: one reaction causes another', 'released neutrons trigger further fissions'],
    keywords: ['one reaction', 'causes another', 'neutrons', 'trigger', 'self-sustaining', 'chain'],
  },
  q2_d: {
    keyConcepts: ['uncontrolled chain reaction', 'exponential energy increase', 'meltdown or explosion', 'radioactive contamination'],
    keywords: ['uncontrolled', 'exponential', 'meltdown', 'explosion', 'radioactive', 'fallout', 'harmful', 'environment'],
  },
  q2_e: {
    keyConcepts: ['75% decayed = 25% remaining', 'read from graph', '1400–1600 million years'],
    keywords: ['25%', 'graph', '1400', '1600', 'million years', 'remaining'],
  },
  q2_f: {
    keyConcepts: ['U-235 half-life ~700 million years', 'very long storage required', 'radiation hazard persists'],
    keywords: ['long time', 'stored safely', 'millions', 'radioactive', 'securely', 'health', 'environment', 'disposal'],
  },

  // ── Q3: Wire Resistance Investigation ──────────────────────────
  q3_a: {
    keyConcepts: ['research question format: How does IV affect DV?', 'length (IV) and resistance (DV)'],
    keywords: ['length', 'resistance', 'affect', 'how does', 'relationship', 'wire'],
  },
  q3_b: {
    keyConcepts: ['If-Then-Because hypothesis', 'longer wire = more electron collisions', 'R ∝ L', 'R = ρL/A'],
    keywords: ['length increases', 'resistance increases', 'electrons', 'collisions', 'proportional', 'ions', 'ρL/A'],
  },
  q3_c: {
    keyConcepts: ['select wires of same material and cross-sectional area but different lengths', '5 data points minimum'],
    keywords: ['nichrome', '2.5', 'different lengths', '40', '60', '80', '100', '120', 'same material'],
  },
  q3_d: {
    keyConcepts: ['fair test: only IV (length) changes', 'material and cross-sectional area are CVs'],
    keywords: ['length only', 'material constant', 'cross-sectional area', 'controlled', 'fair test', 'one variable'],
  },
  q3_e: {
    keyConcepts: ['voltmeter in parallel with component', 'ammeter in series in circuit loop'],
    keywords: ['voltmeter', 'parallel', 'ammeter', 'series', 'circuit', 'measure', 'current', 'voltage'],
  },
  q3_f: {
    keyConcepts: ["Ohm's law R = V/I", 'R = 1.5/0.24 = 6.25 Ω'],
    keywords: ['R = V/I', '6.25', '6.3', 'ohm', '1.5', '0.24', 'resistance'],
  },
  q3_g: {
    keyConcepts: ['plot (100, 6.25)', 'best fit line through/near origin', 'proportional relationship'],
    keywords: ['plot', '100', '6.25', 'line of best fit', 'origin', 'straight line'],
  },
  q3_h: {
    keyConcepts: ['wire heats up → resistance increases', 'temperature effect on resistance', 'data deviates above line'],
    keywords: ['heats up', 'temperature', 'inaccurate', 'measurement', 'fluctuate', 'contact resistance', 'higher'],
  },

  // ── Q4: Ball & Magnet ──────────────────────────────────────────
  q4_a: {
    keyConcepts: ['law of conservation of energy'],
    keywords: ['conservation', 'energy', 'law'],
  },
  q4_b: {
    keyConcepts: ['magnetic force (right)', 'normal force (up)', 'weight (down)', 'no tension or electrostatic'],
    keywords: ['magnetic force', 'normal force', 'weight', 'right', 'upward', 'downward', 'horizontal'],
  },
  q4_c: {
    keyConcepts: ['magnetic force ∝ 1/r²', 'force increases as sphere approaches', 'F=ma → acceleration increases'],
    keywords: ['magnetic force increases', 'closer', 'stronger', 'F = ma', 'acceleration increases', 'non-constant'],
  },
  q4_d: {
    keyConcepts: ['bar magnet field: lines exit N, enter S, loop around outside'],
    keywords: ['N pole', 'S pole', 'field lines', 'loop', 'curve', 'exit', 'enter'],
  },
  q4_e: {
    keyConcepts: ['magnetic potential energy released → kinetic energy of exiting sphere'],
    keywords: ['magnetic energy', 'released', 'kinetic energy', 'stored', 'transfer'],
  },
  q4_f: {
    keyConcepts: ['IV=h₁, DV=h₂', 'hypothesis using GPE conservation', 'repeat 3 times', 'safety precautions'],
    keywords: ['independent variable', 'dependent variable', 'controlled', 'hypothesis', 'repeat', 'mean', 'safety', 'GPE', 'h₁', 'h₂'],
  },
  q4_g: {
    keyConcepts: ['column headers with units', '5 IV values', '3 trial columns', 'average/mean column'],
    keywords: ['initial height', 'maximum height', 'trial', 'mean', 'average', 'units', 'cm', 'table'],
  },

  // ── Q5: Motor Effect ───────────────────────────────────────────
  q5_a: {
    keyConcepts: ['interpolate between data points', 'time at 10 A ≈ 1.87 s'],
    keywords: ['1.87', '1.85', '1.90', 'seconds', 'interpolate', '10 A'],
  },
  q5_b: {
    keyConcepts: ['s = ½at²', 'a = 2s/t²', 'a ≈ 0.11 m s⁻²', 'convert cm to m'],
    keywords: ['s = ½at²', '0.11', 'm s⁻²', 'acceleration', '0.18', '1.70', '2s/t²'],
  },
  q5_c: {
    keyConcepts: ['F = ma requires mass (kg)', 'mass ≠ weight'],
    keywords: ['mass', 'kg', 'not weight'],
  },
  q5_d: {
    keyConcepts: ['proportional relationship → straight line through origin', 'graph D is straight line'],
    keywords: ['straight line', 'origin', 'proportional', 'graph D'],
  },
  q5_e: {
    keyConcepts: ['best fit line has positive x-intercept (~4 A)', 'not through origin → not proportional'],
    keywords: ['not through origin', 'x-intercept', '4 A', 'not proportional', 'does not double'],
  },
  q5_f: {
    keyConcepts: ['at 4 A force = 0', 'rod will not move', 'frictional force prevents motion'],
    keywords: ['not move', 'zero force', 'friction', 'not strong enough', '4 A'],
  },
  q5_g: {
    keyConcepts: ['frictional force from y-intercept of extended best fit line', '2.6–2.8 mN'],
    keywords: ['2.6', '2.7', '2.8', 'mN', 'y-intercept', 'friction'],
  },

  // ── Q6: Telescopes ─────────────────────────────────────────────
  q6_a: {
    keyConcepts: ['white light = multiple wavelengths', 'different wavelengths have different refractive indices', 'colours separate (dispersion)'],
    keywords: ['wavelengths', 'frequencies', 'refractive index', 'refract differently', 'dispersion', 'separate', 'chromatic'],
  },
  q6_b: {
    keyConcepts: ['primary mirror = large curved at far end', 'secondary mirror = small flat near top', 'eyepiece at side'],
    keywords: ['primary mirror', 'secondary mirror', 'eyepiece', 'curved', 'flat', 'large', 'small'],
  },
  q6_c: {
    keyConcepts: ['Hooker telescope: 3 reflections total'],
    keywords: ['3', 'three', 'reflections'],
  },
  q6_d: {
    keyConcepts: ['Hubble observed redshift', 'galaxies moving away', 'longer wavelength = recession'],
    keywords: ['redshift', 'galaxies moving away', 'wavelength', 'receding', 'red shift'],
  },
  q6_e: {
    keyConcepts: ['no atmosphere in space', 'atmosphere causes scattering/refraction/absorption/light pollution/weather'],
    keywords: ['atmosphere', 'scattering', 'refraction', 'absorption', 'light pollution', 'weather', 'vacuum'],
  },

  // ── Q7: JWST ───────────────────────────────────────────────────
  q7_a: {
    keyConcepts: ['JWST at L2 — cannot be repaired', 'mirror alignment challenges', 'iconic Eagle Nebula image', '$10 billion cost vs military budget'],
    keywords: ['L2', 'mirror', 'challenge', 'images', 'cultural', 'cost', 'billion', 'benefit', 'evaluate', 'launch', 'social'],
  },
  q7_b: {
    keyConcepts: ['biosignatures: water, O₂, ozone, CH₄, CO₂', 'limitation: white dwarf host stars only', 'only 34 known within 40 light-years'],
    keywords: ['biosignatures', 'exoplanet', 'white dwarf', 'limitation', 'benefit', 'water', 'oxygen', '34 stars', '40 light-years', 'ozone'],
  },
}
