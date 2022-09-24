import React from "react";
import "./Tutor.css";

const Tutor = ({ title, image, text, designation }) => {
  return (
    <div className="instructor__card">
      <img src={image} alt={title} />
      <p className="instructor__heading">{title}</p>
      <p className="instructor__designation">{designation}</p>
      <div className="instructor__info">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Tutor;
