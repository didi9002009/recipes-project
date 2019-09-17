import React from 'react';
import { connect } from 'react-redux';
import { CardStyles } from './styles/Cards';
import { StyledCardButton } from './styles/Buttons';
import { addIngredientsToShoppingList } from '../actions/shopping';
import { setActiveRecipe } from '../actions/app';

const Card = ({ item, matchCard, addIngredientsToShoppingList, setActiveRecipe }) => (
  <CardStyles bgImage={item.imageUrl}>
    { matchCard && <span className="match">{Math.round(item.matchPercent * 100)}%</span> }
    <h2><a role="button" onClick={() => setActiveRecipe(item.id)}>{item.title}</a></h2>
    { matchCard && (
      <div className="button-container">
        <StyledCardButton onClick={() => addIngredientsToShoppingList(item.ingredientsNeeded)}>
          Add {item.ingredientsNeeded.length} needed items to shopping list
        </StyledCardButton>
      </div>
    ) }
  </CardStyles>
);

export default connect(null, { addIngredientsToShoppingList, setActiveRecipe })(Card);