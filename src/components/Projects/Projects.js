import React from "react";
import "./Projects.css";
import apple from "../../images/apple_site_no_shopping.jpeg";
const Projects = () => {
  return (
    <div className="projects">
      <h2>Recent Works</h2>
      <div className="project__details">
        <div className="project__one">
          <h3>Heading 01</h3>
          <img src={apple} alt="" />
        </div>
        <div className="project__two">
          <h3>Heading 02</h3>
          <img src={apple} alt="" />
        </div>{" "}
        <div className="project__three">
          <h3>Heading 03</h3>
          <img src={apple} alt="" />
        </div>{" "}
        <div className="project__four">
          <h3>Heading 04</h3>
          <img src={apple} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
