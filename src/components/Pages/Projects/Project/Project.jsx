// Import React
import React from "react";
import './Project.css'

const projects = [
    {
        projectTitle: "mortalkingdoms.com",
        projectImg: "#",
        projectDesc: "A wiki style website dedicated to my Dungeons and Dragons DM and his amazing worldbuilding.",
        liveLink: "https://joerdixon.github.io/the-mortal-kingdoms/",
        repoLink: "#",
        techUsed: "HTML, CSS"
    },
    {
        projectTitle: "Trade Wizard",
        projectImg: "#",
        projectDesc: "A card trading application that allows users to search, add and remove cards to work out a deal.",
        liveLink: "https://sullisters.github.io/card-broker/",
        repoLink: "#",
        techUsed: "HTML, CSS, JS, BULMA"
    },
    {
        projectTitle: "Code Conflict: Battle for Fullstack",
        projectImg: "#",
        projectDesc: "A jrpg-style turn based battle game where you control web developers.",
        liveLink: "#",
        repoLink: "#",
        techUsed: "#"
    },
    {
        projectTitle: "Fatal Forge",
        projectImg: "#",
        projectDesc: "Coming soon!",
        liveLink: "#",
        repoLink: "#",
        techUsed: "#"
    },
]

function Project() {
    const projectCards = projects.map((proj, index) => {
        return (
        <div className="projectCard">
            <h1><a target='_blank' href={proj.liveLink} >{proj.projectTitle}</a></h1>
            <img src={proj.projectImg} alt="Project Preview"/>
            <p>{proj.projectDesc}</p>
            <p>{proj.techUsed}</p>
            <p>{proj.repoLink}</p>
        </div>
        )
    })

    return <div className='project-container'>{projectCards}</div>
}

export default Project;
