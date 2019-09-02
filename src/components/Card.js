import React from 'react';
import { CardStyles } from './styles/Cards';

const Card = ({ item }) => (
  <CardStyles>
    <h2>{item.title}</h2>
    <p>{item.instructions}</p>
  </CardStyles>
);

export default Card;