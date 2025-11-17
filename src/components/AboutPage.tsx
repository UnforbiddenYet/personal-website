import photo from '../assets/dmytro-pixelated.png'
import tree from '../assets/tree.ico'
import world from '../assets/world.ico'

import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <section className={styles.about}>
      {/* Header Section */}
      <div className={styles.header}>
        <img src={tree} width={24} alt="Tree icon" />
        {' '}
        <h1>Welcome to Dmytro's About Page!</h1>
        {' '}
        <img src={world} width={24} alt="World globe icon" />
        <br />
        <small>This page was last updated on October 19, 2025. Please check back soon!</small>
      </div>

      <hr className="separator" />

      {/* About Me Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          About Me
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.contentRich}>
            <p>Welcome, fellow person!</p>
            <p>I'm a Software Engineer with over 10 years of experience creating web products that people actually enjoy using. I've worked at both small startups and a Y Combinator company that really took off!</p>
            <p>
              Most of my journey has been spent in frontend engineering, building major features and improving how real humans use the web.
            </p>
            <p>These days, I'm exploring the exciting frontier of cloud-native systems, learning how to make them tough, stable, and built to last.</p>
            <p>Thanks for visiting my page — don't forget to bookmark it and come back soon for updates!</p>
          </div>
          <div className={styles.contentImage}>
            <div className={styles.imageContainer}>
              <img src={photo} alt="A pixelated self portrait of Dmytro." width={150} />
            </div>
          </div>
        </div>
      </div>

      <hr className="separator" />

      {/* Portfolio Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Portfolio
        </div>
        <div className={styles.content}>
          <p><small>Also, I build amazing apps!</small></p>
          <p>Lorem ipsum Hello there JHDSa kjdhja shdjk ahsjk dhakj sdhkja hsdjk ahsjkd
            as'd asklnd jalksd
            as das kldjalks jdlka sjdlk ajksl
            sdj kaj dlkas
            as
            dsadas ddasd asd asd as
            asdasdsada das da sd as das das d as Hello there JHDSa kjdhja shdjk ahsjk dhakj sdhkja hsdjk ahsjkd
            as'd asklnd jalksd
            as das kldjalks jdlka sjdlk ajksl
            sdj kaj dlkas
            as
            dsadas ddasd asd asd as
            asdasdsada das da sd as das das d as
          </p>
          <button className="win95-button">
            View My Work {"->"}
          </button>
        </div>
      </div>

      <hr className="separator" />

      {/* Contact Buttons */}
      <div className={styles.buttonGroup}>
        <button className="win95-button">
          ✉ Contact me
        </button>
        <button className="win95-button">
          ☕ Buy me a coffee
        </button>
      </div>

      <hr className="separator" />

      {/* Footer Section */}
      <div className={styles.footer}>
        <div className={styles.visitorSection}>
          <p>You are visitor number <span className={styles.visitorCounter}>000001</span> on this page</p>
        </div>

        <div className={styles.badgeList}>
          <div className={styles.badge}>
            Coded<br />on Mac OS
          </div>
          <div className={styles.badge}>
            Made with<br />Web tech
          </div>
          <div className={styles.badge}>
            Hosted on<br />Linux
          </div>
        </div>
      </div>
    </section>
  )
}