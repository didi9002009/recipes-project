import React from 'react';
import { connect } from 'react-redux';
import { StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Meals = ({ recipes, active }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <h1>You have ingredients to make...</h1>
      <CardsContainer>
        { recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
          <Card item={recipe} matchCard key={`meals-${recipe.id}`} />
        ))}
      </CardsContainer>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps)(Meals);
