import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";

function App() {
  const location = useLocation();
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />

      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <div className="App__main-page-content">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
