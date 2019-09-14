import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import { CardStyles } from './styles/Cards';
import { StyledCardButton } from './styles/Buttons';
import { addIngredientsToShoppingList } from '../actions/shopping';

const Card = ({ item, matchCard, addIngredientsToShoppingList }) => (
  <CardStyles bgImage={item.imageUrl}>
    { matchCard && <span className="match">{Math.round(item.matchPercent * 100)}%</span> }
    <h2><Link to={`/recipes/${item.id}`}>{item.title}</Link></h2>
    { matchCard && (
      <div className="button-container">
        <StyledCardButton onClick={() => addIngredientsToShoppingList(item.ingredientsNeeded)}>
          Add {item.ingredientsNeeded.length} needed items to shopping list
        </StyledCardButton>
      </div>
    ) }
  </CardStyles>
);

export default connect(null, { addIngredientsToShoppingList })(Card);