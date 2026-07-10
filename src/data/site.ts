export const site = {
  name: 'Sarah Rieger',
  tagline: 'Software engineer · designer · Brooklyn',
  email: 'srieger256@gmail.com',
  links: {
    github: 'https://github.com/sarah256',
    linkedin: 'https://www.linkedin.com/in/sarah-rieger-66617a145/',
  },
} as const

export const navItems = [
  { label: 'home', path: '/' },
  { label: 'programming', path: '/programming' },
  { label: 'design', path: '/design' },
  { label: 'resume', path: '/resume' },
] as const
