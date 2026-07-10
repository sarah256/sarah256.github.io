import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href={site.links.github} target="_blank" rel="noreferrer">
        Designed & built by {site.name}
      </a>
    </footer>
  )
}
