import phoneIcon from '../assets/phone-desk.ico'
import styles from './ContactPage.module.css'

export function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <img src={phoneIcon} width={32} alt="Phone icon" />
        <h2>Get In Touch</h2>
      </div>

      <hr className="separator" />

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Contact Information
        </div>
        <div className={styles.content}>
          <p>I'm always interested in hearing about new opportunities and collaborations!</p>
          <p>Whether you're looking for a <strong>Founding Engineer</strong>, have a project in mind, or just want to chat about web technologies - feel free to reach out.</p>
        </div>
      </div>

      <hr className="separator" />

      <div className={styles.buttonGroup}>
        <a href="mailto:dmytro.lubenets@gmail.com" className="win95-button" target="_blank" rel="noopener noreferrer">
          ✉ Email Me
        </a>
        <a href="https://www.linkedin.com/in/dmytrolubenets/" className="win95-button" target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/dmytrolubenets" className="win95-button" target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
      </div>

      <hr className="separator" />

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Support My Work
        </div>
        <div className={styles.content}>
          <p>If you enjoy my work and want to support me, consider buying me a coffee!</p>
          <div className={styles.buttonGroup}>
            <a href="https://www.buymeacoffee.com/dmytrolubenets" className="win95-button" target="_blank" rel="noopener noreferrer">
              ☕ Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>

      <hr className="separator" />

      <div className={styles.footer}>
        <p><small>Currently based in Paris, France 🇫🇷</small></p>
        <p><small>Open to remote opportunities worldwide 🌍</small></p>
      </div>
    </div>
  )
}
