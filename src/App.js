import React, {useState} from "react";
import Header from "./components/Frameponents/Header/Header"
import Footer from "./components/Frameponents/Footer/Footer"
import Page from "./components/Page/Page"
import './styles.css'


// TODO: Add section with the hardware I am using and the games I am playing.
// TODO: Add lightmode

function App() {

  const [view, setView] = useState("about")

  return (
    <div className="App h-screen bg-black flex flex-col justify-between text-main-text font-main">
      <Header view={view} setView={setView} />
      <Page view={view}/>
      <Footer />
    </div>
  );
}

export default App;
