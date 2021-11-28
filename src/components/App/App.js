import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import {defaultCard} from '../../utils/constants';

function App() {
  const [cards, setCards] = React.useState(defaultCard);

  function handleAddCard(data) {
    setCards( [...cards, data] );
  }

  return (
    <div className="page">
      <div className="app">
        <Header />
        <Main cards={cards} handleAddCard={handleAddCard} />
      </div>
    </div>
  );
}

export default App;
