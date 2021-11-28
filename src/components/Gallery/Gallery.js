import React from "react";
import './Gallery.css'
import Card from '../Card/Card';

function Gallery({cards}) {
  return (
    <div className="gallery">
      {
        cards && cards.map(card => {
          return (
            <Card
              name={card.name}
              description={card.description}
              image={card.reference}
              price={card.price}
            />
          )
        })
      }
    </div>
  );
};

export default Gallery;