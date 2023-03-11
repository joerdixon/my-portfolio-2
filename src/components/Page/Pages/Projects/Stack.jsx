import React from 'react';
import { Tooltip } from '@material-tailwind/react';

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
import d3 from "../../../../assets/skills/d3.svg"
import leaflet from "../../../../assets/skills/leaflet.svg"

// TODO: Add icons for stacks not yet caught in the switch statement.

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
                            stackAlt = "JavaScript"
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
                        case "d3":
                            stackIcon = d3;
                            stackAlt = "d3.js"
                            break;
                        case "Leaflet":
                            stackIcon = leaflet;
                            stackAlt = "Leaflet.js"
                            break;
                        default:
                            stackIcon = skills;
                            stackAlt = "Skills"
                    }

                    return (
                        <div key={index}>
                            {/* Tooltip wraps the svg */}
                            <Tooltip className='bg-[#333] text-white p-2 rounded-md' content={stackAlt} placement='top'>
                                <img className='w-6 aspect-square' src={stackIcon} alt={stackAlt} />
                            </Tooltip>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Stack;