import Navbar from './components/Navbar';
import './style.css';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState('')

  function toggleDarkMode() {
    setDarkMode(prevDarkmode => !prevDarkmode)
  }

  return (
    <div className="App">
     <Navbar
     darkMode={darkMode}
     toggleDarkMode={toggleDarkMode}
     />
     <Main
     darkMode={darkMode}
     />
    </div>
  );
}

export default App;
