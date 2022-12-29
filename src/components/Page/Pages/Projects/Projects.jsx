import React from 'react';
import Project from './Project'

// TODO: BUG: Small aspect change on this page only

function Projects() {
    return (
        <div className='project-page w-5/6'>
            <h2 className='sectionheading'>Projects</h2>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Project />
        </div>
    )
}

export default Projects;