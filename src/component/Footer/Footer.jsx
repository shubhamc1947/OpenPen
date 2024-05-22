import React from "react";
import logoimg from "../../../public/img/logo.png";
import linkedin from "../../../public/img/linkedin.png";
import github from "../../../public/img/github.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        
        <div className="madewith">
          <Link className="link" to="/">
          <img src={logoimg} alt="" />
          <span>Made with 💖 by Shubham Chaturvedi</span>
          </Link>
        </div>
        <div className="follow">
          <div className="">FOLLOW ME ON</div>
          <div className="">
             <a href="https://www.linkedin.com/in/shubhamchat03/" target="_blank" className="linkedin link">
              LINKEDIN
            </a>
          </div>
          <div className="">
            <a href="https://github.com/shubhamc1947" target="_blank" className="github link">
              GITHUB
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
