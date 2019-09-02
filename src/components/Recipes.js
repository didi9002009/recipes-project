import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { RecipesContainer, RecipesList, JustifiedRow } from './styles/Views';
import { PlusButton } from './styles/Buttons';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Recipes = ({ recipes, openModal }) => (
  <RecipesContainer>
    <RecipesList>
      <JustifiedRow>
        <h1>My Recipes</h1>
        <PlusButton onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </PlusButton>
      </JustifiedRow>
      <CardsContainer>
        { recipes.map(item => <Card item={item} key={item.id} />)}
      </CardsContainer>
    </RecipesList>
  </RecipesContainer>
);

export default Recipes;
