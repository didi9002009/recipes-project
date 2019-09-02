import React from 'react';
import { CardStyles } from './styles/Cards';

const Card = ({ item, matchCard }) => (
  <CardStyles>
    <h2>{item.title}</h2>
    { !matchCard && <p>{item.instructions}</p> }
    { matchCard && <p>{Math.round(item.matchPercent * 100)}% of ingredients in pantry</p>}
  </CardStyles>
);

export default Card;