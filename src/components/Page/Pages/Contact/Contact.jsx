import React from 'react'
import Links from './Links'
import contact from '../../../../assets/icons/contact.svg'

// TODO: Add more links.

// The Contact section is the one-stop page for my personal presence on the internet. 
// There are more obscure links here in addition to the ones in the footer.

function Contact() {
    return (
        <div className='md:w-full flex flex-col overflow-x-hidden'>
            {/* Section Heading */}
            <div className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Contact</h2>
            </div>
            {/* Page Content */}
            <div className='flex flex-col items-center overflow-hidden'>
            <h1 className='text-center mt-12 sm:text-6xl text-5xl font-heading md:animate-slideXL'>Get in touch</h1>
            <div className='w-full h-[800px] flex flex-col justify-evenly items-center sm:text-2xl text-xl overflow-x-hidden'>
                {/* Populates all of my contact links */}
                <div className='text-left flex flex-col justify-top md:animate-slideX2 overflow-x-hidden'>  
                    <p className='m-4'>Email: <a className='' href='mailto:joseph35dixon@gmail.com' target='_blank' rel="noreferrer">joseph35dixon@gmail.com</a></p>
                    <p className='m-4'>Discord: joerdixon#2022</p>
                    <p className='m-4'>Location: Seattle, WA</p>
                </div>
                <div className='md:animate-slideX3 overflow-x-hidden'>
                    <Links />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;