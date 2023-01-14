import React from 'react'
import Links from './Links'
import contact from '../../../../assets/icons/contact.svg'

// TODO: Add more links.

// The Contact section is the one-stop page for my personal presence on the internet. 
// There are more obscure links here in addition to the ones in the footer.

function Contact() {
    return (
        <div className='md:w-full flex flex-col overflow-x-hidden'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Contact</h2>
            </div>
            <h1 className='text-center mt-12 text-5xl font-heading'>Get in touch</h1>
            {/* Main Contact Content Container */}
            <div className='w-full h-[800px] flex flex-col justify-evenly text-2xl'>
                {/* Populates all of my contact links */}
                <div className='text-center flex flex-col justify-evenly  md:animate-slideX3'>  
                    <p className='m-4'><a className='block' href='mailto:joseph35dixon@gmail.com' target='_blank' rel="noreferrer">joseph35dixon@gmail.com</a></p>
                    <p className='m-4'>Seattle, WA</p>
                    <p></p>
                </div>
                <div className='m-10  md:animate-slideX2'>
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Contact;