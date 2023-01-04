import React from 'react'
// Logo SVG's
import ghsvg from '../../../../assets/logos/github.svg'
import lisvg from '../../../../assets/logos/linkedin.svg'
import lcsvg from '../../../../assets/logos/leetcode.svg'

// TODO: 

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
]

function Links() {
    const linkCards = links.map((link, index) => {
        return (
            <a href={link.url} target='_blank' rel="noreferrer">
                <div className='flex flex-col items-center justify-between h-24'>
                    <img className='w-12' src={link.icon} alt={link.name} />
                    <p>{link.name}</p>
                </div>
            </a>
        )
    })
    return (

        <div className='flex justify-evenly w-3/4 mx-auto my-0'>
            {linkCards}
        </div>
    );
}

export default Links;