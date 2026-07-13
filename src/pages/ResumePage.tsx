import { accolades, experiences } from '../data/experience'
import { site } from '../data/site'
import { trackButtonClick, trackResumeDownload, trackSocialClick } from '../lib/analytics'
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
                  <a
                    href={accolade.watchLink.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      trackButtonClick({
                        name: 'accolade_watch_link',
                        location: 'resume',
                        label: accolade.watchLink!.label,
                        url: accolade.watchLink!.url,
                      })
                    }
                  >
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
                  <a
                    href={`#${experience.id}`}
                    className={styles.tocLink}
                    onClick={() =>
                      trackButtonClick({
                        name: 'resume_jump_to',
                        location: 'resume',
                        company: experience.company,
                      })
                    }
                  >
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
              onClick={() => trackSocialClick({ platform: 'linkedin', location: 'resume' })}
            >
              View LinkedIn
            </a>
            <a
              href={site.links.resumePdf}
              className={styles.downloadBtn}
              download="Sarah-Rieger-Resume-2026.pdf"
              onClick={() => trackResumeDownload()}
            >
              Download Resume
            </a>
          </aside>
        </div>
      </section>
    </div>
  )
}
