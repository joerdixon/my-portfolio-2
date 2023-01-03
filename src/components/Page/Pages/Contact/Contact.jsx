import React from 'react'
import Links from './Links'
import contact from '../../../../assets/icons/contact.svg'

// TODO: Add more links.

// The Contact section is the one-stop page for my personal presence on the internet. 
// There are more obscure links here in addition to the ones in the footer.

function Contact() {
    return (
        <div className='md:w-5/6'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={contact} alt="User icon on a book" className='hidden md:block md:heading-icon' />
                <h2>Contact</h2>
            </div>
            {/* Main Contact Content Container */}
            <div className='flex flex-col justify-evenly h-2/3'>
                <div className='text-center'>
                    Check out one of these:
                </div>
                {/* Populates all of my contact links */}
                <div>
                    <Links />
                </div>
                <div className='text-center flex flex-col'>
                    <p>Or contact me directly:</p>
                    <p><a className='block' href='mailto:joseph35dixon@gmail.com' target='_blank' rel="noreferrer">joseph35dixon@gmail.com</a></p>
                    <p><a className='block' href='tel:2063029221'>206-302-9221</a></p>
                    <p>(Please text before you call)</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Contact;