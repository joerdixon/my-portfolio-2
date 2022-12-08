// Import React
import React from "react";
import './Project.css';
import loader from '../../../../assets/loader.svg'
import mklogo from '../../../../assets/mklogo.png';
import wizmoji from '../../../../assets/wizardemoji.png'

const projects = [
    {
        projectTitle: "mortalkingdoms",
        projectImg: mklogo,
        projectDesc: "A wiki style website dedicated to my Dungeons and Dragons DM and his amazing worldbuilding.",
        liveLink: "https://joerdixon.github.io/the-mortal-kingdoms/",
    },
    {
        projectTitle: "Trade Wizard",
        projectImg: wizmoji,
        projectDesc: "A card trading application that allows users to search, add and remove cards to work out a deal.",
        liveLink: "https://sullisters.github.io/card-broker/",
    },
    {
        projectTitle: "Code Conflict: Battle for Fullstack",
        projectImg: loader,
        projectDesc: "A jrpg-style turn based battle game where you control web developers.",
        liveLink: "#",
    },
    {
        projectTitle: "Fatal Forge",
        projectImg: loader,
        projectDesc: "Coming soon!",
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
    const projectCards = projects.map((proj, index) => {
        return (
            <a href={proj.liveLink} target='_blank' className="project-card">
                <div className="project-images">
                    <img className='project-icon' src={proj.projectImg} alt="Project Preview" />
                </div>
                <div className="project-desc">
                    <h1><a>{proj.projectTitle}</a></h1>
                    <p>{proj.projectDesc}</p>
                </div>
            </a>
        )
    })

    return (
        <div className='work-container'>
            <div className='project-container'>
            <h1 className='project-hero'>My Projects</h1>
            {projectCards}
            </div>
        </div>
    )
}

export default Project;
