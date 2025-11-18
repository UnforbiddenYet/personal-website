import { useEffect, type PropsWithChildren } from 'react';
import './SonyMonitor.css';
import monitorImage from '../assets/Sony_PVW14_front.png';

function generateBarrelDisplacementMap(): string {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) return '';

  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  // Get CSS custom properties for barrel intensity
  const computedStyle = getComputedStyle(document.documentElement);
  const barrelLeft = parseFloat(computedStyle.getPropertyValue('--barrel-left') || '0.15');
  const barrelRight = parseFloat(computedStyle.getPropertyValue('--barrel-right') || '0.15');
  const barrelTop = parseFloat(computedStyle.getPropertyValue('--barrel-top') || '0.12');
  const barrelBottom = parseFloat(computedStyle.getPropertyValue('--barrel-bottom') || '0.12');

  const center = size / 2;
  const maxDist = Math.sqrt(2) * center; // Maximum distance from center to corner

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Normalize coordinates to -1...1 range
      const nx = (x - center) / center;
      const ny = (y - center) / center;

      // Calculate distance and angle from center
      const dist = Math.sqrt(nx * nx + ny * ny);
      const angle = Math.atan2(ny, nx);

      // Quadratic falloff for edge-heavy distortion
      const distortionFactor = dist * dist;

      // Horizontal displacement (R channel)
      let horizDisplacement = 0;
      if (nx < 0) {
        // Left side
        horizDisplacement = distortionFactor * Math.cos(angle) * barrelLeft;
      } else {
        // Right side
        horizDisplacement = distortionFactor * Math.cos(angle) * barrelRight;
      }

      // Vertical displacement (G channel)
      let vertDisplacement = 0;
      if (ny < 0) {
        // Top side
        vertDisplacement = distortionFactor * Math.sin(angle) * barrelTop;
      } else {
        // Bottom side
        vertDisplacement = distortionFactor * Math.sin(angle) * barrelBottom;
      }

      // Map to 0-255 range (128 = no displacement)
      const idx = (y * size + x) * 4;
      data[idx] = Math.min(255, Math.max(0, 128 + horizDisplacement * 127)); // R
      data[idx + 1] = Math.min(255, Math.max(0, 128 + vertDisplacement * 127)); // G
      data[idx + 2] = 128; // B (unused)
      data[idx + 3] = 255; // A (fully opaque)
    }
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

export function SonyMonitor({ children }: PropsWithChildren) {
  useEffect(() => {
    const displacementMap = generateBarrelDisplacementMap();
    const feImage = document.getElementById('barrel-displacement-image');
    if (feImage) {
      feImage.setAttribute('href', displacementMap);
    }
  }, []);

  return (
    <div className="sony-monitor-wrapper">
      <div className="monitor-container">
        {/* SVG Filter Definition for Barrel Distortion */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id="barrel-distortion" x="-50%" y="-50%" width="200%" height="200%">
              <feImage
                id="barrel-displacement-image"
                result="displacement"
                preserveAspectRatio="none"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="displacement"
                scale="80"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

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
