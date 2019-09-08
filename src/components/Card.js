import React from 'react';
import { Link } from '@reach/router';
import { CardStyles } from './styles/Cards';
import { StyledCardButton } from './styles/Buttons';

const Card = ({ item, matchCard }) => (
  <CardStyles bgImage={item.imageUrl}>
    { matchCard && <span className="match">{Math.round(item.matchPercent * 100)}%</span> }
    <h2><Link to={`/recipes/${item.id}`}>{item.title}</Link></h2>
    { matchCard && (
      <div className="button-container">
        <StyledCardButton>Add {item.ingredientsNeeded.length} needed items to shopping list</StyledCardButton>
      </div>
    ) }
  </CardStyles>
);

export default Card;