import styles from './Tag.module.css'

interface TagsProps {
  languages?: string[]
  tools?: string[]
}

export function Tags({ languages = [], tools = [] }: TagsProps) {
  if (languages.length === 0 && tools.length === 0) return null

  return (
    <div className={styles.tags}>
      {languages.map((lang) => (
        <span key={`lang-${lang}`} className={`${styles.tag} ${styles.lang}`}>
          {lang}
        </span>
      ))}
      {tools.map((tool) => (
        <span key={`tool-${tool}`} className={`${styles.tag} ${styles.tool}`}>
          {tool}
        </span>
      ))}
    </div>
  )
}
