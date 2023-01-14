import React from 'react';
import headshot from '../../../assets/niceheadshot.jpg'
// SVG ICONS
import aboutme from '../../../assets/icons/about.svg'

// TODO: Improve about me layout
// TODO: Itemize and customize entrance animations.
// TODO: Add longer piece and bella photo

// The About section contains general information about who I am as a person, my goals, major milestones and interests.
function About(props) {
    return (
        <div className='flex flex-col justify-top items-center md:w-auto'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={aboutme} alt="User icon on a book" className='hidden md:block md:heading-icon md:animate-slideX' />
                <h2 className='md:animate-slideX2'>About Me</h2>
            </div>
            <div className='flex flex-col justify-between items-center overflow-y-auto overflow-x-hidden'>
                <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-20'>
                    <div className='flex flex-col justify-evenly items-center md:items-start h-full'>
                        {/* TODO: Add gradient */}
                        {/* TODO: Looks derpy on mobile */}
                        <h1 className='md:text-6xl text-5xl font-display m-10 md:m-0 md:animate-slideX2'>Joe Dixon</h1>
                        <h2 className='md:text-3xl text-2xl font-heading md:animate-slideX3'>Full Stack Web Developer</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around md:animate-slideX3'>
                        {/* TODO: Add hover effect on headshot. */}
                        <img className='w-full rounded-full my-0 mx-auto' src={headshot} alt="Joe Dixon" />
                    </div>
                </div>
                {/* TODO: Add highlighting and emphasis to certain words. */}
                <div className='w-2/3 mt-20 mb-20 md:animate-slideX3'>
                    <p className='text-left text-lg md:text-2xl w-full font-main'>Hello! My name is Joe and I am a Full Stack Web Developer who loves to create beautiful and functional websites. My love for the internet started with my first computer and only grew from that point onward. <br /><br />

                        I’ve recently graduated from University of Washington’s Full Stack Bootcamp and have strong proficiency in both modern front-end and modern back-end technologies. Seeing the web grow and change over the years has inspired me to make my own contribution! I am passionate about creating amazing UX and accessible websites and hope to leave the internet more inclusive than I found it. <br /><br />

                        Thanks for checking me out and I hope you enjoy the rest of my portfolio!
                    </p>
                    <br />
                    <p className='italic'>Last Updated: 1/14/2023</p>
                </div>
            </div>
        </div>
    )
}

export default About;
