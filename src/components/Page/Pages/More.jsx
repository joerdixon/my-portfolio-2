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
        <div className='flex flex-col justify-top items-center md:w-auto'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={more} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>More</h2>
            </div>
            <div className='flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden'>
                {/* TODO: Add highlighting and emphasis to certain words. */}
                <div className='w-2/3 mt-20 mb-20 md:animate-slideX3'>
                    <p className='text-left text-lg md:text-2xl w-full font-main'>Hello! My name is Joe and I am a Full Stack Web Developer who loves to create beautiful and functional websites. My love for the internet started with my first computer and only grew from that point onward. <br /><br />

                        I’ve recently graduated from University of Washington’s Full Stack Bootcamp and have strong proficiency in both modern front-end and modern back-end technologies. Seeing the web grow and change over the years has inspired me to make my own contribution! I am passionate about creating amazing UX and accessible websites and hope to leave the internet more inclusive than I found it. <br /><br />

                        Thanks for checking me out and I hope you enjoy the rest of my portfolio!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default More;