import { ExternalLink } from 'lucide-react'
import type { Project } from '../data/projects'
import { TerminalWindow } from './TerminalWindow'
import { Tags } from './Tag'
import styles from './ProjectCard.module.css'

const linkLabels: Record<Project['links'][number]['type'], string> = {
  github: 'github',
  docs: 'docs',
  website: 'site',
  facebook: 'fb',
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TerminalWindow title={`~/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.name}>{project.name}</h3>
          <div className={styles.links}>
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                title={link.label}
              >
                {link.label ?? linkLabels[link.type]}
                <ExternalLink className={styles.linkIcon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <p className={styles.role}>
          {project.role}
          <span className={styles.type}> · {project.type}</span>
          <span className={styles.year}> · {project.year}</span>
        </p>
        <p className={styles.description}>{project.description}</p>
        <Tags languages={project.languages} tools={project.tools} />
      </div>
    </TerminalWindow>
  )
}
