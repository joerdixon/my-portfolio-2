// Import React
import React from "react";

import loader from '../../../../assets/icons/loader.svg'
import mklogo from '../../../../assets/logos/mklogo.png';
import wizmoji from '../../../../assets/logos/wizardemoji.png'
import gllogo from '../../../../assets/logos/gridlocke1.png'

// TODO: Add slide-in animation on scroll.
// TODO: ! Add the following to the project cards: Tech Stack, Dev Phase (Building, Scaling, Live), GitHub Repo
// TODO: Correct project card proportions and add responsiveness.
// TODO: ! Add my next best projects to flesh out project section.
// TODO: Add better favicons for other projects


// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
    {
        projectTitle: "Gridlocke",
        projectImg: gllogo,
        projectDesc: "A grid-based card game with lots of replayability and suprisingly deep strategy.",
        liveLink: "https://gridlocke.net/",
    },
    {
        projectTitle: "Mortal Kingdoms",
        projectImg: mklogo,
        projectDesc: "A wiki style website dedicated to my Dungeons and Dragons DM and his amazing worldbuilding.",
        liveLink: "https://joerdixon.github.io/the-mortal-kingdoms/",
    },
    {
        projectTitle: "Trade Wizard",
        projectImg: wizmoji,
        projectDesc: "A card trading application that allows users to search, add and remove cards to work out a deal.",
        liveLink: "https://sullisters.github.io/Trade-Wizard/",
    },
    {
        projectTitle: "Code Conflict",
        projectImg: loader,
        projectDesc: "A rpg-style turn based battle game where you control web developers.",
        liveLink: "https://code-conflict.herokuapp.com/",
    },
    {
        projectTitle: "Portfolio v1",
        projectImg: loader,
        projectDesc: "My old portfolio, made exclusively with HTML and CSS",
        liveLink: "https://joerdixon.github.io/my-portfolio/",
    },
    {
        projectTitle: "Coming Soon",
        projectImg: loader,
        projectDesc: "Project Loading...",
        liveLink: "#",
    },
    {
        projectTitle: "Coming Soon",
        projectImg: loader,
        projectDesc: "Project Loading...",
        liveLink: "#",
    },
    {
        projectTitle: "Coming Soon",
        projectImg: loader,
        projectDesc: "Project Loading...",
        liveLink: "#",
    },
]

function Project() {
    // For each project, map its properties onto html and add it to projectCards array.
    const projectCards = projects.map((proj, index) => {
        return (
            <a href={proj.liveLink} target='_blank' rel='noreferrer' className="project-card md:project-card-md md:hover:project-card-hover md:animate-slideX3">
                <img className='project-icon' src={proj.projectImg} alt="Project Preview" />
                <div className="project-desc md:project-desc-md">
                    <h1 className="font-heading">{proj.projectTitle}</h1>
                    <p>{proj.projectDesc}</p>
                </div>
            </a>
        )
    })

    // We will return a component which contains this array of project cards.
    return (
        <div className=''>
            <div className='project-container md:project-container-md'>
                {projectCards}
            </div>
        </div>
    )
}

export default Project;
