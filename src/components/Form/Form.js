import React from "react";
import './Form.css';

function Form() {
  return (
    <div className="form">
      <form className="form__content">
        <label className="form__heading">
          Наименование товара
          <div className="form__point"></div>
        </label>
        <input
          type="text"
          className="form__input"
          name="name-thing"
          placeholder="Введите наименование товара"
          required
        >
        </input>
        <label className="form__heading">
          Описание товара
          <div className="form__point"></div>
          </label>
        <textarea
          type="text"
          className="form__input form__textarea"
          name="description"
          placeholder="Введите описание товара"
          required
        >
        </textarea>
        <label className="form__heading">
          Ссылка на изображение товара
          <div className="form__point"></div>
          </label>
        <input
          type="url"
          className="form__input"
          name="reference"
          placeholder="Введите ссылку"
          required
        >
        </input>
        <label className="form__heading">
          Цена товара
          <div className="form__point"></div>
          </label>
        <input
          type="number"
          className="form__input"
          name="price"
          placeholder="Введите цену"
          required
        >
        </input>
        <button type="submit" className="form__button">Добавить товар</button>
      </form>
    </div>
  );
};

export default Form;