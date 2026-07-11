import { useMemo, useState } from 'react'
import { trackProjectFiltersChanged } from '../lib/analytics'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import {
  defaultProjectFilters,
  filterProjects,
  ProjectFilters,
} from '../components/ProjectFilters'
import { SectionHeader } from '../components/SectionHeader'
import styles from './ProgrammingPage.module.css'

export function ProgrammingPage() {
  const [filters, setFilters] = useState(defaultProjectFilters)

  const filteredProjects = useMemo(() => filterProjects(projects, filters), [filters])

  const handleFiltersChange = (nextFilters: typeof filters) => {
    trackProjectFiltersChanged({
      type: nextFilters.type,
      languages: nextFilters.languages,
      tools: nextFilters.tools,
    })
    setFilters(nextFilters)
  }

  return (
    <div>
      <SectionHeader title="Projects" subtitle="Open source, professional, and personal work" />
      <ProjectFilters filters={filters} onChange={handleFiltersChange} />
      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No projects match the current filters.</p>
      )}
    </div>
  )
}
