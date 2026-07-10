export interface ProjectLink {
  type: 'github' | 'docs' | 'website' | 'facebook'
  url: string
  label?: string
}

export interface Project {
  name: string
  role: string
  description: string
  languages: string[]
  tools: string[]
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    name: 'Estuary',
    role: 'Core Developer, Professional project',
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
    name: 'RefEd',
    role: 'Core Developer, Professional project',
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
    name: 'PikaRun',
    role: 'Sole Developer, Personal project',
    description:
      "A minigame in which the user plays as the Pokemon Pikachu in an infinite run, where Pikachu must jump over various obstacles to score points as he runs. Inspired by Google Chrome's Dinosaur Minigame.",
    languages: ['Python'],
    tools: ['Pygame'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/InfiniteRunnerMinigame' }],
  },
  {
    name: 'Giudice',
    role: 'Lead Developer, Professional project',
    description:
      'An automated web application to simplify judging at hackathons, it features automatic table and judge assignments to projects. A login for judges will soon be implemented, so projects can be judged directly in the app.',
    languages: ['Python'],
    tools: ['Flask'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/giudice' }],
  },
  {
    name: 'Fortune API',
    role: 'Sole Developer, Personal project',
    description:
      'A RESTful API written in Go, for the classic fortune command-line utility (in the fortune-mod package). It chooses a random fun fortune to give to the user.',
    languages: ['Go'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/sarah256/fortune-api' }],
  },
  {
    name: 'Yo-setta Stone',
    role: 'Lead Developer, Hackathon project',
    description:
      'This application employs machine learning and natural language processing to evaluate the definition of slang words based on the context of the tweets they are used in.',
    languages: ['Python'],
    tools: ['Flask', 'NLTK', 'Gensim'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/lingo-learner' }],
  },
  {
    name: 'Museo',
    role: 'Core Developer, Professional project',
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
    name: 'SheHacks Live (v2018)',
    role: 'Core Developer, Professional project',
    description:
      'A "live" website for the SheHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/helenzhangg/shehackslive' }],
  },
  {
    name: 'BostonHacks Live (v2017)',
    role: 'Core Developer, Professional project',
    description:
      'A "live" website for the BostonHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: [],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/diretta' }],
  },
  {
    name: 'BostonHacks Live (v2018)',
    role: 'Core Developer, Professional project',
    description:
      'A (remade for 2018) "live" website for the BostonHacks hackathon. It keeps participants informed while the event is underway.',
    languages: ['JavaScript', 'HTML/CSS'],
    tools: ['Vue.js'],
    links: [{ type: 'github', url: 'https://github.com/Bostonhacks/atteraggio-f18' }],
  },
  {
    name: 'Appleseed Crepe Website',
    role: 'Lead Developer, Professional project',
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
    name: 'Spade',
    role: 'Lead Developer, Professional project',
    description:
      "A Python script that identifies any modules that depend on others by parsing a module's ModuleMD and comparing it to the blacklist of modules. Written for RHEL/Fedora modules.",
    languages: ['Python'],
    tools: ['Python Requests'],
    links: [{ type: 'github', url: 'https://github.com/sarah256/Spade' }],
  },
]
