import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { SectionHeader } from '../components/SectionHeader'
import styles from './ProgrammingPage.module.css'

export function ProgrammingPage() {
  return (
    <div>
      <SectionHeader title="Projects" subtitle="Open source, professional, and personal work" />
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  )
}
