import { useMemo, useState } from 'react'
import { designCategories, designWorks, type DesignCategory } from '../data/designWorks'
import { trackDesignFilterClick } from '../lib/analytics'
import styles from './DesignGallery.module.css'

function GalleryImage({
  src,
  alt,
  priority,
}: {
  src: string
  alt: string
  priority: boolean
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles.imageWrap}>
      <img
        className={`${styles.image} ${loaded ? styles.imageLoaded : ''}`}
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

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
        {filtered.map((work, index) => (
          <figure key={work.id} className={styles.card}>
            <GalleryImage src={work.src} alt={work.title} priority={index < 6} />
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
