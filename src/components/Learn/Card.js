import React from "react";
import "./Card.css";

const Card = ({ title, image, heading }) => {
  return (
    <div className="product">
      <div className="product__img">
        <img src={image} alt={title} />
      </div>

      <div className="product__info">
        <p className="product__heading">{heading}</p>
        <p className="product__text">{title}</p>
      </div>
    </div>
  );
};

export default Card;
