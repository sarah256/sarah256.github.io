import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems, site } from '../data/site'
import { trackButtonClick, trackNavClick } from '../lib/analytics'
import styles from './Header.module.css'
import { SocialLinks } from './SocialLinks'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.brand}
        onClick={() => {
          trackNavClick({ path: '/', label: 'brand' })
          setMenuOpen(false)
        }}
      >
        {site.name}
      </NavLink>

      <button
        type="button"
        className={styles.menuBtn}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => {
          const nextOpen = !menuOpen
          trackButtonClick({
            name: nextOpen ? 'menu_open' : 'menu_close',
            location: 'header',
          })
          setMenuOpen(nextOpen)
        }}
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
            onClick={() => {
              trackNavClick({ path: item.path, label: item.label })
              setMenuOpen(false)
            }}
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
