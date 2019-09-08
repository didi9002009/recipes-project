import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { 
  JustifiedRow,
  StyledIngredientsMain,
  StyledCurrentIngredientsSection,
  StyledQuickAddIngredientsSection,
  StyledIngredientListItem,
} from './styles/Views';

const ShoppingList = ({ recipes, openModal, active, shopping }) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <JustifiedRow>
        <h1>Shopping List</h1>
        <button onClick={() => openModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </JustifiedRow>
      <ul>
        {shopping.map(item => (
          <StyledIngredientListItem key={item.id}>{item.label}</StyledIngredientListItem>
        ))}
      </ul>
    </StyledCurrentIngredientsSection>
    <StyledQuickAddIngredientsSection>
      <h2>Quick Add</h2>
      <p>Coming soon!</p>
    </StyledQuickAddIngredientsSection>
  </StyledIngredientsMain>
);

export default ShoppingList;
