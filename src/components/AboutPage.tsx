import photo from '../assets/dmytro-pixelated.png'
import tree from '../assets/tree.ico'
import world from '../assets/world.ico'
import envelopeIcon from '../assets/envelope_closed.ico'
import coffeeIcon from '../assets/utopia_smiley.ico'

import styles from './AboutPage.module.css'

export function AboutPage() {
  function handleContactMeClick() {
    alert('Please reach me at dmytro . lubenets at gmail . com')
  }

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
        <small>This page was last updated on November 25, 2025. Please check back soon!</small>
      </div>

      <hr className="separator" />

      {/* About Me Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          About Me
        </div>
        <div className={styles.sectionContent}>
          <div className={styles.contentRich}>
            <p>Hi, I'm Dmytro.</p>
            <p>These days I build things for the web. I love the internet, creative, experimental corners of it. I'm always curious about where technology is taking us next, especially when it opens up new ways for people to create and connect.</p>
            <p>In 2025, life brought me to Paris, where I'm living now.</p>
          </div>
          <div className={styles.contentImage}>
            <div className={styles.imageContainer}>
              <img src={photo} alt="A pixelated self portrait of Dmytro." width={150} />
            </div>
          </div>
        </div>
      </div>

      <hr className="separator" />

      {/* How I Approach Things */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          How I Approach Things
        </div>
        <div className={styles.content}>
          <p>I'm self-taught in most things I do, which means I'm comfortable with not knowing and figuring it out as I go.</p>
          <p>The best work happens when people actually collaborate—not just divide tasks, but genuinely work through problems together. Different perspectives make everything better.</p>
          <p>I like understanding how things work before jumping in. Give me a problem and I'll disappear down a research rabbit hole, coming back with context and unusual angles.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* What Matters to Me */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          What Matters to Me
        </div>
        <div className={styles.content}>
          <p>Be honest. Be kind. Be fair.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* When I'm Not Coding */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          When I'm Not Coding
        </div>
        <div className={styles.content}>
          <p>I like outdoors and making things. I jump between creative projects — linocut, photography, making beats etc.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Some Random Things */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Some Ice-Breakers
        </div>
        <div className={styles.content}>
          <p>My first real job was DJing at 19. Terrible pay, amazing experience.</p>
          <p>I've lived in 5 countries and speak -4̶- 3 languages and I've been learning 7 languages overall.</p>
          <p>In 2015, I backpacked across Georgia for a month and a half with just a tent. Slept in forests, on beaches, met strangers who became friends.</p>
        </div>
      </div>

      <hr className="separator" />

      {/* Contact Buttons */}
      <div className={styles.buttonGroup}>
        <button className="win95-button" onClick={handleContactMeClick}>
          <img src={envelopeIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          Contact me
        </button>
        <button className="win95-button" onClick={() => { alert("I'm joking. Please donate to https://savelife.in.ua/en/") }}>
          <img src={coffeeIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          Buy me a coffee
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