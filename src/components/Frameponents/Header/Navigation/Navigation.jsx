// Import React
import React from "react";

// TODO: Space out navbar from the top of the screen.p  

function Nav(props) {
    return (
        <div className='h-full'>
            <ul className='flex flex-col justify-evenly w-full h-full'>
                {/* About Me */}
                <li className="navlink" onClick={() => { props.setView("about") }}>About Me</li>
                {/* Projects */}
                <li className="navlink" onClick={() => { props.setView("projects") }}>Projects</li>
                {/* Resume */}
                <li className="navlink" onClick={() => { props.setView("resume") }}>Resume</li>
                {/* Contact */}
                <li className="navlink" onClick={() => { props.setView("contact") }}>Contact</li>
            </ul>
        </div>
    )
}

export default Nav;
