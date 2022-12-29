// Import React
import React from "react";
import { useState } from "react";
// Burger Menu
import { slide as Menu } from 'react-burger-menu'
// SVG Icons
import aboutsvg from "../../assets/icons/about.svg"
import skillsvg from "../../assets/icons/skills.svg"
import projectsvg from "../../assets/icons/projects.svg"
import contactsvg from "../../assets/icons/contact.svg"
import hamburger from '../../assets/icons/hamburger.png'
import ghsvg from '../../assets/logos/github.svg'
import lisvg from '../../assets/logos/linkedin.svg'
import gmsvg from '../../assets/icons/mail.svg'

// TODO: Cool hover effects and active styles
// TODO: Add hover effect for resume button

function Nav(props) {

    return (
        <>
            <div className=' h-1/3 hidden md:flex flex-col justify-between w-full' >
                <div className="navlink hover:navhover" onClick={() => { props.setView("about") }}>
                    <img src={aboutsvg} alt="about icon" />
                    <p>About Me</p>
                </div>
                <div className="navlink hover:navhover" onClick={() => { props.setView("projects") }}>
                    <img src={projectsvg} alt="briefcase icon" />
                    <p>Projects</p>
                </div>
                <div className="navlink hover:navhover" onClick={() => { props.setView("skills") }}>
                    <img src={skillsvg} alt="lightbulb icon" />
                    <p>Skills</p>
                </div>
                <div className="navlink hover:navhover" onClick={() => { props.setView("contact") }}>
                    <img src={contactsvg} alt="connect icon" />
                    <p>Contact</p>
                </div>
            </div>
            <div className="md:hidden mb-10">
                <img className="min-w-[20px] max-w-[30px] sm:max-w[40px]" src={hamburger} alt="Hamburger menu" />
                <Menu isOpen={false} width={"70vw"} className='mobile-menu' right>
                    <div className='h-1/2 flex flex-col justify-between w-full mt-10' >
                        <div className="mobile-link hover:navhover" onClick={() => { props.setView("about") }} >
                            <img src={aboutsvg} alt="about icon" />
                            <p>About Me</p>
                        </div>
                        <div className="mobile-link hover:navhover" onClick={() => { props.setView("projects") }}>
                            <img src={projectsvg} alt="briefcase icon" />
                            <p>Projects</p>
                        </div>
                        <div className="mobile-link hover:navhover" onClick={() => { props.setView("skills") }}>
                            <img src={skillsvg} alt="lightbulb icon" />
                            <p>Skills</p>
                        </div>
                        <div className="mobile-link hover:navhover" onClick={() => { props.setView("contact") }}>
                            <img src={contactsvg} alt="connect icon" />
                            <p>Contact</p>
                        </div>
                    </div>
                    <div>
                    <ul className='mobile-social flex justify-evenly items-center h-1/3'>
                        {/* Linked In */}
                        <a className="transition-transform-colors inline-block hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img className="contactlink" src={lisvg} alt="LinkedIn logo" /></a>
                        {/* GitHub */}
                        <a className="transition-transform-colors inline-block hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img className="contactlink" src={ghsvg} alt="GitHub logo" /></a>
                        {/* Gmail */}
                        <a className="transition-transform-colors inline-block hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' name="Link to create and send an email."><img className="contactlink" src={gmsvg} alt="Mail logo." /></a>
                    </ul>
                    </div>
                </Menu>
            </div>
        </>
    )
}

export default Nav;

// <ul className='flex flex-col justify-evenly w-full h-full'>
// {/* About Me */}
// <li className="navlink" onClick={() => { props.setView("about") }}>About Me</li>
// {/* Projects */}
// <li className="navlink" onClick={() => { props.setView("projects") }}>Projects</li>
// {/* Resume */}
// <li className="navlink" onClick={() => { props.setView("resume") }}>Resume</li>
// {/* Contact */}
// <li className="navlink" onClick={() => { props.setView("contact") }}>Contact</li>
// </ul>