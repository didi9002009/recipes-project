import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { AddButton, EditButton, DeleteButton, MathButton } from './styles/Buttons';
import {
  StyledIngredientsMain,
  StyledCurrentIngredientsSection,
  StyledQuickAddIngredientsSection,
  JustifiedRow,
  StyledIngredientListItem,
  AlignedRight,
} from './styles/Views';

const Ingredients = ({
  ingredients,
  openModal,
  updateIngredientMeasurement,
  editIngredient,
  deleteIngredient,
  active
}) => active && (
  <StyledIngredientsMain>
    <StyledCurrentIngredientsSection>
      <AlignedRight>
        
      </AlignedRight>
      <JustifiedRow>
        <h1>Pantry</h1>
        <AddButton onClick={() => openModal(false)}>Add Ingredient</AddButton>
      </JustifiedRow>
      <h2>You have {ingredients.length} ingredient{ingredients.length === 1 ? '' : 's'}:</h2>
      <ul>
        { ingredients.map(item => (
          <StyledIngredientListItem key={item.id}>
            <div>
              <span className="ingredient__label">{item.label} <EditButton onClick={() => editIngredient(item.id)}>Edit</EditButton></span>
              <span className="ingredient__measurement">
                {item.measurement} {item.unit}
                <MathButton onClick={() => updateIngredientMeasurement(item, false)}><FontAwesomeIcon icon={faMinusCircle} /></MathButton> 
                <MathButton onClick={() => updateIngredientMeasurement(item)}><FontAwesomeIcon icon={faPlusCircle} /></MathButton>
              </span>
            </div>
            <DeleteButton onClick={() => deleteIngredient(item.id)}>Delete</DeleteButton>
          </StyledIngredientListItem>
        ))}
      </ul>
    </StyledCurrentIngredientsSection>
    <StyledQuickAddIngredientsSection>
      <h2>Quick Add</h2>
      <p>Coming soon!</p>
    </StyledQuickAddIngredientsSection>
  </StyledIngredientsMain>
);

export default Ingredients;
