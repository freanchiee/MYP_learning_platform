// MYP5 — Designing Responsibly: Sustainability Check → design for a community.
// Unit: "Designing Responsibly: Research, Systems & Authentic Testing"
// (Year 5 objectives, Criteria A–D). One live activity, four parts:
//
//   1. Board game (3D, host dashboard): the class plays the materials economy
//      in two phases and meets carbon credits first-hand.
//   2. Carbon-credit check: a short quiz to lock in what the game showed.
//   3. Community research — Criterion A: an empathy map for a community of
//      citizens (not one person), stakeholder representatives to interview,
//      a prioritised research plan with ethics, product analysis, brief.
//   4. Ideation — Criterion B: specification, a range of digital-product ideas
//      (25 starting points), justified selection, planning drawings.
//   5. Plan & reflect — Criteria C and D: a logical plan, testing method,
//      impact on the community, a circular ending and reflection.
//
// Every worksheet section carries the criterion strand it evidences so the
// class's work is organised criterion by criterion, and the teacher grades the
// same strands at the end.

import type { LiveActivityDefinition } from './types'

export const MYP5_SUSTAINABILITY: LiveActivityDefinition = {
  id: 'myp5-sustainability',
  year: 'MYP5',
  title: 'Sustainability Check',
  subtitle: 'Play the materials economy in 3D, meet carbon credits, then design a digital solution for a real community — criterion by criterion.',
  icon: '🌍',
  theme: { accent: '#1E7A5F', from: '#0B1F17', via: '#123526', to: '#1E4A36' },
  stages: [
    {
      type: 'boardGame',
      key: 'game',
      label: 'The Game',
      icon: '🎲',
      intro: { title: '🎲 Sustainability Check', blurb: 'Everyone gets a role in the materials economy. Grow the economy in Phase 1, then pay the carbon debt down together in Phase 2.' },
      overview: {
        brief: {
          context:
            'Every product starts as materials, and someone bears the cost at each step. In the game you will each take a role in a materials economy, grow it, then face the carbon debt it creates and meet carbon credits first-hand. Afterwards you will use that experience to design a digital product for a real community.',
          task: 'Play the game in your role, check what you learned about carbon credits, then choose a real community from the game, research their need responsibly, and design a DIGITAL product for them. You will move through the four criteria in order: A research, B ideas, C plan, D test and impact.',
          produce: [
            'Now: play your role in the game and take the carbon credit check',
            'A: a community need, a prioritised research plan with ethics, an empathy map for the group, a product analysis and a detailed design brief',
            'B: a specification, a range of digital-product ideas, a justified choice and planning drawings',
            'C and D: a logical plan, a log of changes, a test that generates data, the impact on the community and a circular ending, then a reflection',
          ],
          assessedOn: ['A.i', 'A.ii', 'A.iii', 'A.iv', 'B.i', 'B.ii', 'B.iii', 'B.iv', 'C.i', 'D.i', 'D.iv'],
          time: 'Several lessons · your work saves automatically',
        },
        flow: [
          { strand: 'Game', title: 'Play the materials economy', asks: 'Take a role, grow the economy, then pay the carbon debt down together.', where: 'this stage, first' },
          { strand: 'Quiz', title: 'Carbon credit check', asks: 'Seven quick questions to lock in what the game showed.', where: 'next stage' },
          { strand: 'A.i', title: 'Name the need', asks: 'Explain and justify the need, grounded in the game.', sections: ['need'] },
          { strand: 'A.ii', title: 'Research responsibly', asks: 'Prioritise your research, interview a representative, map stakeholders.', sections: ['research', 'personaChat', 'stakeholders'] },
          { strand: 'A.i', title: 'Understand the community', asks: 'One empathy map for the whole group.', sections: ['empathy'] },
          { strand: 'A.iii', title: 'Learn from products', asks: 'Analyse existing products and draft a weighted matrix.', sections: ['products', 'matrix'] },
          { strand: 'A.iv', title: 'Write the brief', asks: 'Summarise the research in a detailed design brief.', sections: ['brief'] },
          { strand: 'B.i', title: 'Set success criteria', asks: 'Write a specification others can test against.', where: 'stage · Ideation' },
          { strand: 'B.ii', title: 'Generate ideas', asks: 'A range of feasible ideas a stranger can understand.', where: 'stage · Ideation' },
          { strand: 'B.iii', title: 'Choose and justify', asks: 'Present the chosen design and say why it wins.', where: 'stage · Ideation' },
          { strand: 'B.iv', title: 'Draw the plan', asks: 'Accurate planning drawings and what is needed to make it.', where: 'stage · Ideation' },
          { strand: 'C.i', title: 'Plan the make', asks: 'A logical plan a peer could follow.', where: 'stage · Plan & Reflect' },
          { strand: 'C.iv', title: 'Justify changes', asks: 'Record what changed and why, with evidence.', where: 'stage · Plan & Reflect' },
          { strand: 'D.i', title: 'Design the test', asks: 'A test that generates data about success.', where: 'stage · Plan & Reflect' },
          { strand: 'D.iv', title: 'Impact and circular ending', asks: 'Explain the impact on the community and the product’s end of life.', where: 'stage · Plan & Reflect' },
        ],
      },
    },
    {
      type: 'mcq',
      key: 'creditcheck',
      label: 'Carbon Credit Check',
      icon: '🧾',
      pacing: 'host-paced',
      pointsPerCorrect: 10,
      intro: { title: '🧾 What did the market teach you?', blurb: 'Seven quick questions on carbon credits, offsets and greenwashing. Your teacher runs it: lock the round, reveal the correct answer, and every correct answer earns points.' },
      questions: [
        { icon: '🌍', context: 'The basics', q: 'What does ONE carbon credit stand for?', options: ['One tree planted anywhere', 'One tonne of carbon dioxide (or equivalent) avoided or removed', 'One tonne of rubbish recycled', 'One kilowatt-hour of clean energy'], correct: 1 },
        { icon: '🧪', context: 'A real credit', q: 'A credit is “additional” when…', options: ['It is cheap to buy', 'The emissions cut would NOT have happened without the money from the credit', 'It comes from a very big company', 'It is sold in another country'], correct: 1 },
        { icon: '🪜', context: 'The mitigation ladder', q: 'A firm buys offsets so it does not have to change its factory. What is the best description?', options: ['Smart — offsets are the same as cutting emissions', 'Greenwashing risk — you should reduce first and offset only what you cannot yet cut', 'Illegal in every country', 'The best way to help the community'], correct: 1 },
        { icon: '🏛️', context: 'Two markets', q: 'In a compliance (cap-and-trade) market, who sets the limit?', options: ['The company', 'The consumer', 'The government or regulator', 'The community'], correct: 2 },
        { icon: '🎲', context: 'The cheap offsets in the game', q: 'Why did “cheap offsets” sometimes give you worthless credits?', options: ['Bad luck only', 'Low-price credits are more likely to fail additionality or verification checks', 'Because the dice were rigged', 'Because credits expire in a day'], correct: 1 },
        { icon: '🌳', context: 'Permanence', q: 'A forest that stores carbon burns down next year. What is the problem for the credit?', options: ['None — the credit was already sold', 'The stored carbon is released again, so the saving was not permanent', 'The credit becomes more valuable', 'The community must pay a fine'], correct: 1 },
        { icon: '⚖️', context: 'Who pays?', q: 'An offset project stops villagers farming land so a company abroad can claim credits. Which concern matters most for a designer?', options: ['Whether the logo is green', 'Consent and fairness: did the community agree, and do they share the benefit?', 'How many credits were sold', 'Nothing — it is legal'], correct: 1 },
      ],
    },
    {
      type: 'worksheet',
      key: 'community',
      label: 'Community Research',
      icon: '🧑‍🤝‍🧑',
      intro: {
        title: '🧑‍🤝‍🧑 Criterion A — Inquiring & Analysing',
        blurb:
          'This time your user is a whole community of citizens, not one person. Choose whose community you are designing for, interview their representatives, build an empathy map for the group, plan your research responsibly, and end with a design brief. Work at your own pace: no need to click Next.',
      },
      overview: {
        brief: {
          context: 'The game showed you who gains and who pays when a market grows. Now you choose one of those communities and find out, with them and about them, what they actually need.',
          task: 'Choose a community, name its need, research responsibly, understand the group with an empathy map, learn from existing products, and end with a detailed design brief.',
          produce: ['A community need written as “How might we…”', 'A prioritised research plan with an ethics and consent note', 'One empathy map for the whole community', 'A stakeholder map, a product analysis and a first weighted matrix', 'A detailed design brief that summarises the research'],
          assessedOn: ['A.i', 'A.ii', 'A.iii', 'A.iv'],
          time: 'Work at your own pace · your work saves automatically',
        },
        flow: [
          { strand: 'A.i', title: 'Name the need', asks: 'Explain and justify the need, grounded in the game.', sections: ['need'] },
          { strand: 'A.ii', title: 'Research responsibly', asks: 'Prioritise your research, interview a representative, map stakeholders.', sections: ['research', 'personaChat', 'stakeholders'] },
          { strand: 'A.i', title: 'Understand the community', asks: 'One empathy map for the whole group.', sections: ['empathy'] },
          { strand: 'A.iii', title: 'Learn from products', asks: 'Analyse existing products and draft a weighted matrix.', sections: ['products', 'matrix'] },
          { strand: 'A.iv', title: 'Write the brief', asks: 'Summarise the research in a detailed design brief.', sections: ['brief'] },
        ],
      },
      sections: [
        {
          key: 'need',
          label: 'Community & need',
          icon: '🧭',
          criterion: 'A.i',
          blurb: 'Explain and justify the need for a solution for a specified client or target audience — grounded in what you saw in the game.',
          fields: [
            { key: 'community', label: 'Whose community are you designing for?', type: 'select', options: ['Government', 'Corporation', 'Factory Worker', 'Consumer', 'Frontline Community'] },
            {
              key: 'citizens',
              label: 'Describe these citizens',
              type: 'textarea',
              hint: 'Who are they, where do they live or work, roughly how many, and what do they have in common?',
              exemplars: [
                'About 4,000 residents of a river town downstream of a factory zone and a landfill. Most are families who have lived there for generations and rely on the river for washing and farming.',
                'Around 120 line workers and contract staff at a textile factory on the edge of a city; many send money home and cannot refuse shifts.',
                'Households in a mid-size city who shop for clothes and electronics online, many aged 15 to 40, on limited budgets.',
              ],
              celebrateKeywords: ['who', 'live', 'work', 'rely', 'families', 'households'],
              points: 10,
            },
            {
              key: 'need',
              label: 'The need, as “How might we…”',
              type: 'textarea',
              hint: 'State the need for this community and say why it matters to them — not a solution yet.',
              placeholder: 'How might we…',
              exemplars: [
                'How might we help river-town residents prove their water is polluted so that the council has to act, because officials keep saying it is fine?',
                'How might we let factory workers report toxic exposure without fear of losing shifts, because speaking up currently puts their income at risk?',
                'How might we help busy shoppers tell a real green claim from greenwashing so that they can buy less harm without spending hours researching?',
              ],
              celebrateKeywords: ['how might we', 'so that', 'because', 'for'],
              points: 10,
            },
            {
              key: 'evidence',
              label: 'Which moment in the game showed you this need?',
              type: 'textarea',
              hint: 'Name a tile, a choice or a meter that revealed the problem, and what it cost the community.',
              exemplars: [
                'When I landed on Toxic Mix Line and chose to keep the line running, worker wellbeing dropped and the community meter fell — that showed me workers absorb costs they never chose.',
                'In Phase 1 the land health meter fell every time we pushed extraction, and Frontline Community had the least say. That is where the need for evidence came from.',
                'The cheap offsets gave us worthless credits, and the community never saw any benefit — that made me think about fairness and trust.',
              ],
              celebrateKeywords: ['because', 'meter', 'tile', 'cost', 'showed'],
              points: 10,
            },
          ],
        },
        {
          key: 'research',
          label: 'Prioritised research plan',
          icon: '📋',
          criterion: 'A.ii',
          blurb: 'Identify AND prioritise the research you need — rank what matters most, do not just list what is possible. Include an ethics and consent note.',
          fields: [
            {
              key: 'plan',
              label: 'Research plan, in priority order',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'rank', label: 'Priority', placeholder: '1' },
                { key: 'question', label: 'What I need to find out', placeholder: 'e.g. What do residents currently do when the water looks wrong?' },
                { key: 'method', label: 'Primary or secondary — and how', placeholder: 'e.g. Primary: interview a representative' },
                { key: 'why', label: 'Why this rank', placeholder: 'e.g. Everything else depends on knowing this' },
              ],
            },
            {
              key: 'onepiece',
              label: 'If you only had time for ONE piece of research, which would it be, and why?',
              type: 'textarea',
              exemplars: [
                'I would interview a resident representative first, because everything I design depends on what they actually do now, and secondary sources cannot tell me that.',
                'One interview with a worker representative, since without knowing their real risk and fear I would only be guessing what tool they could trust.',
                'I would analyse existing reporting apps first, because I need to see why they fail before I can justify building another.',
              ],
              celebrateKeywords: ['because', 'first', 'depends', 'rather than'],
              points: 10,
            },
            {
              key: 'ethics',
              label: 'Ethics and consent note',
              type: 'textarea',
              hint: 'How will you get consent, protect names and notes, and avoid harming or exposing the people you research?',
              exemplars: [
                'I will explain the purpose, ask permission before recording, anonymise interview notes and store them only in my school account. Participants can withdraw at any time, and I will not use anyone’s real name.',
                'Consent is asked first and in plain language. I will not collect personal data I do not need, I will anonymise what people tell me, and I will not share notes outside the class without permission.',
                'People choose whether to answer. I remove names and identifying details, keep notes private, and check quotes with the person before I use them.',
              ],
              celebrateKeywords: ['consent', 'anonymise', 'permission', 'withdraw', 'private'],
              points: 10,
            },
          ],
        },
        {
          key: 'personaChat',
          label: 'Interview a representative',
          icon: '🎭',
          criterion: 'A.ii',
          blurb: 'Pick a representative of a group in the game and interview them. They are fictional stand-ins — treat what they say as leads to check, not proof. Use their answers in the empathy map below.',
          fields: [{ key: 'chat', label: 'Interview a representative', type: 'personaChat', personaPack: 'community' }],
        },
        {
          key: 'empathy',
          label: 'Empathy map — the community',
          icon: '💭',
          criterion: 'A.i',
          blurb: 'One map for the whole community, not one person. Write what the group as a whole says, thinks, does and feels — and use the interview to keep it honest.',
          fields: [
            {
              key: 'says',
              label: 'Says',
              type: 'textarea',
              hint: 'What do people in this community actually say about the problem?',
              exemplars: [
                '“Officials tell us the water is fine, but our children get rashes,” and “Nobody asked us before they signed the contract.”',
                '“We cannot say no to overtime because we need the pay,” and “We are told it is safe, but we smell the fumes every day.”',
                '“I would buy greener if I could trust the label,” and “It is too expensive to be the only one trying.”',
              ],
              celebrateKeywords: ['because', 'nobody', 'we cannot', 'told'],
              points: 10,
            },
            {
              key: 'thinks',
              label: 'Thinks',
              type: 'textarea',
              hint: 'What does the community think but not always say out loud?',
              exemplars: [
                'They worry no one will believe them without proof, and wonder whether speaking up will make things worse for their families.',
                'They fear that pushing back could cost jobs, and hope that someone with power will finally take the risks seriously.',
                'They suspect green claims are marketing and feel their small choices will not matter, though they hope they might.',
              ],
              celebrateKeywords: ['worry', 'fear', 'wonders', 'hope', 'suspect'],
              points: 10,
            },
            {
              key: 'does',
              label: 'Does',
              type: 'textarea',
              hint: 'What do they currently do to cope, adapt or push back?',
              exemplars: [
                'They collect their own water samples, warn neighbours by word of mouth and attend council meetings when they can, but have no shared record.',
                'Workers cover for each other, swap shifts to avoid the worst lines, and stay quiet with managers to keep their jobs.',
                'Shoppers compare a few options, buy the cheaper one, and repair only when it is easy — otherwise they replace the item.',
              ],
              celebrateKeywords: ['currently', 'instead', 'avoid', 'collect', 'swap'],
              points: 10,
            },
            {
              key: 'feels',
              label: 'Feels',
              type: 'textarea',
              hint: 'How does the problem make them feel, as a group?',
              exemplars: [
                'Angry and ignored, anxious for their children’s health, and tired of not being taken seriously — but proud of how they look out for each other.',
                'Trapped between safety and income, frustrated at being invisible, and relieved when someone finally listens.',
                'Overwhelmed and a little guilty, unsure who to trust, but motivated when a change feels easy and fair.',
              ],
              celebrateKeywords: ['frustrated', 'anxious', 'ignored', 'relieved', 'proud'],
              points: 10,
            },
          ],
        },
        {
          key: 'stakeholders',
          label: 'Who is affected, who decides, who benefits',
          icon: '🕸️',
          criterion: 'A.ii',
          fields: [
            {
              key: 'map',
              label: 'Stakeholder map',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'who', label: 'Who', placeholder: 'e.g. River-town residents' },
                { key: 'power', label: 'Power (low / medium / high)', placeholder: 'low' },
                { key: 'stake', label: 'What they gain or lose', placeholder: 'e.g. Health and land vs. jobs' },
                { key: 'need', label: 'What a digital tool would need to do for them', placeholder: 'e.g. Work on a cheap phone' },
              ],
            },
          ],
        },
        {
          key: 'products',
          label: 'Existing products',
          icon: '🔎',
          criterion: 'A.iii',
          blurb: 'Analyse a range of existing digital products that address this problem — feature by feature, not a surface glance.',
          fields: [
            {
              key: 'range',
              label: 'Product analysis',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'product', label: 'Product', placeholder: 'e.g. A pollution-reporting app' },
                { key: 'strength', label: 'What it does well', placeholder: 'e.g. Simple photo upload' },
                { key: 'gap', label: 'What it misses', placeholder: 'e.g. No follow-up' },
                { key: 'left', label: 'Who it leaves out', placeholder: 'e.g. People without smartphones' },
              ],
            },
            {
              key: 'insight',
              label: 'What does the range tell you a new product must do?',
              type: 'textarea',
              exemplars: [
                'Existing apps let people report but never show what happened next, so trust drops. A new product must close the loop and be usable on a low-cost phone.',
                'Most tools assume good internet and reading skill, which leaves out the community I am designing for. Mine must work offline and use pictures.',
                'They measure footprint but do not tell users what to do about it, so a new tool should turn data into one clear action.',
              ],
              celebrateKeywords: ['must', 'because', 'leaves out', 'gap', 'so'],
              points: 10,
            },
          ],
        },
        {
          key: 'matrix',
          label: 'Weighted matrix — first draft',
          icon: '⚖️',
          criterion: 'A.iii',
          blurb: 'Draft the criteria and weights you will later use to judge your ideas. Weight from 1 (nice to have) to 5 (essential), and explain each weight from your research.',
          fields: [
            {
              key: 'criteria',
              label: 'Criteria and weights',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'criterion', label: 'Criterion', placeholder: 'e.g. Works on a low-cost phone' },
                { key: 'weight', label: 'Weight (1–5)', placeholder: '5' },
                { key: 'why', label: 'Why this weight (from research)', placeholder: 'e.g. Interview said most residents have basic phones' },
              ],
            },
          ],
        },
        {
          key: 'brief',
          label: 'Design brief',
          icon: '📝',
          criterion: 'A.iv',
          blurb: 'Summarise your research into a detailed brief: the community, the need, what a solution must do and must not do.',
          fields: [
            {
              key: 'brief',
              label: 'Design brief',
              type: 'textarea',
              hint: 'Who is it for, what problem, what evidence, what the product must do, what it must avoid.',
              exemplars: [
                'I will design a simple mobile-friendly web tool for river-town residents to record water observations and share them with the council. Research showed residents are not believed without evidence and mostly use basic phones. It must work offline, need no account, protect names, and show what happens after a report.',
                'The client is a group of factory workers who fear reprisals. My digital product will let them report hazards anonymously and see them acknowledged. It must be simple, private and not require an email address, and must not expose anyone to their manager.',
                'For busy online shoppers I will design a quick claim checker that explains what evidence a green claim should show. Interviews showed people distrust labels but lack time, so it must give one clear answer in under a minute and avoid guilt.',
              ],
              celebrateKeywords: ['must', 'will design', 'research showed', 'must not', 'evidence'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'ideation',
      label: 'Ideation',
      icon: '💡',
      intro: {
        title: '💡 Criterion B — Developing Ideas',
        blurb:
          'Turn the brief into a specification, generate a range of digital-product ideas (start from one of 25 or use the wild card), then justify your choice against your weighted matrix and plan your drawings. Work at your own pace: no need to click Next.',
      },
      overview: {
        brief: {
          context: 'You have a research-based brief for a real community. Now you decide what to make. Good ideas here come from the brief, not from what is fun to build.',
          task: 'Turn your brief into a specification, generate a range of feasible digital-product ideas, choose one and justify it with evidence, then plan how it will look and work.',
          produce: ['A specification with measurable success criteria', 'A range of ideas, each explained so a stranger could follow it', 'A decision matrix and a justified choice', 'A sustainability lens on your product', 'Planning drawings and a list of what is needed to make it'],
          assessedOn: ['B.i', 'B.ii', 'B.iii', 'B.iv'],
          time: 'Work at your own pace · your work saves automatically',
        },
        flow: [
          { strand: 'B.i', title: 'Specification', asks: 'Requirements that come from your research, each with a way to measure success.', sections: ['spec'] },
          { strand: 'B.ii', title: 'Ideas', asks: 'Start from a card or the wild card, then build a range of ideas.', sections: ['pick', 'ideas'] },
          { strand: 'B.iii', title: 'Justify your choice', asks: 'Score against your weighted criteria and explain why the winner wins.', sections: ['justify', 'lens'] },
          { strand: 'B.iv', title: 'Planning drawings', asks: 'Screens, flow, and what you need to make it.', sections: ['drawings'] },
        ],
      },
      sections: [
        {
          key: 'spec',
          label: 'Specification',
          icon: '📐',
          criterion: 'B.i',
          blurb: 'State clear, testable success criteria that come from your research.',
          fields: [
            {
              key: 'requirements',
              label: 'Specification',
              type: 'table',
              minRows: 5,
              columns: [
                { key: 'req', label: 'Requirement', placeholder: 'e.g. Works offline' },
                { key: 'measure', label: 'How success is measured', placeholder: 'e.g. A report can be saved with no signal and sent later' },
                { key: 'source', label: 'Comes from', placeholder: 'e.g. Interview with Sofia; product analysis' },
              ],
            },
            {
              key: 'mustnot',
              label: 'What must it NOT do?',
              type: 'textarea',
              hint: 'Think about harm, exclusion, cost and data risk for this community.',
              exemplars: [
                'It must not require real names or share location publicly, must not exclude people without smartphones, and must not collect more data than needed.',
                'It must not expose reporters to managers, must not need an email address, and must not make workers feel watched.',
                'It must not use guilt or make claims it cannot prove, must not need a paid account, and must not hide how it earns money.',
              ],
              celebrateKeywords: ['must not', 'exclude', 'data', 'harm', 'cost'],
              points: 10,
            },
          ],
        },
        {
          key: 'pick',
          label: 'Starting point',
          icon: '🃏',
          criterion: 'B.ii',
          blurb: 'Not sure where to start? Here are 25 digital-product starting points — five for each group in the game. Pick one, then make it your own. Or play the wild card.',
          fields: [
            { key: 'product', label: 'Digital product starting points', type: 'productCards' },
            {
              key: 'mine',
              label: 'Your product idea, written for YOUR community',
              type: 'textarea',
              hint: 'Rewrite it as “How might we…” for your specific community, and say why it matters.',
              placeholder: 'How might we…',
              exemplars: [
                'How might we give river-town residents a simple way to log water tests and share them with the council so that officials can no longer dismiss their evidence?',
                'How might we let workers report hazards anonymously and see them acknowledged, because right now speaking up feels too risky?',
                'How might we help busy shoppers check a green claim in under a minute so that they can buy with more trust?',
              ],
              celebrateKeywords: ['how might we', 'so that', 'because', 'for'],
              points: 10,
            },
          ],
        },
        {
          key: 'ideas',
          label: 'A range of feasible ideas',
          icon: '🧩',
          criterion: 'B.ii',
          blurb: 'Develop at least three different ideas. Annotate so a stranger could understand and build them from your notes alone.',
          fields: [
            {
              key: 'range',
              label: 'Ideas',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'idea', label: 'Idea', placeholder: 'e.g. Photo-and-pin water log' },
                { key: 'how', label: 'How it works', placeholder: 'e.g. Take a photo, pick a colour, save offline, sync later' },
                { key: 'features', label: 'Key screens / features', placeholder: 'e.g. Map, capture, history' },
                { key: 'annotation', label: 'Annotation for a stranger', placeholder: 'e.g. Big buttons because many users have limited literacy' },
              ],
            },
            {
              key: 'annotate',
              label: 'Annotate ONE idea in detail',
              type: 'textarea',
              hint: 'Describe the parts, what each does, and why — as if you were handing it to a developer who cannot ask you questions.',
              exemplars: [
                'The home screen has one large “Add a report” button because users may have limited literacy. Tapping it opens the camera, then asks for one of three colours for the water, then saves offline. A history tab shows past reports on a simple map, and a weekly summary can be shared as a single image.',
                'Screen 1 shows three big icons: Hazard, Near miss, Idea. Choosing one asks a single question and the option to add a photo. Nothing asks for a name, and a confirmation screen explains that the report is anonymous and when to expect a response.',
                'Users paste a claim on the first screen; the second screen shows three questions the claim should answer. A traffic-light result explains why. The design is text-light so it works for people scanning quickly.',
              ],
              celebrateKeywords: ['because', 'screen', 'button', 'shows', 'so that'],
              points: 10,
            },
          ],
        },
        {
          key: 'justify',
          label: 'Justify your selection',
          icon: '🏆',
          criterion: 'B.iii',
          blurb: 'Score each idea against the weighted matrix from your research and justify the winner criterion by criterion.',
          fields: [
            {
              key: 'scores',
              label: 'Decision matrix (score 1–5 against each weighted criterion)',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'idea', label: 'Idea', placeholder: 'Idea name' },
                { key: 'scores', label: 'Scores per criterion', placeholder: 'e.g. Offline 5 ×5, Privacy 4 ×4 …' },
                { key: 'total', label: 'Weighted total', placeholder: 'e.g. 62' },
              ],
            },
            {
              key: 'why',
              label: 'Why does the chosen idea score highest, criterion by criterion?',
              type: 'textarea',
              exemplars: [
                'The photo-and-pin log scores highest because it works offline (the most heavily weighted criterion), needs no account which protects privacy, and was rated easiest by the resident I interviewed. The map idea scored lower on offline use, and the chat idea lost on cost.',
                'I chose the anonymous form because privacy was weighted 5, and it is the only idea where workers never enter a name. It is slightly less rich than the dashboard idea, but the research says trust matters more than detail.',
                'The claim checker won on time-to-answer and clarity. Although the footprint tracker scored well on data, it failed my must-not of guilt, which my matrix penalised.',
              ],
              celebrateKeywords: ['because', 'weighted', 'whereas', 'lower', 'highest', 'research'],
              points: 10,
            },
          ],
        },
        {
          key: 'lens',
          label: 'Sustainability lens on a digital product',
          icon: '🌱',
          criterion: 'B.iii',
          blurb: 'Digital is not weightless: servers, devices, images and data all use energy and materials. Show how you will keep yours light and honest.',
          fields: [
            {
              key: 'footprint',
              label: 'Where does your product use energy or materials, and how will you keep it light?',
              type: 'textarea',
              exemplars: [
                'Data centres and phones use energy. I will keep images small, store only what is needed, avoid autoplay video and run on one lightweight page so it works on old phones and does not force people to buy new devices.',
                'The main footprint is servers and data storage. I will avoid keeping data forever, compress photos before upload, and host on a provider that reports its energy use.',
                'Device use matters most, so the tool must work on old phones. I will limit tracking, cut heavy scripts and design for offline use, which saves data and energy.',
              ],
              celebrateKeywords: ['servers', 'energy', 'data', 'device', 'old phones', 'storage'],
              points: 10,
            },
            {
              key: 'credits',
              label: 'If your product touched carbon credits or offsets, how would it stop greenwashing? (optional)',
              type: 'textarea',
              exemplars: [
                'It would show whether a credit is verified and additional, cap how much can be offset, and make the community’s share of the money visible so nobody can hide behind vague green claims.',
                'I would display the four tests — additional, permanent, verified, no leakage — for every credit and warn when a claim relies on offsets instead of real cuts.',
              ],
              celebrateKeywords: ['verified', 'additional', 'permanent', 'leakage', 'cap'],
              points: 10,
            },
          ],
        },
        {
          key: 'drawings',
          label: 'Planning drawings',
          icon: '✏️',
          criterion: 'B.iv',
          blurb: 'Accurate, detailed drawings: screens or a flow diagram detailed enough that someone else could build it. Paste a link to a sketch or wireframe if you have one.',
          fields: [
            {
              key: 'screens',
              label: 'Screens and their purpose',
              type: 'table',
              minRows: 4,
              columns: [
                { key: 'screen', label: 'Screen', placeholder: 'e.g. Home' },
                { key: 'purpose', label: 'Purpose', placeholder: 'e.g. Start a report in one tap' },
                { key: 'elements', label: 'Key elements & sizes', placeholder: 'e.g. 1 large button (48px), status bar' },
                { key: 'next', label: 'Leads to', placeholder: 'e.g. Camera' },
              ],
            },
            {
              key: 'flow',
              label: 'User flow or data flow (or a link to your sketch)',
              type: 'textarea',
              exemplars: [
                'The user opens the home screen, taps Add a report, takes a photo, chooses a colour, and the report is saved on the phone. When signal returns it syncs to a shared map. The council view reads from that map and can mark reports as acknowledged, which the user then sees.',
                'Worker opens the app, picks a category, writes one sentence, and submits. The report goes to a store with no name attached. A manager dashboard shows counts and marks each as seen, and the worker sees the status without logging in.',
              ],
              celebrateKeywords: ['then', 'saved', 'syncs', 'reads', 'status'],
              points: 10,
            },
            {
              key: 'requirements',
              label: 'What is needed to make it: tools, data, permissions',
              type: 'textarea',
              exemplars: [
                'I need a free wireframing tool, sample photos and a small dataset of test reports, plus permission from the school to test with two classmates. No real personal data will be used.',
                'I will build a clickable prototype in a slide or design tool, use invented sample data, and ask two consenting testers to try it.',
              ],
              celebrateKeywords: ['tool', 'data', 'permission', 'consent', 'sample'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'worksheet',
      key: 'planreflect',
      label: 'Plan & Reflect',
      icon: '🧭',
      intro: {
        title: '🧭 Criteria C & D — Creating and Evaluating (plan and reflect)',
        blurb:
          'Plan how you will make and test your product, design a test that produces data, think about its impact and its end of life, then reflect on the whole journey — starting from the game. Work at your own pace: no need to click Next.',
      },
      overview: {
        brief: {
          context: 'A design is only as good as the plan to make it and the evidence that it works. This part looks forward (how you will make and test it) and back (what it means for the community and what you learned).',
          task: 'Plan the make so a peer could follow it, keep an honest log of changes, design a test that produces data, explain the impact and end of life of your product, and reflect on the whole journey.',
          produce: ['A logical plan with checkpoints and risks', 'A change log with reasons and evidence', 'A test design with a prediction and a plan to protect your testers', 'The impact on the community and a circular ending', 'A reflection that uses something from the game as evidence'],
          assessedOn: ['C.i', 'C.iv', 'D.i', 'D.iv'],
          time: 'Work at your own pace · your work saves automatically',
        },
        flow: [
          { strand: 'C.i', title: 'A logical plan', asks: 'Steps, resources, time, checkpoints and risks a peer could follow.', sections: ['plan'] },
          { strand: 'C.iv', title: 'Changes and why', asks: 'Log each change with evidence and its effect.', sections: ['changes'] },
          { strand: 'D.i', title: 'Testing method', asks: 'Design a test that generates data, and protect your testers.', sections: ['testing'] },
          { strand: 'D.iv', title: 'Impact and circular ending', asks: 'Who is better or worse off, and what happens at end of life.', sections: ['impact'] },
          { strand: 'Reflection', title: 'Reflection', asks: 'Look back over the game and your work. Not graded as a strand.', sections: ['reflect'] },
        ],
      },
      sections: [
        {
          key: 'plan',
          label: 'A logical plan',
          icon: '🗓️',
          criterion: 'C.i',
          blurb: 'A plan a peer could follow: steps, tools, time and checkpoints.',
          fields: [
            {
              key: 'steps',
              label: 'Plan',
              type: 'table',
              minRows: 5,
              columns: [
                { key: 'step', label: 'Step', placeholder: 'e.g. Sketch the three key screens' },
                { key: 'resources', label: 'Tools / resources', placeholder: 'e.g. Wireframing tool, sample data' },
                { key: 'time', label: 'Time', placeholder: 'e.g. 40 min' },
                { key: 'check', label: 'Checkpoint (how I know it is done)', placeholder: 'e.g. A classmate can find the report button' },
              ],
            },
            {
              key: 'efficient',
              label: 'How does this plan use time and resources efficiently, and could a peer follow it?',
              type: 'textarea',
              exemplars: [
                'I do the riskiest step first, reuse the same sample dataset for the prototype and the test, and give each step a checkpoint. A peer could follow it because each step names its tool, its time and how to tell it is finished.',
                'The plan is ordered so the test setup comes before polishing. I reuse templates, and the checkpoints mean a partner can check my progress without asking me.',
              ],
              celebrateKeywords: ['because', 'first', 'reuse', 'checkpoint', 'peer'],
              points: 10,
            },
            {
              key: 'risks',
              label: 'Risks and what I will do about them',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'risk', label: 'Risk', placeholder: 'e.g. Testers unavailable' },
                { key: 'action', label: 'Mitigation', placeholder: 'e.g. Book two testers in week 1 and one backup' },
              ],
            },
          ],
        },
        {
          key: 'changes',
          label: 'Changes and justification',
          icon: '🔧',
          criterion: 'C.iv',
          blurb: 'Fill this in as you go. Any change to your design or plan must be fully justified.',
          fields: [
            {
              key: 'log',
              label: 'Change log',
              type: 'table',
              minRows: 2,
              columns: [
                { key: 'change', label: 'What changed', placeholder: 'e.g. Removed the login screen' },
                { key: 'why', label: 'Why (with evidence)', placeholder: 'e.g. Testers said an account would put them off' },
                { key: 'effect', label: 'Effect on the plan or design', placeholder: 'e.g. Saved 30 min and improved privacy' },
              ],
            },
          ],
        },
        {
          key: 'testing',
          label: 'Testing method that generates data',
          icon: '🧪',
          criterion: 'D.i',
          blurb: 'Design a test that produces real, measurable data — not opinions. Predict the result first.',
          fields: [
            {
              key: 'method',
              label: 'Test design',
              type: 'table',
              minRows: 3,
              columns: [
                { key: 'measure', label: 'What I measure', placeholder: 'e.g. Time to file a report' },
                { key: 'how', label: 'How (method, who, how many)', placeholder: 'e.g. Timed trial with 3 consenting testers' },
                { key: 'threshold', label: 'Success looks like…', placeholder: 'e.g. Under 60 seconds with no help' },
              ],
            },
            {
              key: 'predict',
              label: 'Predict the result before you test',
              type: 'textarea',
              exemplars: [
                'I predict testers will file a report in about 45 seconds, but two of three will hesitate at the colour step because the labels are small. I will compare this with my success threshold of 60 seconds.',
                'I expect most testers to understand the result screen, but I think the wording of the second question will confuse at least one person, so I will record where each tester pauses.',
              ],
              celebrateKeywords: ['predict', 'expect', 'because', 'threshold', 'compare'],
              points: 10,
            },
            {
              key: 'consent',
              label: 'How will you protect your testers?',
              type: 'textarea',
              exemplars: [
                'I will explain what I am testing, ask for consent, use invented sample data, record only timings and anonymous notes, and let testers stop at any time.',
                'Testers choose to take part, no real personal information is entered, I store results without names, and I thank them by showing what I learned.',
              ],
              celebrateKeywords: ['consent', 'anonymous', 'stop', 'invented', 'private'],
              points: 10,
            },
          ],
        },
        {
          key: 'impact',
          label: 'Impact and a circular ending',
          icon: '♻️',
          criterion: 'D.iv',
          blurb: 'Explain the impact on the community, and say what happens to your digital product at the end of its life.',
          fields: [
            {
              key: 'impact',
              label: 'Impact on the community',
              type: 'textarea',
              exemplars: [
                'If it works, residents get a shared record the council cannot easily dismiss, which could speed up testing and clean-up. A risk is that reports could be ignored or misused, so the tool should show the response, and it must not reveal where individuals live.',
                'Workers gain a safer way to speak up, which could improve conditions. But if managers see the reports as a nuisance the tool could raise tension, so anonymity and a clear response process matter.',
              ],
              celebrateKeywords: ['could', 'benefit', 'risk', 'because', 'community'],
              points: 10,
            },
            {
              key: 'circular',
              label: 'A circular ending for a digital product',
              type: 'textarea',
              hint: 'Data, servers, devices and code all have an end of life. What is reused, handed over, deleted or recycled?',
              exemplars: [
                'When the project ends I would delete personal data, hand the code over open-source to the community group, and keep the guide available offline. Because the tool runs on old phones it does not create e-waste, and the hosting can be switched off with nothing left to clean up.',
                'At end of life I would export the data to the community, delete servers and backups, publish the design so others can reuse it, and encourage installing it on phones people already own instead of buying new devices.',
              ],
              celebrateKeywords: ['delete', 'open-source', 'hand over', 'reuse', 'servers', 'devices', 'e-waste'],
              points: 10,
            },
          ],
        },
        {
          key: 'reflect',
          label: 'Reflection',
          icon: '🪞',
          criterion: 'Reflection',
          blurb: 'Look back over the game and your design work.',
          fields: [
            {
              key: 'responsibility',
              label: 'Who bears the primary responsibility for the ethical implications of a design: the designer, the manufacturer, or the consumer? Use something that happened in the game as evidence.',
              type: 'textarea',
              exemplars: [
                'I think responsibility is shared but designers hold the first responsibility because they decide what is possible. In the game the corporation could pick cheap chemicals, but the designer chose that material first, and consumers only chose among what was offered.',
                'The manufacturer carries the most because they control production, though the government sets the rules and consumers create demand. The carbon-credit round showed that when rules were weak, cheap offsets let companies avoid real change.',
              ],
              celebrateKeywords: ['because', 'however', 'game', 'shared', 'evidence'],
              points: 10,
            },
            {
              key: 'atl',
              label: 'What did you do differently as a researcher this time, and what would you improve?',
              type: 'textarea',
              exemplars: [
                'I prioritised my research instead of listing everything, asked for consent before interviewing, and checked the representative’s answers against my product analysis. Next time I would talk to a real person from the community rather than rely on one interview.',
                'I ranked my questions and used the ethics note to decide what not to collect. I would improve by testing earlier and keeping my change log up to date as I went.',
              ],
              celebrateKeywords: ['prioritised', 'consent', 'improve', 'next time', 'checked'],
              points: 10,
            },
          ],
        },
      ],
    },
    {
      type: 'grading',
      key: 'grading',
      label: 'Teacher grading',
      icon: '🎓',
      intro: { title: '🎓 Grading', blurb: 'Score each strand from 1 to 8 against the Year 5 objectives, with written feedback.' },
      strands: [
        { key: 'A.i', label: 'A.i Explain and justify the need for a specified client' },
        { key: 'A.ii', label: 'A.ii Identify and prioritise the research needed' },
        { key: 'A.iii', label: 'A.iii Analyse a range of existing products' },
        { key: 'A.iv', label: 'A.iv Develop a detailed design brief' },
        { key: 'B.i', label: 'B.i Develop a specification with clear success criteria' },
        { key: 'B.ii', label: 'B.ii Develop a range of feasible ideas others can interpret' },
        { key: 'B.iii', label: 'B.iii Present the chosen design and justify its selection' },
        { key: 'B.iv', label: 'B.iv Accurate, detailed planning drawings' },
        { key: 'C.i', label: 'C.i A logical plan peers could follow' },
        { key: 'D.i', label: 'D.i Testing methods that generate data' },
        { key: 'D.iv', label: 'D.iv Impact on the community, including a circular ending' },
      ],
    },
  ],
  debriefQuestions: [
    'To what extent should designers prioritize sustainability over immediate cost or aesthetic appeal?',
    'Is it always possible to create a design with a universally positive long-term impact?',
    'Who bears the primary responsibility for the ethical implications of a design: the designer, the manufacturer, or the consumer?',
  ],
}
