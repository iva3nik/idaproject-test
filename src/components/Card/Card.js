import React from "react";
import './Card.css';
import bucket from "../../images/bucket.svg";

function Card({ name, description, image, price, id }) {
  return (
    <div className="card" id={id}>
      <img className="card__image" src={image} alt="Камера" />
      <div className="card__description">
        <div className="card__text">
          <h2 className="card__name">{name}</h2>
          <p className="card__about">
            {description}
          </p>
        </div>
        <div className="card__price">{price} руб.</div>
      </div>
      <button className="card__button-delete">
        <img src={bucket} alt="Кнопка удалить" className="card__icon-delete" />
      </button>
    </div>
  );
};

export default Card;