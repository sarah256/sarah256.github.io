export interface ProjectLink {
  type: 'github' | 'docs' | 'website' | 'facebook'
  url: string
  label?: string
}

export type ProjectType = 'professional' | 'personal' | 'hackathon' | 'school'

export interface Project {
  id: string
  name: string
  role: string
  type: ProjectType
  year: number
  description: string
  languages: string[]
  tools: string[]
  links: ProjectLink[]
}

export const projectTypes: { id: ProjectType | 'all'; label: string }[] = [
  { id: 'all', label: 'all' },
  { id: 'professional', label: 'professional' },
  { id: 'personal', label: 'personal' },
  { id: 'hackathon', label: 'hackathon' },
  { id: 'school', label: 'school' },
]

export const projects: Project[] = [
  {
    id: 'devfinops',
    name: 'DevFinOps',
    role: 'Lead Developer',
    type: 'professional',
    year: 2025,
    description:
      'DevFinOps is an industry-leading cost capitalization software product. It helps businesses track and optimize their costs, and provides insights into their cost structure.',
    languages: ['Python', 'TypeScript'],
    tools: ['React', 'Django', 'Pandas', 'S3'],
    links: [
      { type: 'website', url: 'https://jellyfish.co/solutions/software-capitalization/', label: 'Product Page' },
    ],
  },
  {
    id: 'estuary',
    name: 'Estuary',
    role: 'Core Developer',
    type: 'professional',
    year: 2020,
    description:
      'Estuary visualizes a build to release pipeline, with a focus on the automation of container rebuilds due to CVEs (security vulnerabilities). Hosted on OpenShift, it gathers data in real time from a message bus.',
    languages: ['Python', 'JavaScript'],
    tools: ['Neomodel', 'Neo4j', 'OpenShift'],
    links: [
      { type: 'github', url: 'https://github.com/release-engineering/estuary-api' },
      { type: 'docs', url: 'https://estuary-api.readthedocs.io/en/latest/', label: 'Documentation' },
    ],
  },
  {
    id: 'refed',
    name: 'RefEd',
    role: 'Core Developer',
    type: 'professional',
    year: 2018,
    description:
      'An Android application developed with a team of students and professors as a supplemental educational platform for child refugees, with user profiles keeping track of progress in modules of various subjects.',
    languages: ['Java'],
    tools: ['Firebase', 'Android Studio'],
    links: [
      { type: 'github', url: 'https://github.com/vaibhav19sharma/RefEd' },
      { type: 'facebook', url: 'https://www.facebook.com/refedinitiative/', label: 'Organization' },
    ],
  },
  {
    id: 'spade',
    name: 'Spade',
    role: 'Lead Developer',
    type: 'professional',
    year: 2020,
    description:
      "A Python script that identifies any modules that depend on others by parsing a module's ModuleMD and comparing it to the blacklist of modules. Written for RHEL/Fedora modules.",
    languages: ['Python'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/sarah256/Spade' }],
  },
  {
    id: 'numbear',
    name: 'Numbear',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'A daily puzzle game to challenge the user to build an equation with only a specific subset of numbers in order to hit the target number of the day.',
    languages: ['Typescript'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Express', 'Devvit'],
    links: [{ type: 'website', url: 'https://www.reddit.com/r/NumBear/', label: 'Live game' }],
  },
  {
    id: 'ai-news',
    name: 'AI News Roundup',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'Uses Claude / Anthropic API to process AI and tech newsletter emails and generate a weekly roundup spreadsheet with categorized, importance-rated updates.',
    languages: ['Python'],
    tools: ['AI', 'Anthropic API', 'Claude', 'Tailwind CSS', 'Express', 'Devvit'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/ai-news-roundup', label: 'Code' }],
  },
  {
    id: 'stock-tracker',
    name: 'Stock Tracker',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'An AI-agent-driven options trading analytics platform that gathers data from multiple sources, as well as leverages an LLM and mathematical formulas to evaluate potential options trading opportunities.',
    languages: ['Python'],
    tools: ['AI', 'Bedrock', 'AWS', 'MCP', 'Data science'],
    links: [],
  },
  {
    id: 'personal-website',
    name: 'Personal Site',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'My personal website - the one you\'re on right now!',
    languages: ['TypeScript'],
    tools: ['React', 'Vite', 'Tailwind CSS', 'Next.js'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/sarah256.github.io', label: 'Code' },
    { type: 'website', url: 'https://sarahrieger.net', label: 'Website' },
    ],
  },
  {
    id: 'pmf-analyzer',
    name: 'Hyphae',
    role: 'Sole Developer',
    type: 'personal',
    year: 2025,
    description:
      'A tool to help you understand whether your product idea has real product-market fit. It combines live competitive intelligence, social demand signals, DynamoDB persistence, and AWS Bedrock AI insights',
    languages: ['TypeScript'],
    tools: ['React', 'AI', 'Bedrock', 'DynamoDB', 'AWS', 'Next.js'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/hyphae', label: 'Code' },
    ],
  },
  {
    id: 'foxblox',
    name: 'FoxBlox',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'FoxBlox is a modular AI toolkit for small businesses. Users run our prebuilt "blocks" (AI tools) for business strategy, marketing, sales, admin tasks, and more, through a simple web UI.',
    languages: ['TypeScript', 'Python', 'PostgreSQL'],
    tools: ['React', 'Next.js', 'Django', 'AI', 'Bedrock', 'AWS', 'Tailwind CSS', 'Shadcn UI'],
    links: [],
  },
  {
    id: 'momentshare',
    name: 'MomentShare',
    role: 'Sole Developer',
    type: 'personal',
    year: 2025,
    description:
      'An AI toolkit paired with other useful tooling in order to simplify wedding planning.',
    languages: ['TypeScript'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'AI', 'Bedrock', 'AWS'],
    links: [{ type: 'website', url: 'https://www.momentshare.co', label: 'Website' }],
  },
  {
    id: 'quizquokka',
    name: 'QuizQuokka',
    role: 'Sole Developer',
    type: 'personal',
    year: 2025,
    description:
      'A tool to create custom quizzes for fun business marketing.',
    languages: ['TypeScript'],
    tools: ['React', 'Tailwind CSS'],
    links: [{ type: 'website', url: 'https://www.momentshare.co/quizzes/2', label: 'Example Quiz' }],
  },
  {
    id: 'drawing-refs',
    name: 'Drawing Refs Generator',
    role: 'Sole Developer',
    type: 'personal',
    year: 2026,
    description:
      'Timed drawing reference and inspiration tool inspired by Line of Action. Configure 1–4 blocks with Pinterest boards, word lists, and color palettes, then run a session with pause / resume / back / forward controls.',
    languages: ['TypeScript'],
    tools: ['React', 'Tailwind CSS'],
    links: [{ type: 'code', url: 'https://github.com/sarah256/drawing-insp-generator', label: 'Code' }],
  },
  {
    id: 'yo-setta-stone',
    name: 'Yo-setta Stone',
    role: 'Lead Developer',
    type: 'hackathon',
    year: 2019,
    description:
      'This application employs machine learning and natural language processing to evaluate the definition of slang words based on the context of the tweets they are used in.',
    languages: ['Python'],
    tools: ['AI', 'Flask', 'NLTK'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/lingo-learner' }],
  },
  {
    id: 'greenhouse',
    name: 'Greenhouse',
    role: 'Sole Developer',
    type: 'personal',
    year: 2021,
    description:
      'A web app to keep track of plant watering schedules',
    languages: ['JavaScript', 'Python'],
    tools: ['MongoDB', 'React', 'Flask'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/greenhouse', label: 'Code' }],
  },
  {
    id: 'museo',
    name: 'Museo',
    role: 'Core Developer',
    type: 'school',
    year: 2018,
    description:
      'A "museum" website built for BostonHacks. It displays data from past events, and the history of BostonHacks.',
    languages: ['Ruby', 'JavaScript', 'HTML/CSS'],
    tools: ['Jekyll'],
    links: [
      { type: 'github', url: 'https://github.com/Bostonhacks/giudice' },
      { type: 'website', url: 'https://museo.bostonhacks.io/', label: 'Website' },
    ],
  },
  {
    id: 'giudice',
    name: 'Giudice',
    role: 'Lead Developer',
    type: 'school',
    year: 2017,
    description:
      'An automated web application to simplify judging at hackathons, it features automatic table and judge assignments to projects. A login for judges will soon be implemented, so projects can be judged directly in the app.',
    languages: ['Python'],
    tools: ['Flask'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/giudice' }],
  },
  {
    id: 'shehacks-live-2018',
    name: 'SheHacks Live (v2018)',
    role: 'Core Developer',
    type: 'school',
    year: 2018,
    description:
      'A "live" website for the SheHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/helenzhangg/shehackslive' }],
  },
  {
    id: 'bostonhacks-live-2017',
    name: 'BostonHacks Live (v2017)',
    role: 'Core Developer',
    type: 'school',
    year: 2017,
    description:
      'A "live" website for the BostonHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/diretta' }],
  },
  {
    id: 'bostonhacks-live-2018',
    name: 'BostonHacks Live (v2018)',
    role: 'Core Developer',
    type: 'school',
    year: 2018,
    description:
      'A (remade for 2018) "live" website for the BostonHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: ['Vue.js'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/atteraggio-f18' }],
  },
]

export function getProjectLanguages(projectList: Project[] = projects): string[] {
  return [...new Set(projectList.flatMap((project) => project.languages))].sort()
}

export function getProjectTools(projectList: Project[] = projects): string[] {
  return [...new Set(projectList.flatMap((project) => project.tools))].sort()
}
