// Import React
import React from "react";
// import './Navigation.css'

function Nav(props) {
    return (
    <div className ='nav-container w-1/2'>
        <ul className ='nav-links flex justify-evenly w-full'>
            {/* About Me */}
            <li onClick={() => {props.setView("about")}}>About Me</li>
            {/* Projects */}
            <li onClick={() => {props.setView("projects")}}>Projects</li>
            {/* Resume */}
            <li onClick={() => {props.setView("resume")}}>Resume</li>
            {/* Contact */}
            <li onClick={() => {props.setView("contact")}}>Contact</li>
        </ul>
    </div>
    )
}

export default Nav;
