import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { JustifiedRow, StyledRecipesMain, StyledRecipesSection } from './styles/Views';
import { PlusButton } from './styles/Buttons';
import { CardsContainer } from './styles/Cards';
import Card from './Card'

const Recipes = ({ recipes, openModal, active }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <JustifiedRow>
        <h1>Recipes</h1>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </JustifiedRow>
      <CardsContainer>
        { recipes.map(item => <Card item={item} key={item.id} />)}
      </CardsContainer>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

export default Recipes;
