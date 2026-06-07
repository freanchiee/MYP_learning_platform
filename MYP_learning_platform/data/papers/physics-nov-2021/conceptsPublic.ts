import type { ConceptEntry } from '@/data/papers/physics-nov-2023/conceptsPublic'

export const CONCEPTS_PUBLIC_NOV2021: Record<string, ConceptEntry> = {

  // ── Q1: Kinetic Theory & Brownian Motion ───────────────────
  q1_a: {
    keyConcepts: ['smoke particles are visible under a microscope', 'air molecules are too small to be seen but constantly move'],
    keywords: ['smoke particle', 'air molecule', 'visible', 'microscope', 'Brownian motion'],
  },
  q1_b: {
    keyConcepts: ['higher temperature → particles have greater kinetic energy → move faster', 'faster particles collide more forcefully with container walls'],
    keywords: ['temperature', 'kinetic energy', 'faster', 'collisions', 'particles'],
  },
  q1_c: {
    keyConcepts: ['heating gas → greater kinetic energy → faster particles', 'more frequent and harder wall collisions → greater pressure'],
    keywords: ['kinetic energy', 'faster particles', 'collisions', 'frequency', 'force', 'pressure'],
  },
  q1_d: {
    keyConcepts: ['air molecules constantly move despite being invisible', 'collisions with larger smoke particles cause random motion'],
    keywords: ['air molecules', 'random motion', 'collide', 'smoke particles', 'invisible', 'kinetic theory'],
  },

  // ── Q2: Energy & E = mc² ───────────────────────────────────
  q2_a: {
    keyConcepts: ['E = mc²: E in joules, m in kilograms, c in m s⁻¹', 'SI units must be stated correctly'],
    keywords: ['joule', 'kilogram', 'metre per second', 'SI unit', 'E = mc²'],
  },
  q2_b: {
    keyConcepts: ['conservation of energy: total input = sum of all outputs', 'Sankey diagram: arrow width represents energy value', 'gravitational potential energy stored as child descends'],
    keywords: ['Sankey diagram', 'gravitational potential', 'conservation of energy', 'energy transformation'],
  },
  q2_c: {
    keyConcepts: ['KE = ½mv²', 'rearrange: v = √(2KE/m)', 'give answer to 2 significant figures'],
    keywords: ['KE = ½mv²', 'velocity', '2 significant figures', 'kinetic energy', 'mass'],
  },
  q2_d: {
    keyConcepts: ['E = mc²: total mass converts to energy', 'annihilation: electron + positron → energy only', 'total mass = sum of both particle masses'],
    keywords: ['E = mc²', 'annihilation', 'electron', 'positron', 'total mass', 'speed of light'],
  },

  // ── Q3: Red-Shift & Hubble's Law ───────────────────────────
  q3_a: {
    keyConcepts: ['light is a transverse electromagnetic wave', 'not mechanical — travels through vacuum'],
    keywords: ['transverse', 'electromagnetic', 'light wave', 'not mechanical'],
  },
  q3_b: {
    keyConcepts: ['Doppler effect: source moving away → wavelength increases', 'longer wavelength = red-shift', 'frequency decreases when wavelength increases'],
    keywords: ['wavelength stretched', 'source moving away', 'Doppler effect', 'longer wavelength', 'red-shift'],
  },
  q3_c: {
    keyConcepts: ['red-shift = increase in wavelength of light from distant stars', 'red light has the longest wavelength in the visible spectrum', 'stars moving away appear redder'],
    keywords: ['wavelength increased', 'red end', 'spectrum', 'moving away', 'red-shift', 'redder'],
  },
  q3_d: {
    keyConcepts: ['line of best fit: straight line through origin with equal points above/below', 'Hubble\'s law graph passes through origin (v ∝ d)'],
    keywords: ['line of best fit', 'origin', 'LOBF', 'scatter graph', 'equal distribution'],
  },
  q3_e: {
    keyConcepts: ['Hubble\'s law: velocity ∝ distance', 'proportional relationship → straight line through origin'],
    keywords: ['distance increases', 'velocity increases', 'proportional', 'straight line', 'origin'],
  },
  q3_f: {
    keyConcepts: ['origin of Hubble graph → all matter once at same point (Big Bang)', 'galaxies moving apart → universe is expanding'],
    keywords: ['Big Bang', 'origin', 'expanding universe', 'same point', 'galaxies moving apart'],
  },
  q3_g: {
    keyConcepts: ['more data → more accurate line of best fit → more reliable gradient → better age estimate'],
    keywords: ['more data', 'reliable', 'estimate', 'gradient', 'Hubble constant', 'age of universe'],
  },

  // ── Q4: Ohm's Law & Non-Ohmic Conductors ──────────────────
  q4_a: {
    keyConcepts: ['data table: headers with quantity and unit', 'units in headers only', 'ascending order of IV', '601 mA = 0.601 A', 'consistent decimal places'],
    keywords: ['Voltage / V', 'Current / A', 'ascending order', 'mA to A', 'headers', 'units'],
  },
  q4_b: {
    keyConcepts: ['test hypothesis: doubling V should double I for ohmic conductor', 'calculate V/I ratios to verify proportionality', 'identify anomalous values'],
    keywords: ['double voltage', 'double current', 'proportional', 'hypothesis', 'calculation', 'anomaly'],
  },
  q4_c: {
    keyConcepts: ['ohmic conductor: straight I-V graph', 'non-ohmic conductor: curved/non-linear I-V graph', 'non-constant gradient = non-proportional'],
    keywords: ['non-linear', 'curved', 'non-ohmic', 'gradient not constant', 'Ohm\'s law'],
  },
  q4_d: {
    keyConcepts: ['graphs show relationships more clearly than tables', 'easier to identify linear vs non-linear patterns visually'],
    keywords: ['visual representation', 'easier', 'graph', 'relationship', 'linear', 'pattern'],
  },
  q4_e: {
    keyConcepts: ['R = V/I', 'read V or I from graph for given condition', 'non-ohmic: resistance varies with current'],
    keywords: ['R = V/I', 'resistance', 'ohms', 'graph reading', '5.0 Ω', '15 Ω'],
  },
  q4_f: {
    keyConcepts: ['ammeter in series measures current', 'series circuit: one current path through all components', 'circuit diagram symbols'],
    keywords: ['series circuit', 'ammeter', 'circuit diagram', 'bulbs', 'current'],
  },

  // ── Q5: Resistance of a Wire ───────────────────────────────
  q5_a: {
    keyConcepts: ['R = ρl/A → gradient of R vs l graph = ρ/A', 'slope = resistivity ÷ area when area is constant'],
    keywords: ['gradient', 'ρ/A', 'resistivity', 'area', 'R = ρl/A'],
  },
  q5_b: {
    keyConcepts: ['gradient = ΔR/Δl', 'use points on LOBF, far apart', 'units of ρ/A = Ω m⁻¹'],
    keywords: ['gradient', 'Ω m⁻¹', 'LOBF', 'calculation', 'ΔR/Δl'],
  },
  q5_c: {
    keyConcepts: ['systematic error: constant offset added to all readings', 'R = 0 when l = 0 (theoretical)', 'non-zero y-intercept is evidence of systematic error'],
    keywords: ['systematic error', 'y-intercept', 'zero resistance', 'zero length', 'origin', 'constant offset'],
  },
  q5_d: {
    keyConcepts: ['systematic error cancels in gradient calculation (constant offset subtracts out)', 'gradient = ΔR/Δl — differences eliminate constant offset', 'statement is invalid'],
    keywords: ['constant offset', 'cancels', 'gradient', 'differences', 'invalid', 'accurate gradient'],
  },
  q5_e: {
    keyConcepts: ['systematic errors: zero error, calibration error, extra circuit resistance'],
    keywords: ['zero error', 'calibration error', 'connecting wire resistance', 'crocodile clips'],
  },
  q5_f: {
    keyConcepts: ['R ∝ 1/A (inversely proportional from R = ρl/A)', 'larger area → more pathways for electrons → less resistance', 'model of moving charge carriers (electrons)'],
    keywords: ['inversely proportional', 'R ∝ 1/A', 'electrons', 'pathways', 'charge carriers', 'area increases', 'resistance decreases'],
  },

  // ── Q6: Series Circuit Investigation ──────────────────────
  q6_a: {
    keyConcepts: ['series circuit diagram: two bulbs and ammeter in one loop', 'ammeter in series measures total current', 'no extra series components'],
    keywords: ['series', 'ammeter', 'circuit diagram', 'bulbs', 'correct symbols'],
  },
  q6_b: {
    keyConcepts: ['more bulbs in series → more resistance → less current (I = V/R)', 'IV = number of bulbs, DV = current, CV = supply voltage', 'need 5+ values, repeats, data table'],
    keywords: ['research question', 'hypothesis', 'IV', 'DV', 'control variable', 'voltage', 'current decreases', 'resistance increases', 'method'],
  },

  // ── Q7: Renewable Energy ───────────────────────────────────
  q7_a: {
    keyConcepts: ['geothermal disadvantages: needs geological activity, high start-up cost', 'biomass disadvantages: land use, time delay', 'tidal disadvantages: ecosystem disruption'],
    keywords: ['geothermal', 'biomass', 'tidal', 'disadvantage', 'geological', 'ecosystem'],
  },
  q7_b: {
    keyConcepts: ['biomass energy flow: chemical potential → thermal → kinetic → electrical', 'burning releases chemical energy as thermal energy; steam drives turbine; generator produces electricity'],
    keywords: ['chemical potential', 'thermal', 'kinetic', 'electrical', 'energy chain', 'biomass'],
  },
  q7_c: {
    keyConcepts: ['renewable energy advantages: no CO₂, no fuel cost, sustainable', 'link advantages/disadvantages to specific country context'],
    keywords: ['advantage', 'disadvantage', 'country-specific', 'renewable', 'CO₂', 'cost', 'justified'],
  },

  // ── Q8: Malta Energy Options ───────────────────────────────
  q8_a: {
    keyConcepts: ['nuclear fuel (uranium) is non-renewable — finite resource', 'solar and wind are renewable — continuously replenished'],
    keywords: ['nuclear', 'uranium', 'non-renewable', 'finite', 'limited', 'not replenished'],
  },
  q8_b: {
    keyConcepts: ['evaluate using data from infographic (cost, area, lifetime)', 'political: sovereignty, international agreements, public opposition', 'economic: compare costs per kWh and construction costs', 'conclude with justified recommendation'],
    keywords: ['advantages', 'political implications', 'economic implications', 'data', 'recommendation', 'Malta', 'justified conclusion'],
  },

}
