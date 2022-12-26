import React from 'react';
import resume from '../../../assets/resume.pdf'

//TODO: Revamp skills and resume screen.

function Skills(props) {
    return (
        <div className='w-5/6'>
            <div className='w-full flex justify-evenly flex-wrap'>
                <div className='skillsection'>
                    <h2>Front End</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div className='skillsection'>
                    <h2>Back End</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className='skillsection'>
                    <h2>Concepts</h2>
                    <ul>
                        <li>Object-Oriented Programming</li>
                        <li>MVC</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <a href={resume} download='Resume.pdf'>Download Resume</a>
            </div>
        </div>
    )
}

export default Skills;