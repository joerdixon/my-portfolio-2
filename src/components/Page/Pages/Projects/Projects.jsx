import React from 'react';
import Project from './Project'
import projects from '../../../../assets/icons/projects.svg'

// TODO: BUG: Small aspect change on this page only

function Projects() {
    return (
        <div className='md:w-auto'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={projects} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Projects</h2>
            </div>
            {/* Populates all of the projects in the projects array as cards.*/}
            <Project />
        </div>
    )
}

export default Projects;