export interface ProjectLink {
  type: 'github' | 'docs' | 'website' | 'facebook'
  url: string
  label?: string
}

export type ProjectType = 'professional' | 'personal' | 'hackathon'

export interface Project {
  id: string
  name: string
  role: string
  type: ProjectType
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
]

export const projects: Project[] = [
  {
    id: 'estuary',
    name: 'Estuary',
    role: 'Core Developer',
    type: 'professional',
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
    description:
      'An Android application developed with a team of students and professors as a supplemental educational platform for child refugees, with user profiles keeping track of progress in modules of various subjects.',
    languages: ['Java'],
    tools: ['Firebase', 'Android Studio'],
    links: [
      { type: 'github', url: 'https://github.com/vaibhav19sharma/RefEd' },
      { type: 'facebook', url: 'https://www.facebook.com/refedinitiative/', label: 'Initiative' },
    ],
  },
  {
    id: 'pikarun',
    name: 'PikaRun',
    role: 'Sole Developer',
    type: 'personal',
    description:
      "A minigame in which the user plays as the Pokemon Pikachu in an infinite run, where Pikachu must jump over various obstacles to score points as he runs. Inspired by Google Chrome's Dinosaur Minigame.",
    languages: ['Python'],
    tools: ['Pygame'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/InfiniteRunnerMinigame' }],
  },
  {
    id: 'giudice',
    name: 'Giudice',
    role: 'Lead Developer',
    type: 'professional',
    description:
      'An automated web application to simplify judging at hackathons, it features automatic table and judge assignments to projects. A login for judges will soon be implemented, so projects can be judged directly in the app.',
    languages: ['Python'],
    tools: ['Flask'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/giudice' }],
  },
  {
    id: 'fortune-api',
    name: 'Fortune API',
    role: 'Sole Developer',
    type: 'personal',
    description:
      'A RESTful API written in Go, for the classic fortune command-line utility (in the fortune-mod package). It chooses a random fun fortune to give to the user.',
    languages: ['Go'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/sarah256/fortune-api' }],
  },
  {
    id: 'yo-setta-stone',
    name: 'Yo-setta Stone',
    role: 'Lead Developer',
    type: 'hackathon',
    description:
      'This application employs machine learning and natural language processing to evaluate the definition of slang words based on the context of the tweets they are used in.',
    languages: ['Python'],
    tools: ['Flask', 'NLTK', 'Gensim'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/lingo-learner' }],
  },
  {
    id: 'museo',
    name: 'Museo',
    role: 'Core Developer',
    type: 'professional',
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
    id: 'shehacks-live-2018',
    name: 'SheHacks Live (v2018)',
    role: 'Core Developer',
    type: 'professional',
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
    type: 'professional',
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
    type: 'professional',
    description:
      'A (remade for 2018) "live" website for the BostonHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: ['Vue.js'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/atteraggio-f18' }],
  },
  {
    id: 'appleseed-crepe',
    name: 'Appleseed Crepe Website',
    role: 'Lead Developer',
    type: 'professional',
    description:
      'A simple website built for the Appleseed Crepe and Bread restaurant, based in Massachusetts. It provides a menu and information on the restaurant itself.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: [],
    links: [
      { type: 'github', url: 'https://github.com/sarah256/AppleseedCrepe' },
      { type: 'website', url: 'http://appleseedcrepe.com/', label: 'Website' },
    ],
  },
  {
    id: 'spade',
    name: 'Spade',
    role: 'Lead Developer',
    type: 'professional',
    description:
      "A Python script that identifies any modules that depend on others by parsing a module's ModuleMD and comparing it to the blacklist of modules. Written for RHEL/Fedora modules.",
    languages: ['Python'],
    tools: ['Python Requests'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/Spade' }],
  },
]

export function getProjectLanguages(projectList: Project[] = projects): string[] {
  return [...new Set(projectList.flatMap((project) => project.languages))].sort()
}

export function getProjectTools(projectList: Project[] = projects): string[] {
  return [...new Set(projectList.flatMap((project) => project.tools))].sort()
}
