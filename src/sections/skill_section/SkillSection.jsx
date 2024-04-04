import React from "react";
import "./skillsection.css";
import htmlskillimg from "../../assets/htmlskillimg.png";
import cssskillimg from "../../assets/cssskillimg.png";
import jsskillimg from "../../assets/jsskillimg.png";
import reactskillimg from "../../assets/reactjsskillimg.png";
import nextskillimg from "../../assets/nextjsskillimg.png";
import nodejsskillimg from "../../assets/nodejsskillimg.png";
import mondodbskillimg from "../../assets/mongodbskillimg.png";
import expressjskillimg from "../../assets/expressskillimg.png";
import githubkillimg from "../../assets/githubskillimg.png";
const SkillSection = () => {
  return (
    <div className="skill_section">
      <h1 className="heading">Skills</h1>
      <div className="skills_grid">
        <div className="skill_card">
          <img src={htmlskillimg} alt="" className="skill_img" />
          <p className="skill_title">HTML</p>
        </div>
        <div className="skill_card">
          <img src={cssskillimg} alt="" className="skill_img" />
          <p>CSS</p>
        </div>
        <div className="skill_card">
          <img src={jsskillimg} alt="" className="skill_img" />
          <p>Java Script</p>
        </div>
        <div className="skill_card">
          <img src={reactskillimg} alt="" className="skill_img" />
          <p>React Js</p>
        </div>
        <div className="skill_card">
          <img src={nextskillimg} alt="" className="skill_img" />
          <p>Next js</p>
        </div>
        <div className="skill_card">
          <img src={nodejsskillimg} alt="" className="skill_img" />
          <p>Node js</p>
        </div>
        <div className="skill_card">
          <img src={mondodbskillimg} alt="" className="skill_img" />
          <p>MongoDb</p>
        </div>
        <div className="skill_card">
          <img src={expressjskillimg} alt="" className="skill_img" />
          <p>Express Js</p>
        </div>
        {/* <div className="skill_card">
          <img src={githubkillimg} alt="" className="skill_img" />
          <p>Git</p>
        </div> */}
      </div>
    </div>
  );
};

export default SkillSection;
