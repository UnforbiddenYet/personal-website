import type { PropsWithChildren } from "react"

import './Window.css'

type Props = {
  title: string,
  icon?: string,
  controls: {
    label: string,
    icon: string,
    disabled?: boolean,
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
  width: number
}

export const Window = ({
  title,
  icon,
  controls,
  menu,
  children,
  position,
  width,
  height
}: PropsWithChildren<Props>) => {
  return (
    <div className="window" style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: position.z, width, height }}>
      <header className="title-bar">
        <div className="title-text">
          {icon && <img src={icon} alt="" className="title-icon" />}
          {title}
        </div>
        <div className="window-controls">
          {controls.map((control) => (
            <button key={control.label} aria-label={control.label} disabled={control.disabled} onClick={control.onClick}>{control.icon}</button>
          ))}
        </div>
      </header>

      {menu.length ? <nav className="menu-bar">
        <ul>
          {menu.map(item => (
            <li key={item.title} onClick={item.onClick}>
              <button><u>{item.title.charAt(0).toUpperCase()}</u>{item.title.slice(1)}</button></li>
          ))}
        </ul>
      </nav> : null}

      <div className="window-body">
        {children}
      </div>
    </div>
  )
}