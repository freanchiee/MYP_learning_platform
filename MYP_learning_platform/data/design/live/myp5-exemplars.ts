// MYP5 Sustainability Check: model answers written FOR EACH COMMUNITY a student can choose in
// "Community & need". Keyed by "<stageKey>.<sectionKey>.<fieldKey>", then by the community name
// exactly as it appears in that select. Two exemplars per community per field (different wording).
//
// The teacher can reveal one to a single student from the worksheet review. Fields not listed here
// (product-specific ones) keep the general exemplars on the field itself.

type ByCommunity = Record<string, string[]>

export const MYP5_EXEMPLARS: Record<string, ByCommunity> = {
  'community.need.citizens': {
    Government: [
      'About 40 staff in a regional environment agency and the councillors who oversee them. They write and enforce pollution limits for one industrial region, but they rely on companies to report their own numbers.',
      'A city council’s environment team of around 25 officers, plus the elected councillors who vote on budgets. They decide on permits for factories and landfills with few inspectors and little independent data.',
    ],
    Corporation: [
      'The managers and sustainability team of a mid-size electronics manufacturer, about 300 people. They answer to shareholders for profit and to regulators for emissions, and buy carbon credits to close the gap.',
      'Leaders and procurement staff of a clothing company that makes goods in several countries. They choose suppliers, set prices and decide how much to cut emissions and how much to offset.',
    ],
    'Factory Worker': [
      'About 120 line workers and contract staff at a textile factory on the edge of a city. Many send money home, work long shifts and cannot easily refuse overtime.',
      'Roughly 200 workers on the assembly and finishing lines of an electronics plant, mostly on short contracts, who handle solvents and hot equipment every day.',
    ],
    Consumer: [
      'Households in a mid-size city, mostly aged 15 to 40, who buy clothes and electronics online on limited budgets. They want greener choices but have little time or trusted information.',
      'Students and young workers in one city who replace phones and clothes often because repair is hard to find. They see green labels every day but cannot check them.',
    ],
    'Frontline Community': [
      'About 4,000 residents of a river town downstream of a factory zone and a landfill. Many families have lived there for generations and rely on the river for washing and farming.',
      'A village of around 800 people next to a mine and waste site. Most farm or fish, so the health of the soil and water directly affects their food and income.',
    ],
  },
  'community.need.need': {
    Government: [
      'How might we help regulators see real emissions and waste data from local sites so that they can enforce limits fairly, because company self-reports are hard to check?',
      'How might we help council officers show residents what was decided about pollution permits so that trust grows, because people say decisions happen out of sight?',
    ],
    Corporation: [
      'How might we help a company see which of its offsets are real and additional so that it reduces emissions first, because cheap credits can hide greenwashing risk?',
      'How might we help procurement teams compare suppliers on real environmental and worker impact so that they choose fairly, because price alone drives most choices today?',
    ],
    'Factory Worker': [
      'How might we let factory workers report toxic exposure without fear of losing shifts, because speaking up currently puts their income at risk?',
      'How might we help line workers record unsafe conditions in a way managers cannot ignore, so that fixes actually happen and workers are not blamed?',
    ],
    Consumer: [
      'How might we help busy shoppers tell a real green claim from greenwashing so that they can buy less harm without spending hours researching?',
      'How might we make repairing and reusing a product as easy for young shoppers as buying a new one, because replacing is currently quicker and cheaper?',
    ],
    'Frontline Community': [
      'How might we help river-town residents prove their water is polluted so that the council has to act, because officials keep saying it is fine?',
      'How might we let villagers share and track changes in their soil and water over time so that their evidence is taken seriously and their health is protected?',
    ],
  },
  'community.need.evidence': {
    Government: [
      'In Phase 2 the carbon debt kept rising because the cap was set too late. That showed me regulators act on numbers they may not trust, so the need is reliable data.',
      'When companies used cheap offsets I could not tell whether the credits were real. As the government player I had no way to check, which is where the need for verification came from.',
    ],
    Corporation: [
      'When I bought cheap offsets on my turn the credits failed verification and the community meter fell anyway. It showed me offsets can hide the problem, so I need clear evidence of what is real.',
      'In Phase 1 I pushed extraction to grow profit and land health dropped for everyone. It cost the community more than I gained, which showed the need to see wider impact before I decide.',
    ],
    'Factory Worker': [
      'When I landed on Toxic Mix Line and kept the line running, worker wellbeing dropped and the community meter fell. That showed me workers absorb costs they never chose.',
      'I was told to keep production going while wellbeing fell, and I had no way to say no. That is where the need for a safe way to speak up came from.',
    ],
    Consumer: [
      'My demand made the economy grow in Phase 1, but I did not see the cost. When the carbon debt appeared I realised I had no way to know which choices were harmful.',
      'The cheap offset I chose gave a worthless credit and I felt tricked. It showed me shoppers cannot judge claims, so the need is clear, trustworthy information.',
    ],
    'Frontline Community': [
      'In Phase 1 the land health meter fell every time we pushed extraction, and my community had the least say. That is where the need for evidence came from.',
      'The cheap offsets gave us worthless credits and my community never saw any benefit. It made me think about fairness, trust and who checks the promises.',
    ],
  },
  'community.research.onepiece': {
    Government: [
      'I would interview a regulator first, because everything I design depends on what data they can actually trust and use, and secondary sources cannot tell me that.',
      'One interview with a council officer, since without knowing how permits are really decided I would only be guessing what tool they could use.',
    ],
    Corporation: [
      'I would interview a sustainability manager first, because I need to know how they decide between cutting and offsetting before I can design anything that changes it.',
      'I would analyse existing carbon-accounting tools first, because I need to see why they still allow weak offsets before I justify building another.',
    ],
    'Factory Worker': [
      'I would interview a worker representative first, because knowing their real risk and fear matters more than anything else, and I cannot learn it from reports.',
      'One private, consent-based conversation with a worker, since without understanding what stops them speaking up I would only be guessing what tool they could trust.',
    ],
    Consumer: [
      'I would survey a small group of shoppers first, because I need to know how they really decide what to buy and how much time they will spend checking.',
      'I would interview a shopper about the last product they replaced, because it shows me the real reasons behind their choice better than any article.',
    ],
    'Frontline Community': [
      'I would interview a resident representative first, because everything I design depends on what they actually do now when the water looks wrong.',
      'One interview with a villager, since I need their own account of the changes they have seen before I can decide what evidence to help them collect.',
    ],
  },
  'community.research.ethics': {
    Government: [
      'I will explain the purpose and ask permission before recording. Officials speak only about their role, not confidential cases, and I will anonymise notes and store them only in my school account.',
      'Consent comes first and in plain language. I will not ask about named permits or people, I will keep notes private, and participants can withdraw at any time.',
    ],
    Corporation: [
      'I will ask permission, explain the purpose and not request confidential company data. Notes are anonymised, the company is not named without consent, and I keep everything in my school account.',
      'People choose whether to answer. I avoid trade secrets and personal details, remove names from my notes, and check any quote with the person before I use it.',
    ],
    'Factory Worker': [
      'Workers are at real risk if they are identified, so I will only speak to people who volunteer, never record voices, remove details that could identify a workplace, and let them stop at any time.',
      'I will get consent in plain language, ask nothing that could get someone in trouble, keep notes private, and use a representative stand-in unless a worker chooses to speak freely.',
    ],
    Consumer: [
      'I will explain the purpose, ask permission, collect no more personal data than I need, and anonymise survey answers. Participants can skip any question, and I will not share results outside the class.',
      'Consent is asked first and in plain language. I will not ask for names or accounts, I will store answers in my school account only, and people can withdraw whenever they like.',
    ],
    'Frontline Community': [
      'I will ask permission before recording, explain how the notes will be used and make sure residents benefit from the project. I will anonymise stories about health and protect land and location details.',
      'Consent is asked first in plain language and I will respect that the community owns its stories. I will share back what I learn, keep details private, and let people withdraw.',
    ],
  },
  'community.empathy.says': {
    Government: [
      '“We can only act on evidence, but the numbers we get are late and hard to check,” and “Residents want answers we cannot always give.”',
      '“We do not have enough inspectors to visit every site,” and “If the data were clearer, we could enforce limits sooner.”',
    ],
    Corporation: [
      '“We are cutting emissions where we can, and offsets cover the rest,” and “Customers and investors expect us to show progress quickly.”',
      '“Price and deadlines drive most of our decisions,” and “We want to be seen as responsible, but proving it is hard.”',
    ],
    'Factory Worker': [
      '“We cannot say no to overtime because we need the pay,” and “We are told it is safe, but we smell the fumes every day.”',
      '“Nobody asks us what is really happening on the line,” and “If I report it, I might lose my shifts.”',
    ],
    Consumer: [
      '“I would buy greener if I could trust the label,” and “It is too expensive to be the only one trying.”',
      '“Fixing my phone costs almost as much as a new one,” and “I do not have time to research every product.”',
    ],
    'Frontline Community': [
      '“Officials tell us the water is fine, but our children get rashes,” and “Nobody asked us before they signed the contract.”',
      '“We drink and farm with this water, so we know when it changes,” and “No one writes down what we tell them.”',
    ],
  },
  'community.empathy.thinks': {
    Government: [
      'They worry about being blamed whichever way they decide, and wonder whether companies are telling the whole truth. They hope for data they can defend in public.',
      'They fear making a decision that harms residents or jobs, and suspect reports are polished. They hope better evidence will make hard choices fairer.',
    ],
    Corporation: [
      'They fear public criticism for greenwashing and worry about cost, yet hope a credible plan will protect both reputation and profit. They wonder how much offsetting is too much.',
      'They suspect competitors are doing less, feel pressure to look green quickly, and hope customers will reward honest progress.',
    ],
    'Factory Worker': [
      'They fear that pushing back could cost jobs, and hope that someone with power will finally take the risks seriously. They wonder whether reporting would really be anonymous.',
      'They worry about their health in ten years but cannot afford to quit, and suspect managers know more than they say.',
    ],
    Consumer: [
      'They suspect green claims are marketing and feel their small choices will not matter, though they hope they might. They wonder who they can trust.',
      'They think someone else should fix the problem, and worry that being greener means paying more, though they would like to help.',
    ],
    'Frontline Community': [
      'They worry no one will believe them without proof, and wonder whether speaking up will make things worse for their families. They hope someone will finally listen.',
      'They suspect decisions were made long before they were asked, and fear the damage will last for their children. They hope evidence can change minds.',
    ],
  },
  'community.empathy.does': {
    Government: [
      'They review reports from companies, run a few inspections when staff allow, and answer complaints case by case, but they have no shared, up-to-date picture.',
      'They set limits and permits, hold public meetings and wait for annual reports, and rely on residents’ complaints to spot problems.',
    ],
    Corporation: [
      'They set yearly emission targets, buy offsets to cover the gap, publish sustainability reports and choose suppliers mainly on cost.',
      'They hire consultants to audit their footprint, promote green products in campaigns, and delay costly factory changes until they are forced.',
    ],
    'Factory Worker': [
      'Workers cover for each other, swap shifts to avoid the worst lines, and stay quiet with managers to keep their jobs.',
      'They wear their own protective gear where they can, warn new colleagues about risky machines, and only raise issues through a trusted supervisor.',
    ],
    Consumer: [
      'Shoppers compare a few options, buy the cheaper one, and repair only when it is easy. Otherwise they replace the item.',
      'They read a label or two, ask friends, and give up when the information is unclear. They recycle when a bin is close.',
    ],
    'Frontline Community': [
      'They collect their own water samples, warn neighbours by word of mouth and attend council meetings when they can, but have no shared record.',
      'They avoid the river on bad days, boil or buy water, and keep notes in notebooks or phones that no one collects.',
    ],
  },
  'community.empathy.feels': {
    Government: [
      'Under pressure and stretched thin, worried about public trust, but motivated when they have clear evidence they can stand behind.',
      'Frustrated by slow, unreliable data and anxious about making the wrong call, yet relieved when a decision is backed by facts.',
    ],
    Corporation: [
      'Anxious about reputation and cost, a little defensive about criticism, but proud of real progress and motivated by clear, credible targets.',
      'Pressured by shareholders and the public at once, uncertain how much is enough, and relieved when someone gives them a clear route.',
    ],
    'Factory Worker': [
      'Trapped between safety and income, frustrated at being invisible, and relieved when someone finally listens.',
      'Tired and anxious about their health, afraid of retaliation, but proud of their skill and loyal to each other.',
    ],
    Consumer: [
      'Overwhelmed and a little guilty, unsure who to trust, but motivated when a change feels easy and fair.',
      'Confused by mixed messages, annoyed at extra cost, and hopeful when a greener choice is simple and affordable.',
    ],
    'Frontline Community': [
      'Angry and ignored, anxious for their children’s health, and tired of not being taken seriously, but proud of how they look out for each other.',
      'Worried and powerless when decisions are made without them, yet determined and hopeful when their evidence is heard.',
    ],
  },
  'community.products.insight': {
    Government: [
      'Most tools help companies report but do not let regulators verify, so trust stays low. A new product must let officials check data independently and share results with the public.',
      'Existing dashboards are built for experts and need good data feeds, which leaves out small local offices. Mine must be simple, work with limited data and show clear next steps.',
    ],
    Corporation: [
      'Existing carbon tools calculate a footprint but do not warn about weak offsets. A new product must flag low-quality credits and show reduction options before offsetting.',
      'Most supplier tools rank on price and rarely show worker or land impact, so a new one must show wider impact next to cost.',
    ],
    'Factory Worker': [
      'Reporting apps usually need a name or email, which leaves out workers who fear reprisal. A new product must be anonymous, work on a basic phone and show that reports were acknowledged.',
      'Complaint hotlines exist, but workers never see what happens, so trust drops. A new product must close the loop and protect identity.',
    ],
    Consumer: [
      'Label checkers show a score but not why, so people cannot trust them. A new product must give one clear answer, explain the evidence briefly and be quick to use.',
      'Repair guides exist but are scattered and assume tools and skill. A new product should find a nearby repair option fast and show its cost against buying new.',
    ],
    'Frontline Community': [
      'Existing apps let people report pollution but never show what happened next, so trust drops. A new product must close the loop and work on a low-cost phone.',
      'Most tools assume good internet and reading skill, which leaves out the community I am designing for. Mine must work offline and use pictures.',
    ],
  },
  'community.brief.brief': {
    Government: [
      'I will design a simple dashboard for council environment officers to see and compare local pollution readings from community and company sources. Research showed officers lack trusted data and staff time. It must be easy to read, work with partial data and show its sources, and must not expose private resident information.',
      'The client is a regional environment agency. My digital product will let inspectors log site visits and share verified results publicly. It must be fast on a tablet, keep a clear audit trail and avoid overloading staff, and must not favour any company.',
    ],
    Corporation: [
      'I will design a credit checker for a company’s sustainability team that flags weak offsets and shows cutting options first. Interviews showed cheap credits are tempting and hard to judge. It must give one clear rating with reasons, and must not encourage buying credits instead of reducing emissions.',
      'The client is a clothing company’s procurement team. My tool will show supplier price next to worker and land impact. Research showed price drives choices. It must be quick to use and evidence-based, and must not hide bad results.',
    ],
    'Factory Worker': [
      'The client is a group of factory workers who fear reprisals. My digital product will let them report hazards anonymously and see them acknowledged. It must be simple, private and not require an email address, and must not expose anyone to their manager.',
      'I will design a shift-safe reporting tool for line workers on basic phones. Research showed people stay silent to keep their jobs. It must work offline, need no name and give a receipt showing the report was seen, and must not store identifying details.',
    ],
    Consumer: [
      'For busy online shoppers I will design a quick claim checker that explains what evidence a green claim should show. Interviews showed people distrust labels but lack time, so it must give one clear answer in under a minute and avoid guilt.',
      'I will design a repair-finder for young shoppers that shows nearby repair options and their cost against buying new. Research showed replacing is easier. It must work in a few taps and must not push people to buy.',
    ],
    'Frontline Community': [
      'I will design a simple mobile-friendly web tool for river-town residents to record water observations and share them with the council. Research showed residents are not believed without evidence and mostly use basic phones. It must work offline, need no account, protect names, and show what happens after a report.',
      'The client is a village near a mine. My product will let residents log soil and water changes with photos and dates so the record cannot be ignored. It must work with poor signal and use pictures, and must not reveal exact household locations.',
    ],
  },
  'ideation.pick.mine': {
    Government: [
      'How might we give council officers one clear map of local pollution readings from company and community sources so that decisions can be made on data everyone can check?',
      'How might we help inspectors log verified site results quickly so that residents can see what was found and what happens next?',
    ],
    Corporation: [
      'How might we help a sustainability team see which offsets are weak and what emissions they could cut first, so that they stop relying on cheap credits?',
      'How might we show procurement teams the real worker and land impact of each supplier next to price so that fair choices become the easy ones?',
    ],
    'Factory Worker': [
      'How might we let workers report hazards anonymously and see them acknowledged, because right now speaking up feels too risky?',
      'How might we give line workers a quick shift-safe way to log unsafe conditions so that fixes happen without anyone being blamed?',
    ],
    Consumer: [
      'How might we help busy shoppers check a green claim in under a minute so that they can buy with more trust?',
      'How might we show young shoppers a nearby repair option and its cost next to buying new so that fixing becomes the easy choice?',
    ],
    'Frontline Community': [
      'How might we give river-town residents a simple way to log water tests and share them with the council so that officials can no longer dismiss their evidence?',
      'How might we let villagers record soil and water changes with photos and dates so that their record is trusted and their health is protected?',
    ],
  },
  'planreflect.testing.consent': {
    Government: [
      'I will explain what I am testing, use invented sample data rather than real permits or cases, ask consent, and let testers stop at any time. I record only timings and anonymous notes.',
      'Testers choose to take part and play the role of an officer. No real inspection data is entered, results are stored without names, and I share what I learned with them afterwards.',
    ],
    Corporation: [
      'I will use made-up company figures so no confidential data is shared, get consent, record only timings and anonymous notes, and let testers stop whenever they like.',
      'Testers take part by choice, I do not ask for real supplier names or prices, I store results without names, and I thank them by showing what changed.',
    ],
    'Factory Worker': [
      'I will use invented reports, never ask testers about a real workplace or supervisor, get consent, avoid recording faces or voices, and make sure no result can be traced to a person.',
      'Testers volunteer, know they can stop at any time, and enter only pretend hazards. I keep no names or device identifiers and explain that nothing they do affects their job.',
    ],
    Consumer: [
      'I will explain the test, ask consent, use sample products instead of real accounts, record only timings and anonymous notes, and let testers stop at any time.',
      'Testers choose to take part, I collect no names, emails or purchase history, and I thank them by showing what I learned from their feedback.',
    ],
    'Frontline Community': [
      'I will use pretend observations instead of real health or location details, ask consent in plain language, store results without names and let testers stop at any time.',
      'Testers are asked first and enter only invented water or soil readings. I record timings and anonymous notes, and I share back what I learned so the community benefits.',
    ],
  },
  'planreflect.impact.impact': {
    Government: [
      'If it works, officers get one trusted picture of local pollution that speeds up enforcement and lets residents see decisions. A risk is that officials could be overloaded by reports, so the tool should rank urgent cases and show responses.',
      'Better data could make inspections fairer and public trust higher. But if numbers are shared without context they could be misread, so the tool should show sources and explain limits.',
    ],
    Corporation: [
      'If it works, the company cuts emissions before offsetting and avoids greenwashing, which protects trust. A risk is that it becomes a box-ticking rating, so it must show reasons and encourage real reductions.',
      'Buyers gain a clearer view of supplier impact, which could improve conditions across the chain. But suppliers may feel judged, so the tool should share data fairly and support improvement.',
    ],
    'Factory Worker': [
      'Workers gain a safer way to speak up, which could improve conditions. But if managers see the reports as a nuisance the tool could raise tension, so anonymity and a clear response process matter.',
      'It could reduce hidden exposure to toxic materials and help workers be heard. A risk is that reports could reveal who wrote them, so the design must protect identity and store little data.',
    ],
    Consumer: [
      'Shoppers get a quick, trustworthy check that could shift spending toward honest products and reduce waste. A risk is that it feels preachy, or that people trust it too much, so it should explain its evidence and stay neutral.',
      'Easy repair information could keep products in use longer and save money. But it might not reach people without smartphones, so it should be simple and also available in shared spaces.',
    ],
    'Frontline Community': [
      'If it works, residents get a shared record the council cannot easily dismiss, which could speed up testing and clean-up. A risk is that reports could be ignored or misused, so the tool should show the response and must not reveal where individuals live.',
      'The community gains a lasting record of changes that supports their health claims. But if it needs strong internet or reading skill it could leave people out, so it should work offline and use pictures.',
    ],
  },
}
