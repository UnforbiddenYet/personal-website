import warningIcon from '../assets/msg_warning.ico'
import { Alert95 } from './Alert95';
import styles from './NoMobile.module.css';

export function NoMobile() {
  return (
    <Alert95
      title="Desktop Needed"
      icon={warningIcon}
    >
      <p className={styles.contentText}>
        This website is designed for desktop computers only.
      </p>
      <p className={styles.contentTextPadded}>
        Mobile devices didn't exist in 1995, and this Windows 95-styled interface doesn't work on small screens.
      </p>
      <p className={styles.contentTextPadded}>
        Please visit this site on a desktop or laptop computer for the full experience!
      </p>
    </Alert95>
  )
}
