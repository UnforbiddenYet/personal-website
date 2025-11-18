import { useState, useRef, useCallback, useEffect } from 'react';
import { type WindowID } from '../components/types';

type NewWindowConfig = {
  id: WindowID,
  width?: number,
  height?: number,
  cascade?: boolean,
  data?: Record<string, any>,
}

type WindowState = {
  id: WindowID,
  x: number,
  y: number,
  z: number,
  width: number,
  height: number,
  data?: Record<string, any>,
}

export const useWindowManager = (initialWindowsConfig: NewWindowConfig[] = []) => {
  const highestZIndexRef = useRef(initialWindowsConfig.length - 1);
  const windowIdCounterRef = useRef(initialWindowsConfig.length);

  const [windows, setWindows] = useState<WindowState[]>(() => {
    const cascadeOffset = 25;
    return initialWindowsConfig.map((config, index) => {
      const width = config.width || 500;
      const height = config.height || 350;
      const offset = config.cascade === false ? 0 : index * cascadeOffset;
      return {
        id: config.id,
        width,
        height,
        x: (window.innerWidth / 2) - (width / 2) + offset,
        y: (window.innerHeight / 2) - (height / 2) + offset,
        z: index,
        data: config.data,
      };
    });
  });

  const [activeWindowId, setActiveWindowId] = useState<WindowID | null>(
    () => initialWindowsConfig[initialWindowsConfig.length - 1]?.id ?? null
  );

  useEffect(() => {
    if (windows.length === 0) {
      windowIdCounterRef.current = 0;
    }
  }, [windows.length])


  const bringToFront = useCallback((id: WindowID) => {
    setWindows(prevWindows => {
      const targetWindow = prevWindows.find(w => w.id === id);
      if (!targetWindow || targetWindow.z === highestZIndexRef.current) {
        return prevWindows;
      }
      highestZIndexRef.current += 1;
      setActiveWindowId(id);
      return prevWindows.map(w =>
        w.id === id ? { ...w, z: highestZIndexRef.current } : w
      );
    });
  }, []);

  const openWindow = useCallback((config: NewWindowConfig) => {
    const windowExists = windows.find(w => w.id === config.id);

    if (windowExists) {
      bringToFront(config.id);
    } else {
      highestZIndexRef.current += 1;
      const windowWidth = config.width || 500;
      const windowHeight = config.height || 350;

      const windowCounter = windowIdCounterRef.current;
      const cascadeOffset = 25;
      const wrapAfter = 4;
      const offset = config.cascade === false ? 0 : (windowCounter % wrapAfter) * cascadeOffset;

      const newX = (window.innerWidth / 2) - (windowWidth / 2) + offset;
      const newY = (window.innerHeight / 2) - (windowHeight / 2) + offset;

      const newWindow: WindowState = {
        id: config.id,
        width: windowWidth,
        height: windowHeight,
        x: newX,
        y: newY,
        z: highestZIndexRef.current,
        data: config.data,
      };
      if (config.cascade !== false) {
        windowIdCounterRef.current++;
      }
      setWindows(prev => [...prev, newWindow]);
      setActiveWindowId(newWindow.id);
    }
  }, [windows, bringToFront]);

  const closeWindow = useCallback((id: WindowID) => {
    setWindows(prevWindows => {
      const remainingWindows = prevWindows.filter(w => w.id !== id);
      if (id === activeWindowId) {
        if (remainingWindows.length === 0) {
          setActiveWindowId(null);
        } else {
          const nextActiveWindow = remainingWindows.reduce((a, b) => a.z > b.z ? a : b);
          setActiveWindowId(nextActiveWindow.id);
        }
      }
      return remainingWindows;
    });
  }, [activeWindowId]);

  const updateWindowPosition = useCallback((id: WindowID, { x, y }: { x: number, y: number }) => {
    setWindows(prev => prev.map(w => (w.id === id ? { ...w, x, y } : w)));
  }, []);


  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    bringToFront,
    updateWindowPosition,
  };
};