import React from 'react';
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects/Projects"
import Resume from "./Pages/Resume"

// This component is checking for the view state set by the nav bar and rendering the appropriate content.

function Page(props) {
    switch (props.view) {
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
