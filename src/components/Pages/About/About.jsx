import React from 'react';
import './About.css'
import headshot from '../../../assets/niceheadshot.jpg'

// TODO: Transplant Tailwind
// TODO: Add animations on screen load, this is the landing page.

function About(props) {
    return (
        <div className='about-container'>
            <div className='img-container'>
                <img src={headshot} alt="Me!" />
            </div>
            <div className='bio-container'>
                <h1>About Me</h1>
                <p>Welcome to my portfolio! My name is Joe and I am a web enthusiest currently working towards becoming a Full Stack Web Developer. Since I was young, I've always loved computers and the internet so I'm trying to make it my job! I live in Seattle, WA.</p>
            </div>
        </div>
    )
}

export default About;
