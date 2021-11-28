import React from "react";
import './Form.css';

function Form({ handleAddCard }) {
  const [data, setData] = React.useState({
    "name": "",
    "description": "",
    "image": "",
    "price": 0,
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, description, image, price } = data;
    handleAddCard({ name, description, image, price });
    e.target.reset();
  }

  return (
    <div className="form">
      <form className="form__content" onSubmit={handleSubmit}>
        <label className="form__heading">
          Наименование товара
          <div className="form__point"></div>
        </label>
        <input
          type="text"
          className="form__input"
          name="name"
          placeholder="Введите наименование товара"
          required
          onChange={handleChange}
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
          onChange={handleChange}
        >
        </textarea>
        <label className="form__heading">
          Ссылка на изображение товара
          <div className="form__point"></div>
        </label>
        <input
          type="url"
          className="form__input"
          name="image"
          placeholder="Введите ссылку"
          required
          onChange={handleChange}
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
          onChange={handleChange}
        >
        </input>
        <button
          type="submit" className="form__button">Добавить товар</button>
      </form>
    </div>
  );
};

export default Form;