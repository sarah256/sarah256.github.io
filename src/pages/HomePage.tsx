import { SocialLinks } from '../components/SocialLinks'
import { TerminalWindow } from '../components/TerminalWindow'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <div>
      <section className={styles.hero}>
        <h1 className={styles.name}>Hello!</h1>
        <img
          className={styles.avatar}
          src="/me-typing.gif"
          alt="Pixel-art illustration of Sarah typing on a laptop"
          width={160}
          height={160}
        />
      </section>

      <section className={styles.about}>
        <TerminalWindow title="~/about.txt">
          <p className={styles.bio}>
            My name is Sarah Rieger. I'm a Brooklyn-based software engineer, who loves to create. Whether it's building software tools, designing digital art, or painting, I really enjoy the process of <span className={styles.highlight}>bringing ideas to life!</span>
          </p>
          <p className={styles.bio}>
            I have a passion for <span className={styles.highlight}>product-focused development and design.</span> I love following an idea from early product ideation,
            through to implementation and launch.  Understanding not just how it's built, but how it plays into a broader strategic vision, is what enables me to do my best work.
          </p>
          <SocialLinks variant="home" />
        </TerminalWindow>
      </section>
    </div>
  )
}
