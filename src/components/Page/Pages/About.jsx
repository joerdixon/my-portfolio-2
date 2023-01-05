import React from 'react';
import headshot from '../../../assets/niceheadshot.jpg'
// SVG ICONS
import aboutme from '../../../assets/icons/about.svg'

// TODO: Add animations on screen load, this is the landing page.
// TODO: Add a "last updated" line at the bottom
// TODO: ! Add a larger piece of writing
// TODO: Add picture of Bella (either here or in "More")
// TODO: Improve about me layout

// The About section contains general information about who I am as a person, my goals, major milestones and interests.
function About(props) {
    return (
        <div className='flex flex-col justify-top items-center md:w-5/6'>
            <div className='sectionheading md:sectionheading-md'>
                <img src={aboutme} alt="User icon on a book" className='hidden md:block md:heading-icon animate-slideX' />
                <h2 className='animate-slideX'>About Me</h2>
            </div>
            <div className='flex flex-col justify-between items-center overflow-auto'>
                <div className='flex flex-col-reverse md:flex-row justify-evenly items-center mt-20'>
                    <div className='flex flex-col justify-evenly items-start h-full'>
                        {/* TODO: Add gradient and animation like v1 */}
                        <h1 className='text-6xl'>Joe Dixon</h1>
                        <h2 className='text-3xl'>Full Stack Web Dev</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around'>
                        {/* TODO: Add hover effect on headshot. */}
                        <img className='w-full rounded-full my-0 mx-auto' src={headshot} alt="Joe Dixon" />
                    </div>
                </div>
                {/* TODO: Add highlighting and emphasis to certain words. */}
                <div className='w-1/2 mt-20 mb-20'>
                    <p className='text-left text-lg md:text-2xl w-full'>Hello! My name is Joe and I am a Full Stack Web Developer who loves to create beautiful and functional websites. My love for the internet started with my first computer and only grew from that point onward. <br /><br />

                        I’ve recently graduated from University of Washington’s Full Stack Bootcamp and have strong proficiency in both modern front-end and modern back-end technologies. Seeing the web grow and change over the years has inspired me to make my own contribution! I am passionate about creating amazing UX and accessible websites and hope to leave the internet more inclusive than I found it. <br /><br />

                        Thanks for checking me out and I hope you enjoy the rest of my portfolio!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
