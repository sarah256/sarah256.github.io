import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={site.links.github} target="_blank" rel="noreferrer">
        Designed & built by {site.name}
      </a>
      <p className={styles.analytics}>
        This site uses privacy-friendly analytics, powered by{' '}
        <a href="https://posthog.com" target="_blank" rel="noreferrer">
          PostHog
        </a>
      </p>
    </footer>
  )
}
