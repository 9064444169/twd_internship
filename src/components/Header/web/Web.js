import React from "react";
import "./Web.css";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#about">About</a>
      </div>
      <div className="web-option">
        <a href="#events">Events</a>
      </div>
      <div className="web-option">
        <a href="#memberships">Memberships</a>
      </div>
      <div className="web-option">
        <a href="#reviews">Reviews</a>
      </div>
      <div className="web-option">
        <a href="#contact">Contact Me</a>
      </div>
    </div>
  );
};

export default Web;
