import React from 'react';
import About from "../Pages/About/About"
import Contact from "../Pages/Contact/Contact"
import Projects from "../Pages/Projects/Projects"
import Resume from "../Pages/Resume/Resume"
import './Page.css'

function Page(props) {
    switch(props.view) {
        case "about":
            return (
                <About />
            )
        case "projects":
            return (
                <Projects />
            )
        case "resume":
            return (
                <Resume />
            )
        case "contact":
            return (
                <Contact />
            )
    }
}

export default Page;
