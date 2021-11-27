import React from "react";
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <button className="menu__button">
        По умолчанию
        <div className="menu__icon-arrow-down"></div>
      </button>
    </div>
  );
};

export default Menu;