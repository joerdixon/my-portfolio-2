import React from 'react';
import headshot from '../../../assets/niceheadshot.jpg'

// TODO: Add animations on screen load, this is the landing page.

function About(props) {
    return (
        <div className='h-2/3 flex justify-evenly items-center'>
            <div className='w-1/4 flex justify-around'>
                <img className='w-full rounded-full my-0 mx-auto' src={headshot} alt="Me!" />
            </div>
            <div className='w-1/2'>
                <h1 className='w-1/2 text-center mx-auto my-0'>About Me</h1>
                <p className='m-3 text-center w-full'>Welcome to my portfolio! My name is Joe and I am a web enthusiest currently working towards becoming a Full Stack Web Developer. Since I was young, I've always loved computers and the internet so I'm trying to make it my job! I live in Seattle, WA.</p>
            </div>
        </div>
    )
}

export default About;
