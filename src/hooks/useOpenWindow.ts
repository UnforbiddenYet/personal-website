import { useWindowManagerContext } from "../contexts/WindowManagerContext";

export function useOpenWindow() {
  const { openWindow } = useWindowManagerContext();
  return openWindow;
}