import type { ReactNode } from 'react'
import styles from './TerminalWindow.module.css'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div className={`${styles.window} ${className ?? ''}`}>
      <div className={styles.titleBar}>
        <div className={styles.dots} aria-hidden="true">
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}
