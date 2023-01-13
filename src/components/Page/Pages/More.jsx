import React from 'react';
import more from '../../../assets/icons/star.svg'

// Things to put in more:
// Current Games
// Spotify API card
// Favorite color
// Picture of Bella
// List of some of my favorite websites
// Some cool animation with three to show off.
// Last updated timestamp
// Buy me a coffee link.

// TODO: Credits to be added to the more section.
// https://worldvectorlogo.com/
// Futurama Bender icon by Icons8

function More() {
    return (
        <div className='flex flex-col justify-top items-center w-full'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={more} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>More</h2>
            </div>
            <div className='w-full flex flex-col justify-evenly overflow-y-auto'>
                <div className='more-section-l'>
                    <h1 className='more-heading'>Heading</h1>
                    <p>Content</p>
                </div>
                <div className='more-section-r'>
                    <h1 className='more-heading'>Heading</h1>
                    <p>Content</p>
                </div>
                <div className='more-section-l'>
                    <h1 className='more-heading'>Heading</h1>
                    <p>Content</p>
                </div>
                <div className='more-section-r'>
                    <h1 className='more-heading'>Heading</h1>
                    <p>Content</p>
                </div>
                <div className='more-section-l'>
                    <h1 className='more-heading'>Heading</h1>
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
};

export default More;