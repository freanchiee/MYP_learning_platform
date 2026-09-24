// Free, no-login practice resources (external EdgeOne deployments).
// `url` overrides the link when the bare host 404s (hashed subdomain + .html path).
export interface Resource {
  title: string
  desc: string
  category: string
  host: string
  url?: string
}

// Entries whose `url` starts with "/" are hosted on this site (public/artifacts)
// and each has a matching article under /blog that surrounds it with real
// explanation — `host` is just a unique id/label for those.
export const RESOURCES: Resource[] = [
  { title: 'The Vent Expedition',              category: 'Biology',          desc: 'Classify an unknown organism from a hydrothermal vent, then work out the chemistry that keeps it alive.', host: 'critabcd.com/blog/hydrothermal-vents', url: '/artifacts/vent-expedition.html' },
  { title: 'The Biological Blueprint',         category: 'Biology',          desc: 'A classification quest: kingdoms, binomial names and dichotomous keys.', host: 'critabcd.com/blog/classification', url: '/artifacts/biological-blueprint-quest.html' },
  { title: 'Cells & Life (Year 4)',            category: 'Biology',          desc: 'Levels of biological organisation from organelle to organism, with self-checking tasks.', host: 'critabcd.com/blog/cells-tissues-organs', url: '/artifacts/myp-year4-cells-and-life.html' },
  { title: 'Quantity Quest: Mission Vector',   category: 'Physics',          desc: 'Four missions on measurement, SI units, scalars vs vectors and vector navigation.', host: 'critabcd.com/blog/scalars-vectors', url: '/artifacts/quantity-quest.html' },
  { title: 'The Butterfly Code',               category: 'Sciences',         desc: 'Predictions, hypotheses, variables and field vs lab investigations, as a game.', host: 'critabcd.com/blog/scientific-method', url: '/artifacts/butterfly-code.html' },
  { title: 'IB Physics 2026',                  category: 'Physics',          desc: 'A full IB Physics revision hub — focused guides across the whole course.', host: 'ibphym2026.edgeone.app', url: 'https://ibphym2026-0yomblyj3n.edgeone.app/ib-physics-guide.html' },
  { title: 'MYP Physics e-Assessment',         category: 'Physics',          desc: 'A 90-minute interactive physics exam with simulation-based inquiry tasks.', host: 'indirect-coffee-beyrm1exsy.edgeone.app' },
  { title: 'Stellar Evolution',                category: 'Astrophysics',     desc: 'An interactive explorer for the life cycle of stars.', host: 'stellarevolution.edgeone.app' },
  { title: 'Space Systems Study Guide',        category: 'Space',            desc: 'Rockets, orbits and ISS life-support — a Criterion D study guide.', host: 'gay-bronze-pagl7assk4.edgeone.app' },
  { title: 'Radioactivity Quiz',               category: 'Physics',          desc: 'Test yourself on decay, half-life and atomic physics.', host: 'radioactivityquiz.edgeone.app' },
  { title: 'Radioactive Decay Lab',            category: 'Physics',          desc: 'Measure half-life directly from an interactive decay simulation.', host: 'comparative-lavender-1ry5ejgdpx.edgeone.app' },
  { title: 'Half-Life (OIS)',                  category: 'Physics',          desc: 'Half-life practice and simulations for the OIS 2026 cohort.', host: 'halflife2026ois.edgeone.app' },
  { title: 'Waves: Diffraction & Interference', category: 'Physics',         desc: 'An interactive lab for single/double-slit diffraction and interference.', host: 'shrill-apricot-orberyd66d.edgeone.app', url: 'https://shrill-apricot-orberyd66d-6k7qhd1m8c.edgeone.app/waves_lab%20(9).html' },
  { title: 'Cell Biology',                     category: 'Biology',          desc: 'An interactive cell biology resource with Criteria A–D tasks.', host: 'aflcellbiology.edgeone.app' },
  { title: 'Organelle Social Network',         category: 'Biology',          desc: 'Cell biology, gamified — build social profiles for organelles.', host: 'mute-olive-hlvzplrywj.edgeone.app' },
  { title: 'Organelle Profile Builder',        category: 'Biology',          desc: 'Build organelle profiles to learn cell structure and function.', host: 'early-amethyst-cpvey2r3ff.edgeone.app' },
  { title: 'IDL Flow',                         category: 'Interdisciplinary', desc: 'A facilitator dashboard for an Identity / nature-vs-nurture IDL session.', host: 'idlflow.edgeone.app', url: 'https://idlflow-ck030bbz3o.edgeone.app/MYP_IDL_Facilitator_Dashboard.html' },
  { title: '90-Minute IDL',                    category: 'Interdisciplinary', desc: 'A timed, enhanced interdisciplinary challenge for May 2026.', host: '90minidl.edgeone.app', url: 'https://horizontal-copper-9sounqsfuf-0ezypo7xmc.edgeone.app/MYP_IDL_May2026_Enhanced%20(1).html' },
  { title: 'Portfolio',                        category: 'Showcase',         desc: 'A physics educator portfolio showcase.', host: 'portfolioutk.edgeone.app' },
]

export const resourceUrl = (r: Resource): string => r.url ?? `https://${r.host}`
