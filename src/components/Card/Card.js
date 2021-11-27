import React from "react";
import './Card.css';
import camera from "../../images/camera.png";
import bucket from "../../images/bucket.svg";

function Card() {
  return (
    <div className="card">
      <img className="card__image" src={camera} alt="Камера" />
      <div className="card__description">
        <div className="card__text">
          <h2 className="card__name">Наименование товара</h2>
          <p className="card__about">
            Довольно-таки интересное описание товара в несколько строк.
            Довольно-таки интересное описание товара в несколько строк
          </p>
        </div>
        <div className="card__price">10000 руб.</div>
      </div>
      <button className="card__button-delete">
        <img src={bucket} alt="Кнопка удалить" className="card__icon-delete" />
      </button>
    </div>
  );
};

export default Card;