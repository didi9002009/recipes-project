import React from 'react';
import { StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Meals = ({ recipes, active, addToShoppingList }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <h1>You have ingredients to make...</h1>
      <CardsContainer>
        { recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
          <Card item={recipe} matchCard key={recipe.id} addToShoppingList={addToShoppingList} />
        ))}
      </CardsContainer>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

export default Meals;
