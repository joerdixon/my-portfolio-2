import React from 'react';
import Project from './Project/Project'
import "./Projects.css"

function Projects() {
    return (
        <div className='project-page'>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Project />
        </div>
    )
}

export default Projects;