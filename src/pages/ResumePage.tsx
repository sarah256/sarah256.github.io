import { accolades, experiences } from '../data/experience'
import { site } from '../data/site'
import { ExperienceBlock } from '../components/ExperienceBlock'
import { SectionHeader } from '../components/SectionHeader'
import styles from './ResumePage.module.css'

export function ResumePage() {
  return (
    <div>
      <section className={styles.section}>
        <SectionHeader title="Accolades" />
        {accolades.map((accolade) => (
          <article key={`${accolade.title}-${accolade.date}`} className={styles.accolade}>
            <h3 className={styles.accoladeTitle}>
              {accolade.title}, <span className={styles.accoladeSubtitle}>{accolade.subtitle}</span>
            </h3>
            <p className={styles.accoladeDate}>{accolade.date}</p>
            <ul className={styles.accoladeList}>
              {accolade.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
              {accolade.watchLink && (
                <li>
                  Watch{' '}
                  <a href={accolade.watchLink.url} target="_blank" rel="noreferrer">
                    {accolade.watchLink.label}
                  </a>
                </li>
              )}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.section}>
        <SectionHeader title="Work Experience" />
        <div className={styles.layout}>
          <div>
            {experiences.map((experience) => (
              <ExperienceBlock key={experience.id} experience={experience} />
            ))}
          </div>

          <aside className={styles.toc}>
            <p className={styles.tocTitle}>Jump to</p>
            <ul className={styles.tocList}>
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <a href={`#${experience.id}`} className={styles.tocLink}>
                    {experience.company}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={site.links.linkedin}
              className={styles.linkedinBtn}
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
            <a
              href={site.links.resumePdf}
              className={styles.downloadBtn}
              download="Sarah-Rieger-Resume-2026.pdf"
            >
              Download Resume
            </a>
          </aside>
        </div>
      </section>
    </div>
  )
}
