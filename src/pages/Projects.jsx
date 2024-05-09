
import FetchData from '../api/FetchData'
import '../styles/Projects.css'
import Footer from '../components/Footer'
import figmamockup from '../assets/figmamockup.png'
import reactifymyresume from '../assets/reactifymyresume.png'
import sneakerstore from '../assets/sneakerstore.png'
import solaris from '../assets/solaris.png'

function Projects() {
    return (
        <>
        
        <h1 className="projects__title">Check out my repositories</h1>
        <div className="projects__container">
            <FetchData />
            <section className="projects__wrapper-img">
            <img src = {figmamockup} alt="solaris" className="projects__img--solaris"/>
            <img src = {reactifymyresume} alt="solaris" className="projects__img--solaris"/>
            <img src = {sneakerstore} alt="solaris" className="projects__img--solaris"/>
            <img src = {solaris} alt="solaris" className="projects__img--solaris"/>
            </section>
            </div>
            
        </>
    );
}

export default Projects
