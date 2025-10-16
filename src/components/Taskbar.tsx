import React, { useState, useEffect } from 'react';
import './Taskbar.css';
// import soundIcon from './assets/sound-icon.png'; // We'll create this small icon

type Title = string;
type Icon = string;
type OpenWindows = [Title, Icon]

export const Taskbar = ({ activeWindow, openWindows }: {
  activeWindow: string,
  openWindows: OpenWindows | undefined,
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
        {openWindows?.map(([title, iconSrc]) => (
          <button key={title} className={`taskbar-window-button ${activeWindow === title ? 'active' : ''}`}>
            <img src={iconSrc} alt={title} />
            <span>{title}</span>
          </button>
        ))}
      </div>

      <div className="taskbar-tray">
        {/* <img src={soundIcon} alt="Sound" className="tray-icon" /> */}
        <div className="taskbar-clock">{formattedTime}</div>
      </div>
    </div>
  );
};