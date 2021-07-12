import React from "react";
import heroImage from "../../images/sachin.jpeg";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

import "./Home.css";

const Home = () => {
  const logo = "<>sachin</>";
  const navContent = "<say hello!>";
  return (
    <div className="home">
      <div className="navbar">
        <h2>{logo}</h2>
        <h2>{navContent}</h2>
      </div>
      <div className="introduction">
        <h1>
          <span className="introduction__heading">Hi, I am </span> <br />
          <span className="introduction__name">Sachin</span>
        </h1>
        <h3 className="introduction__proffession">Web Developer</h3>
      </div>
      <img className="hero" src={heroImage} alt="" />
      <div className="social__media">
        <i className="im im-github"></i>
        <i className="im im-linkedin"></i>
      </div>
    </div>
  );
};

export default Home;
