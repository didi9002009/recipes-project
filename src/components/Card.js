import React from 'react';
import { CardStyles } from './styles/Cards';

const Card = ({ item, matchCard }) => (
  <CardStyles>
    { item.imageUrl && <img src={item.imageUrl} alt={item.title} /> }
    <h2>{item.title}</h2>
    { !matchCard && <p>{item.instructions}</p> }
    { matchCard && <p>{Math.round(item.matchPercent * 100)}% of ingredients in pantry</p>}
    { matchCard && (
      <>
        <p>Ingredients needed:</p>
        <ul>
          {item.ingredientsNeeded && item.ingredientsNeeded.map((ing, index) => <li key={index}>{ing}</li>)}
        </ul>
      </>
      )}
  </CardStyles>
);

export default Card;