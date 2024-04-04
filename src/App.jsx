import React from "react";
import Projects from "../src/sections/projects_section/Projects.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import "../src/App.css";
import HeroBanner from "./sections/hero_section/HeroBanner.jsx";
import SkillSection from "./sections/skill_section/SkillSection.jsx";
import Aboutme from "./sections/aboutme_section/Aboutme.jsx";
import Footer from "./sections/footer/Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Aboutme />
      <SkillSection />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
