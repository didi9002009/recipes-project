import React from 'react';
import { Link } from '@reach/router';
import { CardStyles, CardBody } from './styles/Cards';

const Card = ({ item, matchCard }) => (
  <CardStyles bgImage={item.imageUrl}>
    <CardBody>
    <h2><Link to={`/recipes/${item.id}`}>{item.title}</Link></h2>
    {/* { !matchCard && <p>{item.instructions}</p> } */}
    { matchCard && <p>{Math.round(item.matchPercent * 100)}% of ingredients in pantry</p>}
    { matchCard && (
      <>
        <p>Ingredients needed:</p>
        <ul>
          {item.ingredientsNeeded && item.ingredientsNeeded.map((ing, index) => <li key={index}>{ing}</li>)}
        </ul>
      </>
      )}
    </CardBody>
  </CardStyles>
);

export default Card;