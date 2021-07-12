import React from "react";
import "./Contact.css";
import circleText from "../../images/Product_0.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__content">
        <h2>
          <span>Having any Project?</span>
          <br />
          <span> Let's Talk</span>
        </h2>
        <h3>
          Say Hi @{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sachin.apparao@gmail.com"
            target="_blank"
          >
            sachin.apparao@gmail.com
          </a>
        </h3>
      </div>
      <div className="contact__image">
        <img src={circleText} alt="" />
      </div>
    </div>
  );
};

export default Contact;

//
