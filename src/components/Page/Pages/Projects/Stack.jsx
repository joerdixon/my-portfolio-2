import React from 'react';
import { Tooltip } from '@material-tailwind/react';

// SVG Import
import skills from '../../../../assets/icons/skills.svg'
// Front End
import js from '../../../../assets/skills/javascript.svg'
import css from "../../../../assets/skills/css.svg"
import html from "../../../../assets/skills/html.svg"
import react from "../../../../assets/skills/react.svg"
import tailwind from "../../../../assets/skills/tailwind.svg"
import bulma from "../../../../assets/skills/bulma.svg"
// Back End
import mysql from "../../../../assets/skills/mysql.svg"
import express from "../../../../assets/skills/express.svg"
import socket from "../../../../assets/skills/socket.svg"
// Other
import d3 from "../../../../assets/skills/d3.svg"
import leaflet from "../../../../assets/skills/leaflet.svg"
import tableau from "../../../../assets/skills/tableau.svg"
import elementor from "../../../../assets/skills/elementor.svg"

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
                        case "Tableau":
                            stackIcon = tableau;
                            stackAlt = "Tableau"
                            break;
                        case "Elementor":
                            stackIcon = elementor;
                            stackAlt = "Elementor"
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