import React from 'react';
import Test from './Test'
import more from '../../../assets/icons/star.svg'

// Things to put in more:
// Spotify API card
// Favorite color
// Picture of Bella
// Some cool animation with three to show off.
// Buy me a coffee link.

function More() {
    return (
        <div className='flex flex-col justify-top items-center w-full'>
            {/* Page Heading */}
            <header className='sectionheading md:sectionheading-md'>
                <img src={more} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>More</h2>
            </header>
            <div className='w-full flex flex-col justify-evenly overflow-y-auto overflow-x-hidden md:pr-32 md:pl-32 md:pt-96 pl-12 pr-12'>
                <div className='more-section md:more-section-l'>
                    {/* Heading */}
                    <h1 className='md:more-heading-md more-heading md:animate-slideXL3'>Recent Games</h1>
                    {/* Content */}
                    <div className='text-xl md:animate-slideXL4'>
                        <p>I like to play video games when I'm not working.</p>
                        <p>Here are some of the game's I have been playing recently:</p>
                        <br />
                        {/* Games List */}
                        <ul>
                            <li>The Legend of Zelda: Skyward Sword HD</li>
                            <li>Age of Empires II: DE</li>
                            <li>Overwatch 2 (Winston, Mercy, DVA, Bastion)</li>
                            <li>System Shock 2</li>
                            <li>Super Mario Odyssey (going for all the moons)</li>
                        </ul>
                    </div>
                </div>
                {/* <div className='more-section md:more-section-r'>
                    <h1 className='md:more-heading-md more-heading'>What I'm Listening To</h1>
                    <p>Spotify API goes here.</p>
                </div> */}
                <div className='more-section md:more-section-r'>
                    <h1 className='md:more-heading-md more-heading md:animate-slideX3'>Cool Websites</h1>
                    <div className='md:animate-slideX4'>
                        <p>I find awesome websites all the time.</p>
                        <p>Here's a list of some of them:</p>
                        <br />
                        <ul>
                            <li><a href="https://bruno-simon.com/" target='_blank' rel='noreferrer'>bruno-simon.com</a> - Coolest portfolio I've ever seen. (Try it on mobile!)</li>
                            <li><a href="https://blobmixer.14islands.com/" target='_blank' rel='noreferrer'>blobmixer</a> - Great study for three.js</li>
                            <li><a href="https://mrdoob.com/" target='_blank' rel='noreferrer'>mr. doob</a> - Variety of cool apps with a variety of technologies.  </li>
                        </ul>
                    </div>
                </div>
                <div className='more-section md:more-section-l'>
                    <h1 className='md:more-heading-md more-heading md:animate-slideXL3'>Credits</h1>
                    <ul className='md:animate-slideXL4'>
                        <li>SVG Logos - <a href='https://worldvectorlogo.com/' target='_blank' rel='noreferrer'>https://worldvectorlogo.com/</a></li>
                        <li>SVG Icons - <a href='https://icons8.com/' target='_blank' rel='noreferrer'>https://icons8.com/</a></li>
                    </ul>
                </div>
                <Test />
            </div>
        </div>
    )
};

export default More;