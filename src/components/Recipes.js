import React from 'react';
import { JustifiedRow, StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { AddButton } from './styles/Buttons';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Recipes = ({ recipes, openModal, active }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <JustifiedRow>
        <h1>Recipes</h1>
        <AddButton onClick={() => openModal(true)}>
          Add Recipe
        </AddButton>
      </JustifiedRow>
      <CardsContainer>
        { recipes.map(item => <Card item={item} key={item.id} />)}
      </CardsContainer>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

export default Recipes;
