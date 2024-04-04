import React from "react";
import "./projectcard.css";
import img1 from "../../../assets/prjimg1.png";
const ProjectCard = ({ img }) => {
  return (
    <div className="project_card">
      <div className="project_card_intro">
        <p className="project_name">Project Name</p>
        <p className="project_desc">
          I created this personal project in order to show how to create an
          interface in Figma using a portfolio as an example.
        </p>
        <button className="view_project_btn">View Project</button>
      </div>
      <div className="project_card_img_div">
        <img src={img} alt="" className="project_img" />
      </div>
    </div>
  );
};

export default ProjectCard;
