import React from 'react';
import { RecipesContainer } from './styles/Views';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Meals = ({ recipes }) => (
  <RecipesContainer>
    <div>
    <h1>Meals!</h1>
    <CardsContainer>
      { recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
        <Card item={recipe} matchCard />
      ))}
    </CardsContainer>
    </div>
  </RecipesContainer>
);

export default Meals;
