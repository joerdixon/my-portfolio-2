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
            <a href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img src={lisvg} alt="LinkedIn logo" /></a>
            <a href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img src={ghsvg} alt="GitHub logo" /></a>
            <a href="https://leetcode.com/joseph35dixon/" target='_blank' name="Link to Joe's LeetCode profile."><img src={lcsvg} alt="LeetCode logo." /></a>
        </ul>
    </div>
    )
}

export default Footer;
