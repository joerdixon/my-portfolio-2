import React from 'react';

// SVG Import
import skills from '../../../../assets/icons/skills.svg'
// Front End
import js from '../../../../assets/skills/javascript.svg'
import css from "../../../../assets/skills/css.svg"
import html from "../../../../assets/skills/html.svg"
import bootstrap from "../../../../assets/skills/bootstrap.svg"
import jquery from "../../../../assets/skills/jquery.svg"
import react from "../../../../assets/skills/react.svg"
import tailwind from "../../../../assets/skills/tailwind.svg"
import bulma from "../../../../assets/skills/bulma.svg"
// Back End
import nodejs from "../../../../assets/skills/nodejs.svg"
import mongodb from "../../../../assets/skills/mongodb.svg"
import mysql from "../../../../assets/skills/mysql.svg"
import express from "../../../../assets/skills/express.svg"
import socket from "../../../../assets/skills/socket.svg"
import graphql from "../../../../assets/skills/graphql.svg"
import netlify from "../../../../assets/skills/netlify.svg"
import heroku from "../../../../assets/skills/heroku.svg"
// Other
import python from "../../../../assets/skills/python.svg"
import photoshop from "../../../../assets/skills/photoshop.svg"
import jest from "../../../../assets/skills/jest.svg"
import java from "../../../../assets/skills/java.svg"
import gitbash from "../../../../assets/skills/git-bash.svg"
import figma from "../../../../assets/skills/figma.svg"


// TODO: Map an icon instead of just the name.
// TODO: Name tooltip on hover.

function Stack({ stack }) {

    return (
        <div>
            <div className='flex justify-evenly items-center'>
                {stack.map((tech, index) => {

                    let stackIcon;
                    let stackAlt;

                    // SVG Icons that are currently used in the project cards.

                    switch (tech) {
                        case "React":
                            stackIcon = react;
                            stackAlt = "React.js"
                            break;
                        case "JavaScript":
                            stackIcon = js;
                            stackAlt = "Javascript"
                            break;
                        case "CSS":
                            stackIcon = css;
                            stackAlt = "CSS"
                            break;
                        case "Tailwind":
                            stackIcon = tailwind;
                            stackAlt = "Tailwind"
                            break;
                        case "Express":
                            stackIcon = express;
                            stackAlt = "Express.js"
                            break;
                        case "Socket.io":
                            stackIcon = socket;
                            stackAlt = "Socket.io"
                            break;
                        case "SQL":
                            stackIcon = mysql;
                            stackAlt = "MySQL"
                            break;
                        case "HTML":
                            stackIcon = html;
                            stackAlt = "HTML"
                            break;
                        case "Bulma":
                            stackIcon = bulma;
                            stackAlt = "Bulma"
                            break;
                    }

                    return (
                        <div key={index}>
                            <img className='stack-item w-6' src={stackIcon} alt={stackAlt} />
                            <span className='tooltip-text'>Test</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stack;