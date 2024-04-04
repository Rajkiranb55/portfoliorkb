import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo_side">
        <p className="logo_txt">Raj Kiran</p>
      </div>
      <div className="nav_list_side">
        <ul className="menu_items">
          <li>About</li>
          <li>Projects</li>
          <li>
            <button className="resume_button">Resume</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
