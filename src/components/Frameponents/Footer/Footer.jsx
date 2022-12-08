// Import React
import React from "react";
import './Footer.css'
import ghsvg from '../../../assets/github.svg'
import lisvg from '../../../assets/linkedin.svg'
import lcsvg from '../../../assets/leetcode.svg'

function Footer() {
    return (
    <div className='footer-container'>
        <ul className='footer-links'>
            {/* TODO: Replace with icons */}
            <a href="https://www.linkedin.com/in/joerdixon/" target='_blank'><img src={lisvg} alt="" /></a>
            <a href="https://github.com/joerdixon" target='_blank'><img src={ghsvg} alt="" /></a>
            <a href="https://leetcode.com/joseph35dixon/" target='_blank'><img src={lcsvg} alt="" /></a>
        </ul>
    </div>
    )
}

export default Footer;
