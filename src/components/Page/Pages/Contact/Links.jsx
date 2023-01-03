import React, { useState } from 'react'
// Logo SVG's
import ghsvg from '../../../../assets/logos/github.svg'
import lisvg from '../../../../assets/logos/linkedin.svg'
import lcsvg from '../../../../assets/logos/leetcode.svg'
import gmsvg from '../../../../assets/icons/mail.svg'
import contact from '../../../../assets/icons/contact.svg'

const links = [
    {
        name: "GitHub",
        url: "https://github.com/joerdixon",
        icon: ghsvg
    },
]

function Links() {
    const linkCards = links.map((link, index) => {
        return (
            <a href={link.name} target='_blank' rel="noreferrer">
                <div>
                    <img src={link.icon} alt={link.name} />
                    <p>{link.name}</p>
                </div>
            </a>
        )
    })

    return (
        <div>
            {linkCards}
        </div>
    );
}

export default Links;