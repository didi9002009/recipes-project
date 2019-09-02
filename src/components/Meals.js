import React from 'react';
import { RecipesContainer } from './styles/Views';

const Meals = ({ recipes }) => (
  <RecipesContainer>
    <div>
    <h1>Meals!</h1>
    { recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
      <p>{recipe.title}, {Math.round(recipe.matchPercent * 100)}% of ingredients in pantry</p>
    ))}
    </div>
  </RecipesContainer>
);

export default Meals;
