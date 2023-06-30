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
            <header className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Contact</h2>
            </header>
            {/* Page Content */}
            <div className='flex flex-col justify-evenly items-center overflow-hidden'>
                <h1 className='text-center my-12 sm:text-6xl text-5xl font-heading md:animate-slideXL'>Get in touch</h1>
                <div className='w-full lg:w-[1000px] xl:h-[400px] lg:flex justify-evenly sm:text-2xl text-xl overflow-x-hidden my-12'>
                    {/* Populates all of my contact links */}
                    <div className='md:animate-slideXL2 overflow-x-hidden'>
                        <Links />
                    </div>
                    <div className='lg:text-left text-center flex flex-col justify-evenly md:animate-slideX3 overflow-x-hidden'>
                        <p className='m-4'>Email: <a className='' href='mailto:joseph35dixon@gmail.com' target='_blank' rel="noreferrer">joseph35dixon@gmail.com</a></p>
                        <p className='m-4'>Discord: joerdixon#2022</p>
                        <p className='m-4'>Location: Seattle, WA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;