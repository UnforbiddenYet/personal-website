import type { PropsWithChildren } from 'react'
import styles from './Alert95.module.css'
import { Window } from './Window'

type Props = {
  title: string
  icon?: string
  onClose?: () => void
}

export function Alert95({
  title,
  icon,
  onClose,
  children
}: PropsWithChildren<Props>) {
  return (
    <Window
      title={title}
      controls={onClose ? [
        {
          icon: 'X',
          label: 'Close',
          cursor: 'pointer',
          onClick: onClose
        }
      ] : []}
      menu={[]}
      height={170}
      width={500}
      position={{
        x: (window.innerWidth / 2) - (500 / 2),
        y: (window.innerHeight / 2) - (170 / 2),
        z: 1
      }}
    >
      <div className={styles.content}>
        {icon && (
          <div className={styles.iconContainer}>
            <img src={icon} alt="" width={32} height={32} />
          </div>
        )}
        <div className={styles.message}>
          {children}
        </div>
      </div>
    </Window>
  )
}
