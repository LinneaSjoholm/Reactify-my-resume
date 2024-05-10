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

const App = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector(
    (state) => state.mode
  );

  return (
    <BrowserRouter>
    <div className="name__background"><h1>LINNEA SJÖHOLM</h1></div>
     <div className={darkMode ? 'dark' : ''}>
        <div className="icon-container" onClick={() => {dispatch(setMode(!darkMode))}}>
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
