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
        icon: ghsvg
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joerdixon/",
        icon: lisvg
    },
    {
        name: "LeetCode",
        url: "https://leetcode.com/joseph35dixon/",
        icon: lcsvg
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/20949661/joe-dixon",
        icon: sosvg
    },
]

function Links() {
    const linkCards = links.map((link, index) => {
        return (
            <a href={link.url} target='_blank' rel="noreferrer">
                <div className='flex flex-col items-center justify-between h-24'>
                    <img className='w-20' src={link.icon} alt={link.name} />
                    <p className='text-sm'>{link.name}</p>
                </div>
            </a>
        )
    })
    return (

        <div className='flex flex-wrap justify-evenly w-3/4 mx-auto my-0'>
            {linkCards}
        </div>
    );
}

export default Links;