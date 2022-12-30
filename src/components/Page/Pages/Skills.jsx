import React from 'react';
// SVG Import
// Front End
import js from '../../../assets/skills/javascript.svg'
import css from "../../../assets/skills/css.svg"
import html from "../../../assets/skills/html.svg"
import bootstrap from "../../../assets/skills/bootstrap.svg"
import jquery from "../../../assets/skills/jquery.svg"
import react from "../../../assets/skills/react.svg"
import tailwind from "../../../assets/skills/tailwind.svg"
import bulma from "../../../assets/skills/bulma.svg"
// Back End
import nodejs from "../../../assets/skills/nodejs.svg"
import mongodb from "../../../assets/skills/mongodb.svg"
import mysql from "../../../assets/skills/mysql.svg"
import express from "../../../assets/skills/express.svg"
import socket from "../../../assets/skills/socket.svg"
import graphql from "../../../assets/skills/graphql.svg"
import netlify from "../../../assets/skills/netlify.svg"
import heroku from "../../../assets/skills/heroku.svg"
// Other
import python from "../../../assets/skills/python.svg"
import photoshop from "../../../assets/skills/photoshop.svg"
import jest from "../../../assets/skills/jest.svg"
import java from "../../../assets/skills/java.svg"
import gitbash from "../../../assets/skills/git-bash.svg"
import figma from "../../../assets/skills/figma.svg"

// TODO: Fix Icon Sizing
// TODO: Add hover effects that reveals tech name.


// The Skills section defines which technologies I am proficient in.
function Skills(props) {
    return (
        <div className='md:w-5/6 flex flex-col justify-top items-center'>
            <h2 className='sectionheading md:sectionheading-md'>Skills</h2>
            <div className='w-full h-full flex justify-evenly flex-wrap'>
                <div className='skill-container'>
                    {/* Front End Skills */}
                    <h2 className='ss-head'>Front End</h2>
                    <div className='skillsection'>
                        <div className='skill'>
                            <img className='skill-icon' src={html} alt="HTML5 Logo" />
                            <p className='skill-name'>HTML</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={css} alt="CSS3 Logo" />
                            <p className='skill-name'>CSS</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={js} alt="Javascript Logo" />
                            <p className='skill-name'>JavaScript</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={react} alt="React Logo" />
                            <p className='skill-name'>React</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={tailwind} alt="Tailwind Logo" />
                            <p className='skill-name'>Tailwind</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={bootstrap} alt="Bootstrap Logo" />
                            <p className='skill-name'>Bootstrap</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={bulma} alt="Bulma Logo" />
                            <p className='skill-name'>Bulma</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={jquery} alt="jQuery Logo" />
                            <p className='skill-name'>jQuery</p>
                        </div>
                    </div>
                </div>
                <div className='skill-container'>
                    {/* Back End Skills */}
                    <h2 className='ss-head'>Back End</h2>
                    <div className='skillsection'>
                        <div className='skill'>
                            <img className='skill-icon' src={express} alt="Express.js Logo" />
                            <p className='skill-name'>Express.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={nodejs} alt="Node.js Logo" />
                            <p className='skill-name'>Node.js</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={mysql} alt="MySQL Logo" />
                            <p className='skill-name'>MySQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={mongodb} alt="MongoDB Logo" />
                            <p className='skill-name'>MongoDB</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={socket} alt="Socket.io Logo" />
                            <p className='skill-name'>Socket.io</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={graphql} alt="GraphQL Logo" />
                            <p className='skill-name'>GraphQL</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={netlify} alt="Netlify Logo" />
                            <p className='skill-name'>Netlify</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={heroku} alt="Heroku Logo" />
                            <p className='skill-name'>Heroku</p>
                        </div>
                    </div>
                </div>
                <div className='skill-container'>
                    {/* Additional Skills */}
                    <h2 className='ss-head'>Plus</h2>
                    <div className='skillsection'>
                        <div className='skill'>
                            <img className='skill-icon' src={python} alt="Python Logo" />
                            <p className='skill-name'>Python</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={java} alt="Java Logo" />
                            <p className='skill-name'>Java</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={gitbash} alt="Git Bash Logo" />
                            <p className='skill-name'>Git</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={jest} alt="Jest Logo" />
                            <p className='skill-name'>Jest</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={figma} alt="Figma Logo" />
                            <p className='skill-name'>Figma</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src={photoshop} alt="Photoshop Logo" />
                            <p className='skill-name'>Photoshop</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>Aseprite</p>
                        </div>
                        <div className='skill'>
                            <img className='skill-icon' src="https://placeholder.pics/svg/40" alt="" />
                            <p className='skill-name'>UI/UX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;