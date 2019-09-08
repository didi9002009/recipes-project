import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { JustifiedRow, StyledRecipesMain, StyledRecipesSection } from './styles/Views';

const ShoppingList = ({ recipes, openModal, active }) => active && (
  <StyledRecipesMain>
    <StyledRecipesSection>
      <JustifiedRow>
        <h1>Shopping List</h1>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </JustifiedRow>
    </StyledRecipesSection>
  </StyledRecipesMain>
);

export default ShoppingList;
