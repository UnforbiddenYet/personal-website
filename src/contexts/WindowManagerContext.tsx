import { createContext, useContext } from "react";
import type { WindowManager } from "./useWindowManager";

export const WindowManagerContext = createContext<WindowManager | null>(null);

export function useWindowManagerContext() {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error(
      "useWindowManagerContext must be used within a WindowManagerProvider",
    );
  }
  return context;
}
