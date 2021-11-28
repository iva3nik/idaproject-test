import React from "react";
import './Main.css';
import Form from "../Form/Form";
import Gallery from "../Gallery/Gallery";

function Main({cards}) {
  return (
    <div className="main">
      <Form />
      <Gallery cards={cards} />
    </div>
  );
};

export default Main;