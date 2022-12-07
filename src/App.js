import React, {useState} from "react";
import Header from "./components/Frameponents/Header/Header"
import Footer from "./components/Frameponents/Footer/Footer"
import Page from "./components/Page/Page"
import './styles.css'


function App() {

  const [view, setView] = useState("about-me")

  return (
    <div className="App">
      <Header view={view} setView={setView} />
      <Page view={view}/>
      <Footer />
    </div>
  );
}

export default App;
