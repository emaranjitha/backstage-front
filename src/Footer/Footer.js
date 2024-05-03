import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  
  return (
    <div className="foot">
      <p>
        Created by :<span>Anita Ihuman</span>
      </p>
      <div className="icons">
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "#387dac" } }}
        >
          <a
            href="https://twitter.com/Anita_ihuman"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTwitter />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "#387dac" } }}
        >
          <a
            href="https://github.com/Anita-ihuman"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "#387dac" } }}
        >
          <a href="https://twitter.com/Anita_ihuman">
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
