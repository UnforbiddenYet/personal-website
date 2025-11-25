import computerIcon from '../assets/computer.ico'
import warningIcon from '../assets/msg_warning.ico'
import styles from './NoMobile.module.css'

export function NoMobile() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={computerIcon} alt="Computer icon" width={48} height={48} />
        <h2>Desktop Required</h2>
        <p>This website is designed for desktop computers only.</p>
        <p>Mobile devices didn't exist in 1995, and this Windows 95-styled interface doesn't work on small screens.</p>
        <p>Please visit this site on a desktop or laptop computer for the full experience!</p>
        <div className={styles.blinker}>
          <img src={warningIcon} width={32} alt="Warning" />
        </div>
      </div>
    </div>
  )
}
