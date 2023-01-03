import React, { useState } from 'react'
// Logo SVG's
import ghsvg from '../../../assets/logos/github.svg'
import lisvg from '../../../assets/logos/linkedin.svg'
import lcsvg from '../../../assets/logos/leetcode.svg'
import gmsvg from '../../../assets/icons/mail.svg'
import contact from '../../../assets/icons/contact.svg'

// TODO: Add more links.

// The Contact section is the one-stop page for my personal presence on the internet. 
// There are more obscure links here in addition to the ones in the footer.

function Contact() {
    return (
        <div className='w-5/6'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon' />
                <h2>Contact</h2>
            </div>
            <div>
                Find me at any of these!
            </div>
        </div>
    )
}

export default Contact;