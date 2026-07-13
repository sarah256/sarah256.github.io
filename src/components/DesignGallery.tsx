import { useMemo, useState } from 'react'
import { designCategories, designWorks, type DesignCategory } from '../data/designWorks'
import { trackDesignFilterClick } from '../lib/analytics'
import styles from './DesignGallery.module.css'

export function DesignGallery() {
  const [active, setActive] = useState<DesignCategory>('all')

  const filtered = useMemo(
    () => (active === 'all' ? designWorks : designWorks.filter((work) => work.category === active)),
    [active],
  )

  return (
    <div>
      <div className={styles.filters}>
        {designCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`${styles.filterBtn} ${active === category.id ? styles.filterBtnActive : ''}`}
            onClick={() => {
              trackDesignFilterClick({ category: category.id })
              setActive(category.id)
            }}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((work) => (
          <figure key={work.id} className={styles.card}>
            <img className={styles.image} src={work.src} alt={work.title} loading="lazy" />
            <figcaption className={styles.meta}>
              <span className={styles.title}>{work.title}</span>
              <span className={styles.medium}>{work.medium}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
