import photo from '../assets/dmytro-pixelated.png'
import tree from '../assets/tree.ico'
import world from '../assets/world.ico'

import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <section className={styles.about}>
      <center>
        <img src={tree} width={30} alt="Tree image" />
        <span> </span>
        <h1>Welcome to DMytro's about page!</h1>
        <span> </span>
        <img src={world} width={30} alt="World globe image" />
        <br />
        <small>This page was last updated on October 19, 2025. Please check back soon!</small>
      </center>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          ABOUT ME
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.contentRich}>
            <p>Welcome, fellow person!</p>
            <p>I’m a Software Engineer with over 10 years of experience creating web products that people actually enjoy using. I’ve worked at both small startups and a Y Combinator company that really took off!</p>
            <p>
              Most of my journey has been spent in frontend engineering, building major features and improving how real humans use the web.
            </p>
            <p>These days, I’m exploring the exciting frontier of cloud-native systems, learning how to make them tough, stable, and built to last.</p>
            <p>Thanks for visiting my page — don’t forget to bookmark it and come back soon for updates!</p>
          </div>
          <div className={styles.contentImage}>
            <div className="pasted-image-container">
              <img src={photo} alt="A pixelated self portrait of Dmytro." />
            </div>
          </div>


        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Portfolio
        </div>
        <div className={styles.content}>
          <br />
          <small>Also, I build amazing apps!</small>
          <br />
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
          <br />
        </div>
      </div>
      <div>
        <center>
          <button className="win95-button">
            Contact me ✉︎
          </button>
          <button className="win95-button">
            Buy me a coffee ⛾
          </button>
        </center>

      </div>

      <div className={styles.section}>
        <center><p>You are visitor number 000001 on this page</p></center>
        <div className={styles.badgeList}>
          <div className={styles.badge}>
            <span>Coded</span>
            <br />
            <span>on Mac OS</span>
          </div>
          <div className={styles.badge}>
            <span>Made with</span>
            <br />
            <span>Web tech</span>
          </div>
          <div className={styles.badge}>
            <span>Hosted on</span>
            <br />
            <span>Linux</span>
          </div>
        </div>
        <br />

      </div>
    </section>
  )
}