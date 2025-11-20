import constructionIcon from '../assets/utopia_smiley.ico'
import warningIcon from '../assets/msg_warning.ico'
import styles from './UnderConstruction.module.css'

export function UnderConstruction() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={constructionIcon} alt="Construction icon" width={48} height={48} />
        <h2>Under Construction</h2>
        <p>This page is currently being built.</p>
        <p>Please check back soon!</p>
        <div className={styles.blinker}>
          <img src={warningIcon} width={32} alt="Warning" />
        </div>
      </div>
    </div>
  )
}
