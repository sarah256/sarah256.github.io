import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems, site } from '../data/site'
import styles from './Header.module.css'
import { SocialLinks } from './SocialLinks'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
        {site.name}
      </NavLink>

      <button
        type="button"
        className={styles.menuBtn}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? 'close' : 'menu'}
      </button>

      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <div className={styles.social}>
          <SocialLinks />
        </div>
      </nav>
    </header>
  )
}
