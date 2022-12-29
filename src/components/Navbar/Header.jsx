// Import React
import React from "react";
import Navigation from './Navigation'
import headshot from '../../assets/niceheadshot.jpg'
import resume from '../../assets/resume.pdf'
// SVG Import
import lisvg from '../../assets/logos/linkedin.svg'
import ghsvg from '../../assets/logos/github.svg'
import gmsvg from '../../assets/icons/mail.svg'


// TODO: Add resume download.

// TODO: Add contact links.

function Header(props) {
    return (
        <div className='flex flex-col justify-between w-1/6 border-r pt-5 pb-5'>
            {/* Nameplate*/}
            <div className="flex justify-evenly items-center mb-10">
                <img className="rounded-full w-1/6" src={headshot} alt="Joe Dixon" />
                <h1 className='text-center text-xl font-semibold tracking-wide'>Joe Dixon</h1>
            </div>
            {/* Navbar */}
            <Navigation view={props.view} setView={props.setView} />
            {/* Resume */}
            <a className="bg-highlight text-black p-3 font-bold rounded w-2/3 mx-auto my-0 text-center mt-20" href={resume} download="joes-resume">Download Resume</a>
            {/* Contact Links */}
            <ul className='footer-links w-full flex justify-evenly items-center'>
                {/* Linked In */}
                <a className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img className="contactlink" src={lisvg} alt="LinkedIn logo" /></a>
                {/* GitHub */}
                <a className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img className="contactlink" src={ghsvg} alt="GitHub logo" /></a>
                {/* Gmail */}
                <a className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' name="Link to create and send an email."><img className="contactlink" src={gmsvg} alt="Mail logo." /></a>
            </ul>   
        </div>
    )
}

export default Header;
