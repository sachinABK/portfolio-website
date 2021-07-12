import React from "react";
import "./About.css";
import sachin from "../../images/sachin.jpeg";
const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about__details">
        <div className="about__details-image">
          <img src={sachin} alt="" />
        </div>
        <div className="about__details-content">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            nobis deleniti. Distinctio molestiae suscipit unde iure eum illum!
            Porro magni repudiandae voluptatum temporibus qui itaque, fugiat
            sapiente. Vitae, qui expedita!
          </p>
          <button>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
