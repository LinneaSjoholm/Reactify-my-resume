import React from 'react';
import FetchData from '../api/FetchData';
import '../styles/Projects.css'
import Footer from '../components/Footer';

function Projects() {
    return (
        <>
        <div className="projects-container">
            <h1 className="title-projects">Check out my repositories</h1>
            <section>
                <FetchData />
                
            </section>
            </div>
        <Footer />
        </>
    );
}

export default Projects
