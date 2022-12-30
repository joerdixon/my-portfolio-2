import React from 'react';
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Projects from "./Pages/Projects/Projects"
import Skills from "./Pages/Skills"

// This component is checking for the view state set by the nav bar and rendering the appropriate content.
// TODO: ! Add more/extra page for fun non-professional stuff.

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
    }
}

export default Page;
