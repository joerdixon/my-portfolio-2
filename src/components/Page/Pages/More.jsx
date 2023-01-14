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
            <div className='w-full flex flex-col justify-evenly overflow-y-auto md:pr-32 md:pl-32 md:pt-52 pt-12 pl-12 pr-12 text-center'>
                <div className='more-section md:more-section-l'>    
                    <h1 className='md:more-heading-md more-heading'>Recent Games</h1>
                    <p>I like to play video games when I'm not working.</p>
                    <p>Here are some of the game's I have been playing recently:</p>
                    {/* Games List */}
                    <ul>
                        <li>The Legend of Zelda: Skyward Sword HD</li>
                        <li>Age of Empires II: DE</li>
                        <li>Overwatch 2 (Winston, DVA, Bastion, Mercy)</li>
                        <li>System Shock 2</li>
                        <li>Super Mario Odyssey (Trying to get all moons)</li>
                    </ul>
                </div>
                <div className='more-section md:more-section-r'>
                    <h1 className='md:more-heading-md more-heading'>What I'm Listening To</h1>
                    <p>Spotify API goes here.</p>
                </div>
                <div className='more-section md:more-section-l'>
                    <h1 className='md:more-heading-md more-heading'>Cool Websites</h1>
                    <p>I find awesome websites all the time.</p>
                    <p>Here's a list of some of them:</p>
                    <ul>
                        <li><a href="https://bruno-simon.com/" target='_blank' rel='noreferrer'>bruno-simon.com</a> - Coolest portfolio I've ever seen. (Try it on mobile!)</li>
                        <li><a href="https://blobmixer.14islands.com/" target='_blank' rel='noreferrer'>blobmixer</a> - Great study for three.js</li>
                        <li><a href="https://mrdoob.com/" target='_blank' rel='noreferrer'>mr. doob</a> - Variety of cool apps with a variety of technologies.  </li>
                    </ul>
                </div>
                <div className='more-section md:more-section-r'>
                    <h1 className='md:more-heading-md more-heading'>Last Updated</h1>
                    <p>January 13th, 2023</p>
                </div>
            </div>
        </div>  
    )
};

export default More;