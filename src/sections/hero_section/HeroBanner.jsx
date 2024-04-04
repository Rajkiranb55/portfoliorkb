import React from "react";
import "./herobanner.css";
import bannerimg from "../../assets/banerimg.gif";
const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <div className="banner_intro_div">
        <p>
          <span className="base_intro">Welcome to my portfolio</span>
          <br />
          Hi! I'm Raj Kiran <br />a full stack web developer
        </p>
      </div>
      <div className="banner_img_div">
        <img src={bannerimg} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
