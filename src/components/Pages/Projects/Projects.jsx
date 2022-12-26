import React from 'react';
import Project from './Project/Project'
import "./Projects.css"

function Projects() {
    return (
        <div className='project-page w-5/6'>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Project />
        </div>
    )
}

export default Projects;