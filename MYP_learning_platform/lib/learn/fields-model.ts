// Theme D · Fields. Pure physics for the field lessons and labs, so every number quoted in a lesson is computed
// here (and checked in scripts/test-learn-physics.mjs) rather than typed by hand. SI throughout.

export const G_CONST = 6.67e-11 // N m² kg⁻²
export const K_COULOMB = 8.99e9 // N m² C⁻²  (= 1 / 4πε₀)
export const MU0 = 4 * Math.PI * 1e-7 // T m A⁻¹
export const E_CHARGE = 1.6e-19 // C
export const M_EARTH = 5.97e24 // kg
export const R_EARTH = 6.37e6 // m
export const M_MOON = 7.35e22 // kg
export const D_EARTH_MOON = 3.84e8 // m, centre to centre

/** Gravitational force between two point (or spherical) masses, N. Always attractive. */
export const gravForce = (M: number, m: number, r: number) => (G_CONST * M * m) / (r * r)
/** Gravitational field strength a distance r from the centre of a point or spherical mass M, N kg⁻¹. */
export const gravField = (M: number, r: number) => (G_CONST * M) / (r * r)
/** Magnitude of the electric force between two point charges, N. */
export const coulombForce = (Q: number, q: number, r: number) => (K_COULOMB * Math.abs(Q * q)) / (r * r)
/** Electric field strength of a point charge Q at distance r (magnitude), N C⁻¹. */
export const elecField = (Q: number, r: number) => (K_COULOMB * Math.abs(Q)) / (r * r)

/** Gravitational potential (energy per unit mass) at r from M; zero at infinity, so always negative. J kg⁻¹ */
export const gravPotential = (M: number, r: number) => -(G_CONST * M) / r
/** Electric potential at r from point charge Q (sign of Q carried); zero at infinity. V = J C⁻¹ */
export const elecPotential = (Q: number, r: number) => (K_COULOMB * Q) / r

/** Magnetic force on a charge q moving at v perpendicular to B, N. */
export const magneticForceOnCharge = (q: number, v: number, B: number) => q * v * B
/** Magnetic force on a length L of wire carrying current I at right angles to B, N. */
export const magneticForceOnWire = (B: number, I: number, L: number) => B * I * L
/** Force per metre between two long parallel wires distance d apart, N m⁻¹. */
export const wireForcePerMetre = (I1: number, I2: number, d: number) => (MU0 * I1 * I2) / (2 * Math.PI * d)

/** Work to stretch an ideal spring by x = area under the F–x graph = ½kx², J. */
export const springEnergy = (k: number, x: number) => 0.5 * k * x * x

/** Circular orbit about mass M at orbital radius r (centre to centre). */
export const orbitSpeed = (M: number, r: number) => Math.sqrt((G_CONST * M) / r)
export const orbitPeriod = (M: number, r: number) => (2 * Math.PI * r) / orbitSpeed(M, r)
/** Orbital radius that gives period T (Kepler: r³ = GMT² / 4π²). */
export const radiusForPeriod = (M: number, T: number) => Math.cbrt((G_CONST * M * T * T) / (4 * Math.PI * Math.PI))
export const escapeSpeed = (M: number, r: number) => Math.sqrt((2 * G_CONST * M) / r)
/** Energies of a satellite of mass m in a circular orbit of radius r: KE = GMm/2r, GPE = −GMm/r, TE = −GMm/2r. */
export function orbitEnergies(M: number, m: number, r: number) {
  const ke = (G_CONST * M * m) / (2 * r)
  const gpe = -(G_CONST * M * m) / r
  return { ke, gpe, te: ke + gpe }
}

/** Engineering-style number: 3 significant figures with ×10ⁿ. */
export function sci(x: number, sf = 3): string {
  if (x === 0 || !Number.isFinite(x)) return '0'
  const e = Math.floor(Math.log10(Math.abs(x)))
  if (e >= -2 && e <= 3) return Number(x.toPrecision(sf)).toString()
  const m = x / 10 ** e
  const sup = String(e).replace('-', '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d])
  return `${m.toFixed(sf - 1)} × 10${sup}`
}
