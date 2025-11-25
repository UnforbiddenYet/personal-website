import './App.css'
import { Home } from './Home';
import { WindowManagerProvider } from './contexts';
import useIsMobile from './hooks/useIsMobile';
import { NoMobile } from './components/NoMobile';

function App() {
  const { isLoading, isMobile } = useIsMobile();

  if (isLoading) return null;
  if (isMobile) return <NoMobile />

  return (
    <WindowManagerProvider>
      <div className="app-container">
        <Home />
      </div>
    </WindowManagerProvider>
  )
}

export default App
