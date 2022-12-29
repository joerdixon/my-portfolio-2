// Import React
import React from "react";
// SVG Icons
import aboutsvg from "../../assets/icons/about.svg"
import skillsvg from "../../assets/icons/skills.svg"
import projectsvg from "../../assets/icons/projects.svg"
import contactsvg from "../../assets/icons/contact.svg"
import hamburger from '../../assets/icons/hamburger.png'

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