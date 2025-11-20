import { createContext, useContext } from 'react';
import type { useWindowManager } from './useWindowManager';

type WindowManagerContextValue = ReturnType<typeof useWindowManager>

export const WindowManagerContext = createContext<WindowManagerContextValue | null>(null);

export function useWindowManagerContext() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManagerContext must be used within a WindowManagerProvider');
  }
  return context;
}


