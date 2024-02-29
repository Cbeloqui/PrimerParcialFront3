import React from 'react';

function Card({ animalName, animalDescription }) {
  return (
    <div className="card">
      <h2>{animalName}</h2>
      <p>{animalDescription}</p>
    </div>
  );
}

export default Card;