import React from 'react'
import Links from './Links'
import contact from '../../../../assets/icons/contact.svg'

// TODO: Add more links.

// The Contact section is the one-stop page for my personal presence on the internet. 
// There are more obscure links here in addition to the ones in the footer.

function Contact() {
    return (
        <div className='md:w-full overflow-x-hidden'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>Contact</h2>
            </div>
            {/* Main Contact Content Container */}
            <div className='w-full flex flex-col justify-evenly text-2xl'>
                <div className='text-center mt-14 md:animate-slideX2'>
                    Check out one of these:
                </div>
                {/* Populates all of my contact links */}
                <div className='m-10  md:animate-slideX2'>
                    <Links />
                </div>
                <div className='text-center flex flex-col justify-evenly  md:animate-slideX3'>
                    <p className='m-4'>Or contact me directly:</p>
                    <p className='m-4'><a className='block' href='mailto:joseph35dixon@gmail.com' target='_blank' rel="noreferrer">joseph35dixon@gmail.com</a></p>
                    <p className='m-4'><a className='block' href='tel:2063029221'>206-302-9221</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;