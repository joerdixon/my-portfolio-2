// Import React
import React from "react";
import Stack from "./Stack";
// Icons/Logos
import loader from '../../../../assets/icons/loader.svg'
import mklogo from '../../../../assets/logos/mklogo.svg';
import wizmoji from '../../../../assets/logos/wizardemoji.png'
import gllogo from '../../../../assets/logos/gridlocke1.png'
import ghlogo from "../../../../assets/logos/github.svg"

// TODO: Add slide-in animation on scroll.
// TODO: ! Add the following to the project cards: Dev Phase (Building, Scaling, Live).
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
        repolink: "https://github.com/neft-tk/fatal-forge",
    },
    {
        title: "Mortal Kingdoms",
        img: mklogo,
        stack: ["React", "Tailwind", "Express", "SQL"],
        desc: "A wiki style website dedicated to my Dungeons and Dragons DM and his amazing worldbuilding.",
        link: "https://joerdixon.github.io/the-mortal-kingdoms/",
        repolink: "https://github.com/joerdixon/mortalkingdoms",
    },
    {
        title: "Trade Wizard",
        img: wizmoji,
        stack: ["HTML", "CSS", "JavaScript", "Bulma"],
        desc: "A card trading application that allows users to search, add and remove cards to work out a deal.",
        link: "https://sullisters.github.io/Trade-Wizard/",
        repolink: "https://github.com/Sullisters/Trade-Wizard",
    },
    {
        title: "Code Conflict",
        img: loader,
        stack: ["HTML", "CSS", "JavaScript", "Socket.io"],
        desc: "A rpg-style turn based battle game where you control web developers.",
        link: "https://code-conflict.herokuapp.com/",
        repolink: "https://github.com/neft-tk/Code-Conflict",
    },
    {
        title: "Portfolio V1",
        img: loader,
        stack: ["HTML", "CSS"],
        desc: "My old portfolio, more brochure-y, made exclusively with HTML and CSS",
        link: "https://joerdixon.github.io/my-portfolio/",
        repolink: "https://github.com/joerdixon/my-portfolio",
    },
    {
        title: "The Planar Atlas",
        img: loader,
        stack: ["HTML", "CSS", "JavaScript"],
        desc: "A tool made for my DnD campaign which allows you to chart a course with The Planar Atlas.",
        link: "https://joerdixon.github.io/the-planar-atlas/",
        repolink: "https://github.com/joerdixon/the-planar-atlas",
    },
    // Add icons for this tech.
    {
        title: "Crime DV",
        img: loader,
        stack: ["React", "D3", "Leaflet", "Tableau"],
        desc: "A Data Visualization project about rising crime in Seattle. Done at UW Datathon 2023",
        link: "https://elegant-alpaca-09fa58.netlify.app/",
        repolink: "https://github.com/joerdixon/datathon-presentation",
    },
    {
        title: "Coming Soon",
        img: loader,
        stack: [],
        desc: "Project Loading...",
        link: "#",
        repolink: "",
    },
]

function Project() {
    // For each project, map its properties onto html and add it to projectCards array.
    // TODO: Drop down for description on project cards.
    const projectCards = projects.map((proj, index) => {
        return (
            // The whole card will be a link
            <a href={proj.link} target='_blank' rel='noreferrer' className="project-card md:project-card-md md:hover:project-card-hover md:animate-slideX3">
                <div className="flex flex-col justify-between h-auto w-full">
                    {/* Image */}
                    <section className="flex justify-center pl-8 pr-8 border-b-2 border-stone-700 w-full">
                        <img className='w-32 pt-4 pb-4' src={proj.img} alt="Project Preview" />
                    </section>
                    {/* Name, Phase, Stack */}
                    <section className="title-bar border-b-2 border-stone-700">
                        {/* Title */}
                        <div className="flex items-center justify-evenly p-4 border-r-2 border-stone-700">
                            <h1 className="font-heading text-xl ">{proj.title}</h1>
                        </div>
                        {/* Stack */}
                        <div className="p-4">
                            <Stack stack={proj.stack} />
                        </div>
                        {/* Repo Link */}
                        <div className="border-l-2 border-stone-700 p-4">
                            <a href={proj.repolink} className='flex' target='_blank'><img src={ghlogo} alt="" className="w-[25px]" /></a>
                        </div>
                    </section>
                    {/* Description */}
                    <section>
                        <section className="project-desc xl:project-desc-md">
                            <p className="text-xl">{proj.desc}</p>
                        </section>
                    </section>
                    {/* View */}
                    <section>
                    </section>
                </div>
            </a>
        )
    })

    // We will return a component which contains this array of project cards.
    return (
        <div>
            <div className='project-container md:project-container-md'>
                {projectCards}
            </div>
        </div>
    )
}

export default Project;
