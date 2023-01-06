// Import React
import React from "react";
import Navigation from './Navigation'
import headshot from '../../assets/niceheadshot.jpg'
import resume from '../../assets/resume.pdf'
// SVG Import
import lisvg from '../../assets/logos/linkedin.svg'
import ghsvg from '../../assets/logos/github.svg'
import gmsvg from '../../assets/icons/mail.svg'

// TODO: Add animations on load for header elements.

// The header component (sidebar) contains links and information that are avaliable sitewide.  
function Header(props) {

    return (
        // TODO: Reformat header to a consistent size (w-52 is close).
        <div className='flex my-0 w-5/6 h-16 md:h-auto md:flex-col justify-between md:w-64 md:min-w-[16rem] md:header-border md:p-5 md:pt-10'>
            {/* Nameplate*/}
            <div className="flex justify-evenly items-center md:mb-10 md:w-full">
                {/* Add status ping to picture */}
                <img className="rounded-full w-1/6 hidden md:block" src={headshot} alt="Joe Dixon" />
                <h1 className='text-center text-xl font-display font-semibold tracking-wide ml-4'>Joe Dixon</h1>
            </div>
            {/* Navbar */}
            <Navigation view={props.view} setView={props.setView}/>
            {/* Resume Download */}
            {/* TODO: Add hover effect for resume download */}
            <a className="bg-highlight text-black p-3 font-bold rounded w-2/3 mx-auto my-0 text-center mt-20 hidden transition-all duration-500 hover:resume-hover md:block" href={resume} download="joes-resume">Download Resume</a>
            {/* TODO: Add theme picker here. */}
            {/* Contact Links */}
            <ul className='footer-links hidden w-full md:flex justify-evenly items-center'>
                {/* Linked In */}
                <a className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' rel="noreferrer" name="Link to Joe's LinkedIn"><img className="contactlink" src={lisvg} alt="LinkedIn logo" /></a>
                {/* GitHub */}
                <a className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' rel="noreferrer" name="Link to Joe's GitHub Profile"><img className="contactlink" src={ghsvg} alt="GitHub logo" /></a>
                {/* Gmail */}
                <a className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' rel="noreferrer" name="Link to create and send an email."><img className="contactlink" src={gmsvg} alt="Mail logo." /></a>
            </ul>
        </div>
    )
}

export default Header;
