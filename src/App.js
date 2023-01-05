import React, { useState } from "react";
import Header from "./components/Navbar/Header"
import Page from "./components/Page/Page"
import './styles.css'


// TODO: Add lightmode
// TODO: ! Add animation on load
// TODO: Add loading screen while images load.
// TODO: Add spotify api for people to see what I am listening to.
// TODO: ! Add "More" section with the hardware I use, spotify thing, last updated ticker, and buy me a coffee link.
// TODO: ! Super annoying micro-scroll on page side.
// TODO: Add subtle particle effect to the background
// TODO: Add icons to the section headings.
// TODO: Revisit typography.
  
// TODO: Credits to be added to the more section.
// https://worldvectorlogo.com/
// Futurama Bender icon by Icons8


function App() {

  const [view, setView] = useState("about")

  return (
    <div className="App h-screen mx-auto my-0 bg-main-bg md:flex flex-row justify-between text-main-text font-main">
      {/* Header contains the navbar and a nameplate, this is where the view state is changed. */}
      <Header view={view} setView={setView} />
      {/* Page contains the conditionally rendered content based on view state.*/}
      <Page view={view} />
    </div>
  );
}

export default App;
