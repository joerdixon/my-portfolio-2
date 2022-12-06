import React from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Nav from "./components/Navigation/Navigation"
import Project from "./components/Project/Project"


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
