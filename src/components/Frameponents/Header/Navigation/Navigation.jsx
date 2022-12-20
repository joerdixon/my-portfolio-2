// Import React
import React from "react";
// import './Navigation.css'

function Nav(props) {
    return (
    <div className ='nav-container w-1/2'>
        <ul className ='nav-links flex justify-evenly w-full'>
            <li onClick={() => {props.setView("about")}}>About Me</li>
            <li onClick={() => {props.setView("projects")}}>Projects</li>
            <li onClick={() => {props.setView("resume")}}>Resume</li>
            <li onClick={() => {props.setView("contact")}}>Contact</li>
        </ul>
    </div>
    )
}

export default Nav;
