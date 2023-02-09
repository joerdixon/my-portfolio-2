// Import React
import React from "react";
import Stack from "./Stack";
// Icons/Logos
import loader from '../../../../assets/icons/loader.svg'
import mklogo from '../../../../assets/logos/mklogo.png';
import wizmoji from '../../../../assets/logos/wizardemoji.png'
import gllogo from '../../../../assets/logos/gridlocke1.png'

// TODO: Add slide-in animation on scroll.
// TODO: ! Add the following to the project cards: Tech Stack, Dev Phase (Building, Scaling, Live), GitHub Repo
// TODO: Correct project card proportions and add responsiveness.
// TODO: ! Add my next best projects to flesh out project section.
// TODO: Add better favicons for other projects
// TODO: Fix card responsivness.


// The projects array contains project objects which are then each mapped onto a component which is added to the page.
const projects = [
    {
        title: "Gridlocke",
        img: gllogo,
        stack: ["React", "Tailwind", "Express", "Socket.io", "SQL"],
        desc: "A grid-based card game with lots of replayability and suprisingly deep strategy.",
        link: "https://gridlocke.net/",
    },
    {
        title: "Mortal Kingdoms",
        img: mklogo,
        stack: ["React", "Tailwind", "Express", "SQL"],
        desc: "A wiki style website dedicated to my Dungeons and Dragons DM and his amazing worldbuilding.",
        link: "https://joerdixon.github.io/the-mortal-kingdoms/",
    },
    {
        title: "Trade Wizard",
        img: wizmoji,
        stack: ["HTML", "CSS", "JavaScript", "Bulma"],
        desc: "A card trading application that allows users to search, add and remove cards to work out a deal.",
        link: "https://sullisters.github.io/Trade-Wizard/",
    },
    {
        title: "Code Conflict",
        img: loader,
        stack: ["HTML", "CSS", "JavaScript", "Socket.io"],
        desc: "A rpg-style turn based battle game where you control web developers.",
        link: "https://code-conflict.herokuapp.com/",
    },
    {
        title: "Portfolio v1",
        img: loader,
        stack: ["HTML", "CSS"],
        desc: "My old portfolio, made exclusively with HTML and CSS",
        link: "https://joerdixon.github.io/my-portfolio/",
    },
    {
        title: "Coming Soon",
        img: loader,
        stack: ["...", "..."],
        desc: "Project Loading...",
        link: "#",
    },
    {
        title: "Coming Soon",
        img: loader,
        stack: ["...", "..."],
        desc: "Project Loading...",
        link: "#",
    },
    {
        title: "Coming Soon",
        img: loader,
        stack: ["...", "..."],
        desc: "Project Loading...",
        link: "#",
    },
]

function Project() {
    // For each project, map its properties onto html and add it to projectCards array.
    // TODO: Drop down for description on project cards.
    const projectCards = projects.map((proj, index) => {
        return (
            // The whole card will be a link
            <a href={proj.link} target='_blank' rel='noreferrer' className="project-card md:project-card-md md:hover:project-card-hover md:animate-slideX3">
                <div className="flex flex-col justify-between h-full">
                    {/* Icon, Name, and One-liner */}
                    <section className="flex justify-start pl-4 border-b">
                        <img className='w-[45px]' src={proj.img} alt="Project Preview" />
                        <div className="flex flex-col items-center justify-evenly pl-10">
                            <h1 className="font-heading text-xl">{proj.title}</h1>
                        </div>
                    </section>
                    {/* Project Description */}
                    <section className="project-desc md:project-desc-md">
                        <p>{proj.desc}</p>
                    </section>
                    {/* Stack Used */}
                    <section>
                        <Stack stack={proj.stack} />
                    </section>
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
