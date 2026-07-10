export interface Experience {
  id: string
  company: string
  title: string
  dates: string
  bullets: string[]
  languages: string[]
  tools: string[]
}

export const experiences: Experience[] = [
  {
    id: 'jellyfish',
    company: 'Jellyfish',
    title: 'Senior Software Engineer / Software Engineering Team Lead',
    dates: 'May 2021 – May 2026',
    bullets: [
      'Architected and operationalized a scalable AI tooling system embedded within the company’s core application, designed to support high volumes of data and queries',
      'Founded and led a team from the ground up to create our second product, which directly contributes to a 30% retention increase in our customer base',
      'Led and developed the process around a new on call rotation, along with revitalized documentation that is much more accessible, reducing incoming support requests by about 20%',
      'Founded and led a second team with the mission to substantially increase TAM by introducing a new version of our core product offering to support a wider variety of data ingestion',
      'Primary architect of an industry-leading cost capitalization software product (DevFinOps)',
      'Mentored engineers and first-time team leads across architecture, business strategy, execution, and technical decision-making',
      'Optimized CI resulting in a 30% reduction in run time',
      'Partnered with product leadership to define team strategy and roadmap direction for key product initiatives',
      'Defined technical investment strategy to reduce maintenance burden and improve long-term platform reliability',
      'Migrated application infrastructure from AL2 to AL2023',
    ],
    languages: ['Python', 'Typescript', 'SQL'],
    tools: ['S3', 'AI', 'Bedrock', 'AWS', 'Django', 'React', 'Pandas'],
  },
  {
    id: 'hubspot',
    company: 'Hubspot',
    title: 'Software Engineer',
    dates: 'August 2020 – April 2021',
    bullets: ['Developed an internal billing administrative software'],
    languages: ['Java'],
    tools: ['Git'],
  },
  {
    id: 'redhat',
    company: 'Red Hat',
    title: 'DevOps Software Engineer Intern',
    dates: 'May 2018 – May 2020',
    bullets: [
      'End-to-end development for a message-driven microservice to update a graph database in real time, providing significant improvement in the speed of data retrieval',
      'Core developer for an app for visualizing a build pipeline and handling CVE data, as well as adding features to identify bottlenecks, substantially improving the ability to quickly identify problems on the pipeline',
      'Responsible for the deployment of multiple containerized applications',
      'Met with stakeholders to scope products and deadlines',
      'Used Sphinx and Github webhooks to develop automatically generated and automatically deployed documentation',
      'Recorded demos to explain newly developed features/projects sent out department-wide',
    ],
    languages: ['Python', 'JavaScript'],
    tools: ['Flask', 'Angular', 'Git', 'Linux', 'Docker', 'OpenShift', 'Neomodel', 'Neo4j', 'Sphinx'],
  },
  {
    id: 'bhacks',
    company: 'BostonHacks',
    title: 'Organizer/Infrastructure Engineer',
    dates: 'September 2017 – Present',
    bullets: [
      'Assisted in the development and development infrastructure needs of the hackathon team, and general organizational needs',
      'Developed a Node.js app to assist in the judging process',
      'Deployed and managed applications on DigitalOcean',
      'Developed multiple web applications with hundreds of users',
    ],
    languages: ['JavaScript', 'HTML/CSS'],
    tools: ['Git', 'Node.js', 'Digital Ocean', 'CircleCI'],
  },
  {
    id: 'spark',
    company: 'BU Spark!',
    title: 'Consultant and Developer',
    dates: 'January 2018 – August 2018',
    bullets: [
      'Worked with startups and other clients to develop humanitarian technologies catered to their needs',
      'Developed technologies such as mobile and web applications based on client specifications',
    ],
    languages: ['Java'],
    tools: ['Git', 'Android Studio'],
  },
  {
    id: 'shehacks',
    company: 'SheHacks',
    title: 'Organizer/Developer',
    dates: 'November 2017 – February 2018',
    bullets: [
      'Assisted in the web development needs of one of the largest female and non-binary hackathons in the world, as well as general organizational needs',
      'Contributed to multiple websites with hundreds of users',
    ],
    languages: ['JavaScript', 'HTML/CSS'],
    tools: ['Git'],
  },
  {
    id: 'yprime',
    company: 'YPrime',
    title: 'Junior Software Developer',
    dates: 'May 2017 – July 2017',
    bullets: [
      'Developed clinical software intended to handle and display data for clinical research in the pharmaceutical industry',
      'Handled large data sets using SQL in order to ensure software functionality',
      'Created a dashboard to display data in a succinct and visually pleasing way',
      'Wrote high-coverage unit tests for a large piece of software, increasing test coverage by ~75%',
    ],
    languages: ['C#', 'JavaScript', 'SQL', 'HTML/CSS'],
    tools: ['Git', 'Visual Studio', 'Management Studio'],
  },
]

export interface Accolade {
  title: string
  subtitle: string
  date: string
  bullets: string[]
  watchLink?: { url: string; label: string }
}

export const accolades: Accolade[] = [
  {
    title: 'Podcast',
    subtitle: 'Off the VPN',
    date: 'September 3, 2024',
    bullets: ['Special guest on the "Off the VPN" podcast'],
    watchLink: {
      url: 'https://www.youtube.com/watch?v=Yy_JiwVY1mI&list=PLn561YGiskl8pS4Xao0sN8MKH5x-N3BsR&ab_channel=JellyfishSoftware',
      label: 'here!',
    },
  },
  {
    title: 'Second place',
    subtitle: 'Hack the Gap',
    date: 'October 2017',
    bullets: [
      "Attended an all-women's hackathon event focusing on closing the gender gap in STEM and awarded second place",
      'Created a website with an interactive educational game in JavaScript and HTML/CSS made for young girls',
    ],
  },
]
