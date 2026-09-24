// MYP5 — 25 digital-product starting points for the sustainability solution:
// five per group in the Sustainability Check (government, corporation,
// workers, consumers, frontline community). Each is a DIGITAL product a Year 5
// student can prototype without a workshop (wireframes, a clickable mock-up, a
// spreadsheet model, a simple site), and each says what the first version must
// prove so it can be tested with real people.

import type { RoleKey } from '@/lib/design-live/sustainability'

export interface DigitalProduct {
  id: string
  group: RoleKey
  icon: string
  name: string
  /** What it is, in one sentence. */
  what: string
  /** Who it is for and the problem it eases. */
  who: string
  /** How to prototype it with tools students already have. */
  prototype: string
  /** What the first version must prove. */
  proves: string
}

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  // Government
  { id: 'gov-air', group: 'government', icon: '🌫️', name: 'Public Air-Quality Dashboard', what: 'A simple web dashboard that shows live or sample air quality by street and what it means for health.', who: 'Residents and a city committee who need to see where the problem is.', prototype: 'Mock up 3 screens in Figma or Google Slides using a sample data table; link a map image.', proves: 'A resident can find their street and say what to do, in under 30 seconds.' },
  { id: 'gov-registry', group: 'government', icon: '🧾', name: 'Carbon-Credit Registry Checker', what: 'A lookup tool where anyone can check whether a carbon credit is verified, additional and not double-sold.', who: 'Citizens and small buyers who cannot tell a real credit from greenwashing.', prototype: 'Build a searchable table in a spreadsheet plus a 4-screen clickable flow.', proves: 'A user can correctly tell a real credit from a suspicious one using only the tool.' },
  { id: 'gov-procure', group: 'government', icon: '🏢', name: 'Green Procurement Scorecard', what: 'A scoring tool that rates suppliers on emissions, repairability and worker conditions before a council buys.', who: 'Public buyers spending taxpayers’ money.', prototype: 'A weighted scoring sheet with a clean results screen mock-up.', proves: 'Two different buyers reach the same ranking of three sample suppliers.' },
  { id: 'gov-sim', group: 'government', icon: '🧮', name: 'Policy Impact Simulator', what: 'Slide a rule (e.g. a plastic levy) up or down and see modelled effects on emissions, prices and jobs.', who: 'Councillors and citizens debating a proposed rule.', prototype: 'A spreadsheet model with sliders (or a simple form) and a chart of results.', proves: 'Users understand the trade-offs well enough to explain them to someone else.' },
  { id: 'gov-report', group: 'government', icon: '📣', name: 'Report-a-Pollution App', what: 'Residents photograph and pin a pollution problem and see when the council responds.', who: 'Communities whose complaints get lost.', prototype: 'Clickable mock-up of report, confirmation and status screens.', proves: 'A first-time user can file a report in under a minute and knows what happens next.' },

  // Corporation
  { id: 'corp-label', group: 'corporation', icon: '🏷️', name: 'Product Carbon Label Generator', what: 'Enter a product’s materials and transport and get a plain-language footprint label with a scannable code.', who: 'Makers who want honest labels, and shoppers who want to compare.', prototype: 'A form-to-label mock-up with a printed sample label.', proves: 'Shoppers correctly pick the lower-footprint product from two labels.' },
  { id: 'corp-takeback', group: 'corporation', icon: '📦', name: 'Take-Back & Repair Scheduler', what: 'Customers book a repair, refurbish or take-back of an old product and track it.', who: 'Companies extending product life and customers with broken items.', prototype: 'A booking flow (5 screens) and a confirmation email mock-up.', proves: 'A customer books a repair in under two minutes without help.' },
  { id: 'corp-supplier', group: 'corporation', icon: '🔗', name: 'Supplier Sustainability Tracker', what: 'A shared board where suppliers upload evidence (certificates, energy data) and the buyer sees gaps.', who: 'Sustainability managers who cannot see past their first supplier.', prototype: 'A dashboard mock-up with traffic-light statuses and a sample dataset.', proves: 'A manager finds the weakest supplier in the sample data within a minute.' },
  { id: 'corp-ecodesign', group: 'corporation', icon: '🧩', name: 'Eco-Design Checker', what: 'A plug-in checklist that flags material and packaging choices with easier, lower-impact alternatives.', who: 'Product designers who need quick guidance while designing.', prototype: 'A checklist tool with a suggestions panel, tested on a real product.', proves: 'Designers change at least one choice after using it, and can say why.' },
  { id: 'corp-swap', group: 'corporation', icon: '🔄', name: 'Circular Packaging Marketplace', what: 'A marketplace where one firm’s waste (offcuts, packaging) is listed for another firm to reuse.', who: 'Small businesses paying to throw away useful material.', prototype: 'Listing, search and match screens with 6 sample listings.', proves: 'A business owner finds a useful match from sample data in under a minute.' },

  // Workers
  { id: 'wkr-safety', group: 'worker', icon: '🦺', name: 'Safe-Factory Reporting App', what: 'Workers anonymously report hazards and near-misses and see them acknowledged.', who: 'Workers afraid to speak up.', prototype: 'Anonymous report flow and a manager acknowledgement view.', proves: 'Testers trust it enough to say they would use it, and can explain why it feels anonymous.' },
  { id: 'wkr-skills', group: 'worker', icon: '🎓', name: 'Green-Skills Learning Path', what: 'A short-course planner showing how a worker can move from their current job to a green-economy job.', who: 'Workers in industries that are changing.', prototype: 'A 3-step path builder and a sample path for one job.', proves: 'A worker can pick a realistic next step and knows what it would take.' },
  { id: 'wkr-shift', group: 'worker', icon: '⏱️', name: 'Shift & Overtime Fairness Tracker', what: 'Workers log hours and get a clear view of overtime, breaks and pay against their rights.', who: 'Contract and shift workers with unpredictable hours.', prototype: 'A simple log screen and a weekly summary chart.', proves: 'Testers spot an unfair week from the summary without help.' },
  { id: 'wkr-chem', group: 'worker', icon: '🧪', name: 'Toxics Right-to-Know Scanner', what: 'Type or scan a chemical label and get a plain-language hazard summary and safety steps.', who: 'Line workers exposed to chemicals with unreadable labels.', prototype: 'A lookup mock-up with 5 sample chemicals and icons.', proves: 'A worker correctly explains the risk and one safety step after using it.' },
  { id: 'wkr-voice', group: 'worker', icon: '🗳️', name: 'Worker Voice Poll Board', what: 'Short, anonymous polls so workers can tell management what they think about materials and conditions.', who: 'Workers who rarely get a say.', prototype: 'A poll builder and a results view with sample data.', proves: 'Managers can read the results and name one action they would take.' },

  // Consumers
  { id: 'con-pause', group: 'consumer', icon: '⏸️', name: '“Do I Need It?” Purchase Pause', what: 'A 24-hour pause and three quick questions before a non-essential purchase.', who: 'Shoppers pushed into impulse buying.', prototype: 'A 5-screen flow with reminder notifications mocked up.', proves: 'Testers reconsider at least one purchase after using it for a week.' },
  { id: 'con-repair', group: 'consumer', icon: '🛠️', name: 'Repair Finder & How-To Library', what: 'Find a local repairer or a step-by-step guide for a broken item.', who: 'People who throw things away because repair is hard to find.', prototype: 'Search, result and guide screens for 3 sample items.', proves: 'A user finds a repair option for a broken item in under a minute.' },
  { id: 'con-share', group: 'consumer', icon: '🗺️', name: 'Second-Hand & Borrow Map', what: 'A neighbourhood map of second-hand shops, libraries of things and borrowing points.', who: 'People who would borrow or buy used if they knew where.', prototype: 'A map mock-up with filters and 8 sample pins.', proves: 'A user plans a no-new-purchase route to get an item.' },
  { id: 'con-track', group: 'consumer', icon: '📊', name: 'Shopping Footprint Tracker', what: 'A private tracker of the estimated footprint of what you buy, with simple monthly goals.', who: 'Consumers who want to know where they stand.', prototype: 'A log screen, a monthly chart and sample data.', proves: 'Testers can say which purchases mattered most and set a realistic goal.' },
  { id: 'con-claims', group: 'consumer', icon: '🕵️', name: 'Honest Green Claims Checker', what: 'Paste a product claim (“eco-friendly”) and get a plain check of what evidence it should show.', who: 'Shoppers who cannot tell real claims from greenwashing.', prototype: 'A claim-analyser mock-up with 5 sample claims.', proves: 'A user spots the weak claim among three in under a minute.' },

  // Frontline community
  { id: 'com-land', group: 'community', icon: '🛰️', name: 'Community Land Monitor', what: 'Community members photograph and pin changes to their land (logging, spills) to build their own evidence.', who: 'Frontline communities who need proof to be believed.', prototype: 'A photo-and-pin mock-up and a shared timeline of sample reports.', proves: 'Members can record an event in the field in under a minute and it is clear enough for an outsider.' },
  { id: 'com-cafe', group: 'community', icon: '🧵', name: 'Local Repair-Café Booking Site', what: 'A simple site to run a monthly repair café: book a slot, list volunteers, log what was fixed.', who: 'Neighbourhoods wanting a local repair economy.', prototype: 'A booking site with a volunteer view and a saved-waste counter.', proves: 'An organiser sets up an event in under ten minutes.' },
  { id: 'com-credit', group: 'community', icon: '📄', name: 'Fair Carbon-Credit Contract Guide', what: 'An information hub that explains carbon-credit contracts to communities in plain language, with red flags.', who: 'Communities approached by offset developers.', prototype: 'A guide with a checklist and glossary in the community’s main language.', proves: 'Readers correctly identify two red flags in a sample contract.' },
  { id: 'com-water', group: 'community', icon: '💧', name: 'Neighbourhood Water-Quality Map', what: 'Residents add simple test results and see a map of where water is safe.', who: 'River and well communities without official data.', prototype: 'A map with colour-coded pins and a how-to-test card.', proves: 'A resident reads the map and says whether a spot is safe, correctly.' },
  { id: 'com-story', group: 'community', icon: '🪶', name: 'Traditional Knowledge Story Archive', what: 'A consent-first archive where elders record land knowledge in their own words, owned by the community.', who: 'Communities whose knowledge is rarely credited or paid for.', prototype: 'A recording and consent flow with a sample entry.', proves: 'An elder can add and control who sees an entry without help.' },
]

export const WILD_PRODUCT_ID = 'wild-digital'

export const isWildProduct = (id: string) => id === WILD_PRODUCT_ID
export const getProduct = (id: string) => DIGITAL_PRODUCTS.find((p) => p.id === id)
export const productsByGroup = (g: RoleKey) => DIGITAL_PRODUCTS.filter((p) => p.group === g)
