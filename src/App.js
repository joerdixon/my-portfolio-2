import React, { useState } from "react";
import Header from "./components/Frameponents/Header/Header"
import Footer from "./components/Frameponents/Footer/Footer"
import Page from "./components/Page/Page"
import './styles.css'


// TODO: Add section with the hardware I am using and the games I am playing.
// TODO: Add lightmode
// TODO: Tailwind refactor and subsequent folder reorg without css files.

function App() {

  const [view, setView] = useState("about")

  return (
    <div className="App h-screen w-4/5 mx-auto my-0 bg-main-bg flex flex-col justify-between text-main-text font-main">
      {/* Header contains the navbar and a nameplate, this is where the view state is changed. */}
      <Header view={view} setView={setView} />
      {/* Page contains the conditionally rendered content based on view state.*/}
      <Page view={view} />
      {/* Footer contains the contact links */}
      <Footer />
    </div>
  );
}

export default App;
