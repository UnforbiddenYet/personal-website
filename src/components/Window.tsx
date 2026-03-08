import type { PropsWithChildren } from "react"

import styles from './Window.module.css'

type Props = {
  title: string,
  icon?: string,
  controls: {
    label: string,
    icon: string,
    disabled?: boolean,
    cursor?: string,
    onClick?: () => void,
  }[],
  menu: {
    title: string,
    disabled?: boolean,
    onClick?: () => void,
  }[],
  position: {
    x: number,
    y: number,
    z: number,
  },
  height: number,
  width: number,
  onTitleBarMouseDown?: () => void,
}

export const Window = ({
  title,
  icon,
  controls,
  menu,
  children,
  position,
  width,
  height,
  onTitleBarMouseDown,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.window} style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: position.z, width, height }}>
      <header className={styles.titleBar} onMouseDown={onTitleBarMouseDown}>
        <div className={styles.titleText}>
          {icon && <img src={icon} alt="" className={styles.titleIcon} />}
          {title}
        </div>
        <div className={styles.windowControls}>
          {controls.map((control) => (
            <button key={control.label} aria-label={control.label} disabled={control.disabled} onClick={control.onClick} style={{ ...(control.cursor ? { cursor: control.cursor } : {}) }}>{control.icon}</button>
          ))}
        </div>
      </header>

      {menu.length ? <nav className={styles.menuBar}>
        <ul>
          {menu.map(item => (
            <li key={item.title} onClick={item.onClick}>
              <button><u>{item.title.charAt(0).toUpperCase()}</u>{item.title.slice(1)}</button></li>
          ))}
        </ul>
      </nav> : null}

      <div className={styles.windowBody}>
        {children}
      </div>
    </div>
  )
}
