import { useState, useEffect } from "react";
import styles from "./Taskbar.module.css";
import type { WindowID } from "./types";
import questionIcon from "../assets/help_question_mark.ico";

type OpenWindowConfig = {
  title: string;
  icon: string;
  id: WindowID;
};

export const Taskbar = ({
  activeWindowId,
  openWindows,
  onClick,
  onInfoClick,
}: {
  activeWindowId: WindowID | null;
  openWindows: OpenWindowConfig[];
  onClick: (id: WindowID) => void;
  onInfoClick?: () => void;
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  // Format the time to be like HH:MM AM/PM
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div className={styles.taskbarContainer}>
      <div className={styles.taskbarWindows}>
        {/* Dynamically render a button for each "open window" */}
        {openWindows?.map((config) => (
          <button
            key={config.title}
            className={`${styles.taskbarWindowButton} ${activeWindowId === config.id ? styles.active : ""}`}
            onClick={() => onClick(config.id)}
          >
            <img src={config.icon} alt={config.title} />
            <span>{config.title}</span>
          </button>
        ))}
      </div>

      <div className={styles.taskbarTray}>
        {onInfoClick && (
          <button
            className={styles.trayIconButton}
            onClick={onInfoClick}
            title="About this site"
          >
            <img src={questionIcon} alt="Info" className={styles.trayIcon} />
          </button>
        )}
        <div className={styles.taskbarClock}>{formattedTime}</div>
      </div>
    </div>
  );
};
