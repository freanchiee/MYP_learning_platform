import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2022_V1: Record<string, ConceptEntry> = {

  // ── Q1: Nuclear Fission & Radioactive Decay (Fermi 1942 context) ─
  q1_a: {
    keyConcepts: ['isotopes have the same atomic number but different mass numbers', 'atomic number = number of protons', 'neutron number differs between isotopes'],
    keywords: ['isotope', 'atomic number', 'neutron', 'proton', 'uranium'],
  },
  q1_b: {
    keyConcepts: ['conservation of nucleon number in nuclear reactions', 'conservation of proton number in nuclear reactions', 'balancing nuclear equations'],
    keywords: ['nuclear equation', 'nucleon number', 'proton number', 'fission products', 'krypton'],
  },
  q1_c: {
    keyConcepts: ['half-life is the time for activity to decrease to half its initial value', 'reading half-life from an activity-time graph'],
    keywords: ['half-life', 'radioactive decay', 'activity', 'graph reading', 'barium-141'],
  },
  q1_d: {
    keyConcepts: ['converting units between MJ and J', 'dividing energy requirement by energy per gram to find mass'],
    keywords: ['energy calculation', 'unit conversion', 'fission', 'mass of uranium', '1.35 × 10¹⁰ J', '0.165 g'],
  },
  q1_e: {
    keyConcepts: ['collaboration in science combines different expertise', 'interdisciplinary science solves complex problems'],
    keywords: ['collaboration', 'different skills', 'teamwork', 'physics', 'chemistry', 'engineering'],
  },

  // ── Q2: Thermal Energy & States of Matter ───────────────────────
  q2_a: {
    keyConcepts: ['melting and boiling require heat energy input (endothermic)', 'freezing and condensing release heat energy (exothermic)'],
    keywords: ['melting', 'boiling', 'freezing', 'condensing', 'state change', 'heat energy'],
  },
  q2_b: {
    keyConcepts: ['evaporation and boiling are both vaporisation (liquid to gas)', 'evaporation occurs at any temperature from the surface; boiling occurs at a fixed temperature throughout the liquid'],
    keywords: ['evaporation', 'boiling', 'vaporisation', 'surface', 'temperature', 'bubbles'],
  },
  q2_c: {
    keyConcepts: ['greater evaporation causes greater cooling effect', 'cooking oil does not evaporate readily; ethanol evaporates readily'],
    keywords: ['cooling effect', 'evaporation rate', 'ethanol', 'cooking oil', 'graph analysis'],
  },
  q2_d: {
    keyConcepts: ['a non-evaporating reference liquid maintains ambient (laboratory) temperature'],
    keywords: ['laboratory temperature', 'ambient', 'reference', 'cooking oil', 'steady state'],
  },
  q2_e: {
    keyConcepts: ['greater cooling effect indicates greater latent heat of vaporisation', 'linking experimental evidence to a claim about energy requirements'],
    keywords: ['latent heat', 'latent heat of vaporisation', 'cooling effect', 'justification', 'evidence'],
  },

  // ── Q3: Astrophysics (Enceladus / Cassini 2005) ─────────────────
  q3_a: {
    keyConcepts: ['moons orbit planets and do not emit their own light', 'stars emit light via nuclear fusion and are not in orbit around planets'],
    keywords: ['moon', 'star', 'orbit', 'light emission', 'nuclear fusion', 'reflection'],
  },
  q3_b: {
    keyConcepts: ['geocentric model states everything orbits Earth', 'moons of Jupiter orbiting a different planet disproves geocentrism'],
    keywords: ['geocentric', 'heliocentric', 'orbit', 'evidence', 'Jupiter', 'Galileo'],
  },
  q3_c: {
    keyConcepts: ['liquid water is a prerequisite for life as we know it', 'astrobiology searches for habitable conditions'],
    keywords: ['liquid water', 'life', 'habitability', 'astrobiology', 'Enceladus', 'Saturn'],
  },
  q3_d: {
    keyConcepts: ['all EM waves travel at 3 × 10⁸ m/s in vacuum', 'all EM waves are transverse waves and can travel through a vacuum'],
    keywords: ['electromagnetic spectrum', 'transverse wave', 'speed of light', 'vacuum', 'c = 3 × 10⁸ m/s'],
  },

  // ── Q4: Motor Investigation Planning (warehouse hoist) ──────────
  q4_a: {
    keyConcepts: ['electric motors produce waste heat due to resistance and mechanical friction', 'sound is also a form of wasted energy'],
    keywords: ['wasted energy', 'heat', 'sound', 'motor', 'resistance', 'friction'],
  },
  q4_b: {
    keyConcepts: ['a research question links an independent variable to a dependent variable (efficiency)'],
    keywords: ['research question', 'independent variable', 'dependent variable', 'efficiency', 'motor'],
  },
  q4_c: {
    keyConcepts: ['gravitational potential energy ΔEp = mgh', 'varying height gives different useful energy outputs'],
    keywords: ['ΔEp', 'mgh', 'height', 'independent variable', 'useful energy', 'gravitational potential energy'],
  },
  q4_d: {
    keyConcepts: ['ammeter must be in series to measure current', 'voltmeter must be in parallel to measure voltage across a component'],
    keywords: ['ammeter', 'series', 'voltmeter', 'parallel', 'circuit diagram', 'motor'],
  },
  q4_e: {
    keyConcepts: ['total energy = power × time = V × I × t', 'time must be measured to calculate total energy'],
    keywords: ['time', 'total energy', 'E = Pt', 'E = VIt', 'power', 'energy calculation'],
  },

  // ── Q5: Investigation Design (construction site hoist) ──────────
  q5_a: {
    keyConcepts: ['investigation design requires IV, DV, justified control variables, detailed method, data processing plan', 'efficiency = (useful energy ÷ total energy) × 100', 'control variables isolate the effect of the independent variable'],
    keywords: ['investigation design', 'independent variable', 'control variable', 'efficiency', 'mgh', 'VIt', 'method', 'validity'],
  },

  // ── Q6: Data Processing (masses 20/40/60/80/100 g; q6a: 60 g) ──
  q6_a: {
    keyConcepts: ['gravitational potential energy ΔEp = mgh', 'convert mass to kg and height to metres before substituting'],
    keywords: ['ΔEp', 'mgh', '9.81', 'unit conversion', 'kg', 'metres', '0.060 kg', '0.56 J'],
  },
  q6_b: {
    keyConcepts: ['keeping voltage constant ensures validity by isolating the independent variable (mass)', 'changing the IV alone allows a fair comparison'],
    keywords: ['control variable', 'voltage', 'validity', 'fair test', 'isolate', 'mass'],
  },
  q6_c: {
    keyConcepts: ['data tables require units in column headers only', 'data should be organised in increasing order of the independent variable'],
    keywords: ['table', 'column headers', 'units', 'increasing order', 'data organisation', 'Mass/g', 'Current/A', 'Time/s'],
  },
  q6_d: {
    keyConcepts: ['total energy input = V × I × t', 'efficiency = (useful energy ÷ total energy) × 100'],
    keywords: ['VIt', 'total energy', 'efficiency', 'calculation', '100 g', '0.23 A', '6.12 s', '33.1%'],
  },

  // ── Q7: Projectile Motion (toy catapult) ────────────────────────
  q7_a: {
    keyConcepts: ['a line of best fit minimises the total distance of data points above and below the line', 'outliers lie significantly away from the LOBF'],
    keywords: ['line of best fit', 'LOBF', 'outlier', 'scatter graph', 'Graph D'],
  },
  q7_b: {
    keyConcepts: ['y-intercept of a graph gives the DV value when IV = 0', 'x-intercept gives the IV value when DV = 0'],
    keywords: ['intercept', 'y-intercept', 'x-intercept', 'graph reading', 'line of best fit'],
  },
  q7_c: {
    keyConcepts: ['inverse proportion requires the product of IV and DV to be constant and the graph to pass through the origin', 'a non-zero y-intercept rules out direct inverse proportion'],
    keywords: ['inverse proportion', 'origin', 'intercept', 'doubling', 'halving', 'prediction validity'],
  },
  q7_d: {
    keyConcepts: ['measuring height of a moving ball is a major source of random error', 'angle is set before release so is less prone to error'],
    keywords: ['source of error', 'random error', 'height measurement', 'moving ball', 'ruler'],
  },
  q7_e: {
    keyConcepts: ['repeated trials reduce the impact of random errors and identify outliers', 'mean of repeated trials is more reliable'],
    keywords: ['repeated trials', 'mean', 'reliability', 'outlier', 'random error'],
  },
  q7_f: {
    keyConcepts: ['air resistance opposes motion and reduces the height a projectile reaches', 'energy is transferred to heat by air resistance, reducing GPE gained'],
    keywords: ['air resistance', 'opposing force', 'height decreased', 'energy dissipation', 'heat', 'deceleration'],
  },
  q7_g: {
    keyConcepts: ['streamlined shapes reduce drag by allowing air to flow around the object', 'smaller surface area reduces the number of air particle collisions', 'greater mass reduces the proportional effect of air resistance'],
    keywords: ['streamlined', 'surface area', 'air particles', 'collisions', 'dense', 'mass', 'particle theory'],
  },
  q7_h: {
    keyConcepts: ['time of flight and horizontal range are measurable dependent variables in projectile motion', 'launch speed and object mass are key control variables'],
    keywords: ['time of flight', 'horizontal range', 'dependent variable', 'control variable', 'launch speed', 'catapult'],
  },

  // ── Q8: Ultrasound (speed=1540 m/s, t=1.2×10⁻⁴ s → 9.2 cm) ───
  q8_a: {
    keyConcepts: ['distance = speed × time', 'ultrasound echo travels to the target and back, so halve the total distance'],
    keywords: ['d = vt', 'echo', 'ultrasound', 'one-way distance', 'reflection', '1540 m/s', '9.2 cm'],
  },
  q8_b: {
    keyConcepts: ['ultrasound uses reflection of sound to create images; x-rays use differential absorption of EM waves', 'ionising radiation (x-rays) carries health risks; ultrasound is believed to be harmless', 'economic and ethical trade-offs guide medical decisions'],
    keywords: ['ultrasound', 'x-ray', 'reflection', 'absorption', 'ionising radiation', 'cancer risk', 'ethics', 'cost', 'evaluation'],
  },
  q8_c: {
    keyConcepts: ['sex ratio imbalance has social, economic and demographic consequences', 'governments can legislate or educate to address ethical problems in medical practice'],
    keywords: ['sex ratio', 'termination', 'ethics', 'legislation', 'education', 'population', 'societal impact'],
  },
}
