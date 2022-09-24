import React from "react";
import "./Cards.css";

const Cards = ({ title, image, date, text, link }) => {
  return (
    <div className="card__event">
      <img src={image} alt={title} />
      <p className="card__eventDate">{date}</p>
      <p className="card__heading">{title}</p>
      <div className="card__info">
        <p>{text}</p>
        <button className="card__btn">
          <a href={link} target="__blank">
            Register For Free
          </a>
        </button>
      </div>
    </div>
  );
};

export default Cards;
