import React from 'react';
import './Resume.css'
import resume from '../../../assets/resume.pdf'

// Revamp skills and resume screen.

function Resume(props) {
    return (
        <div className='resume-container'>
            <div className='tech-container'>
                <div classname='frontend-tech'>
                    <h2>Front End</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Tailwind</li>
                    </ul>
                </div>
                <div className='backend-tech'>
                    <h2>Back End</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className='concepts'>
                    <h2>Concepts</h2>
                    <ul>
                        <li>Object-Oriented Programming</li>
                        <li>MVC</li>
                        <li>Data Structures</li>
                        <li>Algorithms</li>
                    </ul>
                </div>
            </div>
                <div className='resume-download'>
                    <a href={resume} download='Resume.pdf'>Download Resume</a>
                </div>
        </div>
    )
}

export default Resume;