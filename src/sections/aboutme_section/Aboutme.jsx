import React from "react";
import "./aboutme.css";
import aboutmeimg from "../../assets/mf-avatar.svg";
import githubkillimg from "../../assets/githubskillimg.png";
import linkedingimg from "../../assets/linkedinimg.png";

const Aboutme = () => {
  return (
    <div className="aboutme_section">
      <h1 className="heading">About me</h1>
      <div className="about_me">
        <div className="aboutme_picture_sec">
          <img src={aboutmeimg} alt="" />
        </div>
        <div className="aboutme_para_sec">
          <p>
            I am Raj Kiran B, a dedicated Senior Engineer with a passion for
            developing and implementing innovative solutions. With a strong
            background in Java and Automation Frameworks, I excel at improving
            test efficiency and ensuring on-time project delivery. My experience
            includes leading testing teams, developing web applications with
            HTML, CSS, JavaScript, and React, and designing Restful APIs for
            seamless functionality. I hold a certification in Full Stack
            Development and have been recognized as the Most Valuable Player at
            LTIMindtree. I am eager to continue leveraging my skills and
            expertise to drive success in future projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
