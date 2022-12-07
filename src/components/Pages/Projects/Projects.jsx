import React from 'react';
import Project from './Project/Project'
import "./Projects.css"

function Projects() {
return(
    <div className='project-page'>
        <h1 className='project-hero'>My Projects</h1>
        <Project />
    </div>
)
}

export default Projects;