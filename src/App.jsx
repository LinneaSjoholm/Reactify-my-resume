import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import './styles/App.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  // Hantera aktuellt tema och funktion för att växla temat
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App" id={theme}>
      <div className="content-container">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>

        <BrowserRouter>
        
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
      <div className="switch">
        <label>{theme === "light" ? "Light Mode" : "Dark Mode" }</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
      </div>
    </div>
  );
}

export default App;
