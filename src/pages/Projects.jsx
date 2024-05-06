import React from 'react';
import FetchData from '../api/FetchData';
import '../styles/Projects.css'

function Projects() {
    return (
        <div className="projects-container">
            <header className="title-projects">
            </header>
            <section>
                <h2>Check out my repositories</h2>
                <FetchData />
                
            </section>
        </div>
    );
}

export default Projects
