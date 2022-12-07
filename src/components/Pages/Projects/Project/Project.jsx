// Import React
import React from "react";

const projects = [
    {
        projectTitle: "mortalkingdoms.com",
        projectImg: "#",
        projectDesc: "A wiki-style tribute to my Dungeons and Dragons DM.",
        liveLink: "#",
        repoLink: "#",
        techUsed: "#"
    },
    {
        projectTitle: "Trade Wizard",
        projectImg: "#",
        projectDesc: "A wiki-style tribute to my Dungeons and Dragons DM.",
        liveLink: "#",
        repoLink: "#",
        techUsed: "#"
    },
    {
        projectTitle: "Code Conflict",
        projectImg: "#",
        projectDesc: "A wiki-style tribute to my Dungeons and Dragons DM.",
        liveLink: "#",
        repoLink: "#",
        techUsed: "#"
    },
]

function Project() {
    const projectCards = projects.map((proj, index) => {
        return (
        <div className="projectCard">
            <h1><a href={proj.liveLink} >{proj.projectTitle}</a></h1>
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
