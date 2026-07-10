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
            My name is Sarah Rieger. I'm a Brooklyn-based software engineer with a passion for
            product-focused development and design. I love following an idea from early product ideation,
            through to implementation and launch.  Understanding not just how it's built, but how it plays into a broader strategic vision, is what enables me to do my best work.
          </p>
          <SocialLinks variant="home" />
        </TerminalWindow>
      </section>
    </div>
  )
}
