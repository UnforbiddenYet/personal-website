import { useState, useEffect } from 'react';
import './Taskbar.css';
import type { WindowID } from './types';
import questionIcon from '../assets/help_question_mark.ico';

type OpenWindowConfig = {
  title: string,
  icon: string,
  id: WindowID
}

export const Taskbar = ({ activeWindowId, openWindows, onClick, onInfoClick }: {
  activeWindowId: WindowID | null,
  openWindows: OpenWindowConfig[],
  onClick: (id: WindowID) => void,
  onInfoClick?: () => void,
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
    <div className="taskbar-container">
      <div className="taskbar-windows">
        {/* Dynamically render a button for each "open window" */}
        {openWindows?.map((config) => (
          <button key={config.title} className={`taskbar-window-button ${activeWindowId === config.id ? 'active' : ''}`} onClick={() => onClick(config.id)}>
            <img src={config.icon} alt={config.title} />
            <span>{config.title}</span>
          </button>
        ))}
      </div>

      <div className="taskbar-tray">
        {onInfoClick && (
          <button className="tray-icon-button" onClick={onInfoClick} title="About this site">
            <img src={questionIcon} alt="Info" className="tray-icon" />
          </button>
        )}
        <div className="taskbar-clock">{formattedTime}</div>
      </div>
    </div>
  );
};