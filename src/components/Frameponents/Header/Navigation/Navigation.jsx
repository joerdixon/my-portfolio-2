// Import React
import React from "react";

// TODO: Space out navbar from the top of the screen.p  

function Nav(props) {
    return (
        <div className='w-1/2'>
            <ul className='flex justify-evenly w-full'>
                {/* About Me */}
                <li onClick={() => { props.setView("about") }}>About Me</li>
                {/* Projects */}
                <li onClick={() => { props.setView("projects") }}>Projects</li>
                {/* Resume */}
                <li onClick={() => { props.setView("resume") }}>Resume</li>
                {/* Contact */}
                <li onClick={() => { props.setView("contact") }}>Contact</li>
            </ul>
        </div>
    )
}

export default Nav;
