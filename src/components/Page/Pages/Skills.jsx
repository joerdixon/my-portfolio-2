import React from 'react';

function Skills(props) {
    return (
        <div className='w-5/6 flex flex-col justify-top items-center'>
            <h2 className='sectionheading'>Skills</h2>
            <div className='w-full h-full flex justify-evenly flex-wrap'>
                <div className='skill-container'>
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
                <div className='skill-container'>
                    {/* Back End Skills */}
                    <h2 className='ss-head'>Back End</h2>
                    <div className='skillsection'>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Express.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Node.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>MySQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Socket.io</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>GraphQL</p>
                        </div>
                    </div>
                </div>
                <div className='skill-container'>
                    <h2 className='ss-head'>Plus</h2>
                    <div className='skillsection'>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Python</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Java</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Git</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Jest</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>UI/UX</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Wireframing</p>
                        </div>
                    </div>
                </div>
                {/* Tools */}
            </div>
        </div>
    )
}

export default Skills;