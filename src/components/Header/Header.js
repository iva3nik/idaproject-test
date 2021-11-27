import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

function Header() {
  return (
    <div className="header">
      <h2 className="header__title">Добавление товара</h2>
      <Menu />
    </div>
  );
};

export default Header;