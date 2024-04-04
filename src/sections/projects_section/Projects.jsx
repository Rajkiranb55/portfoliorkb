import React from "react";
import "./project.css";

import "../projects_section/projectCard/projectcard.css";
import ProjectCard from "./projectCard/ProjectCard";
import blockimg from "../../assets/proj_blockbuster.png";
import rec1 from "../../assets/Rectangle 8.png";
import rec2 from "../../assets/Rectangle 16.png";
import rec3 from "../../assets/Rectangle 18.png";
import rec4 from "../../assets/Rectangle 22.png";
const Projects = () => {
  return (
    <div className="project_section">
      <h1 className="heading">Projects</h1>
      <div className="projects_list">
        <div className="project_card">
          <div className="project_card_intro">
            <p className="project_name">Skribble</p>
            <p className="project_desc">
              A MERN stack blog application which enables users to perform CRUD
              operations seamlessly.
            </p>
            <button className="view_project_btn">
              <a href="https://skribble-frontend.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project_card_img_div">
            <img src={rec1} alt="" className="project_img" />
          </div>
        </div>
        <div className="project_card">
          <div className="project_card_intro">
            <p className="project_name">Kloset</p>
            <p className="project_desc">
              An end-to-end robust e-commerce platform with User and Admin UI
              applications using the MERN Stack
            </p>
            <button className="view_project_btn">
              <a href="https://kloset-frontend.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project_card_img_div">
            <img src={rec2} alt="" className="project_img" />
          </div>
        </div>
        <div className="project_card">
          <div className="project_card_intro">
            <p className="project_name">Blockbuster</p>
            <p className="project_desc">
              An Netflix-inspired OTT platform using React.js, offering advanced
              search movies and TV shows.
            </p>
            <button className="view_project_btn">
              <a href="https://blockbuster-gamma.vercel.app/">View Project</a>
            </button>
          </div>
          <div className="project_card_img_div">
            <img src={rec3} alt="" className="project_img" />
          </div>
        </div>
        <div className="project_card">
          <div className="project_card_intro">
            <p className="project_name">Habito</p>
            <p className="project_desc">
              A React Habit Tracker App that allows user to add,update and
              delete Habits and keep track of progress.
            </p>
            <button className="view_project_btn">
              <a href="https://habit-tracker-sigma-bay.vercel.app/">
                View Project
              </a>
            </button>
          </div>
          <div className="project_card_img_div">
            <img src={rec4} alt="" className="project_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
