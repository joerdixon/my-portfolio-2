import React from "react";
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import Project from "./components/Header/Header"


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
