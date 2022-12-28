import React from 'react';
import resume from '../../../assets/resume.pdf'

//TODO: Revamp skills and resume screen.

function Skills(props) {
    return (
        <div className='w-5/6 flex flex-col justify-top items-center'>
            <h2 className='sectionheading'>Skills</h2>
            <div className='w-full flex justify-evenly flex-wrap'>
                <div>
                {/* Front End Skills */}
                <h2 className='ss-head'>Front End</h2>
                <div className='skillsection'>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>HTML</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>CSS</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>JavaScript</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>React</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Tailwind</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Bootstrap</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Bulma</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>jQuery</p>
                    </div>
                </div>
                </div>
                {/* Back End Skills */}
                <h2 className='ss-head'>Back End</h2>
                <div className='skillsection'>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Express.js</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Back end skill</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Back end skill</p>
                    </div>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Back end skill</p>
                    </div>
                </div>
                {/* Tools */}
                <h2 className='ss-head'>Tools</h2>
                <div className='skillsection'>
                    <div className='skill'>
                        <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                        <p className='skill-name'>Concept</p>
                    </div>
                </div>
            </div>
            <div className='border rounded bg-alt-bg mt-16'>
                <a href={resume} download='Resume.pdf'>Download Resume</a>
            </div>
        </div>
    )
}

export default Skills;