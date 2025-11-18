import type { PropsWithChildren } from 'react';
import './SonyMonitor.css';
import monitorImage from '../assets/Sony_PVW14_front.png';

export function SonyMonitor({ children }: PropsWithChildren) {
  return (
    <div className="sony-monitor-wrapper">
      <div className="monitor-container">
        {/* Content layer - behind the monitor */}
        <div className="content-layer">
          <div className="screen-content">
            {children}

            {/* CRT Effects Overlays - positioned within screen area */}
            <div className="crt-scanlines"></div>
            <div className="crt-vignette"></div>
            <div className="screen-glare"></div>
          </div>
        </div>

        {/* Monitor bezel overlay with transparent screen area */}
        <img src={monitorImage} alt="Sony PVM-14 Monitor" className="monitor-bezel-overlay" />
      </div>
    </div>
  );
}
