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
                        <h1 className='md:text-6xl text-5xl font-display m-10 md:m-0 md:animate-slideX2'>Joe Dixon</h1>
                        {/* TODO: Gradient Here */}
                        <h2 className='md:text-3xl text-2xl font-heading md:animate-slideX3'>Full Stack Web Developer</h2>
                    </div>
                    <div className='w-2/3 md:w-1/4 flex justify-around md:animate-slideX3'>
                        {/* TODO: Add hover effect on headshot. */}
                        <img className='w-full rounded-full my-0 mx-auto' src={headshot} alt="Joe Dixon" />
                    </div>
                </div>
                {/* TODO: Add highlighting and emphasis to certain words. */}
                <div className='w-2/3 mt-20 mb-20 md:animate-slideX3'>
                    <p className='text-left text-lg md:text-2xl w-full font-main'>
                    <span className='text-3xl text-highlight'>Hello!</span> My name is Joe and I am a <span className='text-2xl text-highlight italic'>Full Stack Web Developer</span> who loves to create beautiful and functional websites. My love for the internet and electronics started with my first computer and only grew from that point onward.
                    <br /><br />
                    Seeing the web grow and change over the years has inspired me to make my own contribution! I am passionate about creating amazing UX and accessible websites and hope to leave the internet more inclusive than I found it.
                    <br /><br />
                    I want to bring my interests further into the internet age by creating useful websites for fans of those hobbies. I already made a <a className='text-highlight underline' href='https://sullisters.github.io/Trade-Wizard/' target='_blank' rel='noreferrer'>trade calculator for Magic the Gathering</a> and a <a className='text-highlight underline' href='https://joerdixon.github.io/the-mortal-kingdoms/' target='_blank' rel='noreferrer'>wiki for my D&D campaign setting</a>. These are the types of websites I like to work on in my spare time but I also have a fascination for business and marketing that I like to exercise when building up someone else's brand.
                    <br /><br />
                    Thanks for checking me out and I hope you enjoy the rest of my portfolio!
                    </p>
                    <br />
                    <br />
                    {/* Last Updated Section */}
                    <p className='italic'>Last Updated: 1/14/2023</p>
                </div>
            </div>
        </div>
    )
}

export default About;
