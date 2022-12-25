// Import React
import React from "react";
// Logo SVG's
import ghsvg from '../../../assets/github.svg'
import lisvg from '../../../assets/linkedin.svg'
import lcsvg from '../../../assets/leetcode.svg'
import gmsvg from '../../../assets/mail.svg'

function Footer() {
    // TODO: Figure out why links are shifting dimensions on hover.
    return (
        <div className='footer-container w-4/5 my-0 mx-auto flex justify-evenly items-center h-1/6'>
            <ul className='footer-links w-full flex justify-evenly items-center h-2/3'>
                {/* Linked In */}
                <a className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img className="footerlink" src={lisvg} alt="LinkedIn logo" /></a>
                {/* GitHub */}
                <a className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img className="footerlink" src={ghsvg} alt="GitHub logo" /></a>
                {/* Gmail */}
                <a className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' name="Link to create and send an email."><img className="footerlink" src={gmsvg} alt="Mail logo." /></a>
            </ul>
        </div>
    )
}

export default Footer;
