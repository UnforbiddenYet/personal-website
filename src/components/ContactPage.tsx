import phoneIcon from '../assets/phone-desk.ico'
import envelopeIcon from '../assets/envelope_closed.ico'
import linkIcon from '../assets/url1.ico'
import computerIcon from '../assets/computer.ico'
// import coffeeIcon from '../assets/utopia_smiley.ico'
import worldIcon from '../assets/world.ico'
import styles from './ContactPage.module.css'

export function ContactPage() {
  function handleContactMeClick() {
    alert('Please reach me at dmytro . lubenets at gmail . com')
  }

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
        <a onClick={handleContactMeClick} className="win95-button" target="_blank" rel="noopener noreferrer">
          <img src={envelopeIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          Email Me
        </a>
        <a href="https://www.linkedin.com/in/dmytro-lubenets/" className="win95-button" target="_blank" rel="noopener noreferrer">
          <img src={linkIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          LinkedIn
        </a>
        <a href="https://github.com/UnforbiddenYet" className="win95-button" target="_blank" rel="noopener noreferrer">
          <img src={computerIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
          GitHub
        </a>
      </div>

      {/* <hr className="separator" />

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          Support My Work
        </div>
        <div className={styles.content}>
          <p>If you enjoy my work and want to support me, consider buying me a coffee!</p>
          <div className={styles.buttonGroup}>
            <a href="https://www.buymeacoffee.com/dmytrolubenets" className="win95-button" target="_blank" rel="noopener noreferrer">
              // <img src={coffeeIcon} width={16} alt="" style={{ verticalAlign: 'middle', marginRight: '4px' }} />
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div> */}

      <hr className="separator" />

      <div className={styles.footer}>
        <p><small>Currently based in Paris, France</small></p>
        <p><small>Open to remote opportunities worldwide <img src={worldIcon} width={12} alt="" style={{ verticalAlign: 'middle' }} /></small></p>
      </div>
    </div>
  )
}
