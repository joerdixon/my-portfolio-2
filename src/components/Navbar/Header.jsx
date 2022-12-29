// Import React
import React from "react";
import Navigation from './Navigation'
import headshot from '../../assets/niceheadshot.jpg'
import resume from '../../assets/resume.pdf'

// TODO: Add resume download.

// TODO: Add contact links.

function Header(props) {
    return (
        <div className='flex flex-col justify-top w-1/6 border-r'>
            {/* Nameplate*/}
            <div className="flex flex-col justify-evenly h-1/4 items-center mb-10">
                <img className="rounded-full w-1/3" src={headshot} alt="Joe Dixon" />
                <h1 className='text-center text-xl font-semibold tracking-wide'>Joe Dixon</h1>
            </div>
            {/* Navbar */}
            <Navigation view={props.view} setView={props.setView} />
            {/* Resume */}
            <a className="bg-highlight text-black p-3 rounded w-2/3 mx-auto my-0 text-center mt-20" href={resume} download="joes-resume">Download Resume</a>
        </div>
    )
}

export default Header;
