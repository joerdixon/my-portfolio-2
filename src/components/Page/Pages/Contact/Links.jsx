import React from 'react'
// Logo SVG's
import ghsvg from '../../../../assets/logos/github.svg'
import lisvg from '../../../../assets/logos/linkedin.svg'
import lcsvg from '../../../../assets/logos/leetcode.svg'
import sosvg from '../../../../assets/logos/stackoverflow.svg'
import dcsvg from '../../../../assets/logos/discord.svg'

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
        // TODO: Link hovers
        // TODO: Revisit link card design   
        return (
            <a className='sm:w-[375px] w-[200px] border m-4 hover:scale-[1.02] transition-all' href={link.url} target='_blank' rel="noreferrer">
                <div className='flex items-center justify-between p-4'>
                    <img className='w-6' src={link.icon} alt={link.name} />
                    <p className='text-lg'>{link.name}</p>
                </div>
            </a>
        )
    })
    return (

        <div className='flex flex-col justify-center items-center overflow-x-hidden'>
            {linkCards}
        </div>
    );
}

export default Links;