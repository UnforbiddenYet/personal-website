import type { PropsWithChildren } from "react";

import styles from "./Window.module.css";
import type { WindowControlType } from "./types";

type Props = {
  title: string;
  icon?: string;
  controls: WindowControlType[];
  menu: {
    title: string;
    disabled?: boolean;
    onClick?: () => void;
  }[];
  position: {
    x: number;
    y: number;
    z: number;
  };
  height: number;
  width: number;
  onMouseDown?: () => void;
  isActive?: boolean;
};

export const Window = ({
  title,
  icon,
  controls,
  menu,
  children,
  position,
  width,
  height,
  onMouseDown,
  isActive,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={styles.window}
      data-active={isActive}
      onMouseDown={(e) => { e.stopPropagation(); onMouseDown?.(); }}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: position.z,
        width,
        height,
      }}
    >
      <header className={styles.titleBar}>
        <div className={styles.titleText}>
          {icon && <img src={icon} alt="" className={styles.titleIcon} />}
          {title}
        </div>
        <div className={styles.windowControls}>
          {controls.map((control) => (
            <button
              key={control.label}
              aria-label={control.label}
              disabled={control.disabled}
              onClick={control.onClick}
              style={{ ...(control.cursor ? { cursor: control.cursor } : {}) }}
            >
              {control.icon}
            </button>
          ))}
        </div>
      </header>

      {menu.length ? (
        <nav className={styles.menuBar}>
          <ul>
            {menu.map((item) => (
              <li key={item.title} onClick={item.onClick}>
                <button>
                  <u>{item.title.charAt(0).toUpperCase()}</u>
                  {item.title.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className={styles.windowBody}>{children}</div>
    </div>
  );
};
