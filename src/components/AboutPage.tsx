import photo from '../assets/dmytro-pixelated.png'
import world from '../assets/world.ico'

import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <section className={styles.about}>
      <div>
        <h1>Welcome to DMytro's about page!</h1>
        <img src={world} width={30} alt="World globe image" />
        <br />
        <small>This page was last updated on October 19, 2025. Please check back soon!</small>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          About
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.contentRich}>
            <p>Short description about myself</p>

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
            Contact me 𓂃✍︎
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
            <span>Coded by</span>
            <br />
            <span>HAND</span>
          </div>
          <div className={styles.badge}>
            <span>Made with</span>
            <br />
            <span>JavaScript</span>
          </div>
          <div className={styles.badge}>
            <span>Hosted on</span>
            <br />
            <span>Linux</span>
          </div>
        </div>
      </div>
    </section>
  )
}