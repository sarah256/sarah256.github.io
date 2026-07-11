import { site } from '../data/site'
import { trackSocialClick } from '../lib/analytics'
import styles from './SocialLinks.module.css'

interface SocialLinksProps {
  variant?: 'header' | 'home'
}

export function SocialLinks({ variant = 'header' }: SocialLinksProps) {
  const linkClass =
    variant === 'home' ? `${styles.link} ${styles.linkHome}` : `${styles.link} ${styles.linkHeader}`

  return (
    <div className={variant === 'home' ? styles.groupHome : styles.groupHeader}>
      <a
        href={site.links.github}
        className={linkClass}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        onClick={() => trackSocialClick({ platform: 'github', location: variant })}
      >
        <i className="fab fa-github" aria-hidden="true" />
      </a>
      <a
        href={site.links.linkedin}
        className={linkClass}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        onClick={() => trackSocialClick({ platform: 'linkedin', location: variant })}
      >
        <i className="fab fa-linkedin" aria-hidden="true" />
      </a>
      <a
        href={`mailto:${site.email}`}
        className={linkClass}
        aria-label="Email"
        onClick={() => trackSocialClick({ platform: 'email', location: variant })}
      >
        <i className="fas fa-envelope-square" aria-hidden="true" />
      </a>
    </div>
  )
}
