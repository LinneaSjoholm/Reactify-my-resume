import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'
import { setMode } from './slices/modeSlice'

import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Footer from './components/Footer'

// Komponenten för hela applikationen.
const App = () => {
  // Använda useDispatch-hook för att skicka åtgärder till Redux Store.
  const dispatch = useDispatch();
  // Använda useSelector-hook för att hämta tillståndet för mörkt läge från Redux Store.
  const { darkMode } = useSelector(
    (state) => state.mode
  );

  return (
    <BrowserRouter>
    {/* Huvudcontainer för applikationen, ändrar klassen beroende på om darkMode är aktivt eller inte. */}
    <div className={darkMode ? 'dark' : ''}>
        {/* Knapp för att växla mellan ljus och mörkt läge. */}
        <div className="icon-container" onClick={() => {dispatch(setMode(!darkMode))}}>
          {/* Visa antingen ljus eller mörk ikon beroende på darkMode. */}
          {darkMode ? (<MdOutlineLightMode size={50} />) : (<MdOutlineDarkMode size={50} />)}
        </div>
        
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     
      <Footer />
      </div>
      
    </BrowserRouter>
  );
}

export default App
