// Canonical production origin, shared by metadata, robots.ts and sitemap.ts.
// If your primary domain is the www host instead, change this one constant.
export const SITE_URL = 'https://www.critabcd.com'

// Subjects offered — rendered as schema.org/Course structured data on the
// homepage (ItemList of Courses). Helps search + generative engines understand
// the catalogue. `href` matches the in-app route.
export const SITE_COURSES: { name: string; href: string; description: string }[] = [
  {
    name: 'IB MYP Physics',
    href: '/physics-papers',
    description:
      'IB MYP Physics: past papers, topic- and criterion-level practice, and simulated exams with AI marking against the MYP Sciences criteria (A–D).',
  },
  {
    name: 'IB MYP Chemistry',
    href: '/chem-papers',
    description:
      'IB MYP Chemistry: past papers, topic- and criterion-level practice, and simulated exams with AI marking against the MYP Sciences criteria (A–D).',
  },
  {
    name: 'IB MYP Biology',
    href: '/bio-papers',
    description:
      'IB MYP Biology: past papers, topic- and criterion-level practice, and simulated exams with AI marking against the MYP Sciences criteria (A–D).',
  },
  {
    name: 'IB MYP Individuals & Societies (Humanities)',
    href: '/humanities-papers',
    description:
      'IB MYP Individuals & Societies (Integrated Humanities): past papers and practice marked against the MYP I&S criteria (A–D).',
  },
  {
    name: 'IB MYP Geography',
    href: '/geography-papers',
    description:
      'IB MYP Geography (Individuals & Societies): past papers and practice marked against the MYP I&S criteria (A–D).',
  },
  {
    name: 'IB MYP Design',
    href: '/design',
    description:
      'IB MYP Design (Years 4–5): a project-based self-study module. Study worked exemplar projects and build your own design folder through the design cycle — Criteria A (Inquiring and analysing), B (Developing ideas), C (Creating the solution) and D (Evaluating).',
  },
]

// Canonical FAQ — the single biggest AI-citation (GEO) signal. Rendered as
// FAQPage JSON-LD on the homepage and mirrored (by hand) into public/llms.txt.
// Keep answers factual, self-contained and BLUF. If you edit these, update llms.txt.
export const SITE_FAQ: { q: string; a: string }[] = [
  {
    q: 'What is CritABCD?',
    a: 'CritABCD is an IB Middle Years Programme (MYP) e-assessment and self-study platform offering past papers, AI-graded practice and instant, criterion-referenced feedback across several MYP subjects.',
  },
  {
    q: 'Which subjects does CritABCD cover?',
    a: 'Physics, Chemistry, Biology, Individuals & Societies (Humanities), Geography, and a project-based Design self-study module.',
  },
  {
    q: 'How is my work graded on CritABCD?',
    a: 'Work is marked against the four IB MYP assessment criteria (A, B, C and D), each scored from 1 to 8, with AI-generated feedback tied to each criterion rather than a single percentage.',
  },
  {
    q: 'What is the MYP Design module?',
    a: 'A project-based self-study module for MYP Years 4–5. You study worked exemplar projects and then build your own design folder through the design cycle: Criterion A (Inquiring and analysing), B (Developing ideas), C (Creating the solution) and D (Evaluating).',
  },
  {
    q: 'Who is CritABCD for?',
    a: 'IB MYP students, roughly ages 11 to 16, and their teachers.',
  },
  {
    q: 'Can I take full practice exams?',
    a: 'Yes. CritABCD offers simulated exams under timed conditions with AI marking and instant feedback.',
  },
  {
    q: 'How do I practise a specific topic or IB criterion?',
    a: 'You can practise by topic (filter questions by concept) or by IB criterion (target a specific A–D skill) before attempting a full simulated exam.',
  },
]
