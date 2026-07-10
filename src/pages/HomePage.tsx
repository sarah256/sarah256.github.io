import { SocialLinks } from '../components/SocialLinks'
import { TerminalWindow } from '../components/TerminalWindow'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.name}>Hello!</h1>
        {/* <p className={styles.tagline}>{site.tagline}</p> */}
      </section>

      <section className={styles.about}>
        {/* <h2 className={styles.greeting}>Hello!</h2> */}

        <TerminalWindow title="~/about.txt">
          <p className={styles.bio}>
            My name is Sarah Rieger. I'm a Brooklyn-based software engineer, and I do freelance
            design and site building in my free time! Currently working at{' '}
            <a href="https://jellyfish.co" target="_blank" rel="noreferrer">
              Jellyfish
            </a>{' '}
            as a Software Engineering Team Lead.
          </p>
          <SocialLinks variant="home" />
        </TerminalWindow>
      </section>
    </div>
  )
}
