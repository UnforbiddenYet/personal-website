import './App.css'
import { Home } from './Home';
import { WindowManagerProvider } from './contexts';

function App() {
  return (
    <WindowManagerProvider>
      <div className="app-container">
        <Home />
      </div>
    </WindowManagerProvider>
  )
}

export default App
