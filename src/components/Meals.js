import React from 'react';
import { RecipesContainer, RecipesList } from './styles/Views';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Meals = ({ recipes, active }) => active && (
  <RecipesContainer>
    <RecipesList>
      <div>
      <h1>You can make...</h1>
      <CardsContainer>
        { recipes.sort((a, b) => b.matchPercent - a.matchPercent).map(recipe => (
          <Card item={recipe} matchCard key={recipe.id} />
        ))}
      </CardsContainer>
      </div>
    </RecipesList>
  </RecipesContainer>
);

export default Meals;
