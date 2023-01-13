import React from 'react';
import About from "./Pages/About"
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects"
import Skills from "./Pages/Skills"
import More from './Pages/More';

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
        case "skills":
            return (
                <Skills />
            )
        case "contact":
            return (
                <Contact />
            )
        case "more":
            return (
                <More />
            )
    }
}

export default Page;
