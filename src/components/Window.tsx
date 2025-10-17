import type { PropsWithChildren } from "react"

import './Window.css'

type Props = {
  title: string,
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
  }[]
}

export const Window = ({
  title,
  controls,
  menu,
  children
}: PropsWithChildren<Props>) => {
  return (
    <div className="window">
      <header className="title-bar">
        <div className="title-text">{title}</div>
        <div className="window-controls">
          {controls.map((control) => (
            <button aria-label={control.label} disabled={control.disabled} onClick={control.onClick}>{control.icon}</button>
          ))}
        </div>
      </header>

      {menu.length ? <nav className="menu-bar">
        <ul>
          {menu.map(item => (
            <li onClick={item.onClick}>
              <button><u>{item.title.charAt(0).toUpperCase()}</u>{item.title.slice(1)}</button></li>
          ))}
        </ul>
      </nav> : null}

      {/* <div className="window-body">
          
        </div> */}
      {children}
    </div>
  )
}