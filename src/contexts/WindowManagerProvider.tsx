import { type ReactNode } from 'react';
import { WindowManagerContext } from './WindowManagerContext'
import { useWindowManager } from "./useWindowManager";
import type { AnyNewWindowType } from '../components/types';

interface WindowManagerProviderProps {
  children: ReactNode;
  initialWindows?: AnyNewWindowType[];
}

export function WindowManagerProvider({ children, initialWindows = [] }: WindowManagerProviderProps) {
  const windowManager = useWindowManager(initialWindows);

  return (
    <WindowManagerContext.Provider value={windowManager}>
      {children}
    </WindowManagerContext.Provider>
  );
}