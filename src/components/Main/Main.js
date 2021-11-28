import React from "react";
import './Main.css';
import Form from "../Form/Form";
import Gallery from "../Gallery/Gallery";

function Main({ cards, handleAddCard }) {
  return (
    <div className="main">
      <Form handleAddCard={handleAddCard} />
      <Gallery cards={cards} />
    </div>
  );
};

export default Main;