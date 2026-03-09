import { useState, useRef, useCallback, useEffect } from 'react';
import type { WindowID, AnyNewWindowType, AnyWindowState } from '../components/types';

const TOOLBAR_HEIGHT = 35;

export type WindowManager = ReturnType<typeof useWindowManager>;

export const useWindowManager = (initialWindows: AnyNewWindowType[] = []) => {
  const highestZIndexRef = useRef(initialWindows.length - 1);
  const windowIdCounterRef = useRef(initialWindows.length);

  const [windows, setWindows] = useState<AnyWindowState[]>(() => {
    const cascadeOffset = 25;
    return initialWindows.map((payload, index) => {
      const width = payload.width || 500;
      const maxHeight = window.innerHeight - TOOLBAR_HEIGHT;
      const height = Math.min(maxHeight, payload.height || 350);
      const offset = payload.cascade === false ? 0 : index * cascadeOffset;
      return {
        ...payload,
        width,
        height,
        x: (window.innerWidth / 2) - (width / 2) + offset,
        y: (maxHeight / 2) - (height / 2) + offset,
        z: index,
        minimized: false,
      };
    });
  });

  const [activeWindowId, setActiveWindowId] = useState<WindowID | null>(
    () => initialWindows[initialWindows.length - 1]?.id ?? null
  );

  useEffect(() => {
    if (windows.length === 0) {
      windowIdCounterRef.current = 0;
    }
  }, [windows.length])


  const bringToFront = useCallback((id: WindowID) => {
    setWindows(prevWindows => {
      const targetWindow = prevWindows.find(w => w.id === id);
      if (!targetWindow) return prevWindows;
      if (!targetWindow.minimized && targetWindow.z === highestZIndexRef.current) {
        return prevWindows;
      }
      highestZIndexRef.current += 1;
      setActiveWindowId(id);
      return prevWindows.map(w =>
        w.id === id ? { ...w, z: highestZIndexRef.current, minimized: false } : w
      );
    });
  }, []);

  const bringToTray = useCallback((id: WindowID) => {
    setWindows(prevWindows => {
      const updated = prevWindows.map(w =>
        w.id === id ? { ...w, minimized: true } : w
      );
      if (id === activeWindowId) {
        const visible = updated.filter(w => !w.minimized);
        if (visible.length === 0) {
          setActiveWindowId(null);
        } else {
          const next = visible.reduce((a, b) => a.z > b.z ? a : b);
          setActiveWindowId(next.id);
        }
      }
      return updated;
    });
  }, [activeWindowId]);

  const openWindow = useCallback(<K extends WindowID>(payload: AnyNewWindowType & { id: K }) => {
    const windowExists = windows.find(w => w.id === payload.id);

    if (windowExists) {
      bringToFront(payload.id);
    } else {
      highestZIndexRef.current += 1;

      const windowWidth = payload.width || 500;
      const maxHeight = window.innerHeight - TOOLBAR_HEIGHT;
      const windowHeight = Math.min(maxHeight, payload.height || 350);

      const windowCounter = windowIdCounterRef.current;
      const cascadeOffset = 25;
      const wrapAfter = 4;
      const offset = payload.cascade === false ? 0 : (windowCounter % wrapAfter) * cascadeOffset;

      const newX = (window.innerWidth / 2) - (windowWidth / 2) + offset;
      const newY = (maxHeight / 2) - (windowHeight / 2) + offset;

      const newWindow = {
        ...payload,
        width: windowWidth,
        height: windowHeight,
        x: newX,
        y: newY,
        z: highestZIndexRef.current,
        minimized: false,
      };
      if (payload.cascade !== false) {
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


  const visibleWindows = windows.filter(w => !w.minimized);

  return {
    windows,
    visibleWindows,
    activeWindowId,
    openWindow,
    closeWindow,
    bringToFront,
    bringToTray,
    updateWindowPosition,
  };
};