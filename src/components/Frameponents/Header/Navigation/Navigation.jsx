// Import React
import React from "react";
import './Navigation.css'

function Nav() {
    return (
    <div className ='nav-container'>
        <ul className ='nav-links'>
            <li>Home</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Resume</li>
            <li>Contact</li>
        </ul>
    </div>
    )
}

export default Nav;
