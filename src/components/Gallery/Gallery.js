import React from "react";
import './Gallery.css'
import Card from '../Card/Card';

function Gallery({cards}) {
  return (
    <div className="gallery">
      {
        cards && cards.map((card, index) => {
          return (
            <Card
              name={card.name}
              description={card.description}
              image={card.image}
              price={card.price}
              key={index}
              id={index}
            />
          )
        })
      }
    </div>
  );
};

export default Gallery;