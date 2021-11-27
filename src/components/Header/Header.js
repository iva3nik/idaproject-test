import React from 'react';
import './Header.css';
import Menu from '../Menu/Menu';

function Header() {
  return (
    <div className="header">
      <div className="header__title">Добавление товара</div>
      <Menu />
    </div>
  );
};

export default Header;