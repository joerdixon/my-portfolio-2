import React from 'react'
// Logo SVG's
import ghsvg from '../../../../assets/logos/github.svg'
import lisvg from '../../../../assets/logos/linkedin.svg'
import lcsvg from '../../../../assets/logos/leetcode.svg'
import sosvg from '../../../../assets/logos/stackoverflow.svg'

// TODO: Add discord
// TODO: Add slack.

const links = [
    {
        name: "GitHub",
        url: "https://github.com/joerdixon",
        icon: ghsvg,
        color: "#FFF"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joerdixon/",
        icon: lisvg,
        color: "#0A66C2"
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/joseph35dixon/",
        icon: lcsvg,
        color: "#F89F1B"
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/20949661/joe-dixon",
        icon: sosvg,
        color: "#F48024"
    },
]

function Links() {

    // For each link, return a link card.
    const linkCards = links.map((link, index) => {
        // TODO: Revisit link card design   
        // TODO: Figure out why links are not changing border color on hover.
        return (
            <a className={`sm:w-[375px] w-[200px] border m-4 rounded hover:scale-[1.02] hover:border-[${link.color}] transition-all`} href={link.url} target='_blank' rel="noreferrer">
                <div className='flex items-center justify-between p-4'>
                    <img className='w-6' src={link.icon} alt={link.name} />
                    <p className='text-lg'>{link.name}</p>
                </div>
            </a>
        )
    })

    // Return the list of link cards.
    return (
        <div className='flex flex-col h-full justify-center items-center overflow-x-hidden'>
            {linkCards}
        </div>
    );
}

export default Links;