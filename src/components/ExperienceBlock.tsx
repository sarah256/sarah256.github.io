import type { Experience } from '../data/experience'
import { Tags } from './Tag'
import styles from './ExperienceBlock.module.css'

interface ExperienceBlockProps {
  experience: Experience
}

export function ExperienceBlock({ experience }: ExperienceBlockProps) {
  return (
    <article id={experience.id} className={styles.block}>
      <div className={styles.sidebar}>
        <h3 className={styles.company}>{experience.company}</h3>
        <p className={styles.title}>{experience.title}</p>
        <span className={styles.dateBadge}>{experience.dates}</span>
      </div>
      <div className={styles.content}>
        <ul className={styles.list}>
          {experience.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <Tags languages={experience.languages} tools={experience.tools} />
      </div>
    </article>
  )
}
