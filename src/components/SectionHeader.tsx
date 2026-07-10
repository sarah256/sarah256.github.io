import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <span className={styles.arrow} aria-hidden="true">
        ➔
      </span>
      <div>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  )
}
