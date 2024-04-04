import React from "react";
import "./footer.css";
import githubkillimg from "../../assets/githubskillimg.png";
import linkedingimg from "../../assets/linkedinimg.png";
const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer">
        <span>Raj Kiran</span>
        <ul>
          <li>
            <p>Rajkiranb023@gmail.com</p>
          </li>
          <li>
            <a href="https://github.com/Rajkiranb55" target="_blank">
              <img src={githubkillimg} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raj-kiran-baladhari-150a8215b/"
              target="_blank"
            >
              <img src={linkedingimg} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
