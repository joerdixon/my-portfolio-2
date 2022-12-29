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

// Burger Menu Styling
var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '20px'
    },
    bmBurgerBars: {
      background: '#fff'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#111',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

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
            {/* Mobile Nav */}
            {/* TODO:  Close menu on button click.*/}
            <div className="md:hidden mb-10">
                {/* <img className="min-w-[20px] max-w-[30px] sm:max-w[40px]" src={hamburger} alt="Hamburger menu" /> */}
                <Menu styles={styles} width={'100vw'} right>
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
                    <div className="w-full">
                    <ul className='mobile-social flex justify-evenly items-center h-1/3'>
                        {/* Linked In */}
                        <a className="transition-transform-colors inline-block hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img className="contactlink w-14" src={lisvg} alt="LinkedIn logo" /></a>
                        {/* GitHub */}
                        <a className="transition-transform-colors inline-block hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img className="contactlink w-14" src={ghsvg} alt="GitHub logo" /></a>
                        {/* Gmail */}
                        <a className="transition-transform-colors inline-block hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' name="Link to create and send an email."><img className="contactlink w-14" src={gmsvg} alt="Mail logo." /></a>
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